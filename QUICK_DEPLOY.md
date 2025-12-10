# ⚡ Quick Backend Deployment

## Your Backend URL (from error message):
`https://marketing-analytics-backend-production.up.railway.app`

## If Backend is Already on Railway:

### Step 1: Configure Environment Variable
1. Go to: https://railway.app/
2. Open your project: `marketing-analytics-backend-production`
3. Click on the service → **Variables** tab
4. Add/Update:
   - **Key:** `FRONTEND_URL`
   - **Value:** `https://sid776.github.io/marketing-sales-analytics`
5. **Redeploy** the service (Railway will auto-redeploy when you save)

### Step 2: Update GitHub Secret
1. Go to: https://github.com/sid776/marketing-sales-analytics/settings/secrets/actions
2. Click **"New repository secret"**
3. **Name:** `NEXT_PUBLIC_API_URL`
4. **Value:** `https://marketing-analytics-backend-production.up.railway.app`
5. Click **"Add secret"**

### Step 3: Trigger Frontend Deployment
1. Go to: https://github.com/sid776/marketing-sales-analytics/actions
2. Click **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** → **"Run workflow"** button
4. Wait 3-5 minutes for deployment

### Step 4: Test
1. Visit: https://sid776.github.io/marketing-sales-analytics/
2. Try uploading a CSV/Excel file
3. Should work now! ✅

---

## If Backend Needs to be Deployed:

See `DEPLOY_BACKEND.md` for detailed instructions on:
- Railway deployment
- Render deployment  
- Heroku deployment

---

## Verify Backend is Working:

Test the health endpoint:
```bash
curl https://marketing-analytics-backend-production.up.railway.app/health
```

Should return: `{"status": "healthy"}`

If it doesn't work, the backend might be sleeping (free tier). Try the endpoint in a browser first to wake it up.

