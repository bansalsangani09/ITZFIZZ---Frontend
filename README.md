# ITZFIZZ — Scroll-Driven Automotive Hero

[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13-0AE448?logo=greensock&logoColor=white)](https://gsap.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com/)

A high-performance, scroll-driven interactive hero experience built with **React**, **Vite**, **GSAP / ScrollTrigger**, and **Tailwind CSS**.

Featuring cinematic scroll choreography: a custom vector top-down sports car tracking along neon curved road trails, staggered headline character reveals, pinned timeline progress, dynamic chapter cues, and frosted glassmorphic metric cards.

---

## ✨ Features

- **🏎️ Scroll-Driven Automotive Animation**: Sports car moves along the curvature of the neon road synchronized strictly to scroll progress via GSAP `ScrollTrigger` scrubbing (no autoplay).
- **🔤 Staggered 3D Typography Reveal**: Character-by-character rotational headline entrance tied into scroll progression.
- **💎 Glassmorphic Metric Cards**: Frosted translucent impact cards with responsive layout, hover states, and staggered entrance sequences.
- **🧭 Chapter Navigation & Indicators**: Interactive chapter navigation tracking sections in real time as the user scrolls.
- **📱 Fully Responsive Design**: Optimized across ultrawide monitors, laptops, tablets, and smartphones with an interactive mobile slide-out drawer menu.
- **⚡ Blazing Fast**: Built on Vite 6 with zero bloat and optimized bundle sizes.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Animation & Timelines**: [GSAP 3](https://gsap.com/) & [ScrollTrigger](https://gsap.com/scrolltrigger/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Vanilla CSS Design System
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (configured via `vercel.json`)

---

## 📂 Project Structure

```text
itzfizz-hero/
├── public/                 # Static assets & icons
├── src/
│   ├── main.jsx            # Core React component & GSAP timeline orchestration
│   └── styles.css          # Design system tokens, glassmorphism, responsive styles
├── .gitignore              # Ignored files (node_modules, dist, environment files)
├── index.html              # HTML5 entry with preconnected Google Fonts
├── package.json            # Scripts & project dependencies
├── postcss.config.js       # PostCSS plugins (Tailwind, Autoprefixer)
├── tailwind.config.js      # Tailwind configuration
├── vercel.json             # Vercel deployment configuration & SPA routing rewrites
└── vite.config.js          # Vite build configuration with React plugin
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.0.0 or later) installed on your system.

### Installation

1. Clone or extract the project repository:
   ```bash
   git clone <repository-url>
   cd itzfizz-hero
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local Vite development server:

```bash
npm run dev
```

Visit the local URL provided in the terminal (typically `http://localhost:5173`).

### Production Build

Create an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment to Vercel

The project includes a ready-to-use [`vercel.json`](./vercel.json) configuration that handles the build pipeline and Single-Page Application (SPA) routing rewrites.

### Option 1: Deploy with Vercel CLI

```bash
npm install -g vercel
vercel
```

For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard / Git

1. Push this project to your GitHub, GitLab, or Bitbucket repository.
2. Go to [Vercel Dashboard](https://vercel.com/new) and click **"Add New Project"**.
3. Import your repository.
4. The framework preset will automatically detect **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

---

## ⚙️ Configuration

### `vercel.json`
Ensures that all client-side navigation and deep routes redirect cleanly to `index.html` without 404 errors:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 📝 License

Distributed under the MIT License. Feel free to use and adapt this code for your own creative projects.
