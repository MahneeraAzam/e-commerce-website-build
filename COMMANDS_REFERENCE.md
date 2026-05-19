# StyleHub - Commands Reference

Quick reference for all commands you need to develop, test, and deploy your e-commerce website.

---

## 🚀 Installation Commands

### 1. First Time Setup
```bash
# Navigate to your project directory
cd stylehub

# Install all dependencies (REQUIRED FIRST!)
pnpm install
# or
npm install
# or
yarn install
```

### 2. Start Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Development Commands

### Run Development Server
```bash
pnpm dev
```
- Hot reload enabled
- Changes update instantly
- Keep this running while developing

### Check TypeScript Types
```bash
pnpm tsc --noEmit
```
- Validates all TypeScript code
- No file output, just checking
- Should show 0 errors

### Lint Code (if needed)
```bash
pnpm lint
```
- Check code quality
- Find potential issues

### Format Code (if needed)
```bash
pnpm format
```
- Format code automatically
- Ensure consistent style

---

## 🏗️ Build & Production Commands

### Create Production Build
```bash
pnpm build
```
- Compiles for production
- Optimizes assets
- Creates `.next` directory
- Takes ~4 seconds

### Run Production Build Locally
```bash
pnpm build
pnpm start
```
- Tests production environment
- Useful before deploying
- Visit [http://localhost:3000](http://localhost:3000)

### Preview Production Build
```bash
pnpm build
pnpm start
```
- See exactly what users will see
- Test performance

---

## 📦 Dependency Management

### Install a New Package
```bash
pnpm add package-name
```
Example:
```bash
pnpm add axios
```

### Install Dev Dependency
```bash
pnpm add -D package-name
```
Example:
```bash
pnpm add -D @types/node
```

### Add shadcn Component
```bash
pnpm exec shadcn-ui@latest add button
# Replace 'button' with component name
```

### Update All Dependencies
```bash
pnpm update
```

### Remove a Package
```bash
pnpm remove package-name
```

---

## 🚀 Deployment Commands

### Deploy to Vercel (CLI)
```bash
# Install Vercel CLI (one time only)
npm install -g vercel

# Deploy to production
vercel --prod

# Or simple deploy (staging)
vercel
```

### Deploy via Dashboard
No commands needed! Instead:
1. Go to [vercel.com/new](https://vercel.com/new)
2. Select your GitHub repository
3. Click "Deploy"

---

## 🧪 Testing & Debugging

### Check Port Usage (Port 3000)
```bash
# macOS/Linux - Check what's using port 3000
lsof -i :3000

# Windows
netstat -ano | findstr :3000
```

### Kill Process on Port 3000
```bash
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Windows (replace PID with actual number)
taskkill /PID <PID> /F
```

### Clear Cache & Reinstall
```bash
# Remove dependencies
rm -rf node_modules
rm pnpm-lock.yaml  # or package-lock.json or yarn.lock

# Reinstall everything
pnpm install
```

### Rebuild from Scratch
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Run dev server
pnpm dev
```

---

## 📊 Git Commands

### Initialize Git (if needed)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/stylehub.git
git push -u origin main
```

### Push to GitHub
```bash
# After making changes
git add .
git commit -m "Describe your changes"
git push origin main
```

### Clone Repository
```bash
git clone https://github.com/yourusername/stylehub.git
cd stylehub
pnpm install
pnpm dev
```

---

## 🔍 Troubleshooting Commands

### Check Node Version
```bash
node --version
# Should be 18.17 or higher
```

### Check pnpm Version
```bash
pnpm --version
```

### View Project Dependencies
```bash
pnpm list
```

### Check for Outdated Packages
```bash
pnpm outdated
```

### View Build Size
```bash
pnpm build
# Look at the output for bundle size info
```

### Clean Build & Start Fresh
```bash
pnpm install
rm -rf .next
pnpm build
pnpm start
```

---

## 🎯 Daily Development Workflow

### Start Your Day
```bash
cd stylehub
pnpm dev
# Keep this terminal open
```

### Make Changes
```bash
# Edit files in your editor
# Changes hot-reload automatically
```

### Before Committing
```bash
pnpm tsc --noEmit  # Check TypeScript
pnpm lint          # Check code quality
pnpm build         # Verify production build
```

### Commit Changes
```bash
git add .
git commit -m "Feature: Add new product filter"
git push
```

### Deploy to Vercel
```bash
# After pushing to GitHub
# Vercel auto-deploys, OR manually:
vercel --prod
```

---

## 📋 Command Categories

### Most Used
```bash
pnpm dev              # Start developing
pnpm build            # Build for production
pnpm start            # Run production build
git push              # Push to GitHub
```

### Regular
```bash
pnpm tsc --noEmit     # Type check
pnpm install          # Install dependencies
rm -rf .next          # Clear cache
```

### Occasional
```bash
pnpm add package      # Add dependency
vercel --prod         # Deploy
pnpm outdated         # Check updates
```

---

## ⚡ Quick Commands Cheat Sheet

```bash
# Setup
pnpm install

# Development
pnpm dev                    # Start dev server
pnpm tsc --noEmit          # Check types
pnpm lint                  # Lint code
pnpm format                # Format code

# Build & Production
pnpm build                 # Build for production
pnpm start                 # Run production build

# Dependencies
pnpm add package-name      # Add dependency
pnpm remove package-name   # Remove dependency
pnpm update                # Update all packages

# Git & Deployment
git add .                  # Stage changes
git commit -m "message"    # Commit changes
git push                   # Push to GitHub
vercel --prod             # Deploy to Vercel

# Troubleshooting
rm -rf .next              # Clear Next.js cache
rm -rf node_modules       # Remove dependencies
pnpm install              # Reinstall everything
node --version            # Check Node version
```

---

## 💡 Tips & Tricks

### Speed Up Development
```bash
# Keep dev server running in one terminal
pnpm dev

# Use a second terminal for git/other commands
git add .
git commit -m "message"
```

### Parallel Tasks
```bash
# Terminal 1: Development
pnpm dev

# Terminal 2: Git operations
git add .
git commit -m "message"
```

### Quick Build Verification
```bash
# Check if everything builds before committing
pnpm build

# If successful, commit changes
git add .
git commit -m "Verified working build"
```

### Pre-Deployment Checklist
```bash
pnpm tsc --noEmit    # No TypeScript errors
pnpm build           # Builds successfully
pnpm start           # Runs without errors
# Then deploy!
```

---

## 📱 Testing Different Viewport Sizes

While dev server is running:
1. Open DevTools (F12 or Cmd+Option+I)
2. Click device toolbar icon (Cmd+Shift+M or Ctrl+Shift+M)
3. Select device:
   - iPhone 12 Pro (390×844)
   - iPad Air (1024×1366)
   - Desktop: Responsive (test various widths)

---

## 🎓 Understanding Each Command

| Command | Purpose | When to Use |
|---------|---------|-----------|
| `pnpm dev` | Start development server | Every time you start working |
| `pnpm build` | Create production build | Before deploying |
| `pnpm start` | Run production build | Test before deployment |
| `pnpm tsc --noEmit` | Check TypeScript types | Before committing |
| `pnpm lint` | Check code quality | Before committing |
| `git push` | Upload to GitHub | After committing |
| `vercel --prod` | Deploy to production | When ready to go live |

---

## ✅ Verification Checklist

Before deployment, run these commands:

```bash
# 1. Check for TypeScript errors
pnpm tsc --noEmit

# 2. Check for code quality issues
pnpm lint

# 3. Build for production
pnpm build

# 4. Test production build
pnpm start
# Visit http://localhost:3000 and test everything

# 5. Push to GitHub
git add .
git commit -m "Production ready"
git push origin main

# 6. Deploy to Vercel
vercel --prod
```

All commands passed? You're ready to deploy! 🚀

---

## 📞 Need Help?

If a command doesn't work:

1. **Check Node version**: `node --version` (should be 18.17+)
2. **Clear cache**: `rm -rf node_modules .next && pnpm install`
3. **Check documentation**: [nextjs.org/docs](https://nextjs.org/docs)
4. **Check error message**: Usually tells you what's wrong

---

## 🎯 Common Scenarios

### "I want to start fresh"
```bash
rm -rf node_modules pnpm-lock.yaml .next
pnpm install
pnpm dev
```

### "My changes aren't showing"
```bash
# Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
# Or clear cache:
rm -rf .next
# Then restart dev server
pnpm dev
```

### "I want to deploy"
```bash
pnpm build
pnpm start
# Test locally, then:
git push origin main
vercel --prod
```

### "I broke something"
```bash
# Revert last commit
git reset --hard HEAD~1

# Or check what changed
git diff
git status
```

---

**You're all set! Use this reference whenever you need to run a command. Happy coding! 🚀**
