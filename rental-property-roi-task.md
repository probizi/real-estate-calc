# TASK — Rental Property ROI Calculator (Phase 15)

## CONTEXT

You are generating a Vue.js page for RealCalc — an SEO hub of 30 US real estate calculators. This is the **Rental Property ROI Calculator** (Phase 15, Priority 2 calculator, ~15K-25K searches/month).

Unlike Rental Property Calculator (Year 1 operating analysis — already deployed), this calculator is a **lifetime wealth projection tool** that models 1-30 year hold periods, tracking appreciation, principal paydown, depreciation benefits, and capital gains at sale.

Tech stack:
- **Nuxt.js 3** (Vue 3 composition API)
- **Tailwind CSS** (no custom CSS files)
- **Stripe** integration (pre-wired via master-prompt-v4.md)
- **jsPDF** for PDF export
- **Recharts or Chart.js** for Wealth Waterfall + Year-by-Year Equity charts

Deploy target: 185.138.90.134 (RealCalc production server)

---

## REQUIRED INPUT FILES (upload to bot together)

1. `rental-property-roi-ris-prompt-final.md` — 1026 lines, RIS v2 round 3 final (3 review rounds, 18 fixes). **SOURCE OF TRUTH for all formulas and logic.**
2. `rental-property-roi-seo-prompt-final.md` — 1426 lines, SEO v2 round 1 (1 review round, 7 fixes). **SOURCE OF TRUTH for all page content.**
3. `rental-property-roi-seo-validation-prompt.md` — 177 lines, companion validation (OPTIONAL second-pass check, 45 items).
4. `master-prompt-v4.md` — base Vue page skeleton.

---

## EXECUTION ORDER (FOLLOW STRICTLY)

1. **Read ALL 3 prompt files** before writing any code. RIS is source of truth for calculations. SEO is source of truth for content.
2. **Read master prompt** for base page skeleton.
3. **Generate the Vue page** (`rental-property-roi-calculator.vue`) — **minimum 2800 lines** (simpler than Compare Deals but more complex than Rental Property Calculator due to 6-phase simulation + 3 modes + Wealth Waterfall + sensitivity tables).
4. **Generate 1 integration patch** — add "Analyze long-term ROI" button to `rental-property-calculator.vue`.

---

## CALCULATION ENGINE (from RIS)

All formulas MUST match RIS exactly. Do NOT invent math.

### THREE MODES (top-level tabs)

- **Mode 1 — Forward ROI** (default, indigo): one hold period, Wealth Waterfall + IRR
- **Mode 2 — Hold Period Sensitivity** (blue): ROI table at 5/10/15/20/25/30 year checkpoints
- **Mode 3 — Compare Sell Years** (emerald): two specific sell years side-by-side

Mode 3 scope is INTENTIONALLY NARROW (v1): only sell-year comparison. **NOT supported in v1**: 1031 Exchange, mid-hold refinance. These are v2 roadmap.

### 6-PHASE CALCULATION (canonical)

```
Phase 1 — Initial Cash Invested:
  Initial Cash = Down Payment + Closing Costs + Rehab

Phase 2 — Loan Amortization (monthly):
  Monthly Payment (P&I) via standard textbook formula
  For each month 1..Hold×12: compute Interest, Principal, Remaining Balance
  Sum principal → Principal Paydown component

Phase 3 — Year-by-Year Simulation:
  For Y in 1..Hold:
    Gross Rent_Y = Monthly Rent × 12 × (1 + Rent Growth)^(Y-1)
    Effective Rent = Gross × (1 − Vacancy %)
    NOI = Effective Rent × (1 − OpEx %)
    Pre-Tax Cash Flow = NOI − Annual Debt Service
    Annual Depreciation = (Purchase + Rehab) × (1 − Land %) / 27.5
    Estimated Depreciation Benefit_Y = Annual Depreciation × Marginal Tax Rate

Phase 4 — Terminal Sale (uses Rule 3 SPLIT tax):
  Property Value_Sale = Purchase × (1 + Appreciation)^Hold
  Selling Costs = Property Value_Sale × Selling Cost %
  Remaining Loan = amortization balance at final month

Phase 5 — SPLIT SALE TAX (RIS Rule 3 — CANONICAL, NEVER simplified):
  Accumulated Depreciation = Annual Depreciation × Hold Period
  Adjusted Basis = Purchase + Rehab − Accumulated Depreciation
  Total Gain = (Property Value_Sale − Selling Costs) − Adjusted Basis
  
  Depreciation Recapture Tax = 25% × min(Accumulated Depreciation, max(0, Total Gain))
  LTCG Gain Portion = max(0, Total Gain − Accumulated Depreciation)
  Capital Gains Tax = LTCG Gain Portion × (Federal LTCG + State CG)
  
  Total Sale Tax = Depreciation Recapture Tax + Capital Gains Tax
  
  Loss-sale edge case (Total Gain ≤ 0): all taxes = 0

Phase 6 — Wealth Waterfall + IRR:
  Total Wealth = Cumulative Cash Flow + Principal Paydown + Appreciation 
               + Estimated Depreciation Benefit − Total Sale Tax
  
  Total ROI % = Total Wealth / Initial Cash Invested × 100
  
  IRR cash flow series:
    CF_0 = −Initial Cash Invested
    CF_1..CF_{N-1} = Pre-Tax Cash Flow per year
    CF_N = Year N Cash Flow + Net Proceeds at Sale
  
  Solve NPV = 0 via Newton-Raphson (tolerance 0.01%, max 100 iterations)
  
  Fallback: if solver fails → CAGR with "(approximated)" label + info icon
  
  INVARIANT: Waterfall Total Wealth = (IRR cash flow sum − Initial Cash) ±$100
    If violated → flag deal INVALID
```

### CRITICAL RULES (from RIS)

1. **SPLIT tax mandatory** — NEVER combined single rate on Total Gain
2. **min()/max() guards** on recapture and LTCG — prevents phantom tax on loss sales
3. **Hold Period range: 1-30 years**, default 10
4. **Warning threshold: Hold ≤ 3 years** (heavily skewed by selling costs)
5. **Year 1 sale tax disclosure** — short-term vs long-term ambiguous, warn user
6. **Negative IRR is LEGITIMATE** — display "-2.1%" with red banner, do NOT block IRR
7. **IRR fallback transparency** — "(approximated)" label + info icon (ⓘ) + amber color when CAGR fallback triggers
8. **"Estimated Depreciation Benefit"** — ALWAYS (never "Tax Savings" / "Tax Shield")
9. **"Wealth Break-Even Hold Period"** — ALWAYS (never just "Break-Even")
10. **Cross-calculator invariant** — Year 1 CoC must match Rental Property Calculator ±0.1 pp

### WATERFALL ≠ IRR CASH FLOW (critical no-double-count)

These are TWO SEPARATE representations:
- **Waterfall** = explanatory decomposition of wealth created (4 components − sale tax)
- **IRR Cash Flow** = actual cash received timeline (Year 0 outflow + annual CF + terminal)

**Invariant:** Sum of Waterfall components = (Sum of IRR cash flows − Initial Cash) within ±$100. Do NOT mix them.

### WEALTH BREAK-EVEN Implementation Note

For each Y in 1..30, RECOMPUTE terminal sale AS IF sold at year Y using Rule 3 SPLIT formula with Y-specific accumulated depreciation. Do NOT reuse final-year sale values or linear interpolate. 30 iterations × ~5 ops = 150 ops total — negligible performance.

### EXTREME ASSUMPTIONS GUARDS

Display warning banners when:
- Rent Growth > 6% → "Aggressive rent growth. US average 2-4%."
- Appreciation > 6% → "Aggressive appreciation. US historical 3-4%."
- Hold Period ≤ 3 → "Short hold heavily skewed by selling costs + sale tax."
- Vacancy < 5% → "Very optimistic vacancy. US average 6-8%."

---

## INPUT SCHEMA

### Acquisition (required)
- Purchase Price (currency)
- Down Payment % (default 25)
- Closing Costs % (default 2)
- Initial Rehab Budget (default 0)

### Financing (required)
- Loan Rate % (default 7.5)
- Loan Term years (default 30)
- Loan Type (Conventional / DSCR / Portfolio)

### Rental Income (required)
- Monthly Rent (currency)
- Vacancy % (default 8)
- Annual Rent Growth % (default 3)
- OpEx % of Rent (default 35)

### Appreciation (required)
- Annual Appreciation % (default 3)

### Tax Parameters (Advanced, collapsed by default)
- Marginal Tax Rate % (default 24)
- Depreciation Period (default 27.5)
- Land Value % of Purchase (default 20)
- Selling Cost % (default 7)
- Federal LTCG Rate % (default 15)
- State Capital Gains % (default 0)

### Hold Period
- Hold Period years (range 1-30, default 10)

### Mode 3 Sell Years
- Sell Year A (range 1-30)
- Sell Year B (range 1-30)

---

## OUTPUT DISPLAY

### Primary Metrics Cards (always shown, Mode 1)
```
[Initial Cash]      [Total Wealth]     [Total ROI %]      [Annualized IRR]
    $81,000            $115,200          142.2%              11.8%
                                                             (5Y CAGR)
```

Primary metrics: Total ROI % and Annualized Return (IRR) — BOTH always shown.

### Wealth Waterfall Chart (HERO visualization, Mode 1)

Horizontal bar chart:
- Cumulative Cash Flow (blue)
- + Principal Paydown (indigo)
- + Appreciation (emerald, usually largest)
- + Estimated Depreciation Benefit (amber)
- − Total Sale Tax (red, split: Recapture + LTCG shown separately on hover)
- = Total Wealth Created (final bar, darkest indigo)

### Year-by-Year Equity Chart (Mode 1)

Line chart, X = Year 1..Hold, Y = Dollar Equity Position
3 stacked lines: Cumulative Cash Flow (blue), Principal Paydown (indigo), Unrealized Appreciation (emerald).

### Wealth Break-Even Card
```
Wealth Break-Even Hold Period: Year 4
  — at year 4, cumulative wealth (including hypothetical sale tax) turns positive
```

### Mode 2 — Hold Period Sensitivity Table
```
           5Y      10Y     15Y     20Y     25Y     30Y
Total ROI  45%     142%    260%    420%    650%    980%
IRR        8.7%    11.8%   12.1%   11.9%   11.5%   11.1%    ← highlight max
Total $    $36K    $115K   $211K   $340K   $527K   $794K
Equity     $75K    $175K   $305K   $475K   $700K   $1.0M
Cum CF     $8K     $12K    $24K    $45K    $78K    $124K
Net Proc   $87K    $175K   $284K   $420K   $590K   $812K
```
Highlight "optimal" year (highest IRR) with indigo border + "Optimal Hold" badge.

### Mode 3 — Compare Sell Years Table

Two columns side-by-side, 7 rows: Total ROI %, IRR, Total Wealth, Equity at Sale, Net Proceeds, Remaining Loan, Risk Note.

Winner highlight: higher-IRR year gets emerald border + "Better Annualized Return" badge. If IRR delta < 1 pp → "Too Close to Call".

### Scenarios (3 tabs: Conservative / Base / Optimistic)

- Conservative: Appreciation −2pp, Rent Growth −1pp, Vacancy +5pp, OpEx +5pp
- Base: user inputs
- Optimistic: Appreciation +1pp, Rent Growth +1pp, Vacancy −2pp, OpEx −2pp

Winner Sensitivity warning if IRR delta Conservative vs Optimistic > 3 pp.

### 3 Sensitivity Tables

Performance guard: max 100 cells per table, 300 total.
1. Appreciation × Rent Growth (7×6=42 cells): Total ROI %
2. Hold Period × Appreciation (6×5=30 cells): Annualized IRR
3. Leverage × Hold Period (6×4=24 cells): Total ROI %
Total: 96 cells ✓ within limit.

---

## URL IMPORT SCHEMA

From Rental Property Calculator:
```
/rental-property-roi-calculator?p=300000&dp=25&cc=2&lr=7.5&lt=30&r=2200&vc=8&op=35&ga=3&gr=3&hp=10
```

Short param keys: p, dp, cc, rb, lr, lt, r, vc, op, ga, gr, hp, mtr, lv, sc, cgf, cgs

---

## INTEGRATION PATCH — `rental-property-calculator.vue`

Add button to results section:

```vue
<button @click="analyzeLongTermROI"
        class="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold flex items-center gap-2">
  <span>Analyze long-term ROI (5-30 years)</span>
  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M13 7l5 5m0 0l-5 5m5-5H6"/>
  </svg>
</button>
```

Method:
```js
analyzeLongTermROI() {
  const params = new URLSearchParams({
    p: this.purchasePrice,
    dp: this.downPayment,
    cc: this.closingCost,
    lr: this.loanRate,
    lt: this.loanTerm,
    r: this.monthlyRent,
    vc: this.vacancy,
    op: this.opex,
    ga: this.appreciation || 3,
    gr: this.rentGrowth || 3,
    hp: 10
  });
  window.location.href = `/rental-property-roi-calculator?${params}`;
}
```

---

## SEO CONTENT STRUCTURE (15 sections from SEO prompt — strict order)

1. TITLE + META + H1 (hardcoded fallbacks — DO NOT modify)
   - TITLE: `Rental Property ROI Calculator — Lifetime Wealth | RealCalc` (56 chars)
   - H1: `Rental Property ROI Calculator — Long-Term Wealth Projection Tool` (64 chars)
   - META: `Project rental property ROI over 1-30 year holds — total return, annualized IRR, wealth waterfall. Free long-term rental analysis tool for investors.` (151 chars)
2. OVERVIEW (4 paragraphs with plain-language opener)
3. HOW TO USE (5 steps + 4 pro tips + 3 mode explanations)
4. INPUTS & OUTPUTS (table with split tax formula in outputs)
5. FORMULA (6 phases + Wealth Waterfall + Austin TX 2026 worked example)
6. WHAT IS (3 paragraphs)
7. RESULT MEANING (ROI tiers + IRR tiers + Wealth Break-Even interpretation)
8. BENCHMARKS (by hold period + IRR bands + component composition)
9. STRATEGY (5 investor blocks)
10. APPLICATIONS (6 use cases)
11. INDUSTRY STANDARDS
12. LIMITATIONS (6 items + CANONICAL PARTIAL-TAX FORMULA block + When Not to Use)
13. COMMON MISTAKES (5 items)
14. FAQ (9 Q&A)
15. RELATED CALCULATORS + SCHEMA block

### STRUCTURE PRESERVATION RULES (v2 round 1 SEO fix)

- Each section = separate H2 block. NEVER merge sections.
- Paragraph length: 2-5 sentences max.
- Lists stay as lists. NEVER convert to paragraphs.

---

## TEST SUITE (7 cases from RIS — updated for split tax logic)

Verify after generation:

**Test 1 — Standard 10-year hold (Austin TX)**
Inputs: Purchase $300K, 25% down, 7.5% rate, 30yr, $2,200 rent, 3% appreciation, 3% rent growth, 8% vacancy, 35% OpEx, 10 years, 24% tax, 20% land, 7% selling, 15% Fed LTCG, 0% State CG
Expected:
- Initial Cash: ~$81,000
- Total ROI: 115-160%
- IRR: 10-13%
- Total Wealth: $93,000-$130,000
- **Split Sale Tax: Recapture ~$21,800 + LTCG ~$11,200 = Total ~$32,000-$35,000**
- Waterfall invariant: |Waterfall − IRR Sum| < $100

**Test 2 — Long 20-year hold**: Total ROI 310-420%, IRR 9-11%
**Test 3 — Short 3-year hold (triggers warning)**: Total ROI 10-40%, warning banner
**Test 4 — High leverage (15% down)**: Total ROI 160-200%
**Test 5 — All-cash**: Total ROI 50-80%, IRR 6-8%
**Test 6 — Aggressive appreciation 8% (triggers warning)**: Total ROI 230%+
**Test 7 — Negative cash flow property**: Total ROI 75-110%, IRR 5-7%

**Test 8 — Cross-calculator invariant**: Year 1 CoC in this calculator matches Rental Property Calculator ±0.1 pp for identical inputs.

---

## CRITICAL CHECKLIST (40+ items)

### RIS compliance (20 items)

- [ ] All formulas match `rental-property-roi-ris-prompt-final.md` exactly
- [ ] 6-phase simulation: Initial Cash → Amortization → Year-by-Year → Terminal Sale → SPLIT Tax → Waterfall+IRR
- [ ] **SPLIT sale tax MANDATORY**: Recapture Tax = 25% × min(Accumulated Depreciation, max(0, Total Gain)); LTCG Tax = (Fed LTCG + State CG) × max(0, Total Gain − Accumulated Depreciation)
- [ ] min()/max() guards applied — loss sale produces 0 tax, never negative
- [ ] NEVER use combined single rate on Total Gain (explicitly forbidden)
- [ ] Waterfall Invariant: |Waterfall Total − (IRR Sum − Initial Cash)| ≤ $100 — validate for every output
- [ ] Waterfall = explanatory decomposition; IRR cash flow = actual timeline — NOT mixed
- [ ] "Estimated Depreciation Benefit" label EVERYWHERE — never "Tax Savings" / "Tax Shield"
- [ ] "Wealth Break-Even Hold Period" label — never just "Break-Even"
- [ ] IRR can be NEGATIVE — display valid negative result with red banner, do NOT block
- [ ] IRR fallback to CAGR with "(approximated)" label + info icon (ⓘ) + amber color
- [ ] Hold Period range 1-30 years, default 10
- [ ] Warning Hold ≤ 3 years with Year 1 sale tax disclosure when Hold = 1
- [ ] Terminal Value equity basis, selling costs deducted
- [ ] Cross-calculator invariant: Year 1 CoC matches Rental Property Calculator ±0.1 pp
- [ ] Wealth Break-Even: recompute terminal sale per year Y (NOT reuse final-year values)
- [ ] Sensitivity tables performance guard: max 100 cells per table, 300 total (current 42+30+24=96 ✓)
- [ ] Extreme assumption warnings (Appreciation >6%, Rent Growth >6%, Vacancy <5%, Hold ≤3)
- [ ] Winner Sensitivity warning when Conservative vs Optimistic IRR delta > 3pp
- [ ] 3 modes: Forward ROI (indigo) / Hold Sensitivity (blue) / Compare Sell Years (emerald)

### UI/UX compliance (10 items)

- [ ] 3 modes via top-level tabs with color coding
- [ ] Tax parameters collapsed in Advanced section by default
- [ ] Both Total ROI % AND Annualized Return (IRR) shown as primary metrics
- [ ] Wealth Waterfall chart is hero visualization
- [ ] Year-by-Year Equity chart complements waterfall
- [ ] 3 sensitivity tables in Advanced section (Appreciation×Rent Growth, Hold×Appreciation, Leverage×Hold)
- [ ] 3 scenarios (Conservative / Base / Optimistic) as tabs
- [ ] Saved Scenarios widget consistent with other calculators ("N/20 saved · Compare all")
- [ ] Placeholders are instructions ("Enter purchase price") NOT numbers ("e.g., 250000")
- [ ] Mobile responsive; charts scale to mobile width

### SEO compliance (10 items)

- [ ] TITLE hardcoded: "Rental Property ROI Calculator — Lifetime Wealth | RealCalc"
- [ ] H1 hardcoded: "Rental Property ROI Calculator — Long-Term Wealth Projection Tool"
- [ ] META hardcoded 151 chars
- [ ] OVERVIEW_P1 starts with plain-language opener VERBATIM (1-30 years phrasing)
- [ ] At least 2 of 3 secondary keywords in P1: "real estate roi calculator", "investment property roi calculator", "long term rental roi"
- [ ] Pre-tax / partial-after-tax disclaimer in EXACTLY 4 placements
- [ ] "Not substitute for professional advice" in Limitations Item 6 + FAQ
- [ ] CANONICAL PARTIAL-TAX FORMULA block in Limitations (verbatim with ✓/✗ checkboxes)
- [ ] STRICT TERMINOLOGY CONTRACT enforced: 0 matches for forbidden terms (Tax Savings, Tax Shield, etc.)
- [ ] 15 SEO sections separate H2 blocks, no merging
- [ ] Schema block dual type (FinancialProduct + SoftwareApplication), 12+ features

### Integration (2 items)

- [ ] "Analyze long-term ROI" button added to rental-property-calculator.vue results section
- [ ] URL param pre-fill works when redirected from Rental Property Calculator

---

## FORBIDDEN TERMINOLOGY AUDIT (grep — all must be 0)

```bash
grep -ci "tax savings" page.vue                  # 0
grep -ci "tax shield" page.vue                   # 0
grep -ci "depreciation savings" page.vue         # 0
grep -ci "after-tax roi" page.vue                # 0
grep -ci "combined cg rate" page.vue             # 0
grep -ci "combined tax rate" page.vue            # 0
grep -ci "capital recovery break-even" page.vue  # 0
```

If ANY non-zero, regenerate with correct terminology.

---

## POST-DEPLOYMENT VALIDATION

After Vue generation, optionally run `rental-property-roi-seo-validation-prompt.md` as 2nd pass to audit 45 SEO quality checks.

Workflow:
1. Generate Vue page using this task + RIS + SEO prompt
2. Extract generated SEO content from Vue template
3. Run validation prompt against extracted content
4. Fix CRITICAL failures; STANDARD failures can be batch-patched

---

## DEPLOYMENT

Deploy path: `/var/www/realcalc/pages/rental-property-roi-calculator.vue`

Deploy 1 patched file:
- `/var/www/realcalc/pages/rental-property-calculator.vue`

After deploy:
```bash
cd /var/www/realcalc && npm run build
pm2 restart realcalc
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/rental-property-roi-calculator   # expect 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/rental-property-calculator       # expect 200 (verify patch didn't break)
```

Then manual checks:
1. Visit `/rental-property-roi-calculator` — 3 modes visible, default Mode 1 shows Wealth Waterfall
2. Visit `/rental-property-calculator`, enter a deal, click "Analyze long-term ROI" — should redirect with URL params
3. Test 3 modes produce distinct outputs
4. Test Year 1 hold period shows disclosure banner
5. Test negative cash flow property does NOT block IRR (shows valid negative or approximated)

---

## FINAL REMINDERS

1. **2800+ lines minimum** — 6-phase simulation + 3 modes + Wealth Waterfall chart + sensitivity tables + SEO 15 sections
2. **RIS is source of truth for math** — never invent formulas
3. **SEO is source of truth for content** — follow 15-section structure exactly
4. **SPLIT tax formula MANDATORY** — canonical min()/max() formula, never simplified
5. **"Estimated Depreciation Benefit"** — never "Tax Savings" (terminology critical)
6. **Waterfall ≠ IRR Cash Flow** — two separate representations, NOT mixed
7. **Negative IRR is legitimate** — do NOT block
8. **Integration patch to rental-property-calculator.vue** is required
9. **7 test cases must pass** — verify before marking complete
10. **Phase 15 closes when Rental Property ROI + integration patch are deployed**

If ambiguity between RIS and SEO: **RIS wins** (3 review rounds vs SEO's 1).

**Begin by reading all 3 prompt files fully, then write the Vue page.**
