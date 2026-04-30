<template>
  <div class="min-h-screen bg-gray-50">

    <!-- ═══════════════════════════════════════════════
         HEAD (SEO)
    ═══════════════════════════════════════════════ -->
    <Head>
      <Title>70% Rule Calculator — Fix and Flip Max Offer | RealCalc</Title>
      <Meta name="description" content="Free 70% Rule Calculator for fix-and-flip investors. Screen maximum offer on any property in seconds — MAO = ARV × 70% − Rehab. Works for wholesalers too." />
      <Meta property="og:title" content="70% Rule Calculator — Fix and Flip Max Offer | RealCalc" />
      <Meta property="og:description" content="Free 70% Rule Calculator for fix-and-flip investors. Screen maximum offer on any property in seconds — MAO = ARV × 70% − Rehab. Works for wholesalers too." />
      <Meta property="og:type" content="website" />
      <Link rel="canonical" href="https://arvcalc.com/70-percent-rule-calculator" />
    </Head>

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
            <li class="text-gray-700 font-semibold">70% Rule Calculator</li>
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
            70% Rule Calculator — Fix and Flip Maximum Offer Tool
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
            <li><a href="#what-is" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is 70% Rule</a></li>
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
              <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
              <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            </ul>
            <ul v-show="isNavExpanded" class="flex flex-col gap-y-2 mt-2">
              <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
              <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
              <li><a href="#what-is" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is 70% Rule</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
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
          <span v-if="calcMode === 'standard' || calcMode === 'adjustable'">MAO</span>
          <span v-else>Implied Rule</span>
        </div>
        <div class="flex items-center gap-3">
          <template v-if="calcMode !== 'reverse'">
            <span v-if="maoValid" class="text-xl font-extrabold leading-none" :style="`color: ${statusTier.color}`">
              {{ formatCurrency(maoDisplay) }}
            </span>
            <span v-else class="text-sm font-medium text-red-500">Not viable</span>
            <span v-if="maoValid" class="text-xs font-bold px-2.5 py-1 rounded-full text-white" :style="`background: ${statusTier.color}`">{{ statusTier.label }}</span>
          </template>
          <template v-else>
            <span v-if="reverseValid" class="text-xl font-extrabold leading-none text-purple-700">{{ impliedPct.toFixed(1) }}%</span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="reverseValid" class="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-100 text-purple-800">{{ impliedBand.label }}</span>
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
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">Select screening mode</p>
          <div class="flex flex-wrap gap-2">
            <button @click="calcMode = 'standard'"
              class="flex-1 min-w-[140px] px-4 py-3 rounded-xl border-2 text-left transition"
              :class="calcMode === 'standard' ? 'border-amber-400 bg-amber-50' : 'border-gray-200 bg-white hover:border-gray-300'">
              <span class="block text-xs font-bold" :class="calcMode === 'standard' ? 'text-amber-800' : 'text-gray-700'">Standard 70%</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'standard' ? 'text-amber-600' : 'text-gray-400'">Default screen</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'standard' ? 'bg-amber-200 text-amber-800' : 'bg-gray-100 text-gray-400'">Amber</span>
            </button>
            <button @click="calcMode = 'adjustable'"
              class="flex-1 min-w-[140px] px-4 py-3 rounded-xl border-2 text-left transition"
              :class="calcMode === 'adjustable' ? 'border-orange-400 bg-orange-50' : 'border-gray-200 bg-white hover:border-gray-300'">
              <span class="block text-xs font-bold" :class="calcMode === 'adjustable' ? 'text-orange-800' : 'text-gray-700'">Adjustable %</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'adjustable' ? 'text-orange-600' : 'text-gray-400'">60–80% range</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'adjustable' ? 'bg-orange-200 text-orange-800' : 'bg-gray-100 text-gray-400'">Orange</span>
            </button>
            <button @click="calcMode = 'reverse'"
              class="flex-1 min-w-[140px] px-4 py-3 rounded-xl border-2 text-left transition"
              :class="calcMode === 'reverse' ? 'border-purple-400 bg-purple-50' : 'border-gray-200 bg-white hover:border-gray-300'">
              <span class="block text-xs font-bold" :class="calcMode === 'reverse' ? 'text-purple-800' : 'text-gray-700'">Reverse Mode</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'reverse' ? 'text-purple-600' : 'text-gray-400'">What % rule fits?</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'reverse' ? 'bg-purple-200 text-purple-800' : 'bg-gray-100 text-gray-400'">Purple</span>
            </button>
          </div>
          <!-- Mode descriptions -->
          <div class="mt-2.5">
            <p v-if="calcMode === 'standard'" class="text-xs text-amber-700 leading-relaxed bg-amber-50 px-3 py-1.5 rounded-lg">
              Enter ARV and Rehab Budget — calculator screens Maximum Allowable Offer using the canonical formula MAO = ARV × 70% − Rehab.
            </p>
            <p v-else-if="calcMode === 'adjustable'" class="text-xs text-orange-700 leading-relaxed bg-orange-50 px-3 py-1.5 rounded-lg">
              Set your own percentage (60–80%) to match local market conditions. Benchmark comparison at 65%/70%/75% shown automatically.
            </p>
            <p v-else class="text-xs text-purple-700 leading-relaxed bg-purple-50 px-3 py-1.5 rounded-lg">
              <strong>Mode 3 answers a different question than Modes 1/2.</strong> Enter your actual offer price to see what % rule it implies — ideal for wholesalers validating end-buyer fit or investors reverse-engineering a comp offer.
            </p>
          </div>
        </div>
      </div>

      <!-- Two-column body -->
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch">

        <!-- ── INPUTS (left column) ── -->
        <div class="border-b lg:border-b-0 lg:border-r border-gray-200 bg-white min-w-0">

          <!-- Core Inputs -->
          <div class="border-b border-gray-100">
            <div class="px-5 pt-4 pb-1">
              <h2 class="text-xs font-bold uppercase tracking-widest text-gray-400">Property Inputs</h2>
            </div>
            <div class="px-4 py-3 space-y-3">

              <!-- ARV -->
              <div>
                <label for="arv" class="block text-xs font-semibold text-gray-700 mb-1">
                  ARV — After-Repair Value <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="arv" v-model.number="arv" type="number" min="0" step="1000"
                    placeholder="Enter after-repair value"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Estimated market value after full renovation. Use conservative comps — this is the most critical input.</p>
              </div>

              <!-- Rehab Budget -->
              <div>
                <label for="rehab" class="block text-xs font-semibold text-gray-700 mb-1">
                  Rehab Budget <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="rehab" v-model.number="rehab" type="number" min="0" step="1000"
                    placeholder="Enter total rehab cost"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <!-- Rehab warning banners -->
                <div v-if="arv > 0 && rehab > 0 && rehabPctOfArv > 80"
                  class="mt-2 p-2 rounded-lg border border-red-300 bg-red-50 text-xs text-red-800">
                  <strong>⚠ Extreme Rehab Scenario:</strong> Rehab exceeds 80% of ARV. The 70% Rule may not apply — this is teardown/rebuild territory. Use Fix and Flip Calculator for full cost modeling. Status Badge forced to High Risk.
                </div>
                <div v-else-if="arv > 0 && rehab > 0 && rehabPctOfArv > 40"
                  class="mt-2 p-2 rounded-lg border border-amber-300 bg-amber-50 text-xs text-amber-800">
                  <strong>Heavy Rehab Detected:</strong> Rehab exceeds 40% of ARV. The 70% Rule margin may be insufficient — validate with Fix and Flip Calculator before committing.
                </div>
              </div>

              <!-- Mode 2: Custom Percentage -->
              <div v-if="calcMode === 'adjustable'">
                <label for="customPct" class="block text-xs font-semibold text-gray-700 mb-1">
                  Custom Percentage % <span class="text-gray-400 font-normal">(60–80)</span>
                </label>
                <div class="relative">
                  <input id="customPct" v-model.number="customPct" type="number" min="60" max="80" step="1"
                    placeholder="Enter percentage (60–80)"
                    class="w-full px-4 py-2 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
                <!-- Graduated warnings for Mode 2 -->
                <div v-if="customPct !== null && customPct < 60"
                  class="mt-1 p-2 rounded-lg border border-red-300 bg-red-50 text-xs text-red-800">
                  Below 60% is rarely achievable. This may reflect unrealistic expectations — verify your market has distressed inventory at this discount.
                </div>
                <div v-else-if="customPct !== null && customPct <= 65"
                  class="mt-1 p-2 rounded-lg border border-amber-300 bg-amber-50 text-xs text-amber-800">
                  Conservative zone. Strong margin but requires patient, off-market deal sourcing.
                </div>
                <div v-else-if="customPct !== null && customPct <= 70"
                  class="mt-1 p-2 rounded-lg border border-green-300 bg-green-50 text-xs text-green-800">
                  Standard flip territory — industry benchmark range.
                </div>
                <div v-else-if="customPct !== null && customPct <= 75"
                  class="mt-1 p-2 rounded-lg border border-amber-300 bg-amber-50 text-xs text-amber-800">
                  Competitive zone. Common in hot markets (2026 Sunbelt). Verify holding/financing costs carefully.
                </div>
                <div v-else-if="customPct !== null && customPct <= 80"
                  class="mt-1 p-2 rounded-lg border border-red-300 bg-red-50 text-xs text-red-800">
                  Above 75% is rarely viable for flipping. Thin margin may not cover financing (2-4%), holding (5-8%), selling (6-7%), and profit (15-20%) costs in 2026 rate environment. Verify with Fix and Flip Calculator. This range more typically fits BRRRR or rental strategies.
                </div>
              </div>

              <!-- Mode 3: Purchase Price -->
              <div v-if="calcMode === 'reverse'">
                <label for="purchasePrice" class="block text-xs font-semibold text-gray-700 mb-1">
                  Your Purchase Price (Offer) <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="purchasePrice" v-model.number="purchasePrice" type="number" min="0" step="1000"
                    placeholder="Enter your offer price"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

            </div>
          </div>

          <!-- Advanced Options (Mode 1 only) -->
          <div class="border-b border-gray-100">
            <button @click="showAdvanced = !showAdvanced"
              class="w-full px-5 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition">
              <span class="text-xs font-bold uppercase tracking-widest text-gray-400">Advanced Options
                <span v-if="calcMode !== 'standard'" class="ml-2 text-gray-300 font-normal normal-case tracking-normal">(Mode 1 only)</span>
              </span>
              <svg class="w-4 h-4 text-gray-400 transition-transform duration-200" :class="showAdvanced ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="showAdvanced" class="px-4 pb-3 space-y-3">
              <!-- Wholesale Assignment Fee -->
              <div>
                <label for="wholesaleFee" class="block text-xs font-semibold text-gray-700 mb-1">Wholesale Assignment Fee</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input id="wholesaleFee" v-model.number="wholesaleFee" type="number" min="0" step="500"
                    placeholder="Enter fee if wholesaling"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border-2 border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">MAO becomes the seller-facing offer. End-buyer pays MAO + fee.</p>
              </div>
              <!-- Financing Buffer -->
              <div>
                <div class="flex items-center justify-between mb-1">
                  <label class="text-xs font-semibold text-gray-700">Include 2026 Financing Buffer</label>
                  <div class="relative group">
                    <svg class="w-4 h-4 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div class="absolute right-0 bottom-6 w-64 bg-gray-900 text-white text-xs rounded-lg p-2.5 hidden group-hover:block z-10 shadow-xl">
                      Subtracts 3% of ARV to account for 2026 hard money costs (12-14% rates). Mode 1 only — disabled in Mode 2 to prevent double-counting financing costs.
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <button @click="toggleFinancingBuffer"
                    :disabled="calcMode !== 'standard'"
                    :title="calcMode !== 'standard' ? 'Financing Buffer is Mode 1 only. Custom % already reflects market/cost assumptions — combining both double-counts financing costs.' : ''"
                    class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
                    :class="[
                      calcMode !== 'standard' ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
                      financingBuffer ? 'bg-amber-500' : 'bg-gray-300'
                    ]">
                    <span class="inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform"
                      :class="financingBuffer ? 'translate-x-6' : 'translate-x-1'"/>
                  </button>
                  <span class="text-xs text-gray-500">
                    <template v-if="calcMode !== 'standard'">Disabled in Mode 2 (prevents double-count)</template>
                    <template v-else-if="financingBuffer">Subtracts {{ formatCurrency(financingBufferAmt) }} (3% of ARV)</template>
                    <template v-else>Off — enable for 2026 high-rate adjustment</template>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- ── RESULTS (right column) ── -->
        <div class="bg-white min-w-0 lg:sticky lg:top-[4.5rem] lg:max-h-[calc(100vh-5rem)] lg:overflow-y-auto">

          <!-- MODE 1 / MODE 2: MAO Result Panel -->
          <div v-if="calcMode !== 'reverse'" class="p-5 space-y-4">

            <!-- Primary metric header -->
            <div class="text-center">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Maximum Allowable Offer</p>
              <p class="text-xs text-gray-400">Based on {{ calcMode === 'standard' ? '70% Rule' : (customPct || 70) + '% Rule' }}</p>
            </div>

            <!-- Rehab > 80% extreme: forced red banner before result -->
            <div v-if="arv > 0 && rehab > 0 && rehabPctOfArv > 80"
              class="p-3 rounded-xl border border-red-300 bg-red-50 text-xs text-red-800 text-center">
              <strong>⚠ Extreme Rehab</strong> — 70% Rule may not apply. Status forced to High Risk.
            </div>

            <!-- Valid MAO result -->
            <div v-if="maoValid" class="text-center">
              <div class="text-4xl sm:text-5xl font-extrabold leading-none mb-2" :style="`color: ${statusTier.color}`">
                {{ formatCurrency(maoDisplay) }}
              </div>
              <span class="inline-block px-3 py-1.5 rounded-full text-sm font-bold text-white" :style="`background: ${statusTier.color}`">
                {{ statusTier.label }}
              </span>
              <p class="text-xs text-gray-500 mt-2">Offer as % of ARV: <strong>{{ offerPctOfArv.toFixed(1) }}%</strong></p>
              <p v-if="financingBuffer && calcMode === 'standard'" class="text-xs text-amber-700 mt-1 font-semibold">
                MAO with 2026 Financing Buffer: {{ formatCurrency(maoDisplay) }}
              </p>
            </div>

            <!-- Invalid MAO state -->
            <div v-else-if="hasInputs" class="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
              <p class="text-red-700 font-bold text-sm mb-1">⚠ Deal not viable at current inputs</p>
              <p class="text-xs text-red-600 mb-3">{{ maoErrorMsg }}</p>
              <div class="flex gap-2 justify-center flex-wrap">
                <button class="text-xs px-3 py-1.5 rounded-lg bg-red-100 text-red-700 font-semibold hover:bg-red-200 transition">Try reducing Rehab</button>
                <button class="text-xs px-3 py-1.5 rounded-lg bg-red-100 text-red-700 font-semibold hover:bg-red-200 transition">Increase ARV estimate</button>
              </div>
            </div>

            <!-- Empty state -->
            <div v-else class="text-center py-6">
              <p class="text-2xl font-bold text-gray-200">—</p>
              <p class="text-xs text-gray-400 mt-2">Enter ARV and Rehab Budget above</p>
            </div>

            <!-- Secondary Metrics (only when MAO valid) -->
            <div v-if="maoValid" class="space-y-2">
              <div class="h-px bg-gray-100"/>

              <!-- Gross Margin (Pre-Cost Buffer) -->
              <div class="flex items-center justify-between py-1">
                <div class="flex items-center gap-1">
                  <span class="text-xs text-gray-600">Gross Margin (Pre-Cost Buffer)</span>
                  <div class="relative group">
                    <svg class="w-3.5 h-3.5 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div class="absolute left-0 bottom-5 w-64 bg-gray-900 text-white text-xs rounded-lg p-2.5 hidden group-hover:block z-10 shadow-xl">
                      This is NOT profit. It represents the total dollar buffer available to cover: financing costs (2-4% of ARV), holding costs (5-8%), selling costs (6-7%), AND profit margin (15-20%). For realistic profit projection, use the Fix and Flip Calculator.
                    </div>
                  </div>
                </div>
                <span class="text-xs font-bold text-gray-800">{{ formatCurrency(grossMargin) }}</span>
              </div>

              <!-- Rule Buffer -->
              <div class="flex items-center justify-between py-1">
                <div class="flex items-center gap-1">
                  <span class="text-xs text-gray-600">Rule Buffer (Profit + Costs Allocation)</span>
                  <div class="relative group">
                    <svg class="w-3.5 h-3.5 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div class="absolute left-0 bottom-5 w-64 bg-gray-900 text-white text-xs rounded-lg p-2.5 hidden group-hover:block z-10 shadow-xl">
                      The percentage buffer is meant to cover ALL costs (financing, holding, selling) AND investor profit. Using a lower % (65%) allocates more buffer to profit/costs. Using a higher % (75%) accepts a thinner buffer.
                    </div>
                  </div>
                </div>
                <span class="text-xs font-bold text-gray-800">{{ formatCurrency(ruleBuffer) }}</span>
              </div>

              <!-- Offer as % of ARV -->
              <div class="flex items-center justify-between py-1">
                <div class="flex items-center gap-1">
                  <span class="text-xs text-gray-600">Offer as % of ARV</span>
                  <div class="relative group">
                    <svg class="w-3.5 h-3.5 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div class="absolute left-0 bottom-5 w-64 bg-gray-900 text-white text-xs rounded-lg p-2.5 hidden group-hover:block z-10 shadow-xl">
                      Your offer price divided by ARV, ignoring Rehab. Distinct from Implied Rule (Mode 3) which includes Rehab. Both are valid metrics.
                    </div>
                  </div>
                </div>
                <span class="text-xs font-bold" :style="`color: ${statusTier.color}`">{{ offerPctOfArv.toFixed(1) }}%</span>
              </div>

              <div class="h-px bg-gray-100"/>

              <!-- MAO Bar Chart (simplified CSS bar) -->
              <div class="mt-2">
                <p class="text-xs font-semibold text-gray-500 mb-2">MAO vs ARV</p>
                <div class="relative bg-gray-100 rounded-full h-5 overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-500"
                    :style="`width: ${Math.min(offerPctOfArv, 100)}%; background: ${statusTier.color}`"/>
                </div>
                <div class="flex justify-between text-xs text-gray-400 mt-1">
                  <span>MAO {{ formatCurrency(maoDisplay) }}</span>
                  <span>ARV {{ formatCurrency(arv) }}</span>
                </div>
                <p class="text-xs text-gray-400 mt-0.5">Buffer for costs + profit: {{ formatCurrency(ruleBuffer) }} ({{ ((1 - activePercent / 100) * 100).toFixed(0) }}% of ARV)</p>
              </div>

              <div class="h-px bg-gray-100"/>
            </div>

            <!-- Mode 2: Benchmark Band -->
            <div v-if="calcMode === 'adjustable' && arv > 0" class="space-y-2">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400">Benchmark Comparison</p>
              <div class="grid grid-cols-3 gap-2">
                <div class="rounded-xl border p-2 text-center"
                  :class="Math.abs((customPct || 70) - 65) < 0.5 ? 'border-amber-400 bg-amber-50' : 'border-gray-200'">
                  <p class="text-xs font-bold text-gray-600">65%</p>
                  <p class="text-xs font-semibold text-gray-800 mt-0.5">{{ arv > 0 ? formatCurrency(Math.max(0, arv * 0.65 - (rehab || 0))) : '—' }}</p>
                  <p class="text-xs text-gray-400">Conservative</p>
                </div>
                <div class="rounded-xl border p-2 text-center"
                  :class="Math.abs((customPct || 70) - 70) < 0.5 ? 'border-amber-400 bg-amber-50' : 'border-gray-200'">
                  <p class="text-xs font-bold text-gray-600">70%</p>
                  <p class="text-xs font-semibold text-gray-800 mt-0.5">{{ arv > 0 ? formatCurrency(Math.max(0, arv * 0.70 - (rehab || 0))) : '—' }}</p>
                  <p class="text-xs text-gray-400">Standard</p>
                </div>
                <div class="rounded-xl border p-2 text-center"
                  :class="Math.abs((customPct || 70) - 75) < 0.5 ? 'border-amber-400 bg-amber-50' : 'border-gray-200'">
                  <p class="text-xs font-bold text-gray-600">75%</p>
                  <p class="text-xs font-semibold text-gray-800 mt-0.5">{{ arv > 0 ? formatCurrency(Math.max(0, arv * 0.75 - (rehab || 0))) : '—' }}</p>
                  <p class="text-xs text-gray-400">Competitive</p>
                </div>
              </div>
              <div v-if="customPct && Math.abs(customPct - 65) > 0.5 && Math.abs(customPct - 70) > 0.5 && Math.abs(customPct - 75) > 0.5"
                class="rounded-xl border-2 border-amber-400 bg-amber-50 p-2 text-center">
                <p class="text-xs font-bold text-amber-800">Your {{ customPct || 70 }}% MAO</p>
                <p class="text-sm font-extrabold text-amber-900 mt-0.5">{{ formatCurrency(maoDisplay) }}</p>
              </div>
            </div>

            <!-- CTA Block -->
            <div v-if="hasInputs" class="space-y-2 pt-1">
              <a :href="fixAndFlipUrl" class="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-bold text-white transition hover:opacity-90" style="background: #1e3a5f;">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
                Run full flip analysis with this MAO
              </a>
              <a v-if="statusTier.label === 'High Risk' || (calcMode === 'reverse' && impliedPct >= 75)" href="/brrrr-calculator" class="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl text-sm font-semibold text-emerald-700 border-2 border-emerald-300 bg-emerald-50 hover:bg-emerald-100 transition">
                Analyze as BRRRR instead
              </a>
              <a v-else href="/brrrr-calculator" class="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 border-2 border-gray-200 hover:border-gray-300 bg-white transition">
                Analyze as BRRRR instead
              </a>
              <a href="/compare-real-estate-deals" class="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl text-sm font-semibold text-gray-500 border border-gray-200 hover:border-gray-300 bg-white transition">
                Compare with another deal
              </a>
            </div>

          </div>

          <!-- MODE 3: Reverse Mode Result Panel -->
          <div v-else class="p-5 space-y-4">
            <div class="text-center">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Your Offer Analysis</p>
              <p class="text-xs text-purple-600">Mode 3: What % rule does your offer imply?</p>
            </div>

            <!-- Valid reverse result -->
            <div v-if="reverseValid" class="space-y-3">
              <!-- Both metrics side-by-side -->
              <div class="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p class="text-xs font-bold text-gray-500 mb-3">TWO METRICS — BOTH ARE CORRECT:</p>

                <!-- Offer % (price only) -->
                <div class="mb-3">
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-xs text-gray-600">Offer % (price only):</span>
                    <div class="flex items-center gap-2">
                      <span class="text-lg font-extrabold" :style="`color: ${reverseOfferTier.color}`">{{ reverseOfferPct.toFixed(1) }}%</span>
                      <span class="text-xs font-bold px-2 py-0.5 rounded-full text-white" :style="`background: ${reverseOfferTier.color}`">{{ reverseOfferTier.label }}</span>
                    </div>
                  </div>
                  <p class="text-xs text-gray-400">↳ How much of ARV you're paying (ignores Rehab)</p>
                </div>

                <!-- Total % (price + rehab) -->
                <div>
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-xs text-gray-600">Total % (price + rehab):</span>
                    <div class="flex items-center gap-2">
                      <span class="text-lg font-extrabold text-gray-700">{{ impliedPct.toFixed(1) }}%</span>
                      <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-gray-200 text-gray-700">{{ impliedBand.label }}</span>
                    </div>
                  </div>
                  <p class="text-xs text-gray-400">↳ Implied Rule = ({{ formatCurrency(purchasePrice) }} + {{ formatCurrency(rehab) }}) / {{ formatCurrency(arv) }}</p>
                </div>
              </div>

              <!-- Clarification banner (mandatory) -->
              <div class="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-800">
                <p class="font-semibold mb-1">ⓘ Important — these are different metrics:</p>
                <p class="mb-1"><strong>Status Badge</strong> reflects your offer price as % of ARV — answers "how much of the property's value am I paying?"</p>
                <p class="mb-1"><strong>Implied Rule</strong> reflects total investment (offer + rehab) as % of ARV — answers "what % rule does my deal match against the 70% Rule standard?"</p>
                <p>These measure different things and can produce different classifications. Both are valid.</p>
              </div>

              <!-- Mode 3 CTA (primary — prominent, above fold) -->
              <div class="bg-purple-50 border border-purple-200 rounded-xl p-3 text-center">
                <p class="text-xs text-purple-700 font-semibold mb-2">
                  ✓ {{ impliedBand.label }} ({{ impliedPct.toFixed(1) }}% Implied Rule)
                </p>
                <a :href="fixAndFlipUrlMode3" class="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition" style="background: #1e3a5f;">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                  Run full flip analysis with this price
                </a>
                <p class="text-xs text-purple-500 mt-1.5">Pre-fills: ARV {{ formatCurrency(arv) }}, Rehab {{ formatCurrency(rehab) }}, Purchase {{ formatCurrency(purchasePrice) }}</p>
              </div>

              <!-- Secondary CTAs -->
              <div class="space-y-2">
                <a v-if="impliedPct >= 75" href="/brrrr-calculator" class="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl text-sm font-semibold text-emerald-700 border-2 border-emerald-300 bg-emerald-50 hover:bg-emerald-100 transition">
                  Analyze as BRRRR instead (Implied ≥ 75%)
                </a>
                <a href="/compare-real-estate-deals" class="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl text-sm font-semibold text-gray-500 border border-gray-200 hover:border-gray-300 bg-white transition">
                  Compare with another deal
                </a>
              </div>

              <!-- Mode 3 Gauge (CSS-based) -->
              <div class="mt-2">
                <p class="text-xs font-semibold text-gray-500 mb-2">Implied Rule on 60–80% spectrum</p>
                <div class="relative h-4 rounded-full overflow-hidden flex">
                  <div class="flex-1 bg-green-400" style="flex: 1"/>
                  <div class="flex-1 bg-blue-400" style="flex: 1"/>
                  <div class="flex-1 bg-amber-400" style="flex: 1"/>
                  <div class="flex-1 bg-red-400" style="flex: 1"/>
                </div>
                <div class="relative h-2 mt-0.5">
                  <div class="absolute w-0.5 h-3 bg-gray-900 rounded-full -top-0.5 transition-all duration-500"
                    :style="`left: ${Math.min(Math.max((impliedPct - 60) / 20 * 100, 0), 100)}%`"/>
                </div>
                <div class="flex justify-between text-xs text-gray-400 mt-1">
                  <span>60% Conservative</span>
                  <span>70% Standard</span>
                  <span>80% Aggressive</span>
                </div>
              </div>

            </div>

            <!-- Empty state for Mode 3 -->
            <div v-else class="text-center py-8">
              <p class="text-2xl font-bold text-gray-200">—</p>
              <p class="text-xs text-gray-400 mt-2">Enter ARV, Rehab, and Purchase Price above</p>
            </div>

          </div>

          <!-- Share + PDF -->
          <div v-if="hasResult" class="p-4 border-t border-gray-100 space-y-2">
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
          </div>
        </div>

      </div><!-- end two-column -->
      </div><!-- end inner rounded -->
      </div><!-- end gradient border -->

      <!-- ═══════════════════════════════════════════════
           SCENARIOS COMPARISON CARDS
      ═══════════════════════════════════════════════ -->
      <div class="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 class="text-lg font-bold mb-1" style="color: #1e3a5f;">Three Scenarios at a Glance</h2>
        <p class="text-sm text-gray-500 mb-4">Conservative 65% / Standard 70% / Competitive 75% — with your current inputs</p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <!-- Conservative 65% -->
          <div class="rounded-xl border-2 p-4" :class="calcMode === 'standard' ? 'border-green-300 bg-green-50' : 'border-gray-200'">
            <p class="text-xs font-bold uppercase tracking-widest text-green-700 mb-1">Conservative 65%</p>
            <p class="text-2xl font-extrabold text-green-800">
              {{ arv > 0 ? formatCurrency(Math.max(0, arv * 0.65 - (rehab || 0) * 1.1)) : '—' }}
            </p>
            <p class="text-xs text-green-700 mt-1">Strong margin, protects against cost overruns</p>
            <p class="text-xs text-gray-400 mt-0.5">Rehab +10% overrun allowance</p>
          </div>
          <!-- Standard 70% -->
          <div class="rounded-xl border-2 border-amber-300 bg-amber-50 p-4">
            <p class="text-xs font-bold uppercase tracking-widest text-amber-700 mb-1">Standard 70% ★</p>
            <p class="text-2xl font-extrabold text-amber-800">
              {{ arv > 0 ? formatCurrency(Math.max(0, arv * 0.70 - (rehab || 0))) : '—' }}
            </p>
            <p class="text-xs text-amber-700 mt-1">Industry standard benchmark</p>
            <p class="text-xs text-gray-400 mt-0.5">Base inputs, no adjustments</p>
          </div>
          <!-- Competitive 75% -->
          <div class="rounded-xl border-2 p-4" :class="calcMode === 'adjustable' && customPct >= 74 ? 'border-orange-300 bg-orange-50' : 'border-gray-200'">
            <p class="text-xs font-bold uppercase tracking-widest text-orange-700 mb-1">Competitive 75%</p>
            <p class="text-2xl font-extrabold text-orange-800">
              {{ arv > 0 ? formatCurrency(Math.max(0, arv * 0.75 - (rehab || 0))) : '—' }}
            </p>
            <p class="text-xs text-orange-700 mt-1">Hot markets — thin margin, verify costs</p>
            <p class="text-xs text-gray-400 mt-0.5">2026 Sunbelt competitive zone</p>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           SENSITIVITY TABLE
      ═══════════════════════════════════════════════ -->
      <div class="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 overflow-x-auto">
        <h2 class="text-lg font-bold mb-1" style="color: #1e3a5f;">Sensitivity Table: Percentage × Rehab Variance</h2>
        <p class="text-sm text-gray-500 mb-4">MAO at different percentage and rehab combinations</p>
        <table class="w-full text-xs border-collapse min-w-[500px]">
          <thead>
            <tr class="bg-gray-50">
              <th class="border border-gray-200 px-3 py-2 text-left font-bold text-gray-600">%</th>
              <th v-for="col in sensColLabels" :key="col.key"
                class="border border-gray-200 px-3 py-2 text-center font-bold text-gray-600">
                {{ col.label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in sensitivityRows" :key="row.pct">
              <td class="border border-gray-200 px-3 py-2 font-bold text-gray-700">{{ row.pct }}%</td>
              <td v-for="col in sensColLabels" :key="col.key"
                class="border border-gray-200 px-3 py-2 text-center transition"
                :class="isUserCell(row.pct, col.key) ? 'bg-amber-100 border-amber-400 font-bold text-amber-900' : 'text-gray-700'">
                {{ sensitivityCell(row.pct, col.key) }}
              </td>
            </tr>
          </tbody>
        </table>
        <p class="text-xs text-gray-400 mt-3">
          <strong>Note:</strong> Intermediate percentages (67%, 72%) show market transition zones between canonical 65/70/75 benchmarks. Use these mid-zones to model gradual market shifts. Main scenarios above use the canonical 65/70/75 trio; this table adds 67% and 72% for finer sensitivity resolution. Amber highlight = your current assumption.
        </p>
      </div>

    </main>

    <!-- ═══════════════════════════════════════════════
         SCENARIO PANEL
    ═══════════════════════════════════════════════ -->
    <div class="max-w-[1100px] mx-auto px-4 pb-6 mt-4">
      <ScenarioPanel
        calculator="70-percent-rule"
        :has-result="hasResult"
        :result="scenarioPanelResult"
        :trigger-save="triggerScenarioSave"
        @saved="onScenarioSaved"
      />
    </div>

    <!-- ═══════════════════════════════════════════════
         SEO CONTENT — 15 SECTIONS
    ═══════════════════════════════════════════════ -->
    <div class="max-w-[1100px] mx-auto px-4 pb-16">

      <!-- ─── SECTION 1: OVERVIEW ─────────────────────────── -->
      <section id="overview" class="mt-12">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">70% Rule Calculator for Fix and Flip Investors</h2>
          <p class="text-sm text-gray-500 mb-5">Screen maximum offers on distressed properties in seconds</p>

          <div class="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              The 70% Rule Calculator helps fix-and-flip investors quickly screen the maximum offer they can make on a distressed property — using the industry-standard formula: Maximum Allowable Offer (MAO) = ARV × 70% − Rehab. Whether you call it a 70 percent rule calculator or a fix and flip offer calculator, the purpose is the same: a fast, reliable first-pass viability check before you invest analysis time in any deal.
            </p>
            <p>
              This tool offers three distinct modes for different decision contexts. <strong>Mode 1 (Standard 70%, amber)</strong> applies the canonical formula and is the default quick screen for most investors. <strong>Mode 2 (Adjustable %, orange)</strong> lets you dial in a custom percentage from 60–80% to match your local market conditions — critical for 2026 Sunbelt markets where competitive bidding often requires 72–75%. <strong>Mode 3 (Reverse, purple)</strong> flips the question: enter your actual offer price to find out what percentage rule it implies. Mode 3 is uniquely valuable for wholesalers validating end-buyer fit. Beyond basic MAO output, the tool provides a two-tier status system distinguishing Offer as % of ARV (for the Status Badge) from Implied Rule in Mode 3, plus a 2026-aware Financing Buffer option (Mode 1 only) that adjusts for hard money rates.
            </p>
            <p>
              The 70% Rule Calculator sits at the middle of a three-tool fix-and-flip workflow: first use the <a href="/arv-calculator" class="text-amber-700 hover:underline font-semibold">ARV Calculator</a> to establish a solid After-Repair Value estimate from comparables, then run it through this tool for a quick go/no-go screen, and finally validate any deal that passes through the <a href="/fix-and-flip-calculator" class="text-amber-700 hover:underline font-semibold">Fix and Flip Calculator</a> for full profitability modeling. Each tool plays a distinct role — the 70% Rule is intentionally the fastest and simplest step in that chain.
            </p>
            <p class="p-4 rounded-xl border border-amber-200 bg-amber-50">
              <strong>Important:</strong> The 70% Rule is a screening heuristic — it embeds generalized cost assumptions (financing, holding, selling, profit). For committed capital decisions, always validate with the <a href="/fix-and-flip-calculator" class="text-amber-700 hover:underline font-semibold">Fix and Flip Calculator</a> for precise modeling of your specific deal. Results are projections, not guarantees. Enter ARV and Rehab Budget above to see your screened MAO, or import values from the ARV Calculator.
            </p>
          </div>
        </div>
      </section>

      <!-- ─── SECTION 2: HOW TO USE ───────────────────────── -->
      <section id="how-to-use" class="mt-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">How to Use the 70% Rule Calculator</h2>
          <p class="text-sm text-gray-500 mb-5">From ARV estimate to screened maximum offer in 4 steps</p>

          <div class="space-y-5">
            <!-- Step 1 -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white" style="background: #1e3a5f;">1</div>
              <div>
                <h3 class="font-bold text-gray-800 mb-1">Enter the After-Repair Value (ARV)</h3>
                <p class="text-sm text-gray-600 leading-relaxed">ARV is the estimated market value of the property after all renovations are complete — not the current as-is value and not the asking price. If you don't have a reliable estimate, use the <a href="/arv-calculator" class="text-amber-700 hover:underline">ARV Calculator</a> first to build it from comparables. Pull 3–5 recent comparable sales within a 0.5–1 mile radius and adjust for size and condition differences for the most accurate input.</p>
              </div>
            </div>
            <!-- Step 2 -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white" style="background: #1e3a5f;">2</div>
              <div>
                <h3 class="font-bold text-gray-800 mb-1">Enter the Rehab Budget</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Enter the total estimated renovation cost to bring the property to ARV condition — include materials, labor, permits, and a contingency buffer of 10–15%. The rehab cost classification system helps frame your scope: cosmetic (0–15% of ARV), moderate (15–30%), heavy (30–40%), extensive (40–80%), teardown (&gt;80%). The calculator warns you if Rehab exceeds 40% of ARV (heavy rehab may stretch the 70% Rule margin) or 80% of ARV (extreme — the rule may not apply at all).</p>
              </div>
            </div>
            <!-- Step 3 -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white" style="background: #1e3a5f;">3</div>
              <div>
                <h3 class="font-bold text-gray-800 mb-1">Select mode (Standard 70% / Adjustable % / Reverse)</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Mode 1 Standard 70% applies the canonical formula MAO = ARV × 0.70 − Rehab — the default for quick screening. Mode 2 Adjustable % lets you use 60–80% to reflect your local market conditions, and includes a benchmark band for comparison. Mode 3 Reverse takes your actual offer price and shows what percentage rule it implies. The Advanced panel offers a Wholesale Assignment Fee (if wholesaling) and a Financing Buffer toggle (Mode 1 only, subtracts 3% of ARV to account for 2026 hard money rates at 12–14%). The Financing Buffer is disabled in Mode 2 to prevent double-counting — your custom % already reflects market conditions.</p>
              </div>
            </div>
            <!-- Step 4 -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white" style="background: #1e3a5f;">4</div>
              <div>
                <h3 class="font-bold text-gray-800 mb-1">Interpret MAO, Status Badge, and secondary metrics</h3>
                <p class="text-sm text-gray-600 leading-relaxed">The primary output is Maximum Allowable Offer (MAO) rounded to the nearest $500. The Status Badge (Deep Value / Standard Flip Zone / Competitive Zone / High Risk) is based on Offer-as-%-of-ARV. Secondary metrics — Gross Margin (Pre-Cost Buffer) and Rule Buffer (Profit + Costs Allocation) — give dollar context for what the percentage buffer covers. In Mode 3, you'll see two separate percentages: Offer % and Implied Rule — both valid, measuring different things. <strong>The 70% Rule is a screening tool. Before committing capital on any property that passes this screen, run the full analysis in the <a href="/fix-and-flip-calculator" class="text-amber-700 hover:underline">Fix and Flip Calculator</a> to model your specific financing, holding, and selling costs.</strong></p>
              </div>
            </div>
          </div>

          <!-- Pro Tips -->
          <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="rounded-xl bg-amber-50 border border-amber-200 p-4">
              <p class="text-xs font-bold text-amber-800 mb-1">Pro Tip 1 — ARV Quality</p>
              <p class="text-xs text-amber-700">70% Rule accuracy depends entirely on ARV accuracy. A 10% ARV error translates to 7% MAO error. Always pull 3–5 recent comps (sold within 6 months, within 1 mile) before relying on MAO output.</p>
            </div>
            <div class="rounded-xl bg-amber-50 border border-amber-200 p-4">
              <p class="text-xs font-bold text-amber-800 mb-1">Pro Tip 2 — Percentage Selection</p>
              <p class="text-xs text-amber-700">In 2026 Sunbelt markets (Austin, Phoenix, Atlanta), expect 72–75% to win competitive MLS bids. Reserve 70% for off-market and 65% for foreclosure/auction deals. Don't apply 70% uniformly.</p>
            </div>
            <div class="rounded-xl bg-amber-50 border border-amber-200 p-4">
              <p class="text-xs font-bold text-amber-800 mb-1">Pro Tip 3 — Wholesale Role</p>
              <p class="text-xs text-amber-700">If wholesaling, enter your Assignment Fee in Advanced inputs. MAO then represents the seller-facing price — your end-buyer pays MAO + fee, which should still clear their 70% Rule threshold.</p>
            </div>
            <div class="rounded-xl bg-amber-50 border border-amber-200 p-4">
              <p class="text-xs font-bold text-amber-800 mb-1">Pro Tip 4 — Workflow</p>
              <p class="text-xs text-amber-700">Quick workflow: ARV Calculator → import ARV here via "Check offer viability" → if MAO looks viable, click "Run full flip analysis" to import into Fix and Flip Calculator for final validation.</p>
            </div>
          </div>

          <!-- Mode Explanations -->
          <div class="mt-6">
            <h3 class="font-bold text-gray-800 mb-3">Choosing the Right Mode</h3>
            <div class="space-y-3">
              <div class="rounded-xl border border-amber-200 bg-amber-50 p-3">
                <p class="text-sm font-bold text-amber-800">Standard 70% (amber) — Use when:</p>
                <p class="text-xs text-amber-700 mt-1">You want a quick go/no-go using the canonical industry formula. Best for first-pass screening of MLS listings and off-market deals.</p>
              </div>
              <div class="rounded-xl border border-orange-200 bg-orange-50 p-3">
                <p class="text-sm font-bold text-orange-800">Adjustable % (orange) — Use when:</p>
                <p class="text-xs text-orange-700 mt-1">Your local market requires a non-70% benchmark. Output includes benchmark band comparison at 65/70/75%. Note: Financing Buffer disabled in this mode (prevents double-counting).</p>
              </div>
              <div class="rounded-xl border border-purple-200 bg-purple-50 p-3">
                <p class="text-sm font-bold text-purple-800">Reverse Mode (purple) — Use when:</p>
                <p class="text-xs text-purple-700 mt-1">You have an offer price and want to know what % rule it matches. Mode 3 answers "is my existing offer in line with industry standards?" — different from Modes 1/2 which answer "what's the maximum I can offer?" Ideal for wholesalers validating assignability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── SECTION 3: INPUTS & OUTPUTS ────────────────── -->
      <section id="inputs-outputs" class="mt-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Inputs and Outputs</h2>
          <p class="text-sm text-gray-500 mb-5">What you enter, what the calculator screens</p>

          <div class="space-y-6">
            <div>
              <h3 class="font-bold text-gray-700 mb-3">Inputs</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-sm border-collapse">
                  <thead><tr class="bg-gray-50">
                    <th class="border border-gray-200 px-3 py-2 text-left text-xs font-bold text-gray-600">Input</th>
                    <th class="border border-gray-200 px-3 py-2 text-left text-xs font-bold text-gray-600">Required</th>
                    <th class="border border-gray-200 px-3 py-2 text-left text-xs font-bold text-gray-600">Default / Source</th>
                  </tr></thead>
                  <tbody class="text-xs text-gray-700">
                    <tr><td class="border border-gray-200 px-3 py-2 font-semibold">ARV (After-Repair Value)</td><td class="border border-gray-200 px-3 py-2">All modes</td><td class="border border-gray-200 px-3 py-2">From ARV Calculator or comps</td></tr>
                    <tr class="bg-gray-50"><td class="border border-gray-200 px-3 py-2 font-semibold">Rehab Budget</td><td class="border border-gray-200 px-3 py-2">All modes</td><td class="border border-gray-200 px-3 py-2">From renovation estimate</td></tr>
                    <tr><td class="border border-gray-200 px-3 py-2 font-semibold">Custom Percentage %</td><td class="border border-gray-200 px-3 py-2">Mode 2 only</td><td class="border border-gray-200 px-3 py-2">60–80 range, default 70</td></tr>
                    <tr class="bg-gray-50"><td class="border border-gray-200 px-3 py-2 font-semibold">Your Purchase Price</td><td class="border border-gray-200 px-3 py-2">Mode 3 only</td><td class="border border-gray-200 px-3 py-2">Your actual offer amount</td></tr>
                    <tr><td class="border border-gray-200 px-3 py-2 font-semibold">Wholesale Assignment Fee</td><td class="border border-gray-200 px-3 py-2">Optional (all modes)</td><td class="border border-gray-200 px-3 py-2">$0 default</td></tr>
                    <tr class="bg-gray-50"><td class="border border-gray-200 px-3 py-2 font-semibold">Include Financing Buffer</td><td class="border border-gray-200 px-3 py-2">Optional (Mode 1 only)</td><td class="border border-gray-200 px-3 py-2">false (disabled in Mode 2)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 class="font-bold text-gray-700 mb-3">Outputs</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-sm border-collapse">
                  <thead><tr class="bg-gray-50">
                    <th class="border border-gray-200 px-3 py-2 text-left text-xs font-bold text-gray-600">Output</th>
                    <th class="border border-gray-200 px-3 py-2 text-left text-xs font-bold text-gray-600">Formula</th>
                    <th class="border border-gray-200 px-3 py-2 text-left text-xs font-bold text-gray-600">Purpose</th>
                  </tr></thead>
                  <tbody class="text-xs text-gray-700">
                    <tr><td class="border border-gray-200 px-3 py-2 font-semibold">Maximum Allowable Offer (MAO)</td><td class="border border-gray-200 px-3 py-2">ARV × % − Rehab − Wholesale Fee</td><td class="border border-gray-200 px-3 py-2">Primary screen output; rounded to $500; shown only when &gt;0</td></tr>
                    <tr class="bg-gray-50"><td class="border border-gray-200 px-3 py-2 font-semibold">Status Badge</td><td class="border border-gray-200 px-3 py-2">Based on Offer as % of ARV</td><td class="border border-gray-200 px-3 py-2">Deep Value / Standard Flip Zone / Competitive Zone / High Risk</td></tr>
                    <tr><td class="border border-gray-200 px-3 py-2 font-semibold">Gross Margin (Pre-Cost Buffer)</td><td class="border border-gray-200 px-3 py-2">ARV − MAO − Rehab</td><td class="border border-gray-200 px-3 py-2">Dollar buffer for ALL costs + profit — NOT profit alone</td></tr>
                    <tr class="bg-gray-50"><td class="border border-gray-200 px-3 py-2 font-semibold">Rule Buffer (Profit + Costs Allocation)</td><td class="border border-gray-200 px-3 py-2">ARV × (1 − %/100)</td><td class="border border-gray-200 px-3 py-2">What the % buffer covers (financing, holding, selling, profit)</td></tr>
                    <tr><td class="border border-gray-200 px-3 py-2 font-semibold">Offer as % of ARV</td><td class="border border-gray-200 px-3 py-2">MAO / ARV × 100</td><td class="border border-gray-200 px-3 py-2">What % of ARV you're paying. Distinct from Implied Rule (Mode 3). Both valid — measure different things.</td></tr>
                    <tr class="bg-gray-50"><td class="border border-gray-200 px-3 py-2 font-semibold">Implied Rule (Mode 3)</td><td class="border border-gray-200 px-3 py-2">(Purchase + Rehab) / ARV × 100</td><td class="border border-gray-200 px-3 py-2">Total investment as % of ARV — different from Status Badge's Offer as % of ARV</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── SECTION 4: FORMULA ──────────────────────────── -->
      <section id="formula" class="mt-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">How the 70% Rule Calculator Works</h2>
          <p class="text-sm text-gray-500 mb-5">The industry-standard heuristic — with a worked Austin, TX 2026 example</p>

          <div class="bg-gray-50 rounded-xl border border-gray-200 p-4 mb-5">
            <p class="text-sm text-gray-700 leading-relaxed">
              The 70% Rule Calculator applies a screening formula used by flippers since the 1980s: <strong>Maximum Allowable Offer (MAO) = ARV × 70% − Rehab</strong>. The 70% represents an industry-standard allocation — roughly 15–20% for all costs (financing, holding, selling) and 15–20% for profit, totaling the 30% buffer. This calculator adds 3 modes (Standard, Adjustable, Reverse), two-tier status interpretation, 2026 rate environment awareness, and explicit cross-referencing to the Fix and Flip Calculator for full deal analysis. Results are screening projections — first-pass viability indicators, not final offer prices.
            </p>
          </div>

          <div class="space-y-4">
            <div>
              <h3 class="font-bold text-gray-800 mb-2">Formula Variants</h3>
              <div class="bg-gray-900 rounded-xl p-4 text-xs font-mono text-green-400 space-y-2">
                <div class="text-gray-400">// Standard 70% Rule (Mode 1)</div>
                <div>MAO = ARV × 0.70 − Rehab − Wholesale Fee (if any)</div>
                <div class="text-gray-500">// With Financing Buffer (Mode 1 optional):</div>
                <div>MAO = MAO − (ARV × 0.03)</div>
                <div class="mt-2 text-gray-400">// Adjustable % (Mode 2, 60–80% range)</div>
                <div>MAO = ARV × (Custom % / 100) − Rehab − Wholesale Fee</div>
                <div class="text-gray-500">// Financing Buffer NOT available in Mode 2 (prevents double-counting)</div>
                <div class="mt-2 text-gray-400">// Reverse Mode (Mode 3)</div>
                <div>Implied Rule = ((Purchase Price + Rehab) / ARV) × 100</div>
                <div>Offer as % of ARV = Purchase Price / ARV × 100  // for Status Badge</div>
                <div class="mt-2 text-gray-400">// Secondary metrics</div>
                <div>Gross Margin (Pre-Cost Buffer) = ARV − MAO − Rehab</div>
                <div>Rule Buffer = ARV × (1 − %/100)</div>
              </div>
            </div>

            <!-- Worked example -->
            <div class="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <h3 class="font-bold text-blue-900 mb-3">Worked Example — Austin, TX (2026 Standard Market)</h3>
              <div class="text-sm text-blue-800 space-y-1.5">
                <p><strong>Inputs:</strong> ARV = $250,000 | Rehab = $30,000 | Mode 1 Standard 70% | No wholesale fee | Financing Buffer off</p>
                <p>MAO = $250,000 × 0.70 − $30,000 = $175,000 − $30,000 = <strong>$145,000</strong></p>
                <p>Gross Margin (Pre-Cost Buffer) = $250,000 − $145,000 − $30,000 = $75,000</p>
                <p>Rule Buffer = $250,000 × 0.30 = $75,000</p>
                <p>Offer as % of ARV = $145,000 / $250,000 × 100 = <strong>58%</strong> → Status Badge: <span class="font-bold text-green-700">GREEN "Deep Value"</span></p>
              </div>
              <div class="mt-3 pt-3 border-t border-blue-200 text-xs text-blue-700">
                <p><strong>Alternative (Competitive Hot Market, 75%):</strong></p>
                <p>MAO = $250,000 × 0.75 − $30,000 = $157,500 | Offer as % of ARV = 63% → BLUE "Standard Flip Zone"</p>
                <p class="mt-1">Shifting from 70% to 75% raises MAO by $12,500 and moves the Status Badge up one tier. Mode 1 Financing Buffer (Mode 1 only) would further adjust for 2026 rate environment by subtracting 3% of ARV ($7,500).</p>
              </div>
            </div>

            <div class="text-xs text-gray-500 space-y-1">
              <p>• 70% is the canonical figure; Mode 2 allows 60–80% adjustment for market conditions.</p>
              <p>• Mode 3 (Reverse) includes Rehab in the Implied Rule formula, which is why it can differ from the Status Badge's Offer-as-%-of-ARV.</p>
              <p>• Financing Buffer (Mode 1 only) is a 2026 high-rate adjustment — do not combine with Custom % (double-count).</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── SECTION 5: WHAT IS ──────────────────────────── -->
      <section id="what-is" class="mt-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">What Is the 70 Percent Rule in Real Estate?</h2>
          <p class="text-sm text-gray-500 mb-5">The industry-standard screening heuristic for fix-and-flip investors</p>

          <div class="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              The 70% Rule is an industry-standard screening heuristic used by fix-and-flip investors to quickly determine the maximum they can pay for a distressed property. The formula is MAO = ARV × 0.70 − Rehab. The "70%" represents a buffer: approximately 15–20% for all transaction costs (financing ~2–4%, holding ~5–8%, selling ~6–7%) and 15–20% for the investor's profit margin. Popularized in the 1980s–1990s flipping community and widely promoted by platforms like BiggerPockets, it remains the industry's go-to quick-screen tool. This is a screening heuristic, not a valuation method — for committed capital decisions, use the Fix and Flip Calculator for full deal analysis.
            </p>
            <p>
              Two different percentages can describe the same deal, and this is the single most confusing aspect of the 70% Rule for new investors. The <strong>Offer as % of ARV</strong> (MAO / ARV × 100) measures how much of the property's value you're paying in the purchase price alone. The <strong>Implied Rule</strong> ((Purchase + Rehab) / ARV × 100) measures your total investment — purchase price plus renovation — as a percentage of ARV. Example: ARV $200K, Rehab $30K, offer $110K. Offer as % = 55% (Deep Value badge). Implied Rule = 70% (Standard flip territory). Both are correct and measure different aspects of the same deal.
            </p>
            <p>
              The traditional 70% Rule was designed for ~5% interest rate environments. In 2026 with hard money at 12–14% and typical 4–6 month flips, financing alone can eat 4–5% of ARV — eroding the 30% buffer significantly. This calculator offers a Financing Buffer toggle (Mode 1 only) that subtracts 3% of ARV to account for modern costs. Alternatively, many 2026 Sunbelt markets require 72–75% Rule to win competitive bids — use Mode 2 for this approach. Do not combine both: they address the same problem from different angles, and using both double-counts financing costs.
            </p>
          </div>
        </div>
      </section>

      <!-- ─── SECTION 6: RESULT MEANING ───────────────────── -->
      <section id="result-meaning" class="mt-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">What Your MAO and Status Badge Mean</h2>
          <p class="text-sm text-gray-500 mb-5">Interpreting the screening output + scenario comparison</p>

          <div class="space-y-5 text-sm text-gray-700">
            <p>MAO is the ceiling for your offer — not the target. Paying exactly at MAO leaves the minimum margin; experienced investors typically bid $5K–$15K below MAO to maintain negotiating room. The Status Badge reflects how aggressive your offer is relative to property value, not how much profit you'll make.</p>

            <div>
              <h3 class="font-bold text-gray-800 mb-3">Status Badge Tiers (based on Offer as % of ARV)</h3>
              <div class="space-y-2">
                <div class="flex items-start gap-3 p-3 rounded-xl border border-green-200 bg-green-50">
                  <span class="flex-shrink-0 px-2 py-1 rounded-full text-xs font-bold text-white bg-green-600">≤60%</span>
                  <div>
                    <p class="font-semibold text-green-800">Deep Value — GREEN</p>
                    <p class="text-xs text-green-700 mt-0.5">Strong margin, rare find. Typical in auctions, foreclosures, or seriously distressed inventory. Hard to win in competitive MLS bidding.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-blue-200 bg-blue-50">
                  <span class="flex-shrink-0 px-2 py-1 rounded-full text-xs font-bold text-white bg-blue-600">60-70%</span>
                  <div>
                    <p class="font-semibold text-blue-800">Standard Flip Zone — BLUE</p>
                    <p class="text-xs text-blue-700 mt-0.5">Healthy margin, standard flipping territory. Common for off-market deals in balanced markets.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-amber-200 bg-amber-50">
                  <span class="flex-shrink-0 px-2 py-1 rounded-full text-xs font-bold text-white bg-amber-600">70-75%</span>
                  <div>
                    <p class="font-semibold text-amber-800">Competitive Zone — AMBER</p>
                    <p class="text-xs text-amber-700 mt-0.5">Thinner margin, competitive markets (2026 Sunbelt). Verify holding and financing costs carefully before proceeding.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-red-200 bg-red-50">
                  <span class="flex-shrink-0 px-2 py-1 rounded-full text-xs font-bold text-white bg-red-600">&gt;75%</span>
                  <div>
                    <p class="font-semibold text-red-800">High Risk — RED</p>
                    <p class="text-xs text-red-700 mt-0.5">Thin margin may not cover all costs in 2026 rate environment. Consider BRRRR or rental exit strategy instead of flipping.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-bold text-gray-800 mb-2">2026 Market Context</h3>
              <p>Most competitive Sunbelt markets (Austin, Phoenix, Atlanta, Dallas) require a 72–75% Rule to win MLS-listed distressed properties. Off-market deals still clear 65–70%. Auction/foreclosure/tax sale properties can clear 55–65% for patient investors. Hard money rates at 12–14% mean the traditional 70% buffer is stretched — use the Financing Buffer (Mode 1) or a higher percentage (Mode 2) to adjust. The Status Badge still uses canonical 70% boundaries — it reflects your offer risk, not market conditions.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── SECTION 7: BENCHMARKS ───────────────────────── -->
      <section id="benchmarks" class="mt-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">70% Rule Benchmarks for 2026</h2>
          <p class="text-sm text-gray-500 mb-5">Percentage ranges, market types, and rehab cost classifications</p>

          <p class="text-sm text-gray-500 mb-4 italic">These are illustrative patterns based on typical fix-and-flip scenarios in 2026 US markets — not measured statistical datasets, not market research, not predictions for any specific deal. Individual results depend on local market dynamics, deal source, and property condition.</p>

          <div class="space-y-6">
            <div>
              <h3 class="font-bold text-gray-700 mb-3">Percentage Tiers by Market Type</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-sm border-collapse">
                  <thead><tr class="bg-gray-50">
                    <th class="border border-gray-200 px-3 py-2 text-left text-xs font-bold text-gray-600">Percentage</th>
                    <th class="border border-gray-200 px-3 py-2 text-left text-xs font-bold text-gray-600">Market Type</th>
                    <th class="border border-gray-200 px-3 py-2 text-left text-xs font-bold text-gray-600">Interpretation</th>
                  </tr></thead>
                  <tbody class="text-xs text-gray-700">
                    <tr><td class="border border-gray-200 px-3 py-2 font-semibold text-green-700">60–65%</td><td class="border border-gray-200 px-3 py-2">Slow / Buyer's Market</td><td class="border border-gray-200 px-3 py-2">Deep value, strong margin, hard to win at auction</td></tr>
                    <tr class="bg-gray-50"><td class="border border-gray-200 px-3 py-2 font-semibold text-blue-700">65–70%</td><td class="border border-gray-200 px-3 py-2">Balanced / Standard</td><td class="border border-gray-200 px-3 py-2">Industry-standard flipping zone</td></tr>
                    <tr><td class="border border-gray-200 px-3 py-2 font-semibold text-amber-700">70–75%</td><td class="border border-gray-200 px-3 py-2">Seller's / Competitive</td><td class="border border-gray-200 px-3 py-2">Hot market, thin margins — verify carefully</td></tr>
                    <tr class="bg-gray-50"><td class="border border-gray-200 px-3 py-2 font-semibold text-orange-700">75–80%</td><td class="border border-gray-200 px-3 py-2">Hyper-Competitive</td><td class="border border-gray-200 px-3 py-2">Thin margins; often BRRRR/rental exit, not flip</td></tr>
                    <tr><td class="border border-gray-200 px-3 py-2 font-semibold text-red-700">&gt;80%</td><td class="border border-gray-200 px-3 py-2">Not Flip Territory</td><td class="border border-gray-200 px-3 py-2">Long-term hold (rental) or retail buyer</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 class="font-bold text-gray-700 mb-3">Typical 2026 Market Benchmarks</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
                <div class="p-3 rounded-xl border border-gray-200">
                  <p class="font-bold text-gray-800">Sunbelt (Austin, Phoenix, Atlanta, Dallas)</p>
                  <p class="mt-1 text-gray-600">72–75% Rule to win MLS bids in 2026</p>
                </div>
                <div class="p-3 rounded-xl border border-gray-200">
                  <p class="font-bold text-gray-800">Midwest (Cleveland, Indianapolis, Kansas City)</p>
                  <p class="mt-1 text-gray-600">65–70% Rule still viable in balanced markets</p>
                </div>
                <div class="p-3 rounded-xl border border-gray-200">
                  <p class="font-bold text-gray-800">Coastal (LA, NY, Boston)</p>
                  <p class="mt-1 text-gray-600">75–80% common; BRRRR often preferred over flips</p>
                </div>
                <div class="p-3 rounded-xl border border-gray-200">
                  <p class="font-bold text-gray-800">Rural / Auction / Tax Sale</p>
                  <p class="mt-1 text-gray-600">55–65% achievable with patience and off-market sourcing</p>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-bold text-gray-700 mb-3">Rehab Cost Classification (% of ARV)</h3>
              <ul class="text-sm text-gray-700 space-y-1">
                <li><span class="font-semibold text-gray-800">0–15% ARV:</span> Cosmetic (paint, flooring, fixtures) — no warning</li>
                <li><span class="font-semibold text-gray-800">15–30% ARV:</span> Moderate (kitchens, baths) — no warning</li>
                <li><span class="font-semibold text-gray-800">30–40% ARV:</span> Heavy (systems, additions) — amber warning triggered at &gt;40%</li>
                <li><span class="font-semibold text-amber-700">40–80% ARV:</span> Extensive (structural, full gut) — amber "heavy rehab" warning; may still work but verify with Fix and Flip Calculator</li>
                <li><span class="font-semibold text-red-700">&gt;80% ARV:</span> Teardown/Rebuild — red "extreme rehab" warning; 70% Rule may not apply; use different analysis framework</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── SECTION 8: STRATEGY ─────────────────────────── -->
      <section id="strategy" class="mt-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">How to Use the 70% Rule by Investor Type</h2>
          <p class="text-sm text-gray-500 mb-5">Matching the screening approach to your business model</p>

          <div class="space-y-4">
            <div v-for="strategy in strategies" :key="strategy.title" class="rounded-xl border border-gray-200 p-4">
              <h3 class="font-bold text-gray-800 mb-2">{{ strategy.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ strategy.body }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── SECTION 9: APPLICATIONS ─────────────────────── -->
      <section id="applications" class="mt-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Common Use Cases</h2>
          <p class="text-sm text-gray-500 mb-5">When the 70% Rule Calculator is the right tool</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="app in applications" :key="app.title" class="rounded-xl border border-gray-200 p-4">
              <h3 class="font-semibold text-gray-800 mb-1.5 text-sm">{{ app.title }}</h3>
              <p class="text-xs text-gray-600 leading-relaxed">{{ app.body }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── SECTION 10: INDUSTRY STANDARDS ──────────────── -->
      <section id="industry-standards" class="mt-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">How This Calculator Aligns with Industry Conventions</h2>
          <p class="text-sm text-gray-500 mb-5">70% Rule history, peer tools, and profit conventions</p>

          <div class="space-y-5 text-sm text-gray-700 leading-relaxed">
            <div>
              <h3 class="font-bold text-gray-800 mb-2">The 70% Rule's Origin</h3>
              <p>The 70% Rule was popularized in the 1980s–1990s fix-and-flip community and promoted heavily by BiggerPockets, SparkRental, and educator networks starting in the 2010s. The 30% buffer rationale: roughly 15–20% for all transaction costs (financing ~2–4%, holding ~5–8%, selling ~6–7%) and 15–20% for the investor's profit margin. It was designed for lower rate environments — around 5% mortgage rates prevalent pre-2022. The 2026 high-rate environment challenges the rule, which is why this calculator offers a Financing Buffer adjustment for Mode 1.</p>
            </div>
            <div>
              <h3 class="font-bold text-gray-800 mb-2">Profit Margin Conventions</h3>
              <p>The minimum target profit in the industry is typically $25K–$50K per flip in national average markets. A 15–20% profit as a percentage of ARV is the industry benchmark. Below 10% profit: the deal isn't worth the risk. Above 25% profit: usually indicates an aggressive ARV estimate or underestimated rehab. The Fix and Flip Calculator converts this screening tool into a precise profit projection with your specific deal parameters.</p>
            </div>
            <div>
              <h3 class="font-bold text-gray-800 mb-2">How RealCalc Differs from BiggerPockets / DealCheck / SparkRental</h3>
              <ul class="text-sm text-gray-600 space-y-1.5 mt-2">
                <li><strong>BiggerPockets:</strong> Has 70% Rule in their Fix and Flip calculator but not as a standalone screening tool.</li>
                <li><strong>DealCheck:</strong> Combines 70% Rule with full flip analysis in one screen — harder to use for quick screening.</li>
                <li><strong>SparkRental:</strong> Educational content strong; dedicated calculator less prominent.</li>
                <li><strong>RealCalc 70% Rule Calculator:</strong> Unique in (a) 3-mode flexibility, (b) Status Badge vs Implied Rule distinction, (c) explicit 2026 Financing Buffer, (d) seamless CTA flow to Fix and Flip, BRRRR, and Compare Deals.</li>
              </ul>
              <p class="text-xs text-gray-400 mt-2 italic">These comparisons describe market positioning, not endorsements. Multiple quality calculators exist — RealCalc emphasizes screening + explicit cross-tool integration.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── SECTION 11: LIMITATIONS ─────────────────────── -->
      <section id="limitations" class="mt-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Limitations of the 70% Rule</h2>
          <p class="text-sm text-gray-500 mb-5">What this screening tool cannot tell you</p>

          <div class="space-y-4">
            <div v-for="(lim, i) in limitations" :key="i" class="rounded-xl border border-gray-200 p-4">
              <h3 class="font-semibold text-gray-800 mb-1.5 text-sm">{{ lim.title }}</h3>
              <p class="text-xs text-gray-600 leading-relaxed">{{ lim.body }}</p>
            </div>
          </div>

          <div class="mt-6">
            <h3 class="font-bold text-gray-800 mb-3">When Not to Use This Calculator</h3>
            <ul class="text-sm text-gray-600 space-y-1.5">
              <li>• <strong>Rental property analysis:</strong> use <a href="/rental-property-calculator" class="text-amber-700 hover:underline">Rental Property Calculator</a> or <a href="/rental-property-roi-calculator" class="text-amber-700 hover:underline">Rental Property ROI Calculator</a></li>
              <li>• <strong>BRRRR strategy evaluation:</strong> use <a href="/brrrr-calculator" class="text-amber-700 hover:underline">BRRRR Calculator</a> (different cost structure with refi step)</li>
              <li>• <strong>Commercial or multifamily 5+ units:</strong> 70% Rule is residential fix-and-flip specific</li>
              <li>• <strong>New construction:</strong> teardown/rebuild requires different valuation framework</li>
              <li>• <strong>Long-term buy-and-hold:</strong> use <a href="/rental-property-roi-calculator" class="text-amber-700 hover:underline">Rental Property ROI Calculator</a> for lifetime wealth analysis</li>
              <li>• <strong>Tax planning or capital gains analysis:</strong> consult a CPA</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ─── SECTION 12: COMMON MISTAKES ─────────────────── -->
      <section id="common-mistakes" class="mt-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Common Mistakes When Using the 70% Rule</h2>
          <p class="text-sm text-gray-500 mb-5">Avoid these five errors</p>

          <div class="space-y-4">
            <div v-for="(mistake, i) in commonMistakes" :key="i" class="flex gap-3">
              <div class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white bg-red-500 mt-0.5">{{ i+1 }}</div>
              <div>
                <h3 class="font-semibold text-gray-800 text-sm mb-1">{{ mistake.title }}</h3>
                <p class="text-xs text-gray-600 leading-relaxed">{{ mistake.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── SECTION 13: FAQ ──────────────────────────────── -->
      <section id="faq" class="mt-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Frequently Asked Questions</h2>
          <p class="text-sm text-gray-500 mb-5">Common questions about the 70% Rule</p>

          <div class="space-y-3">
            <div v-for="(faq, i) in faqs" :key="i" class="border border-gray-200 rounded-xl overflow-hidden">
              <button @click="toggleFaq(i)"
                class="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition">
                <span class="font-semibold text-gray-800 text-sm pr-4">{{ faq.q }}</span>
                <svg class="w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200"
                  :class="openFaqs.has(i) ? 'rotate-180' : ''"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div v-show="openFaqs.has(i)" class="px-5 pb-4">
                <p class="text-sm text-gray-600 leading-relaxed">{{ faq.a }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── SECTION 14: RELATED CALCULATORS ─────────────── -->
      <section class="mt-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Related Calculators</h2>
          <p class="text-sm text-gray-500 mb-5">Continue your flip analysis workflow</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="/arv-calculator" class="flex gap-4 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-sm transition">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background: #1e3a5f;">
                <span class="text-white text-xs font-bold">ARV</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">ARV Calculator</p>
                <p class="text-xs text-gray-500 mt-0.5">After-Repair Value estimation using comparable sales. Use this BEFORE 70% Rule to establish accurate ARV input.</p>
              </div>
            </a>
            <a href="/fix-and-flip-calculator" class="flex gap-4 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-sm transition">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background: #f59e0b;">
                <span class="text-white text-xs font-bold">F&F</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Fix and Flip Calculator</p>
                <p class="text-xs text-gray-500 mt-0.5">Full deal analysis with financing, holding, selling costs, and precise profit projection. Use AFTER 70% Rule screening passes.</p>
              </div>
            </a>
            <a href="/brrrr-calculator" class="flex gap-4 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-sm transition">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-emerald-600">
                <span class="text-white text-xs font-bold">BRR</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">BRRRR Calculator</p>
                <p class="text-xs text-gray-500 mt-0.5">Buy-Rehab-Rent-Refi-Repeat analysis for deals too thin for flipping but viable as long-term holds.</p>
              </div>
            </a>
            <a href="/compare-real-estate-deals" class="flex gap-4 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-sm transition">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-purple-600">
                <span class="text-white text-xs font-bold">CMP</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Compare Real Estate Deals</p>
                <p class="text-xs text-gray-500 mt-0.5">Side-by-side comparison of Rental vs BRRRR vs Flip strategies for the same property.</p>
              </div>
            </a>
            <a href="/cap-rate-calculator" class="flex gap-4 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-sm transition">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-600">
                <span class="text-white text-xs font-bold">CAP</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Cap Rate Calculator</p>
                <p class="text-xs text-gray-500 mt-0.5">Capitalization rate calculation for income-producing properties. Useful for rental exit strategy analysis.</p>
              </div>
            </a>
            <a href="/hard-money-loan-calculator" class="flex gap-4 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-sm transition">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-amber-600">
                <span class="text-white text-xs font-bold">HML</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Hard Money Loan Calculator</p>
                <p class="text-xs text-gray-500 mt-0.5">Total financing cost, points, interest, and cash needed. See if your flip still works after hard money.</p>
              </div>
            </a>
            <a href="/rehab-cost-estimator" class="flex gap-4 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-sm transition">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background: #1e3a5f;">
                <span class="text-white text-xs font-bold">RCE</span>
              </div>
              <div>
                <p class="font-semibold text-gray-800 text-sm">Rehab Cost Estimator</p>
                <p class="text-xs text-gray-500 mt-0.5">Estimate renovation budget with hard/soft costs and contingency. Get accurate rehab cost before running the 70% Rule.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

    </div>

    <!-- ═══════════════════════════════════════════════
         FOOTER
    ═══════════════════════════════════════════════ -->
    <footer class="bg-white border-t border-gray-200 mt-16 py-10">
      <div class="max-w-[1100px] mx-auto px-4 text-center">
        <NuxtLink to="/" class="inline-flex items-center gap-2 mb-4">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background: #1e3a5f;">
            <span class="text-white font-extrabold text-sm">RC</span>
          </div>
          <span class="font-extrabold text-lg" style="color: #1e3a5f;">RealCalc</span>
        </NuxtLink>
        <p class="text-xs text-gray-400 max-w-2xl mx-auto mb-3">
          This 70% Rule Calculator is for educational and screening purposes only. Results are projections based on the canonical 70% Rule heuristic and are not investment advice. Always consult a licensed real estate professional, CPA, and lender before committing capital to any real estate investment.
        </p>
        <div class="flex justify-center gap-6 text-xs text-gray-400">
          <NuxtLink to="/privacy" class="hover:text-gray-600 transition">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-gray-600 transition">Terms of Use</NuxtLink>
          <NuxtLink to="/calculators" class="hover:text-gray-600 transition">All Calculators</NuxtLink>
        </div>
      </div>
    </footer>

    <!-- ═══════════════════════════════════════════════
         JSON-LD SCHEMA
    ═══════════════════════════════════════════════ -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "SoftwareApplication",
          "name": "70% Rule Calculator",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Web browser",
          "description": "Free 70% Rule Calculator for fix-and-flip investors. Screen maximum offer on any distressed property in seconds — MAO = ARV × 70% − Rehab. Includes Adjustable % and Reverse modes for wholesalers.",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "url": "https://arvcalc.com/70-percent-rule-calculator",
          "featureList": [
            "Maximum Allowable Offer (MAO) screening",
            "Canonical 70% Rule formula with explanation",
            "3 modes: Standard 70%, Adjustable %, Reverse",
            "Mode 2 adjustable percentage range 60-80% with benchmark band",
            "Mode 3 Reverse for wholesaler deal validation",
            "2026 Financing Buffer toggle (Mode 1 only, prevents double-counting)",
            "Wholesale Assignment Fee handling",
            "Two-tier rehab warnings (40% and 80% of ARV)",
            "Status Badge classification (Deep Value / Standard / Competitive / High Risk)",
            "Dual percentage display in Mode 3 (Offer % vs Implied Rule)",
            "3 scenarios (Conservative 65% / Standard 70% / Competitive 75%)",
            "Sensitivity table (Percentage × Rehab Variance)",
            "URL parameter import from ARV Calculator",
            "Direct CTAs to Fix and Flip, BRRRR, and Compare Real Estate Deals"
          ],
          "audience": { "@type": "Audience", "audienceType": "US Real Estate Investors (fix-and-flip, wholesalers, hybrid)" }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What's the difference between this and the Fix and Flip Calculator?",
              "acceptedAnswer": { "@type": "Answer", "text": "The 70% Rule Calculator is a quick screening heuristic that uses one formula to produce a Maximum Allowable Offer (MAO). The Fix and Flip Calculator is a full deal analysis tool that models specific financing rates, holding periods, selling costs, and provides a precise profit projection. Use the 70% Rule to screen MLS listings and decide which deals warrant deeper analysis. Use the Fix and Flip Calculator before committing capital on any deal that passes the screen." }
            },
            {
              "@type": "Question",
              "name": "Why is the 70% Rule specifically 70%?",
              "acceptedAnswer": { "@type": "Answer", "text": "The 30% buffer approximates: 15-20% for all transaction costs (financing ~2-4%, holding ~5-8%, selling ~6-7%) and 15-20% for the investor's profit margin. 70% is a round-number approximation that worked well in pre-2022 low-rate environments. 2026 high-rate environment with hard money at 12-14% stretches this — consider Mode 2 with 72-75% or Mode 1 with Financing Buffer enabled." }
            },
            {
              "@type": "Question",
              "name": "Why does my Status Badge show Deep Value but the Implied Rule says Standard Flip Territory?",
              "acceptedAnswer": { "@type": "Answer", "text": "These are two different metrics. Status Badge = Offer as % of ARV (MAO / ARV × 100) — how much of the property's value you're paying in cash. Implied Rule = Total investment as % of ARV ((Purchase + Rehab) / ARV × 100). Example: offer $110K, rehab $30K, ARV $200K. Offer as % = 55% (Deep Value badge). Implied Rule = 70% (Standard flip territory). Both are correct and answer different questions." }
            },
            {
              "@type": "Question",
              "name": "Can I use the 70% Rule for BRRRR?",
              "acceptedAnswer": { "@type": "Answer", "text": "BRRRR has a different cost structure — you're refinancing, not selling. Traditional 70% Rule margins don't apply directly. Use the BRRRR Calculator for refi-focused analysis. However, deals with Implied Rule ≥ 75% (aggressive for flipping) can sometimes work as BRRRR since you're holding long-term instead of selling. The calculator offers an 'Analyze as BRRRR instead' CTA in Mode 3 for this scenario." }
            },
            {
              "@type": "Question",
              "name": "What about wholesale fees?",
              "acceptedAnswer": { "@type": "Answer", "text": "If you're a wholesaler, enter your Assignment Fee in Advanced inputs. MAO then represents the seller-facing offer (after your fee is extracted). Your end-buyer pays MAO + fee, which should still fall within their 70% Rule threshold. If it doesn't, the deal isn't assignable at your fee — either reduce the fee or pass on the property." }
            },
            {
              "@type": "Question",
              "name": "When should I use 65% vs 70% vs 75%?",
              "acceptedAnswer": { "@type": "Answer", "text": "65% = conservative (slow markets, auction deals, patient investors). 70% = industry standard (balanced markets, off-market deals). 75% = aggressive (hot Sunbelt MLS, competitive bidding in 2026). Use Mode 2 with your local market's benchmark. The Sensitivity Table shows how MAO changes across these tiers at once." }
            },
            {
              "@type": "Question",
              "name": "Does the 70% Rule work with 2026 high interest rates?",
              "acceptedAnswer": { "@type": "Answer", "text": "The traditional 70% Rule was calibrated for ~5% interest rates. 2026 hard money at 12-14% eats 4-5% of ARV in financing alone — stretching the 30% buffer. Two adjustments: (1) enable Financing Buffer in Mode 1 (subtracts 3% of ARV), or (2) use Mode 2 with 72-75% to bake market conditions into your percentage. Do NOT combine both — that's double-counting." }
            },
            {
              "@type": "Question",
              "name": "My MAO is negative. Is the deal dead?",
              "acceptedAnswer": { "@type": "Answer", "text": "Negative MAO means Rehab exceeds the buffer (ARV × Percentage). Usually this signals the deal isn't a standard flip — it may be a teardown, major-rehab project, or overestimated rehab. The calculator shows an error state instead of a negative number. Options: re-verify ARV and Rehab estimates, explore as BRRRR or buy-and-hold rental instead, or pass on the deal." }
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://arvcalc.com/" },
            { "@type": "ListItem", "position": 2, "name": "Calculators", "item": "https://arvcalc.com/calculators" },
            { "@type": "ListItem", "position": 3, "name": "70% Rule Calculator", "item": "https://arvcalc.com/70-percent-rule-calculator" }
          ]
        }
      ]
    }
    </script>

  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted } from 'vue'

// ─── STATE ────────────────────────────────────────────────────────────────────
const isNavExpanded = ref(false)
const calcMode = ref('standard')
const arv = ref(null)
const rehab = ref(null)
const customPct = ref(null)
const purchasePrice = ref(null)
const wholesaleFee = ref(null)
const financingBuffer = ref(false)
const showAdvanced = ref(false)
const shareSuccess = ref(false)
const openFaqs = ref(new Set())
const triggerScenarioSave = ref(false)

// ─── URL PARAMS IMPORT ────────────────────────────────────────────────────────
onMounted(() => {
  if (typeof window === 'undefined') return
  const p = new URLSearchParams(window.location.search)
  if (p.get('arv')) arv.value = parseFloat(p.get('arv'))
  if (p.get('rehab')) rehab.value = parseFloat(p.get('rehab'))
  if (p.get('pct')) { customPct.value = parseFloat(p.get('pct')); calcMode.value = 'adjustable' }
  if (p.get('pp')) { purchasePrice.value = parseFloat(p.get('pp')); calcMode.value = 'reverse' }
  if (p.get('wf')) wholesaleFee.value = parseFloat(p.get('wf'))
  if (p.get('fb') === '1') financingBuffer.value = true
})

// ─── DERIVED / VALIDATION ─────────────────────────────────────────────────────
const hasInputs = computed(() => arv.value > 0 && rehab.value >= 0)
const activePercent = computed(() => calcMode.value === 'adjustable' ? Math.min(Math.max(customPct.value || 70, 60), 80) : 70)
const rehabPctOfArv = computed(() => arv.value > 0 && rehab.value >= 0 ? (rehab.value / arv.value) * 100 : 0)
const financingBufferAmt = computed(() => arv.value > 0 && financingBuffer.value ? arv.value * 0.03 : 0)

// MAO calculation
const baseMao = computed(() => {
  if (!arv.value || arv.value <= 0 || rehab.value < 0) return null
  const pct = activePercent.value
  let mao = arv.value * (pct / 100) - (rehab.value || 0)
  if (wholesaleFee.value > 0) mao -= wholesaleFee.value
  if (calcMode.value === 'standard' && financingBuffer.value) mao -= financingBufferAmt.value
  return mao
})

const maoValid = computed(() => baseMao.value !== null && baseMao.value > 0 && !(rehabPctOfArv.value > 80))
const hasResult = computed(() => maoValid.value || reverseValid.value)
const maoDisplay = computed(() => {
  if (!maoValid.value) return 0
  // Round to nearest $500
  return Math.round(baseMao.value / 500) * 500
})

const maoErrorMsg = computed(() => {
  if (!arv.value || arv.value <= 0) return 'ARV must be a positive number'
  if (rehab.value < 0) return 'Rehab cannot be negative'
  if (rehabPctOfArv.value > 80) return 'Extreme rehab: Rehab exceeds 80% of ARV — 70% Rule may not apply to teardown/rebuild scenarios'
  if (baseMao.value !== null && baseMao.value <= 0) return `Rehab ($${(rehab.value || 0).toLocaleString()}) exceeds available buffer (ARV × ${activePercent.value}% = $${Math.round(arv.value * activePercent.value / 100).toLocaleString()})`
  return 'Invalid inputs — check ARV and Rehab'
})

// Status Badge
const offerPctOfArv = computed(() => {
  if (!maoValid.value || !arv.value) return 0
  return (maoDisplay.value / arv.value) * 100
})

const statusTier = computed(() => {
  if (rehabPctOfArv.value > 80) return { label: 'High Risk', color: '#dc2626' }
  const pct = offerPctOfArv.value
  if (pct <= 60) return { label: 'Deep Value', color: '#16a34a' }
  if (pct <= 70) return { label: 'Standard Flip Zone', color: '#2563eb' }
  if (pct <= 75) return { label: 'Competitive Zone', color: '#d97706' }
  return { label: 'High Risk', color: '#dc2626' }
})

// Secondary metrics
const grossMargin = computed(() => {
  if (!maoValid.value) return 0
  return arv.value - maoDisplay.value - (rehab.value || 0)
})
const ruleBuffer = computed(() => {
  if (!arv.value) return 0
  return arv.value * (1 - activePercent.value / 100)
})

// Mode 3 Reverse
const reverseValid = computed(() => arv.value > 0 && rehab.value >= 0 && purchasePrice.value > 0)
const impliedPct = computed(() => {
  if (!reverseValid.value) return 0
  return ((purchasePrice.value + (rehab.value || 0)) / arv.value) * 100
})
const reverseOfferPct = computed(() => {
  if (!reverseValid.value) return 0
  return (purchasePrice.value / arv.value) * 100
})
const reverseOfferTier = computed(() => {
  const pct = reverseOfferPct.value
  if (pct <= 60) return { label: 'Deep Value', color: '#16a34a' }
  if (pct <= 70) return { label: 'Standard Flip Zone', color: '#2563eb' }
  if (pct <= 75) return { label: 'Competitive Zone', color: '#d97706' }
  return { label: 'High Risk', color: '#dc2626' }
})
const impliedBand = computed(() => {
  const pct = impliedPct.value
  if (pct < 65) return { label: 'Conservative' }
  if (pct < 70) return { label: 'Standard flip territory' }
  if (pct < 75) return { label: 'Competitive — hot market' }
  return { label: 'Aggressive — may fit BRRRR/rental' }
})

// URLs for CTAs
const fixAndFlipUrl = computed(() => {
  const params = new URLSearchParams()
  if (arv.value) params.set('arv', arv.value)
  if (rehab.value) params.set('rehab', rehab.value)
  if (maoValid.value) params.set('price', maoDisplay.value)
  return `/fix-and-flip-calculator?${params}`
})
const fixAndFlipUrlMode3 = computed(() => {
  const params = new URLSearchParams()
  if (arv.value) params.set('arv', arv.value)
  if (rehab.value) params.set('rehab', rehab.value)
  if (purchasePrice.value) params.set('price', purchasePrice.value)
  return `/fix-and-flip-calculator?${params}`
})

// ─── SCENARIO PANEL ──────────────────────────────────────────────────────────
const scenarioPanelResult = computed(() => {
  if (calcMode.value === 'reverse' && reverseValid.value) {
    return {
      badgeLabel: reverseOfferTier.value.label,
      primaryMetric: 'Implied Rule',
      primaryValue: impliedPct.value.toFixed(1) + '%',
      inputs: {
        'ARV': formatCurrency(arv.value),
        'Rehab': formatCurrency(rehab.value),
        'Purchase Price': formatCurrency(purchasePrice.value),
        'Mode': 'Reverse (Mode 3)',
      }
    }
  }
  if (maoValid.value) {
    return {
      badgeLabel: statusTier.value.label,
      primaryMetric: 'MAO',
      primaryValue: formatCurrency(maoDisplay.value),
      inputs: {
        'ARV': formatCurrency(arv.value),
        'Rehab': formatCurrency(rehab.value),
        'Rule %': activePercent.value + '%',
        'Gross Margin': formatCurrency(grossMargin.value),
      }
    }
  }
  return null
})

function openSaveScenario() {
  triggerScenarioSave.value = true
  nextTick(() => { triggerScenarioSave.value = false })
}

function onScenarioSaved(_id) {
  // no-op — panel handles display
}

// ─── SENSITIVITY TABLE ────────────────────────────────────────────────────────
const sensColLabels = [
  { key: 'minus10', label: 'Rehab −10%' },
  { key: 'base', label: 'Rehab Base' },
  { key: 'plus10', label: 'Rehab +10%' },
  { key: 'plus20', label: 'Rehab +20%' },
]
const sensitivityRows = [65, 67, 70, 72, 75].map(pct => ({ pct }))
function sensitivityCell(pct, colKey) {
  if (!arv.value || !rehab.value) return '—'
  const rehabMult = { minus10: 0.9, base: 1.0, plus10: 1.1, plus20: 1.2 }[colKey]
  const r = (rehab.value || 0) * rehabMult
  const mao = arv.value * (pct / 100) - r
  if (mao <= 0) return '—'
  return '$' + Math.round(mao / 500) * 500 / 1000 + 'K'
}
function isUserCell(pct, colKey) {
  if (!arv.value || !rehab.value) return false
  const activePct = calcMode.value === 'adjustable' ? (customPct.value || 70) : 70
  return Math.abs(pct - activePct) < 1 && colKey === 'base'
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function formatCurrency(val) {
  if (!val && val !== 0) return '—'
  const n = Math.round(val)
  return '$' + n.toLocaleString('en-US')
}

function toggleFinancingBuffer() {
  if (calcMode.value !== 'standard') return
  financingBuffer.value = !financingBuffer.value
}

function toggleFaq(idx) {
  const s = new Set(openFaqs.value)
  if (s.has(idx)) s.delete(idx)
  else s.add(idx)
  openFaqs.value = s
}

function shareResult() {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams()
  if (arv.value) params.set('arv', arv.value)
  if (rehab.value) params.set('rehab', rehab.value)
  if (calcMode.value === 'adjustable') params.set('pct', customPct.value)
  if (calcMode.value === 'reverse' && purchasePrice.value) params.set('pp', purchasePrice.value)
  if (wholesaleFee.value) params.set('wf', wholesaleFee.value)
  if (financingBuffer.value) params.set('fb', '1')
  const url = window.location.origin + window.location.pathname + '?' + params.toString()
  navigator.clipboard?.writeText(url)
  shareSuccess.value = true
  setTimeout(() => { shareSuccess.value = false }, 2000)
}

async function exportPDF() {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF()
  doc.setFillColor(30, 58, 95)
  doc.rect(0, 0, 210, 45, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(10)
  doc.text('RealCalc — 70% Rule Calculator', 14, 12)
  doc.setFontSize(8)
  doc.text('MAXIMUM ALLOWABLE OFFER (MAO)', 14, 22)
  doc.setFontSize(22)
  const heroVal = calcMode.value === 'reverse'
    ? (reverseValid.value ? `${impliedPct.value.toFixed(1)}% Implied Rule` : 'Enter all fields')
    : (maoValid.value ? formatCurrency(maoDisplay.value) : 'Not viable')
  doc.text(heroVal, 14, 36)
  doc.setTextColor(30, 58, 95)
  doc.setFontSize(10)
  let y = 55
  doc.text(`Mode: ${calcMode.value === 'standard' ? 'Standard 70%' : calcMode.value === 'adjustable' ? `Adjustable ${customPct.value}%` : 'Reverse'}`, 14, y); y += 7
  if (arv.value) { doc.text(`ARV: ${formatCurrency(arv.value)}`, 14, y); y += 7 }
  if (rehab.value) { doc.text(`Rehab Budget: ${formatCurrency(rehab.value)}`, 14, y); y += 7 }
  if (maoValid.value) {
    doc.text(`MAO: ${formatCurrency(maoDisplay.value)}`, 14, y); y += 7
    doc.text(`Status: ${statusTier.value.label}`, 14, y); y += 7
    doc.text(`Offer as % of ARV: ${offerPctOfArv.value.toFixed(1)}%`, 14, y); y += 7
    doc.text(`Gross Margin (Pre-Cost Buffer): ${formatCurrency(grossMargin.value)}`, 14, y); y += 7
    doc.text(`Rule Buffer (Profit + Costs): ${formatCurrency(ruleBuffer.value)}`, 14, y); y += 7
  }
  y += 5
  doc.setFontSize(8)
  doc.text('This is a screening heuristic — not a substitute for full analysis in Fix and Flip Calculator.', 14, y)
  doc.save('70-percent-rule-mao.pdf')
}

// ─── STATIC CONTENT ───────────────────────────────────────────────────────────
const strategies = [
  {
    title: 'Beginner Flipper (1–3 deals)',
    body: 'Start with Mode 1 Standard 70% as your default screen, and enable the Financing Buffer since you likely use hard money at 12–14% rates. Only pursue deals where the Status Badge shows Green (Deep Value) or Blue (Standard Flip Zone). Always run the Fix and Flip Calculator before making the offer — don\'t rely on the 70% Rule alone for your first few deals.'
  },
  {
    title: 'Experienced Flipper (10+ deals)',
    body: 'Use Mode 2 Adjustable % with your local market\'s benchmark (72–75% for Sunbelt, 65–70% for Midwest). Skip the Financing Buffer in Mode 2 since your custom % already accounts for market conditions. Use the Status Badge as a quick visual filter for deal sourcing — pass on deals showing Red "High Risk." The Fix and Flip Calculator is still useful for precise profit projection, but the 70% Rule becomes your primary MLS and wholesaler screening tool.'
  },
  {
    title: 'Wholesaler',
    body: 'Use Mode 3 Reverse to validate if an end-buyer\'s 70% Rule will accept your assignable price. Enter your property-under-contract price, Rehab estimate, and ARV to see the Implied Rule. If Implied Rule ≥ 75%, your deal is thin for flippers — it may only be assignable to BRRRR or rental investors. Use Mode 1 with Wholesale Assignment Fee to work backward: how much to offer the seller so your margin and the end-buyer\'s 70% Rule both work.'
  },
  {
    title: 'Real Estate Agent / Advisor',
    body: 'Use the 70% Rule to set realistic expectations with investor clients and distressed-property sellers. Show the Status Badge tiers to explain why investor offers typically fall 55–70% of ARV, not "full market value." Use Mode 2\'s benchmark band (65/70/75%) to communicate local market competitiveness to sellers considering investor offers. Always redirect clients to the Fix and Flip Calculator for full deal underwriting before proceeding.'
  },
  {
    title: 'Hybrid Investor (Flip + BRRRR + Rental)',
    body: 'Use Mode 3 Reverse to classify deals by Implied Rule — deals with Implied ≥ 75% shift from flip analysis to BRRRR or rental analysis. Use the "Analyze as BRRRR instead" CTA to pivot high-implied deals into the BRRRR Calculator. Use Compare Real Estate Deals to test the same deal across all three strategies (Flip vs BRRRR vs Rental). For this investor type, the 70% Rule is a strategy selection tool, not just a flip screen.'
  }
]

const applications = [
  {
    title: 'Quick MLS Screening',
    body: 'When evaluating distressed MLS listings, enter ARV and estimated Rehab to see if the list price falls within a viable offer range. If the screened MAO is significantly below list price, the deal likely isn\'t worth pursuing — move on quickly and preserve your analysis time for deals that pencil.'
  },
  {
    title: 'Wholesaler Deal Validation',
    body: 'Use Mode 3 Reverse to check if your under-contract property is assignable at your target price. If the Implied Rule exceeds 75%, end-buyers (fix-and-flip investors) likely won\'t take the deal without a price reduction — either renegotiate or pivot to BRRRR-type buyers.'
  },
  {
    title: 'Auction / Foreclosure Maximum Bid',
    body: 'Before an auction, compute MAO at 65% (Conservative) to set your absolute maximum bid. Walk away if bidding exceeds MAO — auction psychology often pushes otherwise-disciplined investors into thin-margin deals that look competitive in the room but don\'t pencil on paper.'
  },
  {
    title: 'Off-Market Seller Education',
    body: 'When negotiating directly with distressed sellers, the 70% Rule calculation explains transparently why you can\'t pay closer to ARV. Showing the formula and the cost breakdown builds trust and often accelerates negotiations more effectively than simply presenting a low offer number.'
  },
  {
    title: 'Portfolio Deal Flow Screening',
    body: 'Run every incoming deal through the 70% Rule as a first-pass filter. Only deals passing the screen (Green or Blue Status Badge) advance to the Fix and Flip Calculator for full analysis. This saves hours on deals that will never pencil, letting you focus your modeling time on genuine opportunities.'
  }
]

const limitations = [
  {
    title: 'Screening heuristic, not full deal analysis',
    body: 'The 70% Rule embeds generalized cost assumptions; your actual financing, holding, and selling costs may differ significantly. High-rate environments (2026 hard money 12–14%) stretch the embedded profit margin beyond realistic levels for many deals. Always validate with the Fix and Flip Calculator before committing capital — this is not a substitute for professional deal analysis. For tax or financing specifics, consult a CPA and licensed lender.'
  },
  {
    title: 'Does not model holding time',
    body: '70% Rule assumes a typical 4–6 month flip hold. Longer holds (slow markets, permit delays, contractor issues) inflate holding costs beyond the 30% buffer. Fix and Flip Calculator models exact hold time and its cost implications. If your market has 12+ month resale times, adjust Custom % down to 65% or below to maintain adequate margin.'
  },
  {
    title: 'Assumes typical rehab scope',
    body: '70% Rule works best for cosmetic to moderate rehab (0–30% of ARV). Heavy rehab (30–40%) stretches the margins — the calculator flags this with an amber warning. Extensive rehab (40–80%) may still be viable but requires full analysis rather than relying on this screening tool. Teardown/rebuild scenarios (>80% ARV) break the rule entirely — use a different valuation framework.'
  },
  {
    title: 'ARV accuracy determines result accuracy',
    body: 'A 10% ARV error translates to a 7% MAO error. Overestimating ARV — the most common investor mistake — leads to overpaying. Use the ARV Calculator with 3–5 recent comparable sales for confidence. A low-confidence ARV is itself a risk factor that the calculator cannot model internally.'
  },
  {
    title: 'Market conditions can invalidate the 30% buffer',
    body: 'Hot markets requiring 75%+ offers erode the profit margin from the high side. Slow markets with extended hold times erode it from the cost side. The 70% figure is a mid-cycle benchmark; extreme markets at either end require adjusted frameworks. Use Mode 2 Adjustable % with local market data instead of defaulting mechanically to 70%.'
  },
  {
    title: 'Not a substitute for professional advice',
    body: 'This is an educational and screening tool, not investment advice. Before committing capital: consult a CPA for tax specifics, an attorney for contracts and entity structure, a licensed lender for actual financing terms, and a licensed contractor for accurate rehab scope and cost. The MAO output is a screening projection, not a commitment.'
  }
]

const commonMistakes = [
  {
    title: 'Overestimating ARV',
    body: 'The most common error: investors anchor on the best recent comp rather than the median of 3–5 comps in comparable condition. Overestimating ARV by 10% inflates MAO by 7%, turning marginal deals into seemingly viable ones. Use the ARV Calculator with multiple comparables to build a defensible estimate.'
  },
  {
    title: 'Underestimating Rehab',
    body: 'The second most common error — forgetting permits, unforeseen structural issues, labor cost inflation (up 15–25% since 2021), or the 10–15% contingency buffer that experienced investors always include. Underestimated rehab shrinks actual margin while the 70% Rule still shows "viable." Get real contractor bids, not online estimator guesses.'
  },
  {
    title: 'Treating 70% as a law of nature',
    body: '70% is a mid-cycle benchmark, not gospel. Competitive 2026 Sunbelt markets require 72–75%. Slow rural markets may support 65%. Using 70% rigidly in a competitive market means you\'ll lose every bid to investors who know their local benchmarks. Use Mode 2 with your local market data.'
  },
  {
    title: 'Double-counting financing costs',
    body: 'Applying the Financing Buffer (Mode 1) AND using a Custom % (Mode 2) both account for financing — doing both double-counts. The calculator prevents this by disabling the Financing Buffer in Mode 2, but understand the principle: choose one adjustment method, not both. Custom % already bakes in your market and rate assumptions.'
  },
  {
    title: 'Relying on 70% Rule alone for commitment',
    body: 'The 70% Rule is a first-pass screen, not full underwriting. Before signing a purchase agreement, run the deal through the Fix and Flip Calculator to model your specific financing rate, holding period, and selling costs. Screening saves time; thorough analysis saves capital. Many deals that pass the 70% screen fail when real financing costs are modeled at 2026 rates.'
  }
]

const faqs = [
  {
    q: 'What\'s the difference between this and the Fix and Flip Calculator?',
    a: 'The 70% Rule Calculator is a quick screening heuristic — one formula, one output (Maximum Allowable Offer). The Fix and Flip Calculator is a full deal analysis tool with specific financing rates, holding periods, selling costs, and precise profit projections. Use the 70% Rule to screen MLS listings and decide which deals warrant deeper analysis. Use the Fix and Flip Calculator before committing capital on any deal that passes the screen. The 70% Rule is not a substitute for the Fix and Flip Calculator — it\'s the first step that identifies which deals are worth the effort of a full analysis.'
  },
  {
    q: 'Why is the 70% Rule "70%" specifically?',
    a: 'The 30% buffer approximates: 15–20% for all transaction costs (financing ~2–4%, holding ~5–8%, selling ~6–7%) and 15–20% for the investor\'s profit margin. 70% is a round-number approximation that worked well in pre-2022 low-rate environments. In 2026 with hard money at 12–14%, the embedded profit margin is stretched. Consider Mode 2 with 72–75% or Mode 1 with the Financing Buffer enabled to adjust for current conditions.'
  },
  {
    q: 'Why does my Status Badge show "Deep Value" but the Implied Rule says "Standard Flip Territory"?',
    a: 'These are two different metrics measuring different things. Status Badge = Offer as % of ARV (MAO / ARV × 100) — how much of the property\'s value you\'re paying in the purchase price alone. Implied Rule = Total investment as % of ARV ((Purchase + Rehab) / ARV × 100) — your total capital outlay as a percentage of the property\'s future value. Example: offer $110K, rehab $30K, ARV $200K. Offer as % = 55% (Deep Value badge). Implied Rule = 70% (Standard flip territory). Both are correct. They answer different questions and can classify the same deal differently.'
  },
  {
    q: 'Can I use the 70% Rule for BRRRR?',
    a: 'BRRRR has a fundamentally different cost structure — you\'re refinancing and holding, not selling. Traditional 70% Rule margins don\'t translate directly. Use the BRRRR Calculator for refi-focused analysis. That said, deals with an Implied Rule ≥ 75% (too aggressive for flipping) can sometimes work as BRRRR since you\'re holding long-term instead of paying selling costs. The calculator includes an "Analyze as BRRRR instead" CTA in Mode 3 for exactly this scenario.'
  },
  {
    q: 'What about wholesale fees?',
    a: 'If you\'re a wholesaler, enter your Assignment Fee in the Advanced inputs. MAO then represents the price you offer the seller (after your fee is extracted). Your end-buyer pays MAO + fee, which should still fall within their 70% Rule threshold. If it doesn\'t, the deal isn\'t assignable at your fee — either reduce the fee or pass on the property. Mode 3 is particularly useful for validating the end-buyer\'s perspective before you put a property under contract.'
  },
  {
    q: 'When should I use 65% vs 70% vs 75%?',
    a: '65% = conservative (slow markets, auction deals, patient investors needing wide margin). 70% = industry standard (balanced markets, off-market deals). 75% = aggressive (hot Sunbelt MLS, competitive bidding in 2026 markets). Use Mode 2 with your local market\'s benchmark. The Sensitivity Table shows how MAO changes across all these tiers simultaneously for your current inputs.'
  },
  {
    q: 'Does the 70% Rule work in 2026 with high interest rates?',
    a: 'The traditional 70% Rule was calibrated for ~5% interest rate environments. In 2026 with hard money at 12–14%, financing alone eats 4–5% of ARV on a typical 4–6 month hold, significantly stretching the 30% buffer. Two adjustments available: (1) enable the Financing Buffer in Mode 1 (subtracts 3% of ARV), or (2) use Mode 2 with 72–75% to bake market conditions into your percentage threshold. Do NOT combine both — that double-counts financing costs and artificially deflates your MAO.'
  },
  {
    q: 'My MAO is negative. Is the deal dead?',
    a: 'A negative MAO means Rehab exceeds the buffer (ARV × Percentage). This typically signals the deal isn\'t a standard flip — it\'s likely a teardown, major-rehab project, or more commonly, overestimated rehab. The calculator shows an error state instead of displaying a misleading negative number. Your options: (1) re-verify your ARV estimate with fresh comparables, (2) re-verify your Rehab estimate with real contractor bids, (3) explore the property as a BRRRR or buy-and-hold rental instead, or (4) pass on the deal. The error state is informative — it\'s not a calculator bug.'
  }
]
</script>

<style>
/* No custom CSS — TailwindCSS only */
</style>
