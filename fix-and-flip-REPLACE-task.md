ЗАМЕНИ полностью файл pages/fix-and-flip-calculator.vue новой версией.

ВАЖНО: старый файл НЕ РЕДАКТИРОВАТЬ. Удали его полностью и создай новый с нуля.

Причина: текущий файл (612 строк) не соответствует спецификации — в нём нет 3 режимов работы, нет правильной архитектуры, использует placeholder с числами, тиры не совпадают с RIS, нет Action Buttons, PDF export, ScenarioPanel, sensitivity analysis, scenario analysis, project timeline table.

Новый файл должен быть создан строго по этой инструкции:

ШАГ 1 — Прочитай файлы в таком порядке: 
1) master-prompt-v4.md 
2) fix-and-flip-ris.md 
3) fix-and-flip-seo.md 
4) pages/cap-rate-calculator.vue (эталон архитектуры, минимум 3178 строк)

ШАГ 2 — УДАЛИ старый pages/fix-and-flip-calculator.vue полностью.

ШАГ 3 — Создай новый pages/fix-and-flip-calculator.vue с нуля следуя архитектуре cap-rate-calculator.vue.

Критичные требования:

АРХИТЕКТУРА:
- Минимум 2800 строк, канон 3178 по образцу cap-rate-calculator.vue
- 3 режима работы через tabs: Analyze, Find Max Purchase Price, Find Max Rehab Budget
- Цветовые семьи по режимам: amber для Analyze, blue для Find Max Purchase Price, emerald для Find Max Rehab Budget
- Каждый режим имеет свой computed для результата, свой формат отображения, свою sticky mobile bar

ФИНАНСИРОВАНИЕ (3 режима через toggle, не вкладки):
- Hard Money по умолчанию: interest-only monthly, points 2-4 процент upfront, rate 10-14 процент, often covers both purchase and rehab (toggle hmLoanCoversRehab)
- Conventional: amortizing 30-year standard, rate 7-8 процент, down payment 25 процент default
- All Cash: Loan Amount равно 0, Loan Points равно 0, Total Loan Interest равно 0
- URL param ft: hm для Hard Money, conv для Conventional, cash для All Cash
- Когда ft равно hm парсить только hm поля, игнорировать conv поля. Когда ft равно conv наоборот. Когда ft равно cash игнорировать все financing поля

ПЕРВИЧНЫЕ МЕТРИКИ:
- DUAL primary metrics: Total Profit dollar AND ROI процент
- Формат главного блока: Total Profit как крупное число 52,400 dollar, ROI 42.1 процент over 6 months ниже
- Hold period ТОЛЬКО в МЕСЯЦАХ: 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. Default 6

4 DERIVED METRIC CARDS (правая колонка):
- Metric 1: 70 процент Rule Max Offer равно (ARV умножить 0.70) минус Rehab Budget. С индикатором Within rule зелёный или Outside rule амбер
- Metric 2: Break-Even Sale Price равно (Total Cash Invested плюс Remaining Loan) разделить (1 минус Sale Costs процент). Именно Cash Invested, НЕ Project Costs
- Metric 3: Annualized ROI равно ((1 плюс ROI разделить 100) в степени (12 разделить months) минус 1) умножить 100
- Metric 4: Profit per Month равно Total Profit разделить holdPeriodMonths. Thresholds context-dependent по рынкам

ФОРМУЛЫ:
- Total Profit равно Net Sale Proceeds минус Total Cash Invested
- ROI равно Total Profit разделить Total Cash Invested умножить 100
- Holding Costs включают ТОЛЬКО: property tax, insurance, utilities, HOA, other. НЕ включают loan interest
- Loan Costs это отдельная категория: Points плюс Interest. НИКОГДА не смешивать с Holding Costs
- Total Cash Invested включает: Down Payment плюс Closing плюс Rehab (только если НЕ финансируется) плюс Contingency (только если НЕ финансируется) плюс Total Holding Costs плюс Loan Points плюс Total Loan Interest
- Total Holding Costs это реальный cash outflow, НЕ reserve
- Total Loan Interest это реальный cash outflow к лендеру
- Total Project Costs равно Purchase плюс Closing плюс Rehab плюс Contingency плюс Total Holding Costs плюс Loan Points плюс Total Loan Interest плюс Sale Costs
- Consistency identity обязательна: Total Project Costs равно Total Cash Invested плюс Remaining Loan Balance. Должна совпадать в пределах dollar 1-2 rounding tolerance. Проверяется в каждом расчёте
- Down Payment в Hard Money равно Purchase Price умножить (1 минус hmLoanToCostPct), regardless of hmLoanCoversRehab toggle
- Amortization special case: если rate равно 0 то Monthly Payment равно Principal разделить n (для seller financing)
- Conventional loan: Total Interest равно (Monthly Payment умножить months) минус Principal Reduction. Principal Reduction равно P минус Remaining Balance after M months. Remaining Balance равно P умножить ((1 плюс r) в степени n минус (1 плюс r) в степени M) разделить ((1 плюс r) в степени n минус 1), если r больше 0. Иначе Remaining Balance равно P умножить (1 минус M разделить n)

REVERSE MODES:
- Mode 2 Find Max Purchase Price: binary search по цене, bounds dollar 10,000 до 2 times ARV, tolerance dollar 500, 100 iterations
- Mode 2 учитывает что price влияет на: loan amount, closing costs если percentage, down payment для conv, loan points, monthly interest, Total Cash Invested
- Mode 2 assumptions: ARV fixed, Rehab fixed, Hold period fixed, financing terms fixed, holding costs fixed
- Mode 3 Find Max Rehab Budget: binary search по rehab, bounds dollar 0 до (ARV минус Purchase Price), tolerance dollar 500
- Mode 3 assumptions: Hold period fixed, Rehab duration fixed, ARV fixed, financing fixed, sale costs fixed
- Оба reverse modes возвращают null и сообщение о недостижимой цели если target не найден
- Таргет задаётся через targetTotalProfit или targetROI — пользователь выбирает какой из двух

ТИРЫ (6 уровней, ключ ROI процент, для 6-month hold с hard money):
- Tier 1: 50 процент plus ROI — Exceptional — цвет emerald (bg1 059669, bg2 047857)
- Tier 2: 30-49 процент ROI — Strong — цвет emerald light (bg1 10B981, bg2 059669)
- Tier 3: 20-29 процент ROI — Solid — цвет amber (bg1 F59E0B, bg2 D97706)
- Tier 4: 10-19 процент ROI — Weak — цвет orange (bg1 F97316, bg2 EA580C)
- Tier 5: 0-9 процент ROI — Critical — цвет red (bg1 DC2626, bg2 B91C1C)
- Tier 6: ниже 0 процент ROI — Loss — цвет dark red (bg1 7F1D1D, bg2 991B1B)

UX ПРАВИЛА (критично, были баги в DSCR):
- Placeholder rule: ВСЕ input placeholders это ТЕКСТОВЫЕ инструкции вида Enter purchase price, Enter ARV, Enter rehab budget. НЕ использовать числовые примеры вида e.g. 120,000. Этот баг был в DSCR — не повторять
- НИГДЕ не использовать qualifies for. Этот баг был в DSCR — не повторять
- Before-tax analysis label виден в Overview, Limitations, FAQ. Flip profit это ordinary income, не capital gains — явно в FAQ

3 SENSITIVITY TABLES:
- Первая: ARV умножить Rehab Overrun
- Вторая: Hold Period умножить HM Rate
- Третья: Purchase Price variation

SCENARIOS:
- Conservative: ARV умножить 0.92, Rehab умножить 1.20, Rehab Duration умножить 1.3, Hold Period плюс 2 месяца, HM Rate плюс 1 процент
- Base: пользовательские значения
- Optimistic: ARV умножить 1.05, Rehab умножить 0.95, Hold Period минус 1 месяц. С пометкой что optimistic outcomes rare in competitive 2026 markets

PROJECT TIMELINE TABLE:
- Столбцы: Month, Phase, Cumulative Cost, Cumulative Holding, Notes
- Отдельная строка для Exit Month с Net Sale Proceeds
- Минимум 6 строк по месяцам

ВСЕ ТЕСТОВЫЕ КЕЙСЫ из fix-and-flip-ris.md должны проходить:
- Tolerance plus minus 0.5 процент для ROI
- Tolerance plus minus dollar 100 для multi-line сумм
- Tolerance plus minus dollar 50 для single-line
- 6 тестов в сумме включая: standard hard money flip, all-cash flip, find max price reverse, loss scenario, conventional financing, 70 процент Rule boundary

ОБЯЗАТЕЛЬНЫЕ ЭЛЕМЕНТЫ ИЗ MASTER PROMPT V4:
- Action buttons: Save Scenario, Share, Export PDF, Email me this analysis. Wrapper v-if покрывает все 3 режима (не только analyze)
- jsPDF через await import jspdf внутри функции, никогда не top-level import
- ScenarioPanel calculator prop равно fix-and-flip, НЕ generic calculator
- currentScenarioResult передаёт реальный tier label: Exceptional, Strong, Solid, Weak, Critical, Loss
- Mobile sticky bar mode-aware: показывает Total Profit плюс ROI в analyze, Max Price в find-price, Max Rehab в find-rehab
- PDF hero mode-aware: heroValue и heroLabel разные для каждого режима
- Tier consistency в 5 местах: main result block, sticky mobile bar, scenario panel, PDF export, insight text. Все 5 должны показывать один и тот же tier
- URL params короткие: pp, av, ac, rb, rc, rd, hp, hmode, hs, hpt, hpi, hpu, hph, hpo, ft, hltc, hir, hpp, hcr, cdp, cir, clt, cm, cp, cd, sc, tp, tr, pt, md

SEO КОНТЕНТ (14 секций в ПРАВИЛЬНОМ ПОРЯДКЕ):
1. Overview (4 параграфа)
2. How to Use (5 шагов, 4 pro tips, 6 result guide points)
3. Inputs and Outputs (таблицы полей)
4. Formula (step-by-step, formula box, visual schema, worked Columbus OH example с post-calculation verification)
5. What Is (2 параграфа — определение плюс 70 процент Rule)
6. Result Meaning (6 тиров с interpretation)
7. Benchmarks (по типу флипа, по штату — каждый штат минимум 2 фактора)
8. Strategy (5 блоков: First-Time, Wholesaler, Experienced, All-Cash, Comparison)
9. Applications (6 use cases)
10. Industry Standards (70 процент Rule, Hard Money Underwriting, Professional Benchmarks)
11. Limitations (4 items плюс When Not to Use)
12. Common Mistakes (5 items)
13. FAQ (8 Q&A включая 70 процент Rule, tax treatment ordinary income)
14. Related Calculators

ВАЖНО ПО SEO: все секции брать из fix-and-flip-seo.md, не придумывать свой контент.

ПОСЛЕ СОЗДАНИЯ ФАЙЛА:
1. Проверь что файл создан и его размер минимум 2800 строк командой wc -l pages/fix-and-flip-calculator.vue
2. Запусти билд: npm run build
3. Если билд успешен перезапусти: pm2 restart real-estate-calc
4. Проверь HTTP код: curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/fix-and-flip-calculator
5. Отчитайся: сколько строк в новом файле, успешен ли билд, какой HTTP код

Если билд упал — покажи ошибку и НЕ перезапускай pm2. Жди инструкций.

ПРОВЕРОЧНЫЙ ЧЕКЛИСТ после создания (пройди ВСЕ пункты):
- Файл минимум 2800 строк
- Есть 3 режима analyze, find-price, find-rehab через tabs
- Каждый режим имеет свой цвет amber, blue, emerald
- Есть 3 режима финансирования HM, Conv, Cash через toggle
- Placeholder тексты начинаются с Enter, не с e.g.
- Hold period в месяцах 3-12
- 6 тиров по ROI от Exceptional до Loss
- 4 derived metric cards: 70% Rule, Break-Even, Annualized ROI, Profit per Month
- Action buttons wrapper охватывает все 3 режима
- Есть 14 SEO секций в правильном порядке
- jsPDF через dynamic import await import jspdf
- URL params короткие ft, pp, av, rb итд

Если хотя бы один пункт не выполнен — НЕ деплой, исправь сначала.
