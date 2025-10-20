# Frontend Still Using Old Render URL - Fix Guide

## Problem
Your frontend is still showing `resi-backend-1.onrender.com` even though we updated all the environment files.

## Why This Happens
1. **Development Server Cache**: Vite/React dev server caches environment variables when it starts
2. **Browser Cache**: Your browser has cached the old API URL
3. **Build Not Updated**: If deployed, the production build still has the old URL

---

## ✅ Solution 1: Restart Local Development Server

If you're running the app locally:

1. **Stop the development server**:
   - Press `Ctrl + C` in the terminal where `npm run dev` is running
   - Or close the terminal

2. **Clear the build cache**:
   ```powershell
   cd "c:\Users\JOHN ROY\Documents\resi\Resi_Frontend"
   Remove-Item -Recurse -Force node_modules\.vite -ErrorAction SilentlyContinue
   Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue
   ```

3. **Restart the dev server**:
   ```powershell
   npm run dev
   ```

4. **Hard refresh your browser**:
   - Chrome/Edge: `Ctrl + Shift + R` or `Ctrl + F5`
   - Or open DevTools (F12) → Right-click refresh button → "Empty Cache and Hard Reload"

---

## ✅ Solution 2: Redeploy Frontend to Vercel

If the issue is on the deployed version:

1. **Rebuild locally** (optional, to verify):
   ```powershell
   cd "c:\Users\JOHN ROY\Documents\resi\Resi_Frontend"
   npm run build
   ```

2. **Deploy to Vercel**:
   ```powershell
   vercel --prod
   ```

   Or use Git:
   ```powershell
   git add .
   git commit -m "Update backend URL to Vercel"
   git push origin main
   ```

3. **Verify on Vercel Dashboard**:
   - Go to https://vercel.com/dashboard
   - Select your frontend project
   - Check the latest deployment logs
   - Look for: `VITE_API_URL=https://resi-backend.vercel.app/api`

---

## ✅ Solution 3: Clear All Caches

If still not working:

1. **Clear browser storage**:
   - Open DevTools (F12)
   - Go to "Application" tab (Chrome) or "Storage" tab (Firefox)
   - Click "Clear site data" or "Clear storage"

2. **Clear localStorage**:
   - In DevTools Console, run:
   ```javascript
   localStorage.clear()
   sessionStorage.clear()
   location.reload()
   ```

3. **Try incognito/private mode**:
   - Open your app in an incognito window to bypass all caches

---

## 🔍 Verify the Fix

After restarting, check the DevTools Console (F12):

You should see:
```
🌐 API Request: POST https://resi-backend.vercel.app/api/auth/register
```

Instead of:
```
🌐 API Request: POST https://resi-backend-1.onrender.com/api/auth/register
```

---

## Quick Commands (PowerShell)

```powershell
# Navigate to frontend
cd "c:\Users\JOHN ROY\Documents\resi\Resi_Frontend"

# Stop any running dev servers (Ctrl+C in the terminal)

# Clear cache
Remove-Item -Recurse -Force node_modules\.vite -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue

# Restart dev server
npm run dev

# Then in browser: Ctrl + Shift + R to hard refresh
```

---

## 📝 Note

The environment variable changes we made:
- ✅ `.env` → Updated
- ✅ `.env.production` → Updated
- ✅ `.env.local` → Updated
- ✅ `vercel.json` → Updated
- ✅ `package.json` → Updated
- ✅ Component files → Updated

**But** these changes only take effect when you:
1. Restart the dev server (for local development)
2. Rebuild and redeploy (for production)

---

**TL;DR**: Press `Ctrl+C` to stop your dev server, then run `npm run dev` again, and hard refresh your browser!
