# SEO Package Prompt — Compare Real Estate Deals Calculator (v2)

You are a senior SEO copywriter specializing in US real estate investment content. Your job is to produce a **complete SEO content package** for the Compare Real Estate Deals Calculator page.

The output of this prompt is pure content — no code, no HTML, no Vue. It will later be combined with the RIS specification and the Master Prompt to generate the actual page.

---

## PRIORITY EXECUTION RULE (v2 SEO fix — READ FIRST)

This prompt is ~1400 lines at the upper bound of reliable LLM instruction following. If instruction conflict or capacity overload occurs during generation, prioritize adherence in this strict order:

**DOWNSTREAM RISK ACKNOWLEDGMENT (v2 round 3 expert fix):** The biggest risk 
to this SEO package is not this prompt itself — it is the downstream Master 
Prompt that combines this SEO content with the RIS spec to generate the Vue 
page. Common failure modes at the Master Prompt stage: structure collapses, 
blocks merge, formatting dies, subheadings disappear. To protect against 
this, the SEO output from THIS prompt must preserve explicit structural 
markers (H2 labels, section anchors, bullet formatting). The Master Prompt 
(master-prompt-v4.md) must be separately audited to ensure it preserves this 
structure. Out of scope for this file — flagged for project-level attention.

1. **TITLE / META / H1 must be exact** — use the hardcoded fallback strings verbatim. No generation, no modification, no variation.
2. **OVERVIEW P1 plain-language opener + primary keyword placement** — the opening sentence ("helps you compare real estate deals side by side and see which one performs better over 5 years") is mandatory verbatim.
3. **FORMULA methodology (13 steps, no skipping)** — MANDATORY EXECUTION RULES govern worked example; apply STOP-RATHER-THAN-APPROXIMATE if any step cannot be executed precisely.
4. **Winner logic and tier labels** — Clear Winner / Slight Edge / Too Close to Call / Cluster Detected. Exact labels, in all 4 places (Overview P2, How to Use, Result Meaning, FAQ).
5. **Pre-tax disclaimers in 5 required placements** — Overview P4, How to Use Step 5, per-deal card inline text, Limitations, FAQ Q5.
6. All remaining sections (Benchmarks, Strategy, Applications, Industry Standards, Limitations, Common Mistakes, Related Calculators, Schema).

**Do NOT drop items 1–5 under any circumstances.** If generation runs out of capacity, items 6 are the only acceptable casualties — and even then, the sections should be stubbed (e.g., "BENCHMARKS_H2 + placeholder") rather than silently omitted.

Self-check before finalizing: confirm TITLE is the exact fallback, META is the exact fallback, H1 is the exact fallback, OVERVIEW_P1 opens with the mandatory plain-language sentence, FORMULA has all 13 steps executed OR the STOP statement issued, 4 tier labels are present verbatim, pre-tax disclaimer appears 5 times.

## GLOBAL RULE (v2 round 3 SEO expert fix — redundancy handling)

If the same requirement appears multiple times across this prompt (e.g., 
pre-tax disclaimer mentioned in Overview P4 rules, How to Use Step 5 rules, 
Limitations rules, FAQ Q5 rules, and again in OUTPUT CHECKLIST), **execute 
it ONCE correctly in each specified placement** rather than duplicating 
language or over-expanding. 

The prompt lists requirements in multiple places for redundancy protection 
(ensuring no single scan misses the rule), NOT because each mention is an 
additional instance. The generated page should contain the required 
content the specified number of times (e.g., pre-tax disclaimer = exactly 
5 placements), not more.

If requirements APPEAR to conflict, prioritize the PRIORITY EXECUTION RULE 
order above. If requirements genuinely conflict (rare), the CRITICAL 
CHECKS in OUTPUT CHECKLIST take precedence.

## STRUCTURE PRESERVATION RULES (v2 round 3 SEO expert fix — anti-collapse)

These three rules protect against common generation failure modes where the 
output degrades structurally under instruction overload:

**Rule A — Section separation:**
Each section must be rendered as a separate structured block with its own 
H2 (## heading). Do NOT merge sections (e.g., combining "Benchmarks" and 
"Strategy" into one block). Do NOT collapse headings into paragraphs 
(e.g., removing the H2 marker and folding section content into prose). 
Each of the 15 sections in the structure list must have its own clearly 
marked H2.

**Rule B — Paragraph length:**
Keep paragraph length to 2-5 sentences maximum. Avoid long dense blocks. 
If content for a single idea exceeds 5 sentences, split into two 
paragraphs or use a bulleted sub-list. Long dense paragraphs reduce SEO 
readability scores (Flesch-Kincaid) and harm scannability for investor 
readers who skim before reading.

**Rule C — List format preservation:**
Use bullet points (- item) or numbered lists (1. item) for enumerated 
content. Do NOT convert lists into flowing paragraphs. Lists of 3+ items 
(e.g., "Winner tier meanings", "6 Applications", "5 Limitations") must 
remain as lists in the final output. Converting a list to a paragraph 
destroys both readability and structured-data signals that Google uses 
for featured snippets.

---

## YOUR TASK

Write an SEO package for:

```
Calculator Name:    Compare Real Estate Deals Calculator
Slug:               compare-real-estate-deals
Primary keyword:    compare real estate deals calculator
Secondary keywords: rental vs brrrr calculator, real estate deal comparison tool,
                    compare investment properties calculator, real estate strategy
                    comparison, rental vs flip vs brrrr, multi-deal comparison
                    real estate, side-by-side real estate calculator
Primary metrics:    DUAL — 5-Year Total Return $ AND Annualized Return % (co-primary)
                    Annualized Return drives Winner logic
Secondary metric:   Composite Score 0-100 (6-factor weighted)
Target audience:    US real estate investors evaluating multiple opportunities —
                    from first-time investors choosing between Rental and BRRRR,
                    to experienced investors screening 2-3 deals per week
Traffic priority:   Priority 1 (estimated 10K-20K searches/month; unique niche
                    with weak competition — "rental vs brrrr calculator" ~8K/mo)
```

Use the attached RIS specification (compare-ris.md) as the source of truth for formulas, thresholds, benchmarks, and test cases. Do not invent numbers — pull them from the RIS.

---

## CRITICAL DISTINCTIONS TO PRESERVE

This calculator is fundamentally different from other RealCalc calculators. Throughout the SEO package:

**1. Decision engine, NOT single-deal analyzer**

Every other RealCalc calculator analyzes ONE deal (Cap Rate, NOI, DSCR, ARV, Rental, Fix and Flip, BRRRR). Compare Deals analyzes MULTIPLE deals (2-3) AND produces a ranked verdict with calibrated confidence. Content must reflect this role.

**2. DUAL primary metrics: 5-Year Total Return $ AND Annualized Return %**

- **5-Year Total Return $**: absolute dollar figure over 60 months, normalized across strategies
- **Annualized Return %**: CAGR for Rental/BRRRR and Flip reinvestment; IRR only for single-flip mode
- Both are displayed prominently on every deal card — never omit either
- **Winner logic prioritizes Annualized Return**, not Total Return (avoids time-value bias where $50K in 6 months looks equal to $50K over 5 years)

**3. Secondary metric: Composite Score 0-100 (6-factor weighted)**

- Factors: Return (30%), Risk (20%), Liquidity (15%), Time-to-Profit (15%), Effort (10%), Scalability (10%)
- Purpose: tie-breaker within 15% Annualized Return band; does NOT override Winner at larger margins (Return Dominance Rule)
- Content must explain weights are hardcoded and embed editorial judgment

**4. Winner tiering with CALIBRATED CONFIDENCE**

Three tier levels — Clear Winner, Slight Edge, Too Close to Call — plus Cluster Detected for 3-deal tight scenarios. This is NOT "always produce a winner" — sometimes the honest answer is "don't use financial analysis to decide."

**5. Hub-screener: accepts imports from Rental, Fix and Flip, BRRRR, ARV calculators**

Compare Deals is the convergence point of the calculator ecosystem. URL parameters from source calculators auto-populate deal cards. Content must emphasize this workflow.

**6. Pre-tax analysis ONLY**

Post-tax treatment meaningfully changes Flip-vs-Rental comparisons. Stated explicitly in Overview P4, How to Use Step 5, every deal card, Limitations, and FAQ.

**7. Fix and Flip reinvestment assumption**

Flip Total Return assumes 100% reinvestment into identical flips over 5 years. This is optimistic. Content must include reinvestment caveat on every mention of Flip outcomes. Mode C (ROI degradation, opt-in) available for realistic modeling.

**8. Extreme return guard + auto-downgrade**

When Flip Annualized Return exceeds 80%, a warning displays AND Winner tier is auto-downgraded one level. Content must explain this protects users from fantasy-return recommendations.

**9. Visual priority for Winner**

UI enforces that Winner card is visually dominant even if non-Winner has higher Composite Score. Content (especially How to Use) should set expectation: "we highlight the Winner on purpose — other metrics are secondary."

**10. Single source of truth for Break-Even**

Operating Break-Even uses cash-flow-only formula (no equity, no refi). This is defined once in the RIS and must be repeated consistently in SEO content. Never describe break-even as "when equity crosses zero" or similar — that definition has been explicitly rejected.

---

## LANGUAGE AND TONE RULES

1. **Use "projects" / "estimates" / "compares"**, never "calculates" or "determines" — comparison involves judgment, not pure arithmetic.

2. **Say "decision tool" / "screening hub"**, not "calculator" in strategic contexts. The calculator designation applies to mechanics; decision-engine is the product positioning.

3. **Natural keyword placement** — keywords must integrate with sentence flow. No keyword stuffing. Primary keyword appears in TITLE, H1, META, OVERVIEW_P1, at least 2 H2 headings.

4. **No "qualifies for" language** — banned from DSCR calculator bug. Use "falls within" or "meets criteria."

5. **Input placeholders are instructions, not examples** — "Enter purchase price" not "e.g., 250000". Banned from DSCR calculator bug.

6. **Honest uncertainty** — language reflects that Compare Deals produces judgment, not truth. "The calculator projects Deal A as Clear Winner" not "Deal A wins."

7. **Pre-tax disclaimer** appears in 5 places exactly: Overview P4, How to Use Step 5, per-deal card (inline small text), Limitations, FAQ (dedicated Q).

8. **Never use "better deal"** as a standalone judgment. Use "higher Annualized Return" or "Winner on return" — specific about which dimension.

9. **Honor the tier labels exactly**: Clear Winner, Slight Edge, Too Close to Call, Cluster Detected. Never coin new labels like "Mild Winner" or "Moderate Edge."

10. **Cross-link to source calculators** throughout — Rental Property, Fix and Flip, BRRRR, ARV. This is the hub's purpose.

---

## SEO STRUCTURE (15 sections in strict order)

1. TITLE + META DESCRIPTION + H1
2. OVERVIEW (4 paragraphs)
3. HOW TO USE (5 steps + 4 pro tips + 3 Winner tier explanations + Cluster)
4. INPUTS & OUTPUTS (table)
5. FORMULA (intro box + step-by-step + visual schema + worked example)
6. WHAT IS (3 paragraphs defining Compare Deals + Winner concept)
7. RESULT MEANING (Clear Winner / Slight Edge / Too Close / Cluster)
8. BENCHMARKS (by strategy pair + by deal volume)
9. STRATEGY (5 blocks: First-Time Investor, Scaling Investor, Wholesaler, Agent, Portfolio Rebalancer)
10. APPLICATIONS (6 use cases)
11. INDUSTRY STANDARDS (normalization methodologies + 5-year convention + DealCheck/BiggerPockets comparison)
12. LIMITATIONS (5 items + When Not to Use)
13. COMMON MISTAKES (5 items)
14. FAQ (9 Q&A)
15. RELATED CALCULATORS + SCHEMA block

---

## TITLE (hardcoded fallback — following ARV v2 / BRRRR v5 precedent)

```
MANDATORY — use exact fallback string below, no exceptions:

TITLE: Compare Real Estate Deals — Strategy Hub | RealCalc
(verified 51 characters — safely under 60-char Google cutoff)

SIMPLIFIED RULE: ALWAYS use the fallback title above. Do NOT generate a custom 
title. Do NOT modify the fallback. Do NOT attempt character counting for alternatives.

Rationale: the fallback has been pre-verified at 51 characters and contains the 
primary keyword anchor ("Compare Real Estate Deals"), USP marker ("Strategy Hub"), 
and brand suffix. Custom title generation risks producing too-long or malformed 
titles for marginal SEO gain.
```

## META DESCRIPTION (hardcoded — following TITLE fallback convention)

```
MANDATORY — use the exact META DESCRIPTION below, no exceptions:

META: Compare real estate deals side-by-side — Rental vs BRRRR vs Flip. See 5-year profit, annualized return, and winner tier. Free tool for investors.
(verified 157 characters — within 150-160 Google band)

SIMPLIFIED RULE (v2 SEO fix following expert review): ALWAYS use the fallback 
META DESCRIPTION above. Do NOT generate a custom META. Do NOT modify the 
fallback. Do NOT attempt character counting for alternatives.

Rationale: the fallback is pre-verified at 157 characters, contains the 
primary keyword anchor ("Compare real estate deals"), the high-intent 
secondary keyword ("Rental vs BRRRR vs Flip" — closely matches a ~8K/mo 
search query), the differentiator terms ("5-year profit", "annualized 
return", "winner tier"), and a cost/CTA qualifier ("Free tool for 
investors"). Custom META generation risks producing weaker keyword 
coverage or bad character counts.

Why this META compensates for the "branded" TITLE:
The TITLE ("Compare Real Estate Deals — Strategy Hub | RealCalc") is 
intentionally product-forward for brand reasons but lacks the word 
"calculator" and some high-intent keywords. The META picks up the slack 
by leading with pure search intent ("Compare real estate deals 
side-by-side") and hitting the "rental vs BRRRR vs flip" query directly.
```

## H1 (hardcoded — strengthened for search intent)

```
MANDATORY — use the exact H1 below, no exceptions:

H1: Compare Real Estate Deals Calculator — Rental vs Flip vs BRRRR Side-by-Side
(verified 75 characters — intentionally slightly over 70-char guideline 
because keyword density benefit outweighs the display trim on SERP; body 
pages allow longer H1s than TITLE tags)

SIMPLIFIED RULE (v2 SEO fix): ALWAYS use the fallback H1 above. Do NOT 
generate a custom H1. Do NOT modify the fallback.

Why this H1 is strong:
- Primary keyword "compare real estate deals" appears in first 4 words
- Word "calculator" present (compensates for TITLE lacking it)
- High-intent comparison phrase "Rental vs Flip vs BRRRR" present
- "Side-by-Side" reinforces the user intent signal Google ranks on
- Natural sentence flow — not keyword-stuffed

This H1 directly compensates for the product-forward TITLE by loading 
the search-intent keywords that TITLE drops. Google gives ranking weight 
to H1 keyword presence independently of TITLE — this is why the H1 is 
slightly longer than conventional guidance: the extra length buys us 
the "vs Flip vs BRRRR" high-intent phrase.
```

---

## OVERVIEW (4 paragraphs)

```
OVERVIEW_H2: Compare Investment Properties Side by Side — What This Calculator Does
OVERVIEW_SUBTITLE: A deal comparison tool for evaluating 2-3 real estate deals across 
                   Rental, Fix and Flip, and BRRRR strategies

OVERVIEW_P1:
  [5-6 sentences. MUST START with a plain-language opening sentence (v2 SEO 
   fix — expert feedback: "where is simple user language?"). The opening 
   sentence MUST be substantially verbatim (v2 round 2 expert fix — added 
   "which deal is better" phrase for search-intent coverage):
   
   "The Compare Real Estate Deals Calculator helps you compare real estate 
   deals side by side and see which one performs better over 5 years — and 
   understand which deal is likely to perform better based on your inputs."
   
   ONLY after this plain-language opener, introduce the product terminology 
   (decision engine, normalization engine, hub-screener). This ordering is 
   critical for SEO ranking — Google rewards pages that open with direct 
   match to user intent, not brand/product framing. The "which deal is 
   likely to perform better" phrase directly matches a high-volume search 
   query ("which deal is better real estate") that generic calculators do 
   not address.
   
   Must contain:
   - Primary keyword "compare real estate deals calculator" once, naturally 
     (already present in "The Compare Real Estate Deals Calculator helps 
     you compare real estate deals..." — this ALONE counts as two keyword 
     instances, natural flow)
   - VERBATIM placement of AT LEAST TWO of the three high-intent secondary 
     keywords (v2 round 3 expert fix — softened from "ALL THREE" to "AT 
     LEAST TWO" for generation stability; fitting all three often forced 
     awkward phrasing):
       • "compare investment properties side by side" (or "compare investment 
         properties" — flexible word order; must contain the core phrase)
       • "rental vs flip vs brrrr" (exact sequence, or "rental vs brrrr vs 
         flip" — any order of the three)
       • "real estate deal comparison" (exact phrase)
     
     Aim for all three if natural, but DO NOT compromise readability. The 
     third keyword can appear in H2 headings elsewhere on the page 
     (Benchmarks section, Strategy section) to maintain overall coverage.
   - Core USP: normalizes 3 different strategies into comparable metrics 
     (5-Year Total Return + Annualized Return)
   - Mention hub-screener role: accepts imports from Rental, Fix and Flip, 
     BRRRR, ARV calculators
   - Tone: plain language FIRST, then product terminology

   Example structure (rewrite in own voice — KEEP the plain-language opener 
   verbatim as the first sentence):
   
   "The Compare Real Estate Deals Calculator helps you compare real estate 
   deals side by side and see which one performs better over 5 years — and 
   understand which deal is likely to perform better based on your inputs. 
   It evaluates up to three investment properties across Rental, Fix and 
   Flip, and BRRRR strategies — making it the most practical tool for the 
   rental vs flip vs BRRRR decision that most investors face. As a 
   normalization engine, it converts these different deal types into two 
   comparable metrics: 5-Year Total Return in dollars and Annualized Return 
   percentage, plus a 6-factor Composite Score (return, risk, liquidity, 
   time-to-profit, effort, scalability). Unlike generic calculators, this 
   real estate deal comparison tool accepts direct imports from specialized 
   calculators (Rental Property, Fix and Flip, BRRRR, ARV) via URL 
   parameters — letting you compare investment properties side by side 
   without re-entering data. Designed for US investors in 2026, it answers 
   the question single-deal tools cannot: which opportunity should I 
   pursue with my available capital?"]

OVERVIEW_P2:
  [4-5 sentences. Must explain:
   - The Winner tiering system: Clear Winner / Slight Edge / Too Close to Call
   - WHY tiering is calibrated confidence, not guaranteed recommendation
   - The Return Dominance Rule (≥25% relative Annualized lead overrides 
     Composite Score)
   - The Cluster Detection for 3-deal tight scenarios
   - Framing: the calculator is honest about its own certainty
   
   Must introduce specific terminology ("Annualized Return", "Composite 
   Score") so readers don't encounter them cold later in the page.]

OVERVIEW_P3:
  [3-4 sentences. Must mention:
   - Integration with single-deal calculators (the deal screening tool 
     workflow — varies vocabulary from "hub-screener" used in P1)
   - Example workflow: "run Rental Property Calculator → click 'Compare 
     with another deal' → land on this page with Rental pre-filled → add 
     a BRRRR deal manually → see Winner"
   - Why 5-year horizon is fixed (prevents apples-to-oranges)
   - Who this tool is for: investors choosing between strategies, not 
     passive homebuyers
   
   VOCABULARY VARIETY RULE (v2 round 2 expert fix): across P1-P4 of the 
   Overview, the term "decision engine" should appear at most ONCE (already 
   used in OVERVIEW_SUBTITLE via "deal comparison tool" replacement). 
   "Normalization engine" should appear at most ONCE (typically in P1). 
   "Hub-screener" should appear at most ONCE (in P1). Alternative terms 
   to use for variety: "comparison tool", "deal comparison tool", 
   "screening tool", "real estate deal comparison tool". This variety 
   improves SEO readability score and avoids keyword-like repetition of 
   product jargon.]

OVERVIEW_P4:
  [3-4 sentences. MUST contain:
   - Pre-tax disclaimer (first of 5 required placements): "All figures 
     shown are pre-tax. Post-tax treatment meaningfully changes Flip vs 
     Rental comparisons — consult a real estate CPA before committing 
     capital."
   - "Not a substitute for licensed appraisal or lender underwriting" 
     disclaimer (first of 4 required placements)
   - Reinforce that this is a SCREENING tool, not a decision authority
   - Call-to-action invitation to explore: "Enter your first deal above 
     to begin, or import from Rental Property, Fix and Flip, or BRRRR 
     calculators."]
```

---

## HOW TO USE (5 numbered steps + 4 pro tips + 3 Winner tier explanations + Cluster)

```
HOW_TO_USE_H2: How to Run a Rental vs BRRRR vs Flip Comparison
HOW_TO_USE_SUBTITLE: A 5-step workflow from deal entry to Winner verdict

STEP_1:
  TITLE: Choose how many deals to compare (2 or 3)
  BODY: [3-4 sentences — explain 2-deal vs 3-deal comparison.
         - 2 deals: side-by-side, standard Winner Tier logic
         - 3 deals: full 3-way ranking + Cluster Detection (if AR_1 − AR_3 
           < 2 pp AND CS spread < 10 pts, all three are declared a cluster 
           with no Winner)
         - Recommend 2 deals for most investors; 3 deals when actively 
           screening a pipeline
         - Mention Solo Analysis mode if only 1 deal entered: single-deal 
           metrics shown, no Winner declared]

STEP_2:
  TITLE: Select each deal's strategy — Rental, Fix and Flip, or BRRRR
  BODY: [3-4 sentences — explain mixed strategies are supported.
         - Any combination works: Rental + Rental, Rental + BRRRR, 
           Rental + Flip + BRRRR, two Flips side-by-side, etc.
         - Each strategy pulls a different input set (Rental: rent + loan 
           terms; Flip: rehab + ARV + hold period; BRRRR: rehab + ARV + 
           refi terms)
         - Tip: if importing from another calculator via URL, the strategy 
           is pre-selected and fields are pre-filled — you only need to 
           verify inputs]

STEP_3:
  TITLE: Enter or import deal parameters
  BODY: [3-4 sentences — two paths:
         - Manual entry: fill each field for each deal
         - Import from source calculator: click "Compare with another deal" 
           button in Rental Property, Fix and Flip, BRRRR, or ARV 
           calculators to land here with deal pre-populated
         - Mention global Market Assumptions panel: Annual Appreciation 
           and Rent Growth apply uniformly to all deals by default 
           (advanced mode allows per-deal override with warning)
         - Tip: realistic appreciation for 2026 is 2-4% depending on 
           market — values above 5% require market justification]

STEP_4:
  TITLE: Review Winner tier and Composite Score breakdown
  BODY: [4-5 sentences — the interpretation step.
         - Primary output: 5-Year Total Return $ AND Annualized Return % 
           per deal
         - Winner banner shows tier: Clear Winner (green), Slight Edge 
           (amber), Too Close to Call or Cluster Detected (neutral)
         - Winner is determined by Annualized Return, with Composite 
           Score as tie-breaker inside 15% band — this is intentional 
           to avoid time-value bias
         - 6-factor radar chart lets you see WHERE each deal leads or 
           lags: Return, Risk, Liquidity, Time-to-Profit, Effort, 
           Scalability
         - If Winner card has lower Composite Score than runner-up, an 
           additional badge explains "Highest Return, not Highest Score"]

STEP_5:
  TITLE: Cross-check with 70% Rule, 75% Rule, and stress-test scenarios
  BODY: [4-5 sentences. MUST contain pre-tax disclaimer (second placement):
         - For Fix and Flip deals: verify 70% Rule Max Offer from ARV 
           Calculator
         - For BRRRR deals: verify 75% Rule All-In target
         - Run the Conservative scenario (−2 pp appreciation, +5 pp 
           vacancy) to stress-test whether Winner changes
         - For Flip deals: toggle ROI compression (Mode C) for realistic 
           reinvestment modeling — default Mode A assumes 100% 
           reinvestment which is optimistic
         - "All figures shown are pre-tax. Post-tax treatment especially 
           affects Flip vs Rental comparisons — flip profits are taxed as 
           ordinary income, while long-term rental holds benefit from 
           depreciation and long-term capital gains rates. Consult a 
           real estate CPA before committing capital."]

PRO_TIP_1:
  [Pattern: pro_tip for 5-year horizon convention.
   "The calculator uses a 5-year horizon to prevent apples-to-oranges 
   comparisons. A 6-month Flip and a 30-year Rental cannot be compared 
   on raw profit alone — annualization plus a fixed horizon makes the 
   metrics meaningful. If you want shorter or longer hold periods, use 
   the single-deal calculators directly."]

PRO_TIP_2:
  [Pattern: pro_tip for Composite Score weights.
   "Composite Score weights (Return 30%, Risk 20%, Liquidity 15%, 
   Time-to-Profit 15%, Effort 10%, Scalability 10%) embed editorial 
   judgment. If you heavily prioritize passive income, you'll want to 
   mentally boost the Rental's Effort score. Advanced weight override 
   is planned for v2."]

PRO_TIP_3:
  [Pattern: pro_tip for Cluster Detected scenario.
   "If the calculator shows 'Cluster Detected — No Clear Winner' in a 
   3-way comparison, it means all three deals are statistically 
   indistinguishable (within 2 percentage points Annualized Return and 
   10 points Composite Score). This is a calibrated signal that 
   financial analysis alone cannot decide — use non-financial factors 
   (location preference, property management availability, capital 
   constraints)."]

PRO_TIP_4:
  [Pattern: pro_tip for hub workflow.
   "The fastest workflow: run each deal first in its specialized 
   calculator (Rental Property for rentals, Fix and Flip for flips, 
   BRRRR for BRRRR, ARV if you need an ARV estimate), then click 
   'Compare with another deal' on the results page. This imports the 
   deal with all your validated inputs — saving double-entry and 
   ensuring metrics match between the single-deal analysis and this 
   comparison."]

HOW_TO_USE_TIERS_H3: Understanding Your Winner Tier

TIER_CLEAR_WINNER:
  TITLE: Clear Winner (green banner)
  CRITERIA: [Summary, no duplicate numbers — refer to RIS for thresholds.
             "One deal leads on Annualized Return by a meaningful margin 
             AND has a noticeably higher Composite Score, OR leads on 
             Annualized Return by a dominant margin regardless of 
             Composite Score."]
  MEANING: [3-4 sentences — what Clear Winner means for the user:
            - Results are robust — Winner survives Conservative scenario
            - Gap is large enough that assumption changes are unlikely to 
              flip the ranking
            - Proceed with this deal if other due-diligence passes 
              (location, financing, property condition)]

TIER_SLIGHT_EDGE:
  TITLE: Slight Edge (amber banner)
  CRITERIA: [Summary: "One deal leads on Annualized Return by a smaller 
             margin, OR leads on Composite Score but not Annualized (or 
             vice versa)."]
  MEANING: [3-4 sentences — what Slight Edge means:
            - Statistically better but within a margin that could flip 
              under different assumptions
            - Run Conservative scenario to check robustness
            - Verify base-case inputs before committing]

TIER_TOO_CLOSE:
  TITLE: Too Close to Call (neutral banner)
  CRITERIA: [Summary: "Annualized Return and Composite Score differences 
             are within statistical noise."]
  MEANING: [3-4 sentences — what Too Close means:
            - Financial analysis alone cannot discriminate
            - Choose based on non-financial factors: location, property 
              management, exit flexibility, personal strategy preference, 
              capital constraints
            - "Too Close to Call" is not a failure — it's calibrated 
              honesty]

TIER_CLUSTER_DETECTED:
  TITLE: Cluster Detected (neutral banner, 3-deal scenarios only)
  CRITERIA: [Summary: "All three deals fall within a tight Annualized 
             Return and Composite Score band — none stands out 
             meaningfully."]
  MEANING: [3-4 sentences — what Cluster Detected means:
            - A 2-way check might have named a Winner, but the third 
              deal is too close to the runner-up to honestly discriminate
            - Same guidance as Too Close to Call: choose on qualitative 
              factors
            - This scenario is common when comparing same-strategy deals 
              in the same market (e.g., three Rentals in one city)]
```

---

## INPUTS & OUTPUTS (table format)

```
INPUTS_OUTPUTS_H2: Inputs and Outputs
INPUTS_OUTPUTS_SUBTITLE: What you enter, what the calculator produces

INPUTS_TABLE:
  [Render as markdown table. 3 columns: Input | Applies To | Source/Default.
   Group by: Global Market Assumptions, then Per-Deal by Strategy.
   Keep strictly consistent with RIS Inputs & Outputs table.
   
   Header groups:
   1. GLOBAL MARKET ASSUMPTIONS (apply to all deals)
      - Annual Appreciation % (default 3%)
      - Annual Rent Growth % (default 3%)
      - Advanced: per-deal override toggle (shows warning banner when active)
   
   2. PER-DEAL INPUTS
      - Strategy selector (Rental / Fix and Flip / BRRRR)
      - Deal Label (default "Deal N")
      - Strategy-specific fields as in RIS
   
   Each row: input name, strategies it applies to, default value or source 
   calculator.]

OUTPUTS_TABLE:
  [Render as markdown table. 3 columns: Output | Formula/Source | Purpose.
   Strictly follow RIS Outputs table. Must include BOTH primary metrics 
   (Total Return + Annualized Return) and the Winner/Winner Tier at 
   comparison level.
   
   For Winner row, formula column MUST say: "Highest Annualized Return, 
   with Composite Score tie-breaker inside 15% band; Return Dominance 
   Rule (≥25% relative Annualized lead) forces Winner regardless of 
   Composite Score."
   
   NEVER write "Highest Total Return" in Winner row.]
```

---

## FORMULA (intro box + step-by-step + visual schema + worked example)

```
FORMULA_H2: How the Calculator Compares Deals
FORMULA_SUBTITLE: Normalization engine, Composite Score, and Winner tiering — 
                  with a worked Charlotte, NC 2026 example

FORMULA_INTRO_BOX:
  "Compare Real Estate Deals is not a simple calculator. It is a 
   NORMALIZATION ENGINE that converts heterogeneous deal structures 
   (6-month flips, 30-year rentals, BRRRR refi cycles) into two 
   comparable metrics plus a qualitative Composite Score. Results are 
   projections based on user inputs and industry-standard assumptions, 
   not market-reported data. Different inputs produce different Winners."

STEP_BY_STEP (13 numbered steps, strict — match RIS):
  1. Classify each deal's strategy (Rental / Fix and Flip / BRRRR).
  2. Compute Cash Invested per deal.
  3. Simulate month-by-month cash flow through month 60 (Rental/BRRRR) 
     or Flip reinvestment chain.
  4. Compute Cumulative Cash Flow per deal over 60 months.
  5. Compute Terminal Equity per deal at month 60 (equity basis — NO 
     selling costs deducted for Rental/BRRRR).
  6. Compute 5-Year Total Return = CumCashFlow + Terminal − Cash Invested.
  7. Verify Normalization Invariant per deal (±$100 tolerance).
  8. Compute Annualized Return (CAGR or IRR per mode).
  9. Apply HARD FLOOR: if Deal AR ≤ 0 → Return_Score = 0.
  10. Compute Composite Score per deal (6-factor weighted).
  11. Apply Extreme Flip Loop Guard (AR > 80% → auto-downgrade Winner tier).
  12. Determine Winner via 4-step pipeline (Exact Tie → Return Dominance 
      → Standard Tier → Cluster Check).
  13. Compute Operating Break-Even Month (cash flow only, no equity).

FORMULA_BOX:
  Per-deal Cash Invested:       Strategy-specific (see RIS)
  Per-deal Total Return:        Σ CashFlow_m + Terminal_60 − Cash Invested_0
  
  Annualized Return:
    Rental / BRRRR:             ((Terminal + CumCashFlow) / Cash Invested)^(1/5) − 1
    Flip (reinvestment):        (Total Accumulated_60 / Cash Invested_0)^(1/5) − 1
    Flip (single):              IRR of cash flows [−Cash Invested, 0, …, Net Sale_H]
  
  Composite Score:              0.30×Return + 0.20×Risk + 0.15×Liquidity 
                                + 0.15×Time-to-Profit + 0.10×Effort + 0.10×Scalability
  
  Return Score:                 50 + Rank Bonus (±25) + Delta Bonus (capped ±25)
                                HARD FLOOR 0 if Deal AR ≤ 0
  
  Winner (4-step pipeline):
    STEP 0 — Exact Tie:         AR_delta_pp < 0.1 → Composite-only
    STEP 1 — Return Dominance:  AR_delta_rel ≥ 25% → Clear Winner forced
    STEP 2 — Standard Tier:     Clear (≥5pp AR + ≥10 CS) / Slight / Too Close (<1pp AR + <5 CS)
    STEP 3 — Cluster Check:     3 deals, AR spread <2pp, CS spread <10 → Cluster Detected
  
  Operating Break-Even:         CumCashFlow_m ≥ 0  (cash flow only, NO equity, NO refi)
  Financial Break-Even:         CumCashFlow + Refi Proceeds ≥ 0  (BRRRR only)

CRITICAL METHODOLOGICAL RULES (summary):
  - Annualized Return drives Winner, Total Return $ is context
  - Composite weights hardcoded in v1 (Return 30%, Risk 20%, Liquidity 15%, 
    TTP 15%, Effort 10%, Scalability 10%)
  - Annual Appreciation + Rent Growth are GLOBAL by default
  - Terminal Value uses equity basis for Rental/BRRRR — NO selling costs 
    deducted at month 60
  - Flip Mode A (reinvestment, default) vs Mode C (ROI degradation, opt-in); 
    Mode B (idle yield) hidden in Advanced Settings
  - Extreme Flip Guard: AR > 80% auto-downgrades Winner tier one level

FORMULA_VISUAL (ASCII schema):
  Global Market Assumptions ──────────────┐
  (Appreciation, Rent Growth)             │
                                          ▼
  Deal 1 Inputs ──[Normalize]──→ 5Y Total Return + Annualized Return
  Deal 2 Inputs ──[Normalize]──→ 5Y Total Return + Annualized Return
  Deal 3 Inputs ──[Normalize]──→ 5Y Total Return + Annualized Return
                                          │
                                          ▼
                                 [Composite Score]
                                 (6-factor weighted)
                                          │
                                          ▼
                                 [Winner Pipeline]
                                 STEP 0: Exact Tie?
                                 STEP 1: Return Dominance?
                                 STEP 2: Standard Tier
                                 STEP 3: Cluster Check (3 deals)
                                          │
                                          ▼
                                  WINNER TIER BADGE
                           (Clear / Slight / Too Close / Cluster)

FORMULA_EXAMPLE:
  Location:        Charlotte, NC (balanced 2026 Southeast metro)
  Market context:  3-4% appreciation, 3% rent growth, active Flip and 
                   BRRRR markets, reliable ARV uplifts.

  STRICT NUMERIC RANGES — use values within these bands:
    Global Appreciation:   3.0%
    Global Rent Growth:    3.0%
    
    Deal A (Rental):
      Purchase:            $220,000-$235,000
      Down Payment:        25%
      Loan Rate:           7.5%
      Monthly Rent:        $1,750-$1,850
      Vacancy:             8%
      OpEx:                35%
    
    Deal B (BRRRR):
      Purchase:            $145,000-$160,000
      Rehab:               $35,000-$42,000
      ARV:                 $225,000-$240,000
      Seasoning:           6 months
      Refi LTV:            75%
      Refi Rate:           7.5%
      Monthly Rent:        $1,800-$1,900
      Vacancy / OpEx:      8% / 35%
    
    Deal C (Fix and Flip, Mode A reinvestment):
      Purchase:            $135,000-$150,000
      Rehab:               $35,000-$45,000
      ARV:                 $225,000-$240,000
      Hold Period:         6 months
      Selling Cost:        6%
      HM Rate:             12%

  EXPECTED RESULT RANGES:
    Deal A Total Return:   $32,000-$42,000 | Annualized 9-11% (5Y CAGR)
    Deal B Total Return:   $55,000-$68,000 | Annualized 15-18% (5Y CAGR)
    Deal C Total Return:   $42,000-$55,000 | Annualized 19-24% (5Y CAGR, reinvestment)
    Winner:                Deal C (Flip) via Annualized Return lead
    Winner Tier:           Clear Winner or Slight Edge (depending on exact margins)
    Composite Scores:      Deal A ~68, Deal B ~78, Deal C ~65
    Secondary Badge:       "Highest Return, not Highest Score" — Deal C leads 
                           on return but Deal B has highest Composite

  MANDATORY EXECUTION RULES for the 13 steps:
    1. Do NOT summarize, skip, or compress any step.
    2. Each step must be executed and written out explicitly.
    3. Do NOT merge steps or reorder.
    4. If a step's output triggers a flag (Invalid, Extreme Flip, Cluster), 
       write it out.
    5. Silent step-skipping is the #1 cause of wrong worked examples.
  
  EXECUTION PRIORITY (v2 round 3 SEO expert fix — prevent empty examples):
  The two-level fallback below is ORDERED by preference. Use Graceful 
  Simplification FIRST; fall back to STOP only if methodology itself 
  cannot be preserved. This ordering prevents the common failure mode 
  where LLMs over-trigger STOP and return empty examples.
  
  GRACEFUL SIMPLIFICATION (primary — v2 round 3 fix):
    If exact numeric precision is not possible, CONTINUE with structured 
    approximation while preserving all 13 steps and all required rules 
    (Normalization Invariant, Hard Floor, Extreme Flip Guard, Cluster 
    Check, Operating Break-Even cash-flow-only definition). Use symbolic 
    placeholders like [$X] or narrower ranges where exact numbers cannot 
    be computed — but DO execute every step with the correct methodology. 
    An approximate-but-structurally-correct worked example is more 
    valuable to the user than no example at all.
  
  STOP-RATHER-THAN-APPROXIMATE RULE (last resort only):
    STOP only if the methodology itself cannot be followed — for example, 
    if the 13-step structure cannot be traced because inputs are 
    fundamentally inconsistent with Compare Deals logic (e.g., negative 
    purchase price, missing required fields that cannot be defaulted). 
    When stopping, output: "Worked example not generated due to 
    methodology uncertainty — please verify inputs."
    
    Do NOT trigger STOP for routine precision issues (e.g., cannot 
    compute exact IRR). Use Graceful Simplification for those cases.
  
  Step 1: Classify strategies — Deal A=Rental, Deal B=BRRRR, Deal C=Flip.
  Step 2: Cash Invested — Deal A [$X]; Deal B [$X]; Deal C [$X].
  Step 3: Simulate cash flows / compute Net Sale Profit.
  Step 4: CumCashFlow per deal at month 60.
  Step 5: Terminal Equity per deal at month 60 (equity basis, no selling costs).
  Step 6: 5-Year Total Return per deal.
  Step 7: Verify Normalization Invariant per deal (±$100 tolerance).
  Step 8: Annualized Return — Deal A (CAGR), Deal B (CAGR), Deal C (5Y CAGR, reinvestment).
  Step 9: HARD FLOOR check — all AR > 0, proceed.
  Step 10: Composite Score per deal — 6-factor breakdown.
  Step 11: Extreme Flip Guard check — Deal C AR [X]%; if >80% auto-downgrade.
  Step 12: Winner pipeline — run STEP 0, STEP 1, STEP 2, STEP 3.
  Step 13: Operating Break-Even per deal (cash flow only).
  
  Result Summary:
    Deal A (Rental):     Total Return [$X], Annualized [X]%, Composite [X]/100
    Deal B (BRRRR):      Total Return [$X], Annualized [X]%, Composite [X]/100
    Deal C (Flip):       Total Return [$X], Annualized [X]%, Composite [X]/100
    Winner:              Deal C
    Winner Tier:         [Clear Winner / Slight Edge based on computed values]
    Secondary Badge:     "Highest Return, not Highest Score"

  POST-CALCULATION VERIFICATION (mandatory — run all 5 checks, keep brief):
    Check 1 — All Normalization Invariants hold (±$100 per deal).
    Check 2 — Winner matches Annualized Return ranking (with Dominance or 
              Composite tie-breaker as applicable).
    Check 3 — Composite Score factors match RIS (Return uses Annualized, 
              Risk has dynamic adjustments).
    Check 4 — Operating Break-Even uses cash-flow-only formula (no equity).
    Check 5 — No forbidden terminology ("Capital Recovery Break-Even", 
              "Highest Total Return" as Winner criterion).
```

---

## WHAT IS (3 paragraphs defining Compare Deals + Winner concept)

```
WHAT_IS_H2: What Is a Real Estate Deal Comparison? (Definition + Method)
WHAT_IS_SUBTITLE: Normalized multi-strategy evaluation with calibrated confidence

WHAT_IS_P1:
  [4-5 sentences. Must define deal comparison in investment context:
   - Single-deal analysis answers "is this deal good?"; comparison answers 
     "which of these deals should I pursue?"
   - Comparing mixed strategies is mathematically harder than comparing 
     same-strategy deals because cash-flow timing differs fundamentally
   - Rental accumulates cash over years; Flip produces profit at sale; 
     BRRRR combines mid-project refi with post-refi cash flow
   - Total Return $ alone biases toward long-duration deals — normalized 
     Annualized Return corrects this
   - Calculator implements this normalization and presents both metrics 
     honestly]

WHAT_IS_P2:
  [4-5 sentences. Explain Winner tiering philosophy:
   - Categorical winners make sense only with calibrated confidence
   - Three tiers: Clear Winner (robust), Slight Edge (cautious), Too 
     Close to Call (no financial basis)
   - Plus Cluster Detected in 3-deal scenarios
   - Calibrated honesty: tool does not manufacture certainty
   - Contrast with generic calculators that always name a winner: false 
     precision, expensive mistakes]

WHAT_IS_P3:
  [4-5 sentences. Connect to capital allocation decision:
   - Purpose is capital allocation, not deal validation
   - Validate each deal first in single-deal calculators (Rental, Fix and 
     Flip, BRRRR, ARV) — 70% Rule? DSCR above 1.00? ARV realistic?
   - THEN use Compare Deals to answer "which validated deal delivers 
     better time-adjusted returns?"
   - 5-year horizon + normalization is industry convention (BiggerPockets, 
     DealCheck, Roofstock)
   - Post-tax treatment and personal tax situation OUT of scope — consult 
     a real estate CPA]
```
---

## RESULT MEANING (Winner tier explanations with market context for 2026)

```
RESULT_MEANING_H2: What Your Winner Tier Means
RESULT_MEANING_SUBTITLE: How to act on each tier — and what the tier labels 
                        mean in 2026 US markets

RESULT_MEANING_INTRO:
  [2-3 sentences. Frame the 4 tier states: Clear Winner, Slight Edge, 
   Too Close to Call, Cluster Detected. Emphasize that tiering is calibrated 
   honesty — the tool provides the strongest recommendation the data 
   supports, no more.]

TIER_CLEAR_WINNER:
  TITLE: Clear Winner (green banner)
  TYPICAL_SCENARIO: 
    [Describe qualitatively, no thresholds — refer reader to logic section. 
     "One deal leads on Annualized Return by a decisive margin AND has a 
     meaningfully higher Composite Score, OR leads on Annualized Return by 
     a dominant margin (Return Dominance Rule applies)."]
  MEANING: 
    [3-4 sentences for 2026 market context:
     - Results are robust to reasonable assumption changes
     - Survives Conservative scenario (−2 pp appreciation, +5 pp vacancy)
     - Proceed with this deal after verifying other due-diligence: 
       location, financing availability, property condition
     - Typical example in 2026 Sunbelt markets: BRRRR with strong ARV 
       uplift defeats Rental 55-65% of the time under Clear Winner]

TIER_SLIGHT_EDGE:
  TITLE: Slight Edge (amber banner)
  TYPICAL_SCENARIO:
    ["One deal leads on Annualized Return by a smaller margin, OR leads on 
     Composite Score meaningfully but not on Annualized Return (or vice versa)."]
  MEANING:
    [3-4 sentences:
     - Statistically better but within a margin that could flip under 
       different assumptions
     - Run Conservative scenario to check robustness
     - Verify base-case inputs — especially appreciation, rent growth, 
       and rehab budget for flips
     - Secondary "Highest Return, not Highest Score" badge may appear if 
       Winner has lower Composite Score than runner-up]

TIER_TOO_CLOSE:
  TITLE: Too Close to Call (neutral banner)
  TYPICAL_SCENARIO:
    ["Annualized Return and Composite Score differences are within 
     statistical noise."]
  MEANING:
    [3-4 sentences:
     - Financial analysis alone cannot discriminate
     - Choose based on non-financial factors: location preference, 
       property management availability, exit flexibility, personal 
       strategy preference (active vs passive)
     - Not a failure — calibrated honesty
     - Frequently seen when comparing two Rentals in the same market or 
       two same-strategy deals with similar assumptions]

TIER_CLUSTER_DETECTED:
  TITLE: Cluster Detected — No Clear Winner (neutral banner, 3-deal scenarios only)
  TYPICAL_SCENARIO:
    ["All three deals fall within a tight Annualized Return and Composite 
     Score band. A 2-way check might have named a Winner, but the third 
     deal is too close to the runner-up to honestly discriminate."]
  MEANING:
    [3-4 sentences:
     - Common when comparing same-strategy deals in one city (three 
       Rentals in Columbus, OH)
     - Same guidance as Too Close to Call
     - Consider: expanding the comparison set, adding a different 
       strategy, or applying investor preference as tiebreaker
     - Return Dominance Rule can override Cluster — if one deal truly 
       leads by 25%+ relative AR, Cluster does NOT apply and Clear 
       Winner is forced]

RESULT_CONTEXT_2026:
  TITLE: Why 2026 makes Winner tiering especially important
  BODY: 
    [4-6 sentences explaining 2026 market dynamics:
     - Post-2022 rate environment has compressed rental cash flow 
       (higher debt service)
     - Appreciation has normalized from 2020-2022 surge
     - Flip reinvestment assumption increasingly optimistic — deal flow 
       and ROI compression matter more than they did in 2019
     - BRRRR economics tighter — refi rates erode post-refi cash flow 
       that made BRRRR compelling
     - No single strategy dominates across all 2026 markets
     - Calibrated tiering is essential because margins are thinner — 
       "Clear Winner" is rarer than in 2019-2021]
```

---

## BENCHMARKS (by strategy pair + by deal volume + by market tier)

```
BENCHMARKS_H2: Comparison Benchmarks for 2026
BENCHMARKS_SUBTITLE: Which strategies typically win in which market conditions

BENCHMARKS_INTRO:
  [3-4 sentences (v2 SEO fix — strengthened against "too confident" tone):
   "These benchmarks reflect GENERAL patterns observed across typical 
   comparison scenarios — they are illustrative starting points, NOT 
   statistical predictions, NOT market research, NOT guarantees. The 
   percentages below are rounded industry-rule-of-thumb ranges derived 
   from observed comparison behavior, not published data. Your specific 
   deal's Winner depends on YOUR inputs — this section helps set 
   expectations, not dictate outcomes."]

BENCHMARKS_BY_STRATEGY_PAIR:
  
  Rental vs BRRRR (most common comparison):
    [Frame with hedging language: "In typical comparisons..." / "commonly..."
     Avoid categorical phrasing like "BRRRR wins X%" — use "BRRRR tends to 
     show Clear Winner in roughly X% of..." style.
     
     Hot markets (Sunbelt: Austin, Phoenix, Nashville): BRRRR tends to show 
       Clear Winner in roughly 55-65% of typical comparisons (appreciation 
       favors leveraged equity)
     Stable markets (Midwest: Columbus, Indianapolis, Kansas City): BRRRR 
       commonly leads in ~45-55% of comparisons; Rental in ~35-45%; Too 
       Close in ~10-15%
     Flat markets (Rust Belt, older metros): Rental commonly leads 50-60%; 
       BRRRR 25-35%; Too Close 10-15%
     2026 context: refi rates 7-8% compress BRRRR advantages vs 2019 refi 
       rates 4-5%. Rental regaining appeal in flat markets.
     Reminder: these are illustrative, not predictive.]
  
  Rental vs Fix and Flip:
    [Structured analysis with same hedging language:
     Flip tends to lead ONLY when: reinvestment sustained (6-8 flips over 
       5 years), each flip meets 70% Rule, market doesn't soften
     Rental tends to lead ONLY when: rent-to-price > 1% monthly, 
       appreciation ≥ 3%, DSCR > 1.25
     2026 context: Flip reinvestment assumption increasingly optimistic. 
       Most comparisons favor Rental once reinvestment risk is priced in.
     Note Extreme Flip Guard: if Flip Annualized Return projects > 80%, 
       tier auto-downgrades — this is common when inputs are aggressive
     Reminder: Flip benchmarks especially sensitive to reinvestment 
       assumption accuracy — real deal flow is uncertain.]
  
  BRRRR vs Fix and Flip:
    [Analysis with hedging:
     BRRRR tends to lead when: ARV uplift is real AND post-refi cash flow 
       is positive
     Flip tends to lead when: market timing is favorable AND reinvestment 
       is realistic
     Depends heavily on 70% Rule (Flip) vs 75% Rule (BRRRR) compliance
     Winner often Slight Edge rather than Clear Winner — both strategies 
       have similar acquisition economics]
  
  3-way (Rental vs BRRRR vs Flip):
    [Analysis with hedging:
     In typical 2026 comparisons: BRRRR tends to lead ~40% of the time, 
       Rental ~35%, Flip ~15% (reinvestment-dependent), Too Close/Cluster 
       ~10%
     Winner highly sensitive to: appreciation assumption (higher favors 
       BRRRR), rent growth (higher favors Rental), rehab execution 
       (variance favors none)
     Cluster Detected frequent when all three inputs use similar 
       assumptions
     Reminder: these ranges are observed patterns, not statistical 
       guarantees. Individual results vary based on user inputs.]

BENCHMARKS_BY_DEAL_VOLUME:
  TITLE: How many deals should you compare?
  BODY:
    [2 paragraphs:
     Most investors: 2-deal comparisons (A vs B) produce cleaner decisions
     Active investors screening pipeline: 3-deal comparisons help rank-order
     4+ deals: out of scope for v1; break into pairwise comparisons
     Single-deal: use single-deal calculators (no Winner declared here)]

BENCHMARKS_DISCLAIMER:
  "These ranges are illustrative patterns based on typical comparison scenarios, 
   NOT measured statistical datasets, NOT market research, NOT predictions for 
   any specific deal. The percentages shown (e.g., 55-65%, 40%, 15%) represent 
   approximate outcomes observed across similar user-input combinations — they 
   are NOT derived from real market data, real transaction databases, or 
   sampled investor surveys.
   
   Individual results depend on your market, property, financing, execution 
   quality, and assumptions. The calculator's Winner Tier on YOUR inputs 
   always takes precedence over these aggregate expectations. Use benchmarks 
   to calibrate expectations, never as a substitute for running your own 
   comparison on your own deals."
```

---

## STRATEGY (5 blocks for different user types)

```
STRATEGY_H2: How to Use This Calculator by Investor Type
STRATEGY_SUBTITLE: Matching the decision tool to your strategy

STRATEGY_FIRST_TIME:
  TITLE: First-Time Investor
  BODY:
    [3-4 sentences. Recommend:
     - Start with Rental vs Rental (2 properties in your target market)
     - Use global Market Assumptions — don't override per-deal
     - Focus on Clear Winner / Slight Edge results; be wary of Too Close
     - Cross-link: run each candidate first in Rental Property Calculator 
       for validation]

STRATEGY_SCALING_INVESTOR:
  TITLE: Scaling Investor (3-10 doors)
  BODY:
    [3-4 sentences. Recommend:
     - Compare Rental vs BRRRR — core scaling dilemma
     - Pay attention to Composite Score's Scalability factor
     - If Winner has lower Composite Score, consider non-financial factors 
       (management capacity, financing queue)
     - Run Conservative scenario to test resilience]

STRATEGY_FLIPPER_TO_HOLDER:
  TITLE: Flipper Transitioning to Rentals
  BODY:
    [3-4 sentences. Recommend:
     - 3-way Flip vs Rental vs BRRRR comparison
     - Toggle Flip Mode C (ROI degradation) for realistic modeling
     - Watch for "Extreme Flip" warnings — verify ARV and rehab inputs
     - BRRRR is the natural hybrid — evaluate carefully]

STRATEGY_WHOLESALER:
  TITLE: Wholesaler Screening Deals
  BODY:
    [3-4 sentences. Recommend:
     - Use calculator to vet deals you're about to assign
     - If Winner shows Too Close to Call on flips, end buyer may struggle 
       to close
     - Cross-reference ARV Calculator confidence tier; low confidence ARV 
       pulls Composite Score down
     - Present buyers with Compare Deals output in your marketing package]

STRATEGY_AGENT:
  TITLE: Real Estate Agent (Investor Client)
  BODY:
    [3-4 sentences. Recommend:
     - Run comparisons when client asks "should I buy A or B?"
     - Export PDF for client presentation
     - Use Winner Tier labels honestly — "Too Close to Call" is a valid 
       professional answer
     - Compare Deals complements BPO with forward-looking analysis]
```

---

## APPLICATIONS (6 use cases)

```
APPLICATIONS_H2: Common Use Cases
APPLICATIONS_SUBTITLE: When this calculator is the right tool

APPLICATION_1:
  TITLE: Choosing between two rental properties
  BODY: [2-3 sentences. Two rentals in same or different markets. Compare 
         5-year outcomes. Useful when property A is cheaper but property B 
         has better rent.]

APPLICATION_2:
  TITLE: Rental vs BRRRR on the same property
  BODY: [2-3 sentences. You have ARV estimate and rental comps. Should you 
         buy-and-hold (Rental) or rehab-and-refinance (BRRRR)? Compare 
         identifies which unlocks more 5-year value.]

APPLICATION_3:
  TITLE: Fix and Flip vs long-term hold
  BODY: [2-3 sentences. Classic flipper's dilemma. Run Mode A for 
         reinvestment default; toggle Mode C for realistic ROI compression. 
         Pre-tax comparison only — taxes on flip profit are substantially 
         higher than long-term gains.]

APPLICATION_4:
  TITLE: Portfolio rebalancing
  BODY: [2-3 sentences. Considering selling a rental and redeploying 
         capital? Compare the current rental's projected 5-year return 
         against new acquisition candidates.]

APPLICATION_5:
  TITLE: Deal screening for wholesalers and lenders
  BODY: [2-3 sentences. Pre-vet deals before assignment or loan approval. 
         Low Winner Tier confidence signals buyer hesitation risk. 
         Paired with 70% Rule and 75% Rule for acquisition filters.]

APPLICATION_6:
  TITLE: Strategy education and client presentations
  BODY: [2-3 sentences. Agents and advisors use the calculator to 
         illustrate strategy trade-offs to clients. PDF export provides 
         documentation for investment conversations.]
```

---

## INDUSTRY STANDARDS (normalization + 5-year convention + peer tool comparison)

```
INDUSTRY_STANDARDS_H2: How Compare Deals Aligns with Industry Conventions
INDUSTRY_STANDARDS_SUBTITLE: Normalization methodology and its precedents

INDUSTRY_NORMALIZATION:
  TITLE: Normalization approach (5-year horizon + dual metrics)
  BODY: [4-5 sentences. Explain:
         - 5-year horizon is industry convention for hold analysis
         - Dual metrics (Total Return + Annualized) aligns with BiggerPockets 
           and DealCheck conventions
         - Reinvestment assumption for Flips matches standard comparison 
           methodology (e.g., Roofstock's comparative analysis)
         - Normalization Invariant (±$100 identity check) is unique to 
           RealCalc — ensures internal consistency]

INDUSTRY_WINNER_TIERING:
  TITLE: Calibrated confidence in categorical judgments
  BODY: [3-4 sentences. Explain:
         - Generic calculators always name a winner — this is false 
           precision
         - RealCalc uses 3-tier confidence (inspired by weather forecasting 
           and medical diagnostic conventions)
         - Cluster Detection for 3-deal scenarios is original to RealCalc]

INDUSTRY_PEER_COMPARISON:
  TITLE: How this differs from DealCheck / BiggerPockets / Mashvisor
  BODY: [4-5 sentences. Honest comparison:
         - DealCheck: stronger single-deal depth; weaker multi-strategy 
           comparison
         - BiggerPockets: community-driven benchmarks; no native comparison 
           tool across 3 strategies
         - Mashvisor: focused on market-level analytics; no deal-to-deal 
           comparison
         - RealCalc Compare Deals: unique in (a) cross-strategy normalization, 
           (b) hub-screener imports, (c) Winner Tiering with Cluster Detection]

INDUSTRY_DISCLAIMER:
  "These comparisons describe market positioning, not endorsements. Each 
   tool has its strengths. Compare Real Estate Deals is specifically 
   designed for the 'which opportunity should I pursue with my capital?' 
   question — for other questions (single-deal deep analysis, market 
   discovery, community research), other tools may serve better."
```

---

## LIMITATIONS (5 items + When Not to Use)

```
LIMITATIONS_H2: Limitations of This Calculator
LIMITATIONS_SUBTITLE: What Compare Deals cannot tell you

LIMITATION_1:
  TITLE: Pre-tax analysis only
  BODY: [3-4 sentences. Required disclaimer (third placement):
         - All figures pre-tax
         - Tax treatment differs materially: flip profits = ordinary income 
           or short-term capital gains; rentals = depreciation + long-term 
           capital gains
         - Post-tax Winner may differ from pre-tax Winner (especially 
           Flip vs Rental)
         - Consult a real estate CPA before committing capital]

LIMITATION_2:
  TITLE: Reinvestment assumption for Fix and Flip (important caveat)
  BODY: [4-5 sentences (v2 SEO fix — strengthened per expert feedback):
         - Default Flip mode (Mode A) assumes 100% reinvestment into identical 
           flips over 5 years. This is MATHEMATICALLY optimistic and REAL-WORLD 
           rarely achievable at scale — deal flow is uncertain, ROI compresses 
           with competition, each new flip carries independent execution risk.
         - For a more defensible projection, toggle Mode C (ROI degradation, 
           opt-in) which applies 5-10% ROI compression per cycle (default 7%)
         - Single-flip mode (no reinvestment, IRR-based) is available in 
           Advanced Settings for investors who want per-deal analysis only
         - Extreme Flip Guard flags projections > 80% Annualized Return AND 
           auto-downgrades Winner tier one level — this is a critical 
           guardrail against fantasy projections
         - Bottom line: treat Flip Total Return with more skepticism than 
           Rental or BRRRR Total Return. Flip projections compound 
           assumptions; Rentals project observed cash flow.]

LIMITATION_3:
  TITLE: 5-year fixed horizon
  BODY: [3-4 sentences:
         - All comparisons use 60 months
         - Prevents apples-to-oranges across different hold strategies
         - Some strategies optimize for shorter (house-hack) or longer 
           (generational wealth) holds — this tool does not model those
         - v2 may allow horizon override]

LIMITATION_4:
  TITLE: Appreciation and rent growth assumptions
  BODY: [3-4 sentences:
         - Future appreciation cannot be predicted
         - User-entered assumptions drive 5-year projections — small 
           changes meaningfully alter results
         - Conservative / Base / Optimistic scenarios stress-test robustness
         - Global assumptions (not per-deal) prevent biased comparisons by 
           default]

LIMITATION_5:
  TITLE: Composite Score weights are subjective
  BODY: [3-4 sentences:
         - 30/20/15/15/10/10 factor weights embed editorial judgment
         - Different weight schemes can produce different Winners
         - Weight override planned for v2
         - Return Dominance Rule prevents Composite from overturning 
           economically decisive Winners]

WHEN_NOT_TO_USE_H3: When Not to Use Compare Deals
WHEN_NOT_TO_USE_LIST:
  - "Single-deal deep analysis: use Rental Property, Fix and Flip, or 
     BRRRR calculators directly"
  - "Portfolio-level analysis: this compares individual deals, not 
     portfolios"
  - "Tax-sensitive decisions: consult CPA for post-tax analysis"
  - "Long-hold strategies (>10 years): 5-year horizon insufficient"
  - "Commercial real estate: calculator assumes residential 1-4 unit"
  - "Speculative land / lot flipping: no rent, no rehab — tool not designed"
  - "Lender underwriting: not accepted by lenders for loan approval"
```

---

## COMMON MISTAKES (5 items)

```
COMMON_MISTAKES_H2: Common Mistakes When Comparing Deals
COMMON_MISTAKES_SUBTITLE: Avoid these five errors

MISTAKE_1:
  TITLE: Mismatched macro assumptions
  BODY: [2-3 sentences. In v1 calculator enforces GLOBAL Appreciation and 
         Rent Growth by default. If advanced mode is enabled and you 
         override per-deal, do so only with market justification (e.g., 
         Austin 5% vs Cleveland 2%) — not preference for one deal.]

MISTAKE_2:
  TITLE: Ignoring Winner Tier confidence
  BODY: [2-3 sentences. "Too Close to Call" means "don't use financial 
         analysis to decide". Users who ignore this often regret choices 
         later. Tier is the confidence signal — heed it.]

MISTAKE_3:
  TITLE: Trusting Fix and Flip Total Return without reinvestment reality check
  BODY: [3-4 sentences (v2 SEO fix — strengthened).
         Mode A assumes 100% reinvestment into identical flips over 5 years — 
         this is an IDEALIZED projection, not a realistic forecast. Real 
         flippers rarely sustain the same ROI across 8+ deals in 5 years: 
         deal flow dries up, ROI compresses with competition, rehab overruns 
         compound, and market softening breaks the chain. Ask yourself 
         honestly: "Can I realistically close 8 flips in 5 years at the 
         same ROI?" If not, toggle Mode C (ROI compression, default 7% 
         per cycle). Extreme Flip Guard also auto-flags projections > 80% 
         Annualized Return and downgrades the Winner tier as a guardrail.]

MISTAKE_4:
  TITLE: Comparing deals in different markets without context
  BODY: [2-3 sentences. Cleveland Rental and Austin BRRRR are different 
         economic regimes. Relative comparison is valid; absolute 
         expectations may still differ from projections. Use market-
         specific appreciation / rent growth if modeling different markets.]

MISTAKE_5:
  TITLE: Using Compare for deals not yet screened individually
  BODY: [2-3 sentences. Compare is a decision tool, not due-diligence. 
         Validate each deal first — Cap Rate, DSCR, 70% Rule. Bring 
         finalists to Compare for ranking.]
```

---

## FAQ (9 Q&A, strictly following RIS)

```
FAQ_H2: Frequently Asked Questions
FAQ_SUBTITLE: Common questions about comparing real estate deals

FAQ_Q1: How does the calculator compare deals with different strategies?
FAQ_A1: [3-4 sentences. Explain normalization into TWO metrics: Total 
        Return $ over 60 months + Annualized Return %. For Flip single-
        mode, Annualized = IRR; for all held deals and Flip reinvestment, 
        Annualized = 5Y CAGR. Winner logic prioritizes Annualized Return 
        when deal durations differ materially.]

FAQ_Q2: Why 5 years? Can I change the horizon?
FAQ_A2: [3-4 sentences. 5 years is fixed in v1 to prevent apples-to-
        oranges. All deals evaluated over 60 months with reinvestment 
        where applicable. Custom horizon planned for v2.]

FAQ_Q3: What's the Composite Score and why isn't it the primary metric?
FAQ_A3: [3-4 sentences. Composite Score is a 0-100 weighted score across 
        6 factors: Return, Risk, Liquidity, Time-to-Profit, Effort, 
        Scalability. Secondary because Annualized Return is the objective 
        rate; Composite embeds editorial judgment on weights. Both shown 
        to give financial truth + qualitative judgment.]

FAQ_Q4: What does "Too Close to Call" mean? Is it a bug?
FAQ_A4: [3-4 sentences. Means Annualized Return differs by less than 1 
        percentage point AND Composite Score by less than 5. Financial 
        analysis cannot discriminate in this range. Choose on non-
        financial factors. Not a failure — calibrated honesty.]

FAQ_Q5: Does this calculator account for taxes?
FAQ_A5: [3-4 sentences. No — all pre-tax. Post-tax analysis requires CPA. 
        Flip profits taxed as ordinary income (or short-term gains); 
        rentals benefit from depreciation + long-term gains. Winner 
        CAN change after tax — especially Flip vs Rental comparisons.]

FAQ_Q6: Can I import a deal from another RealCalc calculator?
FAQ_A6: [3-4 sentences. Yes. Rental Property, Fix and Flip, and BRRRR 
        calculators each have "Compare with another deal" buttons that 
        pre-fill Compare Deals via URL parameters. ARV Calculator output 
        fills ARV values in Flip or BRRRR deals and its confidence tier 
        affects Risk Score.]

FAQ_Q7: What if all my deals show negative Total Return?
FAQ_A7: [3-4 sentences. The calculator still ranks them (least-negative 
        wins) but displays a cautionary banner. Usually indicates over-
        leveraged acquisitions or underpriced rent. Consider whether 
        deals are actually viable or you need different acquisition 
        criteria.]

FAQ_Q8: Is this accepted by lenders or appraisers?
FAQ_A8: [3-4 sentences. No. Compare Deals is a strategic comparison 
        tool for investors. Lender underwriting requires licensed 
        appraisal and lender-specific DSCR. This is a screening tool, 
        not a loan application document.]

FAQ_Q9: Why does the calculator show a warning on my high-return Flip?
FAQ_A9: [3-4 sentences. Extreme Flip Guard triggers when projected 
        Annualized Return exceeds 80% — real flippers rarely sustain 
        these returns at scale (deal scarcity, ROI compression, rehab 
        overruns). Winner tier auto-downgrades one level to protect 
        against fantasy-return recommendations. Verify ARV and rehab 
        inputs; consider toggling Mode C for realistic ROI compression.]
```

---

## RELATED CALCULATORS

```
RELATED_CALCULATORS_H2: Related Calculators
RELATED_CALCULATORS_SUBTITLE: Continue your analysis with these specialized tools

RELATED_LIST (6 items with 1-2 sentence descriptions each):
  - Rental Property Calculator — single-property rental analysis; 
    source calculator for Compare Deals rental imports
  - Fix and Flip Calculator — full flip deal mechanics with 70% Rule; 
    source calculator for flip imports
  - BRRRR Calculator — Capital Left, post-refi CoC, Infinite Return; 
    source calculator for BRRRR imports
  - ARV Calculator — Comps-based ARV estimation with confidence tiers; 
    feeds ARV values and Risk Score adjustments into Compare Deals
  - Cap Rate / NOI / DSCR / Cash-on-Cash — component metrics used 
    throughout each strategy
  - Mortgage Calculator (coming soon) — standard amortization and 
    payment analysis
```

---

## SCHEMA BLOCK (JSON-LD)

```
SCHEMA_TYPE: FinancialProduct + SoftwareApplication (dual schema)

SCHEMA_NAME: Compare Real Estate Deals Calculator
SCHEMA_DESCRIPTION: [150-200 chars. Must include primary keyword.
                    Example: "Free side-by-side comparison tool for 
                    Rental, Fix and Flip, and BRRRR real estate deals. 
                    Normalized 5-Year Total Return, Annualized Return, 
                    and Winner tier verdict."]

SCHEMA_FEATURE_LIST:
  - Side-by-side comparison of 2-3 real estate deals
  - Mixed strategies supported (Rental + Fix and Flip + BRRRR)
  - 5-Year Total Return normalization
  - Annualized Return (CAGR or IRR per mode)
  - 6-factor Composite Score
  - Winner tiering with calibrated confidence (Clear / Slight / Too Close)
  - Cluster Detection for 3-deal comparisons
  - Return Dominance Rule for decisive leads
  - URL parameter imports from Rental, Fix and Flip, BRRRR, ARV calculators
  - Global Market Assumptions (Appreciation, Rent Growth)
  - 3 scenarios (Conservative / Base / Optimistic)
  - 3 sensitivity tables
  - 60-month Cumulative Cash Flow chart (dual-line)
  - 6-factor Composite Radar chart
  - PDF export

SCHEMA_AUDIENCE: US Real Estate Investors
SCHEMA_PRICE: Free
SCHEMA_OPERATING_SYSTEM: Web browser
```

---

## OUTPUT CHECKLIST — CRITICAL CHECKS ONLY (v2 round 3 SEO expert fix — decongestion)

**NOTE (v2 round 3 SEO expert fix):** The full validation checklist has been 
MOVED to a companion file `compare-seo-validation-prompt.md` (post-generation 
check). This file now contains ONLY the 7 non-negotiable critical checks. 
Rationale: a 40+ item inline checklist caused LLM attention decay — several 
items were being silently skipped during generation. The 2-pass workflow 
(generate with CRITICAL CHECKS inline, then run validation-prompt for full 
audit) produces more reliable output.

Before finalizing this SEO package, verify these 7 NON-NEGOTIABLE items:

- [ ] **TITLE is exact fallback: "Compare Real Estate Deals — Strategy Hub | RealCalc" (51 chars). No custom generation.**
- [ ] **META DESCRIPTION is exact fallback: "Compare real estate deals side-by-side — Rental vs BRRRR vs Flip. See 5-year profit, annualized return, and winner tier. Free tool for investors." (157 chars). No custom generation.**
- [ ] **H1 is exact fallback: "Compare Real Estate Deals Calculator — Rental vs Flip vs BRRRR Side-by-Side" (contains "calculator" to compensate for TITLE lacking it).**
- [ ] **OVERVIEW_P1 opens VERBATIM with: "The Compare Real Estate Deals Calculator helps you compare real estate deals side by side and see which one performs better over 5 years — and understand which deal is likely to perform better based on your inputs." Product terminology only AFTER this opener.**
- [ ] **FORMULA section executes all 13 steps OR issues STOP statement "Worked example not generated due to methodology uncertainty". No silent step-skipping.**
- [ ] **4 Winner tier labels present VERBATIM in How to Use, Result Meaning, and FAQ: "Clear Winner", "Slight Edge", "Too Close to Call", "Cluster Detected". No coined labels.**
- [ ] **Pre-tax disclaimer present in exactly 5 placements: Overview P4, How to Use Step 5, per-deal card inline text, Limitations (dedicated item), FAQ Q5 (dedicated question).**

**v2 round 3 SEO expert fixes applied (for completeness — these are process-level, not output content):**
- [x] PRIORITY EXECUTION RULE at top of file with 6-level hierarchy + Downstream Risk Acknowledgment
- [x] OVERVIEW_P1 keyword rule softened: AT LEAST TWO of three secondary keywords (was "ALL THREE")
- [x] GLOBAL RULE added: duplicate requirements execute ONCE correctly per placement, not over-expanded
- [x] FORMULA execution priority INVERTED: Graceful Simplification primary, STOP last resort only (prevents empty examples)
- [x] STRUCTURE PRESERVATION RULES: section separation, paragraph length 2-5 sentences, list format preservation
- [x] OUTPUT CHECKLIST split — 7 CRITICAL checks inline, 48-item full checklist moved to `compare-seo-validation-prompt.md` for post-generation audit

---

### POST-GENERATION VALIDATION (separate file)

The full validation checklist — covering 40+ secondary items (keyword placement 
verification, section structure, H2 keyword pushes, cross-links, schema 
completeness, language tone rules, anti-pattern terminology checks) — lives in 
`compare-seo-validation-prompt.md`. Run the validation file as a **second pass** 
AFTER content generation to audit the output.

Two-pass workflow:
1. **Generation pass**: run this SEO prompt with CRITICAL CHECKS inline. LLM focuses on 7 non-negotiable items + content structure. Produces complete draft.
2. **Validation pass**: run validation-prompt.md against the draft. LLM audits against the full 40+ checklist and flags anything missing or misaligned. Returns structured pass/fail report.

This decongestion pattern is a proven technique for complex prompts (source: 
AI engineering literature on "prompt chaining vs. mega-prompts"). For v1 
generation, proceed with CRITICAL CHECKS only — validation file can be applied 
if quality issues are observed.


