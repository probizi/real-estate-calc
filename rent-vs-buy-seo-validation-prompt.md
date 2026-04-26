# SEO Validation Prompt — Rent vs Buy Calculator (companion to rent-vs-buy-seo-prompt-final.md)

You are a senior SEO quality reviewer. Your job is to audit a generated SEO content package for the Rent vs Buy Calculator page against a comprehensive validation checklist.

---

## HOW TO USE THIS FILE

This is a **post-generation validation pass**. The workflow:

1. **Generation pass (first)**: use `rent-vs-buy-seo-prompt-final.md` to generate the SEO content package. That file contains only 7 CRITICAL CHECKS inline — it focuses the LLM on non-negotiable items and avoids checklist attention decay.

2. **Validation pass (this file)**: run this prompt AGAINST the generated draft. Return a structured pass/fail report with specific section references for any failures.

---

## VALIDATION FLEXIBILITY RULE (prevents over-penalizing natural language)

```
If a requirement is technically unmet but the content is clearly correct, 
natural, and SEO-optimized:

  → mark as SOFT PASS, not FAIL

Examples of SOFT PASS scenarios:
  • Required phrase replaced with a natural synonym that conveys the same meaning
  • Exact keyword count slightly off (4 instead of 5) but content reads well
  • Disclosure appears in 3 of 4 specified placements, absent from one where it 
    would have felt forced
  • Structure slightly reorganized for clarity

When to use HARD FAIL:
  • Critical items (1-7): always strict, no SOFT PASS allowed
  • Forbidden terminology present: HARD FAIL (user-facing risk)
  • Canonical formulas absent or wrong: HARD FAIL
  • Missing entire section from 15-section structure: HARD FAIL
  • Net Wealth methodology replaced with cost comparison: HARD FAIL (core product value)
  • Opportunity cost simplified or removed from Mode 2: HARD FAIL
  • Investor terminology used (DSCR, Cap Rate, NOI, Cash-on-Cash): HARD FAIL (wrong audience)

EXCEPTION for CRITICAL item 4 (Overview P1 sentence):
  Natural variation that preserves ALL 6 key components (Rent vs Buy Calculator,
  homebuyers/renters, compare buying vs renting, break-even year, opportunity 
  cost, lifestyle factors) is acceptable. Do NOT require near-verbatim phrasing.
```

---

## VALIDATION INPUT

The generated SEO content package (Markdown) from rent-vs-buy-seo-prompt-final.md.

## VALIDATION OUTPUT

A structured report with 3 sections:

```
## PASS/FAIL SUMMARY
Total checks: 45
Passed: [N]
Soft passes: [N]
Failed: [N]
Critical failures (items 1-7): [N]

## FAILED CHECKS (if any)
For each failed check:
  - Checklist item number
  - Item description
  - Specific location in draft (section/paragraph/line)
  - Suggested fix

## PASSED / SOFT-PASSED CHECKS
Brief confirmation list.
```

---

## FULL VALIDATION CHECKLIST (45 items)

### CRITICAL CHECKS (items 1-7 — also in generation prompt)

1. [ ] TITLE is exact fallback: "Rent vs Buy Calculator — Break-Even Year + Net Wealth | RealCalc" (60 chars).
2. [ ] H1 is exact fallback: "Rent vs Buy Calculator — Break-Even Year and Net Wealth Comparison" (62 chars).
3. [ ] META is exact fallback: "Free Rent vs Buy Calculator. Compare buying a home vs renting with break-even year, net wealth, and opportunity cost analysis. 2026 consumer mortgage rates." (159 chars).
4. [ ] OVERVIEW_P1 opens with sentence preserving meaning of reference. Key components required: "Rent vs Buy Calculator", "homebuyers/renters" (or equivalent audience signal), "compare buying vs renting", "break-even year", "opportunity cost" or "lifestyle factors". First sentence ≤ 25-30 words. Paragraph ≤ 3-4 sentences, ≤ 90 words.
5. [ ] FORMULA section uses Net Wealth methodology (NOT cost comparison): Buy = Home Value − Loan Balance − Costs + Accumulated Savings (with explicit condition); Rent = Investment Value − Rent. Matches RIS exactly per FORMULA ACCURACY LOCK.
6. [ ] Break-Even definition uses persistent crossing (Buy wealth ≥ Rent wealth AND remains higher through Hold Period); NOT compared against zero. OPPORTUNITY COST STRICT RULE applied: 4 required elements present in all 3 placements (What Is P2 + Result Meaning + FAQ Q4) with different wording.
7. [ ] MANDATORY DISCLOSURE "primary residence decision, not investment property" (or equivalent) in EXACTLY 4 placements: Overview P4, How to Use Step 1, Limitations Item 1, FAQ Q1. Max 6 total mentions.

### KEYWORD COVERAGE (items 8-14)

8. [ ] Primary keyword "rent vs buy calculator" appears in OVERVIEW_P1 naturally.
9. [ ] OVERVIEW_P1 contains at least 1 secondary keyword: "should I rent or buy calculator", "rent or buy calculator", or "buying vs renting calculator".
10. [ ] At least 2 H2 headings use primary or secondary keywords (e.g., "Rent vs Buy Benchmarks for 2026", "What Rent vs Buy Analysis Actually Compares").
11. [ ] "Break-Even Year" appears at least 6 times (primary metric anchor).
12. [ ] "Net Wealth" appears at least 6 times across What Is, Result Meaning, Formula, FAQ.
13. [ ] "Opportunity Cost" appears at least 4 times across What Is, Result Meaning, FAQ Q4, Common Mistakes.
14. [ ] Primary keyword density natural — not stuffed (keyword appears ≤10 times total).

### STRUCTURE COMPLIANCE (items 15-22)

15. [ ] Overview has exactly 4 paragraphs (P1-P4).
16. [ ] OVERVIEW_P1 is tight (≤ 3-4 sentences, ≤ 90 words); NOT overloaded with modes, opportunity cost details, or lifestyle explanation.
17. [ ] OVERVIEW_P3 contains user pain points (relatable questions) AND ends with strong reframing close (e.g., "Your intuition is usually wrong here").
18. [ ] How to Use has 5 numbered steps + 4 pro tips + 3 mode explanations.
19. [ ] FORMULA has Net Wealth methodology + opportunity cost formula + worked Austin example with HARD LOCK against derivation; length ≤ 550 words per LENGTH GUARD.
20. [ ] Result Meaning has Break-Even tiers + Net Wealth interpretation + Opportunity Cost interpretation + Lifestyle factors + 2026 context.
21. [ ] Strategy has 5 user-type blocks (First-Time, Career-Mover, Retiree, Family-Planner, Wealth-Maximizer); Applications 6 use cases; Limitations 6 items (each ≤4 sentences); Common Mistakes 5 items; FAQ 9 Q&A.
22. [ ] Related Calculators lists 4-6 calculators (fewer than typical because audience differs); cross-links primarily to Mortgage Investment for audience redirect.

### PRODUCT TERMINOLOGY ACCURACY (items 23-33)

23. [ ] "Rent vs Buy Calculator" or equivalent product name used throughout.
24. [ ] "Break-Even Year" defined and used as primary metric.
25. [ ] "Net Wealth" used as comparison basis (NOT "Net Cost") — UI language reflects v2 round 2 RIS methodology correction.
26. [ ] "Hold Period" used consistently — not "tenure", "duration", or "ownership period".
27. [ ] "PITI" defined on first mention (Principal + Interest + Taxes + Insurance), used throughout.
28. [ ] "Opportunity Cost" defined and used consistently in Mode 2 explanations.
29. [ ] 3 modes clearly differentiated: Mode 1 Standard (slate), Mode 2 Detailed with Opportunity Cost — RECOMMENDED (sky), Mode 3 Lifestyle Adjusted (warm gray).
30. [ ] Consumer mortgage rate default (6.75%) signaled in content; NOT investor rate (7.5%).
31. [ ] Down payment default 20% (primary residence); NOT 25% (investor).
32. [ ] "Accumulated Savings from Lower Housing Cost" used (NOT "Buyer Investment Value" — old terminology).
33. [ ] PMI auto-cancellation modeled at 78% LTV (improvement over Mortgage Investment Calc, mentioned in Limitations + FAQ).

### FORBIDDEN TERMINOLOGY AUDIT (items 34-40)

Zero occurrences required:

34. [ ] "Always buy" / "always rent" — 0 matches (we model, never prescribe).
35. [ ] "Best decision" / "right choice" — 0 matches (too prescriptive).
36. [ ] "Cheaper than renting" — 0 matches (we compare WEALTH not cost per v2 round 2 methodology).
37. [ ] "Net Cost" as primary metric — 0 matches (replaced with "Net Wealth").
38. [ ] Investor metrics: "DSCR", "Cap Rate", "NOI", "Cash-on-Cash" — 0 matches (wrong audience).
39. [ ] "Investment property" / "rental income" as primary frame — 0 matches (this is primary residence).
40. [ ] "Qualifies for", "guaranteed return", "easy decision", "forever home" — 0 matches.

### DISCLAIMER COMPLIANCE (items 41-43)

41. [ ] MANDATORY DISCLOSURE "primary residence decision, not investment property" (or equivalent) in 4 placements (Overview P4, How to Use Step 1, Limitations Item 1, FAQ Q1).
42. [ ] Investment tax simplification disclosure present: "Investment returns modeled using simplified after-tax compounding" or equivalent in Mode 2 description or Limitations.
43. [ ] "Lifestyle factors not fully quantified" disclosure present in Limitations Item 1 (or equivalent) acknowledging Mode 3 subjectivity.

### SCHEMA & INTEGRATION (items 44-45)

44. [ ] Schema block present with dual type (FinancialProduct + SoftwareApplication); 14+ features listed including 3 modes, Net Wealth methodology, Break-Even Year persistent crossing, opportunity cost, lifestyle factors, PMI auto-cancellation, Saved Scenarios widget.
45. [ ] Cross-links explicit: Mortgage Calculator (Investment) for investor audience redirect; Rental Property Calculator for live-in flip/househack scenarios; Compare Real Estate Deals for strategy comparison; Mortgage Calculator (consumer) noted as upcoming. NO outbound to investor-only calculators (DSCR, Cap Rate, NOI).

---

## VALIDATION INSTRUCTIONS

1. Read the generated SEO content package fully.
2. For each of the 45 items, verify compliance using VALIDATION FLEXIBILITY RULE.
3. For items 1-7 (CRITICAL): strict check (SOFT PASS only for item 4 per exception).
4. For items 8-45 (STANDARD): apply SOFT PASS generously if content clearly correct.
5. Return structured PASS/FAIL SUMMARY + FAILED CHECKS + PASSED/SOFT-PASSED CHECKS.

---

## SPECIAL VERIFICATION — FORBIDDEN TERMINOLOGY GREP

```bash
grep -ci "always buy\|always rent" generated.md          # must return 0
grep -ci "best decision\|right choice" generated.md      # must return 0
grep -ci "cheaper than renting" generated.md             # must return 0
grep -cE "\\bNet Cost\\b" generated.md                   # must return 0 as primary metric
grep -ci "DSCR\|cap rate\|cash-on-cash" generated.md     # must return 0
grep -ci "qualifies for" generated.md                    # must return 0
grep -ci "guaranteed return\|guaranteed appreciation" generated.md   # must return 0
grep -ci "easy decision\|forever home\|starter home" generated.md    # must return 0
```

If ANY non-zero, regenerate or patch before passing.

---

## SPECIAL VERIFICATION — NET WEALTH METHODOLOGY PRESENCE

Verify Net Wealth methodology is correctly used (NOT cost comparison per v2 round 2 RIS):

```bash
grep -ci "Net Wealth" generated.md                       # must be ≥ 6
grep -ci "Break-Even Year" generated.md                  # must be ≥ 6
grep -ci "Opportunity Cost" generated.md                 # must be ≥ 4
grep -ci "creates more net wealth\|builds more net wealth\|wealth comparison" generated.md   # must be ≥ 2
grep -cE "Accumulated Savings from Lower Housing Cost" generated.md   # must be ≥ 1 (Mode 2 buy formula)
```

If below thresholds, methodology not properly documented.

---

## SPECIAL VERIFICATION — OPPORTUNITY COST STRICT RULE

Verify OPPORTUNITY COST STRICT RULE compliance — 4 required elements in all 3 placements:

The content MUST include in What Is P2 AND Result Meaning AND FAQ Q4:
1. Definition of opportunity cost (what it is conceptually)
2. Why it matters (most simple calculators ignore it)
3. Default assumption (7% S&P 500 historical)
4. Honest qualifier (returns vary, past performance disclaimer)

Per REDUNDANCY GUIDANCE HARD RULE:
- Each section MUST express opportunity cost in DIFFERENT wording AND angle
- Forbidden: same opener phrase across 2+ sections
- Forbidden: same example numbers ("$92K invested at 7%") across 2+ sections
- Forbidden: same closing qualifier across 2+ sections

If verbatim repetition detected: FAIL with specific examples.

---

## SPECIAL VERIFICATION — MANDATORY DISCLOSURE PLACEMENTS

The phrase "primary residence decision, not investment property" (or acceptable equivalent) must appear in:
- OVERVIEW P4
- HOW TO USE Step 1
- LIMITATIONS Item 1
- FAQ Q1

```bash
grep -c "primary residence decision\|not for primary residence\|primary residence buyers" generated.md   # must be ≥ 4, ≤ 6
```

If < 4: HARD FAIL (missing placement). If > 6: SOFT PASS with note (excessive repetition).

---

## SPECIAL VERIFICATION — AUDIENCE SIGNALING

Verify content signals primary residence audience consistently:

- Consumer mortgage rate (6.75%) mentioned, NOT investor rate (7.5%)
- Down payment default 20% mentioned, NOT 25%
- Audience explicitly stated as "primary residence buyers" or "homebuyers and renters"
- Investor calculators mentioned ONLY for redirect (audience signaling), NOT as features

```bash
grep -ci "consumer mortgage\|primary residence rate\|6.75%" generated.md   # must be ≥ 2
grep -ci "investor rate" generated.md                                       # ok if mentioned for contrast
grep -ci "homebuyers\|primary residence buyers\|renters considering buying" generated.md   # must be ≥ 2
```

---

## FINAL NOTES

- Do NOT modify the generated content during validation — only report issues.
- If 3+ CRITICAL checks (items 1-7) fail, recommend full regeneration rather than patching.
- If only STANDARD checks fail (up to ~5), recommend targeted patches.
- If 10+ STANDARD failures, the generation prompt itself may need revision.
- FORBIDDEN TERMINOLOGY violations: HARD FAIL always (user-facing risk).
- Net Wealth methodology replaced with cost comparison: HARD FAIL (destroys core product value).
- Investor terminology used (DSCR, Cap Rate, NOI): HARD FAIL (wrong audience).

**Output only the structured PASS/FAIL report. Do NOT output the regenerated content.**
