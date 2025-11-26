# GitHub Authentication Guide

## You're seeing a device authorization prompt

This means GitHub needs to verify your identity. Here are your options:

## Option 1: Personal Access Token (Easiest)

### Step 1: Create Token
1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Fill in:
   - **Note**: `marketing-dashboard-deploy`
   - **Expiration**: Choose 90 days or No expiration
   - **Select scopes**: Check ✅ **`repo`** (Full control of private repositories)
4. Click **"Generate token"**
5. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Use Token
When you push to GitHub and it asks for:
- **Username**: `sid776`
- **Password**: Paste your token (NOT your GitHub password)

The token will be saved for future use.

## Option 2: Complete Device Authorization

1. Go to: https://github.com/login/device
2. Enter the code shown in your terminal/command prompt
3. Click "Continue"
4. Authorize on your phone or another device
5. Once authorized, the push will continue

## Option 3: GitHub CLI

If you have GitHub CLI installed:

```bash
gh auth login
```

Follow the prompts to authenticate.

## After Authentication

Once authenticated, run:

```bash
git push origin main
```

Your code will be pushed to GitHub!

## Troubleshooting

- **"Repository not found"**: Make sure the repo exists and you have access
- **"Authentication failed"**: Try using a Personal Access Token instead
- **"Permission denied"**: Check that your token has `repo` scope enabled

