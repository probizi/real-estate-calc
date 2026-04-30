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
            <li class="text-gray-700 font-semibold">Rehab Cost Estimator</li>
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
            Rehab Cost Estimator &mdash; Real Renovation Budget &amp; Cash Planning (2026)
          </h1>
          <p class="text-gray-500 mt-2 text-base">Estimate real rehab costs, total renovation budget, and monthly cash burn. Avoid underestimating repairs and killing your deal.</p>
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
            <li><a href="#what-drives-rehab-cost" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Drives Cost</a></li>
            <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
            <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
            <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
            <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
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
              <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
              <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
              <li><a href="#what-drives-rehab-cost" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Drives Cost</a></li>
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
          <span>Total Rehab Budget</span>
        </div>
        <div class="flex items-center gap-3">
          <span v-if="hasResult" class="text-xl font-extrabold leading-none" :style="`color: ${verdict?.color}`">
            {{ formatCurrency(totalRehabBudget) }}
          </span>
          <span v-else class="text-2xl font-bold text-gray-200">&mdash;</span>
          <span v-if="hasResult && verdict"
            class="text-xs font-bold px-2.5 py-1 rounded-full text-white"
            :style="`background: ${verdict.color}`">
            {{ verdict.label }}
          </span>
          <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         MAIN CALCULATOR
    ═══════════════════════════════════════════════ -->
    <main id="calculator" class="max-w-[1100px] mx-auto px-4 pt-8 pb-10">
      <div class="rounded-3xl p-[3px]" style="background: linear-gradient(135deg, #1e3a5f 0%, #f59e0b 50%, #1e3a5f 100%);">
      <div class="bg-white rounded-[21px] shadow-xl shadow-slate-200/60" style="overflow: clip;">

      <!-- ═══════════════════════════════════════════════
           TWO-COLUMN BODY
      ═══════════════════════════════════════════════ -->
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch">

        <!-- ── LEFT: INPUTS ── -->
        <div class="border-b lg:border-b-0 lg:border-r border-gray-200 bg-white min-w-0">

          <!-- SECTION: Property Details -->
          <div class="border-b border-gray-100">
            <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
              <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Property Details</h2>
            </div>
            <div class="px-4 py-3 space-y-3">

              <!-- Property Size -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">
                  Property Size (sq ft) <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <input v-model.number="form.propertySize" type="number" min="1" step="100"
                    placeholder="Enter property size in square feet"
                    class="w-full px-4 pr-14 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xs">sq ft</span>
                </div>
              </div>

              <!-- Rehab Level -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">
                  Rehab Level <span class="text-red-500">*</span>
                </label>
                <select v-model="form.rehabLevel"
                  class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm bg-white">
                  <option value="light">Light cosmetic</option>
                  <option value="medium">Medium rehab</option>
                  <option value="heavy">Heavy rehab</option>
                  <option value="gut">Full gut</option>
                </select>
                <p class="text-xs text-gray-400 mt-1">
                  <span v-if="form.rehabLevel === 'light'">$15&ndash;$30 / sq ft &mdash; paint, flooring, fixtures</span>
                  <span v-else-if="form.rehabLevel === 'medium'">$30&ndash;$60 / sq ft &mdash; kitchen, bath, systems updates</span>
                  <span v-else-if="form.rehabLevel === 'heavy'">$60&ndash;$100 / sq ft &mdash; structural, layout changes, full systems</span>
                  <span v-else>$100&ndash;$200 / sq ft &mdash; down to studs, complete rebuild</span>
                </p>
              </div>

              <!-- Property Type -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Property Type</label>
                <select v-model="form.propertyType"
                  class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm bg-white">
                  <option value="single-family">Single-family</option>
                  <option value="multifamily">Multifamily</option>
                  <option value="condo">Condo</option>
                  <option value="small-commercial">Small commercial</option>
                </select>
              </div>

              <!-- Location Cost Market -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Location Cost Market</label>
                <select v-model="form.locationMarket"
                  class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm bg-white">
                  <option value="low">Low cost market (0.80x)</option>
                  <option value="average">Average cost market (1.00x)</option>
                  <option value="high">High cost market (1.30x)</option>
                </select>
                <p v-if="form.locationMarket === 'high'" class="text-xs text-amber-600 mt-1 flex items-start gap-1">
                  <svg class="w-3 h-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                  High-cost markets can materially increase labor and material costs.
                </p>
              </div>

            </div>
          </div>

          <!-- SECTION: Cost Adjustments -->
          <div class="border-b border-gray-100">
            <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
              <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Cost Adjustments</h2>
            </div>
            <div class="px-4 py-3 space-y-3">

              <!-- Cost per Sq Ft Override -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Cost per Sq Ft Override</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model.number="form.costOverride" type="number" min="0" step="5"
                    placeholder="Optional: custom cost per square foot"
                    class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                </div>
                <p class="text-xs text-gray-400 mt-1">If entered, overrides the default range midpoint for the selected rehab level.</p>
              </div>

              <!-- Soft Costs Percentage -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Soft Costs Percentage</label>
                <div class="relative">
                  <input v-model.number="form.softCostsPct" type="number" min="0" max="30" step="1"
                    placeholder="Optional: soft costs percentage"
                    class="w-full pl-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">Permits, design, dumpsters, project management. Default: 8%.</p>
              </div>

              <!-- Contingency Percentage -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Contingency Percentage</label>
                <div class="relative">
                  <input v-model.number="form.contingencyPct" type="number" min="0" max="50" step="1"
                    placeholder="Optional: contingency percentage"
                    class="w-full pl-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">Default: 10%. Heavy/gut rehabs often need 15&ndash;20%.</p>
                <p v-if="showLowContingencyWarning" class="text-xs text-amber-600 mt-1 flex items-start gap-1">
                  <svg class="w-3 h-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                  Heavy and full-gut rehabs often need 15%&ndash;20% contingency.
                </p>
              </div>

            </div>
          </div>

          <!-- SECTION: Timeline -->
          <div class="border-b border-gray-100">
            <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
              <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Timeline &amp; Scenario</h2>
            </div>
            <div class="px-4 py-3 space-y-3">

              <!-- Rehab Months -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Rehab Timeline (months)</label>
                <input v-model.number="form.rehabMonths" type="number" min="1" max="60" step="1"
                  placeholder="Optional: estimated rehab timeline in months"
                  class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                <p class="text-xs text-gray-400 mt-1">Shows how much rehab cash is needed per month during the project.</p>
              </div>

              <!-- Scenario Name -->
              <div>
                <label class="block text-xs font-semibold text-gray-700 mb-1">Scenario Name</label>
                <input v-model="form.scenarioName" type="text"
                  placeholder="Optional: name this rehab scenario"
                  class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
              </div>

            </div>
          </div>

          <!-- IMPORTANT DISCLAIMERS -->
          <div class="px-4 py-3 border-t border-gray-100 bg-gray-50 space-y-2">
            <p class="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Important Notes</p>
            <div class="flex items-start gap-1.5 text-xs text-gray-500">
              <svg class="w-3 h-3 flex-shrink-0 mt-0.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
              <span>This is an estimate, not a contractor bid.</span>
            </div>
            <div class="flex items-start gap-1.5 text-xs text-gray-500">
              <svg class="w-3 h-3 flex-shrink-0 mt-0.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
              <span>Local labor and material costs may vary significantly.</span>
            </div>
            <div class="flex items-start gap-1.5 text-xs text-gray-500">
              <svg class="w-3 h-3 flex-shrink-0 mt-0.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
              <span>Contingency helps absorb overruns but does not eliminate risk.</span>
            </div>
            <div class="flex items-start gap-1.5 text-xs text-gray-500">
              <svg class="w-3 h-3 flex-shrink-0 mt-0.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
              <span>This calculator is educational and does not replace contractor bids or inspection findings.</span>
            </div>
          </div>

        </div>

        <!-- ── RIGHT: RESULTS ── -->
        <div class="min-w-0 lg:relative lg:overflow-hidden">
        <div class="bg-gray-50 scrollbar-thin lg:absolute lg:inset-0 lg:overflow-y-auto">
        <div class="space-y-4 p-4 lg:p-5">

          <!-- MAIN RESULT -->
          <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            <!-- Verdict Header -->
            <div class="p-5 text-center" :style="{ background: verdict?.gradient }">
              <p class="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">Total Rehab Budget</p>
              <div class="text-4xl font-extrabold text-white mb-1">{{ formatCurrency(totalRehabBudget) }}</div>
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-2">
                {{ verdict?.label }}
              </div>
              <p class="text-white/90 text-sm font-medium">{{ effectiveCostPerSqft.toFixed(2) }} / sq ft effective</p>
            </div>

            <!-- Property Type Context Note -->
            <div class="px-5 py-3 border-b border-gray-100 bg-gray-50">
              <p class="text-xs font-semibold text-gray-600">{{ propertyTypeContext }}</p>
            </div>

            <!-- Primary Metrics -->
            <div class="p-5 space-y-3">

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Total Rehab Budget</span>
                <span class="text-lg font-extrabold" :style="{ color: verdict?.color }">{{ formatCurrency(totalRehabBudget) }}</span>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Effective Cost / Sq Ft</span>
                <span class="text-base font-bold text-gray-800">${{ effectiveCostPerSqft.toFixed(2) }}</span>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Hard Costs</span>
                <span class="text-base font-bold text-gray-800">{{ formatCurrency(hardCosts) }}</span>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Soft Costs ({{ effectiveSoftPct }}%)</span>
                <span class="text-base font-bold text-gray-800">{{ formatCurrency(softCosts) }}</span>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Pre-Contingency Total</span>
                <span class="text-base font-bold text-gray-800">{{ formatCurrency(preContingencyCost) }}</span>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Contingency ({{ effectiveContPct }}%)</span>
                <span class="text-base font-bold text-gray-800">{{ formatCurrency(contingencyCost) }}</span>
              </div>

              <div class="py-2 border-b border-gray-100">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 font-medium">Base Cost / Sq Ft</span>
                  <span class="text-base font-bold text-gray-800">${{ baseCostPerSqft.toFixed(2) }}</span>
                </div>
              </div>

              <div class="py-2 border-b border-gray-100">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 font-medium">Location-Adjusted Cost / Sq Ft</span>
                  <span class="text-base font-bold text-gray-800">${{ adjustedCostPerSqft.toFixed(2) }}</span>
                </div>
                <p class="text-xs text-gray-400 mt-0.5">Base &times; {{ locationMultiplier.toFixed(2) }} location multiplier</p>
              </div>

              <!-- Monthly Burn -->
              <div v-if="monthlyBurn !== null" class="py-2 border-b border-gray-100">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 font-medium">Monthly Rehab Burn</span>
                  <span class="text-base font-bold" style="color: #1e3a5f;">{{ formatCurrency(monthlyBurn) }}</span>
                </div>
                <p class="text-xs text-gray-400 mt-0.5">Monthly burn excludes financing and holding costs.</p>
              </div>
              <div v-else class="py-2 border-b border-gray-100">
                <p class="text-xs text-gray-400">Enter rehab timeline to estimate monthly rehab burn.</p>
              </div>

            </div>

            <!-- Very high cost warning -->
            <div v-if="effectiveCostPerSqft > 250" class="px-5 pb-3">
              <div class="p-3 rounded-xl bg-red-50 border border-red-200">
                <p class="text-xs text-red-800 font-medium">Very high cost per square foot. Verify scope, luxury finishes, structural work, or input values.</p>
              </div>
            </div>

            <!-- Disclaimers -->
            <div class="px-5 pb-5">
              <div class="p-3 rounded-xl bg-gray-50 border border-gray-200">
                <p class="text-xs text-gray-500">
                  <strong>This is an estimate, not a contractor bid.</strong> These are national planning averages. Local labor and material costs may be 50%&ndash;100% higher in expensive markets.
                </p>
              </div>
            </div>

          </div>

          <!-- EMPTY STATE -->
          <div v-else class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
            <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style="background: #f0f4f8;">
              <svg class="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <p class="text-gray-500 font-medium text-sm">Enter property size to estimate your rehab budget.</p>
            <p class="text-gray-400 text-xs mt-1">Total = Hard Costs + Soft Costs + Contingency</p>
          </div>

          <!-- SENSITIVITY TABLE -->
          <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-3" style="color: #1e3a5f;">Budget Sensitivity &mdash; Cost per Sq Ft Variations</h3>
            <p class="text-xs text-gray-400 mb-3">How total budget shifts at different cost per sq ft levels.</p>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-gray-200">
                    <th class="text-left py-2 pr-3 font-bold text-gray-600 text-xs">Cost / Sq Ft</th>
                    <th class="text-center py-2 px-2 font-bold text-gray-600 text-xs">Total Budget</th>
                    <th class="text-right py-2 font-bold text-gray-600 text-xs">Signal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in sensitivityRows" :key="row.cost"
                    :class="row.isCurrent ? 'bg-yellow-50 font-semibold' : 'hover:bg-gray-50'">
                    <td class="py-2 pr-3 text-gray-800 text-xs">${{ row.cost.toFixed(2) }} / sq ft</td>
                    <td class="py-2 px-2 text-center text-xs font-bold" :style="{ color: row.color }">{{ formatCurrency(row.total) }}</td>
                    <td class="py-2 text-right text-xs font-semibold" :style="{ color: row.color }">{{ row.label }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- REAL IMPACT / DEAL CONTEXT -->
          <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-3" style="color: #1e3a5f;">Real Impact</h3>
            <div class="p-4 rounded-xl border" :class="verdict?.bgClass">
              <p class="text-sm font-bold mb-2" :style="{ color: verdict?.color }">{{ verdict?.label }}</p>
              <p class="text-sm text-gray-700">{{ realImpactText }}</p>
            </div>
          </div>

          <!-- ITEMIZED CATEGORIES NOTE -->
          <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-2" style="color: #1e3a5f;">Detailed Budgeting Note</h3>
            <p class="text-xs text-gray-500">This is not a line-item scope of work. For detailed budgeting, break costs into categories such as demo, framing, drywall, electrical, plumbing, HVAC, flooring, kitchen, bathroom, paint, roof, windows, and landscaping.</p>
          </div>

          <!-- ACTION BUTTONS -->
          <div v-if="hasResult" class="p-4 border-t border-gray-100 space-y-2">
            <button @click="openSaveScenario"
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

          <!-- GO DEEPER -->
          <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-3" style="color: #1e3a5f;">Go Deeper</h3>
            <p class="text-xs text-gray-500 mb-3">Feed your rehab budget into these calculators:</p>
            <div class="space-y-2">
              <NuxtLink to="/hard-money-loan-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">Hard Money Loan Calculator</p>
                  <p class="text-xs text-gray-500">Total financing cost for your rehab project</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/fix-and-flip-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">Fix &amp; Flip Calculator</p>
                  <p class="text-xs text-gray-500">Full flip profit analysis with your rehab cost</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/arv-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">ARV Calculator</p>
                  <p class="text-xs text-gray-500">After Repair Value to validate your deal</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/70-percent-rule-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">70% Rule Calculator</p>
                  <p class="text-xs text-gray-500">Quick max purchase price check</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
            </div>
          </div>

        </div>
        </div>
        </div>

      </div>
      </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           SAVED SCENARIOS
      ═══════════════════════════════════════════════ -->
      <div id="saved-scenarios" class="max-w-6xl mx-auto px-4 pb-6 mt-4">
        <ScenarioPanel
          calculator="rehab-cost"
          :has-result="hasResult"
          :result="currentScenarioResult"
          :trigger-save="triggerScenarioSave"
          @saved="onScenarioSaved"
        />
      </div>

      <!-- ═══════════════════════════════════════════════
           SEO CONTENT
      ═══════════════════════════════════════════════ -->
      <div class="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

      <!-- INTRO TEXT -->
      <div class="border-b border-gray-100 px-8 py-8">
        <div class="space-y-3">
          <p class="text-gray-700 text-base leading-relaxed">
            <strong>You don't lose money on the purchase.</strong> You lose it when the rehab goes over budget. That "$60k rehab" turns into $90k after demo. This free rehab cost estimator helps you see your real renovation cost before you buy &mdash; separating hard costs, soft costs, and contingency so you can plan with confidence.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            Underestimate rehab by 20% and your profit disappears. Add delays, change orders, and contractor surprises &mdash; and now your deal is upside down. This calculator uses national planning averages adjusted by location market and rehab scope to produce a realistic total renovation budget, not an optimistic guess.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            Below you'll find the complete rehab cost formula, cost ranges by renovation level, hard vs. soft cost breakdown, contingency guidance, monthly burn calculation, and a 7-question FAQ answering the most common rehab budgeting questions.
          </p>
        </div>
      </div>

      <!-- OVERVIEW -->
      <div id="overview" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">Overview</h2>
        <p class="text-gray-600 leading-relaxed mb-3">
          The <strong>Rehab Cost Estimator</strong> is designed for fix-and-flip investors, BRRRR operators, rental buyers, and value-add investors who need a fast, realistic renovation budget before committing to a deal. It calculates total rehab cost from property size, renovation scope, location market, soft costs, and contingency.
        </p>
        <p class="text-gray-600 leading-relaxed mb-3">
          Rehab cost is often the most underestimated part of a real estate deal. This calculator forces you to account for the full picture: <strong>hard costs</strong> (labor and materials), <strong>soft costs</strong> (permits, design, project management), and <strong>contingency</strong> (the buffer that absorbs surprises). Without all three, your budget is incomplete.
        </p>
        <p class="text-gray-600 leading-relaxed">
          This is a planning estimate, not a contractor quote. Use it to screen deals, compare renovation intensity, and set budget expectations &mdash; then validate with real contractor bids and inspection findings.
        </p>
      </div>

      <!-- HOW TO USE -->
      <div id="how-to-use" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-1" style="color: #1e3a5f;">How to Use This Rehab Cost Estimator</h2>
        <p class="text-gray-500 text-sm mb-6">Follow these steps to estimate your renovation budget in under 2 minutes</p>
        <div class="grid md:grid-cols-2 gap-10">
          <ol class="space-y-5">
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">1</div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Enter your property size</p>
                <p class="text-gray-500 text-sm mt-1">Total square footage of the property being renovated. This is the primary cost driver.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">2</div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Select your rehab level</p>
                <p class="text-gray-500 text-sm mt-1">Light cosmetic (paint &amp; carpet) through full gut (down to studs). Each level uses a different cost-per-square-foot midpoint.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">3</div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Choose your location market</p>
                <p class="text-gray-500 text-sm mt-1">Low, average, or high cost market. This applies a multiplier (0.80x to 1.30x) to the base cost per square foot.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">4</div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Adjust soft costs and contingency</p>
                <p class="text-gray-500 text-sm mt-1">Defaults are 8% soft costs and 10% contingency. For heavy rehabs, consider increasing contingency to 15&ndash;20%.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">5</div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Read your total budget</p>
                <p class="text-gray-500 text-sm mt-1">Review the full breakdown: hard costs, soft costs, contingency, effective cost per sq ft, and monthly burn if timeline is entered.</p>
              </div>
            </li>
          </ol>
          <div class="space-y-5">
            <div class="p-5 rounded-xl border border-amber-200" style="background: #fffbeb;">
              <h3 class="font-bold text-sm mb-3" style="color: #92400e;">Pro Tips for Accurate Estimates</h3>
              <ul class="space-y-2 text-sm text-amber-800">
                <li class="flex gap-2"><span class="font-bold flex-shrink-0">&rarr;</span> Use the cost override field if you have contractor estimates for your specific market.</li>
                <li class="flex gap-2"><span class="font-bold flex-shrink-0">&rarr;</span> Always include contingency. Deals without contingency are deals waiting to lose money.</li>
                <li class="flex gap-2"><span class="font-bold flex-shrink-0">&rarr;</span> Enter rehab months to see monthly burn &mdash; this tells you how much cash you need per month during construction.</li>
                <li class="flex gap-2"><span class="font-bold flex-shrink-0">&rarr;</span> Feed this number into the Fix &amp; Flip or Hard Money calculator to see how it affects your total deal.</li>
              </ul>
            </div>
            <div class="p-5 rounded-xl border border-gray-200 bg-gray-50">
              <h3 class="font-bold text-sm mb-3" style="color: #1e3a5f;">Understanding Your Result</h3>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex gap-2"><span class="w-3 h-3 rounded-full bg-green-500 flex-shrink-0 mt-0.5"></span> <strong>&lt; $30/sq ft:</strong> Conservative &mdash; confirm scope is truly cosmetic.</li>
                <li class="flex gap-2"><span class="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0 mt-0.5"></span> <strong>$30&ndash;$70/sq ft:</strong> Typical rehab range for most residential flips.</li>
                <li class="flex gap-2"><span class="w-3 h-3 rounded-full bg-amber-500 flex-shrink-0 mt-0.5"></span> <strong>$70&ndash;$120/sq ft:</strong> Significant capital &mdash; stress-test your margins.</li>
                <li class="flex gap-2"><span class="w-3 h-3 rounded-full bg-red-500 flex-shrink-0 mt-0.5"></span> <strong>&ge; $120/sq ft:</strong> Aggressive &mdash; may be valid for luxury or full gut.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- INPUTS & OUTPUTS -->
      <div id="inputs-outputs" class="border-b border-gray-100">
        <div class="px-8 py-6 border-b border-gray-100">
          <h2 class="text-xl font-extrabold" style="color: #1e3a5f;">Inputs &amp; Outputs Reference</h2>
          <p class="text-gray-500 text-sm mt-1">Every field in the calculator and what it means</p>
        </div>
        <div class="px-8 py-8">
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead>
                <tr class="border-b-2 border-gray-200">
                  <th class="text-left py-3 pr-4 font-bold text-gray-700">Field</th>
                  <th class="text-left py-3 px-2 font-bold text-gray-700">Type</th>
                  <th class="text-left py-3 pl-2 font-bold text-gray-700">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Property Size</td><td class="py-3 px-2 text-gray-500">Input (sq ft)</td><td class="py-3 pl-2 text-gray-600">Total square footage of the property being renovated.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Rehab Level</td><td class="py-3 px-2 text-gray-500">Input (select)</td><td class="py-3 pl-2 text-gray-600">Light cosmetic, Medium rehab, Heavy rehab, or Full gut. Sets base cost per sq ft.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Property Type</td><td class="py-3 px-2 text-gray-500">Optional</td><td class="py-3 pl-2 text-gray-600">Context note only. Does not change formulas.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Location Market</td><td class="py-3 px-2 text-gray-500">Input (select)</td><td class="py-3 pl-2 text-gray-600">Low (0.80x), Average (1.00x), or High (1.30x) cost multiplier.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Cost Override</td><td class="py-3 px-2 text-gray-500">Optional ($)</td><td class="py-3 pl-2 text-gray-600">Custom cost per sq ft. Overrides rehab level midpoint if entered.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Soft Costs %</td><td class="py-3 px-2 text-gray-500">Optional (%)</td><td class="py-3 pl-2 text-gray-600">Permits, design, dumpsters, project management. Default: 8%.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Contingency %</td><td class="py-3 px-2 text-gray-500">Optional (%)</td><td class="py-3 pl-2 text-gray-600">Buffer for surprises and overruns. Default: 10%.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Rehab Months</td><td class="py-3 px-2 text-gray-500">Optional</td><td class="py-3 pl-2 text-gray-600">Project timeline in months. Used to calculate monthly burn.</td></tr>
                <tr class="bg-amber-50"><td class="py-3 pr-4 font-bold text-amber-900">Total Rehab Budget</td><td class="py-3 px-2 text-amber-700">Output ($)</td><td class="py-3 pl-2 text-amber-800">Hard Costs + Soft Costs + Contingency. The full renovation budget.</td></tr>
                <tr class="bg-amber-50"><td class="py-3 pr-4 font-bold text-amber-900">Effective Cost / Sq Ft</td><td class="py-3 px-2 text-amber-700">Output ($)</td><td class="py-3 pl-2 text-amber-800">Total Rehab Budget &divide; Property Size. Includes soft costs and contingency.</td></tr>
                <tr class="bg-amber-50"><td class="py-3 pr-4 font-bold text-amber-900">Monthly Burn</td><td class="py-3 px-2 text-amber-700">Output ($)</td><td class="py-3 pl-2 text-amber-800">Total Budget &divide; Rehab Months. Excludes financing and holding costs.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- FORMULA -->
      <div id="formula" class="border-b border-gray-100">
        <div class="px-8 py-6 border-b border-gray-100">
          <h2 class="text-xl font-extrabold" style="color: #1e3a5f;">Rehab Cost Formula &amp; Calculation Method</h2>
          <p class="text-gray-500 text-sm mt-1">The exact math this calculator uses &mdash; plus a real example</p>
        </div>
        <div class="px-8 py-8">
          <div class="grid md:grid-cols-2 gap-10">

            <div>
              <h3 class="font-bold text-gray-800 mb-4">Step-by-step calculation</h3>
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">1</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Determine Base Cost / Sq Ft</p>
                    <p class="text-xs text-gray-500 mt-0.5">Use rehab level midpoint or custom override</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">Medium rehab = $45.00 / sq ft</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">2</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Apply Location Multiplier</p>
                    <p class="text-xs text-gray-500 mt-0.5">Low 0.80x &middot; Average 1.00x &middot; High 1.30x</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">$45 &times; 1.00 = $45.00 adjusted</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">3</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Calculate Hard Costs</p>
                    <p class="text-xs text-gray-500 mt-0.5">Property Size &times; Adjusted Cost / Sq Ft</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">1,500 &times; $45 = $67,500</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">4</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Add Soft Costs</p>
                    <p class="text-xs text-gray-500 mt-0.5">Hard Costs &times; Soft Costs %</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">$67,500 &times; 8% = $5,400</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-amber-200 bg-amber-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md flex-shrink-0 mt-0.5" style="background:#f59e0b;color:#1e3a5f;">5</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Add Contingency</p>
                    <p class="text-xs text-gray-500 mt-0.5">(Hard + Soft) &times; Contingency %</p>
                    <code class="text-xs font-bold" style="color:#1e3a5f;">$72,900 &times; 10% = $7,290 &rarr; <strong>Total = $80,190</strong></code>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="p-5 rounded-xl text-center border border-gray-200 bg-gray-50">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">The Formula</p>
                <div class="font-mono font-bold text-base mb-2" style="color:#1e3a5f;">Total = (Hard + Soft) &times; (1 + Contingency%)</div>
                <div class="mt-4 p-3 rounded-lg border border-gray-200 text-left font-mono text-xs bg-white" style="color: #374151; line-height: 1.7;">
                  <div>Hard Costs = Size &times; Adjusted $/sqft</div>
                  <div>Soft Costs = Hard &times; Soft%</div>
                  <div>Contingency = (Hard + Soft) &times; Cont%</div>
                  <div class="border-t border-gray-300 pt-1 font-extrabold" style="color:#1e3a5f;">= Total Rehab Budget</div>
                </div>
              </div>
              <div class="p-4 rounded-xl border border-blue-100 bg-blue-50">
                <p class="text-xs font-bold text-blue-800 mb-2">Default cost midpoints</p>
                <div class="space-y-1.5 text-xs text-blue-700">
                  <div class="font-mono">Light cosmetic: $22.50 / sq ft</div>
                  <div class="font-mono">Medium rehab: $45.00 / sq ft</div>
                  <div class="font-mono">Heavy rehab: $80.00 / sq ft</div>
                  <div class="font-mono">Full gut: $150.00 / sq ft</div>
                </div>
              </div>
              <div class="p-4 rounded-xl border border-amber-100 bg-amber-50">
                <p class="text-xs font-bold text-amber-800 mb-1">National planning averages</p>
                <p class="text-xs text-amber-700 leading-relaxed">These are national planning averages. Local labor and material costs may be 50%&ndash;100% higher in expensive markets.</p>
              </div>
            </div>

          </div>

          <!-- Real-world example -->
          <div class="mt-8 p-6 rounded-2xl border-2 border-amber-200" style="background: #fffbeb;">
            <h3 class="font-bold text-gray-900 mb-1">Real-World Example: 1,500 Sq Ft Medium Rehab &mdash; Average Market</h3>
            <p class="text-xs text-amber-700 mb-4">Based on 2026 national planning averages</p>
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Inputs</p>
                <div class="space-y-1.5 text-sm">
                  <div class="flex justify-between"><span class="text-gray-600">Property size</span><span class="font-semibold">1,500 sq ft</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Rehab level</span><span class="font-semibold">Medium ($45/sqft)</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Location</span><span class="font-semibold">Average (1.00x)</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Soft costs</span><span class="font-semibold">8%</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Contingency</span><span class="font-semibold">10%</span></div>
                </div>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Result</p>
                <div class="p-4 rounded-xl text-center mb-3" style="background: #1e3a5f;">
                  <p class="text-xs text-blue-300 mb-1">Total Rehab Budget</p>
                  <p class="text-4xl font-extrabold text-white">$80,190</p>
                  <p class="text-xs text-blue-200 mt-1">$53.46 / sq ft effective</p>
                </div>
                <div class="space-y-1 text-xs text-gray-600">
                  <p>Hard costs: $67,500</p>
                  <p>Soft costs: $5,400</p>
                  <p>Contingency: $7,290</p>
                  <p class="mt-2 font-medium">Verdict: Standard rehab range. That's $12,690 above the base hard cost &mdash; this is where underfunded deals fail.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- WHAT DRIVES REHAB COST -->
      <div id="what-drives-rehab-cost" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What Drives Rehab Cost</h2>
        <div class="grid sm:grid-cols-3 gap-5 mb-6">
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Scope</p>
            <p class="text-sm text-gray-600">Cosmetic vs full gut changes everything. Paint and carpet is $15&ndash;$30/sqft. Down to studs is $100&ndash;$200. The gap is enormous.</p>
          </div>
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Location</p>
            <p class="text-sm text-gray-600">Labor and materials vary massively by market. The same scope in rural Alabama vs. San Francisco can differ by 50%+.</p>
          </div>
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Surprises</p>
            <p class="text-sm text-gray-600">Problems show up after demolition. Mold, termites, structural issues, outdated electrical &mdash; time + uncertainty = cost growth.</p>
          </div>
        </div>

        <h3 class="font-bold text-gray-800 mb-3">Hard Costs vs Soft Costs</h3>
        <div class="grid sm:grid-cols-2 gap-5 mb-4">
          <div class="p-4 rounded-xl border border-gray-200 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Hard Costs</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>&bull; Labor</li>
              <li>&bull; Materials</li>
              <li>&bull; Construction</li>
            </ul>
          </div>
          <div class="p-4 rounded-xl border border-gray-200 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Soft Costs</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>&bull; Permits</li>
              <li>&bull; Design / engineering</li>
              <li>&bull; Dumpsters</li>
              <li>&bull; Project management</li>
            </ul>
            <p class="text-xs text-amber-700 mt-2">Most investors underestimate soft costs &mdash; and pay for it.</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-amber-50 border border-amber-200">
          <p class="text-sm font-bold text-amber-900 mb-1">Contingency Is Not Optional</p>
          <p class="text-sm text-amber-800">Light/medium: ~10%. Heavy/gut: 15&ndash;20%. No contingency = wrong budget.</p>
        </div>
      </div>

      <!-- RESULT MEANING -->
      <div id="result-meaning" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">What Your Rehab Cost Result Means</h2>
        <p class="text-gray-600 leading-relaxed mb-5">
          Your effective cost per square foot indicates the intensity of the renovation. This is not a good/bad judgment &mdash; high rehab may be justified for luxury flips or deep value-add deals.
        </p>
        <div class="space-y-3 mb-5">
          <div class="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
            <span class="w-3 h-3 rounded-full bg-green-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-green-900">&lt; $30/sq ft &mdash; Conservative Budget</p>
              <p class="text-sm text-green-800">Budget appears light relative to property size. Confirm scope is truly cosmetic and does not hide major systems work.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200">
            <span class="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-blue-900">$30&ndash;$70/sq ft &mdash; Typical Rehab Range</p>
              <p class="text-sm text-blue-800">Budget appears within a typical renovation planning range. Validate with contractor bids and inspection findings.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <span class="w-3 h-3 rounded-full bg-amber-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-amber-900">$70&ndash;$120/sq ft &mdash; Significant Capital Required</p>
              <p class="text-sm text-amber-800">Rehab requires meaningful capital. Project margin should be stress-tested against delays, change orders, and financing costs.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-red-50 border border-red-200">
            <span class="w-3 h-3 rounded-full bg-red-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-red-900">&ge; $120/sq ft &mdash; Aggressive Rehab Budget</p>
              <p class="text-sm text-red-800">Rehab budget is aggressive. This may be valid for full gut, luxury, or deep value-add projects, but risk of overruns is high.</p>
            </div>
          </div>
        </div>
        <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
          <p class="text-xs text-gray-500">Rehab cost is an estimate, not a contractor quote. These ranges are national planning averages. Local labor and material pricing can vary significantly.</p>
        </div>
      </div>

      <!-- BENCHMARKS -->
      <div id="benchmarks" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Rehab Cost Benchmarks by Level &amp; Market</h2>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="border-b-2 border-gray-200">
                <th class="text-left py-3 pr-4 font-bold text-gray-700">Rehab Level</th>
                <th class="text-center py-3 px-2 font-bold text-gray-700">Range ($/sqft)</th>
                <th class="text-center py-3 px-2 font-bold text-gray-700">Midpoint</th>
                <th class="text-center py-3 px-2 font-bold text-gray-700">High Market (1.30x)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr><td class="py-3 pr-4 font-medium text-gray-800">Light cosmetic</td><td class="py-3 px-2 text-center text-gray-600">$15&ndash;$30</td><td class="py-3 px-2 text-center font-semibold">$22.50</td><td class="py-3 px-2 text-center text-amber-700">$29.25</td></tr>
              <tr><td class="py-3 pr-4 font-medium text-gray-800">Medium rehab</td><td class="py-3 px-2 text-center text-gray-600">$30&ndash;$60</td><td class="py-3 px-2 text-center font-semibold">$45.00</td><td class="py-3 px-2 text-center text-amber-700">$58.50</td></tr>
              <tr><td class="py-3 pr-4 font-medium text-gray-800">Heavy rehab</td><td class="py-3 px-2 text-center text-gray-600">$60&ndash;$100</td><td class="py-3 px-2 text-center font-semibold">$80.00</td><td class="py-3 px-2 text-center text-amber-700">$104.00</td></tr>
              <tr><td class="py-3 pr-4 font-medium text-gray-800">Full gut</td><td class="py-3 px-2 text-center text-gray-600">$100&ndash;$200</td><td class="py-3 px-2 text-center font-semibold">$150.00</td><td class="py-3 px-2 text-center text-amber-700">$195.00</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-gray-400">All figures are national planning averages. Local pricing varies significantly.</p>
      </div>

      <!-- STRATEGY -->
      <div id="strategy" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Total Cost vs Deal Math</h2>
        <div class="grid sm:grid-cols-2 gap-5 mb-6">
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">The Underestimation Trap</p>
            <p class="text-sm text-gray-600">Estimated rehab: $80,000. Real cost after issues: $95,000. That $15,000 difference is your profit margin gone. Rehab doesn't go over budget by accident &mdash; it goes over budget because it was underestimated.</p>
          </div>
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Monthly Burn Matters</p>
            <p class="text-sm text-gray-600">$90,000 rehab over 6 months = $15,000/month. This impacts cash planning, financing, and holding cost. If you can't carry the burn, the deal breaks.</p>
          </div>
        </div>
        <div class="p-5 rounded-xl border-2 border-amber-200" style="background: #fffbeb;">
          <h3 class="font-bold text-sm mb-2" style="color: #92400e;">Real Investment Insight</h3>
          <p class="text-sm text-gray-700">Rehab doesn't go over budget by accident. It goes over budget because it was underestimated. The best investors assume higher costs &mdash; and protect their deals.</p>
        </div>
      </div>

      <!-- LIMITATIONS -->
      <div id="limitations" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Limitations</h2>
        <p class="text-gray-600 leading-relaxed mb-4">This calculator gives a realistic estimate &mdash; not a contractor bid. Use it to plan your deal, then validate with real quotes.</p>
        <div class="grid sm:grid-cols-2 gap-5">
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Does Not Replace Inspections</p>
            <p class="text-sm text-gray-600">A cost-per-square-foot model cannot detect hidden damage, code violations, or structural issues. Always get a professional inspection before finalizing a rehab budget.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Does Not Replace Contractor Bids</p>
            <p class="text-sm text-gray-600">National averages are starting points, not final numbers. Get multiple contractor bids for your specific scope, market, and property before committing capital.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Not a Line-Item Scope of Work</p>
            <p class="text-sm text-gray-600">This is a simplified model. For detailed budgeting, break costs into individual line items: demo, framing, electrical, plumbing, HVAC, flooring, kitchen, bathroom, paint, roof, and more.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Does Not Handle Every Market</p>
            <p class="text-sm text-gray-600">The location multiplier is a rough adjustment. True local pricing requires contractor estimates in your specific city and neighborhood. Use the cost override field for local data.</p>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <div id="faq" class="px-8 py-8">
        <h2 class="text-2xl font-extrabold mb-8 text-center" style="color: #1e3a5f;">
          Frequently Asked Questions
        </h2>
        <div class="space-y-4 max-w-3xl mx-auto">
          <div v-for="(faq, i) in faqs" :key="i"
            class="border border-gray-100 rounded-xl overflow-hidden">
            <button
              @click="toggleFaq(i)"
              :aria-expanded="openFaq === i"
              :aria-controls="`faq-answer-${i}`"
              class="w-full text-left px-6 py-4 flex items-center justify-between font-semibold text-gray-800 hover:bg-gray-50 transition">
              <span>{{ faq.q }}</span>
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform"
                :class="openFaq === i ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div :id="`faq-answer-${i}`" v-if="openFaq === i" class="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>

      </div><!-- /editorial wrapper -->

      <!-- Related Calculators CTA -->
      <div id="related-calculators" class="mt-6 rounded-2xl p-8 text-center text-white"
        style="background: #1e3a5f;">
        <h2 class="text-2xl font-extrabold mb-2">Stop Guessing Your Rehab Budget</h2>
        <p class="text-blue-200 mb-6">Feed your rehab estimate into these tools to validate the full deal.</p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink v-for="calc in relatedCalcs" :key="calc.href"
            :to="calc.href"
            class="px-5 py-2.5 rounded-xl font-semibold text-sm border border-white/20 bg-white/10 hover:bg-white/20 transition">
            {{ calc.label }}
          </NuxtLink>
        </div>
      </div>

    </main>

    <!-- Email Capture Modal -->
    <EmailCaptureModal
      :show="showEmailModal"
      :calculator-name="'Rehab Cost Estimator'"
      :primary-result="hasResult ? formatCurrency(totalRehabBudget) + ' Total Budget' : undefined"
      title="Save Your Rehab Cost Estimate"
      subtitle="Get renovation budgeting tips, deal templates, and calculator updates."
      cta-label="Save & Get Free Updates"
      @close="showEmailModal = false"
      @captured="onEmailCaptured"
    />

    <!-- ═══════════════════════════════════════════════
         FOOTER
    ═══════════════════════════════════════════════ -->
    <footer class="mt-16 border-t border-gray-200 bg-white py-8 px-4">
      <div class="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-400">&copy; 2026 RealCalc. For informational purposes only. Not financial advice.</p>
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
import { ref, reactive, computed, nextTick, onMounted } from 'vue'

// ─── SEO ──────────────────────────────────────────────────────────────────────
useHead({
  title: 'Rehab Cost Estimator — Real Renovation Budget & Cash Planning (2026) | RealCalc',
  meta: [
    { name: 'description', content: 'Estimate real rehab costs, total renovation budget, and monthly cash burn. Hard costs, soft costs, contingency, location adjustment. Free tool for US real estate investors — no signup required.' },
    { property: 'og:title', content: 'Rehab Cost Estimator — Real Renovation Budget & Cash Planning (2026) | RealCalc' },
    { property: 'og:description', content: 'Estimate real rehab costs with hard/soft cost separation, contingency, and location multiplier. Free renovation budget calculator for flips, BRRRR, and value-add deals.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://arvcalc.com/rehab-cost-estimator' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Rehab Cost Estimator — Renovation Budget Calculator' },
    { name: 'twitter:description', content: 'Estimate total renovation cost with hard costs, soft costs, and contingency. Free tool for real estate investors.' },
    { name: 'keywords', content: 'rehab cost estimator, renovation budget calculator, rehab cost per square foot, fix and flip renovation cost, BRRRR rehab budget, hard costs soft costs, contingency calculator, real estate renovation estimate' },
  ],
  link: [
    { rel: 'canonical', href: 'https://arvcalc.com/rehab-cost-estimator' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Rehab Cost Estimator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description: 'Estimate real rehab costs with hard/soft cost separation, contingency reserve, and location market adjustment. Free renovation budget calculator for real estate investors.',
        url: 'https://arvcalc.com/rehab-cost-estimator',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        featureList: 'Rehab cost estimation, hard vs soft cost separation, contingency calculation, location multiplier, monthly burn, cost per sq ft, budget sensitivity, PDF export, scenario comparison'
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
            name: 'How much does a rehab cost per square foot?',
            acceptedAnswer: { '@type': 'Answer', text: 'National planning ranges: Light cosmetic $15–$30/sqft, Medium rehab $30–$60/sqft, Heavy rehab $60–$100/sqft, Full gut $100–$200/sqft. Location can shift costs by 50%–100%. These are estimates, not contractor quotes.' }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between hard costs and soft costs?',
            acceptedAnswer: { '@type': 'Answer', text: 'Hard costs are direct construction costs: labor, materials, and construction work. Soft costs include permits, design, engineering, dumpsters, temporary utilities, and project management. Most investors underestimate soft costs.' }
          },
          {
            '@type': 'Question',
            name: 'How much contingency should I include in my rehab budget?',
            acceptedAnswer: { '@type': 'Answer', text: 'For light and medium rehabs, 10% contingency is common. For heavy rehabs and full gut renovations, 15–20% is safer. No contingency means your budget is wrong — surprises are inevitable in renovation projects.' }
          },
          {
            '@type': 'Question',
            name: 'Does location affect rehab cost?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes, significantly. Labor and material costs vary massively by market. High-cost markets (NYC, SF, LA) can be 30%+ above national averages. Low-cost markets can be 20% below. This calculator applies a location multiplier to adjust.' }
          },
          {
            '@type': 'Question',
            name: 'Is this a contractor quote?',
            acceptedAnswer: { '@type': 'Answer', text: 'No. This is a planning estimate based on national averages. It helps you screen deals and set budget expectations. Always validate with real contractor bids and inspection findings before committing capital.' }
          },
          {
            '@type': 'Question',
            name: 'What is monthly rehab burn?',
            acceptedAnswer: { '@type': 'Answer', text: 'Monthly rehab burn is Total Rehab Budget divided by the number of rehab months. It shows how much cash you need per month during construction. This excludes financing and holding costs — those are additional.' }
          },
          {
            '@type': 'Question',
            name: 'How do I use rehab cost in my deal analysis?',
            acceptedAnswer: { '@type': 'Answer', text: 'Feed your total rehab budget into the Fix & Flip Calculator for profit analysis, the 70% Rule Calculator for max purchase price, or the Hard Money Loan Calculator for financing cost. Rehab cost is a key input to every flip and BRRRR deal.' }
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arvcalc.com' },
          { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://arvcalc.com/calculators' },
          { '@type': 'ListItem', position: 3, name: 'Rehab Cost Estimator', item: 'https://arvcalc.com/rehab-cost-estimator' }
        ]
      })
    }
  ]
})

// ─── REACTIVE STATE ──────────────────────────────────────────────────────────
const isNavExpanded = ref(false)
const shareSuccess = ref(false)
const showEmailModal = ref(false)
const openFaq = ref(null)

const form = reactive({
  propertySize: null,
  rehabLevel: 'medium',
  propertyType: 'single-family',
  locationMarket: 'average',
  costOverride: null,
  softCostsPct: null,
  contingencyPct: null,
  rehabMonths: null,
  scenarioName: ''
})

// ─── FAQ DATA ────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'How much does a rehab cost per square foot?', a: 'National planning ranges: Light cosmetic $15–$30/sqft, Medium rehab $30–$60/sqft, Heavy rehab $60–$100/sqft, Full gut $100–$200/sqft. Location can shift costs by 50%–100%. These are national planning averages, not contractor quotes. Always validate with local bids.' },
  { q: 'What is the difference between hard costs and soft costs?', a: 'Hard costs are direct construction costs — labor, materials, and the physical construction work itself. Soft costs include permits, design, engineering, dumpsters, temporary utilities, and project management. Most investors underestimate soft costs, which typically add 5–15% on top of hard costs.' },
  { q: 'How much contingency should I include?', a: 'For light and medium rehabs, 10% contingency is standard. For heavy rehabs and full gut renovations, 15–20% is safer. Contingency absorbs surprises — hidden damage, code issues, contractor delays, and change orders. No contingency means your budget is wrong.' },
  { q: 'Does location really affect rehab cost that much?', a: 'Yes. Labor rates, material availability, permitting costs, and code requirements vary dramatically by market. High-cost markets like NYC, San Francisco, and LA can be 30%+ above national averages. Low-cost rural markets can be 20% below. The location multiplier in this calculator provides a rough adjustment — for precision, use the cost override field with local contractor estimates.' },
  { q: 'Is this calculator a contractor quote?', a: 'No. This is a planning estimate based on national averages. It is designed to help investors screen deals, compare renovation intensity, and set initial budget expectations. It does not replace contractor bids, professional inspections, or detailed line-item scopes of work.' },
  { q: 'What is monthly rehab burn?', a: 'Monthly rehab burn = Total Rehab Budget ÷ Rehab Months. It shows how much cash is needed per month during the renovation project. This figure excludes financing costs (hard money interest) and holding costs (taxes, insurance, utilities). If you can\'t carry the monthly burn, the deal may not work regardless of profit margin.' },
  { q: 'How do I use this in my deal analysis?', a: 'Feed your total rehab budget into the Fix & Flip Calculator for profit analysis, the 70% Rule Calculator for max purchase price, the Hard Money Loan Calculator for financing cost, or the ARV Calculator to validate after-repair value. Rehab cost is the most underestimated input in every flip and BRRRR deal — getting it right changes the entire analysis.' }
]

const relatedCalcs = [
  { label: 'House Flipping Profit Calculator', href: '/house-flipping-profit-calculator' },
  { label: 'Hard Money Loan Calculator', href: '/hard-money-loan-calculator' },
  { label: 'Fix & Flip Calculator', href: '/fix-and-flip-calculator' },
  { label: 'ARV Calculator', href: '/arv-calculator' },
  { label: '70% Rule Calculator', href: '/70-percent-rule-calculator' },
  { label: 'Closing Costs', href: '/closing-costs-calculator' },
  { label: 'Real Estate ROI', href: '/real-estate-roi-calculator' },
  { label: 'Compare Deals', href: '/compare-real-estate-deals' },
]

// ─── PROPERTY TYPE CONTEXT ──────────────────────────────────────────────────
const propertyTypeContextMap = {
  'single-family': 'Single-family rehab budgets are often easier to estimate than larger multi-unit projects, but contractor pricing still varies.',
  'multifamily': 'Multifamily rehabs may require unit-by-unit budgeting, common area work, and tenant-turnover planning.',
  'condo': 'Condo renovations may have HOA rules, access limits, elevator scheduling, and building restrictions.',
  'small-commercial': 'Small commercial rehab may involve code, accessibility, permitting, and tenant-improvement considerations.'
}

const propertyTypeContext = computed(() => propertyTypeContextMap[form.propertyType] || '')

// ─── COST MIDPOINTS ─────────────────────────────────────────────────────────
const rehabLevelMidpoints = {
  light: 22.50,
  medium: 45.00,
  heavy: 80.00,
  gut: 150.00
}

const locationMultipliers = {
  low: 0.80,
  average: 1.00,
  high: 1.30
}

// ─── EFFECTIVE DEFAULTS ─────────────────────────────────────────────────────
const effectiveSoftPct = computed(() => {
  if (form.softCostsPct !== null && form.softCostsPct !== '' && form.softCostsPct >= 0) return form.softCostsPct
  return 8
})

const effectiveContPct = computed(() => {
  if (form.contingencyPct !== null && form.contingencyPct !== '' && form.contingencyPct >= 0) return form.contingencyPct
  return 10
})

// ─── CORE CALCULATIONS ─────────────────────────────────────────────────────
const hasResult = computed(() => form.propertySize > 0)

const baseCostPerSqft = computed(() => {
  if (form.costOverride && form.costOverride > 0) return form.costOverride
  return rehabLevelMidpoints[form.rehabLevel] || 45
})

const locationMultiplier = computed(() => locationMultipliers[form.locationMarket] || 1.0)

const adjustedCostPerSqft = computed(() => baseCostPerSqft.value * locationMultiplier.value)

const hardCosts = computed(() => {
  if (!hasResult.value) return 0
  return form.propertySize * adjustedCostPerSqft.value
})

const softCosts = computed(() => hardCosts.value * (effectiveSoftPct.value / 100))

const preContingencyCost = computed(() => hardCosts.value + softCosts.value)

const contingencyCost = computed(() => preContingencyCost.value * (effectiveContPct.value / 100))

const totalRehabBudget = computed(() => preContingencyCost.value + contingencyCost.value)

const effectiveCostPerSqft = computed(() => {
  if (!hasResult.value || form.propertySize <= 0) return 0
  return totalRehabBudget.value / form.propertySize
})

const monthlyBurn = computed(() => {
  if (!hasResult.value || !form.rehabMonths || form.rehabMonths <= 0) return null
  return totalRehabBudget.value / form.rehabMonths
})

// ─── EDGE CASE: LOW CONTINGENCY WARNING ─────────────────────────────────────
const showLowContingencyWarning = computed(() => {
  if (form.rehabLevel !== 'heavy' && form.rehabLevel !== 'gut') return false
  const cont = effectiveContPct.value
  return cont < 15
})

// ─── VERDICT / RIS ──────────────────────────────────────────────────────────
const verdict = computed(() => {
  if (!hasResult.value) return null
  const eff = effectiveCostPerSqft.value
  if (eff < 30) return {
    label: 'Conservative Budget',
    color: '#15803d',
    gradient: 'linear-gradient(135deg, #15803d, #166534)',
    bgClass: 'bg-green-50 border-green-200'
  }
  if (eff < 70) return {
    label: 'Typical Rehab Range',
    color: '#1d4ed8',
    gradient: 'linear-gradient(135deg, #1d4ed8, #1e40af)',
    bgClass: 'bg-blue-50 border-blue-200'
  }
  if (eff < 120) return {
    label: 'Significant Capital Required',
    color: '#b45309',
    gradient: 'linear-gradient(135deg, #b45309, #92400e)',
    bgClass: 'bg-amber-50 border-amber-200'
  }
  return {
    label: 'Aggressive Rehab Budget',
    color: '#dc2626',
    gradient: 'linear-gradient(135deg, #dc2626, #b91c1c)',
    bgClass: 'bg-red-50 border-red-200'
  }
})

// ─── REAL IMPACT TEXT ──────────────────────────────────────────────────────
const realImpactText = computed(() => {
  if (!hasResult.value || !verdict.value) return ''
  const eff = effectiveCostPerSqft.value
  if (eff < 30) return 'Budget appears light relative to property size. Confirm scope is truly cosmetic and does not hide major systems work.'
  if (eff < 70) return 'Budget appears within a typical renovation planning range. Validate with contractor bids and inspection findings.'
  if (eff < 120) return 'Rehab requires meaningful capital. Project margin should be stress-tested against delays, change orders, and financing costs.'
  return 'Rehab budget is aggressive. This may be valid for full gut, luxury, or deep value-add projects, but risk of overruns is high.'
})

// ─── SENSITIVITY TABLE ──────────────────────────────────────────────────────
const sensitivityRows = computed(() => {
  if (!hasResult.value) return []
  const base = adjustedCostPerSqft.value
  const steps = [-30, -20, -10, 0, 10, 20, 30]
  return steps.map(pct => {
    const cost = base * (1 + pct / 100)
    const hard = form.propertySize * cost
    const soft = hard * (effectiveSoftPct.value / 100)
    const pre = hard + soft
    const cont = pre * (effectiveContPct.value / 100)
    const total = pre + cont
    const effCost = total / form.propertySize
    const isCurrent = pct === 0
    let color = '#dc2626'
    let label = 'Aggressive'
    if (effCost < 30) { color = '#15803d'; label = 'Conservative' }
    else if (effCost < 70) { color = '#1d4ed8'; label = 'Typical' }
    else if (effCost < 120) { color = '#b45309'; label = 'Significant' }
    return { cost, total, color, label, isCurrent }
  })
})

// ─── URL PARAMS ─────────────────────────────────────────────────────────────
function buildShareParams() {
  const p = new URLSearchParams()
  if (form.propertySize) p.set('size', form.propertySize)
  if (form.rehabLevel !== 'medium') p.set('level', form.rehabLevel)
  if (form.propertyType !== 'single-family') p.set('type', form.propertyType)
  if (form.locationMarket !== 'average') p.set('market', form.locationMarket)
  if (form.costOverride) p.set('cost', form.costOverride)
  if (form.softCostsPct !== null && form.softCostsPct !== '') p.set('soft', form.softCostsPct)
  if (form.contingencyPct !== null && form.contingencyPct !== '') p.set('cont', form.contingencyPct)
  if (form.rehabMonths) p.set('months', form.rehabMonths)
  if (form.scenarioName) p.set('name', form.scenarioName)
  return p.toString()
}

onMounted(() => {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  if (params.get('size')) form.propertySize = parseFloat(params.get('size'))
  if (params.get('level')) form.rehabLevel = params.get('level')
  if (params.get('type')) form.propertyType = params.get('type')
  if (params.get('market')) form.locationMarket = params.get('market')
  if (params.get('cost')) form.costOverride = parseFloat(params.get('cost'))
  if (params.get('soft')) form.softCostsPct = parseFloat(params.get('soft'))
  if (params.get('cont')) form.contingencyPct = parseFloat(params.get('cont'))
  if (params.get('months')) form.rehabMonths = parseFloat(params.get('months'))
  if (params.get('name')) form.scenarioName = params.get('name')
})

// ─── HELPER FUNCTIONS ───────────────────────────────────────────────────────
function formatCurrency(val) {
  if (!val && val !== 0) return '$0'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)
}

function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
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

  // Header
  doc.setFillColor(...navy)
  doc.rect(0, 0, 210, 40, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(22)
  doc.setFont('helvetica', 'bold')
  doc.text('RealCalc', 20, 20)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.text('Rehab Cost Estimate Report', 20, 30)
  doc.setFontSize(9)
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 130, 20)

  // Hero block
  doc.setFillColor(...gold)
  doc.rect(15, 50, 180, 30, 'F')
  doc.setTextColor(30, 58, 95)
  doc.setFontSize(28)
  doc.setFont('helvetica', 'bold')
  doc.text(formatCurrency(totalRehabBudget.value), 105, 66, { align: 'center' })
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text('TOTAL REHAB BUDGET', 105, 74, { align: 'center' })

  // Breakdown
  let y = 95
  doc.setTextColor(...navy)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Budget Breakdown', 20, y)
  y += 8

  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...gray)

  const rows = [
    ['Property Size', form.propertySize + ' sq ft'],
    ['Rehab Level', form.rehabLevel],
    ['Location Market', form.locationMarket],
    ['Base Cost / Sq Ft', '$' + baseCostPerSqft.value.toFixed(2)],
    ['Adjusted Cost / Sq Ft', '$' + adjustedCostPerSqft.value.toFixed(2)],
    ['Hard Costs', formatCurrency(hardCosts.value)],
    ['Soft Costs (' + effectiveSoftPct.value + '%)', formatCurrency(softCosts.value)],
    ['Pre-Contingency', formatCurrency(preContingencyCost.value)],
    ['Contingency (' + effectiveContPct.value + '%)', formatCurrency(contingencyCost.value)],
    ['Total Rehab Budget', formatCurrency(totalRehabBudget.value)],
    ['Effective Cost / Sq Ft', '$' + effectiveCostPerSqft.value.toFixed(2)],
    ['Verdict', verdict.value?.label || '—'],
  ]
  if (monthlyBurn.value !== null) rows.push(['Monthly Burn', formatCurrency(monthlyBurn.value)])

  rows.forEach(([label, value]) => {
    doc.setTextColor(...gray)
    doc.text(label, 20, y)
    doc.setTextColor(...navy)
    doc.setFont('helvetica', 'bold')
    doc.text(value, 190, y, { align: 'right' })
    doc.setFont('helvetica', 'normal')
    y += 7
  })

  // Disclaimers
  y += 10
  doc.setTextColor(...gray)
  doc.setFontSize(7)
  doc.setFont('helvetica', 'italic')
  const disclaimers = [
    'This is an estimate, not a contractor bid.',
    'National planning averages. Local labor and material costs may vary significantly.',
    'Contingency helps absorb overruns but does not eliminate risk.',
    'This report is for informational purposes only. Not financial advice.',
  ]
  disclaimers.forEach((line, i) => {
    if (y + i * 5 < 270) doc.text(line, 20, y + i * 5)
  })

  // Footer
  doc.setFillColor(...navy)
  doc.rect(0, 280, 210, 17, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text('arvcalc.com — For informational purposes only. Not financial advice.', 105, 290, { align: 'center' })

  doc.save(`rehab-cost-estimate-${Date.now()}.pdf`)
}

// ─── SCENARIO SAVE / EMAIL CAPTURE ──────────────────────────────────────────
const triggerScenarioSave = ref(false)

const currentScenarioResult = computed(() => {
  if (!hasResult.value) return undefined
  return {
    primaryMetric: 'Total Rehab Budget',
    primaryValue: formatCurrency(totalRehabBudget.value),
    badgeLabel: verdict.value?.label,
    badgeColor: verdict.value?.color,
    propertySize: form.propertySize,
    rehabLevel: form.rehabLevel,
    locationMarket: form.locationMarket,
    hardCosts: hardCosts.value,
    softCosts: softCosts.value,
    contingency: contingencyCost.value,
    effectiveCostPerSqft: effectiveCostPerSqft.value,
    totalRehabBudget: totalRehabBudget.value
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
