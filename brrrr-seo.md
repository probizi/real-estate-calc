# SEO Package Prompt — BRRRR Calculator (v5 final) (v2 final)

You are a senior SEO copywriter specializing in US real estate investment content. Your job is to produce a **complete SEO content package** for the BRRRR Calculator page.

The output of this prompt is pure content — no code, no HTML, no Vue. It will later be combined with the RIS specification and the Master Prompt to generate the actual page.

---

## YOUR TASK

Write an SEO package for:

```
Calculator Name:    BRRRR Calculator
Slug:               brrrr-calculator
Primary keyword:    brrrr calculator
Secondary keywords: brrrr strategy calculator, buy rehab rent refinance repeat calculator, 
                    brrrr method calculator, real estate brrrr calculator
Primary metrics:    Capital Left in Deal $ AND Post-Refi Cash-on-Cash % (co-primary)
                    Special: Infinite Return flag when Capital Left ≤ $0 AND Cash Flow > 0
Target audience:    US real estate investors executing BRRRR strategy — from first-time 
                    BRRRR'ers to experienced investors scaling portfolios
Traffic priority:   Priority 1 (estimated 40K-60K searches/month)
```

Use the attached RIS specification (brrrr-ris.md) as the source of truth for formulas, thresholds, benchmarks, and test cases. Do not invent numbers — pull them from the RIS.

---

## CRITICAL DISTINCTIONS TO PRESERVE

This calculator is fundamentally different from other RealCalc calculators. Throughout the SEO package:

**1. Two-phase strategy — NOT single-phase**

BRRRR combines flip-like Phase 1 with rental-like Phase 3:
- Phase 1: Buy + Rehab + Hold with Hard Money (3-12 months)
- Refinance Event: one-time transition
- Phase 3: Year 1 rental performance post-refi

Every other calculator focuses on ONE phase. BRRRR spans both. Content must reflect this.

**2. DUAL primary metrics: Capital Left AND Post-Refi CoC**

- Capital Left $ = how much cash still trapped in deal after refinance
- Post-Refi CoC % = return on Capital Left
- Both are co-primary — neither dominates
- Special: "Infinite Return" when Capital Left ≤ $0 AND Cash Flow > 0

**3. Scope LIMITED to Year 1 post-refi (v1)**

- No multi-year projection beyond Year 1
- Users wanting multi-year should use Rental Property Calculator after BRRRR
- Explicit redirect in Limitations and Related Calculators
- This is INTENTIONAL — BRRRR focuses on capital recycle question, not long-term wealth

**4. 75% Rule is the BRRRR heuristic — DIFFERENT from 70% Rule (flip)**

Every BRRRR investor knows the 75% Rule:
- BRRRR 75% Rule: All-In Cost ≤ ARV × 0.75 = full capital recovery possible at 75% LTV refi
- Fix and Flip 70% Rule: Max Offer = ARV × 0.70 − Rehab (different purpose)
- SEO content must educate about 75% Rule specifically — it's a primary SEO hook

**5. Capital Left can be NEGATIVE (cash-out BRRRR)**

- Deep-value deals can produce cash extraction beyond initial investment
- Display logic is critical:
  - Positive → "$X still in deal"
  - Zero → "Full Capital Recovery"
  - Negative + positive cash flow → "Infinite Return ⚡ + $X extracted"
  - Negative + negative cash flow → "Cash-Out but Losing" (warning, NOT Infinite)

**6. Infinite Return has two conditions**

- Capital Left ≤ 0 alone is NOT enough
- Must ALSO have positive Year 1 cash flow
- Cash-out refi into losing rental is NOT a win — it's a warning sign
- This distinction matters in FAQ and Common Mistakes

**7. Before-tax analysis only in v1**

- BRRRR tax treatment is complex (rental income + depreciation + refi not taxable)
- V1 shows before-tax cash flow
- Label prominently: "Before-tax analysis. Actual after-tax returns vary significantly."

**8. 2026 market context**

- Hard money rates 11-13% in 2026 (Phase 1 expensive)
- Conventional refi rates 7.5-8% in 2026 (Phase 2 not cheap either)
- BRRRR has become HARDER in 2026: compressed ARVs + elevated rates = smaller refi proceeds
- Good 2026 BRRRR: Capital Left under $15K, Post-Refi CoC above 15%
- Infinite Return deals are RARE — happen only with off-market deep-value + significant forced appreciation

**9. Do NOT claim guarantees**

- Never say "you will recover all capital"
- Always "projected refi outcome based on your inputs"
- ARV at refi can come in LOWER than estimated (lender appraisal risk)
- Always note: "Actual refi proceeds depend on appraisal, lender LTV, and market conditions"

**10. BRRRR pairs with other calculators**

- Link to Fix and Flip Calculator for Phase 1 detailed analysis
- Link to Rental Property Calculator for multi-year post-refi projection
- Link to DSCR Calculator for lender qualification check
- Position BRRRR as the RIGHT tool for full strategy analysis; other calculators for deeper single-phase work

---

## RULES

1. US market only. All examples, cities, benchmarks, and rate assumptions are US-specific and 2026-realistic.

2. Content depth matches canonical template. Cap Rate Calculator is the reference — match its depth per section.

3. No generic filler. Every paragraph contains specific numbers, real cities, concrete examples, or year-specific context.

4. Primary keyword placement: must appear in TITLE, H1, META DESCRIPTION, OVERVIEW_P1, and at least 2 H2 headings. Natural density — no keyword stuffing.

5. Secondary keywords: must use at least 2 of "brrrr strategy calculator", "buy rehab rent refinance repeat calculator", "brrrr method calculator", "real estate brrrr calculator" naturally in OVERVIEW_P1.

6. Sentence case for all headings.

7. Placeholder rule (from Master Prompt): Never use concrete numbers in input placeholders. Use "Enter X" style text instructions only.

8. Output format: structured Markdown with section dividers using four hyphens. Ready to copy.

---

## REQUIRED OUTPUT STRUCTURE

Follow this structure exactly. Do not skip sections. Do not add sections.

----
TITLE:              [MUST follow strict pattern:
                     Required elements:
                     - "BRRRR Calculator" at the start
                     - ONE of these USP markers: "2026", "Strategy", "Infinite Return", "Capital Recovery"
                     - Brand suffix "| RealCalc"
                     - Total length 50-60 characters — STRICT MAXIMUM 60 CHARS
                     - RECOMMENDED TARGET RANGE: 45-55 characters for safety margin
                     
                     Approved examples (all within safety range):
                     "BRRRR Calculator — 2026 Strategy Tool | RealCalc"  (49 chars)
                     "BRRRR Calculator — Capital Recovery | RealCalc"  (47 chars)
                     "BRRRR Calculator — Refi & ROI | RealCalc"  (42 chars)
                     
                     TITLE GENERATION RULE (INVERTED LOGIC — fallback is the default):
                     
                     DEFAULT BEHAVIOR: Use the hardcoded fallback TITLE below.
                     
                     HARDCODED FALLBACK TITLE (always safe, use this by default):
                     TITLE: BRRRR Calculator — Capital Recovery | RealCalc
                     (verified 47 characters — within all SEO snippet limits)
                     
                     OPT-IN RULE FOR CUSTOM TITLE:
                     You may generate a custom TITLE ONLY if ALL of the following are true:
                     1. You can explicitly count the characters of your custom TITLE
                     2. The count is ≤ 58 characters (strict — not 60, to leave buffer)
                     3. You have a specific SEO reason to deviate from the fallback
                     
                     MANDATORY EXPLICIT NUMERIC COUNT REQUIREMENT:
                     Verification is ONLY valid if you write out the explicit numeric count 
                     alongside your proposed TITLE, in this exact format:
                     
                     PROPOSED_CUSTOM_TITLE: <your title here>
                     EXPLICIT_COUNT: <number> characters
                     EXAMPLE: "PROPOSED_CUSTOM_TITLE: BRRRR Calculator — 2026 Strategy Tool | RealCalc" / "EXPLICIT_COUNT: 51 characters"
                     
                     If no explicit numeric count is shown, the TITLE is treated as 
                     NOT VERIFIED — use the hardcoded fallback immediately.
                     
                     An internal sense of "this looks about 55 characters" does NOT count 
                     as verification. "Looks fine" does NOT count. Only an explicit, 
                     written-out count followed by verification that count ≤ 58 counts.
                     
                     CRITICAL — if TITLE length is NOT explicitly verified as ≤ 58 characters 
                     via the explicit numeric count format above, 
                     DO NOT attempt to estimate. DO NOT output your custom TITLE. 
                     Use the hardcoded fallback immediately — no exceptions.
                     
                     In practice: the fallback TITLE is the expected output unless there is 
                     a compelling SEO-specific reason to customize AND the count is verified 
                     via the explicit numeric count protocol. This prevents silent SEO damage 
                     from TITLES that overflow the 60-char Google snippet cutoff.]

META DESCRIPTION:   [150-160 chars, primary keyword + USP + CTA. Must mention 
                    "Capital Left", "Refinance", or "75% Rule" for specificity. 
                    Example tone: "Analyze your BRRRR deal with capital recovery, 
                    refinance proceeds, and 75% Rule check. Free 2026 calculator 
                    for buy-rehab-rent-refinance investors."]

H1:                 [Contains primary keyword, follows pattern: 
                    "BRRRR Calculator — [Short USP] for US Real Estate Investors"]

----
OVERVIEW_P1:        [2-3 sentences — what this calculator is, what it measures, 
                    who it's for. Primary keyword in first sentence. Emphasize 
                    FULL STRATEGY ANALYSIS (not just rental, not just flip).
                    
                    REQUIRED: Must use at least 2 of these specific secondary 
                    keywords — prefer these exact phrases for maximum SEO value:
                    - "brrrr strategy calculator"
                    - "buy rehab rent refinance repeat calculator"
                    - "brrrr method calculator"
                    - "real estate brrrr calculator"
                    
                    NATURAL READABILITY RULE: Use at least 2 of the exact phrases above, 
                    but ensure natural sentence flow — do not force awkward phrasing just 
                    to include a keyword.
                    
                    APPROVED NATURAL TEMPLATES for integrating the longer phrase:
                    
                    Template 1 (recommended — reads naturally, preserves SEO):
                    "...the BRRRR method (buy, rehab, rent, refinance, repeat) calculator 
                    analyzes..."
                    
                    Template 2 (alternative):
                    "...this buy-rehab-rent-refinance-repeat calculator models..."
                    (hyphens make the phrase read as a single compound modifier)
                    
                    Template 3 (simplest — pairs two SHORT phrases):
                    Use "brrrr strategy calculator" and "brrrr method calculator" together.
                    Both are short and integrate cleanly. This avoids the long phrase entirely 
                    while still hitting 2-keyword requirement.
                    
                    WHAT TO AVOID:
                    - Writing "buy rehab rent refinance repeat calculator" as-is in a sentence 
                      without natural phrasing — reads clunky and hurts trust
                    - Substituting with unapproved variations like "rental recycle calculator", 
                      "refi strategy tool", or "brrrr investment estimator" — these lose SEO value
                    
                    The approved phrases have highest search volume; variations sacrifice 
                    SEO ranking. Trust-reading matters too — readers judge credibility by 
                    sentence quality, so prioritize naturalness within the approved list.]

OVERVIEW_P2:        [2-3 sentences — how it works. Mention: user inputs Purchase 
                    Price, ARV, Rehab Budget, Hard Money financing, Seasoning Period, 
                    Refinance Terms, and Year 1 Rental projections. Calculator outputs 
                    Capital Left in Deal $, Post-Refi Cash-on-Cash %, 75% Rule Check, 
                    Capital Recovery %, Post-Refi DSCR. Three modes: Analyze, Find 
                    Required ARV, Find Max Purchase Price.]

OVERVIEW_P3:        [2-3 sentences — who uses it: first-time BRRRR'ers evaluating 
                    their first project, experienced investors scaling portfolios by 
                    recycling capital across multiple deals, wholesalers verifying 
                    deals meet 75% Rule before assignment, real estate coaches teaching 
                    the BRRRR framework.]

OVERVIEW_P4:        [2-3 sentences — what it does NOT include (v1: before-tax analysis 
                    only, Year 1 rental only — no multi-year projection, single 
                    refinance event). Pair with Rental Property Calculator for 
                    multi-year post-BRRRR analysis, Fix and Flip Calculator for 
                    pre-refi scenario comparison, DSCR Calculator for refi lender 
                    qualification check.]

----
WHAT_IS_H2:         What Is BRRRR? (and what the 75% Rule means)

WHAT_IS_P1:         [4-5 sentences — BRRRR stands for Buy, Rehab, Rent, Refinance, 
                    Repeat. The strategy allows investors to recycle the SAME capital 
                    across multiple properties by using a short-term hard money loan 
                    to acquire and rehab, then refinancing into conventional long-term 
                    financing to extract capital invested. The BRRRR Calculator answers 
                    the core question: "how much of my capital can I recover, and what 
                    does the remaining investment return?" Unlike flip analysis (one-time 
                    profit) or pure rental analysis (multi-year projection), BRRRR 
                    requires understanding a two-phase project with a transition event.]

WHAT_IS_P2:         [4-5 sentences — explain the 75% Rule: the industry heuristic 
                    used by all serious BRRRR investors. Formula: All-In Cost ≤ ARV × 0.75 
                    means full capital recovery is mathematically possible at a standard 
                    75% LTV refinance. The rule exists because conventional investment 
                    property refinance typically caps at 75% LTV — so if All-In Cost 
                    is at or below that threshold, the new loan can theoretically pay 
                    off the hard money AND return all invested capital. Deals "within 
                    the rule" have a viable BRRRR thesis; deals "outside the rule" will 
                    leave capital in the deal unless refi terms are more aggressive.]

WHAT_IS_P3:         [3-4 sentences — explain "Infinite Return" concept briefly. When 
                    Capital Left ≤ $0 AND the property produces positive cash flow, 
                    the investor has recovered ALL invested capital AND owns a 
                    cash-flowing asset — technically an infinite return on remaining 
                    capital (dividing by zero). This is the BRRRR holy grail but rare 
                    in 2026 rate environment. Important distinction: Capital Left ≤ $0 
                    with NEGATIVE cash flow is NOT Infinite Return — it's a cash-out 
                    into a losing rental, which requires caution not celebration.]

----
HOW_TO_USE_H2:      How to Use the BRRRR Calculator
HOW_TO_USE_INTRO:   [1 sentence — "Follow these steps to analyze any BRRRR project 
                    in under 5 minutes, from purchase to Year 1 post-refinance performance."]

STEP_1:
  TITLE:            Choose a calculation mode
  BODY:             [2-3 sentences — Analyze (standard), Find Required ARV (given full 
                    capital recovery target), Find Max Purchase Price (given max capital 
                    left target). When to use each — Analyze for evaluating known deals, 
                    reverse modes for establishing offer ceilings or appraisal requirements.]

STEP_2:
  TITLE:            Enter Phase 1 property and acquisition details
  BODY:             [2-3 sentences — purchase price, property type, ARV (After Repair 
                    Value) — the single most critical input. Emphasize: ARV miss at refi 
                    appraisal is the #1 BRRRR failure mode. Use conservative ARV estimates 
                    verified with 3+ comps, BPO, or pre-rehab appraisal.]

STEP_3:
  TITLE:            Enter rehab budget and timeline
  BODY:             [2-3 sentences — total rehab cost, contingency (10-15% standard), 
                    rehab duration in months. Typical 2026 BRRRR rehab: $30-60K for 
                    moderate updates on SFR. Rehab duration affects seasoning period 
                    minimum (some lenders require 6+ months from completion).]

STEP_4:
  TITLE:            Set Phase 1 financing (Hard Money)
  BODY:             [3-4 sentences — Hard Money terms: 2026 rates 10-14%, Points 2-4% 
                    upfront, typically 75-85% LTC. Toggle hmLoanCoversRehab: most BRRRR 
                    lenders finance both purchase and rehab. Important: HM is interest-only 
                    during hold — principal balance stays at original loan amount until 
                    refi payoff.]

STEP_5:
  TITLE:            Set refinance terms and Year 1 rental
  BODY:             [3-4 sentences — refinance LTV (default 75%, typical 70-80%), 
                    refinance rate (default 7.5% for 2026 conventional investment property), 
                    loan term (30-year standard), seasoning period (6-12 months). Year 1 
                    rental: monthly rent, vacancy, operating expenses. These feed Post-Refi 
                    DSCR and Cash-on-Cash.]

PRO_TIPS (4 bullet points with concrete US data):
  - "Verify ARV conservatively. A $10K ARV miss at appraisal can turn a full-recovery BRRRR into $8K stuck in the deal. Use 3+ comps, BPO, or pre-rehab appraisal — not optimistic projections."
  - "Check the 75% Rule indicator first. If your All-In Cost exceeds ARV × 75%, full capital recovery at 75% LTV is mathematically impossible — you'll need higher LTV lender or lower all-in cost."
  - "Budget for 6-12 month seasoning. Most lenders require 6 months minimum between purchase and cash-out refi. Longer seasoning adds holding costs but unlocks better refi rates."
  - "Post-Refi DSCR below 1.20x signals refi risk. Conventional lenders typically require 1.15-1.25x DSCR for cash-out refi approval on investment property. Run the numbers before committing capital."

RESULT_GUIDE (6 tiers plus Special Tier — must match RIS Section 6):

  IMPORTANT: These tiers apply to Capital Left in Deal (primary metric), 
  NOT Post-Refi CoC. Post-Refi CoC has its own interpretation logic.
  
  Special Tier (check BEFORE Tier 1):
  - "Capital Left ≤ $0 AND Cash Flow ≤ $0 — Cash-Out but Losing: extracted capital but 
    property operates at monthly loss. NOT Infinite Return — warning sign requiring reconsider."

  Tier 1: Capital Left ≤ $0 AND Cash Flow > 0 — Infinite Return ⚡
    BRRRR holy grail: all capital recovered + positive cash flow on zero-cash asset.

  Tier 2: Capital Left $1–$5,000 — Exceptional
    Near-perfect capital recovery with small closing-cost buffer.

  Tier 3: Capital Left $5,001–$15,000 — Strong
    Very good 2026 BRRRR outcome with moderate capital retained.

  Tier 4: Capital Left $15,001–$30,000 — Solid
    Market-average 2026 BRRRR outcome.

  Tier 5: Capital Left $30,001–$60,000 — Weak
    Below-market BRRRR — consider long-term hold strategy instead.

  Tier 6: Capital Left > $60,000 OR Refi Shortfall — Critical
    BRRRR thesis broken — major restructure required.

  Thresholds MUST match RIS exactly. These tiers are calibrated for 
  mid-tier $150-350K deals. Scale for other deal sizes.

----
INPUTS_OUTPUTS_H2:  Inputs & Outputs — Field Reference
INPUTS_OUTPUTS_INTRO: What each field means and where to find the numbers.

INPUTS_TABLE:

  Property section:
  | Field              | What it means                              | Where to find it                          |
  | Purchase Price     | Contract price to acquire                  | MLS, wholesaler, off-market                |
  | Property Type      | SFR, small multi 2-4, condo, townhouse     | Property listing                           |
  | ARV                | Market value after renovation              | Comps from MLS, appraisal, BPO             |

  Rehab section:
  | Field              | What it means                              | Where to find it                          |
  | Rehab Budget       | Total estimated renovation cost            | Contractor bids, scope of work             |
  | Rehab Contingency  | Budget buffer for overruns (10-15% typical)| Industry standard                          |
  | Rehab Duration     | Expected months to complete rehab          | Contractor timeline                        |

  Seasoning section:
  | Field              | What it means                              | Where to find it                          |
  | Seasoning Months   | Months from purchase to refi eligibility   | Typical 6-12, check lender requirements    |

  Phase 1 Holding Costs section (monthly during seasoning — NOT including loan interest):
  | Field              | What it means                              | Where to find it                          |
  | Property Tax       | Monthly tax (annual divided by 12)         | County assessor                            |
  | Insurance          | Monthly vacant/rehab insurance             | Current quote                              |
  | Utilities          | While vacant during rehab                  | Prior bills or estimates                   |
  | HOA                | If applicable                              | HOA statement                              |
  | Other              | Lawn, security, misc                       | Ongoing estimates                          |

  Phase 1 Hard Money Financing section:
  | Field              | What it means                              | Where to find it                          |
  | HM Loan to Cost    | Percent of (price + rehab) financed        | Hard money term sheet                      |
  | HM Interest Rate   | Annual rate (2026 range 10-14%)            | Lender quote                               |
  | HM Points          | Upfront fee as percent of loan (2-4%)      | Lender quote                               |
  | HM Covers Rehab    | Whether loan funds rehab or only purchase  | Loan program                               |

  Refinance Event section:
  | Field              | What it means                              | Where to find it                          |
  | Refi LTV           | New loan as percent of ARV (default 75%)   | Conventional investment property programs  |
  | Refi Rate          | Annual rate (2026 range 7-8%)              | Lender quote                               |
  | Refi Loan Term     | New loan amortization (typically 30 years) | Loan program                               |
  | Refi Closing Costs | Transaction fees at refi                   | Typical 2-3% of new loan                   |

  Year 1 Rental Operation section (Phase 3) — IMPORTANT: these expenses apply ONLY AFTER refinance. They are separate from Phase 1 Holding Costs which apply ONLY DURING the rehab and seasoning period. Same property, different time periods — these must NEVER be combined:
  | Field              | What it means                              | Where to find it                          |
  | Monthly Rent       | Projected Year 1 monthly rent              | Market rent comps, Rentometer, Zillow      |
  | Vacancy Rate       | Expected annual vacancy percentage         | Local market data                          |
  | Year 1 Expenses    | Annual operating expenses (rental)         | T-12 projections or detailed breakdown     |

OUTPUTS_TABLE:
  | Output                    | What it means                                          | Primary use                                      |
  | Capital Left in Deal $    | Cash still tied up after refi                          | Headline BRRRR metric                            |
  | Post-Refi Cash-on-Cash %  | Return on Capital Left (or Infinite if ≤ 0)            | Deal quality ranking                             |
  | 75% Rule Check            | Whether deal supports full capital recovery            | Quick go/no-go screening                         |
  | Capital Recovery %        | Percent of invested cash extracted via refi            | Success measurement                              |
  | Refi Proceeds             | Net cash to investor at refi event                     | Capital planning                                 |
  | Post-Refi DSCR            | Year 1 debt service coverage                           | Refi lender qualification check                  |
  | Post-Refi Cash Flow       | Year 1 annual cash flow after refi                     | Income from Capital Left                         |
  | All-In Cost               | Total Phase 1 project cost (pre-refi)                  | 75% Rule comparison basis                        |
  | Total Cash Invested       | Investor's cash out of pocket (pre-refi)               | Capital requirement planning                     |

----
FORMULA_H2:         BRRRR Formula & Capital Recovery Calculation
FORMULA_SUBTITLE:   How the calculator projects BRRRR outcomes — with a worked Atlanta, GA example for 2026

FORMULA_INTRO_BOX (critical foundational concepts — include at top of Formula section):
  
  IMPORTANT: Total Cash Invested is NOT the same as All-In Cost. These are two 
  distinct numbers that serve different purposes:
  
  • All-In Cost = TOTAL project cost before refinance (includes both investor cash 
    AND the hard money loan). Used for the 75% Rule comparison and Consistency Identity.
  
  • Total Cash Invested = ONLY the investor's cash out of pocket (excludes the 
    hard money loan portion). Used for Capital Left and Capital Recovery % calculations.
  
  They differ by exactly the HM Loan Amount:
  All-In Cost = Total Cash Invested + HM Loan Payoff (principal only)
  
  Mixing these two values produces wrong Capital Recovery % and misleading Capital Left. 
  The calculator tracks both separately and displays each under its own label.

STEP_BY_STEP (10-12 numbered steps):
  1. Calculate HM Loan Amount: (Purchase + Rehab) × LTC for HM-covers-rehab mode, or Purchase × LTC otherwise
  2. Calculate HM Loan Points: Loan Amount × Points %
  3. Calculate Total HM Interest: Loan Amount × (Annual Rate ÷ 12) × Seasoning Months (interest-only)
  4. Calculate Total Phase 1 Holding Costs: monthly holding × seasoning months (property-related only, excludes loan interest)
  5. Calculate All-In Cost: Purchase + Closing + Rehab + Contingency + Phase 1 Holding + HM Points + HM Interest
  6. Calculate Total Cash Invested: Down Payment + Closing + Rehab (only if NOT financed) + Contingency (only if NOT financed) + Phase 1 Holding + HM Points + HM Interest
     
     Rehab inclusion rule (critical — prevents Capital Recovery miscalculation):
     - If hmLoanCoversRehab = true (HM finances rehab): rehab and contingency are EXCLUDED from Total Cash Invested (financed by lender, not investor cash)
     - If hmLoanCoversRehab = false (HM covers purchase only): rehab and contingency are INCLUDED in Total Cash Invested (paid from investor pocket)
     - If financingType = 'cash' or similar: rehab and contingency always INCLUDED (no financing)
     - These exact rules apply the same way to the consistency identity check
  7. Calculate New Loan Amount: ARV × Refi LTV
  8. Calculate Refi Closing Costs: New Loan × Refi Closing % (or flat dollar amount)
  9. Calculate Refi Proceeds: New Loan − HM Payoff (principal only) − Refi Closing Costs
  10. Calculate Capital Left: Total Cash Invested − Refi Proceeds
  11. Calculate Year 1 NOI, Debt Service, Cash Flow, DSCR (Phase 3 rental math)
  12. Calculate Post-Refi CoC: IF Capital Left > 0 → Cash Flow ÷ Capital Left × 100; IF Capital Left ≤ 0 AND Cash Flow > 0 → Infinite Return; IF Capital Left ≤ 0 AND Cash Flow ≤ 0 → Cash-Out but Losing (warning)

FORMULA_BOX:
  All-In Cost:            Purchase + Closing + Rehab + Contingency + Phase 1 Holding + HM Points + HM Interest
  New Loan Amount:        ARV × Refi LTV
  Refi Proceeds:          New Loan − HM Payoff − Refi Closing
  Capital Left:           Total Cash Invested − Refi Proceeds
  Capital Recovery %:     Refi Proceeds ÷ Total Cash Invested × 100
  75% Rule Target:        ARV × 0.75
  Post-Refi CoC %:        Year 1 Cash Flow ÷ Capital Left × 100 (or "Infinite" if Capital Left ≤ 0 AND Cash Flow > 0)

CONSISTENCY IDENTITY (required):
  All-In Cost = Total Cash Invested + HM Loan Payoff (principal only)
  
  This identity must hold in any valid BRRRR calculation. It verifies that every dollar 
  of project cost is accounted for as either investor cash or lender principal.

ANTI-DOUBLE-COUNTING RULES (critical — each rule prevents a common BRRRR calculator bug):
  - Refi Closing Costs are NOT in All-In Cost and NOT in Total Cash Invested — they are ONLY subtracted in Refi Proceeds
  - HM Loan Payoff includes ONLY principal — HM Interest and Points are already counted in All-In Cost
  - Phase 1 Holding Costs apply ONLY during the rehab and seasoning period (months 0 to seasoningMonths)
  - Year 1 Rental Expenses apply ONLY after refinance (months seasoningMonths+1 to seasoningMonths+12)
  - These are SEPARATE time periods for the SAME property — they must NEVER be combined in any formula or summary
  - Example: Property tax might be $180/month. Phase 1 total = $180 × 6 months = $1,080. Year 1 total = $180 × 12 months = $2,160. These live in different buckets and feed different calculations.

FORMULA_VISUAL (ASCII-style schema):
  Phase 1 (Pre-Refi):
  Purchase + Closing + Rehab + Holding + HM Costs ──→ All-In Cost
  
  Refi Event:
  ARV × 75% ──→ New Loan Amount
                       │
                       ├── pay off HM Loan (principal)
                       ├── pay Refi Closing Costs
                       └── remainder ──→ Refi Proceeds to Investor
  
  Capital Recovery:
  Total Cash Invested − Refi Proceeds ──→ Capital Left in Deal
  
  Phase 3 (Year 1 Rental):
  Year 1 NOI − New Loan Debt Service ──→ Year 1 Cash Flow
  Year 1 Cash Flow ÷ Capital Left ──→ Post-Refi Cash-on-Cash %

FORMULA_EXAMPLE:
  Location:         Atlanta, GA (balanced 2026 BRRRR market with solid rental demand and moderate rehab costs)
  Property type:    Single-family rental, 3-bedroom, 1980s build, needs moderate update
  Market context:   Atlanta metro offers strong 2026 BRRRR opportunities — moderate entry prices 
                    ($130-180K for BRRRR candidates), steady rental demand, and reliable ARV 
                    growth of 3-4% annually.
  Financing:        Phase 1 Hard Money (industry standard), Phase 2 Conventional 30-year

  STRICT NUMERIC RANGES — use values within these bands so Capital Left lands in $5,000-$15,000 (Strong tier):
    Purchase Price:          $140,000-$170,000
    ARV:                     $230,000-$260,000
    Rehab Budget:            $35,000-$45,000 (moderate update scope)
    Rehab Contingency:       10% of rehab budget
    Rehab Duration:          3 months
    Seasoning Period:        6 months total
    Purchase Closing:        3% of purchase price
    Monthly Phase 1 Holding: $550-$700 (property tax + insurance + utilities vacant)
    Hard Money:              80% LTC, 12% rate, 3 points, covers rehab = yes
    Refi Terms:              75% LTV, 7.5% rate, 30-year, 2.5% closing
    Monthly Rent:            $1,850-$2,100
    Vacancy Rate:            7%
    Year 1 Rental Expenses:  $7,000-$8,500 annual

  EXPECTED RESULT: 
    Capital Left should fall in $5,000-$15,000 range (Strong tier)
    Capital Recovery % should fall in 85-95%
    Post-Refi DSCR should fall in 1.15-1.30x range
    Post-Refi Cash Flow should be positive $1,500-$3,500 annual

  RANGE ENFORCEMENT RULE (mandatory):
    If initial calculation produces Capital Left OUTSIDE $1-$25,000:
      - Do NOT output the worked example with off-range result
      - Adjust inputs using the EXACT allowed bounds below (do NOT exceed):
      
      ALLOWED ADJUSTMENT BOUNDS (single iteration — do NOT compound):
        - Purchase Price: ±$5,000 to ±$10,000 (step $1,000)
        - ARV: ±$5,000 to ±$10,000 (step $1,000)
        - Rehab Budget: ±$3,000 to ±$5,000 (step $1,000)
        - Monthly Phase 1 Holding: ±$50 to ±$100 (step $50)
        - Monthly Rent: ±$50 to ±$150 (step $50)
      
      CONSTRAINTS on adjustments:
        - All adjusted values MUST remain within the STRICT NUMERIC RANGES bands defined above
        - GLOBAL ADJUSTMENT CAP (strict, across ALL iterations combined):
          * Never adjust more than TWO variables TOTAL across the entire adjustment process
          * If you adjusted Purchase and ARV in iteration 1, you may NOT adjust Rehab or anything else in iteration 2
          * Iteration 2 is only for FURTHER refining the SAME two variables already touched in iteration 1
          * "Adjusted variable" counter resets only after a completely new worked example generation
        - Maximum TWO iterations — if still off-range after 2 iterations, abandon and 
          explain in the interpretation paragraph that target Strong tier was not achieved
        - Do NOT silently use different inputs than declared — keep values explicit and visible
        - Track which variables you've touched. Before adjusting in iteration 2, ask yourself: 
          "have I already adjusted TWO distinct variables? If yes → STOP, abandon."
      
      Re-run calculation after adjustment, re-verify Capital Left falls in $5K-$15K target.
      Only output the final worked example when Capital Left is in target range.
    
    The purpose of the worked example is teaching the Strong tier outcome. 
    An off-range result confuses the reader about what Strong tier actually looks like.

  POST-CALCULATION VERIFICATION (mandatory — run all 4 checks, keep explanations brief):
  
  Check 1 — Capital Left in target range:
    Target: $5,000-$15,000 (Strong tier). If outside $1-$25,000, explain why in 1 sentence.
  
  Check 2 — 75% Rule:
    Compute ARV × 0.75 and compare to All-In Cost. State within/outside the rule.
  
  Check 3 — Consistency identity MUST hold:
    All-In Cost = Total Cash Invested + HM Loan Payoff (within $1-5 tolerance due to rounding).
    If mismatch → calculation INVALID, do not output worked example.
  
  Check 4 — Infinite Return guard:
    Infinite Return appears ONLY when Capital Left ≤ 0 AND Year 1 Cash Flow > 0.
    With negative Cash Flow → "Cash-Out but Losing" (not Infinite).
  
  Calculation steps with dollar math (EVERY step shows actual dollar amounts):
  
    MANDATORY EXECUTION RULES for the 23 steps below:
    1. Do NOT summarize, skip, or compress any step.
    2. Each step must be executed and written out explicitly with its dollar result.
    3. Do NOT merge steps (e.g., "Steps 3-5 combined" is forbidden).
    4. Do NOT reorder steps — dependencies matter (e.g., Step 9 All-In Cost depends 
       on Steps 1-8 being computed first).
    5. If a step produces $0, still write the step with $0 — do NOT omit it.
    6. Silent step-skipping is the #1 cause of wrong worked examples — avoid at all costs.
    
    STOP-RATHER-THAN-APPROXIMATE RULE (critical escape valve):
    
    If ANY step below cannot be completed precisely — for ANY reason — do the following:
    - STOP the worked example generation immediately
    - DO NOT produce the worked example
    - DO NOT approximate, skip, or "make up" the uncertain step
    - DO NOT round aggressively to hide the problem
    - Instead, output a brief note: "Worked example not generated due to calculation 
      uncertainty — please verify inputs and retry."
    
    Reasons that trigger STOP:
    - Amortization math produces implausible values
    - Consistency Identity check fails (All-In ≠ Cash Invested + HM Payoff)
    - Dependency is broken (e.g., NOI not yet computed when DSCR is needed)
    - Any intermediate value cannot be computed with confidence
    
    The goal: better NO worked example than a WRONG worked example. A wrong worked 
    example damages user trust permanently; a missing one is a minor inconvenience.
    
    Step 1: HM Loan Amount = (Purchase + Rehab) × 80% = [$ amount]
    Step 2: Down Payment = Purchase × (1 − 80%) = [$ amount]
    Step 3: HM Points = HM Loan × 3% = [$ amount]
    Step 4: Monthly HM Interest = HM Loan × (12% ÷ 12) = [$ amount]
    Step 5: Total HM Interest (6 months) = Monthly Interest × 6 = [$ amount]
    Step 6: Phase 1 Total Holding = Monthly Holding × 6 = [$ amount]
    Step 7: Purchase Closing = Purchase × 3% = [$ amount]
    Step 8: Rehab Contingency = Rehab × 10% = [$ amount]
    Step 9: All-In Cost = Purchase + Closing + Rehab + Contingency + Phase 1 Holding + HM Points + HM Interest = [$ amount]
    Step 10: Total Cash Invested = Down + Closing + Phase 1 Holding + HM Points + HM Interest = [$ amount]
            (Rehab financed by HM, NOT in Cash Invested)
    Step 11: New Loan Amount = ARV × 75% = [$ amount]
    Step 12: Refi Closing = New Loan × 2.5% = [$ amount]
    Step 13: HM Loan Payoff = HM Loan Amount (principal only) = [$ amount]
    Step 14: Refi Proceeds = New Loan − HM Payoff − Refi Closing = [$ amount]
    Step 15: Capital Left = Total Cash Invested − Refi Proceeds = [$ amount]
    Step 16: Capital Recovery % = Refi Proceeds ÷ Total Cash Invested × 100 = [X%]
    
    CRITICAL RULE FOR STEPS 17-23 (Phase 3 rental math):
    These steps MUST be executed sequentially in the exact order below.
    Do NOT skip, merge, or reorder them. Each step depends on the previous one.
    Specifically: NOI (Step 18) must precede DSCR (Step 22) and CoC (Step 23),
    because DSCR and CoC both read from NOI. Skipping or reordering produces 
    silent calculation errors.
    
    Step 17: Year 1 Rent Revenue = Monthly Rent × 12 = [$ amount]
    Step 18: Year 1 NOI = Rent × (1 − Vacancy) − Year 1 Expenses = [$ amount]
    Step 19: New Loan Monthly Payment = amortization formula = [$ amount]
    Step 20: Year 1 Debt Service = Monthly Payment × 12 = [$ amount]
    Step 21: Year 1 Cash Flow = NOI − Debt Service = [$ amount]
    Step 22: Post-Refi DSCR = NOI ÷ Debt Service = [X.XXx]
    Step 23: Post-Refi CoC % = Cash Flow ÷ Capital Left × 100 = [X%]
    
    Verify identity: All-In Cost ≟ Total Cash Invested + HM Loan Payoff
    These should match within $1-5 due to rounding (a few dollars of discrepancy 
    is acceptable from floating-point and percentage calculations). If the 
    difference exceeds $5, there is a double-counting or missing-item bug.

  Result:
    Capital Left = [$5,000-$15,000]
    Capital Recovery % = [85-95%]
    Post-Refi DSCR = [1.15-1.30x]
    Post-Refi CoC % = [12-25%]
    75% Rule: [Within rule OR Outside rule — state explicitly]

  Interpretation:
    [2-3 sentences tying the result to Strong tier meaning, 2026 Atlanta market 
    dynamics, 75% Rule compliance, and capital recycling strategy. Before-tax 
    analysis; actual after-tax returns vary with rental income tax treatment.]

----
RIS_H2:             What Your Capital Left Result Means

RIS_INTRO:          [1-2 sentences — "Your Capital Left in Deal tells you how much cash remains trapped in the property after refinance. Here is how to interpret each tier in the 2026 US BRRRR market."]

SPECIAL_TIER (check BEFORE Tier 1 — critical logic):
  Range:            Capital Left ≤ $0 AND Cash Flow ≤ $0 — Cash-Out but Losing
  Typical context:  Over-leveraged refinance at high LTV; negative cash flow rental
  Meaning:          [3-4 sentences — investor extracted all capital (or more) via refi, 
                    BUT property operates at monthly loss. This is NOT a win. Each month 
                    the investor must feed money into the property to cover operating deficit. 
                    Often indicates over-leveraged refi LTV (80%+) combined with high rent-to-ARV 
                    market where cash flow cannot support debt service. Reconsider deal: 
                    lower refi LTV, renegotiate rent, or hold for appreciation instead.]

RIS_INFINITE (Tier 1: Capital Left ≤ $0 AND Cash Flow > 0 — Infinite Return):
  Range:            Capital Left ≤ $0 AND positive cash flow — Infinite Return
  Typical context:  Deep-value off-market acquisitions; significant forced appreciation via rehab
  Meaning:          [4-5 sentences — BRRRR holy grail. All invested capital recovered through 
                    refi PLUS property generates positive cash flow with zero capital at risk. 
                    Mathematically infinite return on remaining capital. Very rare in 2026 — 
                    typically requires wholesaler-sourced deep-value acquisition, significant 
                    rehab-driven ARV increase, or off-market relationships. When achieved, this 
                    represents infinite leverage: one set of capital funding multiple deals.]

RIS_EXCEPTIONAL (Tier 2: $1–$5,000):
  Range:            Capital Left $1-$5,000 — Exceptional
  Typical context:  Well-executed 2026 BRRRR with strong ARV appreciation or deep-value acquisition
  Meaning:          [3-4 sentences — near-perfect capital recovery in 2026 environment. Small 
                    amount remaining essentially serves as closing-cost buffer or deal-structure 
                    rounding. Strong BRRRR outcome showing effective execution of the strategy. 
                    Property capitalized almost entirely by new conventional loan.]

RIS_STRONG (Tier 3: $5,001–$15,000):
  Range:            Capital Left $5,001-$15,000 — Strong
  Typical context:  Market-average 2026 BRRRR with solid ARV improvement via moderate rehab
  Meaning:          [3-4 sentences — very good 2026 BRRRR outcome. Moderate capital remaining 
                    ($5-15K) is typical for deals with market-rate appraisals and 75% refi LTV. 
                    Strong Post-Refi cash flow on remaining capital (often 15-30%+ CoC) makes 
                    this a highly productive use of capital.]

RIS_SOLID (Tier 4: $15,001–$30,000):
  Range:            Capital Left $15,001-$30,000 — Solid
  Typical context:  Standard 2026 BRRRR with moderate rehab and conservative ARV
  Meaning:          [3-4 sentences — market-average BRRRR outcome for 2026 rate environment. 
                    Substantial capital remaining but still leverages rehab-to-refi strategy 
                    effectively. Post-Refi CoC typically 8-15%. Acceptable if the investor 
                    has capital to commit and wants to build long-term equity alongside cash flow.]

RIS_WEAK (Tier 5: $30,001–$60,000):
  Range:            Capital Left $30,001-$60,000 — Weak
  Typical context:  Marginal BRRRR deals; often better treated as pure buy-and-hold rentals
  Meaning:          [3-4 sentences — below-market BRRRR outcome. Large capital remaining 
                    suggests the BRRRR thesis isn't working — often All-In Cost was too high 
                    relative to ARV, or refi LTV too conservative. Investor should reconsider 
                    whether BRRRR label applies, or treat as standard rental property investment.]

RIS_CRITICAL (Tier 6: > $60,000 OR Refi Shortfall):
  Range:            Capital Left > $60,000 OR Refi Shortfall — Critical
  Typical context:  Failed BRRRR; ARV miss at appraisal; over-priced acquisition
  Meaning:          [3-4 sentences — BRRRR thesis broken. Either too much capital stuck in 
                    the deal (>$60K) or refi produces shortfall (investor must bring cash to 
                    refi table). Do not proceed with strategy as BRRRR — reconsider as 
                    long-term hold, or exit deal before escalating losses. Often indicates 
                    fundamental flaws in acquisition price or ARV assumption.]

RIS_CONTEXT:
  Title:            Why 2026 BRRRR looks different from 2019
  Body:             [4-5 sentences — explain: hard money rates rose from 8-10% in 2019 to 
                    11-13% in 2026, adding $3-5K in HM interest costs on a typical 6-month 
                    BRRRR. Conventional refi rates went from 4-5% to 7-8%, meaning new loan 
                    payments are 40-50% higher on identical loan amounts. These two factors 
                    combine: Phase 1 costs more, Phase 3 cash flow is tighter, and the spread 
                    that made 2019 BRRRRs infinite-return regularly is now compressed. 
                    Concrete example: A Columbus BRRRR sourced in 2019 at $120K with $40K 
                    rehab and $220K ARV could easily produce Infinite Return at 75% LTV refi; 
                    in 2026 the same deal produces $8-15K Capital Left — a Strong BRRRR 
                    outcome but no longer the 2019 miracle.]

----
BENCHMARKS_H2:      BRRRR Outcomes by Strategy & Market (2026)
BENCHMARKS_INTRO:   [2 sentences — "Typical 2026 BRRRR outcomes across different execution styles and markets. Use as starting points — actual results depend on specific deal quality, appraisal outcome, and market conditions. These are industry-standard estimates based on 2026 hard money + conventional refi rates — not market-reported BRRRR statistics."]

BENCHMARK_BY_STRATEGY_H3: By Execution Style

BENCHMARK_BY_STRATEGY_TABLE (5 rows from RIS):
  | Strategy Type                 | Typical Capital Left | Post-Refi CoC | Notes                               |
  | Cash-out BRRRR (rare 2026)    | Below $0             | Infinite      | Requires deep-value acquisition      |
  | Full Recovery BRRRR           | $0-$5K               | 50%+          | Ideal outcome, small buffer          |
  | Partial Recovery BRRRR        | $5K-$20K             | 25-50%        | 2026 market average                  |
  | Hybrid BRRRR-to-Hold          | $20K-$40K            | 15-25%        | Leaves more capital, still viable    |
  | Failed BRRRR (treat as Hold)  | $40K+                | 8-15%         | BRRRR thesis broken                  |

  Note after table: "2026 rate environment compresses BRRRR outcomes compared to pre-2022. 
  Full Recovery is the realistic target for most 2026 deals; Infinite Return requires 
  exceptional sourcing or rehab execution."

BENCHMARK_BY_STATE_H3: By State — Top BRRRR Markets (2026)
BENCHMARK_BY_STATE_CARDS (8 cards — each MUST name TWO specific factors):

  STRICT REQUIREMENT for every state note: explain WHY the state works (or doesn't) for BRRRR
  using AT LEAST TWO specific factors — not one. Generic notes are insufficient.

  Attribute to combinations of these factors:
  - Entry price point (low-entry affordable vs high-cost coastal)
  - Rent-to-ARV ratio (affects Post-Refi cash flow)
  - Rehab costs and labor availability
  - Permitting timeline and complexity
  - Property tax and insurance costs
  - Refi lender availability
  - ARV growth trajectory
  - Regulatory environment

  Each state MUST name at least TWO specific factors:

  Texas (TX):
    Typical Capital Left: $5,000-$20,000
    Key markets: Dallas, Houston, San Antonio
    BRRRR characteristics: Affordable entry AND no state income tax
    Note: [Texas is one of the strongest 2026 BRRRR states. Factor 1: Entry prices $150-220K 
          for BRRRR candidates. Factor 2: No state income tax means higher take-home on 
          rental income post-refi.]

  Georgia (GA):
    Typical Capital Left: $5,000-$15,000
    Key markets: Atlanta, Savannah, Augusta
    BRRRR characteristics: Atlanta metro strength AND moderate rehab costs
    Note: [Georgia is a top 2026 BRRRR market. Factor 1: Atlanta metro has reliable ARV 
          growth and steady rental demand. Factor 2: Non-union labor and available 
          contractors keep rehab costs 10-15% below coastal markets.]

  Ohio (OH):
    Typical Capital Left: $2,000-$10,000
    Key markets: Columbus, Cincinnati, Cleveland
    BRRRR characteristics: Low entry prices AND strong rent-to-ARV ratios
    Note: [Ohio offers the most BRRRR-friendly entry prices. Factor 1: $80-150K entry 
          prices enable smaller capital deployment. Factor 2: 0.9-1.1% rent-to-ARV 
          ratios support strong Post-Refi cash flow.]

  Pennsylvania (PA):
    Typical Capital Left: $10,000-$25,000
    Key markets: Pittsburgh, Philadelphia, Lancaster
    BRRRR characteristics: Older housing stock AND Philadelphia/Pittsburgh variance
    Note: [PA BRRRR varies widely by metro. Factor 1: Older housing stock often requires 
          electrical and plumbing updates that inflate rehab budgets. Factor 2: Pittsburgh 
          offers stronger BRRRR economics than Philadelphia due to lower entry prices.]

  Arizona (AZ):
    Typical Capital Left: $10,000-$25,000
    Key markets: Phoenix, Tucson, Tempe
    BRRRR characteristics: Population growth AND rising insurance costs
    Note: [Phoenix metro BRRRR benefits from strong buyer demand. Factor 1: Population 
          inflow supports ARV stability. Factor 2: Emerging insurance costs (wildfires, 
          extreme heat) add to holding costs during seasoning.]

  North Carolina (NC):
    Typical Capital Left: $8,000-$20,000
    Key markets: Raleigh, Charlotte, Greensboro
    BRRRR characteristics: Metro growth AND balanced rehab costs
    Note: [NC BRRRR benefits from metro strength. Factor 1: Raleigh and Charlotte have 
          consistent 3-5% ARV growth annually. Factor 2: Moderate labor costs keep 
          rehab budgets reasonable for BRRRR candidates.]

  Indiana (IN):
    Typical Capital Left: $3,000-$12,000
    Key markets: Indianapolis, Fort Wayne, Bloomington
    BRRRR characteristics: Low entry + low property tax
    Note: [Indianapolis is an underrated BRRRR market. Factor 1: Entry prices $90-140K 
          for BRRRR candidates. Factor 2: Low effective property tax (~0.85%) reduces 
          holding costs and supports Post-Refi cash flow.]

  Tennessee (TN):
    Typical Capital Left: $8,000-$18,000
    Key markets: Nashville, Memphis, Knoxville
    BRRRR characteristics: Nashville metro + no state income tax
    Note: [Tennessee BRRRR benefits from tax environment and metro growth. Factor 1: 
          Nashville metro population inflow supports strong rental demand. Factor 2: 
          No state income tax on rental income improves post-refi take-home returns.]

BENCHMARK_BY_STATE_TABLE (same 8 states in tabular format with 2-3 sentence notes per state)

SOURCES_NOTE:       These BRRRR outcome ranges are synthesized from multiple industry 
                    sources, including BiggerPockets BRRRR case studies, David Greene's 
                    BRRRR methodology (the foundational reference text), Kiavi and 
                    LendingOne hard money data, conventional investment property refi 
                    underwriting standards (Fannie Mae / Freddie Mac), and 2026 rate 
                    environment analysis.
                    
                    Methodology: BRRRR outcomes are not directly reported as aggregated 
                    market statistics (unlike cap rates or home prices). Instead, these 
                    ranges are DERIVED by combining the measurable inputs that feed into 
                    BRRRR math under 2026 conditions:
                    - Typical acquisition discount ranges in each market (5-25% below ARV)
                    - Typical rehab scope and cost for BRRRR candidates ($25K-$60K moderate)
                    - 2026 hard money terms (11-13% rate, 2-4 points, 75-85% LTC)
                    - Phase 1 holding costs (6-12 month seasoning)
                    - 2026 conventional refi terms (7-8% rate, 75% LTV typical)
                    - Year 1 rental operation benchmarks (rent-to-ARV ratios, expense ratios)
                    
                    Applying these inputs produces the Capital Left and Post-Refi CoC 
                    ranges shown. Individual outcomes vary materially based on specific 
                    deal quality, lender appraisal, execution discipline, and local market 
                    timing. Always verify with current local data and individual deal 
                    underwriting. Not market-reported figures.

----
STRATEGY_H2:        BRRRR Strategy — When Capital Left and Recovery Matter Most
STRATEGY_INTRO:     How the BRRRR Calculator supports different investment approaches

STRATEGY_FIRST_TIME:
  Badge:            First-Time BRRRR'er
  Paragraph 1:      [3-4 sentences — for investors executing their first BRRRR. Focus 
                    on 75% Rule indicator (should show "Within rule"), Post-Refi DSCR 
                    (should be ≥ 1.20x for refi approval), and Capital Left (target 
                    under $20K for first deal). Conservative ARV estimates are critical — 
                    first-time BRRRR'ers commonly overestimate ARV by 5-10% which can 
                    eliminate capital recovery entirely.]
  Paragraph 2:      [2-3 sentences — practical guidance: start with SFR (easiest to 
                    appraise, standard financing), budget 15% rehab contingency, confirm 
                    refi lender before committing to purchase. Treat Capital Left in 
                    Solid tier ($15-30K) as acceptable first-deal outcome — Infinite 
                    Return is rare for beginners.]

STRATEGY_SCALING:
  Badge:            Scaling Portfolio
  Paragraph 1:      [3-4 sentences — experienced BRRRR investors running multiple deals 
                    annually use the calculator to rank acquisition candidates by 
                    Capital Recovery %. Filter for deals showing 85%+ Capital Recovery 
                    at standard 75% LTV refi. Run all active candidates with identical 
                    assumptions and deploy capital to highest-Recovery % deal first.]
  Paragraph 2:      [2-3 sentences — advanced tip: use scenario analysis to stress-test 
                    BRRRR thesis. Deals where even Conservative scenario shows full 
                    capital recovery are portfolio-scaling gold. Avoid deals dependent 
                    on Optimistic assumptions — appraisal risk is always present.]

STRATEGY_DEEP_VALUE:
  Badge:            Deep-Value / Off-Market
  Paragraph 1:      [3-4 sentences — wholesaler-sourced or off-market deals are where 
                    Infinite Return becomes achievable. These deals have acquisition 
                    discount baked in — purchase at 50-65% of ARV is possible. Combined 
                    with moderate rehab and 75% LTV refi, Capital Left goes negative.]
  Paragraph 2:      [2-3 sentences — warning: deep-value deals have execution risk. 
                    Rehab scope may be larger than initially estimated, and ARV 
                    appraisal can disappoint. Always verify Consistency Identity in 
                    these deals (All-In = Cash + HM Payoff) — small math errors compound 
                    on tight-margin deep-value BRRRRs.]

STRATEGY_BRRRR_TO_HOLD:
  Badge:            BRRRR-to-Hold
  Paragraph 1:      [3-4 sentences — when Capital Left ends up in Solid/Weak tier 
                    ($15-40K), consider pivoting to long-term buy-and-hold. The property 
                    still produces Post-Refi cash flow and builds equity, just with more 
                    capital deployed than pure BRRRR thesis. Calculate multi-year return 
                    using Rental Property Calculator to validate the pivot.]
  Paragraph 2:      [2-3 sentences — this isn't a failed BRRRR — it's a successful 
                    capital-constrained rental acquisition. Post-Refi DSCR above 1.20x 
                    and Post-Refi CoC above 10% make this a legitimate long-term holding 
                    even without perfect capital recycle.]

STRATEGY_FAILED_BRRRR:
  Badge:            Failed BRRRR — Recovery Options
  Title:            When BRRRR Doesn't Work
  Body:             [3-4 sentences — if Capital Left exceeds $60K or refi produces 
                    shortfall, the BRRRR thesis is broken. Recovery options: (1) rehab 
                    more aggressively to force higher ARV, (2) find aggressive LTV 
                    lender (80%+), (3) refinance later after market appreciation, (4) 
                    exit via sale as pure flip before seasoning. Sometimes the best 
                    option is recognizing sunk cost and pivoting strategy — all four 
                    are better than continuing to bleed capital.]

----
APPLICATIONS_H2:    Applications of BRRRR Analysis
APPLICATIONS_INTRO: Six concrete ways investors use BRRRR Calculator

APPLICATION_1:
  Title:            First-Deal Screening
  Body:             [2-3 sentences — is this deal worth pursuing as BRRRR? Quick 
                    3-minute analysis with Purchase, ARV, Rehab, HM terms, and Refi 
                    terms gives a go/no-go before lender prep and contractor walkthroughs.]

APPLICATION_2:
  Title:            Offer Price Construction
  Body:             [2-3 sentences — use Find Max Purchase Price mode with target 
                    Capital Left (e.g. "max $10K left"), calculator solves for max offer. 
                    Makes you competitive on price while ensuring BRRRR thesis holds.]

APPLICATION_3:
  Title:            75% Rule Compliance Check
  Body:             [2-3 sentences — wholesalers and BRRRR investors use the 75% Rule 
                    indicator to screen deals before deeper analysis. Within rule = 
                    BRRRR thesis viable; outside rule = must find higher LTV lender or 
                    pivot to hold strategy.]

APPLICATION_4:
  Title:            ARV Validation Before Refi
  Body:             [2-3 sentences — use Find Required ARV mode to see minimum ARV 
                    needed for full capital recovery. Before spending money on refi 
                    appraisal, verify your ARV assumptions produce the math you expect. 
                    If required ARV exceeds your best comp estimate, the deal doesn't 
                    work.]

APPLICATION_5:
  Title:            Refi LTV Shopping
  Body:             [2-3 sentences — compare Capital Left outcomes at 70% vs 75% vs 
                    80% refi LTV. Higher LTV extracts more capital but may increase 
                    refi rate. Calculate which LTV optimizes your Capital Left / 
                    Post-Refi CoC combination.]

APPLICATION_6:
  Title:            Portfolio Deal Stacking
  Body:             [2-3 sentences — for investors running multiple BRRRRs, compare 
                    candidates side-by-side with identical financing assumptions. Rank 
                    by Capital Recovery % and Post-Refi CoC. Deploy capital to deals 
                    with best mix of recovery + cash flow.]

----
INDUSTRY_STANDARDS_H2:   Industry Standards & Professional Methodologies
INDUSTRY_STANDARDS_INTRO: How Capital Left, Capital Recovery %, and the 75% Rule fit into established BRRRR investment frameworks.

STANDARD_1:
  Title:            The 75% Rule (BRRRR Foundation)
  Points (4 bullets):
    - "75% Rule states that All-In Cost should be at or below ARV × 0.75 for full capital recovery at standard 75% LTV refi"
    - "The rule exists because conventional investment property cash-out refi typically caps at 75% LTV"
    - "Deals within the rule have mathematically viable full capital recovery; deals outside leave capital in the deal"
    - "David Greene's BRRRR book (the definitive BRRRR reference) uses this rule as the core screening heuristic"

STANDARD_2:
  Title:            Conventional Refi Underwriting (Fannie Mae / Freddie Mac)
  Intro:            [2 sentences about how conventional lenders evaluate BRRRR refi applications]
  Points (4 bullets):
    - "Conventional cash-out refi on investment property typically caps at 75% LTV (75-80% depending on lender)"
    - "Lenders require minimum 6-month seasoning from purchase to cash-out refi eligibility"
    - "Post-Refi DSCR minimum 1.15-1.25x required for approval (lower DSCR = rate bumps or denial)"
    - "Appraisal determines ARV — lender appraisal can come in lower than investor estimate, creating capital recovery risk"

STANDARD_3:
  Title:            BRRRR Professional Benchmarks (David Greene / BiggerPockets)
  Points (5 bullets):
    - "Professional BRRRR investors target Capital Left under $10K in 2026 rate environment"
    - "Capital Recovery % of 90%+ is the industry benchmark for well-executed BRRRR"
    - "Infinite Return deals represent 5-10% of professional BRRRR deals in 2026 (vs 20-30% pre-2022)"
    - "Post-Refi DSCR of 1.20x+ is required for sustainable BRRRR — below this, refi may not qualify"
    - "Tax treatment: Refi proceeds are NOT taxable (loan, not income); rental cash flow taxed as ordinary income (25-37% marginal typical)"

----
LIMITATIONS_H2:     Limitations of BRRRR Calculator
LIMITATIONS_INTRO:  [1 sentence — "BRRRR Calculator is the most complete single tool for BRRRR strategy analysis, but it has deliberate scope limits you should understand."]

LIMITATION_1:
  Title:            Before-Tax Analysis Only (v1)
  Body:             [3-4 sentences — calculator does not model rental income tax treatment, 
                    depreciation shield, or refinance tax mechanics. Refi proceeds are 
                    not taxable (loan, not income), but Year 1 rental cash flow is 
                    taxed as ordinary income at 25-37% marginal rates. Depreciation 
                    shield typically reduces effective tax burden by 15-25%. Consult 
                    a CPA for after-tax BRRRR optimization.]

LIMITATION_2:
  Title:            ARV Appraisal Risk
  Body:             [3-4 sentences — calculator uses your ARV input directly, but at 
                    refi the lender's appraisal determines actual new loan amount. 
                    Appraisal shortfalls of 5-10% are common, which can reduce Refi 
                    Proceeds by $10-20K on a typical BRRRR. Always use conservative 
                    ARV estimates verified with 3+ comps, BPO, or pre-rehab appraisal — 
                    treat your input as the LOW end of expected appraisal range.]

LIMITATION_3:
  Title:            Year 1 Post-Refi Only (No Multi-Year)
  Body:             [3-4 sentences — v1 calculator shows only Year 1 post-refi performance 
                    (DSCR, cash flow, CoC). Does not project multi-year rental growth, 
                    appreciation, or long-term Total Return. For multi-year analysis of 
                    the post-BRRRR rental, use Rental Property Calculator. This scope 
                    limit is intentional — BRRRR's distinctive question is capital recycle, 
                    not long-term wealth projection.]

LIMITATION_4:
  Title:            Single Refinance Event
  Body:             [3-4 sentences — calculator models one refinance event (hard money 
                    to conventional). Does not model: rate-and-term refi later, second 
                    cash-out refi after appreciation, or refinance-to-refinance strategies. 
                    For investors planning multiple refi events, run this calculator for 
                    initial BRRRR, then plan subsequent refis separately using current 
                    market conditions at those future dates.]

WHEN_NOT_TO_USE_H3: When Not to Use This Calculator
WHEN_NOT_TO_USE_LIST (4 bullets):
  - "Pure flip projects (no rent + refi): Use Fix and Flip Calculator — profit-focused analysis for buy-rehab-sell"
  - "Pure rental acquisitions (no rehab + refi): Use Rental Property Calculator — multi-year cash flow and Total Return"
  - "Wholesale assignments (no ownership): Use wholesale-specific tool — BRRRR math requires holding and refinancing"
  - "New construction BRRRR: Use development pro forma tools — BRRRR assumes existing property being rehabbed"

----
COMMON_MISTAKES_H2: Common Mistakes When Analyzing BRRRR Deals
COMMON_MISTAKES_INTRO: [1 sentence introducing the 5 common BRRRR mistakes]

MISTAKE_1:
  Title:            Optimistic ARV without conservative comps
  Body:             [3-4 sentences — first-time BRRRR'ers commonly input ARV based on 
                    wholesaler's pitch, hot-market optimism, or best-comp picking. 
                    Professional BRRRR'ers use conservative ARV (bottom of 3+ comp 
                    range) and verify with BPO. A $10K ARV miss at refi appraisal 
                    can convert Full Recovery BRRRR into Partial Recovery — leaving 
                    $7,500 more in the deal than projected.]

MISTAKE_2:
  Title:            Forgetting Phase 1 holding costs accumulate during seasoning
  Body:             [3-4 sentences — many BRRRR calculators and mental models skip the 
                    6-12 month seasoning period costs. During seasoning, the investor 
                    pays property tax, insurance, utilities, and HM interest every month. 
                    A 6-month seasoning with $600/month holding + $1,500/month HM interest 
                    is $12,600 in cash outflow — substantial on any BRRRR. Always include 
                    full seasoning holding in Total Cash Invested.]

MISTAKE_3:
  Title:            Celebrating "Infinite Return" on negative cash flow property
  Body:             [3-4 sentences — Capital Left ≤ $0 alone is NOT a win. If the 
                    property runs negative cash flow post-refi, the investor has 
                    "Infinite Return" on paper but feeds money into the property monthly. 
                    This is a Cash-Out but Losing scenario, not BRRRR success. Always 
                    verify post-refi cash flow is positive before celebrating capital 
                    recovery.]

MISTAKE_4:
  Title:            Assuming full refi LTV will be available
  Body:             [3-4 sentences — calculator uses user's refi LTV input (default 75%), 
                    but actual lenders may approve lower LTV based on DSCR, property 
                    condition, or investor financial profile. Conservative BRRRR modeling 
                    uses 70% LTV to stress-test; if math still works at 70%, the deal 
                    survives lender tightening. Never assume 80%+ LTV without confirmed 
                    lender commitment.]

MISTAKE_5:
  Title:            Treating All-In Cost and Total Cash Invested as the same
  Body:             [3-4 sentences — All-In Cost is total project cost (includes HM loan); 
                    Total Cash Invested is investor's portion (excludes HM loan financing). 
                    These differ by the HM Loan Amount. Using the wrong value in Capital 
                    Recovery % calculation produces misleading results. The Consistency 
                    Identity All-In Cost = Total Cash Invested + HM Loan Payoff is the 
                    anti-bug check — verify it holds in every calculation.]

----
FAQ_H2:             Frequently Asked Questions

FAQ_Q1:             What is a good Capital Left for a BRRRR deal in 2026?
FAQ_A1:             [3-4 sentences — realistic 2026 benchmarks: Infinite Return (rare), 
                    Exceptional $1-$5K, Strong $5-$15K, Solid $15-$30K, Weak $30-$60K, 
                    Critical above $60K. In 2026 rate environment, aim for Capital Left 
                    under $15K on a typical mid-tier deal. Infinite Return happens mostly 
                    on deep-value off-market deals with significant rehab-driven ARV increase.]

FAQ_Q2:             What is the 75% Rule in BRRRR?
FAQ_A2:             [3-4 sentences — the 75% Rule states All-In Cost should be at or 
                    below ARV × 0.75 for full capital recovery at standard 75% LTV 
                    refinance. The rule exists because conventional investment property 
                    cash-out refi typically caps at 75% LTV. Deals within the rule have 
                    mathematically viable capital recovery; deals outside leave capital 
                    in the deal unless refi terms are more aggressive.]

FAQ_Q3:             What does "Infinite Return" mean in BRRRR?
FAQ_A3:             [3-4 sentences — Infinite Return occurs when Capital Left is zero or 
                    negative AND the property produces positive cash flow. Mathematically, 
                    any cash flow divided by zero capital is infinite. Critical distinction: 
                    Capital Left ≤ $0 with negative cash flow is NOT Infinite Return — it's 
                    a cash-out refi into a losing rental (warning sign).]

FAQ_Q4:             How do I calculate BRRRR Capital Left and Capital Recovery?
FAQ_A4:             [Must include these 3 elements:
                     1. The formulas: Capital Left = Total Cash Invested − Refi Proceeds. 
                        Capital Recovery % = Refi Proceeds ÷ Total Cash Invested × 100.
                     2. One brief numeric example: "$45K invested, Refi Proceeds $42K → 
                        Capital Left $3K → Recovery 93%"
                     3. Maximum 4 sentences total. Do NOT write a long tutorial.]

FAQ_Q5:             How long should seasoning be before refinance?
FAQ_A5:             [3-4 sentences — typical seasoning period is 6-12 months from purchase 
                    to cash-out refi eligibility. Most conventional lenders require minimum 
                    6 months seasoning. Longer seasoning (9-12 months) may unlock better 
                    rates but adds holding costs. Always verify specific lender requirements 
                    before committing to timeline.]

FAQ_Q6:             What refinance LTV should I expect for BRRRR?
FAQ_A6:             [3-4 sentences — conventional investment property cash-out refi typically 
                    caps at 75% LTV. Some portfolio lenders approve 80% LTV for strong 
                    borrowers with high DSCR. Conservative BRRRR modeling uses 70% LTV to 
                    stress-test deal assumptions. Never assume 80%+ without confirmed 
                    lender commitment.]

FAQ_Q7:             Are BRRRR refi proceeds taxable?
FAQ_A7:             [3-4 sentences — No, refi proceeds are NOT taxable income. They are 
                    loan proceeds (you owe the money back to the lender). This is why 
                    BRRRR is powerful — you extract capital tax-free. However, rental 
                    income post-refi IS taxed as ordinary income (25-37% marginal typical), 
                    offset by depreciation shield. Consult a CPA for tax-optimized BRRRR 
                    planning.]

FAQ_Q8:             Can I use this calculator for multiple refinance events?
FAQ_A8:             [3-4 sentences — v1 models one refinance event (hard money to 
                    conventional). Does not model: rate-and-term refi after rate drops, 
                    second cash-out refi after appreciation, or refinance-to-refinance 
                    strategies. For multi-refi planning, run this calculator for initial 
                    BRRRR, then model subsequent refis separately using current market 
                    conditions at those future dates.]

----
RELATED_CALCULATORS:
  (3-4 related calculators from the project, real slugs)

  1. fix-and-flip-calculator
  2. rental-property-calculator
  3. dscr-calculator
  4. cash-on-cash-calculator

----
SCHEMA_TYPE:        Calculator
SCHEMA_NAME:        BRRRR Calculator
SCHEMA_DESCRIPTION: [160-char description emphasizing BRRRR strategy, capital recovery, and 75% Rule analysis]
SCHEMA_URL:         https://realcalc.com/brrrr-calculator
SCHEMA_FEATURE_LIST: Capital Left calculation, Capital Recovery %, 75% Rule check, Post-Refi Cash-on-Cash, Post-Refi DSCR, Infinite Return detection, hard money + conventional refi modes, 3 calculation modes, sensitivity analysis, scenario modeling, PDF export, 6-tier benchmarking

FAQ_SCHEMA:
  All 8 Q&A from above formatted for JSON-LD FAQPage schema.

----

---

## OUTPUT CHECKLIST

Before finalizing, verify:

- [ ] **TITLE uses INVERTED LOGIC: hardcoded fallback "BRRRR Calculator — Capital Recovery | RealCalc" (47 chars) is DEFAULT — custom TITLE allowed ONLY if explicitly verified ≤ 58 chars**
- [ ] **TITLE VERIFICATION requires EXPLICIT NUMERIC COUNT in format "EXPLICIT_COUNT: N characters" — without this exact format, use fallback. "Looks fine" is NOT verification.**
- [ ] **CRITICAL TITLE RULE: if length NOT explicitly verified via numeric count, do NOT estimate — use hardcoded fallback immediately, no exceptions**
- [ ] **STOP-RATHER-THAN-APPROXIMATE RULE: if any worked-example step cannot be completed precisely, STOP and output brief note — do NOT approximate. Better no worked example than wrong one.**
- [ ] **Steps 17-23 (Phase 3 rental math) must be sequential — explicit warning in Formula section against skipping/merging/reordering**
- [ ] **MANDATORY EXECUTION RULES for 23 worked-example steps: no summarizing, no skipping, no compressing, no merging, no reordering — each step written explicitly with dollar result**
- [ ] **Consistency Identity tolerance is $1-5 (not $1-2) — allows for realistic rounding discrepancies**
- [ ] **Secondary keywords include APPROVED NATURAL TEMPLATES (Template 1, 2, 3) for natural integration of the long "buy rehab rent refinance repeat calculator" phrase**
- [ ] **RIS_CONTEXT has 1 concrete Columbus example (not 2) — avoids perceptual overload**
- [ ] **FORMULA_EXAMPLE has RANGE ENFORCEMENT RULE with EXACT ALLOWED ADJUSTMENT BOUNDS (Purchase ±$5-10K, ARV ±$5-10K, Rehab ±$3-5K, etc.) — "slightly" is forbidden, bounds must be explicit**
- [ ] **GLOBAL ADJUSTMENT CAP: never more than TWO variables total across ALL iterations combined (not per iteration)**
- [ ] **RANGE ENFORCEMENT max 2 iterations — if still off-range, abandon and explain in interpretation paragraph**
- [ ] META DESCRIPTION is 150-160 chars, mentions "Capital", "Refinance", or "75% Rule"
- [ ] H1 contains primary keyword
- [ ] Overview has exactly 4 paragraphs
- [ ] **OVERVIEW_P1 uses at least 2 of these specific secondary keywords VERBATIM: "brrrr strategy calculator", "buy rehab rent refinance repeat calculator", "brrrr method calculator", "real estate brrrr calculator"**
- [ ] **NATURAL READABILITY RULE: keywords integrated with natural sentence flow — no forced awkward phrasing**
- [ ] **NO substituted variations like "rental recycle calculator" or "refi strategy tool"**
- [ ] **STEP 6 (Total Cash Invested) has EXPLICIT rehab inclusion rule: "if hmLoanCoversRehab = true → excluded; if false → included; if cash → included"**
- [ ] **FORMULA_INTRO_BOX explicitly distinguishes Total Cash Invested vs All-In Cost — these are different numbers serving different purposes**
- [ ] **ANTI-DOUBLE-COUNTING RULES section explicitly states Phase 1 Holding ≠ Year 1 Expenses (separate time periods, must NEVER be combined)**
- [ ] **Year 1 Rental Operation inputs table has warning note about time-period separation from Phase 1 Holding**
- [ ] **POST-CALCULATION VERIFICATION is compact (4 brief checks) — not overloaded with 20+ lines of instructions**
- [ ] **SOURCES_NOTE includes explicit methodology: derived from combining acquisition + rehab + financing + refi mechanics under 2026 conditions**
- [ ] **DUAL primary metrics emphasized: Capital Left $ AND Post-Refi CoC % (not just one)**
- [ ] **Infinite Return concept explained with DUAL condition requirement (Capital Left ≤ 0 AND Cash Flow > 0)**
- [ ] **Cash-Out but Losing warning explicitly distinguished from Infinite Return**
- [ ] **"Before-tax analysis" label appears in Overview P4, Limitations, AND FAQ**
- [ ] **Scope limitation to Year 1 post-refi clearly stated (NOT multi-year)**
- [ ] **75% Rule explained in WHAT_IS_H2 and has dedicated FAQ question**
- [ ] **75% Rule clearly distinguished from Fix and Flip 70% Rule**
- [ ] **Two-phase strategy emphasized: Phase 1 (HM) + Refi Event + Phase 3 (Year 1 rental)**
- [ ] How to Use has 5 numbered steps + 4 pro tips + Special Tier + 6 result guide tiers
- [ ] **Result Guide contains Special Tier "Cash-Out but Losing" BEFORE Tier 1 Infinite Return**
- [ ] **Result Guide contains ALL 6 tiers with EXACT thresholds from RIS: Infinite Return / $0-5K / $5-15K / $15-30K / $30-60K / $60K+ — no rounding**
- [ ] Formula section has step-by-step + formula box + visual schema + worked Atlanta example
- [ ] **FORMULA section includes CONSISTENCY IDENTITY: All-In Cost = Total Cash Invested + HM Loan Payoff (principal only)**
- [ ] **ANTI-DOUBLE-COUNTING rules explicit in Formula section (Refi Closing, HM Payoff principal-only, Phase separation)**
- [ ] **FORMULA_EXAMPLE result falls in $5,000-$15,000 Capital Left (Strong tier)**
- [ ] **RANGE ENFORCEMENT RULE applied: if Capital Left outside $1-$25,000, adjust inputs within approved bands and re-run — do NOT output off-range worked example**
- [ ] **CRITICAL RULE for Steps 17-23 present: sequential execution required, NOI must precede DSCR and CoC**
- [ ] **FORMULA_EXAMPLE Rehab shown as DOLLAR AMOUNT, not percentage**
- [ ] **Every calculation step shows actual dollar math — no percentages left unreduced**
- [ ] **POST-CALCULATION VERIFICATION includes: Capital Left check, 75% Rule check, Consistency Identity check, Infinite Return guard check**
- [ ] **If Capital Left outside $1-$25,000, explicitly explain why in interpretation — never silently accept**
- [ ] RIS section has Special Tier + 6 tier bands with market context
- [ ] **Special Tier explicitly separated from Tier 1 Infinite Return (negative cash flow ≠ Infinite)**
- [ ] Benchmarks by Strategy has 5 execution styles from RIS
- [ ] Benchmarks by State has all 8 states (cards + table) with ranges
- [ ] **Each state note cites AT LEAST TWO specific factors (not one) — entry price, rent-to-ARV, rehab cost, permit timing, tax, etc.**
- [ ] **All benchmarks labeled as "industry-standard estimates — not market-reported BRRRR statistics"**
- [ ] Strategy has 5 blocks: First-Time + Scaling + Deep-Value + BRRRR-to-Hold + Failed BRRRR
- [ ] Applications has 6 use cases including 75% Rule Compliance Check
- [ ] Industry Standards covers 75% Rule + Conventional Refi Underwriting + Professional Benchmarks
- [ ] **Tax discussion: refi proceeds NOT taxable, rental income ordinary income (explicit in Industry Standards and FAQ)**
- [ ] Limitations has 4 items (Before-Tax, ARV Risk, Year 1 Only, Single Refi) + "When Not to Use" list
- [ ] Common Mistakes has 5 items including "Celebrating Infinite Return on negative cash flow" and "Optimistic ARV"
- [ ] FAQ has exactly 8 Q&A, each with 3-4 sentence answers
- [ ] **FAQ_A4 includes both formulas + numeric example + max 4 sentences (no mini-essay)**
- [ ] FAQ_Q2 specifically explains the 75% Rule
- [ ] FAQ_Q3 explicitly explains Infinite Return concept with dual-condition requirement
- [ ] FAQ_Q7 addresses tax treatment of refi proceeds (NOT taxable) vs rental income (taxable)
- [ ] Related Calculators uses real project slugs (fix-and-flip, rental-property, dscr, cash-on-cash)
- [ ] Schema block is complete
- [ ] **Placeholders in content descriptions use text instructions, not number examples**
- [ ] No pre-2022 historical benchmarks used
- [ ] **HM vs Conventional refi both explained with current 2026 rate ranges**
- [ ] **ARV accuracy emphasized as #1 risk factor (Limitation 2, Mistake 1)**
- [ ] **Scope limit explicit in Limitations and Related Calculators (redirect to Rental Property Calculator for multi-year)**

**Output only the SEO content package in Markdown. Do not output code. Do not output HTML. Do not output Vue. This is a content document that will be consumed by the Master Prompt later alongside the RIS spec.**
