# Digital Labour Chowk (DLC) V2 — Design System & Style Guide

---

## 1. Color Palette & Theme Tokens

The DLC design language blends trust, authority, and modern digital construction efficiency. The primary brand anchor is **DLC Signature Blue (`#0C59D4`)**.

```
  ┌───────────────────────────────────────────────────────────────┐
  │  DLC Signature Blue: #0C59D4   (Primary Action & Accent)       │
  │  DLC Deep Navy:      #0947AD   (Hover & Active States)        │
  │  Slate Dark:         #0F172A   (Headings & High-Contrast Text) │
  │  Slate Body:         #1E293B   (Body Text & Menu Items)       │
  │  Border Gray:        #E5E7EB   (Horizontal Dividers & Cards)  │
  │  Surface Pure:       #FFFFFF   (Clean Backgrounds & Cards)    │
  └───────────────────────────────────────────────────────────────┘
```

### 1.1 Brand Palette
| Token Name | Hex Code | Tailwind Equivalent | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Brand Blue** | `#0C59D4` | `bg-[#0C59D4]` / `text-[#0C59D4]` | Logos, primary CTA buttons, active links, 3px dropdown top borders, column headers |
| **Primary Blue Hover** | `#0947AD` | `hover:bg-[#0947AD]` | Button hover states, active transitions |
| **Secondary Tint Blue**| `#EFF6FF` | `bg-blue-50` / `border-blue-100` | Subtle badge backgrounds, hover card pills |
| **Dark Navy / Slate** | `#0F172A` | `text-slate-900` / `bg-slate-900` | Section headings, dark signature quote cards |
| **Body Charcoal** | `#1E293B` | `text-slate-800` | Primary navigation links, dropdown menu items |
| **Muted Slate** | `#64748B` | `text-slate-500` | Subtitles, helper text, utility links |
| **Light Divider Gray** | `#E5E7EB` | `border-gray-200` | Dropdown horizontal row dividers, table borders |
| **Surface White** | `#FFFFFF` | `bg-white` | Main containers, dropdown popups, cards |

### 1.2 Functional Accents
* **Success / Verified**: `#10B981` (Emerald 500) — Used for 0% commission badges, active verification, and safety tags.
* **Warning / Star Ratings**: `#F59E0B` (Amber 500) — Used for 4.5★ app ratings and recognition medals.
* **Urgent / Fast Dispatch**: `#EF4444` (Red 500) — Used for the "2-Hr Dispatch" tag.

---

## 2. Typography & Hierarchy

### 2.1 Font Family
* **Primary Sans-Serif**: Modern clean geometric sans-serif (Inter / System UI font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`).

### 2.2 Typographic Hierarchy
| Style | Size | Weight | Tracking & Case | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display Heading** | `28px – 44px` | Black (`font-black`) | `tracking-tight` | Hero headlines, primary section titles |
| **Section Heading** | `20px – 28px` | ExtraBold (`font-extrabold`) | `tracking-normal` | Popular searches, Curtain cards, App CTA |
| **Nav Primary Links**| `13.5px` | Bold (`font-bold`) | `tracking-wider uppercase` | Header top-level links (`ABOUT US`, `HIRE MANPOWER`) |
| **Mega Menu Headers** | `16px – 17px` | Bold (`font-bold`) | `tracking-tight` (Title Case) | Column titles in mega dropdowns (e.g. `Civil & Finishing Trades`) |
| **Dropdown Items** | `14.5px – 15px`| Medium / Normal (`font-medium`) | Normal (Title Case) | Submenu row links (e.g. `Our History`, `Masons & Bricklayers`) |
| **Body Text** | `14px – 16px` | Normal (`font-normal`) | Normal | Descriptive paragraphs, review content |
| **Sub-labels & Badges**| `10px – 12px` | Bold / Black (`font-bold`) | `uppercase tracking-wider` | Metric labels, status pills, category tags |

---

## 3. Navigation & Dropdown UI Specification

The navigation system strictly adheres to the editorial corporate aesthetic provided in user design references:

### 3.1 Single-Column Dropdown (Image 1 Style)
* **Applied to**: `ABOUT US` and `RESOURCES`.
* **Width**: Fixed `w-72` (288px).
* **Top Accent**: Crisp `3px solid #0C59D4` line (`border-t-[3px] border-t-[#0C59D4]`).
* **Container**: Pure white background with soft drop shadow (`shadow-xl`) and subtle border (`border-x border-b border-gray-100`).
* **Rows**: Each item is styled with `py-3.5 text-[15px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors`.
* **Dividers**: Clean horizontal divider line (`border-b border-gray-200`) under every row with consistent side padding (`px-6`).

### 3.2 Multi-Column Mega Menu (Image 2 Style)
* **Applied to**: `HIRE MANPOWER` (3 columns) and `FOR WORKERS` (2 columns).
* **Width**: `w-[820px]` (3 cols) and `w-[600px]` (2 cols).
* **Top Accent**: Full-width `3px solid #0C59D4` line along the top of the dropdown card.
* **Column Titles**: Prominent `text-[17px] font-bold text-[#0C59D4] mb-3` in Title Case.
* **Row Items**: Individual links rendered with `py-3 text-[14.5px] text-slate-800 hover:text-[#0C59D4] border-b border-gray-200 transition-colors`.
* **Prohibited**: Bulky icon boxes, colored background chips, and multi-line paragraph descriptions are strictly excluded from dropdown menus.

---

## 4. Elevation, Radii & Layout Rhythm

* **Card Elevation**:
  * Default Cards: `shadow-sm hover:shadow-md transition-shadow`
  * Mega Menus: `shadow-xl border-x border-b border-gray-100`
  * Modal Lightbox: `shadow-2xl ring-1 ring-black/10`
* **Border Radii**:
  * Action Buttons: `rounded-lg` (8px)
  * Interactive Cards: `rounded-xl` (12px) to `rounded-2xl` (16px)
  * Stat Badges: `rounded-full`
* **Container Max Width**: `max-w-7xl` (1280px) centered with responsive padding (`px-4 sm:px-8 lg:px-12`).
