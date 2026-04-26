# TASK — Mortgage Calculator (Investment Property) (Phase 17)

## CONTEXT

You are generating a Vue.js page for RealCalc — SEO hub of 30 US real estate calculators. This is the **Mortgage Calculator (Investment Property)** (Phase 17, Priority 2 FLAGSHIP calculator, 30,000-50,000 searches/month).

**Positioning:** This is an INVESTOR tool, NOT a consumer mortgage calculator. Rates default 7.5% (2026 investor market), down payment 25%, 5 loan types including DSCR/Portfolio/Hard Money.

Workflow position:
```
ARV Calculator → Rental Property Calculator → Mortgage Calculator (Investment) →
  → Rental Property ROI (lifetime wealth)
  → Fix and Flip Calculator (flip strategy)
  → BRRRR Calculator (BRRRR strategy)
```

Tech stack: Nuxt.js 3 + Tailwind + Stripe + jsPDF + Chart.js

Deploy target: 185.138.90.134

---

## REQUIRED INPUT FILES (upload to bot together)

1. `mortgage-investment-ris-prompt-final.md` — RIS (764 lines, 2 rounds, 11 fixes). **SOURCE OF TRUTH for formulas, thresholds, test cases.**
2. `mortgage-investment-seo-prompt-final.md` — SEO (1335 lines, 2 rounds, 8 fixes). **SOURCE OF TRUTH for content structure.**
3. `mortgage-investment-seo-validation-prompt.md` — validation companion (195 lines, 45 checks, OPTIONAL).
4. `master-prompt-v4.md` — base Vue skeleton with Stripe/PDF/Saved Scenarios integration.

---

## UNIFIED PIPELINE

```
STEP 1 — MASTER PROMPT (template/skeleton, Saved Scenarios widget pattern)
         ↓
STEP 2 — RIS (formulas, 3 modes, 10 critical rules, test cases, DSCR vs Cash Flow KEY INSIGHT)
         ↓
STEP 3 — SEO (15 sections, TITLE/META/H1, copy, disclaimer placements)
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
2. **Generate Vue page** (`mortgage-calculator-investment.vue`) — **minimum 2800 lines**.
3. **Generate 4 integration patches** (Rental Property, Rental Property ROI, Fix and Flip, BRRRR).
4. **Include Saved Scenarios widget** identical to canonical reference.

---

## CALCULATION ENGINE (from RIS — strict)

### Three Modes

- **Mode 1 Standard** (**blue**) — classic PITI
- **Mode 2 Investor with Rental Offset** (**indigo**, KEY DIFFERENTIATOR) — rental income for Net Cash Flow
- **Mode 3 Compare Loan Scenarios** (**emerald**) — 2-3 loans side-by-side

### Canonical Formulas

```
Monthly P&I = Loan × [r(1+r)^n] / [(1+r)^n − 1]
  where r = Monthly Interest Rate, n = Number of Payments
  Edge case: if r == 0, Monthly P&I = Loan / n

Monthly PITI = P&I + Tax/12 + Insurance/12 + PMI + HOA
  PMI Logic:
    IF Down < 20% AND Loan Type ∈ {Conventional, Second Home}: PMI = Loan × PMI Rate / 12
    ELSE: PMI = 0

Mode 2 Cash Flow:
  Effective Monthly Rent = Gross Rent × (1 − Vacancy %) × (1 − OpEx %)
  Net Monthly Cash Flow = Effective Rent − PITI
    → positive: "Net Monthly Cash Flow"
    → negative: "Net Monthly Cost" (NO minus sign on primary)
  Annual Cash Flow = Net Monthly × 12
  Year 1 CoC % = Annual CF / (Down + Closing Costs) × 100

DSCR (P&I ONLY, not full PITI):
  Annual NOI = Gross Rent × 12 × (1 − Vacancy) × (1 − OpEx)
  Annual Debt Service = Monthly P&I × 12
  DSCR = Annual NOI / Annual Debt Service

Break-Even Rent (Gross Required Rent):
  = PITI / [(1 − Vacancy) × (1 − OpEx)]
```

### Status Badge Tiers (Mode 2)

- Cash Flow > $200: **GREEN "Positive Cash Flow"**
- Cash Flow $0-$200: **BLUE "Break-Even"**
- Cash Flow −$200 to 0: **AMBER "Slightly Negative"**
- Cash Flow < −$200: **RED "Significantly Negative"**

### 10 Critical Rules

1. Investor rate defaults: Conv 7.5%, DSCR 8.25%, Portfolio 8.5%, Hard Money 12.0%, Second Home 7.25%
2. Down payment default 25% (not 20%)
3. PMI only for Conventional/Second Home <20% down
4. DSCR uses P&I ONLY, not full PITI
5. Break-Even Rent includes vacancy + OpEx
6. "Net Monthly Cost" vs "Cash Flow" terminology toggle — no minus sign primary
7. Cross-calculator invariant: Year 1 CoC matches Rental Property Calculator ±0.1 pp
8. Extra Principal reduces payoff time, NOT monthly payment
9. Hard Money + Mode 2 = RED BLOCKING, disable Net CF/DSCR/Break-Even, redirect CTAs
10. Max guardrails — Price $10K-$50M, Rate 0.1-25%, Term {15,20,25,30}, Down 0-100%

### DSCR vs Cash Flow KEY INSIGHT (mandatory UI card in Mode 2)

```
⚠ DSCR vs Cash Flow — Both Matter

A property can have negative cash flow AND still meet lender DSCR requirements.

DSCR: lender metric (P&I vs rent) — want ≥ 1.20-1.25
Cash Flow: investor metric (full PITI vs rent) — includes taxes, insurance, HOA

Both must be considered. Consider:
  • DSCR 1.25 + Cash Flow −$150/mo → loan approvable, you pay monthly
  • DSCR 0.95 + Cash Flow +$200/mo → pays but lender declines

Placement: below Primary Metric, above Secondary Metrics list.
```

### Extreme Cases

- **Down 100%** → "All-cash purchase. Mortgage doesn't apply." + CTA to Rental Property Calc
- **Net CF < −$500/mo** → AMBER warning
- **DSCR < 1.0** → lender warning + CTA to DSCR Calc
- **Mode 2 rent = 0** → prompt to enter rent
- **Hard Money + Mode 2** → RED BLOCKING banner
- **Hard Money default term** = 1 year

---

## INPUT SCHEMA

### Required (all modes)
- Property Price (currency, empty)
- Down Payment % (default 25)
- Loan Term years (select 15/20/25/30, default 30)
- Interest Rate % (default 7.5, adjusts by loan type)
- Loan Type (select: Conventional/DSCR/Portfolio/Hard Money/Second Home)

### Tax & Insurance
- Annual Property Tax (currency OR percent, default 1.2%)
- Annual Home Insurance (currency, default $1,800)
- HOA Fees monthly (default 0)
- Include PMI (auto-detect)

### Mode 2 Additional
- Expected Monthly Rent (empty)
- Vacancy % (default 8)
- OpEx % of Rent (default 30)

### Advanced (Mode 1/2, collapsible)
- Extra Monthly Principal (default 0)
- Closing Costs % (default 2)
- Points Paid (default 0)
- PMI Rate (default 0.5-1.0 if applicable)

**Placeholders are instructions** — "Enter property price" NOT "e.g., 300000".

---

## OUTPUT DISPLAY

### Primary Metric Card (Mode 1)

```
Monthly Payment (PITI)
         $2,023 / month
P&I: $1,573 · Tax: $300 · Insurance: $150
```

### Primary Metric Card (Mode 2 — terminology toggle)

**Negative CF:**
```
Net Monthly Cost
      $413 / month    (positive number, NO minus)
PITI: $2,023 · Eff Rent: $1,610 · Status: RED
```

**Positive CF:**
```
Net Monthly Cash Flow
      $202 / month
PITI: $1,349 · Eff Rent: $1,551 · Status: GREEN
```

### DSCR vs Cash Flow KEY INSIGHT (Mode 2, between Primary and Secondary)

Mandatory info card, indigo border (not red — informational):

```
ⓘ DSCR vs Cash Flow — Both Matter
DSCR: lender metric (P&I vs rent)
Cash Flow: investor metric (full PITI vs rent)
A deal can pass DSCR AND still cost you money monthly.
```

### Secondary Metrics (Mode 1/2)
- Loan Amount, Total Cash to Close, Total Interest, Total of Payments, Effective APR, First Payment Breakdown

### Mode 2 Investor Metrics
- Effective Monthly Rent (tooltip)
- Annual Cash Flow
- Year 1 Cash-on-Cash %
- **DSCR** (tooltip: "Uses P&I only as debt service")
- **Break-Even Rent (Gross Required Rent)** (tooltip: "GROSS rent BEFORE vacancy and expenses")

### Mode 3 Compare Table
3 cols A/B/C, rows: Loan Type, Rate, Term, Down, Monthly P&I, Monthly PITI, Total Interest, Cash to Close, Payoff Date.
Winner: lowest Total Interest → emerald border + "Lowest Cost" badge.

### Mode 3 CTA Block (below table)

```
[Compare full deal outcomes across strategies] ← primary (/compare-real-estate-deals)
[Project 10-year wealth for winning loan]       ← secondary (/rental-property-roi-calculator)
[Check DSCR for each loan]                       ← tertiary (/dscr-calculator)
```

### Error States

**Down 100%:**
```
ⓘ This is an all-cash purchase. Mortgage calculator doesn't apply.
  [Use Rental Property Calculator →]
```

**Hard Money + Mode 2 (RED BLOCKING):**
```
⚠ Hard money loans are not designed for rental cash flow analysis.
  Hard money is short-term bridge (6-12 mo) at 12-14% for flips.
  
  [Analyze as flip deal → Fix and Flip Calculator]
  [Switch to Conventional loan ↑]
```
Net CF / DSCR / Break-Even DISPLAYS DISABLED (grayed out).

---

## SAVED SCENARIOS WIDGET (MANDATORY — DO NOT SKIP)

**Critical UX/monetization feature.** Must be present in EVERY deployed calculator identically. This widget was missing in some older calculators and had to be added manually — DO NOT make that mistake for this calculator.

### Placement
Below primary metric card, above visualizations (standard position from `cap-rate-calculator.vue` canonical reference).

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

  <!-- Scenario list (collapsed by default, expands on interaction) -->
  <div v-if="savedScenarios.length > 0" class="space-y-2 mt-3">
    <div v-for="(scenario, idx) in savedScenarios" :key="idx"
         class="flex items-center justify-between p-2 bg-white rounded border border-slate-200">
      <div class="text-sm">
        <span class="font-medium">{{ scenario.label || `Scenario ${idx + 1}` }}</span>
        <span class="text-slate-500 ml-2">
          ${{ scenario.propertyPrice.toLocaleString() }} ·
          {{ scenario.loanType }} ·
          PITI ${{ Math.round(scenario.monthlyPITI).toLocaleString() }}
        </span>
      </div>
      <div class="flex gap-2">
        <button @click="loadScenario(idx)" class="text-sm text-indigo-600 hover:underline">Load</button>
        <button @click="deleteScenario(idx)" class="text-sm text-red-600 hover:underline">Delete</button>
      </div>
    </div>
  </div>
</div>

<!-- Upgrade modal (triggers at 20-scenario limit) -->
<div v-if="showUpgradeModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  <div class="bg-white p-6 rounded-lg max-w-md">
    <h3 class="font-bold text-lg mb-3">Scenario limit reached</h3>
    <p class="mb-4">Free tier: 20 saved scenarios. Upgrade to Pro for unlimited scenario saves across all calculators.</p>
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
  propertyPrice: 300000,
  downPayment: 25,
  loanRate: 7.5,
  loanTerm: 30,
  loanType: 'Conventional',
  monthlyPITI: 2023,
  netMonthlyCashFlow: -413,     // null if Mode 1
  dscr: 1.02,                    // null if Mode 1
  mode: 2,                       // 1/2/3
  timestamp: 1713984000000,
  label: ''
}
```

### State management

```js
// In <script setup>:
import { ref, onMounted } from 'vue'

const savedScenarios = ref([])
const showUpgradeModal = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('mortgage-investment-scenarios')
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
    propertyPrice: propertyPrice.value,
    downPayment: downPayment.value,
    loanRate: loanRate.value,
    loanTerm: loanTerm.value,
    loanType: loanType.value,
    monthlyPITI: monthlyPITI.value,
    netMonthlyCashFlow: currentMode.value === 2 ? netMonthlyCashFlow.value : null,
    dscr: currentMode.value === 2 ? dscr.value : null,
    mode: currentMode.value,
    timestamp: Date.now(),
    label: ''
  })
  localStorage.setItem('mortgage-investment-scenarios', JSON.stringify(savedScenarios.value))
}

function loadScenario(idx) {
  const s = savedScenarios.value[idx]
  propertyPrice.value = s.propertyPrice
  downPayment.value = s.downPayment
  loanRate.value = s.loanRate
  loanTerm.value = s.loanTerm
  loanType.value = s.loanType
  currentMode.value = s.mode
  // Recalculation auto-triggers via reactive deps
}

function deleteScenario(idx) {
  savedScenarios.value.splice(idx, 1)
  localStorage.setItem('mortgage-investment-scenarios', JSON.stringify(savedScenarios.value))
}

function compareAllScenarios() {
  if (savedScenarios.value.length === 0) return
  const params = new URLSearchParams()
  params.set('source', 'mortgage-investment')
  params.set('scenarios', JSON.stringify(savedScenarios.value.slice(0, 3)))
  window.location.href = `/compare-real-estate-deals?${params}`
}

function goToUpgrade() {
  window.location.href = '/pricing'
}
```

### Styling consistency

- `bg-slate-50` background, `border-slate-200` border
- Heading `font-semibold text-slate-900`
- Subtitle `text-sm text-slate-600`
- Save button `bg-indigo-600`
- Upgrade modal centered overlay with `bg-black/50`

**CRITICAL:** Widget must look IDENTICAL to `cap-rate-calculator.vue` reference. Copy styling if unsure.

---

## VISUALIZATIONS (4 charts)

1. **Amortization Line Chart** (primary, Mode 1/2) — Remaining Balance (blue desc), Cumulative Principal (indigo asc), Cumulative Interest (red asc)
2. **Payment Breakdown Pie** (Mode 1/2) — P&I, Tax, Insurance, PMI, HOA
3. **Mode 2 Cash Flow Bar** — Effective Rent (green) vs PITI (split P&I red / Tax+Ins amber)
4. **Mode 3 Compare Bar** — Monthly PITI + Total Interest per scenario

---

## URL IMPORT SCHEMA

```
/mortgage-calculator-investment?p=300000&dp=25&lr=7.5&lt=30&r=2200&vc=8&op=30&mode=2
```

Short params: `p`, `dp`, `lr`, `lt`, `lty`, `r`, `vc`, `op`, `pt`, `ins`, `hoa`, `mode`.

---

## INTEGRATION PATCHES (4 source calculators)

### Patch 1: `rental-property-calculator.vue`
Button "Model this financing (Mortgage Calc)" → `/mortgage-calculator-investment?p={price}&lr=7.5&r={rent}&vc={vacancy}&op={opex}&mode=2`

### Patch 2: `rental-property-roi-calculator.vue`
Button "Adjust loan terms (Mortgage Calc)" → `/mortgage-calculator-investment?p={price}&dp={down}&lr={rate}&lt={term}&mode=1`

### Patch 3: `fix-and-flip-calculator.vue`
Button "See mortgage option (hold as rental)" → `/mortgage-calculator-investment?p={arv}&mode=2`

### Patch 4: `brrrr-calculator.vue`
Button "Compare refi terms (Mortgage Calc)" → `/mortgage-calculator-investment?p={arv}&dp=25&mode=3`

Full Vue templates + methods in each patch block, styled with `bg-indigo-600 hover:bg-indigo-700`.

---

## SEO CONTENT STRUCTURE (15 sections — strict order)

1. **TITLE + META + H1** (hardcoded — DO NOT modify)
   - TITLE: `Investment Property Mortgage Calculator — PITI + Cash Flow | RealCalc` (66 chars)
   - H1: `Investment Property Mortgage Calculator — PITI, Cash Flow, DSCR` (62 chars)
   - META: `Free Investment Property Mortgage Calculator for real estate investors. Calculate PITI, rental cash flow, DSCR, and compare loan scenarios. 2026 investor rates.` (159 chars)

2. **OVERVIEW** (4 paragraphs, P1 ≤ 3-4 sentences + ≤ 90 words)
3. **HOW TO USE** (5 steps + 4 pro tips + 3 mode explanations)
4. **INPUTS & OUTPUTS** (table)
5. **FORMULA** (amortization + PITI + Austin 2026 example, ≤ 550 words)
6. **WHAT IS** (3 paragraphs — investor vs primary residence, DSCR vs Cash Flow, 2026 context)
7. **RESULT MEANING** (PITI + Cash Flow tiers + DSCR tiers + KEY INSIGHT + Break-Even)
8. **BENCHMARKS** (rates by loan type + PITI ranges + DSCR thresholds)
9. **STRATEGY** (5 investor blocks)
10. **APPLICATIONS** (6 use cases)
11. **INDUSTRY STANDARDS**
12. **LIMITATIONS** (6 items + When Not to Use)
13. **COMMON MISTAKES** (5 items)
14. **FAQ** (9 Q&A)
15. **RELATED CALCULATORS + SCHEMA** (13+ features, include Saved Scenarios widget)

### MANDATORY DISCLOSURE "investment properties, not primary residences" in 4 placements:
- Overview P4 (explicit required phrasing)
- How to Use Step 2 end
- Limitations Item 1
- FAQ Q1 answer

(Max 6 total mentions — buffer for natural variation)

### DSCR vs Cash Flow KEY INSIGHT in 3 places:
- What Is P2
- Result Meaning KEY_INSIGHT_BLOCK
- FAQ Q4 answer

---

## TEST SUITE (8 cases)

**Test 1** — Standard Conv 30yr: $300K, 25% down, 7.5% → Loan $225K, P&I $1,573, PITI $2,023 (no PMI)

**Test 2** — High Leverage PMI: $300K, 10% down, 7.5%, Conv → Loan $270K, P&I $1,888, PMI $169, PITI $2,357

**Test 3** — DSCR no PMI: $300K, 20% down, 8.25%, DSCR → P&I $1,803, PITI $2,253, PMI $0

**Test 4** — Mode 2 Negative CF (Austin): $300K, 25% down, 7.5%, Rent $2,500, Vac 8%, OpEx 30% → PITI $2,023, Eff Rent $1,610, Net CF −$413 RED, Break-Even $3,141, DSCR ~1.02

**Test 5** — Mode 2 Positive CF (Sunbelt): $200K, 25% down, 7.5%, Rent $2,200, Vac 6%, OpEx 25% → P&I $1,049, PITI $1,349, Eff Rent $1,551, Net CF +$202 GREEN

**Test 6** — DSCR Cross-Invariant: $250K, 25% down, 8%, Rent $2,000, Vac 5%, OpEx 30% → DSCR 0.97; DSCR Calculator matches ±0.01

**Test 7** — Extra Principal: $300K, 25% down, 7.5%, Extra $200/mo → Pays off ~month 290 (70 early), interest saved ~$55K

**Test 8** — Mode 3 Compare: A Conv 30yr 7.5% ($1,573/$340K), B Conv 15yr 7.0% ($2,021/$139K), C DSCR 30yr 8.25% ($1,803/$423K). Winner "Lowest Cost": B.

---

## CRITICAL CHECKLIST (50+ items)

### RIS compliance (22 items)

- [ ] Canonical amortization formula; r==0 edge case handled
- [ ] PITI = P&I + Tax/12 + Insurance/12 + PMI + HOA
- [ ] PMI only Conventional/Second Home <20% down; DSCR/Portfolio/Hard Money never
- [ ] PMI auto-cancel disclosure shown when PMI active
- [ ] Mode 2 Effective Rent = Gross × (1−Vac) × (1−OpEx)
- [ ] Net CF terminology "Net Cost" vs "Cash Flow" toggle (no minus on primary)
- [ ] Annual CF = Net Monthly × 12
- [ ] Year 1 CoC matches Rental Property Calc ±0.1 pp
- [ ] DSCR uses P&I ONLY
- [ ] DSCR = Annual NOI / Annual Debt Service
- [ ] Break-Even Rent = PITI / [(1−Vac) × (1−OpEx)]
- [ ] "Break-Even Rent (Gross Required Rent)" always full qualifier
- [ ] Status Badge tiers: GREEN >$200, BLUE $0-200, AMBER −$200-0, RED <−$200
- [ ] DSCR vs Cash Flow KEY INSIGHT info card mandatory in Mode 2
- [ ] Loan Type rate defaults: Conv 7.5%, DSCR 8.25%, Portfolio 8.5%, HM 12.0%, SH 7.25%
- [ ] Extra Principal adds to principal, doesn't reduce scheduled P&I
- [ ] Hard Money default term 1 year
- [ ] Hard Money + Mode 2 → RED BLOCKING + disable Net CF/DSCR/Break-Even
- [ ] Hard Money Mode 2 CTAs: "Analyze as flip deal", "Switch to Conventional"
- [ ] Mode 3 CTA block with 3 buttons (Compare Deals, ROI, DSCR)
- [ ] All 8 test cases pass within tolerance
- [ ] DSCR Test 6 cross-calc match with DSCR Calculator ±0.01

### UI/UX compliance (12 items)

- [ ] 3 modes via top-level tabs (blue / indigo / emerald)
- [ ] Investor rate default 7.5%
- [ ] Investor down payment default 25%
- [ ] Loan Type selector visible (not buried)
- [ ] Placeholders are instructions
- [ ] PITI breakdown visible on primary card
- [ ] Mandatory tooltips on DSCR + Break-Even Rent
- [ ] Down 100% → all-cash message + CTA
- [ ] Net CF < −$500 → amber warning
- [ ] DSCR < 1.0 → lender warning + CTA
- [ ] Zero rent Mode 2 → prompt
- [ ] 4 visualizations present

### **Saved Scenarios widget (6 items — CRITICAL)**

- [ ] Widget present below primary metric card, above visualizations
- [ ] "Saved Scenarios — N/20 saved · Compare all" text exact
- [ ] Save Scenario button saves to localStorage (`mortgage-investment-scenarios`)
- [ ] Load / Delete per-scenario buttons functional
- [ ] Compare all navigates to `/compare-real-estate-deals` with `source=mortgage-investment` + scenarios params
- [ ] Upgrade modal triggers at 20 scenarios with /pricing redirect
- [ ] Styling identical to `cap-rate-calculator.vue` canonical reference

### SEO compliance (10 items)

- [ ] TITLE exact (66 chars)
- [ ] H1 exact (62 chars)
- [ ] META exact (159 chars)
- [ ] OVERVIEW_P1 ≤ 90 words, 6 key components present
- [ ] Canonical amortization + PITI in FORMULA
- [ ] MANDATORY DISCLOSURE in ≥ 4 placements, ≤ 6 total
- [ ] DSCR vs Cash Flow KEY INSIGHT in 3 places (What Is + Result Meaning + FAQ Q4)
- [ ] 15 SEO sections in correct order
- [ ] Schema block 13+ features including Saved Scenarios
- [ ] Related Calculators cross-links to 6 calculators

---

## FORBIDDEN TERMINOLOGY AUDIT (grep — all must be 0)

```bash
grep -ci "consumer mortgage rate" page.vue           # 0
grep -ci "best mortgage rate\|best rate for" page.vue # 0
grep -ci "guaranteed approval\|guaranteed rate" page.vue # 0
grep -ci "qualifies for" page.vue                    # 0 (DSCR bug)
grep -ci "pre-qualified\|pre-approved" page.vue      # 0
grep -ci "tax savings" page.vue                      # 0
grep -ci "easy mortgage\|simple loan" page.vue       # 0
grep -ci "always choose" page.vue                    # 0
grep -cE "\bBreak-Even\b(?! Rent \(Gross Required Rent\))" page.vue  # 0
```

---

## POST-DEPLOYMENT VALIDATION

Manual browser checks:
1. `/mortgage-calculator-investment` → 3 modes, Mode 1 default, rate 7.5%, down 25%
2. Enter $300K + 25% + 7.5% → PITI $2,023 (Test 1)
3. Mode 2 + Rent $2,500 → Net Cost $413 RED (Test 4)
4. DSCR vs Cash Flow info card visible in Mode 2
5. Break-Even Rent $3,141 with "Gross Required Rent" qualifier
6. Hard Money + Mode 1 → warning banner
7. Hard Money + Mode 2 → RED BLOCKING, metrics disabled
8. **Saved Scenarios** — save 2 scenarios, counter "2/20", Compare all → `/compare-real-estate-deals?source=mortgage-investment`
9. Mode 3 → 3 scenarios, winner highlight, CTA block
10. Inbound patches: click "Model this financing" from Rental Property → redirects with params

---

## DEPLOYMENT

```bash
# Deploy
cp mortgage-calculator-investment.vue /var/www/realcalc/pages/
cp rental-property-calculator-patched.vue /var/www/realcalc/pages/rental-property-calculator.vue
cp rental-property-roi-calculator-patched.vue /var/www/realcalc/pages/rental-property-roi-calculator.vue
cp fix-and-flip-calculator-patched.vue /var/www/realcalc/pages/fix-and-flip-calculator.vue
cp brrrr-calculator-patched.vue /var/www/realcalc/pages/brrrr-calculator.vue

cd /var/www/realcalc && npm run build
pm2 restart realcalc

# Verify HTTP 200
for page in mortgage-calculator-investment rental-property-calculator \
            rental-property-roi-calculator fix-and-flip-calculator brrrr-calculator; do
  code=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/$page)
  echo "$page: $code"   # expect 200
done

# Verify Saved Scenarios widget
grep -c "Saved Scenarios" /var/www/realcalc/pages/mortgage-calculator-investment.vue   # ≥ 1
grep -c "/20 saved" /var/www/realcalc/pages/mortgage-calculator-investment.vue         # ≥ 1
grep -c "Compare all" /var/www/realcalc/pages/mortgage-calculator-investment.vue       # ≥ 1
```

---

## FINAL REMINDERS

1. **2800+ lines minimum**
2. **RIS is source of truth for math** — never invent formulas
3. **SEO is source of truth for content** — follow 15 sections exactly
4. **DSCR vs Cash Flow KEY INSIGHT** — mandatory Mode 2 UI card + 3 text placements
5. **PMI logic** — only Conventional/Second Home <20% down
6. **"Net Monthly Cost" vs "Cash Flow"** — toggle by sign, no minus on primary
7. **Hard Money + Mode 2** — RED BLOCKING, disable metrics
8. **"Break-Even Rent (Gross Required Rent)"** — always full qualifier
9. **MANDATORY DISCLOSURE** — 4 placements, explicit required phrasing in Overview P4
10. **Saved Scenarios widget MANDATORY** — cap-rate-calculator.vue canonical, localStorage, 20-limit upgrade modal. DO NOT skip.
11. **4 integration patches required**
12. **Phase 17 closes** when Mortgage Investment + 4 patches deployed

**If ambiguity between RIS and SEO: RIS wins.**

**Begin by reading all 3 prompt files fully, then write the Vue page.**
