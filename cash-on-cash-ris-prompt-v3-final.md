# RIS Prompt — Cash-on-Cash Return Calculator (v3)

You are a senior real estate financial analyst and calculator designer. Your job is to produce a **complete RIS specification** for a new real estate investment calculator.

The output of this prompt becomes the single source of truth for calculator logic — formulas, fields, thresholds, badges, scenarios. It will later be combined with a SEO Package and a Master Prompt to generate the actual Vue page.

---

## YOUR TASK

Write a RIS specification for:

```
Calculator Name:   Cash-on-Cash Return Calculator
Category:          Real Estate Investment
Primary keyword:   cash on cash return calculator
Target audience:   US real estate investors who use leverage — buy-and-hold, BRRRR, and value-add
```

---

## CRITICAL DISTINCTIONS TO PRESERVE

Cash-on-Cash Return (CoC) is a **levered** metric. It is different from Cap Rate (unlevered) and NOI (operating line).

These distinctions must be preserved throughout the spec:

- **Cap Rate** = NOI ÷ Property Value × 100 (unlevered yield on full property value)
- **NOI** = Operating income before debt service (dollar amount)
- **Cash-on-Cash Return** = Annual Cash Flow ÷ Total Cash Invested × 100 (levered return on actual cash out of pocket)

Cash-on-Cash answers the question: *"What percentage return am I getting on the cash I actually put into the deal, after mortgage payments?"*

It is the primary metric for investors who use financing. It becomes more relevant as leverage increases.

---

## RULES

1. **Accuracy is non-negotiable.** Every formula must be correct and verifiable against authoritative sources (BiggerPockets, Investopedia, CCIM, Fannie Mae, CBRE).

2. **US market only.** All benchmarks, thresholds, and examples must reflect the 2026 US market with realistic mortgage rates (typically 7–8% for investment properties as of 2026).

3. **Benchmark integrity rule.** If you cannot find an authoritative source for a specific benchmark number:
   - Do NOT invent a precise percentage
   - Provide a conservative range based on 2026 rate environment logic
   - Explicitly label it as: "Underwriting estimate based on 2026 rate environment — not a market-reported figure"
   - Never present estimated data as if it came from CBRE, CoStar, or similar sources

4. **Follow the exact structure below.** Do not add sections. Do not remove sections. Do not reorder.

5. **Output format:** structured Markdown. Ready to copy into a spec file.

6. **Rounding tolerance rule.** Cash-on-Cash calculations involve mortgage amortization formulas that produce slightly different results across JavaScript, Python, and Claude due to floating-point arithmetic and rounding conventions. Therefore:
   - Test cases must allow tolerance of **±0.5% for percentage outputs** and **±$50 for dollar outputs**
   - Do NOT require exact cent-level precision
   - Document this tolerance explicitly in Section 17 (Test Cases)

---

## REQUIRED OUTPUT STRUCTURE

### 1. METRIC DEFINITION

- **Primary metric:** Cash-on-Cash Return, % per year
- **What it measures:** 2–3 sentence definition emphasizing LEVERED return on actual cash out of pocket
- **Why investors use it:** 2–3 sentences explaining why CoC is the main metric for financed deals — it shows the real return on the money the investor actually deployed, not on the full property value
- **Time dimension:** **Default calculator output is Year 1 annual CoC unless otherwise specified.** The user inputs represent either acquisition-year or stabilized-year data — the calculator treats them at face value and does NOT auto-generate stabilization assumptions. If the investor wants post-stabilization CoC, they must enter post-stabilization inputs manually.
- **Related metrics it must NOT include:**
  - Appreciation (CoC measures current yield, not total return)
  - Principal paydown (unless user explicitly opts in — see Section 13)
  - Tax benefits and depreciation
  - Opportunity cost of capital

### 2. FORMULA

- **Primary formula:**
```
Cash-on-Cash Return = (Annual Pre-Tax Cash Flow ÷ Total Cash Invested) × 100

Where:
  Annual Pre-Tax Cash Flow = NOI − Annual Debt Service
  Total Cash Invested = Down Payment + Closing Costs + Rehab/Initial Repairs + Cash Reserves
  Annual Debt Service = Monthly Mortgage Payment × 12
```

- **Mortgage payment formula** (standard amortization):
```
Monthly Payment = P × [r(1+r)^n] / [(1+r)^n − 1]
  P = loan amount
  r = monthly interest rate (annual rate ÷ 12)
  n = total number of payments (years × 12)
```

**Note:** This calculator uses amortizing loans only. Interest-only (IO) structures common in DSCR loans and commercial bridge financing are out of scope for v1 — consider for future versions if demand emerges.

- **Formula breakdown** — every variable explained:
  - variable name, what it represents, typical US range, where investor finds it

- **Step-by-step calculation** — 6–8 numbered steps from inputs to result

- **Reverse modes:**
  - **Mode 2: Find Required Cash Flow** — given target CoC and cash invested, what cash flow is needed?
  - **Mode 3: Find Max Purchase Price** — given target CoC, rent, expenses, and financing terms, what's the max price that still hits the target?
    - **IMPORTANT:** Closing costs must scale with purchase price (typically 2–5%). The reverse formula must account for this dependency — a naive solve without scaling closing costs will give wrong results. Use iterative solve or algebraic adjustment.

### 3. INPUT FIELDS

Group fields by logical section:

**Income & NOI section:**
- grossRentalIncome (required)
- vacancyRate (required)
- otherIncome (optional)
- operatingExpenses (required — simple mode) or detailed expense fields (property tax, insurance, management, maintenance, utilities, HOA, other)
- expenseMode toggle (Simple / Detailed)

**Property section:**
- purchasePrice (required)

**Financing section (critical for CoC):**
- downPaymentPct (required)
- interestRate (required)
- loanTermYears (default 30, options 15/20/25/30)
- loanType (optional — Conventional / DSCR Loan / Portfolio)

**Cash Invested section:**
- closingCostsPct (required — % of purchase price, typical 2–5%, default null but placeholder "e.g. 3")
- rehabCosts (optional)
- cashReserves (optional)

**Target section (for reverse modes):**
- targetCoC (% per year)

For each field specify:
```
Field name (internal):   [camelCase]
Display label:           [what user sees]
Placeholder:             "e.g. [typical US value]"
Unit:                    $ / % / years
Type:                    number / select / toggle
Min / max:               [bounds]
Step:                    [input step]
Required:                yes / no
Helper text:             [short hint]
Default:                 null (exception: loan term default 30 years)
```

### 4. CALCULATION MODES

Three modes like Cap Rate:

```
Mode key:       'coc' — Calculate Cash-on-Cash
Mode key:       'find-cashflow' — Find Required Cash Flow
Mode key:       'find-price' — Find Max Purchase Price
```

For each specify: mode name, formula, when to use, badge color.

### 5. PRIMARY RESULT

- **Display format:** percentage
- **Decimals:** 2
- **Font size behavior:** shrinks for extreme values (specify breakpoints by char length)
- **Primary color:** dynamic based on badge tier

### 6. BADGE / TIER SYSTEM

CoC tiers calibrated for **2026 US rate environment** (investment property rates ~7–8%). These are tighter than pre-2022 historical norms because higher rates compress levered returns significantly.

Use these 6 tiers:

```
Tier 1: ≥ 12% — Exceptional
Tier 2: 9%–11.99% — Strong
Tier 3: 6%–8.99% — Solid
Tier 4: 3%–5.99% — Weak
Tier 5: 0%–2.99% — Critical
Tier 6: < 0% — Negative Cash Flow
```

**Important terminology note:** Tier 6 is labeled "Negative Cash Flow" — NOT "Negative Leverage". These are different concepts:
- **Negative Cash Flow** = the property loses money each year after debt service (CoC is below zero). This is a factual condition about the numbers.
- **Negative Leverage** = a broader financing concept where debt reduces returns compared to an all-cash purchase. It can occur even when CoC is positive (e.g., CoC of 4% with 7.5% mortgage rate).

Do NOT conflate these in tier labels. Negative leverage is surfaced separately via the Leveraged Yield Spread metric (Section 8).

Fill in for each tier:
- Label (e.g. "Strong", "Solid")
- bg1 color (hex)
- bg2 color (hex)
- Meaning (1–2 sentences)

**Context note:** In 2026, 6–9% CoC is achievable in Midwest and Southeast markets with 25–30% down. Primary coastal metros often show 2–5% CoC even on solid deals due to compressed yields. The tier system should reflect 2026 reality — don't use historical 2018 benchmarks where 10%+ was common.

### 7. INSIGHT TEXT (DEAL CONTEXT)

For each tier, write a 2–3 sentence insight following this pattern:

```
"CoC of [value] is in the [tier] range by 2026 US norms. [Context about what this 
means given current rate environment]. For [asset class], [comparison to typical range]. 
[Actionable guidance]."
```

Must mention:
- Current value
- Tier meaning in 2026 context
- Asset class context if selected
- If CoC is below the borrowing rate, flag this as a **practical warning sign of potentially negative leverage** — financing may be reducing returns compared to an all-cash purchase. Do not claim this as an absolute definition of negative leverage; it is a useful underwriting heuristic in the 2026 rate environment.

### 8. KEY DERIVED METRICS

Three metric cards in the right column:

**Metric 1: Annual Pre-Tax Cash Flow**
- Formula: NOI − Annual Debt Service
- Format: currency
- Thresholds: positive = good, 0 to -$2000 = caution, < -$2000 = bad

**Metric 2: DSCR (Debt Service Coverage Ratio)**
- Formula: NOI ÷ Annual Debt Service
- Format: ratio (e.g. "1.35x")
- Thresholds: ≥1.25 good, 1.00–1.24 marginal, <1.00 bad
- Critical because DSCR directly affects loan eligibility

**Metric 3: Leveraged Yield Spread**
- Formula: CoC − Interest Rate
- Format: percentage points (e.g. "+1.5pp" or "−2.0pp")
- Thresholds:
  - ≥ +2pp = positive leverage (financing adds value)
  - 0 to +2pp = neutral leverage
  - < 0 = potential negative leverage (financing may be reducing returns vs all-cash)
- This metric is **fixed** — do not substitute with Break-even Occupancy. Leveraged Yield Spread directly shows whether leverage helps or hurts, which is the core question for a CoC calculator.

### 9. SENSITIVITY ANALYSIS

```
Primary variable being sensitized:  Interest Rate (most impactful for CoC in 2026)
Range of variation:                  -1.5% to +1.5% in steps of 0.5%
What stays constant:                 NOI, down payment, loan term, cash invested
Columns:                             Interest Rate, Monthly Payment, Annual Cash Flow, CoC %
Number of rows:                      7
```

**Alternative secondary table** — Cash Flow at different down payment levels:
```
Rows: 20%, 25%, 30%, 35%, 40%, 50% down
Columns: Down Payment %, Cash Invested, Monthly Payment, Annual Cash Flow, CoC %
```

### 10. SCENARIO ANALYSIS

Three scenarios specific to CoC dynamics:

```
Conservative:
  Vacancy ×1.5 + 2%
  Rent ×0.95
  Expenses ×1.10
  Interest Rate +0.5%

Base:
  (raw inputs)

Optimistic:
  Vacancy ×0.7
  Rent ×1.05
  Expenses ×0.95
  Interest Rate −0.5%
```

Interest rate variation is included because the rate environment dominates CoC outcomes in 2026.

### 11. VISUALIZATION BREAKDOWN

Stacked bar showing where each dollar of gross rent goes:

```
Segment 1: Vacancy Loss       (red)
Segment 2: Operating Expenses (amber)
Segment 3: Debt Service       (orange)  ← distinct from Cap Rate visual
Segment 4: Cash Flow          (green)   ← final take-home

Total = 100% of Gross Rental Income
```

Overflow state: when debt service + expenses + vacancy > gross income → Cash Flow segment turns red and shows "Negative Cash Flow".

This visualization makes the difference from Cap Rate visual clear — it shows the impact of leverage.

### 12. WARNINGS & VALIDATION

List 6–8 warnings, including:
- Missing critical inputs (purchase price, down payment, interest rate)
- Negative cash flow (result-level error state, not input error)
- DSCR < 1.0 (error — loan likely not qualifying)
- DSCR 1.0–1.24 (warning — tight for agency financing)
- CoC < interest rate (warning — potential negative leverage; financing may be reducing returns compared to an all-cash purchase)
- Down payment < 15% (warning — typically required minimum for investment property)
- Interest rate outside 2026 realistic range (e.g. <5% or >12% — data check warning)
- Closing costs < 1% of purchase price (warning — likely underestimated)

### 13. ADVANCED MODE (Optional Extension)

**Not applicable as "Investor Mode"** — Cash-on-Cash IS the investor mode metric by definition. Financing fields are always required in the main calculator.

However, include an **Advanced Mode toggle** that unlocks these optional calculations:

```
If Advanced Mode = on, show additionally:
  - Principal Paydown Benefit:    Annual principal portion of mortgage payment
  - Adjusted CoC:                 (Cash Flow + Principal Paydown) / Cash Invested × 100
  - Tax Benefit Estimate:         Depreciation × marginal tax rate (user-entered)
  - True Return Approximation:    Adjusted CoC + Tax Benefit %
```

Keep these as optional to avoid overwhelming casual users. The primary metric remains standard CoC.

### 14. BENCHMARKS BY PROPERTY TYPE (2026)

Realistic 2026 CoC benchmarks at standard financing (25% down, 7.5% rate, 30-year loan).

| Property Type              | Weak (Coastal) | Moderate (Sunbelt) | Strong (Midwest/SE) |
|----------------------------|----------------|--------------------|---------------------|
| Single-Family Rental       | 1%–3%          | 3%–6%              | 6%–9%               |
| Small Multifamily (2–4)    | 2%–4%          | 4%–7%              | 7%–10%              |
| Multifamily 5+             | 1%–3%          | 3%–5%              | 5%–8%               |
| Retail / Strip Center      | 2%–4%          | 4%–7%              | 7%–10%              |
| Industrial / Warehouse     | 1%–3%          | 3%–6%              | 5%–8%               |
| Office                     | 0%–2%          | 2%–4%              | 4%–7%               |

**Label these as:** "Underwriting estimates based on 2026 rate environment — assumes stabilized asset, standard financing. Not a market-reported figure."

### 15. BENCHMARKS BY STATE (8 states)

For California, Texas, Florida, New York, Arizona, Georgia, Colorado, Washington:

```
State: [name]
Range: [typical CoC range at 25% down, 7.5% rate]
Key cities: [top 3 metros]
Notes: [how rate environment, tax climate, insurance, and purchase prices interact]
Source context: "Underwriting estimate based on 2026 rate environment and state-level 
cost factors — not a specific reported figure."
```

### 16. ASSET CLASS CONTEXT

For dropdown (SFR, Small MF, Large MF, Commercial): typical range + 2-sentence note on CoC dynamics for each class.

### 17. TEST CASES

**TOLERANCE RULE:** All expected outputs allow tolerance of **±0.5% for percentages** and **±$50 for dollar amounts**. This accounts for floating-point differences between JavaScript, Python, and Claude implementations of the amortization formula. Do NOT require cent-level precision.

Write **6 test cases**:

**Test 1: Standard CoC calculation** — realistic 2026 inputs
- Example: $350K purchase, 25% down, 7.5% rate, 30-year, typical NOI
- Expected CoC with tolerance ±0.5%

**Test 2: Find Required Cash Flow** (reverse mode)
- Given target CoC 8%, cash invested $95K
- Expected required cash flow with tolerance ±$50

**Test 3: Find Max Purchase Price** (reverse mode)
- Given target CoC 7%, rent, expenses, and financing terms
- Must account for scaling closing costs
- Expected max price with tolerance ±$500

**Test 4: Negative cash flow scenario** — verify tier logic
- Over-leveraged deal producing negative cash flow
- Expected tier: **"Negative Cash Flow"** (red) — this is Tier 6, labeled "Negative Cash Flow" per Section 6
- Do NOT label this as "Negative Leverage" — that is a separate concept surfaced via Leveraged Yield Spread

**Test 5: Edge case — zero cash invested**
- Seller financing with 0% down AND 0 closing costs AND 0 rehab AND 0 reserves
- Expected result: "N/A" (division by zero)
- This test verifies that CoC does NOT default to Cap Rate when cash invested equals zero

**Test 6: Edge case — 0% down with normal costs**
- 0% down but $8K closing costs + $5K rehab
- Cash Invested = $13K, NOT zero
- CoC must be calculated normally
- This verifies that 0% down ≠ Cap Rate when other costs exist

Each test must have exact inputs and expected outputs within tolerance. These tests will be used to verify the Vue implementation.

### 18. URL PARAMETERS

Short param names (≤3 chars where possible):
- grossRentalIncome → gri
- vacancyRate → vr
- otherIncome → oi
- operatingExpenses → oe
- purchasePrice → pp
- downPaymentPct → dp
- interestRate → ir
- loanTermYears → lt
- closingCostsPct → cc
- rehabCosts → rc
- cashReserves → cr
- targetCoC → tc
- mode → md

### 19. EDGE CASES

```
All fields empty:                 result = —
Missing NOI inputs:               disable result, show "Enter income and expenses"
Missing financing inputs:         disable result, show "Enter financing terms"
Negative cash flow:               calculate CoC (will be negative), show red tier
Zero total cash invested:         CoC = N/A (division by zero), show explanation message
                                  IMPORTANT: Do NOT default to Cap Rate
0% down with non-zero costs:      Calculate CoC normally using closing + rehab + reserves
100% down payment (all-cash):     Loan = 0, debt service = 0, CoC calculated from
                                  Cash Flow ÷ (Purchase Price + Costs). Near equal to 
                                  Cap Rate only if costs are minimal.
Interest rate = 0:                Allow (unusual but valid — owner carry, seller finance)
Extreme values (1e9+):            Scientific format
Loan term outside 5–40 years:     Validation warning
```

---

## OUTPUT CHECKLIST

Before finalizing, verify:

- [ ] All 19 sections present in correct order
- [ ] CoC clearly distinguished from Cap Rate and NOI throughout
- [ ] **Year 1 default** explicitly stated in Section 1
- [ ] Mortgage formula is standard amortization (not simple interest)
- [ ] 2026 rate environment (~7–8%) reflected in benchmarks
- [ ] Tier system: 6 tiers, 9%+ Strong, 6–9% Solid, realistic for 2026
- [ ] **Tier 6 labeled "Negative Cash Flow" — NOT "Negative Leverage"**
- [ ] Insight text treats "CoC < interest rate" as a warning sign, not absolute definition of negative leverage
- [ ] **Exactly 6 test cases written** (not 5)
- [ ] Test cases include ±0.5% / ±$50 tolerance rule
- [ ] Zero cash invested → N/A, not Cap Rate default
- [ ] 0% down with costs → calculate normally
- [ ] Reverse mode "Find Max Price" accounts for scaling closing costs
- [ ] Leveraged Yield Spread is fixed as Metric 3 (not alternative with Break-even)
- [ ] DSCR appears as derived metric
- [ ] Visualization includes Debt Service segment
- [ ] Benchmarks clearly labeled as "underwriting estimates" where not from authoritative source
- [ ] IO loans marked as out of scope for v1

**Output only the RIS specification. Do not output code. Do not output HTML. Do not output Vue. This is a spec document that will be consumed by the Master Prompt later.**
