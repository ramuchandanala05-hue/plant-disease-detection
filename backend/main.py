from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
import models, database
from routers import auth, predict, history

# Create tables
models.Base.metadata.create_all(bind=database.engine)

tags_metadata = [
    {
        "name": "predict",
        "description": "AI multi-model inference for Tomato and Maize leaf pathology with dynamic 1,000+ record fertilizer lookup.",
    },
    {
        "name": "auth",
        "description": "User registration, secure authentication, JWT token issuance, profile updates, and password assistance.",
    },
    {
        "name": "history",
        "description": "Historical diagnostic scan logs and detailed records for logged-in farmers and students.",
    },
]

app = FastAPI(
    title="Plant Disease Detection using Multimodel AI API",
    description="""
## AI-powered Tomato and Maize Disease Detection System API

Interactive API documentation and playground for **Plant Disease Detection using Multimodel AI**.

### 🌿 Supported Crop Pipelines:
* **🍅 Tomato (10 Classes):** Healthy Tomato, Bacterial Spot, Early Blight, Late Blight, Leaf Mold, Septoria Leaf Spot, Spider Mites, Target Spot, Mosaic Virus, Yellow Leaf Curl Virus.
* **🌽 Maize (4 Classes):** Healthy Maize, Common Rust, Northern Leaf Blight, Gray Leaf Spot.

### 🚀 Key Services:
* **`/predict/`**: Upload Tomato or Maize leaf photos with optional multilingual voice notes (English, Telugu, Hindi) for real-time pathology classification, confidence scoring, severity estimation, and dynamic fertilizer recommendations.
* **`/auth/`**: Standard JWT bearer token authentication, bcrypt password hashing, profile edits, and password assistance.
* **`/history/`**: Retrievable scan histories for authenticated users.
    """,
    version="2.0.0",
    openapi_tags=tags_metadata,
)

# Setup CORS
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(predict.router)
app.include_router(history.router)

@app.get("/", tags=["health"])
def read_root():
    return {
        "project": "Plant Disease Detection using Multimodel AI",
        "subtitle": "AI-powered Tomato and Maize Disease Detection System",
        "version": "2.0.0",
        "status": "online",
        "interactive_docs": "http://127.0.0.1:8000/docs",
        "alternative_docs": "http://127.0.0.1:8000/redoc",
        "frontend_website": "http://localhost:5173",
        "supported_crops": ["Tomato", "Maize"]
    }
