# Plant Disease Detection using Multimodel AI
### *AI-Powered Tomato and Maize Disease Detection System*

A full-stack, responsive AI diagnostic platform designed for farmers, students, and agricultural researchers to identify foliar plant pathologies, assess severity, and obtain actionable management and fertilizer guidance.

---

## 🌾 Supported Crops & Diseases

The system is strictly trained and calibrated for two staple crops:

### 🍅 Tomato (10 Disease Classes)
1. **Healthy Tomato**
2. **Tomato Bacterial Spot** (*Xanthomonas*)
3. **Tomato Early Blight** (*Alternaria solani*)
4. **Tomato Late Blight** (*Phytophthora infestans*)
5. **Tomato Leaf Mold** (*Passalora fulva*)
6. **Tomato Septoria Leaf Spot** (*Septoria lycopersici*)
7. **Tomato Spider Mites** (*Tetranychus urticae*)
8. **Tomato Target Spot** (*Corynespora cassiicola*)
9. **Tomato Mosaic Virus** (*ToMV*)
10. **Tomato Yellow Leaf Curl Virus** (*TYLCV*)

### 🌽 Maize (4 Disease Classes)
1. **Healthy Maize**
2. **Maize Common Rust** (*Puccinia sorghi*)
3. **Maize Northern Leaf Blight** (*Exserohilum turcicum*)
4. **Maize Gray Leaf Spot** (*Cercospora zeae-maydis*)

---

## ✨ Key Features

- **Multi-Model AI Diagnosis:** Instant disease classification with confidence percentage, secondary top predictions, and severity rating (Healthy, Mild, Moderate, Severe).
- **Dual Camera & Upload Options:** 
  - 📷 Direct live device camera capture (mobile environment camera or desktop webcam).
  - 🖼 Image upload (JPG, JPEG, PNG up to 15MB).
- **🎤 Multilingual Voice Description:** Web Speech API integration supporting real-time symptom recording in **English**, **Telugu (తెలుగు)**, and **Hindi (हिन्दी)**.
- **Explainable AI (Grad-CAM):** Interactive toggle between original leaf image and AI Focus Area heatmap overlay.
- **Dynamic Fertilizer Knowledge Base:** 1,000+ record database (`fertilizer_database.json`) automatically matched by crop, pathology, and severity.
- **Disease Library:** Complete visual reference with descriptions, symptoms, favorable conditions, and cultural management.
- **User Dashboard & History:** Secure JWT authentication, user profile management, and historical scan records with view modals.

---

## 🛠 Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS, React Router, Lucide React, Axios
- **Backend:** Python 3.11+, FastAPI, Uvicorn, SQLAlchemy, SQLite, Pydantic, Passlib/Bcrypt, Web Speech API

---

## 🚀 Getting Started

### 1. Backend Setup
```bash
cd backend
python -m venv venv
# Windows:
.\venv\Scripts\activate
# Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
python -m uvicorn main:app --reload --port 8000
```
- API Endpoint: `http://127.0.0.1:8000`
- Swagger UI Documentation: `http://127.0.0.1:8000/docs`

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev -- --host
```
- Frontend UI: `http://localhost:5173`

---

## 📜 License
This project is open-source and intended for educational and agricultural research purposes.
