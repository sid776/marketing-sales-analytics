# Deployment Guide for Marketing & Sales Analytics Dashboard

## Option 1: Render (Recommended - Full Stack)

### Backend Deployment (Python FastAPI)

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository: `https://github.com/sid776/marketing-sales-analytics`
4. Configure:
   - **Name**: `marketing-analytics-backend`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT`
   - **Root Directory**: Leave empty (or use `/`)

5. Add Environment Variables (if needed):
   - `PYTHON_VERSION=3.11.0`

6. Click "Create Web Service"

### Frontend Deployment (Next.js)

1. In Render Dashboard, click "New +" → "Web Service"
2. Connect the same GitHub repository
3. Configure:
   - **Name**: `marketing-analytics-frontend`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Root Directory**: Leave empty

4. Add Environment Variables:
   - `NODE_ENV=production`
   - `NEXT_PUBLIC_API_URL=https://marketing-analytics-backend.onrender.com` (use your backend URL)

5. Update `app/page.tsx` to use the environment variable:
   ```typescript
   const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
   ```

6. Click "Create Web Service"

## Option 2: Vercel (Frontend) + Render (Backend)

### Frontend on Vercel:
1. Go to [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Vercel will auto-detect Next.js
4. Add environment variable: `NEXT_PUBLIC_API_URL` pointing to your Render backend
5. Deploy!

### Backend on Render:
Follow the backend deployment steps from Option 1.

## Option 3: GitHub Pages (Static Export - Limited)

⚠️ **Note**: GitHub Pages only supports static sites. You'll need to:
1. Export Next.js as static: Update `next.config.js` with `output: 'export'`
2. Deploy backend separately on Render
3. Update API URLs to point to Render backend

## Quick Deploy Commands

After pushing to GitHub:

```bash
# Render will auto-deploy from your GitHub repo
# Just connect the repo in Render dashboard
```

## Post-Deployment

1. Update CORS in `backend/main.py` to include your frontend URL
2. Update API URLs in frontend to use production backend URL
3. Test the deployment!

