# ЗАДАЧА: Создать новый калькулятор DSCR Calculator

## ФАЙЛЫ

Все файлы уже загружены в проект на сервер:

- master-prompt-v4.md - универсальный мастер-промт для всех калькуляторов
- dscr-ris.md - спецификация логики DSCR (формулы, поля, тиры, бенчмарки, тест-кейсы)
- dscr-seo.md - весь SEO контент для страницы (14 секций, FAQ, schema)

## ЭТАЛОН

Используй pages/cap-rate-calculator.vue как канонический шаблон для клонирования. Это референс, его архитектуру копируем байт-в-байт везде где возможно.

## ЧТО СДЕЛАТЬ

1. Прочитай master-prompt-v4.md целиком и следуй каждому правилу
2. Клонируй pages/cap-rate-calculator.vue как основу
3. Адаптируй логику согласно dscr-ris.md:
   - Формулы для Property DSCR и DSCR Loan
   - Поля формы для обоих режимов
   - 4 режима calculation mode
   - Тиры (Excellent, Strong, Moderate, Marginal, Fail)
   - Все derived метрики включая Stressed DSCR
   - Бенчмарки по типам и по штатам
4. Адаптируй контент согласно dscr-seo.md:
   - Все 14 SEO секций в строгом порядке
   - Никакой секции не удалять, не сокращать, не сливать
5. Сохрани результат как pages/dscr-calculator.vue
6. Задеплой на прод

## КРИТИЧНЫЕ ТРЕБОВАНИЯ

### Архитектура режимов

- 4 режима в mode selector: Property, DSCR Loan, Find Max Loan, Find Required NOI
- Это 4 равноправные tabs в одной горизонтальной строке (НЕ вложенные)
- Цветовые семьи:
  - Property DSCR - amber (Standard)
  - DSCR Loan - teal (Alternative formula)
  - Find Max Loan - blue (Property Reverse 1)
  - Find Required NOI - emerald (Property Reverse 2)
- Reverse modes работают ТОЛЬКО в Property DSCR family
- В режиме DSCR Loan reverse-кнопки disabled

### Формат DSCR

- DSCR всегда форматируется как X.XXx (например 1.25x)
- Никогда как процент
- Никогда как голое число без суффикса x

### Formula modes

- Property DSCR = NOI делить на Annual Debt Service
- DSCR Loan = Monthly Rent делить на Monthly PITIA
- PITIA = Principal плюс Interest плюс Taxes плюс Insurance плюс HOA/Association
- P and I всегда auto-calculated из loan inputs, никакого manual override

### Derived метрики

- Stressed DSCR plus 1 процент - как отдельная карточка
- Stressed DSCR plus 2 процента - как отдельная карточка
- Metric 2 mode-aware:
  - В Property режимах - Max Loan Amount at 1.25x
  - В режиме DSCR Loan - Rent Cushion (Monthly Rent минус Monthly PITIA)

### Sensitivity и scenarios

- Section 9 sensitivity table от минус 1 процент до плюс 3 процента, 9 строк
- Это расширенная развертка, НЕ дублирует core stress метрики из Section 8

### Lender Context panel

- Показывает какие loan programs соответствуют текущему DSCR
- Формулировка строго: Meets typical DSCR threshold for (имя программы)
- НЕ использовать формулировку Qualifies for
- Обязательный disclaimer что threshold meeting не равно automatic approval

### State benchmarks

- Все 8 штатов с DSCR ranges
- Обязательный label: Underwriting estimate based on 2026 rate environment, not a market-reported DSCR statistic
- Каждый state note должен объяснять ПОЧЕМУ range такой (property tax, insurance, rent-to-price, regulation, cap rate)

### Action buttons

- Все 4 кнопки обязательны: Save Scenario, Share, Export PDF, Email me this analysis
- v-if на wrapper должен покрывать ВСЕ режимы (не только primary)
- Все handlers в script setup: openSaveScenario, shareResult, exportPDF, showEmailModal ref
- buildShareParams включает ВСЕ поля формы и calcMode
- exportPDF использует только dynamic await import от jspdf, НЕ top-level import
- PDF hero block MODE-AWARE - разный heroValue/heroLabel/heroSub для каждого режима

### Mobile sticky bar

- Обязателен вверху страницы
- Показывает разный результат плюс бейдж плюс цвет для КАЖДОГО режима
- В Property режиме - DSCR значение
- В DSCR Loan - DSCR значение
- В Find Max Loan - сумма max loan
- В Find Required NOI - сумма required NOI

### ScenarioPanel и EmailCaptureModal

- ScenarioPanel внутри main, ключ calculator равно dscr
- EmailCaptureModal после закрытия main
- currentScenarioResult передает реальный tier.value, НЕ маппит в Good/Average/Poor

### Tier consistency

- Один и тот же tier label плюс color должны быть одинаковы во всех местах:
  - Main result card badge
  - Mobile sticky bar badge
  - currentScenarioResult.badgeLabel
  - PDF export hero subtitle
  - Insight text
- Если где-то расходится - это баг в computed chain

### Тест-кейсы

Прогони все 6 тест-кейсов из dscr-ris.md Section 17 после сборки:

- Test 1: Property DSCR standard - ожидаемый DSCR с tolerance плюс-минус 0.02x
- Test 2: DSCR Loan - ожидается 1.25x с tolerance плюс-минус 0.02x
- Test 3: Find Max Loan Amount - tolerance плюс-минус 50 долларов
- Test 4: Find Required NOI - tolerance плюс-минус 50 долларов
- Test 5: Stress test boundary - проверка сдвига тира
- Test 6: Fail scenario - DSCR меньше 1.00x, warning срабатывает

Если хотя бы один тест не прошел - исправь формулу ДО деплоя.

### Self-Check

Перед выводом файла обязательно пройди все 35 плюс пунктов из master-prompt-v4.md Section 7.

Особое внимание:
- Файл должен быть 2500 плюс строк (канон Cap Rate 3178 строк, DSCR должен быть в диапазоне плюс-минус 15 процентов)
- Если меньше 2500 строк - ты потерял контент, проверь все 14 SEO секций

## РЕЗУЛЬТАТ

- Готовый pages/dscr-calculator.vue в проекте
- Файл задеплоен на https://185.138.90.134/dscr-calculator
- Все 6 тест-кейсов проходят в рамках tolerance
- Визуально идентичен Cap Rate Calculator по архитектуре
- Страница отдается через nginx без ошибок 500
