# Marketing & Sales Analytics Backend

Pure Python backend for the Marketing & Sales Analytics Dashboard.

## Architecture

- **Framework**: FastAPI
- **ML Library**: scikit-learn
- **DL Library**: TensorFlow/Keras
- **Data Processing**: Pandas, NumPy
- **Optimization**: SciPy

## Structure

```
backend/
├── __init__.py          # Package initialization
├── main.py              # FastAPI application and routes
├── config.py            # Configuration settings
├── ml_analyzer.py       # Machine Learning analyzer
├── dl_analyzer.py       # Deep Learning analyzer
├── quantum_analyzer.py  # Quantum algorithm analyzer
├── utils.py             # Utility functions
└── README.md            # This file
```

## Features

### Machine Learning (ML)
- Gradient Boosting predictions
- K-Means clustering for customer segmentation
- Anomaly detection
- Actionable recommendations

### Deep Learning (DL)
- LSTM neural networks for forecasting
- Pattern recognition
- Sentiment analysis
- Advanced clustering

### Quantum Algorithms
- Quantum Approximate Optimization Algorithm (QAOA)
- Correlation analysis
- Probability calculations
- Optimization recommendations

## API Endpoints

- `GET /` - API information
- `GET /health` - Health check
- `GET /api/info` - Detailed API capabilities
- `GET /api/sample-data` - Sample dashboard data
- `POST /api/analyze` - Analyze uploaded file (CSV/Excel)

## Running the Backend

```bash
# Install dependencies
pip install -r requirements.txt

# Run with uvicorn
uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000

# Or use the startup script
python start_backend.py
```

## Configuration

Edit `config.py` to customize:
- CORS origins
- File size limits
- Analysis thresholds
- Server settings

## Error Handling

The backend includes comprehensive error handling for:
- Invalid file types
- File size limits
- Empty files
- Parsing errors
- Analysis failures

All errors are logged and return appropriate HTTP status codes.

