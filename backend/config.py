"""
Configuration settings for the backend
"""
import os
from typing import List

class Settings:
    # API Settings
    API_TITLE: str = "Marketing & Sales Analytics API"
    API_VERSION: str = "1.0.0"
    API_DESCRIPTION: str = "Advanced ML, DL & Quantum Analytics Dashboard Backend"
    
    # Server Settings
    HOST: str = os.getenv("HOST", "0.0.0.0")
    PORT: int = int(os.getenv("PORT", "8000"))
    
    # CORS Settings
    CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:5173",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:5173",
        "https://sid776.github.io",  # GitHub Pages
        "https://sid776.github.io/marketing-sales-analytics",  # GitHub Pages with path
    ]
    
    # File Upload Settings
    MAX_FILE_SIZE: int = 50 * 1024 * 1024  # 50MB
    ALLOWED_EXTENSIONS: List[str] = [".csv", ".xlsx", ".xls"]
    
    # Analysis Settings
    ML_CONFIDENCE_THRESHOLD: float = 0.80
    DL_TRAINING_ACCURACY_THRESHOLD: float = 0.90
    QUANTUM_FIDELITY_THRESHOLD: float = 0.95

settings = Settings()

