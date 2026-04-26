Прочитай файлы в таком порядке: 1) master-prompt-v4.md 2) arv-ris.md 3) arv-seo.md 4) pages/cap-rate-calculator.vue (эталон).

Затем создай pages/arv-calculator.vue — полный ARV Calculator по спецификации.

Критичные требования:

АРХИТЕКТУРА:
- Минимум 2800 строк, канон 3178 по образцу cap-rate-calculator.vue
- 3 режима работы через tabs: Estimate ARV, Find Required Comps PPSF, Compare Deal Screening
- Цветовые семьи: indigo для Estimate ARV, blue для Find Required PPSF, emerald для Compare Deal Screening

ПЕРВИЧНАЯ МЕТРИКА (уникально для ARV):
- Estimated ARV dollar (single number rounded to nearest dollar 1000)
- Secondary метрика: Confidence Range с форматом Lower Bound до Upper Bound скобки plus minus deviation
- Пример display: dollar 275000 до dollar 295000 скобки plus minus dollar 10000
- Confidence Tier HIGH MEDIUM LOW показывается как subtitle под ARV number
- Subject Implied dollar per sqft показывается как tertiary badge
- НЕ путать с Fix and Flip tiers: здесь tiers показывают RELIABILITY а не deal quality

HYBRID МЕТОДОЛОГИЯ Comps plus Adjustments:
- Требуется 3 до 5 comparable sales minimum 3 strict
- Default baseline 4 comps рекомендуется
- Каждый comp: sale price, sale date, sqft, beds, baths, garage, year built, condition, distance
- Adjustments автоматические с возможностью override в advanced mode
- Subject property: sqft, beds, baths, garage, year built, lot size optional, condition

ADJUSTMENT VALUES industry-standard defaults:
- plus dollar 5000 per bedroom difference
- plus dollar 10000 per full bath difference
- plus dollar 5000 per half bath difference
- plus dollar 10000 per garage space difference
- plus dollar 500 per year-built difference
- plus dollar 5 per sqft lot size difference ТОЛЬКО opt-in и если difference больше 20 процент

15-STEP METHODOLOGY обязательна:
- Step 1: Raw dollar per sqft для каждого comp равно Sale Price разделить Sqft
- Step 2: Apply adjustments per defaults выше
- Step 3: Adjusted dollar per sqft per comp
- Step 4: Outlier detection если PPSF больше 25 процент от median то weight снижается 50 до 75 процент
- Step 5: PPSF Coefficient of Variation для spread penalty
- Step 6: Weights per comp равно Recency умножить Distance умножить Similarity затем normalize
- Step 7: MAX CAP 40 процент per comp с PARTIAL REDISTRIBUTE: 50 процент excess redistribute, 50 процент discard как confidence loss до минус 15 pts Score
- Step 8: Verify all weights non-negative. Если negative то clamp to 0 и renormalize. Weights НИКОГДА не могут быть отрицательными
- Step 9: Weighted Avg dollar per sqft
- Step 10: Raw ARV равно Weighted Avg PPSF умножить Subject Sqft
- Step 11: Определить Condition Multiplier
- Step 12: Применить Condition Multiplier к Raw ARV
- Step 13: Round final ARV to nearest dollar 1000
- Step 14: Confidence Score 0 до 100 из 5 факторов, derive Range процент из Score-based table
- Step 15: 70 процент Rule Max Offer и 75 процент Rule All-In Target если Rehab Budget entered

CONDITION MULTIPLIER tier-based (критично антибаг):
- Default Avg Comp Condition равно AVERAGE tier 2 НЕ Good tier 3
- Применять ТОЛЬКО если Subject Condition ОТЛИЧАЕТСЯ от Avg Comp Condition
- Если equal то умножить 1.00 no adjustment
- Tier 1 Poor 0.85, Tier 2 Average 1.00, Tier 3 Good 1.05, Tier 4 Excellent 1.10, Tier 5 Needs-Rehab 0.93

CONFIDENCE SCORE 5 факторов 0 до 100 points:
- Comp Count: 3 comps 15 pts, 4 comps 20 pts, 5 comps 25 pts
- Recency: все до 90 дней 25 pts, до 120 дней 20 pts, до 180 дней 10 pts, больше 180 дней 5 pts
- Distance: все до 0.5 miles 20 pts, до 1 mile 15 pts, до 2 miles 10 pts, больше 2 miles 5 pts
- Similarity: beds плюс baths плюс sqft match 20 pts, minor differences 15 pts, major 5 pts
- PPSF Spread CV: меньше 15 процент 10 pts, 15-30 процент 5 pts, больше 30 процент 0 pts

CONFIDENCE RANGE Score-based table:
- Score 95 до 100 умножить плюс минус 2.5 процент
- Score 85 до 94 умножить плюс минус 3.5 процент
- Score 75 до 84 умножить плюс минус 5 процент
- Score 65 до 74 умножить плюс минус 6.5 процент
- Score 55 до 64 умножить плюс минус 8 процент
- Score 40 до 54 умножить плюс минус 10 процент
- Score меньше 40 умножить плюс минус 12 процент

CONFIDENCE TIERS:
- HIGH Score 80 до 100 — reliable для screening зелёный emerald
- MEDIUM Score 60 до 79 — usable но нужна осторожность амбер
- LOW Score меньше 60 — не использовать для offer красный

OUTLIER HANDLING:
- Flag comp если adjusted PPSF отклоняется больше 25 процент от median
- Снижение weight 50 до 75 процент для flagged
- Notification в UI с объяснением
- Manual override: возможность exclude comp вручную

PPSF SPREAD PENALTY через CV:
- CV меньше 15 процент no penalty
- CV 15-30 процент минус 5 процент weights и plus 0.5 процент range
- CV больше 30 процент минус 10 процент weights plus 1 процент range plus 5 pts Score

3 DERIVED METRIC CARDS:
- Metric 1: 70 процент Rule Max Offer равно ARV умножить 0.70 минус Rehab Budget. Для Fix and Flip
- Metric 2: 75 процент Rule All-In Target равно ARV умножить 0.75. Для BRRRR
- Metric 3: Subject Implied dollar per sqft равно Final ARV разделить Subject Sqft

UX ПРАВИЛА:
- Placeholder rule: все input placeholders это текстовые инструкции Enter subject sqft, Enter comp sale price. НЕ использовать e.g. числа. Баг из DSCR не повторять
- Нигде не использовать qualifies for. Баг из DSCR не повторять
- Confidence Range displayed ВСЕГДА как Lower Bound до Upper Bound скобки plus minus deviation
- ARV label всегда Estimated ARV или Estimate НИКОГДА просто ARV без эпитета
- Language: estimates, projects, approximates. НИКОГДА calculates, determines
- Disclaimer Not a substitute for licensed appraisal в 4 местах: Overview P4, How to Use, Limitations, FAQ
- Comp Comparison Table с визуальным флагом outliers
- Manual include exclude checkbox per comp

REVERSE MODES:
- Mode 2 Find Required Comps PPSF: binary search bounds dollar 50 до dollar 500 per sqft, tolerance dollar 1, target ARV user-specified
- Mode 2 edge: если target ARV нереалистичен то null plus сообщение Target ARV not achievable with current subject parameters
- Mode 3 Compare Deal Screening: input target Purchase Price plus Rehab, output deal viability через 70 процент Rule check AND 75 процент Rule check plus Confidence Tier
- Оба reverse modes returns null plus сообщение если недостижимо

TITLE hardcoded fallback обязательно:
- ARV Calculator Comps and Confidence RealCalc 48 символов
- НЕ генерировать custom title
- НЕ модифицировать fallback

ВИЗУАЛИЗАЦИИ:
- Comp Comparison Table с PPSF spread visualization
- Confidence Score Breakdown radar или bar chart 5 факторов
- Adjustment Impact Chart showing each adjustment value per comp

3 SENSITIVITY TABLES:
- Subject Sqft умножить Weighted Avg PPSF
- Condition Tier умножить ARV
- Comp Count умножить Confidence Score

SCENARIOS:
- Conservative: ARV умножить 0.95, Confidence Score минус 10
- Base: пользовательские
- Optimistic: ARV умножить 1.05 с пометкой rare in 2026 without new comps

7 ТЕСТОВЫХ КЕЙСОВ из arv-ris.md:
- Test 1 Standard 4 comps tight spread HIGH Confidence Charlotte NC
- Test 2 Wide PPSF spread CV больше 30 процент MEDIUM Confidence с penalty applied
- Test 3 Only 3 comps MEDIUM Confidence borderline
- Test 4 Outlier detection один comp flagged weight reduced
- Test 5 MAX CAP 40 процент triggered top comp capped partial redistribute
- Test 6 Subject condition differs от Avg Comp Condition multiplier applied
- Test 7 Reverse Find Required PPSF binary search convergence
- Tolerance plus minus dollar 1000 для ARV, plus minus 2 pts для Confidence Score
- КАЖДЫЙ тест проверяет non-negative weights после penalties

MASTER PROMPT V4 обязательно:
- Action buttons wrapper покрывает все 3 режима
- jsPDF через await import jspdf внутри функции
- ScenarioPanel calculator prop равно arv
- currentScenarioResult передаёт реальный tier label HIGH MEDIUM LOW
- Mobile sticky bar mode-aware
- PDF hero mode-aware с ARV number plus Confidence Range
- Tier consistency в 5 местах
- URL params короткие: ss, sb, sba, sg, sy, sl, sc, c1p, c1d, c1s, c1b, c1ba, c1g, c1y, c1c, c1dist, c2p, c2d, c2s, c2b, c2ba, c2g, c2y, c2c, c2dist, c3p, c3d, c3s, c3b, c3ba, c3g, c3y, c3c, c3dist, c4p, c4d, c4s, c4b, c4ba, c4g, c4y, c4c, c4dist, c5p, c5d, c5s, c5b, c5ba, c5g, c5y, c5c, c5dist, rb, ta

SEO КОНТЕНТ из arv-seo.md 14 секций в ПРАВИЛЬНОМ ПОРЯДКЕ:
1 Overview 4 параграфа
2 How to Use 5 шагов 4 pro tips 3 Confidence tiers HIGH MEDIUM LOW
3 Inputs and Outputs
4 Formula с FORMULA_INTRO_BOX ARV is ESTIMATE not calculation, 15-step methodology, worked Charlotte NC example
5 What Is 3 параграфа определение ARV 70 процент Rule 75 процент Rule
6 Result Meaning 3 Confidence tiers с market context
7 Benchmarks по property type и по штату каждый минимум 2 фактора
8 Strategy 5 блоков Fix and Flip BRRRR Wholesaler Agent Deal Comparison
9 Applications 6 use cases включая 70 процент Rule и 75 процент Rule
10 Industry Standards Comparable Sales Method Professional ARV Sources Investor Benchmarks
11 Limitations 4 items plus When Not to Use
12 Common Mistakes 5 items Stale Comps Over-Optimistic Condition Ignoring Outliers Single-Point ARV Lender ARV
13 FAQ 8 Q and A
14 Related Calculators

Весь контент строго из arv-seo.md. НЕ придумывать свой текст. Следовать TITLE hardcoded fallback правилу.

ПОСЛЕ СОЗДАНИЯ:
1 wc -l pages/arv-calculator.vue минимум 2800
2 npm run build
3 Если билд успешен pm2 restart real-estate-calc
4 curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/arv-calculator
5 Отчитайся о строках, билде, HTTP коде

Если билд упал покажи ошибку и НЕ перезапускай pm2.

ЧЕКЛИСТ:
- Минимум 2800 строк
- 3 режима indigo blue emerald
- Primary metric Estimated ARV rounded to nearest dollar 1000
- Secondary metric Confidence Range формат Lower до Upper скобки plus minus
- 15-step methodology строго
- Step 8 проверка non-negative weights с clamp и renormalize
- Adjustment values dollar 5K bed, dollar 10K full bath, dollar 5K half bath, dollar 10K garage, dollar 500 year, dollar 5 per sqft lot
- Condition Multiplier ТОЛЬКО когда Subject отличается от Avg Comp
- Default Avg Comp Condition равно AVERAGE tier 2 НЕ Good tier 3
- Confidence Score 5 факторов 0 до 100
- Confidence Range Score-based table 2.5 процент до 12 процент
- Confidence Tiers HIGH MEDIUM LOW НЕ Strong Moderate Low
- Outlier detection больше 25 процент от median
- PPSF CV spread penalty
- MAX CAP 40 процент с PARTIAL REDISTRIBUTE
- Lot Size DISABLED by default opt-in only
- 70 процент Rule Max Offer для Fix and Flip
- 75 процент Rule All-In Target для BRRRR
- Placeholder Enter не e.g.
- Language estimates projects approximates НЕ calculates determines
- Not substitute for appraisal в 4 местах
- Comp Comparison Table с outlier flags
- Manual include exclude per comp
- Action buttons охватывают 3 режима
- 14 SEO секций в порядке
- jsPDF dynamic import
- URL params короткие
- TITLE hardcoded fallback ARV Calculator Comps and Confidence RealCalc 48 символов

Если хотя бы один пункт не выполнен НЕ деплой исправь сначала.
