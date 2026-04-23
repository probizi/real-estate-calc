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
         PAGE HEADER (breadcrumb only)
    ═══════════════════════════════════════════════ -->
    <div class="bg-white border-b border-gray-100 px-4 py-3">
      <div class="max-w-[1100px] mx-auto">
        <nav aria-label="Breadcrumb">
          <ol class="flex items-center gap-2 text-sm text-gray-400">
            <li><NuxtLink to="/" class="hover:text-gray-600 transition">Home</NuxtLink></li>
            <li><span>/</span></li>
            <li><NuxtLink to="/calculators" class="hover:text-gray-600 transition">Calculators</NuxtLink></li>
            <li><span>/</span></li>
            <li class="text-gray-700 font-semibold">ARV Calculator</li>
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
            ARV Calculator — Comps &amp; Confidence for US Real Estate Investors
          </h1>
        </div>

        <!-- On this page nav -->
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>

          <!-- Desktop: full list -->
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#what-is-arv" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is ARV?</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
            <li><a href="#confidence-tiers" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Confidence Tiers</a></li>
            <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
            <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
            <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Applications</a></li>
            <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Industry Standards</a></li>
            <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
            <li><a href="#pro-tips" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Pro Tips</a></li>
          </ul>

          <!-- Mobile: first 3 always + collapsible rest -->
          <div class="md:hidden">
            <ul class="flex flex-col gap-y-2">
              <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
              <li><a href="#what-is-arv" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is ARV?</a></li>
              <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            </ul>
            <ul v-show="isNavExpanded" class="flex flex-col gap-y-2 mt-2">
              <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
              <li><a href="#confidence-tiers" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Confidence Tiers</a></li>
              <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
              <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
              <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Applications</a></li>
              <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Industry Standards</a></li>
              <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
              <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
              <li><a href="#pro-tips" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Pro Tips</a></li>
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          <span v-if="calcMode === 'analyze'">Estimated ARV</span>
          <span v-else-if="calcMode === 'find-ppsf'">Required $/sqft</span>
          <span v-else>Deal Screen</span>
        </div>
        <div class="flex items-center gap-3">
          <!-- analyze mode -->
          <template v-if="calcMode === 'analyze'">
            <span v-if="calc.ready" class="text-2xl font-extrabold leading-none" :style="`color: ${confTierGradient.from}`">
              {{ formatCurrencyShort(calc.finalARV) }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="calc.ready"
              class="text-xs font-bold px-2.5 py-1 rounded-full text-white"
              :style="`background: ${confTierGradient.from}`">
              {{ calc.confTier }}
            </span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <!-- find-ppsf mode -->
          <template v-else-if="calcMode === 'find-ppsf'">
            <span v-if="requiredPPSF.achievable" class="text-xl font-extrabold leading-none text-blue-700">
              {{ formatDollarPerSqft(requiredPPSF.value) }}/sqft
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="requiredPPSF.achievable" class="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">Required</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <!-- deal-screen mode -->
          <template v-else>
            <span v-if="calc.ready && targetPurchase" class="text-xl font-extrabold leading-none"
              :class="dealScreenResult.passes70 ? 'text-emerald-700' : 'text-red-600'">
              {{ dealScreenResult.passes70 ? 'PASS' : 'FAIL' }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="calc.ready && targetPurchase"
              class="text-xs font-bold px-2.5 py-1 rounded-full"
              :class="dealScreenResult.passes70 ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'">
              70% Rule
            </span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
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
            What do you want to calculate?
          </p>
          <div class="calc-mode-tabs">
            <!-- Mode 1: Estimate ARV (Standard) -->
            <button @click="calcMode = 'analyze'"
              class="calc-mode-tab"
              :class="calcMode === 'analyze' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'analyze' ? 'color:#1e3a5f;' : ''">Estimate ARV</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'analyze' ? 'text-amber-700' : 'text-gray-400'">Comps + Confidence</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'analyze' ? 'bg-amber-100 text-amber-800' : 'bg-gray-200 text-gray-400'">Standard</span>
            </button>
            <!-- Mode 2: Find Required Comps PPSF (Reverse) -->
            <button @click="calcMode = 'find-ppsf'"
              class="calc-mode-tab"
              :class="calcMode === 'find-ppsf' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-ppsf' ? 'color:#1e3a5f;' : ''">Find Required Comps PPSF</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-ppsf' ? 'text-blue-700' : 'text-gray-400'">Target ARV → $/sqft</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-ppsf' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
            <!-- Mode 3: Compare Deal Screening (Reverse) -->
            <button @click="calcMode = 'deal-screen'"
              class="calc-mode-tab"
              :class="calcMode === 'deal-screen' ? 'calc-mode-tab-active' : 'calc-mode-tab-inactive'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'deal-screen' ? 'color:#1e3a5f;' : ''">Compare Deal Screening</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'deal-screen' ? 'text-emerald-700' : 'text-gray-400'">70% + 75% Rule Check</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'deal-screen' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
          </div>

          <!-- Mode descriptions -->
          <div class="mt-2.5">
            <p v-if="calcMode === 'analyze'" class="text-xs text-gray-500 leading-relaxed">
              Enter subject property and 3–5 comparable sales to estimate ARV with Confidence Range, outlier detection, and 70% Rule Max Offer.
            </p>
            <p v-else-if="calcMode === 'find-ppsf'" class="text-xs text-blue-700 leading-relaxed bg-blue-50 px-3 py-1.5 rounded-lg">
              Enter subject property and a <strong>Target ARV</strong> — the calculator shows the Weighted Avg $/sqft your comps would need to produce that ARV.
            </p>
            <p v-else class="text-xs text-emerald-700 leading-relaxed bg-emerald-50 px-3 py-1.5 rounded-lg">
              Enter your <strong>Purchase Price</strong> and Rehab Budget alongside comp data — screens the deal against the 70% Rule and 75% Rule viability checks.
            </p>
          </div>

        </div>
      </div>

      <!-- Two-column body: inputs left, results right -->
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch">

        <!-- ── INPUTS (left column) ── -->
        <div class="calc-inputs border-b lg:border-b-0 lg:border-r border-gray-200 bg-white min-w-0">

          <!-- SUBJECT PROPERTY -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Subject Property</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div class="grid sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Square Footage <span class="text-red-500">*</span></label>
                  <input v-model.number="subject.sqft" type="number" min="100" max="20000"
                    placeholder="Enter finished square footage"
                    class="w-full px-3 py-2 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition bg-white font-semibold text-gray-900" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Bedrooms <span class="text-red-500">*</span></label>
                  <input v-model.number="subject.beds" type="number" min="1" max="10"
                    placeholder="Enter bedroom count"
                    class="w-full px-3 py-2 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition bg-white font-semibold text-gray-900" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Bathrooms <span class="text-red-500">*</span></label>
                  <input v-model.number="subject.baths" type="number" min="0.5" max="10" step="0.5"
                    placeholder="e.g. 2.5 for 2 full + 1 half"
                    class="w-full px-3 py-2 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition bg-white font-semibold text-gray-900" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Garage Spaces</label>
                  <input v-model.number="subject.garage" type="number" min="0" max="6"
                    placeholder="Enter garage spaces"
                    class="w-full px-3 py-2 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition bg-white font-semibold text-gray-900" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Year Built</label>
                  <input v-model.number="subject.yearBuilt" type="number" min="1900" max="2026"
                    placeholder="Enter year built"
                    class="w-full px-3 py-2 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition bg-white font-semibold text-gray-900" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Subject Condition <span class="text-red-500">*</span></label>
                  <select v-model="subject.condition"
                    class="w-full px-3 py-2 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition bg-white font-semibold text-gray-900">
                    <option value="Poor">Poor (major repairs needed)</option>
                    <option value="Average">Average (typical/baseline)</option>
                    <option value="Good">Good (move-in ready, post-rehab)</option>
                    <option value="Excellent">Excellent (premium finishes)</option>
                    <option value="Needs-Rehab">Needs Rehab (pre-renovation)</option>
                  </select>
                </div>
                <div class="sm:col-span-2">
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Avg Comp Condition (baseline)</label>
                  <select v-model="avgCompCondition"
                    class="w-full px-3 py-2 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition bg-white font-semibold text-gray-900">
                    <option value="Poor">Poor</option>
                    <option value="Average">Average (default — recommended)</option>
                    <option value="Good">Good</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Needs-Rehab">Needs Rehab</option>
                  </select>
                  <p class="text-xs text-gray-400 mt-1">Default: Average (tier 2). Do not change unless you've inspected each comp.</p>
                </div>
                <div v-if="showAdvanced" class="sm:col-span-2">
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Lot Size (sqft) — opt-in</label>
                  <input v-model.number="subject.lotSqft" type="number" min="0"
                    placeholder="Enter lot square footage"
                    class="w-full px-3 py-2 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition bg-white font-semibold text-gray-900" />
                </div>
              </div>
            </div>
          </div>

          <!-- COMPARABLE SALES -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">
                Comparable Sales
                <span class="text-xs font-normal text-gray-400 ml-1">({{ activeCompCount }}/{{ compCount }} active)</span>
              </h2>
              <div class="ml-auto flex gap-2">
                <button v-if="compCount < 5" @click="addComp"
                  class="text-xs font-bold px-3 py-1.5 rounded-lg transition"
                  :style="{ background: modeColorLight, color: modeColor }">
                  + Add Comp
                </button>
                <button v-if="compCount > 3" @click="removeLastComp"
                  class="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
                  − Remove
                </button>
              </div>
            </div>
            <div class="px-4 py-3 space-y-5">
              <div v-for="(comp, idx) in comps.slice(0, compCount)" :key="idx" class="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-bold px-2 py-0.5 rounded-full" :style="{ background: modeColorLight, color: modeColor }">Comp {{ idx + 1 }}</span>
                    <span v-if="calc.ready && calc.perCompData[idx]?.isExtremeOutlier" class="text-xs font-bold px-2 py-0.5 rounded-full bg-red-200 text-red-800">⛔ Extreme</span>
                    <span v-else-if="calc.ready && calc.perCompData[idx]?.isOutlier" class="text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700">⚠ Outlier</span>
                  </div>
                  <label class="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" v-model="comp.included" class="w-3.5 h-3.5 rounded" />
                    <span class="text-xs text-gray-500">Include</span>
                  </label>
                </div>
                <div class="grid sm:grid-cols-3 gap-2" :class="!comp.included ? 'opacity-50' : ''">
                  <div>
                    <label class="block text-xs text-gray-500 mb-1">Sale Price *</label>
                    <div class="relative">
                      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                      <input v-model.number="comp.price" type="number" min="0"
                        placeholder="Enter sale price"
                        class="w-full pl-7 pr-3 py-2 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white" />
                    </div>
                  </div>
                  <div>
                    <label class="block text-xs text-gray-500 mb-1">Sale Date *</label>
                    <input v-model="comp.saleDate" type="date"
                      class="w-full px-3 py-2 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white" />
                  </div>
                  <div>
                    <label class="block text-xs text-gray-500 mb-1">Sqft *</label>
                    <input v-model.number="comp.sqft" type="number" min="100"
                      placeholder="Square footage"
                      class="w-full px-3 py-2 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white" />
                  </div>
                  <div>
                    <label class="block text-xs text-gray-500 mb-1">Beds</label>
                    <input v-model.number="comp.beds" type="number" min="0" max="10"
                      placeholder="Bedrooms"
                      class="w-full px-3 py-2 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white" />
                  </div>
                  <div>
                    <label class="block text-xs text-gray-500 mb-1">Baths</label>
                    <input v-model.number="comp.baths" type="number" min="0" max="10" step="0.5"
                      placeholder="Bathrooms"
                      class="w-full px-3 py-2 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white" />
                  </div>
                  <div>
                    <label class="block text-xs text-gray-500 mb-1">Distance (miles) *</label>
                    <input v-model.number="comp.distance" type="number" min="0" max="10" step="0.1"
                      placeholder="Distance from subject"
                      class="w-full px-3 py-2 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white" />
                  </div>
                  <div v-if="showAdvanced">
                    <label class="block text-xs text-gray-500 mb-1">Garage</label>
                    <input v-model.number="comp.garage" type="number" min="0" max="6"
                      placeholder="Garage spaces"
                      class="w-full px-3 py-2 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white" />
                  </div>
                  <div v-if="showAdvanced">
                    <label class="block text-xs text-gray-500 mb-1">Year Built</label>
                    <input v-model.number="comp.yearBuilt" type="number" min="1900" max="2026"
                      placeholder="Year built"
                      class="w-full px-3 py-2 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white" />
                  </div>
                  <div v-if="showAdvanced">
                    <label class="block text-xs text-gray-500 mb-1">Lot Sqft</label>
                    <input v-model.number="comp.lotSqft" type="number" min="0"
                      placeholder="Lot square footage"
                      class="w-full px-3 py-2 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white" />
                  </div>
                </div>
                <div v-if="calc.ready && calc.perCompData[idx]" class="mt-2 text-xs text-gray-500 flex flex-wrap gap-3">
                  <span>PPSF: <strong>{{ formatDollarPerSqft(calc.perCompData[idx].rawPPSF) }}</strong></span>
                  <span>Adj PPSF: <strong>{{ formatDollarPerSqft(calc.perCompData[idx].adjPPSF) }}</strong></span>
                  <span>Weight: <strong>{{ (calc.perCompData[idx].normWeight * 100).toFixed(1) }}%</strong></span>
                  <span v-if="calc.perCompData[idx].daysOld !== null">Age: <strong>{{ calc.perCompData[idx].daysOld }}d</strong></span>
                </div>
              </div>
            </div>
          </div>

          <!-- ANALYSIS INPUTS -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Analysis Inputs</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">
              <div class="grid sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Rehab Budget</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input v-model.number="rehabBudget" type="number" min="0"
                      placeholder="Enter rehab budget"
                      class="w-full pl-7 pr-3 py-2 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition bg-white font-semibold text-gray-900" />
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Required for 70% Rule Max Offer</p>
                </div>
                <div v-if="calcMode === 'find-ppsf'">
                  <label class="block text-xs font-semibold text-blue-700 mb-1">Target ARV</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input v-model.number="targetARV" type="number" min="0"
                      placeholder="Enter target ARV"
                      class="w-full pl-7 pr-3 py-2 rounded-xl border-2 border-blue-300 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/40 text-sm outline-none transition bg-white font-semibold text-gray-900" />
                  </div>
                </div>
                <div v-if="calcMode === 'deal-screen'">
                  <label class="block text-xs font-semibold text-emerald-700 mb-1">Target Purchase Price</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input v-model.number="targetPurchase" type="number" min="0"
                      placeholder="Enter purchase price"
                      class="w-full pl-7 pr-3 py-2 rounded-xl border-2 border-emerald-300 hover:border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/40 text-sm outline-none transition bg-white font-semibold text-gray-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ADVANCED ADJUSTMENTS -->
          <div class="border-b border-gray-100">
            <button @click="showAdvanced = !showAdvanced"
              class="w-full flex items-center justify-between px-5 py-3 text-sm transition"
              :class="showAdvanced ? 'bg-amber-50 text-amber-800 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800 font-medium'">
              <div class="flex items-center gap-2">
                <span>Advanced Adjustments</span>
                <span v-if="showAdvanced" class="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">ON</span>
              </div>
              <svg class="w-4 h-4 transition-transform flex-shrink-0" :class="showAdvanced ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-if="showAdvanced" class="px-4 py-3 space-y-3">
              <p class="text-xs text-gray-500">Override industry-standard adjustment rates for your market. Defaults: $5K/bed, $10K/full bath, $5K/half bath, $10K/garage, $500/year-built.</p>
              <div class="grid sm:grid-cols-3 gap-3">
                <div>
                  <label class="block text-xs text-gray-500 mb-1">Per Bedroom ($)</label>
                  <input v-model.number="adjOverrides.perBed" type="number"
                    placeholder="Per bedroom adj"
                    class="w-full px-3 py-2 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white" />
                </div>
                <div>
                  <label class="block text-xs text-gray-500 mb-1">Per Full Bath ($)</label>
                  <input v-model.number="adjOverrides.perFullBath" type="number"
                    placeholder="Per full bath adj"
                    class="w-full px-3 py-2 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white" />
                </div>
                <div>
                  <label class="block text-xs text-gray-500 mb-1">Per Half Bath ($)</label>
                  <input v-model.number="adjOverrides.perHalfBath" type="number"
                    placeholder="Per half bath adj"
                    class="w-full px-3 py-2 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white" />
                </div>
                <div>
                  <label class="block text-xs text-gray-500 mb-1">Per Garage Space ($)</label>
                  <input v-model.number="adjOverrides.perGarage" type="number"
                    placeholder="Per garage adj"
                    class="w-full px-3 py-2 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white" />
                </div>
                <div>
                  <label class="block text-xs text-gray-500 mb-1">Per Year Built ($)</label>
                  <input v-model.number="adjOverrides.perYear" type="number"
                    placeholder="Per year adj"
                    class="w-full px-3 py-2 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white" />
                </div>
                <div>
                  <label class="block text-xs text-gray-500 mb-1">Per Lot Sqft ($)</label>
                  <input v-model.number="adjOverrides.perLotSqft" type="number"
                    placeholder="Per lot sqft adj"
                    class="w-full px-3 py-2 rounded-xl border-2 border-gray-200 hover:border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-sm outline-none transition bg-white" />
                </div>
              </div>
              <div class="flex items-center gap-2">
                <input type="checkbox" v-model="lotSizeEnabled" id="lotToggle" class="w-4 h-4 rounded" />
                <label for="lotToggle" class="text-xs text-gray-600 cursor-pointer">Enable Lot Size Adjustment (opt-in — requires &gt;20% difference)</label>
              </div>
              <button @click="resetAdjOverrides" class="text-xs text-amber-700 underline">Reset to defaults</button>
            </div>
          </div>

          <!-- Reset Button -->
          <div class="px-4 py-3">
            <button @click="resetSubjectAndComps"
              class="w-full py-2 rounded-lg border border-gray-200 text-gray-400 font-medium text-xs hover:border-gray-300 hover:text-gray-600 transition">
              Reset All Fields
            </button>
          </div>

        </div>

        <!-- ── RESULTS (right column) ── -->
        <div class="min-w-0 lg:relative lg:overflow-hidden">
        <div class="bg-gray-50 scrollbar-thin lg:absolute lg:inset-0 lg:overflow-y-auto">
        <div class="space-y-4 p-4 lg:p-5">

          <!-- ══ ANALYZE MODE ══ -->
          <template v-if="calcMode === 'analyze'">

            <!-- Not ready -->
            <div v-if="!calc.ready" class="bg-white rounded-xl border border-gray-200 overflow-hidden px-5 py-8 text-center">
              <div class="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19V5a2 2 0 012-2h12a2 2 0 012 2v14"/>
                </svg>
              </div>
              <p class="text-gray-500 text-sm mb-1">Enter subject property + at least 3 comps</p>
              <p class="text-gray-400 text-xs">Minimum 3 valid comparable sales required</p>
              <p v-if="calc.validCount > 0" class="text-amber-600 text-xs mt-2 font-semibold">
                {{ calc.validCount }} valid comp{{ calc.validCount !== 1 ? 's' : '' }} entered — need {{ 3 - calc.validCount }} more
              </p>
            </div>

            <!-- Main result card -->
            <div v-if="calc.ready" class="bg-white rounded-xl border border-gray-200 overflow-hidden">

              <!-- 1. Primary Result -->
              <div class="px-5 py-5 border-b border-gray-100 bg-white">
                <p class="text-xs font-semibold uppercase tracking-wide mb-2 text-gray-400">
                  Estimated ARV
                  <span class="ml-1 font-normal normal-case">({{ calc.confTier }} Confidence · {{ calc.confScore }}/100)</span>
                </p>
                <div class="font-extrabold text-5xl leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full transition-all mb-3"
                  :style="`color: ${confTierGradient.from}`">
                  {{ formatCurrency(calc.finalARV) }}
                </div>
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-xs text-white"
                  :style="`background: ${confTierGradient.from}`">
                  <span class="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                  {{ calc.confTier }} Confidence
                </div>
                <div class="mt-2 text-sm text-gray-500">
                  Range: <span class="font-semibold text-gray-700">{{ formatCurrency(calc.confLow) }} – {{ formatCurrency(calc.confHigh) }}</span>
                  <span class="text-xs text-gray-400 ml-1">(±{{ formatCurrency(calc.confDev) }})</span>
                </div>
                <div class="mt-1 text-xs text-gray-400">
                  Subject Implied: {{ formatDollarPerSqft(calc.subjectImpliedPPSF) }}/sqft
                </div>
              </div>

              <!-- 2. Warnings -->
              <div v-if="calc.sqftMismatchWarning || calc.cvPenaltyApplied" class="px-5 pt-4 pb-1 space-y-2" role="region" aria-label="Warnings">
                <div v-if="calc.sqftMismatchWarning"
                  class="flex items-start gap-2.5 p-3 rounded-xl text-sm bg-amber-50 border border-amber-200 text-amber-800" role="alert">
                  <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                  <span class="font-medium leading-snug">Subject sqft differs from comp avg by {{ calc.sqftMismatchPct }}% — estimate accuracy may be reduced.</span>
                </div>
                <div v-if="calc.cvPenaltyApplied"
                  class="flex items-start gap-2.5 p-3 rounded-xl text-sm bg-amber-50 border border-amber-200 text-amber-800" role="alert">
                  <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                  <span class="font-medium leading-snug">Comp PPSFs vary widely (CV {{ calc.cv.toFixed(1) }}%) — consider finding more similar comps.</span>
                </div>
              </div>

              <!-- 3. Breakdown: Confidence Score -->
              <div class="p-5 border-t border-gray-50">
                <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Confidence Score Breakdown</h3>
                <div class="space-y-2">
                  <div v-for="factor in calc.confFactors" :key="factor.label" class="flex items-center gap-3">
                    <div class="text-xs text-gray-500 w-28 shrink-0">{{ factor.label }}</div>
                    <div class="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div class="h-full rounded-full transition-all" :style="{ width: (factor.score / factor.max * 100) + '%', background: confTierGradient.from }"></div>
                    </div>
                    <div class="text-xs font-bold text-gray-700 w-12 text-right shrink-0">{{ factor.score }}/{{ factor.max }}</div>
                  </div>
                  <div class="flex items-center gap-3 border-t border-gray-100 pt-2 mt-2">
                    <div class="text-xs font-bold text-gray-700 w-28">Total Score</div>
                    <div class="flex-1 h-2.5 rounded-full bg-gray-100 overflow-hidden">
                      <div class="h-full rounded-full" :style="{ width: calc.confScore + '%', background: confTierGradient.from }"></div>
                    </div>
                    <div class="text-xs font-bold text-gray-700 w-12 text-right">{{ calc.confScore }}/100</div>
                  </div>
                </div>
              </div>

              <!-- 4. Key Metrics Grid -->
              <div class="px-5 pb-4 grid grid-cols-2 gap-3">
                <div class="rounded-xl border border-gray-200 p-3">
                  <div class="text-xs text-gray-500 mb-1">Weighted Avg $/sqft</div>
                  <div class="text-xl font-bold text-gray-900">{{ formatDollarPerSqft(calc.weightedPPSF) }}</div>
                  <div class="text-xs text-gray-400 mt-1">From {{ calc.validCount }} comps</div>
                </div>
                <div class="rounded-xl border border-gray-200 p-3">
                  <div class="text-xs text-gray-500 mb-1">Subject Implied $/sqft</div>
                  <div class="text-xl font-bold text-gray-900">{{ formatDollarPerSqft(calc.subjectImpliedPPSF) }}</div>
                  <div class="text-xs text-gray-400 mt-1">ARV ÷ {{ subject.sqft?.toLocaleString() || '—' }} sqft</div>
                </div>
                <div v-if="rehabBudget > 0" class="rounded-xl border border-emerald-200 p-3">
                  <div class="text-xs text-emerald-700 mb-1 font-semibold">70% Rule Max Offer</div>
                  <div class="text-xl font-bold text-emerald-700">{{ formatCurrency(calc.rule70MaxOffer) }}</div>
                  <div class="text-xs text-gray-400 mt-1">(ARV × 70%) − Rehab</div>
                </div>
                <div class="rounded-xl border border-blue-200 p-3">
                  <div class="text-xs text-blue-700 mb-1 font-semibold">75% Rule (BRRRR)</div>
                  <div class="text-xl font-bold text-blue-700">{{ formatCurrency(calc.rule75Target) }}</div>
                  <div class="text-xs text-gray-400 mt-1">ARV × 75% All-In Target</div>
                </div>
              </div>

              <!-- 5. Visualization: Comp Comparison Table -->
              <div class="px-5 pb-4 border-t border-gray-50 pt-4">
                <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Comp Comparison Table</h3>
                <div class="overflow-x-auto">
                  <table class="w-full text-xs">
                    <thead>
                      <tr class="text-gray-400 border-b border-gray-100">
                        <th class="text-left pb-1.5 font-medium">Comp</th>
                        <th class="text-right pb-1.5 font-medium">Sale</th>
                        <th class="text-right pb-1.5 font-medium">Sqft</th>
                        <th class="text-right pb-1.5 font-medium">PPSF</th>
                        <th class="text-right pb-1.5 font-medium">Adj</th>
                        <th class="text-right pb-1.5 font-medium">Wt%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(cd, idx) in calc.perCompData" :key="idx"
                        :class="cd.isExtremeOutlier ? 'bg-red-100' : cd.isOutlier ? 'bg-red-50' : idx % 2 === 0 ? 'bg-gray-50/50' : ''"
                        class="border-b border-gray-50">
                        <td class="py-1.5 font-medium">
                          C{{ cd.origIdx + 1 }}
                          <span v-if="cd.isExtremeOutlier" class="ml-1 text-red-600">⛔</span>
                          <span v-else-if="cd.isOutlier" class="ml-1 text-orange-500">⚠</span>
                        </td>
                        <td class="text-right">{{ formatCurrencyShort(cd.salePrice) }}</td>
                        <td class="text-right">{{ cd.sqft?.toLocaleString() }}</td>
                        <td class="text-right">{{ formatDollarPerSqft(cd.rawPPSF) }}</td>
                        <td class="text-right">{{ formatDollarPerSqft(cd.adjPPSF) }}</td>
                        <td class="text-right font-bold" :style="{ color: confTierGradient.from }">{{ (cd.normWeight * 100).toFixed(1) }}%</td>
                      </tr>
                      <tr class="border-t-2 border-gray-200 font-bold">
                        <td class="pt-2 text-gray-700" colspan="4">Weighted Avg</td>
                        <td class="text-right pt-2 text-gray-900">{{ formatDollarPerSqft(calc.weightedPPSF) }}</td>
                        <td class="text-right pt-2" :style="{ color: confTierGradient.from }">100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- 5b. Visualization: ARV Calculation Breakdown -->
              <div class="px-5 pb-4 border-t border-gray-50 pt-4">
                <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">15-Step Calculation Breakdown</h3>
                <div class="space-y-1.5 text-xs text-gray-600">
                  <div class="flex justify-between"><span>Weighted Avg $/sqft</span><span class="font-bold">{{ formatDollarPerSqft(calc.weightedPPSF) }}</span></div>
                  <div class="flex justify-between"><span>× Subject Sqft</span><span class="font-bold">{{ subject.sqft?.toLocaleString() || '—' }}</span></div>
                  <div class="flex justify-between border-t border-gray-100 pt-1.5"><span>Raw ARV (before condition)</span><span class="font-bold">{{ formatCurrency(calc.rawARV) }}</span></div>
                  <div class="flex justify-between"><span>Condition Multiplier</span><span class="font-bold">× {{ calc.condMult.toFixed(3) }} ({{ subject.condition }} vs {{ avgCompCondition }})</span></div>
                  <div v-if="calc.bedAdj !== 0" class="flex justify-between"><span>Bedroom Adjustment</span><span class="font-bold" :class="calc.bedAdj >= 0 ? 'text-emerald-600' : 'text-red-600'">{{ calc.bedAdj >= 0 ? '+' : '' }}{{ formatCurrency(calc.bedAdj) }}</span></div>
                  <div v-if="calc.bathAdj !== 0" class="flex justify-between"><span>Bathroom Adjustment</span><span class="font-bold" :class="calc.bathAdj >= 0 ? 'text-emerald-600' : 'text-red-600'">{{ calc.bathAdj >= 0 ? '+' : '' }}{{ formatCurrency(calc.bathAdj) }}</span></div>
                  <div v-if="calc.garageAdj !== 0" class="flex justify-between"><span>Garage Adjustment</span><span class="font-bold" :class="calc.garageAdj >= 0 ? 'text-emerald-600' : 'text-red-600'">{{ calc.garageAdj >= 0 ? '+' : '' }}{{ formatCurrency(calc.garageAdj) }}</span></div>
                  <div v-if="calc.yearAdj !== 0" class="flex justify-between"><span>Year Built Adjustment</span><span class="font-bold" :class="calc.yearAdj >= 0 ? 'text-emerald-600' : 'text-red-600'">{{ calc.yearAdj >= 0 ? '+' : '' }}{{ formatCurrency(calc.yearAdj) }}</span></div>
                  <div v-if="calc.lotAdj !== 0" class="flex justify-between"><span>Lot Size Adjustment</span><span class="font-bold" :class="calc.lotAdj >= 0 ? 'text-emerald-600' : 'text-red-600'">{{ calc.lotAdj >= 0 ? '+' : '' }}{{ formatCurrency(calc.lotAdj) }}</span></div>
                  <div class="flex justify-between border-t-2 border-gray-200 pt-1.5 font-bold text-sm">
                    <span class="text-gray-900">Estimated ARV (rounded to $1K)</span>
                    <span :style="{ color: confTierGradient.from }">{{ formatCurrency(calc.finalARV) }}</span>
                  </div>
                </div>
              </div>

              <!-- 6. Result Meaning / Context -->
              <div class="px-5 py-4 border-t border-gray-100"
                :style="`background: ${confTierGradient.from}12;`">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-xs font-bold px-2.5 py-0.5 rounded-full text-white"
                    :style="`background: ${confTierGradient.from}`">
                    {{ calc.confTier }}
                  </span>
                  <span class="text-xs font-semibold text-gray-400 uppercase tracking-wide">Deal context</span>
                </div>
                <p class="text-sm leading-relaxed font-medium text-gray-700">{{ insightText }}</p>
              </div>

              <!-- 7. Sensitivity: Subject Sqft × $/sqft -->
              <div class="border-t border-gray-100">
                <div class="px-5 pt-4 pb-1">
                  <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Sensitivity: Sqft × $/sqft</h3>
                  <div class="overflow-x-auto">
                    <table class="w-full text-xs">
                      <thead>
                        <tr class="text-gray-400 border-b border-gray-100">
                          <th class="text-left pb-1.5 font-medium">Sqft</th>
                          <th v-for="ps in sensitivityPPSF" :key="ps" class="text-right pb-1.5 font-medium">{{ formatDollarPerSqft(ps) }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="sq in sensitivitySqft" :key="sq" class="border-b border-gray-50">
                          <td class="py-1 text-gray-600">{{ sq.toLocaleString() }}</td>
                          <td v-for="ps in sensitivityPPSF" :key="ps" class="text-right py-1"
                            :class="sq === subject.sqft && Math.abs(ps - calc.weightedPPSF) < 2 ? 'font-bold' : ''"
                            :style="sq === subject.sqft && Math.abs(ps - calc.weightedPPSF) < 2 ? { color: confTierGradient.from } : {}">
                            {{ formatCurrencyShort(Math.round(sq * ps / 1000) * 1000) }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Sensitivity: Condition × ARV -->
                <div class="px-5 pb-4 pt-3 border-t border-gray-50">
                  <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Sensitivity: Condition × ARV</h3>
                  <div class="space-y-1.5">
                    <div v-for="cond in conditionSensitivity" :key="cond.label" class="flex items-center gap-3">
                      <div class="text-xs text-gray-600 w-28 shrink-0">{{ cond.label }}</div>
                      <div class="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div class="h-full rounded-full" :style="{ width: (cond.arv / (calc.finalARV * 1.15)) * 100 + '%', background: confTierGradient.from }"></div>
                      </div>
                      <div class="text-xs font-bold text-gray-700 w-20 text-right">{{ formatCurrencyShort(cond.arv) }}</div>
                    </div>
                  </div>
                </div>

                <!-- Sensitivity: Comp Count × Confidence -->
                <div class="px-5 pb-4 border-t border-gray-50 pt-3">
                  <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Sensitivity: Comp Count × Confidence</h3>
                  <div class="space-y-1.5">
                    <div v-for="cc in compCountSensitivity" :key="cc.count" class="flex items-center gap-3">
                      <div class="text-xs text-gray-600 w-16 shrink-0">{{ cc.count }} comps</div>
                      <div class="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div class="h-full rounded-full" :style="{ width: cc.maxScore + '%', background: confTierGradient.from }"></div>
                      </div>
                      <div class="text-xs font-bold text-gray-700 w-24 text-right">≤{{ cc.maxScore }} pts max</div>
                    </div>
                  </div>
                </div>

                <!-- Scenario Analysis -->
                <div class="px-5 pb-4 border-t border-gray-50 pt-3">
                  <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Scenario Analysis</h3>
                  <div class="grid grid-cols-3 gap-2">
                    <div v-for="sc in scenarios" :key="sc.label" class="rounded-xl border p-3 text-center"
                      :class="sc.label === 'Base' ? 'border-amber-200 bg-amber-50' : 'border-gray-200'">
                      <div class="text-xs font-semibold text-gray-600 mb-1">{{ sc.label }}</div>
                      <div class="text-sm font-extrabold" :style="sc.label === 'Base' ? { color: confTierGradient.from } : {}">{{ formatCurrencyShort(sc.arv) }}</div>
                      <div class="text-xs text-gray-400">{{ sc.note }}</div>
                    </div>
                  </div>
                </div>

              </div>

              <!-- 8. Action Buttons (canonical order) -->
              <div class="p-4 border-t border-gray-100 space-y-2">
                <!-- 1. PRIMARY: Save -->
                <button @click="openSaveScenario"
                  class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
                  style="background: #f59e0b; color: #1e3a5f;">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                  </svg>
                  Save Scenario
                </button>
                <!-- 2. Share + PDF in one row -->
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
                <!-- 3. Email -->
                <button @click="showEmailModal = true"
                  class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs text-gray-500 hover:text-gray-700 border border-dashed border-gray-200 hover:border-gray-300 transition">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Email me this analysis
                </button>
              </div>

            </div>
          </template>

          <!-- ══ FIND-PPSF MODE ══ -->
          <template v-if="calcMode === 'find-ppsf'">
            <div class="bg-white rounded-xl border border-blue-200 overflow-hidden">

              <!-- Primary Result -->
              <div class="px-5 py-5 border-b border-blue-100">
                <p class="text-xs font-semibold uppercase tracking-wide mb-2 text-blue-400">
                  Find Required Comps PPSF
                </p>
                <div v-if="!targetARV || !subject.sqft" class="text-center text-gray-400 py-4 text-sm">
                  Enter Target ARV and Subject Sqft to find required $/sqft
                </div>
                <template v-else>
                  <div v-if="requiredPPSF.achievable">
                    <div class="font-extrabold text-5xl leading-none text-blue-700 mb-3">
                      {{ formatDollarPerSqft(requiredPPSF.value) }}<span class="text-2xl">/sqft</span>
                    </div>
                    <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-xs bg-blue-100 text-blue-800">
                      <span class="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                      Required Weighted Avg $/sqft
                    </div>
                    <div class="mt-3 text-sm text-gray-600">
                      To achieve ARV of <strong class="text-blue-700">{{ formatCurrency(targetARV) }}</strong>
                    </div>
                    <div class="mt-2 text-xs text-gray-500 bg-blue-50 rounded-lg p-3 border border-blue-100">
                      With condition multiplier ({{ subject.condition }} vs {{ avgCompCondition }}):
                      {{ formatDollarPerSqft(requiredPPSF.rawPPSF) }}/sqft required from comps alone (before condition adj)
                    </div>
                    <div v-if="requiredPPSF.value < 50 || requiredPPSF.value > 600" class="mt-2 text-xs text-amber-700 bg-amber-50 rounded-lg p-2 border border-amber-200">
                      ⚠ Required $/sqft is outside typical US range ($50–$600) — verify inputs
                    </div>
                  </div>
                  <div v-else class="text-center py-4">
                    <div class="text-red-600 font-bold text-sm">Target ARV not achievable with current subject parameters</div>
                    <p class="text-xs text-gray-500 mt-1">The required PPSF would be outside realistic range ($50–$600)</p>
                  </div>
                </template>
              </div>

              <!-- Action Buttons -->
              <div v-if="requiredPPSF.achievable" class="p-4 border-t border-gray-100 space-y-2">
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
                    :class="shareSuccess ? 'border-green-400 text-green-700 bg-green-50' : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'">
                    {{ shareSuccess ? 'Copied!' : 'Share' }}
                  </button>
                  <button @click="exportPDF"
                    class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50">
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

            </div>
          </template>

          <!-- ══ DEAL-SCREEN MODE ══ -->
          <template v-if="calcMode === 'deal-screen'">

            <!-- Not ready -->
            <div v-if="!calc.ready" class="bg-white rounded-xl border border-gray-200 overflow-hidden px-5 py-8 text-center">
              <p class="text-gray-500 text-sm mb-1">Enter subject property + at least 3 comps</p>
              <p class="text-gray-400 text-xs">ARV is calculated from your comps to run the deal screen</p>
              <p v-if="calc.validCount > 0" class="text-emerald-600 text-xs mt-2 font-semibold">
                {{ calc.validCount }} valid comp{{ calc.validCount !== 1 ? 's' : '' }} entered — need {{ 3 - calc.validCount }} more
              </p>
            </div>

            <div v-if="calc.ready" class="bg-white rounded-xl border border-emerald-200 overflow-hidden">

              <!-- Primary Result -->
              <div class="px-5 py-5 border-b border-emerald-100">
                <p class="text-xs font-semibold uppercase tracking-wide mb-2 text-emerald-400">Deal Screening Results</p>
                <div class="text-2xl font-extrabold text-gray-900 mb-1">ARV: {{ formatCurrency(calc.finalARV) }}</div>
                <div class="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full mb-4"
                  :class="calc.confTier === 'HIGH' ? 'bg-emerald-100 text-emerald-700' : calc.confTier === 'MEDIUM' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'">
                  {{ calc.confTier }} Confidence
                </div>

                <!-- Warnings: deal-screen breakdown -->
                <div class="space-y-2">
                  <div class="flex items-center justify-between rounded-xl p-3"
                    :class="dealScreenResult.passes70 ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'">
                    <div>
                      <div class="text-xs font-bold" :class="dealScreenResult.passes70 ? 'text-emerald-700' : 'text-red-700'">70% Rule Check</div>
                      <div class="text-xs text-gray-500">Max Offer: {{ formatCurrency(calc.rule70MaxOffer) }}</div>
                    </div>
                    <div class="text-xl font-extrabold" :class="dealScreenResult.passes70 ? 'text-emerald-600' : 'text-red-600'">
                      {{ dealScreenResult.passes70 ? '✓ PASS' : '✗ FAIL' }}
                    </div>
                  </div>
                  <div class="flex items-center justify-between rounded-xl p-3"
                    :class="dealScreenResult.passes75 ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'">
                    <div>
                      <div class="text-xs font-bold" :class="dealScreenResult.passes75 ? 'text-emerald-700' : 'text-red-700'">75% Rule Check (BRRRR)</div>
                      <div class="text-xs text-gray-500">All-In Target: {{ formatCurrency(calc.rule75Target) }}</div>
                    </div>
                    <div class="text-xl font-extrabold" :class="dealScreenResult.passes75 ? 'text-emerald-600' : 'text-red-600'">
                      {{ dealScreenResult.passes75 ? '✓ PASS' : '✗ FAIL' }}
                    </div>
                  </div>
                </div>

                <div v-if="targetPurchase && rehabBudget" class="mt-3 text-xs text-gray-500 bg-gray-50 rounded-lg p-2">
                  Purchase: {{ formatCurrency(targetPurchase) }} + Rehab: {{ formatCurrency(rehabBudget) }} = All-In: {{ formatCurrency(dealScreenResult.allIn) }}
                </div>
              </div>

              <!-- Result Meaning/Context -->
              <div class="px-5 py-4 border-t border-gray-100 bg-emerald-50/30">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-xs font-bold px-2.5 py-0.5 rounded-full text-white bg-emerald-600">Screen</span>
                  <span class="text-xs font-semibold text-gray-400 uppercase tracking-wide">Deal context</span>
                </div>
                <p class="text-sm leading-relaxed font-medium text-gray-700">{{ insightText }}</p>
              </div>

              <!-- Action Buttons -->
              <div class="p-4 border-t border-gray-100 space-y-2">
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
                    :class="shareSuccess ? 'border-green-400 text-green-700 bg-green-50' : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'">
                    {{ shareSuccess ? 'Copied!' : 'Share' }}
                  </button>
                  <button @click="exportPDF"
                    class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50">
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

            </div>
          </template>

        </div>
        </div>
        </div>

      </div><!-- end two-column -->

      </div>
      </div><!-- end gradient wrapper -->

    </main>

    <!-- ═══════════════════════════════════════════════
         SEO CONTENT
    ═══════════════════════════════════════════════ -->
    <div class="max-w-[1100px] mx-auto px-4 sm:px-6 pb-12 space-y-10">

      <!-- SECTION 1: WHAT IS ARV -->
      <section id="what-is-arv">
        <h2 class="text-xl font-extrabold text-gray-900 mb-4">What Is ARV? (and why it's an estimate, not a calculation)</h2>
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
            <svg class="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            <div>
              <p class="text-sm font-bold text-amber-800">ARV is an estimate, not a calculation</p>
              <p class="text-sm text-amber-700">This tool <em>approximates</em> After Repair Value using comparable sales methodology. Results carry inherent uncertainty and are for investor screening only. <strong>Not a substitute for licensed appraisal.</strong> Lenders will not accept this output for loan underwriting.</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 leading-relaxed">ARV (After Repair Value) is the projected market value of a property after renovation is complete, expressed in current market dollars. It is the single most important input in flip and BRRRR deal analysis — a $10K ARV miss can eliminate entire projected profit on a thin-margin flip. Unlike calculations that produce precise outputs (cap rate, mortgage payment, NOI), ARV is an <strong>estimate</strong> derived from comparable sales data with inherent uncertainty. Professional appraisers, real estate agents, and experienced investors all approach ARV the same way: find similar recently-sold properties, adjust for differences, and estimate the subject's value in that context.</p>
          <p class="text-sm text-gray-600 leading-relaxed">This calculator uses a Hybrid Comparable Sales + Adjustments methodology. The weighted average $/sqft is computed across 3–5 recent comparable sales, weighted by recency and proximity to the subject. Adjustments are applied for bedroom/bathroom/garage/year-built/lot-size differences using industry-standard rules of thumb ($5K per bedroom, $10K per full bath, $5K per half bath, $10K per garage space). A condition multiplier then reflects the subject's post-rehab state relative to the comp baseline.</p>
          <p class="text-sm text-gray-600 leading-relaxed">Every ARV estimate carries inherent uncertainty — two appraisers given the same comps might produce ARVs that differ by 5–10%. This tool expresses that honestly via the Confidence Range (±$). Tight comp data — similar properties, recent sales, close proximity — produces a narrow range; scattered or old data produces a wider range. Professional investors use the lower bound of the Confidence Range when making offers, not the single-point estimate.</p>
          <div class="grid md:grid-cols-2 gap-4 mt-2">
            <div class="bg-gray-50 rounded-xl p-4">
              <h3 class="font-bold text-gray-800 text-sm mb-2">Overview</h3>
              <p class="text-sm text-gray-600 leading-relaxed">Fix and Flip investors use this tool to calculate Max Offer via the 70% Rule. BRRRR investors use it to project refi ARV and capital recovery. Wholesalers use it to justify assignment fees to end buyers with real comp-backed data. Real estate agents advising investor clients can run a quick ARV estimate in under 5 minutes.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4">
              <h3 class="font-bold text-gray-800 text-sm mb-2">How to Use</h3>
              <ol class="text-sm text-gray-600 space-y-1">
                <li class="flex gap-2"><span class="font-bold shrink-0">1.</span><span>Select mode: Analyze ARV (standard), Find Required Comps PPSF (reverse), or Compare Deal Screening.</span></li>
                <li class="flex gap-2"><span class="font-bold shrink-0">2.</span><span>Enter subject property: sqft, beds, baths, garage, year built, condition.</span></li>
                <li class="flex gap-2"><span class="font-bold shrink-0">3.</span><span>Add 3–5 comps: sale price, date, sqft, beds, baths, distance.</span></li>
                <li class="flex gap-2"><span class="font-bold shrink-0">4.</span><span>Review outlier flags and Confidence Score.</span></li>
                <li class="flex gap-2"><span class="font-bold shrink-0">5.</span><span>Enter Rehab Budget to see 70% Rule Max Offer.</span></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: FORMULA -->
      <section id="formula">
        <h2 class="text-xl font-extrabold text-gray-900 mb-4">ARV Formula &amp; Comparable Sales Methodology</h2>
        <p class="text-sm text-gray-500 mb-4">How the calculator estimates after-repair value — with a worked Charlotte, NC example for 2026</p>
        <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-4">
          <p class="text-sm text-amber-800 font-semibold">Important: ARV is an ESTIMATE, not a calculation.</p>
          <p class="text-sm text-amber-700 mt-1">The formula below is a structured methodology based on appraiser practice, but the output has inherent uncertainty. Two different sets of valid comps will produce different ARV estimates for the same property. The Confidence Range honestly reflects this. For final lending or purchase decisions, always verify with a licensed appraiser or BPO. This calculator is a SCREENING TOOL.</p>
        </div>
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 class="font-bold text-gray-800 mb-3">15-Step Methodology</h3>
          <ol class="text-sm text-gray-600 space-y-2 list-decimal list-inside">
            <li>Compute raw $/sqft for each comp: Comp Sale Price ÷ Comp Sqft</li>
            <li>Apply adjustments for bed/bath/garage/year/lot differences (+$5K/bed, +$10K/full bath, +$5K/half bath, +$10K/garage space, +$500/year-built, +$5/sqft lot opt-in)</li>
            <li>Compute Adjusted $/sqft for each comp (after adjustments)</li>
            <li>Detect outliers: flag any comp with PPSF &gt;25% from median (weight reduced 50–75%)</li>
            <li>Compute PPSF Coefficient of Variation (CV) for spread-based penalty</li>
            <li>Apply weight to each comp: Recency × Distance × Similarity (then normalized)</li>
            <li>Apply MAX CAP 40% per comp with PARTIAL REDISTRIBUTE rule</li>
            <li>Verify all weights are non-negative — clamp to 0, renormalize</li>
            <li>Compute Weighted Average $/sqft across all comps</li>
            <li>Multiply by Subject Sqft to get Raw ARV (before condition adjustment)</li>
            <li>Determine Condition Multiplier (×0.85 to ×1.10)</li>
            <li>Apply Condition Multiplier to Raw ARV</li>
            <li>Round final ARV to nearest $1,000</li>
            <li>Compute Confidence Score (0–100) from 5 factors; derive Confidence Range</li>
            <li>Compute 70% Rule Max Offer and 75% Rule All-In Target (if Rehab Budget entered)</li>
          </ol>

          <div class="mt-5 bg-gray-50 rounded-xl p-4 font-mono text-xs text-gray-700 space-y-1">
            <div>Weighted Avg $/sqft: Σ(Adjusted Comp $/sqft × Normalized Weight)</div>
            <div>Raw ARV: Weighted Avg $/sqft × Subject Sqft</div>
            <div>Final ARV: Raw ARV × Condition Multiplier (rounded to nearest $1,000)</div>
            <div>Confidence Range: Final ARV ± (Final ARV × Range%)</div>
            <div class="mt-2">Score 95–100 → ±2.5% | Score 85–94 → ±3.5% | Score 75–84 → ±5%</div>
            <div>Score 65–74 → ±6.5% | Score 55–64 → ±8% | Score 40–54 → ±10% | Score &lt;40 → ±12%</div>
            <div class="mt-2">70% Rule Max Offer: (Final ARV × 0.70) − Rehab Budget</div>
            <div>75% Rule All-In Target: Final ARV × 0.75</div>
          </div>

          <div class="mt-6">
            <h4 class="font-bold text-gray-800 mb-2">Worked Example — Charlotte, NC (2026)</h4>
            <p class="text-sm text-gray-600 mb-3">Subject: 3BR/2BA SFR, 1,800 sqft, 1985 build, post-rehab Good condition. 4 comps, all under 120 days, within 0.8 miles.</p>
            <div class="space-y-2 text-sm text-gray-600">
              <div class="bg-gray-50 rounded-lg p-3"><strong>Steps 1–3:</strong> Comp PPSFs after adjustments: C1=$151.69, C2=$152.75, C3=$147.73, C4=$150.57. Weighted Avg = $150.90/sqft</div>
              <div class="bg-gray-50 rounded-lg p-3"><strong>Steps 4–8:</strong> No outliers (all within 25% of median). CV=1.7% (tight). No spread penalty. Weights normalized: C1=32.6%, C2=24.5%, C3=18.4%, C4=24.5%</div>
              <div class="bg-gray-50 rounded-lg p-3"><strong>Steps 9–13:</strong> Raw ARV = $150.90 × 1,800 = $271,620. Condition Multiplier = ×1.05 (Good vs Average). Final ARV = $285,000 (rounded)</div>
              <div class="bg-gray-50 rounded-lg p-3"><strong>Step 14:</strong> Confidence Score = 85 pts → HIGH → ±3.5% range → $275,000–$295,000</div>
              <div class="bg-indigo-50 rounded-lg p-3 border border-indigo-200"><strong>Result:</strong> Estimated ARV = $285,000 | Range: $275,000–$295,000 (±$10,000) | HIGH Confidence (85/100) | 70% Rule Max Offer (at $40K rehab): $159,500</div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: INPUTS & OUTPUTS -->
      <section id="inputs-outputs">
        <h2 class="text-xl font-extrabold text-gray-900 mb-4">Inputs &amp; Outputs — Field Reference</h2>
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p class="text-sm text-gray-500 mb-4">What each field means and where to find the numbers.</p>
          <div class="overflow-x-auto mb-6">
            <table class="w-full text-sm">
              <thead><tr class="text-xs text-gray-400 border-b border-gray-100"><th class="text-left pb-2 font-medium">Field</th><th class="text-left pb-2 font-medium">What it means</th><th class="text-left pb-2 font-medium">Where to find it</th></tr></thead>
              <tbody class="divide-y divide-gray-50 text-gray-600">
                <tr><td class="py-2 font-medium">Subject Sqft</td><td class="py-2">Heated/cooled square footage</td><td class="py-2">Listing, appraisal, assessor</td></tr>
                <tr><td class="py-2 font-medium">Subject Bedrooms</td><td class="py-2">Number of bedrooms</td><td class="py-2">Property listing</td></tr>
                <tr><td class="py-2 font-medium">Subject Bathrooms</td><td class="py-2">Full + half baths (2.5 = 2 full + 1 half)</td><td class="py-2">Property listing</td></tr>
                <tr><td class="py-2 font-medium">Subject Condition</td><td class="py-2">Post-rehab condition (Good for move-in ready)</td><td class="py-2">Projected after rehab</td></tr>
                <tr><td class="py-2 font-medium">Comp Sale Price</td><td class="py-2">Actual recorded sale price</td><td class="py-2">MLS, Redfin, Zillow sold</td></tr>
                <tr><td class="py-2 font-medium">Comp Sale Date</td><td class="py-2">Date of closing</td><td class="py-2">Same as above</td></tr>
                <tr><td class="py-2 font-medium">Comp Sqft</td><td class="py-2">Heated/cooled square footage</td><td class="py-2">Same as above</td></tr>
                <tr><td class="py-2 font-medium">Comp Distance</td><td class="py-2">Miles from subject property</td><td class="py-2">Map tool or manual estimate</td></tr>
                <tr><td class="py-2 font-medium">Rehab Budget</td><td class="py-2">Projected renovation cost (triggers 70% Rule)</td><td class="py-2">Contractor bids</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="font-bold text-gray-800 mb-3 text-sm">Outputs</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead><tr class="text-xs text-gray-400 border-b border-gray-100"><th class="text-left pb-2 font-medium">Output</th><th class="text-left pb-2 font-medium">What it means</th><th class="text-left pb-2 font-medium">Primary use</th></tr></thead>
              <tbody class="divide-y divide-gray-50 text-gray-600">
                <tr><td class="py-2 font-medium">Estimated ARV</td><td class="py-2">Projected post-renovation market value</td><td class="py-2">Headline deal screening number</td></tr>
                <tr><td class="py-2 font-medium">Confidence Range</td><td class="py-2">±$ envelope based on comp spread + score</td><td class="py-2">Realistic offer range</td></tr>
                <tr><td class="py-2 font-medium">Confidence Tier</td><td class="py-2">HIGH/MEDIUM/LOW (estimate reliability)</td><td class="py-2">Know whether to trust the estimate</td></tr>
                <tr><td class="py-2 font-medium">Weighted Avg $/sqft</td><td class="py-2">Comp-derived PPSF used to compute ARV</td><td class="py-2">Sanity check vs local market</td></tr>
                <tr><td class="py-2 font-medium">70% Rule Max Offer</td><td class="py-2">(ARV × 0.70) − Rehab Budget</td><td class="py-2">Fix and Flip acquisition ceiling</td></tr>
                <tr><td class="py-2 font-medium">75% Rule All-In Target</td><td class="py-2">ARV × 0.75</td><td class="py-2">BRRRR capital recovery target</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- SECTION 4: CONFIDENCE TIERS -->
      <section id="confidence-tiers">
        <h2 class="text-xl font-extrabold text-gray-900 mb-4">What Your Confidence Tier Means</h2>
        <p class="text-sm text-gray-500 mb-4">ARV Confidence Tiers show how reliable your estimate is — not deal quality.</p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
            <div class="text-sm font-extrabold text-emerald-700 mb-2">HIGH Confidence (Score 80–100)</div>
            <p class="text-sm text-emerald-800 mb-3">4–5 recent comps, tight PPSF spread, similar properties, close proximity, all under 180 days old.</p>
            <p class="text-sm text-emerald-700">Reliable for screening and initial offer development. Proceed with deal analysis using this ARV, but verify with BPO before formal offer or lender submission.</p>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <div class="text-sm font-extrabold text-amber-700 mb-2">MEDIUM Confidence (Score 60–79)</div>
            <p class="text-sm text-amber-800 mb-3">3 comps OR mixed recency, moderate PPSF spread (CV 15–30%), 0–1 outliers flagged.</p>
            <p class="text-sm text-amber-700">Usable for initial screening but less reliable. Use the Confidence Range — not the point estimate — when considering offers. Widen your margin of safety.</p>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-2xl p-5">
            <div class="text-sm font-extrabold text-red-700 mb-2">LOW Confidence (Score &lt;60)</div>
            <p class="text-sm text-red-800 mb-3">Fewer than 3 comps, wide PPSF spread (&gt;30%), multiple outliers, or subject sqft mismatch.</p>
            <p class="text-sm text-red-700">Estimate has too much uncertainty. Do not use this ARV for offer construction. Find more comps (target 4–5 recent + similar) or order a professional appraisal.</p>
          </div>
        </div>
        <div class="mt-4 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <h3 class="font-bold text-gray-800 text-sm mb-2">Why 2026 ARV estimates require more caution than 2019</h3>
          <p class="text-sm text-gray-600">Post-pandemic markets have more regional variance. Hot markets (Austin, Boise, Phoenix) saw ARV decline 5–15% from 2022 peaks while cooling markets stabilized. Comps from 6+ months ago in volatile markets may overstate or understate current ARV by 3–8%. Practical implication: use recent comps (under 90 days preferred, under 180 days maximum), trust Confidence Range over point estimate, and verify with BPO in volatile markets.</p>
        </div>
      </section>

      <!-- SECTION 5: BENCHMARKS -->
      <section id="benchmarks">
        <h2 class="text-xl font-extrabold text-gray-900 mb-4">ARV $/sqft Ranges (2026, by Property Type and Market)</h2>
        <p class="text-sm text-gray-500 mb-4">Typical 2026 ARV $/sqft ranges across property types and major US markets. Use as sanity check — if your calculated ARV implies $/sqft outside these ranges, verify your comps.</p>
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-4">
          <h3 class="font-bold text-gray-800 text-sm mb-3">By Property Type</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead><tr class="text-xs text-gray-400 border-b border-gray-100"><th class="text-left pb-2">Property Type</th><th class="text-right pb-2">Low Market $/sqft</th><th class="text-right pb-2">Mid Market $/sqft</th><th class="text-right pb-2">High Market $/sqft</th></tr></thead>
              <tbody class="divide-y divide-gray-50 text-gray-600">
                <tr><td class="py-2">SFR (starter)</td><td class="text-right py-2">$85–$120</td><td class="text-right py-2">$120–$180</td><td class="text-right py-2">$180–$280</td></tr>
                <tr><td class="py-2">SFR (move-up)</td><td class="text-right py-2">$110–$150</td><td class="text-right py-2">$150–$220</td><td class="text-right py-2">$220–$350</td></tr>
                <tr><td class="py-2">Small Multi (2–4)</td><td class="text-right py-2">$95–$130</td><td class="text-right py-2">$130–$190</td><td class="text-right py-2">$190–$300</td></tr>
                <tr><td class="py-2">Condo</td><td class="text-right py-2">$130–$180</td><td class="text-right py-2">$180–$260</td><td class="text-right py-2">$260–$420</td></tr>
                <tr><td class="py-2">Townhouse</td><td class="text-right py-2">$100–$140</td><td class="text-right py-2">$140–$210</td><td class="text-right py-2">$210–$320</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div v-for="state in stateCards" :key="state.state" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div class="font-bold text-gray-800 mb-1">{{ state.state }}</div>
            <div class="text-sm font-semibold text-indigo-700 mb-1">{{ state.range }}</div>
            <div class="text-xs text-gray-500 mb-2">{{ state.markets }}</div>
            <p class="text-xs text-gray-600">{{ state.note }}</p>
          </div>
        </div>
      </section>

      <!-- SECTION 6: STRATEGY -->
      <section id="strategy">
        <h2 class="text-xl font-extrabold text-gray-900 mb-4">ARV Strategy — When and How to Use This Calculator</h2>
        <p class="text-sm text-gray-500 mb-4">How the ARV Calculator supports different real estate investment strategies</p>
        <div class="space-y-4">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div class="inline-block text-xs font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 mb-2">Fix and Flip Investor</div>
            <p class="text-sm text-gray-600 mb-2">Fix and Flip investors use ARV Calculator as the SCREENING TOOL before committing to a deal. Enter 3–5 recent comps and your projected Rehab Budget — the calculator immediately shows Estimated ARV AND 70% Rule Max Offer, the maximum purchase price that supports healthy flip margins.</p>
            <p class="text-sm text-gray-600">Practical workflow: screen 5–10 potential deals per week with ARV Calculator, shortlist those that pass the 70% Rule with HIGH Confidence, then analyze shortlist deals in detail with the <NuxtLink to="/fix-and-flip-calculator" class="text-indigo-600 underline">Fix and Flip Calculator</NuxtLink>.</p>
          </div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div class="inline-block text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 mb-2">BRRRR Investor</div>
            <p class="text-sm text-gray-600 mb-2">BRRRR investors need ARV to project refi proceeds and Capital Left. Enter comps for the post-rehab property state, then check the 75% Rule All-In Target. Your total project cost must stay at or below ARV × 0.75 for full capital recovery at standard 75% LTV refi.</p>
            <p class="text-sm text-gray-600">Pair with the <NuxtLink to="/brrrr-calculator" class="text-indigo-600 underline">BRRRR Calculator</NuxtLink> for full Phase 1 + refi + Phase 3 rental modeling. Important: lender refi appraisal may come in 3–7% below your ARV estimate — model Conservative scenarios.</p>
          </div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div class="inline-block text-xs font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 mb-2">Wholesaler</div>
            <p class="text-sm text-gray-600">Wholesalers use ARV Calculator to justify assignment fees to end-buyer investors. Present a credible ARV with HIGH Confidence tier backed by 4–5 recent comps. Run the calculator WITH your end-buyer's expected rehab budget to show THEM the 70% Rule Max Offer — if your contract + assignment fee is at or below the 70% Rule Max Offer, the deal sells itself.</p>
          </div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div class="inline-block text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 mb-2">Real Estate Agent</div>
            <p class="text-sm text-gray-600">Agents advising investor clients use ARV Calculator to provide data-driven ARV estimates during deal analysis calls. Pull 3–5 recent comps from MLS, enter into the calculator, and show the client Estimated ARV + Confidence Range + 70% Rule Max Offer in a single screen. Export ARV analysis as PDF to include in deal packages.</p>
          </div>
        </div>
      </section>

      <!-- SECTION 7: APPLICATIONS -->
      <section id="applications">
        <h2 class="text-xl font-extrabold text-gray-900 mb-4">Applications of ARV Analysis</h2>
        <p class="text-sm text-gray-500 mb-4">Six concrete ways investors use ARV Calculator</p>
        <div class="grid md:grid-cols-2 gap-4">
          <div v-for="app in applications" :key="app.title" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div class="font-bold text-gray-800 mb-2 text-sm">{{ app.title }}</div>
            <p class="text-sm text-gray-600">{{ app.body }}</p>
          </div>
        </div>
        <div class="mt-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 class="font-bold text-gray-800 mb-3">Where to Find Comparable Sales</h3>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div class="bg-gray-50 rounded-xl p-3">
              <div class="text-xs font-bold text-gray-700 mb-1">MLS (Best Source)</div>
              <p class="text-xs text-gray-600">Requires licensed agent. Provides complete, verified sold data. Most accurate source.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-3">
              <div class="text-xs font-bold text-gray-700 mb-1">Redfin Sold Listings</div>
              <p class="text-xs text-gray-600">Free to access. Shows recent sold prices, dates, property details. Generally reliable for recent comps.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-3">
              <div class="text-xs font-bold text-gray-700 mb-1">Zillow Recent Sales</div>
              <p class="text-xs text-gray-600">Free to access. Cross-check important comps against county records. Zestimate ≠ ARV.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-3">
              <div class="text-xs font-bold text-gray-700 mb-1">County Assessor Records</div>
              <p class="text-xs text-gray-600">Authoritative for sqft and sale price. Most counties publish recent deed transfers online.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-3">
              <div class="text-xs font-bold text-gray-700 mb-1">PropStream / BatchData</div>
              <p class="text-xs text-gray-600">Paid data aggregators popular with professional investors. Monthly subscriptions $99–$299/month.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-3">
              <div class="text-xs font-bold text-gray-700 mb-1">Local Agent BPO</div>
              <p class="text-xs text-gray-600">Agent provides Broker Price Opinion with 3–6 comps from MLS. Cost: $75–$150.</p>
            </div>
          </div>
          <div class="mt-3 text-xs text-gray-500 bg-amber-50 rounded-lg p-3 border border-amber-200">
            <strong>Data quality tip:</strong> When entering comps, always verify sqft against county assessor records — listing sqft often includes unfinished areas, garages, or screen porches that don't count as heated/cooled sqft. Sqft errors are the #1 cause of PPSF outlier flags in this calculator.
          </div>
        </div>
      </section>

      <!-- SECTION 8: INDUSTRY STANDARDS -->
      <section id="industry-standards">
        <h2 class="text-xl font-extrabold text-gray-900 mb-4">Industry Standards &amp; Appraisal Methodology</h2>
        <p class="text-sm text-gray-500 mb-4">How comparable sales methodology fits into professional appraisal and investor practice.</p>
        <div class="space-y-4">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="font-bold text-gray-800 text-sm mb-2">Comparable Sales Method (Appraiser Foundation)</h3>
            <ul class="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Comparable Sales (comps) method is the industry foundation — used by licensed appraisers, BPO providers, and professional investors</li>
              <li>Sales Comparison Approach is one of three appraisal methods, and the primary method for residential ARV</li>
              <li>Appraisers typically use 3–6 recent comps with emphasis on proximity, recency, and similarity</li>
              <li>Adjustments for differences in bed/bath/sqft/condition are applied using market-derived rates — this calculator uses industry-standard rules of thumb as starting defaults</li>
            </ul>
          </div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="font-bold text-gray-800 text-sm mb-2">Professional ARV Sources (when to use each)</h3>
            <ul class="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Licensed Appraisal ($400–$700) — required for lender financing, professionally defended, highest authority</li>
              <li>Broker Price Opinion or BPO ($75–$150) — agent-provided quick estimate, good for screening</li>
              <li>Automated Valuation Models (Zillow Zestimate) — free but broad, 5–15% error common</li>
              <li>This calculator — free, user-driven, tied to specific comps user selects; SCREENING ONLY</li>
            </ul>
          </div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="font-bold text-gray-800 text-sm mb-2">Investor ARV Benchmarks (2026)</h3>
            <ul class="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Experienced flippers aim for HIGH Confidence ARV with 4–5 recent comps before making offers</li>
              <li>Professional wholesalers verify ARV with BPO when contract value exceeds $250K</li>
              <li>Lender refi appraisal comes in 3–7% below investor ARV estimate on average — model Conservative for BRRRR</li>
              <li>ARV estimates are valid for 3–6 months; re-estimate with fresh comps for deals that take longer</li>
              <li>Never rely on single-point ARV — always use Confidence Range when making offers or writing contracts</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 9: LIMITATIONS -->
      <section id="limitations">
        <h2 class="text-xl font-extrabold text-gray-900 mb-4">Limitations of ARV Calculator</h2>
        <p class="text-sm text-gray-500 mb-4">ARV Calculator is a powerful screening tool, but it has real methodology limits you should understand before making decisions.</p>
        <div class="space-y-4">
          <div v-for="lim in limitations" :key="lim.title" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="font-bold text-gray-800 text-sm mb-2">{{ lim.title }}</h3>
            <p class="text-sm text-gray-600">{{ lim.body }}</p>
          </div>
        </div>
        <div class="mt-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <h3 class="font-bold text-gray-800 text-sm mb-3">When Not to Use This Calculator</h3>
          <ul class="text-sm text-gray-600 space-y-1 list-disc list-inside">
            <li>Lender loan underwriting: Use licensed appraisal — this calculator is NOT accepted by lenders for loan approval</li>
            <li>Tax assessment appeals: Use licensed appraisal — tax authorities require professional valuation</li>
            <li>New construction valuation: ARV methodology assumes existing property with recent comps</li>
            <li>Commercial or mixed-use property: This calculator is residential-only</li>
          </ul>
        </div>
      </section>

      <!-- SECTION 10: COMMON MISTAKES -->
      <section id="common-mistakes">
        <h2 class="text-xl font-extrabold text-gray-900 mb-4">Common Mistakes When Calculating ARV</h2>
        <p class="text-sm text-gray-500 mb-4">The 5 most common investor mistakes when estimating ARV — and how to avoid them.</p>
        <div class="space-y-4">
          <div v-for="(mistake, idx) in commonMistakes" :key="idx" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div class="flex gap-3">
              <span class="w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{{ idx + 1 }}</span>
              <div>
                <h3 class="font-bold text-gray-800 text-sm mb-1">{{ mistake.title }}</h3>
                <p class="text-sm text-gray-600">{{ mistake.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 11: FAQ -->
      <section id="faq">
        <h2 class="text-xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div class="space-y-3">
          <div v-for="(faq, idx) in faqs" :key="idx" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <button @click="toggleFaq(idx)" class="w-full flex items-center justify-between p-5 text-left">
              <span class="font-semibold text-gray-800 text-sm pr-4">{{ faq.q }}</span>
              <svg :class="openFaqs.has(idx) ? 'rotate-180' : ''" class="w-5 h-5 text-gray-400 shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div v-if="openFaqs.has(idx)" class="px-5 pb-5 text-sm text-gray-600 border-t border-gray-50 pt-3">{{ faq.a }}</div>
          </div>
        </div>
      </section>

      <!-- SECTION 11b: WHEN ARV MATTERS MOST -->
      <section>
        <div class="bg-gradient-to-r from-indigo-900 to-indigo-700 rounded-2xl p-6 text-white">
          <h2 class="text-lg font-extrabold mb-3">When ARV Accuracy Makes or Breaks a Deal</h2>
          <p class="text-sm opacity-90 mb-4">In real estate investing, ARV is the single most consequential input in your deal analysis. Here is why getting it right (or wrong) matters so much in 2026:</p>
          <div class="grid sm:grid-cols-3 gap-4">
            <div class="bg-white/10 rounded-xl p-4">
              <div class="text-xs font-bold opacity-70 mb-1 uppercase tracking-wide">Fix and Flip</div>
              <p class="text-xs opacity-90">A $15K ARV overestimate on a $280K expected ARV flip (5.4% miss) reduces your 70% Rule Max Offer by $10,500 — often eliminating your entire target profit margin on a $20–$30K thin-margin flip.</p>
            </div>
            <div class="bg-white/10 rounded-xl p-4">
              <div class="text-xs font-bold opacity-70 mb-1 uppercase tracking-wide">BRRRR</div>
              <p class="text-xs opacity-90">A $20K ARV overestimate on a $300K BRRRR deal means your actual 75% LTV refi proceeds are $15,000 lower than projected — a common BRRRR failure mode.</p>
            </div>
            <div class="bg-white/10 rounded-xl p-4">
              <div class="text-xs font-bold opacity-70 mb-1 uppercase tracking-wide">Wholesale</div>
              <p class="text-xs opacity-90">A 10% ARV overestimate on a $350K ARV deal can make an otherwise-marginal deal look attractive to end buyers — until their due diligence reveals the real ARV and they back out.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 12: RELATED CALCULATORS -->
      <section id="related">
        <h2 class="text-xl font-extrabold text-gray-900 mb-4">Related Calculators</h2>
        <p class="text-sm text-gray-500 mb-4">ARV Calculator is the starting point — these tools complete your deal analysis once you have a reliable ARV estimate.</p>
        <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <NuxtLink to="/fix-and-flip-calculator" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:border-orange-300 hover:shadow-md transition block">
            <div class="text-2xl mb-2">🔨</div>
            <div class="font-bold text-gray-800 text-sm mb-1">Fix and Flip Calculator</div>
            <p class="text-xs text-gray-500 mb-2">Full flip deal analysis with holding costs, financing, and profit modeling.</p>
            <p class="text-xs text-indigo-600">Use after ARV estimate → for detailed flip profit and timeline analysis</p>
          </NuxtLink>
          <NuxtLink to="/brrrr-calculator" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:border-blue-300 hover:shadow-md transition block">
            <div class="text-2xl mb-2">♻️</div>
            <div class="font-bold text-gray-800 text-sm mb-1">BRRRR Calculator</div>
            <p class="text-xs text-gray-500 mb-2">Buy, Rehab, Rent, Refi, Repeat — full capital recovery and cash flow analysis.</p>
            <p class="text-xs text-indigo-600">Use after ARV estimate → for Phase 1 + refi + Phase 3 rental modeling</p>
          </NuxtLink>
          <NuxtLink to="/rental-property-calculator" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:border-emerald-300 hover:shadow-md transition block">
            <div class="text-2xl mb-2">🏠</div>
            <div class="font-bold text-gray-800 text-sm mb-1">Rental Property Calculator</div>
            <p class="text-xs text-gray-500 mb-2">Cash flow, CoC return, and long-term rental performance analysis.</p>
            <p class="text-xs text-indigo-600">Use for BRRRR Phase 3 → ongoing rental income and ROI analysis</p>
          </NuxtLink>
          <NuxtLink to="/cap-rate-calculator" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:border-indigo-300 hover:shadow-md transition block">
            <div class="text-2xl mb-2">📊</div>
            <div class="font-bold text-gray-800 text-sm mb-1">Cap Rate Calculator</div>
            <p class="text-xs text-gray-500 mb-2">NOI ÷ Property Value — the core income property performance metric.</p>
            <p class="text-xs text-indigo-600">Use for post-rehab rental analysis → assess income property value</p>
          </NuxtLink>
        </div>
      </section>

      <!-- SECTION 13: PRO TIPS -->
      <section id="pro-tips">
        <h2 class="text-xl font-extrabold text-gray-900 mb-4">Pro Tips for Better ARV Estimates</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div class="flex gap-3">
              <div class="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0"><span class="text-indigo-700 font-bold text-sm">1</span></div>
              <div>
                <div class="font-bold text-gray-800 text-sm mb-1">Use 4–5 comps for HIGH Confidence</div>
                <p class="text-sm text-gray-600">Three comps work for a quick estimate but widen the Confidence Range by 3–5%. Adding a 4th or 5th comp that corroborates the weighted average is the single highest-ROI improvement to your ARV accuracy.</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div class="flex gap-3">
              <div class="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0"><span class="text-indigo-700 font-bold text-sm">2</span></div>
              <div>
                <div class="font-bold text-gray-800 text-sm mb-1">Prioritize recency over proximity</div>
                <p class="text-sm text-gray-600">A 30-day-old comp from 0.8 miles away typically outweighs a 6-month-old comp from 0.3 miles. 2026 markets shift faster than 2019 — stale comps overestimate current ARV.</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div class="flex gap-3">
              <div class="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0"><span class="text-indigo-700 font-bold text-sm">3</span></div>
              <div>
                <div class="font-bold text-gray-800 text-sm mb-1">Watch for outlier flags</div>
                <p class="text-sm text-gray-600">If the calculator flags a comp as &gt;25% PPSF deviation from median, review it — wrong sqft data, unusual condition, or atypical market timing could distort your ARV. Verify the data or manually exclude.</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div class="flex gap-3">
              <div class="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0"><span class="text-indigo-700 font-bold text-sm">4</span></div>
              <div>
                <div class="font-bold text-gray-800 text-sm mb-1">Don't trust single-point ARV</div>
                <p class="text-sm text-gray-600">Always use the Confidence Range when making offers. Professional investors make offers based on the lower bound to build in margin against lender conservative appraisals.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Adjustment Methodology -->
        <div class="mt-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 class="font-bold text-gray-800 mb-3">Adjustment Methodology — Industry-Standard Rates</h3>
          <p class="text-sm text-gray-600 mb-4">The calculator uses the following appraiser-standard adjustment values as defaults. Use Advanced mode to override for your specific market.</p>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="text-xs text-gray-400 border-b border-gray-100">
                  <th class="text-left pb-2 font-medium">Adjustment Type</th>
                  <th class="text-right pb-2 font-medium">Default Rate</th>
                  <th class="text-left pb-2 font-medium pl-4">Notes</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50 text-gray-600">
                <tr><td class="py-2 font-medium">Bedroom difference</td><td class="py-2 text-right font-bold text-indigo-600">±$5,000 per bedroom</td><td class="py-2 pl-4 text-xs text-gray-500">Varies by market — can be $2K–$15K.</td></tr>
                <tr><td class="py-2 font-medium">Full bathroom difference</td><td class="py-2 text-right font-bold text-indigo-600">±$10,000 per full bath</td><td class="py-2 pl-4 text-xs text-gray-500">Industry standard. In luxury markets can reach $15K–$25K per bath.</td></tr>
                <tr><td class="py-2 font-medium">Half bathroom difference</td><td class="py-2 text-right font-bold text-indigo-600">±$5,000 per half bath</td><td class="py-2 pl-4 text-xs text-gray-500">Standard 50% of full bath value adjustment.</td></tr>
                <tr><td class="py-2 font-medium">Garage spaces</td><td class="py-2 text-right font-bold text-indigo-600">±$10,000 per space</td><td class="py-2 pl-4 text-xs text-gray-500">Can be $5K–$20K per space depending on market.</td></tr>
                <tr><td class="py-2 font-medium">Year built difference</td><td class="py-2 text-right font-bold text-indigo-600">±$500 per year</td><td class="py-2 pl-4 text-xs text-gray-500">Applies only when both subject and comp year-built are entered.</td></tr>
                <tr><td class="py-2 font-medium">Lot size difference</td><td class="py-2 text-right font-bold text-indigo-600">±$5 per sqft (opt-in)</td><td class="py-2 pl-4 text-xs text-gray-500">DISABLED by default. Enable in Advanced mode.</td></tr>
                <tr><td class="py-2 font-medium">Condition multiplier</td><td class="py-2 text-right font-bold text-indigo-600">×0.85 to ×1.10</td><td class="py-2 pl-4 text-xs text-gray-500">Poor=×0.85, Needs-Rehab=×0.93, Average=×1.00, Good=×1.05, Excellent=×1.10.</td></tr>
              </tbody>
            </table>
          </div>
          <div class="mt-4 bg-amber-50 rounded-xl p-3 border border-amber-200">
            <p class="text-xs text-amber-800"><strong>Important:</strong> These are industry-standard rules of thumb, not market-derived statistics. Actual adjustment values vary significantly by market, price tier, and property type. For final offer decisions, verify adjustment rates with a local agent or appraiser.</p>
          </div>
        </div>
      </section>

      <!-- SECTION 14: DATA SOURCES NOTE -->
      <section id="methodology">
        <h2 class="text-xl font-extrabold text-gray-900 mb-4">Methodology &amp; Data Sources</h2>
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p class="text-sm text-gray-600 mb-4">ARV $/sqft ranges shown in this calculator are synthesized from multiple industry sources, including Zillow Research regional price data, Redfin Market Insights, local MLS sold data, appraisal institute methodology, and 2026 market rate surveys. All adjustment defaults are based on Fannie Mae appraisal guidelines and appraiser convention.</p>
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <h4 class="font-bold text-gray-700 text-sm mb-2">This calculator uses:</h4>
              <ul class="text-xs text-gray-600 space-y-1 list-disc list-inside">
                <li>Comparable Sales Method (primary residential appraisal approach)</li>
                <li>Weighted average $/sqft with recency/distance/similarity weighting</li>
                <li>Industry-standard adjustment rates (overrideable)</li>
                <li>Tier-differential condition multiplier</li>
                <li>Statistical outlier detection (median absolute deviation)</li>
                <li>Coefficient of Variation for data quality assessment</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-gray-700 text-sm mb-2">This calculator does NOT use:</h4>
              <ul class="text-xs text-gray-600 space-y-1 list-disc list-inside">
                <li>Automated comp pulling or MLS integration</li>
                <li>AVM (Automated Valuation Model) algorithms</li>
                <li>Appreciation forecasting or multi-year projection</li>
                <li>Cost Approach or Income Approach methodology</li>
                <li>Lender-approved appraisal standards (for underwriting)</li>
              </ul>
            </div>
          </div>
          <div class="mt-4 bg-amber-50 rounded-xl p-3 border border-amber-200">
            <p class="text-xs text-amber-800"><strong>Disclaimer:</strong> This ARV Calculator approximates market value for screening purposes only. Results are estimates with inherent uncertainty and should not be used as a substitute for a licensed appraisal or Broker Price Opinion (BPO). Lenders will not accept this tool's output for loan underwriting.</p>
          </div>
        </div>
      </section>

    </div><!-- end SEO content -->

    <!-- SCENARIO PANEL -->
    <div class="max-w-6xl mx-auto px-4 pb-10">
      <ScenarioPanel
        calculator="arv"
        :has-result="calc.ready"
        :result="currentScenarioResult"
        :trigger-save="triggerScenarioSave"
        @saved="onScenarioSaved"
      />
    </div>

    <!-- EMAIL MODAL -->
    <EmailCaptureModal
      v-if="showEmailModal"
      :subject="emailSubject"
      @close="showEmailModal = false"
      @captured="onEmailCaptured"
    />

    <!-- INVESTOR TOOLS CTA -->
    <div class="max-w-[1100px] mx-auto px-4 sm:px-6 pb-6">
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
        <h3 class="font-bold text-gray-800 mb-2">Complete Your Deal Analysis</h3>
        <p class="text-sm text-gray-500 mb-4 max-w-xl mx-auto">ARV Calculator is your starting point. Once you have a reliable ARV estimate, these companion tools complete the picture.</p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink to="/fix-and-flip-calculator"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition hover:opacity-90 text-white"
            style="background: #ea580c;">
            Fix &amp; Flip Calculator →
          </NuxtLink>
          <NuxtLink to="/brrrr-calculator"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition hover:opacity-90 text-white"
            style="background: #2563eb;">
            BRRRR Calculator →
          </NuxtLink>
          <NuxtLink to="/rental-property-calculator"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition hover:opacity-90 text-white"
            style="background: #059669;">
            Rental Property Calculator →
          </NuxtLink>
        </div>
        <p class="text-xs text-gray-400 mt-3">All calculators are free. No account required for basic use.</p>
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="bg-white border-t border-gray-200 py-8 mt-8">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background: #1e3a5f;">
              <span class="text-white font-extrabold text-sm">RC</span>
            </div>
            <span class="font-extrabold text-sm" style="color: #1e3a5f;">RealCalc</span>
          </div>
          <p class="text-xs text-gray-400 text-center">
            ARV estimates are for screening purposes only — not a substitute for professional appraisal or BPO. Lenders will not accept this output for loan underwriting.
          </p>
          <div class="flex gap-4 text-xs text-gray-400">
            <NuxtLink to="/privacy" class="hover:text-gray-600">Privacy</NuxtLink>
            <NuxtLink to="/terms" class="hover:text-gray-600">Terms</NuxtLink>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, nextTick } from 'vue'

// ─── SEO HEAD ───────────────────────────────────────────────────────────────
useHead({
  title: 'ARV Calculator — Comps & Confidence | RealCalc',
  meta: [
    { name: 'description', content: 'Free ARV calculator for real estate investors. Estimate after-repair value from 3–5 comparable sales with confidence range, outlier detection, and 70% Rule max offer. 2026 methodology.' },
    { property: 'og:title', content: 'ARV Calculator — Comps & Confidence | RealCalc' },
    { property: 'og:description', content: 'Estimate after-repair value from comparable sales. Confidence Range, 70% Rule Max Offer, 75% Rule BRRRR Target. Free screening tool for US real estate investors.' },
    { property: 'og:type', content: 'website' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [{ rel: 'canonical', href: 'https://realcalc.com/arv-calculator' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SoftwareApplication',
          name: 'ARV Calculator',
          applicationCategory: 'FinanceApplication',
          description: 'Free ARV calculator estimating after-repair value from comparable sales with confidence range, outlier detection, and 70% Rule max offer for US real estate investors.',
          url: 'https://realcalc.com/arv-calculator',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          featureList: 'ARV estimation, comparable sales, 3-5 comps, outlier detection, confidence range, 70% Rule, 75% Rule, condition multiplier, PPSF spread penalty, sensitivity analysis, PDF export'
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'What is ARV in real estate?', acceptedAnswer: { '@type': 'Answer', text: 'ARV stands for After Repair Value, the projected market value of a property after renovation is complete. Used by Fix and Flip investors, BRRRR investors, wholesalers, and agents advising investor clients. ARV is an estimate based on comparable recent sales, not a precise calculation.' } },
            { '@type': 'Question', name: 'How do I calculate ARV for a property?', acceptedAnswer: { '@type': 'Answer', text: 'Find 3–5 recent comparable sales of similar properties, compute weighted average $/sqft, apply adjustments for bedroom/bathroom/garage differences, multiply by subject sqft. Example: 5 comps average $155/sqft × 1,800 sqft = $279,000 base ARV.' } },
            { '@type': 'Question', name: 'How many comps do I need for a reliable ARV?', acceptedAnswer: { '@type': 'Answer', text: 'Minimum 3 comps for a usable estimate; aim for 4–5 for HIGH Confidence. Fewer than 3 produces LOW Confidence with wide range. Quality matters more than quantity — prioritize recent, nearby, similar comps.' } },
            { '@type': 'Question', name: 'What is the 70% Rule and how does it use ARV?', acceptedAnswer: { '@type': 'Answer', text: 'The 70% Rule is a Fix and Flip heuristic: Max Offer = ARV × 0.70 − Rehab Budget. It provides a 30% margin for profit, financing costs, and execution risk. For BRRRR deals, the analogous rule is the 75% Rule: All-In Cost ≤ ARV × 0.75.' } },
            { '@type': 'Question', name: 'Is this ARV accepted by lenders for loan underwriting?', acceptedAnswer: { '@type': 'Answer', text: 'No. This calculator is a screening tool, not a substitute for licensed appraisal. Lenders require appraisals from their approved AMC panel and will not accept calculator output for loan underwriting. Budget $400–$700 for professional appraisal.' } }
          ]
        }
      ]
    })
  }]
})

// ─── CONSTANTS ──────────────────────────────────────────────────────────────
const conditionTiers = { 'Poor': 0, 'Needs-Rehab': 1, 'Average': 2, 'Good': 3, 'Excellent': 4 }
const conditionAbsMap = { 'Poor': 0.85, 'Needs-Rehab': 0.93, 'Average': 1.00, 'Good': 1.05, 'Excellent': 1.10 }

// ─── STATE ───────────────────────────────────────────────────────────────────
const calcMode = ref('analyze')
const showAdvanced = ref(false)
const lotSizeEnabled = ref(false)
const showEmailModal = ref(false)
const openFaqs = ref(new Set())
const isNavExpanded = ref(false)
const shareSuccess = ref(false)

const subject = reactive({
  sqft: null, beds: null, baths: null, garage: null,
  yearBuilt: null, lotSqft: null, condition: 'Average'
})
const avgCompCondition = ref('Average')

const compCount = ref(3)
const comps = reactive(Array.from({ length: 5 }, () => ({
  price: null, sqft: null, beds: null, baths: null, garage: null,
  yearBuilt: null, lotSqft: null, saleDate: '', distance: null,
  included: true
})))

const rehabBudget = ref(null)
const targetARV = ref(null)
const targetPurchase = ref(null)

const adjOverrides = reactive({
  perBed: 5000, perFullBath: 10000, perHalfBath: 5000,
  perGarage: 10000, perYear: 500, perLotSqft: 5
})

// ─── MODE COLORS ─────────────────────────────────────────────────────────────
const modeColor = computed(() => {
  if (calcMode.value === 'find-ppsf') return '#2563eb'
  if (calcMode.value === 'deal-screen') return '#059669'
  return '#4f46e5'
})
const modeColorLight = computed(() => {
  if (calcMode.value === 'find-ppsf') return '#eff6ff'
  if (calcMode.value === 'deal-screen') return '#ecfdf5'
  return '#eef2ff'
})

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const activeCompCount = computed(() => comps.slice(0, compCount.value).filter(c => c.included).length)

function getDaysOld(saleDateStr) {
  if (!saleDateStr) return null
  const d = new Date(saleDateStr)
  if (isNaN(d)) return null
  return Math.floor((Date.now() - d.getTime()) / 86400000)
}

function getRecencyWeight(days) {
  if (days === null) return 0.5
  if (days <= 90) return 1.0
  if (days <= 180) return 0.75
  if (days <= 365) return 0.5
  return 0.25
}

function getDistanceWeight(dist) {
  if (!dist || dist <= 0) return 0.5
  if (dist <= 0.5) return 1.0
  if (dist <= 1.0) return 0.75
  if (dist <= 2.0) return 0.5
  return 0.25
}

function getSimilarityWeight(comp, subj) {
  const bedDiff = Math.abs((comp.beds || 0) - (subj.beds || 0))
  const bathDiff = Math.abs((comp.baths || 0) - (subj.baths || 0))
  const totalDiff = bedDiff + bathDiff
  if (totalDiff === 0) return 1.0
  if (totalDiff <= 1) return 0.75
  if (totalDiff <= 2) return 0.5
  return 0.25
}

function computeMedian(arr) {
  const s = [...arr].sort((a, b) => a - b)
  const m = Math.floor(s.length / 2)
  return s.length % 2 === 0 ? (s[m - 1] + s[m]) / 2 : s[m]
}

function computeCV(arr) {
  if (arr.length < 2) return 0
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length
  const variance = arr.reduce((s, x) => s + (x - mean) ** 2, 0) / arr.length
  return (Math.sqrt(variance) / mean) * 100
}

function formatCurrency(v) {
  if (v === null || v === undefined || isNaN(v)) return '—'
  return '$' + Math.round(v).toLocaleString('en-US')
}
function formatCurrencyShort(v) {
  if (v === null || v === undefined || isNaN(v)) return '—'
  const n = Math.round(v)
  if (Math.abs(n) >= 1000000) return '$' + (n / 1000000).toFixed(2) + 'M'
  if (Math.abs(n) >= 1000) return '$' + (n / 1000).toFixed(0) + 'K'
  return '$' + n.toLocaleString('en-US')
}
function formatDollarPerSqft(v) {
  if (v === null || v === undefined || isNaN(v)) return '—'
  return '$' + v.toFixed(0)
}

// ─── MAIN CALC COMPUTED ───────────────────────────────────────────────────────
const calc = computed(() => {
  const empty = { ready: false, validCount: 0, perCompData: [] }
  if (!subject.sqft || subject.sqft <= 0) return empty

  const validComps = []
  for (let i = 0; i < compCount.value; i++) {
    const c = comps[i]
    if (!c.included) continue
    if (!c.price || !c.sqft || !c.saleDate || c.distance === null || c.distance === undefined) continue
    if (Number(c.price) <= 0 || Number(c.sqft) <= 0) continue
    validComps.push({ ...c, origIdx: i })
  }

  const n = validComps.length
  if (n < 3) return { ready: false, validCount: n, perCompData: [] }

  // ── STEP 1: Raw PPSF ──────────────────────────────────────────────────────
  const rawPPSFs = validComps.map(c => Number(c.price) / Number(c.sqft))

  // ── STEP 2+3: Adjustments → Adjusted PPSF per comp ──────────────────────
  const subBeds = Number(subject.beds) || 0
  const subBaths = Number(subject.baths) || 0
  const subGarage = Number(subject.garage) || 0
  const subYear = Number(subject.yearBuilt) || 0
  const subLot = Number(subject.lotSqft) || 0

  // Compute avg comp stats for adjustment base
  const avgCompBeds = validComps.reduce((s, c) => s + (Number(c.beds) || 0), 0) / n
  const avgCompBaths = validComps.reduce((s, c) => s + (Number(c.baths) || 0), 0) / n
  const avgCompGarage = validComps.reduce((s, c) => s + (Number(c.garage) || 0), 0) / n
  const avgCompYear = validComps.reduce((s, c) => s + (Number(c.yearBuilt) || 0), 0) / n
  const avgCompLot = validComps.reduce((s, c) => s + (Number(c.lotSqft) || 0), 0) / n
  const avgCompSqft = validComps.reduce((s, c) => s + Number(c.sqft), 0) / n

  const adjPPSFs = validComps.map((c, idx) => {
    const compSqft = Number(c.sqft)
    const compBeds = Number(c.beds) || 0
    const compBaths = Math.floor(Number(c.baths) || 0)
    const compHalfBaths = ((Number(c.baths) || 0) % 1) >= 0.4 ? 1 : 0
    const compGarage = Number(c.garage) || 0
    const compYear = Number(c.yearBuilt) || 0

    const subFullBaths = Math.floor(subBaths)
    const subHalfBaths = (subBaths % 1) >= 0.4 ? 1 : 0

    const bedDiff = subBeds - compBeds
    const fullBathDiff = subFullBaths - compBaths
    const halfBathDiff = subHalfBaths - compHalfBaths
    const garageDiff = subGarage - compGarage
    const yearDiff = subYear && compYear ? subYear - compYear : 0

    let lotAdj = 0
    if (lotSizeEnabled.value && subLot > 0 && Number(c.lotSqft) > 0) {
      const lotDiff = subLot - Number(c.lotSqft)
      const pct = Math.abs(lotDiff) / Number(c.lotSqft)
      if (pct > 0.20) {
        lotAdj = lotDiff * adjOverrides.perLotSqft
      }
    }

    const totalDollarAdj =
      bedDiff * adjOverrides.perBed +
      fullBathDiff * adjOverrides.perFullBath +
      halfBathDiff * adjOverrides.perHalfBath +
      garageDiff * adjOverrides.perGarage +
      yearDiff * adjOverrides.perYear +
      lotAdj

    const adjPPSF = rawPPSFs[idx] + totalDollarAdj / compSqft
    return Math.max(1, adjPPSF)
  })

  // ── STEP 4: Outlier detection ─────────────────────────────────────────────
  const median = computeMedian(adjPPSFs)
  const outlierFlags = adjPPSFs.map(p => {
    const dev = Math.abs(p - median) / median
    if (dev > 0.40) return 'extreme'
    if (dev > 0.25) return 'outlier'
    return 'normal'
  })

  // ── STEP 5: CV ────────────────────────────────────────────────────────────
  const cv = computeCV(adjPPSFs)
  const cvPenaltyApplied = cv > 15

  // ── STEP 6: Weights ───────────────────────────────────────────────────────
  let rawWeights = validComps.map((c, idx) => {
    const days = getDaysOld(c.saleDate)
    const rec = getRecencyWeight(days)
    const dist = getDistanceWeight(Number(c.distance))
    const sim = getSimilarityWeight(c, subject)
    let w = rec * dist * sim

    // Outlier penalty
    if (outlierFlags[idx] === 'extreme') w *= 0.25
    else if (outlierFlags[idx] === 'outlier') w *= 0.5

    // CV penalty
    if (cv > 30) w *= 0.90
    else if (cv > 15) w *= 0.95

    return Math.max(0, w)
  })

  // ── STEP 7: MAX CAP 40% with PARTIAL REDISTRIBUTE ────────────────────────
  let confidencePenaltyPts = 0
  const sumW0 = rawWeights.reduce((a, b) => a + b, 0)
  if (sumW0 <= 0) return { ready: false, validCount: n, perCompData: [] }

  let normWeights = rawWeights.map(w => w / sumW0)

  for (let iter = 0; iter < 20; iter++) {
    const maxVal = Math.max(...normWeights)
    if (maxVal <= 0.40) break
    const maxIdx = normWeights.indexOf(maxVal)
    const excess = maxVal - 0.40
    normWeights[maxIdx] = 0.40
    const redistribute = excess * 0.50
    const discard = excess * 0.50
    confidencePenaltyPts = Math.min(15, confidencePenaltyPts + discard * 50)
    const sumOthers = normWeights.reduce((s, w, i) => i !== maxIdx ? s + w : s, 0)
    if (sumOthers > 0) {
      normWeights = normWeights.map((w, i) => {
        if (i === maxIdx) return 0.40
        return w + (w / sumOthers) * redistribute
      })
    }
  }

  // ── STEP 8: Non-negative clamp and renormalize ───────────────────────────
  normWeights = normWeights.map(w => Math.max(0, w))
  const sumNorm = normWeights.reduce((a, b) => a + b, 0)
  if (sumNorm <= 0) return { ready: false, validCount: n, perCompData: [] }
  normWeights = normWeights.map(w => w / sumNorm)

  // ── STEP 9: Weighted Avg PPSF ─────────────────────────────────────────────
  const weightedPPSF = adjPPSFs.reduce((s, p, i) => s + p * normWeights[i], 0)

  // ── STEP 10: Raw ARV ──────────────────────────────────────────────────────
  const subSqft = Number(subject.sqft)
  const rawARV = weightedPPSF * subSqft

  // ── STEP 11+12: Condition Multiplier ─────────────────────────────────────
  const subjCondMult = conditionAbsMap[subject.condition] ?? 1.00
  const avgCondMult = conditionAbsMap[avgCompCondition.value] ?? 1.00
  const condMult = subjCondMult / avgCondMult

  // Adjustments from comp averages
  const subFullBaths = Math.floor(subBaths)
  const subHalfBaths = (subBaths % 1) >= 0.4 ? 1 : 0
  const avgCompFullBaths = Math.floor(avgCompBaths)
  const avgCompHalfBaths = (avgCompBaths % 1) >= 0.4 ? 1 : 0

  const bedAdj = (subBeds - avgCompBeds) * adjOverrides.perBed
  const bathAdj = (subFullBaths - avgCompFullBaths) * adjOverrides.perFullBath +
                  (subHalfBaths - avgCompHalfBaths) * adjOverrides.perHalfBath
  const garageAdj = (subGarage - avgCompGarage) * adjOverrides.perGarage
  const yearAdj = (subYear && avgCompYear) ? (subYear - avgCompYear) * adjOverrides.perYear : 0
  let lotAdj = 0
  if (lotSizeEnabled.value && subLot > 0 && avgCompLot > 0) {
    const pct = Math.abs(subLot - avgCompLot) / avgCompLot
    if (pct > 0.20) lotAdj = (subLot - avgCompLot) * adjOverrides.perLotSqft
  }

  const condAdjARV = rawARV * condMult
  const preRoundARV = condAdjARV + bedAdj + bathAdj + garageAdj + yearAdj + lotAdj

  // ── STEP 13: Round to nearest $1000 ──────────────────────────────────────
  const finalARV = Math.round(preRoundARV / 1000) * 1000

  // ── STEP 14: Confidence Score ─────────────────────────────────────────────
  // Factor 1: Comp Count
  let compCountPts = n >= 5 ? 25 : n === 4 ? 20 : 15

  // Factor 2: Recency
  const daysArr = validComps.map(c => getDaysOld(c.saleDate) || 999)
  const maxDays = Math.max(...daysArr)
  let recencyPts = 0
  if (maxDays <= 90) recencyPts = 25
  else if (maxDays <= 120) recencyPts = 20
  else if (maxDays <= 180) recencyPts = 10
  else recencyPts = 5

  // Factor 3: Distance
  const distArr = validComps.map(c => Number(c.distance) || 99)
  const maxDist = Math.max(...distArr)
  let distancePts = 0
  if (maxDist <= 0.5) distancePts = 20
  else if (maxDist <= 1.0) distancePts = 15
  else if (maxDist <= 2.0) distancePts = 10
  else distancePts = 5

  // Factor 4: Similarity
  const bedsDiffArr = validComps.map(c => Math.abs((Number(c.beds) || 0) - subBeds))
  const bathsDiffArr = validComps.map(c => Math.abs((Number(c.baths) || 0) - subBaths))
  const avgBedDiff = bedsDiffArr.reduce((a, b) => a + b, 0) / n
  const avgBathDiff = bathsDiffArr.reduce((a, b) => a + b, 0) / n
  let similarityPts = 0
  if (avgBedDiff <= 0.5 && avgBathDiff <= 0.5) similarityPts = 20
  else if (avgBedDiff <= 1 && avgBathDiff <= 1) similarityPts = 15
  else similarityPts = 5

  // Factor 5: PPSF Spread CV
  let spreadPts = 0
  if (cv < 15) spreadPts = 10
  else if (cv <= 30) spreadPts = 5
  else spreadPts = 0

  let confScore = compCountPts + recencyPts + distancePts + similarityPts + spreadPts
  if (cv > 30) confScore -= 5
  confScore -= Math.round(confidencePenaltyPts)
  confScore = Math.max(0, Math.min(100, confScore))

  // Sqft mismatch check
  const sqftMismatchPct = Math.round(Math.abs(subSqft - avgCompSqft) / avgCompSqft * 100)
  const sqftMismatchWarning = sqftMismatchPct > 30

  // Confidence Range
  let rangePct = 0.12
  if (confScore >= 95) rangePct = 0.025
  else if (confScore >= 85) rangePct = 0.035
  else if (confScore >= 75) rangePct = 0.050
  else if (confScore >= 65) rangePct = 0.065
  else if (confScore >= 55) rangePct = 0.080
  else if (confScore >= 40) rangePct = 0.100

  if (cv > 30) rangePct += 0.01
  else if (cv > 15) rangePct += 0.005

  const confDev = Math.round(finalARV * rangePct)
  const confLow = finalARV - confDev
  const confHigh = finalARV + confDev

  const confTier = confScore >= 80 ? 'HIGH' : confScore >= 60 ? 'MEDIUM' : 'LOW'

  // ── STEP 15: Derived metrics ──────────────────────────────────────────────
  const rule70MaxOffer = rehabBudget.value ? finalARV * 0.70 - Number(rehabBudget.value) : null
  const rule75Target = finalARV * 0.75
  const subjectImpliedPPSF = finalARV / subSqft

  // Per-comp data for table
  const perCompData = validComps.map((c, idx) => ({
    origIdx: c.origIdx,
    salePrice: Number(c.price),
    sqft: Number(c.sqft),
    rawPPSF: rawPPSFs[idx],
    adjPPSF: adjPPSFs[idx],
    normWeight: normWeights[idx],
    isOutlier: outlierFlags[idx] === 'outlier',
    isExtremeOutlier: outlierFlags[idx] === 'extreme',
    daysOld: getDaysOld(c.saleDate)
  }))

  // Confidence factor breakdown
  const confFactors = [
    { label: 'Comp Count', score: compCountPts, max: 25 },
    { label: 'Recency', score: recencyPts, max: 25 },
    { label: 'Distance', score: distancePts, max: 20 },
    { label: 'Similarity', score: similarityPts, max: 20 },
    { label: 'PPSF Spread', score: spreadPts, max: 10 }
  ]

  return {
    ready: true, validCount: n,
    rawARV, condMult, bedAdj, bathAdj, garageAdj, yearAdj, lotAdj,
    finalARV, weightedPPSF, subjectImpliedPPSF,
    confScore, confTier, confDev, confLow, confHigh, rangePct,
    rule70MaxOffer, rule75Target,
    perCompData, confFactors,
    cv, cvPenaltyApplied, sqftMismatchWarning, sqftMismatchPct
  }
})

// ─── CONFIDENCE TIER HELPERS ─────────────────────────────────────────────────
const confTierGradient = computed(() => {
  if (!calc.value.ready) return { from: '#6366f1', to: '#4f46e5' }
  if (calc.value.confTier === 'HIGH') return { from: '#059669', to: '#047857' }
  if (calc.value.confTier === 'MEDIUM') return { from: '#f59e0b', to: '#d97706' }
  return { from: '#dc2626', to: '#b91c1c' }
})

// ─── REVERSE MODE: FIND REQUIRED PPSF ────────────────────────────────────────
const requiredPPSF = computed(() => {
  if (!targetARV.value || !subject.sqft || subject.sqft <= 0) return { achievable: false }
  const target = Number(targetARV.value)
  const sqft = Number(subject.sqft)
  const condMult = (conditionAbsMap[subject.condition] ?? 1.00) / (conditionAbsMap[avgCompCondition.value] ?? 1.00)
  const requiredRawARV = target / condMult
  const ppsf = requiredRawARV / sqft
  if (ppsf < 50 || ppsf > 600) return { achievable: false }
  return { achievable: true, value: ppsf, rawPPSF: ppsf }
})

// ─── DEAL SCREEN ──────────────────────────────────────────────────────────────
const dealScreenResult = computed(() => {
  if (!calc.value.ready) return { passes70: false, passes75: false, allIn: 0 }
  const arv = calc.value.finalARV
  const rehab = Number(rehabBudget.value) || 0
  const purchase = Number(targetPurchase.value) || 0
  const allIn = purchase + rehab
  const maxOffer70 = arv * 0.70 - rehab
  const allInTarget75 = arv * 0.75
  return {
    passes70: purchase > 0 ? purchase <= maxOffer70 : false,
    passes75: allIn > 0 ? allIn <= allInTarget75 : false,
    allIn
  }
})

// ─── SENSITIVITY TABLES ───────────────────────────────────────────────────────
const sensitivityPPSF = computed(() => {
  if (!calc.value.ready) return []
  const base = calc.value.weightedPPSF
  return [
    Math.round(base * 0.85),
    Math.round(base * 0.93),
    Math.round(base),
    Math.round(base * 1.07),
    Math.round(base * 1.15)
  ]
})

const sensitivitySqft = computed(() => {
  if (!subject.sqft) return []
  const base = Number(subject.sqft)
  return [
    Math.round(base * 0.85 / 50) * 50,
    Math.round(base * 0.93 / 50) * 50,
    base,
    Math.round(base * 1.07 / 50) * 50,
    Math.round(base * 1.15 / 50) * 50
  ]
})

const conditionSensitivity = computed(() => {
  if (!calc.value.ready) return []
  const conditions = ['Poor', 'Needs-Rehab', 'Average', 'Good', 'Excellent']
  return conditions.map(cond => {
    const m = (conditionAbsMap[cond] ?? 1.00) / (conditionAbsMap[avgCompCondition.value] ?? 1.00)
    return {
      label: cond,
      arv: Math.round(calc.value.rawARV * m / 1000) * 1000
    }
  })
})

const compCountSensitivity = [
  { count: 3, maxScore: 75 },
  { count: 4, maxScore: 85 },
  { count: 5, maxScore: 100 }
]

// ─── SCENARIOS ────────────────────────────────────────────────────────────────
const scenarios = computed(() => {
  if (!calc.value.ready) return []
  return [
    { label: 'Conservative', arv: Math.round(calc.value.finalARV * 0.95 / 1000) * 1000, note: 'ARV × 95%' },
    { label: 'Base', arv: calc.value.finalARV, note: 'Your inputs' },
    { label: 'Optimistic', arv: Math.round(calc.value.finalARV * 1.05 / 1000) * 1000, note: '+5% — rare 2026' }
  ]
})

// ─── INSIGHT TEXT ─────────────────────────────────────────────────────────────
const insightText = computed(() => {
  if (!calc.value.ready) return ''
  const { finalARV, confTier, confScore, validCount, confLow, confHigh } = calc.value
  const avgDays = Math.round(calc.value.perCompData.reduce((s, c) => s + (c.daysOld || 90), 0) / validCount)
  if (confTier === 'HIGH') {
    return `ARV estimate of ${formatCurrency(finalARV)} at HIGH confidence based on ${validCount} comps averaging ${avgDays} days old. This estimate is reliable for screening and initial offer development. Proceed with deal analysis using this ARV, but verify with BPO before formal offer or lender submission.`
  }
  if (confTier === 'MEDIUM') {
    return `ARV estimate of ${formatCurrency(finalARV)} at MEDIUM confidence (score ${confScore}/100) based on ${validCount} comps. Consider adding 1–2 more comps or ordering a BPO ($75–$150). Use the Confidence Range ${formatCurrency(confLow)} – ${formatCurrency(confHigh)} when considering offers — not just the point estimate.`
  }
  return `ARV estimate of ${formatCurrency(finalARV)} at LOW confidence (score ${confScore}/100). Insufficient reliable data for offer construction. Find more comps (target 4–5 recent, similar, nearby), exclude outliers, or order a professional appraisal ($400–$700). Do not use this ARV for offer construction.`
})

// ─── CURRENT SCENARIO RESULT ─────────────────────────────────────────────────
const triggerScenarioSave = ref(false)

const currentScenarioResult = computed(() => {
  const ready = calc.value.ready
  const tier = ready ? calc.value.confTier : null
  const badgeLabel = tier === 'HIGH' ? 'Good' : tier === 'MEDIUM' ? 'Average' : ready ? 'Poor' : undefined
  const badgeColor = tier === 'HIGH' ? '#10b981' : tier === 'MEDIUM' ? '#f59e0b' : ready ? '#ef4444' : '#6b7280'
  return {
    primaryMetric: 'ARV',
    primaryValue:  ready ? formatCurrency(calc.value.finalARV) : '—',
    badgeLabel,
    badgeColor,
    arv:           ready ? calc.value.finalARV : undefined,
    rehabCost:     rehabBudget.value ? Number(rehabBudget.value) : undefined,
  }
})

// ─── URL PARAMS ───────────────────────────────────────────────────────────────
function buildShareParams() {
  const p = new URLSearchParams()
  if (subject.sqft) p.set('ss', subject.sqft)
  if (subject.beds) p.set('sb', subject.beds)
  if (subject.baths) p.set('sba', subject.baths)
  if (subject.garage) p.set('sg', subject.garage)
  if (subject.yearBuilt) p.set('sy', subject.yearBuilt)
  if (subject.lotSqft) p.set('sl', subject.lotSqft)
  if (subject.condition) p.set('sc', subject.condition)
  for (let i = 0; i < compCount.value; i++) {
    const c = comps[i]
    const n = i + 1
    if (c.price) p.set(`c${n}p`, c.price)
    if (c.saleDate) p.set(`c${n}d`, c.saleDate)
    if (c.sqft) p.set(`c${n}s`, c.sqft)
    if (c.beds) p.set(`c${n}b`, c.beds)
    if (c.baths) p.set(`c${n}ba`, c.baths)
    if (c.garage) p.set(`c${n}g`, c.garage)
    if (c.yearBuilt) p.set(`c${n}y`, c.yearBuilt)
    if (c.distance) p.set(`c${n}dist`, c.distance)
  }
  if (rehabBudget.value) p.set('rb', rehabBudget.value)
  if (targetARV.value) p.set('ta', targetARV.value)
  p.set('mode', calcMode.value)
  return p
}

function loadFromParams() {
  if (typeof window === 'undefined') return
  const p = new URLSearchParams(window.location.search)
  if (p.get('ss')) subject.sqft = Number(p.get('ss'))
  if (p.get('sb')) subject.beds = Number(p.get('sb'))
  if (p.get('sba')) subject.baths = Number(p.get('sba'))
  if (p.get('sg')) subject.garage = Number(p.get('sg'))
  if (p.get('sy')) subject.yearBuilt = Number(p.get('sy'))
  if (p.get('sl')) subject.lotSqft = Number(p.get('sl'))
  if (p.get('sc')) subject.condition = p.get('sc')
  for (let i = 1; i <= 5; i++) {
    if (p.get(`c${i}p`)) { comps[i-1].price = Number(p.get(`c${i}p`)); if (i > compCount.value) compCount.value = i }
    if (p.get(`c${i}d`)) comps[i-1].saleDate = p.get(`c${i}d`)
    if (p.get(`c${i}s`)) comps[i-1].sqft = Number(p.get(`c${i}s`))
    if (p.get(`c${i}b`)) comps[i-1].beds = Number(p.get(`c${i}b`))
    if (p.get(`c${i}ba`)) comps[i-1].baths = Number(p.get(`c${i}ba`))
    if (p.get(`c${i}g`)) comps[i-1].garage = Number(p.get(`c${i}g`))
    if (p.get(`c${i}y`)) comps[i-1].yearBuilt = Number(p.get(`c${i}y`))
    if (p.get(`c${i}dist`)) comps[i-1].distance = Number(p.get(`c${i}dist`))
  }
  if (p.get('rb')) rehabBudget.value = Number(p.get('rb'))
  if (p.get('ta')) targetARV.value = Number(p.get('ta'))
  if (p.get('mode')) calcMode.value = p.get('mode')
}

onMounted(loadFromParams)

// ─── ACTIONS ─────────────────────────────────────────────────────────────────
function addComp() { if (compCount.value < 5) compCount.value++ }
function removeLastComp() { if (compCount.value > 3) compCount.value-- }
function resetAdjOverrides() {
  adjOverrides.perBed = 5000
  adjOverrides.perFullBath = 10000
  adjOverrides.perHalfBath = 5000
  adjOverrides.perGarage = 10000
  adjOverrides.perYear = 500
  adjOverrides.perLotSqft = 5
}
function resetSubjectAndComps() {
  Object.assign(subject, { sqft: null, beds: null, baths: null, garage: null, yearBuilt: null, lotSqft: null, condition: 'Average' })
  avgCompCondition.value = 'Average'
  comps.forEach(c => Object.assign(c, { price: null, sqft: null, beds: null, baths: null, garage: null, yearBuilt: null, lotSqft: null, saleDate: '', distance: null, included: true }))
  compCount.value = 3
  rehabBudget.value = null
  targetARV.value = null
  targetPurchase.value = null
}
function toggleFaq(idx) {
  const s = new Set(openFaqs.value)
  if (s.has(idx)) s.delete(idx)
  else s.add(idx)
  openFaqs.value = s
}
function shareResult() {
  if (typeof window === 'undefined') return
  const url = window.location.origin + window.location.pathname + '?' + buildShareParams().toString()
  navigator.clipboard?.writeText(url)
  shareSuccess.value = true
  setTimeout(() => { shareSuccess.value = false }, 2000)
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
function onEmailCaptured() { showEmailModal.value = false }

async function exportPDF() {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF()
  const c = calc.value
  let heroValue, heroLabel, heroSub

  if (calcMode.value === 'find-ppsf') {
    heroValue = requiredPPSF.value?.achievable ? `${formatDollarPerSqft(requiredPPSF.value.value)}/sqft` : 'Not Achievable'
    heroLabel = 'REQUIRED WEIGHTED AVG $/SQFT'
    heroSub = `Target ARV: ${formatCurrency(targetARV.value)}`
  } else if (calcMode.value === 'deal-screen') {
    heroValue = dealScreenResult.value.passes70 ? 'PASS' : 'FAIL'
    heroLabel = '70% RULE DEAL SCREEN'
    heroSub = `ARV: ${c.ready ? formatCurrency(c.finalARV) : '—'} | ${c.ready ? c.confTier : ''} Confidence`
  } else {
    heroValue = c.ready ? formatCurrency(c.finalARV) : '—'
    heroLabel = 'ESTIMATED ARV (AFTER REPAIR VALUE)'
    heroSub = c.ready ? `${c.confTier} Confidence · Range: ${formatCurrency(c.confLow)} – ${formatCurrency(c.confHigh)} (±${formatCurrency(c.confDev)})` : ''
  }

  doc.setFillColor(30, 58, 95)
  doc.rect(0, 0, 210, 50, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(10)
  doc.text('RealCalc — ARV Calculator', 14, 12)
  doc.setFontSize(8)
  doc.text(heroLabel, 14, 22)
  doc.setFontSize(24)
  doc.text(heroValue, 14, 36)
  if (heroSub) { doc.setFontSize(9); doc.text(heroSub, 14, 46) }

  doc.setTextColor(30, 58, 95)
  doc.setFontSize(10)
  let y = 60

  if (c.ready) {
    doc.text(`Confidence Score: ${c.confScore}/100`, 14, y); y += 7
    doc.text(`Weighted Avg $/sqft: ${formatDollarPerSqft(c.weightedPPSF)}`, 14, y); y += 7
    doc.text(`Condition Multiplier: ${c.condMult.toFixed(3)}`, 14, y); y += 7
    doc.text(`Raw ARV: ${formatCurrency(c.rawARV)}`, 14, y); y += 7
    if (c.rule70MaxOffer) { doc.text(`70% Rule Max Offer: ${formatCurrency(c.rule70MaxOffer)}`, 14, y); y += 7 }
    doc.text(`75% Rule All-In Target: ${formatCurrency(c.rule75Target)}`, 14, y); y += 7
    y += 5
    doc.setFontSize(8)
    doc.text('This ARV estimate is for screening purposes only — not a substitute for licensed appraisal.', 14, y)
    doc.text('Lenders will not accept this output for loan underwriting.', 14, y + 5)
  }

  doc.save('arv-estimate.pdf')
}

// ─── STATIC CONTENT ───────────────────────────────────────────────────────────
const emailSubject = computed(() => {
  if (!calc.value.ready) return 'ARV Estimate from RealCalc'
  return `ARV Estimate: ${formatCurrency(calc.value.finalARV)} (${calc.value.confTier} Confidence)`
})

const stateCards = [
  {
    state: 'California (CA)',
    range: '$280–$500/sqft mid-market; $500–$1,000+ coastal',
    markets: 'Los Angeles, San Diego, Sacramento, Fresno',
    note: 'Factor 1: Land values are 40–60% of total value in coastal metros vs 15–25% elsewhere — making $/sqft a less reliable standalone metric; lot size premium is significant. Factor 2: permit-heavy renovations add $20–$40/sqft premium to quality rehabs, but also create 3–6 month timing delays that increase holding costs. ARV comps in California require extra care: verify permit history, confirm condition accurately, and prioritize comps within the same micro-neighborhood. Hard money lending in CA is active — $400–$700 appraisal costs are standard.'
  },
  {
    state: 'Texas (TX)',
    range: '$150–$280/sqft mid-market SFR',
    markets: 'Dallas, Houston, San Antonio, Austin',
    note: 'Factor 1: Dallas and Austin metros have 2–3% annual population growth supporting ARV stability and sustained investor demand. Factor 2: abundant new construction creates pricing competition — existing-home ARVs must stay competitive with new-build pricing per sqft in same zip code. Texas has no state income tax, making it attractive for flip profit; however, property tax rates (2–2.5%) are among the highest nationally, which affects holding cost calculations. ARV methodology works reliably in Texas due to active MLS with accessible sold data.'
  },
  {
    state: 'Florida (FL)',
    range: '$180–$320/sqft mid-market SFR',
    markets: 'Tampa, Orlando, Jacksonville, Miami',
    note: 'Factor 1: Population inflow from Northeast and Midwest supports strong buyer demand and relatively stable ARV. Factor 2: hurricane insurance has tripled in many coastal markets since 2020, now factored directly into buyer offers — homes in flood zones or pre-2000 construction without wind mitigation see $20–$40/sqft ARV discount vs non-flood comparable. Miami is a separate premium market with international buyer influence ($300–$600/sqft in many areas).'
  },
  {
    state: 'New York (NY)',
    range: '$200–$600/sqft mid-market SFR (extreme regional variance)',
    markets: 'NYC outer boroughs, Buffalo, Rochester, Albany, Hudson Valley',
    note: 'Factor 1: NY has the widest intra-state ARV variance in the US — NYC metro $/sqft is 3–4x upstate levels. Brooklyn SFR $500–$800 vs Buffalo $80–$140 per sqft. Comps must be hyper-local in NYC metro. Factor 2: permit fees and compliance costs are 3–5% of project value in NYC metro, adding significant ARV premium to fully-permitted renovations vs unpermitted work.'
  },
  {
    state: 'Arizona (AZ)',
    range: '$200–$320/sqft mid-market SFR',
    markets: 'Phoenix, Tucson, Tempe, Scottsdale',
    note: 'Factor 1: Phoenix metro experienced significant ARV correction in 2022–2023 (8–15% from peak), followed by stabilization in 2024–2025 and moderate recovery. Use comps from 2025–2026 only — pre-correction comps will significantly overstate current ARV. Factor 2: Emerging wildfire risk and extreme heat insurance premiums are starting to factor into buyer purchasing decisions. Scottsdale luxury market operates at $400–$800+/sqft — treat as separate comp pool.'
  },
  {
    state: 'Georgia (GA)',
    range: '$180–$280/sqft mid-market SFR',
    markets: 'Atlanta, Savannah, Athens, Columbus',
    note: 'Factor 1: Atlanta metro has reliable 3–4% annual ARV growth, steady buyer demand from in-migration, and a large investor-active market with frequent MLS comp data. Atlanta is one of the top 5 US markets for Fix and Flip volume nationally — reliable comp data availability is excellent. Factor 2: Non-union construction labor and available contractor capacity keep rehab costs 10–15% below coastal markets.'
  },
  {
    state: 'Ohio (OH)',
    range: '$80–$150/sqft mid-market SFR (one of lowest nationally)',
    markets: 'Columbus, Cincinnati, Cleveland, Akron',
    note: 'Factor 1: Entry $/sqft of $85–$120 in many Cleveland and Akron submarkets enables smaller investors to enter with lower capital requirements — $150K–$250K total project costs common. Columbus is the growth engine of Ohio ($120–$180/sqft) with 2–3% annual ARV appreciation. Factor 2: ARV growth has been flat-to-negative in several Rust Belt submarkets — requiring careful comp selection from the same active submarket, not the larger metro.'
  },
  {
    state: 'Pennsylvania (PA)',
    range: '$120–$320/sqft mid-market SFR (wide metro variance)',
    markets: 'Philadelphia, Pittsburgh, Allentown, Harrisburg',
    note: 'Factor 1: Philadelphia metro $200–$320/sqft vs Pittsburgh $120–$180/sqft — nearly 2x difference within the same state. Always select comps within the relevant metro, not statewide. Factor 2: PA housing stock is predominantly pre-1960 — renovated older properties with period-appropriate finishes command 5–15% ARV premium in Philadelphia neighborhoods like Fishtown, East Kensington, and Manayunk.'
  }
]

const applications = [
  {
    title: 'Deal Screening Before Offer',
    body: 'Quickly screen 5–10 potential deals per week before committing analysis time. Enter 3–5 comps for each deal candidate, review the 70% Rule Max Offer and Confidence Tier, then decide which deals warrant detailed analysis. Deals passing the 70% Rule with HIGH Confidence become your shortlist.'
  },
  {
    title: 'Offer Price Construction via 70% Rule',
    body: 'Calculated ARV plus entered Rehab Budget immediately produces 70% Rule Max Offer: (ARV × 0.70) − Rehab Budget. This is the maximum you can pay for the property while maintaining a 30% buffer for profit, financing costs, and execution risk. Deals at or below this ceiling have built-in flip viability.'
  },
  {
    title: 'BRRRR Capital Recovery Planning',
    body: 'BRRRR investors check the 75% Rule All-In Target: ARV × 0.75. This is the maximum total project cost (purchase + rehab + holding + financing) to achieve full capital recovery at a standard 75% LTV refinance. Keep your all-in costs at or below this target. For precise BRRRR modeling, pair with the BRRRR Calculator.'
  },
  {
    title: 'Wholesale Assignment Justification',
    body: 'Wholesalers use HIGH Confidence ARV backed by 4–5 recent comps to justify assignment fees to end-buyer investors. Present the Comp Comparison Table, Estimated ARV, and 70% Rule Max Offer — then show that your contract price + assignment fee still falls at or below the 70% Rule ceiling.'
  },
  {
    title: 'Comp Quality Audit',
    body: 'Before relying on any ARV estimate, audit your comp quality in the Comp Comparison Table. Watch for: outlier flags (>25% PPSF deviation from median), stale dates (>180 days), significant sqft mismatch with subject (>30%), and low distance quality (>1 mile). The Confidence Score shows exactly which factor is limiting reliability.'
  },
  {
    title: 'Investor Memo Prep',
    body: 'For syndicated or partnered flip/BRRRR deals, export ARV + Confidence Range + 70%/75% Rule analysis as PDF directly from the calculator. Include in partner pitches, private lender packages, or HML pre-approval requests as supporting deal data. Always include the Confidence Tier disclosure.'
  }
]

const limitations = [
  {
    title: 'Not a Substitute for Professional Appraisal',
    body: 'This calculator is a SCREENING TOOL, not a substitute for licensed appraisal or Broker Price Opinion (BPO). Lenders will NOT accept this ARV for loan underwriting. For final purchase or lending decisions, always verify with a licensed appraiser ($400–$700) or order a BPO ($75–$150) from a local agent.'
  },
  {
    title: 'Quality Depends on User-Selected Comps',
    body: 'The ARV estimate is only as good as the comparable sales you enter. Common data quality issues: incorrect sqft (listing sqft vs finished sqft), non-arms-length sales (foreclosures, estate sales, intra-family transfers), unusual property conditions not reflected in price, or stale comps overstating values in declining markets. Always cross-check comps against MLS, county assessor records, or a local agent contact.'
  },
  {
    title: 'Industry Rules-of-Thumb Adjustments',
    body: 'Adjustment rates ($5K per bedroom, $10K per full bath, etc.) are industry rules of thumb derived from general appraiser practice — they are NOT market-derived statistics calibrated to your specific submarket. In high-cost coastal markets, bedroom adjustments can range $15K–$30K. In lower-cost Midwest markets, these same adjustments may be 30–50% of the default values. Advanced mode allows overriding all adjustment rates.'
  },
  {
    title: 'Point-in-Time Market Estimate',
    body: 'ARV reflects current market conditions at the time you enter your comps — it does NOT model future appreciation, market downturns, or macroeconomic shifts. ARV estimates using comps from today will be stale in 3–6 months. For deals with extended renovation timelines or markets with elevated volatility, re-estimate ARV with fresh comps before making final offer or closing decisions.'
  }
]

const commonMistakes = [
  {
    title: 'Using stale comps (over 6 months old)',
    body: '2026 markets shift faster than pre-2020 eras. A 9-month-old comp from a 2025 hot market may overstate current ARV by 5–8% after the market cooled. The calculator applies recency weighting (comps over 180 days receive 0.5× weight) but very old comps should be viewed skeptically regardless of their weight. Always prefer comps under 90 days.'
  },
  {
    title: 'Over-optimistic Subject Condition setting',
    body: 'Investors commonly set Subject Condition to "Excellent" assuming their rehab will produce a premium result. In reality, most rehabs produce "Good" condition (fully renovated, move-in ready), not "Excellent" (recently renovated with premium finishes throughout). Setting Excellent applies a ×1.10 multiplier — overstating ARV by approximately 5% compared to a realistic "Good" setting. Default to "Good" unless you have a detailed scope of work that genuinely justifies Excellent.'
  },
  {
    title: 'Ignoring outlier warnings',
    body: 'The calculator flags comps with PPSF >25% from median as potential outliers. Investors sometimes dismiss these warnings because the flagged comp happens to support a higher ARV — this is confirmation bias, not analysis. Before ignoring an outlier flag: check the sqft in county assessor records, confirm the sale was arms-length, and verify the sale condition was comparable.'
  },
  {
    title: 'Treating ARV as a single number',
    body: 'The ARV estimate shows a single dollar figure, but the Confidence Range is the more honest signal. Professional investors systematically make offers based on the lower bound of the Confidence Range, not the point estimate, to build in a margin of safety against lender appraisal variance (which typically comes in 3–5% conservative vs investor ARV estimates).'
  },
  {
    title: 'Using ARV Calculator for lender ARV',
    body: 'This calculator is a SCREENING tool — it cannot substitute for a licensed appraisal for any purpose that requires professional liability and lender acceptance. Lenders (banks, hard money lenders, private lenders) require appraisals from their approved Appraisal Management Company (AMC) panel. Always budget $400–$700 for a licensed appraisal in your acquisition costs for any deal requiring financing.'
  }
]

const faqs = [
  {
    q: 'What is ARV in real estate?',
    a: 'ARV stands for After Repair Value — the projected market value of a property after renovation is complete, expressed in current market dollars. It is used by Fix and Flip investors (to determine maximum offer via the 70% Rule), BRRRR investors (to project refinance proceeds at 75% LTV), wholesalers (to justify assignment fees to end buyers), and agents advising investor clients. ARV is an ESTIMATE derived from comparable recent sales of similar renovated properties — not a precise calculation. Unlike cap rate or mortgage payment (which produce mathematically exact outputs), ARV has inherent uncertainty because no two properties are identical and market values are determined by buyer behavior, not formulas. A $10,000 ARV overestimate can eliminate your entire profit margin on a thin-margin flip — which is why this calculator always shows a Confidence Range alongside the single-point estimate.'
  },
  {
    q: 'How do I calculate ARV for a property?',
    a: 'The standard comparable sales methodology: (1) Find 3–5 recently-sold properties similar to your subject in size, bedrooms, bathrooms, and location. (2) Compute the price per square foot ($/sqft) for each comp. (3) Apply adjustments for differences in beds, baths, garage, year built, and condition using industry-standard rates. (4) Weight each comp by recency, distance, and similarity. (5) Multiply the Weighted Average $/sqft by your subject\'s square footage. (6) Apply a condition multiplier if your subject\'s post-rehab condition differs from the comp baseline. Example: 5 recent comps average $155/sqft. Subject is 1,800 sqft. Base ARV = $155 × 1,800 = $279,000. Subject is Good condition vs Average comp baseline → × 1.05 → Adjusted ARV = $293,000 → Round to $293,000.'
  },
  {
    q: 'How many comps do I need for a reliable ARV?',
    a: 'Minimum 3 comps for a usable estimate (MEDIUM Confidence); 4–5 comps for HIGH Confidence. Professional appraisers use 3–6 comps as standard practice; most residential lenders require a minimum of 3 comps for appraisal. With 3 comps, the Confidence Score is limited to 15 points from the comp-count factor (max 25), which typically produces a MEDIUM tier and a wider Confidence Range (±6.5–8%). Adding a 4th comp that corroborates the weighted average is the single most impactful improvement to your ARV reliability. Quality matters more than quantity — 4 recent, nearby, similar comps outperform 5 stale, distant, dissimilar comps.'
  },
  {
    q: 'What is the 70% Rule and how does it use ARV?',
    a: 'The 70% Rule is the most widely used Fix and Flip screening heuristic: Maximum Offer = ARV × 0.70 − Rehab Budget. The 30% buffer is designed to cover: closing costs (3–5%), holding costs (2–4%), financing costs (hard money points + interest, typically 5–8% of purchase), profit margin (10–15%), and execution risk contingency. This calculator shows 70% Rule Max Offer automatically when you enter a Rehab Budget. Important: the 70% Rule is a starting screen, not an absolute rule — some deals work above 70% (very light rehab, very hot market, short timeline) and some don\'t work below it (slow market, heavy rehab, inexperienced operator). For BRRRR deals, the analogous rule is the 75% Rule: All-In Cost ≤ ARV × 0.75 for full capital recovery at 75% LTV refinance.'
  },
  {
    q: 'How recent should comps be for accurate ARV?',
    a: 'Under 90 days is ideal and receives full weight (1.0×) in the calculator. 90–180 days is acceptable with moderate weight reduction (0.75×). Over 180 days carries significant risk in 2026 markets and receives reduced weight (0.5×). Post-pandemic markets have shown higher volatility than pre-2020 baselines — in cooling markets (Austin, Phoenix 2022–2023) a 9-month-old comp from the peak could overstate current ARV by 8–12%. In appreciating markets, old comps understate ARV. The safest practice: use only comps under 90 days, and treat any comp over 180 days as supplementary context, not primary data.'
  },
  {
    q: 'Is this ARV accepted by lenders for loan underwriting?',
    a: 'No — this calculator is a screening tool and is NOT accepted by any lender for loan underwriting purposes. This applies to banks, hard money lenders (HML), private lenders, bridge lenders, and DSCR lenders. All regulated and most private lenders require appraisals from their approved Appraisal Management Company (AMC) panel, or a licensed appraiser of their selection. For hard money lending specifically: most HMLs require both an as-is appraisal and an as-completed (ARV) appraisal before funding. Budget $400–$700 per appraisal in your acquisition costs for any deal requiring financing. This calculator helps you screen deals faster before you commit to appraisal costs — use it to identify deals worth paying for a professional appraisal, not as a substitute for one.'
  },
  {
    q: 'What is the Confidence Range and how should I use it?',
    a: 'The Confidence Range is the honest expression of uncertainty in your ARV estimate, displayed as Lower Bound – Upper Bound (±deviation). Example: $275,000 – $295,000 (±$10,000). The range width is determined by the Confidence Score (0–100): HIGH Confidence (Score 85–94) → ±3.5%; MEDIUM Confidence (Score 65–74) → ±6.5%; LOW Confidence (Score <40) → ±12%. How to use it: professional investors make offers based on the lower bound of the Confidence Range (not the point estimate), treating the lower bound as their "conservative ARV" for underwriting purposes. This builds in a margin of safety against lender appraisal variance, which typically comes in 3–5% below investor ARV estimates on average.'
  },
  {
    q: 'Can I use this ARV for Fix and Flip or BRRRR deal analysis?',
    a: 'Yes — this is exactly the intended primary use case. For Fix and Flip: enter your comps and Rehab Budget to see Estimated ARV + Confidence Range + 70% Rule Max Offer. Use the 70% Rule Max Offer as your initial offer ceiling and pair with the Fix and Flip Calculator for complete deal analysis including holding costs, financing structure, timeline, and net profit. For BRRRR: the calculator shows the 75% Rule All-In Target (ARV × 0.75) — this is the maximum total project cost (purchase + rehab + holding + financing costs) for full capital recovery at a standard 75% LTV cash-out refinance. Pair with the BRRRR Calculator for full Phase 1 + refi + Phase 3 rental cash flow modeling. Important for both strategies: use HIGH Confidence ARV (4–5 recent comps) for actual offer construction. MEDIUM or LOW Confidence ARV should be used for initial screening only, not final offer decisions.'
  }
]
</script>
