# RIS Prompt — Rental Property Calculator (v3)

You are a senior real estate financial analyst and calculator designer. Your job is to produce a **complete RIS specification** for a new real estate investment calculator.

The output of this prompt becomes the single source of truth for calculator logic — formulas, fields, thresholds, badges, scenarios. It will later be combined with a SEO Package and a Master Prompt to generate the actual Vue page.

---

## YOUR TASK

Write a RIS specification for:

```
Calculator Name:   Rental Property Calculator
Category:          Real Estate Investment / Full Deal Analysis
Primary keyword:   rental property calculator
Target audience:   US real estate investors analyzing buy-and-hold rental deals — 
                   from first-time landlords to experienced multi-property investors
Traffic priority:  #1 (highest volume, 90K–120K searches/month)
```

---

## CRITICAL DISTINCTIONS TO PRESERVE

This is the **central "deal analyzer"** of the RealCalc platform. It differs from every other calculator in one key way:

**This is a MULTI-YEAR projection calculator, not a single-year snapshot.**

- **Cap Rate Calculator** = single-year unlevered yield
- **NOI Calculator** = single-year operating income
- **Cash-on-Cash Calculator** = single-year levered return (Year 1 by default)
- **DSCR Calculator** = single-year lender ratio
- **Rental Property Calculator** = multi-year hold analysis with appreciation, rent growth, principal paydown, and exit

Every input represents Year 1. The calculator then projects forward using growth assumptions to produce total return over the hold period.

### Critical rules

1. **Primary metric is Total Return %** (over hold period), not Cap Rate, not CoC, not IRR.
   - Displayed as: "Total Return: +89.4% ($385,000 over 10 years)"
   - This is the single number that goes in the big hero block
   - Must include both percentage and absolute dollar amount

2. **IRR is a derived metric, shown alongside** — for professional users.
   - IRR requires numerical solver (Newton-Raphson iteration, 50 iterations max)
   - If IRR cannot converge (e.g., all-negative cash flows), display as "N/A"

3. **Multi-year projection is the core feature.**
   - Each year has its own cash flow calculation
   - Rent grows at specified rate, expenses grow at specified rate (usually different)
   - Principal paydown accumulates each year
   - Equity grows from both paydown and appreciation
   - Must produce year-by-year breakdown table

4. **Year 1 inputs, not pro forma stabilized.**
   - User enters current rent, current expenses, current rate
   - Calculator projects forward from Year 1
   - Do NOT treat inputs as stabilized assumptions

5. **Before-tax analysis in v1.**
   - Label prominently: "Before-tax analysis. Actual returns vary based on tax treatment."
   - Do NOT attempt to calculate after-tax returns in v1 — too state-dependent and bracket-dependent
   - Can offer optional "Advanced Tax Mode" toggle that estimates tax shield, but keep hidden by default

6. **Exit uses Exit Cap Rate, not appreciation alone.**
   - Sale price at exit = Year N NOI ÷ Exit Cap Rate
   - This is professional practice — appreciation % is used for mid-years, exit cap for terminal
   - If user prefers simple appreciation, offer toggle between "Exit via Cap Rate" and "Exit via Appreciation"

7. **Pair with all other calculators.**
   - Show CoC, DSCR, Cap Rate as Year 1 derived metrics
   - Link to specialized calculators in Related Calculators section
   - Do NOT duplicate specialized calculator logic here — refer users out for deeper analysis

### 2026 rate environment context

With investment property rates ~7.5–8% in 2026, multi-year rental analysis looks very different from pre-2022:

- Total Return over 10 years typically 60–100% (vs 100–180% in 2015–2020)
- IRR typically 8–13% (vs 12–18% in 2015–2020)
- Cash flow thin in Year 1, improves as rent grows while debt service stays flat
- Appreciation assumption should reflect 2026 reality (2.5–4% annually, not 5%+ historical)

---

## RULES

1. **Accuracy is non-negotiable.** Every formula verifiable against BiggerPockets, Investopedia, Roofstock, CCIM methodology.

2. **US market only.** All benchmarks, examples, and assumptions reflect 2026 US market.

3. **Multi-year correctness.** Year-by-year projections must compound correctly:
   - Year N rent = Year 1 rent × (1 + rentGrowth)^(N-1)
   - Year N expenses = Year 1 expenses × (1 + expenseGrowth)^(N-1)
   - Annual debt service stays FLAT (fixed-rate assumption)
   - Remaining loan balance decreases via amortization schedule

4. **Tolerance rule.** Multi-year calculations with compounding and IRR solving produce floating-point variance. Test cases must allow:
   - **±0.5% for Total Return percentage**
   - **±0.5% for IRR**
   - **±$100 for dollar values over hold period** (cumulative cash flow, equity, sale proceeds)
   - **±$50 for single-year dollar values**

5. **Benchmark integrity.** Label any estimated ranges as "underwriting estimates based on 2026 rate environment" — not market-reported.

6. **Follow exact structure below.** 19 sections, same order as all other RIS specs.

---

## REQUIRED OUTPUT STRUCTURE

### 1. METRIC DEFINITION

- **Primary metric:** Total Return %, plus Total Return $, over specified hold period
- **What it measures:** 2–3 sentence definition emphasizing MULTI-YEAR view with all 4 return sources: cash flow, principal paydown, appreciation, and reinvested gains.
- **Why investors use it:** 2–3 sentences — Total Return is the "bottom line" answer to "how much money will I make on this deal?" All other metrics are components of or inputs to Total Return.
- **Time dimension:** **Multi-year projection. Default hold period is 10 years. User can select 5, 7, 10, 15, 20, or 30 years.** Inputs represent Year 1 values — calculator projects forward.
- **Related metrics included AS DERIVED (not primary):**
  - IRR (shown as secondary derived)
  - Year 1 Cash-on-Cash (derived card)
  - Year 1 DSCR (derived card)
  - Year 1 Cap Rate (derived card)
  - Equity at Exit
  - Principal Paydown total
  - Appreciation total
- **What it explicitly EXCLUDES in v1:**
  - After-tax returns (before-tax only — label clearly)
  - Depreciation recapture
  - 1031 exchange benefits
  - Opportunity cost
  - Inflation adjustment (unless user enables real-return mode)

### 2. FORMULA

**Primary Total Return formula (explicit, unambiguous):**
```
STEP 1 — Calculate Total Profit:
  Total Profit = Cumulative Cash Flow + Net Sale Proceeds − Total Cash Invested

  Where:
    Cumulative Cash Flow = Σ (NOI_year − Annual Debt Service) for years 1 to N
    Net Sale Proceeds = Sale Price − Remaining Loan Balance − Sale Costs
    Total Cash Invested = Down Payment + Closing Costs + Initial Rehab + Reserves

STEP 2 — Convert to percentage:
  Total Return % = (Total Profit ÷ Total Cash Invested) × 100

CRITICAL: Do NOT subtract Total Cash Invested twice. Total Profit already nets it out
once. Some implementations mistakenly write:
  WRONG: Total Gain = Cumulative CF + Net Sale Proceeds − Total Cash Invested
         Return % = (Total Gain − Total Cash Invested) / Total Cash Invested × 100
This double-counts the investment. Use the STEP 1 + STEP 2 formulation above.

Example sanity check:
  Total Cash Invested = $100,000
  Cumulative CF over 10 years = $50,000
  Net Sale Proceeds = $200,000
  Total Profit = $50,000 + $200,000 − $100,000 = $150,000
  Total Return % = $150,000 ÷ $100,000 × 100 = 150%
```

**Exit assumption (single source of truth):**
```
Sale Price at Exit = Year N NOI ÷ Exit Cap Rate

The Sale Price automatically reflects growth because Year N NOI > Year 1 NOI 
(via rent growth minus expense growth).

DO NOT also apply a separate appreciationRate compounding on top of this.
That would be double-counting the value growth.

User-facing option (recommended):
  Toggle: "Exit method"
    - Option A: Exit via Cap Rate (professional default)
    - Option B: Exit via Appreciation % (user-friendly alternative)
  
  If user selects Option A: use Exit Cap Rate formula above. 
                            rent growth still applies to annual NOI;
                            appreciationRate input is hidden/not used.
  
  If user selects Option B: Sale Price = Purchase Price × (1 + appreciationRate)^N
                            Exit Cap Rate input is hidden/not used.

Default: Option A (Exit via Cap Rate).
```

**Year N NOI formula (for multi-year projection):**
```
Year N NOI = EGI_N − Operating Expenses_N

Where:
  Gross Rent_N       = Year 1 Rent × (1 + rentGrowth)^(N-1)
  Vacancy Loss_N     = Gross Rent_N × vacancyRate
  Other Income_N     = Year 1 Other Income × (1 + rentGrowth)^(N-1)
  EGI_N              = Gross Rent_N − Vacancy Loss_N + Other Income_N
  Operating Exp_N    = Year 1 Operating Expenses × (1 + expenseGrowth)^(N-1)
```

**Financing assumptions (explicit):**
```
- Fixed-rate loan (no ARM, no floating rates)
- No refinance during hold period (single loan from Year 1 to exit)
- Standard amortization (no interest-only, no balloon)
- Annual Debt Service = constant for all years 1 to N

If the user wants to model refinance or ARM behavior, they should use
BRRRR Refinance Calculator or a dedicated refi tool.
```

**Amortization formula (required — handle r=0 as special case):**
```
Let:
  P = loan amount (Purchase Price × (1 − downPaymentPct))
  annualRate = interestRate (as decimal, e.g., 0.075 for 7.5%)
  r = annualRate / 12 (monthly interest rate)
  n = loanTermYears × 12 (total number of monthly payments)

Monthly Payment:
  IF r > 0:
    Monthly Payment = P × [r × (1+r)^n] / [(1+r)^n − 1]
  ELSE (r = 0, owner carry / 0% seller finance):
    Monthly Payment = P / n     (linear repayment — equal principal each month, no interest)

Annual Debt Service = Monthly Payment × 12

Remaining Loan Balance at end of Month M:
  IF r > 0:
    Balance(M) = P × [(1+r)^n − (1+r)^M] / [(1+r)^n − 1]
  ELSE (r = 0):
    Balance(M) = P × (1 − M/n)
  Where M = N × 12 at exit year N

CRITICAL: Do NOT use the r>0 formula when r=0 — it divides by zero because 
(1+0)^n − 1 = 0. The Vue implementation must branch explicitly. Without this 
branch, the calculator crashes on owner-carry / 0% seller-finance scenarios.
```

**IRR formula (derived metric) with mandatory fallback:**
```
IRR = interest rate at which NPV of all cash flows = 0

Cash flow series (for IRR solver):
  Year 0: -Total Cash Invested
  Year 1: Year 1 Cash Flow
  Year 2: Year 2 Cash Flow
  ...
  Year N: Year N Cash Flow + Net Sale Proceeds

Solver logic (tiered fallback — CRITICAL):
  1. Try Newton-Raphson iteration (max 50 iterations, initial guess 10%)
  2. If Newton-Raphson fails or oscillates → fall back to bisection method
     - Bounds: [-0.99, 10.0] (i.e., -99% to 1000%)
     - Tolerance: 0.0001 (0.01%)
     - Max 100 iterations
  3. If bisection also fails → display "N/A" and log reason
  
  Must never throw an uncaught error or hang indefinitely.
  The Vue implementation must wrap IRR in a try/catch and default to "N/A".
```

**Remaining Loan Balance at Year N** (for equity calculation and exit):
```
Use the amortization Remaining Balance formula documented in the 
"Amortization formula" block above — including the r=0 special case branch.
Where M = N × 12 (months elapsed at exit year N).

DO NOT re-define the formula here. Single source of truth avoids version drift 
and ensures the r=0 branch applies consistently across all loan balance calculations 
(exit balance, interim equity, multi-year table).
```

**Reverse modes:**

**Mode 2: Find Required Rent**
Given target Total Return % and all other inputs, solve for Year 1 monthly rent.

Solver logic:
```
- Method: binary search over rent range
- Bounds: [0, 10× current market rent estimate]
- Tolerance: $1/month
- Max 100 iterations
- Handles monotonic relationship (higher rent → higher return)

Edge case handling:
- If target Total Return is unachievable (e.g., 500% over 10 years with current financing):
  → return null result
  → display: "Target return not achievable with current assumptions. 
              Try longer hold period, lower target, or different financing."
  → do NOT output an astronomical rent value
```

**Mode 3: Find Max Purchase Price**
Given target Total Return %, rent, expenses, and financing inputs, solve for maximum price.

Solver logic:
```
- Method: binary search over price range
- Bounds: [$10,000, 3× initial user estimate OR $10,000,000 if no estimate]
- Tolerance: $500 (price precision)
- Max 100 iterations

CRITICAL — price interdependencies:
At each price iteration, recalculate:
  - Loan amount = price × (1 − downPaymentPct)
  - Closing costs = price × closingCostsPct
  - Total cash invested = (price × downPaymentPct) + closing + rehab + reserves
  - Debt service (based on new loan amount)
  - Sale price at exit (via Year N NOI / exit cap — NOI doesn't change, only price does)
  - Net sale proceeds (based on new remaining loan balance)

This is a NON-LINEAR system. A naive algebraic solve will be wrong.
Binary search is required.

Edge case handling:
- If target not achievable at any price in bounds:
  → return null result
  → display: "Target return not achievable. NOI too low relative to financing cost."
```

### 3. INPUT FIELDS

Group by logical section:

**Property section:**
- purchasePrice (required)
- propertyType (select: SFR / Small MF 2-4 / Large MF 5+ / Condo / Commercial)
- propertyAddress (optional — for share URL context)

**Income section (Year 1):**
- annualRent OR monthlyRent (one input, converts to annual internally)
- otherIncome (optional — parking, laundry, late fees)
- vacancyRate (required, default null, placeholder "e.g. 7")

**Operating Expenses section (Year 1):**
- expenseMode toggle (Simple / Detailed)
- totalExpensesSimple (when simple mode)
- expenses.propertyTax, .insurance, .management, .maintenance, .utilities, .hoa, .capex, .other (when detailed mode)

**Growth Assumptions section:**
- rentGrowthRate (required, default 2.5%, range 0-10%)
- expenseGrowthRate (required, default 3.0%, range 0-10%)
- Helper text: "Typical 2026 assumptions: rent 2-4%, expenses 2.5-3.5%"

**Financing section:**
- downPaymentPct (required, default 25%)
- interestRate (required)
- loanTermYears (default 30, options 15/20/25/30)
- closingCostsPct (required, default 3%)

**Cash Invested section:**
- initialRehab (optional, default 0)
- cashReserves (optional, default 0)

**Hold Period section:**
- holdPeriodYears (required, default 10, options 5/7/10/15/20/30)
- **exitMethod** (toggle: 'cap-rate' | 'appreciation', default 'cap-rate')
  - Helper text: "Professional investors use exit cap rate. Appreciation % is simpler but less accurate."
- exitCapRate (required ONLY if exitMethod === 'cap-rate', default null, placeholder "e.g. 6.5")
  - Helper text: "Typical exit cap 0.5-1% higher than purchase cap rate"
- appreciationRate (required ONLY if exitMethod === 'appreciation', default 3.0%, range 0-10%)
  - Helper text: "Historical US average ~3%. Do not exceed 5% for realistic modeling."
- saleCostsPct (required, default 6% — broker commission + closing)

**IMPORTANT:** appreciationRate and exitCapRate are MUTUALLY EXCLUSIVE — only one is active at a time based on the exitMethod toggle. The inactive field is hidden or disabled. This avoids double-counting appreciation.

**Reverse mode targets:**
- targetTotalReturn % (for find-rent, find-price modes)

Full field schema per field (as in previous RIS prompts).

### 4. CALCULATION MODES

Three modes (matching Cap Rate / NOI / CoC pattern for consistency):

```
Mode key:       'analyze'        — Analyze Rental Property (standard, primary mode)
Mode key:       'find-rent'      — Find Required Rent (given target Total Return)
Mode key:       'find-price'     — Find Max Purchase Price (given target Total Return)
```

Color families:
- analyze → amber (Standard)
- find-rent → blue (Reverse #1)
- find-price → emerald (Reverse #2)

### 5. PRIMARY RESULT

- **Display format:** percentage with + or − sign, plus dollar amount below
- **Example display:**
  ```
  Total Return
  +89.4%
  $385,000 over 10 years
  ```
- **Decimals:** 1 for percentage, 0 for dollars (no cents)
- **Font size behavior:** shrinks for extreme values (>999% or <−99%)
- **Primary color:** dynamic based on badge tier

### 6. BADGE / TIER SYSTEM

Total Return tiers calibrated for 2026 rate environment over typical 10-year hold:

```
Tier 1: ≥ 150% — Exceptional
  Label:        Exceptional
  bg1 color:    #059669
  bg2 color:    #047857
  Meaning:      Top-quartile outcome — usually requires value-add, BRRRR, or strong market appreciation.

Tier 2: 100%–149% — Strong
  Label:        Strong
  bg1 color:    #10B981
  bg2 color:    #059669
  Meaning:      Above-average return. Typical for well-located stabilized deals in growing markets.

Tier 3: 60%–99% — Solid
  Label:        Solid
  bg1 color:    #F59E0B
  bg2 color:    #D97706
  Meaning:      Market-average return for 2026 10-year hold with 25% down. Reasonable outcome.

Tier 4: 30%–59% — Weak
  Label:        Weak
  bg1 color:    #F97316
  bg2 color:    #EA580C
  Meaning:      Below-market return. May be acceptable in high-appreciation markets for long-term holders.

Tier 5: 0%–29% — Critical
  Label:        Critical
  bg1 color:    #DC2626
  bg2 color:    #B91C1C
  Meaning:      Barely positive. Opportunity cost likely exceeds actual return. Reconsider.

Tier 6: < 0% — Loss
  Label:        Loss
  bg1 color:    #7F1D1D
  bg2 color:    #991B1B
  Meaning:      Negative total return. Investor loses money over hold period. Do not proceed without major changes.
```

**Important context:** These tiers assume 10-year hold. For shorter holds (5-7 years), reduce expectations — a 60% return over 5 years is strong (~10%/year IRR), while same 60% over 20 years is weak.

**IRR corresponds roughly as:**
- 150%+ over 10 years ≈ IRR >= 15%
- 100-149% over 10 years ≈ IRR 10-15%
- 60-99% over 10 years ≈ IRR 6-10%
- etc.

### 7. INSIGHT TEXT (DEAL CONTEXT)

For each tier, 2–3 sentences following this pattern:

```
"Total Return of [value] over [N] years is in the [tier] range by 2026 US norms. 
[Context about 2026 rate environment and what this means]. Major drivers: [top 1-2 
contributors from cash flow / paydown / appreciation]. [Actionable guidance]."
```

Must mention:
- Total Return value + hold period
- Breakdown of return sources (cash flow vs paydown vs appreciation)
- If IRR is particularly high or low, flag it
- 2026 rate environment context

### 8. KEY DERIVED METRICS

Four metric cards in the right column (one more than usual because this is the flagship calculator):

**Metric 1: IRR (Internal Rate of Return)**
- Formula: tiered Newton-Raphson → bisection → N/A fallback (see Section 2)
- Format: percentage with 1 decimal
- Thresholds (SYNCHRONIZED with Total Return tiers for 10-year hold):
  - ≥ 15% IRR ≈ Exceptional (Total Return 150%+)
  - 10–14.99% IRR ≈ Strong (Total Return 100–149%)
  - 6–9.99% IRR ≈ Solid (Total Return 60–99%)
  - 3–5.99% IRR ≈ Weak (Total Return 30–59%)
  - 0–2.99% IRR ≈ Critical (Total Return 0–29%)
  - < 0% IRR ≈ Loss (negative return)
- These mappings assume 10-year hold. For other hold periods, the IRR-to-Total Return 
  relationship shifts (short holds produce higher IRR for same Total Return, long holds lower).
- Hover hint: "Time-weighted annual return. Accounts for timing of cash flows and exit."

**Metric 2: Year 1 Cash-on-Cash**
- Formula: Year 1 Cash Flow ÷ Total Cash Invested × 100
- Format: percentage with 2 decimals
- Thresholds match Cash-on-Cash Calculator tiers
- Hover hint: "First-year return on invested cash. See Cash-on-Cash Calculator for detail."

**Metric 3: Year 1 DSCR**
- Formula: Year 1 NOI ÷ Annual Debt Service
- Format: coefficient with x suffix (e.g., 1.32x)
- Thresholds match DSCR Calculator tiers (1.25x / 1.15x / 1.00x)
- Hover hint: "Debt service coverage in Year 1. Lender qualification indicator."

**Metric 4: Equity at Exit**
- Formula: Sale Price at Exit − Remaining Loan Balance at Year N
- Format: currency
- Thresholds relative to initial cash invested:
  - ≥ 3× cash invested = exceptional equity growth
  - 2–3× = strong
  - 1.5–2× = solid
  - < 1.5× = weak
- Hover hint: "Equity built by Year [N] from both paydown and appreciation."

### 9. SENSITIVITY ANALYSIS

Multi-variable sensitivity because Total Return has multiple drivers:

**Primary sensitivity table — Hold Period × Appreciation:**
```
Rows:     Hold Period (5, 7, 10, 15, 20, 30 years)
Columns:  Appreciation 2%, 3%, 4% (3 scenarios)
Cell:     Total Return %
```

**Secondary sensitivity — Interest Rate × Rent Growth:**
```
Rows:     Interest Rate (current, +0.5%, +1.0%, +1.5%, +2.0%)
Columns:  Rent Growth 2%, 3%, 4%
Cell:     Total Return %
```

**Tertiary — Exit Cap Rate sensitivity (critical for long-term return):**
```
Rows:     Exit Cap Rate: -1%, -0.5%, current, +0.5%, +1%, +1.5%, +2% from current
Columns:  Sale Price, Net Proceeds, Total Return %
```

### 10. SCENARIO ANALYSIS

Three scenarios with multi-year impact. Multipliers chosen to reflect **realistic bull/bear ranges**, not extreme tail cases:

```
Conservative (realistic downside):
  Rent Growth × 0.6      (e.g., 2.5% → 1.5%)
  Appreciation × 0.5     (e.g., 3% → 1.5%)  [only if Exit via Appreciation mode]
  Expense Growth × 1.3   (e.g., 3% → 3.9%)
  Vacancy × 1.5          (e.g., 7% → 10.5%)
  Exit Cap Rate + 0.75%  (cap expansion in downturn)

Base:
  (user inputs as entered)

Optimistic (realistic upside, NOT hype):
  Rent Growth × 1.15     (e.g., 2.5% → 2.9%)
  Appreciation × 1.15    (only if Exit via Appreciation mode)
  Expense Growth × 0.9   (e.g., 3% → 2.7%)
  Vacancy × 0.75         (e.g., 7% → 5.25%)
  Exit Cap Rate − 0.25%  (modest compression)
```

**Multiplier rationale:** 
- Conservative uses 1.3–1.5× to reflect real recessions (2008-like conditions compound that much)
- Optimistic uses 1.15× because markets rarely sustain major outperformance for a decade — going to 1.3× 
  on all factors produces unrealistic "hype case" that gives users false confidence
- Scenario spread should roughly bracket 90% of realistic outcomes, not extreme 1-in-100 cases

Show Total Return and IRR for each scenario side-by-side in a 3-column table.

### 11. VISUALIZATION BREAKDOWN

**Return Composition Bar** (shows where the gain comes from):

```
Segment 1: Cumulative Cash Flow          (green, lightest)
Segment 2: Principal Paydown Total       (green, medium)
Segment 3: Appreciation Gain             (green, dark)
Segment 4: Down Payment (recovered)      (gray, neutral)

Each segment is % of Total Gain.
This shows whether the deal is cash-flow-driven or appreciation-driven.
```

**Year-by-Year Cash Flow Chart** (line or bar):
```
X-axis: Year 1 to Year N
Y-axis: Annual Cash Flow ($)
Line rises as rent grows and debt service stays flat.
```

### 12. WARNINGS & VALIDATION

- Missing critical inputs (price, rate, rent)
- Year 1 cash flow negative AND Year 5 still negative (warning — long breakeven)
- Year 1 DSCR < 1.00 (warning — may not qualify for loan)
- IRR cannot converge in Newton-Raphson OR bisection (show "N/A")
- Rent growth > expense growth by more than 2pp (optimistic assumption warning)
- Appreciation > 5% (historical max — warning flag, only relevant if user chose "Exit via Appreciation" mode)
- **Exit Cap Rate < 4.5% (aggressive assumption — warning)**
- **Exit Cap Rate < Purchase Cap Rate − 1% (unrealistic compression — warning)**
- **Exit Cap Rate > Purchase Cap Rate + 2% (unusually conservative — note, not error)**
- Hold period = 5 years (minimum supported — note Total Return is noisier for short holds; IRR is more reliable metric)
- Total Return > 500% (sanity check — usually input error)

### 13. MULTI-YEAR PROJECTION TABLE (core feature)

This is a unique section for this calculator — a year-by-year breakdown shown as a table:

```
| Year    | Gross Rent | Vacancy | NOI     | Debt Service | Cash Flow | Principal Paid | Equity Built | Sale Proceeds | Cumulative Return |
| 1       | $24,000    | -$1,680 | $14,220 | -$11,400     | $2,820    | $3,850         | $7,850       | —             | 2.9%              |
| 2       | $24,600    | -$1,722 | $14,585 | -$11,400     | $3,185    | $4,120         | $16,390      | —             | 6.4%              |
| ...     | ...        | ...     | ...     | ...          | ...       | ...            | ...          | —             | ...               |
| 10      | $30,260    | -$2,118 | $17,590 | -$11,400     | $6,190    | $6,850         | $156,500     | —             | 85.2%             |
| 10 Exit | —          | —       | —       | —            | —         | —              | —            | $310,100      | 89.4%             |
```

**Sale Proceeds column rule:**
- For years 1 through (N−1): show "—" (no sale)
- For year N (operating row): show "—" (operating cash flow only, no sale)
- Add a SEPARATE "Year N Exit" row showing ONLY:
  - Sale Proceeds column: Net Sale Proceeds value
  - Cumulative Return column: final Total Return %
  - All other columns: "—"

This visual separation prevents mixing operating cash flow with one-time exit proceeds.

Column definitions:
- **Cash Flow** = NOI − Debt Service (operating only, no sale)
- **Principal Paid** = amortization schedule principal portion for that year
- **Equity Built** = cumulative (Principal Paid to date) + (current property value − purchase price)

  **Current property value for interim year K is calculated via a strict mode branch — NOT both methods:**
  
  IF exitMethod === 'cap-rate':
    property value_K = Year K NOI ÷ interpolated cap rate
    where interpolated cap rate = purchase cap rate + (exit cap rate − purchase cap rate) × (K ÷ N)
    (linear interpolation from purchase cap at Year 0 to exit cap at Year N)
  
  ELSE IF exitMethod === 'appreciation':
    property value_K = Purchase Price × (1 + appreciationRate)^K
  
  **Do NOT mix these two methodologies in the same calculator run.** The interim equity 
  path must be consistent with the exit method the user selected, otherwise the 
  Equity Built column numbers won't reconcile with the final Sale Price.

- **Sale Proceeds** = Net Sale Proceeds, ONLY in Year N Exit row
- **Cumulative Return** = (Sum of Cash Flow to date + current Equity Built) ÷ Total Cash Invested × 100
  For Year N Exit row: final Total Return %

Include row for Exit Year showing Net Sale Proceeds separately — as shown above.

### 14. BENCHMARKS BY PROPERTY TYPE (2026, 10-year hold, 25% down)

```
| Property Type          | Weak Markets   | Standard Markets | Strong Markets |
| Single-Family Rental   | 30–60%         | 60–90%           | 90–130%        |
| Small Multifamily 2–4  | 40–70%         | 70–110%          | 110–150%       |
| Large Multifamily 5+   | 50–80%         | 80–120%          | 120–160%       |
| Condo (rental)         | 20–50%         | 50–80%           | 80–110%        |
| Commercial (small)     | 40–80%         | 80–120%          | 120–180%       |
```

Label as: "Underwriting estimates based on 2026 rate environment, 10-year hold, 25% down, and typical local market assumptions. Individual deals vary significantly."

### 15. BENCHMARKS BY STATE (8 states — 10-year hold residential)

For California, Texas, Florida, New York, Arizona, Georgia, Colorado, Washington:

```
State: [name]
Typical Total Return range (10-year): [range]
IRR equivalent: [range]
Key cities: [top 3]
Primary return driver: [cash flow / appreciation / balanced]
Notes: [2 sentences about what drives returns in this state]
```

Example of driver differentiation:
- California → appreciation-driven
- Texas → balanced
- Georgia → cash-flow-driven
- Florida → balanced with insurance drag

Add explicit label: "Underwriting estimates — not market-reported Total Return statistics."

### 16. ASSET CLASS CONTEXT

For SFR / Small MF / Large MF / Condo / Commercial: typical Total Return range + 2-sentence explanation of return driver mix per asset class.

### 17. TEST CASES

**TOLERANCE RULE:** 
- ±0.5% for Total Return percentage
- ±0.5% for IRR percentage
- ±$100 for multi-year dollar amounts
- ±$50 for single-year dollar amounts

Write **6 test cases**. Each test MUST explicitly specify `exitMethod` and use ONLY the relevant exit assumption. Do NOT mix cap-rate and appreciation in the same test.

**Test 1: Standard 10-year analysis (exitMethod = cap-rate)**
- exitMethod: 'cap-rate'
- Price $400K, 25% down, $2,800/mo rent, 7.5% rate, 30-year, 3% rent growth, 3% expense growth, 10-year hold, exit cap 6.5%
- appreciationRate NOT used (ignored in cap-rate mode)
- Expected Total Return with tolerance ±0.5%
- Expected IRR with tolerance ±0.5%

**Test 2: Find Required Rent (reverse, cap-rate mode)**
- exitMethod: 'cap-rate'
- Given target Total Return 80% over 10 years, price $400K, 25% down, 7.5% rate, 30-year, 3% rent growth, 3% expense growth, exit cap 6.5%
- Expected required monthly rent with tolerance ±$50

**Test 3: Find Max Purchase Price (reverse, cap-rate mode)**
- exitMethod: 'cap-rate'
- Given target Total Return 100% over 10 years, $3,500/mo rent, 25% down, 7.5% rate, 3% growth rates, exit cap 6.5%
- Must account for scaling closing costs AND scaling loan amount via binary search
- Expected max price with tolerance ±$500

**Test 4: Negative return scenario (exitMethod = cap-rate)**
- exitMethod: 'cap-rate'
- Over-leveraged or poor-market deal producing negative Total Return
- Example: Price $500K, 10% down, 8% rate, $2,200/mo rent, 1.5% rent growth, 4% expense growth, 15% vacancy, 10-year hold, exit cap 8%
- Expected tier "Loss" (dark red)
- Expected IRR negative
- IRR solver must return a numeric value (not N/A) for this standard loss case

**Test 5: Multi-year breakdown verification (exitMethod = cap-rate)**
- exitMethod: 'cap-rate'
- Standard inputs, verify Year 5 and Year 10 entries in multi-year table
- Year 5 rent should equal Year 1 rent × 1.03^4
- Cumulative cash flow at Year 10 = sum of Years 1–10 cash flows (within ±$100 tolerance)
- Verify Year N Exit row shows Net Sale Proceeds separately

**Test 6: Appreciation mode comparison**
- exitMethod: 'appreciation'
- Same base deal as Test 1, but with appreciationRate = 3%, exit cap rate NOT used (ignored in appreciation mode)
- Expected Total Return should be COMPARABLE to Test 1 but NOT identical (appreciation method compounds price differently than NOI/cap method)
- This test verifies that (a) appreciation mode works standalone, (b) the two methods produce similar but distinct results, (c) exitCapRate is ignored when xm=app

### 18. URL PARAMETERS

Short param names:
- purchasePrice → pp
- monthlyRent → mr
- annualRent → ar (one or other — use mr as canonical)
- otherIncome → oi
- vacancyRate → vr
- expenseMode → em
- totalExpensesSimple → te
- expenses.propertyTax → ept (and similar for each expense)
- rentGrowthRate → rg
- expenseGrowthRate → eg
- appreciationRate → ap (only used when exitMethod === 'appreciation')
- downPaymentPct → dp
- interestRate → ir
- loanTermYears → lt
- closingCostsPct → cc
- initialRehab → rh
- cashReserves → cr
- holdPeriodYears → hp
- exitMethod → xm  (values: 'cap' for cap-rate, 'app' for appreciation)
- exitCapRate → ec (only used when exitMethod === 'cap-rate')
- saleCostsPct → sc
- targetTotalReturn → tr
- propertyType → pt
- mode → md

**URL param interaction rule:** When `xm=cap` is present in URL, parse `ec` and ignore `ap`. When `xm=app` is present, parse `ap` and ignore `ec`. This matches the exitMethod toggle behavior.

### 19. EDGE CASES

```
All fields empty:                    result = —
Missing critical inputs:             disable result, show hint
Hold period 5 years (shortest supported):  calculate but note "Total Return is noisier for short holds — favor IRR for 5-year deals"
Hold period 30 years:                calculate fully — test for IRR stability
Negative cash flow every year:       Total Return can still be positive if appreciation dominates; show warning
Rent growth > expense growth by 3%+: warning about optimistic assumptions  
Exit cap rate lower than purchase:   warning about unrealistic compression
Purchase price = $0:                 validation error
Interest rate = 0:                   Allow (owner carry, seller finance, family loan). REQUIRED: implementation must 
                                     handle this as a special case of amortization to avoid division-by-zero:
                                     - Standard formula P × [r(1+r)^n] / [(1+r)^n − 1] divides by zero when r=0
                                     - Special case: if r = 0, Monthly Payment = Principal ÷ n (linear repayment)
                                     - Remaining Balance at month M = Principal × (1 − M/n)
                                     Without this branch, the calculator crashes on r=0 input.
All-cash purchase (100% down):       Loan = 0, no debt service. IRR is still calculated from the cash flow series — 
                                     it is NOT approximated by a formula. In all-cash deals, IRR is typically driven 
                                     by cap-rate-level yield plus growth and exit assumptions, but the actual number 
                                     comes from the solver on the real cash flow path (Year 0: −TotalCashInvested, 
                                     Years 1..N: positive cash flows, Year N: +NetSaleProceeds).
IRR does not converge:               display "N/A" after 50 iterations
Very high appreciation (10%+):       warn about historical unrealism but still calculate
Sale price negative (rare):          unusual — likely bad exit cap input — show validation warning
```

---

## OUTPUT CHECKLIST

Before finalizing, verify:

- [ ] All 19 sections present in correct order
- [ ] Multi-year projection correctly specified (rent grows, expenses grow, debt service stays flat)
- [ ] **Total Return % is PRIMARY metric, not Cap Rate / NOI / CoC / IRR**
- [ ] **Total Return formula uses explicit STEP 1 + STEP 2 — no double-subtraction of Total Cash Invested**
- [ ] **Total Profit = Cumulative CF + Net Sale Proceeds − Total Cash Invested (once only)**
- [ ] **Sanity-check example shows $150,000 profit → 150% return on $100K cash invested**
- [ ] **Exit method toggle clearly specified: "Exit via Cap Rate" (default) OR "Exit via Appreciation" — not both simultaneously (avoids double-counting)**
- [ ] **appreciationRate input only used in "Exit via Appreciation" mode, hidden otherwise**
- [ ] **IRR uses tiered fallback: Newton-Raphson → bisection → N/A. Never throws error.**
- [ ] **Find Rent reverse mode returns null + "Not achievable" message if no valid solution**
- [ ] **Find Max Price uses BINARY SEARCH, not algebraic solve (nonlinear system due to scaling costs and loan)**
- [ ] **Find Max Price returns null + message if target unachievable at any price in bounds**
- [ ] **Financing assumptions explicit: fixed-rate, no refinance, no ARM, no balloon**
- [ ] Multi-year breakdown table (Section 13) includes SEPARATE Year N Exit row for Sale Proceeds
- [ ] Multi-year table has Sale Proceeds column — "—" for operating years, value only in exit row
- [ ] **"Before-tax analysis" label required throughout — no after-tax returns in v1**
- [ ] Year 1 inputs explicitly — NOT stabilized
- [ ] 6 tiers: Exceptional / Strong / Solid / Weak / Critical / Loss
- [ ] 4 derived metric cards: IRR, Year 1 CoC, Year 1 DSCR, Equity at Exit
- [ ] **IRR thresholds SYNCHRONIZED with Total Return tiers (15%/10%/6%/3%/0% vs 150%/100%/60%/30%/0%)**
- [ ] 3 sensitivity tables: Hold×Appreciation, Rate×Rent Growth, Exit Cap variation
- [ ] 3 modes: analyze, find-rent, find-price
- [ ] 6 test cases with correct tolerance rules (±0.5% returns, ±$100 multi-year, ±$50 single-year)
- [ ] 2026 rate environment (~7.5%) reflected in benchmarks and examples
- [ ] Benchmarks labeled as "underwriting estimates"
- [ ] State benchmarks include primary return driver (cash flow / appreciation / balanced)
- [ ] Total Return tiers calibrated for 10-year hold (not other hold periods)
- [ ] **Scenarios use REALISTIC multipliers: Conservative 1.3-1.5x, Optimistic 1.15x (not 1.3x — avoids hype case)**
- [ ] **Warning fires if Exit Cap Rate < 4.5% (aggressive assumption)**
- [ ] Warnings cover negative cash flow, optimistic assumptions, IRR convergence failure
- [ ] All mortgage calculations use standard amortization
- [ ] **Amortization formula has EXPLICIT special case for r=0 (Monthly Payment = P/n), not the standard formula**
- [ ] **Remaining Balance at Year N also has r=0 branch (P × (1 − M/n))**
- [ ] URL params short (1–3 chars), include new fields: rg, eg, hp, ec, sc
- [ ] **exitMethod has URL param `xm` (values: 'cap' or 'app')**
- [ ] **URL param interaction rule documented: xm=cap ignores `ap`, xm=app ignores `ec`**
- [ ] **Hold period options = 5/7/10/15/20/30 only — NO edge case for "1 year" (conflicts with UI)**
- [ ] **Edge case row for r=0 requires special-case formula implementation**
- [ ] **All-cash edge case describes IRR as solved from cash flow series, NOT approximated by formula**
- [ ] **Equity Built column uses strict mode branch: cap-rate mode = NOI/interpolated cap; appreciation mode = compounded price. Never mix in one run.**
- [ ] **All 6 test cases explicitly specify exitMethod — no test mixes cap-rate and appreciation assumptions**
- [ ] **Test 6 compares appreciation mode vs cap-rate mode (verifies standalone behavior + ignored input rules)**

**Output only the RIS specification. Do not output code. Do not output HTML. Do not output Vue. This is a spec document that will be consumed by the Master Prompt later.**
