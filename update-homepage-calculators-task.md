# TASK — Full Homepage & Calculators Page Alignment (Phase 14 wrap-up)

## CONTEXT

Three problems to fix in a single deployment:

1. **Compare Deals carriage:** Compare URL was `/compare-deals`, now it's `/compare-real-estate-deals` per Phase 14 SEO spec. Old URL must be updated everywhere.

2. **Saved Scenarios widget MISSING from some calculators.** This is a critical UX/monetization feature ("Saved Scenarios — 2/20 saved · Compare all" — triggers upgrade prompts at free tier limit). Must appear in EVERY deployed calculator identically.

3. **Homepage and /calculators page show only deployed calculators.** Project scope per Project Plan is **30 calculators total** (Priority 1: 8 + Priority 2: 8 + Priority 3: 14 = 30). Homepage must show ALL 30 — working calculators as real links, not-yet-built ones as "Coming Soon" placeholder cards.

---

## INPUT CONTEXT

Currently deployed calculators (9):
- Cap Rate, NOI, Cash-on-Cash, DSCR, Rental Property, Fix and Flip, BRRRR, ARV, Compare Real Estate Deals

Project scope (from RealEstateCalc_ProjectPlan.pdf): **30 calculators total**. 21 remaining to build per this plan.

---

## PART A — COMPARE DEALS URL + DESCRIPTION UPDATES

### A1 — Fix Compare URL in `index.vue`

**Line 284:**
```vue
<NuxtLink to="/compare-deals"
```
→
```vue
<NuxtLink to="/compare-real-estate-deals"
```

**Line 293 (description):**
```
Compare up to 4 investment deals side by side — spot the winner instantly
```
→
```
Compare up to 3 deals across Rental, Fix & Flip, and BRRRR — get a Winner tier verdict with confidence level
```

### A2 — Fix Compare URL in `calculators.vue`

**Line 215:**
```vue
<NuxtLink to="/compare-deals"
```
→
```vue
<NuxtLink to="/compare-real-estate-deals"
```

**Line 223 (H3):**
```
Compare Deals
```
→
```
Compare Real Estate Deals
```

**Line 224 (description):**
```
Side-by-side comparison of up to 4 investment deals. Spot the best opportunity instantly.
```
→
```
Side-by-side comparison of 2-3 real estate deals. Winner tier verdict with calibrated confidence — Clear, Slight Edge, or Too Close to Call.
```

### A3 — Fix footer Compare link in `index.vue`

**Line 695:**
```vue
<li><NuxtLink to="/compare-deals" class="text-gray-400 hover:text-white text-sm transition">Compare Deals</NuxtLink></li>
```
→
```vue
<li><NuxtLink to="/compare-real-estate-deals" class="text-gray-400 hover:text-white text-sm transition">Compare Real Estate Deals</NuxtLink></li>
```

### A4 — Fix "Which Calculator Do I Need?" block in `calculators.vue`

**Lines 269-272:**
```
<p class="font-semibold text-gray-800 text-sm">"I want to compare multiple deals"</p>
<p class="text-sm text-gray-500">Use <NuxtLink to="/compare-deals" class="font-semibold hover:underline" style="color:#f59e0b;">Compare Deals</NuxtLink> side-by-side tool</p>
```
→
```
<p class="font-semibold text-gray-800 text-sm">"I want to compare multiple deals across strategies"</p>
<p class="text-sm text-gray-500">Use <NuxtLink to="/compare-real-estate-deals" class="font-semibold hover:underline" style="color:#f59e0b;">Compare Real Estate Deals</NuxtLink> — works for Rental vs BRRRR vs Flip</p>
```

### A5 — Fix Fix-and-Flip URL inconsistency

Two files use different slugs:
- `index.vue` → `/fix-and-flip-calculator`
- `calculators.vue` → `/fix-flip-calculator`

**Step 1:** Check which file physically exists:
```bash
ls /var/www/realcalc/pages/ | grep -i fix
```

**Step 2:** Standardize to `/fix-and-flip-calculator` (more natural SEO, matches Google search volume).

If file is named `fix-flip-calculator.vue`, rename it:
```bash
mv /var/www/realcalc/pages/fix-flip-calculator.vue /var/www/realcalc/pages/fix-and-flip-calculator.vue
```

Then update `calculators.vue` line 182 and 256:
```
/fix-flip-calculator
```
→
```
/fix-and-flip-calculator
```

---

## PART B — CALCULATOR COUNT: EXACT "30"

Project Plan specifies **exactly 30 calculators** as full scope (8 + 8 + 14). Change all references from "35+", "30+", or "10" to exact "30".

### B1 — `calculators.vue` hero description (line 49)

```
10 professional tools for US real estate investors. Analyze rental properties, flip deals, BRRRR strategies, and more — instantly, no signup required.
```
→
```
30 professional tools for US real estate investors. Analyze rental properties, flip deals, BRRRR strategies, compare deals side-by-side, and more — instantly, no signup required.
```

### B2 — `calculators.vue` meta description (line 305)

```
All 10 free real estate investment calculators for US investors: rental property, cap rate, NOI, DSCR, cash-on-cash, fix & flip, ARV, BRRRR, compare deals. No signup required.
```
→
```
30 free real estate investment calculators for US investors: rental property, cap rate, NOI, DSCR, cash-on-cash, fix & flip, ARV, BRRRR, compare real estate deals, and more. No signup required.
```

### B3 — `index.vue` all "35+" references → exact "30"

- Line 307: `"View All 35+ Calculators"` → `"View All 30 Calculators"`
- Line 370: `"All 35+ calculators 100% free"` → `"All 30 calculators 100% free"`
- Line 454: `"All 35+ calculators"` → `"All 30 calculators"`
- Line 696: `"View All 35+ →"` → `"View All 30 →"`
- Line 578 (FAQ): `"all 30+ calculators"` → `"all 30 calculators"` (drop "+")
- Line 752 (FAQ schema): `"All 35+ calculators"` → `"All 30 calculators"`
- Line 659: `"All calculators free forever"` ✅ keep
- Line 646: `"Join 25,000+ US investors"` ✅ keep (different metric)

**Verify after edits:**
```bash
grep -c "35+" /var/www/realcalc/pages/index.vue   # → 0
grep -c "30+" /var/www/realcalc/pages/index.vue   # → 0
grep -c "[[:space:]]30 [Cc]alculator\|All 30 calculators\|View All 30" /var/www/realcalc/pages/index.vue   # → 5-6
```

---

## PART C — SHOW ALL 30 CALCULATORS ON BOTH PAGES

Add missing 21 calculators as cards on `calculators.vue` (and at least the top-priority ones on `index.vue`). Working calculators link to real pages; unbuilt calculators show as "Coming Soon" with identical styling but disabled state.

### C1 — FULL LIST OF 30 CALCULATORS (from Project Plan)

#### Rental & Income Property (7)
- ✅ Rental Property Calculator → `/rental-property-calculator`
- ✅ NOI Calculator → `/noi-calculator`
- ✅ Cap Rate Calculator → `/cap-rate-calculator`
- ✅ Cash-on-Cash Return → `/cash-on-cash-calculator`
- ✅ DSCR Calculator → `/dscr-calculator`
- ✅ BRRRR Calculator → `/brrrr-calculator`
- ✅ Compare Real Estate Deals → `/compare-real-estate-deals`
- ⏳ Rental Property ROI Calculator (Priority 2) → `/rental-property-roi-calculator` (coming soon)
- ⏳ Property Cash Flow Calculator (Priority 2) → `/property-cash-flow-calculator` (coming soon)
- ⏳ Vacancy Rate Calculator (Priority 2) → `/vacancy-rate-calculator` (coming soon)
- ⏳ Multifamily Property Calculator (Priority 3) → `/multifamily-calculator` (coming soon)
- ⏳ Airbnb / STR Calculator (Priority 3) → `/airbnb-calculator` (coming soon)
- ⏳ GRM Calculator (Priority 3) → `/gross-rent-multiplier-calculator` (coming soon)
- ⏳ Property Management Fee Calculator (Priority 3) → `/property-management-fee-calculator` (coming soon)

#### Fix & Flip / Value Analysis (4)
- ✅ Fix and Flip Calculator → `/fix-and-flip-calculator`
- ✅ ARV Calculator → `/arv-calculator`
- ⏳ 70% Rule Calculator (Priority 2) → `/70-percent-rule-calculator` (coming soon)
- ⏳ House Flipping Profit Calculator (Priority 3) → `/house-flipping-calculator` (coming soon)
- ⏳ Rehab Cost Estimator (Priority 3) → `/rehab-cost-estimator` (coming soon)
- ⏳ BRRRR Refinance Calculator (Priority 3) → `/brrrr-refinance-calculator` (coming soon)

#### Financing & Loans (5)
- ⏳ Mortgage Calculator Investment (Priority 2) → `/mortgage-calculator` (coming soon)
- ⏳ LTV Calculator (Priority 3) → `/ltv-calculator` (coming soon)
- ⏳ Hard Money Loan Calculator (Priority 3) → `/hard-money-loan-calculator` (coming soon)
- ⏳ Debt Yield Calculator (Priority 3) → `/debt-yield-calculator` (coming soon)
- ⏳ Closing Costs Calculator Investor (Priority 3) → `/closing-costs-calculator` (coming soon)

#### Returns & Analysis (4)
- ⏳ Real Estate ROI Calculator (Priority 2) → `/real-estate-roi-calculator` (coming soon)
- ⏳ Rent vs Buy Calculator (Priority 2) → `/rent-vs-buy-calculator` (coming soon)
- ⏳ Real Estate IRR Calculator (Priority 3) → `/real-estate-irr-calculator` (coming soon)

#### Tax & Exit Strategy (3)
- ⏳ 1031 Exchange Calculator (Priority 2) → `/1031-exchange-calculator` (coming soon)
- ⏳ Real Estate Capital Gains Tax Calculator (Priority 3) → `/capital-gains-tax-calculator` (coming soon)
- ⏳ Depreciation Calculator (Priority 3) → `/depreciation-calculator` (coming soon)

**Total: 9 ✅ deployed + 21 ⏳ coming soon = 30 calculators**

### C2 — `calculators.vue` — New section structure

Current page has 2 sections ("Rental & Income Property", "Fix & Flip and Value Analysis"). Replace with 5 sections organized by category:

```
Section 1: Rental & Income Property (13 cards — 7 active + 6 coming soon)
Section 2: Fix & Flip and Value Analysis (6 cards — 2 active + 4 coming soon)
Section 3: Financing & Loans (5 cards — 0 active + 5 coming soon)
Section 4: Returns & Analysis (3 cards — 0 active + 3 coming soon)
Section 5: Tax & Exit Strategy (3 cards — 0 active + 3 coming soon)
```

### C3 — "Coming Soon" card template

For each unbuilt calculator, render a card with identical layout to active cards but disabled styling:

```vue
<!-- Coming Soon card template -->
<div class="group bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col opacity-70 cursor-not-allowed relative">
  <div class="absolute top-3 right-3">
    <span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-gray-200 text-gray-600">
      Coming Soon
    </span>
  </div>
  <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style="background: #94a3b8;">
    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  </div>
  <div class="flex-1">
    <h3 class="font-bold text-base mb-1 text-gray-500">{CALCULATOR NAME}</h3>
    <p class="text-sm text-gray-400 leading-relaxed mb-3">{SHORT DESCRIPTION}</p>
  </div>
  <span class="inline-flex items-center gap-1 text-sm font-semibold text-gray-400">
    In development
  </span>
</div>
```

**Descriptions for Coming Soon cards** (use these, don't invent):

- **Rental Property ROI Calculator**: Full lifetime ROI analysis for rental properties — cash flow, appreciation, tax benefits, and equity build-up over the hold period.
- **Property Cash Flow Calculator**: Detailed monthly cash flow projection with rent, expenses, debt service, and reserves.
- **Vacancy Rate Calculator**: Estimate vacancy impact on NOI and cash flow — market and property-specific scenarios.
- **Multifamily Property Calculator**: Underwriting tool for 5+ unit apartment buildings with per-unit analysis.
- **Airbnb / STR Calculator**: Short-term rental income projection — seasonal occupancy, ADR, cleaning costs, platform fees.
- **GRM Calculator**: Gross Rent Multiplier — quick valuation screening ratio.
- **Property Management Fee Calculator**: Compare self-management vs. professional property management costs.
- **70% Rule Calculator**: Quick flip offer calculator — maximum purchase price based on ARV and rehab.
- **House Flipping Profit Calculator**: Full flip profit projection with all costs and resale assumptions.
- **Rehab Cost Estimator**: Room-by-room renovation cost breakdown for flips and BRRRR.
- **BRRRR Refinance Calculator**: Dedicated refi cash-out calculator for the "R" step of BRRRR.
- **Mortgage Calculator (Investment)**: Investment property mortgage with DSCR, rate, and amortization.
- **LTV Calculator**: Loan-to-Value ratio for acquisition and refinance scenarios.
- **Hard Money Loan Calculator**: Short-term hard money costs, points, and total interest for flips.
- **Debt Yield Calculator**: NOI/loan-amount ratio used by commercial lenders.
- **Closing Costs Calculator (Investor)**: Estimated closing costs for investment purchases.
- **Real Estate ROI Calculator**: General-purpose ROI calculator for any real estate investment.
- **Rent vs Buy Calculator**: Financial comparison of renting vs. buying a primary residence or investment.
- **Real Estate IRR Calculator**: Internal Rate of Return for multi-year investment analysis.
- **1031 Exchange Calculator**: Tax-deferred exchange analysis — basis, boot, and depreciation recapture.
- **Real Estate Capital Gains Tax Calculator**: Short-term vs. long-term capital gains on property sales.
- **Depreciation Calculator**: Annual depreciation schedule for rental properties.

### C4 — `index.vue` — Add 3-4 missing Priority 1/2 cards to "Popular Calculators" section

Current homepage shows 9 calculator cards. Add these 3 Priority 2 cards as "Coming Soon" so users know the hub is expanding:

- Mortgage Calculator (Investment)
- Rent vs Buy Calculator
- 70% Rule Calculator

These are the **highest-traffic missing calculators** per Project Plan (Mortgage 30K-50K/mo, Rent vs Buy 40K-60K/mo, 70% Rule 8K-15K/mo).

Don't overcrowd the homepage — it's a showcase, not a catalog. All 30 calculators live on `/calculators`.

### C5 — Update "How to pick a calculator" block on `calculators.vue`

Current has 6 items. Keep structure, ensure all referenced calculators exist:
- Items 1, 3, 4, 5, 6 reference active calculators ✅ no change
- Item 2 references DSCR + NOI ✅ both active
- Consider adding item 7: `"I want to know my investment mortgage payment"` → `"Use Mortgage Calculator (coming soon) + DSCR to pre-qualify"`

---

## PART D — SAVED SCENARIOS WIDGET CONSISTENCY

**Critical UX issue:** "Saved Scenarios — 2/20 saved · Compare all" widget is present in SOME calculators but MISSING from others. This is a critical monetization feature (free tier limit triggers upgrade prompts).

### D1 — Audit which calculators have the widget

```bash
for file in /var/www/realcalc/pages/cap-rate-calculator.vue \
            /var/www/realcalc/pages/noi-calculator.vue \
            /var/www/realcalc/pages/cash-on-cash-calculator.vue \
            /var/www/realcalc/pages/dscr-calculator.vue \
            /var/www/realcalc/pages/rental-property-calculator.vue \
            /var/www/realcalc/pages/fix-and-flip-calculator.vue \
            /var/www/realcalc/pages/brrrr-calculator.vue \
            /var/www/realcalc/pages/arv-calculator.vue \
            /var/www/realcalc/pages/compare-real-estate-deals.vue; do
  if grep -q "Saved Scenarios" "$file"; then
    echo "✅ HAS widget: $(basename $file)"
  else
    echo "❌ MISSING widget: $(basename $file)"
  fi
done
```

### D2 — Reference implementation

Find a calculator that HAS the widget correctly implemented (likely `cap-rate-calculator.vue` — the canonical reference). Extract the exact component code including:

- Widget HTML/template block (the "Saved Scenarios — 2/20 saved · Compare all" card)
- `savedScenarios` state management (data/ref)
- "Save Scenario" button handler
- "Compare all" button handler
- 20-scenario limit check (free tier)
- Upgrade prompt modal trigger at limit
- Local state persistence (or backend integration if exists)

### D3 — Port widget to all missing calculators

For every calculator that FAILED the D1 audit, add the widget:

1. Copy the widget template block to the same position (below primary metric display, above action buttons)
2. Copy the state management (reactive refs, save handler, compare handler)
3. Adapt scenario data shape to match that calculator's inputs/outputs:
   - Cap Rate: saves `{price, noi, capRate}`
   - DSCR: saves `{noi, debtService, dscr}`
   - Compare Deals: saves the full 2-3 deal comparison state
   - etc.
4. Ensure "Compare all" button navigates to `/compare-real-estate-deals` with saved scenarios as URL params (where applicable)

### D4 — Consistency verification

After porting, all 9 deployed calculators should pass:

```bash
for file in /var/www/realcalc/pages/{cap-rate,noi,cash-on-cash,dscr,rental-property,fix-and-flip,brrrr,arv,compare-real-estate-deals}*.vue; do
  echo "=== $(basename $file) ==="
  grep -c "Saved Scenarios" "$file" || echo "MISSING"
  grep -c "2/20 saved\|/20 saved" "$file" || echo "COUNTER MISSING"
  grep -c "Compare all" "$file" || echo "COMPARE LINK MISSING"
done
```

All 9 calculators must show `>= 1` for each pattern.

### D5 — Widget styling consistency

Widget must look IDENTICAL across all 9 calculators:
- Same background color, border, padding
- Same "Saved Scenarios" header font size/weight
- Same "2/20 saved · Compare all" subtitle styling
- Same button placement and color scheme

If any calculator has a slightly different version, use the cleanest/most recent implementation as canonical and update all others to match.

---

## EXECUTION ORDER

1. **Backup both files + all 9 calculator files**
   ```bash
   mkdir -p /tmp/realcalc-backup-$(date +%Y%m%d-%H%M)
   cp /var/www/realcalc/pages/*.vue /tmp/realcalc-backup-*/
   ```

2. **Apply PART A (Compare URLs + Fix-and-Flip slug)** — smallest, most critical changes
3. **Apply PART B (exact "30" count)** — sed-friendly
4. **Apply PART D (Saved Scenarios widget audit + port)** — before adding Coming Soon cards, so navigation paths work
5. **Apply PART C (30 calculators on pages)** — biggest change, most visible
6. **Rebuild:** `cd /var/www/realcalc && npm run build`
7. **Restart PM2:** `pm2 restart realcalc`
8. **Verify all 9 calculator URLs return 200**
9. **Verify homepage and /calculators render correctly**
10. **Take screenshots of both pages for visual confirmation**

---

## VALIDATION CHECKLIST

### PART A — Compare Deals URLs
- [ ] All `/compare-deals` references changed to `/compare-real-estate-deals` in both files
- [ ] Description updated from "up to 4 deals" to "up to 3 deals" (matches RIS)
- [ ] H3 "Compare Deals" → "Compare Real Estate Deals" on calculators.vue
- [ ] Footer link updated
- [ ] "Which Calculator Do I Need?" block updated
- [ ] Fix-and-Flip URL unified to `/fix-and-flip-calculator` everywhere
- [ ] `grep "/compare-deals" index.vue calculators.vue` returns 0 matches

### PART B — Exact "30" count
- [ ] `grep "35+" index.vue` returns 0 matches
- [ ] `grep "30+" index.vue` returns 0 matches (except "25,000+" social proof)
- [ ] `grep "10 professional\|All 10 free" calculators.vue` returns 0 matches
- [ ] All calculator count mentions say exactly "30" (not "30+", not "35+")

### PART C — All 30 calculators visible
- [ ] `/calculators` page has 5 category sections
- [ ] 9 active calculators link to working pages (no 404)
- [ ] 21 "Coming Soon" cards are displayed with disabled styling
- [ ] Coming Soon cards show gray styling, "Coming Soon" badge, "In development" label
- [ ] Coming Soon cards are NOT clickable (cursor-not-allowed)
- [ ] Total calculator count on page: 30 exactly
- [ ] Homepage has 3 new Coming Soon cards (Mortgage, Rent vs Buy, 70% Rule)
- [ ] "Which Calculator Do I Need?" block still makes sense with all references

### PART D — Saved Scenarios widget
- [ ] D1 audit executed — list of MISSING calculators documented
- [ ] Reference implementation extracted from a working calculator
- [ ] Widget ported to ALL missing calculators
- [ ] D4 verification passes — all 9 calculators have "Saved Scenarios", "/20 saved", "Compare all"
- [ ] Widget styling consistent across all 9 calculators (same padding, colors, buttons)
- [ ] 20-scenario limit triggers upgrade prompt consistently

### Final build
- [ ] `npm run build` completes without errors
- [ ] `pm2 restart realcalc` successful
- [ ] All 9 active calculator URLs return HTTP 200
- [ ] 21 Coming Soon URLs return HTTP 404 (expected — not yet built)
- [ ] Homepage renders correctly visually
- [ ] /calculators page renders correctly visually
- [ ] No broken images, icons, or links anywhere

---

## POST-DEPLOYMENT

Manually verify in browser:

1. `https://185.138.90.134/` — scroll to calculator cards section:
   - 9 active cards + 3 Coming Soon cards (Mortgage, Rent vs Buy, 70% Rule)
   - Compare card links to `/compare-real-estate-deals`
   - "View All 30 Calculators" button visible
   - Footer Compare link updated

2. `https://185.138.90.134/calculators`:
   - Hero says "30 professional tools"
   - 5 category sections visible
   - 9 active cards clickable and lead to working pages
   - 21 Coming Soon cards visible with gray styling
   - Each calculator category has mix of active + coming soon cards
   - "Which Calculator Do I Need?" block functional

3. Click through each active calculator:
   - Saved Scenarios widget visible in ALL 9 calculators
   - Widget shows "X/20 saved · Compare all"
   - Widget styling identical across all 9 calculators

4. Compare Real Estate Deals specifically:
   - Loads without 404
   - Shows 3-mode UI (Compare / Find Break-Even / Deal Screening)
   - Saved Scenarios widget present
   - Import URL params from other calculators work

---

## NOTES

- **Priority:** Part A (Compare URL) is the ONLY change that can break live navigation. Deploy A + build + verify BEFORE starting B, C, D.
- **Part D is the highest complexity task** — do NOT skip testing Saved Scenarios on each calculator after porting.
- **Part C adds a LOT of HTML** (21 Coming Soon cards) — if file size becomes an issue, consider extracting card template into a reusable component `<ComingSoonCard>`.
- **Coming Soon URLs return 404 intentionally** — do NOT create placeholder pages. They'll be replaced with real calculators in Phase 15+.

