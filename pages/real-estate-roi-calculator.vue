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
            <li class="text-gray-700 font-semibold">Real Estate ROI Calculator</li>
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
            Real Estate ROI Calculator — Verdict, Strategy Winner, and Risk Score
          </h1>
          <p class="text-gray-500 mt-2 text-base">Evaluate any real estate investment with verdict tier, strategy comparison, and risk score. Total ROI, annualized return, and sensitivity analysis.</p>
        </div>

        <!-- On this page nav -->
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>

          <!-- Desktop: full list -->
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#saved-scenarios" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Saved Scenarios</a></li>
            <li><a href="#what-is-roi" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What is ROI?</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            <li><a href="#verdict-system" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Verdict System</a></li>
            <li><a href="#risk-score" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Risk Score</a></li>
            <li><a href="#strategy-comparison" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy Comparison</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
          </ul>

          <!-- Mobile: first 3 always visible + collapsible rest -->
          <div class="md:hidden">
            <ul class="flex flex-col gap-y-2">
              <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
              <li><a href="#saved-scenarios" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Saved Scenarios</a></li>
              <li><a href="#what-is-roi" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What is ROI?</a></li>
            </ul>
            <ul v-show="isNavExpanded" class="flex flex-col gap-y-2 mt-2">
              <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
              <li><a href="#verdict-system" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Verdict System</a></li>
              <li><a href="#risk-score" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Risk Score</a></li>
              <li><a href="#strategy-comparison" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy Comparison</a></li>
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
          </svg>
          <span>ROI Analysis</span>
        </div>
        <div class="flex items-center gap-3">
          <template v-if="dm">
            <span class="text-xl font-extrabold leading-none" :class="dm.roiColor">{{ dm.primaryROIDisplay }}</span>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full border" :class="[dm.verdictStyle.border, dm.verdictStyle.text]">{{ dm.verdictLabel }}</span>
          </template>
          <template v-else>
            <span class="text-2xl font-bold text-gray-200">—</span>
            <span class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         MAIN CALCULATOR
    ═══════════════════════════════════════════════ -->
    <main id="calculator" class="max-w-[1100px] mx-auto px-4 pt-8 pb-10">

      <!-- Gradient border wrapper -->
      <div class="rounded-3xl p-[3px]" style="background: linear-gradient(135deg, #1e3a5f 0%, #f59e0b 50%, #1e3a5f 100%);">
      <div class="bg-white rounded-[21px] shadow-xl shadow-slate-200/60" style="overflow: clip;">

      <!-- ═══════════════════════════════════════════════
           CALCULATOR MODE SELECTOR
      ═══════════════════════════════════════════════ -->
      <div class="border-b border-gray-100 rounded-t-2xl bg-white">
        <div class="px-5 pt-4 pb-3">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
            What strategy do you want to analyze?
          </p>
          <div class="calc-mode-tabs">
            <button v-for="m in modes" :key="m.id"
              @click="currentMode = m.id"
              class="calc-mode-tab"
              :class="currentMode === m.id ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="currentMode === m.id ? 'color:#1e3a5f;' : ''">{{ m.label }}</span>
            </button>
          </div>
          <div class="mt-2.5">
            <p v-if="currentMode === 1" class="text-xs text-gray-500 leading-relaxed">
              Buy-and-hold rental analysis. Calculates annualized total ROI including appreciation, equity buildup, tax benefits, and sale proceeds over your hold period.
            </p>
            <p v-else-if="currentMode === 2" class="text-xs text-red-700 leading-relaxed bg-red-50 px-3 py-1.5 rounded-lg">
              Fix-and-flip analysis. Enter ARV, hold period, and hard money details to see annualized profit and 70% Rule compliance.
            </p>
            <p v-else-if="currentMode === 3" class="text-xs text-emerald-700 leading-relaxed bg-emerald-50 px-3 py-1.5 rounded-lg">
              BRRRR strategy: Buy, Rehab, Rent, Refinance, Repeat. Evaluates capital recovery through cash-out refinance. Infinite ROI achieved when all capital is recovered.
            </p>
            <p v-else class="text-xs text-slate-700 leading-relaxed bg-slate-50 px-3 py-1.5 rounded-lg">
              Runs all three strategies simultaneously and determines the <strong>Strategy Winner</strong> — the approach with the highest risk-adjusted annualized ROI for your property.
            </p>
          </div>
        </div>
      </div>

      <!-- TWO-COLUMN BODY: inputs left, results right -->
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch">

        <!-- ── INPUTS (left column) ── -->
        <div class="calc-inputs border-b lg:border-b-0 lg:border-r border-gray-200 bg-white min-w-0">

          <!-- Property & Purchase -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Property &amp; Purchase</h2>
            </div>
            <div class="px-4 py-3">
              <div class="grid sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Purchase Price</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="inputs.purchasePrice" type="number" min="0" placeholder="Enter purchase price"
                      class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div v-if="currentMode !== 2">
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Down Payment (%)</label>
                  <div class="relative">
                    <input v-model.number="inputs.downPayment" type="number" min="0" max="100" placeholder="Enter down payment %"
                      class="w-full pl-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div v-if="currentMode !== 2">
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Mortgage Rate (%)</label>
                  <div class="relative">
                    <input v-model.number="inputs.mortgageRate" type="number" step="0.1" placeholder="Enter interest rate %"
                      class="w-full pl-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div v-if="currentMode !== 2">
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Loan Term (years)</label>
                  <input v-model.number="inputs.loanTerm" type="number" min="1" max="30" placeholder="Enter term in years"
                    class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Rehab Budget</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="inputs.rehab" type="number" min="0" placeholder="Enter rehab budget (0 if turnkey)"
                      class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Closing Costs (%)</label>
                  <div class="relative">
                    <input v-model.number="inputs.closingCostsPct" type="number" step="0.1" placeholder="Enter closing costs %"
                      class="w-full pl-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Rental Inputs (modes 1, 4) -->
          <div v-if="currentMode === 1 || currentMode === 4" class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Rental Income &amp; Expenses</h2>
            </div>
            <div class="px-4 py-3">
              <div class="grid sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Monthly Rent</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="inputs.monthlyRent" type="number" min="0" placeholder="Enter monthly rent"
                      class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Vacancy Rate (%)</label>
                  <div class="relative">
                    <input v-model.number="inputs.vacancy" type="number" min="0" max="50" placeholder="Enter vacancy %"
                      class="w-full pl-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Operating Expenses (%)</label>
                  <div class="relative">
                    <input v-model.number="inputs.opEx" type="number" min="0" max="90" placeholder="Enter operating expenses %"
                      class="w-full pl-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Hold Period (years)</label>
                  <input v-model.number="inputs.holdPeriod" type="number" min="1" max="40" placeholder="Enter hold period (years)"
                    class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Appreciation (%/yr)</label>
                  <div class="relative">
                    <input v-model.number="inputs.appreciation" type="number" step="0.1" placeholder="Enter annual appreciation %"
                      class="w-full pl-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Selling Costs (%)</label>
                  <div class="relative">
                    <input v-model.number="inputs.sellingCostsPct" type="number" step="0.1" placeholder="Enter selling costs %"
                      class="w-full pl-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Marginal Tax Rate (%)</label>
                  <div class="relative">
                    <input v-model.number="inputs.marginalTax" type="number" min="0" max="60" placeholder="Enter marginal tax rate %"
                      class="w-full pl-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Property Tax (%/yr)</label>
                  <div class="relative">
                    <input v-model.number="inputs.propertyTaxPct" type="number" step="0.1" placeholder="Enter property tax %"
                      class="w-full pl-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Insurance ($/yr)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="inputs.insurance" type="number" min="0" placeholder="Enter annual insurance $"
                      class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">HOA ($/mo)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="inputs.hoaMonthly" type="number" min="0" placeholder="Enter monthly HOA $"
                      class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Fix & Flip Inputs (modes 2, 4) -->
          <div v-if="currentMode === 2 || currentMode === 4" class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Fix &amp; Flip Details</h2>
            </div>
            <div class="px-4 py-3">
              <div class="grid sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">After Repair Value (ARV)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="inputs.arv" type="number" min="0" placeholder="Enter ARV"
                      class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Hold Period (months)</label>
                  <input v-model.number="inputs.holdingMonths" type="number" min="1" max="60" placeholder="Enter holding months"
                    class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Hard Money Rate (%)</label>
                  <div class="relative">
                    <input v-model.number="inputs.hardMoneyRate" type="number" step="0.1" placeholder="Enter hard money rate %"
                      class="w-full pl-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Hard Money LTV (%)</label>
                  <div class="relative">
                    <input v-model.number="inputs.hardMoneyLTV" type="number" min="0" max="100" placeholder="Enter hard money LTV %"
                      class="w-full pl-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Holding Costs ($/mo)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="inputs.holdingCostsPerMonth" type="number" min="0" placeholder="Enter monthly holding costs"
                      class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Flip Selling Costs (%)</label>
                  <div class="relative">
                    <input v-model.number="inputs.flipSellingCostsPct" type="number" step="0.1" placeholder="Enter selling costs %"
                      class="w-full pl-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- BRRRR Inputs (modes 3, 4) -->
          <div v-if="currentMode === 3 || currentMode === 4" class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">BRRRR Refinance Details</h2>
            </div>
            <div class="px-4 py-3">
              <div class="grid sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">ARV for Refi</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="inputs.arv" type="number" min="0" placeholder="Enter ARV for refinance"
                      class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Refi LTV (%)</label>
                  <div class="relative">
                    <input v-model.number="inputs.refiLTV" type="number" min="0" max="100" placeholder="Enter refinance LTV %"
                      class="w-full pl-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Refi Rate (DSCR %)</label>
                  <div class="relative">
                    <input v-model.number="inputs.refiRate" type="number" step="0.1" placeholder="Enter refinance rate %"
                      class="w-full pl-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Refi Term (years)</label>
                  <input v-model.number="inputs.refiTerm" type="number" min="1" max="30" placeholder="Enter refi term (years)"
                    class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Refi Closing Costs (%)</label>
                  <div class="relative">
                    <input v-model.number="inputs.refiClosingPct" type="number" step="0.1" placeholder="Enter refi closing costs %"
                      class="w-full pl-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Months Pre-Refi</label>
                  <input v-model.number="inputs.holdingMonthsPreRefi" type="number" min="1" max="24" placeholder="Enter months before refi"
                    class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Hold Post-Refi (yrs)</label>
                  <input v-model.number="inputs.holdPostRefi" type="number" min="1" max="40" placeholder="Enter post-refi hold (years)"
                    class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Monthly Rent</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="inputs.monthlyRent" type="number" min="0" placeholder="Enter monthly rent"
                      class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Vacancy + OpEx (%)</label>
                  <div class="relative">
                    <input v-model.number="inputs.vacancyOpExCombined" type="number" min="0" max="90" placeholder="Enter vacancy + OpEx combined %"
                      class="w-full pl-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Reset Button -->
          <div class="px-4 py-3">
            <button @click="resetInputs"
              class="w-full py-2 rounded-lg border border-gray-200 text-gray-400 font-medium text-xs hover:border-gray-300 hover:text-gray-600 transition">
              Reset All Fields
            </button>
          </div>

        </div><!-- /calc-inputs -->

        <!-- ── RESULTS (right column) ── -->
        <div class="min-w-0 lg:relative lg:overflow-hidden">
        <div class="bg-gray-50 scrollbar-thin lg:absolute lg:inset-0 lg:overflow-y-auto">
        <div class="space-y-4 p-4 lg:p-5">

          <!-- Main result card -->
          <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">

            <!-- Waiting state -->
            <div v-if="!dm" class="px-5 py-8 text-center">
              <div class="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                <svg class="w-7 h-7 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="font-bold text-gray-900 mb-1 text-sm">Enter your numbers</h3>
              <p class="text-xs text-gray-500">Fill in Purchase Price and key inputs to generate your ROI analysis and Verdict.</p>
            </div>

            <!-- Results when dm is available -->
            <template v-if="dm">

              <!-- Verdict header -->
              <div class="px-5 py-5 border-b border-gray-100" :class="dm.verdictStyle.bg">
                <p class="text-xs font-semibold uppercase tracking-wide mb-1" :class="dm.verdictStyle.muted">Verdict</p>
                <div class="text-3xl font-extrabold leading-none mb-2" :class="dm.verdictStyle.text">{{ dm.verdictLabel }}</div>
                <div class="text-xs font-medium" :class="dm.verdictStyle.text">{{ dc.finalDecisionLine }}</div>
              </div>

              <!-- Key metrics -->
              <div class="p-5 space-y-2">
                <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Key Metrics</h3>
                <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                  <span class="text-sm text-gray-500">{{ dm.primaryROILabel }}</span>
                  <span :class="['text-sm font-bold', dm.roiColor]">{{ dm.primaryROIDisplay }}</span>
                </div>
                <div v-if="dm.cashOnCash !== null" class="flex justify-between items-center py-1.5 border-b border-gray-50">
                  <span class="text-sm text-gray-500">Cash-on-Cash</span>
                  <span class="text-sm font-semibold text-gray-800">{{ fmt1(dm.cashOnCash) }}%</span>
                </div>
                <div v-if="dm.capRate !== null" class="flex justify-between items-center py-1.5 border-b border-gray-50">
                  <span class="text-sm text-gray-500">Cap Rate</span>
                  <span class="text-sm font-semibold text-gray-800">{{ fmt1(dm.capRate) }}%</span>
                </div>
                <div v-if="dm.irr !== null" class="flex justify-between items-center py-1.5 border-b border-gray-50">
                  <span class="text-sm text-gray-500">IRR</span>
                  <span class="text-sm font-semibold text-gray-800">{{ fmt1(dm.irr) }}%</span>
                </div>
                <div v-if="dm.totalProfit !== null" class="flex justify-between items-center py-1.5 border-b border-gray-50">
                  <span class="text-sm text-gray-500">Total Profit</span>
                  <span class="text-sm font-semibold text-gray-800">{{ fmtDollar(dm.totalProfit) }}</span>
                </div>
                <div v-if="dm.equityMultiple !== null" class="flex justify-between items-center py-1.5 border-b border-gray-50">
                  <span class="text-sm text-gray-500">Equity Multiple</span>
                  <span class="text-sm font-semibold text-gray-800">{{ fmt2(dm.equityMultiple) }}x</span>
                </div>
                <div v-if="dm.capitalPayback !== null" class="flex justify-between items-center py-1.5 border-b border-gray-50">
                  <span class="text-sm text-gray-500">Capital Payback</span>
                  <span :class="['text-sm font-semibold', dm.capitalPaybackFlag ? 'text-orange-600' : 'text-gray-800']">{{ fmt1(dm.capitalPayback) }} yrs{{ dm.capitalPaybackFlag ? ' ⚠' : '' }}</span>
                </div>
                <div class="flex justify-between items-center py-1.5">
                  <span class="text-sm text-gray-500">Total Cash Invested</span>
                  <span class="text-sm font-semibold text-gray-800">{{ fmtDollar(dm.totalCashInvested) }}</span>
                </div>
              </div>

              <!-- Risk Score -->
              <div class="px-5 pb-4 pt-0 border-b border-gray-100">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold uppercase tracking-wide text-gray-400">Risk Score</span>
                  <span :class="['text-base font-extrabold', dm.riskStyle.text]">{{ dm.riskScore }}/10</span>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-2 mb-2">
                  <div :class="['h-2 rounded-full transition-all', dm.riskStyle.bar]" :style="{width: (dm.riskScore/10*100)+'%'}"></div>
                </div>
                <div class="text-xs font-medium mb-1" :class="dm.riskStyle.text">{{ dm.riskLabel }}</div>
                <div class="text-xs text-gray-500">{{ dc.riskContext }}</div>
              </div>

              <!-- Stability + Confidence -->
              <div class="px-5 py-4 border-b border-gray-100">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <div class="text-xs text-gray-500 mb-0.5">Stability</div>
                    <div :class="['text-sm font-bold', dm.stabilityStyle.text]">{{ dm.stability }}</div>
                    <div class="text-xs text-gray-400 mt-0.5">{{ dc.stabilityContext }}</div>
                  </div>
                  <div>
                    <div class="text-xs text-gray-500 mb-0.5">Confidence</div>
                    <div :class="['text-sm font-bold', dm.confidenceStyle.text]">{{ dm.confidenceTier }} ({{ dm.confidenceScore }}/9)</div>
                    <div class="text-xs text-gray-400 mt-0.5">{{ dc.confidenceContext }}</div>
                  </div>
                </div>
              </div>

              <!-- Strategy Winner (Mode 4) -->
              <div v-if="currentMode === 4 && dm.strategyWinner" class="px-5 py-4 border-b border-gray-100">
                <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Strategy Comparison</h3>
                <div class="space-y-1.5">
                  <div v-for="s in dm.strategyComparison" :key="s.name"
                    :class="['flex justify-between items-center p-2 rounded-lg text-sm', s.winner ? 'bg-emerald-50 border border-emerald-200' : 'bg-gray-50']">
                    <div class="flex items-center gap-2">
                      <span v-if="s.winner" class="text-xs font-bold text-emerald-700">WIN</span>
                      <span :class="s.winner ? 'font-semibold text-emerald-800' : 'text-gray-700'">{{ s.name }}</span>
                    </div>
                    <span :class="['font-bold', s.winner ? 'text-emerald-700' : 'text-gray-600']">{{ s.roiDisplay }}</span>
                  </div>
                </div>
                <div class="mt-2 text-xs text-gray-500">{{ dc.strategyContext }}</div>
              </div>

              <!-- Scenario Analysis -->
              <div v-if="dm.scenarios" class="px-5 py-4 border-b border-gray-100">
                <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Scenario Analysis</h3>
                <div class="space-y-1.5">
                  <div v-for="sc in dm.scenarios" :key="sc.label" class="flex justify-between items-center text-sm">
                    <span class="text-gray-500">{{ sc.label }}</span>
                    <span :class="['font-semibold', sc.roiVal >= 0 ? 'text-gray-800' : 'text-red-600']">{{ sc.display }}</span>
                  </div>
                </div>
              </div>

              <!-- Action Block -->
              <div class="px-5 py-4 border-b border-gray-100" :class="dm.actionStyle.bg">
                <h3 class="text-xs font-bold uppercase tracking-wide mb-1.5" :class="dm.actionStyle.title">Action</h3>
                <p class="text-sm leading-relaxed" :class="dm.actionStyle.text">{{ dc.actionBlock }}</p>
                <ul v-if="dc.actionItems && dc.actionItems.length" class="mt-2 space-y-1">
                  <li v-for="item in dc.actionItems" :key="item" :class="['text-xs flex items-start gap-1.5', dm.actionStyle.text]">
                    <span class="mt-0.5">•</span>{{ item }}
                  </li>
                </ul>
              </div>

              <!-- Deal Context -->
              <div class="px-5 py-4" style="background: #1e3a5f12;">
                <div class="flex items-center gap-2 mb-1.5">
                  <span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full text-white" style="background:#1e3a5f;">
                    <span class="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                    {{ dm.verdictLabel }}
                  </span>
                  <span class="text-xs font-semibold text-gray-400 uppercase tracking-wide">Deal context</span>
                </div>
                <p class="text-sm leading-relaxed font-medium text-gray-700">{{ dc.dealContext }}</p>
              </div>

            </template>

            <!-- Save + Share + PDF -->
            <div v-if="dm" class="p-4 border-t border-gray-100 space-y-2">
              <button @click="saveScenario"
                class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
                style="background: #f59e0b; color: #1e3a5f;">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>
                Save Scenario
              </button>
              <div class="grid grid-cols-2 gap-2">
                <button @click="copyShareableURL"
                  class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                  </svg>
                  Share
                </button>
                <button @click="exportPDF"
                  class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  Export PDF
                </button>
              </div>
            </div>

          </div><!-- /main result card -->

        </div>
        </div>
        </div><!-- /right column -->

      </div><!-- /two-column -->

      </div><!-- /bg-white inner -->
      </div><!-- /gradient wrapper -->

      <!-- ═══════════════════════════════════════════════
           SAVED SCENARIOS
      ═══════════════════════════════════════════════ -->
      <div id="saved-scenarios" class="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div class="px-6 py-5 border-b border-gray-100">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-xl font-extrabold" style="color: #1e3a5f;">Saved Scenarios</h2>
              <p class="text-gray-500 text-sm mt-0.5">Compare different investment scenarios side by side</p>
            </div>
            <NuxtLink v-if="savedScenarios.length >= 2" to="/compare-real-estate-deals?source=real-estate-roi"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition hover:opacity-90"
              style="background: #1e3a5f; color: white;">
              Compare All →
            </NuxtLink>
          </div>
        </div>
        <div class="p-6">
          <div v-if="savedScenarios.length === 0" class="text-center py-10">
            <div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
              </svg>
            </div>
            <p class="text-gray-600 font-medium text-sm">No saved scenarios yet</p>
            <p class="text-gray-400 text-xs mt-1">Fill in the calculator and click "Save Scenario" to save your analysis</p>
          </div>
          <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="scenario in savedScenarios" :key="scenario.id"
              class="bg-gray-50 rounded-2xl border border-gray-200 p-5 hover:shadow-sm transition-shadow">
              <div class="flex items-start justify-between mb-3">
                <div>
                  <div class="text-sm font-bold text-gray-900">{{ scenario.name }}</div>
                  <div class="text-xs text-gray-400 mt-0.5">{{ scenario.date }} · {{ modeLabel(scenario.mode) }}</div>
                </div>
                <button @click="deleteScenario(scenario.id)" class="text-gray-300 hover:text-red-400 transition-colors ml-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              <div class="space-y-1.5">
                <div class="flex justify-between text-xs">
                  <span class="text-gray-500">ROI</span>
                  <span :class="['font-bold', scenario.roi >= 0 ? 'text-green-600' : 'text-red-600']">{{ scenario.roi !== null ? fmt1(scenario.roi) + '%' : 'N/A' }}</span>
                </div>
                <div class="flex justify-between text-xs">
                  <span class="text-gray-500">Verdict</span>
                  <span class="font-semibold text-gray-800">{{ scenario.verdict }}</span>
                </div>
                <div class="flex justify-between text-xs">
                  <span class="text-gray-500">Risk Score</span>
                  <span class="font-semibold text-gray-800">{{ scenario.riskScore }}/10</span>
                </div>
                <div class="flex justify-between text-xs">
                  <span class="text-gray-500">Investment</span>
                  <span class="font-semibold text-gray-800">{{ fmtDollar(scenario.cashInvested) }}</span>
                </div>
              </div>
              <button @click="loadScenario(scenario)"
                class="mt-3 w-full py-1.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors">
                Load Scenario
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           SEO CONTENT
      ═══════════════════════════════════════════════ -->
      <div class="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

        <!-- Feature highlights -->
        <div class="border-b border-gray-100 px-8 py-8">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-gray-50 rounded-2xl border border-gray-100 p-5">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style="background:#e8f0fe">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </div>
              <h3 class="font-semibold text-gray-900 text-sm mb-1">4 Strategy Modes</h3>
              <p class="text-gray-500 text-xs">Rental, Flip, BRRRR, Strategy Comparison — pick your investment approach</p>
            </div>
            <div class="bg-gray-50 rounded-2xl border border-gray-100 p-5">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style="background:#fef3c7">
                <svg class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 class="font-semibold text-gray-900 text-sm mb-1">8-Tier Verdict</h3>
              <p class="text-gray-500 text-xs">From Infinite ROI to Do Not Proceed — clear go/no-go decision</p>
            </div>
            <div class="bg-gray-50 rounded-2xl border border-gray-100 p-5">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style="background:#fee2e2">
                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              </div>
              <h3 class="font-semibold text-gray-900 text-sm mb-1">Risk Score 0–10</h3>
              <p class="text-gray-500 text-xs">5-factor model: LTV, margin, sensitivity, appreciation, hold period</p>
            </div>
            <div class="bg-gray-50 rounded-2xl border border-gray-100 p-5">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style="background:#d1fae5">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              </div>
              <h3 class="font-semibold text-gray-900 text-sm mb-1">IRR + Capital Payback</h3>
              <p class="text-gray-500 text-xs">True time-value returns with Newton-Raphson IRR calculation</p>
            </div>
          </div>
        </div>

        <!-- Disclosure -->
        <div class="border-b border-gray-100 px-8 py-6">
          <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4">
            <p class="text-sm text-amber-800"><strong>Disclosure:</strong> This calculator is for educational and informational purposes only. Results are estimates based on your inputs and do not constitute financial, tax, or investment advice. Actual returns vary based on market conditions, property management, financing terms, and other factors. Consult a licensed real estate professional, CPA, or financial advisor before making investment decisions. Past performance does not guarantee future results.</p>
          </div>
        </div>

        <!-- Section 1: What Is ROI -->
        <div id="what-is-roi" class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">What Is Real Estate ROI?</h2>
          <div class="space-y-3 text-gray-600 leading-relaxed">
            <p>Return on investment (ROI) in real estate measures the total financial gain from a property investment relative to the capital you deployed. Unlike simple yield metrics, true real estate ROI captures <strong>all value created</strong>: rental income, property appreciation, mortgage paydown (equity buildup), tax benefits, and net sale proceeds — offset by every dollar you spent.</p>
            <p>The core formula: <strong>ROI = (Total Profit ÷ Total Capital Invested) × 100</strong>. For a rental property held over multiple years, this calculation requires modeling annual cash flows, applying time-value-of-money principles (IRR), and accounting for the eventual sale. Our calculator runs this complete analysis automatically.</p>
            <p>ROI is often confused with cash-on-cash return. Cash-on-cash measures only your annual pre-tax cash flow divided by invested capital — it ignores appreciation, loan paydown, and tax benefits. ROI provides the complete picture over your intended hold period.</p>
            <p>For fix-and-flip investors, ROI = net profit ÷ total invested capital, annualized by dividing by the hold period in years. For BRRRR investors who recover most or all capital through refinancing, the concept of "infinite ROI" applies when essentially zero capital remains at risk after the refinance.</p>
          </div>
        </div>

        <!-- Section 2: How to Use -->
        <div id="how-to-use" class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-1" style="color: #1e3a5f;">How to Use This Calculator</h2>
          <p class="text-gray-500 text-sm mb-6">Follow these steps to analyze any US real estate deal in under 3 minutes</p>
          <div class="grid md:grid-cols-2 gap-10">
            <ol class="space-y-5">
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">1</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Choose Your Strategy Mode</p>
                  <p class="text-gray-500 text-sm mt-1">Select Rental (Mode 1), Fix &amp; Flip (Mode 2), BRRRR (Mode 3), or Strategy Comparison (Mode 4). Mode 4 runs all three analyses simultaneously.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">2</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Enter Purchase Details</p>
                  <p class="text-gray-500 text-sm mt-1">Start with purchase price and rehab budget. Down payment defaults to 25%, mortgage rate to 7.5% (conventional). Adjust to match your actual financing.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">3</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Complete Mode-Specific Inputs</p>
                  <p class="text-gray-500 text-sm mt-1">For rentals: add monthly rent, vacancy, operating expenses. For flips: add ARV, hold months, hard money details. For BRRRR: add refi parameters and post-refi rent.</p>
                </div>
              </li>
            </ol>
            <div class="space-y-5">
              <div class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">4</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Read the Verdict Panel</p>
                  <p class="text-gray-500 text-sm mt-1">The right panel shows your 8-tier Verdict, Risk Score 0–10, Stability tier, and Confidence Score. These update instantly as you type.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">5</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Review the Action Block</p>
                  <p class="text-gray-500 text-sm mt-1">The color-coded Action block gives concrete next steps based on your specific Verdict, risk level, and input confidence. Follow the action directive to move forward or improve the deal.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">6</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Save &amp; Compare Scenarios</p>
                  <p class="text-gray-500 text-sm mt-1">Click "Save Scenario" to store up to 20 analyses. Use "Compare All" to view scenarios side by side in the Deal Comparison tool.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 3: Verdict System -->
        <div id="verdict-system" class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">Understanding the 8-Tier Verdict System</h2>
          <p class="text-gray-600 mb-6 text-sm leading-relaxed">Our Verdict system goes beyond simple pass/fail by providing 8 distinct outcome tiers, each with specific ROI thresholds and governance rules. The system evaluates not just returns but also risk-adjusted feasibility.</p>
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="flex gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
              <div class="w-3 h-3 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
              <div><div class="font-bold text-green-800 text-sm">INFINITE ROI</div><div class="text-xs text-green-700 mt-0.5">BRRRR only: all capital recovered via refinance. No capital at risk.</div></div>
            </div>
            <div class="flex gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <div class="w-3 h-3 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
              <div><div class="font-bold text-blue-800 text-sm">STRONG (≥18% annualized)</div><div class="text-xs text-blue-700 mt-0.5">Top-tier deal. Proceed with confidence if risk is manageable.</div></div>
            </div>
            <div class="flex gap-3 p-4 bg-indigo-50 border border-indigo-200 rounded-xl">
              <div class="w-3 h-3 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0"></div>
              <div><div class="font-bold text-indigo-800 text-sm">GOOD (12–18% annualized)</div><div class="text-xs text-indigo-700 mt-0.5">Solid performer. Competitive returns for active investors.</div></div>
            </div>
            <div class="flex gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <div class="w-3 h-3 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></div>
              <div><div class="font-bold text-amber-800 text-sm">MARGINAL (8–12% annualized)</div><div class="text-xs text-amber-700 mt-0.5">Acceptable. Evaluate whether risk justifies returns vs. alternatives.</div></div>
            </div>
            <div class="flex gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl">
              <div class="w-3 h-3 rounded-full bg-orange-500 mt-1.5 flex-shrink-0"></div>
              <div><div class="font-bold text-orange-800 text-sm">WEAK (4–8% annualized)</div><div class="text-xs text-orange-700 mt-0.5">Below-target returns. Negotiate harder or improve income/expenses.</div></div>
            </div>
            <div class="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
              <div class="w-3 h-3 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></div>
              <div><div class="font-bold text-red-800 text-sm">PASS (&lt;4%) / LOSS (&lt;0%)</div><div class="text-xs text-red-700 mt-0.5">Insufficient returns or net loss. Do not proceed at current inputs.</div></div>
            </div>
            <div class="flex gap-3 p-4 bg-gray-100 border border-gray-200 rounded-xl sm:col-span-2">
              <div class="w-3 h-3 rounded-full bg-gray-500 mt-1.5 flex-shrink-0"></div>
              <div><div class="font-bold text-gray-800 text-sm">DO NOT PROCEED (Governance override)</div><div class="text-xs text-gray-600 mt-0.5">Stability LOW: Base, conservative, and optimistic scenarios all diverge dangerously. Structural deal problem regardless of ROI number.</div></div>
            </div>
          </div>
          <div class="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p class="text-sm text-amber-800"><strong>Governance Rule:</strong> If Stability = LOW, the Verdict is overridden to DO NOT PROCEED regardless of base ROI. If Capital Payback exceeds your hold period, the Verdict is capped at MARGINAL.</p>
          </div>
        </div>

        <!-- Section 4: Risk Score -->
        <div id="risk-score" class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">5-Factor Risk Score Model</h2>
          <p class="text-gray-600 mb-6 text-sm leading-relaxed">The Risk Score (0–10, lower = safer) evaluates your deal across five independent dimensions. Each factor scores 0–2 points; the sum determines overall risk tier. A sixth factor (capital payback flag) adds +1 if capital isn't recovered within your hold period.</p>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead>
                <tr class="bg-gray-100">
                  <th class="text-left p-3 font-semibold text-gray-700 rounded-tl-xl">Factor</th>
                  <th class="text-center p-3 font-semibold text-gray-700">0 pts (Safe)</th>
                  <th class="text-center p-3 font-semibold text-gray-700">1 pt (Caution)</th>
                  <th class="text-center p-3 font-semibold text-gray-700 rounded-tr-xl">2 pts (Risk)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr class="hover:bg-gray-50"><td class="p-3 font-medium text-gray-800">LTV Ratio</td><td class="p-3 text-center text-gray-600">≤70%</td><td class="p-3 text-center text-gray-600">71–80%</td><td class="p-3 text-center text-gray-600">&gt;80%</td></tr>
                <tr class="hover:bg-gray-50"><td class="p-3 font-medium text-gray-800">Profit Margin / CoC</td><td class="p-3 text-center text-gray-600">&gt;8% (&gt;25% flip)</td><td class="p-3 text-center text-gray-600">4–8% (15–25% flip)</td><td class="p-3 text-center text-gray-600">&lt;4% (&lt;15% flip)</td></tr>
                <tr class="hover:bg-gray-50"><td class="p-3 font-medium text-gray-800">Rent Sensitivity</td><td class="p-3 text-center text-gray-600">Profitable at -10%</td><td class="p-3 text-center text-gray-600">Breakeven at -10%</td><td class="p-3 text-center text-gray-600">Loss at -10%</td></tr>
                <tr class="hover:bg-gray-50"><td class="p-3 font-medium text-gray-800">Appreciation Dependency</td><td class="p-3 text-center text-gray-600">&lt;40% of return</td><td class="p-3 text-center text-gray-600">40–70% of return</td><td class="p-3 text-center text-gray-600">&gt;70% of return</td></tr>
                <tr class="hover:bg-gray-50"><td class="p-3 font-medium text-gray-800">Hold Period</td><td class="p-3 text-center text-gray-600">5–10 years</td><td class="p-3 text-center text-gray-600">Other</td><td class="p-3 text-center text-gray-600">—</td></tr>
              </tbody>
            </table>
          </div>
          <div class="grid sm:grid-cols-4 gap-3 mt-4">
            <div class="p-3 bg-green-50 border border-green-200 rounded-xl text-center"><div class="text-xs font-bold text-green-700">LOW RISK</div><div class="text-xs text-green-600 mt-0.5">0–3 pts</div></div>
            <div class="p-3 bg-yellow-50 border border-yellow-200 rounded-xl text-center"><div class="text-xs font-bold text-yellow-700">MODERATE</div><div class="text-xs text-yellow-600 mt-0.5">4–5 pts</div></div>
            <div class="p-3 bg-orange-50 border border-orange-200 rounded-xl text-center"><div class="text-xs font-bold text-orange-700">HIGH RISK</div><div class="text-xs text-orange-600 mt-0.5">6–7 pts</div></div>
            <div class="p-3 bg-red-50 border border-red-200 rounded-xl text-center"><div class="text-xs font-bold text-red-700">EXTREME</div><div class="text-xs text-red-600 mt-0.5">8–10 pts</div></div>
          </div>
        </div>

        <!-- Section 5: Strategy Comparison -->
        <div id="strategy-comparison" class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">Strategy Comparison Mode (Mode 4)</h2>
          <p class="text-gray-600 mb-4 text-sm leading-relaxed">Mode 4 runs all three investment engines simultaneously on the same property and determines the Strategy Winner — the approach that generates the highest risk-adjusted annualized ROI.</p>
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
              <div class="font-bold text-indigo-800 mb-2 text-sm">Rental (Mode 1)</div>
              <p class="text-sm text-indigo-700">Best for: Cash flow-focused investors, long-term wealth building, tax benefit utilization. Evaluates annualized total ROI including appreciation, equity buildup, and tax deductions over a 5–15 year hold.</p>
            </div>
            <div class="bg-red-50 border border-red-200 rounded-2xl p-5">
              <div class="font-bold text-red-800 mb-2 text-sm">Fix &amp; Flip (Mode 2)</div>
              <p class="text-sm text-red-700">Best for: Active investors seeking quick capital turns. Evaluates annualized profit after hard money financing, holding costs, and selling expenses. Uses 70% Rule as a deal quality benchmark.</p>
            </div>
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
              <div class="font-bold text-emerald-800 mb-2 text-sm">BRRRR (Mode 3)</div>
              <p class="text-sm text-emerald-700">Best for: Investors who want to recycle capital. Evaluates capital recovery through cash-out refinance. BRRRR auto-wins in Mode 4 when infinite ROI is achieved (100%+ capital recovered).</p>
            </div>
          </div>
          <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <h3 class="font-bold text-gray-900 mb-2 text-sm">Winner Selection Logic</h3>
            <ol class="space-y-2 text-sm text-gray-700">
              <li class="flex gap-2"><span class="font-bold text-gray-500">1.</span> If BRRRR achieves infinite ROI (all capital recovered) → BRRRR wins automatically</li>
              <li class="flex gap-2"><span class="font-bold text-gray-500">2.</span> Otherwise, the strategy with the highest annualized ROI wins</li>
              <li class="flex gap-2"><span class="font-bold text-gray-500">3.</span> If two strategies are within 3 percentage points → declared a tie</li>
              <li class="flex gap-2"><span class="font-bold text-gray-500">4.</span> The overall Verdict uses the winning strategy's ROI tier</li>
            </ol>
          </div>
        </div>

        <!-- Section 6: IRR and Capital Payback -->
        <div class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">IRR and Capital Payback Explained</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-bold text-gray-900 mb-3 text-sm">Internal Rate of Return (IRR)</h3>
              <p class="text-sm text-gray-600 mb-3">IRR is the annualized return that makes your investment's net present value equal to zero — accounting for the exact timing of every cash flow. Unlike simple ROI, IRR recognizes that $1 received today is worth more than $1 received in year 7.</p>
              <p class="text-sm text-gray-600">We calculate IRR using the Newton-Raphson method on your actual annual cash flows plus net sale proceeds. An IRR above your cost of capital indicates the investment creates value. A rental property with 12% IRR outperforms a 8% conventional mortgage by 4 percentage points annually.</p>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-3 text-sm">Capital Payback Period</h3>
              <p class="text-sm text-gray-600 mb-3">Capital Payback measures how many years until cumulative cash flows return your initial invested capital — without relying on the sale. This is a conservative measure of how dependent your return is on successfully exiting the investment.</p>
              <p class="text-sm text-gray-600">Our governance system flags deals where Capital Payback exceeds your hold period as a warning: you're depending entirely on appreciation and sale to recover your investment. When flagged, the Verdict is capped at MARGINAL regardless of total ROI.</p>
            </div>
          </div>
        </div>

        <!-- Section 7: Rental ROI Deep Dive -->
        <div class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">How We Calculate Rental Property ROI</h2>
          <div class="space-y-4 text-gray-600 text-sm">
            <p>Rental property ROI requires modeling all cash flows over the hold period. Our 12-step canonical calculation pipeline processes:</p>
            <ol class="space-y-2 list-decimal list-inside marker:text-blue-600 marker:font-bold">
              <li><strong>Total Cash Invested:</strong> Down payment + rehab + closing costs + reserves</li>
              <li><strong>Loan Amortization:</strong> Monthly P&amp;I, annual interest (tax-deductible), remaining balance at sale</li>
              <li><strong>Net Operating Income (NOI):</strong> Gross rent × (1 - vacancy%) × (1 - opEx%) minus property tax, insurance, HOA</li>
              <li><strong>Annual Cash Flow:</strong> NOI minus mortgage debt service</li>
              <li><strong>Tax Benefits:</strong> Mortgage interest deduction × marginal tax rate + depreciation shield (27.5-year straight line)</li>
              <li><strong>After-Tax Cash Flow:</strong> Cash flow + tax benefit (simplified pre-tax equivalent)</li>
              <li><strong>Appreciation:</strong> Property value × (1 + appreciation%)^year</li>
              <li><strong>Sale Proceeds:</strong> Final value × (1 - selling cost%) minus remaining mortgage</li>
              <li><strong>Total Profit:</strong> Sum of after-tax CFs + sale proceeds − total cash invested</li>
              <li><strong>IRR:</strong> Newton-Raphson on [−invested, CF1, CF2, ..., CFn + sale]</li>
              <li><strong>Equity Multiple:</strong> Total capital returned ÷ total capital invested</li>
              <li><strong>Capital Payback:</strong> Years for cumulative CFs to equal initial investment</li>
            </ol>
            <p class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-800"><strong>Note:</strong> Tax calculations are simplified estimates. Actual tax treatment varies based on active/passive classification, income limits, depreciation recapture, and individual circumstances. Consult a CPA for precise tax modeling.</p>
          </div>
        </div>

        <!-- Section 8: Fix and Flip ROI -->
        <div class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">Fix &amp; Flip ROI: The 70% Rule and Beyond</h2>
          <div class="space-y-4 text-gray-600 text-sm">
            <p>Fix-and-flip ROI analysis starts with the 70% Rule — a quick filter used by experienced flippers: <strong>MAO (Maximum Allowable Offer) = ARV × 70% − Rehab Costs</strong>. If your purchase price exceeds MAO, the deal is traditionally considered too risky.</p>
            <p>Our flip calculator goes further by accounting for all actual costs:</p>
            <div class="grid sm:grid-cols-2 gap-3">
              <div class="bg-white border border-gray-200 rounded-xl p-4"><div class="font-semibold text-gray-800 mb-1 text-sm">Total Capital Deployed</div><div class="text-gray-500 text-xs">Down payment (hard money equity) + rehab + closing costs (buy) + holding costs × months + closing costs (sell)</div></div>
              <div class="bg-white border border-gray-200 rounded-xl p-4"><div class="font-semibold text-gray-800 mb-1 text-sm">Hard Money Financing</div><div class="text-gray-500 text-xs">Interest-only payments: loan × (rate ÷ 12) × hold months. Hard money typically covers 80% LTV with 12% rate.</div></div>
              <div class="bg-white border border-gray-200 rounded-xl p-4"><div class="font-semibold text-gray-800 mb-1 text-sm">Net Profit</div><div class="text-gray-500 text-xs">ARV × (1 - selling costs%) − purchase price − rehab − all financing &amp; holding costs</div></div>
              <div class="bg-white border border-gray-200 rounded-xl p-4"><div class="font-semibold text-gray-800 mb-1 text-sm">Annualized ROI</div><div class="text-gray-500 text-xs">= (Net Profit ÷ Cash Invested) ÷ (Hold Months ÷ 12). Shorter holds with good margins = higher annualized ROI.</div></div>
            </div>
          </div>
        </div>

        <!-- Section 9: BRRRR Strategy -->
        <div class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">BRRRR Strategy: Achieving Infinite ROI</h2>
          <div class="space-y-4 text-gray-600 text-sm">
            <p>BRRRR (Buy, Rehab, Rent, Refinance, Repeat) is the investor's capital recycling machine. When executed successfully, the cash-out refinance returns more capital than you initially invested — leaving you with a cash-flowing rental property and zero net capital deployed.</p>
            <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
              <div class="font-bold text-emerald-800 mb-2 text-sm">BRRRR Calculation Phases</div>
              <div class="grid sm:grid-cols-3 gap-3 text-emerald-700 text-xs">
                <div><div class="font-semibold uppercase tracking-wide mb-1">Phase 1: Acquisition</div>Total cash in = purchase + rehab + buying closing costs + pre-refi holding costs</div>
                <div><div class="font-semibold uppercase tracking-wide mb-1">Phase 2: Refinance</div>Refi proceeds = ARV × LTV%. Capital recovered = refi proceeds − refi closing costs. Capital remaining = Phase 1 cost − capital recovered</div>
                <div><div class="font-semibold uppercase tracking-wide mb-1">Phase 3: Hold</div>Annual NOI after refi mortgage payments. CoC on remaining capital. If capital remaining ≤ 0 → Infinite ROI</div>
              </div>
            </div>
            <p>The deal quality hinges on the spread between your all-in cost and the refinanced value. Buying at 75% of ARV with controlled rehab creates the equity needed for capital recovery. Market appreciation further widens this spread over time.</p>
          </div>
        </div>

        <!-- Section 10: Stability and Confidence -->
        <div class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">Stability and Confidence Score Explained</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-bold text-gray-900 mb-3 text-sm">Result Stability (3 Tiers)</h3>
              <div class="space-y-3">
                <div class="flex gap-3 p-3 bg-green-50 border border-green-200 rounded-xl">
                  <div class="w-3 h-3 rounded-full bg-green-500 mt-1 flex-shrink-0"></div>
                  <div><div class="font-semibold text-green-800 text-sm">HIGH Stability</div><div class="text-xs text-green-700">Conservative, base, and optimistic scenarios all show positive ROI with similar verdict tiers. The deal works across market conditions.</div></div>
                </div>
                <div class="flex gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <div class="w-3 h-3 rounded-full bg-yellow-500 mt-1 flex-shrink-0"></div>
                  <div><div class="font-semibold text-yellow-800 text-sm">MEDIUM Stability</div><div class="text-xs text-yellow-700">Scenarios diverge by 1–2 verdict tiers. Conservative scenario may be marginal. Proceed with caution; manage downside risks.</div></div>
                </div>
                <div class="flex gap-3 p-3 bg-red-50 border border-red-200 rounded-xl">
                  <div class="w-3 h-3 rounded-full bg-red-500 mt-1 flex-shrink-0"></div>
                  <div><div class="font-semibold text-red-800 text-sm">LOW Stability (Governance Override)</div><div class="text-xs text-red-700">Conservative scenario shows a LOSS or scenarios diverge dramatically. Verdict overridden to DO NOT PROCEED.</div></div>
                </div>
              </div>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-3 text-sm">Confidence Score (0–9)</h3>
              <p class="text-sm text-gray-600 mb-3">The Confidence Score reflects data quality — how many inputs have been customized and how sensitive the result is to key assumptions. Higher = better confidence in the output.</p>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between p-2 bg-gray-50 rounded-lg"><span class="text-gray-600">7–9: HIGH confidence</span><span class="text-green-600 font-semibold">Good to act</span></div>
                <div class="flex justify-between p-2 bg-gray-50 rounded-lg"><span class="text-gray-600">4–6: MEDIUM confidence</span><span class="text-yellow-600 font-semibold">Verify key inputs</span></div>
                <div class="flex justify-between p-2 bg-gray-50 rounded-lg"><span class="text-gray-600">0–3: LOW confidence</span><span class="text-red-600 font-semibold">Don't commit yet</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 11: Cap Rate and NOI -->
        <div class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">Cap Rate, NOI, and Their Role in ROI</h2>
          <div class="space-y-4 text-gray-600 text-sm">
            <p>Cap rate (capitalization rate) = NOI ÷ Property Value. It measures a property's income return independent of financing — useful for comparing properties across markets. However, cap rate alone doesn't tell you your personal ROI, which depends heavily on your financing structure.</p>
            <div class="grid sm:grid-cols-3 gap-4">
              <div class="bg-white border border-gray-200 rounded-xl p-4"><div class="font-bold text-gray-900 text-sm mb-2">Cap Rate 3–5%</div><p class="text-gray-500 text-xs">Typical for gateway markets (NYC, SF, LA). Low cap = high appreciation expectations. Cash flow is thin; returns depend on appreciation.</p></div>
              <div class="bg-white border border-gray-200 rounded-xl p-4"><div class="font-bold text-gray-900 text-sm mb-2">Cap Rate 5–8%</div><p class="text-gray-500 text-xs">Secondary markets. Balance of cash flow and appreciation. Strong fundamentals for long-term investors using conventional financing.</p></div>
              <div class="bg-white border border-gray-200 rounded-xl p-4"><div class="font-bold text-gray-900 text-sm mb-2">Cap Rate 8%+</div><p class="text-gray-500 text-xs">Tertiary or value-add markets. Strong cash flow, potentially lower appreciation. Excellent for cash-flow-first investors and DSCR financing.</p></div>
            </div>
          </div>
        </div>

        <!-- Section 12: 2026 Market Context -->
        <div class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">2026 Real Estate Investment Rate Environment</h2>
          <div class="space-y-4 text-gray-600 text-sm">
            <p>Our default rates reflect typical 2026 lending conditions for investment properties. These are starting points — your actual rates depend on credit score, property type, LTV, and lender relationship.</p>
            <div class="grid sm:grid-cols-3 gap-4">
              <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4"><div class="font-bold text-indigo-800 mb-2 text-sm">Conventional: 7.5%</div><p class="text-indigo-700 text-xs">For investment properties, expect +0.5–0.75% above primary residence rates. 25% down is standard. Best rates for credit scores 740+.</p></div>
              <div class="bg-blue-50 border border-blue-200 rounded-xl p-4"><div class="font-bold text-blue-800 mb-2 text-sm">DSCR: 8.25%</div><p class="text-blue-700 text-xs">Debt-service coverage ratio loans qualify based on property income, not personal income. Popular for self-employed investors. Minimum DSCR 1.0–1.25x.</p></div>
              <div class="bg-orange-50 border border-orange-200 rounded-xl p-4"><div class="font-bold text-orange-800 mb-2 text-sm">Hard Money: 12%</div><p class="text-orange-700 text-xs">Short-term bridge financing for fix-and-flip and BRRRR. Interest-only payments. 80% LTV on purchase price. 1–3 points origination fee typical.</p></div>
            </div>
          </div>
        </div>

        <!-- Section 13: Common Mistakes -->
        <div class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">7 Common Real Estate ROI Calculation Mistakes</h2>
          <div class="grid sm:grid-cols-2 gap-4 text-sm">
            <div class="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
              <span class="text-red-500 font-bold text-lg leading-none">1</span>
              <div><div class="font-semibold text-red-800">Using gross rent instead of NOI</div><div class="text-red-700 text-xs mt-1">Always deduct vacancy, maintenance, management, insurance, taxes, and repairs before calculating return on income properties.</div></div>
            </div>
            <div class="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
              <span class="text-red-500 font-bold text-lg leading-none">2</span>
              <div><div class="font-semibold text-red-800">Ignoring capital expenditures</div><div class="text-red-700 text-xs mt-1">HVAC, roofs, appliances — budget 5–10% of rent annually for CapEx reserves. Missing this inflates returns significantly.</div></div>
            </div>
            <div class="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
              <span class="text-red-500 font-bold text-lg leading-none">3</span>
              <div><div class="font-semibold text-red-800">Underestimating rehab costs</div><div class="text-red-700 text-xs mt-1">First-time flippers consistently underestimate by 20–40%. Get contractor bids, then add a 15–20% contingency buffer.</div></div>
            </div>
            <div class="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
              <span class="text-red-500 font-bold text-lg leading-none">4</span>
              <div><div class="font-semibold text-red-800">Over-projecting appreciation</div><div class="text-red-700 text-xs mt-1">US historical average is ~3–4%/year. Projecting 6–8% makes weak deals look attractive. Our Risk Score penalizes high appreciation dependency.</div></div>
            </div>
            <div class="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
              <span class="text-red-500 font-bold text-lg leading-none">5</span>
              <div><div class="font-semibold text-red-800">Forgetting selling costs</div><div class="text-red-700 text-xs mt-1">Realtor commissions, title, transfer taxes, and closing costs typically total 7–9% of sale price. This significantly impacts final net proceeds.</div></div>
            </div>
            <div class="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
              <span class="text-red-500 font-bold text-lg leading-none">6</span>
              <div><div class="font-semibold text-red-800">Not stress-testing assumptions</div><div class="text-red-700 text-xs mt-1">Run conservative scenarios. If the deal breaks when rent drops 10% or vacancy doubles, you need more cushion before proceeding.</div></div>
            </div>
            <div class="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-xl sm:col-span-2">
              <span class="text-red-500 font-bold text-lg leading-none">7</span>
              <div><div class="font-semibold text-red-800">Confusing total ROI with annualized ROI</div><div class="text-red-700 text-xs mt-1">A 50% total ROI over 10 years is only 4.1% annualized — a poor result. Always annualize to compare deals and strategies fairly.</div></div>
            </div>
          </div>
        </div>

        <!-- Section 14: Strategy Comparison Table -->
        <div class="border-b border-gray-100 px-8 py-8">
          <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">Rental vs. Flip vs. BRRRR: Which Strategy Wins?</h2>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm border-collapse">
              <thead>
                <tr class="bg-gray-100">
                  <th class="text-left p-3 font-semibold text-gray-700 rounded-tl-xl">Factor</th>
                  <th class="text-center p-3 font-semibold text-indigo-700">Rental</th>
                  <th class="text-center p-3 font-semibold text-red-700">Fix &amp; Flip</th>
                  <th class="text-center p-3 font-semibold text-emerald-700 rounded-tr-xl">BRRRR</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr class="hover:bg-gray-50"><td class="p-3 font-medium text-gray-700">Capital Recycling</td><td class="p-3 text-center text-gray-600">Slow (years)</td><td class="p-3 text-center text-gray-600">Fast (months)</td><td class="p-3 text-center text-gray-600">Fast (via refi)</td></tr>
                <tr class="hover:bg-gray-50"><td class="p-3 font-medium text-gray-700">Monthly Cash Flow</td><td class="p-3 text-center text-gray-600">Yes (ongoing)</td><td class="p-3 text-center text-gray-600">No (lump profit)</td><td class="p-3 text-center text-gray-600">Yes (post-refi)</td></tr>
                <tr class="hover:bg-gray-50"><td class="p-3 font-medium text-gray-700">Tax Benefits</td><td class="p-3 text-center text-gray-600">High (depr., int.)</td><td class="p-3 text-center text-gray-600">Low (income tax)</td><td class="p-3 text-center text-gray-600">High (ongoing)</td></tr>
                <tr class="hover:bg-gray-50"><td class="p-3 font-medium text-gray-700">Execution Complexity</td><td class="p-3 text-center text-gray-600">Low</td><td class="p-3 text-center text-gray-600">High</td><td class="p-3 text-center text-gray-600">Very High</td></tr>
                <tr class="hover:bg-gray-50"><td class="p-3 font-medium text-gray-700">Best Market</td><td class="p-3 text-center text-gray-600">High-rent</td><td class="p-3 text-center text-gray-600">Rising prices</td><td class="p-3 text-center text-gray-600">Value-add</td></tr>
              </tbody>
            </table>
          </div>
          <p class="text-sm text-gray-600">No single strategy is universally superior. BRRRR wins on capital efficiency when deals are available. Flipping wins on liquidity and speed. Rentals win on passive income and tax advantages. Use Mode 4 to evaluate your specific deal across all three.</p>
        </div>

        <!-- Disclosure -->
        <div class="border-b border-gray-100 px-8 py-6">
          <div class="bg-gray-50 border border-gray-200 rounded-2xl p-4">
            <p class="text-xs text-gray-500">All calculations are for informational purposes only. RealCalc does not provide financial, tax, legal, or investment advice. Results are estimates based on your inputs and assumed market conditions. Consult qualified professionals before making real estate investment decisions. Real estate investing involves risk including potential loss of principal.</p>
          </div>
        </div>

        <!-- FAQ -->
        <div id="faq" class="px-8 py-8">
          <h2 class="text-xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions</h2>
          <div class="space-y-4">
            <div v-for="faq in faqs" :key="faq.q" class="bg-gray-50 rounded-2xl border border-gray-100">
              <button
                @click="faq.open = !faq.open"
                class="w-full text-left p-5 flex items-center justify-between gap-4">
                <span class="font-semibold text-gray-900 text-sm">{{ faq.q }}</span>
                <svg :class="['w-5 h-5 text-gray-400 flex-shrink-0 transition-transform', faq.open ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div v-if="faq.open" class="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-4">{{ faq.a }}</div>
            </div>
          </div>
        </div>

      </div><!-- /SEO content white container -->

      <!-- ═══════════════════════════════════════════════
           RELATED CALCULATORS
      ═══════════════════════════════════════════════ -->
      <div id="related-calculators" class="mt-6 rounded-2xl p-8 text-center text-white" style="background: #1e3a5f;">
        <h2 class="text-2xl font-extrabold mb-2">Related Calculators</h2>
        <p class="text-blue-200 mb-6">Complete your real estate investment analysis with these tools</p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink v-for="calc in relatedCalcs" :key="calc.href" :to="calc.href"
            class="px-5 py-2.5 rounded-xl font-semibold text-sm border border-white/20 bg-white/10 hover:bg-white/20 transition">
            {{ calc.title }}
          </NuxtLink>
        </div>
      </div>

    </main>

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
import { ref, computed, onMounted, reactive } from 'vue'

// ─── SEO ─────────────────────────────────────────────────────────────────────
useHead({
  title: 'Real Estate ROI Calculator — Verdict + Strategy + Risk Score | RealCalc',
  meta: [
    { name: 'description', content: 'Free Real Estate ROI Calculator with Verdict, Strategy Winner, Risk Score, Capital Payback, IRR. Compare rental, flip, BRRRR strategies. 2026 investor rates.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Real Estate ROI Calculator — Verdict + Strategy + Risk Score | RealCalc' },
    { property: 'og:description', content: 'Free Real Estate ROI Calculator with Verdict, Strategy Winner, Risk Score, Capital Payback, IRR. Compare rental, flip, BRRRR strategies. 2026 investor rates.' },
    { property: 'og:url', content: 'https://arvcalc.com/real-estate-roi-calculator' },
    { property: 'og:type', content: 'website' },
  ],
  link: [
    { rel: 'canonical', href: 'https://arvcalc.com/real-estate-roi-calculator' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'SoftwareApplication',
            name: 'Real Estate ROI Calculator',
            url: 'https://arvcalc.com/real-estate-roi-calculator',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web',
            description: 'Advanced real estate ROI calculator with Decision Engine, 4 strategy modes, Risk Score, and Verdict system for US investors.',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is a good ROI for real estate?',
                acceptedAnswer: { '@type': 'Answer', text: 'A strong real estate ROI is generally 12–18%+ annualized. Cash-on-cash returns of 8–12% are considered good for rental properties. Our calculator provides context-aware verdicts based on your specific inputs.' },
              },
              {
                '@type': 'Question',
                name: 'How is real estate ROI calculated?',
                acceptedAnswer: { '@type': 'Answer', text: 'Real estate ROI = (Total Profit / Total Capital Invested) × 100. For rentals, this includes rental income, appreciation, tax benefits, and sale proceeds minus all costs. For flips, it\'s net profit divided by total invested capital, annualized by holding period.' },
              },
              {
                '@type': 'Question',
                name: 'What is BRRRR strategy in real estate?',
                acceptedAnswer: { '@type': 'Answer', text: 'BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. When done correctly, BRRRR can yield \'infinite ROI\' by recovering all initial capital through the refinance.' },
              },
            ],
          },
        ],
      }),
    },
  ],
})

// ============================================================
// UI STATE
// ============================================================
const isNavExpanded = ref(false)

// ============================================================
// MODE CONFIG
// ============================================================
const modes = [
  { id: 4, label: 'Strategy Comparison', activeClass: 'bg-slate-700 text-white shadow-sm' },
  { id: 1, label: 'Rental Property', activeClass: 'bg-indigo-600 text-white shadow-sm' },
  { id: 2, label: 'Fix & Flip', activeClass: 'bg-red-600 text-white shadow-sm' },
  { id: 3, label: 'BRRRR', activeClass: 'bg-emerald-600 text-white shadow-sm' },
]

const currentMode = ref(4)

// ============================================================
// INPUTS
// ============================================================
const inputs = ref({
  purchasePrice: null,
  rehab: null,
  downPayment: null,
  mortgageRate: null,
  loanTerm: null,
  closingCostsPct: null,
  monthlyRent: null,
  vacancy: null,
  opEx: null,
  holdPeriod: null,
  marginalTax: null,
  propertyTaxPct: null,
  insurance: null,
  hoaMonthly: null,
  appreciation: null,
  sellingCostsPct: null,
  arv: null,
  holdingMonths: null,
  hardMoneyRate: null,
  hardMoneyLTV: null,
  holdingCostsPerMonth: null,
  flipSellingCostsPct: null,
  flipClosingCostsPct: null,
  refiLTV: null,
  refiRate: null,
  refiTerm: null,
  refiClosingPct: null,
  holdingMonthsPreRefi: null,
  holdPostRefi: null,
  vacancyOpExCombined: null,
})

function resetInputs() {
  inputs.value = Object.fromEntries(Object.keys(inputs.value).map(k => [k, null]))
}

// ============================================================
// FORMATTING UTILITIES
// ============================================================
function fmt1(v) { return v === null || v === undefined ? 'N/A' : Number(v).toFixed(1) }
function fmt2(v) { return v === null || v === undefined ? 'N/A' : Number(v).toFixed(2) }
function fmtDollar(v) {
  if (v === null || v === undefined) return 'N/A'
  const abs = Math.abs(v)
  let s
  if (abs >= 1000000) s = '$' + (abs / 1000000).toFixed(2) + 'M'
  else if (abs >= 1000) s = '$' + Math.round(abs).toLocaleString()
  else s = '$' + Math.round(abs)
  return v < 0 ? '-' + s : s
}
function modeLabel(m) {
  const map = { 1: 'Rental', 2: 'Flip', 3: 'BRRRR', 4: 'Strategy' }
  return map[m] || 'Unknown'
}

// ============================================================
// CORE MATH UTILITIES
// ============================================================
function computeIRR(cashFlows, guess = 0.1) {
  if (!cashFlows || cashFlows.length < 2) return null
  let rate = guess
  for (let i = 0; i < 200; i++) {
    let npv = 0, dnpv = 0
    for (let t = 0; t < cashFlows.length; t++) {
      const denom = Math.pow(1 + rate, t)
      npv += cashFlows[t] / denom
      dnpv -= t * cashFlows[t] / Math.pow(1 + rate, t + 1)
    }
    if (Math.abs(dnpv) < 1e-10) return null
    const newRate = rate - npv / dnpv
    if (Math.abs(newRate - rate) < 1e-8) return isFinite(newRate) ? newRate * 100 : null
    rate = newRate
    if (rate < -0.999) rate = -0.5
  }
  return null
}

function buildAmortSchedule(loan, annualRate, termYears) {
  if (!loan || loan <= 0 || !annualRate || annualRate <= 0) {
    return { monthlyPI: 0, balance: loan || 0, yearlyInterest: {} }
  }
  const r = annualRate / 100 / 12
  const n = termYears * 12
  const monthlyPI = loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)
  let bal = loan
  const yearlyInterest = {}
  for (let month = 1; month <= n; month++) {
    const yr = Math.ceil(month / 12)
    const interest = bal * r
    const principal = monthlyPI - interest
    bal -= principal
    if (bal < 0) bal = 0
    yearlyInterest[yr] = (yearlyInterest[yr] || 0) + interest
  }
  return { monthlyPI, balance: Math.max(0, bal), yearlyInterest }
}

function getBalanceAtYear(loan, annualRate, termYears, year) {
  if (!loan || loan <= 0 || !annualRate || annualRate <= 0) return loan || 0
  const r = annualRate / 100 / 12
  const n = termYears * 12
  const monthlyPI = loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)
  let bal = loan
  for (let m = 0; m < year * 12; m++) {
    const interest = bal * r
    bal -= (monthlyPI - interest)
    if (bal < 0) { bal = 0; break }
  }
  return Math.max(0, bal)
}

// ============================================================
// MODE 1: RENTAL CALCULATION
// ============================================================
function calcMode1(inp) {
  const pp = inp.purchasePrice || 0
  const rehab = inp.rehab || 0
  const dpPct = (inp.downPayment || 25) / 100
  const rate = inp.mortgageRate || 7.5
  const term = inp.loanTerm || 30
  const ccPct = (inp.closingCostsPct || 3) / 100
  const rent = inp.monthlyRent || 0
  const vacPct = (inp.vacancy || 8) / 100
  const opPct = (inp.opEx || 30) / 100
  const hold = inp.holdPeriod || 7
  const taxRate = (inp.marginalTax || 24) / 100
  const propTaxPct = (inp.propertyTaxPct || 1.2) / 100
  const insurance = inp.insurance || 1800
  const hoa = (inp.hoaMonthly || 0) * 12
  const appPct = (inp.appreciation || 3.5) / 100
  const sellPct = (inp.sellingCostsPct || 7) / 100

  const downAmt = pp * dpPct
  const loan = pp - downAmt
  const closingCosts = pp * ccPct
  const totalCashInvested = downAmt + rehab + closingCosts

  if (totalCashInvested <= 0 || pp <= 0) return null

  const ltv = loan / pp * 100
  const amort = buildAmortSchedule(loan, rate, term)
  const monthlyPI = amort.monthlyPI
  const annualDebt = monthlyPI * 12

  const cashFlows = [-totalCashInvested]
  let cumCF = 0
  let capitalPayback = null
  let totalCFsum = 0
  let totalInterest = 0

  const annualRent = rent * 12
  const effectiveRent = annualRent * (1 - vacPct)

  for (let yr = 1; yr <= hold; yr++) {
    const propTax = pp * propTaxPct
    const opExpenses = effectiveRent * opPct
    const noi = effectiveRent - opExpenses - propTax - insurance - hoa
    const cashFlow = noi - annualDebt
    const interest = amort.yearlyInterest[yr] || 0
    totalInterest += interest
    const depreciation = pp / 27.5
    const taxableLoss = Math.min(0, cashFlow - depreciation)
    const taxBenefit = Math.abs(taxableLoss) * taxRate
    const afterTaxCF = cashFlow + taxBenefit
    cashFlows.push(afterTaxCF)
    cumCF += afterTaxCF
    totalCFsum += afterTaxCF
    if (capitalPayback === null && cumCF >= totalCashInvested) capitalPayback = yr
  }

  const finalValue = pp * Math.pow(1 + appPct, hold)
  const sellCosts = finalValue * sellPct
  const remainingLoan = getBalanceAtYear(loan, rate, term, hold)
  const saleProceeds = finalValue - sellCosts - remainingLoan
  const netProfit = totalCFsum + saleProceeds - totalCashInvested

  if (capitalPayback === null) capitalPayback = hold + (totalCashInvested - cumCF) / Math.max(1, totalCFsum / hold)

  const irrFlows = [...cashFlows]
  irrFlows[irrFlows.length - 1] += saleProceeds
  const irr = computeIRR(irrFlows)

  const annualNOI = effectiveRent - effectiveRent * opPct - pp * propTaxPct - insurance - hoa
  const capRate = annualNOI / pp * 100
  const cashOnCash = (cashFlows[1] || 0) / totalCashInvested * 100

  const totalROIAnnualized = Math.pow((netProfit + totalCashInvested) / totalCashInvested, 1 / hold) * 100 - 100

  const appreciationValue = finalValue - pp
  const appreciationShare = totalCashInvested > 0 ? appreciationValue / (netProfit + totalCashInvested) : 0

  const totalCapitalReturned = totalCFsum + saleProceeds
  const equityMultiple = totalCapitalReturned / totalCashInvested

  return {
    totalROIAnnualized,
    cashOnCash,
    capRate,
    irr,
    totalProfit: netProfit,
    totalCashInvested,
    totalCapitalReturned,
    equityMultiple,
    capitalPayback,
    ltv,
    appreciationShare,
    saleProceeds,
    annualNOI,
  }
}

// ============================================================
// MODE 2: FIX & FLIP
// ============================================================
function calcMode2(inp) {
  const pp = inp.purchasePrice || 0
  const rehab = inp.rehab || 0
  const arv = inp.arv || 0
  const holdMonths = inp.holdingMonths || 6
  const hmRate = (inp.hardMoneyRate || 12) / 100
  const hmLTV = (inp.hardMoneyLTV || 80) / 100
  const holdCost = inp.holdingCostsPerMonth || 1500
  const sellPct = (inp.flipSellingCostsPct || 8) / 100
  const ccPct = (inp.flipClosingCostsPct || 6) / 100

  if (pp <= 0 || arv <= 0) return null

  const hmLoan = pp * hmLTV
  const equity = pp - hmLoan
  const buyCosts = pp * ccPct
  const hmInterest = hmLoan * (hmRate / 12) * holdMonths
  const totalHolding = holdCost * holdMonths
  const sellCosts = arv * sellPct

  const totalCashInvested = equity + rehab + buyCosts + hmInterest + totalHolding
  const netProceeds = arv - sellCosts - hmLoan
  const netProfit = netProceeds - equity - rehab - buyCosts - hmInterest - totalHolding
  const profitMargin = arv > 0 ? netProfit / arv * 100 : 0
  const holdYears = holdMonths / 12
  const totalROI = totalCashInvested > 0 ? netProfit / totalCashInvested * 100 : 0
  const annualizedROI = holdYears > 0 ? (Math.pow(1 + totalROI / 100, 1 / holdYears) - 1) * 100 : 0

  const mao = arv * 0.7 - rehab
  const above70Rule = pp <= mao
  const renegotiateTarget = mao * 0.95

  let dealQuality = 'Poor'
  if (profitMargin >= 25) dealQuality = 'Excellent'
  else if (profitMargin >= 15) dealQuality = 'Good'
  else if (profitMargin >= 10) dealQuality = 'Fair'

  const ltv = hmLoan / pp * 100

  return {
    totalROI,
    annualizedROI,
    totalProfit: netProfit,
    totalCashInvested,
    profitMargin,
    dealQuality,
    mao,
    above70Rule,
    renegotiateTarget,
    ltv,
    holdYears,
  }
}

// ============================================================
// MODE 3: BRRRR
// ============================================================
function calcMode3(inp) {
  const pp = inp.purchasePrice || 0
  const rehab = inp.rehab || 0
  const arv = inp.arv || 0
  const ccPct = (inp.closingCostsPct || 3) / 100
  const refiLTV = (inp.refiLTV || 75) / 100
  const refiRate = inp.refiRate || 8.25
  const refiTerm = inp.refiTerm || 30
  const refiCcPct = (inp.refiClosingPct || 2) / 100
  const holdPost = inp.holdPostRefi || 7
  const rent = inp.monthlyRent || 0
  const vacOpEx = (inp.vacancyOpExCombined || 38) / 100
  const dpPct = (inp.downPayment || 25) / 100

  if (pp <= 0) return null

  const downAmt = pp * dpPct
  const buyCosts = pp * ccPct
  const phase1Cost = downAmt + rehab + buyCosts

  const refiProceeds = arv > 0 ? arv * refiLTV : pp * refiLTV
  const refiCosts = refiProceeds * refiCcPct
  const capitalRecovered = refiProceeds - refiCosts

  const originalLoan = pp - downAmt
  const capitalRemaining = phase1Cost - capitalRecovered

  const infiniteROI = capitalRemaining <= 0

  const refiAmort = buildAmortSchedule(refiProceeds, refiRate, refiTerm)
  const annualDebtPost = refiAmort.monthlyPI * 12
  const annualRent = rent * 12
  const noi = annualRent * (1 - vacOpEx)
  const year1PostRefiCF = noi - annualDebtPost
  const cocOnRemaining = capitalRemaining > 0 ? year1PostRefiCF / capitalRemaining * 100 : null

  const capitalPayback = capitalRemaining > 0 && year1PostRefiCF > 0 ? capitalRemaining / year1PostRefiCF : null

  const ltv = refiProceeds / (arv || pp) * 100

  return {
    infiniteROI,
    capitalRecovered,
    capitalRemaining,
    cocOnRemaining,
    year1PostRefiCF,
    capitalPayback,
    totalCashInvested: Math.max(0, capitalRemaining),
    ltv,
    phase1Cost,
    refiProceeds,
    annualNOI: noi,
  }
}

// ============================================================
// SCENARIO ADJUSTMENT (conservative / optimistic)
// ============================================================
function calcWithScenario(inp, scenario) {
  const adj = { ...inp }
  if (scenario === 'conservative') {
    adj.mortgageRate = (inp.mortgageRate || 7.5) + 1
    adj.appreciation = Math.max(0, (inp.appreciation || 3.5) - 1)
    adj.vacancy = Math.min(50, (inp.vacancy || 8) + 5)
    adj.rehab = Math.round((inp.rehab || 0) * 1.2)
    adj.hardMoneyRate = (inp.hardMoneyRate || 12) + 1.5
    adj.refiRate = (inp.refiRate || 8.25) + 1
  } else if (scenario === 'optimistic') {
    adj.mortgageRate = Math.max(1, (inp.mortgageRate || 7.5) - 0.5)
    adj.appreciation = (inp.appreciation || 3.5) + 1
    adj.vacancy = Math.max(0, (inp.vacancy || 8) - 3)
    adj.hardMoneyRate = Math.max(1, (inp.hardMoneyRate || 12) - 1)
    adj.refiRate = Math.max(1, (inp.refiRate || 8.25) - 0.5)
  }
  return adj
}

function getROIForMode(mode, inp) {
  if (mode === 1) { const r = calcMode1(inp); return r ? r.totalROIAnnualized : null }
  if (mode === 2) { const r = calcMode2(inp); return r ? r.annualizedROI : null }
  if (mode === 3) { const r = calcMode3(inp); if (!r) return null; return r.infiniteROI ? Infinity : r.cocOnRemaining }
  return null
}

// ============================================================
// VERDICT
// ============================================================
function computeBaseVerdict(roi, mode, result) {
  if (mode === 3 && result && result.infiniteROI) return 'INFINITE'
  if (roi === null || roi === undefined) return null
  if (roi >= 18) return 'STRONG'
  if (roi >= 12) return 'GOOD'
  if (roi >= 8) return 'MARGINAL'
  if (roi >= 4) return 'WEAK'
  if (roi >= 0) return 'PASS'
  return 'LOSS'
}

// ============================================================
// RISK SCORE
// ============================================================
function computeRiskScore5(ltv, margin, sensitivity, appreciationDep, holdYears, mode) {
  let score = 0
  score += ltv <= 70 ? 0 : ltv <= 80 ? 1 : 2
  if (mode === 2) {
    score += margin > 25 ? 0 : margin >= 15 ? 1 : 2
  } else {
    score += margin > 8 ? 0 : margin >= 4 ? 1 : 2
  }
  score += sensitivity === 'profitable' ? 0 : sensitivity === 'breakeven' ? 1 : 2
  score += appreciationDep < 0.4 ? 0 : appreciationDep <= 0.7 ? 1 : 2
  if (mode === 2) {
    score += margin < 10 ? 2 : margin < 15 ? 1 : 0
  } else {
    score += (holdYears >= 5 && holdYears <= 10) ? 0 : 1
  }
  return Math.min(score, 10)
}

// ============================================================
// STABILITY
// ============================================================
function computeStability(baseROI, conservROI, optimROI) {
  if (conservROI === null) return 'MEDIUM'
  if (conservROI < 0) return 'LOW'
  const spread = (optimROI || baseROI) - (conservROI || baseROI)
  const baseVerd = computeBaseVerdict(baseROI, 1, null)
  const conservVerd = computeBaseVerdict(conservROI, 1, null)
  const verdictOrder = ['INFINITE', 'STRONG', 'GOOD', 'MARGINAL', 'WEAK', 'PASS', 'LOSS']
  const diff = Math.abs(verdictOrder.indexOf(baseVerd) - verdictOrder.indexOf(conservVerd))
  if (diff >= 3 || spread > 15) return 'LOW'
  if (diff >= 2 || spread > 8) return 'MEDIUM'
  return 'HIGH'
}

// ============================================================
// CONFIDENCE SCORE
// ============================================================
function computeConfidenceScore(inp, mode) {
  let score = 0
  if (inp.purchasePrice) score += 2
  if (inp.monthlyRent && mode !== 2) score += 2
  if (inp.arv && (mode === 2 || mode === 3)) score += 2
  if (inp.rehab && inp.rehab > 0) score += 1
  if (inp.hoaMonthly && inp.hoaMonthly > 0) score += 1
  if (inp.insurance && inp.insurance !== 1800) score += 1
  return Math.min(score, 9)
}

// ============================================================
// STRATEGY WINNER (Mode 4)
// ============================================================
function computeStrategyWinner(r1, r2, r3) {
  if (!r1 && !r2 && !r3) return null
  if (r3 && r3.infiniteROI) return 'BRRRR'
  const roi1 = r1 ? r1.totalROIAnnualized : -Infinity
  const roi2 = r2 ? r2.annualizedROI : -Infinity
  const roi3 = (r3 && !r3.infiniteROI && r3.cocOnRemaining !== null) ? r3.cocOnRemaining : -Infinity
  const max = Math.max(roi1, roi2, roi3)
  const TIE_THRESHOLD = 3
  const candidates = []
  if (roi1 >= max - TIE_THRESHOLD && roi1 > -100) candidates.push('Rental')
  if (roi2 >= max - TIE_THRESHOLD && roi2 > -100) candidates.push('Flip')
  if (roi3 >= max - TIE_THRESHOLD && roi3 > -100) candidates.push('BRRRR')
  if (candidates.length > 1) return 'TIE: ' + candidates.join(' & ')
  if (roi1 === max && roi1 > -100) return 'Rental'
  if (roi2 === max && roi2 > -100) return 'Flip'
  if (roi3 === max && roi3 > -100) return 'BRRRR'
  return null
}

// ============================================================
// SENSITIVITY TEST
// ============================================================
function testSensitivity(mode, inp) {
  const stressInp = { ...inp, monthlyRent: ((inp.monthlyRent || 0) * 0.9) }
  const roi = getROIForMode(mode === 4 ? 1 : mode, stressInp)
  if (roi === null) return 'unknown'
  if (roi > 2) return 'profitable'
  if (roi >= -2) return 'breakeven'
  return 'loss'
}

// ============================================================
// MAIN DECISION METRICS COMPUTED
// ============================================================
const dm = computed(() => {
  const inp = inputs.value
  const mode = currentMode.value
  if (!inp.purchasePrice || inp.purchasePrice <= 0) return null

  let r1 = null, r2 = null, r3 = null, primaryResult = null, primaryROI = null

  if (mode === 1 || mode === 4) r1 = calcMode1(inp)
  if (mode === 2 || mode === 4) r2 = calcMode2(inp)
  if (mode === 3 || mode === 4) r3 = calcMode3(inp)

  if (mode === 1) { primaryResult = r1; primaryROI = r1 ? r1.totalROIAnnualized : null }
  else if (mode === 2) { primaryResult = r2; primaryROI = r2 ? r2.annualizedROI : null }
  else if (mode === 3) {
    primaryResult = r3
    primaryROI = r3 ? (r3.infiniteROI ? Infinity : r3.cocOnRemaining) : null
  } else if (mode === 4) {
    const winner = computeStrategyWinner(r1, r2, r3)
    if (winner && winner.includes('BRRRR')) { primaryResult = r3; primaryROI = r3 ? (r3.infiniteROI ? Infinity : r3.cocOnRemaining) : null }
    else if (winner && winner.includes('Flip')) { primaryResult = r2; primaryROI = r2 ? r2.annualizedROI : null }
    else { primaryResult = r1; primaryROI = r1 ? r1.totalROIAnnualized : null }
  }

  const conservInp = calcWithScenario(inp, 'conservative')
  const optimInp = calcWithScenario(inp, 'optimistic')
  const modeForScenario = mode === 4 ? 1 : mode
  const conservROI = getROIForMode(modeForScenario, conservInp)
  const optimROI = getROIForMode(modeForScenario, optimInp)
  const baseForScenario = mode === 4 ? (r1 ? r1.totalROIAnnualized : null) : primaryROI

  let verdict = computeBaseVerdict(primaryROI === Infinity ? 999 : primaryROI, mode, primaryResult)

  const holdYears = mode === 2 ? ((inp.holdingMonths || 6) / 12) : (mode === 3 ? (inp.holdPostRefi || 7) : (inp.holdPeriod || 7))
  const capitalPayback = primaryResult ? (primaryResult.capitalPayback || null) : null
  const capitalPaybackFlag = capitalPayback !== null && isFinite(capitalPayback) && capitalPayback > holdYears

  const ltv = primaryResult ? (primaryResult.ltv || 80) : 80
  const margin = mode === 2 ? (r2 ? r2.profitMargin : 0) : (primaryResult ? (primaryResult.cashOnCash || primaryResult.cocOnRemaining || 0) : 0)
  const sensitivity = testSensitivity(mode, inp)
  const appreciationDep = (mode !== 2 && r1) ? (r1.appreciationShare || 0) : 0.5
  let riskScore = computeRiskScore5(ltv, margin, sensitivity, appreciationDep, holdYears, mode)
  if (capitalPaybackFlag) riskScore = Math.min(10, riskScore + 1)

  const stability = computeStability(isFinite(baseForScenario) ? baseForScenario : 99, isFinite(conservROI) ? conservROI : null, isFinite(optimROI) ? optimROI : null)

  const confidenceScore = computeConfidenceScore(inp, mode)
  const confidenceTier = confidenceScore >= 7 ? 'HIGH' : confidenceScore >= 4 ? 'MEDIUM' : 'LOW'

  if (stability === 'LOW') verdict = 'DO_NOT_PROCEED'
  else if (capitalPaybackFlag) {
    const ORDER = ['DO_NOT_PROCEED', 'LOSS', 'PASS', 'WEAK', 'MARGINAL', 'GOOD', 'STRONG', 'INFINITE']
    const marginalIdx = ORDER.indexOf('MARGINAL')
    const verdictIdx = ORDER.indexOf(verdict)
    if (verdictIdx > marginalIdx) verdict = 'MARGINAL'
  }

  const verdictStyles = {
    INFINITE: { bg: 'bg-green-50', border: 'border-green-300', text: 'text-green-700', muted: 'text-green-500' },
    STRONG: { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-700', muted: 'text-blue-500' },
    GOOD: { bg: 'bg-indigo-50', border: 'border-indigo-300', text: 'text-indigo-700', muted: 'text-indigo-500' },
    MARGINAL: { bg: 'bg-amber-50', border: 'border-amber-300', text: 'text-amber-700', muted: 'text-amber-500' },
    WEAK: { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-700', muted: 'text-orange-500' },
    PASS: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-600', muted: 'text-red-400' },
    LOSS: { bg: 'bg-red-100', border: 'border-red-400', text: 'text-red-700', muted: 'text-red-500' },
    DO_NOT_PROCEED: { bg: 'bg-gray-100', border: 'border-gray-400', text: 'text-gray-700', muted: 'text-gray-500' },
  }
  const verdictLabels = {
    INFINITE: 'Infinite ROI', STRONG: 'Strong', GOOD: 'Good', MARGINAL: 'Marginal',
    WEAK: 'Weak', PASS: 'Pass', LOSS: 'Loss', DO_NOT_PROCEED: 'Do Not Proceed',
  }

  const riskStyles = {
    low: { text: 'text-green-600', bar: 'bg-green-500', label: 'Low Risk' },
    moderate: { text: 'text-yellow-600', bar: 'bg-yellow-500', label: 'Moderate Risk' },
    high: { text: 'text-orange-600', bar: 'bg-orange-500', label: 'High Risk' },
    extreme: { text: 'text-red-600', bar: 'bg-red-500', label: 'Extreme Risk' },
  }
  const riskTier = riskScore <= 3 ? 'low' : riskScore <= 5 ? 'moderate' : riskScore <= 7 ? 'high' : 'extreme'

  const stabilityStyles = {
    HIGH: { text: 'text-green-600' },
    MEDIUM: { text: 'text-yellow-600' },
    LOW: { text: 'text-red-600' },
  }
  const confidenceStyles = {
    HIGH: { text: 'text-green-600' },
    MEDIUM: { text: 'text-yellow-600' },
    LOW: { text: 'text-red-600' },
  }

  const actionStyles = {
    INFINITE: { bg: 'bg-green-50', border: 'border-green-200', title: 'text-green-800', text: 'text-green-700' },
    STRONG: { bg: 'bg-blue-50', border: 'border-blue-200', title: 'text-blue-800', text: 'text-blue-700' },
    GOOD: { bg: 'bg-indigo-50', border: 'border-indigo-200', title: 'text-indigo-800', text: 'text-indigo-700' },
    MARGINAL: { bg: 'bg-amber-50', border: 'border-amber-200', title: 'text-amber-800', text: 'text-amber-700' },
    WEAK: { bg: 'bg-orange-50', border: 'border-orange-200', title: 'text-orange-800', text: 'text-orange-700' },
    PASS: { bg: 'bg-red-50', border: 'border-red-200', title: 'text-red-800', text: 'text-red-700' },
    LOSS: { bg: 'bg-red-100', border: 'border-red-300', title: 'text-red-900', text: 'text-red-800' },
    DO_NOT_PROCEED: { bg: 'bg-gray-100', border: 'border-gray-300', title: 'text-gray-800', text: 'text-gray-700' },
  }

  let primaryROIDisplay = 'N/A'
  let primaryROILabel = 'Annualized ROI'
  let roiColor = 'text-gray-800'
  if (mode === 3 && r3 && r3.infiniteROI) {
    primaryROIDisplay = '∞ (Infinite)'
    roiColor = 'text-green-600'
    primaryROILabel = 'ROI'
  } else if (primaryROI !== null && isFinite(primaryROI)) {
    primaryROIDisplay = fmt1(primaryROI) + '%'
    roiColor = primaryROI >= 12 ? 'text-green-600' : primaryROI >= 8 ? 'text-yellow-600' : primaryROI >= 0 ? 'text-orange-600' : 'text-red-600'
  }

  let strategyWinner = null
  let strategyComparison = null
  if (mode === 4) {
    strategyWinner = computeStrategyWinner(r1, r2, r3)
    strategyComparison = [
      { name: 'Rental', roiDisplay: r1 ? fmt1(r1.totalROIAnnualized) + '%' : 'N/A', roiVal: r1 ? r1.totalROIAnnualized : -999, winner: strategyWinner && strategyWinner.includes('Rental') },
      { name: 'Fix & Flip', roiDisplay: r2 ? fmt1(r2.annualizedROI) + '%' : 'N/A', roiVal: r2 ? r2.annualizedROI : -999, winner: strategyWinner && strategyWinner.includes('Flip') },
      { name: 'BRRRR', roiDisplay: r3 ? (r3.infiniteROI ? '∞ Infinite' : (r3.cocOnRemaining !== null ? fmt1(r3.cocOnRemaining) + '%' : 'N/A')) : 'N/A', roiVal: r3 ? (r3.infiniteROI ? 999 : (r3.cocOnRemaining || -999)) : -999, winner: strategyWinner && strategyWinner.includes('BRRRR') },
    ]
  }

  const scenarios = [
    { label: 'Conservative', roiVal: isFinite(conservROI) ? conservROI : -999, display: conservROI !== null && isFinite(conservROI) ? fmt1(conservROI) + '%' : 'N/A' },
    { label: 'Base', roiVal: isFinite(baseForScenario) ? baseForScenario : 0, display: baseForScenario !== null && isFinite(baseForScenario) ? fmt1(baseForScenario) + '%' : 'N/A' },
    { label: 'Optimistic', roiVal: isFinite(optimROI) ? optimROI : 0, display: optimROI !== null && isFinite(optimROI) ? fmt1(optimROI) + '%' : 'N/A' },
  ]

  return {
    verdict,
    verdictLabel: verdictLabels[verdict] || verdict,
    verdictStyle: verdictStyles[verdict] || verdictStyles.MARGINAL,
    primaryROI: isFinite(primaryROI) ? primaryROI : null,
    primaryROIDisplay,
    primaryROILabel,
    roiColor,
    cashOnCash: primaryResult ? (primaryResult.cashOnCash || null) : null,
    capRate: r1 ? r1.capRate : null,
    irr: r1 ? r1.irr : null,
    totalProfit: primaryResult ? primaryResult.totalProfit : null,
    totalCashInvested: primaryResult ? primaryResult.totalCashInvested : null,
    totalCapitalReturned: primaryResult ? (primaryResult.totalCapitalReturned || null) : null,
    equityMultiple: r1 ? r1.equityMultiple : null,
    capitalPayback: isFinite(capitalPayback) ? capitalPayback : null,
    capitalPaybackFlag,
    ltv,
    riskScore,
    riskLabel: riskStyles[riskTier].label,
    riskStyle: riskStyles[riskTier],
    stability,
    stabilityStyle: stabilityStyles[stability] || stabilityStyles.MEDIUM,
    confidenceScore,
    confidenceTier,
    confidenceStyle: confidenceStyles[confidenceTier] || confidenceStyles.MEDIUM,
    actionStyle: actionStyles[verdict] || actionStyles.MARGINAL,
    strategyWinner,
    strategyComparison,
    scenarios,
    r1, r2, r3,
    holdYears,
    sensitivity,
    appreciationDep,
    conservROI,
    optimROI,
  }
})

// ============================================================
// DECISION CONTENT
// ============================================================
const dc = computed(() => {
  if (!dm.value) return {}
  const d = dm.value
  const { verdict, riskScore, stability, confidenceTier, capitalPaybackFlag } = d

  let riskPrefix = riskScore <= 3 ? 'Low-risk ' : ''
  const verdictPhrases = {
    INFINITE: 'infinite-ROI BRRRR', STRONG: 'strong performer', GOOD: 'good investment',
    MARGINAL: 'marginal deal', WEAK: 'below-target deal', PASS: 'below-threshold return',
    LOSS: 'loss projection', DO_NOT_PROCEED: 'structurally unstable deal',
  }
  let verdictPhrase = verdictPhrases[verdict] || verdict
  let riskSuffix = riskScore >= 7 ? ' with high risk' : ''

  let actionDirective
  if (stability === 'LOW') actionDirective = 'do not proceed at these inputs'
  else if (capitalPaybackFlag) actionDirective = 'capital not recovered within hold; reduce purchase or extend hold'
  else if (confidenceTier === 'LOW') actionDirective = 'verify assumptions before committing'
  else if (['LOSS', 'PASS', 'DO_NOT_PROCEED'].includes(verdict)) actionDirective = 'do not proceed at these inputs; see Action block'
  else if (['STRONG', 'GOOD', 'INFINITE'].includes(verdict) && riskScore >= 7) actionDirective = `proceed only if you can manage ${verdict === 'INFINITE' ? 'refi and lease-up' : 'execution'} risks`
  else if (['STRONG', 'GOOD', 'INFINITE'].includes(verdict)) actionDirective = 'proceed with confidence'
  else actionDirective = 'proceed with caution'

  const finalDecisionLine = `${riskPrefix}${verdictPhrase}${riskSuffix} — ${actionDirective}`

  const riskContextMap = {
    low: 'This deal has low structural risk. LTV, margins, and hold period are in optimal range.',
    moderate: 'Moderate risk. Monitor rent performance and keep reserves for unexpected expenses.',
    high: 'High risk profile. One or more key factors are outside comfortable ranges. Proceed with caution.',
    extreme: 'Extreme risk. Multiple factors signal danger. Reconsider deal structure before proceeding.',
  }
  const riskTier = riskScore <= 3 ? 'low' : riskScore <= 5 ? 'moderate' : riskScore <= 7 ? 'high' : 'extreme'
  const riskContext = riskContextMap[riskTier]

  const stabilityContextMap = {
    HIGH: 'Scenarios converge. Deal holds across market conditions.',
    MEDIUM: 'Some divergence between scenarios. Manage downside risk.',
    LOW: 'Conservative scenario shows a loss. Deal is fragile.',
  }
  const stabilityContext = stabilityContextMap[stability] || ''

  const confidenceContextMap = {
    HIGH: 'Good data quality. Results are reliable.',
    MEDIUM: 'Key inputs present. Verify rent and expenses.',
    LOW: 'Few inputs entered. Results are rough estimates.',
  }
  const confidenceContext = confidenceContextMap[confidenceTier] || ''

  const actionMap = {
    INFINITE: { text: 'Excellent BRRRR execution. All capital recovered. Focus on tenant quality and post-refi cash flow management.', items: ['Lock in DSCR financing rate', 'Screen tenants carefully', 'Build 6-month cash reserve'] },
    STRONG: { text: 'Strong deal. Proceed with confidence. Optimize for tax efficiency and property management.', items: ['Document all income/expenses', 'Consider cost segregation study', 'Establish management systems early'] },
    GOOD: { text: 'Solid investment. Proceed after confirming rent estimates with local comparables.', items: ['Verify rent with 3+ comps', 'Get insurance quote', 'Confirm contractor bids'] },
    MARGINAL: { text: 'Deal is marginal. Negotiate purchase price down or find ways to increase rent / reduce expenses.', items: ['Target 5% price reduction', 'Get second rent estimate', 'Reduce operating expense assumptions'] },
    WEAK: { text: 'Returns are below target. Do not proceed unless you can significantly improve at least one key input.', items: ['Negotiate purchase price down 10%+', 'Find higher-rent tenant mix', 'Consider different strategy (BRRRR/Flip)'] },
    PASS: { text: 'Returns too low to justify risk. Walk away or renegotiate substantially.', items: ['Pass on this deal', 'Rerun with 15% lower purchase price', 'Explore alternative markets'] },
    LOSS: { text: 'This deal projects a net loss. Do not proceed under any circumstances with these inputs.', items: ['Do not proceed', 'Review all assumptions for errors', 'If inputs are correct, pass on this deal'] },
    DO_NOT_PROCEED: { text: 'Stability is LOW — scenarios diverge too much. The deal is structurally fragile regardless of the base ROI number.', items: ['Do not commit capital', 'Review worst-case scenario inputs', 'Identify which assumption is driving instability'] },
  }
  const actionContent = actionMap[verdict] || actionMap.MARGINAL

  const dealContextMap = {
    INFINITE: 'This BRRRR deal achieves the gold standard: all capital recycled back to you through the refinance, leaving a cash-flowing asset with zero net cost basis.',
    STRONG: `This ${d.primaryROIDisplay} annualized return places this deal in the top tier of investment property opportunities. Strong margins provide cushion against market fluctuations.`,
    GOOD: `A ${d.primaryROIDisplay} return is competitive for today's market. With proper management, this deal should outperform most passive alternatives.`,
    MARGINAL: 'This deal falls in the acceptable zone but offers limited upside. Small improvements in rent, expenses, or purchase price would move it to Good territory.',
    WEAK: 'Weak returns suggest overpayment, high expenses, or insufficient rent. The deal needs structural improvement before committing capital.',
    PASS: 'Returns fall below the threshold needed to justify illiquidity, management effort, and transaction costs. Better opportunities likely exist.',
    LOSS: "The numbers don't work at these inputs. Verify all inputs for errors; if correct, this is not an investable deal.",
    DO_NOT_PROCEED: "The wide gap between conservative and optimistic scenarios means this deal's success depends too heavily on things going right. Fix the fragile assumptions first.",
  }
  const dealContext = dealContextMap[verdict] || ''

  let strategyContext = ''
  if (d.strategyWinner) {
    if (d.strategyWinner.includes('BRRRR')) strategyContext = 'BRRRR dominates due to capital recovery via refinance. Infinite ROI auto-wins when all capital is returned.'
    else if (d.strategyWinner.includes('Flip')) strategyContext = 'Flipping wins on speed of capital return. Short hold + strong margins = high annualized ROI.'
    else if (d.strategyWinner.includes('Rental')) strategyContext = 'Buy-and-hold rental wins on long-term compounding of income, equity, and appreciation.'
    else if (d.strategyWinner.includes('TIE')) strategyContext = 'Strategies are within 3% of each other. Choose based on your capital needs, tax situation, and time commitment.'
  }

  return {
    finalDecisionLine,
    riskContext,
    stabilityContext,
    confidenceContext,
    actionBlock: actionContent.text,
    actionItems: actionContent.items,
    dealContext,
    strategyContext,
  }
})

// ============================================================
// SAVED SCENARIOS
// ============================================================
const STORAGE_KEY = 'real-estate-roi-scenarios'
const MAX_SCENARIOS = 20
const savedScenarios = ref([])

function saveScenario() {
  if (!dm.value) return
  const d = dm.value
  const scenario = {
    id: Date.now(),
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    name: `${modeLabel(currentMode.value)} · $${Math.round((inputs.value.purchasePrice || 0) / 1000)}k`,
    mode: currentMode.value,
    inputs: { ...inputs.value },
    roi: isFinite(d.primaryROI) ? d.primaryROI : null,
    verdict: d.verdictLabel,
    riskScore: d.riskScore,
    cashInvested: d.totalCashInvested || 0,
  }
  const existing = [...savedScenarios.value]
  existing.unshift(scenario)
  if (existing.length > MAX_SCENARIOS) existing.length = MAX_SCENARIOS
  savedScenarios.value = existing
  if (process.client) localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
}

function loadScenario(scenario) {
  currentMode.value = scenario.mode
  inputs.value = { ...inputs.value, ...scenario.inputs }
}

function deleteScenario(id) {
  if (!confirm('Delete this scenario?')) return
  const updated = savedScenarios.value.filter(s => s.id !== id)
  savedScenarios.value = updated
  if (process.client) localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
}

// ============================================================
// URL PARAM IMPORT + MOUNT
// ============================================================
onMounted(() => {
  if (process.client) {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) savedScenarios.value = JSON.parse(stored)
    } catch {}

    const params = new URLSearchParams(window.location.search)
    const map = {
      p: 'purchasePrice', rh: 'rehab', dp: 'downPayment', lr: 'mortgageRate',
      lt: 'loanTerm', r: 'monthlyRent', vc: 'vacancy', op: 'opEx',
      hp: 'holdPeriod', arv: 'arv', hm: 'holdingMonths', mode: null,
    }
    const newInputs = { ...inputs.value }
    let hasParams = false
    for (const [key, inputKey] of Object.entries(map)) {
      if (params.has(key)) {
        hasParams = true
        const val = parseFloat(params.get(key))
        if (!isNaN(val)) {
          if (key === 'mode') currentMode.value = val
          else if (inputKey) newInputs[inputKey] = val
        }
      }
    }
    if (hasParams) inputs.value = newInputs
  }
})

// ============================================================
// SHARE URL
// ============================================================
function copyShareableURL() {
  if (!process.client) return
  const inp = inputs.value
  const params = new URLSearchParams()
  if (inp.purchasePrice) params.set('p', inp.purchasePrice)
  if (inp.rehab) params.set('rh', inp.rehab)
  if (inp.downPayment !== 25) params.set('dp', inp.downPayment)
  if (inp.mortgageRate !== 7.5) params.set('lr', inp.mortgageRate)
  if (inp.loanTerm !== 30) params.set('lt', inp.loanTerm)
  if (inp.monthlyRent) params.set('r', inp.monthlyRent)
  if (inp.vacancy !== 8) params.set('vc', inp.vacancy)
  if (inp.opEx !== 30) params.set('op', inp.opEx)
  if (inp.holdPeriod !== 7) params.set('hp', inp.holdPeriod)
  if (inp.arv) params.set('arv', inp.arv)
  if (inp.holdingMonths !== 6) params.set('hm', inp.holdingMonths)
  params.set('mode', currentMode.value)
  const url = `${window.location.origin}/real-estate-roi-calculator?${params.toString()}`
  navigator.clipboard.writeText(url).then(() => alert('Link copied to clipboard!')).catch(() => {})
}

// ============================================================
// PDF EXPORT
// ============================================================
async function exportPDF() {
  if (!process.client || !dm.value) return
  try {
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
    const d = dm.value
    const inp = inputs.value
    const pageW = 210

    doc.setFillColor(30, 58, 95)
    doc.rect(0, 0, pageW, 28, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('Real Estate ROI Calculator', 14, 12)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text(`Strategy: ${modeLabel(currentMode.value)} | Generated: ${new Date().toLocaleDateString()} | arvcalc.com`, 14, 22)

    doc.setFillColor(240, 253, 244)
    doc.rect(14, 34, 182, 18, 'F')
    doc.setTextColor(22, 101, 52)
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text(`VERDICT: ${d.verdictLabel}`, 20, 44)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(50, 50, 50)
    doc.text(dc.value.finalDecisionLine || '', 20, 50)

    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(30, 58, 95)
    doc.text('Key Metrics', 14, 62)
    doc.setDrawColor(200, 200, 200)
    doc.line(14, 64, 196, 64)

    const metrics = [
      ['Annualized ROI', d.primaryROIDisplay],
      ['Cash-on-Cash', d.cashOnCash !== null ? fmt1(d.cashOnCash) + '%' : 'N/A'],
      ['Cap Rate', d.capRate !== null ? fmt1(d.capRate) + '%' : 'N/A'],
      ['IRR', d.irr !== null ? fmt1(d.irr) + '%' : 'N/A'],
      ['Total Profit', d.totalProfit !== null ? fmtDollar(d.totalProfit) : 'N/A'],
      ['Equity Multiple', d.equityMultiple !== null ? fmt2(d.equityMultiple) + 'x' : 'N/A'],
      ['Capital Payback', d.capitalPayback !== null ? fmt1(d.capitalPayback) + ' yrs' : 'N/A'],
      ['Total Cash Invested', d.totalCashInvested !== null ? fmtDollar(d.totalCashInvested) : 'N/A'],
      ['Risk Score', `${d.riskScore}/10 (${d.riskLabel})`],
      ['Stability', d.stability],
      ['Confidence', `${d.confidenceTier} (${d.confidenceScore}/9)`],
    ]

    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(50, 50, 50)
    let y = 70
    metrics.forEach(([label, val], i) => {
      if (i % 2 === 0) {
        doc.setFillColor(248, 250, 252)
        doc.rect(14, y - 4, 182, 7, 'F')
      }
      doc.setFont('helvetica', 'bold')
      doc.text(label + ':', 16, y)
      doc.setFont('helvetica', 'normal')
      doc.text(String(val), 80, y)
      y += 7
    })

    y += 5
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(30, 58, 95)
    doc.text('Action', 14, y)
    doc.line(14, y + 2, 196, y + 2)
    y += 7
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(50, 50, 50)
    const actionLines = doc.splitTextToSize(dc.value.actionBlock || '', 180)
    doc.text(actionLines, 14, y)
    y += actionLines.length * 5 + 5

    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(30, 58, 95)
    doc.text('Inputs Used', 14, y)
    doc.line(14, y + 2, 196, y + 2)
    y += 7
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(50, 50, 50)
    const inputPairs = [
      ['Purchase Price', fmtDollar(inp.purchasePrice)],
      ['Rehab', fmtDollar(inp.rehab || 0)],
      ['Down Payment', (inp.downPayment || 25) + '%'],
      ['Mortgage Rate', (inp.mortgageRate || 7.5) + '%'],
      ['Monthly Rent', inp.monthlyRent ? fmtDollar(inp.monthlyRent) : 'N/A'],
      ['ARV', inp.arv ? fmtDollar(inp.arv) : 'N/A'],
    ]
    inputPairs.forEach(([lbl, val], i) => {
      if (i % 2 === 0 && y + 7 < 270) {
        doc.text(lbl + ': ' + val, 16, y)
        if (inputPairs[i + 1]) doc.text(inputPairs[i + 1][0] + ': ' + inputPairs[i + 1][1], 105, y)
        y += 6
      }
    })

    y = 282
    doc.setFontSize(7)
    doc.setTextColor(150, 150, 150)
    doc.text('For informational purposes only. Not financial advice. Consult a licensed professional before investing. arvcalc.com', 14, y)

    doc.save('real-estate-roi-analysis.pdf')
  } catch (e) {
    console.error('PDF export failed:', e)
  }
}

// ============================================================
// FAQ DATA
// ============================================================
const faqs = reactive([
  {
    q: 'What is a good ROI for real estate investment?',
    a: 'A strong annualized real estate ROI is generally 12–18%+. Cash-on-cash returns of 8–12% are considered good for rental properties in 2026. However, acceptable returns depend on your market, risk tolerance, and capital cost. Our calculator provides a contextual Verdict based on your specific inputs rather than one-size-fits-all thresholds.',
    open: false,
  },
  {
    q: 'How is real estate ROI different from cap rate?',
    a: "Cap rate measures a property's income yield independent of financing (NOI ÷ Purchase Price). ROI measures your personal investment return including your specific financing structure, hold period, appreciation, tax benefits, and sale proceeds. Two investors buying the same property can have very different ROIs based on their down payment, loan terms, and hold period.",
    open: false,
  },
  {
    q: 'What does "infinite ROI" mean in the BRRRR strategy?',
    a: 'Infinite ROI occurs when a cash-out refinance after BRRRR rehabilitation returns all of your initial invested capital, leaving you with zero net cost basis in a cash-flowing rental property. Because you have zero dollars remaining at risk, the mathematical ROI is infinite. Our calculator triggers this when capital remaining after the refi is ≤ $0.',
    open: false,
  },
  {
    q: 'How does the Risk Score work?',
    a: 'Our Risk Score (0–10, lower is safer) evaluates 5 factors: LTV ratio (0–2 pts), profit margin or cash-on-cash yield (0–2 pts), sensitivity to rent changes (0–2 pts), appreciation dependency (0–2 pts), and hold period appropriateness (0–1 pt). An additional +1 is added if capital payback exceeds your hold period. Scores 0–3 = Low Risk, 4–5 = Moderate, 6–7 = High, 8–10 = Extreme.',
    open: false,
  },
  {
    q: 'What is the 70% Rule for house flipping?',
    a: "The 70% Rule states: Maximum Allowable Offer (MAO) = ARV × 70% − Rehab Costs. If your purchase price is below MAO, the deal has sufficient margin for profit and contingencies. It's a quick filter, not a guarantee — actual profitability depends on your specific financing costs, holding period, and selling costs. Our flip calculator shows your MAO alongside full profitability analysis.",
    open: false,
  },
  {
    q: 'Why might the Verdict be DO NOT PROCEED even if my ROI looks good?',
    a: 'DO NOT PROCEED is triggered by our governance rule when Stability = LOW — meaning the conservative scenario (higher rate, lower appreciation, higher vacancy) produces a significant loss. This indicates the deal is fragile and depends too heavily on optimistic assumptions. A 15% annualized ROI means nothing if a modest rent decline turns it into a loss. Fix the fragile input (usually purchase price, rent, or rehab estimate) first.',
    open: false,
  },
  {
    q: 'What is capital payback period and why does it matter?',
    a: 'Capital payback measures how many years of accumulated cash flow are needed to return your initial invested capital — without relying on the eventual sale. If capital payback exceeds your hold period, you need the sale to recover your investment. Our system caps the Verdict at MARGINAL in this case, regardless of total ROI, because exit-dependent returns carry higher execution risk.',
    open: false,
  },
  {
    q: 'Should I use conventional or DSCR financing for rental properties?',
    a: 'Conventional loans (typically 7.5% for investment properties in 2026) offer lower rates but require income documentation, DTI qualification, and limit investors to 10 financed properties. DSCR loans (typically 8.25%) qualify based on property cash flow, making them popular for self-employed investors or those with many properties. DSCR has no income documentation requirement but slightly higher rates and often requires 1.0–1.25x debt service coverage.',
    open: false,
  },
  {
    q: 'How accurate are the default operating expense percentages?',
    a: 'Our default 30% operating expense ratio reflects a typical single-family rental excluding debt service. This covers maintenance (8%), property management (10%), and reserves (12%). Multi-family properties often run 35–45%. Properties with high HOA, frequent repairs, or intensive management may run 40–50%. Always adjust based on your specific property and management situation.',
    open: false,
  },
  {
    q: 'Can I compare multiple deal scenarios side by side?',
    a: 'Yes. Use the "Save Scenario" button to store up to 20 analyses in your browser. Saved scenarios appear in the panel below the calculator with key metrics at a glance. Click "Compare All" to open all saved scenarios in the Deal Comparison tool for side-by-side analysis across all metrics.',
    open: false,
  },
])

// ============================================================
// RELATED CALCULATORS
// ============================================================
const relatedCalcs = [
  { href: '/cap-rate-calculator', title: 'Cap Rate Calculator', desc: 'NOI-based cap rate analysis', icon: '📊', bg: '#e8f0fe' },
  { href: '/cash-on-cash-calculator', title: 'Cash-on-Cash Return', desc: 'Annual cash yield on invested capital', icon: '💵', bg: '#fef3c7' },
  { href: '/arv-calculator', title: 'ARV Calculator', desc: 'After-repair value estimation', icon: '🏠', bg: '#f0fdf4' },
  { href: '/brrrr-calculator', title: 'BRRRR Calculator', desc: 'Full BRRRR strategy analysis', icon: '🔄', bg: '#ecfdf5' },
  { href: '/dscr-calculator', title: 'DSCR Calculator', desc: 'Debt service coverage ratio', icon: '📋', bg: '#fdf4ff' },
  { href: '/fix-and-flip-calculator', title: 'Fix & Flip Calculator', desc: 'Detailed flip profit analysis', icon: '🔨', bg: '#fff7ed' },
  { href: '/noi-calculator', title: 'NOI Calculator', desc: 'Net operating income', icon: '🧮', bg: '#eff6ff' },
  { href: '/compare-deals', title: 'Compare Deals', desc: 'Side-by-side deal comparison', icon: '⚖️', bg: '#f8fafc' },
]
</script>
