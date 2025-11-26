# Enable GitHub Pages - Step by Step

## The 404 means GitHub Pages isn't enabled yet. Follow these exact steps:

### Step 1: Go to Pages Settings

**Direct Link**: https://github.com/sid776/marketing-sales-analytics/settings/pages

### Step 2: Configure Source

1. Scroll down to **"Build and deployment"** section
2. Under **"Source"**, you'll see a dropdown
3. **IMPORTANT**: Select **"GitHub Actions"** from the dropdown
   - NOT "Deploy from a branch"
   - NOT "None"
   - Select **"GitHub Actions"**
4. Click **"Save"**

### Step 3: Check Actions Tab

1. Go to: https://github.com/sid776/marketing-sales-analytics/actions
2. You should see a workflow called **"Deploy to GitHub Pages"**
3. If it shows a yellow dot, it's running
4. If it shows a red X, click on it to see the error
5. If it shows a green checkmark, the deployment succeeded!

### Step 4: If Workflow Isn't Running

1. In the Actions tab, click **"Deploy to GitHub Pages"** workflow
2. Click the **"Run workflow"** button (top right, dropdown)
3. Select branch: **"main"**
4. Click **"Run workflow"** button

### Step 5: Wait for Deployment

- First deployment: 3-5 minutes
- Watch the Actions tab for progress
- When you see green checkmarks, it's done!

### Step 6: Access Your Site

Once deployed, your site will be at:
**https://sid776.github.io/marketing-sales-analytics**

## Troubleshooting

**Still 404 after 5 minutes?**
- Check Actions tab for errors
- Make sure "GitHub Actions" is selected (not "Deploy from a branch")
- Try manually running the workflow

**Workflow failing?**
- Check the error logs in Actions
- Common issues: missing dependencies, build errors

**Can't find Pages settings?**
- Make sure you're logged in as sid776
- Make sure you have admin access to the repository

