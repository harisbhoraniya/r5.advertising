# NAEPL - Precision Engineering & Cable Management Web App

Official product catalog and engineering solutions showcase for **N Gandhi Advance Engineering Private Limited (NAEPL)**, featuring precision CNC machining, sheet metal fabrication, and **N-LOC** stainless steel cable management systems.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (configured with SPA rewrites)

---

## 📁 Project Structure

```text
r5.advertising/
├── public/
│   ├── assets/              # Optimized product images, banners, and logos
│   └── _redirects           # SPA fallback configuration for static hosting
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ApplicationsSection.tsx  # Industry applications showcase
│   │   ├── BackToProducts.tsx       # Breadcrumb / back navigation
│   │   ├── Footer.tsx               # Site-wide responsive footer
│   │   ├── HeroBanner.tsx           # Scalable responsive page hero banner
│   │   ├── Navbar.tsx               # Header with desktop dropdown & mobile drawer
│   │   ├── ProductOverview.tsx      # Product highlights & specifications
│   │   ├── ProductRange.tsx         # Product catalog card grid
│   │   ├── ScrollToTop.tsx          # Auto-scroll reset on route changes
│   │   └── TrustRow.tsx             # Quality, ISO & delivery trust carousel
│   ├── pages/               # Page views mapped to client routes
│   │   ├── HomePage.tsx             # Main landing view (/)
│   │   ├── ProductsPage.tsx         # Full product catalog (/product)
│   │   ├── NLocPage.tsx             # N-LOC cable ties showcase (/n-loc)
│   │   └── RollerBallPage.tsx       # Coated/Uncoated specifications (/roller-ball)
│   ├── App.tsx              # Application layout & client router configuration
│   ├── index.css            # Global Tailwind directives & scroll resets
│   └── main.tsx             # React DOM entry point
├── index.html               # Main HTML entry point (SEO metadata & Google Fonts)
├── package.json             # Project dependencies and npm scripts
├── postcss.config.js        # PostCSS configuration for Tailwind CSS
├── tailwind.config.js       # Tailwind CSS custom themes & animations
├── tsconfig.json            # TypeScript base configuration
├── vercel.json              # Vercel SPA routing & rewrites configuration
└── vite.config.ts           # Vite server, PostCSS, and plugin configurations
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The application will be running at `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized, minified production bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Routes Overview

| Route | Page Component | Description |
|---|---|---|
| `/` | `HomePage.tsx` | Overview of NAEPL engineering solutions & product highlights |
| `/products` | `ProductsPage.tsx` | Comprehensive product range catalog & custom solution CTA |
| `/products/n-loc` | `NLocPage.tsx` | N-LOC Stainless Steel Cable Ties line & applications |
| `/products/n-loc/roller-ball` | `RollerBallPage.tsx` | Interactive Coated/Uncoated Roller Ball specifications & tables |
| `/products/cnc-machine-component` | `CncMachineComponentPage.tsx` | Precision CNC turned, milled & drilled components in Copper, SS, Aluminium & Chrome Steel |

---

## 📄 License

Private & Proprietary © 2026 N Gandhi Advance Engineering Pvt. Ltd. All rights reserved.
