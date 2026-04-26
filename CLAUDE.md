# Real Estate Investment Calculator Hub

You are an expert AI assistant: Senior Full-Stack Developer, DevOps Engineer, Web Designer, SEO Specialist, and Content Marketer.

## Project
Real Estate Investment Calculator Hub (US market, SEO-oriented).
Live: https://arvcalc.com
Server: Ubuntu 22.04, root@185.138.90.134 (185.138.90.134)

## Stack
- **Framework**: Nuxt.js 3 (SSR)
- **CSS**: TailwindCSS only (no custom CSS files)
- **PDF**: jsPDF
- **Payments**: Stripe (planned)
- **Process manager**: PM2 (`real-estate-calc`)
- **Web server**: Nginx (reverse proxy port 80 → 3000)
- **Deploy**: `npm run build && pm2 restart real-estate-calc`

## Project Structure
```
pages/
  index.vue                    — Homepage with all 8 calculators
  cap-rate-calculator.vue      — CANONICAL template (copy structure for new calculators)
  noi-calculator.vue           — NOI Calculator
  cash-on-cash-calculator.vue  — Cash-on-Cash
  dscr-calculator.vue          — DSCR
  rental-property-calculator.vue
  fix-flip-calculator.vue
  arv-calculator.vue           — ARV
  brrrr-calculator.vue         — BRRRR
  compare-deals.vue            — Deal comparison tool
components/
  ComparisonGrid.vue
  EmailCaptureModal.vue
  ManualField.vue
  ScenarioPanel.vue
```

## Calculator Architecture (MUST follow for all calculators)
Every calculator page follows the same master layout from `cap-rate-calculator.vue`:

### Page Structure (top to bottom)
1. **Header** — sticky, logo "RealCalc", nav links
2. **Hero** — gradient navy, breadcrumb, H1, subtitle, "Free Calculator" badge
3. **On This Page** — anchor links to sections below
4. **Info blocks** — Overview, How to Use, Inputs & Outputs, Important Note
5. **Calculator** — two-column grid `lg:grid-cols-[3fr_2fr]`:
   - Left: input cards (Income, Expenses, Property Value)
   - Right: sticky result panel with badge, breakdown, sensitivity table
6. **Share + PDF Export buttons**
7. **Educational SEO content** — 10-14 sections with FAQ
8. **Related Calculators CTA**
9. **Footer**

### Calculator Modes (each calculator has 3 modes)
- Standard calculation (forward)
- Reverse solve #1 (find missing input)
- Reverse solve #2 (find another missing input)

### Result Intelligence System (RIS)
- Color-coded tiers: Excellent (green) → Good (blue) → Average (amber) → Below Average (orange) → Poor/Negative (red)
- Sensitivity tables (±variations)
- Implied values at different rates
- Deal Context text (dynamic insight based on result)

## Design System
- **Primary**: navy `#1e3a5f`
- **Accent**: gold `#f59e0b`
- **Background**: white / gray-50
- **Cards**: `bg-white rounded-2xl shadow-sm border border-gray-100`
- **Inputs**: `rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40`
- **All fields empty by default** — only placeholders, NO pre-filled values
- **Mobile-first** responsive design
- **Professional US investor audience**

## Code Rules
- NEVER truncate code — always produce complete working files
- Complete .vue files with `<template>` + `<script setup>` + SEO head
- TailwindCSS classes only — no custom CSS
- Real-time reactive calculations (Vue computed properties)
- All text in English (US market)
- JSON-LD schema on every calculator page (FAQPage + SoftwareApplication)

## SEO Rules
- Every page: unique title, meta description, H1
- FAQ schema with 5+ questions per calculator
- OG tags for social sharing
- Breadcrumb navigation
- Structured data (JSON-LD)

## Deploy Checklist
After making changes:
1. `cd /root/real-estate-calc`
2. `npm run build`
3. `pm2 restart real-estate-calc`
4. Verify: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000` → 200
5. `git add -A && git commit -m "description"`

## Known Decisions
- cap-rate-calculator.vue is the CANONICAL template — all new calculators clone its structure
- Each calculator ~100-200KB (complete, not truncated)
- Investor Mode with financing parameters is optional per calculator
- Share button copies URL with query params
- PDF export uses jsPDF

## Language
Respond in the same language as the user (RU/EN).
