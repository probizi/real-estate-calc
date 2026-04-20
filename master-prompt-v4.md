# RealCalc Master Prompt — Calculator Implementation

---

## 1. CONTEXT & PHILOSOPHY

You are working inside an existing Nuxt.js project called **RealCalc** — a SEO-focused hub of 30+ real estate investment calculators for the US market.

The business model depends on two things:

1. **Single consistent product experience** across all calculators — users and Google must see one unified product, not 30 different pages.
2. **Deep, high-quality content** on every page — short or generic content kills SEO rankings.

This means every new calculator must look, feel, and read **identically** to the canonical template. The math and words change. Everything else stays locked.

The canonical template is `cap-rate-calculator.vue`. Treat it as the source of truth.

**Philosophy:** when in doubt — copy. Never invent. Consistency beats improvement.

---

## 2. CALCULATOR SPEC BLOCK

Fill in this block before starting. This is the only place where new-calculator-specific data should exist:

```yaml
Calculator Name:     [e.g. Cash-on-Cash Return Calculator]
Slug:                [e.g. cash-on-cash-calculator]
File path:           pages/[slug].vue
Primary metric:      [e.g. Cash-on-Cash Return %]
Formula:             [e.g. Annual Cash Flow ÷ Total Cash Invested × 100]
Primary keyword:     [e.g. cash on cash return calculator]

Input fields:
  - [field_name]: [type, unit, placeholder value]
  - ...

Calculation modes (if multiple):
  - [mode 1]: [what it computes]
  - [mode 2]: ...

Badge thresholds:
  - [range]: [label, color]
  - [range]: [label, color]
  - ...

Asset class / context data (if applicable):
  - [class]: [typical range, notes]

Benchmarks by US market:
  - [state/type]: [range, notes]

Related calculators (must exist in the project):
  - [slug-1]
  - [slug-2]
  - [slug-3]
```

If the spec is incomplete — stop and ask for the missing pieces. Do not invent values, thresholds, or benchmarks.

---

## 3. CLONE CONTRACT — COPY EXACTLY

**Start by duplicating the entire `cap-rate-calculator.vue` file. Then modify only what the Adaptation Contract allows.**

The following must be copied byte-for-byte:

### Shared UI blocks
- `<header>` — logo, nav links, CTA button, all classes and styles
- `<footer>` — all text, links, and classes
- Breadcrumb wrapper (only the last item's text changes)
- `ScenarioPanel` component — only props adapt
- `EmailCaptureModal` component — only props adapt

### Mobile sticky result bar (MANDATORY — never remove)

The mobile sticky bar at the top of the page (below the header) shows the current primary result with a tier badge. It is REQUIRED.

**Structure:**
```html
<div class="lg:hidden sticky top-[57px] z-40 bg-white border-b border-gray-200 shadow-sm px-4 py-3">
  <div class="flex items-center justify-between">
    <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">[Metric Name]</span>
    <div class="flex items-center gap-3">
      <!-- Mode-aware content blocks here -->
    </div>
  </div>
</div>
```

**For calculators with multiple modes**, the sticky bar must show a **different result + badge + color per mode**. Use `<template v-if="calcMode === '...'">` blocks — one per mode. Each block renders:
- The relevant result value (primary, requiredX, maxY, etc.)
- A colored tier/status badge matching that mode
- Empty state (`—` + "fill in fields below") when result is not ready

Example for 3-mode calculator (like NOI):
- Mode `calc-noi`: show NOI value + tier badge (dynamic color)
- Mode `find-income`: show required income + blue "Required" badge
- Mode `find-expenses`: show max expenses + emerald "Max" badge

Do NOT show only the main mode result and hide the bar in reverse modes. The sticky bar must be functional in ALL modes.

### Mode selector tabs (MANDATORY for multi-mode calculators)

If the calculator has multiple calculation modes, they must be presented as tabs at the top of the calculator panel with color-coded differentiation:

**Structure:**
- `<div class="calc-mode-tabs">` wrapper (uses `@apply grid grid-cols-[N] gap-1.5 p-1 rounded-2xl bg-gray-100` in `<style>`)
- One `<button class="calc-mode-tab">` per mode
- Active state toggles: `calc-mode-tab-active` vs `calc-mode-tab-inactive`
- Each tab shows: mode name, short formula hint, and a small status pill (e.g., "Standard", "Reverse")
- **Each mode must use its own color family** consistently across:
  - Mode selector pill background
  - Primary result color in the right column
  - Mobile sticky bar badge
  - PDF export hero block

Canonical color families:
- Standard / primary mode → amber (`#f59e0b` / `amber-*` classes)
- Reverse mode #1 → blue (`blue-700`, `blue-100`)
- Reverse mode #2 → emerald (`emerald-700`, `emerald-100`)

### Action buttons block (MANDATORY — never remove, never simplify)

The action buttons block in the right result column is **REQUIRED** in every calculator. It is NOT optional.

**Wrapper:**
```html
<div v-if="hasResult || [reverse-mode-has-result conditions]" class="p-4 border-t border-gray-100 space-y-2">
```
The `v-if` must show buttons for ALL calculation modes — if the calculator has reverse modes (like NOI's "Find Required Income" or "Find Max Expenses"), the condition must be `hasResult || requiredX || maxY !== null` so buttons appear in reverse modes too. **Do NOT use `v-if="hasResult"` alone if the calculator has reverse modes — this hides buttons in those modes.**

**4 required buttons in order:**

1. **Save Scenario** — primary amber button, `v-if="hasResult"`, calls `openSaveScenario()`
   - Classes: `w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90`
   - Style: `background: #f59e0b; color: #1e3a5f;`
   - Icon: bookmark SVG

2. **Share** — secondary button in 2-column grid with PDF, calls `shareResult()`, toggles via `shareSuccess` ref
   - Classes: `flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border`
   - Dynamic class: `shareSuccess ? 'border-green-400 text-green-700 bg-green-50' : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'`
   - Label toggles: `{{ shareSuccess ? 'Copied!' : 'Share' }}`
   - Icon toggles: share SVG vs checkmark SVG

3. **Export PDF** — secondary button in same 2-column grid, calls `exportPDF()`
   - Classes: `flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50`
   - Icon: download SVG

4. **Email me this analysis** — tertiary dashed-border button, opens email modal via `showEmailModal = true`
   - Classes: `w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs text-gray-500 hover:text-gray-700 border border-dashed border-gray-200 hover:border-gray-300 transition`
   - Icon: envelope SVG

**Required refs and handlers in `<script setup>`:**

```js
// Refs
const shareSuccess = ref(false)
const showEmailModal = ref(false)
const triggerScenarioSave = ref(false)

// Computed result for ScenarioPanel — MUST pass real tier.value, NOT mapped to Good/Average/Poor
const currentScenarioResult = computed(() => ({
  primaryMetric: '[METRIC NAME]',
  primaryValue:  formatCurrency([primary value]),
  badgeLabel:    tier.value,        // real tier name from RIS, never generic Good/Average/Poor
  badgeColor:    tierColor.value,
  // ...other key fields for scenario save
}))

// Share URL builder
// CRITICAL: must include EVERY input field from the form object.
// Use short param names (1–3 chars) from RIS Section 18 — they're fixed per calculator.
// Must also encode calcMode so shared links restore the correct calculation mode.
function buildShareParams() {
  const p = new URLSearchParams()
  // Preserve calcMode if not default
  if (calcMode.value !== '[default-mode-key]') p.set('cm', calcMode.value)
  // Preserve expenseMode or any other UI toggle
  if (expenseMode.value !== 'simple') p.set('em', expenseMode.value)
  // ALL form fields — no skipping
  if (form.field1) p.set('p1', form.field1)
  if (form.field2) p.set('p2', form.field2)
  // ... continue for EVERY field, including nested ones like form.expenses.*
  return p.toString()
}

async function shareResult() {
  const params = buildShareParams()
  const url = `${window.location.origin}${window.location.pathname}${params ? '?' + params : ''}`
  try {
    await navigator.clipboard.writeText(url)
    shareSuccess.value = true
    setTimeout(() => { shareSuccess.value = false }, 3000)
  } catch {
    // fallback for browsers without clipboard API
    const el = document.createElement('input')
    el.value = url
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    shareSuccess.value = true
    setTimeout(() => { shareSuccess.value = false }, 3000)
  }
}

async function exportPDF() {
  const { jsPDF } = await import('jspdf')  // MUST be dynamic import
  const doc = new jsPDF()

  // ═══ PDF HERO BLOCK MUST BE MODE-AWARE ═══
  // Each calcMode produces different heroValue/heroLabel/heroSub
  let heroValue, heroLabel, heroSub
  if (calcMode.value === 'find-income') {
    heroValue = formatCurrency(requiredGRI.value)
    heroLabel = 'REQUIRED GROSS RENT (Annual)'
    heroSub = `To generate ${formatCurrency(Number(form.targetNOI))} NOI/yr`
  } else if (calcMode.value === 'find-expenses') {
    heroValue = formatCurrency(maxExpenses.value)
    heroLabel = 'MAX OPERATING EXPENSES (Annual)'
    heroSub = `EGI − Target NOI of ${formatCurrency(Number(form.targetNOI))}`
  } else {
    heroValue = formatCurrency(primaryResult.value)  // primary mode
    heroLabel = '[PRIMARY METRIC NAME] (Annual)'
    heroSub = `Tier: ${tier.value}`
  }
  // ...render heroValue/heroLabel/heroSub into the PDF gold block
  // ...continue with breakdown rows, benchmarks, tier explanation, footer
}

function openSaveScenario() {
  triggerScenarioSave.value = true
  nextTick(() => { triggerScenarioSave.value = false })
  try {
    if (!localStorage.getItem('realcalc_email_captured')) {
      showEmailModal.value = true
    }
  } catch {}
}

function onScenarioSaved(_id) {}
function onEmailCaptured(_email) {
  showEmailModal.value = false
}
```

**Required components at end of `<template>`:**

```html
<!-- Scenario Panel (inside main content wrapper, before </main>) -->
<div class="max-w-6xl mx-auto px-4 pb-10">
  <ScenarioPanel
    calculator="[slug-short]"
    :has-result="hasResult"
    :result="currentScenarioResult"
    :trigger-save="triggerScenarioSave"
    @saved="onScenarioSaved"
  />
</div>

</main>

<!-- Email Capture Modal (outside main, before footer) -->
<EmailCaptureModal
  :show="showEmailModal"
  :calculator-name="'[Full Calculator Name]'"
  :primary-result="hasResult ? `[formatted primary result]` : undefined"
  title="Save Your [Metric] Analysis"
  subtitle="Get market benchmarks, deal templates, and calculator updates."
  cta-label="Save & Get Free Updates"
  @close="showEmailModal = false"
  @captured="onEmailCaptured"
/>
```

**Critical anti-patterns — NEVER do:**

- ❌ Don't map `tier.value` to `Good/Average/Poor` in `currentScenarioResult` — pass real tier name from RIS
- ❌ Don't use `v-if="hasResult"` alone on the wrapper if the calculator has reverse modes — use combined condition
- ❌ Don't use synchronous `import 'jspdf'` at the top — must be dynamic import inside `exportPDF()`
- ❌ Don't skip `try/catch` around `localStorage.getItem` — SSR safety
- ❌ Don't forget `setTimeout` to reset `shareSuccess` after 3 seconds
- ❌ Don't use generic calculator slug like `"calculator"` for ScenarioPanel — use specific short key (e.g., `"cap-rate"`, `"noi"`, `"coc"`)

**If you output a calculator without this block, these handlers, or the components — the calculator is broken. Users cannot save, share, or export. This breaks the entire monetization model and SEO product consistency.**

### Layout architecture
- Two-column grid container with `[3fr_2fr]` ratio — do not change the ratio
- Left column container classes — inputs only
- Right column nested structure: outer stretch wrapper → sticky wrapper → overflow scroll wrapper — do not flatten
- Action button group order: Save Scenario → Share → Export PDF → Email me

### CSS class strings
- Do NOT reconstruct class strings from memory
- Do NOT reorder classes within a string
- Do NOT merge or split class strings
- Do NOT rewrite Tailwind in shorthand
- When you need a block — copy-paste the entire block with all its classes from the template

### DOM structure
- Do NOT remove any HTML element, even if it seems redundant
- Do NOT remove wrapper divs, spans, or containers
- Do NOT simplify nesting
- Do NOT reorder elements within any section
- All empty-state placeholders, decorative wrappers, and utility divs must remain intact

### Visual design
- Every pixel must match: widths, spacing, padding, margins, font sizes, font weights, colors, borders, radius, shadows, alignment

### Responsive behavior
- Mobile layout must remain identical in structure and behavior
- Do not redesign mobile flow
- Do not hide or reorder elements on mobile
- Keep all responsive breakpoints (`lg:`, `md:`, `sm:` prefixes) exactly

---

## 4. ADAPTATION CONTRACT — WHAT YOU MAY CHANGE

Use this single rule to decide if a change is allowed:

> **Scope of allowed change:**
> - Text content inside a tag → OK
> - Numeric value in a computed → OK
> - Field name / variable name when required by the new formula → OK
> - Class strings, tag structure, element order, DOM nesting → NOT OK

### 4.1 SEO — `useHead()` block
Adapt:
- `title`: `[Calculator Name] — [USP] | RealCalc`
- `meta description`: 150–160 chars, include primary keyword + CTA
- `og:title`, `og:description`
- `keywords`
- `SoftwareApplication` schema: `name`, `description`, `featureList`
- `Calculator` schema: `name`, `description`, `url`
- `FAQPage` schema: write 6–8 real Q&A relevant to this calculator (2–4 sentences each, with specific numbers)

### 4.2 Page text
- Breadcrumb (last item)
- H1 (must contain primary keyword)
- Calculator mode selector: tab names, descriptions, badge labels
- Input field labels, placeholders, helper text, units
- Result labels, breakdown row labels, formula display
- Badge labels and thresholds
- Insight / Deal Context ranges and text
- All SEO content sections (see Section 5)

### 4.3 `<script setup>` — reactive state
**Keep the same structure, naming pattern, and dependency flow.**
**Do not rewrite or reorganize computed properties — replace only the formula expressions and variable names required by the new calculator.**

Adapt:
- `form` reactive object — field names for this calculator
- Field config arrays (like `expenseFields`)
- Context data objects (like `assetClassData`) — adapt content, keep structure
- Primary computed chain — replace formula, keep computed hierarchy
- `badge` computed — new thresholds and labels
- `insightText` computed — new text ranges
- `sensitivityRows` / `impliedValues` — new variable, same structure
- `scenarios` computed — adapt multipliers
- `resetForm()` — reset all new fields
- Share param helpers — adapt param names

**Preserve this exact order in `<script setup>`:**

1. `useHead()`
2. Reactive state (`ref`, `reactive`)
3. Field configs
4. Context data objects
5. Computed context
6. Computed calculation chain
7. Computed analytics
8. Computed investor returns (if applicable)
9. Computed scenarios
10. Computed badge
11. Computed insight text
12. Computed benchmarks / tiers
13. Computed sensitivity / implied values
14. Computed visualization breakdown
15. Computed share params
16. `onMounted()` — URL param parsing
17. Helper functions
18. PDF export
19. Scenario save / email capture

### 4.4 Tables and grids
All tables (sensitivity, benchmarks, breakdowns) must preserve:
- number of columns
- column order
- layout structure
- class names

Only values and labels change.

### 4.5 Result column order
Inside the right column, preserve this exact order:
primary result → warnings → breakdown → key metrics grid → visualization → deal context → sensitivity → action buttons → investor results (if enabled)

---

## 5. SEO CONTENT REQUIREMENTS

All sections must be present in this strict order and must NOT be merged:

| # | Section | ID | Min depth |
|---|---|---|---|
| 1 | Overview | `#overview` | 3–4 paragraphs |
| 2 | How to Use | `#how-to-use` | 5 numbered steps + pro tips + result guide |
| 3 | Inputs & Outputs | `#inputs-outputs` | table with all fields |
| 4 | Formula | `#formula` | step-by-step + formula box + real-world example |
| 5 | What Is [Metric] | `#what-is-[metric]` | definition + formula + context |
| 6 | What Your Result Means | `#result-meaning` | 4 range cards + context block |
| 7 | Benchmarks | `#benchmarks` | property type table + geo cards + geo table |
| 8 | Strategy | `#strategy` | 4+ strategy blocks + bid pricing |
| 9 | Applications | `#applications` | 6 use-case cards |
| 10 | Industry Standards | `#industry-standards` | 3+ standard blocks |
| 11 | Limitations | `#limitations` | 4 limitation cards + when-not-to-use list |
| 12 | Common Mistakes | `#common-mistakes` | 5 numbered mistakes |
| 13 | FAQ | `#faq` | 8 questions, 2–4 sentences each |
| 14 | Related Calculators | `#related-calculators` | 3–4 links |

### Content depth rules
- Match the **exact number of elements per section** (paragraphs, cards, tables, rows, FAQs) to the canonical template
- Tables and benchmarks must contain **real researched data** — no generic ranges
- FAQ answers must include **specific numbers and examples**
- Do NOT use placeholder text ("Lorem ipsum", "Add content here")
- Do NOT collapse multiple paragraphs into one

### Related calculators
- Do NOT invent slugs
- Use only slugs that exist in the project
- If unsure about a slug — reuse one from the canonical template

---

## 6. FUNCTIONAL EXTENSIONS — WHEN YOU MAY ADD NEW BLOCKS

Calculators have genuinely different logic. Some need blocks that don't exist in the template (e.g., Fix & Flip needs a rehab cost breakdown, 1031 Exchange needs deadline timers, BRRRR needs before/after refinance comparison).

### You MAY add a new functional block ONLY IF:
- The metric genuinely requires it (not "nice to have" — cannot work without it)
- The block visually matches the template style (same card design, same spacing, same typography)
- The block is placed inside an existing section — not as a new top-level section
- You add a code comment explaining why it's required: `<!-- CALCULATOR-SPECIFIC: reason -->`

### You MUST NOT add:
- "Pro tips" cards
- Upsell or promotional banners
- Recommendation or "did you know" boxes
- Testimonials or social proof
- Extra navigation or CTAs
- New top-level sections (the section list in Section 5 is final)
- Any block meant to "improve UX" or "add value" beyond what the calculator mathematically needs

### Fallback for non-applicable template blocks
If a block in the template (sensitivity, implied values, investor metrics) doesn't fit this calculator:

**Keep the structure. Adapt the content meaningfully.**

Example: no "cap rate compression" concept → adapt sensitivity block to show how the primary metric changes at ±30% of the main input.

Remove a block ONLY if it is fundamentally impossible to adapt. Flag it with: `<!-- REMOVED: [block name] — reason: [why it cannot be adapted] -->`

---

## 7. SELF-CHECK BEFORE OUTPUT

Before outputting the file, verify every item:

- [ ] Started by cloning `cap-rate-calculator.vue`, not from scratch
- [ ] Header block is identical to template
- [ ] Footer block is identical to template
- [ ] Two-column grid uses `[3fr_2fr]` ratio
- [ ] All 14 SEO sections present in correct order (Section 5 table)
- [ ] No sections merged
- [ ] No new top-level sections added
- [ ] All HTML wrappers, divs, spans preserved
- [ ] All class strings copied exactly, not reconstructed
- [ ] DOM nesting preserved
- [ ] Mobile layout unchanged
- [ ] **Mobile sticky result bar present at top of page, below header**
- [ ] **Sticky bar shows different result + badge + color for EACH calculation mode (not just primary mode)**
- [ ] **Each calculation mode has its own computed result (e.g., `annualNOI`, `requiredGRI`, `maxExpenses`) — NOT a single metric reused across modes**
- [ ] **Reverse-mode computed values (requiredX, maxY) are correctly passed into both the sticky bar and the main result card**
- [ ] **Mode selector tabs present at top of calculator panel for multi-mode calculators**
- [ ] **Each mode uses consistent color family across: mode tab, primary result, sticky bar badge, PDF export**
- [ ] **PDF export hero block is MODE-AWARE — reflects current `calcMode`, not always the primary metric:**
  - Standard mode → primary metric (e.g., NOI value)
  - Reverse mode #1 → required value (e.g., required Gross Rent)
  - Reverse mode #2 → max value (e.g., max Expenses)
  - Each hero block must have its own `heroValue`, `heroLabel`, `heroSub` branches
- [ ] **Action buttons block present: Save Scenario + Share + Export PDF + Email me this analysis (all 4 buttons)**
- [ ] **Action buttons wrapper `v-if` covers ALL calculation modes (including reverse modes), not just `hasResult`**
- [ ] **All required refs defined: `shareSuccess`, `showEmailModal`, `triggerScenarioSave`**
- [ ] **All 4 button handlers defined: `openSaveScenario`, `shareResult`, `exportPDF`, `onEmailCaptured`**
- [ ] **`buildShareParams()` function defined with short param names from RIS Section 18**
- [ ] **ALL input fields from the form are included in `buildShareParams()` — no field skipped**
- [ ] **URL param names are 1–3 chars and exactly match RIS Section 18 (short param table)**
- [ ] **`buildShareParams()` also encodes `calcMode` when not default (so shared links preserve the mode)**
- [ ] **`exportPDF()` uses dynamic `await import('jspdf')` inside function, not top-level import**
- [ ] **`currentScenarioResult` passes real `tier.value`, NOT mapped to generic Good/Average/Poor**
- [ ] **`openSaveScenario` wraps `localStorage.getItem` in try/catch for SSR safety**
- [ ] **`shareSuccess` resets after 3 seconds via `setTimeout`**
- [ ] **`ScenarioPanel` component included at end of `<template>` (inside `<main>`) with correct props**
- [ ] **`EmailCaptureModal` component included at end of `<template>` (after `</main>`) with correct props**
- [ ] **`ScenarioPanel` uses specific calculator key (e.g., `"noi"`, `"coc"`), not generic `"calculator"`**
- [ ] **TIER CONSISTENCY CHECK — same tier label and color must appear in ALL of these places:**
  - Main result card badge (right column)
  - Mobile sticky result bar badge
  - `currentScenarioResult.badgeLabel` (passed to ScenarioPanel)
  - PDF export hero subtitle / badge area
  - Insight text ("CoC of X is in the [tier] range...")
  - If tier shows differently in any of these — there's a bug in the computed chain
- [ ] `<script setup>` follows the 19-block order
- [ ] Computed properties structure preserved
- [ ] Tables preserve column count and order
- [ ] Result column order preserved (primary → warnings → breakdown → ...)
- [ ] All numeric input fields empty by default (placeholder only)
- [ ] Related calculators use real project slugs
- [ ] FAQ has 8 questions with 2–4 sentence answers
- [ ] No placeholder text anywhere
- [ ] File is complete and self-contained

**If any item fails — fix it before outputting. Do not output a partially matching implementation.**

**Red flag — STOP and re-check:** if your output file is under 2500 lines, you have likely dropped content. The canonical Cap Rate Calculator is 3178 lines. New calculators should be in the same range (±15%).

---

## 8. OUTPUT FORMAT

- Output the **complete working page file** as a single code block
- Do NOT output diffs, patches, or partial code
- Do NOT use placeholders like `// ... rest unchanged` or `<!-- same as template -->`
- The output must be ready to save as `pages/[slug].vue` and work immediately

---

## 9. CRITICAL RESTRICTIONS (CONSOLIDATED)

- Do NOT touch global CSS
- Do NOT modify other calculator pages
- Do NOT rename files
- Do NOT change shared routing or slugs
- Do NOT refactor code, even if it can be improved
- Do NOT introduce new UI patterns
- Do NOT redesign any component
- Do NOT simplify sections or content
- Do NOT remove HTML elements
- Do NOT reorder elements in the DOM
- Do NOT merge sections
- Do NOT restructure computed properties
- Do NOT rename variables beyond what the new logic requires
- Do NOT invent slugs, thresholds, or benchmarks
- Do NOT add decorative or promotional blocks
- **Do NOT remove the mobile sticky result bar at the top of the page**
- **Do NOT show only primary mode in sticky bar — must render result for ALL calculation modes**
- **Do NOT collapse mode selector tabs into a dropdown — keep the multi-tab visual**
- **Do NOT use the same color for all calculation modes — each mode has its own color family**
- **Do NOT reuse the primary-mode metric in PDF hero for all modes — hero must be mode-aware**
- **Do NOT skip form fields in `buildShareParams()` — every input must be shareable via URL**
- **Do NOT let tier label/color diverge between sticky bar, main card, ScenarioPanel, PDF, and insight text — they must match**
- **Do NOT remove the action buttons block (Save Scenario, Share, Export PDF, Email)**
- **Do NOT use `v-if="hasResult"` alone on action buttons wrapper if calculator has reverse modes — include reverse-mode conditions**
- **Do NOT skip `ScenarioPanel` or `EmailCaptureModal` components at the end of `<template>`**
- **Do NOT omit button handler functions: `openSaveScenario`, `shareResult`, `exportPDF`, `buildShareParams`, `onEmailCaptured`**
- **Do NOT omit required refs: `shareSuccess`, `showEmailModal`, `triggerScenarioSave`**
- **Do NOT map `tier.value` to generic Good/Average/Poor in `currentScenarioResult` — pass real tier from RIS**
- **Do NOT use top-level `import` for jsPDF — must be dynamic `await import('jspdf')` inside `exportPDF()`**

---

## 10. FINAL RULE

**Consistency over improvement.**

If something looks wrong but matches the template — keep it.
If something looks better but differs from the template — revert it.

One product. 30 calculators. Identical shell. Different math.
