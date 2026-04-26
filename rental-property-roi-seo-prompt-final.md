# SEO Package Prompt — Rental Property ROI Calculator (v1)

You are a senior SEO copywriter specializing in US real estate investment content. Your job is to produce a **complete SEO content package** for the Rental Property ROI Calculator page.

The output of this prompt is pure content — no code, no HTML, no Vue. It will later be combined with the RIS specification and the Master Prompt to generate the actual page.

---

## PRIORITY EXECUTION RULE (READ FIRST)

This prompt is ~1000 lines. If instruction conflict or capacity overload occurs during generation, prioritize adherence in this strict order:

1. **TITLE / META / H1 must be exact** — use hardcoded fallback strings verbatim.
2. **OVERVIEW P1 plain-language opener + primary keyword placement** — mandatory verbatim opening sentence.
3. **FORMULA methodology (6 phases, 4 wealth components, split tax formula)** — the split Recapture + LTCG formula is non-negotiable (Rule 3 from RIS).
4. **Key distinctions preserved** — "Wealth Break-Even" NOT "Break-Even", "Estimated Depreciation Benefit" NOT "Tax Savings", "Partial After-Tax" framing (pre-tax cash flow + depreciation benefit + sale tax, but annual income tax NOT modeled).
5. **Required disclaimers in correct placements** — Pre-tax cash flow caveat (4 places), CPA consultation (3 places), "not substitute for professional tax advice" (Limitations + FAQ).
6. All remaining sections.

**Do NOT drop items 1–5 under any circumstances.**

Self-check before finalizing: confirm TITLE exact fallback, META exact fallback, H1 exact fallback, OVERVIEW_P1 opens with mandatory plain-language sentence, FORMULA has split tax formula (Recapture + LTCG), "Estimated Depreciation Benefit" never becomes "Tax Savings", all required disclaimers present.

---

## GLOBAL RULE — Redundancy handling

If the same requirement appears multiple times across this prompt (e.g., "not fully after-tax" caveat appears in Overview + Formula + Limitations + FAQ), execute it ONCE correctly in each specified placement rather than duplicating or over-expanding. The prompt lists requirements in multiple places for redundancy protection, NOT to require additional instances.

If requirements APPEAR to conflict, prioritize the PRIORITY EXECUTION RULE order above.

---

## STRUCTURE PRESERVATION RULES

**Rule A — Section separation:**
Each section must be rendered as a separate structured block with its own H2. Do NOT merge sections. Do NOT collapse headings into paragraphs.

**Rule B — Paragraph length:**
Keep paragraph length to 2-5 sentences maximum. Avoid long dense blocks.

**Rule C — List format preservation:**
Use bullet points for lists. Do not convert lists into paragraphs.

---

## YOUR TASK

Write an SEO package for:

```
Calculator Name:    Rental Property ROI Calculator
Slug:               rental-property-roi-calculator
Primary keyword:    rental property roi calculator
Secondary keywords: real estate roi calculator, rental roi calculator,
                    investment property roi calculator, long term rental roi,
                    buy and hold roi calculator, rental property return calculator
Primary metrics:    DUAL — Total ROI % (over user-selected hold period)
                    AND Annualized Return (IRR)
Secondary metric:   4-component Wealth Waterfall (Cash Flow + Principal Paydown
                    + Appreciation + Estimated Depreciation Benefit) minus Sale Tax
Target audience:    Long-term buy-and-hold investors evaluating rental properties
                    for multi-year wealth-building (1-30 year holds (standard checkpoints at 5/10/15/20/25/30))
Traffic priority:   Priority 2 (estimated 15,000-25,000 searches/month)
```

Use the attached RIS specification (rental-property-roi-ris-prompt-final.md) as the source of truth for formulas, thresholds, benchmarks, and test cases. Do NOT invent numbers — pull them from the RIS.

---

## CRITICAL DISTINCTIONS TO PRESERVE

**1. Lifetime wealth analysis, NOT Year 1 snapshot**

This is the core positioning. Rental Property Calculator (the companion tool) answers "is this deal good in Year 1?" Rental Property ROI answers "if I buy and sell in X years, what's my TOTAL return?" The two are complementary, not redundant. Cross-link both ways in content.

**2. DUAL primary metrics: Total ROI % AND Annualized Return (IRR)**

- Total ROI % = Total Wealth Created / Initial Cash Invested
- Annualized Return = IRR of full cash flow series (Year 0 → Year N)
- Both always shown — Total ROI for "how much did I make?" and IRR for "was it worth the time?"
- IRR can be negative (content must normalize this; it's a legitimate signal, not an error state)

**3. 4-component Wealth Waterfall — PRODUCT DIFFERENTIATOR**

Most competitors (DealCheck, SparkRental, BiggerPockets) show only Total ROI + Cash Flow. We show:
- Cumulative Cash Flow
- Principal Paydown
- Appreciation
- Estimated Depreciation Benefit
- MINUS Sale Tax (Depreciation Recapture + LTCG split)

This breakdown is the strongest SEO differentiator. Content must explain why each component matters separately.

**4. "Estimated Depreciation Benefit" — NEVER "Tax Savings"**

Forbidden label: "Tax Savings" — implies guaranteed savings, misleading re: passive activity loss rules. Required label everywhere: "Estimated Depreciation Benefit". Tooltip mandatory: "Assumes full deductibility; passive loss rules and personal tax situation can reduce actual benefit. Consult a CPA."

**5. Sale Tax SPLIT formula (Depreciation Recapture + LTCG)**

Content must explain (in Formula section) the SPLIT formula:
- Depreciation Recapture Tax = 25% × min(Accumulated Depreciation, Total Gain)
- Capital Gains Tax = LTCG Rate × max(0, Total Gain − Accumulated Depreciation)

NOT a single combined rate. Content must explain WHY this split matters (recapture is flat 25%, usually higher than 15-20% LTCG, so correct calculation is more honest).

**6. "Wealth Break-Even Hold Period" — NEVER just "Break-Even"**

Forbidden: "Break-Even", "Cash Flow Break-Even" (Rental Property Calculator uses operational break-even which is different). Required: "Wealth Break-Even Hold Period" (when cumulative wealth crosses zero including appreciation and sale tax).

**7. "Partial After-Tax" framing — not "After-Tax"**

Pre-tax cash flow is shown. Depreciation benefit is estimated. Sale tax is deducted. But ANNUAL income tax is NOT modeled. Content must frame this as "partial after-tax" or list what IS/ISN'T included — never imply full after-tax modeling.

**8. 3 modes: Forward ROI / Hold Period Sensitivity / Compare Sell Years**

- Mode 1 (default): Forward projection over user-selected hold period
- Mode 2: Comparison table at 5/10/15/20/25/30 year checkpoints
- Mode 3: Compare two specific sell years (e.g., "sell at Year 7 vs Year 15")

NOT to mention in v1: 1031 Exchange, mid-hold refinance, multi-property scenarios. Those are v2 roadmap.

**9. Hold Period range 1-30 years**

- Default 10 years
- Warning at ≤3 years: "heavily skewed by selling costs and sale tax"
- Special Year-1 disclosure: "sale tax treatment ambiguous, may be short-term capital gains at ordinary income rates"
- Do NOT block sub-3-year analysis — still useful for wealth thought experiments

**10. Cross-calculator invariant: Year 1 CoC must match Rental Property Calculator**

Internal validation — Year 1 Cash-on-Cash in this calculator must equal Rental Property Calculator's Year 1 CoC for identical inputs (within ±0.1 pp). Content doesn't need to explain the invariant but must cross-link to Rental Property Calculator for Year 1 deep-dive.

---

## STRICT TERMINOLOGY RULE (v2 round 1 expert fix — ZERO TOLERANCE)

Certain terms embed product integrity and must be used exactly. Any deviation is a critical error.

```
STRICT TERMINOLOGY CONTRACT:

REQUIRED (use these exact phrases everywhere):
  ✓ "Estimated Depreciation Benefit"
  ✓ "Wealth Break-Even Hold Period"
  ✓ "Total Wealth Created" (or "Partial After-Tax Total Wealth")
  ✓ "Sale Tax" or "Total Sale Tax" (umbrella term covering Recapture + LTCG)
  ✓ "Depreciation Recapture Tax" (25% component)
  ✓ "Capital Gains Tax" (LTCG component on remaining gain)
  ✓ "Annualized Return (IRR)" — with both words present

FORBIDDEN (any use = critical error, must regenerate):
  ✗ "Tax Savings"           → use "Estimated Depreciation Benefit"
  ✗ "Tax Shield"            → use "Estimated Depreciation Benefit"
  ✗ "Depreciation Savings"  → use "Estimated Depreciation Benefit"
  ✗ "Break-Even" (unqualified) → use "Wealth Break-Even Hold Period"
  ✗ "Cash-Flow Break-Even"  → that's a different metric (Rental Property Calc)
  ✗ "After-Tax ROI"         → use "Partial After-Tax Total Wealth" or "Total ROI"
  ✗ "Net ROI after taxes"   → same as above
  ✗ "Combined CG rate"      → explicitly rejected; use split formula
  ✗ "Capital Recovery Break-Even" → forbidden synonym

RATIONALE:
  - "Tax Savings" implies guaranteed savings; the calculator cannot guarantee 
    them (passive activity loss rules, at-risk rules, personal tax situation 
    can reduce actual benefit). "Estimated Depreciation Benefit" correctly 
    signals uncertainty.
  - "Break-Even" without "Wealth" conflicts with Rental Property Calculator's 
    operational cash-flow break-even (different metric, same word = confusion).
  - "After-Tax ROI" implies full tax modeling; we only partially model taxes 
    (see Canonical Partial-Tax Model in Formula section).

VERIFICATION before finalizing:
  grep forbidden terms in generated content — zero matches required.
  If any forbidden term appears, that section must be regenerated with 
  correct terminology.
```

---

## LANGUAGE AND TONE RULES

1. **Use "projects" / "estimates" / "models"**, never "calculates" or "determines" — long-term projections involve assumptions, not arithmetic certainty.

2. **"Lifetime wealth analysis tool" / "long-hold projection"** for strategic framing. "Calculator" for mechanical contexts.

3. **Natural keyword placement** — primary keyword appears in TITLE, H1, META, OVERVIEW_P1, at least 2 H2 headings. No stuffing.

4. **No "qualifies for" language** — banned from DSCR bug. Use "falls within" or "meets criteria".

5. **Input placeholders are instructions, not examples** — "Enter purchase price" not "e.g., 250000".

6. **Honest uncertainty** — "projects Total ROI of 130-170% under base assumptions" not "your ROI will be 150%".

7. **Pre-tax / partial after-tax clarity** — every mention of ROI must eventually clarify what tax treatment is assumed. Short-form mentions OK; long-form must include full "partial after-tax" breakdown.

8. **Cross-link to source calculators** — Rental Property (Year 1 analysis), Compare Real Estate Deals (cross-strategy), BRRRR (if user considers BRRRR alternative), Cap Rate (component metric).

9. **Never use "guaranteed return"** — we project, we don't guarantee.

10. **"Wealth-building" positioning** — this calculator is about long-term wealth, not immediate cash flow. Content should embrace this framing.

---

## SEO STRUCTURE (15 sections in strict order)

1. TITLE + META DESCRIPTION + H1
2. OVERVIEW (4 paragraphs)
3. HOW TO USE (5 steps + 4 pro tips + 3 mode explanations)
4. INPUTS & OUTPUTS (table)
5. FORMULA (intro box + 6 phases + Wealth Waterfall explanation + split tax formula + worked example)
6. WHAT IS (3 paragraphs defining Rental ROI + lifetime wealth concept)
7. RESULT MEANING (ROI tiers + IRR tiers + Wealth Break-Even interpretation)
8. BENCHMARKS (Total ROI by hold period + IRR bands + component breakdown averages)
9. STRATEGY (5 blocks: First-Time Investor, Scaling Investor, Retirement Investor, Agent, Portfolio Evaluator)
10. APPLICATIONS (6 use cases)
11. INDUSTRY STANDARDS (lifetime ROI methodology + tax treatment conventions + peer tool comparison)
12. LIMITATIONS (6 items + When Not to Use)
13. COMMON MISTAKES (5 items)
14. FAQ (9 Q&A)
15. RELATED CALCULATORS + SCHEMA block

---

## TITLE (hardcoded fallback)

```
MANDATORY — use exact fallback string below, no exceptions:

TITLE: Rental Property ROI Calculator — Lifetime Wealth | RealCalc
(verified 56 characters — safely under 60-char Google cutoff)

SIMPLIFIED RULE: ALWAYS use the fallback title above. Do NOT generate a custom 
title. Do NOT modify the fallback. Do NOT attempt character counting for 
alternatives.

Rationale: fallback pre-verified at 56 characters, contains primary keyword 
anchor ("Rental Property ROI Calculator"), USP marker ("Lifetime Wealth"), 
and brand suffix.
```

## META DESCRIPTION

```
MANDATORY — use exact fallback string below, no exceptions:

META: Project rental property ROI over 1-30 year holds — total return, annualized IRR, wealth waterfall. Free long-term rental analysis tool for investors.

(verified 151 characters — within 150-160 band, v2 round 1 expert fix: "5-30" → "1-30")

Rationale: fallback pre-verified length, includes primary keyword, 
differentiator (wealth waterfall), hold period range, and audience.
```

## H1

```
MANDATORY — use exact fallback string below, no exceptions:

H1: Rental Property ROI Calculator — Long-Term Wealth Projection Tool

(verified 64 characters — under 70-char recommendation)

Rationale: primary keyword in first 3 words, USP marker ("Long-Term Wealth 
Projection"), no brand suffix (H1 is for content, not brand reinforcement).
```
---

## OVERVIEW (4 paragraphs)

```
OVERVIEW_H2: Long-Term Rental Property Analysis — What This Calculator Does
OVERVIEW_SUBTITLE: A lifetime wealth projection tool for 1-30 year hold strategies

OVERVIEW_P1:
  [5-6 sentences. MUST START with plain-language opening sentence (SEO priority). 
   Opening sentence MUST be substantially verbatim:
   
   "The Rental Property ROI Calculator helps you project how much total wealth 
   a rental property will build over 1 to 30 years — and understand whether the 
   annualized return is worth your time and capital."
   
   AFTER this opener, introduce product terminology. MUST include at least 2 of:
     • "real estate roi calculator"
     • "investment property roi calculator"
     • "long term rental roi"
   
   MUST mention audience positioning: US long-term buy-and-hold investors, 
   2026 market context. Keep P1 FOCUSED on opener + keywords + audience — 
   save 4-component waterfall explanation for P2 (v2 round 1 expert fix: P1 
   was overloaded with opener + keywords + positioning + 4 components + 
   hold range, risked structural drift).]

OVERVIEW_P2:
  [4-5 sentences. Moved here from P1 (v2 round 1 fix — P1 decongestion):
   - Core differentiator: unlike single-year rental analysis, this tool breaks 
     down Total ROI into 4 wealth components (Cumulative Cash Flow + Principal 
     Paydown + Appreciation + Estimated Depreciation Benefit) minus Sale Tax
   - Hold period range: 1-30 years with standard analysis checkpoints at 
     5/10/15/20/25/30
   - DUAL primary metrics: Total ROI % (absolute return over hold period) + 
     Annualized Return / IRR (time-normalized)
   - Why BOTH matter: a 200% Total ROI over 20 years is actually weaker than 
     100% ROI over 7 years on an annualized basis
   - Three modes: Forward ROI, Hold Period Sensitivity (see ROI at 5/10/15/20/25/30 
     year checkpoints), Compare Sell Years (compare two specific exit timings)]

OVERVIEW_P3:
  [4-5 sentences. Must explain:
   - Integration with companion tools: Rental Property Calculator for Year 1 
     operating analysis, Compare Real Estate Deals for cross-strategy 
     (Rental vs BRRRR vs Flip) comparison
   - Workflow: "run Rental Property Calculator first to validate Year 1 
     operations → land here with deal pre-filled → analyze lifetime ROI"
   - Who this tool is for: buy-and-hold investors, retirement portfolio 
     builders, real estate professionals presenting long-term projections 
     to clients
   - Who it's NOT for: short-term flippers (use Fix and Flip Calculator), 
     active property managers analyzing current cash flow (use Rental Property 
     Calculator)]

OVERVIEW_P4:
  [3-4 sentences. MUST contain:
   - Tax transparency disclosure (first of 4 required placements): "All figures 
     combine pre-tax cash flow with estimated depreciation benefit and deducted 
     sale tax (Depreciation Recapture + Capital Gains). Annual income tax on 
     rental profit is NOT modeled. This is partial after-tax, not fully 
     after-tax. Consult a real estate CPA for precise tax planning."
   - "Projections, not guarantees" framing
   - Call-to-action: "Enter your first property above, or import from Rental 
     Property Calculator for instant long-term analysis."]
```

---

## HOW TO USE (5 numbered steps + 4 pro tips + 3 mode explanations)

```
HOW_TO_USE_H2: How to Use the Rental Property ROI Calculator
HOW_TO_USE_SUBTITLE: From property inputs to 10-year wealth projection

STEP_1:
  TITLE: Enter acquisition and financing details
  BODY: [3-4 sentences — explain key inputs:
         - Purchase Price, Down Payment, Closing Costs, Rehab (if applicable)
         - Loan Rate, Loan Term, Loan Type (Conventional / DSCR / Portfolio)
         - Tip: if you've already run this deal through Rental Property 
           Calculator, click "Analyze long-term ROI" on that page to import 
           all inputs automatically]

STEP_2:
  TITLE: Enter rental income and operating assumptions
  BODY: [3-4 sentences — explain:
         - Monthly Rent, Vacancy %, Annual Rent Growth %, OpEx %
         - Rent Growth 3% is US national average (2-4% typical by market)
         - Vacancy 8% is conservative default; your market may differ
         - OpEx 35% accounts for repairs, management, insurance, taxes, reserves]

STEP_3:
  TITLE: Set appreciation and hold period
  BODY: [3-4 sentences — explain:
         - Annual Appreciation % — 3% is US historical average for residential
         - Hold Period — 1 to 30 years; 10 years is default (typical long-hold 
           strategy)
         - Warning threshold: ≤3 years triggers "short hold warning" because 
           selling costs and sale tax dominate the return
         - Special Year 1 disclosure: sale tax treatment ambiguous (may be 
           short-term capital gains at ordinary income rates)]

STEP_4:
  TITLE: Review tax parameters (Advanced — usually leave defaults)
  BODY: [4-5 sentences — explain:
         - Marginal Tax Rate, Land Value %, Selling Cost %, Federal LTCG Rate, 
           State CG Rate all have sensible defaults
         - Depreciation is automatically calculated over 27.5 years on 
           non-land portion of purchase + rehab
         - Sale tax uses SPLIT formula: Depreciation Recapture (25%) on 
           accumulated depreciation + LTCG on remaining gain. This is more 
           accurate than simplified "single rate" calculators produce
         - For state-specific accuracy, override State CG Rate (e.g., CA 9.3%, 
           TX/FL/NV 0%)]

STEP_5:
  TITLE: Interpret Total ROI, Annualized Return, and Wealth Waterfall
  BODY: [5-6 sentences. MUST contain pre-tax disclosure (second placement):
         - Primary output: Total ROI % over hold period AND Annualized Return (IRR)
         - Wealth Waterfall breakdown shows WHERE the total wealth comes from: 
           cash flow + principal paydown + appreciation + depreciation benefit 
           minus sale tax
         - For most long holds, Appreciation is the largest component (50%+ of 
           Total Wealth). This is the leverage effect on real estate
         - Cross-check with Hold Period Sensitivity tab to see how "when you 
           sell" affects your IRR
         - "All figures combine pre-tax cash flow with estimated depreciation 
           benefit and deducted sale tax. Annual income tax on rental profit 
           is NOT modeled. Consult a real estate CPA for precise tax 
           planning."]

PRO_TIP_1:
  [Pattern: pro_tip for the dual-metric logic.
   "Total ROI % shows how much wealth the deal creates; Annualized Return (IRR) 
   shows whether it was worth the time. A 300% Total ROI over 25 years is 
   weaker than 100% over 7 years on an annualized basis. Always judge by BOTH 
   — they answer different questions."]

PRO_TIP_2:
  [Pattern: pro_tip for Wealth Waterfall reading.
   "If Appreciation is the biggest component of your Total Wealth, the deal 
   depends heavily on market assumptions. Run Conservative scenario (−2 pp 
   appreciation) to stress-test. If Total ROI drops dramatically, the deal 
   is 'market-dependent' — fine for most investors, but not bulletproof."]

PRO_TIP_3:
  [Pattern: pro_tip for hold period optimization.
   "Use Hold Period Sensitivity mode to find your optimal exit year. IRR 
   typically peaks at 7-15 years for most rentals — earlier exits lose to 
   selling costs + sale tax; later exits spread returns over more time. 
   The 'sweet spot' varies by market and leverage."]

PRO_TIP_4:
  [Pattern: pro_tip for cross-calculator workflow.
   "Run every deal through Rental Property Calculator first to validate 
   Year 1 cash flow and DSCR. Only after operating metrics pass should you 
   analyze 10+ year ROI here. A deal that fails Year 1 rarely recovers 
   through appreciation alone — and this calculator doesn't replace Year 1 
   due diligence."]

HOW_TO_USE_MODES_H3: Choosing the Right Mode

MODE_FORWARD_ROI:
  TITLE: Forward ROI (default, indigo)
  USE_WHEN: You have a specific property + hold period in mind and want to see projected wealth creation
  OUTPUT: Wealth Waterfall + Total ROI + IRR + Wealth Break-Even Hold Period

MODE_HOLD_SENSITIVITY:
  TITLE: Hold Period Sensitivity (blue)
  USE_WHEN: You want to see how hold period affects ROI — "when should I sell?"
  OUTPUT: Side-by-side comparison table at 5/10/15/20/25/30 year checkpoints, with "optimal hold" highlighted

MODE_COMPARE_SELL_YEARS:
  TITLE: Compare Sell Years (emerald)
  USE_WHEN: You've narrowed to two specific exit years and want detailed side-by-side projection
  OUTPUT: Two-column comparison with Total ROI, IRR, Net Proceeds, Remaining Loan, and "Better Annualized Return" winner label
  NOT_SUPPORTED_V1: 1031 Exchange scenarios, mid-hold refinance (v2 roadmap)
```

---

## INPUTS & OUTPUTS (table format)

```
INPUTS_OUTPUTS_H2: Inputs and Outputs
INPUTS_OUTPUTS_SUBTITLE: What you enter, what the calculator projects

INPUTS_TABLE:
  [Render as markdown table. 3 columns: Input | Required | Default/Source.
   Group by:
   1. ACQUISITION (Purchase Price, Down Payment %, Closing Costs %, Initial Rehab)
   2. FINANCING (Loan Rate %, Loan Term years, Loan Type)
   3. RENTAL INCOME (Monthly Rent, Vacancy %, Annual Rent Growth %, OpEx %)
   4. APPRECIATION (Annual Appreciation %)
   5. TAX PARAMETERS — Advanced, collapsed by default (Marginal Tax Rate, 
      Land Value %, Selling Cost %, Federal LTCG Rate, State CG Rate)
   6. HOLD PERIOD (Hold Period years, range 1-30, default 10)
   
   Placeholders: "Enter purchase price" NOT "e.g., 250000".]

OUTPUTS_TABLE:
  [Render as markdown table. 3 columns: Output | Formula | Purpose.
   Strictly follow RIS Outputs table.
   
   Row structure:
   
   PRIMARY METRICS:
   - Total ROI %:  Total Wealth Created / Initial Cash Invested × 100
   - Annualized Return (IRR):  IRR of full cash flow series
   - Total Wealth Created:  Sum of 4 positive components minus Sale Tax
   - Initial Cash Invested:  Down Payment + Closing + Rehab
   
   WEALTH WATERFALL (4 components + sale tax):
   - Cumulative Cash Flow:  Sum of annual pre-tax cash flow over hold period
   - Principal Paydown:  Original Loan − Remaining Balance at hold-period end
   - Appreciation:  Property Value at hold-period end − Purchase Price
   - Estimated Depreciation Benefit:  Annual Depreciation × Marginal Tax Rate × Hold Years
   - MINUS Sale Tax:  Depreciation Recapture Tax (25%) + Capital Gains Tax 
     (Federal LTCG + State CG)
   
   DERIVED METRICS:
   - Year 1 Cash-on-Cash %:  Year 1 Cash Flow / Initial Cash Invested  
     (cross-calculator invariant — must match Rental Property Calculator)
   - Wealth Break-Even Hold Period:  First year where cumulative wealth turns positive
   - Equity at Sale:  Property Value − Remaining Loan (pre-tax)
   - Net Proceeds at Sale:  Sale Price − Selling Costs − Loan − Sale Tax
   - ROI without Tax Benefits:  Total ROI excluding depreciation savings 
     (for investors wanting pre-tax view)
   
   For Sale Tax row, formula column MUST say: "SPLIT formula: 
   Recapture Tax = 25% × min(Accumulated Depreciation, Total Gain); 
   Capital Gains Tax = (Fed LTCG + State CG) × max(0, Total Gain − Accumulated Depreciation)."
   NEVER write "combined rate × total gain" — that was the old simplified 
   formula, explicitly replaced in RIS v2.]
```
---

## FORMULA (intro box + 6 phases + Wealth Waterfall + split tax + worked example)

```
FORMULA_H2: How the Rental Property ROI Calculator Works
FORMULA_SUBTITLE: 6-phase simulation from acquisition to sale — with a worked 
                  Austin, TX 2026 example

FORMULA_INTRO_BOX:
  "The Rental Property ROI Calculator runs a 6-phase simulation: (1) Initial 
   Cash Invested, (2) Loan Amortization Schedule, (3) Year-by-Year Cash Flow 
   with rent growth, (4) Terminal Sale with split tax calculation, 
   (5) Wealth Waterfall decomposition, (6) Total ROI and IRR. Unlike 
   single-year calculators, this tool models the full hold period — 
   1-30 year hold periods — to show how cash flow, principal paydown, 
   appreciation, and tax benefits combine into total wealth creation. 
   Results are projections based on user inputs and 27.5-year residential 
   depreciation, not market-reported data."

CANONICAL PARTIAL-TAX MODEL BLOCK (v2 round 1 expert fix — MUST appear verbatim 
in FORMULA section; also cross-referenced in LIMITATIONS Item 1 and FAQ Q3):

```
╔══════════════════════════════════════════════════════════════════════════╗
║ CANONICAL PARTIAL-TAX MODEL                                              ║
║                                                                          ║
║ Total Wealth Created =                                                   ║
║   Pre-Tax Cash Flow                                                      ║
║   + Principal Paydown                                                    ║
║   + Appreciation                                                         ║
║   + Estimated Depreciation Benefit                                       ║
║   − Sale Tax (Recapture 25% + LTCG on remaining gain)                   ║
║                                                                          ║
║ This is a PARTIAL-TAX model:                                             ║
║   ✓ Includes: estimated depreciation benefit + sale tax                  ║
║   ✗ Excludes: annual income tax, NIIT (3.8% surtax), passive loss limits ║
║                                                                          ║
║ This is NOT fully after-tax. For precise after-tax analysis,            ║
║ consult a real estate CPA.                                               ║
╚══════════════════════════════════════════════════════════════════════════╝

FORBIDDEN LABELS (any use = critical error, regenerate):
  ✗ "After-Tax ROI"          → implies full tax modeling (it isn't)
  ✗ "Net ROI after taxes"    → same implication
  ✗ "Fully after-tax return" → explicitly wrong
  ✗ "Tax Savings"            → use "Estimated Depreciation Benefit"
  ✗ "Tax Shield"             → use "Estimated Depreciation Benefit"

REQUIRED LABELS (use these exact phrases):
  ✓ "Total Wealth Created" or "Partial After-Tax Total Wealth"
  ✓ "Estimated Depreciation Benefit"
  ✓ "Sale Tax (Recapture + LTCG split formula)"
  ✓ "Pre-Tax Cumulative Cash Flow"
  ✓ "Annual income tax on rental profit not modeled"
```

STEP_BY_STEP (6 phases, strict — match RIS):

  Phase 1 — Initial Cash Invested:
    Down Payment = Purchase × Down Payment %
    Closing Costs = Purchase × Closing %
    Initial Cash Invested = Down Payment + Closing Costs + Rehab

  Phase 2 — Loan Amortization:
    Compute Monthly Payment (P&I) using standard amortization formula
    For each month m from 1 to Hold × 12:
      Compute Interest, Principal, Remaining Balance
    Sum Principal payments → Principal Paydown (for Wealth Waterfall)

  Phase 3 — Year-by-Year Simulation:
    For each year Y from 1 to Hold Period:
      Gross Rent_Y = Monthly Rent × 12 × (1 + Rent Growth)^(Y-1)
      Effective Rent_Y = Gross Rent_Y × (1 − Vacancy %)
      NOI_Y = Effective Rent_Y × (1 − OpEx %)
      Pre-Tax Cash Flow_Y = NOI_Y − Annual Debt Service
      Annual Depreciation = (Purchase + Rehab) × (1 − Land %) / 27.5
      Estimated Depreciation Benefit = Depreciation × Marginal Tax Rate
    Sum annual cash flows → Cumulative Cash Flow (for Wealth Waterfall)

  Phase 4 — Terminal Sale (uses Phase 5 Rule 3 split tax):
    Property Value_Sale = Purchase × (1 + Appreciation %)^Hold
    Selling Costs = Property Value_Sale × Selling Cost %
    Remaining Loan = Remaining Balance at final month
    
    SPLIT TAX (canonical formula — never simplified):
      Accumulated Depreciation = Annual Depreciation × Hold Period
      Adjusted Basis = Purchase + Rehab − Accumulated Depreciation
      Total Gain = (Property Value_Sale − Selling Costs) − Adjusted Basis
      
      Depreciation Recapture Tax = 25% × min(Accumulated Depreciation, max(0, Total Gain))
      LTCG Gain Portion = max(0, Total Gain − Accumulated Depreciation)
      Capital Gains Tax = LTCG Gain Portion × (Federal LTCG Rate + State CG Rate)
      
      Total Sale Tax = Depreciation Recapture Tax + Capital Gains Tax
    
    Net Proceeds at Sale = Property Value_Sale − Selling Costs − Remaining Loan − Total Sale Tax

  Phase 5 — Wealth Waterfall (explanatory decomposition):
    Total Wealth = Cumulative Cash Flow 
                 + Principal Paydown 
                 + Appreciation 
                 + Estimated Depreciation Benefit
                 − Total Sale Tax

  Phase 6 — Total ROI and IRR:
    Total ROI % = Total Wealth / Initial Cash Invested × 100
    IRR = solve NPV = 0 for cash flow series [Year 0: −Initial Cash, 
          Years 1..N-1: Annual CF, Year N: CF + Net Proceeds]
    If IRR solver fails → fallback to CAGR with "(approximated)" label

FORMULA_BOX:
  Total ROI %              = Total Wealth / Initial Cash Invested × 100
  Annualized Return (IRR)  = IRR of full cash flow series
  
  Wealth Waterfall Components:
    Cumulative Cash Flow     = Σ(Pre-Tax CF_Y) for Y = 1..Hold
    Principal Paydown        = Original Loan − Remaining Balance_Sale
    Appreciation             = Property Value_Sale − Purchase Price
    Estimated Deprec Benefit = Annual Deprec × Marginal Tax × Hold Years
  
  Sale Tax (SPLIT):
    Recapture Tax  = 25% × min(Accumulated Deprec, max(0, Total Gain))
    LTCG Tax       = (Fed LTCG + State CG) × max(0, Total Gain − Accumulated Deprec)
    Total Sale Tax = Recapture + LTCG
  
  Wealth Break-Even Hold Period:
    First year Y where Cumulative Wealth_Y ≥ 0 (includes Sale Tax per Rule 3)

COMBINED-TAX BAN (v2 round 1 expert fix — ZERO TOLERANCE):

```
CRITICAL:
Any formula that applies a single combined tax rate to Total Gain is INCORRECT.

Sale tax MUST always be computed as:
  Recapture Tax (25% × min(Accumulated Depreciation, max(0, Total Gain)))
  + LTCG Tax ((Federal LTCG + State CG) × max(0, Total Gain − Accumulated Depreciation))

FORBIDDEN formulas (any occurrence = critical error, regenerate):
  ✗ Sale Tax = Total Gain × (Fed + State)
  ✗ CG Tax = Taxable Gain × blended rate
  ✗ Sale Tax = Gain × 0.20 (or any single-rate approximation)
  ✗ "Depreciation recapture rolled into combined rate" (rejected in RIS v2)

If an expression uses a SINGLE multiplier on Total Gain, it is wrong by 
construction — replace with the split formula above. No exceptions. The 
simplified single-rate formula was explicitly rejected in the RIS and 
produces meaningfully lower tax liability estimates (underestimates by 
20-35% in typical cases).
```

CRITICAL METHODOLOGICAL RULES (summary — source of truth is RIS):
  - Depreciation applies to (1 − Land %) portion of purchase + rehab, 27.5-year period
  - Sale Tax uses SPLIT formula (Recapture + LTCG), NEVER combined single rate
  - min()/max() guards mandatory for loss-sale edge cases
  - Terminal sale uses equity basis with selling costs deducted
  - Hold Period range 1-30 years; ≤3 years triggers warning
  - Year-1 sale tax is approximate (short-term vs long-term ambiguous)
  - IRR can be negative (legitimate); fallback to CAGR only if solver fails
  - Cross-calculator invariant: Year 1 CoC must match Rental Property Calculator ±0.1 pp

FORMULA_VISUAL (ASCII schema):

  Acquisition Inputs ──────────────┐
  (Purchase, Down, Closing, Rehab) │
                                   ▼
  Financing Inputs ──► [Phase 1: Initial Cash Invested]
  (Rate, Term)                     │
                                   ▼
                        [Phase 2: Amortization Schedule]
                        (monthly P&I, principal paydown)
                                   │
  Rental Inputs ───────────────────┤
  (Rent, Vacancy, OpEx,            ▼
   Rent Growth)            [Phase 3: Year-by-Year Simulation]
                        (annual cash flow, depreciation benefit)
                                   │
  Hold Period ─────────────────────┤
  Appreciation %                   ▼
                        [Phase 4: Terminal Sale]
                        (property value, selling, remaining loan)
                                   │
  Tax Parameters ──────────────────┤
  (Land %, LTCG, State)            ▼
                        [Rule 3: SPLIT Sale Tax]
                        (Recapture 25% + LTCG on remaining)
                                   │
                                   ▼
                        [Phase 5: Wealth Waterfall]
                        4 positive components − Sale Tax
                                   │
                                   ▼
                        [Phase 6: Total ROI + IRR]
                                   │
                                   ▼
                   DUAL METRIC DISPLAY + WATERFALL CHART

FORMULA_EXAMPLE:
  Location:        Austin, TX (2026 Sunbelt long-hold benchmark market)
  Market context:  3-4% appreciation, 3% rent growth, 0% state income tax 
                   (Texas advantage), typical 10-year hold strategy

  STRICT NUMERIC RANGES — use values within these bands:
    Purchase Price:        $280,000-$320,000
    Down Payment:          25%
    Closing Cost:          2%
    Rehab:                 $0 (turnkey rental scenario)
    Loan Rate:             7.5%
    Loan Term:             30 years
    Monthly Rent:          $2,000-$2,300
    Vacancy:               8%
    OpEx:                  35%
    Rent Growth:           3%
    Appreciation:          3%
    Hold Period:           10 years
    Marginal Tax:          24%
    Land Value:            20%
    Selling Cost:          7%
    Federal LTCG:          15%
    State CG:              0% (Texas)

  EXPECTED RESULT RANGES (per RIS Test 1 updated ranges):
    Initial Cash Invested:       ~$81,000
    Total Wealth Created:        $93,000-$130,000
    Total ROI:                   115-160%
    Annualized Return (IRR):     10-13%
    
    Wealth Waterfall breakdown:
      Cumulative Cash Flow:          $8,000-$15,000
      Principal Paydown:             $33,000-$38,000
      Appreciation:                  ~$103,000
      Estimated Depreciation Benefit: $5,000-$8,000
      MINUS Split Sale Tax:          −$32,000-$35,000
        (Recapture ~$21,800 + LTCG ~$11,200)
      = Total Wealth:                $93,000-$130,000
    
    Wealth Break-Even Hold Period: Year 4-6 (deal pays back total wealth around year 5)

  MANDATORY EXECUTION RULES for the 6 phases below:
    1. Do NOT summarize, skip, or compress any phase.
    2. Each phase must be executed and written out explicitly.
    3. SPLIT tax formula is MANDATORY — never use combined-rate simplification.
    4. If a phase's output triggers a warning (short hold, aggressive appreciation, 
       negative ROI, loss-sale edge case), write it out.
    5. **Do not expand beyond necessary detail. Prioritize structure over numeric 
       precision (v2 round 1 expert fix).** If you cannot compute an exact value 
       but can preserve the 6-phase structure with the split tax formula intact, 
       use Graceful Simplification (below). Better to ship structurally correct 
       with approximated numbers than over-engineered numbers that lose the 
       structure.

  EXECUTION PRIORITY (v1 standard — Graceful Simplification primary):
  
  GRACEFUL SIMPLIFICATION (primary):
    If exact numeric precision is not possible, CONTINUE with structured 
    approximation while preserving all 6 phases AND the split tax formula. 
    Use symbolic placeholders like [$X] or narrower ranges where exact 
    numbers cannot be computed — but DO execute every phase with correct 
    methodology. An approximate-but-structurally-correct worked example is 
    more valuable than no example.
  
  STOP-RATHER-THAN-APPROXIMATE RULE (last resort only):
    STOP only if methodology itself cannot be followed (e.g., inputs 
    fundamentally inconsistent). When stopping, output: "Worked example 
    not generated due to methodology uncertainty — please verify inputs."

  Phase 1: Initial Cash — [compute explicitly for Austin example]
  Phase 2: Amortization — [show annual debt service, accumulated principal at Year 10]
  Phase 3: Year-by-Year — [show Year 1, Year 5, Year 10 cash flow with rent growth]
  Phase 4: Terminal Sale — [Property Value_Y10, Selling Costs, Remaining Loan]
  Phase 5 SPLIT Tax — [show Accumulated Depreciation, Total Gain, Recapture vs LTCG split]
  Phase 6 Waterfall — [sum 4 positive components, subtract Sale Tax]
  Phase 6 IRR — [show IRR result + fallback if needed]
  
  Result Summary:
    Initial Cash Invested:   $[X]
    Total Wealth Created:    $[X]
    Total ROI:              [X]%
    Annualized Return (IRR): [X]%
    Wealth Break-Even:       Year [X]
  
  POST-CALCULATION VERIFICATION (mandatory — run all 5 checks, brief):
    Check 1 — Waterfall invariant: Sum of waterfall components = 
              (IRR cash flow sum − Initial Cash Invested) within ±$100
    Check 2 — Split tax formula used (not combined rate): verify both 
              Recapture Tax and LTCG Tax separately shown
    Check 3 — min()/max() guards applied: check that loss-sale edge cases 
              (Total Gain ≤ 0) would give Sale Tax = 0
    Check 4 — Wealth Break-Even uses cash-flow-inclusive formula with 
              Y-specific sale tax (not reused final-year values)
    Check 5 — No forbidden terminology: no "Tax Savings" (should be 
              "Estimated Depreciation Benefit"), no "Break-Even" without 
              "Wealth" prefix, no "combined CG rate" references.
```

---

## WHAT IS (3 paragraphs defining Rental ROI + lifetime wealth concept)

```
WHAT_IS_H2: What Is Rental Property ROI?
WHAT_IS_SUBTITLE: Lifetime wealth analysis vs. single-year operating snapshot

WHAT_IS_P1:
  [4-5 sentences. Define rental property ROI in lifetime context:
   - Traditional "rental ROI" often means Year 1 Cash-on-Cash return — a 
     single-year snapshot
   - Lifetime Rental ROI is fundamentally different: it measures total wealth 
     created over a multi-year hold period (1-30 years range, standard checkpoints at 5/10/15/20/25/30)
   - Lifetime ROI includes FOUR wealth drivers: cash flow, principal paydown, 
     appreciation, and depreciation tax benefits — minus sale tax at exit
   - Most rental properties are weak on Year 1 cash flow but strong on 
     5-year+ Total ROI because appreciation and leverage compound over time
   - This calculator implements the full lifetime analysis with proper 
     tax treatment]

WHAT_IS_P2:
  [4-5 sentences. Explain Wealth Waterfall decomposition:
   - Total ROI alone doesn't tell you WHERE the return came from
   - Decomposing Total Wealth into 4 components reveals the deal's nature:
     * High Cash Flow component → operationally efficient rental
     * High Principal Paydown component → leverage is working for you
     * High Appreciation component → market-dependent, vulnerable to softening
     * High Depreciation Benefit component → high tax bracket investor extracts 
       more tax shield value
   - If Appreciation dominates (50%+), the deal is essentially a bet on future 
     property values — run Conservative scenario to stress-test
   - If Cash Flow and Principal Paydown dominate, the deal is more resilient 
     to market changes]

WHAT_IS_P3:
  [4-5 sentences. Explain IRR and tax framing honestly:
   - Annualized Return (IRR) measures per-year return including all cash flows 
     and final sale
   - IRR accounts for the TIME value of money — a 200% Total ROI over 25 
     years is actually lower IRR than 100% over 7 years
   - This calculator uses SPLIT sale tax formula (Depreciation Recapture 25% 
     + LTCG on remaining gain) — more accurate than simplified "single rate" 
     calculators
   - "Partial after-tax" framing: pre-tax cash flow + estimated depreciation 
     benefit + sale tax. Annual income tax on rental profit is NOT modeled. 
     Consult a CPA for precise after-tax analysis.]
```

---

## RESULT MEANING (ROI tiers + IRR tiers + Wealth Break-Even interpretation)

```
RESULT_MEANING_H2: What Your Total ROI and Annualized Return Mean
RESULT_MEANING_SUBTITLE: Interpreting the DUAL primary metrics + Wealth Break-Even

RESULT_INTRO:
  [2-3 sentences. Frame: Total ROI answers "how much wealth?", Annualized 
   Return answers "at what rate?". Both matter.]

TOTAL_ROI_TIERS:
  TITLE: Total ROI % Tiers (at 10-year hold, adjust proportionally)
  BODY: [Bullet list:
         - < 120% (Weak): deal underperforms typical long-hold rentals
         - 120-220% (Average): standard long-hold return
         - > 220% (Strong): above-average appreciation, cash flow, or leverage
         
         For 20-year hold: roughly double these thresholds
         For 5-year hold: roughly half these thresholds]

IRR_TIERS:
  TITLE: Annualized Return (IRR) Tiers
  BODY: [Bullet list per RIS:
         - < 6% (Below Market): loses to passive index funds — review assumptions
         - 6-9% (Market Rate): comparable to S&P 500
         - 9-13% (Good): above-market with leverage + tax benefits
         - 13-18% (Strong): high-quality deal with meaningful appreciation
         - > 18% (Exceptional): often indicates aggressive assumptions — verify inputs
         - Negative IRR: deal projects loss — likely input error or genuinely 
           bad deal; review]

WEALTH_BREAKEVEN_INTERPRETATION:
  TITLE: Wealth Break-Even Hold Period — What It Tells You
  BODY: [3-4 sentences:
         - Year at which cumulative wealth first turns positive (including 
           hypothetical sale tax if sold that year)
         - Short Break-Even (Year 1-3): deal starts generating value quickly, 
           often driven by appreciation + leverage
         - Medium Break-Even (Year 4-7): typical for most US rentals
         - Long Break-Even (Year 8+): deal is heavily tax/appreciation-dependent; 
           may not recover early exit
         - "Beyond 30 years" result: deal does not pay back total wealth — 
           review inputs, may be genuinely unviable]

RESULT_CONTEXT_2026:
  TITLE: 2026 US Rental Market Context
  BODY: [4-5 sentences explaining 2026 dynamics:
         - Post-2022 rate environment (mortgage rates 7-8%) compresses Year 1 
           cash flow
         - Appreciation normalized to 3-4% from 2020-2022 surge
         - Rent growth moderated to 2-4% nationally
         - Many 2026 deals show WEAK Year 1 CoC (1-4%) but STRONG 10-year IRR 
           (10-13%) — appreciation and principal paydown compensate
         - This is why lifetime ROI analysis matters more than ever in 2026]
```

---

## BENCHMARKS (Total ROI by hold period + IRR bands + component breakdown)

```
BENCHMARKS_H2: Rental Property ROI Benchmarks for 2026
BENCHMARKS_SUBTITLE: What total returns and IRR look like across hold periods

BENCHMARKS_INTRO:
  [2-3 sentences. Frame: illustrative patterns, not measured data. Individual 
   results depend on location, leverage, and assumptions.]

BENCHMARKS_BY_HOLD_PERIOD:
  [Structured table from RIS:
   Hold 5Y:   Weak <50% | Average 50-90% | Strong >90%
   Hold 10Y:  Weak <120% | Average 120-220% | Strong >220%
   Hold 15Y:  Weak <220% | Average 220-400% | Strong >400%
   Hold 20Y:  Weak <360% | Average 360-650% | Strong >650%
   Hold 25Y:  Weak <550% | Average 550-1000% | Strong >1000%
   Hold 30Y:  Weak <800% | Average 800-1500% | Strong >1500%]

BENCHMARKS_IRR_BANDS:
  [From RIS Rule 5 tiers — repeat briefly:
   < 6% Below Market | 6-9% Market | 9-13% Good | 13-18% Strong | >18% Exceptional]

BENCHMARKS_COMPONENT_BREAKDOWN:
  TITLE: Typical Wealth Waterfall Composition (10-year hold, 25% down)
  BODY: [In typical US Sunbelt rental at base assumptions:
         - Appreciation: 50-65% of Total Wealth
         - Principal Paydown: 20-30% of Total Wealth
         - Cumulative Cash Flow: 5-15% of Total Wealth
         - Estimated Depreciation Benefit: 3-8% of Total Wealth
         - MINUS Sale Tax: typically 20-25% reduction from positive components
         
         Deviations from this composition indicate specific deal characteristics 
         — e.g., Appreciation >70% means market-dependent; Cash Flow >20% 
         means unusually strong operating economics.]

BENCHMARKS_DISCLAIMER:
  "These ranges are illustrative patterns based on typical long-hold rental 
   scenarios in 2026 US markets, NOT measured statistical datasets, NOT 
   market research, NOT predictions for any specific deal. The percentages 
   shown represent approximate outcomes observed across similar user-input 
   combinations at commonly-used assumption levels (25% down, 30-year 
   amortization, 3% appreciation, 3% rent growth). Actual results depend on 
   your specific inputs, location, and execution. The calculator's output 
   on YOUR inputs always takes precedence over these aggregate expectations."
```
---

## STRATEGY (5 blocks for different investor types)

```
STRATEGY_H2: How to Use Rental Property ROI by Investor Type
STRATEGY_SUBTITLE: Matching the analysis to your long-term goals

STRATEGY_FIRST_TIME:
  TITLE: First-Time Investor
  BODY: [3-4 sentences. Recommend:
         - Start with 10-year hold at default assumptions (3% appreciation, 3% rent growth)
         - Compare Forward ROI against IRR Tiers — aim for 9%+ IRR
         - Use Conservative scenario to stress-test before committing
         - Cross-link: validate Year 1 operations in Rental Property Calculator 
           first; deals that fail Year 1 rarely recover through appreciation]

STRATEGY_SCALING_INVESTOR:
  TITLE: Scaling Investor (3-10 properties)
  BODY: [3-4 sentences. Recommend:
         - Use Hold Period Sensitivity mode to identify optimal exit year per property
         - Prioritize properties with high Principal Paydown component (leverage working)
         - Watch for Appreciation-dominated deals (>60%) — market dependency adds 
           portfolio-level risk
         - Consider 1031 Exchange planning for tax-deferred portfolio growth 
           (v2 feature; v1 does not model this — consult CPA)]

STRATEGY_RETIREMENT_INVESTOR:
  TITLE: Retirement Portfolio Builder
  BODY: [3-4 sentences. Recommend:
         - 20-30 year hold periods prioritize appreciation and principal paydown
         - Focus on Wealth Break-Even Hold Period — when deal starts being wealth-positive
         - Use Compare Sell Years mode to test "sell at retirement" scenarios
         - Depreciation Benefit compounds significantly over 20+ year holds]

STRATEGY_AGENT:
  TITLE: Real Estate Agent / Advisor
  BODY: [3-4 sentences. Recommend:
         - Present Wealth Waterfall to clients — visual breakdown of return sources
         - Show Hold Period Sensitivity for "when should I sell?" conversations
         - Use IRR tiers as benchmarking framework for deal quality comparison
         - Always caveat: projections not guarantees; recommend CPA for tax specifics]

STRATEGY_PORTFOLIO_EVALUATOR:
  TITLE: Existing Portfolio Evaluator
  BODY: [3-4 sentences. Recommend:
         - Run current properties at their actual current state (remaining hold period, 
           current property value as purchase price)
         - Compare "hold another 10 years" ROI against "sell now + redeploy" alternative
         - Consider whether Appreciation component is still likely (late-cycle markets 
           may have limited runway)
         - Cross-link: use Compare Real Estate Deals to test "sell + buy BRRRR" scenarios]
```

---

## APPLICATIONS (6 use cases)

```
APPLICATIONS_H2: Common Use Cases
APPLICATIONS_SUBTITLE: When this calculator is the right tool

APPLICATION_1:
  TITLE: Pre-purchase long-term ROI validation
  BODY: [2-3 sentences. Before committing capital, validate that 10-year 
         projected IRR meets your threshold (typically 9%+). Run Conservative 
         scenario to confirm deal survives reasonable market softening.]

APPLICATION_2:
  TITLE: Portfolio hold-vs-sell decision
  BODY: [2-3 sentences. For an existing rental, run Forward ROI with remaining 
         hold period to see projected wealth creation from today forward. 
         Compare against "sell now + redeploy" alternative via Compare Real 
         Estate Deals.]

APPLICATION_3:
  TITLE: Retirement planning with rental income
  BODY: [2-3 sentences. Model 20-30 year holds to see cumulative wealth at 
         planned retirement year. Shows how cash flow + appreciation + 
         principal paydown combine into retirement portfolio value.]

APPLICATION_4:
  TITLE: Client presentations (agents, advisors)
  BODY: [2-3 sentences. Use Wealth Waterfall visualization to explain return 
         drivers to clients. PDF export provides documentation for investment 
         conversations and lender presentations.]

APPLICATION_5:
  TITLE: Depreciation tax benefit estimation
  BODY: [2-3 sentences. Quick estimate of annual depreciation tax shield for 
         planning purposes. Note: v1 assumes full deductibility — consult 
         CPA for passive activity loss implications at high incomes.]

APPLICATION_6:
  TITLE: Optimal hold period identification
  BODY: [2-3 sentences. Use Hold Period Sensitivity mode to find the hold 
         period that maximizes IRR. Typically peaks at 7-15 years depending 
         on leverage and appreciation assumptions.]
```

---

## INDUSTRY STANDARDS (methodology + tax conventions + peer comparison)

```
INDUSTRY_STANDARDS_H2: How This Calculator Aligns with Industry Conventions
INDUSTRY_STANDARDS_SUBTITLE: Methodology standards and peer tool positioning

INDUSTRY_METHODOLOGY:
  TITLE: Lifetime ROI methodology
  BODY: [4-5 sentences:
         - 1-30 year hold period (with analytical checkpoints at 5/10/15/20/25/30) is standard institutional real estate analysis horizon
         - 4-component wealth decomposition (cash flow + principal + appreciation + 
           depreciation) matches CCIM / REIT industry framework
         - 27.5-year residential depreciation per IRS §168 (standard)
         - Split sale tax (Recapture 25% + LTCG) per IRC §1250 — correct 
           treatment, not simplified
         - IRR as annualization metric matches private equity and REIT reporting standards]

INDUSTRY_TAX_CONVENTIONS:
  TITLE: Tax treatment conventions
  BODY: [4-5 sentences:
         - Pre-tax cash flow display matches BiggerPockets, DealCheck industry convention
         - Estimated depreciation benefit as separate line (not blended into cash flow) 
           prevents confusion
         - Split sale tax calculation (Recapture + LTCG) is the correct IRS treatment; 
           most consumer calculators simplify to single rate
         - "Partial after-tax" framing honestly discloses what IS and ISN'T modeled
         - Annual income tax on rental profit intentionally NOT modeled — too 
           personal-tax-situation-specific for universal calculator]

INDUSTRY_PEER_COMPARISON:
  TITLE: How this differs from BiggerPockets / DealCheck / SparkRental
  BODY: [4-5 sentences. Honest comparison:
         - BiggerPockets: strong single-year rental analysis; weaker multi-year 
           lifetime wealth decomposition
         - DealCheck: multi-year projection available but combined sale tax 
           (underestimates liability)
         - SparkRental: educational content strong; calculator lifetime modeling 
           less detailed
         - RealCalc Rental Property ROI: unique in (a) 4-component Wealth Waterfall, 
           (b) split Recapture + LTCG tax (correct, not simplified), (c) 3 modes 
           including Hold Period Sensitivity, (d) cross-calculator invariant with 
           Rental Property Calculator]

INDUSTRY_DISCLAIMER:
  "These comparisons describe market positioning, not endorsements. Each tool 
   has its strengths. Rental Property ROI Calculator is specifically designed 
   for lifetime wealth analysis with correct tax treatment — for Year 1 
   operating analysis use Rental Property Calculator; for cross-strategy 
   comparison (Rental vs Flip vs BRRRR) use Compare Real Estate Deals."
```

---

## LIMITATIONS (6 items + When Not to Use)

```
LIMITATIONS_H2: Limitations of This Calculator
LIMITATIONS_SUBTITLE: What Rental Property ROI cannot tell you

CANONICAL PARTIAL-TAX FORMULA (v2 round 1 expert fix — MANDATORY block, render VERBATIM):

  Total Wealth Created = 
    Pre-Tax Cash Flow 
    + Principal Paydown 
    + Appreciation 
    + Estimated Depreciation Benefit 
    − Sale Tax (Recapture + LTCG)
  
  This is a PARTIAL-TAX model:
    ✓ Includes: estimated depreciation benefit + sale tax (Recapture + LTCG)
    ✗ Excludes: annual income tax on rental profit, NIIT (3.8% for high earners), 
                passive activity loss limits, state income tax variations, 
                alternative minimum tax

This block MUST render in the Limitations section as a fenced code block with 
exact wording above. Do NOT paraphrase. Do NOT omit the ✓/✗ checkboxes. This 
is the canonical formal definition of the tax treatment used in this calculator.

Why this block is mandatory:
  - Prevents "partial after-tax" drifting into "after-tax" during generation
  - Gives users precise, unambiguous definition of what IS and ISN'T modeled
  - Matches RIS Rule 10 "Canonical Composition Label" for cross-document consistency
  - Protects against LLM summarization dropping the ✗ exclusion list

LIMITATION_1:
  TITLE: Partial after-tax framing, not fully after-tax
  BODY: [3-4 sentences. Required disclaimer (third placement).
         Reference the Canonical Partial-Tax Formula block above.
         - Pre-tax cash flow displayed + estimated depreciation benefit + sale tax deducted
         - Annual INCOME tax on rental profit is NOT modeled
         - Passive activity loss limits, at-risk rules, NIIT (3.8% for high earners), 
           state income tax variations all NOT modeled
         - Consult real estate CPA for precise after-tax analysis]

LIMITATION_2:
  TITLE: Depreciation benefit is estimated, not guaranteed
  BODY: [3-4 sentences:
         - "Estimated Depreciation Benefit" = Annual Depreciation × Marginal Tax Rate × Years
         - Assumes full deductibility, which requires: property is cash-flow positive, 
           you qualify as non-passive (real estate professional or active participation 
           under $150K income), at-risk basis is sufficient
         - Passive Activity Loss limits under IRC §469 can cap deductibility
         - For precise tax impact, consult CPA]

LIMITATION_3:
  TITLE: Sale tax simplified (still split, but approximate)
  BODY: [3-4 sentences:
         - Uses Federal Depreciation Recapture (25%) + Federal LTCG + State CG
         - Does NOT model: NIIT 3.8% surtax (high earners), Alternative Minimum Tax, 
           short-term capital gains (sub-1-year holds), capital loss carryforward 
           from other investments
         - Year 1 sale tax is especially approximate (short-term vs long-term boundary)
         - More accurate than simplified single-rate calculators, but not a 
           tax preparation tool]

LIMITATION_4:
  TITLE: Appreciation and rent growth are assumptions
  BODY: [3-4 sentences:
         - Future real estate values cannot be predicted
         - Small changes to appreciation assumption produce large changes in Total ROI 
           (especially at long holds)
         - Conservative scenario (−2 pp appreciation) stress-tests this
         - Results are projections based on YOUR inputs, not market forecasts]

LIMITATION_5:
  TITLE: Does not model 1031 Exchange, refinance, or portfolio rollover
  BODY: [3-4 sentences:
         - v1 scope limited to single-property hold-and-sell scenarios
         - 1031 Exchange (tax deferral via replacement property) requires 
           replacement-property assumptions — v2 feature
         - Mid-hold refinance for cash-out requires new loan terms — v2 feature
         - For multi-property portfolio analysis, consult financial advisor]

LIMITATION_6:
  TITLE: Not a substitute for professional advice
  BODY: [3-4 sentences:
         - This is an educational and screening tool
         - Before committing capital: CPA for tax specifics, attorney for 
           entity structure, lender for actual financing terms, real estate 
           advisor for market specifics
         - "Not investment advice" disclaimer]

WHEN_NOT_TO_USE_H3: When Not to Use This Calculator
WHEN_NOT_TO_USE_LIST:
  - "Year 1 operational analysis: use Rental Property Calculator for monthly 
     cash flow, DSCR, Year 1 CoC"
  - "Short-term flips (<1 year): use Fix and Flip Calculator"
  - "BRRRR strategy evaluation: use BRRRR Calculator for refi-focused analysis"
  - "Cross-strategy comparison (Rental vs BRRRR vs Flip): use Compare Real 
     Estate Deals"
  - "Tax preparation: consult CPA — this calculator is not a tax prep tool"
  - "1031 Exchange planning: v2 feature; consult CPA + qualified intermediary"
  - "Commercial or multifamily 5+ units: calculator assumes residential 1-4 unit"
```

---

## COMMON MISTAKES (5 items)

```
COMMON_MISTAKES_H2: Common Mistakes When Analyzing Rental ROI
COMMON_MISTAKES_SUBTITLE: Avoid these five errors

MISTAKE_1:
  TITLE: Comparing Total ROI across different hold periods
  BODY: [2-3 sentences. 200% ROI over 20 years is weaker than 100% over 7 
         years on an annualized basis. Always compare IRR (annualized) when 
         comparing different hold periods, not Total ROI.]

MISTAKE_2:
  TITLE: Treating Estimated Depreciation Benefit as guaranteed savings
  BODY: [2-3 sentences. Passive activity loss limits, at-risk rules, and your 
         personal tax situation can reduce actual benefit. The linear formula 
         assumes full deductibility. Consult CPA for precise tax planning.]

MISTAKE_3:
  TITLE: Ignoring appreciation dependence in Wealth Waterfall
  BODY: [2-3 sentences. If Appreciation is >60% of Total Wealth, the deal is 
         essentially a bet on future property values. Run Conservative 
         scenario (−2 pp appreciation) to see how fragile the projection is.]

MISTAKE_4:
  TITLE: Overlooking sale tax impact at exit
  BODY: [2-3 sentences. Depreciation Recapture (25%) + LTCG can eat 20-30% 
         of gross sale proceeds. Tax-free exits via 1031 Exchange are possible 
         but require replacement property planning — not modeled in v1. 
         Consult CPA before exit.]

MISTAKE_5:
  TITLE: Using lifetime ROI without validating Year 1 operations
  BODY: [2-3 sentences. A property that fails Year 1 DSCR or shows −10% CoC 
         rarely recovers through appreciation alone. Always run through 
         Rental Property Calculator first; bring only operationally viable 
         deals to lifetime analysis.]
```

---

## FAQ (9 Q&A)

```
FAQ_H2: Frequently Asked Questions
FAQ_SUBTITLE: Common questions about rental property ROI analysis

FAQ_DEDUP_NOTE (v2 round 1 expert fix — internal guidance, not displayed):
  Each FAQ answer is 3-4 sentences. Where a disclaimer appears in multiple 
  answers (e.g., "consult a CPA", "not fully after-tax"), STATE IT ONCE per 
  answer with the strongest formulation, not repeat across 3+ answers. The 
  canonical tax disclaimer lives in FAQ Q3 (fullest form); other answers 
  reference via short-form ("see Q3 for details") or skip redundant repetition. 
  Prevents FAQ bloat from disclaimer duplication.

FAQ_Q1: What's the difference between this and the Rental Property Calculator?
FAQ_A1: [3-4 sentences. Rental Property Calculator = Year 1 operating analysis 
        (cash flow, DSCR, CoC, NOI). Rental Property ROI = multi-year wealth 
        projection (1-30 years range, analytical checkpoints at 5/10/15/20/25/30) including appreciation, principal paydown, 
        depreciation benefit, and sale tax. Both are complementary; most 
        investors run both. Year 1 CoC values must match between the two 
        calculators for identical inputs.]

FAQ_Q2: What's a "good" Total ROI for a rental property?
FAQ_A2: [3-4 sentences. Depends heavily on hold period. For 10-year hold, 
        Average 120-220%, Strong >220%. For 20-year hold, roughly double. 
        IRR (annualized) is a better benchmark for comparing deals: 9-13% 
        is Good, 13-18% is Strong, >18% often indicates aggressive 
        assumptions — verify inputs.]

FAQ_Q3: Does this calculator include taxes?
FAQ_A3: [3-4 sentences. Required disclaimer (fourth placement). Partial 
        after-tax: pre-tax cash flow + estimated depreciation benefit + sale 
        tax deducted (Recapture + Capital Gains). Annual income tax on rental 
        profit NOT modeled. More accurate than simplified calculators but not 
        a substitute for CPA analysis.
        
        FAQ DISCLAIMER DEDUP RULE (v2 round 1 expert fix): this Q contains 
        the 4th of 4 tax disclaimer placements. Other FAQ answers should 
        reference tax treatment only when directly relevant (e.g., Q4 about 
        Depreciation Recapture); they must NOT repeat the full "partial 
        after-tax" disclaimer. Shorter answers improve scannability and 
        reduce LLM summarization risk.]

FAQ_Q4: Why is there a separate Depreciation Recapture tax?
FAQ_A4: [3-4 sentences. When you sell a depreciated property, the IRS 
        "recaptures" depreciation deductions taken over the hold period at 
        a flat 25% federal rate (IRC §1250). The REMAINING gain above 
        accumulated depreciation is taxed at standard LTCG rates (15-20%). 
        This split is MORE accurate than "single combined rate" simplifications 
        used by most consumer calculators.]

FAQ_Q5: Can IRR be negative? Is that a bug?
FAQ_A5: [3-4 sentences. Yes, IRR can be negative when the deal projects a 
        loss over the hold period. This is a legitimate output, not a bug. 
        Negative IRR means you'd earn more keeping cash in a savings account 
        than holding this property. Review assumptions — especially 
        appreciation, rent growth, and rehab budget. If inputs are realistic 
        and IRR is still negative, the deal is genuinely weak.]

FAQ_Q6: What hold period should I use?
FAQ_A6: [3-4 sentences. Default is 10 years (typical long-hold strategy). 
        For retirement planning, use 20-30 years. For specific exit strategies, 
        use Compare Sell Years mode. Warning: holds ≤3 years are heavily 
        skewed by selling costs and sale tax — consider Rental Property 
        Calculator for Year 1 operational analysis instead.]

FAQ_Q7: Can I import a deal from Rental Property Calculator?
FAQ_A7: [3-4 sentences. Yes. Rental Property Calculator has an "Analyze 
        long-term ROI" button that pre-fills this calculator via URL 
        parameters. All acquisition, financing, rental, and market assumption 
        fields transfer. You only need to specify Hold Period and optionally 
        adjust tax parameters before seeing projections.]

FAQ_Q8: Does this handle 1031 Exchange scenarios?
FAQ_A8: [3-4 sentences. Not in v1. 1031 Exchange requires replacement property 
        assumptions (new basis, cash flow, appreciation) that v1 cannot model 
        without significant additional inputs. This is a v2 roadmap feature. 
        For 1031 planning, consult a CPA and qualified intermediary.]

FAQ_Q9: What's the Wealth Break-Even Hold Period?
FAQ_A9: [3-4 sentences. First year at which cumulative wealth (including 
        hypothetical sale tax if sold that year) turns positive. Typical 
        rentals hit Wealth Break-Even at Year 4-7. NOT the same as operational 
        cash flow break-even (that's computed by Rental Property Calculator). 
        "Beyond 30 years" result means the deal doesn't pay back total wealth 
        in the modeled horizon — review inputs.]
```

---

## RELATED CALCULATORS

```
RELATED_CALCULATORS_H2: Related Calculators
RELATED_CALCULATORS_SUBTITLE: Continue your analysis with these specialized tools

RELATED_LIST (6 items with 1-2 sentence descriptions):
  - Rental Property Calculator — Year 1 operating analysis with cash flow, 
    DSCR, CoC, NOI; companion to this tool for single-year validation
  - Compare Real Estate Deals — cross-strategy comparison (Rental vs Fix and 
    Flip vs BRRRR); use when evaluating multiple deals with different strategies
  - Cap Rate Calculator — fundamental valuation metric (NOI / Property Value); 
    quick screening before lifetime ROI analysis
  - DSCR Calculator — debt service coverage for lender underwriting; validates 
    financing feasibility
  - NOI Calculator — operating income analysis, input for Cap Rate and lifetime 
    ROI
  - 1031 Exchange Calculator (coming soon) — tax-deferred property exchanges 
    for portfolio rollover
```

---

## SCHEMA BLOCK (JSON-LD)

```
SCHEMA_TYPE: FinancialProduct + SoftwareApplication (dual schema)

SCHEMA_NAME: Rental Property ROI Calculator
SCHEMA_DESCRIPTION: [150-200 chars. Must include primary keyword.
                    Example: "Free lifetime wealth projection tool for rental 
                    properties. Project 1-30 year Total ROI, Annualized Return 
                    (IRR), and Wealth Waterfall with correct split tax formula."]

SCHEMA_FEATURE_LIST:
  - Lifetime wealth projection 1-30 year hold periods
  - 4-component Wealth Waterfall breakdown
  - Cumulative Cash Flow + Principal Paydown + Appreciation + Depreciation Benefit
  - Split Sale Tax formula (Depreciation Recapture 25% + LTCG on remaining gain)
  - Total ROI % and Annualized Return (IRR)
  - Wealth Break-Even Hold Period identification
  - 3 modes: Forward ROI, Hold Period Sensitivity, Compare Sell Years
  - Hold Period Sensitivity table (5/10/15/20/25/30 year checkpoints)
  - 3 scenarios (Conservative / Base / Optimistic)
  - 3 sensitivity tables (Appreciation × Rent Growth, Hold × Appreciation, 
    Leverage × Hold)
  - URL parameter import from Rental Property Calculator
  - PDF export with Wealth Waterfall chart
  - Cross-calculator Year 1 CoC invariant validation

SCHEMA_AUDIENCE: US Real Estate Investors (long-term buy-and-hold strategy)
SCHEMA_PRICE: Free
SCHEMA_OPERATING_SYSTEM: Web browser
```

---

## CRITICAL CHECKS (7 inline items + v2 round 1 acceptance items)

Before finalizing this SEO package, verify these 7 CRITICAL items:

1. [ ] TITLE uses exact fallback: "Rental Property ROI Calculator — Lifetime Wealth | RealCalc" (56 chars)
2. [ ] H1 uses exact fallback: "Rental Property ROI Calculator — Long-Term Wealth Projection Tool" (64 chars)
3. [ ] META uses exact fallback (151 chars, contains primary keyword + wealth waterfall + 1-30 year range)
4. [ ] OVERVIEW_P1 starts with plain-language opener VERBATIM: "The Rental Property ROI Calculator helps you project how much total wealth a rental property will build over 1 to 30 years — and understand whether the annualized return is worth your time and capital."
5. [ ] FORMULA section uses SPLIT tax formula (Depreciation Recapture 25% + LTCG separately); COMBINED-TAX BAN block present; NEVER combined single rate
6. [ ] "Estimated Depreciation Benefit" used throughout; STRICT TERMINOLOGY CONTRACT block present; NEVER "Tax Savings" or "Tax Shield"
7. [ ] "Partial after-tax" framing explicit in 4 placements (Overview P4, How to Use Step 5, Limitations Item 1, FAQ Q3); CANONICAL PARTIAL-TAX FORMULA block present in Limitations

**v2 round 1 acceptance items (7 expert fixes applied):**
- [x] Fix 1 (CRITICAL): Hold period range unified to "1-30 years (with standard analysis checkpoints at 5/10/15/20/25/30)" across META, Overview, Formula, Steps, FAQ — stray "5-30" wording eliminated
- [x] Fix 2 (CRITICAL): CANONICAL PARTIAL-TAX FORMULA block added to Limitations — mandatory verbatim render with ✓/✗ inclusion/exclusion checkboxes, prevents drift to "after-tax"
- [x] Fix 3 (CRITICAL): COMBINED-TAX BAN block added to Formula — explicit ZERO TOLERANCE for single-rate formulas, 4 forbidden patterns enumerated
- [x] Fix 4 (CRITICAL): STRICT TERMINOLOGY CONTRACT block added — 7 required phrases + 9 forbidden phrases with rationale and verification procedure
- [x] Fix 5 (Medium): OVERVIEW_P1 decongested — opener + keywords + audience only; 4-component breakdown, dual metrics, hold range, modes moved to P2
- [x] Fix 6 (Medium): FORMULA execution priority note added "Do not expand beyond necessary detail. Prioritize structure over numeric precision."
- [x] Fix 7 (Medium): FAQ DISCLAIMER DEDUP RULE added to Q3 — tax disclaimer appears 4× total (not repeated across every FAQ answer)

**Full 45+ item validation checklist moved to companion file `rental-property-roi-seo-validation-prompt.md`** — run as post-generation second-pass audit. This two-pass workflow was introduced after Compare Deals SEO feedback identified that long inline checklists cause LLM attention decay.

---

**Output only the SEO content package in Markdown. Do not output code. Do not output HTML. Do not output Vue. This is a content document that will be consumed by the Master Prompt later alongside the RIS spec.**
