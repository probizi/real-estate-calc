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
            <li class="text-gray-700 font-semibold">Depreciation Calculator</li>
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
            Real Estate Depreciation Calculator
          </h1>
          <p class="text-gray-500 mt-2 text-base">Estimate annual depreciation, tax shield, and recapture exposure for your rental property — instantly.</p>
        </div>
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#saved-scenarios" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Saved Scenarios</a></li>
            <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            <li><a href="#what-is-depreciation" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is Depreciation</a></li>
            <li><a href="#land-vs-building" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Land vs Building</a></li>
            <li><a href="#tax-shield" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Tax Shield</a></li>
            <li><a href="#recapture" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Recapture</a></li>
            <li><a href="#special-cases" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Special Cases</a></li>
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
              <li><a href="#what-is-depreciation" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is Depreciation</a></li>
              <li><a href="#land-vs-building" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Land vs Building</a></li>
              <li><a href="#tax-shield" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Tax Shield</a></li>
              <li><a href="#recapture" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Recapture</a></li>
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
          <span v-if="calcMode === 'calculate'">Annual Depreciation</span>
          <span v-else-if="calcMode === 'find-basis'">Required Basis</span>
          <span v-else>Recovery Period</span>
        </div>
        <div class="flex items-center gap-3">
          <template v-if="calcMode === 'calculate'">
            <span v-if="hasResult" class="text-xl font-extrabold leading-none" :style="`color: ${verdict?.color || '#1e3a5f'}`">
              {{ formatCurrency(annualDepreciation) }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="hasResult && verdict" class="text-xs font-bold px-2.5 py-1 rounded-full" :class="verdict.bgClass">{{ verdict.label }}</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <template v-else-if="calcMode === 'find-basis'">
            <span v-if="revBasis !== null" class="text-xl font-extrabold leading-none text-blue-700">{{ formatCurrency(revBasis) }}</span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="revBasis !== null" class="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">Target</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <template v-else>
            <span v-if="revPeriod !== null" class="text-xl font-extrabold leading-none text-emerald-700">{{ revPeriod.toFixed(1) }} yrs</span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="revPeriod !== null" class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">Required</span>
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
          <div class="grid grid-cols-3 gap-2">
            <button @click="calcMode = 'calculate'"
              class="text-left px-3 py-2.5 rounded-xl border-2 transition-all"
              :class="calcMode === 'calculate' ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 hover:border-gray-300'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'calculate' ? 'color:#1e3a5f;' : 'color:#6b7280;'">Calculate Depreciation</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'calculate' ? 'text-amber-700' : 'text-gray-400'">Basis → Annual Deduction</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'calculate' ? 'bg-amber-100 text-amber-800' : 'bg-gray-200 text-gray-400'">Standard</span>
            </button>
            <button @click="calcMode = 'find-basis'"
              class="text-left px-3 py-2.5 rounded-xl border-2 transition-all"
              :class="calcMode === 'find-basis' ? 'border-blue-400 bg-blue-50' : 'border-gray-200 hover:border-gray-300'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-basis' ? 'color:#1e3a5f;' : 'color:#6b7280;'">Find Required Basis</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-basis' ? 'text-blue-700' : 'text-gray-400'">Target Deduction → Basis</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-basis' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
            <button @click="calcMode = 'find-period'"
              class="text-left px-3 py-2.5 rounded-xl border-2 transition-all"
              :class="calcMode === 'find-period' ? 'border-emerald-400 bg-emerald-50' : 'border-gray-200 hover:border-gray-300'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-period' ? 'color:#1e3a5f;' : 'color:#6b7280;'">Find Recovery Period</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-period' ? 'text-emerald-700' : 'text-gray-400'">Basis + Target → Period</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-period' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
          </div>
          <div class="mt-2.5">
            <p v-if="calcMode === 'calculate'" class="text-xs text-gray-500 leading-relaxed">
              Enter property purchase price, land allocation, and property type to calculate annual depreciation and potential tax savings.
            </p>
            <p v-else-if="calcMode === 'find-basis'" class="text-xs text-blue-700 leading-relaxed bg-blue-50 px-3 py-1.5 rounded-lg">
              Enter your <strong>target annual depreciation</strong> and recovery period — the calculator will show the required depreciable basis.
            </p>
            <p v-else class="text-xs text-emerald-700 leading-relaxed bg-emerald-50 px-3 py-1.5 rounded-lg">
              Enter your <strong>depreciable basis</strong> and target annual depreciation — the calculator will find the required recovery period.
            </p>
          </div>
        </div>
      </div>

      <!-- TWO-COLUMN BODY -->
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch">

        <!-- ── INPUTS (left column) ── -->
        <div class="border-b lg:border-b-0 lg:border-r border-gray-200 bg-white min-w-0">

          <!-- ─────────── MODE: CALCULATE ─────────── -->
          <template v-if="calcMode === 'calculate'">

            <!-- SECTION: Property Cost -->
            <div class="border-b border-gray-100">
              <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
                <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Property Cost Basis</h2>
              </div>
              <div class="px-4 py-3 space-y-3">

                <!-- Purchase Price -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">
                    Property Purchase Price <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model="form.purchasePrice" type="number" min="0" step="1000"
                      placeholder="Enter property purchase price"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                </div>

                <!-- Land Value -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Land Value</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model="form.landValue" type="number" min="0" step="1000"
                      placeholder="Optional: estimated land value"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                  <p class="text-xs text-gray-400 mt-1">If entered, land value takes priority over land percentage. Land is never depreciable.</p>
                </div>

                <!-- Land Percentage -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Land Percentage</label>
                  <div class="relative">
                    <input v-model="form.landPct" type="number" min="0" max="99" step="1"
                      placeholder="Optional: land value percentage"
                      class="w-full pl-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                  <p class="text-xs text-amber-600 mt-1 flex items-start gap-1">
                    <svg class="w-3 h-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                    Land percentage is applied to purchase price only. Major improvements and added costs may change actual land allocation.
                  </p>
                </div>

                <!-- Closing Costs -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Closing Costs Added to Basis</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model="form.closingCosts" type="number" min="0" step="100"
                      placeholder="Optional: closing costs added to basis"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Examples: title fees, recording fees, legal fees, transfer-related costs that can be added to basis.</p>
                </div>

                <!-- Capital Improvements -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Capital Improvements</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model="form.improvements" type="number" min="0" step="1000"
                      placeholder="Optional: capital improvements"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                  <p v-if="hasImprovements" class="text-xs text-amber-600 mt-1 flex items-start gap-1">
                    <svg class="w-3 h-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                    Improvements are treated as part of total basis using the same recovery period. Actual IRS rules may require separate schedules.
                  </p>
                </div>

                <!-- Live Total Cost Basis -->
                <div v-if="totalCostBasis > 0" class="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-xs font-medium text-blue-800">
                  Total Cost Basis: <span class="font-bold">{{ formatCurrency(totalCostBasis) }}</span>
                  <span class="text-blue-500 ml-1">(purchase + costs + improvements)</span>
                </div>

              </div>
            </div>

            <!-- SECTION: Property Type & Recovery Period -->
            <div class="border-b border-gray-100">
              <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
                <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Property Type &amp; Recovery Period</h2>
              </div>
              <div class="px-4 py-3 space-y-3">

                <!-- Property Type -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Property Type</label>
                  <select v-model="form.propertyType"
                    class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm bg-white">
                    <option value="residential">Residential Rental</option>
                    <option value="commercial">Commercial Property</option>
                    <option value="str">Short-term Rental</option>
                    <option value="mixed">Mixed-use Property</option>
                  </select>
                  <!-- STR Warning -->
                  <div v-if="form.propertyType === 'str'" class="mt-2 p-2.5 rounded-xl bg-orange-50 border border-orange-200">
                    <p class="text-xs text-orange-800 font-medium flex items-start gap-1.5">
                      <svg class="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                      If average rental period is less than 7 days, property may be classified as commercial (39-year recovery). Confirm with a tax professional.
                    </p>
                  </div>
                  <!-- Mixed-use Warning -->
                  <div v-if="form.propertyType === 'mixed'" class="mt-2 p-2.5 rounded-xl bg-purple-50 border border-purple-200">
                    <p class="text-xs text-purple-800 font-medium flex items-start gap-1.5">
                      <svg class="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                      Mixed-use property may require allocation between rental, business, and personal portions. Custom recovery period required.
                    </p>
                  </div>
                </div>

                <!-- Depreciation Period -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Depreciation Period</label>
                  <select v-model="form.depreciationPeriod"
                    class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm bg-white"
                    :class="mixedUseError ? 'border-red-400' : ''">
                    <option value="27.5">27.5 years (Residential)</option>
                    <option value="39">39 years (Commercial)</option>
                    <option value="custom">Custom</option>
                  </select>
                  <div v-if="mixedUseError" class="mt-2 p-2.5 rounded-xl bg-red-50 border border-red-200">
                    <p class="text-xs text-red-700 font-medium">Mixed-use property requires custom recovery period.</p>
                  </div>
                </div>

                <!-- Custom Recovery Period -->
                <div v-if="form.depreciationPeriod === 'custom'">
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Custom Recovery Period <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <input v-model="form.customPeriod" type="number" min="1" step="0.5"
                      placeholder="Enter custom recovery period in years"
                      class="w-full pl-4 pr-14 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">years</span>
                  </div>
                </div>

              </div>
            </div>

            <!-- SECTION: Depreciation Status -->
            <div class="border-b border-gray-100">
              <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
                <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Depreciation History</h2>
              </div>
              <div class="px-4 py-3 space-y-3">

                <!-- Years Already Depreciated -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Years Already Depreciated</label>
                  <div class="relative">
                    <input v-model="form.yearsDepreciated" type="number" min="0" step="1"
                      placeholder="Optional: years already depreciated"
                      class="w-full pl-4 pr-14 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">years</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Used to calculate accumulated depreciation and remaining schedule.</p>
                </div>

              </div>
            </div>

            <!-- SECTION: Tax Estimate -->
            <div class="border-b border-gray-100">
              <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
                <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Tax Estimate (Optional)</h2>
              </div>
              <div class="px-4 py-3 space-y-3">

                <!-- Marginal Tax Rate -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Marginal Tax Rate</label>
                  <div class="relative">
                    <input v-model="form.taxRate" type="number" min="0" max="60" step="0.5"
                      placeholder="Optional: marginal tax rate"
                      class="w-full pl-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Enter marginal tax rate to estimate tax shield. Actual benefit depends on your tax situation.</p>
                </div>

              </div>
            </div>


          </template>

          <!-- ─────────── MODE: FIND BASIS ─────────── -->
          <template v-else-if="calcMode === 'find-basis'">
            <div class="border-b border-gray-100">
              <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
                <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Target Depreciation</h2>
              </div>
              <div class="px-4 py-3 space-y-3">

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Target Annual Depreciation <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model="revForm.targetDeduction" type="number" min="0" step="100"
                      placeholder="Enter target annual depreciation amount"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                  <p class="text-xs text-gray-400 mt-1">The annual depreciation deduction you want to achieve.</p>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Recovery Period <span class="text-red-500">*</span></label>
                  <select v-model="revForm.period"
                    class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/40 outline-none transition text-gray-900 font-semibold text-sm bg-white">
                    <option value="27.5">27.5 years (Residential)</option>
                    <option value="39">39 years (Commercial)</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>

                <div v-if="revForm.period === 'custom'">
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Custom Period <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <input v-model="revForm.customPeriod" type="number" min="1" step="0.5"
                      placeholder="Enter custom recovery period in years"
                      class="w-full pl-4 pr-14 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">years</span>
                  </div>
                </div>

                <div class="p-3 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-700 leading-relaxed">
                  The required depreciable basis is: <strong>Annual Depreciation × Recovery Period</strong>. Land must be added separately to get the required purchase price.
                </div>

              </div>
            </div>
          </template>

          <!-- ─────────── MODE: FIND PERIOD ─────────── -->
          <template v-else>
            <div class="border-b border-gray-100">
              <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
                <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Depreciable Basis &amp; Target</h2>
              </div>
              <div class="px-4 py-3 space-y-3">

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Depreciable Basis <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model="revForm2.basis" type="number" min="0" step="1000"
                      placeholder="Enter depreciable basis (total cost minus land)"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Total cost basis minus land value (land is not depreciable).</p>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Target Annual Depreciation <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model="revForm2.targetDeduction" type="number" min="0" step="100"
                      placeholder="Enter target annual depreciation amount"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                </div>

                <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-700 leading-relaxed">
                  Required Recovery Period = Depreciable Basis ÷ Target Annual Depreciation. IRS allows 27.5 years (residential) or 39 years (commercial).
                </div>

              </div>
            </div>
          </template>

        </div>

        <!-- ── RESULTS (right column) ── -->
        <div class="bg-gray-50 min-w-0">
          <div class="sticky top-[4.5rem] lg:top-[5rem] p-5 space-y-4">

            <!-- ═ RESULTS: CALCULATE MODE ═ -->
            <template v-if="calcMode === 'calculate'">

              <!-- Error: Land >= Basis -->
              <div v-if="landExceedsError" class="rounded-2xl bg-red-50 border border-red-200 p-4">
                <div class="flex items-center gap-2 mb-1">
                  <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>
                  <span class="text-sm font-bold text-red-700">Invalid Input</span>
                </div>
                <p class="text-xs text-red-600">Land value cannot equal or exceed total cost basis. Please adjust land value or purchase price.</p>
              </div>

              <!-- Error: Mixed-use needs custom period -->
              <div v-else-if="mixedUseError" class="rounded-2xl bg-orange-50 border border-orange-200 p-4">
                <div class="flex items-center gap-2 mb-1">
                  <svg class="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                  <span class="text-sm font-bold text-orange-700">Action Required</span>
                </div>
                <p class="text-xs text-orange-600">Mixed-use property requires custom recovery period. Please select "Custom" and enter the period in years.</p>
              </div>

              <!-- No result yet -->
              <div v-else-if="!hasResult" class="rounded-2xl bg-white border border-gray-200 p-5 text-center">
                <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                  <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <p class="text-sm text-gray-500 font-medium">Enter property purchase price to see results</p>
                <p class="text-xs text-gray-400 mt-1">Land value and property type optional</p>
              </div>

              <!-- Results -->
              <template v-else>
                <!-- Primary Result Card -->
                <div class="rounded-2xl border-2 p-5" :style="`border-color: ${verdict?.color}22; background: ${verdict?.color}08;`">
                  <div class="flex items-start justify-between mb-3">
                    <div>
                      <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Annual Depreciation</p>
                      <p class="text-3xl font-extrabold leading-none" :style="`color: ${verdict?.color}`">{{ formatCurrency(annualDepreciation) }}</p>
                      <p class="text-sm text-gray-500 mt-1">{{ formatCurrency(monthlyDepreciation) }} / month</p>
                    </div>
                    <span class="text-xs font-bold px-3 py-1.5 rounded-full" :class="verdict?.bgClass">{{ verdict?.label }}</span>
                  </div>
                  <p class="text-xs text-gray-600 italic leading-relaxed border-t pt-2 mt-2" :style="`border-color: ${verdict?.color}33`">{{ verdict?.insight }}</p>
                </div>

                <!-- Key Breakdown -->
                <div class="rounded-2xl bg-white border border-gray-200 p-4 space-y-2.5">
                  <p class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Basis Breakdown</p>

                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-600">Total Cost Basis</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(totalCostBasis) }}</span>
                  </div>
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-600">Land Value Used</span>
                    <span class="font-semibold text-red-600">− {{ formatCurrency(landValueUsed) }}</span>
                  </div>
                  <div class="flex justify-between items-center text-sm border-t border-gray-100 pt-2">
                    <span class="text-gray-800 font-semibold">Depreciable Basis</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(depreciableBasis) }}</span>
                  </div>

                  <div class="flex justify-between items-center text-sm mt-1">
                    <span class="text-gray-600">Recovery Period</span>
                    <span class="font-semibold text-gray-900">{{ recoveryPeriod }} years</span>
                  </div>
                </div>

                <!-- Depreciation Schedule -->
                <div class="rounded-2xl bg-white border border-gray-200 p-4 space-y-2.5">
                  <p class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Depreciation Schedule</p>

                  <div v-if="yearsDeprNum > 0" class="flex justify-between items-center text-sm">
                    <span class="text-gray-600">Accumulated Depreciation</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(accumulatedDepreciation) }}</span>
                  </div>
                  <div v-if="yearsDeprNum > 0" class="flex justify-between items-center text-sm">
                    <span class="text-gray-600">Remaining Depreciable Basis</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(remainingBasis) }}</span>
                  </div>
                  <div class="flex justify-between items-center text-sm" :class="yearsDeprNum > 0 ? 'border-t border-gray-100 pt-2' : ''">
                    <span class="text-gray-600">Remaining Years</span>
                    <span class="font-bold" :class="remainingYears === 0 ? 'text-red-600' : 'text-gray-900'">{{ remainingYears.toFixed(1) }} years</span>
                  </div>

                  <!-- Status Badge -->
                  <div class="mt-1 flex items-center gap-2">
                    <span class="text-xs font-bold px-2.5 py-1 rounded-full" :class="statusBadge.bgClass">{{ statusBadge.label }}</span>
                    <span class="text-xs text-gray-500">{{ statusBadge.description }}</span>
                  </div>
                </div>

                <!-- Tax Shield (only if rate entered) -->
                <div v-if="hasTaxRate" class="rounded-2xl bg-green-50 border border-green-200 p-4 space-y-2">
                  <p class="text-xs font-bold uppercase tracking-wider text-green-700 mb-1">Estimated Tax Shield</p>
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-700">Annual Tax Shield</span>
                    <span class="text-xl font-extrabold text-green-700">{{ formatCurrency(annualTaxShield) }}</span>
                  </div>
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-600">Monthly Tax Shield</span>
                    <span class="font-semibold text-green-600">{{ formatCurrency(monthlyTaxShield) }}</span>
                  </div>
                  <p class="text-xs text-green-700 mt-1 italic">Tax shield is an estimate based on marginal tax rate. Actual benefit depends on taxable income, passive activity rules, and tax situation.</p>
                </div>
                <div v-else class="rounded-2xl bg-gray-50 border border-gray-200 p-3 text-center">
                  <p class="text-xs text-gray-400">Enter marginal tax rate to estimate tax shield.</p>
                </div>

                <!-- Recapture Exposure -->
                <div v-if="yearsDeprNum > 0 && accumulatedDepreciation > 0" class="rounded-2xl bg-amber-50 border border-amber-200 p-4">
                  <p class="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">Recapture Exposure</p>
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-700">Estimated Recapture</span>
                    <span class="text-lg font-extrabold text-amber-700">{{ formatCurrency(accumulatedDepreciation) }}</span>
                  </div>
                  <p class="text-xs text-amber-700 mt-2 italic">Depreciation may be subject to recapture when the property is sold.</p>
                  <NuxtLink to="/capital-gains-tax-calculator" class="text-xs font-semibold text-amber-700 underline hover:text-amber-900 transition mt-1 inline-block">
                    → Use Capital Gains Tax Calculator to estimate sale impact
                  </NuxtLink>
                </div>

                <!-- Disclaimers -->
                <div class="rounded-2xl bg-gray-50 border border-gray-200 p-3 space-y-1.5">
                  <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Important Notes</p>
                  <p class="text-xs text-gray-500 flex items-start gap-1.5">
                    <span class="text-gray-400 mt-0.5">•</span>
                    This is a simplified straight-line estimate. Land is never depreciable.
                  </p>
                  <p class="text-xs text-gray-500 flex items-start gap-1.5">
                    <span class="text-gray-400 mt-0.5">•</span>
                    First-year depreciation is simplified as a full year. Actual IRS conventions (mid-month) may differ.
                  </p>
                  <p class="text-xs text-gray-500 flex items-start gap-1.5">
                    <span class="text-gray-400 mt-0.5">•</span>
                    This calculator is educational and not tax advice. Consult a tax professional.
                  </p>
                </div>

              </template>
            </template>

            <!-- ═ RESULTS: FIND BASIS MODE ═ -->
            <template v-else-if="calcMode === 'find-basis'">
              <div v-if="revBasis === null" class="rounded-2xl bg-white border border-gray-200 p-5 text-center">
                <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-3">
                  <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <p class="text-sm text-gray-500 font-medium">Enter target annual depreciation and recovery period</p>
              </div>
              <div v-else class="space-y-4">
                <div class="rounded-2xl border-2 border-blue-200 bg-blue-50 p-5">
                  <p class="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Required Depreciable Basis</p>
                  <p class="text-3xl font-extrabold text-blue-800">{{ formatCurrency(revBasis) }}</p>
                  <p class="text-xs text-blue-600 mt-2">= {{ formatCurrency(Number(revForm.targetDeduction)) }} × {{ revPeriodUsed }} years</p>
                </div>
                <div class="rounded-2xl bg-white border border-gray-200 p-4 space-y-2">
                  <p class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">What This Means</p>
                  <p class="text-xs text-gray-600">This is the building value that must be depreciable (excluding land). To estimate the required purchase price, add your expected land value.</p>
                  <div class="flex justify-between items-center text-sm border-t border-gray-100 pt-2">
                    <span class="text-gray-600">Recovery Period Used</span>
                    <span class="font-bold text-gray-900">{{ revPeriodUsed }} years</span>
                  </div>
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-600">Annual Depreciation</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(Number(revForm.targetDeduction)) }}</span>
                  </div>
                </div>
                <div class="rounded-2xl bg-gray-50 border border-gray-200 p-3 text-xs text-gray-500">
                  Land is not depreciable. The required depreciable basis applies only to building value. Add expected land value to estimate total purchase price needed.
                </div>
              </div>
            </template>

            <!-- ═ RESULTS: FIND PERIOD MODE ═ -->
            <template v-else>
              <div v-if="revPeriod === null" class="rounded-2xl bg-white border border-gray-200 p-5 text-center">
                <div class="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-3">
                  <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <p class="text-sm text-gray-500 font-medium">Enter depreciable basis and target annual depreciation</p>
              </div>
              <div v-else class="space-y-4">
                <div class="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5">
                  <p class="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">Required Recovery Period</p>
                  <p class="text-3xl font-extrabold text-emerald-800">{{ revPeriod.toFixed(1) }} years</p>
                  <p class="text-xs text-emerald-600 mt-2">= {{ formatCurrency(Number(revForm2.basis)) }} ÷ {{ formatCurrency(Number(revForm2.targetDeduction)) }}</p>
                </div>
                <div class="rounded-2xl bg-white border border-gray-200 p-4 space-y-2">
                  <p class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">IRS Reference Periods</p>
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-600">Residential Rental</span>
                    <span class="font-bold" :class="revPeriod <= 27.5 ? 'text-green-600' : 'text-gray-400'">27.5 years</span>
                  </div>
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-600">Commercial Property</span>
                    <span class="font-bold" :class="revPeriod <= 39 && revPeriod > 27.5 ? 'text-green-600' : 'text-gray-400'">39 years</span>
                  </div>
                  <p class="text-xs text-gray-500 mt-1 border-t border-gray-100 pt-2">Your required period of {{ revPeriod.toFixed(1) }} years {{ revPeriod <= 27.5 ? 'is within residential (27.5yr) standard' : revPeriod <= 39 ? 'falls between residential and commercial standards' : 'exceeds standard commercial period (39yr)' }}.</p>
                </div>
                <div class="rounded-2xl bg-gray-50 border border-gray-200 p-3 text-xs text-gray-500">
                  This is a simplified straight-line estimate. Actual depreciation period is determined by IRS rules based on property classification.
                </div>
              </div>
            </template>

            <!-- Share + PDF Export + Save Scenario -->
            <div v-if="hasResult || revBasis !== null || revPeriod !== null" class="p-4 border-t border-gray-100 space-y-2">
              <!-- 1. PRIMARY: Save -->
              <button @click="openSaveScenario"
                class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
                style="background: #f59e0b; color: #1e3a5f;">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>
                Save Scenario
              </button>
              <!-- 2. SECONDARY: Share + PDF в одну строку -->
              <div class="grid grid-cols-2 gap-2">
                <button @click="shareUrl"
                  class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border"
                  :class="shareMsg
                    ? 'border-green-400 text-green-700 bg-green-50'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'">
                  <svg v-if="!shareMsg" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                  </svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  {{ shareMsg || 'Share' }}
                </button>
                <button @click="exportPdf"
                  class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  Export PDF
                </button>
              </div>
            </div>

          </div>
        </div>

      </div><!-- end two-column -->
      </div>
      </div>

    </main>

    <!-- ═══════════════════════════════════════════════
         SCENARIO PANEL
    ═══════════════════════════════════════════════ -->
    <div class="max-w-[1100px] mx-auto px-4 pb-6 mt-4">
      <ScenarioPanel
        calculator="depreciation"
        :has-result="hasResult"
        :result="currentScenarioResult"
        :trigger-save="triggerScenarioSave"
        @saved="onScenarioSaved"
      />
    </div>

    <!-- ═══════════════════════════════════════════════
         SEO CONTENT
    ═══════════════════════════════════════════════ -->
    <div class="max-w-[1100px] mx-auto px-4 pb-16 space-y-10">

      <!-- Urgency Block -->
      <div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
        <p class="text-lg font-bold text-amber-900">Tax season is coming.</p>
        <p class="text-amber-800 mt-1">Before you file — check if you're maximizing your depreciation deductions.</p>
        <a href="#calculator" class="inline-flex items-center gap-2 mt-3 text-sm font-bold px-5 py-2.5 rounded-lg transition hover:opacity-90" style="background: #f59e0b; color: #1e3a5f;">
          Calculate Now →
        </a>
      </div>

      <!-- Quick Answer / Featured Snippet -->
      <div id="overview" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">How much can depreciation reduce your taxes?</h2>
        <p class="text-gray-700 mb-4">On a typical rental property, depreciation can reduce taxable income by <strong>$10,000–$15,000 per year</strong>. That can mean <strong>$3,000–$5,000+ in annual tax savings</strong>.</p>
        <p class="text-gray-600 mb-3">Your exact number depends on:</p>
        <ul class="space-y-1 mb-4">
          <li class="flex items-center gap-2 text-sm text-gray-600"><span class="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Property purchase price</li>
          <li class="flex items-center gap-2 text-sm text-gray-600"><span class="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Land allocation</li>
          <li class="flex items-center gap-2 text-sm text-gray-600"><span class="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Capital improvements</li>
          <li class="flex items-center gap-2 text-sm text-gray-600"><span class="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></span>Recovery period (27.5 or 39 years)</li>
        </ul>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="rounded-xl bg-gray-50 border border-gray-200 p-4">
            <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Important Context</p>
            <ul class="space-y-1.5">
              <li class="text-xs text-gray-600 flex items-start gap-1.5"><span class="text-gray-400 mt-0.5">•</span>Land is NOT depreciable</li>
              <li class="text-xs text-gray-600 flex items-start gap-1.5"><span class="text-gray-400 mt-0.5">•</span>Depreciation is a non-cash deduction</li>
              <li class="text-xs text-gray-600 flex items-start gap-1.5"><span class="text-gray-400 mt-0.5">•</span>It reduces taxable income, not cash in your bank account</li>
              <li class="text-xs text-gray-600 flex items-start gap-1.5"><span class="text-gray-400 mt-0.5">•</span>It may be partially taxed later (recapture)</li>
            </ul>
          </div>
          <div class="rounded-xl bg-gray-50 border border-gray-200 p-4">
            <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">This Calculator Does</p>
            <ul class="space-y-1.5">
              <li class="text-xs text-gray-600 flex items-start gap-1.5"><span class="text-green-500 mt-0.5">✓</span>Separates land vs. building value</li>
              <li class="text-xs text-gray-600 flex items-start gap-1.5"><span class="text-green-500 mt-0.5">✓</span>Calculates annual and monthly depreciation</li>
              <li class="text-xs text-gray-600 flex items-start gap-1.5"><span class="text-green-500 mt-0.5">✓</span>Tracks accumulated depreciation</li>
              <li class="text-xs text-gray-600 flex items-start gap-1.5"><span class="text-green-500 mt-0.5">✓</span>Shows potential tax shield</li>
              <li class="text-xs text-gray-600 flex items-start gap-1.5"><span class="text-green-500 mt-0.5">✓</span>Highlights recapture exposure</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- What Is Depreciation -->
      <div id="what-is-depreciation" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What Depreciation Really Means</h2>
        <p class="text-gray-700 mb-4">Here's the cheat code: the IRS lets you deduct building "wear and tear" — <strong>without spending any actual cash.</strong></p>
        <div class="grid sm:grid-cols-3 gap-4 mb-5">
          <div class="text-center rounded-xl bg-gray-50 p-4">
            <div class="text-2xl font-extrabold text-gray-800 mb-1">↑</div>
            <p class="text-sm font-semibold text-gray-700">Property value may go up</p>
          </div>
          <div class="text-center rounded-xl bg-gray-50 p-4">
            <div class="text-2xl font-extrabold text-gray-800 mb-1">→</div>
            <p class="text-sm font-semibold text-gray-700">Bank account stays the same</p>
          </div>
          <div class="text-center rounded-xl bg-green-50 border border-green-200 p-4">
            <div class="text-2xl font-extrabold text-green-700 mb-1">↓</div>
            <p class="text-sm font-semibold text-green-700">Taxable income goes down</p>
          </div>
        </div>
        <p class="text-gray-600">That's why depreciation is one of the most powerful tools in real estate investing. It reduces the taxes you owe today — without impacting your cash flow.</p>
        <div class="mt-4 rounded-xl bg-blue-50 border border-blue-100 p-4">
          <p class="text-sm font-bold text-blue-800 mb-2">Formula</p>
          <p class="text-sm text-blue-700 font-mono">Depreciable Basis = Total Cost Basis − Land Value</p>
          <p class="text-sm text-blue-700 font-mono mt-1">Annual Depreciation = Depreciable Basis ÷ Recovery Period</p>
        </div>
      </div>

      <!-- Land vs Building -->
      <div id="land-vs-building" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Land vs. Building: The Critical Split</h2>
        <p class="text-gray-700 mb-4"><strong>Only the building is depreciated.</strong> Land is never depreciable under IRS rules.</p>
        <div class="grid sm:grid-cols-2 gap-4 mb-4">
          <div class="rounded-xl bg-red-50 border border-red-200 p-4">
            <p class="text-sm font-bold text-red-700 mb-2">Land (Not Depreciable)</p>
            <ul class="space-y-1">
              <li class="text-xs text-red-600 flex items-start gap-1.5"><span>•</span>The dirt and ground itself</li>
              <li class="text-xs text-red-600 flex items-start gap-1.5"><span>•</span>Does not wear out over time</li>
              <li class="text-xs text-red-600 flex items-start gap-1.5"><span>•</span>Must be excluded from depreciable basis</li>
            </ul>
          </div>
          <div class="rounded-xl bg-green-50 border border-green-200 p-4">
            <p class="text-sm font-bold text-green-700 mb-2">Building (Depreciable)</p>
            <ul class="space-y-1">
              <li class="text-xs text-green-600 flex items-start gap-1.5"><span>•</span>Structure, roof, systems</li>
              <li class="text-xs text-green-600 flex items-start gap-1.5"><span>•</span>Depreciates over useful life</li>
              <li class="text-xs text-green-600 flex items-start gap-1.5"><span>•</span>27.5 years (residential) or 39 years (commercial)</li>
            </ul>
          </div>
        </div>
        <div class="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p class="text-xs font-bold text-amber-800 mb-1">Disclaimer</p>
          <p class="text-xs text-amber-700">Land percentage in this calculator is applied to purchase price only. Major improvements may change actual allocation. Incorrect land allocation can distort results — when in doubt, use county assessment records or an appraisal.</p>
        </div>
      </div>

      <!-- Tax Shield -->
      <div id="tax-shield" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">The Tax Shield: Real Money</h2>
        <p class="text-gray-700 mb-4">Depreciation creates real tax savings — not just accounting entries.</p>
        <div class="rounded-xl bg-green-50 border border-green-200 p-4 mb-4">
          <p class="text-sm font-bold text-green-800 mb-2">Example</p>
          <div class="space-y-1 text-sm text-green-700">
            <p>Annual depreciation: <strong>$12,000</strong></p>
            <p>Marginal tax rate: <strong>25%</strong></p>
            <p class="font-bold border-t border-green-200 pt-1 mt-1">→ ~$3,000 less in taxes each year</p>
          </div>
        </div>
        <p class="text-gray-600 text-sm mb-3">Over a full 27.5-year depreciation schedule, that's <strong>$82,500 in cumulative tax savings</strong> (at 25% rate on a $300,000 depreciable basis).</p>
        <p class="text-xs text-gray-500 italic">Tax shield depends on taxable income, passive activity rules, and your overall tax situation. It does not guarantee tax savings. This calculator is educational, not tax advice.</p>
      </div>

      <!-- Recapture -->
      <div id="recapture" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Depreciation Recapture: Not a Penalty</h2>
        <p class="text-gray-700 mb-4">Yes — some depreciation may be taxed when you sell. But think of it as <strong>tax deferral + cash flow optimization</strong>, not a penalty.</p>
        <div class="grid sm:grid-cols-3 gap-4 mb-4">
          <div class="rounded-xl bg-blue-50 border border-blue-100 p-3 text-center">
            <p class="text-xs font-bold text-blue-700 mb-1">Benefit</p>
            <p class="text-xs text-blue-600">You defer taxes for years — often decades</p>
          </div>
          <div class="rounded-xl bg-blue-50 border border-blue-100 p-3 text-center">
            <p class="text-xs font-bold text-blue-700 mb-1">Cash Flow</p>
            <p class="text-xs text-blue-600">You keep more cash in your pocket today</p>
          </div>
          <div class="rounded-xl bg-blue-50 border border-blue-100 p-3 text-center">
            <p class="text-xs font-bold text-blue-700 mb-1">Strategy</p>
            <p class="text-xs text-blue-600">Use a 1031 exchange to defer recapture</p>
          </div>
        </div>
        <div class="flex gap-3">
          <NuxtLink to="/capital-gains-tax-calculator" class="text-sm font-bold transition hover:underline" style="color: #f59e0b;">→ Capital Gains Tax Calculator</NuxtLink>
          <NuxtLink to="/1031-exchange-calculator" class="text-sm font-bold transition hover:underline" style="color: #f59e0b;">→ 1031 Exchange Calculator</NuxtLink>
        </div>
      </div>

      <!-- Special Cases -->
      <div id="special-cases" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Special Cases to Know</h2>
        <div class="space-y-4">
          <div class="rounded-xl border border-purple-200 bg-purple-50 p-4">
            <p class="text-sm font-bold text-purple-800 mb-1">Mixed-use Property</p>
            <p class="text-sm text-purple-700">May require allocation between rental, business, and personal portions. A custom recovery period is required — do not use standard residential or commercial periods without professional guidance.</p>
          </div>
          <div class="rounded-xl border border-orange-200 bg-orange-50 p-4">
            <p class="text-sm font-bold text-orange-800 mb-1">Short-term Rental (STR)</p>
            <p class="text-sm text-orange-700">If the average rental period is less than 7 days, the property may be treated as commercial property (39-year recovery period), not residential (27.5 years). Confirm with a tax professional before filing.</p>
          </div>
          <div class="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p class="text-sm font-bold text-amber-800 mb-1">Capital Improvements</p>
            <p class="text-sm text-amber-700">Real IRS rules may require separate depreciation schedules for major improvements. This calculator treats improvements as part of total basis using the same recovery period — a simplification. Consult your tax advisor for accuracy.</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p class="text-sm font-bold text-gray-700 mb-1">First-Year Depreciation</p>
            <p class="text-sm text-gray-600">First-year depreciation is simplified as a full year in this calculator. Actual IRS mid-month convention means you may only claim a partial year in the first year of ownership.</p>
          </div>
        </div>
      </div>

      <!-- Limitations -->
      <div id="limitations" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What This Calculator Does NOT Do</h2>
        <div class="grid sm:grid-cols-2 gap-3">
          <div class="flex items-start gap-2 text-sm text-gray-600">
            <span class="text-red-400 font-bold mt-0.5">✗</span>
            <span>Model cost segregation studies</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-gray-600">
            <span class="text-red-400 font-bold mt-0.5">✗</span>
            <span>Calculate bonus depreciation (179 / 168k)</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-gray-600">
            <span class="text-red-400 font-bold mt-0.5">✗</span>
            <span>Apply IRS mid-month convention exactly</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-gray-600">
            <span class="text-red-400 font-bold mt-0.5">✗</span>
            <span>Guarantee tax savings or outcomes</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-gray-600">
            <span class="text-red-400 font-bold mt-0.5">✗</span>
            <span>Provide CPA-level tax advice</span>
          </div>
          <div class="flex items-start gap-2 text-sm text-gray-600">
            <span class="text-red-400 font-bold mt-0.5">✗</span>
            <span>Handle separate improvement schedules</span>
          </div>
        </div>
        <div class="mt-4 rounded-xl bg-gray-50 border border-gray-200 p-4">
          <p class="text-xs text-gray-600">This calculator uses simplified straight-line depreciation for estimation purposes. It is educational and not a substitute for professional tax advice. Results should be reviewed with a CPA or tax professional before filing.</p>
        </div>
      </div>

      <!-- FAQ -->
      <div id="faq" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
        <h2 class="text-xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions</h2>
        <div class="space-y-5">

          <div class="border-b border-gray-100 pb-5">
            <h3 class="text-base font-bold text-gray-800 mb-2">Can I depreciate the land value of my rental property?</h3>
            <p class="text-sm text-gray-600">No. Land is never depreciable under IRS rules. Only the building structure and certain improvements can be depreciated. You must separate land value from your total cost basis before calculating depreciation. Incorrect land allocation is one of the most common depreciation mistakes investors make.</p>
          </div>

          <div class="border-b border-gray-100 pb-5">
            <h3 class="text-base font-bold text-gray-800 mb-2">What is the depreciation period for residential rental properties?</h3>
            <p class="text-sm text-gray-600">Residential rental properties depreciate over <strong>27.5 years</strong> using straight-line depreciation. Commercial properties use a <strong>39-year</strong> recovery period. Some mixed-use and special-use properties may require different periods — always confirm with a tax professional.</p>
          </div>

          <div class="border-b border-gray-100 pb-5">
            <h3 class="text-base font-bold text-gray-800 mb-2">What is depreciation recapture and how does it work?</h3>
            <p class="text-sm text-gray-600">Depreciation recapture is when the IRS taxes the depreciation you previously deducted at the time of sale. For real estate, this is taxed at a maximum rate of 25% (Section 1250 unrecaptured gain). It applies to the accumulated depreciation you've taken, not the full sale gain. Strategies like 1031 exchanges can defer recapture.</p>
          </div>

          <div class="border-b border-gray-100 pb-5">
            <h3 class="text-base font-bold text-gray-800 mb-2">How is depreciation calculated for a short-term rental?</h3>
            <p class="text-sm text-gray-600">Short-term rental classification depends on the average rental period. If the average rental stay is less than 7 days, the IRS may classify the property as commercial (39-year recovery). If the average stay is 7–30 days with substantial owner services, additional rules may apply. Consult a tax professional if you're renting on Airbnb or VRBO.</p>
          </div>

          <div class="border-b border-gray-100 pb-5">
            <h3 class="text-base font-bold text-gray-800 mb-2">Does depreciation reduce my actual cash flow?</h3>
            <p class="text-sm text-gray-600">No. Depreciation is a non-cash deduction. It reduces your taxable income without reducing your bank balance. This is what makes it so powerful — you can shelter rental income from taxes without spending any additional money. However, when you sell, the deferred tax comes due (unless you use a 1031 exchange).</p>
          </div>

          <div class="border-b border-gray-100 pb-5">
            <h3 class="text-base font-bold text-gray-800 mb-2">What is accumulated depreciation and why does it matter?</h3>
            <p class="text-sm text-gray-600">Accumulated depreciation is the total amount of depreciation you've taken over the years you've owned the property. It reduces your adjusted basis in the property, which increases your taxable gain when you sell. It also represents your recapture exposure — the amount that may be taxed at up to 25% when you sell.</p>
          </div>

          <div class="pb-2">
            <h3 class="text-base font-bold text-gray-800 mb-2">Can I depreciate capital improvements separately?</h3>
            <p class="text-sm text-gray-600">Yes, under actual IRS rules, major capital improvements may need to be depreciated on separate schedules with potentially different recovery periods (e.g., new roof vs. new appliances). This calculator simplifies by treating improvements as part of total basis with the same recovery period. Consult a CPA for precise treatment of significant improvements.</p>
          </div>

        </div>
      </div>

      <!-- Related Calculators CTA -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Related Calculators</h2>
        <p class="text-gray-500 text-sm mb-5">Depreciation works together with these tools for complete tax analysis.</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

          <NuxtLink to="/capital-gains-tax-calculator"
            class="group bg-gray-50 hover:bg-white p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-sm transition flex flex-col">
            <span class="text-sm font-bold mb-1" style="color: #1e3a5f;">Capital Gains Tax Calculator</span>
            <span class="text-xs text-gray-500 flex-1 mb-2">Estimate total tax on property sale — includes depreciation recapture.</span>
            <span class="text-xs font-bold" style="color: #f59e0b;">Open →</span>
          </NuxtLink>

          <NuxtLink to="/1031-exchange-calculator"
            class="group bg-gray-50 hover:bg-white p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-sm transition flex flex-col">
            <span class="text-sm font-bold mb-1" style="color: #1e3a5f;">1031 Exchange Calculator</span>
            <span class="text-xs text-gray-500 flex-1 mb-2">Defer capital gains and depreciation recapture with a tax-free exchange.</span>
            <span class="text-xs font-bold" style="color: #f59e0b;">Open →</span>
          </NuxtLink>

          <NuxtLink to="/real-estate-roi-calculator"
            class="group bg-gray-50 hover:bg-white p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-sm transition flex flex-col">
            <span class="text-sm font-bold mb-1" style="color: #1e3a5f;">Real Estate ROI Calculator</span>
            <span class="text-xs text-gray-500 flex-1 mb-2">Comprehensive return analysis — cash flow, appreciation, and equity build-up.</span>
            <span class="text-xs font-bold" style="color: #f59e0b;">Open →</span>
          </NuxtLink>

          <NuxtLink to="/rental-property-roi-calculator"
            class="group bg-gray-50 hover:bg-white p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-sm transition flex flex-col">
            <span class="text-sm font-bold mb-1" style="color: #1e3a5f;">Rental Property ROI Calculator</span>
            <span class="text-xs text-gray-500 flex-1 mb-2">Lifetime rental ROI with depreciation as a wealth-building component.</span>
            <span class="text-xs font-bold" style="color: #f59e0b;">Open →</span>
          </NuxtLink>

          <NuxtLink to="/noi-calculator"
            class="group bg-gray-50 hover:bg-white p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-sm transition flex flex-col">
            <span class="text-sm font-bold mb-1" style="color: #1e3a5f;">NOI Calculator</span>
            <span class="text-xs text-gray-500 flex-1 mb-2">Net Operating Income — pairs with depreciation for complete P&amp;L picture.</span>
            <span class="text-xs font-bold" style="color: #f59e0b;">Open →</span>
          </NuxtLink>

          <NuxtLink to="/cap-rate-calculator"
            class="group bg-gray-50 hover:bg-white p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-sm transition flex flex-col">
            <span class="text-sm font-bold mb-1" style="color: #1e3a5f;">Cap Rate Calculator</span>
            <span class="text-xs text-gray-500 flex-1 mb-2">Capitalization rate — property value analysis before and after depreciation.</span>
            <span class="text-xs font-bold" style="color: #f59e0b;">Open →</span>
          </NuxtLink>

        </div>
      </div>

    </div>

    <!-- ═══════════════════════════════════════════════
         FOOTER
    ═══════════════════════════════════════════════ -->
    <footer class="mt-4 border-t border-gray-200 bg-white py-8 px-4">
      <div class="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-400">© 2026 RealCalc. For informational purposes only. Not financial or tax advice.</p>
        <div class="flex gap-6">
          <NuxtLink to="/about"   class="text-sm text-gray-400 hover:text-gray-600 transition">About</NuxtLink>
          <NuxtLink to="/privacy" class="text-sm text-gray-400 hover:text-gray-600 transition">Privacy</NuxtLink>
          <NuxtLink to="/terms"   class="text-sm text-gray-400 hover:text-gray-600 transition">Terms</NuxtLink>
          <NuxtLink to="/contact" class="text-sm text-gray-400 hover:text-gray-600 transition">Contact</NuxtLink>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue'

// ── HEAD ──────────────────────────────────────────────
useHead({
  title: 'Real Estate Depreciation Calculator — Estimate Annual Tax Savings (2026)',
  meta: [
    { name: 'description', content: 'Estimate real estate depreciation, annual tax savings, and recapture exposure. See how much you can deduct and improve after-tax returns.' },
    { property: 'og:title', content: 'Real Estate Depreciation Calculator — Estimate Annual Tax Savings (2026)' },
    { property: 'og:description', content: 'Estimate real estate depreciation, annual tax savings, and recapture exposure. See exactly how much you can deduct — in seconds.' },
    { name: 'robots', content: 'index, follow' },
  ],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'SoftwareApplication',
          name: 'Real Estate Depreciation Calculator',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Web',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          description: 'Estimate annual depreciation, tax shield, and recapture exposure for residential, commercial, short-term, and mixed-use rental properties.',
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Can I depreciate the land value of my rental property?',
              acceptedAnswer: { '@type': 'Answer', text: 'No. Land is never depreciable under IRS rules. Only the building structure can be depreciated. You must separate land value from your total cost basis.' }
            },
            {
              '@type': 'Question',
              name: 'What is the depreciation period for residential rental properties?',
              acceptedAnswer: { '@type': 'Answer', text: 'Residential rental properties depreciate over 27.5 years. Commercial properties use a 39-year recovery period.' }
            },
            {
              '@type': 'Question',
              name: 'What is depreciation recapture?',
              acceptedAnswer: { '@type': 'Answer', text: 'Depreciation recapture is when the IRS taxes the depreciation you previously deducted at the time of sale, at a maximum rate of 25% for real estate.' }
            },
            {
              '@type': 'Question',
              name: 'Does depreciation reduce my actual cash flow?',
              acceptedAnswer: { '@type': 'Answer', text: 'No. Depreciation is a non-cash deduction. It reduces your taxable income without reducing your bank balance.' }
            },
            {
              '@type': 'Question',
              name: 'How is accumulated depreciation calculated?',
              acceptedAnswer: { '@type': 'Answer', text: 'Accumulated depreciation equals annual depreciation multiplied by years held, capped at the total depreciable basis.' }
            }
          ]
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arvcalc.com/' },
            { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://arvcalc.com/calculators' },
            { '@type': 'ListItem', position: 3, name: 'Depreciation Calculator', item: 'https://arvcalc.com/depreciation-calculator' }
          ]
        }
      ]
    })
  }]
})

// ── STATE ─────────────────────────────────────────────
const isNavExpanded = ref(false)
const calcMode = ref('calculate')
const shareMsg = ref('')

// Standard mode form
const form = ref({
  purchasePrice: '',
  landValue: '',
  landPct: '',
  closingCosts: '',
  improvements: '',
  propertyType: 'residential',
  depreciationPeriod: '27.5',
  customPeriod: '',
  yearsDepreciated: '',
  taxRate: '',
  scenarioName: '',
})

// Reverse Mode 2: Find basis
const revForm = ref({
  targetDeduction: '',
  period: '27.5',
  customPeriod: '',
})

// Reverse Mode 3: Find period
const revForm2 = ref({
  basis: '',
  targetDeduction: '',
})

// ── HELPERS ───────────────────────────────────────────
const n = (v) => {
  const num = parseFloat(v)
  return isNaN(num) || num < 0 ? 0 : num
}

const formatCurrency = (val) => {
  if (val === null || val === undefined || isNaN(val)) return '—'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Math.round(val))
}

// ── COMPUTED: STANDARD MODE ───────────────────────────

const purchasePrice = computed(() => n(form.value.purchasePrice))
const landValueInput = computed(() => n(form.value.landValue))
const landPctInput = computed(() => n(form.value.landPct))
const closingCostsInput = computed(() => n(form.value.closingCosts))
const improvementsInput = computed(() => n(form.value.improvements))
const yearsDeprNum = computed(() => n(form.value.yearsDepreciated))
const taxRateNum = computed(() => n(form.value.taxRate))

const hasImprovements = computed(() => improvementsInput.value > 0)
const hasTaxRate = computed(() => form.value.taxRate !== '' && taxRateNum.value > 0)

// Total Cost Basis
const totalCostBasis = computed(() => purchasePrice.value + closingCostsInput.value + improvementsInput.value)

// Land Value Used: if landValue entered → use it; else use landPct × purchasePrice
const landValueUsed = computed(() => {
  if (form.value.landValue !== '' && landValueInput.value > 0) {
    return landValueInput.value
  }
  if (form.value.landPct !== '' && landPctInput.value > 0) {
    return purchasePrice.value * (landPctInput.value / 100)
  }
  return 0
})

// Validation: land >= total cost basis
const landExceedsError = computed(() =>
  purchasePrice.value > 0 && landValueUsed.value >= totalCostBasis.value && totalCostBasis.value > 0
)

// Mixed-use requires custom period
const mixedUseError = computed(() =>
  form.value.propertyType === 'mixed' && form.value.depreciationPeriod !== 'custom'
)

// Depreciable Basis
const depreciableBasis = computed(() => {
  if (landExceedsError.value || mixedUseError.value) return 0
  return Math.max(0, totalCostBasis.value - landValueUsed.value)
})

// Recovery Period
const recoveryPeriod = computed(() => {
  if (form.value.depreciationPeriod === '27.5') return 27.5
  if (form.value.depreciationPeriod === '39') return 39
  const cp = n(form.value.customPeriod)
  return cp > 0 ? cp : 0
})

// Annual Depreciation
const annualDepreciation = computed(() => {
  if (depreciableBasis.value <= 0 || recoveryPeriod.value <= 0) return 0
  return depreciableBasis.value / recoveryPeriod.value
})

// Monthly Depreciation
const monthlyDepreciation = computed(() => annualDepreciation.value / 12)

// Accumulated Depreciation (capped at depreciable basis)
const accumulatedDepreciation = computed(() => {
  if (yearsDeprNum.value <= 0) return 0
  return Math.min(annualDepreciation.value * yearsDeprNum.value, depreciableBasis.value)
})

// Remaining Depreciable Basis
const remainingBasis = computed(() => Math.max(0, depreciableBasis.value - accumulatedDepreciation.value))

// Remaining Depreciation Years
const remainingYears = computed(() => {
  const rem = recoveryPeriod.value - yearsDeprNum.value
  return Math.max(0, rem)
})

// Tax Shield
const annualTaxShield = computed(() => {
  if (!hasTaxRate.value) return 0
  return annualDepreciation.value * (taxRateNum.value / 100)
})
const monthlyTaxShield = computed(() => annualTaxShield.value / 12)

// Has Result
const hasResult = computed(() =>
  purchasePrice.value > 0 &&
  annualDepreciation.value > 0 &&
  !landExceedsError.value &&
  !mixedUseError.value
)

// ── SCENARIO PANEL ───────────────────────────────────
const triggerScenarioSave = ref(false)
function openSaveScenario() {
  triggerScenarioSave.value = true
  nextTick(() => { triggerScenarioSave.value = false })
}
const currentScenarioResult = computed(() => {
  if (hasResult.value) {
    return {
      primaryMetric: 'Annual Depreciation',
      primaryValue: formatCurrency(annualDepreciation.value),
      badgeLabel: statusBadge.value?.label,
      purchasePrice: purchasePrice.value,
    }
  }
  if (revBasis.value !== null) {
    return {
      primaryMetric: 'Required Depreciable Basis',
      primaryValue: formatCurrency(revBasis.value),
      badgeLabel: 'Reverse',
    }
  }
  if (revPeriod.value !== null) {
    return {
      primaryMetric: 'Required Recovery Period',
      primaryValue: `${revPeriod.value.toFixed(1)} years`,
      badgeLabel: 'Reverse',
    }
  }
  return undefined
})
function onScenarioSaved(_id) {}

// Depreciation Status
const statusBadge = computed(() => {
  if (!hasResult.value) return { label: '—', bgClass: 'bg-gray-100 text-gray-500', description: '' }
  if (yearsDeprNum.value === 0 || form.value.yearsDepreciated === '') {
    return { label: 'New', bgClass: 'bg-green-100 text-green-800', description: 'Full depreciation schedule available' }
  }
  if (remainingYears.value === 0) {
    return { label: 'Fully Depreciated', bgClass: 'bg-red-100 text-red-800', description: 'No remaining depreciation benefit' }
  }
  if (remainingYears.value <= 5) {
    return { label: 'Nearly Done', bgClass: 'bg-orange-100 text-orange-800', description: 'Limited depreciation remaining' }
  }
  return { label: 'Active', bgClass: 'bg-blue-100 text-blue-800', description: 'Depreciation benefit still active' }
})

// Verdict (for primary result card color)
const verdict = computed(() => {
  if (!hasResult.value) return null
  const annualDepr = annualDepreciation.value

  if (annualDepr >= 15000) {
    return {
      label: 'Large Deduction',
      color: '#16a34a',
      bgClass: 'bg-green-100 text-green-800',
      insight: `Annual depreciation of ${formatCurrency(annualDepr)} on a ${recoveryPeriod.value}-year schedule. Strong tax shelter for your rental income.`
    }
  }
  if (annualDepr >= 8000) {
    return {
      label: 'Solid Deduction',
      color: '#2563eb',
      bgClass: 'bg-blue-100 text-blue-800',
      insight: `${formatCurrency(annualDepr)}/year in depreciation deductions. Meaningful tax benefit over the ${recoveryPeriod.value}-year recovery period.`
    }
  }
  if (annualDepr >= 3000) {
    return {
      label: 'Moderate Deduction',
      color: '#d97706',
      bgClass: 'bg-amber-100 text-amber-800',
      insight: `${formatCurrency(annualDepr)}/year in depreciation. Check land allocation — a lower land percentage increases your depreciable basis.`
    }
  }
  return {
    label: 'Small Deduction',
    color: '#9333ea',
    bgClass: 'bg-purple-100 text-purple-800',
    insight: `${formatCurrency(annualDepr)}/year. Low depreciable basis — review land allocation or consider whether improvements are captured in total cost basis.`
  }
})

// ── COMPUTED: REVERSE MODES ───────────────────────────

// Mode 2: Find Required Basis
const revPeriodUsed = computed(() => {
  if (revForm.value.period === '27.5') return 27.5
  if (revForm.value.period === '39') return 39
  return n(revForm.value.customPeriod) || 0
})

const revBasis = computed(() => {
  const target = n(revForm.value.targetDeduction)
  const period = revPeriodUsed.value
  if (target <= 0 || period <= 0) return null
  return target * period
})

// Mode 3: Find Recovery Period
const revPeriod = computed(() => {
  const basis = n(revForm2.value.basis)
  const target = n(revForm2.value.targetDeduction)
  if (basis <= 0 || target <= 0) return null
  return basis / target
})

// ── SHARE + PDF ───────────────────────────────────────
const shareUrl = () => {
  const params = new URLSearchParams()
  if (form.value.purchasePrice) params.set('pp', form.value.purchasePrice)
  if (form.value.landValue) params.set('lv', form.value.landValue)
  if (form.value.landPct) params.set('lp', form.value.landPct)
  if (form.value.closingCosts) params.set('cc', form.value.closingCosts)
  if (form.value.improvements) params.set('im', form.value.improvements)
  if (form.value.propertyType) params.set('pt', form.value.propertyType)
  if (form.value.depreciationPeriod) params.set('dp', form.value.depreciationPeriod)
  if (form.value.customPeriod) params.set('cp', form.value.customPeriod)
  if (form.value.yearsDepreciated) params.set('yd', form.value.yearsDepreciated)
  if (form.value.taxRate) params.set('tr', form.value.taxRate)
  const url = `${window.location.origin}/depreciation-calculator?${params.toString()}`
  navigator.clipboard.writeText(url).then(() => {
    shareMsg.value = 'Link copied!'
    setTimeout(() => { shareMsg.value = '' }, 2500)
  }).catch(() => {
    shareMsg.value = 'Copy failed'
    setTimeout(() => { shareMsg.value = '' }, 2500)
  })
}

const exportPdf = async () => {
  if (!hasResult.value) return
  try {
    const { default: jsPDF } = await import('jspdf')
    const doc = new jsPDF()
    let y = 20
    doc.setFontSize(18)
    doc.setTextColor(30, 58, 95)
    doc.text('Real Estate Depreciation Calculator', 105, y, { align: 'center' })
    y += 8
    doc.setFontSize(10)
    doc.setTextColor(100)
    doc.text('RealCalc.com — Educational estimate only, not tax advice', 105, y, { align: 'center' })
    y += 14

    doc.setFontSize(13)
    doc.setTextColor(30, 58, 95)
    doc.text('Inputs', 20, y)
    y += 7

    doc.setFontSize(10)
    doc.setTextColor(50)
    const inputs = [
      ['Property Purchase Price', formatCurrency(purchasePrice.value)],
      ['Land Value Used', formatCurrency(landValueUsed.value)],
      ['Closing Costs', formatCurrency(closingCostsInput.value)],
      ['Capital Improvements', formatCurrency(improvementsInput.value)],
      ['Total Cost Basis', formatCurrency(totalCostBasis.value)],
      ['Property Type', form.value.propertyType],
      ['Recovery Period', `${recoveryPeriod.value} years`],
      ['Years Already Depreciated', yearsDeprNum.value > 0 ? `${yearsDeprNum.value} years` : 'None'],
    ]
    inputs.forEach(([label, val]) => {
      doc.text(`${label}:`, 22, y)
      doc.text(val, 120, y)
      y += 6
    })
    y += 6

    doc.setFontSize(13)
    doc.setTextColor(30, 58, 95)
    doc.text('Results', 20, y)
    y += 7

    doc.setFontSize(10)
    doc.setTextColor(50)
    const results = [
      ['Depreciable Basis', formatCurrency(depreciableBasis.value)],
      ['Annual Depreciation', formatCurrency(annualDepreciation.value)],
      ['Monthly Depreciation', formatCurrency(monthlyDepreciation.value)],
      ['Accumulated Depreciation', formatCurrency(accumulatedDepreciation.value)],
      ['Remaining Depreciable Basis', formatCurrency(remainingBasis.value)],
      ['Remaining Years', `${remainingYears.value.toFixed(1)} years`],
      ['Status', statusBadge.value.label],
    ]
    if (hasTaxRate.value) {
      results.push(['Annual Tax Shield (est.)', formatCurrency(annualTaxShield.value)])
    }
    results.forEach(([label, val]) => {
      doc.text(`${label}:`, 22, y)
      doc.text(val, 120, y)
      y += 6
    })
    y += 8

    doc.setFontSize(8)
    doc.setTextColor(130)
    doc.text('This report is for estimation purposes only. Not financial or tax advice. Consult a tax professional before filing.', 20, y, { maxWidth: 170 })

    doc.save('depreciation-analysis.pdf')
  } catch (e) {
    console.error('PDF export failed:', e)
  }
}

// ── QUERY PARAM RESTORE ───────────────────────────────
onMounted(() => {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  if (params.get('pp')) form.value.purchasePrice = params.get('pp')
  if (params.get('lv')) form.value.landValue = params.get('lv')
  if (params.get('lp')) form.value.landPct = params.get('lp')
  if (params.get('cc')) form.value.closingCosts = params.get('cc')
  if (params.get('im')) form.value.improvements = params.get('im')
  if (params.get('pt')) form.value.propertyType = params.get('pt')
  if (params.get('dp')) form.value.depreciationPeriod = params.get('dp')
  if (params.get('cp')) form.value.customPeriod = params.get('cp')
  if (params.get('yd')) form.value.yearsDepreciated = params.get('yd')
  if (params.get('tr')) form.value.taxRate = params.get('tr')
})
</script>
