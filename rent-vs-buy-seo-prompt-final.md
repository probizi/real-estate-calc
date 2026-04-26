# SEO Package Prompt — Rent vs Buy Calculator — v1

You are a senior SEO copywriter specializing in US real estate and personal finance content. Your job is to produce a **complete SEO content package** for the Rent vs Buy Calculator page.

The output of this prompt is pure content — no code, no HTML, no Vue. It will later be combined with the RIS specification (rent-vs-buy-ris-prompt-final.md) and the Master Prompt to generate the actual page.

---

## RIS PRIORITY RULE (READ BEFORE EVERYTHING ELSE)

```
RIS PRIORITY RULE:

The RIS (rent-vs-buy-ris-prompt-final.md) is the SOURCE OF TRUTH for:
  • Formulas (Net Wealth, opportunity cost, amortization, tax logic)
  • Thresholds (Status Badge tiers, Break-Even definition, persistent crossing)
  • Metric definitions (Net Wealth Buy vs Rent, Final Net Wealth, Wealth Difference)
  • Test cases (8 expected outputs for specific inputs)
  • Critical rules (consumer rate not investor, opportunity cost mandatory in Mode 2,
                  PMI auto-cancel modeled, persistent break-even, audience redirect)

If any conflict arises between this SEO prompt and the RIS:
  → RIS ALWAYS wins
  → Rewrite the SEO content to match RIS, not vice versa
  → If RIS changes, SEO must update to stay aligned

SEO prompt responsibilities (distinct from RIS):
  • User-facing copy, explanations, tone (consumer audience, NOT investor)
  • 15-section content structure
  • TITLE/META/H1 and other hardcoded fallbacks
  • Disclaimer placements
  • Cross-link narrative to other calculators (audience redirect pattern)

DO NOT:
  ❌ Override RIS formulas
  ❌ Invent new metric definitions ("savings", "ROI", "yield" — none of these
                                     are RIS metrics for Rent vs Buy)
  ❌ Change threshold numbers from RIS
  ❌ Reorder calculation steps
  ❌ Use investor terminology (DSCR, Cap Rate, NOI) — wrong audience

This rule prevents SEO content drift over time as the prompt is used for multiple 
generations.
```

---

## PRIORITY EXECUTION RULE (READ FIRST)

If capacity overload occurs during generation, prioritize in this strict order:

1. TITLE / META / H1 — exact fallbacks
2. OVERVIEW P1 opener (preserve meaning, not strict verbatim)
3. FORMULA (Net Wealth methodology + opportunity cost)
4. TERMINOLOGY (required + forbidden — consumer audience focus)
5. DISCLAIMERS (audience signaling, opportunity cost, lifestyle factors)

See FINAL EXECUTION OVERRIDE for the master rule on quality vs compliance tradeoffs.

---

## GLOBAL RULE — Redundancy handling

If the same requirement appears multiple times across the prompt, execute it once per required placement. **If this conflicts with FINAL EXECUTION OVERRIDE** → prioritize readability and natural flow.

---

## FINAL EXECUTION OVERRIDE (MASTER RULE)

```
If following all rules reduces writing quality, clarity, or flow:
  → Write the content as a senior copywriter would
  → Then enforce ONLY critical rules:
      • TITLE / META / H1 exact fallbacks
      • Net Wealth methodology (corrected per v2 round 2 RIS)
      • DISCLAIMERS (audience + opportunity cost + lifestyle)
      • TERMINOLOGY (required + forbidden — consumer audience)

Do NOT degrade readability to satisfy non-critical rules.
Natural, high-quality content always wins over mechanical compliance.
```

---

## STRUCTURE PRESERVATION RULES

**Rule A:** Each section = separate H2 block. Never merge sections.
**Rule B:** Paragraph length 2-5 sentences max.
**Rule C:** Use bullet points for lists. Don't convert to paragraphs.

---

## STRICT TERMINOLOGY CONTRACT

### REQUIRED TERMS (use naturally, at least once each):

1. "Rent vs Buy Calculator" / "rent or buy calculator" — product name variations
2. "Break-Even Year" — primary metric (when buying creates more net wealth than renting)
3. "Net Wealth" — the comparison basis (NOT "Net Cost" — that was bug methodology)
4. "Opportunity Cost" — central concept for honest comparison
5. "Hold Period" — input that drives Break-Even
6. "PITI" — Principal, Interest, Taxes, Insurance (defined on first mention)
7. "Maintenance" — real ongoing cost (1.5% of home value)
8. "Lifestyle Factors" — Mode 3 non-financial considerations

### FORBIDDEN TERMS (zero tolerance):

- "Always buy" / "always rent" — we model, never prescribe
- "Best decision" / "right choice" — too prescriptive
- "Cheaper than renting" — we compare WEALTH not cost (per v2 round 2 methodology)
- "Net Cost" as primary metric — replaced with "Net Wealth" per RIS
- "Guaranteed return" / "guaranteed appreciation" — no guarantees
- "Investment property" / "rental income" — wrong audience (this is primary residence)
- "DSCR" / "Cap Rate" / "NOI" / "Cash-on-Cash" — investor metrics, not relevant
- "Qualifies for" — DSCR-bug phrasing, also irrelevant here
- "Easy decision" / "simple math" — rent vs buy is nuanced, don't minimize
- "Forever home" / "starter home" — pop terms, not analytical

### TERMINOLOGY APPLICATION RULE

```
Use required terms naturally. Do NOT force unnatural phrasing or repetition.
Clarity and readability come first. Each required term appears at least once 
somewhere in the content — not in every section.
```

### VERIFICATION PROCEDURE

After drafting, grep the content for forbidden terms. Any match = regenerate or targeted-patch.

---

## YOUR TASK

```
Calculator Name:    Rent vs Buy Calculator
Slug:               rent-vs-buy-calculator
Primary keyword:    rent vs buy calculator
Secondary keywords: rent or buy calculator, should I rent or buy calculator,
                    rent vs buy a house calculator, buying vs renting calculator,
                    rent vs own calculator, home buy vs rent calculator
Primary metric:     Break-Even Year (when buying creates more net wealth than renting)
Secondary metrics:  Final Net Wealth (Buy), Final Net Wealth (Rent), 
                    Wealth Difference at Year 5/10/30, Monthly Buy vs Rent costs
Target audience:    PRIMARILY homebuyers and renters considering primary residence
                    decision (NOT investors). Secondary: investors evaluating 
                    live-in flip or househack.
Traffic priority:   Priority 2 FLAGSHIP (40,000-60,000 searches/month — 
                    HIGHEST traffic in remaining hub)
```

Use attached RIS (rent-vs-buy-ris-prompt-final.md) as source of truth for formulas/thresholds/tests.

---

## CRITICAL DISTINCTIONS TO PRESERVE

**1. CONSUMER audience, NOT investor** — primary residence decision making. Default rate 6.75% consumer (NOT 7.5% investor). Down payment 20% (NOT 25%). No DSCR/Cap Rate/NOI mentions. This is the FIRST non-investor calculator in the hub.

**2. Three modes with distinct purposes:**
- Mode 1 Standard (slate) — basic Buy vs Rent comparison
- Mode 2 Detailed with Opportunity Cost (sky) — **RECOMMENDED**, includes invested down payment growth
- Mode 3 Lifestyle Adjusted (warm gray) — adds 4 weighted lifestyle factors

**3. NET WEALTH methodology, NOT cost comparison** — per v2 round 2 RIS. Both Buy and Rent paths expressed as Net Wealth (assets minus liabilities). Break-Even = wealth crossover, NOT cost crossover. UI language: "Buying creates more net wealth than renting after Year N" — NOT "Buying becomes cheaper than renting."

**4. Opportunity Cost is THE key insight** — most simple rent-vs-buy calculators ignore this, making buying look better than honest comparison shows. Mode 2 (with opportunity cost) is RECOMMENDED for credible analysis. Content must explain why this matters.

**5. Break-Even Year is PERSISTENT** — must remain ≥0 through Hold Period, not just first crossing. Prevents flickering Break-Even values from rate/appreciation interactions. If multiple crossings, report first persistent + volatility note.

**6. Hold Period drives everything** — 3-year hold rarely favors buying (transaction costs); 30-year hold almost always favors buying (rent compounds). Calculator must prominently display this insight.

**7. Lifestyle Factors acknowledged but unquantified** — calculator can't capture school district quality, neighborhood preference, family proximity, emotional attachment, identity. Mode 3 approximates 4 dimensions but must disclose subjectivity.

**8. Audience redirect pattern** — investor users (househack, live-in flip) redirected to Mortgage Investment / Rental Property Calculator. NO outbound to investor-only tools (DSCR, Cap Rate, NOI). This calculator is BRIDGE between investor hub and broader audience.

**9. Cross-calculator invariant** — Monthly P&I matches Mortgage Calculator (Investment) ±$1 for identical inputs (both use canonical amortization). Preserves trust across hub.

**10. PMI auto-cancel modeled** (improvement over Mortgage Investment Calc) — necessary for honest long-hold rent vs buy comparison.

---

## LANGUAGE AND TONE RULES

1. **"Compares" / "models" / "projects"** — not "tells you" (calculator can't decide)
2. **Conversational tone** — primary residence decisions are emotional, not just financial
3. **Natural keyword placement** — primary keyword in TITLE, H1, META, OVERVIEW_P1, 1-2 H2 headings
4. **No "qualifies for"** language (forbidden across hub)
5. **Input placeholders are instructions** — "Enter home price" NOT "e.g., 400000"
6. **Honest framing** — "models break-even at Year 6 based on your inputs" not "you'll break even at Year 6"
7. **Acknowledge uncertainty** — markets change, lifestyle changes, opportunity costs vary
8. **Consumer-friendly explanations** — don't assume real estate finance literacy
9. **Audience redirect courtesy** — when investor users land here, redirect helpfully, don't condescend
10. **2026 rate context** — when rates mentioned, note 2026 environment (consumer ~6.75%)

---

## SEO STRUCTURE (15 sections in strict order)

1. TITLE + META + H1
2. OVERVIEW (4 paragraphs)
3. HOW TO USE (5 steps + 4 pro tips + 3 mode explanations)
4. INPUTS & OUTPUTS (table)
5. FORMULA (Net Wealth methodology + opportunity cost + worked example)
6. WHAT IS (3 paragraphs — rent vs buy decision context, opportunity cost, 2026 rate environment)
7. RESULT MEANING (Break-Even tiers + Net Wealth interpretation + lifestyle factors)
8. BENCHMARKS (typical break-even by hold period + cost ranges + appreciation rates)
9. STRATEGY (5 user-type blocks: First-time buyer, Career-mover, Retiree, Family planner, Wealth maximizer)
10. APPLICATIONS (6 use cases)
11. INDUSTRY STANDARDS
12. LIMITATIONS (6 items + When Not to Use)
13. COMMON MISTAKES (5 items)
14. FAQ (9 Q&A)
15. RELATED CALCULATORS + SCHEMA

---

## MANDATORY DISCLOSURE PLACEMENTS (strict, no flexibility)

The phrase **"This calculator models a primary residence decision, not investment property purchase"** (or verbatim-equivalent that explicitly distinguishes primary residence vs investment) MUST appear in AT LEAST these 4 placements. Avoid excessive repetition beyond 6 mentions:

```
1. OVERVIEW P4 — disclosure as audience signal
2. HOW TO USE Step 1 — context for home price input
3. LIMITATIONS Item 1 — primary disclaimer
4. FAQ Q1 — explicit audience contrast

Acceptable phrasings (any of these counts):
  ✓ "This calculator models a primary residence decision, not investment property"
  ✓ "Designed for primary residence buyers, not real estate investors"
  ✓ "For investment property analysis, use the Mortgage Investment Calculator"
  ✓ "Primary residence focused — not for rentals or flips"
```

---

## OPPORTUNITY COST STRICT RULE (core product value)

This calculator's core value beyond simple calculators is treating opportunity cost honestly. When explaining opportunity cost (What Is P2, Result Meaning, FAQ Q4), MUST include:

```
MUST include:
  1. What opportunity cost means: "Money used for down payment + closing costs 
     could earn investment returns instead"
  2. Why it matters: "Most simple rent-vs-buy calculators ignore this, making 
     buying look better than honest comparison shows"
  3. Default assumption: "Mode 2 uses 7% S&P 500 long-term average (after-tax 
     ~5%); user can adjust"
  4. Honest qualifier: "Investment returns vary; past performance doesn't 
     guarantee future results"

Do NOT simplify to:
  ❌ "Investing instead of buying always wins" (false in many scenarios)
  ❌ "Opportunity cost doesn't matter if you'd spend the money anyway" 
     (missing the point — calculator models if you'd invest it)
  ❌ "7% is guaranteed market return" (no, it's historical average)

REDUNDANCY GUIDANCE (v2 round 2 expert fix — STRENGTHENED hard rule):
  Each placement covers DIFFERENT angle, not same content repeated:
    • What Is P2: definitional, explains WHAT opportunity cost is conceptually
    • Result Meaning: interpretive, explains how to read the dollar number
    • FAQ Q4: practical, addresses user's specific "why does this matter" question
  
  HARD RULE (no exceptions):
    Each section MUST express opportunity cost in a different wording AND 
    different angle. Do NOT repeat the same sentence structure or phrasing 
    across sections.
    
    Forbidden patterns:
      ❌ Same opener phrase ("Opportunity cost means...") in 2+ sections
      ❌ Same example numbers ("$92K invested at 7%...") in 2+ sections
      ❌ Same closing qualifier ("past performance doesn't guarantee...") 
         used identically in 2+ sections
    
    If the same idea must appear in 2+ sections, REPHRASE meaningfully.
    Reuse facts, not language.
```

---

## TITLE (hardcoded fallback)

```
MANDATORY — use exact fallback string below, no exceptions:

TITLE: Rent vs Buy Calculator — Break-Even Year + Net Wealth | RealCalc
(verified 60 characters — well under 70-char Google cutoff)

SIMPLIFIED RULE: ALWAYS use the fallback. Do NOT generate custom title.

Rationale: pre-verified 60 chars, contains primary keyword anchor 
("Rent vs Buy Calculator"), USP markers ("Break-Even Year + Net Wealth" — 
distinguishes from cost-comparison calculators that ignore opportunity cost), 
brand suffix.
```

## META DESCRIPTION

```
MANDATORY — use exact fallback string below:

META: Free Rent vs Buy Calculator. Compare buying a home vs renting with break-even year, net wealth, and opportunity cost analysis. 2026 consumer mortgage rates.

(verified 159 characters — within 150-160 band)

Rationale: primary keyword first, core outputs (break-even + net wealth + 
opportunity cost), audience signal ("buying a home" — primary residence not 
investment), currency marker (2026 rates).
```

## H1

```
MANDATORY — use exact fallback string below:

H1: Rent vs Buy Calculator — Break-Even Year and Net Wealth Comparison

(verified 62 characters)

Rationale: primary keyword in first 3 words, USP triple marker (Break-Even + 
Net Wealth + Comparison).
```

---

## OVERVIEW (4 paragraphs)

```
OVERVIEW_H2: Rent vs Buy Calculator for Primary Residence Decisions
OVERVIEW_SUBTITLE: Compare buying vs renting with break-even year, net wealth, and honest opportunity cost analysis

OVERVIEW_P1 (tight — opener + keyword + brief framing):
  [OVERVIEW_P1 LENGTH RULE:
    - First sentence: ≤ 25-30 words
    - Total paragraph: ≤ 3-4 sentences
    - Word budget: 60-90 words total
   
   Enforce strictly — P1 becomes the SEO hook.]
  
  [3-4 sentences MAX. MUST START with plain-language opening sentence 
   preserving meaning of reference (natural phrasing allowed, not strict verbatim):
   
   Reference opener:
   "The Rent vs Buy Calculator helps homebuyers and renters compare the 
   long-term wealth impact of buying a home vs continuing to rent — 
   accounting for break-even year, opportunity cost, and lifestyle factors."
   
   AFTER the opener: 1-2 sentences with natural SEO keyword variation. 
   Include at least 1 secondary keyword: "should I rent or buy calculator", 
   "rent or buy calculator", or "buying vs renting calculator".
   
   DO NOT include in P1 (moved to P2):
     ❌ Full modes explanation
     ❌ Opportunity cost detailed explanation (in What Is)
     ❌ Lifestyle factors detail (in Mode 3 description)
     ❌ "Not for investment property" disclosure (in P4)
   
   P1 goal: hook + primary keyword + tool purpose. Keep tight.
   
   EXECUTION SIMPLIFICATION: Focus on KEY COMPONENTS only. Write a natural 
   P1 with required components; don't micro-optimize against example variants.]

OVERVIEW_P2 (differentiation + modes):
  [4-5 sentences. Explain:
   - 3 modes: 
     * Mode 1 Standard: basic Buy vs Rent over user-selected hold period
     * Mode 2 Detailed with Opportunity Cost (RECOMMENDED): adds 
       invested down payment growth — most simple calculators skip this
     * Mode 3 Lifestyle Adjusted: weighs mobility, maintenance tolerance, 
       customization desire, stability preference
   - When each mode applies — quick check Mode 1, honest analysis Mode 2,
     non-financial factors Mode 3
   - Core differentiator vs simple rent-vs-buy calculators: opportunity 
     cost as central concept (not afterthought), wealth-based methodology 
     (not cost comparison), lifestyle factors quantified (not ignored)]

OVERVIEW_P3 (v2 round 1 expert fix — user pain points, NOT just workflow description):
  [4-5 sentences. Lead with user-relatable pain points, not tool description:
   
   Example pattern (use as inspiration, not strict template):
   "Common questions this calculator answers:
   • 'I'm not sure I'll stay 5 years — does buying still make sense?'
   • 'Mortgage rates feel high — should I just keep renting?'
   • 'My friends say buying always wins — but is that really true at 
     today's prices?'
   • 'How much am I really losing by renting vs building equity?'
   
   At 6.75% rates with $400K homes and 3% rent increases, simple intuition 
   often misleads. The Break-Even Year calculation removes guesswork — 
   YOUR specific numbers determine YOUR answer."
   
   Address the emotional reality: rent vs buy is one of the most stressful 
   personal finance decisions. User comes here uncertain, often anxious. 
   Tone: empathetic, clarifying, not preachy.
   
   STRONG REFRAMING CLOSE (v2 round 2 expert fix — conversion lift):
   End P3 with a strong reframing sentence that punches:
   "Your intuition is usually wrong here — this calculator shows why."
   
   (Or naturalized variant that preserves the reframing punch: 
    "Most people guess wrong on rent vs buy — the math here will surprise you" 
    or "Generic advice fails here — your specific numbers tell a different story.")
   
   This sentence is the conversion driver. It tells the user: don't trust 
   conventional wisdom, run the calc. Goes BEFORE workflow content moves to P4.
   
   This paragraph replaces previous workflow-description content. Workflow 
   guidance moves to P4 with disclosure.]

OVERVIEW_P4 (workflow + disclosures + CTA — combined):
  [4-5 sentences. MUST contain (REQUIRED EXACT PHRASING):
   - MANDATORY DISCLOSURE (1st of 4 placements).
     Must include explicit phrasing equivalent to:
     "This calculator models a primary residence decision, not investment 
     property purchase."
     
     Full placement example (use as pattern, not strict verbatim):
     "This calculator models a primary residence decision, not investment 
     property purchase. It uses 2026 consumer mortgage rates (~6.75% for 
     30-year fixed) and primary residence down payment defaults (20%). 
     For investment property analysis, use the Mortgage Investment 
     Calculator."
     
   - Brief workflow note: "Run this first to see if buying makes sense at 
     your hold period; if Buy wins, continue with the Mortgage Calculator 
     for payment details."
   - "Projections, not guarantees" framing
   - CTA: "Enter home price, monthly rent, and hold period above to see 
     your projected break-even year and net wealth comparison."]
```
---

## HOW TO USE (5 numbered steps + 4 pro tips + 3 mode explanations)

```
HOW_TO_USE_H2: How to Use the Rent vs Buy Calculator
HOW_TO_USE_SUBTITLE: From home price to projected break-even year

STEP_1:
  TITLE: Enter home price and monthly rent for comparable housing
  BODY: [4-5 sentences:
         - Home Price = purchase price of the home you're considering 
           (or comparable home in target neighborhood)
         - Monthly Rent = current or expected rent for equivalent housing 
           (same beds, same area)
         - Critical: compare LIKE FOR LIKE — same square footage, same 
           neighborhood, same commute. Comparing $400K suburban purchase 
           to $1,500 studio rent isn't apples to apples.
         - MANDATORY DISCLOSURE (2nd of 4 placements): "This calculator 
           models a primary residence decision, not investment property 
           purchase. For investment property analysis, use the Mortgage 
           Investment Calculator."]

STEP_2:
  TITLE: Set your hold period (this drives everything)
  BODY: [4-5 sentences:
         - Hold Period = how long you plan to live in the home
         - Default 7 years (US median tenure)
         - 3-year hold rarely favors buying — transaction costs (3% closing 
           + 7% selling = 10% of home value) eat any equity gains
         - 10+ year holds typically favor buying — rent compounds over time, 
           mortgage payment fixed
         - If unsure, run the calculator at multiple hold periods (5, 7, 10) 
           to see how Break-Even Year shifts]

STEP_3:
  TITLE: Choose mortgage rate, down payment, and loan term
  BODY: [4-5 sentences:
         - Default rate 6.75% reflects 2026 consumer 30-year fixed market
         - Down Payment default 20% (no PMI threshold); can go to 3-5% with 
           PMI applicable on Conventional loans
         - Loan Term default 30 years (most common); 15-year option for faster 
           equity build
         - These differ from investor mortgage defaults (7.5% rate, 25% down 
           for investment properties)
         - Override defaults with your actual lender quote for precision]

STEP_4:
  TITLE: Switch to Mode 2 (Detailed with Opportunity Cost) — RECOMMENDED
  BODY: [5-6 sentences:
         - Click Mode 2 tab — "Detailed (with opportunity cost) — Recommended"
         - This adds the most important comparison element: what your down 
           payment + closing costs could earn invested elsewhere
         - Default Investment Return 7% (S&P 500 historical average)
         - Default Capital Gains Tax 15% (long-term US federal rate)
         - Without opportunity cost, simple calculators understate renting 
           by $100K+ over long holds — this is the central honesty mechanism
         - You'll see 2 wealth lines crossing on the chart — Buy path vs 
           Rent + Invested path]

STEP_5:
  TITLE: Interpret Break-Even Year, Net Wealth, and Status Badge
  BODY: [5-6 sentences:
         - Primary output: Break-Even Year — "Buying creates more net 
           wealth than renting after Year N"
         - Status Badge: GREEN strong buy (break-even ≤ Hold/2), BLUE buy 
           (break-even within Hold), AMBER marginal (break-even just under 
           Hold), RED rent wins (break-even never within Hold)
         - Final Net Wealth (Buy) and Final Net Wealth (Rent) — direct 
           dollar comparison at end of Hold Period
         - Wealth Difference at Year 5 / 10 / 30 — milestones for context
         - Mode 3 layers in lifestyle factors: mobility, maintenance, 
           customization, stability]

PRO_TIP_1:
  [Pattern: pro_tip for hold period sensitivity.
   "Hold Period is the single most powerful variable. Run the calculator 
   at 3 / 7 / 10 / 15 years with same inputs to see Break-Even Year shift 
   dramatically. If you're not sure how long you'll stay, use 7 years 
   (US median) and treat the result as ballpark — actual life events 
   (job changes, family moves) often force shorter holds."]

PRO_TIP_2:
  [Pattern: pro_tip for opportunity cost reality check.
   "The most common error in rent-vs-buy thinking is forgetting opportunity 
   cost. A $100K down payment isn't 'free' — invested at 7% over 7 years, 
   it grows to ~$160K (after-tax ~$150K). Mode 2 captures this. If you'd 
   actually spend the down payment money on lifestyle instead of investing, 
   Mode 1 may be more realistic for you — but most users underestimate 
   how much they could invest."]

PRO_TIP_3:
  [Pattern: pro_tip for transaction costs.
   "Closing costs (3%) and selling costs (7%) total 10% of home value 
   in transaction friction. On a $400K home that's $40K — equivalent to 
   ~13 months of $3,000/mo rent. Short holds amplify this drag; 
   long holds amortize it. Don't underestimate transaction costs in 
   your hold-period assumption."]

PRO_TIP_4:
  [Pattern: pro_tip for lifestyle vs financial.
   "Mode 3 captures lifestyle factors but they're inherently subjective. 
   If you score Mobility 9/10 and Stability 2/10, Mode 3 will lean rent 
   even when finances favor buy. That's a feature, not a bug — buying 
   a home you'll regret in 3 years often costs more financially AND 
   emotionally than renting flexibly. Trust the lifestyle override when 
   it speaks loudly."]

HOW_TO_USE_MODES_H3: Choosing the Right Mode

MODE_STANDARD:
  TITLE: Mode 1 — Standard Comparison (default, slate)
  USE_WHEN: You want a quick basic Buy vs Rent comparison without modeling 
            opportunity cost
  OUTPUT: Break-Even Year + lifetime cost comparison + monthly cost breakdown
  CAVEAT: Mode 1 ignores the most important variable for honest comparison. 
          For credible analysis, switch to Mode 2.

MODE_DETAILED:
  TITLE: Mode 2 — Detailed with Opportunity Cost (sky) — RECOMMENDED
  USE_WHEN: You want an honest wealth-based comparison that treats your 
            down payment as if it could earn investment returns
  OUTPUT: Mode 1 outputs PLUS Net Wealth Difference at Year 5/10/30, 
          opportunity cost dollar value, after-tax investment growth
  UNIQUE: Most simple rent-vs-buy calculators skip opportunity cost.

MODE_LIFESTYLE:
  TITLE: Mode 3 — Lifestyle Adjusted (warm gray, advanced)
  USE_WHEN: You want non-financial factors (mobility, maintenance, 
            customization, stability) weighted into the recommendation
  OUTPUT: Mode 2 outputs PLUS Lifestyle Score, weighted recommendation, 
          radar chart visualization
  CAVEAT: Lifestyle factors are inherently subjective. Calculator is 
          illustrative, not prescriptive.
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
      - Home Price (from listing or appraisal)
      - Monthly Rent for comparable housing
      - Hold Period years (default 7, options 3/5/7/10/15/30)
      - Mortgage Rate % (default 6.75% — 2026 consumer)
      - Down Payment % (default 20%)
   
   2. BUY SCENARIO (auto-collapsed if defaults OK):
      - Loan Term (default 30 years, options 15/20/30)
      - Annual Property Tax (default 1.2%, toggleable absolute or %)
      - Annual Home Insurance (default $1,500)
      - HOA Fees monthly (default 0)
      - Home Appreciation % (default 3.5%)
      - Annual Maintenance % (default 1.5%)
      - Closing Costs % (default 3%)
      - Selling Costs % (default 7%)
      - PMI Rate % (default 0.6 if down < 20%)
   
   3. RENT SCENARIO:
      - Annual Rent Increase % (default 3%)
      - Renter's Insurance (default $200/year)
      - Security Deposit (default 1 month, recovered at end)
   
   4. MODE 2 ADDITIONAL (Opportunity Cost):
      - Investment Return % (default 7% — S&P 500 historical)
      - Tax Rate on Investment (default 15% — long-term capital gains)
   
   5. MODE 3 ADDITIONAL (Lifestyle, 1-10 scales):
      - Mobility importance (default 5)
      - Maintenance tolerance (default 5)
      - Customization desire (default 5)
      - Stability preference (default 5)
   
   6. ADVANCED (collapsible):
      - Marginal Tax Bracket (default 24% federal)
      - State Income Tax (default 5%)
      - Itemize Deductions (auto-detect, with override)
      - Filing Status (default Married)
   
   Placeholders: "Enter home price" NOT "e.g., 400000".]

OUTPUTS_TABLE:
  [Render as markdown table. 3 columns: Output | Formula | Purpose.
   
   PRIMARY METRIC:
   - Break-Even Year: first year buying creates more Net Wealth than renting
     (per RIS persistent crossing definition)
   
   SECONDARY METRICS:
   - Final Net Wealth (Buy): Home Value − Loan Balance − Cumulative Costs 
     + Accumulated Savings (if invested, Mode 2)
   - Final Net Wealth (Rent): Investment Value − Cumulative Rent
   - Wealth Difference at Hold End: Buy Net Wealth − Rent Net Wealth
   - Wealth Difference at Year 5 / 10 / 30: milestone snapshots
   - Monthly Buy Cost: PITI + Maintenance + HOA
   - Monthly Rent Cost: Rent + Renter's Insurance
   - Initial Capital Required (Buy): Down + Closing
   - Initial Capital Required (Rent): Security Deposit + First Month
   
   MODE 2 INVESTOR-VIEW:
   - Opportunity Cost: invested down payment growth, after-tax
   - After-Tax Investment Value at Year N
   
   MODE 3 LIFESTYLE:
   - Lifestyle Score (range −10 to +30)
   - Weighted Recommendation: financial OR lifestyle override
   
   For Break-Even Year row, purpose column MUST clarify: "First year buying 
   creates MORE NET WEALTH than renting AND remains so through Hold Period."
   
   For Final Net Wealth rows, purpose column MUST clarify: "Net Wealth = 
   assets minus liabilities. NOT the same as Net Cost."]
```

---

## FORMULA (Net Wealth methodology + opportunity cost + worked example)

**FORMULA SECTION RULES (prevents RIS duplication):**

```
GOAL: Explain the methodology clearly to end users. NOT to replicate the RIS engine.

MUST INCLUDE (never drop):
  1. Net Wealth methodology for both Buy and Rent paths (corrected per v2 round 2)
  2. Opportunity Cost formula (Mode 2 key insight)
  3. ONE worked example with realistic numbers

SHOULD INCLUDE (if space allows):
  4. Break-Even Year persistent crossing definition
  5. ONE alternative scenario

MUST NOT INCLUDE:
  ❌ Full RIS calculation engine logic
  ❌ Tax deduction edge cases (SALT cap, $750K limit) — those in Limitations
  ❌ PMI auto-cancel modeling details — too granular for SEO

LENGTH GUARD:
  Maximum FORMULA section length: 500-550 words total.
  If exceeded → keep Net Wealth methodology + opportunity cost + one example.

FORMULA ACCURACY LOCK:
  All formulas must match RIS exactly (per RIS PRIORITY RULE).
  No reordering terms, no variable renaming, no simplification.
  If unsure → keep verbatim from RIS.
```

```
FORMULA_H2: How the Rent vs Buy Calculator Works
FORMULA_SUBTITLE: Net Wealth methodology with opportunity cost — wealth-based, not cost-based

FORMULA_INTRO_BOX:
  "The Rent vs Buy Calculator compares two wealth-building paths over your 
   chosen Hold Period: buying a home (which builds equity through appreciation 
   and amortization) vs renting + investing (which builds wealth through 
   compounded investment returns on the capital you would have used as a 
   down payment). Both paths are evaluated as Net Wealth (assets minus 
   liabilities), not just cost — this is the fundamental honesty mechanism. 
   Mode 2 (recommended) includes opportunity cost; Mode 1 omits it for 
   simpler analysis."

STEP_BY_STEP (canonical formulas, high-level):

  Buy Path Net Wealth at Year t:
    Net Wealth (Buy)_t = Home Value_t − Loan Balance_t 
                       − Cumulative After-Tax Costs_t
                       + Accumulated Savings from Lower Housing Cost_t
                          (ONLY if Buy monthly cost < Rent monthly cost,
                           otherwise = 0)
                          (Mode 2 only; Mode 1 sets to 0 always)
    
    where Home Value_t = Home Price × (1 + Appreciation)^t
          Equity_t = Home Value_t − Loan Balance_t
    
    EXPLICIT CONDITION (v2 round 2 expert fix — prevents LLM ambiguity):
      Accumulated Savings_t > 0 ⟺ Buy Monthly Cost < Rent Monthly Cost
      Otherwise Accumulated Savings_t = 0
      
      In the typical scenario (Buy Monthly Cost > Rent Monthly Cost), this 
      term is 0 — the renter is the one with extra cash flow to invest, 
      captured in Renter Investment Value below.
  
  Rent Path Net Wealth at Year t:
    Net Wealth (Rent)_t = Renter Investment Value_t 
                        − Cumulative Rent + Insurance_t
    
    where Renter Investment Value_t (Mode 2 only) =
        Initial Capital Difference (Buy − Rent upfront amounts)
      + Accumulated annual cash flow differences 
        (renter's monthly savings when rent < buy cost),
      both compounded at the investment return rate, 
      after capital gains tax
    
    [Mode 1 sets Renter Investment Value to 0 — opportunity cost ignored]
  
  IMPORTANT (v2 round 1 expert fix — sync with RIS):
    Mode 2 invests TWO streams: Initial Capital Difference (lump sum from 
    not buying) AND ongoing monthly cash flow differences (whichever party 
    has lower monthly cost saves the difference). Only ONE of the two parties
    saves cash flow each month — never both simultaneously. This symmetric treatment 
    is essential for honest comparison — Mode 1's lump-sum-only approach 
    biases results.
  
  Break-Even Year (persistent crossing — v2 round 2 expert fix — clarified reference):
    First year t where Net Wealth (Buy)_t ≥ Net Wealth (Rent)_t
    AND Net Wealth (Buy) remains higher than Net Wealth (Rent) for all 
        future years within Hold Period
    
    (Compare Buy wealth vs Rent wealth — NOT compared against zero.
     The "remains higher" condition prevents transient crossings from 
     producing flickery Break-Even values.)
    
    If never persistent within Hold Period → display "Renting Wins"
  
  Wealth Difference at Year t = Net Wealth (Buy)_t − Net Wealth (Rent)_t

KEY USER-FACING RULES (4 items):
  - Both paths evaluated as wealth (NOT cost) for honest comparison
  - Mode 2 opportunity cost is critical — Mode 1 omits it for simplicity
  - Mode 2 invests BOTH initial capital difference AND ongoing cash flow 
    differences (symmetric treatment)
  - Break-Even must be persistent (stable across years), not transient flicker

FORMULA_EXAMPLE (v2 round 1 expert fix — simplified for clarity, not bogus precision):
  Location:        Generic US suburban (national averages)
  Context:         Mid-range home, 7-year hold (most common scenario)

  STRICT NUMERIC RANGES:
    Home Price:           $400,000
    Monthly Rent:         $2,500
    Hold Period:          7 years
    Mortgage Rate:        6.75%
    Down Payment:         20%
    Loan Term:            30 years
    Property Tax:         1.2%
    Annual Maintenance:   1.5%
    Closing Costs:        3%
    Selling Costs:        7%
    Annual Rent Increase: 3%
    Investment Return:    7% (Mode 2)

  EXPECTED OUTPUTS (anchored to RIS Test 1 — see RIS for full numerical detail):
    
    Mode 1 (no opportunity cost):
      Monthly P&I:           ~$2,076
      Monthly PITI + maint:  ~$3,200
      Year 7 Home Value:     ~$508K (3.5% appreciation × 7 years)
      Year 7 Equity:         ~$225K (Home Value − amortized Loan Balance)
      Break-Even:            ~Year 6 (Buy edges out by Year 7)
      Status:                BLUE "Buying Favored"
    
    Mode 2 (adds opportunity cost on Initial Capital + cash flow differences):
      Initial Capital (Buy): $80K down + $12K closing = $92K
      Renter's invested $92K compounded at 7% over 7 years (after 15% capital 
      gains tax) grows substantially — see RIS for exact projection.
      
      Mode 2 Break-Even shifts compared to Mode 1 (typically pushed slightly 
      later, or in some scenarios renting wins entirely)
      
      For exact numerical outputs at these inputs, refer to RIS Test 1 
      acceptance values.

  KEY INSIGHT FROM EXAMPLE (v2 round 1 expert fix — qualitative, not bogus precision):
    Mode 2 with opportunity cost typically pushes Break-Even later than Mode 1
    by 1-3 years — sometimes flipping the answer entirely from "Buy wins" 
    to "Rent wins."
    
    Why does Buy still often win at 7-year holds despite opportunity cost?
    Buyer's equity grows from BOTH appreciation AND loan amortization (both
    leveraged on the full home value, not just down payment).
    
    Why does Rent sometimes win?
    Higher mortgage rates (7%+), lower appreciation (<2%), or higher 
    investment returns (>9%) tip the balance toward renting.
    
    BUT: hold period and assumptions drive everything. Run YOUR specific 
    inputs in the calculator above for accurate projection.

  EXECUTION NOTE (v2 round 1 expert fix — synced with RIS):
    When writing this worked example in generated content:
      ✓ Show qualitative Mode 1 vs Mode 2 difference
      ✓ Reference RIS test cases for exact numerical outputs (don't 
        re-derive precise numbers in SEO copy)
      ✓ Emphasize methodological difference (cost vs wealth, with vs 
        without opportunity cost)
      ✓ Avoid forbidden terminology (no "guaranteed", no "easy", no 
        investor metrics)
      ✓ Stay user-understandable — don't expand into RIS engine logic
      ✓ For exact computed values, defer to live calculator output
  
  HARD LOCK (v2 round 2 expert fix — prevents LLM hallucinating numbers):
    Do NOT derive exact numerical outputs in the FORMULA_EXAMPLE section.
    Refer to live calculator results or RIS test cases for precise values.
    
    If tempted to write things like "Net Wealth Year 7 = $237,491" —
    STOP. Use ranges, qualitative descriptions, or "see RIS Test 1" 
    references instead.
```

---

## WHAT IS (3 paragraphs)

```
WHAT_IS_H2: What Rent vs Buy Analysis Actually Compares
WHAT_IS_SUBTITLE: Wealth-building paths, opportunity cost, and 2026 market context

WHAT_IS_P1:
  [4-5 sentences. Frame the comparison:
   - Rent vs Buy is fundamentally a comparison of two wealth-building paths 
     over time, not a one-time cost comparison
   - Buying builds wealth through home equity (appreciation + loan paydown)
   - Renting builds wealth through investing the capital you would have used 
     for down payment + closing costs
   - The honest question isn't "which is cheaper monthly" but "which leaves 
     me with more net wealth after my chosen hold period"
   - Most simple calculators ignore the second path — that's the central 
     methodological flaw they have]

WHAT_IS_P2:
  [4-5 sentences. Opportunity cost central concept (per OPPORTUNITY COST 
   STRICT RULE):
   - Money used for down payment + closing costs could earn investment 
     returns instead — typically 7% annual S&P 500 historical average 
     (after-tax ~5%)
   - On a $400K home with 20% down + 3% closing, that's $92K of capital 
     locked in the home; invested at 7% over 7 years it grows to ~$148K 
     pre-tax, ~$140K after capital gains tax
   - Most simple rent-vs-buy calculators ignore this, making buying look 
     ~$50K-$100K better than honest comparison shows over typical 7-year 
     holds
   - Mode 2 (recommended) includes opportunity cost; Mode 1 omits it for 
     simpler comparison
   - Investment returns vary; past performance doesn't guarantee future 
     results, but historical average gives a reasonable planning baseline]

WHAT_IS_P3:
  [4-5 sentences. 2026 rate environment context:
   - 2026 consumer mortgage rates average ~6.75% for 30-year fixed (primary 
     residence) — investor rates 0.75-1.5pp higher
   - Compares to 3-4% rates pre-2022 (cheap money era) — current environment 
     compresses buy-side advantage
   - Rent increases averaged 4-6% in 2022-2024, moderating to 3% in 2025-2026 
     — still meaningful long-term compounding factor
   - Home appreciation expected 3-4% nationally; varies enormously by 
     metro (Sunbelt 5-7%, Rust Belt 1-2%)
   - Use the calculator's Conservative scenario to stress-test against rate 
     stays high or appreciation disappoints]
```

---

## RESULT MEANING (Break-Even tiers + Net Wealth interpretation + lifestyle factors + KEY INSIGHT)

```
RESULT_MEANING_H2: What Your Break-Even Year and Net Wealth Mean
RESULT_MEANING_SUBTITLE: Interpreting the primary metric, status badge, and lifestyle factors

RESULT_INTRO:
  [2-3 sentences. Frame: Break-Even Year is the headline; Net Wealth 
   comparison provides depth; lifestyle factors capture what numbers can't.]

BREAK_EVEN_TIERS:
  TITLE: Status Badge tiers (based on Break-Even vs Hold Period)
  BODY: [Bullet list:
         - Break-Even ≤ Hold Period / 2 (e.g., Year 3 of 7-year hold): 
           GREEN "Buying Strongly Favored" — rare in 2026 environment, 
           usually requires high appreciation + low rates
         - Break-Even between Hold/2 and Hold (e.g., Year 5 of 7): 
           BLUE "Buying Favored" — most common positive outcome
         - Break-Even just under Hold (Year 6-7 of 7): 
           AMBER "Marginal — Lifestyle Factors Decide" — financial near-tie, 
           non-financial considerations may dominate
         - Break-Even never within Hold: RED "Renting Favored at These 
           Assumptions" — common with short holds, high rates, low 
           appreciation, or strong investment returns]

NET_WEALTH_INTERPRETATION:
  TITLE: Final Net Wealth — what the dollar amounts mean
  BODY: [3-4 sentences:
         - Final Net Wealth (Buy) = Home Value at sale − Loan Balance 
           − Cumulative After-Tax Costs + Accumulated Savings (if invested, Mode 2)
         - Final Net Wealth (Rent) = After-Tax Investment Value 
           − Cumulative Rent
         - Wealth Difference at Year N = Buy − Rent
         - Both numbers can be negative (paying for housing isn't free); 
           the question is which path leaves you LESS negative or more 
           positive at end of hold]

OPPORTUNITY_COST_INTERPRETATION:
  TITLE: Why Mode 2 Opportunity Cost Matters
  BODY: [3-4 sentences (per OPPORTUNITY COST STRICT RULE):
         - Money used for down payment + closing costs could earn 
           investment returns instead
         - Most simple rent-vs-buy calculators ignore this, making buying 
           look better than honest comparison shows
         - Default assumption 7% S&P 500 historical average (after-tax ~5%); 
           user can adjust
         - Investment returns vary; past performance doesn't guarantee 
           future results — use Conservative scenario to stress-test]

LIFESTYLE_FACTORS_INTERPRETATION:
  TITLE: Mode 3 Lifestyle Adjustment — when subjectivity matters
  BODY: [3-4 sentences:
         - Mode 3 weights 4 lifestyle factors: Mobility (higher = rent 
           favored), Maintenance Tolerance (higher = buy favored), 
           Customization Desire (higher = buy favored), Stability 
           Preference (higher = buy favored)
         - Lifestyle Score range: −10 to +30
         - Override logic: if Mode 3 score strongly disagrees with 
           financial recommendation, calculator flags the mismatch — 
           user decides which weight to trust
         - Calculator can't quantify school district quality, family 
           proximity, neighborhood preference, or emotional attachment]

RESULT_CONTEXT_2026:
  TITLE: 2026 Rent vs Buy Market Context
  BODY: [4-5 sentences:
         - Higher rates compress buy-side advantage vs 2018-2021 
           ultra-low-rate era
         - Many homes that "obviously" favored buying at 3% rates now 
           show marginal or rent-favored outcomes at 6.75%
         - Renting + investing at 7% has become competitive for hold 
           periods under 10 years
         - Buy-side recovers strongly at 10+ year holds (rent compounds 
           faster than expected)
         - Stress-test with Conservative scenario before committing — 
           rates and appreciation are uncertain]
```

---

## BENCHMARKS (typical break-even by hold + cost ranges + appreciation rates)

```
BENCHMARKS_H2: Rent vs Buy Benchmarks for 2026
BENCHMARKS_SUBTITLE: Typical break-even ranges, cost benchmarks, and market context

BENCHMARKS_INTRO:
  [2-3 sentences. Frame: illustrative patterns, not measured data. 
   Individual results depend heavily on specific market, rates, and 
   personal assumptions.]

BENCHMARKS_BREAK_EVEN_BY_HOLD:
  TITLE: Typical Break-Even Year by Hold Period (2026 environment)
  BODY: [Structured list:
         - 3-year hold: Buy rarely wins (transaction costs ~10% of home 
           value crush short-hold ROI)
         - 5-year hold: Buy wins in ~30-40% of scenarios (favorable 
           markets only)
         - 7-year hold: Buy wins in ~55-65% of scenarios (US median, 
           middle of bell curve)
         - 10-year hold: Buy wins in ~75-85% of scenarios
         - 15+ year hold: Buy wins in ~90%+ of scenarios (rent compounding 
           dominates)
         
         These are rough patterns — your specific market, rate, and 
         opportunity cost assumptions can shift outcomes significantly.]

BENCHMARKS_MONTHLY_COST_RANGES:
  TITLE: Typical Monthly Cost Ranges (2026 US suburban)
  BODY: [Bullet list:
         - $300K home, 20% down, 6.75%: ~$2,000-$2,200 PITI + maintenance
         - $400K home, 20% down, 6.75%: ~$2,700-$2,950 PITI + maintenance
         - $500K home, 20% down, 6.75%: ~$3,400-$3,700 PITI + maintenance
         - $700K home, 20% down, 6.75%: ~$4,800-$5,200 PITI + maintenance
         
         Maintenance scales with home value (~1.5%/year). High-tax states 
         (TX, NJ, IL): add $300-$700/mo to PITI from property taxes.]

BENCHMARKS_APPRECIATION:
  TITLE: Long-term Home Appreciation Expectations
  BODY: [Bullet list:
         - National long-term average: ~3-4% nominal annually
         - Sunbelt strong markets (Austin, Tampa, Phoenix): 4-7%
         - Rust Belt and slow-growth markets: 1-2%
         - Coastal supply-constrained (SF, Boston, NYC): 4-6% but volatile
         - Default 3.5% used by calculator — adjust by your specific market]

BENCHMARKS_INVESTMENT_RETURNS:
  TITLE: Long-term Investment Return Assumptions
  BODY: [Bullet list:
         - S&P 500 historical (1928-2025): ~10% nominal, ~7% real (after 
           inflation)
         - Conservative balanced portfolio (60/40): ~6-7% nominal
         - Bond-heavy retiree portfolio: ~3-5% nominal
         - Calculator default 7% reflects S&P 500 nominal — adjust if 
           your actual investment strategy differs]

BENCHMARKS_DISCLAIMER:
  "These ranges are illustrative patterns for typical 2026 US markets, NOT 
   measured statistical datasets, NOT predictions for your specific scenario. 
   Rates, appreciation, rent growth, and investment returns vary by market 
   and time period. The calculator's output on YOUR inputs always takes 
   precedence over these aggregate expectations. For market-specific data, 
   consult Zillow, Redfin, or local realty associations."
```
---

## STRATEGY (5 user-type blocks)

```
STRATEGY_H2: Rent vs Buy Decision by User Type
STRATEGY_SUBTITLE: Different life stages call for different analysis

STRATEGY_FIRST_TIME:
  TITLE: First-Time Buyer (no current home)
  BODY: [3-4 sentences:
         - Use Mode 2 with realistic 7% investment return — most first-time 
           buyers underestimate opportunity cost
         - Hold Period: be honest about likely tenure (job changes, family 
           planning) — 5-7 years is realistic for most first-timers
         - Status Badge AMBER or GREEN suggests buying makes financial sense; 
           RED suggests waiting/saving more
         - Cross-link: if Buy wins, run Mortgage Calculator for actual 
           payment details with consumer rates]

STRATEGY_CAREER_MOVER:
  TITLE: Career Mover (frequent relocations expected)
  BODY: [3-4 sentences:
         - Hold Period 3-5 years — short holds rarely favor buying due to 
           transaction costs
         - Mode 3 Mobility importance 8-10 — lifestyle override likely 
           confirms rent
         - Renting + investing the down payment can build substantial wealth 
           over career-mover decade
         - Don't buy unless you're confident on 5+ year stay]

STRATEGY_RETIREE:
  TITLE: Retiree (downsizing or aging in place)
  BODY: [3-4 sentences:
         - Hold Period 15-30 years (or "until end of life")
         - Long holds heavily favor buying — rent compounds against fixed 
           income
         - Mode 3 Stability preference 8-10 — confirms buy
         - Consider lower-leverage purchase (15% down + 15-year term) for 
           reduced PITI and faster equity build
         - Cross-link: Mortgage Calculator for payment specifics]

STRATEGY_FAMILY_PLANNER:
  TITLE: Family Planner (kids, schools, stability)
  BODY: [3-4 sentences:
         - Hold Period 10-15 years (school stability matters)
         - Mode 3 Stability 8-10, Customization 7-9 — heavily favors buy
         - School district quality often drives location choice — calculator 
           can't quantify this
         - Buying a home in good school district often financially marginal 
           but lifestyle-strong — Mode 3 captures the trade-off]

STRATEGY_WEALTH_MAXIMIZER:
  TITLE: Wealth Maximizer (optimizing long-term net worth)
  BODY: [3-4 sentences:
         - Run all 3 modes — financial result drives decision
         - Mode 2 with honest 7% investment return is the methodologically 
           correct comparison
         - Hold Period assumption critical — be ruthless about realistic 
           tenure
         - Wealth Maximizer might choose to rent + invest if calculator 
           shows opportunity cost wins
         - Cross-link to Rental Property Calculator if considering 
           investment property as alternative wealth strategy]
```

---

## APPLICATIONS (6 use cases)

```
APPLICATIONS_H2: Common Use Cases
APPLICATIONS_SUBTITLE: When this calculator is the right tool

APPLICATION_1:
  TITLE: First-time homebuyer decision
  BODY: [2-3 sentences. Should I rent another year and save more, or buy 
         now? Calculator shows break-even and net wealth comparison at 
         realistic 2026 rates.]

APPLICATION_2:
  TITLE: Relocation cost analysis
  BODY: [2-3 sentences. Moving to a new city — should I rent first to 
         learn neighborhoods, or buy immediately? Hold Period sensitivity 
         answers this.]

APPLICATION_3:
  TITLE: Career change financial planning
  BODY: [2-3 sentences. Considering job change with relocation risk — 
         calculator shows when buying becomes a financial trap if you 
         move within 3-5 years.]

APPLICATION_4:
  TITLE: Renting vs buying in different markets
  BODY: [2-3 sentences. Compare scenarios across markets (Austin vs 
         Pittsburgh vs San Francisco) by adjusting Home Price, Rent, 
         Appreciation, and Property Tax.]

APPLICATION_5:
  TITLE: Retirement housing decision
  BODY: [2-3 sentences. Downsize and buy smaller home, or sell and rent? 
         Calculator with 15-30 year hold and Stability factor weight 
         clarifies the trade-off.]

APPLICATION_6:
  TITLE: Investor evaluating live-in flip or househack
  BODY: [2-3 sentences. Investor users can use this calculator for 
         primary residence component of analysis, then cross to Mortgage 
         Investment Calculator and Rental Property Calculator for the 
         investment side.]
```

---

## INDUSTRY STANDARDS

```
INDUSTRY_STANDARDS_H2: How This Calculator Aligns with Industry Conventions
INDUSTRY_STANDARDS_SUBTITLE: Methodology, peer comparison, and what we do differently

INDUSTRY_METHODOLOGY:
  TITLE: Standard rent vs buy methodology
  BODY: [4-5 sentences:
         - Industry standard: compare cumulative cost of buying vs 
           cumulative rent over hold period
         - This is INSUFFICIENT — ignores opportunity cost of down payment
         - Better methodology (used here): compare Net Wealth (assets 
           minus liabilities) of both paths
         - NYT Rent vs Buy Calculator (canonical example) uses 
           wealth-based comparison; many simpler tools don't
         - This calculator follows wealth-based methodology with explicit 
           opportunity cost in Mode 2]

INDUSTRY_TRANSACTION_COSTS:
  TITLE: Transaction cost conventions
  BODY: [4-5 sentences:
         - Closing costs (buyer side) typically 2-4% of home price 
           (calculator default 3%)
         - Selling costs typically 6-8% (5-6% realtor + 1-2% transfer/prep) 
           — calculator default 7%
         - Many simple calculators ignore selling costs entirely — major 
           error for short holds
         - Combined transaction costs of ~10% on a $400K home equals ~13 
           months of $3,000/mo rent
         - This calculator includes both buy- and sell-side transaction 
           costs by default]

INDUSTRY_PEER_COMPARISON:
  TITLE: How this differs from NYT, Bankrate, or Zillow rent-vs-buy tools
  BODY: [4-5 sentences:
         - NYT calculator: excellent methodology, wealth-based, but 
           lacks lifestyle factor option
         - Bankrate / Zillow: tend toward cost-based comparison, often 
           ignore opportunity cost
         - Reddit /r/personalfinance "rent vs buy" calculators: often 
           skip selling costs and PMI
         - RealCalc Rent vs Buy Calculator: unique in (a) Net Wealth 
           methodology with opportunity cost as Mode 2 default, 
           (b) Mode 3 lifestyle factor weighting, (c) persistent 
           Break-Even crossing detection (no flicker), (d) cross-calc 
           invariant with Mortgage Investment Calculator, (e) audience 
           redirect for investor users]

INDUSTRY_DISCLAIMER:
  "These comparisons describe market positioning, not endorsements. 
   Multiple quality calculators exist. This calculator's approach 
   emphasizes wealth-based methodology over cost comparison and treats 
   opportunity cost as central."
```

---

## LIMITATIONS (6 items + When Not to Use)

**LIMITATIONS CONCISENESS RULE:** Each limitation max 4 sentences. More detail → FAQ.

```
LIMITATIONS_H2: Limitations of This Calculator
LIMITATIONS_SUBTITLE: What this calculator cannot tell you

LIMITATION_1:
  TITLE: Cannot model lifestyle factors completely
  BODY: [3-4 sentences. MANDATORY DISCLOSURE (3rd of 4 placements):
         - This calculator models a primary residence decision, not 
           investment property purchase
         - Mode 3 captures 4 lifestyle dimensions (mobility, maintenance, 
           customization, stability) but cannot quantify school quality, 
           neighborhood preference, family proximity, emotional attachment, 
           or identity factors
         - Lifestyle Score is illustrative, not prescriptive
         - For investment property analysis, use the Mortgage Investment 
           Calculator]

LIMITATION_2:
  TITLE: Investment returns are projections, not guarantees
  BODY: [3-4 sentences:
         - Default 7% S&P 500 historical average (1928-2025); past performance 
           doesn't guarantee future results
         - Sequence of returns matters in real life — early losses hurt more 
           than late losses
         - Tax treatment varies by account type (401k, IRA, brokerage)
         - Use Conservative scenario (5-6% return) for stress-testing]

LIMITATION_3:
  TITLE: Tax deduction logic is simplified
  BODY: [3-4 sentences:
         - Default applies marginal rate × mortgage interest; advanced toggle 
           handles SALT cap ($10K), $750K loan limit, and standard vs 
           itemized comparison
         - State-specific rules (CA SALT bypass, etc.) not modeled
         - Tax law subject to change (TCJA provisions expire 2025)
         - Consult CPA for actual tax projections]

LIMITATION_4:
  TITLE: Local market dynamics not captured
  BODY: [3-4 sentences:
         - Default appreciation 3.5% is national long-term average
         - Local markets vary 1-7%+ — adjust input by your specific metro
         - Job market, demographics, climate change impacts not modeled
         - Use Conservative scenario for stress-testing if uncertain about 
           local conditions]

LIMITATION_5:
  TITLE: PMI auto-cancellation is approximate
  BODY: [3-4 sentences:
         - Calculator models PMI cancellation at 78% LTV based on 
           amortization schedule
         - Actual cancellation depends on appraisal at request, lender 
           policy, original LTV
         - Some loans (FHA) require refi to drop MIP — not Conventional 
           PMI behavior
         - For specific loan, consult servicer]

LIMITATION_6:
  TITLE: Not a substitute for professional advice
  BODY: [3-4 sentences:
         - Educational tool for primary residence decision-making
         - Before committing: mortgage broker for actual rate quotes, 
           financial planner for full wealth analysis, attorney for 
           contracts
         - "Not investment advice" disclaimer applies
         - Projections based on your inputs, not guarantees of outcomes]

WHEN_NOT_TO_USE_H3: When Not to Use This Calculator
WHEN_NOT_TO_USE_LIST:
  - "Investment property analysis (rentals, flips): use Mortgage Investment 
     Calculator with investor rates"
  - "Commercial real estate: use commercial calculator with different 
     financing structures"
  - "Lease vs buy for cars/equipment: this is for housing only"
  - "Quick comparison without methodology rigor: simpler online tools 
     exist (but skip opportunity cost)"
  - "Specific tax planning: consult CPA — calculator's tax logic is 
     simplified"
  - "Regional housing trend forecasting: use local market data (Zillow, 
     Redfin, local realty)"
```

---

## COMMON MISTAKES (5 items)

```
COMMON_MISTAKES_H2: Common Mistakes in Rent vs Buy Analysis
COMMON_MISTAKES_SUBTITLE: Avoid these five errors

MISTAKE_1:
  TITLE: Ignoring opportunity cost
  BODY: [2-3 sentences. The most common error — assuming the down payment 
         is "free" because you'd spend it on a home anyway. In reality, 
         that capital invested at 7% over 7 years could grow to ~$140K 
         from a $92K starting point. This calculator's Mode 2 handles 
         this honestly.]

MISTAKE_2:
  TITLE: Underestimating transaction costs
  BODY: [2-3 sentences. Closing (3%) + selling (7%) = 10% of home value 
         in friction. On $400K that's $40K. Many simple calculators ignore 
         selling costs entirely, making short holds look much better than 
         reality.]

MISTAKE_3:
  TITLE: Confusing monthly cost with wealth comparison
  BODY: [2-3 sentences. "My mortgage payment is the same as rent" doesn't 
         mean buying = renting. Buying builds equity (wealth-positive), 
         renting doesn't (rent is pure consumption). Wealth comparison 
         (Net Wealth methodology) captures this honestly.]

MISTAKE_4:
  TITLE: Underestimating maintenance
  BODY: [2-3 sentences. Default 1.5% of home value/year = $6K on $400K. 
         Many homeowners underestimate by 50%+ — actual long-term 
         maintenance averages closer to 2-3% (roof, HVAC, plumbing). 
         Don't zero out maintenance.]

MISTAKE_5:
  TITLE: Assuming you'll stay 30 years
  BODY: [2-3 sentences. US median home tenure is 7-13 years (varies by 
         metro). Your 30-year financial plan probably won't survive job 
         changes, family changes, lifestyle shifts. Use a realistic 
         hold period — 7 years for most users.]
```

---

## FAQ (9 Q&A)

```
FAQ_H2: Frequently Asked Questions
FAQ_SUBTITLE: Common questions about rent vs buy decisions

FAQ_Q1: Is this calculator for investment property or primary residence?
FAQ_A1: [4-5 sentences. MANDATORY DISCLOSURE (4th of 4 placements):
        This calculator models a primary residence decision, not investment 
        property purchase. It uses 2026 consumer mortgage rates (~6.75%) 
        and primary residence down payment defaults (20%). For investment 
        property analysis (rentals, flips, househacks), use the Mortgage 
        Investment Calculator with investor rates. Real estate investors 
        evaluating live-in flips can use both calculators in sequence.]

FAQ_Q2: Should I rent or buy in 2026?
FAQ_A2: [4-5 sentences. The honest answer: it depends on your hold period, 
        local market, and personal financial situation. At 6.75% rates 
        with 3.5% appreciation and 7% investment return assumption, buying 
        typically wins after 6-8 years; rents often win for shorter holds. 
        Run the calculator with YOUR specific inputs — generic advice is 
        often wrong for specific situations.]

FAQ_Q3: What is "Break-Even Year" exactly?
FAQ_A3: [4-5 sentences. The first year buying creates more Net Wealth than 
        renting — AND remains so through the rest of your hold period 
        (persistent crossing). Net Wealth = home equity + invested savings 
        − cumulative housing costs. If your hold is 10 years and Break-Even 
        is Year 6, you have 4 years of buying-favored wealth accumulation. 
        If Break-Even is "never within hold," renting wins at your 
        assumptions.]

FAQ_Q4: Why does Mode 2 (with opportunity cost) matter so much?
FAQ_A4: [4-5 sentences. Most simple calculators ignore opportunity cost — 
        what your down payment + closing costs could earn invested elsewhere. 
        On a $400K home with 20% down + 3% closing, that's $92K of capital 
        locked in the home; invested at 7% over 7 years it grows to ~$140K 
        after-tax. Mode 1 ignores this; Mode 2 includes it. Mode 2 is the 
        methodologically correct comparison; Mode 1 is simpler but biased 
        toward buying.]

FAQ_Q5: What hold period should I assume?
FAQ_A5: [3-4 sentences. US median home tenure is 7-13 years. Use 7 years 
        as default if uncertain (median, middle of bell curve). Adjust 
        shorter (3-5 years) if career mobility is high; longer (10+ years) 
        if you have school-age kids or are retiree. Hold Period drives 
        everything — too-optimistic assumption is the #1 user error.]

FAQ_Q6: How accurate are the opportunity cost assumptions?
FAQ_A6: [4-5 sentences. Default 7% S&P 500 historical average (1928-2025) 
        is reasonable planning baseline but not guarantee. Real returns 
        vary year-to-year, sequence of returns matters, and tax treatment 
        depends on account type (taxable brokerage vs 401k vs IRA). The 
        calculator uses simplified after-tax compounding. For precise 
        retirement planning, consult a fee-only financial advisor.]

FAQ_Q7: Does the calculator handle PMI?
FAQ_A7: [4-5 sentences. Yes. If Down Payment is below 20% on Conventional 
        loans, PMI is auto-detected at default 0.6% rate. PMI auto-cancels 
        at 78% LTV based on amortization schedule (typically Year 8-12 
        depending on loan terms and home appreciation). Other loan types 
        (FHA MIP, VA funding fee) not modeled in v1. Consult lender for 
        specific loan PMI/MIP behavior.]

FAQ_Q8: What if my appreciation is much higher or lower than 3.5%?
FAQ_A8: [3-4 sentences. Adjust the Home Appreciation input. Sunbelt markets 
        (Austin, Tampa, Phoenix) often see 4-7% historically; Rust Belt 
        and slow-growth markets 1-2%. Your Break-Even Year shifts 
        dramatically with appreciation — a 1pp difference can move 
        Break-Even by 2-3 years. Use Conservative scenario to stress-test.]

FAQ_Q9: Can I save scenarios to compare later?
FAQ_A9: [3-4 sentences. Yes. The Saved Scenarios widget (below the primary 
        metric) lets you save up to 20 scenarios for free, with comparison 
        across all of them via the Compare Real Estate Deals page. Scenarios 
        save your inputs (price, rent, hold period, mode) for re-loading 
        later. Useful for comparing different markets, hold periods, or 
        rate assumptions.]
```

---

## RELATED CALCULATORS

```
RELATED_CALCULATORS_H2: Related Calculators
RELATED_CALCULATORS_SUBTITLE: When you need investor-side analysis instead

RELATED_LIST (4 items — fewer than typical because audience differs):
  - Mortgage Calculator (Investment) — for investment property analysis with 
    investor rates (7.5%) and full PITI + cash flow + DSCR
  - Rental Property Calculator — Year 1 operating cash flow for rental 
    property purchase decisions
  - Compare Real Estate Deals — side-by-side strategy comparison (rental, 
    flip, BRRRR) for investment scenarios
  - Mortgage Calculator (consumer) — coming soon: dedicated primary residence 
    payment calculator with consumer rates and tax deduction details

Note: Rent vs Buy Calculator is primarily for primary residence decisions. 
Most users won't need investor-side calculators unless considering 
househacks or live-in flips.
```

---

## SCHEMA BLOCK (JSON-LD)

```
SCHEMA_TYPE: FinancialProduct + SoftwareApplication

SCHEMA_NAME: Rent vs Buy Calculator
SCHEMA_DESCRIPTION: "Free Rent vs Buy Calculator. Compare buying a home 
                    vs renting with break-even year, net wealth analysis, 
                    and honest opportunity cost. 2026 consumer mortgage rates."

SCHEMA_FEATURE_LIST:
  - Net Wealth methodology (assets minus liabilities, not cost comparison)
  - 3 modes: Standard, Detailed with Opportunity Cost (recommended), 
    Lifestyle Adjusted
  - Break-Even Year calculation with persistent crossing detection
  - Opportunity Cost analysis (invested down payment growth)
  - PMI auto-cancellation modeled at 78% LTV
  - Tax deduction with SALT cap and standard vs itemized logic
  - Wealth comparison at Year 5 / 10 / 30 milestones
  - 4-axis lifestyle radar (mobility, maintenance, customization, stability)
  - 3 sensitivity scenarios (Conservative, Base, Optimistic)
  - Sensitivity tables: Hold Period × Rate, Appreciation × Rent Increase
  - Cross-calculator invariant: P&I matches Mortgage Investment Calculator
  - URL parameter import for shareable scenarios
  - PDF export with wealth crossover chart
  - Saved Scenarios widget (save up to 20 scenarios, compare across calculators)
  - Audience redirect to Mortgage Investment for investor users

SCHEMA_AUDIENCE: US homebuyers, renters, primary residence decision-makers
SCHEMA_PRICE: Free
SCHEMA_OPERATING_SYSTEM: Web browser
```

---

## CRITICAL CHECKS (7 inline items)

Before finalizing, verify these 7 CRITICAL items:

1. [ ] TITLE exact fallback: "Rent vs Buy Calculator — Break-Even Year + Net Wealth | RealCalc" (60 chars)
2. [ ] H1 exact fallback: "Rent vs Buy Calculator — Break-Even Year and Net Wealth Comparison" (62 chars)
3. [ ] META exact fallback (159 chars, primary keyword + Break-Even + Net Wealth + opportunity cost + 2026)
4. [ ] OVERVIEW_P1 opens with plain-language sentence preserving meaning of reference; first sentence ≤ 25-30 words; paragraph ≤ 3-4 sentences, ≤ 90 words
5. [ ] FORMULA uses Net Wealth methodology (corrected per RIS v2 round 2): Buy = Home Value − Loan Balance − Costs + Investment; Rent = Investment − Rent (NO Initial Capital subtraction); matches RIS exactly per FORMULA ACCURACY LOCK
6. [ ] OPPORTUNITY COST STRICT RULE applied: 4 required elements (definition, why it matters, default 7%, qualifier); 3 forbidden simplifications avoided
7. [ ] MANDATORY DISCLOSURE "primary residence decision, not investment property" (or equivalent) in EXACTLY 4 placements: Overview P4, How to Use Step 1, Limitations Item 1, FAQ Q1

**v1 acceptance items (Phase 16-17 lessons applied from start):**
- [x] 2 meta-layers only (PRIORITY EXECUTION + FINAL EXECUTION OVERRIDE)
- [x] RIS PRIORITY RULE at top
- [x] TERMINOLOGY APPLICATION RULE
- [x] FORMULA SECTION RULES + LENGTH GUARD (500-550 words) + ACCURACY LOCK
- [x] OVERVIEW_P1 LENGTH RULE (≤ 25-30 first sentence, ≤ 90 words paragraph)
- [x] MANDATORY DISCLOSURE PLACEMENTS block with 4 explicit locations
- [x] OPPORTUNITY COST STRICT RULE (analogous to DSCR vs Cash Flow STRICT RULE)
- [x] LIMITATIONS CONCISENESS RULE
- [x] FINAL SELF-CHECK anti-drift mechanism
- [x] Saved Scenarios mentioned in Schema features

**v2 round 1 expert fixes (5 items applied — formula sync + UX clarity):**
- [x] **Fix 1 (Critical): Renter Investment Value formula synced with RIS. SEO previously showed only lump-sum compounding `(Down + Closing) × (1 + Return)^t × (1 − Tax)`. Now matches RIS: Initial Capital Difference + accumulated annual cash flow differences, both compounded at investment return rate after capital gains tax. Added KEY USER-FACING RULE 3 about symmetric Mode 2 treatment.**
- [x] **Fix 2 (Critical): FORMULA_EXAMPLE simplified — removed false-precision numbers (e.g., "Net Wealth Year 7 = −$15,000", "Wealth Difference +$77,600"). Replaced with qualitative descriptions anchored to "see RIS Test 1 for exact numerical outputs". Prevents LLM hallucination during generation when re-deriving precise numbers from oversimplified formula.**
- [x] **Fix 3 (Critical): "Buyer Investment Value" terminology renamed throughout to "Accumulated Savings from Lower Housing Cost (if invested, Mode 2)". Old term implied buyer was actively investing money instead of just having lower monthly cost; new term accurately reflects that this only applies when buyer's monthly cost is lower than renter's, and only if those savings are actually invested.**
- [x] **Fix 4 (Medium): REDUNDANCY GUIDANCE added to OPPORTUNITY COST STRICT RULE. The 3 required placements (What Is P2, Result Meaning, FAQ Q4) must each cover different angle: definitional (P2), interpretive (Result Meaning), practical (FAQ). Prevents verbatim repetition that exhausts user attention.**
- [x] **Fix 5 (Medium): OVERVIEW_P3 rewritten with user pain points instead of tool-description workflow content. Now opens with relatable user questions ("I'm not sure I'll stay 5 years", "Mortgage rates feel high", "My friends say buying always wins"). Empathetic tone acknowledges rent vs buy is one of the most stressful personal finance decisions. Workflow content moved to P4 alongside disclosure.**

**v2 round 2 expert fixes (5 items applied — explicit logic + conversion polish):**
- [x] **Fix 1 (Critical): Buy formula condition made EXPLICIT. Previous "only applies when buyer's monthly cost is LOWER" was ambiguous to LLM. Now: "ONLY if Buy monthly cost < Rent monthly cost, otherwise = 0" with separate EXPLICIT CONDITION block clarifying typical scenario (Buy > Rent → savings = 0).**
- [x] **Fix 2 (Critical): Break-Even definition simplified to remove ambiguous "≥ 0" reference. Now: "Net Wealth (Buy) remains higher than Net Wealth (Rent) for all future years within Hold Period". Explicitly noted "Compare Buy wealth vs Rent wealth — NOT compared against zero."**
- [x] **Fix 3 (Medium): HARD LOCK added to FORMULA_EXAMPLE — "Do NOT derive exact numerical outputs. Refer to live calculator results or RIS test cases." Prevents LLM from filling in invented precise numbers like "Net Wealth Year 7 = $237,491" during generation.**
- [x] **Fix 4 (Medium): REDUNDANCY GUIDANCE strengthened with HARD RULE listing 3 forbidden patterns (same opener phrase, same example numbers, same closing qualifier across sections). "Reuse facts, not language."**
- [x] **Fix 5 (Medium): OVERVIEW_P3 STRONG REFRAMING CLOSE added — final sentence "Your intuition is usually wrong here — this calculator shows why" (with naturalized variants). Conversion driver: tells user not to trust conventional wisdom, run the calc.**

**STRICT TERMINOLOGY CONTRACT applied** — see top of prompt for 8 required + 10 forbidden terms.

**Full 45+ item validation checklist available in companion file `rent-vs-buy-seo-validation-prompt.md`**.

---

## FINAL SELF-CHECK (anti-drift, before output)

Before finalizing the SEO content package, verify:

```
1. All 15 sections present?
   TITLE/META/H1 → OVERVIEW → HOW TO USE → INPUTS & OUTPUTS → FORMULA → 
   WHAT IS → RESULT MEANING → BENCHMARKS → STRATEGY → APPLICATIONS → 
   INDUSTRY STANDARDS → LIMITATIONS → COMMON MISTAKES → FAQ → 
   RELATED CALCULATORS + SCHEMA

2. Net Wealth methodology used (NOT cost comparison)?
   Buy: Home Value − Loan Balance − Costs + Investment
   Rent: Investment Value − Cumulative Rent
   (NO Initial Capital subtraction on either path)

3. MANDATORY DISCLOSURE "primary residence decision, not investment property" 
   in 4 target locations?
   Overview P4 / How to Use Step 1 / Limitations Item 1 / FAQ Q1

4. No forbidden terminology?
   No "always buy/rent", "best decision", "cheaper than renting", 
   "Net Cost" as primary, "guaranteed", investor metrics (DSCR, Cap Rate, 
   NOI, Cash-on-Cash), "qualifies for", "easy decision"
```

If any item fails → fix before outputting.

---

**Output only the SEO content package in Markdown. Do not output code. Do not output HTML. Do not output Vue.**

---

**End of SEO v1 → v2 round 1 → v2 round 2 FINAL (current, 2 review rounds, 10 fixes total: 5 critical + 5 medium). Applies all Phase 16-17 architectural lessons from start: 2 meta-layers (PRIORITY + FINAL OVERRIDE), RIS PRIORITY RULE at top, TERMINOLOGY APPLICATION RULE, FORMULA LENGTH GUARD + ACCURACY LOCK, OVERVIEW_P1 LENGTH RULE, MANDATORY DISCLOSURE PLACEMENTS, OPPORTUNITY COST STRICT RULE with REDUNDANCY GUIDANCE (HARD RULE in round 2), FINAL SELF-CHECK anti-drift. v2 round 1 fixes: Renter Investment synced with RIS, worked example simplified, Buyer Investment renamed, redundancy guidance, P3 user pain points. v2 round 2 fixes: explicit condition for Buy savings formula, simplified Break-Even definition, HARD LOCK against derivation in worked example, REDUNDANCY GUIDANCE strengthened with HARD RULE, P3 STRONG REFRAMING CLOSE for conversion. Targets primary residence audience (NOT investor). Pair with rent-vs-buy-ris-prompt-final.md (RIS, 874 lines, 2 rounds, 11 fixes) and rent-vs-buy-seo-validation-prompt.md (validation companion) for full Phase 18 package.**
