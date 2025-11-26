# GitHub Pages Setup - Quick Steps

## ✅ Code is Pushed!

Your code is now on GitHub: https://github.com/sid776/marketing-sales-analytics

## 🚀 Enable GitHub Pages

1. **Go to your repository**: https://github.com/sid776/marketing-sales-analytics
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **"GitHub Actions"**
5. Save

## 🔧 Deploy Backend (Required)

Since GitHub Pages is static, you need the backend on Render:

1. Go to https://dashboard.render.com/
2. **New +** → **Web Service**
3. Connect GitHub repo: `sid776/marketing-sales-analytics`
4. Settings:
   - **Name**: `marketing-analytics-backend`
   - **Environment**: `Python 3`
   - **Build**: `pip install -r requirements.txt`
   - **Start**: `cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Copy the backend URL (e.g., `https://marketing-analytics-backend.onrender.com`)

## 🔐 Add Backend URL to GitHub Secrets

1. Repository → **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret**
3. Name: `NEXT_PUBLIC_API_URL`
4. Value: Your Render backend URL
5. **Add secret**

## 🌐 Update Backend CORS

In Render backend:
1. **Environment** tab
2. Add: `FRONTEND_URL` = `https://sid776.github.io/marketing-sales-analytics`
3. **Save Changes** (auto-redeploys)

## ✨ Your Site Will Be Live At:

**https://sid776.github.io/marketing-sales-analytics**

The GitHub Actions workflow will automatically build and deploy on every push to main!

## 📝 Notes

- First deployment takes 3-5 minutes
- Check **Actions** tab for build status
- Backend must be deployed first for file upload to work

