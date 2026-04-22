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
            Fix and Flip Calculator — Profit &amp; ROI Tool for US Real Estate Flippers
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
            <li><a href="#what-is-fix-and-flip" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What is Fix and Flip</a></li>
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
              <li><a href="#what-is-fix-and-flip" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What is Fix and Flip</a></li>
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
         MOBILE LIVE RESULT BAR
    ═══════════════════════════════════════════════ -->
    <div class="lg:hidden sticky top-[4.5rem] z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <div class="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <svg class="w-4 h-4 flex-shrink-0" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
          </svg>
          <span v-if="calcMode === 'analyze'">Flip Profit &amp; ROI</span>
          <span v-else-if="calcMode === 'find-price'">Max Purchase Price</span>
          <span v-else>Max Rehab Budget</span>
        </div>
        <div class="flex items-center gap-3">
          <!-- analyze mode -->
          <template v-if="calcMode === 'analyze'">
            <div v-if="hasResult" class="text-right">
              <div class="text-lg font-extrabold leading-none" :style="`color: ${badge.bg1}`">{{ formatCurrency(result.totalProfit) }}</div>
              <div class="text-xs font-semibold mt-0.5" :style="`color: ${badge.bg1}`">{{ result.roi.toFixed(1) }}% ROI</div>
            </div>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="hasResult" class="text-xs font-bold px-2.5 py-1 rounded-full text-white" :style="`background: ${badge.bg1}`">{{ badge.label }}</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <!-- find-price mode -->
          <template v-else-if="calcMode === 'find-price'">
            <span v-if="findPriceResult !== null" class="text-xl font-extrabold leading-none text-blue-700">{{ formatCurrency(findPriceResult) }}</span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="findPriceResult !== null" class="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">Max Price</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <!-- find-rehab mode -->
          <template v-else>
            <span v-if="findRehabResult !== null" class="text-xl font-extrabold leading-none text-emerald-700">{{ formatCurrency(findRehabResult) }}</span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="findRehabResult !== null" class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">Max Rehab</span>
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
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'analyze' ? 'color:#1e3a5f;' : ''">Analyze Fix &amp; Flip</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'analyze' ? 'text-amber-700' : 'text-gray-400'">Profit &amp; ROI from inputs</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold" :class="calcMode === 'analyze' ? 'bg-amber-100 text-amber-800' : 'bg-gray-200 text-gray-400'">Standard</span>
            </button>
            <button @click="calcMode = 'find-price'" class="calc-mode-tab" :class="calcMode === 'find-price' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-price' ? 'color:#1e3a5f;' : ''">Find Max Purchase Price</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-price' ? 'text-blue-700' : 'text-gray-400'">Given target ROI or Profit</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold" :class="calcMode === 'find-price' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
            <button @click="calcMode = 'find-rehab'" class="calc-mode-tab" :class="calcMode === 'find-rehab' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-rehab' ? 'color:#1e3a5f;' : ''">Find Max Rehab Budget</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-rehab' ? 'text-emerald-700' : 'text-gray-400'">Given target ROI or Profit</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold" :class="calcMode === 'find-rehab' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
          </div>
          <div class="mt-2.5">
            <p v-if="calcMode === 'analyze'" class="text-xs text-gray-500 leading-relaxed">
              Enter purchase price, ARV, rehab budget, and financing to project total profit and ROI. Best for deal evaluation and go/no-go decisions.
            </p>
            <p v-else-if="calcMode === 'find-price'" class="text-xs text-blue-700 leading-relaxed bg-blue-50 px-3 py-1.5 rounded-lg">
              Enter ARV, rehab budget, and a <strong>target ROI or profit</strong> — the calculator will solve for the maximum purchase price you can pay.
            </p>
            <p v-else class="text-xs text-emerald-700 leading-relaxed bg-emerald-50 px-3 py-1.5 rounded-lg">
              Enter purchase price, ARV, and a <strong>target ROI or profit</strong> — the calculator will solve for the maximum rehab budget you can spend.
            </p>
          </div>
        </div>
      </div>

      <!-- Two-column body -->
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch">

        <!-- ── INPUTS (left column) ── -->
        <div class="calc-inputs border-b lg:border-b-0 lg:border-r border-gray-200 bg-white min-w-0">

          <!-- PROPERTY SECTION -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Property</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <!-- Purchase Price (hidden in find-price mode) -->
              <div v-if="calcMode !== 'find-price'">
                <label for="purchasePrice" class="block text-xs font-semibold text-gray-700 mb-1">Purchase Price</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="purchasePrice" v-model="form.purchasePrice" type="number" min="0" step="1000"
                    placeholder="Enter purchase price"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <!-- Property Type -->
              <div>
                <label for="propertyType" class="block text-xs font-semibold text-gray-700 mb-1">Property Type</label>
                <select id="propertyType" v-model="form.propertyType"
                  class="w-full px-3 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition">
                  <option value="SFR">Single-Family (SFR)</option>
                  <option value="Condo">Condo</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="SmallMulti">Small Multi-Family</option>
                </select>
              </div>
              <!-- ARV -->
              <div>
                <label for="arv" class="block text-xs font-semibold text-gray-700 mb-1">
                  ARV — After Repair Value
                  <span class="ml-1 text-amber-600 font-bold">★ Critical input</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="arv" v-model="form.arv" type="number" min="0" step="1000"
                    placeholder="Enter after-repair value"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Market value after all renovations are complete. Verify with comps, BPO, or appraisal.</p>
              </div>
              <!-- ARV Confidence -->
              <div>
                <label for="arvConfidence" class="block text-xs font-semibold text-gray-700 mb-1">ARV Confidence Level</label>
                <select id="arvConfidence" v-model="form.arvConfidence"
                  class="w-full px-3 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition">
                  <option value="Conservative">Conservative (verified comps)</option>
                  <option value="Realistic">Realistic (estimated from market)</option>
                  <option value="Optimistic">Optimistic (hot market assumption)</option>
                </select>
              </div>
            </div>
          </div>

          <!-- PURCHASE CLOSING COSTS -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Purchase Closing Costs</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div class="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-xl w-fit shadow-sm">
                <button @click="form.purchaseClosingCostsMode = 'pct'"
                  :class="form.purchaseClosingCostsMode === 'pct' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                  class="px-4 py-2 rounded-lg text-sm transition font-medium">
                  Percentage
                </button>
                <button @click="form.purchaseClosingCostsMode = 'dollar'"
                  :class="form.purchaseClosingCostsMode === 'dollar' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                  class="px-4 py-2 rounded-lg text-sm transition font-medium">
                  Dollar Amount
                </button>
              </div>
              <div v-if="form.purchaseClosingCostsMode === 'pct'">
                <label for="closingPct" class="block text-xs font-semibold text-gray-700 mb-1">Closing Costs % of Purchase Price</label>
                <div class="relative">
                  <input id="closingPct" v-model="form.purchaseClosingCostsPct" type="number" min="0" max="10" step="0.1"
                    placeholder="Enter closing cost percentage"
                    class="w-full px-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">Typical range: 2-4%. Includes title, escrow, lender fees.</p>
              </div>
              <div v-else>
                <label for="closingDollars" class="block text-xs font-semibold text-gray-700 mb-1">Closing Costs (Dollar Amount)</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="closingDollars" v-model="form.purchaseClosingCostsDollars" type="number" min="0" step="100"
                    placeholder="Enter closing cost amount"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
            </div>
          </div>

          <!-- REHAB SECTION -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Rehab Budget</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <!-- Rehab Budget (hidden in find-rehab mode) -->
              <div v-if="calcMode !== 'find-rehab'">
                <label for="rehabBudget" class="block text-xs font-semibold text-gray-700 mb-1">Total Rehab Budget</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="rehabBudget" v-model="form.rehabBudget" type="number" min="0" step="1000"
                    placeholder="Enter total rehab budget"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Cosmetic: $15–30K · Moderate: $30–60K · Gut: $60–150K</p>
              </div>
              <div>
                <label for="rehabContingencyPct" class="block text-xs font-semibold text-gray-700 mb-1">Rehab Contingency %</label>
                <div class="relative">
                  <input id="rehabContingencyPct" v-model="form.rehabContingencyPct" type="number" min="0" max="30" step="1"
                    placeholder="Enter contingency percentage"
                    class="w-full px-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">Industry standard: 10–15%. Buffer for overruns and surprises.</p>
              </div>
              <div>
                <label for="rehabDurationMonths" class="block text-xs font-semibold text-gray-700 mb-1">Rehab Duration (Months)</label>
                <select id="rehabDurationMonths" v-model="form.rehabDurationMonths"
                  class="w-full px-3 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition">
                  <option v-for="m in [1,2,3,4,5,6,7,8,9,10,11,12]" :key="m" :value="String(m)">{{ m }} month{{ m > 1 ? 's' : '' }}</option>
                </select>
                <p class="text-xs text-gray-400 mt-1">Moderate update: 2–4 months · Gut renovation: 4–8 months</p>
              </div>
            </div>
          </div>

          <!-- HOLD PERIOD -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Hold Period</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="holdPeriodMonths" class="block text-xs font-semibold text-gray-700 mb-1">Total Hold Period (Months)</label>
                <select id="holdPeriodMonths" v-model="form.holdPeriodMonths"
                  class="w-full px-3 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition">
                  <option v-for="m in [3,4,5,6,7,8,9,10,11,12]" :key="m" :value="String(m)">{{ m }} months</option>
                </select>
                <p class="text-xs text-gray-400 mt-1">From purchase close to sale close. Includes rehab time plus market time.</p>
              </div>
              <div v-if="Number(form.holdPeriodMonths) > 12" class="p-2.5 rounded-xl text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200">
                Long flip hold — consider a rental strategy instead.
              </div>
            </div>
          </div>

          <!-- HOLDING COSTS -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Monthly Holding Costs</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div class="p-2.5 rounded-xl text-xs font-medium text-blue-800 bg-blue-50 border border-blue-100">
                <strong>Note:</strong> Holding costs are property-related expenses only (tax, insurance, utilities, HOA). Loan interest is tracked separately under Financing to avoid double-counting.
              </div>
              <div class="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-xl w-fit shadow-sm">
                <button @click="form.holdingMode = 'simple'"
                  :class="form.holdingMode === 'simple' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                  class="px-4 py-2 rounded-lg text-sm transition font-medium">Simple</button>
                <button @click="form.holdingMode = 'detailed'"
                  :class="form.holdingMode === 'detailed' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                  class="px-4 py-2 rounded-lg text-sm transition font-medium">Detailed</button>
              </div>
              <div v-if="form.holdingMode === 'simple'">
                <label for="totalMonthlyHoldingSimple" class="block text-xs font-semibold text-gray-700 mb-1">Total Monthly Holding Cost</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="totalMonthlyHoldingSimple" v-model="form.totalMonthlyHoldingSimple" type="number" min="0" step="50"
                    placeholder="Enter total monthly holding cost"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Sum of tax + insurance + utilities + HOA + other per month</p>
              </div>
              <div v-else class="space-y-2">
                <div v-for="field in holdingDetailFields" :key="field.key">
                  <label :for="'hc_' + field.key" class="block text-xs font-semibold text-gray-700 mb-1">{{ field.label }}</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input :id="'hc_' + field.key" v-model="form.holdingCosts[field.key]" type="number" min="0" step="10"
                      :placeholder="field.placeholder"
                      class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div v-if="detailedMonthlyHolding > 0" class="p-2.5 rounded-xl text-xs font-medium text-blue-800 bg-blue-50 border border-blue-100">
                  Total monthly holding: <span class="font-bold">{{ formatCurrency(detailedMonthlyHolding) }}/mo</span>
                </div>
              </div>
            </div>
          </div>

          <!-- FINANCING -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Financing</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <!-- Financing Type Toggle -->
              <div>
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Financing Type</p>
                <div class="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-xl shadow-sm flex-wrap">
                  <button @click="form.financingType = 'hm'"
                    :class="form.financingType === 'hm' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-3 py-2 rounded-lg text-xs transition font-medium">Hard Money</button>
                  <button @click="form.financingType = 'conv'"
                    :class="form.financingType === 'conv' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-3 py-2 rounded-lg text-xs transition font-medium">Conventional</button>
                  <button @click="form.financingType = 'cash'"
                    :class="form.financingType === 'cash' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-3 py-2 rounded-lg text-xs transition font-medium">All Cash</button>
                </div>
              </div>

              <!-- Hard Money fields -->
              <template v-if="form.financingType === 'hm'">
                <div>
                  <label for="hmLoanToCostPct" class="block text-xs font-semibold text-gray-700 mb-1">Loan-to-Cost (LTC) %</label>
                  <div class="relative">
                    <input id="hmLoanToCostPct" v-model="form.hmLoanToCostPct" type="number" min="50" max="100" step="1"
                      placeholder="Enter loan-to-cost percentage"
                      class="w-full px-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Typical: 75–85% LTC. Applied to purchase (and rehab if toggle on).</p>
                </div>
                <div>
                  <label for="hmInterestRate" class="block text-xs font-semibold text-gray-700 mb-1">Annual Interest Rate %</label>
                  <div class="relative">
                    <input id="hmInterestRate" v-model="form.hmInterestRate" type="number" min="0" max="25" step="0.25"
                      placeholder="Enter hard money interest rate"
                      class="w-full px-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">2026 typical: 10–14% annual, interest-only monthly payments.</p>
                </div>
                <div>
                  <label for="hmPointsPct" class="block text-xs font-semibold text-gray-700 mb-1">Origination Points %</label>
                  <div class="relative">
                    <input id="hmPointsPct" v-model="form.hmPointsPct" type="number" min="0" max="10" step="0.25"
                      placeholder="Enter points percentage"
                      class="w-full px-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">2026 typical: 2–4 points. Paid upfront at closing.</p>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Loan Covers Rehab Draws?</label>
                  <div class="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-xl w-fit shadow-sm">
                    <button @click="form.hmLoanCoversRehab = true"
                      :class="form.hmLoanCoversRehab ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                      class="px-4 py-2 rounded-lg text-sm transition font-medium">Yes</button>
                    <button @click="form.hmLoanCoversRehab = false"
                      :class="!form.hmLoanCoversRehab ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                      class="px-4 py-2 rounded-lg text-sm transition font-medium">No</button>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Yes: Loan = (Purchase + Rehab) × LTC. No: Loan covers purchase only.</p>
                </div>
              </template>

              <!-- Conventional fields -->
              <template v-else-if="form.financingType === 'conv'">
                <div>
                  <label for="convDownPaymentPct" class="block text-xs font-semibold text-gray-700 mb-1">Down Payment %</label>
                  <div class="relative">
                    <input id="convDownPaymentPct" v-model="form.convDownPaymentPct" type="number" min="5" max="100" step="1"
                      placeholder="Enter down payment percentage"
                      class="w-full px-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Typical investment property: 20–30% down payment.</p>
                </div>
                <div>
                  <label for="convInterestRate" class="block text-xs font-semibold text-gray-700 mb-1">Annual Interest Rate %</label>
                  <div class="relative">
                    <input id="convInterestRate" v-model="form.convInterestRate" type="number" min="0" max="20" step="0.125"
                      placeholder="Enter conventional interest rate"
                      class="w-full px-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">2026 investment loan typical: 7–8% annual rate.</p>
                </div>
                <div>
                  <label for="convLoanTermYears" class="block text-xs font-semibold text-gray-700 mb-1">Loan Term (Years)</label>
                  <select id="convLoanTermYears" v-model="form.convLoanTermYears"
                    class="w-full px-3 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition">
                    <option value="15">15 years</option>
                    <option value="20">20 years</option>
                    <option value="25">25 years</option>
                    <option value="30">30 years</option>
                  </select>
                </div>
              </template>

              <!-- All Cash note -->
              <div v-else class="p-2.5 rounded-xl text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200">
                All-Cash mode: No loan amount, no points, no interest. 100% of purchase price is cash invested.
              </div>
            </div>
          </div>

          <!-- SALE COSTS -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Sale Costs</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="saleCostsPct" class="block text-xs font-semibold text-gray-700 mb-1">Sale Costs % of ARV</label>
                <div class="relative">
                  <input id="saleCostsPct" v-model="form.saleCostsPct" type="number" min="0" max="20" step="0.5"
                    placeholder="Enter sale costs percentage"
                    class="w-full px-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">Broker commission 5–6% + closing 1–3% = typical 6–10% total.</p>
              </div>
            </div>
          </div>

          <!-- REVERSE MODE TARGET (find-price / find-rehab) -->
          <div v-if="calcMode !== 'analyze'" class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title" :class="calcMode === 'find-price' ? 'text-blue-700' : 'text-emerald-700'">
                {{ calcMode === 'find-price' ? 'Target — Max Purchase Price' : 'Target — Max Rehab Budget' }}
              </h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Solve for</p>
                <div class="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-xl w-fit shadow-sm">
                  <button @click="form.reverseTargetMode = 'roi'"
                    :class="form.reverseTargetMode === 'roi' ? 'bg-blue-50 shadow text-gray-900 font-bold border border-blue-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">Target ROI %</button>
                  <button @click="form.reverseTargetMode = 'profit'"
                    :class="form.reverseTargetMode === 'profit' ? 'bg-blue-50 shadow text-gray-900 font-bold border border-blue-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">Target Profit $</button>
                </div>
              </div>
              <div v-if="form.reverseTargetMode === 'roi'">
                <label for="targetROI" class="block text-xs font-semibold text-gray-700 mb-1">Target ROI %</label>
                <div class="relative">
                  <input id="targetROI" v-model="form.targetROI" type="number" min="0" max="500" step="1"
                    placeholder="Enter target ROI percentage"
                    class="w-full px-4 pr-8 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">Recommended: 20–25% minimum for 2026 market conditions.</p>
              </div>
              <div v-else>
                <label for="targetTotalProfit" class="block text-xs font-semibold text-gray-700 mb-1">Target Total Profit</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="targetTotalProfit" v-model="form.targetTotalProfit" type="number" min="0" step="1000"
                    placeholder="Enter target profit amount"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <p v-if="calcMode === 'find-price'" class="text-xs text-blue-700 bg-blue-50 px-3 py-2 rounded-lg">
                ARV, rehab budget, hold period, and financing terms stay fixed. Only purchase price varies.
              </p>
              <p v-else class="text-xs text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg">
                Purchase price, ARV, hold period, and financing terms stay fixed. Only rehab budget varies.
              </p>
            </div>
          </div>

        </div><!-- end left column -->

        <!-- ── RESULTS (right column) ── -->
        <div class="lg:flex lg:flex-col lg:items-stretch bg-gray-50">
          <div class="lg:sticky lg:top-[57px] lg:max-h-[calc(100vh-57px)] lg:overflow-y-auto">

            <!-- === ANALYZE MODE RESULT === -->
            <template v-if="calcMode === 'analyze'">
              <!-- Primary result block -->
              <div v-if="hasResult" class="p-6 text-center" :style="`background: linear-gradient(135deg, ${badge.bg1} 0%, ${badge.bg2} 100%)`">
                <p class="text-white/80 text-xs font-semibold uppercase tracking-widest mb-1">Total Profit (Before Tax)</p>
                <div class="text-4xl font-extrabold text-white leading-none mb-2">{{ formatCurrency(result.totalProfit) }}</div>
                <div class="flex items-center justify-center gap-3 mb-3">
                  <span class="text-white/90 font-bold text-lg">ROI: {{ result.roi.toFixed(1) }}%</span>
                  <span class="text-white/70 text-sm">over {{ form.holdPeriodMonths }} months</span>
                </div>
                <div class="text-white/80 text-xs mb-3">Annualized ROI: {{ result.annualizedRoi.toFixed(1) }}%</div>
                <span class="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-white/20 text-white border border-white/30">{{ badge.label }}</span>
              </div>
              <div v-else class="p-6 text-center bg-gray-100">
                <div class="text-3xl font-extrabold text-gray-300 mb-2">—</div>
                <p class="text-sm text-gray-400">Enter purchase price, ARV, and rehab to see profit</p>
              </div>

              <!-- Warnings -->
              <div v-if="warnings.length" class="px-4 py-3 space-y-2">
                <div v-for="w in warnings" :key="w.msg"
                  class="flex items-start gap-2 p-2.5 rounded-xl text-xs font-medium"
                  :class="w.type === 'error' ? 'bg-red-50 border border-red-200 text-red-800' : 'bg-amber-50 border border-amber-200 text-amber-800'">
                  <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                  </svg>
                  <span>{{ w.msg }}</span>
                </div>
              </div>

              <!-- Cost Breakdown -->
              <div v-if="hasResult" class="px-4 py-3 border-t border-gray-100">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Cost Breakdown</p>
                <div class="space-y-1.5">
                  <div class="flex justify-between text-xs">
                    <span class="text-gray-600">Purchase Price</span>
                    <span class="font-semibold text-gray-900">{{ formatCurrency(Number(form.purchasePrice)) }}</span>
                  </div>
                  <div class="flex justify-between text-xs">
                    <span class="text-gray-600">Purchase Closing Costs</span>
                    <span class="font-semibold text-gray-900">{{ formatCurrency(result.closingAmt) }}</span>
                  </div>
                  <div class="flex justify-between text-xs">
                    <span class="text-gray-600">Rehab Budget</span>
                    <span class="font-semibold text-gray-900">{{ formatCurrency(Number(form.rehabBudget)) }}</span>
                  </div>
                  <div class="flex justify-between text-xs">
                    <span class="text-gray-600">Rehab Contingency ({{ form.rehabContingencyPct }}%)</span>
                    <span class="font-semibold text-gray-900">{{ formatCurrency(result.contingency) }}</span>
                  </div>
                  <div class="flex justify-between text-xs">
                    <span class="text-gray-600">Total Holding Costs ({{ form.holdPeriodMonths }} mo)</span>
                    <span class="font-semibold text-gray-900">{{ formatCurrency(result.totalHoldingCosts) }}</span>
                  </div>
                  <template v-if="form.financingType !== 'cash'">
                    <div class="flex justify-between text-xs">
                      <span class="text-gray-600">Loan Points (upfront)</span>
                      <span class="font-semibold text-gray-900">{{ formatCurrency(result.loanPoints) }}</span>
                    </div>
                    <div class="flex justify-between text-xs">
                      <span class="text-gray-600">Total Loan Interest</span>
                      <span class="font-semibold text-gray-900">{{ formatCurrency(result.totalLoanInterest) }}</span>
                    </div>
                  </template>
                  <div class="flex justify-between text-xs">
                    <span class="text-gray-600">Sale Costs ({{ form.saleCostsPct }}% of ARV)</span>
                    <span class="font-semibold text-gray-900">{{ formatCurrency(result.saleCostsAmt) }}</span>
                  </div>
                  <div class="flex justify-between text-xs border-t border-gray-200 pt-1.5 mt-1">
                    <span class="font-bold text-gray-700">Total Project Costs</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(result.totalProjectCosts) }}</span>
                  </div>
                </div>
              </div>

              <!-- Total Cash Invested + Net Sale Proceeds -->
              <div v-if="hasResult" class="px-4 py-3 border-t border-gray-100">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Cash Flow Summary</p>
                <div class="space-y-1.5">
                  <template v-if="form.financingType !== 'cash'">
                    <div class="flex justify-between text-xs">
                      <span class="text-gray-600">Loan Amount</span>
                      <span class="font-semibold text-blue-700">{{ formatCurrency(result.loanAmount) }}</span>
                    </div>
                    <div class="flex justify-between text-xs">
                      <span class="text-gray-600">Down Payment (cash)</span>
                      <span class="font-semibold text-gray-900">{{ formatCurrency(result.downPayment) }}</span>
                    </div>
                  </template>
                  <div class="flex justify-between text-xs font-bold border-t border-gray-200 pt-1.5">
                    <span class="text-gray-700">Total Cash Invested</span>
                    <span class="text-gray-900">{{ formatCurrency(result.totalCashInvested) }}</span>
                  </div>
                  <div class="flex justify-between text-xs mt-1">
                    <span class="text-gray-600">ARV</span>
                    <span class="font-semibold text-gray-900">{{ formatCurrency(Number(form.arv)) }}</span>
                  </div>
                  <div class="flex justify-between text-xs">
                    <span class="text-gray-600">minus Sale Costs</span>
                    <span class="font-semibold text-red-600">-{{ formatCurrency(result.saleCostsAmt) }}</span>
                  </div>
                  <template v-if="form.financingType !== 'cash'">
                    <div class="flex justify-between text-xs">
                      <span class="text-gray-600">minus Remaining Loan</span>
                      <span class="font-semibold text-red-600">-{{ formatCurrency(result.remainingLoan) }}</span>
                    </div>
                  </template>
                  <div class="flex justify-between text-xs font-bold border-t border-gray-200 pt-1.5">
                    <span class="text-gray-700">Net Sale Proceeds</span>
                    <span class="text-emerald-700">{{ formatCurrency(result.netSaleProceeds) }}</span>
                  </div>
                </div>
              </div>

              <!-- 4 Derived Metric Cards -->
              <div v-if="hasResult" class="px-4 py-3 border-t border-gray-100">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Key Metrics</p>
                <div class="grid grid-cols-2 gap-2">
                  <!-- 70% Rule -->
                  <div class="bg-white rounded-xl border border-gray-200 p-3">
                    <p class="text-xs text-gray-500 font-semibold mb-1">70% Rule Max Offer</p>
                    <p class="text-base font-extrabold" :class="rule70Compliant ? 'text-emerald-700' : 'text-amber-700'">{{ formatCurrency(result.rule70) }}</p>
                    <div class="flex items-center gap-1 mt-1">
                      <span v-if="rule70Compliant" class="text-xs font-bold text-emerald-600">✓ Within rule</span>
                      <span v-else-if="result.rule70 > 0 && Math.abs(Number(form.purchasePrice) - result.rule70) < 1000" class="text-xs font-bold text-amber-600">At rule limit</span>
                      <span v-else class="text-xs font-bold text-amber-600">⚠ Outside rule</span>
                    </div>
                  </div>
                  <!-- Break-Even -->
                  <div class="bg-white rounded-xl border border-gray-200 p-3">
                    <p class="text-xs text-gray-500 font-semibold mb-1">Break-Even Price</p>
                    <p class="text-base font-extrabold text-gray-800">{{ result.breakEven ? formatCurrency(result.breakEven) : '—' }}</p>
                    <p v-if="result.breakEven" class="text-xs text-gray-400 mt-1">
                      {{ formatCurrency(Number(form.arv) - result.breakEven) }} cushion
                    </p>
                  </div>
                  <!-- Annualized ROI -->
                  <div class="bg-white rounded-xl border border-gray-200 p-3">
                    <p class="text-xs text-gray-500 font-semibold mb-1">Annualized ROI</p>
                    <p class="text-base font-extrabold text-gray-800">{{ result.annualizedRoi.toFixed(1) }}%</p>
                    <p class="text-xs text-gray-400 mt-1">12-month equivalent</p>
                  </div>
                  <!-- Profit per Month -->
                  <div class="bg-white rounded-xl border border-gray-200 p-3">
                    <p class="text-xs text-gray-500 font-semibold mb-1">Profit per Month</p>
                    <p class="text-base font-extrabold" :class="result.profitPerMonth >= 5000 ? 'text-emerald-700' : result.profitPerMonth >= 3000 ? 'text-amber-700' : 'text-red-700'">{{ formatCurrency(result.profitPerMonth) }}</p>
                    <p class="text-xs text-gray-400 mt-1">Effective monthly return</p>
                  </div>
                </div>
              </div>

              <!-- Visualization: cost waterfall bars -->
              <div v-if="hasResult" class="px-4 py-3 border-t border-gray-100">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Cost Composition</p>
                <div class="space-y-1.5">
                  <div v-for="bar in costBars" :key="bar.label" class="flex items-center gap-2">
                    <div class="text-xs text-gray-500 w-28 flex-shrink-0 truncate">{{ bar.label }}</div>
                    <div class="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div class="h-3 rounded-full transition-all" :style="`width: ${bar.pct}%; background: ${bar.color}`"></div>
                    </div>
                    <div class="text-xs font-semibold text-gray-700 w-20 text-right flex-shrink-0">{{ formatCurrency(bar.value) }}</div>
                  </div>
                </div>
              </div>

              <!-- Deal Context / Insight -->
              <div v-if="hasResult" class="px-4 py-3 border-t border-gray-100">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Deal Context</p>
                <p class="text-xs text-gray-600 leading-relaxed">{{ insightText }}</p>
              </div>

              <!-- Scenario Analysis -->
              <div v-if="hasResult" class="px-4 py-3 border-t border-gray-100">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Scenario Analysis</p>
                <div class="overflow-x-auto -mx-1">
                  <table class="w-full text-xs min-w-[280px]">
                    <thead>
                      <tr class="bg-gray-50">
                        <th class="text-left py-2 px-2 font-semibold text-gray-500">Scenario</th>
                        <th class="text-right py-2 px-2 font-semibold text-gray-500">Profit</th>
                        <th class="text-right py-2 px-2 font-semibold text-gray-500">ROI</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                      <tr v-for="sc in scenarios" :key="sc.name">
                        <td class="py-2 px-2 font-semibold" :class="sc.color">{{ sc.name }}</td>
                        <td class="py-2 px-2 text-right font-bold text-gray-900">{{ formatCurrency(sc.profit) }}</td>
                        <td class="py-2 px-2 text-right font-bold" :class="sc.profit >= 0 ? 'text-emerald-700' : 'text-red-700'">{{ sc.roi.toFixed(1) }}%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p class="text-xs text-gray-400 mt-1.5">Conservative: ARV −8%, Rehab +20%, Hold +2mo. Optimistic: ARV +5%, Hold −1mo. Rare in 2026 markets — treat as best-case.</p>
              </div>

              <!-- Sensitivity Table 1: ARV × Rehab Overrun -->
              <div v-if="hasResult" class="px-4 py-3 border-t border-gray-100">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">ARV × Rehab Overrun Sensitivity (Total Profit)</p>
                <div class="overflow-x-auto -mx-1">
                  <table class="w-full text-xs min-w-[300px]">
                    <thead>
                      <tr class="bg-gray-50">
                        <th class="text-left py-1.5 px-2 font-semibold text-gray-500">ARV</th>
                        <th class="text-right py-1.5 px-2 font-semibold text-gray-500">+0% Rehab</th>
                        <th class="text-right py-1.5 px-2 font-semibold text-gray-500">+15%</th>
                        <th class="text-right py-1.5 px-2 font-semibold text-gray-500">+30%</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                      <tr v-for="row in sensitivity1" :key="row.arvLabel">
                        <td class="py-1.5 px-2 font-semibold text-gray-700" :class="row.isBase ? 'text-amber-700' : ''">{{ row.arvLabel }}</td>
                        <td v-for="val in row.vals" :key="val" class="py-1.5 px-2 text-right" :class="val >= 0 ? 'text-gray-800' : 'text-red-600'">{{ formatCurrencyShort(val) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Sensitivity Table 2: Hold Period × HM Rate -->
              <div v-if="hasResult && form.financingType === 'hm'" class="px-4 py-3 border-t border-gray-100">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Hold Period × HM Rate Sensitivity</p>
                <div class="overflow-x-auto -mx-1">
                  <table class="w-full text-xs min-w-[300px]">
                    <thead>
                      <tr class="bg-gray-50">
                        <th class="text-left py-1.5 px-2 font-semibold text-gray-500">Hold (mo)</th>
                        <th class="text-right py-1.5 px-2 font-semibold text-gray-500">10% Rate</th>
                        <th class="text-right py-1.5 px-2 font-semibold text-gray-500">12% Rate</th>
                        <th class="text-right py-1.5 px-2 font-semibold text-gray-500">14% Rate</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                      <tr v-for="row in sensitivity2" :key="row.hold">
                        <td class="py-1.5 px-2 font-semibold text-gray-700">{{ row.hold }}mo</td>
                        <td v-for="cell in row.cells" :key="cell.rate" class="py-1.5 px-2 text-right text-xs">
                          <span :class="cell.profit >= 0 ? 'text-gray-800' : 'text-red-600'" class="font-semibold">{{ formatCurrencyShort(cell.profit) }}</span>
                          <span class="block text-gray-400">{{ cell.roi.toFixed(0) }}%</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Sensitivity Table 3: Purchase Price Variation -->
              <div v-if="hasResult" class="px-4 py-3 border-t border-gray-100">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Purchase Price Sensitivity</p>
                <div class="overflow-x-auto -mx-1">
                  <table class="w-full text-xs min-w-[300px]">
                    <thead>
                      <tr class="bg-gray-50">
                        <th class="text-left py-1.5 px-2 font-semibold text-gray-500">Purchase Price</th>
                        <th class="text-right py-1.5 px-2 font-semibold text-gray-500">Profit</th>
                        <th class="text-right py-1.5 px-2 font-semibold text-gray-500">ROI</th>
                        <th class="text-right py-1.5 px-2 font-semibold text-gray-500">70% Rule</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                      <tr v-for="row in sensitivity3" :key="row.label" :class="row.isBase ? 'bg-amber-50' : ''">
                        <td class="py-1.5 px-2 font-semibold text-gray-700">{{ row.label }}</td>
                        <td class="py-1.5 px-2 text-right" :class="row.profit >= 0 ? 'text-gray-800' : 'text-red-600'">{{ formatCurrencyShort(row.profit) }}</td>
                        <td class="py-1.5 px-2 text-right" :class="row.roi >= 0 ? 'text-gray-800' : 'text-red-600'">{{ row.roi.toFixed(1) }}%</td>
                        <td class="py-1.5 px-2 text-right text-xs" :class="row.withinRule ? 'text-emerald-600' : 'text-amber-600'">{{ row.withinRule ? '✓ In' : '✗ Out' }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Project Timeline Table -->
              <div v-if="hasResult" class="px-4 py-3 border-t border-gray-100">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Project Timeline</p>
                <div class="overflow-x-auto -mx-1">
                  <table class="w-full text-xs min-w-[320px]">
                    <thead>
                      <tr class="bg-gray-50">
                        <th class="text-left py-1.5 px-2 font-semibold text-gray-500">Month</th>
                        <th class="text-left py-1.5 px-2 font-semibold text-gray-500">Phase</th>
                        <th class="text-right py-1.5 px-2 font-semibold text-gray-500">Cum. Cost</th>
                        <th class="text-right py-1.5 px-2 font-semibold text-gray-500">Cum. Holding</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                      <tr v-for="row in projectTimeline" :key="row.month" :class="row.isExit ? 'bg-emerald-50 font-bold' : ''">
                        <td class="py-1.5 px-2 font-semibold text-gray-700">{{ row.monthLabel }}</td>
                        <td class="py-1.5 px-2 text-gray-600">{{ row.phase }}</td>
                        <td class="py-1.5 px-2 text-right text-gray-800">{{ formatCurrencyShort(row.cumCost) }}</td>
                        <td class="py-1.5 px-2 text-right" :class="row.isExit ? 'text-emerald-700' : 'text-gray-600'">
                          {{ row.isExit ? formatCurrencyShort(result.netSaleProceeds) : formatCurrencyShort(row.cumHolding) }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </template>

            <!-- === FIND-PRICE MODE RESULT === -->
            <template v-else-if="calcMode === 'find-price'">
              <div v-if="findPriceResult !== null" class="p-6 text-center bg-gradient-to-br from-blue-700 to-blue-900">
                <p class="text-white/80 text-xs font-semibold uppercase tracking-widest mb-1">Max Purchase Price</p>
                <div class="text-4xl font-extrabold text-white leading-none mb-2">{{ formatCurrency(findPriceResult) }}</div>
                <p class="text-white/70 text-sm">to achieve {{ form.reverseTargetMode === 'roi' ? form.targetROI + '% ROI' : formatCurrency(Number(form.targetTotalProfit)) + ' profit' }}</p>
                <span class="inline-block mt-3 px-4 py-1.5 rounded-full text-sm font-bold bg-white/20 text-white border border-white/30">Max Price</span>
              </div>
              <div v-else-if="findPriceError" class="p-6 text-center bg-blue-50">
                <div class="text-3xl font-extrabold text-blue-200 mb-2">—</div>
                <p class="text-sm text-blue-700 font-semibold">{{ findPriceError }}</p>
              </div>
              <div v-else class="p-6 text-center bg-gray-100">
                <div class="text-3xl font-extrabold text-gray-300 mb-2">—</div>
                <p class="text-sm text-gray-400">Enter ARV, rehab budget, and target to calculate</p>
              </div>
              <!-- Breakdown at max price -->
              <div v-if="findPriceResult !== null && findPriceCalc" class="px-4 py-3 border-t border-gray-100">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">At Max Purchase Price</p>
                <div class="space-y-1.5">
                  <div class="flex justify-between text-xs"><span class="text-gray-600">Max Purchase Price</span><span class="font-bold text-blue-700">{{ formatCurrency(findPriceResult) }}</span></div>
                  <div class="flex justify-between text-xs"><span class="text-gray-600">Total Profit</span><span class="font-semibold text-gray-900">{{ formatCurrency(findPriceCalc.totalProfit) }}</span></div>
                  <div class="flex justify-between text-xs"><span class="text-gray-600">ROI</span><span class="font-semibold text-gray-900">{{ findPriceCalc.roi.toFixed(1) }}%</span></div>
                  <div class="flex justify-between text-xs"><span class="text-gray-600">Total Cash Invested</span><span class="font-semibold text-gray-900">{{ formatCurrency(findPriceCalc.totalCashInvested) }}</span></div>
                  <div class="flex justify-between text-xs"><span class="text-gray-600">70% Rule Max Offer</span><span class="font-semibold" :class="findPriceResult <= findPriceCalc.rule70 ? 'text-emerald-700' : 'text-amber-700'">{{ formatCurrency(findPriceCalc.rule70) }}</span></div>
                </div>
              </div>
            </template>

            <!-- === FIND-REHAB MODE RESULT === -->
            <template v-else>
              <div v-if="findRehabResult !== null" class="p-6 text-center bg-gradient-to-br from-emerald-700 to-emerald-900">
                <p class="text-white/80 text-xs font-semibold uppercase tracking-widest mb-1">Max Rehab Budget</p>
                <div class="text-4xl font-extrabold text-white leading-none mb-2">{{ formatCurrency(findRehabResult) }}</div>
                <p class="text-white/70 text-sm">to achieve {{ form.reverseTargetMode === 'roi' ? form.targetROI + '% ROI' : formatCurrency(Number(form.targetTotalProfit)) + ' profit' }}</p>
                <span class="inline-block mt-3 px-4 py-1.5 rounded-full text-sm font-bold bg-white/20 text-white border border-white/30">Max Rehab</span>
              </div>
              <div v-else-if="findRehabError" class="p-6 text-center bg-emerald-50">
                <div class="text-3xl font-extrabold text-emerald-200 mb-2">—</div>
                <p class="text-sm text-emerald-700 font-semibold">{{ findRehabError }}</p>
              </div>
              <div v-else class="p-6 text-center bg-gray-100">
                <div class="text-3xl font-extrabold text-gray-300 mb-2">—</div>
                <p class="text-sm text-gray-400">Enter purchase price, ARV, and target to calculate</p>
              </div>
              <!-- Breakdown at max rehab -->
              <div v-if="findRehabResult !== null && findRehabCalc" class="px-4 py-3 border-t border-gray-100">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">At Max Rehab Budget</p>
                <div class="space-y-1.5">
                  <div class="flex justify-between text-xs"><span class="text-gray-600">Max Rehab Budget</span><span class="font-bold text-emerald-700">{{ formatCurrency(findRehabResult) }}</span></div>
                  <div class="flex justify-between text-xs"><span class="text-gray-600">Contingency ({{ form.rehabContingencyPct }}%)</span><span class="font-semibold text-gray-900">{{ formatCurrency(findRehabCalc.contingency) }}</span></div>
                  <div class="flex justify-between text-xs"><span class="text-gray-600">Total Profit</span><span class="font-semibold text-gray-900">{{ formatCurrency(findRehabCalc.totalProfit) }}</span></div>
                  <div class="flex justify-between text-xs"><span class="text-gray-600">ROI</span><span class="font-semibold text-gray-900">{{ findRehabCalc.roi.toFixed(1) }}%</span></div>
                  <div class="flex justify-between text-xs"><span class="text-gray-600">70% Rule Max Offer</span><span class="font-semibold" :class="Number(form.purchasePrice) <= findRehabCalc.rule70 ? 'text-emerald-700' : 'text-amber-700'">{{ formatCurrency(findRehabCalc.rule70) }}</span></div>
                </div>
              </div>
            </template>

            <!-- ACTION BUTTONS -->
            <div v-if="hasResult || findPriceResult !== null || findRehabResult !== null" class="p-4 border-t border-gray-100 space-y-2">
              <!-- Save Scenario -->
              <button v-if="hasResult" @click="openSaveScenario()"
                class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
                style="background: #f59e0b; color: #1e3a5f;">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
                Save Scenario
              </button>
              <!-- Share + PDF -->
              <div class="grid grid-cols-2 gap-2">
                <button @click="shareResult()"
                  class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border"
                  :class="shareSuccess ? 'border-green-400 text-green-700 bg-green-50' : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'">
                  <svg v-if="!shareSuccess" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  {{ shareSuccess ? 'Copied!' : 'Share' }}
                </button>
                <button @click="exportPDF()"
                  class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  Export PDF
                </button>
              </div>
              <!-- Email -->
              <button @click="showEmailModal = true"
                class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs text-gray-500 hover:text-gray-700 border border-dashed border-gray-200 hover:border-gray-300 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                Email me this analysis
              </button>
            </div>

          </div><!-- end sticky wrapper -->
        </div><!-- end right column -->

      </div><!-- end two-column -->
      </div><!-- end rounded inner -->
      </div><!-- end gradient border -->

      <!-- IMPORTANT NOTE -->
      <div class="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200">
        <p class="text-sm font-bold text-amber-800 mb-1">⚠ Before-Tax Analysis</p>
        <p class="text-xs text-amber-700 leading-relaxed">
          This calculator shows before-tax results only. Flip profits are typically taxed as <strong>ordinary income</strong> (25–37% marginal rate in 2026) — not capital gains. Actual take-home is meaningfully lower after federal and state income taxes. Flips held under 1 year do not qualify for long-term capital gains rates. Consult a CPA for your specific tax situation.
        </p>
      </div>

      <!-- SCENARIO PANEL -->
      <div class="max-w-6xl mx-auto pt-6">
        <ScenarioPanel
          calculator="fix-and-flip"
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
    <div class="max-w-[1100px] mx-auto px-4 pb-16 space-y-12">

      <!-- ── SECTION 1: OVERVIEW ── -->
      <section id="overview" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Overview — Fix and Flip Calculator</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          The <strong>fix and flip calculator</strong> is the essential tool for US real estate investors evaluating short-term rehab-and-sell projects. Unlike buy-and-hold tools that model multi-year cash flows, this <strong>house flipping calculator</strong> focuses on the single-period profit question: will I make money on this deal in 3–12 months? It computes two co-primary metrics — Total Profit in dollars and ROI as a percentage — so both first-time flippers assessing their first deal and experienced rehabbers comparing multiple opportunities get the full picture. As a <strong>flip profit calculator</strong> and <strong>fix and flip roi calculator</strong>, it handles all three financing modes: Hard Money (the industry default for 70% of flip investors), Conventional, and All Cash.
        </p>
        <p class="text-gray-700 leading-relaxed mb-4">
          The calculator works by combining your Purchase Price, ARV (After Repair Value), Rehab Budget, Rehab Contingency, Hold Period, monthly Holding Costs, Financing structure, and Sale Costs into a comprehensive profit model. It outputs Total Profit, ROI, the 70% Rule Max Offer, Break-Even Sale Price, Annualized ROI, and Profit per Month — the six numbers every flip investor needs before committing capital. Three calculation modes — Analyze, Find Max Purchase Price, and Find Max Rehab Budget — handle both forward analysis and reverse offer construction.
        </p>
        <p class="text-gray-700 leading-relaxed mb-4">
          This <strong>real estate flip calculator</strong> is used by first-time flippers verifying their first project, experienced rehabbers running portfolio-level deal screening, wholesalers checking 70% Rule compliance before assigning contracts, and real estate agents advising investor clients on offer strategy. The 70% Rule indicator, Break-Even cushion display, and three-scenario stress test (Conservative / Base / Optimistic) give investors the confidence to make data-driven offers rather than gut-feel bids.
        </p>
        <p class="text-gray-700 leading-relaxed">
          <strong>What this calculator does NOT include (v1):</strong> After-tax returns (before-tax analysis only — flip profits are typically ordinary income at 25–37% marginal rates). Detailed scope-of-work rehab breakdown (single rehab number plus contingency). 1031 exchange benefits (flips do not qualify). Multi-year appreciation projections (too short-term for compounding). Pair with the ARV Calculator for ARV confidence verification and the DSCR Calculator to compare flip strategy vs. rental hold strategy.
        </p>
      </section>

      <!-- ── SECTION 2: HOW TO USE ── -->
      <section id="how-to-use" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">How to Use the Fix and Flip Calculator</h2>
        <p class="text-gray-600 mb-6">Follow these steps to project profit and ROI on any US flip project in under 3 minutes.</p>

        <div class="space-y-6">
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style="background: #1e3a5f;">1</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Choose a calculation mode</h3>
              <p class="text-sm text-gray-600 leading-relaxed">Select <strong>Analyze Fix &amp; Flip</strong> to evaluate a deal with known inputs and see projected profit and ROI. Use <strong>Find Max Purchase Price</strong> when you know your target return and want to calculate the maximum you can offer — this is the offer construction mode used by experienced buyers. Use <strong>Find Max Rehab Budget</strong> to determine how much you can spend on renovation while still hitting your target — critical for contractor negotiation. Both reverse modes solve via binary search across a realistic price range.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style="background: #1e3a5f;">2</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Enter property details and ARV</h3>
              <p class="text-sm text-gray-600 leading-relaxed">Input the purchase price, property type, and ARV (After Repair Value). ARV is THE critical input — a $10K miss on ARV can wipe out the entire profit on a thin-margin flip. Use conservative ARV estimates verified with 3+ active MLS comps, a Broker Price Opinion (BPO), or a pre-rehab appraisal. If your ARV confidence is Realistic or Optimistic, stress-test with a 5–8% downside in the Conservative scenario.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style="background: #1e3a5f;">3</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Enter rehab budget and timeline</h3>
              <p class="text-sm text-gray-600 leading-relaxed">Enter the total rehab cost and set the contingency (10–15% is industry standard — never go below 10%). Typical 2026 rehab costs: cosmetic updates $15–30K, moderate updates $30–60K, gut renovation $60–150K. Set rehab duration separately from hold period — rehab duration affects the timeline display but not the holding cost calculation (total hold period drives holding costs). Rehab typically takes 2–4 months for moderate updates and 4–8 months for gut renovations.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style="background: #1e3a5f;">4</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Enter hold period and holding costs</h3>
              <p class="text-sm text-gray-600 leading-relaxed">Set the total hold period in months (typical: 6). Enter monthly holding costs: property tax (annual divided by 12), vacant/rehab insurance, utilities during rehab, HOA (if applicable), and other ongoing property expenses. <strong>Important: Loan interest is tracked separately under Financing — do not include it in holding costs.</strong> This prevents double-counting. Holding costs compound every month — a 6-month flip with $600 monthly holding costs has $3,600 in real cash outflow before any loan interest is added. Many first-time flippers forget holding costs entirely, leading to dramatically inflated ROI projections.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style="background: #1e3a5f;">5</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Set financing and sale costs</h3>
              <p class="text-sm text-gray-600 leading-relaxed">Choose your financing type: Hard Money (default — 2026 rate 11–14%, points 2–4%, interest-only), Conventional (2026 rate ~7.5%, 25% down, 30-year amortization), or All Cash (no financing complexity). Hard money often covers both purchase and rehab costs depending on the lender and deal structure — toggle the "Loan Covers Rehab" option to reflect your specific lender's terms. Set sale costs (typical: 6–10% — broker commission 5–6% plus closing 1–3%). The calculator tracks loan interest separately from holding costs to prevent double-counting.</p>
            </div>
          </div>
        </div>

        <!-- Pro Tips -->
        <div class="mt-8 p-5 rounded-xl bg-amber-50 border border-amber-200">
          <h3 class="font-bold text-amber-900 mb-3">Pro Tips</h3>
          <ul class="space-y-2">
            <li class="flex gap-2 text-sm text-amber-800">
              <span class="font-bold flex-shrink-0">→</span>
              Use conservative ARV — reduce your comp-derived estimate by 5–10% for safety. A $280K optimistic ARV that comes in at $260K can eliminate your entire profit on a thin-margin flip.
            </li>
            <li class="flex gap-2 text-sm text-amber-800">
              <span class="font-bold flex-shrink-0">→</span>
              Check the 70% Rule indicator before making an offer. Deals within the rule (purchase at or below the max offer) have built-in margin; deals outside need strong justification like a hot market or extremely light rehab scope.
            </li>
            <li class="flex gap-2 text-sm text-amber-800">
              <span class="font-bold flex-shrink-0">→</span>
              Rehab contingency should be 10–15%, not 5%. In 2026, supply chain surprises and permit delays are common. Budget for overruns — if your contractor bids $40K, budget $44–48K with contingency.
            </li>
            <li class="flex gap-2 text-sm text-amber-800">
              <span class="font-bold flex-shrink-0">→</span>
              Holding costs scale with months. A 6-month flip can have 6–8% of purchase price in holding costs alone. Tighten your timeline — every extra month costs real money in taxes, insurance, and loan interest.
            </li>
          </ul>
        </div>

        <!-- Result Guide -->
        <div class="mt-6">
          <h3 class="font-bold text-gray-900 mb-3">How to Interpret Your ROI Result</h3>
          <div class="space-y-2">
            <div class="flex items-start gap-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <div class="w-3 h-3 rounded-full bg-emerald-600 mt-0.5 flex-shrink-0"></div>
              <div class="text-sm"><span class="font-bold text-emerald-800">50%+ ROI — Exceptional:</span> <span class="text-emerald-700">top-quartile flip; usually requires deep value acquisition or major scope with expert execution</span></div>
            </div>
            <div class="flex items-start gap-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <div class="w-3 h-3 rounded-full mt-0.5 flex-shrink-0" style="background: #10B981;"></div>
              <div class="text-sm"><span class="font-bold text-emerald-800">30–49% ROI — Strong:</span> <span class="text-emerald-700">above-average 2026 flip margin; healthy safety buffer for execution risk</span></div>
            </div>
            <div class="flex items-start gap-3 p-3 rounded-xl bg-amber-50 border border-amber-200">
              <div class="w-3 h-3 rounded-full bg-amber-500 mt-0.5 flex-shrink-0"></div>
              <div class="text-sm"><span class="font-bold text-amber-800">20–29% ROI — Solid:</span> <span class="text-amber-700">market-average for 2026 hard-money flips; acceptable if execution is tight</span></div>
            </div>
            <div class="flex items-start gap-3 p-3 rounded-xl bg-orange-50 border border-orange-200">
              <div class="w-3 h-3 rounded-full bg-orange-500 mt-0.5 flex-shrink-0"></div>
              <div class="text-sm"><span class="font-bold text-orange-800">10–19% ROI — Weak:</span> <span class="text-orange-700">execution risk often exceeds profit margin; consider only in exceptional cases</span></div>
            </div>
            <div class="flex items-start gap-3 p-3 rounded-xl bg-red-50 border border-red-200">
              <div class="w-3 h-3 rounded-full bg-red-600 mt-0.5 flex-shrink-0"></div>
              <div class="text-sm"><span class="font-bold text-red-800">0–9% ROI — Critical:</span> <span class="text-red-700">barely positive; any overrun on time, budget, or ARV produces a loss</span></div>
            </div>
            <div class="flex items-start gap-3 p-3 rounded-xl bg-red-100 border border-red-300">
              <div class="w-3 h-3 rounded-full bg-red-900 mt-0.5 flex-shrink-0"></div>
              <div class="text-sm"><span class="font-bold text-red-900">Below 0% ROI — Loss:</span> <span class="text-red-800">projected loss; do not proceed without significant changes to price, scope, or exit</span></div>
            </div>
          </div>
          <p class="text-xs text-gray-400 mt-2">Tiers assume 6-month hold with hard money financing at 2026 market rates. These are total project ROI tiers, not Annualized ROI. Shorter holds compress ROI on the same dollar profit.</p>
        </div>
      </section>

      <!-- ── SECTION 3: INPUTS & OUTPUTS ── -->
      <section id="inputs-outputs" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Inputs &amp; Outputs — Field Reference</h2>
        <p class="text-gray-600 mb-6">What each field means and where to find the numbers for your flip analysis.</p>

        <div class="space-y-6">
          <div>
            <h3 class="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Property Inputs</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm border-collapse">
                <thead><tr class="bg-gray-50"><th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">Field</th><th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">What it means</th><th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">Where to find it</th></tr></thead>
                <tbody class="divide-y divide-gray-100">
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Purchase Price</td><td class="py-2.5 px-3 text-gray-600">Contract price to acquire the property</td><td class="py-2.5 px-3 text-gray-500">MLS, wholesaler offer, off-market contract</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Property Type</td><td class="py-2.5 px-3 text-gray-600">SFR, condo, small multi-family, townhouse</td><td class="py-2.5 px-3 text-gray-500">Property listing or public records</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">ARV — After Repair Value</td><td class="py-2.5 px-3 text-gray-600">Market value of the property after renovation is complete</td><td class="py-2.5 px-3 text-gray-500">Comps from MLS (3+ active), BPO, pre-rehab appraisal</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">ARV Confidence</td><td class="py-2.5 px-3 text-gray-600">How confident you are in the ARV estimate — affects display context only</td><td class="py-2.5 px-3 text-gray-500">Your assessment of comp quality and market conditions</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Rehab &amp; Timeline</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm border-collapse">
                <thead><tr class="bg-gray-50"><th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">Field</th><th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">What it means</th><th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">Where to find it</th></tr></thead>
                <tbody class="divide-y divide-gray-100">
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Rehab Budget</td><td class="py-2.5 px-3 text-gray-600">Total estimated renovation cost before contingency</td><td class="py-2.5 px-3 text-gray-500">Contractor bids, scope of work estimates, past project data</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Rehab Contingency %</td><td class="py-2.5 px-3 text-gray-600">Budget buffer for cost overruns (10–15% industry standard)</td><td class="py-2.5 px-3 text-gray-500">Industry standard: always 10–15%, never less than 10%</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Rehab Duration (Months)</td><td class="py-2.5 px-3 text-gray-600">Expected months from project start to completion</td><td class="py-2.5 px-3 text-gray-500">Contractor timeline; used for project timeline display</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Hold Period (Months)</td><td class="py-2.5 px-3 text-gray-600">Total months from purchase close to sale close</td><td class="py-2.5 px-3 text-gray-500">Rehab months + expected market time (2–4 months typical)</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Monthly Holding Costs (Property-Related Only — Excludes Loan Interest)</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm border-collapse">
                <thead><tr class="bg-gray-50"><th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">Field</th><th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">What it means</th><th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">Where to find it</th></tr></thead>
                <tbody class="divide-y divide-gray-100">
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Property Tax (monthly)</td><td class="py-2.5 px-3 text-gray-600">Annual property tax divided by 12</td><td class="py-2.5 px-3 text-gray-500">County assessor website or property tax bill</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Insurance (monthly)</td><td class="py-2.5 px-3 text-gray-600">Vacant/rehab property insurance during project</td><td class="py-2.5 px-3 text-gray-500">Insurance quote (vacant property is higher than standard)</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Utilities (monthly)</td><td class="py-2.5 px-3 text-gray-600">Electric, gas, water while vacant during rehab</td><td class="py-2.5 px-3 text-gray-500">Prior bills or municipal estimates</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">HOA (monthly)</td><td class="py-2.5 px-3 text-gray-600">Homeowners association dues if applicable</td><td class="py-2.5 px-3 text-gray-500">HOA statement or listing disclosure</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Other (monthly)</td><td class="py-2.5 px-3 text-gray-600">Lawn care, security, miscellaneous</td><td class="py-2.5 px-3 text-gray-500">Ongoing property management estimates</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Financing Inputs</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm border-collapse">
                <thead><tr class="bg-gray-50"><th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">Field</th><th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">What it means</th><th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">Where to find it</th></tr></thead>
                <tbody class="divide-y divide-gray-100">
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Financing Type</td><td class="py-2.5 px-3 text-gray-600">Hard Money / Conventional / All Cash</td><td class="py-2.5 px-3 text-gray-500">Your loan source or investment strategy</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">HM Loan-to-Cost %</td><td class="py-2.5 px-3 text-gray-600">Percent of (purchase + rehab) financed by hard money</td><td class="py-2.5 px-3 text-gray-500">Hard money lender term sheet</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">HM Interest Rate %</td><td class="py-2.5 px-3 text-gray-600">Annual interest rate (interest-only payments during hold)</td><td class="py-2.5 px-3 text-gray-500">Lender quote — 2026 typical: 10–14% annual</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">HM Points %</td><td class="py-2.5 px-3 text-gray-600">Upfront origination fee as percent of loan amount</td><td class="py-2.5 px-3 text-gray-500">Lender quote — 2026 typical: 2–4 points</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Loan Covers Rehab</td><td class="py-2.5 px-3 text-gray-600">Whether lender provides rehab draw funding</td><td class="py-2.5 px-3 text-gray-500">Lender term sheet — varies by lender and deal structure</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Conv Down Payment %</td><td class="py-2.5 px-3 text-gray-600">Percent of purchase price paid in cash</td><td class="py-2.5 px-3 text-gray-500">Loan program — investment property: typically 20–30%</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Sale Costs %</td><td class="py-2.5 px-3 text-gray-600">Broker commission plus closing costs at sale</td><td class="py-2.5 px-3 text-gray-500">Local market norms — typical 6–10% (5–6% broker + 1–3% closing)</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Calculator Outputs</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm border-collapse">
                <thead><tr class="bg-gray-50"><th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">Output</th><th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">What it means</th><th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">Primary use</th></tr></thead>
                <tbody class="divide-y divide-gray-100">
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Total Profit ($)</td><td class="py-2.5 px-3 text-gray-600">Dollar profit after all costs — Net Sale Proceeds minus Total Cash Invested</td><td class="py-2.5 px-3 text-gray-500">Headline wealth creation number</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">ROI (%)</td><td class="py-2.5 px-3 text-gray-600">Profit as percent of cash actually invested</td><td class="py-2.5 px-3 text-gray-500">Deal quality ranking and comparison</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">70% Rule Max Offer</td><td class="py-2.5 px-3 text-gray-600">Industry heuristic maximum offer: (ARV × 0.70) − Rehab</td><td class="py-2.5 px-3 text-gray-500">Quick within/outside rule compliance check</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Break-Even Sale Price</td><td class="py-2.5 px-3 text-gray-600">Minimum sale price to return all cash invested</td><td class="py-2.5 px-3 text-gray-500">Downside stress test and ARV cushion</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Annualized ROI</td><td class="py-2.5 px-3 text-gray-600">ROI adjusted to 12-month equivalent</td><td class="py-2.5 px-3 text-gray-500">Compare to stock market, rental property IRR</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Profit per Month</td><td class="py-2.5 px-3 text-gray-600">Total Profit divided by months held</td><td class="py-2.5 px-3 text-gray-500">Effective monthly return for time invested</td></tr>
                  <tr><td class="py-2.5 px-3 font-medium text-gray-800">Total Cash Invested</td><td class="py-2.5 px-3 text-gray-600">All actual cash paid from investor's pocket</td><td class="py-2.5 px-3 text-gray-500">Capital requirement planning</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- ── SECTION 4: FORMULA ── -->
      <section id="formula" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Fix and Flip Profit Formula &amp; 70% Rule Calculation</h2>
        <p class="text-gray-600 mb-6">How the calculator computes flip profit — with a worked Columbus, OH example for 2026.</p>

        <div class="space-y-4 mb-6">
          <h3 class="font-bold text-gray-800">Step-by-Step Calculation</h3>
          <ol class="space-y-3 text-sm text-gray-700 leading-relaxed list-decimal list-inside">
            <li><strong>Calculate Loan Amount</strong> based on financing type. Hard Money with rehab: (Purchase + Rehab) × LTC%. Hard Money purchase-only: Purchase × LTC%. Conventional: Purchase × (1 − Down Payment %). All Cash: $0.</li>
            <li><strong>Calculate Loan Points</strong> (Hard Money only): Loan Amount × Points %. Conventional and Cash: $0.</li>
            <li><strong>Calculate Total Loan Interest</strong>. Hard Money (interest-only): Loan Amount × (Rate ÷ 12) × Months. Conventional (amortizing): Monthly Payment × Months minus Principal Reduction. All Cash: $0.</li>
            <li><strong>Calculate Total Holding Costs</strong>: Monthly holding costs × Hold Period Months. Property-related only — excludes loan interest.</li>
            <li><strong>Calculate Total Project Costs</strong>: Purchase + Closing + Rehab + Contingency + Holding Costs + Loan Points + Loan Interest + Sale Costs (ARV × Sale Costs %).</li>
            <li><strong>Calculate Total Cash Invested</strong>: Down Payment + Closing + Rehab (if not financed by loan) + Contingency (if not financed) + Total Holding Costs + Loan Points + Total Loan Interest. Note: when Hard Money covers rehab, rehab is financed and excluded from Cash Invested.</li>
            <li><strong>Calculate Remaining Loan Balance at exit</strong>. Hard Money (interest-only): full Loan Amount (no principal paid). Conventional: balance after amortization for hold period months. All Cash: $0.</li>
            <li><strong>Calculate Net Sale Proceeds</strong>: ARV − Sale Costs − Remaining Loan Balance.</li>
            <li><strong>Calculate Total Profit</strong>: Net Sale Proceeds − Total Cash Invested.</li>
            <li><strong>Calculate ROI</strong>: (Total Profit ÷ Total Cash Invested) × 100.</li>
          </ol>
        </div>

        <!-- Formula Box -->
        <div class="bg-gray-900 text-gray-100 rounded-xl p-5 text-sm font-mono leading-loose mb-6">
          <div class="text-amber-400 font-bold mb-2">// Core Formulas</div>
          <div>Total Profit    = Net Sale Proceeds − Total Cash Invested</div>
          <div>ROI %           = (Total Profit ÷ Total Cash Invested) × 100</div>
          <div>70% Rule Offer  = (ARV × 0.70) − Rehab Budget</div>
          <div>Break-Even Price = (Total Cash Invested + Remaining Loan) ÷ (1 − Sale Costs %)</div>
          <div class="mt-2 text-gray-400">// Break-Even uses Total Cash Invested, NOT Total Project Costs</div>
          <div class="text-gray-400">// (Project Costs already includes Sale Costs — avoids double-count)</div>
          <div class="mt-2">Annualized ROI  = ((1 + ROI/100)^(12/months) − 1) × 100</div>
          <div class="text-gray-400 text-xs mt-2">// Note: Primary ROI = total project ROI. Annualized ROI is for comparison only.</div>
        </div>

        <!-- Consistency Identity -->
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <h4 class="font-bold text-blue-800 mb-2">Consistency Identity</h4>
          <p class="text-sm text-blue-700 font-mono">Total Project Costs − Sale Costs = Total Cash Invested + Remaining Loan Balance</p>
          <p class="text-xs text-blue-600 mt-2">This identity must hold in any valid flip calculation. Use it to verify your math is consistent — if Total Project Costs (excl. sale costs) ≠ Cash Invested + Remaining Loan, there's a double-count or omission.</p>
        </div>

        <!-- Worked Example -->
        <div class="bg-gray-50 rounded-xl p-5">
          <h3 class="font-bold text-gray-800 mb-1">Worked Example — Columbus, OH (2026)</h3>
          <p class="text-xs text-gray-500 mb-4">Single-family, 3-bedroom, 1960s build. Moderate update scope. Hard Money financing. Columbus offers solid 2026 flip opportunities with affordable entry ($130–200K) and stable buyer demand.</p>
          <div class="grid grid-cols-2 gap-x-6 gap-y-1 text-sm mb-4">
            <div><span class="text-gray-500">Purchase Price:</span> <span class="font-semibold">$145,000</span></div>
            <div><span class="text-gray-500">ARV:</span> <span class="font-semibold">$230,000</span></div>
            <div><span class="text-gray-500">Rehab Budget:</span> <span class="font-semibold">$42,000</span></div>
            <div><span class="text-gray-500">Contingency (10%):</span> <span class="font-semibold">$4,200</span></div>
            <div><span class="text-gray-500">Hold Period:</span> <span class="font-semibold">6 months</span></div>
            <div><span class="text-gray-500">Monthly Holding:</span> <span class="font-semibold">$620/mo</span></div>
            <div><span class="text-gray-500">Closing Costs (3%):</span> <span class="font-semibold">$4,350</span></div>
            <div><span class="text-gray-500">Sale Costs (8%):</span> <span class="font-semibold">$18,400</span></div>
            <div><span class="text-gray-500">HM: 80% LTC, 12%, 3pts:</span> <span class="font-semibold">Loan covers rehab</span></div>
          </div>
          <div class="space-y-1 text-sm font-mono bg-white rounded-lg p-3 border border-gray-200">
            <div class="text-gray-500">Step 1: Loan = (145,000 + 42,000) × 80% = <span class="text-gray-900 font-bold">$149,600</span></div>
            <div class="text-gray-500">Step 2: Down Payment = 145,000 × 20% = <span class="text-gray-900 font-bold">$29,000</span></div>
            <div class="text-gray-500">Step 3: Points = 149,600 × 3% = <span class="text-gray-900 font-bold">$4,488</span></div>
            <div class="text-gray-500">Step 4: Monthly Interest = 149,600 × (12%/12) = <span class="text-gray-900 font-bold">$1,496/mo</span></div>
            <div class="text-gray-500">Step 5: Total Interest = 1,496 × 6 = <span class="text-gray-900 font-bold">$8,976</span></div>
            <div class="text-gray-500">Step 6: Total Holding = 620 × 6 = <span class="text-gray-900 font-bold">$3,720</span></div>
            <div class="text-gray-500">Step 7: TCI = 29,000 + 4,350 + 0 (rehab fin.) + 0 (cont. fin.) + 3,720 + 4,488 + 8,976 = <span class="text-gray-900 font-bold">$50,534</span></div>
            <div class="text-gray-500">Step 8: Remaining Loan = $149,600 (interest-only)</div>
            <div class="text-gray-500">Step 9: Net Sale Proceeds = 230,000 − 18,400 − 149,600 = <span class="text-gray-900 font-bold">$62,000</span></div>
            <div class="text-gray-500">Step 10: Total Profit = 62,000 − 50,534 = <span class="text-emerald-700 font-bold">$11,466</span></div>
            <div class="text-gray-500">Step 11: ROI = 11,466 / 50,534 × 100 = <span class="text-emerald-700 font-bold">22.7%</span></div>
            <div class="text-gray-500">Step 12: Annualized ROI = ((1.227)^2 − 1) × 100 = <span class="text-emerald-700 font-bold">50.6%</span></div>
            <div class="text-gray-500">Step 13: 70% Rule Max = 230,000 × 0.70 − 42,000 = <span class="text-amber-700 font-bold">$119,000</span></div>
            <div class="text-red-600 text-xs mt-1">→ Purchase $145K is OUTSIDE 70% Rule (max $119K). Deal proceeds on local market knowledge.</div>
            <div class="text-gray-500">Step 14: Break-Even = (50,534 + 149,600) / (1 − 8%) = <span class="text-gray-900 font-bold">$217,537</span></div>
            <div class="text-gray-500 text-xs">→ ARV $230K vs Break-Even $217.5K = $12.5K cushion (5.4% of ARV)</div>
          </div>
          <p class="text-xs text-gray-500 mt-3 leading-relaxed">
            <strong>Interpretation:</strong> ROI of 22.7% over 6 months falls in the Solid tier for 2026 Columbus market — market-average for hard money flips at current rates. The deal is technically outside the 70% Rule (purchase at $145K vs $119K max), which requires justification — here, Columbus market velocity and the investor's contractor relationship provide that justification. Break-Even cushion of $12.5K is thin; ARV must hold within 5% of estimate to preserve positive profit. <em>Before-tax analysis; flip profits are taxed as ordinary income at 25–37% marginal rates — actual take-home is meaningfully lower.</em>
          </p>
        </div>
      </section>

      <!-- ── SECTION 5: WHAT IS FIX AND FLIP ── -->
      <section id="what-is-fix-and-flip" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">What Is a Fix and Flip Calculator? (And What the 70% Rule Means)</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          A fix and flip calculator answers the core short-term real estate question: will I make money on this rehab-and-sell project, and how much? The two primary formulas are: <strong>Total Profit = Net Sale Proceeds − Total Cash Invested</strong> and <strong>ROI = (Total Profit ÷ Total Cash Invested) × 100</strong>. Unlike buy-and-hold calculators that model multi-year cash flow streams and appreciation compounding, this is a single-period profit calculation — the investor buys, renovates, and sells within 3–12 months, and the calculator measures that complete cycle. There is no cap rate, no rent growth, no appreciation rate — just the margin between what you spend and what you net at sale.
        </p>
        <p class="text-gray-700 leading-relaxed mb-4">
          What makes flip analysis genuinely different is the compounding of short-term costs: Hard Money interest-only payments accumulate every month, holding costs (taxes, insurance, utilities) accumulate every month, and the project is ultimately judged against a single exit event at ARV. A deal that looks profitable at 4 months can look marginal at 7 months — which is why the Hold Period sensitivity table is one of the most important outputs. The ARV is the single most critical input: it determines the exit value, and every dollar of ARV error flows directly to the profit line.
        </p>
        <p class="text-gray-700 leading-relaxed mb-4">
          The <strong>70% Rule</strong> is the industry heuristic every flip investor and wholesaler knows. The formula: <strong>Max Offer = ARV × 0.70 − Rehab Budget</strong>. The rule builds in a 30% buffer that covers profit, financing costs, and execution risk. A deal "within the rule" (purchase at or below the 70% Rule Max Offer) has a healthy built-in margin for realistic execution; a deal "outside the rule" (purchase above the max) requires strong specific reasons — a hot appreciation market, extremely light rehab scope, or a sub-3-month flip timeline. The calculator shows your actual purchase price vs. the 70% Rule ceiling side-by-side with a green/amber compliance indicator.
        </p>
        <p class="text-gray-700 leading-relaxed">
          Hard Money financing is the default because it reflects how 70% of flip investors actually operate: interest-only loans at 10–14% annual rate, 2–4% upfront points, and short 6–12 month terms. Hard money allows investors to deploy smaller cash capital per deal (typically 20% down plus points and closing), run multiple projects simultaneously, and get loan approval based on the deal's ARV rather than personal income — making it accessible for investors who couldn't qualify for conventional investment loans. The cost of this flexibility is 3–5% more in total financing cost vs. conventional, which the calculator accounts for precisely.
        </p>
      </section>

      <!-- ── SECTION 6: RESULT MEANING ── -->
      <section id="result-meaning" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">What Your Flip ROI Result Means</h2>
        <p class="text-gray-600 mb-6">Your ROI % tells you how much return the flip generated per dollar of cash invested. Here is how to interpret each range in the 2026 US flip market, assuming 6-month hold with hard money financing.</p>

        <div class="space-y-4">
          <!-- Exceptional -->
          <div class="rounded-xl border-2 border-emerald-200 overflow-hidden">
            <div class="px-4 py-3 text-white font-bold flex items-center justify-between" style="background: #059669;">
              <span>50%+ ROI — Exceptional</span>
              <span class="text-sm font-normal opacity-90">Annualized ROI: 100%+</span>
            </div>
            <div class="p-4 bg-emerald-50">
              <p class="text-sm text-gray-700 mb-2"><strong>Typical context:</strong> Deep-value acquisitions; major scope rehabs with expert execution; hot appreciation markets with light rehab; wholesale-sourced deals with significant off-market discounts.</p>
              <p class="text-sm text-gray-600 leading-relaxed">Top-quartile flip performance. This range is hard to achieve with standard MLS-sourced deals in 2026 — it typically requires off-market acquisition at sub-70% Rule pricing, or a significant value-add scope executed by an experienced team with tight cost control. These are the deals that make professional flipping a career, but they're not common in competitive 2026 markets. Competing for exceptional-tier deals requires established deal flow, contractor relationships, and a reputation for fast close. Annualized ROI above 100% — exceeds S&amp;P 500 historical averages by wide margin on a percentage basis, though the dollar profit depends entirely on deal size.</p>
            </div>
          </div>

          <!-- Strong -->
          <div class="rounded-xl border-2 border-emerald-200 overflow-hidden">
            <div class="px-4 py-3 text-white font-bold flex items-center justify-between" style="background: #10B981;">
              <span>30–49% ROI — Strong</span>
              <span class="text-sm font-normal opacity-90">Annualized ROI: 65–100%</span>
            </div>
            <div class="p-4 bg-emerald-50">
              <p class="text-sm text-gray-700 mb-2"><strong>Typical context:</strong> Well-selected 2026 flips with tight execution; good wholesale sourcing; cosmetic or moderate rehabs in appreciating markets; experienced flippers with established contractor networks.</p>
              <p class="text-sm text-gray-600 leading-relaxed">Above-average 2026 flip margin with healthy safety buffer for the inevitable surprises — ARV misses, rehab overruns, longer-than-expected marketing time. This range is what most experienced flippers target as their baseline. A 35% ROI deal has roughly 35% of Cash Invested as cushion before turning into a breakeven — that's meaningful margin of safety. Annualized ROI of 65–100% is competitive with or exceeding stock market returns on a 6-month basis, though with significantly more active management and execution risk. Deals in this range justify continued investment in the flip strategy.</p>
            </div>
          </div>

          <!-- Solid -->
          <div class="rounded-xl border-2 border-amber-200 overflow-hidden">
            <div class="px-4 py-3 text-white font-bold flex items-center justify-between" style="background: #F59E0B;">
              <span style="color: #1e3a5f;">20–29% ROI — Solid</span>
              <span class="text-sm font-normal opacity-80" style="color: #1e3a5f;">Annualized ROI: 45–65%</span>
            </div>
            <div class="p-4 bg-amber-50">
              <p class="text-sm text-gray-700 mb-2"><strong>Typical context:</strong> Standard 2026 MLS-sourced flips with hard money at market rates; moderate rehab scope; typical mid-tier US markets like Columbus, Nashville, or Charlotte.</p>
              <p class="text-sm text-gray-600 leading-relaxed">Market-average for 2026 hard-money flips with tight execution. Acceptable if the timeline is respected and the ARV is conservative. Annualized ROI of 45–65% looks strong in isolation, but the 20–25% total project ROI is thin enough that a single significant overrun — $10K rehab surprise, 2-month slip on timeline, $15K ARV miss — can push the deal into Weak territory. Always stress-test the Conservative scenario before committing. Solid-tier deals work well as portfolio-builder projects when volume compensates for thin individual margins.</p>
            </div>
          </div>

          <!-- Weak -->
          <div class="rounded-xl border-2 border-orange-200 overflow-hidden">
            <div class="px-4 py-3 text-white font-bold flex items-center justify-between" style="background: #F97316;">
              <span>10–19% ROI — Weak</span>
              <span class="text-sm font-normal opacity-90">Annualized ROI: 20–40%</span>
            </div>
            <div class="p-4 bg-orange-50">
              <p class="text-sm text-gray-700 mb-2"><strong>Typical context:</strong> Over-priced acquisitions; light rehabs in soft markets; conventional-financed flips with long hold periods; deals where the investor pushed the offer price to win.</p>
              <p class="text-sm text-gray-600 leading-relaxed">Below-market return where execution risk often exceeds the profit margin. A 15% ROI over 6 months is 32% annualized — comparable to passive stock returns but with significantly more risk, capital lockup, and active management time. The margin is thin enough that a 10% rehab overrun or one month of extra holding can eliminate the profit entirely. Consider whether the deal should be re-negotiated (lower offer or adjusted rehab scope) before committing. In 2026's rate environment, Weak-tier deals are common for first-time flippers who bid too aggressively — they generate positive ROI but don't compensate for execution risk.</p>
            </div>
          </div>

          <!-- Critical -->
          <div class="rounded-xl border-2 border-red-200 overflow-hidden">
            <div class="px-4 py-3 text-white font-bold flex items-center justify-between" style="background: #DC2626;">
              <span>0–9% ROI — Critical</span>
              <span class="text-sm font-normal opacity-90">Barely Positive</span>
            </div>
            <div class="p-4 bg-red-50">
              <p class="text-sm text-gray-700 mb-2"><strong>Typical context:</strong> Thin-margin deals; over-leveraged flips; long hold periods compressing ROI; markets with limited ARV upside or weak buyer demand.</p>
              <p class="text-sm text-gray-600 leading-relaxed">Barely positive — any overrun on rehab budget, timeline, or ARV produces a loss. Not worth the execution risk in 2026. Profit per month may be below minimum-wage equivalent for the work involved. Reconsider deal structure: re-negotiate the purchase price, find lower-cost financing, reduce rehab scope, or find a buyer who values the property differently. The Break-Even Sale Price will be very close to ARV, meaning any ARV miss produces a loss. These deals should generally be walked away from unless there is a specific non-financial reason to proceed (e.g., relationship preservation with a key wholesaler).</p>
            </div>
          </div>

          <!-- Loss -->
          <div class="rounded-xl border-2 border-red-300 overflow-hidden">
            <div class="px-4 py-3 text-white font-bold flex items-center justify-between" style="background: #7F1D1D;">
              <span>Below 0% ROI — Loss</span>
              <span class="text-sm font-normal opacity-90">Projected Loss</span>
            </div>
            <div class="p-4 bg-red-100">
              <p class="text-sm text-gray-700 mb-2"><strong>Typical context:</strong> Severely over-priced acquisitions; badly underestimated rehab scope; unrealistic ARV assumptions in soft markets; long holds with high financing costs.</p>
              <p class="text-sm text-gray-600 leading-relaxed">Projected loss — you lose money on the project. Do not proceed without major structural changes to the deal: significantly lower offer price, renegotiated rehab scope, cheaper financing, or a different exit strategy. Break-Even Sale Price will be above ARV, confirming the deal cannot profit at current projections. Tax benefits do NOT rescue a loss on a flip — you still lose real cash. If you're already under contract, explore wholesale assignment or renegotiation with the seller before closing. Loss-tier deals should be declined at the offer stage; if discovered after contract, consult a real estate attorney about exit options.</p>
            </div>
          </div>
        </div>

        <!-- 2026 Rate Context -->
        <div class="mt-6 p-5 rounded-xl bg-gray-50 border border-gray-200">
          <h3 class="font-bold text-gray-800 mb-3">Why 2026 flips look different from 2019</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Hard money rates rose from 8–10% in 2019 to 11–13% in 2026, adding 3–5 percentage points to financing costs on typical flips. ARV growth has slowed from 5–8% annually to 2–4% in most markets — meaning flips can no longer "appreciate into the money" during the rehab phase. Buyer demand has softened due to elevated mortgage rates (7.5–8% for buyers in 2026), extending time-on-market by 30–50% in many metros. Two concrete examples: (1) A Dallas flip sourced in 2019 at $150K with $40K rehab could exit at $260K in 6 months, producing 45% ROI; the same property in 2026 might exit at $235K in 9 months, producing 22% ROI. (2) Hard money that cost $8K total in 2019 now costs $14K on an identical deal size. These dynamics mean the 2026 market requires stricter deal selection — target 25%+ ROI minimum, verify ARV aggressively, and build conservative hold period buffers into every projection. Pair with the ARV Calculator to stress-test your exit assumption before committing capital.
          </p>
        </div>
      </section>

      <!-- ── SECTION 7: BENCHMARKS ── -->
      <section id="benchmarks" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Flip ROI by Market &amp; Type (2026, 6-Month Typical Hold)</h2>
        <p class="text-gray-600 mb-2">Typical 2026 flip ROI ranges for 6-month holds with hard money financing. Use as starting points — actual returns depend heavily on specific deal, market, and execution.</p>
        <p class="text-xs text-gray-400 mb-6">Industry-standard estimates based on 2026 hard money rates at 75–80% LTC — not market-reported flip statistics.</p>

        <h3 class="font-bold text-gray-800 mb-3">By Flip Type</h3>
        <div class="overflow-x-auto mb-8">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-gray-50">
                <th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">Flip Type</th>
                <th class="text-center py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">Conservative ROI</th>
                <th class="text-center py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">Typical ROI</th>
                <th class="text-center py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">Strong ROI</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr><td class="py-2.5 px-3 font-medium text-gray-800">SFR cosmetic flip</td><td class="py-2.5 px-3 text-center text-gray-600">10–18%</td><td class="py-2.5 px-3 text-center font-semibold text-amber-700">18–28%</td><td class="py-2.5 px-3 text-center text-emerald-700">28–40%</td></tr>
              <tr class="bg-gray-50"><td class="py-2.5 px-3 font-medium text-gray-800">SFR moderate flip</td><td class="py-2.5 px-3 text-center text-gray-600">15–22%</td><td class="py-2.5 px-3 text-center font-semibold text-amber-700">22–32%</td><td class="py-2.5 px-3 text-center text-emerald-700">32–45%</td></tr>
              <tr><td class="py-2.5 px-3 font-medium text-gray-800">SFR gut rehab</td><td class="py-2.5 px-3 text-center text-gray-600">18–28%</td><td class="py-2.5 px-3 text-center font-semibold text-amber-700">28–40%</td><td class="py-2.5 px-3 text-center text-emerald-700">40–55%</td></tr>
              <tr class="bg-gray-50"><td class="py-2.5 px-3 font-medium text-gray-800">Condo flip</td><td class="py-2.5 px-3 text-center text-gray-600">8–15%</td><td class="py-2.5 px-3 text-center font-semibold text-amber-700">15–22%</td><td class="py-2.5 px-3 text-center text-emerald-700">22–30%</td></tr>
              <tr><td class="py-2.5 px-3 font-medium text-gray-800">Townhouse flip</td><td class="py-2.5 px-3 text-center text-gray-600">10–18%</td><td class="py-2.5 px-3 text-center font-semibold text-amber-700">18–28%</td><td class="py-2.5 px-3 text-center text-emerald-700">28–38%</td></tr>
              <tr class="bg-gray-50"><td class="py-2.5 px-3 font-medium text-gray-800">Small multi-family flip</td><td class="py-2.5 px-3 text-center text-gray-600">12–20%</td><td class="py-2.5 px-3 text-center font-semibold text-amber-700">20–30%</td><td class="py-2.5 px-3 text-center text-emerald-700">30–42%</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-gray-500 mb-8">Gut rehabs carry higher execution risk but offer greater ARV upside. Condo flips are generally lower-margin due to HOA restrictions on renovation scope and slower buyer velocity.</p>

        <h3 class="font-bold text-gray-800 mb-4">By State — Typical Flip ROI (6-month hold, 2026)</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-gray-800">California (CA)</h4>
              <span class="text-sm font-semibold text-amber-700">15–30% ROI</span>
            </div>
            <p class="text-xs text-gray-500 mb-1"><strong>Key markets:</strong> Los Angeles, San Diego, Sacramento</p>
            <p class="text-xs text-gray-600 leading-relaxed">Factor 1: $500K+ entry prices compress percentage returns despite large dollar profits. Factor 2: Permit approval delays in LA and Bay Area add 2–3 months of holding costs, significantly compressing ROI on timeline-sensitive flips.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-gray-800">Texas (TX)</h4>
              <span class="text-sm font-semibold text-emerald-700">22–35% ROI</span>
            </div>
            <p class="text-xs text-gray-500 mb-1"><strong>Key markets:</strong> Dallas, Houston, San Antonio</p>
            <p class="text-xs text-gray-600 leading-relaxed">Factor 1: Entry prices of $150–250K for flip-candidate SFRs enable strong percentage returns on moderate rehab scopes. Factor 2: No state income tax on flip profits reduces the effective tax drag on take-home vs. most other states.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-gray-800">Florida (FL)</h4>
              <span class="text-sm font-semibold text-amber-700">18–30% ROI</span>
            </div>
            <p class="text-xs text-gray-500 mb-1"><strong>Key markets:</strong> Tampa, Orlando, Jacksonville</p>
            <p class="text-xs text-gray-600 leading-relaxed">Factor 1: Population inflow supports consistent ARV stability and buyer demand across most Florida metros. Factor 2: Hurricane insurance has tripled in many markets since 2020, adding $200–400 to monthly holding costs and materially compressing flip margins.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-gray-800">New York (NY)</h4>
              <span class="text-sm font-semibold text-orange-700">10–22% ROI</span>
            </div>
            <p class="text-xs text-gray-500 mb-1"><strong>Key markets:</strong> Buffalo, Rochester, Syracuse, NYC outer boroughs</p>
            <p class="text-xs text-gray-600 leading-relaxed">Factor 1: Permit fees in NYC metro run $5–15K on a typical flip, adding immediate cost pressure. Factor 2: Multi-unit properties face rent stabilization complications if tenants remain during rehab, limiting scope and increasing hold period.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-gray-800">Arizona (AZ)</h4>
              <span class="text-sm font-semibold text-emerald-700">18–32% ROI</span>
            </div>
            <p class="text-xs text-gray-500 mb-1"><strong>Key markets:</strong> Phoenix, Tucson, Tempe</p>
            <p class="text-xs text-gray-600 leading-relaxed">Factor 1: Population growth in Phoenix metro supports consistent buyer demand and ARV stability. Factor 2: Emerging insurance cost pressure from wildfire and extreme heat events is adding 5–10% to holding costs — a rising drag that didn't exist 5 years ago.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-gray-800">Georgia (GA)</h4>
              <span class="text-sm font-semibold text-emerald-700">20–32% ROI</span>
            </div>
            <p class="text-xs text-gray-500 mb-1"><strong>Key markets:</strong> Atlanta, Savannah, Augusta</p>
            <p class="text-xs text-gray-600 leading-relaxed">Factor 1: Atlanta metro has one of the fastest flip-market velocities in the Southeast, with median days-on-market 20–30% below national average for renovated SFRs. Factor 2: Non-union labor keeps rehab costs 10–15% below coastal markets, directly improving profit margin on moderate-scope projects.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-gray-800">Ohio (OH)</h4>
              <span class="text-sm font-semibold text-amber-700">15–28% ROI</span>
            </div>
            <p class="text-xs text-gray-500 mb-1"><strong>Key markets:</strong> Columbus, Cincinnati, Cleveland</p>
            <p class="text-xs text-gray-600 leading-relaxed">Factor 1: Entry prices of $100–180K enable smaller investors to enter the flip market with lower capital requirements and moderate absolute dollar profit. Factor 2: ARV growth has stagnated in Cleveland and parts of Cincinnati, requiring precise scope selection to maintain margins without the benefit of market appreciation.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-bold text-gray-800">Pennsylvania (PA)</h4>
              <span class="text-sm font-semibold text-amber-700">14–26% ROI</span>
            </div>
            <p class="text-xs text-gray-500 mb-1"><strong>Key markets:</strong> Philadelphia, Pittsburgh, Lancaster</p>
            <p class="text-xs text-gray-600 leading-relaxed">Factor 1: Older housing stock in PA often requires electrical, plumbing, and foundation updates that balloon rehab budgets beyond cosmetic estimates. Factor 2: Philadelphia metro shows stronger ARV growth than Pittsburgh, but both lag Sun Belt markets — making scope discipline and conservative ARV estimates especially critical in PA flips.</p>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-gray-50">
                <th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">State</th>
                <th class="text-center py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">Typical ROI</th>
                <th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">Key Markets</th>
                <th class="text-left py-2.5 px-3 font-semibold text-gray-500 border-b border-gray-200">Primary Factors</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr><td class="py-2.5 px-3 font-medium">California</td><td class="py-2.5 px-3 text-center text-amber-700 font-semibold">15–30%</td><td class="py-2.5 px-3 text-gray-600 text-xs">Los Angeles, San Diego, Sacramento</td><td class="py-2.5 px-3 text-gray-500 text-xs">High entry prices + permit delays</td></tr>
              <tr class="bg-gray-50"><td class="py-2.5 px-3 font-medium">Texas</td><td class="py-2.5 px-3 text-center text-emerald-700 font-semibold">22–35%</td><td class="py-2.5 px-3 text-gray-600 text-xs">Dallas, Houston, San Antonio</td><td class="py-2.5 px-3 text-gray-500 text-xs">Affordable entry + no state income tax</td></tr>
              <tr><td class="py-2.5 px-3 font-medium">Florida</td><td class="py-2.5 px-3 text-center text-amber-700 font-semibold">18–30%</td><td class="py-2.5 px-3 text-gray-600 text-xs">Tampa, Orlando, Jacksonville</td><td class="py-2.5 px-3 text-gray-500 text-xs">Population growth + rising insurance costs</td></tr>
              <tr class="bg-gray-50"><td class="py-2.5 px-3 font-medium">New York</td><td class="py-2.5 px-3 text-center text-orange-700 font-semibold">10–22%</td><td class="py-2.5 px-3 text-gray-600 text-xs">Buffalo, Rochester, NYC outer boroughs</td><td class="py-2.5 px-3 text-gray-500 text-xs">High permit costs + regulatory complexity</td></tr>
              <tr><td class="py-2.5 px-3 font-medium">Arizona</td><td class="py-2.5 px-3 text-center text-emerald-700 font-semibold">18–32%</td><td class="py-2.5 px-3 text-gray-600 text-xs">Phoenix, Tucson, Tempe</td><td class="py-2.5 px-3 text-gray-500 text-xs">Population growth + emerging insurance drag</td></tr>
              <tr class="bg-gray-50"><td class="py-2.5 px-3 font-medium">Georgia</td><td class="py-2.5 px-3 text-center text-emerald-700 font-semibold">20–32%</td><td class="py-2.5 px-3 text-gray-600 text-xs">Atlanta, Savannah, Augusta</td><td class="py-2.5 px-3 text-gray-500 text-xs">Atlanta velocity + affordable labor</td></tr>
              <tr><td class="py-2.5 px-3 font-medium">Ohio</td><td class="py-2.5 px-3 text-center text-amber-700 font-semibold">15–28%</td><td class="py-2.5 px-3 text-gray-600 text-xs">Columbus, Cincinnati, Cleveland</td><td class="py-2.5 px-3 text-gray-500 text-xs">Low entry prices + stagnant ARV submarkets</td></tr>
              <tr class="bg-gray-50"><td class="py-2.5 px-3 font-medium">Pennsylvania</td><td class="py-2.5 px-3 text-center text-amber-700 font-semibold">14–26%</td><td class="py-2.5 px-3 text-gray-600 text-xs">Philadelphia, Pittsburgh, Lancaster</td><td class="py-2.5 px-3 text-gray-500 text-xs">Aging housing stock + metro variance</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-gray-400 mt-3">These flip ROI ranges are synthesized from BiggerPockets flip deal analyses, Fortune Builders case studies, Kiavi and hard money lender underwriting data, and 2026 market rate surveys. Flip ROI is not directly reported as a market statistic — these ranges are derived from typical acquisition discounts, rehab costs, financing costs, and ARV outcomes. Always verify with current local data. Not market-reported figures.</p>
      </section>

      <!-- ── SECTION 8: STRATEGY ── -->
      <section id="strategy" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Fix and Flip Strategy — When Profit and ROI Matter Most</h2>
        <p class="text-gray-600 mb-6">How the Fix and Flip Calculator supports different flip investment approaches.</p>

        <div class="space-y-6">
          <div class="p-5 rounded-xl border border-gray-200 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-3 py-1 rounded-full text-xs font-bold text-white" style="background: #1e3a5f;">First-Time Flipper</span>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed mb-3">For investors evaluating their first flip project, the calculator answers the core question: will I make money on this deal? Focus on three critical outputs: the 70% Rule indicator (within rule = built-in margin; outside = need strong justification), the Break-Even Sale Price (should have at least $15K cushion below ARV), and Profit per Month (compare to your local opportunity cost and wage equivalent). If all three are acceptable, the deal has the basic math to proceed to deeper due diligence.</p>
            <p class="text-sm text-gray-600 leading-relaxed">Practical guidance for first-time flippers: aim for ROI in the Solid tier or better (20%+); verify ARV with multiple comp sources and a BPO before making any offer; build 15% rehab contingency minimum into every estimate; confirm your hard money lender's terms and pre-approval before making offers — hard money moves fast but also closes fast when deals are sourced.</p>
          </div>

          <div class="p-5 rounded-xl border border-gray-200 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-3 py-1 rounded-full text-xs font-bold text-white" style="background: #1e3a5f;">Wholesaler</span>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed mb-3">Wholesalers use the calculator to verify whether deals meet the 70% Rule before assigning to end buyers. Quick check: Purchase Price (including your assignment fee) should be at or below the 70% Rule Max Offer. If the total acquisition cost is within the rule and has a $30K+ Break-Even cushion, the assignment fee is supported by solid deal math that end-buyer flippers will accept.</p>
            <p class="text-sm text-gray-600 leading-relaxed">Pro tip: run the calculator with the END BUYER's expected financing (hard money at 12%, 3 points, 80% LTC) to show them realistic flip outcomes from their perspective. If the total acquisition cost plus your assignment fee still shows Solid-tier ROI (20%+) for the buyer, the deal sells itself without price negotiation.</p>
          </div>

          <div class="p-5 rounded-xl border border-gray-200 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-3 py-1 rounded-full text-xs font-bold text-white" style="background: #1e3a5f;">Experienced Rehabber</span>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed mb-3">Experienced flippers running 5–20 projects annually use the calculator to rank deal opportunities. Run all active candidates with identical financing assumptions (same HM rate, same points, same LTC) and compare ROI side-by-side. In the 2026 rate environment, filter out anything below 25% ROI as a baseline rule — the execution risk and capital commitment at 15–20% ROI is rarely worth it when stronger deals are available with proper sourcing.</p>
            <p class="text-sm text-gray-600 leading-relaxed">Advanced use: build scenario analysis into your deal review workflow. Conservative / Base / Optimistic across three scenarios tells you whether the deal depends on perfect execution or has meaningful buffer. Deals where the Conservative scenario still shows 15%+ ROI are lower-risk investments; deals where Conservative goes negative are high-dependency bets that should be avoided unless the upside is exceptional.</p>
          </div>

          <div class="p-5 rounded-xl border border-gray-200 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-3 py-1 rounded-full text-xs font-bold text-white" style="background: #059669;">All-Cash Flipper</span>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed mb-3">All-cash flippers avoid financing costs entirely but tie up capital at 100%. The calculator's All Cash mode shows true ROI without loan interest or points distortion. Cash flips often show higher ROI than financed equivalents on the same deal because there's no interest drag — but the dollar profit is similar, and the cash commitment is 4–5× higher than a financed deal with 20% down.</p>
            <p class="text-sm text-gray-600 leading-relaxed">Important caveat: All-Cash ROI is NOT directly comparable to Financed ROI as a measure of deal quality. A $100K all-cash flip with 25% ROI earned $25K profit on $100K invested. A financed flip with 25% ROI on $30K invested earned only $7,500 in absolute dollars. For capital deployment decisions, focus on dollar profit per project for cash investors, and ROI for leveraged investors who can replicate the 20% cash commitment across multiple deals simultaneously.</p>
          </div>

          <div class="p-5 rounded-xl border border-gray-200 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">Deal Comparison</span>
            </div>
            <h3 class="font-bold text-gray-800 mb-2">Using Fix and Flip Calculator to Compare Two Properties</h3>
            <p class="text-sm text-gray-700 leading-relaxed">The best use of this calculator is running two flip candidates side-by-side with identical financing, hold period, and holding cost assumptions. Higher Total Profit OR higher ROI wins. When they split — one has higher dollar profit but lower ROI, the other has lower profit but higher ROI — consider your capital deployment context: ROI optimization favors smaller deals where you want to maximize return per dollar deployed, while Profit optimization favors larger deals where absolute wealth creation matters more than percentage. Experienced flippers typically optimize ROI on smaller deals (under $250K purchase) and Total Profit on larger deals (over $400K), where execution risk is higher and margin requirements differ.</p>
          </div>
        </div>
      </section>

      <!-- ── SECTION 9: APPLICATIONS ── -->
      <section id="applications" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Applications of Fix and Flip Analysis</h2>
        <p class="text-gray-600 mb-6">Six concrete ways investors use the Fix and Flip Calculator in their deal workflow.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl border border-gray-200 bg-gray-50">
            <h3 class="font-bold text-gray-800 mb-2">1. First-Deal Screening</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Is this flip worth pursuing? A quick 3-minute analysis with purchase price, ARV, rehab budget, and financing gives a go/no-go before spending hours on contractor walkthroughs, lender prep, and title work. The 70% Rule indicator and Break-Even cushion provide the two-number gut check most experienced investors use before committing time.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-200 bg-gray-50">
            <h3 class="font-bold text-gray-800 mb-2">2. Offer Price Construction</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Use Find Max Purchase Price mode to determine your maximum offer ceiling. Set target ROI (e.g., 25% minimum), enter ARV and rehab budget, and the calculator binary-searches for the exact maximum purchase price that still hits your return threshold. Makes you competitive on price while staying within your return criteria — no guesswork required.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-200 bg-gray-50">
            <h3 class="font-bold text-gray-800 mb-2">3. 70% Rule Compliance Check</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Wholesalers and first-time flippers use the 70% Rule indicator to screen deals before deeper analysis. Within rule = proceed to detailed due diligence; outside rule = need strong market-specific or deal-specific justification. The indicator shows the exact dollar amount of the maximum rule-compliant offer for immediate comparison against the asking price.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-200 bg-gray-50">
            <h3 class="font-bold text-gray-800 mb-2">4. Financing Option Comparison</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Toggle between Hard Money, Conventional, and All Cash modes on the same deal. See exactly how financing choice impacts profit, ROI, and total cash required. Often reveals that the all-cash vs. hard money comparison is much closer than expected — hard money adds interest cost but frees cash for additional deals, and the opportunity cost of capital matters.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-200 bg-gray-50">
            <h3 class="font-bold text-gray-800 mb-2">5. Rehab Scope Budgeting</h3>
            <p class="text-sm text-gray-600 leading-relaxed">Use Find Max Rehab Budget mode to calculate the absolute ceiling on rehab spend that still hits your target ROI. Helps contractor negotiations: "we can spend up to $X on this scope and still hit our target return." Prevents scope creep from eroding margins — particularly valuable when contractors propose upgrades that feel reasonable in isolation but collectively push the project past viability.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-200 bg-gray-50">
            <h3 class="font-bold text-gray-800 mb-2">6. Investor Memorandum Prep</h3>
            <p class="text-sm text-gray-600 leading-relaxed">For partnered or syndicated flip projects, Total Profit, ROI, and Break-Even Sale Price are the three numbers partners and private lenders ask for first. Export PDF to include as an exhibit in partnership pitches, private money lender packages, or JV proposals. The three-scenario analysis (Conservative / Base / Optimistic) demonstrates professional underwriting discipline to capital partners.</p>
          </div>
        </div>
      </section>

      <!-- ── SECTION 10: INDUSTRY STANDARDS ── -->
      <section id="industry-standards" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Industry Standards &amp; Professional Methodologies</h2>
        <p class="text-gray-600 mb-6">How Total Profit, ROI, and the 70% Rule fit into established flip investment frameworks.</p>

        <div class="space-y-6">
          <div class="p-5 rounded-xl border border-gray-200">
            <h3 class="font-bold text-gray-800 mb-3">The 70% Rule (Industry Foundation)</h3>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-amber-500 font-bold flex-shrink-0">•</span>
                70% Rule Max Offer = ARV × 0.70 − Rehab Budget — used across BiggerPockets, Fortune Builders, and virtually all flip education platforms as the standard go/no-go heuristic.
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-amber-500 font-bold flex-shrink-0">•</span>
                The rule provides a 30% buffer that covers profit, financing costs, and execution risk — this buffer is critical at 2026 hard money rates where financing alone can consume 8–12% of project cost.
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-amber-500 font-bold flex-shrink-0">•</span>
                Deals within the 70% Rule have high probability of Solid-tier or better ROI outcomes (20%+) given realistic 2026 financing costs and execution timelines.
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-amber-500 font-bold flex-shrink-0">•</span>
                Deals outside the rule require strong justification: hot appreciation market (5%+ ARV growth during hold), extremely light rehab scope (under 15% of ARV), or a confirmed sub-4-month flip timeline where holding costs are minimal.
              </li>
            </ul>
          </div>

          <div class="p-5 rounded-xl border border-gray-200">
            <h3 class="font-bold text-gray-800 mb-3">Hard Money Underwriting (Kiavi, LendingOne, local lenders)</h3>
            <p class="text-sm text-gray-600 mb-3">Hard money lenders evaluate flip deals primarily on ARV (after-repair value) rather than borrower income or credit — making them accessible for investors who can't qualify for conventional investment loans but have solid deal-finding skills.</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-amber-500 font-bold flex-shrink-0">•</span>
                Hard money lenders underwrite based on ARV — typically 65–75% of ARV as maximum loan (LTV), ensuring the lender is secured even in a distressed sale scenario.
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-amber-500 font-bold flex-shrink-0">•</span>
                Loan-to-Cost (LTC) typically 80–90% covering both purchase and rehab for experienced flippers with track records; first-time flippers may receive 70–75% LTC with lower max loan amounts.
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-amber-500 font-bold flex-shrink-0">•</span>
                Points of 2–4% upfront plus 10–14% annual interest are standard 2026 pricing; some lenders offer no-points at higher rates, or lower rates for borrowers with established track records.
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-amber-500 font-bold flex-shrink-0">•</span>
                Lender approval typically aligns with Solid-tier or better deals — loans on Weak or Critical-tier deals are denied or re-priced at higher points, providing a market-level validation of deal quality.
              </li>
            </ul>
          </div>

          <div class="p-5 rounded-xl border border-gray-200">
            <h3 class="font-bold text-gray-800 mb-3">Flipper Professional Benchmarks</h3>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-amber-500 font-bold flex-shrink-0">•</span>
                Professional flippers target 20–35% ROI per project in the 2026 rate environment — down from 30–50% targets common in 2015–2019 when HM rates were 8–10%.
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-amber-500 font-bold flex-shrink-0">•</span>
                High-volume flippers (20+ projects per year) accept lower per-project ROI (15–20%) in exchange for volume deployment and established systems — their advantage is velocity, not margin per deal.
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-amber-500 font-bold flex-shrink-0">•</span>
                Boutique value-add flippers target 35%+ ROI with larger scope and longer holds — they take on more execution risk in exchange for higher single-project returns on fewer deals per year.
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-amber-500 font-bold flex-shrink-0">•</span>
                <strong>Flip profit is typically taxed as ordinary income (25–37% marginal rate)</strong> — not capital gains — because the IRS views regular flippers as dealers in real estate. This is a critical distinction vs. long-term rental investing.
              </li>
              <li class="flex items-start gap-2 text-sm text-gray-700">
                <span class="text-amber-500 font-bold flex-shrink-0">•</span>
                After-tax flip ROI runs 30–45% below before-tax ROI for most investors in 2026 — factor this into comparisons with passive investments that receive capital gains treatment.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ── SECTION 11: LIMITATIONS ── -->
      <section id="limitations" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Limitations of Fix and Flip Calculator</h2>
        <p class="text-gray-600 mb-6">Fix and Flip Calculator is the most complete single tool for flip deal analysis, but it has deliberate scope limits you should understand.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="p-4 rounded-xl border border-orange-200 bg-orange-50">
            <h3 class="font-bold text-orange-800 mb-2">Before-Tax Analysis Only (v1)</h3>
            <p class="text-sm text-orange-700 leading-relaxed">This calculator does not model ordinary income tax on flip profits. Most flip profits are taxed as ordinary income at 25–37% marginal rates — actual take-home is meaningfully lower than the displayed Total Profit. State income tax adds an additional 0–13% depending on state (Texas and Florida have no state income tax; California can add 13%). For a $30K profit at 30% marginal rate, tax takes $9K — leaving $21K net. Consult a CPA for tax-optimized flip structure.</p>
          </div>
          <div class="p-4 rounded-xl border border-orange-200 bg-orange-50">
            <h3 class="font-bold text-orange-800 mb-2">ARV Is Your Responsibility</h3>
            <p class="text-sm text-orange-700 leading-relaxed">The calculator uses your ARV input directly without validation. ARV accuracy is the single biggest risk factor in flip analysis — an optimistic ARV of $280K that comes in at $255K at sale can eliminate the entire projected profit on a thin-margin flip. Always verify ARV with 3+ active MLS comps (not pending or sold 6+ months ago), a Broker Price Opinion (BPO), or a pre-rehab appraisal. Conservative ARV estimates — reduce comp-derived estimate by 5–10% — produce more reliable outcomes.</p>
          </div>
          <div class="p-4 rounded-xl border border-orange-200 bg-orange-50">
            <h3 class="font-bold text-orange-800 mb-2">Does Not Model Timeline Overruns</h3>
            <p class="text-sm text-orange-700 leading-relaxed">The calculator uses your Hold Period and Rehab Duration as entered. Reality: research consistently shows 60–70% of flip projects run 1–3 months over timeline on first and second projects. Each extra month adds loan interest ($1,000–2,000/mo on a typical deal), holding costs ($400–800/mo), and carries market risk if buyer appetite softens. Always stress-test the Conservative scenario with Hold Period plus 2 months before committing capital to any deal.</p>
          </div>
          <div class="p-4 rounded-xl border border-orange-200 bg-orange-50">
            <h3 class="font-bold text-orange-800 mb-2">Does Not Include Detailed Rehab Scope</h3>
            <p class="text-sm text-orange-700 leading-relaxed">Rehab is entered as a single dollar figure plus contingency. The calculator does not model line-item scope (electrical vs. plumbing vs. cosmetic) or permit sequencing (permit-pulled work causes delays that no-permit cosmetic work avoids). For detailed scope-of-work analysis, use a dedicated rehab estimator or contractor bid system. This calculator is designed for deal-level go/no-go analysis — not construction management or detailed cost tracking.</p>
          </div>
        </div>

        <div>
          <h3 class="font-bold text-gray-800 mb-3">When Not to Use This Calculator</h3>
          <ul class="space-y-2">
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <span class="text-red-400 font-bold flex-shrink-0">✗</span>
              <span><strong>Buy and hold rentals:</strong> Use the Rental Property Calculator for multi-year cash flow, appreciation compounding, and Total Return analysis — fundamentally different math.</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <span class="text-red-400 font-bold flex-shrink-0">✗</span>
              <span><strong>BRRRR deals:</strong> Use a dedicated BRRRR Calculator — the refinance event creates two separate profit calculations (pre-refinance flip phase plus post-refinance rental hold) that this tool doesn't model.</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <span class="text-red-400 font-bold flex-shrink-0">✗</span>
              <span><strong>Wholesale-only deals (no rehab):</strong> Contract assignment without renovation involves different economics — no rehab cost, no holding period, no financing — use a dedicated wholesale calculator.</span>
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <span class="text-red-400 font-bold flex-shrink-0">✗</span>
              <span><strong>New construction and development:</strong> Ground-up development has fundamentally different cost structures, timelines, and risk profiles — use construction-specific pro forma tools.</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- ── SECTION 12: COMMON MISTAKES ── -->
      <section id="common-mistakes" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Common Mistakes When Calculating Flip Profit</h2>
        <p class="text-gray-600 mb-6">Five mistakes that consistently cause first-time flippers to over-estimate ROI and under-estimate risk.</p>

        <div class="space-y-4">
          <div class="flex gap-4 p-4 rounded-xl border border-gray-200">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm bg-red-500">1</div>
            <div>
              <h3 class="font-bold text-gray-800 mb-1">Using optimistic ARV without comp verification</h3>
              <p class="text-sm text-gray-600 leading-relaxed">First-time flippers commonly enter ARV based on the seller's estimate, the wholesaler's pitch, or gut feel from a single drive-by. Professional flippers verify ARV with 3+ active comps within the past 90 days, a BPO from a licensed broker, or a pre-rehab appraisal. An optimistic $10K ARV miss can eliminate 30–50% of projected profit on a thin-margin flip — and a $25K miss can turn a projected $20K profit into a $5K loss.</p>
            </div>
          </div>

          <div class="flex gap-4 p-4 rounded-xl border border-gray-200">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm bg-red-500">2</div>
            <div>
              <h3 class="font-bold text-gray-800 mb-1">Forgetting holding costs in the ROI calculation</h3>
              <p class="text-sm text-gray-600 leading-relaxed">Many flip calculators and spreadsheets treat holding costs as a "reserve" that is tracked separately but not deducted from ROI. In this calculator, Total Holding Costs are counted in Total Cash Invested because the investor writes a check for them every single month — they are real cash outflows, not theoretical reserves. A 6-month flip with $700 monthly holding costs has $4,200 in real outflow. Excluding these from ROI calculation is the most common source of inflated flip ROI projections.</p>
            </div>
          </div>

          <div class="flex gap-4 p-4 rounded-xl border border-gray-200">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm bg-red-500">3</div>
            <div>
              <h3 class="font-bold text-gray-800 mb-1">Underestimating rehab budget and contingency</h3>
              <p class="text-sm text-gray-600 leading-relaxed">First-time flippers consistently underestimate rehab budget by 15–25% on their first few projects. Standard rehabs reveal unexpected issues: discovered rot behind walls, aluminum wiring that must be updated for insurance, permit requirements that trigger additional scope, supply chain delays that extend timelines. A 5% contingency is completely insufficient; 10–15% is the industry standard for exactly these reasons. If your contractor gives a bid of $40K, plan on $44–48K as your actual working budget.</p>
            </div>
          </div>

          <div class="flex gap-4 p-4 rounded-xl border border-gray-200">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm bg-red-500">4</div>
            <div>
              <h3 class="font-bold text-gray-800 mb-1">Ignoring hard money points and interest in ROI</h3>
              <p class="text-sm text-gray-600 leading-relaxed">Hard money points (2–4% upfront) plus monthly interest (10–14% annualized, interest-only) can add 8–12% to total project cost on a typical 6-month flip. Many investors focus only on the interest rate but forget that points are paid upfront at closing — reducing the cash available for rehab draws. On a $150K loan with 3 points at 12% for 6 months: points = $4,500 (paid at closing) + interest = $9,000 (paid monthly) = $13,500 total financing cost. Always include both points and total interest in your Total Cash Invested calculation.</p>
            </div>
          </div>

          <div class="flex gap-4 p-4 rounded-xl border border-gray-200">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm bg-red-500">5</div>
            <div>
              <h3 class="font-bold text-gray-800 mb-1">Treating before-tax ROI as take-home profit</h3>
              <p class="text-sm text-gray-600 leading-relaxed">A 30% before-tax ROI on a flip translates to approximately 18–22% after ordinary income tax for most investors in the 25–32% marginal bracket. Flips held under one year do not qualify for long-term capital gains rates — they are taxed as ordinary income because the IRS views regular flippers as real estate dealers. A $40K before-tax profit becomes $27–30K after federal taxes alone, before state income tax. Always mentally discount the displayed ROI by your effective marginal tax rate when comparing to long-term investments that receive capital gains treatment (15–20% rates for most taxpayers).</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── SECTION 13: FAQ ── -->
      <section id="faq" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions</h2>

        <div class="space-y-4">
          <div v-for="(q, i) in faqs" :key="i" class="border border-gray-200 rounded-xl overflow-hidden">
            <button @click="openFaq === i ? openFaq = null : openFaq = i"
              class="w-full flex items-center justify-between px-5 py-4 text-left font-bold text-gray-800 hover:bg-gray-50 transition">
              <span class="text-sm pr-4">{{ q.q }}</span>
              <svg class="w-5 h-5 flex-shrink-0 transition-transform" :class="openFaq === i ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="openFaq === i" class="px-5 pb-4">
              <p class="text-sm text-gray-600 leading-relaxed">{{ q.a }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── SECTION 14: RELATED CALCULATORS ── -->
      <section id="related-calculators" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Related Calculators</h2>
        <p class="text-gray-600 mb-6">Compare flip strategy to alternative investment approaches or dig deeper into specific components.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NuxtLink to="/rental-property-calculator" class="p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-sm transition group">
            <h3 class="font-bold text-gray-800 group-hover:text-yellow-700 transition mb-1">Rental Property Calculator</h3>
            <p class="text-sm text-gray-500">Multi-year cash flow, appreciation, and Total Return for buy-and-hold strategy. Use when comparing flip vs. long-term hold on the same property.</p>
          </NuxtLink>
          <NuxtLink to="/arv-calculator" class="p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-sm transition group">
            <h3 class="font-bold text-gray-800 group-hover:text-yellow-700 transition mb-1">ARV Calculator</h3>
            <p class="text-sm text-gray-500">Calculate After Repair Value from comparable sales. The companion tool for ARV confidence — verify your ARV before entering it into the flip calculator.</p>
          </NuxtLink>
          <NuxtLink to="/cap-rate-calculator" class="p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-sm transition group">
            <h3 class="font-bold text-gray-800 group-hover:text-yellow-700 transition mb-1">Cap Rate Calculator</h3>
            <p class="text-sm text-gray-500">Income property valuation via NOI and capitalization rate. Use to evaluate whether the flipped property would perform as a rental if the flip exit doesn't materialize.</p>
          </NuxtLink>
          <NuxtLink to="/dscr-calculator" class="p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-sm transition group">
            <h3 class="font-bold text-gray-800 group-hover:text-yellow-700 transition mb-1">DSCR Calculator</h3>
            <p class="text-sm text-gray-500">Debt Service Coverage Ratio for investor loans. Use when your flip buyer plans to finance the renovated property — understanding their DSCR helps you set realistic ARV expectations.</p>
          </NuxtLink>
        </div>
      </section>

    </div><!-- end SEO sections -->

    <!-- ═══════════════════════════════════════════════
         FOOTER
    ═══════════════════════════════════════════════ -->
    <footer class="bg-white border-t border-gray-200 mt-8">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background: #1e3a5f;">
                <span class="text-white font-extrabold text-base leading-none">RC</span>
              </div>
              <span class="font-extrabold text-lg" style="color: #1e3a5f;">RealCalc</span>
            </div>
            <p class="text-sm text-gray-500 leading-relaxed">Professional real estate investment calculators for US investors. Free, accurate, and constantly updated for current market conditions.</p>
          </div>
          <div>
            <h4 class="font-bold text-gray-700 mb-3">Calculators</h4>
            <ul class="space-y-1.5 text-sm text-gray-500">
              <li><NuxtLink to="/cap-rate-calculator" class="hover:text-gray-700 transition">Cap Rate Calculator</NuxtLink></li>
              <li><NuxtLink to="/noi-calculator" class="hover:text-gray-700 transition">NOI Calculator</NuxtLink></li>
              <li><NuxtLink to="/cash-on-cash-calculator" class="hover:text-gray-700 transition">Cash-on-Cash Calculator</NuxtLink></li>
              <li><NuxtLink to="/dscr-calculator" class="hover:text-gray-700 transition">DSCR Calculator</NuxtLink></li>
              <li><NuxtLink to="/rental-property-calculator" class="hover:text-gray-700 transition">Rental Property Calculator</NuxtLink></li>
              <li><NuxtLink to="/fix-and-flip-calculator" class="hover:text-gray-700 transition">Fix and Flip Calculator</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-gray-700 mb-3">Company</h4>
            <ul class="space-y-1.5 text-sm text-gray-500">
              <li><NuxtLink to="/about" class="hover:text-gray-700 transition">About</NuxtLink></li>
              <li><NuxtLink to="/pricing" class="hover:text-gray-700 transition">Pricing</NuxtLink></li>
              <li><NuxtLink to="/blog" class="hover:text-gray-700 transition">Blog</NuxtLink></li>
              <li><NuxtLink to="/privacy" class="hover:text-gray-700 transition">Privacy Policy</NuxtLink></li>
              <li><NuxtLink to="/terms" class="hover:text-gray-700 transition">Terms of Service</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-xs text-gray-400">© 2026 RealCalc. For informational purposes only. Before-tax analysis. Consult qualified professionals before investing.</p>
          <p class="text-xs text-gray-400">Built for US real estate investors.</p>
        </div>
      </div>
    </footer>

    <!-- Email Capture Modal -->
    <EmailCaptureModal
      :show="showEmailModal"
      :calculator-name="'Fix and Flip Calculator'"
      :primary-result="hasResult ? formatCurrency(result.totalProfit) + ' profit / ' + result.roi.toFixed(1) + '% ROI' : undefined"
      title="Save Your Fix &amp; Flip Analysis"
      subtitle="Get market benchmarks, deal templates, and calculator updates."
      cta-label="Save &amp; Get Free Updates"
      @close="showEmailModal = false"
      @captured="onEmailCaptured"
    />

  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, nextTick } from 'vue'

// ─────────────────────────────────────────
// 1. SEO HEAD
// ─────────────────────────────────────────
useHead({
  title: 'Fix and Flip Calculator — Profit & ROI | RealCalc',
  meta: [
    { name: 'description', content: 'Calculate fix and flip profit, ROI, and 70% Rule max offer for any US property. Free 2026 calculator with hard money, conventional, and all-cash scenarios. Before-tax analysis.' },
    { property: 'og:title', content: 'Fix and Flip Calculator — Profit & ROI | RealCalc' },
    { property: 'og:description', content: 'Project Total Profit and ROI for any US flip project. Hard money default, 70% Rule indicator, Break-Even price, scenario analysis, and PDF export.' },
    { property: 'og:type', content: 'website' },
    { name: 'keywords', content: 'fix and flip calculator, house flipping calculator, flip profit calculator, fix and flip roi calculator, real estate flip calculator, 70 percent rule, hard money calculator, after repair value calculator' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'SoftwareApplication',
            name: 'Fix and Flip Calculator',
            description: 'Calculate fix and flip profit, ROI, 70% Rule max offer, and Break-Even sale price for US real estate flip projects with hard money, conventional, or all-cash financing.',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web',
            url: 'https://realcalc.com/fix-and-flip-calculator',
            featureList: 'Total Profit calculation, ROI analysis, 70% Rule Max Offer, Break-Even Sale Price, Annualized ROI, hard money/conventional/cash financing modes, 3 calculation modes, 3 sensitivity tables, project timeline, scenario analysis, PDF export, 6-tier ROI benchmarking',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What is a good ROI for a flip in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'In 2026, with hard money rates at 11–14%, a good flip ROI for a 6-month hold is 20–29% (Solid tier, market-average), 30–49% (Strong), or 50%+ (Exceptional). Target at least 25% ROI to justify execution risk. Below 15% ROI is generally not worth the time and capital in the 2026 rate environment. These are before-tax figures — actual take-home is lower after ordinary income taxes at 25–37% marginal rates.' } },
              { '@type': 'Question', name: 'What is the 70% Rule in house flipping?', acceptedAnswer: { '@type': 'Answer', text: 'The 70% Rule states that your maximum safe offer should be: ARV × 0.70 minus Rehab Budget. For example, if ARV is $280K and rehab is $45K, the 70% Rule max offer is ($280K × 0.70) − $45K = $151K. The rule builds in a 30% buffer covering profit, financing costs, and execution risk. Deals within the rule (offer at or below the max) typically produce Solid ROI or better in 2026 market conditions.' } },
              { '@type': 'Question', name: 'How do I calculate flip profit and ROI?', acceptedAnswer: { '@type': 'Answer', text: 'Total Profit = Net Sale Proceeds − Total Cash Invested. ROI = (Total Profit ÷ Total Cash Invested) × 100. Example: invest $50K cash total, receive $65K net after all sale costs and loan payoff → Total Profit $15K → ROI 30%. Total Cash Invested includes your down payment, closing costs, rehab (if not financed), holding costs, loan points, and loan interest — all actual cash outflows.' } },
              { '@type': 'Question', name: 'Should I use hard money or cash for a flip?', acceptedAnswer: { '@type': 'Answer', text: 'Hard money lets you deploy smaller capital per deal (typically 20% down) but adds 8–12% in points and interest over a 6-month project. Cash has no financing cost but ties up 100% of capital. Hard money is standard for investors running multiple projects simultaneously — the leverage multiplies deal volume. Cash is better for investors with limited deal flow or conservative risk tolerance. Run the calculator in both modes to see the exact dollar difference for your specific deal.' } },
              { '@type': 'Question', name: 'How long should a typical flip take?', acceptedAnswer: { '@type': 'Answer', text: 'Typical 2026 flips run 5–8 months total: 2–4 months of active rehab plus 2–4 months on market. Cosmetic flips (paint, flooring, fixtures) can complete in 3–4 months. Gut rehabs typically run 6–10 months due to permitting, structural work, and MEP systems. Every extra month adds loan interest ($1,000–2,000/mo) and holding costs ($400–800/mo) — a flip that runs 3 months over budget can lose 8–15% of projected ROI entirely from carrying costs.' } },
              { '@type': 'Question', name: 'Is flip profit taxed as capital gains or ordinary income?', acceptedAnswer: { '@type': 'Answer', text: 'Flip profits are typically taxed as ordinary income (25–37% marginal rates in 2026), not capital gains. The IRS views investors who regularly flip properties as dealers in real estate — not investors — especially when flipping is a regular business activity. Only properties genuinely held as investments for 1+ year may qualify for long-term capital gains rates (15–20%). The calculator shows before-tax results; always discount by your marginal tax rate when planning actual take-home returns. Consult a CPA for your specific situation.' } },
              { '@type': 'Question', name: 'What is ARV and why does it matter so much?', acceptedAnswer: { '@type': 'Answer', text: 'ARV (After Repair Value) is the projected market value of the property after your renovation is fully complete. It is the single most important input in flip analysis because it determines the exit value — and every dollar of ARV error flows directly to the profit line. A $10K ARV miss on a thin-margin deal can eliminate the entire projected profit. Always verify ARV with 3+ active MLS comps (recent, within your target buyer pool), a Broker Price Opinion (BPO), or a pre-rehab appraisal. Conservative ARV estimates — 5–10% below the optimistic comp-derived number — produce the most reliable outcomes.' } },
              { '@type': 'Question', name: 'Can I use this calculator for BRRRR or wholesale deals?', acceptedAnswer: { '@type': 'Answer', text: 'Partially. For BRRRR, this calculator models the pre-refinance stage (purchase + rehab + stabilize) but not the refinance event itself — a dedicated BRRRR Calculator handles the refinance separately and calculates the remaining equity and cash-out proceeds. For pure wholesale deals (contract assignment without renovation), this calculator\'s math doesn\'t apply — there\'s no hold period, no rehab, and no financing cost structure. For deals where you\'re choosing between flip and rental hold strategies, run both this calculator and the Rental Property Calculator on the same property to compare strategies.' } }
            ]
          }
        ]
      })
    }
  ]
})

// ─────────────────────────────────────────
// 2. REACTIVE STATE
// ─────────────────────────────────────────
const calcMode = ref('analyze')
const isNavExpanded = ref(false)
const openFaq = ref(null)
const shareSuccess = ref(false)
const showEmailModal = ref(false)
const triggerScenarioSave = ref(false)

const form = reactive({
  purchasePrice: '',
  propertyType: 'SFR',
  arv: '',
  arvConfidence: 'Realistic',
  purchaseClosingCostsMode: 'pct',
  purchaseClosingCostsPct: '3',
  purchaseClosingCostsDollars: '',
  rehabBudget: '',
  rehabContingencyPct: '10',
  rehabDurationMonths: '3',
  holdPeriodMonths: '6',
  holdingMode: 'simple',
  totalMonthlyHoldingSimple: '',
  holdingCosts: {
    propertyTax: '',
    insurance: '',
    utilities: '',
    hoa: '',
    other: ''
  },
  financingType: 'hm',
  hmLoanToCostPct: '80',
  hmInterestRate: '12',
  hmPointsPct: '3',
  hmLoanCoversRehab: true,
  convDownPaymentPct: '25',
  convInterestRate: '7.5',
  convLoanTermYears: '30',
  saleCostsPct: '8',
  targetTotalProfit: '',
  targetROI: '',
  reverseTargetMode: 'roi'
})

// ─────────────────────────────────────────
// 3. FIELD CONFIGS
// ─────────────────────────────────────────
const holdingDetailFields = [
  { key: 'propertyTax', label: 'Property Tax (monthly)', placeholder: 'Enter monthly property tax' },
  { key: 'insurance', label: 'Insurance (monthly)', placeholder: 'Enter monthly insurance' },
  { key: 'utilities', label: 'Utilities (monthly)', placeholder: 'Enter monthly utilities' },
  { key: 'hoa', label: 'HOA (monthly)', placeholder: 'Enter monthly HOA' },
  { key: 'other', label: 'Other (monthly)', placeholder: 'Enter other monthly costs' }
]

const faqs = [
  {
    q: 'What is a good ROI for a flip in 2026?',
    a: 'In 2026, with hard money rates at 11–14%, a good flip ROI for a 6-month hold is 20–29% (Solid — market-average), 30–49% (Strong — above average), or 50%+ (Exceptional). Target at least 25% ROI minimum to justify execution risk in the current rate environment. Below 15% ROI is generally not worth the time and capital commitment. These are before-tax figures — actual take-home is lower after ordinary income taxes at 25–37% marginal rates.'
  },
  {
    q: 'What is the 70% Rule in house flipping?',
    a: 'The 70% Rule is the industry heuristic for maximum safe offer price on a flip. Formula: Max Offer = ARV × 0.70 − Rehab Budget. For a property with $280K ARV and $45K rehab, the 70% Rule max offer is ($280K × 0.70) − $45K = $151K. The rule builds in a 30% buffer covering profit, financing costs, and execution risk. Deals within the rule (offer at or below max) typically produce Solid ROI or better; deals outside require strong specific justification like a hot appreciation market or extremely light rehab scope.'
  },
  {
    q: 'How do I calculate flip profit and ROI?',
    a: 'Total Profit = Net Sale Proceeds − Total Cash Invested. ROI = (Total Profit ÷ Total Cash Invested) × 100. Example: $50K cash invested total, $65K net after all sale costs and loan payoff → $15K Total Profit → 30% ROI. Total Cash Invested includes all real cash outflows: down payment, closing costs, rehab (if not financed), holding costs, loan points, and loan interest.'
  },
  {
    q: 'Should I use hard money or cash for a flip?',
    a: 'Hard money lets you deploy smaller capital per deal (typically 20% down) but adds 8–12% in points and interest over a 6-month project. Cash eliminates financing cost but ties up 100% of capital. Hard money is standard for investors running multiple simultaneous projects — leverage multiplies deal volume. Cash is better for investors with limited deal flow or conservative risk tolerance. Run the calculator in both modes to see the exact dollar difference on your specific deal before deciding.'
  },
  {
    q: 'How long should a typical flip take?',
    a: 'Typical 2026 flips run 5–8 months total: 2–4 months of active rehab plus 2–4 months on market. Cosmetic flips can complete in 3–4 months; gut rehabs typically run 6–10 months due to permitting and structural work. Every extra month adds loan interest ($1,000–2,000/mo) and holding costs ($400–800/mo) — a flip that runs 3 months over budget on timeline can lose 8–15% of projected ROI entirely from carrying costs. Always budget for overruns.'
  },
  {
    q: 'Is flip profit taxed as capital gains or ordinary income?',
    a: 'Flip profits are typically taxed as ordinary income (25–37% marginal rates in 2026), not long-term capital gains. The IRS views investors who regularly flip properties as real estate dealers rather than investors — especially when flipping is a regular activity generating multiple transactions per year. Only properties genuinely held as investments for 1+ year may qualify for long-term capital gains rates. This calculator shows before-tax results. Consult a CPA for your specific tax situation and entity structure options.'
  },
  {
    q: 'What is ARV and why does it matter so much?',
    a: 'ARV (After Repair Value) is the projected market value after your renovation is complete. It is the single most important input in flip analysis — every dollar of ARV error flows directly to the profit line. A $10K ARV miss on a thin-margin deal can eliminate the entire projected profit, and a $25K miss can turn a profitable-looking deal into a loss. Always verify with 3+ active MLS comps within 90 days, a Broker Price Opinion, or a pre-rehab appraisal. Reduce your comp-derived estimate by 5–10% for conservative planning.'
  },
  {
    q: 'Can I use this calculator for BRRRR or wholesale deals?',
    a: 'Partially. For BRRRR, you can use the Analyze mode for the pre-refinance stage (purchase + rehab + stabilize), but the refinance event itself requires a dedicated BRRRR Calculator that models the cash-out and ongoing rental performance separately. For pure wholesale deals (contract assignment without renovation), this calculator\'s math doesn\'t apply — there\'s no hold period or rehab cost structure. For deals where you\'re deciding between flip and rental hold, run both this calculator and the Rental Property Calculator to compare strategies side-by-side.'
  }
]

// ─────────────────────────────────────────
// 4. CORE CALC FUNCTION
// ─────────────────────────────────────────
function calcFlip(inputs) {
  const {
    purchasePrice: pp, arv, rehabBudget: rb, rehabContingencyPct: rcPct,
    holdPeriodMonths: months, monthlyHolding,
    financingType: ft, hmLoanToCostPct: hmLtcPct, hmInterestRate: hmRatePct,
    hmPointsPct: hmPtsPct, hmLoanCoversRehab: hmCR,
    convDownPaymentPct: convDpPct, convInterestRate: convRatePct, convLoanTermYears: convTerm,
    closingMode, closingPct, closingDollars,
    saleCostsPct: salePct
  } = inputs

  const purchasePrice = Number(pp) || 0
  const arvVal = Number(arv) || 0
  const rehabBudget = Number(rb) || 0
  const contingency = rehabBudget * ((Number(rcPct) || 0) / 100)
  const holdMonths = Number(months) || 6
  const monthlyHoldingAmt = Number(monthlyHolding) || 0

  // Closing costs
  let closingAmt = 0
  if (closingMode === 'dollar') {
    closingAmt = Number(closingDollars) || 0
  } else {
    closingAmt = purchasePrice * ((Number(closingPct) || 0) / 100)
  }

  // Financing
  let loanAmount = 0, downPayment = 0, loanPoints = 0, totalLoanInterest = 0, remainingLoan = 0
  let monthlyPaymentConv = 0

  if (ft === 'hm') {
    const ltc = (Number(hmLtcPct) || 0) / 100
    const rate = (Number(hmRatePct) || 0) / 100
    const pts = (Number(hmPtsPct) || 0) / 100
    loanAmount = hmCR ? (purchasePrice + rehabBudget) * ltc : purchasePrice * ltc
    downPayment = purchasePrice * (1 - ltc)
    loanPoints = loanAmount * pts
    totalLoanInterest = loanAmount * (rate / 12) * holdMonths
    remainingLoan = loanAmount
  } else if (ft === 'conv') {
    const dp = (Number(convDpPct) || 0) / 100
    const annualRate = (Number(convRatePct) || 0) / 100
    const r = annualRate / 12
    const n = (Number(convTerm) || 30) * 12
    const M = holdMonths
    loanAmount = purchasePrice * (1 - dp)
    downPayment = purchasePrice * dp
    loanPoints = 0
    if (r > 0) {
      monthlyPaymentConv = loanAmount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      remainingLoan = loanAmount * (Math.pow(1 + r, n) - Math.pow(1 + r, M)) / (Math.pow(1 + r, n) - 1)
    } else {
      monthlyPaymentConv = n > 0 ? loanAmount / n : 0
      remainingLoan = n > 0 ? loanAmount * (1 - M / n) : 0
    }
    const principalReduction = loanAmount - remainingLoan
    totalLoanInterest = (monthlyPaymentConv * M) - principalReduction
  } else {
    loanAmount = 0; downPayment = purchasePrice; loanPoints = 0; totalLoanInterest = 0; remainingLoan = 0
  }

  const rehabInCash = (ft === 'hm' && hmCR) ? 0 : rehabBudget
  const contingencyInCash = (ft === 'hm' && hmCR) ? 0 : contingency
  const totalHoldingCosts = monthlyHoldingAmt * holdMonths
  const salePctDec = (Number(salePct) || 0) / 100
  const saleCostsAmt = arvVal * salePctDec

  const totalCashInvested = downPayment + closingAmt + rehabInCash + contingencyInCash + totalHoldingCosts + loanPoints + totalLoanInterest
  const totalProjectCosts = purchasePrice + closingAmt + rehabBudget + contingency + totalHoldingCosts + loanPoints + totalLoanInterest + saleCostsAmt

  const netSaleProceeds = arvVal - saleCostsAmt - remainingLoan
  const totalProfit = netSaleProceeds - totalCashInvested
  const roi = totalCashInvested > 0 ? (totalProfit / totalCashInvested) * 100 : 0
  const annualizedRoi = holdMonths > 0 ? (Math.pow(1 + roi / 100, 12 / holdMonths) - 1) * 100 : 0
  const rule70 = arvVal * 0.70 - rehabBudget
  const breakEven = salePctDec < 1 ? (totalCashInvested + remainingLoan) / (1 - salePctDec) : null
  const profitPerMonth = holdMonths > 0 ? totalProfit / holdMonths : 0

  return {
    loanAmount, downPayment, loanPoints, totalLoanInterest, remainingLoan,
    rehabInCash, contingencyInCash, contingency, closingAmt,
    totalHoldingCosts, saleCostsAmt,
    totalCashInvested, totalProjectCosts,
    netSaleProceeds, totalProfit, roi, annualizedRoi,
    rule70, breakEven, profitPerMonth, monthlyPaymentConv
  }
}

function makeInputs(overrides = {}) {
  const base = {
    purchasePrice: form.purchasePrice,
    arv: form.arv,
    rehabBudget: form.rehabBudget,
    rehabContingencyPct: form.rehabContingencyPct,
    holdPeriodMonths: form.holdPeriodMonths,
    monthlyHolding: monthlyHolding.value,
    financingType: form.financingType,
    hmLoanToCostPct: form.hmLoanToCostPct,
    hmInterestRate: form.hmInterestRate,
    hmPointsPct: form.hmPointsPct,
    hmLoanCoversRehab: form.hmLoanCoversRehab,
    convDownPaymentPct: form.convDownPaymentPct,
    convInterestRate: form.convInterestRate,
    convLoanTermYears: form.convLoanTermYears,
    closingMode: form.purchaseClosingCostsMode,
    closingPct: form.purchaseClosingCostsPct,
    closingDollars: form.purchaseClosingCostsDollars,
    saleCostsPct: form.saleCostsPct,
    ...overrides
  }
  return base
}

// ─────────────────────────────────────────
// 5. COMPUTED — MONTHLY HOLDING
// ─────────────────────────────────────────
const detailedMonthlyHolding = computed(() => {
  return ['propertyTax', 'insurance', 'utilities', 'hoa', 'other'].reduce((sum, k) => sum + (Number(form.holdingCosts[k]) || 0), 0)
})

const monthlyHolding = computed(() => {
  if (form.holdingMode === 'simple') return Number(form.totalMonthlyHoldingSimple) || 0
  return detailedMonthlyHolding.value
})

// ─────────────────────────────────────────
// 6. COMPUTED — ANALYZE MODE
// ─────────────────────────────────────────
const result = computed(() => {
  const pp = Number(form.purchasePrice)
  const arv = Number(form.arv)
  const rb = Number(form.rehabBudget)
  if (!pp || !arv) return null
  return calcFlip(makeInputs())
})

const hasResult = computed(() => result.value !== null && !isNaN(result.value.totalProfit))

const rule70Compliant = computed(() => {
  if (!result.value) return false
  return Number(form.purchasePrice) <= result.value.rule70
})

// ─────────────────────────────────────────
// 7. BADGE SYSTEM
// ─────────────────────────────────────────
const badge = computed(() => {
  if (!hasResult.value) return { label: '—', bg1: '#9ca3af', bg2: '#6b7280' }
  const roi = result.value.roi
  if (roi >= 50) return { label: 'Exceptional', bg1: '#059669', bg2: '#047857' }
  if (roi >= 30) return { label: 'Strong', bg1: '#10B981', bg2: '#059669' }
  if (roi >= 20) return { label: 'Solid', bg1: '#F59E0B', bg2: '#D97706' }
  if (roi >= 10) return { label: 'Weak', bg1: '#F97316', bg2: '#EA580C' }
  if (roi >= 0) return { label: 'Critical', bg1: '#DC2626', bg2: '#B91C1C' }
  return { label: 'Loss', bg1: '#7F1D1D', bg2: '#991B1B' }
})

// ─────────────────────────────────────────
// 8. INSIGHT TEXT
// ─────────────────────────────────────────
const insightText = computed(() => {
  if (!hasResult.value) return ''
  const r = result.value
  const roi = r.roi.toFixed(1)
  const months = form.holdPeriodMonths
  const ft = form.financingType === 'hm' ? 'hard money' : form.financingType === 'conv' ? 'conventional' : 'all-cash'
  const tierLabel = badge.value.label
  const ruleStatus = rule70Compliant.value ? 'within the 70% Rule' : 'outside the 70% Rule'

  if (r.roi >= 50) return `ROI of ${roi}% over ${months} months with ${ft} financing is Exceptional by 2026 US flip market norms — top-quartile deal requiring strong acquisition discount or expert rehab execution. Deal is ${ruleStatus}. Major driver: deep value acquisition below market. Protect this margin by controlling rehab timeline aggressively — every extra month reduces annualized ROI.`
  if (r.roi >= 30) return `ROI of ${roi}% over ${months} months with ${ft} financing is Strong for 2026 — above-average with healthy safety buffer. Deal is ${ruleStatus}. This range justifies the execution risk and capital commitment in the current rate environment. Stress-test the Conservative scenario before committing; a 20% rehab overrun or one-month slip still keeps you solidly positive.`
  if (r.roi >= 20) return `ROI of ${roi}% over ${months} months with ${ft} financing is Solid — market-average for 2026 hard-money flips. Deal is ${ruleStatus}. Acceptable if execution is tight and ARV is conservative. A rehab overrun or ARV miss of 5–8% could push this into Weak territory — verify ARV with multiple comps and build 15% contingency. Before-tax only; ordinary income taxes will reduce take-home by 25–37%.`
  if (r.roi >= 10) return `ROI of ${roi}% over ${months} months with ${ft} financing is Weak for 2026 market conditions. Deal is ${ruleStatus}. Execution risk often exceeds profit margin at this level — a single significant overrun eliminates the return. Consider re-negotiating the purchase price or reducing rehab scope before committing capital. Before-tax analysis; after-tax take-home is substantially lower.`
  if (r.roi >= 0) return `ROI of ${roi}% over ${months} months with ${ft} financing is in the Critical range. Deal is ${ruleStatus}. Barely positive — any overrun on time, budget, or ARV produces a loss. Reconsider deal structure, re-negotiate offer price, or walk away. Break-Even Sale Price is very close to ARV, leaving no cushion for market softness.`
  return `ROI of ${roi}% represents a projected loss. Deal is ${ruleStatus}. Do not proceed without major changes: significantly lower offer, smaller rehab scope, or different exit strategy. Break-Even Sale Price exceeds ARV — this deal cannot profit at current projections. Before-tax analysis; actual losses compound after taxes.`
})

// ─────────────────────────────────────────
// 9. WARNINGS
// ─────────────────────────────────────────
const warnings = computed(() => {
  const w = []
  if (!hasResult.value) return w
  const r = result.value
  const pp = Number(form.purchasePrice)
  const arv = Number(form.arv)
  const rb = Number(form.rehabBudget)

  if (pp > r.rule70 && r.rule70 > 0) w.push({ type: 'warn', msg: `Outside 70% Rule — max rule-compliant offer is ${formatCurrency(r.rule70)}.` })
  if (arv <= pp + rb) w.push({ type: 'error', msg: 'ARV barely covers purchase + rehab cost — no margin for other costs.' })
  if (rb > 0 && rb < pp * 0.05) w.push({ type: 'warn', msg: 'Rehab budget under 5% of purchase price — may be unrealistically low.' })
  if (rb > pp * 0.6) w.push({ type: 'warn', msg: 'Heavy rehab (>60% of purchase price) — confirm scope and timeline.' })
  if (Number(form.rehabDurationMonths) > Number(form.holdPeriodMonths)) w.push({ type: 'error', msg: 'Rehab duration exceeds hold period — adjust timeline.' })
  if (monthlyHolding.value > pp * 0.015) w.push({ type: 'warn', msg: 'Monthly holding costs exceed 1.5% of purchase price — verify figures.' })
  if (form.financingType === 'hm' && Number(form.hmInterestRate) > 15) w.push({ type: 'warn', msg: 'HM rate above typical 2026 range (≤15%) — verify lender quote.' })
  if (form.financingType === 'hm' && Number(form.hmPointsPct) > 5) w.push({ type: 'warn', msg: 'Points above typical 2026 range (≤5%) — verify lender quote.' })
  if (r.roi > 200) w.push({ type: 'warn', msg: 'ROI over 200% — verify ARV input.' })
  if (r.roi < -50) w.push({ type: 'warn', msg: 'ROI below −50% — verify all inputs for errors.' })
  if (arv > pp * 3) w.push({ type: 'warn', msg: 'ARV is more than 3× purchase price — verify ARV.' })
  return w
})

// ─────────────────────────────────────────
// 10. SCENARIOS
// ─────────────────────────────────────────
const scenarios = computed(() => {
  if (!hasResult.value) return []
  const base = result.value
  const pp = Number(form.purchasePrice) || 0
  const arv = Number(form.arv) || 0
  const rb = Number(form.rehabBudget) || 0

  const conservInputs = makeInputs({
    arv: arv * 0.92,
    rehabBudget: rb * 1.20,
    holdPeriodMonths: String(Number(form.holdPeriodMonths) + 2),
    hmInterestRate: form.financingType === 'hm' ? String(Number(form.hmInterestRate) + 1) : form.hmInterestRate
  })
  const conserv = calcFlip(conservInputs)

  const optimInputs = makeInputs({
    arv: arv * 1.05,
    holdPeriodMonths: String(Math.max(3, Number(form.holdPeriodMonths) - 1))
  })
  const optim = calcFlip(optimInputs)

  return [
    { name: 'Conservative', profit: conserv.totalProfit, roi: conserv.roi, color: 'text-orange-600' },
    { name: 'Base', profit: base.totalProfit, roi: base.roi, color: 'text-amber-700' },
    { name: 'Optimistic*', profit: optim.totalProfit, roi: optim.roi, color: 'text-emerald-700' }
  ]
})

// ─────────────────────────────────────────
// 11. COST BARS (VISUALIZATION)
// ─────────────────────────────────────────
const costBars = computed(() => {
  if (!hasResult.value) return []
  const r = result.value
  const pp = Number(form.purchasePrice) || 0
  const total = r.totalProjectCosts
  if (total <= 0) return []

  const bars = [
    { label: 'Purchase Price', value: pp, color: '#1e3a5f' },
    { label: 'Closing Costs', value: r.closingAmt, color: '#374151' },
    { label: 'Rehab + Contingency', value: (Number(form.rehabBudget) || 0) + r.contingency, color: '#6366f1' },
    { label: 'Holding Costs', value: r.totalHoldingCosts, color: '#f59e0b' },
    { label: 'Loan Points', value: r.loanPoints, color: '#ef4444' },
    { label: 'Loan Interest', value: r.totalLoanInterest, color: '#dc2626' },
    { label: 'Sale Costs', value: r.saleCostsAmt, color: '#9ca3af' }
  ]
  return bars.filter(b => b.value > 0).map(b => ({ ...b, pct: Math.min(100, (b.value / total) * 100) }))
})

// ─────────────────────────────────────────
// 12. SENSITIVITY TABLES
// ─────────────────────────────────────────
const sensitivity1 = computed(() => {
  if (!hasResult.value) return []
  const arv = Number(form.arv) || 0
  const rb = Number(form.rehabBudget) || 0
  const arvFactors = [-0.10, -0.05, 0, 0.05, 0.10]
  const rehabOverruns = [0, 0.15, 0.30]

  return arvFactors.map(af => {
    const arvAdj = arv * (1 + af)
    const label = af === 0 ? `$${Math.round(arvAdj / 1000)}K (base)` : `${af > 0 ? '+' : ''}${(af * 100).toFixed(0)}%`
    const vals = rehabOverruns.map(ro => {
      const r = calcFlip(makeInputs({ arv: arvAdj, rehabBudget: rb * (1 + ro) }))
      return r.totalProfit
    })
    return { arvLabel: label, vals, isBase: af === 0 }
  })
})

const sensitivity2 = computed(() => {
  if (!hasResult.value) return []
  const holds = [4, 6, 8, 10]
  const rates = [10, 12, 14]
  return holds.map(h => ({
    hold: h,
    cells: rates.map(rt => {
      const r = calcFlip(makeInputs({ holdPeriodMonths: String(h), hmInterestRate: String(rt) }))
      return { rate: rt, profit: r.totalProfit, roi: r.roi }
    })
  }))
})

const sensitivity3 = computed(() => {
  if (!hasResult.value) return []
  const pp = Number(form.purchasePrice) || 0
  const offsets = [-10000, -5000, 0, 5000, 10000, 15000, 20000]
  return offsets.map(offset => {
    const adjPP = pp + offset
    if (adjPP <= 0) return null
    const r = calcFlip(makeInputs({ purchasePrice: adjPP }))
    return {
      label: offset === 0 ? formatCurrency(adjPP) + ' (base)' : (offset > 0 ? '+' : '') + formatCurrency(offset),
      profit: r.totalProfit,
      roi: r.roi,
      withinRule: adjPP <= r.rule70,
      isBase: offset === 0
    }
  }).filter(Boolean)
})

// ─────────────────────────────────────────
// 13. PROJECT TIMELINE
// ─────────────────────────────────────────
const projectTimeline = computed(() => {
  if (!hasResult.value) return []
  const r = result.value
  const pp = Number(form.purchasePrice) || 0
  const rb = Number(form.rehabBudget) || 0
  const months = Number(form.holdPeriodMonths) || 6
  const rehabMonths = Number(form.rehabDurationMonths) || 3
  const monthly = monthlyHolding.value

  const rows = []
  // Month 0: Closing
  rows.push({ month: 0, monthLabel: '0 (Close)', phase: 'Purchase + Close', cumCost: pp + r.closingAmt + r.loanPoints, cumHolding: 0, isExit: false })

  // Months 1 to N
  for (let m = 1; m <= months; m++) {
    const isRehab = m <= rehabMonths
    const phase = isRehab ? 'Rehab' : (m === months ? 'Sale Closing' : 'On Market')
    const rehabDrawThisMonth = isRehab ? (rb + r.contingency) / rehabMonths : 0
    const prevCumCost = rows[rows.length - 1].cumCost
    const cumCost = prevCumCost + rehabDrawThisMonth + monthly + (r.totalLoanInterest / months)
    const cumHolding = monthly * m
    const isExit = m === months
    rows.push({ month: m, monthLabel: isExit ? `${m} (Exit)` : String(m), phase, cumCost, cumHolding, isExit })
  }
  return rows
})

// ─────────────────────────────────────────
// 14. REVERSE MODE — FIND MAX PURCHASE PRICE
// ─────────────────────────────────────────
function getTargetValue() {
  if (form.reverseTargetMode === 'roi') return Number(form.targetROI)
  return null // profit mode handled separately
}

function getTargetProfit() {
  if (form.reverseTargetMode === 'profit') return Number(form.targetTotalProfit)
  return null
}

function meetsProfitTarget(r) {
  if (form.reverseTargetMode === 'roi') {
    const target = Number(form.targetROI)
    return !isNaN(target) && r.roi >= target
  } else {
    const target = Number(form.targetTotalProfit)
    return !isNaN(target) && r.totalProfit >= target
  }
}

const findPriceResult = computed(() => {
  if (calcMode.value !== 'find-price') return null
  const arv = Number(form.arv)
  if (!arv) return null
  const targetRoi = form.reverseTargetMode === 'roi' ? Number(form.targetROI) : null
  const targetProfit = form.reverseTargetMode === 'profit' ? Number(form.targetTotalProfit) : null
  if (targetRoi === null && targetProfit === null) return null
  if (targetRoi !== null && isNaN(targetRoi)) return null
  if (targetProfit !== null && isNaN(targetProfit)) return null

  let lo = 10000, hi = arv * 2
  let left = lo, right = hi

  // Check if achievable at lo
  const rLo = calcFlip(makeInputs({ purchasePrice: lo }))
  if (!meetsProfitTarget(rLo)) return null

  for (let i = 0; i < 100; i++) {
    const mid = (left + right) / 2
    const r = calcFlip(makeInputs({ purchasePrice: mid }))
    if (meetsProfitTarget(r)) {
      left = mid
    } else {
      right = mid
    }
    if (right - left < 500) break
  }

  const finalPrice = (left + right) / 2
  const finalR = calcFlip(makeInputs({ purchasePrice: finalPrice }))
  if (!meetsProfitTarget(finalR)) return null
  return finalPrice
})

const findPriceError = computed(() => {
  if (calcMode.value !== 'find-price') return null
  const arv = Number(form.arv)
  if (!arv) return null
  const hasTarget = (form.reverseTargetMode === 'roi' && form.targetROI) || (form.reverseTargetMode === 'profit' && form.targetTotalProfit)
  if (!hasTarget) return null
  if (findPriceResult.value !== null) return null
  return 'Target not achievable with current ARV and rehab assumptions. Consider lower target or different financing.'
})

const findPriceCalc = computed(() => {
  if (findPriceResult.value === null) return null
  return calcFlip(makeInputs({ purchasePrice: findPriceResult.value }))
})

// ─────────────────────────────────────────
// 15. REVERSE MODE — FIND MAX REHAB BUDGET
// ─────────────────────────────────────────
const findRehabResult = computed(() => {
  if (calcMode.value !== 'find-rehab') return null
  const pp = Number(form.purchasePrice)
  const arv = Number(form.arv)
  if (!pp || !arv) return null
  const hasTarget = (form.reverseTargetMode === 'roi' && form.targetROI) || (form.reverseTargetMode === 'profit' && form.targetTotalProfit)
  if (!hasTarget) return null

  const maxRehab = arv - pp
  if (maxRehab <= 0) return null

  // Check if $0 rehab achieves target
  const rZero = calcFlip(makeInputs({ rehabBudget: 0 }))
  if (!meetsProfitTarget(rZero)) return null

  let left = 0, right = maxRehab

  for (let i = 0; i < 100; i++) {
    const mid = (left + right) / 2
    const r = calcFlip(makeInputs({ rehabBudget: mid }))
    if (meetsProfitTarget(r)) {
      left = mid
    } else {
      right = mid
    }
    if (right - left < 500) break
  }

  const finalRehab = (left + right) / 2
  const finalR = calcFlip(makeInputs({ rehabBudget: finalRehab }))
  if (!meetsProfitTarget(finalR)) return null
  return finalRehab
})

const findRehabError = computed(() => {
  if (calcMode.value !== 'find-rehab') return null
  const pp = Number(form.purchasePrice)
  const arv = Number(form.arv)
  if (!pp || !arv) return null
  const hasTarget = (form.reverseTargetMode === 'roi' && form.targetROI) || (form.reverseTargetMode === 'profit' && form.targetTotalProfit)
  if (!hasTarget) return null
  if (findRehabResult.value !== null) return null
  return 'Purchase price too high for target — consider a lower offer price or different target return.'
})

const findRehabCalc = computed(() => {
  if (findRehabResult.value === null) return null
  return calcFlip(makeInputs({ rehabBudget: findRehabResult.value }))
})

// ─────────────────────────────────────────
// 16. SCENARIO PANEL RESULT
// ─────────────────────────────────────────
const currentScenarioResult = computed(() => {
  if (!hasResult.value) return {}
  return {
    primaryMetric: 'Total Profit / ROI',
    primaryValue: `${formatCurrency(result.value.totalProfit)} / ${result.value.roi.toFixed(1)}%`,
    badgeLabel: badge.value.label,
    badgeColor: badge.value.bg1,
    purchasePrice: formatCurrency(Number(form.purchasePrice)),
    arv: formatCurrency(Number(form.arv)),
    rehabBudget: formatCurrency(Number(form.rehabBudget)),
    holdPeriod: `${form.holdPeriodMonths} months`,
    financing: form.financingType.toUpperCase(),
    roi: `${result.value.roi.toFixed(1)}%`,
    annualizedRoi: `${result.value.annualizedRoi.toFixed(1)}%`,
    breakEven: result.value.breakEven ? formatCurrency(result.value.breakEven) : '—'
  }
})

// ─────────────────────────────────────────
// 17. ON MOUNTED — URL PARAMS
// ─────────────────────────────────────────
onMounted(() => {
  const p = new URLSearchParams(window.location.search)
  if (p.get('md')) calcMode.value = p.get('md')
  if (p.get('pp')) form.purchasePrice = p.get('pp')
  if (p.get('av')) form.arv = p.get('av')
  if (p.get('ac')) form.arvConfidence = p.get('ac')
  if (p.get('rb')) form.rehabBudget = p.get('rb')
  if (p.get('rc')) form.rehabContingencyPct = p.get('rc')
  if (p.get('rd')) form.rehabDurationMonths = p.get('rd')
  if (p.get('hp')) form.holdPeriodMonths = p.get('hp')
  if (p.get('hm')) form.holdingMode = p.get('hm')
  if (p.get('hs')) form.totalMonthlyHoldingSimple = p.get('hs')
  if (p.get('hpt')) form.holdingCosts.propertyTax = p.get('hpt')
  if (p.get('hi')) form.holdingCosts.insurance = p.get('hi')
  if (p.get('hu')) form.holdingCosts.utilities = p.get('hu')
  if (p.get('hh')) form.holdingCosts.hoa = p.get('hh')
  if (p.get('ho')) form.holdingCosts.other = p.get('ho')
  const ft = p.get('ft')
  if (ft) {
    form.financingType = ft
    if (ft === 'hm') {
      if (p.get('hltc')) form.hmLoanToCostPct = p.get('hltc')
      if (p.get('hir')) form.hmInterestRate = p.get('hir')
      if (p.get('hpp')) form.hmPointsPct = p.get('hpp')
      if (p.get('hcr')) form.hmLoanCoversRehab = p.get('hcr') === 'true'
    } else if (ft === 'conv') {
      if (p.get('cdp')) form.convDownPaymentPct = p.get('cdp')
      if (p.get('cir')) form.convInterestRate = p.get('cir')
      if (p.get('clt')) form.convLoanTermYears = p.get('clt')
    }
  }
  if (p.get('cm')) form.purchaseClosingCostsMode = p.get('cm')
  if (p.get('cp')) form.purchaseClosingCostsPct = p.get('cp')
  if (p.get('cd')) form.purchaseClosingCostsDollars = p.get('cd')
  if (p.get('sc')) form.saleCostsPct = p.get('sc')
  if (p.get('tp')) form.targetTotalProfit = p.get('tp')
  if (p.get('tr')) form.targetROI = p.get('tr')
  if (p.get('pt')) form.propertyType = p.get('pt')
})

// ─────────────────────────────────────────
// 18. HELPERS
// ─────────────────────────────────────────
function formatCurrency(val) {
  if (val === null || val === undefined || isNaN(val)) return '—'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)
}

function formatCurrencyShort(val) {
  if (val === null || val === undefined || isNaN(val)) return '—'
  const abs = Math.abs(val)
  const sign = val < 0 ? '-' : ''
  if (abs >= 1000000) return sign + '$' + (abs / 1000000).toFixed(1) + 'M'
  if (abs >= 1000) return sign + '$' + Math.round(abs / 1000) + 'K'
  return sign + '$' + Math.round(abs)
}

function buildShareParams() {
  const p = new URLSearchParams()
  if (calcMode.value !== 'analyze') p.set('md', calcMode.value)
  if (form.purchasePrice) p.set('pp', form.purchasePrice)
  if (form.arv) p.set('av', form.arv)
  if (form.arvConfidence !== 'Realistic') p.set('ac', form.arvConfidence)
  if (form.rehabBudget) p.set('rb', form.rehabBudget)
  if (form.rehabContingencyPct !== '10') p.set('rc', form.rehabContingencyPct)
  if (form.rehabDurationMonths !== '3') p.set('rd', form.rehabDurationMonths)
  if (form.holdPeriodMonths !== '6') p.set('hp', form.holdPeriodMonths)
  if (form.holdingMode !== 'simple') p.set('hm', form.holdingMode)
  if (form.totalMonthlyHoldingSimple) p.set('hs', form.totalMonthlyHoldingSimple)
  if (form.holdingCosts.propertyTax) p.set('hpt', form.holdingCosts.propertyTax)
  if (form.holdingCosts.insurance) p.set('hi', form.holdingCosts.insurance)
  if (form.holdingCosts.utilities) p.set('hu', form.holdingCosts.utilities)
  if (form.holdingCosts.hoa) p.set('hh', form.holdingCosts.hoa)
  if (form.holdingCosts.other) p.set('ho', form.holdingCosts.other)
  p.set('ft', form.financingType)
  if (form.financingType === 'hm') {
    if (form.hmLoanToCostPct !== '80') p.set('hltc', form.hmLoanToCostPct)
    if (form.hmInterestRate !== '12') p.set('hir', form.hmInterestRate)
    if (form.hmPointsPct !== '3') p.set('hpp', form.hmPointsPct)
    p.set('hcr', String(form.hmLoanCoversRehab))
  } else if (form.financingType === 'conv') {
    if (form.convDownPaymentPct !== '25') p.set('cdp', form.convDownPaymentPct)
    if (form.convInterestRate !== '7.5') p.set('cir', form.convInterestRate)
    if (form.convLoanTermYears !== '30') p.set('clt', form.convLoanTermYears)
  }
  if (form.purchaseClosingCostsMode !== 'pct') p.set('cm', form.purchaseClosingCostsMode)
  if (form.purchaseClosingCostsPct !== '3') p.set('cp', form.purchaseClosingCostsPct)
  if (form.purchaseClosingCostsDollars) p.set('cd', form.purchaseClosingCostsDollars)
  if (form.saleCostsPct !== '8') p.set('sc', form.saleCostsPct)
  if (form.targetTotalProfit) p.set('tp', form.targetTotalProfit)
  if (form.targetROI) p.set('tr', form.targetROI)
  if (form.propertyType !== 'SFR') p.set('pt', form.propertyType)
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

// ─────────────────────────────────────────
// 19. PDF EXPORT
// ─────────────────────────────────────────
async function exportPDF() {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF()
  const navy = [30, 58, 95]
  const gold = [245, 158, 11]
  const white = [255, 255, 255]

  // Header
  doc.setFillColor(...navy)
  doc.rect(0, 0, 210, 40, 'F')
  doc.setTextColor(...white)
  doc.setFontSize(20)
  doc.setFont('helvetica', 'bold')
  doc.text('RealCalc — Fix and Flip Calculator', 15, 18)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.text('Before-Tax Analysis | realcalc.com', 15, 28)
  doc.text(new Date().toLocaleDateString('en-US'), 155, 28)

  // Hero block — mode aware
  let heroValue, heroLabel, heroSub
  if (calcMode.value === 'find-price' && findPriceResult.value !== null) {
    heroValue = formatCurrency(findPriceResult.value)
    heroLabel = 'MAX PURCHASE PRICE'
    heroSub = `Target: ${form.reverseTargetMode === 'roi' ? form.targetROI + '% ROI' : formatCurrency(Number(form.targetTotalProfit)) + ' profit'}`
  } else if (calcMode.value === 'find-rehab' && findRehabResult.value !== null) {
    heroValue = formatCurrency(findRehabResult.value)
    heroLabel = 'MAX REHAB BUDGET'
    heroSub = `Target: ${form.reverseTargetMode === 'roi' ? form.targetROI + '% ROI' : formatCurrency(Number(form.targetTotalProfit)) + ' profit'}`
  } else if (hasResult.value) {
    heroValue = formatCurrency(result.value.totalProfit)
    heroLabel = 'TOTAL PROFIT (Before Tax)'
    heroSub = `ROI: ${result.value.roi.toFixed(1)}% over ${form.holdPeriodMonths} months | Tier: ${badge.value.label}`
  } else {
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(12)
    doc.text('No result to export — enter required inputs.', 15, 55)
    doc.save('fix-and-flip-analysis.pdf')
    return
  }

  doc.setFillColor(...gold)
  doc.rect(0, 40, 210, 35, 'F')
  doc.setTextColor(...navy)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text(heroLabel, 15, 52)
  doc.setFontSize(26)
  doc.text(heroValue, 15, 65)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.text(heroSub, 15, 72)

  // Inputs summary
  let y = 90
  doc.setTextColor(0, 0, 0)
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('Deal Inputs', 15, y)
  y += 7
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  const inputRows = [
    ['Purchase Price', formatCurrency(Number(form.purchasePrice))],
    ['ARV', formatCurrency(Number(form.arv))],
    ['Rehab Budget', formatCurrency(Number(form.rehabBudget))],
    ['Contingency', form.rehabContingencyPct + '%'],
    ['Hold Period', form.holdPeriodMonths + ' months'],
    ['Financing', form.financingType === 'hm' ? 'Hard Money' : form.financingType === 'conv' ? 'Conventional' : 'All Cash'],
    ['Sale Costs', form.saleCostsPct + '% of ARV']
  ]
  inputRows.forEach(([k, v]) => {
    doc.setFont('helvetica', 'bold'); doc.text(k + ':', 15, y)
    doc.setFont('helvetica', 'normal'); doc.text(v, 85, y)
    y += 6
  })

  if (hasResult.value) {
    y += 4
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('Results', 15, y)
    y += 7
    doc.setFontSize(9)
    const resultRows = [
      ['Total Cash Invested', formatCurrency(result.value.totalCashInvested)],
      ['Net Sale Proceeds', formatCurrency(result.value.netSaleProceeds)],
      ['Total Profit', formatCurrency(result.value.totalProfit)],
      ['ROI', result.value.roi.toFixed(1) + '%'],
      ['Annualized ROI', result.value.annualizedRoi.toFixed(1) + '%'],
      ['70% Rule Max Offer', formatCurrency(result.value.rule70)],
      ['Break-Even Price', result.value.breakEven ? formatCurrency(result.value.breakEven) : '—'],
      ['Profit per Month', formatCurrency(result.value.profitPerMonth)],
      ['Tier', badge.value.label]
    ]
    resultRows.forEach(([k, v]) => {
      doc.setFont('helvetica', 'bold'); doc.text(k + ':', 15, y)
      doc.setFont('helvetica', 'normal'); doc.text(v, 85, y)
      y += 6
    })
  }

  y += 8
  doc.setFontSize(8)
  doc.setTextColor(120, 120, 120)
  doc.text('Before-tax analysis only. Flip profits typically taxed as ordinary income (25-37% marginal rate). Consult a CPA.', 15, y)
  doc.text('Generated by RealCalc — realcalc.com', 15, y + 5)

  doc.save('fix-and-flip-analysis.pdf')
}

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
  @apply px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer border;
}
.calc-mode-tab-active {
  @apply bg-white shadow-sm border-gray-200;
}
.calc-mode-tab-inactive {
  @apply bg-transparent border-transparent hover:bg-white/60;
}
.calc-section-header {
  @apply px-4 py-2 bg-gray-50 border-b border-gray-100;
}
.calc-section-title {
  @apply text-xs font-bold uppercase tracking-widest text-gray-500;
}
.calc-inputs {
  @apply divide-y divide-gray-100;
}
</style>
