# Marketing & Sales Analytics Dashboard

A modern, suave analytics dashboard powered by advanced ML, DL, and Quantum algorithms for marketing and sales data analysis.

**Live Demo**: [View on GitHub Pages](https://sid776.github.io/marketing-sales-analytics)

## 🎨 Features

- 🎨 **Modern UI Design** - Beautiful glassmorphism effects with vibrant colors (yellow, blue, white)
- 📊 **Rich Visualizations** - Multiple chart types including line, bar, pie, area, funnel, and radar charts
- 🤖 **ML Analysis** - Machine Learning predictions, classifications, and recommendations using scikit-learn
- 🧠 **DL Analysis** - Deep Learning pattern recognition, forecasting, and sentiment analysis using TensorFlow
- ⚛️ **Quantum Analysis** - Quantum computing optimizations and correlation analysis
- 📁 **File Upload** - Support for CSV and Excel file uploads with drag-and-drop
- 📈 **Real-time Analytics** - Dynamic charts and graphs based on uploaded data

## 🏗️ Architecture

- **Frontend**: Next.js 14 with React, TypeScript, and Tailwind CSS (Static Export for GitHub Pages)
- **Backend**: **100% Pure Python** - FastAPI with ML/DL/Quantum analysis modules
- **ML Library**: scikit-learn for machine learning
- **DL Library**: TensorFlow/Keras for deep learning
- **Quantum**: Simulated quantum algorithms using scipy
- **Data Processing**: Pandas, NumPy for all data operations

## 🚀 Quick Start

### Local Development

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

#### 3. Start Backend

```bash
python start_backend.py
# Or: cd backend && uvicorn main:app --reload --port 8000
```

#### 4. Start Frontend

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment

### GitHub Pages (Frontend)

The frontend is automatically deployed to GitHub Pages via GitHub Actions.

**Your site**: https://sid776.github.io/marketing-sales-analytics

### Backend Deployment (Required)

Deploy the Python backend on [Render](https://render.com) or similar service:

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure:
   - **Environment**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT`
4. Add environment variable: `FRONTEND_URL` = `https://sid776.github.io/marketing-sales-analytics`
5. Copy the backend URL and add it as `NEXT_PUBLIC_API_URL` in GitHub Secrets

See `GITHUB_PAGES_SETUP.md` for detailed instructions.

## 🎨 Color Scheme

- **Blue** (#3b82f6) - Primary accent
- **Yellow** (#fbbf24) - Highlights and metrics
- **White** - Clean background
- **Light Blue** (#60a5fa) - Secondary accents

## 📁 Project Structure

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
│   ├── FileUpload.tsx     # File upload component
│   └── AlgorithmsInfo.tsx # Algorithm dropdowns
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
├── .github/workflows/     # GitHub Actions for deployment
└── README.md              # This file
```

## 🔧 Technology Stack

### Frontend
- **Next.js 14** - React framework (Static Export)
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

## 📝 Usage

1. View the dashboard with sample charts and metrics on the home page
2. Explore ML, DL, and Quantum algorithms in the dropdown sections
3. Upload a CSV or Excel file using the upload area
4. Wait for the analysis to complete (ML, DL, and Quantum algorithms)
5. Explore the detailed analysis results with interactive charts

## 👤 Creator

**Siddharth Jena**
- Email: siddharthjena412@gmail.com
- Phone: 973-204-0395
- GitHub: [@sid776](https://github.com/sid776)

## 📄 License

MIT
