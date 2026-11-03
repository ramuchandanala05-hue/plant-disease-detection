from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
import models, schemas, auth, database

router = APIRouter(prefix="/history", tags=["history"])

@router.get("/", response_model=List[schemas.History])
def get_history(skip: int = 0, limit: int = 100, current_user: models.User = Depends(auth.get_current_user), db: Session = Depends(database.get_db)):
    histories = db.query(models.History).filter(models.History.owner_id == current_user.id).order_by(models.History.date.desc()).offset(skip).limit(limit).all()
    return histories
