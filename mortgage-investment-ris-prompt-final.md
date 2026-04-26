# RIS Prompt — Mortgage Calculator (Investment Property) — v1

You are a senior real estate finance engineer and SEO-focused product designer. Your job is to produce a **complete Requirements & Implementation Specification (RIS)** for the Mortgage Calculator (Investment Property) page.

This RIS is the source of truth for formulas, logic, thresholds, and test cases. It will be paired with a separate SEO package prompt (mortgage-investment-seo-prompt.md) and the Master Prompt to generate the actual Vue page.

---

## CALCULATOR IDENTITY

```
Calculator Name:    Mortgage Calculator (Investment Property)
Slug:               mortgage-calculator-investment
Primary metric:     Monthly Payment (PITI) + Rental Income Offset = Net Monthly Cost/Cash Flow
Primary keyword:    investment property mortgage calculator
Secondary keywords: rental property mortgage calculator, 
                    investment mortgage calculator, 
                    DSCR mortgage calculator, 
                    investor mortgage payment calculator,
                    real estate investor mortgage calculator,
                    second home mortgage calculator
Traffic priority:   Priority 2 (estimated 30,000-50,000 searches/month — FLAGSHIP)
Target audience:    Real estate investors evaluating financing for rental properties, 
                    flips, or portfolio acquisitions. Different from consumer mortgage 
                    calculators that assume primary residence.
```

---

## CRITICAL POSITIONING (read first — drives all decisions)

This is NOT a consumer mortgage calculator. Key differences from residential/primary:

1. **Rates are 0.75-1.5 pp higher** than primary residence mortgages (investor risk premium)
2. **Down payment usually 20-25%** (vs 3-20% for primary); DSCR loans often require 25%+
3. **Loan type variety**: Conventional (Fannie/Freddie), DSCR, Portfolio, Hard Money, Commercial
4. **Rental income offsets payment** — this calculator models NET cash flow after rent
5. **Multiple properties allowed** — investors often have 10+ mortgages; calc must handle high debt loads
6. **PITI composition differs**: no PMI if 20%+ down (common for investors), different property insurance rates
7. **Tax treatment different**: interest deductible against rental income (not SALT-capped like primary)

**Workflow positioning:**
```
ARV Calculator → Rental Property Calculator → Mortgage Calculator (Investment) → 
  → Rental Property ROI (lifetime wealth projection)
  → Fix and Flip Calculator (if flip strategy)
  → BRRRR Calculator (if BRRRR strategy)
```

The Mortgage Calculator sits at the **financing decision** stage — investors come here when they know the property but need to evaluate financing feasibility.

---

## THREE MODES

### Mode 1 — Standard Amortization (default, blue)
Classic loan calculator — principal + interest + taxes + insurance (PITI) over loan term. Supports Conventional, DSCR, Portfolio loan types with appropriate defaults.

### Mode 2 — Investor Mode with Rental Offset (indigo, investor-specific)
Everything from Mode 1 PLUS monthly rental income, vacancy assumption, OpEx. Outputs **Net Monthly Cost/Cash Flow** — the investor's true out-of-pocket (or pocketed) amount per month after rent.

### Mode 3 — Compare Loan Scenarios (emerald, advanced)
Side-by-side comparison of 2-3 loan scenarios (e.g., 30-year Conventional vs 20-year DSCR vs 15-year cash-out refi). Shows payment differences, total interest, and break-even points.

---

## INPUT SCHEMA

### Required (all modes)

| Field | Type | Default | Notes |
|---|---|---|---|
| Property Price | currency | empty | Purchase price |
| Down Payment % | percent | 25 | Investor default (not 20%) |
| Loan Term (years) | select | 30 | Options: 15 / 20 / 25 / 30 |
| Interest Rate % | percent | 7.5 | 2026 investor rate default |
| Loan Type | select | Conventional | Options: Conventional / DSCR / Portfolio / Hard Money / Second Home |

### Tax & Insurance (required for PITI accuracy)

| Field | Type | Default | Notes |
|---|---|---|---|
| Annual Property Tax | currency OR percent | 1.2% of price | Toggleable input type |
| Annual Home Insurance | currency | $1,800 | Investor rate default (higher than primary) |
| HOA Fees (monthly) | currency | 0 | Optional |
| Include PMI? | boolean | auto | PMI only if down < 20% |

### Mode 2 Additional (Investor mode)

| Field | Type | Default | Notes |
|---|---|---|---|
| Expected Monthly Rent | currency | empty | Gross rental income |
| Vacancy % | percent | 8 | Annual vacancy allowance |
| OpEx % of Rent | percent | 30 | Property management, repairs, capex reserves |

### Mode 3 Additional (Compare mode)

User can create 2 or 3 loan scenarios with different values for:
- Loan Type
- Interest Rate %
- Loan Term years
- Down Payment %

Each scenario shows the full output comparison.

### Advanced (collapsible, Mode 1/2)

| Field | Type | Default | Notes |
|---|---|---|---|
| Extra Monthly Principal | currency | 0 | Accelerated payoff scenario |
| Closing Costs % | percent | 2 | For total cash-to-close calc |
| Points Paid | percent | 0 | For true APR calc |
| PMI Rate (if applicable) | percent | 0.5-1.0 | Only if down < 20% |

---

## OUTPUT SCHEMA

### Primary Metric Card (Mode 1 default)

```
┌─────────────────────────────────────┐
│  Monthly Payment (PITI)             │
│                                     │
│         $2,185 / month              │  ← big number
│                                     │
│  P&I: $1,748 · Tax: $240 ·          │
│  Insurance: $150 · PMI: $47         │  ← breakdown
└─────────────────────────────────────┘
```

### Primary Metric Card (Mode 2 — Investor)

```
┌─────────────────────────────────────┐
│  Net Monthly Cost                   │
│                                     │
│       $185 / month                  │  ← net (positive = out-of-pocket)
│                                     │
│  OR   $315 / month cash flow        │  ← if rent > PITI
│                                     │
│  PITI: $2,185 · Effective Rent:     │
│  $2,000 · Gap: −$185                │
└─────────────────────────────────────┘
```

### Secondary Metrics (always shown Mode 1/2)

| Output | Formula | Purpose |
|---|---|---|
| **Loan Amount** | Property Price − Down Payment | Base for mortgage |
| **Total Cash to Close** | Down Payment + Closing Costs | Investor's capital commitment |
| **Total Interest Over Loan** | Sum of all interest payments | Lifetime cost of borrowing |
| **Total of Payments** | Monthly Payment × 12 × Years | Total paid over loan life |
| **Effective APR** | Rate adjusted for points + closing | True cost vs nominal rate |
| **First Payment Breakdown** | Principal $X, Interest $Y | Shows how little principal early on |

### Mode 2 Investor-Specific Metrics (v2 round 1 expert fix — remove Primary duplicate)

| Output | Formula | Purpose |
|---|---|---|
| **Effective Monthly Rent** | Gross Rent × (1 − Vacancy %) × (1 − OpEx %) | Post-vacancy, post-expense rent |
| **Annual Cash Flow** | Net Monthly Cash Flow × 12 | Annualized view (distinct from monthly Primary) |
| **Year 1 Cash-on-Cash %** | Annual Cash Flow / Cash to Close × 100 | Investor return metric (matches Rental Property Calc) |
| **DSCR** | NOI / Annual Debt Service | Lender underwriting metric |
| **Break-Even Rent (Gross Required Rent)** | PITI / [(1 − Vacancy %) × (1 − OpEx %)] | Gross rent needed BEFORE vacancy/expenses for zero cash flow |

**v2 round 1 expert fix — Primary/Secondary separation logic:**
- Primary Metric = monthly decision ("how much do I pay/pocket this month?") → "Net Monthly Cost / Cash Flow"
- Secondary Metrics = annual + ROI context → Annual Cash Flow, CoC %, DSCR, Break-Even Rent
- DO NOT duplicate "Net Monthly Cash Flow" in Secondary — it's already the Primary Metric. Previous v1 had both, causing UX confusion (same number, two names).

**Break-Even Rent mandatory tooltip (v2 round 1 expert fix):**
```
"This is the GROSS rent required BEFORE vacancy and operating expenses are 
deducted. Your tenant would pay this amount monthly. After accounting for 
typical vacancy (8%) and operating expenses (30%), your effective income 
covers PITI exactly. Lower rent → negative cash flow. Higher rent → 
positive cash flow."
```

Example: PITI $2,185, Vacancy 8%, OpEx 30% → Break-Even = $2,185 / (0.92 × 0.70) = $3,394 gross rent. Tenant pays $3,394, you effectively receive $2,185 after vacancy + expenses = PITI covered, zero cash flow.

### Status Badge (Mode 2, based on Net Cash Flow)

- **Cash Flow > $200/mo**: GREEN "Positive Cash Flow"
- **Cash Flow $0-$200/mo**: BLUE "Break-Even"
- **Cash Flow −$200 to $0**: AMBER "Slightly Negative"
- **Cash Flow < −$200/mo**: RED "Significantly Negative"

### Amortization Chart (Mode 1/2)

Line chart showing Principal Balance over time (years 1-N), with stacked area showing cumulative Principal Paid (blue) vs Cumulative Interest Paid (red). First ~10 years dominated by interest (teachable moment — "ugly truth of 30-year loans").

### Mode 3 Compare Scenarios Table

Three columns (A/B/C), rows: Loan Type, Interest Rate, Term, Down Payment, Monthly P&I, Monthly PITI, Total Interest, Cash to Close, Payoff Date. Winner highlight: lowest total-interest scenario gets emerald border + "Lowest Cost" badge.

### Mode 3 CTA Block (v2 round 1 expert fix — connects loan comparison to full strategy analysis)

Mode 3 compares loans in isolation. But two loans with different Monthly Payments produce different Cash Flow, different CoC, different IRR, different lifetime ROI. To help users understand FULL impact of loan choice on deal outcomes, display CTA buttons below the comparison table:

```
┌──────────────────────────────────────────────────────────────────────┐
│  Loan comparison shows interest cost and monthly payment differences. │
│  For full deal outcomes (cash flow, CoC, IRR, lifetime ROI) under    │
│  each loan scenario:                                                  │
│                                                                      │
│  [Compare full deal outcomes across strategies]  ←  primary CTA      │
│    ↳ navigates to Compare Real Estate Deals with loan A/B/C          │
│       scenarios pre-filled as Rental variations                      │
│                                                                      │
│  [Project 10-year wealth for winning loan]       ←  secondary CTA    │
│    ↳ navigates to Rental Property ROI with winner loan terms         │
│                                                                      │
│  [Check DSCR for each loan]                      ←  tertiary CTA     │
│    ↳ navigates to DSCR Calculator                                    │
└──────────────────────────────────────────────────────────────────────┘
```

**Why this CTA matters:** A user choosing between 30-year Conv @ 7.5% and 15-year Conv @ 7.0% needs to see not just total interest ($340K vs $139K) but also how the $450/mo higher payment on the 15-year affects their Cash Flow (likely pushes into negative territory) and Year 1 CoC (may drop from 6% to 1%). Loan comparison alone understates the decision's complexity.

---

## CALCULATION ENGINE

### Phase 1 — Validate Inputs

```
IF Property Price ≤ 0 OR Down Payment ≤ 0% OR Interest Rate ≤ 0 
   OR Interest Rate > 25 OR Loan Term ∉ {15, 20, 25, 30}:
  → Display error state
  → Do NOT compute
```

### Phase 2 — Standard Mortgage Math (Mode 1/2 base)

```
Down Payment Amount = Property Price × Down Payment %
Loan Amount = Property Price − Down Payment Amount

Monthly Interest Rate = Interest Rate / 12 / 100
Number of Payments = Loan Term × 12

Monthly P&I (Principal + Interest) = 
  Loan Amount × [r(1+r)^n] / [(1+r)^n − 1]
  
  where r = Monthly Interest Rate, n = Number of Payments

If Monthly Interest Rate == 0 (edge case):
  Monthly P&I = Loan Amount / Number of Payments
```

### Phase 3 — Taxes, Insurance, PMI (PITI components)

```
Monthly Property Tax = (Annual Property Tax OR Property Price × Tax %) / 12
Monthly Home Insurance = Annual Insurance / 12
Monthly HOA = HOA Fees (already monthly)

PMI Logic:
  IF Down Payment % < 20% AND Loan Type ∈ {Conventional, Second Home}:
    Monthly PMI = Loan Amount × PMI Rate / 12
    Auto-cancels at 78% LTV (not modeled in v1 — see mandatory disclosure below)
  ELSE:
    Monthly PMI = 0

Monthly PITI = Monthly P&I + Monthly Property Tax 
             + Monthly Home Insurance + Monthly HOA + Monthly PMI
```

**v2 round 1 expert fix — MANDATORY PMI DISCLOSURE (when PMI is active):**

When Monthly PMI > 0 (i.e., user has down payment < 20% on Conventional/Second Home), display this disclosure prominently near the PMI line item in PITI breakdown:

```
ⓘ PMI Auto-Cancel Disclosure:
   
   "PMI typically cancels automatically at ~78% LTV (when you've paid 
   down ~22% of the original loan through principal payments + appreciation).
   
   This calculator does not model automatic PMI cancellation in v1 — it 
   assumes PMI continues for the full loan term. Your actual total interest 
   and monthly payments may be lower once PMI cancels (typically at years 
   8-12 depending on loan terms and home appreciation).
   
   For accurate post-cancellation projections, recalculate after reaching 
   78% LTV or consult your loan servicer."
```

This disclosure is MANDATORY when PMI is active. Without it, users will overestimate lifetime PMI cost by 2-3× reality.

### Phase 4 — Investor Cash Flow (Mode 2)

```
Gross Monthly Rent = user input
Effective Monthly Rent = Gross × (1 − Vacancy %/100) × (1 − OpEx %/100)

Net Monthly Cash Flow = Effective Monthly Rent − Monthly PITI

Annual Cash Flow = Net Monthly Cash Flow × 12
Year 1 Cash-on-Cash % = Annual Cash Flow / Total Cash to Close × 100

DSCR:
  Annual NOI = Gross Rent × 12 × (1 − Vacancy %/100) × (1 − OpEx %/100)
  Annual Debt Service = Monthly P&I × 12 (NOT full PITI — taxes/insurance 
                                           are operating, not debt)
  DSCR = Annual NOI / Annual Debt Service
  
Break-Even Rent (minimum rent for zero cash flow):
  Break-Even Rent = PITI / [(1 − Vacancy %/100) × (1 − OpEx %/100)]
```

### Phase 5 — Amortization Schedule (for chart + data)

```
For each month m from 1 to Number of Payments:
  Interest Payment_m = Remaining Balance × Monthly Interest Rate
  Principal Payment_m = Monthly P&I − Interest Payment_m
  
  IF Extra Monthly Principal > 0:
    Principal Payment_m += Extra Monthly Principal
  
  Remaining Balance_m = Remaining Balance − Principal Payment_m
  
  Cumulative Interest_m = Σ(Interest Payment_1..m)
  Cumulative Principal_m = Σ(Principal Payment_1..m)

Early Payoff Detection:
  IF Remaining Balance reaches 0 before Number of Payments:
    Actual Payoff Month = m
    Interest Saved vs Standard = Standard Total Interest − Actual Total Interest
    Display: "Pays off N months early, saves $X in interest"
```

### Phase 6 — Mode 3 Comparison

```
For each scenario (A/B/C):
  Run Phase 2-5 with scenario's parameters
  Store: Monthly P&I, Monthly PITI, Total Interest, Cash to Close, Payoff Date

Determine winner:
  Lowest Total Interest → "Lowest Cost" badge
  Highest Monthly Payment Savings → "Monthly Savings" badge
  If all within 5% of each other → "Similar scenarios — pick based on cash flow"
```

---

## CRITICAL RULES

### Rule 1 — Investor rate defaults

Default interest rate MUST reflect current investor market (7.5% in 2026, not 5% consumer rate). Default down payment MUST be 25% (not 20%). These defaults signal investor positioning.

### Rule 2 — PMI logic applies only to qualifying loan types

PMI triggers ONLY when:
- Down Payment < 20%
- Loan Type IS Conventional OR Second Home
- Loan Type DSCR, Portfolio, Hard Money: PMI not typical (higher rate covers risk instead)

### Rule 3 — DSCR calculation uses P&I only, NOT full PITI

DSCR = Annual NOI / Annual Debt Service. Debt Service is P&I only. Taxes and insurance are operating expenses, deducted in NOI calculation, not debt service. This matches lender underwriting standards.

### Rule 3a — KEY INSIGHT: DSCR vs Cash Flow (v2 round 1 expert fix — UX clarity mandatory)

**DSCR and Cash Flow answer different questions. Both must be considered.**

```
┌─────────────────────────────────────────────────────────────────────────┐
│  KEY INSIGHT — must be displayed in UI whenever both DSCR and Cash      │
│  Flow are visible (Mode 2 results card):                                │
│                                                                         │
│  A property can have negative cash flow but still meet lender DSCR      │
│  requirements.                                                          │
│                                                                         │
│  DSCR evaluates LENDER risk                                             │
│    "Can the property's rental income service its debt (P&I)?"           │
│    Lenders want DSCR ≥ 1.20-1.25 typically.                             │
│                                                                         │
│  Cash Flow evaluates INVESTOR outcome                                   │
│    "Does this deal put money in my pocket each month or out of it?"     │
│    Includes taxes, insurance, HOA, etc.                                 │
│                                                                         │
│  Both must be considered:                                               │
│    • Lender approves DSCR ≥ 1.2 → loan is financeable                   │
│    • Investor needs Cash Flow analysis → deal pays or costs you         │
│                                                                         │
│  A deal can be APPROVED by lender but STILL cost you money monthly.     │
│  Conversely, a deal with positive cash flow but DSCR < 1.0 won't fund   │
│  (lender sees too much risk).                                           │
└─────────────────────────────────────────────────────────────────────────┘

UI requirement: when Mode 2 displays both metrics, add a small info card 
explaining this distinction. Placement: below primary metric, above 
secondary metrics list.
```

Example scenarios demonstrating the distinction:
- **DSCR 1.25, Cash Flow −$150/mo**: Deal is lender-approvable but costs the investor money monthly (taxes/insurance beyond P&I eat the spread). Common in high-tax markets like Texas.
- **DSCR 0.95, Cash Flow +$200/mo**: Deal shows positive investor cash flow due to low taxes/insurance, but lender sees P&I risk. Needs larger down payment to push DSCR ≥ 1.2.

### Rule 4 — Break-Even Rent includes vacancy + OpEx

Break-Even Rent = PITI / [(1 − Vacancy %) × (1 − OpEx %)]

Example: PITI $2,185, Vacancy 8%, OpEx 30% → Break-Even = $2,185 / (0.92 × 0.70) = $3,394.
This is the GROSS rent needed for zero cash flow — commonly higher than expected.

### Rule 5 — "Net Monthly Cost" vs "Cash Flow" terminology

- When Effective Rent < PITI: display as **"Net Monthly Cost"** (positive number, what you pay)
- When Effective Rent ≥ PITI: display as **"Net Monthly Cash Flow"** (positive number, what you pocket)

Never show negative monthly cash flow with minus sign as primary metric — confusing. Toggle terminology based on sign.

### Rule 6 — Cross-calculator invariant with Rental Property Calculator

Year 1 Cash-on-Cash % in this calculator must match Rental Property Calculator's Year 1 CoC within ±0.1 pp for identical inputs. If different, indicates a formula discrepancy — fix before deploy.

### Rule 7 — Extra Principal doesn't change monthly payment

Extra Monthly Principal ADDS to the scheduled Principal portion but does NOT reduce the scheduled P&I. The loan pays off earlier; monthly payment stays the same until final month. Clarify in UI.

### Rule 8 — Loan Type rate defaults

When user selects Loan Type, adjust default rate:

```
Conventional:   7.5% (current investor market)
Second Home:    7.25% (slightly lower than investment)
DSCR:           8.25% (1 pp above Conventional typical)
Portfolio:      8.5% (relationship-based, varies widely)
Hard Money:     12.0% (short-term, high-rate)
```

User can override, but defaults signal expected market.

### Rule 9 — Hard Money special handling (v2 round 1 expert fix — RED blocking banner in Mode 2)

When Loan Type = Hard Money:
- Term defaults to 1 year (short-term)
- Rate default: 12.0% (see Rule 8)
- Mode 1: Show warning below PITI display: "Hard money is short-term financing (typically 6-12 months) for flips. Not designed for long-term rental holds."

**When Loan Type = Hard Money AND Mode 2 (Investor) active (v2 round 1 expert fix):**

```
BLOCKING BEHAVIOR:

→ Show RED blocking banner at top of Mode 2 results:
  "⚠ Hard money loans are not designed for rental cash flow analysis.
   
   Hard money is short-term bridge financing (6-12 months) at high rates 
   (12-14%) intended for flip projects, not long-term rentals. Monthly 
   payments at hard money rates will always be far higher than rental 
   income can cover.
   
   For flip strategy analysis → use Fix and Flip Calculator
   For rental financing → select Conventional or DSCR loan type above"

→ DISABLE Net Monthly Cost/Cash Flow display
→ DISABLE DSCR calculation (not meaningful for short-term hard money)
→ DISABLE Break-Even Rent
→ STILL SHOW: Monthly P&I, Total Interest over 1yr term, Cash to Close

Rationale: Showing "Net Cash Flow = −$3,500/mo" for hard money rentals 
confuses users into thinking they miscalculated. Better to block the 
metric entirely and redirect to appropriate tool.

CTA buttons shown instead of metrics:
  Primary: "Analyze as flip deal → Fix and Flip Calculator"
  Secondary: "Switch to Conventional loan → update Loan Type above"
```

### Rule 10 — Maximum reasonable inputs (guardrails)

```
Property Price: $10K to $50M
Interest Rate: 0.1% to 25%
Loan Term: 15, 20, 25, or 30 years only
Down Payment: 0% to 100%
Monthly Rent: $0 to $50K
```

Out-of-range inputs show inline warning, not blocking error.

---

## EXTREME CASES

### Case A — Down Payment 100% (all-cash purchase)
```
Loan Amount = 0 → no mortgage calc needed
Display: "This is an all-cash purchase. Mortgage calculator doesn't apply.
          Use Rental Property Calculator to evaluate cash-only returns."
Provide CTA to Rental Property Calculator with inputs pre-filled.
```

### Case B — Very negative cash flow (Mode 2)
```
IF Net Monthly Cash Flow < −$500/month:
  Display amber warning: "Significantly negative cash flow. Deal requires 
                         $X/month of owner investment. Verify rent assumptions 
                         or consider different financing."
```

### Case C — DSCR < 1.0 (below typical lender threshold)
```
IF DSCR < 1.0:
  Display: "DSCR {X} is below typical lender minimum of 1.2. Conventional 
            financing may not approve. Consider Portfolio lender or 
            higher down payment."
  CTA: "Run DSCR Calculator for underwriting details"
```

### Case D — Zero rent in Mode 2 (misconfigured)
```
IF Mode 2 active AND Monthly Rent == 0:
  Display: "Enter expected monthly rent to see cash flow analysis. 
            For rent estimates, use Rental Property Calculator 
            or check Zillow Rent Zestimate for your property."
```

---

## SCENARIOS (3 required, shown as comparison cards in Mode 1/2)

### Conservative
- Rate +1 pp (e.g., 8.5% vs 7.5%)
- Vacancy +5 pp (e.g., 13% vs 8%)
- OpEx +10 pp (e.g., 40% vs 30%)
- Label: "If rates rise or costs run over"

### Base
- User inputs as entered
- Label: "Your current assumptions"

### Optimistic
- Rate −0.5 pp
- Vacancy −3 pp
- OpEx −5 pp
- Label: "Best-case market conditions"

If Winner Sensitivity (Cash Flow delta Conservative vs Optimistic > $300/mo):
→ Display banner: "Deal is highly sensitive to rate + vacancy + expense assumptions. Stress-test before committing."

---

## SENSITIVITY TABLES (2 required)

### Table 1 — Rate × Down Payment
Rows: Interest Rate 6.5 / 7.0 / 7.5 / 8.0 / 8.5 / 9.0%
Cols: Down Payment 15% / 20% / 25% / 30% / 40%
Cells: Monthly PITI
Purpose: show how rate hike + larger down payment interact

Total cells: 6 × 5 = 30 cells (well under limits)

### Table 2 — Loan Term × Rate
Rows: Term 15 / 20 / 25 / 30 years
Cols: Rate 6.5 / 7.0 / 7.5 / 8.0 / 8.5%
Cells: Monthly P&I + Total Interest
Purpose: show classic "shorter term = higher payment but far less interest"

Total cells: 4 × 5 = 20 cells

Highlight user's current assumption cell in both tables with indigo border.

---

## VISUALIZATIONS

### 1. Amortization Line Chart (primary, Mode 1/2)
X-axis: Year 1 to N
Y-axis: Dollar amount
3 lines:
- Remaining Balance (blue, descending)
- Cumulative Principal Paid (indigo, ascending)
- Cumulative Interest Paid (red, ascending, dominates early years)

### 2. Payment Breakdown Pie Chart (Mode 1/2)
Slices: P&I, Property Tax, Insurance, PMI (if applicable), HOA (if applicable)
Purpose: show "where does my monthly payment go?"

### 3. Mode 2 — Cash Flow Bar Chart
Stacked bar: Effective Rent (green) vs PITI (split into P&I red, Tax/Insurance amber)
Shows "revenue vs cost" at a glance.

### 4. Mode 3 — Compare Payments Bar Chart
Side-by-side bars for each scenario showing Monthly PITI and Total Interest.

---

## TEST CASES (8 required, tolerance ±$5 for payments, ±0.1% for percentages)

### Test 1 — Standard Conventional 30-year
Inputs: Property $300K, 25% down, 7.5% rate, 30-year, Conventional
Expected:
- Loan Amount: $225,000
- Monthly P&I: $1,573
- Tax (1.2%): $300/mo
- Insurance: $150/mo
- Monthly PITI: $2,023 (no PMI since 25% down)
- Total Interest over 30 years: $340,300

### Test 2 — High Leverage with PMI
Inputs: Property $300K, 10% down, 7.5% rate, 30-year, Conventional, PMI 0.75%
Expected:
- Loan Amount: $270,000
- Monthly P&I: $1,888
- PMI: $169/mo ($270K × 0.75% / 12)
- Monthly PITI: $2,357
- Note: PMI auto-cancels at 78% LTV but not modeled in v1

### Test 3 — DSCR Loan (no PMI even with low down)
Inputs: Property $300K, 20% down, 8.25% rate, 30-year, DSCR
Expected:
- Loan Amount: $240,000
- Monthly P&I: $1,803
- Monthly PITI: $2,253
- PMI: $0 (DSCR never has PMI regardless of down payment)

### Test 4 — Mode 2 Investor — Positive Cash Flow
Inputs: Property $300K, 25% down, 7.5%, 30yr, Conv. Rent $2,500/mo, Vacancy 8%, OpEx 30%
Expected:
- PITI: $2,023 (from Test 1)
- Effective Rent: $2,500 × 0.92 × 0.70 = $1,610
- Net Cash Flow: $1,610 − $2,023 = −$413/month (negative, "Net Monthly Cost")
- Status: RED "Significantly Negative"
- Break-Even Rent: $2,023 / (0.92 × 0.70) = $3,141/month

### Test 5 — Mode 2 Investor — Strong Cash Flow (Sunbelt)
Inputs: Property $200K, 25% down, 7.5%, 30yr. Rent $2,200/mo, Vacancy 6%, OpEx 25%
Expected:
- Loan Amount: $150K → Monthly P&I: $1,049
- Monthly PITI: $1,049 + $200 (tax 1.2%) + $100 (insur) = $1,349
- Effective Rent: $2,200 × 0.94 × 0.75 = $1,551
- Net Cash Flow: $1,551 − $1,349 = +$202/month
- Status: GREEN "Positive Cash Flow"

### Test 6 — DSCR Check (cross-calculator invariant)
Inputs: Property $250K, 25% down, 8% rate, 30yr. Rent $2,000, Vacancy 5%, OpEx 30%
Expected:
- Monthly P&I: $1,376
- Annual Debt Service: $16,512
- Annual NOI: $2,000 × 12 × 0.95 × 0.70 = $15,960
- DSCR: $15,960 / $16,512 = 0.97 → BELOW 1.0, warning shown
- DSCR Calculator gets same 0.97 ±0.01 for same inputs

### Test 7 — Extra Principal Payoff Acceleration
Inputs: Property $300K, 25% down, 7.5%, 30yr, Extra Principal $200/mo
Expected:
- Standard payoff: Month 360
- With extra $200/mo: Loan pays off around Month 290 (70 months early)
- Interest saved: approx $55,000 (vs $340K standard)
- Monthly Payment stays $1,573 P&I + extra $200 = $1,773 total principal flow

### Test 8 — Mode 3 Compare 30yr Conv vs 15yr Conv vs DSCR
Scenarios:
A: Conventional 30yr @ 7.5%
B: Conventional 15yr @ 7.0%
C: DSCR 30yr @ 8.25%
All at Property $300K, 25% down
Expected:
- A: Monthly P&I $1,573, Total Interest $340,300
- B: Monthly P&I $2,021, Total Interest $138,800
- C: Monthly P&I $1,803, Total Interest $423,700
- Winner "Lowest Cost": Scenario B (despite higher monthly — half the total interest)

---

## URL IMPORT SCHEMA

From Rental Property Calculator:
```
/mortgage-calculator-investment?p=300000&dp=25&lr=7.5&lt=30&r=2200&vc=8&op=30&mode=2
```

Short param keys:
- `p`: Property Price
- `dp`: Down Payment %
- `lr`: Loan Rate %
- `lt`: Loan Term
- `lty`: Loan Type
- `r`: Monthly Rent (Mode 2)
- `vc`: Vacancy %
- `op`: OpEx %
- `pt`: Property Tax % (or absolute)
- `ins`: Insurance annual
- `hoa`: HOA monthly
- `mode`: 1 / 2 / 3

---

## INTEGRATION CROSS-LINKS

### Inbound (buttons on other calculators → this one)
- **Rental Property Calculator** → "Model this financing (Mortgage Calc)" → imports price, rate, rent
- **Rental Property ROI** → "Adjust loan terms" → imports price, rate, term
- **Fix and Flip** → "See mortgage option instead" → imports ARV, Rehab (suggests refi to hold)
- **BRRRR** → "Compare refi terms" → imports ARV for refi scenario

### Outbound (buttons on this calculator → others)
- **Rental Property Calculator** → "Analyze Year 1 operations" with mortgage terms pre-filled
- **Rental Property ROI** → "Project 10-year returns" with mortgage terms pre-filled
- **DSCR Calculator** → "Check lender underwriting" with NOI + debt service
- **Compare Real Estate Deals** → "Compare as Flip/BRRRR/Rental strategy"

---

## OUTPUT CHECKLIST

Before finalizing this RIS, verify:

### Formula correctness
- [ ] Standard amortization formula used (no approximations)
- [ ] PMI only applies to Conventional/Second Home with <20% down
- [ ] DSCR uses P&I as debt service (NOT full PITI)
- [ ] Break-Even Rent includes vacancy + OpEx adjustment
- [ ] "Net Monthly Cost" vs "Cash Flow" terminology toggles based on sign
- [ ] Cross-calculator invariant: Year 1 CoC matches Rental Property Calculator ±0.1 pp
- [ ] Extra Principal reduces payoff time, not monthly payment
- [ ] Loan Type affects default rate (+1pp DSCR, +4.5pp Hard Money)

### UI/UX
- [ ] 3 modes via top-level tabs (blue / indigo / emerald)
- [ ] Investor rate defaults (7.5%, not 5%)
- [ ] Investor down payment default (25%, not 20%)
- [ ] PITI breakdown visible on primary card
- [ ] Amortization chart prominent
- [ ] Mode 2 Status Badge based on cash flow tier
- [ ] Mode 3 Compare uses emerald border for winner

### Extreme cases
- [ ] Down Payment 100% → all-cash message + CTA to Rental Property
- [ ] Net Cash Flow < −$500/mo → amber warning
- [ ] DSCR < 1.0 → lender warning + DSCR Calculator CTA
- [ ] Zero rent in Mode 2 → prompt to enter rent
- [ ] Hard Money → term 1yr default + long-term warning

### Cross-calculator integration
- [ ] Import from Rental Property, Rental Property ROI, Fix and Flip, BRRRR
- [ ] Export to Rental Property (Year 1 analysis), Rental Property ROI (lifetime), DSCR (underwriting), Compare Deals (strategy)
- [ ] **Saved Scenarios widget MANDATORY** — identical to other deployed calculators. Must include: widget HTML block ("Saved Scenarios — N/20 saved · Compare all"), savedScenarios reactive state, Save Scenario button handler, Compare all button handler, 20-scenario free tier limit, upgrade prompt modal trigger at limit. Scenario data shape: `{propertyPrice, downPayment, loanRate, loanTerm, loanType, monthlyPITI, netCashFlow, dscr, timestamp, label}`. Compare all navigates to `/compare-real-estate-deals` with saved scenarios as URL params. This widget is CRITICAL UX/monetization feature — do NOT skip.

### Test suite
- [ ] All 8 test cases pass within tolerance
- [ ] Test 6 (DSCR) matches DSCR Calculator output

### v2 round 1 expert fixes (6 items applied)
- [ ] **Fix 1 (Critical): Net Monthly Cash Flow REMOVED from Secondary Metrics (already Primary Metric). Replaced with Annual Cash Flow to provide annual context without duplication. Primary = monthly decision, Secondary = annual + ROI + DSCR.**
- [ ] **Fix 2 (Critical): Break-Even Rent renamed to "Break-Even Rent (Gross Required Rent)" with mandatory tooltip explaining this is GROSS rent BEFORE vacancy/expenses.**
- [ ] **Fix 3 (Critical): Rule 3a KEY INSIGHT added — DSCR vs Cash Flow distinction explicit. UI requirement to display info card when both metrics visible. Example scenarios showing how deal can be lender-approved AND investor-negative simultaneously.**
- [ ] **Fix 4 (Medium): Hard Money + Mode 2 → RED BLOCKING banner. Net Cash Flow/DSCR/Break-Even displays DISABLED. CTA redirects to Fix and Flip Calculator or suggests loan type change.**
- [ ] **Fix 5 (Medium): PMI auto-cancel MANDATORY DISCLOSURE (when PMI active) — prevents users overestimating lifetime PMI cost by 2-3×.**
- [ ] **Fix 6 (Medium): Mode 3 CTA block — connects loan comparison to Compare Real Estate Deals (full strategy analysis), Rental Property ROI (lifetime wealth), DSCR Calculator. Addresses gap where loan comparison alone understates deal complexity.**

---

**End of RIS v1 → v2 round 1 (current, 1 review round, 6 fixes total: 3 critical + 3 medium). This document defines the complete specification for the Mortgage Calculator (Investment Property). Pair with mortgage-investment-seo-prompt-final.md for full SEO package.**
