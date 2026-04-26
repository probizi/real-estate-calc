Прочитай файлы в таком порядке: 1) master-prompt-v4.md 2) brrrr-ris.md 3) brrrr-seo.md 4) pages/cap-rate-calculator.vue (эталон).

Затем создай pages/brrrr-calculator.vue — полный BRRRR Calculator по спецификации.

Критичные требования:

АРХИТЕКТУРА:
- Минимум 2800 строк, канон 3178 по образцу cap-rate-calculator.vue
- 3 режима работы через tabs: Analyze, Find Required ARV, Find Max Purchase Price
- Цветовые семьи: amber для Analyze, blue для Find Required ARV, emerald для Find Max Purchase Price

ПЕРВИЧНЫЕ МЕТРИКИ (уникально для BRRRR):
- DUAL primary metrics: Capital Left in Deal dollar AND Post-Refi Cash-on-Cash процент
- Формат: Capital Left как dollar 8,400 слева, Post-Refi CoC 42 процент annual return справа
- Capital Recovery процент показывается как subtitle: Recovered 94 процент of invested capital
- СПЕЦИАЛЬНЫЙ СЛУЧАЙ Infinite Return: когда Capital Left не больше 0 AND Year 1 Cash Flow больше 0, показывать Infinite Return с молнией
- Capital Left может быть отрицательным: НЕ показывать минус в главном блоке, использовать язык extracted
- Когда Capital Left не больше 0 AND Cash Flow не больше 0: показывать Cash-Out but Losing warning красным, НЕ Infinite Return

ДВУХФАЗНАЯ МОДЕЛЬ:
- Phase 1 это Buy plus Rehab plus HM Hold во время seasoning periods (3-12 месяцев)
- Refi Event это one-time transition на месяце seasoningMonths
- Phase 3 это Year 1 rental operation post-refi
- Scope ограничен Year 1 post-refi, НЕТ multi-year projection

ВРЕМЕННОЕ РАЗДЕЛЕНИЕ (критично антибаг):
- Phase 1 Holding Costs применяются ТОЛЬКО во время seasoning period
- Phase 3 Rental Expenses применяются ТОЛЬКО после refinance
- Одно property но РАЗНЫЕ time periods. НИКОГДА не складывать

4 DERIVED METRIC CARDS:
- Metric 1: 75 процент Rule Check — All-In Cost сравнивается с ARV умножить 0.75. Within rule зелёный Outside rule амбер
- Metric 2: Capital Recovery процент — Refi Proceeds разделить Total Cash Invested умножить 100. Если Cash Invested равно 0 показывать N/A
- Metric 3: Post-Refi DSCR Year 1 — NOI разделить Annual Debt Service
- Metric 4: Post-Refi Annual Cash Flow — NOI минус Debt Service

ФИНАНСИРОВАНИЕ ДВЕ ФАЗЫ:
- Phase 1 всегда Hard Money: 80 процент LTC default, 12 процент rate, 3 points, interest-only during hold
- Toggle hmLoanCoversRehab: по умолчанию true, покрывает Purchase plus Rehab
- Phase 2 Conventional refinance: 75 процент LTV default, 7.5 процент rate, 30-year, 2.5 процент closing

ФОРМУЛЫ BRRRR:
- All-In Cost равно Purchase plus Closing plus Rehab plus Contingency plus Phase 1 Holding plus HM Points plus Total HM Interest. Phase 1 ONLY PRE-refinance
- All-In Cost НЕ включает Refi Closing, New Loan, Year 1 expenses, Year 1 debt service
- Total Cash Invested равно Down Payment plus Closing plus Rehab (только если НЕ финансируется) plus Contingency (только если НЕ финансируется) plus Phase 1 Holding plus HM Points plus Total HM Interest
- Rehab inclusion rule: если hmLoanCoversRehab true то rehab НЕ в Cash Invested. Если false то rehab В Cash Invested
- Down Payment HM равно Purchase умножить (1 минус hmLoanToCostPct) regardless of hmLoanCoversRehab
- HM Loan Payoff at Refi равно HM Loan Amount ТОЛЬКО principal. НЕ включать Interest или Points в payoff
- New Loan Amount равно ARV умножить refiLTVPct
- Refi Closing Costs равно New Loan умножить refiClosingPct. НЕ в All-In Cost, НЕ в Cash Invested. ТОЛЬКО вычитаются в Refi Proceeds
- Refi Proceeds равно New Loan минус HM Payoff минус Refi Closing. NET CASH TO INVESTOR. Может быть отрицательным
- Capital Left равно Total Cash Invested минус Refi Proceeds
- Capital Recovery процент равно Refi Proceeds разделить Total Cash Invested умножить 100

POST-REFI CASH FLOW Phase 3:
- Year 1 Rent Revenue равно Monthly Rent умножить 12
- Year 1 EGI равно Rent умножить (1 минус vacancy) plus Other Income
- Year 1 NOI равно EGI минус Year 1 Operating Expenses
- Annual Debt Service через amortization formula с refiRatePct refiLoanTermYears
- Year 1 Cash Flow равно NOI минус Annual Debt Service
- Year 1 DSCR равно NOI разделить Annual Debt Service
- Post-Refi CoC TIERED: если Capital Left больше 0 то Cash Flow разделить Capital Left умножить 100. Если Capital Left не больше 0 AND Cash Flow больше 0 то Infinite Return. Если Capital Left не больше 0 AND Cash Flow не больше 0 то N/A Negative Cash Flow

CONSISTENCY IDENTITY обязательна:
- All-In Cost равно Total Cash Invested plus HM Loan Payoff (principal only)
- Tolerance dollar 1-5 rounding
- Проверять в каждом расчёте

75 процент RULE BRRRR-specific:
- Target равно ARV умножить 0.75
- Within rule если All-In не больше Target
- Outside rule если All-In больше Target
- Отличается от Fix and Flip 70 процент Rule

AMORTIZATION special case:
- Если refi rate равно 0 то Monthly Payment равно Principal разделить n (seller carry)
- Conventional Remaining Balance формулы для r больше 0 и r равно 0 обе реализованы

REVERSE MODES:
- Mode 2 Find Required ARV: binary search bounds Purchase Price до 3 умножить All-In, tolerance dollar 500, 100 iterations, target Capital Left равно 0
- Mode 2 edge: если недостижимо то null plus сообщение Full capital recovery not achievable
- Mode 3 Find Max Purchase Price: binary search bounds dollar 10000 до 2 умножить ARV, tolerance dollar 500
- Mode 3 price влияет на HM Loan, HM Points, HM Interest, Closing, Down Payment, Cash Invested
- Оба reverse modes returns null plus сообщение если недостижимо

ТИРЫ 6 plus Special (ключ Capital Left НЕ CoC):
- Проверять Special Tier ПЕРЕД Tier 1
- Special Tier: Capital Left не больше 0 AND Cash Flow не больше 0 — Cash-Out but Losing — red DC2626
- Tier 1: Capital Left не больше 0 AND Cash Flow больше 0 — Infinite Return — emerald 059669
- Tier 2: dollar 1 до dollar 5000 — Exceptional — emerald 10B981
- Tier 3: dollar 5001 до dollar 15000 — Strong — amber F59E0B
- Tier 4: dollar 15001 до dollar 30000 — Solid — orange FB923C
- Tier 5: dollar 30001 до dollar 60000 — Weak — dark orange F97316
- Tier 6: больше dollar 60000 OR Refi Shortfall — Critical — red DC2626

UX ПРАВИЛА:
- Placeholder rule: все input placeholders это текстовые инструкции Enter purchase price, Enter ARV. НЕ использовать e.g. числа. Баг из DSCR не повторять
- Нигде не использовать qualifies for. Баг из DSCR не повторять
- Before-tax analysis label в Overview, Limitations, FAQ
- Refi proceeds НЕ taxable — в FAQ
- Rental income taxable ordinary income — в FAQ

ВИЗУАЛИЗАЦИИ:
- Capital Flow Waterfall с refi event в центре
- Timeline Chart с выделенным REFI EVENT месяцем

3 SENSITIVITY TABLES:
- ARV умножить Refi LTV
- Rehab умножить Seasoning
- HM Rate умножить Refi Rate

SCENARIOS:
- Conservative: ARV умножить 0.92, Rehab умножить 1.20, Seasoning plus 2, HM Rate plus 1 процент, Refi LTV минус 5 процент
- Base: пользовательские
- Optimistic: ARV умножить 1.05, Rehab умножить 0.95, Seasoning минус 1. С пометкой rare in 2026

PROJECT TIMELINE TABLE:
- Столбцы Month, Phase, Cumulative Cash, Loan Balance, Event
- REFI EVENT row визуально выделен
- Отдельная строка Year 1 Total

6 ТЕСТОВЫХ КЕЙСОВ из brrrr-ris.md:
- Test 1 standard Capital Left в dollar 0 до dollar 5000
- Test 2 Infinite Return (deep-value) Capital Left отрицательный
- Test 3 Failed BRRRR refi shortfall
- Test 4 Find Required ARV reverse
- Test 5 75 процент Rule boundary
- Test 6 r равно 0 amortization
- Tolerance plus minus 0.5 процент для percentage, plus minus dollar 100 для dollar sums
- КАЖДЫЙ тест проверяет consistency identity

MASTER PROMPT V4 обязательно:
- Action buttons wrapper покрывает все 3 режима
- jsPDF через await import jspdf внутри функции
- ScenarioPanel calculator prop равно brrrr
- currentScenarioResult передаёт реальный tier label включая Infinite Return и Cash-Out but Losing
- Mobile sticky bar mode-aware
- PDF hero mode-aware. Для Infinite Return hero показывает молнию
- Tier consistency в 5 местах
- URL params короткие: pp, av, ac, rb, rc, rd, sm, p1m, p1h, p1t, p1i, p1u, p1ha, p1o, hltc, hir, hpp, hcr, rltv, rir, rlt, rcm, rcp, rcd, mr, oi, vr, rem, res, rept, cm, cp, cd, tcl, pt, md

SEO КОНТЕНТ из brrrr-seo.md 14 секций в ПРАВИЛЬНОМ ПОРЯДКЕ:
1 Overview 4 параграфа
2 How to Use 5 шагов 4 pro tips Special Tier plus 6 tiers
3 Inputs and Outputs
4 Formula с FORMULA_INTRO_BOX разделение Cash Invested vs All-In Cost, worked Atlanta GA example
5 What Is 3 параграфа определение 75 процент Rule Infinite Return
6 Result Meaning Special Tier plus 6 тиров
7 Benchmarks по strategy и по штату каждый минимум 2 фактора
8 Strategy 5 блоков First-Time Scaling Deep-Value BRRRR-to-Hold Failed BRRRR
9 Applications 6 use cases
10 Industry Standards 75 процент Rule Conventional Refi Professional Benchmarks
11 Limitations 4 items plus When Not to Use
12 Common Mistakes 5 items
13 FAQ 8 Q and A
14 Related Calculators

Весь контент строго из brrrr-seo.md. НЕ придумывать свой текст. Следовать TITLE hardcoded fallback правилу.

ПОСЛЕ СОЗДАНИЯ:
1 wc -l pages/brrrr-calculator.vue минимум 2800
2 npm run build
3 Если билд успешен pm2 restart real-estate-calc
4 curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/brrrr-calculator
5 Отчитайся о строках, билде, HTTP коде

Если билд упал покажи ошибку и НЕ перезапускай pm2.

ЧЕКЛИСТ:
- Минимум 2800 строк
- 3 режима amber blue emerald
- Dual primary Capital Left plus Post-Refi CoC
- Infinite Return ТОЛЬКО когда Capital Left не больше 0 AND Cash Flow больше 0
- Cash-Out but Losing Special Tier при Capital Left не больше 0 AND Cash Flow не больше 0
- 4 derived metrics 75 процент Rule Capital Recovery DSCR Cash Flow
- Placeholder Enter не e.g.
- Seasoning 3 до 12 месяцев
- Phase 1 Holding НЕ включают loan interest
- Phase 1 vs Phase 3 разделены по времени
- Refi Closing ТОЛЬКО в Refi Proceeds
- HM Payoff только principal
- Consistency Identity реализована tolerance dollar 1-5
- Action buttons охватывают 3 режима
- 14 SEO секций в порядке
- jsPDF dynamic import
- URL params короткие
- TITLE hardcoded fallback BRRRR Calculator Capital Recovery RealCalc 47 символов

Если хотя бы один пункт не выполнен НЕ деплой исправь сначала.
