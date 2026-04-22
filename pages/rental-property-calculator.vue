<template>
  <div class="min-h-screen bg-gray-50">

    <!-- HEADER -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-4">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: #1e3a5f;">
              <span class="text-white font-extrabold text-lg leading-none">RC</span>
            </div>
            <div class="leading-tight">
              <span class="block font-extrabold text-xl" style="color: #1e3a5f;">RealCalc</span>
              <span class="block text-xs font-medium text-gray-400 -mt-0.5">Investment Hub</span>
            </div>
          </NuxtLink>
          <nav class="hidden md:flex items-center gap-8">
            <NuxtLink to="/calculators" class="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Calculators</NuxtLink>
            <NuxtLink to="/pricing" class="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Pricing</NuxtLink>
            <NuxtLink to="/blog" class="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Blog</NuxtLink>
          </nav>
          <NuxtLink to="/pricing"
            class="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-lg transition hover:opacity-90"
            style="background: #f59e0b; color: #1e3a5f;">
            Get Started Free
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- BREADCRUMB -->
    <div class="bg-white border-b border-gray-100 px-4 py-3">
      <div class="max-w-[1100px] mx-auto">
        <nav aria-label="Breadcrumb">
          <ol class="flex items-center gap-2 text-sm text-gray-400">
            <li><NuxtLink to="/" class="hover:text-gray-600 transition">Home</NuxtLink></li>
            <li><span>/</span></li>
            <li><NuxtLink to="/calculators" class="hover:text-gray-600 transition">Calculators</NuxtLink></li>
            <li><span>/</span></li>
            <li class="text-gray-700 font-semibold">Rental Property</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- PAGE TITLE + ON THIS PAGE NAV -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-6">

        <!-- H1 -->
        <div class="mb-4">
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            Rental Property Calculator — Cash Flow, Cap Rate &amp; Cash-on-Cash Return
          </h1>
        </div>

        <!-- On this page nav -->
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>

          <!-- Desktop: full list -->
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#how-to-analyze" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Analyze</a></li>
            <li><a href="#expense-rules" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Expense Rules</a></li>
            <li><a href="#one-percent-rule" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">1% Rule</a></li>
            <li><a href="#financing" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Financing</a></li>
            <li><a href="#cash-flow-vs-appreciation" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Cash Flow vs Appreciation</a></li>
            <li><a href="#tax-benefits" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Tax Benefits</a></li>
            <li><a href="#market-returns" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">US Market Returns</a></li>
            <li><a href="#common-mistakes" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Common Mistakes</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
          </ul>

          <!-- Mobile: first 4 always visible + collapsible rest -->
          <div class="md:hidden">
            <ul class="flex flex-wrap gap-x-4 gap-y-1.5">
              <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
              <li><a href="#how-to-analyze" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Analyze</a></li>
              <li><a href="#expense-rules" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Expense Rules</a></li>
              <li><a href="#one-percent-rule" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">1% Rule</a></li>
              <li><a href="#financing" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Financing</a></li>
              <li><a href="#market-returns" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">US Market Returns</a></li>
              <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    <!-- MOBILE LIVE RESULT BAR -->
    <div class="lg:hidden sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <div class="text-sm text-gray-500 font-medium">Monthly Cash Flow</div>
        <div class="flex items-center gap-3">
          <span v-if="hasResult" class="text-2xl font-extrabold" :class="monthlyCashFlow >= 0 ? 'text-green-600' : 'text-red-500'">
            {{ monthlyCashFlow >= 0 ? '+' : '' }}{{ formatCurrency(monthlyCashFlow) }}
          </span>
          <span v-else class="text-2xl font-bold text-gray-200">—</span>
          <span v-if="hasResult" class="text-xs font-bold px-2.5 py-1 rounded-full text-white"
            :style="`background: ${cashFlowBadge.color}`">
            {{ cashFlowBadge.label }}
          </span>
        </div>
      </div>
    </div>

    <!-- MAIN -->
    <main id="calculator" class="max-w-[1100px] mx-auto px-4 pt-8 pb-10">
      <div class="bg-white rounded-2xl shadow-xl" style="border: 1px solid #e5e7eb; border-top: 3px solid #f59e0b;">
          <div class="lg:grid lg:grid-cols-[3fr_2fr] items-stretch">

            <!-- INPUTS (3 cols) -->
            <div class="calc-inputs space-y-6">

              <!-- Income -->
              <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div class="calc-section-header">
                  <h2 class="calc-section-title">Rental Income</h2>
                </div>
                <div class="p-6 space-y-4">
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label for="monthly-rent" class="block text-sm font-semibold text-gray-700 mb-1.5">Monthly Rent / Unit</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                        <input id="monthly-rent" v-model.number="form.monthlyRent" type="number" min="0" step="50"
                          placeholder="e.g. 1,800"
                          class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                      </div>
                    </div>
                    <div>
                      <label for="num-units" class="block text-sm font-semibold text-gray-700 mb-1.5">Number of Units</label>
                      <input id="num-units" v-model.number="form.numUnits" type="number" min="1" step="1"
                        placeholder="e.g. 2"
                        :class="['w-full px-4 py-4 rounded-xl border focus:ring-2 outline-none font-semibold text-base transition',
                          numUnitsInvalid
                            ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20 text-red-700'
                            : 'border-gray-200 focus:border-yellow-400 focus:ring-yellow-400/40 text-gray-900']" />
                      <p v-if="numUnitsInvalid" class="text-xs text-red-500 mt-1 font-medium">Must be at least 1</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label for="other-income" class="block text-sm font-semibold text-gray-700 mb-1.5">Other Monthly Income</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                        <input id="other-income" v-model.number="form.otherIncome" type="number" min="0" step="25"
                          placeholder="e.g. 100"
                          class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                      </div>
                      <p class="text-xs text-gray-400 mt-1">Laundry, parking, storage</p>
                    </div>
                    <div>
                      <label for="vacancy" class="block text-sm font-semibold text-gray-700 mb-1.5">
                        Vacancy Rate
                        <span class="text-xs font-normal text-gray-400 ml-1">(5–8% typical)</span>
                      </label>
                      <div class="relative">
                        <input id="vacancy" v-model.number="form.vacancyRate" type="number" min="0" max="100" step="0.5"
                          placeholder="e.g. 5"
                          :class="['w-full pr-8 pl-4 py-4 rounded-xl border focus:ring-2 outline-none font-semibold text-base transition',
                            vacancyRateInvalid
                              ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20 text-red-700'
                              : 'border-gray-200 focus:border-yellow-400 focus:ring-yellow-400/40 text-gray-900']" />
                        <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                      </div>
                      <p v-if="vacancyRateInvalid" class="text-xs text-red-500 mt-1 font-medium">Must be 0–100%</p>
                    </div>
                  </div>
                  <div v-if="grossMonthlyIncome > 0" class="p-3 rounded-xl text-sm font-medium text-blue-800 bg-blue-50 border border-blue-100">
                    Effective Monthly Income: <span class="font-bold">{{ formatCurrency(effectiveMonthlyIncome) }}</span>
                    <span class="text-blue-500 ml-1">(after {{ vacancyRateClamped }}% vacancy)</span>
                  </div>
                </div>
              </div>

              <!-- Operating Expenses -->
              <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div class="calc-section-header">
                  <h2 class="calc-section-title">Monthly Operating Expenses</h2>
                  <div class="ml-auto flex items-center bg-gray-100 rounded-lg p-0.5 text-xs font-bold">
                    <button
                      @click="expenseMode = 'simple'"
                      :class="['px-3 py-1.5 rounded-md transition', expenseMode === 'simple' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700']">
                      Simple
                    </button>
                    <button
                      @click="expenseMode = 'detailed'"
                      :class="['px-3 py-1.5 rounded-md transition', expenseMode === 'detailed' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700']">
                      Detailed
                    </button>
                  </div>
                </div>
                <div class="p-6 space-y-4">
                  <!-- Simple mode -->
                  <div v-if="expenseMode === 'simple'">
                    <label for="expense-pct" class="block text-sm font-semibold text-gray-700 mb-1.5">
                      Operating Expenses
                      <span class="font-normal text-gray-400">(% of effective income)</span>
                    </label>
                    <div class="flex items-center gap-3">
                      <div class="relative flex-1">
                        <input id="expense-pct" v-model.number="form.expensePct" type="number" min="0" max="100" step="1"
                          placeholder="e.g. 40"
                          class="w-full pr-8 pl-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                        <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                      </div>
                      <div class="text-sm text-gray-500">≈ <span class="font-bold text-gray-800">{{ formatCurrency(totalMonthlyExpenses) }}</span>/mo</div>
                    </div>
                    <p class="text-xs text-gray-400 mt-1.5">Typical: 35–50% (taxes, insurance, maintenance, management)</p>
                  </div>
                  <!-- Detailed mode -->
                  <div v-if="expenseMode === 'detailed'" class="grid grid-cols-2 gap-4">
                    <div v-for="exp in expenseFields" :key="exp.key">
                      <label :for="`exp-${exp.key}`" class="block text-xs font-semibold text-gray-600 mb-1">{{ exp.label }}</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                        <input :id="`exp-${exp.key}`" v-model.number="form.expenses[exp.key]" type="number" min="0" step="10"
                          :placeholder="exp.placeholder"
                          class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-medium text-sm transition" />
                      </div>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-gray-100 flex justify-between items-center text-sm">
                    <span class="text-gray-500 font-medium">Total Monthly Expenses</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(totalMonthlyExpenses) }}</span>
                  </div>
                </div>
              </div>

              <!-- Financing -->
              <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div class="calc-section-header">
                  <h2 class="calc-section-title">Purchase &amp; Financing</h2>
                </div>
                <div class="p-6 space-y-4">
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label for="purchase-price" class="block text-sm font-semibold text-gray-700 mb-1.5">Purchase Price</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                        <input id="purchase-price" v-model.number="form.purchasePrice" type="number" min="0" step="1000"
                          placeholder="e.g. 300,000"
                          :class="['w-full pl-8 pr-4 py-4 rounded-xl border focus:ring-2 outline-none font-semibold text-base transition',
                            purchasePriceInvalid
                              ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20 text-red-700'
                              : 'border-gray-200 focus:border-yellow-400 focus:ring-yellow-400/40 text-gray-900']" />
                      </div>
                      <p v-if="purchasePriceInvalid" class="text-xs text-red-500 mt-1 font-medium">Must be greater than $0</p>
                    </div>
                    <div>
                      <label for="down-payment" class="block text-sm font-semibold text-gray-700 mb-1.5">Down Payment</label>
                      <div class="relative">
                        <input id="down-payment" v-model.number="form.downPaymentPct" type="number" min="0" max="100" step="0.5"
                          placeholder="e.g. 25"
                          class="w-full pr-8 pl-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                        <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                      </div>
                      <p class="text-xs text-gray-400 mt-1">{{ form.purchasePrice && !purchasePriceInvalid ? formatCurrency(downPaymentAmt) : '—' }}</p>
                    </div>
                    <div>
                      <label for="interest-rate" class="block text-sm font-semibold text-gray-700 mb-1.5">Interest Rate</label>
                      <div class="relative">
                        <input id="interest-rate" v-model.number="form.interestRate" type="number" min="0" max="30" step="0.125"
                          placeholder="e.g. 7.25"
                          class="w-full pr-8 pl-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                        <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                      </div>
                    </div>
                    <div>
                      <label for="loan-term" class="block text-sm font-semibold text-gray-700 mb-1.5">Loan Term</label>
                      <select id="loan-term" v-model.number="form.loanTerm"
                        class="w-full px-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition bg-white">
                        <option :value="30">30 years</option>
                        <option :value="20">20 years</option>
                        <option :value="15">15 years</option>
                        <option :value="10">10 years</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label for="closing-costs" class="block text-sm font-semibold text-gray-700 mb-1.5">Closing Costs &amp; Repairs</label>
                    <div class="relative">
                      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                      <input id="closing-costs" v-model.number="form.closingCosts" type="number" min="0" step="500"
                        placeholder="e.g. 9,000"
                        class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                    </div>
                    <p class="text-xs text-gray-400 mt-1">Included in total cash invested for CoC calculation</p>
                  </div>
                  <div v-if="monthlyMortgage > 0" class="p-3 rounded-xl text-sm font-medium text-blue-800 bg-blue-50 border border-blue-100">
                    Monthly P&amp;I Payment: <span class="font-bold">{{ formatCurrency(monthlyMortgage) }}</span>
                  </div>
                </div>
              </div>

              <!-- ACTION BAR -->
              <div class="flex gap-3">
                <button @click="shareResult"
                  class="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm border-2 transition"
                  :style="shareSuccess ? 'border-color: #16a34a; background: #f0fdf4; color: #16a34a;' : 'border-color: #1e3a5f; background: white; color: #1e3a5f;'">
                  <svg v-if="!shareSuccess" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                  </svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  {{ shareSuccess ? 'Link Copied!' : 'Share Results' }}
                </button>
                <button @click="resetForm"
                  class="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm border-2 border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-800 transition">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                  Reset All
                </button>
              </div>

            </div>

            <!-- RESULTS (2 cols) -->
            <div class="self-stretch rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl border-t border-gray-200 lg:border-t-0 lg:border-l bg-gray-50">
              <!-- NOTE: overflow must be on the INNER div — overflow on a sticky element breaks stickiness in CSS spec -->
              <div class="lg:sticky lg:top-[4.5rem] lg:self-stretch min-w-0 w-full bg-gray-50 flex flex-col">
              <div class="lg:h-full lg:overflow-y-auto space-y-4 p-4 lg:p-5 scrollbar-thin">

                <!-- Validation errors -->
                <div v-if="hasErrors" class="rounded-xl p-4 bg-red-50 border border-red-200">
                  <p class="text-xs font-bold text-red-700 uppercase tracking-wide mb-2">Fix Before Calculating</p>
                  <ul class="space-y-1">
                    <li v-for="err in validationErrors" :key="err" class="text-sm text-red-600 flex items-start gap-1.5">
                      <span class="mt-0.5 flex-shrink-0">•</span>{{ err }}
                    </li>
                  </ul>
                </div>

                <!-- Main Result -->
                <div v-if="hasResult" class="rounded-xl border border-gray-200 bg-white overflow-hidden">
                  <div class="px-5 py-5 border-b border-gray-100">
                    <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Monthly Cash Flow</p>
                    <div class="flex items-center gap-3 mb-3">
                      <span class="text-5xl font-extrabold leading-none" :class="monthlyCashFlow < 0 ? 'text-red-600' : ''" :style="monthlyCashFlow >= 0 ? 'color:#1e3a5f;' : ''">
                        {{ monthlyCashFlow >= 0 ? '+' : '' }}{{ formatCurrency(monthlyCashFlow) }}
                      </span>
                    </div>
                    <div class="flex items-center gap-2 flex-wrap">
                      <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full"
                        :style="`background: ${cashFlowBadge.bg}; color: ${cashFlowBadge.textColor}`">
                        {{ cashFlowBadge.label }}
                      </span>
                      <span v-if="isSuspicious" class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">
                        ⚠ Verify Inputs
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Empty state -->
                <div v-else-if="!hasErrors" class="rounded-xl p-8 text-center border border-dashed border-gray-200 bg-white">
                  <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                    <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <p class="text-gray-400 font-medium text-sm">Enter income &amp; purchase price<br>to see your results</p>
                  <p class="text-gray-300 text-xs mt-1">Results update in real time</p>
                </div>

                <!-- Key Metrics -->
                <div v-if="hasResult" class="bg-white rounded-xl border border-gray-200 p-4">
                  <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Key Metrics</h3>
                  <div class="grid grid-cols-2 gap-2">
                    <div class="bg-gray-50 rounded-xl p-3 text-center">
                      <p class="text-xs font-semibold text-gray-400 mb-0.5">Cap Rate</p>
                      <p class="text-base font-extrabold" style="color: #1e3a5f;">{{ capRate.toFixed(2) }}%</p>
                    </div>
                    <div class="bg-gray-50 rounded-xl p-3 text-center">
                      <p class="text-xs font-semibold text-gray-400 mb-0.5">Cash-on-Cash</p>
                      <p class="text-base font-extrabold" style="color: #1e3a5f;">{{ cashOnCash.toFixed(2) }}%</p>
                    </div>
                    <div class="bg-gray-50 rounded-xl p-3 text-center">
                      <p class="text-xs font-semibold text-gray-400 mb-0.5">Annual NOI</p>
                      <p class="text-base font-extrabold" style="color: #1e3a5f;">{{ formatCurrency(annualNOI) }}</p>
                    </div>
                    <div class="bg-gray-50 rounded-xl p-3 text-center">
                      <p class="text-xs font-semibold text-gray-400 mb-0.5">Annual Cash Flow</p>
                      <p class="text-base font-extrabold" :class="annualCashFlow >= 0 ? 'text-green-600' : 'text-red-500'">
                        {{ annualCashFlow >= 0 ? '+' : '' }}{{ formatCurrency(annualCashFlow) }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Monthly Breakdown -->
                <div v-if="hasResult" class="bg-white rounded-2xl border border-gray-200 p-4">
                  <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Monthly Breakdown</h3>
                  <div class="space-y-1.5 text-sm">
                    <div class="flex justify-between items-center py-1 border-b border-gray-50">
                      <span class="text-gray-500">Gross Income</span>
                      <span class="font-semibold text-gray-900">{{ formatCurrency(grossMonthlyIncome) }}</span>
                    </div>
                    <div class="flex justify-between items-center py-1 border-b border-gray-50">
                      <span class="text-gray-400">— Vacancy ({{ vacancyRateClamped }}%)</span>
                      <span class="font-semibold text-red-400">-{{ formatCurrency(vacancyLoss) }}</span>
                    </div>
                    <div class="flex justify-between items-center py-1 border-b border-gray-50">
                      <span class="text-gray-500">— Operating Expenses</span>
                      <span class="font-semibold text-red-400">-{{ formatCurrency(totalMonthlyExpenses) }}</span>
                    </div>
                    <div class="flex justify-between items-center py-1 border-b border-gray-100 font-bold">
                      <span style="color: #1e3a5f;">= NOI</span>
                      <span style="color: #1e3a5f;">{{ formatCurrency(monthlyNOI) }}</span>
                    </div>
                    <div v-if="monthlyMortgage > 0" class="flex justify-between items-center py-1 border-b border-gray-50">
                      <span class="text-gray-400">— Mortgage (P&amp;I)</span>
                      <span class="font-semibold text-red-400">-{{ formatCurrency(monthlyMortgage) }}</span>
                    </div>
                    <div class="flex justify-between items-center py-1 font-extrabold">
                      <span>= Cash Flow</span>
                      <span :class="monthlyCashFlow >= 0 ? 'text-green-600' : 'text-red-500'">
                        {{ monthlyCashFlow >= 0 ? '+' : '' }}{{ formatCurrency(monthlyCashFlow) }}
                      </span>
                    </div>
                  </div>
                  <template v-if="form.purchasePrice && !purchasePriceInvalid">
                    <div class="mt-3 pt-3 border-t border-gray-100">
                      <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Cash Invested</h3>
                      <div class="flex justify-between text-sm"><span class="text-gray-400">Down Payment</span><span class="font-semibold">{{ formatCurrency(downPaymentAmt) }}</span></div>
                      <div class="flex justify-between text-sm"><span class="text-gray-400">Closing Costs</span><span class="font-semibold">{{ formatCurrency(form.closingCosts || 0) }}</span></div>
                      <div class="flex justify-between text-sm font-bold mt-1" style="color: #1e3a5f;">
                        <span>Total</span><span>{{ formatCurrency(totalCashInvested) }}</span>
                      </div>
                    </div>
                  </template>
                </div>

              </div>
              </div>
            </div>

          </div>

      </div>

          <!-- ══════════ SEO CONTENT SECTION ══════════ -->
          <div class="mt-12 space-y-8">

            <!-- How to Analyze -->
            <div id="how-to-analyze" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">How to Analyze a Rental Property Investment</h2>
              <p class="text-gray-600 leading-relaxed mb-4">
                A complete rental property analysis requires calculating four core metrics: <strong>Net Operating Income (NOI)</strong>, <strong>Cap Rate</strong>, <strong>Cash-on-Cash Return</strong>, and <strong>Monthly Cash Flow</strong>. Each answers a different question about your investment.
              </p>
              <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p class="font-bold text-sm mb-1" style="color: #1e3a5f;">Net Operating Income (NOI)</p>
                  <p class="text-xs text-gray-500 mb-2">What the property earns before debt service</p>
                  <code class="text-xs bg-white px-2 py-1 rounded border border-gray-200 block">NOI = Effective Gross Income − Operating Expenses</code>
                </div>
                <div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p class="font-bold text-sm mb-1" style="color: #1e3a5f;">Capitalization Rate</p>
                  <p class="text-xs text-gray-500 mb-2">Unlevered yield — compare properties regardless of financing</p>
                  <code class="text-xs bg-white px-2 py-1 rounded border border-gray-200 block">Cap Rate = NOI ÷ Purchase Price × 100</code>
                </div>
                <div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p class="font-bold text-sm mb-1" style="color: #1e3a5f;">Cash-on-Cash Return</p>
                  <p class="text-xs text-gray-500 mb-2">Annual cash flow as % of cash invested — measures your real yield</p>
                  <code class="text-xs bg-white px-2 py-1 rounded border border-gray-200 block">CoC = Annual Cash Flow ÷ Total Cash Invested × 100</code>
                </div>
                <div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p class="font-bold text-sm mb-1" style="color: #1e3a5f;">Monthly Cash Flow</p>
                  <p class="text-xs text-gray-500 mb-2">What you pocket each month after all costs</p>
                  <code class="text-xs bg-white px-2 py-1 rounded border border-gray-200 block">Cash Flow = NOI/12 − Monthly Mortgage (P&amp;I)</code>
                </div>
              </div>
              <p class="text-gray-600 leading-relaxed text-sm">
                A strong rental property typically achieves: cash-on-cash ≥ 8%, cap rate ≥ 5% (market dependent), and positive monthly cash flow after all expenses including vacancy allowance and property management.
              </p>
            </div>

            <!-- Expense Rules -->
            <div id="expense-rules" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Rental Property Expense Rules of Thumb</h2>
              <p class="text-gray-600 leading-relaxed mb-6">
                Two widely-used rules help investors quickly estimate whether a property's expense load is reasonable before running detailed numbers. Use them for screening — not for your final underwriting.
              </p>
              <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div class="p-5 rounded-xl border-2 border-amber-200 bg-amber-50">
                  <p class="font-extrabold text-base mb-1" style="color: #1e3a5f;">The 50% Rule</p>
                  <p class="text-sm text-gray-600 leading-relaxed mb-3">Budget 50% of gross rent for operating expenses (excluding mortgage). This includes taxes, insurance, management, maintenance, vacancy, and reserves. If gross rent is $2,000/mo, expect ~$1,000/mo in expenses before debt service.</p>
                  <div class="text-xs text-amber-800 bg-amber-100 rounded-lg p-3 font-medium">Best for: older properties, self-managed, landlord pays utilities. Conservative — can over-estimate for newer properties in low-tax states.</div>
                </div>
                <div class="p-5 rounded-xl border-2 border-blue-200 bg-blue-50">
                  <p class="font-extrabold text-base mb-1" style="color: #1e3a5f;">The 40% Rule</p>
                  <p class="text-sm text-gray-600 leading-relaxed mb-3">A slightly more optimistic estimate for newer construction, professionally managed single-family rentals in low-tax markets. Assumes tenant pays utilities, modest tax burden, and a competent management team keeping vacancy low.</p>
                  <div class="text-xs text-blue-800 bg-blue-100 rounded-lg p-3 font-medium">Best for: SFR built after 2010, tenant-paid utilities, property management in place, tax-friendly states (FL, TX, AZ).</div>
                </div>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-sm border-collapse">
                  <thead>
                    <tr class="border-b-2 border-gray-200">
                      <th class="text-left py-2 pr-4 font-bold text-gray-700">Expense Category</th>
                      <th class="text-right py-2 px-3 font-bold text-gray-700">% of Gross Rent</th>
                      <th class="text-right py-2 pl-3 font-bold text-gray-700">On $2,000/mo</th>
                    </tr>
                  </thead>
                  <tbody class="text-gray-600">
                    <tr class="border-b border-gray-100"><td class="py-2 pr-4">Property Taxes</td><td class="text-right px-3">8–15%</td><td class="text-right pl-3">$160–$300</td></tr>
                    <tr class="border-b border-gray-100"><td class="py-2 pr-4">Insurance</td><td class="text-right px-3">4–8%</td><td class="text-right pl-3">$80–$160</td></tr>
                    <tr class="border-b border-gray-100"><td class="py-2 pr-4">Property Management</td><td class="text-right px-3">8–12%</td><td class="text-right pl-3">$160–$240</td></tr>
                    <tr class="border-b border-gray-100"><td class="py-2 pr-4">Maintenance &amp; Repairs</td><td class="text-right px-3">5–10%</td><td class="text-right pl-3">$100–$200</td></tr>
                    <tr class="border-b border-gray-100"><td class="py-2 pr-4">Vacancy Allowance</td><td class="text-right px-3">5–8%</td><td class="text-right pl-3">$100–$160</td></tr>
                    <tr class="border-b border-gray-100"><td class="py-2 pr-4">CapEx Reserve</td><td class="text-right px-3">3–6%</td><td class="text-right pl-3">$60–$120</td></tr>
                    <tr class="font-bold text-gray-800"><td class="py-2 pr-4">Total (typical)</td><td class="text-right px-3">35–55%</td><td class="text-right pl-3">$700–$1,100</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- The 1% Rule -->
            <div id="one-percent-rule" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">The 1% Rule — Quick Screen for Cash Flow Potential</h2>
              <p class="text-gray-600 leading-relaxed mb-4">
                The <strong>1% rule</strong> states that a rental property's monthly gross rent should equal at least 1% of its total acquisition cost (purchase price + repairs). A $250,000 property should produce $2,500/month in rent. Properties that meet the 1% rule generally have enough income to cover expenses and a mortgage at current rates and still generate positive cash flow.
              </p>
              <div class="grid md:grid-cols-3 gap-4 mb-5">
                <div class="p-4 rounded-xl bg-green-50 border border-green-100 text-center">
                  <p class="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">Meets 1% Rule</p>
                  <p class="text-lg font-extrabold text-green-700">$300K → $3,000+/mo</p>
                  <p class="text-xs text-green-600 mt-1">Good cash flow candidate — proceed to full analysis</p>
                </div>
                <div class="p-4 rounded-xl bg-amber-50 border border-amber-100 text-center">
                  <p class="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Near 1% Rule</p>
                  <p class="text-lg font-extrabold text-amber-700">$300K → $2,500–$3,000/mo</p>
                  <p class="text-xs text-amber-600 mt-1">Run full numbers — may still work in low-expense markets</p>
                </div>
                <div class="p-4 rounded-xl bg-red-50 border border-red-100 text-center">
                  <p class="text-xs font-bold text-red-600 uppercase tracking-wide mb-1">Fails 1% Rule</p>
                  <p class="text-lg font-extrabold text-red-600">$300K → &lt;$2,000/mo</p>
                  <p class="text-xs text-red-500 mt-1">Likely cash-flow negative — appreciation play only</p>
                </div>
              </div>
              <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600">
                <strong class="text-gray-800">Important caveat:</strong> The 1% rule is nearly impossible to meet in high-cost metros (NYC, LA, SF, Seattle, Boston). In those markets, investors rely on appreciation and equity build-up. Conversely, in the Midwest and Southeast, 1–1.5% ratios are common. Don't reject a market because properties fail the 1% rule — adjust your return expectations and strategy instead.
              </div>
            </div>

            <!-- Financing -->
            <div id="financing" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Financing a Rental Property — Loan Types &amp; Down Payment Requirements</h2>
              <p class="text-gray-600 leading-relaxed mb-6">Your financing choice dramatically impacts cash flow. A higher down payment lowers your monthly payment but reduces your cash-on-cash return by tying up more capital. A smaller down payment maximizes CoC return but leaves less margin for error.</p>
              <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div class="p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Conventional Investment Loan</p>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Down payment: <strong>15–25%</strong> (SFR vs. multi-unit)</li>
                    <li>• Rate: typically 0.5–0.75% above primary residence</li>
                    <li>• Qualifies on your personal income and credit score</li>
                    <li>• Best for: W-2 earners with strong DTI and credit ≥ 680</li>
                  </ul>
                </div>
                <div class="p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">DSCR Loan (Debt-Service Coverage Ratio)</p>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Down payment: <strong>20–25%</strong></li>
                    <li>• No personal income verification — property qualifies itself</li>
                    <li>• DSCR ≥ 1.25× typically required (rent ÷ P&amp;I)</li>
                    <li>• Best for: self-employed investors or those with multiple properties</li>
                  </ul>
                </div>
                <div class="p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Portfolio Loan</p>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Held by lender — not sold to Fannie/Freddie</li>
                    <li>• More flexible terms, higher rates (1–2% above conventional)</li>
                    <li>• Can bundle multiple properties in a single loan (blanket)</li>
                    <li>• Best for: experienced investors building a portfolio quickly</li>
                  </ul>
                </div>
                <div class="p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">House Hacking (FHA / Conventional)</p>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• FHA: 3.5% down — owner-occupied 2–4 unit only</li>
                    <li>• Conventional: 5% down for owner-occupied duplex</li>
                    <li>• Live in one unit, rent the others to offset mortgage</li>
                    <li>• Best for: first-time investors building equity with minimal cash</li>
                  </ul>
                </div>
              </div>
              <div class="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-800">
                <strong>Down payment leverage tip:</strong> 25% down vs. 20% down on a $300K property means an extra $15,000 tied up. At an 8% CoC return, that $15K would have generated $1,200/year in additional cash flow if deployed elsewhere. Always model multiple down payment scenarios before committing.
              </div>
            </div>

            <!-- Cash Flow vs Appreciation -->
            <div id="cash-flow-vs-appreciation" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Cash Flow vs. Appreciation — Which Strategy Is Right for You?</h2>
              <p class="text-gray-600 leading-relaxed mb-5">
                Real estate investors broadly fall into two camps: <strong>cash flow investors</strong> who prioritize monthly income, and <strong>appreciation investors</strong> who accept thin or negative cash flow in exchange for long-term price growth. Neither is universally superior — the right strategy depends on your income, timeline, and local market.
              </p>
              <div class="grid md:grid-cols-2 gap-6 mb-5">
                <div class="p-5 rounded-xl border-l-4 bg-green-50 border-green-400">
                  <p class="font-extrabold text-green-800 mb-2">Cash Flow Strategy</p>
                  <ul class="text-sm text-gray-600 space-y-2">
                    <li><strong>Target markets:</strong> Midwest, Southeast, Sun Belt secondary cities</li>
                    <li><strong>Typical returns:</strong> 6–12% CoC, cap rates 6–9%</li>
                    <li><strong>Pros:</strong> Income in Year 1, portfolio compounds faster, less reliance on appreciation timing</li>
                    <li><strong>Cons:</strong> Lower price appreciation, may require more active management in lower-income areas</li>
                    <li><strong>Best for:</strong> Investors seeking passive income replacement or early retirement</li>
                  </ul>
                </div>
                <div class="p-5 rounded-xl border-l-4 bg-blue-50 border-blue-400">
                  <p class="font-extrabold text-blue-800 mb-2">Appreciation Strategy</p>
                  <ul class="text-sm text-gray-600 space-y-2">
                    <li><strong>Target markets:</strong> CA, NY, WA, CO, major coastal metros</li>
                    <li><strong>Typical returns:</strong> 1–4% CoC, cap rates 3–5%, but 5–7% annual appreciation</li>
                    <li><strong>Pros:</strong> Massive equity build-up, strong rent growth, liquid resale market</li>
                    <li><strong>Cons:</strong> Negative cash flow common, must subsidize the property monthly, vulnerable to rate spikes</li>
                    <li><strong>Best for:</strong> High-income earners who can absorb short-term losses for long-term wealth</li>
                  </ul>
                </div>
              </div>
              <p class="text-gray-600 text-sm leading-relaxed">
                The most resilient investors combine both: they buy cash-flowing properties in growth markets — cities like Atlanta, Austin, Tampa, and Nashville — where you don't have to choose between monthly income and long-term appreciation.
              </p>
            </div>

            <!-- Tax Benefits -->
            <div id="tax-benefits" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Tax Benefits of Rental Property Ownership</h2>
              <p class="text-gray-600 leading-relaxed mb-5">
                The US tax code offers rental property owners substantial deductions that improve after-tax returns significantly. A property showing modest cash flow on paper often produces much better after-tax results due to depreciation — a non-cash deduction that shelters income.
              </p>
              <div class="grid md:grid-cols-2 gap-4 mb-5">
                <div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Depreciation (Section 168)</p>
                  <p class="text-xs text-gray-600 leading-relaxed">Residential rental property is depreciated over 27.5 years. On a $300,000 property (excluding land), you can deduct ~$9,090/year — sheltering that much rental income from federal tax. This is a non-cash deduction: the property continues appreciating while you claim the deduction.</p>
                </div>
                <div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Mortgage Interest Deduction</p>
                  <p class="text-xs text-gray-600 leading-relaxed">100% of mortgage interest on investment properties is deductible against rental income. In the early years of a 30-year mortgage, the majority of each payment is interest — providing a substantial deduction that reduces your taxable rental income.</p>
                </div>
                <div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Operating Expense Deductions</p>
                  <p class="text-xs text-gray-600 leading-relaxed">Property taxes, insurance, property management fees, repairs, maintenance, advertising, and professional services (accountant, attorney) are all fully deductible in the year incurred. Capital improvements are depreciated separately.</p>
                </div>
                <div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">1031 Exchange</p>
                  <p class="text-xs text-gray-600 leading-relaxed">When you sell an investment property, you can defer capital gains taxes indefinitely by rolling the proceeds into a "like-kind" property within 180 days (45-day identification window). Serial 1031 exchanges are how many investors build multi-million-dollar portfolios tax-deferred.</p>
                </div>
              </div>
              <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <strong>Note:</strong> Passive loss rules (IRC §469) limit how much rental depreciation can offset W-2 income. Active investors with AGI under $100K can deduct up to $25K/year; this phases out between $100K–$150K. Real Estate Professional status (750+ hours/year) removes the passive loss limitation entirely. Consult a CPA familiar with real estate.
              </div>
            </div>

            <!-- Market Returns -->
            <div id="market-returns" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Rental Property Returns by US Market (2026)</h2>
              <p class="text-gray-500 text-sm mb-6">Typical cash-on-cash returns for stabilized residential rentals, assuming 25% down and current interest rates. Higher-yield markets generally carry more risk or require more active management.</p>
              <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">California (CA)</p>
                  <p class="text-2xl font-extrabold text-amber-600 mb-1">2–5%</p>
                  <p class="text-xs text-gray-500">CoC return. Low yields — investors bet on appreciation. LA/SF can be negative cash flow at current rates.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Texas (TX)</p>
                  <p class="text-2xl font-extrabold text-green-600 mb-1">5–9%</p>
                  <p class="text-xs text-gray-500">Dallas, San Antonio, Houston. Strong population growth and landlord-friendly laws support solid CoC.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Florida (FL)</p>
                  <p class="text-2xl font-extrabold text-green-600 mb-1">4–8%</p>
                  <p class="text-xs text-gray-500">Tampa, Jacksonville. Rising insurance costs bite into returns. Migration tailwind keeps rents strong.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">New York (NY)</p>
                  <p class="text-2xl font-extrabold text-red-600 mb-1">1–4%</p>
                  <p class="text-xs text-gray-500">NYC metro. Rent stabilization limits upside. High entry prices compress yields.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Arizona (AZ)</p>
                  <p class="text-2xl font-extrabold text-green-600 mb-1">5–9%</p>
                  <p class="text-xs text-gray-500">Phoenix, Tucson. No rent control. Fast growing with investor-friendly regulations.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Georgia (GA)</p>
                  <p class="text-2xl font-extrabold text-green-600 mb-1">6–10%</p>
                  <p class="text-xs text-gray-500">Atlanta suburbs. Among the highest CoC in major metros. Strong employment base.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Colorado (CO)</p>
                  <p class="text-2xl font-extrabold text-amber-600 mb-1">3–6%</p>
                  <p class="text-xs text-gray-500">Denver. High purchase prices limit yield. Long-term appreciation has been strong.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Washington (WA)</p>
                  <p class="text-2xl font-extrabold text-amber-600 mb-1">3–6%</p>
                  <p class="text-xs text-gray-500">Seattle area. No income tax. Strong tech-driven rental demand but high acquisition cost.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Ohio (OH)</p>
                  <p class="text-2xl font-extrabold text-green-600 mb-1">8–13%</p>
                  <p class="text-xs text-gray-500">Columbus, Cleveland. Some of the highest CoC in the country. Low entry prices, solid tenant demand.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">North Carolina (NC)</p>
                  <p class="text-2xl font-extrabold text-green-600 mb-1">5–9%</p>
                  <p class="text-xs text-gray-500">Charlotte, Raleigh. Strong job growth and in-migration. Landlord-friendly state laws.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Tennessee (TN)</p>
                  <p class="text-2xl font-extrabold text-green-600 mb-1">6–10%</p>
                  <p class="text-xs text-gray-500">Nashville, Memphis. No state income tax. Strong population growth and rent demand.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Illinois (IL)</p>
                  <p class="text-2xl font-extrabold text-amber-600 mb-1">4–7%</p>
                  <p class="text-xs text-gray-500">Chicago suburbs. High property taxes compress returns. Strong rental demand in blue-chip neighborhoods.</p>
                </div>
              </div>
            </div>

            <!-- Common Mistakes -->
            <div id="common-mistakes" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">8 Common Mistakes Rental Property Investors Make</h2>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="flex gap-3 p-4 rounded-xl bg-red-50 border border-red-100">
                  <div class="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 flex items-center justify-center font-extrabold text-red-600 text-sm">1</div>
                  <div>
                    <p class="font-bold text-sm text-gray-800 mb-1">Underestimating expenses</p>
                    <p class="text-xs text-gray-600">New investors consistently forget CapEx reserves, vacancy, management fees, and annual maintenance. Always use 40–50% expense ratio until you have 12 months of real data.</p>
                  </div>
                </div>
                <div class="flex gap-3 p-4 rounded-xl bg-red-50 border border-red-100">
                  <div class="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 flex items-center justify-center font-extrabold text-red-600 text-sm">2</div>
                  <div>
                    <p class="font-bold text-sm text-gray-800 mb-1">Using optimistic rent estimates</p>
                    <p class="text-xs text-gray-600">Model rent at current market rates — never at what you hope to charge after improvements. Verify with 3–5 comparable rentals actively listed within 0.5 miles.</p>
                  </div>
                </div>
                <div class="flex gap-3 p-4 rounded-xl bg-red-50 border border-red-100">
                  <div class="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 flex items-center justify-center font-extrabold text-red-600 text-sm">3</div>
                  <div>
                    <p class="font-bold text-sm text-gray-800 mb-1">Ignoring vacancy</p>
                    <p class="text-xs text-gray-600">Even great properties have tenant turnover. Budget 5–8% vacancy for SFR, 3–5% for multi-family in strong markets. Never assume 100% occupancy.</p>
                  </div>
                </div>
                <div class="flex gap-3 p-4 rounded-xl bg-red-50 border border-red-100">
                  <div class="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 flex items-center justify-center font-extrabold text-red-600 text-sm">4</div>
                  <div>
                    <p class="font-bold text-sm text-gray-800 mb-1">Buying on appreciation assumptions</p>
                    <p class="text-xs text-gray-600">If the deal only works because you expect the property to appreciate 7%/year, it's a speculation. Run your base case on cash flow alone — appreciation is the upside, not the thesis.</p>
                  </div>
                </div>
                <div class="flex gap-3 p-4 rounded-xl bg-red-50 border border-red-100">
                  <div class="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 flex items-center justify-center font-extrabold text-red-600 text-sm">5</div>
                  <div>
                    <p class="font-bold text-sm text-gray-800 mb-1">Over-leveraging</p>
                    <p class="text-xs text-gray-600">Maximum leverage amplifies returns in good times but can destroy cash flow when rates rise or rents soften. Maintain at least 3–6 months of reserves per property.</p>
                  </div>
                </div>
                <div class="flex gap-3 p-4 rounded-xl bg-red-50 border border-red-100">
                  <div class="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 flex items-center justify-center font-extrabold text-red-600 text-sm">6</div>
                  <div>
                    <p class="font-bold text-sm text-gray-800 mb-1">Skipping property management costs</p>
                    <p class="text-xs text-gray-600">Self-management isn't free — it costs you time. Model 8–10% management fee even if you plan to self-manage. This ensures the deal works if you ever need to hire out.</p>
                  </div>
                </div>
                <div class="flex gap-3 p-4 rounded-xl bg-red-50 border border-red-100">
                  <div class="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 flex items-center justify-center font-extrabold text-red-600 text-sm">7</div>
                  <div>
                    <p class="font-bold text-sm text-gray-800 mb-1">Not stress-testing the deal</p>
                    <p class="text-xs text-gray-600">What happens if rent drops 10%? If the rate resets 2% higher? If the property sits vacant for 3 months? Run downside scenarios before you buy — not after.</p>
                  </div>
                </div>
                <div class="flex gap-3 p-4 rounded-xl bg-red-50 border border-red-100">
                  <div class="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 flex items-center justify-center font-extrabold text-red-600 text-sm">8</div>
                  <div>
                    <p class="font-bold text-sm text-gray-800 mb-1">Emotional buying</p>
                    <p class="text-xs text-gray-600">Never buy a property because you "love it." The numbers are the decision. If the metrics don't hit your targets after conservative underwriting, walk away — there will always be another deal.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- FAQ -->
            <div id="faq" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions — Rental Property Analysis</h2>
              <div class="space-y-0 divide-y divide-gray-100">

                <div class="py-5">
                  <h3 class="font-bold text-gray-800 mb-2">What is a good cash-on-cash return for a rental property?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Most US investors target 6–12% cash-on-cash return. In high-appreciation markets like CA or NY, investors often accept 2–4% CoC and rely on long-term price growth. In cash-flow markets like GA, OH, or IN, 8–12% CoC is achievable. Anything below 4% in a flat-appreciation market is generally not worth the management effort and capital tied up.</p>
                </div>

                <div class="py-5">
                  <h3 class="font-bold text-gray-800 mb-2">What is the 1% rule for rental properties?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">The 1% rule states that a property's monthly gross rent should equal at least 1% of its purchase price. A $200,000 property should rent for at least $2,000/month. This is a quick screening tool, not a substitute for full analysis. Many strong investments in coastal markets fail the 1% rule while still generating solid long-term returns through appreciation.</p>
                </div>

                <div class="py-5">
                  <h3 class="font-bold text-gray-800 mb-2">How much should I budget for rental property expenses?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">The 50% rule suggests budgeting 50% of gross rent for operating expenses (excluding mortgage). This covers taxes, insurance, management, maintenance, vacancy, and reserves. For newer properties in low-tax markets with tenant-paid utilities, 35–40% is realistic. Older properties or high-tax states like NY and IL can run 50–60%.</p>
                </div>

                <div class="py-5">
                  <h3 class="font-bold text-gray-800 mb-2">Should I include appreciation in my rental property analysis?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Keep appreciation out of your base-case analysis. If the deal only makes sense with appreciation assumptions, it is a speculation, not a cash-flow investment. Appreciation is a bonus — underwrite on income and cash flow alone, and you will never be caught off guard by a flat or declining market.</p>
                </div>

                <div class="py-5">
                  <h3 class="font-bold text-gray-800 mb-2">What down payment do I need for an investment property?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Conventional investment loans require 15% down for single-family rentals and 20–25% for 2–4 unit properties. FHA loans (3.5% down) are only available for owner-occupied properties. DSCR loans — popular with investors — require 20–25% down but do not verify personal income; the property's rent-to-mortgage ratio qualifies the loan.</p>
                </div>

                <div class="py-5">
                  <h3 class="font-bold text-gray-800 mb-2">What is a good cap rate for a rental property?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Cap rate benchmarks depend heavily on market and property class. In primary markets (NYC, LA, SF), cap rates of 3–5% are common. In secondary markets (Atlanta, Phoenix, Nashville), 5–7% is typical. In tertiary markets and Midwest metros, 7–10%+ cap rates are achievable. A cap rate below your local financing rate means the property is negatively leveraged without significant rent growth.</p>
                </div>

                <div class="py-5">
                  <h3 class="font-bold text-gray-800 mb-2">How do I calculate monthly cash flow on a rental property?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Monthly cash flow = Effective Gross Income − Operating Expenses − Monthly Mortgage Payment (P&amp;I). Effective gross income is gross rent × (1 − vacancy rate). Operating expenses include taxes, insurance, management, maintenance, and reserves. The result is what you actually pocket each month after all costs. A property with $2,000 gross rent, 5% vacancy, 45% expense ratio, and a $900 mortgage produces: $1,900 EGI − $855 expenses − $900 = $145/month cash flow.</p>
                </div>

                <div class="py-5">
                  <h3 class="font-bold text-gray-800 mb-2">What is DSCR and why does it matter for rental investors?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">DSCR (Debt-Service Coverage Ratio) measures how many times a property's NOI covers its mortgage payment. DSCR = Annual NOI ÷ Annual Debt Service. A DSCR of 1.25 means the property generates 25% more income than needed to cover the mortgage. Lenders use DSCR to qualify DSCR loans — they typically require ≥ 1.20–1.25. From an investor's perspective, a DSCR below 1.0 means you are subsidizing the property from personal income.</p>
                </div>

                <div class="py-5">
                  <h3 class="font-bold text-gray-800 mb-2">Is rental property better than stocks as an investment?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Both have merits. Rental property offers leverage (you control a $300K asset with $75K), tax advantages (depreciation, 1031 exchanges), and inflation hedging through rent increases. Stocks offer liquidity, zero management burden, and broad diversification. Most wealth-building strategies recommend holding both. Real estate tends to outperform in inflationary environments; stocks tend to outperform in low-inflation, high-growth periods.</p>
                </div>

                <div class="py-5">
                  <h3 class="font-bold text-gray-800 mb-2">How many rental properties do I need to replace my income?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Divide your target monthly income by average cash flow per property. If you need $5,000/month and each property generates $300/month net cash flow, you need ~17 properties. Most investors target $200–$500/month per door for SFR. Scaling up with multi-family (duplexes through 20-unit apartments) accelerates the timeline since each building generates more cash flow per transaction and management effort.</p>
                </div>

                <div class="py-5">
                  <h3 class="font-bold text-gray-800 mb-2">What is the difference between gross rent and effective gross income?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Gross rent (or Potential Gross Income) is what you would collect if the property were 100% occupied all year. Effective Gross Income (EGI) is gross rent minus vacancy loss, plus any additional income (laundry, parking, storage). EGI is the realistic top-line figure used for all further calculations. For a property with $2,000/month gross rent and 5% vacancy: EGI = $2,000 × (1 − 0.05) = $1,900/month.</p>
                </div>

                <div class="py-5">
                  <h3 class="font-bold text-gray-800 mb-2">When does a rental property make sense even with negative cash flow?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Negative cash flow may be acceptable if: (1) you are in a high-appreciation market where price growth substantially exceeds the monthly shortfall; (2) you have strong W-2 income to absorb losses and offset them with depreciation deductions; (3) the property is in a lease-up phase and will reach positive cash flow within 12–18 months; or (4) you are house-hacking and living rent-free. Never accept permanent negative cash flow with no path to break-even — that is not investing, it is speculating with monthly out-of-pocket costs.</p>
                </div>

              </div>
            </div>

            <!-- Related Calculators CTA -->
            <div class="rounded-2xl p-8 text-white" style="background: #1e3a5f;">
              <h2 class="text-xl font-extrabold mb-2">Complete Your Deal Analysis</h2>
              <p class="text-blue-200 text-sm mb-6 leading-relaxed">Use our full suite of calculators to underwrite every angle of your rental property deal.</p>
              <div class="grid sm:grid-cols-3 gap-3">
                <NuxtLink to="/cap-rate-calculator" class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
                  <p class="font-bold text-sm">Cap Rate</p>
                  <p class="text-xs text-blue-300 mt-0.5">Compare properties</p>
                </NuxtLink>
                <NuxtLink to="/dscr-calculator" class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
                  <p class="font-bold text-sm">DSCR</p>
                  <p class="text-xs text-blue-300 mt-0.5">Qualify for financing</p>
                </NuxtLink>
                <NuxtLink to="/cash-on-cash-calculator" class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
                  <p class="font-bold text-sm">Cash-on-Cash</p>
                  <p class="text-xs text-blue-300 mt-0.5">Measure your return</p>
                </NuxtLink>
              </div>
            </div>

          </div>
          <!-- /SEO CONTENT -->
    </main>

    <!-- FAQ JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a good cash-on-cash return for a rental property?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most US investors target 6-12% cash-on-cash return depending on the market. In high-appreciation markets (CA, NY), 2-4% CoC is accepted. In cash-flow markets (GA, OH, IN), 8-12% CoC is achievable."
          }
        },
        {
          "@type": "Question",
          "name": "What is the 1% rule for rental properties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 1% rule states that monthly gross rent should be at least 1% of the purchase price. A $200,000 property should rent for $2,000/month. This is a quick screening tool, not a substitute for full analysis."
          }
        },
        {
          "@type": "Question",
          "name": "How much should I budget for rental property expenses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 50% rule suggests budgeting 50% of gross rent for expenses including taxes, insurance, management, maintenance, and vacancy. For newer properties in low-tax states, 35-40% is realistic. Older properties or high-tax states can run 50-60%."
          }
        }
      ]
    }
    </script>

  </div>
</template>

<script setup>
const isNavExpanded = ref(false)
import { reactive, ref, computed } from 'vue'

useHead({
  title: 'Rental Property Calculator — Cash Flow, Cap Rate, CoC Return | RealCalc',
  meta: [
    { name: 'description', content: 'Free rental property calculator for US investors. Calculate monthly cash flow, cap rate, cash-on-cash return, NOI, and DSCR instantly. Includes market benchmarks for CA, TX, FL, NY, AZ, GA, CO, WA.' },
    { property: 'og:title', content: 'Rental Property Calculator | RealCalc' },
    { property: 'og:description', content: 'Analyze any US rental property in seconds. Real-time cash flow, cap rate, and cash-on-cash return with full expense breakdown.' },
  ]
})

// ── Expense Fields ────────────────────────────────────────────────────────────
const expenseFields = [
  { key: 'propertyTax',  label: 'Property Taxes/mo',     placeholder: 'e.g. 350' },
  { key: 'insurance',    label: 'Insurance/mo',           placeholder: 'e.g. 150' },
  { key: 'management',   label: 'Management/mo',          placeholder: 'e.g. 180' },
  { key: 'maintenance',  label: 'Maintenance/mo',         placeholder: 'e.g. 200' },
  { key: 'utilities',    label: 'Utilities/mo',           placeholder: 'e.g. 50' },
  { key: 'hoa',          label: 'HOA/mo',                 placeholder: 'e.g. 0' },
  { key: 'other',        label: 'Other/mo',               placeholder: 'e.g. 50' },
]

// ── Form State ────────────────────────────────────────────────────────────────
const form = reactive({
  monthlyRent:    null,
  numUnits:       null,
  otherIncome:    null,
  vacancyRate:    null,
  expensePct:     null,
  expenses: {
    propertyTax:  null,
    insurance:    null,
    management:   null,
    maintenance:  null,
    utilities:    null,
    hoa:          null,
    other:        null,
  },
  purchasePrice:  null,
  downPaymentPct: null,
  interestRate:   null,
  loanTerm:       30,
  closingCosts:   null,
})

const expenseMode = ref('simple')
const shareSuccess = ref(false)

// ── Validation ────────────────────────────────────────────────────────────────
const numUnitsInvalid = computed(() => form.numUnits !== null && form.numUnits !== '' && Number(form.numUnits) < 1)
const vacancyRateInvalid = computed(() => form.vacancyRate !== null && form.vacancyRate !== '' && (Number(form.vacancyRate) < 0 || Number(form.vacancyRate) > 100))
const purchasePriceInvalid = computed(() => form.purchasePrice !== null && form.purchasePrice !== '' && Number(form.purchasePrice) <= 0)

const validationErrors = computed(() => {
  const errs = []
  if (numUnitsInvalid.value) errs.push('Number of units must be at least 1')
  if (vacancyRateInvalid.value) errs.push('Vacancy rate must be between 0 and 100%')
  if (purchasePriceInvalid.value) errs.push('Purchase price must be greater than $0')
  return errs
})

const hasErrors = computed(() => validationErrors.value.length > 0)

// ── Income ────────────────────────────────────────────────────────────────────
const vacancyRateClamped = computed(() => Math.min(100, Math.max(0, Number(form.vacancyRate) || 0)))

const grossMonthlyIncome = computed(() =>
  (Number(form.monthlyRent) || 0) * Math.max(1, Number(form.numUnits) || 1) + (Number(form.otherIncome) || 0)
)

const vacancyLoss = computed(() => grossMonthlyIncome.value * (vacancyRateClamped.value / 100))

const effectiveMonthlyIncome = computed(() => grossMonthlyIncome.value - vacancyLoss.value)

// ── Expenses ──────────────────────────────────────────────────────────────────
const detailedExpenses = computed(() =>
  Object.values(form.expenses).reduce((s, v) => s + (Number(v) || 0), 0)
)

const totalMonthlyExpenses = computed(() => {
  if (expenseMode.value === 'detailed') return detailedExpenses.value
  return effectiveMonthlyIncome.value * ((Number(form.expensePct) || 0) / 100)
})

// ── NOI ───────────────────────────────────────────────────────────────────────
const monthlyNOI = computed(() => effectiveMonthlyIncome.value - totalMonthlyExpenses.value)
const annualNOI = computed(() => monthlyNOI.value * 12)

// ── Mortgage ──────────────────────────────────────────────────────────────────
const downPaymentAmt = computed(() =>
  (Number(form.purchasePrice) || 0) * ((Number(form.downPaymentPct) || 0) / 100)
)

const loanAmount = computed(() =>
  (Number(form.purchasePrice) || 0) - downPaymentAmt.value
)

const monthlyMortgage = computed(() => {
  const p = loanAmount.value
  const r = (Number(form.interestRate) || 0) / 100 / 12
  const n = (Number(form.loanTerm) || 30) * 12
  if (p <= 0 || r <= 0) return 0
  return p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
})

// ── Cash Flow ─────────────────────────────────────────────────────────────────
const monthlyCashFlow = computed(() => monthlyNOI.value - monthlyMortgage.value)
const annualCashFlow = computed(() => monthlyCashFlow.value * 12)

// ── Investment Metrics ────────────────────────────────────────────────────────
const totalCashInvested = computed(() => downPaymentAmt.value + (Number(form.closingCosts) || 0))

const capRate = computed(() =>
  (Number(form.purchasePrice) || 0) > 0 ? (annualNOI.value / Number(form.purchasePrice)) * 100 : 0
)

const cashOnCash = computed(() =>
  totalCashInvested.value > 0 ? (annualCashFlow.value / totalCashInvested.value) * 100 : 0
)

// ── State flags ───────────────────────────────────────────────────────────────
const hasResult = computed(() => grossMonthlyIncome.value > 0 && !hasErrors.value)

const isSuspicious = computed(() =>
  monthlyCashFlow.value > grossMonthlyIncome.value * 0.8
)

const cashFlowBadge = computed(() => {
  const cf = monthlyCashFlow.value
  if (cf >= 400) return { label: 'Strong Cash Flow', color: '#16a34a', bg: 'rgba(22,163,74,0.2)', textColor: '#86efac' }
  if (cf >= 100) return { label: 'Positive', color: '#2563eb', bg: 'rgba(37,99,235,0.2)', textColor: '#93c5fd' }
  if (cf >= 0)   return { label: 'Break Even', color: '#d97706', bg: 'rgba(217,119,6,0.2)', textColor: '#fcd34d' }
  return { label: 'Negative', color: '#dc2626', bg: 'rgba(220,38,38,0.2)', textColor: '#fca5a5' }
})

// ── Actions ───────────────────────────────────────────────────────────────────
function shareResult() {
  const url = window.location.href
  navigator.clipboard?.writeText(url).catch(() => {})
  shareSuccess.value = true
  setTimeout(() => { shareSuccess.value = false }, 2500)
}

function resetForm() {
  Object.keys(form).forEach(k => {
    if (k === 'expenses') {
      Object.keys(form.expenses).forEach(ek => { form.expenses[ek] = null })
    } else if (k === 'loanTerm') {
      form.loanTerm = 30
    } else {
      form[k] = null
    }
  })
}

function formatCurrency(val) {
  const n = Number(val) || 0
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}
</script>
