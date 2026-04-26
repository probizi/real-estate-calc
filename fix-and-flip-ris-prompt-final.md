# RIS Prompt — Fix and Flip Calculator (v3 final)

You are a senior real estate financial analyst and calculator designer. Your job is to produce a **complete RIS specification** for a new real estate investment calculator.

The output of this prompt becomes the single source of truth for calculator logic — formulas, fields, thresholds, badges, scenarios. It will later be combined with a SEO Package and a Master Prompt to generate the actual Vue page.

---

## YOUR TASK

Write a RIS specification for:

```
Calculator Name:   Fix and Flip Calculator
Category:          Real Estate Investment / Short-Term Flipping Strategy
Primary keyword:   fix and flip calculator
Target audience:   US real estate flip investors — from first-time flippers to 
                   experienced rehabbers running multiple projects annually
Traffic priority:  Priority 1 (high volume, 60K–80K searches/month estimated)
```

---

## CRITICAL DISTINCTIONS TO PRESERVE

This is the **short-term profit calculator** of the RealCalc platform. It is fundamentally different from Rental Property Calculator:

- Rental Property = long-term hold (5-30 years), multi-year cash flow + appreciation, exit via cap rate or appreciation
- Fix and Flip = short-term project (3-12 months), one-time profit, ARV-driven exit, hard money typical

### Critical rules

1. DUAL primary metrics: Total Profit $ AND ROI %
   - Both shown prominently in the main result block
   - Format: Total Profit displayed as $52,400, then ROI: 42.1% over 6 months
   - Neither is "the" primary — both are co-primary, covering beginners (dollars) and professionals (percentage)

2. Hold period is in MONTHS, not years.
   - Default: 6 months
   - Options: 3, 4, 5, 6, 7, 8, 9, 10, 12 months
   - Must be displayed in months throughout UI — "6 months" not "0.5 years"

3. Hard Money Loan as default financing.
   - 70% of flip investors use hard money — the calculator must reflect reality
   - Rate range: 10-14% (vs 7-8% conventional)
   - Points: 2-4% upfront (paid at closing)
   - Hard money often covers BOTH purchase and rehab
   - Toggle to switch to conventional financing (15-30 year amortizing, no points)
   - Also support "all cash" option (no financing)

4. ARV-driven exit, not cap rate, not appreciation.
   - ARV (After Repair Value) is an input
   - Exit = ARV minus Sale Costs
   - No cap rate involved (not an income property)
   - No appreciation compounding (too short-term)

5. 70% Rule as prominent derived metric.
   - "70% Rule Max Offer = ARV × 0.70 − Rehab Cost"
   - This is the industry heuristic every flip investor knows
   - Shown as Metric 1 in the derived cards
   - Comparison: "Your offer at $180K vs 70% Rule at $168K" — shows whether user's deal is within or outside the rule

6. Holding costs are CRITICAL.
   - Monthly holding costs (taxes, insurance, utilities, HOA, loan interest) accumulate during renovation
   - Must be explicit input, multiplied by months held
   - A flip that runs over budget on time is often ruined by holding costs

7. Contingency budget is industry standard.
   - 10-15% contingency on rehab budget is standard
   - Must be explicit input OR automatically calculated option
   - Default: 10% of rehab budget

8. No multi-year projection.
   - Single-period profit calculation
   - No rent growth, no appreciation rate, no hold period beyond months
   - This is intentionally simpler math than Rental Property

9. Before-tax analysis only in v1.
   - Flip profits are ordinary income (not capital gains in most cases)
   - High marginal tax rates apply (often 25-37%)
   - V1 is before-tax; after-tax would require user's marginal rate
   - Label prominently: "Before-tax analysis. Actual take-home lower after taxes."

10. 2026 market context.
    - Hard money rates have risen with Fed policy: 11-13% typical in 2026 (vs 9-10% in 2019)
    - This compresses flip margins significantly
    - Typical profitable flip needs 25%+ ROI in 2026 to be worth the risk
    - Below 15% ROI in 2026 is often not worth the execution risk

### 2026 rate environment context

With hard money rates ~11-13% and conventional rates ~7.5-8% in 2026:
- Holding costs on a 6-month hold can equal 6-8% of purchase price
- Profit margins compressed vs pre-2022 (when HM was 8-10%)
- Typical "good" flip ROI: 20-35% (vs 30-50% in 2015-2019)
- Sub-15% ROI flips are often loss-leaders after execution risk

---

## RULES

1. Accuracy is non-negotiable. Every formula verifiable against BiggerPockets, Fortune Builders, Kiavi, hard money lender methodology.

2. US market only. All benchmarks, examples, and assumptions reflect 2026 US market.

3. Short-term correctness. Holding costs multiply by months. Hard money points are ONE-time at closing. Loan interest on HM is typically interest-only during hold.

4. Tolerance rule. 
   - ±0.5% for ROI percentage
   - ±$100 for dollar values (profit, proceeds, total costs)
   - ±$50 for single-line items (monthly holding, individual costs)

5. Benchmark integrity. Label any estimated ranges as "industry-standard estimates based on 2026 market conditions" — not publicly reported data (flip margins are not market-reported).

6. Follow exact structure below. 19 sections, same order as all other RIS specs.

---

## REQUIRED OUTPUT STRUCTURE

### 1. METRIC DEFINITION

- Primary metrics (co-primary, both shown prominently): Total Profit $ AND ROI %
- What they measure: 
  - Total Profit = dollar profit from the flip project (ARV minus all costs)
  - ROI = profit as percentage of total cash invested (not financed amount)
- Why investors use it: 
  - Total Profit is the absolute wealth creation number
  - ROI enables comparison across deals of different size
  - Both together give beginners and professionals the full picture
- Time dimension: Short-term project (3-12 months). Default hold: 6 months. Inputs represent the flip project as a whole.
- Related metrics included as DERIVED (not primary):
  - 70% Rule Max Offer (industry heuristic)
  - Break-Even Sale Price
  - Annualized ROI (for comparison with other investments)
  - Cash-on-Cash return
  - Profit per Month
  - Total Cash Invested
- What it explicitly EXCLUDES in v1:
  - After-tax returns (before-tax only)
  - Opportunity cost analysis
  - Comparison to alternative investments (S&P 500, etc)
  - Detailed scope-of-work rehab breakdown (simplified to single rehab number)
  - 1031 exchange benefits (flips do not qualify for 1031)

### 2. FORMULA

Primary Total Profit and ROI formulas:

```
DEFINITIONS (single source of truth — prevents double-counting):

  Holding Costs (per month) = Property Tax + Insurance + Utilities + HOA + Other
                               (monthly property-related expenses during hold)
                               DOES NOT include loan interest.
  
  Total Holding Costs = Monthly Holding Costs × holdPeriodMonths
  
  Loan Costs = Loan Points (one-time, upfront) + Total Loan Interest (over hold)
               (only applies when financingType is 'hm' or 'conv', zero for 'cash')
  
  Total Loan Interest:
    IF financingType = 'hm' (interest-only):
      Total Loan Interest = Loan Amount × (hmInterestRate / 12) × holdPeriodMonths
    
    IF financingType = 'conv' (amortizing):
      Total Loan Interest = (Monthly Payment × holdPeriodMonths) − Principal Reduction
      Where:
        Monthly Payment computed via amortization formula (see Amortization section)
        Principal Reduction = Original Loan Amount − Remaining Balance at month holdPeriodMonths
        Remaining Balance computed via amortization balance formula (see below)
    
    IF financingType = 'cash':
      Total Loan Interest = 0
  
  Loan Amount:
    IF financingType = 'hm':
      Loan Amount = (Purchase Price + Rehab Budget) × hmLoanToCostPct   (if hmLoanCoversRehab = true)
      OR
      Loan Amount = Purchase Price × hmLoanToCostPct                    (if hmLoanCoversRehab = false)
    
    IF financingType = 'conv':
      Loan Amount = Purchase Price × (1 − convDownPaymentPct)
    
    IF financingType = 'cash':
      Loan Amount = 0
  
  Loan Points (upfront cash payment):
    IF financingType = 'hm':
      Loan Points = Loan Amount × hmPointsPct
    ELSE (conv or cash):
      Loan Points = 0
```

```
STEP 1 — Calculate Total Project Costs (all outflows over the project):
  Total Project Costs = Purchase Price
                      + Purchase Closing Costs
                      + Rehab Budget
                      + Rehab Contingency
                      + Total Holding Costs         (see Definitions above)
                      + Loan Points                  (see Definitions above)
                      + Total Loan Interest          (see Definitions above)
                      + Sale Costs (ARV × saleCostsPct)

  NOTE: Holding Costs and Loan Interest are SEPARATE line items.
  Holding Costs = property expenses only.
  Loan Costs = points + interest only.
  No overlap — prevents double-counting.

STEP 2 — Calculate Total Cash Invested (what actually leaves investor's pocket):
  Total Cash Invested = Down Payment                 (Purchase Price − Loan Amount)
                      + Purchase Closing Costs
                      + Rehab Budget                 (if not financed)
                      + Rehab Contingency            (if not financed)
                      + Total Holding Costs          (real cash outflow during hold)
                      + Loan Points                  (paid upfront at closing)
                      + Total Loan Interest          (real cash paid to lender during hold)
  
  Where Down Payment (cash paid at closing for the property itself):
    IF financingType = 'cash':
      Down Payment = Purchase Price                            (100% of price is cash)
    
    IF financingType = 'hm':
      Down Payment = Purchase Price × (1 − hmLoanToCostPct)    (regardless of hmLoanCoversRehab toggle)
      
      Rationale: LTC (Loan-to-Cost) is applied uniformly to the project cost basis.
      If hmLoanCoversRehab = true, the loan covers (Purchase + Rehab) × LTC, but the
      Down Payment portion applied to the property is always Purchase × (1 − LTC).
      The investor's cash contribution to the rehab side (if any) is tracked in the
      "Rehab Budget (if not financed)" line.
    
    IF financingType = 'conv':
      Down Payment = Purchase Price × convDownPaymentPct

  CRITICAL: Total Holding Costs and Total Loan Interest are counted in Total Cash Invested
  because they are real cash outflows during the hold period — NOT just a "reserve".
  The investor actually writes checks for these every month.
  A separate "liquidity reserve" is tracked OUTSIDE this formula (optional field, not part
  of ROI calculation).

STEP 3 — Calculate Net Sale Proceeds:
  Net Sale Proceeds = ARV − Sale Costs − Remaining Loan Balance at Exit

  Where Remaining Loan Balance at Exit:
    IF financingType = 'cash':
      Remaining Loan Balance = 0
    IF financingType = 'hm' (interest-only):
      Remaining Loan Balance = Loan Amount  (no principal paid during hold)
    IF financingType = 'conv' (amortizing):
      Remaining Loan Balance = Loan Amount − Principal Reduction
      (See amortization balance formula below)

STEP 4 — Calculate Total Profit:
  Total Profit = Net Sale Proceeds − Total Cash Invested

  Sanity check: This should equal ARV − Total Project Costs (they reconcile by construction)

STEP 5 — Convert to ROI percentage:
  ROI % = (Total Profit ÷ Total Cash Invested) × 100
```

CRITICAL: Total Cash Invested counts ALL real cash outflows including holding costs and loan interest. This prevents ROI from being artificially inflated. The ROI a flipper experiences is based on the cash they actually had to come up with — not just the down payment + closing.

Sanity check: An all-cash deal where investor puts in $180K total (including all holding costs and sale costs) and receives $210K at sale produces Total Profit = $30K, ROI = 16.7%. Not 67% (that would be $30K÷purchase only), not 100%.

70% Rule formula (derived metric):
```
70% Rule Max Offer = (ARV × 0.70) − Rehab Budget

This is the industry heuristic for maximum safe offer price.
A deal where Purchase Price ≤ 70% Rule Max Offer is considered "within the rule".
A deal where Purchase Price > 70% Rule Max Offer is "outside the rule" — 
must have strong reasons to justify.
```

Break-Even Sale Price formula:
```
Break-Even Sale Price = (Total Cash Invested + Remaining Loan Balance) ÷ (1 − saleCostsPct)

This is the minimum sale price that returns exactly $0 profit.
Any sale below this price produces a loss.

Derivation (what break-even means):
We want the Sale Price such that Total Profit = 0:
  Total Profit = Net Sale Proceeds − Total Cash Invested = 0
  Net Sale Proceeds = SalePrice − (SalePrice × saleCostsPct) − RemainingLoan
  
  Solving:
    SalePrice − (SalePrice × saleCostsPct) − RemainingLoan = Total Cash Invested
    SalePrice × (1 − saleCostsPct) = Total Cash Invested + RemainingLoan
    SalePrice = (Total Cash Invested + RemainingLoan) ÷ (1 − saleCostsPct)

CRITICAL: Use Total Cash Invested, NOT Total Project Costs.
Total Project Costs already includes Sale Costs — if you use Project Costs here,
you would double-count Sale Costs (once in Project Costs, once in the division
by (1 − saleCostsPct)).
Break-even is a cash-recovery question: "what sale price returns all my cash?"
```

Consistency check (required in implementation):
```
The following identity must always hold:
  Total Project Costs = Total Cash Invested + Remaining Loan Balance

Why: Total Project Costs = all outflows over the project.
     Total Cash Invested = cash the investor actually paid out of pocket.
     Remaining Loan Balance = outflows covered by the lender (not investor cash).
     
Their sum = the full cost of the project, regardless of who paid for what.

Equivalent rearrangement of Profit formula:
  Total Profit = Net Sale Proceeds − Total Cash Invested
               = (ARV − Sale Costs − Remaining Loan) − Total Cash Invested
               = ARV − Sale Costs − (Total Cash Invested + Remaining Loan)
               = ARV − Sale Costs − Total Project Costs + Sale Costs     ← Sale Costs are in Project Costs
               = ARV − Total Project Costs

So: Total Profit = ARV − Total Project Costs
    AND
    Total Profit = Net Sale Proceeds − Total Cash Invested
Both must give the same answer. If they don't, there's a bug.
```

Annualized ROI formula:
```
Annualized ROI = ((1 + ROI/100)^(12/holdPeriodMonths) − 1) × 100

A 20% ROI over 6 months annualizes to ~44%.

IMPORTANT: Primary ROI is total project ROI (not annualized). 
Annualized ROI is a comparison tool — use it only when comparing projects of DIFFERENT durations,
or when comparing a flip to a rental property IRR or stock market return.
For flips of similar duration, compare raw ROI directly.
```

Amortization formulas (with r=0 special case for seller financing):
```
Hard Money Loan (interest-only, typical for flips):
  Monthly Interest = Loan Amount × (hmInterestRate / 12)
  No principal paid during hold — balloon payoff at sale
  Total Interest over hold = Monthly Interest × holdPeriodMonths

Conventional Loan (amortizing, rare for flips but supported):
  Let:
    P = Loan Amount
    r = convInterestRate / 12 (monthly rate as decimal)
    n = convLoanTermYears × 12 (total amortization months)
    M = holdPeriodMonths (months held before sale)
  
  Monthly Payment:
    IF r > 0:
      Monthly Payment = P × [r × (1+r)^n] / [(1+r)^n − 1]
    ELSE (r = 0, seller carry):
      Monthly Payment = P / n
  
  Remaining Balance after M months:
    IF r > 0:
      Remaining Balance = P × [(1+r)^n − (1+r)^M] / [(1+r)^n − 1]
    ELSE (r = 0):
      Remaining Balance = P × (1 − M/n)
  
  Principal Reduction over hold = P − Remaining Balance
  Total Interest Paid over hold = (Monthly Payment × M) − Principal Reduction

For flips, conventional loans are rare (6-month hold vs 30-year amortization means 
very little principal paid) but supported for completeness.
```

Reverse modes:

Mode 2: Find Max Purchase Price
Given target Total Profit OR target ROI %, solve for maximum purchase price.
```
Solver logic:
- Method: binary search over price range
- Bounds: [$10,000, 2× ARV]
- Tolerance: $500
- Max 100 iterations

CRITICAL: Price affects multiple downstream values:
- Loan amount (if financed as % of price)
- Purchase closing costs (if percentage mode)
- Down payment (for conv financing)
- Loan points (scale with loan amount)
- Monthly interest (scales with loan amount)
- Total Cash Invested
Binary search iteration must recalculate ALL dependent values at each price.

ASSUMPTIONS (stated explicitly):
- ARV stays FIXED (purchase price does not affect ARV)
- Rehab budget stays FIXED at user's input
- Hold period stays FIXED at user's input
- Financing terms stay FIXED (rate, points %, LTC %)
- Holding costs per month stay FIXED (property-related expenses don't change with purchase price)

Edge case: If target not achievable at any price in bounds, return null and 
display "Target profit not achievable with current ARV and rehab assumptions."
```

Mode 3: Find Max Rehab Budget
Given target Total Profit OR target ROI, purchase price fixed, solve for max rehab.
```
Solver logic:
- Method: binary search over rehab range
- Bounds: [$0, ARV − Purchase Price]
- Tolerance: $500
- Max 100 iterations
- Rehab affects: contingency (scales with rehab), total costs, potentially loan amount (if hmLoanCoversRehab)

ASSUMPTIONS (stated explicitly to avoid user confusion):
- Hold period stays FIXED at user's input (does NOT auto-extend with larger rehab)
- Rehab duration stays FIXED at user's input (user must adjust manually if they want longer rehab)
- ARV stays FIXED (a bigger rehab does NOT increase ARV in this solver — ARV is a separate input)
- Financing terms stay FIXED (rate, points, LTC percentage)
- Sale costs stay FIXED as percentage of ARV

This keeps the reverse solve a single-variable problem (rehab only).
If the user wants to model rehab expansion affecting timeline, they should manually 
adjust holdPeriodMonths AND rehabDurationMonths and re-run analyze mode.

Edge case: If target unachievable even with $0 rehab, return null and 
display "Purchase price too high for target — consider lower offer."
```

### 3. INPUT FIELDS

Group by logical section:

Property section:
- purchasePrice (required)
- propertyType (select: SFR / Condo / Small Multi / Townhouse)
- propertyAddress (optional — for share URL context)
- arv — After Repair Value (required, placeholder "Enter after-repair value") — this is THE critical input
- arvConfidence (select: Conservative / Realistic / Optimistic — affects display, not math)

Purchase Costs section:
- purchaseClosingCostsMode (toggle: Percentage / Dollar Amount, default Percentage)
- purchaseClosingCostsPct (default 3%, range 1-5%)
- purchaseClosingCostsDollars (default null, when Dollar mode)

Rehab section:
- rehabBudget (required, placeholder "Enter total rehab budget")
- rehabContingencyPct (default 10%, range 0-20%, helper text "Industry standard 10-15%")
- rehabDurationMonths (default 3, range 1-12, affects holding costs but NOT hold period)
- Helper text: "Rehab typically takes 2-4 months for moderate updates, 4-8 months for gut renovations"

Hold Period section:
- holdPeriodMonths (required, default 6, options 3/4/5/6/7/8/9/10/11/12 — full continuous range, step 1)
- Helper text: "Total months from purchase to sale. Includes rehab time plus market time."
- Validation: if user tries a value > 12 months, show warning "Long flip hold — consider rental strategy instead"

Holding Costs section (monthly):
- holdingMode (toggle: Simple / Detailed, default Simple)
- totalMonthlyHoldingSimple (when simple, placeholder "Enter total monthly holding cost")
- holdingCosts.propertyTax (monthly, annual ÷ 12)
- holdingCosts.insurance (monthly)
- holdingCosts.utilities (monthly, when vacant during rehab)
- holdingCosts.hoa (monthly)
- holdingCosts.other (monthly)

Financing section:
- financingType (select: Hard Money / Conventional / All Cash, default Hard Money)
  
  If Hard Money:
  - hmLoanToCostPct (% of Purchase + Rehab financed, default 80%, range 60-90%)
  - hmInterestRate (default 12%, range 8-15%)
  - hmPointsPct (default 3%, range 0-5% — paid at closing)
  - hmLoanCoversRehab (toggle: Yes/No, default Yes)
  
  If Conventional:
  - convDownPaymentPct (default 25%, range 15-40%)
  - convInterestRate (default 7.5%, range 6-10%)
  - convLoanTermYears (default 30, options 15/20/25/30)
  
  If All Cash:
  - No financing inputs needed

Sale Costs section:
- saleCostsPct (default 8%, range 6-10%, helper "Broker commission 5-6% + closing 2-3%")

Reverse mode targets:
- targetTotalProfit (dollar amount)
- targetROI (% amount)
- User picks which one for reverse mode solve

Full field schema per field should include: key, label, placeholder (TEXT instruction, not number), helper text, input type, range validation.

PLACEHOLDER RULE: All placeholders are TEXT instructions ("Enter rehab budget"), NEVER number examples ("e.g. $35,000"). This is a hard rule from Master Prompt.

### 4. CALCULATION MODES

Three modes (matching other calculators for consistency — short kebab-case keys):

```
Mode key:       'analyze'         — UI label: "Analyze Fix and Flip" (standard, primary mode)
Mode key:       'find-price'      — UI label: "Find Max Purchase Price" (given target Profit or ROI)
Mode key:       'find-rehab'      — UI label: "Find Max Rehab Budget" (given target Profit or ROI)
```

Naming convention note: Mode keys follow the same short-kebab-case pattern as other RealCalc 
calculators (Rental Property uses 'find-rent' / 'find-price'; DSCR uses 'find-loan' / 'find-noi'). 
The short keys are used internally (URL params, computed properties); user-facing labels 
are the full descriptive titles shown in the mode selector tabs.

Color families:
- analyze → amber (Standard)
- find-price → blue (Reverse #1)
- find-rehab → emerald (Reverse #2)

### 5. PRIMARY RESULT

- Display format: Dual display — Total Profit $ as main number, ROI % below with time context
- Example display:
  ```
  Total Profit
  $52,400
  
  ROI: 42.1% over 6 months
  Annualized ROI: 101%
  ```
- Decimals: 0 for dollars, 1 for percentages
- Font size behavior: shrinks for extreme values
- Primary color: dynamic based on badge tier (keyed to ROI %)

### 6. BADGE / TIER SYSTEM

ROI % tiers calibrated for 2026 flip market (6-month typical hold):

```
Tier 1: ≥ 50% ROI — Exceptional
  Label:        Exceptional
  bg1 color:    #059669
  bg2 color:    #047857
  Meaning:      Top-quartile flip. Usually requires deep-value acquisition, 
                major scope of work, or rapidly appreciating market.

Tier 2: 30%–49% ROI — Strong
  Label:        Strong
  bg1 color:    #10B981
  bg2 color:    #059669
  Meaning:      Above-average flip return for 2026. Healthy margin of safety 
                for execution risk and market softness.

Tier 3: 20%–29% ROI — Solid
  Label:        Solid
  bg1 color:    #F59E0B
  bg2 color:    #D97706
  Meaning:      Market-average for 2026 flips with hard money. Acceptable 
                if execution risk is well-managed.

Tier 4: 10%–19% ROI — Weak
  Label:        Weak
  bg1 color:    #F97316
  bg2 color:    #EA580C
  Meaning:      Below-market return. Execution risk often exceeds profit margin. 
                Consider only if exceptional market or low-risk project.

Tier 5: 0%–9% ROI — Critical
  Label:        Critical
  bg1 color:    #DC2626
  bg2 color:    #B91C1C
  Meaning:      Barely positive. Any overrun on time, budget, or ARV produces 
                a loss. Reconsider deal structure or walk.

Tier 6: < 0% ROI — Loss
  Label:        Loss
  bg1 color:    #7F1D1D
  bg2 color:    #991B1B
  Meaning:      Deal is projected to lose money. Do not proceed without 
                significant changes to price, scope, or exit.
```

Important context: These tiers assume 6-month hold with hard money financing. Flips held 3-4 months produce lower ROI on same profit (less time leverage); flips held 10-12 months show higher ROI compression from holding costs.

### 7. INSIGHT TEXT (DEAL CONTEXT)

For each tier, 2-3 sentences:

```
"ROI of [value] over [N] months with [financing type] is in the [tier] range by 2026 
US flip market norms. [Context about what drives this result]. Major factor: [top 
contributor — acquisition discount / rehab scope / ARV confidence / holding cost drag]. 
[Actionable guidance]."
```

Must mention:
- ROI value + hold period
- 70% Rule compliance (within rule or outside)
- If Total Profit is thin relative to Total Cash Invested, flag it
- 2026 rate environment context

### 8. KEY DERIVED METRICS

Four metric cards in the right column:

Metric 1: 70% Rule Max Offer
- Formula: (ARV × 0.70) − Rehab Budget
- Format: currency
- Status indicator:
  - Within rule (Purchase Price ≤ 70% Max) = green checkmark
  - Outside rule (Purchase Price > 70% Max) = amber warning
- Hover hint: "Industry heuristic for max safe offer. Deals outside the rule carry higher risk."

Metric 2: Break-Even Sale Price
- Formula: (Total Costs + Remaining Loan) ÷ (1 − Sale Costs %)
- Format: currency
- Comparison: shown as dollars below ARV
  - "ARV $280K vs Break-Even $215K = $65K cushion"
  - Cushion as % of ARV also shown
- Hover hint: "Minimum sale price for $0 profit. Margin below this is your profit buffer."

Metric 3: Annualized ROI
- Formula: ((1 + ROI/100)^(12/months) − 1) × 100
- Format: percentage with 1 decimal
- Thresholds:
  - ≥ 60% annualized = exceptional
  - 40-59% = strong
  - 20-39% = solid
  - < 20% = weak
- Hover hint: "ROI adjusted to 12-month equivalent. Compare to rental property IRR or stock returns."

Metric 4: Profit per Month
- Formula: Total Profit ÷ holdPeriodMonths
- Format: currency
- Thresholds (context-dependent — vary by market and deal size):
  - Rough guideline for standard $150K-$350K deals in mid-tier US markets:
    - ≥ $10,000/month = strong project
    - $5,000-10,000 = solid project
    - < $5,000 = reconsider time commitment vs wage labor
  - For low-entry markets (Ohio, parts of Texas, Midwest) where deals are $80K-$150K:
    - $3,000-5,000/month is typical and acceptable
  - For high-cost markets (California, NYC, Seattle) where deals are $500K+:
    - $15,000+/month may be needed to justify capital deployment
- Hover hint: "Profit divided by months invested. Tells you your 'effective monthly wage' for this project. Compare against your local opportunity cost."
- Display note: Show a subtle "For standard mid-tier US markets — adjust for your deal size" caveat next to the threshold labels.

### 9. SENSITIVITY ANALYSIS

Multi-variable sensitivity because flip profit depends on multiple drivers:

Primary sensitivity — ARV × Rehab Overrun:
```
Rows:     ARV at -10%, -5%, target, +5%, +10% (5 scenarios)
Columns:  Rehab at +0%, +15%, +30% overrun (3 scenarios)
Cell:     Total Profit $
```

Secondary sensitivity — Hold Period × Hard Money Rate:
```
Rows:     Hold 4, 6, 8, 10 months
Columns:  HM Rate 10%, 12%, 14%
Cell:     Total Profit $ and ROI %
```

Tertiary — Purchase Price sensitivity:
```
Rows:     Purchase -$10K, -$5K, current, +$5K, +$10K, +$15K, +$20K
Columns:  Total Profit, ROI, vs 70% Rule compliance
```

### 10. SCENARIO ANALYSIS

Three scenarios with realistic multipliers:

```
Conservative (realistic downside):
  ARV × 0.92                  (-8% on sale price)
  Rehab × 1.20                (+20% budget overrun)
  Rehab Duration × 1.3        (longer rehab = more holding costs)
  Hold Period + 2 months      (harder to sell in soft market)
  HM Rate + 1%                (rate environment harder)

Base:
  (user inputs as entered)

Optimistic (realistic upside, NOT hype):
  ARV × 1.05                  (+5% above user estimate — modest premium)
  Rehab × 0.95                (-5% if tight bid management)
  Hold Period − 1 month       (fast sale in hot market)
  NOTE: Optimistic outcomes are rare in competitive 2026 markets — treat as 
  best-case reference, not a planning baseline.
```

Multiplier rationale: 
- Conservative reflects typical flip risk: ARV misses happen in soft markets (5-10% is realistic), rehab overruns are ubiquitous (20% is mild)
- Optimistic is intentionally modest — hot flip markets can push ARV 10%+ but assuming hot market for every deal is reckless. In 2026 with elevated rates and tighter buyer pool, optimistic outcomes are rarer than in 2018-2021.
- Spread brackets ~80% of realistic outcomes
- Plan your deal from Base scenario, use Conservative for stress-testing, use Optimistic only to verify "am I completely misjudging the upside?"

Show Total Profit and ROI for each scenario side-by-side in 3-column table.

### 11. VISUALIZATION BREAKDOWN

Cost Composition Waterfall (shows where money goes):

```
Stage 1: Purchase Price                 (base, largest)
Stage 2: + Purchase Closing             (small addition)
Stage 3: + Rehab + Contingency          (significant)
Stage 4: + Holding Costs                (compounds with months)
Stage 5: + HM Points                    (one-time)
Stage 6: + HM Interest                  (compounds with months)
Stage 7: + Sale Costs                   (at exit)
Total:   = Total Costs

ARV:     (shown as separate ceiling)
Profit:  ARV − Total Costs (green bar = positive, red = negative)
```

Timeline Chart (visual project schedule):
```
Month 0: Close purchase, start project
Month 1-N: Rehab in progress (holding costs compounding)
Month N+1 to End: On market (holding costs continuing)
End Month: Sale, payoff loan, receive proceeds
```

### 12. WARNINGS & VALIDATION

- Missing critical inputs (price, ARV, rehab, hold period)
- Purchase Price > 70% Rule Max (warning: "Outside 70% Rule — high risk")
- ARV ≤ Purchase Price + Rehab (warning: "ARV barely covers basis — no margin")
- Rehab budget < 5% of Purchase Price (warning: "Rehab may be unrealistically low for most flips")
- Rehab budget > 60% of Purchase Price (warning: "Heavy rehab — confirm scope")
- Rehab Duration > Hold Period (warning: "Rehab longer than hold period — adjust")
- Hold Period > 12 months (warning: "This is a long hold — consider rental instead")
- Holding costs > 1.5% of Purchase Price per month (warning: "Holding costs high")
- HM Rate > 15% (warning: "Rate above typical 2026 range — verify lender quote")
- HM Points > 5% (warning: "Points above typical 2026 range")
- Total Cash Invested > Purchase Price + Rehab + 20% (sanity check — usually input error)
- ROI > 200% (sanity check — usually ARV error)
- ROI < -50% (sanity check — usually cost error)

### 13. PROJECT TIMELINE TABLE (core feature)

Month-by-month breakdown shown in UI:

```
| Month | Phase                 | Cumulative Cost | Cumulative Holding | Notes                        |
| 0     | Closing               | $[purchase]     | $0                 | Purchase + closing costs     |
| 1     | Rehab                 | $[+15%]         | $[+1mo holding]    | Rehab draw, holding begins  |
| 2     | Rehab                 | $[+15%]         | $[+2mo]            |                              |
| 3     | Rehab complete        | $[+rehab total] | $[+3mo]            | Project staged for market    |
| 4     | On market             | $[same]         | $[+4mo]            |                              |
| 5     | On market / contract  | $[same]         | $[+5mo]            |                              |
| 6 Exit| SALE                  | $[+sale costs]  | $[+6mo]            | Proceeds − loan = net        |
```

Include row for Exit Month showing Net Sale Proceeds separately.

### 14. BENCHMARKS BY PROPERTY TYPE (2026, 6-month typical flip)

```
| Property Type        | Conservative ROI | Typical ROI | Strong ROI |
| SFR flip (cosmetic)  | 10-18%           | 18-28%      | 28-40%     |
| SFR flip (moderate)  | 15-22%           | 22-32%      | 32-45%     |
| SFR flip (gut)       | 18-28%           | 28-40%      | 40-55%     |
| Condo flip           | 8-15%            | 15-22%      | 22-30%     |
| Townhouse flip       | 10-18%           | 18-28%      | 28-38%     |
| Small multi flip     | 12-20%           | 20-30%      | 30-42%     |
```

Label as: "Industry-standard estimates based on 2026 hard money financing at 75% LTC. Individual flips vary significantly based on market, scope, and execution."

### 15. BENCHMARKS BY STATE (8 states)

For California, Texas, Florida, New York, Arizona, Georgia, Ohio, Pennsylvania (flip-friendly mix):

```
State: [name]
Typical flip ROI (6-month): [range]
Key markets: [top 3]
Market characteristics: [2 specific factors driving ROI — REQUIRED to name TWO factors minimum]
Notes: [2 sentences about what drives flip returns in this state]
```

Each state MUST name at least TWO specific factors:
- California → high ARVs + long permitting timelines (factor 1: high prices; factor 2: permit delays)
- Texas → balanced costs + no state income tax (factor 1: affordable labor; factor 2: tax benefit)
- Florida → strong demand + high insurance (factor 1: population growth; factor 2: insurance cost drag)
- New York → rent regulation + high permit costs (factor 1: regulatory environment; factor 2: permit fees)
- Arizona → growing population + wildfire insurance (factor 1: demand growth; factor 2: emerging insurance drag)
- Georgia → Atlanta metro strength + moderate labor costs (factor 1: metro growth; factor 2: labor availability)
- Ohio → low entry prices + stagnant ARVs (factor 1: affordable inventory; factor 2: limited appreciation)
- Pennsylvania → Philadelphia/Pittsburgh variance + older housing stock (factor 1: metro variance; factor 2: aging homes requiring more rehab)

Add explicit label: "Industry-standard estimates — not market-reported flip ROI statistics."

### 16. ASSET CLASS CONTEXT

For SFR (light/moderate/gut) / Condo / Townhouse / Small Multi: typical ROI range + 2-sentence explanation of driver mix.

### 17. TEST CASES

TOLERANCE RULE: 
- ±0.5% for ROI percentage
- ±$100 for multi-line dollar amounts (profit, net proceeds)
- ±$50 for single-line dollar amounts (monthly holding)

Write 6 test cases:

Test 1: Standard SFR flip with hard money
- Financing: Hard Money
- Purchase $180K, ARV $280K, Rehab $45K, Contingency 10%, Hold 6 months
- HM: 80% LTC, 12% rate, 3 points
- Holding: $600/month
- Sale Costs: 8%
- Expected Total Profit: with tolerance ±$100
- Expected ROI: with tolerance ±0.5%
- Expected 70% Rule check: Purchase ≤ $151K target, so $180K = OUTSIDE 70% Rule
- Expected tier: Solid or Strong

Test 2: All-cash flip
- Financing: All Cash
- Purchase $120K, ARV $185K, Rehab $25K, Rehab Contingency 10%, Hold 4 months
- Monthly Holding: $400
- Purchase Closing: 3%
- Sale Costs: 8%
- Expected: No loan math, no points, no interest
- Verify Total Cash Invested = Purchase $120K + Closing $3,600 + Rehab $25K + Contingency $2,500 + Total Holding Costs ($400 × 4 = $1,600) + Sale Costs ($185K × 8% = $14,800) = $167,500
- NOTE: Total Holding Costs is 4 months × $400 = $1,600 (actual cash outflow), NOT a reserve
- Verify Loan Amount = 0, Loan Points = 0, Total Loan Interest = 0
- Verify Remaining Loan Balance = 0
- Expected Total Profit = ARV ($185K) − Sale Costs ($14,800) − Total Cash Invested ($167,500) = $2,700
- Expected ROI ≈ 1.6% (Critical tier — a slim all-cash deal)
- Verify consistency identity: Total Project Costs = Total Cash Invested + Remaining Loan Balance ($167,500 + $0 = $167,500)

Test 3: Find Max Purchase Price (reverse)
- Target ROI: 25%
- ARV $320K, Rehab $60K, Hold 6 months
- HM: 75% LTC, 12% rate, 3 points
- Expected max purchase price with tolerance ±$500
- Must account for price affecting loan amount AND closing costs AND Total Cash Invested

Test 4: Loss scenario (negative ROI)
- Over-priced acquisition or rehab overrun producing negative ROI
- Example: Purchase $220K, ARV $260K, Rehab $55K, Hold 8 months, HM 12%, Points 3%
- Expected tier: Loss (dark red)
- Expected Total Profit: negative dollar amount
- Verify break-even sale price > ARV (deal fails)

Test 5: Conventional financing flip
- Financing: Conventional
- Purchase $200K, ARV $290K, Rehab $40K, Hold 7 months
- Conv: 25% down, 7.5% rate, 30-year term
- Verify amortization produces correct interest during hold
- Verify lower financing cost than Hard Money equivalent
- Note: conventional 7-month hold is unusual but supported

Test 6: 70% Rule verification
- Set up deal where Purchase Price = exactly 70% Rule Max
- Verify indicator shows "Within rule" / "At rule limit"
- Then adjust Purchase Price ±$5K and verify indicator flips
- Tests the 70% Rule boundary logic

### 18. URL PARAMETERS

Short param names:
- purchasePrice → pp
- arv → av
- arvConfidence → ac
- rehabBudget → rb
- rehabContingencyPct → rc
- rehabDurationMonths → rd
- holdPeriodMonths → hp
- holdingMode → hm
- totalMonthlyHoldingSimple → hs
- holdingCosts.propertyTax → hpt (and similar for each holding cost item)
- financingType → ft (values: 'hm', 'conv', 'cash')
- hmLoanToCostPct → hltc
- hmInterestRate → hir
- hmPointsPct → hpp
- hmLoanCoversRehab → hcr
- convDownPaymentPct → cdp
- convInterestRate → cir
- convLoanTermYears → clt
- purchaseClosingCostsMode → cm
- purchaseClosingCostsPct → cp
- purchaseClosingCostsDollars → cd
- saleCostsPct → sc
- targetTotalProfit → tp
- targetROI → tr
- propertyType → pt
- mode → md

URL param interaction rule: 
- When `ft=hm`, parse all hm* fields, ignore conv* fields
- When `ft=conv`, parse all conv* fields, ignore hm* fields
- When `ft=cash`, ignore all financing fields

### 19. EDGE CASES

```
All fields empty:                    result = —
Missing critical inputs:             disable result, show hint
Hold period 3 months:                calculate, minimum supported
Hold period 12 months:               calculate, maximum supported — warn about becoming a rental
ARV ≤ Purchase + Rehab:              calculate negative profit, show Loss tier with warning
Rehab = $0:                          calculate (light flip / wholesale-style deal)
Rehab > 50% of Purchase:             calculate but warn "Heavy rehab"
Hard money with 0 points:            allow (some lenders offer no-points at higher rate)
Hard money not covering rehab:       rehab entirely from cash, HM only covers purchase
All-cash with rehab draws:           cash invested upfront, no financing line
Conventional + 6-month flip:         unusual but allowed — amortization during hold
Interest rate = 0:                   allow (seller financing) — use r=0 amortization branch:
                                     Monthly Payment = P / n, Balance = P × (1 − M/n)
70% Rule boundary (Purchase = exactly 70% Rule Max):  indicator shows "At rule limit"
Very high ARV (>3× Purchase):        sanity check, warn "Verify ARV"
Very low profit (<$5K):              still calculate, may show Critical or Loss tier
Purchase Price = $0:                 validation error
Negative profit with high ROI bug:   if profit < 0, ROI must also be negative — check math
Holding costs exceed profit:         calculate, result may be Loss tier
```

---

## OUTPUT CHECKLIST

Before finalizing, verify:

- [ ] All 19 sections present in correct order
- [ ] Dual primary metrics specified: Total Profit $ AND ROI % (co-primary, both shown)
- [ ] Hold period is in MONTHS, not years (3/4/5/6/7/8/9/10/11/12 options — full continuous range)
- [ ] **Break-Even Sale Price formula uses Total Cash Invested, NOT Total Project Costs (prevents double-counting Sale Costs)**
- [ ] **Break-Even formula: (Total Cash Invested + Remaining Loan Balance) ÷ (1 − saleCostsPct)**
- [ ] **Consistency identity documented: Total Project Costs = Total Cash Invested + Remaining Loan Balance**
- [ ] **Two equivalent Profit formulas reconcile: Profit = Net Proceeds − Cash Invested = ARV − Total Project Costs**
- [ ] **Down Payment in HM mode: Purchase Price × (1 − hmLoanToCostPct), uniform formula regardless of hmLoanCoversRehab**
- [ ] **Test 2 specifies exact dollar amounts with Total Holding Costs (NOT reserve): $400 × 4 months = $1,600 real outflow**
- [ ] **Test 2 verifies consistency identity: Project Costs = Cash Invested + Remaining Loan Balance**
- [ ] Hold period is in MONTHS, not years (3/4/5/6/7/8/9/10/11/12 options — full continuous range)
- [ ] Hard Money as default financing, Conventional and All Cash as toggles
- [ ] 70% Rule Max Offer as Metric 1 in derived cards with within/outside indicator
- [ ] Break-Even Sale Price as Metric 2 derived
- [ ] Annualized ROI as Metric 3 derived (with note that Primary ROI is total, not annualized)
- [ ] Profit per Month as Metric 4 derived — with CONTEXT-DEPENDENT thresholds (low-entry / mid-tier / high-cost markets)
- [ ] No multi-year projection — single-period flip math
- [ ] **Definitions block at top of Formula section specifies Holding Costs EXCLUDES loan interest**
- [ ] **Loan Costs = Points + Interest, documented as separate from Holding Costs**
- [ ] **NO double-counting: interest appears in Loan Costs only, NEVER in Holding Costs**
- [ ] **Total Cash Invested INCLUDES Total Holding Costs (actual cash outflow) — NOT just a reserve**
- [ ] **Total Cash Invested INCLUDES Total Loan Interest (actual cash outflow to lender)**
- [ ] **Cash mode explicitly sets: Loan Amount = 0, Loan Points = 0, Total Loan Interest = 0**
- [ ] **Conventional loan interest formula includes Principal Reduction definition**
- [ ] **Remaining Balance formula has both r>0 and r=0 branches**
- [ ] **Break-Even Sale Price uses Total Cash Invested, NOT Total Project Costs (would double-count Sale Costs)**
- [ ] **Formula section includes Consistency Identity: Total Project Costs = Total Cash Invested + Remaining Loan Balance**
- [ ] **Both profit forms must give same answer: (Net Sale Proceeds − Total Cash Invested) = (ARV − Total Project Costs)**
- [ ] **Down Payment in Hard Money mode = Purchase Price × (1 − hmLoanToCostPct), regardless of hmLoanCoversRehab toggle**
- [ ] **Test 2 (all-cash) explicitly verifies Total Holding Costs as actual cash outflow, NOT reserve**
- [ ] **Test 2 explicitly verifies consistency identity: Total Project Costs = Total Cash Invested + Remaining Loan Balance**
- [ ] 6 tiers: Exceptional / Strong / Solid / Weak / Critical / Loss — calibrated for 2026 6-month flip
- [ ] Placeholder rule: all input placeholders are "Enter X" text, NEVER "e.g. $35,000" numbers
- [ ] Amortization has r=0 special case for seller financing
- [ ] Hard Money formulas: interest-only monthly, points paid upfront
- [ ] Reverse mode Find Max Purchase Price uses binary search with price interdependencies
- [ ] **Reverse modes state EXPLICIT assumptions: ARV fixed, rehab fixed, hold period fixed, financing terms fixed**
- [ ] Reverse mode Find Max Rehab uses binary search
- [ ] Both reverse modes return null + message if target unachievable
- [ ] 6 test cases with correct tolerance rules (±0.5% ROI, ±$100 dollar)
- [ ] Test 1: standard hard money flip
- [ ] Test 2: all-cash flip (no financing math — verifies Loan Amount = 0, Points = 0, Interest = 0) WITH EXPLICIT DOLLAR MATH and consistency identity verification
- [ ] Test 5: conventional financing flip (verifies Principal Reduction and Remaining Balance formulas work)
- [ ] Test 6: 70% Rule boundary verification
- [ ] 2026 hard money rate environment (~12%) reflected in benchmarks
- [ ] Benchmarks labeled as "industry-standard estimates — not market-reported"
- [ ] State benchmarks name AT LEAST TWO specific factors per state (not one)
- [ ] ROI tiers assume 6-month hold (noted in commentary)
- [ ] Warnings cover 70% Rule violation, negative profit, rehab overrun, holding cost drag
- [ ] Before-tax analysis label required throughout — no after-tax returns in v1
- [ ] 3 modes: analyze, find-price, find-rehab (short kebab-case keys, consistent with other calculators)
- [ ] Color families: amber / blue / emerald
- [ ] Financing type toggle has URL param (ft=hm/conv/cash)
- [ ] URL param interaction rule documented (hm fields ignored when ft=conv, etc.)
- [ ] Edge case for r=0 (seller financing) requires special-case formula
- [ ] 3 sensitivity tables: ARV×Rehab Overrun, Hold×HM Rate, Purchase Price variation
- [ ] Scenarios use REALISTIC multipliers (Conservative 0.92×, Optimistic 1.05×)
- [ ] **Optimistic scenario has explicit note: "rare in competitive 2026 markets — treat as best-case reference"**
- [ ] **Primary ROI described as total project ROI, not annualized (Annualized ROI is comparison tool only)**
- [ ] Project Timeline table (Section 13) shows month-by-month cumulative costs

Output only the RIS specification. Do not output code. Do not output HTML. Do not output Vue. This is a spec document that will be consumed by the Master Prompt later.
