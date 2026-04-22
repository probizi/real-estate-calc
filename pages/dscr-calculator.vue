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
            <NuxtLink to="/blog" class="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Blog</NuxtLink>
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
         BREADCRUMB
    ═══════════════════════════════════════════════ -->
    <div class="bg-white border-b border-gray-100 px-4 py-3">
      <div class="max-w-[1100px] mx-auto">
        <nav aria-label="Breadcrumb">
          <ol class="flex items-center gap-2 text-sm text-gray-400">
            <li><NuxtLink to="/" class="hover:text-gray-600 transition">Home</NuxtLink></li>
            <li><span>/</span></li>
            <li><NuxtLink to="/calculators" class="hover:text-gray-600 transition">Calculators</NuxtLink></li>
            <li><span>/</span></li>
            <li class="text-gray-700 font-semibold">DSCR Calculator</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         H1 + ON THIS PAGE NAV
    ═══════════════════════════════════════════════ -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-6">
        <div class="mb-4">
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            DSCR Calculator — Debt Service Coverage Ratio Tool for US Real Estate Investors
          </h1>
        </div>
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            <li><a href="#what-is-dscr" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is DSCR</a></li>
            <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Your Result Means</a></li>
            <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
            <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
            <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Applications</a></li>
            <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Industry Standards</a></li>
            <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
            <li><a href="#common-mistakes" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Common Mistakes</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
          </ul>
          <div class="md:hidden">
            <ul class="flex flex-col gap-y-2">
              <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
              <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
              <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            </ul>
            <ul v-show="isNavExpanded" class="flex flex-col gap-y-2 mt-2">
              <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
              <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
              <li><a href="#what-is-dscr" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is DSCR</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Your Result Means</a></li>
              <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
              <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
              <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Industry Standards</a></li>
              <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
            </ul>
            <button @click="isNavExpanded = !isNavExpanded"
              class="mt-2 flex items-center gap-1 text-xs font-bold transition" style="color: #b45309;">
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
         MOBILE LIVE RESULT BAR
    ═══════════════════════════════════════════════ -->
    <div class="lg:hidden sticky top-[4.5rem] z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <div class="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          <span v-if="calcMode === 'property'">DSCR</span>
          <span v-else-if="calcMode === 'dscr-loan'">DSCR Loan</span>
          <span v-else-if="calcMode === 'find-loan'">Max Loan</span>
          <span v-else>Required NOI</span>
        </div>
        <div class="flex items-center gap-3">
          <!-- property mode -->
          <template v-if="calcMode === 'property'">
            <span v-if="hasResult" class="text-2xl font-extrabold leading-none" :style="`color: ${badge.bg1}`">
              {{ dscrDisplay }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="hasResult" class="text-xs font-bold px-2.5 py-1 rounded-full text-white" :style="`background: ${badge.bg1}`">{{ badge.label }}</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <!-- dscr-loan mode -->
          <template v-else-if="calcMode === 'dscr-loan'">
            <span v-if="hasResult" class="text-2xl font-extrabold leading-none text-teal-600">{{ dscrDisplay }}</span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="hasResult" class="text-xs font-bold px-2.5 py-1 rounded-full text-white" :style="`background: ${badge.bg1}`">{{ badge.label }}</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <!-- find-loan mode -->
          <template v-else-if="calcMode === 'find-loan'">
            <span v-if="hasResult" class="text-xl font-extrabold leading-none text-blue-700">{{ formatCurrency(findLoanResult) }}</span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="hasResult" class="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">Max Loan</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <!-- find-noi mode -->
          <template v-else>
            <span v-if="hasResult" class="text-xl font-extrabold leading-none text-emerald-700">{{ formatCurrency(findNOIResult) }}</span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="hasResult" class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">Required NOI</span>
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

      <!-- MODE SELECTOR -->
      <div class="border-b border-gray-100 rounded-t-2xl bg-white">
        <div class="px-5 pt-4 pb-3">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">What do you want to calculate?</p>
          <div class="calc-mode-tabs">
            <!-- Mode 1: Property DSCR -->
            <button @click="calcMode = 'property'" class="calc-mode-tab"
              :class="calcMode === 'property' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'property' ? 'color:#1e3a5f;' : ''">Property DSCR</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'property' ? 'text-amber-700' : 'text-gray-400'">NOI ÷ Debt Service</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'property' ? 'bg-amber-100 text-amber-800' : 'bg-gray-200 text-gray-400'">Standard</span>
            </button>
            <!-- Mode 2: DSCR Loan -->
            <button @click="calcMode = 'dscr-loan'" class="calc-mode-tab"
              :class="calcMode === 'dscr-loan' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'dscr-loan' ? 'color:#0f766e;' : ''">DSCR Loan</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'dscr-loan' ? 'text-teal-700' : 'text-gray-400'">Rent ÷ PITIA</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'dscr-loan' ? 'bg-teal-100 text-teal-800' : 'bg-gray-200 text-gray-400'">Non-QM</span>
            </button>
            <!-- Mode 3: Find Max Loan -->
            <button @click="calcMode = 'find-loan'" class="calc-mode-tab"
              :class="calcMode === 'find-loan' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-loan' ? 'color:#1e40af;' : ''">Find Max Loan</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-loan' ? 'text-blue-700' : 'text-gray-400'">NOI → Loan Amount</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-loan' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
            <!-- Mode 4: Find Required NOI -->
            <button @click="calcMode = 'find-noi'" class="calc-mode-tab"
              :class="calcMode === 'find-noi' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-noi' ? 'color:#065f46;' : ''">Find Required NOI</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-noi' ? 'text-emerald-700' : 'text-gray-400'">Loan → Min NOI</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-noi' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
          </div>
          <!-- Mode descriptions -->
          <div class="mt-2.5">
            <p v-if="calcMode === 'property'" class="text-xs text-gray-500 leading-relaxed">
              Standard Property DSCR — enter income, expenses, and loan details. Used for commercial and agency multifamily loans (Fannie Mae, Freddie Mac, CMBS).
            </p>
            <p v-else-if="calcMode === 'dscr-loan'" class="text-xs text-teal-700 leading-relaxed bg-teal-50 px-3 py-1.5 rounded-lg">
              DSCR Loan (non-QM) — enter <strong>monthly rent vs PITIA</strong>. Used for investor loans that don't require personal income documentation.
            </p>
            <p v-else-if="calcMode === 'find-loan'" class="text-xs text-blue-700 leading-relaxed bg-blue-50 px-3 py-1.5 rounded-lg">
              Reverse: enter NOI and loan terms — the calculator finds the <strong>maximum loan amount</strong> that still meets your target DSCR.
            </p>
            <p v-else class="text-xs text-emerald-700 leading-relaxed bg-emerald-50 px-3 py-1.5 rounded-lg">
              Reverse: enter loan details — the calculator finds the <strong>minimum NOI required</strong> to service the debt at your target DSCR.
            </p>
          </div>
        </div>
      </div>

      <!-- TWO-COLUMN BODY -->
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch">

        <!-- ── INPUTS (left column) ── -->
        <div class="calc-inputs border-b lg:border-b-0 lg:border-r border-gray-200 bg-white min-w-0">

          <!-- INCOME SECTION — property & find-loan modes -->
          <div v-if="calcMode === 'property' || calcMode === 'find-loan'" class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Income</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="gross-rental-income" class="block text-xs font-semibold text-gray-700 mb-1">
                  Gross Rental Income <span class="text-gray-400 font-normal">(annual)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="gross-rental-income" v-model="form.grossRentalIncome" type="number" min="0" step="100"
                    placeholder="Enter total yearly rental income"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Total annual rent from all units (pre-vacancy, pre-expense)</p>
              </div>
              <div>
                <label for="vacancy-rate" class="block text-xs font-semibold text-gray-700 mb-1">
                  Vacancy Rate <span class="text-gray-400 font-normal">(typical: 5–10%)</span>
                </label>
                <div class="relative">
                  <input id="vacancy-rate" v-model="form.vacancyRate" type="number" min="0" max="100" step="0.5"
                    placeholder="Enter expected vacancy percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
                <p v-if="vacancyRateClamped > 15" class="text-xs text-amber-600 mt-1">High vacancy — lenders may apply additional haircut above 15%.</p>
              </div>
              <div>
                <label for="other-income" class="block text-xs font-semibold text-gray-700 mb-1">
                  Other Income <span class="text-gray-400 font-normal">(annual, optional)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="other-income" v-model="form.otherIncome" type="number" min="0" step="100"
                    placeholder="Enter annual other income"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div v-if="egi > 0" class="p-2.5 rounded-xl text-xs font-medium text-blue-800 bg-blue-50 border border-blue-100">
                EGI: <strong>{{ formatCurrency(egi) }}</strong>
                <span class="text-blue-500 ml-1">({{ formatCurrency(grossRentalIncomeCalc) }} − {{ formatCurrency(vacancyLoss) }} vac + {{ formatCurrency(otherIncomeCalc) }} other)</span>
              </div>
            </div>
          </div>

          <!-- EXPENSES SECTION — property & find-loan modes -->
          <div v-if="calcMode === 'property' || calcMode === 'find-loan'" class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Annual Operating Expenses</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <p id="expense-mode-label" class="sr-only">Expense entry mode</p>
                <div class="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-xl w-fit shadow-sm" role="group" aria-labelledby="expense-mode-label">
                  <button @click="expenseMode = 'simple'"
                    :class="expenseMode === 'simple' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">Simple</button>
                  <button @click="expenseMode = 'detailed'"
                    :class="expenseMode === 'detailed' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">Detailed</button>
                </div>
              </div>
              <!-- Simple -->
              <div v-if="expenseMode === 'simple'">
                <label for="operating-expenses" class="block text-xs font-semibold text-gray-700 mb-1">
                  Total Annual Operating Expenses
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="operating-expenses" v-model="form.operatingExpenses" type="number" min="0" step="100"
                    placeholder="Enter total yearly operating expenses"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Excludes mortgage payments. Rule of thumb: 35–50% of EGI.
                  <span v-if="egi > 0" class="text-gray-500"> For this income: {{ formatCurrency(egi * 0.35) }}–{{ formatCurrency(egi * 0.50) }}/yr.</span>
                </p>
              </div>
              <!-- Detailed -->
              <div v-if="expenseMode === 'detailed'" class="space-y-2.5">
                <p class="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">All fields are <strong>annual</strong>. NOI excludes mortgage/debt service.</p>
                <div v-for="exp in expenseFields" :key="exp.key">
                  <label :for="`dexp-${exp.key}`" class="block text-xs font-semibold text-gray-600 mb-1">{{ exp.label }}</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input :id="`dexp-${exp.key}`" v-model="form.expenses[exp.key]" type="number" min="0" step="100"
                      :placeholder="exp.placeholder"
                      class="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition" />
                  </div>
                </div>
                <div class="pt-2 border-t border-gray-100 flex justify-between items-center text-sm">
                  <span class="text-gray-500 font-medium">Total Expenses</span>
                  <span class="font-bold text-gray-900">{{ formatCurrency(detailedTotalExpenses) }}</span>
                </div>
              </div>
              <div v-if="noi !== null && egi > 0 && totalExpensesCalc > 0" class="p-2.5 rounded-xl text-xs font-medium bg-gray-50 border border-gray-100">
                <span class="text-gray-500">NOI = </span>
                <span class="font-bold" :class="noi >= 0 ? 'text-green-700' : 'text-red-700'">{{ formatCurrency(noi) }}</span>
                <span class="text-gray-400 ml-1">(EGI {{ formatCurrency(egi) }} − expenses {{ formatCurrency(totalExpensesCalc) }})</span>
              </div>
            </div>
          </div>

          <!-- RENT SECTION — dscr-loan mode -->
          <div v-if="calcMode === 'dscr-loan'" class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Monthly Rent</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="monthly-rent" class="block text-xs font-semibold text-gray-700 mb-1">
                  Monthly Rent
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="monthly-rent" v-model="form.monthlyRent" type="number" min="0" step="50"
                    placeholder="Enter monthly rent"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Current monthly rent from lease or market rent estimate</p>
              </div>
            </div>
          </div>

          <!-- PITIA SECTION — dscr-loan mode -->
          <div v-if="calcMode === 'dscr-loan'" class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Monthly PITIA Components</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <p class="text-xs text-teal-700 bg-teal-50 border border-teal-200 rounded-lg px-3 py-2">
                <strong>P&amp;I is auto-calculated</strong> from your loan inputs below. Enter taxes, insurance, and HOA manually.
              </p>
              <div>
                <label for="monthly-tax" class="block text-xs font-semibold text-gray-700 mb-1">Monthly Property Tax</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="monthly-tax" v-model="form.monthlyPropertyTax" type="number" min="0" step="25"
                    placeholder="Enter monthly property tax"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Annual tax bill ÷ 12, or county records</p>
              </div>
              <div>
                <label for="monthly-insurance" class="block text-xs font-semibold text-gray-700 mb-1">Monthly Insurance</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="monthly-insurance" v-model="form.monthlyInsurance" type="number" min="0" step="25"
                    placeholder="Enter monthly insurance"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div>
                <label for="monthly-hoa" class="block text-xs font-semibold text-gray-700 mb-1">
                  Monthly HOA <span class="text-gray-400 font-normal">(optional)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="monthly-hoa" v-model="form.monthlyHOA" type="number" min="0" step="25"
                    placeholder="Enter monthly HOA"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div>
                <label for="monthly-assoc" class="block text-xs font-semibold text-gray-700 mb-1">
                  Monthly Association Fees <span class="text-gray-400 font-normal">(optional, condo/PUD)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="monthly-assoc" v-model="form.monthlyAssociation" type="number" min="0" step="25"
                    placeholder="Enter monthly association fee"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
            </div>
          </div>

          <!-- FINANCING SECTION — all modes -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">
                <span v-if="calcMode === 'find-loan'">Loan Terms (Rate &amp; Term Only)</span>
                <span v-else>Financing</span>
              </h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">

              <!-- Loan Amount — NOT shown in find-loan mode -->
              <div v-if="calcMode !== 'find-loan'">
                <label class="block text-xs font-semibold text-gray-700 mb-1">Loan Amount</label>
                <div class="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-xl w-fit shadow-sm mb-2">
                  <button @click="loanInputMode = 'direct'"
                    :class="loanInputMode === 'direct' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-3 py-1.5 rounded-lg text-xs transition font-medium">Direct Amount</button>
                  <button @click="loanInputMode = 'ltv'"
                    :class="loanInputMode === 'ltv' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-3 py-1.5 rounded-lg text-xs transition font-medium">Price + LTV</button>
                </div>
                <div v-if="loanInputMode === 'direct'">
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model="form.loanAmount" type="number" min="0" step="5000"
                      placeholder="Enter loan amount"
                      class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div v-else class="space-y-2">
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model="form.purchasePrice" type="number" min="0" step="5000"
                      placeholder="Enter property purchase price"
                      class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                  <div class="relative">
                    <input v-model="form.downPaymentPct" type="number" min="0" max="100" step="1"
                      placeholder="Enter down payment percentage"
                      class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                  <div v-if="loanAmountCalc > 0" class="text-xs text-gray-500 font-medium">
                    Loan: <strong class="text-gray-800">{{ formatCurrency(loanAmountCalc) }}</strong>
                    <span class="text-gray-400"> ({{ (100 - (Number(form.downPaymentPct) || 0)).toFixed(0) }}% LTV)</span>
                  </div>
                </div>
                <p v-if="ltvPercent > 80" class="text-xs text-amber-600 mt-1">LTV above 80% — unusual for investment property. Verify loan product availability.</p>
              </div>

              <!-- Interest Rate -->
              <div>
                <label for="interest-rate" class="block text-xs font-semibold text-gray-700 mb-1">
                  Interest Rate <span class="text-gray-400 font-normal">(annual, 2026 typical: 7.5–8%)</span>
                </label>
                <div class="relative">
                  <input id="interest-rate" v-model="form.interestRate" type="number" min="0" max="30" step="0.125"
                    placeholder="Enter annual loan interest rate"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
              </div>

              <!-- Loan Term -->
              <div>
                <label for="loan-term" class="block text-xs font-semibold text-gray-700 mb-1">Loan Term</label>
                <select id="loan-term" v-model="form.loanTermYears"
                  class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition">
                  <option :value="15">15 years</option>
                  <option :value="20">20 years</option>
                  <option :value="25">25 years</option>
                  <option :value="30">30 years</option>
                </select>
              </div>

              <!-- Computed P&I hint (dscr-loan) -->
              <div v-if="calcMode === 'dscr-loan' && loanAmountCalc > 0 && interestRateCalc > 0" class="p-2.5 rounded-xl text-xs bg-teal-50 border border-teal-100 text-teal-800">
                <span class="font-semibold">P&amp;I (auto-calculated):</span>
                <strong class="ml-1">{{ formatCurrency(monthlyPayment) }}/mo</strong>
                <span class="text-teal-600 ml-1">({{ formatCurrency(loanAmountCalc) }} loan @ {{ interestRateCalc }}%, {{ form.loanTermYears }}yr)</span>
              </div>

            </div>
          </div>

          <!-- TARGET DSCR — find-loan & find-noi modes -->
          <div v-if="calcMode === 'find-loan' || calcMode === 'find-noi'" class="border-b border-gray-100">
            <div class="calc-section-header">
              <div>
                <h2 class="calc-section-title">Target DSCR</h2>
                <p class="text-xs mt-0.5 ml-3"
                  :class="calcMode === 'find-loan' ? 'text-blue-600' : 'text-emerald-600'">
                  {{ calcMode === 'find-loan' ? 'Min DSCR to qualify — 1.25x is the common agency threshold' : 'Required DSCR for loan qualification' }}
                </p>
              </div>
            </div>
            <div class="px-4 py-3">
              <div class="relative">
                <input v-model="form.targetDSCR" type="number" min="0.5" max="3" step="0.05"
                  placeholder="Enter target DSCR coverage ratio"
                  class="w-full pr-8 pl-4 py-2 rounded-xl border outline-none text-gray-900 font-bold text-base transition bg-white"
                  :class="calcMode === 'find-loan'
                    ? 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/20'
                    : 'border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20'" />
                <span class="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">x</span>
              </div>
              <p class="text-xs text-gray-400 mt-1.5 leading-relaxed">
                Industry benchmarks: 1.25x (Fannie/Freddie conventional) · 1.15x (Fannie MAH) · 1.10x (DSCR loan standard) · 1.00x (DSCR loan minimum)
              </p>
            </div>
          </div>

          <!-- Reset -->
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

          <!-- Main Result Card -->
          <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">

            <!-- PRIMARY RESULT — mode aware -->

            <!-- MODE: Property DSCR -->
            <div v-if="calcMode === 'property'" class="px-5 py-5 border-b border-gray-100 bg-white">
              <p class="text-xs font-semibold uppercase tracking-wide mb-2 text-gray-400">Property DSCR</p>
              <div class="font-extrabold leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full transition-all mb-3"
                :class="[hasResult ? 'text-6xl' : 'text-6xl text-gray-200']"
                :style="hasResult ? `color: ${badge.bg1}` : ''">
                {{ hasResult ? dscrDisplay : '—' }}
              </div>
              <div v-if="hasResult"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-xs text-white"
                :style="`background: ${badge.bg1}`">
                <span class="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                {{ badge.label }}
              </div>
              <div v-else class="text-sm text-gray-300">Enter income, expenses &amp; loan details</div>
            </div>

            <!-- MODE: DSCR Loan -->
            <div v-else-if="calcMode === 'dscr-loan'" class="px-5 py-5 border-b border-gray-100 bg-white">
              <p class="text-xs font-semibold uppercase tracking-wide mb-2 text-gray-400">DSCR Loan (Rent ÷ PITIA)</p>
              <div class="font-extrabold leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full transition-all mb-3 text-6xl"
                :style="hasResult ? `color: ${badge.bg1}` : 'color:#e5e7eb;'">
                {{ hasResult ? dscrDisplay : '—' }}
              </div>
              <div v-if="hasResult"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-xs text-white"
                :style="`background: ${badge.bg1}`">
                <span class="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                {{ badge.label }}
              </div>
              <div v-else class="text-sm text-gray-300">Enter rent, PITIA components &amp; loan details</div>
            </div>

            <!-- MODE: Find Max Loan -->
            <div v-else-if="calcMode === 'find-loan'" class="px-5 py-5 border-b border-gray-100 bg-white">
              <p class="text-xs font-semibold uppercase tracking-wide mb-1 text-gray-400">Max Loan Amount</p>
              <p class="text-xs mb-2 text-gray-400">
                {{ hasResult ? `at ${Number(form.targetDSCR) || 1.25}x DSCR, ${interestRateCalc}%, ${form.loanTermYears}yr` : 'NOI ÷ Target DSCR → Loan' }}
              </p>
              <div class="font-extrabold mb-3 leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full"
                :class="hasResult ? 'text-5xl' : 'text-5xl text-gray-200'"
                :style="hasResult ? 'color:#1e40af;' : ''">
                {{ hasResult ? formatCurrency(findLoanResult) : '—' }}
              </div>
              <div v-if="hasResult" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold text-xs bg-blue-100 text-blue-800">
                DSCR = {{ (Number(form.targetDSCR) || 1.25).toFixed(2) }}x (at target)
              </div>
              <div v-else class="text-sm text-gray-300">Enter income, expenses &amp; loan terms</div>
            </div>

            <!-- MODE: Find Required NOI -->
            <div v-else class="px-5 py-5 border-b border-gray-100 bg-white">
              <p class="text-xs font-semibold uppercase tracking-wide mb-1 text-gray-400">Required Annual NOI</p>
              <p class="text-xs mb-2 text-gray-400">
                {{ hasResult ? `to service ${formatCurrency(loanAmountCalc)} at ${(Number(form.targetDSCR) || 1.25).toFixed(2)}x DSCR` : 'Loan + Rate + Term → Min NOI' }}
              </p>
              <div class="font-extrabold mb-3 leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full"
                :class="hasResult ? 'text-5xl' : 'text-5xl text-gray-200'"
                :style="hasResult ? 'color:#065f46;' : ''">
                {{ hasResult ? formatCurrency(findNOIResult) : '—' }}
              </div>
              <div v-if="hasResult" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold text-xs bg-emerald-100 text-emerald-800">
                DSCR = {{ (Number(form.targetDSCR) || 1.25).toFixed(2) }}x (target)
              </div>
              <div v-else class="text-sm text-gray-300">Enter loan amount, rate &amp; term</div>
            </div>

            <!-- Warnings -->
            <div v-if="warnings.length > 0" class="px-5 pt-4 pb-1 space-y-2" role="region" aria-label="Warnings">
              <div v-for="(w, i) in warnings" :key="i"
                class="flex items-start gap-2.5 p-3 rounded-xl text-sm"
                :class="w.type === 'error' ? 'bg-red-50 border border-red-200 text-red-800' : 'bg-amber-50 border border-amber-200 text-amber-800'"
                role="alert">
                <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path v-if="w.type === 'error'" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                  <path v-else fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
                <span class="font-medium leading-snug">{{ w.msg }}</span>
              </div>
            </div>

            <!-- Breakdown — Property mode -->
            <div v-if="(calcMode === 'property' || calcMode === 'find-loan') && hasResult" class="p-5 space-y-2">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
                {{ calcMode === 'find-loan' ? 'NOI Breakdown' : 'Breakdown' }}
              </h3>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50 text-sm">
                <span class="text-gray-500">Gross Rental Income</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(grossRentalIncomeCalc) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50 text-sm">
                <span class="text-gray-500">Vacancy Loss ({{ vacancyRateClamped }}%)</span>
                <span class="font-semibold text-red-500">−{{ formatCurrency(vacancyLoss) }}</span>
              </div>
              <div v-if="otherIncomeCalc > 0" class="flex justify-between items-center py-1.5 border-b border-gray-50 text-sm">
                <span class="text-gray-500">Other Income</span>
                <span class="font-semibold text-green-600">+{{ formatCurrency(otherIncomeCalc) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50 text-sm">
                <span class="text-gray-500">EGI</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(egi) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50 text-sm">
                <span class="text-gray-500">Operating Expenses</span>
                <span class="font-semibold text-red-500">−{{ formatCurrency(totalExpensesCalc) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-100 text-sm font-bold">
                <span class="text-gray-700">Net Operating Income</span>
                <span :class="noi >= 0 ? 'text-green-600' : 'text-red-600'">{{ formatCurrency(noi) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50 text-sm">
                <span class="text-gray-500">Monthly Payment</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(monthlyPayment) }}/mo</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50 text-sm">
                <span class="text-gray-500">Annual Debt Service</span>
                <span class="font-semibold text-red-500">−{{ formatCurrency(annualDebtService) }}</span>
              </div>
              <!-- DSCR formula box -->
              <div class="mt-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <p class="text-xs text-center text-gray-500 font-medium">
                  DSCR = {{ formatCurrency(noi) }} ÷ {{ formatCurrency(annualDebtService) }} =
                  <span :style="`color: ${badge.bg1};`" class="font-bold">
                    {{ calcMode === 'find-loan' ? (Number(form.targetDSCR) || 1.25).toFixed(2) + 'x' : dscrDisplay }}
                  </span>
                </p>
              </div>
              <!-- NOI Bar visualization -->
              <div v-if="calcMode === 'property' && hasResult && annualDebtService > 0" class="mt-3">
                <h4 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">NOI Allocation</h4>
                <div class="flex h-5 rounded-lg overflow-hidden w-full" style="background: #f1f5f9;">
                  <div title="Annual Debt Service"
                    class="transition-all duration-300 flex-shrink-0"
                    :style="`width: ${Math.min(100, (annualDebtService / Math.max(noi, annualDebtService)) * 100)}%; background: #60a5fa;`"></div>
                  <div v-if="noi > annualDebtService" title="DSCR Cushion"
                    class="transition-all duration-300 flex-shrink-0"
                    :style="`width: ${((noi - annualDebtService) / noi) * 100}%; background: #34d399;`"></div>
                </div>
                <div class="flex flex-wrap gap-x-4 gap-y-1 mt-1.5">
                  <span class="flex items-center gap-1.5 text-xs text-gray-500">
                    <span class="inline-block w-2.5 h-2.5 rounded-sm bg-blue-400 flex-shrink-0"></span>
                    Debt Service
                  </span>
                  <span v-if="noi > annualDebtService" class="flex items-center gap-1.5 text-xs text-gray-500">
                    <span class="inline-block w-2.5 h-2.5 rounded-sm bg-emerald-400 flex-shrink-0"></span>
                    DSCR Cushion
                  </span>
                  <span v-else class="flex items-center gap-1.5 text-xs text-red-500 font-semibold">Debt exceeds NOI (shortfall)</span>
                </div>
              </div>
            </div>

            <!-- Breakdown — DSCR Loan mode -->
            <div v-if="calcMode === 'dscr-loan' && hasResult" class="p-5 space-y-2">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">PITIA Breakdown</h3>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50 text-sm">
                <span class="text-gray-500">Monthly Rent</span>
                <span class="font-bold text-gray-900">{{ formatCurrency(Number(form.monthlyRent) || 0) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50 text-sm">
                <span class="text-gray-500">P&amp;I (auto)</span>
                <span class="font-semibold text-red-400">−{{ formatCurrency(monthlyPayment) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50 text-sm">
                <span class="text-gray-500">Taxes</span>
                <span class="font-semibold text-red-400">−{{ formatCurrency(Number(form.monthlyPropertyTax) || 0) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50 text-sm">
                <span class="text-gray-500">Insurance</span>
                <span class="font-semibold text-red-400">−{{ formatCurrency(Number(form.monthlyInsurance) || 0) }}</span>
              </div>
              <div v-if="(Number(form.monthlyHOA) || 0) + (Number(form.monthlyAssociation) || 0) > 0" class="flex justify-between items-center py-1.5 border-b border-gray-50 text-sm">
                <span class="text-gray-500">HOA / Association</span>
                <span class="font-semibold text-red-400">−{{ formatCurrency((Number(form.monthlyHOA) || 0) + (Number(form.monthlyAssociation) || 0)) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-100 text-sm font-bold">
                <span class="text-gray-700">Total PITIA</span>
                <span class="text-red-600">−{{ formatCurrency(totalPITIA) }}</span>
              </div>
              <div class="mt-2 p-3 rounded-xl bg-teal-50 border border-teal-100">
                <p class="text-xs text-center text-teal-700 font-medium">
                  DSCR = {{ formatCurrency(Number(form.monthlyRent) || 0) }} ÷ {{ formatCurrency(totalPITIA) }} = <strong>{{ dscrDisplay }}</strong>
                </p>
              </div>
            </div>

            <!-- Breakdown — Find Required NOI mode -->
            <div v-if="calcMode === 'find-noi' && hasResult" class="p-5 space-y-2">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">What you need to reach {{ (Number(form.targetDSCR) || 1.25).toFixed(2) }}x DSCR</h3>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50 text-sm">
                <span class="text-gray-500">Loan Amount</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(loanAmountCalc) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50 text-sm">
                <span class="text-gray-500">Monthly Payment</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(monthlyPayment) }}/mo</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50 text-sm">
                <span class="text-gray-500">Annual Debt Service</span>
                <span class="font-semibold text-red-500">{{ formatCurrency(annualDebtService) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50 text-sm">
                <span class="text-gray-500">Target DSCR</span>
                <span class="font-semibold text-emerald-700">{{ (Number(form.targetDSCR) || 1.25).toFixed(2) }}x</span>
              </div>
              <div class="flex justify-between items-center py-2 text-sm font-bold">
                <span class="text-gray-800">Required NOI = ADS × Target DSCR</span>
                <span class="text-emerald-700 text-base">{{ formatCurrency(findNOIResult) }}</span>
              </div>
              <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                <p class="text-xs text-center text-emerald-700 font-medium">
                  {{ formatCurrency(annualDebtService) }} × {{ (Number(form.targetDSCR) || 1.25).toFixed(2) }} = <strong>{{ formatCurrency(findNOIResult) }}</strong>
                </p>
                <p class="text-xs text-center text-gray-400 mt-1 italic">NOI = Net Operating Income before debt service</p>
              </div>
              <div class="mt-2 pt-2 border-t border-gray-100">
                <div class="flex justify-between items-center text-sm">
                  <span class="text-gray-500">≈ Monthly NOI needed</span>
                  <span class="font-semibold text-gray-700">{{ formatCurrency(findNOIResult / 12) }}/mo</span>
                </div>
              </div>
            </div>

            <!-- Deal Context (property & dscr-loan modes) -->
            <div v-if="(calcMode === 'property' || calcMode === 'dscr-loan') && hasResult && dscr !== null"
              class="px-5 py-4 border-t border-gray-100"
              :style="`background: ${badge.bg1}10;`">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-bold px-2.5 py-0.5 rounded-full text-white" :style="`background: ${badge.bg1}`">
                  {{ badge.label }}
                </span>
                <span class="text-xs font-semibold text-gray-400 uppercase tracking-wide">Deal context</span>
              </div>
              <p class="text-sm leading-relaxed font-medium text-gray-700">{{ insightText }}</p>
            </div>

            <!-- Lender Context Panel -->
            <div v-if="hasResult && (calcMode === 'property' || calcMode === 'dscr-loan') && dscr !== null" class="border-t border-gray-100 p-5">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Lender Context</h3>
              <p class="text-xs text-gray-500 mb-3">DSCR: <strong class="text-gray-800">{{ dscrDisplay }}</strong> — Meets typical DSCR threshold for:</p>
              <ul class="space-y-1.5">
                <li v-for="prog in lenderPrograms" :key="prog.label" class="flex items-center gap-2 text-xs">
                  <span class="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 font-bold"
                    :class="prog.meets ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'">
                    {{ prog.meets ? '✓' : '✗' }}
                  </span>
                  <span :class="prog.meets ? 'text-gray-700 font-medium' : 'text-gray-400'">
                    {{ prog.label }} <span class="text-gray-400 font-normal">({{ prog.threshold }}x min)</span>
                  </span>
                </li>
              </ul>
              <div v-if="stressedDSCR1 !== null" class="mt-3 pt-3 border-t border-gray-100">
                <p class="text-xs text-gray-500 mb-1.5">Stressed DSCR (+1% rate): <strong class="text-gray-800">{{ stressedDSCR1.toFixed(2) }}x</strong></p>
                <ul class="space-y-1">
                  <li v-for="prog in lenderProgramsStressed" :key="prog.label" class="flex items-center gap-2 text-xs">
                    <span class="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 font-bold"
                      :class="prog.meets ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'">
                      {{ prog.meets ? '✓' : '✗' }}
                    </span>
                    <span :class="prog.meets ? 'text-gray-600' : 'text-gray-400'" class="text-xs">
                      {{ prog.label }} after stress
                    </span>
                  </li>
                </ul>
              </div>
              <p class="text-xs text-gray-400 mt-3 italic leading-relaxed">
                Note: Meeting the DSCR threshold is necessary but not sufficient for approval. Final approval also depends on LTV, reserves, property condition, sponsor experience, and loan-specific underwriting requirements.
              </p>
            </div>

            <!-- 3 Key Metrics -->
            <div v-if="hasResult" class="border-t border-gray-100 p-5">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Key Metrics</h3>
              <div class="grid grid-cols-3 gap-2">
                <!-- Metric 1: Stressed DSCR +1% -->
                <div class="rounded-xl p-3 text-center border"
                  :class="stressedDSCR1 !== null && stressedDSCR1 >= 1.25 ? 'bg-green-50 border-green-200' : stressedDSCR1 !== null && stressedDSCR1 >= 1.10 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="stressedDSCR1 !== null && stressedDSCR1 >= 1.25 ? 'text-green-600' : stressedDSCR1 !== null && stressedDSCR1 >= 1.10 ? 'text-amber-600' : 'text-red-500'">
                    Stress +1%
                  </p>
                  <p class="text-sm font-extrabold"
                    :class="stressedDSCR1 !== null && stressedDSCR1 >= 1.25 ? 'text-green-700' : stressedDSCR1 !== null && stressedDSCR1 >= 1.10 ? 'text-amber-700' : 'text-red-700'">
                    {{ stressedDSCR1 !== null ? stressedDSCR1.toFixed(2) + 'x' : '—' }}
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">DSCR @ +1%</p>
                </div>

                <!-- Metric 2: Mode-aware -->
                <div v-if="calcMode !== 'dscr-loan'" class="rounded-xl p-3 text-center border border-blue-200 bg-blue-50">
                  <p class="text-xs font-semibold text-blue-600 mb-0.5">Max Loan</p>
                  <p class="text-xs font-extrabold text-blue-800 break-all">
                    {{ maxLoanAt125 !== null ? formatCurrencyCompact(maxLoanAt125) : '—' }}
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">@ 1.25x</p>
                </div>
                <div v-else class="rounded-xl p-3 text-center border"
                  :class="rentCushion !== null && rentCushion >= 700 ? 'bg-green-50 border-green-200' : rentCushion !== null && rentCushion >= 300 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="rentCushion !== null && rentCushion >= 700 ? 'text-green-600' : rentCushion !== null && rentCushion >= 300 ? 'text-amber-600' : 'text-red-500'">
                    Rent Cushion
                  </p>
                  <p class="text-sm font-extrabold"
                    :class="rentCushion !== null && rentCushion >= 700 ? 'text-green-700' : rentCushion !== null && rentCushion >= 300 ? 'text-amber-700' : 'text-red-700'">
                    {{ rentCushion !== null ? formatCurrencyCompact(rentCushion) : '—' }}
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">Rent − PITIA</p>
                </div>

                <!-- Metric 3: Stressed DSCR +2% -->
                <div class="rounded-xl p-3 text-center border"
                  :class="stressedDSCR2 !== null && stressedDSCR2 >= 1.15 ? 'bg-green-50 border-green-200' : stressedDSCR2 !== null && stressedDSCR2 >= 1.00 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="stressedDSCR2 !== null && stressedDSCR2 >= 1.15 ? 'text-green-600' : stressedDSCR2 !== null && stressedDSCR2 >= 1.00 ? 'text-amber-600' : 'text-red-500'">
                    Stress +2%
                  </p>
                  <p class="text-sm font-extrabold"
                    :class="stressedDSCR2 !== null && stressedDSCR2 >= 1.15 ? 'text-green-700' : stressedDSCR2 !== null && stressedDSCR2 >= 1.00 ? 'text-amber-700' : 'text-red-700'">
                    {{ stressedDSCR2 !== null ? stressedDSCR2.toFixed(2) + 'x' : '—' }}
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">DSCR @ +2%</p>
                </div>
              </div>
            </div>

            <!-- Rate Sensitivity Table -->
            <div v-if="sensitivityRateRows && sensitivityRateRows.length > 0" class="border-t border-gray-100">
              <div class="px-4 pt-3 pb-1">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">DSCR at different rates</span>
                  <button v-if="!showRateSensitivity" @click="showRateSensitivity = true"
                    class="text-xs text-gray-400 hover:text-gray-600 transition">Show table ↓</button>
                  <button v-else @click="showRateSensitivity = false"
                    class="text-xs text-gray-400 hover:text-gray-600 transition">Hide ↑</button>
                </div>
                <!-- Always show +1% and +2% rows preview -->
                <div class="space-y-0.5">
                  <div v-for="row in sensitivityRateRows.slice(0, 3)" :key="row.rate"
                    class="flex justify-between items-center text-xs px-2 py-1.5 rounded-lg"
                    :class="row.isCurrent ? 'font-bold bg-amber-50 text-amber-800' : 'text-gray-600'">
                    <span>{{ row.rate }}%</span>
                    <span>{{ formatCurrency(row.payment) }}/mo</span>
                    <span class="font-semibold" :style="`color: ${dscrColor(row.dscr)}`">
                      {{ row.dscr !== null ? row.dscr.toFixed(2) + 'x' : '—' }}
                    </span>
                    <span class="text-gray-400">{{ row.tier }}</span>
                  </div>
                </div>
              </div>
              <div v-if="showRateSensitivity" class="px-4 pb-4">
                <div class="space-y-0.5">
                  <div v-for="row in sensitivityRateRows.slice(3)" :key="row.rate"
                    class="flex justify-between items-center text-xs px-2 py-1.5 rounded-lg"
                    :class="row.isCurrent ? 'font-bold bg-amber-50 text-amber-800' : 'text-gray-600'">
                    <span>{{ row.rate }}%</span>
                    <span>{{ formatCurrency(row.payment) }}/mo</span>
                    <span class="font-semibold" :style="`color: ${dscrColor(row.dscr)}`">
                      {{ row.dscr !== null ? row.dscr.toFixed(2) + 'x' : '—' }}
                    </span>
                    <span class="text-gray-400">{{ row.tier }}</span>
                  </div>
                </div>
                <p class="text-xs text-gray-400 mt-2 italic">Rate sensitivity — NOI and loan held constant. −1% to +3% range.</p>
                <!-- LTV sensitivity (property mode) -->
                <div v-if="calcMode === 'property' && sensitivityLTVRows && sensitivityLTVRows.length > 0" class="mt-4 pt-3 border-t border-gray-100">
                  <h4 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">DSCR at Different LTVs</h4>
                  <div class="space-y-0.5">
                    <div v-for="row in sensitivityLTVRows" :key="row.ltv"
                      class="flex justify-between items-center text-xs px-2 py-1.5 rounded-lg text-gray-600">
                      <span>{{ row.ltv }}% LTV</span>
                      <span>{{ formatCurrencyCompact(row.loan) }}</span>
                      <span>{{ formatCurrency(row.payment) }}/mo</span>
                      <span class="font-semibold" :style="`color: ${dscrColor(row.dscr)}`">
                        {{ row.dscr !== null ? row.dscr.toFixed(2) + 'x' : '—' }}
                      </span>
                    </div>
                  </div>
                  <p class="text-xs text-gray-400 mt-2 italic">NOI and rate held constant. Shows how leverage affects DSCR.</p>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div v-if="hasResult || findLoanResult !== null || findNOIResult !== null" class="p-4 border-t border-gray-100 space-y-2">
              <button v-if="hasResult && (calcMode === 'property' || calcMode === 'dscr-loan')"
                @click="openSaveScenario"
                class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
                style="background: #f59e0b; color: #1e3a5f;">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>
                Save Scenario
              </button>
              <div class="grid grid-cols-2 gap-2">
                <button @click="shareResult"
                  class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border"
                  :class="shareSuccess ? 'border-green-400 text-green-700 bg-green-50' : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'">
                  <svg v-if="!shareSuccess" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                  </svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  {{ shareSuccess ? 'Copied!' : 'Share' }}
                </button>
                <button @click="exportPDF"
                  class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  Export PDF
                </button>
              </div>
              <button @click="showEmailModal = true"
                class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs text-gray-500 hover:text-gray-700 border border-dashed border-gray-200 hover:border-gray-300 transition">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Email me this analysis
              </button>
            </div>

          </div><!-- /main result card -->

        </div>
        </div>
        </div>
      </div><!-- /two-column -->

      <!-- SCENARIO ANALYSIS -->
      <div v-if="(calcMode === 'property') && hasResult && scenarios" class="px-5 lg:px-6 pb-6 pt-4 border-t border-gray-100">
        <button @click="scenariosOpen = !scenariosOpen"
          class="w-full flex items-center justify-between px-6 py-4 rounded-2xl border-2 font-semibold text-sm transition mb-4"
          :class="scenariosOpen ? 'border-blue-300 text-blue-800 bg-blue-50' : 'border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50/30'">
          <div class="flex items-center gap-3">
            <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              :style="scenariosOpen ? 'background:#2563eb;' : 'background:#f3f4f6;'">
              <svg class="w-4 h-4" :class="scenariosOpen ? 'text-white' : 'text-gray-500'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div class="text-left">
              <span class="block">Scenario Analysis — Conservative / Base / Optimistic</span>
              <span class="text-xs font-normal" :class="scenariosOpen ? 'text-blue-600' : 'text-gray-400'">See how DSCR changes under different assumptions</span>
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
            <div class="px-5 py-3 border-b flex items-center gap-2.5" :style="`background: ${sc.bgColor}; border-color: ${sc.color}30;`">
              <div class="w-2.5 h-2.5 rounded-full flex-shrink-0" :style="`background: ${sc.color};`"></div>
              <div>
                <p class="font-extrabold text-sm" :style="`color: ${sc.color};`">{{ sc.label }}</p>
                <p class="text-xs text-gray-400">{{ sc.desc }}</p>
              </div>
            </div>
            <div class="p-5 space-y-3">
              <div class="flex justify-between items-center text-sm">
                <span class="text-gray-500">Adj. NOI</span>
                <span class="font-bold text-gray-900">{{ formatCurrency(sc.noi) }}</span>
              </div>
              <div class="flex justify-between items-center text-sm border-t border-gray-50 pt-2">
                <span class="text-gray-500">Adj. Rate</span>
                <span class="font-semibold text-gray-700">{{ sc.rate.toFixed(2) }}%</span>
              </div>
              <div class="flex justify-between items-center text-sm border-t border-gray-50 pt-2">
                <span class="text-gray-500">DSCR</span>
                <span class="font-extrabold text-base" :style="`color: ${sc.color};`">{{ sc.dscr.toFixed(2) }}x</span>
              </div>
              <div class="flex justify-between items-center text-xs text-gray-400 border-t border-gray-50 pt-2">
                <span>Tier</span>
                <span class="font-semibold" :style="`color: ${sc.color};`">{{ sc.tier }}</span>
              </div>
            </div>
          </div>
        </div>
        <p v-if="scenariosOpen" class="mt-3 text-xs text-gray-400 text-center">
          Conservative: NOI × 0.90, Rate +1%. Optimistic: NOI × 1.05, Rate −0.5%. Illustrative stress test only — not a forecast.
        </p>
      </div>

      </div><!-- /bg-white inner -->
      </div><!-- /gradient wrapper -->

      <!-- ═══════════════════════════════════════════════
           SEO CONTENT
      ═══════════════════════════════════════════════ -->
      <div class="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

      <!-- INTRO TEXT -->
      <div class="border-b border-gray-100 px-8 py-8">
        <div class="space-y-3">
          <p class="text-gray-700 text-base leading-relaxed">
            The <strong>DSCR calculator</strong> is the essential underwriting tool for US real estate investors and loan officers. DSCR — Debt Service Coverage Ratio — is the primary metric lenders use to determine whether a property generates enough income to service its debt. A deal that clears the 1.25x threshold gets approved; one that doesn't requires more equity, lower rates, or higher income.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            This free calculator supports all four investor workflows: standard Property DSCR (NOI ÷ Annual Debt Service, used by Fannie Mae, Freddie Mac, and CMBS lenders), DSCR Loan mode (Monthly Rent ÷ PITIA, used for non-QM investor loans), Find Max Loan Amount, and Find Required NOI. Results include stressed DSCR at +1% and +2% rates — exactly how lenders underwrite deals.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            Below you'll find the complete DSCR formula with a worked Atlanta, GA multifamily example, 2026 benchmarks by property type and state, the Lender Context panel mapping your DSCR to specific loan programs, and an 8-question FAQ covering every investor and broker question about debt service coverage analysis.
          </p>
        </div>
      </div>

      <!-- IMPORTANT NOTE -->
      <div class="border-b border-gray-100 px-8 py-6">
        <div class="rounded-2xl border border-amber-200 bg-amber-50/70 px-6 py-5">
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style="background: #f59e0b;">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <p class="font-bold text-amber-900 mb-2 text-sm">Important: DSCR Is a Lender Metric, Not an Approval Guarantee</p>
              <p class="text-sm text-amber-800 leading-relaxed">
                DSCR is the first qualification screen — it is necessary but not sufficient for loan approval. Lenders also evaluate sponsor credit score, real estate experience and track record, liquidity and post-closing reserves (typically 6–12 months PITIA), property condition and age, occupancy history, market dynamics and rent trends, and minimum loan size requirements. Meeting the DSCR threshold means you can proceed to formal underwriting — it does not guarantee approval or specific terms.
              </p>
              <p class="text-sm text-amber-800 leading-relaxed mt-2">
                This calculator produces estimates for educational and pre-screening purposes only. Always verify your DSCR analysis with the specific lender's underwriting guidelines — agency (Fannie/Freddie), CMBS, portfolio, and non-QM lenders each apply different NOI adjustments, expense load factors, and stress-test requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- OVERVIEW -->
      <div id="overview" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Overview</h2>
        <div class="space-y-3">
          <p class="text-gray-600 leading-relaxed">
            This <strong>DSCR calculator</strong> functions as both a debt service coverage ratio calculator and a dscr loan calculator, covering the two distinct DSCR formulas used in US real estate lending. Use it as a rental property dscr calculator to evaluate any income-producing property — single-family rentals, small multifamily, large apartment buildings, or commercial assets.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Two separate formulas are built in: <strong>Property DSCR</strong> (Annual NOI ÷ Annual Debt Service) for commercial and agency multifamily loans, and <strong>DSCR Loan DSCR</strong> (Monthly Rent ÷ Monthly PITIA) for non-QM investor loans that skip personal income documentation. The calculator also provides two reverse modes: Find Max Loan Amount and Find Required NOI — both scoped to the Property DSCR formula. Real-time stress testing at +1% and +2% rates is built into every calculation.
          </p>
          <p class="text-gray-600 leading-relaxed">
            The primary users of this tool are investors preparing loan applications, commercial real estate investors underwriting deals before submitting to Fannie Mae or Freddie Mac lenders, mortgage brokers evaluating client deals, and loan officers pre-screening investment property applications. DSCR is the first metric that determines loan feasibility — get it right before spending time on full underwriting.
          </p>
          <p class="text-gray-600 leading-relaxed">
            In 2026, the investment property lending environment is shaped by sustained high rates — 7.5–8% for conventional loans, 8–9% for non-QM DSCR products. At these levels, achieving 1.25x DSCR requires significantly stronger income or lower leverage than was needed in 2019–2021 at 4.5–5% rates. The DSCR compression effect means many deals that penciled out at 75% LTV three years ago now require 60–65% LTV to maintain the same coverage. This calculator accounts for the current rate environment in all benchmark comparisons.
          </p>
          <p class="text-gray-600 leading-relaxed">
            DSCR does not measure investor returns. It does not include appreciation, principal paydown benefit, tax benefits, or the down payment amount. For complete investment analysis, pair this calculator with the <NuxtLink to="/cap-rate-calculator" class="text-amber-700 underline hover:text-amber-900 transition">Cap Rate Calculator</NuxtLink> (unlevered yield), <NuxtLink to="/cash-on-cash-calculator" class="text-amber-700 underline hover:text-amber-900 transition">Cash-on-Cash Return</NuxtLink> (levered return on equity), and <NuxtLink to="/noi-calculator" class="text-amber-700 underline hover:text-amber-900 transition">NOI Calculator</NuxtLink>. These four metrics together — DSCR, Cap Rate, Cash-on-Cash, and NOI — give a complete picture of both lender qualification and investor return.
          </p>
          <!-- Key metrics overview -->
          <div class="grid sm:grid-cols-3 gap-4 mt-4">
            <div class="p-4 rounded-xl border border-amber-100 bg-amber-50/60 text-center">
              <p class="text-2xl font-extrabold text-amber-700 mb-1">1.25x</p>
              <p class="text-xs font-semibold text-gray-700">Fannie/Freddie minimum</p>
              <p class="text-xs text-gray-500 mt-1">The most common qualifying threshold for agency multifamily</p>
            </div>
            <div class="p-4 rounded-xl border border-teal-100 bg-teal-50/60 text-center">
              <p class="text-2xl font-extrabold text-teal-700 mb-1">1.00x</p>
              <p class="text-xs font-semibold text-gray-700">Non-QM minimum</p>
              <p class="text-xs text-gray-500 mt-1">DSCR loan floor — break-even coverage with no cushion</p>
            </div>
            <div class="p-4 rounded-xl border border-blue-100 bg-blue-50/60 text-center">
              <p class="text-2xl font-extrabold text-blue-700 mb-1">1.50x+</p>
              <p class="text-xs font-semibold text-gray-700">Excellent tier</p>
              <p class="text-xs text-gray-500 mt-1">Best pricing across all lender types — rare at 75% LTV in 2026</p>
            </div>
          </div>
        </div>
      </div>

      <!-- HOW TO USE -->
      <div id="how-to-use" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">How to Use the DSCR Calculator</h2>
        <p class="text-gray-500 text-sm mb-6">Follow these steps to analyze any US investment property for loan qualification in under 2 minutes.</p>
        <div class="space-y-4">
          <div v-for="(step, i) in howToSteps" :key="i" class="flex gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">{{ i + 1 }}</span>
            <div>
              <p class="font-bold text-sm text-gray-800 mb-1">{{ step.title }}</p>
              <p class="text-sm text-gray-600 leading-relaxed">{{ step.body }}</p>
            </div>
          </div>
        </div>

        <!-- Pro Tips -->
        <div class="mt-6">
          <h3 class="font-bold text-gray-800 mb-3 text-sm">Pro Tips</h3>
          <ul class="space-y-2">
            <li v-for="tip in proTips" :key="tip" class="flex gap-2 text-sm text-gray-600">
              <span class="text-amber-500 font-bold flex-shrink-0">→</span>
              <span>{{ tip }}</span>
            </li>
          </ul>
        </div>

        <!-- Result Guide -->
        <div class="mt-6">
          <h3 class="font-bold text-gray-800 mb-3 text-sm">How to Read Your DSCR Result</h3>
          <div class="space-y-2">
            <div v-for="tier in tierGuide" :key="tier.range" class="flex gap-3 p-3 rounded-xl border" :style="`border-color: ${tier.color}40; background: ${tier.color}08;`">
              <span class="text-xs font-bold px-2 py-0.5 rounded-full text-white flex-shrink-0 h-fit" :style="`background: ${tier.color};`">{{ tier.label }}</span>
              <div>
                <p class="text-xs font-semibold text-gray-700">{{ tier.range }}</p>
                <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">{{ tier.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- INPUTS & OUTPUTS -->
      <div id="inputs-outputs" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Inputs &amp; Outputs — Field Reference</h2>
        <p class="text-gray-500 text-sm mb-5">What each field means and where lenders source the numbers.</p>

        <h3 class="font-bold text-gray-700 mb-3 text-sm">Property DSCR Mode Fields</h3>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm text-left">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-4 font-semibold text-gray-600 w-1/3">Field</th>
                <th class="py-2 pr-4 font-semibold text-gray-600 w-1/3">What it means</th>
                <th class="py-2 font-semibold text-gray-600">Where to find it</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in propertyInputTable" :key="row.field" class="border-b border-gray-50">
                <td class="py-2 pr-4 font-medium text-gray-700">{{ row.field }}</td>
                <td class="py-2 pr-4 text-gray-500">{{ row.meaning }}</td>
                <td class="py-2 text-gray-500">{{ row.source }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="font-bold text-gray-700 mb-3 text-sm">DSCR Loan Mode Fields</h3>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm text-left">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-4 font-semibold text-gray-600 w-1/3">Field</th>
                <th class="py-2 pr-4 font-semibold text-gray-600 w-1/3">What it means</th>
                <th class="py-2 font-semibold text-gray-600">Where to find it</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in dscrLoanInputTable" :key="row.field" class="border-b border-gray-50">
                <td class="py-2 pr-4 font-medium text-gray-700">{{ row.field }}</td>
                <td class="py-2 pr-4 text-gray-500">{{ row.meaning }}</td>
                <td class="py-2 text-gray-500">{{ row.source }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="font-bold text-gray-700 mb-3 text-sm">Outputs</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-4 font-semibold text-gray-600 w-1/3">Output</th>
                <th class="py-2 pr-4 font-semibold text-gray-600 w-1/3">What it means</th>
                <th class="py-2 font-semibold text-gray-600">Primary use</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in outputTable" :key="row.output" class="border-b border-gray-50">
                <td class="py-2 pr-4 font-medium text-gray-700">{{ row.output }}</td>
                <td class="py-2 pr-4 text-gray-500">{{ row.meaning }}</td>
                <td class="py-2 text-gray-500">{{ row.use }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- FORMULA -->
      <div id="formula" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-1" style="color: #1e3a5f;">DSCR Formula &amp; Calculation Method</h2>
        <p class="text-gray-500 text-sm mb-6">Two formulas for two products — plus a real Atlanta, GA multifamily example.</p>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <!-- Property DSCR formula -->
          <div class="p-5 rounded-xl border border-amber-100 bg-amber-50/60">
            <p class="font-bold text-amber-800 mb-3 text-sm">Property DSCR (Commercial / Agency)</p>
            <div class="font-mono text-sm bg-white rounded-lg px-4 py-3 border border-amber-100 mb-3" style="color: #1e3a5f;">
              DSCR = Annual NOI ÷ Annual Debt Service
            </div>
            <div class="space-y-1 text-sm text-amber-800">
              <p>Gross Rental Income</p>
              <p class="pl-3">− Vacancy Loss</p>
              <p class="pl-3">+ Other Income</p>
              <p class="pl-3 font-semibold">= Effective Gross Income (EGI)</p>
              <p class="pl-3">− Operating Expenses</p>
              <p class="pl-3 font-semibold">= Net Operating Income (NOI)</p>
              <p>÷ Annual Debt Service (P&amp;I × 12)</p>
              <p class="font-bold">= DSCR (e.g. 1.25x)</p>
            </div>
          </div>
          <!-- DSCR Loan formula -->
          <div class="p-5 rounded-xl border border-teal-100 bg-teal-50/60">
            <p class="font-bold text-teal-800 mb-3 text-sm">DSCR Loan (Non-QM Investor Loans)</p>
            <div class="font-mono text-sm bg-white rounded-lg px-4 py-3 border border-teal-100 mb-3" style="color: #0f766e;">
              DSCR = Monthly Rent ÷ Monthly PITIA
            </div>
            <div class="space-y-1 text-sm text-teal-800">
              <p class="font-semibold">PITIA = P&amp;I + Taxes + Insurance + HOA + Association</p>
              <p class="mt-2">P&amp;I: auto-calculated from loan inputs</p>
              <p>Taxes: current bill ÷ 12</p>
              <p>Insurance: monthly premium</p>
              <p>HOA / Association: if applicable</p>
              <p class="mt-2 font-semibold">Note: Operating expenses (management, maintenance) are NOT included — DSCR Loan uses gross rent vs total housing payment only.</p>
            </div>
          </div>
        </div>

        <!-- Worked Example -->
        <div class="p-6 rounded-xl border border-gray-200 bg-gray-50">
          <div class="flex items-center gap-2 mb-4">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#059669;">Worked Example</span>
            <span class="text-sm font-semibold text-gray-700">12-Unit Multifamily — Atlanta, GA (2026)</span>
          </div>
          <p class="text-xs text-gray-500 mb-4">Atlanta offers one of the stronger DSCR environments in 2026 Sun Belt — moderate property taxes, growing rents, and accessible agency loan execution. Inputs verified to produce DSCR in the 1.25x–1.35x Strong tier.</p>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-1.5 text-sm">
              <p class="font-bold text-gray-700 mb-2">Step-by-Step Calculation</p>
              <div class="flex justify-between"><span class="text-gray-500">Gross Rental Income (12 units × $1,500/mo)</span><span class="font-semibold text-gray-800">$216,000</span></div>
              <div class="flex justify-between"><span class="text-gray-500">Step 1: Vacancy Loss (7%)</span><span class="font-semibold text-red-500">−$15,120</span></div>
              <div class="flex justify-between"><span class="text-gray-500">Step 2: Other Income (laundry/storage)</span><span class="font-semibold text-green-600">+$6,000</span></div>
              <div class="flex justify-between font-semibold"><span class="text-gray-700">EGI</span><span class="text-gray-800">$206,880</span></div>
              <div class="flex justify-between"><span class="text-gray-500">Step 3: Operating Expenses (~44.5% of EGI)</span><span class="font-semibold text-red-500">−$92,000</span></div>
              <div class="flex justify-between font-bold border-t border-gray-200 pt-1.5"><span class="text-gray-700">Step 4: NOI</span><span class="text-green-700">$114,880</span></div>
              <div class="flex justify-between"><span class="text-gray-500">Step 5: Loan (75% of $1.4M)</span><span class="font-semibold text-gray-800">$1,050,000</span></div>
              <div class="flex justify-between"><span class="text-gray-500">Step 6: Monthly P&amp;I (7.5%, 30yr)</span><span class="font-semibold text-gray-800">$7,342/mo</span></div>
              <div class="flex justify-between"><span class="text-gray-500">Step 7: Annual Debt Service (× 12)</span><span class="font-semibold text-red-400">$88,104</span></div>
              <div class="flex justify-between font-extrabold border-t-2 border-gray-300 pt-2 mt-2"><span class="text-gray-800">Step 8: DSCR</span><span style="color:#059669;">1.30x</span></div>
              <div class="flex justify-between text-xs text-gray-500"><span>Step 9: Stressed DSCR at 8.5% (+1%)</span><span class="font-semibold" style="color:#F59E0B;">1.19x</span></div>
            </div>
            <div>
              <p class="font-bold text-gray-700 mb-2 text-sm">Interpretation</p>
              <p class="text-sm text-gray-600 leading-relaxed mb-3">
                DSCR of 1.30x lands solidly in the <strong>Strong tier</strong> — above the Fannie Mae and Freddie Mac conventional minimum of 1.25x. This deal meets the typical DSCR threshold for standard agency multifamily financing. The stressed DSCR at +1% rate (8.5%) falls to 1.19x — Moderate tier — which means the deal is resilient but the cushion narrows meaningfully under rate stress. A conservative underwriter would still approve at these stressed levels.
              </p>
              <div class="p-3 rounded-xl text-center" style="background:#05966920; border: 1px solid #05966940;">
                <p class="text-3xl font-extrabold" style="color:#059669;">1.30x</p>
                <p class="text-xs text-gray-500 mt-1">Property DSCR — Strong tier</p>
                <p class="text-xs text-gray-400">Stressed +1%: 1.19x (Moderate)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- WHAT IS DSCR -->
      <div id="what-is-dscr" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What Is Debt Service Coverage Ratio? (DSCR Explained)</h2>
        <div class="space-y-4">
          <p class="text-gray-600 leading-relaxed">
            The <strong>Debt Service Coverage Ratio (DSCR)</strong> is a coefficient — not a percentage — that measures how many times a property's operating income covers its debt obligation. The formula is: DSCR = Net Operating Income ÷ Annual Debt Service. A DSCR of 1.25x means the property generates $1.25 of income for every $1.00 of debt service. The extra $0.25 is the cushion that protects the lender against vacancy spikes, expense surprises, or rate increases. Lenders built their entire investment property underwriting around this ratio because it directly answers the question: can this property service its own debt?
          </p>
          <p class="text-gray-600 leading-relaxed">
            DSCR was institutionalized by Fannie Mae and Freddie Mac as their primary multifamily underwriting metric in the 1980s and remains unchanged today — the 1.25x minimum for conventional multifamily is the most durable threshold in US real estate lending. A 1.25x DSCR provides a meaningful 20% margin between NOI and debt service; if NOI drops 20% (from vacancy or expenses), the property still exactly covers debt. For DSCR Loan products (non-QM), lenders use a simplified formula — Monthly Rent ÷ Monthly PITIA — that replaces the full NOI calculation with gross rent as a proxy.
          </p>
          <p class="text-gray-600 leading-relaxed">
            The ratio was designed around a simple, verifiable fact: a lender cannot rely on an investor's personal guarantee for commercial-scale debt. If the property cannot generate enough income to cover its own debt obligations, the loan is fundamentally unsound — regardless of the borrower's personal financial situation. This is why DSCR is the first filter every commercial and agency lender applies, before underwriting property condition, sponsor experience, or market analysis. It is both a qualification gate and a risk pricing tool — the higher the DSCR, the less risk the lender is absorbing, and the better the pricing and terms offered.
          </p>
          <!-- DSCR vs other metrics -->
          <div class="grid sm:grid-cols-2 gap-4 mt-4">
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-bold text-sm text-gray-800 mb-2">DSCR vs Cap Rate</p>
              <p class="text-sm text-gray-600">Cap Rate = NOI ÷ Property Value (unlevered yield %). DSCR = NOI ÷ Annual Debt Service (income coverage ratio). Same NOI, completely different questions: cap rate asks "what return on the asset?", DSCR asks "can the property pay the debt?" A property with a 6% cap rate can have a wildly different DSCR depending on how much leverage is applied — high LTV compresses DSCR, low LTV expands it.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-bold text-sm text-gray-800 mb-2">DSCR vs Cash-on-Cash</p>
              <p class="text-sm text-gray-600">Cash-on-Cash = Annual Cash Flow ÷ Cash Invested (investor's return %). DSCR is the lender's metric; Cash-on-Cash is the investor's metric. DSCR doesn't care about down payment size — Cash-on-Cash does. A deal can show 1.30x DSCR but negative Cash-on-Cash if property taxes and management fees push post-debt cash flow negative after all personal costs are counted.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-bold text-sm text-gray-800 mb-2">DSCR vs LTV</p>
              <p class="text-sm text-gray-600">Loan-to-Value measures the loan as a percentage of property value — a collateral metric. DSCR measures income relative to debt service — a cash flow metric. Lenders apply both simultaneously. A deal can pass LTV at 75% but fail DSCR at 1.15x if rents are low relative to price. In 2026, DSCR is the binding constraint for most investment properties — not LTV.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-bold text-sm text-gray-800 mb-2">DSCR vs NOI</p>
              <p class="text-sm text-gray-600">Net Operating Income is the numerator in the DSCR formula — DSCR puts NOI in context by dividing it against debt service. A $100,000 NOI might be excellent coverage for a $500,000 loan but terrible for a $2,000,000 loan. NOI tells you the absolute income; DSCR tells you whether that income is enough for a specific debt load.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- WHAT YOUR RESULT MEANS -->
      <div id="result-meaning" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">What Your DSCR Result Means</h2>
        <p class="text-gray-500 text-sm mb-6">Your DSCR tells lenders whether the property's income can cover the debt — and how much cushion is left. Here's how to interpret each range for US 2026 underwriting.</p>
        <div class="space-y-4">
          <div v-for="tier in risTiers" :key="tier.label" class="p-5 rounded-xl border" :style="`border-color: ${tier.color}40; background: ${tier.color}08;`">
            <div class="flex items-start gap-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white flex-shrink-0 mt-0.5" :style="`background: ${tier.color};`">{{ tier.label }}</span>
              <div>
                <p class="font-bold text-sm text-gray-800 mb-1">{{ tier.range }}</p>
                <p class="text-sm text-gray-600 leading-relaxed">{{ tier.meaning }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Rate environment note -->
        <div class="mt-6 p-5 rounded-xl border border-blue-100 bg-blue-50">
          <h3 class="font-bold text-blue-800 mb-2 text-sm">Why DSCR Is Calibrated to 2026, Not 2018</h3>
          <p class="text-sm text-blue-700 leading-relaxed">
            Historical DSCR benchmarks assumed rates of 4–5%. In 2026, investment property rates sit around 7.5–8%, materially compressing DSCR. The same Atlanta 12-unit that showed 1.40x DSCR in 2018 at 4.5% rate would show approximately 1.05x–1.10x in 2026 at 7.5% rate on the same NOI and LTV. The Fannie Mae 1.25x threshold is unchanged — but many deals that cleared it easily in 2018 now require 60–65% LTV instead of 75% to maintain the same coverage. A 1.15x DSCR in 2026 is not a weak deal — it's a deal operating in a compressed rate environment, still meeting Fannie MAH affordable program thresholds. Calibrate your benchmarks to the current market, not pre-2022 comparisons.
          </p>
        </div>
      </div>

      <!-- BENCHMARKS -->
      <div id="benchmarks" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">DSCR Benchmarks by Market &amp; Property Type (2026)</h2>
        <p class="text-gray-500 text-sm mb-2">Typical 2026 DSCR outcomes at standard 75% LTV, 7.5% rate, 30-year term. Use as starting points — actual DSCR depends heavily on specific deal underwriting.</p>
        <p class="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-6">
          <strong>Important:</strong> These are underwriting estimates calibrated to 2026 rate environment — not market-reported DSCR statistics. Actual DSCR varies significantly by deal, LTV, and borrower.
        </p>

        <h3 class="font-bold text-gray-700 mb-3 text-sm">By Property Type</h3>
        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="py-2 pr-4 text-left font-semibold text-gray-600">Property Type</th>
                <th class="py-2 pr-4 text-center font-semibold text-gray-600">Tight (Coastal)</th>
                <th class="py-2 pr-4 text-center font-semibold text-gray-600">Standard (Sun Belt)</th>
                <th class="py-2 text-center font-semibold text-gray-600">Strong (Midwest/SE)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in propertyTypeBenchmarks" :key="row.type" class="border-b border-gray-50">
                <td class="py-2 pr-4 font-medium text-gray-700">{{ row.type }}</td>
                <td class="py-2 pr-4 text-center text-gray-500">{{ row.tight }}</td>
                <td class="py-2 pr-4 text-center text-gray-500">{{ row.standard }}</td>
                <td class="py-2 text-center text-gray-500">{{ row.strong }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="font-bold text-gray-700 mb-3 text-sm">By State — Typical Stabilized Residential DSCR</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div v-for="state in stateBenchmarks" :key="state.state" class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-gray-800 text-sm">{{ state.state }}</p>
            <p class="text-lg font-extrabold mt-1" style="color: #1e3a5f;">{{ state.range }}</p>
            <p class="text-xs text-gray-500 mt-1 leading-relaxed">{{ state.note }}</p>
          </div>
        </div>
        <p class="text-xs text-gray-400 italic mt-2">
          Sources: Underwriting estimates derived from 2026 rate environment, standard LTV assumptions, and state-level property tax and insurance data. DSCR is not publicly reported at the state level — these are calculated benchmarks for reference only.
        </p>

        <!-- 2026 Rate Environment Impact -->
        <div class="mt-8 p-6 rounded-2xl border border-gray-200 bg-gray-50">
          <h3 class="font-bold text-gray-800 mb-3 text-sm">How the 2026 Rate Environment Affects These Benchmarks</h3>
          <p class="text-sm text-gray-600 leading-relaxed mb-4">
            All benchmarks above are calibrated to 2026 conditions: 7.5% loan rate, 30-year amortization, 75% LTV. The same property analyzed at different historical rate environments shows dramatically different DSCR outcomes. Understanding this compression is essential for interpreting your results accurately.
          </p>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-gray-200">
                  <th class="py-2 pr-4 text-left font-semibold text-gray-600">Rate Environment</th>
                  <th class="py-2 pr-4 text-center font-semibold text-gray-600">Rate</th>
                  <th class="py-2 pr-4 text-center font-semibold text-gray-600">Monthly P&amp;I<br><span class="font-normal text-gray-400">$1M loan, 30yr</span></th>
                  <th class="py-2 text-center font-semibold text-gray-600">DSCR<br><span class="font-normal text-gray-400">$100K NOI</span></th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-50">
                  <td class="py-2 pr-4 font-medium text-gray-700">Pre-2022 (low rate era)</td>
                  <td class="py-2 pr-4 text-center text-gray-500">4.5%</td>
                  <td class="py-2 pr-4 text-center text-gray-500">$5,067/mo</td>
                  <td class="py-2 text-center font-bold text-green-700">1.64x</td>
                </tr>
                <tr class="border-b border-gray-50">
                  <td class="py-2 pr-4 font-medium text-gray-700">Mid-cycle 2023</td>
                  <td class="py-2 pr-4 text-center text-gray-500">6.5%</td>
                  <td class="py-2 pr-4 text-center text-gray-500">$6,321/mo</td>
                  <td class="py-2 text-center font-bold text-amber-700">1.32x</td>
                </tr>
                <tr class="border-b border-gray-50 bg-amber-50/60">
                  <td class="py-2 pr-4 font-medium text-amber-800">2026 Current ← <span class="text-xs font-normal">(this calculator)</span></td>
                  <td class="py-2 pr-4 text-center text-amber-700 font-bold">7.5%</td>
                  <td class="py-2 pr-4 text-center text-amber-700 font-bold">$6,992/mo</td>
                  <td class="py-2 text-center font-bold text-amber-700">1.19x</td>
                </tr>
                <tr class="border-b border-gray-50">
                  <td class="py-2 pr-4 font-medium text-gray-700">Stress scenario</td>
                  <td class="py-2 pr-4 text-center text-gray-500">8.5%</td>
                  <td class="py-2 pr-4 text-center text-gray-500">$7,689/mo</td>
                  <td class="py-2 text-center font-bold text-red-600">1.08x</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-gray-400 italic mt-3">
            Same $1M loan, $100K NOI — different DSCR outcomes purely based on rate. This illustrates why benchmark comparisons must be rate-calibrated to current market, not historical norms.
          </p>
        </div>
      </div>

      <!-- STRATEGY -->
      <div id="strategy" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">When DSCR Matters Most</h2>
        <p class="text-gray-500 text-sm mb-6">How DSCR fits into each major US real estate investment and lending context.</p>
        <div class="space-y-5">
          <div v-for="strategy in strategies" :key="strategy.badge" class="p-5 rounded-xl border" :style="`border-color: ${strategy.color}30; background: ${strategy.color}06;`">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" :style="`background: ${strategy.color};`">{{ strategy.badge }}</span>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed mb-2">{{ strategy.p1 }}</p>
            <p class="text-sm text-gray-600 leading-relaxed">{{ strategy.p2 }}</p>
          </div>
        </div>
      </div>

      <!-- APPLICATIONS -->
      <div id="applications" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Applications of DSCR Analysis</h2>
        <p class="text-gray-500 text-sm mb-6">Six concrete ways investors and lenders use DSCR in US real estate transactions.</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="app in applications" :key="app.title" class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">{{ app.title }}</p>
            <p class="text-sm text-gray-600">{{ app.body }}</p>
          </div>
        </div>
      </div>

      <!-- INDUSTRY STANDARDS -->
      <div id="industry-standards" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Industry Standards &amp; Professional Guidelines</h2>
        <p class="text-gray-500 text-sm mb-6">DSCR thresholds are embedded in agency underwriting, commercial lending, and non-QM loan products.</p>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="std in industryStandards" :key="std.title" class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">{{ std.icon }}</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">{{ std.title }}</h3>
            </div>
            <p v-if="std.intro" class="text-xs text-gray-600 mb-2 leading-relaxed">{{ std.intro }}</p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li v-for="pt in std.points" :key="pt" class="flex gap-2">
                <span class="text-amber-500 font-bold flex-shrink-0">→</span>
                <span v-html="pt"></span>
              </li>
            </ul>
          </div>
        </div>

        <!-- DSCR Threshold Quick Reference -->
        <div class="mt-6 p-5 rounded-2xl border border-gray-200 bg-white">
          <h3 class="font-bold text-gray-800 mb-3 text-sm">Quick Reference: DSCR Thresholds by Lender Type (2026)</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-gray-200">
                  <th class="py-2 pr-4 text-left font-semibold text-gray-600">Lender Type</th>
                  <th class="py-2 pr-4 text-center font-semibold text-gray-600">Min DSCR</th>
                  <th class="py-2 pr-4 text-center font-semibold text-gray-600">Max LTV</th>
                  <th class="py-2 text-left font-semibold text-gray-600">Formula Used</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-50">
                  <td class="py-2 pr-4 font-medium text-gray-700">Fannie Mae Conventional</td>
                  <td class="py-2 pr-4 text-center font-bold text-green-700">1.25x</td>
                  <td class="py-2 pr-4 text-center text-gray-500">80%</td>
                  <td class="py-2 text-gray-500">Annual NOI ÷ Annual Debt Service</td>
                </tr>
                <tr class="border-b border-gray-50">
                  <td class="py-2 pr-4 font-medium text-gray-700">Freddie Mac Multifamily</td>
                  <td class="py-2 pr-4 text-center font-bold text-green-700">1.25x</td>
                  <td class="py-2 pr-4 text-center text-gray-500">80%</td>
                  <td class="py-2 text-gray-500">Annual NOI ÷ Annual Debt Service</td>
                </tr>
                <tr class="border-b border-gray-50">
                  <td class="py-2 pr-4 font-medium text-gray-700">Fannie MAH Affordable</td>
                  <td class="py-2 pr-4 text-center font-bold text-amber-700">1.15x</td>
                  <td class="py-2 pr-4 text-center text-gray-500">80%</td>
                  <td class="py-2 text-gray-500">Annual NOI ÷ Annual Debt Service</td>
                </tr>
                <tr class="border-b border-gray-50">
                  <td class="py-2 pr-4 font-medium text-gray-700">DSCR Loan (standard)</td>
                  <td class="py-2 pr-4 text-center font-bold text-amber-700">1.10x</td>
                  <td class="py-2 pr-4 text-center text-gray-500">75–80%</td>
                  <td class="py-2 text-gray-500">Monthly Rent ÷ Monthly PITIA</td>
                </tr>
                <tr class="border-b border-gray-50">
                  <td class="py-2 pr-4 font-medium text-gray-700">DSCR Loan (minimum)</td>
                  <td class="py-2 pr-4 text-center font-bold text-orange-600">1.00x</td>
                  <td class="py-2 pr-4 text-center text-gray-500">70–75%</td>
                  <td class="py-2 text-gray-500">Monthly Rent ÷ Monthly PITIA</td>
                </tr>
                <tr class="border-b border-gray-50">
                  <td class="py-2 pr-4 font-medium text-gray-700">CMBS Multifamily</td>
                  <td class="py-2 pr-4 text-center font-bold text-green-700">1.25–1.30x</td>
                  <td class="py-2 pr-4 text-center text-gray-500">75–80%</td>
                  <td class="py-2 text-gray-500">Annual NOI ÷ Annual Debt Service</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- LIMITATIONS -->
      <div id="limitations" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Limitations of DSCR</h2>
        <p class="text-gray-500 text-sm mb-4">DSCR is the primary underwriting metric, but it has real blind spots every investor should understand.</p>
        <div class="p-4 rounded-xl border border-gray-200 bg-gray-50 mb-5">
          <p class="text-sm text-gray-600 leading-relaxed">
            <strong class="text-gray-800">The fundamental limitation of DSCR:</strong> it answers the lender's question ("can this property pay the debt?") but not the investor's question ("is this a good investment?"). A 1.40x DSCR in a declining market with rising vacancies can be worse than a 1.10x DSCR in a high-growth market with strong rent momentum. Understanding what DSCR does and does not tell you is as important as knowing how to calculate it.
          </p>
        </div>
        <div class="space-y-4 mb-6">
          <div v-for="lim in limitations" :key="lim.title" class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">{{ lim.n }}</span>
            <div>
              <p class="font-bold text-sm text-gray-800">{{ lim.title }}</p>
              <p class="text-sm text-gray-600 mt-0.5 leading-relaxed">{{ lim.body }}</p>
            </div>
          </div>
        </div>
        <h3 class="font-bold text-gray-700 mb-3 text-sm">When Not to Use DSCR as the Primary Metric</h3>
        <ul class="space-y-2">
          <li v-for="item in whenNotToUse" :key="item.case" class="flex gap-3 text-sm">
            <span class="text-red-500 font-bold flex-shrink-0">✗</span>
            <span><strong class="text-gray-700">{{ item.case }}:</strong> <span class="text-gray-600">{{ item.reason }}</span></span>
          </li>
        </ul>
      </div>

      <!-- COMMON MISTAKES -->
      <div id="common-mistakes" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Common Mistakes When Calculating DSCR</h2>
        <p class="text-gray-500 text-sm mb-5">Most bad DSCR analysis comes from input errors or formula confusion.</p>
        <div class="space-y-4">
          <div v-for="(mistake, i) in commonMistakes" :key="i" class="flex gap-4 p-4 rounded-xl border border-red-100 bg-red-50/40">
            <span class="text-red-400 font-extrabold text-lg flex-shrink-0">{{ i + 1 }}</span>
            <div>
              <p class="font-bold text-sm text-gray-800">{{ mistake.title }}</p>
              <p class="text-sm text-gray-600 mt-0.5 leading-relaxed">{{ mistake.body }}</p>
            </div>
          </div>
        </div>

        <!-- Lender Preparation Checklist -->
        <div class="mt-8 p-6 rounded-2xl border border-blue-100 bg-blue-50/60">
          <h3 class="font-bold text-blue-900 mb-4 text-sm">Lender-Ready DSCR Checklist — Before You Apply</h3>
          <p class="text-sm text-blue-800 mb-4 leading-relaxed">Use this checklist to make sure your DSCR analysis will match what the lender calculates — not just what your spreadsheet shows.</p>
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="flex gap-2 text-sm">
              <span class="text-blue-500 font-bold flex-shrink-0 mt-0.5">✓</span>
              <span class="text-blue-800"><strong>Use T-12 actuals for NOI</strong> — not pro forma projections. Lenders will ask for trailing 12-month operating statements.</span>
            </div>
            <div class="flex gap-2 text-sm">
              <span class="text-blue-500 font-bold flex-shrink-0 mt-0.5">✓</span>
              <span class="text-blue-800"><strong>Confirm which formula applies</strong> — Property DSCR (NOI ÷ Debt Service) for agency/CMBS; Rent ÷ PITIA for non-QM DSCR loans.</span>
            </div>
            <div class="flex gap-2 text-sm">
              <span class="text-blue-500 font-bold flex-shrink-0 mt-0.5">✓</span>
              <span class="text-blue-800"><strong>Run the stress test</strong> — calculate DSCR at your rate, +1%, and +2%. Bring this table to the lender meeting.</span>
            </div>
            <div class="flex gap-2 text-sm">
              <span class="text-blue-500 font-bold flex-shrink-0 mt-0.5">✓</span>
              <span class="text-blue-800"><strong>Check the right threshold</strong> — 1.25x (Fannie/Freddie conventional), 1.15x (Fannie MAH), 1.10x–1.20x (DSCR loan), 1.25x–1.35x (CMBS).</span>
            </div>
            <div class="flex gap-2 text-sm">
              <span class="text-blue-500 font-bold flex-shrink-0 mt-0.5">✓</span>
              <span class="text-blue-800"><strong>Exclude mortgage from expenses</strong> — operating expenses in the Property DSCR formula never include debt service. Common error in first-time underwriting.</span>
            </div>
            <div class="flex gap-2 text-sm">
              <span class="text-blue-500 font-bold flex-shrink-0 mt-0.5">✓</span>
              <span class="text-blue-800"><strong>Ask about replacement reserves</strong> — CMBS and some agency lenders deduct replacement reserve ($250–$400/unit/yr) from NOI before calculating DSCR.</span>
            </div>
            <div class="flex gap-2 text-sm">
              <span class="text-blue-500 font-bold flex-shrink-0 mt-0.5">✓</span>
              <span class="text-blue-800"><strong>Use 30-year amortization</strong> — even if you're getting a 10-year balloon, agency lenders size debt service on the full 30-year schedule.</span>
            </div>
            <div class="flex gap-2 text-sm">
              <span class="text-blue-500 font-bold flex-shrink-0 mt-0.5">✓</span>
              <span class="text-blue-800"><strong>Verify occupancy requirements</strong> — Fannie/Freddie typically require 90%+ occupancy for T-12 NOI to be underwritten. Recent lease-up may not qualify.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <div id="faq" class="px-8 py-8">
        <h2 class="text-2xl font-extrabold mb-8 text-center" style="color: #1e3a5f;">Frequently Asked Questions</h2>
        <div class="space-y-4 max-w-3xl mx-auto">
          <div v-for="(faq, i) in faqs" :key="i" class="border border-gray-100 rounded-xl overflow-hidden">
            <button @click="toggleFaq(i)" :aria-expanded="openFaq === i" :aria-controls="`faq-answer-${i}`"
              class="w-full text-left px-6 py-4 flex items-center justify-between font-semibold text-gray-800 hover:bg-gray-50 transition">
              <span>{{ faq.q }}</span>
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform" :class="openFaq === i ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div :id="`faq-answer-${i}`" v-if="openFaq === i"
              class="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>

      </div><!-- /editorial wrapper -->

      <!-- RELATED CALCULATORS CTA -->
      <div id="related-calculators" class="mt-6 rounded-2xl p-8 text-center text-white" style="background: #1e3a5f;">
        <h2 class="text-2xl font-extrabold mb-2">Complete Your Deal Analysis</h2>
        <p class="text-blue-200 mb-6">DSCR answers the lender question. Use our full toolkit for the investor picture.</p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink v-for="calc in relatedCalcs" :key="calc.href" :to="calc.href"
            class="px-5 py-2.5 rounded-xl font-semibold text-sm border border-white/20 bg-white/10 hover:bg-white/20 transition">
            {{ calc.label }}
          </NuxtLink>
        </div>
      </div>

      <!-- SCENARIO PANEL -->
      <div class="max-w-6xl mx-auto px-4 pb-10">
        <ScenarioPanel
          calculator="dscr"
          :has-result="hasResult && (calcMode === 'property' || calcMode === 'dscr-loan')"
          :result="currentScenarioResult"
          :trigger-save="triggerScenarioSave"
          @saved="onScenarioSaved"
        />
      </div>

    </main>

    <!-- EMAIL CAPTURE MODAL -->
    <EmailCaptureModal
      :show="showEmailModal"
      :calculator-name="'DSCR Calculator'"
      :primary-result="hasResult && dscr !== null ? `${dscrDisplay} DSCR` : undefined"
      title="Save Your DSCR Analysis"
      subtitle="Get lender benchmarks, deal templates, and calculator updates."
      cta-label="Save & Get Free Updates"
      @close="showEmailModal = false"
      @captured="onEmailCaptured"
    />

    <!-- ═══════════════════════════════════════════════
         FOOTER
    ═══════════════════════════════════════════════ -->
    <footer class="mt-16 border-t border-gray-200 bg-white py-8 px-4">
      <div class="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-400">© 2026 RealCalc. For informational purposes only. Not financial advice.</p>
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
import { ref, reactive, computed, onMounted, nextTick } from 'vue'

// ─── SEO HEAD ─────────────────────────────────────────────────────────────────
useHead({
  title: 'DSCR Calculator — Lender Guide 2026 | RealCalc',
  meta: [
    {
      name: 'description',
      content: 'DSCR calculator for US investors. Property DSCR and DSCR Loan modes, stress test at +1%/+2%, Fannie/Freddie lender thresholds, and 2026 benchmarks. Free.'
    },
    { property: 'og:title', content: 'DSCR Calculator — Debt Service Coverage Ratio Tool for US Investors | RealCalc' },
    { property: 'og:description', content: 'Calculate DSCR for investment property loans. Property DSCR and DSCR Loan modes, stress test at +1%/+2%, Fannie/Freddie lender context, find max loan or required NOI. Free.' },
    { name: 'keywords', content: 'dscr calculator, debt service coverage ratio calculator, dscr loan calculator, commercial real estate dscr, rental property dscr calculator, investment property loan, NOI debt service' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Calculator',
        name: 'DSCR Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description: 'DSCR calculator for US real estate investors. Calculate Property DSCR (NOI/Debt Service) or DSCR Loan (Rent/PITIA) with stress test and lender benchmarks.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        featureList: 'Real-time DSCR calculation, Property DSCR + DSCR Loan modes, stress test +1%/+2%, lender context panel, find max loan, find required NOI, 2026 benchmarks, PDF export'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is a good DSCR for rental property in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Industry-standard thresholds: 1.50x+ Excellent, 1.25x–1.49x Strong (meets Fannie/Freddie conventional minimum), 1.15x–1.24x Moderate (meets Fannie MAH affordable), 1.00x–1.14x Marginal (DSCR loan territory), below 1.00x Fails. In the 2026 rate environment at 7.5–8%, 1.25x is a realistic target — 2018-era 1.35x benchmarks are harder to achieve without more equity.' } },
          { '@type': 'Question', name: 'What is the difference between Property DSCR and DSCR Loan DSCR?', acceptedAnswer: { '@type': 'Answer', text: 'Property DSCR = Annual NOI ÷ Annual Debt Service (used for agency multifamily, CMBS, and commercial loans). DSCR Loan DSCR = Monthly Rent ÷ Monthly PITIA (used for non-QM investor loans that skip personal income documentation). The same property can show different DSCR values in these two formulas — both are correct for their product context.' } },
          { '@type': 'Question', name: 'What is PITIA in a DSCR calculation?', acceptedAnswer: { '@type': 'Answer', text: 'PITIA stands for Principal + Interest + Taxes + Insurance + HOA/Association fees. It is the monthly all-in housing cost used in DSCR loan underwriting. Operating expenses like maintenance and management are NOT part of PITIA — that is why DSCR loans often show higher nominal DSCR than Property DSCR on the same property.' } },
          { '@type': 'Question', name: 'How do lenders stress test DSCR?', acceptedAnswer: { '@type': 'Answer', text: 'Underwriters recalculate DSCR at elevated interest rates, typically +1% and +2% above the loan rate. A deal that is 1.25x at 7.5% but falls to 1.05x at 8.5% signals fragility. Conservative lenders require stressed DSCR to remain above 1.15x–1.20x to avoid pricing bumps or LTV restrictions.' } },
          { '@type': 'Question', name: 'Can I get a DSCR loan with less than 1.00x DSCR?', acceptedAnswer: { '@type': 'Answer', text: 'Generally no. Below 1.00x means the property does not cover debt service. Some aggressive non-QM lenders accept exactly 1.00x minimum, but pricing worsens significantly and LTV caps tighten to 70–75%. The practical fix is to reduce the loan amount, increase down payment, or find a property with stronger rent-to-price ratio.' } },
          { '@type': 'Question', name: 'Is a higher DSCR always better?', acceptedAnswer: { '@type': 'Answer', text: 'From the lender\'s perspective, higher DSCR means lower risk and better pricing. From the investor\'s perspective, a very high DSCR (2.0x+) may indicate too much equity tied up for thin cash-on-cash return. The practical recommendation: pair DSCR with Cash-on-Cash Return — a 1.30x DSCR with 8% CoC is typically the sweet spot for conventional investment property financing.' } },
          { '@type': 'Question', name: 'Does DSCR include capital expenditures (CapEx)?', acceptedAnswer: { '@type': 'Answer', text: 'Typically no. DSCR uses NOI, which by standard definition excludes CapEx. Some conservative lenders underwrite with replacement reserves deducted from NOI, effectively reducing DSCR. Always check specific lender guidelines — a lender applying a $250/unit/year replacement reserve will underwrite a different DSCR than one who does not.' } },
          { '@type': 'Question', name: 'Why did my DSCR drop so much in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Interest rate environment is the primary driver. The same property with the same NOI shows materially lower DSCR at 7.5% rate vs 4.5% rate — the debt service is simply larger. A deal that was 1.40x in 2019 at 4.5% might show 0.95x–1.05x in 2026 at 7.5% on the same income. Use this calculator\'s stress test to see how your deal performs across rate scenarios and plan equity accordingly.' } }
        ]
      })
    }
  ]
})

// ─── STATE ────────────────────────────────────────────────────────────────────
const calcMode = ref('property') // 'property' | 'dscr-loan' | 'find-loan' | 'find-noi'
const expenseMode = ref('simple')
const loanInputMode = ref('direct')
const isNavExpanded = ref(false)
const shareSuccess = ref(false)
const showEmailModal = ref(false)
const triggerScenarioSave = ref(false)
const openFaq = ref(null)
const scenariosOpen = ref(false)
const showRateSensitivity = ref(false)

const form = reactive({
  // Income (property / find-loan)
  grossRentalIncome: null,
  vacancyRate: null,
  otherIncome: null,
  operatingExpenses: null,
  expenses: {
    propertyTax:  null,
    insurance:    null,
    management:   null,
    maintenance:  null,
    utilities:    null,
    hoa:          null,
    other:        null,
  },
  // Rent / PITIA (dscr-loan)
  monthlyRent:         null,
  monthlyPropertyTax:  null,
  monthlyInsurance:    null,
  monthlyHOA:          null,
  monthlyAssociation:  null,
  // Financing (all modes)
  loanAmount:      null,
  purchasePrice:   null,
  downPaymentPct:  null,
  interestRate:    null,
  loanTermYears:   30,
  // Reverse target
  targetDSCR: 1.25,
})

// ─── EXPENSE FIELDS CONFIG ────────────────────────────────────────────────────
const expenseFields = [
  { key: 'propertyTax',  label: 'Property Taxes (annual)',       placeholder: 'Enter annual property taxes' },
  { key: 'insurance',    label: 'Insurance (annual)',            placeholder: 'Enter annual insurance cost' },
  { key: 'management',   label: 'Property Management (annual)',  placeholder: 'Enter annual property management cost' },
  { key: 'maintenance',  label: 'Maintenance & Repairs (annual)',placeholder: 'Enter annual maintenance and repairs' },
  { key: 'utilities',    label: 'Utilities — if landlord paid',  placeholder: 'Enter annual utility cost' },
  { key: 'hoa',          label: 'HOA Fees (annual)',             placeholder: 'Enter annual HOA fees' },
  { key: 'other',        label: 'Other Expenses (annual)',       placeholder: 'Enter other annual operating expenses' },
]

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function calcMonthlyPayment(P, annualRate, termYears) {
  if (!P || P <= 0 || !termYears || termYears <= 0) return 0
  const r = (annualRate || 0) / 100 / 12
  const n = termYears * 12
  if (r === 0) return P / n
  const pow = Math.pow(1 + r, n)
  return P * (r * pow) / (pow - 1)
}

function calcMaxLoan(noi, targetDSCR, annualRate, termYears) {
  if (!noi || noi <= 0 || !targetDSCR || targetDSCR <= 0 || !termYears || termYears <= 0) return null
  // annualPayment = NOI / targetDSCR
  const annualPayment = noi / targetDSCR
  const r = (annualRate || 0) / 100 / 12
  const n = termYears * 12
  // Zero-rate (all-cash or 0% financing): loan = annualPayment × term
  if (r <= 0) return annualPayment * termYears
  const pow = Math.pow(1 + r, n)
  const monthlyFactor = (r * pow) / (pow - 1)
  return (annualPayment / 12) / monthlyFactor
}

function formatCurrency(val) {
  if (val === null || val === undefined) return '$0'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)
}

function formatCurrencyCompact(val) {
  if (val === null || val === undefined) return '—'
  if (Math.abs(val) >= 1_000_000) return '$' + (val / 1_000_000).toFixed(2) + 'M'
  if (Math.abs(val) >= 1_000) return '$' + (val / 1_000).toFixed(0) + 'K'
  return formatCurrency(val)
}

function dscrColor(d) {
  if (d === null) return '#9ca3af'
  if (d >= 1.50) return '#059669'
  if (d >= 1.25) return '#10B981'
  if (d >= 1.15) return '#F59E0B'
  if (d >= 1.00) return '#F97316'
  return '#DC2626'
}

function dscrTier(d) {
  if (d === null) return '—'
  if (d >= 1.50) return 'Excellent'
  if (d >= 1.25) return 'Strong'
  if (d >= 1.15) return 'Moderate'
  if (d >= 1.00) return 'Marginal'
  return 'Fail'
}

function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
}

function resetForm() {
  form.grossRentalIncome = null
  form.vacancyRate = null
  form.otherIncome = null
  form.operatingExpenses = null
  Object.keys(form.expenses).forEach(k => { form.expenses[k] = null })
  form.monthlyRent = null
  form.monthlyPropertyTax = null
  form.monthlyInsurance = null
  form.monthlyHOA = null
  form.monthlyAssociation = null
  form.loanAmount = null
  form.purchasePrice = null
  form.downPaymentPct = null
  form.interestRate = null
  form.loanTermYears = 30
  form.targetDSCR = 1.25
  expenseMode.value = 'simple'
  loanInputMode.value = 'direct'
  shareSuccess.value = false
  openFaq.value = null
  scenariosOpen.value = false
  showRateSensitivity.value = false
}

// ─── COMPUTED CORE ────────────────────────────────────────────────────────────
const grossRentalIncomeCalc = computed(() => Number(form.grossRentalIncome) || 0)
const vacancyRateClamped = computed(() => Math.min(100, Math.max(0, Number(form.vacancyRate) || 0)))
const vacancyLoss = computed(() => grossRentalIncomeCalc.value * vacancyRateClamped.value / 100)
const otherIncomeCalc = computed(() => Number(form.otherIncome) || 0)
const egi = computed(() => grossRentalIncomeCalc.value - vacancyLoss.value + otherIncomeCalc.value)
const detailedTotalExpenses = computed(() => Object.values(form.expenses).reduce((s, v) => s + (Number(v) || 0), 0))
const totalExpensesCalc = computed(() => expenseMode.value === 'simple' ? (Number(form.operatingExpenses) || 0) : detailedTotalExpenses.value)
const noi = computed(() => egi.value - totalExpensesCalc.value)

const loanAmountCalc = computed(() => {
  if (loanInputMode.value === 'direct') return Number(form.loanAmount) || 0
  const pp = Number(form.purchasePrice) || 0
  const dp = Math.min(100, Math.max(0, Number(form.downPaymentPct) || 0))
  return pp * (1 - dp / 100)
})

const ltvPercent = computed(() => {
  if (loanInputMode.value === 'direct') return null
  const pp = Number(form.purchasePrice) || 0
  if (pp <= 0) return null
  return (loanAmountCalc.value / pp) * 100
})

const interestRateCalc = computed(() => Number(form.interestRate) || 0)
const loanTermCalc = computed(() => Number(form.loanTermYears) || 30)
const monthlyPayment = computed(() => calcMonthlyPayment(loanAmountCalc.value, interestRateCalc.value, loanTermCalc.value))
const annualDebtService = computed(() => monthlyPayment.value * 12)

const totalPITIA = computed(() => {
  return monthlyPayment.value +
    (Number(form.monthlyPropertyTax) || 0) +
    (Number(form.monthlyInsurance) || 0) +
    (Number(form.monthlyHOA) || 0) +
    (Number(form.monthlyAssociation) || 0)
})

// ─── PRIMARY RESULT ────────────────────────────────────────────────────────────
const dscr = computed(() => {
  if (calcMode.value === 'property') {
    // All-cash purchase: no debt → DSCR is mathematically infinite
    if (loanAmountCalc.value === 0) return grossRentalIncomeCalc.value > 0 ? Infinity : null
    if (annualDebtService.value <= 0) return null
    return noi.value / annualDebtService.value
  }
  if (calcMode.value === 'dscr-loan') {
    const rent = Number(form.monthlyRent) || 0
    // All-cash: no loan → no P&I component, DSCR is infinite
    if (loanAmountCalc.value === 0) return rent > 0 ? Infinity : null
    // Explicit: PITIA = 0 with loan present → treat as no-debt (Infinity)
    if (totalPITIA.value <= 0) return rent > 0 ? Infinity : null
    return rent / totalPITIA.value
  }
  return null
})

const findLoanResult = computed(() => {
  if (calcMode.value !== 'find-loan') return null
  const td = Number(form.targetDSCR) || 1.25
  if (noi.value <= 0) return null
  return calcMaxLoan(noi.value, td, interestRateCalc.value, loanTermCalc.value)
})

const findNOIResult = computed(() => {
  if (calcMode.value !== 'find-noi') return null
  const td = Number(form.targetDSCR) || 1.25
  if (annualDebtService.value <= 0) return null
  return annualDebtService.value * td
})

const hasResult = computed(() => {
  if (calcMode.value === 'property') return dscr.value !== null && loanAmountCalc.value > 0 && grossRentalIncomeCalc.value > 0
  // dscr-loan: valid when rent entered and dscr resolved (including Infinity / no-debt case)
  if (calcMode.value === 'dscr-loan') return dscr.value !== null && (Number(form.monthlyRent) || 0) > 0 && (loanAmountCalc.value > 0 || !isFinite(dscr.value))
  if (calcMode.value === 'find-loan') return findLoanResult.value !== null && findLoanResult.value > 0
  if (calcMode.value === 'find-noi') return findNOIResult.value !== null && findNOIResult.value > 0
  return false
})

const dscrDisplay = computed(() => {
  if (dscr.value === null) return '—'
  if (!isFinite(dscr.value)) return 'N/A (all-cash)'
  return dscr.value.toFixed(2) + 'x'
})

// ─── STRESS METRICS ───────────────────────────────────────────────────────────
const stressedDSCR1 = computed(() => {
  if (!hasResult.value || interestRateCalc.value <= 0) return null
  const stressedRate = interestRateCalc.value + 1
  if (calcMode.value === 'property' || calcMode.value === 'find-loan') {
    const loan = calcMode.value === 'find-loan' ? (findLoanResult.value || 0) : loanAmountCalc.value
    const sp = calcMonthlyPayment(loan, stressedRate, loanTermCalc.value)
    const ads = sp * 12
    if (ads <= 0) return null
    return noi.value / ads
  }
  if (calcMode.value === 'dscr-loan') {
    const rent = Number(form.monthlyRent) || 0
    const sp = calcMonthlyPayment(loanAmountCalc.value, stressedRate, loanTermCalc.value)
    const pitia = sp + (Number(form.monthlyPropertyTax) || 0) + (Number(form.monthlyInsurance) || 0) + (Number(form.monthlyHOA) || 0) + (Number(form.monthlyAssociation) || 0)
    if (pitia <= 0) return null
    return rent / pitia
  }
  if (calcMode.value === 'find-noi') {
    const sp = calcMonthlyPayment(loanAmountCalc.value, stressedRate, loanTermCalc.value)
    const ads = sp * 12
    const td = Number(form.targetDSCR) || 1.25
    const reqNOI = ads * td
    if (ads <= 0) return null
    return reqNOI / ads // = targetDSCR always — so show stressed required NOI instead
  }
  return null
})

const stressedDSCR2 = computed(() => {
  if (!hasResult.value || interestRateCalc.value <= 0) return null
  const stressedRate = interestRateCalc.value + 2
  if (calcMode.value === 'property' || calcMode.value === 'find-loan') {
    const loan = calcMode.value === 'find-loan' ? (findLoanResult.value || 0) : loanAmountCalc.value
    const sp = calcMonthlyPayment(loan, stressedRate, loanTermCalc.value)
    const ads = sp * 12
    if (ads <= 0) return null
    return noi.value / ads
  }
  if (calcMode.value === 'dscr-loan') {
    const rent = Number(form.monthlyRent) || 0
    const sp = calcMonthlyPayment(loanAmountCalc.value, stressedRate, loanTermCalc.value)
    const pitia = sp + (Number(form.monthlyPropertyTax) || 0) + (Number(form.monthlyInsurance) || 0) + (Number(form.monthlyHOA) || 0) + (Number(form.monthlyAssociation) || 0)
    if (pitia <= 0) return null
    return rent / pitia
  }
  return null
})

const maxLoanAt125 = computed(() => {
  if (calcMode.value === 'dscr-loan') return null
  const noiVal = calcMode.value === 'find-noi' ? (findNOIResult.value || 0) : noi.value
  if (noiVal <= 0) return null
  // Works for zero-rate too (calcMaxLoan handles r ≤ 0 explicitly)
  return calcMaxLoan(noiVal, 1.25, interestRateCalc.value, loanTermCalc.value)
})

const rentCushion = computed(() => {
  if (calcMode.value !== 'dscr-loan') return null
  const rent = Number(form.monthlyRent) || 0
  return rent - totalPITIA.value
})

// ─── BADGE / TIER ─────────────────────────────────────────────────────────────
const badge = computed(() => {
  const d = dscr.value
  if (d === null) return { label: '—', bg1: '#9ca3af', bg2: '#6b7280' }
  if (!isFinite(d)) return { label: 'N/A (no debt)', bg1: '#6366f1', bg2: '#4f46e5' }
  if (d >= 1.50) return { label: 'Excellent', bg1: '#059669', bg2: '#047857' }
  if (d >= 1.25) return { label: 'Strong',    bg1: '#10B981', bg2: '#059669' }
  if (d >= 1.15) return { label: 'Moderate',  bg1: '#F59E0B', bg2: '#D97706' }
  if (d >= 1.00) return { label: 'Marginal',  bg1: '#F97316', bg2: '#EA580C' }
  return             { label: 'Fail',       bg1: '#DC2626', bg2: '#B91C1C' }
})

// ─── INSIGHT TEXT ─────────────────────────────────────────────────────────────
const insightText = computed(() => {
  const d = dscr.value
  if (d === null) return ''
  if (!isFinite(d)) return 'No debt service — all-cash scenario. DSCR is not applicable (N/A). The property generates income with zero debt obligation. To evaluate leverage scenarios, enter a loan amount and interest rate.'
  const fmt = d.toFixed(2) + 'x'
  const mode = calcMode.value === 'dscr-loan' ? 'DSCR Loan' : 'Property DSCR'
  if (d >= 1.50) return `DSCR of ${fmt} is in the Excellent range. This ${mode} meets the threshold for best pricing across agency and portfolio loan programs — strong cushion absorbs rate shocks and operating surprises. Rarely achieved at 75% LTV in 2026; often requires lower leverage or above-market rents.`
  if (d >= 1.25) return `DSCR of ${fmt} is in the Strong range — meets the Fannie Mae and Freddie Mac conventional multifamily minimum of 1.25x. This is the target band for most investment property underwriting. Check stressed DSCR at +1% rate to confirm resilience before proceeding to formal application.`
  if (d >= 1.15) return `DSCR of ${fmt} is in the Moderate range — meets the Fannie Mae MAH affordable program threshold (1.15x) but falls below the conventional 1.25x minimum. Lender options narrow at this level. Verify the stressed DSCR at +1% carefully — if it falls below 1.00x, expect denial or significant equity requirements.`
  if (d >= 1.00) return `DSCR of ${fmt} is in the Marginal range. Most DSCR loan lenders accept 1.00x–1.10x minimum but pricing worsens and LTV caps tighten. This property barely covers debt with no cushion — any rate increase will push DSCR below 1.00x. Check the stress test results carefully before proceeding.`
  return `DSCR of ${fmt} is a Fail — the property does not generate enough income to cover its debt obligation. Loan typically denied at all lender tiers. Options: lower the loan amount, increase down payment, improve NOI through rent increases or expense cuts, or wait for a rate environment where debt service is lower.`
})

// ─── LENDER PROGRAMS ──────────────────────────────────────────────────────────
const lenderProgramsData = [
  { label: 'Fannie Mae Conventional Multifamily',  threshold: 1.25 },
  { label: 'Freddie Mac Small Balance',             threshold: 1.25 },
  { label: 'Fannie Mae MAH Affordable',             threshold: 1.15 },
  { label: 'DSCR Loan — Conservative',              threshold: 1.20 },
  { label: 'DSCR Loan — Standard',                  threshold: 1.10 },
  { label: 'DSCR Loan — Aggressive',                threshold: 1.00 },
]

const lenderPrograms = computed(() => {
  const d = dscr.value
  return lenderProgramsData.map(p => ({ ...p, meets: d !== null && d >= p.threshold }))
})

const lenderProgramsStressed = computed(() => {
  const d = stressedDSCR1.value
  return lenderProgramsData.map(p => ({ ...p, meets: d !== null && d >= p.threshold }))
})

// ─── WARNINGS ─────────────────────────────────────────────────────────────────
const warnings = computed(() => {
  const ws = []
  if (calcMode.value === 'property') {
    if (grossRentalIncomeCalc.value === 0) {
      ws.push({ type: 'info', msg: 'Enter gross rental income to calculate NOI and DSCR.' })
    } else if (noi.value < 0) {
      ws.push({ type: 'error', msg: 'Negative NOI — operating expenses exceed income. Property is losing money before debt service.' })
    }
    if (loanAmountCalc.value === 0 && grossRentalIncomeCalc.value > 0) {
      ws.push({ type: 'info', msg: 'Enter loan details (amount, rate, term) to calculate DSCR.' })
    }
    if (dscr.value !== null && isFinite(dscr.value) && dscr.value < 1.00) {
      ws.push({ type: 'error', msg: `DSCR of ${dscr.value.toFixed(2)}x is below 1.00x — property does not cover debt service. Loan typically denied across all programs.` })
    } else if (dscr.value !== null && isFinite(dscr.value) && dscr.value < 1.15) {
      ws.push({ type: 'error', msg: `DSCR of ${dscr.value.toFixed(2)}x is in the Marginal range (1.00x–1.14x). Only aggressive non-QM DSCR loan lenders accept this range — at higher rate premiums and LTV caps of 70–75%. A 0.5% rate increase will push stressed DSCR below 1.00x.` })
    } else if (dscr.value !== null && isFinite(dscr.value) && dscr.value < 1.25) {
      ws.push({ type: 'warning', msg: `DSCR of ${dscr.value.toFixed(2)}x is in the Moderate range (1.15x–1.24x) — meets Fannie MAH affordable program threshold (1.15x) but below the conventional 1.25x minimum. Lender options narrow here. Check stressed DSCR carefully.` })
    }
    if (stressedDSCR1.value !== null && isFinite(stressedDSCR1.value)) {
      if (stressedDSCR1.value < 1.00) {
        ws.push({ type: 'error', msg: `Stressed DSCR at +1% rate falls to ${stressedDSCR1.value.toFixed(2)}x — below 1.00x. Fails stress test; expect denial or LTV restrictions from most lenders.` })
      } else if (stressedDSCR1.value < 1.15 && dscr.value !== null && isFinite(dscr.value) && dscr.value >= 1.15) {
        ws.push({ type: 'warning', msg: `Stressed DSCR at +1% rate drops to ${stressedDSCR1.value.toFixed(2)}x (Marginal). Stress test exposes fragility — conservative underwriters will flag this.` })
      } else if (stressedDSCR1.value < 1.25 && dscr.value !== null && isFinite(dscr.value) && dscr.value >= 1.25) {
        ws.push({ type: 'warning', msg: `Stressed DSCR at +1% rate falls to ${stressedDSCR1.value.toFixed(2)}x — below the 1.25x conventional minimum. Deal is fragile under rate stress.` })
      }
    }
    if (vacancyRateClamped.value > 15) {
      ws.push({ type: 'warning', msg: `Vacancy of ${vacancyRateClamped.value}% is high. Lenders may apply additional 5–10% vacancy haircut above 15%.` })
    }
  }
  if (calcMode.value === 'dscr-loan') {
    const rent = Number(form.monthlyRent) || 0
    if (rent > 0 && totalPITIA.value > 0 && rent < totalPITIA.value) {
      ws.push({ type: 'error', msg: 'Monthly rent is less than total PITIA — property does not cover debt. Automatic fail for DSCR loan underwriting.' })
    }
    if (dscr.value !== null && isFinite(dscr.value) && dscr.value < 1.00) {
      ws.push({ type: 'error', msg: `DSCR Loan DSCR of ${dscr.value.toFixed(2)}x is below 1.00x — rent does not cover PITIA. Automatic fail for DSCR loan underwriting.` })
    } else if (dscr.value !== null && isFinite(dscr.value) && dscr.value < 1.10) {
      ws.push({ type: 'error', msg: `DSCR Loan DSCR of ${dscr.value.toFixed(2)}x is in the Marginal range (1.00x–1.09x). Only the most aggressive non-QM lenders accept this — expect rate premiums and 70% LTV caps.` })
    } else if (dscr.value !== null && isFinite(dscr.value) && dscr.value < 1.20) {
      ws.push({ type: 'warning', msg: `DSCR Loan DSCR of ${dscr.value.toFixed(2)}x is borderline. Standard lenders require 1.20x; conservative lenders require 1.25x. Limited product options at this level.` })
    }
  }
  const ir = interestRateCalc.value
  if (ir > 0 && (ir < 5 || ir > 12)) {
    ws.push({ type: 'warning', msg: `Interest rate of ${ir}% is outside the typical 2026 investment property range (5–12%). Verify your input.` })
  }
  if (ltvPercent.value !== null && ltvPercent.value > 80) {
    ws.push({ type: 'warning', msg: `LTV of ${ltvPercent.value.toFixed(0)}% exceeds 80% — unusual for investment property. Verify loan product.` })
  }
  return ws
})

// ─── SENSITIVITY TABLES ───────────────────────────────────────────────────────
const sensitivityRateRows = computed(() => {
  if (!hasResult.value) return null
  if (interestRateCalc.value <= 0) return null
  const currentRate = interestRateCalc.value
  const rows = []
  for (let delta = -1.0; delta <= 3.01; delta += 0.5) {
    const rate = currentRate + delta
    if (rate <= 0) continue
    let payment, ads, d

    if (calcMode.value === 'property' || calcMode.value === 'find-loan') {
      const loan = calcMode.value === 'find-loan' ? (findLoanResult.value || 0) : loanAmountCalc.value
      payment = calcMonthlyPayment(loan, rate, loanTermCalc.value)
      ads = payment * 12
      d = ads > 0 ? noi.value / ads : null
    } else if (calcMode.value === 'dscr-loan') {
      const rent = Number(form.monthlyRent) || 0
      payment = calcMonthlyPayment(loanAmountCalc.value, rate, loanTermCalc.value)
      const pitia = payment + (Number(form.monthlyPropertyTax) || 0) + (Number(form.monthlyInsurance) || 0) + (Number(form.monthlyHOA) || 0) + (Number(form.monthlyAssociation) || 0)
      ads = pitia * 12
      d = pitia > 0 ? rent / pitia : null
    } else {
      continue
    }

    rows.push({
      rate: rate.toFixed(1),
      payment: payment,
      ads: ads,
      dscr: d,
      tier: dscrTier(d),
      isCurrent: Math.abs(delta) < 0.01,
    })
  }
  return rows
})

const sensitivityLTVRows = computed(() => {
  if (!hasResult.value || calcMode.value !== 'property') return null
  let purchasePrice = null
  if (loanInputMode.value === 'ltv' && Number(form.purchasePrice) > 0) {
    purchasePrice = Number(form.purchasePrice)
  } else if (loanAmountCalc.value > 0) {
    purchasePrice = loanAmountCalc.value / 0.75 // estimate from 75% LTV
  }
  if (!purchasePrice || purchasePrice <= 0) return null
  return [80, 75, 70, 65, 60, 55].map(ltv => {
    const loan = purchasePrice * ltv / 100
    const payment = calcMonthlyPayment(loan, interestRateCalc.value, loanTermCalc.value)
    const ads = payment * 12
    const d = ads > 0 ? noi.value / ads : null
    return { ltv, loan, payment, dscr: d }
  })
})

// ─── SCENARIOS ────────────────────────────────────────────────────────────────
const scenarios = computed(() => {
  if (calcMode.value !== 'property' || !hasResult.value) return null

  const buildScenario = (noiMult, rateDelta, label, desc, color, bgColor, key) => {
    const adjNOI = noi.value * noiMult
    const adjRate = Math.max(0.1, interestRateCalc.value + rateDelta)
    const payment = calcMonthlyPayment(loanAmountCalc.value, adjRate, loanTermCalc.value)
    const ads = payment * 12
    const d = ads > 0 ? adjNOI / ads : 0
    return { key, label, desc, noi: adjNOI, rate: adjRate, dscr: d, tier: dscrTier(d), color, bgColor }
  }

  return [
    buildScenario(0.90, 1.0,  'Conservative', 'NOI −10%, Rate +1%',  '#ef4444', '#fef2f2', 'conservative'),
    buildScenario(1.00, 0.0,  'Base Case',    'Your actual inputs',   '#3b82f6', '#eff6ff', 'base'),
    buildScenario(1.05, -0.5, 'Optimistic',   'NOI +5%, Rate −0.5%', '#10b981', '#f0fdf4', 'optimistic'),
  ]
})

// ─── SCENARIO SAVE ────────────────────────────────────────────────────────────
const currentScenarioResult = computed(() => {
  if (!hasResult.value || dscr.value === null) return undefined
  return {
    primaryMetric: calcMode.value === 'dscr-loan' ? 'DSCR Loan' : 'Property DSCR',
    primaryValue:  dscrDisplay.value,
    badgeLabel:    badge.value?.label,
    badgeColor:    badge.value?.bg1,
    dscr:          dscr.value,
    noi:           noi.value || undefined,
    annualDebtService: annualDebtService.value || undefined,
    loanAmount:    loanAmountCalc.value || undefined,
    interestRate:  interestRateCalc.value || undefined,
  }
})

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
function onEmailCaptured(_email) { showEmailModal.value = false }

// ─── SHARE ────────────────────────────────────────────────────────────────────
function buildShareParams() {
  const p = new URLSearchParams()
  if (calcMode.value !== 'property') p.set('md', calcMode.value === 'dscr-loan' ? 'd' : calcMode.value === 'find-loan' ? 'fl' : 'fn')
  if (form.grossRentalIncome) p.set('gri', form.grossRentalIncome)
  if (form.vacancyRate !== null) p.set('vr', form.vacancyRate)
  if (form.otherIncome) p.set('oi', form.otherIncome)
  if (expenseMode.value !== 'simple') p.set('em', expenseMode.value)
  if (expenseMode.value === 'simple' && form.operatingExpenses) p.set('oe', form.operatingExpenses)
  if (expenseMode.value === 'detailed') {
    if (form.expenses.propertyTax) p.set('ept', form.expenses.propertyTax)
    if (form.expenses.insurance)   p.set('ei',  form.expenses.insurance)
    if (form.expenses.management)  p.set('emg', form.expenses.management)
    if (form.expenses.maintenance) p.set('emt', form.expenses.maintenance)
    if (form.expenses.utilities)   p.set('eu',  form.expenses.utilities)
    if (form.expenses.hoa)         p.set('eho', form.expenses.hoa)
    if (form.expenses.other)       p.set('eot', form.expenses.other)
  }
  if (form.monthlyRent) p.set('mr', form.monthlyRent)
  if (form.monthlyPropertyTax) p.set('pt', form.monthlyPropertyTax)
  if (form.monthlyInsurance)   p.set('ins', form.monthlyInsurance)
  if (form.monthlyHOA)         p.set('hoa', form.monthlyHOA)
  if (form.monthlyAssociation) p.set('ass', form.monthlyAssociation)
  if (loanInputMode.value !== 'direct') p.set('lim', loanInputMode.value)
  if (form.loanAmount)     p.set('la', form.loanAmount)
  if (form.purchasePrice)  p.set('pp', form.purchasePrice)
  if (form.downPaymentPct !== null) p.set('dp', form.downPaymentPct)
  if (form.interestRate)   p.set('ir', form.interestRate)
  if (form.loanTermYears !== 30) p.set('lt', form.loanTermYears)
  if (form.targetDSCR !== 1.25) p.set('td', form.targetDSCR)
  return p.toString()
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

// ─── PDF EXPORT ───────────────────────────────────────────────────────────────
async function exportPDF() {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF()
  const navy = [30, 58, 95]
  const gold  = [245, 158, 11]
  const gray  = [107, 114, 128]

  // Header
  doc.setFillColor(...navy)
  doc.rect(0, 0, 210, 40, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(22)
  doc.setFont('helvetica', 'bold')
  doc.text('RealCalc', 20, 20)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.text('DSCR Analysis Report', 20, 30)
  doc.setFontSize(9)
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 130, 20)

  // Hero block
  let heroValue, heroLabel, heroSub
  if (calcMode.value === 'find-loan') {
    heroValue = findLoanResult.value ? formatCurrency(findLoanResult.value) : '—'
    heroLabel = 'MAX LOAN AMOUNT'
    heroSub = `At ${(Number(form.targetDSCR) || 1.25).toFixed(2)}x DSCR target | ${interestRateCalc.value}% rate, ${form.loanTermYears}yr`
  } else if (calcMode.value === 'find-noi') {
    heroValue = findNOIResult.value ? formatCurrency(findNOIResult.value) : '—'
    heroLabel = 'REQUIRED ANNUAL NOI'
    heroSub = `To achieve ${(Number(form.targetDSCR) || 1.25).toFixed(2)}x DSCR on ${formatCurrency(loanAmountCalc.value)} loan`
  } else {
    heroValue = dscrDisplay.value
    heroLabel = calcMode.value === 'dscr-loan' ? 'DSCR LOAN (Rent ÷ PITIA)' : 'PROPERTY DSCR (NOI ÷ Debt Service)'
    heroSub = hasResult.value && badge.value ? `Tier: ${badge.value.label}` : 'Incomplete inputs'
  }

  doc.setFillColor(...gold)
  doc.rect(0, 42, 210, 30, 'F')
  doc.setTextColor(...navy)
  doc.setFontSize(28)
  doc.setFont('helvetica', 'bold')
  doc.text(heroValue, 20, 62)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.text(heroLabel, 20, 56)
  doc.text(heroSub, 20, 68)

  let y = 85
  doc.setTextColor(...navy)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Key Inputs', 20, y)
  y += 8

  const inputRows = calcMode.value === 'property' || calcMode.value === 'find-loan' ? [
    ['Gross Rental Income', formatCurrency(grossRentalIncomeCalc.value)],
    ['Vacancy Rate', vacancyRateClamped.value + '%'],
    ['Operating Expenses', formatCurrency(totalExpensesCalc.value)],
    ['NOI', formatCurrency(noi.value)],
    ['Loan Amount', formatCurrency(loanAmountCalc.value)],
    ['Interest Rate', interestRateCalc.value + '%'],
    ['Annual Debt Service', formatCurrency(annualDebtService.value)],
  ] : calcMode.value === 'dscr-loan' ? [
    ['Monthly Rent', formatCurrency(Number(form.monthlyRent) || 0)],
    ['Monthly P&I', formatCurrency(monthlyPayment.value)],
    ['Monthly Taxes', formatCurrency(Number(form.monthlyPropertyTax) || 0)],
    ['Monthly Insurance', formatCurrency(Number(form.monthlyInsurance) || 0)],
    ['Total PITIA', formatCurrency(totalPITIA.value)],
  ] : [
    ['Loan Amount', formatCurrency(loanAmountCalc.value)],
    ['Interest Rate', interestRateCalc.value + '%'],
    ['Annual Debt Service', formatCurrency(annualDebtService.value)],
    ['Target DSCR', (Number(form.targetDSCR) || 1.25).toFixed(2) + 'x'],
    ['Required NOI', formatCurrency(findNOIResult.value)],
  ]

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  inputRows.forEach(([label, val]) => {
    doc.setTextColor(...gray)
    doc.text(label, 20, y)
    doc.setTextColor(...navy)
    doc.setFont('helvetica', 'bold')
    doc.text(val, 150, y, { align: 'right' })
    doc.setFont('helvetica', 'normal')
    doc.line(20, y + 2, 190, y + 2)
    y += 8
    if (y > 260) return
  })

  if (stressedDSCR1.value !== null && y < 250) {
    y += 4
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.setTextColor(...navy)
    doc.text('Stress Test Results', 20, y)
    y += 7
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(...gray)
    doc.text('Stressed DSCR at +1% rate', 20, y)
    doc.setTextColor(...navy)
    doc.setFont('helvetica', 'bold')
    doc.text(isFinite(stressedDSCR1.value) ? stressedDSCR1.value.toFixed(2) + 'x' : 'N/A (all-cash)', 150, y, { align: 'right' })
    y += 7
    if (stressedDSCR2.value !== null) {
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(...gray)
      doc.text('Stressed DSCR at +2% rate', 20, y)
      doc.setTextColor(...navy)
      doc.setFont('helvetica', 'bold')
      doc.text(isFinite(stressedDSCR2.value) ? stressedDSCR2.value.toFixed(2) + 'x' : 'N/A (all-cash)', 150, y, { align: 'right' })
    }
  }

  // Footer
  doc.setFillColor(...navy)
  doc.rect(0, 280, 210, 17, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text('realcalc.io — For informational purposes only. Not financial advice.', 105, 290, { align: 'center' })

  doc.save(`dscr-analysis-${Date.now()}.pdf`)
}

// ─── URL PERSISTENCE ──────────────────────────────────────────────────────────
if (process.client) {
  onMounted(() => {
    const p = new URLSearchParams(window.location.search)
    const modeMap = { d: 'dscr-loan', fl: 'find-loan', fn: 'find-noi' }
    if (p.has('md')) calcMode.value = modeMap[p.get('md')] || 'property'
    if (p.has('gri'))  form.grossRentalIncome = Number(p.get('gri'))
    if (p.has('vr'))   form.vacancyRate = Number(p.get('vr'))
    if (p.has('oi'))   form.otherIncome = Number(p.get('oi'))
    if (p.has('em'))   expenseMode.value = p.get('em')
    if (p.has('oe'))   form.operatingExpenses = Number(p.get('oe'))
    if (p.has('mr'))   form.monthlyRent = Number(p.get('mr'))
    if (p.has('pt'))   form.monthlyPropertyTax = Number(p.get('pt'))
    if (p.has('ins'))  form.monthlyInsurance = Number(p.get('ins'))
    if (p.has('hoa'))  form.monthlyHOA = Number(p.get('hoa'))
    if (p.has('ass'))  form.monthlyAssociation = Number(p.get('ass'))
    if (p.has('lim'))  loanInputMode.value = p.get('lim')
    if (p.has('la'))   form.loanAmount = Number(p.get('la'))
    if (p.has('pp'))   form.purchasePrice = Number(p.get('pp'))
    if (p.has('dp'))   form.downPaymentPct = Number(p.get('dp'))
    if (p.has('ir'))   form.interestRate = Number(p.get('ir'))
    if (p.has('lt'))   form.loanTermYears = Number(p.get('lt'))
    if (p.has('td'))   form.targetDSCR = Number(p.get('td'))
    if (p.has('em') && p.get('em') === 'detailed') {
      if (p.has('ept')) form.expenses.propertyTax = Number(p.get('ept'))
      if (p.has('ei'))  form.expenses.insurance = Number(p.get('ei'))
      if (p.has('emg')) form.expenses.management = Number(p.get('emg'))
      if (p.has('emt')) form.expenses.maintenance = Number(p.get('emt'))
      if (p.has('eu'))  form.expenses.utilities = Number(p.get('eu'))
      if (p.has('eho')) form.expenses.hoa = Number(p.get('eho'))
      if (p.has('eot')) form.expenses.other = Number(p.get('eot'))
    }
  })
}

// ─── STATIC CONTENT ───────────────────────────────────────────────────────────
const howToSteps = [
  {
    title: 'Choose Property DSCR or DSCR Loan mode',
    body: 'Select Property DSCR for commercial, Fannie Mae, or Freddie Mac loans — it uses Annual NOI ÷ Annual Debt Service. Select DSCR Loan for non-QM investor loans — it uses Monthly Rent ÷ Monthly PITIA. The calculator also offers two reverse modes: Find Max Loan Amount and Find Required NOI, both within the Property DSCR framework.',
  },
  {
    title: 'Enter income and expense data',
    body: 'Use T-12 actuals (trailing 12-month operating statement) for the most lender-credible inputs — not pro forma projections. Typical stabilized NOI for a 10-unit multifamily runs $80,000–$150,000/yr depending on market. Lenders routinely discount pro forma rent by 10–20%, so entering projected rents will overstate your qualifying DSCR.',
  },
  {
    title: 'Enter loan details',
    body: 'Investment property rates in 2026 typically run 7.5–8% for conventional and 8.5–9.5% for non-QM DSCR loans. Use 30-year amortization — even 10-year balloon loans use 30-year amortization for underwriting purposes under Fannie/Freddie guidelines. Higher LTV means higher debt service and lower DSCR.',
  },
  {
    title: 'Review DSCR + stress test',
    body: 'The calculator shows your DSCR at the current rate, plus stressed DSCR at +1% and +2%. Lenders actually underwrite to stressed rates — a deal that is 1.25x today but falls to 1.05x at +1% stress will receive pricing bumps, LTV restrictions, or denial from conservative underwriters. Always review the full stress picture.',
  },
  {
    title: 'Match to loan programs via Lender Context panel',
    body: 'The Lender Context panel maps your DSCR to specific program thresholds: Fannie Mae conventional (1.25x), Fannie MAH affordable (1.15x), DSCR loan conservative (1.20x), standard (1.10x), and aggressive (1.00x). Meeting the DSCR threshold is necessary but not sufficient — LTV, reserves, and sponsor experience also matter.',
  },
]

const proTips = [
  'Use stabilized T-12 NOI — lenders almost always discount pro forma projections by 10–20%, so underwriting to pro forma creates a gap between your analysis and lender approval.',
  'A 1.25x DSCR at 7.5% rate that falls to 1.05x at 8.5% is what underwriters call "fragile" — expect tighter LTV or pricing bumps from conservative lenders.',
  'DSCR loans (non-QM) use Monthly Rent ÷ PITIA — expenses don\'t reduce DSCR in that product, which is why DSCR loans often show higher nominal DSCR than Property DSCR on the same property.',
  'Don\'t confuse DSCR with Cap Rate — Cap Rate is unlevered yield on property value. DSCR is the lender\'s income coverage ratio. Same property, two completely different metrics for different audiences.',
  'Run the Find Max Loan Amount mode before negotiating price — knowing your lender-implied loan ceiling prevents structuring deals that look good on LTV but fail on income coverage.',
  'CMBS lenders often deduct replacement reserves ($250–$400/unit/yr) from NOI before calculating DSCR — always ask about reserve treatment, especially on older vintage assets.',
  'For DSCR loan deals, get a rent survey (from Rentometer or a local appraiser) before closing — lenders often use the lower of lease rent or appraiser market rent in DSCR calculation.',
]

const tierGuide = [
  { label: 'Excellent', range: '≥ 1.50x', color: '#059669', desc: 'Low-risk profile — meets threshold for best pricing across agency and portfolio loans. Strong cushion absorbs rate shocks. Rarely achieved at 75% LTV in 2026.' },
  { label: 'Strong',    range: '1.25x–1.49x', color: '#10B981', desc: 'Meets Fannie Mae / Freddie Mac conventional minimum (1.25x). Standard agency multifamily qualification. Target band for most investment property underwriting.' },
  { label: 'Moderate',  range: '1.15x–1.24x', color: '#F59E0B', desc: 'Meets Fannie Mae MAH affordable program threshold (1.15x). Below conventional 1.25x minimum. Limited lender options. Check stressed DSCR carefully.' },
  { label: 'Marginal',  range: '1.00x–1.14x', color: '#F97316', desc: 'DSCR loan territory — most non-QM lenders accept 1.00x–1.10x minimum at higher pricing and tighter LTV caps. Property barely covers debt with no cushion.' },
  { label: 'Fail',      range: '< 1.00x', color: '#DC2626', desc: 'Property does not cover debt service. Loan typically denied. Fix requires: lower loan amount, higher NOI, or lower rate (refinance when available).' },
]

const risTiers = [
  {
    label: 'Excellent', range: '1.50x or higher', color: '#059669',
    meaning: 'A 1.50x+ DSCR signals a low-risk property profile, giving lenders a 50% margin of safety above breakeven. Meets threshold for best pricing across Fannie Mae, Freddie Mac, CMBS, and portfolio loans. Strong cushion absorbs vacancy spikes, expense surprises, and moderate rate increases. In 2026 at 7.5–8% rates, achieving 1.50x+ typically requires 60–65% LTV or properties with above-market rent-to-price ratios — it\'s uncommon at standard 75% LTV in major markets.',
  },
  {
    label: 'Strong', range: '1.25x–1.49x', color: '#10B981',
    meaning: 'Meets the Fannie Mae and Freddie Mac conventional multifamily minimum of 1.25x — the gold standard for agency loan qualification. This is the target band for most investment property underwriting in 2026. The 25% cushion above debt coverage provides meaningful protection against operating shocks. In Atlanta, Dallas, or Indianapolis at standard 75% LTV, Strong DSCR is achievable for well-positioned stabilized properties.',
  },
  {
    label: 'Moderate', range: '1.15x–1.24x', color: '#F59E0B',
    meaning: 'Meets the Fannie Mae MAH (Multifamily Affordable Housing) program minimum of 1.15x and some portfolio lender thresholds, but falls below the conventional 1.25x. Lender options narrow significantly at this level. Any rate increase, expense surprise, or occupancy dip can push DSCR below the 1.25x threshold. In 2026, many coastal deals and high-LTV properties land here — it\'s a real operating reality, not a failure, but underwriting options are more limited.',
  },
  {
    label: 'Marginal', range: '1.00x–1.14x', color: '#F97316',
    meaning: 'Non-QM DSCR loan territory — most DSCR loan lenders accept 1.00x–1.10x minimum, but pricing worsens (0.75–1.5% rate premium) and LTV caps tighten to 70–75%. The property barely covers debt service with almost no cushion. A rate increase of just 0.5–1% will likely push stressed DSCR below 1.00x, triggering denial from most programs. Only aggressive non-QM lenders and bridge lenders with clear stabilization paths accept this range.',
  },
  {
    label: 'Fail', range: 'Below 1.00x', color: '#DC2626',
    meaning: 'The property does not generate enough income to cover its debt obligation — the fundamental qualification failure in investment property lending. Loan typically denied across all conventional and non-QM programs. Resolution requires: (1) lower loan amount to reduce debt service, (2) higher down payment to the same effect, (3) wait for rate compression to improve refinance economics, or (4) increase NOI through rent growth or expense reduction. "Fail" on DSCR does not mean negative leverage — these are separate concepts.',
  },
]

const propertyTypeBenchmarks = [
  { type: 'Single-Family Rental (SFR)', tight: '1.00–1.15x', standard: '1.15–1.25x', strong: '1.25–1.40x' },
  { type: 'Small Multifamily (2–4 units)', tight: '1.05–1.20x', standard: '1.20–1.30x', strong: '1.30–1.45x' },
  { type: 'Multifamily 5+ Units', tight: '1.15–1.25x', standard: '1.25–1.35x', strong: '1.35–1.50x' },
  { type: 'Retail / Strip Center', tight: '1.20–1.30x', standard: '1.30–1.45x', strong: '1.45–1.60x' },
  { type: 'Industrial / Warehouse', tight: '1.25–1.40x', standard: '1.40–1.60x', strong: '1.50–1.75x' },
  { type: 'Office', tight: '1.15–1.25x', standard: '1.25–1.40x', strong: '1.40–1.55x' },
]

const stateBenchmarks = [
  { state: 'California', range: '1.00x–1.15x', note: 'High purchase prices and low cap rates compress DSCR severely. Coastal CA deals often need 30%+ equity (65–70% LTV) to reach 1.25x. Property taxes are relatively low under Prop 13, but wildfire insurance costs are rising.' },
  { state: 'Texas', range: '1.15x–1.30x', note: 'No state income tax but high property taxes (2–2.5% effective rates) are the primary DSCR drag. New supply in Austin and Dallas is keeping cap rates elevated. SFR and small MF in secondary TX metros show stronger DSCR.' },
  { state: 'Florida', range: '1.10x–1.25x', note: 'Hurricane and flood insurance costs are the dominant DSCR drag — some South Florida coastal properties face $8,000–$20,000+/yr in insurance. Strong rent growth in Tampa and Orlando partially offsets this pressure.' },
  { state: 'New York', range: '1.00x–1.15x', note: 'Rent stabilization limits rent growth in NYC multifamily, while high property taxes compress NOI. Upstate NY markets (Buffalo, Rochester) show wider DSCR ranges. NYC boroughs routinely show sub-1.15x on stabilized multifamily.' },
  { state: 'Arizona', range: '1.15x–1.30x', note: 'Phoenix and Scottsdale have absorbed significant new supply through 2023–2025, moderating rent growth. Property taxes are moderate. Strong economic growth supports DSCR at or above the 1.25x threshold for quality properties.' },
  { state: 'Georgia', range: '1.20x–1.35x', note: 'Atlanta offers one of the stronger DSCR environments for 2026 investors — moderate property taxes, growing rents, and accessible Fannie/Freddie execution. Savannah and suburban Atlanta markets show slightly tighter numbers.' },
  { state: 'Colorado', range: '1.10x–1.25x', note: 'Denver\'s high purchase prices and growing insurance costs (hail, wildfire) compress DSCR toward the 1.15–1.20x range. Colorado Springs and secondary CO markets show stronger coverage.' },
  { state: 'Washington', range: '1.10x–1.25x', note: 'Seattle\'s high prices drive tight DSCR similar to California coastal markets. Eastern WA (Spokane, Tri-Cities) offers materially better DSCR for cash flow investors. Strong rent growth in tech corridors helps offset high prices.' },
  { state: 'Ohio', range: '1.30x–1.50x', note: 'Columbus, Cleveland, and Cincinnati rank among the strongest DSCR markets in the US — affordable prices relative to rents, moderate taxes, and low insurance costs. Midwest value markets routinely clear 1.30x+ at standard 75% LTV.' },
  { state: 'Tennessee', range: '1.20x–1.35x', note: 'Nashville rent growth has been strong but 2023–2025 new supply is moderating gains. Memphis and Knoxville offer better DSCR for cash flow investors. No state income tax provides a slight operating margin benefit.' },
  { state: 'North Carolina', range: '1.15x–1.30x', note: 'Charlotte and Raleigh have absorbed strong in-migration and rent growth. Property taxes are moderate and insurance is manageable outside coastal flood zones. DSCR ranges are competitive with Texas markets.' },
  { state: 'Indiana', range: '1.35x–1.55x', note: 'Indianapolis is one of the top DSCR markets for US investors — low property taxes, reasonable insurance, and strong rent-to-price ratios. Secondary IN markets (Fort Wayne, South Bend) are increasingly attracting cash flow investors priced out of Columbus.' },
]

const strategies = [
  {
    badge: 'Agency Multifamily', color: '#1e3a5f',
    p1: 'Fannie Mae and Freddie Mac are the largest multifamily lenders in the US, and their 1.25x DSCR minimum is the gold standard for investment property qualification. For a $10M property with 75% LTV ($7.5M loan) at 7.5% rate, annual debt service is approximately $630,000 — requiring NOI of at least $787,500 to qualify at 1.25x. This is the benchmark against which all other loan products compare.',
    p2: 'Agency lenders use 30-year amortization for sizing even on 10-year balloon loans. Stabilized NOI (T-12 actuals, not pro forma) is what gets underwritten. Occupancy history of 90%+ is typically required. If your property was recently acquired or renovated, expect the lender to use their own stabilized NOI assumption, not your forward projection.',
  },
  {
    badge: 'DSCR Loan (Non-QM)', color: '#0f766e',
    p1: 'DSCR loans have grown to represent 15–20% of investor loan volume in 2026 because they don\'t require personal income documentation, W-2 history, or traditional DTI underwriting. Non-QM lenders accept 1.00x–1.20x DSCR minimum depending on LTV and reserves. The Rent ÷ PITIA formula makes these loans simpler to underwrite but more rate-sensitive — because P&I rises directly with rate, any rate move immediately impacts DSCR. Example: $400K property, $3,500/mo rent, $2,800 PITIA = 1.25x — meets the common DSCR threshold for standard DSCR loan programs.',
    p2: 'Trade-offs vs conventional: DSCR loans carry a 0.5–1.5% rate premium, tighter LTV caps (typically 75–80% max), and often include prepayment penalties (3-2-1 or step-down structures). Best for investors who can\'t document W-2 income or want to scale portfolios without personal debt-to-income constraints. Typical borrower: real estate professional with 3–10 existing rental properties seeking portfolio expansion without personal income verification.',
  },
  {
    badge: 'Commercial / CMBS', color: '#7c3aed',
    p1: 'CMBS and commercial portfolio lenders typically require 1.25x–1.35x minimum DSCR for multifamily, retail, and industrial. Office assets are increasingly underwritten at 1.35x+ in 2026 given sector stress — vacancy rates above 20% in many CBD markets have made office DSCR analysis particularly conservative. Industrial and NNN retail (with credit tenants) receive more favorable 1.25x treatment due to long-term lease security.',
    p2: 'Commercial lenders stress-test more aggressively than residential — often applying +2% or more rate sensitivity on top of current market. Lease rollover analysis matters critically: a single tenant representing 30% of income rolling in Year 3 can crater stabilized DSCR projections. Always model DSCR with and without major tenant renewal assumptions.',
  },
  {
    badge: 'Refinance', color: '#b45309',
    p1: 'In 2026, many properties acquired in 2019–2021 at 4–5% rates now face refinance at 7.5–8% — a 300–400bps increase that materially compresses DSCR. A deal that was 1.40x at 4.5% rate on the same NOI now shows 0.90x–1.00x at 7.5%. Owners face three choices: inject equity to lower LTV, wait for rates to drop, or sell at potentially below-original-thesis prices. The "maturity wall" of 2024–2027 is forcing this calculation across hundreds of billions of commercial RE loans.',
    p2: 'Use the DSCR calculator\'s Find Required NOI mode to determine what income you need to support refinance at current rates. If required NOI exceeds current stabilized NOI, a bridge-and-execute strategy (improve NOI through rent increases, then refinance) may be the path. Conservative underwriters will use in-place T-12 NOI — improving NOI before refinance application is the most reliable path to better DSCR.',
  },
  {
    badge: 'Target Underwriting', color: '#059669',
    p1: 'Instead of asking "is 75% LTV enough?", flip the question: "what LTV gets me to 1.25x DSCR?" Use the Find Max Loan Amount mode to determine your borrowing ceiling from the lender\'s perspective. This gives you a more approval-ready analysis before approaching lenders — and prevents the common mistake of structuring a deal around LTV rather than income coverage.',
    p2: 'Formula: Max Loan = (NOI ÷ Target DSCR) ÷ Annual Payment Factor. For a property with $100,000 NOI at 7.5% / 30yr, the max loan at 1.25x DSCR is approximately $762,000. If market price implies 75% LTV = $900,000 loan, you have a $138,000 gap — requiring either more equity, a price reduction, or higher NOI to qualify.',
  },
]

const applications = [
  { title: 'Loan Pre-Qualification Screening', body: 'Calculate DSCR before submitting to any lender. If DSCR is below 1.20x at 75% LTV, adjust your offer price, down payment, or evaluate a DSCR loan product instead. Knowing your DSCR before applying avoids wasting time on non-qualifying deals.' },
  { title: 'Comparing Agency vs Non-QM Products', body: 'Property DSCR and DSCR Loan formulas often produce different results for the same property — DSCR loans\' simpler Rent ÷ PITIA formula excludes operating expenses, often showing higher DSCR. Compare both to find the best loan product fit.' },
  { title: 'Refinance Feasibility', body: 'Plug in your current NOI and today\'s rates to see if the existing deal can be refinanced. A 2020 acquisition at 4.5% may show 0.95x DSCR at 7.5% — immediate signal that refinance requires equity injection or rate improvement.' },
  { title: 'Deal Sizing from Lender Perspective', body: 'Use Find Max Loan to determine how much you can borrow at 1.25x DSCR. This tells you the maximum acquisition price supportable by the income — work backward from loan capacity to offer price.' },
  { title: 'Stress Testing for Underwriter Meetings', body: 'Bring the stressed DSCR table to lender meetings — +1% and +2% scenarios, plus LTV sensitivity. Proactively showing resilience analysis builds credibility with underwriters and often accelerates approval.' },
  { title: 'Portfolio Debt Strategy', body: 'Rank portfolio properties by DSCR to prioritize refinance vs hold vs sell decisions. Properties with DSCR below 1.10x facing loan maturity are prime candidates for either equity injection, sale, or bridge lender solutions.' },
]

const industryStandards = [
  {
    icon: 'F', title: 'Fannie Mae & Freddie Mac Multifamily', intro: null,
    points: [
      'Fannie Mae Multifamily Conventional: <strong>1.25x DSCR minimum</strong> for stabilized properties at up to 80% LTV',
      'Freddie Mac Multifamily Fixed-Rate: <strong>1.25x DSCR</strong>, 80% LTV max per standard guidelines',
      'Fannie Mae MAH (Multifamily Affordable Housing): <strong>1.15x DSCR minimum</strong> with affordability covenants attached',
      'Both GSEs use 30-year amortization for sizing — even on 10-year balloon loans, debt service is calculated on full 30-year schedule',
    ],
  },
  {
    icon: 'L', title: 'DSCR Loan Programs (Non-QM)', intro: 'DSCR loans require no W-2 income documentation — qualification is based purely on property income coverage (Rent ÷ PITIA). Rates run 0.5–1.5% above conventional.',
    points: [
      'Conservative DSCR loan: <strong>1.20x minimum</strong>, typically 75% LTV max, ~0.5% rate premium',
      'Standard DSCR loan: <strong>1.10x–1.15x minimum</strong>, 75–80% LTV, 0.75–1.0% rate premium',
      'Aggressive DSCR loan: <strong>1.00x minimum</strong>, 70–75% LTV, 1.0–1.5% rate premium',
      'All DSCR loan programs use Monthly Rent ÷ Monthly PITIA formula — operating expenses excluded',
    ],
  },
  {
    icon: 'C', title: 'Commercial Lender Thresholds', intro: null,
    points: [
      'CMBS multifamily: <strong>1.25x–1.30x</strong> typical minimum, stress-tested at +2% rate',
      'CMBS retail / industrial: <strong>1.25x–1.35x minimum</strong> with tenant credit analysis',
      'CMBS office: <strong>1.35x+</strong> increasingly required in 2026 due to structural demand shift',
      'Portfolio / bank loans: <strong>1.20x–1.30x</strong> for stabilized assets, varies by institution',
      'Bridge lenders: may accept <strong>1.00x–1.10x</strong> with clear value-add stabilization path',
    ],
  },
]

const limitations = [
  { n: 1, title: 'Operating Metric Only — No Equity Returns', body: 'DSCR measures debt coverage, not investor returns. A 1.30x DSCR deal could still be a poor investment if it ties up too much equity for thin cash-on-cash return. A DSCR of 1.10x with strong appreciation can outperform a 1.40x DSCR deal in a flat market over 10 years. For every DSCR calculation, pair it with Cash-on-Cash Return (levered equity yield) and Cap Rate (unlevered asset yield) to understand whether the deal makes financial sense beyond simply clearing the lender threshold. DSCR tells the lender whether to lend — it does not tell the investor whether to buy.' },
  { n: 2, title: 'Point-in-Time Snapshot', body: 'DSCR uses current or Year 1 NOI. Value-add and lease-up deals show weak DSCR during the renovation period, then strong stabilized DSCR once occupied. Lenders size on stabilized NOI — always present T-12 actuals AND projected stabilized NOI separately to show the full picture. Bridge lenders and construction lenders handle transitional DSCR differently than permanent agency lenders — make sure you\'re using the right formula for the right loan product and property stage.' },
  { n: 3, title: 'Sensitive to Rate Assumption', body: 'DSCR moves materially with interest rate. A 0.5% rate change can shift DSCR by 0.08–0.12x on a typical 75% LTV deal. In 2026\'s rate environment, always check the stress test — and recognize that a rate drop of 1–2% in a refinance could unlock materially better loan terms or higher loan proceeds. Many acquisition analyses done in 2024–2025 used optimistic rate assumptions — if your deal only works at 6.5% and current rates are 7.5%, that\'s a gap you need to explicitly underwrite.' },
  { n: 4, title: 'Ignores Principal Paydown and Appreciation', body: 'DSCR says nothing about long-term wealth creation. The debt paydown benefit (equity built through amortization) and appreciation are completely outside the DSCR framework. A deal with 1.10x DSCR in a high-growth market can create more wealth than a 1.40x DSCR deal in a stagnant market — DSCR doesn\'t capture this. For full investment analysis, model the 5–10 year hold, include expected appreciation, amortization paydown, and the after-tax IRR. DSCR is Year 1 income coverage — complete investment analysis is much richer than a single ratio.' },
]

const whenNotToUse = [
  { case: 'All-cash purchases', reason: 'No debt → DSCR is mathematically infinite (or undefined). Use Cap Rate for unlevered analysis and Cash-on-Cash for return on equity measurement.' },
  { case: 'Short hold (under 3 years)', reason: 'IRR, exit cap rate, and appreciation drive returns more than Year 1 DSCR. A flip or quick-turn deal is better evaluated on gross margin and ARV, not debt coverage.' },
  { case: 'Heavy value-add / reposition', reason: 'Current DSCR during renovation is meaningless — use pro forma stabilized DSCR instead. Better still, use a bridge lender who underwrites stabilized value and NOI, not current operating results.' },
  { case: 'Land / development', reason: 'No operating income → DSCR does not apply. Use construction loan underwriting metrics: construction budget, LTC (loan-to-cost), and post-completion permanent loan feasibility.' },
]

const commonMistakes = [
  {
    title: 'Confusing Property DSCR with DSCR Loan formula',
    body: 'Property DSCR uses NOI (after ALL operating expenses). DSCR Loan uses Rent vs PITIA (before most operating expenses). The same property can show 1.20x Property DSCR and 1.40x DSCR Loan DSCR — both are correct for their product context. Applying the DSCR loan formula to a Fannie Mae deal (or vice versa) gives completely wrong underwriting results.',
  },
  {
    title: 'Using pro forma NOI instead of T-12 actuals',
    body: 'Lenders underwrite to actual operating history, not optimistic projections. A pro forma 1.30x DSCR typically lands at 1.10x–1.15x once the underwriter applies conservative vacancy, expense loads, and management fees. Underwriting to pro forma creates a gap between your analysis and lender approval — use T-12 actuals, then show your value-add stabilized projection separately.',
  },
  {
    title: 'Ignoring the stress test',
    body: 'A current-rate DSCR of 1.25x can fail at +1% stress. If stressed DSCR falls below 1.10x–1.15x, expect pricing bumps, tighter LTV, or outright denial from conservative underwriters who stress-test routinely. The stress test panel in this calculator shows exactly what lenders calculate before you walk in.',
  },
  {
    title: 'Treating "meets threshold" as automatic approval',
    body: 'Meeting the DSCR minimum is necessary but not sufficient. Lenders also evaluate sponsor credit, real estate experience, liquidity and reserves, property condition, occupancy history, market dynamics, and loan size minimums. DSCR gets you in the conversation — it doesn\'t close the loan.',
  },
  {
    title: 'Applying 2018-era benchmarks in 2026 rate environment',
    body: 'A 1.30x DSCR was routine in 2019 at 4.5% rates. In 2026 at 7.5%, that same property might show 1.05x on the same NOI and LTV. Don\'t call 1.15x DSCR "weak" by pre-2022 standards — in 2026 it meets Fannie MAH threshold and is a real underwriting result, not a red flag.',
  },
]

const faqs = [
  {
    q: 'What is a good DSCR for rental property in 2026?',
    a: 'Industry-standard DSCR thresholds: 1.50x+ Excellent (best pricing, all programs), 1.25x–1.49x Strong (meets Fannie Mae / Freddie Mac conventional minimum — the most common approval threshold), 1.15x–1.24x Moderate (meets Fannie MAH affordable program, limited conventional options), 1.00x–1.14x Marginal (non-QM DSCR loan territory), below 1.00x Fails all standard programs. In the 2026 rate environment at 7.5–8%, 1.25x is a realistic target for most investors — 2018-era expectations of 1.35x routinely require lower leverage or above-market rents today.',
  },
  {
    q: 'What is the difference between Property DSCR and DSCR Loan DSCR?',
    a: 'Property DSCR = Annual NOI ÷ Annual Debt Service (used for Fannie Mae, Freddie Mac, CMBS, and commercial loans). It deducts all operating expenses from income. DSCR Loan DSCR = Monthly Rent ÷ Monthly PITIA (used for non-QM investor loans that skip personal income documentation). PITIA is the gross monthly housing cost, not reduced by operating expenses. The same property can show 1.20x Property DSCR and 1.40x DSCR Loan DSCR — both are correct for their respective underwriting frameworks. This calculator clearly separates the two formulas.',
  },
  {
    q: 'What is PITIA in a DSCR calculation?',
    a: 'PITIA stands for Principal + Interest + Taxes + Insurance + HOA/Association fees. It is the total monthly housing payment used in DSCR loan underwriting — essentially everything the lender needs to be paid each month. Operating expenses like property management, maintenance, and repairs are NOT part of PITIA. This is why DSCR Loan DSCR (Rent ÷ PITIA) typically shows higher values than Property DSCR (NOI ÷ Debt Service) on the same property.',
  },
  {
    q: 'How do lenders stress test DSCR?',
    a: 'Underwriters recalculate DSCR at elevated rates, typically +1% and +2% above the loan rate — some conservative underwriters test +3%. A deal that is 1.25x at 7.5% but only 1.05x at 8.5% signals fragility. Conservative agency lenders (and most CMBS) require stressed DSCR to remain above 1.15x–1.20x — a deal passing at current rates but failing the stress test often receives pricing bumps, LTV reductions, or denial. The stress test in this calculator matches exactly how lenders run it.',
  },
  {
    q: 'Can I get a DSCR loan with less than 1.00x DSCR?',
    a: 'Generally no — below 1.00x means the property does not cover debt service, which fails the most basic investment lending requirement. Some aggressive non-QM lenders accept exactly 1.00x minimum, but only with strong borrower reserves (12+ months PITIA), low LTV (65–70%), and significant rate premiums (1.5%+ above conventional). The practical fix for a sub-1.00x DSCR is to reduce the loan amount, increase down payment, or find a property with a stronger rent-to-price ratio in the target market.',
  },
  {
    q: 'Is a higher DSCR always better?',
    a: 'From the lender\'s perspective, higher DSCR = lower risk and better pricing. From the investor\'s perspective, a very high DSCR may signal too much equity tied up for thin cash-on-cash return — a 2.00x DSCR at 50% LTV may produce a worse CoC than a 1.30x DSCR at 75% LTV for the same property. The practical recommendation: pair DSCR with Cash-on-Cash Return to balance lender approval with investor return — most experienced investors target 1.25x–1.40x DSCR alongside 8%+ CoC.',
  },
  {
    q: 'Does DSCR include capital expenditures (CapEx)?',
    a: 'Typically no — standard DSCR uses NOI which excludes CapEx by definition. However, some conservative lenders (particularly CMBS and agency for older assets) deduct replacement reserves from NOI before calculating DSCR. A lender applying $250/unit/year in replacement reserves on a 20-unit building deducts $5,000/year from NOI — materially impacting a deal near the 1.25x threshold. Always ask your specific lender about their NOI adjustments.',
  },
  {
    q: 'Why did my DSCR drop so much in 2026?',
    a: 'Interest rate environment is the single largest driver. The same property with the same NOI shows materially lower DSCR at 7.5% vs 4.5% — the debt service is simply 40–50% higher. A deal that was 1.40x DSCR in 2019 at 4.5% rate might show 0.95x–1.05x in 2026 at 7.5% on the same income and leverage. The calculator\'s rate sensitivity table shows exactly how your DSCR changes across a 4-point rate range — use it to plan your refinance timing or equity requirements.',
  },
]

const relatedCalcs = [
  { label: 'Cap Rate Calculator',        href: '/cap-rate-calculator' },
  { label: 'NOI Calculator',             href: '/noi-calculator' },
  { label: 'Cash-on-Cash Return',        href: '/cash-on-cash-calculator' },
  { label: 'Rental Property Calculator', href: '/rental-property-calculator' },
]

const propertyInputTable = [
  { field: 'Gross Rental Income', meaning: 'Total annual rent from all units before any deductions', source: 'Rent roll, T-12 operating statement, broker OM' },
  { field: 'Vacancy Rate', meaning: 'Expected percentage of units unoccupied or not paying rent', source: 'Historical T-12, CoStar, market comp surveys' },
  { field: 'Other Income', meaning: 'Laundry, parking, storage, pet fees, utility reimbursements', source: 'T-12 statement, lease addenda' },
  { field: 'Operating Expenses', meaning: 'All property expenses except mortgage: taxes, insurance, management, maintenance, utilities', source: 'T-12 actuals — not pro forma; lender will verify' },
  { field: 'Loan Amount', meaning: 'Borrowed amount or computed from purchase price × (1 − down payment %)', source: 'Purchase contract, lender LOI, or LTV calculation' },
  { field: 'Interest Rate', meaning: 'Annual interest rate on the loan (2026 typical: 7.5–8%)', source: 'Lender quote or term sheet' },
  { field: 'Loan Term', meaning: 'Amortization period — typically 30 years for agency multifamily', source: 'Loan product specs — use 30yr even for 10yr balloon' },
]

const dscrLoanInputTable = [
  { field: 'Monthly Rent', meaning: 'Current monthly gross rent from lease or market estimate', source: 'Current lease, rent comps, Rentometer, CoStar' },
  { field: 'Monthly Property Tax', meaning: 'Monthly property tax obligation (annual bill ÷ 12)', source: 'County records, tax bill, title report' },
  { field: 'Monthly Insurance', meaning: 'Hazard insurance premium (annual policy ÷ 12)', source: 'Insurance quote, existing policy' },
  { field: 'Monthly HOA', meaning: 'Homeowners Association fee if applicable', source: 'HOA disclosure, purchase contract' },
  { field: 'Monthly Association', meaning: 'Condo or PUD association fee if separate from HOA', source: 'Condo docs, association statement' },
  { field: 'Loan Amount + Rate', meaning: 'P&I is auto-calculated — no manual override to prevent conflicting inputs', source: 'Lender quote; P&I computed via standard amortization' },
]

const outputTable = [
  { output: 'DSCR (current rate)', meaning: 'Ratio of income to debt service at the specified rate', use: 'Match to lender program thresholds (1.25x, 1.15x, 1.00x)' },
  { output: 'Stressed DSCR +1%', meaning: 'DSCR recalculated with interest rate 1% higher', use: 'Lender stress test — primary resilience indicator' },
  { output: 'Stressed DSCR +2%', meaning: 'DSCR recalculated with interest rate 2% higher', use: 'Conservative underwriting stress — extreme scenario' },
  { output: 'Max Loan at 1.25x (Property)', meaning: 'Largest loan amount that achieves exactly 1.25x DSCR given current NOI', use: 'Know your borrowing ceiling before approaching lenders' },
  { output: 'Rent Cushion (DSCR Loan)', meaning: 'Monthly dollar difference between rent and total PITIA', use: 'Margin of safety in dollar terms for DSCR loan deals' },
  { output: 'Annual Debt Service', meaning: 'Total annual principal and interest payments on the loan', use: 'DSCR denominator; appears in sensitivity tables' },
  { output: 'Monthly Payment (P&I)', meaning: 'Auto-calculated principal and interest payment from loan amount, rate, and term', use: 'Cross-check lender quote; feeds PITIA in DSCR Loan mode' },
  { output: 'EGI (Effective Gross Income)', meaning: 'Gross rental income minus vacancy loss plus other income', use: 'NOI numerator starting point; used by agency underwriters' },
  { output: 'LTV %', meaning: 'Loan-to-value ratio derived from loan amount and purchase price', use: 'Verify deal is within program LTV limits (70–80% for most products)' },
]
</script>
