from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime

class UserBase(BaseModel):
    email: EmailStr
    full_name: str

class UserCreate(UserBase):
    password: str = Field(min_length=6, max_length=50)

class UserUpdate(BaseModel):
    full_name: Optional[str] = Field(None, min_length=2, max_length=100)

class User(UserBase):
    id: int

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

class HistoryBase(BaseModel):
    crop: str
    disease: str
    confidence: float
    severity: Optional[str] = None
    image_url: Optional[str] = None
    voice_description: Optional[str] = None

class HistoryCreate(HistoryBase):
    pass

class History(HistoryBase):
    id: int
    date: datetime
    owner_id: int

    class Config:
        from_attributes = True

class TopPrediction(BaseModel):
    disease: str
    confidence: float

class PredictionResult(BaseModel):
    crop: str
    disease: str
    status: str
    confidence: float
    severity: Optional[str] = None
    voice_description: Optional[str] = None
    disease_information: str
    symptoms: List[str] = []
    contributing_conditions: List[str] = []
    prevention: str
    management: str
    nutrient_guidance: str
    fertilizer_recommendations: List[dict] = []
    top_predictions: List[TopPrediction] = []
    is_demo_mode: bool = True
    demo_note: str = "Demo inference layer with domain knowledge-base lookup. AI model architecture ready for custom checkpoint weights."
