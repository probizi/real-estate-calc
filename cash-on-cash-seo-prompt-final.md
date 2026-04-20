# SEO Package Prompt — Cash-on-Cash Return Calculator

You are a senior SEO copywriter specializing in US real estate investment content. Your job is to produce a **complete SEO content package** for the Cash-on-Cash Return Calculator page.

The output of this prompt is pure content — no code, no HTML, no Vue. It will later be combined with the RIS specification and the Master Prompt to generate the actual page.

---

## YOUR TASK

Write an SEO package for:

```
Calculator Name:    Cash-on-Cash Return Calculator
Slug:               cash-on-cash-calculator
Primary keyword:    cash on cash return calculator
Secondary keywords: cash-on-cash return real estate, CoC calculator rental property, 
                    leveraged return calculator real estate, cash flow return calculator
Primary metric:     Cash-on-Cash Return (CoC), % per year
Target audience:    US real estate investors who use leverage — buy-and-hold, BRRRR, value-add, and commercial
```

Use the attached RIS specification (`cash-on-cash-ris.md`) as the source of truth for formulas, thresholds, benchmarks, and test cases. Do not invent numbers — pull them from the RIS.

---

## CRITICAL DISTINCTIONS TO PRESERVE

This calculator is about a **levered** metric. Throughout the entire SEO package:

- CoC is **different from Cap Rate** (Cap Rate is unlevered)
- CoC is **different from NOI** (NOI is the operating line, not a return metric)
- CoC is calibrated for the **2026 US rate environment** (investment property rates ~7–8%)
- **"Negative Cash Flow" ≠ "Negative Leverage"** — these are separate concepts and must be treated separately
- **Default output = Year 1 CoC** unless stabilized inputs are explicitly entered

Do NOT:
- Slip into Cap Rate lexicon when writing about CoC
- Use historical pre-2022 benchmarks (10%+ CoC was common then, not realistic in 2026)
- Conflate Negative Cash Flow with Negative Leverage in tier labels or FAQ
- Claim "CoC < interest rate" is an absolute definition of negative leverage — it's a practical warning sign

---

## RULES

1. **US market only.** All examples, cities, states, benchmarks must be US-specific and 2026-realistic.

2. **Content depth matches canonical template.** The Cap Rate Calculator page is the reference — match its depth section by section.

3. **No generic filler.** Every paragraph must contain specific numbers, real city names, or concrete examples.

4. **No thin content.** If a section has 4 paragraphs in the canonical — write 4 paragraphs.

5. **Primary keyword placement:**
   - Must appear in TITLE, H1, META DESCRIPTION, OVERVIEW_P1, and at least 2 H2 headings
   - Natural density — do not keyword-stuff

6. **Sentence case** for headings. Not Title Case.

7. **Output format:** structured Markdown with clear section dividers (`----`). Ready to copy.

---

## REQUIRED OUTPUT STRUCTURE

Follow this structure exactly. Do not skip sections. Do not add sections.

```
----
TITLE:              [MUST follow this pattern:
                     Required elements:
                     - "Cash-on-Cash Return Calculator" at the start
                     - ONE of these USP markers: "2026", "Formula", "Leverage", "Rental Property"
                     - Brand suffix "| RealCalc"
                     - Total length 50–60 characters — STRICT MAXIMUM 60 CHARS
                     
                     Example (within 60 char limit):
                     "Cash-on-Cash Return Calculator — 2026 Guide | RealCalc"  (56 chars)
                     "Cash-on-Cash Calculator — Leverage & Rentals | RealCalc"  (57 chars)
                     
                     The example must also respect the 50–60 character limit.
                     Do NOT exceed 60 characters under any circumstances — 
                     Google truncates longer titles in search results.
                     Do NOT produce generic titles like "Cash on Cash Calculator | RealCalc" — too short, no CTR value.]
META DESCRIPTION:   [150–160 chars, primary keyword + USP + CTA]
H1:                 [contains primary keyword, follows pattern: "[Calculator Name] — [Short USP] for US Real Estate Investors"]
----
OVERVIEW_P1:        [2–3 sentences — what this calculator is, what it measures, who it's for. Primary keyword in first sentence. Must emphasize LEVERED nature.
                     
                     REQUIRED: Must use at least 2 of the secondary keywords naturally:
                     - "cash-on-cash return real estate"
                     - "CoC calculator rental property"
                     - "leveraged return calculator"
                     
                     Do NOT keyword-stuff — integrate naturally into prose.]
OVERVIEW_P2:        [2–3 sentences — how it works and what it shows. Mention 3 modes and the 2026 rate environment context.]
OVERVIEW_P3:        [2–3 sentences — who uses it and when. Investors with financing, BRRRR operators, value-add buyers, commercial investors.]
OVERVIEW_P4:        [2–3 sentences — what CoC does NOT include (appreciation, principal paydown unless opted in, tax benefits). Pair with NOI, Cap Rate, DSCR for complete analysis.]
----
WHAT_IS_H2:         What Is Cash-on-Cash Return? (CoC calculator real estate explained)
WHAT_IS_P1:         [3–4 sentences — definition with formula inline: CoC = Annual Cash Flow ÷ Total Cash Invested × 100. Emphasize it's the levered return on actual cash out of pocket.]
WHAT_IS_P2:         [3–4 sentences — why investors use it. Concrete example comparing 2 deals with same Cap Rate but different financing → different CoC. Show the power of leverage analysis.]
----
HOW_TO_USE_H2:      How to Use the Cash-on-Cash Return Calculator
HOW_TO_USE_INTRO:   [1 sentence — "Follow these steps to analyze any US rental property with financing in under 2 minutes."]

STEP_1:
  TITLE:            Choose a calculation mode
  BODY:             [2–3 sentences — standard CoC, Find Required Cash Flow, or Find Max Purchase Price. When to use each.]

STEP_2:
  TITLE:            Enter annual rent, vacancy, and operating expenses
  BODY:             [2–3 sentences with specific guidance — 5–8% vacancy typical for 2026, expenses 35–50% of EGI]

STEP_3:
  TITLE:            Enter purchase price and down payment
  BODY:             [2–3 sentences — 20–25% typical for investment property, DSCR loans allow lower but at higher rates]

STEP_4:
  TITLE:            Enter financing terms (interest rate, loan term)
  BODY:             [2–3 sentences — 2026 rates 7–8% for investment property, 30-year standard, 15-year higher CoC but lower cash flow. Include this insight: "Small changes in interest rate (±0.5%) can shift CoC by 1–2 percentage points — use today's actual lender quote, not last month's."]

STEP_5:
  TITLE:            Add closing costs, rehab, and reserves
  BODY:             [2–3 sentences — closing costs 2–5% of price, reserves 6–12 months operating expenses, why total cash invested matters]

PRO_TIPS (4 bullet points with concrete US data):
  - In 2026, most investment property loans price 0.75–1.25% above primary mortgage rates — use 7.5–8.5% for conventional, 8.5–10% for DSCR loans.
  - Budget closing costs at 3% of purchase price for conventional loans, 4–5% for DSCR loans with higher origination fees.
  - A CoC below your interest rate is a practical warning sign of potentially negative leverage — the financing may be reducing your return vs all-cash.
  - Don't confuse Cash-on-Cash with Cap Rate — Cap Rate ignores financing entirely. CoC is what you actually earn on your deployed capital.

RESULT_GUIDE (5 bullet points covering ALL tiers from RIS Section 6 — must match RIS exactly):
  - 9%–11.99% — Strong: [realistic for Midwest/SE markets with 25%+ down in 2026]
  - 6%–8.99% — Solid: [realistic target for most 2026 Sun Belt deals, DSCR typically 1.25+]
  - 3%–5.99% — Weak: [common in primary coastal markets, may indicate appreciation play]
  - 0%–2.99% — Critical: [very thin cushion, any shock pushes cash flow negative]
  - Below 0% — Negative Cash Flow: [property losing money each year after debt service. DO NOT label as "Negative Leverage" — that is a separate concept shown via Leveraged Yield Spread]

  Optional: mention Tier 1 (12%+ Exceptional) as a rare but possible outcome for deeply discounted acquisitions or post-BRRRR stabilization.

  These tier ranges must match RIS Section 6 exactly. Do NOT collapse or merge tiers.
----
INPUTS_OUTPUTS_H2:  Inputs & Outputs — Field Reference
INPUTS_OUTPUTS_INTRO: What each field means and where to find the numbers.

INPUTS_TABLE (one row per field from the RIS):
  | Field                | What it means                                   | Where to find the numbers                |
  | -------------------- | ----------------------------------------------- | ---------------------------------------- |
  | Gross Rental Income  | [2 sentences]                                   | Rent roll, leases, OM, seller T-12       |
  | Vacancy Rate         | ...                                             | ...                                      |
  | Operating Expenses   | ...                                             | ...                                      |
  | Purchase Price       | ...                                             | ...                                      |
  | Down Payment %       | ...                                             | ...                                      |
  | Interest Rate        | ...                                             | ...                                      |
  | Loan Term            | ...                                             | ...                                      |
  | Closing Costs %      | ...                                             | ...                                      |
  | Rehab Costs          | ...                                             | ...                                      |
  | Cash Reserves        | ...                                             | ...                                      |

OUTPUTS_TABLE (one row per output):
  | Output                         | What it means                                   | Primary use                              |
  | ------------------------------ | ----------------------------------------------- | ---------------------------------------- |
  | Cash-on-Cash Return (CoC)      | [2 sentences]                                   | [1 sentence]                             |
  | Annual Pre-Tax Cash Flow       | ...                                             | ...                                      |
  | DSCR                           | ...                                             | Lender qualification, loan sizing        |
  | Leveraged Yield Spread         | CoC minus interest rate, in percentage points   | Shows if leverage helps or hurts         |
----
FORMULA_H2:         Cash-on-Cash Return Formula & Calculation Method
FORMULA_SUBTITLE:   The exact math this calculator uses — plus a real Atlanta, GA example for 2026

STEP_BY_STEP (numbered steps from raw inputs to final result):
  1. Calculate annual gross rental income
  2. Subtract vacancy loss → Effective Gross Income
  3. Subtract operating expenses → NOI
  4. Calculate loan amount (Purchase Price × (1 − Down Payment %))
  5. Calculate monthly mortgage payment using standard amortization formula
  6. Multiply by 12 → Annual Debt Service
  7. NOI − Annual Debt Service → Annual Pre-Tax Cash Flow
  8. Sum Down Payment + Closing Costs + Rehab + Reserves → Total Cash Invested
  9. Cash Flow ÷ Total Cash Invested × 100 → Cash-on-Cash Return

FORMULA_BOX:
  Primary formula:    Cash-on-Cash Return = (Annual Pre-Tax Cash Flow ÷ Total Cash Invested) × 100
  Where:              Annual Cash Flow = NOI − Annual Debt Service
                      Total Cash Invested = Down Payment + Closing Costs + Rehab + Reserves
  Reverse formulas:   Required Cash Flow = Target CoC% × Total Cash Invested ÷ 100
                      Max Purchase Price = iterative solve accounting for scaling closing costs

FORMULA_VISUAL (ASCII-style text schema):
  Gross Rental Income
  − Vacancy Loss
  + Other Income
  = Effective Gross Income (EGI)
  − Operating Expenses
  = NOI
  − Annual Debt Service
  = Annual Pre-Tax Cash Flow
  ÷ Total Cash Invested
  = Cash-on-Cash Return (%)

FORMULA_EXAMPLE:
  Location:         [Choose a real US city where CoC makes sense in 2026 — Atlanta GA, Columbus OH, Memphis TN, Kansas City MO]
  Property type:    [e.g. 4-unit residential, stabilized, 1990s build]
  Market context:   [1 sentence about why this submarket supports the example numbers in 2026]

  STRICT NUMERIC RANGES — use values within these bands so the result lands in the Solid tier (6–9% CoC):
    Gross Rental Income:     $90,000 – $140,000 annually (4-unit Sunbelt/Midwest quadplex)
    Vacancy Rate:            6–8%
    Other Income:            $3,000 – $6,000 annually
    Operating Expenses:      45–50% of EGI
    Purchase Price:          $300,000 – $500,000 (realistic for Atlanta, Columbus, Memphis, Kansas City 2026)
    Down Payment:            25% (fixed)
    Interest Rate:           7.5% (fixed)
    Loan Term:               30 years (fixed)
    Closing Costs:           3% of purchase price (fixed)
    Rehab Costs:             $0 (stabilized asset)
    Cash Reserves:           6 months operating expenses

  EXPECTED RESULT: CoC should naturally fall in the 6%–9% range (Solid tier) when you use realistic inputs within the ranges specified above. Use genuine market values — do NOT artificially manipulate numbers just to hit a target CoC. If realistic inputs from within the specified ranges produce a result outside 5–10%, keep the realistic inputs and note the result honestly. The goal is a defensible, replicable example, not a pre-engineered one.

  Calculation (step by step with real math):
    Step 1: Vacancy Loss = [math]
    Step 2: EGI = [math]
    Step 3: NOI = [math]
    Step 4: Loan Amount = [math]
    Step 5: Monthly Payment (amortization) = [math]
    Step 6: Annual Debt Service = [math]
    Step 7: Annual Cash Flow = [math]
    Step 8: Total Cash Invested = [math]
    Step 9: Cash-on-Cash Return = [final %]

  Result:
    CoC = [realistic 6–8% for this example]

  Interpretation:
    [2 sentences tying the result to the tier system (Solid / Strong) and market context]
----
RIS_H2:             What Your Cash-on-Cash Return Result Means

RIS_INTRO:          [1–2 sentences — "Your CoC tells you the annual return on the cash you actually put into the deal. Here's how to interpret each range in the 2026 US rate environment."]

RIS_STRONG (Tier 2: 9–12%):
  Range:            9%–11.99% — Strong
  Markets:          [realistic 2026 — Indianapolis, Memphis, Birmingham, Cleveland, select Midwest and Southeast submarkets]
  Meaning:          [3–4 sentences — rare but achievable in lower-cost markets with disciplined underwriting. Usually requires 25–30% down, local knowledge, or value-add. Note that historical benchmarks from pre-2022 were higher, but rate compression makes 9%+ noticeably harder in 2026.]

RIS_SOLID (Tier 3: 6–9%):
  Range:            6%–8.99% — Solid
  Markets:          [Sun Belt suburbs, Columbus, Cincinnati, Pittsburgh, Atlanta outer metros, second-tier cities]
  Meaning:          [3–4 sentences — this is the realistic target for many 2026 stabilized deals. Indicates positive leverage in most cases. DSCR typically 1.25+.]

RIS_WEAK (Tier 4: 3–6%):
  Range:            3%–5.99% — Weak
  Markets:          [primary markets, appreciation-play deals, commercial assets with compressed yields — Denver, Nashville, Charlotte]
  Meaning:          [3–4 sentences — common in primary markets where prices compress yields. Investors here are betting on appreciation. If CoC is below interest rate, flag as potential negative leverage warning sign.]

RIS_CRITICAL (Tier 5: 0–3% and Tier 6: Negative Cash Flow):
  Range:            Below 3% — Critical / Negative Cash Flow
  Markets:          [over-leveraged acquisitions, declining markets, poorly underwritten deals]
  Meaning:          [3–4 sentences — should rarely be a voluntary position. Either the deal has negative cash flow (Tier 6) or cash flow is so thin any shock pushes it negative (Tier 5). Only acceptable as intentional value-add or turnaround with clear fix plan. IMPORTANT: "Negative Cash Flow" tier ≠ "Negative Leverage" — the latter is a separate concept shown via Leveraged Yield Spread.]

RIS_CONTEXT:
  Title:            Why the same Cash-on-Cash Return can be good in one deal and bad in another
  Body:             [4–6 sentences explaining how CoC depends on leverage level, market dynamics, and investor strategy. Two US examples: (1) investor in Memphis achieving 9% CoC at 25% down vs (2) investor in San Diego accepting 3% CoC because of appreciation thesis. Include when CoC alone is misleading — short hold periods, heavy value-add, or deals with major principal paydown benefits.]
----
BENCHMARKS_H2:      Cash-on-Cash Return Benchmarks by Market & Property Type (2026)
BENCHMARKS_INTRO:   [2 sentences — "Typical 2026 CoC ranges assuming standard financing (25% down, 7.5% rate, 30-year loan). Use as starting points — always verify with local rates, insurance quotes, and current market comps. These are underwriting estimates calibrated to the 2026 rate environment, not market-reported figures."]

BENCHMARK_BY_TYPE_H3: By Property Type
BENCHMARK_BY_TYPE_TABLE (6 rows from RIS):
  | Property Type              | Weak (Coastal) | Moderate (Sunbelt) | Strong (Midwest / SE) |
  | -------------------------- | -------------- | ------------------ | --------------------- |
  | Single-Family Rental (SFR) | 1%–3%          | 3%–6%              | 6%–9%                 |
  | Small Multifamily (2–4)    | 2%–4%          | 4%–7%              | 7%–10%                |
  | Multifamily 5+ Units       | 1%–3%          | 3%–5%              | 5%–8%                 |
  | Retail / Strip Center      | 2%–4%          | 4%–7%              | 7%–10%                |
  | Industrial / Warehouse     | 1%–3%          | 3%–6%              | 5%–8%                 |
  | Office                     | 0%–2%          | 2%–4%              | 4%–7%                 |

BENCHMARK_BY_STATE_H3: By State — Typical Stabilized Residential CoC
BENCHMARK_BY_STATE_CARDS (8 cards, one per state, ranges from RIS):
  California (CA):
    Range:     CoC 1%–3%
    Note:      [1–2 sentences — high prices compress CoC despite low effective property tax. Investors here bet on appreciation, not current yield.]

  Texas (TX):
    Range:     CoC 3%–6%
    Note:      [1–2 sentences — property tax burden and insurance cost insurance offset benefits of rent growth. Dallas-Fort Worth and Austin compressed by new supply.]

  Florida (FL):
    Range:     CoC 2%–5%
    Note:      [1–2 sentences — insurance pressure crushes CoC even in high-rent markets. Hurricane risk reshaping underwriting.]

  New York (NY):
    Range:     CoC 1%–3%
    Note:      [1–2 sentences — high prices + rent regulation + property taxes compress CoC. Upstate markets may reach 4–5%.]

  Arizona (AZ):
    Range:     CoC 4%–7%
    Note:      [1–2 sentences — Phoenix still delivers decent CoC despite supply pressure. Lower property tax burden helps.]

  Georgia (GA):
    Range:     CoC 5%–8%
    Note:      [1–2 sentences — Atlanta metro offers some of the best CoC in 2026 for primary-to-secondary markets. Favorable tax and insurance environment.]

  Colorado (CO):
    Range:     CoC 2%–5%
    Note:      [1–2 sentences — Denver prices compress CoC. Secondary markets like Colorado Springs and Fort Collins may reach 5%.]

  Washington (WA):
    Range:     CoC 2%–5%
    Note:      [1–2 sentences — Seattle prices and operating costs compress CoC. Spokane and Tacoma offer stronger yields.]

BENCHMARK_BY_STATE_TABLE (same 8 states, tabular format with fuller notes — 2–3 sentences per state):
  | State      | Typical Range | Key Notes (2–3 sentences)                                                      |
  | ---------- | ------------- | ------------------------------------------------------------------------------ |
  | California | 1%–3%         | [full 2–3 sentence notes — why CoC is compressed here]                         |
  | Texas      | 3%–6%         | [full notes about property tax + new supply impact]                            |
  | Florida    | 2%–5%         | [full notes about insurance crisis impact]                                     |
  | New York   | 1%–3%         | [full notes]                                                                   |
  | Arizona    | 4%–7%         | [full notes]                                                                   |
  | Georgia    | 5%–8%         | [full notes about Atlanta opportunity]                                         |
  | Colorado   | 2%–5%         | [full notes]                                                                   |
  | Washington | 2%–5%         | [full notes]                                                                   |

SOURCES_NOTE:       These CoC ranges are synthesized from multiple industry reports and underwriting practices, including CBRE Investor Intentions Survey 2026 (which reports cap rates and investor sentiment), Fannie Mae multifamily guidelines (which set DSCR and LTV requirements), and RealPage rent/vacancy analytics. CoC itself is not directly reported by these sources — the ranges below are derived by combining their inputs with standard underwriting assumptions (25% down, 7.5% interest, 30-year amortization) for stabilized residential assets. Always verify with current local lender quotes and market comps.
----
STRATEGY_H2:        When Cash-on-Cash Return Matters Most
STRATEGY_INTRO:     How CoC fits into each major US real estate investment strategy

STRATEGY_BUY_HOLD:
  Badge:            Buy & Hold
  Paragraph 1:      [3–4 sentences — CoC is the primary return metric for leveraged buy-and-hold. Typical target 6–9% in 2026. Compare against alternatives: S&P 500 historical ~8%, bond ladder ~5%. Show that sub-5% CoC in real estate may not justify the effort vs passive investing.]
  Paragraph 2:      [2–3 sentences — practical tip: target CoC at least 2pp above current interest rate to ensure positive leverage + cushion]

STRATEGY_BRRRR:
  Badge:            BRRRR
  Paragraph 1:      [3–4 sentences — CoC is critical at refinance stage of BRRRR. The goal is "infinite CoC" — pulling all capital out so Total Cash Invested approaches zero. Worked example: $45K capital invested, refinance pulls out $40K → only $5K remaining → 8% cash flow / $5K = 160% CoC.]
  Paragraph 2:      [2–3 sentences — warning: pre-refinance CoC during renovation period is usually negative. That's expected. The deal is about post-refinance CoC.]

STRATEGY_COMMERCIAL:
  Badge:            Commercial
  Paragraph 1:      [3–4 sentences — commercial lenders size debt based on DSCR, not CoC. But investors use CoC to evaluate whether the debt sizing produces acceptable returns on equity. NNN leases often produce 5–8% CoC with lower management burden.]
  Paragraph 2:      [2–3 sentences — commercial cap rate compression flows through to CoC differently than residential. Pay attention to the spread between cap rate and borrowing rate.]

STRATEGY_VALUE_ADD:
  Badge:            Value-Add
  Paragraph 1:      [3–4 sentences — value-add deals often show poor or negative Year 1 CoC because of renovation disruption. The underwriting goal is showing strong stabilized Year 3+ CoC. Use calculator for both states.]
  Paragraph 2:      [2–3 sentences — always calculate pre-stabilization cash burn and ensure reserves are sufficient. A "good" stabilized CoC doesn't matter if the deal runs out of cash during value-add period.]

STRATEGY_TARGET_SETTING:
  Badge:            Target Setting
  Title:            Using CoC to Set Investment Targets
  Formula:          Target CoC = Risk-Free Rate + Real Estate Risk Premium + Illiquidity Premium
  Body:             [3–4 sentences — in 2026 with Treasury yields ~4%, a reasonable target CoC is 7–9% (4% + 3% risk premium + 0–2% illiquidity premium). Investors accepting below 6% are usually betting on appreciation or tax benefits beyond CoC.]
----
APPLICATIONS_H2:    Applications of Cash-on-Cash Return Analysis
APPLICATIONS_INTRO: Six concrete ways investors and lenders use CoC

APPLICATION_1:
  Title:            Deal Screening With Leverage
  Body:             [2–3 sentences — quickly eliminate deals that don't produce target CoC]

APPLICATION_2:
  Title:            Comparing Financing Structures
  Body:             [2–3 sentences — same property, different down payment % → compare resulting CoC]

APPLICATION_3:
  Title:            Refinance Modeling
  Body:             [2–3 sentences — how cash-out refinance changes cash invested and CoC]

APPLICATION_4:
  Title:            Portfolio Allocation
  Body:             [2–3 sentences — deciding which deals get capital first based on CoC]

APPLICATION_5:
  Title:            BRRRR Exit Analysis
  Body:             [2–3 sentences — computing post-refinance CoC to validate BRRRR thesis]

APPLICATION_6:
  Title:            Investor Pitch & Syndication
  Body:             [2–3 sentences — CoC is a key metric in syndication PPMs alongside IRR and equity multiple]
----
INDUSTRY_STANDARDS_H2:   Industry Standards & Professional Guidelines
INDUSTRY_STANDARDS_INTRO: [1 sentence — how agency lending, DSCR loans, and CCIM methodology intersect with CoC]

STANDARD_1:
  Title:            Fannie Mae & Freddie Mac DSCR Requirements
  Points (4 bullets — real underwriting specs):
    - DSCR 1.25x minimum for conventional multifamily loans
    - DSCR affects loan sizing, which directly affects cash required and therefore CoC
    - Freddie Mac 80% LTV max affects cash required, which affects CoC
    - Agency stress tests add conservatism to NOI used in DSCR calculation

STANDARD_2:
  Title:            DSCR Loan Guidelines (Non-QM / Portfolio)
  Intro:            [2 sentences about DSCR loans — grew to 15–20% of investor financing in 2026]
  Points (3 bullets):
    - Typical 1.00–1.20x DSCR acceptance, with rates 0.5–1.5% higher than conventional
    - 80% LTV max for most DSCR lenders
    - Impact on CoC: lower down payment raises CoC but higher rate lowers it — the net effect depends on the specific deal

STANDARD_3:
  Title:            CCIM & Investor Benchmarks
  Points (5 bullets):
    - CCIM methodology uses CoC alongside IRR and equity multiple for full return analysis
    - Institutional investors typically target 7%+ CoC for core-plus strategies, 10%+ for value-add
    - REIT shareholder metrics use FFO, which is related but not identical to CoC
    - Private investor rule of thumb: CoC ≥ 2pp above interest rate for positive leverage cushion
    - Syndication sponsors typically target 8–10% preferred return, which flows from CoC analysis
----
LIMITATIONS_H2:     Limitations of Cash-on-Cash Return
LIMITATIONS_INTRO:  [1 sentence — CoC is important but captures only one of four sources of real estate return]

LIMITATION_1:
  Title:            Ignores Principal Paydown
  Body:             [2–3 sentences — CoC only measures cash flow return, not equity building through amortization. A deal with 5% CoC might actually build 8%+ total equity return when principal paydown is included.]

LIMITATION_2:
  Title:            Ignores Appreciation and Tax Benefits
  Body:             [2–3 sentences — real estate returns come from 4 sources: CoC, appreciation, principal paydown, tax shield. CoC is only 1 of 4.]

LIMITATION_3:
  Title:            Year-One Snapshot Only
  Body:             [2–3 sentences — CoC typically calculated for Year 1. Rents grow, debt service stays flat (fixed rate) → Year 5 CoC usually much higher. Use IRR for multi-year view.]

LIMITATION_4:
  Title:            Sensitive to Financing Assumptions
  Body:             [2–3 sentences — small rate changes dramatically shift CoC. A 0.5% rate change can move CoC by 1–2pp. Always stress-test.]

WHEN_NOT_TO_USE_H3: When Not to Use CoC as the Primary Metric
WHEN_NOT_TO_USE_LIST (4 bullets):
  - All-cash purchases:                  no debt → CoC equals Cap Rate, just use Cap Rate directly
  - Short hold (under 3 years):          principal paydown and appreciation matter too much — use IRR instead
  - Heavy value-add deals:               Year 1 CoC misleading — use stabilized or multi-year model
  - Land / development:                  no operating income → CoC not applicable
----
COMMON_MISTAKES_H2: Common Mistakes When Calculating Cash-on-Cash Return
COMMON_MISTAKES_INTRO: [1 sentence — most errors come from incomplete cash tracking or confusing CoC with related metrics]

MISTAKE_1:
  Title:            Forgetting closing costs and reserves in Cash Invested
  Body:             [3–4 sentences — using only down payment inflates CoC. Real cash out of pocket includes closing (2–5%), rehab, and 6–12 month reserves. Example: $100K down vs $100K down + $12K closing + $8K reserves = different CoC.]

MISTAKE_2:
  Title:            Using pro forma NOI with lender-actual financing
  Body:             [3–4 sentences — pro forma rents + real debt service creates fantasy CoC. Either use both conservative or both optimistic.]

MISTAKE_3:
  Title:            Comparing CoC across different leverage structures
  Body:             [3–4 sentences — CoC at 20% down vs 40% down is not the same metric effectively. Lower down payment amplifies both returns and risk. Adjust for risk when comparing.]

MISTAKE_4:
  Title:            Confusing Negative Cash Flow with Negative Leverage
  Body:             [3–4 sentences — these are different. Negative Cash Flow = CoC below zero (the property loses money after debt service). Negative Leverage = financing reduces returns vs all-cash, can happen even at positive CoC. Use Leveraged Yield Spread metric (CoC − Interest Rate) to detect negative leverage.]

MISTAKE_5:
  Title:            Ignoring interest rate sensitivity
  Body:             [3–4 sentences — in 2026 rate environment, 0.5% rate change moves CoC significantly. Always stress-test with ±1% rate scenarios. Lock-in timing can make or break a deal.]
----
FAQ_H2:             Frequently Asked Questions

FAQ_Q1:             What is a good Cash-on-Cash return for rental property in 2026?
FAQ_A1:             [3–4 sentences — realistic 2026 benchmarks: 9%+ strong (Midwest/SE), 6–9% solid (Sun Belt), 3–6% acceptable in primary markets. Historical 10%+ benchmarks are outdated given 2026 rate environment.]

FAQ_Q2:             What is the difference between Cash-on-Cash Return and Cap Rate?
FAQ_A2:             [3–4 sentences — Cap Rate = unlevered, based on property value. CoC = levered, based on cash invested. Same property can have 6% Cap Rate and 3% CoC (with high leverage + high rates) or 6% Cap Rate and 10% CoC (with favorable leverage).]

FAQ_Q3:             Does Cash-on-Cash Return include mortgage payments?
FAQ_A3:             [2–3 sentences — yes, debt service is subtracted from NOI to get Cash Flow. This is what makes CoC a levered metric. Cap Rate does NOT include mortgage — that's the key distinction.]

FAQ_Q4:             How do I calculate Cash-on-Cash Return step by step?
FAQ_A4:             [Must include exactly these elements:
                     1. The formula on its own line: "CoC = Annual Cash Flow ÷ Total Cash Invested × 100"
                     2. One brief numeric example with real dollar amounts (e.g. "$8,000 cash flow / $95,000 invested = 8.4% CoC")
                     3. Maximum 4 sentences total — do not produce a mini-essay]

FAQ_Q5:             What is negative leverage and how does it affect my Cash-on-Cash Return?
FAQ_A5:             [3–4 sentences — negative leverage occurs when financing reduces returns compared to all-cash. Practical warning sign: CoC below the borrowing rate. But it's not an absolute definition — some investors accept potential negative leverage for appreciation plays or tax benefits.]

FAQ_Q6:             Is 5% Cash-on-Cash Return good enough in 2026?
FAQ_A6:             [3–4 sentences — depends on market and strategy. In San Francisco or Seattle, 5% may be realistic ceiling. In Atlanta or Memphis, 5% indicates leaving money on the table. Consider the Leveraged Yield Spread.]

FAQ_Q7:             How does down payment size affect Cash-on-Cash Return?
FAQ_A7:             [3–4 sentences — inverse relationship usually. Lower down payment = higher CoC when property cap rate exceeds borrowing rate. Higher down payment = lower CoC but higher cash flow and DSCR. Worked example.]

FAQ_Q8:             What's the difference between Cash-on-Cash Return and IRR?
FAQ_A8:             [3–4 sentences — CoC = Year 1 snapshot, ignores time value of money. IRR = multi-year, includes appreciation and terminal sale. Use both for full picture.]
----
RELATED_CALCULATORS:
  (3–4 related calculators that exist in the project)

  1. cap-rate-calculator
  2. noi-calculator
  3. dscr-calculator
  4. rental-property-calculator
----
SCHEMA_TYPE:        Calculator
SCHEMA_NAME:        Cash-on-Cash Return Calculator
SCHEMA_DESCRIPTION: [160-char technical description for Google — different wording from META DESCRIPTION]
SCHEMA_URL:         https://realcalc.com/cash-on-cash-calculator
SCHEMA_FEATURE_LIST: real-time calc, 3 modes, DSCR, leveraged yield spread, sensitivity analysis, scenario analysis, benchmarks, PDF export

FAQ_SCHEMA:
  All 8 Q&A from above formatted for JSON-LD FAQPage schema.
----
```

---

## OUTPUT CHECKLIST

Before finalizing, verify:

- [ ] TITLE is 50–60 chars, includes "Cash-on-Cash Return Calculator" + USP marker + "| RealCalc"
- [ ] META DESCRIPTION is 150–160 chars
- [ ] H1 contains primary keyword and matches the canonical pattern
- [ ] Overview has exactly 4 paragraphs, emphasizes LEVERED nature
- [ ] **OVERVIEW_P1 uses at least 2 of the secondary keywords** (cash-on-cash return real estate, CoC calculator rental property, leveraged return calculator)
- [ ] How to Use has 5 numbered steps + 4 pro tips + **5 result guide points** (all tiers, not 4)
- [ ] **Result Guide matches RIS Section 6 exactly — 5 tiers: Strong / Solid / Weak / Critical / Negative Cash Flow**
- [ ] Result Guide mentions "Negative Cash Flow" NOT "Negative Leverage" for the bottom tier
- [ ] Formula section has step-by-step + formula box + real US city example
- [ ] **FORMULA_EXAMPLE uses values within strict numeric ranges that produce CoC in 6–9% Solid tier**
- [ ] RIS section has 4 tier bands (Strong / Solid / Weak / Critical+Negative) + context
- [ ] Benchmarks by Type has 6 property types from RIS
- [ ] Benchmarks by State has all 8 states (cards + table) with ranges from RIS
- [ ] All benchmarks labeled as "underwriting estimates" not market-reported data
- [ ] Strategy has Buy & Hold + BRRRR + Commercial + Value-Add + Target Setting
- [ ] Applications has 6 use cases
- [ ] Industry Standards covers Fannie/Freddie + DSCR loans + CCIM benchmarks
- [ ] Limitations has 4 items + "When Not to Use" list
- [ ] Common Mistakes has 5 items, includes "Confusing Negative Cash Flow with Negative Leverage"
- [ ] FAQ has exactly 8 Q&A, each with 3–4 sentence answers
- [ ] **FAQ_A4 includes formula on its own line + numeric example + max 4 sentences**
- [ ] Related Calculators uses real project slugs (cap-rate, noi, dscr, rental-property)
- [ ] Schema block is complete and ready for JSON-LD
- [ ] No Cap Rate lexicon slipped into CoC content
- [ ] No pre-2022 historical benchmarks (10%+ standard) — 2026 realistic only
- [ ] "Negative Cash Flow" and "Negative Leverage" never conflated
- [ ] Year 1 default referenced where time dimension matters

**Output only the SEO content package in Markdown. Do not output code. Do not output HTML. Do not output Vue. This is a content document that will be consumed by the Master Prompt later alongside the RIS spec.**
