# TASK — Rent vs Buy Calculator (Phase 18)

## CONTEXT

You are generating a Vue.js page for RealCalc — SEO hub of 30 US real estate calculators. This is the **Rent vs Buy Calculator** (Phase 18, Priority 2 FLAGSHIP — 40,000-60,000 searches/month, HIGHEST traffic in remaining hub).

**CRITICAL POSITIONING**: This is the **FIRST non-investor calculator** in the hub. Audience = primary residence buyers/renters, NOT real estate investors.

Key positioning differences from investor calculators (Mortgage Investment, Rental Property, etc.):

- Default rate **6.75% consumer** (NOT 7.5% investor)
- Default down payment **20%** (NOT 25% investor)
- NO DSCR / Cap Rate / NOI / Cash-on-Cash metrics
- Tone: less technical, more empathetic
- Audience redirect pattern: investor users → Mortgage Investment Calculator

Workflow position:
```
Rent vs Buy Calculator → 
  → If "Buy wins": Mortgage Calculator (consumer rates) for payment details
  → If "Rent wins": stay renting, revisit annually
  → For investors: redirect to Mortgage Investment / Rental Property
```

Tech stack: Nuxt.js 3 + Tailwind + Stripe + jsPDF + Chart.js

Deploy target: 185.138.90.134

---

## REQUIRED INPUT FILES (upload to bot together)

1. `rent-vs-buy-ris-prompt-final.md` — RIS (874 lines, 2 rounds, 11 fixes — corrected Net Wealth methodology). **SOURCE OF TRUTH for formulas, thresholds, test cases.**
2. `rent-vs-buy-seo-prompt-final.md` — SEO (1559 lines, 2 rounds, 10 fixes). **SOURCE OF TRUTH for content structure.**
3. `rent-vs-buy-seo-validation-prompt.md` — validation companion (256 lines, 45 checks, OPTIONAL).
4. `master-prompt-v4.md` — base Vue skeleton with Stripe/PDF/Saved Scenarios integration.

---

## UNIFIED PIPELINE

```
STEP 1 — MASTER PROMPT (Vue scaffold, Stripe, PDF, Saved Scenarios pattern)
         ↓
STEP 2 — RIS (formulas, 3 modes, 10 critical rules, Net Wealth methodology)
         ↓
STEP 3 — SEO (15 sections, TITLE/META/H1, copy, audience signaling)
         ↓
STEP 4 — VALIDATION (optional 45-check audit)

CONFLICT RESOLUTION ORDER:
  RIS wins on math, formulas, logic, test cases, critical rules
  SEO wins on copy, content structure, disclaimer phrasing
  Master wins on technical scaffolding (Vue, Stripe, PDF, Saved Scenarios)
  Validation is advisory
```

---

## EXECUTION ORDER

1. **Read all 3 prompt files** + master prompt before coding.
2. **Generate Vue page** (`rent-vs-buy-calculator.vue`) — **minimum 2800 lines**.
3. **Generate 1 integration patch** — add inbound button to Mortgage Investment Calculator.
4. **Include Saved Scenarios widget** identical to canonical reference.

---

## CALCULATION ENGINE (from RIS — strict)

### Three Modes

- **Mode 1 Standard Comparison** (default, **slate**) — basic Buy vs Rent
- **Mode 2 Detailed with Opportunity Cost** (**sky**, **RECOMMENDED**) — adds invested capital growth
- **Mode 3 Lifestyle Adjusted** (**warm gray**, advanced) — 4 weighted lifestyle factors

### Canonical Net Wealth Methodology (corrected v2 round 2)

```
Net Wealth (Buy)_t = Home Value_t − Loan Balance_t 
                   − Cumulative After-Tax Costs_t
                   + Accumulated Savings from Lower Housing Cost_t
                     (ONLY if Buy monthly cost < Rent monthly cost,
                      otherwise = 0; Mode 2 only)

Net Wealth (Rent)_t = Renter Investment Value_t 
                    − Cumulative Rent + Insurance_t
                    
  where Renter Investment Value_t (Mode 2 only) =
      Initial Capital Difference (Buy − Rent upfront amounts)
    + Accumulated annual cash flow differences 
      (renter's monthly savings when rent < buy cost),
    both compounded at investment return rate, after capital gains tax

Break-Even Year (persistent crossing):
  First year t where Net Wealth (Buy)_t ≥ Net Wealth (Rent)_t
  AND Net Wealth (Buy) remains higher than Net Wealth (Rent) for all 
  future years within Hold Period
```

**CRITICAL**: NO Initial Capital subtraction on either path. Equity already includes down payment. Security deposit recovered at end.

### PMI Auto-Cancellation (modeled in v1 — improvement over Mortgage Investment Calc)

```
For each month, calculate LTV = Loan Balance / Original Home Price
IF LTV ≤ 78%: PMI = 0 from that month forward
```

This typically triggers 5-12 years in.

### Status Badge Tiers (based on Break-Even vs Hold Period RATIO)

```
Break-Even ≤ Hold/2 (e.g., Year 3 of 7):  GREEN  "Buying Strongly Favored"
Break-Even between Hold/2 and Hold:        BLUE   "Buying Favored"
Break-Even just under Hold:                AMBER  "Marginal — Lifestyle Decides"
Break-Even never within Hold:              RED    "Renting Favored"
```

### 10 Critical Rules

1. **Consumer rate 6.75%** (NOT investor 7.5%)
2. **Opportunity cost NON-OPTIONAL in Mode 2** (core differentiator)
3. **Maintenance 1.5% real**, scales with Home Value year-over-year
4. **Tax deduction respects rules**: standard ($14,600 single / $29,200 married) vs itemized + SALT $10K cap + $750K loan limit
5. **Selling costs 7% of future Home Value** (not purchase price)
6. **PMI auto-cancellation modeled** at 78% LTV
7. **Cross-calculator invariant** — Monthly P&I matches Mortgage Investment ±$1
8. **Hold Period drives everything** — display prominently
9. **Status Badge based on Break-Even vs Hold RATIO** (not absolute year)
10. **"Don't quantify what you can't" disclosure** — schools, neighborhoods, family proximity, emotional attachment

### Mode 2 — Mark as RECOMMENDED in UI

Tab label: `"Detailed (with opportunity cost) — Recommended"` or visual `"Detailed"` + small `"Recommended"` badge.

When user lands on Mode 1 default, show non-blocking info banner:
```
ⓘ Mode 1 ignores opportunity cost — what your down payment could 
  have earned invested elsewhere. For honest comparison, 
  [Switch to Mode 2 (Recommended) →]
```

### Extreme Cases (from RIS)

- **Rent < $500/mo** → warning, continue
- **Hold Period = 3 years** → educational note about transaction costs
- **Down 100%** → no PMI, all opportunity cost; expensive scenario for buy
- **Mortgage Rate < 4%** → unusual financing warning
- **Hold Period = 30 years** → educational note favoring buy long-term
- **Rent ≈ Buy monthly cost** → KEY INSIGHT card "depends on hold + appreciation + opp cost"

---

## INPUT SCHEMA

### Required (all modes)
- Home Price (currency, empty)
- Monthly Rent (currency, empty)
- Hold Period years (select 3/5/7/10/15/30, default 7)
- Mortgage Rate % (default 6.75 — 2026 consumer)
- Down Payment % (default 20)

### Buy Scenario (auto-collapsed if defaults OK)
- Loan Term (default 30, options 15/20/30)
- Annual Property Tax (default 1.2%, toggleable)
- Annual Home Insurance (default $1,500)
- HOA Fees monthly (default 0)
- Home Appreciation % (default 3.5)
- Annual Maintenance % (default 1.5)
- Closing Costs % (default 3)
- Selling Costs % (default 7)
- PMI Rate % (default 0.6 if down < 20%)

### Rent Scenario
- Annual Rent Increase % (default 3)
- Renter's Insurance (default $200/year)
- Security Deposit (default 1 month, recovered at end)

### Mode 2 Additional (Opportunity Cost)
- Investment Return % (default 7 — S&P 500 historical)
- Tax Rate on Investment (default 15 — long-term capital gains)

### Mode 3 Additional (Lifestyle, 1-10 scales)
- Mobility importance (default 5)
- Maintenance tolerance (default 5)
- Customization desire (default 5)
- Stability preference (default 5)

### Advanced (collapsible)
- Marginal Tax Bracket (default 24%)
- State Income Tax (default 5%)
- Itemize Deductions (auto-detect, with override)
- Filing Status (default Married)

**Placeholders are instructions** — "Enter home price" NOT "e.g., 400000".

---

## OUTPUT DISPLAY

### Primary Metric Card (Mode 1, default)

**When Buy wins within Hold:**
```
Break-Even Year
        Year 6 (Buy wins after)
After 6 years of ownership, buying creates 
more net wealth than renting at these assumptions.
```

**When Rent wins (no break-even within Hold):**
```
Renting Wins
Within {hold period}-year window, renting creates 
${X} more net wealth than buying.
Reconsider if: hold 10+ years, rates drop, 
or rent rises faster.
```

### Status Badge (always shown)

- GREEN "Buying Strongly Favored" (Break-Even ≤ Hold/2)
- BLUE "Buying Favored" (Break-Even within Hold/2 to Hold)
- AMBER "Marginal — Lifestyle Decides" (Break-Even just under Hold)
- RED "Renting Favored" (Break-Even never)

### Secondary Metrics (always shown)

- Final Net Wealth (Buy): Home Value − Loan Balance − Costs + Accumulated Savings (Mode 2)
- Final Net Wealth (Rent): Investment Value − Cumulative Rent
- Wealth Difference at Hold End: Buy − Rent
- Wealth Difference at Year 5 / 10 / 30 (milestone snapshots)
- Monthly Buy Cost: PITI + Maintenance + HOA
- Monthly Rent Cost: Rent + Renter's Insurance
- Initial Capital Required (Buy): Down + Closing
- Initial Capital Required (Rent): Security Deposit + First Month

### Mode 2 Investor-View

- Opportunity Cost: invested down payment growth, after-tax
- After-Tax Investment Value at Year N
- Renter's vs Buyer's invested cash flow differences (whichever applies)

### Mode 3 Lifestyle Output

```
Financial Recommendation:    BUY (Year 6 break-even)
Lifestyle Adjustment:         +2 score for STAY (high mobility importance)
WEIGHTED RECOMMENDATION:      LEAN RENT (despite financial favoring buy)

Notes: At your mobility importance of 8/10, the financial savings 
from buying ($X over 7 years) may not justify reduced flexibility.
```

### Investment Tax Simplification Disclosure (Mode 2)

```
ⓘ Investment returns modeled using simplified after-tax compounding.
  Actual tax treatment varies by account type, holding period, and 
  state. For precise projections, consult a tax advisor.
```

### Audience Redirect Banner (if user signals investor intent)

Detect investor intent if user enters property values typical of investment:
- Hold Period 3 years + High rent ≈ purchase price suggests rental analysis

```
ⓘ Looking at this as an investment property?
  Use the Mortgage Investment Calculator with investor rates (7.5%) 
  and 25% down payment defaults. [Switch to Mortgage Investment →]
```

---

## SAVED SCENARIOS WIDGET (MANDATORY — DO NOT SKIP)

**Critical UX/monetization feature.** Per Phase 17 lesson, this MUST be present from initial deploy, not added manually later.

### Placement
Below primary metric card, above visualizations (canonical position from `cap-rate-calculator.vue` reference).

### Template block

```vue
<div class="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
  <div class="flex items-center justify-between mb-3">
    <div>
      <h3 class="font-semibold text-slate-900">Saved Scenarios</h3>
      <p class="text-sm text-slate-600">
        {{ savedScenarios.length }}/20 saved ·
        <button @click="compareAllScenarios"
                :disabled="savedScenarios.length === 0"
                class="text-indigo-600 hover:underline disabled:text-slate-400">
          Compare all
        </button>
      </p>
    </div>
    <button @click="saveCurrentScenario"
            :disabled="savedScenarios.length >= 20"
            class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white rounded-lg text-sm font-medium">
      Save Scenario
    </button>
  </div>

  <div v-if="savedScenarios.length > 0" class="space-y-2 mt-3">
    <div v-for="(scenario, idx) in savedScenarios" :key="idx"
         class="flex items-center justify-between p-2 bg-white rounded border border-slate-200">
      <div class="text-sm">
        <span class="font-medium">{{ scenario.label || `Scenario ${idx + 1}` }}</span>
        <span class="text-slate-500 ml-2">
          ${{ scenario.homePrice.toLocaleString() }} home ·
          ${{ scenario.monthlyRent.toLocaleString() }} rent ·
          {{ scenario.holdPeriod }}yr ·
          {{ scenario.breakEvenYear ? `BE Year ${scenario.breakEvenYear}` : 'Rent wins' }}
        </span>
      </div>
      <div class="flex gap-2">
        <button @click="loadScenario(idx)" class="text-sm text-indigo-600 hover:underline">Load</button>
        <button @click="deleteScenario(idx)" class="text-sm text-red-600 hover:underline">Delete</button>
      </div>
    </div>
  </div>
</div>

<!-- Upgrade modal -->
<div v-if="showUpgradeModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  <div class="bg-white p-6 rounded-lg max-w-md">
    <h3 class="font-bold text-lg mb-3">Scenario limit reached</h3>
    <p class="mb-4">Free tier: 20 saved scenarios. Upgrade to Pro for unlimited.</p>
    <div class="flex gap-2 justify-end">
      <button @click="showUpgradeModal = false" class="px-4 py-2 text-slate-600">Cancel</button>
      <button @click="goToUpgrade" class="px-4 py-2 bg-indigo-600 text-white rounded">Upgrade</button>
    </div>
  </div>
</div>
```

### Scenario data shape (this calculator)

```js
{
  homePrice: 400000,
  monthlyRent: 2500,
  holdPeriod: 7,
  mortgageRate: 6.75,
  downPayment: 20,
  loanTerm: 30,
  appreciation: 3.5,
  rentIncrease: 3,
  investmentReturn: 7,    // Mode 2 only
  mode: 1,                 // 1/2/3
  breakEvenYear: 6,        // null if Rent wins
  finalNetWealthBuy: 50000,
  finalNetWealthRent: -25000,
  statusBadge: 'BLUE',     // GREEN/BLUE/AMBER/RED
  timestamp: 1713984000000,
  label: ''
}
```

### State management

```js
import { ref, onMounted } from 'vue'

const savedScenarios = ref([])
const showUpgradeModal = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('rent-vs-buy-scenarios')
  if (saved) {
    try { savedScenarios.value = JSON.parse(saved) } catch (e) { savedScenarios.value = [] }
  }
})

function saveCurrentScenario() {
  if (savedScenarios.value.length >= 20) {
    showUpgradeModal.value = true
    return
  }
  savedScenarios.value.push({
    homePrice: homePrice.value,
    monthlyRent: monthlyRent.value,
    holdPeriod: holdPeriod.value,
    mortgageRate: mortgageRate.value,
    downPayment: downPayment.value,
    loanTerm: loanTerm.value,
    appreciation: appreciation.value,
    rentIncrease: rentIncrease.value,
    investmentReturn: currentMode.value >= 2 ? investmentReturn.value : null,
    mode: currentMode.value,
    breakEvenYear: breakEvenYear.value,
    finalNetWealthBuy: finalNetWealthBuy.value,
    finalNetWealthRent: finalNetWealthRent.value,
    statusBadge: statusBadge.value,
    timestamp: Date.now(),
    label: ''
  })
  localStorage.setItem('rent-vs-buy-scenarios', JSON.stringify(savedScenarios.value))
}

function loadScenario(idx) {
  const s = savedScenarios.value[idx]
  homePrice.value = s.homePrice
  monthlyRent.value = s.monthlyRent
  holdPeriod.value = s.holdPeriod
  mortgageRate.value = s.mortgageRate
  downPayment.value = s.downPayment
  loanTerm.value = s.loanTerm
  appreciation.value = s.appreciation
  rentIncrease.value = s.rentIncrease
  if (s.investmentReturn) investmentReturn.value = s.investmentReturn
  currentMode.value = s.mode
}

function deleteScenario(idx) {
  savedScenarios.value.splice(idx, 1)
  localStorage.setItem('rent-vs-buy-scenarios', JSON.stringify(savedScenarios.value))
}

function compareAllScenarios() {
  if (savedScenarios.value.length === 0) return
  const params = new URLSearchParams()
  params.set('source', 'rent-vs-buy')
  params.set('scenarios', JSON.stringify(savedScenarios.value.slice(0, 3)))
  window.location.href = `/compare-real-estate-deals?${params}`
}

function goToUpgrade() {
  window.location.href = '/pricing'
}
```

### Styling consistency

- `bg-slate-50` background, `border-slate-200` border
- `font-semibold text-slate-900` heading
- `text-sm text-slate-600` subtitle
- `bg-indigo-600` Save button
- Upgrade modal centered overlay

**CRITICAL**: Widget must look IDENTICAL to `cap-rate-calculator.vue` reference.

---

## VISUALIZATIONS (4 charts)

### 1. Net Wealth Crossover Chart (PRIMARY, all modes)
X-axis: Years 0 to Hold Period
Y-axis: Net Wealth $
2 lines: Buy (slate, ascending eventually), Rent (sky, may overtake or fall behind)
Vertical line at Break-Even Year (if exists)
**This is THE key visual** — communicates the central insight visually.

### 2. Monthly Cost Stacked Bar (Mode 1/2)
Buy: P&I (slate) + Tax + Insurance + PMI + HOA + Maintenance (gradient)
Rent: Rent (sky) + Renter's Insurance
Side-by-side comparison.

### 3. Cumulative Cost Chart (Mode 1/2)
Stacked area showing year-by-year cumulative costs for Buy vs Rent.

### 4. Mode 3 Lifestyle Radar
4-axis radar: Mobility / Maintenance / Customization / Stability
User's preferences as filled polygon.
Reference shapes: "Most renters" vs "Most buyers" overlay.

---

## URL IMPORT SCHEMA

```
/rent-vs-buy-calculator?p=400000&r=2500&hp=7&lr=6.75&dp=20&mode=1
```

Short params: `p` price, `r` rent, `hp` hold period, `lr` rate, `dp` down %, `apr` appreciation, `ri` rent increase, `inv` investment return, `tx` tax %, `mode` 1/2/3.

---

## INTEGRATION PATCH (1 source calculator)

### Patch 1: `mortgage-calculator-investment.vue`

Add audience redirect button (when user signals primary residence intent):

```vue
<button @click="goToRentVsBuy"
        class="mt-2 px-4 py-2 text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg flex items-center gap-2">
  <span>If primary residence, see Rent vs Buy →</span>
</button>
```

```js
goToRentVsBuy() {
  const params = new URLSearchParams({
    p: this.propertyPrice,
    lr: 6.75,  // consumer rate, not investor
    dp: 20     // primary residence default
  });
  window.location.href = `/rent-vs-buy-calculator?${params}`;
}
```

Position: in the "Audience" or alternate-tools section of Mortgage Investment Calculator, NOT near the primary results (don't redirect away from completed analysis).

**Note**: This calculator does NOT add patches to investor calculators (Cap Rate, NOI, DSCR, Rental Property, BRRRR, Fix and Flip, etc.) because those tools target a different audience that wouldn't naturally need rent-vs-buy analysis.

---

## SEO CONTENT STRUCTURE (15 sections — strict order)

1. **TITLE + META + H1** (hardcoded — DO NOT modify)
   - TITLE: `Rent vs Buy Calculator — Break-Even Year + Net Wealth | RealCalc` (60 chars)
   - H1: `Rent vs Buy Calculator — Break-Even Year and Net Wealth Comparison` (62 chars)
   - META: `Free Rent vs Buy Calculator. Compare buying a home vs renting with break-even year, net wealth, and opportunity cost analysis. 2026 consumer mortgage rates.` (159 chars)

2. **OVERVIEW** (4 paragraphs):
   - P1 ≤ 90 words, primary keyword + tool purpose
   - P2 modes + differentiation
   - P3 user pain points + STRONG REFRAMING CLOSE ("Your intuition is usually wrong here")
   - P4 workflow + MANDATORY DISCLOSURE + CTA

3. **HOW TO USE** (5 steps + 4 pro tips + 3 mode explanations)
4. **INPUTS & OUTPUTS** (table)
5. **FORMULA** (Net Wealth methodology + opportunity cost + Austin example, ≤ 550 words, HARD LOCK against derivation)
6. **WHAT IS** (3 paragraphs — wealth-building paths, opportunity cost, 2026 context)
7. **RESULT MEANING** (Break-Even tiers + Net Wealth + Opportunity Cost + Lifestyle + 2026 context)
8. **BENCHMARKS** (break-even by hold period + cost ranges + appreciation + investment returns)
9. **STRATEGY** (5 user-type blocks: First-Time, Career-Mover, Retiree, Family-Planner, Wealth-Maximizer)
10. **APPLICATIONS** (6 use cases)
11. **INDUSTRY STANDARDS** (NYT-cite + transaction costs + peer comparison)
12. **LIMITATIONS** (6 items + When Not to Use)
13. **COMMON MISTAKES** (5 items)
14. **FAQ** (9 Q&A)
15. **RELATED CALCULATORS + SCHEMA** (4-6 items, audience redirect to investor tools, 14+ schema features including Saved Scenarios)

### MANDATORY DISCLOSURE in 4 placements:
- Overview P4 (explicit required phrasing)
- How to Use Step 1 end
- Limitations Item 1
- FAQ Q1 answer

### OPPORTUNITY COST in 3 placements (different angles):
- What Is P2 (definitional)
- Result Meaning (interpretive)
- FAQ Q4 (practical)

---

## TEST SUITE (8 cases — from RIS, tolerance ±$50 for costs, ±0.5 year for break-even)

**Test 1** — Standard 7-year hold: $400K home, $2,500 rent, 6.75%, 20% down → Mode 1 Break-Even ~Year 6, Status BLUE; Mode 2 (with opp cost) Break-Even ~Year 6-7

**Test 2** — 10-year hold: same inputs, 10yr → Mode 1/2 Break-Even Year 5-6, Status BLUE

**Test 3** — 3-year hold: same inputs, 3yr → Break-Even never, Status RED, Renting Wins

**Test 4** — Mode 2 with 7% return → opportunity cost ~$140K after-tax over 7 yrs, Break-Even pushed slightly later

**Test 5** — Low down 3.5%: $400K, 3.5% down, 6.75% → PMI active, auto-cancels Year 8-10, Break-Even shifts later

**Test 6** — High-tax state: $400K, 2.5% property tax → SALT cap eats deductions, Break-Even Year 8-10, AMBER

**Test 7** — Cross-calc invariant: $400K, 20% down, 6.75%, 30yr → Monthly P&I $2,076 (must match Mortgage Investment ±$1)

**Test 8** — Mode 3 lifestyle override: financial Buy wins Year 6, Mobility 9 dominates → recommendation "LEAN RENT"

---

## CRITICAL CHECKLIST (50+ items)

### RIS compliance (22 items)

- [ ] Net Wealth methodology used (NOT cost comparison)
- [ ] Buy formula: `Home Value − Loan Balance − Costs + Accumulated Savings (with explicit condition)`
- [ ] NO Initial Capital subtraction in Buy path (Equity already includes down payment)
- [ ] Rent formula: `Investment Value − Cumulative Rent`
- [ ] NO Security Deposit subtraction in Rent path (deposit recovered)
- [ ] Mode 2 invests TWO streams: Initial Capital Difference + ongoing cash flow differences
- [ ] Mode 2 condition: "Accumulated Savings ONLY if Buy < Rent monthly cost, otherwise = 0"
- [ ] Break-Even Year persistent crossing (Buy stays higher than Rent through Hold)
- [ ] PMI auto-cancellation modeled at 78% LTV
- [ ] Tax deduction respects standard vs itemized + SALT $10K cap + $750K loan limit
- [ ] Selling costs 7% of future Home Value (not purchase price)
- [ ] Maintenance scales with Home Value year-over-year (not fixed at purchase)
- [ ] Year 1 P&I cross-calc invariant matches Mortgage Investment ±$1
- [ ] Status Badge based on Break-Even vs Hold RATIO (not absolute year)
- [ ] Mode 1/2/3 produce different Break-Even results (Mode 2 typically shifts later than Mode 1)
- [ ] Mode 3 lifestyle override logic: financial vs lifestyle mismatch flagged
- [ ] Hard money / investor terminology NOT used (wrong audience)
- [ ] Consumer rate default 6.75% (not 7.5% investor)
- [ ] Down payment default 20% (not 25% investor)
- [ ] Investment tax simplification disclosure shown when Mode 2 active
- [ ] All 8 test cases pass within tolerance
- [ ] Test 7 cross-calc invariant matches Mortgage Investment

### UI/UX compliance (12 items)

- [ ] 3 modes via top-level tabs (slate / sky / warm gray)
- [ ] Mode 2 labeled as "RECOMMENDED" in tab + info banner on Mode 1
- [ ] Hold Period prominent input with educational note about impact
- [ ] Primary Metric: Break-Even Year prominent OR "Renting Wins" alternative
- [ ] Status Badge shown with color tier
- [ ] Investor terminology absent from UI (no DSCR, Cap Rate, etc.)
- [ ] Mandatory tooltips on Net Wealth, Opportunity Cost, Break-Even Year
- [ ] Audience redirect banner shown when investor intent detected
- [ ] Investment tax simplification disclosure visible in Mode 2
- [ ] Lifestyle radar chart in Mode 3
- [ ] 4 visualizations present (Crossover, Cost Bar, Cumulative, Lifestyle Radar)
- [ ] Mobile responsive

### **Saved Scenarios widget (6 items — CRITICAL per Phase 17 lesson)**

- [ ] Widget present below primary metric, above visualizations
- [ ] "Saved Scenarios — N/20 saved · Compare all" text exact
- [ ] Save Scenario button saves to localStorage (`rent-vs-buy-scenarios`)
- [ ] Load / Delete per-scenario buttons functional
- [ ] Compare all navigates to `/compare-real-estate-deals` with params
- [ ] Upgrade modal triggers at 20 scenarios
- [ ] Styling identical to `cap-rate-calculator.vue` canonical

### SEO compliance (10 items)

- [ ] TITLE exact (60 chars)
- [ ] H1 exact (62 chars)
- [ ] META exact (159 chars)
- [ ] OVERVIEW_P1 ≤ 90 words, 6 key components present
- [ ] Net Wealth methodology in FORMULA (NOT cost comparison)
- [ ] HARD LOCK against derivation in worked example
- [ ] MANDATORY DISCLOSURE in 4 placements
- [ ] OPPORTUNITY COST in 3 placements with different wording (REDUNDANCY HARD RULE)
- [ ] OVERVIEW_P3 has user pain points + STRONG REFRAMING CLOSE
- [ ] 15 SEO sections in correct order; Schema includes Saved Scenarios

---

## FORBIDDEN TERMINOLOGY AUDIT (grep — all must be 0)

```bash
grep -ci "always buy\|always rent" page.vue              # 0
grep -ci "best decision\|right choice" page.vue          # 0
grep -ci "cheaper than renting" page.vue                 # 0
grep -ci "DSCR\|cap rate\|cash-on-cash\|NOI" page.vue    # 0 (wrong audience)
grep -ci "investment property\|rental income" page.vue   # 0 as primary frame
grep -ci "qualifies for" page.vue                        # 0
grep -ci "guaranteed return\|guaranteed appreciation" page.vue  # 0
grep -ci "easy decision\|forever home\|starter home" page.vue   # 0
```

If ANY non-zero, regenerate with correct terminology.

---

## POST-DEPLOYMENT VALIDATION

Manual browser checks:
1. `/rent-vs-buy-calculator` → 3 modes, Mode 1 default, "Detailed (Recommended)" tab visible
2. Enter $400K + $2,500 rent + 7yr → Break-Even Year ~6, Status BLUE
3. Switch Mode 2 → opportunity cost shown, Break-Even possibly shifts
4. Mode 1 default shows banner "Switch to Mode 2 (Recommended)"
5. Switch Mode 3 → lifestyle radar visible, weighted recommendation displayed
6. Hold Period 3yr → Status RED, Renting Wins, educational note about transaction costs
7. **Saved Scenarios** — save 2 scenarios, counter "2/20", Compare all → `/compare-real-estate-deals?source=rent-vs-buy`
8. Investment tax disclosure visible in Mode 2
9. From Mortgage Investment Calculator: click "If primary residence, see Rent vs Buy" → redirects with params + 6.75% rate
10. Cross-calc invariant: same inputs in both calculators produce P&I within $1

---

## DEPLOYMENT

```bash
# Deploy
cp rent-vs-buy-calculator.vue /var/www/realcalc/pages/
cp mortgage-calculator-investment-patched.vue /var/www/realcalc/pages/mortgage-calculator-investment.vue

cd /var/www/realcalc && npm run build
pm2 restart realcalc

# Verify HTTP 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/rent-vs-buy-calculator               # 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/mortgage-calculator-investment       # 200

# Verify Saved Scenarios widget
grep -c "Saved Scenarios" /var/www/realcalc/pages/rent-vs-buy-calculator.vue   # ≥ 1
grep -c "/20 saved" /var/www/realcalc/pages/rent-vs-buy-calculator.vue         # ≥ 1
grep -c "Compare all" /var/www/realcalc/pages/rent-vs-buy-calculator.vue       # ≥ 1

# Verify NO investor terminology in consumer calculator
grep -ci "DSCR\|cap rate\|cash-on-cash" /var/www/realcalc/pages/rent-vs-buy-calculator.vue   # 0
```

---

## FINAL REMINDERS

1. **2800+ lines minimum**
2. **RIS is source of truth for math** — Net Wealth methodology, NOT cost comparison
3. **SEO is source of truth for content** — 15 sections exactly
4. **Consumer audience signaling** — 6.75% rate, 20% down, NO investor metrics
5. **Mode 2 RECOMMENDED nudge** — tab label + Mode 1 banner
6. **Buy formula condition** — "ONLY if Buy < Rent monthly cost, otherwise 0"
7. **Break-Even definition** — persistent crossing, NOT compared against zero
8. **Audience redirect** for investor users (gateway calculator pattern)
9. **MANDATORY DISCLOSURE** in 4 placements with explicit phrasing
10. **OPPORTUNITY COST** in 3 placements with DIFFERENT wording (REDUNDANCY HARD RULE)
11. **Saved Scenarios widget MANDATORY** — Phase 17 lesson, do NOT skip
12. **NO outbound to investor-only calculators** (DSCR, Cap Rate, NOI) — wrong audience
13. **Phase 18 closes** when Rent vs Buy + Mortgage Investment patch deployed

**If ambiguity between RIS and SEO: RIS wins.**

**Begin by reading all 3 prompt files fully, then write the Vue page.**
