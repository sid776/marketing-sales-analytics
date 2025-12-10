# 🚀 Backend Setup Guide

## Your GitHub Pages site is WORKING! ✅

The frontend is deployed and accessible at:
**https://sid776.github.io/marketing-sales-analytics**

## Now You Need to Deploy the Backend

The error shows the backend URL is: `https://marketing-analytics-backend-production.up.railway.app`

### Option 1: Use Railway (If Already Deployed)

If your backend is already on Railway:

1. **Update CORS in Railway:**
   - Go to your Railway project
   - Add environment variable: `FRONTEND_URL` = `https://sid776.github.io/marketing-sales-analytics`
   - Redeploy the service

2. **Update GitHub Secrets:**
   - Go to: https://github.com/sid776/marketing-sales-analytics/settings/secrets/actions
   - Add/Update secret: `NEXT_PUBLIC_API_URL` = `https://marketing-analytics-backend-production.up.railway.app`
   - This will trigger a new frontend deployment

### Option 2: Deploy on Render (Recommended)

1. **Go to Render:** https://dashboard.render.com/
2. **Click "New +" → "Web Service"**
3. **Connect GitHub repo:** `sid776/marketing-sales-analytics`
4. **Configure:**
   - **Name**: `marketing-analytics-backend`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT`
5. **Add Environment Variables:**
   - `FRONTEND_URL` = `https://sid776.github.io/marketing-sales-analytics`
6. **Copy the backend URL** (e.g., `https://marketing-analytics-backend.onrender.com`)
7. **Add to GitHub Secrets:**
   - Go to: https://github.com/sid776/marketing-sales-analytics/settings/secrets/actions
   - Add secret: `NEXT_PUBLIC_API_URL` = `[your-render-backend-url]`
8. **Trigger new deployment:**
   - Go to Actions tab
   - Click "Run workflow" on "Deploy to GitHub Pages"

### Option 3: Deploy on Railway (New)

1. **Go to Railway:** https://railway.app/
2. **Click "New Project" → "Deploy from GitHub repo"**
3. **Select your repository**
4. **Configure:**
   - **Root Directory**: `backend`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. **Add Environment Variables:**
   - `FRONTEND_URL` = `https://sid776.github.io/marketing-sales-analytics`
6. **Copy the backend URL**
7. **Add to GitHub Secrets** (same as Option 2)

## After Backend is Deployed:

1. **Wait 2-3 minutes** for backend to start
2. **Test backend:** Visit `https://[your-backend-url]/health`
   - Should return: `{"status": "healthy"}`
3. **Update GitHub Secrets** with backend URL
4. **Trigger frontend redeployment** (or wait for next push)
5. **Test the site** - file upload should work now!

## Quick Test:

Once backend is deployed, test it:
```bash
curl https://[your-backend-url]/health
```

Should return: `{"status": "healthy"}`

## Current Status:

✅ Frontend: **DEPLOYED** on GitHub Pages  
❌ Backend: **NEEDS DEPLOYMENT**

Choose one of the options above to deploy your backend!


