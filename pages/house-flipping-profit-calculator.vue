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
            <li class="text-gray-700 font-semibold">House Flipping Profit Calculator</li>
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
            House Flipping Profit Calculator &mdash; Real Profit, ROI &amp; Max Offer Price (2026)
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
            <li><a href="#why-flips-fail" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Why Flips Fail</a></li>
            <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Your Result Means</a></li>
            <li><a href="#rehab-risk" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Rehab Risk</a></li>
            <li><a href="#financing-cost" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Financing Cost</a></li>
            <li><a href="#max-purchase" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Max Purchase Price</a></li>
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
              <li><a href="#why-flips-fail" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Why Flips Fail</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Your Result Means</a></li>
              <li><a href="#rehab-risk" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Rehab Risk</a></li>
              <li><a href="#financing-cost" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Financing Cost</a></li>
              <li><a href="#max-purchase" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Max Purchase Price</a></li>
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
          <span v-if="calcMode === 'analyze'">Net Profit</span>
          <span v-else-if="calcMode === 'find-max-price'">Max Purchase Price</span>
          <span v-else>Break-Even Resale</span>
        </div>
        <div class="flex items-center gap-3">
          <template v-if="calcMode === 'analyze'">
            <div v-if="hasResult" class="flex items-center gap-2">
              <span class="text-xl font-extrabold leading-none" :style="`color: ${verdict.bg1}`">
                {{ netProfit >= 0 ? formatCurrency(netProfit) : '-' + formatCurrency(Math.abs(netProfit)) }}
              </span>
              <span class="text-xs font-bold px-2 py-0.5 rounded-full text-white" :style="`background: ${verdict.bg1}`">
                {{ profitMargin.toFixed(1) }}%
              </span>
            </div>
            <span v-else class="text-2xl font-bold text-gray-200">&mdash;</span>
            <span v-if="hasResult" class="text-xs font-bold px-2.5 py-1 rounded-full text-white" :style="`background: ${verdict.bg1}`">{{ verdict.label }}</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <template v-else-if="calcMode === 'find-max-price'">
            <span v-if="maxPurchaseAtTarget !== null" class="text-xl font-extrabold leading-none text-blue-700">
              {{ formatCurrency(maxPurchaseAtTarget) }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">&mdash;</span>
            <span v-if="maxPurchaseAtTarget !== null" class="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">Max Price</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <template v-else>
            <span v-if="hasResult" class="text-xl font-extrabold leading-none text-emerald-700">
              {{ formatCurrency(breakEvenResalePrice) }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">&mdash;</span>
            <span v-if="hasResult" class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">Break-Even</span>
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
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'analyze' ? 'color:#1e3a5f;' : ''">Analyze Flip Profit</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'analyze' ? 'text-amber-700' : 'text-gray-400'">Net Profit &amp; Margin</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'analyze' ? 'bg-amber-100 text-amber-800' : 'bg-gray-200 text-gray-400'">Standard</span>
            </button>
            <button @click="calcMode = 'find-max-price'"
              class="calc-mode-tab"
              :class="calcMode === 'find-max-price' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-max-price' ? 'color:#1e3a5f;' : ''">Find Max Price</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-max-price' ? 'text-blue-700' : 'text-gray-400'">At Target Profit</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-max-price' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
            <button @click="calcMode = 'find-breakeven'"
              class="calc-mode-tab"
              :class="calcMode === 'find-breakeven' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-breakeven' ? 'color:#1e3a5f;' : ''">Break-Even Resale</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-breakeven' ? 'text-emerald-700' : 'text-gray-400'">Min Resale Price</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-breakeven' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
          </div>
          <div class="mt-2.5">
            <p v-if="calcMode === 'analyze'" class="text-xs text-gray-500 leading-relaxed">
              Enter all costs to calculate net profit, profit margin, ROI on cash invested, and deal diagnostics. Best for evaluating a deal before making an offer.
            </p>
            <p v-else-if="calcMode === 'find-max-price'" class="text-xs text-blue-700 leading-relaxed bg-blue-50 px-3 py-1.5 rounded-lg">
              Enter ARV, rehab, holding, financing, and your <strong>target profit</strong> &mdash; the calculator solves for the maximum purchase price.
            </p>
            <p v-else class="text-xs text-emerald-700 leading-relaxed bg-emerald-50 px-3 py-1.5 rounded-lg">
              See the minimum resale price needed to break even on your total project cost. Useful for stress-testing downside scenarios.
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
              <!-- Purchase Price -->
              <div>
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
                  After Repair Value / Resale Price <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="arv" v-model="form.arv" type="number" min="0" step="1000"
                    placeholder="Enter expected resale price or ARV"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Use a conservative resale estimate based on comparable sales.</p>
              </div>

              <!-- Scenario Name -->
              <div>
                <label for="scenario-name" class="block text-xs font-semibold text-gray-700 mb-1">Scenario Name</label>
                <input id="scenario-name" v-model="form.scenarioName" type="text"
                  placeholder="Optional: name this flip scenario"
                  class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition" />
              </div>
            </div>
          </div>

          <!-- Rehab Section -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Rehab Budget</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="rehab-cost" class="block text-xs font-semibold text-gray-700 mb-1">
                  Rehab Cost <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="rehab-cost" v-model="form.rehabCost" type="number" min="0" step="1000"
                    placeholder="Enter estimated rehab cost"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Use contractor bids or a Rehab Cost Estimator. Underestimating rehab can erase profit.</p>
              </div>

              <div>
                <label for="rehab-contingency" class="block text-xs font-semibold text-gray-700 mb-1">
                  Rehab Contingency <span class="ml-1 text-xs font-normal text-gray-400">(10% may work for light rehabs; 15&ndash;20% is safer for heavy rehabs)</span>
                </label>
                <div class="relative">
                  <input id="rehab-contingency" v-model="form.rehabContingencyPct" type="number" min="0" max="50" step="1"
                    placeholder="Optional: rehab contingency percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
              </div>

              <div v-if="rehabContingencyCalc > 0" class="text-xs text-blue-700 bg-blue-50 border border-blue-100 px-3 py-2 rounded-xl">
                Contingency: <strong>{{ formatCurrency(rehabContingencyCalc) }}</strong> &middot; Total Rehab Budget: <strong>{{ formatCurrency(totalRehabBudget) }}</strong>
              </div>
              <div v-if="Number(form.rehabCost) === 0 && form.rehabCost !== null && form.rehabCost !== ''" class="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-3 py-2 rounded-xl">
                No rehab cost entered. Confirm this is a true cosmetic or wholesale-style scenario.
              </div>
            </div>
          </div>

          <!-- Purchase Closing Costs -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Purchase Closing Costs</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="purchase-closing" class="block text-xs font-semibold text-gray-700 mb-1">Closing Costs</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="purchase-closing" v-model="form.purchaseClosingCosts" type="number" min="0" step="100"
                    placeholder="Optional: purchase closing costs"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
            </div>
          </div>

          <!-- Holding Costs -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Holding Costs</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="monthly-holding" class="block text-xs font-semibold text-gray-700 mb-1">
                  Monthly Holding Costs <span class="ml-1 text-xs font-normal text-gray-400">(taxes, insurance, utilities, HOA, maintenance)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="monthly-holding" v-model="form.monthlyHoldingCosts" type="number" min="0" step="50"
                    placeholder="Optional: monthly holding costs"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Excludes debt service unless you include it manually.</p>
              </div>

              <div>
                <label for="holding-period" class="block text-xs font-semibold text-gray-700 mb-1">
                  Holding Period <span class="ml-1 text-xs font-normal text-gray-400">(months)</span>
                </label>
                <input id="holding-period" v-model="form.holdingPeriodMonths" type="number" min="1" max="60" step="1"
                  placeholder="Optional: holding period in months"
                  class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
              </div>

              <div v-if="totalHoldingCosts > 0" class="text-xs text-blue-700 bg-blue-50 border border-blue-100 px-3 py-2 rounded-xl">
                Total holding costs over {{ holdingPeriodVal }} months: <strong>{{ formatCurrency(totalHoldingCosts) }}</strong>
              </div>
            </div>
          </div>

          <!-- Selling Costs -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Selling Costs</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="selling-cost-pct" class="block text-xs font-semibold text-gray-700 mb-1">
                  Selling Cost % <span class="ml-1 text-xs font-normal text-gray-400">(commissions, concessions, transfer taxes, closing &mdash; typical 6&ndash;10%)</span>
                </label>
                <div class="relative">
                  <input id="selling-cost-pct" v-model="form.sellingCostPct" type="number" min="0" max="15" step="0.5"
                    placeholder="Optional: selling cost percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
              </div>
              <div v-if="sellingCosts > 0" class="text-xs text-gray-600 bg-gray-50 border border-gray-100 px-3 py-2 rounded-xl">
                Selling costs: <strong>{{ formatCurrency(sellingCosts) }}</strong> (on ARV of {{ formatCurrency(Number(form.arv) || 0) }})
              </div>
            </div>
          </div>

          <!-- Financing Section -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Financing</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <p class="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                Financing cost is simplified. Actual lender draws, extensions, and fees may differ.
              </p>

              <div>
                <label for="loan-amount" class="block text-xs font-semibold text-gray-700 mb-1">Loan Amount</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="loan-amount" v-model="form.loanAmount" type="number" min="0" step="1000"
                    placeholder="Optional: loan amount"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

              <div>
                <label for="interest-rate" class="block text-xs font-semibold text-gray-700 mb-1">Annual Interest Rate</label>
                <div class="relative">
                  <input id="interest-rate" v-model="form.interestRate" type="number" min="0" max="50" step="0.25"
                    placeholder="Optional: annual interest rate"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
              </div>

              <div>
                <label for="points-pct" class="block text-xs font-semibold text-gray-700 mb-1">
                  Lender Points <span class="ml-1 text-xs font-normal text-gray-400">(1 point = 1% of loan amount)</span>
                </label>
                <div class="relative">
                  <input id="points-pct" v-model="form.pointsPct" type="number" min="0" max="10" step="0.5"
                    placeholder="Optional: lender points percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
              </div>

              <div>
                <label for="financing-fees" class="block text-xs font-semibold text-gray-700 mb-1">Loan / Financing Fees</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="financing-fees" v-model="form.financingFees" type="number" min="0" step="100"
                    placeholder="Optional: loan or financing fees"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

              <div>
                <label for="manual-financing" class="block text-xs font-semibold text-gray-700 mb-1">
                  Manual Financing Cost Override
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="manual-financing" v-model="form.manualFinancingCost" type="number" min="0" step="100"
                    placeholder="Optional: total financing cost override"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Manual financing cost overrides calculated financing cost.</p>
              </div>

              <div v-if="isManualFinancingOverride" class="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-3 py-2 rounded-xl">
                Manual override active: financing cost = <strong>{{ formatCurrency(financingCost) }}</strong>. Calculated interest + points + fees ignored.
              </div>

              <div v-if="financingCost > 0 && !isManualFinancingOverride" class="text-xs text-blue-700 bg-blue-50 border border-blue-100 px-3 py-2 rounded-xl">
                Calculated financing: Interest <strong>{{ formatCurrency(interestCost) }}</strong> + Points <strong>{{ formatCurrency(pointsCost) }}</strong> + Fees <strong>{{ formatCurrency(Number(form.financingFees) || 0) }}</strong> = <strong>{{ formatCurrency(financingCost) }}</strong>
              </div>
            </div>
          </div>

          <!-- Cash Invested / Target Profit -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Investment &amp; Target</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div>
                <label for="cash-invested" class="block text-xs font-semibold text-gray-700 mb-1">Cash Invested</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="cash-invested" v-model="form.cashInvested" type="number" min="0" step="1000"
                    placeholder="Optional: total cash invested"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">If empty, estimated automatically (excludes selling costs paid at exit).</p>
              </div>

              <div>
                <label for="target-profit" class="block text-xs font-semibold text-gray-700 mb-1">Target Profit</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="target-profit" v-model="form.targetProfit" type="number" min="0" step="1000"
                    placeholder="Optional: target profit"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Used for maximum purchase price analysis.</p>
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
              <p class="text-xs font-semibold uppercase tracking-wide mb-1 text-gray-400">Net Profit</p>
              <p class="text-xs mb-2 text-gray-400">
                <span v-if="hasResult">ARV &minus; Total Project Cost &middot; {{ holdingPeriodVal }} month hold</span>
                <span v-else>Projected profit after ALL costs</span>
              </p>
              <div class="font-extrabold leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full transition-all mb-2"
                :class="[hasResult ? 'text-5xl' : 'text-6xl text-gray-200']"
                :style="hasResult ? `color: ${verdict.bg1}` : ''">
                {{ hasResult ? (netProfit >= 0 ? formatCurrency(netProfit) : '-' + formatCurrency(Math.abs(netProfit))) : '&mdash;' }}
              </div>
              <div v-if="hasResult" class="mb-3">
                <span class="text-lg font-bold" :style="`color: ${verdict.bg1}`">
                  Margin: {{ profitMargin.toFixed(2) }}%
                </span>
                <span v-if="roiOnCash !== null" class="text-sm text-gray-500 ml-2">ROI: {{ roiOnCash.toFixed(2) }}%</span>
              </div>
              <div v-if="hasResult"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-xs text-white"
                :style="`background: ${verdict.bg1}`">
                <span class="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                {{ verdict.label }}
              </div>
              <div v-else class="text-sm text-gray-300">Enter purchase price and ARV to see result</div>
              <p v-if="hasResult" class="text-xs text-gray-400 mt-3 italic">Projected profit is an estimate and depends on ARV, rehab cost, financing, timeline, and sale execution.</p>
            </div>

            <!-- FIND-MAX-PRICE mode result -->
            <div v-else-if="calcMode === 'find-max-price'" class="px-5 py-5 border-b border-gray-100 bg-white">
              <p class="text-xs font-semibold uppercase tracking-wide mb-1 text-blue-500">Max Purchase Price at Target Profit</p>
              <p class="text-xs mb-2 text-gray-400">
                <span v-if="maxPurchaseAtTarget !== null">Given target profit of {{ formatCurrency(targetProfitVal) }}</span>
                <span v-else>Enter ARV, rehab, and target profit</span>
              </p>
              <div class="font-extrabold mb-3 leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full"
                :class="maxPurchaseAtTarget !== null ? 'text-5xl' : 'text-6xl text-gray-200'"
                style="color: #1e40af;">
                {{ maxPurchaseAtTarget !== null ? formatCurrency(maxPurchaseAtTarget) : '&mdash;' }}
              </div>
              <div v-if="maxPurchaseAtTarget !== null"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold text-xs bg-blue-100 text-blue-700">
                Maximum offer at {{ formatCurrency(targetProfitVal) }} target profit
              </div>
            </div>

            <!-- FIND-BREAKEVEN mode result -->
            <div v-else class="px-5 py-5 border-b border-gray-100 bg-white">
              <p class="text-xs font-semibold uppercase tracking-wide mb-1 text-emerald-600">Break-Even Resale Price</p>
              <p class="text-xs mb-2 text-gray-400">
                <span v-if="hasResult">Minimum resale for $0 profit</span>
                <span v-else>Enter purchase price and costs</span>
              </p>
              <div class="font-extrabold mb-3 leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full"
                :class="hasResult ? 'text-5xl' : 'text-6xl text-gray-200'"
                style="color: #065f46;">
                {{ hasResult ? formatCurrency(breakEvenResalePrice) : '&mdash;' }}
              </div>
              <div v-if="hasResult"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold text-xs bg-emerald-100 text-emerald-700">
                Total project cost = break-even resale
              </div>
            </div>

            <!-- Risk Flags / Warnings -->
            <div v-if="riskFlags.length > 0" class="px-5 pt-4 pb-1 space-y-2" role="region" aria-label="Risk flags">
              <div v-for="(w, i) in riskFlags" :key="i"
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

            <!-- Cost Breakdown — analyze mode -->
            <div v-if="calcMode === 'analyze' && hasResult" class="p-5 space-y-2.5">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Cost Breakdown</h3>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Purchase Price</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(Number(form.purchasePrice) || 0) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Purchase Closing Costs</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(Number(form.purchaseClosingCosts) || 0) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Rehab Cost</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(Number(form.rehabCost) || 0) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Rehab Contingency ({{ rehabContingencyPctVal }}%)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(rehabContingencyCalc) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Total Holding Costs ({{ holdingPeriodVal }} mo)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(totalHoldingCosts) }}</span>
              </div>
              <div v-if="!isManualFinancingOverride && interestCost > 0" class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Interest Cost</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(interestCost) }}</span>
              </div>
              <div v-if="!isManualFinancingOverride && pointsCost > 0" class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Points Cost</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(pointsCost) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Total Financing Cost{{ isManualFinancingOverride ? ' (override)' : '' }}</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(financingCost) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Selling Costs ({{ sellingCostPctVal }}% of ARV)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(sellingCosts) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-100 font-bold">
                <span class="text-sm text-gray-700">Total Project Cost</span>
                <span class="text-gray-900">{{ formatCurrency(totalProjectCost) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">ARV (resale target)</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(Number(form.arv) || 0) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Gross Spread (ARV &minus; Purchase)</span>
                <span class="font-semibold" :class="grossSpread >= 0 ? 'text-gray-900' : 'text-red-600'">{{ formatCurrency(grossSpread) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 rounded-xl px-3"
                :style="`background: ${verdict.bg1}18`">
                <span class="text-sm font-extrabold text-gray-800">Net Profit</span>
                <span class="font-extrabold text-base" :style="`color: ${verdict.bg1}`">
                  {{ netProfit >= 0 ? formatCurrency(netProfit) : '-' + formatCurrency(Math.abs(netProfit)) }}
                </span>
              </div>
              <div class="mt-3 p-3 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden">
                <p class="text-xs text-center text-gray-400 font-medium">
                  Net Profit = ARV &minus; Total Project Cost
                </p>
                <p class="text-xs text-center text-gray-500 font-semibold mt-1 break-all">
                  {{ formatCurrency(Number(form.arv) || 0) }} &minus; {{ formatCurrency(totalProjectCost) }} = <span :style="`color: ${verdict.bg1}`">{{ netProfit >= 0 ? formatCurrency(netProfit) : '-' + formatCurrency(Math.abs(netProfit)) }}</span>
                </p>
              </div>
            </div>

            <!-- Deal Diagnostics Grid — analyze mode -->
            <div v-if="calcMode === 'analyze' && hasResult" class="p-5">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Deal Diagnostics</h3>
              <div class="grid grid-cols-2 gap-3">
                <!-- ROI on Cash -->
                <div class="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <p class="text-xs font-semibold text-gray-500 mb-1">ROI on Cash Invested</p>
                  <p class="text-lg font-extrabold" :class="roiOnCash !== null && roiOnCash >= 20 ? 'text-emerald-700' : roiOnCash !== null && roiOnCash >= 0 ? 'text-amber-700' : 'text-red-600'">
                    {{ roiOnCash !== null ? roiOnCash.toFixed(2) + '%' : 'N/A' }}
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">Cash invested: {{ formatCurrency(cashInvestedUsed) }}</p>
                </div>
                <!-- Break-Even -->
                <div class="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <p class="text-xs font-semibold text-gray-500 mb-1">Break-Even Resale</p>
                  <p class="text-lg font-extrabold text-gray-900">{{ formatCurrency(breakEvenResalePrice) }}</p>
                  <p class="text-xs text-gray-400 mt-0.5">Min sale for $0 profit</p>
                </div>
                <!-- Max Purchase at Target -->
                <div class="p-3 rounded-xl" :class="offerGap >= 0 ? 'bg-emerald-50 border border-emerald-200' : 'bg-amber-50 border border-amber-200'">
                  <p class="text-xs font-semibold text-gray-500 mb-1">Max Purchase @ Target</p>
                  <p class="text-lg font-extrabold" :class="offerGap >= 0 ? 'text-emerald-800' : 'text-amber-800'">
                    {{ maxPurchaseAtTarget !== null ? formatCurrency(maxPurchaseAtTarget) : 'N/A' }}
                  </p>
                  <p v-if="maxPurchaseAtTarget !== null" class="text-xs font-bold mt-1" :class="offerGap >= 0 ? 'text-emerald-600' : 'text-amber-600'">
                    <span v-if="offerGap >= 0">Below max by {{ formatCurrency(offerGap) }}</span>
                    <span v-else>Above max by {{ formatCurrency(Math.abs(offerGap)) }}</span>
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">Target: {{ formatCurrency(targetProfitVal) }}</p>
                </div>
                <!-- 70% Rule -->
                <div class="p-3 rounded-xl border"
                  :class="isWithin70Rule ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'">
                  <p class="text-xs font-semibold text-gray-500 mb-1">70% Rule Max Offer</p>
                  <p class="text-lg font-extrabold" :class="isWithin70Rule ? 'text-emerald-800' : 'text-amber-800'">
                    {{ formatCurrency(seventyPercentRuleMax) }}
                  </p>
                  <p class="text-xs font-bold mt-1" :class="isWithin70Rule ? 'text-emerald-600' : 'text-amber-600'">
                    <span v-if="isWithin70Rule">Within rule</span>
                    <span v-else>Outside rule</span>
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">Context only &mdash; not a complete model</p>
                </div>
                <!-- Margin of Safety -->
                <div class="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <p class="text-xs font-semibold text-gray-500 mb-1">Margin of Safety</p>
                  <p class="text-lg font-extrabold" :class="profitMargin >= 15 ? 'text-emerald-700' : profitMargin >= 10 ? 'text-amber-700' : 'text-red-600'">
                    {{ profitMargin.toFixed(2) }}%
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">Downside cushion (% of ARV)</p>
                </div>
                <!-- Cost as % of ARV -->
                <div class="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <p class="text-xs font-semibold text-gray-500 mb-1">Cost as % of ARV</p>
                  <p class="text-lg font-extrabold text-gray-900">{{ costPercentOfARV.toFixed(2) }}%</p>
                  <p class="text-xs text-gray-400 mt-0.5">Lower is better</p>
                </div>
              </div>
            </div>

            <!-- Find-max-price result breakdown -->
            <div v-if="calcMode === 'find-max-price' && maxPurchaseAtTarget !== null" class="p-5 space-y-2.5">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">At This Price</h3>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Max Purchase Price</span>
                <span class="font-bold text-blue-800">{{ formatCurrency(maxPurchaseAtTarget) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Target Profit</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(targetProfitVal) }}</span>
              </div>
              <div v-if="Number(form.purchasePrice) > 0" class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Offer Gap</span>
                <span class="font-semibold" :class="offerGap >= 0 ? 'text-emerald-700' : 'text-red-600'">
                  {{ offerGap >= 0 ? formatCurrency(offerGap) + ' below max' : formatCurrency(Math.abs(offerGap)) + ' above max' }}
                </span>
              </div>
              <div class="p-3 rounded-xl bg-blue-50 border border-blue-100">
                <p class="text-xs text-blue-700 text-center">
                  At <strong>{{ formatCurrency(maxPurchaseAtTarget) }}</strong>, your deal hits {{ formatCurrency(targetProfitVal) }} profit.
                  Any higher offer and you fall below your target.
                </p>
              </div>
            </div>

            <!-- Find-breakeven result breakdown -->
            <div v-if="calcMode === 'find-breakeven' && hasResult" class="p-5 space-y-2.5">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Break-Even Analysis</h3>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Break-Even Resale</span>
                <span class="font-bold text-emerald-800">{{ formatCurrency(breakEvenResalePrice) }}</span>
              </div>
              <div class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Total Project Cost</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(totalProjectCost) }}</span>
              </div>
              <div v-if="Number(form.arv) > 0" class="flex justify-between items-center py-1.5 border-b border-gray-50">
                <span class="text-sm text-gray-500">Cushion below ARV</span>
                <span class="font-semibold" :class="(Number(form.arv) - breakEvenResalePrice) > 0 ? 'text-emerald-700' : 'text-red-600'">
                  {{ formatCurrency(Number(form.arv) - breakEvenResalePrice) }}
                </span>
              </div>
              <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                <p class="text-xs text-emerald-700 text-center">
                  You need to sell at minimum <strong>{{ formatCurrency(breakEvenResalePrice) }}</strong> to break even on all project costs.
                </p>
              </div>
            </div>

          </div>

          <!-- ── DEAL CONTEXT (Insight Text) ── analyze mode -->
          <div v-if="calcMode === 'analyze' && hasResult" class="bg-white rounded-xl border border-gray-200 p-5">
            <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Deal Context</h3>
            <p class="text-sm text-gray-700 leading-relaxed">{{ insightText }}</p>
          </div>

          <!-- ── SENSITIVITY TABLE ── analyze mode -->
          <div v-if="calcMode === 'analyze' && hasResult" class="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <button @click="showSensitivity = !showSensitivity"
              class="w-full flex items-center justify-between px-5 py-3 text-sm transition"
              :class="showSensitivity ? 'bg-amber-50 text-amber-800 font-semibold' : 'text-gray-600 hover:bg-gray-50 font-medium'">
              <span>Sensitivity Analysis &mdash; ARV &times; Rehab Overrun</span>
              <svg class="w-4 h-4 transition-transform flex-shrink-0" :class="showSensitivity ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-if="showSensitivity" class="p-5">
              <h4 class="text-xs font-bold text-gray-600 mb-2">Net Profit by ARV &amp; Rehab Overrun</h4>
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
                    <tr v-for="row in sensitivityTable" :key="row.label"
                      class="border-t border-gray-100"
                      :class="row.isBase ? 'bg-amber-50 font-semibold' : 'bg-white'">
                      <td class="px-2 py-2 text-gray-700">{{ row.label }}<span v-if="row.isBase" class="text-amber-500 ml-1">*</span></td>
                      <td v-for="cell in row.cells" :key="cell.key" class="px-2 py-2 text-right"
                        :class="cell.profit >= 0 ? 'text-gray-900' : 'text-red-600'">
                        {{ cell.profit >= 0 ? formatCurrency(cell.profit) : '-' + formatCurrency(Math.abs(cell.profit)) }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-xs text-gray-400 mt-2 italic">Conservative scenarios show downside risk. Even 15% rehab overrun can eliminate thin margins.</p>
            </div>
          </div>

          <!-- ── ACTION BUTTONS ── -->
          <div v-if="hasResult || (calcMode === 'find-max-price' && maxPurchaseAtTarget !== null)"
            class="bg-white rounded-xl border border-gray-200 overflow-hidden p-4 space-y-2">

            <button v-if="hasResult" @click="openSaveScenario"
              class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
              style="background: #f59e0b; color: #1e3a5f;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
              </svg>
              Save Scenario
            </button>

            <!-- Cross-links -->
            <a v-if="form.arv" :href="`/arv-calculator?arv=${form.arv}`"
              class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm transition text-white bg-indigo-600 hover:bg-indigo-700">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
              Validate ARV
            </a>
            <a :href="`/70-percent-rule-calculator?arv=${form.arv || ''}&rehab=${totalRehabBudget || ''}`"
              class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm transition bg-amber-600 hover:bg-amber-700 text-white">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
              70% Rule Quick Screen
            </a>

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
        calculator="house-flipping-profit"
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

      <!-- 1. OVERVIEW -->
      <section id="overview" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">House Flipping Profit Calculator &mdash; Overview</h2>
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>
            That "$150K spread" is not your profit. After rehab, holding costs, financing, and selling fees &mdash; many flips shrink fast or go negative. The RealCalc <strong>House Flipping Profit Calculator</strong> estimates real flip profit after ALL major project costs: purchase, rehab plus contingency, holding, financing, and selling. It answers one critical question: <em>"How much profit is left after everything?"</em>
          </p>
          <p>
            This calculator computes net profit, profit margin, ROI on cash invested, break-even resale price, maximum purchase price at target profit, margin of safety, and the 70% rule cross-check &mdash; giving you a complete picture before you make an offer.
          </p>
          <p>
            <strong>One wrong assumption can kill your deal:</strong> rehab overruns, longer holding time, or a lower resale price. Even a 5&ndash;10% mistake can erase your entire profit. Run the numbers before you make an offer.
          </p>
        </div>
      </section>

      <!-- 2. HOW TO USE -->
      <section id="how-to-use" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">How to Use the House Flipping Profit Calculator</h2>
        <p class="text-gray-600 mb-6">Follow these steps to project real flip profit in under 3 minutes.</p>
        <div class="space-y-5">
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style="background: #1e3a5f;">1</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Enter property details</h3>
              <p class="text-gray-700 text-sm leading-relaxed">Enter Purchase Price and After Repair Value (ARV). ARV should be based on conservative comparable sales &mdash; this is the most critical input.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style="background: #1e3a5f;">2</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Enter rehab budget and contingency</h3>
              <p class="text-gray-700 text-sm leading-relaxed">Enter your estimated rehab cost and contingency percentage. Rehab estimates should be validated with contractor bids. Always include contingency &mdash; 10% minimum, 15&ndash;20% for heavy rehabs.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style="background: #1e3a5f;">3</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Add holding and selling costs</h3>
              <p class="text-gray-700 text-sm leading-relaxed">Enter monthly holding costs (taxes, insurance, utilities, HOA) and holding period in months. Set selling cost percentage (typically 6&ndash;10% of ARV).</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style="background: #1e3a5f;">4</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Set financing details</h3>
              <p class="text-gray-700 text-sm leading-relaxed">Enter loan amount, interest rate, points, and fees. Or use the manual financing cost override for a single total. The calculator uses simplified interest-only financing.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm" style="background: #1e3a5f;">5</div>
            <div>
              <h3 class="font-bold text-gray-900 mb-1">Review results and diagnostics</h3>
              <p class="text-gray-700 text-sm leading-relaxed">See net profit, profit margin, ROI, break-even resale price, max purchase price at target profit, offer gap, and risk flags. Use sensitivity analysis to stress-test your assumptions.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. INPUTS & OUTPUTS -->
      <section id="inputs-outputs" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Inputs &amp; Outputs</h2>
        <p class="text-gray-600 mb-6">What each field means and what the calculator outputs.</p>
        <div class="space-y-6">
          <div>
            <h3 class="font-bold text-gray-800 mb-3">Inputs</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm border-collapse">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="text-left px-3 py-2 font-semibold text-gray-600 border border-gray-200">Field</th>
                    <th class="text-left px-3 py-2 font-semibold text-gray-600 border border-gray-200">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Purchase Price</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Contract price to acquire the property</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">ARV / Resale Price</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Expected resale value after repairs</td></tr>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Rehab Cost</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Estimated total renovation cost</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">Rehab Contingency</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Budget buffer for overruns (0&ndash;50%)</td></tr>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Purchase Closing Costs</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Closing costs at purchase</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">Selling Cost %</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Commissions, concessions, closing at sale (% of ARV)</td></tr>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Monthly Holding Costs</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Taxes, insurance, utilities, HOA per month</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">Holding Period</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Months from purchase to sale</td></tr>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Loan Amount</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Total loan proceeds</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">Interest Rate</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Annual interest rate (interest-only)</td></tr>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Points %</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Lender origination points (% of loan)</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">Financing Fees</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Additional lender fees in dollars</td></tr>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Manual Financing Override</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Overrides all calculated financing cost</td></tr>
                  <tr class="bg-gray-50"><td class="px-3 py-2 border border-gray-200 font-medium">Cash Invested</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Total cash out of pocket (auto-estimated if blank)</td></tr>
                  <tr class="bg-white"><td class="px-3 py-2 border border-gray-200 font-medium">Target Profit</td><td class="px-3 py-2 border border-gray-200 text-gray-600">Desired profit for max purchase price analysis</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 class="font-bold text-gray-800 mb-3">Outputs</h3>
            <ul class="space-y-1 text-sm text-gray-700">
              <li><strong>Net Profit</strong> &mdash; ARV minus total project cost</li>
              <li><strong>Profit Margin</strong> &mdash; Net profit as % of ARV</li>
              <li><strong>ROI on Cash Invested</strong> &mdash; Net profit / cash invested</li>
              <li><strong>Total Project Cost</strong> &mdash; All costs summed</li>
              <li><strong>Break-Even Resale Price</strong> &mdash; Minimum resale for $0 profit</li>
              <li><strong>Max Purchase Price at Target Profit</strong> &mdash; Highest price that still hits your target</li>
              <li><strong>Offer Gap</strong> &mdash; Difference between max purchase and your price</li>
              <li><strong>Margin of Safety</strong> &mdash; Downside cushion (% of ARV)</li>
              <li><strong>70% Rule Cross-Check</strong> &mdash; Quick deal screen (context only)</li>
              <li><strong>Cost as % of ARV</strong> &mdash; Total project cost relative to resale</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 4. FORMULA -->
      <section id="formula" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Formula</h2>
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <div class="p-5 rounded-2xl bg-gray-50 border border-gray-200">
            <p class="font-mono text-sm"><strong>Total Project Cost</strong> = Purchase Price + Purchase Closing Costs + Total Rehab Budget + Total Holding Costs + Financing Cost + Selling Costs</p>
          </div>
          <div class="p-5 rounded-2xl bg-gray-50 border border-gray-200">
            <p class="font-mono text-sm"><strong>Net Profit</strong> = ARV &minus; Total Project Cost</p>
          </div>
          <div class="p-5 rounded-2xl bg-gray-50 border border-gray-200">
            <p class="font-mono text-sm"><strong>Profit Margin</strong> = Net Profit &divide; ARV &times; 100</p>
          </div>
          <p>Gross spread (ARV &minus; Purchase Price) is NOT profit. Real profit must subtract rehab, holding, financing, and selling costs.</p>
        </div>
      </section>

      <!-- 5. WHY FLIPS FAIL -->
      <section id="why-flips-fail" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Why Flips Fail</h2>
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>Most flips don't fail because of bad ARV. They fail because:</p>
          <ul class="list-disc list-inside space-y-2 pl-2">
            <li>Rehab costs go over budget</li>
            <li>Timeline extends &mdash; each extra month adds taxes, insurance, utilities, and loan interest</li>
            <li>Financing gets expensive &mdash; hard money and short-term loans charge interest, points, and fees that scale with time</li>
            <li>Selling price comes in lower than expected</li>
          </ul>
          <p>Profit disappears quickly when margins are thin. A flip is profitable only if the spread survives rehab cost, holding costs, financing costs, selling costs, delays and overruns, and market risk.</p>
        </div>
      </section>

      <!-- 6. WHAT YOUR RESULT MEANS -->
      <section id="result-meaning" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">What Your Result Means</h2>
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>The calculator uses profit margin (net profit &divide; ARV) to classify your deal:</p>
          <div class="mt-4 p-5 rounded-2xl bg-gray-50 border border-gray-200">
            <ul class="space-y-2">
              <li class="flex gap-2 text-sm"><span class="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5"></span><span><strong>15%+ margin &amp; meets target &mdash; Excellent:</strong> Strong flip margin with healthy safety buffer</span></li>
              <li class="flex gap-2 text-sm"><span class="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-1.5"></span><span><strong>10&ndash;15% margin &mdash; Good:</strong> Workable flip margin, but stress-test assumptions</span></li>
              <li class="flex gap-2 text-sm"><span class="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-1.5"></span><span><strong>5&ndash;10% margin &mdash; Concerning:</strong> Thin profit cushion &mdash; any overrun may erase profit</span></li>
              <li class="flex gap-2 text-sm"><span class="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-1.5"></span><span><strong>&lt;5% margin or loss &mdash; Critical:</strong> Weak or negative flip economics &mdash; renegotiate or walk</span></li>
            </ul>
          </div>
          <p>If your margin is &gt;15%, the deal has room for mistakes. If &lt;10%, it's risky. If &lt;5%, it's fragile.</p>
        </div>
      </section>

      <!-- 7. REHAB RISK -->
      <section id="rehab-risk" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Rehab Risk</h2>
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>Underestimating rehab is the #1 mistake. Even a 10&ndash;20% overrun can wipe out profit. Always include contingency. Rehab estimates should be validated with contractor bids.</p>
          <p>Four factors determine flip success: purchase price, rehab cost, time (holding + financing), and exit price. If any one is wrong &mdash; profit changes dramatically.</p>
        </div>
      </section>

      <!-- 8. FINANCING COST -->
      <section id="financing-cost" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Financing Cost</h2>
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>Hard money and short-term loans charge interest, points, and fees. These costs scale with time &mdash; the longer the deal, the more profit disappears. The calculator uses simplified interest-only financing.</p>
          <p>Selling is not free. Typical selling costs include agent commission, closing costs, and buyer concessions &mdash; often 6&ndash;10% of resale price. This must be included in every deal analysis.</p>
        </div>
      </section>

      <!-- 9. MAX PURCHASE PRICE -->
      <section id="max-purchase" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Maximum Purchase Price</h2>
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>The best investors don't ask "How much can I pay?" &mdash; they ask "What is the maximum price that still leaves profit?" This calculator shows your max purchase price at your target profit, so you know your ceiling before making an offer.</p>
          <p>The 70% rule (Max price = ARV &times; 70% &minus; rehab) is a rough screen, not a complete profit model. It ignores holding costs, financing, and selling costs. Use it only as a quick check.</p>
        </div>
      </section>

      <!-- 10. LIMITATIONS -->
      <section id="limitations" class="py-10 border-b border-gray-100">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Limitations</h2>
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>This is a projection tool. It does NOT: guarantee resale price, replace contractor bids, replace financing quotes, replace market analysis, model every repair line item, model tax consequences, or model partnership splits.</p>
          <p>Use it to screen deals &mdash; not to blindly commit. This calculator is educational and does not replace underwriting, appraisal, contractor bids, or lender review.</p>
        </div>
      </section>

      <!-- 11. FAQ -->
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

      <!-- 12. RELATED CALCULATORS -->
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
          <p class="text-xs text-gray-400">&copy; 2026 RealCalc. For informational purposes only. Not financial advice.</p>
          <p class="text-xs text-gray-400">This calculator is educational and does not replace underwriting, appraisal, contractor bids, or lender review.</p>
        </div>
      </div>
    </footer>

    <EmailCaptureModal
      :show="showEmailModal"
      :calculator-name="'House Flipping Profit Calculator'"
      :primary-result="hasResult ? `${netProfit >= 0 ? formatCurrency(netProfit) : '-' + formatCurrency(Math.abs(netProfit))} profit · ${profitMargin.toFixed(2)}% margin` : undefined"
      title="Save Your Flip Profit Analysis"
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
  title: 'House Flipping Profit Calculator — Real Profit, ROI & Max Offer Price (2026) | RealCalc',
  meta: [
    {
      name: 'description',
      content: 'Calculate real flip profit after rehab, holding, financing, and selling costs. See ROI, margin, and max purchase price.'
    },
    { name: 'keywords', content: 'house flipping profit calculator, flip profit calculator, house flipping calculator, flip ROI calculator, max purchase price calculator, real estate flip profit, flipping houses profit' },
    { property: 'og:title', content: 'House Flipping Profit Calculator — Real Profit, ROI & Max Offer Price (2026) | RealCalc' },
    { property: 'og:description', content: 'Calculate real flip profit after rehab, holding, financing, and selling costs. See ROI, margin, and max purchase price.' },
    { property: 'og:type', content: 'website' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'House Flipping Profit Calculator',
        applicationCategory: 'FinanceApplication',
        description: 'Free 2026 house flipping profit calculator. Computes net profit, profit margin, ROI on cash invested, break-even resale, max purchase price at target profit, margin of safety, and 70% rule cross-check.',
        featureList: 'Net profit, profit margin, ROI on cash invested, total project cost, break-even resale price, max purchase price, offer gap, margin of safety, 70% rule cross-check, sensitivity analysis, PDF export, scenario saving',
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
            name: 'How do you calculate real flip profit?',
            acceptedAnswer: { '@type': 'Answer', text: 'Real flip profit = ARV minus ALL costs: purchase price, purchase closing costs, rehab (including contingency), holding costs, financing cost, and selling costs. Gross spread (ARV minus purchase) is NOT profit — it ignores the costs that actually eat your margin.' }
          },
          {
            '@type': 'Question',
            name: 'What is a good profit margin for a house flip?',
            acceptedAnswer: { '@type': 'Answer', text: 'A profit margin above 15% of ARV is considered excellent with strong safety buffer. 10–15% is good but workable. 5–10% is concerning — any overrun may erase profit. Below 5% is critical and may not justify the risk.' }
          },
          {
            '@type': 'Question',
            name: 'How do you calculate maximum purchase price for a flip?',
            acceptedAnswer: { '@type': 'Answer', text: 'Max Purchase Price = ARV minus target profit minus all non-purchase costs (rehab budget, holding costs, financing cost, selling costs, closing costs). This tells you the highest price you can pay and still hit your profit target.' }
          },
          {
            '@type': 'Question',
            name: 'What is the 70% rule in house flipping?',
            acceptedAnswer: { '@type': 'Answer', text: 'The 70% rule says: Max Price = ARV × 70% minus rehab budget. It is a rough screening tool that ignores holding costs, financing, and selling costs. Use it as a quick check, not a complete profit model.' }
          },
          {
            '@type': 'Question',
            name: 'Why do house flips lose money?',
            acceptedAnswer: { '@type': 'Answer', text: 'Flips lose money when costs exceed the spread between ARV and purchase price. The most common causes are rehab overruns, longer holding periods (which increase financing and carrying costs), lower-than-expected resale price, and underestimated selling costs.' }
          },
          {
            '@type': 'Question',
            name: 'How much contingency should I include in rehab budget?',
            acceptedAnswer: { '@type': 'Answer', text: '10% minimum for light cosmetic rehabs. 15–20% for moderate to heavy rehabs. In 2026, supply chain surprises and permit delays are common. Budget for overruns, not perfection.' }
          },
          {
            '@type': 'Question',
            name: 'What selling costs should I include?',
            acceptedAnswer: { '@type': 'Answer', text: 'Typical selling costs are 6–10% of resale price (ARV). This includes agent commissions (5–6%), seller concessions (1–2%), transfer taxes, closing costs, and staging/marketing costs. These must be deducted from every deal analysis.' }
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
const showSensitivity = ref(false)

const form = reactive({
  purchasePrice: null,
  arv: null,
  scenarioName: '',
  rehabCost: null,
  rehabContingencyPct: 10,
  purchaseClosingCosts: null,
  sellingCostPct: 8,
  monthlyHoldingCosts: null,
  holdingPeriodMonths: 6,
  loanAmount: null,
  interestRate: null,
  pointsPct: null,
  financingFees: null,
  manualFinancingCost: null,
  cashInvested: null,
  targetProfit: 30000,
})

// ─── COMPUTED — DERIVED VALUES ────────────────────────────────────────────────
const rehabContingencyPctVal = computed(() => Number(form.rehabContingencyPct) || 0)
const sellingCostPctVal = computed(() => Number(form.sellingCostPct) || 0)
const holdingPeriodVal = computed(() => Number(form.holdingPeriodMonths) || 6)
const targetProfitVal = computed(() => Number(form.targetProfit) || 30000)

const rehabContingencyCalc = computed(() =>
  (Number(form.rehabCost) || 0) * rehabContingencyPctVal.value / 100
)

const totalRehabBudget = computed(() =>
  (Number(form.rehabCost) || 0) + rehabContingencyCalc.value
)

const totalHoldingCosts = computed(() =>
  (Number(form.monthlyHoldingCosts) || 0) * holdingPeriodVal.value
)

const sellingCosts = computed(() =>
  (Number(form.arv) || 0) * sellingCostPctVal.value / 100
)

// ─── FINANCING ───────────────────────────────────────────────────────────────
const isManualFinancingOverride = computed(() =>
  form.manualFinancingCost !== null && form.manualFinancingCost !== '' && Number(form.manualFinancingCost) >= 0
)

const interestCost = computed(() => {
  const la = Number(form.loanAmount) || 0
  const rate = Number(form.interestRate)
  if (la > 0 && rate > 0) {
    return la * (rate / 100) * (holdingPeriodVal.value / 12)
  }
  return 0
})

const pointsCost = computed(() =>
  (Number(form.loanAmount) || 0) * ((Number(form.pointsPct) || 0) / 100)
)

const financingCost = computed(() => {
  if (isManualFinancingOverride.value) {
    return Number(form.manualFinancingCost) || 0
  }
  return interestCost.value + pointsCost.value + (Number(form.financingFees) || 0)
})

// ─── TOTAL PROJECT COST ──────────────────────────────────────────────────────
const totalProjectCost = computed(() =>
  (Number(form.purchasePrice) || 0) +
  (Number(form.purchaseClosingCosts) || 0) +
  totalRehabBudget.value +
  totalHoldingCosts.value +
  financingCost.value +
  sellingCosts.value
)

// ─── PROFIT / MARGIN ─────────────────────────────────────────────────────────
const grossSpread = computed(() =>
  (Number(form.arv) || 0) - (Number(form.purchasePrice) || 0)
)

const netProfit = computed(() =>
  (Number(form.arv) || 0) - totalProjectCost.value
)

const profitMargin = computed(() => {
  const arv = Number(form.arv) || 0
  if (arv <= 0) return 0
  return (netProfit.value / arv) * 100
})

// ─── CASH INVESTED ───────────────────────────────────────────────────────────
const estimatedCashInvested = computed(() => {
  const pp = Number(form.purchasePrice) || 0
  const pcc = Number(form.purchaseClosingCosts) || 0
  const la = Number(form.loanAmount) || 0
  return Math.max(pp + pcc + totalRehabBudget.value + totalHoldingCosts.value + financingCost.value - la, 0)
})

const cashInvestedUsed = computed(() => {
  if (form.cashInvested !== null && form.cashInvested !== '' && Number(form.cashInvested) > 0) {
    return Number(form.cashInvested)
  }
  return estimatedCashInvested.value
})

const roiOnCash = computed(() => {
  if (cashInvestedUsed.value > 0) {
    return (netProfit.value / cashInvestedUsed.value) * 100
  }
  return null
})

// ─── COST AS % OF ARV ────────────────────────────────────────────────────────
const costPercentOfARV = computed(() => {
  const arv = Number(form.arv) || 0
  if (arv <= 0) return 0
  return (totalProjectCost.value / arv) * 100
})

// ─── BREAK-EVEN RESALE ──────────────────────────────────────────────────────
const breakEvenResalePrice = computed(() => totalProjectCost.value)

// ─── MAX PURCHASE AT TARGET ─────────────────────────────────────────────────
const maxPurchaseAtTarget = computed(() => {
  const arv = Number(form.arv) || 0
  if (arv <= 0) return null
  const result = arv -
    targetProfitVal.value -
    (Number(form.purchaseClosingCosts) || 0) -
    totalRehabBudget.value -
    totalHoldingCosts.value -
    financingCost.value -
    sellingCosts.value
  return Math.floor(result)
})

// ─── OFFER GAP ──────────────────────────────────────────────────────────────
const offerGap = computed(() => {
  if (maxPurchaseAtTarget.value === null) return 0
  return maxPurchaseAtTarget.value - (Number(form.purchasePrice) || 0)
})

// ─── 70% RULE ───────────────────────────────────────────────────────────────
const seventyPercentRuleMax = computed(() =>
  (Number(form.arv) || 0) * 0.70 - totalRehabBudget.value
)

const isWithin70Rule = computed(() =>
  (Number(form.purchasePrice) || 0) <= seventyPercentRuleMax.value
)

// ─── HAS RESULT ──────────────────────────────────────────────────────────────
const hasResult = computed(() =>
  Number(form.purchasePrice) > 0 && Number(form.arv) > 0
)

// ─── VERDICT ─────────────────────────────────────────────────────────────────
const verdict = computed(() => {
  const margin = profitMargin.value
  const np = netProfit.value
  const tp = targetProfitVal.value

  if (margin >= 15 && np >= tp) return { label: 'Strong flip margin', bg1: '#059669', bg2: '#047857' }
  if (margin >= 10 && np > 0)   return { label: 'Workable flip margin', bg1: '#2563EB', bg2: '#1D4ED8' }
  if (margin >= 5 || np <= tp)  return { label: 'Thin profit cushion', bg1: '#F59E0B', bg2: '#D97706' }
  return                                { label: 'Weak or negative flip economics', bg1: '#DC2626', bg2: '#B91C1C' }
})

// ─── RISK FLAGS ──────────────────────────────────────────────────────────────
const riskFlags = computed(() => {
  if (!hasResult.value) return []
  const flags = []
  const pp = Number(form.purchasePrice) || 0
  const arv = Number(form.arv) || 0

  if (profitMargin.value < 10 && netProfit.value > 0) {
    flags.push({ type: 'warn', msg: 'Thin margin. Small rehab overruns or resale discounts may erase profit.' })
  }
  if (rehabContingencyPctVal.value < 10 && (Number(form.rehabCost) || 0) > 0) {
    flags.push({ type: 'warn', msg: 'Low contingency may understate rehab risk.' })
  }
  if (holdingPeriodVal.value > 9) {
    flags.push({ type: 'warn', msg: 'Long holding period increases financing and carrying cost risk.' })
  }
  if (arv > 0 && financingCost.value > arv * 0.10) {
    flags.push({ type: 'warn', msg: 'Financing cost is a major drag on profit.' })
  }
  if (arv > 0 && sellingCosts.value > arv * 0.10) {
    flags.push({ type: 'warn', msg: 'Selling costs are unusually high and may reduce net profit.' })
  }
  if (maxPurchaseAtTarget.value !== null && pp > maxPurchaseAtTarget.value) {
    flags.push({ type: 'warn', msg: 'Purchase price is above target-profit max offer.' })
  }
  if (arv < totalProjectCost.value) {
    flags.push({ type: 'error', msg: 'Projected resale price is below total project cost.' })
  }
  if (seventyPercentRuleMax.value < pp) {
    flags.push({ type: 'warn', msg: 'Purchase price exceeds rough 70% rule screen.' })
  }

  return flags
})

// ─── INSIGHT TEXT ────────────────────────────────────────────────────────────
const insightText = computed(() => {
  if (!hasResult.value) return ''
  const margin = profitMargin.value
  const np = netProfit.value
  const v = verdict.value.label

  if (np <= 0) {
    return `${v}. The flip may not justify the risk under current assumptions. Renegotiate purchase price, reduce scope, improve ARV evidence, or reject the deal.`
  }
  if (margin < 5) {
    return `${v}. Profit margin of ${margin.toFixed(2)}% is extremely thin. A small ARV miss, rehab overrun, or delay may materially reduce profit. Renegotiate or walk.`
  }
  if (margin < 10) {
    return `${v}. Profit margin of ${margin.toFixed(2)}% gives a thin cushion. A small ARV miss, rehab overrun, or delay may materially reduce profit. Stress-test resale price, rehab overruns, and holding delays.`
  }
  if (margin < 15) {
    return `${v}. The flip appears workable, but margin is not unlimited. Stress-test resale price, rehab overruns, and holding delays. Verify ARV, contractor bids, financing terms, and sale timeline before proceeding.`
  }
  return `${v}. The flip shows strong projected profit and margin under current assumptions. Still verify ARV, contractor bids, financing terms, and sale timeline before proceeding.`
})

// ─── SENSITIVITY TABLE ──────────────────────────────────────────────────────
const sensitivityTable = computed(() => {
  const pp = Number(form.purchasePrice) || 0
  const arv = Number(form.arv) || 0
  const rc = Number(form.rehabCost) || 0
  if (!pp || !arv) return []

  const arvDeltas = [-0.10, -0.05, 0, 0.05, 0.10]
  const rehabMultipliers = [1.00, 1.15, 1.30]

  return arvDeltas.map(d => ({
    label: d === 0 ? 'Target ARV' : (d > 0 ? `ARV +${Math.abs(d * 100)}%` : `ARV -${Math.abs(d * 100)}%`),
    isBase: d === 0,
    cells: rehabMultipliers.map((m, j) => {
      const adjARV = arv * (1 + d)
      const adjRehab = rc * m
      const adjContingency = adjRehab * rehabContingencyPctVal.value / 100
      const adjRehabBudget = adjRehab + adjContingency
      const adjSellingCosts = adjARV * sellingCostPctVal.value / 100
      const adjTotalCost = pp + (Number(form.purchaseClosingCosts) || 0) + adjRehabBudget + totalHoldingCosts.value + financingCost.value + adjSellingCosts
      const profit = adjARV - adjTotalCost
      return { key: j, profit }
    })
  }))
})

// ─── SCENARIO RESULT ────────────────────────────────────────────────────────
const currentScenarioResult = computed(() => {
  if (!hasResult.value) return undefined
  return {
    primaryMetric: 'Net Profit',
    primaryValue: netProfit.value >= 0 ? formatCurrency(netProfit.value) : '-' + formatCurrency(Math.abs(netProfit.value)),
    badgeLabel: verdict.value.label,
    badgeColor: verdict.value.bg1,
    roi: roiOnCash.value || 0,
    totalProfit: netProfit.value,
    totalCashInvested: cashInvestedUsed.value,
    holdPeriodMonths: holdingPeriodVal.value,
    profitMargin: profitMargin.value,
    maxPurchasePrice: maxPurchaseAtTarget.value,
    breakEvenResale: breakEvenResalePrice.value,
  }
})

// ─── FAQ DATA ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How do you calculate real flip profit?',
    a: 'Real flip profit = ARV minus ALL costs: purchase price, purchase closing costs, rehab (including contingency), holding costs, financing cost, and selling costs. Gross spread (ARV minus purchase) is NOT profit — it ignores the costs that actually eat your margin.'
  },
  {
    q: 'What is a good profit margin for a house flip?',
    a: 'A profit margin above 15% of ARV is considered excellent with a strong safety buffer. 10–15% is good but workable. 5–10% is concerning — any overrun may erase profit. Below 5% is critical and may not justify the risk.'
  },
  {
    q: 'How do you calculate maximum purchase price for a flip?',
    a: 'Max Purchase Price = ARV minus target profit minus all non-purchase costs (rehab budget, holding costs, financing cost, selling costs, closing costs). This tells you the highest price you can pay and still hit your profit target.'
  },
  {
    q: 'What is the 70% rule in house flipping?',
    a: 'The 70% rule says: Max Price = ARV × 70% minus rehab budget. It is a rough screening tool that ignores holding costs, financing, and selling costs. Use it as a quick check, not a complete profit model.'
  },
  {
    q: 'Why do house flips lose money?',
    a: 'Flips lose money when costs exceed the spread between ARV and purchase price. The most common causes are rehab overruns, longer holding periods (which increase financing and carrying costs), lower-than-expected resale price, and underestimated selling costs.'
  },
  {
    q: 'How much contingency should I include in rehab budget?',
    a: '10% minimum for light cosmetic rehabs. 15–20% for moderate to heavy rehabs. In 2026, supply chain surprises and permit delays are common. Budget for overruns, not perfection.'
  },
  {
    q: 'What selling costs should I include?',
    a: 'Typical selling costs are 6–10% of resale price (ARV). This includes agent commissions (5–6%), seller concessions (1–2%), transfer taxes, closing costs, and staging/marketing costs. These must be deducted from every deal analysis.'
  }
]

// ─── RELATED CALCULATORS ────────────────────────────────────────────────────
const relatedCalcs = [
  { label: 'Rehab Cost Estimator',       href: '/rehab-cost-estimator' },
  { label: 'Hard Money Loan Calculator',  href: '/hard-money-loan-calculator' },
  { label: 'ARV Calculator',             href: '/arv-calculator' },
  { label: '70% Rule Calculator',        href: '/70-percent-rule-calculator' },
  { label: 'Cash-on-Cash Calculator',    href: '/cash-on-cash-calculator' },
  { label: 'Real Estate ROI Calculator', href: '/real-estate-roi-calculator' },
  { label: 'Compare Real Estate Deals',  href: '/compare-real-estate-deals' },
  { label: 'Fix and Flip Calculator',    href: '/fix-and-flip-calculator' },
]

// ─── URL PERSISTENCE ────────────────────────────────────────────────────────
function buildShareParams() {
  const p = new URLSearchParams()
  if (calcMode.value !== 'analyze') p.set('md', calcMode.value)
  if (form.purchasePrice)           p.set('price', form.purchasePrice)
  if (form.arv)                     p.set('arv', form.arv)
  if (form.rehabCost)               p.set('rehab', form.rehabCost)
  if (form.rehabContingencyPct !== 10) p.set('cont', form.rehabContingencyPct)
  if (form.purchaseClosingCosts)    p.set('closing', form.purchaseClosingCosts)
  if (form.sellingCostPct !== 8)    p.set('sellpct', form.sellingCostPct)
  if (form.monthlyHoldingCosts)     p.set('holdcost', form.monthlyHoldingCosts)
  if (form.holdingPeriodMonths !== 6) p.set('months', form.holdingPeriodMonths)
  if (form.loanAmount)              p.set('loan', form.loanAmount)
  if (form.interestRate)            p.set('rate', form.interestRate)
  if (form.pointsPct)               p.set('points', form.pointsPct)
  if (form.financingFees)           p.set('fees', form.financingFees)
  if (form.manualFinancingCost !== null && form.manualFinancingCost !== '') p.set('fincost', form.manualFinancingCost)
  if (form.cashInvested)            p.set('cash', form.cashInvested)
  if (form.targetProfit !== 30000)  p.set('target', form.targetProfit)
  if (form.scenarioName)            p.set('name', form.scenarioName)
  return p.toString()
}

if (process.client) {
  onMounted(() => {
    const p = new URLSearchParams(window.location.search)
    if (p.has('md'))       calcMode.value              = p.get('md')
    if (p.has('price'))    form.purchasePrice          = Number(p.get('price'))
    if (p.has('arv'))      form.arv                    = Number(p.get('arv'))
    if (p.has('rehab'))    form.rehabCost              = Number(p.get('rehab'))
    if (p.has('cont'))     form.rehabContingencyPct    = Number(p.get('cont'))
    if (p.has('closing'))  form.purchaseClosingCosts   = Number(p.get('closing'))
    if (p.has('sellpct'))  form.sellingCostPct         = Number(p.get('sellpct'))
    if (p.has('holdcost')) form.monthlyHoldingCosts    = Number(p.get('holdcost'))
    if (p.has('months'))   form.holdingPeriodMonths    = Number(p.get('months'))
    if (p.has('loan'))     form.loanAmount             = Number(p.get('loan'))
    if (p.has('rate'))     form.interestRate           = Number(p.get('rate'))
    if (p.has('points'))   form.pointsPct              = Number(p.get('points'))
    if (p.has('fees'))     form.financingFees          = Number(p.get('fees'))
    if (p.has('fincost'))  form.manualFinancingCost    = Number(p.get('fincost'))
    if (p.has('cash'))     form.cashInvested           = Number(p.get('cash'))
    if (p.has('target'))   form.targetProfit           = Number(p.get('target'))
    if (p.has('name'))     form.scenarioName           = p.get('name')
  })
}

// ─── HELPERS ────────────────────────────────────────────────────────────────
function resetForm() {
  form.purchasePrice = null
  form.arv = null
  form.scenarioName = ''
  form.rehabCost = null
  form.rehabContingencyPct = 10
  form.purchaseClosingCosts = null
  form.sellingCostPct = 8
  form.monthlyHoldingCosts = null
  form.holdingPeriodMonths = 6
  form.loanAmount = null
  form.interestRate = null
  form.pointsPct = null
  form.financingFees = null
  form.manualFinancingCost = null
  form.cashInvested = null
  form.targetProfit = 30000
  calcMode.value = 'analyze'
  shareSuccess.value = false
  openFaq.value = null
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

// ─── PDF EXPORT ─────────────────────────────────────────────────────────────
async function exportPDF() {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF()
  const navy = [30, 58, 95]
  const gold = [245, 158, 11]
  const gray = [107, 114, 128]

  doc.setFillColor(...navy)
  doc.rect(0, 0, 210, 40, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(22)
  doc.setFont('helvetica', 'bold')
  doc.text('RealCalc', 20, 20)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.text('House Flipping Profit Analysis', 20, 30)
  doc.setFontSize(9)
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 130, 20)
  doc.text(`${holdingPeriodVal.value}-month hold`, 130, 28)

  const heroValue = netProfit.value >= 0 ? formatCurrency(netProfit.value) : '-' + formatCurrency(Math.abs(netProfit.value))
  doc.setFillColor(...gold)
  doc.rect(15, 50, 180, 30, 'F')
  doc.setTextColor(30, 58, 95)
  doc.setFontSize(24)
  doc.setFont('helvetica', 'bold')
  doc.text(heroValue, 105, 69, { align: 'center' })
  doc.setFontSize(9)
  doc.text('NET PROFIT', 105, 76, { align: 'center' })
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text(`Margin: ${profitMargin.value.toFixed(2)}% · ${verdict.value.label}`, 105, 82, { align: 'center' })

  if (hasResult.value) {
    doc.setTextColor(...navy)
    doc.setFontSize(13)
    doc.setFont('helvetica', 'bold')
    doc.text('Cost Breakdown', 20, 100)

    const rows = [
      ['Purchase Price',        formatCurrency(Number(form.purchasePrice) || 0)],
      ['Purchase Closing',      `-${formatCurrency(Number(form.purchaseClosingCosts) || 0)}`],
      ['Rehab Cost',            `-${formatCurrency(Number(form.rehabCost) || 0)}`],
      ['Rehab Contingency',     `-${formatCurrency(rehabContingencyCalc.value)}`],
      ['Total Holding Costs',   `-${formatCurrency(totalHoldingCosts.value)}`],
      ['Financing Cost',        `-${formatCurrency(financingCost.value)}`],
      ['Selling Costs',         `-${formatCurrency(sellingCosts.value)}`],
      ['──────────', '──────────'],
      ['Total Project Cost',    formatCurrency(totalProjectCost.value)],
      ['Net Profit',            heroValue],
      ['Profit Margin',         `${profitMargin.value.toFixed(2)}%`],
      ['ROI on Cash',           roiOnCash.value !== null ? `${roiOnCash.value.toFixed(2)}%` : 'N/A'],
      ['Break-Even Resale',     formatCurrency(breakEvenResalePrice.value)],
      ['Max Purchase @ Target', maxPurchaseAtTarget.value !== null ? formatCurrency(maxPurchaseAtTarget.value) : 'N/A'],
    ]

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
  }

  doc.setFillColor(...navy)
  doc.rect(0, 280, 210, 17, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text('RealCalc — Projected profit is an estimate. Not financial advice. This calculator is educational only.', 105, 290, { align: 'center' })

  doc.save(`house-flipping-profit-analysis-${Date.now()}.pdf`)
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
