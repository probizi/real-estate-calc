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
            class="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-lg transition hover:opacity-90"
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
            <li class="text-gray-700 font-semibold">Capital Gains Tax Calculator</li>
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
            Capital Gains Tax Calculator (Real Estate)
          </h1>
          <p class="text-gray-500 mt-2 text-base">Selling an investment property? See how much tax you might owe — and how much cash you'll actually keep.</p>
        </div>
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#saved-scenarios" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Saved Scenarios</a></li>
            <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            <li><a href="#what-is" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is Capital Gains Tax</a></li>
            <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
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
              <li><a href="#saved-scenarios" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Saved Scenarios</a></li>
              <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            </ul>
            <ul v-show="isNavExpanded" class="flex flex-col gap-y-2 mt-2">
              <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
              <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
              <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
              <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
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
         MOBILE LIVE RESULT BAR
    ═══════════════════════════════════════════════ -->
    <div class="lg:hidden sticky top-[4.5rem] z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <div class="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <svg class="w-4 h-4 flex-shrink-0" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <span v-if="calcMode === 'estimate-tax'">Total Tax Est.</span>
          <span v-else-if="calcMode === 'find-sale-price'">Required Sale Price</span>
          <span v-else>Max Federal Rate</span>
        </div>
        <div class="flex items-center gap-3">
          <!-- estimate-tax mode -->
          <template v-if="calcMode === 'estimate-tax'">
            <span v-if="hasResult" class="text-xl font-extrabold leading-none" :style="`color: ${verdict?.color || '#1e3a5f'}`">
              {{ formatCurrency(totalTax) }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="hasResult && verdict"
              class="text-xs font-bold px-2.5 py-1 rounded-full"
              :class="verdict.bgClass">
              {{ verdict.label }}
            </span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <!-- find-sale-price mode -->
          <template v-else-if="calcMode === 'find-sale-price'">
            <span v-if="findSalePrice !== null" class="text-xl font-extrabold leading-none text-blue-700">
              {{ formatCurrency(findSalePrice) }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="findSalePrice !== null" class="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">Required</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <!-- find-max-rate mode -->
          <template v-else>
            <span v-if="maxFederalRate !== null" class="text-xl font-extrabold leading-none text-emerald-700">
              {{ maxFederalRate.toFixed(2) }}%
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="maxFederalRate !== null" class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">Break-Even</span>
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
            <!-- Mode 1: Estimate Tax -->
            <button @click="calcMode = 'estimate-tax'"
              class="calc-mode-tab"
              :class="calcMode === 'estimate-tax' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'estimate-tax' ? 'color:#1e3a5f;' : ''">Estimate Tax</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'estimate-tax' ? 'text-amber-700' : 'text-gray-400'">Gain → Total Tax</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'estimate-tax' ? 'bg-amber-100 text-amber-800' : 'bg-gray-200 text-gray-400'">Standard</span>
            </button>
            <!-- Mode 2: Find Sale Price -->
            <button @click="calcMode = 'find-sale-price'"
              class="calc-mode-tab"
              :class="calcMode === 'find-sale-price' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-sale-price' ? 'color:#1e3a5f;' : ''">Find Sale Price</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-sale-price' ? 'text-blue-700' : 'text-gray-400'">Target Cash → Price</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-sale-price' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
            <!-- Mode 3: Find Max Rate -->
            <button @click="calcMode = 'find-max-rate'"
              class="calc-mode-tab"
              :class="calcMode === 'find-max-rate' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-max-rate' ? 'color:#1e3a5f;' : ''">Find Max Rate</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-max-rate' ? 'text-emerald-700' : 'text-gray-400'">Price → Break-Even Rate</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-max-rate' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
          </div>
          <div class="mt-2.5">
            <p v-if="calcMode === 'estimate-tax'" class="text-xs text-gray-500 leading-relaxed">
              Enter purchase info, sale details, and tax rates to estimate your total capital gains tax and net cash after tax.
            </p>
            <p v-else-if="calcMode === 'find-sale-price'" class="text-xs text-blue-700 leading-relaxed bg-blue-50 px-3 py-1.5 rounded-lg">
              Enter your basis, tax rates, and <strong>target cash after tax</strong> — the calculator will find the gross sale price you need to hit that goal.
            </p>
            <p v-else class="text-xs text-emerald-700 leading-relaxed bg-emerald-50 px-3 py-1.5 rounded-lg">
              Enter purchase info, sale price, and state tax rate — the calculator will show the <strong>maximum federal capital gains rate</strong> at which you still break even (cash after tax ≥ $0).
            </p>
          </div>
        </div>
      </div>

      <!-- TWO-COLUMN BODY -->
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch">

        <!-- ── INPUTS (left column) ── -->
        <div class="calc-inputs border-b lg:border-b-0 lg:border-r border-gray-200 bg-white min-w-0">

          <!-- ── SECTION: ADJUSTED BASIS ── -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Adjusted Basis</h2>
            </div>
            <div class="px-4 py-3 space-y-3">

              <!-- Purchase Price -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">
                  Purchase Price <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.purchasePrice" type="number" min="0" step="1000"
                    placeholder="Enter original purchase price"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                </div>
              </div>

              <!-- Purchase Closing Costs -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Purchase Closing Costs</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.purchaseClosingCosts" type="number" min="0" step="100"
                    placeholder="Optional: purchase closing costs added to basis"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Closing costs paid at purchase increase your cost basis and reduce your taxable gain.</p>
              </div>

              <!-- Capital Improvements -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Capital Improvements</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.capitalImprovements" type="number" min="0" step="100"
                    placeholder="Optional: total capital improvements"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Additions, renovations, and permanent improvements that added value add to your basis.</p>
              </div>

              <!-- Accumulated Depreciation -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Accumulated Depreciation</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.accumulatedDepreciation" type="number" min="0" step="100"
                    placeholder="Optional: total depreciation taken"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                </div>
                <!-- CALCULATOR-SPECIFIC: Depreciation guidance required by RIS v2 -->
                <div class="mt-2 p-2.5 rounded-xl bg-amber-50 border border-amber-200">
                  <p class="text-xs text-amber-800 font-medium">If you don't know accumulated depreciation, estimate it using a depreciation calculator or your tax records. Entering 0 may significantly understate tax.</p>
                  <NuxtLink to="/depreciation-calculator" class="text-xs text-amber-700 font-semibold underline mt-0.5 inline-block hover:text-amber-900 transition">→ Depreciation Calculator</NuxtLink>
                </div>
              </div>

              <!-- Adjusted Basis display -->
              <div v-if="adjustedBasis > 0" class="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-xs font-medium text-blue-800">
                Adjusted Basis: <span class="font-bold">{{ formatCurrency(adjustedBasis) }}</span>
                <span class="text-blue-500 ml-1">(purchase + costs + improvements − depreciation)</span>
              </div>

            </div>
          </div>

          <!-- ── SECTION: SALE DETAILS (Modes 1 & 3) ── -->
          <div v-if="calcMode === 'estimate-tax' || calcMode === 'find-max-rate'" class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Sale Details</h2>
            </div>
            <div class="px-4 py-3 space-y-3">

              <!-- Sale Price -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">
                  Sale Price <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.salePrice" type="number" min="0" step="1000"
                    placeholder="Enter expected sale price"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                </div>
              </div>

              <!-- Selling Costs -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Selling Costs</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.sellingCosts" type="number" min="0" step="100"
                    placeholder="Optional: broker fees and selling costs"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Agent commissions, title fees, and other costs reduce your net sale price.</p>
              </div>

              <!-- Mortgage Payoff -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Mortgage Payoff</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.mortgagePayoff" type="number" min="0" step="1000"
                    placeholder="Optional: remaining loan payoff"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                </div>
                <!-- CALCULATOR-SPECIFIC: Mortgage payoff clarification required by RIS -->
                <p class="text-xs text-gray-400 mt-1">Mortgage payoff reduces <strong>cash proceeds</strong>, not taxable gain. It does not affect the tax calculation.</p>
              </div>

            </div>
          </div>

          <!-- ── SECTION: TARGET CASH (Mode 2 only) ── -->
          <div v-if="calcMode === 'find-sale-price'" class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Target Proceeds</h2>
            </div>
            <div class="px-4 py-3 space-y-3">

              <!-- Target Cash After Tax -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">
                  Target Cash After Tax <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.targetCashAfterTax" type="number" min="0" step="1000"
                    placeholder="Enter desired after-tax cash proceeds"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                </div>
                <p class="text-xs text-gray-400 mt-1">The net cash you want to walk away with after all taxes and costs.</p>
              </div>

              <!-- Selling Costs (Mode 2) -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Selling Costs</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.sellingCosts" type="number" min="0" step="100"
                    placeholder="Optional: broker fees and selling costs"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                </div>
              </div>

              <!-- Mortgage Payoff (Mode 2) -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Mortgage Payoff</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.mortgagePayoff" type="number" min="0" step="1000"
                    placeholder="Optional: remaining loan payoff"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Does not affect taxable gain — reduces cash proceeds only.</p>
              </div>

            </div>
          </div>

          <!-- ── SECTION: TAX RATES ── -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Tax Rates</h2>
            </div>
            <div class="px-4 py-3 space-y-3">

              <!-- Federal Rate (hidden in Mode 3) -->
              <div v-if="calcMode !== 'find-max-rate'">
                <label class="block text-xs font-semibold text-gray-700 mb-1">
                  Federal Capital Gains Rate <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <input v-model="form.federalRate" type="number" min="0" max="40" step="0.1"
                    placeholder="Enter federal capital gains rate"
                    class="w-full pl-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">Typical long-term rates: 0%, 15%, or 20% depending on income. Short-term gains use ordinary income rates (up to 37%).</p>
              </div>

              <!-- Federal Rate display in Mode 3 -->
              <div v-if="calcMode === 'find-max-rate'" class="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium">
                Federal rate is the <strong>output</strong> in this mode — enter sale price and state rate to find the maximum rate at which you break even.
              </div>

              <!-- State Rate -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">State Capital Gains Rate</label>
                <div class="relative">
                  <input v-model="form.stateRate" type="number" min="0" max="20" step="0.1"
                    placeholder="Optional: state capital gains tax rate"
                    class="w-full pl-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
                <!-- CALCULATOR-SPECIFIC: State tax disclaimer from RIS v2 -->
                <p class="text-xs text-gray-400 mt-1">State tax is simplified as a flat rate on total gain. Some states tax capital gains as ordinary income, while others use different rules. This is a rough estimate.</p>
              </div>

              <!-- NIIT Toggle -->
              <!-- CALCULATOR-SPECIFIC: NIIT toggle required by RIS -->
              <div>
                <div class="flex items-start gap-3 p-3 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition cursor-pointer" @click="form.niitEnabled = !form.niitEnabled">
                  <div class="flex-shrink-0 mt-0.5">
                    <div class="w-5 h-5 rounded border-2 flex items-center justify-center transition"
                      :class="form.niitEnabled ? 'bg-yellow-400 border-yellow-400' : 'border-gray-300 bg-white'">
                      <svg v-if="form.niitEnabled" class="w-3 h-3" style="color: #1e3a5f;" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-gray-700">Include NIIT (Net Investment Income Tax)</p>
                    <p class="text-xs text-gray-400 mt-0.5">Adds 3.8% on total gain. NIIT is shown as an upper-bound estimate. Actual NIIT depends on income level and may apply to a smaller portion of gain.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- ── SECTION: PROPERTY INFO ── -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Property Info</h2>
            </div>
            <div class="px-4 py-3 space-y-3">

              <!-- Ownership Type -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Ownership Type</label>
                <select v-model="form.ownershipType"
                  class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm bg-white">
                  <option value="investment">Investment Property</option>
                  <option value="primary">Primary Residence</option>
                  <option value="mixed">Mixed-Use</option>
                </select>
              </div>

              <!-- Holding Period -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Holding Period (years)</label>
                <input v-model="form.holdingPeriod" type="number" min="0" step="0.5"
                  placeholder="Optional: years owned"
                  class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                <p class="text-xs text-gray-400 mt-1">Properties held under 1 year are typically taxed as ordinary income (short-term rates).</p>
              </div>

            </div>
          </div>

          <!-- Reset -->
          <div class="px-4 py-3">
            <button @click="resetForm"
              class="text-xs font-semibold text-gray-400 hover:text-gray-600 transition underline">
              Reset all fields
            </button>
          </div>

        </div>

        <!-- ── RESULTS (right column) ── -->
        <div class="flex flex-col lg:min-h-0">
          <div class="lg:sticky lg:top-[4.5rem] flex flex-col max-h-[calc(100vh-5rem)] overflow-y-auto">

            <!-- ── ESTIMATE TAX RESULT ── -->
            <div v-if="calcMode === 'estimate-tax'">

              <!-- Empty state -->
              <div v-if="!hasResult" class="flex flex-col items-center justify-center py-16 px-6 text-center">
                <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style="background: #f0f4f8;">
                  <svg class="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <p class="text-sm font-semibold text-gray-400 mb-1">Enter values above</p>
                <p class="text-xs text-gray-300">Purchase price, sale price, and federal rate required</p>
              </div>

              <!-- Result state -->
              <div v-else>

                <!-- Primary Result Card -->
                <div class="p-5 border-b border-gray-100">
                  <!-- Verdict Badge -->
                  <div v-if="verdict" class="flex items-center gap-2 mb-3">
                    <span class="text-xs font-bold px-3 py-1.5 rounded-full" :class="verdict.bgClass">
                      {{ verdict.label }}
                    </span>
                    <span class="text-xs text-gray-400">Tax drag: {{ taxDrag.toFixed(1) }}%</span>
                  </div>

                  <!-- Total Tax + Cash After Tax -->
                  <div class="grid grid-cols-2 gap-3 mb-3">
                    <div class="bg-gray-50 rounded-xl p-3 text-center">
                      <p class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Total Est. Tax</p>
                      <p class="text-2xl font-extrabold" style="color: #dc2626;">{{ formatCurrency(totalTax) }}</p>
                      <p class="text-xs text-gray-400 mt-0.5">Estimated only</p>
                    </div>
                    <div class="bg-gray-50 rounded-xl p-3 text-center">
                      <p class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Cash After Tax</p>
                      <p class="text-2xl font-extrabold" :style="`color: ${cashAfterTax >= 0 ? '#059669' : '#dc2626'}`">{{ formatCurrency(cashAfterTax) }}</p>
                      <p class="text-xs text-gray-400 mt-0.5">Net proceeds</p>
                    </div>
                  </div>

                  <!-- Key Metrics -->
                  <div class="space-y-1.5 text-sm">
                    <div class="flex justify-between items-center">
                      <span class="text-gray-500">Adjusted Basis</span>
                      <span class="font-semibold text-gray-800">{{ formatCurrency(adjustedBasis) }}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-500">Net Sale Price</span>
                      <span class="font-semibold text-gray-800">{{ formatCurrency(netSalePrice) }}</span>
                    </div>
                    <div class="flex justify-between items-center border-t border-gray-100 pt-1.5">
                      <span class="text-gray-700 font-semibold">Total Gain</span>
                      <span class="font-bold" :style="`color: ${totalGain >= 0 ? '#1e3a5f' : '#dc2626'}`">{{ formatCurrency(totalGain) }}</span>
                    </div>
                  </div>

                  <!-- No Gain Notice -->
                  <div v-if="totalGain <= 0" class="mt-3 p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-800 font-medium">
                    No taxable gain at these inputs — adjusted basis exceeds net sale price. No capital gains tax applies.
                  </div>
                </div>

                <!-- Tax Breakdown -->
                <div v-if="totalGain > 0" class="p-5 border-b border-gray-100">
                  <p class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Tax Breakdown (Estimated)</p>
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between items-center">
                      <div>
                        <span class="text-gray-600">Depreciation Recapture</span>
                        <span class="text-xs text-gray-400 ml-1">(25%)</span>
                      </div>
                      <span class="font-semibold text-gray-800">{{ formatCurrency(recaptureTax) }}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <div>
                        <span class="text-gray-600">Federal Capital Gains</span>
                        <span class="text-xs text-gray-400 ml-1">({{ form.federalRate || 0 }}%)</span>
                      </div>
                      <span class="font-semibold text-gray-800">{{ formatCurrency(federalCGTax) }}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <div>
                        <span class="text-gray-600">State Tax</span>
                        <span class="text-xs text-gray-400 ml-1">({{ form.stateRate || 0 }}% est.)</span>
                      </div>
                      <span class="font-semibold text-gray-800">{{ formatCurrency(stateTax) }}</span>
                    </div>
                    <div v-if="form.niitEnabled" class="flex justify-between items-center">
                      <div>
                        <span class="text-gray-600">NIIT (upper bound)</span>
                        <span class="text-xs text-gray-400 ml-1">(3.8%)</span>
                      </div>
                      <span class="font-semibold text-gray-800">{{ formatCurrency(niitTax) }}</span>
                    </div>
                    <div class="flex justify-between items-center border-t border-gray-200 pt-2">
                      <span class="font-bold text-gray-800">Total Estimated Tax</span>
                      <span class="font-extrabold text-red-600">{{ formatCurrency(totalTax) }}</span>
                    </div>
                  </div>
                  <!-- Recapture breakdown -->
                  <div v-if="depreciationRecapture > 0" class="mt-2 p-2 rounded-lg bg-gray-50 text-xs text-gray-500">
                    Recapture basis: {{ formatCurrency(depreciationRecapture) }} depreciation recaptured
                    at 25% → {{ formatCurrency(recaptureTax) }}. Remaining gain (LTCG): {{ formatCurrency(ltcgGain) }}.
                  </div>
                </div>

                <!-- Real Impact -->
                <div class="p-5 border-b border-gray-100">
                  <p class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Real Impact</p>
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between items-center">
                      <span class="text-gray-500">Cash Before Tax</span>
                      <span class="font-semibold text-gray-800">{{ formatCurrency(cashBeforeTax) }}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-500">Effective Tax Rate</span>
                      <span class="font-semibold text-gray-800">{{ totalGain > 0 ? effectiveTaxRate.toFixed(1) + '%' : '—' }}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-500">Tax Drag</span>
                      <span class="font-semibold" :style="`color: ${verdict?.color || '#1e3a5f'}`">{{ cashBeforeTax > 0 ? taxDrag.toFixed(1) + '%' : '—' }}</span>
                    </div>
                    <div v-if="Number(form.mortgagePayoff) > 0" class="flex justify-between items-center text-xs text-gray-400 border-t border-gray-100 pt-1.5">
                      <span>Mortgage Payoff (cash only)</span>
                      <span>−{{ formatCurrency(Number(form.mortgagePayoff)) }}</span>
                    </div>
                  </div>
                </div>

                <!-- Warnings -->
                <div v-if="warnings.length > 0" class="p-5 border-b border-gray-100 space-y-2">
                  <div v-for="w in warnings" :key="w.key"
                    class="flex gap-2 p-3 rounded-xl text-xs font-medium"
                    :class="w.type === 'warn' ? 'bg-amber-50 border border-amber-200 text-amber-800' : 'bg-blue-50 border border-blue-200 text-blue-800'">
                    <svg class="w-4 h-4 flex-shrink-0 mt-0.5" :class="w.type === 'warn' ? 'text-amber-500' : 'text-blue-500'" fill="currentColor" viewBox="0 0 20 20">
                      <path v-if="w.type === 'warn'" fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                      <path v-else fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ w.msg }}</span>
                  </div>
                </div>

                <!-- Deal Context -->
                <div v-if="insightText" class="p-5 border-b border-gray-100">
                  <p class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Deal Context</p>
                  <p class="text-xs text-gray-600 leading-relaxed">{{ insightText }}</p>
                  <!-- 1031 note if tax is high -->
                  <div v-if="verdict && (verdict.key === 'HIGH' || verdict.key === 'SEVERE' || verdict.key === 'CASH_SHORTFALL')"
                    class="mt-2 p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-800 font-medium">
                    Consider evaluating a
                    <NuxtLink to="/1031-exchange-calculator" class="underline font-bold hover:text-blue-900 transition">1031 Exchange</NuxtLink>
                    to defer this tax liability. This calculator does not determine eligibility.
                  </div>
                </div>

                <!-- Sensitivity Table -->
                <div v-if="sensitivityRows" class="p-5 border-b border-gray-100">
                  <p class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Federal Rate Sensitivity</p>
                  <div class="overflow-x-auto">
                    <table class="w-full text-xs">
                      <thead>
                        <tr class="text-gray-400 font-semibold">
                          <th class="text-left pb-2">Fed Rate</th>
                          <th class="text-right pb-2">Total Tax</th>
                          <th class="text-right pb-2">Cash After Tax</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="row in sensitivityRows" :key="row.rate"
                          class="border-t border-gray-100"
                          :class="row.isCurrent ? 'bg-amber-50' : ''">
                          <td class="py-1.5 font-semibold" :class="row.isCurrent ? 'text-amber-700' : 'text-gray-600'">
                            {{ row.rate }}%{{ row.isCurrent ? ' ←' : '' }}
                          </td>
                          <td class="py-1.5 text-right text-gray-700">{{ formatCurrency(row.totalTax) }}</td>
                          <td class="py-1.5 text-right font-semibold" :class="row.cashAfterTax >= 0 ? 'text-emerald-700' : 'text-red-600'">
                            {{ formatCurrency(row.cashAfterTax) }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Disclaimer -->
                <div class="p-5 border-b border-gray-100">
                  <p class="text-xs text-gray-400 leading-relaxed">
                    <strong class="text-gray-500">Disclaimer:</strong> These figures are <strong>estimates only</strong> and do not constitute tax advice. Actual tax depends on your income, filing status, state rules, and other factors. Consult a CPA or tax advisor before making decisions.
                  </p>
                </div>

              </div>
            </div>

            <!-- ── FIND SALE PRICE RESULT ── -->
            <div v-if="calcMode === 'find-sale-price'">
              <div v-if="findSalePrice === null" class="flex flex-col items-center justify-center py-16 px-6 text-center">
                <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style="background: #eff6ff;">
                  <svg class="w-8 h-8 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                  </svg>
                </div>
                <p class="text-sm font-semibold text-gray-400 mb-1">Enter values above</p>
                <p class="text-xs text-gray-300">Purchase price, target cash, and federal rate required</p>
              </div>
              <div v-else class="p-5">
                <div class="flex items-center gap-2 mb-4">
                  <span class="text-xs font-bold px-3 py-1.5 rounded-full bg-blue-100 text-blue-800">Required</span>
                  <span class="text-xs text-gray-400">to achieve target proceeds</span>
                </div>
                <div class="bg-blue-50 rounded-xl p-4 text-center mb-4">
                  <p class="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Required Gross Sale Price</p>
                  <p class="text-3xl font-extrabold text-blue-700">{{ formatCurrency(findSalePrice) }}</p>
                </div>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between items-center">
                    <span class="text-gray-500">Target Cash After Tax</span>
                    <span class="font-semibold text-gray-800">{{ formatCurrency(Number(form.targetCashAfterTax)) }}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-gray-500">Your Adjusted Basis</span>
                    <span class="font-semibold text-gray-800">{{ formatCurrency(adjustedBasis) }}</span>
                  </div>
                  <div class="flex justify-between items-center text-xs text-gray-400 border-t border-gray-100 pt-1.5">
                    <span>Selling costs included in price</span>
                    <span>−{{ formatCurrency(Number(form.sellingCosts) || 0) }}</span>
                  </div>
                </div>
                <p class="text-xs text-gray-400 mt-4 leading-relaxed">This is an estimate based on simplified tax logic. Actual required price may vary with depreciation recapture structure. Verify with a CPA.</p>
              </div>
            </div>

            <!-- ── FIND MAX RATE RESULT ── -->
            <div v-if="calcMode === 'find-max-rate'">
              <div v-if="maxFederalRate === null" class="flex flex-col items-center justify-center py-16 px-6 text-center">
                <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style="background: #f0fdf4;">
                  <svg class="w-8 h-8 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <p class="text-sm font-semibold text-gray-400 mb-1">Enter values above</p>
                <p class="text-xs text-gray-300">Purchase price and sale price required</p>
              </div>
              <div v-else-if="maxFederalRate <= 0" class="p-5">
                <div class="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800 font-medium">
                  At these inputs, recapture tax, state tax, and mortgage payoff already consume all cash before tax. No federal rate can make this transaction break even.
                </div>
              </div>
              <div v-else class="p-5">
                <div class="flex items-center gap-2 mb-4">
                  <span class="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800">Break-Even</span>
                  <span class="text-xs text-gray-400">max rate before cash shortfall</span>
                </div>
                <div class="bg-emerald-50 rounded-xl p-4 text-center mb-4">
                  <p class="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">Max Federal CG Rate</p>
                  <p class="text-3xl font-extrabold text-emerald-700">{{ maxFederalRate.toFixed(2) }}%</p>
                  <p class="text-xs text-emerald-600 mt-1">At this rate, cash after tax = $0</p>
                </div>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between items-center">
                    <span class="text-gray-500">Total Gain</span>
                    <span class="font-semibold text-gray-800">{{ formatCurrency(totalGain) }}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-gray-500">LTCG Subject to Fed Rate</span>
                    <span class="font-semibold text-gray-800">{{ formatCurrency(ltcgGain) }}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-gray-500">Cash Before Tax</span>
                    <span class="font-semibold text-gray-800">{{ formatCurrency(cashBeforeTax) }}</span>
                  </div>
                </div>
                <p class="text-xs text-gray-400 mt-4 leading-relaxed">If your actual federal rate is below {{ maxFederalRate.toFixed(1) }}%, you will have positive cash after tax. Above this rate, taxes exceed net proceeds.</p>
              </div>
            </div>

            <!-- ── ACTION BUTTONS ── -->
            <div v-if="hasResult || findSalePrice !== null || maxFederalRate !== null" class="p-4 border-t border-gray-100 space-y-2">

              <!-- Save Scenario -->
              <button v-if="hasResult"
                @click="openSaveScenario"
                class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
                style="background: #f59e0b; color: #1e3a5f;">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
                </svg>
                Save Scenario
              </button>

              <!-- Share + PDF -->
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
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Export PDF
                </button>
              </div>

              <!-- Email -->
              <button @click="showEmailModal = true"
                class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs text-gray-500 hover:text-gray-700 border border-dashed border-gray-200 hover:border-gray-300 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Email me this analysis
              </button>

            </div>

          </div>
        </div>

      </div><!-- end two-column -->
      </div><!-- end inner white card -->
      </div><!-- end gradient border -->

      <!-- Scenario Panel -->
      <div id="saved-scenarios" class="mt-8">
        <ScenarioPanel
          calculator="capital-gains-tax"
          :has-result="hasResult"
          :result="currentScenarioResult"
          :trigger-save="triggerScenarioSave"
          @saved="onScenarioSaved"
        />
      </div>

    </main>

    <!-- ═══════════════════════════════════════════════
         SEO CONTENT SECTIONS
    ═══════════════════════════════════════════════ -->
    <div class="max-w-[1100px] mx-auto px-4 pb-16">

      <!-- ── 1. OVERVIEW ── -->
      <section id="overview" class="mt-12">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Overview — Capital Gains Tax on Real Estate</h2>
        <div class="space-y-4 text-gray-600 leading-relaxed">
          <p>When you sell an investment property for more than you paid, the profit is subject to capital gains tax. But the calculation is rarely as simple as subtracting your purchase price from the sale price. Your <strong>adjusted basis</strong> — which includes closing costs, capital improvements, and accumulated depreciation — determines the actual taxable gain.</p>
          <p>Depreciation is particularly important: if you've taken depreciation deductions over the years (standard for rental properties), the IRS requires you to "recapture" that depreciation at sale, taxed at up to 25% regardless of your income level. This recapture often surprises investors who focus only on the long-term capital gains rate.</p>
          <p>State taxes add another layer of complexity. Most states tax capital gains as ordinary income, though a few exempt them entirely. This calculator uses a simplified flat-rate approach for state tax — useful for quick estimates, but not a substitute for state-specific analysis.</p>
          <p>Finally, high-income investors may owe the Net Investment Income Tax (NIIT) — an additional 3.8% on investment income including capital gains. This calculator shows NIIT as an optional upper-bound estimate. Always verify with a tax professional whether NIIT applies to your specific situation.</p>
        </div>
      </section>

      <!-- ── 2. HOW TO USE ── -->
      <section id="how-to-use" class="mt-12">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">How to Use This Calculator</h2>
        <ol class="space-y-3 text-gray-600 leading-relaxed list-none">
          <li class="flex gap-3">
            <span class="flex-shrink-0 w-7 h-7 rounded-full text-white text-sm font-bold flex items-center justify-center" style="background: #1e3a5f;">1</span>
            <div><strong class="text-gray-800">Enter your adjusted basis.</strong> Start with the purchase price, then add closing costs paid at acquisition and any capital improvements made during ownership. Subtract accumulated depreciation taken on the property over the holding period.</div>
          </li>
          <li class="flex gap-3">
            <span class="flex-shrink-0 w-7 h-7 rounded-full text-white text-sm font-bold flex items-center justify-center" style="background: #1e3a5f;">2</span>
            <div><strong class="text-gray-800">Enter sale details.</strong> Input the expected sale price and anticipated selling costs (broker commissions, title fees, etc.). If you have a mortgage to pay off, enter the payoff amount — it reduces your cash but does not affect taxable gain.</div>
          </li>
          <li class="flex gap-3">
            <span class="flex-shrink-0 w-7 h-7 rounded-full text-white text-sm font-bold flex items-center justify-center" style="background: #1e3a5f;">3</span>
            <div><strong class="text-gray-800">Set your tax rates.</strong> Enter your applicable federal capital gains rate (0%, 15%, or 20% for long-term; higher for short-term). Add a state rate if applicable. Toggle NIIT if your income is above $200K (single) or $250K (married).</div>
          </li>
          <li class="flex gap-3">
            <span class="flex-shrink-0 w-7 h-7 rounded-full text-white text-sm font-bold flex items-center justify-center" style="background: #1e3a5f;">4</span>
            <div><strong class="text-gray-800">Review the result.</strong> The calculator shows total estimated tax, cash after tax, and a tax drag verdict. Use the breakdown to understand how much comes from depreciation recapture vs. long-term gains.</div>
          </li>
          <li class="flex gap-3">
            <span class="flex-shrink-0 w-7 h-7 rounded-full text-white text-sm font-bold flex items-center justify-center" style="background: #1e3a5f;">5</span>
            <div><strong class="text-gray-800">Evaluate your options.</strong> If tax drag is high (above 25%), consider the federal rate sensitivity table to understand how rate changes affect your take-home. Evaluate a 1031 exchange to defer the tax if you plan to reinvest.</div>
          </li>
        </ol>
        <div class="mt-5 p-4 rounded-2xl bg-amber-50 border border-amber-200">
          <p class="text-sm font-bold text-amber-800 mb-1">Pro Tips</p>
          <ul class="text-sm text-amber-700 space-y-1 list-disc list-inside">
            <li>Use the <strong>Find Sale Price</strong> mode to reverse-engineer the price you need to hit a target after-tax proceeds.</li>
            <li>Use the <strong>Find Max Rate</strong> mode to stress-test: at what rate does this deal stop making financial sense?</li>
            <li>Save multiple scenarios to compare different sale prices, depreciation figures, or state tax assumptions.</li>
          </ul>
        </div>
      </section>

      <!-- ── 3. INPUTS & OUTPUTS ── -->
      <section id="inputs-outputs" class="mt-12">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Inputs &amp; Outputs</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr style="background: #1e3a5f;" class="text-white">
                <th class="text-left px-4 py-3 rounded-tl-xl">Field</th>
                <th class="text-left px-4 py-3">Type</th>
                <th class="text-left px-4 py-3 rounded-tr-xl">Description</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr class="bg-white hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">Purchase Price</td><td class="px-4 py-2.5 text-gray-400">Required</td><td class="px-4 py-2.5 text-gray-600">Original acquisition cost</td></tr>
              <tr class="bg-gray-50 hover:bg-gray-100"><td class="px-4 py-2.5 font-semibold text-gray-700">Purchase Closing Costs</td><td class="px-4 py-2.5 text-gray-400">Optional</td><td class="px-4 py-2.5 text-gray-600">Closing costs at purchase — added to basis</td></tr>
              <tr class="bg-white hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">Capital Improvements</td><td class="px-4 py-2.5 text-gray-400">Optional</td><td class="px-4 py-2.5 text-gray-600">Permanent value-adding improvements</td></tr>
              <tr class="bg-gray-50 hover:bg-gray-100"><td class="px-4 py-2.5 font-semibold text-gray-700">Accumulated Depreciation</td><td class="px-4 py-2.5 text-gray-400">Optional</td><td class="px-4 py-2.5 text-gray-600">Total depreciation taken — reduces basis, triggers recapture</td></tr>
              <tr class="bg-white hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">Sale Price</td><td class="px-4 py-2.5 text-gray-400">Required</td><td class="px-4 py-2.5 text-gray-600">Expected gross sale price</td></tr>
              <tr class="bg-gray-50 hover:bg-gray-100"><td class="px-4 py-2.5 font-semibold text-gray-700">Selling Costs</td><td class="px-4 py-2.5 text-gray-400">Optional</td><td class="px-4 py-2.5 text-gray-600">Broker commissions, title fees — reduces net sale price</td></tr>
              <tr class="bg-white hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">Mortgage Payoff</td><td class="px-4 py-2.5 text-gray-400">Optional</td><td class="px-4 py-2.5 text-gray-600">Remaining loan balance — affects cash only, not tax</td></tr>
              <tr class="bg-gray-50 hover:bg-gray-100"><td class="px-4 py-2.5 font-semibold text-gray-700">Federal Rate</td><td class="px-4 py-2.5 text-gray-400">Required</td><td class="px-4 py-2.5 text-gray-600">Your applicable federal capital gains rate (%)</td></tr>
              <tr class="bg-white hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">State Rate</td><td class="px-4 py-2.5 text-gray-400">Optional</td><td class="px-4 py-2.5 text-gray-600">State capital gains rate — applied as flat rate on total gain</td></tr>
              <tr class="bg-gray-50 hover:bg-gray-100"><td class="px-4 py-2.5 font-semibold text-gray-700">NIIT Toggle</td><td class="px-4 py-2.5 text-gray-400">Optional</td><td class="px-4 py-2.5 text-gray-600">Adds 3.8% NIIT on total gain (upper-bound estimate)</td></tr>
              <tr class="bg-white hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">Ownership Type</td><td class="px-4 py-2.5 text-gray-400">Optional</td><td class="px-4 py-2.5 text-gray-600">Investment / Primary / Mixed-use — affects warnings shown</td></tr>
              <tr class="bg-gray-50 hover:bg-gray-100"><td class="px-4 py-2.5 font-semibold text-gray-700">Holding Period</td><td class="px-4 py-2.5 text-gray-400">Optional</td><td class="px-4 py-2.5 text-gray-600">Years owned — triggers short-term warning if &lt;1 year</td></tr>
            </tbody>
            <tfoot>
              <tr style="background: #f0f4f8;">
                <td class="px-4 py-2.5 font-bold text-gray-700 rounded-bl-xl">Total Est. Tax</td><td class="px-4 py-2.5 text-gray-400">Output</td><td class="px-4 py-2.5 text-gray-600">Recapture + Federal CG + State + NIIT</td>
              </tr>
              <tr style="background: #f0f4f8;">
                <td class="px-4 py-2.5 font-bold text-gray-700">Cash After Tax</td><td class="px-4 py-2.5 text-gray-400">Output</td><td class="px-4 py-2.5 text-gray-600">Net proceeds after all taxes and mortgage payoff</td>
              </tr>
              <tr style="background: #f0f4f8;">
                <td class="px-4 py-2.5 font-bold text-gray-700">Tax Drag</td><td class="px-4 py-2.5 text-gray-400">Output</td><td class="px-4 py-2.5 text-gray-600">Total tax as % of cash before tax (drives verdict)</td>
              </tr>
              <tr style="background: #f0f4f8;">
                <td class="px-4 py-2.5 font-bold text-gray-700 rounded-br-xl">Verdict</td><td class="px-4 py-2.5 text-gray-400">Output</td><td class="px-4 py-2.5 text-gray-600">Low / Moderate / High / Severe / Cash Shortfall</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      <!-- ── 4. FORMULA ── -->
      <section id="formula" class="mt-12">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Formula — Step by Step</h2>
        <div class="space-y-4 text-gray-600 leading-relaxed">
          <p>The capital gains tax calculation for real estate involves five sequential steps. Each step builds on the previous, and skipping any one of them leads to an inaccurate estimate.</p>
          <div class="bg-gray-50 rounded-2xl p-5 border border-gray-200 space-y-3 font-mono text-sm">
            <div class="pb-2 border-b border-gray-200">
              <span class="font-bold text-gray-800">Step 1 — Adjusted Basis</span>
              <div class="mt-1 text-gray-600">Adjusted Basis = Purchase Price + Closing Costs + Improvements − Accumulated Depreciation</div>
            </div>
            <div class="pb-2 border-b border-gray-200">
              <span class="font-bold text-gray-800">Step 2 — Net Sale Price</span>
              <div class="mt-1 text-gray-600">Net Sale Price = Sale Price − Selling Costs</div>
            </div>
            <div class="pb-2 border-b border-gray-200">
              <span class="font-bold text-gray-800">Step 3 — Total Gain &amp; Split</span>
              <div class="mt-1 text-gray-600">Total Gain = Net Sale Price − Adjusted Basis</div>
              <div class="mt-0.5 text-gray-600">Depreciation Recapture = min(Accumulated Depreciation, Total Gain)</div>
              <div class="mt-0.5 text-gray-600">Long-Term Capital Gain = Total Gain − Depreciation Recapture</div>
            </div>
            <div class="pb-2 border-b border-gray-200">
              <span class="font-bold text-gray-800">Step 4 — Tax Calculation</span>
              <div class="mt-1 text-gray-600">Recapture Tax = Depreciation Recapture × 25%</div>
              <div class="mt-0.5 text-gray-600">Federal CG Tax = Long-Term Gain × Federal Rate</div>
              <div class="mt-0.5 text-gray-600">State Tax = Total Gain × State Rate (simplified flat rate)</div>
              <div class="mt-0.5 text-gray-600">NIIT (if toggled) = Total Gain × 3.8% (upper-bound estimate)</div>
              <div class="mt-0.5 text-gray-600 font-bold">Total Tax = Recapture Tax + Federal CG Tax + State Tax + NIIT</div>
            </div>
            <div>
              <span class="font-bold text-gray-800">Step 5 — Cash Proceeds</span>
              <div class="mt-1 text-gray-600">Cash Before Tax = Net Sale Price − Mortgage Payoff</div>
              <div class="mt-0.5 text-gray-600">Cash After Tax = Cash Before Tax − Total Tax</div>
              <div class="mt-0.5 text-gray-600">Tax Drag = Total Tax ÷ Cash Before Tax × 100%</div>
            </div>
          </div>
          <div class="bg-blue-50 rounded-2xl p-4 border border-blue-200">
            <p class="text-sm font-bold text-blue-800 mb-2">Real-World Example</p>
            <p class="text-sm text-blue-700">Purchase: $300,000 | Improvements: $20,000 | Depreciation: $40,000 | Sale: $480,000 | Selling Costs: $28,800 | Federal Rate: 15% | State Rate: 5%</p>
            <ul class="text-sm text-blue-700 mt-2 space-y-1 list-disc list-inside">
              <li>Adjusted Basis: $300,000 + $20,000 − $40,000 = $280,000</li>
              <li>Net Sale Price: $480,000 − $28,800 = $451,200</li>
              <li>Total Gain: $451,200 − $280,000 = $171,200</li>
              <li>Recapture: min($40,000, $171,200) = $40,000 → Tax: $40,000 × 25% = $10,000</li>
              <li>LTCG: $171,200 − $40,000 = $131,200 → Federal: $131,200 × 15% = $19,680</li>
              <li>State: $171,200 × 5% = $8,560</li>
              <li>Total Tax: $10,000 + $19,680 + $8,560 = $38,240</li>
              <li>Cash After Tax (no mortgage): $451,200 − $38,240 = $412,960</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ── 5. WHAT IS CAPITAL GAINS TAX ── -->
      <section id="what-is" class="mt-12">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">What Is Capital Gains Tax on Real Estate?</h2>
        <div class="space-y-4 text-gray-600 leading-relaxed">
          <p><strong>Capital gains tax</strong> is the federal (and often state) tax on the profit from selling an asset. For real estate, it applies when you sell a property for more than your adjusted basis. The tax rate depends on how long you held the property: <strong>long-term gains</strong> (held over 1 year) receive preferential rates of 0%, 15%, or 20%. <strong>Short-term gains</strong> (held 1 year or less) are taxed as ordinary income — up to 37%.</p>
          <p><strong>Depreciation recapture</strong> is a critical component that many first-time sellers overlook. If you've deducted depreciation on a rental property, the IRS taxes that recaptured amount at up to 25% — regardless of your capital gains rate. This applies even if you never actually claimed depreciation (the IRS assumes "allowed or allowable" depreciation).</p>
          <p>The formula for your taxable gain is not simply Sale Price minus Purchase Price. Your <strong>adjusted basis</strong> accounts for all the basis-changing events during ownership: closing costs at purchase add to basis; capital improvements add to basis; depreciation reduces basis. Getting the adjusted basis right is essential for an accurate estimate.</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-center">
              <p class="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-1">Long-Term Rates</p>
              <p class="text-lg font-extrabold text-emerald-800">0% / 15% / 20%</p>
              <p class="text-xs text-emerald-600 mt-0.5">Held &gt; 1 year</p>
            </div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
              <p class="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Recapture Rate</p>
              <p class="text-lg font-extrabold text-amber-800">Up to 25%</p>
              <p class="text-xs text-amber-600 mt-0.5">On depreciation taken</p>
            </div>
            <div class="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
              <p class="text-xs font-bold text-red-700 uppercase tracking-wide mb-1">Short-Term Rates</p>
              <p class="text-lg font-extrabold text-red-800">Ordinary income</p>
              <p class="text-xs text-red-600 mt-0.5">Held ≤ 1 year</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 6. RESULT MEANING ── -->
      <section id="result-meaning" class="mt-12">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">What Your Result Means</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">Low Tax Drag</span>
              <span class="text-xs text-gray-400">&lt; 15%</span>
            </div>
            <p class="text-sm text-gray-600">Strong after-tax liquidity. A small fraction of your proceeds go to tax. Selling now is likely favorable — consider deploying capital to a new opportunity.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">Moderate</span>
              <span class="text-xs text-gray-400">15–25%</span>
            </div>
            <p class="text-sm text-gray-600">Tax is meaningful but not severe. Compare the after-tax proceeds against the opportunity cost of holding. A 1031 exchange may be worth evaluating if you plan to reinvest.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">High Tax Drag</span>
              <span class="text-xs text-gray-400">25–35%</span>
            </div>
            <p class="text-sm text-gray-600">A significant share of proceeds goes to tax. Explore timing strategies (waiting for long-term treatment), installment sales, or a 1031 exchange before committing to a sale.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-red-100 text-red-800">Severe</span>
              <span class="text-xs text-gray-400">&gt; 35%</span>
            </div>
            <p class="text-sm text-gray-600">Tax consumes an outsized portion of equity. A 1031 exchange, installment sale, or opportunity zone investment should be seriously evaluated. Consult a tax advisor before proceeding.</p>
          </div>
        </div>
        <div class="bg-gray-50 rounded-2xl p-4 border border-gray-200 text-sm text-gray-600">
          <strong class="text-gray-800">Cash Shortfall:</strong> When total tax plus mortgage payoff exceed net sale proceeds, you'll need to bring cash to the table. This is more common than many sellers expect when large mortgages combine with significant accumulated depreciation. Consider all-cash buyers, renegotiating the price, or a 1031 exchange to avoid this scenario.
        </div>
      </section>

      <!-- ── 7. BENCHMARKS ── -->
      <section id="benchmarks" class="mt-12">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Capital Gains Tax Benchmarks by State &amp; Scenario</h2>
        <div class="space-y-4 text-gray-600 leading-relaxed">
          <p>Federal capital gains tax rates have three tiers for long-term gains in 2026: 0% (taxable income under ~$47K single / ~$94K married), 15% (most investors), and 20% (income over ~$518K single / ~$583K married). On top of these, the NIIT adds 3.8% for high-income taxpayers.</p>
          <p>State capital gains tax rates vary dramatically. Several states — including Florida, Texas, Nevada, and Washington — impose no income tax and thus no state capital gains tax. California, on the other hand, taxes capital gains at ordinary income rates up to 13.3%, one of the highest in the country.</p>
        </div>
        <div class="overflow-x-auto mt-4">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr style="background: #1e3a5f;" class="text-white">
                <th class="text-left px-4 py-3 rounded-tl-xl">State</th>
                <th class="text-left px-4 py-3">CG Tax Treatment</th>
                <th class="text-left px-4 py-3">Max Rate (2026 est.)</th>
                <th class="text-left px-4 py-3 rounded-tr-xl">Notes</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr class="bg-white hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">California</td><td class="px-4 py-2.5 text-gray-600">Ordinary income</td><td class="px-4 py-2.5 text-gray-700 font-semibold">13.3%</td><td class="px-4 py-2.5 text-gray-500">No special CG rate</td></tr>
              <tr class="bg-gray-50 hover:bg-gray-100"><td class="px-4 py-2.5 font-semibold text-gray-700">New York</td><td class="px-4 py-2.5 text-gray-600">Ordinary income</td><td class="px-4 py-2.5 text-gray-700 font-semibold">10.9%</td><td class="px-4 py-2.5 text-gray-500">+ NYC surcharge up to 3.876%</td></tr>
              <tr class="bg-white hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">Oregon</td><td class="px-4 py-2.5 text-gray-600">Ordinary income</td><td class="px-4 py-2.5 text-gray-700 font-semibold">9.9%</td><td class="px-4 py-2.5 text-gray-500">No special CG rate</td></tr>
              <tr class="bg-gray-50 hover:bg-gray-100"><td class="px-4 py-2.5 font-semibold text-gray-700">Minnesota</td><td class="px-4 py-2.5 text-gray-600">Ordinary income</td><td class="px-4 py-2.5 text-gray-700 font-semibold">9.85%</td><td class="px-4 py-2.5 text-gray-500">No special CG rate</td></tr>
              <tr class="bg-white hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">Colorado</td><td class="px-4 py-2.5 text-gray-600">Ordinary income</td><td class="px-4 py-2.5 text-gray-700 font-semibold">4.4%</td><td class="px-4 py-2.5 text-gray-500">Flat rate</td></tr>
              <tr class="bg-gray-50 hover:bg-gray-100"><td class="px-4 py-2.5 font-semibold text-gray-700">Texas</td><td class="px-4 py-2.5 text-gray-600">None</td><td class="px-4 py-2.5 text-gray-700 font-semibold">0%</td><td class="px-4 py-2.5 text-gray-500">No state income tax</td></tr>
              <tr class="bg-white hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">Florida</td><td class="px-4 py-2.5 text-gray-600">None</td><td class="px-4 py-2.5 text-gray-700 font-semibold">0%</td><td class="px-4 py-2.5 text-gray-500">No state income tax</td></tr>
              <tr class="bg-gray-50 hover:bg-gray-100"><td class="px-4 py-2.5 font-semibold text-gray-700">Nevada</td><td class="px-4 py-2.5 text-gray-600">None</td><td class="px-4 py-2.5 text-gray-700 font-semibold">0%</td><td class="px-4 py-2.5 text-gray-500">No state income tax</td></tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-sm text-amber-800">
          <strong>State tax disclaimer:</strong> State tax is simplified in this calculator as a flat rate on total gain. Some states tax capital gains as ordinary income with brackets, while others use different rules. Always verify with a state-specific tax resource or CPA.
        </div>
      </section>

      <!-- ── 8. STRATEGY ── -->
      <section id="strategy" class="mt-12">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Strategy — Managing Capital Gains Tax on a Sale</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center mb-3" style="background: #f0f4f8;">
              <svg class="w-5 h-5" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
              </svg>
            </div>
            <h3 class="font-bold text-gray-800 mb-1">1031 Exchange</h3>
            <p class="text-sm text-gray-600">Defer all capital gains and depreciation recapture tax by reinvesting proceeds into a like-kind replacement property within 45/180 day deadlines. Tax is deferred — not eliminated — but allows full equity reinvestment. This calculator does not determine eligibility; consult a Qualified Intermediary.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center mb-3" style="background: #f0f4f8;">
              <svg class="w-5 h-5" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="font-bold text-gray-800 mb-1">Hold to Long-Term Status</h3>
            <p class="text-sm text-gray-600">If your holding period is under 1 year, waiting until the 1-year mark converts your gain from short-term (ordinary income rates up to 37%) to long-term rates (0%, 15%, or 20%). This alone can save tens of thousands on a significant gain. Use the sensitivity table to quantify the difference.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center mb-3" style="background: #f0f4f8;">
              <svg class="w-5 h-5" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <h3 class="font-bold text-gray-800 mb-1">Installment Sale</h3>
            <p class="text-sm text-gray-600">Rather than receiving all proceeds at closing, spread payments over several years via a seller-financed note. This spreads the capital gains over multiple tax years, potentially keeping you in lower brackets each year. Note: depreciation recapture is typically due in the year of sale, regardless of payment schedule.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center mb-3" style="background: #f0f4f8;">
              <svg class="w-5 h-5" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <h3 class="font-bold text-gray-800 mb-1">Opportunity Zone Investment</h3>
            <p class="text-sm text-gray-600">Invest capital gains into a Qualified Opportunity Fund (QOF) within 180 days of the sale. Gain recognition is deferred, and if held 10+ years, appreciation in the QOF itself may be tax-free. Best for investors with large gains who can tolerate a 10-year hold. Consult a tax attorney familiar with OZ rules.</p>
          </div>
        </div>
        <div class="mt-5 p-4 rounded-2xl bg-blue-50 border border-blue-200 text-sm text-blue-800">
          <strong>Key principle:</strong> The goal of tax planning is not to avoid tax — it's to time and structure it optimally. Enter your values above to see how much is at stake before choosing a strategy.
        </div>
      </section>

      <!-- ── 9. APPLICATIONS ── -->
      <section id="applications" class="mt-12">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Applications — When to Use This Calculator</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <h3 class="font-bold text-gray-800 mb-2">Pre-Sale Decision Analysis</h3>
            <p class="text-sm text-gray-600">Before listing a property, understand exactly how much of the sale price you'll keep. Compare different price points and timing scenarios to set a realistic net proceeds expectation.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <h3 class="font-bold text-gray-800 mb-2">1031 Exchange Evaluation</h3>
            <p class="text-sm text-gray-600">Quantify the tax you'd owe if you sold outright vs. what you'd defer with a 1031 exchange. The deferred amount represents additional capital available for reinvestment into the replacement property.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <h3 class="font-bold text-gray-800 mb-2">Portfolio Repositioning</h3>
            <p class="text-sm text-gray-600">When rotating out of one property type into another, calculate after-tax proceeds from the sale to know exactly how much capital you have to deploy. Tax efficiency is a key input to portfolio restructuring decisions.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <h3 class="font-bold text-gray-800 mb-2">Depreciation Impact Modeling</h3>
            <p class="text-sm text-gray-600">Run multiple scenarios with different depreciation figures to understand the marginal cost of accelerated depreciation strategies. Bonus depreciation upfront lowers current taxes but increases recapture tax at sale.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <h3 class="font-bold text-gray-800 mb-2">Offer Negotiation Support</h3>
            <p class="text-sm text-gray-600">Use the Find Sale Price mode to determine the minimum gross price needed to achieve your after-tax target. This prevents accepting an offer that looks attractive on the surface but delivers insufficient after-tax proceeds.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <h3 class="font-bold text-gray-800 mb-2">State Tax Comparison</h3>
            <p class="text-sm text-gray-600">Run the same scenario with different state rates to compare the after-tax outcome of selling in one state vs. another. Particularly useful for investors with properties in multiple states or considering relocation.</p>
          </div>
        </div>
      </section>

      <!-- ── 10. INDUSTRY STANDARDS ── -->
      <section id="industry-standards" class="mt-12">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Industry Standards</h2>
        <div class="space-y-4">
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 class="font-bold text-gray-800 mb-2">IRC Section 1250 — Depreciation Recapture</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Under IRS Section 1250, depreciation taken on real property is subject to recapture when the property is sold. The recapture is taxed at a maximum rate of 25% ("unrecaptured Section 1250 gain"). This applies to all residential and commercial rental property where straight-line depreciation was taken. The 25% rate applies regardless of the investor's ordinary income tax bracket — it is a hard cap specific to real estate depreciation recapture.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 class="font-bold text-gray-800 mb-2">IRC Section 1031 — Like-Kind Exchange</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Section 1031 of the Internal Revenue Code allows investors to defer capital gains and depreciation recapture by exchanging one investment property for another like-kind property. The 45-day identification window and 180-day closing deadline are strict — missing either deadline eliminates the deferral entirely. A Qualified Intermediary (QI) must hold the exchange proceeds; the seller cannot take constructive receipt of funds.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 class="font-bold text-gray-800 mb-2">IRC Section 121 — Primary Residence Exclusion</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Single filers who have owned and used a home as their primary residence for at least 2 of the last 5 years can exclude up to $250,000 of capital gains from tax. Married filers filing jointly can exclude up to $500,000. This exclusion does not apply to depreciation recapture — any depreciation taken (e.g., for a home office or prior rental use) is still subject to recapture tax. This calculator does not implement Section 121; primary residence cases show a warning.</p>
          </div>
        </div>
      </section>

      <!-- ── 11. LIMITATIONS ── -->
      <section id="limitations" class="mt-12">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Limitations</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <h3 class="font-bold text-gray-800 mb-2">Simplified State Tax</h3>
            <p class="text-sm text-gray-600">State capital gains tax is estimated as a flat rate on total gain. In practice, states use a variety of methods: some apply progressive brackets, others use ordinary income rates with phase-outs, and a few offer partial exclusions for real estate gains. This calculator provides a rough estimate only.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <h3 class="font-bold text-gray-800 mb-2">NIIT Upper-Bound Estimate</h3>
            <p class="text-sm text-gray-600">NIIT (3.8%) applies only to net investment income that exceeds the MAGI threshold ($200K single / $250K married). This calculator applies it to the full gain as an upper-bound estimate. Actual NIIT may be zero or apply to only a portion of the gain depending on total income.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <h3 class="font-bold text-gray-800 mb-2">No Section 121 Exclusion</h3>
            <p class="text-sm text-gray-600">The primary residence exclusion (up to $250K/$500K) is not calculated. If the property qualifies for Section 121, actual tax may be substantially lower. A warning is shown when primary residence is selected, but the estimate does not incorporate the exclusion.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <h3 class="font-bold text-gray-800 mb-2">No Income-Level Rate Determination</h3>
            <p class="text-sm text-gray-600">This calculator requires you to enter your applicable federal rate — it does not determine which rate applies based on your income. Capital gains rate brackets change annually and depend on filing status, AGI, and other income. Use IRS rate schedules or consult a CPA to determine the correct rate before entry.</p>
          </div>
        </div>
        <div class="bg-gray-50 rounded-2xl p-4 border border-gray-200">
          <p class="text-sm font-bold text-gray-700 mb-2">When not to rely solely on this calculator:</p>
          <ul class="text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>Primary residences with potential Section 121 eligibility</li>
            <li>Mixed-use properties with complex allocation between residential and commercial use</li>
            <li>Properties with Section 1245 personal property recapture (equipment, improvements)</li>
            <li>Installment sales where gain is spread across multiple tax years</li>
            <li>Properties with passive loss carryforwards that may offset gain</li>
            <li>Transactions in states with complex capital gains tax regimes</li>
          </ul>
        </div>
      </section>

      <!-- ── 12. COMMON MISTAKES ── -->
      <section id="common-mistakes" class="mt-12">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">5 Common Mistakes When Estimating Capital Gains Tax</h2>
        <ol class="space-y-4">
          <li class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <p class="text-sm font-bold text-gray-800 mb-1">1. Forgetting Depreciation Recapture</p>
            <p class="text-sm text-gray-600">The most common mistake. Many investors know their purchase price and sale price but don't account for accumulated depreciation — which reduces basis and triggers recapture tax at 25%. On a property held 15 years, this can add $30,000–$80,000 in tax. Always enter accumulated depreciation even if you're unsure of the exact figure.</p>
          </li>
          <li class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <p class="text-sm font-bold text-gray-800 mb-1">2. Assuming Mortgage Payoff Reduces Tax</p>
            <p class="text-sm text-gray-600">A large mortgage payoff can dramatically reduce your cash proceeds — sometimes to near zero. But it does not reduce taxable gain. Tax is calculated on the gain (sale price minus basis), not on the cash received. This catches sellers off guard when taxes are due on gains they don't actually receive as cash.</p>
          </li>
          <li class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <p class="text-sm font-bold text-gray-800 mb-1">3. Using the Wrong Federal Rate</p>
            <p class="text-sm text-gray-600">The 15% long-term rate applies to most investors, but not all. If your income is high enough to push you into the 20% bracket — or if you held the property short-term — the wrong rate understates your liability significantly. Verify the applicable rate using current IRS income thresholds before making decisions.</p>
          </li>
          <li class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <p class="text-sm font-bold text-gray-800 mb-1">4. Not Including Capital Improvements in Basis</p>
            <p class="text-sm text-gray-600">Every dollar of documented capital improvement (roof replacement, HVAC, additions) increases your basis and reduces taxable gain — dollar for dollar. Many investors fail to track and include these, overstating their gain and overpaying tax. Keep records of all significant improvements throughout ownership.</p>
          </li>
          <li class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <p class="text-sm font-bold text-gray-800 mb-1">5. Ignoring State Tax Entirely</p>
            <p class="text-sm text-gray-600">In states like California or New York, state capital gains tax can rival the federal liability. A California investor in the 13.3% bracket owes more to the state than to the federal government at the 15% rate. Always include state tax in your pre-sale analysis — especially if considering a 1031 exchange, where state rules may differ from federal rules.</p>
          </li>
        </ol>
      </section>

      <!-- ── 13. FAQ ── -->
      <section id="faq" class="mt-12">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions</h2>
        <div class="space-y-3">
          <div v-for="(faq, i) in faqs" :key="i"
            class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <button
              @click="toggleFaq(i)"
              class="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition">
              <span class="font-semibold text-gray-800 text-sm pr-4">{{ faq.q }}</span>
              <svg class="w-4 h-4 flex-shrink-0 transition-transform duration-200 text-gray-400"
                :class="openFaq === i ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="openFaq === i" class="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </section>

      <!-- ── 14. RELATED CALCULATORS ── -->
      <section id="related-calculators" class="mt-12">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Related Calculators</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NuxtLink to="/1031-exchange-calculator" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition group">
            <h3 class="font-bold text-gray-800 group-hover:text-yellow-700 transition mb-1">1031 Exchange Calculator</h3>
            <p class="text-sm text-gray-500">Model the tax deferral from a like-kind exchange and see how much additional capital you can deploy.</p>
          </NuxtLink>
          <NuxtLink to="/real-estate-roi-calculator" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition group">
            <h3 class="font-bold text-gray-800 group-hover:text-yellow-700 transition mb-1">Real Estate ROI Calculator</h3>
            <p class="text-sm text-gray-500">Calculate total return on your investment including appreciation, cash flow, and equity buildup.</p>
          </NuxtLink>
          <NuxtLink to="/noi-calculator" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition group">
            <h3 class="font-bold text-gray-800 group-hover:text-yellow-700 transition mb-1">NOI Calculator</h3>
            <p class="text-sm text-gray-500">Calculate net operating income — the income before debt service and taxes that drives property valuation.</p>
          </NuxtLink>
          <NuxtLink to="/cap-rate-calculator" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition group">
            <h3 class="font-bold text-gray-800 group-hover:text-yellow-700 transition mb-1">Cap Rate Calculator</h3>
            <p class="text-sm text-gray-500">Value properties by income — essential for pricing your sale or evaluating a replacement property.</p>
          </NuxtLink>
          <NuxtLink to="/gross-rent-multiplier-calculator" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition group">
            <h3 class="font-bold text-gray-800 group-hover:text-yellow-700 transition mb-1">GRM Calculator</h3>
            <p class="text-sm text-gray-500">Fast first-pass deal screening using the gross rent multiplier — compare price to gross rental income.</p>
          </NuxtLink>
          <NuxtLink to="/cash-on-cash-calculator" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition group">
            <h3 class="font-bold text-gray-800 group-hover:text-yellow-700 transition mb-1">Cash-on-Cash Calculator</h3>
            <p class="text-sm text-gray-500">Measure your levered return on invested capital — the return on your actual cash after debt service.</p>
          </NuxtLink>
        </div>
      </section>

    </div>

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

  <!-- EMAIL CAPTURE MODAL -->
  <EmailCaptureModal
    :show="showEmailModal"
    :calculator-name="'Capital Gains Tax Calculator'"
    :primary-result="hasResult ? formatCurrency(totalTax) : undefined"
    title="Save Your Tax Analysis"
    subtitle="Get market benchmarks, deal templates, and calculator updates."
    cta-label="Save & Get Free Updates"
    @close="showEmailModal = false"
    @captured="onEmailCaptured"
  />

</template>

<script setup>
import { ref, reactive, computed, nextTick, onMounted } from 'vue'

// ─── SEO ─────────────────────────────────────────────────────────────────────
useHead({
  title: 'Capital Gains Tax Calculator (Real Estate) — Estimate Taxes & Net Proceeds (2026) | RealCalc',
  meta: [
    {
      name: 'description',
      content: 'Estimate real estate capital gains tax, depreciation recapture, and net proceeds. Compare after-tax outcomes and evaluate 1031 exchange in seconds. Free, no signup required.'
    },
    { property: 'og:title', content: 'Capital Gains Tax Calculator (Real Estate) — Estimate Taxes & Net Proceeds | RealCalc' },
    { property: 'og:description', content: 'Estimate capital gains tax on real estate sale: depreciation recapture, federal CG tax, state tax, NIIT. See cash after tax and tax drag verdict instantly.' },
    { name: 'keywords', content: 'capital gains tax calculator, real estate capital gains, depreciation recapture calculator, 1031 exchange tax, net proceeds calculator, property sale tax estimate 2026' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Capital Gains Tax Calculator (Real Estate)',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description: 'Free capital gains tax calculator for US real estate investors. Estimate depreciation recapture, federal capital gains tax, state tax, and NIIT. See cash after tax and evaluate 1031 exchange options.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        featureList: 'Adjusted basis calculation, depreciation recapture tax, federal capital gains tax, state tax estimate, NIIT toggle, tax drag verdict, sensitivity table, PDF export, saved scenarios'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is depreciation recapture in real estate?',
            acceptedAnswer: { '@type': 'Answer', text: 'Depreciation recapture is the tax owed on depreciation previously deducted when you sell a rental property. Under IRS Section 1250, recaptured depreciation is taxed at a maximum rate of 25%, regardless of your income bracket. For example, if you took $40,000 in depreciation over 10 years, selling the property triggers up to $10,000 in recapture tax. This applies even if you didn\'t actively claim depreciation — the IRS taxes "allowed or allowable" depreciation.' }
          },
          {
            '@type': 'Question',
            name: 'Does mortgage payoff reduce capital gains tax?',
            acceptedAnswer: { '@type': 'Answer', text: 'No. Mortgage payoff reduces your cash proceeds from the sale but does not reduce your taxable gain. Capital gains tax is calculated on the difference between your net sale price and your adjusted basis — the mortgage balance has no bearing on this calculation. A large payoff can result in a situation where you owe more in taxes than you receive in cash, particularly on highly leveraged properties with large accumulated gains.' }
          },
          {
            '@type': 'Question',
            name: 'Are these capital gains tax estimates exact?',
            acceptedAnswer: { '@type': 'Answer', text: 'No. These are estimates only and should not be treated as tax advice or a precise tax liability. Actual tax depends on your total income, filing status, state-specific rules, passive loss carryforwards, and other factors. The NIIT estimate is an upper bound that may overstate actual liability. State tax is simplified as a flat rate. Always confirm your specific tax liability with a CPA or tax attorney before completing a sale.' }
          },
          {
            '@type': 'Question',
            name: 'What if I owned the property less than a year?',
            acceptedAnswer: { '@type': 'Answer', text: 'Short-term capital gains — from properties held 1 year or less — are taxed as ordinary income, not at preferential long-term rates. Ordinary income rates range from 10% to 37% depending on your bracket. This calculator uses the federal rate you enter, which means if you enter a 15% long-term rate for a short-term holding, the result will understate your actual tax. A warning is shown when the holding period is under 1 year.' }
          },
          {
            '@type': 'Question',
            name: 'What federal capital gains rate should I use?',
            acceptedAnswer: { '@type': 'Answer', text: 'For long-term capital gains (held over 1 year) in 2026: 0% if taxable income is below ~$47,025 (single) / ~$94,050 (married); 15% for most investors; 20% if income exceeds ~$518,900 (single) / ~$583,750 (married). Add 3.8% NIIT if modified AGI exceeds $200,000 (single) / $250,000 (married). Short-term gains use your ordinary income tax bracket. Check current IRS rate schedules for your specific situation.' }
          },
          {
            '@type': 'Question',
            name: 'What is the tax drag metric?',
            acceptedAnswer: { '@type': 'Answer', text: 'Tax drag measures the estimated total tax as a percentage of your cash before tax (net sale price minus mortgage payoff). It tells you what fraction of your cash proceeds goes to taxes. Tax drag below 15% is considered low; 15-25% is moderate; 25-35% is high; above 35% is severe. When cash before tax is negative due to a large mortgage payoff, a cash shortfall verdict is shown instead.' }
          },
          {
            '@type': 'Question',
            name: 'How does a 1031 exchange affect capital gains tax?',
            acceptedAnswer: { '@type': 'Answer', text: 'A 1031 exchange allows you to defer all capital gains and depreciation recapture tax by reinvesting proceeds into a like-kind replacement property. Tax is not eliminated — it is deferred until you eventually sell the replacement property (unless you do another 1031 exchange). The primary benefit is that you invest the full pre-tax proceeds rather than the after-tax amount, significantly increasing compounding potential. This calculator does not determine 1031 exchange eligibility — consult a Qualified Intermediary.' }
          },
          {
            '@type': 'Question',
            name: 'How is adjusted basis calculated for a rental property?',
            acceptedAnswer: { '@type': 'Answer', text: 'Adjusted basis starts with the original purchase price. You add closing costs paid at acquisition (title fees, legal fees, transfer taxes) and capital improvements made during ownership (roof replacement, additions, major systems). You then subtract accumulated depreciation deducted over the holding period. The formula is: Adjusted Basis = Purchase Price + Closing Costs + Capital Improvements − Accumulated Depreciation. Getting this number right is critical — underestimating basis overstates your taxable gain.' }
          }
        ]
      })
    }
  ]
})

// ─── STATE ────────────────────────────────────────────────────────────────────
const isNavExpanded = ref(false)
const calcMode      = ref('estimate-tax')  // 'estimate-tax' | 'find-sale-price' | 'find-max-rate'
const openFaq       = ref(null)
const shareSuccess  = ref(false)
const showEmailModal    = ref(false)
const triggerScenarioSave = ref(false)

const form = reactive({
  // Basis
  purchasePrice:          null,
  purchaseClosingCosts:   null,
  capitalImprovements:    null,
  accumulatedDepreciation: null,
  // Sale
  salePrice:              null,
  sellingCosts:           null,
  mortgagePayoff:         null,
  // Tax rates
  federalRate:            null,
  stateRate:              null,
  niitEnabled:            false,
  // Property info
  ownershipType:          'investment',
  holdingPeriod:          null,
  // Mode 2 input
  targetCashAfterTax:     null,
})

// ─── CORE CALCULATIONS ────────────────────────────────────────────────────────

// Adjusted Basis = Purchase Price + Closing Costs + Improvements − Accumulated Depreciation
const adjustedBasis = computed(() => {
  const pp = Number(form.purchasePrice) || 0
  const cc = Number(form.purchaseClosingCosts) || 0
  const ci = Number(form.capitalImprovements) || 0
  const ad = Number(form.accumulatedDepreciation) || 0
  if (pp <= 0) return 0
  return Math.max(0, pp + cc + ci - ad)
})

// Net Sale Price = Sale Price − Selling Costs
const netSalePrice = computed(() => {
  const sp = Number(form.salePrice) || 0
  const sc = Number(form.sellingCosts) || 0
  return Math.max(0, sp - sc)
})

// Total Gain = Net Sale Price − Adjusted Basis
const totalGain = computed(() => netSalePrice.value - adjustedBasis.value)

// Depreciation Recapture = min(Accumulated Depreciation, Total Gain) [only if gain > 0]
const depreciationRecapture = computed(() => {
  if (totalGain.value <= 0) return 0
  const ad = Number(form.accumulatedDepreciation) || 0
  return Math.min(ad, totalGain.value)
})

// Long-Term Capital Gain = Total Gain − Depreciation Recapture
const ltcgGain = computed(() => {
  if (totalGain.value <= 0) return 0
  return Math.max(0, totalGain.value - depreciationRecapture.value)
})

// Recapture Tax = Depreciation Recapture × 25%
const recaptureTax = computed(() => depreciationRecapture.value * 0.25)

// Federal CG Tax = LTCG Gain × Federal Rate
const federalCGTax = computed(() => {
  const rate = Number(form.federalRate) || 0
  return ltcgGain.value * (rate / 100)
})

// State Tax = Total Gain × State Rate (simplified flat rate on total gain)
const stateTax = computed(() => {
  const rate = Number(form.stateRate) || 0
  if (totalGain.value <= 0) return 0
  return totalGain.value * (rate / 100)
})

// NIIT = Total Gain × 3.8% (optional, upper-bound estimate)
const niitTax = computed(() => {
  if (!form.niitEnabled || totalGain.value <= 0) return 0
  return totalGain.value * 0.038
})

// Total Tax
const totalTax = computed(() => {
  if (totalGain.value <= 0) return 0
  return recaptureTax.value + federalCGTax.value + stateTax.value + niitTax.value
})

// Cash Before Tax = Net Sale Price − Mortgage Payoff
// Note: mortgage payoff does NOT affect taxable gain — only cash
const cashBeforeTax = computed(() => {
  const mp = Number(form.mortgagePayoff) || 0
  return netSalePrice.value - mp
})

// Cash After Tax = Cash Before Tax − Total Tax
const cashAfterTax = computed(() => cashBeforeTax.value - totalTax.value)

// Effective Tax Rate on Gain
const effectiveTaxRate = computed(() => {
  if (totalGain.value <= 0) return 0
  return (totalTax.value / totalGain.value) * 100
})

// Tax Drag = Total Tax ÷ Cash Before Tax
const taxDrag = computed(() => {
  if (cashBeforeTax.value <= 0) return 0
  return (totalTax.value / cashBeforeTax.value) * 100
})

// ─── HAS RESULT ───────────────────────────────────────────────────────────────
const hasResult = computed(() => {
  if (calcMode.value === 'estimate-tax') {
    return Number(form.purchasePrice) > 0 && Number(form.salePrice) > 0 && Number(form.federalRate) >= 0 && form.federalRate !== null && form.federalRate !== ''
  }
  if (calcMode.value === 'find-sale-price') {
    return Number(form.purchasePrice) > 0 && Number(form.targetCashAfterTax) > 0 && form.federalRate !== null && form.federalRate !== '' && Number(form.federalRate) >= 0
  }
  if (calcMode.value === 'find-max-rate') {
    return Number(form.purchasePrice) > 0 && Number(form.salePrice) > 0
  }
  return false
})

// ─── REVERSE MODE 2: FIND SALE PRICE ─────────────────────────────────────────
// Binary search for the gross sale price that achieves a target cash after tax
const findSalePrice = computed(() => {
  if (calcMode.value !== 'find-sale-price') return null
  const target = Number(form.targetCashAfterTax) || 0
  if (!target || Number(form.purchasePrice) <= 0 || form.federalRate === null || form.federalRate === '') return null

  const adj  = adjustedBasis.value
  const sc   = Number(form.sellingCosts) || 0
  const mp   = Number(form.mortgagePayoff) || 0
  const fed  = Number(form.federalRate) || 0
  const st   = Number(form.stateRate) || 0
  const dep  = Number(form.accumulatedDepreciation) || 0
  const niit = form.niitEnabled ? 0.038 : 0

  const computeCat = (grossPrice) => {
    const nsp  = grossPrice - sc
    const gain = nsp - adj
    if (gain <= 0) return nsp - mp
    const recap = Math.min(dep, gain)
    const ltcg  = gain - recap
    const tax   = recap * 0.25 + ltcg * (fed / 100) + gain * (st / 100) + (niit ? gain * niit : 0)
    return (nsp - mp) - tax
  }

  let lo = adj + sc
  let hi = 50000000

  for (let i = 0; i < 150; i++) {
    const mid = (lo + hi) / 2
    const cat = computeCat(mid)
    if (Math.abs(cat - target) < 0.50) break
    if (cat < target) lo = mid
    else hi = mid
  }

  const result = (lo + hi) / 2
  return result > 0 ? result : null
})

// ─── REVERSE MODE 3: FIND MAX FEDERAL RATE ────────────────────────────────────
// Max federal CG rate where Cash After Tax = 0
// Formula: ltcgGain * (rate/100) = cashBeforeTax - recaptureTax - stateTax - niitTax
// rate = (cashBeforeTax - recaptureTax - stateTax - niitTax) / ltcgGain * 100
const maxFederalRate = computed(() => {
  if (calcMode.value !== 'find-max-rate') return null
  if (Number(form.purchasePrice) <= 0 || Number(form.salePrice) <= 0) return null
  if (totalGain.value <= 0) return null
  if (ltcgGain.value <= 0) return null  // all gain is recapture, no room for federal rate adjustment

  const numerator = cashBeforeTax.value - recaptureTax.value - stateTax.value - niitTax.value
  if (numerator <= 0) return 0
  return (numerator / ltcgGain.value) * 100
})

// ─── VERDICT (based on TAX_DRAG_RATIO) ───────────────────────────────────────
const verdict = computed(() => {
  if (!hasResult.value || calcMode.value !== 'estimate-tax') return null
  if (cashAfterTax.value < 0) {
    return { key: 'CASH_SHORTFALL', label: 'Cash Shortfall', color: '#dc2626', bgClass: 'bg-red-100 text-red-800' }
  }
  const drag = taxDrag.value
  if (drag < 15) return { key: 'LOW',      label: 'Low Tax Drag',    color: '#059669', bgClass: 'bg-emerald-100 text-emerald-800' }
  if (drag < 25) return { key: 'MODERATE', label: 'Moderate',        color: '#2563eb', bgClass: 'bg-blue-100 text-blue-800' }
  if (drag < 35) return { key: 'HIGH',     label: 'High Tax Drag',   color: '#d97706', bgClass: 'bg-amber-100 text-amber-800' }
  return            { key: 'SEVERE',   label: 'Severe Tax Drag', color: '#dc2626', bgClass: 'bg-red-100 text-red-800' }
})

// ─── WARNINGS ─────────────────────────────────────────────────────────────────
const warnings = computed(() => {
  const w = []

  // Short-term holding warning (RIS v2)
  const hp = Number(form.holdingPeriod)
  if (form.holdingPeriod !== null && form.holdingPeriod !== '' && !isNaN(hp) && hp >= 0 && hp < 1) {
    w.push({
      type: 'warn',
      key: 'short-term',
      msg: 'Holding period appears under 1 year. Short-term gains are typically taxed as ordinary income. This calculator still uses your entered capital gains rate, which may understate actual tax.'
    })
  }

  // Primary residence warning
  if (form.ownershipType === 'primary') {
    w.push({
      type: 'info',
      key: 'primary-residence',
      msg: 'Primary residence selected. The Section 121 exclusion (up to $250K single / $500K married) is not applied here — this estimate may significantly overstate tax for eligible primary residences. Consult a CPA to determine actual liability.'
    })
  }

  // Mixed-use warning
  if (form.ownershipType === 'mixed') {
    w.push({
      type: 'info',
      key: 'mixed-use',
      msg: 'Mixed-use property selected. Tax treatment is complex — part may qualify for Section 121 exclusion, part may be fully taxable. This calculator treats the full gain as taxable. A CPA should determine the correct allocation.'
    })
  }

  // NIIT disclaimer (always shown when NIIT is enabled)
  if (form.niitEnabled) {
    w.push({
      type: 'info',
      key: 'niit',
      msg: 'NIIT is shown as an upper-bound estimate (3.8% of total gain). Actual NIIT depends on income level and may apply to a smaller portion of gain or not at all if income is below the threshold.'
    })
  }

  // State tax disclaimer (shown when state rate is entered)
  if (Number(form.stateRate) > 0) {
    w.push({
      type: 'info',
      key: 'state-tax',
      msg: 'State tax is simplified as a flat rate on total gain. Some states tax capital gains as ordinary income, while others use different rules. This is a rough estimate — verify with a state-specific resource.'
    })
  }

  return w
})

// ─── INSIGHT TEXT ─────────────────────────────────────────────────────────────
const insightText = computed(() => {
  if (!hasResult.value || calcMode.value !== 'estimate-tax') return ''
  if (!verdict.value) return ''
  const drag  = taxDrag.value.toFixed(1)
  const total = formatCurrency(totalTax.value)
  const cat   = formatCurrency(cashAfterTax.value)

  if (verdict.value.key === 'CASH_SHORTFALL') {
    return `Tax and mortgage payoff consume all net proceeds — estimated cash after tax is ${formatCurrency(cashAfterTax.value)}. Review mortgage payoff and tax inputs. A 1031 exchange would defer the entire tax liability and allow full equity reinvestment, potentially avoiding a shortfall.`
  }
  if (verdict.value.key === 'LOW') {
    return `Tax drag of ${drag}% is low — ${total} in estimated total tax leaves ${cat} after tax. Strong after-tax liquidity. Selling at this price point is likely favorable unless significant additional appreciation is expected over your holding horizon.`
  }
  if (verdict.value.key === 'MODERATE') {
    return `Tax drag of ${drag}% is moderate — ${total} in estimated total tax against your proceeds. Compare the after-tax result against what you could earn by holding or reinvesting via a 1031 exchange. At this level, both selling and exchanging deserve analysis.`
  }
  if (verdict.value.key === 'HIGH') {
    return `Tax drag of ${drag}% is high — ${total} represents a significant share of your equity. Evaluate timing (especially if short-term gains apply), an installment sale to spread liability, or a 1031 exchange to defer the full amount. Consult a tax advisor before proceeding.`
  }
  return `Tax drag of ${drag}% is severe — ${total} represents a very large portion of proceeds. A 1031 exchange, installment sale, or opportunity zone investment should be seriously evaluated to preserve equity. This level of drag substantially reduces reinvestment capacity.`
})

// ─── SENSITIVITY TABLE ────────────────────────────────────────────────────────
// Total tax at different federal CG rates
const sensitivityRows = computed(() => {
  if (!hasResult.value || calcMode.value !== 'estimate-tax') return null
  if (totalGain.value <= 0) return null
  const baseFed = Number(form.federalRate) || 0
  return [0, 5, 10, 15, 20, 23.8, 28].map(rate => {
    const ltcgTax  = ltcgGain.value * (rate / 100)
    const total    = recaptureTax.value + ltcgTax + stateTax.value + niitTax.value
    const cat      = cashBeforeTax.value - total
    return {
      rate,
      totalTax:     total,
      cashAfterTax: cat,
      isCurrent:    Math.abs(baseFed - rate) < 0.5,
    }
  })
})

// ─── FAQS ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is depreciation recapture in real estate?',
    a: 'Depreciation recapture is the tax owed on depreciation you previously deducted when you sell a rental property. Under IRS Section 1250, recaptured depreciation is taxed at a maximum rate of 25%, regardless of your income bracket. For example, if you took $40,000 in depreciation over 10 years, selling triggers up to $10,000 in recapture tax. This applies even if you didn\'t actively claim depreciation — the IRS taxes "allowed or allowable" depreciation.'
  },
  {
    q: 'Does mortgage payoff reduce capital gains tax?',
    a: 'No. Mortgage payoff reduces your cash proceeds from the sale but does not reduce your taxable gain. Capital gains tax is calculated on the difference between your net sale price and your adjusted basis — the mortgage balance has no bearing on this. A large mortgage payoff can result in a situation where you owe more in taxes than cash received.'
  },
  {
    q: 'Are these capital gains tax estimates exact?',
    a: 'No. These are estimates only and should not be treated as tax advice or a precise tax liability. Actual tax depends on your total income, filing status, state-specific rules, passive loss carryforwards, and other factors. NIIT is an upper-bound estimate. State tax is simplified. Always confirm with a CPA before completing a sale.'
  },
  {
    q: 'What if I owned the property less than a year?',
    a: 'Short-term capital gains from properties held 1 year or less are taxed as ordinary income, not at preferential long-term rates. Ordinary income rates range from 10% to 37% depending on your bracket. This calculator uses the federal rate you enter — if you enter a long-term rate for a short-term holding, the result will understate actual tax. A warning is shown for holding periods under 1 year.'
  },
  {
    q: 'What federal capital gains rate should I use?',
    a: 'For long-term capital gains held over 1 year in 2026: 0% if taxable income is below ~$47,025 (single) / ~$94,050 (married); 15% for most investors; 20% if income exceeds ~$518,900 (single) / ~$583,750 (married). Add 3.8% NIIT if modified AGI exceeds $200,000 (single) / $250,000 (married). Short-term gains use your ordinary income bracket. Check current IRS rate schedules for your situation.'
  },
  {
    q: 'How does a 1031 exchange affect capital gains tax?',
    a: 'A 1031 exchange allows you to defer all capital gains and depreciation recapture tax by reinvesting into a like-kind replacement property. Tax is deferred — not eliminated — until you eventually sell the replacement property (unless you do another exchange). The primary benefit is investing the full pre-tax proceeds rather than after-tax proceeds, significantly increasing compounding potential. This calculator does not determine eligibility; consult a Qualified Intermediary.'
  },
  {
    q: 'How is adjusted basis calculated for a rental property?',
    a: 'Adjusted basis starts with the original purchase price. Add closing costs paid at acquisition (title fees, legal fees, transfer taxes) and capital improvements made during ownership (roof replacement, additions, major systems). Then subtract accumulated depreciation deducted over the holding period. Formula: Adjusted Basis = Purchase Price + Closing Costs + Capital Improvements − Accumulated Depreciation. Getting this right is critical — underestimating basis overstates your taxable gain.'
  },
  {
    q: 'What is tax drag and what do the verdict tiers mean?',
    a: 'Tax drag is the total estimated tax as a percentage of cash before tax (net proceeds minus mortgage payoff). It measures what fraction of your available cash goes to taxes. Low tax drag (under 15%) means strong after-tax liquidity. Moderate (15–25%) warrants comparing sell vs. hold. High (25–35%) and Severe (over 35%) signal the need to evaluate tax-deferral strategies. Cash Shortfall means taxes and mortgage payoff exceed net proceeds entirely.'
  },
]

// ─── SCENARIO RESULT ─────────────────────────────────────────────────────────
const currentScenarioResult = computed(() => {
  if (!hasResult.value) return undefined
  if (calcMode.value === 'estimate-tax') {
    return {
      primaryMetric: 'Total Estimated Tax',
      primaryValue:  formatCurrency(totalTax.value),
      badgeLabel:    verdict.value?.label,
      badgeColor:    verdict.value?.color,
      cashAfterTax:  cashAfterTax.value,
      totalGain:     totalGain.value,
      adjustedBasis: adjustedBasis.value,
      taxDrag:       taxDrag.value,
    }
  }
  if (calcMode.value === 'find-sale-price' && findSalePrice.value !== null) {
    return {
      primaryMetric: 'Required Sale Price',
      primaryValue:  formatCurrency(findSalePrice.value),
      badgeLabel:    'Required',
      badgeColor:    '#2563eb',
    }
  }
  if (calcMode.value === 'find-max-rate' && maxFederalRate.value !== null) {
    return {
      primaryMetric: 'Max Federal Rate',
      primaryValue:  `${maxFederalRate.value.toFixed(2)}%`,
      badgeLabel:    'Break-Even',
      badgeColor:    '#059669',
    }
  }
  return undefined
})

// ─── SHARE PARAMS ─────────────────────────────────────────────────────────────
function buildShareParams() {
  const p = new URLSearchParams()
  if (calcMode.value !== 'estimate-tax') p.set('cm', calcMode.value)
  if (form.purchasePrice)          p.set('pp', form.purchasePrice)
  if (form.purchaseClosingCosts)   p.set('cc', form.purchaseClosingCosts)
  if (form.capitalImprovements)    p.set('ci', form.capitalImprovements)
  if (form.accumulatedDepreciation) p.set('ad', form.accumulatedDepreciation)
  if (form.salePrice)              p.set('sp', form.salePrice)
  if (form.sellingCosts)           p.set('sc', form.sellingCosts)
  if (form.mortgagePayoff)         p.set('mp', form.mortgagePayoff)
  if (form.federalRate !== null && form.federalRate !== '')  p.set('fr', form.federalRate)
  if (form.stateRate)              p.set('sr', form.stateRate)
  if (form.niitEnabled)            p.set('ni', '1')
  if (form.ownershipType !== 'investment') p.set('ot', form.ownershipType)
  if (form.holdingPeriod)          p.set('hp', form.holdingPeriod)
  if (form.targetCashAfterTax)     p.set('tc', form.targetCashAfterTax)
  return p.toString()
}

// ─── URL PARAM PARSING ────────────────────────────────────────────────────────
if (process.client) {
  onMounted(() => {
    const p = new URLSearchParams(window.location.search)
    if (p.has('cm')) calcMode.value = p.get('cm')
    if (p.has('pp')) form.purchasePrice          = Number(p.get('pp'))
    if (p.has('cc')) form.purchaseClosingCosts   = Number(p.get('cc'))
    if (p.has('ci')) form.capitalImprovements    = Number(p.get('ci'))
    if (p.has('ad')) form.accumulatedDepreciation = Number(p.get('ad'))
    if (p.has('sp')) form.salePrice              = Number(p.get('sp'))
    if (p.has('sc')) form.sellingCosts           = Number(p.get('sc'))
    if (p.has('mp')) form.mortgagePayoff         = Number(p.get('mp'))
    if (p.has('fr')) form.federalRate            = Number(p.get('fr'))
    if (p.has('sr')) form.stateRate              = Number(p.get('sr'))
    if (p.has('ni')) form.niitEnabled            = p.get('ni') === '1'
    if (p.has('ot')) form.ownershipType          = p.get('ot')
    if (p.has('hp')) form.holdingPeriod          = Number(p.get('hp'))
    if (p.has('tc')) form.targetCashAfterTax     = Number(p.get('tc'))
  })
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function resetForm() {
  form.purchasePrice           = null
  form.purchaseClosingCosts    = null
  form.capitalImprovements     = null
  form.accumulatedDepreciation = null
  form.salePrice               = null
  form.sellingCosts            = null
  form.mortgagePayoff          = null
  form.federalRate             = null
  form.stateRate               = null
  form.niitEnabled             = false
  form.ownershipType           = 'investment'
  form.holdingPeriod           = null
  form.targetCashAfterTax      = null
  calcMode.value               = 'estimate-tax'
  shareSuccess.value           = false
  openFaq.value                = null
}

function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
}

function formatCurrency(val) {
  if (val === null || val === undefined) return '$0'
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

// ─── PDF EXPORT ───────────────────────────────────────────────────────────────
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
  doc.text('Capital Gains Tax Analysis Report', 20, 30)
  doc.setFontSize(9)
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 130, 20)

  // Hero block — mode-aware
  doc.setFillColor(...gold)
  doc.rect(15, 50, 180, 30, 'F')
  doc.setTextColor(30, 58, 95)
  doc.setFontSize(22)
  doc.setFont('helvetica', 'bold')

  let heroValue, heroLabel, heroSub
  if (calcMode.value === 'find-sale-price' && findSalePrice.value !== null) {
    heroValue = formatCurrency(findSalePrice.value)
    heroLabel = 'REQUIRED GROSS SALE PRICE'
    heroSub   = `To achieve ${formatCurrency(Number(form.targetCashAfterTax))} after-tax cash`
  } else if (calcMode.value === 'find-max-rate' && maxFederalRate.value !== null) {
    heroValue = `${maxFederalRate.value.toFixed(2)}%`
    heroLabel = 'MAX FEDERAL CG RATE (Break-Even)'
    heroSub   = `Cash after tax = $0 at this rate`
  } else {
    heroValue = formatCurrency(totalTax.value)
    heroLabel = 'TOTAL ESTIMATED TAX'
    heroSub   = `Cash After Tax: ${formatCurrency(cashAfterTax.value)} | Tax Drag: ${taxDrag.value.toFixed(1)}%`
  }

  doc.text(heroValue, 105, 69, { align: 'center' })
  doc.setFontSize(10)
  doc.text(heroLabel, 105, 77, { align: 'center' })

  doc.setFontSize(9)
  doc.setTextColor(30, 58, 95)
  doc.text(heroSub, 105, 90, { align: 'center' })

  if (calcMode.value === 'estimate-tax' && verdict.value) {
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.text(`Verdict: ${verdict.value.label}`, 105, 99, { align: 'center' })
  }

  // Financial Breakdown
  doc.setTextColor(...navy)
  doc.setFontSize(13)
  doc.setFont('helvetica', 'bold')
  doc.text('Tax Breakdown', 20, 115)

  const rows = [
    ['Purchase Price', formatCurrency(Number(form.purchasePrice) || 0)],
    ['+ Closing Costs', formatCurrency(Number(form.purchaseClosingCosts) || 0)],
    ['+ Capital Improvements', formatCurrency(Number(form.capitalImprovements) || 0)],
    ['− Accumulated Depreciation', `−${formatCurrency(Number(form.accumulatedDepreciation) || 0)}`],
    ['Adjusted Basis', formatCurrency(adjustedBasis.value)],
    ['Net Sale Price', formatCurrency(netSalePrice.value)],
    ['Total Gain', formatCurrency(totalGain.value)],
    ['Depreciation Recapture (25%)', formatCurrency(recaptureTax.value)],
    [`Federal CG Tax (${form.federalRate || 0}%)`, formatCurrency(federalCGTax.value)],
    [`State Tax (${form.stateRate || 0}% est.)`, formatCurrency(stateTax.value)],
    form.niitEnabled ? ['NIIT (3.8% upper bound)', formatCurrency(niitTax.value)] : null,
    ['Total Estimated Tax', formatCurrency(totalTax.value)],
    ['Cash Before Tax', formatCurrency(cashBeforeTax.value)],
    Number(form.mortgagePayoff) > 0 ? [`Mortgage Payoff`, `−${formatCurrency(Number(form.mortgagePayoff))}`] : null,
    ['Cash After Tax', formatCurrency(cashAfterTax.value)],
    ['Effective Tax Rate', totalGain.value > 0 ? `${effectiveTaxRate.value.toFixed(1)}%` : '—'],
    ['Tax Drag', cashBeforeTax.value > 0 ? `${taxDrag.value.toFixed(1)}%` : '—'],
  ].filter(Boolean)

  let y = 122
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
    y += 11
    if (y > 258) return
  })

  // Insight / Deal Context
  if (insightText.value && y < 250) {
    y += 4
    const splitInsight = doc.splitTextToSize(insightText.value, 165)
    const boxH = Math.max(25, splitInsight.length * 5 + 14)
    doc.setFillColor(240, 244, 248)
    doc.rect(15, y - 4, 180, boxH, 'F')
    doc.setTextColor(...navy)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'bold')
    doc.text('Deal Context', 20, y + 3)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(...gray)
    doc.text(splitInsight, 20, y + 11)
    y += boxH + 6
  }

  // Warnings
  if (warnings.value.length > 0 && y < 250) {
    const warnLines = warnings.value.flatMap(w => doc.splitTextToSize(`• ${w.msg}`, 158))
    const warnH = warnLines.length * 5 + 18
    doc.setFillColor(255, 251, 235)
    doc.rect(15, y - 4, 180, warnH, 'F')
    doc.setFillColor(245, 158, 11)
    doc.rect(15, y - 4, 3, warnH, 'F')
    doc.setTextColor(...navy)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'bold')
    doc.text('Flags & Disclaimers', 22, y + 4)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7.5)
    doc.setTextColor(146, 64, 14)
    doc.text(warnLines, 22, y + 12)
    y += warnH + 6
  }

  // Disclaimer
  if (y < 265) {
    doc.setTextColor(...gray)
    doc.setFontSize(7)
    doc.setFont('helvetica', 'italic')
    const disclaimer = 'These figures are estimates only and do not constitute tax advice. Actual tax depends on income, filing status, state rules, and other factors. Consult a CPA before making decisions.'
    doc.text(doc.splitTextToSize(disclaimer, 165), 20, y + 5)
  }

  // Footer
  doc.setFillColor(...navy)
  doc.rect(0, 280, 210, 17, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text('arvcalc.com — For informational purposes only. Not financial advice. Not a substitute for CPA review.', 105, 290, { align: 'center' })

  doc.save(`capital-gains-tax-analysis-${Date.now()}.pdf`)
}

// ─── SCENARIO SAVE / EMAIL CAPTURE ───────────────────────────────────────────
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

<style scoped>
.calc-mode-tabs {
  @apply grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-gray-100;
}
.calc-mode-tab {
  @apply px-2 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer;
}
.calc-mode-tab-active {
  @apply bg-white shadow-sm;
}
.calc-mode-tab-inactive {
  @apply hover:bg-white/60;
}
.calc-section-header {
  @apply px-4 pt-3 pb-2;
}
.calc-section-title {
  @apply text-sm font-bold text-gray-700;
}
.calc-inputs {
  @apply divide-y divide-gray-100;
}
</style>
