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
            <li class="text-gray-700 font-semibold">Rental Property Calculator</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         PAGE TITLE + ON THIS PAGE NAV
    ═══════════════════════════════════════════════ -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-6">
        <div class="mb-4">
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            Rental Property Calculator — Multi-Year Return &amp; IRR Tool for US Real Estate Investors
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
            <li><a href="#what-is-total-return" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What is Total Return</a></li>
            <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Your Result Means</a></li>
            <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
            <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
            <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Applications</a></li>
            <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Industry Standards</a></li>
            <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
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
              <li><a href="#what-is-total-return" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What is Total Return</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Your Result Means</a></li>
              <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
              <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
              <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Applications</a></li>
              <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Industry Standards</a></li>
              <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
              <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
            </ul>
            <button @click="isNavExpanded = !isNavExpanded" class="mt-2 flex items-center gap-1 text-xs font-bold transition" style="color: #b45309;">
              <svg class="w-3 h-3 transition-transform duration-200" :class="isNavExpanded ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <span v-if="calcMode === 'analyze'">Total Return</span>
          <span v-else-if="calcMode === 'find-rent'">Required Rent</span>
          <span v-else>Max Price</span>
        </div>
        <div class="flex items-center gap-3">
          <!-- analyze mode -->
          <template v-if="calcMode === 'analyze'">
            <span v-if="hasResult" class="text-2xl font-extrabold leading-none" :style="`color: ${badge.bg1}`">
              {{ totalReturn >= 0 ? '+' : '' }}{{ totalReturn.toFixed(1) }}%
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="hasResult" class="text-xs font-bold px-2.5 py-1 rounded-full text-white" :style="`background: ${badge.bg1}`">
              {{ badge.label }}
            </span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <!-- find-rent mode -->
          <template v-else-if="calcMode === 'find-rent'">
            <span v-if="requiredRent !== null" class="text-xl font-extrabold leading-none text-blue-700">
              {{ formatCurrency(requiredRent) }}/mo
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="requiredRent !== null" class="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">Required</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <!-- find-price mode -->
          <template v-else>
            <span v-if="maxPrice !== null" class="text-xl font-extrabold leading-none text-emerald-700">
              {{ formatCurrency(maxPrice) }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="maxPrice !== null" class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">Max Price</span>
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
            <button @click="calcMode = 'analyze'" class="calc-mode-tab" :class="calcMode === 'analyze' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'analyze' ? 'color:#1e3a5f;' : ''">Analyze Property</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'analyze' ? 'text-amber-700' : 'text-gray-400'">Total Return % + IRR</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold" :class="calcMode === 'analyze' ? 'bg-amber-100 text-amber-800' : 'bg-gray-200 text-gray-400'">Standard</span>
            </button>
            <button @click="calcMode = 'find-rent'" class="calc-mode-tab" :class="calcMode === 'find-rent' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-rent' ? 'color:#1e3a5f;' : ''">Find Required Rent</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-rent' ? 'text-blue-700' : 'text-gray-400'">Given target return</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold" :class="calcMode === 'find-rent' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
            <button @click="calcMode = 'find-price'" class="calc-mode-tab" :class="calcMode === 'find-price' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-price' ? 'color:#1e3a5f;' : ''">Find Max Price</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-price' ? 'text-emerald-700' : 'text-gray-400'">Maximum purchase price</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold" :class="calcMode === 'find-price' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
          </div>
          <div class="mt-2.5">
            <p v-if="calcMode === 'analyze'" class="text-xs text-gray-500 leading-relaxed">
              Enter all property inputs to project multi-year Total Return, IRR, and year-by-year cash flow. The flagship deal analysis mode.
            </p>
            <p v-else-if="calcMode === 'find-rent'" class="text-xs text-blue-700 leading-relaxed bg-blue-50 px-3 py-1.5 rounded-lg">
              Enter a <strong>target Total Return %</strong> and all other inputs — the calculator will solve for the minimum monthly rent needed.
            </p>
            <p v-else class="text-xs text-emerald-700 leading-relaxed bg-emerald-50 px-3 py-1.5 rounded-lg">
              Enter a <strong>target Total Return %</strong> and rent/expense inputs — the calculator will solve for the maximum purchase price you can pay.
            </p>
          </div>
        </div>
      </div>

      <!-- Two-column body -->
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch">

        <!-- ── INPUTS (left column) ── -->
        <div class="calc-inputs border-b lg:border-b-0 lg:border-r border-gray-200 bg-white min-w-0">

          <!-- TARGET RETURN — reverse modes only -->
          <div v-if="calcMode !== 'analyze'" class="border-b border-gray-100">
            <div class="calc-section-header">
              <div>
                <h2 class="calc-section-title">Target Total Return</h2>
                <p class="text-xs mt-0.5 ml-3" :class="calcMode === 'find-rent' ? 'text-blue-600' : 'text-emerald-600'">
                  {{ calcMode === 'find-rent' ? 'What annual total return do you need?' : 'What total return are you targeting?' }}
                </p>
              </div>
            </div>
            <div class="px-4 py-3">
              <label for="target-return" class="block text-xs font-semibold text-gray-700 mb-1">
                Target Total Return <span class="ml-1 text-xs font-normal text-gray-400">(% over hold period)</span>
              </label>
              <div class="relative">
                <input id="target-return" v-model="form.targetTotalReturn" type="number" min="0" max="500" step="5"
                  placeholder="Enter target return percentage"
                  class="w-full pr-8 pl-4 py-2 rounded-xl border outline-none text-gray-900 font-bold text-base transition bg-white"
                  :class="calcMode === 'find-rent' ? 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/20' : 'border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20'" />
                <span class="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-gray-400" aria-hidden="true">%</span>
              </div>
              <p class="text-xs text-gray-400 mt-1.5 leading-relaxed">
                Typical targets: 60–100% over 10 years (Solid), 100–150% (Strong). Use 10-year hold for standard comparisons.
              </p>
            </div>
          </div>

          <!-- PROPERTY section -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Property</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <!-- Purchase Price — shown in analyze and find-rent modes -->
              <div v-if="calcMode !== 'find-price'">
                <label for="purchase-price" class="block text-xs font-semibold text-gray-700 mb-1">
                  Purchase Price <span class="ml-1 text-xs font-normal text-gray-400">(acquisition cost)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="purchase-price" v-model="form.purchasePrice" type="number" min="0" step="1000"
                    placeholder="Enter purchase price"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <!-- Property Type -->
              <div>
                <label for="property-type" class="block text-xs font-semibold text-gray-700 mb-1">
                  Property Type <span class="ml-1 text-xs font-normal text-gray-400">(optional — improves benchmarks)</span>
                </label>
                <select id="property-type" v-model="form.propertyType"
                  class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition">
                  <option value="">Not specified</option>
                  <option value="sfr">Single-Family Rental (SFR)</option>
                  <option value="small-mf">Small Multifamily (2–4 units)</option>
                  <option value="large-mf">Large Multifamily (5+ units)</option>
                  <option value="condo">Condo (rental)</option>
                  <option value="commercial">Commercial (small)</option>
                </select>
              </div>
            </div>
          </div>

          <!-- INCOME section (Year 1) -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Income <span class="text-xs font-normal text-gray-400">(Year 1)</span></h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="monthly-rent" class="block text-xs font-semibold text-gray-700 mb-1">
                  Monthly Rent <span class="ml-1 text-xs font-normal text-gray-400">(Year 1 per unit × all units)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="monthly-rent" v-model="form.monthlyRent" type="number" min="0" step="50"
                    placeholder="Enter monthly gross rent"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">2026 typical: $1,800–$3,500/mo depending on market and unit type</p>
              </div>
              <div>
                <label for="other-income" class="block text-xs font-semibold text-gray-700 mb-1">
                  Other Monthly Income <span class="ml-1 text-xs font-normal text-gray-400">(parking, laundry, storage)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="other-income" v-model="form.otherIncome" type="number" min="0" step="25"
                    placeholder="Enter other monthly income"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div>
                <label for="vacancy-rate" class="block text-xs font-semibold text-gray-700 mb-1">
                  Vacancy Rate <span class="ml-1 text-xs font-normal text-gray-400">(typical: 5–10%)</span>
                </label>
                <div class="relative">
                  <input id="vacancy-rate" v-model="form.vacancyRate" type="number" min="0" max="100" step="0.5"
                    placeholder="Enter vacancy percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
              </div>
              <div v-if="annualRent1 > 0" class="p-2.5 rounded-xl text-xs font-medium text-blue-800 bg-blue-50 border border-blue-100">
                Year 1 Gross Annual Rent: <span class="font-bold">{{ formatCurrency(annualRent1) }}</span>
                <span v-if="egi1 > 0"> · EGI after vacancy: <span class="font-bold">{{ formatCurrency(egi1) }}</span></span>
              </div>
            </div>
          </div>

          <!-- OPERATING EXPENSES section (Year 1) -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Operating Expenses <span class="text-xs font-normal text-gray-400">(Year 1, annual)</span></h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <p id="expense-mode-label" class="sr-only">Expense entry mode</p>
                <div class="flex items-center gap-3 p-1 bg-white border border-gray-200 rounded-xl w-fit shadow-sm" role="group" aria-labelledby="expense-mode-label">
                  <button @click="expenseMode = 'simple'" :class="expenseMode === 'simple' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'" class="px-4 py-2 rounded-lg text-sm transition font-medium">Simple</button>
                  <button @click="expenseMode = 'detailed'" :class="expenseMode === 'detailed' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'" class="px-4 py-2 rounded-lg text-sm transition font-medium">Detailed</button>
                </div>
              </div>
              <!-- SIMPLE MODE -->
              <div v-if="expenseMode === 'simple'">
                <label for="total-expenses" class="block text-xs font-semibold text-gray-700 mb-1">
                  Total Annual Expenses <span class="ml-1 text-xs font-normal text-gray-400">(taxes + insurance + maintenance + mgmt)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="total-expenses" v-model="form.totalExpensesSimple" type="number" min="0" step="100"
                    placeholder="Enter total annual operating expenses"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">
                  Rule of thumb: 35–50% of EGI.
                  <span v-if="egi1 > 0"> For this property: {{ formatCurrency(egi1 * 0.35) }}–{{ formatCurrency(egi1 * 0.50) }}/yr.</span>
                </p>
              </div>
              <!-- DETAILED MODE -->
              <div v-if="expenseMode === 'detailed'" class="space-y-3">
                <p class="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 -mb-1">All fields are <strong>annual</strong> figures.</p>
                <div v-for="exp in expenseFields" :key="exp.key">
                  <label :for="`exp-${exp.key}`" class="block text-xs font-semibold text-gray-600 mb-1">{{ exp.label }}</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" aria-hidden="true">$</span>
                    <input :id="`exp-${exp.key}`" v-model="form.expenses[exp.key]" type="number" min="0" step="100"
                      :placeholder="exp.placeholder"
                      class="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition" />
                  </div>
                  <p v-if="exp.hint" class="text-xs text-gray-400 mt-0.5">{{ exp.hint }}</p>
                </div>
                <div class="pt-2 border-t border-gray-100">
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-500 font-medium">Total Annual Expenses</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(totalExpenses1) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- GROWTH ASSUMPTIONS -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Growth Assumptions</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="rent-growth" class="block text-xs font-semibold text-gray-700 mb-1">
                  Annual Rent Growth Rate <span class="ml-1 text-xs font-normal text-gray-400">(typical: 2–4%)</span>
                </label>
                <div class="relative">
                  <input id="rent-growth" v-model="form.rentGrowthRate" type="number" min="0" max="15" step="0.25"
                    placeholder="Enter annual rent growth rate"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
              </div>
              <div>
                <label for="expense-growth" class="block text-xs font-semibold text-gray-700 mb-1">
                  Annual Expense Growth Rate <span class="ml-1 text-xs font-normal text-gray-400">(typical: 2.5–3.5%)</span>
                </label>
                <div class="relative">
                  <input id="expense-growth" v-model="form.expenseGrowthRate" type="number" min="0" max="15" step="0.25"
                    placeholder="Enter annual expense growth rate"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
              </div>
              <p class="text-xs text-gray-400 leading-relaxed">2026 conservative assumptions: rent 2–3%, expenses 2.5–3.5%. Rent growth above 4% is optimistic.</p>
            </div>
          </div>

          <!-- FINANCING section -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Financing</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="down-pct" class="block text-xs font-semibold text-gray-700 mb-1">
                  Down Payment <span class="ml-1 text-xs font-normal text-gray-400">(investment property: typically 25%)</span>
                </label>
                <div class="relative">
                  <input id="down-pct" v-model="form.downPaymentPct" type="number" min="0" max="100" step="1"
                    placeholder="Enter down payment percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
                <p v-if="purchasePriceForCalc > 0 && form.downPaymentPct" class="text-xs text-gray-400 mt-1">
                  = {{ formatCurrency(purchasePriceForCalc * (Number(form.downPaymentPct) / 100)) }} down · Loan: {{ formatCurrency(purchasePriceForCalc * (1 - Number(form.downPaymentPct) / 100)) }}
                </p>
              </div>
              <div>
                <label for="interest-rate" class="block text-xs font-semibold text-gray-700 mb-1">
                  Interest Rate <span class="ml-1 text-xs font-normal text-gray-400">(2026 inv. property: 7–8%)</span>
                </label>
                <div class="relative">
                  <input id="interest-rate" v-model="form.interestRate" type="number" min="0" max="30" step="0.125"
                    placeholder="Enter annual interest rate"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">Enter 0 for owner-carry or interest-free seller financing.</p>
              </div>
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
              <div>
                <label for="closing-pct" class="block text-xs font-semibold text-gray-700 mb-1">
                  Closing Costs <span class="ml-1 text-xs font-normal text-gray-400">(typical: 2–5% of price)</span>
                </label>
                <div class="relative">
                  <input id="closing-pct" v-model="form.closingCostsPct" type="number" min="0" max="15" step="0.25"
                    placeholder="Enter closing costs percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- CASH INVESTED section -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Additional Cash Invested</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="initial-rehab" class="block text-xs font-semibold text-gray-700 mb-1">
                  Initial Rehab / Repairs <span class="ml-1 text-xs font-normal text-gray-400">(optional)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="initial-rehab" v-model="form.initialRehab" type="number" min="0" step="1000"
                    placeholder="Enter initial rehab costs"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div>
                <label for="cash-reserves" class="block text-xs font-semibold text-gray-700 mb-1">
                  Cash Reserves <span class="ml-1 text-xs font-normal text-gray-400">(6–12 months expenses recommended)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="cash-reserves" v-model="form.cashReserves" type="number" min="0" step="500"
                    placeholder="Enter operating cash reserves"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div v-if="totalCashInvested > 0" class="p-2.5 rounded-xl text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200">
                Total Cash Invested: <span class="font-bold">{{ formatCurrency(totalCashInvested) }}</span>
              </div>
            </div>
          </div>

          <!-- HOLD PERIOD & EXIT section -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Hold Period &amp; Exit</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="hold-period" class="block text-xs font-semibold text-gray-700 mb-1">Hold Period</label>
                <select id="hold-period" v-model="form.holdPeriodYears"
                  class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition">
                  <option :value="5">5 years</option>
                  <option :value="7">7 years</option>
                  <option :value="10">10 years</option>
                  <option :value="15">15 years</option>
                  <option :value="20">20 years</option>
                  <option :value="30">30 years</option>
                </select>
              </div>
              <!-- Exit Method Toggle -->
              <div>
                <p class="text-xs font-semibold text-gray-700 mb-1.5">Exit Method</p>
                <div class="flex gap-2">
                  <button @click="exitMethod = 'cap-rate'" class="flex-1 py-2 rounded-xl text-xs font-semibold border transition"
                    :class="exitMethod === 'cap-rate' ? 'bg-amber-50 border-amber-300 text-amber-800' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'">
                    Exit via Cap Rate
                    <span class="block text-xs font-normal mt-0.5 opacity-75">Professional default</span>
                  </button>
                  <button @click="exitMethod = 'appreciation'" class="flex-1 py-2 rounded-xl text-xs font-semibold border transition"
                    :class="exitMethod === 'appreciation' ? 'bg-amber-50 border-amber-300 text-amber-800' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'">
                    Exit via Appreciation
                    <span class="block text-xs font-normal mt-0.5 opacity-75">Simpler alternative</span>
                  </button>
                </div>
                <p class="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  <span v-if="exitMethod === 'cap-rate'">Sale Price = Year N NOI ÷ Exit Cap Rate. Reflects market pricing at exit.</span>
                  <span v-else>Sale Price = Purchase Price × (1 + Appreciation)^N. Simpler but less market-accurate.</span>
                </p>
              </div>
              <!-- Exit Cap Rate — only if cap-rate exit method -->
              <div v-if="exitMethod === 'cap-rate'">
                <label for="exit-cap-rate" class="block text-xs font-semibold text-gray-700 mb-1">
                  Exit Cap Rate <span class="ml-1 text-xs font-normal text-gray-400">(typically 0.5–1% higher than purchase)</span>
                </label>
                <div class="relative">
                  <input id="exit-cap-rate" v-model="form.exitCapRate" type="number" min="0" max="30" step="0.25"
                    placeholder="Enter exit cap rate"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
              </div>
              <!-- Appreciation Rate — only if appreciation exit method -->
              <div v-if="exitMethod === 'appreciation'">
                <label for="appreciation-rate" class="block text-xs font-semibold text-gray-700 mb-1">
                  Annual Appreciation Rate <span class="ml-1 text-xs font-normal text-gray-400">(2026 conservative: 2.5–4%)</span>
                </label>
                <div class="relative">
                  <input id="appreciation-rate" v-model="form.appreciationRate" type="number" min="0" max="20" step="0.25"
                    placeholder="Enter annual appreciation rate"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
              </div>
              <div>
                <label for="sale-costs" class="block text-xs font-semibold text-gray-700 mb-1">
                  Sale Costs <span class="ml-1 text-xs font-normal text-gray-400">(broker + closing, typical 6%)</span>
                </label>
                <div class="relative">
                  <input id="sale-costs" v-model="form.saleCostsPct" type="number" min="0" max="20" step="0.25"
                    placeholder="Enter sale costs percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Reset Button -->
          <div class="px-4 py-3">
            <button @click="resetForm" class="w-full py-2 rounded-lg border border-gray-200 text-gray-400 font-medium text-xs hover:border-gray-300 hover:text-gray-600 transition">
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

            <!-- MODE: Analyze (Standard) -->
            <div v-if="calcMode === 'analyze'" class="px-5 py-5 border-b border-gray-100 bg-white">
              <p class="text-xs font-semibold uppercase tracking-wide mb-1 text-gray-400">Total Return <span class="normal-case font-normal">({{ form.holdPeriodYears }}-year hold)</span></p>
              <p class="text-xs text-gray-400 mb-2">Before-tax analysis. Includes cash flow + equity + exit.</p>
              <div class="font-extrabold leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full transition-all mb-1"
                :class="[hasResult ? '' : 'text-gray-200', totalReturnFontClass]"
                :style="hasResult ? `color: ${badge.bg1}` : ''">
                {{ hasResult ? (totalReturn >= 0 ? '+' : '') + totalReturn.toFixed(1) + '%' : '—' }}
              </div>
              <div v-if="hasResult" class="text-sm font-semibold mb-3" :style="`color: ${badge.bg1}`">
                {{ totalProfit >= 0 ? '+' : '' }}{{ formatCurrency(totalProfit) }} over {{ form.holdPeriodYears }} years
              </div>
              <div v-if="hasResult" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-xs text-white" :style="`background: ${badge.bg1}`">
                <span class="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                {{ badge.label }}
              </div>
              <div v-else class="text-sm text-gray-300">Enter property details to see result</div>
            </div>

            <!-- MODE: Find Required Rent -->
            <div v-else-if="calcMode === 'find-rent'" class="px-5 py-5 border-b border-gray-100 bg-white">
              <p class="text-xs font-semibold uppercase tracking-wide mb-1 text-blue-400">Required Monthly Rent</p>
              <p class="text-xs mb-2 text-gray-400">
                {{ requiredRent !== null ? `To achieve ${form.targetTotalReturn}% Total Return over ${form.holdPeriodYears} years` : 'Given target return and all other inputs' }}
              </p>
              <div class="font-extrabold mb-3 leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full"
                :class="requiredRent !== null ? 'text-5xl' : 'text-6xl text-gray-200'"
                :style="requiredRent !== null ? 'color:#1e40af;' : ''">
                {{ requiredRent !== null ? formatCurrency(requiredRent) + '/mo' : '—' }}
              </div>
              <div v-if="requiredRent !== null" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold text-xs bg-blue-100 text-blue-700">
                {{ formatCurrency(requiredRent * 12) }}/yr annual rent
              </div>
              <div v-else-if="rentNotAchievable" class="text-sm text-red-500 font-medium">
                Target return not achievable with current assumptions. Try longer hold period, lower target, or different financing.
              </div>
              <div v-else class="text-sm text-gray-300">Enter target return and all other inputs</div>
            </div>

            <!-- MODE: Find Max Price -->
            <div v-else class="px-5 py-5 border-b border-gray-100 bg-white">
              <p class="text-xs font-semibold uppercase tracking-wide mb-1 text-emerald-600">Maximum Purchase Price</p>
              <p class="text-xs mb-2 text-gray-400">
                {{ maxPrice !== null ? `To achieve ${form.targetTotalReturn}% Total Return over ${form.holdPeriodYears} years` : 'Given target return and rent/expense inputs' }}
              </p>
              <div class="font-extrabold mb-3 leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full"
                :class="maxPrice !== null ? 'text-5xl' : 'text-6xl text-gray-200'"
                :style="maxPrice !== null ? 'color:#065f46;' : ''">
                {{ maxPrice !== null ? formatCurrency(maxPrice) : '—' }}
              </div>
              <div v-if="maxPrice !== null" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold text-xs bg-emerald-100 text-emerald-700">
                Down: {{ formatCurrency(maxPrice * (Number(form.downPaymentPct) || 25) / 100) }} at {{ form.downPaymentPct || 25 }}%
              </div>
              <div v-else-if="priceNotAchievable" class="text-sm text-red-500 font-medium">
                Target return not achievable. NOI too low relative to financing cost.
              </div>
              <div v-else class="text-sm text-gray-300">Enter target return and rent/expense inputs</div>
            </div>

            <!-- Warnings -->
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

            <!-- Analyze Mode: Breakdown -->
            <div v-if="calcMode === 'analyze' && hasResult" class="p-6 space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Year 1 Breakdown</h3>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Gross Annual Rent</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(annualRent1) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Vacancy Loss ({{ form.vacancyRate || 0 }}%)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(vacancyLoss1) }}</span>
              </div>
              <div v-if="otherIncome1 > 0" class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Other Income</span>
                <span class="font-semibold text-gray-900">+{{ formatCurrency(otherIncome1) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Effective Gross Income</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(egi1) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Operating Expenses</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(totalExpenses1) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm font-bold text-gray-700">Year 1 NOI</span>
                <span class="font-bold" :class="noi1 >= 0 ? 'text-green-600' : 'text-red-600'">{{ formatCurrency(noi1) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Annual Debt Service</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(annualDS) }}</span>
              </div>
              <div class="flex justify-between items-center py-2">
                <span class="text-sm font-bold text-gray-700">Year 1 Cash Flow</span>
                <span class="font-bold" :class="cashFlow1 >= 0 ? 'text-green-600' : 'text-red-600'">{{ formatCurrency(cashFlow1) }}</span>
              </div>
              <!-- Investment summary -->
              <div class="mt-4 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Cash Invested Summary</p>
                <div class="space-y-1">
                  <div class="flex justify-between text-xs">
                    <span class="text-gray-500">Down Payment ({{ form.downPaymentPct || 0 }}%)</span>
                    <span class="font-semibold text-gray-700">{{ formatCurrency(purchasePriceForCalc * (Number(form.downPaymentPct) || 0) / 100) }}</span>
                  </div>
                  <div class="flex justify-between text-xs">
                    <span class="text-gray-500">Closing Costs ({{ form.closingCostsPct || 0 }}%)</span>
                    <span class="font-semibold text-gray-700">{{ formatCurrency(purchasePriceForCalc * (Number(form.closingCostsPct) || 0) / 100) }}</span>
                  </div>
                  <div v-if="Number(form.initialRehab) > 0" class="flex justify-between text-xs">
                    <span class="text-gray-500">Initial Rehab</span>
                    <span class="font-semibold text-gray-700">{{ formatCurrency(Number(form.initialRehab)) }}</span>
                  </div>
                  <div v-if="Number(form.cashReserves) > 0" class="flex justify-between text-xs">
                    <span class="text-gray-500">Cash Reserves</span>
                    <span class="font-semibold text-gray-700">{{ formatCurrency(Number(form.cashReserves)) }}</span>
                  </div>
                  <div class="flex justify-between text-xs pt-1 border-t border-gray-200">
                    <span class="font-bold text-gray-700">Total Cash Invested</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(totalCashInvested) }}</span>
                  </div>
                </div>
              </div>
              <!-- Exit summary -->
              <div class="mt-3 p-3 rounded-xl border border-amber-100 bg-amber-50">
                <p class="text-xs font-bold text-amber-700 uppercase tracking-wide mb-2">Year {{ form.holdPeriodYears }} Exit Summary</p>
                <div class="space-y-1">
                  <div class="flex justify-between text-xs">
                    <span class="text-amber-700">Sale Price</span>
                    <span class="font-semibold text-amber-900">{{ formatCurrency(salePrice) }}</span>
                  </div>
                  <div class="flex justify-between text-xs">
                    <span class="text-amber-700">Remaining Loan Balance</span>
                    <span class="font-semibold text-amber-900">-{{ formatCurrency(remainingBalance) }}</span>
                  </div>
                  <div class="flex justify-between text-xs">
                    <span class="text-amber-700">Sale Costs ({{ form.saleCostsPct || 0 }}%)</span>
                    <span class="font-semibold text-amber-900">-{{ formatCurrency(saleCostsDollar) }}</span>
                  </div>
                  <div class="flex justify-between text-xs pt-1 border-t border-amber-200">
                    <span class="font-bold text-amber-800">Net Sale Proceeds</span>
                    <span class="font-bold text-amber-900">{{ formatCurrency(netSaleProceeds) }}</span>
                  </div>
                </div>
              </div>
              <!-- Total Return formula -->
              <div class="mt-3 p-3 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden">
                <p class="text-xs text-center text-gray-400 font-medium">Total Profit = Cumulative CF + Net Sale Proceeds − Cash Invested</p>
                <p class="text-xs text-center text-gray-500 font-semibold mt-1 break-all">
                  {{ formatCurrency(cumulativeCF) }} + {{ formatCurrency(netSaleProceeds) }} − {{ formatCurrency(totalCashInvested) }} = <span style="color: #1e3a5f;">{{ formatCurrency(totalProfit) }}</span>
                </p>
                <p class="text-xs text-center text-amber-700 font-bold mt-1">
                  Total Return = {{ formatCurrency(totalProfit) }} ÷ {{ formatCurrency(totalCashInvested) }} × 100 = {{ totalReturn.toFixed(1) }}%
                </p>
              </div>
            </div>

            <!-- Derived Metrics Cards — analyze mode -->
            <div v-if="calcMode === 'analyze' && hasResult" class="px-5 pb-4">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Derived Metrics</h3>
              <div class="grid grid-cols-2 gap-2">
                <!-- IRR -->
                <div class="rounded-xl p-3 text-center border bg-gray-50 border-gray-200">
                  <p class="text-xs font-semibold text-gray-500 mb-0.5">IRR</p>
                  <p class="text-lg font-extrabold" :style="`color: ${irrColor}`">{{ irrDisplay }}</p>
                  <p class="text-xs text-gray-400 mt-0.5">Annual time-wtd return</p>
                </div>
                <!-- Year 1 CoC -->
                <div class="rounded-xl p-3 text-center border"
                  :class="cocReturn >= 8 ? 'bg-green-50 border-green-200' : cocReturn >= 5 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="cocReturn >= 8 ? 'text-green-600' : cocReturn >= 5 ? 'text-amber-600' : 'text-red-500'">Yr 1 Cash-on-Cash</p>
                  <p class="text-lg font-extrabold"
                    :class="cocReturn >= 8 ? 'text-green-700' : cocReturn >= 5 ? 'text-amber-700' : 'text-red-700'">
                    {{ cocReturn.toFixed(2) }}%
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">Year 1 CoC return</p>
                </div>
                <!-- Year 1 DSCR -->
                <div class="rounded-xl p-3 text-center border"
                  :class="dscr1 >= 1.25 ? 'bg-green-50 border-green-200' : dscr1 >= 1.0 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="dscr1 >= 1.25 ? 'text-green-600' : dscr1 >= 1.0 ? 'text-amber-600' : 'text-red-500'">Yr 1 DSCR</p>
                  <p class="text-lg font-extrabold"
                    :class="dscr1 >= 1.25 ? 'text-green-700' : dscr1 >= 1.0 ? 'text-amber-700' : 'text-red-700'">
                    {{ dscr1 > 0 ? dscr1.toFixed(2) + 'x' : 'N/A' }}
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">Lender threshold: 1.25x</p>
                </div>
                <!-- Equity at Exit -->
                <div class="rounded-xl p-3 text-center border bg-blue-50 border-blue-200">
                  <p class="text-xs font-semibold text-blue-600 mb-0.5">Equity at Exit</p>
                  <p class="text-lg font-extrabold text-blue-800">{{ formatCurrency(equityAtExit) }}</p>
                  <p class="text-xs text-gray-400 mt-0.5">Sale Price − Loan Bal.</p>
                </div>
              </div>
              <!-- Purchase Cap Rate -->
              <div v-if="purchaseCapRate > 0" class="mt-2 flex justify-between items-center p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-sm">
                <span class="text-gray-500">Purchase Cap Rate (Year 1)</span>
                <span class="font-bold text-gray-900">{{ purchaseCapRate.toFixed(2) }}%</span>
              </div>
            </div>

            <!-- Return Composition Visualization — analyze mode -->
            <div v-if="calcMode === 'analyze' && hasResult" class="px-5 pb-4">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Return Sources</h3>
              <div class="flex h-5 rounded-lg overflow-hidden w-full" style="background: #f1f5f9;">
                <div v-if="returnBreakdown.cfPct > 0" title="Cumulative Cash Flow"
                  class="transition-all duration-300 flex-shrink-0"
                  :style="`width: ${returnBreakdown.cfPct}%; background: #34d399;`"></div>
                <div v-if="returnBreakdown.paydownPct > 0" title="Principal Paydown"
                  class="transition-all duration-300 flex-shrink-0"
                  :style="`width: ${returnBreakdown.paydownPct}%; background: #059669;`"></div>
                <div v-if="returnBreakdown.appPct > 0" title="Appreciation Gain"
                  class="transition-all duration-300 flex-shrink-0"
                  :style="`width: ${returnBreakdown.appPct}%; background: #1e3a5f;`"></div>
              </div>
              <div class="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                <span class="flex items-center gap-1.5 text-xs text-gray-500">
                  <span class="inline-block w-2.5 h-2.5 rounded-sm bg-emerald-400 flex-shrink-0"></span>
                  Cash Flow ({{ returnBreakdown.cfPct.toFixed(0) }}%)
                </span>
                <span class="flex items-center gap-1.5 text-xs text-gray-500">
                  <span class="inline-block w-2.5 h-2.5 rounded-sm bg-emerald-700 flex-shrink-0"></span>
                  Paydown ({{ returnBreakdown.paydownPct.toFixed(0) }}%)
                </span>
                <span class="flex items-center gap-1.5 text-xs text-gray-500">
                  <span class="inline-block w-2.5 h-2.5 rounded-sm flex-shrink-0" style="background:#1e3a5f;"></span>
                  Appreciation ({{ returnBreakdown.appPct.toFixed(0) }}%)
                </span>
              </div>
            </div>

            <!-- Deal Context — analyze mode -->
            <div v-if="calcMode === 'analyze' && hasResult"
              class="px-5 py-4 border-t border-gray-100 rounded-b-xl"
              :style="`background: ${badge.bg1}12;`">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-bold px-2.5 py-0.5 rounded-full text-white" :style="`background: ${badge.bg1}`">{{ badge.label }}</span>
                <span class="text-xs font-semibold text-gray-400 uppercase tracking-wide">Deal context</span>
              </div>
              <p class="text-sm leading-relaxed font-medium text-gray-700">{{ insightText }}</p>
            </div>

            <!-- Multi-Year Breakdown Table — analyze mode -->
            <div v-if="calcMode === 'analyze' && hasResult" class="border-t border-gray-100">
              <div class="px-4 pt-4 pb-2">
                <div class="flex items-center justify-between mb-3">
                  <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Year-by-Year Projection</h3>
                  <button @click="showTable = !showTable" class="text-xs text-amber-700 font-semibold hover:text-amber-900 transition">
                    {{ showTable ? 'Hide table ↑' : 'Show full table ↓' }}
                  </button>
                </div>
                <!-- Always show first 3 rows -->
                <div class="overflow-x-auto rounded-xl border border-gray-100">
                  <table class="w-full text-xs">
                    <thead>
                      <tr style="background:#f8fafc;">
                        <th class="text-left px-3 py-2 font-bold text-gray-500">Year</th>
                        <th class="text-right px-2 py-2 font-bold text-gray-500">NOI</th>
                        <th class="text-right px-2 py-2 font-bold text-gray-500">Cash Flow</th>
                        <th class="text-right px-2 py-2 font-bold text-gray-500">Cum. Return</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-50">
                      <tr v-for="row in (showTable ? multiYearTable : multiYearTable.slice(0, 3))" :key="row.year"
                        :class="row.isExit ? 'bg-amber-50' : ''">
                        <td class="px-3 py-2 font-semibold" :class="row.isExit ? 'text-amber-800' : 'text-gray-700'">
                          {{ row.isExit ? `Yr ${row.year} Exit` : `Yr ${row.year}` }}
                        </td>
                        <td class="px-2 py-2 text-right" :class="row.isExit ? 'text-amber-600' : ''">
                          {{ row.isExit ? '—' : formatCurrency(row.noi) }}
                        </td>
                        <td class="px-2 py-2 text-right"
                          :class="row.isExit ? 'text-amber-800 font-bold' : row.cashFlow >= 0 ? 'text-green-600' : 'text-red-500'">
                          {{ row.isExit ? formatCurrency(row.saleProceeds) : formatCurrency(row.cashFlow) }}
                        </td>
                        <td class="px-2 py-2 text-right font-bold" :class="row.isExit ? 'text-amber-900' : ''">
                          {{ row.cumulativeReturn.toFixed(1) }}%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p v-if="!showTable" class="text-xs text-gray-400 mt-1 italic">Showing first 3 years. Click "Show full table" for all {{ form.holdPeriodYears + 1 }} rows.</p>
              </div>
            </div>

            <!-- Sensitivity Tables — analyze mode -->
            <div v-if="calcMode === 'analyze' && hasResult" class="border-t border-gray-100">
              <div class="px-4 pt-4 pb-2">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Sensitivity: Hold Period × Rent Growth</span>
                </div>
                <div class="overflow-x-auto rounded-xl border border-gray-100">
                  <table class="w-full text-xs">
                    <thead>
                      <tr style="background:#f8fafc;">
                        <th class="text-left px-3 py-2 font-bold text-gray-500">Hold Period</th>
                        <th class="text-center px-2 py-2 font-bold text-gray-500">Rent +2%</th>
                        <th class="text-center px-2 py-2 font-bold text-gray-500">Rent +3%</th>
                        <th class="text-center px-2 py-2 font-bold text-gray-500">Rent +4%</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-50">
                      <tr v-for="row in sensitivityHoldRent" :key="row.hold"
                        :class="row.hold === form.holdPeriodYears ? 'font-bold' : ''"
                        :style="row.hold === form.holdPeriodYears ? 'background: rgba(245,158,11,0.07);' : ''">
                        <td class="px-3 py-2 text-gray-700">{{ row.hold }}yr</td>
                        <td class="px-2 py-2 text-center" :class="row.r2 >= 100 ? 'text-green-600' : row.r2 >= 60 ? 'text-amber-600' : 'text-red-500'">{{ row.r2.toFixed(0) }}%</td>
                        <td class="px-2 py-2 text-center" :class="row.r3 >= 100 ? 'text-green-600' : row.r3 >= 60 ? 'text-amber-600' : 'text-red-500'">{{ row.r3.toFixed(0) }}%</td>
                        <td class="px-2 py-2 text-center" :class="row.r4 >= 100 ? 'text-green-600' : row.r4 >= 60 ? 'text-amber-600' : 'text-red-500'">{{ row.r4.toFixed(0) }}%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p class="text-xs text-gray-400 mt-1 italic">Total Return % at different hold periods and rent growth rates. All other inputs held constant.</p>
              </div>
            </div>

            <!-- Sensitivity: Interest Rate × Rent Growth -->
            <div v-if="calcMode === 'analyze' && hasResult" class="border-t border-gray-100">
              <div class="px-4 pt-4 pb-2">
                <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Sensitivity: Interest Rate × Rent Growth</span>
                <div class="overflow-x-auto rounded-xl border border-gray-100">
                  <table class="w-full text-xs">
                    <thead>
                      <tr style="background:#f8fafc;">
                        <th class="text-left px-3 py-2 font-bold text-gray-500">Rate</th>
                        <th class="text-center px-2 py-2 font-bold text-gray-500">Rent +2%</th>
                        <th class="text-center px-2 py-2 font-bold text-gray-500">Rent +3%</th>
                        <th class="text-center px-2 py-2 font-bold text-gray-500">Rent +4%</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-50">
                      <tr v-for="row in sensitivityRateRent" :key="row.label"
                        :class="row.isCurrent ? 'font-bold' : ''"
                        :style="row.isCurrent ? 'background: rgba(245,158,11,0.07);' : ''">
                        <td class="px-3 py-2 text-gray-700">{{ row.label }}</td>
                        <td class="px-2 py-2 text-center" :class="row.r2 >= 60 ? 'text-green-600' : row.r2 >= 30 ? 'text-amber-600' : 'text-red-500'">{{ row.r2.toFixed(0) }}%</td>
                        <td class="px-2 py-2 text-center" :class="row.r3 >= 60 ? 'text-green-600' : row.r3 >= 30 ? 'text-amber-600' : 'text-red-500'">{{ row.r3.toFixed(0) }}%</td>
                        <td class="px-2 py-2 text-center" :class="row.r4 >= 60 ? 'text-green-600' : row.r4 >= 30 ? 'text-amber-600' : 'text-red-500'">{{ row.r4.toFixed(0) }}%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p class="text-xs text-gray-400 mt-1 italic">Total Return % at different interest rates and rent growth. Hold period and exit cap rate held constant.</p>
              </div>
            </div>

            <!-- Sensitivity: Exit Cap Rate variation -->
            <div v-if="calcMode === 'analyze' && hasResult && exitMethod === 'cap-rate'" class="border-t border-gray-100">
              <div class="px-4 pt-4 pb-4">
                <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Exit Cap Rate Sensitivity</span>
                <div class="space-y-0.5">
                  <div v-for="row in sensitivityExitCap" :key="row.label"
                    class="flex justify-between items-center text-xs px-2 py-1.5 rounded-lg"
                    :class="row.isCurrent ? 'font-bold' : 'text-gray-600'"
                    :style="row.isCurrent ? 'background: rgba(245,158,11,0.1); color: #92400e;' : ''">
                    <span>{{ row.label }}</span>
                    <span>{{ formatCurrency(row.salePrice) }}</span>
                    <span>{{ formatCurrency(row.netProceeds) }}</span>
                    <span :class="row.totalReturn >= 60 ? 'text-green-600' : row.totalReturn >= 30 ? 'text-amber-600' : 'text-red-500'" class="font-semibold">{{ row.totalReturn.toFixed(0) }}%</span>
                  </div>
                  <div class="flex justify-between items-center text-xs px-2 py-1 text-gray-400 font-bold border-t border-gray-100 mt-1">
                    <span>Exit Cap Rate</span><span>Sale Price</span><span>Net Proceeds</span><span>Total Return</span>
                  </div>
                </div>
                <p class="text-xs text-gray-400 mt-2 italic">Sale Price and Total Return at different exit cap rates. All other inputs held constant.</p>
              </div>
            </div>

            <!-- Scenario Analysis — analyze mode -->
            <div v-if="calcMode === 'analyze' && hasResult" class="border-t border-gray-100">
              <div class="px-4 pt-4 pb-4">
                <button @click="scenariosOpen = !scenariosOpen" class="flex items-center justify-between w-full text-left mb-2">
                  <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Scenario Analysis</span>
                  <svg class="w-4 h-4 text-gray-400 transition-transform" :class="scenariosOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                <div v-if="scenariosOpen" class="space-y-3">
                  <div v-for="sc in scenarios" :key="sc.key" class="p-3 rounded-xl border" :style="`background: ${sc.bgColor}; border-color: ${sc.borderColor};`">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-xs font-bold" :style="`color: ${sc.color};`">{{ sc.label }}</span>
                      <span class="text-lg font-extrabold" :style="`color: ${sc.color};`">{{ sc.totalReturn.toFixed(1) }}%</span>
                    </div>
                    <p class="text-xs text-gray-500 mb-1">{{ sc.desc }}</p>
                    <p class="text-xs font-medium" :style="`color: ${sc.color};`">IRR: {{ sc.irr }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons — all modes -->
            <div v-if="hasResult || requiredRent !== null || maxPrice !== null" class="p-4 border-t border-gray-100 space-y-2">
              <button v-if="hasResult" @click="openSaveScenario"
                class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
                style="background: #f59e0b; color: #1e3a5f;">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>
                Save Scenario
              </button>
              <div class="grid grid-cols-2 gap-2">
                <button @click="shareResult"
                  class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border"
                  :class="shareSuccess ? 'border-green-400 text-green-700 bg-green-50' : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'">
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
              <!-- Analyze long-term ROI integration button -->
              <button @click="analyzeLongTermROI"
                class="mt-1 w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white transition hover:opacity-90"
                style="background: #4f46e5;">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                Analyze long-term ROI (5–30 years)
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>
            </div>

          </div><!-- /Main Result Card -->

        </div>
        </div>
        </div><!-- /Right column -->

      </div><!-- /Two-column grid -->
      </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           SCENARIO PANEL
      ═══════════════════════════════════════════════ -->
      <div class="max-w-6xl mx-auto px-4 pb-6 mt-4">
        <ScenarioPanel
          calculator="rental-property"
          :has-result="hasResult"
          :result="currentScenarioResult"
          :trigger-save="triggerScenarioSave"
          @saved="onScenarioSaved"
        />
      </div>

      <!-- ═══════════════════════════════════════════════
           SEO CONTENT SECTIONS
      ═══════════════════════════════════════════════ -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 mt-8 overflow-hidden">

        <!-- ═══ OVERVIEW ═══ -->
        <div id="overview" class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Overview</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            This <strong>rental property calculator</strong> is a full-featured multi-year deal analyzer for US real estate investors. Unlike single-year tools such as the Cap Rate or Cash-on-Cash calculators, this rental property investment calculator projects your deal forward 5 to 30 years — capturing the compounding effect of rent growth, principal paydown, and property appreciation. It is the definitive rental property roi calculator for buy-and-hold investors who want a bottom-line answer to "how much will I make?"
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            The calculator produces Total Return % as the headline metric — displayed as both a percentage and an absolute dollar amount (e.g., +78.3% / $74,000 over 10 years). Alongside Total Return, it computes IRR, Year 1 Cash-on-Cash, Year 1 DSCR, and Equity at Exit. Three calculation modes are available: <strong>Analyze Property</strong> (standard forward analysis), <strong>Find Required Rent</strong> (reverse mode: what rent do I need to hit my target return?), and <strong>Find Max Purchase Price</strong> (reverse mode: what's the most I can pay?).
          </p>
          <p class="text-gray-700 leading-relaxed mb-4">
            First-time landlords use this rental property return calculator to evaluate their first acquisition before making an offer. Seasoned multi-property investors use it to screen deals in seconds and rank competing opportunities by projected Total Return. Syndication sponsors use the IRR output in investor-facing pro formas. Real estate agents use it to quantify investment value for buyer-investor clients.
          </p>
          <p class="text-gray-700 leading-relaxed">
            <strong>Important: this is a before-tax analysis.</strong> Actual after-tax returns depend on the investor's tax bracket, state, depreciation handling, and 1031 exchange strategy — too state-specific for a general-purpose tool. For complete deal analysis, pair this calculator with the <NuxtLink to="/cap-rate-calculator" class="text-amber-700 underline hover:text-amber-900">Cap Rate Calculator</NuxtLink>, <NuxtLink to="/noi-calculator" class="text-amber-700 underline hover:text-amber-900">NOI Calculator</NuxtLink>, <NuxtLink to="/dscr-calculator" class="text-amber-700 underline hover:text-amber-900">DSCR Calculator</NuxtLink>, and <NuxtLink to="/cash-on-cash-calculator" class="text-amber-700 underline hover:text-amber-900">Cash-on-Cash Calculator</NuxtLink> for deeper analysis of each component.
          </p>
        </div>

        <!-- ═══ HOW TO USE ═══ -->
        <div id="how-to-use" class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">How to Use the Rental Property Calculator</h2>
          <p class="text-gray-500 text-sm mb-6">Follow these steps to analyze any US rental property over any hold period in under 3 minutes.</p>
          <div class="space-y-5">
            <div class="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50">
              <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">1</span>
              <div>
                <p class="text-sm font-semibold text-gray-800 mb-1">Choose a calculation mode</p>
                <p class="text-sm text-gray-600 leading-relaxed">Select <strong>Analyze Property</strong> to evaluate a specific deal and project its multi-year Total Return. Choose <strong>Find Required Rent</strong> when you know the price and need to determine the minimum rent to hit your return target. Use <strong>Find Max Purchase Price</strong> to calculate the most you can pay for a deal given your rent, expense, and return requirements — useful for making competitive offers without overpaying.</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50">
              <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">2</span>
              <div>
                <p class="text-sm font-semibold text-gray-800 mb-1">Enter property and Year 1 income</p>
                <p class="text-sm text-gray-600 leading-relaxed">Enter the purchase price and Year 1 gross monthly rent. In 2026, typical single-family rents range $1,600–$3,000/mo in secondary markets, $2,500–$4,500/mo in primary metros. Add other income (parking, laundry) if applicable. Enter vacancy rate — 5–8% is typical for stabilized rentals; use 7% as a conservative default for most US markets.</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50">
              <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">3</span>
              <div>
                <p class="text-sm font-semibold text-gray-800 mb-1">Enter operating expenses (simple or detailed)</p>
                <p class="text-sm text-gray-600 leading-relaxed">In Simple mode, enter the total annual operating expenses — property taxes, insurance, management, maintenance, utilities if landlord-paid, and HOA. For residential properties, expenses typically run 35–50% of effective gross income. Use Detailed mode to enter each expense category separately for greater precision. All expenses are Year 1 annual figures; the calculator applies your Expense Growth Rate to project forward.</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50">
              <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">4</span>
              <div>
                <p class="text-sm font-semibold text-gray-800 mb-1">Set growth assumptions</p>
                <p class="text-sm text-gray-600 leading-relaxed">Enter annual rent growth and expense growth rates. For 2026 conservative underwriting: rent growth 2–3%, expense growth 2.5–3.5%. Rent growth above 4% is optimistic and will inflate projected returns significantly — a 0.5% difference in rent growth can shift 10-year Total Return by 8–15 percentage points. Lenders typically underwrite at 2–3% rent growth; match their assumptions for maximum credibility.</p>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50">
              <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">5</span>
              <div>
                <p class="text-sm font-semibold text-gray-800 mb-1">Configure financing and hold period</p>
                <p class="text-sm text-gray-600 leading-relaxed">For 2026 investment property purchases, expect 25% down and 7–8% interest rates on 30-year conventional loans. Enter closing costs (typically 3% for investment purchases) and any initial rehab costs. Select your hold period — 10 years is the standard benchmark; use 5 years for BRRRR or short-term strategies. For exit method, choose Exit via Cap Rate (professional default) or Exit via Appreciation — both are mutually exclusive.</p>
              </div>
            </div>
            <div class="p-5 rounded-xl border border-amber-200" style="background: #fffbeb;">
              <h3 class="font-bold text-sm mb-3" style="color: #92400e;">Pro Tips for Accurate Analysis</h3>
              <ul class="space-y-2 text-sm text-amber-800">
                <li class="flex gap-2"><span class="font-bold flex-shrink-0">→</span> For professional deal analysis, use Exit via Cap Rate — set your exit cap 0.5–1% higher than your purchase cap to account for market uncertainty and property aging over the hold period.</li>
                <li class="flex gap-2"><span class="font-bold flex-shrink-0">→</span> IRR above ~10% is generally strong for 2026 10-year holds. If your IRR is under 6%, you're likely paying too much or over-leveraged — reconsider the deal or negotiate the price.</li>
                <li class="flex gap-2"><span class="font-bold flex-shrink-0">→</span> Use Find Max Purchase Price mode to determine your offer ceiling — this tells you exactly the price at which the deal still hits your target return, factoring in your specific financing structure.</li>
                <li class="flex gap-2"><span class="font-bold flex-shrink-0">→</span> Multi-year projections compound — a 0.5% difference in rent growth over 10 years can shift Total Return by 8–15 percentage points. Run the sensitivity table to understand your biggest risk factors.</li>
              </ul>
            </div>
            <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
              <h3 class="font-bold text-sm text-gray-800 mb-3">Understanding Your Total Return Result</h3>
              <ul class="space-y-2 text-sm text-gray-600">
                <li><span class="font-semibold text-gray-800">≥ 150% — Exceptional</span> — Top-quartile outcome. Usually requires value-add execution, BRRRR with cash-out, or strong market appreciation.</li>
                <li><span class="font-semibold text-gray-800">100–149% — Strong</span> — Above-market return. Typical for well-located stabilized deals in growing Sun Belt markets.</li>
                <li><span class="font-semibold text-gray-800">60–99% — Solid</span> — Market-average for 2026 10-year hold at 25% down and 7.5% rate. Reasonable outcome for disciplined buyers.</li>
                <li><span class="font-semibold text-gray-800">30–59% — Weak</span> — Below market. May be acceptable in high-appreciation coastal markets where appreciation story is conviction-driven.</li>
                <li><span class="font-semibold text-gray-800">0–29% — Critical</span> — Barely positive. Opportunity cost likely exceeds actual return. Reconsider this deal.</li>
                <li><span class="font-semibold text-gray-800">Below 0% — Loss</span> — Negative total return. Investor loses money over the hold period. Do not proceed without major changes.</li>
              </ul>
              <p class="text-xs text-gray-400 mt-3 italic">Tiers calibrated for 10-year hold with 25% down. For shorter holds (5 years), adjust expectations down. For 20+ year holds, adjust up.</p>
            </div>
          </div>
        </div>

        <!-- ═══ INPUTS & OUTPUTS ═══ -->
        <div id="inputs-outputs" class="border-b border-gray-100">
          <div class="px-8 py-5 border-b border-gray-100">
            <h2 class="text-lg font-extrabold" style="color: #1e3a5f;">Inputs &amp; Outputs — Field Reference</h2>
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
                <tr><td class="px-6 py-3 font-semibold text-gray-800">Purchase Price</td><td class="px-4 py-3 text-gray-600">Agreed acquisition cost, excluding closing costs and rehab.</td><td class="px-4 py-3 text-gray-500">MLS, broker OM, purchase contract</td></tr>
                <tr class="bg-gray-50/40"><td class="px-6 py-3 font-semibold text-gray-800">Monthly Rent</td><td class="px-4 py-3 text-gray-600">Year 1 gross rent for all units combined. Use actual collected rent, not asking price.</td><td class="px-4 py-3 text-gray-500">Current lease, market rent comps</td></tr>
                <tr><td class="px-6 py-3 font-semibold text-gray-800">Other Income</td><td class="px-4 py-3 text-gray-600">Monthly income beyond base rent — parking, laundry, storage, pet fees.</td><td class="px-4 py-3 text-gray-500">Seller's T-12, property records</td></tr>
                <tr class="bg-gray-50/40"><td class="px-6 py-3 font-semibold text-gray-800">Vacancy Rate</td><td class="px-4 py-3 text-gray-600">% of time units are empty. Typical stabilized US rental: 5–8%.</td><td class="px-4 py-3 text-gray-500">Local market data, historical occupancy from seller</td></tr>
                <tr><td class="px-6 py-3 font-semibold text-gray-800">Operating Expenses</td><td class="px-4 py-3 text-gray-600">Annual costs to operate the property: taxes, insurance, management, maintenance. Exclude debt service.</td><td class="px-4 py-3 text-gray-500">County tax records, insurance quotes, seller T-12</td></tr>
                <tr class="bg-gray-50/40"><td class="px-6 py-3 font-semibold text-gray-800">Rent Growth Rate</td><td class="px-4 py-3 text-gray-600">Annual % rent increase applied to project Year 2 through Year N rent.</td><td class="px-4 py-3 text-gray-500">2026 typical: 2–4%/yr — use 2–3% for conservative underwriting</td></tr>
                <tr><td class="px-6 py-3 font-semibold text-gray-800">Expense Growth Rate</td><td class="px-4 py-3 text-gray-600">Annual % expense increase — typically tracks CPI plus maintenance inflation.</td><td class="px-4 py-3 text-gray-500">2026 typical: 2.5–3.5%/yr</td></tr>
                <tr class="bg-gray-50/40"><td class="px-6 py-3 font-semibold text-gray-800">Down Payment %</td><td class="px-4 py-3 text-gray-600">% of purchase price paid as equity. Investment property: typically 25% minimum.</td><td class="px-4 py-3 text-gray-500">Lender requirements, personal capital available</td></tr>
                <tr><td class="px-6 py-3 font-semibold text-gray-800">Interest Rate</td><td class="px-4 py-3 text-gray-600">Annual fixed rate on the investment property loan.</td><td class="px-4 py-3 text-gray-500">Current lender quote — 2026 inv. property: 7–8%</td></tr>
                <tr class="bg-gray-50/40"><td class="px-6 py-3 font-semibold text-gray-800">Loan Term</td><td class="px-4 py-3 text-gray-600">Amortization period. Standard options: 15, 20, 25, or 30 years.</td><td class="px-4 py-3 text-gray-500">Loan documents, lender term sheet</td></tr>
                <tr><td class="px-6 py-3 font-semibold text-gray-800">Closing Costs %</td><td class="px-4 py-3 text-gray-600">Transaction costs as % of purchase price: title, escrow, lender fees, prepaid items.</td><td class="px-4 py-3 text-gray-500">Typical investment purchase: 2–5% of price</td></tr>
                <tr class="bg-gray-50/40"><td class="px-6 py-3 font-semibold text-gray-800">Hold Period</td><td class="px-4 py-3 text-gray-600">Years to hold before selling. Standard comparison: 10 years. Options: 5/7/10/15/20/30.</td><td class="px-4 py-3 text-gray-500">Investment strategy decision</td></tr>
                <tr><td class="px-6 py-3 font-semibold text-gray-800">Exit Method</td><td class="px-4 py-3 text-gray-600">How the exit sale price is calculated. Cap Rate (professional) or Appreciation % (simpler). Mutually exclusive.</td><td class="px-4 py-3 text-gray-500">Professional default: Exit via Cap Rate</td></tr>
                <tr class="bg-gray-50/40"><td class="px-6 py-3 font-semibold text-gray-800">Exit Cap Rate</td><td class="px-4 py-3 text-gray-600">Market cap rate at exit. Used to compute Sale Price = Year N NOI ÷ Exit Cap Rate. Active only in Exit via Cap Rate mode.</td><td class="px-4 py-3 text-gray-500">Typically 0.5–1% higher than purchase cap rate</td></tr>
                <tr><td class="px-6 py-3 font-semibold text-gray-800">Appreciation Rate</td><td class="px-4 py-3 text-gray-600">Annual property value growth rate. Active only in Exit via Appreciation mode — hidden otherwise to prevent double-counting appreciation. Sale Price = Purchase Price × (1 + rate)^N.</td><td class="px-4 py-3 text-gray-500">2026 conservative: 2.5–4%/yr. Do not exceed 5% for realistic modeling</td></tr>
                <tr class="bg-gray-50/40"><td class="px-6 py-3 font-semibold text-gray-800">Sale Costs %</td><td class="px-4 py-3 text-gray-600">Total selling costs: broker commission + closing costs at exit.</td><td class="px-4 py-3 text-gray-500">Typical: 6% (4–7% range depending on market)</td></tr>
                <tr class="bg-gray-50/40"><td class="px-6 py-3 font-semibold text-gray-800 border-t-2 border-amber-200">Total Return %</td><td class="px-4 py-3 text-gray-600 border-t-2 border-amber-200">Multi-year total gain on invested cash. Includes cash flow + principal paydown + appreciation + exit.</td><td class="px-4 py-3 text-gray-500 italic border-t-2 border-amber-200">Calculated automatically</td></tr>
                <tr><td class="px-6 py-3 font-semibold text-gray-800">IRR</td><td class="px-4 py-3 text-gray-600">Internal Rate of Return — time-weighted annual return accounting for cash flow timing.</td><td class="px-4 py-3 text-gray-500 italic">Calculated automatically (Newton-Raphson solver)</td></tr>
                <tr class="bg-gray-50/40"><td class="px-6 py-3 font-semibold text-gray-800">Year 1 Cash-on-Cash</td><td class="px-4 py-3 text-gray-600">Year 1 cash flow ÷ total cash invested × 100. Quick check on immediate income.</td><td class="px-4 py-3 text-gray-500 italic">Calculated automatically</td></tr>
                <tr><td class="px-6 py-3 font-semibold text-gray-800">Year 1 DSCR</td><td class="px-4 py-3 text-gray-600">Year 1 NOI ÷ Annual Debt Service. Lender qualification indicator — min 1.25x for most lenders.</td><td class="px-4 py-3 text-gray-500 italic">Calculated automatically</td></tr>
                <tr class="bg-gray-50/40"><td class="px-6 py-3 font-semibold text-gray-800">Equity at Exit</td><td class="px-4 py-3 text-gray-600">Sale Price − Remaining Loan Balance at Year N. Cash received from principal paydown + appreciation.</td><td class="px-4 py-3 text-gray-500 italic">Calculated automatically</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ═══ IMPORTANT NOTE ═══ -->
        <div class="border-b border-gray-100 px-8 py-6">
          <div class="p-5 rounded-xl border-l-4 border-amber-400 bg-amber-50">
            <p class="font-bold text-sm text-amber-900 mb-1">Important: Before-Tax Analysis &amp; Projection Assumptions</p>
            <p class="text-sm text-amber-800 leading-relaxed">This calculator performs <strong>before-tax analysis only</strong>. Results represent gross returns before income tax, depreciation recapture, or 1031 exchange benefits — all of which are investor-specific and state-dependent. Multi-year projections rely on user-entered assumptions (rent growth, expense growth, exit cap rate). Small changes in these inputs compound significantly over long holds — always run the sensitivity tables and stress-test against conservative assumptions. For serious acquisition decisions, pair this calculator with professional tax and financial advice.</p>
            <p class="text-sm text-amber-700 leading-relaxed mt-2">Exit method choice matters: <strong>Exit via Cap Rate</strong> (default) uses Year N NOI ÷ exit cap to set sale price — the professional standard. <strong>Exit via Appreciation</strong> uses Purchase Price × (1 + rate)^N. These are mutually exclusive — never use both simultaneously, as that would double-count value growth. The two methods will produce different Total Returns for the same deal; understand the spread before relying on either result.</p>
          </div>
        </div>

        <!-- ═══ FORMULA ═══ -->
        <div id="formula" class="border-b border-gray-100">
          <div class="px-8 py-6 border-b border-gray-100">
            <h2 class="text-xl font-extrabold" style="color: #1e3a5f;">Total Return Formula &amp; Multi-Year Calculation Method</h2>
            <p class="text-gray-500 text-sm mt-1">The exact math this calculator uses — plus a worked Atlanta, GA 10-year example for 2026</p>
          </div>
          <div class="px-8 py-8">
            <div class="grid md:grid-cols-2 gap-10">
              <div>
                <h3 class="font-bold text-gray-800 mb-4">Step-by-step calculation</h3>
                <div class="space-y-3">
                  <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                    <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">1</span>
                    <div><p class="text-sm font-semibold text-gray-800">Year 1 NOI</p><p class="text-xs text-gray-500 mt-0.5">Gross Rent × (1 − Vacancy) + Other Income − Operating Expenses</p></div>
                  </div>
                  <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                    <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">2</span>
                    <div><p class="text-sm font-semibold text-gray-800">Annual Debt Service</p><p class="text-xs text-gray-500 mt-0.5">Standard amortization payment × 12. Fixed rate — stays flat across all years.</p></div>
                  </div>
                  <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                    <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">3</span>
                    <div><p class="text-sm font-semibold text-gray-800">Year 1 Cash Flow</p><p class="text-xs text-gray-500 mt-0.5">Year 1 NOI − Annual Debt Service</p></div>
                  </div>
                  <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                    <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">4</span>
                    <div><p class="text-sm font-semibold text-gray-800">Project Years 2–N</p><p class="text-xs text-gray-500 mt-0.5">Rent × (1 + rentGrowth)^(N−1). Expenses × (1 + expGrowth)^(N−1). Debt service stays flat.</p></div>
                  </div>
                  <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                    <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">5</span>
                    <div><p class="text-sm font-semibold text-gray-800">Cumulative Cash Flow</p><p class="text-xs text-gray-500 mt-0.5">Sum of all annual cash flows from Year 1 through Year N</p></div>
                  </div>
                  <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                    <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">6</span>
                    <div><p class="text-sm font-semibold text-gray-800">Exit Sale Price</p><p class="text-xs text-gray-500 mt-0.5"><strong>Cap Rate exit:</strong> Year N NOI ÷ Exit Cap Rate. <strong>Appreciation exit:</strong> Purchase Price × (1 + AppRate)^N. Never both.</p></div>
                  </div>
                  <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                    <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">7</span>
                    <div><p class="text-sm font-semibold text-gray-800">Net Sale Proceeds</p><p class="text-xs text-gray-500 mt-0.5">Sale Price − Remaining Loan Balance − Sale Costs (%).</p></div>
                  </div>
                  <div class="flex items-start gap-3 p-3 rounded-xl border border-amber-200 bg-amber-50">
                    <span class="text-xs font-bold px-2 py-0.5 rounded-md flex-shrink-0 mt-0.5" style="background:#f59e0b;color:#1e3a5f;">8</span>
                    <div><p class="text-sm font-semibold text-gray-800">Total Return</p><p class="text-xs text-gray-500 mt-0.5">Total Profit = Cumulative CF + Net Sale Proceeds − Total Cash Invested<br>Total Return % = Total Profit ÷ Total Cash Invested × 100</p></div>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <div class="p-5 rounded-xl text-center border border-gray-200 bg-gray-50">
                  <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Primary Formula</p>
                  <div class="font-mono font-bold text-sm mb-2" style="color:#1e3a5f;">Total Profit = Cum. CF + Net Proceeds − Cash Invested</div>
                  <div class="font-mono text-xs text-gray-500 mb-1">Total Return % = Total Profit ÷ Cash Invested × 100</div>
                  <div class="mt-4 p-3 rounded-lg border border-gray-200 text-left font-mono text-xs bg-white" style="color: #374151; line-height: 1.8;">
                    <div>Year 1 Gross Rent</div>
                    <div>− Vacancy Loss</div>
                    <div>+ Other Income</div>
                    <div class="border-t border-gray-300 pt-1">= Effective Gross Income</div>
                    <div>− Operating Expenses</div>
                    <div class="border-t border-gray-300 pt-1">= NOI (grows with rent)</div>
                    <div>− Annual Debt Service (flat)</div>
                    <div class="border-t border-gray-300 pt-1">= Annual Cash Flow</div>
                    <div>× Hold Period N years</div>
                    <div class="border-t border-gray-300 pt-1">= Cumulative Cash Flow</div>
                    <div>+ Net Sale Proceeds (at exit)</div>
                    <div>− Total Cash Invested</div>
                    <div class="border-t border-gray-300 pt-1 font-extrabold" style="color:#1e3a5f;">= Total Return (%)</div>
                  </div>
                </div>
                <!-- Atlanta Example -->
                <div class="p-4 rounded-xl border border-blue-100 bg-blue-50">
                  <p class="text-xs font-bold text-blue-800 mb-3">Atlanta, GA Example (2026) — Solid Tier</p>
                  <p class="text-xs text-blue-700 mb-3">Atlanta offers strong rent-to-price ratios relative to Sun Belt peers — one of few markets where 10-year Total Return regularly lands in the 60–90% Solid range at standard 25% down and 7.5% rate assumptions.</p>
                  <div class="space-y-1 text-xs text-blue-800">
                    <div class="flex justify-between"><span>Purchase Price:</span><span class="font-bold">$340,000</span></div>
                    <div class="flex justify-between"><span>Monthly Rent (Yr 1):</span><span class="font-bold">$2,750/mo</span></div>
                    <div class="flex justify-between"><span>Annual Gross Rent:</span><span class="font-bold">$33,000</span></div>
                    <div class="flex justify-between"><span>Vacancy (7%):</span><span class="font-bold">−$2,310</span></div>
                    <div class="flex justify-between"><span>EGI:</span><span class="font-bold">$30,690</span></div>
                    <div class="flex justify-between"><span>Operating Expenses (35%):</span><span class="font-bold">−$10,742</span></div>
                    <div class="flex justify-between border-t border-blue-200 pt-1"><span class="font-bold">Year 1 NOI:</span><span class="font-bold">$19,948</span></div>
                    <div class="flex justify-between"><span>Loan ($255K, 7.5%, 30yr):</span><span class="font-bold">$21,384/yr</span></div>
                    <div class="flex justify-between"><span>Year 1 Cash Flow:</span><span class="font-bold">−$1,436</span></div>
                    <div class="flex justify-between border-t border-blue-200 pt-1"><span>Total Cash Invested:</span><span class="font-bold">$95,200</span></div>
                    <div class="flex justify-between"><span>Year 10 NOI (3% growth):</span><span class="font-bold">$26,021</span></div>
                    <div class="flex justify-between"><span>Cumulative CF (10yr):</span><span class="font-bold">$14,723</span></div>
                    <div class="flex justify-between"><span>Sale Price ($26,021÷6.5%):</span><span class="font-bold">$400,323</span></div>
                    <div class="flex justify-between"><span>Loan Balance at Yr 10:</span><span class="font-bold">−$221,315</span></div>
                    <div class="flex justify-between"><span>Sale Costs (6%):</span><span class="font-bold">−$24,019</span></div>
                    <div class="flex justify-between"><span>Net Sale Proceeds:</span><span class="font-bold">$154,989</span></div>
                    <div class="flex justify-between border-t border-blue-300 pt-1 font-bold"><span>Total Profit:</span><span>$74,512</span></div>
                    <div class="flex justify-between font-bold text-blue-900"><span>Total Return:</span><span>78.3% (Solid ✓)</span></div>
                    <div class="flex justify-between font-bold text-blue-900"><span>IRR:</span><span>~7.8%</span></div>
                  </div>
                  <p class="text-xs text-blue-600 mt-3 italic">Result: Solid tier (60–99%). Year 1 cash flow is thin (−$1,436) due to 7.5% rate, but improves as rent grows while debt service stays flat. By Year 6, cash flow turns positive. Total Return is primarily driven by the exit sale, consistent with 2026 high-rate environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ═══ WHAT IS TOTAL RETURN ═══ -->
        <div id="what-is-total-return" class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What Is Rental Property Total Return? (Multi-Year Analysis Explained)</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Total Return % is the bottom-line answer to "how much money will I make on this rental deal?" It measures cumulative gain on the cash you invested, across the entire hold period. The formula is: <strong>Total Return % = (Cumulative Cash Flow + Net Sale Proceeds − Total Cash Invested) ÷ Total Cash Invested × 100.</strong> Unlike single-year metrics, Total Return captures all four sources of rental real estate return: operating cash flow from rent, principal paydown as the mortgage amortizes, property appreciation (via exit sale price), and any reinvested gains. A deal with 80% Total Return over 10 years doubled the investor's money — with net gain of 80 cents for every dollar invested.
          </p>
          <p class="text-gray-700 leading-relaxed">
            To understand why multi-year analysis is essential, consider two identical properties — same Year 1 cash flow, same cap rate, same market. One is held 5 years, the other 15 years. The 5-year hold might produce 40% Total Return as appreciation and paydown are still accumulating. The 15-year hold could produce 140% as compounding appreciation, 15 years of increasing cash flow (rent grows while debt service stays flat), and significant principal paydown all stack up. Single-year metrics like Cap Rate or Cash-on-Cash give no visibility into this time-dimension. That's why every serious buy-and-hold investor needs a multi-year Total Return projection — and why the Rental Property Calculator is the flagship tool in the RealCalc suite.
          </p>
        </div>

        <!-- ═══ RESULT MEANING ═══ -->
        <div id="result-meaning" class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">What Your Total Return Result Means</h2>
          <p class="text-gray-500 text-sm mb-6">Your Total Return tells you the bottom-line multi-year gain on the cash you invested. Here's how to interpret each range for 2026 US 10-year holds.</p>
          <div class="space-y-4">
            <!-- Exceptional -->
            <div class="flex gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <div class="flex-shrink-0 mt-0.5">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#059669;">EXCEPTIONAL</span>
              </div>
              <div>
                <p class="font-bold text-sm text-emerald-800">≥ 150% — Top-Quartile Outcome</p>
                <p class="text-sm text-emerald-700 mt-1 leading-relaxed">These returns require forcing appreciation through renovation, executing a BRRRR with cash-out refinance, or acquiring in exceptionally high-growth submarkets like Austin 2018–2022 or Phoenix 2020–2023. On stabilized deals at 25% down and 7.5% rate in 2026, achieving 150%+ Total Return over 10 years is rare — it typically means either below-market purchase, above-market rent growth, or significant value-add execution. IRR typically 15%+. If your result is 150%+ on standard inputs, re-verify your rent growth and exit cap assumptions.</p>
              </div>
            </div>
            <!-- Strong -->
            <div class="flex gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
              <div class="flex-shrink-0 mt-0.5">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#10B981;">STRONG</span>
              </div>
              <div>
                <p class="font-bold text-sm text-green-800">100–149% — Above-Market Return</p>
                <p class="text-sm text-green-700 mt-1 leading-relaxed">Strong outcomes for 2026 10-year holds. Typical for disciplined buying in high-growth Sun Belt markets — Atlanta, Charlotte, Tampa, Raleigh — with 3–4% annual rent growth and favorable entry cap rates. IRR 10–14%. At this level, the deal roughly doubles investor capital over 10 years. Strong returns in 2026 usually require either excellent market selection or better-than-average deal terms, given the elevated rate environment. If your deal hits Strong tier, it's performing well above the broad equity market baseline of ~50–70% over 10 years after inflation.</p>
              </div>
            </div>
            <!-- Solid -->
            <div class="flex gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
              <div class="flex-shrink-0 mt-0.5">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold" style="background:#F59E0B; color:#1e3a5f;">SOLID</span>
              </div>
              <div>
                <p class="font-bold text-sm text-amber-800">60–99% — Market-Average Return</p>
                <p class="text-sm text-amber-700 mt-1 leading-relaxed">The realistic 2026 target for disciplined 10-year hold at 25% down and 7.5% rate. Most stabilized deals in secondary markets — Columbus, Indianapolis, Kansas City, Memphis — land in this range with 2–3% rent growth and 6–6.5% exit cap rates. IRR 6–10%. Beats passive investing in most environments but not dramatically. Year 1 cash flow is often thin or negative, but improves significantly by Years 5–7 as rent grows while debt service stays flat. A Solid result justifies the deal for buy-and-hold investors willing to weather the early thin-cash-flow years.</p>
              </div>
            </div>
            <!-- Weak -->
            <div class="flex gap-4 p-4 rounded-xl bg-orange-50 border border-orange-200">
              <div class="flex-shrink-0 mt-0.5">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#F97316;">WEAK</span>
              </div>
              <div>
                <p class="font-bold text-sm text-orange-800">30–59% — Below-Market Return</p>
                <p class="text-sm text-orange-700 mt-1 leading-relaxed">Below-market for a standard 10-year hold. Acceptable only if the investor has a strong appreciation thesis for a specific high-barrier submarket (coastal California, NYC outer boroughs) where capital gains are the primary story and cash flow is deliberately sacrificed. IRR 3–6%. Compare against broad equities at ~50–70% over 10 years (real return) — real estate at Weak tier may not justify the illiquidity premium and active management burden. Before accepting a Weak result, investigate whether the exit cap assumption or rent growth inputs are conservative enough.</p>
              </div>
            </div>
            <!-- Critical + Loss -->
            <div class="flex gap-4 p-4 rounded-xl bg-red-50 border border-red-200">
              <div class="flex-shrink-0 mt-0.5">
                <div class="space-y-1">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-red-600 block">CRITICAL</span>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-white block" style="background:#7F1D1D;">LOSS</span>
                </div>
              </div>
              <div>
                <p class="font-bold text-sm text-red-800">0–29% Critical / Below 0% Loss — Red Flag</p>
                <p class="text-sm text-red-700 mt-1 leading-relaxed">Critical (0–29%) means barely positive — opportunity cost almost certainly exceeds actual return. Loss (below 0%) means negative total outcome: the investor loses money over the hold period. Both tiers are red flags requiring immediate deal re-examination. Critical and Loss results typically arise from: over-leverage (too much debt), poor market selection (declining rents or high exit cap rates), or simply overpaying for the asset. Don't confuse Loss tier with "negative leverage" — negative leverage means the interest rate exceeds the cap rate, which can still produce positive Total Return if appreciation is strong. Loss tier means total dollars out exceeds total dollars in. Required response: reduce leverage, negotiate price, extend hold period, or walk away.</p>
              </div>
            </div>
          </div>
          <!-- RIS Context Block -->
          <div class="p-4 rounded-xl border border-gray-200 bg-gray-50 mt-6">
            <p class="text-sm font-semibold text-gray-800 mb-1">Why Total Return varies so much by hold period in 2026</p>
            <p class="text-sm text-gray-600 leading-relaxed">Hold period dramatically shifts Total Return because appreciation and principal paydown compound over time. The same deal at 5 years might show 30–40% Total Return while at 15 years it produces 120–140% — not because the deal improved, but because compounding had time to work. In the 2026 rate environment, Year 1 cash flow is typically thin or negative due to 7.5–8% rates on 25% down purchases. The Total Return story gets much better over time as rent grows while debt service stays flat. A deal that barely breaks even in Year 1 can still generate strong 10-year Total Return if the market appreciates and rents grow at 3% per year. This is precisely why the multi-year view matters — and why investors who only screen by Year 1 cash flow systematically miss strong long-term plays.</p>
          </div>
        </div>

        <!-- ═══ BENCHMARKS ═══ -->
        <div id="benchmarks" class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Rental Property Total Return Benchmarks (2026, 10-Year Hold)</h2>
          <p class="text-gray-500 text-sm mb-6">Typical 2026 Total Return outcomes at standard 25% down, 7.5% rate, 30-year loan, and 10-year hold. Underwriting estimates calibrated to 2026 — not market-reported Total Return statistics. Always verify with current local comps and specific deal underwriting.</p>
          <h3 class="font-bold text-gray-800 mb-3">By Property Type</h3>
          <div class="overflow-x-auto mb-8 rounded-xl border border-gray-100">
            <table class="w-full text-sm">
              <thead>
                <tr style="background:#f0f4f8;">
                  <th class="text-left px-5 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Property Type</th>
                  <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Weak Markets</th>
                  <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Standard Markets</th>
                  <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Strong Markets</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">
                <tr><td class="px-5 py-3 font-semibold text-gray-800">Single-Family Rental (SFR)</td><td class="px-4 py-3 text-center text-amber-600 font-semibold">30–60%</td><td class="px-4 py-3 text-center text-blue-600 font-semibold">60–90%</td><td class="px-4 py-3 text-center text-green-600 font-semibold">90–130%</td></tr>
                <tr class="bg-gray-50/40"><td class="px-5 py-3 font-semibold text-gray-800">Small Multifamily (2–4 units)</td><td class="px-4 py-3 text-center text-amber-600 font-semibold">40–70%</td><td class="px-4 py-3 text-center text-blue-600 font-semibold">70–110%</td><td class="px-4 py-3 text-center text-green-600 font-semibold">110–150%</td></tr>
                <tr><td class="px-5 py-3 font-semibold text-gray-800">Large Multifamily (5+ units)</td><td class="px-4 py-3 text-center text-amber-600 font-semibold">50–80%</td><td class="px-4 py-3 text-center text-blue-600 font-semibold">80–120%</td><td class="px-4 py-3 text-center text-green-600 font-semibold">120–160%</td></tr>
                <tr class="bg-gray-50/40"><td class="px-5 py-3 font-semibold text-gray-800">Condo (rental)</td><td class="px-4 py-3 text-center text-amber-600 font-semibold">20–50%</td><td class="px-4 py-3 text-center text-blue-600 font-semibold">50–80%</td><td class="px-4 py-3 text-center text-green-600 font-semibold">80–110%</td></tr>
                <tr><td class="px-5 py-3 font-semibold text-gray-800">Commercial (small)</td><td class="px-4 py-3 text-center text-amber-600 font-semibold">40–80%</td><td class="px-4 py-3 text-center text-blue-600 font-semibold">80–120%</td><td class="px-4 py-3 text-center text-green-600 font-semibold">120–180%</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="font-bold text-gray-800 mb-3">By State — Typical Total Return (10-year hold, residential)</h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">California (CA)</p>
              <p class="text-2xl font-extrabold text-amber-600 mb-0.5">50–80%</p>
              <p class="text-xs text-blue-600 font-semibold mb-1">IRR: 5–8%</p>
              <p class="text-xs text-gray-500">Appreciation-driven. Low effective property tax (~0.8% via Prop 13) keeps expenses manageable, but high price-to-rent ratios compress Year 1 cash flow below zero on most financed deals. Most returns come from appreciation rather than income.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Texas (TX)</p>
              <p class="text-2xl font-extrabold text-green-600 mb-0.5">80–120%</p>
              <p class="text-xs text-blue-600 font-semibold mb-1">IRR: 8–11%</p>
              <p class="text-xs text-gray-500">Balanced cash flow + appreciation. No state income tax and no rent control support investor economics. However, high property taxes (2–2.5% effective) and hail/wind insurance costs partially offset strong rent-to-price ratios in DFW and Houston.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Florida (FL)</p>
              <p class="text-2xl font-extrabold text-green-600 mb-0.5">60–100%</p>
              <p class="text-xs text-blue-600 font-semibold mb-1">IRR: 6–10%</p>
              <p class="text-xs text-gray-500">Balanced with insurance drag. Strong in-migration from Northeast supports rent growth and appreciation in Tampa, Orlando, and Jacksonville. Coastal county insurance costs have risen 20–40% since 2022, compressing cash flow in Miami-Dade and Palm Beach.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">New York (NY)</p>
              <p class="text-2xl font-extrabold text-amber-600 mb-0.5">40–70%</p>
              <p class="text-xs text-blue-600 font-semibold mb-1">IRR: 4–7%</p>
              <p class="text-xs text-gray-500">Appreciation-driven outside NYC regulation zones. NYC five-borough rent stabilization limits rent growth on pre-1974 buildings, suppressing NOI growth and Total Return. Upstate markets (Buffalo, Syracuse) show higher cash flow component but more limited appreciation.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Arizona (AZ)</p>
              <p class="text-2xl font-extrabold text-green-600 mb-0.5">80–120%</p>
              <p class="text-xs text-blue-600 font-semibold mb-1">IRR: 8–11%</p>
              <p class="text-xs text-gray-500">Balanced leaning appreciation. Landlord-friendly state with no rent control and favorable eviction laws. Phoenix remains a top Sun Belt growth market; Tucson offers better cash flow but lower appreciation. Moderate property taxes (~0.6% effective) help returns.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Georgia (GA)</p>
              <p class="text-2xl font-extrabold text-green-600 mb-0.5">90–130%</p>
              <p class="text-xs text-blue-600 font-semibold mb-1">IRR: 9–12%</p>
              <p class="text-xs text-gray-500">Cash flow-driven. Atlanta metro offers strong rent-to-price ratios relative to Sun Belt peers, producing a higher cash flow component in 10-year returns. No statewide rent control, strong job growth from tech and film industries, and moderate property taxes (~1% effective) all support returns.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Colorado (CO)</p>
              <p class="text-2xl font-extrabold text-amber-600 mb-0.5">60–100%</p>
              <p class="text-xs text-blue-600 font-semibold mb-1">IRR: 6–10%</p>
              <p class="text-xs text-gray-500">Appreciation-driven. Denver's constrained housing supply and tech economy support strong appreciation but high price-to-rent ratios limit Year 1 cash flow. Denver has city-level rent-increase rules for some properties. Colorado Springs offers more favorable cash flow dynamics.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Washington (WA)</p>
              <p class="text-2xl font-extrabold text-amber-600 mb-0.5">60–100%</p>
              <p class="text-xs text-blue-600 font-semibold mb-1">IRR: 6–10%</p>
              <p class="text-xs text-gray-500">Appreciation-driven. Seattle's tech economy drives high incomes and rents but also high prices, compressing initial yields. Washington State has tenant protection rules that can slow evictions and limit rent increase flexibility, adding management risk relative to landlord-friendly states.</p>
            </div>
          </div>
          <!-- State table -->
          <div class="overflow-x-auto rounded-xl border border-gray-100">
            <table class="w-full text-sm">
              <thead>
                <tr style="background:#f0f4f8;">
                  <th class="text-left px-5 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">State</th>
                  <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Total Return</th>
                  <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">IRR</th>
                  <th class="text-left px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Primary Driver</th>
                  <th class="text-left px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Key Notes</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">
                <tr><td class="px-5 py-2.5 font-semibold text-gray-800">California</td><td class="px-4 py-2.5 text-center text-amber-600 font-semibold">50–80%</td><td class="px-4 py-2.5 text-center text-gray-700">5–8%</td><td class="px-4 py-2.5 text-gray-600">Appreciation</td><td class="px-4 py-2.5 text-gray-600 text-xs">Low property tax (Prop 13) + high price-to-rent compression makes most returns appreciation-dependent. Nearly all financed deals are cash-flow negative in Year 1.</td></tr>
                <tr class="bg-gray-50/40"><td class="px-5 py-2.5 font-semibold text-gray-800">Texas</td><td class="px-4 py-2.5 text-center text-green-600 font-semibold">80–120%</td><td class="px-4 py-2.5 text-center text-gray-700">8–11%</td><td class="px-4 py-2.5 text-gray-600">Balanced</td><td class="px-4 py-2.5 text-gray-600 text-xs">No rent control, strong job growth. High 2–2.5% property taxes and hail insurance partially offset favorable rent-to-price ratios. Dallas and San Antonio outperform Austin on cash flow.</td></tr>
                <tr><td class="px-5 py-2.5 font-semibold text-gray-800">Florida</td><td class="px-4 py-2.5 text-center text-green-600 font-semibold">60–100%</td><td class="px-4 py-2.5 text-center text-gray-700">6–10%</td><td class="px-4 py-2.5 text-gray-600">Balanced</td><td class="px-4 py-2.5 text-gray-600 text-xs">Strong migration supports rents but coastal insurance costs (up 20–40% since 2022) compress cash flow in Miami-Dade. Tampa, Orlando, and Jacksonville submarkets outperform coastal.</td></tr>
                <tr class="bg-gray-50/40"><td class="px-5 py-2.5 font-semibold text-gray-800">New York</td><td class="px-4 py-2.5 text-center text-amber-600 font-semibold">40–70%</td><td class="px-4 py-2.5 text-center text-gray-700">4–7%</td><td class="px-4 py-2.5 text-gray-600">Appreciation (outside NYC)</td><td class="px-4 py-2.5 text-gray-600 text-xs">NYC rent stabilization limits NOI growth on regulated units. Deep institutional liquidity at exit. Upstate markets offer higher CoC but limited appreciation.</td></tr>
                <tr><td class="px-5 py-2.5 font-semibold text-gray-800">Arizona</td><td class="px-4 py-2.5 text-center text-green-600 font-semibold">80–120%</td><td class="px-4 py-2.5 text-center text-gray-700">8–11%</td><td class="px-4 py-2.5 text-gray-600">Balanced</td><td class="px-4 py-2.5 text-gray-600 text-xs">Landlord-friendly, low effective property tax (~0.6%), no rent control. Phoenix remains top Sun Belt growth market with strong rent-to-price relative to California.</td></tr>
                <tr class="bg-gray-50/40"><td class="px-5 py-2.5 font-semibold text-gray-800">Georgia</td><td class="px-4 py-2.5 text-center text-green-600 font-semibold">90–130%</td><td class="px-4 py-2.5 text-center text-gray-700">9–12%</td><td class="px-4 py-2.5 text-gray-600">Cash flow-driven</td><td class="px-4 py-2.5 text-gray-600 text-xs">Atlanta offers superior rent-to-price vs. Sun Belt peers. No statewide rent control, strong tech and film economy job growth. One of the few markets where 100%+ 10-year return is achievable without value-add.</td></tr>
                <tr><td class="px-5 py-2.5 font-semibold text-gray-800">Colorado</td><td class="px-4 py-2.5 text-center text-amber-600 font-semibold">60–100%</td><td class="px-4 py-2.5 text-center text-gray-700">6–10%</td><td class="px-4 py-2.5 text-gray-600">Appreciation</td><td class="px-4 py-2.5 text-gray-600 text-xs">Denver has city-level rent rules for some properties. Constrained supply supports appreciation but entry prices are high. Colorado Springs offers better cash flow dynamics than Denver metro.</td></tr>
                <tr class="bg-gray-50/40"><td class="px-5 py-2.5 font-semibold text-gray-800">Washington</td><td class="px-4 py-2.5 text-center text-amber-600 font-semibold">60–100%</td><td class="px-4 py-2.5 text-center text-gray-700">6–10%</td><td class="px-4 py-2.5 text-gray-600">Appreciation</td><td class="px-4 py-2.5 text-gray-600 text-xs">Seattle tech economy drives high rents but higher prices compress yields. State tenant protections add management complexity. Tacoma offers better entry points than core Seattle.</td></tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-gray-400 mt-2 italic">All benchmark ranges assume 25% down payment, 7.5% interest rate, 30-year loan term, and 10-year hold period. Individual deal results will vary based on specific market conditions, property condition, financing terms, and execution quality.</p>
          <p class="text-xs text-gray-400 mt-3">These Total Return ranges are synthesized from NAR housing data, CoStar multifamily reports, Roofstock market analysis, and 2026 rate environment modeling. Total Return is not directly reported as a market statistic — these are derived underwriting estimates. Always verify with current local comps and specific deal underwriting. Not market-reported figures.</p>
        </div>

        <!-- ═══ STRATEGY ═══ -->
        <div id="strategy" class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">When Rental Property Total Return Matters Most</h2>
          <p class="text-gray-500 text-sm mb-6">How multi-year Total Return fits into each major US rental investment strategy</p>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
              <div class="flex items-center gap-2 mb-3"><span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#1e3a5f;">Buy &amp; Hold</span></div>
              <p class="text-gray-700 text-sm leading-relaxed mb-3">Total Return is THE metric for buy-and-hold investors. Unlike Cap Rate or Cash-on-Cash which are single-year snapshots, Total Return captures the full value proposition: operating cash flow + appreciation + principal paydown + exit gains over the complete hold period. For 2026 10-year holds at 25% down, typical target is 80–120% (IRR 8–12%). Use this calculator as the primary screening tool before making an offer — if the projected Total Return doesn't justify the illiquidity and management burden, move on.</p>
              <p class="text-gray-600 text-sm leading-relaxed">Compare your calculated Total Return against broad equities (~150–200% over 10 years historically, ~9–11% annualized). Real estate should beat or closely match passive investing — otherwise you're accepting active management burden for below-market returns. A good buy-and-hold deal in 2026 needs a compelling story beyond just "it cash flows in Year 1."</p>
            </div>
            <div class="p-5 rounded-xl border border-blue-100 bg-blue-50">
              <div class="flex items-center gap-2 mb-3"><span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-blue-600">BRRRR</span></div>
              <p class="text-gray-700 text-sm leading-relaxed mb-3">BRRRR (Buy-Renovate-Rent-Refinance-Repeat) is designed to pull capital out at refinance, leaving minimal cash invested. Total Return in BRRRR can be mathematically infinite if the refinance returns all invested capital — because any positive return on $0 cash invested is infinite. Use this calculator with the post-refinance cash invested figure (down payment + closing + rehab minus cash-out amount) to get the true BRRRR Total Return.</p>
              <p class="text-gray-600 text-sm leading-relaxed">For BRRRR analysis, run the calculator twice: pre-refi (acquisition through stabilization, measure profitability before refinance) and post-refi (stabilized with minimal cash invested, measure ongoing return). The post-refi Total Return is the headline story for BRRRR — it's why BRRRR operators often show IRRs of 25%+ even in challenging markets.</p>
            </div>
            <div class="p-5 rounded-xl border border-amber-100 bg-amber-50">
              <div class="flex items-center gap-2 mb-3"><span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#f59e0b; color:#1e3a5f;">Value-Add</span></div>
              <p class="text-gray-700 text-sm leading-relaxed mb-3">Value-add deals have weak Year 1–2 Total Return during renovation disruption but strong Years 3–10 returns once stabilized. Use a 5-year hold comparison to evaluate the stabilization phase separately, then model 10+ year for the full value-add benefit. The most common mistake: projecting a "stabilized" NOI from Day 1 rather than modeling the actual renovation and lease-up timeline in the early years.</p>
              <p class="text-gray-600 text-sm leading-relaxed">Critical: ensure cash reserves cover pre-stabilization burn. A "good" stabilized Total Return doesn't matter if the deal runs out of cash during renovation. Model the renovation period as negative cash flow in Years 1–2 and use conservative stabilized rent assumptions — don't project the maximum rent you hope to achieve.</p>
            </div>
            <div class="p-5 rounded-xl border border-purple-100 bg-purple-50">
              <div class="flex items-center gap-2 mb-3"><span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-purple-600">Short-Term Rental</span></div>
              <p class="text-gray-700 text-sm leading-relaxed mb-3">STR (Airbnb, VRBO) often shows higher gross rent but much higher expenses, vacancy volatility, and regulatory risk. Use conservative 20%+ vacancy for STR in this calculator — actual vacancy varies 15–40% seasonally. Total expenses for STR (cleaning, furnishing amortization, platform fees, higher insurance) typically run 55–70% of gross versus 35–50% for long-term rentals.</p>
              <p class="text-gray-600 text-sm leading-relaxed">STR regulations shifted materially 2023–2026 in many US metros — permit caps, tax changes, and outright bans in some districts. Multi-year Total Return projections for STR should include regulatory risk discount. Consider modeling STR at 10–15% lower Total Return than comparable long-term rental to account for the probability of forced conversion to long-term tenancy during the hold period.</p>
            </div>
            <div class="p-5 rounded-xl border border-gray-100 bg-gray-50 md:col-span-2">
              <div class="flex items-center gap-2 mb-3"><span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#1e3a5f;">Portfolio Comparison</span></div>
              <p class="text-sm font-semibold text-gray-700 mb-2">Using Total Return to Rank Portfolio Acquisitions</p>
              <p class="text-gray-600 text-sm leading-relaxed mb-2">When evaluating 3–5 potential acquisitions simultaneously, always run each through this calculator at the SAME hold period, SAME LTV, SAME exit method. This normalizes for input variations and shows which deal actually produces the best Total Return under identical assumptions. A 1.30x DSCR deal with 110% Total Return beats a 1.50x DSCR deal with 70% Total Return for most investors — the higher DSCR doesn't mean the deal is better if the exit fundamentals are weaker. Total Return is the tiebreaker that single-year metrics can't provide.</p>
            </div>
          </div>
        </div>

        <!-- ═══ APPLICATIONS ═══ -->
        <div id="applications" class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Applications of Rental Property Total Return Analysis</h2>
          <p class="text-gray-500 text-sm mb-6">Six concrete ways investors, agents, and syndication sponsors use multi-year Total Return in 2026 US real estate</p>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-semibold text-sm text-gray-800 mb-2">Deal Screening for Buy-and-Hold</p>
              <p class="text-sm text-gray-600 leading-relaxed">Run every prospective acquisition through the calculator before scheduling a showing. Set a minimum Total Return threshold (e.g., 70% over 10 years) and only pursue deals that clear the bar. This eliminates 80% of listings immediately and focuses due diligence effort on the highest-probability deals.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-semibold text-sm text-gray-800 mb-2">Comparing Hold Period Strategies</p>
              <p class="text-sm text-gray-600 leading-relaxed">Use the hold period sensitivity table to compare 5 vs 10 vs 15 year strategies on the same property. A deal that shows 45% at 5 years might show 95% at 10 years and 160% at 15 years — the hold period decision is often more impactful than the deal selection itself for long-term wealth building.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-semibold text-sm text-gray-800 mb-2">Appreciation vs Cash Flow Markets</p>
              <p class="text-sm text-gray-600 leading-relaxed">Run a California deal (5% CoC + 5% annual appreciation) vs a Georgia deal (8% CoC + 2.5% appreciation) through the calculator at identical hold periods. The 10-year comparison often reveals the appreciation-heavy deal wins on Total Return despite lower Year 1 cash flow — counterintuitive for investors trained to screen by CoC alone.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-semibold text-sm text-gray-800 mb-2">Portfolio Rebalancing Analysis</p>
              <p class="text-sm text-gray-600 leading-relaxed">Run existing holdings through the calculator using current market values as the "purchase price" and projected exit cap rates. Identify which properties in the portfolio have declining forward Total Return (high price, slow rent growth) versus those still offering strong upside — this drives sell/hold/1031 exchange decisions.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-semibold text-sm text-gray-800 mb-2">Syndication Pro Forma</p>
              <p class="text-sm text-gray-600 leading-relaxed">Syndication sponsors use Total Return and IRR as primary investor-facing metrics in PPMs (Private Placement Memoranda). Target investor IRR of 12–18% net of fees for value-add deals; 8–12% for core-plus strategies. This calculator's IRR output provides the raw number that sponsors then adjust for their waterfall structure and fee load.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-semibold text-sm text-gray-800 mb-2">Refinance Timing Decisions</p>
              <p class="text-sm text-gray-600 leading-relaxed">Use the calculator to model refinance scenarios by setting "current equity" as a new cash investment. Compare holding with existing financing vs refinancing into a new structure. If a 2% rate drop adds 20+ percentage points to Total Return over a 7-year remaining hold, the refinance math often pencils even with closing costs factored in.</p>
            </div>
          </div>
        </div>

        <!-- ═══ INDUSTRY STANDARDS ═══ -->
        <div id="industry-standards" class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Industry Standards &amp; Professional Benchmarks</h2>
          <p class="text-gray-500 text-sm mb-6">How professional investors and syndication sponsors use Total Return and IRR in 2026</p>
          <div class="space-y-6">
            <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
              <h3 class="font-bold text-gray-800 mb-3">Syndication Sponsor Benchmarks</h3>
              <ul class="space-y-2">
                <li class="flex gap-3 text-sm text-gray-600"><span class="font-bold text-gray-400 flex-shrink-0 mt-0.5">→</span>Preferred return (pref) typically 6–8% annual — first cash flow to investors before sponsor takes any carried interest</li>
                <li class="flex gap-3 text-sm text-gray-600"><span class="font-bold text-gray-400 flex-shrink-0 mt-0.5">→</span>Target investor IRR 12–18% net of fees for value-add deals with 5–7 year hold periods</li>
                <li class="flex gap-3 text-sm text-gray-600"><span class="font-bold text-gray-400 flex-shrink-0 mt-0.5">→</span>Target equity multiple 1.8×–2.5× of invested capital over 5–7 year typical hold (equivalent to 60–150% Total Return)</li>
                <li class="flex gap-3 text-sm text-gray-600"><span class="font-bold text-gray-400 flex-shrink-0 mt-0.5">→</span>Sponsor splits: 70/30 or 80/20 above pref is the common 2026 waterfall structure</li>
              </ul>
            </div>
            <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
              <h3 class="font-bold text-gray-800 mb-3">Institutional Investor Benchmarks</h3>
              <p class="text-sm text-gray-600 mb-3 leading-relaxed">Institutional buyers (REITs, pension funds, family offices) operate with different return targets than retail investors due to lower cost of capital and diversification benefits. Their benchmarks are useful as a reference for how professionally managed capital evaluates deals.</p>
              <ul class="space-y-2">
                <li class="flex gap-3 text-sm text-gray-600"><span class="font-bold text-gray-400 flex-shrink-0 mt-0.5">→</span>Core institutional: 6–8% IRR target on lower-risk stabilized assets with long-term tenancy</li>
                <li class="flex gap-3 text-sm text-gray-600"><span class="font-bold text-gray-400 flex-shrink-0 mt-0.5">→</span>Value-add institutional: 12–15% IRR target with 5–7 year hold, major renovation component</li>
                <li class="flex gap-3 text-sm text-gray-600"><span class="font-bold text-gray-400 flex-shrink-0 mt-0.5">→</span>Opportunistic institutional: 15%+ IRR target for development, distressed, or repositioning deals</li>
              </ul>
            </div>
            <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
              <h3 class="font-bold text-gray-800 mb-3">Retail Investor Rule-of-Thumb Benchmarks</h3>
              <ul class="space-y-2">
                <li class="flex gap-3 text-sm text-gray-600"><span class="font-bold text-gray-400 flex-shrink-0 mt-0.5">→</span>BiggerPockets community typical target: 100%+ Total Return over 10 years — "doubling your money" as the widely-shared benchmark</li>
                <li class="flex gap-3 text-sm text-gray-600"><span class="font-bold text-gray-400 flex-shrink-0 mt-0.5">→</span>IRR "hurdle rate" of 10–12% common for retail investor target — anything below this suggests passive investing may be preferable</li>
                <li class="flex gap-3 text-sm text-gray-600"><span class="font-bold text-gray-400 flex-shrink-0 mt-0.5">→</span>Total Return multiple of 2× over 10 years roughly equals 7% IRR + appreciation — a good rule-of-thumb sanity check</li>
                <li class="flex gap-3 text-sm text-gray-600"><span class="font-bold text-gray-400 flex-shrink-0 mt-0.5">→</span>Compare to broad equities (~150–200% Total Return over 10 years historically, ~9–11% annualized) — real estate without leverage should match; with 25% down leverage should beat by 2–5% IRR</li>
                <li class="flex gap-3 text-sm text-gray-600"><span class="font-bold text-gray-400 flex-shrink-0 mt-0.5">→</span>Real estate should beat passive investing by at least 2–3 percentage points of IRR to justify the active management burden and illiquidity premium</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- ═══ LIMITATIONS ═══ -->
        <div id="limitations" class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Limitations of Total Return Analysis</h2>
          <p class="text-gray-500 text-sm mb-6">Total Return is the most complete rental metric but has important blind spots every investor should understand.</p>
          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-semibold text-sm text-gray-800 mb-2">Assumption-Dependent</p>
              <p class="text-sm text-gray-600 leading-relaxed">Total Return depends heavily on rent growth, expense growth, appreciation, and exit cap rate assumptions — all of which are projections, not certainties. A 0.5% difference in any of these inputs can shift 10-year Total Return by 8–15 percentage points. Always run the sensitivity tables included in this calculator to understand your biggest risk factors and the range of plausible outcomes.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-semibold text-sm text-gray-800 mb-2">Ignores Taxes (Before-Tax Analysis)</p>
              <p class="text-sm text-gray-600 leading-relaxed">This calculator is before-tax only. Actual after-tax returns depend on investor's tax bracket, state of residence, depreciation handling, and 1031 exchange strategy. After-tax Total Return is typically 15–30% lower than before-tax for high-bracket investors in high-tax states. The federal depreciation deduction can partially offset this, but the net effect varies too much by investor situation for a general tool to model accurately.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-semibold text-sm text-gray-800 mb-2">Exit Method Matters — Must Compare Both</p>
              <p class="text-sm text-gray-600 leading-relaxed">Exit via Cap Rate and Exit via Appreciation produce materially different Total Return for the same deal. Example: Same Atlanta deal exits at 78% Total Return via 6.5% exit cap rate. Run via 3% annual appreciation instead: $340,000 × (1.03)^10 = $456,900 sale price → Net Proceeds changes significantly → Total Return shifts to approximately 72%. The 6-point spread reflects whether your exit cap assumption is more or less conservative than raw appreciation. Always run both methods and understand the spread — it reveals the sensitivity of your return to exit methodology.</p>
            </div>
            <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
              <p class="font-semibold text-sm text-gray-800 mb-2">No CapEx Reserve Modeling</p>
              <p class="text-sm text-gray-600 leading-relaxed">This calculator uses total operating expenses but doesn't explicitly model major CapEx events (roof replacement at Year 12, HVAC system at Year 15, full rehab at Year 20). For accurate long-hold analysis, increase your expense growth rate 0.5–1% above CPI to embed CapEx reserves in the projection. A property held 20+ years will almost certainly require $30,000–$80,000 in major capital expenditures that dramatically change the actual Total Return.</p>
            </div>
          </div>
          <h3 class="font-bold text-gray-800 mb-3">When Not to Use Total Return as the Primary Metric</h3>
          <ul class="space-y-2">
            <li class="flex gap-3 text-sm text-gray-600 p-3 rounded-xl bg-gray-50 border border-gray-100"><span class="font-bold text-gray-400 flex-shrink-0">✕</span><span><strong>Development or land deals:</strong> no operating history or rent — use development proforma tools with construction costs, absorption timeline, and lease-up projections instead.</span></li>
            <li class="flex gap-3 text-sm text-gray-600 p-3 rounded-xl bg-gray-50 border border-gray-100"><span class="font-bold text-gray-400 flex-shrink-0">✕</span><span><strong>Short-term flips under 2 years:</strong> use the Fix and Flip Calculator for simple profit math — Total Return over a 6–18 month hold loses the multi-year compounding benefit that makes this metric meaningful.</span></li>
            <li class="flex gap-3 text-sm text-gray-600 p-3 rounded-xl bg-gray-50 border border-gray-100"><span class="font-bold text-gray-400 flex-shrink-0">✕</span><span><strong>Single-year lender qualification:</strong> use the DSCR Calculator for loan approval analysis — lenders evaluate Year 1 DSCR, not 10-year Total Return.</span></li>
            <li class="flex gap-3 text-sm text-gray-600 p-3 rounded-xl bg-gray-50 border border-gray-100"><span class="font-bold text-gray-400 flex-shrink-0">✕</span><span><strong>Pure cash flow analysis:</strong> use the Cash-on-Cash Calculator to isolate Year 1 levered yield — useful when screening for immediate income rather than long-term total gain.</span></li>
          </ul>
        </div>

        <!-- ═══ COMMON MISTAKES ═══ -->
        <div id="common-mistakes" class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Common Mistakes When Calculating Rental Property Returns</h2>
          <p class="text-gray-500 text-sm mb-6">Avoid these five errors that inflate projected returns and lead to overpaying or underpreparing for deals.</p>
          <div class="space-y-5">
            <div class="flex gap-4 p-4 rounded-xl border border-red-100 bg-red-50">
              <span class="text-red-500 font-bold text-lg flex-shrink-0 mt-0.5">1</span>
              <div>
                <p class="font-semibold text-red-800 mb-1">Using optimistic rent growth assumptions</p>
                <p class="text-sm text-red-700 leading-relaxed">2026 realistic rent growth is 2–4% in most markets. Assuming 5–6% rent growth inflates 10-year Total Return by 15–30 percentage points — making a Weak deal look Solid and a Solid deal look Exceptional. Lender underwriting uses 2–3%; retail investors should be equally conservative. If your deal only works at 5%+ rent growth, it's not a good deal — it's a speculation on rent growth materializing.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 rounded-xl border border-red-100 bg-red-50">
              <span class="text-red-500 font-bold text-lg flex-shrink-0 mt-0.5">2</span>
              <div>
                <p class="font-semibold text-red-800 mb-1">Forgetting exit cap rate expansion</p>
                <p class="text-sm text-red-700 leading-relaxed">Exit cap rate typically rises 0.5–1% above purchase cap rate over a 5–10 year hold as the property ages, market conditions normalize, and deferred maintenance accumulates. Using a flat exit cap rate equal to purchase cap overstates sale price at exit. A 6.5% purchase cap becoming 7.5% at exit on a $400,000 projected sale changes the outcome by $62,000 — easily the difference between Solid and Weak tier.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 rounded-xl border border-red-100 bg-red-50">
              <span class="text-red-500 font-bold text-lg flex-shrink-0 mt-0.5">3</span>
              <div>
                <p class="font-semibold text-red-800 mb-1">Double-counting appreciation</p>
                <p class="text-sm text-red-700 leading-relaxed">If you use Exit via Cap Rate method, don't also apply a separate appreciation rate to estimate property value. Year N NOI already reflects rent growth, and cap rate conversion produces the correct sale price from that NOI. Applying an additional appreciation multiplier on top double-counts the value growth — your exit value gets inflated by both rent growth AND price appreciation, which are already correlated. This calculator handles the toggle correctly — choose one method and trust the result.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 rounded-xl border border-red-100 bg-red-50">
              <span class="text-red-500 font-bold text-lg flex-shrink-0 mt-0.5">4</span>
              <div>
                <p class="font-semibold text-red-800 mb-1">Ignoring Year 1 cash flow in favor of exit gain only</p>
                <p class="text-sm text-red-700 leading-relaxed">A deal with negative Year 1 cash flow can still show strong 10-year Total Return because of appreciation and principal paydown — but the investor needs reserves to survive the early years. If Year 1 cash flow is −$500/month, you need at least $6,000/year in reserves just to break even on operations before accounting for vacancies, repairs, and unexpected expenses. Always check that cash reserves are sufficient for the cash-flow-negative years before relying on the total return projection.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 rounded-xl border border-red-100 bg-red-50">
              <span class="text-red-500 font-bold text-lg flex-shrink-0 mt-0.5">5</span>
              <div>
                <p class="font-semibold text-red-800 mb-1">Comparing Total Returns across different hold periods</p>
                <p class="text-sm text-red-700 leading-relaxed">60% Total Return over 5 years is dramatically stronger than 60% over 15 years — even though the number is identical. The 5-year result equals roughly 10% IRR; the 15-year result is only ~3.2% IRR. Always normalize comparisons by using the same hold period, or compare IRR instead of Total Return when evaluating deals with different planned hold durations. This calculator's sensitivity table shows the hold period effect on the same property — use it before making relative comparisons.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- ═══ FAQ ═══ -->
        <div id="faq" class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions</h2>
          <div class="space-y-4">
            <div v-for="(faq, i) in faqs" :key="i" class="border border-gray-200 rounded-xl overflow-hidden">
              <button @click="toggleFaq(i)" class="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition">
                <span class="font-semibold text-gray-800 text-sm pr-4">{{ faq.q }}</span>
                <svg class="w-4 h-4 text-gray-400 flex-shrink-0 transition-transform" :class="openFaq === i ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div v-if="openFaq === i" class="px-5 pb-4">
                <p class="text-sm text-gray-600 leading-relaxed">{{ faq.a }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- ═══ RELATED CALCULATORS ═══ -->
        <div id="related-calculators" class="px-8 py-8">
          <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Related Calculators</h2>
          <p class="text-gray-500 text-sm mb-4">Pair this deal analyzer with specialized calculators for deeper analysis of each component metric.</p>
          <p class="text-gray-500 text-sm mb-6">This calculator uses Cap Rate, NOI, Cash-on-Cash, and DSCR as internal components of the Total Return calculation. Use the dedicated calculators below when you need deeper analysis of any individual metric — for example, when verifying expense assumptions with the NOI Calculator before entering them here.</p>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <NuxtLink to="/cap-rate-calculator" class="block p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-amber-300 hover:bg-amber-50 transition group">
              <p class="font-bold text-sm mb-1 group-hover:text-amber-800" style="color: #1e3a5f;">Cap Rate Calculator</p>
              <p class="text-xs text-gray-500 group-hover:text-amber-700">Unlevered single-year yield. Use to evaluate entry pricing and compare properties.</p>
            </NuxtLink>
            <NuxtLink to="/cash-on-cash-calculator" class="block p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-amber-300 hover:bg-amber-50 transition group">
              <p class="font-bold text-sm mb-1 group-hover:text-amber-800" style="color: #1e3a5f;">Cash-on-Cash Calculator</p>
              <p class="text-xs text-gray-500 group-hover:text-amber-700">Year 1 levered return on invested cash. Isolate immediate income before multi-year projection.</p>
            </NuxtLink>
            <NuxtLink to="/noi-calculator" class="block p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-amber-300 hover:bg-amber-50 transition group">
              <p class="font-bold text-sm mb-1 group-hover:text-amber-800" style="color: #1e3a5f;">NOI Calculator</p>
              <p class="text-xs text-gray-500 group-hover:text-amber-700">Net Operating Income in detail. Verify your NOI inputs before running this multi-year projection.</p>
            </NuxtLink>
            <NuxtLink to="/dscr-calculator" class="block p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-amber-300 hover:bg-amber-50 transition group">
              <p class="font-bold text-sm mb-1 group-hover:text-amber-800" style="color: #1e3a5f;">DSCR Calculator</p>
              <p class="text-xs text-gray-500 group-hover:text-amber-700">Debt Service Coverage Ratio for lender qualification. Check if your deal meets the 1.25x threshold.</p>
            </NuxtLink>
          </div>
          <div class="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <NuxtLink to="/brrrr-calculator" class="block p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-amber-300 hover:bg-amber-50 transition group">
              <p class="font-bold text-sm mb-1 group-hover:text-amber-800" style="color: #1e3a5f;">BRRRR Calculator</p>
              <p class="text-xs text-gray-500 group-hover:text-amber-700">Model Buy-Renovate-Rent-Refinance-Repeat deals. Calculate post-refinance cash-out and infinite return scenarios.</p>
            </NuxtLink>
            <NuxtLink to="/fix-flip-calculator" class="block p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-amber-300 hover:bg-amber-50 transition group">
              <p class="font-bold text-sm mb-1 group-hover:text-amber-800" style="color: #1e3a5f;">Fix &amp; Flip Calculator</p>
              <p class="text-xs text-gray-500 group-hover:text-amber-700">Short-term profit analysis for renovation and resale deals. Separate tool from multi-year rental holds.</p>
            </NuxtLink>
            <NuxtLink to="/arv-calculator" class="block p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-amber-300 hover:bg-amber-50 transition group">
              <p class="font-bold text-sm mb-1 group-hover:text-amber-800" style="color: #1e3a5f;">ARV Calculator</p>
              <p class="text-xs text-gray-500 group-hover:text-amber-700">After Repair Value estimation. Use to set purchase ceiling on value-add and renovation deals.</p>
            </NuxtLink>
          </div>
        </div>

      </div><!-- /SEO Content container -->

    </main>

    <!-- ═══════════════════════════════════════════════
         EMAIL CAPTURE MODAL
    ═══════════════════════════════════════════════ -->
    <EmailCaptureModal
      :show="showEmailModal"
      :calculator-name="'Rental Property Calculator'"
      :primary-result="hasResult ? `${totalReturn >= 0 ? '+' : ''}${totalReturn.toFixed(1)}% Total Return` : undefined"
      title="Save Your Rental Analysis"
      subtitle="Get market benchmarks, deal templates, and calculator updates."
      cta-label="Save & Get Free Updates"
      @close="showEmailModal = false"
      @captured="onEmailCaptured"
    />

    <!-- ═══════════════════════════════════════════════
         FOOTER
    ═══════════════════════════════════════════════ -->
    <footer class="bg-white border-t border-gray-200 mt-12">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-10">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center gap-2 mb-3">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background: #1e3a5f;">
                <span class="text-white font-extrabold text-sm">RC</span>
              </div>
              <span class="font-extrabold text-lg" style="color: #1e3a5f;">RealCalc</span>
            </div>
            <p class="text-xs text-gray-500 leading-relaxed">Free real estate investment calculators for US investors. Cap Rate, NOI, Cash-on-Cash, DSCR, and more.</p>
          </div>
          <div>
            <p class="font-bold text-sm text-gray-700 mb-3">Calculators</p>
            <ul class="space-y-2 text-xs text-gray-500">
              <li><NuxtLink to="/cap-rate-calculator" class="hover:text-gray-700 transition">Cap Rate Calculator</NuxtLink></li>
              <li><NuxtLink to="/noi-calculator" class="hover:text-gray-700 transition">NOI Calculator</NuxtLink></li>
              <li><NuxtLink to="/cash-on-cash-calculator" class="hover:text-gray-700 transition">Cash-on-Cash Calculator</NuxtLink></li>
              <li><NuxtLink to="/dscr-calculator" class="hover:text-gray-700 transition">DSCR Calculator</NuxtLink></li>
            </ul>
          </div>
          <div>
            <p class="font-bold text-sm text-gray-700 mb-3">More Tools</p>
            <ul class="space-y-2 text-xs text-gray-500">
              <li><NuxtLink to="/rental-property-calculator" class="hover:text-gray-700 transition">Rental Property Calculator</NuxtLink></li>
              <li><NuxtLink to="/fix-flip-calculator" class="hover:text-gray-700 transition">Fix &amp; Flip Calculator</NuxtLink></li>
              <li><NuxtLink to="/brrrr-calculator" class="hover:text-gray-700 transition">BRRRR Calculator</NuxtLink></li>
              <li><NuxtLink to="/arv-calculator" class="hover:text-gray-700 transition">ARV Calculator</NuxtLink></li>
            </ul>
          </div>
          <div>
            <p class="font-bold text-sm text-gray-700 mb-3">Company</p>
            <ul class="space-y-2 text-xs text-gray-500">
              <li><NuxtLink to="/pricing" class="hover:text-gray-700 transition">Pricing</NuxtLink></li>
              <li><NuxtLink to="/blog" class="hover:text-gray-700 transition">Blog</NuxtLink></li>
              <li><NuxtLink to="/calculators" class="hover:text-gray-700 transition">All Calculators</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-xs text-gray-400">© 2026 RealCalc. Free real estate investment calculators for US investors.</p>
          <p class="text-xs text-gray-400">For informational purposes only. Not financial advice.</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, reactive, computed, nextTick } from 'vue'

// ─── 1. SEO HEAD ─────────────────────────────────────────────────────────────
useHead({
  title: 'Rental Property Calculator — 2026 ROI Tool | RealCalc',
  meta: [
    {
      name: 'description',
      content: 'Analyze any US rental property with multi-year Total Return, IRR, cash flow, and exit scenarios. Free rental property calculator for 2026 investors — 3 calculation modes.'
    },
    { name: 'keywords', content: 'rental property calculator, rental property investment calculator, rental property roi calculator, rental property return calculator, multi-year rental calculator, IRR calculator, rental property total return' },
    { property: 'og:title', content: 'Rental Property Calculator — Multi-Year Return & IRR | RealCalc' },
    { property: 'og:description', content: 'Project Total Return, IRR, and year-by-year cash flow for any US rental property. Free multi-year deal analyzer for buy-and-hold investors.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://realcalc.com/rental-property-calculator' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'SoftwareApplication',
            name: 'Rental Property Calculator',
            description: 'Rental property calculator for US investors. Multi-year Total Return, IRR, cash flow, and exit analysis. Free tool for buy-and-hold deal analysis 2026.',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            featureList: ['Total Return', 'IRR', 'Multi-year projection 5-30 years', 'Year-by-year cash flow', 'Equity at Exit', 'Sensitivity analysis', '3 calculation modes', '2 exit methods', 'PDF export']
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What is a good Total Return for rental property in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'For a 10-year hold at 25% down and 7.5% rate, 100–150% Total Return is Strong, 60–100% is Solid, 30–60% is Weak, below 30% is Critical, and below 0% is a Loss. Historical pre-2022 benchmarks of 150%+ are much harder to achieve in the 2026 rate environment — adjust expectations accordingly.' } },
              { '@type': 'Question', name: 'What is the difference between Total Return and IRR?', acceptedAnswer: { '@type': 'Answer', text: 'Total Return is the cumulative gain over the hold period as a percentage of invested cash. IRR is the time-weighted annual return that accounts for when cash flows occur. 100% Total Return over 10 years roughly equals 7% IRR. IRR is the professional metric for comparing deals across different hold periods.' } },
              { '@type': 'Question', name: 'Should I use Cap Rate exit or Appreciation exit method?', acceptedAnswer: { '@type': 'Answer', text: 'Cap Rate exit is the professional default — it reflects actual market pricing at exit by dividing Year N NOI by the exit cap rate. Appreciation exit is simpler but less accurate because it ignores how market cap rates shift over time. Use Cap Rate for serious underwriting, Appreciation for quick back-of-envelope estimates.' } },
              { '@type': 'Question', name: 'Does this calculator include taxes?', acceptedAnswer: { '@type': 'Answer', text: 'No, this is before-tax analysis only. After-tax analysis is too state-dependent and bracket-dependent for a general calculator. Typical after-tax Total Return is 15–30% lower than before-tax for high-bracket investors, depending on state, depreciation strategy, and 1031 exchange use.' } },
              { '@type': 'Question', name: 'Why is Year 1 cash flow so thin on most 2026 deals?', acceptedAnswer: { '@type': 'Answer', text: '2026 investment property rates of 7.5–8% compressed Year 1 cash flow dramatically versus the 2015–2020 era of 3.5–5% rates. Annual debt service is 40–50% higher on the same loan amount. Year 1 cash flow may be near zero or negative on deals that would have been strong cash-flow positive in 2019. Total Return over 10 years looks better because rent grows while debt service stays flat.' } }
            ]
          }
        ]
      })
    }
  ]
})

// ─── 2. REACTIVE STATE ───────────────────────────────────────────────────────
const calcMode = ref('analyze')  // 'analyze' | 'find-rent' | 'find-price'
const expenseMode = ref('simple')
const exitMethod = ref('cap-rate')  // 'cap-rate' | 'appreciation'
const isNavExpanded = ref(false)
const openFaq = ref(null)
const shareSuccess = ref(false)
const showEmailModal = ref(false)
const triggerScenarioSave = ref(false)
const showTable = ref(false)
const scenariosOpen = ref(false)
const rentNotAchievable = ref(false)
const priceNotAchievable = ref(false)

const form = reactive({
  purchasePrice: null,
  propertyType: '',
  monthlyRent: null,
  otherIncome: null,
  vacancyRate: null,
  totalExpensesSimple: null,
  expenses: {
    propertyTax: null,
    insurance: null,
    management: null,
    maintenance: null,
    utilities: null,
    hoa: null,
    capex: null,
    other: null,
  },
  rentGrowthRate: null,
  expenseGrowthRate: null,
  downPaymentPct: null,
  interestRate: null,
  loanTermYears: 30,
  closingCostsPct: null,
  initialRehab: null,
  cashReserves: null,
  holdPeriodYears: 10,
  exitCapRate: null,
  appreciationRate: null,
  saleCostsPct: null,
  targetTotalReturn: null,
})

// ─── 3. FIELD CONFIGS ────────────────────────────────────────────────────────
const expenseFields = [
  { key: 'propertyTax', label: 'Property Taxes', placeholder: 'Enter annual property taxes', hint: 'From county tax records' },
  { key: 'insurance', label: 'Insurance', placeholder: 'Enter annual insurance premium', hint: 'Landlord / hazard policy' },
  { key: 'management', label: 'Property Management', placeholder: 'Enter annual management fees', hint: 'Typical: 6–10% of gross rent' },
  { key: 'maintenance', label: 'Maintenance & Repairs', placeholder: 'Enter annual maintenance costs', hint: 'Typical: 1–2% of property value annually' },
  { key: 'utilities', label: 'Utilities (landlord-paid)', placeholder: 'Enter annual utility costs', hint: 'Only if paid by landlord' },
  { key: 'hoa', label: 'HOA Fees', placeholder: 'Enter annual HOA fees', hint: 'Leave blank if no HOA' },
  { key: 'capex', label: 'CapEx Reserve', placeholder: 'Enter annual CapEx reserve', hint: 'Roof, HVAC, major repairs' },
  { key: 'other', label: 'Other Expenses', placeholder: 'Enter other annual expenses', hint: 'Landscaping, pest control, etc.' },
]

// ─── 4. CONTEXT DATA ─────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is a good Total Return for rental property in 2026?',
    a: 'For a 10-year hold at 25% down and 7.5% rate in 2026, 100–150% Total Return is Strong, 60–100% is Solid (market-average), 30–60% is Weak, and below 30% is Critical. Historical pre-2022 benchmarks of 150%+ are much harder to achieve in the current rate environment — elevated rates compress Year 1 cash flow and require higher appreciation or rent growth to hit strong returns. Use the Solid tier (60–99%) as your baseline target for standard stabilized deals in secondary US markets.'
  },
  {
    q: 'What is the difference between Total Return and IRR?',
    a: 'Total Return is the simple cumulative gain over the hold period as a percentage of invested cash — it answers "how much did I multiply my money?" IRR is the time-weighted annual return that accounts for when cash flows occur — it answers "what annual rate did I earn?" 100% Total Return over 10 years roughly equals 7% IRR. IRR is the professional metric for comparing deals across different hold periods or against other investment classes, because it normalizes for time.'
  },
  {
    q: 'How does hold period affect Total Return?',
    a: 'Longer holds almost always produce higher Total Return because appreciation, principal paydown, and compounding rent growth all benefit from time. A 10-year hold typically produces 2–3× the Total Return of a 5-year hold on the same property — not because the deal improved, but because compounding had time to work. In the 2026 rate environment, short holds (5 years or less) are particularly challenged because Year 1–3 cash flows are thin while debt service hasn\'t been diluted yet by rent growth. Use the sensitivity table to compare hold periods on your specific deal.'
  },
  {
    q: 'How do I calculate Rental Property Total Return step by step?',
    a: 'Total Return % = (Cumulative Cash Flow + Net Sale Proceeds − Total Cash Invested) ÷ Total Cash Invested × 100. Example: $30,000 cumulative cash flow over 10 years + $150,000 net sale proceeds − $90,000 cash invested = $90,000 total profit. $90,000 ÷ $90,000 × 100 = 100% Total Return. Net Sale Proceeds = Sale Price − Remaining Loan Balance − Sale Costs. Total Cash Invested = Down Payment + Closing Costs + Rehab + Reserves.'
  },
  {
    q: 'Should I use Cap Rate exit or Appreciation exit method?',
    a: 'Cap Rate exit (Sale Price = Year N NOI ÷ Exit Cap Rate) is the professional default because it reflects actual market pricing at exit — buyers in the market price income properties by cap rate, not raw appreciation. Appreciation exit (Sale Price = Purchase Price × (1 + AppRate)^N) is simpler but less accurate because it ignores how market cap rates shift over time. For serious underwriting, use Cap Rate exit with your exit cap set 0.5–1% higher than purchase cap to account for property aging and market uncertainty. Use Appreciation exit only for quick back-of-envelope estimates.'
  },
  {
    q: 'Does this calculator include taxes?',
    a: 'No — this calculator performs before-tax analysis only. After-tax returns depend on the investor\'s tax bracket, state of residence, depreciation deduction strategy, recapture exposure, and 1031 exchange use — all of which vary too much across investors for a general tool to model accurately. Typical after-tax Total Return is 15–30% lower than before-tax for high-bracket investors in high-tax states. Factor this adjustment in mentally when comparing against benchmarks.'
  },
  {
    q: 'What hold period should I use?',
    a: '10 years is the standard benchmark and the most commonly-used comparison period in US real estate investment analysis. For BRRRR exit or flip-to-rent strategies, use 5 years. For long-term wealth building through a market cycle, use 15–30 years. Different hold periods produce very different Total Return percentages on the same deal — always compare investments using the same hold period or compare IRR instead. A 60% return at 5 years (strong) is not comparable to 60% at 15 years (weak).'
  },
  {
    q: 'Why is Year 1 cash flow so thin on most 2026 deals?',
    a: '2026 investment property rates of 7.5–8% create annual debt service roughly 40–50% higher than equivalent 2019 deals at 4–5% rates. A $270,000 loan at 7.5% costs ~$22,650/year in debt service; at 4% the same loan costs ~$15,480/year. This $7,000+ annual difference compresses or eliminates Year 1 cash flow on deals that were solidly cash-flow positive before 2022. Total Return over 10 years still looks reasonable because rent grows 2–3% annually while debt service stays flat — by Year 6–8, the rent growth erases the initial deficit and cash flow turns positive on most standard deals.'
  },
]

// ─── 5. COMPUTED CONTEXT ─────────────────────────────────────────────────────
const purchasePriceForCalc = computed(() => {
  if (calcMode.value === 'find-price') return maxPrice.value || 0
  return Number(form.purchasePrice) || 0
})

// ─── 6. COMPUTED CALCULATION CHAIN ───────────────────────────────────────────
const annualRent1 = computed(() => (Number(form.monthlyRent) || 0) * 12)
const otherIncome1 = computed(() => (Number(form.otherIncome) || 0) * 12)
const vacancyRate = computed(() => Math.min(Math.max(Number(form.vacancyRate) || 0, 0), 100) / 100)
const vacancyLoss1 = computed(() => annualRent1.value * vacancyRate.value)
const egi1 = computed(() => annualRent1.value - vacancyLoss1.value + otherIncome1.value)

const detailedTotalExpenses = computed(() => {
  return Object.values(form.expenses).reduce((sum, v) => sum + (Number(v) || 0), 0)
})
const totalExpenses1 = computed(() => {
  if (expenseMode.value === 'simple') return Number(form.totalExpensesSimple) || 0
  return detailedTotalExpenses.value
})

const noi1 = computed(() => egi1.value - totalExpenses1.value)

// Amortization helpers
function calcMonthlyPayment(principal, annualRate, termYears) {
  const n = termYears * 12
  if (annualRate === 0) return principal / n
  const r = annualRate / 12
  return principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
}

function calcLoanBalance(principal, annualRate, termYears, monthsElapsed) {
  const n = termYears * 12
  if (annualRate === 0) return principal * (1 - monthsElapsed / n)
  const r = annualRate / 12
  return principal * (Math.pow(1 + r, n) - Math.pow(1 + r, monthsElapsed)) / (Math.pow(1 + r, n) - 1)
}

const loanAmount = computed(() => {
  const pp = purchasePriceForCalc.value
  const dp = Number(form.downPaymentPct) || 0
  return pp * (1 - dp / 100)
})

const monthlyPayment = computed(() => {
  if (loanAmount.value <= 0) return 0
  return calcMonthlyPayment(loanAmount.value, (Number(form.interestRate) || 0) / 100, Number(form.loanTermYears) || 30)
})

const annualDS = computed(() => {
  if (isNaN(monthlyPayment.value) || !isFinite(monthlyPayment.value)) return 0
  return monthlyPayment.value * 12
})

const totalCashInvested = computed(() => {
  const pp = purchasePriceForCalc.value
  const dp = pp * (Number(form.downPaymentPct) || 0) / 100
  const closing = pp * (Number(form.closingCostsPct) || 0) / 100
  const rehab = Number(form.initialRehab) || 0
  const reserves = Number(form.cashReserves) || 0
  return dp + closing + rehab + reserves
})

const cashFlow1 = computed(() => noi1.value - annualDS.value)

// Core multi-year projection function
function runProjection(inputs) {
  const {
    purchasePrice, monthlyRent, otherIncomeMonthly, vacancyRatePct,
    year1Expenses, rentGrowthPct, expenseGrowthPct,
    downPaymentPct, interestRatePct, loanTermYrs, closingCostsPct,
    initialRehab, cashReserves, holdPeriodYrs, exitMethodVal,
    exitCapRatePct, appreciationRatePct, saleCostsPct
  } = inputs

  if (!purchasePrice || purchasePrice <= 0) return null
  if (!monthlyRent || monthlyRent <= 0) return null

  const annualRent = monthlyRent * 12
  const otherAnnual = (otherIncomeMonthly || 0) * 12
  const vac = Math.min(Math.max(vacancyRatePct || 0, 0), 100) / 100
  const rentGrowth = (rentGrowthPct || 0) / 100
  const expGrowth = (expenseGrowthPct || 0) / 100
  const interestRate = (interestRatePct || 0) / 100
  const loanTerm = loanTermYrs || 30
  const dp = purchasePrice * (downPaymentPct || 0) / 100
  const loan = purchasePrice - dp
  const closing = purchasePrice * (closingCostsPct || 0) / 100
  const rehab = initialRehab || 0
  const rsv = cashReserves || 0
  const totalInvested = dp + closing + rehab + rsv
  const N = holdPeriodYrs || 10
  const exitCap = (exitCapRatePct || 0) / 100
  const appRate = (appreciationRatePct || 0) / 100
  const saleCosts = (saleCostsPct || 0) / 100

  if (totalInvested <= 0) return null

  const mp = calcMonthlyPayment(loan, interestRate, loanTerm)
  if (isNaN(mp) || !isFinite(mp)) return null
  const annualDebtSvc = mp * 12

  // Year 1 NOI
  const egi1val = annualRent * (1 - vac) + otherAnnual
  const noi1val = egi1val - year1Expenses

  // Project years 1..N
  let cumulativeCF = 0
  const yearRows = []

  for (let y = 1; y <= N; y++) {
    const grossRentY = annualRent * Math.pow(1 + rentGrowth, y - 1)
    const vacancyY = grossRentY * vac
    const otherY = otherAnnual * Math.pow(1 + rentGrowth, y - 1)
    const egiY = grossRentY - vacancyY + otherY
    const expY = year1Expenses * Math.pow(1 + expGrowth, y - 1)
    const noiY = egiY - expY
    const cfY = noiY - annualDebtSvc
    cumulativeCF += cfY

    const principalPaid = loan > 0 ? (calcLoanBalance(loan, interestRate, loanTerm, (y - 1) * 12) - calcLoanBalance(loan, interestRate, loanTerm, y * 12)) : 0
    const balanceY = calcLoanBalance(loan, interestRate, loanTerm, y * 12)

    // Equity built (running)
    let propValueY
    const entryCapRate = noi1val > 0 ? noi1val / purchasePrice : 0
    if (exitMethodVal === 'cap-rate' && exitCap > 0 && entryCapRate > 0) {
      const interpCap = entryCapRate + (exitCap - entryCapRate) * (y / N)
      propValueY = interpCap > 0 ? noiY / interpCap : purchasePrice
    } else {
      propValueY = purchasePrice * Math.pow(1 + appRate, y)
    }
    const equityBuiltY = propValueY - balanceY

    // Cumulative return running (excluding sale)
    const runningReturn = totalInvested > 0 ? (cumulativeCF / totalInvested) * 100 : 0

    yearRows.push({ year: y, grossRent: grossRentY, vacancy: vacancyY, noi: noiY, debtService: annualDebtSvc, cashFlow: cfY, principalPaid, equityBuilt: equityBuiltY, saleProceeds: 0, cumulativeReturn: runningReturn, isExit: false })
  }

  // Year N NOI (for cap-rate exit)
  const grossRentN = annualRent * Math.pow(1 + rentGrowth, N - 1)
  const vacancyN = grossRentN * vac
  const otherN = otherAnnual * Math.pow(1 + rentGrowth, N - 1)
  const egiN = grossRentN - vacancyN + otherN
  const expN = year1Expenses * Math.pow(1 + expGrowth, N - 1)
  const noiN = egiN - expN

  // Sale price
  let saleP
  if (exitMethodVal === 'cap-rate') {
    if (exitCap <= 0) return null
    saleP = noiN / exitCap
  } else {
    saleP = purchasePrice * Math.pow(1 + appRate, N)
  }

  if (saleP <= 0) return null

  const remainBal = calcLoanBalance(loan, interestRate, loanTerm, N * 12)
  const saleCostDollar = saleP * saleCosts
  const netProceeds = saleP - remainBal - saleCostDollar

  const totalProfit = cumulativeCF + netProceeds - totalInvested
  const totalRet = (totalProfit / totalInvested) * 100

  const finalReturn = totalRet

  // Add exit row
  yearRows.push({ year: N, grossRent: 0, vacancy: 0, noi: 0, debtService: 0, cashFlow: 0, principalPaid: 0, equityBuilt: 0, saleProceeds: netProceeds, cumulativeReturn: finalReturn, isExit: true })

  // IRR solver
  const cashFlowSeries = [-totalInvested]
  for (let y = 1; y <= N; y++) {
    const row = yearRows[y - 1]
    cashFlowSeries.push(y === N ? row.cashFlow + netProceeds : row.cashFlow)
  }
  const irr = solveIRR(cashFlowSeries)

  return {
    totalReturn: totalRet,
    totalProfit,
    cumulativeCF,
    netSaleProceeds: netProceeds,
    totalCashInvested: totalInvested,
    salePrice: saleP,
    remainingBalance: remainBal,
    saleCostDollar,
    noi1: noi1val,
    annualDS: annualDebtSvc,
    cashFlow1: noi1val - annualDebtSvc,
    yearRows,
    irr,
    loan,
    mp
  }
}

// IRR solver (Newton-Raphson → bisection → null)
function solveIRR(cashFlows) {
  try {
    const npvAt = (r) => cashFlows.reduce((s, cf, t) => s + cf / Math.pow(1 + r, t), 0)
    const dnpvAt = (r) => cashFlows.reduce((s, cf, t) => s - t * cf / Math.pow(1 + r, t + 1), 0)

    // Newton-Raphson
    let rate = 0.10
    for (let i = 0; i < 50; i++) {
      const npv = npvAt(rate)
      const dnpv = dnpvAt(rate)
      if (Math.abs(dnpv) < 1e-12) break
      const newRate = rate - npv / dnpv
      if (Math.abs(newRate - rate) < 0.0001) return newRate
      if (!isFinite(newRate) || isNaN(newRate)) break
      rate = newRate
    }

    // Bisection fallback
    let lo = -0.99, hi = 10.0
    const npvLo = npvAt(lo), npvHi = npvAt(hi)
    if (npvLo * npvHi > 0) return null
    for (let i = 0; i < 100; i++) {
      const mid = (lo + hi) / 2
      if (Math.abs(hi - lo) < 0.0001) return mid
      if (npvAt(mid) * npvAt(lo) < 0) hi = mid
      else lo = mid
    }
    return (lo + hi) / 2
  } catch {
    return null
  }
}

// Main projection result
const projectionResult = computed(() => {
  if (calcMode.value !== 'analyze') return null
  const pp = Number(form.purchasePrice) || 0
  if (!pp || !form.monthlyRent || !form.downPaymentPct || !form.interestRate ||
      !form.closingCostsPct || !form.holdPeriodYears || !form.saleCostsPct) return null
  if (exitMethod.value === 'cap-rate' && !form.exitCapRate) return null
  if (exitMethod.value === 'appreciation' && !form.appreciationRate) return null
  if (!totalExpenses1.value && totalExpenses1.value !== 0) return null

  return runProjection({
    purchasePrice: pp,
    monthlyRent: Number(form.monthlyRent),
    otherIncomeMonthly: Number(form.otherIncome) || 0,
    vacancyRatePct: Number(form.vacancyRate) || 0,
    year1Expenses: totalExpenses1.value,
    rentGrowthPct: Number(form.rentGrowthRate) || 0,
    expenseGrowthPct: Number(form.expenseGrowthRate) || 0,
    downPaymentPct: Number(form.downPaymentPct),
    interestRatePct: Number(form.interestRate),
    loanTermYrs: Number(form.loanTermYears),
    closingCostsPct: Number(form.closingCostsPct),
    initialRehab: Number(form.initialRehab) || 0,
    cashReserves: Number(form.cashReserves) || 0,
    holdPeriodYrs: Number(form.holdPeriodYears),
    exitMethodVal: exitMethod.value,
    exitCapRatePct: Number(form.exitCapRate) || 0,
    appreciationRatePct: Number(form.appreciationRate) || 0,
    saleCostsPct: Number(form.saleCostsPct),
  })
})

const hasResult = computed(() => projectionResult.value !== null && isFinite(projectionResult.value.totalReturn))

const totalReturn = computed(() => projectionResult.value?.totalReturn ?? 0)
const totalProfit = computed(() => projectionResult.value?.totalProfit ?? 0)
const cumulativeCF = computed(() => projectionResult.value?.cumulativeCF ?? 0)
const netSaleProceeds = computed(() => projectionResult.value?.netSaleProceeds ?? 0)
const salePrice = computed(() => projectionResult.value?.salePrice ?? 0)
const remainingBalance = computed(() => projectionResult.value?.remainingBalance ?? 0)
const saleCostsDollar = computed(() => projectionResult.value?.saleCostDollar ?? 0)
const multiYearTable = computed(() => projectionResult.value?.yearRows ?? [])
const equityAtExit = computed(() => salePrice.value - remainingBalance.value)

// Purchase cap rate
const purchaseCapRate = computed(() => {
  const pp = purchasePriceForCalc.value
  if (!pp || !hasResult.value) return 0
  return (noi1.value / pp) * 100
})

// ─── 7. COMPUTED ANALYTICS ───────────────────────────────────────────────────
const cocReturn = computed(() => {
  if (!hasResult.value || totalCashInvested.value <= 0) return 0
  return (cashFlow1.value / totalCashInvested.value) * 100
})

const dscr1 = computed(() => {
  if (!hasResult.value || annualDS.value <= 0) return 0
  return noi1.value / annualDS.value
})

const irrValue = computed(() => projectionResult.value?.irr ?? null)

const irrDisplay = computed(() => {
  const v = irrValue.value
  if (v === null) return 'N/A'
  return (v * 100).toFixed(1) + '%'
})

const irrColor = computed(() => {
  const v = irrValue.value
  if (v === null) return '#6b7280'
  const pct = v * 100
  if (pct >= 15) return '#059669'
  if (pct >= 10) return '#10B981'
  if (pct >= 6) return '#F59E0B'
  if (pct >= 3) return '#F97316'
  if (pct >= 0) return '#DC2626'
  return '#7F1D1D'
})

// ─── 9. COMPUTED SCENARIOS ───────────────────────────────────────────────────
const scenarios = computed(() => {
  if (!hasResult.value) return []
  const base = projectionResult.value
  const pp = purchasePriceForCalc.value
  const buildScenario = (rentMult, vacMult, expMult, exitCapDelta, appMult) => {
    const r = runProjection({
      purchasePrice: pp,
      monthlyRent: Number(form.monthlyRent) * rentMult,
      otherIncomeMonthly: Number(form.otherIncome) || 0,
      vacancyRatePct: Math.min((Number(form.vacancyRate) || 0) * vacMult, 50),
      year1Expenses: totalExpenses1.value * expMult,
      rentGrowthPct: Number(form.rentGrowthRate) || 0,
      expenseGrowthPct: Number(form.expenseGrowthRate) || 0,
      downPaymentPct: Number(form.downPaymentPct),
      interestRatePct: Number(form.interestRate),
      loanTermYrs: Number(form.loanTermYears),
      closingCostsPct: Number(form.closingCostsPct),
      initialRehab: Number(form.initialRehab) || 0,
      cashReserves: Number(form.cashReserves) || 0,
      holdPeriodYrs: Number(form.holdPeriodYears),
      exitMethodVal: exitMethod.value,
      exitCapRatePct: (Number(form.exitCapRate) || 0) + exitCapDelta,
      appreciationRatePct: (Number(form.appreciationRate) || 0) * appMult,
      saleCostsPct: Number(form.saleCostsPct),
    })
    return r
  }

  const conserv = buildScenario(1.0, 1.5, 1.3, 0.75, 0.5)
  const optimist = buildScenario(1.0, 0.75, 0.9, -0.25, 1.15)

  const formatIrr = (res) => {
    if (!res || res.irr === null) return 'N/A'
    return (res.irr * 100).toFixed(1) + '%'
  }

  return [
    { key: 'conservative', label: 'Conservative', desc: 'Vacancy ×1.5, Expenses ×1.3, Exit Cap +0.75%', color: '#dc2626', bgColor: '#fff1f2', borderColor: '#fecaca', totalReturn: conserv?.totalReturn ?? 0, irr: formatIrr(conserv) },
    { key: 'base', label: 'Base Case', desc: 'Current inputs as entered', color: '#2563eb', bgColor: '#eff6ff', borderColor: '#bfdbfe', totalReturn: base?.totalReturn ?? 0, irr: formatIrr(base) },
    { key: 'optimistic', label: 'Optimistic', desc: 'Vacancy ×0.75, Expenses ×0.9, Exit Cap −0.25%', color: '#059669', bgColor: '#f0fdf4', borderColor: '#bbf7d0', totalReturn: optimist?.totalReturn ?? 0, irr: formatIrr(optimist) },
  ]
})

// ─── 10. COMPUTED BADGE ──────────────────────────────────────────────────────
const badge = computed(() => {
  const v = totalReturn.value
  if (v >= 150) return { label: 'Exceptional', bg1: '#059669', bg2: '#047857' }
  if (v >= 100) return { label: 'Strong', bg1: '#10B981', bg2: '#059669' }
  if (v >= 60) return { label: 'Solid', bg1: '#F59E0B', bg2: '#D97706' }
  if (v >= 30) return { label: 'Weak', bg1: '#F97316', bg2: '#EA580C' }
  if (v >= 0) return { label: 'Critical', bg1: '#DC2626', bg2: '#B91C1C' }
  return { label: 'Loss', bg1: '#7F1D1D', bg2: '#991B1B' }
})

const totalReturnFontClass = computed(() => {
  const v = Math.abs(totalReturn.value)
  if (v >= 1000) return 'text-3xl'
  if (v >= 100) return 'text-5xl'
  return 'text-6xl'
})

// ─── 11. COMPUTED INSIGHT TEXT ────────────────────────────────────────────────
const insightText = computed(() => {
  if (!hasResult.value) return ''
  const v = totalReturn.value.toFixed(1)
  const N = form.holdPeriodYears
  const tier = badge.value.label
  const irr = irrValue.value !== null ? (irrValue.value * 100).toFixed(1) + '% IRR' : 'N/A IRR'
  const cfStr = cashFlow1.value >= 0 ? `positive Year 1 cash flow of ${formatCurrency(cashFlow1.value)}` : `slightly negative Year 1 cash flow (${formatCurrency(cashFlow1.value)}) that turns positive as rent grows`

  if (badge.value.label === 'Exceptional') return `Total Return of ${v}% over ${N} years is in the Exceptional range — top-quartile by 2026 US standards. This result typically requires value-add execution or strong market appreciation. ${irr}. Major driver is the exit appreciation combined with compounding rent growth.`
  if (badge.value.label === 'Strong') return `Total Return of ${v}% over ${N} years is in the Strong range — above-market by 2026 standards. ${irr}. This deal meets professional buy-and-hold targets. The deal benefits from ${cfStr} plus significant equity buildup at exit.`
  if (badge.value.label === 'Solid') return `Total Return of ${v}% over ${N} years is in the Solid range — market-average for 2026 at 25% down and 7.5% rate. ${irr}. This is a reasonable outcome; most stabilized deals land here. The deal has ${cfStr}, improving annually as rent grows while debt service stays flat.`
  if (badge.value.label === 'Weak') return `Total Return of ${v}% over ${N} years is in the Weak range — below market for 2026 buy-and-hold. ${irr}. Consider whether the return justifies the illiquidity and management burden versus passive alternatives. Check your rent growth and exit cap assumptions — small changes move the result.`
  if (badge.value.label === 'Critical') return `Total Return of ${v}% over ${N} years is in the Critical range — barely positive. ${irr}. Opportunity cost likely exceeds actual return. Reconsider: negotiate price down, increase down payment to reduce leverage, or extend hold period to let appreciation compound longer.`
  return `Total Return of ${v}% over ${N} years is negative — a Loss. ${irr}. This deal costs the investor money over the hold period. Major issues: over-leverage, over-pricing, or too-conservative exit assumptions. Do not proceed without major structural changes to the deal.`
})

// ─── 12. COMPUTED BENCHMARKS / TIERS ─────────────────────────────────────────
// (Embedded in badge computed above)

// ─── 13. COMPUTED SENSITIVITY / IMPLIED VALUES ────────────────────────────────
function quickReturn(overrides) {
  if (!hasResult.value) return 0
  const pp = purchasePriceForCalc.value
  const inputs = {
    purchasePrice: pp,
    monthlyRent: Number(form.monthlyRent),
    otherIncomeMonthly: Number(form.otherIncome) || 0,
    vacancyRatePct: Number(form.vacancyRate) || 0,
    year1Expenses: totalExpenses1.value,
    rentGrowthPct: Number(form.rentGrowthRate) || 0,
    expenseGrowthPct: Number(form.expenseGrowthRate) || 0,
    downPaymentPct: Number(form.downPaymentPct),
    interestRatePct: Number(form.interestRate),
    loanTermYrs: Number(form.loanTermYears),
    closingCostsPct: Number(form.closingCostsPct),
    initialRehab: Number(form.initialRehab) || 0,
    cashReserves: Number(form.cashReserves) || 0,
    holdPeriodYrs: Number(form.holdPeriodYears),
    exitMethodVal: exitMethod.value,
    exitCapRatePct: Number(form.exitCapRate) || 0,
    appreciationRatePct: Number(form.appreciationRate) || 0,
    saleCostsPct: Number(form.saleCostsPct),
    ...overrides
  }
  const res = runProjection(inputs)
  return res?.totalReturn ?? 0
}

const sensitivityHoldRent = computed(() => {
  if (!hasResult.value) return []
  return [5, 7, 10, 15, 20, 30].map(hold => ({
    hold,
    r2: quickReturn({ holdPeriodYrs: hold, rentGrowthPct: 2 }),
    r3: quickReturn({ holdPeriodYrs: hold, rentGrowthPct: 3 }),
    r4: quickReturn({ holdPeriodYrs: hold, rentGrowthPct: 4 }),
  }))
})

const sensitivityRateRent = computed(() => {
  if (!hasResult.value) return []
  const baseRate = Number(form.interestRate) || 0
  return [0, 0.5, 1.0, 1.5, 2.0].map(delta => ({
    label: delta === 0 ? `${baseRate}% (current)` : `${(baseRate + delta).toFixed(1)}% (+${delta}%)`,
    isCurrent: delta === 0,
    r2: quickReturn({ interestRatePct: baseRate + delta, rentGrowthPct: 2 }),
    r3: quickReturn({ interestRatePct: baseRate + delta, rentGrowthPct: 3 }),
    r4: quickReturn({ interestRatePct: baseRate + delta, rentGrowthPct: 4 }),
  }))
})

const sensitivityExitCap = computed(() => {
  if (!hasResult.value || exitMethod.value !== 'cap-rate') return []
  const baseEc = Number(form.exitCapRate) || 0
  return [-1, -0.5, 0, 0.5, 1, 1.5, 2].map(delta => {
    const ec = baseEc + delta
    const pp = purchasePriceForCalc.value
    const r = runProjection({
      purchasePrice: pp,
      monthlyRent: Number(form.monthlyRent),
      otherIncomeMonthly: Number(form.otherIncome) || 0,
      vacancyRatePct: Number(form.vacancyRate) || 0,
      year1Expenses: totalExpenses1.value,
      rentGrowthPct: Number(form.rentGrowthRate) || 0,
      expenseGrowthPct: Number(form.expenseGrowthRate) || 0,
      downPaymentPct: Number(form.downPaymentPct),
      interestRatePct: Number(form.interestRate),
      loanTermYrs: Number(form.loanTermYears),
      closingCostsPct: Number(form.closingCostsPct),
      initialRehab: Number(form.initialRehab) || 0,
      cashReserves: Number(form.cashReserves) || 0,
      holdPeriodYrs: Number(form.holdPeriodYears),
      exitMethodVal: 'cap-rate',
      exitCapRatePct: ec,
      appreciationRatePct: 0,
      saleCostsPct: Number(form.saleCostsPct),
    })
    return {
      label: delta === 0 ? `${baseEc}% (current)` : delta > 0 ? `${ec.toFixed(1)}% (+${delta}%)` : `${ec.toFixed(1)}% (${delta}%)`,
      isCurrent: delta === 0,
      salePrice: r?.salePrice ?? 0,
      netProceeds: r?.netSaleProceeds ?? 0,
      totalReturn: r?.totalReturn ?? 0,
    }
  })
})

// ─── 14. COMPUTED VISUALIZATION BREAKDOWN ────────────────────────────────────
const returnBreakdown = computed(() => {
  if (!hasResult.value || totalProfit.value <= 0) return { cfPct: 33, paydownPct: 33, appPct: 34 }
  const pp = purchasePriceForCalc.value
  const paydown = pp - remainingBalance.value
  const appreciationGain = Math.max(0, salePrice.value - pp)
  const total = Math.abs(totalProfit.value) + Math.abs(cumulativeCF.value) + paydown + appreciationGain
  if (total <= 0) return { cfPct: 33, paydownPct: 33, appPct: 34 }
  const cfPct = (Math.abs(cumulativeCF.value) / total) * 100
  const paydownPct = (paydown / total) * 100
  const appPct = (appreciationGain / total) * 100
  return { cfPct: Math.max(cfPct, 0), paydownPct: Math.max(paydownPct, 0), appPct: Math.max(appPct, 0) }
})

// ─── Reverse modes ────────────────────────────────────────────────────────────
const requiredRent = computed(() => {
  if (calcMode.value !== 'find-rent') return null
  if (!form.targetTotalReturn || !form.purchasePrice || !form.downPaymentPct ||
      !form.interestRate || !form.closingCostsPct || !form.holdPeriodYears || !form.saleCostsPct) return null
  if (exitMethod.value === 'cap-rate' && !form.exitCapRate) return null
  if (exitMethod.value === 'appreciation' && !form.appreciationRate) return null

  const target = Number(form.targetTotalReturn)
  const pp = Number(form.purchasePrice)
  const commonInputs = {
    purchasePrice: pp,
    otherIncomeMonthly: Number(form.otherIncome) || 0,
    vacancyRatePct: Number(form.vacancyRate) || 0,
    year1Expenses: totalExpenses1.value,
    rentGrowthPct: Number(form.rentGrowthRate) || 0,
    expenseGrowthPct: Number(form.expenseGrowthRate) || 0,
    downPaymentPct: Number(form.downPaymentPct),
    interestRatePct: Number(form.interestRate),
    loanTermYrs: Number(form.loanTermYears),
    closingCostsPct: Number(form.closingCostsPct),
    initialRehab: Number(form.initialRehab) || 0,
    cashReserves: Number(form.cashReserves) || 0,
    holdPeriodYrs: Number(form.holdPeriodYears),
    exitMethodVal: exitMethod.value,
    exitCapRatePct: Number(form.exitCapRate) || 0,
    appreciationRatePct: Number(form.appreciationRate) || 0,
    saleCostsPct: Number(form.saleCostsPct),
  }

  let lo = 0, hi = 20000
  const getReturn = (r) => runProjection({ ...commonInputs, monthlyRent: r })?.totalReturn ?? -9999

  if (getReturn(hi) < target) {
    rentNotAchievable.value = true
    return null
  }
  rentNotAchievable.value = false

  for (let i = 0; i < 100; i++) {
    const mid = (lo + hi) / 2
    if (hi - lo < 1) break
    if (getReturn(mid) < target) lo = mid
    else hi = mid
  }
  const result = (lo + hi) / 2
  if (Math.abs(getReturn(result) - target) > 10) { rentNotAchievable.value = true; return null }
  return Math.round(result)
})

const maxPrice = computed(() => {
  if (calcMode.value !== 'find-price') return null
  if (!form.targetTotalReturn || !form.monthlyRent || !form.downPaymentPct ||
      !form.interestRate || !form.closingCostsPct || !form.holdPeriodYears || !form.saleCostsPct) return null
  if (exitMethod.value === 'cap-rate' && !form.exitCapRate) return null
  if (exitMethod.value === 'appreciation' && !form.appreciationRate) return null

  const target = Number(form.targetTotalReturn)
  const commonInputs = {
    monthlyRent: Number(form.monthlyRent),
    otherIncomeMonthly: Number(form.otherIncome) || 0,
    vacancyRatePct: Number(form.vacancyRate) || 0,
    year1Expenses: totalExpenses1.value,
    rentGrowthPct: Number(form.rentGrowthRate) || 0,
    expenseGrowthPct: Number(form.expenseGrowthRate) || 0,
    downPaymentPct: Number(form.downPaymentPct),
    interestRatePct: Number(form.interestRate),
    loanTermYrs: Number(form.loanTermYears),
    closingCostsPct: Number(form.closingCostsPct),
    initialRehab: Number(form.initialRehab) || 0,
    cashReserves: Number(form.cashReserves) || 0,
    holdPeriodYrs: Number(form.holdPeriodYears),
    exitMethodVal: exitMethod.value,
    exitCapRatePct: Number(form.exitCapRate) || 0,
    appreciationRatePct: Number(form.appreciationRate) || 0,
    saleCostsPct: Number(form.saleCostsPct),
  }

  const getReturn = (price) => runProjection({ ...commonInputs, purchasePrice: price })?.totalReturn ?? -9999

  // At low price return is high, at high price return is low
  let lo = 10000, hi = 10000000
  if (getReturn(lo) < target) { priceNotAchievable.value = true; return null }
  priceNotAchievable.value = false

  for (let i = 0; i < 100; i++) {
    const mid = (lo + hi) / 2
    if (hi - lo < 500) break
    if (getReturn(mid) > target) lo = mid
    else hi = mid
  }
  const result = Math.round((lo + hi) / 2)
  if (Math.abs(getReturn(result) - target) > 10) { priceNotAchievable.value = true; return null }
  return result
})

// ─── 15. COMPUTED SHARE PARAMS ────────────────────────────────────────────────
function buildShareParams() {
  const p = new URLSearchParams()
  if (calcMode.value !== 'analyze') p.set('md', calcMode.value)
  if (exitMethod.value !== 'cap-rate') p.set('xm', 'app')
  if (expenseMode.value !== 'simple') p.set('em', expenseMode.value)
  if (form.purchasePrice) p.set('pp', form.purchasePrice)
  if (form.monthlyRent) p.set('mr', form.monthlyRent)
  if (form.otherIncome) p.set('oi', form.otherIncome)
  if (form.vacancyRate !== null && form.vacancyRate !== '') p.set('vr', form.vacancyRate)
  if (expenseMode.value === 'simple' && form.totalExpensesSimple) p.set('te', form.totalExpensesSimple)
  if (expenseMode.value === 'detailed') {
    if (form.expenses.propertyTax) p.set('ept', form.expenses.propertyTax)
    if (form.expenses.insurance) p.set('ei', form.expenses.insurance)
    if (form.expenses.management) p.set('emg', form.expenses.management)
    if (form.expenses.maintenance) p.set('emt', form.expenses.maintenance)
    if (form.expenses.utilities) p.set('eu', form.expenses.utilities)
    if (form.expenses.hoa) p.set('eho', form.expenses.hoa)
    if (form.expenses.capex) p.set('eco', form.expenses.capex)
    if (form.expenses.other) p.set('eot', form.expenses.other)
  }
  if (form.rentGrowthRate !== null) p.set('rg', form.rentGrowthRate)
  if (form.expenseGrowthRate !== null) p.set('eg', form.expenseGrowthRate)
  if (form.downPaymentPct) p.set('dp', form.downPaymentPct)
  if (form.interestRate) p.set('ir', form.interestRate)
  if (form.loanTermYears !== 30) p.set('lt', form.loanTermYears)
  if (form.closingCostsPct) p.set('cc', form.closingCostsPct)
  if (form.initialRehab) p.set('rh', form.initialRehab)
  if (form.cashReserves) p.set('cr', form.cashReserves)
  if (form.holdPeriodYears !== 10) p.set('hp', form.holdPeriodYears)
  if (form.exitCapRate) p.set('ec', form.exitCapRate)
  if (form.appreciationRate) p.set('ap', form.appreciationRate)
  if (form.saleCostsPct) p.set('sc', form.saleCostsPct)
  if (form.targetTotalReturn) p.set('tr', form.targetTotalReturn)
  if (form.propertyType) p.set('pt', form.propertyType)
  return p.toString()
}

// ─── 16. ONMOUNTED — URL PARAM PARSING ───────────────────────────────────────
if (process.client) {
  const { onMounted } = await import('vue')
  onMounted(() => {
    const p = new URLSearchParams(window.location.search)
    if (p.has('md')) calcMode.value = p.get('md')
    if (p.has('xm')) exitMethod.value = p.get('xm') === 'app' ? 'appreciation' : 'cap-rate'
    if (p.has('em')) expenseMode.value = p.get('em')
    if (p.has('pp')) form.purchasePrice = Number(p.get('pp'))
    if (p.has('mr')) form.monthlyRent = Number(p.get('mr'))
    if (p.has('oi')) form.otherIncome = Number(p.get('oi'))
    if (p.has('vr')) form.vacancyRate = Number(p.get('vr'))
    if (p.has('te')) form.totalExpensesSimple = Number(p.get('te'))
    if (p.has('ept')) form.expenses.propertyTax = Number(p.get('ept'))
    if (p.has('ei')) form.expenses.insurance = Number(p.get('ei'))
    if (p.has('emg')) form.expenses.management = Number(p.get('emg'))
    if (p.has('emt')) form.expenses.maintenance = Number(p.get('emt'))
    if (p.has('eu')) form.expenses.utilities = Number(p.get('eu'))
    if (p.has('eho')) form.expenses.hoa = Number(p.get('eho'))
    if (p.has('eco')) form.expenses.capex = Number(p.get('eco'))
    if (p.has('eot')) form.expenses.other = Number(p.get('eot'))
    if (p.has('rg')) form.rentGrowthRate = Number(p.get('rg'))
    if (p.has('eg')) form.expenseGrowthRate = Number(p.get('eg'))
    if (p.has('dp')) form.downPaymentPct = Number(p.get('dp'))
    if (p.has('ir')) form.interestRate = Number(p.get('ir'))
    if (p.has('lt')) form.loanTermYears = Number(p.get('lt'))
    if (p.has('cc')) form.closingCostsPct = Number(p.get('cc'))
    if (p.has('rh')) form.initialRehab = Number(p.get('rh'))
    if (p.has('cr')) form.cashReserves = Number(p.get('cr'))
    if (p.has('hp')) form.holdPeriodYears = Number(p.get('hp'))
    if (p.has('ec')) form.exitCapRate = Number(p.get('ec'))
    if (p.has('ap')) form.appreciationRate = Number(p.get('ap'))
    if (p.has('sc')) form.saleCostsPct = Number(p.get('sc'))
    if (p.has('tr')) form.targetTotalReturn = Number(p.get('tr'))
    if (p.has('pt')) form.propertyType = p.get('pt')
  })
}

// ─── 17. HELPER FUNCTIONS ────────────────────────────────────────────────────
function resetForm() {
  form.purchasePrice = null; form.propertyType = ''
  form.monthlyRent = null; form.otherIncome = null; form.vacancyRate = null
  form.totalExpensesSimple = null
  Object.keys(form.expenses).forEach(k => { form.expenses[k] = null })
  form.rentGrowthRate = null; form.expenseGrowthRate = null
  form.downPaymentPct = null; form.interestRate = null; form.loanTermYears = 30
  form.closingCostsPct = null; form.initialRehab = null; form.cashReserves = null
  form.holdPeriodYears = 10; form.exitCapRate = null; form.appreciationRate = null
  form.saleCostsPct = null; form.targetTotalReturn = null
  calcMode.value = 'analyze'; expenseMode.value = 'simple'; exitMethod.value = 'cap-rate'
  shareSuccess.value = false; openFaq.value = null; showTable.value = false
  scenariosOpen.value = false; rentNotAchievable.value = false; priceNotAchievable.value = false
}

function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
}

function formatCurrency(val) {
  if (val === null || val === undefined || isNaN(val)) return '$0'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)
}

// Warnings
const warnings = computed(() => {
  const w = []
  if (!form.purchasePrice && calcMode.value !== 'find-price') return w
  if (calcMode.value === 'analyze' && !hasResult.value) return w

  if (Number(form.vacancyRate) > 20) {
    w.push({ type: 'warn', msg: `Vacancy rate of ${form.vacancyRate}% is unusually high. Most stabilized US rentals average 5–10%. Confirm this figure reflects actual or expected vacancy.` })
  }
  if (Number(form.rentGrowthRate) > 4) {
    w.push({ type: 'warn', msg: `Rent growth of ${form.rentGrowthRate}% is optimistic. 2026 conservative underwriting uses 2–3%. Higher assumptions inflate Total Return significantly.` })
  }
  if (exitMethod.value === 'cap-rate' && Number(form.exitCapRate) < 4.5 && form.exitCapRate) {
    w.push({ type: 'warn', msg: `Exit cap rate of ${form.exitCapRate}% is aggressive. Most markets don't sustain sub-4.5% caps over a full hold period.` })
  }
  if (exitMethod.value === 'appreciation' && Number(form.appreciationRate) > 5) {
    w.push({ type: 'warn', msg: `Appreciation rate of ${form.appreciationRate}% exceeds the historical US average (~3%). Adjust downward for realistic modeling.` })
  }
  if (hasResult.value && dscr1.value > 0 && dscr1.value < 1.0) {
    w.push({ type: 'error', msg: `Year 1 DSCR of ${dscr1.value.toFixed(2)}x is below 1.0 — NOI doesn't cover debt service in Year 1. This property won't qualify for conventional financing.` })
  }
  if (hasResult.value && cashFlow1.value < -500 * 12) {
    w.push({ type: 'warn', msg: `Year 1 cash flow of ${formatCurrency(cashFlow1.value)} is significantly negative. Ensure cash reserves can cover early-year shortfalls.` })
  }
  if (hasResult.value && totalReturn.value > 500) {
    w.push({ type: 'warn', msg: `Total Return of ${totalReturn.value.toFixed(0)}% is unusually high. Verify your rent growth, exit cap, and expense growth inputs are realistic.` })
  }
  return w
})

function analyzeLongTermROI() {
  const params = new URLSearchParams({
    p: form.purchasePrice || '',
    dp: form.downPaymentPct ?? 25,
    cc: form.closingCostsPct ?? 2,
    lr: form.interestRate ?? 7.5,
    lt: form.loanTermYears ?? 30,
    r: form.monthlyRent || '',
    vc: form.vacancyRate ?? 8,
    ga: form.appreciationRate ?? 3,
    gr: form.rentGrowthRate ?? 3,
    hp: form.holdPeriodYears ?? 10,
  })
  if (form.initialRehab) params.set('rb', form.initialRehab)
  window.location.href = `/rental-property-roi-calculator?${params}`
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

// ─── 18. PDF EXPORT ───────────────────────────────────────────────────────────
async function exportPDF() {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF()
  const navy = [30, 58, 95], gold = [245, 158, 11], gray = [107, 114, 128]

  // Header
  doc.setFillColor(...navy)
  doc.rect(0, 0, 210, 40, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(22); doc.setFont('helvetica', 'bold')
  doc.text('RealCalc', 20, 20)
  doc.setFontSize(11); doc.setFont('helvetica', 'normal')
  doc.text('Rental Property Analysis Report', 20, 30)
  doc.setFontSize(9)
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 130, 20)

  // Mode-aware hero block
  let heroValue, heroLabel, heroSub, heroColor
  if (calcMode.value === 'find-rent') {
    heroValue = requiredRent.value !== null ? formatCurrency(requiredRent.value) + '/mo' : 'N/A'
    heroLabel = 'REQUIRED MONTHLY RENT'
    heroSub = `To achieve ${form.targetTotalReturn}% Total Return over ${form.holdPeriodYears} years`
    heroColor = [30, 64, 175]
  } else if (calcMode.value === 'find-price') {
    heroValue = maxPrice.value !== null ? formatCurrency(maxPrice.value) : 'N/A'
    heroLabel = 'MAXIMUM PURCHASE PRICE'
    heroSub = `To achieve ${form.targetTotalReturn}% Total Return over ${form.holdPeriodYears} years`
    heroColor = [6, 95, 70]
  } else {
    heroValue = hasResult.value ? (totalReturn.value >= 0 ? '+' : '') + totalReturn.value.toFixed(1) + '%' : 'N/A'
    heroLabel = `TOTAL RETURN (${form.holdPeriodYears}-YEAR HOLD)`
    heroSub = `${formatCurrency(totalProfit.value)} total profit · Tier: ${badge.value.label} · Before-tax analysis`
    heroColor = badge.value.bg1.startsWith('#') ? [
      parseInt(badge.value.bg1.slice(1, 3), 16),
      parseInt(badge.value.bg1.slice(3, 5), 16),
      parseInt(badge.value.bg1.slice(5, 7), 16)
    ] : [245, 158, 11]
  }

  doc.setFillColor(...gold)
  doc.rect(15, 50, 180, 30, 'F')
  doc.setTextColor(...navy)
  doc.setFontSize(24); doc.setFont('helvetica', 'bold')
  doc.text(heroValue, 105, 68, { align: 'center' })
  doc.setFontSize(9); doc.setFont('helvetica', 'normal')
  doc.text(heroLabel, 105, 75, { align: 'center' })
  doc.setFontSize(8)
  doc.text(heroSub, 105, 82, { align: 'center' })

  let y = 98
  if (calcMode.value === 'analyze' && hasResult.value) {
    doc.setTextColor(...navy); doc.setFontSize(13); doc.setFont('helvetica', 'bold')
    doc.text('Financial Summary', 20, y); y += 10

    const rows = [
      ['Purchase Price', formatCurrency(purchasePriceForCalc.value)],
      ['Total Cash Invested', formatCurrency(totalCashInvested.value)],
      ['Year 1 NOI', formatCurrency(noi1.value)],
      ['Year 1 Cash Flow', formatCurrency(cashFlow1.value)],
      [`Cumulative Cash Flow (${form.holdPeriodYears}yr)`, formatCurrency(cumulativeCF.value)],
      ['Sale Price (Exit)', formatCurrency(salePrice.value)],
      ['Net Sale Proceeds', formatCurrency(netSaleProceeds.value)],
      ['Total Profit', formatCurrency(totalProfit.value)],
      ['Total Return', (totalReturn.value >= 0 ? '+' : '') + totalReturn.value.toFixed(1) + '%'],
      ['IRR', irrDisplay.value],
      ['Year 1 Cash-on-Cash', cocReturn.value.toFixed(2) + '%'],
      ['Year 1 DSCR', dscr1.value > 0 ? dscr1.value.toFixed(2) + 'x' : 'N/A'],
    ]
    rows.forEach((row, i) => {
      if (i % 2 === 0) { doc.setFillColor(248, 250, 252); doc.rect(15, y - 5, 180, 10, 'F') }
      doc.setTextColor(...gray); doc.setFontSize(9); doc.setFont('helvetica', 'normal')
      doc.text(row[0], 20, y)
      doc.setTextColor(...navy); doc.setFont('helvetica', 'bold')
      doc.text(row[1], 190, y, { align: 'right' })
      y += 11
    })
    y += 4
    const splitInsight = doc.splitTextToSize(insightText.value, 165)
    const insightBoxH = Math.max(28, splitInsight.length * 5 + 16)
    doc.setFillColor(240, 244, 248); doc.rect(15, y - 5, 180, insightBoxH, 'F')
    doc.setTextColor(...navy); doc.setFontSize(10); doc.setFont('helvetica', 'bold')
    doc.text('Deal Context', 20, y + 3)
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(...gray)
    doc.text(splitInsight, 20, y + 12)
    y += insightBoxH + 6
  }

  // Footer
  doc.setFillColor(...navy); doc.rect(0, 280, 210, 17, 'F')
  doc.setTextColor(255, 255, 255); doc.setFontSize(8); doc.setFont('helvetica', 'normal')
  doc.text('realcalc.io — For informational purposes only. Not financial advice. Before-tax analysis.', 105, 290, { align: 'center' })
  doc.save(`rental-property-analysis-${Date.now()}.pdf`)
}

// ─── 19. SCENARIO SAVE / EMAIL CAPTURE ───────────────────────────────────────
const currentScenarioResult = computed(() => {
  if (!hasResult.value) return undefined
  return {
    primaryMetric: 'Total Return',
    primaryValue: (totalReturn.value >= 0 ? '+' : '') + totalReturn.value.toFixed(1) + '%',
    badgeLabel: badge.value.label,
    badgeColor: badge.value.bg1,
    totalReturn: totalReturn.value,
    totalProfit: totalProfit.value,
    irr: irrDisplay.value,
    holdPeriod: form.holdPeriodYears,
    purchasePrice: purchasePriceForCalc.value,
    cashOnCash: cocReturn.value,
    dscr: dscr1.value,
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
  @apply text-left p-2.5 rounded-xl transition cursor-pointer;
}
.calc-mode-tab-active {
  @apply bg-white shadow-sm;
}
.calc-mode-tab-inactive {
  @apply hover:bg-white/50;
}
.calc-section-header {
  @apply flex items-center px-4 py-2.5 border-b border-gray-50 bg-gray-50/50;
}
.calc-section-title {
  @apply text-xs font-bold uppercase tracking-wide text-gray-500;
}
.calc-inputs {
  @apply divide-y divide-gray-100;
}
.sensitivity-highlight {
  background: rgba(245, 158, 11, 0.07);
}
</style>
