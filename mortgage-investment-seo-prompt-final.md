# SEO Package Prompt — Mortgage Calculator (Investment Property) — v1

You are a senior SEO copywriter specializing in US real estate investment content. Your job is to produce a **complete SEO content package** for the Mortgage Calculator (Investment Property) page.

The output of this prompt is pure content — no code, no HTML, no Vue. It will later be combined with the RIS specification (mortgage-investment-ris-prompt-final.md) and the Master Prompt to generate the actual page.

---

## RIS PRIORITY RULE (v2 round 1 expert fix — source-of-truth hierarchy, READ BEFORE EVERYTHING ELSE)

```
RIS PRIORITY RULE:

The RIS (mortgage-investment-ris-prompt-final.md) is the SOURCE OF TRUTH for:
  • Formulas (amortization, PITI, DSCR, Cash Flow, Break-Even Rent)
  • Thresholds (DSCR tiers, Cash Flow tiers, rate defaults by loan type)
  • Metric definitions (what "Net Monthly Cash Flow" means, PMI logic, etc.)
  • Test cases (expected outputs for specific inputs)
  • Critical rules (PMI only on Conventional/Second Home, Hard Money Mode 2 blocking)

If any conflict arises between this SEO prompt and the RIS:
  → RIS ALWAYS wins
  → Rewrite the SEO content to match RIS, not vice versa
  → If RIS changes, SEO must update to stay aligned

SEO prompt responsibilities (distinct from RIS):
  • User-facing copy, explanations, tone
  • 15-section content structure
  • TITLE/META/H1 and other hardcoded fallbacks
  • Disclaimer placements
  • Cross-link narrative to other calculators

DO NOT:
  ❌ Override RIS formulas in SEO content
  ❌ Invent new metric definitions
  ❌ Change threshold numbers from RIS
  ❌ Reorder calculation steps

This rule prevents SEO content drift over time as the prompt is used for multiple 
generations. After 20+ runs, natural variation accumulates — RIS PRIORITY RULE 
keeps all generations anchored to the same mathematical foundation.
```

---

## PRIORITY EXECUTION RULE (READ FIRST)

If capacity overload occurs during generation, prioritize in this strict order:

1. TITLE / META / H1 — exact fallbacks
2. OVERVIEW P1 opener (preserve meaning, not strict verbatim)
3. FORMULA (canonical amortization formula + PITI breakdown)
4. TERMINOLOGY (required + forbidden terms)
5. DISCLAIMERS (investor rate disclosure, DSCR vs Cash Flow, PMI auto-cancel)

See FINAL EXECUTION OVERRIDE for the master rule on quality vs compliance tradeoffs.

---

## GLOBAL RULE — Redundancy handling

If the same requirement appears multiple times across the prompt, execute it once per required placement. **If this conflicts with FINAL EXECUTION OVERRIDE** (i.e., mechanical placement would degrade natural flow) → prioritize readability and natural flow.

---

## FINAL EXECUTION OVERRIDE (MASTER RULE)

```
If following all rules reduces writing quality, clarity, or flow:
  → Write the content as a senior real estate copywriter would
  → Then enforce ONLY critical rules:
      • TITLE / META / H1 exact fallbacks
      • FORMULA (amortization + PITI)
      • DISCLAIMERS (4 key placements)
      • TERMINOLOGY (required + forbidden lists)

Do NOT degrade readability to satisfy non-critical rules.
Natural, high-quality content always wins over mechanical compliance.
```

---

## STRUCTURE PRESERVATION RULES

**Rule A:** Each section = separate H2 block. Never merge sections.
**Rule B:** Paragraph length 2-5 sentences max.
**Rule C:** Use bullet points for lists. Don't convert to paragraphs.

---

## MANDATORY DISCLOSURE PLACEMENTS (v2 round 1 expert fix — strict placements, no flexibility)

The phrase **"This calculator is designed for investment properties, not primary residences"** (or a verbatim-equivalent sentence that explicitly distinguishes investor use from primary residence use) MUST appear in AT LEAST these 4 placements. Avoid excessive repetition beyond 6 mentions across the document (v2 round 3 expert fix — buffer increased from 5 to 6 to eliminate false FAILs from natural language variation):

```
1. OVERVIEW P4 — end of opener section, as disclosure
2. HOW TO USE Step 2 — end of "Select loan type" step, as context for investor rates
3. LIMITATIONS Item 1 — in "Rates are illustrative" item, as key disclaimer
4. FAQ Q1 — in answer about investor vs primary residence rates, as explicit contrast

These placements are STRICT (no flexibility). Validation audit counts occurrences.

Acceptable phrasings (any of these counts):
  ✓ "This calculator is designed for investment properties, not primary residences"
  ✓ "For primary residence analysis, use a primary residence mortgage calculator"
  ✓ "Not for owner-occupied primary residences — use a primary residence mortgage calculator"
  ✓ "Designed for investors, not primary residence buyers"

This is the SINGLE mandatory disclaimer with required 4 placements. Other 
caveats (PMI auto-cancel, DSCR vs Cash Flow) have their own rules below.
```

---

## STRICT TERMINOLOGY CONTRACT

### REQUIRED TERMS (use naturally, at least once each):

1. "Investment Property Mortgage Calculator" — product name
2. "PITI" — Principal, Interest, Taxes, Insurance
3. "Net Monthly Cash Flow" OR "Net Monthly Cost" — toggled by sign
4. "DSCR" — Debt Service Coverage Ratio
5. "Break-Even Rent (Gross Required Rent)" — with full qualifier
6. "Investor rate" / "investment property rate"
7. "Cash-on-Cash Return" or "CoC"
8. "Conventional / DSCR / Portfolio / Hard Money / Second Home" — 5 loan types

### FORBIDDEN TERMS (zero tolerance):

- "Consumer mortgage rate" (we target investors)
- "Guaranteed approval" / "guaranteed rate"
- "Best mortgage rate"
- "Qualifies for" (DSCR bug prevention)
- "Pre-qualified" / "pre-approved"
- "Break-Even" without "(Gross Required Rent)" qualifier
- "Tax savings" (use "interest deduction")
- "Easy mortgage" / "simple loan"
- "Always choose" [any loan type]

### TERMINOLOGY APPLICATION RULE

```
Use required terms naturally within the text.
Do NOT force unnatural phrasing or repetition just to satisfy terminology rules.
Clarity and readability come first. Each required term appears at least once.
```

### VERIFICATION PROCEDURE

After drafting, grep the content for forbidden terms. Any match = regenerate or targeted-patch.

---

## DSCR VS CASH FLOW STRICT RULE (v2 round 1 expert fix — core product value, no simplification)

This calculator's core educational value is distinguishing DSCR from Cash Flow. Many competitor calculators blur or omit this distinction. When explaining DSCR vs Cash Flow anywhere in the content (What Is P2, Result Meaning KEY_INSIGHT_BLOCK, FAQ Q4), MUST include all 3 elements:

```
MUST include:
  1. DSCR uses P&I only (lender metric)
     — Annual Debt Service = Monthly P&I × 12
     — Taxes/insurance/HOA are NOT in debt service
  
  2. Cash Flow uses full PITI (investor metric)
     — Includes taxes, insurance, PMI, HOA
     — Subtracts from Effective Rent (after vacancy + OpEx)
  
  3. A deal can pass DSCR AND still be cash-flow negative
     — Common in high-tax states (TX, IL, NJ) and high-insurance markets (FL)
     — Lender approves loan, investor still pays out-of-pocket monthly
     — Both truths coexist

Do NOT simplify this distinction to:
  ❌ "DSCR shows if deal is good, cash flow shows profit"
  ❌ "DSCR and Cash Flow are basically the same thing"
  ❌ "If DSCR is high, cash flow will be positive"
  ❌ "DSCR is the lender version of cash flow"

These simplifications destroy the core educational value of this calculator.
```

---

## YOUR TASK

```
Calculator Name:    Mortgage Calculator (Investment Property)
Slug:               mortgage-calculator-investment
Primary keyword:    investment property mortgage calculator
Secondary keywords: rental property mortgage calculator, investment mortgage calculator,
                    DSCR mortgage calculator, investor mortgage payment calculator,
                    real estate investor mortgage calculator, second home mortgage calculator
Primary metric:     Monthly Payment (PITI) + Rental Income Offset = Net Cash Flow
Secondary metrics:  Annual Cash Flow, Cash-on-Cash %, DSCR, Break-Even Rent
Target audience:    Real estate investors (NOT primary residence buyers)
Traffic priority:   Priority 2 FLAGSHIP (30,000-50,000 searches/month)
```

Use attached RIS (mortgage-investment-ris-prompt-final.md) as source of truth for formulas/thresholds/tests.

---

## CRITICAL DISTINCTIONS TO PRESERVE

**1. Investment-focused, NOT primary residence mortgage** — rates default 7.5% (2026 investor market), not 5% primary residence. Down payment 25%, not 20%. Loan types include DSCR/Portfolio/Hard Money.

**2. Three modes with distinct purposes:**
- Mode 1 Standard (blue) — classic PITI
- Mode 2 Investor with Rental Offset (indigo) — **KEY DIFFERENTIATOR** — adds rental income
- Mode 3 Compare Loan Scenarios (emerald) — 2-3 loans side-by-side

**3. DSCR vs Cash Flow — KEY INSIGHT** — most important UX concept. Property can have negative Cash Flow but still meet DSCR ≥ 1.2 (lender approvable). These answer different questions — lender risk vs investor outcome. Content must explain in What Is, Result Meaning, FAQ.

**4. "Net Monthly Cost" vs "Cash Flow" terminology toggle** — when Effective Rent < PITI → "Net Monthly Cost"; when ≥ PITI → "Net Monthly Cash Flow". Never show negative minus-sign primary metric.

**5. "Break-Even Rent (Gross Required Rent)"** — always with full qualifier. Tooltip: "Gross rent BEFORE vacancy and expenses". Worked example: PITI $2,185 → Break-Even $3,394.

**6. PMI logic** — only Conventional/Second Home with <20% down. DSCR/Portfolio/Hard Money never have PMI. MANDATORY PMI auto-cancel disclosure at ~78% LTV.

**7. Hard Money in Mode 2 → BLOCKING banner** — nonsensical combination. RED banner redirecting to Fix and Flip Calculator.

**8. Investor defaults signal positioning** — rate 7.5%, down payment 25%, Loan Type selector prominent.

**9. Cross-calculator invariants** — Year 1 CoC matches Rental Property Calculator ±0.1 pp; DSCR matches DSCR Calculator for identical inputs.

**10. Integration cross-links** — Inbound: Rental Property, Rental Property ROI, Fix and Flip, BRRRR. Outbound: Rental Property, Rental Property ROI, DSCR, Compare Real Estate Deals.

---

## LANGUAGE AND TONE RULES

1. Use "calculates" / "projects" / "models" — mortgage math is actual calculation
2. "Investor mortgage analysis tool" for strategic framing
3. Natural keyword placement — no stuffing
4. No "qualifies for" language (DSCR bug)
5. Input placeholders are instructions ("Enter property price") NOT examples
6. Honest context — "projects PITI of $2,185/mo based on your inputs"
7. Investor-appropriate framing — "evaluate financing feasibility"
8. Cross-link to source/sibling calculators
9. Never use "guaranteed" or "best rate"
10. Rate environment context — when rates mentioned, note 2026 environment

---

## SEO STRUCTURE (15 sections in strict order)

1. TITLE + META + H1
2. OVERVIEW (4 paragraphs)
3. HOW TO USE (5 steps + 4 pro tips + 3 mode explanations)
4. INPUTS & OUTPUTS (table)
5. FORMULA (canonical amortization + PITI breakdown + Austin worked example)
6. WHAT IS (3 paragraphs)
7. RESULT MEANING (PITI breakdown + Cash Flow tiers + DSCR tiers)
8. BENCHMARKS (rates by loan type 2026 + PITI ranges + DSCR thresholds)
9. STRATEGY (5 investor blocks)
10. APPLICATIONS (6 use cases)
11. INDUSTRY STANDARDS
12. LIMITATIONS (6 items + When Not to Use)
13. COMMON MISTAKES (5 items)
14. FAQ (9 Q&A)
15. RELATED CALCULATORS + SCHEMA

---

## TITLE (hardcoded fallback)

```
MANDATORY — use exact fallback string below, no exceptions:

TITLE: Investment Property Mortgage Calculator — PITI + Cash Flow | RealCalc
(verified 66 characters — safely under 70-char Google cutoff)

SIMPLIFIED RULE: ALWAYS use the fallback. Do NOT generate custom title.
```

## META DESCRIPTION

```
MANDATORY — use exact fallback string below:

META: Free Investment Property Mortgage Calculator for real estate investors. Calculate PITI, rental cash flow, DSCR, and compare loan scenarios. 2026 investor rates.

(verified 159 characters — within 150-160 band)
```

## H1

```
MANDATORY — use exact fallback string below:

H1: Investment Property Mortgage Calculator — PITI, Cash Flow, DSCR

(verified 62 characters)
```

---

## OVERVIEW (4 paragraphs)

```
OVERVIEW_H2: Investment Property Mortgage Calculator for Real Estate Investors
OVERVIEW_SUBTITLE: Project PITI, rental cash flow, and DSCR in seconds

OVERVIEW_P1 (tight — opener + keyword + brief framing):
  [OVERVIEW_P1 LENGTH RULE (v2 round 1 expert fix):
    - First sentence: ≤ 25-30 words
    - Total paragraph: ≤ 3-4 sentences
    - Word budget: 60-90 words total
   
   Enforce this strictly — P1 becomes the SEO hook. Longer P1 dilutes keyword 
   impact and delays the differentiation message (which should hit in P2).]
  
  [3-4 sentences MAX. MUST START with plain-language opening sentence 
   preserving meaning of reference (natural phrasing allowed, not strict verbatim):
   
   Reference opener:
   "The Investment Property Mortgage Calculator helps real estate investors 
   project the full monthly payment (PITI), estimate cash flow after rent, 
   and compare loan scenarios — using 2026 investor mortgage rates, not 
   primary residence rates."
   
   AFTER the opener: 1-2 sentences with natural SEO keyword variation. 
   Include at least 1 secondary keyword: "DSCR mortgage calculator", 
   "rental property mortgage calculator", "investor mortgage payment calculator".
   
   DO NOT include in P1 (moved to P2):
     ❌ Full modes explanation
     ❌ DSCR vs Cash Flow explanation (in What Is)
     ❌ Hard Money warnings (in Limitations)
     ❌ "Not for primary residence" (in P4)
   
   P1 goal: hook + primary keyword + tool purpose. Keep tight.
   
   EXECUTION SIMPLIFICATION: Focus on KEY COMPONENTS. Write natural P1 with 
   required components; don't micro-optimize against example variants.]

OVERVIEW_P2 (differentiation + modes):
  [4-5 sentences. Explain:
   - 3 modes: Mode 1 Standard (classic PITI), Mode 2 Investor with Rental 
     Offset (adds rental for Net Cash Flow — UNIQUE to investor tools), 
     Mode 3 Compare Loan Scenarios (side-by-side 2-3 loans)
   - When each applies — new investors Mode 1, cash-flow-focused Mode 2, 
     strategic comparison Mode 3
   - Core differentiator vs primary residence mortgage calculators: investor rate 
     defaults (7.5%), loan type variety (DSCR/Portfolio/Hard Money), 
     Mode 2 rental offset analysis]

OVERVIEW_P3 (integration in investor workflow):
  [4-5 sentences. Explain:
   - Integration with other tools:
     * Rental Property Calculator → Year 1 operating
     * Rental Property ROI → lifetime wealth
     * DSCR Calculator → lender underwriting
     * Compare Real Estate Deals → cross-strategy
   - Workflow: "Price financing here → validate Year 1 cash flow in Rental 
     Property Calculator → project 10-year ROI in Rental Property ROI"
   - Who this tool is for: real estate investors at financing-decision stage
   - Who it's NOT for: primary residence buyers]

OVERVIEW_P4 (disclosures + CTA):
  [3-4 sentences. MUST contain (v2 round 3 expert fix — REQUIRED EXACT PHRASING):
   - MANDATORY DISCLOSURE (1st of 4 placements).
     Must include explicit phrasing equivalent to:
     "This calculator is designed for investment properties, not primary residences."
     
     Full placement example (use this as pattern, not strict verbatim — key 
     phrase must appear):
     "This calculator is designed for investment properties, not primary 
     residences. It uses 2026 investor mortgage rates (typically 7.5% 
     Conventional, 8.25% DSCR) and investor down payment defaults (25%). 
     For primary residence analysis, use a primary residence mortgage calculator."
     
   - "Projections, not guarantees" framing
   - CTA: "Enter property price and loan terms above to see projected PITI, 
     cash flow, and DSCR instantly."]
```
---

## HOW TO USE (5 numbered steps + 4 pro tips + 3 mode explanations)

```
HOW_TO_USE_H2: How to Use the Investment Property Mortgage Calculator
HOW_TO_USE_SUBTITLE: From property price to projected PITI and cash flow

STEP_1:
  TITLE: Enter property price and down payment
  BODY: [3-4 sentences — explain:
         - Property Price = purchase price (not market value or ARV)
         - Down Payment % defaults to 25% (investor standard, not 20% primary residence)
         - Down Payment < 20% triggers PMI on Conventional loans only
         - Tip: for DSCR loans, expect 25%+ down minimum]

STEP_2:
  TITLE: Select loan type and interest rate
  BODY: [4-5 sentences — explain:
         - Loan Type selector: Conventional (most common), DSCR (investor-friendly 
           underwriting), Portfolio (relationship lenders), Hard Money (short-term 
           flips), Second Home
         - Rate defaults adjust by loan type: Conventional 7.5%, DSCR 8.25%, 
           Hard Money 12.0% (2026 market)
         - Override rate with your actual quote
         - Loan Term options: 15, 20, 25, 30 years (30 most common)
         - MANDATORY DISCLOSURE (2nd of 4 placements): "This calculator is 
           designed for investment properties, not primary residences. 
           Consumer owner-occupant rates are typically 0.75-1.5pp lower."]

STEP_3:
  TITLE: Add property taxes, insurance, and HOA
  BODY: [4-5 sentences — explain:
         - Property Tax toggle: absolute dollar amount OR % of property price
         - Default 1.2% (US average); high-tax states (TX, NY, NJ) may need 2-3%
         - Insurance default $1,800/year (investor rate, higher than owner-occupant)
         - HOA Fees optional (condos, PUDs)
         - These form the PITI — the full monthly payment, not just P&I]

STEP_4:
  TITLE: Switch to Investor Mode (Mode 2) for cash flow analysis
  BODY: [5-6 sentences — explain:
         - Click Mode 2 (Investor with Rental Offset) tab
         - Enter Expected Monthly Rent (from Zillow Rent Zestimate, local comps, 
           or your lease)
         - Vacancy % default 8% (US average); some markets run 10-12%
         - OpEx % of Rent default 30% (property management, repairs, capex reserves)
         - Calculator computes Effective Monthly Rent and Net Monthly Cash Flow
         - Negative Cash Flow shown as "Net Monthly Cost" (out-of-pocket); 
           positive shown as "Net Monthly Cash Flow"]

STEP_5:
  TITLE: Interpret PITI, Cash Flow, DSCR, and Break-Even Rent
  BODY: [5-6 sentences. MUST contain DSCR vs Cash Flow KEY INSIGHT:
         - Primary output: Monthly PITI (Mode 1) or Net Cash Flow (Mode 2)
         - Status Badge (Mode 2): Positive CF (green), Break-Even (blue), 
           Slightly Negative (amber), Significantly Negative (red)
         - DSCR (debt service coverage) — lender metric; ≥ 1.2 typical minimum
         - Break-Even Rent (Gross Required Rent) — GROSS rent needed BEFORE 
           vacancy/expenses to cover PITI
         - KEY INSIGHT: "A property can have negative cash flow AND still meet 
           lender DSCR ≥ 1.2. DSCR evaluates lender risk; Cash Flow evaluates 
           investor outcome. Both must be considered."]

PRO_TIP_1:
  [Pattern: pro_tip for rate accuracy.
   "Investor rates are typically 0.75-1.5 percentage points higher than 
   primary residence rates. If a lender quotes you a primary 
   residence rate for investment property, that's a red flag — they may 
   be underwriting you incorrectly. Use this calculator with realistic 
   investor rates (7.5% Conv, 8.25% DSCR in 2026) to set expectations."]

PRO_TIP_2:
  [Pattern: pro_tip for Break-Even Rent reality check.
   "The Break-Even Rent (Gross Required Rent) is almost always higher than 
   your PITI — often by 30-40%. That's because rent must cover PITI PLUS 
   vacancy PLUS operating expenses. Example: PITI of $2,185 needs gross 
   rent of ~$3,394 for zero cash flow at typical 8% vacancy + 30% OpEx. 
   Many new investors underestimate this gap."]

PRO_TIP_3:
  [Pattern: pro_tip for DSCR vs Cash Flow.
   "Don't confuse DSCR with Cash Flow. A DSCR of 1.25 means the lender 
   will fund (P&I is covered by rent). But if property taxes and insurance 
   are high, your actual monthly Cash Flow can still be negative. Always 
   check both metrics — DSCR for loan approvability, Cash Flow for your 
   pocket."]

PRO_TIP_4:
  [Pattern: pro_tip for comparing loan scenarios.
   "Use Mode 3 to compare 30-year vs 15-year vs DSCR loans side-by-side. 
   Shorter terms have higher monthly payments but vastly lower total 
   interest. DSCR loans have higher rates but easier underwriting. The 
   right choice depends on your cash flow needs and long-term strategy, 
   not just the monthly payment."]

HOW_TO_USE_MODES_H3: Choosing the Right Mode

MODE_STANDARD:
  TITLE: Mode 1 — Standard Amortization (default, blue)
  USE_WHEN: You want a classic PITI breakdown — all 4 components 
            (Principal, Interest, Taxes, Insurance) shown
  OUTPUT: Monthly PITI + amortization chart + total interest over loan life

MODE_INVESTOR:
  TITLE: Mode 2 — Investor with Rental Offset (indigo)
  USE_WHEN: You want to see cash flow analysis — does rental income cover 
            the mortgage?
  OUTPUT: Net Monthly Cash Flow (or Net Monthly Cost) + DSCR + CoC% + 
          Break-Even Rent + Status Badge
  UNIQUE: Primary residence mortgage calculators don't offer this mode.

MODE_COMPARE:
  TITLE: Mode 3 — Compare Loan Scenarios (emerald)
  USE_WHEN: You're weighing 2-3 different loan options (30yr vs 15yr vs DSCR)
  OUTPUT: Side-by-side comparison with "Lowest Cost" winner highlighted
  CONSTRAINT: Compares loans in isolation; use Compare Real Estate Deals 
              for full strategy comparison (Flip/BRRRR/Rental)
```

---

## INPUTS & OUTPUTS (table format)

```
INPUTS_OUTPUTS_H2: Inputs and Outputs
INPUTS_OUTPUTS_SUBTITLE: What you enter, what the calculator projects

INPUTS_TABLE:
  [Render as markdown table. 3 columns: Input | Required | Default/Source.
   Group by:
   
   1. REQUIRED (all modes):
      - Property Price (from listing or appraisal)
      - Down Payment % (default 25%)
      - Loan Term years (default 30, options 15/20/25/30)
      - Interest Rate % (default 7.5% Conv, adjusts by loan type)
      - Loan Type (Conventional / DSCR / Portfolio / Hard Money / Second Home)
   
   2. TAX & INSURANCE:
      - Annual Property Tax (default 1.2% of price, toggleable)
      - Annual Home Insurance (default $1,800)
      - HOA Fees monthly (default 0)
      - Include PMI (auto, only if <20% down + Conventional/Second Home)
   
   3. MODE 2 ADDITIONAL:
      - Expected Monthly Rent
      - Vacancy % (default 8%)
      - OpEx % of Rent (default 30%)
   
   4. ADVANCED (collapsible, Mode 1/2 only):
      - Extra Monthly Principal (default 0)
      - Closing Costs % (default 2%)
      - Points Paid (default 0)
      - PMI Rate % (default 0.5-1.0 if applicable)
   
   Placeholders: "Enter property price" NOT "e.g., 300000".]

OUTPUTS_TABLE:
  [Render as markdown table. 3 columns: Output | Formula | Purpose.
   
   PRIMARY METRIC (Mode-specific):
   - Mode 1: Monthly PITI = P&I + Tax + Insurance + PMI + HOA
   - Mode 2: Net Monthly Cost OR Net Monthly Cash Flow (toggled by sign)
   
   SECONDARY METRICS (Mode 1/2):
   - Loan Amount: Property Price − Down Payment
   - Total Cash to Close: Down Payment + Closing Costs
   - Total Interest Over Loan: Sum of all interest payments
   - Total of Payments: Monthly Payment × 12 × Years
   - Effective APR: Rate + points + closing costs factored in
   
   MODE 2 INVESTOR METRICS:
   - Effective Monthly Rent: Gross × (1 − Vacancy) × (1 − OpEx)
   - Annual Cash Flow: Net Monthly × 12
   - Year 1 Cash-on-Cash %: Annual Cash Flow / Cash to Close × 100
   - DSCR: Annual NOI / Annual Debt Service (P&I only)
   - Break-Even Rent (Gross Required Rent): PITI / [(1−Vacancy) × (1−OpEx)]
   
   For Break-Even Rent row, purpose column MUST clarify: "GROSS rent BEFORE 
   vacancy and expenses. Typically 30-40% higher than PITI."
   
   For DSCR row, purpose column MUST clarify: "Lender underwriting metric. 
   ≥ 1.2 typical minimum. NOT the same as Cash Flow — a property can meet 
   DSCR AND have negative Cash Flow simultaneously."]
```

---

## FORMULA (intro + canonical amortization + PITI breakdown + Austin worked example)

**FORMULA SECTION RULES (prevents RIS duplication):**

```
GOAL: Explain the formula clearly to end users. NOT to replicate the RIS engine.

MUST INCLUDE (never drop):
  1. Canonical amortization formula
  2. PITI breakdown (5 components)
  3. ONE worked example with realistic numbers

SHOULD INCLUDE (if space allows):
  4. Mode 2 cash flow formula
  5. DSCR + Break-Even Rent formulas
  6. ONE alternative scenario

MUST NOT INCLUDE:
  ❌ Full RIS calculation engine logic
  ❌ Input validation rules
  ❌ Edge-case handling beyond user level
  ❌ Implementation details

LENGTH GUARD:
  Maximum FORMULA section length: 500-550 words total.
  If exceeded → keep canonical formula + PITI breakdown + one worked example.

FORMULA ACCURACY LOCK (v2 round 1 expert fix — anti-drift for formulas):
  All formulas in this SEO section MUST match RIS exactly (per RIS PRIORITY RULE).
  
  Do NOT:
    ❌ Reorder terms (e.g., "Effective Rent = Gross × (1−OpEx) × (1−Vacancy)" 
       instead of the canonical "Gross × (1−Vacancy) × (1−OpEx)" — same math 
       but breaks consistency)
    ❌ Rename variables inconsistently (e.g., "DSCR = NOI / Annual P&I" vs 
       RIS's "Annual Debt Service" — pick one, use throughout)
    ❌ Simplify formulas to shorter forms that lose precision
    ❌ Approximate constants (e.g., "~1.2%" instead of exact defaults)
  
  If unsure about a formula detail → keep it verbatim from RIS rather than 
  paraphrasing. Consistency across calculators is more important than stylistic 
  variation in SEO content.
```

```
FORMULA_H2: How the Investment Property Mortgage Calculator Works
FORMULA_SUBTITLE: Amortization + PITI breakdown — with a worked Austin 2026 example

FORMULA_INTRO_BOX:
  "The Investment Property Mortgage Calculator applies the standard mortgage 
   amortization formula to project monthly Principal and Interest, then adds 
   property taxes, insurance, PMI (if applicable), and HOA fees to calculate 
   the full PITI payment. In Mode 2 (Investor with Rental Offset), it also 
   subtracts effective rental income (gross rent minus vacancy and operating 
   expenses) to project Net Monthly Cash Flow. Uses 2026 investor rates, 
   not primary residence rates."

STEP_BY_STEP (canonical formulas, high-level):

  Standard Amortization (Mode 1/2):
    Monthly P&I = Loan × [r(1+r)^n] / [(1+r)^n − 1]
    where r = Monthly Interest Rate, n = Number of Payments
  
  PITI Components:
    Monthly PITI = P&I + Property Tax/12 + Insurance/12 + PMI (if <20% down + Conv/SH) + HOA

  Mode 2 Cash Flow:
    Effective Monthly Rent = Gross Rent × (1 − Vacancy %) × (1 − OpEx %)
    Net Monthly Cash Flow = Effective Rent − PITI
      (positive → "Cash Flow", negative → "Net Monthly Cost")
  
  DSCR (debt service coverage):
    DSCR = Annual NOI / Annual Debt Service (P&I only, NOT full PITI)
  
  Break-Even Rent (Gross Required Rent):
    Break-Even Rent = PITI / [(1 − Vacancy %) × (1 − OpEx %)]

KEY USER-FACING RULES (3 items — full methodology in RIS):
  - Rate defaults by loan type: Conv 7.5%, DSCR 8.25%, Hard Money 12.0%
  - PMI applies only to Conventional/Second Home with <20% down
  - DSCR uses P&I as debt service; taxes/insurance are operating expenses 
    (included in NOI deduction, not debt service)

FORMULA_EXAMPLE:
  Location:        Austin, TX (2026 Sunbelt investor market)
  Context:         Mid-range rental property, Conventional 30-year loan

  STRICT NUMERIC RANGES:
    Property Price:        $300,000
    Down Payment:          25%
    Loan Type:             Conventional
    Interest Rate:         7.5%
    Loan Term:             30 years
    Property Tax:          1.2% ($3,600/year)
    Insurance:             $1,800/year
    Expected Rent (Mode 2): $2,500/month
    Vacancy:               8%
    OpEx:                  30%

  EXPECTED RESULTS (per RIS Test 1 + Test 4):
    
    Mode 1 Output:
      Loan Amount:           $225,000
      Monthly P&I:           $1,573
      Monthly Property Tax:  $300
      Monthly Insurance:     $150
      Monthly PITI:          $2,023 (no PMI since 25% down)
      Total Interest (30yr): ~$340,300
    
    Mode 2 Additional Output:
      Effective Monthly Rent: $2,500 × 0.92 × 0.70 = $1,610
      Net Monthly Cash Flow:  $1,610 − $2,023 = −$413 (Net Monthly Cost)
      Status Badge:           RED "Significantly Negative"
      DSCR:                   ($2,500 × 12 × 0.92 × 0.70) / ($1,573 × 12) 
                            = $19,320 / $18,876 = 1.02 (barely below typical)
      Break-Even Rent (Gross Required Rent):
                            = $2,023 / (0.92 × 0.70) = $3,141/month

  KEY INSIGHT FROM EXAMPLE:
    This deal produces negative Cash Flow (−$413/mo) but DSCR of 1.02 (barely 
    below lender minimum of ~1.2). Both metrics tell different stories — lender 
    is borderline, investor is losing $413/month. Both should be considered.

  ALTERNATIVE SCENARIO — Sunbelt positive cash flow (RIS Test 5):
    Property $200K, 25% down, 7.5% rate, Rent $2,200/mo, 6% vacancy, 25% OpEx
    → PITI ~$1,349, Effective Rent $1,551, Net CF +$202/mo (green Positive)
    → Shows how lower-price markets with strong rent-to-price ratios can 
      produce cash flow at investor rates.

  EXECUTION NOTE:
    When writing this worked example:
      ✓ Show both Mode 1 and Mode 2 outputs
      ✓ Emphasize DSCR vs Cash Flow distinction in KEY INSIGHT
      ✓ Include Break-Even Rent with "Gross Required Rent" qualifier
      ✓ Avoid forbidden terminology (no "guaranteed", no "qualifies for")
      ✓ Stay user-understandable — don't expand into RIS engine logic
    
    RIS TEST CASE SYNC (v2 round 2 expert fix — prevents example drift):
      All example outputs must match RIS test cases exactly (per RIS PRIORITY RULE 
      and FORMULA ACCURACY LOCK above).
      
      The Austin example above corresponds to RIS Test 1 (standard) + Test 4 
      (investor Mode 2). If RIS test case numbers change, this SEO example MUST 
      update to match. Do NOT use approximate or rounded numbers that diverge 
      from RIS test cases.
      
      Specific numbers to preserve verbatim from RIS:
        - PITI $2,023 (Test 1)
        - DSCR 1.02 (Test 4)
        - Break-Even Rent $3,141 (Test 4 calculation)
        - Net Monthly Cost −$413 (Test 4)
      
      If any of these change in RIS revision, update SEO example in lockstep.
```

---

## WHAT IS (3 paragraphs — investor vs primary residence mortgage, DSCR vs Cash Flow, 2026 context)

```
WHAT_IS_H2: What Is an Investment Property Mortgage?
WHAT_IS_SUBTITLE: How investor financing differs from primary residence mortgages

WHAT_IS_P1:
  [4-5 sentences. Investor vs primary residence distinction:
   - Investment property mortgage = loan to finance a non-owner-occupied property
   - Key differences from primary residence mortgage:
     * Rates 0.75-1.5 pp higher (risk premium)
     * Down payment 20-25% typical (not 3-20%)
     * Underwriting scrutinizes rental income or requires higher reserves
     * PMI often not required (20%+ down is common)
     * Interest deductible against rental income (not SALT-capped)
   - This calculator models the investor-specific cost structure]

WHAT_IS_P2:
  [4-5 sentences. DSCR vs Cash Flow — KEY INSIGHT:
   - Two critical metrics for investors: DSCR and Cash Flow
   - DSCR (Debt Service Coverage Ratio) = lender's view — "Can the rental 
     income cover the P&I?"
   - Cash Flow = investor's view — "Does the deal put money in my pocket 
     after ALL costs (taxes, insurance, HOA)?"
   - A property can meet DSCR ≥ 1.2 (loan approvable) AND produce negative 
     Cash Flow simultaneously — common in high-tax states like Texas or 
     high-insurance markets like Florida
   - Both must be considered: DSCR for financeability, Cash Flow for 
     investor outcome]

WHAT_IS_P3:
  [4-5 sentences. 2026 rate environment context:
   - Investor rates in 2026 average 7.5% Conventional, 8.25% DSCR, 12% 
     hard money — significantly above 5% pre-2022 era
   - This compresses cash flow margins and makes Cash Flow analysis even 
     more critical
   - Many properties that cash-flowed positive at 5% rates now cash-flow 
     negative at 7.5% — shift strategy to BRRRR or long-term appreciation 
   - This calculator uses 2026 defaults to give accurate current-market 
     projections, not outdated pre-2022 numbers]
```

---

## RESULT MEANING (PITI breakdown + Cash Flow tiers + DSCR tiers + 2026 context)

```
RESULT_MEANING_H2: What Your PITI, Cash Flow, and DSCR Mean
RESULT_MEANING_SUBTITLE: Interpreting the primary and secondary metrics

RESULT_INTRO:
  [2-3 sentences. Frame: PITI is the full monthly payment, Cash Flow is 
   the investor outcome after rent offset, DSCR is the lender's view. 
   All three together tell the full financing story.]

PITI_BREAKDOWN:
  TITLE: PITI — The Full Monthly Payment
  BODY: [Bullet list — 5 components:
         - Principal (P): amount reducing loan balance
         - Interest (I): amount paid to lender for borrowing
         - Taxes (T): property taxes divided by 12
         - Insurance (I): homeowner insurance divided by 12
         - [Optional] PMI: if Down Payment < 20% on Conventional/Second Home
         - [Optional] HOA: condo/PUD association fees
         
         Total PITI is what you pay every month — primary residence calculators 
         often only show P&I, which understates the actual cost by 20-40%.]

CASH_FLOW_TIERS:
  TITLE: Net Monthly Cash Flow Tiers (Mode 2)
  BODY: [Bullet list:
         - Cash Flow > $200/mo: GREEN "Positive Cash Flow" — deal pays you 
           every month after all costs
         - Cash Flow $0 to $200/mo: BLUE "Break-Even" — deal is self-sustaining 
           but thin margin
         - Cash Flow −$200 to $0/mo: AMBER "Slightly Negative" — deal costs 
           you modestly; may be acceptable for appreciation plays
         - Cash Flow < −$200/mo: RED "Significantly Negative" — deal requires 
           substantial monthly investment; verify assumptions or consider 
           alternative financing]

DSCR_TIERS:
  TITLE: DSCR Tiers (Lender Underwriting)
  BODY: [Bullet list:
         - DSCR ≥ 1.25: Conventional lender-friendly
         - DSCR 1.15-1.25: Most Portfolio and DSCR loan programs approve
         - DSCR 1.00-1.15: Marginal — may require higher down payment or 
           stronger investor profile
         - DSCR < 1.00: Below typical thresholds — rental income doesn't 
           fully cover P&I; lender will likely decline or require 
           significant compensating factors]

KEY_INSIGHT_BLOCK:
  TITLE: DSCR vs Cash Flow — Both Matter
  BODY: [MANDATORY formulation (v2 round 2 expert fix — restate 3 elements from 
         DSCR VS CASH FLOW STRICT RULE to prevent simplification in Result Meaning):
         
         Per the DSCR vs Cash Flow rule:
           • DSCR uses P&I only (lender metric) — answers "Will lender fund this?"
           • Cash Flow uses full PITI (investor metric) — answers "Will this deal 
             pay me each month?"
           • A deal can pass DSCR and still be cash-flow negative — common in 
             high-tax states (TX, IL, NJ) and high-insurance markets (FL)
         
         Additional context:
         - Example: property with DSCR 1.25 AND Cash Flow −$150/mo is 
           LENDER-APPROVABLE AND INVESTOR-NEGATIVE simultaneously
         - Both truths must be considered — DSCR for approvability, Cash Flow 
           for outcome
         
         Do NOT simplify this to "DSCR = lender version of cash flow" or similar 
         reductions — preserve the 3 elements above explicitly.]

BREAK_EVEN_RENT_INTERPRETATION:
  TITLE: Break-Even Rent (Gross Required Rent) — What It Tells You
  BODY: [3-4 sentences:
         - Minimum gross rent required for zero Cash Flow after vacancy + expenses
         - Always higher than PITI — typically 30-40% higher at standard 
           8% vacancy + 30% OpEx
         - Example: PITI $2,185 → Break-Even Rent $3,394 (55% higher)
         - If your actual market rent < Break-Even Rent → deal will be 
           cash-flow negative at standard assumptions]

RESULT_CONTEXT_2026:
  TITLE: 2026 Investor Mortgage Market Context
  BODY: [4-5 sentences:
         - Rates up 250-300 bps from pre-2022 era
         - Many Sunbelt rentals that cash-flowed at 5% rates now need 75%+ 
           of ARV purchase (aggressive acquisition) to cash flow at 7.5%
         - DSCR loans becoming dominant (easier underwriting, no W-2 required)
         - Hard money rates 12-14% — viable only for short-term flips, 
           never long-term holds
         - Use this calculator at current 2026 rates to avoid the "last decade 
           cash flow" trap that traps new investors]
```

---

## BENCHMARKS (rates by loan type + PITI ranges + DSCR thresholds)

```
BENCHMARKS_H2: Investment Property Mortgage Benchmarks for 2026
BENCHMARKS_SUBTITLE: Rate ranges, typical PITI, and lender thresholds

BENCHMARKS_INTRO:
  [2-3 sentences. Frame: illustrative patterns, not measured data. Individual 
   results depend on credit profile, property type, market, and lender 
   relationships.]

BENCHMARKS_RATES_BY_LOAN_TYPE:
  TITLE: Typical 2026 Investor Mortgage Rates
  BODY: [Structured list or table:
         - Conventional (Fannie/Freddie investment): 7.25-7.75%
         - Second Home (owner-occupied part-time): 7.00-7.50%
         - DSCR Loan (income-qualified on property cash flow): 8.00-8.75%
         - Portfolio Loan (relationship lender): 7.50-9.00% (varies widely)
         - Hard Money (short-term bridge): 11.00-14.00% + 2-4 points
         
         Rates shift weekly with market; use current lender quotes for 
         actual underwriting. These ranges are for reference.]

BENCHMARKS_PITI_RANGES:
  TITLE: Typical Monthly PITI Ranges (Austin, TX 2026 example)
  BODY: [Bullet list:
         - $200K property, 25% down, 7.5%: ~$1,350-$1,450 PITI
         - $300K property, 25% down, 7.5%: ~$2,000-$2,100 PITI
         - $400K property, 25% down, 7.5%: ~$2,700-$2,800 PITI
         - $500K property, 25% down, 7.5%: ~$3,350-$3,500 PITI
         
         Adjust by state — Texas has higher property taxes (2-3% vs 1.2%), 
         Florida has higher insurance, New York has higher everything.]

BENCHMARKS_DSCR_THRESHOLDS:
  TITLE: DSCR Lender Thresholds (Common 2026 Programs)
  BODY: [Bullet list:
         - Conventional Investor (Fannie/Freddie): DSCR ≥ 1.25 typical
         - DSCR-specific loans: DSCR ≥ 1.15 (some at 1.00 for strong 
           profiles)
         - Portfolio lenders: DSCR ≥ 1.10-1.20 (relationship-based)
         - Commercial 5+ units: DSCR ≥ 1.25-1.35 typically]

BENCHMARKS_DISCLAIMER:
  "These ranges are illustrative patterns for typical investor mortgage 
   scenarios in 2026 US markets, NOT measured statistical datasets, NOT 
   rate predictions for any specific deal. Rates depend heavily on credit 
   score, property type, LTV, reserves, and lender. The calculator's 
   output on YOUR inputs always takes precedence over these aggregate 
   expectations. For actual rate quotes, contact licensed mortgage lenders."
```
---

## STRATEGY (5 blocks for different investor types)

```
STRATEGY_H2: How to Use This Calculator by Investor Type
STRATEGY_SUBTITLE: Matching the mortgage analysis to your strategy

STRATEGY_FIRST_TIME:
  TITLE: First-Time Investor (1st rental property)
  BODY: [3-4 sentences. Recommend Mode 1 to understand PITI, Mode 2 for 
         cash flow reality at 2026 rates. Target DSCR ≥ 1.25 for lender 
         approval; target positive Cash Flow for sustainable hold. 
         Cross-link: validate in Rental Property Calculator before committing.]

STRATEGY_PORTFOLIO_BUILDER:
  TITLE: Portfolio Builder (scaling to 5+ properties)
  BODY: [3-4 sentences. Recommend DSCR loan type for easier underwriting 
         (no personal income scrutiny). Use Mode 3 to compare DSCR vs 
         Portfolio loan options. Focus on cash-flowing deals — negative 
         cash flow compounds across multiple properties. Stress-test with 
         Conservative scenario.]

STRATEGY_FLIPPER:
  TITLE: Fix-and-Flip Investor
  BODY: [3-4 sentences. Select Hard Money loan type with 1-year term. 
         Ignore Mode 2 (rental cash flow doesn't apply to flips). Calculator 
         shows monthly payment + interest to carry during flip. Cross-link 
         to Fix and Flip Calculator for full deal analysis.]

STRATEGY_WHOLESALER:
  TITLE: Wholesaler
  BODY: [3-4 sentences. Use to show end-buyers mortgage payment projections. 
         Validate cash-flow at typical investor rates before marketing. 
         DSCR < 1.0 means difficult to assign to buy-and-hold investors. 
         Use Mode 3 to demonstrate loan flexibility to buyers.]

STRATEGY_RETIREE:
  TITLE: Retirement Income Investor
  BODY: [3-4 sentences. Favor paid-down or lower-leverage properties. 
         Higher down payment reduces PITI, increases Cash Flow. Use Mode 2 
         with Conservative scenario for realistic retirement income. 
         Cross-link to Rental Property ROI for long-hold wealth projection.]
```

---

## APPLICATIONS (6 use cases)

```
APPLICATIONS_H2: Common Use Cases
APPLICATIONS_SUBTITLE: When this calculator is the right tool

APPLICATION_1:
  TITLE: Pre-purchase financing feasibility check
  BODY: [2-3 sentences. Before making an offer, project PITI + Cash Flow 
         at realistic 2026 investor rates to see if the deal pencils.]

APPLICATION_2:
  TITLE: Comparing loan programs (Conv vs DSCR vs Portfolio)
  BODY: [2-3 sentences. Use Mode 3 to see which loan produces better monthly 
         payment or lower total interest.]

APPLICATION_3:
  TITLE: Refinance decision analysis
  BODY: [2-3 sentences. Compare current loan (Scenario A) against refi 
         options (Scenarios B, C) to see break-even timing and lifetime 
         interest savings.]

APPLICATION_4:
  TITLE: DSCR loan underwriting preview
  BODY: [2-3 sentences. Select DSCR loan type, enter rental income in Mode 2, 
         see if property meets typical 1.15-1.25 DSCR threshold. Avoids 
         wasted applications.]

APPLICATION_5:
  TITLE: Rate sensitivity stress test
  BODY: [2-3 sentences. Run Mode 2 with rate +1pp (Conservative scenario) to 
         see if deal still cash flows if rates rise before close.]

APPLICATION_6:
  TITLE: Investor education / client presentations
  BODY: [2-3 sentences. Agents and advisors use calculator to show investor 
         clients difference between primary residence mortgage expectations and 
         investor reality. PDF export for meetings.]
```

---

## INDUSTRY STANDARDS

```
INDUSTRY_STANDARDS_H2: How This Calculator Aligns with Industry Conventions
INDUSTRY_STANDARDS_SUBTITLE: Investor vs primary residence conventions, loan types, peer tools

INDUSTRY_INVESTOR_VS_CONSUMER:
  TITLE: Investor vs Consumer mortgage conventions
  BODY: [4-5 sentences:
         - Investor rates 0.75-1.5 pp higher than owner-occupant
         - Down payment 20-25% typical (vs 3-20% for primary)
         - PMI less common (20%+ down standard)
         - Reserves requirements higher (6+ months typical)
         - Rental income underwriting: 75% of rent counted toward DTI (conventional rule)]

INDUSTRY_LOAN_TYPES:
  TITLE: The 5 investor loan types explained
  BODY: [4-5 sentences summarizing each:
         - Conventional: standard loans, personal income required
         - DSCR: qualifies on property cash flow, no income docs
         - Portfolio: relationship lender, flexible terms
         - Hard Money: short-term bridge (6-18 months), high rate
         - Second Home: semi-owner-occupied, lower rate than investment]

INDUSTRY_PEER_COMPARISON:
  TITLE: How this differs from Zillow / Bankrate / BiggerPockets mortgage calculators
  BODY: [4-5 sentences:
         - Zillow/Bankrate: CONSUMER-focused, primary residence rates, no investor modes
         - BiggerPockets: has investor calculator but combined with full deal analysis
         - DealCheck: good investor modeling, less emphasis on DSCR vs Cash Flow
         - RealCalc Investment Property Mortgage Calculator: unique in (a) Mode 2 
           rental offset as separate mode, (b) 5 loan types with type-specific defaults, 
           (c) explicit DSCR vs Cash Flow KEY INSIGHT, (d) Rental Property Calculator 
           Year 1 CoC cross-validation]

INDUSTRY_DISCLAIMER:
  "These comparisons describe market positioning, not endorsements. This calculator 
   emphasizes investor-specific framing (rates, loan types, cash flow, DSCR) rather 
   than generic primary residence mortgage modeling."
```

---

## LIMITATIONS (6 items + When Not to Use)

**LIMITATIONS CONCISENESS RULE:** Each limitation max 4 sentences. More detail → FAQ.

```
LIMITATIONS_H2: Limitations of This Calculator
LIMITATIONS_SUBTITLE: What this calculator cannot tell you

LIMITATION_1:
  TITLE: Rates are illustrative, not quotes
  BODY: [3-4 sentences. MANDATORY DISCLOSURE (3rd of 4 placements):
         - Default rates reflect 2026 market averages for INVESTMENT properties, 
           not primary residences — this calculator is designed for investment 
           properties, not primary residences
         - Your actual investor rate depends on credit score, LTV, property type, 
           reserves, lender
         - Override with your actual lender quote for accuracy
         - Rates shift weekly]

LIMITATION_2:
  TITLE: Rental income assumptions require validation
  BODY: [3-4 sentences:
         - Expected Rent must match realistic market rent
         - Zillow Rent Zestimate tends to overstate 5-15%
         - Best source: 3-5 recent lease comparables within 1 mile
         - Overestimated rent inflates Cash Flow and DSCR]

LIMITATION_3:
  TITLE: PMI auto-cancellation not modeled (v1 limitation)
  BODY: [3-4 sentences:
         - PMI typically cancels at ~78% LTV
         - Calculator assumes PMI continues for full loan term
         - Actual total interest may be lower once PMI cancels
         - For precise post-cancellation projection, recalculate or consult servicer]

LIMITATION_4:
  TITLE: Property taxes vary significantly by location
  BODY: [3-4 sentences:
         - Default 1.2% is US average but varies widely
         - TX, IL, NJ: 2-3%+ typical
         - HI, CO, WY: 0.5-0.7%
         - Override with your county's actual rate]

LIMITATION_5:
  TITLE: Does not model ARM adjustments or balloon terms
  BODY: [3-4 sentences:
         - v1 assumes fixed-rate fully-amortizing loan
         - ARMs and balloon loans have different payment structures
         - For ARM/balloon analysis, consult lender directly
         - More common in commercial and portfolio loans]

LIMITATION_6:
  TITLE: Not a substitute for professional advice
  BODY: [3-4 sentences:
         - Educational and screening tool
         - Before committing: mortgage broker for quotes, CPA for tax, attorney for contracts
         - "Not investment advice" disclaimer
         - Projections based on your inputs, not guarantees]

WHEN_NOT_TO_USE_H3: When Not to Use This Calculator
WHEN_NOT_TO_USE_LIST:
  - "Primary residence mortgage: use primary residence mortgage calculator with owner-occupant rates"
  - "Commercial property (5+ units): use commercial calculator with different DSCR thresholds"
  - "Cash purchase (100% down): use Rental Property Calculator"
  - "Long-term wealth projection: use Rental Property ROI Calculator"
  - "Lender underwriting certainty: DSCR thresholds vary by program"
  - "ARM or balloon loan analysis: v1 assumes fixed-rate; consult lender"
```

---

## COMMON MISTAKES (5 items)

```
COMMON_MISTAKES_H2: Common Mistakes When Using Mortgage Calculators
COMMON_MISTAKES_SUBTITLE: Avoid these five errors

MISTAKE_1:
  TITLE: Using primary residence mortgage rates for investor analysis
  BODY: [2-3 sentences. Plugging 5% primary residence rate into investor deal 
         produces 1-2pp too-optimistic results. Always use investor rates 
         (7.5% Conv, 8.25% DSCR for 2026). This calculator defaults to 
         investor rates.]

MISTAKE_2:
  TITLE: Confusing DSCR with Cash Flow
  BODY: [2-3 sentences. DSCR and Cash Flow measure different things. A deal 
         can be DSCR-approvable AND Cash Flow negative. Always check both — 
         DSCR for approval, Cash Flow for investor outcome.]

MISTAKE_3:
  TITLE: Forgetting taxes and insurance (P&I vs PITI)
  BODY: [2-3 sentences. Many calculators show only P&I, understating actual 
         monthly cost by 20-40%. Always plan around full PITI. This calculator 
         shows PITI by default.]

MISTAKE_4:
  TITLE: Underestimating Break-Even Rent
  BODY: [2-3 sentences. Break-Even Rent (Gross Required Rent) is typically 
         30-40% higher than PITI due to vacancy and operating expenses. 
         PITI $2,185 needs ~$3,394 gross rent for zero cash flow at standard 
         8% vacancy + 30% OpEx.]

MISTAKE_5:
  TITLE: Using Hard Money for long-term rental analysis
  BODY: [2-3 sentences. Hard money is short-term bridge financing at 12-14% 
         rates. Modeling as long-term rental financing produces nonsensical 
         results. Calculator blocks Mode 2 when Hard Money selected.]
```

---

## FAQ (9 Q&A)

```
FAQ_H2: Frequently Asked Questions
FAQ_SUBTITLE: Common questions about investment property mortgages

FAQ_Q1: What's the difference between investor and primary residence mortgage rates?
FAQ_A1: [4-5 sentences. MANDATORY DISCLOSURE (4th of 4 placements):
        Investor rates 0.75-1.5 percentage points higher than primary residence 
        rates. In 2026, Conventional investor rates average 7.5% vs 6.5-7.0% 
        primary residence. Premium reflects lender risk — investment properties 
        have higher default rates during downturns. **This calculator is designed 
        for investment properties, not primary residences — it uses investor 
        rates by default.** For primary residence analysis, use a primary 
        residence mortgage calculator with owner-occupant rates.]

FAQ_Q2: What does PITI stand for?
FAQ_A2: [3-4 sentences. PITI = Principal + Interest + Taxes + Insurance. 
        Primary residence calculators often show only P&I, understating actual 
        monthly cost by 20-40%. Full PITI includes property taxes, insurance, 
        PMI if applicable, and HOA. Always budget around PITI.]

FAQ_Q3: When does PMI apply to investor mortgages?
FAQ_A3: [3-4 sentences. PMI applies only when Down Payment less than 20% AND 
        Loan Type is Conventional or Second Home. DSCR, Portfolio, Hard Money 
        loans typically never have PMI (higher base rate covers risk). 
        PMI typically auto-cancels at ~78% LTV, though this calculator 
        doesn't model cancellation in v1.]

FAQ_Q4: Why does DSCR show approvable but my Cash Flow is negative?
FAQ_A4: [4-5 sentences. This is the KEY INSIGHT of investor mortgage analysis. 
        DSCR uses P&I against rental income — measures lender risk. Cash Flow 
        uses full PITI (including taxes, insurance, HOA) against effective rent 
        — measures investor outcome. A property in Texas with high property 
        taxes can meet DSCR ≥ 1.25 (lender approves) AND show Cash Flow of 
        −$150/mo (you pay monthly). Both are correct; they answer different 
        questions.]

FAQ_Q5: What's a DSCR loan?
FAQ_A5: [3-4 sentences. DSCR loans qualify borrowers based on property's 
        rental income covering mortgage payment — no W-2, no tax returns 
        required. Typical minimum DSCR is 1.15-1.25. Rates ~1pp higher than 
        Conventional but underwriting faster. Popular for multi-property 
        investors or self-employed income.]

FAQ_Q6: Can I use this for a flip?
FAQ_A6: [3-4 sentences. For flips, select Hard Money. Rates 12-14% + points, 
        terms 6-18 months. This calculator shows monthly interest-only or 
        full P&I depending on your hard money program. For full flip deal 
        analysis (purchase + rehab + holding + sale), use Fix and Flip 
        Calculator instead.]

FAQ_Q7: What down payment should I expect?
FAQ_A7: [3-4 sentences. Investor minimums: Conventional 20-25%, DSCR 20-25%, 
        Portfolio 15-30%, Hard Money 10-30% + points, Second Home 10-20%. 
        This calculator defaults to 25%. Lower down payment triggers PMI 
        on Conventional/Second Home loans.]

FAQ_Q8: How do I calculate Break-Even Rent?
FAQ_A8: [3-4 sentences. Break-Even Rent = PITI / [(1 − Vacancy %) × (1 − 
        OpEx %)]. Gives GROSS rent needed BEFORE vacancy and expenses to 
        cover PITI. Example: PITI $2,185, 8% vacancy, 30% OpEx → 
        Break-Even $3,394. Typically 30-40% higher than PITI.]

FAQ_Q9: Does this calculator model ARM or balloon loans?
FAQ_A9: [3-4 sentences. Not in v1. Calculator assumes fixed-rate fully-
        amortizing loans for full term. ARMs and balloon loans have 
        different payment structures that change over time. For ARM/balloon 
        analysis, consult your lender directly.]
```

---

## RELATED CALCULATORS

```
RELATED_CALCULATORS_H2: Related Calculators
RELATED_CALCULATORS_SUBTITLE: Continue your investor analysis workflow

RELATED_LIST (6 items):
  - Rental Property Calculator — Year 1 operating cash flow with DSCR, CoC, 
    NOI; validate financing assumptions from this calculator
  - Rental Property ROI Calculator — lifetime wealth projection over 5-30 
    year holds with IRR, appreciation, depreciation benefits
  - DSCR Calculator — dedicated lender underwriting analysis
  - Fix and Flip Calculator — full flip deal analysis; use for Hard Money scenarios
  - Compare Real Estate Deals — side-by-side Flip vs BRRRR vs Rental strategy 
    comparison
  - BRRRR Calculator — Buy-Rehab-Rent-Refi-Repeat analysis with mid-hold refi
```

---

## SCHEMA BLOCK (JSON-LD)

```
SCHEMA_TYPE: FinancialProduct + SoftwareApplication

SCHEMA_NAME: Investment Property Mortgage Calculator
SCHEMA_DESCRIPTION: "Free Investment Property Mortgage Calculator for real 
                    estate investors. Calculate PITI, rental cash flow, DSCR, 
                    compare loan types (Conventional, DSCR, Portfolio) at 
                    2026 investor rates."

SCHEMA_FEATURE_LIST:
  - Investment property PITI with 2026 investor rates
  - 3 modes: Standard, Investor with Rental Offset, Compare Loan Scenarios
  - 5 loan types: Conventional, DSCR, Portfolio, Hard Money, Second Home
  - Net Monthly Cash Flow with Status Badge
  - DSCR for lender underwriting preview
  - Break-Even Rent (Gross Required Rent)
  - Year 1 Cash-on-Cash Return
  - Amortization schedule and chart
  - PMI auto-detection (Conventional/Second Home only)
  - Mode 3 side-by-side loan comparison
  - 3 sensitivity scenarios
  - URL import from Rental Property Calculator and ROI
  - PDF export with amortization chart
  - Cross-calculator invariant: Year 1 CoC matches Rental Property Calculator
  - Saved Scenarios widget (save up to 20 scenarios, compare across calculators)

SCHEMA_AUDIENCE: US Real Estate Investors
SCHEMA_PRICE: Free
SCHEMA_OPERATING_SYSTEM: Web browser
```

---

## CRITICAL CHECKS (7 inline items)

Before finalizing, verify these 7 CRITICAL items:

1. [ ] TITLE exact fallback: "Investment Property Mortgage Calculator — PITI + Cash Flow | RealCalc" (66 chars)
2. [ ] H1 exact fallback: "Investment Property Mortgage Calculator — PITI, Cash Flow, DSCR" (62 chars)
3. [ ] META exact fallback (159 chars, primary keyword + PITI + Cash Flow + DSCR + 2026)
4. [ ] OVERVIEW_P1 opens with plain-language sentence preserving meaning of reference; first sentence ≤ 25-30 words; paragraph ≤ 3-4 sentences
5. [ ] FORMULA uses canonical amortization + PITI breakdown + Mode 2 cash flow; matches RIS exactly (per FORMULA ACCURACY LOCK)
6. [ ] "Break-Even Rent (Gross Required Rent)" always with qualifier; "DSCR vs Cash Flow" KEY INSIGHT in What Is + Result Meaning + FAQ per DSCR VS CASH FLOW STRICT RULE
7. [ ] MANDATORY DISCLOSURE "This calculator is designed for investment properties, not primary residences" (or acceptable equivalent) in AT LEAST these 4 placements, no more than 5 total: Overview P4, How to Use Step 2, Limitations Item 1, FAQ Q1

**v2 round 1 acceptance items (5 expert fixes applied):**
- [x] Fix 1 (Critical): MANDATORY DISCLOSURE PLACEMENTS block added with 4 explicit locations; each location has explicit instruction to include disclosure
- [x] Fix 2 (Critical): DSCR VS CASH FLOW STRICT RULE added — must include 3 elements (P&I-only, PITI, both-can-coexist); 4 forbidden simplifications listed
- [x] Fix 3 (Critical): RIS PRIORITY RULE added at top — RIS wins on formulas/thresholds/metric definitions/test cases/critical rules
- [x] Fix 4 (Medium): OVERVIEW_P1 LENGTH RULE — first sentence ≤ 25-30 words, paragraph ≤ 3-4 sentences, word budget 60-90
- [x] Fix 5 (Medium): FORMULA ACCURACY LOCK — no reordering terms, no variable renaming, no simplification, verbatim from RIS if unsure

**v2 round 2 acceptance items (3 polish fixes applied):**
- [x] Fix 1 (Polish): Max mentions buffer increased from 5 to 6 — "avoid excessive repetition beyond 6 mentions" (eliminates false FAILs from natural language variation)
- [x] Fix 2 (Polish): All "consumer mortgage" references replaced with "primary residence mortgage" for consistency (except forbidden terminology list and internal prompt instructions)
- [x] Fix 3 (Polish): OVERVIEW P4 forces explicit required phrasing "This calculator is designed for investment properties, not primary residences" — no more soft variants that validation might miss

**STRICT TERMINOLOGY CONTRACT applied** — see top of prompt for 8 required + 9 forbidden terms.

**Full 45+ item validation checklist available in companion file `mortgage-investment-seo-validation-prompt.md`**.

---

## FINAL SELF-CHECK (anti-drift, before output)

Before finalizing the SEO content package, verify:

```
1. All 15 sections present?
2. Canonical amortization formula + PITI breakdown appears correctly?
3. "Not for primary residence" disclaimer in 4 target locations?
4. No forbidden terminology? (no "consumer mortgage rate", "guaranteed", 
   "best rate", "qualifies for", "pre-qualified", "easy mortgage", 
   "tax savings", "Break-Even" unqualified)
```

If any item fails → fix before outputting.

---

**Output only the SEO content package in Markdown. Do not output code. Do not output HTML. Do not output Vue.**

---

**End of SEO v1 → v2 round 1 → v2 round 2 FINAL (2 review rounds, 8 fixes total: 5 round 1 + 3 round 2 polish = 3 critical + 2 medium + 3 polish). Applies Phase 16 architectural lessons from start: 2 meta-layers (PRIORITY + FINAL OVERRIDE), TERMINOLOGY APPLICATION RULE, FORMULA LENGTH GUARD, FINAL SELF-CHECK anti-drift, RIS PRIORITY RULE as source-of-truth hierarchy. Round 1 added: MANDATORY DISCLOSURE PLACEMENTS (4 locations), DSCR VS CASH FLOW STRICT RULE, RIS PRIORITY RULE, OVERVIEW_P1 LENGTH RULE, FORMULA ACCURACY LOCK. Round 2 polish: max mentions buffer 5→6 (false FAIL elimination), "consumer mortgage" → "primary residence mortgage" consistency, OVERVIEW P4 explicit required phrasing. Pair with mortgage-investment-ris-prompt-final.md (RIS) and mortgage-investment-seo-validation-prompt.md (validation companion) for full Phase 17 package.**
