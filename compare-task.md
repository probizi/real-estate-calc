Прочитай файлы в таком порядке: 1) master-prompt-v4.md 2) compare-ris-prompt-final.md 3) compare-seo-prompt-final.md 4) compare-seo-validation-prompt.md (companion audit file) 5) pages/cap-rate-calculator.vue (эталон).

Затем создай pages/compare-real-estate-deals.vue — полный Compare Real Estate Deals Calculator по спецификации.

Это САМЫЙ СЛОЖНЫЙ калькулятор проекта. 7 раундов RIS review, 3 раунда SEO review, 49 фиксов применены. Следуй документации строго — НЕ импровизируй.

Критичные требования:

АРХИТЕКТУРА:
- Минимум 3500 строк (больше любого предыдущего калькулятора из-за 3 режимов, hub-screener, 4 tier logic, dual-line chart)
- 3 режима работы через tabs: Compare Deals, Find Break-Even, Deal Screening
- Цветовые семьи: indigo для Compare Deals, blue для Find Break-Even, emerald для Deal Screening
- Это DECISION ENGINE, не просто калькулятор — архитектура должна это отражать

ПЕРВИЧНЫЕ МЕТРИКИ DUAL (оба обязательно, никогда не опускать):
- 5-Year Total Return dollar (absolute 60-month profit, normalized across strategies)
- Annualized Return percent (CAGR для Rental/BRRRR и Flip reinvestment, IRR только для single-flip mode)
- Оба показываются на каждой deal card крупным шрифтом
- Annualized Return label СТРОГО per mode:
  Rental: (5Y CAGR)
  BRRRR: (5Y CAGR)
  Flip reinvestment Mode A: (5Y CAGR, reinvestment) — НЕ IRR
  Flip reinvestment Mode C: (5Y CAGR, reinvestment with ROI compression)
  Flip single-flip: (IRR, single flip) — единственный label с IRR

ВТОРИЧНАЯ МЕТРИКА Composite Score:
- Score 0 до 100, 6-factor weighted
- Weights hardcoded: Return 30 процент, Risk 20, Liquidity 15, Time-to-Profit 15, Effort 10, Scalability 10
- Return_Score использует RANK+DELTA HYBRID: Rank Bonus (top +25, middle 0, bottom −25) + Delta Bonus capped (±25) = stable Score 0-100
- Return_Score HARD FLOOR: если Deal Annualized Return ≤ 0 то Return_Score равно 0 (skip hybrid formula). Это CRITICAL антибаг
- Return_Score вычисляется из ANNUALIZED Return, НЕ Total Return (aligns Composite с Winner logic)
- Risk Score DYNAMIC: baseline Rental 70, BRRRR 55, Flip 40 — НО это starting hints, не floors. Adjustments по leverage, DSCR, rehab intensity, hold duration, deal quality, market context могут дать low-risk Flip (70) vs high-risk Rental (10)

WINNER LOGIC 4-STEP PIPELINE (критично антибаг):

STEP 0 — EXACT TIE HANDLING (runs FIRST):
- Если AR_delta_pp меньше 0.1 pp (floating-point tolerance) то Winner определяется ТОЛЬКО по Composite Score
- Sub-tiers: CS_delta ≥10 Clear Winner, 5-10 Slight Edge, меньше 5 Too Close to Call
- Если Step 0 triggered, остальные шаги не выполняются

STEP 1 — RETURN DOMINANCE CHECK:
- Если AR_2 больше 0 AND AR_delta_rel больше или равно 25 процент то forced Clear Winner regardless of Composite Score
- Если AR_2 меньше или равно 0 AND AR_delta_pp больше или равно 8 pp то forced Clear Winner
- Rationale: 25 процент relative Annualized lead economically decisive, Composite не может переопределить

STEP 2 — STANDARD TIER DECISION:
- Clear Winner: AR_delta_pp больше или равно 5 pp AND CS_delta больше или равно 10
- Slight Edge: AR_delta_pp 1-5 pp OR (AR ≥5pp AND CS меньше 10) OR (CS ≥10 AND AR меньше 5pp)
- Too Close to Call: AR_delta_pp меньше 1 AND CS_delta меньше 5

STEP 3 — CLUSTER CHECK (только для 3 deals):
- Если 3 deals AND abs(AR_1 минус AR_3) меньше 2 pp AND max-min CS меньше 10 то override к Cluster Detected
- Return Dominance Rule переопределяет Cluster Check (dominance всегда wins)

НЕГАТИВНЫЕ СДЕЛКИ GUARD:
- Если AR_2 не больше 0 OR TR_2 не больше 0 то использовать ТОЛЬКО absolute dollar gap и absolute pp gap
- НИКОГДА не использовать relative percentage когда runner-up отрицательный
- Предотвращает math breakdown типа gap равно plus 20K минус минус 10K разделить минус 10K равно минус 300 процент

NORMALIZATION INVARIANT (обязательно):
- Per deal: abs(5-Year Total Return минус (CumCashFlow плюс Terminal Equity минус Cash Invested)) не больше 100 dollar
- Если fails то deal INVALID и banner Deal X has a calculation inconsistency Please verify inputs
- Winner НЕ выдаётся если любой deal INVALID

EXTREME FLIP LOOP GUARD auto-downgrade (критично):
- Если Flip Mode A или C даёт Annualized Return больше 80 процент AND это Winner deal
- Winner tier AUTOMATICALLY DOWNGRADED одним уровнем:
  Clear Winner становится Slight Edge
  Slight Edge становится Too Close to Call
  Too Close остаётся (no change)
- Winner banner ОБЯЗАТЕЛЬНО включает: Projection depends on aggressive compounding see warning on Deal X
- Amber warning показывается независимо на deal card
- НЕ downgrade для Flip single-flip mode — там IRR может быть высоким legitimately

HYBRID STRATEGIES поддержка:
- До 3 deals одновременно
- Любая комбинация: Rental plus Rental plus Rental, Rental plus BRRRR, Rental plus Flip plus BRRRR, две Flips side-by-side
- Каждый deal имеет strategy selector (Rental, Fix and Flip, BRRRR)

НОРМАЛИЗАЦИОННЫЙ ДВИЖОК per strategy:

Rental (hold through Year 5):
- Cash Invested_0 равно Purchase умножить dp плюс Purchase умножить cc
- Monthly CashFlow_m через amortization и compound rent growth
- Terminal Equity_60 равно Property Value_60 минус Loan Balance_60 (EQUITY BASIS, no selling costs)
- 5-Year Total Return равно CumCashFlow плюс (Equity_60 минус Cash Invested_0)
- Annualized Return равно ((Terminal плюс CumCashFlow) разделить Cash Invested)^(1/5) минус 1

Fix and Flip MODE A Reinvestment (default):
- Single flip Net Sale at month H
- Reinvestment chain: N flips в 60 months, ROI compounds
- Total Accumulated_60 через compound
- 5-Year Total Return равно Total Accumulated_60 минус Cash Invested_0
- Annualized Return равно (Total Accumulated_60 разделить Cash Invested_0)^(1/5) минус 1 это CAGR

Fix and Flip MODE C ROI Degradation (opt-in):
- Default degradation d равно 0.07 (7 процент per cycle, user adjustable 0-15)
- Each subsequent flip ROI reduces by d
- Toggle Realistic assume ROI compression over time
- UI label (5Y CAGR reinvestment with ROI compression)

Fix and Flip MODE B Idle Yield (HIDDEN в v1):
- НЕ visible в default UI, ТОЛЬКО через Advanced Settings
- 4 процент treasuries/HYSA после sale
- Reduces cognitive burden default mode is Mode A

Fix and Flip SINGLE FLIP mode:
- No reinvestment assumption
- Annualized Return равно IRR (Newton-Raphson или bisection, tolerance 0.01 процент)
- Единственный mode где label (IRR, single flip)

BRRRR Normalized:
- Phase 1 holding costs during seasoning
- Refi event at month S
- Phase 3 post-refi cash flow months S+1 до 60
- Capital Left в Deal равно Cash Invested_0 минус Refi Proceeds
- Cash Recovered at Refi shown SEPARATELY (не как profit!)
- 5-Year Total Return равно CumCashFlow_Phase1 плюс Refi Proceeds плюс CumCashFlow_Phase3 плюс (Equity_60 минус Capital Left)
- Если Capital Left не больше 0 то Infinite Capital Recovery (similar to BRRRR calculator)

REFI PROCEEDS SEPARATION (BRRRR):
- Cash Recovered at Refi НЕ добавляется в Total Return
- НЕ contributes к Composite Score Return factor
- Показывается на отдельной строке deal card: Cash Recovered at Refi dollar 18500 (capital extracted via refinance, separate from profit)
- Common user confusion: refi cash это your own equity loaned back, НЕ profit

BREAK-EVEN SINGLE SOURCE OF TRUTH:
- Operating Break-Even Month M где CumCashFlow_m ≥ 0 (cash flow only)
- EXCLUDES Unrealized Equity (appreciation это paper gain)
- EXCLUDES Refi Proceeds (borrowed money)
- EXCLUDES Sale Proceeds (terminal event)
- Для Flip: Operating Break-Even равно Sale Event month H с label (Sale Event — not recurring operational cash flow)
- Financial Break-Even для BRRRR: включает Refi Proceeds как cash event
- Naming: ТОЛЬКО Financial Break-Even. Запрещённые синонимы Capital Recovery Break-Even, Cash Recovery Break-Even
- Time-to-Profit Score использует ТУ ЖЕ формулу что Operating Break-Even (cash-flow-only)
- Typical Rental Operating Break-Even 30-60+ months; показывать Beyond 60 months если за горизонт

TERMINAL VALUE equity basis:
- Для Rental/BRRRR: Terminal Value_60 равно Property Value_60 минус Loan Balance_60
- НЕ вычитать selling costs 6-8 процент — это unrealized equity, не sale
- Для Flip: Net Sale Proceeds (после selling costs) применяется as terminal cash flow
- CROSS-CUT: SEO контент, FAQ, Vue implementation все должны поддерживать этот rule
- Любое появление умножить 0.94 или минус 6 процент selling cost на month-60 Rental/BRRRR это BUG

GLOBAL MARKET ASSUMPTIONS:
- Annual Appreciation процент и Annual Rent Growth процент применяются UNIFORMLY ко всем deals by default
- Default values 3 процент и 3 процент
- Отдельная Market Assumptions panel в UI вверху calculator
- Advanced mode toggle: Use different market assumptions per deal активирует per-deal override с WARNING banner "You are using different market assumptions across deals This may produce biased results"
- URL params: g_ga и g_gr для global, d{N}_ga и d{N}_gr для per-deal override активны ТОЛЬКО когда g_adv=1
- Auto-detection: если все d{N}_ga identical то collapse к global, если different то активировать advanced mode

IMPORT SCHEMA hub-screener (главная фича):
- URL params из Rental Property, Fix and Flip, BRRRR, ARV calculators auto-populate Compare Deals
- Базовый URL: /compare-real-estate-deals
- Deal slot N (1, 2, 3): d{N}_type (rental/flip/brrrr/empty), d{N}_label (default Deal N)
- Rental params: d{N}_p, d{N}_dp, d{N}_cc, d{N}_lr, d{N}_lt, d{N}_r, d{N}_vc, d{N}_op, d{N}_gr, d{N}_ga
- Flip params: d{N}_p, d{N}_rb, d{N}_h, d{N}_sc, d{N}_arv, d{N}_hc, d{N}_hmr, d{N}_hpt
- BRRRR params: d{N}_p, d{N}_rb, d{N}_arv, d{N}_s, d{N}_hmr, d{N}_rlt, d{N}_rir, d{N}_r, d{N}_vc, d{N}_op, d{N}_gr, d{N}_ga
- Global params: g_ga, g_gr, g_adv, mode (compare/break-even/screening)
- ARV Calculator import: mode=screening, arv=280000, arv_confidence=HIGH для Mode 3

TYPE VALIDATION при импорте (критично):
- Per-strategy ALLOWED/IGNORED param sets жёстко
- Если d1_type=rental AND присутствует d1_rb (rehab — Rental не имеет rehab) то silently drop и warning
- Warning banner: Some imported parameters do not match selected strategy and were ignored Deal 1 imported as Rental but received rehab_budget ignored
- Graceful degradation: если d{N}_type missing но params present, infer strategy

ARV CONFIDENCE PASS-THROUGH:
- Если deal импортируется из ARV Calculator с confidence tier
- ARV value fills deal.arv
- ARV Confidence Tier (HIGH/MEDIUM/LOW) adjusts Risk Score:
  HIGH: plus 5 Risk Score
  MEDIUM: no change
  LOW: minus 15 Risk Score AND auto-flag ARV estimate has LOW confidence Total Return is highly sensitive to this input

UX ПРАВИЛА:
- Placeholder rule: ВСЕ input placeholders это текстовые инструкции (Enter purchase price). НЕ использовать e.g. числа. Баг DSCR не повторять
- НЕ использовать qualifies for. Баг DSCR не повторять
- Dual primary metrics displayed на каждой deal card: Total Return dollar ПЛЮС Annualized Return процент (никогда не опускать один из них)
- Annualized Return отображается 1 знак после запятой (11.2 процент, не 11 или 11.23)
- Dollar amounts rounded to nearest 100 for display (internal precision 1 dollar)
- Winner banner ВСЕГДА ссылается на Annualized Return как primary justification (22.4 процент vs 18.1 процент annualized), Total Return как context
- Pre-tax analysis disclaimer в 5 местах: Overview P4, How to Use Step 5, per-deal card inline text, Limitations dedicated item, FAQ Q5
- Not a lender underwriting tool disclaimer в 4 местах: Overview P4, Limitations, FAQ Q8, How to Use Step 5
- Language: projects estimates compares. НИКОГДА calculates determines

VISUAL PRIORITY RULE (критично UX):
- Winner deal card ДОЛЖЕН быть visually dominant даже если non-Winner имеет higher Composite Score
- Winner card: solid highlighted border (emerald или indigo), background tint 5-8 процент opacity, WINNER badge в top-right, primary metrics 120 процент type scale, elevation shadow
- Runner-up/Third deal cards: neutral 1px border, no tint, no badge, standard type scale, flat
- Composite Score для non-winners: 70 процент opacity, same size as Winner (НЕ делать больше!)
- CSS classes: deal-card--winner vs deal-card--neutral, winner-banner--clear vs winner-banner--slight vs winner-banner--tie
- EXCEPTION для Too Close to Call или Cluster Detected: ВСЕ cards neutral styling, no WINNER badge
- Rationale: visual hierarchy должна соответствовать decision hierarchy. Это product-integrity requirement, НЕ aesthetic choice

HIGHEST RETURN NOT HIGHEST SCORE badge (secondary):
- Если Winner_CS меньше max(CS across all deals)
- Display ADDITIONAL BADGE ниже Winner banner: Highest Return not Highest Score
- Explanation: This deal wins on annualized return Deal Y scores higher on Composite Score due to top factor where Y leads
- Amber color, info icon
- Срабатывает в Clear Winner и Slight Edge tiers, НЕ в Too Close/Cluster

MIXED IRR PLUS CAGR UI NOTE:
- Если comparison содержит single-flip IRR deal AND любой CAGR deal
- Display methodology disclosure banner ниже Winner banner: Mixed annualization methods in this comparison IRR for single flips 5Y CAGR for multi-year holds and flip reinvestment chains Comparison normalized to annual-rate terms but timing differs
- Blue info color (не warning amber)
- Collapsible через Got it button

3 РЕЖИМА detail:

Mode 1 Compare Deals (default, indigo):
- 2-3 deal cards с strategy selector
- Side-by-side Total Return plus Annualized Return plus Composite Score
- Winner banner с tier
- 60-month Cumulative Cash Flow chart (dual-line: solid Operating, dashed Wealth Position)
- 6-Factor Composite Radar chart
- Deal-level breakdown tables

Mode 2 Find Break-Even (blue, reverse):
- User selects target deal, adjust deal, pivot variable (Purchase Price, Rent, ARV, Rehab, Appreciation)
- Binary search bounds plus minus 50 процент pivot value, target Total Return equality plus minus 500 dollar, max 100 iterations
- Returns required pivot value OR null plus Break-even not achievable within plus minus 50 процент bounds

Mode 3 Deal Screening (emerald, filter):
- User defines criteria: Min Total Return, Min Composite Score, Max Cash Invested, Min Risk Score
- Each deal evaluated PASS/CONDITIONAL/FAIL
- Explanation который criteria failed per deal

4 DERIVED METRIC CARDS per deal:
- Metric 1: Initial Cash Invested dollar (strategy-specific)
- Metric 2: Year 1 Cash-on-Cash процент (Rental standard, BRRRR post-refi, Flip N/A показывает Flip Profit процент instead)
- Metric 3: Operating Break-Even Month (cash flow only, no equity)
- Metric 4: Risk Flag Summary (LOW/MODERATE/HIGH с auto-generated warnings)

Для BRRRR дополнительно показывать Financial Break-Even Month и Cash Recovered at Refi dollar

ВИЗУАЛИЗАЦИИ:
- Total Return Bar Chart (horizontal, color-coded by strategy)
- 60-Month Cumulative Cash Flow Chart (dual-line: solid Operating, dashed Wealth Position) с annotations для Refi events и Flip sale events
- 6-Factor Composite Score Radar Chart (hexagonal, Winner highlighted)
- Deal Flow Comparison Table (dual primary metrics, Composite, Cash Invested, Year 1 CoC, Break-Even, Risk Flag)

3 SENSITIVITY TABLES:
- Appreciation umножить Rent Growth (global assumptions shift Winner)
- Deal-Specific Pivot (user selects deal и pivot variable)
- Cross-Strategy Composite Weight Sensitivity (advanced/details section)

SCENARIOS:
- Conservative: Rent growth минус 2 pp, Appreciation минус 2 pp, Vacancy плюс 5 pp, OpEx плюс 5 pp, ARV умножить 0.92, Rehab умножить 1.20, HM/Refi Rate плюс 1 pp
- Base: пользовательские
- Optimistic: Rent growth плюс 1 pp, Appreciation плюс 1 pp, Vacancy минус 2 pp, ARV умножить 1.05, Rehab умножить 0.95 (пометка Rare in 2026)
- Применяются uniformly across all deals (включая per-deal overrides by same delta)
- Если Winner changes across scenarios то display Winner Sensitive to Assumptions warning

10 ТЕСТОВЫХ КЕЙСОВ из compare-ris-prompt-final.md:
- Test 1: Classic Rental vs BRRRR (Clear Winner scenario)
- Test 2: Rental vs Fix and Flip (Slight Edge scenario)
- Test 3: Too Close to Call (two similar Rentals)
- Test 4: BRRRR с Infinite Return
- Test 5: All deals negative (edge case)
- Test 6: Mixed 3-way comparison
- Test 7: URL import from Rental Calculator
- Test 8: Find Break-Even mode (reverse)
- Test 9: Deal Screening mode (filter)
- Test 10: Normalization Invariant stress test (10 random deals)
- Tolerance plus minus 100 dollar, plus minus 0.5 процент, plus minus 1 month Break-Even
- КАЖДЫЙ тест проверяет 4 шага Winner pipeline

MASTER PROMPT V4 обязательно:
- Action buttons wrapper покрывает все 3 режима
- jsPDF через await import jspdf внутри функции
- ScenarioPanel calculator prop равно compare
- currentScenarioResult передаёт реальный Winner tier label (Clear Winner, Slight Edge, Too Close to Call, Cluster Detected)
- Mobile sticky bar mode-aware
- PDF hero mode-aware с Winner banner plus Annualized Return plus Total Return
- Tier consistency в 5 местах
- URL params короткие как описано выше
- Include всё для hub-screener imports

SEO КОНТЕНТ из compare-seo-prompt-final.md 15 секций в ПРАВИЛЬНОМ ПОРЯДКЕ:

1 TITLE hardcoded Compare Real Estate Deals — Strategy Hub | RealCalc (51 chars) — NO custom generation
2 META hardcoded Compare real estate deals side-by-side — Rental vs BRRRR vs Flip See 5-year profit annualized return and winner tier Free tool for investors (157 chars) — NO custom generation
3 H1 hardcoded Compare Real Estate Deals Calculator — Rental vs Flip vs BRRRR Side-by-Side (75 chars) — NO custom generation
4 Overview 4 параграфа
  P1 plain-language opener VERBATIM The Compare Real Estate Deals Calculator helps you compare real estate deals side by side and see which one performs better over 5 years and understand which deal is likely to perform better based on your inputs
  P1 содержит AT LEAST TWO из 3 secondary keywords: compare investment properties, rental vs flip vs brrrr, real estate deal comparison
  P4 pre-tax disclaimer первое placement
5 How to Use 5 шагов plus 4 pro tips plus 4 Winner tier explanations (Clear Winner, Slight Edge, Too Close to Call, Cluster Detected)
  Step 5 pre-tax disclaimer второе placement
6 Inputs and Outputs (global assumptions plus per-deal strategy-specific)
7 Formula с FORMULA_INTRO_BOX NORMALIZATION ENGINE framing, 13-step methodology, FORMULA_BOX, FORMULA_VISUAL ASCII schema, worked Charlotte NC 2026 example с 3 deals
8 What Is 3 параграфа (normalization, Winner philosophy, capital allocation framing)
9 Result Meaning 4 tier blocks (Clear Winner, Slight Edge, Too Close to Call, Cluster Detected) с 2026 market context
10 Benchmarks by strategy pair (Rental vs BRRRR, Rental vs Flip, BRRRR vs Flip, 3-way) plus by deal volume plus disclaimer illustrative patterns not measured datasets
11 Strategy 5 блоков (First-Time, Scaling, Flipper-to-Holder, Wholesaler, Agent)
12 Applications 6 use cases
13 Industry Standards (normalization methodology, Winner Tiering philosophy, peer comparison DealCheck/BiggerPockets/Mashvisor)
14 Limitations 5 items (pre-tax only, reinvestment assumption, 5-year fixed, appreciation, subjective weights) plus When Not to Use 7 scenarios
  Limitations pre-tax disclaimer третье placement
15 Common Mistakes 5 items
16 FAQ 9 Q and A
  Q5 pre-tax disclaimer четвёртое placement dedicated question
  Q8 lender disclaimer
  Q9 Extreme Flip Guard и auto-downgrade
17 Related Calculators (Rental Property, Fix and Flip, BRRRR, ARV, Cap Rate/NOI/DSCR/CoC, Mortgage)

Pre-tax disclaimer пятое placement inline на каждой deal card small footnote.

Весь контент строго из compare-seo-prompt-final.md. НЕ придумывать свой текст. Следовать TITLE/META/H1 hardcoded fallback правилам.

STRUCTURE PRESERVATION CRITICAL:
- Каждая секция отдельный H2 блок
- Paragraph length 2-5 sentences max
- Lists как bullets, НЕ конвертировать в paragraphs
- Не merge sections, не collapse headings в prose

ПОСЛЕ СОЗДАНИЯ:
1 wc -l pages/compare-real-estate-deals.vue минимум 3500
2 npm run build
3 Если билд успешен pm2 restart real-estate-calc
4 curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/compare-real-estate-deals
5 Отчитайся о строках, билде, HTTP коде

Если билд упал покажи ошибку и НЕ перезапускай pm2.

ЧЕКЛИСТ (critical items only, full 48-check audit через compare-seo-validation-prompt.md):
- Минимум 3500 строк
- 3 режима indigo blue emerald
- DUAL primary metrics Total Return dollar plus Annualized Return процент (оба на каждой deal card)
- Winner logic 4-step pipeline (Exact Tie, Return Dominance, Standard Tier, Cluster Check)
- 4 Winner tier labels verbatim: Clear Winner, Slight Edge, Too Close to Call, Cluster Detected
- Annualized Return label strict per mode (5Y CAGR / 5Y CAGR reinvestment / IRR single flip)
- Composite Score 6-factor weighted с Return_Score на Annualized (HARD FLOOR при AR не больше 0)
- Risk Score dynamic (leverage, DSCR, rehab intensity, hold duration)
- Normalization Invariant проверка per deal (plus minus 100 dollar)
- Operating Break-Even cash-flow-only (НЕ equity, НЕ refi)
- Financial Break-Even ТОЛЬКО для BRRRR (не forbidden synonyms Capital Recovery Break-Even)
- Cash Recovered at Refi показывается SEPARATELY от Total Return
- Terminal Value equity basis (no selling costs на month 60 для Rental/BRRRR)
- Global Market Assumptions (Appreciation, Rent Growth) applied to all deals by default
- Per-deal override только в advanced mode с warning banner
- Type validation per-strategy ALLOWED/IGNORED sets при URL import
- ARV Confidence pass-through adjusts Risk Score
- Extreme Flip Guard AR больше 80 процент auto-downgrades Winner tier с mandatory banner
- Visual Priority Rule Winner card solid border plus tint plus badge plus 120 процент type scale
- Highest Return not Highest Score badge когда Winner CS меньше max CS
- Mixed IRR plus CAGR UI note когда comparison содержит single-flip plus CAGR deals
- 4 DERIVED metrics Cash Invested, Year 1 CoC, Operating Break-Even, Risk Flag
- Dual-line 60-Month Cumulative Cash Flow chart (solid Operating, dashed Wealth Position)
- 6-Factor Composite Radar chart с Winner highlighted
- Placeholder Enter не e.g.
- Language estimates projects compares НЕ calculates determines
- Pre-tax disclaimer в 5 местах (Overview P4, How to Use Step 5, deal card, Limitations, FAQ Q5)
- Not a lender disclaimer в 4 местах
- Action buttons охватывают 3 режима
- 15 SEO секций в порядке
- jsPDF dynamic import
- URL params hub-screener schema с validation
- TITLE hardcoded Compare Real Estate Deals — Strategy Hub | RealCalc 51 chars
- META hardcoded 157 chars
- H1 hardcoded 75 chars с calculator и vs Flip vs BRRRR
- OVERVIEW_P1 opens с mandatory verbatim plain-language sentence

Если хотя бы один пункт не выполнен НЕ деплой исправь сначала.

ПОСЛЕ УСПЕШНОГО ДЕПЛОЯ (опционально но рекомендуется):
Запусти second-pass validation через compare-seo-validation-prompt.md против сгенерированной страницы. Это 48-item full audit который проверит keyword coverage, structure compliance, disclaimer placements, anti-pattern terminology, cross-linking, schema. Возвращает structured pass/fail report с specific section references для any failures.

Это СЛОЖНЫЙ калькулятор. Следуй compare-ris-prompt-final.md (2598 строк) и compare-seo-prompt-final.md (1496 строк) точно. 49 фиксов от эксперта применены в документации — все critical antibug mechanisms там есть. НЕ импровизируй методологию.
