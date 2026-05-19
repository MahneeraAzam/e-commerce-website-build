# StyleHub - E-Commerce Clothing Website

A professional, production-ready e-commerce clothing website built with Next.js 16, React 19, Tailwind CSS 4.2, and shadcn/ui components. Perfect for portfolio showcase!

## 📋 Quick Start - Installation Instructions

### Prerequisites
- **Node.js** 18.17 or higher
- **pnpm** (recommended) or npm/yarn
- A code editor (VS Code recommended)

### Step 1: Clone/Download the Project

```bash
# Navigate to your desired directory
cd your-workspace

# If using git (clone the repository)
git clone <repository-url>
cd stylehub

# Or if you downloaded as ZIP, extract and navigate to the folder
cd stylehub-main
```

### Step 2: Install Dependencies

**Using pnpm (recommended):**
```bash
pnpm install
```

**Using npm:**
```bash
npm install
```

**Using yarn:**
```bash
yarn install
```

### Step 3: Install UI Components (if needed)

The shadcn/ui components are already included, but if you need to add more:

```bash
pnpm exec shadcn-ui@latest add button
```

### Step 4: Run Development Server

```bash
pnpm dev
```

The application will be available at **http://localhost:3000**

### Step 5: Verify Everything Works

1. Open your browser and go to `http://localhost:3000`
2. You should see the StyleHub homepage with:
   - Navbar with cart icon
   - Auto-rotating hero carousel
   - Category filters
   - Product grid with images
   - Testimonials section
   - About section
   - Call-to-action banner

## 🏗️ Project Structure

```
stylehub/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   ├── products/
│   │   └── page.tsx            # Products page
│   ├── about/
│   │   └── page.tsx            # About page
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── Navbar.tsx              # Navigation bar
│   ├── Footer.tsx              # Footer
│   ├── HeroCarousel.tsx        # Auto-rotating hero
│   ├── ProductCard.tsx         # Product card component
│   ├── FeaturedProducts.tsx    # Products grid
│   ├── CartSidebar.tsx         # Shopping cart sidebar
│   ├── TestimonialsCarousel.tsx # Testimonials slider
│   ├── CategoryFilter.tsx      # Category filter buttons
│   └── ui/                     # shadcn/ui components
├── context/
│   ├── CartContext.tsx         # Cart state management
│   └── FilterContext.tsx       # Filter state management
├── lib/
│   ├── types.ts                # TypeScript types
│   ├── data.ts                 # Product & testimonial data
│   └── utils.ts                # Utility functions
├── public/                     # Static assets
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── tailwind.config.ts         # Tailwind CSS config
└── next.config.mjs            # Next.js config
```

## 🛠️ Key Technologies

- **Next.js 16**: Latest React framework with Turbopack (default bundler)
- **React 19**: Latest React version with new features
- **TypeScript**: Full type safety
- **Tailwind CSS 4.2**: Utility-first CSS framework
- **shadcn/ui**: High-quality, customizable components
- **Embla Carousel**: Smooth auto-rotating carousels
- **Lucide Icons**: Professional icon library
- **React Context API**: State management (no Redux needed)

## ✨ Features Included

### Core Functionality
- ✅ Responsive design (mobile-first)
- ✅ Auto-rotating hero carousel (5-second interval)
- ✅ Product grid with filtering by category
- ✅ Shopping cart with quantity management
- ✅ Auto-rotating testimonials carousel
- ✅ Product ratings and reviews
- ✅ Smooth animations and transitions
- ✅ Professional navbar and footer

### Pages
- **Home** - Hero, featured products, testimonials, about section
- **Shop** - Category filters, full product grid
- **About** - Company story, values, team section
- **Contact** - Contact form with validation, FAQ section

### Interactive Features
- Add/remove products from cart
- Update product quantities
- Filter products by category
- Auto-rotating carousels
- Cart badge counter
- Mobile-responsive hamburger menu

## 🎨 Customization Guide

### Replacing Placeholder Images

All images use Unsplash URLs. To use your own images:

1. **Product Images** - Edit `lib/data.ts`:
```typescript
export const PRODUCTS: Product[] = [
  {
    id: '1',
    image: 'https://your-image-url.com/image.jpg', // Replace this
    // ... other properties
  },
];
```

2. **Hero Images** - Edit `components/HeroCarousel.tsx`:
```typescript
const heroSlides = [
  {
    image: 'https://your-image-url.com/hero.jpg', // Replace this
    // ... other properties
  },
];
```

3. **Background Images** - Edit `app/page.tsx` and other pages:
```jsx
<img src="https://your-image-url.com/image.jpg" alt="description" />
```

### Changing Colors & Theme

Edit `app/globals.css` to modify the design tokens:

```css
:root {
  --background: oklch(1 0 0);           /* White background */
  --foreground: oklch(0.145 0 0);       /* Dark text */
  --primary: oklch(0.205 0 0);          /* Primary color (dark) */
  --primary-foreground: oklch(0.985 0 0); /* Text on primary */
  /* Update all other tokens as needed */
}
```

### Updating Business Information

1. **Brand Name** - Update in multiple files:
   - `app/layout.tsx` - metadata title
   - `components/Navbar.tsx` - logo text
   - `components/Footer.tsx` - brand text

2. **Contact Information** - Edit `app/contact/page.tsx`:
   - Email, phone, address
   - Business hours
   - Social media links

3. **Products** - Edit `lib/data.ts`:
   - Add/remove products
   - Update prices, descriptions, ratings

## 🚀 Deployment to Vercel

### Option 1: Using Vercel Dashboard (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: StyleHub e-commerce website"
   git push origin main
   ```

2. **Deploy via Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"
   - Your site will be live in seconds!

### Option 2: Using Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy from project directory
vercel

# Follow the prompts
```

### Environment Variables

No environment variables are required for this project as it uses client-side state management and placeholder data. However, if you add a backend later, you can add them in:

1. **Local**: Create `.env.local` in project root
2. **Vercel**: Settings → Environment Variables in Vercel Dashboard

## 🧪 Testing Locally

### TypeScript Check
```bash
pnpm tsc --noEmit
```

### Build for Production
```bash
pnpm build
```

### Start Production Server
```bash
pnpm start
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Common Issues & Solutions

### Port 3000 Already in Use
```bash
# Kill the process using port 3000
# On macOS/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
pnpm install

# Rebuild
pnpm build
```

### Images Not Loading
- Check that image URLs are HTTPS
- Verify the domain is accessible
- Use proper image dimensions (aspect ratio matters)

## 📚 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Embla Carousel](https://www.embla-carousel.com)

## 🎯 Next Steps for Enhancement

1. **Add Backend**:
   - Connect to a database (Supabase, Firebase, etc.)
   - Implement user authentication
   - Create admin dashboard

2. **Payment Integration**:
   - Add Stripe checkout
   - Implement order processing

3. **Analytics**:
   - Add Google Analytics
   - Track user behavior

4. **SEO**:
   - Optimize meta tags
   - Add structured data (schema.org)
   - Create sitemap

5. **Performance**:
   - Image optimization with Next.js Image component
   - Code splitting and lazy loading
   - Caching strategies

## 📄 License

This project is ready for portfolio showcase. Feel free to customize and deploy!

## 💬 Support

If you encounter any issues:
1. Check the Common Issues section above
2. Review the console for error messages
3. Verify all dependencies are installed correctly
4. Ensure you're using Node.js 18.17 or higher

---

**Ready to showcase your project? Deploy to Vercel now and share the link!**
