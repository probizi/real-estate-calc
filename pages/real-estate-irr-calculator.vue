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
            <li class="text-gray-700 font-semibold">Real Estate IRR Calculator</li>
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
            Real Estate IRR Calculator — Calculate Investment Return Over Time (2026)
          </h1>
          <p class="mt-2 text-base text-gray-600 max-w-3xl">
            Calculate the annualized internal rate of return (IRR) for any real estate investment. Build a full cash-flow timeline, model exit proceeds, and stress-test your deal across three scenarios.
          </p>
        </div>
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#what-is-irr" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is IRR</a></li>
            <li><a href="#irr-vs-roi" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">IRR vs ROI</a></li>
            <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            <li><a href="#sensitivity" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Sensitivity</a></li>
            <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
            <li><a href="#edge-cases" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Edge Cases</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
          </ul>
          <div class="md:hidden">
            <ul class="flex flex-col gap-y-2">
              <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
              <li><a href="#what-is-irr" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is IRR</a></li>
              <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            </ul>
            <ul v-show="isNavExpanded" class="flex flex-col gap-y-2 mt-2">
              <li><a href="#irr-vs-roi" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">IRR vs ROI</a></li>
              <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
              <li><a href="#sensitivity" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Sensitivity</a></li>
              <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
              <li><a href="#edge-cases" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Edge Cases</a></li>
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
        <div class="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <svg class="w-4 h-4 flex-shrink-0" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
          </svg>
          <span>IRR</span>
        </div>
        <div class="flex items-center gap-3">
          <template v-if="calcMode === 'standard'">
            <span v-if="hasResult && irrValue !== null" class="text-2xl font-extrabold leading-none" :style="`color: ${verdict?.bg}`">
              {{ irrValue.toFixed(2) }}%
            </span>
            <span v-else-if="hasResult && irrValue === null" class="text-sm font-bold text-gray-500">Not Available</span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="verdict" class="text-xs font-bold px-2.5 py-1 rounded-full text-white" :style="`background: ${verdict.bg}`">
              {{ verdict.label }}
            </span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields</span>
          </template>
          <template v-else-if="calcMode === 'find-cf'">
            <span v-if="requiredCF !== null" class="text-xl font-extrabold leading-none text-blue-700">
              {{ formatCurrency(requiredCF) }}/yr
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
          </template>
          <template v-else>
            <span v-if="requiredSalePrice" class="text-xl font-extrabold leading-none text-emerald-700">
              {{ formatCurrency(requiredSalePrice.salePrice) }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
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

      <!-- ── MODE TABS ── -->
      <div class="border-b border-gray-100 rounded-t-2xl bg-white">
        <div class="px-5 pt-4 pb-3">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">What do you want to calculate?</p>
          <div class="flex gap-2 flex-wrap">
            <button @click="calcMode = 'standard'"
              class="flex-1 min-w-[140px] px-3 py-2.5 rounded-xl border-2 text-left transition"
              :class="calcMode === 'standard' ? 'border-amber-400 bg-amber-50' : 'border-gray-200 bg-white hover:border-gray-300'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'standard' ? 'color:#1e3a5f;' : 'color:#374151;'">Calculate IRR</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'standard' ? 'text-amber-700' : 'text-gray-400'">From cash flows + exit</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'standard' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-400'">Standard</span>
            </button>
            <button @click="calcMode = 'find-cf'"
              class="flex-1 min-w-[140px] px-3 py-2.5 rounded-xl border-2 text-left transition"
              :class="calcMode === 'find-cf' ? 'border-blue-400 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-cf' ? 'color:#1e3a5f;' : 'color:#374151;'">Find Required Cash Flow</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-cf' ? 'text-blue-700' : 'text-gray-400'">Given target IRR</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-cf' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-400'">Reverse</span>
            </button>
            <button @click="calcMode = 'find-sale'"
              class="flex-1 min-w-[140px] px-3 py-2.5 rounded-xl border-2 text-left transition"
              :class="calcMode === 'find-sale' ? 'border-emerald-400 bg-emerald-50' : 'border-gray-200 bg-white hover:border-gray-300'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-sale' ? 'color:#1e3a5f;' : 'color:#374151;'">Find Required Sale Price</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-sale' ? 'text-emerald-700' : 'text-gray-400'">Given target IRR</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-sale' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-400'">Reverse</span>
            </button>
          </div>
          <div class="mt-2.5">
            <p v-if="calcMode === 'standard'" class="text-xs text-gray-500 leading-relaxed">
              Enter your initial investment, annual cash flow, holding period, and expected sale price. The calculator builds a full timeline and solves for IRR numerically.
            </p>
            <p v-else-if="calcMode === 'find-cf'" class="text-xs text-blue-700 leading-relaxed bg-blue-50 px-3 py-1.5 rounded-lg">
              Enter your investment, holding period, expected sale price, and <strong>target IRR</strong> — the calculator finds the annual cash flow needed to hit that return.
            </p>
            <p v-else class="text-xs text-emerald-700 leading-relaxed bg-emerald-50 px-3 py-1.5 rounded-lg">
              Enter your investment, holding period, annual cash flow, and <strong>target IRR</strong> — the calculator finds the sale price required to achieve that return.
            </p>
          </div>
        </div>
      </div>

      <!-- ── TWO COLUMN BODY ── -->
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch">

        <!-- ════════════════════════════════
             INPUTS (left column)
        ════════════════════════════════ -->
        <div class="border-b lg:border-b-0 lg:border-r border-gray-200 bg-white min-w-0">

          <!-- ── SECTION: Investment Setup ── -->
          <div class="border-b border-gray-100">
            <div class="px-4 py-2.5 bg-gray-50 border-b border-gray-100">
              <h2 class="text-xs font-bold uppercase tracking-wide text-gray-500">Investment Setup</h2>
            </div>
            <div class="px-4 py-3 space-y-3">

              <!-- Initial Cash Invested -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">
                  Initial Cash Invested <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.initialCash" type="number" min="0" step="1000"
                    placeholder="Enter total cash invested at purchase"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Includes down payment, closing costs, initial rehab, and upfront reserves.</p>
              </div>

              <!-- Holding Period -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">
                  Holding Period (years) <span class="text-red-500">*</span>
                </label>
                <input v-model="form.holdingPeriod" type="number" min="1" max="40" step="1"
                  placeholder="Enter planned holding period in years"
                  class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                <p v-if="form.holdingPeriod !== '' && (parsedHoldingPeriod < 1 || parsedHoldingPeriod > 40)"
                  class="text-xs text-red-600 mt-1 font-medium">Must be between 1 and 40 years.</p>
              </div>

              <!-- Scenario Name -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Scenario Name</label>
                <input v-model="form.scenarioName" type="text"
                  placeholder="Optional: name this IRR scenario"
                  class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
              </div>

            </div>
          </div>

          <!-- ── SECTION: Cash Flow (Standard + Find Sale modes) ── -->
          <div v-if="calcMode !== 'find-cf'" class="border-b border-gray-100">
            <div class="px-4 py-2.5 bg-gray-50 border-b border-gray-100">
              <h2 class="text-xs font-bold uppercase tracking-wide text-gray-500">Annual Cash Flow</h2>
            </div>
            <div class="px-4 py-3 space-y-3">

              <!-- Annual Net Cash Flow -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">
                  Annual Net Cash Flow <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.annualCF" type="number" step="100"
                    placeholder="Enter expected annual net cash flow"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">After operating expenses, vacancy, debt service, maintenance, management, and reserves. Can be negative.</p>
              </div>

              <!-- Growth Rate -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Annual Cash Flow Growth Rate</label>
                <div class="relative">
                  <input v-model="form.growthRate" type="number" step="0.1"
                    placeholder="Optional: annual cash flow growth rate"
                    class="w-full px-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
                <p v-if="form.growthRate !== '' && (parsedGrowthRate < -50 || parsedGrowthRate > 50)"
                  class="text-xs text-red-600 mt-1 font-medium">Must be between -50% and 50%.</p>
              </div>

              <!-- Additional Capital Contributions -->
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <label class="text-xs font-semibold text-gray-700">Additional Capital Contributions</label>
                  <button v-if="additionalCapital.length < 10" @click="addContribution"
                    class="text-xs font-bold px-2.5 py-1 rounded-lg border border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 transition">
                    + Add Year
                  </button>
                </div>
                <p class="text-xs text-gray-400 mb-2">Optional: extra capital invested in specific years (treated as negative cash flows).</p>
                <div v-if="additionalCapital.length === 0" class="text-xs text-gray-400 italic py-1">No additional contributions added.</div>
                <div v-for="(c, idx) in additionalCapital" :key="idx" class="flex gap-2 mb-1.5 items-end">
                  <div class="flex-1">
                    <label class="block text-xs text-gray-500 mb-1">Year</label>
                    <input v-model="c.year" type="number" min="1" :max="parsedHoldingPeriod || 40" step="1"
                      placeholder="Enter contribution year"
                      class="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-yellow-400 outline-none text-gray-900 font-semibold text-sm" />
                  </div>
                  <div class="flex-1">
                    <label class="block text-xs text-gray-500 mb-1">Amount ($)</label>
                    <div class="relative">
                      <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xs">$</span>
                      <input v-model="c.amount" type="number" min="0" step="1000"
                        placeholder="Enter amount"
                        class="w-full pl-6 pr-3 py-2 rounded-lg border-2 border-gray-300 focus:border-yellow-400 outline-none text-gray-900 font-semibold text-sm" />
                    </div>
                  </div>
                  <button @click="removeContribution(idx)" class="mb-0.5 p-2 text-red-400 hover:text-red-600 transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
                <p v-if="additionalCapital.length > 0" class="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5 mt-1">
                  Additional capital creates negative cash flows in those years, which may trigger a multiple IRR warning.
                </p>
              </div>

            </div>
          </div>

          <!-- ── SECTION: Cash Flow (Find CF mode) ── -->
          <div v-if="calcMode === 'find-cf'" class="border-b border-gray-100">
            <div class="px-4 py-2.5 bg-blue-50 border-b border-blue-100">
              <h2 class="text-xs font-bold uppercase tracking-wide text-blue-700">Target Return & Growth</h2>
            </div>
            <div class="px-4 py-3 space-y-3">
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Target IRR <span class="text-red-500">*</span></label>
                <div class="relative">
                  <input v-model="reverseTargetIRR" type="number" step="0.1"
                    placeholder="Enter your target IRR percentage"
                    class="w-full px-4 pr-8 py-2.5 rounded-xl border-2 border-blue-300 hover:border-blue-400 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Annual Cash Flow Growth Rate</label>
                <div class="relative">
                  <input v-model="form.growthRate" type="number" step="0.1"
                    placeholder="Optional: annual cash flow growth rate"
                    class="w-full px-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- ── SECTION: Exit / Sale ── -->
          <div v-if="calcMode !== 'find-sale'" class="border-b border-gray-100">
            <div class="px-4 py-2.5 bg-gray-50 border-b border-gray-100">
              <h2 class="text-xs font-bold uppercase tracking-wide text-gray-500">Exit &amp; Sale</h2>
            </div>
            <div class="px-4 py-3 space-y-3">

              <!-- Estimated Sale Price -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">
                  Estimated Sale Price <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.salePrice" type="number" min="0" step="5000"
                    placeholder="Enter estimated sale price at exit"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

              <!-- Selling Costs -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Selling Costs</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.sellingCosts" type="number" min="0" step="500"
                    placeholder="Optional: selling costs at exit"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Agent commissions, transfer taxes, closing costs.</p>
              </div>

              <!-- Loan Payoff at Sale -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Loan Payoff at Sale</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.loanPayoff" type="number" min="0" step="1000"
                    placeholder="Optional: loan payoff at sale"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

              <!-- Tax on Sale -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Tax on Sale</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.taxOnSale" type="number" min="0" step="500"
                    placeholder="Optional: estimated tax due at sale"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5 mt-1">
                  Tax on sale is user-entered. Use the <NuxtLink to="/capital-gains-tax-calculator" class="underline font-bold">Capital Gains Tax Calculator</NuxtLink> for an estimate.
                </p>
              </div>

            </div>
          </div>

          <!-- ── SECTION: Exit (Find Sale mode) ── -->
          <div v-if="calcMode === 'find-sale'" class="border-b border-gray-100">
            <div class="px-4 py-2.5 bg-emerald-50 border-b border-emerald-100">
              <h2 class="text-xs font-bold uppercase tracking-wide text-emerald-700">Target Return & Cash Flow</h2>
            </div>
            <div class="px-4 py-3 space-y-3">
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Target IRR <span class="text-red-500">*</span></label>
                <div class="relative">
                  <input v-model="reverseTargetIRR" type="number" step="0.1"
                    placeholder="Enter your target IRR percentage"
                    class="w-full px-4 pr-8 py-2.5 rounded-xl border-2 border-emerald-300 hover:border-emerald-400 bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Annual Net Cash Flow <span class="text-red-500">*</span></label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.annualCF" type="number" step="100"
                    placeholder="Enter expected annual net cash flow"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Annual Cash Flow Growth Rate</label>
                <div class="relative">
                  <input v-model="form.growthRate" type="number" step="0.1"
                    placeholder="Optional: annual cash flow growth rate"
                    class="w-full px-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Selling Costs</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.sellingCosts" type="number" min="0" step="500"
                    placeholder="Optional: selling costs at exit"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Loan Payoff at Sale</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.loanPayoff" type="number" min="0" step="1000"
                    placeholder="Optional: loan payoff at sale"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Tax on Sale</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.taxOnSale" type="number" min="0" step="500"
                    placeholder="Optional: estimated tax due at sale"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
            </div>
          </div>

          <!-- Validation Errors -->
          <div v-if="validationErrors.length > 0" class="px-4 py-3">
            <div class="rounded-xl bg-red-50 border border-red-200 p-3 space-y-1">
              <p class="text-xs font-bold text-red-700">Please correct the following:</p>
              <ul class="space-y-0.5">
                <li v-for="e in validationErrors" :key="e" class="text-xs text-red-600 flex items-start gap-1">
                  <span class="mt-0.5">•</span><span>{{ e }}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <!-- ════════════════════════════════
             RESULTS PANEL (right column)
        ════════════════════════════════ -->
        <div class="lg:sticky lg:top-20 self-start bg-gray-50 p-5 flex flex-col gap-4">

          <!-- ── STANDARD MODE RESULTS ── -->
          <template v-if="calcMode === 'standard'">

            <!-- IRR Primary Display -->
            <div class="rounded-2xl border-2 p-4 text-center"
              :class="verdict ? verdict.borderClass + ' ' + verdict.bgClass : 'border-gray-200 bg-white'">
              <p class="text-xs font-bold uppercase tracking-widest mb-1"
                :class="verdict ? verdict.textColor : 'text-gray-400'">Internal Rate of Return</p>
              <div v-if="hasResult && irrValue !== null">
                <div class="text-5xl font-extrabold leading-none" :style="`color: ${verdict?.bg}`">
                  {{ irrValue.toFixed(2) }}<span class="text-2xl">%</span>
                </div>
                <p class="text-xs text-gray-500 mt-2">IRR is annualized and depends heavily on timing and assumptions.</p>
              </div>
              <div v-else-if="hasResult && irrValue === null" class="py-2">
                <div class="text-2xl font-extrabold text-gray-400">Not Available</div>
                <p class="text-xs text-gray-500 mt-1">
                  {{ irrStatusMessage }}
                </p>
              </div>
              <div v-else class="py-4">
                <div class="text-4xl font-extrabold text-gray-200">—</div>
                <p class="text-xs text-gray-400 mt-2">Fill in required fields to calculate IRR.</p>
              </div>
            </div>

            <!-- Verdict Badge -->
            <div v-if="verdict" class="rounded-2xl border p-3.5" :class="verdict.bgClass + ' ' + verdict.borderClass">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-bold uppercase tracking-widest" :class="verdict.textColor">Verdict</span>
                <span class="text-xs font-bold px-2.5 py-1 rounded-full text-white" :style="`background: ${verdict.bg}`">
                  {{ verdict.label }}
                </span>
              </div>
              <p class="text-sm font-semibold" :class="verdict.textColor">{{ verdict.sublabel }}</p>
              <p class="text-xs text-gray-600 mt-1.5 leading-relaxed">{{ realImpact }}</p>
            </div>

            <!-- IRR Warnings -->
            <div v-if="irrResult?.multipleIRR" class="rounded-xl bg-amber-50 border border-amber-300 p-3">
              <p class="text-xs font-bold text-amber-800 mb-1">Multiple IRR Risk</p>
              <p class="text-xs text-amber-700">Cash flows have multiple sign changes. IRR may be ambiguous. Consider using MIRR or reviewing the cash-flow timeline.</p>
            </div>

            <div v-if="irrValue !== null && irrValue > 100" class="rounded-xl bg-amber-50 border border-amber-300 p-3">
              <p class="text-xs font-bold text-amber-800 mb-1">Very High IRR</p>
              <p class="text-xs text-amber-700">Very high IRR often indicates short hold, small initial investment, or aggressive exit assumptions. Verify all inputs carefully.</p>
            </div>

            <div v-if="netSaleProceeds < 0 && form.salePrice !== ''" class="rounded-xl bg-orange-50 border border-orange-300 p-3">
              <p class="text-xs font-bold text-orange-800 mb-1">Negative Exit Proceeds</p>
              <p class="text-xs text-orange-700">Exit proceeds are negative after selling costs, loan payoff, and taxes. Review your exit assumptions.</p>
            </div>

            <!-- Key Metrics -->
            <div v-if="hasResult" class="space-y-2">
              <div class="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
                <div class="flex justify-between items-center px-3.5 py-2.5">
                  <span class="text-xs font-semibold text-gray-600">Equity Multiple</span>
                  <span class="text-sm font-bold text-gray-900">
                    {{ equityMultiple !== null ? equityMultiple.toFixed(2) + 'x' : '—' }}
                  </span>
                </div>
                <div class="flex justify-between items-center px-3.5 py-2.5">
                  <span class="text-xs font-semibold text-gray-600">Total Profit</span>
                  <span class="text-sm font-bold" :class="totalProfit >= 0 ? 'text-green-700' : 'text-red-600'">
                    {{ formatCurrency(totalProfit) }}
                  </span>
                </div>
                <div class="flex justify-between items-center px-3.5 py-2.5">
                  <span class="text-xs font-semibold text-gray-600">Simple ROI</span>
                  <span class="text-sm font-bold" :class="simpleROI !== null && simpleROI >= 0 ? 'text-green-700' : 'text-red-600'">
                    {{ simpleROI !== null ? simpleROI.toFixed(2) + '%' : '—' }}
                  </span>
                </div>
              </div>

              <div class="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
                <div class="flex justify-between items-center px-3.5 py-2.5">
                  <span class="text-xs font-medium text-gray-500">Net Sale Proceeds</span>
                  <span class="text-xs font-bold" :class="netSaleProceeds >= 0 ? 'text-gray-700' : 'text-red-600'">
                    {{ formatCurrency(netSaleProceeds) }}
                  </span>
                </div>
                <div class="flex justify-between items-center px-3.5 py-2.5">
                  <span class="text-xs font-medium text-gray-500">Total Cash Invested</span>
                  <span class="text-xs font-bold text-gray-700">{{ formatCurrency(totalCashIn) }}</span>
                </div>
                <div class="flex justify-between items-center px-3.5 py-2.5">
                  <span class="text-xs font-medium text-gray-500">Total Cash Received</span>
                  <span class="text-xs font-bold text-gray-700">{{ formatCurrency(totalCashReceived) }}</span>
                </div>
                <div class="flex justify-between items-center px-3.5 py-2.5">
                  <span class="text-xs font-medium text-gray-500">Holding Period</span>
                  <span class="text-xs font-bold text-gray-700">{{ parsedHoldingPeriod }} years</span>
                </div>
              </div>

              <!-- IRR Status Indicator -->
              <div class="text-xs text-center text-gray-400 px-1">
                IRR Status:
                <span class="font-semibold" :class="irrStatus === 'OK' ? 'text-green-600' : irrStatus === 'MULTIPLE_IRR_RISK' ? 'text-amber-600' : 'text-red-600'">
                  {{ irrStatusLabel }}
                </span>
              </div>

            </div>

            <!-- Empty state -->
            <div v-if="!hasResult" class="bg-white rounded-xl border border-gray-200 p-4 text-center text-xs text-gray-400">
              Results will appear here once you fill in the required fields.
            </div>

            <!-- Save Scenario button -->
            <button v-if="hasResult" @click="saveScenario"
              class="w-full py-2.5 rounded-xl border-2 border-yellow-400 text-sm font-bold transition hover:bg-yellow-50 flex items-center justify-center gap-2"
              style="color: #1e3a5f;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
              </svg>
              Save Scenario
            </button>

          </template>

          <!-- ── FIND REQUIRED CF MODE RESULTS ── -->
          <template v-else-if="calcMode === 'find-cf'">
            <div class="rounded-2xl border-2 border-blue-200 bg-blue-50 p-4 text-center">
              <p class="text-xs font-bold uppercase tracking-widest text-blue-700 mb-1">Required Annual Cash Flow</p>
              <div v-if="requiredCF !== null">
                <div class="text-4xl font-extrabold text-blue-700 leading-none">
                  {{ formatCurrency(requiredCF) }}
                </div>
                <p class="text-xs text-blue-600 mt-2">per year to achieve {{ parsedTargetIRR.toFixed(2) }}% IRR</p>
              </div>
              <div v-else class="py-4">
                <div class="text-4xl font-extrabold text-gray-200">—</div>
                <p class="text-xs text-gray-400 mt-2">Fill in initial cash, holding period, sale price, and target IRR.</p>
              </div>
            </div>
            <div v-if="requiredCF !== null" class="bg-white rounded-xl border border-blue-200 divide-y divide-gray-100">
              <div class="flex justify-between items-center px-3.5 py-2.5">
                <span class="text-xs font-semibold text-gray-600">Target IRR</span>
                <span class="text-sm font-bold text-blue-700">{{ parsedTargetIRR.toFixed(2) }}%</span>
              </div>
              <div class="flex justify-between items-center px-3.5 py-2.5">
                <span class="text-xs font-semibold text-gray-600">Required Annual CF</span>
                <span class="text-sm font-bold text-blue-700">{{ formatCurrency(requiredCF) }}</span>
              </div>
              <div class="flex justify-between items-center px-3.5 py-2.5">
                <span class="text-xs font-semibold text-gray-600">Net Sale Proceeds</span>
                <span class="text-sm font-bold text-gray-700">{{ formatCurrency(netSaleProceeds) }}</span>
              </div>
            </div>
          </template>

          <!-- ── FIND REQUIRED SALE PRICE MODE RESULTS ── -->
          <template v-else>
            <div class="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-4 text-center">
              <p class="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1">Required Sale Price</p>
              <div v-if="requiredSalePrice">
                <div class="text-4xl font-extrabold text-emerald-700 leading-none">
                  {{ formatCurrency(requiredSalePrice.salePrice) }}
                </div>
                <p class="text-xs text-emerald-600 mt-2">gross sale price to achieve {{ parsedTargetIRR.toFixed(2) }}% IRR</p>
              </div>
              <div v-else class="py-4">
                <div class="text-4xl font-extrabold text-gray-200">—</div>
                <p class="text-xs text-gray-400 mt-2">Fill in initial cash, holding period, annual CF, and target IRR.</p>
              </div>
            </div>
            <div v-if="requiredSalePrice" class="bg-white rounded-xl border border-emerald-200 divide-y divide-gray-100">
              <div class="flex justify-between items-center px-3.5 py-2.5">
                <span class="text-xs font-semibold text-gray-600">Target IRR</span>
                <span class="text-sm font-bold text-emerald-700">{{ parsedTargetIRR.toFixed(2) }}%</span>
              </div>
              <div class="flex justify-between items-center px-3.5 py-2.5">
                <span class="text-xs font-semibold text-gray-600">Required Gross Sale Price</span>
                <span class="text-sm font-bold text-emerald-700">{{ formatCurrency(requiredSalePrice.salePrice) }}</span>
              </div>
              <div class="flex justify-between items-center px-3.5 py-2.5">
                <span class="text-xs font-semibold text-gray-600">Net Proceeds at That Price</span>
                <span class="text-sm font-bold text-gray-700">{{ formatCurrency(requiredSalePrice.netSaleProceeds) }}</span>
              </div>
              <div class="flex justify-between items-center px-3.5 py-2.5">
                <span class="text-xs font-semibold text-gray-600">Selling Costs + Payoffs</span>
                <span class="text-sm font-bold text-gray-700">{{ formatCurrency(parsedSellingCosts + parsedLoanPayoff + parsedTaxOnSale) }}</span>
              </div>
            </div>
          </template>

        </div>
      </div>

      </div>
      </div>

      <!-- ── SHARE + PDF BUTTONS ── -->
      <div v-if="calcMode === 'standard'" class="mt-4 flex gap-3 justify-end">
        <button @click="shareCalculation"
          class="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition shadow-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
          </svg>
          Share
        </button>
        <button @click="exportPDF"
          class="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 transition shadow-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Export PDF
        </button>
      </div>

      <!-- ── CASH FLOW TIMELINE TABLE ── -->
      <div v-if="calcMode === 'standard' && timelineRows.length > 0" class="mt-8">
        <h2 class="text-lg font-bold mb-3" style="color: #1e3a5f;">Cash Flow Timeline</h2>
        <p class="text-xs text-gray-500 mb-3">Cash-flow timing is simplified to annual periods.</p>
        <div class="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm">
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-gray-50 border-b border-gray-200">
                  <th class="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Year</th>
                  <th class="text-right px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Annual CF</th>
                  <th class="text-right px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Add'l Capital</th>
                  <th class="text-right px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Sale Proceeds</th>
                  <th class="text-right px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Net Cash Flow</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr v-for="row in timelineRows" :key="row.year"
                  :class="row.year === 0 ? 'bg-red-50' : row.year === parsedHoldingPeriod ? 'bg-green-50' : 'bg-white'">
                  <td class="px-4 py-2.5 font-bold text-gray-700">
                    <span v-if="row.year === 0">Year 0 <span class="text-xs font-normal text-gray-400">(Purchase)</span></span>
                    <span v-else-if="row.year === parsedHoldingPeriod">Year {{ row.year }} <span class="text-xs font-normal text-gray-400">(Exit)</span></span>
                    <span v-else>Year {{ row.year }}</span>
                  </td>
                  <td class="px-4 py-2.5 text-right font-medium text-gray-600">
                    <span v-if="row.year === 0" class="text-gray-400">—</span>
                    <span v-else :class="row.annualCF >= 0 ? 'text-gray-700' : 'text-red-600'">
                      {{ formatCurrencySign(row.annualCF) }}
                    </span>
                  </td>
                  <td class="px-4 py-2.5 text-right font-medium">
                    <span v-if="row.additionalCapital > 0" class="text-red-600">{{ formatCurrencySign(-row.additionalCapital) }}</span>
                    <span v-else-if="row.year === 0" class="text-red-600">{{ formatCurrencySign(-parsedInitialCash) }}</span>
                    <span v-else class="text-gray-400">—</span>
                  </td>
                  <td class="px-4 py-2.5 text-right font-medium">
                    <span v-if="row.saleProceeds !== 0" :class="row.saleProceeds >= 0 ? 'text-green-700' : 'text-red-600'">
                      {{ formatCurrencySign(row.saleProceeds) }}
                    </span>
                    <span v-else class="text-gray-400">—</span>
                  </td>
                  <td class="px-4 py-2.5 text-right font-bold">
                    <span :class="row.netCF >= 0 ? 'text-green-700' : 'text-red-600'">
                      {{ formatCurrencySign(row.netCF) }}
                    </span>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="bg-gray-50 border-t-2 border-gray-300">
                  <td class="px-4 py-2.5 font-bold text-gray-700 text-xs uppercase tracking-wide">Total</td>
                  <td class="px-4 py-2.5 text-right text-xs text-gray-500">—</td>
                  <td class="px-4 py-2.5 text-right text-xs text-gray-500">—</td>
                  <td class="px-4 py-2.5 text-right text-xs text-gray-500">—</td>
                  <td class="px-4 py-2.5 text-right font-bold" :class="totalProfit >= 0 ? 'text-green-700' : 'text-red-600'">
                    {{ formatCurrencySign(totalProfit) }}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      <!-- ── SENSITIVITY TABLE ── -->
      <div v-if="calcMode === 'standard' && sensitivityScenarios && hasResult" class="mt-8" id="sensitivity">
        <h2 class="text-lg font-bold mb-1" style="color: #1e3a5f;">Sensitivity Analysis</h2>
        <p class="text-xs text-gray-500 mb-3">Sensitivity results are scenario estimates, not predictions. Sale price and annual cash flow are adjusted ±10%.</p>
        <div class="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm">
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-gray-50 border-b border-gray-200">
                  <th class="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Scenario</th>
                  <th class="text-center px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">CF Adj.</th>
                  <th class="text-center px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Sale Adj.</th>
                  <th class="text-right px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">IRR</th>
                  <th class="text-right px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Equity Multiple</th>
                  <th class="text-right px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Total Profit</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr v-for="s in sensitivityScenarios" :key="s.label"
                  :class="s.label === 'Base' ? 'bg-blue-50' : 'bg-white'">
                  <td class="px-4 py-3 font-bold" :class="s.colorClass">{{ s.label }}</td>
                  <td class="px-4 py-3 text-center text-xs text-gray-600">
                    {{ s.label === 'Downside' ? '-10%' : s.label === 'Upside' ? '+10%' : '—' }}
                  </td>
                  <td class="px-4 py-3 text-center text-xs text-gray-600">
                    {{ s.label === 'Downside' ? '-10%' : s.label === 'Upside' ? '+10%' : '—' }}
                  </td>
                  <td class="px-4 py-3 text-right font-bold" :class="s.colorClass">
                    <span v-if="s.irr !== null && s.irr !== undefined">{{ s.irr.toFixed(2) }}%</span>
                    <span v-else class="text-gray-400 text-xs">N/A ({{ s.irrStatus }})</span>
                  </td>
                  <td class="px-4 py-3 text-right font-semibold text-gray-700">
                    {{ s.equityMultiple !== null ? s.equityMultiple.toFixed(2) + 'x' : '—' }}
                  </td>
                  <td class="px-4 py-3 text-right font-semibold" :class="s.totalProfit >= 0 ? 'text-green-700' : 'text-red-600'">
                    {{ formatCurrencySign(s.totalProfit) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ── REAL IMPACT BLOCK ── -->
      <div v-if="calcMode === 'standard' && verdict && hasResult" class="mt-6">
        <div class="rounded-2xl border p-5" :class="verdict.bgClass + ' ' + verdict.borderClass">
          <h3 class="text-sm font-bold mb-2" :class="verdict.textColor">Real Impact — {{ verdict.label }}</h3>
          <p class="text-sm text-gray-700 leading-relaxed">{{ realImpact }}</p>
          <p class="text-xs text-gray-500 mt-3 italic">This calculator is educational and does not guarantee investment performance.</p>
        </div>
      </div>

      <!-- ── SAVED SCENARIOS ── -->
      <div v-if="savedScenarios.length > 0" class="mt-8">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-lg font-bold" style="color: #1e3a5f;">Saved Scenarios</h2>
          <button @click="showScenarios = !showScenarios"
            class="text-xs font-bold px-3 py-1.5 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition">
            {{ showScenarios ? 'Hide' : `Show (${savedScenarios.length})` }}
          </button>
        </div>
        <div v-if="showScenarios" class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="s in savedScenarios" :key="s.id"
            class="bg-white rounded-xl border border-gray-200 p-3.5 shadow-sm">
            <div class="flex items-start justify-between mb-2">
              <div>
                <p class="text-sm font-bold text-gray-800 leading-tight">{{ s.name }}</p>
                <p class="text-xs text-gray-400">{{ s.date }}</p>
              </div>
              <button @click="deleteScenario(s.id)" class="text-gray-300 hover:text-red-400 transition ml-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div class="space-y-1 text-xs">
              <div class="flex justify-between">
                <span class="text-gray-500">IRR</span>
                <span class="font-bold" :class="s.results.irr !== null ? 'text-gray-800' : 'text-gray-400'">
                  {{ s.results.irr !== null ? s.results.irr.toFixed(2) + '%' : 'N/A' }}
                </span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Equity Multiple</span>
                <span class="font-bold text-gray-800">
                  {{ s.results.equityMultiple !== null ? s.results.equityMultiple.toFixed(2) + 'x' : '—' }}
                </span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Total Profit</span>
                <span class="font-bold" :class="s.results.totalProfit >= 0 ? 'text-green-700' : 'text-red-600'">
                  {{ formatCurrency(s.results.totalProfit) }}
                </span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Verdict</span>
                <span class="font-bold text-gray-700">{{ s.results.verdict || '—' }}</span>
              </div>
            </div>
            <button @click="loadScenario(s)"
              class="mt-2.5 w-full py-1.5 rounded-lg border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 transition">
              Load
            </button>
          </div>
        </div>
      </div>

    </main>

    <!-- ═══════════════════════════════════════════════
         SEO CONTENT
    ═══════════════════════════════════════════════ -->
    <section class="bg-white border-t border-gray-100 py-14">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div class="max-w-3xl mx-auto space-y-12">

          <!-- What Is IRR -->
          <div id="what-is-irr">
            <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">What Is IRR in Real Estate?</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              IRR — Internal Rate of Return — is the annualized discount rate that makes the net present value (NPV) of all cash flows from an investment equal to zero. It is one of the most powerful tools available to real estate investors because it accounts for the timing of every dollar invested and received, not just the total return at the end.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              In mathematical terms, IRR solves for <em>r</em> in this equation:
            </p>
            <div class="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 font-mono text-sm text-gray-700 mb-4">
              NPV = Σ CashFlow<sub>t</sub> / (1 + IRR)<sup>t</sup> = 0
            </div>
            <p class="text-gray-700 leading-relaxed mb-4">
              Because IRR cannot be solved algebraically for most multi-period investments, this calculator uses a numerical iterative solver — specifically Newton-Raphson with a bisection fallback — to find the rate that drives NPV to zero within a tolerance of 0.01.
            </p>
            <p class="text-gray-700 leading-relaxed">
              IRR is used by professional real estate investors, private equity funds, syndicators, and institutional buyers to compare deals on a like-for-like basis, regardless of deal size, hold period, or cash flow structure.
            </p>
          </div>

          <!-- What IRR Includes -->
          <div>
            <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">What This IRR Calculator Accounts For</h2>
            <div class="grid sm:grid-cols-2 gap-4 mb-4">
              <div class="bg-gray-50 rounded-xl border border-gray-200 p-4">
                <h3 class="font-bold text-gray-800 mb-2">Year 0: Initial Investment</h3>
                <p class="text-sm text-gray-600">Your initial cash invested enters the timeline as a negative cash flow. This includes down payment, closing costs, initial rehab, and upfront reserves.</p>
              </div>
              <div class="bg-gray-50 rounded-xl border border-gray-200 p-4">
                <h3 class="font-bold text-gray-800 mb-2">Years 1–N: Annual Cash Flows</h3>
                <p class="text-sm text-gray-600">Annual net cash flow after all operating expenses, debt service, management, vacancy, and reserves. Can grow at a specified annual rate.</p>
              </div>
              <div class="bg-gray-50 rounded-xl border border-gray-200 p-4">
                <h3 class="font-bold text-gray-800 mb-2">Final Year: Sale Proceeds</h3>
                <p class="text-sm text-gray-600">Net sale proceeds (sale price minus selling costs, loan payoff, and taxes) are added to the final year's cash flow. This is critical — most real estate IRR is driven by exit value.</p>
              </div>
              <div class="bg-gray-50 rounded-xl border border-gray-200 p-4">
                <h3 class="font-bold text-gray-800 mb-2">Additional Capital</h3>
                <p class="text-sm text-gray-600">Capital contributions in mid-hold years (renovations, value-add investments) are treated as negative cash flows. These reduce IRR and may create multiple sign changes.</p>
              </div>
            </div>
          </div>

          <!-- How to Use -->
          <div id="how-to-use">
            <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">How to Use This Calculator</h2>
            <ol class="space-y-3">
              <li class="flex gap-3">
                <span class="flex-shrink-0 w-7 h-7 rounded-full font-bold text-white text-sm flex items-center justify-center" style="background:#1e3a5f;">1</span>
                <div>
                  <p class="font-semibold text-gray-800">Enter your initial cash invested</p>
                  <p class="text-sm text-gray-600">Total capital deployed at acquisition: down payment + closing costs + any upfront rehab or reserves.</p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="flex-shrink-0 w-7 h-7 rounded-full font-bold text-white text-sm flex items-center justify-center" style="background:#1e3a5f;">2</span>
                <div>
                  <p class="font-semibold text-gray-800">Enter annual net cash flow</p>
                  <p class="text-sm text-gray-600">Your net cash flow per year after all expenses and debt service. Use your property's actual or projected cash flow. Can be negative for value-add or development deals.</p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="flex-shrink-0 w-7 h-7 rounded-full font-bold text-white text-sm flex items-center justify-center" style="background:#1e3a5f;">3</span>
                <div>
                  <p class="font-semibold text-gray-800">Set your holding period</p>
                  <p class="text-sm text-gray-600">How many years you plan to hold the property before selling. IRR is highly sensitive to holding period — shorter holds with strong exits tend to produce higher IRR.</p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="flex-shrink-0 w-7 h-7 rounded-full font-bold text-white text-sm flex items-center justify-center" style="background:#1e3a5f;">4</span>
                <div>
                  <p class="font-semibold text-gray-800">Enter expected sale price and costs</p>
                  <p class="text-sm text-gray-600">Enter your projected exit price. Include selling costs (commissions, transfer taxes), remaining loan balance, and estimated taxes. Net proceeds flow into the final year's cash flow.</p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="flex-shrink-0 w-7 h-7 rounded-full font-bold text-white text-sm flex items-center justify-center" style="background:#1e3a5f;">5</span>
                <div>
                  <p class="font-semibold text-gray-800">Review IRR, Equity Multiple, and Sensitivity</p>
                  <p class="text-sm text-gray-600">The calculator shows your IRR, verdict, equity multiple, and sensitivity across downside, base, and upside scenarios. Use the timeline table to verify each year's cash flow.</p>
                </div>
              </li>
            </ol>
          </div>

          <!-- IRR vs Other Metrics -->
          <div id="irr-vs-roi">
            <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">IRR vs Other Real Estate Metrics</h2>
            <div class="space-y-4">
              <div class="bg-gray-50 rounded-xl border border-gray-200 p-4">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="font-bold text-gray-800">IRR vs Simple ROI</h3>
                  <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800">Key Difference</span>
                </div>
                <p class="text-sm text-gray-600">Simple ROI = total profit ÷ total invested. It ignores when money was invested or received. A deal with 60% total ROI over 10 years may have a lower IRR than a deal with 40% ROI over 3 years. IRR adjusts for time — simple ROI does not.</p>
              </div>
              <div class="bg-gray-50 rounded-xl border border-gray-200 p-4">
                <h3 class="font-bold text-gray-800 mb-2">IRR vs Cap Rate</h3>
                <p class="text-sm text-gray-600">Cap rate measures the income yield of a property relative to its value (NOI ÷ Property Value). It is a snapshot metric that ignores financing, hold period, and exit. IRR is a full lifecycle return that incorporates all cash flows from purchase to sale, including financing impact.</p>
              </div>
              <div class="bg-gray-50 rounded-xl border border-gray-200 p-4">
                <h3 class="font-bold text-gray-800 mb-2">IRR vs Cash-on-Cash Return</h3>
                <p class="text-sm text-gray-600">Cash-on-cash (CoC) return measures your annual income return on cash invested. It is a single-year metric. IRR spans the full investment lifecycle, including sale proceeds. A property with strong CoC but low appreciation may have a lower IRR than a property with modest CoC and strong exit.</p>
              </div>
              <div class="bg-gray-50 rounded-xl border border-gray-200 p-4">
                <h3 class="font-bold text-gray-800 mb-2">IRR vs Equity Multiple</h3>
                <p class="text-sm text-gray-600">Equity multiple = total cash received ÷ total cash invested. A 2.0x equity multiple means you doubled your money. But it says nothing about how long it took. IRR and equity multiple together give a complete picture: IRR shows speed of return, equity multiple shows scale of return.</p>
              </div>
            </div>
          </div>

          <!-- Benchmarks -->
          <div id="benchmarks">
            <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">IRR Benchmarks for Real Estate (2026)</h2>
            <p class="text-sm text-gray-600 mb-4">These are general screening thresholds based on typical real estate risk profiles. They are not universal investment advice and do not account for your specific market, risk tolerance, or capital cost.</p>
            <div class="rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm">
              <table class="w-full text-sm">
                <thead>
                  <tr class="bg-gray-50 border-b border-gray-200">
                    <th class="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">IRR Range</th>
                    <th class="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500">Verdict</th>
                    <th class="text-left px-4 py-3 text-xs font-bold uppercase tracking-wide text-gray-500 hidden sm:table-cell">Meaning</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr class="bg-green-50">
                    <td class="px-4 py-3 font-bold text-green-700">≥ 18%</td>
                    <td class="px-4 py-3"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800">Excellent</span></td>
                    <td class="px-4 py-3 text-xs text-gray-600 hidden sm:table-cell">Strong risk-adjusted return. Typical for value-add, BRRRR, or development plays with strong exits.</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 font-bold text-blue-700">12% – 17.99%</td>
                    <td class="px-4 py-3"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">Good</span></td>
                    <td class="px-4 py-3 text-xs text-gray-600 hidden sm:table-cell">Solid return for most real estate strategies. Competitive with alternative asset classes.</td>
                  </tr>
                  <tr class="bg-amber-50">
                    <td class="px-4 py-3 font-bold text-amber-700">8% – 11.99%</td>
                    <td class="px-4 py-3"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">Concerning</span></td>
                    <td class="px-4 py-3 text-xs text-gray-600 hidden sm:table-cell">Thin for execution risk. Small changes in exit price or cash flow can materially reduce IRR.</td>
                  </tr>
                  <tr class="bg-red-50">
                    <td class="px-4 py-3 font-bold text-red-700">&lt; 8%</td>
                    <td class="px-4 py-3"><span class="px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800">Critical</span></td>
                    <td class="px-4 py-3 text-xs text-gray-600 hidden sm:table-cell">Weak for real estate. May not compensate for illiquidity, execution risk, and capital tied up.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Sensitivity -->
          <div>
            <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Why Sensitivity Analysis Matters for IRR</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              IRR is highly sensitive to exit assumptions. A 10% difference in sale price can change IRR by several percentage points depending on your holding period and cash flow structure. This is why this calculator shows three scenarios:
            </p>
            <div class="grid sm:grid-cols-3 gap-3 mb-4">
              <div class="bg-red-50 border border-red-200 rounded-xl p-3.5 text-center">
                <p class="font-bold text-red-700 mb-1">Downside</p>
                <p class="text-xs text-red-600">CF –10%, Sale –10%</p>
                <p class="text-xs text-gray-500 mt-1">Stress test for vacancy, expense overruns, or soft market exit</p>
              </div>
              <div class="bg-blue-50 border border-blue-200 rounded-xl p-3.5 text-center">
                <p class="font-bold text-blue-700 mb-1">Base</p>
                <p class="text-xs text-blue-600">Your inputs</p>
                <p class="text-xs text-gray-500 mt-1">Most likely scenario based on your projections</p>
              </div>
              <div class="bg-green-50 border border-green-200 rounded-xl p-3.5 text-center">
                <p class="font-bold text-green-700 mb-1">Upside</p>
                <p class="text-xs text-green-600">CF +10%, Sale +10%</p>
                <p class="text-xs text-gray-500 mt-1">Best-case scenario with strong performance and market appreciation</p>
              </div>
            </div>
            <p class="text-sm text-gray-600">
              If the downside IRR falls below 8%, the deal has limited margin of safety. Professional underwriters typically require a 2–4 point IRR cushion above their hurdle rate to account for real-world variance.
            </p>
          </div>

          <!-- Limitations -->
          <div id="limitations">
            <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Limitations of IRR in Real Estate</h2>
            <div class="space-y-3">
              <div class="flex gap-3">
                <span class="flex-shrink-0 text-red-500 mt-0.5">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                </span>
                <div>
                  <p class="font-semibold text-gray-800">IRR depends heavily on exit assumptions</p>
                  <p class="text-sm text-gray-600">If your projected sale price is too optimistic, your IRR will be inflated. Exit assumptions are the single largest driver of IRR for most real estate investments.</p>
                </div>
              </div>
              <div class="flex gap-3">
                <span class="flex-shrink-0 text-red-500 mt-0.5">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                </span>
                <div>
                  <p class="font-semibold text-gray-800">IRR does not account for tax</p>
                  <p class="text-sm text-gray-600">Unless you manually enter tax on sale, this IRR is pre-tax. Capital gains tax, depreciation recapture, and other taxes can significantly reduce your after-tax IRR. Use the Capital Gains Tax Calculator for an estimate.</p>
                </div>
              </div>
              <div class="flex gap-3">
                <span class="flex-shrink-0 text-red-500 mt-0.5">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                </span>
                <div>
                  <p class="font-semibold text-gray-800">Multiple IRR problem</p>
                  <p class="text-sm text-gray-600">When cash flows change sign more than once (e.g., additional capital injected mid-hold), there may be multiple mathematically valid IRRs. This calculator flags this condition and shows a warning.</p>
                </div>
              </div>
              <div class="flex gap-3">
                <span class="flex-shrink-0 text-red-500 mt-0.5">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                </span>
                <div>
                  <p class="font-semibold text-gray-800">IRR assumes reinvestment at the IRR rate</p>
                  <p class="text-sm text-gray-600">A technical limitation: IRR implicitly assumes interim cash flows are reinvested at the IRR rate. High IRR deals may overstate true performance if reinvestment at that rate is not achievable. Modified IRR (MIRR) corrects for this but is not included in v1 of this calculator.</p>
                </div>
              </div>
              <div class="flex gap-3">
                <span class="flex-shrink-0 text-red-500 mt-0.5">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                </span>
                <div>
                  <p class="font-semibold text-gray-800">Annual period simplification</p>
                  <p class="text-sm text-gray-600">This calculator uses annual cash flow periods. Real investments have monthly rent, irregular capex, and mid-year transactions. Annual modeling is a simplification that may slightly overstate or understate true IRR depending on timing.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Edge Cases -->
          <div id="edge-cases">
            <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">When IRR Cannot Be Calculated</h2>
            <div class="space-y-3">
              <div class="bg-gray-50 rounded-xl border border-gray-200 p-4">
                <h3 class="font-bold text-gray-800 mb-1">No Sign Change</h3>
                <p class="text-sm text-gray-600">If all cash flows after Year 0 are negative (e.g., all-cash loss every year with no sale or a zero sale price), there is no positive cash flow to recover the investment. IRR mathematically does not exist. The calculator shows "IRR Not Available" and suggests using equity multiple or ROI instead.</p>
              </div>
              <div class="bg-gray-50 rounded-xl border border-gray-200 p-4">
                <h3 class="font-bold text-gray-800 mb-1">Multiple Sign Changes</h3>
                <p class="text-sm text-gray-600">If cash flows switch between positive and negative multiple times (common when additional capital is injected mid-hold), multiple mathematically valid IRRs may exist. The calculator shows the IRR found by the solver but displays a prominent warning that the result may be ambiguous.</p>
              </div>
              <div class="bg-gray-50 rounded-xl border border-gray-200 p-4">
                <h3 class="font-bold text-gray-800 mb-1">Solver Failure</h3>
                <p class="text-sm text-gray-600">In rare cases, the numerical solver may not converge to a solution within its search range (-99.9% to 500%). This typically indicates extreme cash flow patterns. The calculator shows "Solver Failed" and suggests reviewing inputs.</p>
              </div>
              <div class="bg-gray-50 rounded-xl border border-gray-200 p-4">
                <h3 class="font-bold text-gray-800 mb-1">Very High IRR (&gt;100%)</h3>
                <p class="text-sm text-gray-600">IRR above 100% usually indicates a very short hold, a very small initial investment, or aggressive exit assumptions. The calculator displays the result but shows a warning to verify inputs carefully.</p>
              </div>
            </div>
          </div>

          <!-- FAQ -->
          <div id="faq">
            <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions</h2>
            <div class="space-y-4">
              <div v-for="(faq, i) in faqs" :key="i" class="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button @click="faq.open = !faq.open"
                  class="w-full flex items-center justify-between px-5 py-4 text-left">
                  <span class="font-semibold text-gray-800 pr-4">{{ faq.q }}</span>
                  <svg class="w-4 h-4 flex-shrink-0 text-gray-400 transition-transform" :class="faq.open ? 'rotate-180' : ''"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                <div v-show="faq.open" class="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                  {{ faq.a }}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════
         RELATED CALCULATORS CTA
    ═══════════════════════════════════════════════ -->
    <section class="bg-gray-50 border-t border-gray-100 py-12">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6">
        <h2 class="text-xl font-extrabold mb-6" style="color: #1e3a5f;">Related Calculators</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          <NuxtLink v-for="c in relatedCalcs" :key="c.href" :to="c.href"
            class="bg-white rounded-xl border border-gray-200 p-3.5 hover:border-yellow-400 hover:shadow-sm transition group">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-2 text-lg" :style="`background: ${c.bg}`">
              {{ c.icon }}
            </div>
            <p class="font-bold text-gray-800 text-sm leading-tight group-hover:text-yellow-700 transition">{{ c.title }}</p>
            <p class="text-xs text-gray-500 mt-0.5">{{ c.desc }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════
         FOOTER
    ═══════════════════════════════════════════════ -->
    <footer class="bg-white border-t border-gray-200 py-8">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg flex items-center justify-center" style="background: #1e3a5f;">
              <span class="text-white font-extrabold text-xs">RC</span>
            </div>
            <span class="font-bold text-sm" style="color: #1e3a5f;">RealCalc</span>
          </div>
          <p class="text-xs text-gray-400 text-center">
            For informational purposes only. Not financial advice. Consult a licensed professional before investing.
            <br>IRR is annualized and depends heavily on timing and assumptions. This calculator does not guarantee investment performance.
          </p>
          <div class="flex gap-4 text-xs text-gray-400">
            <NuxtLink to="/privacy" class="hover:text-gray-600">Privacy</NuxtLink>
            <NuxtLink to="/terms" class="hover:text-gray-600">Terms</NuxtLink>
            <NuxtLink to="/contact" class="hover:text-gray-600">Contact</NuxtLink>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed, reactive, onMounted } from 'vue'

// ============================================================
// STATE
// ============================================================
const MAX_SCENARIOS = 20
const LS_KEY = 'real-estate-irr-scenarios'

const calcMode = ref('standard')
const isNavExpanded = ref(false)
const showScenarios = ref(false)

const form = reactive({
  initialCash: '',
  holdingPeriod: '',
  annualCF: '',
  growthRate: '',
  salePrice: '',
  sellingCosts: '',
  loanPayoff: '',
  taxOnSale: '',
  scenarioName: ''
})

const additionalCapital = ref([])
const reverseTargetIRR = ref('')
const savedScenarios = ref([])

// ============================================================
// HELPERS
// ============================================================
function formatCurrency(val) {
  if (val === null || val === undefined || isNaN(val)) return '—'
  const abs = Math.abs(Math.round(val))
  const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(abs)
  return val < 0 ? `(${formatted})` : formatted
}

function formatCurrencySign(val) {
  if (val === null || val === undefined || isNaN(val)) return '—'
  const abs = Math.abs(Math.round(val))
  const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(abs)
  return val < 0 ? `−${formatted}` : `+${formatted}`
}

// ============================================================
// IRR NUMERICAL SOLVER
// Newton-Raphson with bisection fallback
// Accepts rates from -99.9% to 500%
// Tolerance: NPV absolute error < 0.01
// ============================================================
function solveIRR(cashFlows) {
  if (!cashFlows || cashFlows.length < 2) return { status: 'SOLVER_FAILED', irr: null, signChanges: 0 }

  function npv(rate) {
    return cashFlows.reduce((sum, cf, t) => sum + cf / Math.pow(1 + rate, t), 0)
  }

  function npvDeriv(rate) {
    return cashFlows.reduce((sum, cf, t) => {
      if (t === 0) return sum
      return sum - t * cf / Math.pow(1 + rate, t + 1)
    }, 0)
  }

  // Count sign changes in full cash flow sequence (skip zeros)
  let signChanges = 0
  let prevSign = 0
  for (let i = 0; i < cashFlows.length; i++) {
    const cf = cashFlows[i]
    if (cf === 0) continue
    const sign = cf > 0 ? 1 : -1
    if (prevSign !== 0 && sign !== prevSign) signChanges++
    prevSign = sign
  }

  const hasPositive = cashFlows.some(cf => cf > 0)
  const hasNegative = cashFlows.some(cf => cf < 0)

  if (!hasPositive || !hasNegative) {
    return { status: 'NO_VALID_IRR', irr: null, signChanges }
  }

  const multipleIRR = signChanges > 1

  // Newton-Raphson with multiple starting guesses
  const guesses = [0.1, 0.2, 0.05, 0.3, 0.5, -0.05, 0.01, 1.0]
  for (const guess of guesses) {
    let rate = guess
    for (let i = 0; i < 150; i++) {
      const f = npv(rate)
      if (Math.abs(f) < 0.01) {
        if (rate > -0.9999 && rate <= 5.0) {
          return {
            status: multipleIRR ? 'MULTIPLE_IRR_RISK' : 'OK',
            irr: rate * 100,
            signChanges,
            multipleIRR
          }
        }
        break
      }
      const df = npvDeriv(rate)
      if (Math.abs(df) < 1e-14) break
      rate = rate - f / df
      if (rate <= -0.9999) rate = -0.999
      if (rate > 10) rate = 10
    }
  }

  // Bisection fallback: search -99.9% to 500%
  const lo = -0.999
  const hi = 5.0
  const npvLo = npv(lo)
  const npvHi = npv(hi)

  if (npvLo * npvHi > 0) {
    // Try a wider search by scanning intervals
    const breakpoints = [-0.999, -0.5, -0.2, 0, 0.1, 0.2, 0.5, 1.0, 2.0, 5.0]
    let foundLo = null, foundHi = null, foundFlo = null
    for (let i = 0; i < breakpoints.length - 1; i++) {
      const a = breakpoints[i], b = breakpoints[i + 1]
      const fa = npv(a), fb = npv(b)
      if (fa * fb <= 0) {
        foundLo = a; foundHi = b; foundFlo = fa
        break
      }
    }
    if (foundLo === null) {
      return { status: 'SOLVER_FAILED', irr: null, signChanges, multipleIRR }
    }
    let a = foundLo, b = foundHi, fa = foundFlo
    for (let i = 0; i < 300; i++) {
      const c = (a + b) / 2
      const fc = npv(c)
      if (Math.abs(fc) < 0.01 || (b - a) < 1e-9) {
        return {
          status: multipleIRR ? 'MULTIPLE_IRR_RISK' : 'OK',
          irr: c * 100,
          signChanges,
          multipleIRR
        }
      }
      if (fa * fc < 0) { b = c } else { a = c; fa = fc }
    }
    return { status: 'SOLVER_FAILED', irr: null, signChanges, multipleIRR }
  }

  let a = lo, b = hi, fa = npvLo
  for (let i = 0; i < 300; i++) {
    const c = (a + b) / 2
    const fc = npv(c)
    if (Math.abs(fc) < 0.01 || (b - a) < 1e-9) {
      return {
        status: multipleIRR ? 'MULTIPLE_IRR_RISK' : 'OK',
        irr: c * 100,
        signChanges,
        multipleIRR
      }
    }
    if (fa * fc < 0) { b = c } else { a = c; fa = fc }
  }

  return { status: 'SOLVER_FAILED', irr: null, signChanges, multipleIRR }
}

// ============================================================
// PARSED INPUTS
// ============================================================
const parsedInitialCash = computed(() => {
  const v = parseFloat(String(form.initialCash).replace(/,/g, ''))
  return isNaN(v) ? 0 : v
})
const parsedHoldingPeriod = computed(() => {
  const v = parseInt(form.holdingPeriod)
  return isNaN(v) ? 0 : v
})
const parsedAnnualCF = computed(() => {
  const v = parseFloat(String(form.annualCF).replace(/,/g, ''))
  return isNaN(v) ? 0 : v
})
const parsedGrowthRate = computed(() => {
  const v = parseFloat(form.growthRate)
  return isNaN(v) ? 0 : v
})
const parsedSalePrice = computed(() => {
  const v = parseFloat(String(form.salePrice).replace(/,/g, ''))
  return isNaN(v) ? 0 : v
})
const parsedSellingCosts = computed(() => {
  const v = parseFloat(String(form.sellingCosts).replace(/,/g, ''))
  return isNaN(v) || v < 0 ? 0 : v
})
const parsedLoanPayoff = computed(() => {
  const v = parseFloat(String(form.loanPayoff).replace(/,/g, ''))
  return isNaN(v) || v < 0 ? 0 : v
})
const parsedTaxOnSale = computed(() => {
  const v = parseFloat(String(form.taxOnSale).replace(/,/g, ''))
  return isNaN(v) || v < 0 ? 0 : v
})
const parsedTargetIRR = computed(() => {
  const v = parseFloat(reverseTargetIRR.value)
  return isNaN(v) ? 0 : v
})

// ============================================================
// VALIDATION
// ============================================================
const validationErrors = computed(() => {
  if (calcMode.value !== 'standard') return []
  const errors = []
  if (form.initialCash !== '' && parsedInitialCash.value <= 0) {
    errors.push('Initial cash invested must be greater than zero.')
  }
  if (form.holdingPeriod !== '' && (parsedHoldingPeriod.value < 1 || parsedHoldingPeriod.value > 40)) {
    errors.push('Holding period must be between 1 and 40 years.')
  }
  if (form.growthRate !== '' && (parsedGrowthRate.value < -50 || parsedGrowthRate.value > 50)) {
    errors.push('Cash flow growth rate must be between -50% and 50%.')
  }
  for (let i = 0; i < additionalCapital.value.length; i++) {
    const c = additionalCapital.value[i]
    if (c.year === '' || c.amount === '') continue
    const year = parseInt(c.year)
    const amount = parseFloat(c.amount)
    if (isNaN(year) || year < 1 || (parsedHoldingPeriod.value > 0 && year > parsedHoldingPeriod.value)) {
      errors.push(`Contribution year ${c.year} must be within holding period (1–${parsedHoldingPeriod.value || 'N'}).`)
    }
    if (!isNaN(amount) && amount < 0) {
      errors.push('Additional capital amounts cannot be negative.')
    }
  }
  return errors
})

// ============================================================
// CORE COMPUTED VALUES
// ============================================================
const netSaleProceeds = computed(() =>
  parsedSalePrice.value - parsedSellingCosts.value - parsedLoanPayoff.value - parsedTaxOnSale.value
)

const totalAdditionalCapital = computed(() =>
  additionalCapital.value.reduce((sum, c) => {
    const a = parseFloat(c.amount)
    return sum + (isNaN(a) || a < 0 ? 0 : a)
  }, 0)
)

const totalCashIn = computed(() => parsedInitialCash.value + totalAdditionalCapital.value)

// Build cash flow timeline
const cashFlowTimeline = computed(() => {
  const n = parsedHoldingPeriod.value
  const initial = parsedInitialCash.value
  if (n < 1 || n > 40 || initial <= 0) return []
  if (form.annualCF === '' && form.salePrice === '') return []

  const gr = parsedGrowthRate.value / 100
  const flows = new Array(n + 1)
  flows[0] = -initial

  for (let t = 1; t <= n; t++) {
    flows[t] = parsedAnnualCF.value * Math.pow(1 + gr, t - 1)
  }

  // Apply additional capital as negative flows
  for (const c of additionalCapital.value) {
    const year = parseInt(c.year)
    const amount = parseFloat(c.amount) || 0
    if (!isNaN(year) && year >= 1 && year <= n && amount >= 0) {
      flows[year] -= amount
    }
  }

  // Add net sale proceeds to final year
  flows[n] += netSaleProceeds.value

  return flows
})

// Timeline rows for display table
const timelineRows = computed(() => {
  const n = parsedHoldingPeriod.value
  if (cashFlowTimeline.value.length === 0 || n < 1) return []
  const gr = parsedGrowthRate.value / 100
  const rows = []

  // Year 0
  rows.push({ year: 0, annualCF: 0, additionalCapital: parsedInitialCash.value, saleProceeds: 0, netCF: -parsedInitialCash.value })

  for (let t = 1; t <= n; t++) {
    const opCF = parsedAnnualCF.value * Math.pow(1 + gr, t - 1)
    const addlCap = additionalCapital.value
      .filter(c => parseInt(c.year) === t)
      .reduce((sum, c) => sum + Math.max(0, parseFloat(c.amount) || 0), 0)
    const saleProcY = t === n ? netSaleProceeds.value : 0
    rows.push({
      year: t,
      annualCF: opCF,
      additionalCapital: addlCap,
      saleProceeds: saleProcY,
      netCF: opCF - addlCap + saleProcY
    })
  }

  return rows
})

// Profit & metrics
const totalProfit = computed(() => {
  if (cashFlowTimeline.value.length === 0) return 0
  return cashFlowTimeline.value.reduce((s, cf) => s + cf, 0)
})
const totalCashReceived = computed(() => totalProfit.value + totalCashIn.value)
const equityMultiple = computed(() => totalCashIn.value > 0 ? totalCashReceived.value / totalCashIn.value : null)
const simpleROI = computed(() => totalCashIn.value > 0 ? (totalProfit.value / totalCashIn.value) * 100 : null)

// ============================================================
// IRR RESULT
// ============================================================
const irrResult = computed(() => {
  if (calcMode.value !== 'standard') return null
  if (cashFlowTimeline.value.length === 0) return null
  if (validationErrors.value.length > 0) return null
  return solveIRR(cashFlowTimeline.value)
})

const hasResult = computed(() => irrResult.value !== null && cashFlowTimeline.value.length > 0)
const irrValue = computed(() => irrResult.value?.irr ?? null)
const irrStatus = computed(() => irrResult.value?.status ?? null)

const irrStatusLabel = computed(() => {
  const s = irrStatus.value
  if (s === 'OK') return 'Valid'
  if (s === 'MULTIPLE_IRR_RISK') return 'Multiple IRR Risk'
  if (s === 'NO_VALID_IRR') return 'No Valid IRR'
  if (s === 'SOLVER_FAILED') return 'Solver Failed'
  return '—'
})

const irrStatusMessage = computed(() => {
  const s = irrStatus.value
  if (s === 'NO_VALID_IRR') return 'IRR requires at least one positive cash flow after investment. Review exit proceeds or cash flow inputs.'
  if (s === 'SOLVER_FAILED') return 'The numerical solver could not converge. Try adjusting the inputs or review the cash-flow pattern.'
  return ''
})

// ============================================================
// VERDICT
// ============================================================
const verdict = computed(() => {
  if (!irrResult.value) return null
  const s = irrResult.value.status
  if (s === 'NO_VALID_IRR' || s === 'SOLVER_FAILED') {
    return { key: 'IRR_NOT_AVAILABLE', label: 'IRR Not Available', sublabel: 'IRR cannot be reliably calculated', bg: '#6b7280', textColor: 'text-gray-700', bgClass: 'bg-gray-100', borderClass: 'border-gray-300' }
  }
  const irr = irrResult.value.irr
  if (irr >= 18) return { key: 'EXCELLENT', label: 'Excellent', sublabel: 'Strong risk-adjusted return candidate', bg: '#16a34a', textColor: 'text-green-700', bgClass: 'bg-green-50', borderClass: 'border-green-200' }
  if (irr >= 12) return { key: 'GOOD', label: 'Good', sublabel: 'Solid return range', bg: '#2563eb', textColor: 'text-blue-700', bgClass: 'bg-blue-50', borderClass: 'border-blue-200' }
  if (irr >= 8) return { key: 'CONCERNING', label: 'Concerning', sublabel: 'Thin return for real estate risk', bg: '#d97706', textColor: 'text-amber-700', bgClass: 'bg-amber-50', borderClass: 'border-amber-200' }
  return { key: 'CRITICAL', label: 'Critical', sublabel: 'Weak return / poor risk compensation', bg: '#dc2626', textColor: 'text-red-700', bgClass: 'bg-red-50', borderClass: 'border-red-200' }
})

const realImpact = computed(() => {
  if (!verdict.value) return ''
  const msgs = {
    EXCELLENT: 'The deal produces a strong annualized return based on the entered timeline. Verify assumptions: exit price, annual cash flow, and tax impact.',
    GOOD: 'The deal appears to produce a solid return. Compare against alternative deals and financing assumptions.',
    CONCERNING: 'The return may be thin relative to execution risk. Small changes in sale price, vacancy, or expenses could materially reduce IRR.',
    CRITICAL: 'The return is weak for a real estate investment. The deal may rely too heavily on optimistic exit assumptions or low-risk expectations.',
    IRR_NOT_AVAILABLE: 'IRR cannot be calculated reliably from this cash-flow pattern. Review cash-flow signs, exit proceeds, or use ROI / equity multiple instead.'
  }
  return msgs[verdict.value.key] || ''
})

// ============================================================
// SENSITIVITY ANALYSIS
// ============================================================
function buildSensCF(cfMult, saleMult) {
  const n = parsedHoldingPeriod.value
  const initial = parsedInitialCash.value
  if (n < 1 || initial <= 0) return []
  const gr = parsedGrowthRate.value / 100
  const flows = new Array(n + 1)
  flows[0] = -initial
  for (let t = 1; t <= n; t++) {
    flows[t] = parsedAnnualCF.value * cfMult * Math.pow(1 + gr, t - 1)
  }
  for (const c of additionalCapital.value) {
    const year = parseInt(c.year)
    const amount = parseFloat(c.amount) || 0
    if (!isNaN(year) && year >= 1 && year <= n && amount >= 0) {
      flows[year] -= amount
    }
  }
  const adjNSP = parsedSalePrice.value * saleMult - parsedSellingCosts.value - parsedLoanPayoff.value - parsedTaxOnSale.value
  flows[n] += adjNSP
  return flows
}

const sensitivityScenarios = computed(() => {
  if (!hasResult.value) return null
  return [
    { label: 'Downside', cfMult: 0.9, saleMult: 0.9, colorClass: 'text-red-600' },
    { label: 'Base', cfMult: 1.0, saleMult: 1.0, colorClass: 'text-blue-700' },
    { label: 'Upside', cfMult: 1.1, saleMult: 1.1, colorClass: 'text-green-600' }
  ].map(s => {
    const flows = buildSensCF(s.cfMult, s.saleMult)
    const res = solveIRR(flows)
    const profit = flows.reduce((sum, cf) => sum + cf, 0)
    const cashReceived = profit + totalCashIn.value
    const em = totalCashIn.value > 0 ? cashReceived / totalCashIn.value : null
    return { ...s, irr: res?.irr ?? null, irrStatus: res?.status, equityMultiple: em, totalProfit: profit }
  })
})

// ============================================================
// REVERSE MODE — FIND REQUIRED CF
// ============================================================
const requiredCF = computed(() => {
  if (calcMode.value !== 'find-cf') return null
  const n = parsedHoldingPeriod.value
  const initial = parsedInitialCash.value
  const targetRate = parsedTargetIRR.value / 100
  const gr = parsedGrowthRate.value / 100
  const nsp = netSaleProceeds.value
  if (n < 1 || n > 40 || initial <= 0 || isNaN(targetRate) || targetRate <= -1) return null

  // NPV = sum(CF * (1+gr)^(t-1) / (1+r)^t for t=1..n) + NSP/(1+r)^n - initial = 0
  // Solve for CF
  let pvFactor = 0
  for (let t = 1; t <= n; t++) {
    pvFactor += Math.pow(1 + gr, t - 1) / Math.pow(1 + targetRate, t)
  }
  if (Math.abs(pvFactor) < 1e-10) return null

  // Additional capital PV
  let addlPV = 0
  for (const c of additionalCapital.value) {
    const year = parseInt(c.year)
    const amount = parseFloat(c.amount) || 0
    if (!isNaN(year) && year >= 1 && year <= n && amount >= 0) {
      addlPV += amount / Math.pow(1 + targetRate, year)
    }
  }

  const pvSale = nsp / Math.pow(1 + targetRate, n)
  const cf = (initial + addlPV - pvSale) / pvFactor
  return cf
})

// ============================================================
// REVERSE MODE — FIND REQUIRED SALE PRICE
// ============================================================
const requiredSalePrice = computed(() => {
  if (calcMode.value !== 'find-sale') return null
  const n = parsedHoldingPeriod.value
  const initial = parsedInitialCash.value
  const targetRate = parsedTargetIRR.value / 100
  const gr = parsedGrowthRate.value / 100
  if (n < 1 || n > 40 || initial <= 0 || isNaN(targetRate) || targetRate <= -1) return null

  // NPV without sale proceeds
  let npvBase = -initial
  for (let t = 1; t <= n; t++) {
    npvBase += parsedAnnualCF.value * Math.pow(1 + gr, t - 1) / Math.pow(1 + targetRate, t)
  }
  for (const c of additionalCapital.value) {
    const year = parseInt(c.year)
    const amount = parseFloat(c.amount) || 0
    if (!isNaN(year) && year >= 1 && year <= n && amount >= 0) {
      npvBase -= amount / Math.pow(1 + targetRate, year)
    }
  }

  // RequiredNSP = -npvBase * (1+r)^n
  const reqNSP = -npvBase * Math.pow(1 + targetRate, n)
  const reqSalePrice = reqNSP + parsedSellingCosts.value + parsedLoanPayoff.value + parsedTaxOnSale.value
  return { salePrice: reqSalePrice, netSaleProceeds: reqNSP }
})

// ============================================================
// ADDITIONAL CAPITAL MANAGEMENT
// ============================================================
function addContribution() {
  if (additionalCapital.value.length < 10) {
    additionalCapital.value.push({ year: '', amount: '' })
  }
}
function removeContribution(idx) {
  additionalCapital.value.splice(idx, 1)
}

// ============================================================
// SCENARIOS
// ============================================================
function saveScenario() {
  if (!hasResult.value) return
  const scenario = {
    id: Date.now(),
    name: form.scenarioName || `Scenario ${savedScenarios.value.length + 1}`,
    date: new Date().toLocaleDateString('en-US'),
    inputs: { ...form },
    additionalCapital: additionalCapital.value.map(c => ({ ...c })),
    results: {
      irr: irrValue.value,
      irrStatus: irrStatus.value,
      verdict: verdict.value?.key,
      equityMultiple: equityMultiple.value,
      totalProfit: totalProfit.value,
      netSaleProceeds: netSaleProceeds.value,
      simpleROI: simpleROI.value,
      cashFlowTimeline: [...cashFlowTimeline.value]
    }
  }
  savedScenarios.value = [scenario, ...savedScenarios.value].slice(0, MAX_SCENARIOS)
  try { localStorage.setItem(LS_KEY, JSON.stringify(savedScenarios.value)) } catch (_) {}
  showScenarios.value = true
}

function deleteScenario(id) {
  savedScenarios.value = savedScenarios.value.filter(s => s.id !== id)
  try { localStorage.setItem(LS_KEY, JSON.stringify(savedScenarios.value)) } catch (_) {}
}

function loadScenario(scenario) {
  Object.assign(form, scenario.inputs)
  additionalCapital.value = (scenario.additionalCapital || []).map(c => ({ ...c }))
  calcMode.value = 'standard'
}

// ============================================================
// SHARE + PDF
// ============================================================
function shareCalculation() {
  if (typeof window === 'undefined') return
  const p = new URLSearchParams()
  if (form.initialCash) p.set('cash', form.initialCash)
  if (form.holdingPeriod) p.set('hold', form.holdingPeriod)
  if (form.annualCF) p.set('cf', form.annualCF)
  if (form.growthRate) p.set('growth', form.growthRate)
  if (form.salePrice) p.set('sale', form.salePrice)
  if (form.sellingCosts) p.set('scosts', form.sellingCosts)
  if (form.loanPayoff) p.set('loan', form.loanPayoff)
  if (form.taxOnSale) p.set('tax', form.taxOnSale)
  if (form.scenarioName) p.set('name', encodeURIComponent(form.scenarioName))
  const url = `${window.location.origin}/real-estate-irr-calculator?${p.toString()}`
  navigator.clipboard?.writeText(url).then(() => alert('Link copied to clipboard!')).catch(() => alert('Copy the URL from the address bar.'))
}

async function exportPDF() {
  if (typeof window === 'undefined') return
  try {
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF()
    const name = form.scenarioName || 'Real Estate IRR Analysis'

    doc.setFillColor(30, 58, 95)
    doc.rect(0, 0, 210, 18, 'F')
    doc.setFontSize(13)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(255, 255, 255)
    doc.text('RealCalc — Real Estate IRR Calculator', 14, 12)

    let y = 28
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(30, 58, 95)
    doc.text(name, 14, y)
    y += 10

    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(80, 80, 80)

    const addRow = (lbl, val) => { doc.text(`${lbl}:`, 14, y); doc.setFont('helvetica', 'bold'); doc.text(String(val), 90, y); doc.setFont('helvetica', 'normal'); y += 6 }

    doc.setFont('helvetica', 'bold')
    doc.setTextColor(30, 58, 95)
    doc.text('INPUTS', 14, y); y += 5
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(80, 80, 80)
    addRow('Initial Cash Invested', formatCurrency(parsedInitialCash.value))
    addRow('Holding Period', `${parsedHoldingPeriod.value} years`)
    addRow('Annual Net Cash Flow', formatCurrency(parsedAnnualCF.value))
    addRow('Growth Rate', `${parsedGrowthRate.value}%`)
    addRow('Estimated Sale Price', formatCurrency(parsedSalePrice.value))
    addRow('Selling Costs', formatCurrency(parsedSellingCosts.value))
    addRow('Loan Payoff at Sale', formatCurrency(parsedLoanPayoff.value))
    addRow('Tax on Sale', formatCurrency(parsedTaxOnSale.value))
    addRow('Net Sale Proceeds', formatCurrency(netSaleProceeds.value))
    y += 3

    doc.setFont('helvetica', 'bold')
    doc.setTextColor(30, 58, 95)
    doc.text('RESULTS', 14, y); y += 5
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(80, 80, 80)
    addRow('IRR', irrValue.value !== null ? `${irrValue.value.toFixed(2)}%` : `N/A (${irrStatusLabel.value})`)
    addRow('Verdict', verdict.value?.label || '—')
    addRow('Equity Multiple', equityMultiple.value !== null ? `${equityMultiple.value.toFixed(2)}x` : '—')
    addRow('Total Profit', formatCurrency(totalProfit.value))
    addRow('Simple ROI', simpleROI.value !== null ? `${simpleROI.value.toFixed(2)}%` : '—')
    addRow('Total Cash Invested', formatCurrency(totalCashIn.value))
    addRow('Total Cash Received', formatCurrency(totalCashReceived.value))

    if (sensitivityScenarios.value) {
      y += 3
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(30, 58, 95)
      doc.text('SENSITIVITY', 14, y); y += 5
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(80, 80, 80)
      for (const s of sensitivityScenarios.value) {
        addRow(`${s.label} IRR`, s.irr !== null ? `${s.irr.toFixed(2)}%` : 'N/A')
      }
    }

    y += 5
    doc.setFontSize(7)
    doc.setTextColor(150, 150, 150)
    doc.text('IRR is annualized and depends heavily on timing and assumptions. This calculator is educational and does not guarantee investment performance. arvcalc.com', 14, y, { maxWidth: 180 })

    doc.save(`${name.replace(/\s+/g, '-').toLowerCase()}.pdf`)
  } catch (e) {
    alert('PDF export unavailable. Please try again.')
  }
}

// ============================================================
// FAQ DATA
// ============================================================
const faqs = reactive([
  {
    q: 'What is IRR in real estate?',
    a: 'IRR (Internal Rate of Return) is the annualized return rate that makes the net present value of all cash flows equal to zero. It accounts for initial investment, annual cash flows, the timing of those flows, and exit sale proceeds. Unlike simple ROI, IRR adjusts for the time value of money — a dollar received sooner is worth more than a dollar received later.',
    open: false
  },
  {
    q: 'How is IRR different from ROI?',
    a: 'ROI (Return on Investment) measures the total return as a percentage of invested capital, ignoring when money was invested or received. IRR is the annualized rate that accounts for timing. A deal that doubles your money in 2 years has a much higher IRR than one that doubles your money in 10 years — even though both have the same simple ROI. Always use IRR when comparing deals with different timelines.',
    open: false
  },
  {
    q: 'What is a good IRR for real estate?',
    a: 'Generally: IRR above 18% is considered excellent for real estate. 12–18% is good. 8–12% is concerning — thin relative to execution risk. Below 8% is considered weak for typical real estate risk. These thresholds are general screening guidelines, not universal advice. Your hurdle rate depends on your market, financing cost, and alternative investment opportunities.',
    open: false
  },
  {
    q: 'Why might IRR not be available?',
    a: 'IRR cannot be calculated when cash flows never turn positive — for example, when all future cash flows are negative with no sale proceeds. In this case, there is no discount rate that makes NPV equal zero. Additionally, IRR may fail to converge if the cash flow pattern is unusual. The calculator shows "IRR Not Available" or "Solver Failed" in these cases, with an explanation.',
    open: false
  },
  {
    q: 'What is the multiple IRR problem?',
    a: "When cash flows change sign more than once — for example, when you inject additional capital in a mid-hold year creating a negative cash flow after positive ones — there may be multiple discount rates that make NPV equal zero. This is called the multiple IRR problem. Each is mathematically valid, but only one may reflect the economic reality. This calculator flags this condition and displays a warning. In these cases, consider using Modified IRR (MIRR) instead.",
    open: false
  },
  {
    q: 'Does this calculator include taxes?',
    a: 'Tax on sale is user-entered as an optional field, allowing you to manually model an after-tax IRR. This calculator does NOT automatically calculate capital gains tax, depreciation recapture, or other taxes. Use the Capital Gains Tax Calculator to estimate your tax liability, then enter that amount in the "Tax on Sale" field for a more accurate after-tax IRR.',
    open: false
  },
  {
    q: 'How does the holding period affect IRR?',
    a: 'Holding period has a significant impact on IRR. Short hold periods amplify both gains and losses — a strong exit in year 2 produces a much higher IRR than the same exit in year 7 because capital is returned faster. Conversely, holding too long with modest appreciation can drag IRR down even if the total profit is the same. Always model your intended hold period, not a theoretical best case.',
    open: false
  },
  {
    q: 'What is equity multiple and how does it relate to IRR?',
    a: 'Equity multiple is the ratio of total cash received to total cash invested. A 2.0x equity multiple means you received twice your invested capital. Equity multiple tells you the scale of return but not its speed. IRR tells you the speed of return but not its scale. Together they provide a complete picture: a 20% IRR over 10 years with a 4.0x multiple is different from a 20% IRR over 2 years with a 1.4x multiple.',
    open: false
  },
  {
    q: 'Why does this calculator use a numerical solver for IRR?',
    a: "IRR cannot be solved algebraically for most multi-period investments. The mathematical equation NPV = 0 requires iterative methods to find the root. This calculator uses Newton-Raphson (with multiple starting points) as the primary solver, and bisection as a fallback. The solver accepts rates from -99.9% to 500% and runs up to 300 iterations to achieve a tolerance of 0.01 in NPV. This is consistent with professional-grade financial software.",
    open: false
  },
  {
    q: 'Can I save and compare multiple IRR scenarios?',
    a: 'Yes. Click "Save Scenario" after calculating to store up to 20 scenarios in your browser. Saved scenarios appear below the calculator with key metrics at a glance. You can load any scenario back into the calculator or delete it. Use the "Find Required Cash Flow" and "Find Required Sale Price" modes to reverse-engineer deal targets.',
    open: false
  }
])

// ============================================================
// RELATED CALCULATORS
// ============================================================
const relatedCalcs = [
  { href: '/real-estate-roi-calculator', title: 'Real Estate ROI Calculator', desc: 'Total return analysis', icon: '📈', bg: '#e8f0fe' },
  { href: '/rental-property-roi-calculator', title: 'Rental Property ROI', desc: 'Rental investment returns', icon: '🏠', bg: '#f0fdf4' },
  { href: '/property-cash-flow-calculator', title: 'Cash Flow Calculator', desc: 'Monthly & annual cash flow', icon: '💵', bg: '#fef3c7' },
  { href: '/cap-rate-calculator', title: 'Cap Rate Calculator', desc: 'NOI-based cap rate analysis', icon: '📊', bg: '#ecfdf5' },
  { href: '/cash-on-cash-calculator', title: 'Cash-on-Cash Return', desc: 'Annual cash yield on equity', icon: '💰', bg: '#fff7ed' },
  { href: '/capital-gains-tax-calculator', title: 'Capital Gains Tax', desc: 'Estimate tax on real estate sale', icon: '🧾', bg: '#fdf2f8' },
  { href: '/compare-real-estate-deals', title: 'Compare Deals', desc: 'Side-by-side deal comparison', icon: '⚖️', bg: '#f0f9ff' },
  { href: '/dscr-calculator', title: 'DSCR Calculator', desc: 'Debt service coverage ratio', icon: '🏦', bg: '#fafafa' }
]

// ============================================================
// LIFECYCLE — URL PARAMS + LOCALSTORAGE
// ============================================================
onMounted(() => {
  try {
    const saved = localStorage.getItem(LS_KEY)
    if (saved) savedScenarios.value = JSON.parse(saved)
  } catch (_) {}

  if (typeof window === 'undefined') return
  const p = new URLSearchParams(window.location.search)
  if (p.get('cash')) form.initialCash = p.get('cash')
  if (p.get('hold')) form.holdingPeriod = p.get('hold')
  if (p.get('cf')) form.annualCF = p.get('cf')
  if (p.get('growth')) form.growthRate = p.get('growth')
  if (p.get('sale')) form.salePrice = p.get('sale')
  if (p.get('scosts')) form.sellingCosts = p.get('scosts')
  if (p.get('loan')) form.loanPayoff = p.get('loan')
  if (p.get('tax')) form.taxOnSale = p.get('tax')
  if (p.get('name')) form.scenarioName = decodeURIComponent(p.get('name'))
})

// ============================================================
// SEO HEAD
// ============================================================
useHead({
  title: 'Real Estate IRR Calculator — Calculate Investment Return Over Time (2026)',
  meta: [
    { name: 'description', content: 'Calculate IRR for real estate investments using cash flow, sale price, and holding period. Compare deals and evaluate true annualized return. Free online calculator.' },
    { property: 'og:title', content: 'Real Estate IRR Calculator — Calculate Investment Return Over Time (2026)' },
    { property: 'og:description', content: 'Calculate IRR for real estate investments using cash flow, sale price, and holding period. Compare deals and evaluate true annualized return.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://arvcalc.com/real-estate-irr-calculator' },
    { name: 'robots', content: 'index, follow' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Real Estate IRR Calculator (2026)' },
    { name: 'twitter:description', content: 'Calculate annualized IRR for real estate investments. Full cash-flow timeline, sensitivity analysis, and verdict.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://arvcalc.com/real-estate-irr-calculator' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'SoftwareApplication',
            name: 'Real Estate IRR Calculator',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web',
            description: 'Calculate IRR for real estate investments using cash flow, sale price, and holding period. Includes full cash-flow timeline, sensitivity analysis, and IRR edge-case handling.',
            url: 'https://arvcalc.com/real-estate-irr-calculator',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            creator: { '@type': 'Organization', name: 'RealCalc', url: 'https://arvcalc.com' }
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arvcalc.com' },
              { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://arvcalc.com/calculators' },
              { '@type': 'ListItem', position: 3, name: 'Real Estate IRR Calculator', item: 'https://arvcalc.com/real-estate-irr-calculator' }
            ]
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What is IRR in real estate?', acceptedAnswer: { '@type': 'Answer', text: 'IRR (Internal Rate of Return) is the annualized return rate that makes the net present value of all cash flows equal to zero. It accounts for initial investment, annual cash flows, timing, and exit sale proceeds.' } },
              { '@type': 'Question', name: 'How is IRR different from ROI?', acceptedAnswer: { '@type': 'Answer', text: 'ROI measures total return as a percentage of invested capital, ignoring timing. IRR is the annualized rate that accounts for when money is invested and received. A deal that doubles your money in 2 years has a much higher IRR than the same outcome over 10 years.' } },
              { '@type': 'Question', name: 'What is a good IRR for real estate?', acceptedAnswer: { '@type': 'Answer', text: 'Generally: IRR above 18% is excellent, 12-18% is good, 8-12% is concerning, and below 8% is weak for real estate. These are general thresholds, not guaranteed benchmarks.' } },
              { '@type': 'Question', name: 'Why might IRR not be available?', acceptedAnswer: { '@type': 'Answer', text: 'IRR cannot be calculated when cash flows never turn positive, or when the numerical solver fails to converge. This calculator displays the status clearly and explains the cause.' } },
              { '@type': 'Question', name: 'What is the multiple IRR problem?', acceptedAnswer: { '@type': 'Answer', text: 'When cash flows change sign more than once, multiple discount rates may satisfy NPV=0. This calculator flags this condition with a warning and recommends considering MIRR.' } }
            ]
          }
        ]
      })
    }
  ]
})
</script>
