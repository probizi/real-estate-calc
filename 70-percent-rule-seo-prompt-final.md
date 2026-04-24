# SEO Package Prompt — 70% Rule Calculator (v1)

You are a senior SEO copywriter specializing in US real estate investment content. Your job is to produce a **complete SEO content package** for the 70% Rule Calculator page.

The output of this prompt is pure content — no code, no HTML, no Vue. It will later be combined with the RIS specification (70-percent-rule-ris-prompt-final.md) and the Master Prompt to generate the actual page.

---

## PRIORITY EXECUTION RULE (READ FIRST)

If capacity overload occurs during generation, prioritize in this strict order:

1. TITLE / META / H1
2. OVERVIEW P1
3. FORMULA (MAO = ARV × 0.70 − Rehab)
4. TERMINOLOGY (required + forbidden)
5. DISCLAIMERS

Details for each priority appear in their respective sections below. See FINAL EXECUTION OVERRIDE for the master rule on quality vs compliance tradeoffs.

---

## GLOBAL RULE — Redundancy handling (v2 round 4 expert fix — conflict resolution with FINAL EXECUTION OVERRIDE)

If the same requirement appears multiple times across the prompt, execute it once per required placement.

**If this conflicts with FINAL EXECUTION OVERRIDE** (i.e., mechanical placement would degrade natural flow):
→ prioritize readability and natural flow.

The multi-placement pattern is a redundancy safeguard, NOT an absolute requirement. Use judgment: mention the disclaimer in the 3 most natural locations rather than forcing it into all 4 at the cost of prose quality.

**EXCEPTION — "Not substitute for Fix and Flip Calculator" disclosure (v2 round 5 fix — resolves GLOBAL RULE vs validation conflict):**

```
This disclaimer is EXEMPT from the 3-placement relaxation above.

ALL 4 placements are MANDATORY regardless of prose flow:
  1. Overview P4
  2. How to Use Step 4
  3. Limitations Item 1
  4. FAQ Q1

Do NOT reduce to 3 for readability. This is a critical validation requirement.
Validation (item 7 and item 41) checks for EXACTLY 4 placements and will HARD FAIL
if any placement is missing.

Rationale: the "Not substitute" disclosure protects users from committing capital
based on a screening heuristic alone. All 4 placements are load-bearing — each
reaches a different user reading depth (overview skimmer → step-by-step reader →
limitations researcher → FAQ reader). Removing any one placement leaves a gap.
```

## FINAL EXECUTION OVERRIDE (v2 round 2 expert fix — MASTER RULE, overrides all others when in conflict)

```
FINAL EXECUTION OVERRIDE:

If following all rules reduces writing quality, clarity, or flow:

  → Write the content as a senior real estate copywriter would
  → Then enforce ONLY critical rules:
      • TITLE / META / H1 exact fallbacks
      • FORMULA (canonical MAO formula)
      • DISCLAIMERS (4 required placements)
      • TERMINOLOGY (required + forbidden lists)

Do NOT degrade readability to satisfy non-critical rules.

Natural, high-quality content always wins over mechanical compliance.
```

**This is the master rule.** When in doubt, write natural copy first, then audit for the 4 critical categories above. Every other rule in this prompt is secondary guidance, not an absolute constraint.

## CTA DEDUPLICATION RULE (v2 round 1 expert fix)

CTAs (Call-to-Action buttons/links) are documented in three layers: RIS (architecture), SEO (content references), and How to Use (user flow). To prevent LLM from repeating identical CTA text blocks across sections:

```
Describe CTA logic CONCEPTUALLY once, in the HOW TO USE section:
  "After your screening result, use action buttons to continue analysis:
    • Primary: Run full flip analysis (→ Fix and Flip Calculator)
    • Secondary: Analyze as BRRRR (→ BRRRR Calculator)
    • Tertiary: Compare with another deal (→ Compare Real Estate Deals)"

In OTHER sections, reference CTAs by concept, not by full reproduction:
  ✓ OK: "After screening, users can click through to the Fix and Flip 
         Calculator for full analysis."
  ✗ NOT OK: (repeating the full "Primary: Run full flip analysis..." block 
             across Result Meaning, Strategy, Applications sections)

This keeps content readable and avoids CTA spam.
```

---

## STRUCTURE PRESERVATION RULES

**Rule A — Section separation:**
Each section must be rendered as a separate structured block with its own H2. Do NOT merge sections. Do NOT collapse headings into paragraphs.

**Rule B — Paragraph length:**
Keep paragraph length to 2-5 sentences maximum. Avoid long dense blocks.

**Rule C — List format preservation:**
Use bullet points for lists. Do not convert lists into paragraphs.

---

## SEO KEYWORD NORMALIZATION RULE (v2 round 1 expert fix — resolves keyword vs terminology conflict)

There is a natural tension between SEO requirements (which need textual keyword variants like "70 percent rule calculator real estate") and product terminology (which requires symbolic form "70% Rule"). Without explicit rules, generation will either break SEO ranking or violate brand terminology.

**RESOLUTION RULE:**

```
Primary keyword "70 percent rule calculator real estate" MUST appear in its 
natural SEO form in:
  • TITLE (already ok per fallback)
  • META DESCRIPTION (already ok per fallback)
  • OVERVIEW P1 (at least once, as natural textual variation)
  • 1-2 H2 headings (as natural variation, e.g., "What Is the 70 Percent Rule in Real Estate?")

BUT all PRODUCT TERMINOLOGY throughout the document must use "70% Rule" 
(symbolic form).

ALLOWED MIXING PATTERN (use where both forms appear close together):
  "The 70 percent rule calculator (also called the 70% Rule Calculator) 
   helps fix-and-flip investors..."
  
  "What is the 70 Percent Rule in Real Estate? The 70% Rule is a 
   screening heuristic used by..."

This pattern satisfies search engines (which crawl textual "70 percent rule") 
AND maintains product terminology consistency (which uses symbolic "70% Rule").

DO NOT:
  ❌ Write "70 percent rule" everywhere (breaks product terminology)
  ❌ Write "70% rule" everywhere (breaks SEO for textual keyword)
  ❌ Invent other variations like "Seventy Percent Rule" or "Rule of 70"
```

---

## ANTI-KEYWORD-STUFFING RULE (v2 round 2 expert fix — prevents over-optimization penalty)

Strong SEO discipline is good; keyword stuffing is the opposite of good SEO and gets penalized by Google since 2013 (Penguin update). The prompt requires primary keyword placement in specific anchor positions — but frequency across the rest of the document should feel natural.

```
TARGET FREQUENCY for primary keyword "70 percent rule calculator real estate" 
and its textual variations:
  - Across the full document: 5-6 natural occurrences total (NOT more)
  - Anchor positions (required): TITLE, META, H1, OVERVIEW_P1, 1-2 H2s
  - Remaining body: prefer synonyms and natural language

NATURAL ALTERNATIVES to cycle through:
  ✓ "the 70% Rule" (shortened reference)
  ✓ "this calculator" / "the tool" (pronoun-like substitution)
  ✓ "MAO screening" (functional description)
  ✓ "maximum offer screening" (benefit-focused)
  ✓ "fix-and-flip offer calculator" (audience-focused secondary keyword)

ANTI-PATTERNS to avoid:
  ❌ "The 70% Rule Calculator is a calculator for calculating the 70% Rule..."
  ❌ Repeating "70 percent rule calculator real estate" 10+ times
  ❌ Cramming keyword into every subheading
  ❌ Starting every FAQ answer with primary keyword
```

Google's ranking has favored topical depth + natural language since BERT (2019). Writing for humans — with keyword placed at strategic anchors — ranks better than keyword-stuffed content.

---

## READABILITY RULE (v2 round 2 expert fix — content must read as expert-written, not system-generated)

Content should feel like an expert real estate investor wrote it — not like a template-filled output. This is enforced through variety and natural flow.

```
AVOID (signals system-generated text):
  ❌ Identical sentence structures across paragraphs 
     (e.g., every sentence starting with "The 70% Rule...")
  ❌ Rigid, formal phrasing where conversational tone fits better
  ❌ Overuse of the same transition words ("furthermore", "additionally", "moreover")
  ❌ Repeating identical sentence patterns ("X is Y. Z is W. A is B.")
  ❌ Bullet points where prose reads more naturally
  ❌ Bullet points of identical length/structure

USE (signals expert-written text):
  ✓ Varied sentence length — mix short punchy sentences with longer analytical ones
  ✓ Natural transitions ("But", "That said", "Here's why", "In practice")
  ✓ Human-like explanations with analogies or examples
  ✓ Occasional rhetorical questions to engage readers
  ✓ Direct address when appropriate ("you'll notice", "if you're screening a deal")
  ✓ Concrete examples over abstract principles

BALANCE TEST: if your draft feels like reading a checklist, rewrite for flow. 
If it feels like reading a professional blog post, you're on target.
```

This rule coexists with all other rules — readability wins for non-critical items per PRAGMATIC EXECUTION RULE.

---

## STRICT TERMINOLOGY CONTRACT (ZERO TOLERANCE)

Certain terms embed product integrity and must be used exactly. Any deviation is a critical error.

### REQUIRED TERMS (use exactly these):

1. **"Maximum Allowable Offer (MAO)"** — the primary output metric (NOT "max offer", "highest offer", "best offer")
2. **"70% Rule"** — the canonical heuristic (NOT "70 percent rule", "rule of 70", "70%-rule")
3. **"Gross Margin (Pre-Cost Buffer)"** — the ARV − MAO − Rehab metric (NEVER "Gross Margin" alone, NEVER "Gross Profit")
4. **"Rule Buffer (Profit + Costs Allocation)"** — the ARV × (1 − %) metric (NEVER "Implied Profit", NEVER "Profit Buffer" alone)
5. **"Offer as % of ARV"** — MAO / ARV × 100 (NEVER "Offer Ratio", NEVER "Price Ratio")
6. **"Implied Rule"** — (Purchase + Rehab) / ARV × 100 in Mode 3 (NEVER "Implied %" alone, NEVER "Effective Rule")
7. **"Screening heuristic"** — how we describe the 70% Rule's nature (NEVER "precise formula", NEVER "exact calculation", NEVER "valuation method")
8. **"Fix and Flip Calculator"** — full-name cross-reference (NEVER just "Fix and Flip" as noun, NEVER "flip calculator")

### FORBIDDEN TERMS (any use = critical error, regenerate):

- "Exact offer price" (we project/screen, never "exact")
- "Guaranteed profit" (no guarantees anywhere)
- "Definitive MAO" (MAO is an upper bound, not definitive)
- "Simple formula" (the math is simple but the rule embeds assumptions — don't minimize)
- "Always use 70%" (we allow 60-80% in Mode 2 for good reasons)
- "Net Profit" as synonym for Gross Margin (it's NOT net profit)
- "Break-Even" (the 70% Rule doesn't compute break-even; this is a different calculator family)
- "Qualifies for" (banned from DSCR bug — use "falls within" or "meets criteria")
- "Calculate your max offer" (we project/suggest; calculator "projects", not "calculates")

### VERIFICATION PROCEDURE

After drafting, grep the content for forbidden terms. Any match = regenerate or targeted-patch. This is ZERO TOLERANCE — even one instance misleads users.

### TERMINOLOGY APPLICATION RULE (v2 round 3 expert fix — prevents robotic prose)

```
Use required terms naturally within the text.

Do NOT force unnatural phrasing or repetition just to satisfy terminology rules.

Clarity and readability come first. Each required term must appear at least once 
somewhere in the content — not in every section where it might fit.
```

Example:
- ✓ OK: Use "Maximum Allowable Offer (MAO)" on first mention, then "MAO" in subsequent references
- ✗ NOT OK: Force "Maximum Allowable Offer" into every paragraph just to meet a frequency goal
- ✓ OK: "Gross Margin (Pre-Cost Buffer)" at introduction, shortened reference to "the buffer" in context-clear sentences
- ✗ NOT OK: Repeat the full "(Pre-Cost Buffer)" qualifier 8 times in one section

---

## YOUR TASK

Write an SEO package for:

```
Calculator Name:    70% Rule Calculator
Slug:               70-percent-rule-calculator
Primary keyword:    70 percent rule calculator real estate
Secondary keywords: 70% rule calculator, house flipping 70 rule calculator,
                    real estate investor 70 rule, 70 rule flip calculator,
                    fix and flip offer calculator, maximum offer calculator
Primary metric:     Maximum Allowable Offer (MAO) = ARV × 0.70 − Rehab
Secondary metrics:  Gross Margin (Pre-Cost Buffer), Rule Buffer (Profit + Costs
                    Allocation), Offer as % of ARV, Status Badge
Target audience:    Fix-and-flip investors, wholesalers, house flippers, 
                    real estate investors needing quick offer screening
Traffic priority:   Priority 2 (estimated 8,000-15,000 searches/month)
```

Use the attached RIS specification (70-percent-rule-ris-prompt-final.md) as the source of truth for formulas, thresholds, benchmarks, and test cases. Do NOT invent numbers — pull them from the RIS.

---

## CRITICAL DISTINCTIONS TO PRESERVE

**1. Screening heuristic, NOT full deal analysis**

Core positioning. 70% Rule is a **quick offer screening heuristic**, not a valuation method or deal validator. It embeds assumed costs (~15-20% financing+holding+selling) and profit margin (~15-20%). For committed capital decisions, always use Fix and Flip Calculator. This positioning must appear in Overview P1, Overview P4, How to Use, Limitations Item 1, FAQ Q1.

**2. Three modes with distinct purposes**

- Mode 1 (Standard 70%, amber) — default quick screen
- Mode 2 (Adjustable %, orange) — market-specific adjustment
- Mode 3 (Reverse, purple) — reverse-engineer a known offer

Content must explain when each mode applies. Mode 3 is uniquely valuable for wholesalers.

**3. Status Badge vs Implied Rule (Mode 3 only)**

This is the single most confusing part of the product. Content must explicitly distinguish:
- Status Badge = MAO / ARV × 100 (Offer price as % of ARV)
- Implied Rule = (Purchase + Rehab) / ARV × 100 (Total investment as % of ARV)

Both are correct and can classify the same deal differently. Content must spell this out in the What Is section, FAQ Q3, and Limitations.

**4. 2026 rate environment disclosure**

Traditional 70% Rule was designed for ~5% interest rate environments. In 2026 with hard money at 12-14%, the embedded profit margin is stretched. Content must disclose this and present the Financing Buffer option (Mode 1 only) as an adjustment.

**5. Two-tier rehab warnings**

- Rehab 40-80% of ARV → Heavy rehab warning (amber, "70% Rule margin may be insufficient")
- Rehab > 80% of ARV → Extreme rehab warning (red, "70% Rule may not apply — teardown/rebuild territory")

Content must explain the rehab cost classification system (cosmetic 0-15%, moderate 15-30%, heavy 30-40%, extensive 40-80%, teardown >80%).

**6. Wholesale fee handling**

When Wholesale Assignment Fee > 0, MAO represents the seller-facing offer (AFTER wholesaler extracts fee). Content must clarify wholesaler vs end-buyer roles — common user confusion.

**7. Canonical Scenarios: 65 / 70 / 75**

Three scenario cards always use 65% (Conservative) / 70% (Standard) / 75% (Competitive). NOT 65/70/72 (old v1 inconsistency). Match Mode 2 benchmark band.

**8. Integration with ARV → 70% Rule → Fix and Flip workflow**

Position this tool as middle step in a 3-tool flow. Content must cross-link:
- Inbound from ARV Calculator and Fix and Flip Calculator
- Outbound to Fix and Flip Calculator (primary CTA), BRRRR Calculator (secondary if Implied ≥75%), Compare Real Estate Deals (tertiary)

**9. CTA for every mode**

All 3 modes must display action buttons below output:
- Primary: "Run full flip analysis" → Fix and Flip Calculator with MAO/Purchase Price pre-filled
- Secondary: "Analyze as BRRRR instead" → BRRRR Calculator
- Tertiary: "Compare with another deal" → Compare Real Estate Deals

This is explicit conversion architecture, not decoration.

**10. Financing Buffer Mode 1 only**

Financing Buffer toggle is available ONLY in Mode 1 (Standard 70%). When Mode 2 (Adjustable %) is active, the toggle is physically disabled to prevent double-counting of financing costs. Content must explain this constraint in How to Use and FAQ.

---

## LANGUAGE AND TONE RULES

1. **Use "screens" / "projects" / "suggests"**, never "calculates" or "determines" — the 70% Rule is a screening heuristic, not a precise calculation.

2. **"Quick offer screen" / "first-pass viability check"** for strategic framing. "Calculator" for mechanical contexts.

3. **Natural keyword placement** — primary keyword appears in TITLE, H1, META, OVERVIEW_P1, at least 2 H2 headings.

4. **No "qualifies for" language** (DSCR bug). Use "falls within" or "matches".

5. **Input placeholders are instructions** — "Enter ARV" not "e.g., 200000".

6. **Honest uncertainty** — "projects MAO of $145,000 under standard 70% rule" not "your max offer should be $145,000".

7. **Always direct to Fix and Flip for final decisions** — screening is not committing.

8. **Cross-link to source calculators** — ARV Calculator (for ARV input), Fix and Flip (for full analysis), BRRRR (for alternative exit), Compare Real Estate Deals (for strategy comparison).

9. **Never use "guaranteed" or "exact"** — always probabilistic language.

10. **Flipping context explicit** — this tool is for fix-and-flip deals. Not generic real estate.

---

## SEO STRUCTURE (15 sections in strict order)

1. TITLE + META DESCRIPTION + H1
2. OVERVIEW (4 paragraphs)
3. HOW TO USE (4 steps + 4 pro tips + 3 mode explanations)
4. INPUTS & OUTPUTS (table)
5. FORMULA (intro box + canonical MAO formula + worked Austin example + split percentage examples)
6. WHAT IS (3 paragraphs — definition, Offer % vs Implied % distinction, 2026 context)
7. RESULT MEANING (Status Badge tiers + percentage interpretation + scenarios)
8. BENCHMARKS (% tiers by market type + 2026 Sunbelt context + rehab classification system)
9. STRATEGY (5 blocks: Beginner Flipper, Experienced Flipper, Wholesaler, Agent, Hybrid Investor)
10. APPLICATIONS (5 use cases)
11. INDUSTRY STANDARDS (70% Rule history + peer tool comparison + profit margin conventions)
12. LIMITATIONS (6 items + When Not to Use)
13. COMMON MISTAKES (5 items)
14. FAQ (8 Q&A)
15. RELATED CALCULATORS + SCHEMA block

---

## TITLE (hardcoded fallback)

```
MANDATORY — use exact fallback string below, no exceptions:

TITLE: 70% Rule Calculator — Fix and Flip Max Offer | RealCalc
(verified 57 characters — safely under 60-char Google cutoff)

SIMPLIFIED RULE: ALWAYS use the fallback title above. Do NOT generate a custom 
title. Do NOT modify the fallback. Do NOT attempt character counting for 
alternatives.

Rationale: fallback pre-verified at 57 characters, contains primary keyword 
anchor ("70% Rule Calculator"), USP marker ("Fix and Flip Max Offer"), 
and brand suffix.
```

## META DESCRIPTION

```
MANDATORY — use exact fallback string below, no exceptions:

META: Free 70% Rule Calculator for fix-and-flip investors. Screen maximum offer on any property in seconds — MAO = ARV × 70% − Rehab. Works for wholesalers too.

(verified 158 characters — within 150-160 band)

Rationale: fallback pre-verified length, includes primary keyword, core 
formula (anchor for featured snippets), and wholesaler inclusion (secondary 
audience).
```

## H1

```
MANDATORY — use exact fallback string below, no exceptions:

H1: 70% Rule Calculator — Fix and Flip Maximum Offer Tool

(verified 52 characters — well under 70-char recommendation)

Rationale: primary keyword in first 3 words, USP marker ("Maximum Offer Tool"), 
no brand suffix (H1 is for content, not brand reinforcement).
```

---

## OVERVIEW (4 paragraphs)

```
OVERVIEW_H2: 70% Rule Calculator for Fix and Flip Investors
OVERVIEW_SUBTITLE: Screen maximum offers on distressed properties in seconds

OVERVIEW_P1 (v2 round 2 expert fix — SOFTENED opener requirement for natural prose):
  [3-4 sentences MAX. Opening sentence MUST preserve the MEANING and STRUCTURE 
   of the reference sentence below, but does NOT need to be 100% verbatim 
   word-for-word. Minor natural variations are allowed if they improve 
   readability, AS LONG AS all key components are preserved:
   
   REFERENCE SENTENCE:
   "The 70% Rule Calculator helps fix-and-flip investors quickly screen the 
   maximum offer they can make on a distressed property — using the industry-standard 
   formula: Maximum Allowable Offer (MAO) = ARV × 70% − Rehab."
   
   KEY COMPONENTS THAT MUST APPEAR (in any natural phrasing):
     ✓ "70% Rule Calculator" (the product name)
     ✓ "fix-and-flip investors" or equivalent audience identification
     ✓ "screen" or "screening" (the action/purpose — NOT "calculate precisely")
     ✓ "distressed property" (the property type context)
     ✓ "MAO = ARV × 70% − Rehab" formula (canonical, exact math)
     ✓ "maximum offer" or "Maximum Allowable Offer" (the output concept)
   
   EXAMPLES of acceptable natural variations:
     ✓ "The 70% Rule Calculator gives fix-and-flip investors a fast way to 
        screen their maximum offer on distressed properties — applying the 
        industry-standard formula MAO = ARV × 70% − Rehab."
     ✓ "Our 70% Rule Calculator helps fix-and-flip investors screen the 
        highest price they can reasonably pay for a distressed property, 
        using the classic formula: Maximum Allowable Offer (MAO) = 
        ARV × 70% − Rehab."
   
   EXAMPLES of UNACCEPTABLE drift (missing key components):
     ✗ "This calculator helps you figure out what to offer on flip houses" 
        (missing formula, vague audience, uses "figure out" not "screen")
     ✗ "Use the 70% Rule to calculate your max offer precisely" 
        (uses "calculate precisely" — banned; missing distressed property 
        context; missing formula)
   
   AFTER the opener, add 1-2 sentences with natural SEO keyword variation 
   (per SEO KEYWORD NORMALIZATION RULE):
   - Use "70 percent rule calculator" naturally alongside "70% Rule Calculator"
   - Include at least 1 of these secondary keywords: "house flipping calculator", 
     "maximum offer calculator", "fix and flip offer calculator"
   - Position as "quick screening heuristic" (one phrase, not full positioning paragraph)
   
   FORMULA PLACEMENT FLEXIBILITY (v2 round 2 expert fix — improves prose flow):
   The formula (MAO = ARV × 70% − Rehab) MAY appear in the FIRST sentence 
   OR the SECOND sentence of P1, whichever reads more naturally. Jamming 
   everything into sentence 1 often produces awkward long sentences — 
   splitting is allowed and often preferred.
   
   EXAMPLE — formula in sentence 1 (compact):
     "The 70% Rule Calculator helps fix-and-flip investors screen the 
      maximum offer on a distressed property using the formula 
      MAO = ARV × 70% − Rehab."
   
   EXAMPLE — formula in sentence 2 (often smoother):
     "The 70% Rule Calculator helps fix-and-flip investors quickly screen 
      the maximum offer they can make on a distressed property. It applies 
      the industry-standard formula: Maximum Allowable Offer (MAO) = 
      ARV × 70% − Rehab."
   
   Both are acceptable. Pick whichever sounds more natural.
   
   DO NOT include in P1 (moved to P2 per v2 round 1 Fix 2):
     ❌ Full modes explanation (Mode 1/2/3 descriptions)
     ❌ Two-tier status interpretation details
     ❌ 2026 Financing Buffer explanation
     ❌ "Not substitute for Fix and Flip" disclosure (that's in P4)
   
   P1 goal: hook the reader + establish primary keyword + state the formula. 
   That's it. Keep it tight.
   
   EXECUTION SIMPLIFICATION (v2 round 4 expert fix — prevents analysis paralysis):
   Focus on the KEY COMPONENTS only. Examples above are illustrative — do NOT 
   try to match them structurally. Write a natural P1 that contains the 6 key 
   components; don't micro-optimize against the example variants.]

OVERVIEW_P2 (v2 round 1 expert fix — EXPANDED — now holds differentiation + modes):
  [4-5 sentences. Must explain (moved from P1 per Fix 2):
   - 3 modes with distinct purposes:
     * Mode 1 Standard 70%: quick default screen
     * Mode 2 Adjustable %: market-specific (60-80% range)
     * Mode 3 Reverse: reverse-engineer an offer to find its implied rule
   - When each mode applies — investors use Mode 1 for quick screening, 
     wholesalers use Mode 3 to validate end-buyer fit, experienced flippers 
     use Mode 2 for market-specific thresholds
   - Core differentiator (moved from P1): two-tier status interpretation 
     (Offer % vs Implied Rule in Mode 3) + 2026 market-aware Financing Buffer 
     option (Mode 1 only)]

OVERVIEW_P3:
  [4-5 sentences. Must explain:
   - Integration in 3-tool flipper workflow: ARV Calculator → 70% Rule → 
     Fix and Flip Calculator
   - ARV Calculator gives you the resale value estimate
   - 70% Rule screens whether an offer makes sense (quick go/no-go)
   - Fix and Flip Calculator runs the full profitability analysis with 
     holding, financing, selling costs
   - Position: 70% Rule is a screening tool — for committed capital decisions, 
     always run the full analysis]

OVERVIEW_P4:
  [3-4 sentences. MUST contain:
   - "Not substitute for Fix and Flip Calculator" disclosure (first of 4 
     required placements): "The 70% Rule is a screening heuristic — it embeds 
     generalized cost assumptions (financing, holding, selling, profit). 
     For committed capital decisions, always validate with the Fix and Flip 
     Calculator for precise modeling of your specific deal."
   - "Projections, not guarantees" framing
   - Call-to-action: "Enter ARV and Rehab Budget above to see your screened 
     MAO, or import values from the ARV Calculator."]
```

---

## HOW TO USE (4 numbered steps + 4 pro tips + 3 mode explanations)

```
HOW_TO_USE_H2: How to Use the 70% Rule Calculator
HOW_TO_USE_SUBTITLE: From ARV estimate to screened maximum offer in 4 steps

STEP_1:
  TITLE: Enter the After-Repair Value (ARV)
  BODY: [3-4 sentences — explain key input:
         - ARV = estimated value of the property AFTER full renovation
         - Not the current "as-is" value, not the asking price
         - If you don't have an ARV estimate, use the ARV Calculator first
           (link to /arv-calculator)
         - Pro tip: pull 3-5 recent comparable sales within 0.5-1 mile 
           radius, adjust for size/condition differences]

STEP_2:
  TITLE: Enter the Rehab Budget
  BODY: [3-4 sentences — explain:
         - Total estimated renovation cost to bring property to ARV condition
         - Include materials, labor, permits, contingency (~10-15%)
         - Industry classification: cosmetic (0-15% ARV), moderate (15-30%), 
           heavy (30-40%), extensive (40-80%), teardown (>80%)
         - Calculator warns you if Rehab exceeds 40% of ARV (heavy rehab 
           may stretch 70% Rule margin) or 80% of ARV (extreme — rule may 
           not apply)]

STEP_3:
  TITLE: Select mode (Standard 70% / Adjustable % / Reverse)
  BODY: [4-5 sentences — explain:
         - Mode 1 Standard 70%: default, apply canonical formula MAO = ARV × 0.70 − Rehab
         - Mode 2 Adjustable %: use 60-80% to reflect local market conditions
         - Mode 3 Reverse: enter your actual offer price to see what % rule 
           it matches
         - Advanced toggle: "Include Financing Buffer" subtracts 3% of ARV 
           to account for 2026 high-rate hard money environment (Mode 1 only; 
           disabled in Mode 2 to prevent double-counting)
         - Wholesale Assignment Fee: if you're a wholesaler, enter your 
           assignment fee — it reduces the seller-facing offer]

STEP_4:
  TITLE: Interpret MAO, Status Badge, and secondary metrics
  BODY: [5-6 sentences. MUST contain "Not substitute" disclosure (second placement):
         - Primary output: Maximum Allowable Offer (MAO) rounded to nearest $500
         - Status Badge: Deep Value (≤60%) / Standard Flip Zone (60-70%) / 
           Competitive (70-75%) / High Risk (>75%) based on Offer-as-%-of-ARV
         - Secondary metrics: Gross Margin (Pre-Cost Buffer) — NOT profit; 
           Rule Buffer — what the percentage allocates to costs + profit
         - If Mode 3: you'll also see Implied Rule percentage with a separate 
           classification — different metric from Status Badge, both valid
         - "The 70% Rule is a screening tool. Before committing capital on 
           any property that passes this screen, run the full analysis in 
           the Fix and Flip Calculator to model your specific financing, 
           holding, and selling costs."]

PRO_TIP_1:
  [Pattern: pro_tip for ARV quality.
   "70% Rule accuracy depends entirely on ARV accuracy. A 10% ARV error 
   translates to 7% MAO error. Always pull 3-5 recent comps (sold within 
   6 months, within 1 mile, similar square footage) before relying on the 
   MAO result. Use the ARV Calculator for confidence tiers."]

PRO_TIP_2:
  [Pattern: pro_tip for percentage selection.
   "If you're in a competitive 2026 Sunbelt market (Austin, Phoenix, Atlanta, 
   Dallas), expect to use 72-75% Rule to win bids. Reserve 70% Rule for 
   off-market and 65% Rule for auction/foreclosure deals where you can 
   win on patience. Don't apply 70% uniformly — let your local market 
   data set the percentage."]

PRO_TIP_3:
  [Pattern: pro_tip for wholesale role.
   "If you're a wholesaler, enter your Assignment Fee in Advanced inputs. 
   The MAO then represents the price you offer the seller — your end-buyer 
   pays (MAO + Assignment Fee), which should still land within their 70% 
   Rule. If it doesn't, you can't assign the deal profitably."]

PRO_TIP_4:
  [Pattern: pro_tip for workflow efficiency.
   "Quick workflow: use the ARV Calculator to establish value, then click 
   'Check offer viability' to import ARV here. If the screened MAO looks 
   viable, click 'Run full flip analysis' to import everything into the 
   Fix and Flip Calculator for final validation before making an offer."]

HOW_TO_USE_MODES_H3: Choosing the Right Mode

MODE_STANDARD:
  TITLE: Standard 70% Rule (default, amber)
  USE_WHEN: You want a quick go/no-go screen using the canonical industry formula
  OUTPUT: MAO = ARV × 0.70 − Rehab, with Status Badge and secondary metrics

MODE_ADJUSTABLE:
  TITLE: Adjustable Percentage (orange)
  USE_WHEN: Your local market requires a non-70% benchmark (60-80% range)
  OUTPUT: MAO at your selected %, plus benchmark band (65/70/75 comparison)
  CONSTRAINT: Financing Buffer disabled in this mode (prevents double-counting)

MODE_REVERSE:
  TITLE: Reverse Mode (purple)
  USE_WHEN: You have an offer price and want to know what % rule it matches
  OUTPUT: Implied Rule percentage + interpretation band + dual display with Status Badge
  PRIMARY_USE: wholesalers validating if end-buyers will accept the deal
  EXPLICIT_CLARIFICATION (v2 round 1 expert fix — Mode 3 commonly misunderstood):
    "Mode 3 answers a DIFFERENT question than Modes 1/2. 
     
     Modes 1/2 answer: 'What's the maximum I can offer?'
     Mode 3 answers:   'Is my existing offer in line with industry standards?'
     
     This is why Mode 3 shows TWO percentages (Offer % for Status Badge + 
     Implied Rule for classification) — they describe different aspects of 
     the same deal. Neither is the 'correct' one; both are correct and 
     useful for different decisions."
```
---

## INPUTS & OUTPUTS (table format)

```
INPUTS_OUTPUTS_H2: Inputs and Outputs
INPUTS_OUTPUTS_SUBTITLE: What you enter, what the calculator screens

INPUTS_TABLE:
  [Render as markdown table. 3 columns: Input | Required | Default/Source.
   Group by:
   
   1. REQUIRED (all modes):
      - ARV (After-Repair Value): required, from ARV Calculator or comps
      - Rehab Budget: required, from renovation estimate
   
   2. MODE 2 ADDITIONAL:
      - Custom Percentage: 60-80 range, default 70
   
   3. MODE 3 ADDITIONAL:
      - Your Purchase Price: required in Mode 3
   
   4. ADVANCED (optional, Mode 1 only):
      - Wholesale Assignment Fee: $0 default
      - Include Financing Buffer: false default
   
   Placeholders: "Enter ARV" / "Enter rehab cost" NOT "e.g., 250000".]

OUTPUTS_TABLE:
  [Render as markdown table. 3 columns: Output | Formula | Purpose.
   Strictly follow RIS Outputs table.
   
   Row structure:
   
   PRIMARY METRIC:
   - Maximum Allowable Offer (MAO): 
     ARV × Percentage − Rehab − Wholesale Fee (optional − Financing Buffer in Mode 1)
     Display: big number, currency, rounded to $500
     Only shown when valid (> 0); otherwise error state replaces it
   
   SECONDARY METRICS:
   - Gross Margin (Pre-Cost Buffer):
     ARV − MAO − Rehab
     Dollar buffer for ALL costs + profit — NOT profit
   - Rule Buffer (Profit + Costs Allocation):
     ARV × (1 − Percentage)
     What the percentage buffer is meant to cover (holding, financing, selling, profit)
   - Offer as % of ARV:
     MAO / ARV × 100
     Transparency — what % you're paying vs resale value
   
   STATUS BADGE (based on Offer as % of ARV):
   - ≤ 60%: GREEN "Deep Value"
   - 60-70%: BLUE "Standard Flip Zone"
   - 70-75%: AMBER "Competitive Zone"
   - > 75%: RED "High Risk"
   
   MODE 3 ADDITIONAL (Reverse Mode):
   - Implied Rule:
     (Purchase + Rehab) / ARV × 100
     What % rule does your offer imply — DIFFERENT metric from Status Badge
   
   For Offer as % of ARV row, purpose column MUST clarify: "What % of ARV 
   you're paying. Distinct from Implied Rule (Mode 3) which includes Rehab. 
   Both valid — measure different things."]
```

---

## FORMULA (intro box + canonical formula + Austin worked example + split examples)

**FORMULA SECTION RULES (v2 round 3 expert fix — consolidated):**

```
GOAL: Explain the formula clearly to end users. NOT to replicate the RIS engine.

MUST INCLUDE (never drop):
  1. Canonical formula: MAO = ARV × 0.70 − Rehab
  2. ONE worked example with realistic numbers

SHOULD INCLUDE (if space allows):
  3. Brief mode explanations (Standard / Adjustable / Reverse)
  4. ONE alternative scenario

MUST NOT INCLUDE:
  ❌ Full RIS calculation engine logic
  ❌ Input validation rules (belong in RIS)
  ❌ Edge-case handling beyond user level
  ❌ Implementation details (min/max guards, clamp logic)

LENGTH GUARD:
  Maximum FORMULA section length: 400-450 words total.
  
  If exceeded:
    → Keep canonical formula + one worked example
    → Remove additional scenarios
    → Remove ASCII diagrams
    → Remove secondary mode elaborations

The RIS (70-percent-rule-ris-prompt-final.md) remains the SOURCE OF TRUTH 
for calculation engine specifics.
```

---

```
FORMULA_H2: How the 70% Rule Calculator Works
FORMULA_SUBTITLE: The industry-standard heuristic — with a worked 
                  Austin, TX 2026 example

FORMULA_INTRO_BOX:
  "The 70% Rule Calculator applies a simple screening formula used by 
   flippers since the 1980s: Maximum Allowable Offer (MAO) = ARV × 70% − 
   Rehab. The 70% represents an industry-standard allocation — roughly 
   15-20% for all costs (financing, holding, selling) and 15-20% for 
   profit, totaling the 30% buffer. This calculator adds 3 modes 
   (Standard, Adjustable, Reverse), two-tier status interpretation, 
   2026 rate environment awareness, and explicit cross-referencing to 
   Fix and Flip Calculator for full deal analysis. Results are 
   screening projections — first-pass viability indicators, not 
   final offer prices."

STEP_BY_STEP (canonical formula + variations):

  Standard 70% Rule (Mode 1):
    MAO = ARV × 0.70 − Rehab − Wholesale Fee (if any)
    If Financing Buffer enabled:
      MAO = MAO − (ARV × 0.03)

  Adjustable % (Mode 2, 60-80 range):
    MAO = ARV × (Custom % / 100) − Rehab − Wholesale Fee
    Financing Buffer NOT AVAILABLE in Mode 2 (prevents double-counting 
    since Custom % already reflects market/cost assumptions)

  Reverse Mode (Mode 3):
    Implied Rule = ((Purchase Price + Rehab) / ARV) × 100
    Offer as % of ARV = Purchase Price / ARV × 100 (for Status Badge)

FORMULA_BOX:
  Primary Formula:
    MAO = ARV × 0.70 − Rehab
  
  With all optional adjustments:
    MAO = ARV × (% / 100) − Rehab − Wholesale Fee − (ARV × 0.03 if Financing Buffer)
  
  Reverse Mode:
    Implied Rule = ((Purchase + Rehab) / ARV) × 100
  
  Secondary metrics:
    Gross Margin (Pre-Cost Buffer) = ARV − MAO − Rehab
    Rule Buffer = ARV × (1 − %/100)
    Offer as % of ARV = MAO / ARV × 100

KEY USER-FACING RULES (v2 round 4 expert fix — trimmed from 7 internal rules to 3 user-facing; full methodology is in RIS):
  - 70% is the canonical figure; Mode 2 allows 60-80% adjustment for market conditions
  - Mode 3 (Reverse) includes Rehab in the Implied Rule formula, which is why it can 
    differ from the Status Badge's Offer-as-%-of-ARV
  - Financing Buffer (Mode 1 only) is a 2026 high-rate adjustment — do not combine 
    with Custom % (double-count)

FORMULA_VISUAL (v2 round 2 expert fix — replaced heavy ASCII with compact flow description):

```
Data flow (high-level, not an implementation diagram):

Inputs (ARV, Rehab, optional Wholesale Fee) 
  → Mode selection (Standard 70% / Adjustable % / Reverse) 
  → Core formula applied per mode 
  → Secondary metrics computed (Gross Margin Pre-Cost Buffer, Rule Buffer, Offer % of ARV) 
  → Status Badge assigned (Deep Value / Standard / Competitive / High Risk) 
  → Display + CTAs to full analysis
```

Note: ASCII flowchart removed to reduce prompt weight and avoid LLM drift during rendering. The linear flow above communicates the same information more reliably.

FORMULA_EXAMPLE:
  Location:        Austin, TX (2026 Sunbelt competitive market)
  Market context:  Hot market, mid-range distressed property, 
                   typical investor screening scenario

  STRICT NUMERIC RANGES — use values within these bands:
    ARV:                   $250,000
    Rehab Budget:          $30,000
    Mode:                  Standard 70%
    Wholesale Fee:         $0 (direct-to-seller offer)
    Financing Buffer:      disabled

  EXPECTED RESULT (per RIS Test 1):
    MAO = $250,000 × 0.70 − $30,000
        = $175,000 − $30,000
        = $145,000
    
    Gross Margin (Pre-Cost Buffer) = $250,000 − $145,000 − $30,000 = $75,000
    Rule Buffer = $250,000 × (1 − 0.70) = $75,000
    Offer as % of ARV = $145,000 / $250,000 × 100 = 58%
    
    Status Badge: GREEN "Deep Value" (58% ≤ 60%)

  ALTERNATIVE SCENARIO (v2 round 2 expert fix — compressed to 1 example):
    At 75% (competitive hot market):
      MAO = $250,000 × 0.75 − $30,000 = $157,500
      Offer as % of ARV = 63% → BLUE "Standard Flip Zone"
    
    This shows how shifting from 70% to 75% raises MAO by $12,500 and moves 
    the Status Badge up one tier. Mode 1 Financing Buffer (Mode 1 only, 
    subtracts 3% of ARV) would further adjust for 2026 rate environment.

  EXECUTION NOTE (v2 round 2 expert fix — simplified from 4 rules + 4 checks):
    When writing this worked example in the generated content:
      ✓ Show Phase 2 calculations clearly
      ✓ Emphasize Status Badge classification
      ✓ Avoid forbidden terminology (no "Gross Margin" alone, no "Implied Profit", 
        no "Qualifies for", no "Net Profit", no "Calculate precisely")
      ✓ Stay at user-understandable detail level; don't expand into RIS engine logic
```

---

## WHAT IS (3 paragraphs — definition, Offer % vs Implied %, 2026 context)

```
WHAT_IS_H2: What Is the 70% Rule in Real Estate?
WHAT_IS_SUBTITLE: The industry-standard screening heuristic for fix-and-flip investors

WHAT_IS_P1:
  [4-5 sentences. Define 70% Rule:
   - The 70% Rule is an industry-standard screening heuristic used by 
     fix-and-flip investors to quickly determine the maximum they can pay 
     for a distressed property
   - Formula: MAO = ARV × 0.70 − Rehab
   - The "70%" represents a buffer: 15-20% for all transaction costs 
     (financing, holding, selling) and 15-20% for the investor's profit
   - Originated in the 1980s-1990s flipping community, popularized by 
     BiggerPockets and similar platforms
   - Important framing: this is a SCREENING tool, not a valuation method. 
     For committed capital decisions, use the Fix and Flip Calculator for 
     full deal analysis.]

WHAT_IS_P2:
  [4-5 sentences. Explain Offer % vs Implied Rule distinction (critical UX):
   - Two different percentages can describe the same deal:
     * Offer as % of ARV: MAO / ARV × 100 — how much of the property's 
       value you're paying in the purchase price alone
     * Implied Rule: (Purchase + Rehab) / ARV × 100 — your TOTAL investment 
       (purchase + renovation) as a % of ARV
   - Example: ARV $200K, Rehab $30K, offer $110K. Offer as % = 55% 
     (Deep Value). Implied Rule = 70% (Standard flip territory).
   - Both are correct. Both measure different things.
   - Status Badge uses Offer as % of ARV (price-focused). Mode 3 Implied 
     Rule uses total investment. Content will clarify when each applies.]

WHAT_IS_P3:
  [4-5 sentences. Explain 2026 context:
   - Traditional 70% Rule was designed for ~5% interest rate environments
   - In 2026 with hard money at 12-14% and typical 4-6 month flips, 
     financing alone eats 4-5% of ARV — eroding the 30% buffer
   - This calculator offers a "Financing Buffer" toggle (Mode 1 only) that 
     subtracts 3% of ARV to account for modern costs
   - Alternatively, some markets now require 72-75% Rule to win competitive 
     bids — use Mode 2 for this approach
   - Both approaches (Buffer or Custom %) address the same problem; 
     do NOT combine them (double-counting).]
```

---

## RESULT MEANING (Status Badge tiers + % interpretation + scenarios)

```
RESULT_MEANING_H2: What Your MAO and Status Badge Mean
RESULT_MEANING_SUBTITLE: Interpreting the screening output + scenario comparison

RESULT_INTRO:
  [2-3 sentences. Frame: MAO is the ceiling, not the target. Status Badge 
   reflects how aggressive your offer is relative to property value.]

STATUS_BADGE_TIERS:
  TITLE: Status Badge Tiers (based on Offer as % of ARV)
  BODY: [Bullet list:
         - ≤ 60% (Deep Value, GREEN): Strong margin, rare find. Typical 
           in auctions, foreclosures, or seriously distressed inventory. 
           Hard to win in MLS competition.
         - 60-70% (Standard Flip Zone, BLUE): Healthy margin, standard 
           flipping territory. Common for off-market deals in balanced markets.
         - 70-75% (Competitive, AMBER): Thinner margin, competitive markets 
           (2026 Sunbelt). Verify holding/financing costs carefully.
         - > 75% (High Risk, RED): Thin margin may not cover all costs 
           in 2026 rate environment. Consider BRRRR or rental exit 
           strategy, not flipping.]

PERCENTAGE_INTERPRETATION:
  TITLE: What different percentages mean (market context)
  BODY: [From RIS:
         - 60-65%: Slow/Buyer's Market, strong margin, hard to win
         - 65-70%: Balanced/Standard, industry-standard zone
         - 70-75%: Seller's/Competitive, hot market requires
         - 75-80%: Hyper-Competitive, thin margins, may indicate BRRRR exit
         - > 80%: Not flip territory, long-term hold or retail buyer]

SCENARIOS_COMPARISON:
  TITLE: Three Scenarios at a Glance
  BODY: [Render as 3-column comparison:
         - CONSERVATIVE 65% (strong margin, rehab +10% overrun allowance)
         - STANDARD 70% (industry benchmark)
         - COMPETITIVE 75% (hot markets, thin margin)
         
         Show MAO for each at user's ARV + Rehab inputs.
         Explain when each applies.]

RESULT_CONTEXT_2026:
  TITLE: 2026 Market Context
  BODY: [4-5 sentences:
         - Most competitive Sunbelt markets (Austin, Phoenix, Atlanta, Dallas) 
           require 72-75% Rule to win MLS-listed distressed properties
         - Off-market deals still clear 65-70%
         - Auction/foreclosure/tax sale properties can clear 55-65% for 
           patient investors
         - Hard money rates at 12-14% mean the traditional 70% buffer is 
           stretched — use Financing Buffer (Mode 1) or higher % (Mode 2)
         - The Status Badge still uses the canonical 70% boundary — it 
           reflects your offer risk, not market conditions.]
```

---

## BENCHMARKS (% tiers + 2026 Sunbelt + rehab classification)

```
BENCHMARKS_H2: 70% Rule Benchmarks for 2026
BENCHMARKS_SUBTITLE: Percentage ranges, market types, and rehab cost classifications

BENCHMARKS_INTRO:
  [2-3 sentences. Frame: illustrative patterns, not measured data. Individual 
   results depend on local market dynamics, deal source, and property condition.]

BENCHMARKS_BY_PERCENTAGE_TIER:
  [Structured table from RIS:
   60-65%: Slow / Buyer's Market — Deep value, rare in hot markets
   65-70%: Balanced / Standard — Industry-standard flipping zone
   70-75%: Seller's / Competitive — Hot markets, thin margins
   75-80%: Hyper-Competitive — BRRRR/rental territory, thin for flipping
   > 80%: Not Flip Territory — Long-term hold or retail buyer]

BENCHMARKS_BY_MARKET_2026:
  TITLE: Typical 2026 Market Benchmarks
  BODY: [3-4 sentences:
         - Sunbelt (Austin, Phoenix, Atlanta, Dallas): 72-75% Rule to win MLS bids
         - Midwest (Cleveland, Indianapolis, Kansas City): 65-70% Rule still viable
         - Coastal (LA, NY, Boston, SF): 75-80% common; BRRRR preferred over flips
         - Rural/auction/tax sale: 55-65% Rule achievable with patience
         - These are illustrative; verify with local investor networks and 
           recent comparable flips in your target market.]

BENCHMARKS_REHAB_CLASSIFICATION:
  TITLE: Rehab Cost Classification (% of ARV)
  BODY: [From RIS:
         - 0-15% ARV: Cosmetic (paint, flooring, fixtures)
         - 15-30% ARV: Moderate (kitchens, baths)
         - 30-40% ARV: Heavy (systems, additions) — amber warning triggered
         - 40-80% ARV: Extensive (structural, full gut) — still flip territory 
           but verify with full analysis
         - > 80% ARV: Teardown/Rebuild — 70% Rule may not apply; use 
           different analysis framework]

BENCHMARKS_DISCLAIMER:
  "These ranges are illustrative patterns based on typical fix-and-flip 
   scenarios in 2026 US markets, NOT measured statistical datasets, NOT 
   market research, NOT predictions for any specific deal. The percentages 
   shown represent approximate outcomes observed across common investor 
   strategies. Actual results depend on your specific market, deal source, 
   rehab scope, and execution. The calculator's output on YOUR inputs 
   always takes precedence over these aggregate expectations."
```
---

## STRATEGY (5 blocks for different investor types)

```
STRATEGY_H2: How to Use the 70% Rule by Investor Type
STRATEGY_SUBTITLE: Matching the screening approach to your business model

STRATEGY_BEGINNER_FLIPPER:
  TITLE: Beginner Flipper (1-3 deals)
  BODY: [3-4 sentences. Recommend:
         - Start with Mode 1 Standard 70% as your default screen
         - Enable Financing Buffer (Mode 1) since you likely use hard money 
           at 12-14% rates
         - Only pursue deals where MAO Status Badge shows Green (Deep Value) 
           or Blue (Standard Flip Zone)
         - Always run Fix and Flip Calculator before making the offer — 
           don't rely on 70% Rule alone for your first few deals]

STRATEGY_EXPERIENCED_FLIPPER:
  TITLE: Experienced Flipper (10+ deals)
  BODY: [3-4 sentences. Recommend:
         - Use Mode 2 Adjustable % with your local market's benchmark 
           (72-75% for Sunbelt, 65-70% for Midwest)
         - Skip Financing Buffer in Mode 2 (custom % already accounts for 
           market conditions)
         - Use Status Badge as quick visual filter for deal sourcing — 
           pass deals showing Red "High Risk"
         - Fix and Flip Calculator still useful for precise profit projection, 
           but 70% Rule becomes your primary MLS/wholesaler screening tool]

STRATEGY_WHOLESALER:
  TITLE: Wholesaler
  BODY: [3-4 sentences. Recommend:
         - Use Mode 3 Reverse to validate if end-buyer's 70% Rule accepts 
           your assignable price
         - Enter your property-under-contract price + Rehab + ARV to see 
           Implied Rule
         - If Implied Rule ≥ 75%, your deal is thin for flippers — may be 
           assignable only to BRRRR or rental investors
         - Use Mode 1 with Wholesale Assignment Fee to reverse: how much 
           to offer the seller so your margin + end-buyer's 70% Rule both 
           work]

STRATEGY_AGENT:
  TITLE: Real Estate Agent / Advisor
  BODY: [3-4 sentences. Recommend:
         - Use 70% Rule to set realistic expectations with investor clients 
           and distressed-property sellers
         - Show the Status Badge tiers to explain why investor offers 
           typically fall 55-70% of ARV, not "full value"
         - Use Mode 2 benchmark band (65/70/75%) to communicate local market 
           competitiveness to sellers considering investor offers
         - Always redirect clients to Fix and Flip Calculator for full 
           deal underwriting]

STRATEGY_HYBRID_INVESTOR:
  TITLE: Hybrid Investor (Flip + BRRRR + Rental)
  BODY: [3-4 sentences. Recommend:
         - Use Mode 3 Reverse to classify deals by Implied Rule — deals 
           with Implied ≥ 75% shift from flip to BRRRR/rental analysis
         - Use CTA "Analyze as BRRRR instead" to pivot high-implied deals 
           into BRRRR Calculator
         - Use Compare Real Estate Deals to test same deal across all 
           3 strategies (Flip vs BRRRR vs Rental)
         - 70% Rule here is strategy selection tool, not pure flip screen]
```

---

## APPLICATIONS (5 use cases)

```
APPLICATIONS_H2: Common Use Cases
APPLICATIONS_SUBTITLE: When the 70% Rule Calculator is the right tool

APPLICATION_1:
  TITLE: Quick MLS screening
  BODY: [2-3 sentences. When evaluating distressed MLS listings, enter ARV 
         + estimated Rehab to see if the list price falls within viable 
         offer range. If MAO is significantly below list price, deal 
         likely isn't worth pursuing — move on.]

APPLICATION_2:
  TITLE: Wholesaler deal validation
  BODY: [2-3 sentences. Use Mode 3 Reverse to check if your under-contract 
         property is assignable at your target price. If Implied Rule 
         exceeds 75%, end-buyers (flippers) likely won't take the deal 
         without price reduction.]

APPLICATION_3:
  TITLE: Auction/foreclosure maximum bid
  BODY: [2-3 sentences. Before an auction, compute MAO at 65% (Conservative) 
         to set your absolute maximum bid. Walk away if bidding exceeds 
         MAO — auction psychology often pushes otherwise-disciplined 
         investors into thin-margin deals.]

APPLICATION_4:
  TITLE: Off-market seller education
  BODY: [2-3 sentences. When negotiating direct with distressed sellers, 
         show the 70% Rule calculation to explain why you can't pay 
         closer to ARV. Transparency builds trust and often accelerates 
         negotiation.]

APPLICATION_5:
  TITLE: Portfolio deal flow screening
  BODY: [2-3 sentences. Run every incoming deal through 70% Rule as 
         first-pass filter. Only deals passing the screen (Green or Blue 
         Status Badge) advance to Fix and Flip Calculator for full analysis. 
         Saves hours on deals that will never pencil.]
```

---

## INDUSTRY STANDARDS (70% Rule history + peer tool comparison + profit conventions)

```
INDUSTRY_STANDARDS_H2: How This Calculator Aligns with Industry Conventions
INDUSTRY_STANDARDS_SUBTITLE: 70% Rule history, peer tools, and profit conventions

INDUSTRY_HISTORY:
  TITLE: The 70% Rule's origin
  BODY: [4-5 sentences:
         - Popularized in the 1980s-1990s fix-and-flip community
         - Promoted heavily by BiggerPockets, SparkRental, and educator 
           networks starting 2010s
         - 30% buffer rationale: roughly 15-20% for all transaction costs 
           (financing ~2-4%, holding ~5-8%, selling ~6-7%) and 15-20% for 
           profit margin
         - Designed for lower rate environments (~5% mortgages pre-2022)
         - 2026 high-rate environment challenges the rule — this calculator 
           offers Financing Buffer to compensate]

INDUSTRY_PROFIT_CONVENTIONS:
  TITLE: Profit margin conventions
  BODY: [4-5 sentences:
         - Minimum target profit: $25K-$50K per flip (national average)
         - 15-20% profit as % of ARV is industry benchmark
         - Below 10% profit: deal not worth the risk
         - Above 25% profit: rare, usually indicates aggressive ARV or 
           underestimated rehab
         - Use Fix and Flip Calculator to convert 70% Rule screening into 
           precise profit projection]

INDUSTRY_PEER_COMPARISON:
  TITLE: How this differs from BiggerPockets / DealCheck / SparkRental
  BODY: [4-5 sentences. Honest comparison:
         - BiggerPockets: has 70% Rule in their Fix and Flip calculator 
           but not as standalone screening tool
         - DealCheck: combines 70% Rule with full flip analysis in one 
           screen — harder to use for quick screening
         - SparkRental: educational content strong; dedicated calculator 
           less prominent
         - RealCalc 70% Rule Calculator: unique in (a) 3-mode flexibility 
           (Standard/Adjustable/Reverse), (b) Status Badge vs Implied Rule 
           distinction, (c) explicit 2026 Financing Buffer, (d) seamless 
           CTA flow to Fix and Flip Calculator + BRRRR + Compare Deals]

INDUSTRY_DISCLAIMER:
  "These comparisons describe market positioning, not endorsements. The 
   70% Rule is a widely-used heuristic; multiple quality calculators 
   exist. RealCalc's approach emphasizes screening + explicit cross-tool 
   integration rather than attempting to replace full deal analysis."
```

---

## LIMITATIONS (6 items + When Not to Use)

**LIMITATIONS CONCISENESS RULE (v2 round 1 expert fix):**

Each limitation item must be CONCISE — maximum 4 sentences. Long limitations blocks lose reader attention and dilute the impact of critical disclosures. If a limitation requires more than 4 sentences, either (a) split it into two separate items, or (b) move detail to FAQ where it can be fully elaborated.

```
Per-item sentence budget:
  Sentence 1: Name the limitation clearly
  Sentence 2: Explain why it matters
  Sentence 3: (Optional) Give a concrete example or threshold
  Sentence 4: (Optional) Recommend action or alternative tool

Do NOT:
  ❌ Expand into 6-8 sentence lectures per limitation
  ❌ Repeat the "consult CPA" advice in every item (once, in Item 6, is enough)
  ❌ Introduce new edge cases; focus on core user-facing risks
```

---

```
LIMITATIONS_H2: Limitations of the 70% Rule
LIMITATIONS_SUBTITLE: What this screening tool cannot tell you

LIMITATION_1:
  TITLE: Screening heuristic, not full deal analysis
  BODY: [3-4 sentences. Required disclaimer (third placement):
         - The 70% Rule embeds generalized cost assumptions; your actual 
           financing, holding, and selling costs may differ significantly
         - High-rate environments (2026 hard money 12-14%) stretch the 
           embedded profit margin beyond realistic levels
         - ALWAYS validate with Fix and Flip Calculator before committing 
           capital — not substitute for professional analysis
         - For precision tax or financing decisions, consult CPA + lender]

LIMITATION_2:
  TITLE: Does not model holding time
  BODY: [3-4 sentences:
         - 70% Rule assumes typical 4-6 month flip hold
         - Longer holds (slow markets, permit delays) inflate holding 
           costs beyond the 30% buffer
         - Fix and Flip Calculator models exact hold time and its cost 
           implications
         - If your market has 12+ month resale times, adjust Custom % 
           down to 65% or below]

LIMITATION_3:
  TITLE: Assumes typical rehab scope
  BODY: [3-4 sentences:
         - 70% Rule works best for cosmetic to moderate rehab (0-30% ARV)
         - Heavy rehab (30-40%) stretches margins — amber warning
         - Extensive rehab (40-80%) may still work but requires full 
           analysis — don't rely on screening
         - Teardown/rebuild (>80% ARV) breaks the rule entirely; use 
           different valuation framework]

LIMITATION_4:
  TITLE: ARV accuracy determines result accuracy
  BODY: [3-4 sentences:
         - A 10% ARV error becomes 7% MAO error
         - Overestimating ARV (most common error) leads to overpaying
         - Use ARV Calculator with 3-5 recent comps for confidence
         - Consider LOW confidence ARV as another warning flag — calculator 
           doesn't model this internally but you should]

LIMITATION_5:
  TITLE: Market conditions can invalidate the 30% buffer
  BODY: [3-4 sentences:
         - Hot markets requiring 75%+ offers erode profit margin
         - Slow markets with extended hold times erode the same margin 
           from the other side
         - The 70% figure is a mid-cycle benchmark; extreme markets require 
           different frameworks
         - Use Mode 2 Adjustable % with your local market data instead 
           of defaulting to 70%]

LIMITATION_6:
  TITLE: Not a substitute for professional advice
  BODY: [3-4 sentences:
         - This is an educational and screening tool
         - Before committing capital: CPA for tax specifics, attorney for 
           contracts/entity structure, lender for actual financing terms, 
           contractor for rehab scope and cost
         - "Not investment advice" disclaimer]

WHEN_NOT_TO_USE_H3: When Not to Use This Calculator
WHEN_NOT_TO_USE_LIST:
  - "Rental property analysis: use Rental Property Calculator or Rental 
     Property ROI Calculator"
  - "BRRRR strategy evaluation: use BRRRR Calculator (different cost 
     structure with refi step)"
  - "Commercial or multifamily 5+ units: 70% Rule is residential 
     fix-and-flip specific"
  - "New construction: teardown/rebuild requires different valuation 
     framework"
  - "Long-term buy-and-hold: use Rental Property ROI Calculator for 
     lifetime wealth analysis"
  - "Wholesale-to-wholesale (double close): calculator assumes single 
     assignment; double-close involves additional costs"
  - "Tax planning or capital gains analysis: consult CPA"
```

---

## COMMON MISTAKES (5 items)

```
COMMON_MISTAKES_H2: Common Mistakes When Using the 70% Rule
COMMON_MISTAKES_SUBTITLE: Avoid these five errors

MISTAKE_1:
  TITLE: Overestimating ARV
  BODY: [2-3 sentences. Most common error — investors anchor on recent 
         "best comp" rather than median of 3-5 comps. Overestimating ARV 
         by 10% inflates MAO by 7%, which turns marginal deals into 
         seemingly viable ones. Use ARV Calculator with multiple comp 
         approach.]

MISTAKE_2:
  TITLE: Underestimating rehab
  BODY: [2-3 sentences. Second most common error — forgetting permits, 
         unforeseen structural issues, labor cost inflation, or contingency 
         buffer (should be 10-15%). Underestimated rehab shrinks actual 
         margin while 70% Rule still shows "viable." Get contractor bids, 
         not online estimates.]

MISTAKE_3:
  TITLE: Treating 70% as a law of nature
  BODY: [2-3 sentences. 70% is a mid-cycle benchmark — not gospel. 
         Competitive 2026 Sunbelt markets require 72-75%. Slow rural 
         markets may support 65%. Use Mode 2 with your local market data 
         instead of rigid 70% application.]

MISTAKE_4:
  TITLE: Double-counting financing costs
  BODY: [2-3 sentences. Applying Financing Buffer (Mode 1) AND using 
         Custom % (Mode 2) both account for financing — doing both 
         double-counts. Calculator prevents this by disabling Financing 
         Buffer in Mode 2, but understand the principle: one adjustment, 
         not both.]

MISTAKE_5:
  TITLE: Relying on 70% Rule alone for commitment
  BODY: [2-3 sentences. The 70% Rule is a first-pass screen, not full 
         underwriting. Before signing a purchase agreement, run the deal 
         through Fix and Flip Calculator to model YOUR specific financing 
         rate, holding period, and selling costs. Screening saves time; 
         analysis saves capital.]
```

---

## FAQ (8 Q&A)

```
FAQ_H2: Frequently Asked Questions
FAQ_SUBTITLE: Common questions about the 70% Rule

FAQ_Q1: What's the difference between this and the Fix and Flip Calculator?
FAQ_A1: [3-4 sentences. 70% Rule Calculator = quick screening heuristic, 
        one formula, one output (MAO). Fix and Flip Calculator = full deal 
        analysis with specific financing rate, holding period, selling 
        costs, precise profit projection. Use 70% Rule to screen MLS 
        listings and decide which deals warrant deeper analysis. Use Fix 
        and Flip Calculator before committing capital on any deal that 
        passes the screen.]

FAQ_Q2: Why is the 70% Rule "70%" specifically?
FAQ_A2: [3-4 sentences. The 30% buffer approximates: 15-20% for all 
        transaction costs (financing ~2-4%, holding ~5-8%, selling ~6-7%) 
        and 15-20% for investor profit margin. 70% is a round-number 
        approximation that worked well in pre-2022 low-rate environments. 
        2026 high-rate environment stretches this — consider Mode 2 with 
        72-75% or Mode 1 with Financing Buffer enabled.]

FAQ_Q3: Why does the Status Badge show "Deep Value" but my Mode 3 Implied 
        Rule says "Standard Flip Territory"?
FAQ_A3: [4-5 sentences. These are two different metrics measuring different 
        things. Status Badge = Offer as % of ARV (MAO / ARV × 100) — how 
        much of the property's value you're paying in cash. Implied Rule = 
        Total investment as % of ARV ((Purchase + Rehab) / ARV × 100) — 
        your total capital outlay as % of ARV. Example: offer $110K, rehab 
        $30K, ARV $200K. Offer as % = 55% (Deep Value badge). Implied Rule 
        = 70% (Standard flip territory). BOTH are correct. They answer 
        different questions.]

FAQ_Q4: Can I use the 70% Rule for BRRRR?
FAQ_A4: [3-4 sentences. BRRRR has different cost structure — you're not 
        selling, you're refinancing. Traditional 70% Rule margins don't 
        apply directly. Use BRRRR Calculator for refi-focused analysis. 
        However, deals with Implied Rule ≥ 75% (aggressive for flipping) 
        can sometimes work as BRRRR since you're holding long-term instead 
        of selling — our calculator offers a "Analyze as BRRRR instead" 
        CTA in Mode 3 for this scenario.]

FAQ_Q5: What about wholesale fees?
FAQ_A5: [3-4 sentences. If you're a wholesaler, enter your Assignment Fee 
        in Advanced inputs. MAO then represents the seller-facing offer 
        (AFTER your fee is extracted). Your end-buyer pays (MAO + Fee), 
        which should still land within their 70% Rule. If it doesn't, 
        the deal isn't assignable at your fee — either reduce fee or 
        pass on the property.]

FAQ_Q6: When should I use 65% vs 70% vs 75%?
FAQ_A6: [3-4 sentences. 65% = conservative (slow markets, auction deals, 
        patient investors). 70% = industry standard (balanced markets, 
        off-market deals). 75% = aggressive (hot Sunbelt MLS, competitive 
        bidding). Use Mode 2 with your local market's benchmark. Use 
        the Sensitivity Table to see how MAO changes across these tiers 
        at once.]

FAQ_Q7: Does the 70% Rule work in 2026 with high interest rates?
FAQ_A7: [3-4 sentences. The traditional 70% Rule was calibrated for ~5% 
        interest rates. 2026 hard money at 12-14% eats 4-5% of ARV in 
        financing alone — stretching the 30% buffer. Two adjustments: 
        (1) enable Financing Buffer in Mode 1 (subtracts 3% of ARV), 
        or (2) use Mode 2 with 72-75% to bake market conditions into 
        your percentage. Do NOT combine both — that's double-counting.]

FAQ_Q8: My MAO is negative. Is the deal dead?
FAQ_A8: [3-4 sentences. Negative MAO means Rehab exceeds the buffer 
        (ARV × Percentage). Usually this signals the deal isn't a 
        standard flip — it's probably a teardown, major-rehab project, 
        or overestimated rehab. The calculator shows an error state 
        instead of a negative number. Options: (1) re-verify ARV and 
        Rehab estimates, (2) explore as BRRRR or buy-and-hold rental 
        instead, (3) pass on the deal.]
```

---

## RELATED CALCULATORS

```
RELATED_CALCULATORS_H2: Related Calculators
RELATED_CALCULATORS_SUBTITLE: Continue your flip analysis workflow

RELATED_LIST (5 items with 1-2 sentence descriptions):
  - ARV Calculator — After-Repair Value estimation using comparable sales; 
    use this BEFORE 70% Rule to establish accurate ARV input
  - Fix and Flip Calculator — Full deal analysis with financing, holding, 
    selling costs, and precise profit projection; use AFTER 70% Rule 
    screening passes
  - BRRRR Calculator — Buy-Rehab-Rent-Refi-Repeat analysis for deals too 
    thin for flipping but viable as long-term holds
  - Compare Real Estate Deals — Side-by-side comparison of Rental vs BRRRR 
    vs Flip strategies for the same property
  - Rehab Cost Estimator (coming soon) — Room-by-room renovation cost 
    breakdown to improve Rehab Budget accuracy
```

---

## SCHEMA BLOCK (JSON-LD)

```
SCHEMA_TYPE: FinancialProduct + SoftwareApplication (dual schema)

SCHEMA_NAME: 70% Rule Calculator
SCHEMA_DESCRIPTION: [150-200 chars. Must include primary keyword.
                    Example: "Free 70% Rule Calculator for fix-and-flip 
                    investors. Screen maximum offer on any distressed 
                    property in seconds — MAO = ARV × 70% − Rehab. 
                    Includes Adjustable % and Reverse modes for wholesalers."]

SCHEMA_FEATURE_LIST:
  - Maximum Allowable Offer (MAO) screening
  - Canonical 70% Rule formula with explanation
  - 3 modes: Standard 70%, Adjustable %, Reverse
  - Mode 2 adjustable percentage range 60-80% with benchmark band
  - Mode 3 Reverse for wholesaler deal validation
  - 2026 Financing Buffer toggle (Mode 1 only, prevents double-counting)
  - Wholesale Assignment Fee handling
  - Two-tier rehab warnings (40% and 80% of ARV)
  - Status Badge classification (Deep Value / Standard / Competitive / High Risk)
  - Dual percentage display in Mode 3 (Offer % vs Implied Rule)
  - 3 scenarios (Conservative 65% / Standard 70% / Competitive 75%)
  - Sensitivity table (Percentage × Rehab Variance)
  - URL parameter import from ARV Calculator
  - Direct CTAs to Fix and Flip, BRRRR, and Compare Real Estate Deals

SCHEMA_AUDIENCE: US Real Estate Investors (fix-and-flip, wholesalers, hybrid)
SCHEMA_PRICE: Free
SCHEMA_OPERATING_SYSTEM: Web browser
```

---

## CRITICAL CHECKS (7 inline items + v1 acceptance items)

Before finalizing this SEO package, verify these 7 CRITICAL items:

1. [ ] TITLE uses exact fallback: "70% Rule Calculator — Fix and Flip Max Offer | RealCalc" (57 chars)
2. [ ] H1 uses exact fallback: "70% Rule Calculator — Fix and Flip Maximum Offer Tool" (52 chars)
3. [ ] META uses exact fallback (158 chars, contains primary keyword + core formula + wholesaler inclusion)
4. [ ] OVERVIEW_P1 starts with plain-language opener VERBATIM: "The 70% Rule Calculator helps fix-and-flip investors quickly screen the maximum offer they can make on a distressed property — using the industry-standard formula: Maximum Allowable Offer (MAO) = ARV × 70% − Rehab."
5. [ ] FORMULA section uses canonical `MAO = ARV × 0.70 − Rehab`; all 3 modes documented; Financing Buffer Mode 1 only
6. [ ] "Gross Margin (Pre-Cost Buffer)" used throughout; NEVER "Gross Margin" alone or "Gross Profit"
7. [ ] "Not substitute for Fix and Flip Calculator" disclosure in EXACTLY 4 placements (Overview P4, How to Use Step 4, Limitations Item 1, FAQ Q1)

**STRICT TERMINOLOGY CONTRACT applied (8 required + 9 forbidden terms — see top of prompt):**
- [ ] "Maximum Allowable Offer (MAO)" used as primary metric label
- [ ] "70% Rule" (not "70 percent rule" or "rule of 70")
- [ ] "Gross Margin (Pre-Cost Buffer)" — never unqualified
- [ ] "Rule Buffer (Profit + Costs Allocation)" — never "Implied Profit"
- [ ] "Offer as % of ARV" — never "Offer Ratio"
- [ ] "Implied Rule" (Mode 3) — distinct from Status Badge
- [ ] "Screening heuristic" — framing preserved
- [ ] Zero forbidden terms: no "Exact offer", "Guaranteed profit", "Definitive MAO", "Simple formula", "Net Profit", "Break-Even", "Qualifies for", "Calculate your max offer"

**v2 round 1 acceptance items (7 expert fixes applied):**
- [x] Fix 1 (Critical): SEO KEYWORD NORMALIZATION RULE added — resolves "70 percent rule" (SEO) vs "70% Rule" (terminology) conflict with allowed mixing pattern
- [x] Fix 2 (Critical): OVERVIEW_P1 decongested to 3-4 sentences (opener + 1 keyword + brief framing only); modes + differentiation moved to P2
- [x] Fix 3 (Critical): FORMULA SIMPLIFICATION RULE added — prevents SEO duplicating RIS engine logic, keeps SEO formula section explanatory-level
- [x] Fix 4 (Critical): PRAGMATIC EXECUTION RULE added — stabilizes generation by allowing readability over mechanical compliance for non-critical items
- [x] Fix 5 (Medium): CTA DEDUPLICATION RULE added — describe CTA logic conceptually once, reference elsewhere
- [x] Fix 6 (Medium): Mode 3 EXPLICIT_CLARIFICATION — states that Mode 3 answers a DIFFERENT question than Modes 1/2 ("what's my offer vs industry" not "what's max offer")
- [x] Fix 7 (Medium): LIMITATIONS CONCISENESS RULE added — max 4 sentences per item; don't dilute impact with lectures

**Full 45+ item validation checklist available in companion file `70-percent-rule-seo-validation-prompt.md`** — run as post-generation second-pass audit.

**v2 round 2 acceptance items (5 expert fixes applied — final polish):**
- [x] Fix 1 (Critical): GLOBAL EXECUTION SIMPLIFICATION RULE added at top — meta-constraint above all rules; "write natural content first, then verify critical rules only"
- [x] Fix 2 (Critical): OVERVIEW_P1 opener softened from "substantially verbatim" to "preserve meaning and structure, natural variations allowed" with KEY COMPONENTS checklist + acceptable/unacceptable examples
- [x] Fix 3 (Critical): FORMULA PRIORITY STRUCTURE added with 3-tier priority (mandatory / if space / drop-first) + graceful degradation order; ASCII dropped first, canonical formula + example never dropped
- [x] Fix 4 (Medium): ANTI-KEYWORD-STUFFING RULE added — target 5-6 primary keyword occurrences total, cycle through natural alternatives for remaining references
- [x] Fix 5 (Medium): READABILITY RULE added — avoid identical sentence structures, rigid phrasing, repeating transitions; use varied length, natural transitions, human-like explanations

---

## FINAL SELF-CHECK (v2 round 5 — updated mandatory 4-placement rule, anti-drift mechanism)

Before finalizing the SEO content package, verify these 4 items. Fix any failure before outputting.

```
FINAL SELF-CHECK:

1. All 15 sections present?
   TITLE/META/H1 → OVERVIEW → HOW TO USE → INPUTS & OUTPUTS → FORMULA →
   WHAT IS → RESULT MEANING → BENCHMARKS → STRATEGY → APPLICATIONS →
   INDUSTRY STANDARDS → LIMITATIONS → COMMON MISTAKES → FAQ →
   RELATED CALCULATORS + SCHEMA
   → HARD FAIL if any section is missing.

2. MAO = ARV × 0.70 − Rehab present?
   Canonical formula must appear at least 3 times in exact form.
   → HARD FAIL if absent or paraphrased incorrectly.

3. "Not substitute for Fix and Flip Calculator" present in ALL 4 required placements?
   → Overview P4         (placement 1)
   → How to Use Step 4  (placement 2)
   → Limitations Item 1 (placement 3)
   → FAQ Q1             (placement 4)
   ALL 4 are MANDATORY. Do NOT reduce to 3. Validation checks for exactly 4.
   → HARD FAIL if any placement is missing.

4. No forbidden terminology?
   Zero occurrences of: "Gross Margin" unqualified, "Gross Profit", "Net Profit",
   "Exact offer price", "Definitive MAO", "Calculate your max offer",
   "Guaranteed profit", "Qualifies for", "Break-Even", "Implied Profit",
   "Simple formula", "Always use 70%"
   → HARD FAIL for any match.
```

This final check stabilizes generation quality and prevents drift. If any item fails → fix before outputting.

---

**Output only the SEO content package in Markdown. Do not output code. Do not output HTML. Do not output Vue. This is a content document that will be consumed by the Master Prompt later alongside the RIS spec.**

---

**End of SEO v1 → v2 round 1 → v2 round 2 → v2 round 5 FINAL (3 review rounds, 13 fixes total: 8 critical + 5 medium). v2 round 5 fix: resolved GLOBAL RULE vs validation conflict — "Not substitute for Fix and Flip Calculator" exempted from 3-placement relaxation; all 4 placements are mandatory; FINAL SELF-CHECK updated with HARD FAIL language. This document defines the complete SEO content package for the 70% Rule Calculator. Pair with 70-percent-rule-ris-prompt-final.md (RIS) and 70-percent-rule-seo-validation-prompt.md (validation companion) for full Phase 16 package.**
