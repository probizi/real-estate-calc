# SEO Validation Prompt — Mortgage Calculator (Investment Property) — companion to mortgage-investment-seo-prompt-final.md

You are a senior SEO quality reviewer. Your job is to audit a generated SEO content package for the Mortgage Calculator (Investment Property) page against a comprehensive validation checklist.

---

## HOW TO USE THIS FILE

This is a **post-generation validation pass**. The workflow:

1. **Generation pass (first)**: use `mortgage-investment-seo-prompt-final.md` to generate the SEO content package. That file contains only 7 CRITICAL CHECKS inline — it focuses the LLM on non-negotiable items and avoids checklist attention decay.

2. **Validation pass (this file)**: run this prompt AGAINST the generated draft. Return a structured pass/fail report with specific section references for any failures.

The two-pass workflow was introduced after Compare Deals SEO feedback identified that a 40+ item inline checklist caused silent skipping of 3-5 items during generation.

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

When to use HARD FAIL instead of SOFT PASS:
  • Critical items (1-7): always strict, no SOFT PASS allowed
  • Forbidden terminology present: always HARD FAIL (user-facing risk)
  • Canonical formulas absent or wrong: always HARD FAIL
  • Missing entire section from 15-section structure: HARD FAIL
  • DSCR vs Cash Flow distinction simplified or blurred: HARD FAIL (core product value)

EXCEPTION for CRITICAL item 4 (Overview P1 sentence):
  Natural variation that preserves ALL key components (Investment Property 
  Mortgage Calculator, real estate investors, PITI, cash flow after rent, 
  compare loan scenarios, 2026 investor rates) is acceptable. Do NOT require 
  near-verbatim phrasing.
```

---

## VALIDATION INPUT

The generated SEO content package (Markdown) from mortgage-investment-seo-prompt-final.md.

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

1. [ ] TITLE is exact fallback: "Investment Property Mortgage Calculator — PITI + Cash Flow | RealCalc" (66 chars).
2. [ ] H1 is exact fallback: "Investment Property Mortgage Calculator — PITI, Cash Flow, DSCR" (62 chars).
3. [ ] META is exact fallback: "Free Investment Property Mortgage Calculator for real estate investors. Calculate PITI, rental cash flow, DSCR, and compare loan scenarios. 2026 investor rates." (159 chars).
4. [ ] OVERVIEW_P1 opens with sentence preserving meaning of reference. Key components required: "Investment Property Mortgage Calculator", "real estate investors", "PITI" or "monthly payment", "cash flow" or similar, "2026 investor mortgage rates" or "2026 investor rates". First sentence ≤ 25-30 words. Paragraph ≤ 3-4 sentences.
5. [ ] FORMULA section uses canonical amortization formula; PITI breakdown explicit (P&I + Tax + Insurance + PMI + HOA); worked example present with Mode 1 + Mode 2 + DSCR + Break-Even Rent outputs.
6. [ ] "Break-Even Rent (Gross Required Rent)" always with full qualifier; no unqualified "Break-Even"; DSCR VS CASH FLOW KEY INSIGHT present in What Is P2 + Result Meaning KEY_INSIGHT_BLOCK + FAQ Q4.
7. [ ] MANDATORY DISCLOSURE "This calculator is designed for investment properties, not primary residences" (or acceptable equivalent) in AT LEAST 4 placements: Overview P4, How to Use Step 2, Limitations Item 1, FAQ Q1. Max 6 total mentions across document.

### KEYWORD COVERAGE (items 8-14)

8. [ ] Primary keyword "investment property mortgage calculator" appears in OVERVIEW_P1 naturally.
9. [ ] OVERVIEW_P1 contains at least 1 secondary keyword: "DSCR mortgage calculator", "rental property mortgage calculator", or "investor mortgage payment calculator".
10. [ ] At least 2 H2 headings use primary or secondary keywords (e.g., "Investment Property Mortgage Benchmarks for 2026", "What Is an Investment Property Mortgage?").
11. [ ] "PITI" appears at least 8 times total (primary metric anchor).
12. [ ] "DSCR" appears at least 6 times total across What Is, Result Meaning, FAQ, Strategy.
13. [ ] Primary keyword density natural — not stuffed (keyword appears ≤10 times total).
14. [ ] No keyword stuffing anti-patterns (3+ keywords in same sentence).

### STRUCTURE COMPLIANCE (items 15-22)

15. [ ] Overview has exactly 4 paragraphs (P1-P4).
16. [ ] OVERVIEW_P1 is tight (≤3-4 sentences, ≤90 words); NOT overloaded with modes, DSCR explanation, or 2026 Financing details (those are in P2/What Is/FAQ).
17. [ ] OVERVIEW_P2 holds modes explanation + differentiation.
18. [ ] How to Use has 5 numbered steps + 4 pro tips + 3 mode explanations.
19. [ ] FORMULA has canonical amortization + PITI breakdown + worked Austin example + alternative scenario; length ≤ 550 words per LENGTH GUARD.
20. [ ] Result Meaning has PITI breakdown + Cash Flow tiers + DSCR tiers + KEY_INSIGHT_BLOCK + Break-Even Rent interpretation + 2026 context.
21. [ ] Strategy has 5 blocks (First-Time, Portfolio Builder, Flipper, Wholesaler, Retiree); Applications 6 use cases; Limitations 6 items (each ≤4 sentences per CONCISENESS RULE); Common Mistakes 5 items; FAQ 9 Q&A.
22. [ ] Related Calculators lists at least 6 calculators with cross-links (Rental Property, Rental Property ROI, DSCR, Fix and Flip, Compare Real Estate Deals, BRRRR).

### PRODUCT TERMINOLOGY ACCURACY (items 23-33)

23. [ ] "Investment Property Mortgage Calculator" or equivalent product name used throughout.
24. [ ] "PITI" defined on first mention (Principal + Interest + Taxes + Insurance), used throughout.
25. [ ] "Net Monthly Cost" vs "Net Monthly Cash Flow" terminology toggle explained based on sign.
26. [ ] "DSCR" (Debt Service Coverage Ratio) defined and used consistently; uses P&I (not full PITI) as debt service.
27. [ ] "Break-Even Rent (Gross Required Rent)" always with full qualifier; tooltip concept explains GROSS rent before vacancy/expenses.
28. [ ] 3 modes clearly differentiated: Mode 1 Standard (blue), Mode 2 Investor with Rental Offset (indigo), Mode 3 Compare Loan Scenarios (emerald).
29. [ ] 5 loan types named: Conventional, DSCR, Portfolio, Hard Money, Second Home.
30. [ ] Investor rate defaults signaled (7.5% Conv, 8.25% DSCR, 12.0% Hard Money for 2026).
31. [ ] PMI logic accurate: only Conventional/Second Home with <20% down; DSCR/Portfolio/Hard Money never have PMI.
32. [ ] Hard Money + Mode 2 = blocking behavior documented (Limitations + FAQ or Common Mistakes).
33. [ ] Cross-calculator invariant mentioned: Year 1 CoC matches Rental Property Calculator ±0.1 pp.

### FORBIDDEN TERMINOLOGY AUDIT (items 34-40)

Zero occurrences required:

34. [ ] "Consumer mortgage rate" — 0 matches (we target investors).
35. [ ] "Guaranteed approval" / "guaranteed rate" / "guaranteed return" — 0 matches.
36. [ ] "Best mortgage rate" / "best rate" — 0 matches.
37. [ ] "Qualifies for" — 0 matches (DSCR bug prevention).
38. [ ] "Pre-qualified" / "pre-approved" — 0 matches.
39. [ ] "Break-Even" without "(Gross Required Rent)" qualifier — 0 matches.
40. [ ] "Tax savings" / "easy mortgage" / "simple loan" / "always choose" — 0 matches.

### DISCLAIMER COMPLIANCE (items 41-43)

41. [ ] MANDATORY DISCLOSURE "investment properties, not primary residences" (or equivalent) in AT LEAST 4 placements (Overview P4, How to Use Step 2, Limitations Item 1, FAQ Q1); max 6 total.
42. [ ] PMI auto-cancel disclosure present when PMI discussed (at ~78% LTV, not modeled in v1).
43. [ ] "Not investment advice" / "not substitute for professional advice" mentioned in Limitations Item 6.

### SCHEMA & INTEGRATION (items 44-45)

44. [ ] Schema block present with dual type (FinancialProduct + SoftwareApplication); 13+ features listed including 3 modes, 5 loan types, DSCR, cross-calculator invariant, AND Saved Scenarios widget.
45. [ ] Cross-links to source/sibling calculators explicit: Rental Property (inbound + outbound Year 1), Rental Property ROI (lifetime), DSCR Calculator (underwriting), Fix and Flip (Hard Money scenarios), Compare Real Estate Deals (strategies), BRRRR (refi).

---

## VALIDATION INSTRUCTIONS

1. Read the generated SEO content package fully.
2. For each of the 45 items, verify compliance using VALIDATION FLEXIBILITY RULE (SOFT PASS allowed for natural variation on non-critical items).
3. For items 1-7 (CRITICAL): strict check (SOFT PASS only for item 4 per exception).
4. For items 8-45 (STANDARD): apply SOFT PASS generously if content clearly correct.
5. Return structured PASS/FAIL SUMMARY + FAILED CHECKS + PASSED/SOFT-PASSED CHECKS.
6. For each failed check, provide:
   - Specific section where the issue occurs
   - Exact problem (e.g., "Limitation 1 uses 'Break-Even' without qualifier")
   - Concrete fix (e.g., "Replace 'Break-Even' with 'Break-Even Rent (Gross Required Rent)' on line N")

---

## SPECIAL VERIFICATION — FORBIDDEN TERMINOLOGY GREP

Before running the checklist, perform a grep-level audit:

```bash
grep -ci "consumer mortgage rate" generated.md              # must return 0
grep -ci "best mortgage rate\|best rate for" generated.md   # must return 0
grep -ci "guaranteed" generated.md                          # must return 0
grep -ci "qualifies for" generated.md                       # must return 0
grep -ci "pre-qualified\|pre-approved" generated.md         # must return 0
grep -ci "tax savings" generated.md                         # must return 0
grep -ci "easy mortgage\|simple loan" generated.md          # must return 0
grep -ci "always choose" generated.md                       # must return 0
grep -cE "\\bBreak-Even\\b(?! Rent \\(Gross Required Rent\\))" generated.md   # must return 0
```

If ANY non-zero, regenerate or patch before passing.

---

## SPECIAL VERIFICATION — CANONICAL FORMULAS PRESENCE

Verify canonical formulas appear correctly:

```bash
grep -ci "PITI" generated.md                                # must be ≥ 8
grep -ci "P&I\|Principal and Interest" generated.md         # must be ≥ 4
grep -ci "DSCR" generated.md                                # must be ≥ 6
grep -ci "Net Monthly Cash Flow\|Net Monthly Cost" generated.md   # must be ≥ 4
grep -cE "Break-Even Rent \\(Gross Required Rent\\)" generated.md # must be ≥ 3
grep -ci "Cash-on-Cash\|CoC" generated.md                   # must be ≥ 2
```

If any below threshold, canonical formulas/metrics not properly documented.

---

## SPECIAL VERIFICATION — DSCR VS CASH FLOW DISTINCTION

Verify DSCR VS CASH FLOW STRICT RULE compliance:

The content MUST include all 3 elements of the distinction in at least 3 places (What Is, Result Meaning, FAQ Q4):

```
1. DSCR uses P&I only (lender metric)
2. Cash Flow uses full PITI (investor metric)  
3. A deal can pass DSCR AND still be cash-flow negative
```

Grep for evidence:
```bash
grep -ci "P&I only\|Principal and Interest only" generated.md  # ≥ 2
grep -ci "full PITI\|including taxes, insurance" generated.md  # ≥ 2
grep -ci "negative cash flow.*DSCR\|DSCR.*cash.flow.negative" generated.md  # ≥ 1
```

If simplification like "DSCR and Cash Flow are the same" found → HARD FAIL (core product value).

---

## SPECIAL VERIFICATION — MANDATORY DISCLOSURE PLACEMENTS

The phrase "investment properties, not primary residences" (or acceptable equivalent) must appear in:
- OVERVIEW P4
- HOW TO USE Step 2
- LIMITATIONS Item 1
- FAQ Q1

```bash
grep -c "investment properties, not primary residences\|not for primary residence\|not primary residences" generated.md   # must be ≥ 4, ≤ 6
```

If < 4: HARD FAIL (missing placement). If > 6: SOFT PASS with note (excessive repetition).

---

## FINAL NOTES

- Do NOT modify the generated content during validation — only report issues.
- If 3+ CRITICAL checks (items 1-7) fail, recommend full regeneration rather than patching.
- If only STANDARD checks fail (up to ~5), recommend targeted patches.
- If 10+ STANDARD failures, the generation prompt itself may need revision — flag for human review.
- FORBIDDEN TERMINOLOGY violations: HARD FAIL always (user-facing risk).
- DSCR vs Cash Flow simplification: HARD FAIL always (destroys core product value).

**Output only the structured PASS/FAIL report. Do NOT output the regenerated content. Do NOT suggest prompt revisions unless 10+ STANDARD failures indicate systemic prompt issues.**
