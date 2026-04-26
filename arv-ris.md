# RIS Prompt — ARV Calculator (v3 final)

You are a senior real estate financial analyst and calculator designer. Your job is to produce a **complete RIS specification** for a new real estate investment calculator.

The output of this prompt becomes the single source of truth for calculator logic — formulas, fields, thresholds, badges, scenarios. It will later be combined with a SEO Package and a Master Prompt to generate the actual Vue page.

---

## YOUR TASK

Write a RIS specification for:

```
Calculator Name:   ARV Calculator
Category:          Real Estate Investment / Property Valuation
Primary keyword:   arv calculator
Target audience:   US real estate flip investors, BRRRR investors, wholesalers, 
                   agents pricing investor properties — anyone who needs to 
                   estimate After Repair Value before making an offer
Traffic priority:  Priority 2 (estimated 15K-25K searches/month, high companion 
                   value to Fix and Flip and BRRRR Calculator traffic)
```

---

## CRITICAL DISTINCTIONS TO PRESERVE

This calculator is fundamentally different from other RealCalc calculators. Every other calculator is arithmetic — you plug in numbers, formulas give an exact answer. ARV is estimation — there is no "correct" ARV, only more or less accurate estimates.

Every rule, tier, and piece of UX must reflect this reality: ARV is a confidence-weighted estimate, not a calculation.

### Critical rules

1. ARV is an ESTIMATE, not a calculation.
   - Every other RealCalc tool computes precise numbers (Cap Rate, DSCR, Profit)
   - ARV is inherently imprecise — it is a judgment call informed by comps
   - UI, copy, and outputs must reinforce this throughout — never claim "Your ARV is $285,000"
   - Always: "Estimated ARV: $285,000" with Confidence Range $275K-$295K displayed alongside

2. PRIMARY metric = ARV $ + Confidence Range (co-primary display)
   - Headline: single ARV number (for SEO clarity and user simplicity)
   - Immediately below: Confidence Range as plus/minus dollar amount or as dollar Y to dollar Z
   - Example display format:
     ```
     Estimated ARV
     $285,000
     
     Confidence Range: $275,000 to $295,000
     Medium confidence based on 4 comps averaging 45 days old
     ```

3. Hybrid Method: Comps + Standard Adjustments
   - User inputs 3-5 comparable sales (recent sold properties)
   - Each comp has: sale price, sqft, bedrooms, bathrooms, sale date, condition, distance
   - Calculator computes weighted average price per sqft from comps
   - Applies standard adjustments for differences between subject and avg comp
   - Outputs: Raw ARV (comps only) + Adjusted ARV (with adjustments) + Confidence Range

4. 70% Rule and 75% Rule Integration (Max Offer Outputs)
   - Once ARV is estimated, calculator auto-shows two Max Offer numbers:
     - 70% Rule Max Offer (Fix and Flip) = ARV × 0.70 − Rehab Budget
     - 75% Rule All-In Target (BRRRR) = ARV × 0.75
   - These are derived metrics shown prominently
   - Rehab Budget is optional input (required for 70% Rule Max Offer to show)
   - This integration is what makes ARV Calculator central to flip/BRRRR analysis

5. Confidence scoring is CRITICAL
   - Not all ARV estimates are equally reliable
   - Calculator rates confidence based on:
     - Number of comps used (3 = low, 4 = medium, 5+ = high)
     - Recency of comps (sold within 90 days = high, 90-180 = medium, 180+ = low)
     - Distance of comps (under 0.5 mi = high, 0.5-1 mi = medium, over 1 mi = low)
     - Similarity of comps (same bed/bath = high, different = lower)
   - Display confidence as 3 tiers: Low / Medium / High
   - Wider Confidence Range for Low confidence, narrower for High

6. Price per Square Foot (PPSF) is the primary math driver
   - For each comp: PPSF = Sale Price divided by Sqft
   - Weighted average PPSF used as base
   - Weighting by: recency (most recent weighted higher), distance (closer weighted higher), similarity (closer match weighted higher)
   - Subject ARV = Weighted Avg PPSF × Subject Sqft + Adjustments

7. Standard Adjustments (appraiser methodology)
   - Bedroom difference: plus/minus dollar 5,000 per bedroom (subject has more = plus, fewer = minus)
   - Bathroom difference: plus/minus dollar 10,000 per full bath, plus/minus dollar 5,000 per half bath
   - Garage difference: plus/minus dollar 5,000 per car space
   - Lot size adjustment: plus/minus dollar 1-2 per sqft of lot difference
   - Condition adjustment: Poor = minus 15%, Fair = minus 7%, Average = 0%, Good = plus 5%, Excellent = plus 10% multiplier on base ARV
   - These are industry-standard appraiser conventions
   - User can override defaults in advanced mode

8. No multi-year projection — single point-in-time estimate
   - Unlike Rental Property or BRRRR, no yearly math
   - ARV is "value TODAY after rehab is complete"
   - No appreciation modeling (that would compound estimation error)

9. Before-tax only
   - ARV itself is not a tax concept (it is a value estimate)
   - But derived Max Offer outputs assume before-tax analysis
   - Content mentions tax treatment of flip profit (ordinary income) as companion info

10. 2026 market context
    - Flip and BRRRR investors need reliable ARV estimates more than ever (margins compressed)
    - ARV miss of 5-10% is common — industry benchmark
    - Professional appraisers target plus/minus 3-5% accuracy; self-service ARV tools typically plus/minus 8-15%
    - Calculator should communicate this reality — it is a screening tool, not a substitute for BPO or appraisal

### 2026 market context

With hard money at ~12% and flip margins compressed:
- Every $10K of ARV miss can eliminate 20-30% of flip profit margin
- BRRRR Capital Left swings $7,500 for every $10K ARV miss at 75% LTV refi
- Conservative ARV estimation is more valuable than ever
- Professional investors use 3+ sources: this calculator, BPO, and sometimes pre-rehab appraisal

---

## RULES

1. Accuracy is bounded. Unlike other calculators, no single number is "correct". Provide estimates with clearly communicated confidence levels.

2. US market only. All benchmarks, examples, adjustment values reflect 2026 US real estate appraisal conventions.

3. Methodological transparency. The calculator must show its work — PPSF, adjustments, confidence weighting — so users can learn appraiser methodology.

4. Tolerance rule (looser than other calculators):
   - plus/minus 3% for ARV percentage calculations
   - plus/minus $500 for ARV dollar outputs (estimation tolerance)
   - plus/minus $100 for derived Max Offer outputs

5. Benchmark integrity. All adjustment values labeled as "industry-standard appraiser conventions, actual values vary by market."

6. Follow exact structure below. 19 sections, same order as all other RIS specs.

---

## REQUIRED OUTPUT STRUCTURE

### 1. METRIC DEFINITION

- Primary metric: Estimated ARV $ (After Repair Value)
- Co-primary display: Confidence Range ($X to $Y format, reflects estimation uncertainty)
- What it measures: 
  - ARV = Projected market value of subject property AFTER rehab is complete
  - NOT current as-is value
  - NOT future appreciated value
  - Value at the moment renovation is done and property is ready for sale or rent
- Why investors use it:
  - Critical input for Fix and Flip profit analysis (drives Max Offer via 70% Rule)
  - Critical input for BRRRR capital recovery analysis (drives refi proceeds via 75% LTV)
  - Wholesalers use it to price assignment fees
  - Agents use it to advise investor clients
- Time dimension: Point-in-time estimate (no projection). Value TODAY after rehab complete.
- Related metrics as DERIVED:
  - Weighted Average PPSF (from comps)
  - 70% Rule Max Offer (for Fix and Flip)
  - 75% Rule All-In Target (for BRRRR)
  - Maximum Purchase Price (calculated with rehab and target profit/capital-left)
  - Comp Quality Score (confidence indicator)
- What it explicitly EXCLUDES in v1:
  - Automated comp pulling (user must supply comps manually)
  - MLS integration
  - Appreciation forecasting
  - Detailed scope-of-work rehab estimation (use separate Rehab Cost Calculator)
  - Automated distance calculation (user inputs distance in miles)

### 2. FORMULA

Definitions (single source of truth — prevents confusion with Fix and Flip / BRRRR formulas):

```
Per-Comp Price Per Square Foot (PPSF):
  Comp PPSF = Comp Sale Price ÷ Comp Sqft

Per-Comp Weight (for weighted averaging):
  Base Weight = 1.0
  
  Recency Weight Multiplier:
    Sold within 90 days:        1.0
    Sold 91-180 days ago:       0.75
    Sold 181-365 days ago:      0.5
    Sold over 365 days ago:     0.25 (flag as low quality)
  
  Distance Weight Multiplier:
    Under 0.5 miles:            1.0
    0.5-1.0 miles:              0.75
    1.0-2.0 miles:              0.5
    Over 2.0 miles:             0.25 (flag as low quality)
  
  Similarity Weight Multiplier:
    Same bed/bath count:        1.0
    Plus or minus 1 bed OR bath: 0.75
    Plus or minus 2 bed OR bath: 0.5
    More difference:             0.25
  
  Final Per-Comp Weight = Base × Recency × Distance × Similarity

Sqft Mismatch Check (confidence downgrade trigger):

  PPSF (price per sqft) methodology breaks down when subject and comp sizes diverge 
  too much. A 2,000 sqft subject compared against 1,200 sqft comps will produce 
  unreliable PPSF estimates because larger homes typically have different PPSF 
  curves than smaller homes.
  
  Rule:
    IF |Subject Sqft − Avg Comp Sqft| ÷ Avg Comp Sqft > 30%:
      Step 1: Flag each individual mismatched comp with warning 
              "Comp [N] sqft differs significantly — may distort PPSF"
      Step 2: Force Confidence Tier DOWNGRADE by one level:
              - If Score would have been HIGH (80-100): downgrade to MEDIUM
              - If Score would have been MEDIUM (60-79): downgrade to LOW
              - If already LOW: add strong warning banner
      Step 3: Widen Confidence Range by additional ±2% to reflect methodology risk
      Step 4: Display prominent message above result:
              "Subject property sqft differs from comp average by [X]% — estimate 
              accuracy may be reduced. Consider finding comps closer in size to subject."
  
  Rationale: PPSF is not a linear function of size. A 1,200 sqft comp at $150/sqft 
  does NOT imply a 2,000 sqft property will also be $150/sqft — typically larger 
  homes have LOWER PPSF (economy of scale on fixed costs like land, systems). 
  Flagging this condition prevents users from treating size-mismatched estimates 
  as reliable.

PPSF Outlier Detection (applied BEFORE weight normalization):

  Step 1: Calculate median PPSF across all comps.
  Step 2: For each comp, calculate deviation = |Comp PPSF − Median PPSF| ÷ Median PPSF
  Step 3: Classify each comp:
    - Deviation ≤ 25%: normal comp, full weight eligible
    - Deviation > 25%: OUTLIER — apply penalties:
      - Weight reduced by 50% (multiply raw weight by 0.5)
      - UI warning shown to user: "Comp [N] PPSF deviates [X]% from median — consider reviewing"
      - User can manually exclude outlier from calculation
    - Deviation > 40%: EXTREME OUTLIER — apply aggressive penalties:
      - Weight reduced by 75% (multiply raw weight by 0.25)
      - Strong UI warning: "Comp [N] is an extreme outlier — recommended to exclude"
      - If automatic exclusion mode enabled, remove from calculation entirely
  
  Rationale: A single high-PPSF comp can pull ARV upward even with weight normalization.
  For example: 4 comps at $130/sqft, 1 comp at $200/sqft. Even at 40% cap on the outlier,
  it still adds ~$7/sqft to weighted average — artificially inflating ARV. The 50-75% 
  weight reduction further limits this influence.

PPSF Spread Penalty (applied AFTER outlier detection, BEFORE weight normalization):

  Purpose: When comp PPSFs are widely scattered (noisy data), ARV estimates become 
  less reliable even if no individual comp qualifies as an outlier. The PPSF Spread 
  Penalty applies an additional precision degradation to recognize this noise.

  Calculation:
    Step 1: Compute Coefficient of Variation (CV) of comp PPSFs:
      CV = (standard deviation of PPSFs) ÷ (mean of PPSFs) × 100

    Step 2: Apply penalty based on spread severity:
    
      IF CV ≤ 15% (tight data):
        No penalty. Weights and range proceed as calculated.
      
      IF CV > 15% AND ≤ 30% (moderate spread):
        Reduce all comp weights by 5% (uniformly, before normalization)
        Widen Confidence Range by additional ±0.5%
      
      IF CV > 30% (noisy data):
        Reduce all comp weights by 10% (uniformly, before normalization)
        Widen Confidence Range by additional ±1%
        Downgrade Confidence Score by 5 points
        Display warning: "Comp PPSFs vary widely — estimate accuracy reduced. 
         Consider finding more similar comps."

  Rationale: Tight PPSF clustering indicates the market has a consistent price signal 
  for this property type/location. Wide scatter means the market signal is noisy, 
  making any single-point estimate inherently less reliable. The penalty is SMALL on 
  weights but DIRECT on the range — because the math still works (we take a weighted 
  average), but the CONFIDENCE in that number is lower. Range widening honestly 
  reflects this.

Weight Normalization and Priority Rules (critical — prevents weight distortion):

  PRIORITY ORDER (when factors conflict, apply in this order):
    1. Recency has highest priority (stale comps are dangerous regardless of distance/similarity)
    2. Distance has second priority (location drives value)
    3. Similarity has third priority (can partially compensate via adjustments)
  
  Practical implication:
    - A fresh but distant comp (30 days, 1.2 miles) may outweigh an old nearby comp 
      (400 days, 0.3 miles) — because recency dominates
    - A very similar but old comp (30 days old, same beds/baths/sqft) still scores 
      higher than a fresh but dissimilar comp (if recency is equal, similarity breaks tie)

  NORMALIZATION RULE (applied after computing all raw weights):
    Step 1: Calculate sum of raw weights across all comps.
    Step 2: Normalize so each comp's share = raw weight ÷ sum of all raw weights.
    Step 3: Apply CAPS and FLOORS:
      - MAX CAP: no single comp may exceed 40% of total weight
        
        PARTIAL REDISTRIBUTE RULE (critical — prevents weight dilution to weak comps):
        When the top comp's weight is capped at 40%:
          - Calculate Excess = (original weight) − 40%
          - Redistribute ONLY 50% of Excess proportionally across other comps
          - DISCARD the remaining 50% of Excess entirely (do NOT assign to any comp)
          - This discarded 50% is recorded as "confidence loss" — reduces Confidence Score 
            by (Excess × 50) points (up to 15 point penalty maximum)
        
        Rationale: If a single comp is clearly the best match, full redistribution 
        "smears" its quality onto weaker comps that don't deserve that weight. It is 
        better to lose some precision (marked as reduced confidence) than to artificially 
        elevate weak comp influence. The capped weight still ensures multi-comp averaging, 
        but doesn't reward weak comps for being present.
        
        Example: top comp raw share = 60%. After cap at 40%, Excess = 20%. 
          Redistributed to others: 10% (half of excess, spread proportionally)
          Discarded as confidence loss: 10% (reduces Confidence Score by 10 * 50% = 5 pts)
          Final weights: top comp 40%, others share +10% total, sum = 90% of total volume, 
          treated as normalized to 100% but Confidence Score downgraded.
      
      - MIN FLOOR: no comp may drop below 5% unless flagged as outlier
        (if a comp's normalized weight < 5% and it's NOT an outlier, raise it to 5% 
         and reduce other comps proportionally)
      - Outlier comps (PPSF >25% from median) can drop below 5% — they represent 
        bad data and should have reduced influence
    Step 4: Re-sum normalized weights — must equal 100% (1.0).
  
  Rationale: Without normalization, a single fresh nearby comp can dominate ARV 
  calculation (e.g., 70%+ weight), making the estimate effectively one-comp-driven. 
  The 40% cap forces the model to consider multiple data points even when one comp 
  is obviously best. The partial-redistribute rule prevents the inverse problem — 
  weak comps getting artificially high weight at the expense of true precision.

Weighted Average PPSF:
  Weighted Avg PPSF = Σ(Comp PPSF × Normalized Weight)
  (sum of all weights = 1.0 after normalization, so no division needed)
  
  Edge case: If all comps fail quality filter (all weights = 0 after outlier exclusion), 
  return error "All comps failed quality filter — add more comps or verify data"
```

Base ARV calculation:

```
Raw ARV (before adjustments):
  Raw ARV = Weighted Avg PPSF × Subject Sqft

This is the baseline estimate from comps alone. Does not account for 
differences between subject and avg comp characteristics.
```

Adjustments (applied to Raw ARV):

```
Bedroom Adjustment:
  If Subject Beds > Avg Comp Beds:
    Bedroom Adjustment = +$5,000 × (Subject Beds − Avg Comp Beds)
  If Subject Beds < Avg Comp Beds:
    Bedroom Adjustment = −$5,000 × (Avg Comp Beds − Subject Beds)

Bathroom Adjustment:
  Full Bath Difference Adjustment = ±$10,000 × full bath difference
  Half Bath Difference Adjustment = ±$5,000 × half bath difference
  Total Bathroom Adjustment = Full + Half

Garage Adjustment:
  = ±$5,000 × (Subject Garage − Avg Comp Garage)

Lot Size Adjustment — DISABLED BY DEFAULT (requires user opt-in):

  WARNING: Lot size value varies dramatically by market. In some markets 
  (dense urban, condos, row-houses), lot size barely affects price. In others 
  (suburban SFR, rural), it matters significantly. A fixed per-sqft rate produces 
  wrong ARV in markets where the rate doesn't apply.

  DEFAULT BEHAVIOR: Lot Size Adjustment = $0 (not applied)

  ADVANCED MODE (opt-in only):
    Two conditions must BOTH be true to apply Lot Size Adjustment:
      Condition 1: User explicitly enables "Advanced adjustments" toggle in UI
      Condition 2: Lot size difference between subject and avg comps exceeds 20%
    
    If both conditions met, apply:
      Lot Size Adjustment = ±$1.50 per sqft × lot size difference
      (user can override the $1.50 rate in advanced settings for their market)
    
    If either condition fails, set Lot Size Adjustment = $0 and display hint 
    "Lot size differences under 20% typically don't materially affect ARV"

  UI note: The advanced toggle should be clearly labeled and default to OFF. 
  Most users should NOT enable lot size adjustments without understanding 
  their local market's lot-value sensitivity.

Condition Multiplier (applied ONLY when subject condition materially differs from comp average):

CRITICAL — ANTI-DOUBLE-COUNTING RULE:
  Comps already reflect THEIR OWN condition in their sale prices. If a comp sold 
  at $145/sqft for a Good-condition property, that price ALREADY INCLUDES 
  the Good-condition premium. Applying Good × 1.05 on top would double-count.
  
  Correct logic:
    Step 1: Determine Average Comp Condition (user specifies per comp, or defaults 
            to Average — see Default Behavior below for rationale)
    Step 2: Compare Subject Condition to Average Comp Condition
    Step 3: Apply multiplier ONLY to the DIFFERENCE:
    
    If Subject Condition == Avg Comp Condition: multiplier = 1.00 (no adjustment)
    If Subject Condition differs by 1 tier: apply partial adjustment
    If Subject Condition differs by 2+ tiers: apply full adjustment
  
  DEFAULT AVG COMP CONDITION (critical — prevents systematic bias):
  
    Default = AVERAGE (tier 2), NOT Good (tier 3).
    
    Rationale: "Average" is the neutral statistical baseline — it represents the 
    typical condition of a home that recently sold in today's market without being 
    specifically updated or dated. "Good" introduces an UPWARD BIAS: if we assume 
    comps are Good and the subject is also Good, no adjustment fires — but in reality 
    many "Good"-condition subjects are being compared to comps that were actually 
    Average. Defaulting to Average means: when subject is Good (post-rehab), the 
    Average baseline produces a +1 tier difference → 1.05 multiplier → correct 
    upward adjustment. Defaulting to Good would miss this adjustment entirely.
    
    Empirical observation: In most U.S. markets, the "average sold home" is 
    Average-to-slightly-Good condition, NOT pure Good. Starting from Average gives 
    the model room to recognize when a subject rehab actually adds value above baseline.
    
    User override: Users may explicitly set each comp's condition if they've 
    personally inspected comps. In that case, use user-specified values and 
    compute Avg Comp Condition as the arithmetic average of the tier numbers.

Condition Tiers and Relative Multipliers:

  Tier scale (0-4):
    0 = Poor (needs major repair, habitable at minimum)
    1 = Fair (dated, functional, some deferred maintenance)
    2 = Average (typical condition for age, baseline)
    3 = Good (updated, well-maintained, move-in ready)
    4 = Excellent (recently renovated, premium finishes)

  Multiplier by tier difference (Subject Tier − Avg Comp Tier):
    +2 difference: × 1.10
    +1 difference: × 1.05
    0 difference:  × 1.00  ← DEFAULT when subject ≈ comps
    -1 difference: × 0.93
    -2 difference: × 0.85

  Example 1 (no double-counting — subject matches average comps):
    Subject Condition = Average (tier 2)
    Avg Comp Condition = Average (tier 2, default baseline)
    Difference = 0 → Multiplier = × 1.00 (no adjustment)
  
  Example 2 (legitimate upward adjustment — post-rehab subject above baseline):
    Subject Condition = Good (tier 3, fully renovated move-in ready)
    Avg Comp Condition = Average (tier 2, default baseline)
    Difference = +1 → Multiplier = × 1.05
  
  Example 3 (strong upward adjustment — premium rehab):
    Subject Condition = Excellent (tier 4, premium rehab with high-end finishes)
    Avg Comp Condition = Average (tier 2, default baseline)
    Difference = +2 → Multiplier = × 1.10
  
  Example 4 (downward adjustment — pre-rehab subject):
    Subject Condition = Fair (tier 1, not yet rehabbed — ARV analysis scenario rare)
    Avg Comp Condition = Average (tier 2, default baseline)
    Difference = −1 → Multiplier = × 0.93
  
  Default assumption: if user doesn't specify Avg Comp Condition, assume it's 
  "Average" (tier 2) — the neutral statistical baseline for typical recent sales.
  
  CRITICAL — this DEFAULT is the same "Average (tier 2)" stated in the DEFAULT AVG 
  COMP CONDITION block above. Do NOT use "Good" (tier 3) as the default anywhere — 
  doing so introduces systematic upward bias when subject is post-rehab Good, 
  because zero-difference multiplier × 1.00 would incorrectly fire. With Average 
  as the baseline, a Good subject correctly produces +1 difference → × 1.05 uplift.

Condition-Adjusted Base:
  If Subject Condition ≈ Avg Comp Condition (difference = 0):
    Condition-Adjusted Base = Raw ARV (no multiplier applied)
  Else:
    Condition-Adjusted Base = Raw ARV × relative multiplier from table above

Adjusted ARV (final estimate):
  Condition-Adjusted Base = Raw ARV × Condition Multiplier
  Adjusted ARV = Condition-Adjusted Base 
               + Bedroom Adjustment 
               + Bathroom Adjustment 
               + Garage Adjustment 
               + Lot Size Adjustment (if provided)

Rationale: Condition is a multiplier (affects entire property value), while 
bedroom/bathroom/garage are dollar-value add-ons (specific feature value).
```

Confidence Range calculation:

```
Confidence Tier Determination (uses internal Confidence Score 0-100):

  STEP 1 — Calculate Confidence Score (0-100) from 5 factors:

    Factor 1: Number of comps (max 25 points)
      5+ comps: 25 points
      4 comps: 20 points
      3 comps: 12 points
      <3 comps: 0 points (not eligible for estimate)
    
    Factor 2: Average comp recency (max 25 points)
      ≤ 60 days: 25 points
      61-90 days: 20 points
      91-180 days: 12 points
      181-365 days: 6 points
      > 365 days: 0 points
    
    Factor 3: Average comp distance (max 20 points)
      ≤ 0.5 miles: 20 points
      0.51-1.0 miles: 14 points
      1.01-2.0 miles: 7 points
      > 2.0 miles: 0 points
    
    Factor 4: Similarity (max 20 points)
      Bed/bath/sqft average match within ±10%: 20 points
      Within ±20%: 12 points
      Within ±30%: 6 points
      Beyond ±30%: 0 points
    
    Factor 5: PPSF Spread (max 10 points, measures data consistency)
      All comp PPSFs within ±10% of median: 10 points
      Within ±20%: 6 points
      Within ±30%: 3 points
      Beyond ±30% or outliers present: 0 points
    
    Total Confidence Score = Σ of factors (0-100)

  STEP 2 — Map Confidence Score to Tier:
    80-100: HIGH Confidence
    60-79:  MEDIUM Confidence
    0-59:   LOW Confidence
  
  STEP 3 — Use Confidence Score (not just tier) to determine Range Width:
    Score 95-100: Range = Adjusted ARV ± 2.5%
    Score 85-94:  Range = Adjusted ARV ± 3.5%
    Score 75-84:  Range = Adjusted ARV ± 5%
    Score 65-74:  Range = Adjusted ARV ± 6.5%
    Score 55-64:  Range = Adjusted ARV ± 8%
    Score 40-54:  Range = Adjusted ARV ± 10%
    Score < 40:   Range = Adjusted ARV ± 12% (plus strong warning)
  
  Rationale: Two estimates with "MEDIUM Confidence" tier labels may have very 
  different actual reliability. Score 78 is meaningfully better than score 61. 
  The Range Width reflects this granularity, even though the displayed tier label 
  is the same.

  UI: Display only the TIER label (HIGH/MEDIUM/LOW) for clarity, but use the 
  Score internally to calibrate Range precision. Optionally expose the score 
  in an "advanced details" tooltip for sophisticated users.

  HIGH Confidence Tier (Score 80-100):
    Typical scenario: 5 comps, ≤90 days old, ≤0.5 miles, tight similarity, low PPSF spread
    Display: green badge, narrow Range Width
  
  MEDIUM Confidence Tier (Score 60-79):
    Typical scenario: 4 comps with some variance, OR 5 comps with one weak dimension
    Display: amber badge, moderate Range Width
  
  LOW Confidence Tier (Score below 60):
    Typical scenario: 3 comps minimum, or 4+ comps with significant quality issues
    Display: red badge, wide Range Width, plus warning message

Confidence Range Low = Adjusted ARV × (1 − range%)
Confidence Range High = Adjusted ARV × (1 + range%)

The range is intentionally wide for Low confidence — it reflects reality, 
not a marketing number. A 3-comp estimate with 180-day-old comps genuinely 
has ±$20K+ uncertainty on a $250K property.
```

Derived Max Offer outputs:

```
70% Rule Max Offer (for Fix and Flip):
  70% Rule Max Offer = (Adjusted ARV × 0.70) − Rehab Budget
  
  Usage: Maximum price to pay for flip to maintain 30% buffer 
  for profit + financing costs + execution risk.

75% Rule All-In Target (for BRRRR):
  75% Rule Target = Adjusted ARV × 0.75
  
  Usage: Maximum total project cost (Purchase + Rehab + Holding + 
  Financing) to achieve full capital recovery at standard 75% LTV refinance.

Max Purchase Price for Full BRRRR Recovery (estimate):
  Max Purchase = 75% Rule Target − Rehab Budget − Estimated Non-Purchase Costs
  
  Estimated Non-Purchase Costs default:
  - Purchase Closing: 3% of Purchase (use simple estimate of 3% of Max Purchase)
  - Rehab Contingency: 10% of Rehab
  - Phase 1 Holding: Rehab Budget × 0.05 (rough estimate for 6mo)
  - HM Costs: Rehab Budget × 0.15 (points + interest rough estimate for 6mo)
  
  This is an estimate — direct user to BRRRR Calculator for precise modeling.
```

Reverse modes:

IMPORTANT — REVERSE MODE ACCURACY DISCLAIMER:
  Reverse modes use simplified cost assumptions that vary significantly by market. 
  They are SCREENING ESTIMATES ONLY, not precision planning tools. 
  
  MANDATORY UI LABEL (displayed prominently above reverse mode results):
    "Screening estimate only — use Fix and Flip Calculator for precise modeling"
  
  OUTPUT FORMAT: show MIDPOINT + RANGE, not single point and not range alone:
    Instead of: "Required ARV: $312,000"
    Instead of: "Required ARV: $295,000 - $330,000"
    Display as: "Required ARV: $295,000 - $330,000 (midpoint $312,500)"
    
    The midpoint gives users a concrete anchor number to work from ("I need about 
    $312K as a target"), while the range shows the sensitivity envelope ("but my 
    real target could be anywhere in this $35K band depending on costs").
    
    Formatting rules:
    - Low end and high end rounded to nearest $5,000
    - Midpoint = (Low + High) ÷ 2, rounded to nearest $500
    - Always display ALL THREE numbers in the label
    - Show range as primary visual element, midpoint as parenthetical anchor
    
    The range reflects the variance in "Other Costs" assumption (15-35% of Rehab 
    depending on market, not a fixed 20%).

Mode 2: Find Required ARV for Target Profit

```
Given: Fix and Flip Target Profit, Purchase Price, Rehab Budget
Solve for: ARV RANGE that produces target profit across reasonable cost assumptions

Solver logic (range-based, not single-point):
  Target Profit = ARV − Total Costs
  Total Costs = Purchase + Rehab + ClosingEstimate + HoldingEstimate + HMCostsEstimate + SaleCosts
  
  For SaleCosts scaling with ARV:
  Target Profit = ARV × (1 − SaleCostPct) − PurchaseSubtotal
  ARV = (Target Profit + PurchaseSubtotal) ÷ (1 − SaleCostPct)
  
  Run this solve TWICE with two OtherCosts assumptions:
  - Low-cost scenario: OtherCosts = Rehab × 0.15 → gives Low-ARV estimate
  - High-cost scenario: OtherCosts = Rehab × 0.35 → gives High-ARV estimate
  
  Compute Midpoint-ARV = (Low-ARV + High-ARV) ÷ 2, rounded to nearest $500
  
  Display: "Required ARV: [Low-ARV] - [High-ARV] (midpoint [Midpoint-ARV])"

ASSUMPTIONS stated explicitly (shown in UI):
- Purchase and Rehab stay fixed
- Sale Costs assumed 8% of ARV
- Other costs (holding + financing + closing) range 15-35% of Rehab depending on market
- 6-month flip timeline assumed
- Hard money financing assumed
- Result is APPROXIMATE — direct user to Fix and Flip Calculator for precision

Edge case: If High-ARV > 3 × Purchase Price, flag as "Unrealistic target — reconsider"
```

Mode 3: Find Max Offer at Target Margin

```
Given: ARV (estimated), Rehab Budget, Target Profit OR Target ROI
Solve for: Max Purchase Price RANGE

Solver logic (range-based):
  Max Offer = ARV − SaleCosts − Rehab − OtherCosts − Target Profit
  
  Run TWICE with OtherCosts assumptions:
  - Low-cost (OtherCosts = Rehab × 0.15): gives High-Offer estimate
  - High-cost (OtherCosts = Rehab × 0.35): gives Low-Offer estimate
  
  Display: "Max Offer: [Low-Offer] to [High-Offer] (screening range)"
  
  Also show 70% Rule anchor: "70% Rule Max Offer: $[ARV × 0.70 − Rehab]"
  (70% Rule is a rule-of-thumb benchmark, shown alongside the range for context)

ASSUMPTIONS (shown in UI):
- Standard 6-month flip assumption
- Hard money financing assumption
- Sale Costs 8% of ARV
- Other costs range 15-35% of Rehab — market-dependent
- Result is SCREENING-LEVEL estimate, not precision planning
```

### 3. INPUT FIELDS

Group by logical section:

Subject Property section:
- subjectAddress (optional — for context, placeholder "Enter property address")
- subjectSqft (required, placeholder "Enter finished square footage")
- subjectBedrooms (required, default 3, range 1-8)
- subjectBathrooms (required, allow decimals like 2.5, range 1-6)
- subjectGarage (optional, default 0, range 0-4 car spaces)
- subjectLotSqft (optional, placeholder "Enter lot size in square feet")
- subjectCondition (select: Poor / Fair / Average / Good / Excellent, default Average)

Comparable Sales section (3-5 comps, minimum 3):

For each comp (repeating group):
- compSalePrice (required, placeholder "Enter sale price")
- compSqft (required, placeholder "Enter square footage")
- compBedrooms (required, default same as subject)
- compBathrooms (required, allow decimals)
- compGarage (optional)
- compSaleDate (required, date picker, within last 365 days)
- compDistanceMiles (required, number with 1 decimal, placeholder "Enter distance from subject")
- compCondition (optional — default Average if not specified)

Dynamic: User can add/remove comps (min 3, max 5). First 3 are always visible, 4th and 5th are "Add Comp" buttons.

Rehab section (for Max Offer derived metrics):
- rehabBudget (optional — but required for 70% Rule Max Offer to show, placeholder "Enter rehab budget")
- Helper text: "Enter rehab budget to see 70% Rule Max Offer"

Reverse mode targets (when in reverse modes):
- targetProfit (for Find Required ARV mode, placeholder "Enter target flip profit")
- targetROI (alternative input for Find Required ARV, placeholder "Enter target ROI percentage")

PLACEHOLDER RULE: All placeholders are TEXT instructions ("Enter sale price"), NEVER number examples ("e.g. $250,000"). Hard rule from Master Prompt.

### 4. CALCULATION MODES

Three modes (matching other calculators for consistency):

```
Mode key:       'analyze'         — Analyze ARV (standard, primary mode)
Mode key:       'find-arv'        — Find Required ARV (given target flip profit)
Mode key:       'find-offer'      — Find Max Offer (given ARV + target profit)
```

Color families:
- analyze → amber (Standard)
- find-arv → blue (Reverse #1)
- find-offer → emerald (Reverse #2)

### 5. PRIMARY RESULT

- Display format: Dual display — ARV $ as main headline, Confidence Range immediately below
- Example display:
  ```
  Estimated ARV
  $285,000
  
  Confidence Range: $275,000 to $295,000
  Medium confidence (based on 4 comps averaging 45 days old)
  ```
- Decimals: 0 for dollar amounts
- Rounding: Round final ARV to nearest $1,000 (appraisers round this way)
- Primary color: dynamic based on confidence tier

### 6. BADGE / TIER SYSTEM

Unlike other calculators, tiers here are about CONFIDENCE, not value outcomes.

The ARV number itself doesn't have a "good" or "bad" tier — it is what it is. What matters is how confident the estimate is:

```
Tier 1: HIGH Confidence — green
  Label:        High Confidence
  bg1 color:    #059669
  bg2 color:    #047857
  Range:        Adjusted ARV ±3%
  Requires:     5+ comps, avg recency ≤90 days, avg distance ≤0.5 mi, good similarity
  Meaning:      Estimate highly reliable. Suitable for offer decisions with 
                moderate rehab (under 30% of ARV). Still recommend independent BPO 
                for deals over $300K.

Tier 2: MEDIUM Confidence — amber
  Label:        Medium Confidence
  bg1 color:    #F59E0B
  bg2 color:    #D97706
  Range:        Adjusted ARV ±5%
  Requires:     4 comps, OR recency 90-180 days, OR distance 0.5-1 mi
  Meaning:      Reasonable estimate for screening deals. Recommend BPO or 
                appraisal before committing significant capital. Use 
                conservative ARV (bottom of range) for underwriting.

Tier 3: LOW Confidence — red warning
  Label:        Low Confidence
  bg1 color:    #DC2626
  bg2 color:    #B91C1C
  Range:        Adjusted ARV ±8-10%
  Requires:     3 comps, OR recency over 180 days, OR distance over 1 mi, OR similarity mismatch
  Meaning:      Estimate is directional only — not reliable for commitment decisions. 
                Requires BPO or appraisal before making offers. Consider gathering 
                more comps before relying on this number.
```

Note: Unlike other calculators, there is NO "Exceptional / Strong / Solid / Weak / Critical / Loss" tier system. ARV is an estimation quality metric, not a value quality metric.

### 7. INSIGHT TEXT (ESTIMATE CONTEXT)

For each confidence tier, 2-3 sentences:

```
"ARV estimate of $[value] at [confidence tier] confidence based on [N] comps 
averaging [X] days old within [Y] miles. [Context about what this means for 
decision-making]. [Actionable guidance: use BPO, use wider range, etc.]."
```

Must mention:
- ARV value
- Confidence tier
- Number of comps plus their average recency plus distance
- 70% Rule and 75% Rule Max Offers if rehab budget provided
- Recommendation on whether to seek independent appraisal

### 8. KEY DERIVED METRICS

Four metric cards in the right column:

Metric 1: Weighted Average PPSF
- Formula: Σ(Comp PPSF × Weight) ÷ Σ(Weight)
- Format: currency with "per sqft" suffix (e.g., $135/sqft)
- Benchmark: Compare to median local PPSF (from benchmarks section)
- Hover hint: "Weighted average price per square foot from your comps, used as ARV base rate."

Metric 2: 70% Rule Max Offer (Fix and Flip)
- Formula: (Adjusted ARV × 0.70) − Rehab Budget
- Only shows when Rehab Budget is entered
- Format: currency
- Indicator: green "Safe offer zone" or amber "Outside rule"
- Hover hint: "Maximum safe offer for flip strategy. ARV × 70% minus rehab."

Metric 3: 75% Rule Target (BRRRR)
- Formula: Adjusted ARV × 0.75
- Always shows when ARV is calculated
- Format: currency
- Label: "All-In Cost ceiling for full capital recovery"
- Hover hint: "Maximum total project cost for BRRRR strategy at 75% LTV refinance."

Metric 4: Comp Quality Score
- Not a formula per se — composite confidence indicator
- Displays: "4 of 5 comps used, avg 52 days old, 0.7 mi avg distance"
- Visual: 3 tier indicator (High/Medium/Low with color)
- Hover hint: "Quality assessment of comps used. Affects confidence range width."

### 9. SENSITIVITY ANALYSIS

Two sensitivity tables (fewer than other calculators — appropriate for estimation tool):

Primary sensitivity — Condition × Comp Quality:
```
Rows:     Subject Condition: Poor, Fair, Average, Good, Excellent
Columns:  Comp Quality: Low confidence, Medium, High
Cell:     Adjusted ARV $ and Confidence Range width
```

Secondary sensitivity — Bedroom × Bathroom Adjustments:
```
Rows:     Subject Bedrooms relative to comps: −1, same, +1, +2
Columns:  Subject Bathrooms relative to comps: −0.5, same, +0.5, +1
Cell:     Bedroom + Bathroom Adjustment total $
```

### 10. SCENARIO ANALYSIS

Three scenarios with realistic multipliers:

```
Conservative (appraisal-ready, underwriting-safe):
  Adjusted ARV × 0.93         (-7% — lender appraisal commonly comes in below expected)
  Rehab × 1.15                (+15% contingency — standard practice)
  Rationale: Use this for investment underwriting decisions.

Base:
  (user inputs as entered, adjusted ARV as calculated)

Optimistic (list-price ceiling):
  Adjusted ARV × 1.03         (+3% — only in hot markets with aggressive pricing)
  Rehab × 0.95                (-5% — assuming tight contractor bid management)
  NOTE: Optimistic outcomes are NOT for investment underwriting. Use only for 
  comparative scenario modeling.
```

Multiplier rationale:
- Conservative is WIDER than other calculators because appraisal risk is a known real-world gap
- 5-10% appraisal shortfalls happen regularly in soft markets
- Optimistic is INTENTIONALLY modest — overestimating ARV is the #1 source of failed flips and BRRRRs

### 11. VISUALIZATION BREAKDOWN

Comp Weighting Chart (shows how each comp contributes):

```
For each comp:
  Show: Comp address (if provided) + PPSF + Weight + Contribution to Weighted Avg

Visual bar chart:
  Comp 1: $140/sqft × 0.94 weight → 23.5% of final ARV
  Comp 2: $132/sqft × 1.00 weight → 25.2% of final ARV
  Comp 3: $138/sqft × 0.56 weight → 14.7% of final ARV
  Comp 4: $145/sqft × 0.75 weight → 20.3% of final ARV
  Comp 5: $128/sqft × 0.62 weight → 16.3% of final ARV
```

Adjustments Breakdown Bar:
```
Raw ARV (comps base):              $265,000
+ Bedroom Adjustment (+1 bed):     +$5,000
+ Bathroom Adjustment (+0.5 bath): +$5,000
+ Garage Adjustment (0 diff):      $0
× Condition Multiplier (Good):     × 1.05
─────────────────────────────────────────
Adjusted ARV:                      $288,750
Rounded Final ARV:                 $289,000
```

### 12. WARNINGS & VALIDATION

- Missing critical inputs (subject sqft, minimum 3 comps)
- Comp PPSF more than 30% above/below others (warning: "Outlier comp — verify")
- Comp sold over 365 days ago (warning: "Comp too old — consider excluding")
- Comp distance over 2 miles (warning: "Comp too far — unlikely to reflect subject market")
- Subject sqft outside comp range by over 20% (warning: "Subject significantly different size — adjust carefully")
- All 3 comps in different submarkets (warning: "Comps may not reflect same market")
- Final Adjusted ARV over 20% different from Raw ARV (warning: "Large adjustments — consider if realistic")
- PPSF under $50 or over $500 (sanity check — outside typical US ranges)
- Bedroom count difference of 3+ from comps (warning: "Subject very different bed count — ARV reliability low")
- Condition = Poor when comps condition mostly Good (warning: "Subject substantially different condition — verify multiplier appropriate")

### 13. COMP COMPARISON TABLE

Central UI element — editable table showing all comps with calculated metrics:

```
| # | Sale Price | Sqft  | $/sqft | Beds | Baths | Garage | Sold (days) | Distance | Weight | Contribution |
| 1 | $275,000   | 1,850 | $149   | 3    | 2.5   | 2      | 32          | 0.4 mi   | 0.94   | 23.5%        |
| 2 | $268,000   | 2,030 | $132   | 3    | 2.0   | 2      | 67          | 0.6 mi   | 1.00   | 25.2%        |
| 3 | $265,000   | 1,920 | $138   | 4    | 2.5   | 2      | 128         | 1.2 mi   | 0.56   | 14.7%        |
| 4 | $290,000   | 2,000 | $145   | 3    | 3.0   | 2      | 45          | 0.8 mi   | 0.75   | 20.3%        |
| 5 | $255,000   | 1,990 | $128   | 3    | 2.0   | 1      | 89          | 0.9 mi   | 0.62   | 16.3%        |
|---|------------|-------|--------|------|-------|--------|-------------|----------|--------|--------------|
| Weighted Avg |   |   | $137   |      |       |        |             |          |        |              |
| Subject      | ? | 2,100 |   | 3    | 2.5   | 2      |             |          |        |              |
```

### 14. BENCHMARKS BY REGIONAL PPSF (2026 US)

Note: This benchmarks section is unusual — instead of outcome ranges, it is PPSF reference data:

```
| Region / Market Tier    | Typical PPSF Range | Notes                                 |
| Low-entry markets       | $60 to $120/sqft   | Midwest cities (Cleveland, Indianapolis, Memphis) |
| Mid-tier markets        | $120 to $200/sqft  | Atlanta suburbs, Dallas-Fort Worth, Raleigh |
| High-cost metros        | $200 to $400/sqft  | Austin, Denver, Seattle, Nashville core |
| Coastal / Luxury        | $400 to $800+/sqft | Los Angeles, San Francisco, Boston, NYC boroughs |
```

Label: "Industry-standard 2026 PPSF ranges for investor-grade SFR (not luxury or distressed). Use your local market data when available — these are broad reference ranges only."

### 15. BENCHMARKS BY STATE (8 states)

For California, Texas, Florida, Georgia, Ohio, Pennsylvania, Arizona, North Carolina (mix of flip/BRRRR active markets):

```
State: [name]
Typical PPSF (SFR): [range]
Key markets: [top 3]
ARV estimation characteristics: [AT LEAST TWO factors that make ARV easier or harder to estimate in this state]
Notes: [2 sentences about ARV reliability in this state]
```

Each state MUST name at least TWO specific factors:
- California → high-cost + rapid market shifts (factor 1: $400+ PPSF common; factor 2: prices move 5-10% quarterly in hot markets, making recent comps critical)
- Texas → wide metro variance + construction-friendly (factor 1: Austin $300+ vs Houston $180; factor 2: new construction abundant means more comparable sales)
- Florida → insurance-driven value + migration (factor 1: insurance costs affect value by 5-10%; factor 2: Florida migration supports ARV growth but creates volatility)
- Georgia → Atlanta metro strength + affordable entry (factor 1: Atlanta metro reliable comps; factor 2: $120-220 PPSF typical for investor SFRs)
- Ohio → low entry + high comp volume (factor 1: $90-160 PPSF typical; factor 2: high volume of investor sales makes comps easy to find)
- Pennsylvania → old housing stock + Philadelphia/Pittsburgh variance (factor 1: 1920s-1950s homes need condition adjustments; factor 2: PPSF varies 2x between Pittsburgh and Philadelphia)
- Arizona → Phoenix growth + insurance emerging (factor 1: Phoenix metro strong appreciation 5%+; factor 2: emerging wildfire insurance impacts adding uncertainty)
- North Carolina → Raleigh/Charlotte growth + balanced costs (factor 1: metro growth 3-5% annually; factor 2: $150-280 PPSF typical for investor properties)

Add explicit label: "Industry-standard PPSF ranges — actual values require local comp research."

### 16. ASSET CLASS CONTEXT

For SFR / Small Multi 2-4 / Condo / Townhouse / Manufactured: typical PPSF range plus 2-sentence explanation of ARV estimation challenges unique to each class.

- SFR: Easiest to estimate (abundant comps)
- Small Multi: Harder (fewer comps, income approach also relevant)
- Condo: HOA comps + view/floor adjustments needed
- Townhouse: Similar to SFR but check interior vs end unit
- Manufactured: Separate comp set entirely (don't mix with site-built)

### 17. TEST CASES

TOLERANCE RULE:
- plus/minus 3% for ARV percentage calculations
- plus/minus $500 for ARV dollar outputs (estimation tolerance — wider than other calculators)
- plus/minus $100 for derived Max Offer outputs

Write 6 test cases:

Test 1: Standard High Confidence ARV
- Subject: 1,800 sqft, 3 bed, 2 bath, 2 car garage, Average condition
- 5 comps, all within 0.3 miles, all sold within 60 days
- Comp PPSF range: $130 to $145
- Expected: HIGH confidence tier
- Expected Adjusted ARV: reasonable range plus/minus 3%
- Verify confidence tier calculation correctly identifies HIGH

Test 2: Medium Confidence with Adjustments
- Subject: 2,100 sqft, 4 bed, 2.5 bath, 2 car, Good condition
- 4 comps, averaging 110 days old and 0.7 miles
- Avg comp: 3 bed, 2 bath, Average condition
- Expected: MEDIUM confidence
- Expected adjustments: +$5K (bedroom), +$5K (half bath), × 1.05 condition
- Test calculates adjustment math correctly

Test 3: Low Confidence — Minimum Comps
- Subject: Standard 3 bed 2 bath
- Only 3 comps, averaging 200 days old and 1.3 miles away
- Expected: LOW confidence tier
- Expected Confidence Range plus/minus 8-10%
- Verify warning fires: "Recommend BPO or additional comps"

Test 4: 70% Rule Max Offer Calculation
- Adjusted ARV: $285,000
- Rehab Budget: $45,000
- Expected 70% Rule Max Offer: ($285,000 × 0.70) − $45,000 = $154,500
- Verify derived metric displays correctly
- Verify BRRRR 75% Rule Target: $285,000 × 0.75 = $213,750

Test 5: Outlier Comp Warning
- 5 comps where 4 are around $135/sqft and 1 is $200/sqft
- Verify outlier warning fires
- Verify weighting still produces reasonable result (outlier weight won't dominate)

Test 6: Find Required ARV (reverse mode)
- Target Flip Profit: $40,000
- Purchase Price: $150,000
- Rehab: $40,000
- Expected Required ARV: solve backwards
- Verify formula math
- Verify edge case: if Required ARV unrealistic (over 3x Purchase), flag warning

### 18. URL PARAMETERS

Short param names:
- subjectSqft → ssf
- subjectBedrooms → sbd
- subjectBathrooms → sba
- subjectGarage → sga
- subjectLotSqft → slt
- subjectCondition → scd
- subjectAddress → sad

For each comp N (1-5):
- comp[N].salePrice → c[N]p
- comp[N].sqft → c[N]s
- comp[N].bedrooms → c[N]b
- comp[N].bathrooms → c[N]ba
- comp[N].garage → c[N]g
- comp[N].saleDate → c[N]d
- comp[N].distanceMiles → c[N]dm
- comp[N].condition → c[N]cd

Example: c1p=275000, c1s=1850, c1b=3, c1ba=2.5, c1d=2026-02-15, c1dm=0.4

Additional:
- rehabBudget → rb
- targetProfit → tp
- targetROI → tr
- mode → md

### 19. EDGE CASES

```
All fields empty:                         result = —
Less than 3 comps entered:                disable result, show "Minimum 3 comps required"
Subject sqft = 0:                         validation error
Comp sqft = 0:                            exclude from calculation, warn
All comp weights = 0 (all failed filters): error "No usable comps — add fresh comps within 2 miles"
Comp sale date in future:                 validation error
Comp sale date over 365 days:             include with 0.25 weight, flag low quality
Subject sqft over 5× avg comp sqft:       warning "Subject significantly different — comps may not apply"
Negative adjustments exceed Raw ARV:      allow but warn "Heavy negative adjustments"
Condition multiplier × Raw ARV goes negative: shouldn't happen with bounds, but validate
Rehab Budget empty:                       show ARV but hide 70% Rule Max Offer
Rehab Budget > ARV:                       warn "Rehab exceeds ARV — deal not viable"
Find Required ARV with target impossible: return null, flag "Target unachievable"
Manufactured home property:               warn "ARV for manufactured homes requires specialized comps"
Subject in completely different condition from all comps: warn, suggest more comps
PPSF of any single comp under $50:        warn "Extreme low PPSF — verify data entry"
PPSF of any single comp over $500:        warn "Extreme high PPSF — verify luxury / different market"
```

---

## OUTPUT CHECKLIST

Before finalizing, verify:

- [ ] All 19 sections present in correct order
- [ ] ARV framed as ESTIMATE, not calculation — uncertainty communicated throughout
- [ ] PRIMARY metric: ARV $ + Confidence Range displayed together
- [ ] Hybrid method: Comps + Adjustments (not just comps, not just $/sqft)
- [ ] Weighted averaging formula uses Recency × Distance × Similarity multipliers
- [ ] **PRIORITY ORDER documented: Recency > Distance > Similarity — when factors conflict**
- [ ] **WEIGHT NORMALIZATION: MAX CAP 40% per comp, MIN FLOOR 5% unless outlier**
- [ ] **PARTIAL REDISTRIBUTE RULE: when comp capped at 40%, only 50% of excess redistributed; other 50% discarded as confidence loss (reduces Confidence Score by up to 15 pts)**
- [ ] **Default Avg Comp Condition = AVERAGE (tier 2), NOT Good (tier 3) — prevents systematic upward bias**
- [ ] **PPSF Spread Penalty: Coefficient of Variation (CV) thresholds — tight (≤15%) no penalty, moderate (15-30%) 5% weight reduction + 0.5% range widen, noisy (>30%) 10% weight reduction + 1% range widen + 5pt Confidence Score downgrade**
- [ ] **Reverse modes display MIDPOINT + RANGE format: "Required ARV: $295K - $330K (midpoint $312K)" — NOT single point, NOT range alone**
- [ ] **PPSF OUTLIER DETECTION: >25% deviation = weight × 0.5, >40% deviation = weight × 0.25**
- [ ] Standard adjustments: bedroom plus/minus $5K, bathroom plus/minus $10K full / plus/minus $5K half, garage plus/minus $5K, condition multiplier
- [ ] **CONDITION MULTIPLIER anti-double-counting: applied ONLY when Subject Condition differs from Avg Comp Condition. Difference = 0 → multiplier × 1.00**
- [ ] **Condition uses 0-4 tier scale with relative multipliers based on Subject minus Comp tier difference**
- [ ] **LOT SIZE ADJUSTMENT DISABLED by default — requires advanced toggle AND >20% lot difference to apply**
- [ ] **CONFIDENCE SCORE 0-100 calculated internally from 5 factors (count, recency, distance, similarity, PPSF spread)**
- [ ] **Confidence Score maps to tier: 80-100 HIGH, 60-79 MEDIUM, below 60 LOW**
- [ ] **Range Width uses Score granularity (not just tier) — 7 range precision levels based on exact score**
- [ ] 70% Rule Max Offer as derived metric (when rehab provided)
- [ ] 75% Rule Target as derived metric (always)
- [ ] **Reverse modes have MANDATORY "Screening estimate only — use Fix and Flip Calculator for precise modeling" label**
- [ ] **Reverse modes output RANGES, not single points (Low/High scenario with OtherCosts 15%/35% of Rehab)**
- [ ] **SQFT MISMATCH CHECK: if subject sqft differs >30% from avg comp sqft, force Confidence Tier downgrade by one level AND widen range by +2%**
- [ ] Placeholder rule: all input placeholders are "Enter X" text, NEVER number examples
- [ ] Minimum 3 comps enforced, max 5
- [ ] Outlier detection: plus/minus 30% from median PPSF flags warning
- [ ] Comps older than 365 days flagged as low quality
- [ ] Comps over 2 miles flagged as low quality
- [ ] 6 test cases with correct tolerance rules (plus/minus 3% ARV, plus/minus $500 dollar)
- [ ] Test 1: High Confidence standard case
- [ ] Test 2: Medium Confidence with adjustments
- [ ] Test 3: Low Confidence minimum comps
- [ ] Test 4: 70% Rule + 75% Rule Max Offer calculations
- [ ] Test 5: Outlier detection
- [ ] Test 6: Find Required ARV reverse mode
- [ ] Benchmarks use PPSF ranges (not outcome ranges like other calculators)
- [ ] Benchmarks labeled as "industry-standard PPSF ranges — actual values require local research"
- [ ] State benchmarks name AT LEAST TWO specific factors per state
- [ ] Warnings cover: outlier comps, old comps, far comps, size mismatch, condition mismatch
- [ ] 3 modes: analyze, find-arv, find-offer
- [ ] Color families: amber / blue / emerald
- [ ] Sensitivity tables appropriate for estimation tool (Condition × Comp Quality, Bedroom × Bathroom)
- [ ] Scenarios use estimation-appropriate multipliers (Conservative ×0.93, Optimistic ×1.03)
- [ ] Conservative scenario wider than other calculators — reflects appraisal risk reality
- [ ] Comp Comparison Table (Section 13) shows PPSF, weights, contributions per comp
- [ ] Adjustments Breakdown shows sequential calculation steps
- [ ] Cross-sell to Fix and Flip Calculator and BRRRR Calculator embedded in Strategy and Related Calculators
- [ ] ARV number rounded to nearest $1,000 (appraiser convention)

Output only the RIS specification. Do not output code. Do not output HTML. Do not output Vue. This is a spec document that will be consumed by the Master Prompt later.
