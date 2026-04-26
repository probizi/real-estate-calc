# RIS Prompt — BRRRR Calculator (v3 final)

You are a senior real estate financial analyst and calculator designer. Your job is to produce a **complete RIS specification** for a new real estate investment calculator.

The output of this prompt becomes the single source of truth for calculator logic — formulas, fields, thresholds, badges, scenarios. It will later be combined with a SEO Package and a Master Prompt to generate the actual Vue page.

---

## YOUR TASK

Write a RIS specification for:

```
Calculator Name:   BRRRR Calculator
Category:          Real Estate Investment / Buy-Rehab-Rent-Refinance-Repeat Strategy
Primary keyword:   brrrr calculator
Target audience:   US real estate investors executing BRRRR strategy — from 
                   first-time BRRRR'ers to experienced investors scaling portfolios
Traffic priority:  Priority 1 (estimated 40K-60K searches/month)
```

---

## CRITICAL DISTINCTIONS TO PRESERVE

This is the **most complex calculator** in the RealCalc platform because it spans two distinct project phases:

- **Phase 1 (Flip-like)**: Buy + Rehab + Hold with Hard Money (3-12 months)
- **Phase 2 (Rental)**: Refinance into Conventional + Rent

Every other calculator focuses on ONE of these phases. BRRRR combines both.

### Critical rules

1. **DUAL primary metrics: Capital Left in Deal $ AND Post-Refi Cash-on-Cash %**
   - Capital Left = Total Cash Invested − Refi Proceeds (can be negative = extracted more than invested)
   - Post-Refi CoC = Annual Cash Flow ÷ Capital Left × 100
   - **Special case — Infinite Return**: if Capital Left ≤ $0, display "Infinite Return" badge with explanation. This is the BRRRR holy grail — you recovered all capital AND still own a cash-flowing asset.
   - Format:
     ```
     Capital Left in Deal        Post-Refi Cash-on-Cash
     $8,400                      42% annual return
     
     (Or when Capital Left ≤ $0)
     Capital Left in Deal        Return
     -$3,200                     Infinite Return ⚡
     (Extracted all capital + $3,200 extra)
     ```

2. **Two-phase calculation is the core of BRRRR.**
   - Phase 1: Hard Money project (purchase + rehab + Year 0 holding)
   - Phase 2: Refinance event (one-time, at end of seasoning period)
   - Phase 3: Year 1 rental performance (post-refi cash flow, DSCR, CoC)

3. **Scope is INTENTIONALLY limited in v1.**
   - No multi-year projection beyond Year 1 post-refi
   - Users who want multi-year analysis should use Rental Property Calculator after BRRRR
   - Redirect clearly in Limitations and Related Calculators
   - The calculator focuses on BRRRR-specific question: "how much capital am I leaving in this deal and what is my return on it?"

4. **Refinance mechanics are critical.**
   - New Loan Amount = ARV × refiLTV (default 75%)
   - Refi Proceeds = New Loan − Original HM Loan Payoff − Refi Closing Costs
   - Seasoning period (default 6 months, typical 6-12 months)
   - New Monthly Payment based on refi rate, term, and new loan amount
   - Original HM loan is PAID OFF at refi event (balloon payoff)

5. **75% Rule is the BRRRR-specific heuristic (different from Fix and Flip 70% Rule).**
   - 75% Rule: ARV × 75% ≥ All-In Cost means capital can be fully recovered at 75% LTV refi
   - This is THE key heuristic for successful BRRRR
   - Shown prominently as derived metric
   - Comparison: "Your All-In Cost $ vs 75% Rule Target $ = buffer/shortfall"

6. **Capital Left can be negative (cash-out BRRRR).**
   - If ARV grew beyond expectations or deal was deep-value, refi can extract MORE than invested
   - Display logic: 
     - Positive Capital Left → "X dollars still in deal"
     - Zero Capital Left → "Full capital recovery achieved"
     - Negative Capital Left → "$X extracted beyond initial investment — Infinite Return"
   - Do NOT show negative numbers with minus sign in main display; use "extracted" language

7. **Seasoning period affects timing but not end-state math.**
   - Seasoning = months between purchase and refi eligibility (lender requirement)
   - Typical 6-12 months
   - During seasoning: hard money interest compounds monthly
   - Does NOT affect final Capital Left calculation, only holding costs total

8. **Before-tax analysis only in v1.**
   - BRRRR tax treatment is complex (rental income + potential depreciation + refinance not taxable)
   - V1 shows before-tax cash flow
   - Label prominently: "Before-tax analysis. Actual returns depend on tax treatment."

9. **2026 market context.**
   - Hard money rates 11-13% in 2026 (Phase 1 expensive)
   - Conventional refi rates 7.5-8% in 2026 (Phase 2 expensive too)
   - Cash-out refi at 75% LTV common for BRRRR
   - BRRRR has become harder in 2026: compressed ARVs + elevated rates = smaller refi proceeds
   - Good 2026 BRRRR: Capital Left under $15K, Post-Refi CoC above 15%
   - Infinite Return is rare in 2026 but still achievable with deep-value acquisitions

10. **Do NOT claim guarantees.**
    - Never say "you will recover all capital"
    - Always "projected refi outcome based on your inputs"
    - ARV at refinance can be LOWER than estimated (lender appraisal risk)
    - Always note: "Actual refi proceeds depend on appraisal, lender LTV, and market conditions"

### 2026 rate environment context

With hard money at ~12% and conventional refi at ~7.5% in 2026:
- Phase 1 holding costs are heavier than 2019 (3-5 percentage points higher rates)
- Refi proceeds at 75% LTV are thinner because new loan payment is higher
- Post-refi cash flow is tighter because debt service is higher
- BRRRR investors increasingly accept leaving $10-25K in deals (vs full extraction in 2019)
- Infinite Return deals are rare — happen mostly with off-market deep-value + forced-appreciation rehabs

---

## RULES

1. **Accuracy is non-negotiable.** Every formula verifiable against BiggerPockets, David Greene (BRRRR book), GoBundance, Fannie Mae refi underwriting standards.

2. **US market only.** All benchmarks, examples, and assumptions reflect 2026 US market.

3. **Two-phase correctness.** Phase 1 math (HM, rehab, holding) flows into Phase 2 (refi). Phase 2 math (new loan, cash flow) flows from Phase 1 outputs. Single source of truth for intermediate values.

4. **Tolerance rule.** 
   - ±0.5% for percentages (CoC, ROI, LTV)
   - ±$100 for dollar values (Capital Left, Refi Proceeds, All-In Cost)
   - ±$50 for single-line items (monthly holding, monthly payment)

5. **Benchmark integrity.** Label any estimated ranges as "industry-standard estimates based on 2026 market conditions" — BRRRR outcomes are not publicly reported statistics.

6. **Follow exact structure below.** 19 sections, same order as all other RIS specs.

---

## REQUIRED OUTPUT STRUCTURE

### 1. METRIC DEFINITION

- **Primary metrics (co-primary, both shown prominently):** Capital Left in Deal $ AND Post-Refi Cash-on-Cash %
- **Special flag:** Infinite Return when Capital Left ≤ $0
- **What they measure:** 
  - Capital Left = the dollars still tied up in the deal AFTER refinance (after extracting capital via new loan)
  - Post-Refi CoC = annual cash flow relative to Capital Left (or "Infinite" if Capital Left is zero/negative)
- **Why investors use it:** 
  - Capital Left is THE single number BRRRR investors track — "how much of my money is still locked up?"
  - Post-Refi CoC measures the effectiveness of remaining capital
  - Together they answer the BRRRR question: "did this deal recycle my capital?"
- **Time dimension:** 
  - Phase 1 (Buy+Rehab+Hold): 3-12 months typical
  - Refinance event: at end of seasoning period (6-12 months)
  - Phase 3 (Year 1 rental): 12 months post-refi, for CoC / DSCR calculation
- **Related metrics included as DERIVED:**
  - 75% Rule Target (All-In Cost should be ≤ ARV × 75%)
  - All-In Cost (total investment before refi)
  - Refi Proceeds (new loan minus HM payoff minus refi closing)
  - Capital Recovery % (Refi Proceeds ÷ Total Cash Invested × 100)
  - Post-Refi DSCR (Year 1)
  - Post-Refi Annual Cash Flow
- **What it explicitly EXCLUDES in v1:**
  - Multi-year projection beyond Year 1 (use Rental Property Calculator for that)
  - After-tax returns (before-tax only)
  - Opportunity cost
  - Appreciation growth modeling
  - Multiple refi events (single refi only)

### 2. FORMULA

**Definitions (single source of truth — prevents double-counting):**

**CRITICAL — Phase Separation Rule:**

```
Phase 1 Holding Costs apply ONLY during the seasoning period (months 0 to seasoningMonths).
Phase 3 Rental Operating Expenses apply ONLY during Year 1 post-refinance 
(months seasoningMonths+1 to seasoningMonths+12).

These are SEPARATE time periods and MUST NOT be combined in any formula.

Example conflict to avoid:
  WRONG: "Total Property Tax = Phase 1 Tax + Phase 3 Tax" — double counts same property
  RIGHT: Phase 1 Tax is for seasoning period (e.g. 6 months × $180 = $1,080)
         Phase 3 Tax is for Year 1 rental operation (e.g. 12 months × $180 = $2,160)
         These live in separate line items and apply to separate time periods

Even though the property tax rate is the same (same property), the DOLLAR AMOUNTS 
are calculated from different month counts. Phase 1 uses seasoningMonths; 
Phase 3 uses 12 months.

Implementation note: user enters property tax ONCE (as monthly amount). The calculator 
multiplies by seasoningMonths for Phase 1 and by 12 for Phase 3 automatically. 
But these are separate calculations feeding separate buckets.
```

```
Phase 1 Holding Costs (monthly, during seasoning period before refi):
  = Property Tax + Insurance + Utilities + HOA + Other
    (does NOT include HM loan interest — tracked separately as Loan Costs)

Total Phase 1 Holding Costs:
  = Phase 1 Monthly Holding Costs × seasoningMonths

HM Loan Amount (Phase 1):
  IF hmLoanCoversRehab = true:
    HM Loan Amount = (Purchase Price + Rehab Budget) × hmLoanToCostPct
  IF hmLoanCoversRehab = false:
    HM Loan Amount = Purchase Price × hmLoanToCostPct

HM Loan Points:
  = HM Loan Amount × hmPointsPct

Total HM Interest (interest-only during seasoning):
  = HM Loan Amount × (hmInterestRate / 12) × seasoningMonths

All-In Cost (Phase 1 ONLY — PRE-REFINANCE total project cost):
  = Purchase Price
  + Purchase Closing Costs
  + Rehab Budget
  + Rehab Contingency
  + Total Phase 1 Holding Costs
  + HM Loan Points
  + Total HM Interest

  CRITICAL SCOPE RULE — All-In Cost represents total project cost BEFORE the refinance event.
  
  All-In Cost INCLUDES ONLY Phase 1 items (pre-refinance).
  
  All-In Cost EXCLUDES:
    - Refi Closing Costs (those are Phase 2 transaction costs)
    - New Loan Amount (that's Phase 2 financing, not a cost)
    - Year 1 Rental Operating Expenses (those are Phase 3 post-refi operations)
    - Year 1 New Loan Debt Service (that's Phase 3 ongoing cost, not project cost)
    - Monthly Rent Revenue (that's Phase 3 income, not outflow)
  
  If any of the above items appears in All-In Cost, the calculation is wrong.

Total Cash Invested (actual cash out of investor's pocket — before refi):
  = Down Payment on Purchase (if any)
  + Purchase Closing Costs (from cash)
  + Rehab Budget (only if NOT covered by HM)
  + Rehab Contingency (only if NOT covered by HM)
  + Total Phase 1 Holding Costs (actual cash outflow)
  + HM Loan Points (upfront at closing)
  + Total HM Interest (actual cash paid to lender during hold)

  Where Down Payment in Hard Money:
    Down Payment = Purchase Price × (1 − hmLoanToCostPct)
    (regardless of hmLoanCoversRehab toggle)
```

**Refinance Event Math:**

```
New Loan Amount (Phase 2):
  New Loan Amount = ARV × refiLTVPct
  (default refiLTVPct = 75%, range 65-80% typical in 2026)

Refi Closing Costs:
  IF refiClosingMode = 'pct':
    Refi Closing = New Loan Amount × refiClosingPct
  ELSE:
    Refi Closing = refiClosingDollars (user-entered flat fee)

HM Loan Payoff at Refi:
  = HM Loan Amount (PRINCIPAL ONLY)
  
  CRITICAL: HM Loan Payoff includes ONLY the loan principal (the amount originally 
  borrowed). It does NOT include:
    - HM Interest (already accounted for in All-In Cost and Total Cash Invested)
    - HM Points (already accounted for in All-In Cost and Total Cash Invested)
  
  Interest and points were paid out of pocket during the hold period (or upfront). 
  At the refi event, only the principal balance is paid off using the new loan.
  
  Since HM is interest-only during hold, principal remains at original loan amount.
  Therefore: HM Loan Payoff = HM Loan Amount (exactly, no adjustments).

Refi Proceeds (NET CASH TO INVESTOR at refi event):
  = New Loan Amount − HM Loan Payoff − Refi Closing Costs
  
  This represents the net cash returned TO the investor from the refinance transaction.
  
  Positive value: investor receives cash at closing (capital recovery)
  Zero: investor neither receives nor owes (break-even refi)
  Negative value: investor must BRING cash TO the refi table (refi shortfall)
  
  Flow direction: Refi Proceeds is a CASH INFLOW to the investor (when positive) at 
  the refi event. It reduces the "Capital Left in Deal" calculation. In the Capital 
  Flow Waterfall visualization, it appears as an inflow offsetting the earlier cash 
  outflows (purchase, rehab, holding).

  NOTE: Refi Proceeds CAN BE NEGATIVE if new loan is smaller than HM payoff + refi closing.
  This means investor must bring cash to the refi table — not a true capital-recovery scenario.
  Display: "Refi Shortfall: $X must be paid at refinance"
```

**CRITICAL — Refi Closing Costs placement rule (anti-double-counting):**

```
Refi Closing Costs are NOT included in:
  - All-In Cost (that's Phase 1 only)
  - Total Cash Invested (that's pre-refi investor cash outflows)
  
Refi Closing Costs ARE subtracted ONLY in:
  - Refi Proceeds formula (reduces cash received at refi)
  
Rationale: Refi Closing Costs are a transaction fee at the refi event. They are 
effectively "paid" by being deducted from the new loan proceeds (not out of pocket 
typically — rolled into refi). Including them in Cash Invested would double-count 
them (once reducing Refi Proceeds, once inflating Cash Invested).

This is a common BRRRR calculator bug. Do NOT repeat it.
```

**Capital Left Math (THE key BRRRR metric):**

```
Capital Left in Deal = Total Cash Invested − Refi Proceeds

Interpretation:
  Capital Left > 0:   investor still has $X tied up in the deal
  Capital Left = 0:   full capital recovery (break-even extraction)
  Capital Left < 0:   investor extracted MORE cash than initially invested (cash-out BRRRR)

Capital Recovery %:
  IF Total Cash Invested > 0:
    Capital Recovery % = (Refi Proceeds ÷ Total Cash Invested) × 100
    Note: Can exceed 100% if Refi Proceeds > Total Cash Invested (cash-out BRRRR)
  
  IF Total Cash Invested = 0:
    Capital Recovery % = "N/A" (display flag, not a number)
    Rationale: no cash was invested, so there's no capital to "recover". This edge 
    case occurs only in 100% HM-financed deals where HM covers purchase + rehab + 
    closing + points (theoretically possible but rare). In UI, display "N/A — no 
    cash investment" with explanation tooltip.
```

**Post-Refi Cash Flow Math (Phase 3 — Year 1 as a rental):**

```
Year 1 Rent Revenue:
  = Monthly Rent × 12

Year 1 EGI (Effective Gross Income):
  = Year 1 Rent Revenue × (1 − vacancyRate)
  + Year 1 Other Income (if any)

Year 1 Operating Expenses (rental, not Phase 1 holding):
  = Property Tax + Insurance + Management + Maintenance + CapEx + Utilities + HOA + Other
  (annual amounts for rental operation)

Year 1 NOI:
  = Year 1 EGI − Year 1 Operating Expenses

Annual New Loan Debt Service:
  IF r > 0 (where r = refiRatePct / 12):
    Monthly Payment = New Loan Amount × [r × (1+r)^n] / [(1+r)^n − 1]
    where n = refiLoanTermYears × 12
  ELSE (r = 0):
    Monthly Payment = New Loan Amount / n
  
  Annual Debt Service = Monthly Payment × 12

Year 1 Cash Flow:
  = Year 1 NOI − Annual New Loan Debt Service

Year 1 DSCR:
  = Year 1 NOI ÷ Annual New Loan Debt Service

Post-Refi Cash-on-Cash % (tiered logic — order matters):

  Step 1 — check Capital Left sign:
  
  IF Capital Left > 0:
    Post-Refi CoC = (Year 1 Cash Flow ÷ Capital Left) × 100
    (standard calculation; CoC can be positive or negative depending on cash flow sign)
  
  IF Capital Left ≤ 0:
    Go to Step 2 (special case handling)
  
  Step 2 — Capital Left ≤ 0 sub-cases:
  
  IF Capital Left ≤ 0 AND Year 1 Cash Flow > 0:
    Post-Refi CoC = "Infinite Return" (display flag, not a number)
    Rationale: with zero or negative capital in deal, any positive cash flow 
    represents infinite return on capital — the BRRRR holy grail.
  
  IF Capital Left ≤ 0 AND Year 1 Cash Flow ≤ 0:
    Post-Refi CoC = "N/A — Negative Cash Flow" (display flag, not Infinite)
    Rationale: extracting all capital while running negative cash flow is NOT a win — 
    the investor has no capital trapped but also loses money every month. 
    This is NOT Infinite Return. It's a cash-out refi into a losing rental.
    Display: "Capital Extracted $X, but property operates at $Y/month loss"
    Tier assignment: special tier "Cash-Out but Losing" — display in red warning, 
    NOT in emerald Infinite Return tier.

CRITICAL: Infinite Return is ONLY displayed when BOTH conditions are met:
  (1) Capital Left ≤ 0  (capital recovered or exceeded)
  (2) Year 1 Cash Flow > 0  (property actually cash-flows positively)

Without condition (2), "Infinite Return" would be misleading — a negative-cash-flow 
property with extracted capital is NOT a success.
```

**75% Rule formula (BRRRR-specific heuristic):**

```
75% Rule Target = ARV × 0.75

BRRRR Compliance Check:
  IF All-In Cost ≤ 75% Rule Target:
    "Within rule — full capital recovery mathematically possible at 75% LTV refi"
  IF All-In Cost > 75% Rule Target:
    "Outside rule — full capital recovery mathematically IMPOSSIBLE at given 75% LTV"
    Shortfall = All-In Cost − 75% Rule Target

**CRITICAL MATHEMATICAL LINK (why the 75% Rule matters):**

The 75% Rule directly determines whether full capital recovery is possible.

Proof:
  New Loan Amount = ARV × refiLTVPct
  Refi Proceeds = New Loan − HM Payoff − Refi Closing
  Capital Left = Total Cash Invested − Refi Proceeds
  
  For Capital Left to be ≤ 0 (full recovery):
    Total Cash Invested ≤ Refi Proceeds
    Total Cash Invested ≤ (ARV × refiLTVPct) − HM Payoff − Refi Closing
  
  Since Total Cash Invested + HM Payoff = All-In Cost (consistency identity):
    All-In Cost − HM Payoff ≤ (ARV × refiLTVPct) − HM Payoff − Refi Closing
    All-In Cost ≤ (ARV × refiLTVPct) − Refi Closing
    All-In Cost + Refi Closing ≤ ARV × refiLTVPct
  
  Approximation (ignoring refi closing ~2% of loan):
    All-In Cost ≤ ARV × refiLTVPct
    
  When refiLTVPct = 0.75 (default):
    All-In Cost ≤ ARV × 0.75   ← THIS IS THE 75% RULE

**Practical implication:**
  - If All-In Cost > ARV × 75%, full capital recovery at 75% LTV is mathematically impossible.
  - To recover capital despite being outside the rule, investor needs EITHER:
    - Higher refi LTV (80%+ available from some lenders)
    - Lower All-In Cost (renegotiate purchase or reduce rehab scope)
    - Higher ARV (improve scope or find more optimistic appraisal)
  - Users outside the 75% Rule should understand they're committing to leave capital in the deal.

Note: This differs from Fix and Flip 70% Rule.
  Fix and Flip 70% Rule: ARV × 0.70 − Rehab (max offer)
  BRRRR 75% Rule: All-In Cost ≤ ARV × 0.75 (target for full capital recovery)
The difference reflects that BRRRR refi is typically at 75% LTV, while flip needs margin below sale price.
```

**Consistency Identity (required validation):**

```
All-In Cost = Total Cash Invested + HM Loan Payoff

Rationale:
  All-In Cost = total project outflows
  Total Cash Invested = investor's portion
  HM Loan Payoff = lender's portion (becomes investor obligation paid off at refi)
  
Their sum = full project cost.

Implementation MUST verify this identity holds within $1-2 rounding tolerance.
If it doesn't, there's a double-counting or missing-item bug.
```

**Reverse modes:**

**Mode 2: Find Required ARV (for Full Capital Recovery)**

```
Given: all inputs fixed, find ARV that produces Capital Left = $0

Solver logic:
- Method: binary search over ARV range
- Bounds: [Purchase Price, 3 × All-In Cost]
- Tolerance: $500
- Max 100 iterations

Rationale for bounds:
- Lower bound = Purchase Price (ARV can theoretically be lower than All-In Cost
  if investor paid a premium — unusual but mathematically valid; refi will still 
  happen but with large Capital Left)
- Upper bound = 3 × All-In Cost (covers extreme deep-value deals; beyond this, 
  ARV assumption is unrealistic and solver should fail rather than return wild numbers)

At each ARV iteration, recalculate:
  - New Loan Amount = ARV × refiLTVPct
  - Refi Closing Costs (if percentage-based, depends on new loan)
  - Refi Proceeds = New Loan − HM Payoff − Refi Closing
  - Capital Left = Total Cash Invested − Refi Proceeds

Target: Capital Left = 0 (within $100 tolerance)

Edge case: If even at ARV = 3× All-In Cost capital cannot be fully recovered,
return null and display:
"Full capital recovery not achievable with current refi terms. 
Consider higher LTV lender, lower-cost acquisition, or leaving capital in deal."
```

**Mode 3: Find Max Purchase Price (for Target Capital Left)**

```
Given: target Capital Left (user sets, e.g. "max $10K left"), solve for max purchase price.

Solver logic:
- Method: binary search over price range
- Bounds: [$10,000, 2 × ARV]
- Tolerance: $500
- Max 100 iterations

CRITICAL: Price affects multiple downstream values:
- HM Loan Amount (scales with purchase + rehab)
- HM Points (scale with loan)
- HM Interest (scales with loan)
- Purchase Closing Costs (if percentage-based)
- Total Cash Invested

ASSUMPTIONS:
- ARV stays fixed (purchase price doesn't affect ARV in this solver)
- Rehab stays fixed
- Seasoning period stays fixed
- Financing terms stay fixed

Edge case: If target Capital Left unachievable at any price, return null and display:
"Target capital left not achievable. Consider lower ARV assumption or higher refi LTV."
```

### 3. INPUT FIELDS

Group by logical section:

**Property section:**
- purchasePrice (required, placeholder "Enter purchase price")
- propertyType (select: SFR / Small Multi 2-4 / Condo / Townhouse)
- propertyAddress (optional — for share URL context)
- arv (required, placeholder "Enter ARV after rehab") — critical BRRRR input
- arvConfidence (select: Conservative / Realistic / Optimistic)

**Purchase Costs section:**
- purchaseClosingCostsMode (toggle: Percentage / Dollar, default Percentage)
- purchaseClosingCostsPct (default 3%, range 1-5%)
- purchaseClosingCostsDollars (when Dollar mode)

**Rehab section:**
- rehabBudget (required, placeholder "Enter total rehab budget")
- rehabContingencyPct (default 10%, range 0-20%)
- rehabDurationMonths (default 3, range 1-12)

**Seasoning section:**
- seasoningMonths (required, default 6, options 3/4/5/6/7/8/9/10/11/12)
- Helper text: "Months from purchase to refinance eligibility. Typical 6-12 months depending on lender."

**Phase 1 Holding Costs section (monthly, during seasoning):**
- phase1HoldingMode (toggle: Simple / Detailed, default Simple)
- phase1TotalMonthlyHoldingSimple (when simple, placeholder "Enter monthly holding costs")
- phase1Holding.propertyTax (monthly)
- phase1Holding.insurance (monthly)
- phase1Holding.utilities (monthly)
- phase1Holding.hoa (monthly)
- phase1Holding.other (monthly)

NOTE on section: These are property-related expenses during the Phase 1 hold period only. HM loan interest is tracked separately in Financing. This section does NOT include loan interest.

**Phase 1 Hard Money Financing section:**
- hmLoanToCostPct (default 80%, range 60-90%)
- hmInterestRate (default 12%, range 8-15%)
- hmPointsPct (default 3%, range 0-5%)
- hmLoanCoversRehab (toggle: Yes/No, default Yes)

**Refinance Event section:**
- refiLTVPct (default 75%, range 65-80%) — Helper: "Typical 2026 cash-out refi LTV 75-80%"
- refiRatePct (default 7.5%, range 6-10%) — Helper: "2026 conventional investment property rate 7-8%"
- refiLoanTermYears (default 30, options 15/20/25/30)
- refiClosingMode (toggle: Percentage / Dollar, default Percentage)
- refiClosingPct (default 2.5%, range 1-4%)
- refiClosingDollars (when Dollar mode)

**Rental Operation section (Year 1 post-refi):**
- monthlyRent (required, placeholder "Enter expected monthly rent")
- otherIncome (optional annual)
- vacancyRate (default null, placeholder "Enter expected vacancy percentage")
- rentalExpenseMode (toggle: Simple / Detailed, default Simple)
- totalAnnualRentalExpensesSimple (when simple)
- rentalExpenses.propertyTax (annual)
- rentalExpenses.insurance (annual)
- rentalExpenses.management (annual)
- rentalExpenses.maintenance (annual)
- rentalExpenses.capex (annual)
- rentalExpenses.utilities (annual)
- rentalExpenses.hoa (annual)
- rentalExpenses.other (annual)

**Reverse mode targets:**
- targetCapitalLeft (for find-max-price mode, dollar amount)

Full field schema per field should include: key, label, placeholder (TEXT instruction, not number), helper text, input type, range validation.

**PLACEHOLDER RULE:** All placeholders are TEXT instructions ("Enter purchase price"), NEVER number examples ("e.g. $150,000"). This is a hard rule from Master Prompt.

### 4. CALCULATION MODES

Three modes (matching other calculators for consistency):

```
Mode key:       'analyze'         — Analyze BRRRR (standard, primary mode)
Mode key:       'find-arv'        — Find Required ARV (for full capital recovery)
Mode key:       'find-price'      — Find Max Purchase Price (for target capital left)
```

Color families:
- analyze → amber (Standard)
- find-arv → blue (Reverse #1)
- find-price → emerald (Reverse #2)

### 5. PRIMARY RESULT

- **Display format:** Dual display — Capital Left $ and Post-Refi CoC % side-by-side
- **Example display:**
  ```
  Capital Left in Deal        Post-Refi Cash-on-Cash
  $8,400                      42% annual return
  
  (Capital Recovery: 94% of invested cash)
  ```
- **When Capital Left ≤ $0:**
  ```
  Capital Left in Deal        Return
  -$3,200 extracted           ⚡ Infinite Return
  (Recovered all capital + $3,200 extra cash-out)
  ```
- **Decimals:** 0 for dollars, 1 for percentages
- **Primary color:** dynamic based on badge tier (keyed to Capital Left)

### 6. BADGE / TIER SYSTEM

Tiers calibrated for 2026 BRRRR market. **Note: Tier is keyed to Capital Left, NOT to Post-Refi CoC** (Capital Left is the THE BRRRR metric):

```
Tier assignment logic — CRITICAL: check Special Tier BEFORE Tier 1.
Always evaluate tiers in this order: Special Tier → Tier 1 → Tier 2 → ... → Tier 6.

SPECIAL TIER: Capital Left ≤ $0 AND Year 1 Cash Flow ≤ 0 — Cash-Out but Losing
  Label:        Cash-Out but Losing
  bg1 color:    #DC2626
  bg2 color:    #B91C1C
  Meaning:      Investor extracted all capital (or more) via refinance, BUT the property 
                now operates at a monthly loss. This is NOT Infinite Return — it's a 
                cash-out into a losing rental. The investor pulled cash now but will 
                feed money into the property every month to cover operating deficit.
                Display: "Extracted $X cash, but property loses $Y/month — reconsider"
  Warning:      Show prominent red warning banner explaining the scenario.

Tier 1: Capital Left ≤ $0 AND Year 1 Cash Flow > 0 — Infinite Return
  Label:        Infinite Return
  bg1 color:    #059669
  bg2 color:    #047857
  Meaning:      BRRRR holy grail. All invested capital recovered, plus the property 
                produces positive cash flow. Rare in 2026 — usually requires deep-value 
                acquisition or significant forced appreciation.
  Requires:     BOTH conditions satisfied. If cash flow is negative, Special Tier applies instead.

Tier 2: Capital Left $1 – $5,000 (any cash flow) — Exceptional
  Label:        Exceptional
  bg1 color:    #10B981
  bg2 color:    #059669
  Meaning:      Near-perfect capital recovery. Small amount remaining essentially 
                acts as closing-cost buffer. Excellent 2026 BRRRR outcome.

Tier 3: Capital Left $5,001 – $15,000 — Strong
  Label:        Strong
  bg1 color:    #F59E0B
  bg2 color:    #D97706
  Meaning:      Very good BRRRR outcome for 2026. Moderate capital remaining 
                justified by strong Post-Refi cash flow and building equity.

Tier 4: Capital Left $15,001 – $30,000 — Solid
  Label:        Solid
  bg1 color:    #FB923C
  bg2 color:    #EA580C
  Meaning:      Market-average 2026 BRRRR outcome. Substantial capital remaining 
                but still leverages rehab-to-refi strategy effectively.

Tier 5: Capital Left $30,001 – $60,000 — Weak
  Label:        Weak
  bg1 color:    #F97316
  bg2 color:    #C2410C
  Meaning:      Below-market BRRRR. Large capital remaining; may be better treated 
                as long-term buy-and-hold rather than BRRRR recycle strategy.

Tier 6: Capital Left > $60,000 OR Refi Shortfall — Critical
  Label:        Critical
  bg1 color:    #DC2626
  bg2 color:    #B91C1C
  Meaning:      BRRRR thesis broken. Too much capital stuck or refi requires 
                cash to close. Reconsider deal structure or exit strategy.
```

**CRITICAL — Tier assignment flowchart (to avoid UI contradictions):**

```
IF Capital Left ≤ $0:
    IF Year 1 Cash Flow > 0:
        → Tier 1: Infinite Return (green)
    ELSE (Cash Flow ≤ 0):
        → Special Tier: Cash-Out but Losing (red, warning)
ELSE (Capital Left > 0):
    IF Capital Left ≤ $5,000:
        → Tier 2: Exceptional
    ELSE IF Capital Left ≤ $15,000:
        → Tier 3: Strong
    ELSE IF Capital Left ≤ $30,000:
        → Tier 4: Solid
    ELSE IF Capital Left ≤ $60,000:
        → Tier 5: Weak
    ELSE:
        → Tier 6: Critical

IF Refi Proceeds < 0 (refi shortfall):
    → Tier 6: Critical (regardless of Capital Left value)

This flowchart MUST match the Post-Refi CoC logic exactly.
Any divergence between Tier display and CoC display is a UI bug.
```

**Important:** These tier thresholds apply to SFR deals in mid-tier US markets ($150K-$350K ARV range). Scale proportionally for larger or smaller deals:
- Condo/Low-entry (<$150K ARV): divide thresholds by 1.5
- High-entry (>$500K ARV): multiply thresholds by 1.5

Display a tooltip: "Tier calibrated for $150K-$350K mid-tier markets. Adjust expectations for your deal size."

### 7. INSIGHT TEXT (DEAL CONTEXT)

For each tier, 2-3 sentences:

```
"Capital Left of $[value] after refi is in the [tier] range by 2026 US BRRRR norms. 
[Context about what this means for strategy]. Major factor: [top contributor — 
ARV miss / rehab overrun / HM cost / refi LTV constraint]. [Actionable guidance]."
```

Must mention:
- Capital Left value
- 75% Rule compliance (within or outside)
- If Infinite Return, celebrate but caveat: "Verify ARV with independent appraisal before assuming lender confirmation"
- 2026 rate environment context

### 8. KEY DERIVED METRICS

Four metric cards in the right column:

**Metric 1: 75% Rule Check**
- Formula: compare All-In Cost to (ARV × 0.75)
- Display: "All-In $X vs 75% Target $Y — Buffer/Shortfall $Z"
- Indicator:
  - All-In ≤ 75% Target = green "Within rule"
  - All-In > 75% Target = amber "Outside rule"
- Hover hint: "BRRRR heuristic: if All-In Cost is at or below 75% of ARV, you can recover all capital via 75% LTV refi."

**Metric 2: Capital Recovery %**
- Formula: 
  - IF Total Cash Invested > 0: (Refi Proceeds ÷ Total Cash Invested) × 100
  - IF Total Cash Invested = 0: "N/A" (display flag)
- Format: percentage with 1 decimal (or "N/A" for edge case)
- Display: "Recovered X% of invested capital" (or "N/A — no cash investment" for edge case)
- Thresholds (only applicable when value is numeric):
  - ≥ 100% = exceptional (Infinite Return territory)
  - 85-99% = strong
  - 70-84% = solid
  - 50-69% = weak
  - < 50% = critical
- Hover hint: "Percentage of invested capital recovered via refinance. 100%+ means cash-out BRRRR."

**Metric 3: Post-Refi DSCR (Year 1)**
- Formula: Year 1 NOI ÷ Annual New Loan Debt Service
- Format: coefficient with x suffix (e.g., 1.32x)
- Thresholds:
  - ≥ 1.25x = strong (conventional lender friendly)
  - 1.15-1.24x = moderate
  - 1.00-1.14x = marginal
  - < 1.00x = fail (negative cash flow)
- Hover hint: "Debt service coverage in Year 1 post-refi. Lender qualification indicator for refi approval."

**Metric 4: Post-Refi Annual Cash Flow**
- Formula: Year 1 NOI − Annual Debt Service
- Format: currency
- Thresholds for 2026 context:
  - ≥ $6,000 = exceptional for mid-tier deal
  - $3,000-5,999 = strong
  - $0-2,999 = thin (concerning in 2026)
  - < $0 = negative cash flow (BRRRR failing)
- Hover hint: "Cash flow in Year 1 after refinance. Represents annual return on Capital Left."

### 9. SENSITIVITY ANALYSIS

Multi-variable sensitivity because BRRRR outcomes depend on multiple drivers:

**Primary sensitivity — ARV × Refi LTV:**
```
Rows:     ARV at -10%, -5%, target, +5%, +10% (5 scenarios)
Columns:  Refi LTV 70%, 75%, 80% (3 scenarios)
Cell:     Capital Left in Deal $
```

**Secondary sensitivity — Rehab × Seasoning:**
```
Rows:     Rehab +0%, +15%, +30% overrun
Columns:  Seasoning 6 mo, 9 mo, 12 mo
Cell:     Capital Left in Deal $ AND Post-Refi CoC %
```

**Tertiary — Rate Environment:**
```
Rows:     HM Rate: 10%, 12%, 14%
Columns:  Refi Rate: 7%, 7.5%, 8%, 8.5%
Cell:     Capital Left, Post-Refi CoC
```

### 10. SCENARIO ANALYSIS

Three scenarios with realistic multipliers:

```
Conservative (realistic downside):
  ARV × 0.92                  (-8% on appraisal)
  Rehab × 1.20                (+20% budget overrun)
  Seasoning + 2 months        (permit/lender delays)
  HM Rate + 1%                (rate environment harder)
  Refi LTV − 5%               (lender tightening)

Base:
  (user inputs as entered)

Optimistic (realistic upside, NOT hype):
  ARV × 1.05                  (+5% appraisal upside)
  Rehab × 0.95                (-5% with tight bidding)
  Seasoning − 1 month         (fast lender processing)
  NOTE: Optimistic outcomes are rare in 2026 — treat as best-case reference, 
  not a planning baseline.
```

**Multiplier rationale:**
- Conservative reflects 2026 BRRRR realities: appraisal shortfalls are common (5-10%), rehab overruns ubiquitous, lender LTV tightening
- Optimistic is modest — BRRRR has become harder in 2026, not easier
- Spread brackets ~80% of realistic outcomes

Show Capital Left and Post-Refi CoC for each scenario side-by-side.

### 11. VISUALIZATION BREAKDOWN

**Capital Flow Waterfall** (shows how capital recycles):

```
Stage 1: Cash In (Total Cash Invested)               (base, outflow)
Stage 2: − HM Loan (Phase 1 financing)               (loan offset during Phase 1)
Stage 3: + HM Loan (repayment required at refi)      (must be repaid)
Stage 4: + New Loan Amount (refinance proceeds)      (new loan inflow)
Stage 5: − HM Payoff                                 (using new loan to pay HM)
Stage 6: − Refi Closing Costs                        (transaction cost)
Result:  Refi Proceeds to Investor                   (cash recovered)

Final:   Capital Left = Original Cash − Refi Proceeds
```

**Timeline Chart** (BRRRR project schedule):
```
Month 0:       Purchase + start rehab
Months 1-N:    Rehab in progress (Phase 1 holding + HM interest compounding)
Month N:       Rehab complete, property ready
Months N to seasoning: Property rented or waiting for seasoning
Month seasoning: REFI EVENT (HM paid off, new loan, capital extracted)
Months seasoning+1 to 12+seasoning: Year 1 post-refi rental operation
```

### 12. WARNINGS & VALIDATION

- Missing critical inputs (price, ARV, rehab, rent)
- All-In Cost > ARV × 75% (warning: "Outside BRRRR 75% Rule — capital will remain in deal")
- ARV ≤ Purchase Price + Rehab (warning: "ARV barely covers basis — BRRRR thesis weak")
- Rehab budget > 50% of Purchase Price (warning: "Heavy rehab — extended seasoning likely")
- Seasoning < 6 months (warning: "Most lenders require 6+ month seasoning")
- Seasoning > 12 months (warning: "Extended seasoning — consider permanent hold instead")
- HM Rate > 14% (warning: "Rate above typical 2026 range — verify lender quote")
- Refi Rate > refiRatePct + 1% above HM Rate (warning: "Refi rate higher than HM rate — unusual")
- Refi LTV > 80% (warning: "Aggressive LTV — verify lender approval")
- New Loan Amount < HM Loan Amount (warning: "Refi produces cash-in scenario, not cash-out")
- Post-Refi Year 1 DSCR < 1.00 (warning: "Negative cash flow — BRRRR may not qualify for conventional refi")
- Monthly Rent < 0.7% of ARV (warning: "Low rent-to-value ratio — BRRRR cash flow will be thin")
- Post-Refi Cash Flow negative (warning: "BRRRR produces negative cash flow — reconsider")

### 13. PROJECT TIMELINE TABLE (core feature)

Month-by-month breakdown shown in UI, structured by BRRRR phases:

```
| Month | Phase                  | Cumulative Cash | Loan Balance | Event                            |
| 0     | Close (Phase 1)        | $[cash at close]| $[HM loan]   | Purchase + HM loan funded       |
| 1     | Rehab                  | $[+holding]     | $[HM]        | Rehab month 1                    |
| 2     | Rehab                  | $[+holding]     | $[HM]        | Rehab month 2                    |
| 3     | Rehab complete         | $[+holding]     | $[HM]        | Property market-ready            |
| 4-6   | Seasoning              | $[+holding]     | $[HM]        | Property rented, waiting for refi|
| 7     | REFI EVENT             | $[-refi proceeds]| $[new loan] | HM paid off, new loan closes     |
| 8-12  | Post-Refi Rental       | $[+cash flow]   | $[new loan, amort]| Year 1 rental operation     |
```

Highlight the REFI EVENT row prominently (different background color).

Include a separate row showing Year 1 Total (12 months post-refi) with Annual Cash Flow.

### 14. BENCHMARKS BY STRATEGY TYPE (2026, BRRRR investors)

```
| Strategy Type                | Capital Left Range | Post-Refi CoC | Notes                              |
| Cash-out BRRRR (rare 2026)   | Below $0           | Infinite     | Requires deep-value acquisition    |
| Full Recovery BRRRR          | $0 − $5K           | 50%+          | Ideal outcome, some buffer         |
| Partial Recovery BRRRR       | $5K − $20K         | 25-50%        | 2026 market average                |
| Hybrid BRRRR-to-Hold         | $20K − $40K        | 15-25%        | Leaves more capital, still viable  |
| Failed BRRRR (treat as Hold) | $40K+              | 8-15%         | BRRRR thesis broken, but may rent  |
```

Label: "Industry-standard estimates based on 2026 hard money + conventional refi rate environment. Individual outcomes vary."

### 15. BENCHMARKS BY STATE (8 states — BRRRR-friendly markets)

For Texas, Georgia, Ohio, Pennsylvania, Arizona, North Carolina, Indiana, Tennessee (BRRRR-friendly states):

```
State: [name]
Typical Capital Left range: [range]
Key markets: [top 3]
BRRRR characteristics: [AT LEAST TWO specific factors — entry price, rehab cost, rent-to-ARV, permit timing, etc.]
Notes: [2 sentences about why this state works for BRRRR]
```

Each state MUST name at least TWO specific factors:
- Texas → low entry prices + no state income tax (factor 1: $150-250K entry; factor 2: no state tax on rental income)
- Georgia → Atlanta metro + moderate rehab costs (factor 1: metro strength; factor 2: labor availability)
- Ohio → low entry + strong rent-to-value (factor 1: $80-150K entry; factor 2: 1%+ rent-to-value achievable)
- Pennsylvania → Pittsburgh/Philly variance + older housing (factor 1: metro variance; factor 2: rehab-heavy older stock)
- Arizona → Phoenix metro + rising insurance (factor 1: metro demand; factor 2: emerging insurance drag)
- North Carolina → Raleigh/Charlotte growth + balanced costs (factor 1: metro growth; factor 2: moderate labor)
- Indiana → Indianapolis + low property tax (factor 1: metro strength; factor 2: tax environment)
- Tennessee → Nashville + no state income tax (factor 1: population inflow; factor 2: tax benefit)

Add explicit label: "Industry-standard estimates — not market-reported BRRRR statistics."

### 16. ASSET CLASS CONTEXT

For SFR / Small Multi 2-4 / Condo / Townhouse: typical Capital Left range + 2-sentence explanation. 

Emphasize:
- SFR BRRRR easiest for first-time (clear comps, standard lenders)
- Small Multi BRRRR harder (rarer comps, specialty lenders)
- Condo BRRRR rare (HOA restrictions on rehab, thin ARV margins)
- Townhouse BRRRR intermediate

### 17. TEST CASES

**TOLERANCE RULE:**
- ±0.5% for percentages
- ±$100 for multi-line dollar amounts
- ±$50 for single-line dollar amounts

Write **6 test cases**:

**Test 1: Standard BRRRR with full capital recovery**
- Purchase $140K, ARV $240K, Rehab $40K, Contingency 10%
- Seasoning 6 months, Monthly holding $550
- HM: 80% LTC (covers rehab), 12% rate, 3 points
- Refi: 75% LTV, 7.5% rate, 30-year, 2.5% closing
- Rent $1,950/mo, Vacancy 7%, Annual Rental Expenses $7,200
- Expected All-In Cost with tolerance ±$100
- Expected Capital Left in $0-$5K range (Exceptional tier)
- Expected Capital Recovery % above 95%
- Expected Post-Refi Year 1 DSCR around 1.20-1.30x
- Verify consistency identity: All-In Cost = Total Cash Invested + HM Loan Payoff

**Test 2: Infinite Return BRRRR (deep-value acquisition)**
- Purchase $95K, ARV $220K, Rehab $35K, Contingency 10%
- Seasoning 6 months
- HM: 85% LTC, 12% rate, 3 points
- Refi: 75% LTV, 7.5% rate, 30-year
- Rent $1,850/mo
- Expected Capital Left: negative (extracted more than invested)
- Expected display: "Infinite Return" flag triggered
- Verify Capital Recovery % > 100%

**Test 3: Failed BRRRR (refi shortfall)**
- Purchase $180K, ARV $225K, Rehab $50K
- Seasoning 6 months
- HM: 80% LTC, 12% rate, 3 points
- Refi: 75% LTV (too low for this deal)
- Expected result: Refi Proceeds negative (shortfall)
- Expected Capital Left: very high
- Expected tier: Critical
- Verify warning fires

**Test 4: Find Required ARV (reverse)**
- Target: Capital Left = $0
- Purchase $150K, Rehab $40K, all other inputs standard
- Binary search for ARV
- Expected ARV with tolerance ±$500
- Verify that at found ARV, Capital Left within $100 of zero

**Test 5: 75% Rule boundary verification**
- Set up deal where All-In Cost = exactly ARV × 0.75
- Verify 75% Rule indicator shows "At rule boundary"
- Adjust inputs ±$5K and verify indicator flips between "Within" and "Outside"

**Test 6: Amortization r=0 edge case**
- Refi Rate = 0% (seller carry refinance — unusual but supported)
- Verify Monthly Payment = New Loan / n formula used (not division by zero)
- Verify Year 1 Debt Service and DSCR calculate correctly

### 18. URL PARAMETERS

Short param names:
- purchasePrice → pp
- arv → av
- arvConfidence → ac
- rehabBudget → rb
- rehabContingencyPct → rc
- rehabDurationMonths → rd
- seasoningMonths → sm
- phase1HoldingMode → p1m
- phase1TotalMonthlyHoldingSimple → p1h
- phase1Holding.propertyTax → p1t (and similar for each item)
- hmLoanToCostPct → hltc
- hmInterestRate → hir
- hmPointsPct → hpp
- hmLoanCoversRehab → hcr
- refiLTVPct → rltv
- refiRatePct → rir
- refiLoanTermYears → rlt
- refiClosingMode → rcm
- refiClosingPct → rcp
- refiClosingDollars → rcd
- monthlyRent → mr
- otherIncome → oi
- vacancyRate → vr
- rentalExpenseMode → rem
- totalAnnualRentalExpensesSimple → res
- rentalExpenses.propertyTax → rept (and similar)
- purchaseClosingCostsMode → cm
- purchaseClosingCostsPct → cp
- purchaseClosingCostsDollars → cd
- targetCapitalLeft → tcl
- propertyType → pt
- mode → md

### 19. EDGE CASES

```
All fields empty:                      result = —
Missing critical inputs:               disable result, show hint
Seasoning = 3 months (minimum):        calculate, warn "Most lenders require 6+ months"
Seasoning = 12 months (maximum):       calculate, warn "Extended seasoning — consider hold instead"
ARV ≤ All-In Cost:                     Capital Left very high, show Critical tier
ARV × 0.75 < HM Loan Payoff:          Refi Proceeds negative, display "Refi Shortfall"
Refi Rate = 0% (seller carry):         use r=0 amortization branch (Monthly Payment = Loan / n)
HM Rate = 0% (family loan):            allow, total interest = 0
Rehab = $0:                            light BRRRR (wholesale-to-rent), calculate
Rehab > 50% of Purchase:               heavy rehab, extend expected seasoning
All-Cash for Phase 1:                  no HM loan, entire purchase + rehab from cash — refi then extracts up to 75% of ARV
Refi LTV > 80%:                        warn "Aggressive LTV — verify lender"
Monthly Rent low (< 0.7% of ARV):      warn "Thin cash flow expected"
Capital Left calculated < 0:           display as Infinite Return, NOT minus sign
Capital Left = exactly $0:             display as "Full Capital Recovery"
Post-Refi Cash Flow negative:          warn "Negative cash flow — refi may not qualify"
ARV appraisal comes in lower (user sensitivity): can be modeled via ARV × 0.92 in Conservative
Find-ARV target unachievable:          return null, display "Full recovery not achievable with current refi terms"
Find-Price target unachievable:        return null, display "Target capital left not achievable"
```

---

## OUTPUT CHECKLIST

Before finalizing, verify:

- [ ] All 19 sections present in correct order
- [ ] **DUAL primary metrics: Capital Left $ AND Post-Refi CoC % (co-primary)**
- [ ] **Infinite Return flag when Capital Left ≤ $0 (special display, not a number)**
- [ ] **Two-phase calculation model: Phase 1 (HM) flows into Phase 2 (refi) flows into Phase 3 (rental)**
- [ ] **Scope limited to Year 1 post-refi — NO multi-year projection (Rental Property Calculator handles that)**
- [ ] **75% Rule (BRRRR-specific) clearly distinguished from 70% Rule (flip)**
- [ ] **All-In Cost = Total Cash Invested + HM Loan Payoff identity must hold**
- [ ] **Total Cash Invested INCLUDES all real cash outflows: holding costs, HM interest, points**
- [ ] **Phase 1 Holding Costs EXCLUDE loan interest — loan costs are separate**
- [ ] **Definitions block at top of Formula section prevents double-counting**
- [ ] **Rehab included in Cash Invested ONLY if not covered by HM loan**
- [ ] **Capital Left can be negative (display as "extracted" language, not minus sign in main display)**
- [ ] **Refi Proceeds = New Loan − HM Payoff − Refi Closing (can be negative = shortfall)**
- [ ] **Refi Closing Costs are NOT in All-In Cost and NOT in Total Cash Invested — ONLY subtracted in Refi Proceeds (anti-double-counting rule)**
- [ ] **All-In Cost explicitly labeled as PRE-REFINANCE (Phase 1 only) — excludes Refi Closing, New Loan, Year 1 rental expenses, Year 1 debt service**
- [ ] **Phase 1 Holding Costs and Phase 3 Rental Expenses apply to SEPARATE time periods — same property but different month counts (seasoningMonths vs 12)**
- [ ] **Infinite Return requires BOTH: Capital Left ≤ 0 AND Year 1 Cash Flow > 0 (prevents displaying Infinite on losing rental)**
- [ ] **Capital Left ≤ 0 with negative cash flow shows "Cash-Out but Losing" warning, NOT Infinite Return**
- [ ] **75% Rule mathematically linked to Capital Left: "If All-In > ARV × 75%, full capital recovery mathematically IMPOSSIBLE at given LTV" — includes proof**
- [ ] **Reverse ARV solver bounds = [Purchase Price, 3 × All-In Cost] (not [All-In Cost, 3 × All-In Cost] — ARV can be below All-In)**
- [ ] **Post-Refi CoC has tiered logic: Capital Left > 0 → normal; Capital Left ≤ 0 AND CF > 0 → Infinite; Capital Left ≤ 0 AND CF ≤ 0 → N/A Negative**
- [ ] **Tier system has SPECIAL TIER "Cash-Out but Losing" (red) for Capital Left ≤ 0 AND Cash Flow ≤ 0 — distinct from Tier 1 Infinite Return**
- [ ] **Tier 1 (Infinite Return) requires BOTH conditions: Capital Left ≤ 0 AND Year 1 Cash Flow > 0 — NOT just Capital Left alone**
- [ ] **Tier assignment flowchart documented: Special Tier check → Tier 1 check → Tier 2-6 by Capital Left brackets → overrides for Refi Shortfall**
- [ ] **Tier display and Post-Refi CoC display MUST synchronize — no contradictions (Tier 1 always implies Infinite CoC, Special Tier always implies "N/A" CoC)**
- [ ] **HM Loan Payoff explicitly defined as PRINCIPAL ONLY — excludes interest and points (which are already in All-In Cost and Total Cash Invested)**
- [ ] **Refi Proceeds explicitly labeled as "NET CASH TO INVESTOR at refi event" — flow direction documented for Waterfall visualization**
- [ ] **Capital Recovery % has division-by-zero guard: if Total Cash Invested = 0, display "N/A — no cash investment" instead of number**
- [ ] **Metric 2 card handles edge case: when Cash Invested = 0, shows "N/A" gracefully, not an error or infinity**
- [ ] **6 tiers keyed to Capital Left (NOT CoC) — Infinite Return / Exceptional / Strong / Solid / Weak / Critical**
- [ ] **Tier thresholds calibrated for mid-tier $150-350K deals — helper explains scaling for other deal sizes**
- [ ] Placeholder rule: all placeholders are "Enter X" text, NEVER "e.g. $" numbers
- [ ] **Amortization has r=0 special case for seller-carry refi**
- [ ] Hard Money formulas: interest-only monthly, points upfront, LTC drives Down Payment
- [ ] **Down Payment in HM = Purchase × (1 − hmLoanToCostPct), uniform regardless of hmLoanCoversRehab**
- [ ] Reverse mode Find Required ARV uses binary search, returns null if unachievable
- [ ] Reverse mode Find Max Purchase Price uses binary search, returns null if unachievable
- [ ] Both reverse modes state EXPLICIT assumptions (what stays fixed)
- [ ] 6 test cases with correct tolerance rules
- [ ] Test 1: standard BRRRR with full capital recovery
- [ ] Test 2: Infinite Return BRRRR (deep-value acquisition)
- [ ] Test 3: Failed BRRRR with refi shortfall
- [ ] Test 4: Find Required ARV reverse
- [ ] Test 5: 75% Rule boundary verification
- [ ] Test 6: r=0 amortization edge case (seller carry refi)
- [ ] **Every test verifies consistency identity: All-In Cost = Cash Invested + HM Payoff**
- [ ] 2026 rate environment (HM 11-13%, refi 7.5%) reflected throughout
- [ ] Benchmarks labeled as "industry-standard estimates — not market-reported"
- [ ] State benchmarks name AT LEAST TWO specific factors per state
- [ ] Warnings cover 75% Rule violation, refi shortfall, negative Post-Refi cash flow, aggressive LTV
- [ ] **Before-tax analysis label required throughout — no after-tax in v1**
- [ ] **Explicit redirect to Rental Property Calculator for multi-year analysis (in Limitations)**
- [ ] 3 modes: analyze, find-arv, find-price
- [ ] Color families: amber / blue / emerald
- [ ] URL params short and include new BRRRR-specific fields (seasoning, refi terms, rental expenses)
- [ ] 3 sensitivity tables: ARV × Refi LTV, Rehab × Seasoning, HM Rate × Refi Rate
- [ ] Scenarios use REALISTIC multipliers (Conservative 0.92×, Optimistic 1.05×)
- [ ] **Optimistic scenario has explicit note: "rare in competitive 2026 markets"**
- [ ] Project Timeline table shows BRRRR phases clearly (Phase 1 → REFI EVENT → Phase 3)
- [ ] **REFI EVENT row visually highlighted in timeline**
- [ ] Asset class context explains why SFR is easiest for BRRRR

Output only the RIS specification. Do not output code. Do not output HTML. Do not output Vue. This is a spec document that will be consumed by the Master Prompt later.
