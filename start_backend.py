#!/usr/bin/env python3
"""
Start script for the Python backend server
"""
import uvicorn
import sys
import os

# Add backend directory to path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'backend'))

if __name__ == "__main__":
    print("Starting Marketing & Sales Analytics API")
    print("Server: http://0.0.0.0:8000")
    print("API Docs: http://localhost:8000/docs")
    print("-" * 50)
    
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )

