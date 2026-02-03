# GitHub Pages Deployment Guide

## Issues Fixed:
1. ✅ Added GitHub Actions workflow for automated deployment
2. ✅ Added `preview` script to package.json
3. ✅ Verified build process works correctly
4. ✅ Configured proper base path in vite.config.js

## Setup Instructions:

### 1. Repository Setup
- Push this code to a GitHub repository
- Make sure the repository name matches the base path in `vite.config.js` (currently set to `/task-manager/`)

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 3. Deploy
- Push to the `main` branch
- The GitHub Action will automatically build and deploy
- Your site will be available at: `https://[username].github.io/task-manager/`

## Local Testing
```bash
npm install
npm run build
npm run preview
```

## Troubleshooting
- If the repository name is different, update the `base` path in `vite.config.js`
- Ensure GitHub Pages is enabled in repository settings
- Check the Actions tab for deployment status