# StyleHub - Quick Start (2 Minutes)

The fastest way to get your portfolio project running locally.

---

## ⚡ 3-Command Setup

```bash
cd stylehub
pnpm install
pnpm dev
```

Done! Open [http://localhost:3000](http://localhost:3000) 🎉

---

## ✅ You Should See

- StyleHub logo in navbar
- Auto-rotating hero carousel
- 9 products in a grid
- Category filters (All, Men, Women, Accessories, Sale)
- Shopping cart icon (top right)
- Responsive menu on mobile

---

## 🎯 Next Steps

### Option 1: Explore Locally
1. Click products and test "Add to Cart"
2. Try category filters
3. View on mobile (F12 → Device Toolbar)
4. Navigate to /about and /contact pages

### Option 2: Customize
1. Edit `lib/data.ts` - Change product names/prices/images
2. Edit `app/globals.css` - Change colors
3. Edit `components/Navbar.tsx` - Update logo
4. Changes auto-reload! ✨

### Option 3: Deploy to Vercel
```bash
git push origin main
# Then visit vercel.com/new and import your repo
```

Or use Vercel CLI:
```bash
npm install -g vercel
vercel --prod
```

---

## 📁 Key Files to Edit

### Add/Change Products
**File:** `lib/data.ts`
```typescript
export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Product Name',        // Change this
    price: 99.99,               // And this
    image: 'https://url',       // And this
    // ... etc
  },
];
```

### Change Colors/Theme
**File:** `app/globals.css`
```css
:root {
  --primary: oklch(0.205 0 0);     /* Dark color */
  --background: oklch(1 0 0);      /* White */
  --foreground: oklch(0.145 0 0);  /* Dark text */
  /* ... more colors ... */
}
```

### Update Brand Name
**Files:**
- `components/Navbar.tsx` - Line 20
- `components/Footer.tsx` - Line 12
- `app/layout.tsx` - Line 15

---

## 🧪 Test Functionality

### Add to Cart
1. Click any product card
2. Click shopping cart icon
3. Should open sidebar with item
4. Cart counter should update

### Filter Products
1. Click category buttons (Men, Women, Accessories, etc.)
2. Products should filter
3. Click "All" to reset

### Mobile Responsive
1. Press F12 (or Cmd+Option+I)
2. Click device toolbar (Cmd+Shift+M)
3. Select "iPhone 12 Pro"
4. See hamburger menu
5. Click it to see mobile navigation

---

## 🚀 Deploy in 1 Minute

### Option A: Vercel Dashboard (Easiest)
1. Push to GitHub:
```bash
git add .
git commit -m "StyleHub ready"
git push origin main
```

2. Visit [vercel.com/new](https://vercel.com/new)
3. Select your GitHub repo
4. Click "Deploy"
5. Wait 30 seconds... Done! 🎉

### Option B: Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

---

## 📦 What You Have

- ✅ 5 fully functional pages
- ✅ 9 sample products with images
- ✅ Working shopping cart
- ✅ Auto-rotating carousels
- ✅ Mobile responsive
- ✅ Professional styling
- ✅ TypeScript type safety
- ✅ Zero build errors
- ✅ Production ready
- ✅ Portfolio worthy

---

## 🎓 Learn More

- **Detailed Setup:** Read [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- **All Commands:** Read [COMMANDS_REFERENCE.md](./COMMANDS_REFERENCE.md)
- **Before Deploying:** Read [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)
- **Project Info:** Read [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

---

## 💡 Common Questions

**Q: Where do I change product images?**
A: Edit `lib/data.ts` - change the `image` URL for each product

**Q: How do I add a new product?**
A: Add to the PRODUCTS array in `lib/data.ts` following the same format

**Q: How do I change the header color?**
A: Edit CSS variables in `app/globals.css` - change `--primary` value

**Q: Will it work without internet?**
A: Images won't load (they're from Unsplash), but site structure works

**Q: Can I add backend/database?**
A: Yes! This is structured to be extended. Check SETUP_GUIDE.md for ideas

**Q: How do I share my project?**
A: Deploy to Vercel, then share the URL. Add it to your portfolio!

---

## ⚙️ Troubleshooting

### Port 3000 in use?
```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9  # Mac/Linux
# Then run: pnpm dev
```

### Changes not showing?
```bash
# Hard refresh in browser: Ctrl+Shift+R or Cmd+Shift+R
```

### Build fails?
```bash
rm -rf .next node_modules
pnpm install
pnpm dev
```

### Images don't load?
- Make sure using HTTPS URLs
- Check image URL is valid
- Try different image URL from Unsplash

---

## ✨ What's Cool About This

1. **Modern Stack** - Latest Next.js, React, TypeScript
2. **Zero Setup** - Clone, install, run. That's it.
3. **Production Ready** - No errors, optimized build
4. **Fully Functional** - Cart, filters, forms all work
5. **Beautiful** - Professional design out of the box
6. **Easy to Customize** - Clear file structure, well-organized
7. **Scalable** - Ready to add database, auth, payments
8. **Portfolio Gold** - Impress potential employers/clients

---

## 🎯 Your Timeline

```
Right now:    pnpm install && pnpm dev   ← You are here
5 min later:  Explore the site locally
10 min later: Customize with your content
30 min later: Push to GitHub
1 hour later: Deploy to Vercel
2 hour later: Share with the world! 🚀
```

---

## 🎉 You're Ready!

Your professional e-commerce website is ready. Now:

1. **Run it locally** - `pnpm dev`
2. **Customize it** - Edit product data and colors
3. **Deploy it** - Push to GitHub, deploy to Vercel
4. **Show it off** - Add URL to your portfolio

That's it! You have a production-ready website to showcase your skills.

---

**Questions?** See SETUP_GUIDE.md for detailed documentation.

**Ready to deploy?** See DEPLOYMENT_CHECKLIST.md before going live.

**Need all commands?** See COMMANDS_REFERENCE.md for a complete reference.

---

**Happy coding! 🚀**
