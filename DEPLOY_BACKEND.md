# 🚀 Backend Deployment Guide

## Quick Deploy Options

### Option 1: Deploy on Railway (Recommended - Fastest)

1. **Go to Railway:** https://railway.app/
2. **Sign up/Login** with GitHub
3. **Click "New Project"** → **"Deploy from GitHub repo"**
4. **Select repository:** `sid776/marketing-sales-analytics`
5. **Configure:**
   - Railway will auto-detect Python
   - **Root Directory:** Leave empty (or set to `backend` if needed)
   - **Start Command:** `cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT`
6. **Add Environment Variables:**
   - Click on your service → **Variables** tab
   - Add: `FRONTEND_URL` = `https://sid776.github.io/marketing-sales-analytics`
7. **Deploy:**
   - Railway will automatically build and deploy
   - Wait 2-3 minutes for deployment
8. **Get Backend URL:**
   - Railway will provide a URL like: `https://marketing-analytics-backend-production.up.railway.app`
   - Copy this URL
9. **Update GitHub Secret:**
   - Go to: https://github.com/sid776/marketing-sales-analytics/settings/secrets/actions
   - Add/Update: `NEXT_PUBLIC_API_URL` = `[your-railway-backend-url]`
10. **Trigger Frontend Redeploy:**
    - Go to Actions tab → "Deploy to GitHub Pages" → "Run workflow"

### Option 2: Deploy on Render

1. **Go to Render:** https://dashboard.render.com/
2. **Sign up/Login** with GitHub
3. **Click "New +"** → **"Web Service"**
4. **Connect GitHub repository:** `sid776/marketing-sales-analytics`
5. **Configure:**
   - **Name:** `marketing-analytics-backend`
   - **Environment:** `Python 3`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT`
6. **Add Environment Variables:**
   - `FRONTEND_URL` = `https://sid776.github.io/marketing-sales-analytics`
7. **Deploy:**
   - Click "Create Web Service"
   - Wait 3-5 minutes for first deployment
8. **Get Backend URL:**
   - Render will provide: `https://marketing-analytics-backend.onrender.com`
   - Copy this URL
9. **Update GitHub Secret:**
   - Go to: https://github.com/sid776/marketing-sales-analytics/settings/secrets/actions
   - Add/Update: `NEXT_PUBLIC_API_URL` = `[your-render-backend-url]`
10. **Trigger Frontend Redeploy:**
    - Go to Actions tab → "Deploy to GitHub Pages" → "Run workflow"

### Option 3: Deploy on Heroku

1. **Install Heroku CLI:** https://devcenter.heroku.com/articles/heroku-cli
2. **Login:** `heroku login`
3. **Create App:** `heroku create marketing-analytics-backend`
4. **Set Buildpack:** `heroku buildpacks:set heroku/python`
5. **Set Environment Variable:**
   - `heroku config:set FRONTEND_URL=https://sid776.github.io/marketing-sales-analytics`
6. **Deploy:** `git push heroku main`
7. **Get URL:** `heroku info` (will show web URL)
8. **Update GitHub Secret** with Heroku URL

## Verify Backend is Working

After deployment, test your backend:

```bash
# Test health endpoint
curl https://[your-backend-url]/health

# Should return: {"status": "healthy"}
```

## Current Status

✅ **Frontend:** Deployed on GitHub Pages  
✅ **Backend Code:** Ready in `backend/` directory  
⏳ **Backend Deployment:** Choose one option above

## Important Notes

- **CORS is configured** to allow requests from GitHub Pages
- **Backend URL** must be added to GitHub Secrets as `NEXT_PUBLIC_API_URL`
- **Frontend will auto-redeploy** when you push changes or update the secret
- **Free tiers** on Railway/Render may spin down after inactivity (first request may be slow)

## Troubleshooting

### Backend not responding?
- Check deployment logs on Railway/Render dashboard
- Verify environment variables are set
- Check that `/health` endpoint returns `{"status": "healthy"}`

### CORS errors?
- Make sure `FRONTEND_URL` environment variable is set in backend
- Verify backend CORS includes GitHub Pages URL

### Frontend can't connect?
- Verify `NEXT_PUBLIC_API_URL` secret is set in GitHub
- Trigger a new frontend deployment after setting the secret
- Check browser console for specific error messages

