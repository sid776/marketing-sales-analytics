# Push to GitHub - Quick Guide

## Step 1: Create Repository on GitHub

1. Go to: https://github.com/new
2. Repository name: `marketing-sales-analytics`
3. Description: "Marketing & Sales Analytics Dashboard with ML, DL, and Quantum algorithms"
4. Choose Public or Private
5. **IMPORTANT**: Do NOT check "Add a README file", "Add .gitignore", or "Choose a license"
6. Click "Create repository"

## Step 2: Push to GitHub

After creating the repository, run these commands:

```bash
git remote add origin https://github.com/sid776/marketing-sales-analytics.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy on Render

### Backend (Python FastAPI)

1. Go to https://dashboard.render.com/
2. Click "New +" → "Web Service"
3. Connect GitHub and select `sid776/marketing-sales-analytics`
4. Configure:
   - **Name**: `marketing-analytics-backend`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Click "Create Web Service"
6. Copy the backend URL (e.g., `https://marketing-analytics-backend.onrender.com`)

### Frontend (Next.js)

1. In Render, click "New +" → "Web Service"
2. Connect same repository
3. Configure:
   - **Name**: `marketing-analytics-frontend`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
4. Add Environment Variable:
   - **Key**: `NEXT_PUBLIC_API_URL`
   - **Value**: Your backend URL from above
5. Click "Create Web Service"

### Update Backend CORS

1. Go to backend service → Environment tab
2. Add variable: `FRONTEND_URL` = your frontend URL
3. Redeploy backend

## Alternative: Vercel for Frontend

1. Go to https://vercel.com/
2. Import GitHub repository
3. Add env var: `NEXT_PUBLIC_API_URL` = your Render backend URL
4. Deploy!

Your dashboard will be live! 🚀

