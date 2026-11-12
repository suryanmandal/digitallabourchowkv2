# Digital Labour Chowk (DLC) V2 — Development Rules & Guardrails

---

## 1. What to Use

### Core Architecture & Framework
* **Next.js App Router**: Build all new pages under the `app/` directory adhering to Next.js idioms.
* **Server vs Client Components**: Default to React Server Components (RSC). Only add `"use client"` when component uses state, browser APIs, or interactive hooks (`useState`, `useEffect`, `useRef`).
* **Semantic HTML**: Always use standard landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
* **TypeScript Strictness**: Type all component props, interfaces, event handlers, and data structures. Never use `any` unless required for newly shipped browser attribute casting.
* **Tailwind CSS**: Use standard utility classes for all styling. Rely on responsive breakpoints:
  * Mobile: default (base)
  * Tablet: `sm:` (640px) and `md:` (768px)
  * Desktop: `lg:` (1024px) and `xl:` (1280px)
  * Ultrawide: `2xl:` (1536px)
* **Iconography**: Exclusively use `lucide-react` icons. Maintain consistent sizing (`w-3.5 h-3.5`, `w-4 h-4`, `w-5 h-5`).
* **Asset Loading**: Use `next/image` with explicit `alt`, `fill` or `width`/`height`, and `sizes` attributes for responsive srcset optimization.
* **Navigation Links**: Use `next/link` for internal routing; standard `<a>` with `target="_blank"` and `rel="noreferrer"` for external tabs.

---

## 2. What to Avoid (Strict Guardrails & AI Boundaries)

### 2.1 The Legacy Repository Zero-Touch Rule (CRITICAL)
> [!CAUTION]
> **STRICT ZERO-TOUCH POLICY ON LEGACY REPO**:
> The parent repository root contains the legacy WordPress/PHP codebase.
> - **NEVER** edit, move, delete, or commit files in the root folder or outside `dlc-website-v2/`.
> - **NEVER** run git commits that stage files from the root.
> - `dlc-website-v2/` is explicitly listed in `.gitignore` to keep all modern V2 code completely isolated until migration day.

### 2.2 Prohibited Libraries & Patterns
* **NO Heavy Third-Party Bloat**: Do NOT install heavy UI component kits (MUI, Ant Design, Bootstrap, Chakra UI) or bulky animation engines (e.g. framer-motion) for simple CSS-achievable interactions.
* **NO jQuery or Legacy DOM Manipulation**: Never use `document.getElementById` or `window.$` inside React components when state or refs can manage it cleanly.
* **NO Unvalidated Tailwind v4-only Classes**: Do not introduce classes not defined in the active configuration (e.g., `h-18`, `focus:outline-hidden` instead of `focus:outline-none`).
* **NO Clunky Icon Boxes in Navigation**: Do NOT reintroduce bulky square colored icon cards or descriptive multi-line paragraphs into header submenus. The header navigation must strictly adhere to the clean, minimalist, editorial corporate design (clean Title Case text with light horizontal divider lines and 3px blue top accent line) established in `Design.md`.
* **NO Broken Unescaped JSX Characters**: Never write bare apostrophes or quotation marks in JSX text. Use `&apos;` and `&quot;`.

### 2.3 Error Handling & Fallbacks
* **TypeScript Validation**: Every change MUST compile cleanly with `npx tsc --noEmit` with **0 errors** before considering a turn complete.
* **Hydration Safety**: Ensure no server/client mismatch occurs. Avoid accessing `window` or `document` during initial render; wrap browser API calls in `useEffect`.
* **Media & Fallbacks**: All external iframes (e.g. Vimeo) must have meaningful titles and fallback loading indicators. Image components must specify responsive `sizes` to eliminate layout shift (CLS).
* **Network & Port Isolation**: The Next.js dev server runs strictly on **port 3001** (`http://localhost:3001`). Do NOT kill or bind over default system services.

---

## 3. Workflow & AI Agent Instructions
* Always check `Memory.md` at the beginning of each session to understand current progress and active files without rescanning the entire repository.
* When adding or modifying features, immediately reflect the updates in `Memory.md`.
* Verify visual output using headless snapshots (`WKWebView` / WebKit) to guarantee zero UI regressions across mobile (390px), tablet (768px), and desktop (1440px).
