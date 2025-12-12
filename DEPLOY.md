# Deploy to Vercel

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Markayala13/35)

## Manual Deployment Steps

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository: `https://github.com/Markayala13/35`
   - Vercel will auto-detect Vite framework
   - Click "Deploy"

3. **Deploy via CLI** (if installed)
   ```bash
   vercel
   ```

## Project Configuration

The project is pre-configured with `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

## Environment Variables

No environment variables required for this project.

## Build Settings

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node Version:** 18.x (recommended)

## After Deployment

Your site will be live at: `https://your-project-name.vercel.app`

You can also add a custom domain in the Vercel dashboard.

## Automatic Deployments

Every push to the `main` branch will trigger an automatic deployment on Vercel.

---

**Repository:** https://github.com/Markayala13/35
