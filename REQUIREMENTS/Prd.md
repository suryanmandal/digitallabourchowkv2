# Digital Labour Chowk (DLC) V2 — Product Requirements Document (PRD)

---

## 1. What to Build

**Digital Labour Chowk (DLC) V2** is India's tech-enabled construction workforce, contractor, and builder platform. It modernizes the unorganized daily-wage construction labor market by providing instant manpower dispatch, transparent daily wage rate indexing, verified trade skill profiles, and statutory compliance management.

This project completely revamps the legacy web presence into a high-performance, mobile-first web application built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

### Key Value Propositions
* **For Workers**: 0% commission direct job placements, guaranteed daily wage payout via Direct Bank Transfer (DBT), ₹5 Lakh accidental insurance, and a multilingual mobile app in 8 regional languages.
* **For Contractors & EPCs**: On-demand mobilization of 5 to 500+ verified workers (masons, carpenters, bar-benders, electricians, helpers) within a 2-hour SLA, geo-fenced biometric attendance, and PF/ESIC statutory records.
* **For Builders & Developers**: Predictable labor supply, city-wise transparent wage calculators, and turnkey project site management.

---

## 2. Targeted Users & Personas

### Persona A: The Blue-Collar Construction Worker (Mistri / Helper / Trade Artisan)
* **Demographics**: Daily-wage construction labor across Tier-1, Tier-2, and Tier-3 Indian cities (e.g., Delhi NCR, Patna, Bengaluru, Mumbai, Hyderabad).
* **Pain Points**: Standing at physical labor chowks without guaranteed work, exploitation by predatory middlemen/Jamadars, delayed wage payments, and zero social security.
* **Platform Needs**: Voice/regional language interface, instant Aaj Ka Rozgar notifications, direct Aadhaar-linked bank transfer, digital trade ID card, and a toll-free helpline (1800-202-0991).

### Persona B: The General Contractor, EPC & Jamadar
* **Demographics**: Sub-contractors, specialized trade gang leaders, and large engineering infrastructure contractors (EPCs).
* **Pain Points**: Chronic labor shortages on urgent site milestones, erratic worker attendance, high attrition, and regulatory compliance friction.
* **Platform Needs**: Rapid dispatch request form (2-hour SLA), verified skill ratings, bulk attendance management, and transparent city rate benchmarks.

### Persona C: The Real Estate Developer & Builder
* **Demographics**: Project managers, site supervisors, and procurement heads at mid-to-large construction and residential housing firms.
* **Pain Points**: Cost overruns due to worker unavailability, lack of safety standard enforcement, and statutory audit liabilities.
* **Platform Needs**: Transparent wage calculator, compliance documentation (PF/ESIC/BOCW), and multi-site supervisor dashboards.

### Persona D: Institutional Partners, Media & Investors
* **Demographics**: Government bodies (Startup India, NSDC), incubators (CIMPS, Villgro, GDI), media houses, and impact investors.
* **Platform Needs**: Company history, documentary video showcase ("Bharat Ke Super Founders"), national footprint metrics, press coverage, and investor relations.

---

## 3. Features & Modules

### 3.1 Header & Navigation System
* **Top Utility Bar**: Direct emergency/site helpline (`+91-7070999175`), email contact, and social channel links (LinkedIn, X/Twitter, Instagram, Facebook).
* **Main Brand Bar**: High-resolution vector logo, brand title, and tagline with zero horizontal overflow.
* **Editorial Mega Menus (Desktop)**:
  * **About Us ▾**: Single-column dropdown (Image 1 style) featuring *Our History*, *Vision & Mission*, *Values*, *Leadership*, *Awards & Recognitions*, *Our Footprint*, *Media Coverage*, and *Institutional Partners*.
  * **Hire Manpower ▾**: 3-column mega menu (Image 2 style) covering *Civil & Finishing Trades*, *Whom We Serve*, and *Compliance & Rates*.
  * **For Workers ▾**: 2-column menu with *Rozgar & Placements* (DLC Worker App Google Play link) and *Benefits & Suraksha* (DBT, ₹5L Insurance, Digital Trade ID, 1800-202-0991 helpline).
  * **Resources ▾**: Single-column list of blogs, site automation trends, labour laws, and minimum wage circulars.
  * **Investor Relations**: Direct navigation anchor.
  * **Call To Action**: High-contrast "Get in Touch" button linked to client onboarding.
* **Mobile/Tablet Burger Menu**: Slide-down drawer with expandable accordions, quick-call action pills, and email buttons.

### 3.2 Hero Section (Vimeo Canvas)
* Full-bleed, edge-to-edge video canvas running the official 6:57 min documentary.
* Floating interactive sound toggle (Mute / Sound On).
* Zero margins and zero black letterboxing on mobile and desktop viewports.

### 3.3 Popular Searches (Worker Trade Grid)
* 2-row, 3-column interactive trade showcase featuring 5 transparent PNG cutouts:
  1. *Rajmistri (Mason)*
  2. *Badhai (Carpenter)*
  3. *Painter (Rangai Mistri)*
  4. *Bijli Mistri (Electrician)*
  5. *Plumber (Nal Saaz)*
  6. *Contractor Portal (Thekedar Portal)*
* Subtle watermark silhouettes, rank badges, Hindi vernacular subtitles, and hover scale transitions.

### 3.4 Bharat Ke Super Founders Documentary Banner
* 1366×172 full-width responsive banner with documentary badge.
* Interactive modal video lightbox for instant playback.

### 3.5 Curtain Reveal (Interactive Stacking Section)
* 3 sticky viewport stacking cards:
  * Card 1: *FIND JOB (Aaj Ka Rozgar)*
  * Card 2: *FIND WORKERS (Labour Mobilization)*
  * Card 3: *FIND BUSINESS (Contractor Growth)*
* Progressive elevation via dynamic z-indexing and viewport offsets.

### 3.6 Stats Marquee & Testimonials Split Section
* **Part A**: Continuous right-to-left marquee ticker displaying verified platform metrics (350,000+ Workers, 20,000+ Contractors, 50+ EPCs, 6,000+ Cities).
* **Part B**: Asymmetrical split layout with signature blue fixed quote card on the left and speech-bubble review carousel with pagination arrows on the right (responsive: 3 cards on desktop, 2 on tablet, 1 on mobile).

### 3.7 App Download CTA Section
* 3D angled smartphone mockup showcasing the real application UI with dynamic island and metallic frame.
* Scannable SVG QR code card with App Store and Google Play badges.
* Floating metric pills: 4.5★ User Ratings & 3.5 Lakh+ App Downloads.

### 3.8 Comprehensive Footer
* Mobile accordion architecture reducing vertical scrolling by ~70%.
* 5-column desktop expanded layout.
* Dedicated **Policies & Legal** column: Terms and Conditions, Privacy Policy, Cancellation Policy, Refund Policy, and Disclaimer.
* Quick helpline pill (`+91 9654007500`) and corporate registration details.
