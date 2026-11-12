# Digital Labour Chowk (DLC) V2 — Architecture Specification

---

## 1. App Flow & System Architecture

The DLC V2 platform is engineered as a modern, decoupled web application built on **Next.js 16+ App Router**. It separates static content generation from dynamic client-side interactivity, ensuring lightning-fast First Contentful Paint (FCP) and optimal SEO indexing.

```
                    ┌────────────────────────────┐
                    │      Client Browser        │
                    └─────────────┬──────────────┘
                                  │
                                  ▼
                    ┌────────────────────────────┐
                    │  Next.js App Router (v16+) │
                    │       app/layout.tsx       │
                    └─────────────┬──────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│  <Header />      │    │  <HomeContent /> │    │  <Footer />      │
│  - Utility Bar   │    │  (Home.tsx)      │    │  - Legal Links   │
│  - Mega Menus    │    │  - Hero Canvas   │    │  - Mobile Accord.│
│  - Mobile Drawer │    │  - Trade Grid    │    │  - Helpline Pill │
└──────────────────┘    │  - Banner Modal  │    └──────────────────┘
                        │  - Curtain Reveal│
                        │  - Stats Marquee │
                        │  - Testimonials  │
                        │  - App Download  │
                        └──────────────────┘
```

### 1.1 Architectural Principles
1. **Single Page Root Simplicity**:
   The root page (`app/page.tsx`) only imports three clean top-level boundary components: `<Header />`, `<HomeContent />` (unified from `Home.tsx`), and `<Footer />`.
2. **Component Encapsulation**:
   All landing sections are consolidated inside `components/Home.tsx` to prevent component bloat and eliminate cross-file import overhead, while keeping `<Header />` and `<Footer />` modular for global reusability across future routes.
3. **Optimized Client Hydration**:
   Client interactivity (`"use client"`) is restricted to stateful elements (video mute toggles, dropdown hover timers, accordion toggles, carousel slide pagination).
4. **Light-Dismiss & Keyboard Accessibility**:
   All dropdowns and mobile drawers subscribe to standard window `keydown` (Escape key) and `mousedown` (outside click) listeners with clean cleanup phases.
5. **Debounced Hover Bridges**:
   Mega-menu mouseleave handlers utilize a 180ms timeout buffer to eliminate accidental menu dismissals when moving diagonally from trigger to popup card.

---

## 2. Folder and File Structure

```
dlc-website-v2/
├── app/
│   ├── favicon.ico             # App icon
│   ├── globals.css             # Tailwind base & custom animations
│   ├── layout.tsx              # Root HTML/Body shell & metadata
│   └── page.tsx                # Clean root page (Header + HomeContent + Footer)
├── components/
│   ├── Header.tsx              # Top bar, logo, mega menus & mobile drawer
│   ├── Home.tsx                # Clubbed landing sections (Hero, Trades, Banner,
│   │                           # Curtain, Stats, Testimonials, App Download)
│   └── Footer.tsx              # Responsive footer with legal accordions
├── public/
│   └── images/                 # Optimized static assets
│       ├── logo.png            # DLC high-res brand logo
│       ├── hero-bg.png         # Fallback hero image
│       ├── super-founder-banner.png # 1366x172 documentary banner
│       ├── worker-cutouts/     # Transparent cutouts (rajmistri, badhai, etc.)
│       └── app-mockup/         # 3D angled phone mockup & QR assets
├── REQUIREMENTS/               # Architectural & System Documentation
│   ├── Prd.md                  # Product Requirements Document
│   ├── Architecture.md         # System flow, folder structure & tech stack
│   ├── Rules.md                # Development standards & AI boundaries
│   ├── Phases.md               # Roadmap from Landing to Dashboards
│   ├── Design.md               # Color palette, typography & UI system
│   └── Memory.md               # Active state & progress log for AI continuity
├── next.config.ts              # Next.js configuration & image domains
├── package.json                # Project dependencies & scripts
├── postcss.config.mjs          # PostCSS / Tailwind pipeline
├── tailwind.config.ts          # Tailwind theme extensions & breakpoint tokens
└── tsconfig.json               # TypeScript strict compiler options
```

---

## 3. Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16+ (App Router)** | High-performance server rendering, routing & bundling |
| **Language** | **TypeScript 5+ (Strict)** | Static typing, interface contracts & runtime safety |
| **Styling** | **Tailwind CSS v3/v4** | Responsive utility styling, flexbox/grid layouts |
| **Icons** | **Lucide React** | Consistent, lightweight SVG iconography |
| **Video Engine** | **Vimeo Embedded Player API** | Full-bleed background streaming with sound toggle |
| **Image Optimization** | **next/image** | Automatic WebP conversion, responsive `sizes`, lazy loading |
| **Dev Tools** | **WebKit / Swift Native Headless** | Ultra-fast local rendering snapshots & visual regression |
| **Port & Server** | **Node.js (Port 3001)** | Next.js dev server with Fast Refresh |
