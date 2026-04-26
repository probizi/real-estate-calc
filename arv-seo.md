# SEO Package Prompt — ARV Calculator

You are a senior SEO copywriter specializing in US real estate investment content. Your job is to produce a **complete SEO content package** for the ARV Calculator page.

The output of this prompt is pure content — no code, no HTML, no Vue. It will later be combined with the RIS specification and the Master Prompt to generate the actual page.

---

## YOUR TASK

Write an SEO package for:

```
Calculator Name:    ARV Calculator (After Repair Value Calculator)
Slug:               arv-calculator
Primary keyword:    arv calculator
Secondary keywords: after repair value calculator, arv real estate calculator, 
                    comparable sales calculator, home value estimator for investors
Primary metric:     Estimated ARV $ (single number, rounded to nearest $1,000)
Secondary metric:   Confidence Range ± $ (shown prominently alongside)
Target audience:    US real estate investors — Fix and Flip investors, BRRRR 
                    investors, wholesalers, real estate agents estimating 
                    post-renovation market value for deal analysis
Traffic priority:   Priority 2 (estimated 15K-25K searches/month)
                    HIGH cross-sell value — companion tool for Fix and Flip 
                    and BRRRR Calculators
```

Use the attached RIS specification (arv-ris.md) as the source of truth for formulas, thresholds, adjustments, and test cases. Do not invent numbers — pull them from the RIS.

---

## CRITICAL DISTINCTIONS TO PRESERVE

This calculator is fundamentally different from all previous RealCalc calculators. Throughout the SEO package:

**1. ARV is an ESTIMATE, not a CALCULATION**

Every previous calculator (Cap Rate, NOI, DSCR, Rental Property, Fix and Flip, BRRRR) computed PRECISE financial outputs from known inputs. ARV Calculator APPROXIMATES market value from comparable sales — the result has inherent uncertainty. Content tone must reflect this distinction:

- Use "estimates", "projects", "approximates" — NEVER "calculates", "determines", "computes"
- Always reference the Confidence Range alongside the ARV number
- Multiple explicit reminders: "Not a substitute for professional appraisal"
- Honest uncertainty language — no overclaims of precision

**2. Primary metric: ARV $ (single number) + Confidence Range (derived)**

Headline format:
```
Estimated ARV
$285,000

Confidence Range: $275,000 - $295,000 (±$10,000)
Based on 4 comparable sales • HIGH Confidence
```

Both numbers are shown prominently, but ARV is the headline. Range is the honest companion.

**3. Hybrid method: Comps + Adjustments**

Users input 3-5 comparable sales with each comp's: sale price, date, sqft, beds, baths, condition. Calculator computes weighted average $/sqft across comps, applies adjustments for bedroom/bathroom differences, applies condition multiplier for subject's post-rehab state.

This mirrors how professional appraisers approach ARV. Content must explain the methodology clearly.

**4. 3-5 comps required (with graduated confidence)**

- Fewer than 3 comps: LOW Confidence warning
- Exactly 3 comps: MEDIUM Confidence
- 4-5 comps: HIGH Confidence (target)

Content emphasizes: "More comps = more reliable estimate. Aim for 4-5."

**5. Confidence Tiers are ESTIMATE QUALITY, not DEAL QUALITY**

In Fix and Flip, tiers show deal quality (Exceptional/Strong/Solid/Weak/Critical/Loss). In ARV Calculator, tiers show estimate RELIABILITY (HIGH/MEDIUM/LOW Confidence). This is a fundamental distinction.

- HIGH Confidence ARV = reliable estimate for screening
- LOW Confidence ARV = needs more comps or professional verification
- ARV of $400K with HIGH Confidence is MORE actionable than $500K with LOW Confidence

**6. 70% Rule and 75% Rule integration**

Once ARV is calculated, the tool automatically shows (conditional on user inputs):
- 70% Rule Max Offer = ARV × 0.70 − Rehab Budget (when user enters Rehab Budget)
- 75% Rule All-In Target = ARV × 0.75 (when BRRRR toggle enabled)

This makes ARV Calculator the natural SCREENING TOOL for flip and BRRRR deals. SEO content must cross-link prominently to Fix and Flip Calculator and BRRRR Calculator.

**7. Not a substitute for professional appraisal**

Critical disclaimer appearing in 4 places: Overview P4, How to Use, Limitations, FAQ. Never soften this language. Lenders WILL NOT accept this calculator's ARV for loan underwriting.

**8. 2026 market context**

- Post-pandemic ARV growth has moderated to 2-4% annually (vs 8-12% in 2020-2021)
- Comps from 6+ months ago may overstate current ARV
- Regional variance has widened (hot markets vs cooling markets)
- Recommend comps within last 3-6 months maximum

**9. NO market-reported benchmarks for ARV**

Unlike cap rate (Marcus & Millichap reports), home prices (Case-Shiller), ARV is NOT a reported statistic. Every benchmark in this content must be labeled "industry-standard estimates" or "typical $/sqft ranges" — never "market-reported ARV data".

**10. Do NOT claim guarantees**

- "Estimated ARV" — never "Confirmed ARV"
- "Projected value" — never "Actual value"
- "Screening tool" — never "Valuation service"
- Always note: "Actual sale value depends on timing, buyer demand, appraisal outcome, and market conditions."

---

## RULES

1. US market only. All examples, cities, benchmarks, and $/sqft ranges are US-specific and 2026-realistic.

2. Content depth matches canonical template. Cap Rate Calculator is the reference — match its depth per section.

3. No generic filler. Every paragraph contains specific numbers, real cities, concrete examples, or year-specific context.

4. Primary keyword placement: must appear in TITLE, H1, META DESCRIPTION, OVERVIEW_P1, and at least 2 H2 headings. Natural density — no keyword stuffing.

5. Secondary keywords: must use at least 2 of "after repair value calculator", "arv real estate calculator", "comparable sales calculator", "home value estimator for investors" naturally in OVERVIEW_P1.

6. Sentence case for all headings.

7. Placeholder rule (from Master Prompt): Never use concrete numbers in input placeholders. Use "Enter X" style text instructions only.

8. Output format: structured Markdown with section dividers using four hyphens. Ready to copy.

---

## REQUIRED OUTPUT STRUCTURE

Follow this structure exactly. Do not skip sections. Do not add sections.

----
TITLE:              [MANDATORY — use exact fallback string below, no exceptions:
                     
                     TITLE: ARV Calculator — Comps & Confidence | RealCalc
                     (verified 48 characters)
                     
                     SIMPLIFIED RULE (v2): ALWAYS use the fallback title above.
                     Do NOT generate a custom title. Do NOT modify the fallback.
                     Do NOT attempt character counting for alternatives.
                     
                     Rationale: this eliminates the risk of producing a 
                     too-long or malformed title. The fallback has been 
                     pre-verified at 48 characters (safely under the 60-char 
                     Google cutoff) and contains the required USP marker 
                     ("Comps & Confidence") plus brand suffix.
                     
                     If a future version requires a different title, it must 
                     be specified as a new hardcoded fallback — not generated 
                     dynamically.]

META DESCRIPTION:   [150-160 chars, primary keyword + USP + CTA. Must mention 
                    "comparable sales", "Confidence Range", or "70% Rule" for specificity. 
                    Example tone: "Free ARV calculator for real estate investors. 
                    Estimate after-repair value from 3-5 comparable sales with 
                    confidence range and 70% Rule max offer. 2026 methodology."]

H1:                 [Contains primary keyword, follows pattern: 
                    "ARV Calculator — [Short USP] for US Real Estate Investors"]

----
OVERVIEW_P1:        [2-3 sentences — what this calculator is, what it estimates, 
                    who it's for. Primary keyword in first sentence. Emphasize 
                    ESTIMATE not calculation. Mention comparable sales methodology.
                    
                    REQUIRED: Must use at least 2 of these specific secondary 
                    keywords naturally:
                    - "after repair value calculator"
                    - "arv real estate calculator"
                    - "comparable sales calculator"
                    - "home value estimator for investors"
                    
                    NATURAL READABILITY: Integrate keywords with natural flow. 
                    Do not force awkward phrasing. The approved phrases have highest 
                    search volume; variations sacrifice SEO.
                    
                    Do NOT substitute with variations like:
                    - "property valuation tool"
                    - "rehab value estimator"
                    - "investor appraisal calculator"]

OVERVIEW_P2:        [2-3 sentences — how it works. Mention: user inputs 3-5 recent 
                    comparable sales with sale price, date, sqft, beds, baths. 
                    Calculator computes weighted average $/sqft, applies adjustments 
                    for bedroom/bathroom differences, applies condition multiplier. 
                    Outputs Estimated ARV with Confidence Range, plus 70% Rule Max 
                    Offer for flip deals and 75% Rule All-In Target for BRRRR deals.]

OVERVIEW_P3:        [2-3 sentences — who uses it: Fix and Flip investors calculating 
                    max offer via 70% Rule, BRRRR investors estimating refi ARV for 
                    capital recovery, wholesalers justifying assignment fees to end 
                    buyers, real estate agents advising investor clients. Emphasize 
                    cross-sell: "Pair with Fix and Flip Calculator or BRRRR Calculator 
                    for full deal analysis."]

OVERVIEW_P4:        [2-3 sentences — what it does NOT include and critical 
                    disclaimer. Before-tax analysis only (assumes current market, 
                    no future appreciation modeling). CRITICAL: "This is a screening 
                    tool — not a substitute for professional appraisal or Broker 
                    Price Opinion (BPO). Lenders will not accept this ARV for loan 
                    underwriting. For final purchase or lending decisions, verify 
                    with a licensed appraiser."]

----
WHAT_IS_H2:         What Is ARV? (and why it's an estimate, not a calculation)

WHAT_IS_P1:         [4-5 sentences — ARV (After Repair Value) is the projected 
                    market value of a property AFTER renovation is complete, expressed 
                    in current market dollars. It is the single most important input 
                    in flip and BRRRR deal analysis — a $10K ARV miss can eliminate 
                    entire projected profit on a thin-margin flip. Unlike calculations 
                    that produce precise outputs (cap rate, mortgage payment), ARV is 
                    an ESTIMATE derived from comparable sales data with inherent 
                    uncertainty. Professional appraisers, real estate agents, and 
                    experienced investors all approach ARV the same way: find similar 
                    recently-sold properties, adjust for differences, estimate the 
                    subject's value in that context.]

WHAT_IS_P2:         [4-5 sentences — explain the Hybrid methodology: calculator uses 
                    Comparable Sales (comps) + Appraiser-style Adjustments. Weighted 
                    average $/sqft is computed across 3-5 recent comps (weighted by 
                    recency and proximity to subject). Adjustments applied for 
                    bedroom/bathroom/garage/year-built/lot-size differences using 
                    industry-standard rules of thumb. Finally, a condition multiplier 
                    reflects the subject's post-rehab state relative to comp baseline. 
                    This mirrors the professional appraisal approach but in simplified, 
                    automated form.]

WHAT_IS_P3:         [3-4 sentences — explain Confidence Range concept. Every ARV 
                    estimate has inherent uncertainty — two appraisers given the same 
                    comps might produce ARVs that differ by 5-10%. The calculator 
                    expresses this honestly via Confidence Range (±$). Tight comp 
                    data (similar properties, recent sales) produces narrow range; 
                    scattered data produces wider range. Use the range, not just the 
                    point estimate, when making offers.]

----
HOW_TO_USE_H2:      How to Use the ARV Calculator
HOW_TO_USE_INTRO:   [1 sentence — "Follow these steps to estimate any US property's 
                    After Repair Value in under 5 minutes, using recent comparable 
                    sales data."]

STEP_1:
  TITLE:            Choose a calculation mode
  BODY:             [2-3 sentences — Analyze ARV (standard), Find Required ARV for 
                    Target Profit (reverse, for Fix and Flip screening), Find Max 
                    Offer at Target Margin (reverse, combines ARV with 70% Rule). 
                    Analyze is the primary mode for most users.]

STEP_2:
  TITLE:            Enter subject property details
  BODY:             [2-3 sentences — property square footage, bedrooms, bathrooms, 
                    garage spaces, year built, lot size (optional). Set Subject 
                    Condition to "Good" if property will be fully renovated to 
                    move-in-ready, "Excellent" for premium rehabs, "Average" for 
                    light cosmetic updates. The Condition setting affects the final 
                    ARV relative to comp baseline.]

STEP_3:
  TITLE:            Add 3-5 comparable sales
  BODY:             [3-4 sentences — find recently-sold properties similar to subject, 
                    ideally within 0.5-1 mile and under 90 days old. Enter each comp's 
                    sale price, sale date, sqft, beds, baths. More comps = more 
                    reliable estimate — aim for 4-5. Sources: MLS (if licensed), 
                    Redfin sold listings, Zillow Recent Sales, county assessor records, 
                    BPO from agent contact.]

STEP_4:
  TITLE:            Review adjustments and outliers
  BODY:             [3-4 sentences — calculator automatically adjusts for bedroom, 
                    bathroom, garage, year built, and lot size differences using 
                    industry-standard rates ($5K per bedroom, $10K per full bath, 
                    $5K per half bath, $10K per garage space). Review the Comp 
                    Comparison Table — any comp flagged as outlier (>25% PPSF 
                    deviation from median) should be reviewed for accuracy. You 
                    can manually exclude a comp if it's truly not comparable. 
                    Advanced mode allows overriding adjustment rates for your 
                    specific market.]

STEP_5:
  TITLE:            Review ARV and cross-check with 70/75% Rules
  BODY:             [3-4 sentences — primary result is Estimated ARV with Confidence 
                    Range. Review Confidence Tier (HIGH/MEDIUM/LOW) — add more 
                    comps if Low. Enter your projected Rehab Budget to see 70% Rule 
                    Max Offer (for Fix and Flip deals). Toggle BRRRR Analysis to see 
                    75% Rule All-In Target (maximum total cost for full capital 
                    recovery at 75% LTV refi). Pair with Fix and Flip Calculator or 
                    BRRRR Calculator for full deal analysis.]

PRO_TIPS (4 bullet points with concrete US data):
  - "Use 4-5 comps for HIGH Confidence. Three comps work for a quick estimate but widen the Confidence Range by 3-5% and may miss market signal. Professional appraisers use 3-6 comps; lenders typically require 3 minimum for home appraisal."
  - "Prioritize recency over proximity. A 30-day-old comp from 0.8 miles away typically outweighs a 6-month-old comp from 0.3 miles. 2026 markets shift faster than 2019 markets — stale comps overestimate current ARV."
  - "Watch for outlier flags. If the calculator flags a comp as >25% PPSF deviation from median, review it — wrong sqft data, unusual condition, or atypical market timing could distort your ARV. Either verify or manually exclude."
  - "Don't trust single-point ARV. Always use the Confidence Range when making offers. An ARV of $285K with ±$15K range means real acceptable offers range from $263K to $293K after accounting for reality — not $285K flat."

RESULT_GUIDE (3 Confidence tiers — must match RIS Section 6 exactly):

  IMPORTANT: These tiers reflect ESTIMATE QUALITY, not deal quality. Unlike Fix and 
  Flip or BRRRR where tiers show deal profitability, ARV tiers show how reliable 
  the estimate is. A HIGH Confidence ARV is more actionable than a LOW Confidence ARV.

  Tier 1 — HIGH Confidence (Score 80-100):
  - 4-5 comps provided
  - All comps under 180 days old
  - Average distance under 1 mile
  - Tight PPSF spread (CV under 15%)
  - No outliers flagged
  - Reliable for screening purposes. Verify with BPO or appraisal for final decisions.

  Tier 2 — MEDIUM Confidence (Score 60-79):
  - 3 comps OR mixed quality (some older, some less similar)
  - Moderate PPSF spread (CV 15-30%)
  - 0-1 outliers flagged
  - Usable for initial screening. Add more comps or get BPO before making offers.

  Tier 3 — LOW Confidence (Score below 60):
  - Fewer than 3 comps OR major quality issues
  - Wide PPSF spread (CV over 30%)
  - Multiple outliers or sqft mismatches with subject
  - Not enough reliable data. Find more comps, exclude outliers, or consult professional.

  Confidence Score is calculated internally from 5 factors: comp count (30%), 
  recency (20%), distance (20%), similarity (20%), PPSF spread (10%).

----
INPUTS_OUTPUTS_H2:  Inputs & Outputs — Field Reference
INPUTS_OUTPUTS_INTRO: What each field means and where to find the numbers.

INPUTS_TABLE:

  Subject Property section:
  | Field              | What it means                              | Where to find it                          |
  | Subject Sqft       | Property heated/cooled square footage      | Property listing, appraisal, assessor      |
  | Subject Bedrooms   | Number of bedrooms                         | Property listing                           |
  | Subject Bathrooms  | Full bathrooms plus half baths (2.5 = 2 full + 1 half) | Property listing                  |
  | Subject Condition  | Post-rehab condition (Average/Good/Excellent for rehabbed subject) | Projected after rehab  |
  | Garage Spaces      | Number of covered parking spaces (optional) | Property listing                           |
  | Year Built         | Original construction year (optional)      | Public records, assessor                   |
  | Lot Sqft           | Total lot square footage (optional)        | Assessor, property listing                 |

  Comparable Sales section (3-5 comps — each comp):
  | Field              | What it means                              | Where to find it                          |
  | Comp Sale Price    | Actual recorded sale price                 | MLS (if licensed), Redfin, Zillow sold      |
  | Comp Sale Date     | Date of closing                            | Same as above                              |
  | Comp Sqft          | Heated/cooled square footage               | Same as above                              |
  | Comp Beds/Baths    | Bedroom and bathroom count                 | Same as above                              |
  | Comp Garage Spaces | Covered parking (optional)                 | Same as above                              |
  | Comp Year Built    | Original construction year (optional)      | Same as above                              |
  | Comp Lot Sqft      | Total lot sqft (optional)                  | Same as above                              |
  | Comp Distance      | Miles from subject                         | Map tool or manual estimate                |

  Optional Integration section (for flip/BRRRR use cases):
  | Field              | What it means                              | Where to find it                          |
  | Rehab Budget       | Projected renovation cost (triggers 70% Rule Max Offer display) | Contractor bids        |
  | BRRRR Analysis Toggle | Show 75% Rule All-In Target for BRRRR    | Enable when analyzing BRRRR deal           |

OUTPUTS_TABLE:
  | Output                    | What it means                                          | Primary use                                      |
  | Estimated ARV             | Projected post-renovation market value                 | Headline deal screening number                   |
  | Confidence Range          | ±$ envelope based on comp spread                       | Realistic offer range                            |
  | Confidence Tier           | HIGH/MEDIUM/LOW (estimate reliability)                 | Know whether to trust the estimate               |
  | Weighted Avg $/sqft       | Comp-derived PPSF used to compute ARV                  | Sanity check vs local market                     |
  | Subject Implied $/sqft    | ARV ÷ Subject Sqft                                     | Compare to comp average                          |
  | 70% Rule Max Offer        | (ARV × 0.70) − Rehab Budget                            | Fix and Flip acquisition ceiling                 |
  | 75% Rule All-In Target    | ARV × 0.75                                             | BRRRR capital recovery target                    |
  | Comp Quality Score        | 0-100% measure of data reliability                     | Identify weak data                               |

----
FORMULA_H2:         ARV Formula & Comparable Sales Methodology
FORMULA_SUBTITLE:   How the calculator estimates after-repair value — with a worked Charlotte, NC example for 2026

FORMULA_INTRO_BOX (critical foundational concepts — include at top of Formula section):
  
  IMPORTANT: ARV is an ESTIMATE, not a calculation. The formula below is a 
  structured methodology based on appraiser practice, but the output has inherent 
  uncertainty. Two different sets of valid comps will produce different ARV 
  estimates for the same property. The Confidence Range honestly reflects this.
  
  For final lending or purchase decisions, always verify with a licensed appraiser 
  or Broker Price Opinion (BPO). This calculator is a SCREENING TOOL.

STEP_BY_STEP (15 numbered steps — strict):
  1. Compute raw $/sqft for each comp: Comp Sale Price ÷ Comp Sqft
  2. Apply adjustments for bed/bath/garage/year/lot differences (industry rules of thumb)
  3. Compute Adjusted $/sqft for each comp (after adjustments)
  4. Detect outliers: flag any comp with PPSF >25% from median (weight reduced 50-75%)
  5. Compute PPSF Coefficient of Variation (CV) for spread-based penalty
  6. Apply weight to each comp: Recency × Distance × Similarity (then normalized)
  7. Apply MAX CAP 40% per comp with PARTIAL REDISTRIBUTE rule (50% of excess redistributed, 50% discarded)
  8. Verify all weights are non-negative after penalties (any negative weight → clamp to 0, renormalize)
  9. Compute Weighted Average $/sqft across all comps
  10. Multiply by Subject Sqft to get Raw ARV (before condition adjustment)
  11. Determine Condition Multiplier: × 1.00 if Subject Condition = Avg Comp Condition (default baseline Average, tier 2), otherwise use tier-differential multiplier
  12. Apply Condition Multiplier to Raw ARV
  13. Round final ARV to nearest $1,000
  14. Compute Confidence Score (0-100) from 5 factors; derive Confidence Range % from Score-based table
  15. Compute 70% Rule Max Offer and 75% Rule All-In Target (if Rehab Budget entered)

FORMULA_BOX:
  Weighted Avg $/sqft:         Σ(Adjusted Comp $/sqft × Normalized Weight)
  Raw ARV:                     Weighted Avg $/sqft × Subject Sqft
  Final ARV:                   Raw ARV × Condition Multiplier (rounded to nearest $1,000)
  Confidence Range:            Final ARV ± (Final ARV × Range %, based on Confidence Score)
                               Score 95-100 → ±2.5% | Score 85-94 → ±3.5% | Score 75-84 → ±5%
                               Score 65-74 → ±6.5%  | Score 55-64 → ±8%   | Score 40-54 → ±10%
                               Score <40 → ±12%
                               Displayed as: Lower Bound – Upper Bound (± deviation)
                               Example: $275,000 – $295,000 (±$10,000)
  70% Rule Max Offer:          (Final ARV × 0.70) − Rehab Budget (for Fix and Flip)
  75% Rule All-In Target:      Final ARV × 0.75 (for BRRRR)
  Subject Implied $/sqft:      Final ARV ÷ Subject Sqft

CRITICAL METHODOLOGICAL RULES:
  - Default Avg Comp Condition = Average (tier 2), NOT Good (tier 3) — prevents upward bias
  - Condition Multiplier applied ONLY when Subject Condition differs from Avg Comp Condition (otherwise × 1.00)
  - Outlier Detection applied BEFORE weight normalization
  - MAX CAP 40% per comp with PARTIAL REDISTRIBUTE (50% discarded as confidence loss)
  - PPSF Spread Penalty: CV 15-30% reduces weights 5%, CV >30% reduces 10%
  - Lot Size Adjustment DISABLED by default (opt-in only, requires >20% difference)
  - All weights must remain non-negative after penalties (clamp negative weights to 0, then renormalize) — weights CANNOT be negative under any circumstance

FORMULA_VISUAL (ASCII-style schema):
  Subject Property Inputs ──┐
                            ├──→ 3-5 Comparable Sales
  Comp Sales Data ──────────┘
                                  │
                                  ▼
                          Apply Adjustments
                          (bed/bath/garage/year/lot)
                                  │
                                  ▼
                          Detect Outliers + Spread
                          (weight penalty if noisy)
                                  │
                                  ▼
                          Weighted Avg $/sqft
                          (normalized, capped at 40%)
                                  │
                                  ▼
                          × Subject Sqft = Raw ARV
                                  │
                                  ▼
                          × Condition Multiplier = Final ARV
                                  │
                                  ▼
                          Round to nearest $1,000 + Confidence Range
                                  │
                                  ├──→ 70% Rule Max Offer (Fix and Flip)
                                  └──→ 75% Rule All-In Target (BRRRR)

FORMULA_EXAMPLE:
  Location:         Charlotte, NC (balanced 2026 Southeast metro with solid comp 
                    data availability and moderate price appreciation)
  Property type:    Single-family rental, 3-bedroom, 2-bath, 1980s build
  Market context:   Charlotte metro offers reliable ARV estimation — active comp 
                    market (200+ sales per month in most zip codes), 3-4% annual 
                    ARV growth, steady buyer demand.

  STRICT NUMERIC RANGES — use values within these bands so result is illustrative:
    Subject Sqft:           1,750-1,850
    Subject Beds/Baths:     3 / 2
    Subject Condition:      Good (post-rehab move-in ready)
    Comp 1:                 $265K-$275K, 1,750-1,800 sqft, 3/2, 30 days old, 0.4 miles
    Comp 2:                 $270K-$285K, 1,800-1,850 sqft, 3/2, 60 days old, 0.6 miles
    Comp 3:                 $275K-$290K, 1,850-1,900 sqft, 3/2.5, 90 days old, 0.8 miles
    Comp 4:                 $255K-$270K, 1,700-1,780 sqft, 3/2, 120 days old, 0.5 miles
    Rehab Budget:           $35,000-$45,000 (for 70% Rule calculation)

  EXPECTED RESULT:
    Estimated ARV should fall in $275,000-$290,000 range
    Confidence Range should be approximately ±$8,000-$12,000 (HIGH Confidence)
    Confidence Tier: HIGH (4 comps, all under 120 days, tight PPSF spread)
    Subject Implied $/sqft: approximately $150-$165
    70% Rule Max Offer: approximately $150,000-$165,000

  POST-CALCULATION VERIFICATION (mandatory — run all 4 checks, keep brief):
  
  Check 1 — ARV in target range:
    Target: $275,000-$290,000 (Charlotte mid-market 3BR SFR 2026).
    If outside $260,000-$305,000, explain in 1 sentence.
  
  Check 2 — Confidence Tier:
    4 comps, all recent, similar = expect HIGH Confidence.
    If LOW/MEDIUM, check which factor caused downgrade.
  
  Check 3 — Subject Implied $/sqft sanity:
    Should be within 5% of Weighted Avg $/sqft.
    If not, condition multiplier may be mis-applied.
  
  Check 4 — 70% Rule Max Offer:
    (ARV × 0.70) − Rehab = screening offer ceiling.
    State whether in line with local investor norms.
  
  Calculation steps with dollar math (EVERY step shows actual dollar amounts):
  
    MANDATORY EXECUTION RULES for the 15 steps below:
    1. Do NOT summarize, skip, or compress any step.
    2. Each step must be executed and written out explicitly.
    3. Do NOT merge steps or reorder.
    4. If a step's output triggers an outlier flag or PPSF spread penalty, write it out.
    5. Silent step-skipping is the #1 cause of wrong worked examples.
    
    STOP-RATHER-THAN-APPROXIMATE RULE (primary):
    If any step cannot be completed precisely, STOP and output: "Worked example 
    not generated due to methodology uncertainty — please verify inputs."
    Better NO worked example than a WRONG worked example.
    
    GRACEFUL SIMPLIFICATION FALLBACK (secondary):
    If exact numeric execution of a step is not possible but the methodology 
    and logic CAN be preserved, simplify the step (e.g., show formula with 
    symbolic values or narrower range) WITHOUT changing the logical flow or 
    skipping required rules (outlier detection, CAP 40%, Condition Multiplier, 
    Score-based Range). Simplification is allowed ONLY if the result still 
    demonstrates correct methodology. If logic itself cannot be preserved, 
    fall back to the STOP rule above.
    
    Step 1: Comp 1 Raw $/sqft = $270,000 ÷ 1,780 sqft = [$X.XX]
    Step 2: Apply adjustments to each comp. Adjustment values:
            - +$5,000 per bedroom difference
            - +$10,000 per full bath difference
            - +$5,000 per half bath difference
            - +$10,000 per garage space difference
            - +$500 per year-built difference
            - +$5 per sqft lot size difference (opt-in, only if >20% difference)
            (e.g., Comp 3 has +0.5 bath vs Subject → +$5,000 half bath adjustment applied)
    Step 3: Compute Adjusted $/sqft for each comp after adjustments
    Step 4: Median PPSF = [$X.XX], no outliers flagged (all within 25%)
    Step 5: Compute CV of PPSFs; if CV < 15%, no spread penalty
    Step 6: Apply weights (Recency × Distance × Similarity), normalize to 100%
    Step 7: Check MAX CAP 40% — if top comp exceeds, apply partial redistribute (50% of excess redistributed, 50% discarded as confidence loss)
    Step 8: Verify all weights are non-negative after penalties (clamp any negative weight to 0, renormalize)
    Step 9: Weighted Avg $/sqft = [$X.XX]
    Step 10: Raw ARV = Weighted Avg $/sqft × 1,800 (subject sqft) = [$ amount]
    Step 11: Determine Condition Multiplier (Subject Good vs Avg Comp Average = +1 tier → × 1.05)
    Step 12: Apply Condition Multiplier: Raw ARV × 1.05 = [$ amount]
    Step 13: Final ARV rounded to nearest $1,000 = [$ amount]
    Step 14: Confidence Score = [N]/100 (based on 5 factors); Range % from Score-based table → Confidence Range = ± [$ amount]
    Step 15: 70% Rule Max Offer = (Final ARV × 0.70) − $40,000 Rehab = [$ amount]
    
  Result:
    Final ARV = [$275,000-$290,000]
    Confidence Range = ± [$8,000-$12,000]
    Confidence Tier = HIGH
    70% Rule Max Offer = [$150,000-$165,000]

  Interpretation:
    [2-3 sentences — tie the result to Charlotte 2026 market dynamics, explain 
    Confidence Tier meaning, note 70% Rule implications for acquisition ceiling. 
    Reminder: estimate only, verify with BPO for final decisions.]

----
RIS_H2:             What Your Confidence Tier Means

RIS_INTRO:          [1-2 sentences — "Unlike deal-quality calculators where tiers 
                    show profitability, ARV Confidence Tiers show how reliable your 
                    estimate is. Here is how to interpret each tier."]

RIS_HIGH:
  Tier:             HIGH Confidence (Score 80-100)
  Typical scenario: 4-5 recent comps, tight PPSF spread, similar properties, subject sqft matches comp avg
  Meaning:          [3-4 sentences — estimate is reliable for screening and initial 
                    offer development. Multiple recent comps in tight range give 
                    statistical confidence in the Weighted Avg $/sqft. Proceed with 
                    deal analysis using this ARV, but still verify with BPO before 
                    making formal offer or submitting to lender. Actual appraisal 
                    may come in 3-5% lower — build buffer into your offer.]

RIS_MEDIUM:
  Tier:             MEDIUM Confidence (Score 60-79)
  Typical scenario: 3 comps OR mixed recency, moderate PPSF spread, 1 outlier
  Meaning:          [3-4 sentences — estimate is usable for initial screening but 
                    less reliable than HIGH. Consider adding 1-2 more comps to 
                    strengthen the estimate, or order a Broker Price Opinion (BPO) 
                    from a local agent (typical cost $75-$150). Use the Confidence 
                    Range — not the point estimate — when considering offers. Widen 
                    your margin of safety.]

RIS_LOW:
  Tier:             LOW Confidence (Score below 60)
  Typical scenario: Fewer than 3 comps, or wide PPSF spread (>30%), or multiple outliers, or subject sqft mismatch
  Meaning:          [3-4 sentences — estimate has too much uncertainty for reliable 
                    use. Do not use this ARV for offer construction. Options: find 
                    more comps (target 4-5 recent + similar), exclude outliers and 
                    recalculate, order a professional appraisal ($400-$700) or BPO 
                    ($75-$150). For Fix and Flip or BRRRR deal analysis with LOW 
                    Confidence ARV, widen your margin significantly or pass on deal.]

RIS_CONTEXT:
  Title:            Why 2026 ARV estimates require more caution than 2019
  Body:             [4-6 sentences — explain: post-pandemic market has more regional 
                    variance than pre-2020 era. Hot markets (Austin, Boise, Phoenix) 
                    saw ARV decline 5-15% from 2022 peaks, while cooling markets 
                    stabilized. Comps from 6+ months ago in volatile markets may 
                    overstate or understate current ARV by 3-8%. Buyer demand softer 
                    due to elevated mortgage rates — properties may sit on market 
                    longer, and lender appraisals trending 3-5% conservative. 
                    Practical implication: use recent comps (under 90 days preferred, 
                    under 180 days maximum), trust Confidence Range over point 
                    estimate, and verify with BPO in volatile markets.]

----
BENCHMARKS_H2:      ARV $/sqft Ranges (2026, by Property Type and Market)
BENCHMARKS_INTRO:   [2 sentences — "Typical 2026 ARV $/sqft ranges across property 
                    types and major US markets. Use as sanity check — if your 
                    calculated ARV implies $/sqft outside these ranges, verify your 
                    comps. These are industry-standard estimates based on 2026 
                    market data, not official appraisal statistics."]

BENCHMARK_BY_TYPE_H3: By Property Type

BENCHMARK_BY_TYPE_TABLE:
  | Property Type        | Low Market $/sqft | Mid Market $/sqft | High Market $/sqft |
  | SFR (starter)        | $85-$120          | $120-$180         | $180-$280          |
  | SFR (move-up)        | $110-$150         | $150-$220         | $220-$350          |
  | Small Multi (2-4)    | $95-$130          | $130-$190         | $190-$300          |
  | Condo                | $130-$180         | $180-$260         | $260-$420          |
  | Townhouse            | $100-$140         | $140-$210         | $210-$320          |

  Note after table: "Condos show higher $/sqft than SFRs of equal size due to 
  amenity allocation and land factor. Low/Mid/High Market designations roughly 
  correspond to rural, Midwest/South metro, and coastal/tier-1 metro markets."

BENCHMARK_BY_STATE_H3: By State — Typical $/sqft (mid-market SFR, 2026)

BENCHMARK_BY_STATE_CARDS (8 cards — each MUST name TWO specific factors):

  California (CA):
    Typical $/sqft: $280-$500 (mid-market SFR); coastal metros $500-$1,000+
    Key markets: Los Angeles, San Diego, Sacramento, Fresno
    ARV factors: High land value AND permit-driven premium
    Note: [California ARV factors reflect two specific dynamics. Factor 1: land 
          values are 40-60% of total value in coastal metros, vs 15-25% elsewhere. 
          Factor 2: permit-heavy renovations add $20-$40/sqft premium to quality 
          rehabs, but also create 3-6 month timing delays.]

  Texas (TX):
    Typical $/sqft: $150-$280 (mid-market SFR)
    Key markets: Dallas, Houston, San Antonio, Austin
    ARV factors: Population growth AND new construction competition
    Note: [Texas markets benefit from population inflow supporting demand. 
          Factor 1: Dallas and Austin metros have 2-3% annual population growth 
          supporting ARV stability. Factor 2: abundant new construction (especially 
          in Austin and DFW) creates competition — existing-home ARVs must stay 
          competitive with new-build pricing per sqft.]

  Florida (FL):
    Typical $/sqft: $180-$320 (mid-market SFR)
    Key markets: Tampa, Orlando, Jacksonville, Miami
    ARV factors: Population demand AND insurance cost drag
    Note: [Florida ARV has unique dynamics. Factor 1: population inflow (Tampa, 
          Orlando leading nationally) supports strong buyer demand. Factor 2: 
          hurricane insurance has tripled in many coastal markets since 2020, 
          which is now factored into ARV — homes in flood zones or pre-2000 
          construction see $20-$40/sqft ARV discount.]

  New York (NY):
    Typical $/sqft: $200-$600 (mid-market SFR — extreme regional variance)
    Key markets: NYC outer boroughs, Buffalo, Rochester, Albany, Hudson Valley
    ARV factors: Extreme regional variance AND permit cost premium
    Note: [NY has the widest intra-state ARV variance in the US. Factor 1: NYC 
          metro $/sqft is 3-4x upstate levels — Brooklyn SFR $500-$800 vs Buffalo 
          $80-$140. Factor 2: permit fees and compliance costs are 3-5% of project 
          value in NYC metro, adding significant ARV premium.]

  Arizona (AZ):
    Typical $/sqft: $200-$320 (mid-market SFR)
    Key markets: Phoenix, Tucson, Tempe, Scottsdale
    ARV factors: Rapid growth AND emerging climate risks
    Note: [Arizona ARV has two opposing forces. Factor 1: Phoenix metro has 
          been among fastest-growing US markets for 3+ years, supporting 3-5% 
          annual ARV growth. Factor 2: emerging wildfire and extreme heat 
          insurance premiums are starting to factor into ARVs — properties 
          with newer HVAC systems see $10-$20/sqft ARV premium.]

  Georgia (GA):
    Typical $/sqft: $180-$280 (mid-market SFR)
    Key markets: Atlanta, Savannah, Athens, Columbus
    ARV factors: Atlanta metro strength AND moderate construction costs
    Note: [Georgia ARV concentrated around Atlanta metro. Factor 1: Atlanta metro 
          has reliable 3-4% annual ARV growth and steady buyer demand for 
          renovated properties. Factor 2: non-union construction labor and 
          available contractor capacity keep rehab costs 10-15% below coastal 
          markets — lower rehab costs effectively raise realized ARV margin.]

  Ohio (OH):
    Typical $/sqft: $80-$150 (mid-market SFR — one of lowest in US)
    Key markets: Columbus, Cincinnati, Cleveland, Akron
    ARV factors: Low entry prices AND stagnant growth in many submarkets
    Note: [Ohio offers the lowest-$/sqft ARV calculation environment in top-state 
          list. Factor 1: entry $/sqft $85-$120 in many Cleveland and Akron 
          submarkets enables smaller investors to enter. Factor 2: ARV growth 
          has been flat-to-negative in several Rust Belt submarkets — Youngstown, 
          Toledo parts — requiring careful comp selection to avoid stale estimates.]

  Pennsylvania (PA):
    Typical $/sqft: $120-$320 (mid-market SFR — wide metro variance)
    Key markets: Philadelphia, Pittsburgh, Allentown, Harrisburg
    ARV factors: Metro variance AND historic rehab premium
    Note: [PA ARV varies widely by metro. Factor 1: Philly metro $200-$320 vs 
          Pittsburgh $120-$180 — nearly 2x difference within same state. Factor 
          2: older housing stock (many pre-1950 homes) commands 5-15% ARV 
          premium when renovated with period-appropriate finishes, but requires 
          higher rehab budgets.]

BENCHMARK_BY_STATE_TABLE (same 8 states in tabular format with 2-3 sentence notes each)

SOURCES_NOTE:       These ARV $/sqft ranges are synthesized from multiple industry 
                    sources, including Zillow Research regional price data, Redfin 
                    Market Insights, local MLS sold data, appraisal institute 
                    methodology, and 2026 market rate surveys.
                    
                    Methodology: ARV is not directly reported as aggregated market 
                    statistics (unlike home price indices or cap rates). Instead, 
                    these ranges are DERIVED by combining measurable inputs: recent 
                    closed sale $/sqft distributions, regional construction cost 
                    differences, and typical rehab-to-retail premiums under 2026 
                    conditions. Always verify with local recent comps — ranges 
                    shown are starting reference points, not market-reported ARV 
                    statistics.

----
STRATEGY_H2:        ARV Strategy — When and How to Use This Calculator
STRATEGY_INTRO:     How the ARV Calculator supports different real estate investment strategies

STRATEGY_FIX_AND_FLIP:
  Badge:            Fix and Flip Investor
  Paragraph 1:      [3-4 sentences — Fix and Flip investors use ARV Calculator as 
                    the SCREENING TOOL before committing to a deal. Enter 3-5 recent 
                    comps and your projected Rehab Budget. The calculator immediately 
                    shows Estimated ARV AND 70% Rule Max Offer — the maximum purchase 
                    price that supports healthy flip margins. Deals where your contract 
                    price is at or below 70% Rule Max Offer have built-in profit buffer.]
  Paragraph 2:      [2-3 sentences — practical workflow: screen 5-10 potential deals 
                    per week with ARV Calculator, shortlist those that pass 70% Rule 
                    with HIGH Confidence, then analyze shortlist deals in detail 
                    with Fix and Flip Calculator. Pair with Fix and Flip Calculator 
                    for full holding costs, financing, and timeline modeling.]

STRATEGY_BRRRR:
  Badge:            BRRRR Investor
  Paragraph 1:      [3-4 sentences — BRRRR investors need ARV to project refi proceeds 
                    and Capital Left. Enter comps for post-rehab property state, then 
                    toggle BRRRR Analysis to see 75% Rule All-In Target. Your total 
                    project cost (purchase + rehab + holding + HM costs) must stay 
                    at or below ARV × 0.75 for full capital recovery at standard 75% 
                    LTV refi.]
  Paragraph 2:      [2-3 sentences — use HIGH Confidence ARV for BRRRR analysis — 
                    a LOW Confidence ARV with refi capital planning creates significant 
                    execution risk. Pair with BRRRR Calculator for full Phase 1 + refi 
                    + Phase 3 rental modeling. Important: lender's refi appraisal may 
                    come in 3-7% below your ARV estimate — model Conservative scenarios.]

STRATEGY_WHOLESALER:
  Badge:            Wholesaler
  Paragraph 1:      [3-4 sentences — wholesalers use ARV Calculator to justify 
                    assignment fees to end-buyer investors. Present a credible ARV 
                    with HIGH Confidence tier backed by 4-5 recent comps — this 
                    establishes market-rate pricing and supports your assignment fee 
                    by showing the deal has genuine margin.]
  Paragraph 2:      [2-3 sentences — practical tip: run the calculator WITH your 
                    end-buyer's expected rehab budget to show THEM the 70% Rule Max 
                    Offer — if your contract + assignment fee is at or below 70% 
                    Rule Max Offer, the deal sells itself. If over the 70% Rule, 
                    justify with market-specific factors (hot neighborhood, light 
                    rehab scope, quick flip timeline).]

STRATEGY_AGENT:
  Badge:            Real Estate Agent
  Paragraph 1:      [3-4 sentences — agents advising investor clients use ARV 
                    Calculator to provide data-driven ARV estimates during deal 
                    analysis calls. Pull 3-5 recent comps from MLS, enter into 
                    calculator, show client Estimated ARV + Confidence Range + 70% 
                    Rule Max Offer in a single screen.]
  Paragraph 2:      [2-3 sentences — agents who want to deepen investor relationships 
                    can use ARV Calculator output as supplement to (not replacement 
                    for) formal BPO. Export ARV analysis as PDF to include in deal 
                    packages. Critical disclaimer for agents: always clarify this 
                    is an investor screening tool, not a formal appraisal.]

STRATEGY_COMPARISON:
  Badge:            Deal Comparison
  Title:            Using ARV Calculator to Compare Multiple Properties
  Body:             [3-4 sentences — the most powerful use of ARV Calculator: 
                    running ARV estimates for multiple competing deal opportunities 
                    with consistent methodology. Use the same comp quality standards 
                    (4-5 recent comps, under 180 days, within 1 mile) across all 
                    candidates. Rank deals by 70% Rule Max Offer or Capital Recovery 
                    potential (for BRRRR). Higher-confidence ARVs deserve more weight 
                    in ranking than lower-confidence estimates.]

----
APPLICATIONS_H2:    Applications of ARV Analysis
APPLICATIONS_INTRO: Six concrete ways investors use ARV Calculator

APPLICATION_1:
  Title:            Deal Screening Before Offer
  Body:             [2-3 sentences — quickly screen 5-10 potential deals per week 
                    before committing analysis time. Enter comps, review 70% Rule 
                    Max Offer, decide whether to proceed with detailed Fix and Flip 
                    or BRRRR Calculator analysis.]

APPLICATION_2:
  Title:            Offer Price Construction via 70% Rule
  Body:             [2-3 sentences — calculated ARV plus entered Rehab Budget 
                    immediately produces 70% Rule Max Offer. Makes you competitive 
                    on price while maintaining margin of safety. Deals at or below 
                    70% Rule ceiling have built-in flip/BRRRR viability.]

APPLICATION_3:
  Title:            BRRRR Capital Recovery Planning
  Body:             [2-3 sentences — BRRRR investors toggle the BRRRR Analysis option 
                    to see 75% Rule All-In Target. Keep your total project cost at 
                    or below this target to achieve full capital recovery at 75% 
                    LTV refi. Critical for BRRRR thesis viability.]

APPLICATION_4:
  Title:            Wholesale Assignment Justification
  Body:             [2-3 sentences — wholesalers use HIGH Confidence ARV backed 
                    by 4-5 recent comps to justify assignment fees. Show end-buyer 
                    the 70% Rule Max Offer — if contract plus assignment is at or 
                    below this, the deal's margin justifies your fee.]

APPLICATION_5:
  Title:            Comp Quality Audit
  Body:             [2-3 sentences — before relying on any ARV estimate, review 
                    Comp Comparison Table. Watch for outliers (flagged >25% PPSF 
                    deviation), stale comps (>180 days), or sqft mismatches. 
                    Manually exclude problematic comps to tighten Confidence Range.]

APPLICATION_6:
  Title:            Investor Memo Prep
  Body:             [2-3 sentences — for syndicated or partnered flip/BRRRR deals, 
                    export ARV + Confidence Range + 70%/75% Rule analysis as PDF. 
                    Include in partner pitches or private lender packages as 
                    supporting deal data. Always include Confidence Tier disclosure.]

----
INDUSTRY_STANDARDS_H2:   Industry Standards & Appraisal Methodology
INDUSTRY_STANDARDS_INTRO: How comparable sales methodology fits into professional appraisal and investor practice.

STANDARD_1:
  Title:            Comparable Sales Method (Appraiser Foundation)
  Points (4 bullets):
    - "Comparable Sales (comps) method is the industry foundation — used by licensed appraisers, BPO providers, and professional investors"
    - "Sales Comparison Approach is one of three appraisal methods (alongside Cost Approach and Income Approach), and primary method for residential ARV"
    - "Appraisers typically use 3-6 recent comps with emphasis on proximity, recency, and similarity"
    - "Adjustments for differences in bed/bath/sqft/condition are applied using market-derived rates — the calculator uses industry-standard rules of thumb as starting defaults"

STANDARD_2:
  Title:            Professional ARV Sources (when to use each)
  Intro:            [2 sentences about how professional ARV is derived in different contexts]
  Points (4 bullets):
    - "Licensed Appraisal ($400-$700) — required for lender financing, professionally defended, highest authority"
    - "Broker Price Opinion or BPO ($75-$150) — agent-provided quick estimate, good for screening"
    - "Automated Valuation Models or AVM (Zillow Zestimate, Redfin Estimate) — free but broad, 5-15% error common"
    - "This calculator — free, user-driven, tied to specific comps user selects; SCREENING ONLY"

STANDARD_3:
  Title:            Investor ARV Benchmarks (2026)
  Points (5 bullets):
    - "Experienced flippers aim for HIGH Confidence ARV with 4-5 recent comps before making offers"
    - "Professional wholesalers verify ARV with BPO when contract value exceeds $250K"
    - "Lender refi appraisal comes in 3-7% below investor ARV estimate on average — model Conservative for BRRRR"
    - "ARV estimates are valid for 3-6 months; re-estimate with fresh comps for deals that take longer"
    - "Never rely on single-point ARV — always use Confidence Range when making offers or writing contracts"

----
LIMITATIONS_H2:     Limitations of ARV Calculator
LIMITATIONS_INTRO:  [1 sentence — "ARV Calculator is a powerful screening tool, but it has real methodology limits you should understand before making decisions."]

LIMITATION_1:
  Title:            Not a Substitute for Professional Appraisal
  Body:             [3-4 sentences — critical disclaimer. This calculator is a 
                    SCREENING TOOL, not a substitute for licensed appraisal or 
                    Broker Price Opinion. Lenders will NOT accept this ARV for 
                    loan underwriting. For final purchase or lending decisions, 
                    always verify with a licensed appraiser or BPO from a local 
                    agent. The calculator's output is designed to inform, not 
                    replace, professional valuation.]

LIMITATION_2:
  Title:            Quality Depends on User-Selected Comps
  Body:             [3-4 sentences — the ARV is only as good as the comps you 
                    enter. Wrong sqft data, non-arms-length sales, unusual property 
                    conditions, or stale comps will produce wrong ARV. The calculator 
                    flags outliers (>25% PPSF deviation) and stale comps (>180 days) 
                    but cannot verify the underlying sale data. Always cross-check 
                    comps against MLS, county records, or recent agent contact.]

LIMITATION_3:
  Title:            Industry Rules-of-Thumb Adjustments
  Body:             [3-4 sentences — adjustment rates ($5K per bedroom, $10K per 
                    full bath, $5K per half bath, $10K per garage space) are 
                    industry rules of thumb derived from appraiser practice. They 
                    are NOT market-derived statistics. Actual market-specific 
                    adjustment rates vary — in high-cost markets adjustments may 
                    be 2-3x the default; in low-cost markets they may be 50-70% 
                    of default. Advanced mode allows overriding adjustment rates 
                    for your specific market.]

LIMITATION_4:
  Title:            Point-in-Time Market Estimate
  Body:             [3-4 sentences — ARV reflects current market conditions based 
                    on your comps. It does NOT model future appreciation, market 
                    downturns, or seasonal timing effects. ARV estimates are valid 
                    for approximately 3-6 months. For deals taking longer to close 
                    or renovate, re-estimate with fresh comps before making final 
                    offer or closing decisions.]

WHEN_NOT_TO_USE_H3: When Not to Use This Calculator
WHEN_NOT_TO_USE_LIST (4 bullets):
  - "Lender loan underwriting: Use licensed appraisal — this calculator is NOT accepted by lenders for loan approval"
  - "Tax assessment appeals: Use licensed appraisal — tax authorities require professional valuation"
  - "New construction valuation: ARV methodology assumes existing property with recent comps; new construction uses different approach (Cost Approach)"
  - "Commercial or mixed-use property: This calculator is residential-only; commercial ARV uses Income Approach methodology"

----
COMMON_MISTAKES_H2: Common Mistakes When Calculating ARV
COMMON_MISTAKES_INTRO: [1 sentence introducing the 5 mistakes most investors make when estimating ARV]

MISTAKE_1:
  Title:            Using stale comps (over 6 months old)
  Body:             [3-4 sentences — 2026 markets shift faster than pre-2020 eras. 
                    A 9-month-old comp from a 2025 hot market may overstate current 
                    ARV by 5-8% after the market cooled. Calculator applies recency 
                    weighting but very old comps (180+ days) should be viewed 
                    skeptically. Always prefer comps under 90 days when available.]

MISTAKE_2:
  Title:            Over-optimistic Subject Condition setting
  Body:             [3-4 sentences — investors commonly set Subject Condition to 
                    "Excellent" assuming premium rehab execution. In reality, most 
                    rehabs produce "Good" condition, not "Excellent". Setting 
                    Excellent applies × 1.10 multiplier over Average baseline — 
                    overstating ARV by 5% vs realistic Good. Unless you have a true 
                    premium rehab plan with high-end finishes, default to Good.]

MISTAKE_3:
  Title:            Ignoring outlier warnings
  Body:             [3-4 sentences — calculator flags comps with PPSF >25% from 
                    median as potential outliers. Investors sometimes ignore these 
                    warnings because the flagged comp "supports" a higher ARV. This 
                    is confirmation bias. Outliers distort Weighted Average $/sqft 
                    and widen Confidence Range. Review each outlier carefully — 
                    either verify the data or manually exclude.]

MISTAKE_4:
  Title:            Treating ARV as a single number
  Body:             [3-4 sentences — the ARV display shows a single number ($285K), 
                    but the Confidence Range (±$10K) is the honest signal. Professional 
                    investors make offers based on the lower bound of Confidence Range, 
                    not the point estimate. Using single-point ARV for offers 
                    systematically overbids — the lender appraisal will often come 
                    in closer to the lower bound.]

MISTAKE_5:
  Title:            Using ARV Calculator for lender ARV
  Body:             [3-4 sentences — this calculator is a SCREENING tool, not a 
                    substitute for licensed appraisal. Lenders require appraisals 
                    from their approved AMC (Appraisal Management Company) panel — 
                    they will NOT accept this calculator's output for loan 
                    underwriting. Always budget for professional appraisal ($400-$700) 
                    in your acquisition costs for any deal requiring financing.]

----
FAQ_H2:             Frequently Asked Questions

FAQ_Q1:             What is ARV in real estate?
FAQ_A1:             [3-4 sentences — ARV stands for After Repair Value, the 
                    projected market value of a property AFTER renovation is 
                    complete. Used by Fix and Flip investors, BRRRR investors, 
                    wholesalers, and agents advising investor clients. ARV is 
                    an ESTIMATE based on comparable recent sales of similar 
                    renovated properties, not a precise calculation.]

FAQ_Q2:             How do I calculate ARV for a property?
FAQ_A2:             [Must include these 3 elements:
                     1. The methodology: find 3-5 recent comparable sales of similar 
                        properties, compute weighted average $/sqft, apply adjustments 
                        for bedroom/bathroom/garage differences, multiply by subject sqft.
                     2. One brief example: "5 recent comps average $155/sqft. Subject 
                        is 1,800 sqft. Base ARV: $155 × 1,800 = $279,000."
                     3. Maximum 4 sentences total. Do NOT write a long tutorial.]

FAQ_Q3:             How many comps do I need for a reliable ARV?
FAQ_A3:             [3-4 sentences — minimum 3 comps for a usable estimate; aim 
                    for 4-5 for HIGH Confidence. Professional appraisers use 
                    3-6 comps. Fewer than 3 produces LOW Confidence with wide 
                    Confidence Range — not reliable for offers. More than 5 
                    adds marginal value; quality matters more than quantity.]

FAQ_Q4:             What is the 70% Rule and how does it use ARV?
FAQ_A4:             [3-4 sentences — the 70% Rule is a Fix and Flip heuristic: 
                    Max Offer equals ARV × 0.70 minus Rehab Budget. It provides 
                    a 30% margin for profit, financing costs, and execution risk. 
                    Calculator shows 70% Rule Max Offer automatically when you 
                    enter Rehab Budget. For BRRRR deals, the analogous rule is 
                    the 75% Rule: All-In Cost ≤ ARV × 0.75 supports full capital 
                    recovery at 75% LTV refi.]

FAQ_Q5:             How recent should comps be for accurate ARV?
FAQ_A5:             [3-4 sentences — under 90 days is ideal; 90-180 days acceptable; 
                    over 180 days carries significant risk in 2026 markets. 
                    Post-pandemic markets shift faster than pre-2020 — a 6-month-old 
                    comp in a cooling market may overstate current ARV by 5-10%. 
                    Calculator applies recency weighting automatically but always 
                    prefer fresh comps.]

FAQ_Q6:             Is this ARV accepted by lenders for loan underwriting?
FAQ_A6:             [3-4 sentences — NO. This calculator is a screening tool, not 
                    a substitute for licensed appraisal. Lenders require appraisals 
                    from their approved Appraisal Management Company (AMC) panel 
                    and will NOT accept calculator output for loan underwriting. 
                    For financed deals, budget $400-$700 for professional appraisal 
                    in your acquisition costs.]

FAQ_Q7:             What is the Confidence Range and how should I use it?
FAQ_A7:             [3-4 sentences — Confidence Range reflects the uncertainty in 
                    your ARV estimate. Tight comp data (similar properties, recent 
                    sales) produces narrow range (±$5-10K typical); scattered comp 
                    data produces wider range (±$20-40K or more). Make offers based 
                    on the lower bound of Confidence Range — not the point estimate 
                    — to build margin of safety against lender appraisal variance.]

FAQ_Q8:             Can I use this ARV for Fix and Flip or BRRRR deal analysis?
FAQ_A8:             [3-4 sentences — yes, this is exactly the use case. Enter your 
                    comps and Rehab Budget to see ARV plus 70% Rule Max Offer (for 
                    Fix and Flip). Toggle BRRRR Analysis to see 75% Rule All-In 
                    Target (for BRRRR). Then use Fix and Flip Calculator or BRRRR 
                    Calculator for complete deal analysis including holding costs, 
                    financing, and timeline modeling.]

----
RELATED_CALCULATORS:
  (3-4 related calculators from the project, real slugs)

  1. fix-and-flip-calculator
  2. brrrr-calculator
  3. rental-property-calculator
  4. cap-rate-calculator

----
SCHEMA_TYPE:        Calculator
SCHEMA_NAME:        ARV Calculator
SCHEMA_DESCRIPTION: [160-char description emphasizing After Repair Value estimation, comparable sales methodology, and 70% Rule integration]
SCHEMA_URL:         https://realcalc.com/arv-calculator
SCHEMA_FEATURE_LIST: ARV estimation, comparable sales methodology, 3-5 comps input, bedroom/bathroom/garage adjustments, condition multiplier, confidence range, 70% Rule Max Offer, 75% Rule All-In Target, outlier detection, PPSF spread penalty, 3 calculation modes, sensitivity analysis, PDF export

FAQ_SCHEMA:
  All 8 Q&A from above formatted for JSON-LD FAQPage schema.

----

---

## OUTPUT CHECKLIST

Before finalizing, verify:

- [ ] **TITLE uses hardcoded fallback "ARV Calculator — Comps & Confidence | RealCalc" (48 chars) — no custom generation (v2 round 2 simplification)**
- [ ] META DESCRIPTION is 150-160 chars, mentions "comparable sales", "Confidence Range", or "70% Rule"
- [ ] H1 contains primary keyword
- [ ] Overview has exactly 4 paragraphs
- [ ] **OVERVIEW_P1 uses at least 2 of approved secondary keywords VERBATIM: "after repair value calculator", "arv real estate calculator", "comparable sales calculator", "home value estimator for investors"**
- [ ] **NATURAL READABILITY: keywords integrated with natural sentence flow**
- [ ] **ARV is ESTIMATE, NOT calculation — language reflects this throughout (uses "estimates", "projects", "approximates", NEVER "calculates", "determines")**
- [ ] **Primary metric is ARV $ (single number) + Confidence Range (shown prominently alongside)**
- [ ] **Hybrid method documented: Comps + Adjustments (3-5 comps required)**
- [ ] **3-5 comps with graduated confidence (fewer=LOW, 3=MEDIUM, 4-5=HIGH)**
- [ ] **Confidence Tiers show ESTIMATE QUALITY, NOT deal quality — explicit distinction made**
- [ ] **70% Rule Max Offer and 75% Rule All-In Target integration explained in WHAT_IS, STEP_5, APPLICATIONS, FAQ**
- [ ] **Cross-link prominently to Fix and Flip Calculator and BRRRR Calculator**
- [ ] **"Not a substitute for professional appraisal" disclaimer in 4 places: Overview P4, How to Use, Limitations, FAQ**
- [ ] How to Use has 5 numbered steps + 4 pro tips + 3 confidence tiers (not 6)
- [ ] Formula section has step-by-step + formula box + visual schema + worked Charlotte NC example
- [ ] **FORMULA_INTRO_BOX explicitly states "ARV is ESTIMATE, not calculation"**
- [ ] **FORMULA section includes CRITICAL METHODOLOGICAL RULES: Default Avg Comp = Average, Condition Multiplier only when differs, Outlier Detection before normalization, MAX CAP 40% with PARTIAL REDISTRIBUTE, PPSF Spread Penalty, Lot Size DISABLED by default**
- [ ] **FORMULA_EXAMPLE result falls in $275,000-$290,000 (HIGH Confidence Charlotte NC)**
- [ ] **MANDATORY EXECUTION RULES for 15 worked-example steps: no summarizing, no skipping**
- [ ] **STEP_BY_STEP uses strict 15 numbered steps (matches worked example) — NOT 10-12 (v2 round 2 fix)**
- [ ] **MANDATORY EXECUTION RULES states "15 steps below" matching both STEP_BY_STEP and worked example (v2 round 2 fix)**
- [ ] **Step 8 (both STEP_BY_STEP and worked example) verifies weights non-negative after penalties — clamp and renormalize (v2 round 2 fix)**
- [ ] **Worked Example Step 2 lists all adjustment values explicitly: +$5K bedroom, +$10K full bath, +$5K half bath, +$10K garage, +$500 year, +$5/sqft lot (v2 round 2 fix)**
- [ ] **Confidence Range FORMULA_BOX includes UI display format "Lower Bound – Upper Bound (± deviation)" with example (v2 round 2 fix)**
- [ ] **TITLE RULE SIMPLIFIED (v2 round 2): ALWAYS use hardcoded fallback "ARV Calculator — Comps & Confidence | RealCalc" (48 chars). No custom title generation allowed.**
- [ ] **CRITICAL METHODOLOGICAL RULES include "All weights must remain non-negative after penalties — clamp negative to 0, renormalize" (v2 round 2 fix)**
- [ ] **STOP-RATHER-THAN-APPROXIMATE RULE: if step cannot be completed precisely, STOP and output "worked example not generated"**
- [ ] **GRACEFUL SIMPLIFICATION FALLBACK: if exact numeric execution not possible but methodology CAN be preserved, simplify step without skipping required rules (v2 fix)**
- [ ] **ARV rounded to nearest $1,000 (NOT $500) — matches RIS v3 spec (v2 fix)**
- [ ] **Confidence Range formula uses Score-based percentage (95-100→±2.5%, 85-94→±3.5%, 75-84→±5%, 65-74→±6.5%, 55-64→±8%, 40-54→±10%, <40→±12%), NOT σ statistical formula (v2 fix)**
- [ ] **Adjustment values: $5K per bedroom, $10K per full bath, $5K per half bath, $10K per garage space — matches RIS spec (v2 fix)**
- [ ] **Condition Multiplier STEP 10 explicitly states "ONLY if Subject differs from Avg Comp Condition. If equal → × 1.00 (no adjustment)" (v2 fix)**
- [ ] **Confidence Tier terminology uses HIGH/MEDIUM/LOW (NOT Strong/Moderate/Low) for RIS consistency (v2 fix)**
- [ ] **POST-CALCULATION VERIFICATION includes 4 checks: ARV range, Confidence Tier, Subject Implied $/sqft sanity, 70% Rule Max Offer**
- [ ] RIS section has 3 Confidence tiers with market context for each
- [ ] Benchmarks by Type has 5 property types (SFR starter, SFR move-up, Small Multi, Condo, Townhouse)
- [ ] Benchmarks by State has all 8 states (cards + table) with $/sqft ranges
- [ ] **Each state note cites AT LEAST TWO specific factors — land value, permits, labor costs, insurance, population, regulatory, construction age, etc.**
- [ ] **All benchmarks labeled as "industry-standard estimates — not market-reported ARV statistics"**
- [ ] Strategy has 5 blocks: Fix and Flip, BRRRR, Wholesaler, Agent, Deal Comparison
- [ ] Applications has 6 use cases including 70% Rule / 75% Rule references
- [ ] Industry Standards covers Comparable Sales Method + Professional ARV Sources + Investor ARV Benchmarks
- [ ] **"NO market-reported ARV data" emphasized — ARV is derived, not reported**
- [ ] Limitations has 4 items (Not a Substitute for Appraisal, Quality Depends on Comps, Rules-of-Thumb Adjustments, Point-in-Time Estimate) + "When Not to Use" list
- [ ] Common Mistakes has 5 items (Stale Comps, Over-Optimistic Condition, Ignoring Outliers, Single-Point ARV, Lender ARV)
- [ ] FAQ has exactly 8 Q&A, each with 3-4 sentence answers
- [ ] **FAQ_A2 includes methodology + numeric example + max 4 sentences (no mini-tutorial)**
- [ ] FAQ_Q4 specifically explains 70% Rule (and links to BRRRR 75% Rule)
- [ ] FAQ_Q6 explicitly states "NOT accepted by lenders for loan underwriting"
- [ ] FAQ_Q7 explains Confidence Range and offer construction
- [ ] Related Calculators uses real project slugs (fix-and-flip, brrrr, rental-property, cap-rate)
- [ ] Schema block is complete
- [ ] **Placeholders in content descriptions use text instructions, not number examples**
- [ ] No pre-2022 historical benchmarks used
- [ ] **"Honest uncertainty" language throughout — uses estimates, projects, approximates**
- [ ] **Comp Comparison Table discussion includes manual include/exclude functionality**

**Output only the SEO content package in Markdown. Do not output code. Do not output HTML. Do not output Vue. This is a content document that will be consumed by the Master Prompt later alongside the RIS spec.**
