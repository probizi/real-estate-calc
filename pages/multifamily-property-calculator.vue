<template>
  <div class="min-h-screen bg-gray-50">

    <!-- ═══════════════════════════════════════════════
         HEADER
    ═══════════════════════════════════════════════ -->
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
            <a href="/blog/" class="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Blog</a>
          </nav>
          <NuxtLink to="/pricing"
            class="inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2.5 rounded-lg transition hover:opacity-90"
            style="background: #f59e0b; color: #1e3a5f;">
            Get Started Free
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- ═══════════════════════════════════════════════
         PAGE HEADER (breadcrumb only)
    ═══════════════════════════════════════════════ -->
    <div class="bg-white border-b border-gray-100 px-4 py-3">
      <div class="max-w-[1100px] mx-auto">
        <nav aria-label="Breadcrumb">
          <ol class="flex items-center gap-2 text-sm text-gray-400">
            <li><NuxtLink to="/" class="hover:text-gray-600 transition">Home</NuxtLink></li>
            <li><span>/</span></li>
            <li><NuxtLink to="/calculators" class="hover:text-gray-600 transition">Calculators</NuxtLink></li>
            <li><span>/</span></li>
            <li class="text-gray-700 font-semibold">Multifamily Property Calculator</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         PAGE TITLE + ON THIS PAGE NAV
    ═══════════════════════════════════════════════ -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-6">

        <!-- H1 -->
        <div class="mb-4">
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            Multifamily Property Calculator — NOI, DSCR, Cash Flow & Cap Rate (2026)
          </h1>
        </div>

        <!-- On this page nav -->
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>

          <!-- Desktop: full list -->
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            <li><a href="#what-is-multifamily-analysis" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What is Multifamily Analysis</a></li>
            <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Your Result Means</a></li>
            <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
            <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
            <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Applications</a></li>
            <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Industry Standards</a></li>
            <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
          </ul>

          <!-- Mobile: first 3 always visible (vertical) + collapsible rest -->
          <div class="md:hidden">
            <ul class="flex flex-col gap-y-2">
              <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
              <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
              <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            </ul>
            <ul v-show="isNavExpanded" class="flex flex-col gap-y-2 mt-2">
              <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
              <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
              <li><a href="#what-is-multifamily-analysis" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What is Multifamily Analysis</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Your Result Means</a></li>
              <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
              <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
              <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Applications</a></li>
              <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Industry Standards</a></li>
              <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
              <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
            </ul>
            <button
              @click="isNavExpanded = !isNavExpanded"
              class="mt-2 flex items-center gap-1 text-xs font-bold transition"
              style="color: #b45309;">
              <svg class="w-3 h-3 transition-transform duration-200" :class="isNavExpanded ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
              <span>{{ isNavExpanded ? 'Show less' : 'Show all sections' }}</span>
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         MOBILE LIVE RESULT BAR (sticky, hidden on desktop)
    ═══════════════════════════════════════════════ -->
    <div class="lg:hidden sticky top-[4.5rem] z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <div class="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <svg class="w-4 h-4 flex-shrink-0" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          <span v-if="calcMode === 'analyze'">NOI / Cash Flow</span>
          <span v-else-if="calcMode === 'find-rent'">Required Rent</span>
          <span v-else>Max Price</span>
        </div>
        <div class="flex items-center gap-3">
          <!-- analyze mode -->
          <template v-if="calcMode === 'analyze'">
            <span v-if="hasResult" class="text-2xl font-extrabold leading-none" :style="`color: ${badge.bg1}`">
              {{ formatCurrency(noiCalc) }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">&mdash;</span>
            <span v-if="hasResult"
              class="text-xs font-bold px-2.5 py-1 rounded-full text-white"
              :style="`background: ${badge.bg1}`">
              {{ badge.label }}
            </span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <!-- find-rent mode -->
          <template v-else-if="calcMode === 'find-rent'">
            <span v-if="requiredRentResult" class="text-xl font-extrabold leading-none text-blue-700">
              {{ formatCurrency(requiredRentResult) }}/mo
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">&mdash;</span>
            <span v-if="requiredRentResult" class="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">Required</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <!-- find-price mode -->
          <template v-else>
            <span v-if="maxPriceResult" class="text-xl font-extrabold leading-none text-emerald-700">
              {{ formatCurrency(maxPriceResult) }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">&mdash;</span>
            <span v-if="maxPriceResult" class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">Max Price</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         MAIN CALCULATOR
    ═══════════════════════════════════════════════ -->
    <main id="calculator" class="max-w-[1100px] mx-auto px-4 pt-8 pb-10">
      <div class="rounded-3xl p-[3px]" style="background: linear-gradient(135deg, #1e3a5f 0%, #f59e0b 50%, #1e3a5f 100%);">
      <div class="bg-white rounded-[21px] shadow-xl shadow-slate-200/60" style="overflow: clip;">

      <!-- ═══════════════════════════════════════════════
           CALCULATOR MODE SELECTOR
      ═══════════════════════════════════════════════ -->
      <div class="border-b border-gray-100 rounded-t-2xl bg-white">
        <div class="px-5 pt-4 pb-3">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
            What do you want to calculate?
          </p>
          <div class="calc-mode-tabs">
            <!-- Mode 1: Full Analysis -->
            <button @click="calcMode = 'analyze'"
              class="calc-mode-tab"
              :class="calcMode === 'analyze' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'analyze' ? 'color:#1e3a5f;' : ''">Analyze Property</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'analyze' ? 'text-amber-700' : 'text-gray-400'">NOI, Cash Flow, DSCR</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'analyze' ? 'bg-amber-100 text-amber-800' : 'bg-gray-200 text-gray-400'">Standard</span>
            </button>
            <!-- Mode 2: Find Required Rent -->
            <button @click="calcMode = 'find-rent'"
              class="calc-mode-tab"
              :class="calcMode === 'find-rent' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-rent' ? 'color:#1e3a5f;' : ''">Find Required Rent</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-rent' ? 'text-blue-700' : 'text-gray-400'">Target NOI &rarr; Rent/Unit</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-rent' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
            <!-- Mode 3: Find Max Purchase Price -->
            <button @click="calcMode = 'find-price'"
              class="calc-mode-tab"
              :class="calcMode === 'find-price' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-price' ? 'color:#1e3a5f;' : ''">Find Max Price</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-price' ? 'text-emerald-700' : 'text-gray-400'">NOI &div; Target Cap Rate</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-price' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
          </div>

          <!-- Mode descriptions -->
          <div class="mt-2.5">
            <p v-if="calcMode === 'analyze'" class="text-xs text-gray-500 leading-relaxed">
              Enter units, rent, expenses, and property price to get NOI, cap rate, DSCR, cash flow, and break-even occupancy.
            </p>
            <p v-else-if="calcMode === 'find-rent'" class="text-xs text-blue-700 leading-relaxed bg-blue-50 px-3 py-1.5 rounded-lg">
              Enter a <strong>target NOI</strong>, units, vacancy, and expenses — the calculator shows the rent per unit needed to hit that target.
            </p>
            <p v-else class="text-xs text-emerald-700 leading-relaxed bg-emerald-50 px-3 py-1.5 rounded-lg">
              Enter income, expenses, and a <strong>target cap rate</strong> — the calculator shows the maximum price you should pay.
            </p>
          </div>

        </div>
      </div>

      <!-- Two-column body: inputs left, results right -->
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch">

        <!-- ── INPUTS (left column) ── -->
        <div class="calc-inputs border-b lg:border-b-0 lg:border-r border-gray-200 bg-white min-w-0">

          <!-- Income Section — shown in analyze and find-price modes -->
          <div v-if="calcMode === 'analyze' || calcMode === 'find-price'"
            class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Income</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">

              <!-- Number of Units -->
              <div>
                <label for="num-units" class="block text-xs font-semibold text-gray-700 mb-1">
                  Number of Units
                </label>
                <input id="num-units" v-model="form.numUnits" type="number" min="1" step="1"
                  placeholder="Enter number of units"
                  aria-label="Number of rental units"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
              </div>

              <!-- Average Rent Per Unit -->
              <div>
                <label for="avg-rent" class="block text-xs font-semibold text-gray-700 mb-1">
                  Average Monthly Rent Per Unit
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="avg-rent" v-model="form.avgRent" type="number" min="0" step="50"
                    placeholder="Enter average monthly rent per unit"
                    aria-label="Average monthly rent per unit in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

              <!-- Computed Annual Gross Rent -->
              <div v-if="annualGrossRent > 0" class="p-2.5 rounded-xl text-xs font-medium text-blue-800 bg-blue-50 border border-blue-100">
                Annual Gross Rent: <span class="font-bold">{{ formatCurrency(annualGrossRent) }}</span>
                <span class="text-blue-500 ml-1">({{ form.numUnits }} units &times; {{ formatCurrency(form.avgRent) }}/mo &times; 12)</span>
              </div>

              <!-- Other Income -->
              <div>
                <label for="other-income" class="block text-xs font-semibold text-gray-700 mb-1">
                  Other Monthly Income
                  <span class="ml-1 text-xs font-normal text-gray-400">(parking, laundry, storage, etc.)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="other-income" v-model="form.otherIncome" type="number" min="0" step="50"
                    placeholder="Enter other monthly income"
                    aria-label="Other monthly income in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

              <!-- Vacancy Rate -->
              <div>
                <label for="vacancy-rate" class="block text-xs font-semibold text-gray-700 mb-1">
                  Vacancy Rate
                  <span class="ml-1 text-xs font-normal text-gray-400">(typical: 5–10%)</span>
                </label>
                <div class="relative">
                  <input id="vacancy-rate" v-model="form.vacancyRate" type="number" min="0" max="100" step="0.5"
                    placeholder="Enter expected vacancy percentage"
                    aria-label="Vacancy rate as a percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
              </div>

              <!-- Vacancy Toggle — applies vacancy to other income -->
              <div class="flex items-center gap-3 p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                <button @click="vacancyAffectsOtherIncome = !vacancyAffectsOtherIncome"
                  class="relative w-10 h-5 rounded-full transition-colors duration-200 flex-shrink-0"
                  :class="vacancyAffectsOtherIncome ? 'bg-amber-400' : 'bg-gray-300'"
                  :aria-pressed="vacancyAffectsOtherIncome"
                  aria-label="Apply vacancy to other income">
                  <span class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200"
                    :class="vacancyAffectsOtherIncome ? 'translate-x-5' : ''"></span>
                </button>
                <div>
                  <p class="text-xs font-semibold text-gray-700">Apply vacancy to other income?</p>
                  <p class="text-xs text-gray-400">{{ vacancyAffectsOtherIncome ? 'Vacancy applies to rent + other income' : 'Vacancy applies to rent only (default)' }}</p>
                </div>
              </div>

            </div>
          </div>

          <!-- Expenses Section — shown in analyze and find-price modes -->
          <div v-if="calcMode === 'analyze' || calcMode === 'find-price'"
            class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Annual Operating Expenses</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">

              <!-- Expense Mode Toggle -->
              <div>
                <p id="expense-mode-label" class="sr-only">Expense entry mode</p>
                <div class="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-xl w-fit shadow-sm" role="group" aria-labelledby="expense-mode-label">
                  <button @click="expenseMode = 'amount'"
                    :aria-pressed="expenseMode === 'amount'"
                    :class="expenseMode === 'amount' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">
                    Dollar Amount
                  </button>
                  <button @click="expenseMode = 'percentage'"
                    :aria-pressed="expenseMode === 'percentage'"
                    :class="expenseMode === 'percentage' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">
                    % of EGI
                  </button>
                  <button @click="expenseMode = 'detailed'"
                    :aria-pressed="expenseMode === 'detailed'"
                    :class="expenseMode === 'detailed' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">
                    Detailed
                  </button>
                </div>
              </div>

              <!-- AMOUNT MODE -->
              <div v-if="expenseMode === 'amount'">
                <label for="total-expenses" class="block text-xs font-semibold text-gray-700 mb-1">
                  Total Annual Operating Expenses
                  <span class="ml-1 text-xs font-normal text-gray-400">(taxes, insurance, maintenance, mgmt)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="total-expenses" v-model="form.totalExpenses" type="number" min="0" step="100"
                    placeholder="Enter total yearly operating expenses"
                    aria-label="Total annual operating expenses in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">
                  Leave blank to use default 40% of EGI.
                  <span v-if="effectiveGrossIncome > 0" class="text-gray-500">
                    40% = {{ formatCurrency(effectiveGrossIncome * 0.4) }}/yr.
                  </span>
                </p>
              </div>

              <!-- PERCENTAGE MODE -->
              <div v-if="expenseMode === 'percentage'">
                <label for="expense-pct" class="block text-xs font-semibold text-gray-700 mb-1">
                  Operating Expense Ratio (% of EGI)
                  <span class="ml-1 text-xs font-normal text-gray-400">(typical: 35–50%)</span>
                </label>
                <div class="relative">
                  <input id="expense-pct" v-model="form.expensePct" type="number" min="0" max="100" step="1"
                    placeholder="Enter expense percentage of EGI"
                    aria-label="Operating expense ratio as percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">
                  Leave blank to use default 40%.
                  <span v-if="effectiveGrossIncome > 0 && form.expensePct" class="text-gray-500">
                    = {{ formatCurrency(effectiveGrossIncome * (Number(form.expensePct) / 100)) }}/yr.
                  </span>
                </p>
              </div>

              <!-- DETAILED MODE -->
              <div v-if="expenseMode === 'detailed'" class="space-y-3">
                <p class="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 -mb-1">
                  All fields are <strong>annual</strong> figures.
                </p>
                <div v-for="exp in expenseFields" :key="exp.key">
                  <label :for="`exp-${exp.key}`" class="block text-xs font-semibold text-gray-600 mb-1">{{ exp.label }}</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" aria-hidden="true">$</span>
                    <input :id="`exp-${exp.key}`" v-model="form.expenses[exp.key]" type="number" min="0" step="100"
                      :placeholder="exp.placeholder"
                      :aria-label="`${exp.label} annual amount in dollars`"
                      class="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition" />
                  </div>
                  <p v-if="exp.hint" class="text-xs text-gray-400 mt-0.5">{{ exp.hint }}</p>
                </div>
                <div class="pt-2 border-t border-gray-100">
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-500 font-medium">Total Expenses</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(detailedTotalExpenses) }}</span>
                  </div>
                </div>
              </div>

              <!-- Expense ratio helper -->
              <div class="p-2.5 rounded-xl text-xs text-gray-500 bg-gray-50 border border-gray-100">
                Typical multifamily expense ratios: 35%&ndash;50% of effective gross income.
              </div>

            </div>
          </div>

          <!-- Property Value — shown in analyze mode -->
          <div v-if="calcMode === 'analyze'"
            class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Purchase Price</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="purchase-price" class="block text-xs font-semibold text-gray-700 mb-1">
                  Purchase Price / Property Value
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="purchase-price" v-model="form.purchasePrice" type="number" min="0" step="1000"
                    placeholder="Enter property purchase price"
                    aria-label="Purchase price in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
            </div>
          </div>

          <!-- Target NOI — find-rent mode -->
          <div v-if="calcMode === 'find-rent'"
            class="border-b border-gray-100">
            <div class="calc-section-header">
              <div>
                <h2 class="calc-section-title">Target NOI & Parameters</h2>
                <p class="text-xs mt-0.5 ml-3 text-blue-600">What NOI do you need this property to generate?</p>
              </div>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="target-noi" class="block text-xs font-semibold text-gray-700 mb-1">Target Annual NOI</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="target-noi" v-model="form.targetNOI" type="number" min="0" step="1000"
                    placeholder="Enter target annual NOI"
                    aria-label="Target annual NOI in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/20 outline-none text-gray-900 font-bold text-base transition bg-white" />
                </div>
              </div>
              <div>
                <label for="rev-units" class="block text-xs font-semibold text-gray-700 mb-1">Number of Units</label>
                <input id="rev-units" v-model="form.numUnits" type="number" min="1" step="1"
                  placeholder="Enter number of units"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
              </div>
              <div>
                <label for="rev-vacancy" class="block text-xs font-semibold text-gray-700 mb-1">Vacancy Rate (%)</label>
                <div class="relative">
                  <input id="rev-vacancy" v-model="form.vacancyRate" type="number" min="0" max="100" step="0.5"
                    placeholder="Enter vacancy rate"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
              </div>
              <div>
                <label for="rev-expense-pct" class="block text-xs font-semibold text-gray-700 mb-1">
                  Expense Ratio (% of EGI)
                  <span class="ml-1 text-xs font-normal text-gray-400">(default: 40%)</span>
                </label>
                <div class="relative">
                  <input id="rev-expense-pct" v-model="form.reverseExpensePct" type="number" min="0" max="100" step="1"
                    placeholder="Enter expense percentage (default 40%)"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Target Cap Rate — find-price mode -->
          <div v-if="calcMode === 'find-price'"
            class="border-b border-gray-100">
            <div class="calc-section-header">
              <div>
                <h2 class="calc-section-title">Target Cap Rate</h2>
                <p class="text-xs mt-0.5 ml-3 text-emerald-600">What yield do you require on this property?</p>
              </div>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="target-cap" class="block text-xs font-semibold text-gray-700 mb-1">
                  Target Cap Rate (%)
                </label>
                <div class="relative">
                  <input id="target-cap" v-model="form.targetCapRate" type="number" min="0.1" max="30" step="0.1"
                    placeholder="Enter target cap rate"
                    aria-label="Target cap rate as percentage"
                    class="w-full pr-10 pl-4 py-2 rounded-xl border border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20 outline-none text-gray-900 font-bold text-base transition bg-white" />
                  <span class="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-gray-400" aria-hidden="true">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  Typical multifamily: 4&ndash;5% coastal &middot; 5&ndash;7% secondary markets &middot; 7&ndash;9% Midwest/Southeast
                </p>
              </div>
            </div>
          </div>

          <!-- ── FINANCING (optional) — analyze mode ── -->
          <button v-if="calcMode === 'analyze'" @click="financingOpen = !financingOpen"
            class="w-full flex items-center justify-between px-5 py-3 text-sm transition border-b border-gray-100"
            :class="financingOpen
              ? 'bg-amber-50 text-amber-800 font-semibold'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800 font-medium'">
            <div class="flex items-center gap-2">
              <span>Financing — Add Debt Service</span>
              <span v-if="financingOpen" class="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">ON</span>
            </div>
            <svg class="w-4 h-4 transition-transform flex-shrink-0" :class="financingOpen ? 'rotate-180' : ''"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <div v-if="calcMode === 'analyze' && financingOpen" class="border-b border-gray-100">
            <div class="calc-section-header">
              <div>
                <h2 class="calc-section-title">Financing & Cash Invested</h2>
                <p class="text-xs text-amber-700 mt-0.5 ml-3">See levered returns — Cash Flow, CoC, DSCR</p>
              </div>
            </div>
            <div class="px-4 py-3 space-y-2.5">

              <!-- Down Payment % -->
              <div>
                <label for="dp-pct" class="block text-xs font-semibold text-gray-700 mb-1">Down Payment</label>
                <div class="relative">
                  <input id="dp-pct" v-model="form.downPaymentPct" type="number" min="0" max="100" step="1"
                    placeholder="Enter down payment percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition"/>
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                </div>
                <p v-if="hasResult && Number(form.purchasePrice) > 0" class="text-xs text-gray-400 mt-1">
                  = {{ formatCurrency(Number(form.purchasePrice) * (Number(form.downPaymentPct) || 25) / 100) }} down &middot; Loan: {{ formatCurrency(loanAmount) }}
                </p>
              </div>

              <!-- Interest Rate -->
              <div>
                <label for="interest-rate" class="block text-xs font-semibold text-gray-700 mb-1">Interest Rate</label>
                <div class="relative">
                  <input id="interest-rate" v-model="form.interestRate" type="number" min="0" max="30" step="0.125"
                    placeholder="Enter annual loan interest rate"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition"/>
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                </div>
              </div>

              <!-- Loan Term -->
              <div>
                <label for="loan-term" class="block text-xs font-semibold text-gray-700 mb-1">Loan Term</label>
                <select id="loan-term" v-model="form.loanTermYears"
                  class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition bg-white">
                  <option :value="15">15 years</option>
                  <option :value="20">20 years</option>
                  <option :value="25">25 years</option>
                  <option :value="30">30 years</option>
                </select>
              </div>

              <div class="pt-2 border-t border-gray-100 space-y-3">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Cash Invested (optional)</p>

                <!-- Closing Costs -->
                <div>
                  <label for="closing-costs" class="block text-xs font-semibold text-gray-600 mb-1">Closing Costs</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input id="closing-costs" v-model="form.closingCosts" type="number" min="0" step="500"
                      placeholder="Enter closing costs"
                      class="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition"/>
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5">Typical: 2&ndash;5% of purchase price</p>
                </div>

                <!-- Replacement Reserves -->
                <div>
                  <label for="reserves" class="block text-xs font-semibold text-gray-600 mb-1">
                    Annual Replacement Reserves
                    <span class="ml-1 text-xs font-normal text-gray-400">(not included in NOI)</span>
                  </label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input id="reserves" v-model="form.reserves" type="number" min="0" step="100"
                      placeholder="Enter annual replacement reserves"
                      class="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition"/>
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5">$200&ndash;$400/unit/year for older properties. Shown separately from NOI.</p>
                </div>
              </div>

            </div>
          </div>

          <!-- Reset Button -->
          <div class="px-4 py-3">
            <button @click="resetForm"
              class="w-full py-2 rounded-lg border border-gray-200 text-gray-400 font-medium text-xs hover:border-gray-300 hover:text-gray-600 transition">
              Reset All Fields
            </button>
          </div>

        </div>

        <!-- ── RESULTS (right column) ── -->
        <div class="min-w-0 lg:relative lg:overflow-hidden">
        <div class="bg-gray-50 scrollbar-thin lg:absolute lg:inset-0 lg:overflow-y-auto">
        <div class="space-y-4 p-4 lg:p-5">

          <!-- Main Result -->
          <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">

            <!-- MODE: Analyze (standard) -->
            <div v-if="calcMode === 'analyze'" class="px-5 py-5 border-b border-gray-100 bg-white">
              <p class="text-xs font-semibold uppercase tracking-wide mb-2 text-gray-400">
                Net Operating Income (NOI)
              </p>
              <div class="font-extrabold leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full transition-all mb-3"
                :class="[hasResult ? 'text-5xl' : 'text-6xl text-gray-200']"
                :style="hasResult ? `color: ${badge.bg1}` : ''">
                {{ hasResult ? formatCurrency(noiCalc) : '—' }}
              </div>
              <div v-if="hasResult"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-xs text-white"
                :style="`background: ${badge.bg1}`">
                <span class="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                {{ badge.label }}
              </div>
              <div v-else class="text-sm text-gray-300">Enter values to see result</div>
            </div>

            <!-- MODE: Find Required Rent -->
            <div v-else-if="calcMode === 'find-rent'" class="px-5 py-5 border-b border-gray-100 bg-white">
              <p class="text-xs font-semibold uppercase tracking-wide mb-1 text-gray-400">
                Required Monthly Rent Per Unit
              </p>
              <p class="text-xs mb-2 text-gray-400">
                {{ requiredRentResult ? `to generate ${formatCurrency(Number(form.targetNOI))} NOI/yr` : 'Target NOI ÷ Income Factor ÷ Units ÷ 12' }}
              </p>
              <div class="font-extrabold mb-3 leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full"
                :class="requiredRentResult ? 'text-5xl' : 'text-6xl text-gray-200'"
                :style="requiredRentResult ? 'color:#1e40af;' : ''">
                {{ requiredRentResult ? formatCurrency(requiredRentResult) + '/mo' : '—' }}
              </div>
              <div v-if="requiredRentResult"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold text-xs bg-blue-100 text-blue-700">
                Per unit to hit {{ formatCurrency(Number(form.targetNOI)) }} NOI
              </div>
              <div v-else class="text-sm text-gray-300">
                Enter target NOI, units, and vacancy
              </div>
            </div>

            <!-- MODE: Find Max Price -->
            <div v-else class="px-5 py-5 border-b border-gray-100 bg-white">
              <p class="text-xs font-semibold uppercase tracking-wide mb-1 text-gray-400">
                Maximum Purchase Price
              </p>
              <p class="text-xs mb-2 text-gray-400">
                {{ maxPriceResult ? `at ${form.targetCapRate}% cap rate` : 'NOI ÷ Target Cap Rate' }}
              </p>
              <div class="font-extrabold mb-3 leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full"
                :class="maxPriceResult ? 'text-5xl' : 'text-6xl text-gray-200'"
                :style="maxPriceResult ? 'color:#065f46;' : ''">
                {{ maxPriceResult ? formatCurrency(maxPriceResult) : '—' }}
              </div>
              <div v-if="maxPriceResult && noiCalc > 0"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold text-xs bg-emerald-100 text-emerald-700">
                Based on NOI of {{ formatCurrency(noiCalc) }}
              </div>
              <div v-else class="text-sm text-gray-300">
                Enter income, expenses, and target cap rate
              </div>
            </div>

            <!-- Warning States -->
            <div v-if="warnings.length > 0" class="px-5 pt-4 pb-1 space-y-2" role="region" aria-label="Input warnings">
              <div v-for="(w, i) in warnings" :key="i"
                class="flex items-start gap-2.5 p-3 rounded-xl text-sm"
                :class="w.type === 'error' ? 'bg-red-50 border border-red-200 text-red-800' : 'bg-amber-50 border border-amber-200 text-amber-800'"
                role="alert">
                <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path v-if="w.type === 'error'" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                  <path v-else fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
                <span class="font-medium leading-snug">{{ w.msg }}</span>
              </div>
            </div>

            <!-- ── REVERSE MODE: Find Rent — breakdown ── -->
            <div v-if="calcMode === 'find-rent' && requiredRentResult" class="p-6 space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">How we got there</h3>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Target NOI</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(Number(form.targetNOI)) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Expense Ratio</span>
                <span class="font-semibold text-gray-900">{{ Number(form.reverseExpensePct) || 40 }}%</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Vacancy Rate</span>
                <span class="font-semibold text-gray-900">{{ vacancyRateClamped }}%</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Units</span>
                <span class="font-semibold text-gray-900">{{ form.numUnits }}</span>
              </div>
              <div class="flex justify-between items-center py-3">
                <span class="text-sm font-extrabold text-gray-800">Required Rent / Unit / Month</span>
                <span class="font-extrabold text-blue-800 text-base">{{ formatCurrency(requiredRentResult) }}</span>
              </div>
              <div class="p-3 rounded-xl bg-blue-50 border border-blue-100">
                <p class="text-xs text-center text-blue-700 font-medium">
                  Required Annual Gross Rent: {{ formatCurrency(requiredRentResult * Number(form.numUnits) * 12) }}
                </p>
                <p class="text-xs text-center text-gray-400 mt-1 italic">Verify this rent level against local market comparables.</p>
              </div>
            </div>

            <!-- ── REVERSE MODE: Find Max Price — breakdown ── -->
            <div v-if="calcMode === 'find-price' && maxPriceResult" class="p-6 space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">How we got there</h3>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Gross Rent</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(annualGrossRent) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Other Income</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(annualOtherIncome) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Vacancy Loss ({{ vacancyRateClamped }}%)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(vacancyLoss) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Operating Expenses</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(totalExpensesCalc) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm font-bold text-gray-700">NOI</span>
                <span class="font-bold text-gray-900">{{ formatCurrency(noiCalc) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Target Cap Rate</span>
                <span class="font-semibold text-emerald-700">{{ form.targetCapRate }}%</span>
              </div>
              <div class="flex justify-between items-center py-3">
                <span class="text-sm font-extrabold text-gray-800">Max Price = NOI &div; Cap Rate</span>
                <span class="font-extrabold text-emerald-800 text-base">{{ formatCurrency(maxPriceResult) }}</span>
              </div>
              <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                <p class="text-xs text-center text-emerald-700 font-medium">
                  {{ formatCurrency(noiCalc) }} &div; {{ form.targetCapRate }}% = <strong>{{ formatCurrency(maxPriceResult) }}</strong>
                </p>
                <p class="text-xs text-center text-gray-400 mt-1 italic">Simplified estimate &mdash; not a formal appraisal.</p>
              </div>
              <!-- Price per unit at max price -->
              <div class="mt-3 pt-3 border-t border-gray-100">
                <div class="flex justify-between items-center text-sm">
                  <span class="text-gray-500">Price Per Unit at Max Price</span>
                  <span class="font-semibold text-gray-700">
                    {{ Number(form.numUnits) > 0 ? formatCurrency(maxPriceResult / Number(form.numUnits)) : '—' }}
                  </span>
                </div>
              </div>
              <!-- Sensitivity: implied value at nearby cap rates -->
              <div class="mt-4 pt-3 border-t border-gray-100">
                <h4 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Max Price at Nearby Cap Rates</h4>
                <div class="space-y-1">
                  <div v-for="delta in [-1.5, -1, -0.5, 0, 0.5, 1, 1.5]" :key="delta"
                    class="flex justify-between items-center text-xs px-2 py-1.5 rounded-lg"
                    :class="delta === 0 ? 'font-bold bg-emerald-50 text-emerald-800' : 'text-gray-600'">
                    <span>{{ (Number(form.targetCapRate) + delta).toFixed(1) }}% cap rate</span>
                    <span>{{ formatCurrency((noiCalc / (Number(form.targetCapRate) + delta)) * 100) }}</span>
                  </div>
                </div>
                <p class="text-xs text-gray-400 mt-2 italic">NOI held constant. Shows how price changes with market cap rate.</p>
              </div>
            </div>

            <!-- Breakdown — analyze mode only -->
            <div v-if="calcMode === 'analyze' && hasResult" class="p-6 space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Breakdown</h3>

              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Annual Gross Rent</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(annualGrossRent) }}</span>
              </div>
              <div v-if="annualOtherIncome > 0" class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Other Income</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(annualOtherIncome) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Vacancy Loss ({{ vacancyRateClamped }}%)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(vacancyLoss) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Effective Gross Income</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(effectiveGrossIncome) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Operating Expenses</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(totalExpensesCalc) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm font-bold text-gray-700">Net Operating Income (NOI)</span>
                <span class="font-bold" :class="noiCalc >= 0 ? 'text-green-600' : 'text-red-600'">{{ formatCurrency(noiCalc) }}</span>
              </div>
              <div v-if="Number(form.purchasePrice) > 0" class="flex justify-between items-center py-2">
                <span class="text-sm text-gray-500">Purchase Price</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(Number(form.purchasePrice)) }}</span>
              </div>

              <!-- Formula -->
              <div class="mt-4 p-3 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden">
                <p class="text-xs text-center text-gray-400 font-medium">
                  NOI = EGI &minus; Operating Expenses
                </p>
                <p class="text-xs text-center text-gray-500 font-semibold mt-1 break-all">
                  {{ formatCurrency(effectiveGrossIncome) }} &minus; {{ formatCurrency(totalExpensesCalc) }} = <span style="color: #1e3a5f;">{{ formatCurrency(noiCalc) }}</span>
                </p>
                <p class="text-xs text-center text-gray-400 mt-2 italic">NOI excludes debt service, CapEx, and reserves.</p>
              </div>

              <!-- Key Metrics Grid -->
              <div v-if="hasResult" class="mt-4 grid grid-cols-3 gap-2">
                <div class="rounded-xl p-3 text-center border"
                  :class="capRateCalc >= 7 ? 'bg-green-50 border-green-200' : capRateCalc >= 5 ? 'bg-blue-50 border-blue-200' : capRateCalc >= 3 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="capRateCalc >= 7 ? 'text-green-500' : capRateCalc >= 5 ? 'text-blue-500' : capRateCalc >= 3 ? 'text-amber-600' : 'text-red-500'">
                    Cap Rate
                  </p>
                  <p class="text-base font-extrabold"
                    :class="capRateCalc >= 7 ? 'text-green-700' : capRateCalc >= 5 ? 'text-blue-700' : capRateCalc >= 3 ? 'text-amber-700' : 'text-red-700'">
                    {{ capRateCalc > 0 ? capRateCalc.toFixed(2) + '%' : '—' }}
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">NOI / Price</p>
                </div>
                <div class="rounded-xl p-3 text-center border"
                  :class="expenseRatioCalc > 55 ? 'bg-red-50 border-red-200' : expenseRatioCalc > 45 ? 'bg-amber-50 border-amber-200' : 'bg-green-50 border-green-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="expenseRatioCalc > 55 ? 'text-red-500' : expenseRatioCalc > 45 ? 'text-amber-600' : 'text-green-600'">
                    Exp. Ratio
                  </p>
                  <p class="text-base font-extrabold"
                    :class="expenseRatioCalc > 55 ? 'text-red-700' : expenseRatioCalc > 45 ? 'text-amber-700' : 'text-green-700'">
                    {{ expenseRatioCalc.toFixed(0) }}%
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">of EGI</p>
                </div>
                <div class="rounded-xl p-3 text-center border"
                  :class="breakEvenOccupancy > 90 ? 'bg-red-50 border-red-200' : breakEvenOccupancy > 80 ? 'bg-amber-50 border-amber-200' : 'bg-green-50 border-green-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="breakEvenOccupancy > 90 ? 'text-red-500' : breakEvenOccupancy > 80 ? 'text-amber-600' : 'text-green-600'">
                    Break-even
                  </p>
                  <p class="text-base font-extrabold"
                    :class="breakEvenOccupancy > 90 ? 'text-red-700' : breakEvenOccupancy > 80 ? 'text-amber-700' : 'text-green-700'">
                    {{ breakEvenOccupancy !== null ? breakEvenOccupancy.toFixed(0) + '%' : '—' }}
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">occupancy</p>
                </div>
              </div>

              <!-- Price Per Unit + Rent Per Unit -->
              <div v-if="hasResult && Number(form.numUnits) > 0" class="mt-4 pt-3 border-t border-gray-100 space-y-1.5">
                <div class="flex justify-between items-center text-sm">
                  <span class="text-gray-500">Price Per Unit</span>
                  <span class="font-bold text-gray-700">{{ Number(form.purchasePrice) > 0 ? formatCurrency(Number(form.purchasePrice) / Number(form.numUnits)) : '—' }}</span>
                </div>
                <div class="flex justify-between items-center text-sm">
                  <span class="text-gray-500">Rent Per Unit (monthly)</span>
                  <span class="font-bold text-gray-700">{{ formatCurrency(Number(form.avgRent)) }}</span>
                </div>
              </div>

              <!-- NOI Bar Visualization -->
              <div v-if="noiBreakdown" class="mt-4">
                <h4 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Income Breakdown</h4>
                <div class="flex h-5 rounded-lg overflow-hidden w-full" style="background: #f1f5f9;">
                  <div title="Vacancy Loss"
                    class="transition-all duration-300 flex-shrink-0"
                    :style="`width: ${noiBreakdown.vacancyPct}%; background: #fca5a5;`"></div>
                  <div title="Operating Expenses"
                    class="transition-all duration-300 flex-shrink-0"
                    :style="`width: ${noiBreakdown.expensePct}%; background: #fbbf24;`"></div>
                  <div v-if="!noiBreakdown.noiNegative" title="Net Operating Income"
                    class="transition-all duration-300 flex-shrink-0"
                    :style="`width: ${noiBreakdown.noiPct}%; background: #34d399;`"></div>
                </div>
                <div v-if="noiBreakdown.noiNegative"
                  class="mt-1.5 flex items-center gap-2 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 px-2.5 py-1.5 rounded-lg">
                  <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                  Expenses exceed income by {{ noiBreakdown.overflowPct }}% &mdash; NOI is negative
                </div>
                <div class="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  <span class="flex items-center gap-1.5 text-xs text-gray-500">
                    <span class="inline-block w-2.5 h-2.5 rounded-sm bg-red-300 flex-shrink-0"></span>
                    Vacancy ({{ vacancyRateClamped }}%)
                  </span>
                  <span class="flex items-center gap-1.5 text-xs text-gray-500">
                    <span class="inline-block w-2.5 h-2.5 rounded-sm bg-amber-400 flex-shrink-0"></span>
                    Expenses
                  </span>
                  <span v-if="!noiBreakdown.noiNegative" class="flex items-center gap-1.5 text-xs text-gray-500">
                    <span class="inline-block w-2.5 h-2.5 rounded-sm bg-emerald-400 flex-shrink-0"></span>
                    NOI
                  </span>
                </div>
              </div>

            </div>

            <!-- Deal Context Panel — analyze mode only -->
            <div v-if="calcMode === 'analyze' && hasResult"
              class="px-5 py-4 border-t border-gray-100 rounded-b-xl"
              :style="`background: ${badge.bg1}12;`">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-bold px-2.5 py-0.5 rounded-full text-white"
                  :style="`background: ${badge.bg1}`">
                  {{ badge.label }}
                </span>
                <span class="text-xs font-semibold text-gray-400 uppercase tracking-wide">Deal context</span>
              </div>
              <p class="text-sm leading-relaxed font-medium text-gray-700">{{ insightText }}</p>
            </div>

            <!-- Sensitivity — analyze mode -->
            <div v-if="calcMode === 'analyze' && sensitivityRows" class="border-t border-gray-100">
              <div class="px-4 pt-3 pb-1">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                    NOI at &plusmn;30% rent change
                  </span>
                </div>
                <div class="space-y-0.5 mb-1">
                  <div v-for="row in sensitivityRows.slice(0, 3)" :key="row.label"
                    class="flex justify-between items-center text-xs px-2 py-1.5 rounded-lg"
                    :class="row.isCurrent ? 'font-bold' : 'text-gray-600'"
                    :style="row.isCurrent ? 'background: rgba(245,158,11,0.07);' : ''">
                    <span :style="row.isCurrent ? 'color: #92400e;' : ''">{{ row.label }}</span>
                    <span>{{ formatCurrency(row.noi) }}</span>
                    <span :class="row.capRate >= 6 ? 'text-emerald-600' : row.capRate >= 4 ? 'text-amber-600' : 'text-red-600'" class="font-semibold">
                      {{ row.capRate.toFixed(2) }}%
                    </span>
                  </div>
                </div>
                <button v-if="!showSensitivity" @click="showSensitivity = true"
                  class="text-xs text-gray-400 hover:text-gray-600 transition px-2 py-1">
                  Show all ranges &darr;
                </button>
              </div>

              <div v-if="showSensitivity">
                <div class="px-4 pb-2 pt-0">
                  <div class="space-y-0.5">
                    <div v-for="row in sensitivityRows.slice(3)" :key="row.label"
                      class="flex justify-between items-center text-xs px-2 py-1.5 rounded-lg"
                      :class="row.isCurrent ? 'font-bold' : 'text-gray-600'"
                      :style="row.isCurrent ? 'background: rgba(245,158,11,0.07);' : ''">
                      <span :style="row.isCurrent ? 'color: #92400e;' : ''">{{ row.label }}</span>
                      <span>{{ formatCurrency(row.noi) }}</span>
                      <span :class="row.capRate >= 6 ? 'text-emerald-600' : row.capRate >= 4 ? 'text-amber-600' : 'text-red-600'" class="font-semibold">
                        {{ row.capRate.toFixed(2) }}%
                      </span>
                    </div>
                  </div>
                  <p class="text-xs text-gray-400 mt-2 italic">Rent sensitivity &mdash; vacancy and expenses held constant.</p>
                </div>
              </div>
            </div>

            <!-- Share + PDF Export + Save Scenario -->
            <div v-if="hasResult || requiredRentResult || maxPriceResult" class="p-4 border-t border-gray-100 space-y-2">
              <!-- 1. PRIMARY: Save -->
              <button @click="openSaveScenario"
                class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
                style="background: #f59e0b; color: #1e3a5f;">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>
                Save Scenario
              </button>
              <!-- 2. SECONDARY: Share + PDF -->
              <div class="grid grid-cols-2 gap-2">
                <button @click="shareResult"
                  class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border"
                  :class="shareSuccess
                    ? 'border-green-400 text-green-700 bg-green-50'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'">
                  <svg v-if="!shareSuccess" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                  </svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  {{ shareSuccess ? 'Copied!' : 'Share' }}
                </button>
                <button @click="exportPDF"
                  class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  Export PDF
                </button>
              </div>
              <!-- 3. TERTIARY: Email -->
              <button @click="showEmailModal = true"
                class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs text-gray-500 hover:text-gray-700 border border-dashed border-gray-200 hover:border-gray-300 transition">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Email me this analysis
              </button>
            </div>

          </div>

          <!-- ── LEVERED RETURNS CARD — analyze mode only ── -->
          <div v-if="calcMode === 'analyze' && financingOpen && hasResult && annualDebtService > 0" class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div class="px-5 py-3 border-b border-gray-100 flex items-center">
              <h3 class="calc-section-title">Levered Returns</h3>
            </div>
            <div class="p-5 space-y-3">

              <!-- Loan details -->
              <div>
                <h4 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Financing</h4>
                <div class="space-y-1.5">
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-500">Loan Amount</span>
                    <span class="font-semibold text-gray-900">{{ formatCurrency(loanAmount) }}</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-500">Monthly Payment</span>
                    <span class="font-semibold text-gray-900">{{ formatCurrency(monthlyPayment) }}/mo</span>
                  </div>
                  <div class="flex justify-between text-sm border-t border-gray-50 pt-1.5">
                    <span class="text-gray-500">Annual Debt Service</span>
                    <span class="font-semibold text-red-500">-{{ formatCurrency(annualDebtService) }}</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-500">Cash Invested</span>
                    <span class="font-semibold text-gray-900">{{ formatCurrency(cashInvested) }}</span>
                  </div>
                </div>
              </div>

              <!-- Key investor metrics -->
              <div class="pt-3 border-t border-gray-100">
                <h4 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Returns</h4>
                <div class="space-y-2">

                  <!-- Cash Flow After Debt -->
                  <div class="flex justify-between items-center py-2 border-b border-gray-50">
                    <span class="text-sm font-bold text-gray-700">Cash Flow / Year</span>
                    <span class="font-extrabold text-base" :class="cashFlowAfterDebt >= 0 ? 'text-green-600' : 'text-red-600'">
                      {{ cashFlowAfterDebt >= 0 ? '' : '-' }}{{ formatCurrency(Math.abs(cashFlowAfterDebt)) }}
                    </span>
                  </div>
                  <div class="flex justify-between items-center text-sm text-gray-400">
                    <span>&asymp; per month</span>
                    <span :class="cashFlowAfterDebt >= 0 ? 'text-green-500' : 'text-red-500'" class="font-medium">
                      {{ cashFlowAfterDebt >= 0 ? '' : '-' }}{{ formatCurrency(Math.abs(cashFlowAfterDebt) / 12) }}/mo
                    </span>
                  </div>

                  <!-- Reserve-adjusted cash flow -->
                  <div v-if="Number(form.reserves) > 0" class="flex justify-between items-center py-2 border-t border-gray-50">
                    <div>
                      <span class="text-sm font-bold text-gray-700">Reserve-Adjusted Cash Flow</span>
                      <p class="text-xs text-gray-400">Cash Flow &minus; Reserves</p>
                    </div>
                    <span class="font-extrabold text-base" :class="reserveAdjustedCashFlow >= 0 ? 'text-green-600' : 'text-red-600'">
                      {{ reserveAdjustedCashFlow >= 0 ? '' : '-' }}{{ formatCurrency(Math.abs(reserveAdjustedCashFlow)) }}
                    </span>
                  </div>

                  <!-- CoC -->
                  <div v-if="cocReturn !== null" class="flex justify-between items-center py-2 border-t border-gray-50 mt-1">
                    <div>
                      <span class="text-sm font-bold text-gray-700">Cash-on-Cash Return</span>
                      <p class="text-xs text-gray-400">Cash Flow &div; Cash Invested</p>
                    </div>
                    <div class="text-right">
                      <span class="font-extrabold text-lg" :class="cocReturn >= 8 ? 'text-green-600' : cocReturn >= 4 ? 'text-amber-600' : 'text-red-600'">
                        {{ cocReturn.toFixed(2) }}%
                      </span>
                      <p class="text-xs mt-0.5 font-semibold" :class="cocReturn >= 8 ? 'text-green-500' : cocReturn >= 4 ? 'text-amber-500' : 'text-red-500'">
                        {{ cocReturn >= 8 ? 'Strong' : cocReturn >= 4 ? 'Moderate' : 'Weak' }}
                      </p>
                    </div>
                  </div>

                  <!-- DSCR -->
                  <div v-if="dscrCalc !== null" class="flex justify-between items-center py-2 border-t border-gray-50">
                    <div>
                      <span class="text-sm font-bold text-gray-700">DSCR</span>
                      <p class="text-xs text-gray-400">NOI &div; Debt Service</p>
                    </div>
                    <div class="text-right">
                      <span class="font-extrabold text-lg" :class="dscrCalc >= 1.25 ? 'text-green-600' : dscrCalc >= 1.0 ? 'text-amber-600' : 'text-red-600'">
                        {{ dscrCalc.toFixed(2) }}x
                      </span>
                      <p class="text-xs mt-0.5 font-semibold" :class="dscrCalc >= 1.25 ? 'text-green-500' : dscrCalc >= 1.0 ? 'text-amber-500' : 'text-red-500'">
                        {{ dscrCalc >= 1.35 ? 'Strong coverage' : dscrCalc >= 1.20 ? 'Workable range' : dscrCalc >= 1.0 ? 'Thin coverage' : 'Does not cover debt' }}
                      </p>
                    </div>
                  </div>

                </div>

                <!-- Interpretation -->
                <div class="mt-3 p-3 rounded-xl text-xs leading-snug"
                  :class="cashFlowAfterDebt >= 0 && (dscrCalc === null || dscrCalc >= 1.25) ? 'bg-green-50 border border-green-200 text-green-800' : cashFlowAfterDebt < 0 ? 'bg-red-50 border border-red-200 text-red-800' : 'bg-amber-50 border border-amber-200 text-amber-800'">
                  <span v-if="cashFlowAfterDebt >= 0 && dscrCalc !== null && dscrCalc >= 1.25">
                    Property generates positive cash flow and covers debt service by {{ dscrCalc.toFixed(2) }}x. Suitable for conventional multifamily financing in most markets.
                  </span>
                  <span v-else-if="cashFlowAfterDebt < 0">
                    Negative cash flow at these financing terms &mdash; the property does not service its own debt. Consider higher down payment, different financing, or renegotiating the purchase price.
                  </span>
                  <span v-else>
                    Marginally cash-flow positive. DSCR below 1.25 may limit conventional financing options. Verify income and expense assumptions carefully.
                  </span>
                </div>
              </div>

            </div>
          </div>

          <!-- Unlevered cash flow card (no financing) -->
          <div v-if="calcMode === 'analyze' && !financingOpen && hasResult" class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div class="px-5 py-3 border-b border-gray-100">
              <h3 class="calc-section-title">Unlevered Cash Flow</h3>
            </div>
            <div class="p-5 space-y-2">
              <div class="flex justify-between items-center py-2">
                <span class="text-sm font-bold text-gray-700">Annual Cash Flow (= NOI)</span>
                <span class="font-extrabold text-base" :class="noiCalc >= 0 ? 'text-green-600' : 'text-red-600'">
                  {{ formatCurrency(noiCalc) }}
                </span>
              </div>
              <div class="flex justify-between items-center text-sm text-gray-400">
                <span>&asymp; per month</span>
                <span :class="noiCalc >= 0 ? 'text-green-500' : 'text-red-500'" class="font-medium">
                  {{ formatCurrency(noiCalc / 12) }}/mo
                </span>
              </div>
              <p class="text-xs text-gray-400 mt-2 italic">No financing entered. Add debt service to see levered returns and DSCR.</p>
            </div>
          </div>

        </div>
        </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           SCENARIOS
      ═══════════════════════════════════════════════ -->
      <div v-if="calcMode === 'analyze' && hasResult && scenarios" class="px-5 lg:px-6 pb-6 pt-4 border-t border-gray-100">
        <button @click="scenariosOpen = !scenariosOpen"
          class="w-full flex items-center justify-between px-6 py-4 rounded-2xl border-2 font-semibold text-sm transition mb-4"
          :class="scenariosOpen
            ? 'border-blue-300 text-blue-800 bg-blue-50'
            : 'border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50/30'">
          <div class="flex items-center gap-3">
            <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              :style="scenariosOpen ? 'background:#2563eb;' : 'background:#f3f4f6;'">
              <svg class="w-4 h-4" :class="scenariosOpen ? 'text-white' : 'text-gray-500'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div class="text-left">
              <span class="block">Scenario Analysis &mdash; Conservative / Base / Optimistic</span>
              <span class="text-xs font-normal" :class="scenariosOpen ? 'text-blue-600' : 'text-gray-400'">See how this deal performs under different assumptions</span>
            </div>
          </div>
          <svg class="w-4 h-4 transition-transform flex-shrink-0" :class="scenariosOpen ? 'rotate-180' : ''"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>

        <div v-if="scenariosOpen" class="grid md:grid-cols-3 gap-4">
          <div v-for="sc in scenarios" :key="sc.key"
            class="bg-white rounded-2xl border shadow-sm overflow-hidden"
            :style="`border-color: ${sc.color}40;`">
            <div class="px-5 py-3 border-b flex items-center gap-2.5"
              :style="`background: ${sc.bgColor}; border-color: ${sc.color}30;`">
              <div class="w-2.5 h-2.5 rounded-full flex-shrink-0" :style="`background: ${sc.color};`"></div>
              <div>
                <p class="font-extrabold text-sm" :style="`color: ${sc.color};`">{{ sc.label }}</p>
                <p class="text-xs text-gray-400">{{ sc.desc }}</p>
              </div>
            </div>
            <div class="p-5 space-y-3">
              <div class="flex justify-between items-center text-sm">
                <span class="text-gray-500">NOI</span>
                <span class="font-bold" :class="sc.noi >= 0 ? 'text-gray-900' : 'text-red-600'">{{ formatCurrency(sc.noi) }}</span>
              </div>
              <div class="flex justify-between items-center text-sm border-t border-gray-50 pt-2">
                <span class="text-gray-500">Cap Rate</span>
                <span class="font-extrabold text-base" :style="`color: ${sc.color};`">{{ sc.capRate.toFixed(2) }}%</span>
              </div>
              <div v-if="sc.cashFlow !== null" class="flex justify-between items-center text-sm border-t border-gray-50 pt-2">
                <span class="text-gray-500">Cash Flow/yr</span>
                <span class="font-bold" :class="sc.cashFlow >= 0 ? 'text-green-600' : 'text-red-600'">
                  {{ sc.cashFlow >= 0 ? '' : '-' }}{{ formatCurrency(Math.abs(sc.cashFlow)) }}
                </span>
              </div>
              <div v-if="sc.dscr !== null" class="flex justify-between items-center text-sm border-t border-gray-50 pt-2">
                <span class="text-gray-500">DSCR</span>
                <span class="font-bold" :class="sc.dscr >= 1.25 ? 'text-green-600' : sc.dscr >= 1.0 ? 'text-amber-600' : 'text-red-600'">
                  {{ sc.dscr.toFixed(2) }}x
                </span>
              </div>
              <div class="flex justify-between items-center text-xs text-gray-400 border-t border-gray-50 pt-2">
                <span>Vacancy assumed</span>
                <span>{{ sc.vacancy.toFixed(1) }}%</span>
              </div>
            </div>
          </div>
        </div>

        <p v-if="scenariosOpen" class="mt-3 text-xs text-gray-400 text-center">
          Conservative: vacancy &times;1.5+2%, rent &minus;5%, expenses +10%. Optimistic: vacancy &times;0.7, rent +5%, expenses &minus;5%. Not a forecast &mdash; illustrative stress test only.
        </p>
      </div>

      </div><!-- /bg-white inner -->
      </div><!-- /gradient wrapper -->

      <!-- ═══════════════════════════════════════════════
           SCENARIO PANEL
      ═══════════════════════════════════════════════ -->
      <div class="max-w-6xl mx-auto px-4 pb-6 mt-4">
        <ScenarioPanel
          calculator="multifamily"
          :has-result="hasResult"
          :result="currentScenarioResult"
          :trigger-save="triggerScenarioSave"
          @saved="onScenarioSaved"
        />
      </div>

      <!-- ═══════════════════════════════════════════════
           SEO CONTENT
      ═══════════════════════════════════════════════ -->
      <div class="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

      <!-- INTRO TEXT -->
      <div class="border-b border-gray-100 px-8 py-8">
        <div class="space-y-3">
          <p class="text-gray-700 text-base leading-relaxed">
            More units don't automatically mean more profit. A multifamily deal can look strong on rent &mdash; and still fail after vacancy, expenses, and debt service. This calculator shows whether a multifamily property actually works by computing NOI, cap rate, DSCR, cash flow, break-even occupancy, and expense ratio from your real numbers.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            One bad expense assumption can turn a &ldquo;cash-flowing&rdquo; apartment deal into a negative-cash-flow property. Check NOI, DSCR, and break-even occupancy before you submit an offer.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            This free multifamily calculator covers the complete analysis pipeline: gross rent, other income, vacancy (with a toggle for occupancy-dependent income), operating expenses (dollar amount, percentage, or detailed breakdown), and optional financing with DSCR, cash-on-cash return, and reserve-adjusted cash flow.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            Below you'll find the formulas, a worked example, interpretation guides, benchmarks by market and unit count, strategy notes, and an 8-question FAQ covering the most common multifamily investment questions.
          </p>
        </div>
      </div>

      <!-- OVERVIEW -->
      <div id="overview" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">Overview</h2>
        <p class="text-gray-600 leading-relaxed mb-3">
          The <strong>multifamily property calculator</strong> is designed for US real estate investors analyzing apartment buildings, duplexes, triplexes, and larger multifamily assets. It computes the key metrics that determine whether a deal cash-flows after vacancy, expenses, and debt service &mdash; not just whether it collects rent.
        </p>
        <p class="text-gray-600 leading-relaxed mb-3">
          Multifamily investing rewards scale but punishes sloppy assumptions. The best investors don't just ask &ldquo;How much rent does it collect?&rdquo; &mdash; they ask &ldquo;How much income survives after vacancy, expenses, reserves, and debt?&rdquo; This calculator answers that question in real time.
        </p>
        <p class="text-gray-600 leading-relaxed">
          Three calculation modes cover the full acquisition workflow: <strong>Analyze Property</strong> (full forward analysis with NOI, cap rate, DSCR, CoC, and break-even), <strong>Find Required Rent</strong> (reverse: what rent per unit do you need to hit a target NOI?), and <strong>Find Max Price</strong> (reverse: what's the maximum you should pay at a given cap rate?).
        </p>
      </div>

      <!-- HOW TO USE -->
      <div id="how-to-use" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-1" style="color: #1e3a5f;">How to Use This Multifamily Calculator</h2>
        <p class="text-gray-500 text-sm mb-6">Follow these steps to analyze any multifamily property in under 3 minutes</p>
        <div class="grid md:grid-cols-2 gap-10">
            <ol class="space-y-5">
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">1</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Choose a calculation mode</p>
                  <p class="text-gray-500 text-sm mt-1">Use <strong>Analyze Property</strong> to evaluate a deal. Use <strong>Find Required Rent</strong> to determine what rent supports a target NOI. Use <strong>Find Max Price</strong> to anchor your maximum offer.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">2</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Enter units and rent</p>
                  <p class="text-gray-500 text-sm mt-1">Enter the number of units and average monthly rent per unit. Add other income (parking, laundry, storage) if applicable. Use <strong>actual collected rents</strong> from the rent roll, not asking rents.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">3</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Set vacancy and toggle</p>
                  <p class="text-gray-500 text-sm mt-1">Enter your expected vacancy rate. If other income depends on occupancy (parking, storage), toggle &ldquo;Apply vacancy to other income&rdquo; to stress-test that revenue.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">4</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Enter operating expenses</p>
                  <p class="text-gray-500 text-sm mt-1">Enter a dollar amount, a percentage of EGI, or use Detailed mode. Leave blank to default to 40% of EGI. <em>Do not include debt service or reserves</em> &mdash; NOI excludes both.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">5</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Add financing (optional) &amp; read results</p>
                  <p class="text-gray-500 text-sm mt-1">Expand the Financing section to see DSCR, cash-on-cash, and levered cash flow. Enter reserves separately &mdash; they appear as reserve-adjusted cash flow without affecting NOI.</p>
                </div>
              </li>
            </ol>
            <div class="space-y-5">
              <div class="p-5 rounded-xl border border-amber-200" style="background: #fffbeb;">
                <h3 class="font-bold text-sm mb-3" style="color: #92400e;">Pro Tips for Accurate Results</h3>
                <ul class="space-y-2 text-sm text-amber-800">
                  <li class="flex gap-2"><span class="font-bold flex-shrink-0">&rarr;</span> Use the seller's T-12 (trailing 12-month P&amp;L) for income and expenses, not proforma projections.</li>
                  <li class="flex gap-2"><span class="font-bold flex-shrink-0">&rarr;</span> Budget 8&ndash;12% of gross rents for property management, even if self-managing.</li>
                  <li class="flex gap-2"><span class="font-bold flex-shrink-0">&rarr;</span> Include $200&ndash;$400/unit/year for replacement reserves on older buildings.</li>
                  <li class="flex gap-2"><span class="font-bold flex-shrink-0">&rarr;</span> Never include debt service in operating expenses &mdash; NOI is always before debt.</li>
                </ul>
              </div>
              <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
                <h3 class="font-bold text-sm text-gray-800 mb-3">Understanding Your Result</h3>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li><span class="font-semibold text-gray-800">DSCR &ge; 1.35</span> &mdash; Strong debt coverage. Most lenders comfortable here.</li>
                  <li><span class="font-semibold text-gray-800">DSCR 1.20&ndash;1.35</span> &mdash; Workable range for conventional multifamily loans.</li>
                  <li><span class="font-semibold text-gray-800">DSCR &lt; 1.20</span> &mdash; Thin coverage. Lender may require higher down payment.</li>
                  <li><span class="font-semibold text-gray-800">Break-even &gt; 90%</span> &mdash; Fragile deal. Little room for vacancy surprises.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      <!-- INPUTS & OUTPUTS -->
      <div id="inputs-outputs" class="border-b border-gray-100">
        <div class="px-8 py-5 border-b border-gray-100">
          <h2 class="text-lg font-extrabold" style="color: #1e3a5f;">Inputs &amp; Outputs &mdash; Field Reference</h2>
          <p class="text-gray-500 text-sm mt-0.5">What each field means and where to find the numbers</p>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-100" style="background:#f8fafc;">
                <th class="text-left px-6 py-3 font-bold text-gray-500 uppercase text-xs tracking-wide w-40">Field</th>
                <th class="text-left px-4 py-3 font-bold text-gray-500 uppercase text-xs tracking-wide">What it means</th>
                <th class="text-left px-4 py-3 font-bold text-gray-500 uppercase text-xs tracking-wide w-48">Where to find it</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr>
                <td class="px-6 py-3 font-semibold text-gray-800">Number of Units</td>
                <td class="px-4 py-3 text-gray-600">Total rentable units in the property.</td>
                <td class="px-4 py-3 text-gray-500">Rent roll, listing details</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-6 py-3 font-semibold text-gray-800">Average Rent</td>
                <td class="px-4 py-3 text-gray-600">Average monthly rent per unit. Use actual collected rent from the rent roll.</td>
                <td class="px-4 py-3 text-gray-500">Rent roll, T-12 income statement</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-gray-800">Other Income</td>
                <td class="px-4 py-3 text-gray-600">Monthly non-rent income: parking, laundry, storage, pet fees, RUBS.</td>
                <td class="px-4 py-3 text-gray-500">T-12 P&amp;L, property management report</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-6 py-3 font-semibold text-gray-800">Vacancy Rate</td>
                <td class="px-4 py-3 text-gray-600">% of time units are empty. Typical multifamily: 5&ndash;8%.</td>
                <td class="px-4 py-3 text-gray-500">CoStar, local market data, historical occupancy</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-gray-800">Operating Expenses</td>
                <td class="px-4 py-3 text-gray-600">All annual costs to operate: taxes, insurance, management, maintenance, utilities. <strong>Exclude debt service and CapEx.</strong></td>
                <td class="px-4 py-3 text-gray-500">Seller's T-12, county records, insurance quotes</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-6 py-3 font-semibold text-gray-800">NOI (output)</td>
                <td class="px-4 py-3 text-gray-600">Net Operating Income = EGI &minus; Operating Expenses. Core metric for multifamily valuation.</td>
                <td class="px-4 py-3 text-gray-500 italic">Calculated automatically</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-gray-800">DSCR (output)</td>
                <td class="px-4 py-3 text-gray-600">Debt Service Coverage Ratio = NOI &div; Annual Debt Service. Measures ability to cover mortgage payments.</td>
                <td class="px-4 py-3 text-gray-500 italic">Calculated when financing is provided</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- FORMULA -->
      <div id="formula" class="border-b border-gray-100">
        <div class="px-8 py-6 border-b border-gray-100">
          <h2 class="text-xl font-extrabold" style="color: #1e3a5f;">Multifamily Analysis Formulas</h2>
          <p class="text-gray-500 text-sm mt-1">The exact math this calculator uses &mdash; plus a real Houston, TX example</p>
        </div>
        <div class="px-8 py-8">
          <div class="grid md:grid-cols-2 gap-10">
            <div>
              <h3 class="font-bold text-gray-800 mb-4">Step-by-step calculation</h3>
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">1</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Calculate Gross Rent</p>
                    <p class="text-xs text-gray-500 mt-0.5">Units &times; Average Rent &times; 12</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">12 units &times; $1,200/mo &times; 12 = $172,800/yr</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">2</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Add Other Income &amp; Subtract Vacancy</p>
                    <p class="text-xs text-gray-500 mt-0.5">(Gross Rent + Other Income) &minus; Vacancy Loss = EGI</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">($172,800 + $6,000) &minus; $13,478 = $165,322 EGI</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">3</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Subtract Operating Expenses &rarr; NOI</p>
                    <p class="text-xs text-gray-500 mt-0.5">EGI &minus; expenses (taxes, insurance, mgmt, maintenance)</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">$165,322 &minus; $66,129 = $99,193 NOI</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-amber-200 bg-amber-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md flex-shrink-0 mt-0.5" style="background:#f59e0b;color:#1e3a5f;">4</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Calculate Cap Rate &amp; Cash Flow</p>
                    <p class="text-xs text-gray-500 mt-0.5">Cap Rate = NOI &div; Price &times; 100 | Cash Flow = NOI &minus; Debt Service</p>
                    <code class="text-xs font-bold" style="color:#1e3a5f;">$99,193 &div; $1,450,000 = <strong>6.84% cap rate</strong></code>
                  </div>
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="p-5 rounded-xl text-center border border-gray-200 bg-gray-50">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">The Formulas</p>
                <div class="font-mono font-bold text-lg mb-2" style="color:#1e3a5f;">NOI = EGI &minus; Operating Expenses</div>
                <div class="font-mono text-xs text-gray-500 mb-1">EGI = Gross Rent + Other Income &minus; Vacancy</div>
                <div class="font-mono text-xs text-gray-500 mb-1">Cap Rate = NOI &div; Price &times; 100</div>
                <div class="font-mono text-xs text-gray-500 mb-1">DSCR = NOI &div; Annual Debt Service</div>
                <div class="font-mono text-xs text-gray-500">Cash Flow = NOI &minus; Debt Service</div>
                <div class="mt-4 p-3 rounded-lg border border-gray-200 text-left font-mono text-xs bg-white" style="color: #374151; line-height: 1.7;">
                  <div>Gross Rent (Units &times; Rent &times; 12)</div>
                  <div>+ Other Income</div>
                  <div>&minus; Vacancy Loss</div>
                  <div class="border-t border-gray-300 pt-1">= Effective Gross Income (EGI)</div>
                  <div>&minus; Operating Expenses</div>
                  <div class="border-t border-gray-300 pt-1 font-extrabold" style="color:#1e3a5f;">= NOI</div>
                  <div>&minus; Debt Service</div>
                  <div class="border-t border-gray-300 pt-1 font-extrabold" style="color:#059669;">= Cash Flow</div>
                </div>
              </div>
              <div class="p-4 rounded-xl border border-amber-100 bg-amber-50">
                <p class="text-xs font-bold text-amber-800 mb-1">NOI excludes debt service</p>
                <p class="text-xs text-amber-700 leading-relaxed">Mortgage payments, reserves, and CapEx are <strong>never</strong> included in NOI. NOI measures the property's operating performance independent of financing. DSCR and cash flow are calculated separately below NOI.</p>
              </div>
            </div>
          </div>

          <!-- Real-world example -->
          <div class="mt-8 p-6 rounded-2xl border-2 border-amber-200" style="background: #fffbeb;">
            <h3 class="font-bold text-gray-900 mb-1">Real-World Example: Houston, TX &mdash; 12-Unit Apartment</h3>
            <p class="text-xs text-amber-700 mb-4">Based on typical 2026 Houston submarket data for a 1985-built Class C apartment</p>
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Income &amp; Expenses</p>
                <div class="space-y-1.5 text-sm">
                  <div class="flex justify-between"><span class="text-gray-600">Monthly rent (&times;12 units)</span><span class="font-semibold">$1,200 &times; 12</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Gross annual rent</span><span class="font-semibold">$172,800</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Other income (laundry, parking)</span><span class="font-semibold">$6,000/yr</span></div>
                  <div class="flex justify-between text-red-600"><span>Vacancy loss (7.5%)</span><span>&minus; $13,410</span></div>
                  <div class="flex justify-between font-semibold border-t border-amber-200 pt-1.5 mt-1"><span>EGI</span><span>$165,390</span></div>
                  <div class="flex justify-between text-red-600"><span>Operating expenses (40%)</span><span>&minus; $66,156</span></div>
                  <div class="flex justify-between font-extrabold text-green-700 border-t border-amber-200 pt-1.5 mt-1"><span>Net Operating Income</span><span>$99,234</span></div>
                </div>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Result</p>
                <div class="p-4 rounded-xl text-center mb-3" style="background: #1e3a5f;">
                  <p class="text-xs text-blue-300 mb-1">Purchase Price: $1,450,000</p>
                  <p class="text-4xl font-extrabold text-white">6.84%</p>
                  <p class="text-xs text-blue-200 mt-1">Cap Rate</p>
                </div>
                <div class="space-y-1 text-sm">
                  <div class="flex justify-between"><span class="text-gray-600">Price per unit</span><span class="font-semibold">$120,833</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Break-even occupancy</span><span class="font-semibold">79%</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Expense ratio</span><span class="font-semibold">40%</span></div>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed mt-3">A 6.84% cap rate is <strong>strong for Houston in 2026</strong>. Break-even at 79% gives comfortable margin for vacancy surprises. Proceed to financing analysis.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- WHAT IS MULTIFAMILY ANALYSIS -->
      <div id="what-is-multifamily-analysis" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What Is Multifamily Property Analysis?</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          Multifamily property analysis is the process of determining whether an apartment building or multi-unit property generates sufficient income to cover operating expenses, debt service, and still produce a return. Unlike single-family homes that are valued on comparable sales, multifamily properties are valued primarily on their <strong>income stream</strong> &mdash; making NOI the central metric.
        </p>
        <div class="p-4 rounded-xl text-center font-bold text-lg mb-4" style="background: #f0f4f8; color: #1e3a5f;">
          NOI = Effective Gross Income &minus; Operating Expenses
        </div>
        <p class="text-gray-600 leading-relaxed">
          The key question is not &ldquo;How many units does it have?&rdquo; The key question is: <strong>Does the income survive expenses, vacancy, and debt?</strong> Rent is not NOI. NOI is not cash flow. Vacancy can destroy thin deals. This calculator separates each layer so you can see exactly where the deal stands &mdash; and where it's fragile.
        </p>
      </div>

      <!-- WHAT YOUR RESULT MEANS -->
      <div id="result-meaning" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">What Your Result Means</h2>
        <p class="text-gray-600 leading-relaxed mb-5">
          Your NOI shows how much income remains after operating expenses. Here is how to interpret each DSCR and cap rate range for multifamily:
        </p>
        <div class="space-y-3 mb-5">
          <div class="flex gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
            <div class="flex-shrink-0 mt-0.5">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500 text-white">STRONG</span>
            </div>
            <div>
              <p class="font-bold text-sm text-green-800">DSCR &ge; 1.35 &amp; Cap Rate &ge; 7%</p>
              <p class="text-sm text-green-700 mt-1 leading-relaxed">Strong debt coverage with comfortable margin. Property easily services debt with room for vacancy spikes, expense increases, or rent softening. Most lenders are comfortable here. Break-even occupancy is typically below 80%.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200">
            <div class="flex-shrink-0 mt-0.5">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500 text-white">SOLID</span>
            </div>
            <div>
              <p class="font-bold text-sm text-blue-800">DSCR 1.20&ndash;1.35 &amp; Cap Rate 5&ndash;7%</p>
              <p class="text-sm text-blue-700 mt-1 leading-relaxed">Workable range for most multifamily lenders. Property covers debt but has moderate buffer. Common in competitive Sunbelt markets. Verify that expenses are realistic and vacancy assumptions are conservative.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <div class="flex-shrink-0 mt-0.5">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-white">THIN</span>
            </div>
            <div>
              <p class="font-bold text-sm text-amber-800">DSCR 1.00&ndash;1.20 &amp; Cap Rate 3&ndash;5%</p>
              <p class="text-sm text-amber-700 mt-1 leading-relaxed">Thin coverage. The property barely services debt. Any vacancy spike or expense increase could push cash flow negative. Lenders may require larger down payment or rate buydown. High break-even occupancy (&gt;90%) is a red flag.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl bg-red-50 border border-red-200">
            <div class="flex-shrink-0 mt-0.5">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-500 text-white">NEGATIVE</span>
            </div>
            <div>
              <p class="font-bold text-sm text-red-800">DSCR &lt; 1.00 or Negative NOI</p>
              <p class="text-sm text-red-700 mt-1 leading-relaxed">Property does not cover its own debt &mdash; or expenses exceed income entirely. Do not proceed without a clear value-add plan, significant rent upside, or capital injection. This is where multifamily deals become dangerous.</p>
            </div>
          </div>
        </div>
        <div class="p-4 rounded-xl border border-gray-200 bg-gray-50">
          <p class="text-sm font-semibold text-gray-800 mb-1">Cap rate thresholds vary by market</p>
          <p class="text-sm text-gray-600 leading-relaxed">A 5% cap may be acceptable in a high-demand coastal market with strong rent growth. An 8% cap may still be risky if the building has heavy deferred maintenance, old systems, or weak rent quality. Use cap rate as one signal &mdash; not the whole decision.</p>
        </div>
      </div>

      <!-- BENCHMARKS -->
      <div id="benchmarks" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Multifamily Benchmarks by Unit Count &amp; Market (2026)</h2>
        <p class="text-gray-500 text-sm mb-6">Typical stabilized multifamily metrics. Use as a starting point &mdash; always verify with local broker comps.</p>

        <h3 class="font-bold text-gray-800 mb-3">By Unit Count</h3>
        <div class="overflow-x-auto mb-8 rounded-xl border border-gray-100">
          <table class="w-full text-sm">
            <thead>
              <tr style="background:#f0f4f8;">
                <th class="text-left px-5 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Property Size</th>
                <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Typical Cap Rate</th>
                <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Expense Ratio</th>
                <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Typical DSCR</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr>
                <td class="px-5 py-3 font-semibold text-gray-800">2&ndash;4 Units</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">5&ndash;8%</td>
                <td class="px-4 py-3 text-center text-gray-600">35&ndash;45%</td>
                <td class="px-4 py-3 text-center text-green-600 font-semibold">1.20&ndash;1.50x</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-5 py-3 font-semibold text-gray-800">5&ndash;20 Units</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">5&ndash;7.5%</td>
                <td class="px-4 py-3 text-center text-gray-600">38&ndash;48%</td>
                <td class="px-4 py-3 text-center text-green-600 font-semibold">1.25&ndash;1.40x</td>
              </tr>
              <tr>
                <td class="px-5 py-3 font-semibold text-gray-800">20&ndash;50 Units</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">4.5&ndash;7%</td>
                <td class="px-4 py-3 text-center text-gray-600">40&ndash;50%</td>
                <td class="px-4 py-3 text-center text-green-600 font-semibold">1.25&ndash;1.35x</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-5 py-3 font-semibold text-gray-800">50&ndash;100 Units</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">4&ndash;6.5%</td>
                <td class="px-4 py-3 text-center text-gray-600">42&ndash;52%</td>
                <td class="px-4 py-3 text-center text-green-600 font-semibold">1.25&ndash;1.30x</td>
              </tr>
              <tr>
                <td class="px-5 py-3 font-semibold text-gray-800">100+ Units</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">3.5&ndash;6%</td>
                <td class="px-4 py-3 text-center text-gray-600">45&ndash;55%</td>
                <td class="px-4 py-3 text-center text-green-600 font-semibold">1.25&ndash;1.35x</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="font-bold text-gray-800 mb-3">By Market</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Texas (TX)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">5.5&ndash;7.5%</p>
            <p class="text-xs text-gray-500">Dallas, Houston, Austin. Strong population growth, no state income tax.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Florida (FL)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">5&ndash;7%</p>
            <p class="text-xs text-gray-500">Tampa, Orlando, Jacksonville. High migration, rising insurance costs.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">California (CA)</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">3.5&ndash;5.5%</p>
            <p class="text-xs text-gray-500">LA, SF. Rent control limits NOI growth. Appreciation-driven market.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Midwest (OH, IN, MO)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">7&ndash;10%</p>
            <p class="text-xs text-gray-500">High yields, lower prices. Check population trends and job market.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Georgia (GA)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">6&ndash;8%</p>
            <p class="text-xs text-gray-500">Atlanta metro. Strong job growth, no rent control.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Arizona (AZ)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">5&ndash;7%</p>
            <p class="text-xs text-gray-500">Phoenix. Sunbelt growth, landlord-friendly laws.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">New York (NY)</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">3&ndash;5%</p>
            <p class="text-xs text-gray-500">Rent stabilization impacts NOI. Gateway market, deep liquidity.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">North Carolina (NC)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">5.5&ndash;7.5%</p>
            <p class="text-xs text-gray-500">Charlotte, Raleigh. Tech-driven growth, no rent control.</p>
          </div>
        </div>
        <p class="text-xs text-gray-400 mt-3">Sources: CoStar Q1 2026, CBRE Multifamily Report, RealPage. Ranges are for stabilized multifamily assets.</p>
      </div>

      <!-- STRATEGY -->
      <div id="strategy" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Multifamily Investment Strategy</h2>
        <p class="text-gray-500 text-sm mb-6">How to use this analysis in your acquisition workflow</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#1e3a5f;">Screening</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              Use the calculator to screen deals quickly. If break-even occupancy exceeds 90% or expense ratio exceeds 55%, the deal has structural fragility. Move on unless you have a clear value-add plan to reduce expenses or increase rents.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              Set minimum DSCR and cap rate thresholds before you start looking. This prevents emotional decision-making when you find a property you &ldquo;like.&rdquo;
            </p>
          </div>
          <div class="p-5 rounded-xl border border-blue-100 bg-blue-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-blue-600">Value-Add</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              Multifamily value-add strategy: buy at a high cap rate (weak rents, deferred maintenance), renovate, raise rents to market, and refinance or sell at a compressed cap rate. The spread between your entry and exit cap rate determines forced appreciation.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              Use Find Required Rent to model: &ldquo;If I renovate and push rents to $X/unit, what NOI does that produce?&rdquo; Then use Find Max Price in reverse to confirm the post-renovation value supports your exit strategy.
            </p>
          </div>
          <div class="p-5 rounded-xl border border-amber-100 bg-amber-50/60">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold" style="background:#f59e0b; color:#1e3a5f;">Stabilized Hold</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              For long-term holds, focus on DSCR above 1.25 and break-even occupancy below 85%. These metrics determine whether the property can weather vacancy spikes and expense increases without requiring capital calls.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              Run the Conservative scenario to stress-test: if vacancy rises 50% and expenses increase 10%, does the property still cover debt? If not, your cushion is too thin for a passive hold.
            </p>
          </div>
          <div class="p-5 rounded-xl border border-emerald-100 bg-emerald-50/60">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#059669;">Offer Pricing</span>
            </div>
            <h3 class="font-bold text-gray-800 mb-2 text-sm">Using NOI to Set a Maximum Offer</h3>
            <div class="p-3 rounded-xl bg-white border border-gray-100 font-mono text-sm text-center mb-3" style="color: #1e3a5f;">
              Max Price = NOI &div; Market Cap Rate
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">
              If your underwritten NOI is $99,000 and multifamily in this submarket trades at 6.5% caps, your maximum bid is $1,523,077. Never pay more than the income justifies at market yields &mdash; regardless of what the seller asks.
            </p>
          </div>
        </div>
      </div>

      <!-- APPLICATIONS -->
      <div id="applications" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Applications of Multifamily Analysis</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Acquisition Screening</p>
            <p class="text-sm text-gray-600">Quickly determine if a multifamily property meets your return thresholds before spending time on full due diligence, site visits, and rent roll review.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Debt Sizing</p>
            <p class="text-sm text-gray-600">Determine maximum loan amount by working backward from DSCR requirements. If lender requires 1.25x and NOI is $100k, max debt service is $80k/yr.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Rent Optimization</p>
            <p class="text-sm text-gray-600">Use Find Required Rent to determine what rents you need to achieve your target returns. Compare against market rents to verify feasibility.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Expense Benchmarking</p>
            <p class="text-sm text-gray-600">Compare your property's expense ratio against market benchmarks. If expenses are above 50% of EGI, identify specific line items to optimize.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Refinance Analysis</p>
            <p class="text-sm text-gray-600">Determine if NOI supports refinancing at better terms. Calculate DSCR at proposed new loan amount to confirm lender viability.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Deal Comparison</p>
            <p class="text-sm text-gray-600">Compare multifamily deals across different unit counts and markets on consistent metrics: cap rate, DSCR, expense ratio, and break-even occupancy.</p>
          </div>
        </div>
      </div>

      <!-- INDUSTRY STANDARDS -->
      <div id="industry-standards" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Industry Standards &amp; Lender Requirements</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">F</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">Fannie Mae / Freddie Mac</h3>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> Minimum DSCR of <strong>1.25x</strong> for standard multifamily (1.20x for affordable housing).</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> Maximum LTV of 75&ndash;80% for stabilized multifamily.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> Underwrite at 5&ndash;10% vacancy floor regardless of actual occupancy.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> Replacement reserves required: $250&ndash;$300/unit/year minimum.</li>
            </ul>
          </div>
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">B</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">Bridge &amp; CMBS Lenders</h3>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> Bridge lenders may accept DSCR of <strong>1.0&ndash;1.15x</strong> for value-add with business plan.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> CMBS typically requires 1.25&ndash;1.30x DSCR with interest-only periods.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> Debt yield (NOI / Loan Amount) of 8&ndash;10% often used as secondary test.</li>
            </ul>
          </div>
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">$</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">Expense Ratio Standards</h3>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> <strong>35&ndash;45%</strong> of EGI is typical for well-managed multifamily.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> <strong>45&ndash;55%</strong> is common for older buildings or high-tax markets.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> <strong>&gt;55%</strong> warrants investigation: check property taxes, insurance, deferred maintenance, or payroll.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> Larger properties (&gt;50 units) typically have higher expense ratios due to on-site staff and amenities.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- LIMITATIONS -->
      <div id="limitations" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Limitations</h2>
        <div class="grid sm:grid-cols-2 gap-5">
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Not Full Underwriting</p>
            <p class="text-sm text-gray-600">This calculator gives a screening estimate. It does not replace rent roll review, operating statement analysis, physical inspection, or lender underwriting. Use it to identify deals worth deeper analysis.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Average Rent Simplification</p>
            <p class="text-sm text-gray-600">This v1 calculator uses a single average rent per unit. In reality, unit mixes (1BR vs 2BR vs 3BR) have different rents, vacancy, and expense profiles. For detailed underwriting, model each unit type separately.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Does Not Guarantee Loan Approval</p>
            <p class="text-sm text-gray-600">DSCR and cap rate outputs are analytical estimates. Actual loan approval depends on credit, property condition, market, reserves, and lender-specific criteria beyond what any calculator models.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Point-in-Time Analysis</p>
            <p class="text-sm text-gray-600">NOI is based on current inputs. It doesn't model rent growth, lease expirations, capital needs, or changing market conditions. For multi-year projections, pair with a DCF model.</p>
          </div>
        </div>
        <div id="when-not-to-use" class="mt-6">
          <h3 class="font-bold text-gray-800 mb-3">When Not to Rely on This Calculator Alone</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Major renovation needed:</strong> If CapEx exceeds 20% of purchase price, use a BRRRR or fix-and-flip model instead.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Lease-up properties:</strong> Vacancy above 30% makes NOI calculations unreliable. Model projected stabilized income separately.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Complex capital structures:</strong> Syndication, preferred returns, promote structures require waterfall modeling beyond this tool.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Short-term rental conversions:</strong> Airbnb income is volatile and seasonal. Standard NOI analysis doesn't capture the risk profile.</li>
          </ul>
        </div>
      </div>

      <!-- COMMON MISTAKES -->
      <div id="common-mistakes" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Common Mistakes in Multifamily Analysis</h2>
        <div class="space-y-3">
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">1</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Including debt service in NOI</p>
              <p class="text-sm text-gray-600 mt-0.5">Mortgage payments are <strong>not</strong> operating expenses. NOI must be calculated before debt service. Including it makes your NOI incomparable to market data and breaks cap rate calculations.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">2</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Using proforma rents instead of actual collected rents</p>
              <p class="text-sm text-gray-600 mt-0.5">Sellers often present rents at market maximum. Always use actual collected rents from the rent roll. The gap between asking and collected rent is real economic vacancy.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">3</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Ignoring vacancy on occupancy-dependent income</p>
              <p class="text-sm text-gray-600 mt-0.5">Parking, storage, and laundry income often depends on occupancy. If you lose tenants, you lose this income too. Use the vacancy toggle to stress-test total income.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">4</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Underestimating operating expenses</p>
              <p class="text-sm text-gray-600 mt-0.5">Typical multifamily expense ratios are 35&ndash;50% of EGI. If your analysis shows less than 30%, you're likely missing property taxes, insurance increases, or deferred maintenance costs.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">5</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Confusing more units with more safety</p>
              <p class="text-sm text-gray-600 mt-0.5">More units does not automatically mean better investment. A 20-unit building with 55% expense ratio, thin DSCR, and 92% break-even occupancy is more fragile than a well-positioned 4-plex with strong fundamentals.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <div id="faq" class="px-8 py-8">
        <h2 class="text-2xl font-extrabold mb-8 text-center" style="color: #1e3a5f;">
          Frequently Asked Questions
        </h2>
        <div class="space-y-4 max-w-3xl mx-auto">
          <div v-for="(faq, i) in faqs" :key="i"
            class="border border-gray-100 rounded-xl overflow-hidden">
            <button
              @click="toggleFaq(i)"
              :aria-expanded="openFaq === i"
              :aria-controls="`faq-answer-${i}`"
              class="w-full text-left px-6 py-4 flex items-center justify-between font-semibold text-gray-800 hover:bg-gray-50 transition">
              <span>{{ faq.q }}</span>
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform"
                :class="openFaq === i ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div :id="`faq-answer-${i}`" v-if="openFaq === i" class="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>

      </div><!-- /editorial wrapper -->

      <!-- Related Calculators CTA -->
      <div id="related-calculators" class="mt-6 rounded-2xl p-8 text-center text-white"
        style="background: #1e3a5f;">
        <h2 class="text-2xl font-extrabold mb-2">Ready to Dig Deeper?</h2>
        <p class="text-blue-200 mb-6">Multifamily analysis is the starting point. Use our full toolkit for complete deal evaluation.</p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink v-for="calc in relatedCalcs" :key="calc.href"
            :to="calc.href"
            class="px-5 py-2.5 rounded-xl font-semibold text-sm border border-white/20 bg-white/10 hover:bg-white/20 transition">
            {{ calc.label }}
          </NuxtLink>
        </div>
      </div>

    </main>

    <!-- Email Capture Modal -->
    <EmailCaptureModal
      :show="showEmailModal"
      :calculator-name="'Multifamily Property Calculator'"
      :primary-result="hasResult ? `${formatCurrency(noiCalc)} NOI` : undefined"
      title="Save Your Multifamily Analysis"
      subtitle="Get market benchmarks, deal templates, and calculator updates."
      cta-label="Save & Get Free Updates"
      @close="showEmailModal = false"
      @captured="onEmailCaptured"
    />

    <!-- ═══════════════════════════════════════════════
         FOOTER
    ═══════════════════════════════════════════════ -->
    <footer class="mt-16 border-t border-gray-200 bg-white py-8 px-4">
      <div class="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-400">&copy; 2026 RealCalc. For informational purposes only. Not financial advice.</p>
        <div class="flex gap-6">
          <NuxtLink to="/privacy" class="text-sm text-gray-400 hover:text-gray-600 transition">Privacy</NuxtLink>
          <NuxtLink to="/terms" class="text-sm text-gray-400 hover:text-gray-600 transition">Terms</NuxtLink>
          <NuxtLink to="/contact" class="text-sm text-gray-400 hover:text-gray-600 transition">Contact</NuxtLink>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
// ─── SEO ─────────────────────────────────────────────────────────────────────
useHead({
  title: 'Multifamily Property Calculator — NOI, DSCR, Cash Flow & Cap Rate (2026) | RealCalc',
  meta: [
    { name: 'description', content: 'Analyze multifamily deals with NOI, cap rate, DSCR, cash flow, expense ratio, and price per unit. See if the property actually works. Free, no signup.' },
    { property: 'og:title', content: 'Multifamily Property Calculator — NOI, DSCR, Cash Flow & Cap Rate | RealCalc' },
    { property: 'og:description', content: 'Analyze multifamily deals: NOI, cap rate, DSCR, cash flow, break-even occupancy, expense ratio, price per unit. Free calculator for US investors.' },
    { name: 'keywords', content: 'multifamily property calculator, apartment building calculator, NOI calculator multifamily, DSCR multifamily, multifamily cap rate, apartment cash flow, break-even occupancy, multifamily investment analysis' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Multifamily Property Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description: 'Free multifamily property calculator for US real estate investors. Analyze NOI, cap rate, DSCR, cash flow, expense ratio, break-even occupancy, and price per unit.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        featureList: 'NOI calculation, cap rate, DSCR, cash-on-cash return, break-even occupancy, expense ratio, vacancy toggle, sensitivity analysis, PDF export, scenario comparison'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Calculator',
        name: 'Multifamily Property Calculator',
        description: 'Analyze multifamily investment properties: calculate NOI, cap rate, DSCR, cash flow, expense ratio, and break-even occupancy from rent, vacancy, and expenses.',
        url: 'https://arvcalc.com/multifamily-property-calculator',
        provider: { '@type': 'Organization', name: 'RealCalc', url: 'https://arvcalc.com' }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How do you analyze a multifamily property?', acceptedAnswer: { '@type': 'Answer', text: 'Start with income: Gross Rent = Units × Average Rent × 12. Add other income, subtract vacancy to get EGI. Subtract operating expenses to get NOI. Then calculate cap rate (NOI ÷ Price), DSCR (NOI ÷ Debt Service), and cash flow (NOI − Debt Service). The key question is whether income survives expenses, vacancy, and debt.' } },
          { '@type': 'Question', name: 'What is a good cap rate for multifamily?', acceptedAnswer: { '@type': 'Answer', text: 'Cap rate thresholds vary by market and unit count. In most US markets, 5–7% is typical for stabilized multifamily. Coastal metros see 3.5–5%, while Midwest markets can yield 7–10%. A "good" cap rate depends on your market, the building condition, and your investment strategy.' } },
          { '@type': 'Question', name: 'What expenses are included in multifamily NOI?', acceptedAnswer: { '@type': 'Answer', text: 'NOI includes property taxes, insurance, property management (8–12% of rents), maintenance, utilities (if landlord-paid), landscaping, pest control, and administrative costs. NOI excludes debt service, depreciation, capital expenditures, income taxes, and replacement reserves.' } },
          { '@type': 'Question', name: 'What is break-even occupancy?', acceptedAnswer: { '@type': 'Answer', text: 'Break-even occupancy is the minimum occupancy rate needed to cover operating expenses and debt service. If break-even is 85%, you need at least 85% of units rented to avoid negative cash flow. Above 90% is considered fragile — there is little room for vacancy surprises or rent disruption.' } },
          { '@type': 'Question', name: 'Does DSCR guarantee loan approval?', acceptedAnswer: { '@type': 'Answer', text: 'No. DSCR is one factor lenders consider. They also look at borrower credit, property condition, market trends, reserves, and loan-to-value ratio. A DSCR of 1.25x or higher generally meets minimum thresholds for conventional multifamily loans, but approval depends on the full picture.' } },
          { '@type': 'Question', name: 'Should I include reserves in NOI?', acceptedAnswer: { '@type': 'Answer', text: 'No. Replacement reserves (CapEx reserves) are not included in NOI per industry standard. NOI measures operating performance only. Reserves are shown separately as reserve-adjusted cash flow. Lenders typically require $250–$400/unit/year in reserves but calculate DSCR from NOI before reserves.' } },
          { '@type': 'Question', name: 'What is a typical expense ratio for multifamily?', acceptedAnswer: { '@type': 'Answer', text: 'Typical multifamily expense ratios range from 35–50% of effective gross income. Well-managed smaller properties (2–20 units) often achieve 35–45%. Larger properties (50+ units) with on-site staff and amenities typically run 45–55%. Ratios above 55% warrant investigation into specific line items.' } },
          { '@type': 'Question', name: 'How do I use the vacancy toggle?', acceptedAnswer: { '@type': 'Answer', text: 'By default, vacancy applies only to rental income. If your other income (parking, storage, laundry) depends on occupancy — meaning empty units reduce that income too — turn on the toggle to apply vacancy to total income. This gives a more conservative, realistic analysis for occupancy-dependent revenue streams.' } }
        ]
      })
    }
  ]
})

// ─── REACTIVE STATE ──────────────────────────────────────────────────────────
const expenseMode = ref('amount')
const openFaq = ref(null)
const shareSuccess = ref(false)
const isNavExpanded = ref(false)
const financingOpen = ref(false)
const scenariosOpen = ref(false)
const showSensitivity = ref(false)
const vacancyAffectsOtherIncome = ref(false)

const calcMode = ref('analyze')

const form = reactive({
  numUnits: null,
  avgRent: null,
  otherIncome: null,
  vacancyRate: null,
  totalExpenses: null,
  expensePct: null,
  purchasePrice: null,
  // Financing
  downPaymentPct: null,
  interestRate: null,
  loanTermYears: 30,
  closingCosts: null,
  reserves: null,
  // Reverse modes
  targetNOI: null,
  targetCapRate: null,
  reverseExpensePct: null,
  // Detailed expenses
  expenses: {
    propertyTax: null,
    insurance: null,
    management: null,
    maintenance: null,
    utilities: null,
    trash: null,
    other: null,
  }
})

// ─── EXPENSE FIELDS CONFIG ───────────────────────────────────────────────────
const expenseFields = [
  { key: 'propertyTax', label: 'Property Taxes (annual)', hint: null, placeholder: 'Enter annual property taxes' },
  { key: 'insurance', label: 'Insurance (annual)', hint: null, placeholder: 'Enter annual insurance cost' },
  { key: 'management', label: 'Property Management (annual)', hint: 'Often 8–12% of gross rents for multifamily', placeholder: 'Enter annual management cost' },
  { key: 'maintenance', label: 'Maintenance & Repairs (annual)', hint: null, placeholder: 'Enter annual maintenance cost' },
  { key: 'utilities', label: 'Utilities — if landlord paid', hint: null, placeholder: 'Enter annual utility cost' },
  { key: 'trash', label: 'Trash / Landscaping (annual)', hint: null, placeholder: 'Enter annual trash and landscaping' },
  { key: 'other', label: 'Other Expenses (annual)', hint: null, placeholder: 'Enter other annual operating expenses' },
]

// ─── FULLY-COMPUTED CALCULATION CHAIN ────────────────────────────────────────
const annualGrossRent = computed(() =>
  (Number(form.numUnits) || 0) * (Number(form.avgRent) || 0) * 12
)

const annualOtherIncome = computed(() =>
  (Number(form.otherIncome) || 0) * 12
)

const totalGrossIncome = computed(() =>
  annualGrossRent.value + annualOtherIncome.value
)

const vacancyRateClamped = computed(() =>
  Math.min(100, Math.max(0, Number(form.vacancyRate) || 0))
)

const vacancyLoss = computed(() => {
  const rate = vacancyRateClamped.value / 100
  if (vacancyAffectsOtherIncome.value) {
    return totalGrossIncome.value * rate
  }
  return annualGrossRent.value * rate
})

const effectiveGrossIncome = computed(() =>
  totalGrossIncome.value - vacancyLoss.value
)

const detailedTotalExpenses = computed(() =>
  Object.values(form.expenses).reduce((sum, v) => sum + (Number(v) || 0), 0)
)

const totalExpensesCalc = computed(() => {
  if (expenseMode.value === 'detailed') return detailedTotalExpenses.value
  if (expenseMode.value === 'percentage') {
    const pct = Number(form.expensePct) || 40
    return effectiveGrossIncome.value * (pct / 100)
  }
  // amount mode
  const amt = Number(form.totalExpenses)
  if (amt > 0) return amt
  // Default 40% if empty
  return effectiveGrossIncome.value * 0.4
})

const noiCalc = computed(() =>
  effectiveGrossIncome.value - totalExpensesCalc.value
)

const capRateCalc = computed(() => {
  const price = Number(form.purchasePrice) || 0
  if (price <= 0 || noiCalc.value <= 0) return 0
  return (noiCalc.value / price) * 100
})

const hasResult = computed(() => {
  if (calcMode.value === 'analyze') {
    return annualGrossRent.value > 0 && Number(form.purchasePrice) > 0
  }
  if (calcMode.value === 'find-rent') {
    return requiredRentResult.value !== null
  }
  if (calcMode.value === 'find-price') {
    return maxPriceResult.value !== null
  }
  return false
})

// ─── REVERSE MODES ──────────────────────────────────────────────────────────
// Find Required Rent: given target NOI, units, vacancy, expense ratio → rent per unit
const requiredRentResult = computed(() => {
  const targetNOI = Number(form.targetNOI) || 0
  const units = Number(form.numUnits) || 0
  const vacRate = vacancyRateClamped.value / 100
  const expPct = (Number(form.reverseExpensePct) || 40) / 100

  if (targetNOI <= 0 || units <= 0) return null

  // NOI = EGI * (1 - expPct)
  // EGI = GrossRent * (1 - vacRate) [simplified: no other income in reverse]
  // GrossRent = units * rent * 12
  // targetNOI = units * rent * 12 * (1 - vacRate) * (1 - expPct)
  const factor = 12 * (1 - vacRate) * (1 - expPct)
  if (factor <= 0) return null

  return targetNOI / (units * factor)
})

// Find Max Price: NOI ÷ target cap rate
const maxPriceResult = computed(() => {
  const capTarget = Number(form.targetCapRate) || 0
  if (calcMode.value !== 'find-price' || capTarget <= 0 || noiCalc.value <= 0) return null
  return (noiCalc.value / capTarget) * 100
})

// ─── ANALYTICS ───────────────────────────────────────────────────────────────
const expenseRatioCalc = computed(() => {
  if (effectiveGrossIncome.value <= 0) return 0
  return (totalExpensesCalc.value / effectiveGrossIncome.value) * 100
})

// Break-even occupancy: minimum occupancy to cover expenses + debt service
const breakEvenOccupancy = computed(() => {
  if (!hasResult.value || totalGrossIncome.value <= 0) return null
  const debtService = financingOpen.value ? annualDebtService.value : 0
  const totalCosts = totalExpensesCalc.value + debtService
  // Break-even = totalCosts / totalGrossIncome (without vacancy)
  const be = (totalCosts / totalGrossIncome.value) * 100
  return Math.max(0, Math.min(100, be))
})

// ─── INVESTOR RETURNS ─────────────────────────────────────────────────────────
const loanAmount = computed(() => {
  const price = Number(form.purchasePrice) || 0
  const dp = Math.min(100, Math.max(0, Number(form.downPaymentPct) || 25))
  return price * (1 - dp / 100)
})

const monthlyPayment = computed(() => {
  const P = loanAmount.value
  const r = Number(form.interestRate) || 0
  if (P <= 0 || r <= 0) return 0
  const rate = r / 100 / 12
  const n = (Number(form.loanTermYears) || 30) * 12
  return P * (rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1)
})

const annualDebtService = computed(() => monthlyPayment.value * 12)

const cashFlowAfterDebt = computed(() => noiCalc.value - annualDebtService.value)

const reserveAdjustedCashFlow = computed(() =>
  cashFlowAfterDebt.value - (Number(form.reserves) || 0)
)

const cashInvested = computed(() => {
  const price = Number(form.purchasePrice) || 0
  const dp = price * (Math.min(100, Math.max(0, Number(form.downPaymentPct) || 25)) / 100)
  return dp + (Number(form.closingCosts) || 0)
})

const cocReturn = computed(() => {
  if (cashInvested.value <= 0 || annualDebtService.value <= 0) return null
  return (cashFlowAfterDebt.value / cashInvested.value) * 100
})

const dscrCalc = computed(() => {
  if (annualDebtService.value <= 0) return null
  return noiCalc.value / annualDebtService.value
})

// ─── SCENARIOS ────────────────────────────────────────────────────────────────
const scenarios = computed(() => {
  if (!hasResult.value) return null
  const price = Number(form.purchasePrice) || 0

  const calcScenario = (vacMult, vacAdd, rentMult, expMult) => {
    const gr = annualGrossRent.value * rentMult
    const oi = annualOtherIncome.value * rentMult
    const total = gr + oi
    const vac = Math.min(100, vacancyRateClamped.value * vacMult + vacAdd)
    const vacL = vacancyAffectsOtherIncome.value ? total * (vac / 100) : gr * (vac / 100)
    const egi = total - vacL
    const exp = totalExpensesCalc.value * expMult
    const n = egi - exp
    const cr = price > 0 ? (n / price) * 100 : 0

    let cf = null
    let dscr = null
    if (financingOpen.value && annualDebtService.value > 0) {
      cf = n - annualDebtService.value
      dscr = annualDebtService.value > 0 ? n / annualDebtService.value : null
    }

    return { noi: n, capRate: cr, cashFlow: cf, dscr, vacancy: vac }
  }

  return [
    { key: 'conservative', label: 'Conservative', desc: 'vacancy +50%, expenses +10%, rent −5%', color: '#dc2626', bgColor: '#fef2f2', ...calcScenario(1.5, 2, 0.95, 1.10) },
    { key: 'base', label: 'Base Case', desc: 'Current inputs as entered', color: '#2563eb', bgColor: '#eff6ff', ...calcScenario(1, 0, 1, 1) },
    { key: 'optimistic', label: 'Optimistic', desc: 'vacancy −30%, expenses −5%, rent +5%', color: '#059669', bgColor: '#f0fdf4', ...calcScenario(0.7, 0, 1.05, 0.95) },
  ]
})

// ─── BADGE SYSTEM ────────────────────────────────────────────────────────────
const badge = computed(() => {
  const cr = capRateCalc.value
  if (noiCalc.value < 0) return { label: 'Negative NOI', bg1: '#7f1d1d', bg2: '#450a0a' }
  if (cr >= 8)  return { label: 'High Yield',    bg1: '#059669', bg2: '#047857' }
  if (cr >= 6)  return { label: 'Mid Yield',     bg1: '#0284c7', bg2: '#0369a1' }
  if (cr >= 4)  return { label: 'Moderate',      bg1: '#d97706', bg2: '#b45309' }
  if (cr >= 2)  return { label: 'Low Yield',     bg1: '#ea580c', bg2: '#c2410c' }
  return              { label: 'Very Low',       bg1: '#dc2626', bg2: '#b91c1c' }
})

// ─── DEAL INSIGHT TEXT ───────────────────────────────────────────────────────
const insightText = computed(() => {
  const cr = capRateCalc.value
  const er = expenseRatioCalc.value
  const be = breakEvenOccupancy.value
  const dscr = dscrCalc.value

  if (noiCalc.value < 0) return `NOI is negative — expenses exceed effective income at these inputs. This property is operationally unprofitable. Review expense and income figures before drawing conclusions.`

  let dscrNote = ''
  if (dscr !== null) {
    if (dscr >= 1.35) dscrNote = ` DSCR of ${dscr.toFixed(2)}x indicates strong debt coverage.`
    else if (dscr >= 1.20) dscrNote = ` DSCR of ${dscr.toFixed(2)}x is in the workable range for most lenders.`
    else if (dscr >= 1.0) dscrNote = ` DSCR of ${dscr.toFixed(2)}x is thin — limited room for error.`
    else dscrNote = ` DSCR of ${dscr.toFixed(2)}x means the property does not cover its debt.`
  }

  if (cr >= 7) return `Cap rate of ${cr.toFixed(2)}% is in the high-yield range for multifamily. Expense ratio: ${er.toFixed(0)}% of EGI. Break-even occupancy: ${be !== null ? be.toFixed(0) + '%' : 'N/A'}.${dscrNote} High cap rates can reflect risk — verify building condition and tenant quality.`
  if (cr >= 5) return `Cap rate of ${cr.toFixed(2)}% is within the typical range for stabilized multifamily in most US markets. Expense ratio: ${er.toFixed(0)}% of EGI. Break-even occupancy: ${be !== null ? be.toFixed(0) + '%' : 'N/A'}.${dscrNote}`
  if (cr >= 3) return `Cap rate of ${cr.toFixed(2)}% is in the moderate-to-low range — common in competitive coastal and Sunbelt markets. Expense ratio: ${er.toFixed(0)}% of EGI. Break-even occupancy: ${be !== null ? be.toFixed(0) + '%' : 'N/A'}.${dscrNote} Returns are sensitive to vacancy and expense changes.`
  return `Cap rate of ${cr.toFixed(2)}% is very low. Verify all inputs — missing expenses or incorrect income are common causes.${dscrNote}`
})

// ─── SENSITIVITY TABLE ───────────────────────────────────────────────────────
const sensitivityRows = computed(() => {
  if (!hasResult.value || noiCalc.value <= 0) return null
  const price = Number(form.purchasePrice) || 0
  const baseRent = annualGrossRent.value
  return [-0.30, -0.20, -0.10, 0, 0.10, 0.20, 0.30].map(delta => {
    const rent = baseRent * (1 + delta)
    const oi = annualOtherIncome.value
    const total = rent + oi
    const vacL = vacancyAffectsOtherIncome.value
      ? total * (vacancyRateClamped.value / 100)
      : rent * (vacancyRateClamped.value / 100)
    const egi = total - vacL
    const n = egi - totalExpensesCalc.value
    const cr = price > 0 ? (n / price) * 100 : 0
    return {
      label: delta === 0 ? 'Current' : `${delta > 0 ? '+' : ''}${(delta * 100).toFixed(0)}%`,
      noi: n,
      capRate: cr,
      isCurrent: delta === 0,
    }
  })
})

// NOI bar visualization
const noiBreakdown = computed(() => {
  if (!hasResult.value || totalGrossIncome.value <= 0) return null
  const gi = totalGrossIncome.value
  const vl = vacancyLoss.value
  const exp = totalExpensesCalc.value
  const n = noiCalc.value

  const vacPct = (vl / gi) * 100
  const expPct = Math.min((exp / gi) * 100, 100 - vacPct)
  const noiPct = n > 0 ? (n / gi) * 100 : 0

  return {
    vacancyPct: vacPct,
    expensePct: expPct,
    noiPct,
    noiNegative: n < 0,
    overflowPct: n < 0 ? ((Math.abs(n) / gi) * 100).toFixed(0) : 0,
  }
})

// ─── WARNING STATES ──────────────────────────────────────────────────────────
const warnings = computed(() => {
  if (!hasResult.value && calcMode.value === 'analyze') return []
  const w = []

  if (calcMode.value === 'analyze' && hasResult.value) {
    if (noiCalc.value < 0) {
      w.push({ type: 'error', msg: 'Negative NOI — expenses exceed effective income at these inputs. This property is operationally unprofitable.' })
    }
    if (expenseRatioCalc.value > 55) {
      w.push({ type: 'warn', msg: `Expense ratio of ${expenseRatioCalc.value.toFixed(0)}% is above typical range (35–50%). Check property taxes, insurance, and maintenance assumptions.` })
    }
    if (breakEvenOccupancy.value !== null && breakEvenOccupancy.value > 90) {
      w.push({ type: 'warn', msg: `Break-even occupancy of ${breakEvenOccupancy.value.toFixed(0)}% is very high. This deal has little room for vacancy surprises.` })
    }
  }

  return w
})

// ─── FAQS ────────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'How do you analyze a multifamily property?', a: 'Start with income: Gross Rent = Units × Average Rent × 12. Add other income (parking, laundry, storage), subtract vacancy to get Effective Gross Income (EGI). Subtract operating expenses from EGI to get NOI. Then calculate cap rate (NOI ÷ Price), DSCR (NOI ÷ Annual Debt Service), and cash flow (NOI − Debt Service). The key question is whether income survives expenses, vacancy, and debt — not just how much rent the building collects.' },
  { q: 'What is a good cap rate for multifamily?', a: 'Cap rate thresholds vary significantly by market and unit count. In most US markets, 5–7% is typical for stabilized multifamily. Coastal metros (NYC, LA, SF) often see 3.5–5%, while Midwest and Southeast markets can yield 7–10%. A "good" cap rate depends on your market, building condition, age, tenant quality, and investment strategy. Always compare against local comps, not national averages.' },
  { q: 'What is break-even occupancy and why does it matter?', a: 'Break-even occupancy is the minimum percentage of units that must be rented to cover operating expenses and debt service. If your break-even is 85%, you need at least 85% occupancy to avoid negative cash flow. Break-even above 90% means the deal is fragile — any vacancy spike, rent disruption, or expense increase could push cash flow negative. Strong deals typically have break-even occupancy below 80%.' },
  { q: 'Should I include debt service in NOI?', a: 'No — never. NOI (Net Operating Income) is always calculated before debt service. It measures the property\'s operating performance independent of financing. Debt service is subtracted after NOI to calculate cash flow. DSCR (NOI ÷ Debt Service) measures how well NOI covers the mortgage. Including debt service in NOI would make your numbers incomparable to market data and break cap rate calculations.' },
  { q: 'What is a typical expense ratio for multifamily?', a: 'Typical multifamily expense ratios range from 35–50% of Effective Gross Income. Well-managed smaller properties (2–20 units) often achieve 35–45%. Larger properties (50+ units) with on-site staff and amenities typically run 45–55%. If your expense ratio exceeds 55%, investigate specific line items: property taxes, insurance, deferred maintenance, or excessive management fees. If it\'s below 30%, you likely have missing expenses.' },
  { q: 'How does the vacancy toggle work?', a: 'By default, vacancy applies only to rental income — if 7% of units are empty, you lose 7% of rent. But other income (parking, storage, laundry) often depends on occupancy too. The vacancy toggle lets you apply vacancy to total income (rent + other), giving a more conservative analysis. Use it when your other income sources would decrease if units go vacant.' },
  { q: 'What DSCR do lenders require for multifamily?', a: 'Most conventional multifamily lenders (Fannie Mae, Freddie Mac) require a minimum DSCR of 1.25x — meaning NOI must be at least 125% of annual debt service. Some bridge lenders accept 1.0–1.15x for value-add properties with a business plan. DSCR below 1.0 means the property cannot cover its own debt. Note: DSCR alone does not guarantee approval — lenders also consider credit, LTV, reserves, and property condition.' },
  { q: 'Why are replacement reserves separate from NOI?', a: 'Industry standard keeps reserves out of NOI because NOI measures current operating performance, not future capital needs. Reserves (typically $250–$400/unit/year for older buildings) are set aside for roof, HVAC, appliances, and other major replacements. This calculator shows reserve-adjusted cash flow separately so you can see both the standard NOI (for cap rate and DSCR) and the true after-reserves cash flow (for your pocket).' },
]

// ─── RELATED CALCULATORS ─────────────────────────────────────────────────────
const relatedCalcs = [
  { label: 'NOI Calculator', href: '/noi-calculator' },
  { label: 'Cap Rate Calculator', href: '/cap-rate-calculator' },
  { label: 'DSCR Calculator', href: '/dscr-calculator' },
  { label: 'Cash-on-Cash Return', href: '/cash-on-cash-calculator' },
  { label: 'LTV Calculator', href: '/ltv-calculator' },
  { label: 'Debt Yield Calculator', href: '/debt-yield-calculator' },
  { label: 'Real Estate ROI', href: '/real-estate-roi-calculator' },
  { label: 'Management Fee',  href: '/property-management-fee-calculator' },
  { label: 'Airbnb / STR',  href: '/airbnb-str-calculator' },
]

// ─── URL PERSISTENCE ─────────────────────────────────────────────────────────
function buildShareParams() {
  const p = new URLSearchParams()
  if (calcMode.value !== 'analyze') p.set('cm', calcMode.value)
  if (form.numUnits) p.set('nu', form.numUnits)
  if (form.avgRent) p.set('ar', form.avgRent)
  if (form.otherIncome) p.set('oi', form.otherIncome)
  if (form.vacancyRate !== null && form.vacancyRate !== '') p.set('vr', form.vacancyRate)
  if (vacancyAffectsOtherIncome.value) p.set('vt', '1')
  if (expenseMode.value !== 'amount') p.set('em', expenseMode.value)
  if (expenseMode.value === 'amount' && form.totalExpenses) p.set('te', form.totalExpenses)
  if (expenseMode.value === 'percentage' && form.expensePct) p.set('ep', form.expensePct)
  if (expenseMode.value === 'detailed') {
    if (form.expenses.propertyTax) p.set('ept', form.expenses.propertyTax)
    if (form.expenses.insurance) p.set('ei', form.expenses.insurance)
    if (form.expenses.management) p.set('emg', form.expenses.management)
    if (form.expenses.maintenance) p.set('emt', form.expenses.maintenance)
    if (form.expenses.utilities) p.set('eu', form.expenses.utilities)
    if (form.expenses.trash) p.set('etr', form.expenses.trash)
    if (form.expenses.other) p.set('eot', form.expenses.other)
  }
  if (form.purchasePrice) p.set('pp', form.purchasePrice)
  if (form.downPaymentPct) p.set('dp', form.downPaymentPct)
  if (form.interestRate) p.set('ir', form.interestRate)
  if (form.loanTermYears !== 30) p.set('lt', form.loanTermYears)
  if (form.closingCosts) p.set('cc', form.closingCosts)
  if (form.reserves) p.set('rv', form.reserves)
  if (form.targetNOI) p.set('tn', form.targetNOI)
  if (form.targetCapRate) p.set('tc', form.targetCapRate)
  if (form.reverseExpensePct) p.set('re', form.reverseExpensePct)
  return p.toString()
}

if (process.client) {
  onMounted(() => {
    const p = new URLSearchParams(window.location.search)
    if (p.has('cm')) calcMode.value = p.get('cm')
    if (p.has('nu')) form.numUnits = Number(p.get('nu'))
    if (p.has('ar')) form.avgRent = Number(p.get('ar'))
    if (p.has('oi')) form.otherIncome = Number(p.get('oi'))
    if (p.has('vr')) form.vacancyRate = Number(p.get('vr'))
    if (p.has('vt')) vacancyAffectsOtherIncome.value = p.get('vt') === '1'
    if (p.has('em')) expenseMode.value = p.get('em')
    if (p.has('te')) form.totalExpenses = Number(p.get('te'))
    if (p.has('ep')) form.expensePct = Number(p.get('ep'))
    if (p.has('ept')) form.expenses.propertyTax = Number(p.get('ept'))
    if (p.has('ei')) form.expenses.insurance = Number(p.get('ei'))
    if (p.has('emg')) form.expenses.management = Number(p.get('emg'))
    if (p.has('emt')) form.expenses.maintenance = Number(p.get('emt'))
    if (p.has('eu')) form.expenses.utilities = Number(p.get('eu'))
    if (p.has('etr')) form.expenses.trash = Number(p.get('etr'))
    if (p.has('eot')) form.expenses.other = Number(p.get('eot'))
    if (p.has('pp')) form.purchasePrice = Number(p.get('pp'))
    if (p.has('dp')) form.downPaymentPct = Number(p.get('dp'))
    if (p.has('ir')) form.interestRate = Number(p.get('ir'))
    if (p.has('lt')) form.loanTermYears = Number(p.get('lt'))
    if (p.has('cc')) form.closingCosts = Number(p.get('cc'))
    if (p.has('rv')) form.reserves = Number(p.get('rv'))
    if (p.has('tn')) form.targetNOI = Number(p.get('tn'))
    if (p.has('tc')) form.targetCapRate = Number(p.get('tc'))
    if (p.has('re')) form.reverseExpensePct = Number(p.get('re'))
    if (p.has('dp') || p.has('ir')) financingOpen.value = true
  })
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function resetForm() {
  form.numUnits = null
  form.avgRent = null
  form.otherIncome = null
  form.vacancyRate = null
  form.totalExpenses = null
  form.expensePct = null
  form.purchasePrice = null
  form.downPaymentPct = null
  form.interestRate = null
  form.loanTermYears = 30
  form.closingCosts = null
  form.reserves = null
  form.targetNOI = null
  form.targetCapRate = null
  form.reverseExpensePct = null
  Object.keys(form.expenses).forEach(k => { form.expenses[k] = null })
  expenseMode.value = 'amount'
  calcMode.value = 'analyze'
  financingOpen.value = false
  vacancyAffectsOtherIncome.value = false
  shareSuccess.value = false
  openFaq.value = null
  scenariosOpen.value = false
  showSensitivity.value = false
}

function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
}

function formatCurrency(val) {
  if (!val && val !== 0) return '$0'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)
}

async function shareResult() {
  const params = buildShareParams()
  const url = `${window.location.origin}${window.location.pathname}${params ? '?' + params : ''}`
  try {
    await navigator.clipboard.writeText(url)
    shareSuccess.value = true
    setTimeout(() => { shareSuccess.value = false }, 3000)
  } catch {
    const el = document.createElement('input')
    el.value = url
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    shareSuccess.value = true
    setTimeout(() => { shareSuccess.value = false }, 3000)
  }
}

// ─── PDF EXPORT ──────────────────────────────────────────────────────────────
async function exportPDF() {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF()

  const navy = [30, 58, 95]
  const gold = [245, 158, 11]
  const gray = [107, 114, 128]

  // Header
  doc.setFillColor(...navy)
  doc.rect(0, 0, 210, 40, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(22)
  doc.setFont('helvetica', 'bold')
  doc.text('RealCalc', 20, 20)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.text('Multifamily Property Analysis Report', 20, 30)
  doc.setFontSize(9)
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 130, 20)

  // Hero block — mode-aware
  let heroValue, heroLabel, heroSub
  if (calcMode.value === 'find-rent') {
    heroValue = requiredRentResult.value ? formatCurrency(requiredRentResult.value) + '/mo' : '—'
    heroLabel = 'REQUIRED RENT PER UNIT'
    heroSub = `To generate ${formatCurrency(Number(form.targetNOI))} NOI/yr`
  } else if (calcMode.value === 'find-price') {
    heroValue = maxPriceResult.value ? formatCurrency(maxPriceResult.value) : '—'
    heroLabel = 'MAXIMUM PURCHASE PRICE'
    heroSub = `At ${form.targetCapRate}% cap rate`
  } else {
    heroValue = formatCurrency(noiCalc.value)
    heroLabel = 'NET OPERATING INCOME (Annual)'
    heroSub = `Tier: ${badge.value.label}`
  }

  doc.setFillColor(...gold)
  doc.rect(15, 50, 180, 30, 'F')
  doc.setTextColor(30, 58, 95)
  doc.setFontSize(22)
  doc.setFont('helvetica', 'bold')
  doc.text(heroValue, 105, 66, { align: 'center' })
  doc.setFontSize(9)
  doc.text(heroLabel, 105, 75, { align: 'center' })

  doc.setFontSize(10)
  doc.text(heroSub, 105, 90, { align: 'center' })

  // Breakdown
  doc.setTextColor(...navy)
  doc.setFontSize(13)
  doc.text('Financial Breakdown', 20, 105)

  const rows = [
    ['Annual Gross Rent', formatCurrency(annualGrossRent.value)],
    ['Other Income', formatCurrency(annualOtherIncome.value)],
    [`Vacancy Loss (${vacancyRateClamped.value}%)`, `-${formatCurrency(vacancyLoss.value)}`],
    ['Effective Gross Income', formatCurrency(effectiveGrossIncome.value)],
    ['Operating Expenses', `-${formatCurrency(totalExpensesCalc.value)}`],
    ['Net Operating Income (NOI)', formatCurrency(noiCalc.value)],
  ]

  if (Number(form.purchasePrice) > 0) {
    rows.push(['Purchase Price', formatCurrency(Number(form.purchasePrice))])
    rows.push(['Cap Rate', `${capRateCalc.value.toFixed(2)}%`])
  }

  if (financingOpen.value && annualDebtService.value > 0) {
    rows.push(['Annual Debt Service', `-${formatCurrency(annualDebtService.value)}`])
    rows.push(['Cash Flow After Debt', formatCurrency(cashFlowAfterDebt.value)])
    if (dscrCalc.value !== null) rows.push(['DSCR', `${dscrCalc.value.toFixed(2)}x`])
    if (cocReturn.value !== null) rows.push(['Cash-on-Cash Return', `${cocReturn.value.toFixed(2)}%`])
  }

  if (breakEvenOccupancy.value !== null) rows.push(['Break-even Occupancy', `${breakEvenOccupancy.value.toFixed(0)}%`])
  rows.push(['Expense Ratio', `${expenseRatioCalc.value.toFixed(0)}%`])
  if (Number(form.numUnits) > 0 && Number(form.purchasePrice) > 0) {
    rows.push(['Price Per Unit', formatCurrency(Number(form.purchasePrice) / Number(form.numUnits))])
  }

  let y = 112
  rows.forEach((row, i) => {
    if (i % 2 === 0) {
      doc.setFillColor(248, 250, 252)
      doc.rect(15, y - 5, 180, 10, 'F')
    }
    doc.setTextColor(...gray)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.text(row[0], 20, y)
    doc.setTextColor(...navy)
    doc.setFont('helvetica', 'bold')
    doc.text(row[1], 190, y, { align: 'right' })
    y += 10
  })

  // Footer
  doc.setFillColor(...navy)
  doc.rect(0, 280, 210, 17, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text('arvcalc.com — For informational purposes only. Not financial advice.', 105, 290, { align: 'center' })

  doc.save(`multifamily-analysis-${Date.now()}.pdf`)
}

// ─── SCENARIO SAVE / EMAIL CAPTURE ───────────────────────────────────────────
const showEmailModal = ref(false)

const currentScenarioResult = computed(() => {
  if (!hasResult.value) return undefined
  return {
    primaryMetric: 'NOI',
    primaryValue: formatCurrency(noiCalc.value),
    badgeLabel: badge.value?.label,
    badgeColor: badge.value?.bg1,
    noi: noiCalc.value,
    capRate: capRateCalc.value,
    grossIncome: totalGrossIncome.value,
    totalExpenses: totalExpensesCalc.value,
    vacancyRate: vacancyRateClamped.value,
    purchasePrice: Number(form.purchasePrice) || undefined,
    cashOnCash: cocReturn.value ?? undefined,
    dscr: dscrCalc.value ?? undefined,
    annualCashFlow: (financingOpen.value && annualDebtService.value > 0)
      ? cashFlowAfterDebt.value : undefined,
    pricePerUnit: Number(form.numUnits) > 0 && Number(form.purchasePrice) > 0
      ? Number(form.purchasePrice) / Number(form.numUnits) : undefined,
    expenseRatio: expenseRatioCalc.value,
    breakEvenOccupancy: breakEvenOccupancy.value,
  }
})

const triggerScenarioSave = ref(false)

function openSaveScenario() {
  triggerScenarioSave.value = true
  nextTick(() => { triggerScenarioSave.value = false })
  try {
    if (!localStorage.getItem('realcalc_email_captured')) {
      showEmailModal.value = true
    }
  } catch {}
}

function onScenarioSaved(_id) {}

function onEmailCaptured(email) {
  showEmailModal.value = false
}
</script>

<style>
.calc-mode-tabs {
  @apply grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-gray-100;
}
.calc-mode-tab {
  @apply px-3 py-2.5 rounded-xl text-center cursor-pointer transition-all;
}
.calc-mode-tab-active {
  @apply bg-white shadow-sm border border-gray-200;
}
.calc-mode-tab-inactive {
  @apply hover:bg-white/60;
}
.calc-section-header {
  @apply px-4 py-3 flex items-center;
}
.calc-section-title {
  @apply text-sm font-bold text-gray-800;
}
</style>
