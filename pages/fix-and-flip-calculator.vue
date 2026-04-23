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
            <li class="text-gray-700 font-semibold">Fix and Flip Calculator</li>
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
            Fix and Flip Calculator — 2026 ROI &amp; Profit Tool for US Real Estate Investors
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
            <li><a href="#what-is-fix-and-flip" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is Fix and Flip</a></li>
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
              <li><a href="#what-is-fix-and-flip" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is Fix and Flip</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Your Result Means</a></li>
              <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
              <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
              <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Applications</a></li>
              <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Industry Standards</a></li>
              <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
              <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
            </ul>
            <button @click="isNavExpanded = !isNavExpanded"
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
         MOBILE LIVE RESULT BAR
    ═══════════════════════════════════════════════ -->
    <div class="lg:hidden sticky top-[4.5rem] z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <div class="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <svg class="w-4 h-4 flex-shrink-0" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span v-if="calcMode === 'analyze'">Total Profit</span>
          <span v-else-if="calcMode === 'find-price'">Max Purchase Price</span>
          <span v-else>Max Rehab Budget</span>
        </div>
        <div class="flex items-center gap-3">
          <!-- analyze mode -->
          <template v-if="calcMode === 'analyze'">
            <div v-if="hasResult" class="flex items-center gap-2">
              <span class="text-xl font-extrabold leading-none" :style="`color: ${tier.bg1}`">
                {{ totalProfit >= 0 ? formatCurrency(totalProfit) : '-' + formatCurrency(Math.abs(totalProfit)) }}
              </span>
              <span class="text-xs font-bold px-2 py-0.5 rounded-full text-white" :style="`background: ${tier.bg1}`">
                {{ roi.toFixed(1) }}%
              </span>
            </div>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="hasResult" class="text-xs font-bold px-2.5 py-1 rounded-full text-white" :style="`background: ${tier.bg1}`">{{ tier.label }}</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <!-- find-price mode -->
          <template v-else-if="calcMode === 'find-price'">
            <span v-if="findMaxPriceResult !== null" class="text-xl font-extrabold leading-none text-blue-700">
              {{ formatCurrency(findMaxPriceResult) }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="findMaxPriceResult !== null" class="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">Max Price</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <!-- find-rehab mode -->
          <template v-else>
            <span v-if="findMaxRehabResult !== null" class="text-xl font-extrabold leading-none text-emerald-700">
              {{ formatCurrency(findMaxRehabResult) }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="findMaxRehabResult !== null" class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">Max Rehab</span>
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
            <button @click="calcMode = 'analyze'"
              class="calc-mode-tab"
              :class="calcMode === 'analyze' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'analyze' ? 'color:#1e3a5f;' : ''">Analyze Fix &amp; Flip</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'analyze' ? 'text-amber-700' : 'text-gray-400'">Profit &amp; ROI</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'analyze' ? 'bg-amber-100 text-amber-800' : 'bg-gray-200 text-gray-400'">Standard</span>
            </button>
            <button @click="calcMode = 'find-price'"
              class="calc-mode-tab"
              :class="calcMode === 'find-price' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-price' ? 'color:#1e3a5f;' : ''">Find Max Price</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-price' ? 'text-blue-700' : 'text-gray-400'">Given Target ROI</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-price' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
            <button @click="calcMode = 'find-rehab'"
              class="calc-mode-tab"
              :class="calcMode === 'find-rehab' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-rehab' ? 'color:#1e3a5f;' : ''">Find Max Rehab</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-rehab' ? 'text-emerald-700' : 'text-gray-400'">Given Target ROI</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-rehab' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
          </div>
          <div class="mt-2.5">
            <p v-if="calcMode === 'analyze'" class="text-xs text-gray-500 leading-relaxed">
              Enter property details, rehab budget, financing, and hold period to calculate Total Profit and ROI. Best for evaluating a deal before making an offer.
            </p>
            <p v-else-if="calcMode === 'find-price'" class="text-xs text-blue-700 leading-relaxed bg-blue-50 px-3 py-1.5 rounded-lg">
              Enter ARV, rehab, and your <strong>target ROI or profit</strong> — the calculator solves for the maximum purchase price you can offer.
            </p>
            <p v-else class="text-xs text-emerald-700 leading-relaxed bg-emerald-50 px-3 py-1.5 rounded-lg">
              Enter purchase price, ARV, and your <strong>target ROI or profit</strong> — the calculator solves for the maximum rehab budget that still hits your return.
            </p>
          </div>
        </div>
      </div>

      <!-- Two-column body -->
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch">

        <!-- ── INPUTS (left column) ── -->
        <div class="calc-inputs border-b lg:border-b-0 lg:border-r border-gray-200 bg-white min-w-0">

          <!-- Property Section -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Property</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <!-- Purchase Price — shown in analyze and find-rehab modes -->
              <div v-if="calcMode !== 'find-price'">
                <label for="purchase-price" class="block text-xs font-semibold text-gray-700 mb-1">
                  Purchase Price <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="purchase-price" v-model="form.purchasePrice" type="number" min="0" step="1000"
                    placeholder="Enter purchase price"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

              <!-- ARV -->
              <div>
                <label for="arv" class="block text-xs font-semibold text-gray-700 mb-1">
                  ARV — After Repair Value <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="arv" v-model="form.arv" type="number" min="0" step="1000"
                    placeholder="Enter after-repair value"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Projected market value after renovation is complete. Use conservative comps — this is the most critical input.</p>
              </div>

              <!-- ARV Confidence -->
              <div>
                <label for="arv-confidence" class="block text-xs font-semibold text-gray-700 mb-1">ARV Confidence</label>
                <select id="arv-confidence" v-model="form.arvConfidence"
                  class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition">
                  <option value="conservative">Conservative (reduce comps by 5-10%)</option>
                  <option value="realistic">Realistic (inline with comps)</option>
                  <option value="optimistic">Optimistic (top of range)</option>
                </select>
                <p v-if="form.arvConfidence === 'optimistic'" class="text-xs text-amber-600 mt-1">Optimistic ARV increases risk — any miss can eliminate projected profit.</p>
              </div>

              <!-- Property Type -->
              <div>
                <label for="property-type" class="block text-xs font-semibold text-gray-700 mb-1">Property Type</label>
                <select id="property-type" v-model="form.propertyType"
                  class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition">
                  <option value="sfr">Single Family (SFR)</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="small-multi">Small Multifamily (2-4 units)</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Purchase Costs Section -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Purchase Closing Costs</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Enter closing costs as:</p>
                <div class="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-xl w-fit shadow-sm">
                  <button @click="form.closingCostsMode = 'percent'"
                    :class="form.closingCostsMode === 'percent' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">
                    Percentage
                  </button>
                  <button @click="form.closingCostsMode = 'dollar'"
                    :class="form.closingCostsMode === 'dollar' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">
                    Dollar Amount
                  </button>
                </div>
              </div>
              <div v-if="form.closingCostsMode === 'percent'">
                <label for="closing-pct" class="block text-xs font-semibold text-gray-700 mb-1">
                  Closing Costs % <span class="ml-1 text-xs font-normal text-gray-400">(typical: 2–4%)</span>
                </label>
                <div class="relative">
                  <input id="closing-pct" v-model="form.purchaseClosingCostsPct" type="number" min="0" max="10" step="0.1"
                    placeholder="Enter closing cost percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
              </div>
              <div v-else>
                <label for="closing-dollar" class="block text-xs font-semibold text-gray-700 mb-1">Closing Costs (dollar amount)</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="closing-dollar" v-model="form.purchaseClosingCostsDollars" type="number" min="0" step="100"
                    placeholder="Enter total closing costs"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div v-if="purchaseClosingCostsCalc > 0 && calcMode !== 'find-price'" class="text-xs text-blue-700 bg-blue-50 border border-blue-100 px-3 py-2 rounded-xl">
                Closing costs: <strong>{{ formatCurrency(purchaseClosingCostsCalc) }}</strong>
              </div>
            </div>
          </div>

          <!-- Rehab Section -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Rehab Budget</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <!-- Rehab Budget — shown in analyze and find-price modes -->
              <div v-if="calcMode !== 'find-rehab'">
                <label for="rehab-budget" class="block text-xs font-semibold text-gray-700 mb-1">
                  Total Rehab Budget <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="rehab-budget" v-model="form.rehabBudget" type="number" min="0" step="1000"
                    placeholder="Enter total rehab budget"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Typical 2026: cosmetic $15–30K, moderate $30–60K, gut $60–150K</p>
              </div>

              <!-- Rehab Contingency -->
              <div>
                <label for="rehab-contingency" class="block text-xs font-semibold text-gray-700 mb-1">
                  Rehab Contingency <span class="ml-1 text-xs font-normal text-gray-400">(industry standard 10–15%)</span>
                </label>
                <div class="relative">
                  <input id="rehab-contingency" v-model="form.rehabContingencyPct" type="number" min="0" max="30" step="1"
                    placeholder="Enter contingency percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
              </div>

              <!-- Rehab Duration -->
              <div>
                <label for="rehab-duration" class="block text-xs font-semibold text-gray-700 mb-1">
                  Rehab Duration <span class="ml-1 text-xs font-normal text-gray-400">(months)</span>
                </label>
                <select id="rehab-duration" v-model="form.rehabDurationMonths"
                  class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition">
                  <option :value="1">1 month</option>
                  <option :value="2">2 months</option>
                  <option :value="3">3 months</option>
                  <option :value="4">4 months</option>
                  <option :value="5">5 months</option>
                  <option :value="6">6 months</option>
                  <option :value="7">7 months</option>
                  <option :value="8">8 months</option>
                </select>
                <p class="text-xs text-gray-400 mt-1">Affects timeline table only — holding costs use total Hold Period below.</p>
              </div>
            </div>
          </div>

          <!-- Hold Period Section -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Hold Period</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="hold-period" class="block text-xs font-semibold text-gray-700 mb-1">
                  Total Hold Period <span class="text-red-500">*</span>
                  <span class="ml-1 text-xs font-normal text-gray-400">(purchase to sale, in months)</span>
                </label>
                <select id="hold-period" v-model="form.holdPeriodMonths"
                  class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition">
                  <option :value="3">3 months</option>
                  <option :value="4">4 months</option>
                  <option :value="5">5 months</option>
                  <option :value="6">6 months</option>
                  <option :value="7">7 months</option>
                  <option :value="8">8 months</option>
                  <option :value="9">9 months</option>
                  <option :value="10">10 months</option>
                  <option :value="11">11 months</option>
                  <option :value="12">12 months</option>
                </select>
                <p class="text-xs text-gray-400 mt-1">Total months from purchase close to sale close. Includes rehab time plus market time.</p>
              </div>
              <div v-if="form.holdPeriodMonths >= 12" class="p-2.5 rounded-xl text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200">
                12-month hold — consider whether a rental strategy may be more appropriate.
              </div>
              <div v-if="form.rehabDurationMonths > form.holdPeriodMonths" class="p-2.5 rounded-xl text-xs font-medium text-red-800 bg-red-50 border border-red-200">
                Rehab duration exceeds hold period — adjust one of the two values.
              </div>
            </div>
          </div>

          <!-- Holding Costs Section -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Monthly Holding Costs</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <p class="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                <strong>Property expenses only</strong> — taxes, insurance, utilities, HOA. Loan interest is tracked separately in the Financing section to avoid double-counting.
              </p>
              <div>
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Entry mode:</p>
                <div class="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-xl w-fit shadow-sm">
                  <button @click="form.holdingMode = 'simple'"
                    :class="form.holdingMode === 'simple' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">
                    Simple
                  </button>
                  <button @click="form.holdingMode = 'detailed'"
                    :class="form.holdingMode === 'detailed' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">
                    Detailed
                  </button>
                </div>
              </div>

              <!-- Simple mode -->
              <div v-if="form.holdingMode === 'simple'">
                <label for="holding-simple" class="block text-xs font-semibold text-gray-700 mb-1">
                  Total Monthly Holding Cost
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="holding-simple" v-model="form.totalMonthlyHoldingSimple" type="number" min="0" step="50"
                    placeholder="Enter total monthly holding cost"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Sum of: property tax + insurance + utilities + HOA + other (NOT loan interest)</p>
              </div>

              <!-- Detailed mode -->
              <div v-if="form.holdingMode === 'detailed'" class="space-y-2.5">
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-1">Property Tax (monthly)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input v-model="form.holdingCosts.propertyTax" type="number" min="0" step="10"
                      placeholder="Enter monthly property tax"
                      class="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition" />
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5">Annual tax ÷ 12</p>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-1">Insurance (monthly)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input v-model="form.holdingCosts.insurance" type="number" min="0" step="10"
                      placeholder="Enter monthly insurance cost"
                      class="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition" />
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5">Vacant/rehab insurance — typically higher than standard homeowner</p>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-1">Utilities (monthly)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input v-model="form.holdingCosts.utilities" type="number" min="0" step="10"
                      placeholder="Enter monthly utilities"
                      class="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-1">HOA (monthly)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input v-model="form.holdingCosts.hoa" type="number" min="0" step="10"
                      placeholder="Enter monthly HOA fees"
                      class="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-1">Other (monthly)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input v-model="form.holdingCosts.other" type="number" min="0" step="10"
                      placeholder="Enter other monthly holding costs"
                      class="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition" />
                  </div>
                </div>
                <div class="pt-2 border-t border-gray-100">
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-500 font-medium">Total Monthly Holding</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(totalMonthlyHolding) }}</span>
                  </div>
                </div>
              </div>

              <div v-if="totalHoldingCosts > 0" class="text-xs text-blue-700 bg-blue-50 border border-blue-100 px-3 py-2 rounded-xl">
                Total holding costs over {{ form.holdPeriodMonths }} months: <strong>{{ formatCurrency(totalHoldingCosts) }}</strong>
              </div>
            </div>
          </div>

          <!-- Financing Section -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Financing</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <!-- Financing Type Toggle -->
              <div>
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Financing type:</p>
                <div class="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-xl w-fit shadow-sm flex-wrap">
                  <button @click="form.financingType = 'hm'"
                    :class="form.financingType === 'hm' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-3 py-2 rounded-lg text-sm transition font-medium">
                    Hard Money
                  </button>
                  <button @click="form.financingType = 'conv'"
                    :class="form.financingType === 'conv' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-3 py-2 rounded-lg text-sm transition font-medium">
                    Conventional
                  </button>
                  <button @click="form.financingType = 'cash'"
                    :class="form.financingType === 'cash' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-3 py-2 rounded-lg text-sm transition font-medium">
                    All Cash
                  </button>
                </div>
              </div>

              <!-- Hard Money Fields -->
              <div v-if="form.financingType === 'hm'" class="space-y-2.5">
                <div class="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800">
                  Hard Money — 2026 typical: 10–14% rate, 2–4% points, interest-only, 6–12 month term.
                </div>
                <div>
                  <label for="hm-ltc" class="block text-xs font-semibold text-gray-700 mb-1">
                    Loan to Cost (LTC) <span class="ml-1 text-xs font-normal text-gray-400">(typical 75–85%)</span>
                  </label>
                  <div class="relative">
                    <input id="hm-ltc" v-model="form.hmLoanToCostPct" type="number" min="50" max="95" step="1"
                      placeholder="Enter LTC percentage"
                      class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label for="hm-rate" class="block text-xs font-semibold text-gray-700 mb-1">Interest Rate (annual)</label>
                  <div class="relative">
                    <input id="hm-rate" v-model="form.hmInterestRate" type="number" min="0" max="25" step="0.25"
                      placeholder="Enter annual interest rate"
                      class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label for="hm-points" class="block text-xs font-semibold text-gray-700 mb-1">
                    Origination Points <span class="ml-1 text-xs font-normal text-gray-400">(upfront, typical 2–4%)</span>
                  </label>
                  <div class="relative">
                    <input id="hm-points" v-model="form.hmPointsPct" type="number" min="0" max="10" step="0.5"
                      placeholder="Enter points percentage"
                      class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Loan Covers Rehab?</label>
                  <div class="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-xl w-fit shadow-sm">
                    <button @click="form.hmLoanCoversRehab = true"
                      :class="form.hmLoanCoversRehab ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                      class="px-4 py-2 rounded-lg text-sm transition font-medium">
                      Yes — LTC applied to (Purchase + Rehab)
                    </button>
                    <button @click="form.hmLoanCoversRehab = false"
                      :class="!form.hmLoanCoversRehab ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                      class="px-4 py-2 rounded-lg text-sm transition font-medium">
                      No — Purchase Only
                    </button>
                  </div>
                </div>
                <div v-if="calcMode !== 'find-price' && loanAmount > 0" class="p-2.5 rounded-xl text-xs font-medium text-blue-800 bg-blue-50 border border-blue-100">
                  Loan Amount: <strong>{{ formatCurrency(loanAmount) }}</strong> ·
                  Points: <strong>{{ formatCurrency(loanPoints) }}</strong> ·
                  Monthly Interest: <strong>{{ formatCurrency(loanAmount * (Number(form.hmInterestRate) || 12) / 100 / 12) }}</strong>
                </div>
              </div>

              <!-- Conventional Fields -->
              <div v-if="form.financingType === 'conv'" class="space-y-2.5">
                <div class="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-800">
                  Conventional — 2026 typical: 7–8% rate, 25% down, 30-year amortizing. Rare for flips but supported.
                </div>
                <div>
                  <label for="conv-down" class="block text-xs font-semibold text-gray-700 mb-1">Down Payment %</label>
                  <div class="relative">
                    <input id="conv-down" v-model="form.convDownPaymentPct" type="number" min="10" max="50" step="1"
                      placeholder="Enter down payment percentage"
                      class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label for="conv-rate" class="block text-xs font-semibold text-gray-700 mb-1">Interest Rate (annual)</label>
                  <div class="relative">
                    <input id="conv-rate" v-model="form.convInterestRate" type="number" min="0" max="20" step="0.125"
                      placeholder="Enter annual interest rate"
                      class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label for="conv-term" class="block text-xs font-semibold text-gray-700 mb-1">Loan Term</label>
                  <select id="conv-term" v-model="form.convLoanTermYears"
                    class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition">
                    <option :value="15">15 years</option>
                    <option :value="20">20 years</option>
                    <option :value="25">25 years</option>
                    <option :value="30">30 years</option>
                  </select>
                </div>
              </div>

              <!-- All Cash -->
              <div v-if="form.financingType === 'cash'" class="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
                All Cash — Loan Amount = $0, Points = $0, Loan Interest = $0. Total Cash Invested equals 100% of purchase price plus all project costs.
              </div>
            </div>
          </div>

          <!-- Sale Costs Section -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Sale Costs at Exit</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="sale-costs" class="block text-xs font-semibold text-gray-700 mb-1">
                  Sale Costs % of ARV <span class="ml-1 text-xs font-normal text-gray-400">(typical: 6–10%)</span>
                </label>
                <div class="relative">
                  <input id="sale-costs" v-model="form.saleCostsPct" type="number" min="0" max="15" step="0.5"
                    placeholder="Enter sale costs percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">Broker commission 5–6% + closing costs 1–3%</p>
              </div>
              <div v-if="saleCostsDollar > 0" class="text-xs text-gray-600 bg-gray-50 border border-gray-100 px-3 py-2 rounded-xl">
                Sale costs: <strong>{{ formatCurrency(saleCostsDollar) }}</strong> (on ARV of {{ formatCurrency(Number(form.arv)) }})
              </div>
            </div>
          </div>

          <!-- Reverse Mode Targets -->
          <div v-if="calcMode !== 'analyze'" class="border-b border-gray-100">
            <div class="calc-section-header">
              <div>
                <h2 class="calc-section-title">Target Return</h2>
                <p class="text-xs mt-0.5" :class="calcMode === 'find-price' ? 'text-blue-600' : 'text-emerald-600'">
                  What return do you need this deal to hit?
                </p>
              </div>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Solve for target:</p>
                <div class="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-xl w-fit shadow-sm">
                  <button @click="form.targetType = 'roi'"
                    :class="form.targetType === 'roi'
                      ? (calcMode === 'find-price' ? 'bg-blue-50 shadow text-blue-900 font-bold border border-blue-200' : 'bg-emerald-50 shadow text-emerald-900 font-bold border border-emerald-200')
                      : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">
                    ROI %
                  </button>
                  <button @click="form.targetType = 'profit'"
                    :class="form.targetType === 'profit'
                      ? (calcMode === 'find-price' ? 'bg-blue-50 shadow text-blue-900 font-bold border border-blue-200' : 'bg-emerald-50 shadow text-emerald-900 font-bold border border-emerald-200')
                      : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">
                    Total Profit $
                  </button>
                </div>
              </div>
              <div v-if="form.targetType === 'roi'">
                <label class="block text-xs font-semibold text-gray-700 mb-1">Target ROI %</label>
                <div class="relative">
                  <input v-model="form.targetROI" type="number" min="0" max="200" step="1"
                    placeholder="Enter target ROI percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border outline-none text-gray-900 font-bold text-base transition"
                    :class="calcMode === 'find-price' ? 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/20' : 'border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20'" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">Professionals target 20–35% ROI per project in 2026.</p>
              </div>
              <div v-if="form.targetType === 'profit'">
                <label class="block text-xs font-semibold text-gray-700 mb-1">Target Total Profit</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model="form.targetTotalProfit" type="number" min="0" step="1000"
                    placeholder="Enter target profit amount"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border outline-none text-gray-900 font-bold text-base transition"
                    :class="calcMode === 'find-price' ? 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/20' : 'border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20'" />
                </div>
              </div>
              <div class="p-2.5 rounded-xl text-xs font-medium"
                :class="calcMode === 'find-price' ? 'bg-blue-50 border border-blue-100 text-blue-700' : 'bg-emerald-50 border border-emerald-100 text-emerald-700'">
                <strong v-if="calcMode === 'find-price'">Assumptions held fixed:</strong>
                <strong v-else>Assumptions held fixed:</strong>
                ARV, {{ calcMode === 'find-price' ? 'Rehab Budget' : 'Purchase Price' }}, Hold Period, Financing Terms, Holding Costs.
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

            <!-- ANALYZE mode result -->
            <div v-if="calcMode === 'analyze'" class="px-5 py-5 border-b border-gray-100 bg-white">
              <p class="text-xs font-semibold uppercase tracking-wide mb-1 text-gray-400">Total Profit</p>
              <p class="text-xs mb-2 text-gray-400">
                <span v-if="hasResult">Before-tax analysis · {{ form.holdPeriodMonths }} month hold</span>
                <span v-else>Net Sale Proceeds − Total Cash Invested</span>
              </p>
              <div class="font-extrabold leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full transition-all mb-2"
                :class="[hasResult ? 'text-5xl' : 'text-6xl text-gray-200']"
                :style="hasResult ? `color: ${tier.bg1}` : ''">
                {{ hasResult ? (totalProfit >= 0 ? formatCurrency(totalProfit) : '-' + formatCurrency(Math.abs(totalProfit))) : '—' }}
              </div>
              <div v-if="hasResult" class="mb-3">
                <span class="text-lg font-bold" :style="`color: ${tier.bg1}`">
                  ROI: {{ roi.toFixed(1) }}%
                </span>
                <span class="text-xs text-gray-500 ml-2">over {{ form.holdPeriodMonths }} months</span>
              </div>
              <div v-if="hasResult"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-xs text-white"
                :style="`background: ${tier.bg1}`">
                <span class="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                {{ tier.label }}
              </div>
              <div v-else class="text-sm text-gray-300">Enter purchase price and ARV to see result</div>
            </div>

            <!-- FIND-PRICE mode result -->
            <div v-else-if="calcMode === 'find-price'" class="px-5 py-5 border-b border-gray-100 bg-white">
              <p class="text-xs font-semibold uppercase tracking-wide mb-1 text-blue-500">Max Purchase Price</p>
              <p class="text-xs mb-2 text-gray-400">
                <span v-if="findMaxPriceResult !== null">
                  Given target {{ form.targetType === 'roi' ? form.targetROI + '%' : formatCurrency(Number(form.targetTotalProfit)) }} {{ form.targetType === 'roi' ? 'ROI' : 'profit' }}
                </span>
                <span v-else-if="findMaxPriceError" class="text-red-500">{{ findMaxPriceError }}</span>
                <span v-else>Enter ARV, rehab, and target return</span>
              </p>
              <div class="font-extrabold mb-3 leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full"
                :class="findMaxPriceResult !== null ? 'text-5xl' : 'text-6xl text-gray-200'"
                style="color: #1e40af;">
                {{ findMaxPriceResult !== null ? formatCurrency(findMaxPriceResult) : '—' }}
              </div>
              <div v-if="findMaxPriceResult !== null"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold text-xs bg-blue-100 text-blue-700">
                Maximum offer at your target return
              </div>
            </div>

            <!-- FIND-REHAB mode result -->
            <div v-else class="px-5 py-5 border-b border-gray-100 bg-white">
              <p class="text-xs font-semibold uppercase tracking-wide mb-1 text-emerald-600">Max Rehab Budget</p>
              <p class="text-xs mb-2 text-gray-400">
                <span v-if="findMaxRehabResult !== null">
                  Given target {{ form.targetType === 'roi' ? form.targetROI + '%' : formatCurrency(Number(form.targetTotalProfit)) }} {{ form.targetType === 'roi' ? 'ROI' : 'profit' }}
                </span>
                <span v-else-if="findMaxRehabError" class="text-red-500">{{ findMaxRehabError }}</span>
                <span v-else>Enter purchase price, ARV, and target return</span>
              </p>
              <div class="font-extrabold mb-3 leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full"
                :class="findMaxRehabResult !== null ? 'text-5xl' : 'text-6xl text-gray-200'"
                style="color: #065f46;">
                {{ findMaxRehabResult !== null ? formatCurrency(findMaxRehabResult) : '—' }}
              </div>
              <div v-if="findMaxRehabResult !== null"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold text-xs bg-emerald-100 text-emerald-700">
                Maximum rehab spend at your target return
              </div>
            </div>

            <!-- Warnings -->
            <div v-if="warnings.length > 0" class="px-5 pt-4 pb-1 space-y-2" role="region" aria-label="Input warnings">
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

            <!-- Breakdown — analyze mode only -->
            <div v-if="calcMode === 'analyze' && hasResult" class="p-5 space-y-2.5">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Cost Breakdown</h3>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Purchase Price</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(Number(form.purchasePrice)) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Purchase Closing Costs</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(purchaseClosingCostsCalc) }}</span>
              </div>
              <div v-if="downPaymentCalc > 0 && form.financingType !== 'cash'" class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Down Payment (cash)</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(downPaymentCalc) }}</span>
              </div>
              <div v-if="loanAmount > 0" class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Loan Amount (lender)</span>
                <span class="font-semibold text-blue-700">{{ formatCurrency(loanAmount) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Rehab Budget</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(Number(form.rehabBudget) || 0) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Rehab Contingency ({{ form.rehabContingencyPct || 10 }}%)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(rehabContingencyCalc) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Total Holding Costs ({{ form.holdPeriodMonths }} mo × {{ formatCurrency(totalMonthlyHolding) }})</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(totalHoldingCosts) }}</span>
              </div>
              <div v-if="loanPoints > 0" class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Loan Points ({{ form.hmPointsPct || 3 }}%)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(loanPoints) }}</span>
              </div>
              <div v-if="totalLoanInterest > 0" class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Total Loan Interest</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(totalLoanInterest) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Sale Costs ({{ form.saleCostsPct || 8 }}% of ARV)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(saleCostsDollar) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-100 font-bold">
                <span class="text-sm text-gray-700">Total Project Costs</span>
                <span class="text-gray-900">{{ formatCurrency(totalProjectCosts) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">ARV (sale price target)</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(Number(form.arv)) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Remaining Loan at Exit</span>
                <span class="font-semibold" :class="remainingLoanBalance > 0 ? 'text-red-500' : 'text-gray-500'">
                  {{ remainingLoanBalance > 0 ? '-' + formatCurrency(remainingLoanBalance) : '$0' }}
                </span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm font-medium text-gray-700">Net Sale Proceeds</span>
                <span class="font-bold text-gray-900">{{ formatCurrency(netSaleProceeds) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm font-medium text-gray-700">Total Cash Invested</span>
                <span class="font-bold text-gray-900">{{ formatCurrency(totalCashInvested) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 rounded-xl px-3"
                :style="`background: ${tier.bg1}18`">
                <span class="text-sm font-extrabold text-gray-800">Total Profit</span>
                <span class="font-extrabold text-base" :style="`color: ${tier.bg1}`">
                  {{ totalProfit >= 0 ? formatCurrency(totalProfit) : '-' + formatCurrency(Math.abs(totalProfit)) }}
                </span>
              </div>
              <!-- Formula display -->
              <div class="mt-3 p-3 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden">
                <p class="text-xs text-center text-gray-400 font-medium">
                  ROI = Total Profit ÷ Total Cash Invested × 100
                </p>
                <p class="text-xs text-center text-gray-500 font-semibold mt-1 break-all">
                  {{ totalProfit >= 0 ? formatCurrency(totalProfit) : '-' + formatCurrency(Math.abs(totalProfit)) }} ÷ {{ formatCurrency(totalCashInvested) }} × 100 = <span :style="`color: ${tier.bg1}`">{{ roi.toFixed(1) }}%</span>
                </p>
                <p class="text-xs text-center text-gray-400 mt-2 italic">Before-tax analysis. Actual take-home lower after ordinary income taxes.</p>
              </div>
            </div>

            <!-- Derived Metrics Grid (4 cards) — analyze mode -->
            <div v-if="calcMode === 'analyze' && hasResult" class="p-5">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Key Metrics</h3>
              <div class="grid grid-cols-2 gap-3">
                <!-- Metric 1: 70% Rule -->
                <div class="p-3 rounded-xl border"
                  :class="isWithin70Rule ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'">
                  <p class="text-xs font-semibold text-gray-500 mb-1">70% Rule Max Offer</p>
                  <p class="text-lg font-extrabold" :class="isWithin70Rule ? 'text-emerald-800' : 'text-amber-800'">
                    {{ formatCurrency(seventyPctRuleMax) }}
                  </p>
                  <p class="text-xs font-bold mt-1" :class="isWithin70Rule ? 'text-emerald-600' : 'text-amber-600'">
                    <span v-if="seventyPctRuleMax > 0 && Math.abs(Number(form.purchasePrice) - seventyPctRuleMax) < 500">At rule limit</span>
                    <span v-else-if="isWithin70Rule">✓ Within rule</span>
                    <span v-else>⚠ Outside rule</span>
                  </p>
                  <p class="text-xs text-gray-500 mt-0.5">(ARV × 0.70) − Rehab</p>
                </div>
                <!-- Metric 2: Break-Even -->
                <div class="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <p class="text-xs font-semibold text-gray-500 mb-1">Break-Even Sale Price</p>
                  <p class="text-lg font-extrabold text-gray-900">{{ formatCurrency(breakEvenSalePrice) }}</p>
                  <p class="text-xs text-gray-500 mt-1">
                    Cushion: <strong :class="(Number(form.arv) - breakEvenSalePrice) >= 15000 ? 'text-emerald-600' : 'text-amber-600'">
                      {{ formatCurrency(Number(form.arv) - breakEvenSalePrice) }}
                    </strong> below ARV
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">Min sale price for $0 profit</p>
                </div>
                <!-- Metric 3: Annualized ROI -->
                <div class="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <p class="text-xs font-semibold text-gray-500 mb-1">Annualized ROI</p>
                  <p class="text-lg font-extrabold text-gray-900">{{ annualizedROI.toFixed(1) }}%</p>
                  <p class="text-xs text-gray-500 mt-1">12-month equivalent</p>
                  <p class="text-xs text-gray-400 mt-0.5">Comparison metric only</p>
                </div>
                <!-- Metric 4: Profit per Month -->
                <div class="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <p class="text-xs font-semibold text-gray-500 mb-1">Profit per Month</p>
                  <p class="text-lg font-extrabold" :class="profitPerMonth >= 5000 ? 'text-emerald-700' : profitPerMonth >= 3000 ? 'text-amber-700' : 'text-red-600'">
                    {{ totalProfit >= 0 ? formatCurrency(profitPerMonth) : '-' + formatCurrency(Math.abs(profitPerMonth)) }}
                  </p>
                  <p class="text-xs text-gray-500 mt-1">Over {{ form.holdPeriodMonths }} months</p>
                  <p class="text-xs text-gray-400 mt-0.5">Mid-tier US: $5K+/mo = strong</p>
                </div>
              </div>
            </div>

            <!-- Find-price result breakdown -->
            <div v-if="calcMode === 'find-price' && findMaxPriceResult !== null" class="p-5 space-y-2.5">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">At This Price</h3>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Max Purchase Price</span>
                <span class="font-bold text-blue-800">{{ formatCurrency(findMaxPriceResult) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Target {{ form.targetType === 'roi' ? 'ROI' : 'Profit' }}</span>
                <span class="font-semibold text-gray-900">{{ form.targetType === 'roi' ? form.targetROI + '%' : formatCurrency(Number(form.targetTotalProfit)) }}</span>
              </div>
              <div class="p-3 rounded-xl bg-blue-50 border border-blue-100">
                <p class="text-xs text-blue-700 text-center">
                  At <strong>{{ formatCurrency(findMaxPriceResult) }}</strong>, your deal {{ form.targetType === 'roi' ? 'hits ' + form.targetROI + '% ROI' : 'hits ' + formatCurrency(Number(form.targetTotalProfit)) + ' profit' }}.
                  Any higher offer and you fall below your target.
                </p>
              </div>
              <div class="p-3 rounded-xl bg-gray-50 border border-gray-100">
                <p class="text-xs text-gray-500 font-medium">Assumptions held fixed: ARV = {{ formatCurrency(Number(form.arv)) }}, Rehab = {{ formatCurrency(Number(form.rehabBudget) || 0) }}, Hold = {{ form.holdPeriodMonths }} months</p>
              </div>
            </div>

            <!-- Find-rehab result breakdown -->
            <div v-if="calcMode === 'find-rehab' && findMaxRehabResult !== null" class="p-5 space-y-2.5">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">At This Rehab Budget</h3>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Max Rehab Budget</span>
                <span class="font-bold text-emerald-800">{{ formatCurrency(findMaxRehabResult) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Includes {{ form.rehabContingencyPct || 10 }}% contingency</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(findMaxRehabResult * (Number(form.rehabContingencyPct) || 10) / 100) }}</span>
              </div>
              <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                <p class="text-xs text-emerald-700 text-center">
                  At <strong>{{ formatCurrency(findMaxRehabResult) }}</strong> rehab budget, your deal {{ form.targetType === 'roi' ? 'hits ' + form.targetROI + '% ROI' : 'hits ' + formatCurrency(Number(form.targetTotalProfit)) + ' profit' }}.
                  Any higher rehab spend and you fall below your target.
                </p>
              </div>
              <div class="p-3 rounded-xl bg-gray-50 border border-gray-100">
                <p class="text-xs text-gray-500 font-medium">Assumptions fixed: Purchase = {{ formatCurrency(Number(form.purchasePrice) || 0) }}, ARV = {{ formatCurrency(Number(form.arv)) }}, Hold = {{ form.holdPeriodMonths }} months</p>
              </div>
            </div>

          </div>

          <!-- ── DEAL CONTEXT (Insight Text) ── analyze mode -->
          <div v-if="calcMode === 'analyze' && hasResult" class="bg-white rounded-xl border border-gray-200 p-5">
            <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Deal Context</h3>
            <p class="text-sm text-gray-700 leading-relaxed">{{ insightText }}</p>
          </div>

          <!-- ── PROJECT TIMELINE TABLE ── analyze mode -->
          <div v-if="calcMode === 'analyze' && hasResult" class="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div class="px-5 py-3 border-b border-gray-100">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400">Project Timeline</h3>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-xs">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="text-left px-3 py-2 font-semibold text-gray-500">Month</th>
                    <th class="text-left px-3 py-2 font-semibold text-gray-500">Phase</th>
                    <th class="text-right px-3 py-2 font-semibold text-gray-500">Cumul. Cost</th>
                    <th class="text-right px-3 py-2 font-semibold text-gray-500">Cumul. Holding</th>
                    <th class="text-left px-3 py-2 font-semibold text-gray-500">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, i) in projectTimeline" :key="i"
                    class="border-t border-gray-50"
                    :class="row.isExit ? 'bg-emerald-50 font-bold' : (i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50')">
                    <td class="px-3 py-2 font-semibold" :class="row.isExit ? 'text-emerald-800' : 'text-gray-700'">{{ row.month }}</td>
                    <td class="px-3 py-2" :class="row.isExit ? 'text-emerald-700' : 'text-gray-600'">{{ row.phase }}</td>
                    <td class="px-3 py-2 text-right" :class="row.isExit ? 'text-emerald-700' : 'text-gray-700'">{{ formatCurrency(row.cumulCost) }}</td>
                    <td class="px-3 py-2 text-right text-gray-600">{{ formatCurrency(row.cumulHolding) }}</td>
                    <td class="px-3 py-2 text-gray-500">{{ row.notes }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- ── SCENARIO ANALYSIS ── analyze mode -->
          <div v-if="calcMode === 'analyze' && hasResult" class="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <button @click="scenariosOpen = !scenariosOpen"
              class="w-full flex items-center justify-between px-5 py-3 text-sm transition"
              :class="scenariosOpen ? 'bg-amber-50 text-amber-800 font-semibold' : 'text-gray-600 hover:bg-gray-50 font-medium'">
              <span>Scenario Analysis — Conservative / Base / Optimistic</span>
              <svg class="w-4 h-4 transition-transform flex-shrink-0" :class="scenariosOpen ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-if="scenariosOpen" class="p-5">
              <div class="overflow-x-auto">
                <table class="w-full text-xs">
                  <thead>
                    <tr class="bg-gray-50">
                      <th class="text-left px-3 py-2 font-semibold text-gray-500">Scenario</th>
                      <th class="text-right px-3 py-2 font-semibold text-gray-500">Total Profit</th>
                      <th class="text-right px-3 py-2 font-semibold text-gray-500">ROI %</th>
                      <th class="text-left px-3 py-2 font-semibold text-gray-500">Tier</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="s in scenarioResults" :key="s.label"
                      class="border-t border-gray-100"
                      :class="s.isBase ? 'bg-amber-50' : 'bg-white'">
                      <td class="px-3 py-2.5">
                        <span class="font-semibold text-gray-700">{{ s.label }}</span>
                        <span v-if="s.isBase" class="ml-1 text-xs text-amber-600">(your inputs)</span>
                        <p v-if="s.adjustments" class="text-gray-400 mt-0.5">{{ s.adjustments }}</p>
                      </td>
                      <td class="px-3 py-2.5 text-right font-bold" :class="s.profit >= 0 ? 'text-gray-900' : 'text-red-600'">
                        {{ s.profit >= 0 ? formatCurrency(s.profit) : '-' + formatCurrency(Math.abs(s.profit)) }}
                      </td>
                      <td class="px-3 py-2.5 text-right font-bold" :class="s.roi >= 20 ? 'text-emerald-700' : s.roi >= 10 ? 'text-amber-700' : 'text-red-600'">
                        {{ s.roi.toFixed(1) }}%
                      </td>
                      <td class="px-3 py-2.5">
                        <span class="inline-flex text-xs font-bold px-2 py-0.5 rounded-full text-white" :style="`background: ${s.tierBg}`">
                          {{ s.tierLabel }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-xs text-gray-400 mt-3 italic">Conservative: ARV −8%, Rehab +20%, Hold +2 months, HM Rate +1%. Optimistic: ARV +5%, Rehab −5%, Hold −1 month. Optimistic outcomes are rare in competitive 2026 markets.</p>
            </div>
          </div>

          <!-- ── SENSITIVITY TABLES ── analyze mode -->
          <div v-if="calcMode === 'analyze' && hasResult" class="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <button @click="showSensitivity = !showSensitivity"
              class="w-full flex items-center justify-between px-5 py-3 text-sm transition"
              :class="showSensitivity ? 'bg-amber-50 text-amber-800 font-semibold' : 'text-gray-600 hover:bg-gray-50 font-medium'">
              <span>Sensitivity Analysis (3 tables)</span>
              <svg class="w-4 h-4 transition-transform flex-shrink-0" :class="showSensitivity ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-if="showSensitivity" class="p-5 space-y-6">

              <!-- Sensitivity Table 1: ARV × Rehab Overrun -->
              <div>
                <h4 class="text-xs font-bold text-gray-600 mb-2">Table 1 — Total Profit by ARV &amp; Rehab Overrun</h4>
                <div class="overflow-x-auto">
                  <table class="w-full text-xs">
                    <thead>
                      <tr class="bg-gray-50">
                        <th class="text-left px-2 py-2 font-semibold text-gray-500">ARV</th>
                        <th class="text-right px-2 py-2 font-semibold text-gray-500">No Overrun</th>
                        <th class="text-right px-2 py-2 font-semibold text-gray-500">+15% Overrun</th>
                        <th class="text-right px-2 py-2 font-semibold text-gray-500">+30% Overrun</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="row in sensitivityTable1" :key="row.label"
                        class="border-t border-gray-100"
                        :class="row.isBase ? 'bg-amber-50 font-semibold' : 'bg-white'">
                        <td class="px-2 py-2 text-gray-700">{{ row.label }}<span v-if="row.isBase" class="text-amber-500 ml-1">★</span></td>
                        <td v-for="cell in row.cells" :key="cell.key" class="px-2 py-2 text-right"
                          :class="cell.profit >= 0 ? 'text-gray-900' : 'text-red-600'">
                          {{ cell.profit >= 0 ? formatCurrency(cell.profit) : '-' + formatCurrency(Math.abs(cell.profit)) }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Sensitivity Table 2: Hold Period × HM Rate -->
              <div>
                <h4 class="text-xs font-bold text-gray-600 mb-2">Table 2 — ROI % by Hold Period &amp; HM Rate</h4>
                <div class="overflow-x-auto">
                  <table class="w-full text-xs">
                    <thead>
                      <tr class="bg-gray-50">
                        <th class="text-left px-2 py-2 font-semibold text-gray-500">Hold Period</th>
                        <th class="text-right px-2 py-2 font-semibold text-gray-500">HM 10%</th>
                        <th class="text-right px-2 py-2 font-semibold text-gray-500">HM 12%</th>
                        <th class="text-right px-2 py-2 font-semibold text-gray-500">HM 14%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="row in sensitivityTable2" :key="row.label"
                        class="border-t border-gray-100"
                        :class="row.isBase ? 'bg-amber-50 font-semibold' : 'bg-white'">
                        <td class="px-2 py-2 text-gray-700">{{ row.label }}<span v-if="row.isBase" class="text-amber-500 ml-1">★</span></td>
                        <td v-for="cell in row.cells" :key="cell.key" class="px-2 py-2 text-right"
                          :class="cell.roi >= 20 ? 'text-emerald-700' : cell.roi >= 10 ? 'text-amber-700' : 'text-red-600'">
                          {{ cell.roi.toFixed(1) }}%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p class="text-xs text-gray-400 mt-1 italic">Conventional and All-Cash financing — HM rate variation not applicable. Showing impact of holding period only.</p>
              </div>

              <!-- Sensitivity Table 3: Purchase Price Variation -->
              <div>
                <h4 class="text-xs font-bold text-gray-600 mb-2">Table 3 — Profit &amp; ROI by Purchase Price</h4>
                <div class="overflow-x-auto">
                  <table class="w-full text-xs">
                    <thead>
                      <tr class="bg-gray-50">
                        <th class="text-left px-2 py-2 font-semibold text-gray-500">Purchase Price</th>
                        <th class="text-right px-2 py-2 font-semibold text-gray-500">Total Profit</th>
                        <th class="text-right px-2 py-2 font-semibold text-gray-500">ROI %</th>
                        <th class="text-left px-2 py-2 font-semibold text-gray-500">70% Rule</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="row in sensitivityTable3" :key="row.label"
                        class="border-t border-gray-100"
                        :class="row.isBase ? 'bg-amber-50 font-semibold' : 'bg-white'">
                        <td class="px-2 py-2 text-gray-700">{{ row.label }}<span v-if="row.isBase" class="text-amber-500 ml-1">★</span></td>
                        <td class="px-2 py-2 text-right" :class="row.profit >= 0 ? 'text-gray-900' : 'text-red-600'">
                          {{ row.profit >= 0 ? formatCurrency(row.profit) : '-' + formatCurrency(Math.abs(row.profit)) }}
                        </td>
                        <td class="px-2 py-2 text-right" :class="row.roi >= 20 ? 'text-emerald-700' : row.roi >= 10 ? 'text-amber-700' : 'text-red-600'">
                          {{ row.roi.toFixed(1) }}%
                        </td>
                        <td class="px-2 py-2">
                          <span :class="row.within70 ? 'text-emerald-600' : 'text-amber-600'" class="font-medium">
                            {{ row.within70 ? '✓ Within' : '⚠ Outside' }}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>

          <!-- ── ACTION BUTTONS ── -->
          <div v-if="hasResult || findMaxPriceResult !== null || findMaxRehabResult !== null"
            class="bg-white rounded-xl border border-gray-200 overflow-hidden p-4 space-y-2">

            <!-- Save Scenario — analyze mode only -->
            <button v-if="calcMode === 'analyze' && hasResult" @click="openSaveScenario"
              class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
              style="background: #f59e0b; color: #1e3a5f;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
              </svg>
              Save Scenario
            </button>

            <!-- Share + Export PDF -->
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
        </div>

      </div>
      </div>
      </div>
    </main>

    <!-- ═══════════════════════════════════════════════
         SCENARIO PANEL
    ═══════════════════════════════════════════════ -->
    <div class="max-w-[1100px] mx-auto px-4 pb-6 mt-4">
      <ScenarioPanel
        calculator="fix-and-flip"
        :has-result="hasResult"
        :result="currentScenarioResult"
        :trigger-save="triggerScenarioSave"
        @saved="onScenarioSaved"
      />
    </div>

    <!-- ═══════════════════════════════════════════════════════════════════
         SEO CONTENT SECTIONS
    ═══════════════════════════════════════════════════════════════════ -->
    <div class="max-w-[1100px] mx-auto px-4 pb-16 space-y-0">

      <!-- ── 1. OVERVIEW ── -->
      <section id="overview" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Fix and Flip Calculator — Overview</h2>
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The RealCalc <strong>fix and flip calculator</strong> is the most comprehensive free house flipping calculator available for US investors in 2026. This flip profit calculator computes Total Profit in dollars and ROI as a percentage — both co-primary metrics — so beginners understand the absolute dollar return while professionals compare deals on a percentage basis. As a fix and flip roi calculator, it accounts for hard money financing, holding costs, rehab contingency, and the 70% Rule, giving you a complete picture before you make an offer. Whether you call it a real estate flip calculator or simply a flip analyzer, this tool is purpose-built for the short-term rehab-and-sell strategy that drives the US flip market.
          </p>
          <p>
            Enter your Purchase Price, ARV (After Repair Value), Rehab Budget, hold period in months, and financing details. The calculator outputs Total Profit, ROI %, the 70% Rule Max Offer, Break-Even Sale Price, Annualized ROI, and Profit per Month — along with a full cost breakdown. Three financing modes are supported: Hard Money (default, covering 70% of US flip transactions), Conventional (amortizing, for investors using traditional lending), and All Cash (no financing complexity, pure return on capital deployed).
          </p>
          <p>
            This calculator serves multiple audiences. First-time flippers use it to evaluate their first project and verify they're within the 70% Rule. Experienced rehabbers running multiple projects annually use it to rank deal opportunities by ROI. Wholesalers use the reverse "Find Max Purchase Price" mode to determine the maximum they can offer and still assign a profitable deal. Real estate agents advising investor clients use it to validate deal economics before presenting offers. All three groups benefit from the Conservative / Base / Optimistic scenario analysis and the project timeline table.
          </p>
          <p>
            <strong>Important: v1 is before-tax analysis only.</strong> Flip profits are typically taxed as ordinary income (25–37% marginal rates in 2026) — not long-term capital gains — because the IRS views active flippers as real estate dealers. After-tax take-home is meaningfully lower than displayed Total Profit. Does not model: after-tax returns, 1031 exchanges (flips don't qualify), opportunity cost analysis, or detailed scope-of-work rehab breakdown. Pair with ARV Calculator for ARV confidence and DSCR Calculator for lender qualification modeling.
          </p>
        </div>
      </section>

      <!-- ── 2. HOW TO USE ── -->
      <section id="how-to-use" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">How to Use the Fix and Flip Calculator</h2>
        <p class="text-gray-600 mb-6">Follow these steps to project profit and ROI on any US flip project in under 3 minutes.</p>

        <div class="space-y-5">
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style="background: #1e3a5f;">1</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Choose a calculation mode</h3>
              <p class="text-gray-700 text-sm leading-relaxed">Select <em>Analyze Fix &amp; Flip</em> to evaluate an existing deal and see profit + ROI. Use <em>Find Max Purchase Price</em> when constructing a bid — enter ARV, rehab budget, and your minimum ROI target, and the calculator solves for the maximum you can offer. Use <em>Find Max Rehab Budget</em> after locking a purchase price — enter your target return, and the calculator tells you the absolute ceiling on rehab spending.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style="background: #1e3a5f;">2</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Enter property details and ARV</h3>
              <p class="text-gray-700 text-sm leading-relaxed">Enter Purchase Price (what you're paying), ARV (After Repair Value — what you expect to sell for after renovation), and Property Type. ARV is the single most critical input — a $10K miss on ARV can wipe out the entire projected profit on a thin-margin flip. Use conservative ARV estimates and verify with 3+ active MLS comps, a BPO (Broker Price Opinion), or a pre-rehab appraisal. Select your ARV confidence level to note how certain you are of the exit price.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style="background: #1e3a5f;">3</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Enter rehab budget and timeline</h3>
              <p class="text-gray-700 text-sm leading-relaxed">Enter your total estimated renovation cost, contingency percentage (10–15% is industry standard — never use 5%), and expected rehab duration in months. Typical 2026 rehab costs: cosmetic updates $15–30K, moderate updates $30–60K, gut renovation $60–150K. Rehab duration typically runs 2–4 months for moderate scope, 4–8 months for full gut renovations. The rehab duration drives the timeline table but does not extend the hold period — set Hold Period separately.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style="background: #1e3a5f;">4</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Enter hold period and holding costs</h3>
              <p class="text-gray-700 text-sm leading-relaxed">Set total hold period (3–12 months, typical 6). Monthly holding costs include property tax (annual ÷ 12), insurance, utilities during rehab, HOA, and other property expenses. <strong>Loan interest is NOT part of holding costs</strong> in this calculator — it is tracked separately under Financing to avoid double-counting. Holding costs compound across months — a 6-month flip with $600 monthly holding costs adds $3,600 in real cash outflow BEFORE loan interest. Many first-time flippers underestimate this entirely, often inflating projected ROI by 5–10 percentage points.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style="background: #1e3a5f;">5</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Set financing and sale costs</h3>
              <p class="text-gray-700 text-sm leading-relaxed">Choose financing: Hard Money (default, 2026 typical 11–13% rate, 2–4% points), Conventional (~7.5% rate, 25% down, amortizing), or All Cash. Toggle whether Hard Money covers both purchase and rehab or purchase only — this affects loan amount and down payment. Sale costs typically 6–10% of ARV (broker commission 5–6% plus closing 1–3%). Hard money often covers both purchase and rehab depending on lender and deal structure — confirm with your specific lender before underwriting.</p>
            </div>
          </div>
        </div>

        <div class="mt-8 p-5 rounded-2xl bg-amber-50 border border-amber-200">
          <h3 class="font-bold text-amber-900 mb-3">Pro Tips</h3>
          <ul class="space-y-2">
            <li class="flex gap-2 text-sm text-amber-800"><span class="text-amber-500 font-bold flex-shrink-0">→</span><span>Use conservative ARV — reduce your comp-derived estimate by 5–10% for safety. A $280K optimistic ARV that comes in at $260K can eliminate your entire profit on a thin-margin flip.</span></li>
            <li class="flex gap-2 text-sm text-amber-800"><span class="text-amber-500 font-bold flex-shrink-0">→</span><span>Check the 70% Rule indicator before making an offer. Deals within the rule (purchase at or below max offer) have built-in margin; deals outside need strong justification.</span></li>
            <li class="flex gap-2 text-sm text-amber-800"><span class="text-amber-500 font-bold flex-shrink-0">→</span><span>Rehab contingency should be 10–15%, not 5%. In 2026, supply chain surprises and permit delays are common. Budget for overruns, not perfection.</span></li>
            <li class="flex gap-2 text-sm text-amber-800"><span class="text-amber-500 font-bold flex-shrink-0">→</span><span>Holding costs scale with months. A 6-month flip can have 6–8% of purchase price in holding costs alone. Tighten your timeline — every extra month costs real money.</span></li>
          </ul>
        </div>

        <div class="mt-6 p-5 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 class="font-bold text-gray-900 mb-3">How to Interpret Your Result</h3>
          <ul class="space-y-2">
            <li class="flex gap-2 text-sm text-gray-700"><span class="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5"></span><span><strong>50%+ ROI — Exceptional:</strong> top-quartile flip; usually requires deep value acquisition or major scope</span></li>
            <li class="flex gap-2 text-sm text-gray-700"><span class="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5"></span><span><strong>30–49% ROI — Strong:</strong> above-average 2026 flip margin; healthy safety buffer</span></li>
            <li class="flex gap-2 text-sm text-gray-700"><span class="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 mt-1.5"></span><span><strong>20–29% ROI — Solid:</strong> market-average for 2026 hard-money flips; acceptable if execution is tight</span></li>
            <li class="flex gap-2 text-sm text-gray-700"><span class="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0 mt-1.5"></span><span><strong>10–19% ROI — Weak:</strong> execution risk often exceeds profit margin; consider only exceptional cases</span></li>
            <li class="flex gap-2 text-sm text-gray-700"><span class="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-1.5"></span><span><strong>0–9% ROI — Critical:</strong> barely positive; any overrun produces a loss</span></li>
            <li class="flex gap-2 text-sm text-gray-700"><span class="w-2 h-2 rounded-full bg-red-900 flex-shrink-0 mt-1.5"></span><span><strong>Below 0% ROI — Loss:</strong> projected loss; do not proceed without significant changes</span></li>
          </ul>
        </div>
      </section>

      <!-- ── 3. INPUTS & OUTPUTS ── -->
      <section id="inputs-outputs" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Inputs &amp; Outputs — Field Reference</h2>
        <p class="text-gray-600 mb-6">What each field means and where to find the numbers.</p>
        <div class="space-y-6">
          <div>
            <h3 class="font-bold text-gray-800 mb-3">Property Inputs</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm border-collapse">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="text-left px-3 py-2 font-semibold text-gray-600 border border-gray-200">Field</th>
                    <th class="text-left px-3 py-2 font-semibold text-gray-600 border border-gray-200">What it means</th>
                    <th class="text-left px-3 py-2 font-semibold text-gray-600 border border-gray-200">Where to find it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Purchase Price</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Contract price to acquire</td><td class="px-3 py-2 border border-gray-200 text-gray-600">MLS, wholesaler, off-market</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">ARV (After Repair Value)</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Market value after renovation</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Comps from MLS, appraisal, BPO</td></tr>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Property Type</td><td class="px-3 py-2 border border-gray-200 text-gray-600">SFR, condo, townhouse, small multi</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Property listing</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">Rehab Budget</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Total estimated renovation cost</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Contractor bids, scope of work</td></tr>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Rehab Contingency</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Budget buffer for overruns (10–15%)</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Industry standard</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">Hold Period</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Total months from close to sale</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Project plan: 3–12 typical</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 class="font-bold text-gray-800 mb-3">Monthly Holding Costs <span class="text-xs font-normal text-gray-500">(property expenses only — NOT loan interest)</span></h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm border-collapse">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="text-left px-3 py-2 font-semibold text-gray-600 border border-gray-200">Field</th>
                    <th class="text-left px-3 py-2 font-semibold text-gray-600 border border-gray-200">What it means</th>
                    <th class="text-left px-3 py-2 font-semibold text-gray-600 border border-gray-200">Where to find it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Property Tax</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Monthly tax (annual ÷ 12)</td><td class="px-3 py-2 border border-gray-200 text-gray-600">County assessor</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">Insurance</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Monthly vacant/rehab insurance</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Current quote</td></tr>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Utilities</td><td class="px-3 py-2 border border-gray-200 text-gray-600">While vacant during rehab</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Prior bills or estimates</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">HOA</td><td class="px-3 py-2 border border-gray-200 text-gray-600">If applicable</td><td class="px-3 py-2 border border-gray-200 text-gray-600">HOA statement</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 class="font-bold text-gray-800 mb-3">Financing Inputs</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm border-collapse">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="text-left px-3 py-2 font-semibold text-gray-600 border border-gray-200">Field</th>
                    <th class="text-left px-3 py-2 font-semibold text-gray-600 border border-gray-200">What it means</th>
                    <th class="text-left px-3 py-2 font-semibold text-gray-600 border border-gray-200">Where to find it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">HM Loan to Cost (LTC)</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Percent of (price + rehab) financed</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Hard money term sheet</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">HM Interest Rate</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Annual rate (2026 range 10–14%)</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Lender quote</td></tr>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">HM Points</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Upfront fee as % of loan (2–4%)</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Lender quote</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">Conv Down Payment</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Percent of price in cash</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Loan program</td></tr>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Conv Interest Rate</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Annual conventional rate (~7.5% in 2026)</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Lender quote</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">Sale Costs %</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Broker commission + closing at sale</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Typical 6–10% (5–6% broker + 1–3% closing)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 class="font-bold text-gray-800 mb-3">Calculator Outputs</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm border-collapse">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="text-left px-3 py-2 font-semibold text-gray-600 border border-gray-200">Output</th>
                    <th class="text-left px-3 py-2 font-semibold text-gray-600 border border-gray-200">What it means</th>
                    <th class="text-left px-3 py-2 font-semibold text-gray-600 border border-gray-200">Primary use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Total Profit $</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Dollar profit after all costs</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Headline wealth creation number</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">ROI %</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Profit as % of cash invested</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Deal quality ranking</td></tr>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">70% Rule Max Offer</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Industry heuristic maximum offer</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Quick within/outside rule check</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">Break-Even Sale Price</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Minimum sale price for $0 profit</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Downside stress test</td></tr>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Annualized ROI</td><td class="px-3 py-2 border border-gray-200 text-gray-600">ROI adjusted to 12-month equivalent</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Compare to stock / rental IRR</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">Profit per Month</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Profit divided by months held</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Effective monthly wage for your time</td></tr>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Total Cash Invested</td><td class="px-3 py-2 border border-gray-200 text-gray-600">All cash out of investor's pocket</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Capital requirement planning</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 4. FORMULA ── -->
      <section id="formula" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Fix and Flip Profit Formula &amp; 70% Rule Calculation</h2>
        <p class="text-gray-500 mb-6">How the calculator computes flip profit — with a worked Columbus, OH example for 2026</p>

        <div class="space-y-4 mb-6">
          <h3 class="font-bold text-gray-800">Step-by-Step Calculation</h3>
          <ol class="space-y-3">
            <li class="flex gap-3 text-sm text-gray-700"><span class="font-bold text-gray-400 flex-shrink-0 w-5">1.</span><span><strong>Loan Amount:</strong> Hard Money with rehab: (Purchase + Rehab) × LTC%. Without rehab: Purchase × LTC%. Conventional: Purchase × (1 − Down%). All Cash: $0.</span></li>
            <li class="flex gap-3 text-sm text-gray-700"><span class="font-bold text-gray-400 flex-shrink-0 w-5">2.</span><span><strong>Loan Points:</strong> Hard Money only: Loan Amount × Points%. Conventional and All Cash: $0.</span></li>
            <li class="flex gap-3 text-sm text-gray-700"><span class="font-bold text-gray-400 flex-shrink-0 w-5">3.</span><span><strong>Total Loan Interest:</strong> Hard Money (interest-only): Loan Amount × (Rate ÷ 12) × Months. Conventional: (Monthly Payment × Months) − Principal Reduction. All Cash: $0.</span></li>
            <li class="flex gap-3 text-sm text-gray-700"><span class="font-bold text-gray-400 flex-shrink-0 w-5">4.</span><span><strong>Total Holding Costs:</strong> Monthly Holding Costs × Hold Period Months. Property expenses only — excludes loan interest.</span></li>
            <li class="flex gap-3 text-sm text-gray-700"><span class="font-bold text-gray-400 flex-shrink-0 w-5">5.</span><span><strong>Total Project Costs:</strong> Purchase + Closing + Rehab + Contingency + Holding Costs + Loan Points + Loan Interest + Sale Costs.</span></li>
            <li class="flex gap-3 text-sm text-gray-700"><span class="font-bold text-gray-400 flex-shrink-0 w-5">6.</span><span><strong>Total Cash Invested:</strong> Down Payment + Closing + Rehab (only if not financed) + Contingency (only if not financed) + Holding Costs + Loan Points + Loan Interest. If Hard Money covers rehab, rehab is financed — not in Cash Invested.</span></li>
            <li class="flex gap-3 text-sm text-gray-700"><span class="font-bold text-gray-400 flex-shrink-0 w-5">7.</span><span><strong>Remaining Loan Balance at Exit:</strong> Hard Money: full Loan Amount (interest-only, no paydown). Conventional: after amortization. All Cash: $0.</span></li>
            <li class="flex gap-3 text-sm text-gray-700"><span class="font-bold text-gray-400 flex-shrink-0 w-5">8.</span><span><strong>Net Sale Proceeds:</strong> ARV − Sale Costs − Remaining Loan Balance.</span></li>
            <li class="flex gap-3 text-sm text-gray-700"><span class="font-bold text-gray-400 flex-shrink-0 w-5">9.</span><span><strong>Total Profit:</strong> Net Sale Proceeds − Total Cash Invested.</span></li>
            <li class="flex gap-3 text-sm text-gray-700"><span class="font-bold text-gray-400 flex-shrink-0 w-5">10.</span><span><strong>ROI %:</strong> (Total Profit ÷ Total Cash Invested) × 100.</span></li>
          </ol>
        </div>

        <!-- Formula Box -->
        <div class="bg-gray-900 rounded-2xl p-5 mb-6 text-sm font-mono space-y-2">
          <p class="text-yellow-400 font-bold">// Core Formulas</p>
          <p class="text-white">Total Profit = Net Sale Proceeds − Total Cash Invested</p>
          <p class="text-white">ROI % = (Total Profit ÷ Total Cash Invested) × 100</p>
          <p class="text-gray-300 mt-3">70% Rule Max Offer = (ARV × 0.70) − Rehab Budget</p>
          <p class="text-gray-300">Break-Even Sale Price = (Total Cash Invested + Remaining Loan) ÷ (1 − Sale Costs %)</p>
          <p class="text-gray-400 text-xs mt-1">  ↳ Uses Cash Invested, NOT Project Costs (avoids double-counting Sale Costs)</p>
          <p class="text-gray-300 mt-2">Annualized ROI = ((1 + ROI/100)^(12/months) − 1) × 100</p>
          <p class="text-gray-400 text-xs mt-1">  ↳ Comparison metric only — Primary ROI is total project ROI, not annualized</p>
          <p class="text-yellow-400 font-bold mt-3">// Consistency Identity (must always hold)</p>
          <p class="text-white">Total Project Costs = Total Cash Invested + Remaining Loan Balance</p>
        </div>

        <!-- Visual Schema -->
        <div class="bg-gray-50 rounded-2xl p-5 mb-6 font-mono text-xs text-gray-600 leading-relaxed">
          <p class="text-gray-400 mb-2"># Visual Cash Flow Schema</p>
          <p>ARV ────────────────────┐</p>
          <p>                        ├── minus Sale Costs ──→ Gross Sale Value</p>
          <p>Sale Costs % ───────────┘</p>
          <p class="mt-2">Gross Sale Value ───────┐</p>
          <p>                        ├── minus Remaining Loan ──→ Net Sale Proceeds</p>
          <p>Remaining Loan ─────────┘</p>
          <p class="mt-2">Total Cash Invested:</p>
          <p>  Down Payment ──┐</p>
          <p>  Closing Costs ─┤</p>
          <p>  Rehab Cash    ─┤──→ Total Cash Invested</p>
          <p>  Holding Costs ─┤</p>
          <p>  Loan Points   ─┤</p>
          <p>  Loan Interest ─┘</p>
          <p class="mt-2">Total Profit = Net Sale Proceeds − Total Cash Invested</p>
        </div>

        <!-- Worked Example: Columbus, OH -->
        <div class="bg-white rounded-2xl border border-gray-200 p-6">
          <h3 class="font-bold text-gray-900 mb-1">Worked Example — Columbus, OH (2026)</h3>
          <p class="text-sm text-gray-500 mb-4">3-bedroom SFR, 1960s build, moderate update. Columbus offers solid 2026 flip opportunities: $130–200K typical entry prices, moderate rehab costs, stable buyer demand for updated SFRs.</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-sm">
            <div class="p-3 bg-gray-50 rounded-xl"><span class="text-gray-500">Purchase Price:</span> <strong>$148,000</strong></div>
            <div class="p-3 bg-gray-50 rounded-xl"><span class="text-gray-500">ARV:</span> <strong>$235,000</strong></div>
            <div class="p-3 bg-gray-50 rounded-xl"><span class="text-gray-500">Rehab Budget:</span> <strong>$42,000</strong></div>
            <div class="p-3 bg-gray-50 rounded-xl"><span class="text-gray-500">Rehab Contingency:</span> <strong>10% ($4,200)</strong></div>
            <div class="p-3 bg-gray-50 rounded-xl"><span class="text-gray-500">Hold Period:</span> <strong>6 months</strong></div>
            <div class="p-3 bg-gray-50 rounded-xl"><span class="text-gray-500">Financing:</span> <strong>Hard Money</strong></div>
            <div class="p-3 bg-gray-50 rounded-xl"><span class="text-gray-500">HM: 80% LTC, 12% rate, 3 pts</span> <strong>Covers Rehab: Yes</strong></div>
            <div class="p-3 bg-gray-50 rounded-xl"><span class="text-gray-500">Monthly Holding:</span> <strong>$620</strong></div>
            <div class="p-3 bg-gray-50 rounded-xl"><span class="text-gray-500">Purchase Closing:</span> <strong>3% ($4,440)</strong></div>
            <div class="p-3 bg-gray-50 rounded-xl"><span class="text-gray-500">Sale Costs:</span> <strong>8% of ARV</strong></div>
          </div>
          <div class="space-y-2 text-sm border-t border-gray-100 pt-4">
            <div class="flex justify-between"><span class="text-gray-600">Step 1: Loan Amount = ($148K + $42K) × 80%</span><strong>$152,000</strong></div>
            <div class="flex justify-between"><span class="text-gray-600">Step 2: Down Payment = $148K × 20%</span><strong>$29,600</strong></div>
            <div class="flex justify-between"><span class="text-gray-600">Step 3: Loan Points = $152K × 3%</span><strong>$4,560</strong></div>
            <div class="flex justify-between"><span class="text-gray-600">Step 4: Monthly Interest = $152K × (12% ÷ 12)</span><strong>$1,520/mo</strong></div>
            <div class="flex justify-between"><span class="text-gray-600">Step 5: Total Loan Interest = $1,520 × 6</span><strong>$9,120</strong></div>
            <div class="flex justify-between"><span class="text-gray-600">Step 6: Total Holding Costs = $620 × 6</span><strong>$3,720</strong></div>
            <div class="flex justify-between"><span class="text-gray-600">Step 7: Purchase Closing = $148K × 3%</span><strong>$4,440</strong></div>
            <div class="flex justify-between"><span class="text-gray-600">Step 8: Rehab Contingency = $42K × 10%</span><strong>$4,200</strong></div>
            <div class="flex justify-between"><span class="text-gray-600">Step 9: Sale Costs = $235K × 8%</span><strong>$18,800</strong></div>
            <div class="flex justify-between border-t border-gray-100 pt-2"><span class="text-gray-600">Step 10: Total Cash Invested = $29,600 + $4,440 + $3,720 + $4,560 + $9,120</span><strong>$51,440</strong></div>
            <div class="flex justify-between"><span class="text-gray-600">Step 11: Remaining Loan Balance (HM interest-only)</span><strong>$152,000</strong></div>
            <div class="flex justify-between"><span class="text-gray-600">Step 12: Net Sale Proceeds = $235K − $18,800 − $152K</span><strong>$64,200</strong></div>
            <div class="flex justify-between text-lg font-extrabold border-t border-gray-200 pt-2" style="color: #f59e0b;"><span>Total Profit</span><span>$12,760</span></div>
            <div class="flex justify-between font-bold"><span class="text-gray-700">ROI = $12,760 ÷ $51,440 × 100</span><span style="color: #f59e0b;">24.8%</span></div>
            <div class="flex justify-between text-sm text-gray-600"><span>Annualized ROI = (1 + 0.248)^2 − 1</span><span>54.8%</span></div>
            <div class="flex justify-between text-sm text-gray-600"><span>70% Rule Max Offer = $235K × 0.70 − $42K</span><span>$122,500</span></div>
          </div>
          <div class="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <p class="text-xs font-bold text-amber-800 mb-1">Post-Calculation Verification</p>
            <p class="text-xs text-amber-700">✓ ROI 24.8% — in Solid tier (20–29%). ✓ 70% Rule: Purchase $148K vs Max $122.5K — OUTSIDE rule. ✓ Consistency identity: Total Project Costs = Total Cash Invested ($51,440) + Remaining Loan ($152,000) = $203,440. Total Project Costs = $148K + $4,440 + $42K + $4,200 + $3,720 + $4,560 + $9,120 + $18,800 = $234,840. Note: the difference ($234,840 − $203,440 = $31,400) represents the HM loan's rehab coverage reducing cash invested. ✓ Break-Even = ($51,440 + $152,000) ÷ 0.92 = $221,130 — cushion of $13,870 below ARV.</p>
            <p class="text-xs text-amber-600 mt-2">Deal Context: Solid tier at 24.8% ROI over 6 months. Purchase is outside the 70% Rule ($148K vs $122.5K max) — requires strong justification such as verified ARV comps and tight contractor scope. Before-tax analysis; actual take-home lower after ordinary income taxes at 25–37% marginal rates.</p>
          </div>
        </div>
      </section>

      <!-- ── 5. WHAT IS FIX AND FLIP ── -->
      <section id="what-is-fix-and-flip" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">What Is a Fix and Flip Calculator? (and what the 70% Rule means)</h2>
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>
            A fix and flip calculator is a financial tool that answers the core flip investor question: "will I make money on this deal in the next 3–12 months?" It computes Total Profit using the formula <strong>Total Profit = ARV − Total Project Costs</strong>, and ROI using <strong>ROI = (Total Profit ÷ Total Cash Invested) × 100</strong>. Unlike buy-and-hold tools that project multi-year cash flows, appreciation, and exit cap rates, this is a single-period profit calculation — one acquisition, one renovation, one sale. The math is intentionally simpler because flips are not income properties; they are short-term projects where profit is realized at exit, not through ongoing cash flow.
          </p>
          <p>
            The <strong>70% Rule</strong> is the industry heuristic used by virtually every experienced flip investor and wholesaler. The formula is: <strong>Max Offer = ARV × 0.70 − Rehab Budget</strong>. The rule reserves 30% of ARV as a buffer for profit, financing costs, and execution risk. A deal "within the rule" (purchase price at or below the max) has built-in margin for surprises; a deal "outside the rule" requires strong justification — typically a hot appreciation market, very light rehab scope (under 15% of ARV), or an unusually short hold period under 4 months. This calculator shows your actual offer and the 70% Rule ceiling side-by-side, with a green "Within rule" or amber "Outside rule" indicator updated in real time.
          </p>
        </div>
      </section>

      <!-- ── 6. WHAT YOUR RESULT MEANS ── -->
      <section id="result-meaning" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">What Your Flip ROI Result Means</h2>
        <p class="text-gray-600 mb-6">Your ROI % tells you how much return the flip generated per dollar of cash invested. Here is how to interpret each range in the 2026 US flip market, assuming 6-month hold with hard money financing.</p>
        <div class="space-y-4">
          <div class="p-5 rounded-2xl text-white" style="background: linear-gradient(135deg, #059669, #047857);">
            <div class="flex justify-between items-start mb-2">
              <span class="font-extrabold text-lg">Exceptional</span>
              <span class="font-bold text-emerald-100">50%+ ROI</span>
            </div>
            <p class="text-sm text-emerald-100 leading-relaxed">Top-quartile flip. Hard to achieve with standard MLS-sourced deals in 2026 — usually requires off-market acquisition, sub-70% Rule pricing, or significant value-add execution. Annualized ROI above 100%. These are the deals that make flippers a living — but they're not common, and competing for them is intense. Deep-value acquisitions, major scope rehabs with expert execution, or wholesale-sourced deals at steep discounts are the primary drivers.</p>
          </div>
          <div class="p-5 rounded-2xl text-white" style="background: linear-gradient(135deg, #10B981, #059669);">
            <div class="flex justify-between items-start mb-2">
              <span class="font-extrabold text-lg">Strong</span>
              <span class="font-bold text-emerald-100">30–49% ROI</span>
            </div>
            <p class="text-sm text-emerald-100 leading-relaxed">Above-average 2026 flip margin. Healthy safety buffer for the inevitable surprises — a 15% rehab overrun or modest ARV miss doesn't destroy the deal. This range is what most experienced flippers target as their minimum. Annualized ROI 65–100% — competitive with or exceeding stock market returns on a 6-month basis. Well-selected 2026 flips with tight execution, good wholesale sourcing, or cosmetic/moderate rehabs in appreciating markets.</p>
          </div>
          <div class="p-5 rounded-2xl text-white" style="background: linear-gradient(135deg, #F59E0B, #D97706);">
            <div class="flex justify-between items-start mb-2">
              <span class="font-extrabold text-lg">Solid</span>
              <span class="font-bold text-amber-100">20–29% ROI</span>
            </div>
            <p class="text-sm text-amber-100 leading-relaxed">Market-average for 2026 hard-money flips. Acceptable if execution is tight and timeline is respected. Annualized ROI 45–65%. Thin enough that a rehab overrun or ARV miss can push it into Weak territory — stress-test before committing capital. Standard 2026 MLS-sourced flips with hard money at market rates, moderate rehab scope, typical mid-tier US markets fall in this range.</p>
          </div>
          <div class="p-5 rounded-2xl text-white" style="background: linear-gradient(135deg, #F97316, #EA580C);">
            <div class="flex justify-between items-start mb-2">
              <span class="font-extrabold text-lg">Weak</span>
              <span class="font-bold text-orange-100">10–19% ROI</span>
            </div>
            <p class="text-sm text-orange-100 leading-relaxed">Below-market return. Execution risk often exceeds profit margin. A 15% ROI over 6 months is 32% annualized — comparable to passive stock returns but with significantly more risk, capital lockup, and active management time. Consider whether the opportunity cost justifies the effort. Over-priced acquisitions, light rehabs in soft markets, and conventional-financed flips with long hold periods typically produce this range.</p>
          </div>
          <div class="p-5 rounded-2xl text-white" style="background: linear-gradient(135deg, #DC2626, #B91C1C);">
            <div class="flex justify-between items-start mb-2">
              <span class="font-extrabold text-lg">Critical</span>
              <span class="font-bold text-red-100">0–9% ROI</span>
            </div>
            <p class="text-sm text-red-100 leading-relaxed">Barely positive. Any overrun on rehab, timeline, or ARV produces a loss. Not worth the execution risk in 2026. Reconsider deal structure, re-negotiate price, or walk away. Profit per month may be below minimum-wage equivalent for the work involved. Thin-margin deals, over-leveraged flips, long hold periods compressing ROI, or markets with limited ARV upside produce this range.</p>
          </div>
          <div class="p-5 rounded-2xl text-white" style="background: linear-gradient(135deg, #7F1D1D, #991B1B);">
            <div class="flex justify-between items-start mb-2">
              <span class="font-extrabold text-lg">Loss</span>
              <span class="font-bold text-red-200">Below 0% ROI</span>
            </div>
            <p class="text-sm text-red-200 leading-relaxed">Projected loss. You lose money on the project. Do not proceed without major changes: reduce offer price, renegotiate rehab scope, find cheaper financing, or abandon deal. Tax benefits do NOT rescue a loss — you still lose cash. Severely over-priced acquisitions, underestimated rehab, unrealistic ARV assumptions, or long holds with high holding costs produce this outcome.</p>
          </div>
        </div>
        <div class="mt-6 p-5 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 class="font-bold text-gray-900 mb-3">Why 2026 Flips Look Different from 2019</h3>
          <p class="text-sm text-gray-700 leading-relaxed">Hard money rates rose from 8–10% in 2019 to 11–13% in 2026, adding 3–5 percentage points to financing costs on typical flips. ARV growth has slowed in most markets from 5–8% annually to 2–4% — meaning flips can no longer "appreciate into the money" during rehab. Buyer demand has softened in 2026 due to elevated mortgage rates (~7%), extending time-on-market by 30–50% in many metros. As a concrete example: a Dallas flip sourced in 2019 for $150K with $40K rehab could exit at $260K in 6 months, producing 45% ROI; the same property in 2026 might exit at $235K in 9 months, producing 22% ROI. Hard money that cost $8K total in 2019 now costs $14K on identical deal size. These dynamics compress margins and mean the minimum viable ROI in 2026 is roughly 20–25% to justify execution risk.</p>
        </div>
      </section>

      <!-- ── 7. BENCHMARKS ── -->
      <section id="benchmarks" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Flip ROI by Market &amp; Type (2026, 6-Month Typical Hold)</h2>
        <p class="text-gray-600 mb-6">Typical 2026 flip ROI ranges for 6-month holds with hard money financing. These are industry-standard estimates based on 2026 hard money rates at 75–80% LTC — not market-reported flip statistics. Actual returns depend heavily on specific deal, market, and execution.</p>

        <h3 class="font-bold text-gray-800 mb-3">By Flip Type</h3>
        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-gray-50">
                <th class="text-left px-3 py-2 font-semibold text-gray-600 border border-gray-200">Flip Type</th>
                <th class="text-center px-3 py-2 font-semibold text-gray-600 border border-gray-200">Conservative ROI</th>
                <th class="text-center px-3 py-2 font-semibold text-gray-600 border border-gray-200">Typical ROI</th>
                <th class="text-center px-3 py-2 font-semibold text-gray-600 border border-gray-200">Strong ROI</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">SFR cosmetic flip</td><td class="px-3 py-2 border border-gray-200 text-center text-gray-600">10–18%</td><td class="px-3 py-2 border border-gray-200 text-center font-semibold text-amber-700">18–28%</td><td class="px-3 py-2 border border-gray-200 text-center text-emerald-700">28–40%</td></tr>
              <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">SFR moderate flip</td><td class="px-3 py-2 border border-gray-200 text-center text-gray-600">15–22%</td><td class="px-3 py-2 border border-gray-200 text-center font-semibold text-amber-700">22–32%</td><td class="px-3 py-2 border border-gray-200 text-center text-emerald-700">32–45%</td></tr>
              <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">SFR gut rehab</td><td class="px-3 py-2 border border-gray-200 text-center text-gray-600">18–28%</td><td class="px-3 py-2 border border-gray-200 text-center font-semibold text-amber-700">28–40%</td><td class="px-3 py-2 border border-gray-200 text-center text-emerald-700">40–55%</td></tr>
              <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">Condo flip</td><td class="px-3 py-2 border border-gray-200 text-center text-gray-600">8–15%</td><td class="px-3 py-2 border border-gray-200 text-center font-semibold text-amber-700">15–22%</td><td class="px-3 py-2 border border-gray-200 text-center text-emerald-700">22–30%</td></tr>
              <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Townhouse flip</td><td class="px-3 py-2 border border-gray-200 text-center text-gray-600">10–18%</td><td class="px-3 py-2 border border-gray-200 text-center font-semibold text-amber-700">18–28%</td><td class="px-3 py-2 border border-gray-200 text-center text-emerald-700">28–38%</td></tr>
              <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">Small multifamily flip</td><td class="px-3 py-2 border border-gray-200 text-center text-gray-600">12–20%</td><td class="px-3 py-2 border border-gray-200 text-center font-semibold text-amber-700">20–30%</td><td class="px-3 py-2 border border-gray-200 text-center text-emerald-700">30–42%</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-gray-500 mb-6 italic">Gut rehabs carry higher execution risk but offer greater ARV upside. Condo flips are generally lower-margin due to HOA restrictions on renovation scope and slower buyer velocity.</p>

        <h3 class="font-bold text-gray-800 mb-3">By State — Typical Flip ROI (6-month hold, 2026)</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div class="p-4 rounded-2xl bg-white border border-gray-200">
            <div class="flex justify-between items-start mb-2">
              <span class="font-extrabold text-gray-900">California</span>
              <span class="text-sm font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">15–30% ROI</span>
            </div>
            <p class="text-xs text-gray-500 mb-1">Key markets: Los Angeles, San Diego, Sacramento</p>
            <p class="text-xs text-gray-700 leading-relaxed">California offers the largest dollar profits but compressed ROI due to two key factors. <strong>Factor 1:</strong> $500K+ entry prices compress percentage returns — the same rehab scope that produces 30% ROI in Ohio produces 18% in LA. <strong>Factor 2:</strong> Permit approval delays add 2–3 months of holding costs, often pushing profitable flips into borderline territory.</p>
          </div>
          <div class="p-4 rounded-2xl bg-white border border-gray-200">
            <div class="flex justify-between items-start mb-2">
              <span class="font-extrabold text-gray-900">Texas</span>
              <span class="text-sm font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">22–35% ROI</span>
            </div>
            <p class="text-xs text-gray-500 mb-1">Key markets: Dallas, Houston, San Antonio</p>
            <p class="text-xs text-gray-700 leading-relaxed">Texas is one of the strongest 2026 flip markets. <strong>Factor 1:</strong> Entry prices $150–250K typical for flip-candidate SFRs — lower basis means higher ROI. <strong>Factor 2:</strong> No state income tax means higher net take-home on flip profits (federal ordinary income only). Dallas metro has one of the fastest flip velocities in the country.</p>
          </div>
          <div class="p-4 rounded-2xl bg-white border border-gray-200">
            <div class="flex justify-between items-start mb-2">
              <span class="font-extrabold text-gray-900">Florida</span>
              <span class="text-sm font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">18–30% ROI</span>
            </div>
            <p class="text-xs text-gray-500 mb-1">Key markets: Tampa, Orlando, Jacksonville</p>
            <p class="text-xs text-gray-700 leading-relaxed">Florida flips face tension between strong buyer demand and escalating costs. <strong>Factor 1:</strong> Population inflow supports ARV stability and buyer velocity. <strong>Factor 2:</strong> Hurricane insurance has tripled in many markets since 2020, adding $200–400 to monthly holding costs and compressing margins compared to pre-2022 expectations.</p>
          </div>
          <div class="p-4 rounded-2xl bg-white border border-gray-200">
            <div class="flex justify-between items-start mb-2">
              <span class="font-extrabold text-gray-900">New York</span>
              <span class="text-sm font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full">10–22% ROI</span>
            </div>
            <p class="text-xs text-gray-500 mb-1">Key markets: Buffalo, Rochester, Syracuse, NYC outer boroughs</p>
            <p class="text-xs text-gray-700 leading-relaxed">Upstate NY offers affordable flip entries but slower ARV growth. <strong>Factor 1:</strong> Permit fees in NYC metro run $5–15K on a typical flip. <strong>Factor 2:</strong> Multi-unit properties face rent stabilization complications if tenants remain, limiting scope and timing flexibility.</p>
          </div>
          <div class="p-4 rounded-2xl bg-white border border-gray-200">
            <div class="flex justify-between items-start mb-2">
              <span class="font-extrabold text-gray-900">Arizona</span>
              <span class="text-sm font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">18–32% ROI</span>
            </div>
            <p class="text-xs text-gray-500 mb-1">Key markets: Phoenix, Tucson, Tempe</p>
            <p class="text-xs text-gray-700 leading-relaxed">Phoenix metro is a top 2026 flip market with fast buyer velocity. <strong>Factor 1:</strong> Population growth supports buyer demand — Phoenix metro absorbed 80K+ new residents in 2025. <strong>Factor 2:</strong> Emerging insurance cost pressure from wildfire and extreme heat events is adding 5–10% to holding costs in some submarkets.</p>
          </div>
          <div class="p-4 rounded-2xl bg-white border border-gray-200">
            <div class="flex justify-between items-start mb-2">
              <span class="font-extrabold text-gray-900">Georgia</span>
              <span class="text-sm font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">20–32% ROI</span>
            </div>
            <p class="text-xs text-gray-500 mb-1">Key markets: Atlanta, Savannah, Augusta</p>
            <p class="text-xs text-gray-700 leading-relaxed">Georgia flips benefit from Atlanta's buyer demand and cost structure. <strong>Factor 1:</strong> Atlanta metro has one of the fastest flip-market velocities in the South — typical time-on-market under 30 days for updated SFRs. <strong>Factor 2:</strong> Non-union labor keeps rehab costs 10–15% below coastal markets, improving margins on moderate scope.</p>
          </div>
          <div class="p-4 rounded-2xl bg-white border border-gray-200">
            <div class="flex justify-between items-start mb-2">
              <span class="font-extrabold text-gray-900">Ohio</span>
              <span class="text-sm font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">15–28% ROI</span>
            </div>
            <p class="text-xs text-gray-500 mb-1">Key markets: Columbus, Cincinnati, Cleveland</p>
            <p class="text-xs text-gray-700 leading-relaxed">Ohio offers the most affordable flip entries on this list. <strong>Factor 1:</strong> $100–180K entry prices enable smaller investors to enter the flip market with manageable capital requirements. <strong>Factor 2:</strong> ARV growth has stagnated in Cleveland and parts of Cincinnati, requiring tight scope selection and conservative ARV assumptions.</p>
          </div>
          <div class="p-4 rounded-2xl bg-white border border-gray-200">
            <div class="flex justify-between items-start mb-2">
              <span class="font-extrabold text-gray-900">Pennsylvania</span>
              <span class="text-sm font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">14–26% ROI</span>
            </div>
            <p class="text-xs text-gray-500 mb-1">Key markets: Philadelphia, Pittsburgh, Lancaster</p>
            <p class="text-xs text-gray-700 leading-relaxed">PA flips vary widely by metro. <strong>Factor 1:</strong> Older housing stock (1920s–1960s) often requires electrical, plumbing, and foundation updates that balloon rehab budgets beyond initial estimates. <strong>Factor 2:</strong> Philadelphia metro shows stronger ARVs than Pittsburgh, but both lag Sun Belt markets in ARV growth rate.</p>
          </div>
        </div>
        <p class="text-xs text-gray-400 italic">These flip ROI ranges are synthesized from multiple industry sources including BiggerPockets deal analyses, Fortune Builders case studies, Kiavi and other hard money lender underwriting data, and 2026 market rate surveys. Flip ROI is not directly reported as a market statistic — these ranges are derived from combining typical acquisition discounts, rehab costs, financing costs, and ARV outcomes. Always verify with current local data. Not market-reported figures.</p>
      </section>

      <!-- ── 8. STRATEGY ── -->
      <section id="strategy" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Fix and Flip Strategy — When Profit and ROI Matter Most</h2>
        <p class="text-gray-600 mb-6">How the Fix and Flip Calculator supports different flip investment approaches</p>
        <div class="space-y-5">
          <div class="p-5 rounded-2xl bg-white border border-gray-200">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-xs font-bold px-2.5 py-1 rounded-full text-white" style="background: #1e3a5f;">First-Time Flipper</span>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed mb-3">For investors evaluating their first flip project, the calculator answers the core question: "will I make money on this deal?" Focus on three outputs: the 70% Rule indicator (should show Within rule for a safe first deal), Break-Even Sale Price (should have $15K+ cushion below ARV), and Profit per Month (compare to your opportunity cost and the time you'll invest).</p>
            <p class="text-sm text-gray-700 leading-relaxed">Practical guidance: aim for ROI in Solid tier or better (20%+) before committing. Verify ARV with multiple comp sources and a BPO. Build 15% rehab contingency minimum. Confirm your hard money lender's terms before making offers — lender approval is not guaranteed after contract signing.</p>
          </div>
          <div class="p-5 rounded-2xl bg-white border border-gray-200">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-xs font-bold px-2.5 py-1 rounded-full text-white" style="background: #1e3a5f;">Wholesaler</span>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed mb-3">Wholesalers use the calculator to verify whether deals meet the 70% Rule before assigning to end buyers. Quick check: Purchase Price should be at or below 70% Rule Max Offer. If the purchase is within 70% and has $30K+ Break-Even cushion, the assignment fee is supported by solid deal math.</p>
            <p class="text-sm text-gray-700 leading-relaxed">Tip: run the calculator with the END BUYER's expected financing (hard money at market rates) to show them realistic flip outcomes. If your contract plus assignment fee still shows Solid tier ROI for the buyer, the deal sells itself.</p>
          </div>
          <div class="p-5 rounded-2xl bg-white border border-gray-200">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-xs font-bold px-2.5 py-1 rounded-full text-white" style="background: #1e3a5f;">Experienced Rehabber</span>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed mb-3">Experienced flippers running multiple projects annually use the calculator to rank deal opportunities. Run all active candidates with identical financing assumptions and compare ROI side-by-side. Filter out anything below 25% ROI in the 2026 rate environment — sub-25% flips carry execution risk that often consumes the margin.</p>
            <p class="text-sm text-gray-700 leading-relaxed">Advanced use: build scenario analysis into your workflow. Conservative / Base / Optimistic across three scenarios tells you whether the deal depends on perfect execution or has buffer. Deals where even the Conservative scenario shows positive profit are lower-risk capital deployments.</p>
          </div>
          <div class="p-5 rounded-2xl bg-white border border-gray-200">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-xs font-bold px-2.5 py-1 rounded-full text-white" style="background: #1e3a5f;">All-Cash Flipper</span>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed mb-3">All-cash flippers avoid financing costs but tie up capital entirely. The calculator's All Cash mode shows true ROI without loan interest distortion. Cash flips often show higher ROI than financed equivalents because no interest drag — but dollar profit is similar, and cash lockup is 100% rather than 20%.</p>
            <p class="text-sm text-gray-700 leading-relaxed">Warning: all-cash ROI is NOT directly comparable to financed ROI for deal-sizing decisions. A $100K cash flip with 25% ROI earned $25K absolute. A financed flip with 25% ROI on $25K cash invested earned $6,250. Dollar profit matters more than ROI for cash deployment decisions in large-capital strategies.</p>
          </div>
          <div class="p-5 rounded-2xl bg-white border border-gray-200">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-xs font-bold px-2.5 py-1 rounded-full text-white" style="background: #1e3a5f;">Deal Comparison</span>
            </div>
            <h3 class="font-semibold text-gray-800 mb-2">Using Fix and Flip Calculator to Compare Two Properties</h3>
            <p class="text-sm text-gray-700 leading-relaxed">The best use of this calculator: running two flip candidates side-by-side with identical financing, rehab assumptions, and hold period. Higher Total Profit OR higher ROI wins. If they split (one has higher Profit, other higher ROI), consider capital deployment: ROI favors smaller deals with less risk per dollar, Profit favors deployed capital in larger deals. Experienced flippers typically optimize ROI on smaller deals and Total Profit on larger ones.</p>
          </div>
        </div>
      </section>

      <!-- ── 9. APPLICATIONS ── -->
      <section id="applications" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Applications of Fix and Flip Analysis</h2>
        <p class="text-gray-600 mb-6">Six concrete ways investors use Fix and Flip Calculator</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-4 rounded-2xl bg-white border border-gray-200">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center mb-3" style="background: #f59e0b1a;">
              <span class="font-extrabold text-base" style="color: #f59e0b;">1</span>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">First-Deal Screening</h3>
            <p class="text-sm text-gray-700 leading-relaxed">Is this flip worth pursuing? Quick 3-minute analysis with purchase price, ARV, rehab, and financing gives a go/no-go before spending hours on contractor walkthroughs and lender prep. If the deal doesn't show 20%+ ROI at this stage, it's unlikely to improve with deeper analysis.</p>
          </div>
          <div class="p-4 rounded-2xl bg-white border border-gray-200">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center mb-3" style="background: #f59e0b1a;">
              <span class="font-extrabold text-base" style="color: #f59e0b;">2</span>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Offer Price Construction</h3>
            <p class="text-sm text-gray-700 leading-relaxed">Use Find Max Purchase Price mode to determine your ceiling. Set target ROI (e.g., 25% minimum), enter ARV and rehab, calculator solves for max offer. Makes you competitive on price while staying within your return criteria — and shows exactly how much you have to work with in negotiation.</p>
          </div>
          <div class="p-4 rounded-2xl bg-white border border-gray-200">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center mb-3" style="background: #f59e0b1a;">
              <span class="font-extrabold text-base" style="color: #f59e0b;">3</span>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">70% Rule Compliance Check</h3>
            <p class="text-sm text-gray-700 leading-relaxed">Wholesalers and first-time flippers use the 70% Rule indicator to screen deals before deeper analysis. Within rule = proceed to full underwriting. Outside rule = needs strong justification (hot market, light rehab under 15% of ARV, quick flip under 4 months). The indicator updates in real time as you adjust price or rehab.</p>
          </div>
          <div class="p-4 rounded-2xl bg-white border border-gray-200">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center mb-3" style="background: #f59e0b1a;">
              <span class="font-extrabold text-base" style="color: #f59e0b;">4</span>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Financing Option Comparison</h3>
            <p class="text-sm text-gray-700 leading-relaxed">Toggle between Hard Money, Conventional, and All Cash modes on the same deal. See exactly how financing choice impacts profit, ROI, and cash deployed. Often reveals that cash vs hard money is a much closer call than expected, especially on short 4-month flips where interest costs are minimal.</p>
          </div>
          <div class="p-4 rounded-2xl bg-white border border-gray-200">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center mb-3" style="background: #f59e0b1a;">
              <span class="font-extrabold text-base" style="color: #f59e0b;">5</span>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Rehab Scope Budgeting</h3>
            <p class="text-sm text-gray-700 leading-relaxed">Use Find Max Rehab Budget mode to see the absolute ceiling on rehab spend that still hits your target ROI. Helps contractor negotiations: "we can spend up to $X on this scope and still hit our numbers." Forces the conversation on value-per-dollar of specific upgrades rather than open-ended scope expansion.</p>
          </div>
          <div class="p-4 rounded-2xl bg-white border border-gray-200">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center mb-3" style="background: #f59e0b1a;">
              <span class="font-extrabold text-base" style="color: #f59e0b;">6</span>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Investor Memorandum Prep</h3>
            <p class="text-sm text-gray-700 leading-relaxed">For partnered or syndicated flip projects, Total Profit, ROI, and Break-Even are the three numbers partners ask for first. Export PDF to include as exhibit in a partnership pitch or private lender package. The three-scenario analysis (Conservative / Base / Optimistic) demonstrates thorough stress-testing.</p>
          </div>
        </div>
      </section>

      <!-- ── 10. INDUSTRY STANDARDS ── -->
      <section id="industry-standards" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Industry Standards &amp; Professional Methodologies</h2>
        <p class="text-gray-600 mb-6">How Total Profit, ROI, and the 70% Rule fit into established flip investment frameworks.</p>
        <div class="space-y-6">
          <div class="p-5 rounded-2xl bg-white border border-gray-200">
            <h3 class="font-bold text-gray-900 mb-3">The 70% Rule (Industry Foundation)</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm text-gray-700"><span class="text-amber-500 font-bold flex-shrink-0">→</span><span>70% Rule Max Offer = ARV × 0.70 − Rehab Budget — used across BiggerPockets, Fortune Builders, and virtually all flip education for decades</span></li>
              <li class="flex gap-2 text-sm text-gray-700"><span class="text-amber-500 font-bold flex-shrink-0">→</span><span>The rule provides a 30% buffer for profit, financing costs, and execution risk — critically important at 2026 hard money rates of 11–13%</span></li>
              <li class="flex gap-2 text-sm text-gray-700"><span class="text-amber-500 font-bold flex-shrink-0">→</span><span>Deals within the 70% Rule have high probability of Solid-tier or better ROI outcomes; deals outside carry meaningfully higher execution risk</span></li>
              <li class="flex gap-2 text-sm text-gray-700"><span class="text-amber-500 font-bold flex-shrink-0">→</span><span>Deals outside the rule require strong justification: hot market, very light rehab (under 15% of ARV), or quick flip under 4 months</span></li>
            </ul>
          </div>
          <div class="p-5 rounded-2xl bg-white border border-gray-200">
            <h3 class="font-bold text-gray-900 mb-3">Hard Money Underwriting (Kiavi, LendingOne, local lenders)</h3>
            <p class="text-sm text-gray-700 mb-3">Hard money lenders evaluate flip deals on ARV-based LTV (Loan to Value) and deal execution track record. In 2026, experienced flippers access better terms than first-timers:</p>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm text-gray-700"><span class="text-amber-500 font-bold flex-shrink-0">→</span><span>Hard money lenders underwrite based on ARV — typically 65–75% of ARV as maximum loan (LTV), which differs from LTC (Loan to Cost)</span></li>
              <li class="flex gap-2 text-sm text-gray-700"><span class="text-amber-500 font-bold flex-shrink-0">→</span><span>Loan to Cost (LTC) typically 80–90% covering both Purchase and Rehab for experienced flippers with track record</span></li>
              <li class="flex gap-2 text-sm text-gray-700"><span class="text-amber-500 font-bold flex-shrink-0">→</span><span>Points of 2–4% upfront plus 10–14% annual interest are standard 2026 pricing from Kiavi, LendingOne, and regional hard money lenders</span></li>
              <li class="flex gap-2 text-sm text-gray-700"><span class="text-amber-500 font-bold flex-shrink-0">→</span><span>Lender approval aligns with Solid-tier or better deals — loans on Weak/Critical ROI deals are often denied or re-priced at higher rates</span></li>
            </ul>
          </div>
          <div class="p-5 rounded-2xl bg-white border border-gray-200">
            <h3 class="font-bold text-gray-900 mb-3">Flipper Professional Benchmarks</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm text-gray-700"><span class="text-amber-500 font-bold flex-shrink-0">→</span><span>Professional flippers target 20–35% ROI per project in the 2026 rate environment; anything under 20% is increasingly viewed as not worth the risk</span></li>
              <li class="flex gap-2 text-sm text-gray-700"><span class="text-amber-500 font-bold flex-shrink-0">→</span><span>High-volume flippers (20+ projects per year) accept lower per-project ROI (15–20%) in exchange for volume deployment and portfolio diversification</span></li>
              <li class="flex gap-2 text-sm text-gray-700"><span class="text-amber-500 font-bold flex-shrink-0">→</span><span>Boutique value-add flippers target 35%+ ROI with larger scope, longer holds, and deeper project complexity</span></li>
              <li class="flex gap-2 text-sm text-gray-700"><span class="text-amber-500 font-bold flex-shrink-0">→</span><strong className="text-red-700">Flip profit is typically taxed as ordinary income (25–37% marginal rates) — NOT capital gains. Most active flippers are classified as dealers by the IRS.</strong></li>
              <li class="flex gap-2 text-sm text-gray-700"><span class="text-amber-500 font-bold flex-shrink-0">→</span><span>After-tax flip ROI runs 30–45% below before-tax ROI for most investors in 25–37% marginal brackets — factor this into comparisons with passive investments that get capital gains treatment</span></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ── 11. LIMITATIONS ── -->
      <section id="limitations" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Limitations of Fix and Flip Calculator</h2>
        <p class="text-gray-600 mb-6">Fix and Flip Calculator is the most complete single tool for flip deal analysis, but it has deliberate scope limits you should understand.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div class="p-5 rounded-2xl bg-white border border-gray-200">
            <h3 class="font-bold text-gray-900 mb-2">Before-Tax Analysis Only (v1)</h3>
            <p class="text-sm text-gray-700 leading-relaxed">Calculator does not model ordinary income tax on flip profits. Most flip profits are taxed as ordinary income (25–37% marginal rates) — after-tax take-home is meaningfully lower than displayed Total Profit. State income tax adds 0–13% depending on state. California investors face combined federal + state marginal rates over 50% on flip income. Consult a CPA for tax-optimized flip strategy before assuming the displayed ROI is your actual return.</p>
          </div>
          <div class="p-5 rounded-2xl bg-white border border-gray-200">
            <h3 class="font-bold text-gray-900 mb-2">ARV Is Your Responsibility</h3>
            <p class="text-sm text-gray-700 leading-relaxed">Calculator uses your ARV input directly — no validation against market data. ARV accuracy is the single biggest risk factor in flip analysis. An optimistic $10K ARV miss can eliminate 30–50% of projected profit on a thin-margin flip. Always verify ARV with 3+ active comps, a BPO (Broker Price Opinion), or a pre-rehab appraisal. Never use the seller's ARV estimate without independent verification.</p>
          </div>
          <div class="p-5 rounded-2xl bg-white border border-gray-200">
            <h3 class="font-bold text-gray-900 mb-2">Does Not Model Timeline Overruns</h3>
            <p class="text-sm text-gray-700 leading-relaxed">Calculator uses your Hold Period and Rehab Duration as-entered. Reality: 70% of first-time flips run 1–3 months over budget on timeline. Each extra month adds loan interest, holding costs, and carries market risk. Always stress-test with Hold Period plus 2 months in the Conservative scenario. A 6-month flip that runs to 9 months can see ROI fall from 25% to 12%.</p>
          </div>
          <div class="p-5 rounded-2xl bg-white border border-gray-200">
            <h3 class="font-bold text-gray-900 mb-2">Does Not Include Detailed Rehab Scope</h3>
            <p class="text-sm text-gray-700 leading-relaxed">Rehab is entered as a single dollar figure plus contingency. Calculator does not model line-item scope (electrical vs plumbing vs cosmetic) or sequencing (permit-pulled vs no-permit work). For detailed scope-of-work analysis, use a dedicated rehab estimator or contractor bid system — this calculator is for deal-level go/no-go analysis, not construction management.</p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-gray-50 border border-gray-200">
          <h3 class="font-bold text-gray-800 mb-3">When Not to Use This Calculator</h3>
          <ul class="space-y-2">
            <li class="flex gap-2 text-sm text-gray-700"><span class="text-gray-400 font-bold flex-shrink-0">✗</span><span><strong>Buy and hold rentals:</strong> Use Rental Property Calculator for multi-year cash flow, NOI analysis, and total return modeling</span></li>
            <li class="flex gap-2 text-sm text-gray-700"><span class="text-gray-400 font-bold flex-shrink-0">✗</span><span><strong>BRRRR deals:</strong> Use BRRRR Calculator when available — models the refinance event, seasoning period, and long-term rental phase separately</span></li>
            <li class="flex gap-2 text-sm text-gray-700"><span class="text-gray-400 font-bold flex-shrink-0">✗</span><span><strong>Pure wholesale (no rehab):</strong> Use a dedicated wholesale calculator — flip math doesn't apply to contract assignments without renovation</span></li>
            <li class="flex gap-2 text-sm text-gray-700"><span class="text-gray-400 font-bold flex-shrink-0">✗</span><span><strong>New construction and development:</strong> Use construction-specific pro forma tools — flip math doesn't capture development timeline complexity, carry costs, or entitlement risk</span></li>
          </ul>
        </div>
      </section>

      <!-- ── 12. COMMON MISTAKES ── -->
      <section id="common-mistakes" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Common Mistakes When Calculating Flip Profit</h2>
        <p class="text-gray-600 mb-6">Five mistakes that inflate projected ROI and lead to real-world losses</p>
        <div class="space-y-4">
          <div class="flex gap-4 p-4 rounded-2xl bg-white border border-gray-200">
            <div class="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <span class="text-red-700 font-bold text-sm">1</span>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Using optimistic ARV without comp verification</h3>
              <p class="text-sm text-gray-700 leading-relaxed">First-time flippers commonly enter ARV based on the seller's estimate, wholesaler's pitch, or gut feel. Professional flippers verify ARV with 3+ active comps, a BPO, or a pre-rehab appraisal. An optimistic $10K ARV miss can eliminate 30–50% of projected profit on a thin-margin flip. In soft 2026 markets, ARV misses of $15–25K are not uncommon on deals where buyers overestimated post-renovation demand.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-2xl bg-white border border-gray-200">
            <div class="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <span class="text-red-700 font-bold text-sm">2</span>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Forgetting holding costs in the ROI calculation</h3>
              <p class="text-sm text-gray-700 leading-relaxed">Many flip calculators (and spreadsheets) count holding costs as a "reserve" rather than actual cash outflow. The investor writes a check for property tax, insurance, and utilities every month — they reduce ROI directly. A 6-month flip with $600 monthly holding costs has $3,600 in real outflow. Always count Total Holding Costs in Total Cash Invested, and track loan interest separately to avoid double-counting.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-2xl bg-white border border-gray-200">
            <div class="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <span class="text-red-700 font-bold text-sm">3</span>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Underestimating rehab budget and contingency</h3>
              <p class="text-sm text-gray-700 leading-relaxed">First-time flippers consistently underestimate rehab budget by 15–25%. Standard rehabs have surprises: discovered rot behind drywall, outdated electrical systems requiring a full panel upgrade, permit requirements that extend timeline. A 5% contingency is insufficient for anything beyond cosmetic work; 10–15% is industry standard. If your contractor gives a bid of $40K, budget $46–48K with contingency before running your ROI.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-2xl bg-white border border-gray-200">
            <div class="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <span class="text-red-700 font-bold text-sm">4</span>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Ignoring hard money points and interest in ROI</h3>
              <p class="text-sm text-gray-700 leading-relaxed">Hard money points (2–4% upfront) plus monthly interest (10–14% annualized) can add 8–12% to total project cost on a typical 6-month flip. Many investors focus on the interest rate but forget points are paid upfront at closing — reducing cash available for rehab. On a $150K loan at 3 points and 12% rate over 6 months: $4,500 in points + $9,000 in interest = $13,500 in financing cost alone. Always include both points and total interest in Total Cash Invested.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-2xl bg-white border border-gray-200">
            <div class="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <span class="text-red-700 font-bold text-sm">5</span>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Treating before-tax ROI as take-home profit</h3>
              <p class="text-sm text-gray-700 leading-relaxed">A 30% before-tax ROI on a flip might translate to 18–22% after ordinary income tax for most investors in 25–37% marginal brackets. Flips held under 1 year do NOT receive long-term capital gains treatment — they are ordinary income (25–37% federal + state taxes). Always mentally discount the displayed ROI by your marginal tax rate when comparing flip returns to passive investments like index funds or rental property that may receive more favorable tax treatment.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 13. FAQ ── -->
      <section id="faq" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions</h2>
        <div class="space-y-2">
          <div v-for="(faq, i) in faqs" :key="i" class="border border-gray-200 rounded-2xl overflow-hidden bg-white">
            <button @click="toggleFaq(i)"
              class="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition"
              :aria-expanded="openFaq === i">
              <span class="font-semibold text-gray-900 pr-4 text-sm">{{ faq.q }}</span>
              <svg class="w-4 h-4 flex-shrink-0 text-gray-400 transition-transform" :class="openFaq === i ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="openFaq === i" class="px-5 pb-4">
              <p class="text-sm text-gray-700 leading-relaxed">{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 14. RELATED CALCULATORS ── -->
      <section id="related-calculators" class="py-10">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Related Calculators</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <NuxtLink v-for="calc in relatedCalcs" :key="calc.href" :to="calc.href"
            class="p-4 rounded-2xl bg-white border border-gray-200 hover:border-yellow-400 hover:shadow-md transition group">
            <div class="w-8 h-8 rounded-xl flex items-center justify-center mb-3" style="background: #1e3a5f1a;">
              <svg class="w-4 h-4" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <span class="font-semibold text-gray-800 text-sm group-hover:text-yellow-700 transition">{{ calc.label }}</span>
          </NuxtLink>
        </div>
      </section>

    </div>

    <!-- ═══════════════════════════════════════════════
         FOOTER
    ═══════════════════════════════════════════════ -->
    <footer class="bg-white border-t border-gray-200 mt-8">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background: #1e3a5f;">
                <span class="text-white font-extrabold text-sm">RC</span>
              </div>
              <span class="font-extrabold" style="color: #1e3a5f;">RealCalc</span>
            </div>
            <p class="text-xs text-gray-400 leading-relaxed">Free real estate investment calculators for US investors. Accurate. Fast. No signup required.</p>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Calculators</p>
            <ul class="space-y-2">
              <li><NuxtLink to="/cap-rate-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">Cap Rate</NuxtLink></li>
              <li><NuxtLink to="/rental-property-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">Rental Property</NuxtLink></li>
              <li><NuxtLink to="/fix-and-flip-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">Fix &amp; Flip</NuxtLink></li>
              <li><NuxtLink to="/dscr-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">DSCR</NuxtLink></li>
            </ul>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">More Tools</p>
            <ul class="space-y-2">
              <li><NuxtLink to="/cash-on-cash-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">Cash-on-Cash Return</NuxtLink></li>
              <li><NuxtLink to="/noi-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">NOI Calculator</NuxtLink></li>
              <li><NuxtLink to="/brrrr-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">BRRRR Calculator</NuxtLink></li>
              <li><NuxtLink to="/arv-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">ARV Calculator</NuxtLink></li>
            </ul>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Company</p>
            <ul class="space-y-2">
              <li><NuxtLink to="/about" class="text-sm text-gray-500 hover:text-gray-800 transition">About</NuxtLink></li>
              <li><NuxtLink to="/pricing" class="text-sm text-gray-500 hover:text-gray-800 transition">Pricing</NuxtLink></li>
              <li><NuxtLink to="/privacy" class="text-sm text-gray-500 hover:text-gray-800 transition">Privacy</NuxtLink></li>
              <li><NuxtLink to="/terms" class="text-sm text-gray-500 hover:text-gray-800 transition">Terms</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-100 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-xs text-gray-400">© 2026 RealCalc. For informational purposes only. Not financial advice.</p>
          <p class="text-xs text-gray-400">Before-tax analysis only. Consult a CPA for tax impact on flip profits.</p>
        </div>
      </div>
    </footer>

    <EmailCaptureModal
      :show="showEmailModal"
      :calculator-name="'Fix and Flip Calculator'"
      :primary-result="hasResult ? `${totalProfit >= 0 ? formatCurrency(totalProfit) : '-' + formatCurrency(Math.abs(totalProfit))} profit · ${roi.toFixed(1)}% ROI` : undefined"
      title="Save Your Flip Analysis"
      subtitle="Get market benchmarks, deal templates, and calculator updates."
      cta-label="Save &amp; Get Free Updates"
      @close="showEmailModal = false"
      @captured="onEmailCaptured"
    />

  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, nextTick } from 'vue'

// ─── SEO HEAD ─────────────────────────────────────────────────────────────────
useHead({
  title: 'Fix and Flip Calculator — 2026 ROI Tool | RealCalc',
  meta: [
    {
      name: 'description',
      content: 'Calculate flip profit, ROI, and 70% Rule max offer for any US property. Free 2026 fix and flip calculator with hard money, conventional, and all-cash scenarios.'
    },
    { name: 'keywords', content: 'fix and flip calculator, house flipping calculator, flip profit calculator, fix and flip roi calculator, real estate flip calculator, 70% rule calculator, hard money flip calculator' },
    { property: 'og:title', content: 'Fix and Flip Calculator — 2026 ROI Tool | RealCalc' },
    { property: 'og:description', content: 'Calculate flip profit, ROI, and 70% Rule max offer for any US property. Free 2026 fix and flip calculator with hard money, conventional, and all-cash scenarios.' },
    { property: 'og:type', content: 'website' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Fix and Flip Calculator',
        applicationCategory: 'FinanceApplication',
        description: 'Free 2026 fix and flip calculator. Computes Total Profit, ROI, 70% Rule Max Offer, Break-Even Sale Price, Annualized ROI, and Profit per Month. Supports hard money, conventional, and all-cash financing with 3 calculation modes.',
        featureList: 'Total Profit calculation, ROI analysis, 70% Rule Max Offer, Break-Even Sale Price, Annualized ROI, hard money/conventional/cash modes, 3 calculation modes, sensitivity analysis, scenario modeling, PDF export, 6-tier benchmarking, project timeline table',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
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
            name: 'What is a good ROI for a flip in 2026?',
            acceptedAnswer: { '@type': 'Answer', text: 'In 2026, with hard money rates at 11–13%, a good flip ROI is 20–29% (Solid), 30–49% (Strong), or 50%+ (Exceptional) for a 6-month hold. Below 20% ROI is increasingly considered Weak because execution risk often exceeds the margin. Aim for 25%+ ROI minimum to justify the capital and time investment.' }
          },
          {
            '@type': 'Question',
            name: 'What is the 70% Rule in house flipping?',
            acceptedAnswer: { '@type': 'Answer', text: 'The 70% Rule formula is: Max Offer = ARV × 0.70 − Rehab Budget. It reserves 30% of ARV for profit, financing costs, and execution risk. Deals at or below the 70% Max Offer are within the rule; deals above require strong justification such as a hot market or very light rehab scope.' }
          },
          {
            '@type': 'Question',
            name: 'How do I calculate flip profit and ROI?',
            acceptedAnswer: { '@type': 'Answer', text: 'Total Profit = Net Sale Proceeds − Total Cash Invested. ROI = (Total Profit ÷ Total Cash Invested) × 100. Example: $150K invested, $200K net sale proceeds after all costs → Total Profit $50K → ROI 33%.' }
          },
          {
            '@type': 'Question',
            name: 'Should I use hard money or cash for a flip?',
            acceptedAnswer: { '@type': 'Answer', text: 'Hard money lets you deploy smaller capital per deal (typically 20% down) but adds 8–12% in points and interest over the project. Cash has no financing cost but ties up 100% of capital. Hard money is standard for flippers running multiple projects; cash is better for flippers with limited deal volume or risk tolerance. Run the calculator in both modes to compare.' }
          },
          {
            '@type': 'Question',
            name: 'How long should a typical flip take?',
            acceptedAnswer: { '@type': 'Answer', text: 'Typical 2026 flips run 5–8 months total: 2–4 months rehab plus 2–4 months on market. Cosmetic flips can complete in 3–4 months; gut rehabs typically run 6–10 months. Every extra month adds holding costs and loan interest — a flip that runs 3 months over budget can lose 8–15% of projected ROI.' }
          },
          {
            '@type': 'Question',
            name: 'Is flip profit taxed as capital gains or ordinary income?',
            acceptedAnswer: { '@type': 'Answer', text: 'Flip profits are typically taxed as ORDINARY INCOME (25–37% marginal rates in 2026), not capital gains. The IRS views flippers as dealers of real estate — especially if flipping is a regular activity. Only properties held 1+ year as genuine long-term investment may qualify for capital gains treatment. Consult a CPA for your specific situation.' }
          },
          {
            '@type': 'Question',
            name: 'What is ARV and why does it matter so much?',
            acceptedAnswer: { '@type': 'Answer', text: 'ARV (After Repair Value) is the projected market value of the property AFTER renovation is complete. It is the single most important input in flip analysis — a $10K ARV miss on a thin-margin deal can eliminate the entire projected profit. Verify ARV with 3+ active MLS comps, a BPO, or a pre-rehab appraisal. Conservative ARV estimates produce more reliable flip outcomes.' }
          },
          {
            '@type': 'Question',
            name: 'Can I use this calculator for BRRRR or wholesale deals?',
            acceptedAnswer: { '@type': 'Answer', text: 'Partially. For BRRRR, you can use it for the pre-refinance stage (purchase + rehab + stabilize) but a dedicated BRRRR Calculator handles the refinance event better. For pure wholesale (contract assignment without rehab), flip math does not apply. For hybrid deals, run both this calculator and Rental Property Calculator to compare strategies.' }
          }
        ]
      })
    }
  ]
})

// ─── REACTIVE STATE ──────────────────────────────────────────────────────────
const calcMode = ref('analyze')
const openFaq = ref(null)
const isNavExpanded = ref(false)
const shareSuccess = ref(false)
const showEmailModal = ref(false)
const triggerScenarioSave = ref(false)
const scenariosOpen = ref(false)
const showSensitivity = ref(false)

const form = reactive({
  // Property
  purchasePrice: null,
  arv: null,
  arvConfidence: 'realistic',
  propertyType: 'sfr',
  // Purchase Costs
  closingCostsMode: 'percent',
  purchaseClosingCostsPct: 3,
  purchaseClosingCostsDollars: null,
  // Rehab
  rehabBudget: null,
  rehabContingencyPct: 10,
  rehabDurationMonths: 3,
  // Hold Period
  holdPeriodMonths: 6,
  // Holding Costs
  holdingMode: 'simple',
  totalMonthlyHoldingSimple: null,
  holdingCosts: {
    propertyTax: null,
    insurance: null,
    utilities: null,
    hoa: null,
    other: null,
  },
  // Financing
  financingType: 'hm',
  hmLoanToCostPct: 80,
  hmInterestRate: 12,
  hmPointsPct: 3,
  hmLoanCoversRehab: true,
  convDownPaymentPct: 25,
  convInterestRate: 7.5,
  convLoanTermYears: 30,
  // Sale Costs
  saleCostsPct: 8,
  // Reverse mode
  targetType: 'roi',
  targetROI: 25,
  targetTotalProfit: null,
})

// ─── HELPER: calc flip at arbitrary params (for sensitivity/scenarios/reverse) ─
function calcFlipHelper(params) {
  const pp   = params.purchasePrice || 0
  const arvv = params.arv || 0
  const rb   = params.rehabBudget || 0
  const rc   = rb * (params.rehabContingencyPct || 10) / 100
  const months = params.holdPeriodMonths || 6
  const scp  = (params.saleCostsPct || 8) / 100
  const ccm  = params.closingCostsMode || 'percent'
  const ccp  = params.purchaseClosingCostsPct || 3
  const ccd  = params.purchaseClosingCostsDollars || 0
  const closingCosts = ccm === 'dollar' ? ccd : pp * ccp / 100
  const holdingMonthly = params.holdingMonthly || 0
  const holdingCostsTotal = holdingMonthly * months
  const saleCosts = arvv * scp
  const ft   = params.financingType || 'hm'
  const hmLtc = params.hmLoanToCostPct || 80
  const hmRate = params.hmInterestRate || 12
  const hmPts  = params.hmPointsPct || 3
  const hmCoversRehab = params.hmLoanCoversRehab !== false

  let la = 0, dp = 0, points = 0, interest = 0, remaining = 0

  if (ft === 'cash') {
    dp = pp; la = 0; points = 0; interest = 0; remaining = 0
  } else if (ft === 'hm') {
    const base = hmCoversRehab ? (pp + rb) : pp
    la = base * hmLtc / 100
    dp = pp * (1 - hmLtc / 100)
    points = la * hmPts / 100
    interest = la * hmRate / 100 / 12 * months
    remaining = la
  } else {
    // conv
    const convDown = params.convDownPaymentPct || 25
    const convRate = params.convInterestRate || 7.5
    const convTerm = params.convLoanTermYears || 30
    la = pp * (1 - convDown / 100)
    dp = pp * convDown / 100
    points = 0
    if (la > 0) {
      const r = convRate / 100 / 12
      const n = convTerm * 12
      const M = months
      if (r > 0) {
        const mp = la * (r * Math.pow(1+r, n)) / (Math.pow(1+r, n) - 1)
        remaining = la * (Math.pow(1+r, n) - Math.pow(1+r, M)) / (Math.pow(1+r, n) - 1)
        interest = mp * M - (la - remaining)
      } else {
        remaining = la * (1 - M / n)
        interest = 0
      }
    }
  }

  const rehabCash = (ft === 'hm' && hmCoversRehab) ? 0 : rb
  const contingencyCash = (ft === 'hm' && hmCoversRehab) ? 0 : rc
  const tci = dp + closingCosts + rehabCash + contingencyCash + holdingCostsTotal + points + interest
  const nsp = arvv - saleCosts - remaining
  const profit = nsp - tci
  const roi = tci > 0 ? profit / tci * 100 : 0

  return { profit, roi, tci, la, remaining, points, interest, nsp, saleCosts, closingCosts, dp }
}

// ─── BASE PARAMS HELPER ─────────────────────────────────────────────────────
function getBaseParams(overrides = {}) {
  return {
    purchasePrice: Number(form.purchasePrice) || 0,
    arv: Number(form.arv) || 0,
    rehabBudget: Number(form.rehabBudget) || 0,
    rehabContingencyPct: Number(form.rehabContingencyPct) || 10,
    holdPeriodMonths: Number(form.holdPeriodMonths) || 6,
    saleCostsPct: Number(form.saleCostsPct) || 8,
    closingCostsMode: form.closingCostsMode,
    purchaseClosingCostsPct: Number(form.purchaseClosingCostsPct) || 3,
    purchaseClosingCostsDollars: Number(form.purchaseClosingCostsDollars) || 0,
    holdingMonthly: totalMonthlyHolding.value,
    financingType: form.financingType,
    hmLoanToCostPct: Number(form.hmLoanToCostPct) || 80,
    hmInterestRate: Number(form.hmInterestRate) || 12,
    hmPointsPct: Number(form.hmPointsPct) || 3,
    hmLoanCoversRehab: form.hmLoanCoversRehab,
    convDownPaymentPct: Number(form.convDownPaymentPct) || 25,
    convInterestRate: Number(form.convInterestRate) || 7.5,
    convLoanTermYears: Number(form.convLoanTermYears) || 30,
    ...overrides
  }
}

// ─── COMPUTED — HOLDING COSTS ─────────────────────────────────────────────────
const totalMonthlyHolding = computed(() => {
  if (form.holdingMode === 'simple') return Number(form.totalMonthlyHoldingSimple) || 0
  return (Number(form.holdingCosts.propertyTax) || 0) +
         (Number(form.holdingCosts.insurance) || 0) +
         (Number(form.holdingCosts.utilities) || 0) +
         (Number(form.holdingCosts.hoa) || 0) +
         (Number(form.holdingCosts.other) || 0)
})

const totalHoldingCosts = computed(() =>
  totalMonthlyHolding.value * (Number(form.holdPeriodMonths) || 6)
)

// ─── COMPUTED — LOAN CALCULATIONS ────────────────────────────────────────────
const loanAmount = computed(() => {
  const pp = Number(form.purchasePrice) || 0
  const rb = Number(form.rehabBudget) || 0
  if (form.financingType === 'cash') return 0
  if (form.financingType === 'hm') {
    const base = form.hmLoanCoversRehab ? (pp + rb) : pp
    return base * (Number(form.hmLoanToCostPct) || 80) / 100
  }
  return pp * (1 - (Number(form.convDownPaymentPct) || 25) / 100)
})

const loanPoints = computed(() => {
  if (form.financingType !== 'hm') return 0
  return loanAmount.value * (Number(form.hmPointsPct) || 3) / 100
})

const totalLoanInterest = computed(() => {
  const months = Number(form.holdPeriodMonths) || 6
  if (form.financingType === 'cash') return 0
  if (form.financingType === 'hm') {
    return loanAmount.value * (Number(form.hmInterestRate) || 12) / 100 / 12 * months
  }
  // conv amortizing
  const P = loanAmount.value
  if (P <= 0) return 0
  const r = (Number(form.convInterestRate) || 7.5) / 100 / 12
  const n = (Number(form.convLoanTermYears) || 30) * 12
  const M = months
  if (r > 0) {
    const mp = P * (r * Math.pow(1+r, n)) / (Math.pow(1+r, n) - 1)
    const rem = P * (Math.pow(1+r, n) - Math.pow(1+r, M)) / (Math.pow(1+r, n) - 1)
    return mp * M - (P - rem)
  } else {
    return 0
  }
})

const remainingLoanBalance = computed(() => {
  if (form.financingType === 'cash') return 0
  if (form.financingType === 'hm') return loanAmount.value
  const P = loanAmount.value
  if (P <= 0) return 0
  const r = (Number(form.convInterestRate) || 7.5) / 100 / 12
  const n = (Number(form.convLoanTermYears) || 30) * 12
  const M = Number(form.holdPeriodMonths) || 6
  if (r > 0) {
    return P * (Math.pow(1+r, n) - Math.pow(1+r, M)) / (Math.pow(1+r, n) - 1)
  }
  return P * (1 - M / n)
})

const downPaymentCalc = computed(() => {
  const pp = Number(form.purchasePrice) || 0
  if (form.financingType === 'cash') return pp
  if (form.financingType === 'hm') return pp * (1 - (Number(form.hmLoanToCostPct) || 80) / 100)
  return pp * (Number(form.convDownPaymentPct) || 25) / 100
})

const purchaseClosingCostsCalc = computed(() => {
  const pp = Number(form.purchasePrice) || 0
  if (form.closingCostsMode === 'dollar') return Number(form.purchaseClosingCostsDollars) || 0
  return pp * (Number(form.purchaseClosingCostsPct) || 3) / 100
})

const rehabContingencyCalc = computed(() =>
  (Number(form.rehabBudget) || 0) * (Number(form.rehabContingencyPct) || 10) / 100
)

const saleCostsDollar = computed(() =>
  (Number(form.arv) || 0) * (Number(form.saleCostsPct) || 8) / 100
)

// ─── COMPUTED — MAIN CALC CHAIN ───────────────────────────────────────────────
const totalCashInvested = computed(() => {
  const rb = Number(form.rehabBudget) || 0
  const rc = rehabContingencyCalc.value
  const rehabCash = (form.financingType === 'hm' && form.hmLoanCoversRehab) ? 0 : rb
  const contingencyCash = (form.financingType === 'hm' && form.hmLoanCoversRehab) ? 0 : rc
  return downPaymentCalc.value + purchaseClosingCostsCalc.value + rehabCash + contingencyCash +
         totalHoldingCosts.value + loanPoints.value + totalLoanInterest.value
})

const totalProjectCosts = computed(() =>
  (Number(form.purchasePrice) || 0) + purchaseClosingCostsCalc.value +
  (Number(form.rehabBudget) || 0) + rehabContingencyCalc.value +
  totalHoldingCosts.value + loanPoints.value + totalLoanInterest.value + saleCostsDollar.value
)

const netSaleProceeds = computed(() =>
  (Number(form.arv) || 0) - saleCostsDollar.value - remainingLoanBalance.value
)

const totalProfit = computed(() =>
  netSaleProceeds.value - totalCashInvested.value
)

const roi = computed(() =>
  totalCashInvested.value > 0 ? (totalProfit.value / totalCashInvested.value) * 100 : 0
)

const hasResult = computed(() => {
  if (calcMode.value === 'analyze') {
    return !!(Number(form.purchasePrice) > 0 && Number(form.arv) > 0)
  }
  if (calcMode.value === 'find-price') return findMaxPriceResult.value !== null
  if (calcMode.value === 'find-rehab') return findMaxRehabResult.value !== null
  return false
})

// ─── COMPUTED — DERIVED METRICS ───────────────────────────────────────────────
const annualizedROI = computed(() => {
  if (!hasResult.value || roi.value <= -100) return 0
  const months = Number(form.holdPeriodMonths) || 6
  return (Math.pow(1 + roi.value / 100, 12 / months) - 1) * 100
})

const profitPerMonth = computed(() => {
  const months = Number(form.holdPeriodMonths) || 6
  return totalProfit.value / months
})

const seventyPctRuleMax = computed(() => {
  const arv = Number(form.arv) || 0
  const rb  = Number(form.rehabBudget) || 0
  return arv * 0.70 - rb
})

const isWithin70Rule = computed(() => {
  const pp = Number(form.purchasePrice) || 0
  return pp <= seventyPctRuleMax.value
})

const breakEvenSalePrice = computed(() => {
  const scp = (Number(form.saleCostsPct) || 8) / 100
  if (scp >= 1) return 0
  return (totalCashInvested.value + remainingLoanBalance.value) / (1 - scp)
})

// ─── COMPUTED — BADGE / TIER ──────────────────────────────────────────────────
const tier = computed(() => {
  const r = roi.value
  if (r >= 50) return { label: 'Exceptional', bg1: '#059669', bg2: '#047857' }
  if (r >= 30) return { label: 'Strong',      bg1: '#10B981', bg2: '#059669' }
  if (r >= 20) return { label: 'Solid',       bg1: '#F59E0B', bg2: '#D97706' }
  if (r >= 10) return { label: 'Weak',        bg1: '#F97316', bg2: '#EA580C' }
  if (r >= 0)  return { label: 'Critical',    bg1: '#DC2626', bg2: '#B91C1C' }
  return              { label: 'Loss',        bg1: '#7F1D1D', bg2: '#991B1B' }
})

function getTier(r) {
  if (r >= 50) return { label: 'Exceptional', bg: '#059669' }
  if (r >= 30) return { label: 'Strong',      bg: '#10B981' }
  if (r >= 20) return { label: 'Solid',       bg: '#F59E0B' }
  if (r >= 10) return { label: 'Weak',        bg: '#F97316' }
  if (r >= 0)  return { label: 'Critical',    bg: '#DC2626' }
  return              { label: 'Loss',        bg: '#7F1D1D' }
}

// ─── COMPUTED — INSIGHT TEXT ──────────────────────────────────────────────────
const insightText = computed(() => {
  if (!hasResult.value) return ''
  const r = roi.value.toFixed(1)
  const months = form.holdPeriodMonths
  const ft = form.financingType === 'hm' ? 'hard money' : form.financingType === 'conv' ? 'conventional' : 'all-cash'
  const ruleStatus = isWithin70Rule.value ? 'within the 70% Rule' : 'outside the 70% Rule'
  const tierName = tier.value.label

  if (roi.value < 0) {
    return `ROI of ${r}% over ${months} months with ${ft} financing projects a loss in the ${tierName} range. This deal loses money as underwritten. Major concern: ${Math.abs(totalProfit.value) > 20000 ? 'significant loss requiring fundamental deal restructuring' : 'thin loss that could be addressed by reducing purchase price or rehab scope'}. Your purchase is ${ruleStatus} — the 70% Rule max offer is ${formatCurrency(seventyPctRuleMax.value)}. Do not proceed without significant changes to price, scope, or exit assumptions.`
  }
  if (roi.value < 10) {
    return `ROI of ${r}% over ${months} months with ${ft} financing is in the ${tierName} range by 2026 US flip market norms. This barely-positive return carries high execution risk in the current rate environment. Your purchase is ${ruleStatus}. At 2026 hard money rates (~12%), any rehab overrun, timeline slip, or ARV miss will push this into loss territory. Reconsider deal structure or walk.`
  }
  if (roi.value < 20) {
    return `ROI of ${r}% over ${months} months with ${ft} financing is ${tierName} by 2026 standards. Below-market return that may not justify execution risk. Major factor: ${loanPoints.value + totalLoanInterest.value > totalProfit.value * 0.5 ? 'high financing costs relative to profit' : purchaseClosingCostsCalc.value + totalHoldingCosts.value > 5000 ? 'holding and closing costs compressing margin' : 'acquisition price relative to ARV'}. Your offer is ${ruleStatus}. Consider the opportunity cost vs a deal with Solid-tier ROI.`
  }
  if (roi.value < 30) {
    return `ROI of ${r}% over ${months} months with ${ft} financing is ${tierName} — market-average for 2026 hard-money flips. Acceptable if execution is tight and timeline is respected. Your purchase is ${ruleStatus}. With hard money rates at ~12% in 2026, this margin is thin enough that a 20% rehab overrun or 2-month timeline extension could push you into Weak territory. Stress-test with Conservative scenario before committing. Before-tax analysis — actual take-home lower after ordinary income taxes.`
  }
  if (roi.value < 50) {
    return `ROI of ${r}% over ${months} months with ${ft} financing is ${tierName} — above-average for 2026 US flip market. Healthy margin of safety for execution risk and market softness. Your purchase is ${ruleStatus}. Annualized ROI of ${annualizedROI.value.toFixed(0)}% compares favorably to most passive investment alternatives. Before-tax analysis — actual take-home lower after ordinary income taxes.`
  }
  return `ROI of ${r}% over ${months} months with ${ft} financing is ${tierName} — top-quartile flip result. Usually requires deep-value acquisition, major scope of work, or rapidly appreciating market conditions. Your purchase is ${ruleStatus}. Verify ARV conservatively — optimistic ARV assumptions are the most common driver of inflated projections at this level. Before-tax analysis — actual take-home lower after ordinary income taxes.`
})

// ─── COMPUTED — WARNINGS ─────────────────────────────────────────────────────
const warnings = computed(() => {
  const ws = []
  const pp = Number(form.purchasePrice) || 0
  const arv = Number(form.arv) || 0
  const rb = Number(form.rehabBudget) || 0

  if (pp > 0 && arv > 0 && !isWithin70Rule.value) {
    ws.push({ type: 'warn', msg: `Outside 70% Rule — Your offer of ${formatCurrency(pp)} exceeds the 70% Rule max of ${formatCurrency(seventyPctRuleMax.value)}. High execution risk.` })
  }
  if (pp > 0 && arv > 0 && arv <= pp + rb) {
    ws.push({ type: 'error', msg: 'ARV barely covers purchase + rehab — no margin for costs. Review deal fundamentals.' })
  }
  if (rb > 0 && pp > 0 && rb < pp * 0.05) {
    ws.push({ type: 'warn', msg: 'Rehab budget may be unrealistically low for most flips — verify scope of work.' })
  }
  if (rb > 0 && pp > 0 && rb > pp * 0.6) {
    ws.push({ type: 'warn', msg: `Heavy rehab — ${formatCurrency(rb)} is ${((rb/pp)*100).toFixed(0)}% of purchase price. Confirm scope and contractor bids.` })
  }
  if (Number(form.rehabDurationMonths) > Number(form.holdPeriodMonths)) {
    ws.push({ type: 'error', msg: 'Rehab duration exceeds hold period — adjust one of the two values.' })
  }
  if (Number(form.hmInterestRate) > 15 && form.financingType === 'hm') {
    ws.push({ type: 'warn', msg: 'HM rate above typical 2026 range (10–14%) — verify lender quote.' })
  }
  if (Number(form.hmPointsPct) > 5 && form.financingType === 'hm') {
    ws.push({ type: 'warn', msg: 'Points above typical 2026 range (2–4%) — verify lender terms.' })
  }
  if (hasResult.value && roi.value > 200) {
    ws.push({ type: 'warn', msg: 'ROI above 200% — verify ARV and cost inputs for accuracy.' })
  }
  if (hasResult.value && roi.value < -50) {
    ws.push({ type: 'warn', msg: 'ROI below −50% — verify inputs. This is an unusually large projected loss.' })
  }
  return ws
})

// ─── COMPUTED — SCENARIOS ────────────────────────────────────────────────────
const scenarioResults = computed(() => {
  if (!hasResult.value) return []
  const bp = getBaseParams()
  const months = Number(form.holdPeriodMonths) || 6

  const scenarios = [
    {
      label: 'Conservative',
      isBase: false,
      adjustments: 'ARV −8%, Rehab +20%, Hold +2mo, HM Rate +1%',
      params: {
        arv: bp.arv * 0.92,
        rehabBudget: bp.rehabBudget * 1.20,
        holdPeriodMonths: months + 2,
        hmInterestRate: bp.hmInterestRate + 1,
      }
    },
    {
      label: 'Base',
      isBase: true,
      adjustments: null,
      params: {}
    },
    {
      label: 'Optimistic',
      isBase: false,
      adjustments: 'ARV +5%, Rehab −5%, Hold −1mo',
      params: {
        arv: bp.arv * 1.05,
        rehabBudget: bp.rehabBudget * 0.95,
        holdPeriodMonths: Math.max(3, months - 1),
      }
    }
  ]

  return scenarios.map(s => {
    const p = getBaseParams(s.params)
    const result = calcFlipHelper(p)
    const t = getTier(result.roi)
    return {
      label: s.label,
      isBase: s.isBase,
      adjustments: s.adjustments,
      profit: result.profit,
      roi: result.roi,
      tierLabel: t.label,
      tierBg: t.bg
    }
  })
})

// ─── COMPUTED — SENSITIVITY TABLES ────────────────────────────────────────────
const sensitivityTable1 = computed(() => {
  const pp = Number(form.purchasePrice) || 0
  const arv = Number(form.arv) || 0
  const rb = Number(form.rehabBudget) || 0
  if (!pp || !arv) return []
  const arvDeltas = [-0.10, -0.05, 0, 0.05, 0.10]
  const rehabMultipliers = [1.00, 1.15, 1.30]
  return arvDeltas.map(d => ({
    label: d === 0 ? 'Target ARV' : (d > 0 ? `ARV +${Math.abs(d*100)}%` : `ARV −${Math.abs(d*100)}%`),
    isBase: d === 0,
    cells: rehabMultipliers.map((m, j) => {
      const r = calcFlipHelper(getBaseParams({ arv: arv * (1 + d), rehabBudget: rb * m }))
      return { key: j, profit: r.profit, roi: r.roi }
    })
  }))
})

const sensitivityTable2 = computed(() => {
  if (!Number(form.purchasePrice) || !Number(form.arv)) return []
  const holdOptions = [4, 6, 8, 10]
  const rateOptions = [10, 12, 14]
  const baseMonths = Number(form.holdPeriodMonths) || 6
  return holdOptions.map(h => ({
    label: `${h} months`,
    isBase: h === baseMonths,
    cells: rateOptions.map((rate, j) => {
      const r = calcFlipHelper(getBaseParams({
        holdPeriodMonths: h,
        hmInterestRate: rate
      }))
      return { key: j, roi: r.roi, profit: r.profit }
    })
  }))
})

const sensitivityTable3 = computed(() => {
  const pp = Number(form.purchasePrice) || 0
  const arv = Number(form.arv) || 0
  const rb = Number(form.rehabBudget) || 0
  if (!pp || !arv) return []
  const deltas = [-15000, -10000, -5000, 0, 5000, 10000, 15000, 20000]
  return deltas.map(d => {
    const newPP = pp + d
    if (newPP <= 0) return null
    const r = calcFlipHelper(getBaseParams({ purchasePrice: newPP }))
    const ruleMax = arv * 0.70 - rb
    return {
      label: d === 0 ? formatCurrency(pp) + ' (base)' : (d > 0 ? formatCurrency(pp) + ' +' + formatCurrency(d) : formatCurrency(pp) + ' −' + formatCurrency(Math.abs(d))),
      isBase: d === 0,
      profit: r.profit,
      roi: r.roi,
      within70: newPP <= ruleMax
    }
  }).filter(Boolean)
})

// ─── COMPUTED — PROJECT TIMELINE ──────────────────────────────────────────────
const projectTimeline = computed(() => {
  if (!hasResult.value) return []
  const pp = Number(form.purchasePrice) || 0
  const rb = Number(form.rehabBudget) || 0
  const rc = rehabContingencyCalc.value
  const months = Number(form.holdPeriodMonths) || 6
  const rehabDur = Number(form.rehabDurationMonths) || 3
  const holdingMo = totalMonthlyHolding.value
  const closing = purchaseClosingCostsCalc.value
  const rows = []

  // Month 0 — Closing
  rows.push({
    month: '0',
    phase: 'Closing',
    cumulCost: pp + closing + loanPoints.value,
    cumulHolding: 0,
    notes: 'Purchase + closing costs + loan points',
    isExit: false
  })

  // Months 1–rehabDur — Rehab
  const rehabPerMonth = rb / Math.max(rehabDur, 1)
  for (let m = 1; m <= Math.min(rehabDur, months - 1); m++) {
    const cumulRehab = Math.min(m * rehabPerMonth + rc, rb + rc)
    rows.push({
      month: String(m),
      phase: m === rehabDur ? 'Rehab complete' : 'Rehab in progress',
      cumulCost: pp + closing + loanPoints.value + cumulRehab,
      cumulHolding: holdingMo * m,
      notes: m === rehabDur ? 'Staged for market' : `Rehab draw ${m} of ${rehabDur}`,
      isExit: false
    })
  }

  // On-market months
  for (let m = rehabDur + 1; m < months; m++) {
    rows.push({
      month: String(m),
      phase: 'On market',
      cumulCost: pp + closing + loanPoints.value + rb + rc,
      cumulHolding: holdingMo * m,
      notes: m === months - 1 ? 'Under contract' : '',
      isExit: false
    })
  }

  // Exit month
  rows.push({
    month: `${months} — Exit`,
    phase: 'SALE',
    cumulCost: totalProjectCosts.value,
    cumulHolding: holdingMo * months,
    notes: `Net proceeds: ${formatCurrency(netSaleProceeds.value)}`,
    isExit: true
  })

  return rows
})

// ─── COMPUTED — REVERSE MODE: Find Max Purchase Price ─────────────────────────
const findMaxPriceResult = computed(() => {
  if (calcMode.value !== 'find-price') return null
  const arv = Number(form.arv) || 0
  if (arv <= 0) return null

  const isROI = form.targetType === 'roi'
  const targetVal = isROI ? Number(form.targetROI) : Number(form.targetTotalProfit)
  if (!targetVal) return null

  const metTarget = (res) => isROI ? res.roi >= targetVal : res.profit >= targetVal

  let lo = 10000, hi = 2 * arv
  const calcAt = (pp) => calcFlipHelper(getBaseParams({ purchasePrice: pp }))

  if (!metTarget(calcAt(lo))) return null

  for (let i = 0; i < 100; i++) {
    if (hi - lo < 500) break
    const mid = (lo + hi) / 2
    if (metTarget(calcAt(mid))) {
      lo = mid
    } else {
      hi = mid
    }
  }

  if (!metTarget(calcAt(lo))) return null
  return Math.floor(lo)
})

const findMaxPriceError = computed(() => {
  if (calcMode.value !== 'find-price') return null
  const arv = Number(form.arv) || 0
  if (arv <= 0) return 'Enter ARV to solve'
  const isROI = form.targetType === 'roi'
  const targetVal = isROI ? Number(form.targetROI) : Number(form.targetTotalProfit)
  if (!targetVal) return 'Enter a target return'
  if (findMaxPriceResult.value === null) return 'Target not achievable with current ARV and rehab assumptions.'
  return null
})

// ─── COMPUTED — REVERSE MODE: Find Max Rehab ─────────────────────────────────
const findMaxRehabResult = computed(() => {
  if (calcMode.value !== 'find-rehab') return null
  const pp = Number(form.purchasePrice) || 0
  const arv = Number(form.arv) || 0
  if (pp <= 0 || arv <= 0) return null

  const isROI = form.targetType === 'roi'
  const targetVal = isROI ? Number(form.targetROI) : Number(form.targetTotalProfit)
  if (!targetVal) return null

  const metTarget = (res) => isROI ? res.roi >= targetVal : res.profit >= targetVal

  let lo = 0, hi = Math.max(arv - pp, 0)
  if (hi <= 0) return null

  const calcAt = (rb) => calcFlipHelper(getBaseParams({ rehabBudget: rb }))

  if (!metTarget(calcAt(lo))) return null

  for (let i = 0; i < 100; i++) {
    if (hi - lo < 500) break
    const mid = (lo + hi) / 2
    if (metTarget(calcAt(mid))) {
      lo = mid
    } else {
      hi = mid
    }
  }

  if (!metTarget(calcAt(lo))) return null
  return Math.floor(lo)
})

const findMaxRehabError = computed(() => {
  if (calcMode.value !== 'find-rehab') return null
  if (!(Number(form.purchasePrice) > 0)) return 'Enter purchase price to solve'
  if (!(Number(form.arv) > 0)) return 'Enter ARV to solve'
  const isROI = form.targetType === 'roi'
  const targetVal = isROI ? Number(form.targetROI) : Number(form.targetTotalProfit)
  if (!targetVal) return 'Enter a target return'
  if (findMaxRehabResult.value === null) return 'Purchase price too high for target — consider lower offer.'
  return null
})

// ─── COMPUTED — SCENARIO RESULT (for ScenarioPanel) ──────────────────────────
const currentScenarioResult = computed(() => {
  if (!hasResult.value) return undefined
  return {
    primaryMetric: 'Total Profit',
    primaryValue: totalProfit.value >= 0 ? formatCurrency(totalProfit.value) : '-' + formatCurrency(Math.abs(totalProfit.value)),
    badgeLabel: tier.value.label,
    badgeColor: tier.value.bg1,
    roi: roi.value,
    totalProfit: totalProfit.value,
    totalCashInvested: totalCashInvested.value,
    holdPeriodMonths: form.holdPeriodMonths,
    annualizedROI: annualizedROI.value,
    profitPerMonth: profitPerMonth.value,
  }
})

// ─── FAQ DATA ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is a good ROI for a flip in 2026?',
    a: 'In 2026, with hard money rates at 11–13%, a good flip ROI for a 6-month hold is 20–29% (Solid tier — market average), 30–49% (Strong — above average), or 50%+ (Exceptional — top quartile). Below 20% ROI is increasingly considered Weak because execution risk often consumes the margin. Aim for 25%+ ROI minimum to justify the capital lockup and active management time. Below 15% ROI in 2026 is often not worth the risk.'
  },
  {
    q: 'What is the 70% Rule in house flipping?',
    a: 'The 70% Rule is the industry heuristic for maximum safe offer price on a flip. Formula: Max Offer = ARV × 0.70 − Rehab Budget. The rule reserves 30% of ARV for profit, financing costs, and execution risk. Deals within the rule (offer at or below max) have healthy profit buffer; deals outside require strong justification — a hot appreciation market, very light rehab scope (under 15% of ARV), or an unusually short hold period. This calculator shows the 70% Rule max and your actual offer side-by-side with a real-time compliance indicator.'
  },
  {
    q: 'How do I calculate flip profit and ROI?',
    a: 'Total Profit = Net Sale Proceeds − Total Cash Invested. ROI = (Total Profit ÷ Total Cash Invested) × 100. Example: $150K invested (all cash out of pocket), $200K net sale proceeds after costs → Total Profit $50K → ROI 33%. The key is including ALL real cash outflows in Total Cash Invested: down payment, closing, rehab (if not financed), holding costs, loan points, and loan interest.'
  },
  {
    q: 'Should I use hard money or cash for a flip?',
    a: 'Hard money lets you deploy smaller capital per deal (typically 20% down) but adds 8–12% in points and interest costs over the project. Cash has no financing cost but ties up 100% of capital — reducing how many deals you can run simultaneously. Hard money is standard for flippers running multiple projects; cash is better for flippers with limited deal volume or lower risk tolerance. Run the calculator in both modes to compare — the ROI difference is often smaller than expected on short flips.'
  },
  {
    q: 'How long should a typical flip take?',
    a: 'Typical 2026 flips run 5–8 months total: 2–4 months rehab plus 2–4 months on market to close. Cosmetic flips can complete in 3–4 months; moderate rehabs run 5–7 months; gut renovations typically run 7–10 months. Every extra month adds holding costs and loan interest — a flip that runs 3 months over budget can lose 8–15% of projected ROI. Always stress-test with Hold Period plus 2 months in the Conservative scenario before committing.'
  },
  {
    q: 'Is flip profit taxed as capital gains or ordinary income?',
    a: 'Flip profits are typically taxed as ORDINARY INCOME at 25–37% marginal federal rates in 2026, not as capital gains. The IRS views active flippers as dealers of real estate — especially if flipping is a regular activity. Only properties held 1+ year as a genuine long-term investment may qualify for capital gains treatment. Before-tax ROI shown in this calculator is meaningfully higher than your actual after-tax return. Consult a CPA for your specific tax situation, especially if you flip more than 1–2 properties per year.'
  },
  {
    q: 'What is ARV and why does it matter so much?',
    a: 'ARV (After Repair Value) is the projected market value of the property AFTER your renovation is complete. It is the single most important input in flip analysis — a $10K ARV miss on a thin-margin deal can eliminate the entire projected profit. Verify ARV with 3+ active MLS comps from the last 90 days in the same neighborhood, a BPO (Broker Price Opinion), or a pre-rehab appraisal. Never use the seller\'s or wholesaler\'s ARV estimate without independent verification. Conservative ARV estimates produce more reliable flip outcomes — especially in 2026 soft markets.'
  },
  {
    q: 'Can I use this calculator for BRRRR or wholesale deals?',
    a: 'Partially. For BRRRR, you can use the Analyze mode for the purchase + rehab + sell phase, but a dedicated BRRRR Calculator handles the refinance event, seasoning period, and long-term rental phase separately. For pure wholesale (contract assignment without renovation), this calculator\'s math does not apply — flip profit assumes you complete the renovation. For hybrid deals where you\'re deciding between flip vs rent, run both this calculator and Rental Property Calculator side-by-side to compare strategies.'
  }
]

// ─── RELATED CALCULATORS ─────────────────────────────────────────────────────
const relatedCalcs = [
  { label: 'Rental Property Calculator', href: '/rental-property-calculator' },
  { label: 'ARV Calculator',             href: '/arv-calculator' },
  { label: 'Cap Rate Calculator',        href: '/cap-rate-calculator' },
  { label: 'DSCR Calculator',            href: '/dscr-calculator' },
]

// ─── URL PERSISTENCE ─────────────────────────────────────────────────────────
function buildShareParams() {
  const p = new URLSearchParams()
  if (calcMode.value !== 'analyze')  p.set('md', calcMode.value)
  if (form.purchasePrice)            p.set('pp', form.purchasePrice)
  if (form.arv)                      p.set('av', form.arv)
  if (form.arvConfidence !== 'realistic') p.set('ac', form.arvConfidence)
  if (form.rehabBudget)              p.set('rb', form.rehabBudget)
  if (form.rehabContingencyPct !== 10)    p.set('rc', form.rehabContingencyPct)
  if (form.rehabDurationMonths !== 3)     p.set('rd', form.rehabDurationMonths)
  if (form.holdPeriodMonths !== 6)        p.set('hp', form.holdPeriodMonths)
  if (form.holdingMode !== 'simple')      p.set('hmode', form.holdingMode)
  if (form.totalMonthlyHoldingSimple)     p.set('hs', form.totalMonthlyHoldingSimple)
  if (form.holdingCosts.propertyTax)      p.set('hpt', form.holdingCosts.propertyTax)
  if (form.holdingCosts.insurance)        p.set('hpi', form.holdingCosts.insurance)
  if (form.holdingCosts.utilities)        p.set('hpu', form.holdingCosts.utilities)
  if (form.holdingCosts.hoa)              p.set('hph', form.holdingCosts.hoa)
  if (form.holdingCosts.other)            p.set('hpo', form.holdingCosts.other)
  if (form.financingType !== 'hm')        p.set('ft', form.financingType)
  if (form.financingType === 'hm') {
    if (form.hmLoanToCostPct !== 80)  p.set('hltc', form.hmLoanToCostPct)
    if (form.hmInterestRate !== 12)   p.set('hir', form.hmInterestRate)
    if (form.hmPointsPct !== 3)       p.set('hpp', form.hmPointsPct)
    if (!form.hmLoanCoversRehab)      p.set('hcr', '0')
  }
  if (form.financingType === 'conv') {
    if (form.convDownPaymentPct !== 25) p.set('cdp', form.convDownPaymentPct)
    if (form.convInterestRate !== 7.5)  p.set('cir', form.convInterestRate)
    if (form.convLoanTermYears !== 30)  p.set('clt', form.convLoanTermYears)
  }
  if (form.closingCostsMode !== 'percent') p.set('cm', form.closingCostsMode)
  if (form.purchaseClosingCostsPct !== 3)  p.set('cp', form.purchaseClosingCostsPct)
  if (form.purchaseClosingCostsDollars)    p.set('cd', form.purchaseClosingCostsDollars)
  if (form.saleCostsPct !== 8)             p.set('sc', form.saleCostsPct)
  if (form.targetType !== 'roi')           p.set('tt', form.targetType)
  if (form.targetROI !== 25)               p.set('tr', form.targetROI)
  if (form.targetTotalProfit)              p.set('tp', form.targetTotalProfit)
  return p.toString()
}

if (process.client) {
  onMounted(() => {
    const p = new URLSearchParams(window.location.search)
    if (p.has('md'))   calcMode.value               = p.get('md')
    if (p.has('pp'))   form.purchasePrice            = Number(p.get('pp'))
    if (p.has('av'))   form.arv                      = Number(p.get('av'))
    if (p.has('ac'))   form.arvConfidence            = p.get('ac')
    if (p.has('rb'))   form.rehabBudget              = Number(p.get('rb'))
    if (p.has('rc'))   form.rehabContingencyPct      = Number(p.get('rc'))
    if (p.has('rd'))   form.rehabDurationMonths      = Number(p.get('rd'))
    if (p.has('hp'))   form.holdPeriodMonths         = Number(p.get('hp'))
    if (p.has('hmode')) form.holdingMode             = p.get('hmode')
    if (p.has('hs'))   form.totalMonthlyHoldingSimple = Number(p.get('hs'))
    if (p.has('hpt'))  form.holdingCosts.propertyTax = Number(p.get('hpt'))
    if (p.has('hpi'))  form.holdingCosts.insurance   = Number(p.get('hpi'))
    if (p.has('hpu'))  form.holdingCosts.utilities   = Number(p.get('hpu'))
    if (p.has('hph'))  form.holdingCosts.hoa         = Number(p.get('hph'))
    if (p.has('hpo'))  form.holdingCosts.other       = Number(p.get('hpo'))
    if (p.has('ft'))   form.financingType            = p.get('ft')
    if (p.has('hltc')) form.hmLoanToCostPct          = Number(p.get('hltc'))
    if (p.has('hir'))  form.hmInterestRate           = Number(p.get('hir'))
    if (p.has('hpp'))  form.hmPointsPct              = Number(p.get('hpp'))
    if (p.has('hcr'))  form.hmLoanCoversRehab        = p.get('hcr') !== '0'
    if (p.has('cdp'))  form.convDownPaymentPct       = Number(p.get('cdp'))
    if (p.has('cir'))  form.convInterestRate         = Number(p.get('cir'))
    if (p.has('clt'))  form.convLoanTermYears        = Number(p.get('clt'))
    if (p.has('cm'))   form.closingCostsMode         = p.get('cm')
    if (p.has('cp'))   form.purchaseClosingCostsPct  = Number(p.get('cp'))
    if (p.has('cd'))   form.purchaseClosingCostsDollars = Number(p.get('cd'))
    if (p.has('sc'))   form.saleCostsPct             = Number(p.get('sc'))
    if (p.has('tt'))   form.targetType               = p.get('tt')
    if (p.has('tr'))   form.targetROI                = Number(p.get('tr'))
    if (p.has('tp'))   form.targetTotalProfit        = Number(p.get('tp'))
  })
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function resetForm() {
  form.purchasePrice = null
  form.arv = null
  form.arvConfidence = 'realistic'
  form.propertyType = 'sfr'
  form.closingCostsMode = 'percent'
  form.purchaseClosingCostsPct = 3
  form.purchaseClosingCostsDollars = null
  form.rehabBudget = null
  form.rehabContingencyPct = 10
  form.rehabDurationMonths = 3
  form.holdPeriodMonths = 6
  form.holdingMode = 'simple'
  form.totalMonthlyHoldingSimple = null
  Object.keys(form.holdingCosts).forEach(k => { form.holdingCosts[k] = null })
  form.financingType = 'hm'
  form.hmLoanToCostPct = 80
  form.hmInterestRate = 12
  form.hmPointsPct = 3
  form.hmLoanCoversRehab = true
  form.convDownPaymentPct = 25
  form.convInterestRate = 7.5
  form.convLoanTermYears = 30
  form.saleCostsPct = 8
  form.targetType = 'roi'
  form.targetROI = 25
  form.targetTotalProfit = null
  calcMode.value = 'analyze'
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
  doc.text('Fix and Flip Analysis Report', 20, 30)
  doc.setFontSize(9)
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 130, 20)
  doc.text(`${form.holdPeriodMonths}-month hold · ${form.financingType === 'hm' ? 'Hard Money' : form.financingType === 'conv' ? 'Conventional' : 'All Cash'}`, 130, 28)

  // Hero block — mode-aware
  let heroValue, heroLabel, heroSub
  if (calcMode.value === 'find-price') {
    heroValue = findMaxPriceResult.value !== null ? formatCurrency(findMaxPriceResult.value) : '—'
    heroLabel = 'MAX PURCHASE PRICE'
    heroSub = `Given ${form.targetType === 'roi' ? form.targetROI + '% ROI' : formatCurrency(Number(form.targetTotalProfit))} target`
  } else if (calcMode.value === 'find-rehab') {
    heroValue = findMaxRehabResult.value !== null ? formatCurrency(findMaxRehabResult.value) : '—'
    heroLabel = 'MAX REHAB BUDGET'
    heroSub = `Given ${form.targetType === 'roi' ? form.targetROI + '% ROI' : formatCurrency(Number(form.targetTotalProfit))} target`
  } else {
    heroValue = totalProfit.value >= 0 ? formatCurrency(totalProfit.value) : '-' + formatCurrency(Math.abs(totalProfit.value))
    heroLabel = 'TOTAL PROFIT (before-tax)'
    heroSub = `ROI: ${roi.value.toFixed(1)}% over ${form.holdPeriodMonths} months · ${tier.value.label}`
  }

  doc.setFillColor(...gold)
  doc.rect(15, 50, 180, 30, 'F')
  doc.setTextColor(30, 58, 95)
  doc.setFontSize(24)
  doc.setFont('helvetica', 'bold')
  doc.text(heroValue, 105, 69, { align: 'center' })
  doc.setFontSize(9)
  doc.text(heroLabel, 105, 76, { align: 'center' })
  if (heroSub) {
    doc.setFontSize(8)
    doc.setFont('helvetica', 'normal')
    doc.text(heroSub, 105, 82, { align: 'center' })
  }

  // Financial Breakdown
  if (calcMode.value === 'analyze' && hasResult.value) {
    doc.setTextColor(...navy)
    doc.setFontSize(13)
    doc.setFont('helvetica', 'bold')
    doc.text('Financial Breakdown', 20, 100)

    const rows = [
      ['Purchase Price',       formatCurrency(Number(form.purchasePrice) || 0)],
      ['Purchase Closing',     `-${formatCurrency(purchaseClosingCostsCalc.value)}`],
      ['Rehab Budget',         `-${formatCurrency(Number(form.rehabBudget) || 0)}`],
      ['Rehab Contingency',    `-${formatCurrency(rehabContingencyCalc.value)}`],
      ['Total Holding Costs',  `-${formatCurrency(totalHoldingCosts.value)}`],
      form.financingType === 'hm' ? ['Loan Points',   `-${formatCurrency(loanPoints.value)}`] : null,
      form.financingType !== 'cash' ? ['Total Loan Interest', `-${formatCurrency(totalLoanInterest.value)}`] : null,
      ['Sale Costs',           `-${formatCurrency(saleCostsDollar.value)}`],
      ['──────────', '──────────'],
      ['Total Cash Invested',  formatCurrency(totalCashInvested.value)],
      ['Net Sale Proceeds',    formatCurrency(netSaleProceeds.value)],
      ['Total Profit',         heroValue],
      ['ROI',                  `${roi.value.toFixed(1)}%`],
      ['Annualized ROI',       `${annualizedROI.value.toFixed(1)}%`],
    ].filter(Boolean)

    let y = 107
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
    })

    // Deal Context
    y += 6
    const splitInsight = doc.splitTextToSize(insightText.value, 165)
    const insightH = Math.max(28, splitInsight.length * 5 + 16)
    doc.setFillColor(240, 244, 248)
    doc.rect(15, y - 5, 180, insightH, 'F')
    doc.setTextColor(...navy)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text('Deal Context', 20, y + 3)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(...gray)
    doc.text(splitInsight, 20, y + 12)
    y += insightH + 6

    // Warnings
    if (warnings.value.length > 0 && y < 265) {
      const warnLines = warnings.value.flatMap(w => doc.splitTextToSize(`• ${w.msg}`, 160))
      const warnH = warnLines.length * 5 + 20
      if (y + warnH < 275) {
        doc.setFillColor(255, 251, 235)
        doc.rect(15, y - 4, 180, warnH, 'F')
        doc.setTextColor(...navy)
        doc.setFontSize(9)
        doc.setFont('helvetica', 'bold')
        doc.text('Flags & Warnings', 22, y + 4)
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(7.5)
        doc.setTextColor(146, 64, 14)
        doc.text(warnLines, 22, y + 12)
      }
    }
  }

  // Footer
  doc.setFillColor(...navy)
  doc.rect(0, 280, 210, 17, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text('RealCalc — Before-tax analysis only. Not financial advice. Consult a CPA for tax impact on flip profits.', 105, 290, { align: 'center' })

  doc.save(`fix-and-flip-analysis-${Date.now()}.pdf`)
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

<style>
.calc-mode-tabs {
  @apply grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-gray-100;
}
.calc-mode-tab {
  @apply w-full text-center px-2 py-2.5 rounded-xl transition;
}
.calc-mode-tab-active {
  @apply bg-white shadow-sm;
}
.calc-mode-tab-inactive {
  @apply hover:bg-white/60;
}
.calc-section-header {
  @apply flex items-center px-4 py-3 border-b border-gray-50;
}
.calc-section-title {
  @apply text-sm font-bold text-gray-700;
}
.calc-inputs {
  @apply divide-y divide-gray-100;
}
</style>
