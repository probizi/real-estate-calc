Прочитай файлы в таком порядке: 1) master-prompt-v4.md 2) rental-property-ris.md 3) rental-property-seo.md 4) pages/cap-rate-calculator.vue (эталон).

Затем создай pages/rental-property-calculator.vue — полный Rental Property Calculator по спецификации.

Критичные требования:
- 3 режима: Analyze, Find Required Rent, Find Max Purchase Price
- Цветовые семьи: amber для Analyze, blue для Find Required Rent, emerald для Find Max Purchase Price
- Primary metric это Total Return процент с долларовой суммой ниже, формат "plus 89.4 процент" и "dollar 385,000 over 10 years"
- НЕ IRR на главном месте. IRR это derived metric во второй карточке
- Multi-year природа: каждый input это Year 1, калькулятор проектирует вперёд на 5-30 лет
- Обязательна multi-year breakdown таблица по годам со столбцами Year, Gross Rent, Vacancy, NOI, Debt Service, Cash Flow, Principal Paid, Equity Built, Sale Proceeds, Cumulative Return
- Отдельная строка Year N Exit в таблице для Net Sale Proceeds
- Exit Method toggle с двумя опциями cap-rate (default) и appreciation, поля exitCapRate и appreciationRate mutually exclusive
- 4 derived metric cards: IRR, Year 1 Cash-on-Cash, Year 1 DSCR, Equity at Exit
- IRR с tiered fallback: Newton-Raphson 50 iterations, если fails то bisection bounds minus 0.99 до 10.0 с 100 iterations, если все равно fails то N/A. Обернуть в try catch
- Total Return формула: Total Profit равно Cumulative Cash Flow plus Net Sale Proceeds minus Total Cash Invested. Total Return процент равно Total Profit divided by Total Cash Invested times 100. Не вычитать Total Cash Invested дважды
- Amortization special case: если r равно 0 то Monthly Payment равно Principal divided by n (owner carry support)
- Reverse modes через binary search, не алгебраический solve. Если target недостижим вернуть null и сообщение Target return not achievable
- 6 tiers: 150 процент plus Exceptional emerald, 100-149 процент Strong emerald light, 60-99 процент Solid amber, 30-59 процент Weak orange, 0-29 процент Critical red, below 0 процент Loss dark red
- Placeholder rule: все input placeholders это текстовые инструкции вида Enter X, НЕ числовые примеры типа "e.g. 400,000". Этот баг был в DSCR, не повторять
- Нигде не использовать qualifies for если вдруг упоминается qualification по программам — только meets typical threshold for
- Before-tax analysis label виден в Overview, Limitations, FAQ
- 3 sensitivity таблицы: Hold Period на Appreciation, Interest Rate на Rent Growth, Exit Cap Rate variation
- Все 6 тест-кейсов из rental-property-ris.md должны проходить с tolerance plus minus 0.5 процент для returns, plus minus 100 dollar для multi-year сумм, plus minus 50 dollar для single-year сумм
- Пройди Self-Check из master-prompt Section 7

Обязательные элементы из Master Prompt v4:
- Action buttons: Save Scenario, Share, Export PDF, Email me this analysis. Wrapper v-if покрывает все 3 режима
- jsPDF через await import jspdf, никогда не top-level import
- ScenarioPanel calculator prop равен rental-property, не generic calculator
- currentScenarioResult передаёт реальный tier label (Exceptional/Strong/Solid/Weak/Critical/Loss), не Good/Average/Poor
- Mobile sticky bar mode-aware показывает Total Return в analyze, Required Rent в find-rent, Max Price в find-price
- PDF hero mode-aware: heroValue и heroLabel разные для каждого режима
- Tier consistency в 5 местах: main result, sticky mobile bar, scenario panel, PDF export, insight text
- URL params короткие: pp, mr, vr, oi, em, te, rg, eg, hp, xm, ec, ap, dp, ir, lt, cc, rh, cr, sc, tr, pt, md

Файл должен быть ПОЛНЫЙ — клон архитектуры cap-rate-calculator.vue со всеми 14 SEO секциями из rental-property-seo.md в правильном порядке: Overview, How to Use, Inputs and Outputs, Formula, What Is, Result Meaning, Benchmarks, Strategy, Applications, Industry Standards, Limitations, Common Mistakes, FAQ, Related Calculators.

Минимум 2800 строк канон 3178.

После создания файла задеплой: npm run build и pm2 restart real-estate-calc и curl -s -o /dev/null -w http code http://localhost:3000/rental-property-calculator
