# GitHub Pages Deployment Guide

## Setup Steps

### 1. Deploy Backend First (Required)

Since GitHub Pages only supports static sites, you need to deploy the Python backend separately:

**On Render:**
1. Go to https://dashboard.render.com/
2. Click "New +" → "Web Service"
3. Connect GitHub repo: `sid776/marketing-sales-analytics`
4. Configure:
   - **Name**: `marketing-analytics-backend`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Copy the backend URL (e.g., `https://marketing-analytics-backend.onrender.com`)

### 2. Enable GitHub Pages

1. Go to your repository: https://github.com/sid776/marketing-sales-analytics
2. Click **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. Save

### 3. Add Backend URL Secret (Optional)

1. Go to repository **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `NEXT_PUBLIC_API_URL`
4. Value: Your Render backend URL (e.g., `https://marketing-analytics-backend.onrender.com`)
5. Click **Add secret**

### 4. Update Backend CORS

In your Render backend service:
1. Go to **Environment** tab
2. Add variable: `FRONTEND_URL` = `https://sid776.github.io/marketing-sales-analytics`
3. Redeploy

### 5. Push Changes

The GitHub Actions workflow will automatically deploy when you push to main:

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 6. Access Your Site

After deployment (takes 2-3 minutes), your site will be available at:
**https://sid776.github.io/marketing-sales-analytics**

## Important Notes

- The frontend is static and will be served from GitHub Pages
- The backend must be deployed separately (Render recommended)
- Update `NEXT_PUBLIC_API_URL` in GitHub Secrets if your backend URL changes
- The site will rebuild automatically on every push to main branch

## Troubleshooting

- If the site doesn't load, check GitHub Actions tab for build errors
- Make sure backend CORS includes your GitHub Pages URL
- Verify `NEXT_PUBLIC_API_URL` is set correctly in GitHub Secrets

