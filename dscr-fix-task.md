# ЗАДАЧА: Исправить баги в DSCR Calculator

## КОНТЕКСТ

Файл `pages/dscr-calculator.vue` уже существует в проекте и задеплоен. Он работает функционально, но в нём обнаружены 4 группы проблем, которые нужно исправить перед тем как считать калькулятор финальным.

## ЭТАЛОН

Используй `pages/cap-rate-calculator.vue` как канонический образец для всех стилей, UX-паттернов и порядка секций. Когда сомневаешься — смотри как сделано в Cap Rate.

---

## ПРОБЛЕМЫ ДЛЯ ИСПРАВЛЕНИЯ

### Проблема 1: Placeholders содержат конкретные числа вместо текстовых инструкций

Что сейчас: почти все input поля имеют placeholder вида "e.g. 120,000", "e.g. 7", "e.g. 7.5".

Почему это плохо: пользователь может подумать что поле уже заполнено значением, или начать редактировать готовое число вместо ввода своего. Это ухудшает UX и может быть принято за баг.

Как должно быть как в Cap Rate: placeholder это текстовая инструкция вида "Enter X" без конкретных цифр. Цифры могут жить в отдельной helper-подсказке под полем, но НЕ в placeholder.

Замены в template:

- поле Gross Rental Income: "e.g. 120,000" → "Enter total yearly rental income"
- поле Vacancy Rate: "e.g. 7" → "Enter expected vacancy percentage"
- поле Other Income: "e.g. 5,000 (laundry, parking)" → "Enter annual other income"
- поле Operating Expenses (simple): "e.g. 42,000 (taxes, insurance, mgmt, maintenance)" → "Enter total yearly operating expenses"
- поле Monthly Rent: "e.g. 3,500" → "Enter monthly rent"
- поле Monthly Property Tax: "e.g. 350" → "Enter monthly property tax"
- поле Monthly Insurance: "e.g. 150" → "Enter monthly insurance"
- поле Monthly HOA: "e.g. 0" → "Enter monthly HOA"
- поле Monthly Association: "e.g. 0" → "Enter monthly association fee"
- поле Loan Amount: "e.g. 750,000" → "Enter loan amount"
- поле Purchase Price: "Purchase price, e.g. 1,000,000" → "Enter property purchase price"
- поле Down Payment Pct: "Down payment %, e.g. 25" → "Enter down payment percentage"
- поле Interest Rate: "e.g. 7.5" → "Enter annual loan interest rate"
- поле Target DSCR: "1.25" → "Enter target DSCR coverage ratio"

Замены в expenseFields массиве (примерно строка 1594):

- propertyTax placeholder "e.g. 8,000" → "Enter annual property taxes"
- insurance placeholder "e.g. 3,600" → "Enter annual insurance cost"
- management placeholder "e.g. 12,000 (8–10% of gross)" → "Enter annual property management cost"
- maintenance placeholder "e.g. 6,000" → "Enter annual maintenance and repairs"
- utilities placeholder "e.g. 2,400" → "Enter annual utility cost"
- hoa placeholder "e.g. 0" → "Enter annual HOA fees"
- other placeholder "e.g. 2,000" → "Enter other annual operating expenses"

Правило навсегда: placeholder в input НИКОГДА не содержит конкретных чисел. Только текстовая инструкция.

---

### Проблема 2: Запрещённая формулировка Qualifies for в трёх местах

Контекст: в RIS и мастер-промте явно запрещено использовать "Qualifies for [loan program]" — эта формулировка юридически рискованна, так как одобрение кредита зависит не только от DSCR. Разрешённая замена: "Meets typical DSCR threshold for [program]" или "Clears the common DSCR threshold for [program]".

Места для исправления:

1. Worked example, примерно строка 1257:

Сейчас: "DSCR of 1.30x lands solidly in the Strong tier — above the Fannie Mae and Freddie Mac conventional minimum of 1.25x. This deal qualifies for standard agency multifamily financing."

Заменить на: "DSCR of 1.30x lands solidly in the Strong tier — above the Fannie Mae and Freddie Mac conventional minimum of 1.25x. This deal meets the typical DSCR threshold for standard agency multifamily financing."

2. insightText computed функция, примерно строка 1842:

Сейчас: "DSCR of ${fmt} is in the Excellent range. This ${mode} qualifies for best pricing across agency and portfolio loan programs..."

Заменить на: "DSCR of ${fmt} is in the Excellent range. This ${mode} meets the threshold for best pricing across agency and portfolio loan programs..."

3. Strategy DSCR Loan секция, примерно строка 2320:

Сейчас: "Example: $400K property, $3,500/mo rent, $2,800 PITIA = 1.25x — qualifies for standard DSCR loan programs."

Заменить на: "Example: $400K property, $3,500/mo rent, $2,800 PITIA = 1.25x — meets the common DSCR threshold for standard DSCR loan programs."

Правило навсегда: нигде в тексте калькулятора не использовать "qualifies for [program]" — только "meets typical DSCR threshold for" или "clears the common DSCR threshold for".

---

### Проблема 3: Неправильный порядок SEO секций

Что сейчас: секция What Is DSCR стоит на втором месте после Overview.

Правильный порядок (из Master Prompt Section 5):

1. Overview
2. How to Use
3. Inputs and Outputs
4. Formula
5. What Is Metric
6. What Your Result Means
7. Benchmarks
8. Strategy
9. Applications
10. Industry Standards
11. Limitations
12. Common Mistakes
13. FAQ
14. Related Calculators

Что нужно сделать: переместить весь блок div с id what-is-dscr (примерно строки 1062-1085) из позиции после Overview на позицию после Formula (после div с id formula, перед div с id result-meaning).

Содержимое секции не меняется, меняется только её место в DOM.

После перестановки порядок в DOM должен быть: overview → how-to-use → inputs-outputs → formula → what-is-dscr → result-meaning → и далее по порядку.

---

### Проблема 4: Файл недостаточный по объёму

Что сейчас: файл 2486 строк.

Требование Master Prompt: канонический Cap Rate Calculator 3178 строк. Новые калькуляторы должны быть в диапазоне плюс-минус 15% от канона, то есть 2700-3650 строк.

Недобор минимум 214 строк. Значит где-то контент сокращён или потерян.

Что проверить:

- секция Benchmarks: должна содержать как минимум таблицу по типам собственности (6 строк) плюс таблицу по штатам (8 строк с картами и полной таблицей) плюс sources note. Если у тебя только одна из таблиц — добавь вторую
- секция Strategy: должна содержать 5 блоков (Agency Multifamily плюс DSCR Loan плюс Commercial плюс Refinance плюс Target Underwriting), каждый по 2 параграфа
- секция Applications: должна содержать 6 карточек use cases
- секция Industry Standards: должна содержать 3 блока (Fannie/Freddie плюс DSCR Loans плюс Commercial/CMBS) с булетами в каждом
- секция Limitations: 4 карточки плюс When Not to Use список из 4 пунктов
- секция Common Mistakes: 5 пронумерованных ошибок
- секция FAQ: ровно 8 вопросов, каждый ответ по 3-4 предложения

Не надо раздувать контент искусственно. Нужно проверить, что все обязательные блоки на месте и не сокращены до однострочников. Если что-то есть, но короче чем нужно — расширить до нормальной глубины.

Ориентируйся на Cap Rate Calculator как на эталон глубины каждой секции.

---

## ФИНАЛЬНЫЙ ЧЕКЛИСТ ПЕРЕД ДЕПЛОЕМ

Перед тем как сохранить и задеплоить, пройдись по этому списку:

1. Во всех input полях placeholder это текстовая инструкция Enter X, без конкретных чисел
2. Нигде в тексте нет qualifies for (кроме случаев в описании, где это отрицание, например do not say qualifies for)
3. Секция What Is DSCR стоит после Formula, не после Overview
4. Файл минимум 2700 строк
5. Все 14 SEO секций присутствуют в правильном порядке
6. Worked example в Formula секции использует meets the typical DSCR threshold for
7. insightText computed во всех 5 tier-ах использует meets the threshold for или clears the common threshold for
8. Strategy DSCR Loan секция использует meets the common DSCR threshold for
9. Калькулятор работает без ошибок — введи тестовые данные и проверь что DSCR считается правильно
10. Задеплой и проверь что страница открывается по адресу https://185.138.90.134/dscr-calculator

## РЕЗУЛЬТАТ

Обновлённый pages/dscr-calculator.vue с 4 типами исправлений, задеплоен на прод. Файл минимум 2700 строк. Все баги из этого ТЗ устранены.
