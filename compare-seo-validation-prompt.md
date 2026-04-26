# SEO Validation Prompt — Compare Real Estate Deals Calculator (companion to compare-seo-prompt-final.md)

You are a senior SEO quality reviewer. Your job is to audit a generated SEO content package for the Compare Real Estate Deals Calculator page against a comprehensive validation checklist.

---

## HOW TO USE THIS FILE

This is a **post-generation validation pass**. The workflow:

1. **Generation pass (first)**: use `compare-seo-prompt-final.md` to generate the SEO content package. That file contains only 7 CRITICAL CHECKS inline — it focuses the LLM on non-negotiable items and avoids checklist attention decay.

2. **Validation pass (this file)**: run this prompt AGAINST the generated draft. Return a structured pass/fail report with specific section references for any failures.

The two-pass workflow was introduced after v2 round 2 expert feedback identified that a 40+ item inline checklist caused silent skipping of 3-5 items during generation.

---

## VALIDATION INPUT

The generated SEO content package (Markdown) from compare-seo-prompt-final.md.

## VALIDATION OUTPUT

A structured report with 3 sections:

```
## PASS/FAIL SUMMARY
Total checks: 48
Passed: [N]
Failed: [N]
Critical failures (CRITICAL CHECKS): [N]

## FAILED CHECKS (if any)
For each failed check:
  - Checklist item number
  - Item description
  - Specific location in draft (section/paragraph/line)
  - Suggested fix

## PASSED CHECKS
Brief confirmation list.
```

---

## FULL VALIDATION CHECKLIST (48 items)

### CRITICAL CHECKS (items 1-7 — also in generation prompt)

1. [ ] TITLE is exact fallback: "Compare Real Estate Deals — Strategy Hub | RealCalc" (51 chars).
2. [ ] META DESCRIPTION is exact fallback: "Compare real estate deals side-by-side — Rental vs BRRRR vs Flip. See 5-year profit, annualized return, and winner tier. Free tool for investors." (157 chars).
3. [ ] H1 is exact fallback: "Compare Real Estate Deals Calculator — Rental vs Flip vs BRRRR Side-by-Side".
4. [ ] OVERVIEW_P1 opens VERBATIM with the mandated plain-language sentence.
5. [ ] FORMULA section executes all 13 steps OR issues STOP statement.
6. [ ] 4 Winner tier labels present VERBATIM in 3+ sections.
7. [ ] Pre-tax disclaimer present in exactly 5 placements.

### KEYWORD COVERAGE (items 8-14)

8. [ ] Primary keyword "compare real estate deals calculator" appears in OVERVIEW_P1 naturally.
9. [ ] OVERVIEW_P1 contains at least 2 of the 3 mandated secondary keywords: "compare investment properties", "rental vs flip vs brrrr", "real estate deal comparison".
10. [ ] H2 "Compare Investment Properties Side by Side" appears in OVERVIEW section.
11. [ ] Secondary keyword phrases appear in at least 2 H2s across the page.
12. [ ] "rental vs brrrr" or "rental vs flip" or "rental vs flip vs brrrr" appears at least 5 times total in the page.
13. [ ] Primary keyword density is natural — not stuffed (keyword appears ≤8 times total).
14. [ ] No keyword stuffing anti-patterns (3+ keywords in the same sentence).

### STRUCTURE COMPLIANCE (items 15-22)

15. [ ] Overview has exactly 4 paragraphs (P1-P4).
16. [ ] How to Use has 5 numbered steps.
17. [ ] How to Use has 4 pro tips.
18. [ ] How to Use has 4 Winner tier explanations (Clear / Slight / Too Close / Cluster).
19. [ ] Formula section has step-by-step (13 steps) + formula box + visual schema + worked Charlotte NC 2026 example.
20. [ ] Result Meaning section has 4 tier blocks with 2026 market context.
21. [ ] Benchmarks section has by-strategy-pair (Rental vs BRRRR, Rental vs Flip, BRRRR vs Flip, 3-way) + by-deal-volume subsection.
22. [ ] Strategy has 5 blocks (First-Time, Scaling, Flipper-to-Holder, Wholesaler, Agent), Applications has 6 use cases, Limitations has 5 items, Common Mistakes has 5 items, FAQ has 9 Q&A.

### PRODUCT TERMINOLOGY ACCURACY (items 23-30)

23. [ ] Compare Deals is described as DECISION ENGINE or DEAL COMPARISON TOOL (varied vocabulary), not just "calculator".
24. [ ] DUAL PRIMARY metrics clearly stated: 5-Year Total Return $ AND Annualized Return %.
25. [ ] Winner logic references Annualized Return as primary driver, not Total Return $.
26. [ ] Return Dominance Rule mentioned (≥25% relative Annualized lead overrides Composite Score).
27. [ ] Composite Score weights stated as hardcoded in v1 (Return 30%, Risk 20%, Liquidity 15%, TTP 15%, Effort 10%, Scalability 10%).
28. [ ] Operating Break-Even described as cash-flow-only (no equity, no refi).
29. [ ] FORBIDDEN synonyms absent: "Capital Recovery Break-Even", "Cash Recovery Break-Even", "Highest Total Return" (as Winner criterion).
30. [ ] Extreme Flip Loop Guard mentioned (AR > 80% auto-downgrades Winner tier).

### DISCLAIMER COMPLIANCE (items 31-35)

31. [ ] Pre-tax disclaimer Overview P4 placement (first of 5).
32. [ ] Pre-tax disclaimer How to Use Step 5 placement (second).
33. [ ] Pre-tax disclaimer per-deal card inline text (third).
34. [ ] Pre-tax disclaimer Limitations (fourth — dedicated item).
35. [ ] Pre-tax disclaimer FAQ Q5 (fifth — dedicated question).

### ANTI-PATTERN / TONE CHECKS (items 36-42)

36. [ ] No "calculates" or "determines" — uses "projects", "estimates", "compares".
37. [ ] No "qualifies for" language (DSCR bug).
38. [ ] No "e.g., 250000" input placeholders — placeholders are instructions like "Enter purchase price".
39. [ ] No "better deal" as standalone judgment — uses specific dimension ("higher Annualized Return", "Winner on return").
40. [ ] Vocabulary variety: "decision engine" appears ≤1 times in Overview, "normalization engine" ≤1 times, "hub-screener" ≤1 times.
41. [ ] No emoji usage (professional tone).
42. [ ] No false precision — benchmark percentages (55-65%, 40%, 15%) clearly labeled as illustrative patterns, not measured data.

### CROSS-LINKING & SCHEMA (items 43-48)

43. [ ] Related Calculators section lists: Rental Property, Fix and Flip, BRRRR, ARV, Cap Rate/NOI/DSCR/CoC, Mortgage.
44. [ ] Cross-links to source calculators appear in Overview P3, How to Use Steps 1-3, FAQ Q6.
45. [ ] Schema block present with dual type (FinancialProduct + SoftwareApplication).
46. [ ] Schema FEATURE_LIST contains at minimum 12 items.
47. [ ] "Not a lender underwriting tool" disclaimer in 4 places (Overview P4, Limitations, FAQ Q8, How to Use Step 5).
48. [ ] FAQ Q9 explains Extreme Flip Guard and auto-downgrade behavior.

---

## VALIDATION INSTRUCTIONS

1. Read the generated SEO content package fully.
2. For each of the 48 items, verify compliance. Be strict — partial matches are FAIL.
3. For items 1-7 (CRITICAL), flag any failure as CRITICAL FAILURE in the report.
4. For items 8-48 (STANDARD), flag failures as STANDARD FAILURE.
5. Return structured PASS/FAIL SUMMARY + FAILED CHECKS + PASSED CHECKS.
6. For each failed check, provide:
   - Specific section where the issue occurs
   - Exact problem (e.g., "Overview P1 opener uses paraphrase instead of verbatim mandated sentence")
   - Concrete fix (e.g., "Replace P1 opening sentence with the verbatim: '...'")

---

## FINAL NOTES

- Do NOT modify the generated content during validation — only report issues.
- If 3+ CRITICAL checks fail, recommend full regeneration rather than patching.
- If only STANDARD checks fail (up to ~5), recommend targeted patches.
- If 10+ STANDARD checks fail, the generation prompt itself may need revision — flag for human review.

**Output only the structured PASS/FAIL report. Do NOT output the regenerated content. Do NOT suggest prompt revisions.**
