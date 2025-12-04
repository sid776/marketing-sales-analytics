from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import pandas as pd
import numpy as np
from typing import Optional
import io
import sys
import os

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from ml_analyzer import MLAnalyzer
from dl_analyzer import DLAnalyzer
from quantum_analyzer import QuantumAnalyzer

app = FastAPI(title="Marketing & Sales Analytics API")

# CORS origins - add your production frontend URL here
cors_origins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://sid776.github.io",  # GitHub Pages
<<<<<<< HEAD
    "https://sid776.github.io/marketing-sales-analytics",  # GitHub Pages with path
    os.getenv("FRONTEND_URL", ""),  # Add your production frontend URL
=======
    os.getenv("FRONTEND_URL", ""),  # Add your production frontend URL from environment
>>>>>>> 352258cc30ca1ff501036c3a0bda0e8debfe3955
]

# Allow all Amplify domains (using regex)
cors_origin_regex = r"https://.*\.amplifyapp\.com"

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin for origin in cors_origins if origin],  # Filter out empty strings
    allow_origin_regex=cors_origin_regex,  # Allow all Amplify subdomains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ml_analyzer = MLAnalyzer()
dl_analyzer = DLAnalyzer()
quantum_analyzer = QuantumAnalyzer()

@app.get("/")
async def root():
    return {"message": "Marketing & Sales Analytics API", "status": "running"}

@app.get("/health")
async def health():
    return {"status": "healthy"}

@app.post("/api/analyze")
async def analyze_file(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        if file.filename.endswith('.csv'):
            df = pd.read_csv(io.BytesIO(contents))
        elif file.filename.endswith(('.xlsx', '.xls')):
            df = pd.read_excel(io.BytesIO(contents))
        else:
            raise HTTPException(status_code=400, detail="Unsupported file type")
        if df.empty:
            raise HTTPException(status_code=400, detail="File is empty")
        data = df.to_dict('records')
        ml_results = ml_analyzer.analyze(df)
        dl_results = dl_analyzer.analyze(df)
        quantum_results = quantum_analyzer.analyze(df)
        response = {
            "ml": ml_results,
            "dl": dl_results,
            "quantum": quantum_results,
            "rawData": {
                "rowCount": len(df),
                "columnCount": len(df.columns),
                "columns": df.columns.tolist(),
                "sample": df.head(10).to_dict('records')
            }
        }
        return JSONResponse(content=response)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")

@app.get("/api/sample-data")
async def get_sample_data():
    return {
        "sales": [{"month": "Jan", "sales": 45000, "target": 50000}, {"month": "Feb", "sales": 52000, "target": 50000}, {"month": "Mar", "sales": 48000, "target": 50000}, {"month": "Apr", "sales": 61000, "target": 55000}, {"month": "May", "sales": 55000, "target": 55000}, {"month": "Jun", "sales": 67000, "target": 60000}],
        "revenue": [{"quarter": "Q1", "revenue": 145000, "profit": 43500}, {"quarter": "Q2", "revenue": 183000, "profit": 54900}, {"quarter": "Q3", "revenue": 198000, "profit": 59400}, {"quarter": "Q4", "revenue": 215000, "profit": 64500}],
        "segments": [{"name": "Enterprise", "value": 35, "color": "#3b82f6"}, {"name": "SMB", "value": 28, "color": "#fbbf24"}, {"name": "Startup", "value": 22, "color": "#60a5fa"}, {"name": "Individual", "value": 15, "color": "#fcd34d"}],
        "funnel": [{"stage": "Visitors", "count": 10000, "percentage": 100}, {"stage": "Leads", "count": 2500, "percentage": 25}, {"stage": "MQL", "count": 1200, "percentage": 12}, {"stage": "SQL", "count": 600, "percentage": 6}, {"stage": "Opportunities", "count": 300, "percentage": 3}, {"stage": "Customers", "count": 150, "percentage": 1.5}],
        "trends": [{"date": "2024-01", "value": 120}, {"date": "2024-02", "value": 135}, {"date": "2024-03", "value": 128}, {"date": "2024-04", "value": 145}, {"date": "2024-05", "value": 152}, {"date": "2024-06", "value": 168}],
        "metrics": [{"label": "Total Revenue", "value": "$741,000", "change": "+12.5%", "color": "bg-blue-500", "icon": "💰"}, {"label": "Active Customers", "value": "12,450", "change": "+8.2%", "color": "bg-yellow-400", "icon": "👥"}, {"label": "Conversion Rate", "value": "3.2%", "change": "+0.5%", "color": "bg-blue-400", "icon": "📈"}, {"label": "Avg. Order Value", "value": "$245", "change": "+5.1%", "color": "bg-yellow-500", "icon": "🛒"}]
    }

