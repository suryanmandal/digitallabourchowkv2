# Digital Labour Chowk (DLC) V2 — AI Agent Memory & Active State Tracker

> [!IMPORTANT]
> **AI AGENT NOTICE**: Read this file FIRST before taking any action. It provides immediate context on the project's completed milestones, active tasks, architectural decisions, and current working files. This prevents costly and redundant codebase re-scanning.

---

## 1. Project Identity & Sandbox Context
* **Project Name**: Digital Labour Chowk (DLC) Website V2
* **Application Path**: `/Users/suryanarayanmandal/Company Project/dlc_website/dlc-website-v2`
* **GitHub Repository**: [https://github.com/suryanmandal/digitallabourchowkv2.git](https://github.com/suryanmandal/digitallabourchowkv2.git) (Branch: `main`)
* **Parent Repo (Legacy WordPress)**: Strictly zero-touch! Do not stage, edit, or commit legacy files in root.
* **Development Server**: Next.js App Router running on **Port 3001** (`http://localhost:3001`).
* **Design Anchor**: DLC Signature Blue (`#0C59D4`), clean corporate editorial typography, horizontal divider rows.

---

## 2. Completed Milestones (What Has Been Built)

### 2.1 Landing Page Architecture (`components/Home.tsx` & `app/page.tsx`)
1. **Section 1: Hero Video Canvas**
   - Official 6:57 min Vimeo documentary stream.
   - Interactive Sound On / Mute toggle.
   - Zero black bars, full edge-to-edge bleed across mobile and desktop.
2. **Section 2: Popular Searches Trade Grid**
   - 2-row, 3-col responsive trade showcase with 5 transparent PNG cutouts (Mason, Carpenter, Painter, Electrician, Plumber) + Thekedar Portal.
   - Watermark silhouettes, rank tags, and Hindi vernacular titles.
3. **Super Founder Documentary Banner**
   - 1366×172 full-width responsive banner, completely stretched horizontally **edge-to-edge** across desktop views with zero container margins or padding.
   - Popup modal video lightbox for instant 6:57 playback.
4. **Section 3: 3-Pillar 3D Bento Grid (Replaced Curtain Reveal)**
   - Replaced sticky scroll stacking animation with a high-converting, side-by-side 3-Pillar Bento Grid (Workers, Contractors, Enterprises).
   - Each card features: bilingual persona badges, live stats count (`350K+`, `20K+`, `50+`), ambient value chips (`₹5L Bima Cover`, `0% Commission`, `2-Hour SLA`, `100% Aadhaar KYC`, `100% GST & PF/ESIC`), 3 detailed benefit checkmarks, artwork zoom on hover, and animated arrow CTA buttons.
5. **Section 4: Stats Marquee & Testimonials Split Section**
   - Right-to-left moving data marquee (350k+ Workers, 20k+ Contractors, 50+ EPCs, 6k+ Cities).
   - Fixed signature blue quote block on the left and speech-bubble review carousel on the right with navigation arrows.
6. **Section 5: App Download CTA**
   - 3D angled smartphone mockup with dynamic island and metallic frame.
   - Scannable SVG QR code card with Google Play and App Store badges.
   - Floating metric badges: 4.5★ User Ratings & 3.5 Lakh+ App Downloads.
7. **Unified Landing Content**:
   - Consolidated all home sections into a single master file `components/Home.tsx` (`HomeContent`), keeping `app/page.tsx` minimal: `<Header />`, `<HomeContent />`, `<Footer />`.
   - Cleaned up and deleted the 6 redundant individual section files (`Hero.tsx`, `PopularSearches.tsx`, `SuperFounderBanner.tsx`, `CurtainRevealSection.tsx`, `StatsAndTestimonials.tsx`, `AppDownloadSection.tsx`) from `components/` to avoid dead code and clutter.

### 2.2 Header & Navigation System (`components/Header.tsx`)
1. **Top Utility Bar**: Phone helpline (`+91-7070999175`), email, and social icons (LinkedIn, X, Instagram, Facebook).
2. **Editorial Mega Menus (Matching User Reference Images)**:
   - **About Us ▾**: Single-column vertical dropdown (Image 1 style) with 3px `#0C59D4` top border and subtle horizontal dividers. Routes directly to the new subpages.
   - **Hire Manpower ▾**: 3-column mega menu (Image 2 style) covering *Civil & Finishing Trades*, *Whom We Serve*, and *Compliance & Rates*.
   - **For Workers ▾**: 2-column menu with *Rozgar & Placements* and *Benefits & Suraksha*.
   - **Resources ▾**: Single-column vertical list with blogs, laws, and media updates.
   - **Investor Relations**: Direct navigation anchor.
   - **Get in Touch**: Primary CTA button.
3. **Mobile/Tablet Burger Menu Drawer**:
   - Expandable accordions matching the same clean editorial design with thin dividers and blue top accent borders.

### 2.3 Completed About Us Ecosystem (8 + 1 New Pages Created)
1. **`/about-us`** (Master About Us Hub):
   - Hero with impact stats, origin story Bento Grid, 0% commission promise, 2-hr SLA card, Super Founders documentary card, 8 subpage navigation grid, and legacy FAQ accordion.
2. **`/about-us/history`** (Our History & Journey):
   - Chronological GSAP-animated interactive timeline spanning 2020 to 2026 (CIMPS incubation, first 1,000 workers, Hitachi award, NAREDCO scale, Super Founders).
3. **`/about-us/vision-mission`** (Vision & Mission):
   - Dual gradient cards for Mission and Vision, 5 Cr+ informal labor formalization pillar, zero commission policy, and dignity in labor.
4. **`/about-us/values`** (Core Values & Philosophy):
   - 6 value cards (Shramik Samman, Radical Transparency, 100% DBT, Worker Safety PPE, 2-Hour SLA, Statutory Compliance).
5. **`/about-us/leadership`** (Leadership & Founders):
   - Chandrashekhar Mandal (Founder & CEO) spotlight with official legacy quote, field operations division, and CIMPS/STPI advisory mentors.
6. **`/about-us/footprint`** (National Footprint & Network):
   - Corporate HQ (STPI Noida) & Registered Office (Darbhanga), 15+ industrial megacities grid with worker & active project density metrics.
7. **`/awards-recognition`** (Awards & Recognitions Hall of Fame):
   - Ceremonial photographs and certificates for Hitachi National Innovation Challenge, NAREDCO, MSME Champion, BIA, TiE Global, and NASSCOM 10K with image inspection lightbox modal.
8. **`/media-coverage`** (Print & TV Media Coverage):
   - Filterable tabs (All Media, TV Broadcasts, Print Press) with 11 TV features (Republic TV, Bloomberg, Sansad TV, MX Player) and 10 Print dailies (Panchjanya, Hindu Business Line, Hindustan, Bhaskar).
9. **`/partnerships`** (Institutional Partners & Collaborations):
   - Key alliances (Villgro, GDI, MRC, STPI), 15 builder and enterprise partner logo showcase, and partnership enquiry desk.

### 2.4 Completed Policies & Legal Ecosystem (All 5 Dedicated Pages Built)
1. **`/terms-and-conditions`** (Master User Agreement & Terms of Use):
   - Legal entity: Gaudrika Digital Labour Chowk (OPC) Private Limited.
   - Comprehensive sections: Acceptance & 18+ capacity, License to Access, Member Conduct, Rules for Service Providers (Mistris/Workers), Rules for Service Seekers (Builders/Contractors), Submitted Content, IP & Trademark Rights, Taxation & GST Invoicing, Dispute Resolution & Arbitration, Limitation of Liability, and Official Notice.
   - Jump-link navigation pills for all major clauses.
2. **`/privacy-policy`** (Data Governance & DPDP Act 2023 Compliance):
   - Scope: Website and all 3 mobile apps (DLC Rojgar, DLC Business, DLC Partner).
   - Structured definitions (Cookie, Company, Personal Data, Device).
   - What data is collected: Aadhaar/KYC, Bank/IFSC/UPI (for direct DBT payouts), Geolocation pins (for biometric muster roll geo-fencing).
   - 256-bit TLS/SSL encryption & AES-256 secure storage standards.
   - Clear self-serve Account Deletion / Right to be Forgotten workflow.
   - Designated Grievance Redressal Officer contact details.
3. **`/cancellation-policy`** (Service Level Agreement & Withdrawal Charges):
   - 100% Free Cancellation window (≥ 14 hours prior or within 10-minute Grace Period).
   - Late Cancellation (14h to 3h prior / till 6 AM of service day): 50% Service Fee charged to compensate independent worker.
   - Very Late Cancellation (3h to 1h prior / till 8 AM): 50% Service Fee charged.
   - Full Charge & Non-Refundable conditions (&lt; 1 hour, site no-show, invalid address).
   - Discretionary force majeure waiver clause.
4. **`/refund-policy`** (Consumer Protection Act 2019 & Contract Act 1872):
   - Official Refund Calculation Matrix table across all timing tiers.
   - 100% Free Worker Replacement Guarantee if a worker leaves site prematurely; full refund if replacement is unavailable.
   - Original payment source and DLC Wallet credit payout modes.
   - Standard 5 to 7 banking days turnaround time.
5. **`/disclaimer`** (Legal Notice & Platform Disclaimers):
   - General information & non-advisory notice.
   - Legal & financial disclaimer (not an attorney / legal advice).
   - Affiliate links & third-party partner disclosures.
   - Daily wage & worker earnings disclaimer.
   - Fair dealing & IP attribution.
   - "As-Is" warranty disclaimers and user indemnification obligations.
6. **Reusable Components & Footer Integration**:
   - `components/LegalNav.tsx`: Reusable sidebar with document switcher (active page highlighted) and official MCA Corporate Registry card (Noida HQ + Darbhanga Registered Office + Helpline & Email).
   - `components/Footer.tsx`: Updated all policy links from `href="#"` to the 5 live routes.

### 2.5 One-Click Regional Language Translation System
1. **`components/GoogleTranslateProvider.tsx`**:
   - High-performance Google Translate Web Engine integration customized specifically for Indian blue-collar construction labor.
   - Pre-defines global `googleTranslateElementInit` callback before external script execution.
   - Off-screen container `#google_translate_element` with natural layout dimensions avoiding DOM mounting rejections.
   - Uses `HTMLEvents` dispatching (`event.initEvent("change", true, true)`) ensuring instant translation event bubbling.
   - Programmatic language switcher with cookie persistence (`googtrans=/en/${code}`) and `localStorage` state management.
   - Supported languages:
     - 🇮🇳 **हिन्दी (Hindi)** — Primary vernacular language for Northern & Central Indian construction workforce
     - 🌾 **भोजपुरी (Bhojpuri - `bho`)** — Prominently featured 1-click regional language for Eastern UP & Bihar workforce
     - 🌾 **मैथिली (Maithili - `mai`)** — Prominently featured 1-click regional language reflecting DLC's Darbhanga roots
     - 🌐 **English** — Default
     - 🌾 **বাংলা (Bengali)** — High proportion of artisanal & civil labor
     - 🚩 **मराठी (Marathi)** — Maharashtra industrial hubs
     - 🌾 **ਪੰਜਾਬੀ (Punjabi)** — Punjab, Haryana, Delhi NCR
     - 🌾 **ગુજરાતી (Gujarati)** — Gujarat infrastructure projects
     - 🌾 **తెలుగు (Telugu)** — Hyderabad & AP sites
     - 🌾 **தமிழ் (Tamil)** — Chennai & Tamil Nadu
     - 🌾 **ଓଡ଼ିଆ (Odia)** — Odisha construction labor
     - 🌾 **اردو (Urdu)**
2. **`components/LanguageSwitcher.tsx`**:
   - **Topbar Variant**: Direct 1-click pills strictly for `[ EN | हिन्दी ]` visible on the header bar + regional languages dropdown `🌐 अन्य भाषा ▾` containing all 12 supported languages (Bhojpuri, Maithili, Bengali, Marathi, Punjabi, Gujarati, Telugu, Tamil, Odia, Urdu, Hindi, English).
   - **Navbar Variant**: Desktop menu button `🌐 English / हिन्दी ▾` positioned right beside CTA button.
   - **Mobile Drawer Variant**: High-contrast, large touch-friendly primary cards for 🇮🇳 **हिन्दी** and 🌐 **English**, with all regional languages (भोजपुरी, मैथिली, etc.) neatly organized in the 2-column grid below.
   - **Floating Mobile Variant**: Fixed corner pill `🌐 भाषा / Lang` on mobile viewports for instant one-click switching anywhere while scrolling (automatically hides when burger menu drawer opens).
3. **`app/globals.css` Style Normalization**:
   - Stripped unwanted default Google Translate artifacts (`.goog-te-banner-frame`, `body top 40px shift`, `#goog-gt-tt` hover tooltip popup, yellow text highlights).
   - Protected brand marks and entity titles using `.notranslate`.

### 2.6 Footer Component (`components/Footer.tsx`)
1. **Mobile Accordions**: Collapsible columns reducing mobile scroll by ~70%.
2. **Policies & Legal Column**: Terms and Conditions, Privacy Policy, Cancellation Policy, Refund Policy, and Disclaimer.
3. **Helpline Pill**: Fast dialer for `+91 9654007500`.

---

## 3. Currently Being Worked On / Active State
* **Active Working Directory**: `dlc-website-v2/`
* **Completed Routes & Features**:
  * Landing Page (`/`)
  * About Us Hub (`/about-us`) + 8 Subpages (`/about-us/history`, `/about-us/vision-mission`, `/about-us/values`, `/about-us/leadership`, `/about-us/footprint`, `/awards-recognition`, `/media-coverage`, `/partnerships`)
  * Policies & Legal Suite (5 Routes: `/terms-and-conditions`, `/privacy-policy`, `/cancellation-policy`, `/refund-policy`, `/disclaimer`)
  * One-Click Regional Language Translation Engine (Hindi + 8 Regional Languages)
* **TypeScript Compilation**: 0 errors (`npx tsc --noEmit` clean).
* **Next.js Dev Server**: Port 3001 healthy and responsive.

---

## 4. Next Planned Tasks
* **Phase 2: Authentication & Onboarding**:
  * Implement Worker OTP Login modal/flow.
  * Implement Contractor GSTIN registration form.
* **Phase 3: Service & Manpower Hubs**:
  * Build `/hire-manpower` (Contractor & Builder on-demand labor dispatch page).
  * Build `/worker` (Daily job search & DLC Worker App onboarding).
  * Build `/resources` (Labour Laws, Minimum Wage Index & Blogs).

---

## 5. Maintenance Protocol for Future AI Turns
1. **Read `Memory.md` first**: Do not use broad file greps or read large swathes of code unless modifying a specific file.
2. **Update on Completion**: Whenever a component or feature is created, edited, or refactored, update section 2 and 3 of `Memory.md` immediately.
3. **Maintain Zero-Touch Policy**: Verify with `git status --porcelain` that no root repository files are tracked or changed.
