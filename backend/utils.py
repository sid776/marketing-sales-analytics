"""
Utility functions for the backend
"""
import pandas as pd
import numpy as np
from typing import Dict, List, Any

def validate_dataframe(df: pd.DataFrame) -> Dict[str, Any]:
    """
    Validate and get statistics about a dataframe
    """
    stats = {
        "rowCount": len(df),
        "columnCount": len(df.columns),
        "columns": df.columns.tolist(),
        "numericColumns": df.select_dtypes(include=[np.number]).columns.tolist(),
        "categoricalColumns": df.select_dtypes(include=['object']).columns.tolist(),
        "missingValues": df.isnull().sum().to_dict(),
        "dataTypes": df.dtypes.astype(str).to_dict()
    }
    return stats

def clean_dataframe(df: pd.DataFrame) -> pd.DataFrame:
    """
    Clean dataframe by removing completely empty rows/columns
    """
    # Remove rows where all values are NaN
    df = df.dropna(how='all')
    # Remove columns where all values are NaN
    df = df.dropna(axis=1, how='all')
    return df

def get_data_summary(df: pd.DataFrame) -> Dict[str, Any]:
    """
    Get summary statistics for numeric columns
    """
    numeric_cols = df.select_dtypes(include=[np.number]).columns
    summary = {}
    
    for col in numeric_cols:
        summary[col] = {
            "mean": float(df[col].mean()) if not df[col].empty else 0,
            "std": float(df[col].std()) if not df[col].empty else 0,
            "min": float(df[col].min()) if not df[col].empty else 0,
            "max": float(df[col].max()) if not df[col].empty else 0,
            "median": float(df[col].median()) if not df[col].empty else 0,
        }
    
    return summary

