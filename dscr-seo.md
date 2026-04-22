# SEO Package Prompt — DSCR Calculator

You are a senior SEO copywriter specializing in US real estate investment content. Your job is to produce a **complete SEO content package** for the DSCR Calculator page.

The output of this prompt is pure content — no code, no HTML, no Vue. It will later be combined with the RIS specification and the Master Prompt to generate the actual page.

---

## YOUR TASK

Write an SEO package for:

```
Calculator Name:    DSCR Calculator
Slug:               dscr-calculator
Primary keyword:    dscr calculator
Secondary keywords: debt service coverage ratio calculator, dscr loan calculator, 
                    commercial real estate dscr calculator, rental property dscr calculator
Primary metric:     DSCR (Debt Service Coverage Ratio), expressed as a coefficient like 1.25x
Target audience:    US real estate investors applying for investment property loans, 
                    commercial real estate investors, brokers, and loan officers
```

Use the attached RIS specification (`dscr-ris.md`) as the source of truth for formulas, thresholds, benchmarks, and test cases. Do not invent numbers — pull them from the RIS.

---

## CRITICAL DISTINCTIONS TO PRESERVE

DSCR is a **lender-side ratio** — the primary underwriting metric for investment property loans. Throughout the SEO package:

**1. DSCR is a coefficient, not a percentage**
- Always write `1.25x` — never `125%`, never bare `1.25`
- The `x` suffix is industry standard

**2. Two separate DSCR formulas must be clearly distinguished:**
- **Property DSCR** = Annual NOI ÷ Annual Debt Service (used in commercial and agency multifamily loans)
- **DSCR Loan DSCR** = Monthly Rent ÷ Monthly PITIA (used in non-QM investor loans)
- These are different products for different scenarios — do NOT mix them up

**3. Industry-standard thresholds are AUTHORITATIVE:**
- 1.50x Excellent / 1.25x Strong / 1.15x Moderate / 1.00x Marginal / <1.00x Fail
- These are from Fannie Mae and Freddie Mac guidelines — cite directly, don't invent alternatives

**4. Stress testing is core:**
- DSCR must always be evaluated at current rate AND stressed (+1%, +2%)
- A deal that passes at 7.5% may fail at 8.5% — lenders check both

**5. Lender language must be careful:**
- DO NOT say "Qualifies for [loan program]" — that implies guaranteed approval
- DO say "Meets typical DSCR threshold for [program]" — factually accurate
- Always note that DSCR is necessary but not sufficient for approval

**6. 2026 rate environment context:**
- Investment property rates ~7.5–8% in 2026 materially compress DSCR vs pre-2022
- A 1.30x DSCR was common in 2019; in 2026 many deals land at 1.10–1.20x
- Benchmarks reflect this compression

**7. DSCR vs other metrics:**
- DSCR ≠ Cap Rate (unlevered yield) 
- DSCR ≠ Cash-on-Cash (levered return on cash invested)
- DSCR ≠ NOI (dollar operating income)
- DSCR is the lender's perspective on loan serviceability

---

## RULES

1. **US market only.** All examples, cities, states, lenders, and benchmarks must be US-specific and 2026-realistic.

2. **Content depth matches canonical template.** Cap Rate Calculator is the reference for depth per section.

3. **No generic filler.** Every paragraph must contain specific numbers, real lender programs, or concrete DSCR values.

4. **Primary keyword placement:**
   - Must appear in TITLE, H1, META DESCRIPTION, OVERVIEW_P1, and at least 2 H2 headings
   - Natural density

5. **Secondary keywords:**
   - Must use at least 2 of "debt service coverage ratio calculator", "dscr loan calculator", "commercial real estate dscr", "rental property dscr calculator" naturally in OVERVIEW_P1

6. **Sentence case** for headings.

7. **Output format:** structured Markdown with `----` section dividers. Ready to copy.

---

## REQUIRED OUTPUT STRUCTURE

Follow this structure exactly. Do not skip sections. Do not add sections.

```
----
TITLE:              [MUST follow strict pattern:
                     Required elements:
                     - "DSCR Calculator" at the start
                     - ONE of these USP markers: "2026", "Formula", "Lender", "Real Estate", "Loan"
                     - Brand suffix "| RealCalc"
                     - Total length 50–60 characters — STRICT MAXIMUM 60 CHARS
                     
                     **RECOMMENDED TARGET RANGE: 45–55 characters.**
                     Stay in the 45–55 char band to avoid truncation risk and miscounting errors.
                     Titles at 58–60 chars are on the edge — a single em dash rendering quirk
                     can push them over. Shorter titles are safer for both Google display and
                     character-count accuracy.
                     
                     **The example MUST ALSO respect the 60-character limit.**
                     **Do NOT exceed 60 characters under any circumstances.**
                     Google truncates longer titles in search results.
                     
                     Approved examples (all within the 45–55 safety range):
                     "DSCR Calculator — 2026 Loan Tool | RealCalc"  (45 chars)
                     "DSCR Calculator — Formula & Benchmarks | RealCalc"  (51 chars)
                     "DSCR Calculator — Lender Guide 2026 | RealCalc"  (47 chars)
                     
                     Count characters before outputting. Em dashes (—) count as 1 character visually
                     but may render differently — prefer shorter titles with safety margin.]
META DESCRIPTION:   [150–160 chars, primary keyword + USP + CTA. Mention "1.25x minimum" or "stress test" for specificity]
H1:                 [contains primary keyword, follows pattern: "DSCR Calculator — [Short USP] for US Real Estate Investors"]
----
OVERVIEW_P1:        [2–3 sentences — what this calculator is, what it measures, who it's for. Primary keyword in first sentence. Emphasize LENDER perspective.
                    
                    **REQUIRED:** Must use at least 2 of these 3 specific secondary keywords naturally (not the other variations):
                    - "debt service coverage ratio calculator"
                    - "dscr loan calculator"
                    - "rental property dscr calculator"
                    
                    These are the highest-volume secondary keywords. Do NOT substitute with rarer variants.]
OVERVIEW_P2:        [2–3 sentences — two formulas (Property DSCR for commercial/agency, DSCR Loan formula for non-QM investor loans). Mention 4 modes and stress testing.]
OVERVIEW_P3:        [2–3 sentences — who uses it and when: investors preparing loan applications, commercial RE investors, brokers evaluating deals, loan officers pre-screening clients.]
OVERVIEW_P4:        [2–3 sentences — what DSCR does NOT include (appreciation, principal paydown, tax benefits, down payment). Pair with Cap Rate, NOI, Cash-on-Cash for complete analysis.]
----
WHAT_IS_H2:         What Is Debt Service Coverage Ratio? (DSCR explained)
WHAT_IS_P1:         [3–4 sentences — definition with formula inline: DSCR = NOI ÷ Annual Debt Service. Explain it's a ratio (not percentage), shows how many times operating income covers debt. Historical context: why lenders built their underwriting around this metric.]
WHAT_IS_P2:         [3–4 sentences — why lenders focus on DSCR. Concrete example: property with 1.25x DSCR means $1.25 of income for every $1 of debt service — the 25-cent cushion is what protects the lender against rate shocks, vacancy spikes, or expense surprises. Contrast briefly with DSCR Loan product (Rent ÷ PITIA formula).]
----
HOW_TO_USE_H2:      How to Use the DSCR Calculator
HOW_TO_USE_INTRO:   [1 sentence — "Follow these steps to analyze any US investment property for loan qualification in under 2 minutes."]
STEP_1:
  TITLE:            Choose Property DSCR or DSCR Loan mode
  BODY:             [2–3 sentences — Property DSCR for commercial/agency multifamily using NOI. DSCR Loan for non-QM investor loans using monthly rent vs PITIA. Plus 2 reverse modes for Property DSCR family.]
STEP_2:
  TITLE:            Enter income and expense data
  BODY:             [2–3 sentences with specific US data — typical stabilized NOI ranges, T-12 as best source, common pitfall of using pro forma rent]
STEP_3:
  TITLE:            Enter loan details
  BODY:             [2–3 sentences — 2026 rates 7.5–8% for investment, 30-year standard amortization, LTV affects available programs]
STEP_4:
  TITLE:            Review DSCR + stress test
  BODY:             [2–3 sentences — the calculator shows DSCR at current rate, +1% stressed, +2% stressed. Lenders underwrite to stressed rates. A deal that's 1.25x today but 1.05x at +1% may still fail underwriting.]
STEP_5:
  TITLE:            Match to loan programs via Lender Context panel
  BODY:             [2–3 sentences — see which common DSCR thresholds your deal meets: Fannie/Freddie 1.25x conventional, MAH 1.15x, DSCR loan tiers. Note disclaimer that threshold-meeting ≠ automatic approval.]

PRO_TIPS (4 bullet points with concrete US data):
  - [e.g. "Use stabilized NOI or T-12 actuals — lenders almost always discount pro forma projections by 10–20%, so underwriting to pro forma creates a gap between your analysis and lender approval."]
  - [e.g. "A 1.25x DSCR at today's 7.5% rate that falls to 1.05x at 8.5% is what underwriters call 'fragile' — expect tighter LTV or pricing bumps."]
  - [e.g. "DSCR loans (non-QM) use Monthly Rent ÷ PITIA — expenses don't reduce DSCR in that product, which is why DSCR loans often show higher nominal DSCR than Property DSCR on the same property."]
  - [e.g. "Don't confuse DSCR with Cap Rate — Cap Rate is unlevered yield on property value. DSCR is levered income coverage ratio. Same property, two different metrics for two different audiences."]

RESULT_GUIDE (5 bullet points covering ALL tiers from RIS Section 6):

  **Thresholds MUST match RIS exactly — do NOT modify, round, or merge ranges:**
  - ≥ 1.50x
  - 1.25x–1.49x
  - 1.15x–1.24x
  - 1.00x–1.14x
  - < 1.00x

  - [≥ 1.50x — Excellent: description, which programs get best pricing]
  - [1.25x–1.49x — Strong: description, meets Fannie/Freddie conventional threshold]
  - [1.15x–1.24x — Moderate: description, meets MAH affordable programs]
  - [1.00x–1.14x — Marginal: description, DSCR loan territory with tighter LTV]
  - [< 1.00x — Fail: description, property does not cover debt, loan typically denied]

  Do NOT collapse tiers (e.g., do NOT merge "Moderate" and "Marginal" into one).
  Do NOT round thresholds (e.g., do NOT write "1.2x" instead of "1.15x–1.24x").
  The tier system is an industry standard — the Vue calculator will display these exact thresholds.
  The SEO content MUST match so users don't see conflicting numbers.
----
INPUTS_OUTPUTS_H2:  Inputs & Outputs — Field Reference
INPUTS_OUTPUTS_INTRO: What each field means and where lenders source the numbers.

INPUTS_TABLE (organized by mode — Property DSCR vs DSCR Loan):

Property DSCR mode fields:
  | Field               | What it means                                   | Where to find it                         |
  | Gross Rental Income | ...                                             | Rent roll, T-12, broker OM              |
  | Vacancy Rate        | ...                                             | Historical T-12, CoStar, market comps    |
  | Other Income        | ...                                             | ...                                      |
  | Operating Expenses  | ...                                             | T-12 actuals, not pro forma              |
  | Loan Amount         | ...                                             | ...                                      |
  | Interest Rate       | ...                                             | Lender quote — 2026 range 7–8%           |
  | Loan Term           | ...                                             | ...                                      |

DSCR Loan mode fields:
  | Field               | What it means                                   | Where to find it                         |
  | Monthly Rent        | ...                                             | Current lease or market rent estimate    |
  | Monthly Property Tax| ...                                             | Current tax bill ÷ 12, or county records |
  | Monthly Insurance   | ...                                             | ...                                      |
  | Monthly HOA         | ...                                             | ...                                      |
  | Monthly Association | ...                                             | ...                                      |
  | Loan Amount + Rate  | ...                                             | ...                                      |

OUTPUTS_TABLE:
  | Output                     | What it means                                   | Primary use                          |
  | DSCR (current rate)        | ...                                             | Match to lender thresholds           |
  | Stressed DSCR +1%          | ...                                             | Lender stress test                   |
  | Stressed DSCR +2%          | ...                                             | Conservative underwriting            |
  | Max Loan at 1.25x (Prop)   | ...                                             | Know your borrowing ceiling          |
  | Rent Cushion (DSCR Loan)   | ...                                             | Margin of safety in dollars          |
  | Annual Debt Service        | ...                                             | ...                                  |
----
FORMULA_H2:         DSCR Formula & Calculation Method
FORMULA_SUBTITLE:   Two formulas for two products — plus a real Atlanta, GA multifamily example

Property DSCR formula explanation (4–6 numbered steps):
  1. Calculate annual NOI (Gross Rent − Vacancy + Other − Operating Expenses)
  2. Calculate loan amount × standard amortization formula → Monthly Payment
  3. Monthly Payment × 12 → Annual Debt Service
  4. NOI ÷ Annual Debt Service → Property DSCR

DSCR Loan formula explanation (3–4 numbered steps):
  1. Calculate monthly rent (from lease or market estimate)
  2. Calculate monthly PITIA: Principal + Interest + Taxes + Insurance + HOA/Association
  3. Monthly Rent ÷ Monthly PITIA → DSCR Loan DSCR

FORMULA_BOX:
  Property DSCR:     Annual NOI ÷ Annual Debt Service
  DSCR Loan DSCR:    Monthly Rent ÷ Monthly PITIA
  Where:             PITIA = Principal + Interest + Taxes + Insurance + HOA/Association

FORMULA_VISUAL (ASCII-style text schema for Property DSCR):
  Gross Rental Income
  − Vacancy Loss
  + Other Income
  = Effective Gross Income
  − Operating Expenses
  = Net Operating Income (NOI)
  ÷ Annual Debt Service (Monthly P&I × 12)
  = DSCR (expressed as X.XXx)

FORMULA_EXAMPLE:
  Location:         Atlanta, GA (realistic 2026 market — strong for Property DSCR)
  Property type:    12-unit multifamily, stabilized, 2010s build
  Market context:   Atlanta offers one of the better DSCR environments in 2026 Sun Belt — 
                    moderate property taxes, growing rents, accessible agency loan execution.

  STRICT NUMERIC RANGES — use values within these bands so DSCR lands in 1.25x–1.35x (Strong tier):
    Gross Rental Income:     $180,000–$220,000 annually
    Vacancy Rate:            6–8%
    Other Income:            $3,000–$7,000
    Operating Expenses:      ~45–52% of EGI, but MUST be expressed as a specific dollar amount 
                             in the worked example (e.g. "$92,500", not "47% of EGI").
                             Calculate the dollar value explicitly in Step 3 — do NOT leave 
                             percentages in the final math.
    Purchase Price / Loan:   $1.4M–$1.8M with 75% LTV = $1.05M–$1.35M loan
    Interest Rate:           7.5% (fixed)
    Loan Term:               30 years (fixed)

  EXPECTED RESULT: DSCR should naturally fall in 1.25x–1.35x (Strong tier) with realistic inputs. 
  Do NOT artificially manipulate numbers. If realistic inputs produce DSCR outside 1.20x–1.40x, 
  report honestly.

  **POST-CALCULATION VERIFICATION (mandatory):**
  After computing the worked example, explicitly verify the result:
  - If DSCR landed in 1.25x–1.35x (target Strong tier) → proceed to interpretation
  - If DSCR is in 1.20x–1.24x or 1.36x–1.40x → acceptable but slightly off-target; 
    briefly note this in interpretation
  - If DSCR is OUTSIDE 1.20x–1.40x → explicitly explain why in the interpretation paragraph 
    (e.g., "this example shows lower DSCR than typical because expenses came out high at 52%"). 
    Do NOT silently accept an off-target result. Do NOT retroactively tweak inputs to hit target.
  
  The goal is a defensible, honest example — not a pre-engineered one. If your realistic
  inputs consistently produce results outside the range, your inputs may be unrealistic
  and should be reconsidered (still within the specified ranges above, not fabricated).

  Calculation (step by step — every step must show actual dollar math, no percentages left unreduced):
    Step 1: Vacancy Loss = Gross Rent × Vacancy % = [$ amount]
    Step 2: EGI = Gross Rent − Vacancy + Other Income = [$ amount]
    Step 3: Operating Expenses = [$ amount] (calculate from ~47% of EGI, but display as dollars)
    Step 4: NOI = EGI − Operating Expenses = [$ amount]
    Step 5: Loan Amount = [$ amount]
    Step 6: Monthly Payment (amortization formula) = [$ amount]
    Step 7: Annual Debt Service = Monthly Payment × 12 = [$ amount]
    Step 8: DSCR = NOI ÷ Annual Debt Service = [X.XXx]
    Step 9: Stressed DSCR at +1% rate = [X.XXx, lower than step 8]

  **MANDATORY VERIFICATION STEP (after calculation):**
  Before finalizing the worked example, check the DSCR result:
  
  - If DSCR landed in 1.25x–1.35x → proceed, this is the target Strong tier.
  - If DSCR is in 1.20x–1.24x or 1.36x–1.40x → acceptable, but note the position relative to Strong tier in the Interpretation section.
  - If DSCR is OUTSIDE 1.20x–1.40x → STOP. Do NOT silently publish the result. Either:
    (a) explicitly explain in the Interpretation why the realistic inputs produced that outcome (e.g., "At 75% LTV in this rate environment, DSCR compresses to 1.15x — illustrating why many 2026 deals require more equity"), OR
    (b) adjust ONE input back toward realistic market range (e.g., rent was too low for Atlanta class-B multifamily) — but document the adjustment transparently.
  
  Do NOT silently output a "good-looking" example that contradicts the stated Strong tier target.
  Do NOT artificially manipulate multiple inputs to force 1.25x result.

  Result:
    DSCR = [realistic 1.25x–1.35x, verified against the range above]
    Stressed DSCR +1% = [lower than current — show actual math, not placeholder]

  Interpretation:
    [2 sentences tying the result to Fannie/Freddie 1.25x threshold and market context. 
    If DSCR landed outside Strong tier, use this section to explain why, not to hide it.]
----
RIS_H2:             What Your DSCR Result Means

RIS_INTRO:          [1–2 sentences — "Your DSCR tells lenders whether the property's income can cover the debt — and how much cushion is left. Here's how to interpret each range for US 2026 underwriting."]

RIS_EXCELLENT (Tier 1: 1.50x+):
  Range:            1.50x or higher — Excellent
  Typical context:  [Low-leverage deals, stabilized suburban multifamily in strong markets, industrial NNN leases]
  Meaning:          [3–4 sentences — low-risk profile. Meets threshold for best pricing across agency and portfolio loans. Strong cushion absorbs operating shocks. Rarely achieved in 2026 at 75% LTV due to rate environment — often requires lower leverage.]

RIS_STRONG (Tier 2: 1.25x–1.49x):
  Range:            1.25x–1.49x — Strong
  Typical context:  [Standard stabilized multifamily, Sun Belt and Midwest deals at 75% LTV with 7.5% rate]
  Meaning:          [3–4 sentences — meets Fannie Mae / Freddie Mac conventional minimum (1.25x). This is the target band for most investment property underwriting. Solid but not excessive cushion.]

RIS_MODERATE (Tier 3: 1.15x–1.24x):
  Range:            1.15x–1.24x — Moderate
  Typical context:  [MAH affordable deals, tighter 2026 underwriting on conventional deals]
  Meaning:          [3–4 sentences — meets Fannie Mae MAH affordable program threshold (1.15x). Some lenders accept. Limited cushion — any rate, expense, or occupancy shock can push below conventional minimum.]

RIS_MARGINAL (Tier 4: 1.00x–1.14x):
  Range:            1.00x–1.14x — Marginal
  Typical context:  [Most DSCR loan (non-QM) minimums land here; aggressive underwriting]
  Meaning:          [3–4 sentences — most DSCR loan lenders accept 1.00x–1.10x minimum, but pricing worsens and LTV caps tighten. Property barely covers debt. No stress cushion — rate increase pushes to fail.]

RIS_FAIL (Tier 5: below 1.00x):
  Range:            Below 1.00x — Fail
  Typical context:  [Over-leveraged deals, high-vacancy assets, distressed properties]
  Meaning:          [3–4 sentences — property does not generate enough income to cover debt service. Loan typically denied. Fix requires: lower LTV, lower rate (refinance when available), or higher NOI. Warning note: "Fail" tier ≠ negative leverage — negative leverage is a separate concept about financing vs all-cash returns.]

RIS_CONTEXT:
  Title:            Why DSCR is calibrated to 2026, not to 2018
  Body:             [4–6 sentences explaining: historical 2018 DSCR benchmarks assumed 4–5% rates. In 2026, same property might show 1.05x instead of 1.35x simply because rate went from 4.5% to 7.5%. Two concrete examples: (1) deal that was 1.40x in 2018 would be ~1.10x in 2026 at same LTV; (2) to maintain 1.25x in 2026, either reduce LTV to 60–65% or find properties with stronger rent-to-price ratios. Mention that lenders adjusted approval standards only partially — 1.25x Fannie threshold is unchanged, but many deals that used to clear easily now require more equity.]
----
BENCHMARKS_H2:      DSCR Benchmarks by Market & Property Type (2026)
BENCHMARKS_INTRO:   [2 sentences — "Typical 2026 DSCR outcomes at standard 75% LTV, 7.5% rate, 30-year term. Use as starting points — actual DSCR depends heavily on specific property, market, and underwriting. These are underwriting estimates calibrated to 2026 rate environment, not market-reported statistics."]

BENCHMARK_BY_TYPE_H3: By Property Type
BENCHMARK_BY_TYPE_TABLE (6 rows from RIS):
  | Property Type              | Tight (Coastal) | Standard (Sunbelt) | Strong (Midwest/SE) |
  | Single-Family Rental (SFR) | [from RIS]      | [from RIS]         | [from RIS]          |
  | Small Multifamily (2–4)    | ...             | ...                | ...                 |
  | Multifamily 5+ Units       | ...             | ...                | ...                 |
  | Retail / Strip Center      | ...             | ...                | ...                 |
  | Industrial / Warehouse     | ...             | ...                | ...                 |
  | Office                     | ...             | ...                | ...                 |

BENCHMARK_BY_STATE_H3: By State — Typical Stabilized Residential DSCR
BENCHMARK_BY_STATE_CARDS (8 cards, one per state — ranges from RIS):

  **IMPORTANT for every state note:** explain WHY the DSCR range differs from others. 
  Attribute to specific cost factors, not generic "market conditions":
  - Property tax burden (e.g., TX no state income tax but high property tax)
  - Insurance costs (e.g., FL hurricane insurance, CA wildfire insurance)
  - Rent-to-price ratio (coastal vs Midwest structural differences)
  - Regulation (e.g., NY rent stabilization limits rent growth)
  - Cap rate environment (coastal compression vs Sun Belt expansion)
  
  Each state note must name at least one specific cost driver — generic "strong market" 
  or "compressed DSCR" without explanation is insufficient.

  California (CA):
    Range:     DSCR 1.00x–1.15x
    Note:      [High prices + low cap rates → compressed DSCR. Coastal California deals often need 30%+ equity to reach 1.25x threshold.]

  Texas (TX):
    Range:     DSCR 1.15x–1.30x
    Note:      [...]

  Florida (FL):
    Range:     DSCR 1.10x–1.25x
    Note:      [Insurance pressure compresses DSCR — even strong rent markets face this drag.]

  New York (NY):
    Range:     DSCR 1.00x–1.15x
    Note:      [Rent regulation and high costs push DSCR lower in NYC. Upstate markets show wider ranges.]

  Arizona (AZ):
    Range:     DSCR 1.15x–1.30x
    Note:      [...]

  Georgia (GA):
    Range:     DSCR 1.20x–1.35x
    Note:      [Atlanta metro offers some of the better DSCR environments for 2026 investors.]

  Colorado (CO):
    Range:     DSCR 1.10x–1.25x
    Note:      [...]

  Washington (WA):
    Range:     DSCR 1.10x–1.25x
    Note:      [...]

BENCHMARK_BY_STATE_TABLE (same 8 states, tabular with fuller notes, 2–3 sentences each):
  | State      | Typical Range | Key Notes |
  | California | 1.00x–1.15x   | ... |
  | Texas      | 1.15x–1.30x   | ... |
  | ...        | ...           | ... |

SOURCES_NOTE:       These DSCR ranges are synthesized from multiple industry reports and underwriting practices, including Fannie Mae Multifamily Guide (which sets 1.25x conventional minimum), Freddie Mac Multifamily Investor Materials (1.25x for fixed-rate), and 2026 rate environment analysis. DSCR is not directly reported as a market statistic (unlike cap rates) — these ranges are derived by combining lender assumptions with state-specific cost factors (property tax, insurance, rent levels). Always verify with current local lender quotes and actual deal underwriting. Not market-reported figures.
----
STRATEGY_H2:        When DSCR Matters Most
STRATEGY_INTRO:     How DSCR fits into each major US real estate investment and lending context

STRATEGY_AGENCY_MULTIFAMILY:
  Badge:            Agency Multifamily
  Paragraph 1:      [3–4 sentences — Fannie Mae and Freddie Mac are the largest multifamily lenders in the US. Their 1.25x DSCR minimum is the gold standard. Worked example: $10M property with 75% LTV and 7.5% rate requires ~$940K annual debt service — need NOI of at least $1.175M to qualify.]
  Paragraph 2:      [2–3 sentences — tips: agency lenders use a 30-year amortization even on 10-year loans. Stabilized NOI (not pro forma) is what gets underwritten. Occupancy history of 90%+ usually required.]

STRATEGY_DSCR_LOAN:
  Badge:            DSCR Loan (Non-QM)
  **IMPORTANT:** This section must receive EQUAL content depth as STRATEGY_AGENCY_MULTIFAMILY — 
  do NOT write a short mention. DSCR loans are ~15–20% of investor loan volume in 2026 and 
  deserve full treatment.
  Paragraph 1:      [3–4 sentences — DSCR loans grew to 15–20% of investor loan volume in 2026 because they don't require personal income docs. Non-QM lenders accept 1.00x–1.20x minimum depending on LTV and reserves. Rent-vs-PITIA formula makes these loans simpler to underwrite but more rate-sensitive. Worked example: $400K property, $3,500/mo rent, $2,800 PITIA = 1.25x DSCR Loan DSCR — qualifies for standard DSCR loan program.]
  Paragraph 2:      [3–4 sentences — trade-offs: higher rates than conventional (0.5–1.5% premium), tighter LTV caps (typically 75–80% max), prepayment penalties often included. Best for investors who can't document W-2 income or want to scale portfolios without personal debt-to-income constraints. Typical borrower: real estate professional with 5+ rental properties.]

STRATEGY_COMMERCIAL:
  Badge:            Commercial / CMBS
  Paragraph 1:      [3–4 sentences — CMBS and commercial portfolio lenders typically require 1.25x–1.35x minimum. Office assets often pushed to 1.40x+ in 2026 given sector stress. Industrial and NNN retail get more favorable 1.25x treatment.]
  Paragraph 2:      [2–3 sentences — commercial lenders stress-test more aggressively — often +2% or more. Lease rollover analysis matters: a single tenant rollover can crater stabilized DSCR.]

STRATEGY_REFINANCE:
  Badge:            Refinance
  Paragraph 1:      [3–4 sentences — in 2026 refinance, many 2019–2021 purchases face DSCR compression at current rates. A deal that was 1.40x at 4% rate now shows 0.95x at 7.5% on same NOI. Owners must either inject equity, wait for rate drops, or sell.]
  Paragraph 2:      [2–3 sentences — "maturity wall" challenge: $100B+ of commercial RE loans maturing through 2026 face refinance at materially higher rates. DSCR stress test is critical to see if deal survives refi.]

STRATEGY_TARGET_UNDERWRITING:
  Badge:            Target Underwriting
  Title:            Using DSCR to Size Your Loan Request
  Formula:          Max Loan = reverse-solve from (NOI ÷ Target DSCR × Rate / Term amortization factor)
  Body:             [3–4 sentences — instead of asking "is 75% LTV enough", ask "what LTV gets me to 1.25x DSCR?". This flips the conversation — loan sizing from DSCR target instead of LTV ceiling produces more approval-ready deals.]
----
APPLICATIONS_H2:    Applications of DSCR Analysis
APPLICATIONS_INTRO: Six concrete ways investors and lenders use DSCR

APPLICATION_1:
  Title:            Loan Pre-Qualification Screening
  Body:             [2–3 sentences — calculate DSCR before submitting to lender. If DSCR is below 1.20x at 75% LTV, either reduce leverage or find a different deal.]

APPLICATION_2:
  Title:            Comparing Agency vs Non-QM Products
  Body:             [2–3 sentences]

APPLICATION_3:
  Title:            Refinance Feasibility
  Body:             [2–3 sentences — does the deal still work at current rates?]

APPLICATION_4:
  Title:            Deal Sizing from Lender Perspective
  Body:             [2–3 sentences — use reverse mode to find max loan that still hits 1.25x]

APPLICATION_5:
  Title:            Stress Testing for Underwriter Meetings
  Body:             [2–3 sentences — bring stressed DSCR data to loan committee]

APPLICATION_6:
  Title:            Portfolio Debt Strategy
  Body:             [2–3 sentences — ranking portfolio properties by DSCR helps prioritize refi vs sell decisions]
----
INDUSTRY_STANDARDS_H2:   Industry Standards & Professional Guidelines
INDUSTRY_STANDARDS_INTRO: DSCR thresholds are embedded in agency underwriting, commercial lending, and non-QM loan products

STANDARD_1:
  Title:            Fannie Mae & Freddie Mac Multifamily
  Points (4 bullets — specific underwriting specs):
    - [Fannie Mae Multifamily Conventional: 1.25x DSCR minimum for stabilized properties]
    - [Freddie Mac Multifamily Fixed-Rate: 1.25x DSCR, 80% LTV max per standard guidelines]
    - [Fannie Mae MAH (Multifamily Affordable Housing): 1.15x DSCR minimum with affordability covenants]
    - [Both GSEs use 30-year amortization for sizing, even on 10-year balloon loans]

STANDARD_2:
  Title:            DSCR Loan Programs (Non-QM / Portfolio)
  Intro:            [2 sentences about DSCR loans — no W-2 income required, based purely on property DSCR]
  Points (4 bullets):
    - [Conservative DSCR loan: 1.20x minimum, typically 75% LTV max, 0.5% rate premium over conventional]
    - [Standard DSCR loan: 1.10x–1.15x minimum, 75–80% LTV, 0.75–1.0% rate premium]
    - [Aggressive DSCR loan: 1.00x minimum, 70–75% LTV, 1.0–1.5% rate premium]
    - [All DSCR loan programs typically use Monthly Rent ÷ Monthly PITIA formula]

STANDARD_3:
  Title:            Commercial Lender Thresholds
  Points (5 bullets with specific DSCR requirements):
    - [CMBS multifamily: 1.25x–1.30x typical minimum]
    - [CMBS retail / industrial: 1.25x–1.35x minimum]
    - [CMBS office: 1.35x+ increasingly required in 2026 due to sector stress]
    - [Portfolio / bank loans: vary by institution, typically 1.20x–1.30x for stabilized]
    - [Bridge lenders (short-term): may accept 1.00x–1.10x with clear path to stabilization]
----
LIMITATIONS_H2:     Limitations of DSCR
LIMITATIONS_INTRO:  [1 sentence — DSCR is the primary underwriting metric, but it has real blind spots]

LIMITATION_1:
  Title:            Operating Metric Only — No Equity Returns
  Body:             [2–3 sentences — DSCR measures debt coverage, not investor returns. A 1.30x DSCR deal could still be a poor investment if it ties up too much equity for thin cash-on-cash return. Pair with Cash-on-Cash.]

LIMITATION_2:
  Title:            Point-in-Time Snapshot
  Body:             [2–3 sentences — DSCR uses current (or Year 1) NOI. Value-add deals show weak DSCR during renovation, then strong stabilized DSCR. Lenders size on stabilized — always.]

LIMITATION_3:
  Title:            Sensitive to Rate Assumption
  Body:             [2–3 sentences — DSCR moves materially with interest rate. A 0.5% rate change can shift DSCR by 0.10x. Always check stress test, not just current rate.]

LIMITATION_4:
  Title:            Ignores Principal Paydown and Appreciation
  Body:             [2–3 sentences — DSCR says nothing about long-term wealth creation. A 1.10x DSCR deal with strong appreciation beats a 1.40x DSCR deal in declining market over 10 years.]

WHEN_NOT_TO_USE_H3: When Not to Use DSCR as the Primary Metric
WHEN_NOT_TO_USE_LIST (4 bullets):
  - All-cash purchases:                  [no debt → DSCR is irrelevant, use Cap Rate for unlevered analysis]
  - Short hold (under 3 years):          [IRR and exit cap rate matter more than year-1 DSCR]
  - Heavy value-add / reposition:        [current DSCR meaningless — use pro forma stabilized DSCR]
  - Land / development:                  [no operating income → DSCR does not apply]
----
COMMON_MISTAKES_H2: Common Mistakes When Calculating DSCR
COMMON_MISTAKES_INTRO: Most bad DSCR analysis comes from input errors or formula confusion

MISTAKE_1:
  Title:            Confusing Property DSCR with DSCR Loan formula
  Body:             [3–4 sentences — Property DSCR uses NOI (after all operating expenses). DSCR Loan uses Rent vs PITIA (before most operating expenses). The same property can show 1.20x Property DSCR and 1.35x DSCR Loan DSCR — both are correct for their product context. Don't apply one formula to the wrong loan type.]

MISTAKE_2:
  Title:            Using pro forma NOI instead of T-12 actuals
  Body:             [3–4 sentences — lenders underwrite to actual operating history, not your optimistic projections. A pro forma 1.30x DSCR usually lands closer to 1.10x–1.15x once underwriter applies conservative assumptions.]

MISTAKE_3:
  Title:            Ignoring the stress test
  Body:             [3–4 sentences — current rate DSCR of 1.25x can fail at +1% stress. If stressed DSCR falls below 1.10x, expect pricing bumps, tighter LTV, or denial.]

MISTAKE_4:
  Title:            Treating "Qualifies for" as automatic approval
  Body:             [3–4 sentences — meeting DSCR threshold is necessary but not sufficient. Lenders also evaluate sponsor credit, experience, reserves, property condition, occupancy history, and market dynamics. DSCR opens the conversation — it doesn't close the loan.]

MISTAKE_5:
  Title:            Applying 2018-era benchmarks in 2026 rate environment
  Body:             [3–4 sentences — a 1.30x DSCR that was routine in 2019 at 4.5% rate is uncommon in 2026 at 7.5%. Don't call 1.15x "weak" by 2018 standards — in 2026 it's Moderate and meets MAH threshold.]
----
FAQ_H2:             Frequently Asked Questions

FAQ_Q1:             What is a good DSCR for rental property in 2026?
FAQ_A1:             [3–4 sentences — industry-standard thresholds: 1.50x+ Excellent, 1.25x–1.49x Strong (meets Fannie/Freddie), 1.15x–1.24x Moderate (meets MAH), 1.00x–1.14x Marginal (DSCR loan territory), below 1.00x Fails. In 2026 rate environment, 1.25x is the realistic target for most investors — 2018-era 1.35x benchmarks are harder to achieve now.]

FAQ_Q2:             What is the difference between Property DSCR and DSCR Loan DSCR?
FAQ_A2:             [3–4 sentences — Property DSCR = Annual NOI ÷ Annual Debt Service (used for agency, CMBS, commercial loans). DSCR Loan DSCR = Monthly Rent ÷ Monthly PITIA (used for non-QM investor loans). Same property can show different DSCR values in these two formulas — both are correct for their product context.]

FAQ_Q3:             What is PITIA in a DSCR calculation?
FAQ_A3:             [2–3 sentences — PITIA = Principal + Interest + Taxes + Insurance + HOA/Association fees. It's the monthly all-in housing cost used in DSCR loan underwriting. Operating expenses like maintenance and management are NOT part of PITIA.]

FAQ_Q4:             How do lenders stress test DSCR?
FAQ_A4:             [3–4 sentences — underwriters recalculate DSCR at elevated rates (+1%, +2%, or even +3%). A deal that's 1.25x at 7.5% but 1.05x at 8.5% signals fragility. Conservative lenders require stress-tested DSCR to remain above 1.15x–1.20x.]

FAQ_Q5:             Can I get a DSCR loan with less than 1.00x DSCR?
FAQ_A5:             [3–4 sentences — generally no. Below 1.00x means property doesn't cover debt. Some aggressive non-QM lenders accept 1.00x minimum, but pricing worsens and LTV caps tighten. Realistic fix: reduce loan amount, increase down payment, or find stronger income.]

FAQ_Q6:             Is a higher DSCR always better?
FAQ_A6:             [Must include exactly these 3 elements:
                     1. Lender perspective: higher DSCR = lower risk, better pricing
                     2. Investor trade-off: very high DSCR may mean too much equity tied up for thin returns
                     3. Practical recommendation: pair DSCR with Cash-on-Cash Return to balance both views
                     
                     MAXIMUM 4 SENTENCES. Do NOT write philosophical analysis or extended musings.
                     Concrete example preferred over abstract reasoning.]

FAQ_Q7:             Does DSCR include capital expenditures (CapEx)?
FAQ_A7:             [3–4 sentences — typically no. DSCR uses NOI, which excludes CapEx by definition. Some conservative lenders underwrite with reserves for replacement reserves, effectively reducing NOI for DSCR purposes. Check specific lender guidelines.]

FAQ_Q8:             Why did my DSCR drop so much in 2026?
FAQ_A8:             [3–4 sentences — interest rate environment. Same property at same NOI shows materially lower DSCR at 7.5% rate vs 4.5% rate. The "rate reset" is the single biggest reason many 2019–2021 deals now face refinance challenges. Use this calculator's stress test to see how your deal performs across rate scenarios.]
----
RELATED_CALCULATORS:
  (3–4 related calculators that exist in the project — use real slugs)

  1. cap-rate-calculator
  2. noi-calculator
  3. cash-on-cash-calculator
  4. rental-property-calculator
----
SCHEMA_TYPE:        Calculator
SCHEMA_NAME:        DSCR Calculator
SCHEMA_DESCRIPTION: [160-char description — "DSCR calculator for US real estate investors. Calculate Property DSCR (NOI/Debt Service) or DSCR Loan (Rent/PITIA) with stress test and lender benchmarks."]
SCHEMA_URL:         https://realcalc.com/dscr-calculator
SCHEMA_FEATURE_LIST: real-time calc, Property DSCR + DSCR Loan modes, stress test (+1%, +2%), lender context panel, find max loan, find required NOI, benchmarks, PDF export

FAQ_SCHEMA:
  All 8 Q&A from above formatted for JSON-LD FAQPage schema.
----
```

---

## OUTPUT CHECKLIST

Before finalizing, verify:

- [ ] **TITLE follows strict pattern, count chars BEFORE outputting — STRICT MAX 60 chars, RECOMMENDED 45–55 char safety range**
- [ ] META DESCRIPTION is 150–160 chars
- [ ] H1 contains primary keyword
- [ ] Overview has exactly 4 paragraphs
- [ ] **OVERVIEW_P1 uses at least 2 of these 3 specific keywords: "debt service coverage ratio calculator", "dscr loan calculator", "rental property dscr calculator"**
- [ ] **DSCR always formatted as `X.XXx` (e.g., `1.25x`) — never percentage or bare number**
- [ ] **Property DSCR and DSCR Loan formulas clearly distinguished throughout**
- [ ] **PITIA correctly defined as Principal + Interest + Taxes + Insurance + HOA/Association**
- [ ] How to Use has 5 numbered steps + 4 pro tips + 5 result guide points
- [ ] **Result Guide contains ALL 5 tiers with EXACT thresholds from RIS: ≥1.50x / 1.25–1.49x / 1.15–1.24x / 1.00–1.14x / <1.00x — no rounding, no merging**
- [ ] Formula section has both formulas + worked Atlanta example + stress test
- [ ] **FORMULA_EXAMPLE result falls in 1.25x–1.35x (Strong tier) with realistic inputs**
- [ ] **MANDATORY VERIFY step executed: if DSCR landed outside 1.20x–1.40x, explicitly explain why in Interpretation — do NOT silently output a bad-fit example**
- [ ] **FORMULA_EXAMPLE shows Operating Expenses as DOLLAR AMOUNT, not percentage (e.g. "$92,500" not "47% of EGI")**
- [ ] **Every calculation step shows actual dollar math — no percentages left unreduced in final steps**
- [ ] RIS section has 5 tier bands with lender context for each
- [ ] Benchmarks by Type has 6 property types from RIS
- [ ] Benchmarks by State has all 8 states (cards + table) with ranges from RIS
- [ ] **Each state note explains WHY DSCR range differs — names specific cost driver (property tax, insurance, rent-to-price, regulation, cap rate)**
- [ ] **All benchmarks explicitly labeled as "underwriting estimates — not market-reported DSCR statistics"**
- [ ] Strategy has Agency Multifamily + DSCR Loan + Commercial + Refinance + Target Underwriting
- [ ] **STRATEGY_DSCR_LOAN receives EQUAL depth as STRATEGY_AGENCY_MULTIFAMILY — not a short mention**
- [ ] Applications has 6 use cases
- [ ] Industry Standards covers Fannie/Freddie + DSCR loans + Commercial/CMBS
- [ ] **Industry Standards uses "Meets typical DSCR threshold for", NOT "Qualifies for"**
- [ ] Limitations has 4 items + "When Not to Use" list
- [ ] Common Mistakes has 5 items, includes "Confusing Property DSCR with DSCR Loan formula"
- [ ] FAQ has exactly 8 Q&A, each with 3–4 sentence answers
- [ ] **FAQ_A6 (higher DSCR always better?) strictly 4 sentences max, includes lender perspective + investor trade-off + recommendation**
- [ ] FAQ includes question about stress testing and 2026 rate environment context
- [ ] Related Calculators uses real project slugs (cap-rate, noi, cash-on-cash, rental-property)
- [ ] Schema block is complete
- [ ] **No pre-2022 historical benchmarks used — 2026 realistic only**
- [ ] **"Qualifies for" language never used for loan programs — always "Meets typical DSCR threshold for"**
- [ ] **DSCR never confused with Cap Rate, NOI, or Cash-on-Cash in content**
- [ ] **Stress test is mentioned prominently throughout, not as an afterthought**

**Output only the SEO content package in Markdown. Do not output code. This is a content document that will be consumed by the Master Prompt later alongside the RIS spec.**
