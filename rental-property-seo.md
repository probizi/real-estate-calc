# SEO Package Prompt — Rental Property Calculator

You are a senior SEO copywriter specializing in US real estate investment content. Your job is to produce a **complete SEO content package** for the Rental Property Calculator page.

The output of this prompt is pure content — no code, no HTML, no Vue. It will later be combined with the RIS specification and the Master Prompt to generate the actual page.

---

## YOUR TASK

Write an SEO package for:

```
Calculator Name:    Rental Property Calculator
Slug:               rental-property-calculator
Primary keyword:    rental property calculator
Secondary keywords: rental property investment calculator, rental property roi calculator,
                    multi-year rental calculator, rental property return calculator
Primary metric:     Total Return % (over hold period) with IRR as derived
Target audience:    US real estate investors analyzing buy-and-hold rental deals —
                    from first-time landlords to experienced multi-property investors
Traffic priority:   #1 in Priority 1 roadmap (90K-120K searches/month — highest volume)
```

Use the attached RIS specification (`rental-property-ris.md`) as the source of truth for formulas, thresholds, benchmarks, and test cases. Do not invent numbers — pull them from the RIS.

---

## CRITICAL DISTINCTIONS TO PRESERVE

This is the flagship "deal analyzer" calculator. It differs from every other calculator on RealCalc in one key way:

**This is a MULTI-YEAR projection calculator, not a single-year snapshot.**

- Cap Rate Calculator = single-year unlevered yield
- NOI Calculator = single-year operating income
- Cash-on-Cash Calculator = single-year levered return (Year 1)
- DSCR Calculator = single-year lender ratio
- **Rental Property Calculator = multi-year hold analysis** with appreciation, rent growth, principal paydown, and exit

### Critical rules throughout the SEO package

**1. Primary metric is Total Return %, not Cap Rate or IRR**

Always displayed as a pair: percentage + absolute dollars.
Example: "Total Return: +89.4% ($385,000 over 10 years)"

**2. IRR is secondary, not primary**

IRR is mentioned alongside Total Return as "professional metric" — useful for pros but not the headline number for broad audience.

**3. Multi-year framing is everywhere**

Content must emphasize the hold period (5/7/10/15/20/30 years) — this is what makes Rental Property Calculator different from single-year tools like Cap Rate or CoC.

**4. Before-tax analysis only**

Calculator is before-tax. Must be labeled prominently. Tax analysis is deliberately out of scope for v1 — too state-dependent.

**5. Exit methodology matters**

Two exit methods: "Exit via Cap Rate" (professional default) and "Exit via Appreciation" (simpler). Both must be explained — don't favor one without context.

**6. 2026 rate environment context**

- Investment property rates 7.5-8%
- Total Return over 10 years typically 60-100% in 2026 (vs 100-180% in 2015-2020)
- IRR typically 8-13% (vs 12-18% pre-2022)
- Don't use pre-2022 benchmarks

**7. This is the "one calculator to rule them all"**

Content should position this as the **deal analyzer** that uses all other metrics (Cap Rate, NOI, CoC, DSCR) as components. Link to specialized calculators for deeper analysis of each component.

---

## RULES

1. **US market only.** All examples, cities, states, benchmarks US-specific and 2026-realistic.

2. **Content depth matches canonical.** Cap Rate Calculator is reference for depth per section.

3. **No generic filler.** Every paragraph contains specific numbers, real cities, or concrete examples.

4. **Primary keyword placement:**
   - Must appear in TITLE, H1, META DESCRIPTION, OVERVIEW_P1, and at least 2 H2 headings
   - Natural density — no stuffing

5. **Secondary keywords:**
   - Must use at least 2 of these 3 specific secondary keywords naturally in OVERVIEW_P1:
     - "rental property investment calculator"
     - "rental property roi calculator"
     - "rental property return calculator"
   
   **STRICT RULE:** Use ONLY the specified secondary keywords above. Do NOT substitute with 
   variations like "real estate investment calculator", "property ROI tool", "investment property 
   return calculator", or other synonyms. The exact phrasing matters for SEO — use at least 2 
   of the 3 listed keywords verbatim in OVERVIEW_P1.

6. **Sentence case** for headings.

7. **Output format:** structured Markdown with `----` section dividers.

---

## REQUIRED OUTPUT STRUCTURE

Follow this structure exactly. Do not skip sections. Do not add sections.

```
----
TITLE:              [MUST follow strict pattern:
                     Required elements:
                     - "Rental Property Calculator" at the start
                     - ONE of these USP markers: "2026", "ROI", "Multi-Year", "Return", "Investor"
                     - Brand suffix "| RealCalc"
                     - Total length 50-60 characters — STRICT MAXIMUM 60 CHARS
                     - RECOMMENDED TARGET RANGE: 45-55 characters for safety margin
                     
                     Approved examples (all within safety range):
                     "Rental Property Calculator — 2026 ROI Tool | RealCalc"  (54 chars)
                     "Rental Property Calculator — Return & IRR | RealCalc"  (52 chars)
                     "Rental Property Calculator — Investor Tool | RealCalc"  (54 chars)
                     
                     **MANDATORY VALIDATION (perform BEFORE outputting):**
                     1. Count the exact character length of your proposed TITLE
                     2. If length exceeds 60 characters → REGENERATE with a shorter version
                     3. If length is 58-60 → prefer a shorter alternative from the 45-55 range
                     4. Do NOT output any TITLE that exceeds 60 characters under any circumstances
                     
                     Remember: em dashes (—), pipes (|), and special characters can render 
                     differently across platforms. A 45-55 char title is always safer.]

META DESCRIPTION:   [150-160 chars, primary keyword + USP + CTA. Must mention 
                    "multi-year" or "total return" or "IRR" for specificity. 
                    Example: "Analyze any US rental property with multi-year 
                    Total Return, IRR, cash flow, and exit scenarios. Free 
                    calculator for 2026 investors."]

H1:                 [contains primary keyword, follows pattern: 
                    "Rental Property Calculator — [Short USP] for US Real 
                    Estate Investors"]
----
OVERVIEW_P1:        [2-3 sentences — what this calculator is, what it measures, 
                    who it's for. Primary keyword in first sentence. Emphasize 
                    MULTI-YEAR nature vs single-year tools.
                    
                    REQUIRED: Must use at least 2 of these 3 specific secondary 
                    keywords naturally — use ONLY these exact phrases:
                    - "rental property investment calculator"
                    - "rental property roi calculator"
                    - "rental property return calculator"
                    
                    **Do NOT substitute with variations like:**
                    - "real estate investment calculator"
                    - "property roi tool"
                    - "rental income calculator"
                    - "investment property calculator"
                    
                    The 3 specified phrases have highest search volume — using 
                    alternatives sacrifices SEO ranking. Match exact wording.]

OVERVIEW_P2:        [2-3 sentences — how it works. Mention Total Return as 
                    primary output, IRR as professional metric, cash flow and 
                    equity projections, 3 modes (analyze, find required rent, 
                    find max purchase price). Mention hold period options.]

OVERVIEW_P3:        [2-3 sentences — who uses it and when. First-time landlords, 
                    seasoned investors, syndication sponsors, agents evaluating 
                    deals for buyers. When pairing with specialized calculators 
                    for deeper analysis.]

OVERVIEW_P4:        [2-3 sentences — what calculator does NOT include. Before-tax 
                    analysis label required here. No depreciation recapture, 
                    no 1031 exchange, no opportunity cost. Pair with Cap Rate, 
                    NOI, DSCR, Cash-on-Cash for complete analysis — link out to 
                    those tools.]
----
WHAT_IS_H2:         What Is Rental Property Total Return? (Multi-Year Analysis Explained)

WHAT_IS_P1:         [3-4 sentences — definition of Total Return with formula inline:
                    Total Return % = (Cumulative Cash Flow + Net Sale Proceeds − 
                    Total Cash Invested) ÷ Total Cash Invested × 100. Explain 
                    the four return sources (cash flow, principal paydown, 
                    appreciation, reinvested gains). Emphasize this is bottom-line 
                    answer to "how much will I make".]

WHAT_IS_P2:         [3-4 sentences — why investors use it. Concrete example: 
                    two identical properties, one held 5 years, one held 15 years 
                    — same Year 1 cash flow but vastly different Total Return due 
                    to compound appreciation and principal paydown. Show how 
                    multi-year is essential vs single-year Cap Rate view.]
----
HOW_TO_USE_H2:      How to Use the Rental Property Calculator
HOW_TO_USE_INTRO:   [1 sentence — "Follow these steps to analyze any US rental 
                    property over any hold period in under 3 minutes."]

STEP_1:
  TITLE:            Choose a calculation mode
  BODY:             [2-3 sentences — standard "Analyze Property", reverse 
                    "Find Required Rent", or reverse "Find Max Purchase Price". 
                    When to use each mode.]

STEP_2:
  TITLE:            Enter property and Year 1 income
  BODY:             [2-3 sentences with specific US data — typical 2026 rent 
                    ranges, gross rent as Year 1 baseline, vacancy 5-8% typical]

STEP_3:
  TITLE:            Enter operating expenses (simple or detailed)
  BODY:             [2-3 sentences — expenses typically 35-50% of EGI for 
                    residential, toggle to detailed mode for per-category 
                    breakdown]

STEP_4:
  TITLE:            Set growth assumptions
  BODY:             [2-3 sentences — rent growth 2-4%, expense growth 2.5-3.5%, 
                    typical 2026 assumptions. Note that rent growth above 4% 
                    or expense growth below 2% is optimistic.]

STEP_5:
  TITLE:            Configure financing and hold period
  BODY:             [2-3 sentences — 25% down, 7.5% rate typical for 2026 
                    investment property. Hold period 5/7/10/15/20/30 years. 
                    Exit method: Cap Rate (default) or Appreciation.]

PRO_TIPS (4 bullet points with concrete US data):
  - [e.g. "For professional deal analysis, use Exit via Cap Rate method — 
    your exit cap should typically be 0.5-1% higher than your entry cap to 
    account for market uncertainty."]
  - [e.g. "IRR above ~10% is generally considered strong in 2026 for 10-year 
    holds. If your IRR is under 6%, you're likely paying too much or 
    over-leveraged — reconsider the deal."]
  - [e.g. "Use Find Max Purchase Price mode to determine your offer ceiling 
    — this tells you the price at which the deal still hits your target 
    return, factoring in your specific financing."]
  - [e.g. "Multi-year projections compound — a 0.5% difference in rent growth 
    over 10 years can shift Total Return by 8-15 percentage points."]

RESULT_GUIDE (6 bullet points covering ALL tiers from RIS Section 6 — must 
match RIS exactly, no collapsing):

  Thresholds MUST match RIS exactly — do NOT modify, round, or merge ranges:
  - ≥ 150%
  - 100% - 149%
  - 60% - 99%
  - 30% - 59%
  - 0% - 29%
  - < 0%

  - [≥ 150% — Exceptional: top-quartile outcome, usually requires value-add, 
    BRRRR, or strong market appreciation]
  - [100-149% — Strong: above-market return, typical for well-located 
    stabilized deals in growing markets]
  - [60-99% — Solid: market-average for 2026 10-year hold with 25% down, 
    reasonable outcome]
  - [30-59% — Weak: below-market, may be acceptable in high-appreciation 
    markets for long-term holders]
  - [0-29% — Critical: barely positive, opportunity cost likely exceeds 
    actual return, reconsider]
  - [Below 0% — Loss: negative total return, investor loses money, do not 
    proceed without major changes]

  These tiers assume 10-year hold. For shorter holds, reduce expectations. 
  Note: "Loss" tier is different from "Critical" tier — Loss means actual 
  money lost, Critical means barely positive.
----
INPUTS_OUTPUTS_H2:  Inputs & Outputs — Field Reference
INPUTS_OUTPUTS_INTRO: What each field means and where to find the numbers.

INPUTS_TABLE (one row per field from the RIS, organized by section):

Property & Income fields:
  | Field                | What it means                                   | Where to find the numbers                |
  | Purchase Price       | ...                                             | MLS, broker OM, comps                    |
  | Property Type        | ...                                             | Property record                          |
  | Monthly Rent (Year 1)| ...                                             | Current lease or market rent estimate    |
  | Vacancy Rate         | ...                                             | Local comps, historical T-12 if available|
  | Other Income         | ...                                             | Parking, laundry, late fees              |

Operating Expenses fields:
  | Property Tax         | ...                                             | County records, current tax bill         |
  | Insurance            | ...                                             | Current policy or quote                  |
  | Management           | ...                                             | 6-10% of gross for residential           |
  | Maintenance          | ...                                             | 1-2% of property value annually          |
  | Utilities, HOA, etc  | ...                                             | ...                                      |

Growth Assumptions fields:
  | Rent Growth Rate     | Annual % rent increases                         | 2026 typical 2-4% per year               |
  | Expense Growth Rate  | Annual % expense increases                      | 2026 typical 2.5-3.5% per year           |

Financing fields:
  | Down Payment %       | ...                                             | ...                                      |
  | Interest Rate        | ...                                             | Current lender quote — 2026 range 7-8%   |
  | Loan Term            | ...                                             | 15/20/25/30 years                        |
  | Closing Costs %      | ...                                             | 2-5% of purchase price typical           |

Hold Period & Exit fields:
  | Hold Period          | Years to hold property                          | 5/7/10/15/20/30 years                    |
  | Exit Method          | Cap Rate vs Appreciation                        | Professional default: Cap Rate           |
  | Exit Cap Rate        | (if Cap Rate mode) Market cap at exit           | Typically 0.5-1% higher than purchase    |
  | Appreciation Rate    | (if Appreciation mode) Annual % price growth    | 2026 conservative 2.5-4%                 |
  | Sale Costs %         | Broker commission + closing                     | Typical 6% (4-7% range)                  |

OUTPUTS_TABLE:
  | Output                       | What it means                                   | Primary use                              |
  | Total Return %               | Multi-year return on invested cash              | Headline metric, big number              |
  | Total Profit ($)             | Absolute dollar gain over hold period           | Concrete dollar answer                   |
  | IRR                          | Time-weighted annual return                     | Professional comparison to alternatives  |
  | Year 1 Cash-on-Cash          | First-year cash return                          | Short-term cash flow check               |
  | Year 1 DSCR                  | First-year debt coverage                        | Lender qualification                     |
  | Equity at Exit               | Total equity when sold                          | Cash-out at end of hold                  |
  | Cumulative Cash Flow         | Total cash from operations                      | Income stream over years                 |
  | Net Sale Proceeds            | Cash from sale after loan and costs             | Exit cash                                |
----
FORMULA_H2:         Total Return Formula & Multi-Year Calculation Method
FORMULA_SUBTITLE:   The exact math this calculator uses — plus a worked 
                    Atlanta, GA 10-year example for 2026

STEP_BY_STEP (8-10 numbered steps):
  1. Calculate Year 1 NOI (Gross Rent × (1 - Vacancy) + Other Income - Expenses)
  2. Calculate Annual Debt Service (standard amortization, stays flat)
  3. Calculate Year 1 Cash Flow (NOI - Annual Debt Service)
  4. Project Year 2 through Year N: grow rent and expenses by their respective rates
  5. Calculate cumulative cash flow across all years
  6. Calculate Year N NOI (grown from Year 1 NOI)
  7. Calculate Sale Price at Exit — use ONLY ONE method based on exitMethod toggle:
     IF exitMethod === 'cap-rate': Sale Price = Year N NOI ÷ Exit Cap Rate
     IF exitMethod === 'appreciation': Sale Price = Purchase Price × (1 + appreciationRate)^N
     **NEVER apply both methods. NEVER mix them. NEVER average them.** The two are 
     mutually exclusive — mixing produces double-counting of appreciation.
  8. Calculate remaining loan balance at Year N
  9. Calculate Net Sale Proceeds (Sale Price - Remaining Loan - Sale Costs)
  10. Calculate Total Return: (Cumulative CF + Net Sale Proceeds - Total Cash Invested) ÷ Total Cash Invested × 100

FORMULA_BOX:
  Primary formula:    Total Profit = Cumulative Cash Flow + Net Sale Proceeds − 
                                     Total Cash Invested
                      Total Return % = (Total Profit ÷ Total Cash Invested) × 100
  
  Annual compounding: Year N Rent = Year 1 Rent × (1 + rentGrowth)^(N-1)
                      Year N Expenses = Year 1 Expenses × (1 + expenseGrowth)^(N-1)
                      Annual Debt Service = constant (fixed-rate, no refinance)
  
  Exit price:         Use ONLY ONE method based on the exitMethod toggle —
                      never both, never averaged:
                      
                      IF exitMethod === 'cap-rate' (default, professional):
                        Sale Price = Year N NOI ÷ Exit Cap Rate
                      
                      IF exitMethod === 'appreciation' (simpler alternative):
                        Sale Price = Purchase Price × (1 + appreciationRate)^N
  
  IRR:                Numerical solver (Newton-Raphson → bisection fallback)
                      on the full cash flow series

FORMULA_VISUAL (ASCII-style text schema):
  Year 1 Rent      [grows to Year N]
  − Vacancy
  + Other Income
  = Effective Gross Income
  − Operating Expenses  [grows at own rate]
  = NOI
  − Annual Debt Service [stays flat]
  = Annual Cash Flow
  × Hold Period N years
  = Cumulative Cash Flow
  + Net Sale Proceeds (at exit)
  − Total Cash Invested
  = Total Profit
  ÷ Total Cash Invested
  = Total Return (%)

FORMULA_EXAMPLE:
  Location:         Atlanta, GA (realistic 2026 market for Total Return 60-90%)
  Property type:    Single-family rental, 3BR/2BA, 1990s build, stabilized
  Market context:   [1 sentence about why Atlanta submarket supports example 
                    numbers in 2026 — moderate property taxes, steady rent 
                    growth, accessible Sun Belt market]

  STRICT NUMERIC RANGES — use values within these bands so Total Return lands 
  in 60-90% (Solid tier):
    Purchase Price:          $320,000-$380,000
    Monthly Rent:            $2,400-$2,800
    Vacancy Rate:            7%
    Operating Expenses:      35-42% of EGI (MUST be in dollars, not %)
    Rent Growth:             3%
    Expense Growth:          3%
    Down Payment:            25%
    Interest Rate:           7.5%
    Loan Term:               30 years
    Closing Costs:           3%
    Hold Period:             10 years
    Exit Method:             Cap Rate
    Exit Cap Rate:           6.5%
    Sale Costs:              6%

  EXPECTED RESULT: Total Return should naturally fall in 60-90% (Solid tier) 
  with realistic inputs. IRR should fall in **6-10%** range (consistent with 
  Total Return tier and 10-year hold). Do NOT artificially manipulate numbers. 

  POST-CALCULATION VERIFICATION (mandatory — perform BOTH checks):
  
  Check 1 — Total Return:
  - If Total Return landed in 60-90% (target Solid tier) → proceed
  - If Total Return is in 50-59% or 91-100% → acceptable, note slightly 
    off-target in interpretation
  - If outside 50-100% → explicitly explain why in interpretation paragraph, 
    do NOT retroactively tweak inputs

  Check 2 — IRR consistency:
  - IRR should generally fall in 6-10% range for 10-year holds in 2026
  - IRR should roughly correlate with Total Return for 10-year holds:
    • 60% Total Return ≈ 6-7% IRR
    • 75% Total Return ≈ 7-8% IRR
    • 90% Total Return ≈ 8-10% IRR
  - If IRR is dramatically out of sync (e.g. 70% return but 14% IRR, 
    or 80% return but 4% IRR) → there's an error in cash flow timing 
    or amortization. Re-check math.
  - Do NOT output inconsistent Total Return / IRR pairs — they must tell 
    the same story about the deal

  Calculation (step by step — every step must show actual dollar math):
    Step 1: Year 1 Gross Rent = [$ amount]
    Step 2: Year 1 Vacancy Loss = [$ amount]
    Step 3: Year 1 EGI = [$ amount]
    Step 4: Year 1 Operating Expenses = [$ amount]
    Step 5: Year 1 NOI = [$ amount]
    Step 6: Loan Amount = [$ amount]
    Step 7: Monthly Payment (amortization) = [$ amount]
    Step 8: Annual Debt Service = [$ amount]
    Step 9: Year 1 Cash Flow = [$ amount]
    Step 10: Year 10 NOI = [$ amount — compounded forward]
    Step 11: Cumulative Cash Flow over 10 years = [$ amount]
    Step 12: Sale Price at Year 10 = Year 10 NOI ÷ 6.5% = [$ amount]
    Step 13: Remaining Loan Balance at Year 10 = [$ amount]
    Step 14: Sale Costs = 6% × Sale Price = [$ amount]
    Step 15: Net Sale Proceeds = [$ amount]
    Step 16: Total Cash Invested = Down + Closing + Rehab + Reserves = [$ amount]
    Step 17: Total Profit = Cumulative CF + Net Sale Proceeds − Total Cash Invested = [$ amount]
    Step 18: Total Return % = Total Profit ÷ Total Cash Invested × 100 = [X%]
    Step 19: IRR solved from cash flow series = [X%]

  Result:
    Total Return = [realistic 60-90%]
    Total Profit = [$ amount]
    IRR = [realistic 8-11%]

  Interpretation:
    [2-3 sentences tying the result to the Solid tier and 2026 context]
----
RIS_H2:             What Your Total Return Result Means

RIS_INTRO:          [1-2 sentences — "Your Total Return tells you the bottom-line 
                    multi-year gain on the cash you invested. Here's how to 
                    interpret each range for 2026 US 10-year holds."]

RIS_EXCEPTIONAL (Tier 1: 150%+):
  Range:            150%+ — Exceptional
  Markets:          [value-add deals, BRRRR with cash-out refinance, strong 
                    appreciation markets like Austin, Nashville, Phoenix]
  Meaning:          [3-4 sentences — top-quartile outcome. Usually requires 
                    forcing appreciation through renovation or buying in 
                    high-growth submarkets. Rare at 75% LTV / 7.5% rate on 
                    stabilized deals. IRR typically 15%+.]

RIS_STRONG (Tier 2: 100-149%):
  Range:            100-149% — Strong
  Markets:          [above-market 2026 deals, well-located stabilized assets 
                    in growing Sun Belt metros like Atlanta, Charlotte, Tampa]
  Meaning:          [3-4 sentences — above-market return. Typical for disciplined 
                    buying in strong markets with 3-4% rent growth and 3-4% 
                    appreciation. IRR 10-14%. Doubles investor money in 10 years.]

RIS_SOLID (Tier 3: 60-99%):
  Range:            60-99% — Solid
  Markets:          [market-average 2026 outcomes, standard stabilized deals 
                    in secondary metros like Columbus, Indianapolis, 
                    Kansas City]
  Meaning:          [3-4 sentences — realistic 2026 target for disciplined 
                    10-year hold at 25% down. IRR 6-10%. Beats passive 
                    investing but not dramatically. Most deals that pencil 
                    land here.]

RIS_WEAK (Tier 4: 30-59%):
  Range:            30-59% — Weak
  Markets:          [primary coastal markets with appreciation-play strategies, 
                    deals with compressed cap rates]
  Meaning:          [3-4 sentences — below-market return. Acceptable only if 
                    investor has strong appreciation thesis for specific 
                    submarket. Below broad equities (~150-200% over 10 years 
                    historically) — need a reason to accept this. IRR 3-6%.]

RIS_CRITICAL_AND_LOSS (Tier 5 and 6: 0-29% and below 0%):
  Range:            Below 30% — Critical, below 0% — Loss
  Markets:          [over-leveraged deals, declining markets, deals with 
                    fundamental underwriting problems]
  Meaning:          [4-5 sentences — Critical (0-29%) means barely positive 
                    — opportunity cost likely higher than actual return. Loss 
                    (below 0%) means negative total outcome after hold period. 
                    Both are red flags. Required response: check inputs, 
                    reduce leverage, or walk away. Don't confuse Loss tier 
                    with Negative Leverage — they're different concepts.]

RIS_CONTEXT:
  Title:            Why Total Return varies so much by hold period in 2026
  Body:             [4-6 sentences — explanation of how hold period dramatically 
                    shifts Total Return. Two examples: (1) same deal at 5 years 
                    might show 35% return while at 15 years shows 130% due to 
                    compounded appreciation and paydown, (2) a deal barely 
                    breaking even year 1 can still deliver strong 10-year 
                    Total Return. Note that 2026 rate environment means Year 1 
                    cash flow is usually thin — the Total Return story gets 
                    better over time as rent grows while debt service stays 
                    flat.]
----
BENCHMARKS_H2:      Rental Property Total Return Benchmarks (2026, 10-Year Hold)
BENCHMARKS_INTRO:   [2 sentences — "Typical 2026 Total Return outcomes at 
                    standard 25% down, 7.5% rate, 30-year loan, and 10-year 
                    hold. Use as starting points — actual returns vary 
                    significantly based on property, market, and execution. 
                    These are underwriting estimates calibrated to 2026, 
                    not market-reported Total Return statistics."]

BENCHMARK_BY_TYPE_H3: By Property Type
BENCHMARK_BY_TYPE_TABLE (5 rows from RIS):
  | Property Type          | Weak Markets  | Standard Markets | Strong Markets |
  | Single-Family Rental   | 30-60%        | 60-90%           | 90-130%        |
  | Small Multifamily 2-4  | 40-70%        | 70-110%          | 110-150%       |
  | Large Multifamily 5+   | 50-80%        | 80-120%          | 120-160%       |
  | Condo (rental)         | 20-50%        | 50-80%           | 80-110%        |
  | Commercial (small)     | 40-80%        | 80-120%          | 120-180%       |

BENCHMARK_BY_STATE_H3: By State — Typical Total Return (10-year hold, residential)
BENCHMARK_BY_STATE_CARDS (8 cards, one per state — ranges from RIS):

  **STRICT REQUIREMENT for every state note: explain WHY the Total Return range differs 
  using AT LEAST TWO specific factors — not one.** Generic notes with just a "primary 
  driver" label are insufficient.
  
  Attribute to combinations of these factors:
  - Cash flow vs appreciation mix (primary driver varies by state)
  - Property tax burden (TX 2-2.5%, FL ~1.5%, CA ~0.8% effective)
  - Insurance costs (FL hurricane, CA wildfire, TX hail)
  - Rent regulation (NY stabilization, CA caps, WA tenant protections)
  - Rent-to-price ratio (coastal compressed vs Sun Belt expanded)
  - Cap rate environment (coastal low, Midwest high)
  - Population inflow/outflow trends (TX gains, NY/CA losses)
  
  Example of good state note: "Primary driver: appreciation + low effective property tax. 
  Combined with high rent-to-price compression, most California returns come from appreciation 
  rather than Year 1 cash flow."
  
  Example of weak state note (do NOT do this): "Appreciation-driven, high property tax."

  California (CA):
    Range:     Total Return 50-80%
    IRR:       5-8%
    Driver:    Appreciation-driven
    Note:      [Must cite at least 2 factors: e.g. low effective property tax (~0.8% via 
              Prop 13) AND high price-to-rent ratio AND appreciation history. Combine 
              into a coherent 2-3 sentence explanation.]

  Texas (TX):
    Range:     Total Return 80-120%
    IRR:       8-11%
    Driver:    Balanced (cash flow + appreciation)
    Note:      [...]

  Florida (FL):
    Range:     Total Return 60-100%
    IRR:       6-10%
    Driver:    Balanced with insurance drag
    Note:      [Insurance pressure — especially in coastal counties — 
              compresses cash flow component of return.]

  New York (NY):
    Range:     Total Return 40-70%
    IRR:       4-7%
    Driver:    Appreciation-driven (outside NYC regulation)
    Note:      [Rent stabilization limits rent growth in NYC five boroughs. 
              Upstate markets show higher cash flow component.]

  Arizona (AZ):
    Range:     Total Return 80-120%
    IRR:       8-11%
    Driver:    Balanced leaning appreciation
    Note:      [...]

  Georgia (GA):
    Range:     Total Return 90-130%
    IRR:       9-12%
    Driver:    Cash flow-driven
    Note:      [Atlanta metro offers strong rent-to-price ratios relative to 
              Sun Belt peers, producing higher cash flow component of 
              10-year returns.]

  Colorado (CO):
    Range:     Total Return 60-100%
    IRR:       6-10%
    Driver:    Appreciation-driven
    Note:      [...]

  Washington (WA):
    Range:     Total Return 60-100%
    IRR:       6-10%
    Driver:    Appreciation-driven
    Note:      [...]

BENCHMARK_BY_STATE_TABLE (same 8 states, tabular format with fuller notes, 
2-3 sentences each):
  | State      | Total Return | IRR    | Primary Driver          | Key Notes |
  | California | 50-80%       | 5-8%   | Appreciation            | ...       |
  | Texas      | 80-120%      | 8-11%  | Balanced                | ...       |
  | ...        | ...          | ...    | ...                     | ...       |

SOURCES_NOTE:       These Total Return ranges are synthesized from multiple 
                    industry sources including National Association of 
                    REALTORS housing data, CoStar multifamily reports, 
                    Roofstock market analysis, and 2026 rate environment 
                    modeling. Total Return itself is not directly reported 
                    as a market statistic — these ranges are derived by 
                    combining rent growth, appreciation, and financing 
                    assumptions. Always verify with current local comps and 
                    specific deal underwriting. Not market-reported figures.
----
STRATEGY_H2:        When Rental Property Total Return Matters Most
STRATEGY_INTRO:     How multi-year Total Return fits into each major US 
                    rental investment strategy

STRATEGY_BUY_HOLD:
  Badge:            Buy and Hold
  Paragraph 1:      [3-4 sentences — Total Return is THE metric for buy-and-hold. 
                    Unlike Cap Rate or CoC which are snapshots, Total Return 
                    captures the full value proposition: operating cash flow 
                    + appreciation + principal paydown + exit gains. Typical 
                    target for 2026 10-year hold: 80-120% (8-12% IRR).]
  Paragraph 2:      [2-3 sentences — practical tip: compare your calculated 
                    Total Return against broad equities (~150-200% over 10 years 
                    historically). Real estate should beat or match, otherwise 
                    passive investing may be better.]

STRATEGY_BRRRR:
  Badge:            BRRRR
  Paragraph 1:      [3-4 sentences — BRRRR (Buy-Renovate-Rent-Refinance-Repeat) 
                    is designed to pull capital out at refinance, leaving 
                    minimal cash invested. Total Return in BRRRR can be 
                    mathematically infinite if refinance returns all capital. 
                    Use this calculator with post-refinance cash invested 
                    figure.]
  Paragraph 2:      [2-3 sentences — for BRRRR analysis, run calculator twice: 
                    pre-refi (acquisition through stabilization) and post-refi 
                    (stabilized with minimal cash invested). The post-refi 
                    Total Return is the headline story.]

STRATEGY_VALUE_ADD:
  Badge:            Value-Add
  Paragraph 1:      [3-4 sentences — value-add deals have weak Year 1-2 Total 
                    Return during renovation disruption but strong Years 3-10 
                    once stabilized. Use 5-year hold for pure stabilization 
                    comparison, 10+ year hold for full value-add benefit. 
                    Always model pre-stabilization cash burn separately.]
  Paragraph 2:      [2-3 sentences — critical: ensure reserves cover 
                    pre-stabilization cash burn. A "good" stabilized Total 
                    Return doesn't matter if the deal runs out of cash during 
                    renovation.]

STRATEGY_SHORT_TERM_RENTAL:
  Badge:            Short-Term Rental
  Paragraph 1:      [3-4 sentences — STR (Airbnb, VRBO) often shows higher 
                    gross rent but much higher expenses, vacancy volatility, 
                    and regulatory risk. Use conservative 20%+ vacancy rate 
                    for STR in this calculator — actual vacancy varies 15-40% 
                    seasonally.]
  Paragraph 2:      [2-3 sentences — STR regulations shifted materially 2023-2026 
                    in many US metros (permit caps, tax changes). Multi-year 
                    Total Return projections for STR should include regulatory 
                    risk discount — consider 10-15% lower than comparable 
                    long-term rental.]

STRATEGY_PORTFOLIO_COMPARISON:
  Badge:            Portfolio Comparison
  Title:            Using Total Return to Rank Portfolio Acquisitions
  Formula:          Rank deals by Total Return % at consistent hold period 
                    and LTV assumptions
  Body:             [3-4 sentences — when comparing 3-5 potential acquisitions, 
                    always run each through the calculator at the SAME hold 
                    period, SAME LTV, SAME exit method. This normalizes for 
                    input variations and shows which deal actually produces 
                    best Total Return. A 1.30x DSCR deal with 110% Total Return 
                    beats a 1.50x DSCR deal with 70% Total Return for most 
                    investors.]
----
APPLICATIONS_H2:    Applications of Rental Property Total Return Analysis
APPLICATIONS_INTRO: Six concrete ways investors, agents, and syndication 
                    sponsors use multi-year Total Return in 2026 US real 
                    estate

APPLICATION_1:
  Title:            Deal Screening for Buy-and-Hold
  Body:             [2-3 sentences]

APPLICATION_2:
  Title:            Comparing Hold Period Strategies (5 vs 10 vs 15 years)
  Body:             [2-3 sentences — same property, different hold periods, 
                    see how Total Return grows]

APPLICATION_3:
  Title:            Evaluating Appreciation vs Cash Flow Markets
  Body:             [2-3 sentences — CA deal 5% CoC + 5% appreciation vs 
                    GA deal 8% CoC + 2% appreciation — who wins over 10 years?]

APPLICATION_4:
  Title:            Portfolio Rebalancing Analysis
  Body:             [2-3 sentences — run current holdings through calculator 
                    to decide sell/hold/1031]

APPLICATION_5:
  Title:            Syndication Pro Forma
  Body:             [2-3 sentences — sponsors use Total Return and IRR as 
                    primary investor-facing metrics in PPMs]

APPLICATION_6:
  Title:            Refinance Timing Decisions
  Body:             [2-3 sentences — use calculator to model refinance 
                    scenarios and compare to current hold]
----
INDUSTRY_STANDARDS_H2:   Industry Standards & Professional Benchmarks
INDUSTRY_STANDARDS_INTRO: How professional investors and syndication sponsors 
                         use Total Return and IRR

STANDARD_1:
  Title:            Syndication Sponsor Benchmarks
  Points (4 bullets):
    - [Preferred return (pref) typically 6-8% annual — first cash flow to 
      investors before sponsor takes carry]
    - [Target investor IRR 12-18% net of fees for value-add deals]
    - [Target Total Return multiple 1.8x-2.5x of invested capital over 
      5-7 years typical hold]
    - [Sponsor splits: 70/30 or 80/20 above pref is common 2026 structure]

STANDARD_2:
  Title:            Institutional Investor Benchmarks
  Intro:            [2 sentences about institutional standards vs retail]
  Points (3 bullets):
    - [Core institutional: 6-8% IRR target, lower-risk stabilized assets]
    - [Value-add institutional: 12-15% IRR target]
    - [Opportunistic institutional: 15%+ IRR target, development/distress]

STANDARD_3:
  Title:            Retail Investor Rule-of-Thumb Benchmarks
  Points (5 bullets):
    - [BiggerPockets community typical target: 100%+ Total Return over 10 years]
    - [IRR "hurdle rate" of 10-12% common for retail investor target]
    - [Total Return multiple of 2x over 10 years = roughly 7% IRR + 
      appreciation]
    - [Compare to broad equities (~150-200% Total Return over 10 years 
      historically, ~9-11% annualized)]
    - [Real estate should beat passive investing by at least 2-3 
      percentage points to justify the active management]
----
LIMITATIONS_H2:     Limitations of Total Return Analysis
LIMITATIONS_INTRO:  [1 sentence — Total Return is the most complete rental 
                    metric but has blind spots]

LIMITATION_1:
  Title:            Assumption-Dependent
  Body:             [2-3 sentences — Total Return depends heavily on rent 
                    growth, expense growth, appreciation, and exit cap 
                    assumptions. A 0.5% change in any of these can shift 
                    Total Return by 8-15 percentage points. Always run 
                    sensitivity.]

LIMITATION_2:
  Title:            Ignores Taxes
  Body:             [2-3 sentences — v1 of this calculator is before-tax. 
                    Actual after-tax returns depend on investor's bracket, 
                    state, depreciation handling, and 1031 strategy. After-tax 
                    Total Return typically 15-30% lower than before-tax for 
                    high-bracket investors.]

LIMITATION_3:
  Title:            Exit Method Matters — Must Compare Both
  Body:             [3-4 sentences — Cap Rate exit vs Appreciation exit can 
                    produce materially different Total Return for the same deal. 
                    **REQUIRED: Include a short concrete comparison showing how 
                    both methods produce different outcomes.** Example format: 
                    "Same Atlanta deal: Exit via 6.5% Cap Rate produces 85% Total 
                    Return. Exit via 3% appreciation produces 78% Total Return. 
                    The 7-point spread reflects whether your exit cap assumption 
                    is more or less conservative than raw appreciation." Always 
                    stress-test by running both methods and explain the spread 
                    to users.]

LIMITATION_4:
  Title:            No CapEx Reserve Modeling
  Body:             [2-3 sentences — calculator uses Operating Expenses but 
                    doesn't explicitly model major CapEx events (roof, HVAC). 
                    For accurate long-hold analysis, increase expense growth 
                    rate 0.5-1% above CPI to embed CapEx reserves.]

WHEN_NOT_TO_USE_H3: When Not to Use Total Return as the Primary Metric
WHEN_NOT_TO_USE_LIST (4 bullets):
  - Development or land deals: [no operating history, use development 
    proforma tools]
  - Short-term flips under 2 years: [use Fix and Flip Calculator for 
    simple profit math]
  - Single-year lender qualification: [use DSCR Calculator for loan approval]
  - Pure cash flow analysis: [use Cash-on-Cash Calculator for Year 1 
    levered yield]
----
COMMON_MISTAKES_H2: Common Mistakes When Calculating Rental Property Returns
COMMON_MISTAKES_INTRO: [1 sentence]

MISTAKE_1:
  Title:            Using optimistic rent growth assumptions
  Body:             [3-4 sentences — 2026 realistic rent growth is 2-4% in 
                    most markets. Assuming 5-6% rent growth inflates 10-year 
                    Total Return by 15-30 percentage points. Lender underwriting 
                    uses 2-3% — retail investors should be similarly 
                    conservative.]

MISTAKE_2:
  Title:            Forgetting Exit Cap Rate expansion
  Body:             [3-4 sentences — exit cap rate typically rises 0.5-1% 
                    above purchase cap rate over 5-10 year hold (aging asset, 
                    market normalization). Using flat cap rate (exit = 
                    purchase) overstates sale price.]

MISTAKE_3:
  Title:            Double-counting appreciation
  Body:             [3-4 sentences — if you use Exit via Cap Rate method, don't 
                    also apply a separate appreciation rate — Year N NOI 
                    already reflects rent growth, and cap rate conversion 
                    produces the right sale price. This calculator handles 
                    the toggle correctly — choose one method.]

MISTAKE_4:
  Title:            Ignoring Year 1 cash flow in favor of exit gain only
  Body:             [3-4 sentences — a deal with negative Year 1 cash flow 
                    can still show strong 10-year Total Return because of 
                    appreciation and paydown — but the investor needs reserves 
                    to survive the early years. Always check cash flow is 
                    positive or cash reserves are sufficient.]

MISTAKE_5:
  Title:            Comparing Total Returns across different hold periods
  Body:             [3-4 sentences — 60% over 5 years is much stronger than 
                    60% over 15 years (different IRR equivalents). Always 
                    normalize comparison by using same hold period or compare 
                    IRR instead.]
----
FAQ_H2:             Frequently Asked Questions

FAQ_Q1:             What is a good Total Return for rental property in 2026?
FAQ_A1:             [3-4 sentences — realistic 2026 benchmarks for 10-year 
                    hold at 25% down: 100-150% is Strong, 60-100% is Solid, 
                    30-60% is Weak, below 30% is Critical. Historical pre-2022 
                    benchmarks of 150%+ are much harder to achieve in 2026 
                    rate environment — adjust expectations.]

FAQ_Q2:             What's the difference between Total Return and IRR?
FAQ_A2:             [3-4 sentences — Total Return is simple cumulative gain 
                    over the hold period as a percentage of invested cash. 
                    IRR is time-weighted annual return accounting for when 
                    cash flows occur. 100% Total Return over 10 years roughly 
                    equals 7% IRR. IRR is the professional metric for comparing 
                    across different hold periods.]

FAQ_Q3:             How does hold period affect Total Return?
FAQ_A3:             [3-4 sentences — longer hold usually produces higher Total 
                    Return due to compounded appreciation and principal 
                    paydown. A 10-year hold typically doubles the Total Return 
                    of a 5-year hold because the last 5 years benefit from 
                    all prior compounding. Use the calculator's hold period 
                    selector to compare.]

FAQ_Q4:             How do I calculate Rental Property Total Return step by step?
FAQ_A4:             [Must include exactly these elements:
                     1. Formula on its own line: 
                        "Total Return % = (Cumulative Cash Flow + Net Sale 
                        Proceeds − Total Cash Invested) ÷ Total Cash Invested × 100"
                     2. One brief numeric example with real dollar amounts
                     3. Maximum 4 sentences total]

FAQ_Q5:             Should I use Cap Rate exit or Appreciation exit method?
FAQ_A5:             [3-4 sentences — Cap Rate exit is the professional default — 
                    it reflects actual market pricing at exit. Appreciation 
                    exit is simpler but less accurate because it ignores how 
                    market cap rates shift. Use Cap Rate for serious 
                    underwriting, Appreciation for quick back-of-envelope.]

FAQ_Q6:             Does this calculator include taxes?
FAQ_A6:             [2-3 sentences — no, v1 is before-tax only. After-tax 
                    analysis is too state-dependent and bracket-dependent 
                    for a general calculator. Typical after-tax Total Return 
                    is 15-30% lower than before-tax for high-bracket 
                    investors.]

FAQ_Q7:             What hold period should I use?
FAQ_A7:             [3-4 sentences — 10 years is the default and most 
                    commonly-used benchmark. For short-term strategies 
                    (BRRRR exit, flip-to-rent) use 5 years. For long-term 
                    wealth building use 15-30 years. Different hold periods 
                    produce very different Total Return — use 10 years 
                    for standard comparison.]

FAQ_Q8:             Why is Year 1 cash flow so thin on most 2026 deals?
FAQ_A8:             [3-4 sentences — 2026 rates of 7.5-8% compressed cash 
                    flow dramatically vs 2015-2020 era of 3.5-5% rates. Debt 
                    service is 40-50% higher on same loan. Year 1 cash flow 
                    may be near zero or negative on deals that would have 
                    been strong in 2019. Total Return over 10 years looks 
                    better because rent grows while debt service stays flat.]
----
RELATED_CALCULATORS:
  (use real project slugs)

  1. cap-rate-calculator
  2. cash-on-cash-calculator
  3. noi-calculator
  4. dscr-calculator
----
SCHEMA_TYPE:        Calculator
SCHEMA_NAME:        Rental Property Calculator
SCHEMA_DESCRIPTION: [160-char description — "Rental property calculator for 
                    US investors. Multi-year Total Return, IRR, cash flow, 
                    and exit analysis. Free tool for buy-and-hold deal 
                    analysis 2026."]
SCHEMA_URL:         https://realcalc.com/rental-property-calculator
SCHEMA_FEATURE_LIST: Total Return, IRR, multi-year projection (5-30 years), 
                    cash flow by year, equity at exit, sensitivity analysis, 
                    3 calculation modes, 2 exit methods, PDF export

FAQ_SCHEMA:
  All 8 Q&A from above formatted for JSON-LD FAQPage schema.
----
```

---

## OUTPUT CHECKLIST

Before finalizing, verify:

- [ ] **TITLE in 45-55 character safety range (strict max 60) — if exceeds 60 chars, REGENERATE, never output**
- [ ] META DESCRIPTION is 150-160 chars, mentions "multi-year" or "total return" or "IRR"
- [ ] H1 contains primary keyword
- [ ] Overview has exactly 4 paragraphs
- [ ] **OVERVIEW_P1 uses at least 2 of these 3 specific keywords VERBATIM: "rental property investment calculator", "rental property roi calculator", "rental property return calculator"**
- [ ] **NO substituted variations like "real estate investment calculator" or "property ROI tool"**
- [ ] **Total Return formatted as percentage with dollar amount below (e.g. "+89.4%" / "$385,000 over 10 years")**
- [ ] **"Before-tax analysis" label appears in Overview P4 AND Limitations**
- [ ] **Multi-year nature emphasized throughout — not positioned as single-year tool**
- [ ] **IRR mentioned as secondary/professional metric, not primary**
- [ ] How to Use has 5 numbered steps + 4 pro tips + 6 result guide points
- [ ] **Result Guide contains ALL 6 tiers with EXACT thresholds from RIS: ≥150% / 100-149% / 60-99% / 30-59% / 0-29% / <0% — no rounding, no merging**
- [ ] **"Loss" and "Critical" tiers are DIFFERENT (Loss = negative, Critical = barely positive)**
- [ ] Formula section has both Total Return and IRR explained
- [ ] **FORMULA_EXAMPLE result falls in 60-90% Total Return (Solid tier) with realistic inputs**
- [ ] **FORMULA_EXAMPLE IRR falls in 6-10% range (consistent with 10-year hold in 2026)**
- [ ] **IRR and Total Return are CONSISTENT: 60% ≈ 6-7% IRR, 75% ≈ 7-8% IRR, 90% ≈ 8-10% IRR — not dramatically out of sync**
- [ ] **POST-CALCULATION VERIFICATION performed: if Total Return outside 50-100%, explicitly explain in interpretation — never silently accept off-target**
- [ ] **FORMULA_EXAMPLE shows Operating Expenses as DOLLAR AMOUNT, not percentage**
- [ ] **Every calculation step shows actual dollar math — no percentages left unreduced**
- [ ] **Multi-year compounding explained: Year N Rent = Year 1 Rent × (1+growth)^(N-1)**
- [ ] **Exit method toggle explained: "Exit via Cap Rate" (default) vs "Exit via Appreciation"**
- [ ] **LIMITATION_3 (Exit Method Matters) includes concrete side-by-side comparison showing Cap Rate exit vs Appreciation exit produce different Total Returns for same deal**
- [ ] RIS section has 5 tier bands with market context for each
- [ ] Benchmarks by Type has 5 property types from RIS
- [ ] Benchmarks by State has all 8 states (cards + table) with ranges AND IRR equivalents from RIS
- [ ] **Each state note cites AT LEAST TWO specific factors (not one) — e.g. property tax + rent-to-price, insurance + regulation, etc.**
- [ ] **All benchmarks explicitly labeled as "underwriting estimates — not market-reported Total Return statistics"**
- [ ] Strategy has Buy and Hold + BRRRR + Value-Add + Short-Term Rental + Portfolio Comparison
- [ ] Applications has 6 use cases
- [ ] Industry Standards covers Syndication + Institutional + Retail benchmarks
- [ ] **Industry Standards comparison uses "broad equities (~150-200% over 10 years)", NOT "S&P 500" as concrete benchmark (avoids specific index citation)**
- [ ] Limitations has 4 items + "When Not to Use" list
- [ ] Common Mistakes has 5 items, includes "Double-counting appreciation" (critical DSCR-specific lesson applied here)
- [ ] FAQ has exactly 8 Q&A, each with 3-4 sentence answers
- [ ] **FAQ_A4 includes formula on its own line + numeric example + max 4 sentences**
- [ ] FAQ includes question about Cap Rate vs Appreciation exit method
- [ ] FAQ includes question about 2026 rate environment impact
- [ ] Related Calculators uses real project slugs (cap-rate, cash-on-cash, noi, dscr)
- [ ] Schema block is complete
- [ ] **Placeholders in content descriptions use text instructions, not number examples (e.g. "Enter total yearly rental income" not "e.g. 120,000")**
- [ ] No pre-2022 historical benchmarks used (like 150%+ as "standard")
- [ ] Multi-year concepts explained without overwhelming beginners
- [ ] IRR never positioned as more important than Total Return

**Output only the SEO content package in Markdown. Do not output code. Do not output HTML. Do not output Vue. This is a content document that will be consumed by the Master Prompt later alongside the RIS spec.**
