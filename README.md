# Marketing & Sales Analytics Dashboard

A modern, suave analytics dashboard powered by advanced ML, DL, and Quantum algorithms for marketing and sales data analysis.

## Architecture

- **Frontend**: Next.js 14 with React, TypeScript, and Tailwind CSS
- **Backend**: **100% Pure Python** - FastAPI with ML/DL/Quantum analysis modules
- **ML Library**: scikit-learn for machine learning
- **DL Library**: TensorFlow/Keras for deep learning
- **Quantum**: Simulated quantum algorithms using scipy
- **Data Processing**: Pandas, NumPy for all data operations

## Features

- 🎨 **Modern UI Design** - Beautiful glassmorphism effects with vibrant colors (yellow, violet, green, light blue)
- 📊 **Rich Visualizations** - Multiple chart types including line, bar, pie, area, funnel, and radar charts
- 🤖 **ML Analysis** - Machine Learning predictions, classifications, and recommendations using scikit-learn
- 🧠 **DL Analysis** - Deep Learning pattern recognition, forecasting, and sentiment analysis using TensorFlow
- ⚛️ **Quantum Analysis** - Quantum computing optimizations and correlation analysis
- 📁 **File Upload** - Support for CSV and Excel file uploads with drag-and-drop
- 📈 **Real-time Analytics** - Dynamic charts and graphs based on uploaded data

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm
- Python 3.8+
- pip

### Installation

#### 1. Install Python Dependencies

```bash
pip install -r requirements.txt
```

#### 2. Install Frontend Dependencies

```bash
npm install
# or
pnpm install
```

### Running the Application

#### Start Python Backend (Terminal 1)

```bash
python start_backend.py
```

Or directly:
```bash
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The backend will be available at `http://localhost:8000`

#### Start Frontend (Terminal 2)

```bash
npm run dev
# or
pnpm dev
```

The frontend will be available at `http://localhost:3000`

## API Endpoints

- `GET /` - API health check
- `GET /health` - Health status
- `GET /api/sample-data` - Get sample dashboard data
- `POST /api/analyze` - Upload and analyze a file (CSV/Excel)

## Technology Stack

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Recharts** - Chart library
- **Framer Motion** - Animations

### Backend
- **FastAPI** - Modern Python web framework
- **Pandas** - Data manipulation
- **NumPy** - Numerical computing
- **scikit-learn** - Machine learning
- **TensorFlow** - Deep learning
- **scipy** - Scientific computing

## Usage

1. Start both backend and frontend servers
2. View the dashboard with sample charts and metrics on the home page
3. Upload a CSV or Excel file using the upload area
4. Wait for the analysis to complete (ML, DL, and Quantum algorithms)
5. Explore the detailed analysis results with interactive charts

## Color Scheme

- **Violet** (#8b5cf6) - Primary accent
- **Yellow** (#fbbf24) - Highlights and metrics
- **Green** (#10b981) - Success indicators
- **Light Blue** (#38bdf8) - Secondary accents

## Project Structure

```
marketing/
├── app/                    # Next.js app directory (Frontend)
│   ├── page.tsx           # Main page
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/            # React components (Frontend)
│   ├── charts/            # Chart components
│   ├── analysis/         # Analysis result components
│   ├── Dashboard.tsx     # Main dashboard
│   └── FileUpload.tsx     # File upload component
├── backend/               # 100% Pure Python Backend
│   ├── __init__.py        # Package initialization
│   ├── main.py            # FastAPI application & routes
│   ├── config.py          # Configuration settings
│   ├── ml_analyzer.py     # ML analysis module (scikit-learn)
│   ├── dl_analyzer.py     # DL analysis module (TensorFlow)
│   ├── quantum_analyzer.py # Quantum analysis module (scipy)
│   ├── utils.py           # Utility functions
│   └── README.md          # Backend documentation
├── requirements.txt       # Python dependencies
├── package.json           # Node.js dependencies (Frontend only)
├── start_backend.py       # Python backend startup script
└── README.md              # This file
```

## Backend Architecture

The backend is **100% Pure Python** with no JavaScript/TypeScript dependencies:

- **FastAPI**: Modern, fast web framework
- **Pandas**: Data manipulation and analysis
- **NumPy**: Numerical computing
- **scikit-learn**: Machine learning algorithms
- **TensorFlow**: Deep learning models
- **SciPy**: Scientific computing and optimization

All data processing, analysis, and business logic runs entirely in Python.

## License

MIT
