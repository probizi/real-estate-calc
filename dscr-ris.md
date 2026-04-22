# RIS Prompt — DSCR Calculator (v2)

You are a senior real estate financial analyst and calculator designer. Your job is to produce a **complete RIS specification** for a new real estate investment calculator.

The output of this prompt becomes the single source of truth for calculator logic — formulas, fields, thresholds, badges, scenarios. It will later be combined with a SEO Package and a Master Prompt to generate the actual Vue page.

---

## YOUR TASK

Write a RIS specification for:

```
Calculator Name:   DSCR Calculator
Category:          Real Estate Investment / Lender Metrics
Primary keyword:   dscr calculator
Target audience:   US real estate investors applying for investment property loans,
                   commercial real estate investors, brokers, and loan officers
```

---

## CRITICAL DISTINCTIONS TO PRESERVE

DSCR is a **lender-side ratio** that tells banks whether a property's income can cover its debt obligations. It is different from all other return metrics:

- **DSCR** = NOI ÷ Annual Debt Service (or Rent ÷ PITIA for DSCR loans) — a coefficient
- **Cap Rate** = NOI ÷ Property Value — unlevered yield (%)
- **Cash-on-Cash** = Annual Cash Flow ÷ Total Cash Invested — levered return (%)
- **NOI** = operating income before debt service (dollars)

DSCR answers the question: *"Does this property generate enough income to service the debt, and is the cushion large enough for a lender to approve the loan?"*

It is the primary underwriting metric for both agency multifamily loans (Fannie Mae, Freddie Mac) and non-QM DSCR loans used by individual investors.

### Critical rules that must be preserved throughout the spec

1. **DSCR is a RATIO (coefficient), not a percentage.**
   - Format: `1.25x` — never `125%`, never just `1.25`
   - The `x` suffix is industry standard and must appear in all display outputs

2. **Two DSCR types must be supported as separate modes:**
   - **Property DSCR**: NOI ÷ Annual Debt Service (used in commercial and agency multifamily loans)
   - **DSCR Loan DSCR**: Monthly Rent ÷ PITIA (used in non-QM / portfolio investor loans; PITIA = Principal + Interest + Taxes + Insurance + HOA/Association)

   These are **different formulas** for different loan products. Do not conflate them.

3. **Industry-standard thresholds — DO NOT invent new ones:**
   - ≥ 1.50x: Excellent (low-risk profile, preferred pricing)
   - 1.25–1.49x: Strong (Fannie Mae / Freddie Mac conventional multifamily minimum)
   - 1.15–1.24x: Moderate (Fannie Mae MAH affordable minimum, some agency executions)
   - 1.00–1.14x: Marginal (most DSCR loan lender minimums land here)
   - < 1.00x: Fail (property does not cover debt — loan typically denied)

4. **Stress testing is MANDATORY:**
   The calculator must show DSCR at current rate AND at +1%, +2% stressed rates.
   This mirrors how underwriters actually evaluate loans — they check resilience at higher rates, not just today's rate.

5. **DSCR is an operating metric, not a return metric:**
   - Does NOT include appreciation
   - Does NOT include principal paydown benefit
   - Does NOT include tax benefits
   - It is strictly NOI (or rent) vs debt service

6. **2026 rate environment context:**
   With investment property rates around 7.5–8%, DSCR is materially compressed vs pre-2022 levels. A 1.30x DSCR was common in 2019; in 2026 many deals land at 1.10–1.20x. Benchmarks must reflect 2026 reality, not historical 2018 averages.

---

## RULES

1. **Accuracy is non-negotiable.** Every formula must be correct and verifiable against authoritative sources (Fannie Mae Multifamily Guide, Freddie Mac Multifamily Investor Materials, CCIM, Investopedia, BiggerPockets).

2. **US market only.** All benchmarks, thresholds, and examples must reflect the 2026 US market with realistic mortgage rates (7.5–8% for investment property).

3. **Benchmark integrity rule.** If you cannot find an authoritative source for a specific benchmark number:
   - Do NOT invent a precise value
   - Provide a conservative range based on 2026 rate environment logic
   - Explicitly label as: "Underwriting estimate based on 2026 rate environment — not a market-reported figure"
   - Industry-standard DSCR thresholds (1.25x Fannie/Freddie minimum, 1.20x MAH, etc.) ARE authoritative — cite directly

4. **Rounding tolerance rule.** DSCR calculations involve mortgage amortization formulas that produce slightly different results across JavaScript, Python, and Claude due to floating-point arithmetic. Therefore:
   - Test cases must allow tolerance of **±0.02x for DSCR ratio** and **±$50 for dollar outputs**
   - Document this tolerance explicitly in Section 17

5. **Follow the exact structure below.** Do not add sections. Do not remove sections. Do not reorder.

6. **Output format:** structured Markdown. Ready to copy into a spec file.

---

## REQUIRED OUTPUT STRUCTURE

### 1. METRIC DEFINITION

- **Primary metric:** DSCR (Debt Service Coverage Ratio), expressed as a coefficient like `1.25x`
- **What it measures:** 2–3 sentence definition — emphasize it's the ratio of operating income to debt obligations, used by lenders to evaluate loan risk
- **Why investors and lenders use it:** 2–3 sentences — the primary underwriting metric for investment property loans; determines loan approval, sizing, and pricing
- **Related metrics it must NOT include:**
  - Appreciation
  - Principal paydown benefits
  - Tax benefits / depreciation
  - Cash invested (DSCR is unaware of down payment or closing costs)

### 2. FORMULA

Two distinct formulas for two calculator modes:

**Property DSCR formula (commercial / agency multifamily):**
```
Property DSCR = Annual NOI ÷ Annual Debt Service

Where:
  Annual NOI = (Gross Rental Income − Vacancy Loss + Other Income) − Operating Expenses
  Annual Debt Service = Monthly Mortgage Payment × 12
  Monthly Mortgage Payment = standard amortization formula:
    P × [r(1+r)^n] / [(1+r)^n − 1]
    P = loan amount
    r = monthly interest rate (annual rate ÷ 12)
    n = total number of payments (years × 12)
```

**DSCR Loan DSCR formula (non-QM investor loans):**
```
DSCR Loan DSCR = Monthly Rent ÷ Monthly PITIA

Where:
  PITIA = Principal + Interest + Taxes + Insurance + HOA/Association fees
  
  All components are MONTHLY, not annual.
  Vacancy and other operating expenses are NOT included — this is a rent-coverage ratio, 
  not a full operating ratio.
```

**Formula breakdown** — every variable explained with typical US range and where the investor/broker finds the number.

**Step-by-step calculation** — 4–6 numbered steps for each formula, with real numbers.

**Reverse modes (Property DSCR mode only):**

- **Mode 3: Find Max Loan Amount** — given NOI, target DSCR (default 1.25x), interest rate, and loan term, reverse-solve for the largest loan amount that still qualifies.
  Formula: `Max Loan = solve for P where (NOI ÷ (P × [r(1+r)^n] / [(1+r)^n − 1]) × 12) = targetDSCR`

- **Mode 4: Find Required NOI** — given loan amount, interest rate, loan term, and target DSCR (default 1.25x), calculate the minimum NOI needed.
  Formula: `Required NOI = Annual Debt Service × targetDSCR`
  Note: user provides loan + rate + term + targetDSCR. The calculator finds required NOI. Do NOT request targetNOI as input — that's the OUTPUT of this mode.

Both reverse modes are disabled in DSCR Loan mode (Rent/PITIA formula doesn't support meaningful reverse-solving).

### 3. INPUT FIELDS

Group fields by logical section:

**DSCR Mode toggle:**
- dscrMode: 'property' | 'dscr-loan' (default: 'property')
- Required; exposes different field sets below

**Income section (Property DSCR mode):**
- grossRentalIncome (required)
- vacancyRate (required)
- otherIncome (optional)
- operatingExpenses (required — simple mode) or detailed expense fields (expenseMode toggle)

**Rent section (DSCR Loan mode):**
- monthlyRent (required)

**PITIA section (DSCR Loan mode):**
- **P&I is ALWAYS auto-calculated from loan inputs (loanAmount + interestRate + loanTermYears). No manual override.** This avoids two conflicting sources of truth.
- monthlyPropertyTax (required)
- monthlyInsurance (required)
- monthlyHOA (optional — default 0)
- monthlyAssociation (optional — default 0; separate from HOA for condo/PUD)

**Financing section (both modes):**
- loanAmount OR (purchasePrice + downPaymentPct) — let user enter either way
- interestRate (required)
- loanTermYears (default 30, options 15/20/25/30)

**Target section (for reverse modes):**
- targetDSCR (default 1.25 for reverse modes)

**IMPORTANT — reverse mode scope:**
Reverse modes (`find-loan`, `find-noi`) work ONLY in Property DSCR mode. For DSCR Loan mode, the NOI concept doesn't apply (the formula is Rent ÷ PITIA), and reverse-solving for PITIA from rent is not a meaningful underwriting question. If the user is in DSCR Loan mode and selects a reverse mode, prompt them to switch to Property DSCR mode first.

For each field specify the full schema:
```
Field name (internal):   [camelCase]
Display label:           [what user sees]
Placeholder:             "e.g. [typical US value]"
Unit:                    $ / % / years / x
Type:                    number / select / toggle
Min / max:               [bounds]
Step:                    [input step]
Required:                yes / no (depends on mode)
Helper text:             [short hint]
Default:                 null (exception: loan term 30, targetDSCR 1.25)
```

### 4. CALCULATION MODES

Four modes total, arranged as **4 equal-level tabs** in the mode selector (same canonical UI as Cap Rate Calculator 3-tab pattern, just extended to 4):

```
Mode key:       'property'       — Property DSCR (NOI-based, commercial/agency)
Mode key:       'dscr-loan'      — DSCR Loan (Rent/PITIA, non-QM)
Mode key:       'find-loan'      — Find Max Loan Amount (Property DSCR reverse)
Mode key:       'find-noi'       — Find Required NOI (Property DSCR reverse)
```

For each specify: mode name, formula, when to use, badge color.

**Mode architecture — CRITICAL to preserve:**

The 4 modes belong to **2 logical families** even though they share one horizontal tab row:

- **Property DSCR family (3 modes):** `property`, `find-loan`, `find-noi`
  - All 3 use the same NOI-based formula foundation
  - Reverse modes (`find-loan`, `find-noi`) inherit Property DSCR assumptions, labels, and styling
  - Must use consistent color family (amber / Property palette)
  
- **DSCR Loan family (1 mode):** `dscr-loan`
  - Uses entirely different formula (Rent ÷ PITIA)
  - Uses its own distinct color family (teal or indigo)
  - No reverse modes available in this family

**Visual treatment rules:**
- Mode selector is a single horizontal 4-tab row (equal-level tabs)
- But colors signal the family: `property`, `find-loan`, `find-noi` share the amber/blue/emerald reverse pattern within the Property family
- `dscr-loan` stands apart visually with teal/indigo
- When switching from `dscr-loan` to any Property mode, the color scheme shifts across: sticky bar, main result, badge, PDF hero

Color families (for mode selector + cross-UI consistency):
- Property DSCR (Standard) → amber (`#f59e0b` / `amber-*`)
- DSCR Loan (Alternative formula) → teal (`#14b8a6` / `teal-*`)
- Find Max Loan (Property Reverse #1) → blue (`blue-700`, `blue-100`)
- Find Required NOI (Property Reverse #2) → emerald (`emerald-700`, `emerald-100`)

**DO NOT create nested sub-tabs.** Keep 4 top-level tabs in a single row. The color system already signals family membership to users visually.

### 5. PRIMARY RESULT

- **Display format:** coefficient with "x" suffix (e.g., `1.35x`)
- **Decimals:** 2 (always show 2 decimal places for precision at the 1.00/1.25 threshold boundaries)
- **Font size behavior:** shrinks for extreme values (`10.00x+` or negative cases)
- **Primary color:** dynamic based on badge tier

### 6. BADGE / TIER SYSTEM

Use these exact industry-standard tiers — DO NOT modify thresholds:

```
Tier 1: ≥ 1.50x — Excellent
  Label:        Excellent
  bg1 color:    #059669
  bg2 color:    #047857
  Meaning:      Low-risk profile. Meets threshold for best pricing across agency 
                and portfolio loans. Strong cushion against operating shocks.

Tier 2: 1.25x–1.49x — Strong
  Label:        Strong
  bg1 color:    #10B981
  bg2 color:    #059669
  Meaning:      Meets Fannie Mae / Freddie Mac conventional minimum (1.25x). 
                Standard agency multifamily qualification.

Tier 3: 1.15x–1.24x — Moderate
  Label:        Moderate
  bg1 color:    #F59E0B
  bg2 color:    #D97706
  Meaning:      Acceptable for Fannie Mae MAH affordable program (1.15x minimum) 
                and some portfolio executions. Limited cushion.

Tier 4: 1.00x–1.14x — Marginal
  Label:        Marginal
  bg1 color:    #F97316
  bg2 color:    #EA580C
  Meaning:      Most DSCR loan lenders accept 1.00–1.10x minimum. Higher pricing 
                and tighter LTV caps. Property covers debt but with no cushion.

Tier 5: < 1.00x — Fail
  Label:        Fail
  bg1 color:    #DC2626
  bg2 color:    #B91C1C
  Meaning:      Property does not generate enough income to cover debt service. 
                Loan typically denied. Requires more equity, lower rate, or 
                higher income to qualify.
```

**Important:** These thresholds are authoritative industry standards from Fannie Mae and Freddie Mac guidelines. Do not adjust them for "2026 rate environment" — the thresholds are fixed; only the typical DSCR outcomes shift with rates.

### 7. INSIGHT TEXT (DEAL CONTEXT)

For each tier, write a 2–3 sentence insight following this pattern:

```
"DSCR of [value] is in the [tier] range by US lender standards. [Context about what 
this means for loan qualification — which programs accept, which deny]. For [mode: 
Property DSCR / DSCR Loan], [comparison to typical loan product minimums]. 
[Actionable guidance — what to do next]."
```

Must mention:
- Current DSCR value
- Which loan programs qualify at this level
- Tier meaning in lender context
- If DSCR is borderline (1.00–1.24x), mention that stressed DSCR (+1% / +2% rate) may fall below minimum — check stress test

### 8. KEY DERIVED METRICS

Three metric cards in the right column — all DSCR-focused, all stress-aware:

**Metric 1: Stressed DSCR (+1%)**
- Formula: recalculate DSCR with interest rate increased by 1 percentage point
- Format: coefficient with x suffix (e.g., `1.12x`)
- Thresholds:
  - ≥ 1.25x = still strong after stress
  - 1.10–1.24x = moderate stress resilience
  - < 1.10x = high stress risk
- Hover hint: "DSCR if rates rise 1%. Lenders stress-test deals to assess resilience."

**Metric 2: Mode-aware secondary metric**

This metric changes based on active mode — it is NOT a single formula reused across modes.

**For Property DSCR family (`property`, `find-loan`, `find-noi`):**
- Label: "Max Loan Amount at 1.25x DSCR"
- Formula: reverse-solve for loan amount at DSCR = 1.25x given current NOI and rate/term
- Format: currency
- No threshold tiers — informational
- Hover hint: "Largest loan this NOI could support at the common 1.25x lender benchmark."

**For DSCR Loan mode (`dscr-loan`):**
- Label: "Rent Cushion"
- Formula: Monthly Rent − Monthly PITIA
- Format: currency (monthly)
- Thresholds:
  - ≥ $700/mo = strong cushion (typical DSCR 1.25x+ on $2800 PITIA)
  - $300–699/mo = moderate cushion
  - $0–299/mo = thin cushion
  - Negative = rent doesn't cover PITIA (automatic fail)
- Hover hint: "Monthly dollar cushion between rent and total PITIA. Direct indicator of DSCR Loan viability."

**Why this differs by mode:**
- In Property DSCR family, "Max Loan Amount" is meaningful because NOI is the reverse-solve variable
- In DSCR Loan mode, "Max Loan" would require a completely different reverse calculation that doesn't map to how DSCR loans are underwritten (they're rent-vs-PITIA, not NOI-vs-debt-service)
- Rent Cushion gives the DSCR Loan user an equally actionable dollar-value metric

Do NOT show "Max Loan Amount" card in DSCR Loan mode. Do NOT show "Rent Cushion" card in Property modes. The Metric 2 slot must swap its formula and label based on active mode.

**Metric 3: Stressed DSCR (+2%)**
- Formula: recalculate DSCR with interest rate increased by 2 percentage points
- Format: coefficient with x suffix
- Thresholds:
  - ≥ 1.15x = resilient to major rate shock
  - 1.00–1.14x = borderline at elevated rates
  - < 1.00x = fails stress at elevated rates
- Hover hint: "DSCR if rates rise 2%. Extreme stress test used by conservative underwriters."

**Why Break-even Occupancy is NOT a derived metric for DSCR:**
Break-even Occupancy is a simplified heuristic that doesn't account for operating expenses and can give false precision. For DSCR calculators, stress testing at multiple rate levels is far more actionable and mirrors real lender practice. Do not include Break-even Occupancy as a primary derived metric.

### 9. SENSITIVITY ANALYSIS

**IMPORTANT:** This section is SEPARATE from the core stress metrics in Section 8. Section 8 shows +1% and +2% stress as primary visible cards. Section 9 is an expanded table for investors who want the full rate sensitivity view.

```
Primary variable being sensitized:   Interest Rate
Range of variation:                   −1.0% to +3.0% in steps of 0.5%
                                      (asymmetric — lenders stress UPWARD, 
                                      but investors also want to see rate-drop scenarios
                                      for refinance planning)
What stays constant:                  NOI, loan amount, loan term
Columns:                              Interest Rate, Monthly Payment, 
                                      Annual Debt Service, DSCR, Tier
Number of rows:                       9
```

This table is the expanded stress view. The +1% and +2% rows in this table should match exactly the values shown in the Stressed DSCR cards from Section 8 — use them as a consistency cross-check.

**Secondary sensitivity table** — DSCR at different loan amounts:
```
Rows:     80%, 75%, 70%, 65%, 60%, 55% LTV
Columns:  LTV %, Loan Amount, Monthly Payment, DSCR
```

### 10. SCENARIO ANALYSIS

```
Conservative (lender-style stress):
  NOI × 0.90 (10% income haircut)
  Interest Rate + 1.0%
  
Base:
  (user inputs)

Optimistic:
  NOI × 1.05 (modest rent growth)
  Interest Rate − 0.5%
```

Note: DSCR scenarios favor conservative stress because that's how underwriters evaluate deals. The "optimistic" case is less relevant — lenders don't approve loans based on optimistic scenarios.

### 11. VISUALIZATION BREAKDOWN

For Property DSCR mode, stacked bar showing how NOI is allocated:

```
Segment 1: Debt Service          (blue)    — Annual Debt Service / NOI × 100%
Segment 2: DSCR Cushion          (green)   — (NOI − Debt Service) / NOI × 100%

Total = 100% of NOI
```

Overflow state: when Annual Debt Service > NOI → Debt Service segment extends beyond 100%, Cushion segment is replaced with red "Shortfall" segment showing how much NOI falls short.

For DSCR Loan mode, different breakdown:
```
Segment 1: P&I payment
Segment 2: Taxes
Segment 3: Insurance
Segment 4: HOA/Association
Segment 5: Rent Cushion (rent minus PITIA)

Total = 100% of Monthly Rent
```

### 12. WARNINGS & VALIDATION

List 7–9 warnings:

- Missing critical inputs (NOI, rent, loan amount, interest rate)
- DSCR < 1.00 (error — loan likely denied)
- DSCR 1.00–1.14 (warning — marginal, limited lender options)
- DSCR 1.15–1.24 (notice — below Fannie/Freddie 1.25x conventional minimum; may still meet MAH or DSCR loan thresholds)
- Stressed DSCR (+1%) < 1.00 (warning — fails stress test even if current passes)
- Monthly rent lower than PITIA (error in DSCR Loan mode — automatic fail)
- Interest rate outside 2026 realistic range (e.g., <5% or >12% for investment property)
- Vacancy > 15% (warning — lender may apply additional vacancy haircut)
- Loan term outside 10–40 years (validation warning)
- LTV > 80% (warning — unusual for investment property, check loan product)

### 13. LENDER EXECUTION CONTEXT

DSCR calculators are specifically used to prepare for loan applications. Include a **Lender Context panel** that maps DSCR ranges to common loan program thresholds.

**Important wording note:** Loan approval depends on many factors beyond DSCR — sponsor quality, reserves, occupancy history, property condition, LTV, minimum loan size, market, etc. The Lender Context panel must use careful language:
- DO NOT say "Qualifies for [program]" — this implies guaranteed approval
- DO say "Meets typical DSCR threshold for [program]" — this is factually accurate

```
Your DSCR: X.XXx

Meets typical DSCR minimum for:
  ✓ Fannie Mae Conventional Multifamily (1.25x minimum)     [if ≥ 1.25]
  ✓ Freddie Mac Small Balance (1.25x minimum)               [if ≥ 1.25]
  ✓ Fannie Mae MAH Affordable (1.15x minimum)               [if ≥ 1.15]
  ✓ DSCR Loan — Conservative (1.20x minimum)                [if ≥ 1.20]
  ✓ DSCR Loan — Standard (1.10x minimum)                    [if ≥ 1.10]
  ✓ DSCR Loan — Aggressive (1.00x minimum)                  [if ≥ 1.00]

Stressed DSCR (+1% rate): X.XXx
[Show which programs would still meet threshold after stress]

Note: Meeting the DSCR threshold is necessary but not sufficient for approval. 
Final approval also depends on LTV, reserves, property condition, sponsor 
experience, and loan-specific underwriting requirements.
```

### 14. BENCHMARKS BY PROPERTY TYPE (2026)

Realistic 2026 DSCR benchmarks at standard 75% LTV, 7.5% rate, 30-year term:

| Property Type              | Tight (Coastal) | Standard (Sunbelt) | Strong (Midwest/SE) |
|----------------------------|-----------------|--------------------|---------------------|
| Single-Family Rental       | 1.00–1.15x      | 1.15–1.25x         | 1.25–1.40x          |
| Small Multifamily (2–4)    | 1.05–1.20x      | 1.20–1.30x         | 1.30–1.45x          |
| Multifamily 5+             | 1.15–1.25x      | 1.25–1.35x         | 1.35–1.50x          |
| Retail / Strip Center      | 1.20–1.30x      | 1.30–1.45x         | 1.45–1.60x          |
| Industrial / Warehouse     | 1.25–1.40x      | 1.40–1.60x         | 1.50–1.75x          |
| Office                     | 1.15–1.25x      | 1.25–1.40x         | 1.40–1.55x          |

**Label these as:** "Typical 2026 DSCR outcomes based on standard underwriting assumptions (75% LTV, 7.5% rate, 30-year). Individual deals vary significantly based on NOI quality, location, and borrower."

### 15. BENCHMARKS BY STATE (8 states)

**Important disclaimer:** DSCR is not published as a market statistic (unlike cap rates or rent growth). State-level DSCR ranges are **underwriting estimates based on typical 2026 rate environment, standard LTV (75%), and state-specific cost factors** (property tax burden, insurance, rent levels, purchase prices). Label them explicitly as: *"Underwriting estimate — not a market-reported DSCR statistic. Actual DSCR varies significantly by deal."*

For California, Texas, Florida, New York, Arizona, Georgia, Colorado, Washington:

```
State: [name]
Typical DSCR range: [range at 75% LTV, 7.5% rate]
Key cities: [top 3 metros]
Notes: [how tax climate, insurance, rent levels, and purchase prices produce this DSCR range]
```

Key factors per state:
- California: high prices + low cap rates → tight DSCR
- Texas: rate environment + new supply → DSCR pressure
- Florida: insurance costs → significant DSCR drag
- New York: rent regulation + high taxes → DSCR tightness
- Arizona, Georgia, Colorado, Washington: varying by metro — provide honest ranges

After the table, include a sources note: *"Sources: Underwriting estimates derived from 2026 rate environment, standard LTV assumptions, and state-level property tax and insurance data from Tax Foundation and state insurance databases. DSCR itself is not publicly reported at the state level — these are calculated benchmarks for reference only."*

### 16. ASSET CLASS CONTEXT

For dropdown (SFR, Small MF, Large MF, Commercial, Industrial):
```
Asset class: [name]
Typical DSCR range: [at standard underwriting]
Note: [2 sentences about DSCR dynamics for this class — e.g., why industrial tends to show higher DSCR, why office is under pressure in 2026]
```

### 17. TEST CASES

**TOLERANCE RULE:** All expected outputs allow tolerance of **±0.02x for DSCR ratio** and **±$50 for dollar amounts**. This accounts for floating-point differences between JavaScript, Python, and Claude implementations. Do NOT require exact precision.

Write **6 test cases**:

**Test 1: Property DSCR — standard calculation**
- NOI $60,000, Loan $500,000, Rate 7.5%, Term 30 years
- Expected DSCR with tolerance ±0.02x

**Test 2: DSCR Loan DSCR — rent vs PITIA**
- Monthly Rent $3,500, Monthly PITIA $2,800
- Expected DSCR = 1.25x (exactly at the common 1.25x lender benchmark, tolerance ±0.02x)
- Note: do NOT call this "Fannie minimum" — Fannie/Freddie 1.25x standard applies to Property DSCR / agency multifamily, not non-QM DSCR Loans. Keep the framing product-neutral.

**Test 3: Find Max Loan Amount** (reverse mode)
- NOI $80,000, target DSCR 1.25x, Rate 7.5%, Term 30 years
- Expected max loan amount with tolerance ±$50

**Test 4: Find Required NOI** (reverse mode)
- Loan $750,000, Rate 7.75%, Term 30, target DSCR 1.25x
- Expected required NOI with tolerance ±$50

**Test 5: Stress test boundary**
- Current DSCR 1.20x at 7.5% rate
- Stressed DSCR (+1%) must be calculated and should show reduction
- Verify tier shifts from "Moderate" to either "Marginal" or "Fail"

**Test 6: Fail scenario**
- NOI $30,000, Loan $500,000, Rate 8%, Term 30
- Expected DSCR < 1.00x (Fail tier)
- Verify warning messages fire

Each test must have exact inputs, exact expected outputs (within tolerance), and rationale.

### 18. URL PARAMETERS

Short param names (≤3 chars where possible):
- dscrMode → md (values: 'p' for property, 'd' for dscr-loan, 'fl' for find-loan, 'fn' for find-noi)
- grossRentalIncome → gri
- vacancyRate → vr
- otherIncome → oi
- operatingExpenses → oe
- monthlyRent → mr
- monthlyPropertyTax → pt
- monthlyInsurance → ins
- monthlyHOA → hoa
- monthlyAssociation → ass
- loanAmount → la
- purchasePrice → pp
- downPaymentPct → dp
- interestRate → ir
- loanTermYears → lt
- targetDSCR → td

### 19. EDGE CASES

```
All fields empty:                  result = —
Missing NOI inputs (property mode): disable result, show "Enter income data"
Missing PITIA components (loan mode): show partial result with missing fields flagged
Missing loan inputs:                disable result, show "Enter financing terms"
Zero NOI:                          DSCR = 0.00x (Fail tier), explicit warning
Zero rent (DSCR Loan mode):        DSCR = 0.00x (Fail tier)
Zero debt service (loan = 0):      DSCR mathematically = ∞. Display as "N/A (all-cash purchase)" — 
                                   never show the literal `Infinity` character or raw value. 
                                   Suggest: "For all-cash deals, use Cap Rate Calculator for unlevered analysis."
Negative NOI:                      DSCR = negative (Fail tier), warning about 
                                   operating losses
100% LTV:                          Allow (unusual for investment property), warn about 
                                   loan product availability
Interest rate = 0:                 Allow (owner carry, seller finance), note that DSCR 
                                   is unusually high
Extreme values (1e9+):             Scientific format
Loan term outside 10–40 years:     Validation warning (non-standard)
```

---

## OUTPUT CHECKLIST

Before finalizing, verify:

- [ ] All 19 sections present in correct order
- [ ] DSCR clearly distinguished from Cap Rate, NOI, and Cash-on-Cash throughout
- [ ] Format is always `X.XXx` (e.g., `1.25x`), never percentage or bare number
- [ ] Two distinct formulas specified: Property DSCR (NOI/Debt Service) and DSCR Loan (Rent/PITIA)
- [ ] PITIA correctly defined as Principal + Interest + Taxes + Insurance + HOA/Association
- [ ] **P&I is ALWAYS auto-calculated from loan inputs — no manual override field**
- [ ] Industry-standard thresholds used: 1.50 / 1.25 / 1.15 / 1.00 (not invented alternatives)
- [ ] Tier colors and labels match (Excellent / Strong / Moderate / Marginal / Fail)
- [ ] **Derived metrics are: Stressed DSCR (+1%), Metric 2 (mode-aware), Stressed DSCR (+2%) — no Break-even Occupancy**
- [ ] **Metric 2 is MODE-AWARE: "Max Loan Amount at 1.25x" in Property modes, "Rent Cushion" in DSCR Loan mode**
- [ ] **Core stress metrics (+1%, +2%) in Section 8 and expanded sensitivity table (−1% to +3%) in Section 9 are clearly separated and don't duplicate each other's UI**
- [ ] **Reverse modes (find-loan, find-noi) work ONLY in Property DSCR mode, disabled for DSCR Loan**
- [ ] **Mode architecture: 4 top-level tabs in single row, colors signal family (amber for Property + its reverses, teal for DSCR Loan)**
- [ ] **Find Required NOI mode takes targetDSCR as input, NOT targetNOI (NOI is the output)**
- [ ] Lender Execution Context panel lists specific loan programs by DSCR threshold
- [ ] **Lender panel uses "Meets typical DSCR threshold for" wording, NOT "Qualifies for"**
- [ ] **Lender panel includes disclaimer that DSCR is necessary but not sufficient for approval**
- [ ] 2026 rate environment (~7.5%) reflected in benchmarks
- [ ] **State benchmarks labeled explicitly as "Underwriting estimate — not a market-reported DSCR statistic"**
- [ ] 6 test cases with ±0.02x / ±$50 tolerance
- [ ] **Test 2 (DSCR Loan 1.25x) does NOT reference "Fannie minimum" — uses neutral "common 1.25x lender benchmark"**
- [ ] Edge cases cover zero NOI, zero rent, all-cash, 100% LTV
- [ ] **All-cash edge case displays "N/A (all-cash purchase)" — never raw `Infinity`**
- [ ] Mortgage formula is standard amortization (not simple interest)
- [ ] Reverse modes fully specified with formulas, scoped to Property DSCR only
- [ ] URL params short (1–3 chars), distinct between two DSCR formulas' fields
- [ ] DSCR mode toggle properly exposes different field sets (property vs dscr-loan)
- [ ] Warnings cover marginal DSCR, stressed DSCR failure, and monthly rent < PITIA

**Output only the RIS specification. Do not output code. Do not output HTML. Do not output Vue. This is a spec document that will be consumed by the Master Prompt later.**
