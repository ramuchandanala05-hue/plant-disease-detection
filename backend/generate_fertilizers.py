import json
import random
import os

CROPS = {
    "Tomato": [
        "Healthy Tomato",
        "Tomato Bacterial Spot",
        "Tomato Early Blight",
        "Tomato Late Blight",
        "Tomato Leaf Mold",
        "Tomato Septoria Leaf Spot",
        "Tomato Spider Mites",
        "Tomato Target Spot",
        "Tomato Mosaic Virus",
        "Tomato Yellow Leaf Curl Virus"
    ],
    "Maize": [
        "Healthy Maize",
        "Maize Common Rust",
        "Maize Northern Leaf Blight",
        "Maize Gray Leaf Spot"
    ]
}

SEVERITIES = ["Mild", "Moderate", "Severe"]

FERTILIZERS = [
    {"name": "NPK 19:19:19", "purpose": "Supports balanced plant growth and recovery", "dosage_range": [2, 4], "unit": "g/L", "method": "Foliar Spray"},
    {"name": "NPK 20:20:20", "purpose": "Provides a quick nutrient boost to stressed plants", "dosage_range": [1, 3], "unit": "g/L", "method": "Foliar Spray"},
    {"name": "NPK 13:0:45", "purpose": "Enhances fruit development and stress resistance", "dosage_range": [3, 5], "unit": "g/L", "method": "Drip Irrigation"},
    {"name": "Calcium Nitrate", "purpose": "Strengthens cell walls to resist pathogenic attacks", "dosage_range": [2, 5], "unit": "g/L", "method": "Soil Application"},
    {"name": "Magnesium Sulphate", "purpose": "Boosts chlorophyll production for recovering leaves", "dosage_range": [2, 3], "unit": "g/L", "method": "Foliar Spray"},
    {"name": "Zinc Sulphate", "purpose": "Aids in enzymatic activities and disease recovery", "dosage_range": [1, 2], "unit": "g/L", "method": "Foliar Spray"},
    {"name": "Micronutrient Mix", "purpose": "Corrects hidden deficiencies affecting immunity", "dosage_range": [2, 4], "unit": "ml/L", "method": "Foliar Spray"},
    {"name": "Boron", "purpose": "Improves flowering and structural integrity", "dosage_range": [1, 1.5], "unit": "g/L", "method": "Soil Application"},
    {"name": "Potash (MOP)", "purpose": "Enhances disease resistance and water retention", "dosage_range": [20, 40], "unit": "kg/acre", "method": "Soil Application"},
    {"name": "Water Soluble Fertilizers", "purpose": "Rapid absorption for immediate symptom relief", "dosage_range": [3, 5], "unit": "g/L", "method": "Fertigation"},
    {"name": "Biofertilizers", "purpose": "Promotes beneficial soil microbes and root health", "dosage_range": [5, 10], "unit": "ml/L", "method": "Soil Drench"},
    {"name": "Azospirillum", "purpose": "Fixes atmospheric nitrogen naturally", "dosage_range": [5, 8], "unit": "ml/L", "method": "Seed/Root Treatment"},
    {"name": "Phosphobacteria", "purpose": "Solubilizes phosphorus for better uptake", "dosage_range": [5, 8], "unit": "ml/L", "method": "Soil Application"}
]

def generate_database():
    records = []
    
    # Generate ~1000 records
    # We have 14 diseases. 
    # For healthy ones (2), severity is "Healthy"
    # For unhealthy ones (12), severity is Mild, Moderate, Severe
    # Total combinations = 2 + 36 = 38
    # To get 1000 records, we can generate ~26 records per combination
    
    for crop, diseases in CROPS.items():
        for disease in diseases:
            is_healthy = "Healthy" in disease
            sevs = ["Healthy"] if is_healthy else SEVERITIES
            
            for severity in sevs:
                # Generate 25-30 records for this combination
                num_records = random.randint(25, 30)
                for _ in range(num_records):
                    fert = random.choice(FERTILIZERS)
                    dosage_val = round(random.uniform(fert["dosage_range"][0], fert["dosage_range"][1]), 1)
                    dosage = f"{dosage_val}{fert['unit']}"
                    
                    record = {
                        "crop": crop,
                        "disease": disease,
                        "severity": severity,
                        "fertilizer_name": fert["name"],
                        "purpose": fert["purpose"],
                        "dosage": dosage,
                        "application_method": fert["method"]
                    }
                    records.append(record)
                    
    # Ensure we have at least 1000
    while len(records) < 1000:
        record = random.choice(records).copy()
        records.append(record)
        
    return records

if __name__ == "__main__":
    db = generate_database()
    output_path = os.path.join(os.path.dirname(__file__), "fertilizer_database.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(db, f, indent=2)
    print(f"Generated {len(db)} fertilizer records in {output_path}")
