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
            <li><a href="#market-returns" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">US Market Returns</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
          </ul>

          <!-- Mobile: first 4 always visible + collapsible rest -->
          <div class="md:hidden">
            <ul class="flex flex-wrap gap-x-4 gap-y-1.5">
              <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
              <li><a href="#how-to-analyze" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Analyze</a></li>
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
          <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:gap-8 items-start">

            <!-- INPUTS (3 cols) -->
            <div class="calc-inputs space-y-6 mb-8 lg:mb-0">

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
            <div class="lg:sticky lg:top-24">
              <div class="sticky top-24 space-y-4">

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

          <!-- ══════════ SEO CONTENT SECTION ══════════ -->
          <div class="mt-12 space-y-8">

            <!-- What is rental property analysis -->
            <div id="how-to-analyze" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">How to Analyze a Rental Property Investment</h2>
              <p class="text-gray-600 leading-relaxed mb-4">
                A complete rental property analysis requires calculating four core metrics: <strong>Net Operating Income (NOI)</strong>, <strong>Cap Rate</strong>, <strong>Cash-on-Cash Return</strong>, and <strong>Monthly Cash Flow</strong>. Each answers a different question about your investment.
              </p>
              <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p class="font-bold text-sm mb-1" style="color: #1e3a5f;">Net Operating Income (NOI)</p>
                  <p class="text-xs text-gray-500 mb-2">What the property earns before debt service</p>
                  <code class="text-xs bg-white px-2 py-1 rounded border border-gray-400 hover:border-gray-500 block">NOI = EGI − Operating Expenses</code>
                </div>
                <div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p class="font-bold text-sm mb-1" style="color: #1e3a5f;">Capitalization Rate</p>
                  <p class="text-xs text-gray-500 mb-2">Unlevered yield — compare properties regardless of financing</p>
                  <code class="text-xs bg-white px-2 py-1 rounded border border-gray-400 hover:border-gray-500 block">Cap Rate = NOI ÷ Purchase Price × 100</code>
                </div>
                <div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p class="font-bold text-sm mb-1" style="color: #1e3a5f;">Cash-on-Cash Return</p>
                  <p class="text-xs text-gray-500 mb-2">Annual cash flow as % of cash invested — measures your real yield</p>
                  <code class="text-xs bg-white px-2 py-1 rounded border border-gray-400 hover:border-gray-500 block">CoC = Annual Cash Flow ÷ Total Cash Invested × 100</code>
                </div>
                <div class="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p class="font-bold text-sm mb-1" style="color: #1e3a5f;">Monthly Cash Flow</p>
                  <p class="text-xs text-gray-500 mb-2">What you actually pocket each month after all costs</p>
                  <code class="text-xs bg-white px-2 py-1 rounded border border-gray-400 hover:border-gray-500 block">Cash Flow = NOI/12 − Monthly Mortgage</code>
                </div>
              </div>
              <p class="text-gray-600 leading-relaxed text-sm">
                A strong rental property typically achieves: cash-on-cash ≥ 8%, cap rate ≥ 5% (market dependent), and positive monthly cash flow after all expenses including a vacancy allowance and management fee.
              </p>
            </div>

            <!-- Benchmarks by Market -->
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
              </div>
            </div>

            <!-- FAQ -->
            <div id="faq" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions — Rental Property Analysis</h2>
              <div class="space-y-5">
                <div class="border-b border-gray-100 pb-5">
                  <h3 class="font-bold text-gray-800 mb-2">What is a good cash-on-cash return for a rental property?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Most US investors target 6–12% cash-on-cash return depending on the market. In high-appreciation markets like CA or NY, investors often accept 2–4% CoC and rely on long-term price appreciation. In cash-flow markets like GA, OH, or IN, 8–12% CoC is achievable. Anything below 4% in a flat-appreciation market is generally not worth the management effort.</p>
                </div>
                <div class="border-b border-gray-100 pb-5">
                  <h3 class="font-bold text-gray-800 mb-2">What is the 1% rule for rental properties?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">The 1% rule states that a property's monthly gross rent should be at least 1% of its purchase price. A $200,000 property should rent for at least $2,000/month. This is a quick screening rule, not an analysis — many strong investments fail the 1% rule in major metros while still generating solid returns. Always run the full numbers.</p>
                </div>
                <div class="border-b border-gray-100 pb-5">
                  <h3 class="font-bold text-gray-800 mb-2">How much should I budget for expenses?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">A common rule of thumb is the 50% rule — expect expenses to run about 50% of gross rent. This is conservative and includes taxes, insurance, management, maintenance, and vacancy. For newer properties in low-tax markets, 35–40% is realistic. For older properties or high-tax states, 50–60% is not unusual.</p>
                </div>
                <div class="border-b border-gray-100 pb-5">
                  <h3 class="font-bold text-gray-800 mb-2">Should I include appreciation in my analysis?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Keep appreciation out of your base case analysis. Run the numbers on income and cash flow alone — if the deal only works with appreciation assumptions, it is a speculation, not an investment. Appreciation is a bonus you earn while holding a property that cash flows on its own merits.</p>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-2">What down payment do I need for an investment property?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Investment properties require a minimum 15–25% down payment for conventional financing. FHA loans are only available for owner-occupied properties. DSCR loans (popular with investors) typically require 20–25% down with no income verification — qualifying is based on the property's rent income, not your personal income.</p>
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
