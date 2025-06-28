# 🚀 Deployment Guide - GitHub + Vercel

This guide will help you deploy your News App to GitHub and Vercel while keeping your API key completely secure.

## 🔒 Security Checklist

Before deployment, ensure:

- ✅ API key is only in `server/config.env` (which is gitignored)
- ✅ No API keys in any committed files
- ✅ Environment variables properly configured

## 📋 Pre-Deployment Steps

### 1. Verify Security

```bash
# Check that config.env is ignored
git status
# Should NOT show server/config.env in the output
```

### 2. Test Production Build

```bash
# Build the frontend
npm run build

# Test the backend locally
cd server
npm start
```

## 🐙 GitHub Deployment

### 1. Initialize Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files (config.env will be ignored)
git add .

# Create initial commit
git commit -m "Initial commit: News App with secure backend"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### 2. Verify on GitHub

- Go to your GitHub repository
- Ensure `server/config.env` is NOT visible in the file list
- Check that `.gitignore` files are present

## ☁️ Vercel Deployment

### 1. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your GitHub repository

### 2. Configure Environment Variables

In Vercel dashboard, go to your project settings:

1. **Navigate to Environment Variables**
2. **Add the following variables:**
   ```
   Name: NEWS_API_KEY
   Value: 899aedca99a047ac8ef50151205cf5a8
   Environment: Production, Preview, Development
   ```

### 3. Configure Build Settings

Vercel should automatically detect the configuration from `vercel.json`, but verify:

- **Framework Preset**: Other
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

### 4. Deploy

Click "Deploy" and wait for the build to complete.

## 🔧 Post-Deployment Verification

### 1. Test Your Deployed App

- Visit your Vercel URL
- Test all features: search, categories, countries
- Check browser console for any errors

### 2. Verify API Security

- Open browser DevTools → Network tab
- Make a search request
- Verify that NO API key appears in any requests
- All requests should go to your Vercel domain, not directly to NewsAPI

### 3. Test API Endpoints

```bash
# Health check
curl https://your-app.vercel.app/api/health

# News API
curl "https://your-app.vercel.app/api/news?country=us&category=technology"
```

## 🛠️ Troubleshooting

### Common Issues

1. **API Key Not Working**

   - Verify environment variable is set in Vercel
   - Check Vercel function logs for errors
   - Ensure variable name is exactly `NEWS_API_KEY`

2. **CORS Errors**

   - Backend includes CORS configuration
   - Should work automatically with Vercel

3. **Build Failures**

   - Check Vercel build logs
   - Ensure all dependencies are in package.json
   - Verify vercel.json configuration

4. **Frontend Can't Connect to Backend**
   - Check that API_BASE_URL is correct
   - Verify routes in vercel.json
   - Test API endpoints directly

## 🔄 Updating Your App

### For Code Changes

```bash
# Make your changes
git add .
git commit -m "Update description"
git push origin main
# Vercel will automatically redeploy
```

### For API Key Changes

1. Update the environment variable in Vercel dashboard
2. Redeploy the project

## 📊 Monitoring

### Vercel Analytics

- Monitor performance in Vercel dashboard
- Check function execution logs
- Monitor API usage

### NewsAPI Usage

- Monitor your NewsAPI usage at https://newsapi.org/account
- Free tier: 1,000 requests/day

## 🎉 Success!

Your News App is now:

- ✅ Deployed on GitHub
- ✅ Live on Vercel
- ✅ API key completely hidden
- ✅ Secure and production-ready

## 🔗 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [NewsAPI Documentation](https://newsapi.org/docs)
- [GitHub Pages](https://pages.github.com/)

## 🆘 Support

If you encounter issues:

1. Check Vercel function logs
2. Verify environment variables
3. Test API endpoints directly
4. Check browser console for errors
