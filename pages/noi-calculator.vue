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
            <li class="text-gray-700 font-semibold">NOI Calculator</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- PAGE TITLE + ON THIS PAGE NAV -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-6">

        <div class="mb-4">
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            NOI Calculator — Free Net Operating Income Tool for US Real Estate Investors
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
            <li><a href="#what-is-noi" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is NOI</a></li>
            <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
            <li><a href="#include-exclude" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Include &amp; Exclude</a></li>
            <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
            <li><a href="#noi-vs-cashflow" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">NOI vs Cash Flow</a></li>
            <li><a href="#property-types" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Property Types</a></li>
            <li><a href="#common-mistakes" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Common Mistakes</a></li>
            <li><a href="#market-ratios" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Market Ratios</a></li>
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
              <li><a href="#what-is-noi" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is NOI</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
              <li><a href="#include-exclude" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Include &amp; Exclude</a></li>
              <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
              <li><a href="#noi-vs-cashflow" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">NOI vs Cash Flow</a></li>
              <li><a href="#property-types" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Property Types</a></li>
              <li><a href="#common-mistakes" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Common Mistakes</a></li>
              <li><a href="#market-ratios" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Market Ratios</a></li>
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

    <!-- MOBILE LIVE RESULT BAR -->
    <div class="lg:hidden sticky top-[4.5rem] z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <div class="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <svg class="w-4 h-4 flex-shrink-0" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          <span v-if="calcMode === 'calc-noi'">Annual NOI</span>
          <span v-else-if="calcMode === 'find-income'">Required GRI</span>
          <span v-else>Max Expenses</span>
        </div>
        <div class="flex items-center gap-3">
          <template v-if="calcMode === 'calc-noi'">
            <span v-if="hasResult" class="text-2xl font-extrabold leading-none" :class="annualNOI >= 0 ? '' : 'text-red-600'" :style="annualNOI >= 0 ? 'color:#1e3a5f;' : ''">
              {{ formatCurrency(annualNOI) }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="hasResult" class="text-xs font-bold px-2.5 py-1 rounded-full text-white" :style="`background: ${tierColor}`">{{ tier }}</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <template v-else-if="calcMode === 'find-income'">
            <span v-if="requiredGRI" class="text-xl font-extrabold leading-none text-blue-700">{{ formatCurrency(requiredGRI) }}</span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="requiredGRI" class="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">Required</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <template v-else>
            <span v-if="maxExpenses !== null" class="text-xl font-extrabold leading-none text-emerald-700">{{ formatCurrency(maxExpenses) }}</span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="maxExpenses !== null" class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">Max</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
        </div>
      </div>
    </div>

    <!-- MAIN CALCULATOR -->
    <main id="calculator" class="max-w-[1100px] mx-auto px-4 pt-8 pb-10">
      <div class="rounded-3xl p-[3px]" style="background: linear-gradient(135deg, #1e3a5f 0%, #f59e0b 50%, #1e3a5f 100%);">
      <div class="bg-white rounded-[21px] shadow-xl shadow-slate-200/60" style="overflow: clip;">

      <!-- MODE SELECTOR -->
      <div class="border-b border-gray-100 rounded-t-2xl bg-white">
        <div class="px-5 pt-4 pb-3">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">What do you want to calculate?</p>
          <div class="calc-mode-tabs">
            <button @click="calcMode = 'calc-noi'"
              class="calc-mode-tab"
              :class="calcMode === 'calc-noi' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'calc-noi' ? 'color:#1e3a5f;' : ''">Calculate NOI</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'calc-noi' ? 'text-amber-700' : 'text-gray-400'">EGI − Operating Expenses</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'calc-noi' ? 'bg-amber-100 text-amber-800' : 'bg-gray-200 text-gray-400'">Standard</span>
            </button>
            <button @click="calcMode = 'find-income'"
              class="calc-mode-tab"
              :class="calcMode === 'find-income' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-income' ? 'color:#1e3a5f;' : ''">Find Required Income</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-income' ? 'text-blue-700' : 'text-gray-400'">Target NOI → Required GRI</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-income' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
            <button @click="calcMode = 'find-expenses'"
              class="calc-mode-tab"
              :class="calcMode === 'find-expenses' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-expenses' ? 'color:#1e3a5f;' : ''">Find Max Expenses</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-expenses' ? 'text-emerald-700' : 'text-gray-400'">GRI + Target NOI → Max OpEx</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-expenses' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
          </div>
          <div class="mt-2.5">
            <p v-if="calcMode === 'calc-noi'" class="text-xs text-gray-500 leading-relaxed">
              Enter gross rental income, vacancy, other income, and operating expenses to calculate your property's Net Operating Income.
            </p>
            <p v-else-if="calcMode === 'find-income'" class="text-xs text-blue-700 leading-relaxed bg-blue-50 px-3 py-1.5 rounded-lg">
              Enter your <strong>target NOI</strong>, vacancy, other income, and expenses — the calculator shows the Gross Rental Income required to hit that target.
            </p>
            <p v-else class="text-xs text-emerald-700 leading-relaxed bg-emerald-50 px-3 py-1.5 rounded-lg">
              Enter your GRI, vacancy, other income, and a <strong>target NOI</strong> — the calculator shows the maximum operating expenses allowed.
            </p>
          </div>
        </div>
      </div>

      <!-- TWO COLUMN BODY -->
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch">

        <!-- INPUTS -->
        <div class="calc-inputs border-b lg:border-b-0 lg:border-r border-gray-200 bg-white min-w-0">

          <!-- TARGET NOI — reverse modes only -->
          <div v-if="calcMode !== 'calc-noi'" class="border-b border-gray-100">
            <div class="calc-section-header">
              <div>
                <h2 class="calc-section-title">Target NOI</h2>
                <p class="text-xs mt-0.5 ml-3" :class="calcMode === 'find-income' ? 'text-blue-600' : 'text-emerald-600'">
                  {{ calcMode === 'find-income' ? 'What annual NOI do you need?' : 'What annual NOI are you targeting?' }}
                </p>
              </div>
            </div>
            <div class="px-4 py-3">
              <label for="target-noi" class="block text-xs font-semibold text-gray-700 mb-1">
                Target Annual NOI
              </label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                <input id="target-noi" v-model="form.targetNOI" type="number" min="0" step="1000"
                  placeholder="Enter target annual NOI"
                  class="w-full pl-8 pr-4 py-2 rounded-xl border outline-none text-gray-900 font-bold text-base transition bg-white"
                  :class="calcMode === 'find-income'
                    ? 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/20'
                    : 'border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20'" />
              </div>
              <p class="text-xs text-gray-400 mt-1">Net Operating Income before debt service</p>
            </div>
          </div>

          <!-- INCOME SECTION -->
          <div v-if="calcMode !== 'find-income'" class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Gross Income</h2>
            </div>
            <div class="px-4 py-3 space-y-3">

              <div>
                <label for="gross-rent" class="block text-xs font-semibold text-gray-700 mb-1">
                  Gross Scheduled Rent (Annual)
                  <span class="ml-1 text-xs font-normal text-gray-400">(100% occupancy)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="gross-rent" v-model="form.grossRent" type="number" min="0" step="100"
                    placeholder="Enter gross annual rent"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                </div>
                <p class="text-xs text-gray-400 mt-1">All units combined, 12 months × 100% occupancy</p>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label for="other-income" class="block text-xs font-semibold text-gray-700 mb-1">Other Income (Annual)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input id="other-income" v-model="form.otherIncome" type="number" min="0" step="100"
                      placeholder="e.g. 2,400"
                      class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5">Laundry, parking, storage</p>
                </div>
                <div>
                  <label for="num-units" class="block text-xs font-semibold text-gray-700 mb-1">
                    Number of Units
                    <span class="text-xs font-normal text-gray-400 ml-1">(optional)</span>
                  </label>
                  <input id="num-units" v-model="form.numUnits" type="number" min="1" step="1"
                    placeholder="e.g. 4"
                    class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                  <p class="text-xs text-gray-400 mt-0.5">For per-unit metrics</p>
                </div>
              </div>

              <div>
                <label for="vacancy-rate" class="block text-xs font-semibold text-gray-700 mb-1">
                  Vacancy Rate
                  <span class="text-xs font-normal text-gray-400 ml-1">(typical 5–8%)</span>
                </label>
                <div class="relative">
                  <input id="vacancy-rate" v-model="form.vacancyRate" type="number" min="0" max="100" step="0.5"
                    placeholder="Enter vacancy rate"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
              </div>

              <div v-if="egi > 0" class="p-2.5 rounded-xl text-xs font-medium text-blue-800 bg-blue-50 border border-blue-100">
                Effective Gross Income: <span class="font-bold">{{ formatCurrency(egi) }}</span>
                <span class="text-blue-500 ml-1">(after {{ form.vacancyRate || 0 }}% vacancy)</span>
              </div>

            </div>
          </div>

          <!-- INCOME PARAMETERS for find-income mode -->
          <div v-if="calcMode === 'find-income'" class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Income Parameters</h2>
            </div>
            <div class="px-4 py-3 space-y-3">
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label for="fi-other-income" class="block text-xs font-semibold text-gray-700 mb-1">Other Income (Annual)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input id="fi-other-income" v-model="form.otherIncome" type="number" min="0" step="100"
                      placeholder="e.g. 2,400"
                      class="w-full pl-8 pr-4 py-2 rounded-xl border border-blue-200 hover:border-blue-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5">Laundry, parking, storage</p>
                </div>
                <div>
                  <label for="fi-vacancy" class="block text-xs font-semibold text-gray-700 mb-1">
                    Vacancy Rate
                    <span class="text-xs font-normal text-gray-400 ml-1">(5–8%)</span>
                  </label>
                  <div class="relative">
                    <input id="fi-vacancy" v-model="form.vacancyRate" type="number" min="0" max="100" step="0.5"
                      placeholder="e.g. 5"
                      class="w-full pr-8 pl-4 py-2 rounded-xl border border-blue-200 hover:border-blue-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- EXPENSES — calc-noi and find-income modes -->
          <div v-if="calcMode !== 'find-expenses'" class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Annual Operating Expenses</h2>
            </div>
            <div class="px-4 py-3 space-y-3">

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

              <div v-if="expenseMode === 'simple'">
                <label for="total-expenses-simple" class="block text-xs font-semibold text-gray-700 mb-1">
                  Total Annual Expenses
                  <span class="ml-1 text-xs font-normal text-gray-400">(taxes, insurance, maintenance, mgmt)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="total-expenses-simple" v-model="form.totalExpensesSimple" type="number" min="0" step="100"
                    placeholder="Enter total yearly operating expenses"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                </div>
                <p class="text-xs text-gray-400 mt-1">
                  Rule of thumb: 35–50% of gross income. Excludes mortgage, depreciation, income taxes.
                  <span v-if="(Number(form.grossRent) || 0) > 0" class="text-gray-500">
                    For this property: {{ formatCurrency((Number(form.grossRent)||0) * 0.35) }}–{{ formatCurrency((Number(form.grossRent)||0) * 0.50) }}.
                  </span>
                </p>
              </div>

              <div v-if="expenseMode === 'detailed'" class="space-y-2">
                <p class="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                  All fields are <strong>annual</strong> figures. NOI excludes mortgage payments, depreciation &amp; income taxes.
                </p>
                <div class="grid grid-cols-2 gap-3">
                  <div v-for="exp in expenseFields" :key="exp.key">
                    <label :for="`exp-${exp.key}`" class="block text-xs font-semibold text-gray-600 mb-1">{{ exp.label }}</label>
                    <div class="relative">
                      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                      <input :id="`exp-${exp.key}`" v-model="form.expenses[exp.key]" type="number" min="0" step="100"
                        :placeholder="exp.placeholder"
                        class="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition bg-white" />
                    </div>
                    <p v-if="exp.hint" class="text-xs text-gray-400 mt-0.5">{{ exp.hint }}</p>
                  </div>
                </div>
                <div class="pt-2 border-t border-gray-100 flex justify-between items-center text-sm">
                  <span class="text-gray-500 font-medium">Total Operating Expenses</span>
                  <span class="font-bold text-gray-900">{{ formatCurrency(detailedTotalExpenses) }}</span>
                </div>
              </div>

            </div>
          </div>

          <!-- INCOME + VACANCY for find-expenses mode -->
          <div v-if="calcMode === 'find-expenses'" class="border-b border-gray-100">
            <!-- already shown in the income section above (calcMode !== 'find-income') -->
          </div>

          <!-- Reset -->
          <div class="px-4 py-3">
            <button @click="resetForm"
              class="w-full py-2 rounded-lg border border-gray-200 text-gray-400 font-medium text-xs hover:border-gray-300 hover:text-gray-600 transition">
              Reset All Fields
            </button>
          </div>

        </div>

        <!-- RESULTS -->
        <div class="min-w-0 lg:relative lg:overflow-hidden">
        <div class="bg-gray-50 scrollbar-thin lg:absolute lg:inset-0 lg:overflow-y-auto">
        <div class="space-y-4 p-4 lg:p-5">

          <!-- Main Result Card -->
          <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">

            <!-- MODE: Calculate NOI -->
            <div v-if="calcMode === 'calc-noi'" class="px-5 py-5 border-b border-gray-100">
              <p class="text-xs font-semibold uppercase tracking-wide mb-2 text-gray-400">Annual NOI</p>
              <div class="flex items-end gap-3 mb-2">
                <span class="text-5xl font-extrabold leading-none"
                  :class="hasResult ? (annualNOI >= 0 ? '' : 'text-red-600') : 'text-gray-200'"
                  :style="hasResult && annualNOI >= 0 ? 'color:#1e3a5f;' : ''">
                  {{ hasResult ? formatCurrency(annualNOI) : '—' }}
                </span>
                <span v-if="hasResult" class="text-xs font-bold px-2.5 py-1 rounded-full text-white mb-1" :style="`background: ${tierColor}`">
                  {{ tier }}
                </span>
              </div>
              <p v-if="hasResult" class="text-sm text-gray-500">Monthly: <span class="font-semibold text-gray-800">{{ formatCurrency(annualNOI / 12) }}</span></p>
              <div v-else class="text-sm text-gray-300">Enter gross rent to calculate NOI</div>
            </div>

            <!-- MODE: Find Required Income -->
            <div v-else-if="calcMode === 'find-income'" class="px-5 py-5 border-b border-gray-100">
              <p class="text-xs font-semibold uppercase tracking-wide mb-1 text-gray-400">Required Gross Rent</p>
              <p class="text-xs mb-2 text-gray-400">
                {{ requiredGRI ? `to generate ${formatCurrency(Number(form.targetNOI))} NOI/yr` : 'Target NOI ÷ (1 − vacancy) + expenses' }}
              </p>
              <div class="font-extrabold mb-3 leading-none"
                :class="requiredGRI ? 'text-5xl' : 'text-6xl text-gray-200'"
                :style="requiredGRI ? 'color:#1e40af;' : ''">
                {{ requiredGRI ? formatCurrency(requiredGRI) : '—' }}
              </div>
              <div v-if="requiredGRI" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold text-xs bg-blue-100 text-blue-700">
                ≈ {{ formatCurrency(requiredGRI / 12) }}/mo gross rent needed
              </div>
              <div v-else class="text-sm text-gray-300">Enter target NOI, vacancy, and expenses</div>
            </div>

            <!-- MODE: Find Max Expenses -->
            <div v-else class="px-5 py-5 border-b border-gray-100">
              <p class="text-xs font-semibold uppercase tracking-wide mb-1 text-gray-400">Max Operating Expenses</p>
              <p class="text-xs mb-2 text-gray-400">
                {{ maxExpenses !== null ? `EGI − target NOI of ${formatCurrency(Number(form.targetNOI))}` : 'EGI − Target NOI' }}
              </p>
              <div class="font-extrabold mb-3 leading-none"
                :class="maxExpenses !== null ? 'text-5xl' : 'text-6xl text-gray-200'"
                :style="maxExpenses !== null ? 'color:#065f46;' : ''">
                {{ maxExpenses !== null ? formatCurrency(maxExpenses) : '—' }}
              </div>
              <div v-if="maxExpenses !== null" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold text-xs bg-emerald-100 text-emerald-700">
                {{ maxExpenses >= 0 ? `${((maxExpenses / egi) * 100).toFixed(1)}% of EGI` : 'EGI too low for target' }}
              </div>
              <div v-else class="text-sm text-gray-300">Enter GRI, vacancy, and target NOI</div>
            </div>

            <!-- NOI Breakdown — calc-noi mode -->
            <div v-if="calcMode === 'calc-noi' && hasResult" class="p-6 space-y-2">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Breakdown</h3>

              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Gross Scheduled Rent</span>
                <span class="font-semibold text-green-600">+{{ formatCurrency(Number(form.grossRent) || 0) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Other Income</span>
                <span class="font-semibold text-green-600">+{{ formatCurrency(Number(form.otherIncome) || 0) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">− Vacancy ({{ form.vacancyRate || 0 }}%)</span>
                <span class="font-semibold text-red-400">-{{ formatCurrency(vacancyLoss) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-100 font-bold" style="color: #1e3a5f;">
                <span>= Effective Gross Income</span>
                <span>{{ formatCurrency(egi) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">− Operating Expenses</span>
                <span class="font-semibold text-red-400">-{{ formatCurrency(totalExpensesCalc) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 font-extrabold text-base" style="color: #1e3a5f;">
                <span>= NOI</span>
                <span :class="annualNOI < 0 ? 'text-red-600' : ''">{{ formatCurrency(annualNOI) }}</span>
              </div>

              <!-- Formula box -->
              <div class="mt-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <p class="text-xs text-center text-gray-500 font-medium">NOI = EGI − Operating Expenses</p>
                <p class="text-xs text-center text-gray-500 mt-1">
                  {{ formatCurrency(egi) }} − {{ formatCurrency(totalExpensesCalc) }} = <strong style="color:#1e3a5f;">{{ formatCurrency(annualNOI) }}</strong>
                </p>
              </div>

              <!-- Key metrics grid -->
              <div v-if="totalExpensesCalc > 0" class="mt-3 grid grid-cols-3 gap-2">
                <div class="rounded-xl p-3 text-center border"
                  :class="expenseRatio > 60 ? 'bg-red-50 border-red-200' : expenseRatio > 45 ? 'bg-amber-50 border-amber-200' : 'bg-green-50 border-green-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="expenseRatio > 60 ? 'text-red-500' : expenseRatio > 45 ? 'text-amber-600' : 'text-green-600'">Exp. Ratio</p>
                  <p class="text-base font-extrabold"
                    :class="expenseRatio > 60 ? 'text-red-700' : expenseRatio > 45 ? 'text-amber-700' : 'text-green-700'">
                    {{ expenseRatio.toFixed(1) }}%</p>
                  <p class="text-xs text-gray-400 mt-0.5">of EGI</p>
                </div>
                <div class="rounded-xl p-3 text-center border"
                  :class="noiMargin < 0 ? 'bg-red-50 border-red-200' : noiMargin < 40 ? 'bg-amber-50 border-amber-200' : 'bg-green-50 border-green-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="noiMargin < 0 ? 'text-red-500' : noiMargin < 40 ? 'text-amber-600' : 'text-green-600'">NOI Margin</p>
                  <p class="text-base font-extrabold"
                    :class="noiMargin < 0 ? 'text-red-700' : noiMargin < 40 ? 'text-amber-700' : 'text-green-700'">
                    {{ noiMargin.toFixed(1) }}%</p>
                  <p class="text-xs text-gray-400 mt-0.5">of GRI</p>
                </div>
                <div v-if="noiPerUnit !== null" class="rounded-xl p-3 text-center border border-gray-100 bg-gray-50">
                  <p class="text-xs font-semibold text-gray-500 mb-0.5">NOI/Unit</p>
                  <p class="text-base font-extrabold text-gray-700">{{ formatCurrency(noiPerUnit) }}</p>
                  <p class="text-xs text-gray-400 mt-0.5">per year</p>
                </div>
              </div>

              <!-- Income bar visualization -->
              <div v-if="(Number(form.grossRent)||0) > 0" class="mt-4">
                <h4 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Income Breakdown</h4>
                <div class="flex h-5 rounded-lg overflow-hidden w-full" style="background: #f1f5f9;">
                  <div title="Vacancy Loss" class="transition-all duration-300 flex-shrink-0"
                    :style="`width: ${vacancyBarPct}%; background: #fca5a5;`"></div>
                  <div title="Operating Expenses" class="transition-all duration-300 flex-shrink-0"
                    :style="`width: ${expenseBarPct}%; background: #fbbf24;`"></div>
                  <div v-if="annualNOI >= 0" title="NOI" class="transition-all duration-300 flex-shrink-0"
                    :style="`width: ${noiBarPct}%; background: #34d399;`"></div>
                </div>
                <div v-if="annualNOI < 0" class="mt-1.5 flex items-center gap-2 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 px-2.5 py-1.5 rounded-lg">
                  <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                  Expenses exceed EGI — NOI is negative
                </div>
                <div class="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  <span class="flex items-center gap-1.5 text-xs text-gray-500">
                    <span class="inline-block w-2.5 h-2.5 rounded-sm bg-red-300"></span>Vacancy
                  </span>
                  <span class="flex items-center gap-1.5 text-xs text-gray-500">
                    <span class="inline-block w-2.5 h-2.5 rounded-sm bg-amber-400"></span>Expenses
                  </span>
                  <span v-if="annualNOI >= 0" class="flex items-center gap-1.5 text-xs text-gray-500">
                    <span class="inline-block w-2.5 h-2.5 rounded-sm bg-emerald-400"></span>NOI
                  </span>
                </div>
              </div>

            </div>

            <!-- Find Income Breakdown -->
            <div v-if="calcMode === 'find-income' && requiredGRI" class="p-6 space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">How we got there</h3>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Target NOI</span>
                <span class="font-semibold text-blue-700">{{ formatCurrency(Number(form.targetNOI)) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Operating Expenses</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(totalExpensesCalc) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Other Income</span>
                <span class="font-semibold text-green-600">{{ formatCurrency(Number(form.otherIncome) || 0) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Vacancy Rate</span>
                <span class="font-semibold text-gray-700">{{ form.vacancyRate || 0 }}%</span>
              </div>
              <div class="flex justify-between items-center py-3">
                <span class="text-sm font-extrabold text-gray-800">Required Gross Rent</span>
                <span class="font-extrabold text-blue-800 text-base">{{ formatCurrency(requiredGRI) }}</span>
              </div>
              <div class="p-3 rounded-xl bg-blue-50 border border-blue-100">
                <p class="text-xs text-center text-blue-700 font-medium">
                  GRI = (NOI + expenses − other) ÷ (1 − vacancy%)
                </p>
                <p class="text-xs text-center text-gray-400 mt-1 italic">Solve for GRI given target NOI.</p>
              </div>
            </div>

            <!-- Find Max Expenses Breakdown -->
            <div v-if="calcMode === 'find-expenses' && maxExpenses !== null" class="p-6 space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">How we got there</h3>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Gross Scheduled Rent</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(Number(form.grossRent) || 0) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Other Income</span>
                <span class="font-semibold text-green-600">+{{ formatCurrency(Number(form.otherIncome) || 0) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">− Vacancy ({{ form.vacancyRate || 0 }}%)</span>
                <span class="font-semibold text-red-400">-{{ formatCurrency(vacancyLoss) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-100 font-bold" style="color: #1e3a5f;">
                <span>= Effective Gross Income</span>
                <span>{{ formatCurrency(egi) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">− Target NOI</span>
                <span class="font-semibold text-gray-500">-{{ formatCurrency(Number(form.targetNOI) || 0) }}</span>
              </div>
              <div class="flex justify-between items-center py-3">
                <span class="text-sm font-extrabold text-gray-800">Max Expenses</span>
                <span class="font-extrabold text-emerald-700 text-base">{{ formatCurrency(maxExpenses) }}</span>
              </div>
              <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                <p class="text-xs text-center text-emerald-700 font-medium">
                  Max Expenses = EGI − Target NOI = {{ formatCurrency(egi) }} − {{ formatCurrency(Number(form.targetNOI)||0) }} = <strong>{{ formatCurrency(maxExpenses) }}</strong>
                </p>
              </div>
            </div>

            <!-- Empty state -->
            <div v-if="!hasResult && calcMode === 'calc-noi'" class="p-8 text-center">
              <svg class="w-10 h-10 text-gray-200 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              <p class="text-gray-400 font-medium text-sm">Enter gross rent to calculate NOI</p>
              <p class="text-gray-300 text-xs mt-1">Results update in real time</p>
            </div>

          </div>

          <!-- Implied Property Value table — calc-noi mode, positive NOI -->
          <div v-if="calcMode === 'calc-noi' && hasResult && annualNOI > 0" class="bg-white rounded-xl border border-gray-200 p-5">
            <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Implied Property Value</h3>
            <p class="text-xs text-gray-500 mb-3">Value = NOI ÷ Cap Rate</p>
            <div class="space-y-1">
              <div v-for="cr in [4, 5, 6, 7, 8, 9, 10]" :key="cr"
                class="flex justify-between text-sm px-2 py-1.5 rounded-lg"
                :class="cr === 6 ? 'font-bold bg-amber-50' : 'text-gray-600'">
                <span :style="cr === 6 ? 'color:#92400e;' : ''">At {{ cr }}% cap rate</span>
                <span :style="cr === 6 ? 'color:#92400e;' : ''">{{ formatCurrency(annualNOI / (cr / 100)) }}</span>
              </div>
            </div>
            <p class="text-xs text-gray-400 mt-2 italic">Use to gauge fair market value vs. asking price.</p>
          </div>

        </div>
        </div>
        </div>

      </div>
      </div>
      </div>

      <!-- SEO CONTENT -->
      <div class="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

      <!-- Intro -->
      <div class="border-b border-gray-100 px-8 py-8">
        <div class="space-y-3">
          <p class="text-gray-700 text-base leading-relaxed">
            <strong>Net Operating Income (NOI)</strong> is the single most important number in US real estate investment analysis. It drives cap rate calculations, DSCR underwriting, income-approach valuations, and every serious proforma an investor builds. This free NOI calculator covers all three use cases investors actually need: calculate NOI from income and expenses, find the gross rent required to hit a target NOI, and determine the maximum expenses allowed to achieve a specific return.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            Unlike simplified spreadsheets, this tool separates Gross Scheduled Rent from Other Income, applies vacancy correctly before calculating EGI, and flags Negative NOI scenarios with a clear tier label. All results update in real time — no signup required.
          </p>
        </div>
      </div>

      <!-- Overview -->
      <div id="overview" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">Overview</h2>
        <p class="text-gray-600 leading-relaxed mb-3">
          The <strong>NOI calculator</strong> is designed for US real estate investors who need a fast, reliable way to analyze income-producing properties — from single-family rentals to large multifamily and commercial assets. It computes Net Operating Income from gross rental income, vacancy, other income sources, and operating expenses, or works in reverse to answer the two critical underwriting questions: "What rent do I need?" and "How much can I spend?"
        </p>
        <p class="text-gray-600 leading-relaxed">
          NOI is an <strong>unlevered metric</strong> — it does not include mortgage payments or financing costs. This makes it the ideal tool for comparing properties regardless of how they are financed, for satisfying lender DSCR requirements, and for valuing properties using the income approach.
        </p>
      </div>

      <!-- How to Use -->
      <div id="how-to-use" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">How to Use This NOI Calculator</h2>
        <ol class="space-y-4">
          <li class="flex gap-4">
            <span class="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5" style="background:#1e3a5f;">1</span>
            <div>
              <p class="font-semibold text-gray-800 mb-1">Select your calculation mode</p>
              <p class="text-gray-600 text-sm leading-relaxed"><strong>Calculate NOI</strong> — standard forward calculation. Enter income and expenses, get NOI. Use this to evaluate a property you're analyzing. <strong>Find Required Income</strong> — reverse mode for acquisition targeting. Know your target NOI, expenses, and vacancy, and find the minimum gross rent the property must generate. <strong>Find Max Expenses</strong> — reverse mode for expense budgeting. Know your income and target return, and find out how much you can afford to spend on operations.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <span class="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5" style="background:#1e3a5f;">2</span>
            <div>
              <p class="font-semibold text-gray-800 mb-1">Enter Gross Scheduled Rent</p>
              <p class="text-gray-600 text-sm leading-relaxed">This is 100% occupancy annual rent for all units — what you'd collect if every unit were rented for the full year. Do not subtract vacancy here; the calculator handles that separately.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <span class="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5" style="background:#1e3a5f;">3</span>
            <div>
              <p class="font-semibold text-gray-800 mb-1">Add Other Income and Vacancy</p>
              <p class="text-gray-600 text-sm leading-relaxed">Other income includes laundry, parking, storage, pet fees — any income not from rent. Vacancy rate is typically 5–8% in stabilized US markets. The calculator computes Effective Gross Income (EGI) automatically.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <span class="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5" style="background:#1e3a5f;">4</span>
            <div>
              <p class="font-semibold text-gray-800 mb-1">Enter Operating Expenses</p>
              <p class="text-gray-600 text-sm leading-relaxed">Use <strong>Simple mode</strong> to enter a single total, or <strong>Detailed mode</strong> to break expenses into individual line items. Include property taxes, insurance, management, maintenance, utilities, HOA, and reserves. Do not include mortgage payments or depreciation.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <span class="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5" style="background:#1e3a5f;">5</span>
            <div>
              <p class="font-semibold text-gray-800 mb-1">Interpret your results</p>
              <p class="text-gray-600 text-sm leading-relaxed">Review the NOI amount, tier badge (Good / Average / Poor / Negative NOI), NOI Margin, Expense Ratio, and the implied property value table. Use the breakdown to identify which expenses are driving costs.</p>
            </div>
          </li>
        </ol>
      </div>

      <!-- Inputs & Outputs -->
      <div id="inputs-outputs" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Inputs &amp; Outputs Explained</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-xs text-blue-700 font-bold">↓</span>
              Inputs
            </h3>
            <ul class="space-y-3 text-sm text-gray-600">
              <li><strong>Gross Scheduled Rent (GRI)</strong> — Annual rent at 100% occupancy, all units. The baseline before vacancy.</li>
              <li><strong>Other Income</strong> — Non-rent income: laundry ($50–200/unit/yr), parking ($600–2,400/space/yr), storage, pet fees.</li>
              <li><strong>Vacancy Rate</strong> — Expected percentage of units vacant. National average 5–7%; use local market data. Applied only to rent, not other income.</li>
              <li><strong>Operating Expenses</strong> — All recurring property costs except debt service: taxes, insurance, management (8–12%), maintenance (1% of value), utilities, HOA, reserves.</li>
              <li><strong>Number of Units</strong> — Optional. Used to calculate NOI per unit for multifamily comparison.</li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-xs text-green-700 font-bold">↑</span>
              Outputs
            </h3>
            <ul class="space-y-3 text-sm text-gray-600">
              <li><strong>Effective Gross Income (EGI)</strong> — GRI minus vacancy loss plus other income. The actual expected annual income.</li>
              <li><strong>Annual NOI</strong> — EGI minus total operating expenses. The property's pre-financing, pre-tax earning power.</li>
              <li><strong>NOI Margin</strong> — NOI as a % of GRI. Measures income efficiency. Healthy: 50–65%.</li>
              <li><strong>Expense Ratio</strong> — Operating expenses as a % of EGI. Healthy: 35–50%. Above 60% signals a problem.</li>
              <li><strong>Implied Property Value</strong> — NOI divided by various cap rates (4–10%). Shows what the property is worth at different market yields.</li>
              <li><strong>NOI per Unit</strong> — Annual NOI divided by number of units. Enables apples-to-apples comparison across portfolio.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Formula -->
      <div id="formula" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">NOI Formula — Step by Step</h2>
        <div class="space-y-4">
          <div class="p-4 rounded-xl border-2 border-gray-100 bg-gray-50">
            <p class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Step 1 — Effective Gross Income</p>
            <p class="font-bold text-base" style="color:#1e3a5f;">EGI = (GRI × (1 − Vacancy%)) + Other Income</p>
          </div>
          <div class="p-4 rounded-xl border-2 border-gray-100 bg-gray-50">
            <p class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Step 2 — Net Operating Income</p>
            <p class="font-bold text-base" style="color:#1e3a5f;">NOI = EGI − Total Operating Expenses</p>
          </div>
          <div class="p-4 rounded-xl border-2" style="border-color:#f59e0b40; background:#fffbeb;">
            <p class="text-xs font-bold uppercase tracking-wide text-amber-700 mb-2">Worked Example</p>
            <div class="space-y-1 text-sm text-gray-700">
              <p>GRI = $120,000 | Vacancy = 8% | Other Income = $6,000 | Expenses = $42,000</p>
              <p>Vacancy Loss = $120,000 × 8% = $9,600</p>
              <p>EGI = $120,000 − $9,600 + $6,000 = <strong>$116,400</strong></p>
              <p>NOI = $116,400 − $42,000 = <strong style="color:#1e3a5f;">$74,400</strong></p>
              <p>NOI Margin = $74,400 ÷ $120,000 = <strong>62.0%</strong></p>
              <p>Expense Ratio = $42,000 ÷ $116,400 = <strong>36.1%</strong></p>
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl border border-blue-100 bg-blue-50">
              <p class="text-xs font-bold uppercase tracking-wide text-blue-700 mb-2">Reverse: Find Required GRI</p>
              <p class="font-bold text-sm text-blue-800">GRI = (Target NOI + Expenses − Other Income) ÷ (1 − Vacancy%)</p>
              <p class="text-xs text-blue-600 mt-1">Example: Target NOI $60,000, vacancy 5%, other $5,000, expenses $35,000 → GRI = $94,736.84</p>
            </div>
            <div class="p-4 rounded-xl border border-emerald-100 bg-emerald-50">
              <p class="text-xs font-bold uppercase tracking-wide text-emerald-700 mb-2">Reverse: Find Max Expenses</p>
              <p class="font-bold text-sm text-emerald-800">Max Expenses = EGI − Target NOI</p>
              <p class="text-xs text-emerald-600 mt-1">Example: GRI $150,000, vacancy 6%, other $8,000, target NOI $70,000 → Max Expenses = $79,000</p>
            </div>
          </div>
        </div>
      </div>

      <!-- What Is NOI -->
      <div id="what-is-noi" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What Is Net Operating Income (NOI)?</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          <strong>Net Operating Income (NOI)</strong> is the annual income generated by an investment property after subtracting all operating expenses — but before deducting mortgage payments, depreciation, or income taxes. It is the most fundamental metric in income property analysis, used by investors, brokers, appraisers, and lenders worldwide.
        </p>
        <div class="p-4 rounded-xl text-center font-bold text-lg mb-4" style="background: #f0f4f8; color: #1e3a5f;">
          NOI = Effective Gross Income − Total Operating Expenses
        </div>
        <p class="text-gray-600 leading-relaxed mb-3">
          Because NOI excludes financing costs, it is an <strong>unlevered metric</strong> — it measures the property's performance independent of how it is financed. A property's NOI is the same whether the buyer pays cash or takes out a mortgage, making it invaluable for comparing properties across different capital structures and markets.
        </p>
        <p class="text-gray-600 leading-relaxed">
          NOI is the numerator in the cap rate formula (<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Cap Rate = NOI ÷ Value</code>), the basis for lender DSCR underwriting (<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm">DSCR = NOI ÷ Annual Debt Service</code>), and the foundation for income-approach property valuations.
        </p>
      </div>

      <!-- What Your Result Means -->
      <div id="result-meaning" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What Your NOI Result Means</h2>
        <div class="space-y-4">
          <div class="flex gap-4 p-4 rounded-xl border border-green-200 bg-green-50">
            <span class="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">G</span>
            <div>
              <p class="font-bold text-green-800 mb-1">Good — Expense Ratio ≤ 45%</p>
              <p class="text-green-700 text-sm leading-relaxed">Your property is operating efficiently. Operating expenses consume less than 45% of Effective Gross Income. Typical of well-maintained properties in landlord-friendly markets (TX, AZ, GA) with professional management and controlled vacancy. This tier supports strong cap rates and DSCR above 1.25x at market financing.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-200 bg-amber-50">
            <span class="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">A</span>
            <div>
              <p class="font-bold text-amber-800 mb-1">Average — Expense Ratio 45–60%</p>
              <p class="text-amber-700 text-sm leading-relaxed">Expenses are in the normal range for higher-cost markets (CA, NY, FL, CO, WA). This tier is common for properties with high property taxes, above-average insurance costs, or aging systems requiring more maintenance. Profitability depends heavily on purchase price and financing terms.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-red-200 bg-red-50">
            <span class="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">P</span>
            <div>
              <p class="font-bold text-red-800 mb-1">Poor — Expense Ratio &gt; 60%</p>
              <p class="text-amber-700 text-sm leading-relaxed" style="color:#7f1d1d;">Operating expenses exceed 60% of EGI. This property has thin margins — a small drop in rents or increase in expenses can push NOI negative. Investigate which line items are elevated. This may indicate deferred maintenance, abnormally high management fees, or a market with extreme operating costs.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-red-300 bg-red-100">
            <span class="w-6 h-6 rounded-full bg-red-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">!</span>
            <div>
              <p class="font-bold text-red-900 mb-1">Negative NOI — Expenses Exceed EGI</p>
              <p class="text-red-800 text-sm leading-relaxed">The property is losing money before debt service. This is rare for stabilized income properties but can occur during high vacancy periods, major deferred maintenance cycles, or in rent-stabilized markets. Properties with negative NOI are typically valued on replacement cost or sales comparison — not the income approach.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Include / Exclude -->
      <div id="include-exclude" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-6" style="color: #1e3a5f;">What to Include and Exclude from NOI</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-bold text-green-700 mb-3 flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-xs">✓</span>
              Include in Operating Expenses
            </h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-green-500 mt-0.5">•</span><span><strong>Property taxes</strong> — annual county tax bill</span></li>
              <li class="flex gap-2"><span class="text-green-500 mt-0.5">•</span><span><strong>Insurance</strong> — hazard, liability, flood if applicable</span></li>
              <li class="flex gap-2"><span class="text-green-500 mt-0.5">•</span><span><strong>Property management</strong> — typically 8–12% of gross rents</span></li>
              <li class="flex gap-2"><span class="text-green-500 mt-0.5">•</span><span><strong>Maintenance &amp; repairs</strong> — routine upkeep, not capital improvements</span></li>
              <li class="flex gap-2"><span class="text-green-500 mt-0.5">•</span><span><strong>Utilities</strong> — only those paid by landlord</span></li>
              <li class="flex gap-2"><span class="text-green-500 mt-0.5">•</span><span><strong>HOA fees</strong> — if applicable</span></li>
              <li class="flex gap-2"><span class="text-green-500 mt-0.5">•</span><span><strong>Landscaping &amp; snow removal</strong> — recurring contracts</span></li>
              <li class="flex gap-2"><span class="text-green-500 mt-0.5">•</span><span><strong>Reserves for replacement</strong> — roof, HVAC, appliances</span></li>
              <li class="flex gap-2"><span class="text-green-500 mt-0.5">•</span><span><strong>Accounting/legal</strong> — ongoing professional fees</span></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-red-700 mb-3 flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-xs">✕</span>
              Exclude from NOI
            </h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-red-400 mt-0.5">•</span><span><strong>Mortgage payments (P&amp;I)</strong> — financing excluded by definition</span></li>
              <li class="flex gap-2"><span class="text-red-400 mt-0.5">•</span><span><strong>Depreciation</strong> — paper expense, not a cash outflow</span></li>
              <li class="flex gap-2"><span class="text-red-400 mt-0.5">•</span><span><strong>Income taxes</strong> — NOI is pre-tax</span></li>
              <li class="flex gap-2"><span class="text-red-400 mt-0.5">•</span><span><strong>Capital expenditures</strong> — roof replacement, major renovations</span></li>
              <li class="flex gap-2"><span class="text-red-400 mt-0.5">•</span><span><strong>Loan origination fees</strong> — financing costs</span></li>
              <li class="flex gap-2"><span class="text-red-400 mt-0.5">•</span><span><strong>Amortization</strong> — not an operating expense</span></li>
              <li class="flex gap-2"><span class="text-red-400 mt-0.5">•</span><span><strong>Personal expenses</strong> — owner-charged items unrelated to operations</span></li>
            </ul>
          </div>
        </div>
        <div class="mt-5 p-4 rounded-xl bg-amber-50 border border-amber-200">
          <p class="text-sm text-amber-800"><strong>Red flag:</strong> If a seller's proforma shows an expense ratio below 25%, scrutinize every line item. Experienced investors budget a management fee even for self-managed properties — you have the option cost of your time, and future buyers will apply that cost when underwriting your exit.</p>
        </div>
      </div>

      <!-- Benchmarks -->
      <div id="benchmarks" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">NOI Benchmarks — What Is a Good NOI?</h2>
        <p class="text-gray-500 text-sm mb-6">There is no single "good" NOI — it must be evaluated relative to property cost. What matters is the NOI yield (cap rate) and the NOI margin (as a % of gross rent). Here are the key thresholds used by professional investors in 2026.</p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="border-b-2 border-gray-200">
                <th class="text-left py-3 pr-4 font-bold text-gray-700">Metric</th>
                <th class="text-center py-3 px-3 font-bold text-green-700">Good</th>
                <th class="text-center py-3 px-3 font-bold text-amber-700">Average</th>
                <th class="text-center py-3 px-3 font-bold text-red-700">Poor</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr>
                <td class="py-3 pr-4 text-gray-700 font-medium">NOI Margin (NOI ÷ GRI)</td>
                <td class="py-3 px-3 text-center font-semibold text-green-700">&gt; 50%</td>
                <td class="py-3 px-3 text-center font-semibold text-amber-700">35–50%</td>
                <td class="py-3 px-3 text-center font-semibold text-red-700">&lt; 35%</td>
              </tr>
              <tr>
                <td class="py-3 pr-4 text-gray-700 font-medium">Expense Ratio (Exp ÷ EGI)</td>
                <td class="py-3 px-3 text-center font-semibold text-green-700">&lt; 45%</td>
                <td class="py-3 px-3 text-center font-semibold text-amber-700">45–60%</td>
                <td class="py-3 px-3 text-center font-semibold text-red-700">&gt; 60%</td>
              </tr>
              <tr>
                <td class="py-3 pr-4 text-gray-700 font-medium">NOI per Unit (multifamily)</td>
                <td class="py-3 px-3 text-center font-semibold text-green-700">&gt; $8,000</td>
                <td class="py-3 px-3 text-center font-semibold text-amber-700">$4,000–$8,000</td>
                <td class="py-3 px-3 text-center font-semibold text-red-700">&lt; $4,000</td>
              </tr>
              <tr>
                <td class="py-3 pr-4 text-gray-700 font-medium">Implied Cap Rate</td>
                <td class="py-3 px-3 text-center font-semibold text-green-700">&gt; 7%</td>
                <td class="py-3 px-3 text-center font-semibold text-amber-700">5–7%</td>
                <td class="py-3 px-3 text-center font-semibold text-red-700">&lt; 5%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-gray-400 mt-3 italic">Benchmarks vary by market, property type, and asset quality. High-cost coastal markets (NY, CA) routinely operate at 45–60% expense ratios and still trade at 4–5% cap rates due to rent growth expectations.</p>
      </div>

      <!-- NOI vs Cash Flow -->
      <div id="noi-vs-cashflow" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">NOI vs. Cash Flow — Key Differences</h2>
        <p class="text-gray-600 leading-relaxed mb-5">
          NOI and cash flow are the two most commonly confused metrics in real estate. They measure fundamentally different things:
        </p>
        <div class="grid md:grid-cols-2 gap-5 mb-5">
          <div class="p-5 rounded-xl border-2 border-gray-200">
            <p class="font-extrabold text-base mb-2" style="color:#1e3a5f;">Net Operating Income (NOI)</p>
            <ul class="space-y-1.5 text-sm text-gray-600">
              <li>• Unlevered — excludes debt service</li>
              <li>• Same for all buyers regardless of financing</li>
              <li>• Used for cap rate and DSCR calculations</li>
              <li>• Standard for property valuation</li>
              <li>• Comparable across markets and capital structures</li>
            </ul>
          </div>
          <div class="p-5 rounded-xl border-2 border-gray-200">
            <p class="font-extrabold text-base mb-2 text-green-700">Cash Flow After Debt Service</p>
            <ul class="space-y-1.5 text-sm text-gray-600">
              <li>• Levered — subtracts mortgage P&amp;I</li>
              <li>• Varies by buyer's financing terms</li>
              <li>• Used for CoC return and cash-on-cash</li>
              <li>• What actually hits your bank account</li>
              <li>• Specific to each investor's deal structure</li>
            </ul>
          </div>
        </div>
        <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
          <p class="text-sm font-bold text-gray-700 mb-1">Formula: Cash Flow = NOI − Annual Debt Service</p>
          <p class="text-sm text-gray-600 leading-relaxed">A property can have positive NOI but negative cash flow if the mortgage payment exceeds NOI. This is common in low-cap-rate coastal markets where investors accept short-term cash flow losses in exchange for appreciation. Conversely, a property with negative NOI always has negative cash flow.</p>
        </div>
      </div>

      <!-- NOI by Property Type -->
      <div id="property-types" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">NOI by Property Type</h2>
        <p class="text-gray-500 text-sm mb-5">Operating expense ratios and typical NOI margins vary significantly by asset class.</p>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Single Family Rental (SFR)</p>
            <p class="text-xl font-extrabold text-amber-600 mb-1">40–55% expense ratio</p>
            <p class="text-xs text-gray-500">Higher per-unit management and maintenance costs. No economies of scale. Typical cap rates 4–7% depending on market. Best suited for appreciation plays in growing markets.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Small Multifamily (2–4 units)</p>
            <p class="text-xl font-extrabold text-green-600 mb-1">35–50% expense ratio</p>
            <p class="text-xs text-gray-500">Better economies of scale than SFR. Management fees often lower for owner-managed. Vacancy risk higher per unit than larger complexes. Ideal entry point for new investors.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Large Multifamily (5+ units)</p>
            <p class="text-xl font-extrabold text-green-600 mb-1">35–48% expense ratio</p>
            <p class="text-xs text-gray-500">Strong economies of scale. Professional management standard. Vacancy risk distributed across many units. DSCR loans and commercial financing widely available. Best NOI consistency.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Commercial / Mixed-Use</p>
            <p class="text-xl font-extrabold text-amber-600 mb-1">30–50% expense ratio</p>
            <p class="text-xs text-gray-500">Triple-net (NNN) leases push many expenses to tenants, lowering owner expense ratio. Gross leases have higher ratios. Longer vacancy periods but lower turnover. Higher NOI margins possible with NNN structures.</p>
          </div>
        </div>
      </div>

      <!-- Common Mistakes -->
      <div id="common-mistakes" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">5 Common NOI Calculation Mistakes</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <span class="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold text-sm flex-shrink-0">1</span>
            <div>
              <p class="font-semibold text-gray-800 mb-1">Omitting vacancy entirely</p>
              <p class="text-sm text-gray-600 leading-relaxed">The most common seller manipulation. Proformas that show 0% vacancy overstate EGI by 5–10%. Always budget at least 5% vacancy — even in hot markets, units turn over, cleaning and repairs take time.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <span class="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold text-sm flex-shrink-0">2</span>
            <div>
              <p class="font-semibold text-gray-800 mb-1">Skipping management fees for self-managed properties</p>
              <p class="text-sm text-gray-600 leading-relaxed">If you self-manage, that's your labor — it has economic value. Budget 8–10% management fees anyway. Future buyers will apply the fee when underwriting your sale price, and so should you when evaluating the deal.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <span class="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold text-sm flex-shrink-0">3</span>
            <div>
              <p class="font-semibold text-gray-800 mb-1">Including mortgage payments in expenses</p>
              <p class="text-sm text-gray-600 leading-relaxed">Debt service is not an operating expense. Including mortgage payments in NOI creates a financing-dependent metric that cannot be compared across deals or used for DSCR calculations. NOI must remain unlevered.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <span class="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold text-sm flex-shrink-0">4</span>
            <div>
              <p class="font-semibold text-gray-800 mb-1">Ignoring capital expenditure reserves</p>
              <p class="text-sm text-gray-600 leading-relaxed">Roof replacements, HVAC systems, and major appliances are not CapEx — they're predictable future costs. Budget $500–$1,500/unit/year in reserves depending on property age. Skipping reserves overstates NOI and creates cash flow surprises.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <span class="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold text-sm flex-shrink-0">5</span>
            <div>
              <p class="font-semibold text-gray-800 mb-1">Using proforma rents instead of current rents</p>
              <p class="text-sm text-gray-600 leading-relaxed">Sellers often present proforma NOI based on market rents rather than actual current rents. Always build your analysis on in-place rents. Use proforma figures only to estimate upside potential — never as the basis for your offer price.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Market Ratios by State -->
      <div id="market-ratios" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Typical NOI Expense Ratios by Market (2026)</h2>
        <p class="text-gray-500 text-sm mb-6">Operating expenses as % of EGI for stabilized residential rental properties. Higher-cost markets tend to have higher expense ratios due to property taxes and insurance.</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">California (CA)</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">40–55%</p>
            <p class="text-xs text-gray-500">High property taxes and insurance. LA/SF portfolios often run close to 50%. Rent control in many cities adds management complexity.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Texas (TX)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">35–45%</p>
            <p class="text-xs text-gray-500">High property tax rates but no income tax. Dallas/Houston average mid-40s. Strong landlord laws and growing renter population.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Florida (FL)</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">38–50%</p>
            <p class="text-xs text-gray-500">Rising insurance costs post-hurricanes. Coastal properties see higher ratios. No state income tax. Strong migration inflow supporting rents.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">New York (NY)</p>
            <p class="text-2xl font-extrabold text-red-600 mb-1">45–60%</p>
            <p class="text-xs text-gray-500">NYC: very high property taxes and operating costs. Rent-stabilized units can exceed 60%. Strong appreciation historically offsets thin NOI margins.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Arizona (AZ)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">33–43%</p>
            <p class="text-xs text-gray-500">Lower insurance and taxes. Phoenix among the most landlord-friendly operating environments. Strong population growth supporting demand.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Georgia (GA)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">33–43%</p>
            <p class="text-xs text-gray-500">Atlanta metro. Favorable operating costs. Management fees are the biggest variable. Business-friendly regulatory environment.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Colorado (CO)</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">38–48%</p>
            <p class="text-xs text-gray-500">Denver. Moderate taxes. Snow removal and maintenance add to operating costs. Strong tech-sector rental demand in metro areas.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Washington (WA)</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">38–50%</p>
            <p class="text-xs text-gray-500">Seattle area. High property taxes and management costs. No state income tax. Tenant-friendly laws increase management complexity and costs.</p>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <div id="faq" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions — NOI</h2>
        <div class="space-y-5">
          <div class="border-b border-gray-100 pb-5">
            <h3 class="font-bold text-gray-800 mb-2">Is NOI the same as cash flow?</h3>
            <p class="text-gray-600 text-sm leading-relaxed">No. NOI does not include mortgage payments. Cash flow = NOI − Annual Debt Service. A property can have positive NOI but negative cash flow if the mortgage payment is higher than NOI. NOI is an unlevered metric; cash flow is levered and specific to each investor's financing structure.</p>
          </div>
          <div class="border-b border-gray-100 pb-5">
            <h3 class="font-bold text-gray-800 mb-2">What is a good NOI for a rental property?</h3>
            <p class="text-gray-600 text-sm leading-relaxed">There is no single "good" NOI — it depends on the purchase price and market. What matters is the NOI yield (cap rate). A $25,000 NOI on a $300,000 property (8.3% cap) is excellent; the same $25,000 on a $600,000 property (4.2% cap) is marginal in most US markets. Always evaluate NOI relative to cost. The implied property value table above shows this relationship directly.</p>
          </div>
          <div class="border-b border-gray-100 pb-5">
            <h3 class="font-bold text-gray-800 mb-2">Should I include a management fee even if I self-manage?</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Yes — always budget a management fee (8–10%) even if you self-manage. If you ever hire a property manager, sell the property, or simply want accurate underwriting, you need the fee included. NOI calculated without a management fee overstates property performance and will cause you to overpay.</p>
          </div>
          <div class="border-b border-gray-100 pb-5">
            <h3 class="font-bold text-gray-800 mb-2">How do lenders use NOI?</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Lenders use NOI to calculate the Debt Service Coverage Ratio (DSCR = NOI ÷ Annual Debt Service). Most commercial lenders require a minimum DSCR of 1.20–1.25x, meaning NOI must be at least 20–25% higher than the annual mortgage payment. DSCR loans for residential investors typically require ≥ 1.0x DSCR.</p>
          </div>
          <div class="border-b border-gray-100 pb-5">
            <h3 class="font-bold text-gray-800 mb-2">What is the difference between NOI and EBITDA?</h3>
            <p class="text-gray-600 text-sm leading-relaxed">NOI is a real estate-specific metric. EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) is used in corporate finance. For real estate, NOI is the standard — it excludes interest (debt service), taxes on income, and depreciation, focusing purely on the property's operating performance.</p>
          </div>
          <div class="border-b border-gray-100 pb-5">
            <h3 class="font-bold text-gray-800 mb-2">Can NOI be negative?</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Yes. Negative NOI means operating expenses exceed Effective Gross Income — the property loses money before debt service. This is rare in stabilized income properties but can occur with high vacancy, deferred maintenance, or unusually high operating costs. Negative NOI properties are typically valued using replacement cost or sales comparison rather than the income approach.</p>
          </div>
          <div class="border-b border-gray-100 pb-5">
            <h3 class="font-bold text-gray-800 mb-2">How is NOI used to value a property?</h3>
            <p class="text-gray-600 text-sm leading-relaxed">The income approach values a property by dividing NOI by the market cap rate: Value = NOI ÷ Cap Rate. For example, a property with $80,000 NOI in a market where comparable properties trade at 6% cap rate is worth approximately $1,333,333. This is the most widely used valuation method for income-producing real estate and is the basis for almost all commercial appraisals.</p>
          </div>
          <div>
            <h3 class="font-bold text-gray-800 mb-2">What is the 50% rule for NOI?</h3>
            <p class="text-gray-600 text-sm leading-relaxed">The 50% rule is an investor shortcut: assume operating expenses equal 50% of gross rents, so NOI ≈ 50% of GRI. It's a quick screening tool but often inaccurate. Actual expense ratios range from 33% (well-run properties in low-cost markets) to 60%+ (high-cost coastal markets). Use this calculator with real numbers rather than relying on the 50% rule for actual purchase decisions.</p>
          </div>
        </div>
      </div>

      <!-- Related Calculators CTA -->
      <div class="px-8 py-8">
        <div class="rounded-2xl p-8 text-white" style="background: #1e3a5f;">
          <h2 class="text-xl font-extrabold mb-2">Use NOI in Your Full Analysis</h2>
          <p class="text-blue-200 text-sm mb-6 leading-relaxed">NOI is the starting point. Run it through our other calculators for a complete picture of any investment opportunity.</p>
          <div class="grid sm:grid-cols-3 gap-3">
            <NuxtLink to="/cap-rate-calculator" class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
              <p class="font-bold text-sm">Cap Rate</p>
              <p class="text-xs text-blue-300 mt-0.5">NOI ÷ Value × 100</p>
            </NuxtLink>
            <NuxtLink to="/dscr-calculator" class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
              <p class="font-bold text-sm">DSCR</p>
              <p class="text-xs text-blue-300 mt-0.5">NOI ÷ Debt Service</p>
            </NuxtLink>
            <NuxtLink to="/rental-property-calculator" class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
              <p class="font-bold text-sm">Rental Property</p>
              <p class="text-xs text-blue-300 mt-0.5">Full cash flow analysis</p>
            </NuxtLink>
          </div>
        </div>
      </div>

      </div><!-- /SEO content -->
    </main>

    <!-- FAQ JSON-LD Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Net Operating Income (NOI) in real estate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NOI is the annual income from an investment property after subtracting all operating expenses, but before deducting mortgage payments, depreciation, or income taxes. It equals Effective Gross Income minus Total Operating Expenses."
          }
        },
        {
          "@type": "Question",
          "name": "Is NOI the same as cash flow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. NOI does not include mortgage payments. Cash flow equals NOI minus annual debt service. NOI is an unlevered metric that measures property performance independent of financing."
          }
        },
        {
          "@type": "Question",
          "name": "What expenses should be excluded from NOI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Exclude mortgage payments, depreciation, income taxes, capital expenditures, and loan fees. Include only operating expenses: property taxes, insurance, management fees, maintenance, and utilities paid by the landlord."
          }
        },
        {
          "@type": "Question",
          "name": "How do lenders use NOI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lenders calculate DSCR (Debt Service Coverage Ratio) as NOI divided by annual debt service. Most commercial lenders require a minimum DSCR of 1.20-1.25x. DSCR loan programs for residential investors typically require at least 1.0x."
          }
        },
        {
          "@type": "Question",
          "name": "What is a good NOI expense ratio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A good expense ratio (operating expenses as a percentage of EGI) is below 45%. Average is 45-60%. Above 60% is poor. High-cost markets like New York and California routinely see 45-60% expense ratios due to property taxes and insurance costs."
          }
        }
      ]
    }
    </script>

  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

useHead({
  title: 'NOI Calculator — Free Net Operating Income Tool for US Real Estate | RealCalc',
  meta: [
    { name: 'description', content: 'Free NOI Calculator for US real estate investors. Calculate Net Operating Income, find required gross income, or find max operating expenses. Real-time results with expense ratio, NOI margin, and implied property value.' },
    { property: 'og:title', content: 'NOI Calculator — Net Operating Income | RealCalc' },
    { property: 'og:description', content: 'Calculate NOI for any US rental property. Three modes: Calculate NOI, Find Required Income, Find Max Expenses. Real-time results with market benchmarks.' },
  ]
})

// ── UI State ──────────────────────────────────────────────────────────────────
const isNavExpanded = ref(false)
const calcMode = ref('calc-noi') // 'calc-noi' | 'find-income' | 'find-expenses'
const expenseMode = ref('simple') // 'simple' | 'detailed'

// ── Expense Fields ────────────────────────────────────────────────────────────
const expenseFields = [
  { key: 'propertyTax', label: 'Property Taxes',        placeholder: 'e.g. 4,200',  hint: 'Annual tax bill' },
  { key: 'insurance',   label: 'Insurance',             placeholder: 'e.g. 1,800',  hint: 'Hazard + liability' },
  { key: 'management',  label: 'Property Management',   placeholder: 'e.g. 4,800',  hint: '8–10% of gross rents' },
  { key: 'maintenance', label: 'Maintenance & Repairs', placeholder: 'e.g. 2,400',  hint: 'Routine upkeep' },
  { key: 'utilities',   label: 'Utilities (landlord)',  placeholder: 'e.g. 600',    hint: 'If paid by owner' },
  { key: 'hoa',         label: 'HOA Fees',              placeholder: 'e.g. 0',      hint: 'If applicable' },
  { key: 'reserves',    label: 'Reserves',              placeholder: 'e.g. 1,200',  hint: 'Roof, HVAC, appliances' },
  { key: 'other',       label: 'Other Expenses',        placeholder: 'e.g. 500',    hint: 'Misc operating costs' },
]

// ── Form State ────────────────────────────────────────────────────────────────
const form = reactive({
  grossRent:          null,
  otherIncome:        null,
  vacancyRate:        null,
  numUnits:           null,
  totalExpensesSimple: null,
  targetNOI:          null,
  expenses: {
    propertyTax:  null,
    insurance:    null,
    management:   null,
    maintenance:  null,
    utilities:    null,
    hoa:          null,
    reserves:     null,
    other:        null,
  }
})

function resetForm() {
  form.grossRent = null
  form.otherIncome = null
  form.vacancyRate = null
  form.numUnits = null
  form.totalExpensesSimple = null
  form.targetNOI = null
  Object.keys(form.expenses).forEach(k => { form.expenses[k] = null })
}

// ── Derived: expenses ─────────────────────────────────────────────────────────
const detailedTotalExpenses = computed(() =>
  Object.values(form.expenses).reduce((sum, v) => sum + (Number(v) || 0), 0)
)

const totalExpensesCalc = computed(() =>
  expenseMode.value === 'simple'
    ? (Number(form.totalExpensesSimple) || 0)
    : detailedTotalExpenses.value
)

// ── Derived: income & EGI ─────────────────────────────────────────────────────
const vacancyLoss = computed(() => {
  const gri = Number(form.grossRent) || 0
  const vac = Math.min(Math.max(Number(form.vacancyRate) || 0, 0), 100)
  return gri * (vac / 100)
})

const egi = computed(() => {
  if (calcMode.value === 'find-income') {
    // EGI from requiredGRI
    const gri = requiredGRI.value
    if (!gri) return 0
    const vac = Math.min(Math.max(Number(form.vacancyRate) || 0, 0), 100)
    return gri * (1 - vac / 100) + (Number(form.otherIncome) || 0)
  }
  const gri = Number(form.grossRent) || 0
  const other = Number(form.otherIncome) || 0
  return gri - vacancyLoss.value + other
})

// ── Mode: Calculate NOI ───────────────────────────────────────────────────────
const annualNOI = computed(() => egi.value - totalExpensesCalc.value)

const hasResult = computed(() =>
  calcMode.value === 'calc-noi' && (Number(form.grossRent) || 0) > 0
)

// NOI Margin = NOI / GRI × 100  (spec: test1 = 74400/120000 = 62.00%)
const noiMargin = computed(() => {
  const gri = Number(form.grossRent) || 0
  if (!hasResult.value || gri <= 0) return 0
  return (annualNOI.value / gri) * 100
})

// Expense Ratio = expenses / EGI × 100 (spec: test1 = 42000/116400 = 36.08%)
const expenseRatio = computed(() => {
  if (egi.value <= 0) return 0
  return (totalExpensesCalc.value / egi.value) * 100
})

const noiPerUnit = computed(() => {
  const units = Number(form.numUnits) || 0
  if (!hasResult.value || units <= 0) return null
  return annualNOI.value / units
})

// Tier
const tier = computed(() => {
  if (!hasResult.value) return 'N/A'
  if (annualNOI.value < 0) return 'Negative NOI'
  if (expenseRatio.value > 60) return 'Poor'
  if (expenseRatio.value > 45) return 'Average'
  return 'Good'
})

const tierColor = computed(() => {
  switch (tier.value) {
    case 'Good': return '#16a34a'
    case 'Average': return '#d97706'
    case 'Poor': return '#dc2626'
    case 'Negative NOI': return '#7f1d1d'
    default: return '#6b7280'
  }
})

// Bar visualization (% of GRI)
const vacancyBarPct = computed(() => {
  const gri = Number(form.grossRent) || 0
  if (gri <= 0) return 0
  return Math.min((vacancyLoss.value / gri) * 100, 100)
})

const expenseBarPct = computed(() => {
  const gri = Number(form.grossRent) || 0
  if (gri <= 0) return 0
  return Math.min((totalExpensesCalc.value / gri) * 100, 100 - vacancyBarPct.value)
})

const noiBarPct = computed(() => {
  const gri = Number(form.grossRent) || 0
  if (gri <= 0 || annualNOI.value < 0) return 0
  return Math.max(100 - vacancyBarPct.value - expenseBarPct.value, 0)
})

// ── Mode: Find Required Income ────────────────────────────────────────────────
// GRI = (targetNOI + expenses - otherIncome) / (1 - vacancy%)
// Spec test2: targetNOI=60000, vacancy=5%, other=5000, expenses=35000
//   GRI = (60000 + 35000 - 5000) / (1 - 0.05) = 90000 / 0.95 = 94736.84 ✓
const requiredGRI = computed(() => {
  if (calcMode.value !== 'find-income') return null
  const target = Number(form.targetNOI) || 0
  const expenses = totalExpensesCalc.value
  const other = Number(form.otherIncome) || 0
  const vac = Math.min(Math.max(Number(form.vacancyRate) || 0, 0), 100)
  if (target <= 0 && expenses <= 0) return null
  const numerator = target + expenses - other
  const denominator = 1 - vac / 100
  if (denominator <= 0) return null
  return numerator / denominator
})

// ── Mode: Find Max Expenses ───────────────────────────────────────────────────
// maxExpenses = EGI - targetNOI
// Spec test3: GRI=150000, vacancy=6%, other=8000, targetNOI=70000
//   EGI = 150000*0.94+8000 = 141000+8000 = 149000
//   maxExpenses = 149000 - 70000 = 79000 ✓
const maxExpenses = computed(() => {
  if (calcMode.value !== 'find-expenses') return null
  const gri = Number(form.grossRent) || 0
  const target = Number(form.targetNOI)
  if (gri <= 0 || target === null || isNaN(target)) return null
  // egi is computed from grossRent+otherIncome-vacancyLoss (calcMode !== 'find-income' branch)
  return egi.value - target
})

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatCurrency(val) {
  const n = Number(val) || 0
  return new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 0
  }).format(n)
}
</script>

<style>
.calc-mode-tabs {
  @apply grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-gray-100;
}
.calc-mode-tab {
  @apply relative px-2 py-2.5 rounded-xl text-left cursor-pointer transition;
}
.calc-mode-tab-active {
  @apply bg-white shadow-sm;
  box-shadow: 0 1px 4px 0 rgba(30,58,95,0.10);
}
.calc-mode-tab-inactive {
  @apply text-gray-500 hover:bg-white/60;
}
.calc-section-header {
  @apply px-4 py-2.5 flex items-center border-b border-gray-100;
  background: linear-gradient(90deg, #f8fafc 0%, #f1f5f9 100%);
}
.calc-section-title {
  @apply text-xs font-bold uppercase tracking-wider;
  color: #1e3a5f;
}
.calc-inputs {
  @apply divide-y divide-gray-100;
}
.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: #e5e7eb transparent;
}
</style>
