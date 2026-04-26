Прочитай файлы в таком порядке: 1) master-prompt-v4.md 2) fix-and-flip-ris.md 3) fix-and-flip-seo.md 4) pages/cap-rate-calculator.vue (эталон).

Затем создай pages/fix-and-flip-calculator.vue — полный Fix and Flip Calculator по спецификации.

Критичные требования:
- 3 режима: Analyze, Find Max Purchase Price, Find Max Rehab Budget
- Цветовые семьи: amber для Analyze, blue для Find Max Purchase Price, emerald для Find Max Rehab Budget
- DUAL primary metrics: Total Profit dollar AND ROI процент. Оба показаны на главном месте
- Формат отображения: Total Profit как dollar 52,400 крупно, ROI как 42.1 процент over 6 months ниже
- Hold period в МЕСЯЦАХ, НЕ в годах. Options: 3/4/5/6/7/8/9/10/11/12. Default 6
- Три режима финансирования через toggle: Hard Money default / Conventional / All Cash
- Hard Money: interest-only monthly, Points 2-4 процент upfront, rate 10-14 процент, often covers both purchase and rehab (toggle hmLoanCoversRehab)
- Conventional: amortizing 30-year standard, rate 7-8 процент, down payment 25 процент default
- All Cash: Loan Amount = 0, Loan Points = 0, Total Loan Interest = 0
- 4 derived metric cards: 70 процент Rule Max Offer, Break-Even Sale Price, Annualized ROI, Profit per Month
- 70 процент Rule Max Offer с индикатором Within rule зелёный или Outside rule амбер
- ARV driven exit, НЕ cap rate, НЕ appreciation. Exit = ARV minus Sale Costs minus Remaining Loan
- Holding Costs ТОЛЬКО property-related: tax, insurance, utilities, HOA, other. НЕ включают loan interest
- Loan Costs это отдельная категория: Points plus Interest. НИКОГДА не смешивать с Holding Costs
- Formula Total Profit: Net Sale Proceeds minus Total Cash Invested. НЕ вычитать Total Cash Invested дважды
- Formula ROI: Total Profit divided by Total Cash Invested times 100
- Formula Break-Even: (Total Cash Invested plus Remaining Loan) divided by (1 minus Sale Costs процент). Именно Cash Invested, НЕ Project Costs, иначе double-count
- Total Cash Invested включает: Down Payment plus Closing plus Rehab (если не финансируется) plus Contingency (если не финансируется) plus Total Holding Costs plus Loan Points plus Total Loan Interest
- Total Cash Invested включает Total Holding Costs как реальный cash outflow, НЕ как reserve
- Total Cash Invested включает Total Loan Interest как реальный cash outflow к лендеру
- Consistency identity обязательна: Total Project Costs равно Total Cash Invested plus Remaining Loan Balance. Должна совпадать в пределах dollar 1-2 rounding tolerance
- Amortization special case: если rate равно 0 то Monthly Payment равно Principal divided by n (seller financing support)
- Conventional loan interest: Total Interest = (Monthly Payment times months) minus Principal Reduction. Principal Reduction = P minus Remaining Balance after M months. Remaining Balance = P times ((1 plus r)^n minus (1 plus r)^M) divided by ((1 plus r)^n minus 1) если r больше 0, иначе P times (1 minus M divided by n)
- Reverse modes через binary search, НЕ алгебраический solve
- Reverse mode Find Max Purchase Price bounds dollar 10,000 до 2 times ARV, tolerance dollar 500, 100 iterations. Учитывать что price влияет на loan amount, closing costs, Total Cash Invested
- Reverse mode Find Max Rehab Budget bounds dollar 0 до (ARV minus Purchase Price), tolerance dollar 500
- Оба reverse modes возвращают null и сообщение если target недостижим
- Down Payment в Hard Money: Purchase Price times (1 minus hmLoanToCostPct), regardless of hmLoanCoversRehab toggle
- 6 tiers ROI: 50 процент plus Exceptional emerald, 30-49 процент Strong emerald light, 20-29 процент Solid amber, 10-19 процент Weak orange, 0-9 процент Critical red, below 0 процент Loss dark red. Calibrated для 6-month hold с hard money
- Placeholder rule: все input placeholders это текстовые инструкции вида Enter X, НЕ числовые примеры типа e.g. 180,000. Этот баг был в DSCR, не повторять
- Нигде не использовать qualifies for. Этот баг был в DSCR, не повторять
- Before-tax analysis label виден в Overview, Limitations, FAQ. Flip profit это ordinary income, не capital gains — отразить в FAQ
- 3 sensitivity таблицы: ARV на Rehab Overrun, Hold Period на HM Rate, Purchase Price variation
- Project Timeline таблица по месяцам со столбцами Month, Phase, Cumulative Cost, Cumulative Holding, Notes. Отдельная строка Exit Month с Net Sale Proceeds
- Все 6 тест-кейсов из fix-and-flip-ris.md должны проходить с tolerance plus minus 0.5 процент для ROI, plus minus dollar 100 для multi-line сумм, plus minus dollar 50 для single-line
- Пройди Self-Check из master-prompt Section 7

Обязательные элементы из Master Prompt v4:
- Action buttons: Save Scenario, Share, Export PDF, Email me this analysis. Wrapper v-if покрывает все 3 режима
- jsPDF через await import jspdf, никогда не top-level import
- ScenarioPanel calculator prop равен fix-and-flip, не generic calculator
- currentScenarioResult передаёт реальный tier label (Exceptional/Strong/Solid/Weak/Critical/Loss)
- Mobile sticky bar mode-aware: показывает Total Profit plus ROI в analyze, Max Price в find-price, Max Rehab в find-rehab
- PDF hero mode-aware: heroValue и heroLabel разные для каждого режима
- Tier consistency в 5 местах: main result, sticky mobile bar, scenario panel, PDF export, insight text
- URL params короткие: pp, av, ac, rb, rc, rd, hp, hmode, hs, hpt, ft, hltc, hir, hpp, hcr, cdp, cir, clt, cm, cp, cd, sc, tp, tr, pt, md
- URL param interaction rule: когда ft равно hm парсить все hm поля игнорировать conv поля, когда ft равно conv наоборот, когда ft равно cash игнорировать все financing поля

Файл должен быть ПОЛНЫЙ — клон архитектуры cap-rate-calculator.vue со всеми 14 SEO секциями из fix-and-flip-seo.md в правильном порядке: Overview, How to Use, Inputs and Outputs, Formula, What Is, Result Meaning, Benchmarks, Strategy, Applications, Industry Standards, Limitations, Common Mistakes, FAQ, Related Calculators.

Минимум 2800 строк, канон 3178.

После создания файла задеплой: npm run build и pm2 restart real-estate-calc и curl -s -o /dev/null -w http code http://localhost:3000/fix-and-flip-calculator
