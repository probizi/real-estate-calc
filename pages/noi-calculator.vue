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
            <a href="/blog/" class="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Blog</a>
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
            <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
            <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Applications</a></li>
            <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Industry Standards</a></li>
            <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
            <li><a href="#noi-vs-cashflow" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">NOI vs Cash Flow</a></li>
            <li><a href="#property-types" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Property Types</a></li>
            <li><a href="#common-mistakes" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Common Mistakes</a></li>
            <li><a href="#market-ratios" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Market Ratios</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
            <li><a href="#related-calculators" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Related Calculators</a></li>
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
              <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
              <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Applications</a></li>
              <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Industry Standards</a></li>
              <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
              <li><a href="#noi-vs-cashflow" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">NOI vs Cash Flow</a></li>
              <li><a href="#property-types" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Property Types</a></li>
              <li><a href="#common-mistakes" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Common Mistakes</a></li>
              <li><a href="#market-ratios" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Market Ratios</a></li>
              <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
              <li><a href="#related-calculators" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Related Calculators</a></li>
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
                  Gross Rental Income (Annual)
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
                      placeholder="Laundry, parking, storage"
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
                    placeholder="Total unit count"
                    class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                  <p class="text-xs text-gray-400 mt-0.5">For per-unit metrics</p>
                </div>
                <div>
                  <label for="rentable-sqft" class="block text-xs font-semibold text-gray-700 mb-1">
                    Rentable Square Feet
                    <span class="text-xs font-normal text-gray-400 ml-1">(optional)</span>
                  </label>
                  <input id="rentable-sqft" v-model="form.rentableSqft" type="number" min="1" step="10"
                    placeholder="Total rentable sq ft"
                    class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                  <p class="text-xs text-gray-400 mt-0.5">For per-sqft metrics</p>
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
                      placeholder="Laundry, parking, storage"
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
                      placeholder="Typical 5–8%"
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
                <span class="text-sm text-gray-500">Gross Rental Income</span>
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
                  :class="noiMargin < 0 ? 'bg-red-50 border-red-200' : noiMargin < 25 ? 'bg-orange-50 border-orange-200' : noiMargin < 40 ? 'bg-amber-50 border-amber-200' : noiMargin < 50 ? 'bg-blue-50 border-blue-200' : 'bg-green-50 border-green-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="noiMargin < 0 ? 'text-red-500' : noiMargin < 25 ? 'text-orange-600' : noiMargin < 40 ? 'text-amber-600' : noiMargin < 50 ? 'text-blue-600' : 'text-green-600'">NOI Margin</p>
                  <p class="text-base font-extrabold"
                    :class="noiMargin < 0 ? 'text-red-700' : noiMargin < 25 ? 'text-orange-700' : noiMargin < 40 ? 'text-amber-700' : noiMargin < 50 ? 'text-blue-700' : 'text-green-700'">
                    {{ noiMargin.toFixed(1) }}%</p>
                  <p class="text-xs text-gray-400 mt-0.5">of GRI</p>
                </div>
                <div v-if="noiPerUnit !== null" class="rounded-xl p-3 text-center border border-gray-100 bg-gray-50">
                  <p class="text-xs font-semibold text-gray-500 mb-0.5">NOI/Unit</p>
                  <p class="text-base font-extrabold text-gray-700">{{ formatCurrency(noiPerUnit) }}</p>
                  <p class="text-xs text-gray-400 mt-0.5">per year</p>
                </div>
                <div v-if="noiPerSqft !== null" class="rounded-xl p-3 text-center border border-gray-100 bg-gray-50">
                  <p class="text-xs font-semibold text-gray-500 mb-0.5">NOI/Sqft</p>
                  <p class="text-base font-extrabold text-gray-700">${{ noiPerSqft.toFixed(2) }}</p>
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
                <span class="text-sm text-gray-500">Gross Rental Income</span>
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

            <!-- Share + PDF Export + Save Scenario -->
            <div v-if="hasResult || requiredGRI || maxExpenses !== null" class="p-4 border-t border-gray-100 space-y-2">
              <!-- 1. PRIMARY: Save Scenario -->
              <button v-if="hasResult" @click="openSaveScenario"
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
              <button @click="showEmailModal = true"
                class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs text-gray-500 hover:text-gray-700 border border-dashed border-gray-200 hover:border-gray-300 transition">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Email me this analysis
              </button>
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

      <!-- ═══════════════════════════════════════════════
           SCENARIO PANEL
      ═══════════════════════════════════════════════ -->
      <div class="max-w-6xl mx-auto px-4 pb-6 mt-4">
        <ScenarioPanel
          calculator="noi"
          :has-result="hasResult"
          :result="currentScenarioResult"
          :trigger-save="triggerScenarioSave"
          @saved="onScenarioSaved"
        />
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
            Unlike simplified spreadsheets, this tool separates Gross Rental Income from Other Income, applies vacancy correctly before calculating EGI, and flags Negative NOI scenarios with a clear tier label. All results update in real time — no signup required.
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
              <p class="font-semibold text-gray-800 mb-1">Enter Gross Rental Income</p>
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
              <p class="text-gray-600 text-sm leading-relaxed">Review the NOI amount, tier badge (Institutional Grade / Strong Performer / Solid / Weak / Critical / Negative NOI), NOI Margin, Expense Ratio, and the implied property value table. Use the breakdown to identify which expenses are driving costs.</p>
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
              <li><strong>Gross Rental Income (GRI)</strong> — Annual rent at 100% occupancy, all units. The baseline before vacancy.</li>
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
            <p class="text-xs font-bold uppercase tracking-wide text-amber-700 mb-2">Worked Example — Dallas 4-Unit, 2026</p>
            <div class="space-y-1 text-sm text-gray-700">
              <p>GRI = $112,800 | Vacancy = 6.5% | Other Income = $4,800 | Expenses = $47,500 | Units = 4</p>
              <p>Vacancy Loss = $112,800 × 6.5% = $7,332</p>
              <p>EGI = $112,800 − $7,332 + $4,800 = <strong>$110,268</strong></p>
              <p>NOI = $110,268 − $47,500 = <strong style="color:#1e3a5f;">$62,768</strong></p>
              <p>NOI Margin = $62,768 ÷ $112,800 = <strong>55.6%</strong> → Strong Performer</p>
              <p>NOI per Unit = $62,768 ÷ 4 = <strong>$15,692</strong></p>
            </div>
            <div class="mt-3 p-3 rounded-lg bg-amber-100/60 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <strong>Interpretation:</strong> A 55.6% NOI Margin is in the Strong Performer range for a US residential asset. In Dallas 2026, a 6.5% vacancy assumption is more defensible than 5% — Sun Belt markets continue to absorb new supply, and underwriting to a tighter vacancy leaves no cushion for lease-up periods between turns.
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
        <p class="text-gray-500 text-sm mb-5">The tier badge is determined by <strong>NOI Margin</strong> — NOI as a percentage of Gross Rental Income. Expense Ratio (expenses ÷ EGI) remains a useful derived metric but is not the primary performance signal.</p>
        <div class="space-y-4">
          <div class="flex gap-4 p-4 rounded-xl border" style="border-color:#d1fae5; background:#f0fdf4;">
            <span class="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5" style="background:#059669;">IG</span>
            <div>
              <p class="font-bold mb-1" style="color:#065f46;">Institutional Grade — NOI Margin ≥ 60%</p>
              <p class="text-sm leading-relaxed" style="color:#047857;">The property retains an unusually high share of rent after vacancy and operating expenses. This often signals efficient operations, a favorable cost structure, or underwritten expenses that must still be verified. Supports premium valuations and strong DSCR at institutional financing.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border" style="border-color:#a7f3d0; background:#ecfdf5;">
            <span class="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5" style="background:#10B981;">SP</span>
            <div>
              <p class="font-bold mb-1" style="color:#065f46;">Strong Performer — NOI Margin 50%–59.99%</p>
              <p class="text-sm leading-relaxed" style="color:#047857;">Strong operating range for many stabilized US rental properties. More than half of gross rent reaches the operating line, providing a good cushion against moderate expense growth or brief vacancy increases.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border" style="border-color:#bfdbfe; background:#eff6ff;">
            <span class="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5" style="background:#2563EB;">S</span>
            <div>
              <p class="font-bold mb-1" style="color:#1e40af;">Solid — NOI Margin 40%–49.99%</p>
              <p class="text-sm leading-relaxed" style="color:#1d4ed8;">Common workable range for many stabilized assets. The cushion is thinner, so management quality and expense control matter more. Serviceable in most US markets at moderate leverage.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border" style="border-color:#fde68a; background:#fffbeb;">
            <span class="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5" style="background:#D97706;">W</span>
            <div>
              <p class="font-bold mb-1" style="color:#92400e;">Weak to Negative NOI — NOI Margin below 40%</p>
              <p class="text-sm leading-relaxed" style="color:#78350f;">Below 40% the property becomes fragile. NOI Margin 25%–39.99% is <strong>Weak</strong> — thin margins mean small expense shocks can threaten cash flow. Below 25% is <strong>Critical</strong>. Negative NOI means the property loses money before debt service and cannot be valued on the income approach.</p>
            </div>
          </div>
        </div>
        <p class="text-xs text-gray-400 mt-4 italic">Expense Ratio (operating expenses ÷ EGI) remains a useful supporting metric — see the breakdown panel and the Benchmarks section below. It does not drive the tier badge.</p>
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
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">NOI Benchmarks — NOI Margin by Property Type</h2>
        <p class="text-gray-500 text-sm mb-5">NOI Margin (NOI ÷ Gross Rental Income) is the primary benchmark metric. Ranges below reflect stabilized assets in 2026 — geography drives the spread between coastal and Midwest/SE performance.</p>
        <div class="overflow-x-auto mb-4">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="border-b-2 border-gray-200">
                <th class="text-left py-3 pr-4 font-bold text-gray-700">Property Type</th>
                <th class="text-center py-3 px-3 font-bold text-amber-700">Low (Coastal)</th>
                <th class="text-center py-3 px-3 font-bold text-blue-700">Average (Sun Belt)</th>
                <th class="text-center py-3 px-3 font-bold text-green-700">Strong (Midwest / SE)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr>
                <td class="py-3 pr-4 text-gray-700 font-medium">Single-Family Rental (SFR)</td>
                <td class="py-3 px-3 text-center font-semibold text-amber-700">55%–58%</td>
                <td class="py-3 px-3 text-center font-semibold text-blue-700">58%–62%</td>
                <td class="py-3 px-3 text-center font-semibold text-green-700">62%–65%</td>
              </tr>
              <tr class="bg-gray-50/50">
                <td class="py-3 pr-4 text-gray-700 font-medium">Small Multifamily (2–4 units)</td>
                <td class="py-3 px-3 text-center font-semibold text-amber-700">50%–54%</td>
                <td class="py-3 px-3 text-center font-semibold text-blue-700">54%–57%</td>
                <td class="py-3 px-3 text-center font-semibold text-green-700">57%–60%</td>
              </tr>
              <tr>
                <td class="py-3 pr-4 text-gray-700 font-medium">Multifamily 5+ Units</td>
                <td class="py-3 px-3 text-center font-semibold text-amber-700">45%–48%</td>
                <td class="py-3 px-3 text-center font-semibold text-blue-700">48%–52%</td>
                <td class="py-3 px-3 text-center font-semibold text-green-700">52%–55%</td>
              </tr>
              <tr class="bg-gray-50/50">
                <td class="py-3 pr-4 text-gray-700 font-medium">Retail / Strip Center</td>
                <td class="py-3 px-3 text-center font-semibold text-amber-700">50%–55%</td>
                <td class="py-3 px-3 text-center font-semibold text-blue-700">55%–60%</td>
                <td class="py-3 px-3 text-center font-semibold text-green-700">60%–65%</td>
              </tr>
              <tr>
                <td class="py-3 pr-4 text-gray-700 font-medium">Industrial / Warehouse</td>
                <td class="py-3 px-3 text-center font-semibold text-amber-700">55%–60%</td>
                <td class="py-3 px-3 text-center font-semibold text-blue-700">60%–65%</td>
                <td class="py-3 px-3 text-center font-semibold text-green-700">65%–70%</td>
              </tr>
              <tr class="bg-gray-50/50">
                <td class="py-3 pr-4 text-gray-700 font-medium">Office</td>
                <td class="py-3 px-3 text-center font-semibold text-amber-700">40%–45%</td>
                <td class="py-3 px-3 text-center font-semibold text-blue-700">45%–50%</td>
                <td class="py-3 px-3 text-center font-semibold text-green-700">50%–55%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-gray-400 italic">Expense Ratio (operating expenses ÷ EGI) is a useful secondary metric — a rough inverse of NOI Margin. Above 60% expense ratio warrants scrutiny regardless of property type. Benchmarks assume stabilized occupancy and market-rate management fees.</p>
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
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">NOI Margin by Property Type</h2>
        <p class="text-gray-500 text-sm mb-5">NOI Margin ranges for stabilized US assets. Geography and lease structure are the main drivers of the spread within each type.</p>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Single-Family Rental (SFR)</p>
            <p class="text-xl font-extrabold text-green-600 mb-1">55%–65% NOI Margin</p>
            <p class="text-xs text-gray-500">Higher per-unit management and maintenance costs offset by lower tenant turnover. No economies of scale. Coastal markets compress toward the low end; Midwest/SE assets often reach the high end. Typical cap rates 4–7% depending on market.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Small Multifamily (2–4 units)</p>
            <p class="text-xl font-extrabold text-green-600 mb-1">50%–60% NOI Margin</p>
            <p class="text-xs text-gray-500">Better economies of scale than SFR. Management fees often lower for owner-managed properties. Vacancy risk is concentrated — one empty unit has outsized impact. Ideal entry point for new investors building toward 5+ unit portfolios.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Multifamily 5+ Units</p>
            <p class="text-xl font-extrabold text-blue-600 mb-1">45%–55% NOI Margin</p>
            <p class="text-xs text-gray-500">Strong economies of scale. Professional management standard. Vacancy risk distributed across units. DSCR loans and commercial financing widely available. Lower NOI Margin than SFR is offset by income consistency and institutional demand.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Commercial / Industrial / Office</p>
            <p class="text-xl font-extrabold text-amber-600 mb-1">40%–70% NOI Margin</p>
            <p class="text-xs text-gray-500">Wide range driven by lease structure. Triple-net (NNN) leases push expenses to tenants, supporting 65–70% margins for industrial. Office runs 40–55%. Retail strips 50–65%. Longer lease terms provide income visibility but vacancy periods are extended.</p>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           STRATEGY
      ═══════════════════════════════════════════════ -->
      <div id="strategy" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">When NOI Matters Most</h2>
        <p class="text-gray-500 text-sm mb-6">How NOI fits into each major US real estate investment strategy.</p>
        <div class="grid md:grid-cols-2 gap-6">

          <!-- Buy & Hold -->
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#1e3a5f;">Buy &amp; Hold</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              NOI is one of the cleanest first-pass metrics for long-term rental investing because it tells you whether the property works operationally before financing structure enters the discussion. For example, if a duplex in Columbus produces $38,000 of NOI on $72,000 of annual gross rent, the 52.8% NOI Margin suggests the building is retaining a healthy share of income and may deserve deeper analysis.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              For buy-and-hold investors, the practical move is to use NOI first, then layer in DSCR, cap rate, and cash-on-cash return. If the operating line is weak, leverage usually makes the deal look worse, not better.
            </p>
          </div>

          <!-- BRRRR -->
          <div class="p-5 rounded-xl border border-blue-100 bg-blue-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-blue-600">BRRRR</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              In BRRRR, NOI matters twice: once when you buy the underperforming property and again when you refinance the stabilized one. The initial acquisition may have weak or even negative NOI because of vacancy and rehab disruption, but the exit refinance case depends on what the stabilized NOI becomes once rents, occupancy, and expenses normalize.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              A BRRRR investor might buy a 6-unit building with $22,000 current NOI, renovate it, then stabilize it to $54,000 NOI. That stabilized number is what starts to support refinance proceeds and long-term hold logic.
            </p>
          </div>

          <!-- Commercial -->
          <div class="p-5 rounded-xl border border-amber-100 bg-amber-50/60">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold" style="background:#f59e0b; color:#1e3a5f;">Commercial</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              In commercial real estate, NOI is central because valuation often flows directly from income. Appraisers, brokers, and lenders use NOI as the base number that later interacts with cap rate, debt sizing, and yield expectations. That is why commercial underwriting fights so hard over lease rollover, recoveries, and normalized expenses: a small NOI change can move value materially.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              In practice, a cleaner and more durable NOI usually commands a stronger valuation than a noisy one. Predictability matters almost as much as the raw number.
            </p>
          </div>

          <!-- Fix & Flip -->
          <div class="p-5 rounded-xl border border-emerald-100 bg-emerald-50/60">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#059669;">Fix &amp; Flip</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              NOI matters less for a pure cosmetic flip of an owner-occupied house, but it absolutely matters when the flip buyer is likely to be an investor. A small apartment building or mixed-use asset may be sold on a stabilized income story rather than only on comps, so the post-renovation NOI becomes part of the exit positioning.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              If the planned exit buyer is a landlord, showing a defensible stabilized NOI can support a stronger sale narrative than talking only about finishes and curb appeal.
            </p>
          </div>

          <!-- Bid Pricing -->
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#6366f1;">Bid Pricing</span>
            </div>
            <h3 class="font-bold text-gray-800 mb-2 text-sm">Using NOI to Set a Maximum Offer</h3>
            <div class="p-3 rounded-xl bg-white border border-gray-100 font-mono text-sm text-center mb-3" style="color: #1e3a5f;">
              Max Price = NOI / Target Cap Rate
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">
              This is the income-approach logic investors use every day. If a property is expected to stabilize at $80,000 NOI and your target cap rate is 6.5%, the rough value indication is about $1.23 million, which helps anchor your maximum offer before financing assumptions are layered in.
            </p>
          </div>

        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           APPLICATIONS
      ═══════════════════════════════════════════════ -->
      <div id="applications" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Applications of NOI Analysis</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Deal Screening</p>
            <p class="text-sm text-gray-600">Use NOI to eliminate weak deals quickly. If the property's NOI Margin is already below 25% on honest assumptions, it usually does not deserve a full underwriting pass unless it is a deliberate turnaround play.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Portfolio Comparison</p>
            <p class="text-sm text-gray-600">NOI and NOI Margin help compare unlike properties on a cleaner basis than gross rent alone. A portfolio with slightly lower top-line rent may still be better if its operating structure is materially more efficient.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Offer Price Negotiation</p>
            <p class="text-sm text-gray-600">If a broker's pro forma overstates NOI by understating taxes, repairs, or vacancy, you can use corrected NOI to justify a lower offer. This is one of the most practical negotiation uses of underwriting.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Refinance Analysis</p>
            <p class="text-sm text-gray-600">NOI feeds directly into debt sizing through DSCR logic. If NOI improves after stabilization, refinance proceeds can often improve even without a dramatic cap-rate change. Agency multifamily underwriting relies on DSCR thresholds, which makes clean NOI a prerequisite for realistic refinance analysis.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Exit Strategy Modeling</p>
            <p class="text-sm text-gray-600">Investors use projected stabilized NOI to estimate possible exit value under multiple cap-rate assumptions. That makes NOI one of the bridge metrics between operations and resale strategy.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">BRRRR &amp; Value-Add</p>
            <p class="text-sm text-gray-600">Value-add investors use current NOI, renovation-period NOI, and stabilized NOI as three separate checkpoints. The spread between those states helps determine whether the renovation thesis is actually creating economic value.</p>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           INDUSTRY STANDARDS
      ═══════════════════════════════════════════════ -->
      <div id="industry-standards" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Industry Standards &amp; Professional Guidelines</h2>
        <p class="text-gray-500 text-sm mb-6">NOI is not just an investor metric; it is embedded in agency underwriting, valuation practice, and lender decision-making.</p>
        <div class="grid md:grid-cols-3 gap-6">

          <!-- Fannie Mae / Freddie Mac -->
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">F</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">Fannie Mae &amp; Freddie Mac</h3>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Fannie Mae Multifamily defines and uses underwritten DSCR as a core loan-sizing metric, which makes NOI a key upstream input in agency multifamily underwriting.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Fannie Mae's Near-Stabilization term sheet shows a <strong>1.25x</strong> minimum DSCR for Tier 2 loans and <strong>1.15x</strong> for certain MAH loans, reinforcing why accurate NOI matters before financing is structured.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Freddie Mac Multifamily cites a <strong>maximum 80% LTV</strong> and <strong>minimum 1.25x DSCR</strong> for fixed-rate loans, putting NOI at the center of debt sizing.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Bad NOI inputs produce bad DSCR outputs, which can distort leverage, valuation, and refinance expectations.</li>
            </ul>
          </div>

          <!-- CCIM -->
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">C</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">CCIM Guidelines</h3>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed mb-3">
              CCIM methodology consistently treats NOI as a foundational metric in income-based real estate analysis. In practice, CCIM emphasizes normalizing income and expenses so property performance can be compared and capitalized on a consistent basis.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> NOI should reflect real operating performance, not financing choices.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Comparable income-property analysis works only when income and expenses are normalized consistently.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Investors should separate recurring operating items from nonrecurring events before drawing conclusions.</li>
            </ul>
          </div>

          <!-- Common Lender Thresholds -->
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">$</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">Common Lender Thresholds</h3>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> <strong>DSCR ≥ 1.25x</strong> is a widely used comfort level for many stabilized income-property loans.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> <strong>DSCR 1.00x–1.24x</strong> is usually a caution zone where leverage may be limited or pricing worsens.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> <strong>LTV at or below 75%–80%</strong> is common for many stabilized multifamily and commercial structures, depending on asset quality and execution.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Lenders often stress NOI by using higher vacancy assumptions, higher underwriting rates, or normalized expense loads rather than taking seller numbers at face value.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> The cleaner and more stable the NOI, the easier it is to defend the debt ask.</li>
            </ul>
          </div>

        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           LIMITATIONS
      ═══════════════════════════════════════════════ -->
      <div id="limitations" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Limitations of NOI</h2>
        <p class="text-gray-500 text-sm mb-5">NOI is essential, but it has blind spots.</p>
        <div class="grid sm:grid-cols-2 gap-5">
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Does Not Capture Appreciation</p>
            <p class="text-sm text-gray-600">NOI tells you what the property earns operationally, not what the asset might gain in value from market appreciation. A market with flat current NOI can still be attractive if it has unusually strong future rent growth or redevelopment upside.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Ignores Financing</p>
            <p class="text-sm text-gray-600">NOI is explicitly a pre-debt metric. Two investors buying the same asset with different leverage can have identical NOI and completely different cash flow, DSCR, and equity returns.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Point-in-Time Snapshot</p>
            <p class="text-sm text-gray-600">NOI is only as good as the period it represents. A trailing 12-month NOI, current run-rate NOI, and stabilized forward NOI may all be different numbers, especially in lease-up, renovation, or distress situations.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Quality of Input Data</p>
            <p class="text-sm text-gray-600">Garbage in, garbage out applies hard here. If the rent roll is inflated, the expenses are underreported, or a tax reassessment is ignored, the NOI can look "strong" while the real deal is weak.</p>
          </div>
        </div>

        <!-- When Not to Use -->
        <div class="mt-6">
          <h3 class="font-bold text-gray-800 mb-3">When Not to Use NOI as the Primary Metric</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Vacant properties:</strong> If the building is mostly or fully vacant, trailing NOI may tell you almost nothing about future stabilized performance.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Short-term rentals:</strong> STR income is more volatile and operationally intensive, so ADR, occupancy, seasonality, and management complexity deserve heavier weight.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Land and development deals:</strong> Raw land, teardown sites, and development plays are not primarily NOI stories at the acquisition stage.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Owner-occupied property:</strong> If the deal is being bought mainly for owner use, operational income may be secondary to strategic or business value.</li>
          </ul>
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
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Typical NOI Margin by State (2026)</h2>
        <p class="text-gray-500 text-sm mb-6">NOI Margin ranges for stabilized residential rental properties. Property-tax burden, insurance costs, and regulatory environment drive the spread across states.</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 rounded-xl border border-blue-100 bg-blue-50/40">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">California (CA)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">55%–65%</p>
            <p class="text-xs text-gray-600 leading-relaxed">Despite high headline costs, California's effective property-tax burden is lower than Texas and New York — Prop 13 limits reassessment and helps support stronger NOI margins. Regulation, labor, and maintenance costs offset part of that advantage, but the net result often lands higher than investors expect.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Texas (TX)</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">42%–55%</p>
            <p class="text-xs text-gray-500">Among the highest property tax rates in the US compress NOI margins below what investors from low-tax states expect. No state income tax. Dallas and Houston markets face ongoing supply pressure in 2026. Strong landlord-friendly laws reduce management friction.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Florida (FL)</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">40%–55%</p>
            <p class="text-xs text-gray-500">Rising insurance costs post-hurricane cycles reduce margins on coastal properties. No state income tax. Strong migration inflow continues to support rents, partially offsetting expense growth in interior markets.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">New York (NY)</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">42%–55%</p>
            <p class="text-xs text-gray-500">Very high property taxes and operating costs in NYC. Rent-stabilized units face the most pressure. Strong long-run appreciation historically compensates for thin operating margins in gateway submarkets.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Arizona (AZ)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">48%–60%</p>
            <p class="text-xs text-gray-500">Lower insurance and property taxes than Sun Belt peers. Phoenix remains one of the more landlord-friendly operating environments. New supply in 2025–2026 is worth monitoring when setting vacancy assumptions.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Georgia (GA)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">50%–62%</p>
            <p class="text-xs text-gray-500">Atlanta metro offers favorable operating costs relative to most large metros. Management fees are the biggest variable. Business-friendly regulatory environment and strong in-migration support rental demand.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Colorado (CO)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">52%–62%</p>
            <p class="text-xs text-gray-500">Denver metro. Moderate taxes. Snow removal and higher maintenance standards add to operating costs, keeping the range tighter than GA or AZ. Strong tech-sector rental demand in metro areas supports durable rent levels.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Washington (WA)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">50%–60%</p>
            <p class="text-xs text-gray-500">Seattle area. High property taxes and management costs. No state income tax. Tenant-friendly regulatory environment increases management complexity and legal costs, which should be fully budgeted in any underwriting.</p>
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
            <p class="text-gray-600 text-sm leading-relaxed">A good NOI should be judged through <strong>NOI Margin</strong> (NOI ÷ Gross Rental Income) rather than raw dollar amount — the same $50,000 NOI can be excellent or weak depending on the rent base it came from. The tiers used by professional investors: <strong>60%+ = Institutional Grade</strong>; <strong>50%–59.99% = Strong Performer</strong>; <strong>40%–49.99% = Solid</strong>; <strong>below 40% requires tighter scrutiny</strong> — thin margins mean small expense shocks or vacancy upticks can threaten cash flow viability. For cap rate context, always pair NOI Margin with the implied property value table: the same NOI margin on a higher-priced asset produces a lower yield.</p>
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
      <div id="related-calculators" class="px-8 py-8">
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
            <NuxtLink to="/multifamily-property-calculator" class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
              <p class="font-bold text-sm">Multifamily Property</p>
              <p class="text-xs text-blue-300 mt-0.5">NOI, DSCR & break-even for apartments</p>
            </NuxtLink>
            <NuxtLink to="/property-management-fee-calculator" class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
              <p class="font-bold text-sm">Management Fee</p>
              <p class="text-xs text-blue-300 mt-0.5">True cost impact on NOI</p>
            </NuxtLink>
            <NuxtLink to="/airbnb-str-calculator" class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
              <p class="font-bold text-sm">Airbnb / STR</p>
              <p class="text-xs text-blue-300 mt-0.5">STR revenue & break-even</p>
            </NuxtLink>
            <NuxtLink to="/brrrr-refinance-calculator" class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
              <p class="font-bold text-sm">BRRRR Refinance</p>
              <p class="text-xs text-blue-300 mt-0.5">Cash left, DSCR & appraisal gap</p>
            </NuxtLink>
          </div>
        </div>
      </div>

      </div><!-- /SEO content -->

        </main>

    <!-- Email Capture Modal -->
    <EmailCaptureModal
      :show="showEmailModal"
      :calculator-name="'NOI Calculator'"
      :primary-result="hasResult ? `${formatCurrency(annualNOI)} NOI` : undefined"
      title="Save Your NOI Analysis"
      subtitle="Get market benchmarks, deal templates, and calculator updates."
      cta-label="Save & Get Free Updates"
      @close="showEmailModal = false"
      @captured="onEmailCaptured"
    />

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
          "name": "What is a good NOI margin for a rental property?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NOI Margin (NOI divided by Gross Rental Income) is the primary performance signal. A good NOI should be judged through NOI Margin rather than raw dollars. 60% or higher is Institutional Grade; 50%–59.99% is Strong Performer; 40%–49.99% is Solid; below 40% requires tighter scrutiny. Below 25% is Critical, and a negative NOI Margin means the property loses money before debt service and cannot be valued on the income approach."
          }
        }
      ]
    }
    </script>

  </div>
</template>

<script setup>
import { ref, reactive, computed, nextTick } from 'vue'

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
const shareSuccess = ref(false)
const showEmailModal = ref(false)

// ── Expense Fields ────────────────────────────────────────────────────────────
const expenseFields = [
  { key: 'propertyTax', label: 'Property Taxes',        placeholder: 'Annual tax bill',       hint: 'Annual tax bill' },
  { key: 'insurance',   label: 'Insurance',             placeholder: 'Hazard + liability',    hint: 'Hazard + liability' },
  { key: 'management',  label: 'Property Management',   placeholder: '8–10% of gross rents',  hint: '8–10% of gross rents' },
  { key: 'maintenance', label: 'Maintenance & Repairs', placeholder: 'Routine upkeep',        hint: 'Routine upkeep' },
  { key: 'utilities',   label: 'Utilities (landlord)',  placeholder: 'If paid by owner',      hint: 'If paid by owner' },
  { key: 'hoa',         label: 'HOA Fees',              placeholder: 'If applicable',         hint: 'If applicable' },
  { key: 'reserves',    label: 'Reserves',              placeholder: 'Roof, HVAC, appliances',hint: 'Roof, HVAC, appliances' },
  { key: 'other',       label: 'Other Expenses',        placeholder: 'Misc operating costs',  hint: 'Misc operating costs' },
]

// ── Form State ────────────────────────────────────────────────────────────────
const form = reactive({
  grossRent:          null,
  otherIncome:        null,
  vacancyRate:        null,
  numUnits:           null,
  rentableSqft:       null,
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
  form.rentableSqft = null
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

const noiPerSqft = computed(() => {
  const sqft = Number(form.rentableSqft) || 0
  if (!hasResult.value || sqft <= 0) return null
  return annualNOI.value / sqft
})

// Tier — based on NOI Margin
const tier = computed(() => {
  if (!hasResult.value) return 'N/A'
  const m = noiMargin.value
  if (m < 0)   return 'Negative NOI'
  if (m < 25)  return 'Critical'
  if (m < 40)  return 'Weak'
  if (m < 50)  return 'Solid'
  if (m < 60)  return 'Strong Performer'
  return 'Institutional Grade'
})

const tierColor = computed(() => {
  switch (tier.value) {
    case 'Institutional Grade': return '#059669'
    case 'Strong Performer':    return '#10B981'
    case 'Solid':               return '#2563EB'
    case 'Weak':                return '#D97706'
    case 'Critical':            return '#EA580C'
    case 'Negative NOI':        return '#B91C1C'
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

// ─── URL PERSISTENCE ─────────────────────────────────────────────────────────
function buildShareParams() {
  const p = new URLSearchParams()
  if (calcMode.value !== 'calc-noi') p.set('cm', calcMode.value)
  if (form.grossRent)          p.set('gr',  form.grossRent)
  if (form.otherIncome)        p.set('oi',  form.otherIncome)
  if (form.vacancyRate)        p.set('vr',  form.vacancyRate)
  if (form.numUnits)           p.set('nu',  form.numUnits)
  if (form.rentableSqft)       p.set('rs',  form.rentableSqft)
  if (expenseMode.value !== 'simple') p.set('em', expenseMode.value)
  if (expenseMode.value === 'simple' && form.totalExpensesSimple) p.set('te', form.totalExpensesSimple)
  if (expenseMode.value === 'detailed') {
    if (form.expenses.propertyTax)  p.set('ept', form.expenses.propertyTax)
    if (form.expenses.insurance)    p.set('ei',  form.expenses.insurance)
    if (form.expenses.management)   p.set('emg', form.expenses.management)
    if (form.expenses.maintenance)  p.set('emt', form.expenses.maintenance)
    if (form.expenses.utilities)    p.set('eu',  form.expenses.utilities)
    if (form.expenses.hoa)          p.set('eho', form.expenses.hoa)
    if (form.expenses.reserves)     p.set('er',  form.expenses.reserves)
    if (form.expenses.other)        p.set('eot', form.expenses.other)
  }
  if (form.targetNOI) p.set('tn', form.targetNOI)
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
  doc.text('NOI Analysis Report', 20, 30)
  doc.setFontSize(9)
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 130, 20)

  // Hero result (mode-aware)
  doc.setFillColor(...gold)
  doc.rect(15, 50, 180, 30, 'F')
  doc.setTextColor(30, 58, 95)
  doc.setFontSize(28)
  doc.setFont('helvetica', 'bold')

  let heroValue, heroLabel, heroSub
  if (calcMode.value === 'find-income') {
    heroValue = formatCurrency(requiredGRI.value)
    heroLabel = 'REQUIRED GROSS RENT (Annual)'
    heroSub = `To generate ${formatCurrency(Number(form.targetNOI))} NOI/yr`
  } else if (calcMode.value === 'find-expenses') {
    heroValue = formatCurrency(maxExpenses.value)
    heroLabel = 'MAX OPERATING EXPENSES (Annual)'
    heroSub = `EGI − Target NOI of ${formatCurrency(Number(form.targetNOI))}`
  } else {
    heroValue = formatCurrency(annualNOI.value)
    heroLabel = 'NET OPERATING INCOME (Annual)'
    heroSub = `Tier: ${tier.value}`
  }

  doc.text(heroValue, 105, 69, { align: 'center' })
  doc.setFontSize(10)
  doc.text(heroLabel, 105, 77, { align: 'center' })

  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...navy)
  doc.text(heroSub, 105, 92, { align: 'center' })

  // Financial Breakdown
  doc.setFontSize(13)
  doc.text('Financial Breakdown', 20, 108)

  let rows = []
  if (calcMode.value === 'find-income') {
    rows = [
      ['Target Annual NOI', formatCurrency(Number(form.targetNOI) || 0)],
      ['Operating Expenses', formatCurrency(totalExpensesCalc.value)],
      ['Other Income (offset)', `-${formatCurrency(Number(form.otherIncome) || 0)}`],
      ['Vacancy Rate', `${form.vacancyRate || 0}%`],
      ['Required Gross Rent', formatCurrency(requiredGRI.value || 0)],
      ['≈ Monthly Gross Rent', formatCurrency((requiredGRI.value || 0) / 12)],
    ]
  } else if (calcMode.value === 'find-expenses') {
    rows = [
      ['Gross Rental Income', formatCurrency(Number(form.grossRent) || 0)],
      ['Other Income', `+${formatCurrency(Number(form.otherIncome) || 0)}`],
      [`Vacancy Loss (${form.vacancyRate || 0}%)`, `-${formatCurrency(vacancyLoss.value)}`],
      ['Effective Gross Income (EGI)', formatCurrency(egi.value)],
      ['Target NOI', `-${formatCurrency(Number(form.targetNOI) || 0)}`],
      ['Max Operating Expenses', formatCurrency(maxExpenses.value)],
    ]
  } else {
    rows = [
      ['Gross Rental Income', formatCurrency(Number(form.grossRent) || 0)],
      ['Other Income', formatCurrency(Number(form.otherIncome) || 0)],
      [`Vacancy Loss (${form.vacancyRate || 0}%)`, `-${formatCurrency(vacancyLoss.value)}`],
      ['Effective Gross Income (EGI)', formatCurrency(egi.value)],
    ]
    if (expenseMode.value === 'detailed') {
      expenseFields.forEach(ef => {
        const v = Number(form.expenses[ef.key]) || 0
        if (v > 0) rows.push([`  — ${ef.label}`, `-${formatCurrency(v)}`])
      })
      rows.push(['Total Operating Expenses', `-${formatCurrency(totalExpensesCalc.value)}`])
    } else {
      rows.push(['Total Operating Expenses', `-${formatCurrency(totalExpensesCalc.value)}`])
    }
    rows.push(['Net Operating Income (NOI)', formatCurrency(annualNOI.value)])
  }

  let y = 115
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
    y += 12
  })

  // Key Metrics — calc-noi only
  const metrics = []
  if (calcMode.value === 'calc-noi') {
    metrics.push(
      ['NOI Margin', `${noiMargin.value.toFixed(1)}%`],
      ['Expense Ratio', `${expenseRatio.value.toFixed(1)}%`],
      ['Monthly NOI', formatCurrency(annualNOI.value / 12)],
    )
    if (noiPerUnit.value !== null) metrics.push(['NOI per Unit', formatCurrency(noiPerUnit.value)])
  }
  if (calcMode.value === 'find-income' && requiredGRI.value) {
    metrics.push(['Monthly Gross Rent', formatCurrency(requiredGRI.value / 12)])
  }
  if (noiPerSqft.value !== null && calcMode.value === 'calc-noi') metrics.push(['NOI per Sq Ft', `$${noiPerSqft.value.toFixed(2)}`])

  if (metrics.length > 0) {
    y += 6
    doc.setTextColor(...navy)
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.text('Key Metrics', 20, y)
    y += 8
  }

  metrics.forEach((m, i) => {
    if (i % 2 === 0) {
      doc.setFillColor(248, 250, 252)
      doc.rect(15, y - 5, 180, 10, 'F')
    }
    doc.setTextColor(...gray)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.text(m[0], 20, y)
    doc.setTextColor(...navy)
    doc.setFont('helvetica', 'bold')
    doc.text(m[1], 190, y, { align: 'right' })
    y += 12
  })

  // Implied Value table
  if (annualNOI.value > 0) {
    y += 4
    doc.setTextColor(...navy)
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.text('Implied Property Value (Value = NOI ÷ Cap Rate)', 20, y)
    y += 8
    ;[4, 5, 6, 7, 8, 9, 10].forEach((cr, i) => {
      if (i % 2 === 0) {
        doc.setFillColor(248, 250, 252)
        doc.rect(15, y - 5, 180, 10, 'F')
      }
      doc.setTextColor(...gray)
      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')
      doc.text(`At ${cr}% cap rate`, 20, y)
      doc.setTextColor(...navy)
      doc.setFont('helvetica', 'bold')
      doc.text(formatCurrency(annualNOI.value / (cr / 100)), 190, y, { align: 'right' })
      y += 11
    })
  }

  // Assumptions
  if (y < 252) {
    y += 4
    const assumptionLines = [
      `Expense mode: ${expenseMode.value === 'simple' ? 'lump sum (simple)' : 'detailed breakdown'}`,
      'This report is for informational purposes only. Not financial advice.',
    ]
    doc.setTextColor(...gray)
    doc.setFontSize(7)
    doc.setFont('helvetica', 'italic')
    assumptionLines.forEach((line, i) => {
      doc.text(line, 20, y + i * 5)
    })
  }

  // Footer
  doc.setFillColor(...navy)
  doc.rect(0, 280, 210, 17, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text('arvcalc.com — For informational purposes only. Not financial advice.', 105, 290, { align: 'center' })

  doc.save(`noi-analysis-${Date.now()}.pdf`)
}

// ─── SAVE SCENARIO ────────────────────────────────────────────────────────────
const triggerScenarioSave = ref(false)

const currentScenarioResult = computed(() => {
  return {
    primaryMetric: 'NOI',
    primaryValue:  formatCurrency(annualNOI.value),
    badgeLabel:    tier.value,
    badgeColor:    tierColor.value,
    noi:           annualNOI.value,
    grossIncome:   Number(form.grossRent) || undefined,
    totalExpenses: totalExpensesCalc.value || undefined,
    vacancyRate:   Number(form.vacancyRate) || undefined,
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

function onEmailCaptured(_email) {
  showEmailModal.value = false
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
