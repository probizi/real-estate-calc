# RIS Prompt — Rental Property ROI Calculator (v1)

You are a senior real estate finance engineer and SEO-focused product designer. Your job is to produce a **complete Requirements & Implementation Specification (RIS)** for the Rental Property ROI Calculator page.

This RIS is the source of truth for formulas, logic, thresholds, scenarios, and test cases. It will be paired with a separate SEO package prompt (rental-property-roi-seo-prompt.md) and the Master Prompt to generate the actual Vue page.

---

## CALCULATOR IDENTITY

```
Calculator Name:    Rental Property ROI Calculator
Slug:               rental-property-roi-calculator
Primary metric:     Total ROI % over user-selected hold period (5-30 years)
                    + Annualized Return (IRR)
Primary keyword:    rental property roi calculator
Secondary keywords: real estate roi calculator, rental roi calculator, 
                    investment property roi, long term rental roi,
                    buy and hold roi calculator
Traffic priority:   Priority 2 (estimated 15,000-25,000 searches/month)
Target audience:    Long-term buy-and-hold investors evaluating rental 
                    properties for multi-year wealth-building
```

---

## CRITICAL POSITIONING — HOW THIS DIFFERS FROM RENTAL PROPERTY CALCULATOR

Rental Property Calculator (already deployed) = **Year 1 operating analysis**:
- Monthly/annual cash flow
- NOI, Cap Rate, Cash-on-Cash at current state
- Fixed single-year lens

Rental Property ROI Calculator = **Lifetime wealth analysis**:
- 5-30 year hold period (user choice, fixed at 10 years by default)
- Includes appreciation, principal paydown, tax benefits, and sale proceeds
- Answers the question: "If I buy this and sell in X years, what's my TOTAL return?"

**Cross-linking required:** Every Rental Property Calculator result page should link to Rental Property ROI for long-horizon analysis. Every Rental Property ROI result page should link back to Rental Property Calculator for Year-1 deep-dive.

---

## THREE MODES

### Mode 1 — Forward ROI (default)
User enters property + inputs + hold period. Calculator projects:
- Year-by-year cash flow, equity buildup, property value
- Terminal sale at hold-period end
- Four-component wealth waterfall
- Total ROI % and Annualized Return (IRR)

### Mode 2 — Hold Period Sensitivity
Same inputs, but calculator shows ROI at 5/10/15/20/25/30 year hold periods in a comparison table. Helps answer "when should I sell?"

### Mode 3 — Compare Two Sell Years (simplified for v1 — v2 expert fix)

User enters property once, defines TWO different sell years (e.g., "Sell at Year 7" vs "Sell at Year 15"). Calculator shows which exit timing produces higher total wealth and better annualized IRR.

**v1 scope is intentionally narrow:** only sell-year comparison. No 1031 Exchange, no mid-hold refinance scenarios. Those involve replacement-property assumptions (1031) or loan-specific terms (refi) that cannot be modeled without either significant additional inputs or fake precision.

**v2 roadmap (out of scope for v1):**
- 1031 Exchange into replacement property with user-specified replacement basis/cash flow
- Mid-hold cash-out refinance scenarios with new loan terms
- Multi-property portfolio rollover

For v1, if user asks about 1031 Exchange or refinance in feedback, direct them to planned v2 or to consult a CPA + lender for custom analysis.

---

## UI STRUCTURE

**Top-level tab toggle (3 modes):**
- Forward ROI (indigo)
- Hold Period Sensitivity (blue)
- Compare Sell Years (emerald)

**Below tabs:** shared input form (all three modes use same property inputs; modes differ only in output presentation).

**Below inputs:** dynamic output area based on selected mode.

---

## INPUT SCHEMA

### Acquisition (required)

| Field | Type | Default | Placeholder |
|---|---|---|---|
| Purchase Price | currency | empty | Enter purchase price |
| Down Payment % | percent | 25 | Enter down payment percent |
| Closing Costs % | percent | 2 | Enter closing cost percent |
| Initial Rehab Budget | currency | 0 | Enter rehab cost if needed |

### Financing (required)

| Field | Type | Default | Placeholder |
|---|---|---|---|
| Loan Rate % | percent | 7.5 | Enter loan interest rate |
| Loan Term (years) | integer | 30 | Enter loan term in years |
| Loan Type | select | Conventional | Conventional / DSCR / Portfolio |

### Rental Income (required)

| Field | Type | Default | Placeholder |
|---|---|---|---|
| Monthly Rent | currency | empty | Enter monthly rent |
| Vacancy Rate % | percent | 8 | Enter vacancy percent |
| Annual Rent Growth % | percent | 3 | Enter annual rent growth |
| OpEx % of Rent | percent | 35 | Enter operating expense percent |

### Appreciation (required)

| Field | Type | Default | Placeholder |
|---|---|---|---|
| Annual Appreciation % | percent | 3 | Enter annual appreciation |

### Tax Parameters (advanced, collapsed by default)

| Field | Type | Default | Placeholder |
|---|---|---|---|
| Marginal Tax Rate % | percent | 24 | Enter marginal tax rate |
| Depreciation Period | integer | 27.5 | IRS standard 27.5 years (residential) |
| Land Value % of Purchase | percent | 20 | Land portion (not depreciable) |
| Selling Cost % | percent | 7 | Realtor + transfer costs |
| Capital Gains Rate % | percent | 15 | Federal long-term capital gains |
| State Capital Gains % | percent | 0 | State-specific addon |

### Hold Period (required, drives output)

| Field | Type | Default | Placeholder |
|---|---|---|---|
| Hold Period (years) | integer | 10 | Hold period in years (1-30). v2 expert fix: range expanded from 5-30 to 1-30 to allow short-hold modeling. |

### Sell Year Selection (Mode 3 only — v2 expert fix scope reduction)

User picks TWO sell years (range 1-30) from dropdown or number input. Calculator runs full simulation at each sell year and compares:

- Sell Year A (e.g., 7) — standard sale at end of year 7
- Sell Year B (e.g., 15) — standard sale at end of year 15

Both sale events use the same terminal logic as Mode 1 (Phase 4: selling costs, remaining loan, depreciation recapture, capital gains tax).

**Not supported in v1** (deferred to v2):
- 1031 Exchange option (requires replacement property inputs)
- Mid-hold cash-out refinance (requires new loan terms)
- Refinance + hold longer (requires both refi inputs and extended hold assumption)

These are tracked as v2 roadmap items. For v1, keep scope disciplined.

---

## OUTPUT SCHEMA

### Primary Metrics (always shown, both Forward ROI and Compare modes)

| Output | Formula | Display |
|---|---|---|
| **Total ROI %** | Total Wealth Created / Initial Cash Invested × 100 | Big number, percentage, 1 decimal |
| **Annualized Return (IRR)** | IRR of full cash flow series (Y0 to Year N) | Big number, percentage, 1 decimal |
| **Total Wealth Created** | Sum of 4 wealth components (see below) | Dollar amount, nearest $100 |
| **Initial Cash Invested** | Down Payment + Closing + Rehab | Dollar amount |

### Four Wealth Components (waterfall chart)

| Component | Formula |
|---|---|
| **Cumulative Cash Flow** | Sum of annual after-financing cash flow over hold period |
| **Principal Paydown** | Original Loan − Remaining Balance at hold-period end |
| **Appreciation** | Property Value at hold-period end − Purchase Price |
| **Estimated Depreciation Benefit** | Annual Depreciation × Marginal Tax Rate × Hold Years |
| **MINUS Capital Gains Tax at Sale** | (Sale Price − Adjusted Basis) × (Federal CG Rate + State CG Rate) |
| **= Total Wealth Created** | Sum of above components |

**Critical note on adjusted basis:**
```
Adjusted Basis at Sale = Purchase Price 
                      + Rehab (if capitalized)
                      + Capital Improvements over hold period
                      − Accumulated Depreciation
```

### Derived Metrics

| Output | Formula | Purpose |
|---|---|---|
| **Year 1 Cash-on-Cash %** | Year 1 Cash Flow / Initial Cash Invested | Matches Rental Property Calculator output — consistency check |
| **Wealth Break-Even Hold Period** | First year where Cumulative Wealth > 0 (v2 expert fix — renamed to distinguish from operational cash-flow break-even used in other calculators) | Useful for answering "how long before this deal pays off in total wealth terms?" |
| **Equity at Hold-Period End** | Property Value − Remaining Loan Balance | Pre-tax equity position |
| **Net Proceeds at Sale** | Sale Price − Selling Costs − Remaining Loan − Capital Gains Tax | Actual cash received from sale |
| **ROI without Tax Benefits** | Total ROI excluding depreciation savings | For investors who want pre-tax view |

### Hold Period Sensitivity Table (Mode 2)

**Note on checkpoint scope (v2 round 2 expert fix):** Mode 2 sensitivity table uses standard long-hold checkpoints **5 / 10 / 15 / 20 / 25 / 30 years**, while Mode 1 (Forward ROI) supports the full **1-30 year range**. The checkpoints were chosen because short-hold periods (1-4 years) are heavily skewed by selling costs and Year-1 tax ambiguity, making them less useful for "when to sell" sensitivity analysis. Users who want sub-5-year analysis should use Mode 1 directly with their specific hold period, or Mode 3 to compare two specific short-hold exit years.

Columns: 5Y / 10Y / 15Y / 20Y / 25Y / 30Y
Rows:
- Total ROI %
- Annualized Return (IRR)
- Total Wealth Created
- Equity at Sale
- Cumulative Cash Flow
- Net Proceeds

Highlight "optimal" hold period (highest IRR) with indigo border.

### Compare Sell Years Table (Mode 3)

Two columns side-by-side with sell year labels ("Sell at Year 7" / "Sell at Year 15"). Rows:
- Total ROI %
- Annualized Return (IRR)
- Total Wealth Created
- Equity at Sale
- Net Proceeds after Tax
- Remaining Loan Balance
- Risk Note (text label)

**Winner highlight:** higher-IRR year gets emerald border + "Better Annualized Return" badge. If IRR delta < 1 pp → "Too Close to Call — choose based on liquidity needs or market conditions".

---

## CALCULATION ENGINE

### Phase 1 — Initial Cash Invested

```
Down Payment         = Purchase Price × Down Payment %
Closing Costs        = Purchase Price × Closing Cost %
Initial Rehab        = Rehab Budget (user-entered, 0 if not rehab)
Initial Cash Invested = Down Payment + Closing Costs + Initial Rehab
```

### Phase 2 — Loan Amortization Schedule

```
Loan Amount          = Purchase Price − Down Payment
Monthly Rate         = Loan Rate % / 12
Total Payments       = Loan Term × 12
Monthly Payment (P&I) = Loan × [Monthly Rate × (1 + Monthly Rate)^Total Payments] / 
                              [(1 + Monthly Rate)^Total Payments − 1]
```

For each month m from 1 to Hold Period × 12:
```
Interest_m  = Remaining Balance_{m-1} × Monthly Rate
Principal_m = Monthly Payment − Interest_m
Remaining Balance_m = Remaining Balance_{m-1} − Principal_m
```

Sum principal payments over hold period → **Principal Paydown component**.

### Phase 3 — Year-by-Year Simulation

For each year Y from 1 to Hold Period:

```
Gross Rent_Y         = Monthly Rent × 12 × (1 + Rent Growth %)^(Y-1)
Vacancy Loss_Y       = Gross Rent_Y × Vacancy %
Effective Rent_Y     = Gross Rent_Y − Vacancy Loss_Y
Operating Expenses_Y = Effective Rent_Y × OpEx %
NOI_Y                = Effective Rent_Y − Operating Expenses_Y
Annual Debt Service_Y = Monthly Payment × 12  (constant for fixed-rate loan)
Pre-Tax Cash Flow_Y  = NOI_Y − Annual Debt Service_Y
```

**Depreciation per year:**
```
Depreciable Basis    = (Purchase Price + Rehab) × (1 − Land Value %)
Annual Depreciation  = Depreciable Basis / 27.5
Tax Savings Estimate_Y = Annual Depreciation × Marginal Tax Rate %
```

**Note on passive loss limits:** For simplification, v1 assumes investor can use all depreciation deductions against rental income without passive loss limitation complexity. Add disclaimer in SEO content.

**After-Tax Cash Flow per year:**
```
Taxable Income_Y     = NOI_Y − Interest_Y − Annual Depreciation
                       (where Interest_Y = sum of monthly Interest_m within year Y)
Tax Owed_Y           = max(0, Taxable Income_Y × Marginal Tax Rate %)
After-Tax Cash Flow_Y = Pre-Tax Cash Flow_Y − Tax Owed_Y + (Tax Savings if Taxable Income < 0)
```

**Simplification for v1 display (SEO-friendly):**
Most users don't understand After-Tax Cash Flow nuances. Display Pre-Tax Cash Flow as the main cash flow line, and show Tax Savings as a separate wealth component (depreciation benefit). This matches industry convention on calculators like BiggerPockets and Roofstock.

### Phase 4 — Terminal Sale at Hold-Period End

```
Property Value_Sale  = Purchase Price × (1 + Appreciation %)^Hold Period
Selling Costs        = Property Value_Sale × Selling Cost %
Remaining Loan       = Remaining Balance at month (Hold × 12)
Equity at Sale       = Property Value_Sale − Remaining Loan

Sale Tax computation (v2 round 3 expert fix — POINTER to Rule 3 canonical formula):
  Sale Tax = Depreciation Recapture Tax + Capital Gains Tax
  where both terms are computed via Rule 3 SPLIT formula with min()/max() guards.
  
  Full canonical computation is defined EXCLUSIVELY in Rule 3 — see Critical Rule 3
  above for: Accumulated Depreciation, Adjusted Basis, Total Gain, Recapture Tax, 
  LTCG Gain Portion, Capital Gains Tax, Total Sale Tax, and loss-sale edge case.
  
  Phase 4 uses the OUTPUT of Rule 3 (Total Sale Tax) — it does NOT redefine the tax
  computation. Any formula outside Rule 3 that appears to compute sale tax is a bug.

Net Proceeds at Sale = Property Value_Sale − Selling Costs − Remaining Loan − Total Sale Tax
                     (where Total Sale Tax is computed per Rule 3)
```

### Phase 5 — Wealth Waterfall (EXPLANATORY DECOMPOSITION ONLY)

**CRITICAL (v2 expert fix — NO DOUBLE COUNT):** The Wealth Waterfall is an **explanatory visualization** that decomposes WHERE total wealth comes from. It is SEPARATE from the IRR cash flow timeline used in Phase 6. These two representations share underlying math but serve different purposes:

```
╔════════════════════════════════════════════════════════════════════════════╗
║ TWO SEPARATE REPRESENTATIONS — DO NOT MIX:                                 ║
║                                                                            ║
║ WATERFALL (Phase 5):  Explanatory decomposition of wealth created.         ║
║                       4 positive components − 1 negative (CG tax).         ║
║                       Shown in chart as "where did the wealth come from?"  ║
║                                                                            ║
║ IRR CASH FLOW (Phase 6):  Actual cash received timeline.                   ║
║                       Year 0: negative (Initial Cash Invested)             ║
║                       Years 1..N-1: annual pre-tax cash flow               ║
║                       Year N (terminal): cash flow + Net Proceeds at Sale  ║
║                       Solve NPV=0 for IRR.                                 ║
║                                                                            ║
║ INVARIANT: Sum of Waterfall components MUST equal Total Wealth Created     ║
║            which MUST equal (Sum of IRR cash flows − Initial Cash).        ║
║            Verification: |Waterfall Total − IRR Total| < $100.             ║
║                                                                            ║
║ DO NOT inject waterfall components into IRR cash flow as separate items.   ║
║ IRR cash flow is purely: initial outflow, annual cash flows, terminal      ║
║ net proceeds. That's it. No separate appreciation row, no separate         ║
║ depreciation row. All of those are ALREADY EMBEDDED in the terminal net    ║
║ proceeds and annual cash flows.                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
```

**Waterfall composition:**
```
Component 1: Cumulative Cash Flow           = Σ(Pre-Tax Cash Flow_Y) for Y = 1..Hold Period
Component 2: Principal Paydown              = Original Loan − Remaining Balance_Sale
Component 3: Appreciation                   = Property Value_Sale − Purchase Price
Component 4: Estimated Depreciation Benefit = Annual Depreciation × Marginal Tax Rate × Hold Years
                                              (see Critical Rule 2 for naming rationale)

Subtotal (positive)                         = C1 + C2 + C3 + C4

Component 5 (negative): Sale Tax            = Depreciation Recapture Tax + Capital Gains Tax
                                              (see Critical Rule 3 for split formula)

TOTAL WEALTH CREATED                        = Subtotal − Sale Tax
```

**Invariant check (must always hold):**
```
Waterfall Total Wealth = (IRR Cash Flow Sum) − Initial Cash Invested
                       within ±$100 tolerance

Example verification:
  Suppose Waterfall gives Total Wealth = $120,000
  IRR cash flows sum to (CF_0 + CF_1 + ... + CF_N):
    CF_0 = -$75,000 (Initial Cash)
    CF_1..CF_9 sum = +$30,000 (annual pre-tax cash flows)
    CF_10 = $2,800 (Year 10 cash flow) + $162,200 (Net Proceeds at Sale)
  
  IRR Sum = -$75,000 + $30,000 + $2,800 + $162,200 = $120,000
  Waterfall Total Wealth = $120,000  ✓ (matches within tolerance)
  
  If these diverge by more than $100, one of the two representations has 
  a bug. Treat as invariant violation — flag result INVALID, do not display.
```

### Phase 6 — Total ROI and Annualized Return (IRR Cash Flow Series)

```
Total ROI % = Total Wealth Created / Initial Cash Invested × 100

Annualized Return (IRR):
  Build cash flow series:
    CF_0 = -Initial Cash Invested
    CF_1 to CF_{N-1} = Pre-Tax Cash Flow for each year
    CF_N = Pre-Tax Cash Flow_N + Net Proceeds at Sale
  
  Solve: NPV = Σ(CF_t / (1+r)^t) = 0  for r
  Method: Newton-Raphson, tolerance 0.01%, initial guess 10%, max 100 iterations
  
  Guard: if IRR iteration fails to converge (rare edge case with very negative 
  early cash flow and positive terminal), fall back to CAGR approximation:
    CAGR = (1 + Total ROI %)^(1/Hold Years) − 1
    Display label "5Y CAGR equivalent" instead of "IRR" when fallback triggered.
```

---

## CRITICAL RULES

### Rule 1 — Depreciation applies ONLY to improvement portion

Land is NOT depreciable per IRS rules. Default Land Value % = 20% (user-adjustable). Depreciation formula uses (1 − Land %) × basis.

### Rule 2 — Rehab capitalized vs expensed

For v1: ALL rehab is treated as **capitalized** (added to depreciable basis, depreciated over 27.5 years). Do NOT offer an expense option — this is a tax-complexity trap. Add disclaimer: "For rehab expensing strategies (e.g., de minimis safe harbor), consult a CPA."

### Rule 2a — "Estimated Depreciation Benefit" naming rationale (v2 expert fix)

The linear formula `Annual Depreciation × Marginal Tax Rate × Hold Years` assumes the investor can deduct the full depreciation amount against other income every year. In reality, this is subject to:

- **Passive Activity Loss limits** (IRC §469): non-real-estate professionals can deduct passive losses only against passive income, up to a $25,000 phase-out for incomes under $150K
- **At-risk rules** (IRC §465)
- **Basis limitations** when losses exceed basis
- Property must be **cash-flow positive** for the "benefit" to flow without limitation

v1 cannot model these without adding significant CPA-level complexity. Therefore the output label MUST be:

```
"Estimated Depreciation Benefit"  (NOT "Tax Savings")
```

Required tooltip: "This estimate assumes full deductibility of depreciation against rental income each year. Passive activity loss rules, at-risk rules, and your personal tax situation can reduce actual benefit. Consult a CPA for precise tax impact."

Any content/UI referring to this component MUST use "Estimated Depreciation Benefit" — never "Tax Savings" (implies guaranteed savings) or "Tax Shield" (technical term users won't recognize consistently).

### Rule 3 — Capital Gains Tax + Depreciation Recapture (v2 expert fix — SPLIT FORMULA)

Previous RIS v1 combined depreciation recapture into a single CG rate — this meaningfully UNDERSTATED tax liability because recapture is taxed at flat 25%, often higher than LTCG rate (15-20%). For v1 we use the correct split formula.

**Standard Mode (default, simplified for ease of use):**

```
Step 1 — Compute Sale Quantities:
  Accumulated Depreciation = Annual Depreciation × Hold Period
  Net Sale Price           = Property Value_Sale − Selling Costs
  Adjusted Basis           = Purchase Price + Rehab − Accumulated Depreciation
  Total Gain               = Net Sale Price − Adjusted Basis

Step 2 — Split Gain Between Recapture and LTCG (v2 round 2 expert fix — 
         min()/max() guards mandatory):

  Depreciation Recapture Tax = min(Accumulated Depreciation, max(0, Total Gain)) × 25%
    — Recapture applies ONLY to the portion of gain that equals accumulated 
      depreciation, capped at total gain. If sale is a loss, recapture is 0.
    — Federal flat rate per IRC §1250 (residential real estate, unrecaptured 
      Section 1250 gain).
  
  LTCG Gain Portion = max(0, Total Gain − Accumulated Depreciation)
    — LTCG applies only to gain ABOVE the accumulated depreciation amount.
    — Clamped at 0 for loss sales.
  
  Capital Gains Tax = LTCG Gain Portion × (Federal LTCG Rate + State CG Rate)

Step 3 — Combine:

  Total Sale Tax = Depreciation Recapture Tax + Capital Gains Tax

Loss sale edge case (Total Gain ≤ 0):
  Recapture Tax = 0  (nothing to recapture if no gain)
  Capital Gains Tax = 0
  Total Sale Tax = 0
  
  Loss itself may be deductible in user's tax return (capital loss), but 
  v1 does not model this — disclose in Limitations.
```

**Why min() and max() are mandatory:**
- Without `min(Accumulated Depreciation, Total Gain)`: a property sold at basis (zero gain) would still produce a phantom recapture tax on accumulated depreciation that doesn't exist in the gain.
- Without `max(0, Total Gain − Accumulated Depreciation)`: a sale where appreciation < accumulated depreciation would produce negative LTCG gain, leading to a negative tax (refund) which is incorrect.
- These guards ensure correct behavior across all sale scenarios: big gain, small gain, breakeven, loss.

**Example (Test 1 inputs, 10-year hold):**
```
Purchase:                  $300,000
Rehab:                     $0
Depreciable Basis:         $240,000 (80% of $300K, 20% land)
Annual Depreciation:       $8,727 ($240K / 27.5)
Accumulated Deprec (10Y):  $87,273

Property Value_Sale:       $403,175 ($300K × 1.03^10)
Selling Costs (7%):        $28,222
Net Sale Price:            $374,953

Adjusted Basis:            $300,000 − $87,273 = $212,727
Total Gain:                $374,953 − $212,727 = $162,226

Depreciation Recapture:    $87,273 × 25% = $21,818
LTCG Gain portion:         $162,226 − $87,273 = $74,953
LTCG Tax (15% fed + 0 st): $74,953 × 15% = $11,243

Total Sale Tax:            $21,818 + $11,243 = $33,061
(vs. simplified single-rate at 15%: $162,226 × 15% = $24,334)
(vs. simplified single-rate at 18%: $162,226 × 18% = $29,201)

The correct split produces MORE realistic (higher) tax liability.
```

**Advanced Mode (opt-in, future v2):**
- Allow user to specify state-specific LTCG rate for accuracy
- Offer 1031 Exchange toggle (defers all tax to replacement property)
- NIIT (3.8% Net Investment Income Tax) for high earners

For v1: use Standard Mode formula above. Required disclosure: "This calculator uses the standard federal Depreciation Recapture rate of 25% and separates it from Long-Term Capital Gains tax on the remaining gain. Your actual tax may differ based on state law, NIIT, and personal tax situation. Consult a CPA for precise tax planning."

### Rule 4 — Inflation-adjusted display toggle (v2 roadmap)

v1 displays all dollar figures in nominal dollars. v2 may add toggle "Adjust for inflation" (uses 3% default inflation rate to deflate future dollars to today's dollars). Flag for v2, do not implement in v1.

### Rule 5 — IRR fallback to CAGR (v2 round 3 expert fix — full transparency)

If IRR computation fails (rare: unusual sign changes in cash flow, e.g., mid-hold large outflow), fall back to CAGR of total wealth.

**Display labeling when fallback triggers:**
```
Primary metric line:
  "Annualized Return: 9.3% (approximated)"
  
Tooltip/explanation below:
  "IRR approximated using CAGR due to irregular cash flow pattern. 
   CAGR is computed from Initial Cash Invested → Total Wealth over hold period.
   Unlike IRR, CAGR does not account for year-by-year cash flow timing, so it 
   may over- or under-state the true annualized return. Consider reviewing 
   your input assumptions if this result seems unexpected."

Methodology footer note:
  "Approximated annualized return appears when IRR solver cannot converge on 
   your specific cash flow series. This happens most often with mid-hold 
   refinance scenarios (v2 feature) or heavily negative early cash flows."
```

**UI indicator requirement:**
- Display small info icon (ⓘ) next to the IRR number when fallback is active
- Clicking the icon expands the tooltip above
- Use amber (not red) color tint — this is informational, not an error

**DO NOT:**
- Silently fall back without labeling (deceives user into thinking it's true IRR)
- Hide the fallback behind a generic "calculation complete" message
- Show the CAGR result without the "(approximated)" suffix

Transparency about approximation is a trust-building signal. Users appreciate knowing when the calculator is doing something unusual.

### Rule 6 — Wealth Break-Even Hold Period calculation

**Terminology distinction (v2 expert fix):** This metric measures when the investor's CUMULATIVE WEALTH position (cash flow + equity + tax benefits − sale tax if sold) first turns positive. This is DIFFERENT from operational cash-flow break-even used in Compare Deals and BRRRR calculators (CumCashFlow ≥ 0 only). To avoid confusion across calculators, this metric is always labeled **"Wealth Break-Even Hold Period"** in UI, never just "Break-Even".

For each year Y from 1 to 30:
```
Cumulative Wealth_Y = Σ(Cash Flow 1..Y) 
                    + Principal Paid_Y 
                    + Appreciation_Y 
                    + Estimated Depreciation Benefit_Y 
                    − Hypothetical Sale Tax if sold at Y (Recapture + LTCG per Rule 3)
                    − Initial Cash Invested
  
If Cumulative Wealth_Y first becomes positive at year X → Wealth Break-Even = Year X
If never positive within 30 years → Wealth Break-Even = "Beyond 30 years (deal does not pay back total wealth)"
```

**Implementation note (v2 round 3 expert fix — prevent reuse-bug):**
```
For each year Y from 1 to 30:
  1. Recompute terminal sale quantities AS IF sold at end of year Y:
       Property Value_Y     = Purchase Price × (1 + Appreciation %)^Y
       Selling Costs_Y      = Property Value_Y × Selling Cost %
       Remaining Loan_Y     = amortization balance at month Y × 12
       Accumulated Depr_Y   = Annual Depreciation × Y
       Adjusted Basis_Y     = Purchase Price + Rehab − Accumulated Depr_Y
       Total Gain_Y         = (Property Value_Y − Selling Costs_Y) − Adjusted Basis_Y
  
  2. Apply Rule 3 SPLIT formula with Y-specific quantities:
       Recapture Tax_Y = min(Accumulated Depr_Y, max(0, Total Gain_Y)) × 25%
       LTCG Tax_Y = max(0, Total Gain_Y − Accumulated Depr_Y) × (Fed + State rate)
       Sale Tax_Y = Recapture Tax_Y + LTCG Tax_Y
  
  3. Compute Cumulative Wealth_Y with the Y-specific Sale Tax.

DO NOT:
  ❌ Reuse the final-year Sale Tax for intermediate years (different accumulated 
     depreciation at each year → different recapture)
  ❌ Use linear interpolation between Year 1 and final-year sale tax
  ❌ Skip min()/max() guards for early years (loss-sale at year 1-2 is possible if 
     appreciation low and selling costs high)

Recomputation cost: 30 iterations × ~5 arithmetic ops each = 150 ops total.
Negligible performance impact. Accuracy is critical.
```

This is a separate diagnostic metric — NOT part of Total ROI, but shown as a card.

**Display convention:**
```
Wealth Break-Even Hold Period: Year 6
  — meaning: at end of year 6, if you sold, you'd have made back your initial cash + more

vs. 

Operating Cash Flow Break-Even (computed by Rental Property Calculator): Month 48
  — meaning: Year 4 when pure monthly cash flow crosses zero against Cash Invested
```

These are DIFFERENT metrics. Both useful. Never combine. Cross-link the other calculator if user wants operational break-even.

### Rule 7 — Year 1 Cash-on-Cash consistency check

Year 1 CoC in this calculator MUST match the CoC that Rental Property Calculator would produce for identical inputs. This is a **consistency invariant** — if they diverge, one of the calculators has a bug.

Test: Y1 CoC (this calculator) == Y1 CoC (Rental Property Calculator) to within ±0.1 pp.

### Rule 8 — Negative Total ROI handling (v2 expert fix — allow negative IRR)

Previous version said "do NOT compute IRR for negative returns" — that was incorrect. IRR can legitimately be negative and still meaningful. The correct logic:

```
1. ALWAYS attempt IRR solver on the full cash flow series.

2. Based on solver result:
   
   Case A — Valid positive IRR returned:
     Display as "Annualized Return (IRR): 8.3%"
   
   Case B — Valid negative IRR returned (e.g., -2.1%):
     Display as "Annualized Return (IRR): -2.1%"
     Add banner: "This deal projects a loss over the {X}-year hold. 
                  IRR is negative, meaning you'd earn more keeping cash 
                  in a savings account. Review assumptions or consider 
                  alternatives."
     Display Total ROI in red.
   
   Case C — Solver does not converge (rare: unusual sign changes in 
           cash flow, e.g., mid-hold refi with large outflow):
     Fall back to CAGR (Rule 5)
     If CAGR also undefined (e.g., Total Wealth <= -100% of Initial Cash, 
     i.e., you lost more than you invested):
       Display "Annualized Return: N/A — deal projects catastrophic loss. 
                Verify inputs; this may indicate a data entry error."

3. DO NOT auto-block IRR just because Total ROI is negative. Negative IRR 
   is a valid, informative output.
```

Rationale: telling a user "IRR is meaningless here" when the deal projects a -3% annualized loss is worse UX than just showing -3%. Users understand "I'd be losing 3% per year" intuitively. Blocking the output patronizes them.

Red styling is still applied to negative outputs (Total ROI and IRR both) to draw visual attention.

### Rule 9 — Unrealistic assumptions guard

Trigger warnings when:
- Annual Rent Growth > 6% → "Aggressive rent growth assumption. US rental market average is 2-4%. Consider running Conservative scenario."
- Annual Appreciation > 6% → "Aggressive appreciation assumption. US historical average is 3-4%. Consider Conservative scenario."
- Hold Period ≤ 3 years → "Very short hold periods are heavily weighted by selling costs and sale tax. Total ROI % becomes dominated by transaction friction rather than operational performance. For 1-year operational analysis, use the Rental Property Calculator instead. For 1-year sale tax, see the Year-1-sale disclosure below." (v2 round 2 expert fix — threshold ≤3, removed noise about sub-1-year since input field is integer years)

**Year 1 sale tax disclosure (v2 round 2 expert fix):**
When Hold Period = 1 year, the calculator applies LTCG-style sale tax (Rule 3) for simplicity. In reality, sub-1-year holds are taxed as short-term capital gains at ordinary income rates (which can be significantly higher than 15% LTCG). Since this calculator uses integer years and cannot model exact acquisition/sale dates, a 1-year hold is ambiguous:
- Held for 365 days or less → short-term, ordinary income rates (22-37% typically)
- Held for 366+ days → long-term, LTCG rates (0-20%)

**Disclosure text (required in UI when Hold Period = 1 and Mode 1/2/3 output is shown):**

"For Hold Period = 1 year, sale tax is approximate. The calculator applies LTCG-style sale tax for simplicity, but actual treatment may be short-term depending on exact holding dates (365 days or less = short-term, taxed at ordinary income rates). Consult a CPA for precise Year-1 exit tax analysis."

Do NOT block 1-year analysis — it's still useful for understanding year-1 wealth creation even with tax imprecision.
- Vacancy < 5% → "Very optimistic vacancy assumption. US average is 6-8%."

### Rule 10 — Pre-tax vs after-tax labeling (v2 expert fix — CANONICAL COMPOSITION LABEL)

Users frequently misread our output as "after-tax ROI" because we deduct CG tax at sale. That's misleading — income tax on annual cash flow is NOT modeled. The labeling must make this clear.

**Canonical composition formula (mandatory placement in output summary):**

```
Total Wealth Created 
  = Pre-Tax Cumulative Cash Flow
  + Principal Paydown
  + Appreciation
  + Estimated Depreciation Benefit  (simplified; passive-loss rules ignored)
  − Simplified Sale Tax             (split: Depreciation Recapture + Capital Gains)

This is a PARTIAL-TAX representation, not fully after-tax:
  ✓ Depreciation benefit included (estimate)
  ✓ Sale taxes deducted (recapture + LTCG)
  ✗ Annual income tax on rental profit NOT modeled
  ✗ State income tax variations NOT modeled
  ✗ Passive activity loss limitations NOT modeled
  ✗ NIIT (Net Investment Income Tax, 3.8% for high earners) NOT modeled
```

**Label contract — these EXACT phrases must appear in UI and SEO content:**

| Context | Required label |
|---|---|
| Cash flow component | "Pre-Tax Cumulative Cash Flow" |
| Depreciation savings | "Estimated Depreciation Benefit" (NEVER "Tax Savings") |
| Sale tax row | "Simplified Sale Tax" (combined display) OR "Depreciation Recapture (25%) + Capital Gains Tax" (split display) |
| Final number | "Total Wealth Created" or "Partial After-Tax Total Wealth" |
| ROI line | "Total ROI %" |
| IRR line | "Annualized Return (IRR)" |
| Methodology footer | "This calculator uses pre-tax cash flow with estimated depreciation benefit and simplified sale tax. Annual income tax on rental profit is NOT modeled. Consult a CPA for precise after-tax analysis." |

**Forbidden labels (will confuse users):**
- "After-Tax ROI" — implies full tax modeling (it isn't)
- "Tax Savings" — implies guaranteed savings (subject to limits)
- "Net After-Tax Cash Flow" — we don't compute annual tax
- "Tax-Adjusted Return" — ambiguous

**Required footer disclaimer on every calculator output:**

> "ROI and IRR shown are pre-tax on annual cash flow, with estimated depreciation benefit added and simplified sale tax deducted. Your actual after-tax return depends on your marginal income tax bracket, state tax, passive activity loss rules, NIIT applicability, and personal tax situation. Consult a real estate CPA for precise after-tax planning."

---

## BENCHMARKS

### Total ROI benchmarks by hold period (US residential rental, 2026 market)

| Hold Period | Weak Deal | Average Deal | Strong Deal |
|---|---|---|---|
| 5 years | < 50% | 50-90% | > 90% |
| 10 years | < 120% | 120-220% | > 220% |
| 15 years | < 220% | 220-400% | > 400% |
| 20 years | < 360% | 360-650% | > 650% |
| 25 years | < 550% | 550-1000% | > 1000% |
| 30 years | < 800% | 800-1500% | > 1500% |

### Annualized Return (IRR) benchmarks

| IRR Band | Tier | Typical Context |
|---|---|---|
| < 6% | Below Market | Loss of purchasing power, worse than passive index funds |
| 6-9% | Market Rate | Comparable to S&P 500, acceptable for leveraged real estate |
| 9-13% | Good | Above-market return with leverage and tax benefits |
| 13-18% | Strong | High-quality deal with meaningful appreciation |
| > 18% | Exceptional | Often indicates aggressive assumptions — verify inputs |

### Sources and Disclaimer (v2 expert fix — aligned with Compare Deals pattern)

These benchmarks are **illustrative patterns based on typical long-hold rental scenarios in 2026 US markets, NOT measured statistical datasets, NOT market research, NOT predictions for any specific deal.** The tier thresholds (e.g., "Strong > 220% over 10 years") represent approximate outcomes observed across similar user-input combinations at commonly-used assumption levels. They are NOT derived from real transaction databases, sampled investor surveys, or national housing indexes.

**Benchmarks disclaimer (required in SEO and in calculator tooltip):**
"These ranges reflect illustrative outcomes at commonly-used assumption levels (3% appreciation, 3% rent growth, 25% down, 30-year amortization, 10-year hold). Actual results depend on your specific inputs, local market, financing, execution quality, and tax situation. Use these as calibration guides for expectations — never as a substitute for running your own projection on your own property."

Individual results depend heavily on user inputs (appreciation, rent growth, hold period, leverage, tax rate, and exit timing). A deal that appears "Below Market" at 3% appreciation can become "Strong" at 5% appreciation, and vice versa. Always run the Conservative scenario to stress-test whether the deal remains attractive under softer market conditions.

---

## SCENARIOS (3 required, shown as tabs above output)

### Conservative
- Appreciation: user value − 2 pp (floor 0%)
- Rent Growth: user value − 1 pp (floor 0%)
- Vacancy: user value + 5 pp
- OpEx: user value + 5 pp
- Label: "What if the market softens?"

### Base
- All user-entered values, unchanged
- Default selected

### Optimistic
- Appreciation: user value + 1 pp
- Rent Growth: user value + 1 pp
- Vacancy: user value − 2 pp (floor 3%)
- OpEx: user value − 2 pp (floor 25%)
- Label: "What if markets stay favorable?"

### Winner Sensitivity warning
If IRR differs by more than 3 pp between Conservative and Optimistic:
Display: "IRR Sensitive to Assumptions — results highly dependent on appreciation and rent growth. Run multiple hold periods (Mode 2) to stress-test."

---

## SENSITIVITY TABLES (3 required in output)

**Performance guard (v2 round 3 expert fix):**
```
Maximum cells per table: 100 (caps at ~10×10 grid)
Maximum total cells across all 3 tables: 300

If cumulative cells would exceed 300:
  → Reduce grid density (e.g., drop from 6×6 to 5×5)
  OR
  → Lazy-load tables on user scroll (render only visible table, defer others)

Each cell recomputes the full 6-phase simulation (amortization → year-by-year → 
terminal sale → wealth waterfall → IRR). For a 6×6 grid = 36 full simulations.
For 3 tables × 36 cells = 108 simulations. This is on the edge of acceptable 
client-side compute (<500ms on modern hardware). Do NOT exceed.

v2 roadmap: consider precomputing sensitivity on a web worker if user reports 
UX lag. For v1, stay within cell limits and accept single-threaded render time.
```

Current table dimensions (within limits):
```
Table 1: 7 × 6 = 42 cells
Table 2: 6 × 5 = 30 cells  
Table 3: 6 × 4 = 24 cells
Total:   96 cells ✓ (below 100 per-table limit, below 300 total limit)
```

### Table 1 — Appreciation × Rent Growth
Rows: Appreciation 0/1/2/3/4/5/6%
Cols: Rent Growth 0/1/2/3/4/5%
Cells: Total ROI % at user's hold period
Highlight user's current assumption cell with indigo border.

### Table 2 — Hold Period × Appreciation
Rows: Hold 5/10/15/20/25/30 years
Cols: Appreciation 1/2/3/4/5%
Cells: Annualized IRR
Shows how hold period interacts with appreciation assumption.

### Table 3 — Leverage × Hold Period (advanced)
Rows: Down Payment 15/20/25/30/40/50%
Cols: Hold 5/10/15/20 years
Cells: Total ROI %
Shows leverage effect — higher leverage amplifies ROI but increases cash flow risk.

---

## VISUALIZATIONS

### 1. Wealth Waterfall Chart (primary)
Horizontal bar chart showing how Total Wealth is composed:
- Cumulative Cash Flow (blue)
- + Principal Paydown (indigo)
- + Appreciation (emerald, usually largest)
- + Estimated Depreciation Benefit (amber)
- − Capital Gains Tax (red)
- = Total Wealth Created (final bar, darkest indigo)

### 2. Year-by-Year Equity Chart
Line chart, X-axis = Year 1 to Hold Period, Y-axis = Dollar Equity Position
Three stacked lines:
- Cumulative Cash Flow (solid blue)
- Principal Paydown (solid indigo)
- Unrealized Appreciation (solid emerald)
Total equity = sum of three at any year.

### 3. Hold Period Sensitivity Chart (Mode 2)
Bar chart: X-axis = 5/10/15/20/25/30 years, Y-axis = Annualized IRR
Peak bar (highest IRR) highlighted with indigo border + "Optimal Hold" label.

### 4. Cash Flow Year-by-Year
Small bar chart, X-axis = Year, Y-axis = Pre-Tax Cash Flow
Shows annual cash flow growth over hold period (driven by rent growth vs fixed debt service).

---

## TEST CASES (8 required, tolerance ±1% for ROI, ±0.5 pp for IRR, ±$100 for dollars)

### Test 1 — Standard 10-year hold, Sunbelt market (v2 round 2 expert fix — ranges updated for split tax logic)
Inputs: Purchase $300K, 25% down, 7.5% rate, 30yr, $2,200 rent, 3% appreciation, 3% rent growth, 8% vacancy, 35% OpEx, 10 years, 24% tax, 20% land, 7% selling cost, 15% Federal LTCG, 0% State CG
Expected:
- Initial Cash Invested: ~$81,000 (25% down + 2% closing on $300K = $75K + $6K)
- Total ROI: 115-160% (v2 round 2 fix — reduced from 130-170% due to higher sale tax)
- IRR: 10-13% (v2 fix — reduced from 11-14%)
- Total Wealth: ~$93,000-$130,000 (v2 fix — reduced from $100-130K)
- Cash Flow component: ~$8,000-$15,000
- Principal Paydown: ~$33,000-$38,000
- Appreciation: ~$103,000
- Estimated Depreciation Benefit: ~$5,000-$8,000
- **Split Sale Tax (new v2 logic):**
  - Depreciation Recapture Tax: ~$21,500-$22,000 (25% × $87K accumulated depreciation)
  - LTCG Tax: ~$11,000-$12,000 (15% × $75K LTCG portion)
  - **Total Sale Tax: ~$32,000-$35,000** (was $25-32K under old single-rate logic)
- Verification: Rule 3 worked example produces $33,061 — falls in this range ✓

### Test 2 — Long 20-year hold, same property (v2 round 2 — ranges updated)
Same inputs, hold period 20 years
Expected:
- Total ROI: 310-420% (v2 fix — reduced from 350-450%; longer hold = more accumulated depreciation = more recapture tax)
- IRR: 9-11% (v2 fix — reduced from 10-12%)
- Appreciation still dominates waterfall (50%+ of total wealth)
- **Split Sale Tax:**
  - Accumulated Depreciation at Year 20: ~$174,500
  - Recapture Tax: ~$43,600
  - LTCG Tax: ~$35,000-$45,000 (depends on appreciation pace)
  - Total Sale Tax: ~$80,000-$90,000 (meaningfully larger than Test 1 due to longer depreciation)

### Test 3 — Short 3-year hold (v2 round 2 — hold reduced from 5 to 3 to match warning threshold)
Same property, hold 3 years
Expected:
- Total ROI: 10-40% (low — selling costs eat gains, minimal appreciation time)
- IRR: 4-8%
- Warning banner: "Hold Period ≤ 3 years — Very short hold periods are heavily weighted by selling costs and sale tax"
- Note: this test demonstrates why ≤3-year holds produce poor ROI

### Test 4 — High-leverage scenario (v2 round 2 — ranges updated)
Purchase $300K, 15% down, 8% rate, rest same as Test 1
Expected:
- Initial Cash Invested: ~$51,000 (15% down + 2% closing)
- Much lower Initial Cash → higher Total ROI %
- Total ROI ~160-200% (v2 fix — reduced from 180-220%)
- IRR similar to Test 1 (~10-12%) due to higher debt service offsetting leverage benefit
- Demonstrates leverage amplifies Total ROI but not Annualized Return proportionally

### Test 5 — Low-leverage scenario (all-cash) (v2 round 2 — ranges updated)
Purchase $300K, 100% down, same rest
Expected:
- Initial Cash Invested: ~$306,000 (full purchase + 2% closing)
- No debt service → much higher annual cash flow
- But much higher Initial Cash → lower Total ROI %
- Total ROI ~50-80% (v2 fix — reduced from 60-90%)
- IRR ~6-8% (v2 fix — reduced from 7-9%)
- Demonstrates leverage amplifies both ROI and risk; all-cash removes both

### Test 6 — Aggressive appreciation trigger (v2 round 2 — ranges updated)
Same as Test 1 but Appreciation 8%
Expected:
- Property Value at Year 10: ~$647K (vs $403K in Test 1)
- Total ROI inflated to 230%+ (v2 fix — reduced from 250%+; higher sale tax now eats more gain)
- Warning banner: "Aggressive appreciation assumption. US historical average is 3-4%"
- Conservative scenario: Total ROI drops to ~130-150% (demonstrates sensitivity)

### Test 7 — Negative cash flow property (v2 round 2 — ranges unchanged, already conservative)
Purchase $400K, 25% down, 8% rate, $1,800 rent (low rent-to-price), 3% appreciation, 3% rent growth, 10% vacancy, 40% OpEx, 10 years
Expected:
- Cumulative Cash Flow: NEGATIVE (~-$15,000)
- Appreciation: ~$137,000
- Sale Tax (new split logic): ~$42,000-$48,000
- Total Wealth: ~$75,000-$110,000
- Total ROI: 75-110%
- IRR: 5-7% (weak — appreciation carries return)
- Warning: "Deal has negative cash flow. Appreciation carries the return — review market assumptions."

### Test 8 — Consistency with Rental Property Calculator
Inputs that exactly match Test 1 of Rental Property Calculator RIS
Expected: Year 1 CoC value within ±0.1 pp of Rental Property Calculator's Year 1 CoC
This is a **cross-calculator invariant** check.

---

## URL IMPORT SCHEMA

From Rental Property Calculator:
```
/rental-property-roi-calculator?p=300000&dp=25&lr=7.5&lt=30&r=2200&vc=8&op=35&ga=3&gr=3
```

All acquisition and financing fields supported via short param keys (p, dp, cc, rb, lr, lt, r, vc, op, ga, gr, hp, mtr, lv, sc, cgf, cgs).

Integration: add "Analyze long-term ROI" button to Rental Property Calculator results page that imports state here.

---

## OUTPUT CHECKLIST

Before finalizing this RIS, verify:

### Formula correctness
- [ ] Amortization formula produces correct monthly payment (standard textbook formula)
- [ ] Principal paydown = original loan − remaining balance at hold-period end
- [ ] Appreciation formula uses compound growth over hold period
- [ ] Depreciation applies to (1 − Land %) × basis, over 27.5 years
- [ ] **Sale tax uses SPLIT formula (v2 round 2 expert fix): Depreciation Recapture Tax (25% × min(Accumulated Depreciation, Total Gain)) + Capital Gains Tax ((Federal LTCG + State CG) × max(0, Total Gain − Accumulated Depreciation)). NOT a single combined rate on full gain. min() and max() guards mandatory for loss-sale edge cases.**
- [ ] IRR uses Newton-Raphson with CAGR fallback
- [ ] Total Wealth = 4 components minus Capital Gains Tax
- [ ] Year 1 CoC matches Rental Property Calculator (cross-calculator invariant)

### Input validation
- [ ] Hold Period range 1-30 years enforced (v2 expert fix — expanded from 5-30)
- [ ] Down Payment 0-100% enforced
- [ ] All percentage fields have min/max sanity checks
- [ ] Currency fields accept numbers only, allow thousands separators
- [ ] Placeholders are instructions ("Enter purchase price") NOT example numbers

### UI/UX
- [ ] 3 modes via top-level tabs (Forward ROI, Hold Sensitivity, Compare Exits)
- [ ] Indigo / Blue / Emerald color coding per mode
- [ ] Tax parameters collapsed in Advanced section by default
- [ ] Primary metrics (Total ROI + IRR) always prominently displayed
- [ ] Wealth Waterfall chart is hero visualization
- [ ] Year-by-Year Equity chart complements waterfall
- [ ] 3 sensitivity tables in Advanced section
- [ ] 3 scenarios (Conservative / Base / Optimistic) as tabs

### Warnings and guards
- [ ] Aggressive Appreciation (>6%) warning
- [ ] Aggressive Rent Growth (>6%) warning
- [ ] Short hold (<5 years) warning
- [ ] Low vacancy (<5%) warning
- [ ] Negative Total ROI banner + red styling
- [ ] IRR Sensitivity warning when Conservative vs Optimistic IRR differ >3 pp
- [ ] CG tax simplification disclosure in Limitations

### Language and tone
- [ ] Uses "projects", "estimates" never "calculates" or "determines"
- [ ] Pre-tax vs after-tax labeling explicit (never blur the distinction)
- [ ] "Not investment advice" disclaimer in Limitations
- [ ] CPA consultation recommended for tax-sensitive decisions
- [ ] No "qualifies for" language (DSCR calculator bug)

### Cross-calculator integration
- [ ] Import link from Rental Property Calculator with short params
- [ ] Export link to Compare Real Estate Deals (for 5-year cross-strategy comparison)
- [ ] Saved Scenarios widget consistent with other calculators (N/20 saved · Compare all)
- [ ] Year 1 CoC consistency invariant tested

### Test suite
- [ ] All 8 test cases pass within tolerance
- [ ] Test 8 cross-calculator invariant verified

### v2 round 1 expert fixes applied (confirmation list)
- [ ] **Waterfall ≠ IRR cash flow**: explicit separation with ASCII box, invariant check |Waterfall − IRR Sum| < $100 (v2 Fix 1)
- [ ] **"Estimated Depreciation Benefit" naming everywhere**: NOT "Tax Savings" — Rule 2a with passive loss rationale + tooltip (v2 Fix 2)
- [ ] **Depreciation Recapture split from LTCG**: Rule 3 split formula (Recapture × 25% + Remaining Gain × LTCG rate) with worked Test 1 example showing $33,061 vs simplified $24,334 (v2 Fix 3)
- [ ] **Negative ROI allows negative IRR**: Rule 8 with 3 cases (valid positive, valid negative with banner, solver-fails → CAGR → N/A only for catastrophic loss) (v2 Fix 4)
- [ ] **Mode 3 scope reduced**: only "Sell Year A vs Sell Year B". 1031 Exchange + Mid-hold Refi → v2 roadmap (v2 Fix 5)
- [ ] **"Wealth Break-Even Hold Period" naming**: distinguishes from operational cash-flow break-even (v2 Fix 6)
- [ ] **Hold Period range 1-30** (expanded from 5-30), warning threshold moved to <3 years with sub-1-year note about ordinary income rates (v2 Fix 7)
- [ ] **Benchmarks disclaimer strengthened**: "illustrative patterns, NOT measured statistical datasets, NOT market research" — aligned with Compare Deals pattern (v2 Fix 8)
- [ ] **Rule 10 CANONICAL COMPOSITION label contract**: required phrases enumerated, forbidden phrases listed ("After-Tax ROI", "Tax Savings" banned), mandatory methodology footer (v2 Fix 9)

---

- [ ] **Rule 3 formula uses canonical form with min()/max() guards (v2 round 2 Fix 1): `Depreciation Recapture Tax = min(Accumulated Depreciation, max(0, Total Gain)) × 25%` and `LTCG Gain Portion = max(0, Total Gain − Accumulated Depreciation)`. Loss-sale edge case explicitly handled (all taxes = 0).**
- [ ] **Hold Period warning threshold = ≤3 years (not <3) — includes 3-year case (v2 round 2 Fix 2)**
- [ ] **Year-1 sale tax disclosure present when Hold Period = 1 year, warning user about short-term vs long-term ambiguity — does NOT block 1-year analysis (v2 round 2 Fix 2)**
- [ ] **Test cases 1-7 ranges UPDATED for split tax logic (v2 round 2 Fix 3). Test 1 Total Sale Tax: $32-35K (was $25-32K). Test 1 Total ROI: 115-160% (was 130-170%). Test 1 IRR: 10-13% (was 11-14%). Test 3 hold changed 5→3 years to match new warning threshold.**
- [ ] **Mode 2 sensitivity table checkpoints note explicitly states 5/10/15/20/25/30 fixed checkpoints, while Mode 1 supports full 1-30 range (v2 round 2 Fix 5)**
- [ ] **Phase 4 tax block contains POINTER ONLY to Rule 3 — no formula duplication. Removed old "combined CG rate" text that contradicted Rule 3 split logic (v2 round 3 Fix 1)**
- [ ] **Wealth Break-Even has implementation note: recompute terminal sale per year Y via Rule 3 split formula — do NOT reuse final-year values or linear interpolate (v2 round 3 Fix 2)**
- [ ] **Sensitivity tables have performance guard: max 100 cells per table, 300 total across 3 tables. Current dimensions 42+30+24=96 cells total (within limits) (v2 round 3 Fix 3)**
- [ ] **IRR fallback has full transparency UI: "(approximated)" label, info icon, tooltip explaining CAGR fallback, amber color, methodology footer note. No silent fallbacks (v2 round 3 Fix 4)**

**End of RIS v1 → v2 round 1 → v2 round 2 → v2 round 3 (current, 3 review rounds, 18 fixes total). This document defines the complete mathematical and UX specification for the Rental Property ROI Calculator. Mathematical correctness, tax accuracy, and UX transparency all reviewed. Pair with rental-property-roi-seo-prompt-final.md for full SEO package.**
