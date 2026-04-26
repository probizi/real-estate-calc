# SEO Package Prompt — Fix and Flip Calculator (v2 final)

You are a senior SEO copywriter specializing in US real estate investment content. Your job is to produce a **complete SEO content package** for the Fix and Flip Calculator page.

The output of this prompt is pure content — no code, no HTML, no Vue. It will later be combined with the RIS specification and the Master Prompt to generate the actual page.

---

## YOUR TASK

Write an SEO package for:

```
Calculator Name:    Fix and Flip Calculator
Slug:               fix-and-flip-calculator
Primary keyword:    fix and flip calculator
Secondary keywords: house flipping calculator, flip profit calculator, 
                    fix and flip roi calculator, real estate flip calculator
Primary metrics:    Total Profit $ AND ROI % (co-primary, both shown)
Target audience:    US real estate flip investors — from first-time flippers
                    to experienced rehabbers running multiple projects annually
Traffic priority:   Priority 1 (60K-80K searches/month estimated)
```

Use the attached RIS specification (rental-property-ris.md style — here named fix-and-flip-ris.md) as the source of truth for formulas, thresholds, benchmarks, and test cases. Do not invent numbers — pull them from the RIS.

---

## CRITICAL DISTINCTIONS TO PRESERVE

This calculator is fundamentally different from other RealCalc calculators. Throughout the SEO package:

**1. Short-term project, NOT long-term hold**
- Hold period is 3-12 MONTHS, not years
- No multi-year projection, no appreciation compounding
- Every reference to timeframe uses months: "6-month flip", not "half-year hold"

**2. Dual primary metrics: Total Profit $ AND ROI %**
- Both are co-primary — neither dominates
- Display format example: "Total Profit: $52,400. ROI: 42% over 6 months."
- Beginners gravitate to dollar profit; pros to ROI percentage. Both are always shown.

**3. Hard Money as default financing**
- 70% of flip investors use hard money — reflect this reality
- Hard money in 2026: 11-14% rate, 2-4% points, interest-only, 6-12 month term
- Conventional financing is a secondary option (toggle)
- All cash is a third option (no financing complexity)

**4. ARV-driven exit, NOT cap rate or appreciation**
- ARV (After Repair Value) is the single most critical input
- Exit = ARV minus Sale Costs
- No cap rate involved (not income property)
- No appreciation compounding (too short-term)

**5. 70% Rule is a PROMINENT derived metric**
- "70% Rule Max Offer = ARV × 0.70 − Rehab Budget"
- Every flip investor knows this rule
- The calculator shows whether the user's deal is within or outside the 70% Rule
- SEO content must educate about this rule — it's a primary SEO hook

**6. Holding Costs are CRITICAL to flip economics**
- Monthly holding costs (tax, insurance, utilities, HOA — EXCLUDING loan interest which is tracked separately) compound across months
- A flip that runs over on timeline can be destroyed by holding costs
- Content must emphasize this — many beginners forget holding costs entirely

**7. Before-tax analysis only in v1**
- Flip profits are typically ORDINARY INCOME (25-37% marginal rates)
- NOT capital gains (unless held 1+ year, which defeats the flip purpose)
- V1 is before-tax; after-tax take-home is meaningfully lower
- Label prominently: "Before-tax analysis. Flip profits typically taxed as ordinary income."

**8. 2026 rate environment matters**
- Hard money rates ~12% in 2026 (vs 9-10% in 2019)
- Conventional rates ~7.5% in 2026 (vs 4-5% in 2019)
- Profit margins compressed vs pre-2022
- Typical "good" flip ROI in 2026: 20-35% (vs 30-50% in 2015-2019)

**9. Do NOT claim guarantees**
- Never say "you will make $X" — always "projected profit based on your inputs"
- Flip execution risk is HIGH: rehab overruns, market shifts, timeline slips
- Always note: "Actual results depend on market conditions, contractor execution, and rate environment."

**10. Pair with other calculators**
- Mention ARV Calculator (when available) as the companion for ARV confidence
- Mention Cap Rate / NOI / Rental Property as alternatives for different strategies
- Position Fix and Flip as the RIGHT tool for short-term rehab-and-sell projects

---

## RULES

1. US market only. All examples, cities, benchmarks, and rate assumptions are US-specific and 2026-realistic.

2. Content depth matches canonical template. Cap Rate Calculator is the reference — match its depth per section.

3. No generic filler. Every paragraph contains specific numbers, real cities, concrete examples, or year-specific context.

4. Primary keyword placement: must appear in TITLE, H1, META DESCRIPTION, OVERVIEW_P1, and at least 2 H2 headings. Natural density — no keyword stuffing.

5. Secondary keywords: must use at least 2 of "house flipping calculator", "flip profit calculator", "fix and flip roi calculator", "real estate flip calculator" naturally in OVERVIEW_P1.

6. Sentence case for all headings.

7. Placeholder rule (from Master Prompt): Never use concrete numbers in input placeholders. Use "Enter X" style text instructions only.

8. Output format: structured Markdown with section dividers using four hyphens. Ready to copy.

---

## REQUIRED OUTPUT STRUCTURE

Follow this structure exactly. Do not skip sections. Do not add sections.

----
TITLE:              [MUST follow strict pattern:
                     Required elements:
                     - "Fix and Flip Calculator" at the start
                     - ONE of these USP markers: "2026", "ROI", "Profit", "70% Rule"
                     - Brand suffix "| RealCalc"
                     - Total length 50-60 characters — STRICT MAXIMUM 60 CHARS
                     - RECOMMENDED TARGET RANGE: 45-55 characters for safety margin
                     
                     Approved examples (all within safety range):
                     "Fix and Flip Calculator — 2026 ROI Tool | RealCalc"  (52 chars)
                     "Fix and Flip Calculator — Profit & ROI | RealCalc"  (51 chars)
                     "Fix and Flip Calculator — 70% Rule Tool | RealCalc"  (52 chars)
                     
                     MANDATORY VALIDATION (perform BEFORE outputting):
                     1. Count the exact character length of your proposed TITLE
                     2. If length exceeds 60 characters → REGENERATE with a shorter version
                     3. If length is 58-60 → prefer a shorter alternative from the 45-55 range
                     4. Do NOT output any TITLE that exceeds 60 characters under any circumstances]

META DESCRIPTION:   [150-160 chars, primary keyword + USP + CTA. Must mention 
                    "Total Profit" or "ROI" or "70% Rule" for specificity. 
                    Example tone: "Calculate flip profit, ROI, and 70% Rule 
                    max offer for any US property. Free 2026 calculator with 
                    hard money and cash scenarios."]

H1:                 [Contains primary keyword, follows pattern: 
                    "Fix and Flip Calculator — [Short USP] for US Real Estate Flippers"]

----
OVERVIEW_P1:        [2-3 sentences — what this calculator is, what it measures, 
                    who it's for. Primary keyword in first sentence. Emphasize 
                    SHORT-TERM FLIP nature vs long-hold tools.
                    
                    REQUIRED: Must use at least 2 of these specific secondary 
                    keywords naturally — use ONLY these exact phrases:
                    - "house flipping calculator"
                    - "flip profit calculator"
                    - "fix and flip roi calculator"
                    - "real estate flip calculator"
                    
                    Do NOT substitute with variations like:
                    - "flip analysis tool"
                    - "rehab profit calculator"
                    - "property flip estimator"
                    
                    The specified phrases have highest search volume — using 
                    alternatives sacrifices SEO ranking. Match exact wording.]

OVERVIEW_P2:        [2-3 sentences — how it works. Mention: user inputs Purchase 
                    Price, ARV (After Repair Value), Rehab Budget, and financing. 
                    Calculator outputs Total Profit $, ROI %, 70% Rule Max Offer, 
                    Break-Even Sale Price, Annualized ROI, and Profit per Month. 
                    Three financing modes: Hard Money (default), Conventional, All Cash.]

OVERVIEW_P3:        [2-3 sentences — who uses it: first-time flippers evaluating 
                    their first project, experienced rehabbers comparing multiple 
                    opportunities, wholesalers checking whether deals meet the 70% Rule, 
                    real estate agents advising investor clients.]

OVERVIEW_P4:        [2-3 sentences — what it does NOT include (v1: before-tax 
                    analysis only. Does not model: opportunity cost, detailed 
                    scope-of-work rehab breakdown, 1031 exchange (flips don't 
                    qualify). Pair with ARV Calculator for ARV confidence and 
                    Hard Money Calculator for lender comparison.]

----
WHAT_IS_H2:         What Is a Fix and Flip Calculator? (and what the 70% Rule means)

WHAT_IS_P1:         [3-4 sentences — definition with formula inline: Total Profit 
                    equals ARV minus Total Project Costs. ROI equals Total Profit 
                    divided by Total Cash Invested times 100. Explain it answers 
                    the core flip question: "will I make money on this deal in 
                    6 months?" Unlike buy-and-hold calculators, this is a 
                    single-period profit calculation.]

WHAT_IS_P2:         [3-4 sentences — explain the 70% Rule: industry heuristic 
                    used by flip investors and wholesalers. Formula: Max Offer 
                    equals ARV times 0.70 minus Rehab Budget. A deal "within the 
                    rule" (purchase at or below max) has healthy profit buffer; 
                    a deal "outside the rule" requires strong reasons (hot market, 
                    light rehab, quick flip). The calculator shows both your 
                    actual offer and the 70% Rule ceiling side-by-side.]

----
HOW_TO_USE_H2:      How to Use the Fix and Flip Calculator
HOW_TO_USE_INTRO:   [1 sentence — "Follow these steps to project profit and ROI 
                    on any US flip project in under 3 minutes."]

STEP_1:
  TITLE:            Choose a calculation mode
  BODY:             [2-3 sentences — Analyze (standard), Find Max Purchase Price 
                    (given target profit), Find Max Rehab Budget (given target 
                    profit). When to use each — Analyze for deal evaluation, 
                    reverse modes for offer construction.]

STEP_2:
  TITLE:            Enter property details and ARV
  BODY:             [2-3 sentences — purchase price, property type, ARV (After 
                    Repair Value). Emphasize: ARV is THE critical input — a $10K 
                    miss on ARV can wipe out a thin-margin flip. Use conservative 
                    ARV estimates and verify with comps, appraisal, or broker price 
                    opinion.]

STEP_3:
  TITLE:            Enter rehab budget and timeline
  BODY:             [2-3 sentences — total rehab cost, contingency (10-15% standard), 
                    rehab duration in months. Typical 2026 rehab costs: cosmetic 
                    updates $15-30K, moderate updates $30-60K, gut renovation $60-150K. 
                    Rehab duration typically 2-4 months for moderate, 4-8 months for gut.]

STEP_4:
  TITLE:            Enter hold period and holding costs
  BODY:             [3-4 sentences — total hold period (3-12 months, typical 6). 
                    Monthly holding costs: property tax (annual divided by 12), 
                    insurance, utilities during rehab, HOA, other. 
                    **IMPORTANT: Loan interest is NOT part of holding costs in this 
                    calculator — it is tracked separately under Financing to avoid 
                    double-counting.** Holding costs compound across months — a 6-month 
                    flip with $600 monthly holding costs is $3,600 BEFORE loan interest 
                    is added separately. Many first-time flippers underestimate this.]

STEP_5:
  TITLE:            Set financing and sale costs
  BODY:             [3-4 sentences — choose financing: Hard Money (default, 2026 rate 
                    11-13%, points 2-4%), Conventional (2026 rate ~7.5%, 25% down), 
                    or All Cash (no financing complexity). Sale costs typically 6-10% 
                    (broker commission 5-6% plus closing costs 1-3%). Hard money often 
                    covers both purchase and rehab, depending on lender and deal 
                    structure — some lenders finance purchase only, leaving rehab as 
                    cash outlay.]

PRO_TIPS (4 bullet points with concrete US data):
  - "Use conservative ARV — reduce your comp-derived estimate by 5-10% for safety. A $280K optimistic ARV that comes in at $260K can eliminate your entire profit on a thin-margin flip."
  - "Check the 70% Rule indicator before making an offer. Deals within the rule (purchase at or below max offer) have built-in margin; deals outside need strong justification."
  - "Rehab contingency should be 10-15%, not 5%. In 2026, supply chain surprises and permit delays are common. Budget for overruns, not perfection."
  - "Holding costs scale with months. A 6-month flip can have 6-8% of purchase price in holding costs alone. Tighten your timeline — every extra month costs real money."

RESULT_GUIDE (6 bullet points — must match RIS Section 6 tiers exactly):

  IMPORTANT: These tiers apply to TOTAL project ROI (the primary metric), 
  NOT to Annualized ROI. Annualized ROI is a separate comparison tool and 
  has its own rough thresholds mentioned elsewhere.

  - "50% or higher ROI — Exceptional: top-quartile flip; usually requires deep value acquisition or major scope"
  - "30-49% ROI — Strong: above-average 2026 flip margin; healthy safety buffer"
  - "20-29% ROI — Solid: market-average for 2026 hard-money flips; acceptable if execution is tight"
  - "10-19% ROI — Weak: execution risk often exceeds profit margin; consider only exceptional cases"
  - "0-9% ROI — Critical: barely positive; any overrun produces loss"
  - "Below 0% ROI — Loss: projected loss; do not proceed without significant changes"

  Thresholds MUST match RIS exactly: 50%+ / 30-49% / 20-29% / 10-19% / 0-9% / below 0%
  These tiers assume 6-month hold — shorter holds compress ROI on same profit.

----
INPUTS_OUTPUTS_H2:  Inputs & Outputs — Field Reference
INPUTS_OUTPUTS_INTRO: What each field means and where to find the numbers.

INPUTS_TABLE:

  Property section:
  | Field              | What it means                              | Where to find it                          |
  | Purchase Price     | Contract price to acquire                  | MLS, wholesaler, off-market                |
  | Property Type      | SFR, condo, small multi, townhouse         | Property listing                           |
  | ARV (After Repair) | Market value after renovation              | Comps from MLS, appraisal, BPO             |

  Rehab section:
  | Field              | What it means                              | Where to find it                          |
  | Rehab Budget       | Total estimated renovation cost            | Contractor bids, scope of work             |
  | Rehab Contingency  | Budget buffer for overruns (10-15% typical)| Industry standard                          |
  | Rehab Duration     | Expected months to complete rehab          | Contractor timeline                        |

  Hold Period section:
  | Field              | What it means                              | Where to find it                          |
  | Hold Period Months | Total months from close to sale            | Project plan: 3-12 typical                 |

  Holding Costs section (monthly) — NOTE: these are property-related expenses only, DOES NOT include loan interest (loan interest is calculated separately in the Financing section):
  | Field              | What it means                              | Where to find it                          |
  | Property Tax       | Monthly tax (annual divided by 12)         | County assessor                            |
  | Insurance          | Monthly vacant/rehab insurance             | Current quote                              |
  | Utilities          | While vacant during rehab                  | Prior bills or estimates                   |
  | HOA                | If applicable                              | HOA statement                              |
  | Other              | Lawn, security, misc                       | Ongoing estimates                          |

  Financing section:
  | Field              | What it means                              | Where to find it                          |
  | Financing Type     | Hard Money / Conventional / All Cash       | Your loan source                           |
  | HM Loan to Cost    | Percent of (price + rehab) financed        | Hard money term sheet                      |
  | HM Interest Rate   | Annual rate (2026 range 10-14%)            | Lender quote                               |
  | HM Points          | Upfront fee as percent of loan (2-4%)      | Lender quote                               |
  | Conv Down Payment  | Percent of price in cash                   | Loan program                               |
  | Conv Interest Rate | Annual conventional rate (~7.5% in 2026)   | Lender quote                               |

  Sale Costs:
  | Field              | What it means                              | Where to find it                          |
  | Sale Costs %       | Broker commission + closing at sale        | Typical 6-10% (5-6% broker + 1-3% closing) |

OUTPUTS_TABLE:
  | Output              | What it means                                          | Primary use                                      |
  | Total Profit        | Dollar profit after all costs                          | Headline wealth creation number                  |
  | ROI                 | Profit as percent of cash invested                     | Deal quality ranking                             |
  | 70% Rule Max Offer  | Industry heuristic maximum offer                       | Quick within/outside rule check                  |
  | Break-Even Price    | Minimum sale price for $0 profit                       | Downside stress test                             |
  | Annualized ROI      | ROI adjusted to 12-month equivalent                    | Compare to stock / rental IRR                    |
  | Profit per Month    | Profit divided by months held                          | Effective monthly wage for your time             |
  | Total Cash Invested | All cash out of investor's pocket                      | Capital requirement planning                     |
  | Total Loan Interest | Interest paid to lender over hold                      | Financing cost transparency                      |

----
FORMULA_H2:         Fix and Flip Profit Formula & 70% Rule Calculation
FORMULA_SUBTITLE:   How the calculator computes flip profit — with a worked Columbus, OH example for 2026

STEP_BY_STEP (8-10 numbered steps):
  1. Calculate Loan Amount based on financing type. Hard Money: if hmLoanCoversRehab = true, Loan Amount = (Purchase + Rehab) × LTC; if hmLoanCoversRehab = false, Loan Amount = Purchase × LTC. Conventional: Loan Amount = Purchase × (1 − Down Payment). All Cash: Loan Amount = 0.
  2. Calculate Loan Points (Hard Money only: Loan Amount times points percentage; Conventional and Cash: 0)
  3. Calculate Total Loan Interest (Hard Money: interest-only monthly times months; Conventional: amortization with principal reduction; Cash: zero)
  4. Calculate Total Holding Costs: monthly holding costs times hold period months (property-related only, excludes loan interest)
  5. Calculate Total Project Costs: Purchase + Closing + Rehab + Contingency + Holding Costs + Loan Points + Loan Interest + Sale Costs
  6. Calculate Total Cash Invested: Down Payment + Closing + Rehab (only if NOT financed by loan) + Contingency (only if NOT financed) + Holding Costs + Loan Points + Loan Interest
     
     Rehab and Contingency inclusion rule:
     - If Hard Money covers rehab (hmLoanCoversRehab = true): rehab is financed, NOT in Total Cash Invested
     - If Hard Money does NOT cover rehab (hmLoanCoversRehab = false): rehab paid from cash, INCLUDED in Total Cash Invested
     - If Conventional financing: rehab typically paid from cash (conventional rarely covers rehab), INCLUDED
     - If All Cash: rehab paid from cash, INCLUDED
  7. Calculate Remaining Loan Balance at exit (HM: full loan amount; Conv: after amortization; Cash: zero)
  8. Calculate Net Sale Proceeds: ARV − Sale Costs − Remaining Loan Balance
  9. Calculate Total Profit: Net Sale Proceeds − Total Cash Invested
  10. Calculate ROI: Total Profit divided by Total Cash Invested times 100

FORMULA_BOX:
  Total Profit:            Net Sale Proceeds − Total Cash Invested
  ROI %:                   (Total Profit ÷ Total Cash Invested) × 100
  70% Rule Max Offer:      (ARV × 0.70) − Rehab Budget
  Break-Even Sale Price:   (Total Cash Invested + Remaining Loan) ÷ (1 − Sale Costs %)
                           
                           IMPORTANT: Break-Even uses Total Cash Invested, NOT Total Project Costs.
                           Using Project Costs would double-count Sale Costs (already included in 
                           Project Costs, then again via the divisor). The correct Break-Even asks: 
                           "what sale price returns all my cash?" — which means Cash Invested.
                           
  Annualized ROI:          ((1 + ROI/100)^(12/months) − 1) × 100
                           
                           NOTE: Primary ROI is TOTAL project ROI — the headline metric.
                           Annualized ROI is ONLY for comparison with other investments 
                           (rental IRR, stocks, bonds). Do NOT substitute Annualized ROI 
                           for Primary ROI in benchmarks, tiers, or badges.

CONSISTENCY IDENTITY (required):
  Total Project Costs = Total Cash Invested + Remaining Loan Balance
  
  This identity must hold in any valid flip calculation. It's how we verify the math is consistent.

FORMULA_VISUAL (ASCII-style schema):
  ARV ─────────────────────────┐
                               ├── minus Sale Costs ──→ Gross Sale Value
  Sale Costs % ────────────────┘
  
  Gross Sale Value ────────────┐
                               ├── minus Remaining Loan ──→ Net Sale Proceeds
  Remaining Loan Balance ──────┘
  
  Total Cash Invested:
    Down Payment ──┐
    Closing      ──┤
    Rehab Cash   ──┤
    Holding Costs──├── sum ──→ Total Cash Invested
    Loan Points  ──┤
    Loan Interest──┘
  
  Total Profit = Net Sale Proceeds − Total Cash Invested
  ROI % = Total Profit ÷ Total Cash Invested × 100

FORMULA_EXAMPLE:
  Location:         Columbus, OH (strong 2026 Midwest flip market with affordable entry and moderate ARV)
  Property type:    Single-family rental, 3-bedroom, 1960s build, needs moderate update
  Market context:   Columbus offers solid 2026 flip opportunities — affordable entry prices 
                    ($120-200K typical), moderate rehab costs, stable buyer demand for 
                    updated SFRs. Balanced between coastal high-margin / high-risk and 
                    rural low-margin markets.
  Financing:        Hard Money (industry standard for flips)

  STRICT NUMERIC RANGES — use values within these bands so ROI lands in 20-30% (Solid tier):
    Purchase Price:          $130,000-$160,000
    ARV:                     $215,000-$250,000
    Rehab Budget:            $35,000-$50,000 (moderate update scope)
    Rehab Contingency:       10% of rehab budget
    Rehab Duration:          3 months
    Hold Period:             6 months total
    Purchase Closing:        3% of purchase price
    Monthly Holding Costs:   $550-$700 (property tax + insurance + utilities + vacant)
    Hard Money Financing:    80% LTC, 12% rate, 3 points
    Loan Covers Rehab:       Yes
    Sale Costs:              8% of ARV

  EXPECTED RESULT: Total Profit should naturally fall in $25,000-$40,000 range.
  ROI should fall in 20-30% (Solid tier).
  Annualized ROI should fall in 45-65% range.

  POST-CALCULATION VERIFICATION (mandatory — perform ALL checks):
  
  Check 1 — ROI:
  - If ROI lands in 20-30% (target Solid tier) → proceed to interpretation
  - If ROI is in 15-19% or 31-40% → acceptable, note slightly off-target briefly
  - If ROI is OUTSIDE 15-40% → explicitly explain why in interpretation paragraph.
    Do NOT silently accept off-target. Do NOT retroactively tweak inputs.
  
  Check 2 — 70% Rule compliance:
  - Calculate 70% Rule Max Offer = ARV × 0.70 − Rehab
  - Compare to Purchase Price
  - State in interpretation whether deal is within or outside the 70% Rule
  
  Check 3 — Consistency identity:
  - Verify Total Project Costs = Total Cash Invested + Remaining Loan Balance
  - If these don't match, there's an error in the worked example math

  Check 4 — Break-Even cushion:
  - Break-Even Sale Price should be materially below ARV (at least $15-30K cushion)
  - If Break-Even is within $10K of ARV, the deal is thin — note this
  
  Calculation steps with dollar math (EVERY step shows actual dollar amounts):
    Step 1: Hard Money Loan Amount = (Purchase + Rehab) × 80% = [$ amount]
    Step 2: Down Payment = Purchase × (1 − 80%) = [$ amount]
    Step 3: Loan Points = Loan Amount × 3% = [$ amount]
    Step 4: Monthly Interest = Loan Amount × (12% ÷ 12) = [$ amount]
    Step 5: Total Loan Interest = Monthly Interest × 6 = [$ amount]
    Step 6: Total Holding Costs = Monthly Holding × 6 = [$ amount]
    Step 7: Purchase Closing = Purchase × 3% = [$ amount]
    Step 8: Rehab Contingency = Rehab × 10% = [$ amount]
    Step 9: Sale Costs = ARV × 8% = [$ amount]
    Step 10: Total Project Costs = sum of all costs above = [$ amount]
    Step 11: Total Cash Invested = Down + Closing + Holding + Points + Interest = [$ amount]
    Step 12: Remaining Loan Balance at exit = Loan Amount (interest-only = no reduction) = [$ amount]
    Step 13: Net Sale Proceeds = ARV − Sale Costs − Remaining Loan = [$ amount]
    Step 14: Total Profit = Net Sale Proceeds − Total Cash Invested = [$ amount]
    Step 15: ROI % = Total Profit ÷ Total Cash Invested × 100 = [X.X%]
    Step 16: Annualized ROI = ((1 + ROI/100)^(12/6) − 1) × 100 = [X.X%]
    Step 17: 70% Rule Max Offer = ARV × 0.70 − Rehab = [$ amount]
    Step 18: Break-Even Sale Price = (Cash Invested + Remaining Loan) ÷ (1 − 8%) = [$ amount]
    
    MANDATORY IDENTITY VERIFICATION (anti-bug check):
    Total Project Costs MUST EQUAL Total Cash Invested + Remaining Loan Balance
    
    These MUST match within $1-2 rounding tolerance. If they do NOT match:
    - The calculation is INVALID
    - Do NOT output the worked example
    - Identify the discrepancy (usually a double-counted or missing line item)
    - Recompute from scratch
    
    This identity is the primary defense against the double-counting bugs that plague 
    flip calculators. Every valid flip calculation satisfies it.

  Result:
    Total Profit = [realistic $25-40K]
    ROI = [realistic 20-30%]
    Annualized ROI = [realistic 45-65%]
    70% Rule: [Within rule OR Outside rule — state explicitly]
    Break-Even Cushion = [dollar amount below ARV]

  Interpretation:
    [2-3 sentences tying the result to Solid tier meaning, 2026 Columbus market 
    dynamics, 70% Rule compliance, and hard money cost impact. Before-tax analysis; 
    actual take-home lower after ordinary-income taxes.]
----
RIS_H2:             What Your Flip ROI Result Means

RIS_INTRO:          [1-2 sentences — "Your ROI % tells you how much return the flip generated per dollar of cash invested. Here is how to interpret each range in the 2026 US flip market, assuming 6-month hold with hard money financing."]

RIS_EXCEPTIONAL (Tier 1: 50% or higher):
  Range:            50% or higher — Exceptional
  Typical context:  Deep-value acquisitions; major scope rehabs with expert execution; 
                    hot appreciation markets with light rehab; wholesale-sourced deals
  Meaning:          [3-4 sentences — top-quartile flip. Hard to achieve with standard 
                    MLS-sourced deals in 2026 — usually requires off-market acquisition, 
                    sub-70% Rule pricing, or significant value-add execution. Annualized 
                    ROI above 100%. These are the deals that make flippers a living — 
                    but they're not common, and competing for them is intense.]

RIS_STRONG (Tier 2: 30-49%):
  Range:            30-49% — Strong
  Typical context:  Well-selected 2026 flips with tight execution; good wholesale 
                    sourcing; cosmetic or moderate rehabs in appreciating markets
  Meaning:          [3-4 sentences — above-average 2026 flip margin. Healthy safety 
                    buffer for the inevitable surprises. This range is what most 
                    experienced flippers target. Annualized ROI 65-100%. Competitive 
                    with or exceeding stock market returns on a 6-month basis.]

RIS_SOLID (Tier 3: 20-29%):
  Range:            20-29% — Solid
  Typical context:  Standard 2026 MLS-sourced flips with hard money at market rates; 
                    moderate rehab scope; typical mid-tier US markets
  Meaning:          [3-4 sentences — market-average for 2026 hard-money flips. Acceptable 
                    if execution is tight and timeline is respected. Annualized ROI 45-65%. 
                    Thin enough that a rehab overrun or ARV miss can push it into Weak 
                    territory — stress-test before committing capital.]

RIS_WEAK (Tier 4: 10-19%):
  Range:            10-19% — Weak
  Typical context:  Over-priced acquisitions; light rehabs in soft markets; conventional-
                    financed flips with long hold periods
  Meaning:          [3-4 sentences — below-market return. Execution risk often exceeds 
                    profit margin. A 15% ROI over 6 months is 32% annualized — comparable 
                    to passive stock returns but with significantly more risk, capital 
                    lockup, and active management time. Consider whether the opportunity 
                    cost justifies the effort.]

RIS_CRITICAL (Tier 5: 0-9%):
  Range:            0-9% — Critical
  Typical context:  Thin-margin deals; over-leveraged flips; long hold periods compressing 
                    ROI; markets with limited ARV upside
  Meaning:          [3-4 sentences — barely positive. Any overrun on rehab, timeline, 
                    or ARV produces a loss. Not worth the execution risk in 2026. 
                    Reconsider deal structure, re-negotiate price, or walk away. 
                    Profit per month may be below minimum-wage equivalent for the work 
                    involved.]

RIS_LOSS (Tier 6: below 0%):
  Range:            Below 0% — Loss
  Typical context:  Severely over-priced acquisitions; underestimated rehab; unrealistic 
                    ARV assumptions; long hold with high holding costs
  Meaning:          [3-4 sentences — projected loss. You lose money on the project. 
                    Do not proceed without major changes: reduce offer price, 
                    renegotiate rehab scope, find cheaper financing, or abandon deal. 
                    Tax benefits do NOT rescue a loss — you still lose cash.]

RIS_CONTEXT:
  Title:            Why 2026 flips look different from 2019
  Body:             [4-6 sentences — explain: hard money rates rose from 8-10% in 2019 
                    to 11-13% in 2026, adding 3-5 percentage points to financing costs on 
                    typical flips. ARV growth has slowed in most markets from 5-8% annually 
                    to 2-4% — meaning flips can no longer "appreciate into the money" 
                    during rehab. Buyer demand has softened in 2026 due to elevated 
                    mortgage rates, extending time-on-market by 30-50% in many metros. 
                    Two concrete examples: (1) A Dallas flip sourced in 2019 for $150K 
                    with $40K rehab could exit at $260K in 6 months, producing 45% ROI; 
                    the same property in 2026 might exit at $235K in 9 months, producing 
                    22% ROI. (2) Hard money that cost $8K total in 2019 now costs $14K 
                    on identical deal size. Pair with ARV Calculator to stress-test your 
                    exit assumption.]
----
BENCHMARKS_H2:      Flip ROI by Market & Type (2026, 6-Month Typical Hold)
BENCHMARKS_INTRO:   [2 sentences — "Typical 2026 flip ROI ranges for 6-month holds with hard money financing. Use as starting points — actual returns depend heavily on specific deal, market, and execution. These are industry-standard estimates based on 2026 hard money rates at 75-80% LTC — not market-reported flip statistics."]

BENCHMARK_BY_TYPE_H3: By Flip Type
BENCHMARK_BY_TYPE_TABLE (6 rows from RIS):
  | Flip Type            | Conservative ROI | Typical ROI | Strong ROI |
  | SFR cosmetic flip    | 10-18%           | 18-28%      | 28-40%     |
  | SFR moderate flip    | 15-22%           | 22-32%      | 32-45%     |
  | SFR gut rehab        | 18-28%           | 28-40%      | 40-55%     |
  | Condo flip           | 8-15%            | 15-22%      | 22-30%     |
  | Townhouse flip       | 10-18%           | 18-28%      | 28-38%     |
  | Small multi flip     | 12-20%           | 20-30%      | 30-42%     |

  Note after table: "Gut rehabs carry higher execution risk but offer greater ARV upside. Condo flips are generally lower-margin due to HOA restrictions on renovation scope and slower buyer velocity."

BENCHMARK_BY_STATE_H3: By State — Typical Flip ROI (6-month hold, 2026)
BENCHMARK_BY_STATE_CARDS (8 cards — ranges from RIS, each MUST name TWO specific factors):

  STRICT REQUIREMENT for every state note: explain WHY the flip ROI range differs 
  using AT LEAST TWO specific factors — not one. Generic notes with just "strong 
  market" are insufficient.
  
  Attribute to combinations of these factors:
  - Entry price point (high-cost coastal vs affordable Midwest)
  - Labor and material costs (union vs non-union states, supply chain)
  - Permitting timeline and complexity
  - Property tax burden during hold
  - Insurance costs (hurricane/wildfire exposure)
  - ARV growth rate (hot vs soft markets)
  - Buyer demand velocity (days on market)
  - Regulatory environment (rent control, zoning, flip restrictions)
  
  Each state MUST name at least TWO specific factors:

  California (CA):
    Range:     Typical flip ROI 15-30%
    Key markets: Los Angeles, San Diego, Sacramento
    Market characteristics: High ARVs offset by high entry prices AND long permit timelines (6-12 weeks common in LA)
    Note:      [California offers the largest dollar profits but compressed ROI due to high entry prices 
              and permitting delays. Factor 1: $500K+ entry prices compress percentage returns. 
              Factor 2: Permit approval delays add 2-3 months of holding costs.]

  Texas (TX):
    Range:     Typical flip ROI 22-35%
    Key markets: Dallas, Houston, San Antonio
    Market characteristics: Affordable entry AND no state income tax on flip profits
    Note:      [Texas is one of the strongest 2026 flip markets. Factor 1: Entry prices $150-250K 
              typical for flip-candidate SFRs. Factor 2: No state income tax means higher take-home 
              on flip profits (federal only, ordinary income).]

  Florida (FL):
    Range:     Typical flip ROI 18-30%
    Key markets: Tampa, Orlando, Jacksonville
    Market characteristics: Strong buyer demand AND rising insurance costs
    Note:      [Florida flips face tension between population-driven demand and escalating costs. 
              Factor 1: Population inflow supports ARV stability. Factor 2: Hurricane insurance 
              has tripled in many markets since 2020, adding $200-400 to monthly holding costs.]

  New York (NY):
    Range:     Typical flip ROI 10-22%
    Key markets: Buffalo, Rochester, Syracuse, NYC outer boroughs
    Market characteristics: High permit costs AND rent regulation (for multi-unit flips)
    Note:      [Upstate NY offers affordable flip entries but slower ARV growth. Factor 1: 
              Permit fees in NYC metro run $5-15K on a typical flip. Factor 2: Multi-unit 
              properties face rent stabilization complications if tenants remain.]

  Arizona (AZ):
    Range:     Typical flip ROI 18-32%
    Key markets: Phoenix, Tucson, Tempe
    Market characteristics: Population growth AND rising insurance (wildfire/extreme heat)
    Note:      [Phoenix metro is a top 2026 flip market. Factor 1: Population growth supports 
              buyer demand. Factor 2: Emerging insurance cost pressure from wildfire and heat 
              events is adding 5-10% to holding costs.]

  Georgia (GA):
    Range:     Typical flip ROI 20-32%
    Key markets: Atlanta, Savannah, Augusta
    Market characteristics: Atlanta metro strength AND moderate labor costs
    Note:      [Georgia flips benefit from Atlanta's strong buyer demand and affordable labor. 
              Factor 1: Atlanta metro has one of the fastest flip-market velocities in the South. 
              Factor 2: Non-union labor keeps rehab costs 10-15% below coastal markets.]

  Ohio (OH):
    Range:     Typical flip ROI 15-28%
    Key markets: Columbus, Cincinnati, Cleveland
    Market characteristics: Low entry prices AND stagnant ARV growth in some submarkets
    Note:      [Ohio offers the most affordable flip entries in the top-state list. Factor 1: 
              $100-180K entry prices enable smaller investors to enter flip market. Factor 2: 
              ARV growth has stagnated in Cleveland and parts of Cincinnati, requiring tight 
              scope selection.]

  Pennsylvania (PA):
    Range:     Typical flip ROI 14-26%
    Key markets: Philadelphia, Pittsburgh, Lancaster
    Market characteristics: Older housing stock AND Philadelphia/Pittsburgh metro variance
    Note:      [PA flips vary widely by metro. Factor 1: Older housing stock often requires 
              electrical, plumbing, and foundation updates that balloon rehab budgets. Factor 2: 
              Philadelphia metro shows stronger ARVs than Pittsburgh, but both lag Sun Belt 
              markets in growth.]

BENCHMARK_BY_STATE_TABLE (same 8 states in tabular format with 2-3 sentence notes per state)

SOURCES_NOTE:       These flip ROI ranges are synthesized from multiple industry sources, 
                    including BiggerPockets flip deal analyses, Fortune Builders case studies, 
                    Kiavi and other hard money lender underwriting data, and 2026 market 
                    rate surveys. Flip ROI is not directly reported as a market statistic 
                    (unlike cap rates or home prices) — these ranges are derived by combining 
                    typical acquisition discounts, rehab costs, financing costs, and ARV 
                    outcomes. Always verify with current local data and individual deal 
                    underwriting. Not market-reported figures.

----
STRATEGY_H2:        Fix and Flip Strategy — When Profit and ROI Matter Most
STRATEGY_INTRO:     How the Fix and Flip Calculator supports different flip investment approaches

STRATEGY_FIRST_TIME:
  Badge:            First-Time Flipper
  Paragraph 1:      [3-4 sentences — for investors evaluating their first flip project. 
                    The calculator answers the core question: "will I make money on this 
                    deal?". Focus on the 70% Rule indicator (should show Within rule), 
                    Break-Even Sale Price (should have $15K+ cushion below ARV), and 
                    Profit per Month (compare to your opportunity cost).]
  Paragraph 2:      [2-3 sentences — practical guidance: aim for ROI in Solid tier or 
                    better (20%+); verify ARV with multiple comp sources and a BPO; 
                    build 15% rehab contingency minimum; confirm your hard money lender 
                    before making offers.]

STRATEGY_WHOLESALE:
  Badge:            Wholesaler
  Paragraph 1:      [3-4 sentences — wholesalers use the calculator to verify whether 
                    deals meet the 70% Rule before assigning to end buyers. Quick check: 
                    Purchase Price should be at or below 70% Rule Max Offer. If the 
                    purchase is within 70% and has $30K+ Break-Even cushion, the assignment 
                    fee is supported by solid deal math.]
  Paragraph 2:      [2-3 sentences — tip: run the calculator with the END BUYER's expected 
                    financing (hard money at market rates) to show them realistic flip 
                    outcomes. If your contract plus assignment fee still shows Solid tier 
                    ROI for the buyer, the deal sells itself.]

STRATEGY_EXPERIENCED:
  Badge:            Experienced Rehabber
  Paragraph 1:      [3-4 sentences — experienced flippers running multiple projects 
                    annually use the calculator to rank deal opportunities. Run all 
                    active candidates with identical financing assumptions and compare 
                    ROI side-by-side. Filter out anything below 25% ROI in 2026 rate 
                    environment.]
  Paragraph 2:      [2-3 sentences — advanced use: build scenario analysis into your 
                    workflow. Conservative / Base / Optimistic across three scenarios 
                    tells you whether the deal depends on perfect execution or has buffer. 
                    Deals where even Conservative shows positive profit are lower-risk.]

STRATEGY_CASH:
  Badge:            All-Cash Flipper
  Paragraph 1:      [3-4 sentences — all-cash flippers avoid financing costs but tie up 
                    capital entirely. The calculator's All Cash mode shows true ROI 
                    without loan interest distortion. Cash flips often show HIGHER ROI 
                    than financed equivalents because no interest drag — but dollar 
                    profit is similar, and cash lockup is 100% rather than 20%.]
  Paragraph 2:      [2-3 sentences — warning: all-cash ROI is NOT directly comparable 
                    to financed ROI. A $100K cash flip with 25% ROI earned $25K. A 
                    financed flip with 25% ROI on $30K cash invested earned $7,500. 
                    Dollar profit matters more for cash deployment decisions than ROI.]

STRATEGY_COMPARISON:
  Badge:            Deal Comparison
  Title:            Using Fix and Flip Calculator to Compare Two Properties
  Body:             [3-4 sentences — the best use of this calculator: running two flip 
                    candidates side-by-side with identical financing, rehab assumptions, 
                    and hold period. Higher Total Profit OR higher ROI wins. If they 
                    split (one has higher Profit, other higher ROI), consider capital 
                    deployment: ROI favors smaller deals with less risk, Profit favors 
                    deployed capital in larger deals. Experienced flippers typically 
                    optimize ROI on smaller deals, Profit on larger ones.]
----
APPLICATIONS_H2:    Applications of Fix and Flip Analysis
APPLICATIONS_INTRO: Six concrete ways investors use Fix and Flip Calculator

APPLICATION_1:
  Title:            First-Deal Screening
  Body:             [2-3 sentences — is this flip worth pursuing? Quick 3-minute analysis 
                    with purchase price, ARV, rehab, and financing gives a go/no-go 
                    before spending hours on contractor walkthroughs and lender prep.]

APPLICATION_2:
  Title:            Offer Price Construction
  Body:             [2-3 sentences — use Find Max Purchase Price mode to determine your 
                    ceiling. Set target ROI (e.g. 25% minimum), enter ARV and rehab, 
                    calculator solves for max offer. Makes you competitive on price 
                    while staying within your return criteria.]

APPLICATION_3:
  Title:            70% Rule Compliance Check
  Body:             [2-3 sentences — wholesalers and first-time flippers use the 70% 
                    Rule indicator to screen deals before deeper analysis. Within rule 
                    = proceed; outside rule = needs strong justification (hot market, 
                    light rehab, quick flip).]

APPLICATION_4:
  Title:            Financing Option Comparison
  Body:             [2-3 sentences — toggle between Hard Money, Conventional, and All 
                    Cash modes on the same deal. See exactly how financing choice impacts 
                    profit, ROI, and cash deployed. Often reveals that cash vs hard money 
                    is a much closer call than expected.]

APPLICATION_5:
  Title:            Rehab Scope Budgeting
  Body:             [2-3 sentences — use Find Max Rehab Budget mode to see the absolute 
                    ceiling on rehab spend that still hits your target ROI. Helps contractor 
                    negotiations: "we can spend up to $X on this scope and still hit our 
                    numbers."]

APPLICATION_6:
  Title:            Investor Memorandum Prep
  Body:             [2-3 sentences — for partnered or syndicated flip projects, Total 
                    Profit, ROI, and Break-Even are the three numbers partners ask for. 
                    Export PDF to include as exhibit in partnership pitch or private 
                    lender package.]
----
INDUSTRY_STANDARDS_H2:   Industry Standards & Professional Methodologies
INDUSTRY_STANDARDS_INTRO: How Total Profit, ROI, and the 70% Rule fit into established flip investment frameworks.

STANDARD_1:
  Title:            The 70% Rule (Industry Foundation)
  Points (4 bullets):
    - "70% Rule Max Offer equals ARV times 0.70 minus Rehab Budget — used across BiggerPockets, Fortune Builders, and virtually all flip education"
    - "The rule provides a 30% buffer for profit, financing costs, and execution risk — critical at 2026 hard money rates"
    - "Deals within the 70% Rule have high probability of Solid-tier or better ROI outcomes"
    - "Deals outside the rule require strong justification: hot market, light rehab (under 15% of ARV), or quick flip under 4 months"

STANDARD_2:
  Title:            Hard Money Underwriting (Kiavi, LendingOne, local lenders)
  Intro:            [2 sentences about how hard money lenders evaluate flip deals]
  Points (4 bullets):
    - "Hard money lenders underwrite based on ARV — typically 65-75% of ARV as maximum loan (LTV)"
    - "Loan to Cost (LTC) typically 80-90% covering both Purchase and Rehab for experienced flippers"
    - "Points of 2-4% upfront plus 10-14% annual interest are standard 2026 pricing"
    - "Lender approval aligns with Solid-tier or better deals — loans on Weak/Critical deals are denied or heavily re-priced"

STANDARD_3:
  Title:            Flipper Professional Benchmarks
  Points (5 bullets):
    - "Professional flippers target 20-35% ROI per project in 2026 rate environment"
    - "High-volume flippers (20+ projects per year) accept lower per-project ROI (15-20%) in exchange for volume deployment"
    - "Boutique value-add flippers target 35%+ ROI with larger scope and longer holds"
    - "Flip profit is typically taxed as ordinary income (25-37% marginal) — not capital gains"
    - "After-tax flip ROI runs 30-45% below before-tax ROI for most investors — factor this into comparisons with passive investments"
----
LIMITATIONS_H2:     Limitations of Fix and Flip Calculator
LIMITATIONS_INTRO:  [1 sentence — "Fix and Flip Calculator is the most complete single tool for flip deal analysis, but it has deliberate scope limits you should understand."]

LIMITATION_1:
  Title:            Before-Tax Analysis Only (v1)
  Body:             [3-4 sentences — calculator does not model ordinary income tax on 
                    flip profits. Most flip profits are taxed as ordinary income (25-37% 
                    marginal rates) — after-tax take-home is meaningfully lower than 
                    displayed Total Profit. State income tax adds 0-13% depending on 
                    state. Consult a CPA for tax-optimized flip strategy.]

LIMITATION_2:
  Title:            ARV Is Your Responsibility
  Body:             [3-4 sentences — calculator uses your ARV input directly. ARV 
                    accuracy is the single biggest risk factor in flip analysis. An 
                    optimistic ARV of $280K that comes in at $255K can eliminate the 
                    entire projected profit on a thin-margin flip. Always verify ARV 
                    with 3+ active MLS comps, a BPO (Broker Price Opinion), or a 
                    pre-rehab appraisal.]

LIMITATION_3:
  Title:            Does Not Model Timeline Overruns
  Body:             [3-4 sentences — calculator uses your Hold Period and Rehab Duration 
                    as-entered. Reality: 70% of first-time flips run 1-3 months over 
                    budget on timeline. Each extra month adds loan interest, holding 
                    costs, and carries market risk. Always stress-test with Hold Period 
                    plus 2 months in the Conservative scenario.]

LIMITATION_4:
  Title:            Does Not Include Detailed Rehab Scope
  Body:             [3-4 sentences — rehab is entered as a single dollar figure plus 
                    contingency. Calculator does not model line-item scope (electrical 
                    versus plumbing versus cosmetic) or sequencing (permit-pulled versus 
                    no-permit work). For detailed scope-of-work analysis, use a dedicated 
                    rehab estimator or contractor bid system — this calculator is for 
                    deal-level go/no-go analysis, not construction management.]

WHEN_NOT_TO_USE_H3: When Not to Use This Calculator
WHEN_NOT_TO_USE_LIST (4 bullets):
  - "Buy and hold rentals: Use Rental Property Calculator for multi-year cash flow and Total Return analysis"
  - "BRRRR deals: Use BRRRR Calculator when available — models the refinance event separately"
  - "Wholesale-only deals (no rehab): Use a dedicated wholesale calculator — flip math doesn't apply to contract assignments without renovation"
  - "New construction and development: Use construction-specific pro forma tools — flip math doesn't capture development timeline complexity"

----
COMMON_MISTAKES_H2: Common Mistakes When Calculating Flip Profit
COMMON_MISTAKES_INTRO: [1 sentence introducing the 5 mistakes most flippers make]

MISTAKE_1:
  Title:            Using optimistic ARV without comp verification
  Body:             [3-4 sentences — first-time flippers commonly enter ARV based on 
                    seller's estimate, wholesaler's pitch, or gut feel. Professional 
                    flippers verify ARV with 3+ active comps, BPO, or appraisal. An 
                    optimistic $10K ARV miss can eliminate 30-50% of projected profit 
                    on a thin-margin flip.]

MISTAKE_2:
  Title:            Forgetting holding costs in the ROI calculation
  Body:             [3-4 sentences — many flip calculators (and spreadsheets) count 
                    holding costs as a "reserve" rather than actual cash outflow. The 
                    investor writes a check for these every month — they reduce ROI. 
                    A 6-month flip with $600 monthly holding costs has $3,600 in real 
                    outflow. Always count Total Holding Costs in Total Cash Invested.]

MISTAKE_3:
  Title:            Underestimating rehab budget and contingency
  Body:             [3-4 sentences — first-time flippers consistently underestimate 
                    rehab budget by 15-25%. Standard rehabs have surprises: discovered 
                    rot, electrical issues, permit requirements. 5% contingency is 
                    insufficient; 10-15% is industry standard. If your contractor gives 
                    a bid of $40K, budget $46-48K with contingency.]

MISTAKE_4:
  Title:            Ignoring hard money points and interest in ROI
  Body:             [3-4 sentences — hard money points (2-4% upfront) plus monthly 
                    interest (10-14% annualized) can add 8-12% to total project cost 
                    on a typical flip. Many investors focus on the interest rate but 
                    forget points are paid upfront on a flip — reducing cash available 
                    for rehab. Always include both points and total interest in Total 
                    Cash Invested.]

MISTAKE_5:
  Title:            Treating before-tax ROI as take-home profit
  Body:             [3-4 sentences — a 30% before-tax ROI on a flip might translate to 
                    18-22% after ordinary income tax for most investors. Flips held 
                    under 1 year do NOT qualify for long-term capital gains rates — 
                    they are taxed as ordinary income (25-37% marginal). Always mentally 
                    discount the displayed ROI by your marginal tax rate when comparing 
                    to long-term investments that get favorable capital gains treatment.]

----
FAQ_H2:             Frequently Asked Questions

FAQ_Q1:             What is a good ROI for a flip in 2026?
FAQ_A1:             [3-4 sentences — realistic 2026 benchmarks for 6-month flips with 
                    hard money: 50%+ Exceptional, 30-49% Strong, 20-29% Solid (market-
                    average), 10-19% Weak, below 10% Critical or Loss. In 2026 rate 
                    environment with hard money at 11-13%, aim for 25%+ ROI minimum to 
                    justify execution risk. Below 15% ROI is often not worth the time 
                    and capital.]

FAQ_Q2:             What is the 70% Rule in house flipping?
FAQ_A2:             [3-4 sentences — the 70% Rule is the industry heuristic for maximum 
                    safe offer price on a flip. Formula: Max Offer equals ARV times 0.70 
                    minus Rehab Budget. The rule builds in 30% buffer covering profit, 
                    financing costs, and execution risk. Deals "within the rule" (offer 
                    at or below max) typically produce Solid ROI or better; deals "outside 
                    the rule" require strong justification.]

FAQ_Q3:             How do I calculate flip profit and ROI?
FAQ_A3:             [Must include these 3 elements:
                     1. The formula: Total Profit equals Net Sale Proceeds minus Total 
                        Cash Invested. ROI equals Total Profit divided by Total Cash 
                        Invested times 100.
                     2. One brief numeric example: "$150K invested, $200K net sale 
                        proceeds after costs → Total Profit $50K → ROI 33%"
                     3. Maximum 4 sentences total. Do NOT write a long tutorial.]

FAQ_Q4:             Should I use hard money or cash for a flip?
FAQ_A4:             [3-4 sentences — hard money lets you deploy smaller capital per 
                    deal (typically 20% down) but adds 8-12% in points and interest 
                    over the project. Cash has no financing cost but ties up 100% of 
                    capital. Hard money is standard for flippers running multiple 
                    projects; cash is better for flippers with limited deal volume or 
                    risk tolerance. Run the calculator in both modes to compare.]

FAQ_Q5:             How long should a typical flip take?
FAQ_A5:             [3-4 sentences — typical 2026 flips run 5-8 months total: 2-4 months 
                    rehab plus 2-4 months on market. Cosmetic flips can complete in 3-4 
                    months; gut rehabs typically run 6-10 months. Every extra month adds 
                    holding costs and loan interest — a flip that runs 3 months over budget 
                    can lose 8-15% of projected ROI.]

FAQ_Q6:             Is flip profit taxed as capital gains or ordinary income?
FAQ_A6:             [3-4 sentences — flip profits are typically taxed as ORDINARY INCOME 
                    (25-37% marginal rates in 2026), not capital gains. This is because 
                    the IRS views flippers as dealers of real estate rather than 
                    investors — especially if flipping is a regular activity. Only 
                    properties held 1+ year as genuine investment may qualify for 
                    long-term capital gains treatment. Consult a CPA for your specific 
                    tax situation.]

FAQ_Q7:             What is ARV and why does it matter so much?
FAQ_A7:             [3-4 sentences — ARV (After Repair Value) is the projected market 
                    value of the property AFTER your renovation is complete. It is the 
                    single most important input in flip analysis — a $10K ARV miss on 
                    a thin-margin deal can eliminate the entire projected profit. Verify 
                    ARV with 3+ active MLS comps, a BPO (Broker Price Opinion), or a 
                    pre-rehab appraisal. Conservative ARV estimates produce more reliable 
                    flip outcomes.]

FAQ_Q8:             Can I use this calculator for BRRRR or wholesale deals?
FAQ_A8:             [3-4 sentences — partially. For BRRRR, you can use it for the pre-
                    refinance stage (purchase + rehab + stabilize) but a dedicated BRRRR 
                    Calculator handles the refinance event better. For pure wholesale 
                    (contract assignment, no rehab), this calculator's math doesn't apply 
                    — use a dedicated wholesale tool. For hybrid deals (flip + rent alternative), 
                    run both this calculator and Rental Property Calculator to compare 
                    strategies.]

----
RELATED_CALCULATORS:
  (3-4 related calculators from the project, real slugs)

  1. rental-property-calculator
  2. arv-calculator (when available)
  3. cap-rate-calculator
  4. dscr-calculator

----
SCHEMA_TYPE:        Calculator
SCHEMA_NAME:        Fix and Flip Calculator
SCHEMA_DESCRIPTION: [160-char description emphasizing flip profit, ROI, and 70% Rule analysis]
SCHEMA_URL:         https://realcalc.com/fix-and-flip-calculator
SCHEMA_FEATURE_LIST: Total Profit calculation, ROI analysis, 70% Rule Max Offer, Break-Even Sale Price, Annualized ROI, hard money/conventional/cash modes, 3 calculation modes, sensitivity analysis, scenario modeling, PDF export, 6-tier benchmarking

FAQ_SCHEMA:
  All 8 Q&A from above formatted for JSON-LD FAQPage schema.

----

---

## OUTPUT CHECKLIST

Before finalizing, verify:

- [ ] **TITLE within 45-55 character range, count chars BEFORE outputting (STRICT MAX 60 chars)**
- [ ] **TITLE MANDATORY VALIDATION: if exceeds 60 chars, REGENERATE — never output**
- [ ] META DESCRIPTION is 150-160 chars, mentions "Total Profit" or "ROI" or "70% Rule"
- [ ] H1 contains primary keyword
- [ ] Overview has exactly 4 paragraphs
- [ ] **OVERVIEW_P1 uses at least 2 of these specific secondary keywords VERBATIM: "house flipping calculator", "flip profit calculator", "fix and flip roi calculator", "real estate flip calculator"**
- [ ] **NO substituted variations like "flip analysis tool" or "rehab profit calculator"**
- [ ] **Dual primary metrics emphasized: Total Profit $ AND ROI % (not just ROI, not just Profit)**
- [ ] **"Before-tax analysis" label appears in Overview P4, Limitations, AND FAQ**
- [ ] **Short-term nature emphasized — NOT positioned as long-hold tool**
- [ ] **70% Rule explained in WHAT_IS_H2 and has dedicated FAQ question**
- [ ] **Hard Money as default emphasized throughout**
- [ ] How to Use has 5 numbered steps + 4 pro tips + 6 result guide points
- [ ] **Result Guide contains ALL 6 tiers with EXACT thresholds from RIS: 50%+ / 30-49% / 20-29% / 10-19% / 0-9% / below 0% — no rounding, no merging**
- [ ] Formula section has step-by-step + formula box + visual schema + worked Columbus example
- [ ] **FORMULA section includes CONSISTENCY IDENTITY: Total Project Costs = Total Cash Invested + Remaining Loan Balance**
- [ ] **BREAK_EVEN formula uses Total Cash Invested, NOT Total Project Costs — with EXPLICIT explanation of why (avoids double-counting Sale Costs)**
- [ ] **Monthly Holding Costs description EXCLUDES loan interest everywhere — holding costs are property-related only (tax, insurance, utilities, HOA, other)**
- [ ] **Loan Interest always described as SEPARATE from holding costs (tracked in Financing section, not Holding)**
- [ ] **STEP 6 (Total Cash Invested) has EXPLICIT rule: "Rehab and Contingency included ONLY if not financed by loan" — covers all 3 financing modes (HM with/without rehab coverage, Conv, Cash)**
- [ ] **MANDATORY IDENTITY VERIFICATION section requires: "Total Project Costs MUST EQUAL Total Cash Invested + Remaining Loan Balance within $1-2 tolerance, else calculation is INVALID"**
- [ ] **Annualized ROI clearly stated as COMPARISON-ONLY metric — Primary ROI is total project ROI, never substitute Annualized for tier thresholds**
- [ ] **Hard Money coverage described with qualifier "often" or "depending on lender and deal structure" — NOT as always covering rehab**
- [ ] **FORMULA_EXAMPLE result falls in 20-30% ROI (Solid tier) with realistic inputs**
- [ ] **FORMULA_EXAMPLE Rehab shown as DOLLAR AMOUNT, not percentage of purchase**
- [ ] **Every calculation step shows actual dollar math — no percentages left unreduced**
- [ ] **POST-CALCULATION VERIFICATION includes: ROI check, 70% Rule compliance check, Consistency Identity check, Break-Even cushion check**
- [ ] **If ROI outside 15-40%, explicitly explain why in interpretation — never silently accept**
- [ ] **IRR NOT mentioned (not relevant for short-term flips) — Annualized ROI is the comparison metric**
- [ ] RIS section has 6 tier bands with market context for each
- [ ] Benchmarks by Type has 6 flip types from RIS
- [ ] Benchmarks by State has all 8 states (cards + table) with ranges
- [ ] **Each state note cites AT LEAST TWO specific factors (not one) — entry price, labor, permits, taxes, insurance, ARV growth, buyer demand, regulation**
- [ ] **All benchmarks labeled as "industry-standard estimates — not market-reported flip statistics"**
- [ ] Strategy has 5 blocks: First-Time + Wholesaler + Experienced + All-Cash + Comparison
- [ ] Applications has 6 use cases including 70% Rule Compliance Check
- [ ] Industry Standards covers 70% Rule + Hard Money Underwriting + Flipper Professional Benchmarks
- [ ] **Tax discussion: flip profits are ORDINARY INCOME, not capital gains (explicit in Industry Standards and FAQ)**
- [ ] Limitations has 4 items (Before-Tax, ARV Responsibility, Timeline Overruns, Rehab Scope) + "When Not to Use" list
- [ ] Common Mistakes has 5 items including "Forgetting holding costs" and "Using optimistic ARV"
- [ ] FAQ has exactly 8 Q&A, each with 3-4 sentence answers
- [ ] **FAQ_A3 includes formula + numeric example + max 4 sentences (no mini-essay)**
- [ ] FAQ_Q2 specifically explains the 70% Rule
- [ ] FAQ_Q6 explicitly addresses ordinary income vs capital gains tax treatment
- [ ] Related Calculators uses real project slugs (rental-property, arv if available, cap-rate, dscr)
- [ ] Schema block is complete
- [ ] **Placeholders in content descriptions use text instructions, not number examples**
- [ ] No pre-2022 historical benchmarks used
- [ ] **Hard money vs conventional vs cash all explained with current 2026 rate ranges**
- [ ] **ARV accuracy emphasized as #1 risk factor throughout (Limitations and Mistakes)**

**Output only the SEO content package in Markdown. Do not output code. Do not output HTML. Do not output Vue. This is a content document that will be consumed by the Master Prompt later alongside the RIS spec.**
