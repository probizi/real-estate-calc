# RIS Prompt — 70% Rule Calculator (v1)

You are a senior real estate finance engineer and SEO-focused product designer. Your job is to produce a **complete Requirements & Implementation Specification (RIS)** for the 70% Rule Calculator page.

This RIS is the source of truth for formulas, logic, thresholds, and test cases. It will be paired with a separate SEO package prompt (70-percent-rule-seo-prompt.md) and the Master Prompt to generate the actual Vue page.

---

## CALCULATOR IDENTITY

```
Calculator Name:    70% Rule Calculator
Slug:               70-percent-rule-calculator
Primary metric:     Maximum Allowable Offer (MAO) = ARV × 70% − Rehab
Primary keyword:    70 percent rule calculator real estate
Secondary keywords: 70% rule calculator, house flipping 70 rule calculator,
                    real estate investor 70 rule, 70 rule flip calculator,
                    fix and flip offer calculator, maximum offer calculator
Traffic priority:   Priority 2 (estimated 8,000-15,000 searches/month)
Target audience:    Fix-and-flip investors, wholesalers, house flippers 
                    looking for quick offer screening tool
```

---

## CRITICAL POSITIONING

The 70% Rule is a **quick offer screening heuristic** used by flippers and wholesalers to decide the maximum price to pay for a distressed property. It is NOT a full deal analysis tool.

**Relationship to other calculators:**
- **Quick screening (this tool)** → 70% Rule = first-pass "is this worth deeper analysis?" check
- **Full analysis** → Fix and Flip Calculator (includes holding costs, financing, selling costs, realistic profit projection)
- **Value estimate** → ARV Calculator (source of the "ARV" input for this tool)

**Workflow cross-link:**
```
ARV Calculator → 70% Rule Calculator → Fix and Flip Calculator
   (estimate       (screen offer      (full profitability analysis)
    value)          viability)
```

**Honesty framing (critical):** The 70% Rule is a rule of thumb, not a valuation method. It embeds assumptions about holding costs (~5-8%), selling costs (~6-7%), financing costs (~2-4%), and profit margin (~15-20%). In 2026 markets with elevated rates, these embedded assumptions may produce unrealistic offer prices — always validate with full Fix and Flip Calculator before committing.

---

## THREE MODES

### Mode 1 — Standard 70% Rule (default)
User enters ARV and Rehab Budget. Calculator shows Maximum Allowable Offer (MAO) using canonical 70% rule. Simple, one-screen output.

### Mode 2 — Adjustable Percentage
Same inputs, but user can adjust the percentage (60-80% range) to reflect local market conditions. Shows MAO at user's chosen percentage. Includes benchmark band with comparison to 65%/70%/75% values.

### Mode 3 — Reverse Mode: "What % Rule fits my offer?"
User enters ARV, Rehab, AND their actual purchase price. Calculator shows what percentage rule is implied by their offer. Useful for wholesalers evaluating whether a deal aligns with end-buyer expectations.

**Why this mode exists (v2 round 1 expert fix — UX explanation required in UI):**

Display subtitle below Mode 3 tab when active:
```
"Use this mode to check if your deal matches investor expectations. 
 Wholesalers use this to validate if end-buyers will accept the deal 
 based on standard 70% Rule benchmarks. Fix-and-flip investors use it 
 to reverse-engineer offers from competitors or past deals."
```

**Common use cases to list in HOW TO USE section:**
- Wholesaler has property under contract at $X, wants to know if it's assignable to a flipper at 70% Rule
- Investor analyzing a competitor's offer to understand their margin assumptions
- Agent explaining to seller why investor offers are typically X% of ARV
- Post-deal analysis: "was my last flip offer in line with industry standards?"

---

## UI STRUCTURE

**Top-level mode toggle (3 tabs):**
- Standard 70% (amber — classic flipping theme)
- Adjustable % (orange)
- Reverse Mode (purple)

**Below tabs:** shared input form (all modes use ARV + Rehab; Mode 2 adds Custom %; Mode 3 adds Purchase Price input).

**Below inputs:** dynamic output display per mode.

---

## INPUT SCHEMA

### Required inputs (all modes)

| Field | Type | Default | Placeholder |
|---|---|---|---|
| ARV (After Repair Value) | currency | empty | Enter after-repair value |
| Rehab Budget | currency | empty | Enter total rehab cost |

### Mode 2 additional

| Field | Type | Default | Placeholder |
|---|---|---|---|
| Custom Percentage % | percent (60-80) | 70 | Enter target percentage |

### Mode 3 additional

| Field | Type | Default | Placeholder |
|---|---|---|---|
| Your Purchase Price | currency | empty | Enter your offer price |

### Advanced inputs (collapsible, affects all modes)

| Field | Type | Default | Placeholder |
|---|---|---|---|
| Wholesale Assignment Fee | currency | 0 | Enter fee if wholesaling |
| Include Financing Buffer | boolean | false | Adjust for high-rate environment |

---

## OUTPUT SCHEMA

### Primary Metric (shown when valid, v2 round 1 expert fix — explicit valid/invalid states)

| Output | Formula | Display |
|---|---|---|
| **Maximum Allowable Offer (MAO)** | ARV × Percentage − Rehab − Wholesale Fee (optional − Financing Buffer in Mode 1) | Big number, currency, rounded to nearest $500 |

**Display logic (v2 round 1 — Rule 2 enforcement):**

```
IF inputs are valid (ARV > 0, Rehab ≥ 0, ARV > Rehab) AND MAO > 0:
  → Display MAO as primary metric with big number styling + Status Badge
  
IF inputs invalid OR MAO ≤ 0:
  → REPLACE MAO display with error state:
      "⚠ Deal not viable at current inputs"
      + Specific error reason (e.g., "Rehab exceeds available buffer after 
        percentage applied" or "ARV must be greater than Rehab")
      + Recovery CTA: "Try reducing Rehab budget or increasing ARV estimate"
  → DO NOT show negative or zero MAO as a "valid" result
  → DO NOT show Secondary Metrics or Status Badge when MAO invalid
  → DO show warning banner explaining why

Rationale: a negative MAO creates confusion — user might interpret "−$15,000" 
as "they should pay you to take the property" which is absurd. Error state 
with clear explanation is more honest and actionable.
```

### Secondary Metrics (v2 round 1 expert fix — renamed to prevent misinterpretation)

| Output | Formula | Purpose |
|---|---|---|
| **Gross Margin (Pre-Cost Buffer)** | ARV − MAO − Rehab | Dollar buffer for ALL costs + profit. This is NOT profit. |
| **Rule Buffer (Profit + Costs Allocation)** | ARV × (1 − Percentage) | What the percentage buffer is meant to cover (holding, financing, selling, profit) |
| **Offer as % of ARV** | MAO / ARV × 100 | Transparency — what % of ARV you're paying |

**Mandatory tooltips on hover (v2 round 1 — prevent misinterpretation):**

For "Gross Margin (Pre-Cost Buffer)":
```
"This is NOT profit. It represents the total dollar buffer available to 
cover: financing costs (2-4% of ARV), holding costs (5-8% of ARV depending 
on hold time), selling costs (6-7% of ARV), AND profit margin (15-20% of ARV). 
For realistic profit projection, use the Fix and Flip Calculator."
```

For "Rule Buffer (Profit + Costs Allocation)":
```
"The percentage buffer in the 70% rule is meant to cover ALL costs (financing, 
holding, selling) AND the investor's profit. Using a lower % (65%) allocates 
more buffer to profit/costs. Using a higher % (75%) accepts a thinner buffer."
```

For "Offer as % of ARV":
```
"This is your offer price divided by the property's After-Repair Value, 
ignoring Rehab. Distinct from 'Implied Rule' (Mode 3) which includes Rehab. 
Both are valid metrics."
```

### Mode 2 Benchmark Band

When custom percentage is used, display 3-tier comparison:
```
At 65% Rule:  MAO = $[X]  — Conservative (strong margin, hard to win deals)
At 70% Rule:  MAO = $[X]  — Standard industry benchmark
At 75% Rule:  MAO = $[X]  — Aggressive (competitive markets, thin margin)
At [Your %]:  MAO = $[X]  — Highlighted with amber border
```

### Mode 3 Reverse Output (v2 round 1 expert fix — show BOTH percentages to prevent user confusion)

```
┌──────────────────────────────────────────────────────────────┐
│  Your Offer Analysis                                         │
│                                                              │
│  Offer Price:         $[X]                                   │
│  ARV:                 $[X]                                   │
│  Rehab:               $[X]                                   │
│                                                              │
│  ───────────────────────────────────────────────────         │
│  TWO METRICS — BOTH ARE CORRECT:                             │
│                                                              │
│  Offer % (price only):         [XX]%                         │
│    ↳ Status: [Deep Value / Standard / Competitive / Risk]    │
│                                                              │
│  Total % (price + rehab):      [XX]%                         │
│    ↳ Rule Classification: [Conservative / Standard / Competitive / Aggressive] │
│                                                              │
└──────────────────────────────────────────────────────────────┘

MANDATORY CLARIFICATION BANNER (display below the analysis block):

  ⓘ Important: 
    Status Badge reflects your OFFER PRICE as % of ARV — 
    answers "how much of the property's value am I paying?"
    
    Implied Rule reflects TOTAL INVESTMENT (offer + rehab) as % of ARV — 
    answers "what % rule does my deal match against the 70% Rule standard?"
    
    These are different metrics measuring different things. They can 
    produce different classifications (e.g., Badge "Deep Value" + 
    Implied "Standard Flip Territory") and BOTH are valid.
```

**Interpretation bands for Implied Rule** (for the rule classification only):

  Implied % < 65% → "Conservative" (hard to win in competitive markets)
  Implied % 65-70% → "Standard flip territory"
  Implied % 70-75% → "Competitive — hot market"
  Implied % ≥ 75% → "Aggressive — may fit BRRRR/rental but thin for flipping"

**Visual display rule:**
- Offer % badge uses SAME color scheme as Mode 1/2 Status Badge (green/blue/amber/red)
- Total % badge uses a DIFFERENT color scheme (neutral grays with a secondary accent) to visually distinguish it from the primary status
- Do NOT use the same color for both percentages — this would suggest they're the same metric

### Mode 3 CTA (v2 round 2 polish fix — increase conversion to Fix and Flip)

Below the dual-percentage analysis block, always display action buttons:

```
┌──────────────────────────────────────────────────────────────┐
│  [Run full flip analysis with this price]  ←  primary CTA    │
│     ↳ navigates to /fix-and-flip-calculator with             │
│        ARV, Rehab, and Purchase Price pre-filled             │
│                                                              │
│  [Analyze as BRRRR instead]  ←  secondary CTA                │
│     ↳ for Implied % ≥ 75 (aggressive for flip, OK for BRRRR) │
│     ↳ navigates to /brrrr-calculator                         │
│                                                              │
│  [Compare with another deal]  ←  tertiary CTA                │
│     ↳ navigates to /compare-real-estate-deals                │
└──────────────────────────────────────────────────────────────┘
```

**Rationale:** Mode 3 users are investigating deal viability — they're one click away from wanting full analysis. The primary CTA "Run full flip analysis with this price" captures this intent with the actual offer price carried through. Secondary CTA "Analyze as BRRRR" is contextually shown only when Implied % ≥ 75 (where flipping is thin but BRRRR may work).

### Mode 1 / Mode 2 CTA parity

To maintain consistency, Mode 1 and Mode 2 also display the same three action buttons below the primary output, but with "MAO" as the carried price:
- "Run full flip analysis with this MAO" → Fix and Flip with MAO pre-filled as Purchase Price
- "Analyze as BRRRR instead" (always shown as secondary)
- "Compare with another deal" → Compare Real Estate Deals

**Required CTA in Mode 3 output (v2 round 2 expert fix — conversion to Fix and Flip):**

Below the dual-percentage display and interpretation bands, render a prominent CTA button:

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  ✓ Your offer shows Standard flip territory (70% Rule)    │
│                                                            │
│  ┌──────────────────────────────────────────┐             │
│  │   [Run full flip analysis with this price]│             │
│  │           → Fix and Flip Calculator        │             │
│  └──────────────────────────────────────────┘             │
│                                                            │
│  Pre-fills: ARV $300K, Rehab $40K, Purchase $170K         │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

CTA button redirects to: `/fix-and-flip-calculator?arv={ARV}&rehab={Rehab}&price={Purchase}`

**Why this CTA matters:**
The 70% Rule is a screening tool — passing doesn't mean the deal works. Fix and Flip Calculator provides the full cost + profit analysis. Reverse Mode users are particularly likely to benefit from a full deal analysis because:
- Wholesalers validating a deal want to know end-buyer's actual profit projection
- Investors reverse-engineering a price want to see if their numbers truly work under 2026 rate environment
- Agents explaining investor offers want documentation for seller conversations

**Placement priority:** CTA must be visible in initial Mode 3 output — above the fold, not buried below sensitivity table.

### Status Badge (visual indicator)

Based on Offer-as-%-of-ARV:
- **≤ 60%**: GREEN "Deep Value" — strong margin, rare find
- **60-70%**: BLUE "Standard Flip Zone" — healthy margin
- **70-75%**: AMBER "Competitive Zone" — thinner margin, verify holding costs
- **> 75%**: RED "High Risk" — margin may not cover holding/selling/financing costs in 2026 rate environment

---

## CALCULATION ENGINE

### Phase 1 — Validate Inputs

```
If ARV ≤ 0 or Rehab < 0 or ARV < Rehab:
  → Display error: "Invalid inputs — ARV must be positive and greater than Rehab."
  → Do NOT compute MAO
```

### Phase 2 — Apply 70% Rule (Standard Mode)

```
Base MAO = ARV × 0.70 − Rehab

If Wholesale Assignment Fee > 0:
  MAO = Base MAO − Wholesale Fee
  (The wholesaler takes their fee off the top, reducing what they can offer the seller)

If MAO < 0:
  → Display warning: "Property is not viable for flipping at 70% rule. 
     Rehab cost exceeds available buffer."
```

### Phase 3 — Apply Adjustable Percentage (Mode 2, v2 round 2 expert fix — graduated warnings)

```
Custom MAO = ARV × (Custom % / 100) − Rehab − Wholesale Fee

Validate Custom % ∈ [60, 80]:

Graduated warning system (v2 round 2 Fix 2 — softer zones at mid-range, 
stronger at extremes):

  Custom % < 60:
    RED warning: "Below 60% is rarely achievable in today's competitive 
                  markets. This may reflect unrealistic expectations — 
                  verify your target market has distressed inventory at 
                  this discount."
  
  Custom % 60-65:
    AMBER info: "Conservative zone. Strong margin but requires patient, 
                 off-market deal sourcing."
  
  Custom % 65-70:
    GREEN info: "Standard flip territory — industry benchmark range."
  
  Custom % 70-75:
    AMBER info: "Competitive zone. Common in hot markets (2026 Sunbelt). 
                 Verify holding/financing costs carefully."
  
  Custom % 75-80:
    RED warning (v2 round 2 Fix 2 — strengthened): 
      "Above 75% is rarely viable for flipping. Thin margin may not 
       cover financing (2-4%), holding (5-8%), selling (6-7%), and 
       profit (15-20%) costs after 2026 rate environment. 
       Verify with full deal analysis in Fix and Flip Calculator 
       before committing. This percentage range more typically fits 
       BRRRR or long-term rental exit strategies, not flipping."
  
  Custom % > 80:
    UI enforcement: clamp to 80. User physically cannot enter > 80.
```

**Rationale:** Previous round 1 had only binary warning at <60 and >80. Reality is that 75-80% is a danger zone requiring strong guidance, not just >80. Graduated warnings match how experienced investors actually think about the percentage bands.

### Phase 4 — Reverse Mode (Mode 3)

```
Implied % = ((Purchase Price + Rehab) / ARV) × 100

Interpretation bands:
  Implied % < 65% → "Conservative" (hard to win)
  Implied % 65-70% → "Standard flip territory"
  Implied % 70-75% → "Competitive — hot market"
  Implied % ≥ 75% → "Aggressive — may fit BRRRR/rental but thin for flipping"
```

### Phase 5 — Financing Buffer Adjustment (optional, Mode 1 only per v2 round 1 expert fix)

```
v2 round 1 DOUBLE-COUNT PREVENTION:

Financing Buffer is AVAILABLE ONLY when Custom % is not used (i.e., Mode 1 with 
standard 70%). When user selects Mode 2 with Custom %, the Financing Buffer 
toggle is DISABLED in UI with the following explanation tooltip:

  "Financing buffer is disabled when Custom % is active. Custom % already 
   reflects your margin assumptions (profit, holding, financing, selling). 
   Applying a separate 3% financing buffer on top would double-count 
   financing costs. 
   
   To model high-rate environment: use Custom % = 72-75% (leaves room for 
   higher financing costs implicitly)
   OR
   Use Custom % = 70% AND enable Financing Buffer (explicit 3% deduction)
   
   Do NOT combine both."

Therefore the logic is:

IF Mode == 1 (Standard 70%):
  IF Financing Buffer enabled:
    Financing Buffer = ARV × 0.03  (covers 2-4% hard money points + interest)
    Adjusted MAO = Base MAO − Financing Buffer
    Display line: "MAO with 2026 Financing Buffer: $[X]"
  ELSE:
    MAO = Base MAO (no buffer applied)

IF Mode == 2 (Adjustable %):
  Financing Buffer toggle DISABLED in UI (grayed out)
  Tooltip shows double-count warning
  MAO = ARV × (Custom % / 100) − Rehab − Wholesale Fee

IF Mode == 3 (Reverse):
  Financing Buffer not applicable (user is computing backward from known price)
```

**Rationale:** In 2026 high-rate environment (hard money 12-14%), the embedded profit margin in the traditional 70% rule is stretched. The Financing Buffer (3% of ARV) is an explicit safety reduction ONLY for Mode 1. Mode 2 users who are adjusting the percentage are already reflecting market conditions in their chosen %.

**UI enforcement:** The Financing Buffer toggle must physically disable (become unclickable with reduced opacity) when Mode 2 is active. Do NOT just show a warning and allow both — this is how double-counting happens in practice.
```

---

## CRITICAL RULES

### Rule 1 — Canonical 70% Formula

The canonical formula is `MAO = ARV × 0.70 − Rehab`. The "70" is hardcoded as industry standard. Mode 2 allows user override (60-80% range), but Mode 1 always uses exactly 0.70.

### Rule 2 — Never display MAO when invalid

If ARV ≤ Rehab or inputs invalid, display error message instead of MAO. Do NOT show negative or zero MAO as a "valid" result — it confuses users.

### Rule 3 — Mode 3 "Implied % includes Rehab"

The reverse formula is `(Purchase + Rehab) / ARV × 100`, NOT `Purchase / ARV × 100`. This matches the forward formula's logic where Rehab is subtracted BEFORE the percentage is applied to ARV. Documentation must be explicit to prevent user confusion.

### Rule 4 — Status Badge based on Offer-as-%-of-ARV, NOT Implied % (v2 round 1 expert fix — UI clarity mandatory)

Status badge (Deep Value / Standard / Competitive / High Risk) is based on `MAO / ARV × 100`, which reflects the actual percentage of ARV the investor is paying. This is distinct from the Implied % in Mode 3 (which includes Rehab).

Example:
- ARV = $200K, Rehab = $30K, MAO = $110K
- Offer-as-%-of-ARV = 110/200 = 55% → "Deep Value"
- Implied % (Mode 3) = (110+30)/200 = 70% → "Standard flip territory"

Both metrics are correct; they measure different things. Content must explain the distinction.

**UI REQUIREMENT for Mode 3 (v2 round 1 — anti-confusion):**
When user is in Mode 3, show BOTH percentages side-by-side with distinct visual treatment (different color schemes — primary status for Offer %, neutral secondary for Implied %). Below both, render the mandatory clarification banner from the Mode 3 Reverse Output section above.

**Why this matters:** Users encountering "Deep Value" badge alongside "Standard Flip Territory" rule classification will interpret that as a bug unless the UI explicitly shows they're measuring different things. The banner is NOT optional — without it, user trust in the calculator drops.

### Rule 5 — 2026 Rate Environment Disclosure

In 2026, hard money rates are 12-14% and typical hold time is 4-6 months, so financing costs alone can eat 4-5% of ARV. The traditional 70% rule assumed lower rates. Documentation must disclose this and offer the optional Financing Buffer (Mode 1/2) as an adjustment.

### Rule 6 — Not a substitute for Fix and Flip Calculator

The 70% Rule is a screening tool. It assumes generalized costs without modeling specifics. Any deal that passes the 70% rule MUST be validated through Fix and Flip Calculator before committing capital. This is reinforced via:
- Banner at top of results: "Passed 70% Rule? Run full analysis in Fix and Flip Calculator"
- CTA button "Analyze full flip deal" → redirects to `/fix-and-flip-calculator` with URL params

### Rule 7 — Wholesale Fee handling

When Wholesale Assignment Fee > 0, MAO represents the price the wholesaler offers the seller (AFTER extracting their fee). Content must explain this clearly — users sometimes confuse wholesaler role and end-buyer role.

### Rule 8 — Error states

- ARV empty → "Enter ARV to calculate"
- Rehab empty → "Enter rehab budget"
- ARV ≤ 0 → "ARV must be positive"
- Rehab < 0 → "Rehab cannot be negative"
- Rehab > ARV × Percentage → "Rehab exceeds available budget — property may not be viable"
- Mode 3 Purchase Price empty → "Enter your offer to see implied rule"

---

## BENCHMARKS

### What different percentages mean (industry interpretation)

| Percentage | Market Type | Interpretation |
|---|---|---|
| 60-65% | Slow / Buyer's Market | Deep value, strong margin, rare to win in auctions |
| 65-70% | Balanced / Standard | Industry-standard flipping zone |
| 70-75% | Seller's / Competitive | Hot market requires higher offers; verify thin margins |
| 75-80% | Hyper-Competitive | Thin margins; may indicate BRRRR/rental exit, not flip |
| > 80% | Not Flip Territory | Usually long-term hold (rental) or retail buyer |

### Typical 2026 Markets (Sunbelt example — Austin, Phoenix, Atlanta)

Most Sunbelt markets in 2026 require **72-75% rule** to win competitive bids on MLS-listed distressed properties. Off-market and wholesale deals can still clear 65-70%. Auction properties (foreclosure, tax sale) sometimes clear 55-65% for patient investors.

### Rehab Budget sanity check

Rehab typically falls in these bands (national average):
- Cosmetic (paint, flooring, fixtures): $15-30K on a $200K ARV property
- Medium rehab (kitchen, bath, roof): $30-60K
- Heavy rehab (systems, structural): $60-120K+

If user enters Rehab > 40% of ARV, display banner: "Heavy rehab detected. 70% Rule margin may be insufficient — consider 65% Rule or full Fix and Flip analysis."

**v2 round 2 polish fix — extreme rehab escalation:**

Add a second, stronger warning tier for extreme rehab scenarios:

```
IF Rehab > 40% of ARV AND ≤ 80% of ARV:
  → Amber banner: "Heavy rehab detected. 70% Rule margin may be insufficient — 
    consider 65% Rule or full Fix and Flip analysis."

IF Rehab > 80% of ARV:
  → Red banner: "Extreme rehab — the 70% Rule may not apply to this deal. 
    When rehab exceeds 80% of ARV, the property is typically better 
    evaluated as a new build or teardown project rather than a standard 
    flip. The 70% Rule was designed for properties needing cosmetic to 
    moderate rehab (typically 15-40% of ARV). For extreme cases, use 
    Fix and Flip Calculator with detailed cost modeling."
  → Do NOT block MAO display, but emphasize the warning visually
  → Status Badge automatically downgraded to "High Risk" regardless of 
    MAO/ARV percentage (extreme rehab dominates risk assessment)
```

The two-tier system (40%/80%) matches industry rehab classifications:
- 0-15% ARV: cosmetic (paint, flooring, fixtures)
- 15-30% ARV: moderate (kitchens, baths)
- 30-40% ARV: heavy (systems, additions)
- 40-80% ARV: extensive (structural, full gut)
- >80% ARV: teardown/rebuild territory

**Extreme rehab guard (v2 round 2 expert fix):**

If Rehab > 80% of ARV, display STRONGER banner + visual treatment:
```
⚠️ EXTREME REHAB SCENARIO

Rehab cost exceeds 80% of After-Repair Value. The 70% Rule may not apply 
to this deal because:
  • Most of the property's future value is coming from improvements, not 
    the land/shell
  • Traditional 70% Rule benchmarks assume rehab is 15-40% of ARV
  • Deep teardown/rebuild scenarios require different analysis (pro-forma 
    new construction, not flip screening)

Recommended alternatives:
  → Verify ARV estimate is realistic (consult ARV Calculator)
  → Verify Rehab estimate is accurate (get contractor quotes)
  → Use Fix and Flip Calculator for full cost + profit analysis
  → Consider if deal is actually a new construction pro-forma, not a flip
```

Warning color: RED (not amber). Warning must be **blocking** — do not hide MAO, but place warning banner ABOVE the MAO output so user sees it before interpreting result.

**Three-tier rehab warning system:**
- Rehab ≤ 40% ARV → no warning (normal range)
- Rehab 40-80% ARV → AMBER "Heavy rehab" warning (existing rule)
- Rehab > 80% ARV → RED "Extreme rehab" blocking warning (v2 round 2 Fix 1)

---

## SCENARIOS (3 required — v2 round 1 expert fix: synced to Mode 2 benchmark band 65/70/75)

### Standard (Mode 1 default, 70%)
ARV and Rehab as entered, 70% applied.
Label: "Standard flip territory — industry benchmark"

### Conservative (65%)
Same ARV, Rehab +10% (overrun allowance), 65% applied.
Label: "Strong margin — protects against cost overruns"

### Competitive (75%)
Same inputs, 75% applied (hot markets).
Label: "Hot markets — thin margin, verify costs carefully"

**v2 round 1 expert fix — sync with Mode 2 benchmark band:**
Previously scenarios used 65/70/72 while Mode 2 benchmark showed 65/70/75. 
This was inconsistent. Both now use the canonical 65/70/75 trio.

Also: Financing Buffer is NO LONGER enabled in the Competitive scenario 
(previously 72% + Buffer). Reasoning: Fix 2 established Financing Buffer 
conflicts with non-70% percentages (double-counts financing). Scenarios 
must follow this rule too.

Users who want a "high-rate Sunbelt" scenario can either:
  - Use Competitive 75% (thinner buffer reflects rate environment)
  - OR use Standard 70% + Financing Buffer toggle (explicit 3% deduction)
  - NOT both (double count)

User sees all 3 as small cards next to main MAO output:
```
[CONSERVATIVE 65%]    [STANDARD 70%]    [COMPETITIVE 75%]
    $[X]                  $[X]                $[X]
  Rehab +10%            Base              Hot market
```

---

## SENSITIVITY TABLE (1 required)

### Table — Percentage × Rehab Variance

Rows: Percentage 65/67/70/72/75%
Cols: Rehab variance −10% / base / +10% / +20%

Cells: MAO at that combination.

Total cells: 5 × 4 = 20 cells — well under performance limits.

Highlight user's current assumption with amber border.

Purpose: shows how fragile (or robust) the MAO is to two common real-world variations — market competitiveness and rehab cost overruns.

**Table caption (v2 round 2 expert fix — explain intermediate percentages):**

Required caption below the table:
```
"Intermediate percentages (67%, 72%) show market transition zones between 
the standard benchmarks of 65% (Conservative), 70% (Standard), and 75% 
(Competitive). Use these mid-zones to model gradual market shifts — for 
example, if your target market is moving from balanced (70%) to competitive 
(75%), the 72% column shows where you are currently. Main scenarios above 
use the canonical 65/70/75 trio; this table adds 67% and 72% for finer 
sensitivity resolution."
```

This caption prevents user confusion about why the table uses 5 rows (67, 72) while the Scenarios block uses only 3 (65, 70, 75). The table is for **sensitivity resolution**, the scenarios are for **decision framing**.

---

## VISUALIZATIONS

### 1. MAO Bar Chart (Mode 1/2)
Horizontal bar showing:
- MAO (green/amber/red by status)
- ARV (full scale, gray)
- Visual gap between MAO and ARV = "buffer for costs and profit"

Labels on bars: MAO $[X], Buffer $[Y] ([Z]% of ARV).

### 2. Percentage Comparison Cards (Mode 2)
3 cards side-by-side at 65%/70%/75% with MAO, status badge, and short interpretation per Rule 1 benchmarks.

### 3. Reverse Mode Gauge (Mode 3)
Horizontal gauge 60% → 80% showing user's Implied % as a pointer. Color zones:
- 60-65% green
- 65-70% blue
- 70-75% amber
- 75-80% red

---

## TEST CASES (6 required, tolerance ±$500 for currency, ±0.5 pp for percentages)

### Test 1 — Standard Classic Case
Inputs: ARV $250,000, Rehab $30,000, 70% rule, no wholesale fee
Expected:
- MAO = $250,000 × 0.70 − $30,000 = $175,000 − $30,000 = **$145,000**
- Gross Margin = $250K − $145K − $30K = $75,000
- Offer as % of ARV = 58% → Status "Deep Value" (GREEN)

### Test 2 — High Rehab Scenario
Inputs: ARV $300,000, Rehab $80,000, 70% rule
Expected:
- MAO = $300,000 × 0.70 − $80,000 = $210,000 − $80,000 = **$130,000**
- Rehab = 26.7% of ARV → heavy rehab warning should trigger if ≥40%; this is borderline
- Offer as % of ARV = 43% → Status "Deep Value" (GREEN)

### Test 3 — Wholesale Fee Scenario
Inputs: ARV $200,000, Rehab $25,000, 70% rule, Wholesale Fee $10,000
Expected:
- MAO = $200,000 × 0.70 − $25,000 − $10,000 = **$105,000**
- Content must clarify wholesaler offers seller $105K, assigns to end-buyer for $115K
- Status: Offer as % of ARV = 52.5% → "Deep Value"

### Test 4 — Unviable Deal
Inputs: ARV $150,000, Rehab $120,000 (unrealistic but tests edge case)
Expected:
- MAO = $150,000 × 0.70 − $120,000 = $105,000 − $120,000 = **−$15,000** (invalid)
- Calculator displays error: "Rehab exceeds available budget — property may not be viable"
- Do NOT show negative MAO as primary output

### Test 5 — Competitive Market (Mode 2, 72% rule) — v2 round 1 expert fix
Inputs: ARV $400,000, Rehab $50,000, Custom 72% (Financing Buffer attempt to enable → DISABLED by UI per v2 Fix 2)
Expected:
- MAO = $400,000 × 0.72 − $50,000 = **$238,000**
- Financing Buffer toggle is DISABLED (grayed out) with tooltip explaining double-count prevention
- Offer as % of ARV = 59.5% → "Deep Value" (GREEN)
- Benchmark band shows: 65% MAO $210K / 70% MAO $230K / 72% MAO $238K (user's, amber border) / 75% MAO $250K
- Verify: UI test must confirm Financing Buffer toggle is physically disabled in Mode 2

**Test 5b — Financing Buffer in Mode 1 (separate test for buffer logic):**
Inputs: ARV $400,000, Rehab $50,000, Mode 1 Standard 70%, Financing Buffer ENABLED
Expected:
- Base MAO = $400,000 × 0.70 − $50,000 = $230,000
- Financing Buffer = $400,000 × 0.03 = $12,000
- Adjusted MAO = $230,000 − $12,000 = **$218,000**
- Display line: "MAO with 2026 Financing Buffer: $218,000"

### Test 6 — Reverse Mode
Inputs: ARV $300,000, Rehab $40,000, Purchase Price $170,000
Expected:
- Implied % = (($170,000 + $40,000) / $300,000) × 100 = ($210,000 / $300,000) × 100 = **70%**
- Interpretation: "Standard flip territory"
- Offer as % of ARV = 56.7% → "Standard Flip Zone" badge

---

## URL IMPORT SCHEMA

From ARV Calculator:
```
/70-percent-rule-calculator?arv=250000
```
Pre-fills ARV from ARV Calculator's output.

From Fix and Flip Calculator:
```
/70-percent-rule-calculator?arv=250000&rehab=30000
```
Pre-fills both fields.

Short param keys: `arv`, `rehab`, `pct` (custom %), `pp` (purchase price Mode 3), `wf` (wholesale fee)

---

## INTEGRATION CROSS-LINKS

### Inbound (from other calculators)
- **ARV Calculator** → "Check offer viability (70% Rule)" button → imports ARV
- **Fix and Flip Calculator** → "Quick offer screen (70% Rule)" button → imports ARV + Rehab

### Outbound (from this calculator)
- "Analyze full flip deal" button → `/fix-and-flip-calculator?arv=X&rehab=Y&price=MAO`
- "Compare as BRRRR" button → `/brrrr-calculator?arv=X&rehab=Y` (if MAO produces viable BRRRR-style leverage)
- "Compare with another deal" → `/compare-real-estate-deals?d1_type=flip&d1_arv=X&d1_rb=Y&d1_p=MAO`

---

## OUTPUT CHECKLIST

Before finalizing this RIS, verify:

### Formula correctness
- [ ] Canonical formula: MAO = ARV × 0.70 − Rehab (Rule 1)
- [ ] Wholesale Fee subtracts AFTER percentage applied
- [ ] Reverse Mode formula: `(Purchase + Rehab) / ARV × 100` (NOT just Purchase/ARV)
- [ ] Status Badge based on `MAO / ARV × 100` (NOT implied %)
- [ ] Financing Buffer = ARV × 3% (optional Mode 1/2 feature)
- [ ] Negative MAO → error state, never displayed as valid
- [ ] Custom % in Mode 2 clamped to [60, 80]

### UI/UX
- [ ] 3 modes via top-level tabs (Standard / Adjustable / Reverse)
- [ ] Amber / Orange / Purple color coding per mode
- [ ] MAO rounded to nearest $500 for display
- [ ] Status badge visible on primary output
- [ ] Mode 2 benchmark band (65/70/75%) always shown when Adjustable mode active
- [ ] Sensitivity table (5×4 = 20 cells)
- [ ] 3 scenarios as comparison cards

### Warnings and guards
- [ ] Rehab > 40% ARV triggers heavy rehab warning
- [ ] Invalid inputs (ARV ≤ 0, Rehab < 0, Rehab > ARV×%) show error state
- [ ] Custom % < 60 or > 80 triggers warning
- [ ] 2026 high-rate environment disclosure (Rule 5)
- [ ] "Not a substitute for Fix and Flip Calculator" banner (Rule 6)

### Language and tone
- [ ] Uses "screens" / "suggests" / "projects", never "determines" or "calculates your max offer"
- [ ] Placeholders are instructions ("Enter ARV") NOT examples ("e.g., 200000")
- [ ] No "qualifies for" language (DSCR bug prevention)
- [ ] Wholesale vs end-buyer distinction explicit in Rule 7 + FAQ
- [ ] Offer as % of ARV clearly labeled, distinguished from Implied % (Rule 4)

### Cross-calculator integration
- [ ] Import link from ARV Calculator (ARV field)
- [ ] Import link from Fix and Flip Calculator (ARV + Rehab)
- [ ] Export link to Fix and Flip Calculator with MAO as Purchase Price
- [ ] Export link to Compare Real Estate Deals (flip strategy)
- [ ] Saved Scenarios widget consistent with other calculators (N/20 saved · Compare all)

### Test suite
- [ ] All 6 test cases pass within tolerance
- [ ] Test 4 (unviable deal) correctly displays error, not negative MAO
- [ ] Test 6 (Reverse Mode) correctly computes 70% implied
- [ ] **Test 5 updated (v2 round 1 Fix 7): 72% rule produces MAO $238K, Financing Buffer DISABLED in Mode 2 UI**
- [ ] **Test 5b added (v2 round 1 Fix 2 & 7): Mode 1 + Financing Buffer produces MAO $218K; separate test for buffer logic**

### v2 round 1 expert fixes (7 items applied)
- [ ] **Fix 1 (Critical): Mode 3 displays BOTH Offer % and Total % side-by-side with distinct color schemes; mandatory clarification banner below. Status Badge reflects Offer %, Implied Rule reflects Total %. UI requirement enforced in Rule 4.**
- [ ] **Fix 2 (Critical): Financing Buffer PHYSICALLY DISABLED in UI when Mode 2 (Custom %) is active. Tooltip explains double-count prevention. Mode 1-only feature.**
- [ ] **Fix 3 (Critical): Primary Metric display rule explicit — MAO shown ONLY when valid (>0). IF invalid/negative MAO → error state replaces primary metric, no Secondary Metrics, no Status Badge. Recovery CTA present.**
- [ ] **Fix 4 (Medium): "Gross Margin" renamed to "Gross Margin (Pre-Cost Buffer)" with mandatory tooltip "This is NOT profit".**
- [ ] **Fix 5 (Medium): "Implied Profit + Costs" renamed to "Rule Buffer (Profit + Costs Allocation)" with explanation tooltip.**
- [ ] **Fix 6 (Medium): Mode 3 subtitle "Use this mode to check if your deal matches investor expectations" + 4 use cases documented for HOW TO USE section.**
- [ ] **Fix 7 (Medium): Scenarios synced with Mode 2 benchmark band — both use canonical 65/70/75 (was 65/70/72 inconsistency). Competitive scenario uses 75% pure (no Financing Buffer, conflicts with Fix 2).**

---

### v2 round 2 expert fixes (4 polish items applied)
- [ ] **Fix 1: Three-tier rehab warning system — Rehab >80% ARV triggers RED "Extreme Rehab" blocking banner above MAO output (previously only amber warning at >40%)**
- [ ] **Fix 2: Graduated percentage warning system in Mode 2 — <60 RED, 60-65 AMBER, 65-70 GREEN, 70-75 AMBER, 75-80 RED (stronger warning). UI clamps at 80**
- [ ] **Fix 3: Sensitivity table caption explaining intermediate percentages 67% and 72% as "market transition zones" vs Scenarios block using canonical 65/70/75 trio**
- [ ] **Fix 4: Reverse Mode CTA button "Run full flip analysis with this price" redirecting to Fix and Flip Calculator with pre-filled URL params (ARV, Rehab, Purchase Price)**

---

**End of RIS v1 → v2 round 1 → v2 round 2 FINAL (2 review rounds, 11 fixes total: 3 critical + 8 medium). This document defines the complete specification for the 70% Rule Calculator. Math, UX logic, consistency, error protection, and implementability all reviewed and accepted. Pair with 70-percent-rule-seo-prompt-final.md for full SEO package.**
