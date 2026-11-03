from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm
import models, schemas, auth, database
from datetime import timedelta
import logging
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr
from sqlalchemy import text

# Configure basic logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter(prefix="/auth", tags=["auth"])

class ForgotPasswordRequest(BaseModel):
    email: EmailStr

@router.post("/register")
def register_user(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
    logger.info(f"Received registration request for email: {user.email}")
    try:
        # Check DB connection by making a dummy query
        db.execute(text("SELECT 1"))
    except Exception as e:
        logger.error(f"Database connection failed: {str(e)}")
        return JSONResponse(status_code=500, content={"success": False, "message": f"Database connection failed: {str(e)}"})

    if len(user.password) < 6:
        return JSONResponse(status_code=400, content={"success": False, "message": "Password must be at least 6 characters long"})
        
    if len(user.password) > 50:
        return JSONResponse(status_code=400, content={"success": False, "message": "Password cannot exceed 50 characters"})

    try:
        db_user = db.query(models.User).filter(models.User.email == user.email).first()
        if db_user:
            logger.warning(f"Registration failed: Email already exists - {user.email}")
            return JSONResponse(status_code=400, content={"success": False, "message": "Email already exists"})
        
        hashed_password = auth.get_password_hash(user.password)
        new_user = models.User(email=user.email, full_name=user.full_name, hashed_password=hashed_password)
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        logger.info(f"Successfully registered user: {user.email}")
        
        return {
            "success": True,
            "id": new_user.id,
            "email": new_user.email,
            "full_name": new_user.full_name
        }
    except Exception as e:
        logger.error(f"Registration exception: {str(e)}")
        db.rollback()
        return JSONResponse(status_code=500, content={"success": False, "message": f"Internal Server Error: {str(e)}"})

@router.post("/login", response_model=schemas.Token)
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(database.get_db)):
    user = db.query(models.User).filter(models.User.email == form_data.username).first()
    if not user or not auth.verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/me", response_model=schemas.User)
def read_users_me(current_user: models.User = Depends(auth.get_current_user)):
    return current_user

@router.put("/profile", response_model=schemas.User)
def update_user_profile(
    profile_update: schemas.UserUpdate, 
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(database.get_db)
):
    if profile_update.full_name:
        current_user.full_name = profile_update.full_name
    db.commit()
    db.refresh(current_user)
    return current_user

@router.post("/forgot-password")
def forgot_password(req: ForgotPasswordRequest, db: Session = Depends(database.get_db)):
    user = db.query(models.User).filter(models.User.email == req.email).first()
    if not user:
        return JSONResponse(status_code=404, content={"success": False, "message": "No account found with this email address."})
    return {
        "success": True, 
        "message": f"Password reset instructions have been dispatched to {req.email}. (Demo: use your existing password or register a new account)."
    }
