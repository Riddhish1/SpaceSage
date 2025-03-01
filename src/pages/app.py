from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
import joblib
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.optimizers.schedules import CosineDecay
import cv2
import shutil
from fastapi.middleware.cors import CORSMiddleware
import os
from transformers import BertTokenizer, TFBertForSequenceClassification


# 🔹 Register custom objects for model loading
custom_objects = {"CosineDecay": CosineDecay}

# 🔹 Load the models
andromeda_model = joblib.load("andromeda.pkl")
habitat_model = joblib.load("habitat.pkl")
galaxy_classifier_model = load_model("galaxy_classifierrr.h5", custom_objects=custom_objects)

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

# 🔹 Define BERT Orbit Classification Model & Load Weights
MODEL_PATH = "bert_orbit_classifier_weights.h5"
bert_model = TFBertForSequenceClassification.from_pretrained("bert-base-uncased", num_labels=5)
bert_model.load_weights(MODEL_PATH)  # Load pre-trained weights

# Orbit classes
orbit_classes = ["LEO", "MEO", "GEO", "HEO", "SSO"]



# 🔹 Label names for galaxy classification
labels = [
    "Round Elliptical", "In-between Elliptical", "Cigar-shaped Elliptical",
    "Edge-on Spiral", "Unbarred Spiral", "Barred Spiral"
]

# 🔹 Initialize FastAPI app
app = FastAPI()

# 🔹 Allow frontend to connect (CORS policy)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔹 Andromeda Model Input Schema
class GalaxyInput(BaseModel):
    distance: float
    velocity: float

# 🔹 Habitat Model Input Schema
class HabitatInput(BaseModel):
    CO2: float
    O2: float
    N2: float
    H2O: float
    Pressure: float
    Albedo: float
    Temperature: float
    Greenhouse: float

class BertInput(BaseModel):
    description: str 


# 🔹 Andromeda Model Endpoint
@app.post("/predict_motion")
def predict_motion(data: GalaxyInput):
    input_data = np.array([[data.distance, data.velocity]])
    prediction = andromeda_model.predict(input_data)[0]
    motion = "Approaching" if prediction == 0 else "Receding"
    return {"motion": motion}

# 🔹 Habitat Model Endpoint
@app.post("/predict_habitability")
def predict_habitability(data: HabitatInput):
    """Predict exoplanet habitability using the Habitat model."""
    input_data = np.array([[data.CO2, data.O2, data.N2, data.H2O, data.Pressure, 
                            data.Albedo, data.Temperature, data.Greenhouse]])
    habitability_score = habitat_model.predict(input_data)[0]
    return {"habitability_score": habitability_score}


@app.post("/predict_orbit")
async def predict_orbit(request: BertInput):
    text = request.description

    if not text:
        return {"error": "No description provided"}

    # Tokenization & conversion
    inputs = tokenizer(text, return_tensors="tf", truncation=True, padding="max_length", max_length=512)

    # Model Prediction
    predictions = bert_model(inputs)[0].numpy()  # Get logits
    predicted_class = np.argmax(predictions, axis=1)[0]
    predicted_orbit = orbit_classes[predicted_class]

    # Assigning altitude ranges for each orbit class
    orbit_altitudes = {
        "LEO": "160-2,000 km",
        "MEO": "2,000-35,786 km",
        "GEO": "35,786 km",
        "HEO": "Above 35,786 km",
        "SSO": "600-800 km"
    }
    
    altitude = orbit_altitudes.get(predicted_orbit, "Unknown")

    return {"orbit_class": predicted_orbit, "altitude": altitude}


# 🔹 Galaxy Classifier Model Endpoint
@app.post("/predict_galaxy_shape")
async def predict_galaxy_shape(file: UploadFile = File(...)):
    try:
        # Save uploaded image temporarily
        temp_path = f"temp_{file.filename}"
        with open(temp_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # 🔹 Load and preprocess the image
        img = cv2.imread(temp_path)  # Read image
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)  # Convert BGR to RGB
        img = cv2.resize(img, (69, 69))  # Resize to match model input shape
        img = img / 255.0  # Normalize pixel values
        img = np.expand_dims(img, axis=0)  # Add batch dimension

        # 🔹 Predict galaxy shape
        prediction = galaxy_classifier_model.predict(img)
        predicted_label_index = np.argmax(prediction)
        predicted_label = labels[predicted_label_index]

        # Delete temporary file
        os.remove(temp_path)

        return {"galaxy_shape": predicted_label}

    except Exception as e:
        return {"error": str(e)}
