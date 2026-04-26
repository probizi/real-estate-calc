# RIS Prompt — Rent vs Buy Calculator — v1

You are a senior real estate finance engineer and SEO-focused product designer. Your job is to produce a **complete Requirements & Implementation Specification (RIS)** for the Rent vs Buy Calculator page.

This RIS is the source of truth for formulas, logic, thresholds, and test cases. It will be paired with a separate SEO package prompt (rent-vs-buy-seo-prompt.md) and the Master Prompt to generate the actual Vue page.

---

## CALCULATOR IDENTITY

```
Calculator Name:    Rent vs Buy Calculator
Slug:               rent-vs-buy-calculator
Primary metric:     Break-Even Year (when buying creates more net wealth than renting)
Secondary metrics:  Net Cost of Buying (lifetime), Net Cost of Renting (lifetime),
                    Monthly Buy Cost vs Rent, Year 5 / 10 / 30 Wealth Comparison
Primary keyword:    rent vs buy calculator
Secondary keywords: rent or buy calculator, should I rent or buy calculator,
                    rent vs buy a house calculator, buying vs renting calculator,
                    rent vs own calculator, home buy vs rent calculator
Traffic priority:   Priority 2 FLAGSHIP (estimated 40,000-60,000 searches/month — 
                    highest-traffic remaining calculator)
Target audience:    PRIMARILY homebuyers and renters considering a primary residence 
                    decision. Different audience from rest of RealCalc hub (investors). 
                    Secondary audience: investors evaluating live-in flip or househack.
```

---

## CRITICAL POSITIONING (read first — drives all decisions)

This is the **FIRST non-investor calculator** in the RealCalc hub. Audience and tone differ significantly from Mortgage Investment, Rental Property, Fix and Flip, etc.

**Key positioning differences from the rest of the hub:**

1. **Audience = primary residence decision makers**, not real estate investors. Tone less technical.
2. **No DSCR, no Cap Rate, no Cash-on-Cash** — these don't apply to primary residences.
3. **Default rate = consumer mortgage rate (6.75% in 2026)**, NOT investor rate.
4. **Down payment defaults 10-20%** (typical primary residence range), not 25%.
5. **Tax treatment different** — mortgage interest deduction up to $750K loan, SALT-capped property taxes.
6. **Opportunity cost central** — money used for down payment + closing could earn investment returns instead. This is THE key insight rent vs buy analysis must capture.
7. **Lifestyle factors acknowledged** — flexibility, mobility, customization, maintenance burden — calculator can't quantify everything, must say so.

**Workflow positioning:**
```
Rent vs Buy Calculator → 
  → If "Buy wins": Mortgage Calculator (consumer rates) for payment details
  → If "Rent wins": stay renting, revisit annually
  → For investors: redirect to Mortgage Investment / Rental Property / etc.
```

The Rent vs Buy Calculator sits at the **lifestyle decision** stage — most users haven't decided yet whether to enter homeownership at all.

---

## THREE MODES

### Mode 1 — Standard Comparison (default, slate)
Side-by-side comparison: Buy scenario vs Rent scenario over user-selected hold period (default 7 years). Outputs Break-Even Year + lifetime cost comparison.

### Mode 2 — Detailed with Opportunity Cost (sky) — **RECOMMENDED**
Mode 1 PLUS: opportunity cost of down payment + closing costs invested in stocks at user-selected return rate (default 7%). Critical for honest comparison — most simple calculators ignore this.

**v2 round 2 expert fix — UI labeling and default:**

```
Tab label MUST display: "Detailed (with opportunity cost) — Recommended"
Or visually: tab name "Detailed" with small "Recommended" badge

When user lands on Mode 1 default, show non-blocking info banner above results:

  ⓘ Mode 1 ignores opportunity cost — what your down payment 
    could have earned invested elsewhere. For honest comparison, 
    [Switch to Mode 2 (Recommended) →]

The link/button switches modes immediately, preserving inputs.

Rationale: omitting opportunity cost is the #1 flaw of simple rent-vs-buy 
calculators. By making Mode 2 the recommended path with subtle nudging 
(not forcing), users get more honest results without alienating those who 
want simpler analysis.
```

### Mode 3 — Lifestyle Adjusted (warm gray, advanced)
Mode 2 PLUS user-weighted lifestyle factors:
- Mobility importance (1-10)
- Maintenance tolerance (1-10)
- Customization desire (1-10)
- Stability preference (1-10)

Output: weighted recommendation with explicit acknowledgment of subjectivity. Useful for users who want non-financial factors quantified.

---

## INPUT SCHEMA

### Required (all modes)

| Field | Type | Default | Notes |
|---|---|---|---|
| Home Price | currency | empty | Purchase price of comparable home |
| Monthly Rent | currency | empty | Current/expected rent for equivalent housing |
| Hold Period (years) | select | 7 | Options: 3 / 5 / 7 / 10 / 15 / 30 |
| Mortgage Rate % | percent | 6.75 | 2026 CONSUMER rate (not investor) |
| Down Payment % | percent | 20 | Typical primary residence; can go to 3% |

### Buy Scenario (auto-collapsed if defaults OK)

| Field | Type | Default | Notes |
|---|---|---|---|
| Loan Term (years) | select | 30 | Options: 15 / 20 / 30 |
| Annual Property Tax | currency OR percent | 1.2% of price | Toggleable |
| Annual Home Insurance | currency | $1,500 | Primary residence rate |
| HOA Fees (monthly) | currency | 0 | If applicable |
| Home Appreciation % | percent | 3.5 | National long-term average |
| Annual Maintenance % | percent | 1.5 | % of home value/year |
| Closing Costs % | percent | 3 | Buyer-side closing |
| Selling Costs % | percent | 7 | Realtor + transfer + prep when sold |
| PMI Rate % (if applicable) | percent | 0.6 | Auto if down < 20% |

### Rent Scenario

| Field | Type | Default | Notes |
|---|---|---|---|
| Annual Rent Increase % | percent | 3 | Typical lease increase |
| Renter's Insurance | currency | $200/year | Default |
| Security Deposit | currency | 1× monthly rent | Recovered at end |

### Mode 2 Additional (Opportunity Cost)

| Field | Type | Default | Notes |
|---|---|---|---|
| Investment Return % | percent | 7 | S&P 500 historical avg (after inflation 5%) |
| Tax Rate on Investment | percent | 15 | Long-term capital gains |

### Mode 3 Additional (Lifestyle Factors, 1-10 scales)

- Mobility importance (default 5) — higher = renting favored
- Maintenance tolerance (default 5) — higher = buying favored  
- Customization desire (default 5) — higher = buying favored
- Stability preference (default 5) — higher = buying favored

### Advanced (collapsible)

| Field | Type | Default | Notes |
|---|---|---|---|
| Marginal Tax Bracket | percent | 24 | Federal — for mortgage interest deduction |
| State Income Tax | percent | 5 | For SALT estimation |
| Itemize Deductions | boolean | auto | Higher of itemized vs standard $14,600 single / $29,200 married |
| Filing Status | select | married | Single / Married / Head of Household |

---

## OUTPUT SCHEMA

### Primary Metric Card (Mode 1, default — v2 round 1 expert fix: wealth-based language)

```
┌─────────────────────────────────────────────┐
│  Break-Even Year                            │
│                                             │
│              Year 6                         │  ← big number
│                                             │
│  Buying creates more net wealth than        │
│  renting after 6 years at these             │
│  assumptions.                               │
│                                             │
│  Year 7 net wealth advantage: +$X           │  ← supporting context
└─────────────────────────────────────────────┘
```

**OR** (if Buy never produces more net wealth within hold period):

```
┌─────────────────────────────────────────────┐
│  Renting Creates More Wealth                │
│                                             │
│  Within {hold period}-year window,          │
│  renting + investing saved capital          │
│  produces ${X} more net wealth than         │
│  buying.                                    │
│                                             │
│  Reconsider buying if: hold 10+ years,      │
│  rates drop, rent rises faster, or          │
│  investment returns disappoint.             │
└─────────────────────────────────────────────┘
```

**Methodology note (small text below card):**
"Net wealth comparison includes equity buildup vs. invested capital growth. Both paths track equally — initial cash difference and ongoing monthly cost difference are invested in stock market for whichever side pays less. See Methodology for full formula."

### Secondary Metrics (always shown)

| Output | Formula | Purpose |
|---|---|---|
| **Final Net Wealth (Buy)** | Net Sale Proceeds − Initial Capital − Cumulative Costs + Buyer Investment Value | Wealth at end of Hold Period from buying path |
| **Final Net Wealth (Rent)** | After-Tax Investment Value − Cumulative Rent − Initial Capital (Rent) | Wealth at end of Hold Period from renting + investing path |
| **Wealth Difference at Hold End** | Final Net Wealth (Buy) − Final Net Wealth (Rent) | Direct wealth advantage (positive = buy wins) |
| **Monthly Buy Cost** | P&I + Tax + Insurance + PMI + HOA + Maintenance | All-in monthly housing cost |
| **Monthly Rent Cost** | Rent + Renter's Insurance | All-in monthly rent cost |
| **Initial Capital Required (Buy)** | Down + Closing | Cash needed to enter |
| **Initial Capital Required (Rent)** | Security Deposit + First Month | Cash needed to rent |

### Mode 2 Wealth Comparison Metrics (Opportunity Cost — v2 round 1 expert fix)

| Output | Formula | Purpose |
|---|---|---|
| **Renter Investment Value Year N** | Initial Capital Diff + Annual Cash Flow Diff savings, compounded at Investment Return | Total invested wealth from renting path |
| **Buyer Investment Value Year N** | Annual savings (when rent > buy monthly) compounded at Investment Return | Mode 2: implicit savings from cheaper buy path, invested |
| **After-Tax Investment Gain** | Pre-Tax Gain × (1 − LTCG tax rate) | Realistic post-tax investment outcome |
| **Net Wealth Difference Year 5 / 10 / 30** | Net Wealth (Buy)_t − Net Wealth (Rent)_t | Wealth advantage at key milestones

### Mode 3 Lifestyle-Adjusted Output

```
Financial Recommendation:    BUY (Year 6 break-even)
Lifestyle Adjustment:         +2 score for STAY (high mobility importance)

WEIGHTED RECOMMENDATION:      LEAN RENT (despite financial favoring buy)

Notes: At your mobility importance of 8/10, the financial savings from 
buying ($X over 7 years) may not justify reduced flexibility. Consider 
renting and revisiting in 2-3 years if your stability needs change.
```

### Status Badge (based on Break-Even Year vs Hold Period)

- **Buy in ≤ 3 years** within hold: GREEN "Buying Strongly Favored"
- **Buy in 4-7 years** within hold: BLUE "Buying Favored"  
- **Buy in 8-15 years** within hold: AMBER "Marginal — Lifestyle Factors Decide"
- **Buy never** within hold: RED "Renting Favored at These Assumptions"

### Wealth Comparison Chart (Mode 2/3)

Line chart with 2 lines over hold period years:
- Buy path (slate): Net Wealth = Home Value − Loan Balance − Cumulative Costs
- Rent path (sky): Net Wealth = Invested Down Payment × (1 + return)^t − Cumulative Rent

X-axis crossover point = Break-Even Year (highlighted with vertical line).

### Scenarios Comparison Cards (3 required)

```
[CONSERVATIVE]            [BASE]                  [OPTIMISTIC]
Rate +1pp, Apprec −1pp    Your inputs              Rate −0.5pp, Apprec +1pp
Renting favored           Break-Even: Year 6       Buy favored Year 4
```

---

## CALCULATION ENGINE

### Phase 1 — Validate Inputs

```
IF Home Price ≤ 0 OR Monthly Rent ≤ 0 OR Mortgage Rate ≤ 0
   OR Hold Period not in {3,5,7,10,15,30} 
   OR Down Payment % > 100 OR Mortgage Rate > 25:
  → Display error state
  → Do NOT compute

IF Home Price < $50K OR Home Price > $10M:
  → Display warning, continue calculation
```

### Phase 2 — Buy Scenario Math (v2 round 1 expert fix — single accounting, no double-count)

```
Down Payment Amount = Home Price × Down Payment %
Loan Amount = Home Price − Down Payment Amount
Closing Costs = Home Price × Closing Costs %

Initial Capital (Buy) = Down Payment + Closing Costs

Monthly P&I = standard amortization formula (see RIS Mortgage Investment)
Monthly Property Tax = Annual Tax / 12
Monthly Insurance = Annual Insurance / 12
Monthly PMI = (if down < 20%) Loan × PMI Rate / 12 else 0
  PMI auto-cancels when LTV reaches 78% (see Rule 6)
Monthly HOA = HOA / 1

Monthly Maintenance_t = Home Value_t × Maintenance % / 12
  (v2 round 1 expert fix: scales with current home value, not purchase price.
   Real-world maintenance grows with home value over time.)

For each year t in 1..Hold Period:
  Home Value_t = Home Price × (1 + Appreciation)^t
  Loan Balance_t = remaining balance from amortization schedule
  Equity_t = Home Value_t − Loan Balance_t
  
  Annual Buy Cost_t = (P&I + Tax + Insurance + PMI_t + HOA + Maintenance_t) × 12
    where PMI_t = 0 once auto-canceled at 78% LTV
  
  Tax Deduction_t = (see Rule 4 — itemize logic + SALT cap + $750K loan cap)
  After-Tax Buy Cost_t = Annual Buy Cost_t − Tax Deduction_t
  
  Cumulative After-Tax Buy Cost_t = sum of After-Tax costs through year t

At Year N (Hold Period end):
  Selling Costs = Home Value_N × Selling Costs %
  Net Sale Proceeds = Home Value_N − Loan Balance_N − Selling Costs
```

### Phase 3 — Rent Scenario Math

```
Year 1 Rent = Monthly Rent × 12
Year t Rent = Year 1 Rent × (1 + Annual Rent Increase)^(t-1)
Annual Rent Cost_t = Year t Rent + Renter's Insurance ($200/yr default)

Cumulative Rent Cost_t = sum of Annual Rent Cost_1..t

Initial Capital (Rent) = Security Deposit + First Month's Rent
  (Recovered at end of lease — ignored in net wealth calc.)
```

### Phase 4 — Opportunity Cost & Net Wealth (Mode 2 — v2 round 1 expert fix: COMPLETE rewrite)

**This is the heart of an honest rent vs buy analysis.** Both initial capital differences AND ongoing monthly cash flow differences must be tracked symmetrically.

```
STEP 4.1 — Initial Capital Difference (invested by renter):
  
  Initial Capital Difference = Initial Capital (Buy) − Initial Capital (Rent)
    Typically Buy initial >> Rent initial (down + closing >> deposit + first month)
  
  Renter invests this difference in stock market at Investment Return %:
    Renter Initial Investment Pool = Initial Capital Difference

STEP 4.2 — Annual Cash Flow Difference (also invested by whoever pays less):
  
  For each year t in 1..Hold Period:
    Annual Cash Flow Difference_t = After-Tax Buy Cost_t − Annual Rent Cost_t
    
    IF Annual Cash Flow Difference_t > 0 (buying costs more monthly):
      → Renter saves the difference and invests it
      → Renter Annual Investment_t = Annual Cash Flow Difference_t
      → Buyer Annual Investment_t = 0
    
    IF Annual Cash Flow Difference_t < 0 (renting costs more monthly):
      → Buyer is "saving" by paying less than rent
      → This implicit saving is captured in lower Cumulative Buy Cost
      → Buyer Annual Investment_t = |Annual Cash Flow Difference_t|
      → Renter Annual Investment_t = 0
    
    (v2 round 1 expert fix: previously only Initial Capital Difference was invested.
     Now ongoing monthly differences are tracked symmetrically. This fixes the asymmetry
     that biased results in either direction depending on which side cost more monthly.)

STEP 4.3 — Investment Pool Growth (compounded annually):
  
  Renter Investment Value at year t:
    Year 0: Renter Initial Investment Pool
    Year t: (Year t-1 Value) × (1 + Investment Return) + Renter Annual Investment_t
    
  Buyer Investment Value at year t (for Mode 2 symmetry):
    Year 0: 0 (all initial capital in home)
    Year t: (Year t-1 Value) × (1 + Investment Return) + Buyer Annual Investment_t
  
  Apply After-Tax adjustment at Hold Period end:
    Pre-Tax Gain = Final Investment Value − Total Contributed
    After-Tax Gain = Pre-Tax Gain × (1 − Tax Rate on Investment)
    After-Tax Investment Value = Total Contributed + After-Tax Gain
```

### Phase 5 — Net Wealth Comparison (v2 round 2 expert fix — corrected double-counting bug)

**Critical: Both Buy and Rent paths must be expressed as Net Wealth, not a mix of cost and wealth. This unification fixes the asymmetric comparison bug from v1. v2 round 2 ALSO corrects the double-counting of Initial Capital that biased Buy path negative.**

```
WEALTH-BASED MODEL (corrected v2 round 2):

Year t Net Wealth (Buy):
  = Home Value_t                          ← appreciated home value
  − Loan Balance_t                        ← remaining mortgage
  − Cumulative After-Tax Buy Cost_t       ← all out-of-pocket costs through year t
                                              (includes maintenance, taxes, insurance, etc.
                                               but NOT P&I principal portion since that
                                               builds equity)
  + Buyer Investment Value_t              ← Mode 2 only: invested cash flow savings
  
  (DO NOT subtract Initial Capital. Equity = Home Value − Loan Balance ALREADY 
   reflects the buyer's accumulated wealth from down payment + appreciation + 
   amortization. Subtracting Initial Capital additionally would double-count the 
   down payment as a "loss". Initial Capital appears in the Buyer Investment 
   asymmetry: the buyer COULDN'T invest that money, while the renter CAN — that's 
   captured via the Rent path's Investment Value.)

Year t Net Wealth (Rent):
  = Renter Investment Value_t             ← (Initial Capital Buy − Initial Capital Rent)
                                              compounded at investment return,
                                              after-tax
  + Annual Rent Savings Invested_t        ← if Mode 2 includes monthly cash flow
                                              savings (renter pays less monthly,
                                              difference also invested)
  − Cumulative Rent Cost_t                ← all rent + renter's insurance paid
  
  (Security deposit RECOVERED at end of hold, so NOT subtracted as outflow.
   First month's rent is just timing — counted in Cumulative Rent Cost_t.
   Net Wealth Rent represents the renter's accumulated wealth from investing
   the capital they DIDN'T have to put into a home.)

Net Wealth Difference_t = Net Wealth (Buy)_t − Net Wealth (Rent)_t
```

### CORRECTED BUY/RENT WEALTH SYMMETRY (v2 round 2 critical fix)

**The model now correctly captures the trade-off:**

```
Buyer's wealth comes from:
  + Equity (appreciation + amortization on a leveraged asset)
  − Costs (mortgage, taxes, insurance, maintenance, transaction)

Renter's wealth comes from:
  + Investment growth on capital they didn't put into a home
  − Rent paid (which is pure consumption, no wealth-building)

The asymmetry is captured naturally: buyer's appreciation comes from home value
growth; renter's growth comes from invested capital. Both are evaluated as 
wealth (assets minus liabilities), not as cost. Initial Capital is NOT 
subtracted from either side — it's already converted to home equity (Buy) or
to invested principal (Rent).
```

### BREAK-EVEN YEAR (v2 round 2 expert fix — stable detection)

```
Break-Even Year (corrected — must be PERSISTENT, not transient):
  = first year t where Net Wealth Difference_t ≥ 0
    AND Net Wealth Difference remains ≥ 0 for all subsequent years through Hold Period
  
  Rationale: in real markets, wealth differences can oscillate (e.g., +$200 in
  Year 5, −$100 in Year 6, +$500 in Year 7). A "first crossing" definition 
  produces unstable Break-Even Year that flickers with input changes. Persistent
  crossing is more meaningful for user decisions.
  
  If never persistently crosses within Hold Period: display "Renting Wins"
  
  Edge case: if multiple crossings exist, report FIRST persistent crossing and
  add note: "Break-Even achieved Year N; volatility in years X-Y reflects 
  rate/appreciation interaction."
```

### INVESTMENT TAX SIMPLIFICATION DISCLOSURE (v2 round 2 expert fix)

```
The opportunity cost calculation uses a simplified after-tax compounding model:
  After-Tax Investment Value = Initial × (1 + Return)^t × (1 − Capital Gains Tax)
  
This is an approximation. Real investment tax treatment varies by:
  - Holding period (short-term vs long-term capital gains)
  - Tax-advantaged accounts (401k, IRA, HSA, brokerage)
  - Loss harvesting and basis adjustments
  - State capital gains tax variations
  - Dividend taxation (ordinary vs qualified)

UI MUST display disclosure when Mode 2 active:
  ⓘ "Investment returns modeled using simplified after-tax compounding.
     Actual tax treatment varies by account type, holding period, and 
     state. For precise projections, consult a tax advisor."

This is honest disclosure — calculator's job is illustrative, not advisory.
```

### UI LANGUAGE (v2 round 1 expert fix — match wealth-based methodology):

  - Primary metric: "Buying creates more net wealth than renting after Year N"
  - NOT: "Buying becomes cheaper than renting after Year N"
  - Reason: "cheaper" implies cost comparison; we're comparing wealth.
  - Update Primary Metric Card text accordingly.

At Year N (final):
  Final Net Wealth (Buy) = Net Sale Proceeds (after selling costs)
                         + Buyer Investment Value_N (Mode 2)
                         − Cumulative After-Tax Buy Cost
  
  Final Net Wealth (Rent) = After-Tax Investment Value_N
                          + Annual Rent Savings Invested (Mode 2)
                          − Cumulative Rent Cost_N
  
  Wealth Difference at Hold Period End = Final Buy − Final Rent

**Why this matters:** Previously v1 mixed "Net Cost of Buying" (cost) with "Net Wealth Renting" (wealth) — different units, not directly comparable. v2 round 1 unified on Net Wealth across both paths. v2 round 2 corrected double-counting of Initial Capital in Buy path (Equity already accounts for it) and recovery of Security Deposit in Rent path (deposit recovered at end, not a permanent outflow).

### Phase 6 — Lifestyle Adjustment (Mode 3)

```
Lifestyle Score = (Mobility Importance × −1) + Maintenance Tolerance 
                + Customization Desire + Stability Preference
  Range: −10 to +30

Higher score → favors buying
Lower score → favors renting

If Financial = Buy AND Lifestyle Score < 0:
  Recommendation = "LEAN RENT despite financial favoring buy"
If Financial = Rent AND Lifestyle Score > 15:
  Recommendation = "LEAN BUY despite financial favoring rent"
Otherwise:
  Recommendation = matches financial outcome
```

---

## CRITICAL RULES

### Rule 1 — Consumer rate, NOT investor rate

Default rate 6.75% (2026 consumer 30yr). Mortgage Investment Calculator uses 7.5% (investor). These calculators are SIBLINGS, NOT duplicates — different audiences, different rates. Cross-link explicitly.

### Rule 2 — Opportunity cost is NON-OPTIONAL in Mode 2

Most simple "rent vs buy" calculators ignore opportunity cost. This is a fundamental flaw — it makes buying look better than honest comparison shows. Mode 2 MUST include opportunity cost for credibility.

### Rule 3 — Maintenance is real, not optional

Default 1.5% of home value per year. Many users underestimate this. Calculator must show maintenance line in monthly breakdown. Don't let users zero it out without warning.

### Rule 4 — Tax deduction logic (v2 round 1 expert fix — simplified default + advanced override)

**v1 DEFAULT (approximation, used unless user toggles Advanced):**
```
Tax Deduction_t = Mortgage Interest_t × Marginal Tax Rate
  
  Where Mortgage Interest_t = sum of monthly interest payments year t
  (from amortization schedule)

This approximates the benefit assuming user itemizes. Marked as "approximation" 
in UI tooltip. Roughly accurate for most homeowners with $400K+ mortgages 
who exceed standard deduction.
```

**ADVANCED MODE (when user toggles "Detailed Tax Calculation"):**
```
Itemized Deductions_t = min(Mortgage Interest on first $750K loan, full interest)
                      + min(Property Tax + State Income Tax, $10K SALT cap)

Standard Deduction 2026:
  Single: $14,600
  Married Filing Jointly: $29,200
  Head of Household: $21,900

If Itemized > Standard:
  Tax Deduction_t = (Itemized − Standard) × Marginal Tax Rate
Else:
  Tax Deduction_t = 0  (user takes standard, no marginal benefit from mortgage)
```

**Why both:** v1 default keeps the math simple for most users (single number, single rule). Advanced mode handles edge cases (high-tax states, low-mortgage borrowers, single filers) where standard deduction may exceed itemized — eliminating the deduction benefit entirely.

UI: Default shows simple approximation with tooltip "Tax benefit estimated as interest × marginal rate. For precise calculation including SALT cap, enable Detailed Tax Calculation in Advanced settings."

### Rule 5 — Selling costs are real and significant

Default 7% (5-6% realtor + 1-2% transfer/prep). Many calculators ignore this. Must apply to Home Value at sale, not purchase price. This significantly delays Break-Even.

### Rule 6 — PMI auto-cancellation modeled in v1 (improvement over Mortgage Investment Calc)

Unlike Mortgage Investment Calc (which doesn't model auto-cancel), this calculator MUST model PMI cancellation at 78% LTV because it materially affects long-hold rent vs buy comparison. Cancellation typically occurs 5-12 years in.

### Rule 7 — Cross-calculator invariant with Mortgage Investment

If user enters identical inputs (Home Price, Down %, Rate, Term), Monthly P&I MUST match Mortgage Investment Calculator within $1. Both use canonical amortization formula.

### Rule 8 — Hold Period drives everything

Break-Even depends critically on Hold Period. 3-year hold rarely favors buying (transaction costs eat gains). 30-year hold almost always favors buying (rent compounds against you). Display Hold Period prominently and explain its impact.

### Rule 9 — Status Badge thresholds based on Break-Even vs Hold Period

NOT absolute Break-Even year. Compare Break-Even to Hold Period:
- Break-Even ≤ Hold/2 (e.g., year 3 of 7): GREEN strong buy
- Break-Even between Hold/2 and Hold (e.g., year 5 of 7): BLUE buy
- Break-Even just under Hold (year 6-7 of 7): AMBER marginal
- Break-Even > Hold: RED rent

### Rule 10 — "Don't quantify what you can't" disclosure

Calculator can't quantify: school district quality, neighborhood preference, family proximity, emotional attachment, identity (becoming a homeowner). Mode 3 lifestyle factors approximate but don't capture all. Must disclose.

---

## EXTREME CASES

### Case A — Rent < $500/mo (very low)
```
Display warning: "Monthly rent below $500 is unusual — verify input. 
                 If accurate, renting heavily favored at this rate."
Continue calculation.
```

### Case B — Hold Period = 3 years
```
Display: "Short hold periods (3 years) rarely favor buying due to high 
         transaction costs (closing + selling = 10% of home value). 
         Most users break even at 5-7+ year holds."
Continue calculation.
```

### Case C — Down Payment 100% (all-cash purchase)
```
No PMI, no mortgage interest deduction.
Opportunity cost is significant — the entire home price could be invested.
Display: "All-cash purchase eliminates mortgage costs but maximizes 
         opportunity cost. Most expensive scenario for the buy path."
Continue calculation.
```

### Case D — Mortgage Rate < 4%
```
Display warning: "Rate below 4% is significantly below 2026 market 
                 average (~6.75%). Verify quote — this is unusually 
                 favorable financing."
Continue calculation.
```

### Case E — Hold Period 30 years
```
Display: "30-year hold heavily favors buying in most scenarios. 
         Rent compounds over time; mortgage payment fixed at origination 
         (loses value to inflation). Buy almost always wins long term."
Continue calculation.
```

### Case F — Rent equal to Buy Monthly Cost
```
Display KEY INSIGHT card: "Monthly rent and monthly buy cost are similar 
                          ($X vs $Y). At parity, decision depends entirely 
                          on hold period, appreciation, and opportunity cost."
Continue calculation.
```

---

## SCENARIOS (3 required, shown as comparison cards)

### Conservative
- Mortgage Rate +1 pp (e.g., 7.75% vs 6.75%)
- Home Appreciation −1 pp (e.g., 2.5% vs 3.5%)
- Annual Rent Increase −1 pp (e.g., 2% vs 3%)
- Investment Return −1 pp (e.g., 6% vs 7%)
- Label: "If markets disappoint or rates rise"

### Base
- User inputs as entered
- Label: "Your current assumptions"

### Optimistic
- Mortgage Rate −0.5 pp
- Home Appreciation +1 pp (4.5%)
- Annual Rent Increase +1 pp (4%)
- Investment Return +1 pp (8%)
- Label: "Best-case appreciation + low rates"

If Winner shifts between scenarios:
→ Display banner: "Decision is sensitive to assumptions. Stress-test inputs 
  before committing. Lifestyle factors may decide."

---

## SENSITIVITY TABLES (2 required)

### Table 1 — Hold Period × Mortgage Rate
Rows: Hold Period 3 / 5 / 7 / 10 / 15 / 30 years
Cols: Mortgage Rate 5% / 6% / 6.75% / 7.5% / 8.5%
Cells: Break-Even Year (or "—" if never)
Highlight user's assumption with slate border
Total cells: 6 × 5 = 30

### Table 2 — Home Appreciation × Annual Rent Increase
Rows: Appreciation 1% / 2% / 3.5% / 5% / 7%
Cols: Rent Increase 1% / 2% / 3% / 4% / 5%
Cells: Year 10 Wealth Difference (Buy − Rent)
Purpose: show that low appreciation + low rent increase favors renting; 
         high appreciation + high rent favors buying
Total cells: 5 × 5 = 25

---

## VISUALIZATIONS (4 required)

### 1. Net Wealth Crossover Chart (primary, all modes)
X-axis: Years 0 to Hold Period
Y-axis: Net Wealth $
2 lines: Buy (slate, ascending eventually), Rent (sky, may overtake or fall behind)
Vertical line at Break-Even Year (if exists)

### 2. Monthly Cost Stacked Bar
Buy: P&I (slate) + Tax + Insurance + PMI + HOA + Maintenance (gradient)
Rent: Rent (sky) + Renter's Insurance
Side-by-side comparison.

### 3. Cumulative Cost Chart
Stacked area showing year-by-year cumulative costs for Buy vs Rent. Visualizes when costs cross.

### 4. Mode 3 Lifestyle Radar
4-axis radar: Mobility / Maintenance / Customization / Stability
User's preferences plotted as filled polygon.
Reference shape: "Most renters" (small mobility-favoring) vs "Most buyers" (large stability-favoring).

---

## TEST CASES (8 required, tolerance ±$50 for costs, ±0.5 year for break-even)

### Test 1 — Standard 7-year hold (most common)
Inputs: Home $400K, Rent $2,500/mo, 7yr hold, 6.75%, 20% down, 3.5% appreciation, 3% rent increase
Expected:
- Initial Capital (Buy): $80K + $12K closing = $92K
- Monthly P&I: $2,076
- Monthly Buy Cost (PITI + maintenance + HOA): ~$3,180
- Year 1 Total Buy: $38K (with maintenance + tax adjusted)
- Year 1 Total Rent: $30K + $200 = $30,200
- Year 7 Net Cost Buy: ~$240K (after sale proceeds)
- Year 7 Net Cost Rent: $232K (no opportunity cost in Mode 1)
- Break-Even: ~Year 6 (Buy wins barely)

### Test 2 — 10-year hold (favorable for buy)
Inputs: Home $400K, Rent $2,500/mo, 10yr hold, 6.75%, 20% down, 3.5% apprec, 3% rent
Expected:
- Break-Even: Year 5-6
- Year 10 Buy Net Wealth: ~$180K
- Year 10 Rent Net Wealth: ~$155K
- Status: BLUE "Buying Favored"

### Test 3 — 3-year hold (rent wins)
Inputs: Home $400K, Rent $2,500/mo, 3yr hold, 6.75%, 20% down
Expected:
- Net Cost Buying: high (selling costs + minimal equity gain)
- Net Cost Renting: $90K cumulative rent
- Break-Even: never within 3 years
- Status: RED "Renting Favored"

### Test 4 — Mode 2 with Opportunity Cost (key insight)
Inputs: Home $400K, Rent $2,500/mo, 7yr hold, 6.75%, 20% down, 7% investment return
Expected:
- Without opp cost: Buy wins Year 6
- With opp cost: $92K invested at 7% = $148K over 7yr (after-tax ~$140K)
- Renter's wealth offset: $148K
- Break-Even pushed to Year 9-10 (out of 7-year window)
- Status: AMBER "Marginal" or RED depending on inputs
- KEY INSIGHT shown: opportunity cost is significant

### Test 5 — Low down (3.5% FHA-like)
Inputs: Home $400K, Rent $2,500/mo, 7yr, 6.75%, 3.5% down (PMI active)
Expected:
- Initial Capital (Buy): $14K + $12K = $26K (much lower)
- Monthly PMI: ~$200
- PMI auto-cancels around Year 8 (78% LTV)
- Lower opportunity cost ($26K invested vs $92K)
- Break-Even shifts: Year 8-9 due to PMI cost

### Test 6 — High-tax state (NJ/NY/IL)
Inputs: Home $400K, Rent $2,500/mo, 7yr, 6.75%, 20% down, Property Tax 2.5% ($10K/yr)
Expected:
- Higher PITI ($3,500+/mo)
- SALT cap eats deductions ($10K limit)
- Break-Even pushed to Year 8-10
- Status: AMBER

### Test 7 — Cross-calculator invariant (Mortgage Investment)
Inputs: Home $400K, 20% down, 6.75% (consumer rate), 30yr
Expected:
- Monthly P&I: $2,076 (must match Mortgage Investment Calculator at same inputs)
- Verify ±$1 tolerance

### Test 8 — Mode 3 Lifestyle override
Inputs: Home $400K, Rent $2,500, 7yr, financially Buy wins by Year 6
Lifestyle: Mobility 9, Maintenance 3, Customization 4, Stability 5
→ Lifestyle Score = (9 × −1) + 3 + 4 + 5 = +3 (slight buy)
→ But mobility 9 dominates → recommendation overrides to "LEAN RENT"
Expected: Mode 3 displays mismatch between financial and lifestyle conclusions

---

## URL IMPORT SCHEMA

From homepage or external links:
```
/rent-vs-buy-calculator?p=400000&r=2500&hp=7&lr=6.75&dp=20&mode=1
```

Short params:
- `p`: Home Price
- `r`: Monthly Rent
- `hp`: Hold Period
- `lr`: Mortgage Rate
- `dp`: Down Payment %
- `apr`: Appreciation %
- `ri`: Rent Increase %
- `inv`: Investment Return %
- `tx`: Property Tax %
- `mode`: 1 / 2 / 3

---

## INTEGRATION CROSS-LINKS

### Inbound (buttons on other tools → this one)
- **Homepage**: prominent Rent vs Buy CTA (high-traffic SEO calculator)
- **Mortgage Investment Calculator**: "If primary residence, see Rent vs Buy" (audience redirect)

### Outbound (buttons on this calculator → others)
- **Mortgage Calculator (Investment)** — "If buying as investment, use investor rates" — audience redirect for investor users
- **Rental Property Calculator** — "Considering live-in flip or househack? Run rental analysis"
- **NO outbound to Cap Rate / NOI / DSCR / etc.** — those are investor-only, irrelevant for primary residence

This calculator is BRIDGE between investor hub and broader audience. Most users of this calculator won't engage with rest of hub.

---

## OUTPUT CHECKLIST

Before finalizing this RIS, verify:

### Formula correctness
- [ ] Standard amortization formula (matches Mortgage Investment Calculator)
- [ ] Tax deduction respects standard vs itemized + SALT cap + $750K loan limit
- [ ] PMI auto-cancellation modeled at 78% LTV
- [ ] Selling costs applied to future Home Value, not purchase price
- [ ] Opportunity cost computed on Initial Capital DIFFERENCE (Buy − Rent)
- [ ] Investment returns after-tax (capital gains)
- [ ] Cross-calculator invariant: Monthly P&I matches Mortgage Investment Calc ±$1
- [ ] Maintenance % applied to home value (not loan)
- [ ] Annual rent increase compounds correctly

### UI/UX
- [ ] 3 modes via top-level tabs (slate / sky / warm gray)
- [ ] Consumer rate default (6.75%) — clearly different from investor 7.5%
- [ ] Down payment default 20% (not 25% investor)
- [ ] Hold Period prominent input with explanation of impact
- [ ] Break-Even Year displayed prominently (or "Renting Wins" alternative)
- [ ] Status Badge based on Break-Even vs Hold Period ratio
- [ ] Mode 2 Opportunity Cost displayed as separate metric with KEY INSIGHT
- [ ] Mode 3 Lifestyle radar chart + override logic visible
- [ ] Cross-link to Mortgage Investment for investor audience redirect
- [ ] "Lifestyle factors not quantified" disclosure prominent

### Extreme cases
- [ ] Rent < $500 → warning
- [ ] Hold Period 3 years → educational note about transaction costs
- [ ] Down 100% → educational note about opportunity cost
- [ ] Rate < 4% → verify warning
- [ ] Hold Period 30 years → educational note favoring buy
- [ ] Rent ≈ Buy monthly → KEY INSIGHT card

### Cross-calculator integration
- [ ] Inbound from homepage prominent
- [ ] Outbound to Mortgage Calc (Investment) for audience redirect
- [ ] Saved Scenarios widget consistent with other calculators
- [ ] NO outbound to investor-only calculators (Cap Rate, NOI, DSCR)

### Test suite
- [ ] All 8 test cases pass within tolerance
- [ ] Test 7 (Cross-calc invariant) matches Mortgage Investment ±$1

### v2 round 1 expert fixes (6 items applied — methodology overhaul)
- [ ] **Fix 1 (Critical): Net Cost of Buying double-count REMOVED. Initial capital now subtracted ONCE (not added back). Single accounting model: `Net Wealth (Buy) = Equity − Cumulative Costs − Initial Capital + Buyer Investment`.**
- [ ] **Fix 2 (Critical): Buy and Rent paths UNIFIED on Net Wealth basis (not mixed cost/wealth). Both expressed as Net Wealth, directly comparable. Break-Even = wealth crossover, NOT cost crossover. UI language updated: "creates more net wealth" not "becomes cheaper".**
- [ ] **Fix 3 (Critical): Annual Cash Flow Difference now invested symmetrically. If buying costs more monthly → renter invests difference. If renting costs more → buyer invests implicit savings. Both Investment Pools tracked. Previous v1 only invested Initial Capital Difference, biasing results.**
- [ ] **Fix 4 (Medium): Tax logic v1 default simplified to `Mortgage Interest × Marginal Rate` approximation. Advanced toggle exposes full SALT cap + $750K loan + standard vs itemized logic. Default keeps math simple; advanced handles edge cases.**
- [ ] **Fix 5 (Medium): Maintenance now scales with Home Value_t (year-by-year), not fixed at purchase price. Real-world: maintenance grows with home value over time.**
- [ ] **Fix 6 (Medium): Break-Even definition now strictly wealth-based. UI text updated everywhere from "cheaper" to "creates more net wealth". Primary Metric Card rewritten with wealth language. Secondary Metrics table replaced "Net Cost" with "Final Net Wealth" and "Wealth Difference" entries.**

### v2 round 2 expert fixes (5 items applied — formula corrections + UX nudges)
- [ ] **Fix 1 (Critical): Initial Capital DOUBLE-COUNT bug corrected. v2 round 1 incorrectly subtracted Initial Capital (Buy) from Buy Net Wealth. But Equity (Home Value − Loan Balance) ALREADY includes the down payment as part of accumulated wealth. Subtracting Initial Capital additionally double-penalized buyer. Now: `Net Wealth (Buy) = Home Value − Loan Balance − Cumulative Costs + Buyer Investment`. No Initial Capital subtraction.**
- [ ] **Fix 2 (Critical): Security Deposit RECOVERY corrected. v2 round 1 treated deposit as permanent outflow. In reality deposit is recovered at end of hold (or as last month's rent). Now: `Net Wealth (Rent) = Investment Value − Cumulative Rent`. No Initial Capital (Rent) subtraction.**
- [ ] **Fix 3 (Medium): Investment tax disclosure added. UI displays "Investment returns modeled using simplified after-tax compounding. Actual tax treatment varies." Honest about approximation.**
- [ ] **Fix 4 (Medium): Break-Even Year now requires PERSISTENT crossing (≥0 AND remains ≥0 thereafter). Prevents transient flickers from rate/appreciation interactions. Edge case handled: multiple crossings show first persistent + volatility note.**
- [ ] **Fix 5 (Medium): Mode 2 marked as RECOMMENDED in UI tab label + non-blocking info banner on Mode 1 default ("Switch to Mode 2 for honest opportunity cost analysis"). Subtle nudge without forcing.**

---

**End of RIS v1 → v2 round 1 → v2 round 2 (current, 2 review rounds, 11 fixes total: 5 critical + 6 medium). This document defines the complete specification for the Rent vs Buy Calculator with corrected wealth-based methodology and properly accounted Initial Capital + Security Deposit. Pair with rent-vs-buy-seo-prompt-final.md for full SEO package.**
