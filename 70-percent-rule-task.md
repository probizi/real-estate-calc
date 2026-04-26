# TASK — 70% Rule Calculator (Phase 16)

## CONTEXT

You are generating a Vue.js page for RealCalc — an SEO hub of 30 US real estate calculators. This is the **70% Rule Calculator** (Phase 16, Priority 2 calculator, ~8K-15K searches/month).

The 70% Rule is a **quick offer screening heuristic** used by fix-and-flip investors and wholesalers to decide the maximum price to pay for a distressed property. It is NOT a full deal analysis tool — it complements the Fix and Flip Calculator rather than replacing it.

Position in workflow: `ARV Calculator → 70% Rule Calculator → Fix and Flip Calculator`

Tech stack:
- **Nuxt.js 3** (Vue 3 composition API)
- **Tailwind CSS** (no custom CSS files)
- **Stripe** integration (pre-wired via master-prompt-v4.md)
- **jsPDF** for PDF export
- **Chart.js or Recharts** for MAO Bar Chart, Percentage Comparison Cards, Mode 3 Gauge

Deploy target: 185.138.90.134 (RealCalc production server)

---

## REQUIRED INPUT FILES (upload to bot together)

## UNIFIED PIPELINE (v2 round 3 expert fix — connects 4 independent prompts into one system)

Phase 16 deliverables are 4 separate prompts that previously operated independently. This task.md is the orchestration layer that connects them into a single pipeline:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   STEP 1 — MASTER PROMPT (template/skeleton)                │
│            ↓ provides Vue page scaffold, Stripe, PDF       │
│                                                             │
│   STEP 2 — RIS (70-percent-rule-ris-prompt-final.md)        │
│            ↓ provides formulas, calculation logic,         │
│              test cases, critical rules                     │
│                                                             │
│   STEP 3 — SEO (70-percent-rule-seo-prompt-final.md)        │
│            ↓ provides page content, 15 sections,           │
│              TITLE/META/H1, copy, disclaimers              │
│                                                             │
│   STEP 4 — VALIDATION (70-percent-rule-seo-validation-      │
│            prompt.md)                                       │
│            ↓ OPTIONAL post-generation audit,               │
│              45-item checklist                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘

CONFLICT RESOLUTION ORDER:
  • RIS wins on math, logic, test cases, critical rules
  • SEO wins on copy, content structure, disclaimers
  • Master wins on technical scaffolding (Vue setup, Stripe, PDF)
  • Validation is advisory (post-generation audit, not generation input)

If two prompts conflict:
  1. Follow RIS for calculation logic
  2. Follow SEO for user-facing text
  3. Follow Master for page infrastructure
  4. If still unclear: prioritize user experience over mechanical compliance
```



1. `70-percent-rule-ris-prompt-final.md` — 813 lines, RIS v2 round 2 FINAL (2 review rounds, 11 fixes). **SOURCE OF TRUTH for all formulas and logic.**
2. `70-percent-rule-seo-prompt-final.md` — 1581 lines, SEO v2 round 2 FINAL (2 review rounds, 11 fixes). **SOURCE OF TRUTH for all page content.**
3. `70-percent-rule-seo-validation-prompt.md` — 190 lines, companion validation (OPTIONAL second-pass check, 45 items).
4. `master-prompt-v4.md` — base Vue page skeleton.

---

## EXECUTION ORDER (FOLLOW STRICTLY)

1. **Read ALL 3 prompt files** before writing any code. RIS is source of truth for calculations. SEO is source of truth for content.
2. **Read master prompt** for base page skeleton.
3. **Generate the Vue page** (`70-percent-rule-calculator.vue`) — **minimum 2400 lines** (simpler than Rental Property ROI but needs all 15 SEO sections + 3 modes + visualizations).
4. **Generate 2 integration patches** — add buttons to `arv-calculator.vue` and `fix-and-flip-calculator.vue`.

---

## CALCULATION ENGINE (from RIS)

All formulas MUST match RIS exactly. Do NOT invent math.

### THREE MODES (top-level tabs)

- **Mode 1 — Standard 70%** (default, amber): base formula `MAO = ARV × 0.70 − Rehab`
- **Mode 2 — Adjustable %** (orange): user-selected 60-80% range, benchmark band 65/70/75
- **Mode 3 — Reverse** (purple): reverse-engineer from known Purchase Price to find Implied Rule

### CANONICAL FORMULA

```
Primary:
  MAO = ARV × 0.70 − Rehab − Wholesale Fee (if any)

Mode 1 + Financing Buffer optional:
  MAO = MAO − (ARV × 0.03)

Mode 2 (Adjustable):
  MAO = ARV × (Custom % / 100) − Rehab − Wholesale Fee
  Financing Buffer NOT AVAILABLE (UI physically disabled — prevents double-count)

Mode 3 (Reverse):
  Implied Rule = ((Purchase Price + Rehab) / ARV) × 100
  Offer as % of ARV = Purchase Price / ARV × 100 (for Status Badge)
```

### SECONDARY METRICS

```
Gross Margin (Pre-Cost Buffer) = ARV − MAO − Rehab
Rule Buffer (Profit + Costs Allocation) = ARV × (1 − Percentage / 100)
Offer as % of ARV = MAO / ARV × 100
```

### STATUS BADGE (based on Offer as % of ARV)

```
≤ 60%:   GREEN  "Deep Value"         (strong margin, rare find)
60-70%:  BLUE   "Standard Flip Zone" (healthy margin)
70-75%:  AMBER  "Competitive Zone"   (thinner margin)
> 75%:   RED    "High Risk"          (thin margin in 2026 rate environment)
```

### CRITICAL RULES (from RIS)

1. **Canonical formula** — `MAO = ARV × 0.70 − Rehab` is hardcoded in Mode 1
2. **Never display invalid MAO** — if MAO ≤ 0, show error state + recovery CTA, NOT negative number
3. **Mode 3 includes Rehab** — Implied Rule = `(Purchase + Rehab) / ARV × 100`, NOT `Purchase / ARV`
4. **Status Badge ≠ Implied Rule** — Mode 3 shows BOTH percentages with distinct color schemes + mandatory clarification banner
5. **Financing Buffer Mode 1 only** — UI physically disabled in Mode 2 (prevents double-count)
6. **Two-tier rehab warnings** — 40-80% ARV amber; >80% ARV red + forced Status Badge downgrade
7. **Wholesale Fee handling** — subtracts AFTER percentage applied; content clarifies wholesaler vs end-buyer role
8. **Graduated Mode 2 warnings** — <60 RED, 60-65 AMBER, 65-70 GREEN, 70-75 AMBER, 75-80 RED; clamp at 80

### EXTREME CASE HANDLING

- **Rehab > 80% of ARV**: RED "Extreme rehab" banner. Property may be teardown/rebuild territory. 70% Rule may not apply. Status Badge forced to High Risk regardless of Offer %.
- **Rehab 40-80% of ARV**: AMBER "Heavy rehab" warning. Rule margin may be insufficient.
- **MAO ≤ 0**: Replace primary metric with error state: "Deal not viable at current inputs" + reason + recovery CTA. No secondary metrics shown.
- **Mode 2 Custom % outside 60-80**: Physical UI clamp at 80; cannot enter higher. Warning for 75-80 zone.

---

## INPUT SCHEMA

### Required (all modes)
- ARV (currency)
- Rehab Budget (currency)

### Mode 2 additional
- Custom Percentage % (60-80 range, default 70)

### Mode 3 additional
- Your Purchase Price (currency)

### Advanced (optional, Mode 1 only)
- Wholesale Assignment Fee (currency, default 0)
- Include Financing Buffer (boolean, default false)

---

## OUTPUT DISPLAY

### Primary Metric Card (Mode 1/2 — when valid)

```
┌──────────────────────────────────────────┐
│  Maximum Allowable Offer (MAO)           │
│                                          │
│           $145,000                       │  ← big number
│                                          │
│  [GREEN BADGE: Deep Value]               │  ← Status Badge
│  Offer as % of ARV: 58%                  │
└──────────────────────────────────────────┘
```

MAO rounded to nearest $500 for display.

### Primary Metric — Error State (when MAO ≤ 0)

```
┌──────────────────────────────────────────┐
│  ⚠ Deal not viable at current inputs    │
│                                          │
│  Reason: Rehab exceeds available buffer  │
│           after percentage applied       │
│                                          │
│  [Try reducing Rehab] [Increase ARV]    │
└──────────────────────────────────────────┘
```

No Secondary Metrics, no Status Badge shown.

### Secondary Metrics Block (when MAO valid)

```
Gross Margin (Pre-Cost Buffer):  $75,000   [ⓘ NOT profit]
Rule Buffer (Profit + Costs):    $75,000
Offer as % of ARV:               58%
```

Each with mandatory tooltip on hover.

### Mode 2 Benchmark Band

```
┌──────────────────────────────────────────────────────────┐
│  Benchmark Comparison                                     │
│                                                           │
│  [CONSERVATIVE 65%]  [STANDARD 70%]  [COMPETITIVE 75%]   │
│       $132,500          $145,000         $157,500        │
│                                                           │
│  [Your current: 72%]: $150,000 ← amber border            │
└──────────────────────────────────────────────────────────┘
```

### Mode 3 Dual Display (critical UI)

```
┌──────────────────────────────────────────────────────────┐
│  TWO METRICS — BOTH ARE CORRECT:                         │
│                                                           │
│  Offer % (price only):         55%                       │
│    ↳ Status: GREEN "Deep Value"                          │
│                                                           │
│  Total % (price + rehab):      70%                       │
│    ↳ Rule Classification: "Standard Flip Territory"      │
│                                                           │
│  ⓘ Status Badge reflects offer price as % of ARV.        │
│    Implied Rule reflects TOTAL investment as % of ARV.   │
│    Both valid, measure different things.                 │
└──────────────────────────────────────────────────────────┘
```

Offer % badge uses Status Badge color scheme (green/blue/amber/red).
Total % badge uses NEUTRAL GRAY scheme to distinguish.

### Scenarios Comparison Cards (3 required)

```
[CONSERVATIVE 65%]   [STANDARD 70%]   [COMPETITIVE 75%]
$132,500             $145,000         $157,500
Strong margin        Industry std     Hot market
```

### Sensitivity Table (1 required, 5×4 = 20 cells)

Rows: Percentage 65 / 67 / 70 / 72 / 75%
Cols: Rehab variance −10% / base / +10% / +20%
Cells: MAO at that combination
Highlight user's assumption with amber border
Caption: "Intermediate percentages (67%, 72%) show market transition zones between canonical 65/70/75 benchmarks."

### CTA Block (all modes, below primary output)

```
[Run full flip analysis with this MAO]  ← primary (indigo)
[Analyze as BRRRR instead]              ← secondary (emerald, shown if High Risk or Mode 3 Implied ≥ 75%)
[Compare with another deal]             ← tertiary (neutral)
```

Navigates to Fix and Flip Calculator / BRRRR Calculator / Compare Real Estate Deals with URL params pre-filled.

---

## VISUALIZATIONS

### 1. MAO Bar Chart (Mode 1/2)
Horizontal bar: MAO (green/blue/amber/red by status) vs ARV full scale (gray). Labels show MAO $X, Buffer $Y ([Z]% of ARV).

### 2. Percentage Comparison Cards (Mode 2)
3 cards at 65/70/75% with MAO, status badge, and short interpretation.

### 3. Mode 3 Gauge
Horizontal gauge 60% → 80% with Implied Rule pointer. Color zones: 60-65 green, 65-70 blue, 70-75 amber, 75-80 red.

---

## URL IMPORT SCHEMA

From ARV Calculator:
```
/70-percent-rule-calculator?arv=250000
```

From Fix and Flip Calculator:
```
/70-percent-rule-calculator?arv=250000&rehab=30000
```

Short param keys: `arv`, `rehab`, `pct` (custom %), `pp` (purchase price Mode 3), `wf` (wholesale fee), `fb` (financing buffer boolean)

---

## INTEGRATION PATCHES (2 source calculators)

### Patch 1: `arv-calculator.vue`

Add button after ARV confidence display:

```vue
<button @click="checkOfferViability"
        class="mt-4 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold flex items-center gap-2">
  <span>Check offer viability (70% Rule)</span>
  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M13 7l5 5m0 0l-5 5m5-5H6"/>
  </svg>
</button>
```

Method:
```js
checkOfferViability() {
  const params = new URLSearchParams({
    arv: this.finalARV
  });
  window.location.href = `/70-percent-rule-calculator?${params}`;
}
```

### Patch 2: `fix-and-flip-calculator.vue`

Add button in results area:

```vue
<button @click="quickOfferScreen"
        class="mt-4 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold flex items-center gap-2">
  <span>Quick offer screen (70% Rule)</span>
</button>
```

Method:
```js
quickOfferScreen() {
  const params = new URLSearchParams({
    arv: this.arv,
    rehab: this.rehabBudget
  });
  window.location.href = `/70-percent-rule-calculator?${params}`;
}
```

---

## SEO CONTENT STRUCTURE (15 sections from SEO prompt — strict order)

1. TITLE + META + H1 (hardcoded fallbacks — DO NOT modify)
   - TITLE: `70% Rule Calculator — Fix and Flip Max Offer | RealCalc` (57 chars)
   - H1: `70% Rule Calculator — Fix and Flip Maximum Offer Tool` (52 chars)
   - META: `Free 70% Rule Calculator for fix-and-flip investors. Screen maximum offer on any property in seconds — MAO = ARV × 70% − Rehab. Works for wholesalers too.` (158 chars)
2. OVERVIEW (4 paragraphs with plain-language opener)
3. HOW TO USE (4 steps + 4 pro tips + 3 mode explanations)
4. INPUTS & OUTPUTS (table)
5. FORMULA (canonical formula + Austin TX 2026 worked example + 1 alternative scenario)
6. WHAT IS (3 paragraphs — definition, Offer % vs Implied Rule distinction, 2026 context)
7. RESULT MEANING (Status Badge tiers + % interpretation + 3 scenarios + 2026 context)
8. BENCHMARKS (% tiers + 2026 market context + rehab classification)
9. STRATEGY (5 investor blocks)
10. APPLICATIONS (5 use cases)
11. INDUSTRY STANDARDS
12. LIMITATIONS (6 items, each ≤4 sentences + When Not to Use)
13. COMMON MISTAKES (5 items)
14. FAQ (8 Q&A)
15. RELATED CALCULATORS + SCHEMA block

### STRUCTURE PRESERVATION RULES (from SEO)

- Each section = separate H2 block. NEVER merge sections.
- Paragraph length: 2-5 sentences max.
- Lists stay as lists. NEVER convert to paragraphs.
- Limitations: max 4 sentences per item (CONCISENESS RULE).

---

## TEST SUITE (6 cases from RIS)

Verify after generation:

**Test 1 — Standard Classic Case**
Inputs: ARV $250K, Rehab $30K, 70%, no wholesale fee
Expected: MAO = $145,000; Gross Margin (Pre-Cost Buffer) = $75,000; Offer as % of ARV = 58%; Status GREEN Deep Value

**Test 2 — High Rehab Scenario**
Inputs: ARV $300K, Rehab $80K, 70%
Expected: MAO = $130,000; Offer as % of ARV = 43%; Status GREEN Deep Value

**Test 3 — Wholesale Fee Scenario**
Inputs: ARV $200K, Rehab $25K, 70%, Wholesale Fee $10K
Expected: MAO = $105,000; content explains wholesaler offers $105K to seller, end-buyer pays $115K

**Test 4 — Unviable Deal (edge case)**
Inputs: ARV $150K, Rehab $120K
Expected: Error state "Deal not viable" — Rehab ($120K) exceeds buffer (70% × $150K = $105K). NO negative MAO displayed.

**Test 5 — Competitive Market (Mode 2, 72%)**
Inputs: ARV $400K, Rehab $50K, Custom 72%
Expected: MAO = $238,000; Financing Buffer UI DISABLED with tooltip; Benchmark band shows 65% $210K / 70% $230K / 72% $238K (user's, amber) / 75% $250K

**Test 5b — Mode 1 + Financing Buffer**
Inputs: ARV $400K, Rehab $50K, Mode 1 Standard 70%, Financing Buffer ENABLED
Expected: Base MAO $230K − Financing Buffer $12K = $218K; display line "MAO with 2026 Financing Buffer: $218,000"

**Test 6 — Reverse Mode**
Inputs: ARV $300K, Rehab $40K, Purchase Price $170K
Expected: Implied Rule = 70% ("Standard flip territory"); Offer as % of ARV = 56.7% (GREEN Standard Flip Zone); BOTH percentages displayed with distinct color schemes + clarification banner

---

## CRITICAL CHECKLIST (35+ items)

### RIS compliance (20 items)

- [ ] Canonical formula `MAO = ARV × 0.70 − Rehab` hardcoded in Mode 1
- [ ] Mode 2 Custom % range clamped 60-80 (physical UI enforcement)
- [ ] Mode 3 Implied Rule includes Rehab: `(Purchase + Rehab) / ARV × 100`
- [ ] Mode 3 Offer % (for Status Badge) excludes Rehab: `Purchase / ARV × 100`
- [ ] Status Badge tiers ≤60 green, 60-70 blue, 70-75 amber, >75 red
- [ ] Financing Buffer Mode 1 only; UI physically disabled in Mode 2
- [ ] Wholesale Fee subtracts AFTER percentage applied
- [ ] MAO ≤ 0 → error state replaces primary metric (NOT negative display)
- [ ] Two-tier rehab warnings: 40-80% amber, >80% red + forced High Risk badge
- [ ] Graduated Mode 2 warnings: <60 red, 60-65 amber, 65-70 green, 70-75 amber, 75-80 red
- [ ] Mode 3 displays BOTH percentages (Offer % + Implied Rule) side-by-side
- [ ] Mode 3 clarification banner present below dual display
- [ ] Offer % badge uses status color scheme; Implied Rule badge uses neutral gray
- [ ] Scenarios canonical 65 / 70 / 75 (NOT 65/70/72)
- [ ] Sensitivity table 5×4 = 20 cells, user's assumption highlighted
- [ ] Sensitivity table caption explains intermediate 67%/72%
- [ ] MAO rounded to nearest $500 for display
- [ ] All 6 test cases pass within tolerance ±$500
- [ ] "Analyze as BRRRR instead" CTA shown for Mode 3 Implied ≥ 75% or Status HIGH RISK
- [ ] Saved Scenarios widget consistent with other calculators ("N/20 saved · Compare all")

### UI/UX compliance (8 items)

- [ ] 3 modes via top-level tabs with color coding (amber / orange / purple)
- [ ] Placeholders are instructions ("Enter ARV") NOT examples ("e.g., 250000")
- [ ] Advanced inputs (Wholesale Fee, Financing Buffer) collapsible, Mode 1 only
- [ ] Primary Metric display rule: shown when valid, error state when invalid
- [ ] Mandatory tooltips on Gross Margin (Pre-Cost Buffer) and Rule Buffer
- [ ] 3 visualizations present (MAO Bar, Percentage Cards, Mode 3 Gauge)
- [ ] Mobile responsive; charts scale
- [ ] CTA block shown below primary output in all modes

### SEO compliance (7 items)

- [ ] TITLE hardcoded: `70% Rule Calculator — Fix and Flip Max Offer | RealCalc`
- [ ] H1 hardcoded: `70% Rule Calculator — Fix and Flip Maximum Offer Tool`
- [ ] META hardcoded 158 chars
- [ ] OVERVIEW_P1 opens with plain-language sentence preserving meaning of reference
- [ ] "Not substitute for Fix and Flip" disclosure in EXACTLY 4 placements
- [ ] CANONICAL MAO formula appears at least 3 times
- [ ] 15 SEO sections in correct order, separate H2 blocks, no merging

---

## FORBIDDEN TERMINOLOGY AUDIT (grep — all must be 0)

```bash
grep -cE "\\bGross Margin\\b(?! \\(Pre-Cost Buffer\\))" page.vue   # 0 (always qualified)
grep -ci "gross profit" page.vue                                   # 0
grep -ci "net profit" page.vue                                     # 0
grep -ci "exact offer" page.vue                                    # 0
grep -ci "definitive MAO" page.vue                                 # 0
grep -ci "calculate your max offer" page.vue                       # 0
grep -ci "guaranteed profit" page.vue                              # 0
grep -ci "qualifies for" page.vue                                  # 0
grep -ci "implied profit" page.vue                                 # 0 (must be "Rule Buffer")
grep -cE "\\bBreak-Even\\b" page.vue                              # 0
```

If ANY non-zero, regenerate with correct terminology.

---

## POST-DEPLOYMENT VALIDATION

After Vue generation, optionally run `70-percent-rule-seo-validation-prompt.md` as 2nd pass to audit 45 SEO quality checks.

Workflow:
1. Generate Vue page using this task + RIS + SEO prompt
2. Extract generated SEO content from Vue template
3. Run validation prompt against extracted content
4. Fix CRITICAL failures; STANDARD failures can be batch-patched

---

## DEPLOYMENT

Deploy path: `/var/www/realcalc/pages/70-percent-rule-calculator.vue`

Deploy 2 patched files:
- `/var/www/realcalc/pages/arv-calculator.vue`
- `/var/www/realcalc/pages/fix-and-flip-calculator.vue`

After deploy:
```bash
cd /var/www/realcalc && npm run build
pm2 restart realcalc
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/70-percent-rule-calculator   # expect 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/arv-calculator               # expect 200 (patch didn't break)
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/fix-and-flip-calculator      # expect 200
```

Manual checks:
1. Visit `/70-percent-rule-calculator` — 3 modes visible, default Mode 1 Standard 70%
2. Enter ARV $250K + Rehab $30K → MAO $145K + GREEN badge
3. Switch to Mode 2 → Financing Buffer toggle grayed out/disabled
4. Switch to Mode 3 → enter Purchase $170K → BOTH percentages displayed
5. Test unviable deal (Rehab > ARV × %) → error state, no negative MAO
6. Click "Run full flip analysis" → redirects to Fix and Flip with params
7. Visit `/arv-calculator`, compute ARV, click "Check offer viability (70% Rule)" → redirects with ARV param
8. Visit `/fix-and-flip-calculator`, enter deal, click "Quick offer screen (70% Rule)" → redirects with ARV + Rehab params

---

## FINAL REMINDERS

1. **2400+ lines minimum** — 3 modes + visualizations + Mode 3 dual display + SEO 15 sections + 3 scenarios + sensitivity table
2. **RIS is source of truth for math** — never invent formulas
3. **SEO is source of truth for content** — follow 15-section structure exactly
4. **Mode 3 dual display MANDATORY** — BOTH percentages side-by-side + clarification banner (prevents user confusion)
5. **Financing Buffer Mode 1 only** — UI physically disabled in Mode 2 (prevents double-counting)
6. **Error state for invalid MAO** — NEVER display negative number, always show recovery CTA
7. **"Gross Margin (Pre-Cost Buffer)"** — always full qualifier, never "Gross Margin" alone
8. **Canonical scenarios 65/70/75** — synced with Mode 2 benchmark band
9. **Integration patches to ARV Calculator and Fix and Flip Calculator** are required
10. **Phase 16 closes when 70% Rule + integration patches are deployed**

If ambiguity between RIS and SEO: **RIS wins** (RIS defines calculation truth; SEO defines content).

**Begin by reading all 3 prompt files fully, then write the Vue page.**
