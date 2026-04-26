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
            <li class="text-gray-700 font-semibold">Compare Real Estate Deals</li>
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
          <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full mb-3" style="background: #fef3c7; color: #92400e;">
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            Free Decision Engine
          </span>
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            Compare Real Estate Deals Calculator — Rental vs Flip vs BRRRR Side-by-Side
          </h1>
        </div>
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Calculator</a></li>
            <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Overview</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">How to Use</a></li>
            <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Inputs &amp; Outputs</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Formula</a></li>
            <li><a href="#what-is" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">What Is</a></li>
            <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Result Meaning</a></li>
            <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Benchmarks</a></li>
            <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Strategy</a></li>
            <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Applications</a></li>
            <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Industry Standards</a></li>
            <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Limitations</a></li>
            <li><a href="#common-mistakes" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Common Mistakes</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">FAQ</a></li>
          </ul>
          <div class="md:hidden">
            <ul class="flex flex-col gap-y-2">
              <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Calculator</a></li>
              <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Overview</a></li>
              <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">How to Use</a></li>
            </ul>
            <ul v-show="isNavExpanded" class="flex flex-col gap-y-2 mt-2">
              <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Inputs &amp; Outputs</a></li>
              <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Formula</a></li>
              <li><a href="#what-is" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">What Is</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Result Meaning</a></li>
              <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Benchmarks</a></li>
              <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Strategy</a></li>
              <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">Limitations</a></li>
              <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-indigo-700 transition">FAQ</a></li>
            </ul>
            <button @click="isNavExpanded = !isNavExpanded"
              class="mt-2 flex items-center gap-1 text-xs font-bold transition" style="color: #4338ca;">
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
         MOBILE STICKY BAR
    ═══════════════════════════════════════════════ -->
    <div class="lg:hidden sticky top-[4.5rem] z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <div class="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <svg class="w-4 h-4 flex-shrink-0 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          <span v-if="calcMode === 'compare'">Compare Deals</span>
          <span v-else-if="calcMode === 'break-even'">Find Break-Even</span>
          <span v-else>Deal Screening</span>
        </div>
        <div class="flex items-center gap-3">
          <template v-if="calcMode === 'compare'">
            <span v-if="winnerResult" class="text-sm font-extrabold leading-none"
              :class="winnerTierClass(winnerResult.tier)">
              {{ winnerResult.tier }}
            </span>
            <span v-else class="text-sm font-bold text-gray-300">Enter deals below</span>
          </template>
          <template v-else-if="calcMode === 'break-even'">
            <span v-if="breakEvenResult !== null" class="text-xl font-extrabold leading-none text-blue-700">
              {{ formatCurrency(breakEvenResult) }}
            </span>
            <span v-else class="text-sm font-bold text-gray-300">Configure below</span>
          </template>
          <template v-else>
            <span v-if="screeningReady" class="text-sm font-extrabold text-emerald-700">
              {{ screeningPassCount }}/{{ activeDealCount }} Pass
            </span>
            <span v-else class="text-sm font-bold text-gray-300">Set criteria below</span>
          </template>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         MAIN CALCULATOR
    ═══════════════════════════════════════════════ -->
    <main id="calculator" class="max-w-[1100px] mx-auto px-4 pt-8 pb-10">
      <div class="rounded-3xl p-[3px]" style="background: linear-gradient(135deg, #1e3a5f 0%, #6366f1 50%, #1e3a5f 100%);">
      <div class="bg-white rounded-[21px] shadow-xl shadow-slate-200/60" style="overflow: clip;">

      <!-- ═══ MODE SELECTOR ═══ -->
      <div class="border-b border-gray-100 rounded-t-2xl bg-white">
        <div class="px-5 pt-4 pb-3">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">What do you want to do?</p>
          <div class="grid grid-cols-3 gap-2">
            <!-- Mode 1: Compare Deals -->
            <button @click="calcMode = 'compare'"
              class="rounded-xl border-2 px-3 py-3 text-left transition"
              :class="calcMode === 'compare' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 bg-white hover:border-gray-300'">
              <span class="block text-xs font-bold leading-tight" :class="calcMode === 'compare' ? 'text-indigo-900' : 'text-gray-700'">Compare Deals</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'compare' ? 'text-indigo-600' : 'text-gray-400'">Side-by-side Winner</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'compare' ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-400'">Default</span>
            </button>
            <!-- Mode 2: Find Break-Even -->
            <button @click="calcMode = 'break-even'"
              class="rounded-xl border-2 px-3 py-3 text-left transition"
              :class="calcMode === 'break-even' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'">
              <span class="block text-xs font-bold leading-tight" :class="calcMode === 'break-even' ? 'text-blue-900' : 'text-gray-700'">Find Break-Even</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'break-even' ? 'text-blue-600' : 'text-gray-400'">Reverse-solve a variable</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'break-even' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-400'">Reverse</span>
            </button>
            <!-- Mode 3: Deal Screening -->
            <button @click="calcMode = 'screening'"
              class="rounded-xl border-2 px-3 py-3 text-left transition"
              :class="calcMode === 'screening' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 bg-white hover:border-gray-300'">
              <span class="block text-xs font-bold leading-tight" :class="calcMode === 'screening' ? 'text-emerald-900' : 'text-gray-700'">Deal Screening</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'screening' ? 'text-emerald-600' : 'text-gray-400'">Filter by criteria</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'screening' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-400'">Filter</span>
            </button>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           MODE 1: COMPARE DEALS (INDIGO)
      ═══════════════════════════════════════════════ -->
      <div v-if="calcMode === 'compare'" class="p-5">

        <!-- GLOBAL MARKET ASSUMPTIONS -->
        <div class="mb-5 rounded-2xl border border-indigo-100 bg-indigo-50/40 p-4">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-sm font-bold text-indigo-900">Global Market Assumptions</h3>
            <span class="text-xs text-indigo-600 font-medium">Applied to all deals by default</span>
          </div>
          <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">Annual Appreciation %</label>
              <input v-model.number="globalAppreciation" type="number" step="0.1" min="0" max="20"
                class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold text-gray-800 transition"
                placeholder="Enter appreciation rate" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">Annual Rent Growth %</label>
              <input v-model.number="globalRentGrowth" type="number" step="0.1" min="0" max="20"
                class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold text-gray-800 transition"
                placeholder="Enter rent growth rate" />
            </div>
            <div class="flex items-end col-span-2">
              <label class="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" v-model="advancedMarketMode" class="w-4 h-4 rounded text-indigo-600" />
                <span class="text-xs font-semibold text-gray-700">Advanced: per-deal market overrides</span>
              </label>
            </div>
          </div>
          <div v-if="advancedMarketMode" class="mt-3 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-xs text-amber-800 font-medium">
            <strong>Warning:</strong> You are using different market assumptions across deals. This may produce biased comparison results. Use only with market-specific justification (e.g., Austin 5% vs Cleveland 2%).
          </div>
        </div>

        <!-- DEAL COUNT SELECTOR -->
        <div class="flex items-center gap-3 mb-4">
          <span class="text-sm font-semibold text-gray-700">Compare</span>
          <div class="flex gap-2">
            <button @click="dealCount = 2"
              class="px-4 py-1.5 rounded-lg text-sm font-bold border-2 transition"
              :class="dealCount === 2 ? 'border-indigo-500 bg-indigo-50 text-indigo-800' : 'border-gray-200 text-gray-500 hover:border-gray-300'">
              2 Deals
            </button>
            <button @click="dealCount = 3"
              class="px-4 py-1.5 rounded-lg text-sm font-bold border-2 transition"
              :class="dealCount === 3 ? 'border-indigo-500 bg-indigo-50 text-indigo-800' : 'border-gray-200 text-gray-500 hover:border-gray-300'">
              3 Deals
            </button>
          </div>
          <span class="text-sm text-gray-400">side-by-side</span>
        </div>

        <!-- URL IMPORT WARNINGS -->
        <div v-if="importWarnings.length > 0" class="mb-4 rounded-xl bg-amber-50 border border-amber-200 p-3">
          <p class="text-xs font-bold text-amber-800 mb-1">Import Notice</p>
          <ul class="list-disc list-inside text-xs text-amber-700 space-y-0.5">
            <li v-for="w in importWarnings" :key="w">{{ w }}</li>
          </ul>
        </div>

        <!-- DEAL INPUT CARDS (3-col on lg) -->
        <div class="grid gap-4" :class="dealCount === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'">
          <div v-for="(deal, idx) in deals.slice(0, dealCount)" :key="idx"
            class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <!-- Deal header -->
            <div class="flex items-center justify-between mb-3">
              <input v-model="deal.label" type="text"
                class="text-sm font-bold text-indigo-900 bg-transparent border-b border-dashed border-indigo-300 focus:outline-none focus:border-indigo-600 w-28"
                :placeholder="`Deal ${idx+1}`" />
              <!-- Strategy selector -->
              <div class="flex gap-1">
                <button v-for="s in strategies" :key="s.value" @click="deal.strategy = s.value"
                  class="text-xs px-2 py-1 rounded-lg font-semibold border transition"
                  :class="deal.strategy === s.value ? s.activeClass : 'border-gray-200 text-gray-400 hover:border-gray-300'">
                  {{ s.label }}
                </button>
              </div>
            </div>

            <!-- RENTAL INPUTS -->
            <div v-if="deal.strategy === 'rental'" class="space-y-3">
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Purchase Price</label>
                  <input v-model.number="deal.purchase" type="number" step="1000"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter purchase price" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Down Payment %</label>
                  <input v-model.number="deal.downPayment" type="number" step="1" min="0" max="100"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter down payment %" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Closing Costs %</label>
                  <input v-model.number="deal.closingCosts" type="number" step="0.1" min="0" max="10"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter closing costs %" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Loan Rate %</label>
                  <input v-model.number="deal.loanRate" type="number" step="0.1" min="0" max="20"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter loan rate %" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Monthly Rent</label>
                  <input v-model.number="deal.monthlyRent" type="number" step="50"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter monthly rent" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Vacancy %</label>
                  <input v-model.number="deal.vacancy" type="number" step="1" min="0" max="50"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter vacancy %" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Operating Expense %</label>
                  <input v-model.number="deal.opex" type="number" step="1" min="0" max="80"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter operating expense %" />
                </div>
                <div v-if="advancedMarketMode">
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Appreciation Override %</label>
                  <input v-model.number="deal.appreciationOverride" type="number" step="0.1"
                    class="w-full rounded-xl border-2 border-amber-300 hover:border-amber-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Per-deal override" />
                </div>
              </div>
            </div>

            <!-- FIX AND FLIP INPUTS -->
            <div v-else-if="deal.strategy === 'flip'" class="space-y-3">
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Purchase Price</label>
                  <input v-model.number="deal.purchase" type="number" step="1000"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter purchase price" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Rehab Budget</label>
                  <input v-model.number="deal.rehab" type="number" step="1000"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter rehab budget" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">ARV (After Repair Value)</label>
                  <input v-model.number="deal.arv" type="number" step="1000"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter ARV" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Hold Period (months)</label>
                  <input v-model.number="deal.holdPeriod" type="number" step="1" min="1" max="36"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter hold period" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Selling Cost %</label>
                  <input v-model.number="deal.sellingCost" type="number" step="0.5" min="0" max="15"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter selling cost %" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">HM Rate %</label>
                  <input v-model.number="deal.hmRate" type="number" step="0.5" min="0" max="25"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter hard money rate %" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Monthly Holding Cost</label>
                  <input v-model.number="deal.holdingCosts" type="number" step="50"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter monthly holding cost" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">HM Points %</label>
                  <input v-model.number="deal.hmPoints" type="number" step="0.5" min="0" max="10"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter HM points %" />
                </div>
              </div>
              <!-- Flip Mode Selector -->
              <div class="rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p class="text-xs font-bold text-gray-600 mb-2">Flip Mode</p>
                <div class="flex gap-2 flex-wrap">
                  <button @click="deal.flipMode = 'reinvest'"
                    class="text-xs px-2.5 py-1 rounded-lg font-semibold border transition"
                    :class="deal.flipMode === 'reinvest' ? 'border-indigo-500 bg-indigo-50 text-indigo-800' : 'border-gray-200 text-gray-500'">
                    Mode A: Reinvestment
                  </button>
                  <button @click="deal.flipMode = 'degradation'"
                    class="text-xs px-2.5 py-1 rounded-lg font-semibold border transition"
                    :class="deal.flipMode === 'degradation' ? 'border-amber-500 bg-amber-50 text-amber-800' : 'border-gray-200 text-gray-500'">
                    Mode C: ROI Compression
                  </button>
                  <button @click="deal.flipMode = 'single'"
                    class="text-xs px-2.5 py-1 rounded-lg font-semibold border transition"
                    :class="deal.flipMode === 'single' ? 'border-purple-500 bg-purple-50 text-purple-800' : 'border-gray-200 text-gray-500'">
                    Single Flip (IRR)
                  </button>
                </div>
                <div v-if="deal.flipMode === 'degradation'" class="mt-2">
                  <label class="block text-xs font-semibold text-gray-600 mb-1">ROI Degradation per cycle %</label>
                  <input v-model.number="deal.roiDegradation" type="number" step="1" min="0" max="15"
                    class="w-full rounded-xl border-2 border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter degradation % (default 7)" />
                </div>
                <div v-if="deal.flipMode !== 'single'" class="mt-1 text-xs text-amber-700 italic">
                  Assumes 100% reinvestment into identical flips. Toggle Mode C for realistic ROI compression.
                </div>
              </div>
            </div>

            <!-- BRRRR INPUTS -->
            <div v-else-if="deal.strategy === 'brrrr'" class="space-y-3">
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Purchase Price</label>
                  <input v-model.number="deal.purchase" type="number" step="1000"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter purchase price" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Rehab Budget</label>
                  <input v-model.number="deal.rehab" type="number" step="1000"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter rehab budget" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">ARV</label>
                  <input v-model.number="deal.arv" type="number" step="1000"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter ARV" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Seasoning Period (mo)</label>
                  <input v-model.number="deal.seasoning" type="number" step="1" min="1" max="24"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter seasoning months" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Refi LTV %</label>
                  <input v-model.number="deal.refiLtv" type="number" step="1" min="50" max="90"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter refi LTV %" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Refi Rate %</label>
                  <input v-model.number="deal.refiRate" type="number" step="0.1" min="0" max="15"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter refi rate %" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Monthly Rent</label>
                  <input v-model.number="deal.monthlyRent" type="number" step="50"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter monthly rent" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Vacancy %</label>
                  <input v-model.number="deal.vacancy" type="number" step="1" min="0" max="50"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter vacancy %" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Operating Expense %</label>
                  <input v-model.number="deal.opex" type="number" step="1" min="0" max="80"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter operating expense %" />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">HM Points %</label>
                  <input v-model.number="deal.hmPoints" type="number" step="0.5" min="0" max="10"
                    class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Enter HM points %" />
                </div>
                <div v-if="advancedMarketMode">
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Appreciation Override %</label>
                  <input v-model.number="deal.appreciationOverride" type="number" step="0.1"
                    class="w-full rounded-xl border-2 border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/40 px-3 py-2 text-sm font-semibold transition"
                    placeholder="Per-deal override" />
                </div>
              </div>
            </div>

            <!-- ARV Confidence (when imported) -->
            <div v-if="deal.arvConfidence" class="mt-2 rounded-lg px-3 py-2 text-xs font-semibold"
              :class="deal.arvConfidence === 'HIGH' ? 'bg-emerald-50 text-emerald-700' : deal.arvConfidence === 'LOW' ? 'bg-red-50 text-red-700' : 'bg-amber-50 text-amber-700'">
              ARV Confidence: {{ deal.arvConfidence }}
              <span v-if="deal.arvConfidence === 'LOW'"> — Risk Score reduced: ARV estimate has LOW confidence, Total Return is highly sensitive to this input.</span>
            </div>
          </div>
        </div>

        <!-- ═══ RESULTS SECTION ═══ -->
        <div v-if="compareResults.length > 0 && compareResults.every(r => r.valid)" class="mt-6">

          <!-- NORMALIZATION INVALID BANNER -->
          <div v-if="compareResults.some(r => !r.normalizationValid)" class="mb-4 rounded-xl bg-red-50 border border-red-200 p-4">
            <p class="text-sm font-bold text-red-800 mb-1">Calculation Inconsistency Detected</p>
            <p v-for="(r, i) in compareResults" :key="i" v-if="!r.normalizationValid" class="text-xs text-red-700">
              {{ r.label }} has a calculation inconsistency. Please verify inputs. (Invariant gap: {{ formatCurrency(r.invariantGap) }})
            </p>
            <p class="text-xs text-red-600 mt-1">Winner tier will not be displayed until all deals pass validation.</p>
          </div>

          <!-- WINNER BANNER -->
          <div v-if="compareResults.every(r => r.normalizationValid) && winnerResult" class="mb-5">
            <div class="rounded-2xl p-5 border-2"
              :class="winnerResult.tier === 'Clear Winner' ? 'border-emerald-500 bg-emerald-50' :
                      winnerResult.tier === 'Slight Edge' ? 'border-amber-400 bg-amber-50' :
                      'border-gray-300 bg-gray-50'">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                      :class="winnerResult.tier === 'Clear Winner' ? 'bg-emerald-500 text-white' :
                              winnerResult.tier === 'Slight Edge' ? 'bg-amber-400 text-white' :
                              'bg-gray-400 text-white'">
                      {{ winnerResult.tier === 'Too Close to Call' || winnerResult.tier === 'Cluster Detected' ? winnerResult.tier : winnerResult.tier }}
                    </span>
                  </div>
                  <p v-if="winnerResult.winnerIdx !== null" class="text-lg font-extrabold text-gray-900">
                    {{ compareResults[winnerResult.winnerIdx].label }}
                    <span class="text-sm font-normal text-gray-500 ml-1">({{ compareResults[winnerResult.winnerIdx].strategy }})</span>
                  </p>
                  <p v-if="winnerResult.winnerIdx !== null && winnerResult.tier !== 'Too Close to Call' && winnerResult.tier !== 'Cluster Detected'"
                    class="text-sm text-gray-700 mt-1">
                    <strong>{{ compareResults[winnerResult.winnerIdx].annualizedReturn.toFixed(1) }}%</strong> vs
                    <span v-for="(r, i) in compareResults.filter((_, ri) => ri !== winnerResult.winnerIdx)" :key="i">
                      <strong>{{ r.annualizedReturn.toFixed(1) }}%</strong>{{ i < compareResults.filter((_, ri) => ri !== winnerResult.winnerIdx).length - 1 ? ', ' : '' }}
                    </span>
                    annualized
                    <span class="text-xs text-gray-400 ml-1">({{ formatCurrency(compareResults[winnerResult.winnerIdx].totalReturn) }} Total Return)</span>
                  </p>
                  <p v-if="winnerResult.tier === 'Too Close to Call'" class="text-sm text-gray-600 mt-1">
                    Annualized Return difference is within statistical noise. Financial analysis alone cannot discriminate. Choose based on non-financial factors.
                  </p>
                  <p v-if="winnerResult.tier === 'Cluster Detected'" class="text-sm text-gray-600 mt-1">
                    All three deals fall within a tight Annualized Return and Composite Score band. No statistically meaningful Winner can be determined.
                  </p>
                  <!-- Extreme Flip downgrade note -->
                  <p v-if="winnerResult.extremeFlipDowngrade" class="text-xs text-amber-700 mt-2 font-semibold">
                    Projection depends on aggressive compounding — see warning on {{ winnerResult.extremeFlipDeal }}. Without sustained execution at this ROI level, runner-up deals may outperform.
                  </p>
                </div>
              </div>
            </div>

            <!-- Highest Return not Highest Score badge -->
            <div v-if="winnerResult.highestReturnNotHighestScore && winnerResult.winnerIdx !== null"
              class="mt-2 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
              <div class="flex items-start gap-2">
                <svg class="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <p class="text-xs font-bold text-amber-800">Highest Return, not Highest Score</p>
                  <p class="text-xs text-amber-700 mt-0.5">
                    This deal wins on annualized return.
                    {{ winnerResult.higherScoreDeal }} scores higher on Composite Score due to {{ winnerResult.higherScoreReason }}.
                    Composite Score is a tie-breaker — when one deal leads on return by a wider margin, it takes the Winner label regardless.
                  </p>
                </div>
              </div>
            </div>

            <!-- Mixed IRR + CAGR note -->
            <div v-if="mixedAnnualizationMethods && !mixedMethodDismissed"
              class="mt-2 rounded-xl bg-blue-50 border border-blue-200 px-4 py-3">
              <div class="flex items-start justify-between gap-2">
                <div class="flex items-start gap-2">
                  <svg class="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                  <div>
                    <p class="text-xs font-bold text-blue-800">Mixed annualization methods in this comparison</p>
                    <p class="text-xs text-blue-700 mt-0.5">IRR for single flips (reflects one-deal true return rate) • 5Y CAGR for multi-year holds and flip reinvestment chains. Comparison is normalized to annual-rate terms, but the underlying cash-flow timing differs.</p>
                  </div>
                </div>
                <button @click="mixedMethodDismissed = true" class="text-xs text-blue-600 font-semibold whitespace-nowrap hover:text-blue-800">Got it</button>
              </div>
            </div>
          </div>

          <!-- DEAL RESULT CARDS -->
          <div class="grid gap-4 mb-6" :class="compareResults.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'">
            <div v-for="(result, idx) in sortedResultsForDisplay" :key="result.dealIdx"
              class="rounded-2xl border-2 p-4 transition"
              :class="getDealCardClass(result, winnerResult)">

              <!-- Winner badge -->
              <div class="relative">
                <div v-if="winnerResult && winnerResult.winnerIdx === result.dealIdx && winnerResult.tier !== 'Too Close to Call' && winnerResult.tier !== 'Cluster Detected'"
                  class="absolute -top-2 -right-2 text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500 text-white shadow">
                  WINNER
                </div>

                <!-- Deal label + strategy -->
                <div class="mb-3">
                  <p class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-0.5">{{ result.strategyLabel }}</p>
                  <p class="text-base font-extrabold" :class="isWinnerCard(result, winnerResult) ? 'text-gray-900' : 'text-gray-700'">
                    {{ result.label }}
                  </p>
                </div>

                <!-- DUAL PRIMARY METRICS -->
                <div class="mb-3">
                  <div class="rounded-xl p-3" :class="isWinnerCard(result, winnerResult) ? 'bg-indigo-50' : 'bg-gray-50'">
                    <!-- Total Return -->
                    <div class="mb-2">
                      <p class="text-xs font-semibold text-gray-400 mb-0.5">5-Year Total Return</p>
                      <p class="font-extrabold leading-tight"
                        :class="[isWinnerCard(result, winnerResult) ? 'text-2xl' : 'text-xl', result.totalReturn >= 0 ? 'text-gray-900' : 'text-red-600']">
                        {{ formatCurrency(Math.round(result.totalReturn / 100) * 100) }}
                      </p>
                    </div>
                    <!-- Annualized Return -->
                    <div>
                      <p class="text-xs font-semibold text-gray-400 mb-0.5">Annualized Return</p>
                      <p class="font-extrabold leading-tight"
                        :class="[isWinnerCard(result, winnerResult) ? 'text-xl' : 'text-lg', result.annualizedReturn >= 0 ? 'text-indigo-700' : 'text-red-600']">
                        {{ result.annualizedReturn.toFixed(1) }}%
                      </p>
                      <p class="text-xs text-gray-400 font-medium">{{ result.annualizedLabel }}</p>
                    </div>
                  </div>
                  <!-- Pre-tax inline disclaimer (5th placement) -->
                  <p class="text-xs text-gray-400 mt-1 italic">Pre-tax analysis only. Consult a CPA before committing capital.</p>
                </div>

                <!-- Composite Score -->
                <div class="mb-3 flex items-center justify-between">
                  <span class="text-xs font-semibold text-gray-500">Composite Score</span>
                  <span class="text-sm font-extrabold px-2.5 py-0.5 rounded-full"
                    :class="[isWinnerCard(result, winnerResult) ? '' : 'opacity-70',
                             result.compositeScore >= 70 ? 'bg-emerald-100 text-emerald-800' :
                             result.compositeScore >= 55 ? 'bg-blue-100 text-blue-800' :
                             result.compositeScore >= 40 ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800']">
                    {{ Math.round(result.compositeScore) }}/100
                  </span>
                </div>

                <!-- Extreme Flip Warning -->
                <div v-if="result.extremeFlipWarning"
                  class="mb-3 rounded-xl bg-amber-50 border border-amber-200 p-3">
                  <p class="text-xs font-bold text-amber-800 mb-1">⚠ Unusually high projected flip return ({{ result.annualizedReturn.toFixed(0) }}% annualized)</p>
                  <p class="text-xs text-amber-700">This projection assumes very aggressive compounding. Real-world flippers rarely sustain these returns at scale. Verify ARV and rehab inputs. Consider toggling Mode C for a more defensible projection.</p>
                </div>

                <!-- 4 DERIVED METRIC CARDS -->
                <div class="grid grid-cols-2 gap-2 mt-3">
                  <div class="rounded-lg bg-gray-50 px-2.5 py-2">
                    <p class="text-xs text-gray-400 font-medium">Cash Invested</p>
                    <p class="text-sm font-bold text-gray-800">{{ formatCurrency(Math.round(result.cashInvested / 100) * 100) }}</p>
                  </div>
                  <div class="rounded-lg bg-gray-50 px-2.5 py-2">
                    <p class="text-xs text-gray-400 font-medium">{{ result.strategy === 'flip' ? 'Flip Profit %' : 'Year 1 CoC' }}</p>
                    <p class="text-sm font-bold" :class="result.year1Coc >= 0 ? 'text-gray-800' : 'text-red-600'">
                      {{ result.year1Coc.toFixed(1) }}%
                    </p>
                  </div>
                  <div class="rounded-lg bg-gray-50 px-2.5 py-2">
                    <p class="text-xs text-gray-400 font-medium">Op. Break-Even</p>
                    <p class="text-sm font-bold text-gray-800">
                      {{ result.breakEvenMonth === null ? 'Beyond 60mo' : (result.strategy === 'flip' ? 'Month ' + result.breakEvenMonth + ' (Sale)' : 'Month ' + result.breakEvenMonth) }}
                    </p>
                  </div>
                  <div class="rounded-lg px-2.5 py-2"
                    :class="result.riskLevel === 'LOW' ? 'bg-emerald-50' : result.riskLevel === 'HIGH' ? 'bg-red-50' : 'bg-amber-50'">
                    <p class="text-xs font-medium"
                      :class="result.riskLevel === 'LOW' ? 'text-emerald-600' : result.riskLevel === 'HIGH' ? 'text-red-600' : 'text-amber-600'">
                      Risk: {{ result.riskLevel }}
                    </p>
                    <p class="text-xs text-gray-500 mt-0.5">{{ result.riskFlag }}</p>
                  </div>
                </div>

                <!-- BRRRR: Cash Recovered at Refi (shown separately) -->
                <div v-if="result.strategy === 'brrrr' && result.refiProceeds !== undefined"
                  class="mt-3 rounded-xl border border-blue-200 bg-blue-50 px-3 py-2">
                  <p class="text-xs font-semibold text-blue-800">Cash Recovered at Refi: {{ formatCurrency(Math.round(result.refiProceeds / 100) * 100) }}</p>
                  <p class="text-xs text-blue-600 mt-0.5">Capital extracted via refinance — separate from profit. This is your own equity loaned back, not income.</p>
                  <p class="text-xs text-blue-600">Financial Break-Even: {{ result.financialBreakEvenMonth !== null ? 'Month ' + result.financialBreakEvenMonth : 'Beyond 60 months' }}</p>
                  <div v-if="result.infiniteReturn" class="mt-1">
                    <span class="text-xs font-bold text-emerald-700">⚡ Infinite Capital Recovery — Capital Left ${{ Math.max(0, Math.round(result.capitalLeft)).toLocaleString() }}, full equity recovery at refi</span>
                  </div>
                </div>

                <!-- 6-Factor Composite Breakdown -->
                <div class="mt-3">
                  <button @click="result.showCompositeDetail = !result.showCompositeDetail"
                    class="text-xs font-semibold text-gray-500 hover:text-indigo-600 transition flex items-center gap-1">
                    <svg class="w-3 h-3 transition-transform" :class="result.showCompositeDetail ? 'rotate-180' : ''"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
                    </svg>
                    Composite Score Breakdown
                  </button>
                  <div v-if="result.showCompositeDetail" class="mt-2 space-y-1.5">
                    <div v-for="factor in result.compositeBreakdown" :key="factor.name" class="flex items-center gap-2">
                      <span class="text-xs text-gray-500 w-24 flex-shrink-0">{{ factor.name }}</span>
                      <div class="flex-1 bg-gray-100 rounded-full h-1.5">
                        <div class="h-1.5 rounded-full bg-indigo-400 transition-all" :style="`width: ${factor.score}%`"></div>
                      </div>
                      <span class="text-xs font-bold text-gray-700 w-8 text-right">{{ Math.round(factor.score) }}</span>
                      <span class="text-xs text-gray-400">({{ (factor.weight * 100).toFixed(0) }}%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SENSITIVITY TABLE: Appreciation × Rent Growth -->
          <div class="mb-6 bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <h3 class="text-base font-bold text-gray-800 mb-4">Sensitivity: Appreciation × Rent Growth (Winner Shift)</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-center border-separate" style="border-spacing: 2px;">
                <thead>
                  <tr>
                    <th class="bg-gray-50 rounded px-2 py-1.5 text-gray-500 font-semibold text-left">Apprec. \ Rent</th>
                    <th v-for="rg in sensitivityRentGrowths" :key="rg" class="bg-gray-50 rounded px-2 py-1.5 font-semibold text-gray-600">{{ rg }}%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="apprec in sensitivityAppreciations" :key="apprec">
                    <td class="bg-gray-50 rounded px-2 py-1.5 font-semibold text-gray-600 text-left">{{ apprec }}%</td>
                    <td v-for="rg in sensitivityRentGrowths" :key="rg"
                      class="rounded px-2 py-1.5 font-semibold"
                      :class="getSensitivityCellClass(apprec, rg)">
                      {{ getSensitivityWinner(apprec, rg) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-xs text-gray-400 mt-2">Shows projected Winner at each combination. Green = same as base case Winner; Amber = Winner changes.</p>
          </div>

          <!-- 60-MONTH CASH FLOW CHART (SVG dual-line) -->
          <div class="mb-6 bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <h3 class="text-base font-bold text-gray-800 mb-1">60-Month Cumulative Cash Flow</h3>
            <p class="text-xs text-gray-400 mb-4">Solid line = Operating Cash Flow only. Dashed line = Wealth Position (includes equity growth). Vertical markers = key events.</p>
            <div class="w-full h-48 relative">
              <svg :viewBox="`0 0 600 180`" class="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <!-- Grid lines -->
                <line x1="40" y1="20" x2="590" y2="20" stroke="#f3f4f6" stroke-width="1"/>
                <line x1="40" y1="60" x2="590" y2="60" stroke="#f3f4f6" stroke-width="1"/>
                <line x1="40" y1="100" x2="590" y2="100" stroke="#e5e7eb" stroke-width="1.5"/>
                <line x1="40" y1="140" x2="590" y2="140" stroke="#f3f4f6" stroke-width="1"/>
                <!-- Zero line label -->
                <text x="35" y="103" text-anchor="end" font-size="9" fill="#9ca3af">$0</text>
                <!-- X axis -->
                <line x1="40" y1="160" x2="590" y2="160" stroke="#d1d5db" stroke-width="1"/>
                <text x="40" y="173" text-anchor="middle" font-size="8" fill="#9ca3af">0</text>
                <text x="205" y="173" text-anchor="middle" font-size="8" fill="#9ca3af">12</text>
                <text x="315" y="173" text-anchor="middle" font-size="8" fill="#9ca3af">24</text>
                <text x="425" y="173" text-anchor="middle" font-size="8" fill="#9ca3af">36</text>
                <text x="535" y="173" text-anchor="middle" font-size="8" fill="#9ca3af">48</text>
                <text x="590" y="173" text-anchor="middle" font-size="8" fill="#9ca3af">60</text>
                <!-- Operating cash flow lines per deal -->
                <polyline v-for="(result, ri) in compareResults" :key="'op-'+ri"
                  :points="getCashFlowPoints(result.cumulativeCashFlows)"
                  fill="none" :stroke="dealColors[ri]" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
                <!-- Wealth position dashed lines -->
                <polyline v-for="(result, ri) in compareResults" :key="'wp-'+ri"
                  :points="getCashFlowPoints(result.wealthPositions)"
                  fill="none" :stroke="dealColors[ri]" stroke-width="1.5"
                  stroke-dasharray="5,3" stroke-linecap="round" stroke-linejoin="round"
                  opacity="0.7"/>
                <!-- Event markers (refi, sale) -->
                <g v-for="(result, ri) in compareResults" :key="'ev-'+ri">
                  <line v-if="result.refiMonth"
                    :x1="40 + (result.refiMonth/60)*550" y1="20"
                    :x2="40 + (result.refiMonth/60)*550" y2="160"
                    :stroke="dealColors[ri]" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>
                  <text v-if="result.refiMonth"
                    :x="42 + (result.refiMonth/60)*550" y="35"
                    font-size="7" :fill="dealColors[ri]">Refi</text>
                </g>
              </svg>
              <!-- Legend -->
              <div class="flex gap-4 mt-2 flex-wrap">
                <div v-for="(result, ri) in compareResults" :key="'legend-'+ri" class="flex items-center gap-1.5">
                  <div class="w-6 h-2 rounded-sm" :style="`background: ${dealColors[ri]}`"></div>
                  <span class="text-xs text-gray-600 font-medium">{{ result.label }}</span>
                  <span class="text-xs text-gray-400">— solid: cash flow, dashed: wealth</span>
                </div>
              </div>
            </div>
          </div>

          <!-- DEAL FLOW COMPARISON TABLE -->
          <div class="mb-6 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div class="px-5 py-3 border-b border-gray-100">
              <h3 class="text-base font-bold text-gray-800">Deal Flow Comparison Table</h3>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wide">Metric</th>
                    <th v-for="result in compareResults" :key="result.dealIdx"
                      class="px-4 py-3 text-center text-xs font-bold uppercase tracking-wide"
                      :class="isWinnerCard(result, winnerResult) ? 'text-indigo-700' : 'text-gray-500'">
                      {{ result.label }}
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr class="hover:bg-gray-50/50">
                    <td class="px-4 py-2.5 text-xs font-semibold text-gray-600">5-Year Total Return</td>
                    <td v-for="result in compareResults" :key="result.dealIdx" class="px-4 py-2.5 text-center">
                      <span class="font-bold" :class="result.totalReturn >= 0 ? 'text-gray-800' : 'text-red-600'">
                        {{ formatCurrency(Math.round(result.totalReturn / 100) * 100) }}
                      </span>
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-50/50">
                    <td class="px-4 py-2.5 text-xs font-semibold text-gray-600">Annualized Return</td>
                    <td v-for="result in compareResults" :key="result.dealIdx" class="px-4 py-2.5 text-center">
                      <span class="font-bold" :class="result.annualizedReturn >= 0 ? 'text-indigo-700' : 'text-red-600'">
                        {{ result.annualizedReturn.toFixed(1) }}%
                      </span>
                      <span class="block text-xs text-gray-400">{{ result.annualizedLabel }}</span>
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-50/50">
                    <td class="px-4 py-2.5 text-xs font-semibold text-gray-600">Composite Score</td>
                    <td v-for="result in compareResults" :key="result.dealIdx" class="px-4 py-2.5 text-center">
                      <span class="font-bold text-gray-800" :class="!isWinnerCard(result, winnerResult) ? 'opacity-70' : ''">
                        {{ Math.round(result.compositeScore) }}/100
                      </span>
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-50/50">
                    <td class="px-4 py-2.5 text-xs font-semibold text-gray-600">Cash Invested</td>
                    <td v-for="result in compareResults" :key="result.dealIdx" class="px-4 py-2.5 text-center text-sm text-gray-700 font-medium">
                      {{ formatCurrency(Math.round(result.cashInvested / 100) * 100) }}
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-50/50">
                    <td class="px-4 py-2.5 text-xs font-semibold text-gray-600">Year 1 CoC / Flip ROI</td>
                    <td v-for="result in compareResults" :key="result.dealIdx" class="px-4 py-2.5 text-center text-sm font-medium"
                      :class="result.year1Coc >= 0 ? 'text-gray-700' : 'text-red-600'">
                      {{ result.year1Coc.toFixed(1) }}%
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-50/50">
                    <td class="px-4 py-2.5 text-xs font-semibold text-gray-600">Op. Break-Even Month</td>
                    <td v-for="result in compareResults" :key="result.dealIdx" class="px-4 py-2.5 text-center text-sm text-gray-700 font-medium">
                      {{ result.breakEvenMonth === null ? 'Beyond 60' : result.breakEvenMonth }}
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-50/50">
                    <td class="px-4 py-2.5 text-xs font-semibold text-gray-600">Risk Flag</td>
                    <td v-for="result in compareResults" :key="result.dealIdx" class="px-4 py-2.5 text-center text-xs font-semibold"
                      :class="result.riskLevel === 'LOW' ? 'text-emerald-700' : result.riskLevel === 'HIGH' ? 'text-red-600' : 'text-amber-600'">
                      {{ result.riskLevel }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- SCENARIOS PANEL -->
          <div class="mb-4 bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <h3 class="text-base font-bold text-gray-800 mb-3">Scenario Stress Test</h3>
            <div class="flex gap-2 mb-4 flex-wrap">
              <button @click="activeScenario = 'conservative'"
                class="px-3 py-1.5 rounded-lg text-xs font-bold border-2 transition"
                :class="activeScenario === 'conservative' ? 'border-red-400 bg-red-50 text-red-800' : 'border-gray-200 text-gray-500 hover:border-gray-300'">
                Conservative
              </button>
              <button @click="activeScenario = 'base'"
                class="px-3 py-1.5 rounded-lg text-xs font-bold border-2 transition"
                :class="activeScenario === 'base' ? 'border-gray-500 bg-gray-100 text-gray-800' : 'border-gray-200 text-gray-500 hover:border-gray-300'">
                Base Case
              </button>
              <button @click="activeScenario = 'optimistic'"
                class="px-3 py-1.5 rounded-lg text-xs font-bold border-2 transition"
                :class="activeScenario === 'optimistic' ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-gray-200 text-gray-500 hover:border-gray-300'">
                Optimistic
              </button>
            </div>
            <div class="text-xs text-gray-500">
              <span v-if="activeScenario === 'conservative'">Conservative: −2pp Appreciation, −2pp Rent Growth, +5pp Vacancy, +5pp OpEx, ARV ×0.92, Rehab ×1.20, HM/Refi Rate +1pp</span>
              <span v-else-if="activeScenario === 'optimistic'">Optimistic: +1pp Appreciation, +1pp Rent Growth, −2pp Vacancy, ARV ×1.05, Rehab ×0.95 (Rare in 2026)</span>
              <span v-else>Base Case: Your current inputs</span>
            </div>
            <div v-if="scenarioWinnerChanged" class="mt-3 rounded-xl bg-amber-50 border border-amber-200 px-3 py-2 text-xs font-semibold text-amber-800">
              ⚠ Winner changes under this scenario. Results are sensitive to assumptions.
            </div>
          </div>
        </div>

        <!-- EMPTY STATE -->
        <div v-else-if="compareResults.length === 0 || !compareResults.every(r => r.valid)" class="mt-6 rounded-2xl border-2 border-dashed border-indigo-200 bg-indigo-50/30 p-8 text-center">
          <svg class="w-12 h-12 text-indigo-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          <p class="text-sm font-bold text-indigo-800 mb-1">Enter deal parameters to see comparison</p>
          <p class="text-xs text-indigo-600">Fill in at least one field per deal card to project 5-Year Total Return, Annualized Return, and Winner tier.</p>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           MODE 2: FIND BREAK-EVEN (BLUE)
      ═══════════════════════════════════════════════ -->
      <div v-else-if="calcMode === 'break-even'" class="p-5">
        <div class="rounded-2xl border border-blue-100 bg-blue-50/30 p-5 mb-5">
          <h3 class="text-sm font-bold text-blue-900 mb-4">Find Break-Even: Reverse-Solve a Variable</h3>
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">Target Deal</label>
              <select v-model="beTargetDeal"
                class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 px-3 py-2 text-sm font-semibold text-gray-800 transition">
                <option v-for="(deal, idx) in deals.slice(0, dealCount)" :key="idx" :value="idx">{{ deal.label || `Deal ${idx+1}` }}</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">Pivot Variable</label>
              <select v-model="bePivotVariable"
                class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 px-3 py-2 text-sm font-semibold text-gray-800 transition">
                <option value="purchase">Purchase Price</option>
                <option value="rent">Monthly Rent</option>
                <option value="arv">ARV</option>
                <option value="rehab">Rehab Budget</option>
                <option value="appreciation">Annual Appreciation %</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">Target: Equal Total Return to Deal</label>
              <select v-model.number="beTargetDealB"
                class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 px-3 py-2 text-sm font-semibold text-gray-800 transition">
                <option v-for="(deal, idx) in deals.slice(0, dealCount)" :key="idx" :value="idx" :disabled="idx === beTargetDeal">{{ deal.label || `Deal ${idx+1}` }}</option>
              </select>
            </div>
          </div>
          <button @click="runBreakEven"
            class="mt-4 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition hover:opacity-90"
            style="background: #2563eb;">
            Find Break-Even Value
          </button>
        </div>

        <div v-if="breakEvenResult !== null" class="rounded-2xl border-2 border-blue-500 bg-blue-50 p-5">
          <p class="text-xs font-bold uppercase text-blue-600 mb-1">Break-Even Found</p>
          <p class="text-2xl font-extrabold text-blue-900">{{ formatCurrency(breakEvenResult) }}</p>
          <p class="text-sm text-blue-700 mt-1">Required {{ bePivotVariable }} for Deal {{ beTargetDeal + 1 }} to match Deal {{ beTargetDealB + 1 }} Total Return (±$500)</p>
        </div>
        <div v-else-if="breakEvenNotFound" class="rounded-2xl border-2 border-amber-400 bg-amber-50 p-5">
          <p class="text-sm font-bold text-amber-800">Break-even not achievable within ±50% of current value. Try a different pivot variable or adjust deal parameters.</p>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           MODE 3: DEAL SCREENING (EMERALD)
      ═══════════════════════════════════════════════ -->
      <div v-else-if="calcMode === 'screening'" class="p-5">
        <div class="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-5 mb-5">
          <h3 class="text-sm font-bold text-emerald-900 mb-4">Deal Screening Criteria</h3>
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">Min Total Return</label>
              <input v-model.number="screeningCriteria.minTotalReturn" type="number" step="1000"
                class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40 px-3 py-2 text-sm font-semibold transition"
                placeholder="Enter min $ return" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">Min Composite Score</label>
              <input v-model.number="screeningCriteria.minCompositeScore" type="number" step="1" min="0" max="100"
                class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40 px-3 py-2 text-sm font-semibold transition"
                placeholder="Enter min score (0-100)" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">Max Cash Invested</label>
              <input v-model.number="screeningCriteria.maxCashInvested" type="number" step="1000"
                class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40 px-3 py-2 text-sm font-semibold transition"
                placeholder="Enter max cash invested" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">Min Risk Score</label>
              <input v-model.number="screeningCriteria.minRiskScore" type="number" step="1" min="0" max="100"
                class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/40 px-3 py-2 text-sm font-semibold transition"
                placeholder="Enter min risk score" />
            </div>
          </div>
        </div>

        <div v-if="screeningResults.length > 0" class="grid gap-4" :class="screeningResults.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'">
          <div v-for="(sr, idx) in screeningResults" :key="idx"
            class="rounded-2xl border-2 p-4"
            :class="sr.result === 'PASS' ? 'border-emerald-400 bg-emerald-50' : sr.result === 'CONDITIONAL' ? 'border-amber-400 bg-amber-50' : 'border-red-300 bg-red-50'">
            <div class="flex items-center justify-between mb-2">
              <p class="text-sm font-bold text-gray-800">{{ sr.label }}</p>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-full"
                :class="sr.result === 'PASS' ? 'bg-emerald-500 text-white' : sr.result === 'CONDITIONAL' ? 'bg-amber-400 text-white' : 'bg-red-400 text-white'">
                {{ sr.result }}
              </span>
            </div>
            <div v-if="sr.failures.length > 0" class="space-y-1">
              <p class="text-xs font-semibold text-gray-600">Failed criteria:</p>
              <ul class="list-disc list-inside space-y-0.5">
                <li v-for="f in sr.failures" :key="f" class="text-xs text-gray-600">{{ f }}</li>
              </ul>
            </div>
            <p v-else class="text-xs text-emerald-700 font-semibold">All screening criteria met.</p>
          </div>
        </div>
      </div>

      </div><!-- end inner rounded -->
      </div><!-- end gradient wrapper -->

      <!-- ═══════════════════════════════════════════════
           ACTION BUTTONS (covers all 3 modes)
      ═══════════════════════════════════════════════ -->
      <div class="mt-6 flex flex-wrap items-center gap-3 justify-center sm:justify-start">
        <button @click="shareUrl"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-gray-300 bg-white text-sm font-bold text-gray-700 hover:border-gray-400 transition shadow-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
          </svg>
          {{ shareCopied ? 'Link Copied!' : 'Share' }}
        </button>
        <button @click="exportPdf"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 text-sm font-bold text-white transition shadow-sm"
          :class="calcMode === 'compare' ? 'border-indigo-600 bg-indigo-600 hover:bg-indigo-700' : calcMode === 'break-even' ? 'border-blue-600 bg-blue-600 hover:bg-blue-700' : 'border-emerald-600 bg-emerald-600 hover:bg-emerald-700'">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Export PDF
        </button>
      </div>
    </main>

    <!-- ═══════════════════════════════════════════════
         SCENARIO PANEL
    ═══════════════════════════════════════════════ -->
    <div class="max-w-[1100px] mx-auto px-4 pb-10">
      <ScenarioPanel
        calculator="compare-real-estate-deals"
        :has-result="hasWinner"
        :result="currentScenarioResult"
        :trigger-save="triggerScenarioSave"
        @saved="onScenarioSaved"
      />
    </div>

    <!-- ═══════════════════════════════════════════════
         SEO CONTENT SECTIONS
    ═══════════════════════════════════════════════ -->
    <div class="max-w-[1100px] mx-auto px-4 pb-16">

      <!-- ═══ 1. OVERVIEW ═══ -->
      <section id="overview" class="mb-12 scroll-mt-24">
        <div class="mb-6">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Compare Investment Properties Side by Side — What This Calculator Does</h2>
          <p class="text-sm text-indigo-600 font-medium">A deal comparison tool for evaluating 2–3 real estate deals across Rental, Fix and Flip, and BRRRR strategies</p>
        </div>
        <div class="prose prose-sm max-w-none space-y-4 text-gray-700 leading-relaxed">
          <p>The Compare Real Estate Deals Calculator helps you compare real estate deals side by side and see which one performs better over 5 years — and understand which deal is likely to perform better based on your inputs. It evaluates up to three investment properties across Rental, Fix and Flip, and BRRRR strategies — making it the most practical tool for the rental vs flip vs BRRRR decision that most investors face. As a normalization engine, it converts these different deal types into two comparable metrics: 5-Year Total Return in dollars and Annualized Return percentage, plus a 6-factor Composite Score (return, risk, liquidity, time-to-profit, effort, scalability). Unlike generic calculators, this real estate deal comparison tool accepts direct imports from specialized calculators (Rental Property, Fix and Flip, BRRRR, ARV) via URL parameters — letting you compare investment properties side by side without re-entering data.</p>

          <p>The calculator produces a Winner tier with calibrated confidence — not just a raw number. Three tiers exist: <strong>Clear Winner</strong> (decisive margin), <strong>Slight Edge</strong> (marginal advantage), and <strong>Too Close to Call</strong> (statistical noise). A fourth state — <strong>Cluster Detected</strong> — applies when three deals all fall within a tight band. Winner logic prioritizes Annualized Return, not Total Return, to prevent time-value bias. The Return Dominance Rule forces a Clear Winner when one deal leads by ≥25% relative Annualized Return — Composite Score cannot override an economically decisive margin.</p>

          <p>The fastest workflow: run each deal first in its specialized calculator (Rental Property, Fix and Flip, BRRRR, or ARV), then click "Compare with another deal" on the results page. This imports the deal with all validated inputs via URL parameters. Why 5 years? A fixed 60-month horizon prevents apples-to-oranges comparisons — a 6-month Flip and a 30-year Rental cannot be compared on raw profit alone. This tool is designed for US investors choosing between strategies, not passive homebuyers evaluating one property.</p>

          <p class="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-amber-800 font-medium not-prose">
            <strong>Important:</strong> All figures shown are pre-tax. Post-tax treatment meaningfully changes Flip vs Rental comparisons — consult a real estate CPA before committing capital. This tool is not a substitute for licensed appraisal or lender underwriting. Use it as a screening tool to rank validated deal candidates, not as a decision authority. Enter your first deal above to begin, or import from Rental Property, Fix and Flip, or BRRRR calculators.
          </p>
        </div>
      </section>

      <!-- ═══ 2. HOW TO USE ═══ -->
      <section id="how-to-use" class="mb-12 scroll-mt-24">
        <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">How to Run a Rental vs BRRRR vs Flip Comparison</h2>
        <p class="text-sm text-indigo-600 font-medium mb-6">A 5-step workflow from deal entry to Winner verdict</p>

        <div class="space-y-4 mb-8">
          <div v-for="(step, i) in howToUseSteps" :key="i"
            class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-extrabold text-white text-sm" style="background: #1e3a5f;">{{ i+1 }}</div>
              <div>
                <h3 class="font-bold text-gray-800 mb-1">{{ step.title }}</h3>
                <p class="text-sm text-gray-600 leading-relaxed">{{ step.body }}</p>
                <p v-if="step.disclaimer" class="mt-2 text-xs bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-amber-700 font-medium">{{ step.disclaimer }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 gap-4 mb-8">
          <div v-for="(tip, i) in proTips" :key="i"
            class="rounded-2xl bg-indigo-50 border border-indigo-100 p-4">
            <div class="flex items-start gap-2">
              <span class="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full flex-shrink-0">Pro Tip</span>
              <p class="text-sm text-indigo-900 leading-relaxed">{{ tip }}</p>
            </div>
          </div>
        </div>

        <h3 class="text-lg font-bold mb-4" style="color: #1e3a5f;">Understanding Your Winner Tier</h3>
        <div class="grid sm:grid-cols-2 gap-4">
          <div v-for="tier in winnerTierExplanations" :key="tier.name"
            class="rounded-2xl border p-4"
            :class="tier.colorClass">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-full" :class="tier.badgeClass">{{ tier.name }}</span>
            </div>
            <p class="text-xs font-semibold text-gray-700 mb-1">{{ tier.criteria }}</p>
            <p class="text-sm text-gray-600 leading-relaxed">{{ tier.meaning }}</p>
          </div>
        </div>
      </section>

      <!-- ═══ 3. INPUTS & OUTPUTS ═══ -->
      <section id="inputs-outputs" class="mb-12 scroll-mt-24">
        <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Inputs and Outputs</h2>
        <p class="text-sm text-indigo-600 font-medium mb-6">What you enter, what the calculator produces</p>

        <div class="mb-6">
          <h3 class="text-base font-bold text-gray-800 mb-3">Global Market Assumptions (apply to all deals)</h3>
          <div class="overflow-x-auto rounded-2xl border border-gray-200">
            <table class="w-full text-sm">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Input</th>
                  <th class="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Applies To</th>
                  <th class="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Default</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr><td class="px-4 py-2.5 text-sm text-gray-700">Annual Appreciation %</td><td class="px-4 py-2.5 text-sm text-gray-600">All deals</td><td class="px-4 py-2.5 text-sm text-gray-600">3%</td></tr>
                <tr><td class="px-4 py-2.5 text-sm text-gray-700">Annual Rent Growth %</td><td class="px-4 py-2.5 text-sm text-gray-600">Rental, BRRRR</td><td class="px-4 py-2.5 text-sm text-gray-600">3%</td></tr>
                <tr><td class="px-4 py-2.5 text-sm text-gray-700">Per-deal override (Advanced)</td><td class="px-4 py-2.5 text-sm text-gray-600">Individual deals</td><td class="px-4 py-2.5 text-sm text-gray-600">Disabled</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="mb-6">
          <h3 class="text-base font-bold text-gray-800 mb-3">Per-Deal Inputs by Strategy</h3>
          <div class="overflow-x-auto rounded-2xl border border-gray-200">
            <table class="w-full text-sm">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Input</th>
                  <th class="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Rental</th>
                  <th class="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Fix &amp; Flip</th>
                  <th class="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">BRRRR</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr><td class="px-4 py-2.5 text-sm text-gray-700">Purchase Price</td><td class="px-4 py-2.5 text-center text-emerald-600 font-bold">✓</td><td class="px-4 py-2.5 text-center text-emerald-600 font-bold">✓</td><td class="px-4 py-2.5 text-center text-emerald-600 font-bold">✓</td></tr>
                <tr><td class="px-4 py-2.5 text-sm text-gray-700">Down Payment % / HM LTC</td><td class="px-4 py-2.5 text-center text-emerald-600 font-bold">✓</td><td class="px-4 py-2.5 text-center text-gray-300">—</td><td class="px-4 py-2.5 text-center text-gray-300">—</td></tr>
                <tr><td class="px-4 py-2.5 text-sm text-gray-700">Loan Rate %</td><td class="px-4 py-2.5 text-center text-emerald-600 font-bold">✓</td><td class="px-4 py-2.5 text-center text-gray-300">—</td><td class="px-4 py-2.5 text-center text-gray-300">—</td></tr>
                <tr><td class="px-4 py-2.5 text-sm text-gray-700">Monthly Rent</td><td class="px-4 py-2.5 text-center text-emerald-600 font-bold">✓</td><td class="px-4 py-2.5 text-center text-gray-300">—</td><td class="px-4 py-2.5 text-center text-emerald-600 font-bold">✓</td></tr>
                <tr><td class="px-4 py-2.5 text-sm text-gray-700">Vacancy %, OpEx %</td><td class="px-4 py-2.5 text-center text-emerald-600 font-bold">✓</td><td class="px-4 py-2.5 text-center text-gray-300">—</td><td class="px-4 py-2.5 text-center text-emerald-600 font-bold">✓</td></tr>
                <tr><td class="px-4 py-2.5 text-sm text-gray-700">Rehab Budget</td><td class="px-4 py-2.5 text-center text-gray-300">—</td><td class="px-4 py-2.5 text-center text-emerald-600 font-bold">✓</td><td class="px-4 py-2.5 text-center text-emerald-600 font-bold">✓</td></tr>
                <tr><td class="px-4 py-2.5 text-sm text-gray-700">ARV</td><td class="px-4 py-2.5 text-center text-gray-300">—</td><td class="px-4 py-2.5 text-center text-emerald-600 font-bold">✓</td><td class="px-4 py-2.5 text-center text-emerald-600 font-bold">✓</td></tr>
                <tr><td class="px-4 py-2.5 text-sm text-gray-700">Hold Period / Seasoning</td><td class="px-4 py-2.5 text-center text-gray-300">—</td><td class="px-4 py-2.5 text-center text-emerald-600 font-bold">✓</td><td class="px-4 py-2.5 text-center text-emerald-600 font-bold">✓</td></tr>
                <tr><td class="px-4 py-2.5 text-sm text-gray-700">Refi LTV %, Refi Rate %</td><td class="px-4 py-2.5 text-center text-gray-300">—</td><td class="px-4 py-2.5 text-center text-gray-300">—</td><td class="px-4 py-2.5 text-center text-emerald-600 font-bold">✓</td></tr>
                <tr><td class="px-4 py-2.5 text-sm text-gray-700">Selling Cost %, HM Rate %</td><td class="px-4 py-2.5 text-center text-gray-300">—</td><td class="px-4 py-2.5 text-center text-emerald-600 font-bold">✓</td><td class="px-4 py-2.5 text-center text-gray-300">—</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 class="text-base font-bold text-gray-800 mb-3">Outputs</h3>
          <div class="overflow-x-auto rounded-2xl border border-gray-200">
            <table class="w-full text-sm">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Output</th>
                  <th class="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Formula/Source</th>
                  <th class="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Purpose</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr><td class="px-4 py-2.5 text-sm font-semibold text-gray-800">5-Year Total Return $</td><td class="px-4 py-2.5 text-xs text-gray-600">CumCashFlow + Terminal − Cash Invested</td><td class="px-4 py-2.5 text-xs text-gray-600">Intuitive absolute dollar figure</td></tr>
                <tr><td class="px-4 py-2.5 text-sm font-semibold text-gray-800">Annualized Return %</td><td class="px-4 py-2.5 text-xs text-gray-600">CAGR or IRR per mode</td><td class="px-4 py-2.5 text-xs text-gray-600">Time-normalized rate; drives Winner logic</td></tr>
                <tr><td class="px-4 py-2.5 text-sm font-semibold text-gray-800">Composite Score</td><td class="px-4 py-2.5 text-xs text-gray-600">6-factor weighted (Return 30%, Risk 20%, etc.)</td><td class="px-4 py-2.5 text-xs text-gray-600">Qualitative tie-breaker within 15% AR band</td></tr>
                <tr><td class="px-4 py-2.5 text-sm font-semibold text-gray-800">Winner / Winner Tier</td><td class="px-4 py-2.5 text-xs text-gray-600">Highest Annualized Return, with Composite Score tie-breaker inside 15% band; Return Dominance Rule (≥25% relative Annualized lead) forces Winner regardless of Composite Score</td><td class="px-4 py-2.5 text-xs text-gray-600">Ranked decision with calibrated confidence</td></tr>
                <tr><td class="px-4 py-2.5 text-sm font-semibold text-gray-800">Operating Break-Even Month</td><td class="px-4 py-2.5 text-xs text-gray-600">CumCashFlow_m ≥ 0 (cash flow only)</td><td class="px-4 py-2.5 text-xs text-gray-600">When cash flow turns positive (excludes equity)</td></tr>
                <tr><td class="px-4 py-2.5 text-sm font-semibold text-gray-800">Financial Break-Even (BRRRR)</td><td class="px-4 py-2.5 text-xs text-gray-600">CumCashFlow + Refi Proceeds ≥ 0</td><td class="px-4 py-2.5 text-xs text-gray-600">Includes refi cash event (BRRRR only)</td></tr>
                <tr><td class="px-4 py-2.5 text-sm font-semibold text-gray-800">Cash Recovered at Refi (BRRRR)</td><td class="px-4 py-2.5 text-xs text-gray-600">New Loan − HM Payoff − Refi Closing</td><td class="px-4 py-2.5 text-xs text-gray-600">Capital extracted — shown separately, NOT part of Total Return</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- ═══ 4. FORMULA ═══ -->
      <section id="formula" class="mb-12 scroll-mt-24">
        <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">How the Calculator Compares Deals</h2>
        <p class="text-sm text-indigo-600 font-medium mb-6">Normalization engine, Composite Score, and Winner tiering — with a worked Charlotte, NC 2026 example</p>

        <div class="rounded-2xl bg-indigo-50 border border-indigo-200 p-5 mb-6">
          <p class="text-sm font-medium text-indigo-900 leading-relaxed">
            <strong>Compare Real Estate Deals is not a simple calculator.</strong> It is a NORMALIZATION ENGINE that converts heterogeneous deal structures (6-month flips, 30-year rentals, BRRRR refi cycles) into two comparable metrics plus a qualitative Composite Score. Results are projections based on user inputs and industry-standard assumptions, not market-reported data. Different inputs produce different Winners.
          </p>
        </div>

        <div class="mb-6">
          <h3 class="text-base font-bold text-gray-800 mb-3">13-Step Methodology</h3>
          <ol class="space-y-2">
            <li v-for="(step, i) in formulaSteps" :key="i"
              class="flex gap-3 items-start text-sm text-gray-700 p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
              <span class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{{ i+1 }}</span>
              <span>{{ step }}</span>
            </li>
          </ol>
        </div>

        <div class="rounded-2xl bg-gray-900 text-gray-100 p-5 mb-6 font-mono text-xs leading-relaxed overflow-x-auto">
          <p class="text-gray-400 mb-3">// Formula Reference</p>
          <p><span class="text-yellow-400">Per-deal Cash Invested:</span> Strategy-specific (see inputs table)</p>
          <p><span class="text-yellow-400">Per-deal Total Return:</span> Σ CashFlow_m + Terminal_60 − Cash_Invested_0</p>
          <p class="mt-2"><span class="text-green-400">Annualized Return:</span></p>
          <p class="pl-4">Rental / BRRRR: ((Terminal + CumCashFlow) / Cash_Invested)^(1/5) − 1</p>
          <p class="pl-4">Flip (reinvestment): (Total_Accumulated_60 / Cash_Invested_0)^(1/5) − 1</p>
          <p class="pl-4">Flip (single): IRR of [-Cash_Invested, 0, …, Net_Sale_H]</p>
          <p class="mt-2"><span class="text-blue-400">Composite Score:</span> 0.30×Return + 0.20×Risk + 0.15×Liquidity + 0.15×TTP + 0.10×Effort + 0.10×Scalability</p>
          <p class="mt-2"><span class="text-purple-400">Return Score:</span> 50 + Rank_Bonus(±25) + Delta_Bonus(capped ±25) | HARD FLOOR 0 if AR ≤ 0</p>
          <p class="mt-2"><span class="text-red-400">Winner Pipeline:</span></p>
          <p class="pl-4">STEP 0 — Exact Tie: AR_delta_pp &lt; 0.1 → Composite-only decision</p>
          <p class="pl-4">STEP 1 — Return Dominance: AR_delta_rel ≥ 25% → Clear Winner forced</p>
          <p class="pl-4">STEP 2 — Standard Tier: Clear (≥5pp AR + ≥10 CS) / Slight / Too Close (&lt;1pp + &lt;5 CS)</p>
          <p class="pl-4">STEP 3 — Cluster Check: 3 deals, AR spread &lt;2pp, CS spread &lt;10 → Cluster Detected</p>
          <p class="mt-2"><span class="text-amber-400">Operating Break-Even:</span> CumCashFlow_m ≥ 0 (cash flow only, NO equity, NO refi)</p>
          <p><span class="text-amber-400">Financial Break-Even:</span> CumCashFlow + Refi_Proceeds ≥ 0 (BRRRR only)</p>
        </div>

        <!-- ASCII Visual Schema -->
        <div class="rounded-2xl bg-gray-800 text-gray-200 p-5 mb-6 font-mono text-xs leading-relaxed overflow-x-auto">
          <pre>
Global Market Assumptions ──────────────┐
(Appreciation, Rent Growth)             │
                                        ▼
Deal 1 Inputs ──[Normalize]──→ 5Y Total Return + Annualized Return
Deal 2 Inputs ──[Normalize]──→ 5Y Total Return + Annualized Return
Deal 3 Inputs ──[Normalize]──→ 5Y Total Return + Annualized Return
                                        │
                                        ▼
                               [Composite Score]
                               (6-factor weighted)
                                        │
                                        ▼
                               [Winner Pipeline]
                               STEP 0: Exact Tie?
                               STEP 1: Return Dominance?
                               STEP 2: Standard Tier
                               STEP 3: Cluster Check (3 deals)
                                        │
                                        ▼
                                WINNER TIER BADGE
                         (Clear / Slight / Too Close / Cluster)</pre>
        </div>

        <!-- WORKED EXAMPLE: Charlotte NC 2026 -->
        <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 class="text-base font-bold text-gray-800 mb-1">Worked Example: Charlotte, NC 2026</h3>
          <p class="text-xs text-gray-400 mb-4">3-4% appreciation, 3% rent growth, active Flip and BRRRR markets. Deal A = Rental, Deal B = BRRRR, Deal C = Fix and Flip (Mode A reinvestment)</p>
          <div class="space-y-3">
            <div v-for="(ws, i) in workedExampleSteps" :key="i"
              class="flex gap-3 text-sm">
              <span class="w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{{ i+1 }}</span>
              <div>
                <p class="font-semibold text-gray-800">{{ ws.title }}</p>
                <p class="text-gray-600 text-xs mt-0.5">{{ ws.body }}</p>
              </div>
            </div>
          </div>
          <div class="mt-5 rounded-xl bg-indigo-50 border border-indigo-200 p-4">
            <p class="text-xs font-bold text-indigo-800 mb-2">Summary Results</p>
            <div class="grid grid-cols-3 gap-3 text-center text-xs">
              <div>
                <p class="font-bold text-gray-700">Deal A (Rental)</p>
                <p class="text-lg font-extrabold text-gray-900">~$37K</p>
                <p class="text-indigo-600 font-semibold">~10.2% CAGR</p>
                <p class="text-gray-400">Composite ~68</p>
              </div>
              <div>
                <p class="font-bold text-gray-700">Deal B (BRRRR)</p>
                <p class="text-lg font-extrabold text-gray-900">~$61K</p>
                <p class="text-indigo-600 font-semibold">~16.5% CAGR</p>
                <p class="text-gray-400">Composite ~78</p>
              </div>
              <div>
                <p class="font-bold text-gray-700">Deal C (Flip)</p>
                <p class="text-lg font-extrabold text-gray-900">~$49K</p>
                <p class="text-indigo-600 font-semibold">~21.8% CAGR</p>
                <p class="text-gray-400">Composite ~65</p>
              </div>
            </div>
            <p class="text-xs text-indigo-800 font-bold mt-3">Winner: Deal C (Flip) — Clear Winner or Slight Edge by Annualized Return. Secondary badge: "Highest Return, not Highest Score" (Deal B Composite 78 > Deal C Composite 65).</p>
          </div>
        </div>
      </section>

      <!-- ═══ 5. WHAT IS ═══ -->
      <section id="what-is" class="mb-12 scroll-mt-24">
        <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">What Is a Real Estate Deal Comparison? (Definition + Method)</h2>
        <p class="text-sm text-indigo-600 font-medium mb-6">Normalized multi-strategy evaluation with calibrated confidence</p>
        <div class="space-y-4 text-gray-700 text-sm leading-relaxed">
          <p>Single-deal analysis answers "is this deal good?" — deal comparison answers "which of these deals should I pursue with my available capital?" Comparing mixed strategies is mathematically harder than comparing same-strategy deals because cash-flow timing differs fundamentally: Rental accumulates cash monthly over years; a Flip produces profit at a single exit event; BRRRR combines a mid-project refinance (capital extraction) with post-refi cash flow. Total Return $ alone biases toward long-duration deals — a $60K rental hold appears richer than a $45K Flip even when the Flip's annualized rate is 2× higher. Normalized Annualized Return corrects this. The calculator projects both metrics and presents them honestly, with Winner logic driven by the time-normalized rate.</p>
          <p>Categorical "winners" make sense only with calibrated confidence. This tool produces three tiers: <strong>Clear Winner</strong> (decisive, survives stress tests), <strong>Slight Edge</strong> (marginally better, verify inputs), and <strong>Too Close to Call</strong> (financial analysis cannot discriminate — choose on qualitative factors). A fourth state, <strong>Cluster Detected</strong>, applies to 3-deal scenarios where all candidates fall within a tight Annualized Return and Composite Score band. Generic calculators always name a winner — this produces false precision and expensive mistakes. Calibrated honesty is this tool's core differentiator.</p>
          <p>The purpose is capital allocation, not deal validation. Validate each deal first in single-deal calculators: is the Cap Rate above market? Does DSCR exceed 1.00? Does the Flip pass the 70% Rule? Is the ARV realistic per ARV Calculator? Then bring finalists to Compare Deals to answer the one question single-deal tools cannot: which validated deal delivers better time-adjusted returns for the same capital outlay? The 5-year horizon and normalization methodology align with industry convention (BiggerPockets, DealCheck, Roofstock). Post-tax treatment and personal tax situation are out of scope — consult a real estate CPA for the full picture.</p>
          <p>The normalization engine applies three distinct cash-flow models. <strong>Rental model:</strong> month-by-month amortization with rent growth at compound annual rate, vacancy and OpEx deducted, terminal equity computed at month 60 using equity basis (property value minus remaining loan balance, no selling costs deducted). <strong>Flip model:</strong> hard money financing at 80% LTC, per-cycle profit compounded over N reinvestment cycles within the 60-month window; single-flip IRR mode uses Newton-Raphson iteration on the cash flow vector. <strong>BRRRR model:</strong> Phase 1 (hard money financing period from month 0 to seasoning month S), a refinance event at month S (new loan replaces HM loan, cash proceeds extracted), Phase 3 (conventional loan amortization with rent growth from month S+1 to month 60). Each model satisfies the normalization invariant before Winner logic runs. The invariant is the most important anti-bug mechanism in the engine — it catches input mismatches that would otherwise produce phantom Winners.</p>
        </div>
      </section>

      <!-- ═══ 6. RESULT MEANING ═══ -->
      <section id="result-meaning" class="mb-12 scroll-mt-24">
        <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">What Your Winner Tier Means</h2>
        <p class="text-sm text-indigo-600 font-medium mb-4">How to act on each tier — and what the tier labels mean in 2026 US markets</p>
        <p class="text-sm text-gray-600 mb-6">The calculator provides the strongest recommendation the data supports — no more. Four states are possible: Clear Winner, Slight Edge, Too Close to Call, and Cluster Detected. Each tier carries specific guidance for how to proceed.</p>

        <div class="grid sm:grid-cols-2 gap-4 mb-6">
          <div class="rounded-2xl border-2 border-emerald-400 bg-emerald-50 p-5">
            <span class="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500 text-white mb-3">Clear Winner</span>
            <p class="text-xs font-semibold text-gray-700 mb-2">One deal leads on Annualized Return by a decisive margin AND has a meaningfully higher Composite Score, OR leads via Return Dominance Rule (≥25% relative).</p>
            <p class="text-sm text-gray-600 leading-relaxed">Results are robust to reasonable assumption changes and survive the Conservative scenario (−2pp appreciation, +5pp vacancy). Proceed with this deal after verifying other due-diligence: location, financing availability, property condition. In 2026 Sunbelt markets, BRRRR with strong ARV uplift defeats Rental as Clear Winner in roughly 55–65% of typical comparisons.</p>
          </div>
          <div class="rounded-2xl border-2 border-amber-400 bg-amber-50 p-5">
            <span class="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-400 text-white mb-3">Slight Edge</span>
            <p class="text-xs font-semibold text-gray-700 mb-2">One deal leads on Annualized Return by a smaller margin, OR leads on Composite Score but not Annualized Return (or vice versa).</p>
            <p class="text-sm text-gray-600 leading-relaxed">Statistically better but within a margin that could flip under different assumptions. Run the Conservative scenario to check robustness. Verify base-case inputs — especially appreciation, rent growth, and rehab budget for flips. A secondary "Highest Return, not Highest Score" badge may appear if Winner has lower Composite Score than runner-up.</p>
          </div>
          <div class="rounded-2xl border-2 border-gray-300 bg-gray-50 p-5">
            <span class="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-gray-400 text-white mb-3">Too Close to Call</span>
            <p class="text-xs font-semibold text-gray-700 mb-2">Annualized Return and Composite Score differences are within statistical noise.</p>
            <p class="text-sm text-gray-600 leading-relaxed">Financial analysis alone cannot discriminate. Choose based on non-financial factors: location preference, property management availability, exit flexibility, personal strategy preference (active vs. passive). This is not a failure — it's calibrated honesty. Frequently seen when comparing two Rentals in the same market.</p>
          </div>
          <div class="rounded-2xl border-2 border-gray-300 bg-gray-50 p-5">
            <span class="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-gray-400 text-white mb-3">Cluster Detected — No Clear Winner</span>
            <p class="text-xs font-semibold text-gray-700 mb-2">All three deals fall within a tight AR and Composite Score band. (3-deal scenarios only.)</p>
            <p class="text-sm text-gray-600 leading-relaxed">A 2-way check might have named a Winner, but the third deal is too close to the runner-up to honestly discriminate. Common when comparing same-strategy deals in one city. Consider expanding the comparison set or applying investor preference as tiebreaker. Return Dominance Rule can override Cluster — if one deal leads by ≥25% relative AR, Clear Winner is forced regardless.</p>
          </div>
        </div>

        <div class="rounded-2xl bg-blue-50 border border-blue-200 p-5">
          <h3 class="text-base font-bold text-blue-900 mb-2">Why 2026 Makes Winner Tiering Especially Important</h3>
          <p class="text-sm text-blue-800 leading-relaxed">Post-2022 rate environment has compressed rental cash flow (higher debt service at 7–8% vs. 3–4% in 2019–2021). Appreciation has normalized from the 2020–2022 surge. Flip reinvestment assumptions are increasingly optimistic — deal flow and ROI compression matter more than they did in 2019. BRRRR economics are tighter as refi rates erode post-refi cash flow. No single strategy dominates across all 2026 markets, making calibrated tiering essential: "Clear Winner" is rarer than in 2019–2021, and margins between strategies are thinner. The tool's honest uncertainty tiers are more valuable now than ever.</p>
        </div>

        <div class="mt-6 grid sm:grid-cols-2 gap-4">
          <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 class="text-sm font-bold text-gray-800 mb-3">When to Trust a Clear Winner Result</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-xs text-gray-600">
                <span class="text-emerald-500 flex-shrink-0 mt-0.5">✓</span>
                <span>Winner tier holds in the Conservative scenario (−2pp appreciation, +5pp vacancy)</span>
              </li>
              <li class="flex gap-2 text-xs text-gray-600">
                <span class="text-emerald-500 flex-shrink-0 mt-0.5">✓</span>
                <span>Winner is consistent across central cells of the Sensitivity Table</span>
              </li>
              <li class="flex gap-2 text-xs text-gray-600">
                <span class="text-emerald-500 flex-shrink-0 mt-0.5">✓</span>
                <span>No INVALID flag on the winning deal</span>
              </li>
              <li class="flex gap-2 text-xs text-gray-600">
                <span class="text-emerald-500 flex-shrink-0 mt-0.5">✓</span>
                <span>Each deal has been individually validated (DSCR, Cap Rate, 70%/75% Rule)</span>
              </li>
              <li class="flex gap-2 text-xs text-gray-600">
                <span class="text-emerald-500 flex-shrink-0 mt-0.5">✓</span>
                <span>No Extreme Flip Warning triggered (AR ≤ 80%)</span>
              </li>
              <li class="flex gap-2 text-xs text-gray-600">
                <span class="text-emerald-500 flex-shrink-0 mt-0.5">✓</span>
                <span>Normalization Invariant passes for all deals (no ±$100 gap)</span>
              </li>
            </ul>
          </div>

          <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 class="text-sm font-bold text-gray-800 mb-3">When to Be Skeptical of the Result</h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-xs text-gray-600">
                <span class="text-red-400 flex-shrink-0 mt-0.5">✗</span>
                <span>Flip AR &gt; 80% (Extreme Flip Guard triggered — verify ARV, hold period, rehab budget)</span>
              </li>
              <li class="flex gap-2 text-xs text-gray-600">
                <span class="text-red-400 flex-shrink-0 mt-0.5">✗</span>
                <span>Winner changes when appreciation is reduced by 1pp (fragile comparison)</span>
              </li>
              <li class="flex gap-2 text-xs text-gray-600">
                <span class="text-red-400 flex-shrink-0 mt-0.5">✗</span>
                <span>Per-deal assumption overrides are enabled without market-specific justification</span>
              </li>
              <li class="flex gap-2 text-xs text-gray-600">
                <span class="text-red-400 flex-shrink-0 mt-0.5">✗</span>
                <span>One or more deals have not been individually validated in single-deal calculators</span>
              </li>
              <li class="flex gap-2 text-xs text-gray-600">
                <span class="text-red-400 flex-shrink-0 mt-0.5">✗</span>
                <span>BRRRR post-refi DSCR is below 1.00 (cash flow negative but equity still produces high Total Return)</span>
              </li>
              <li class="flex gap-2 text-xs text-gray-600">
                <span class="text-red-400 flex-shrink-0 mt-0.5">✗</span>
                <span>Appreciation assumption &gt; 5% — above long-run historical averages for any US market</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ═══ 7. BENCHMARKS ═══ -->
      <section id="benchmarks" class="mb-12 scroll-mt-24">
        <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Comparison Benchmarks for 2026</h2>
        <p class="text-sm text-indigo-600 font-medium mb-4">Which strategies typically win in which market conditions</p>

        <div class="rounded-2xl bg-amber-50 border border-amber-200 p-4 mb-6 text-sm text-amber-800">
          These benchmarks reflect GENERAL patterns observed across typical comparison scenarios — they are illustrative starting points, NOT statistical predictions, NOT market research, NOT guarantees. The percentages below are rounded industry-rule-of-thumb ranges, not published data. Your specific deal's Winner depends on YOUR inputs.
        </div>

        <div class="space-y-6">
          <div v-for="bench in benchmarks" :key="bench.title"
            class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 class="text-base font-bold text-gray-800 mb-3">{{ bench.title }}</h3>
            <div class="space-y-2">
              <div v-for="(point, i) in bench.points" :key="i" class="flex gap-2 text-sm">
                <span class="text-gray-400 flex-shrink-0">•</span>
                <span class="text-gray-600">{{ point }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 rounded-2xl bg-gray-50 border border-gray-200 p-4 text-xs text-gray-500 italic">
          These ranges are illustrative patterns based on typical comparison scenarios, NOT measured statistical datasets, NOT market research, NOT predictions for any specific deal. The percentages shown represent approximate outcomes observed across similar user-input combinations — they are NOT derived from real market data, real transaction databases, or sampled investor surveys. Individual results depend on your market, property, financing, execution quality, and assumptions.
        </div>

        <!-- Composite Score Factor Reference Table -->
        <div class="mt-6 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div class="px-5 py-4 border-b border-gray-100">
            <h3 class="text-base font-bold text-gray-800">Composite Score Factor Reference</h3>
            <p class="text-xs text-gray-400 mt-0.5">How each of the 6 factors is scored per strategy (higher = better)</p>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-xs">
              <thead class="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th class="px-4 py-3 text-left font-bold text-gray-500 uppercase tracking-wide">Factor (Weight)</th>
                  <th class="px-4 py-3 text-left font-bold text-gray-500 uppercase tracking-wide">Rental Baseline</th>
                  <th class="px-4 py-3 text-left font-bold text-gray-500 uppercase tracking-wide">Fix &amp; Flip Baseline</th>
                  <th class="px-4 py-3 text-left font-bold text-gray-500 uppercase tracking-wide">BRRRR Baseline</th>
                  <th class="px-4 py-3 text-left font-bold text-gray-500 uppercase tracking-wide">Key Adjustments</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-3 font-semibold text-gray-800">Return (30%)</td>
                  <td class="px-4 py-3 text-gray-600">Rank+Delta Hybrid based on AR vs all deals</td>
                  <td class="px-4 py-3 text-gray-600">Same formula; penalized if AR ≤ 0</td>
                  <td class="px-4 py-3 text-gray-600">Same formula; capital recovery can boost AR</td>
                  <td class="px-4 py-3 text-gray-600">Hard Floor = 0 if AR ≤ 0. Return Dominance ≥25% relative forces Clear Winner regardless of Composite.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-3 font-semibold text-gray-800">Risk (20%)</td>
                  <td class="px-4 py-3 text-gray-600">Baseline 70; −10–30 for leverage, DSCR; +10–15 for DSCR ≥ 1.25/1.5</td>
                  <td class="px-4 py-3 text-gray-600">Baseline 40; +10 for 70% Rule pass; −20 fail; adjusted for rehab intensity</td>
                  <td class="px-4 py-3 text-gray-600">Baseline 55; adjusted for 75% Rule, post-refi DSCR, seasoning period</td>
                  <td class="px-4 py-3 text-gray-600">ARV Confidence HIGH +5, LOW −15. HM leverage penalty for Flip &gt;80% LTC.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-3 font-semibold text-gray-800">Liquidity (15%)</td>
                  <td class="px-4 py-3 text-gray-600">70 base; reduced for high leverage (&gt;85% LTV)</td>
                  <td class="px-4 py-3 text-gray-600">80 base (exit event creates liquidity); reduced for long hold periods</td>
                  <td class="px-4 py-3 text-gray-600">75 base; +15 if capital left ≤ 0 (infinite return); −10 if capital left &gt; $20K</td>
                  <td class="px-4 py-3 text-gray-600">Reflects ease of converting deal to cash. Flip has natural liquidity event at sale.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-3 font-semibold text-gray-800">Time-to-Profit (15%)</td>
                  <td class="px-4 py-3 text-gray-600">Operating Break-Even Month: sooner = higher score</td>
                  <td class="px-4 py-3 text-gray-600">Break-Even = hold period (sale event); typically high TTP score for short holds</td>
                  <td class="px-4 py-3 text-gray-600">Financial Break-Even (includes refi proceeds); varies by seasoning + post-refi CF</td>
                  <td class="px-4 py-3 text-gray-600">Month ≤ 12: +30 pts. Month 13–24: +15. Month 25–36: 0. Month &gt;36: −15. Never reached: −30.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-3 font-semibold text-gray-800">Effort (10%)</td>
                  <td class="px-4 py-3 text-gray-600">High: 70 (passive PM model); reduces for active management assumptions</td>
                  <td class="px-4 py-3 text-gray-600">Low: 40 (active project management, rehab oversight, sales coordination)</td>
                  <td class="px-4 py-3 text-gray-600">Moderate: 55 (Phase 1 active rehab + refi process; Phase 3 near-passive)</td>
                  <td class="px-4 py-3 text-gray-600">Effort score is static per strategy in v1; v2 will adjust for management type.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-3 font-semibold text-gray-800">Scalability (10%)</td>
                  <td class="px-4 py-3 text-gray-600">High: 75 (equity builds, refinanceable, portfolio-stackable)</td>
                  <td class="px-4 py-3 text-gray-600">Moderate: 60 (profit reinvested, but not equity-stacking like Rental/BRRRR)</td>
                  <td class="px-4 py-3 text-gray-600">Very High: 85 (capital recycling via refi is BRRRR's core scaling mechanism)</td>
                  <td class="px-4 py-3 text-gray-600">BRRRR scores highest because capital recycling enables stack without proportional cash increase.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- ═══ 8. STRATEGY ═══ -->
      <section id="strategy" class="mb-12 scroll-mt-24">
        <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">How to Use This Calculator by Investor Type</h2>
        <p class="text-sm text-indigo-600 font-medium mb-6">Matching the decision tool to your strategy</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="strat in strategyBlocks" :key="strat.title"
            class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div class="w-8 h-8 rounded-xl mb-3 flex items-center justify-center" style="background: #1e3a5f;">
              <span class="text-white text-sm">{{ strat.icon }}</span>
            </div>
            <h3 class="text-sm font-bold text-gray-800 mb-2">{{ strat.title }}</h3>
            <ul class="space-y-1.5">
              <li v-for="(point, i) in strat.points" :key="i" class="flex gap-1.5 text-xs text-gray-600">
                <span class="text-indigo-400 flex-shrink-0 mt-0.5">→</span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ═══ 9. APPLICATIONS ═══ -->
      <section id="applications" class="mb-12 scroll-mt-24">
        <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Common Use Cases</h2>
        <p class="text-sm text-indigo-600 font-medium mb-6">When this calculator is the right tool</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="(app, i) in applications" :key="i"
            class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <span class="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full mb-3 inline-block">Use Case {{ i+1 }}</span>
            <h3 class="text-sm font-bold text-gray-800 mb-2">{{ app.title }}</h3>
            <p class="text-xs text-gray-600 leading-relaxed">{{ app.body }}</p>
          </div>
        </div>
      </section>

      <!-- ═══ 10. INDUSTRY STANDARDS ═══ -->
      <section id="industry-standards" class="mb-12 scroll-mt-24">
        <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">How Compare Deals Aligns with Industry Conventions</h2>
        <p class="text-sm text-indigo-600 font-medium mb-6">Normalization methodology and its precedents</p>
        <div class="space-y-4">
          <div v-for="std in industryStandards" :key="std.title"
            class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 class="text-base font-bold text-gray-800 mb-2">{{ std.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ std.body }}</p>
          </div>
          <div class="rounded-2xl bg-gray-50 border border-gray-200 p-4 text-xs text-gray-500 italic">
            These comparisons describe market positioning, not endorsements. Each tool has its strengths. Compare Real Estate Deals is specifically designed for the "which opportunity should I pursue with my capital?" question.
          </div>
        </div>
      </section>

      <!-- ═══ 11. LIMITATIONS ═══ -->
      <section id="limitations" class="mb-12 scroll-mt-24">
        <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Limitations of This Calculator</h2>
        <p class="text-sm text-indigo-600 font-medium mb-6">What Compare Deals cannot tell you</p>
        <div class="space-y-4 mb-8">
          <div v-for="(lim, i) in limitations" :key="i"
            class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div class="flex gap-3">
              <span class="w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">!</span>
              <div>
                <h3 class="text-sm font-bold text-gray-800 mb-1">{{ lim.title }}</h3>
                <p class="text-sm text-gray-600 leading-relaxed">{{ lim.body }}</p>
                <p v-if="lim.disclaimer" class="mt-2 text-xs bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-amber-700 font-medium">{{ lim.disclaimer }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-2xl bg-gray-50 border border-gray-200 p-5">
          <h3 class="text-base font-bold text-gray-800 mb-3">When Not to Use Compare Deals</h3>
          <ul class="space-y-2">
            <li v-for="(w, i) in whenNotToUse" :key="i" class="flex gap-2 text-sm text-gray-600">
              <span class="text-red-400 flex-shrink-0">✗</span>
              <span>{{ w }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- ═══ 12. COMMON MISTAKES ═══ -->
      <section id="common-mistakes" class="mb-12 scroll-mt-24">
        <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Common Mistakes When Comparing Deals</h2>
        <p class="text-sm text-indigo-600 font-medium mb-6">Avoid these five errors</p>
        <div class="space-y-4">
          <div v-for="(mistake, i) in commonMistakes" :key="i"
            class="rounded-2xl border-l-4 border-l-amber-400 border border-gray-200 bg-white p-5 shadow-sm">
            <h3 class="text-sm font-bold text-gray-800 mb-1">{{ i+1 }}. {{ mistake.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ mistake.body }}</p>
          </div>
        </div>
      </section>

      <!-- ═══ 12.5. PRE-PURCHASE CHECKLIST ═══ -->
      <section id="checklist" class="mb-12 scroll-mt-24">
        <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Pre-Purchase Validation Checklist</h2>
        <p class="text-sm text-indigo-600 font-medium mb-6">Run each check before using Compare Deals to rank finalized candidates</p>

        <div class="grid sm:grid-cols-2 gap-4 mb-6">
          <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 class="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span class="w-5 h-5 rounded bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center">R</span>
              Rental Property Checks
            </h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-emerald-500 flex-shrink-0 mt-0.5">✓</span><span>Cap Rate ≥ 5% (urban) or ≥ 7% (secondary markets) — validate in Cap Rate Calculator</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-emerald-500 flex-shrink-0 mt-0.5">✓</span><span>DSCR ≥ 1.00 (minimum) or ≥ 1.25 (preferred lender standard) — validate in DSCR Calculator</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-emerald-500 flex-shrink-0 mt-0.5">✓</span><span>Gross Rent Multiplier (GRM) ≤ 15× (or market-appropriate for your area)</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-emerald-500 flex-shrink-0 mt-0.5">✓</span><span>Vacancy rate assumption ≥ 8% for conservative underwriting (not 0%)</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-emerald-500 flex-shrink-0 mt-0.5">✓</span><span>Operating expenses ≥ 35% of gross rent (includes management, maintenance, insurance, taxes)</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-emerald-500 flex-shrink-0 mt-0.5">✓</span><span>Rent-to-price ratio ≥ 0.8% monthly (basic viability); ≥ 1% (preferred for positive cash flow)</span></li>
            </ul>
          </div>

          <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 class="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span class="w-5 h-5 rounded bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">F</span>
              Fix and Flip Checks
            </h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-blue-500 flex-shrink-0 mt-0.5">✓</span><span>70% Rule: Purchase Price ≤ ARV × 0.70 − Rehab Budget — confirm in ARV Calculator</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-blue-500 flex-shrink-0 mt-0.5">✓</span><span>ARV confidence level: HIGH or MEDIUM (LOW ARV → Risk Score penalty −15)</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-blue-500 flex-shrink-0 mt-0.5">✓</span><span>Rehab budget includes 10–15% contingency for unexpected overruns</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-blue-500 flex-shrink-0 mt-0.5">✓</span><span>Hold period estimate: ≤ 6 months (low HM interest drag); > 9 months requires justification</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-blue-500 flex-shrink-0 mt-0.5">✓</span><span>Exit market liquidity: are comparable properties selling in ≤ 45 days in target price range?</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-blue-500 flex-shrink-0 mt-0.5">✓</span><span>If using Mode A reinvestment: confirm deal flow for 6–8 similar deals is realistic in your market</span></li>
            </ul>
          </div>

          <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 class="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span class="w-5 h-5 rounded bg-purple-100 text-purple-700 text-xs font-bold flex items-center justify-center">B</span>
              BRRRR Checks
            </h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-purple-500 flex-shrink-0 mt-0.5">✓</span><span>75% Rule: (Purchase + Rehab) ≤ ARV × 0.75 — required for cash-neutral refi</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-purple-500 flex-shrink-0 mt-0.5">✓</span><span>Post-refi DSCR ≥ 1.00 (new loan payment must not exceed NOI) — critical before committing</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-purple-500 flex-shrink-0 mt-0.5">✓</span><span>Lender seasoning requirements: conventional lenders typically require 6–12 months before cash-out refi</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-purple-500 flex-shrink-0 mt-0.5">✓</span><span>ARV confidence: HIGH preferred (LOW ARV → −15 Risk Score + flag); confirm comps with licensed appraiser</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-purple-500 flex-shrink-0 mt-0.5">✓</span><span>Refi rate assumption: use current 30-year conventional rate (2026 range: 6.5–7.5%) — not 2021 rates</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-purple-500 flex-shrink-0 mt-0.5">✓</span><span>Capital left (after refi): positive = capital recovered; negative = additional cash required at refi</span></li>
            </ul>
          </div>

          <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 class="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span class="w-5 h-5 rounded bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center">!</span>
              Global Assumptions Check
            </h3>
            <ul class="space-y-2">
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-amber-500 flex-shrink-0 mt-0.5">✓</span><span>Annual Appreciation: 2–4% for most US markets in 2026; Sunbelt 3–4%; Midwest 1–3%; verify against local 5-year trailing data</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-amber-500 flex-shrink-0 mt-0.5">✓</span><span>Annual Rent Growth: 2–4% nationally for 2026; higher in supply-constrained markets (Austin, Nashville 3–5%); lower in oversupplied markets (Phoenix 1–2%)</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-amber-500 flex-shrink-0 mt-0.5">✓</span><span>If comparing deals in different markets: enable per-deal overrides in Advanced mode, with market-specific justification</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-amber-500 flex-shrink-0 mt-0.5">✓</span><span>Stress test: run Conservative scenario (−2pp appreciation, +5pp vacancy) — Winner should still hold for Clear Winner tier</span></li>
              <li class="flex gap-2 text-xs text-gray-600"><span class="text-amber-500 flex-shrink-0 mt-0.5">✓</span><span>Check Sensitivity Table: if Winner flips within ±1pp on the grid, the comparison is fragile — "Slight Edge" is the honest tier</span></li>
            </ul>
          </div>
        </div>

        <div class="rounded-2xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">
          <strong>Remember:</strong> Compare Deals is a decision tool, not a due-diligence tool. Run each deal through single-deal calculators (Rental Property, Fix and Flip, BRRRR, ARV) first. Bring only individually validated, investment-grade deals to this comparison. The calculator assumes your inputs represent realistic, researched values — garbage in, garbage out. All figures are pre-tax. Consult a real estate CPA before committing capital.
        </div>
      </section>

      <!-- ═══ 13. FAQ ═══ -->
      <section id="faq" class="mb-12 scroll-mt-24">
        <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Frequently Asked Questions</h2>
        <p class="text-sm text-indigo-600 font-medium mb-6">Common questions about comparing real estate deals</p>
        <div class="space-y-4">
          <div v-for="(faq, i) in faqs" :key="i"
            class="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <button @click="faq.open = !faq.open"
              class="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition">
              <span class="text-sm font-bold text-gray-800">{{ faq.q }}</span>
              <svg class="w-4 h-4 text-gray-400 flex-shrink-0 transition-transform" :class="faq.open ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-if="faq.open" class="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </section>

      <!-- ═══ 13.5. STRATEGY QUICK REFERENCE ═══ -->
      <section class="mb-12 scroll-mt-24">
        <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Strategy Quick Reference</h2>
        <p class="text-sm text-indigo-600 font-medium mb-6">At-a-glance comparison of Rental, Fix and Flip, and BRRRR economics</p>

        <div class="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-6">
          <table class="w-full text-xs">
            <thead class="bg-gray-900 text-gray-100">
              <tr>
                <th class="px-4 py-3 text-left font-bold uppercase tracking-wide">Dimension</th>
                <th class="px-4 py-3 text-center font-bold uppercase tracking-wide text-emerald-300">Rental</th>
                <th class="px-4 py-3 text-center font-bold uppercase tracking-wide text-blue-300">Fix &amp; Flip</th>
                <th class="px-4 py-3 text-center font-bold uppercase tracking-wide text-purple-300">BRRRR</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 bg-white">
              <tr class="hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">Primary Return Driver</td><td class="px-4 py-2.5 text-center text-gray-600">Appreciation + Cash Flow</td><td class="px-4 py-2.5 text-center text-gray-600">Sale Profit × Reinvestment Cycles</td><td class="px-4 py-2.5 text-center text-gray-600">ARV Uplift + Post-Refi Cash Flow</td></tr>
              <tr class="hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">Capital Event</td><td class="px-4 py-2.5 text-center text-gray-600">None during hold (equity locked)</td><td class="px-4 py-2.5 text-center text-gray-600">Sale at hold period end</td><td class="px-4 py-2.5 text-center text-gray-600">Refinance at seasoning (capital extraction)</td></tr>
              <tr class="hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">Cash Flow Pattern</td><td class="px-4 py-2.5 text-center text-gray-600">Monthly (positive or negative)</td><td class="px-4 py-2.5 text-center text-gray-600">Negative during hold; lump-sum at exit</td><td class="px-4 py-2.5 text-center text-gray-600">Negative Phase 1; positive Phase 3 (post-refi)</td></tr>
              <tr class="hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">Risk Profile</td><td class="px-4 py-2.5 text-center text-gray-600">LOW–MODERATE (Baseline 70)</td><td class="px-4 py-2.5 text-center text-gray-600">MODERATE–HIGH (Baseline 40)</td><td class="px-4 py-2.5 text-center text-gray-600">MODERATE (Baseline 55)</td></tr>
              <tr class="hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">Effort Level</td><td class="px-4 py-2.5 text-center text-gray-600">Low (passive PM model)</td><td class="px-4 py-2.5 text-center text-gray-600">High (active rehab + sale management)</td><td class="px-4 py-2.5 text-center text-gray-600">Moderate (active Phase 1; passive Phase 3)</td></tr>
              <tr class="hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">Scalability</td><td class="px-4 py-2.5 text-center text-gray-600">High (refinanceable portfolio)</td><td class="px-4 py-2.5 text-center text-gray-600">Moderate (profit reinvestment)</td><td class="px-4 py-2.5 text-center text-gray-600">Very High (capital recycling)</td></tr>
              <tr class="hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">Key Validation Rule</td><td class="px-4 py-2.5 text-center text-gray-600">DSCR ≥ 1.00; Cap Rate ≥ 5%</td><td class="px-4 py-2.5 text-center text-gray-600">70% Rule: Price ≤ ARV×0.70 − Rehab</td><td class="px-4 py-2.5 text-center text-gray-600">75% Rule: (Price + Rehab) ≤ ARV×0.75</td></tr>
              <tr class="hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">Annualized Method</td><td class="px-4 py-2.5 text-center text-gray-600">5Y CAGR</td><td class="px-4 py-2.5 text-center text-gray-600">5Y CAGR (reinvest) or IRR (single flip)</td><td class="px-4 py-2.5 text-center text-gray-600">5Y CAGR</td></tr>
              <tr class="hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">Tax Treatment</td><td class="px-4 py-2.5 text-center text-gray-600">Long-term cap gains + depreciation deduction (pre-tax not shown)</td><td class="px-4 py-2.5 text-center text-gray-600">Ordinary income (short-term) or LTCG (hold &gt;1yr) — pre-tax not shown</td><td class="px-4 py-2.5 text-center text-gray-600">Long-term cap gains + depreciation; refi not a taxable event — pre-tax not shown</td></tr>
              <tr class="hover:bg-gray-50"><td class="px-4 py-2.5 font-semibold text-gray-700">2026 Rate Sensitivity</td><td class="px-4 py-2.5 text-center text-gray-600">High: 7–7.5% rates compress cash flow</td><td class="px-4 py-2.5 text-center text-gray-600">High: HM rates 11–13% increase hold cost drag</td><td class="px-4 py-2.5 text-center text-gray-600">High: 7–8% refi rates reduce post-refi CF</td></tr>
            </tbody>
          </table>
        </div>

        <div class="rounded-2xl bg-indigo-50 border border-indigo-200 p-4 text-sm text-indigo-800">
          <strong>Pre-tax reminder:</strong> All three strategies are evaluated pre-tax in this calculator. Post-tax treatment differs materially: Flip profits are taxed as ordinary income (or short-term capital gains if held &lt; 1 year), while Rental and BRRRR benefit from depreciation deductions and long-term capital gains rates on appreciation. In some Flip vs. Rental comparisons, the post-tax Winner may differ from the pre-tax Winner. Consult a qualified real estate CPA before making capital allocation decisions. This tool is not a substitute for licensed appraisal, lender underwriting, or professional tax advice.
        </div>
      </section>

      <!-- ═══ 14. RELATED CALCULATORS ═══ -->
      <section class="mb-12">
        <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Related Calculators</h2>
        <p class="text-sm text-indigo-600 font-medium mb-6">Continue your analysis with these specialized tools</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NuxtLink v-for="rel in relatedCalcs" :key="rel.href" :to="rel.href"
            class="rounded-2xl border border-gray-200 bg-white p-4 hover:shadow-md hover:border-indigo-200 transition group shadow-sm">
            <h3 class="text-sm font-bold text-gray-800 group-hover:text-indigo-700 mb-1 transition">{{ rel.name }}</h3>
            <p class="text-xs text-gray-500 leading-relaxed">{{ rel.desc }}</p>
          </NuxtLink>
        </div>
      </section>

      <!-- ═══ 15. DISCLOSURES ═══ -->
      <section class="mb-8">
        <div class="rounded-2xl bg-gray-50 border border-gray-200 p-5">
          <h2 class="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Important Disclosures</h2>
          <ul class="space-y-2">
            <li v-for="(d, i) in disclaimers" :key="i" class="flex gap-2 text-xs text-gray-500 leading-relaxed">
              <span class="text-gray-300 flex-shrink-0 mt-0.5">▸</span>
              <span>{{ d }}</span>
            </li>
          </ul>
          <div class="mt-4 pt-4 border-t border-gray-200">
            <p class="text-xs text-gray-400">
              RealCalc Compare Real Estate Deals Calculator — Version 1.0 — US Market (2026) — <strong>Pre-tax analysis only</strong> —
              Results are projections based on user inputs, not guarantees of future performance —
              Not accepted by lenders, appraisers, or courts — Consult a licensed CPA, attorney, and real estate professional before committing capital.
            </p>
          </div>
        </div>
      </section>

    </div>

    <!-- ═══════════════════════════════════════════════
         FOOTER
    ═══════════════════════════════════════════════ -->
    <footer class="border-t border-gray-200 bg-white py-8">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background: #1e3a5f;">
              <span class="text-white font-extrabold text-sm">RC</span>
            </div>
            <span class="font-bold text-sm" style="color: #1e3a5f;">RealCalc</span>
          </div>
          <p class="text-xs text-gray-400 text-center">
            For educational purposes only. Not investment, legal, or tax advice. Always consult qualified professionals before making investment decisions.
          </p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// ═══════════════════════════════════════════════
// SEO HEAD
// ═══════════════════════════════════════════════
useHead({
  title: 'Compare Real Estate Deals — Strategy Hub | RealCalc',
  meta: [
    { name: 'description', content: 'Compare real estate deals side-by-side — Rental vs BRRRR vs Flip. See 5-year profit, annualized return, and winner tier. Free tool for investors.' },
    { property: 'og:title', content: 'Compare Real Estate Deals — Strategy Hub | RealCalc' },
    { property: 'og:description', content: 'Compare real estate deals side-by-side — Rental vs BRRRR vs Flip. See 5-year profit, annualized return, and winner tier. Free tool for investors.' },
    { property: 'og:type', content: 'website' },
    { name: 'robots', content: 'index, follow' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Compare Real Estate Deals Calculator',
          description: 'Free side-by-side comparison tool for Rental, Fix and Flip, and BRRRR real estate deals. Normalized 5-Year Total Return, Annualized Return, and Winner tier verdict.',
          url: 'https://arvcalc.com/compare-real-estate-deals',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Web browser',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          audience: { '@type': 'Audience', audienceType: 'US Real Estate Investors' },
          featureList: [
            'Side-by-side comparison of 2-3 real estate deals',
            'Mixed strategies: Rental, Fix and Flip, BRRRR',
            '5-Year Total Return normalization',
            'Annualized Return (CAGR or IRR per mode)',
            '6-factor Composite Score (0-100)',
            'Winner tiering with calibrated confidence',
            'Cluster Detection for 3-deal comparisons',
            'Return Dominance Rule',
            'URL parameter imports from other calculators',
            'Global Market Assumptions',
            '3 scenarios: Conservative / Base / Optimistic',
            '60-month Cumulative Cash Flow chart',
            'PDF export'
          ]
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'How does the calculator compare deals with different strategies?', acceptedAnswer: { '@type': 'Answer', text: 'The calculator normalizes each deal into two comparable metrics: 5-Year Total Return $ over 60 months and Annualized Return %. For single-flip mode, Annualized Return uses IRR; for all held deals and flip reinvestment, it uses 5Y CAGR. Winner logic prioritizes Annualized Return when deal durations differ materially to avoid time-value bias.' } },
            { '@type': 'Question', name: 'What does "Too Close to Call" mean?', acceptedAnswer: { '@type': 'Answer', text: 'It means Annualized Return differs by less than 1 percentage point AND Composite Score differs by less than 5. Financial analysis cannot discriminate in this range. Choose on non-financial factors like location, property management availability, or personal strategy preference. This is calibrated honesty, not a failure.' } },
            { '@type': 'Question', name: 'Does this calculator account for taxes?', acceptedAnswer: { '@type': 'Answer', text: 'No — all analysis is pre-tax. Post-tax treatment requires a CPA. Flip profits are taxed as ordinary income or short-term capital gains; rentals benefit from depreciation and long-term capital gains rates. Winner CAN change after tax — especially in Flip vs Rental comparisons.' } }
          ]
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arvcalc.com' },
            { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://arvcalc.com/calculators' },
            { '@type': 'ListItem', position: 3, name: 'Compare Real Estate Deals', item: 'https://arvcalc.com/compare-real-estate-deals' }
          ]
        }
      ])
    }
  ]
})

// ═══════════════════════════════════════════════
// ROUTE + ROUTER (for URL import / share)
// ═══════════════════════════════════════════════
const route = useRoute()
const router = useRouter()

// ═══════════════════════════════════════════════
// UI STATE
// ═══════════════════════════════════════════════
const isNavExpanded = ref(false)
const calcMode = ref('compare')
const dealCount = ref(2)
const shareCopied = ref(false)
const mixedMethodDismissed = ref(false)
const activeScenario = ref('base')
const importWarnings = ref([])

// BREAK-EVEN MODE state
const beTargetDeal = ref(0)
const bePivotVariable = ref('purchase')
const beTargetDealB = ref(1)
const breakEvenResult = ref(null)
const breakEvenNotFound = ref(false)

// SCREENING MODE state
const screeningCriteria = ref({
  minTotalReturn: null,
  minCompositeScore: null,
  maxCashInvested: null,
  minRiskScore: null
})

// GLOBAL MARKET ASSUMPTIONS
const globalAppreciation = ref(null)
const globalRentGrowth = ref(null)
const advancedMarketMode = ref(false)

// DEAL COLORS
const dealColors = ['#6366f1', '#0ea5e9', '#10b981']

// STRATEGIES
const strategies = [
  { value: 'rental', label: 'Rental', activeClass: 'border-emerald-500 bg-emerald-50 text-emerald-800' },
  { value: 'flip', label: 'Flip', activeClass: 'border-orange-500 bg-orange-50 text-orange-800' },
  { value: 'brrrr', label: 'BRRRR', activeClass: 'border-purple-500 bg-purple-50 text-purple-800' }
]

// DEFAULT DEAL TEMPLATE
const createDeal = (idx) => ({
  label: `Deal ${idx + 1}`,
  strategy: 'rental',
  // Rental fields
  purchase: null,
  downPayment: null,
  closingCosts: null,
  loanRate: null,
  monthlyRent: null,
  vacancy: null,
  opex: null,
  // Flip fields
  rehab: null,
  arv: null,
  holdPeriod: null,
  sellingCost: null,
  hmRate: null,
  holdingCosts: null,
  hmPoints: null,
  flipMode: 'reinvest',
  roiDegradation: 7,
  // BRRRR fields
  seasoning: null,
  refiLtv: null,
  refiRate: null,
  // Advanced
  appreciationOverride: null,
  arvConfidence: null,
  // UI state
  showCompositeDetail: false
})

const deals = ref([createDeal(0), createDeal(1), createDeal(2)])

// ═══════════════════════════════════════════════
// URL IMPORT (hub-screener)
// ═══════════════════════════════════════════════
onMounted(() => {
  const q = route.query
  // Global params
  if (q.g_ga) globalAppreciation.value = parseFloat(q.g_ga) || 3
  if (q.g_gr) globalRentGrowth.value = parseFloat(q.g_gr) || 3
  if (q.g_adv === '1') advancedMarketMode.value = true
  if (q.mode) calcMode.value = q.mode

  // Deal imports
  const warns = []
  for (let n = 1; n <= 3; n++) {
    const type = q[`d${n}_type`]
    if (!type) continue
    const d = deals.value[n - 1]
    d.label = q[`d${n}_label`] || `Deal ${n}`

    // Type validation: only load allowed params per strategy
    if (type === 'rental') {
      d.strategy = 'rental'
      if (q[`d${n}_rb`]) warns.push(`Deal ${n} imported as Rental but received rehab_budget — ignored`)
      d.purchase = parseFloat(q[`d${n}_p`]) || null
      d.downPayment = parseFloat(q[`d${n}_dp`]) || null
      d.closingCosts = parseFloat(q[`d${n}_cc`]) || null
      d.loanRate = parseFloat(q[`d${n}_r`]) || null
      d.monthlyRent = parseFloat(q[`d${n}_lr`]) || null
      d.vacancy = parseFloat(q[`d${n}_vc`]) || null
      d.opex = parseFloat(q[`d${n}_op`]) || null
      if (q.g_adv === '1' && q[`d${n}_ga`]) d.appreciationOverride = parseFloat(q[`d${n}_ga`])
    } else if (type === 'flip') {
      d.strategy = 'flip'
      if (q[`d${n}_r`]) warns.push(`Deal ${n} imported as Flip but received loan_rate — ignored (Flip uses HM)`)
      d.purchase = parseFloat(q[`d${n}_p`]) || null
      d.rehab = parseFloat(q[`d${n}_rb`]) || null
      d.holdPeriod = parseFloat(q[`d${n}_h`]) || null
      d.sellingCost = parseFloat(q[`d${n}_sc`]) || null
      d.arv = parseFloat(q[`d${n}_arv`]) || null
      d.holdingCosts = parseFloat(q[`d${n}_hc`]) || null
      d.hmRate = parseFloat(q[`d${n}_hmr`]) || null
      d.hmPoints = parseFloat(q[`d${n}_hpt`]) || null
    } else if (type === 'brrrr') {
      d.strategy = 'brrrr'
      d.purchase = parseFloat(q[`d${n}_p`]) || null
      d.rehab = parseFloat(q[`d${n}_rb`]) || null
      d.arv = parseFloat(q[`d${n}_arv`]) || null
      d.seasoning = parseFloat(q[`d${n}_s`]) || null
      d.hmRate = parseFloat(q[`d${n}_hmr`]) || null
      d.refiLtv = parseFloat(q[`d${n}_rlt`]) || null
      d.refiRate = parseFloat(q[`d${n}_rir`]) || null
      d.monthlyRent = parseFloat(q[`d${n}_r`]) || null
      d.vacancy = parseFloat(q[`d${n}_vc`]) || null
      d.opex = parseFloat(q[`d${n}_op`]) || null
      if (q.g_adv === '1' && q[`d${n}_ga`]) d.appreciationOverride = parseFloat(q[`d${n}_ga`])
    }

    // ARV confidence pass-through
    if (q[`d${n}_arv_conf`]) d.arvConfidence = q[`d${n}_arv_conf`]

    if (n <= dealCount.value ? false : true) {
      if (type && type !== 'empty') dealCount.value = Math.max(dealCount.value, n)
    }
    if (type && type !== 'empty') dealCount.value = Math.max(dealCount.value, n)
  }

  importWarnings.value = warns
})

// ═══════════════════════════════════════════════
// MATH HELPERS
// ═══════════════════════════════════════════════
function amortizationPayment(principal, annualRate, years) {
  if (!principal || !annualRate || !years) return 0
  const r = annualRate / 100 / 12
  const n = years * 12
  if (r === 0) return principal / n
  return principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)
}

function amortizationBalance(principal, annualRate, years, months) {
  if (!principal || !annualRate || !years) return principal || 0
  const r = annualRate / 100 / 12
  const n = years * 12
  if (r === 0) return principal * (1 - months / n)
  return principal * (Math.pow(1 + r, n) - Math.pow(1 + r, months)) / (Math.pow(1 + r, n) - 1)
}

function computeIRR(cashFlows, guess = 0.1) {
  // Newton-Raphson IRR solver
  const tolerance = 0.0001
  const maxIter = 100
  let rate = guess
  for (let i = 0; i < maxIter; i++) {
    let npv = 0
    let dnpv = 0
    for (let t = 0; t < cashFlows.length; t++) {
      npv += cashFlows[t] / Math.pow(1 + rate, t)
      if (t > 0) dnpv -= t * cashFlows[t] / Math.pow(1 + rate, t + 1)
    }
    if (Math.abs(npv) < tolerance) return rate
    if (Math.abs(dnpv) < tolerance) break
    rate = rate - npv / dnpv
    if (rate < -0.9999) rate = -0.9999
  }
  return rate
}

// ═══════════════════════════════════════════════
// NORMALIZATION ENGINE per strategy
// ═══════════════════════════════════════════════
function computeRentalDeal(deal, apprecRate, rentGrowthRate) {
  const P = deal.purchase
  const dp = (deal.downPayment || 25) / 100
  const cc = (deal.closingCosts || 2.5) / 100
  const loanRate = (deal.loanRate || 7.5) / 100
  const loanYears = 30
  const rent0 = deal.monthlyRent
  const vac = (deal.vacancy || 8) / 100
  const opex = (deal.opex || 35) / 100
  const g_rent = rentGrowthRate / 100
  const g_prop = apprecRate / 100

  if (!P || !rent0) return null

  const cashInvested = P * dp + P * cc
  const loanAmount = P * (1 - dp)
  const monthlyPayment = amortizationPayment(loanAmount, deal.loanRate || 7.5, loanYears)

  let cumCashFlow = 0
  const cumulativeCashFlows = []
  let breakEvenMonth = null
  let cumForBE = 0

  for (let m = 1; m <= 60; m++) {
    const rentM = rent0 * Math.pow(1 + g_rent / 12, m - 1)
    const noiM = rentM * (1 - vac) - rentM * opex
    const cfM = noiM - monthlyPayment
    cumCashFlow += cfM
    cumForBE += cfM
    cumulativeCashFlows.push(cumCashFlow)
    if (breakEvenMonth === null && cumForBE >= 0) breakEvenMonth = m
  }

  const propValue60 = P * Math.pow(1 + g_prop, 5)
  const loanBalance60 = amortizationBalance(loanAmount, deal.loanRate || 7.5, loanYears, 60)
  const equity60 = propValue60 - loanBalance60

  const totalReturn = cumCashFlow + (equity60 - cashInvested)

  // Annualized CAGR
  let annualizedReturn = 0
  if (cashInvested > 0) {
    annualizedReturn = Math.pow((equity60 + cumCashFlow) / cashInvested, 1 / 5) - 1
  }

  // Wealth positions (CF + equity growth)
  const wealthPositions = cumulativeCashFlows.map((cf, i) => {
    const pv = P * Math.pow(1 + g_prop, (i + 1) / 12)
    const lb = amortizationBalance(loanAmount, deal.loanRate || 7.5, loanYears, i + 1)
    return cf + (pv - lb - cashInvested)
  })

  // Year 1 CoC
  let year1CumCF = 0
  for (let m = 1; m <= 12; m++) {
    const rentM = rent0 * Math.pow(1 + g_rent / 12, m - 1)
    const noiM = rentM * (1 - vac) - rentM * opex
    year1CumCF += noiM - monthlyPayment
  }
  const year1Coc = cashInvested > 0 ? (year1CumCF / cashInvested) * 100 : 0

  // Normalization invariant check
  const invariant = cumCashFlow + (equity60 - cashInvested) - totalReturn
  const normalizationValid = Math.abs(invariant) <= 100

  // DSCR
  const annualNOI = rent0 * 12 * (1 - vac) - rent0 * 12 * opex
  const annualDebtService = monthlyPayment * 12
  const dscr = annualDebtService > 0 ? annualNOI / annualDebtService : 99

  // Leverage
  const leverage = loanAmount / P

  // Risk score
  let riskScore = 70
  if (leverage <= 0.5) riskScore += 15
  else if (leverage <= 0.7) riskScore += 5
  else if (leverage > 0.9) riskScore -= 20
  else if (leverage > 0.8) riskScore -= 10

  if (dscr > 1.5) riskScore += 15
  else if (dscr >= 1.25) riskScore += 10
  else if (dscr < 1.0) riskScore -= 30
  else if (dscr < 1.1) riskScore -= 15

  // ARV confidence
  if (deal.arvConfidence === 'HIGH') riskScore += 5
  else if (deal.arvConfidence === 'LOW') riskScore -= 15

  riskScore = Math.max(0, Math.min(100, riskScore))

  return {
    valid: true,
    strategy: 'rental',
    strategyLabel: 'Rental Property',
    label: deal.label,
    cashInvested,
    totalReturn,
    annualizedReturn: annualizedReturn * 100,
    annualizedLabel: '(5Y CAGR)',
    compositeScore: 0,
    year1Coc,
    breakEvenMonth,
    cumulativeCashFlows,
    wealthPositions,
    riskScore,
    riskLevel: riskScore >= 65 ? 'LOW' : riskScore >= 40 ? 'MODERATE' : 'HIGH',
    riskFlag: riskScore >= 65 ? 'Strong fundamentals' : riskScore >= 40 ? 'Moderate risk' : 'High leverage or thin margins',
    extremeFlipWarning: false,
    normalizationValid,
    invariantGap: invariant,
    showCompositeDetail: false,
    compositeBreakdown: [],
    annualizedMethod: 'cagr',
    dscr,
    leverage
  }
}

function computeFlipDeal(deal, apprecRate) {
  const P = deal.purchase
  const RB = deal.rehab || 0
  const ARV = deal.arv
  const H = deal.holdPeriod || 6
  const sc = (deal.sellingCost || 6) / 100
  const hmRate = (deal.hmRate || 12) / 100
  const HC = deal.holdingCosts || 0
  const hmPoints = (deal.hmPoints || 3) / 100
  const ltc = 0.80
  const flipMode = deal.flipMode || 'reinvest'
  const d = (deal.roiDegradation || 7) / 100

  if (!P || !ARV) return null

  const hmLoan = P * ltc
  const points = hmLoan * hmPoints
  const closingCosts = P * 0.025
  const cashInvested = P * (1 - ltc) + closingCosts + points
  const monthlyHMInterest = hmLoan * (hmRate / 12)
  const totalHMInterest = monthlyHMInterest * H
  const totalHoldingCost = HC * H

  const grossSale = ARV
  const netSale = grossSale * (1 - sc) - hmLoan - totalHMInterest - totalHoldingCost
  const flipProfit1 = netSale - cashInvested
  const flipRoi1 = cashInvested > 0 ? flipProfit1 / cashInvested : 0

  let totalAccumulated60 = 0
  let annualizedReturn = 0
  let annualizedMethod = 'cagr'
  let annualizedLabel = '(5Y CAGR, reinvestment)'
  let totalReturn = 0

  if (flipMode === 'single') {
    // IRR-based single flip
    totalReturn = flipProfit1
    const cashFlows = new Array(H + 1).fill(0)
    cashFlows[0] = -cashInvested
    cashFlows[H] = netSale
    const irrMonthly = computeIRR(cashFlows)
    annualizedReturn = (Math.pow(1 + irrMonthly, 12) - 1) * 100
    annualizedMethod = 'irr'
    annualizedLabel = '(IRR, single flip)'
    totalAccumulated60 = cashInvested + flipProfit1
  } else if (flipMode === 'reinvest') {
    // Mode A: reinvestment CAGR
    const gapBetweenFlips = 1
    const cycleLength = H + gapBetweenFlips
    const N = Math.floor(60 / cycleLength)
    totalAccumulated60 = cashInvested * Math.pow(1 + flipRoi1, N)
    totalReturn = totalAccumulated60 - cashInvested
    if (cashInvested > 0) annualizedReturn = (Math.pow(totalAccumulated60 / cashInvested, 1 / 5) - 1) * 100
    annualizedLabel = '(5Y CAGR, reinvestment)'
  } else if (flipMode === 'degradation') {
    // Mode C: ROI degradation
    const gapBetweenFlips = 1
    const cycleLength = H + gapBetweenFlips
    const N = Math.floor(60 / cycleLength)
    let capital = cashInvested
    let roi = flipRoi1
    for (let n = 0; n < N; n++) {
      capital = capital * (1 + roi)
      roi = roi * (1 - d)
    }
    totalAccumulated60 = capital
    totalReturn = totalAccumulated60 - cashInvested
    if (cashInvested > 0) annualizedReturn = (Math.pow(totalAccumulated60 / cashInvested, 1 / 5) - 1) * 100
    annualizedLabel = '(5Y CAGR, reinvestment with ROI compression)'
  }

  // For flip, operating break-even = sale event month
  const breakEvenMonth = H

  // Build cumulative cash flow representation for chart
  const cumulativeCashFlows = []
  const wealthPositions = []
  const cycleLength2 = H + 1
  const N2 = Math.floor(60 / cycleLength2)
  let cumCF = 0
  let capitalTracked = cashInvested
  let currentRoi = flipRoi1
  let flipIdx = 0

  for (let m = 1; m <= 60; m++) {
    if (flipIdx < N2 && m === (flipIdx + 1) * cycleLength2) {
      const profit = capitalTracked * currentRoi
      cumCF += profit
      capitalTracked += profit
      if (flipMode === 'degradation') currentRoi *= (1 - d)
      flipIdx++
    }
    cumulativeCashFlows.push(cumCF)
    wealthPositions.push(flipMode === 'single' ? (m >= H ? cumCF : cumCF) : totalAccumulated60 - cashInvested)
  }

  // Year 1 CoC = flip profit % for flip
  const year1Coc = cashInvested > 0 ? (flipProfit1 / cashInvested) * 100 : 0

  // Risk score
  let riskScore = 40
  const rehabRatio = P > 0 ? RB / P : 0
  if (deal.holdPeriod <= 4) riskScore += 5
  else if (deal.holdPeriod >= 8 && deal.holdPeriod <= 12) riskScore -= 10
  else if (deal.holdPeriod > 12) riskScore -= 20

  if (rehabRatio <= 0.1) riskScore += 10
  else if (rehabRatio > 0.5) riskScore -= 20
  else if (rehabRatio > 0.25) riskScore -= 10

  // 70% Rule check
  const maxOffer70 = ARV * 0.70 - RB
  if (P <= maxOffer70) riskScore += 10
  else riskScore -= 20

  if (deal.arvConfidence === 'HIGH') riskScore += 5
  else if (deal.arvConfidence === 'LOW') riskScore -= 15

  // Leverage
  const leverage = hmLoan / (P + RB)
  if (leverage <= 0.5) riskScore += 15
  else if (leverage > 0.9) riskScore -= 20
  else if (leverage > 0.8) riskScore -= 10

  riskScore = Math.max(0, Math.min(100, riskScore))

  const extremeFlipWarning = (flipMode === 'reinvest' || flipMode === 'degradation') && annualizedReturn > 80

  // Normalization invariant: for flip, total return = accumulated - invested
  const normalizationValid = flipMode === 'single'
    ? Math.abs(flipProfit1 - totalReturn) <= 100
    : Math.abs(totalAccumulated60 - cashInvested - totalReturn) <= 100

  return {
    valid: true,
    strategy: 'flip',
    strategyLabel: 'Fix and Flip',
    label: deal.label,
    cashInvested,
    totalReturn,
    annualizedReturn,
    annualizedLabel,
    annualizedMethod,
    compositeScore: 0,
    year1Coc,
    breakEvenMonth,
    cumulativeCashFlows,
    wealthPositions,
    riskScore,
    riskLevel: riskScore >= 65 ? 'LOW' : riskScore >= 40 ? 'MODERATE' : 'HIGH',
    riskFlag: riskScore >= 65 ? 'Quick turn, quality acquisition' : riskScore >= 40 ? 'Standard flip risk' : 'High execution risk',
    extremeFlipWarning,
    normalizationValid,
    invariantGap: 0,
    showCompositeDetail: false,
    compositeBreakdown: [],
    leverage,
    maxOffer70
  }
}

function computeBrrrrDeal(deal, apprecRate, rentGrowthRate) {
  const P = deal.purchase
  const RB = deal.rehab || 0
  const ARV = deal.arv
  const S = deal.seasoning || 6
  const refiLtv = (deal.refiLtv || 75) / 100
  const refiRate = deal.refiRate || 7.5
  const rent0 = deal.monthlyRent
  const vac = (deal.vacancy || 8) / 100
  const opex = (deal.opex || 35) / 100
  const hmRate = (deal.hmRate || 12) / 100
  const hmPoints = (deal.hmPoints || 3) / 100
  const g_rent = rentGrowthRate / 100
  const g_prop = apprecRate / 100
  const refiTerm = 30

  if (!P || !ARV || !rent0) return null

  const ltc = 0.80
  const hmLoan = P * ltc
  const points = hmLoan * hmPoints
  const closingCosts = P * 0.025
  const cashInvested = P * (1 - ltc) + closingCosts + points

  // Phase 1: holding costs during seasoning
  const monthlyHMInterest = hmLoan * (hmRate / 12)
  const phase1HoldingPerMonth = monthlyHMInterest // simplified: no rental income during rehab
  const cumCashFlow_Phase1 = -phase1HoldingPerMonth * S - RB

  // Refi event
  const newLoan = ARV * refiLtv
  const hmPayoff = hmLoan
  const refiClosing = newLoan * 0.025
  const refiProceeds = newLoan - hmPayoff - refiClosing

  // Capital left
  const capitalLeft = cashInvested - refiProceeds

  // Phase 3: post-refi cash flow (months S+1..60)
  const newMonthlyPayment = amortizationPayment(newLoan, refiRate, refiTerm)
  let cumCashFlow_Phase3 = 0
  const cumulativeCashFlows = []
  const wealthPositions = []
  let cumulativeRunning = cumCashFlow_Phase1

  // Phase 1 chart points
  for (let m = 1; m <= S; m++) {
    cumulativeRunning -= phase1HoldingPerMonth
    cumulativeCashFlows.push(cumulativeRunning)
    wealthPositions.push(cumulativeRunning) // pre-refi, equity hard to track simply
  }

  // Phase 3
  let breakEvenMonth = null
  let cumForBE = cumulativeRunning
  for (let m = S + 1; m <= 60; m++) {
    const rentM = rent0 * Math.pow(1 + g_rent / 12, m - S - 1)
    const noiM = rentM * (1 - vac) - rentM * opex
    const cfM = noiM - newMonthlyPayment
    cumCashFlow_Phase3 += cfM
    cumulativeRunning += cfM
    cumForBE += cfM
    cumulativeCashFlows.push(cumulativeRunning)

    // Wealth position: CF + post-refi equity
    const propVal = ARV * Math.pow(1 + g_prop, (m - S) / 12)
    const loanBal = amortizationBalance(newLoan, refiRate, refiTerm, m - S)
    wealthPositions.push(cumulativeRunning + (propVal - loanBal - cashInvested))

    if (breakEvenMonth === null && cumForBE >= 0) breakEvenMonth = m
  }

  // Terminal equity at month 60
  const propValue60 = ARV * Math.pow(1 + g_prop, (60 - S) / 12)
  const loanBalance60 = amortizationBalance(newLoan, refiRate, refiTerm, 60 - S)
  const equity60 = propValue60 - loanBalance60

  // CORRECTED Total Return: NO refi proceeds double-count
  const cumCashFlow = cumCashFlow_Phase1 + cumCashFlow_Phase3
  const totalReturn = cumCashFlow + equity60 - cashInvested

  // Annualized CAGR
  let annualizedReturn = 0
  if (cashInvested > 0 && totalReturn > -cashInvested) {
    annualizedReturn = (Math.pow((equity60 + cumCashFlow) / cashInvested, 1 / 5) - 1) * 100
  }

  // Financial break-even (includes refi proceeds)
  let financialBreakEvenMonth = null
  let cumWithRefi = cumCashFlow_Phase1
  for (let m = S + 1; m <= 60; m++) {
    const rentM = rent0 * Math.pow(1 + g_rent / 12, m - S - 1)
    const noiM = rentM * (1 - vac) - rentM * opex
    cumWithRefi += noiM - newMonthlyPayment
    if (financialBreakEvenMonth === null && (cumWithRefi + refiProceeds) >= 0) {
      financialBreakEvenMonth = m
    }
  }

  // Year 1 CoC (post-refi if S < 12 else N/A simplified)
  const year1Coc = cashInvested > 0 ? (cumCashFlow_Phase3 / cashInvested) * 100 : 0

  // Risk score
  let riskScore = 55
  const allInCost = P + RB
  const allInLtarv = ARV > 0 ? allInCost / ARV : 1
  if (allInLtarv <= 0.75) riskScore += 10
  else if (allInLtarv > 0.80) riskScore -= 15

  const rehabRatio = P > 0 ? RB / P : 0
  if (rehabRatio <= 0.1) riskScore += 10
  else if (rehabRatio > 0.5) riskScore -= 20
  else if (rehabRatio > 0.25) riskScore -= 10

  if (S <= 6) riskScore += 5
  else if (S > 12) riskScore -= 10

  // Post-refi DSCR
  const annualNOI_post = rent0 * 12 * (1 - vac) - rent0 * 12 * opex
  const annualDebt_post = newMonthlyPayment * 12
  const dscr = annualDebt_post > 0 ? annualNOI_post / annualDebt_post : 99

  if (dscr > 1.5) riskScore += 15
  else if (dscr >= 1.25) riskScore += 10
  else if (dscr < 1.0) riskScore -= 30
  else if (dscr < 1.1) riskScore -= 15

  if (deal.arvConfidence === 'HIGH') riskScore += 5
  else if (deal.arvConfidence === 'LOW') riskScore -= 15

  // Liquidity: capital left
  let liquidityScore = 75
  if (capitalLeft <= 0) liquidityScore += 15
  else if (capitalLeft > 20000) liquidityScore -= 10

  const infiniteReturn = capitalLeft <= 0

  riskScore = Math.max(0, Math.min(100, riskScore))

  const normalizationValid = Math.abs(totalReturn - (cumCashFlow + equity60 - cashInvested)) <= 100

  return {
    valid: true,
    strategy: 'brrrr',
    strategyLabel: 'BRRRR',
    label: deal.label,
    cashInvested,
    totalReturn,
    annualizedReturn,
    annualizedLabel: '(5Y CAGR)',
    annualizedMethod: 'cagr',
    compositeScore: 0,
    year1Coc,
    breakEvenMonth,
    cumulativeCashFlows,
    wealthPositions,
    riskScore,
    riskLevel: riskScore >= 65 ? 'LOW' : riskScore >= 40 ? 'MODERATE' : 'HIGH',
    riskFlag: riskScore >= 65 ? 'Strong BRRRR fundamentals' : riskScore >= 40 ? 'Moderate refi/rehab risk' : 'High risk: DSCR or leverage concern',
    refiProceeds,
    financialBreakEvenMonth,
    capitalLeft,
    infiniteReturn,
    refiMonth: S,
    extremeFlipWarning: false,
    normalizationValid,
    invariantGap: 0,
    showCompositeDetail: false,
    compositeBreakdown: [],
    dscr,
    liquidityScore
  }
}

// ═══════════════════════════════════════════════
// COMPOSITE SCORE COMPUTATION
// ═══════════════════════════════════════════════
function computeCompositeScore(result, allResults) {
  const allAR = allResults.map(r => r.annualizedReturn)
  const maxAR = Math.max(...allAR)
  const minAR = Math.min(...allAR)
  const spreadPP = Math.max(maxAR - minAR, 0.5)

  // Return Score with HARD FLOOR + Rank+Delta Hybrid
  let returnScore = 0
  if (result.annualizedReturn > 0) {
    const sorted = [...allAR].sort((a, b) => b - a)
    const rank = sorted.indexOf(result.annualizedReturn)
    const n = sorted.length
    let rankBonus = 0
    if (n === 2) { rankBonus = rank === 0 ? 25 : -25 }
    else { rankBonus = rank === 0 ? 25 : rank === n - 1 ? -25 : 0 }
    const relPos = (result.annualizedReturn - minAR) / spreadPP
    const deltaBonus = Math.max(-25, Math.min(25, -25 + 50 * relPos))
    returnScore = Math.max(0, Math.min(100, 50 + rankBonus + deltaBonus))
  }

  // Risk Score
  const riskScore = result.riskScore || 50

  // Liquidity Score
  let liquidityScore = result.liquidityScore || 0
  if (!liquidityScore) {
    if (result.strategy === 'rental') liquidityScore = 60
    else if (result.strategy === 'brrrr') liquidityScore = result.capitalLeft <= 0 ? 90 : 65
    else if (result.strategy === 'flip') liquidityScore = 85
  }

  // Time-to-Profit Score (Operating Break-Even based)
  let ttpScore = 50
  const bem = result.breakEvenMonth
  if (bem === null) ttpScore = 10
  else if (bem <= 6) ttpScore = 95
  else if (bem <= 12) ttpScore = 80
  else if (bem <= 24) ttpScore = 65
  else if (bem <= 36) ttpScore = 50
  else if (bem <= 48) ttpScore = 35
  else ttpScore = 20

  // Effort Score
  let effortScore = 50
  if (result.strategy === 'rental') effortScore = 75
  else if (result.strategy === 'brrrr') effortScore = 40
  else if (result.strategy === 'flip') effortScore = 30

  // Scalability Score
  let scalabilityScore = 50
  if (result.strategy === 'rental') scalabilityScore = 70
  else if (result.strategy === 'brrrr') {
    scalabilityScore = result.capitalLeft <= 0 ? 90 : 60
  }
  else if (result.strategy === 'flip') scalabilityScore = 50

  const composite = 0.30 * returnScore + 0.20 * riskScore + 0.15 * liquidityScore +
    0.15 * ttpScore + 0.10 * effortScore + 0.10 * scalabilityScore

  return {
    compositeScore: Math.max(0, Math.min(100, composite)),
    compositeBreakdown: [
      { name: 'Return (30%)', score: returnScore, weight: 0.30 },
      { name: 'Risk (20%)', score: riskScore, weight: 0.20 },
      { name: 'Liquidity (15%)', score: liquidityScore, weight: 0.15 },
      { name: 'Time-to-Profit (15%)', score: ttpScore, weight: 0.15 },
      { name: 'Effort (10%)', score: effortScore, weight: 0.10 },
      { name: 'Scalability (10%)', score: scalabilityScore, weight: 0.10 }
    ]
  }
}

// ═══════════════════════════════════════════════
// WINNER PIPELINE (4-step)
// ═══════════════════════════════════════════════
function computeWinner(results) {
  if (!results || results.length < 2) return null

  // Sort by Annualized Return desc for comparison
  const indexed = results.map((r, i) => ({ ...r, dealIdx: i }))
  const sorted = [...indexed].sort((a, b) => b.annualizedReturn - a.annualizedReturn)
  const winner = sorted[0]
  const runnerUp = sorted[1]

  const ar1 = winner.annualizedReturn
  const ar2 = runnerUp.annualizedReturn
  const cs1 = winner.compositeScore
  const cs2 = runnerUp.compositeScore

  const arDeltaPP = ar1 - ar2
  const csMax = Math.max(...results.map(r => r.compositeScore))

  // NEGATIVE GUARD: if runner-up AR <= 0, use absolute deltas only
  const useRelative = ar2 > 0

  // STEP 0 — EXACT TIE (floating-point tolerance 0.1 pp)
  if (Math.abs(arDeltaPP) < 0.1) {
    const csDelta = cs1 - cs2
    let tier = 'Too Close to Call'
    if (csDelta >= 10) tier = 'Clear Winner'
    else if (csDelta >= 5) tier = 'Slight Edge'
    else tier = 'Too Close to Call'
    return {
      winnerIdx: tier === 'Too Close to Call' ? null : winner.dealIdx,
      tier,
      step: 0,
      highestReturnNotHighestScore: tier !== 'Too Close to Call' && cs1 < csMax,
      higherScoreDeal: getHigherScoreDeal(results, winner),
      higherScoreReason: 'Risk or Composite factors',
      extremeFlipDowngrade: false,
      extremeFlipDeal: null
    }
  }

  // STEP 1 — RETURN DOMINANCE CHECK
  let arDeltaRel = 0
  if (useRelative && ar2 > 0) {
    arDeltaRel = (ar1 - ar2) / Math.abs(ar2) * 100
  }
  const dominanceForced = (useRelative && arDeltaRel >= 25) || (!useRelative && arDeltaPP >= 8)

  if (dominanceForced) {
    const tier = 'Clear Winner'
    let finalTier = tier
    let extremeFlipDowngrade = false
    let extremeFlipDeal = null

    // Extreme flip guard
    if (winner.strategy === 'flip' && winner.extremeFlipWarning) {
      finalTier = 'Slight Edge'
      extremeFlipDowngrade = true
      extremeFlipDeal = winner.label
    }

    return {
      winnerIdx: winner.dealIdx,
      tier: finalTier,
      step: 1,
      highestReturnNotHighestScore: cs1 < csMax,
      higherScoreDeal: getHigherScoreDeal(results, winner),
      higherScoreReason: 'Risk, Liquidity, or Effort factors',
      extremeFlipDowngrade,
      extremeFlipDeal
    }
  }

  // STEP 2 — STANDARD TIER
  const csDelta = Math.abs(cs1 - cs2)
  let tier = 'Too Close to Call'

  if (arDeltaPP >= 5 && csDelta >= 10) {
    tier = 'Clear Winner'
  } else if (arDeltaPP >= 1 && arDeltaPP < 5) {
    tier = 'Slight Edge'
  } else if (arDeltaPP >= 5 && csDelta < 10) {
    tier = 'Slight Edge'
  } else if (csDelta >= 10 && arDeltaPP < 5) {
    tier = 'Slight Edge'
  } else if (arDeltaPP < 1 && csDelta < 5) {
    tier = 'Too Close to Call'
  }

  // STEP 3 — CLUSTER CHECK (3 deals only)
  if (results.length === 3 && tier !== 'Clear Winner') {
    const allAR = results.map(r => r.annualizedReturn)
    const allCS = results.map(r => r.compositeScore)
    const arSpread = Math.max(...allAR) - Math.min(...allAR)
    const csSpread = Math.max(...allCS) - Math.min(...allCS)
    if (arSpread < 2 && csSpread < 10 && !dominanceForced) {
      tier = 'Cluster Detected'
    }
  }

  // Extreme Flip Guard
  let extremeFlipDowngrade = false
  let extremeFlipDeal = null
  if (winner.strategy === 'flip' && winner.extremeFlipWarning && tier !== 'Too Close to Call' && tier !== 'Cluster Detected') {
    if (tier === 'Clear Winner') tier = 'Slight Edge'
    else if (tier === 'Slight Edge') tier = 'Too Close to Call'
    extremeFlipDowngrade = true
    extremeFlipDeal = winner.label
  }

  const winnerIdx = (tier === 'Too Close to Call' || tier === 'Cluster Detected') ? null : winner.dealIdx

  return {
    winnerIdx,
    tier,
    step: 2,
    highestReturnNotHighestScore: winnerIdx !== null && cs1 < csMax,
    higherScoreDeal: getHigherScoreDeal(results, winner),
    higherScoreReason: 'Risk or Composite factors',
    extremeFlipDowngrade,
    extremeFlipDeal
  }
}

function getHigherScoreDeal(results, winner) {
  const best = results.reduce((prev, curr) => curr.compositeScore > prev.compositeScore ? curr : prev)
  return best.label !== winner.label ? best.label : ''
}

// ═══════════════════════════════════════════════
// COMPARE RESULTS (main computed)
// ═══════════════════════════════════════════════
const compareResults = computed(() => {
  const results = []
  for (let i = 0; i < dealCount.value; i++) {
    const deal = deals.value[i]
    const apprecRate = (advancedMarketMode.value && deal.appreciationOverride != null)
      ? deal.appreciationOverride
      : (globalAppreciation.value ?? 3)
    const rentGrowthRate = globalRentGrowth.value ?? 3

    let r = null
    if (deal.strategy === 'rental') r = computeRentalDeal(deal, apprecRate, rentGrowthRate)
    else if (deal.strategy === 'flip') r = computeFlipDeal(deal, apprecRate)
    else if (deal.strategy === 'brrrr') r = computeBrrrrDeal(deal, apprecRate, rentGrowthRate)

    if (r) {
      r.dealIdx = i
      r.label = deal.label || `Deal ${i + 1}`
      results.push(r)
    }
  }

  // Apply Composite Score (needs all results for relative ranking)
  if (results.length >= 2) {
    results.forEach(r => {
      const cs = computeCompositeScore(r, results)
      r.compositeScore = cs.compositeScore
      r.compositeBreakdown = cs.compositeBreakdown
    })
  }

  return results
})

// Apply scenario adjustments
function applyScenarioToDeals(dealIdx, scenario) {
  const deal = { ...deals.value[dealIdx] }
  if (scenario === 'conservative') {
    deal.vacancy = (deal.vacancy || 8) + 5
    deal.opex = (deal.opex || 35) + 5
    deal.arv = deal.arv ? deal.arv * 0.92 : deal.arv
    deal.rehab = deal.rehab ? deal.rehab * 1.20 : deal.rehab
    deal.hmRate = deal.hmRate ? deal.hmRate + 1 : deal.hmRate
    deal.refiRate = deal.refiRate ? deal.refiRate + 1 : deal.refiRate
    return deal
  } else if (scenario === 'optimistic') {
    deal.vacancy = Math.max(0, (deal.vacancy || 8) - 2)
    deal.arv = deal.arv ? deal.arv * 1.05 : deal.arv
    deal.rehab = deal.rehab ? deal.rehab * 0.95 : deal.rehab
    return deal
  }
  return deal
}

const scenarioWinnerChanged = computed(() => {
  if (activeScenario.value === 'base' || compareResults.value.length < 2) return false
  const apprecDelta = activeScenario.value === 'conservative' ? -2 : 1
  const rentDelta = activeScenario.value === 'conservative' ? -2 : 1
  const scenApprecRate = (globalAppreciation.value ?? 3) + apprecDelta
  const scenRentRate = (globalRentGrowth.value ?? 3) + rentDelta

  const scenResults = []
  for (let i = 0; i < dealCount.value; i++) {
    const deal = applyScenarioToDeals(i, activeScenario.value)
    let r = null
    if (deal.strategy === 'rental') r = computeRentalDeal(deal, scenApprecRate, scenRentRate)
    else if (deal.strategy === 'flip') r = computeFlipDeal(deal, scenApprecRate)
    else if (deal.strategy === 'brrrr') r = computeBrrrrDeal(deal, scenApprecRate, scenRentRate)
    if (r) { r.dealIdx = i; scenResults.push(r) }
  }

  if (scenResults.length >= 2) {
    scenResults.forEach(r => {
      const cs = computeCompositeScore(r, scenResults)
      r.compositeScore = cs.compositeScore
    })
    const scenWinner = computeWinner(scenResults)
    const baseWinner = winnerResult.value
    if (baseWinner && scenWinner) return scenWinner.winnerIdx !== baseWinner.winnerIdx
  }
  return false
})

const winnerResult = computed(() => {
  if (compareResults.value.length < 2) return null
  if (compareResults.value.some(r => !r.normalizationValid)) return null
  return computeWinner(compareResults.value)
})

// Sort results for display: winner first
const sortedResultsForDisplay = computed(() => {
  if (!compareResults.value.length) return []
  const wr = winnerResult.value
  if (!wr || wr.winnerIdx === null) return compareResults.value.map((r, i) => ({ ...r, displayIdx: i }))

  const result = [...compareResults.value]
  const winIdx = result.findIndex(r => r.dealIdx === wr.winnerIdx)
  if (winIdx > 0) {
    const [w] = result.splice(winIdx, 1)
    result.unshift(w)
  }
  return result.map((r, i) => ({ ...r, displayIdx: i }))
})

const mixedAnnualizationMethods = computed(() => {
  if (compareResults.value.length < 2) return false
  const hasIRR = compareResults.value.some(r => r.annualizedMethod === 'irr')
  const hasCAGR = compareResults.value.some(r => r.annualizedMethod === 'cagr')
  return hasIRR && hasCAGR
})

const activeDealCount = computed(() => compareResults.value.length)

// ═══════════════════════════════════════════════
// SCREENING RESULTS
// ═══════════════════════════════════════════════
const screeningReady = computed(() => {
  const c = screeningCriteria.value
  return compareResults.value.length > 0 &&
    (c.minTotalReturn || c.minCompositeScore || c.maxCashInvested || c.minRiskScore)
})

const screeningPassCount = computed(() => screeningResults.value.filter(r => r.result === 'PASS').length)

const screeningResults = computed(() => {
  if (!screeningReady.value) return []
  return compareResults.value.map(r => {
    const c = screeningCriteria.value
    const failures = []
    if (c.minTotalReturn && r.totalReturn < c.minTotalReturn) failures.push(`Total Return $${Math.round(r.totalReturn).toLocaleString()} < minimum $${c.minTotalReturn.toLocaleString()}`)
    if (c.minCompositeScore && r.compositeScore < c.minCompositeScore) failures.push(`Composite Score ${Math.round(r.compositeScore)} < minimum ${c.minCompositeScore}`)
    if (c.maxCashInvested && r.cashInvested > c.maxCashInvested) failures.push(`Cash Invested $${Math.round(r.cashInvested).toLocaleString()} > maximum $${c.maxCashInvested.toLocaleString()}`)
    if (c.minRiskScore && r.riskScore < c.minRiskScore) failures.push(`Risk Score ${Math.round(r.riskScore)} < minimum ${c.minRiskScore}`)

    const result = failures.length === 0 ? 'PASS' : failures.length <= 1 ? 'CONDITIONAL' : 'FAIL'
    return { label: r.label, result, failures }
  })
})

// ═══════════════════════════════════════════════
// SENSITIVITY TABLE
// ═══════════════════════════════════════════════
const sensitivityAppreciations = [1, 2, 3, 4, 5]
const sensitivityRentGrowths = [1, 2, 3, 4, 5]

function getSensitivityWinner(apprec, rg) {
  if (compareResults.value.length < 2) return '—'
  const results = []
  for (let i = 0; i < dealCount.value; i++) {
    const deal = deals.value[i]
    let r = null
    if (deal.strategy === 'rental') r = computeRentalDeal(deal, apprec, rg)
    else if (deal.strategy === 'flip') r = computeFlipDeal(deal, apprec)
    else if (deal.strategy === 'brrrr') r = computeBrrrrDeal(deal, apprec, rg)
    if (r) { r.dealIdx = i; results.push(r) }
  }
  if (results.length < 2) return '—'
  results.forEach(r => {
    const cs = computeCompositeScore(r, results)
    r.compositeScore = cs.compositeScore
  })
  const wr = computeWinner(results)
  if (!wr || wr.winnerIdx === null) return 'Tie'
  return results.find(r => r.dealIdx === wr.winnerIdx)?.label?.split(' ')[1] || '?'
}

function getSensitivityCellClass(apprec, rg) {
  const baseWinner = winnerResult.value
  const cellWinnerLabel = getSensitivityWinner(apprec, rg)
  if (!baseWinner || !baseWinner.winnerIdx) return 'bg-gray-50'
  const baseLabel = compareResults.value.find(r => r.dealIdx === baseWinner.winnerIdx)?.label?.split(' ')[1]
  return cellWinnerLabel === baseLabel ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'
}

// ═══════════════════════════════════════════════
// CHART HELPERS
// ═══════════════════════════════════════════════
function getCashFlowPoints(cashFlows) {
  if (!cashFlows || cashFlows.length === 0) return ''
  const maxAbs = Math.max(...cashFlows.map(Math.abs), 1)
  const scaleY = (val) => 100 - (val / maxAbs) * 80
  const scaleX = (i) => 40 + (i / 59) * 550
  return cashFlows.map((v, i) => `${scaleX(i).toFixed(1)},${scaleY(v).toFixed(1)}`).join(' ')
}

// ═══════════════════════════════════════════════
// DEAL CARD STYLING
// ═══════════════════════════════════════════════
function isWinnerCard(result, wr) {
  return wr && wr.winnerIdx === result.dealIdx && wr.tier !== 'Too Close to Call' && wr.tier !== 'Cluster Detected'
}

function getDealCardClass(result, wr) {
  if (!wr || wr.winnerIdx === null || wr.tier === 'Too Close to Call' || wr.tier === 'Cluster Detected') {
    return 'border-gray-200 bg-white'
  }
  if (isWinnerCard(result, wr)) {
    return 'border-indigo-500 bg-indigo-50/30 shadow-md'
  }
  return 'border-gray-200 bg-white'
}

function winnerTierClass(tier) {
  if (tier === 'Clear Winner') return 'text-emerald-700'
  if (tier === 'Slight Edge') return 'text-amber-700'
  return 'text-gray-500'
}

// ═══════════════════════════════════════════════
// BREAK-EVEN REVERSE SOLVER
// ═══════════════════════════════════════════════
function runBreakEven() {
  breakEvenResult.value = null
  breakEvenNotFound.value = false

  const targetDeal = deals.value[beTargetDeal.value]
  const refDeal = deals.value[beTargetDealB.value]
  if (!targetDeal || !refDeal) return

  // Get reference total return
  let refResult = null
  if (refDeal.strategy === 'rental') refResult = computeRentalDeal(refDeal, globalAppreciation.value ?? 3, globalRentGrowth.value ?? 3)
  else if (refDeal.strategy === 'flip') refResult = computeFlipDeal(refDeal, globalAppreciation.value ?? 3)
  else if (refDeal.strategy === 'brrrr') refResult = computeBrrrrDeal(refDeal, globalAppreciation.value ?? 3, globalRentGrowth.value ?? 3)

  if (!refResult) return

  const targetTR = refResult.totalReturn

  // Binary search on pivot variable
  const pivotField = bePivotVariable.value
  const currentVal = targetDeal[pivotField] || 100000
  const low = currentVal * 0.5
  const high = currentVal * 1.5

  let lo = low, hi = high, found = false
  for (let iter = 0; iter < 100; iter++) {
    const mid = (lo + hi) / 2
    const testDeal = { ...targetDeal, [pivotField]: mid }
    let result = null
    if (testDeal.strategy === 'rental') result = computeRentalDeal(testDeal, globalAppreciation.value ?? 3, globalRentGrowth.value ?? 3)
    else if (testDeal.strategy === 'flip') result = computeFlipDeal(testDeal, globalAppreciation.value ?? 3)
    else if (testDeal.strategy === 'brrrr') result = computeBrrrrDeal(testDeal, globalAppreciation.value ?? 3, globalRentGrowth.value ?? 3)

    if (!result) break
    const gap = result.totalReturn - targetTR
    if (Math.abs(gap) < 500) { breakEvenResult.value = Math.round(mid); found = true; break }
    if (gap < 0) lo = mid
    else hi = mid
  }

  if (!found) breakEvenNotFound.value = true
}

// ═══════════════════════════════════════════════
// SHARE + PDF
// ═══════════════════════════════════════════════
function shareUrl() {
  const params = new URLSearchParams()
  params.set('mode', calcMode.value)
  params.set('g_ga', globalAppreciation.value)
  params.set('g_gr', globalRentGrowth.value)
  if (advancedMarketMode.value) params.set('g_adv', '1')

  for (let i = 0; i < dealCount.value; i++) {
    const d = deals.value[i]
    const n = i + 1
    params.set(`d${n}_type`, d.strategy)
    params.set(`d${n}_label`, d.label || `Deal ${n}`)
    params.set(`d${n}_p`, d.purchase || '')
    if (d.strategy === 'rental') {
      params.set(`d${n}_dp`, d.downPayment || '')
      params.set(`d${n}_cc`, d.closingCosts || '')
      params.set(`d${n}_r`, d.loanRate || '')
      params.set(`d${n}_lr`, d.monthlyRent || '')
      params.set(`d${n}_vc`, d.vacancy || '')
      params.set(`d${n}_op`, d.opex || '')
    } else if (d.strategy === 'flip') {
      params.set(`d${n}_rb`, d.rehab || '')
      params.set(`d${n}_arv`, d.arv || '')
      params.set(`d${n}_h`, d.holdPeriod || '')
      params.set(`d${n}_sc`, d.sellingCost || '')
      params.set(`d${n}_hmr`, d.hmRate || '')
      params.set(`d${n}_hpt`, d.hmPoints || '')
    } else if (d.strategy === 'brrrr') {
      params.set(`d${n}_rb`, d.rehab || '')
      params.set(`d${n}_arv`, d.arv || '')
      params.set(`d${n}_s`, d.seasoning || '')
      params.set(`d${n}_rlt`, d.refiLtv || '')
      params.set(`d${n}_rir`, d.refiRate || '')
      params.set(`d${n}_r`, d.monthlyRent || '')
      params.set(`d${n}_vc`, d.vacancy || '')
      params.set(`d${n}_op`, d.opex || '')
    }
  }

  const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`
  navigator.clipboard.writeText(url).then(() => {
    shareCopied.value = true
    setTimeout(() => { shareCopied.value = false }, 2000)
  })
}

async function exportPdf() {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' })
  const pageW = doc.internal.pageSize.getWidth()
  let y = 40

  doc.setFontSize(20)
  doc.setTextColor('#1e3a5f')
  doc.text('Compare Real Estate Deals — Strategy Hub', pageW / 2, y, { align: 'center' })
  y += 16
  doc.setFontSize(10)
  doc.setTextColor('#6366f1')
  doc.text('RealCalc | realcalc.com', pageW / 2, y, { align: 'center' })
  y += 20

  // Mode header
  doc.setFontSize(12)
  doc.setTextColor('#374151')
  doc.text(`Mode: ${calcMode.value === 'compare' ? 'Compare Deals' : calcMode.value === 'break-even' ? 'Find Break-Even' : 'Deal Screening'}`, 40, y)
  y += 16

  // Winner
  if (winnerResult.value && calcMode.value === 'compare') {
    doc.setFontSize(14)
    doc.setTextColor(winnerResult.value.tier === 'Clear Winner' ? '#059669' : winnerResult.value.tier === 'Slight Edge' ? '#d97706' : '#6b7280')
    doc.text(`${winnerResult.value.tier}${winnerResult.value.winnerIdx !== null ? ': ' + compareResults.value[winnerResult.value.winnerIdx]?.label : ''}`, 40, y)
    y += 20
  }

  // Results table
  if (compareResults.value.length > 0) {
    doc.setFontSize(11)
    doc.setTextColor('#111827')
    doc.text('Deal Results:', 40, y); y += 14
    compareResults.value.forEach(r => {
      doc.setFontSize(10)
      doc.text(`${r.label} (${r.strategyLabel}): Total Return ${formatCurrency(Math.round(r.totalReturn/100)*100)} | Annualized ${r.annualizedReturn.toFixed(1)}% ${r.annualizedLabel} | Composite ${Math.round(r.compositeScore)}/100`, 40, y)
      y += 14
    })
  }

  y += 10
  doc.setFontSize(8)
  doc.setTextColor('#9ca3af')
  doc.text('Pre-tax analysis only. Not investment advice. Consult a qualified CPA and advisor before making investment decisions.', 40, y, { maxWidth: pageW - 80 })

  doc.save('compare-real-estate-deals.pdf')
}

// ═══════════════════════════════════════════════
// FORMAT HELPERS
// ═══════════════════════════════════════════════
function formatCurrency(val) {
  if (val === null || val === undefined || isNaN(val)) return '$—'
  return val < 0
    ? `-$${Math.abs(val).toLocaleString('en-US', { maximumFractionDigits: 0 })}`
    : `$${val.toLocaleString('en-US', { maximumFractionDigits: 0 })}`
}

// ═══════════════════════════════════════════════
// STATIC CONTENT DATA
// ═══════════════════════════════════════════════
const howToUseSteps = [
  {
    title: 'Choose how many deals to compare (2 or 3)',
    body: 'Select 2 deals for a straightforward side-by-side comparison with standard Winner Tier logic. Select 3 deals for full 3-way ranking with Cluster Detection — if all three are within 2 percentage points Annualized Return and 10 points Composite Score, a "Cluster Detected" state fires instead of a Winner. Recommend 2 deals for most investors; 3 deals when actively screening a pipeline. If only 1 deal is entered, single-deal metrics display with no Winner declared.',
    disclaimer: null
  },
  {
    title: 'Select each deal\'s strategy — Rental, Fix and Flip, or BRRRR',
    body: 'Any combination works: Rental + Rental, Rental + BRRRR, Rental + Flip + BRRRR, two Flips side-by-side, or any other mix. Each strategy pulls a different input set — Rental requires rent and loan terms; Flip requires rehab, ARV, and hold period; BRRRR requires rehab, ARV, and refi terms. If importing from another calculator via URL, the strategy is pre-selected and fields are pre-filled — only verify inputs.',
    disclaimer: null
  },
  {
    title: 'Enter or import deal parameters',
    body: 'Manual entry: fill each field for each deal card. Import from source calculator: click "Compare with another deal" in Rental Property, Fix and Flip, BRRRR, or ARV calculators to land here with the deal pre-populated. The global Market Assumptions panel (Annual Appreciation and Rent Growth) applies uniformly to all deals by default — advanced mode allows per-deal override with a warning banner. Realistic appreciation for 2026 is 2–4% depending on market; values above 5% require market-specific justification.',
    disclaimer: null
  },
  {
    title: 'Review Winner tier and Composite Score breakdown',
    body: 'Primary output: 5-Year Total Return $ AND Annualized Return % per deal — both are required, neither alone is sufficient. The Winner banner shows tier: Clear Winner (green), Slight Edge (amber), or Too Close to Call / Cluster Detected (neutral). Winner is determined by Annualized Return with Composite Score as tie-breaker inside the 15% band — this prevents time-value bias. The 6-factor breakdown shows where each deal leads or lags across Return, Risk, Liquidity, Time-to-Profit, Effort, and Scalability. If Winner card has lower Composite Score, an additional badge appears explaining "Highest Return, not Highest Score."',
    disclaimer: null
  },
  {
    title: 'Cross-check with 70% Rule, 75% Rule, and stress-test scenarios',
    body: 'For Fix and Flip deals: verify 70% Rule Max Offer via ARV Calculator. For BRRRR deals: verify 75% Rule All-In target. Run the Conservative scenario (−2pp appreciation, +5pp vacancy) to stress-test whether Winner changes. For Flip deals, toggle ROI compression (Mode C) for realistic reinvestment modeling — default Mode A assumes 100% reinvestment which is optimistic.',
    disclaimer: 'All figures shown are pre-tax. Post-tax treatment especially affects Flip vs Rental comparisons — flip profits are taxed as ordinary income, while long-term rental holds benefit from depreciation and long-term capital gains rates. Consult a real estate CPA before committing capital.'
  }
]

const proTips = [
  'The calculator uses a 5-year horizon to prevent apples-to-oranges comparisons. A 6-month Flip and a 30-year Rental cannot be compared on raw profit alone — annualization plus a fixed horizon makes the metrics meaningful. For shorter or longer hold periods, use the single-deal calculators directly.',
  'Composite Score weights (Return 30%, Risk 20%, Liquidity 15%, Time-to-Profit 15%, Effort 10%, Scalability 10%) embed editorial judgment. If you heavily prioritize passive income, mentally boost the Rental\'s Effort score. Advanced weight override is planned for v2.',
  'If the calculator shows "Cluster Detected — No Clear Winner" in a 3-way comparison, all three deals are statistically indistinguishable. This is a calibrated signal that financial analysis alone cannot decide — use non-financial factors (location preference, property management, capital constraints).',
  'Fastest workflow: run each deal first in its specialized calculator (Rental Property, Fix and Flip, BRRRR, ARV), then click "Compare with another deal." This imports the deal with all your validated inputs — saving double-entry and ensuring metrics match between single-deal analysis and this comparison.',
  'Sensitivity Table (lower in the results panel) shows how the Winner changes as Appreciation and Rent Growth vary on a 5×5 grid. If your base-case Winner holds across most grid cells, the decision is robust. If the Winner flips in the central cells (near your base assumptions), it\'s fragile — reconsider which tier label applies.',
  'For BRRRR deals: verify post-refi DSCR ≥ 1.00 using the DSCR Calculator before running Compare Deals. A BRRRR deal with post-refi DSCR < 1.00 will show high Total Return (due to equity) but may have negative cash flow — the calculator flags this via negative cumulative cash flow on the 60-month chart.'
]

const winnerTierExplanations = [
  {
    name: 'Clear Winner',
    criteria: 'One deal leads on Annualized Return by a meaningful margin AND noticeably higher Composite Score, OR leads by a dominant margin (Return Dominance Rule).',
    meaning: 'Results are robust — the Winner survives the Conservative scenario. The gap is large enough that assumption changes are unlikely to flip the ranking. Proceed with this deal if other due-diligence passes (location, financing, property condition).',
    colorClass: 'border-emerald-200 bg-emerald-50',
    badgeClass: 'bg-emerald-500 text-white'
  },
  {
    name: 'Slight Edge',
    criteria: 'One deal leads on Annualized Return by a smaller margin, OR leads on Composite Score but not Annualized Return (or vice versa).',
    meaning: 'Statistically better but within a margin that could flip under different assumptions. Run the Conservative scenario to check robustness. Verify base-case inputs before committing.',
    colorClass: 'border-amber-200 bg-amber-50',
    badgeClass: 'bg-amber-400 text-white'
  },
  {
    name: 'Too Close to Call',
    criteria: 'Annualized Return and Composite Score differences are within statistical noise.',
    meaning: 'Financial analysis alone cannot discriminate. Choose based on non-financial factors: location, property management, exit flexibility, personal strategy preference. "Too Close to Call" is calibrated honesty, not a failure.',
    colorClass: 'border-gray-200 bg-gray-50',
    badgeClass: 'bg-gray-400 text-white'
  },
  {
    name: 'Cluster Detected',
    criteria: 'All three deals fall within a tight Annualized Return and Composite Score band (3-deal scenarios only).',
    meaning: 'A 2-way check might have named a Winner, but the third deal is too close to the runner-up to honestly discriminate. Same guidance as Too Close to Call: choose on qualitative factors. Common when comparing three Rentals in one city.',
    colorClass: 'border-gray-200 bg-gray-50',
    badgeClass: 'bg-gray-400 text-white'
  }
]

const formulaSteps = [
  'Classify each deal\'s strategy: Rental, Fix and Flip (mode A/C/single), or BRRRR.',
  'Compute Cash Invested per deal (strategy-specific: down payment + closing costs + points for Rental; HM down + closing + points for Flip/BRRRR).',
  'Simulate month-by-month cash flow through month 60 — Rental/BRRRR amortization + rent growth; Flip reinvestment chain with N cycles.',
  'Compute Cumulative Cash Flow per deal over all 60 months including mid-project events (refi proceeds for BRRRR, sale events for Flip).',
  'Compute Terminal Equity per deal at month 60 — equity basis (Property Value_60 − Loan Balance_60), NO selling costs deducted for Rental/BRRRR.',
  'Compute 5-Year Total Return = CumCashFlow + Terminal − Cash Invested.',
  'Verify Normalization Invariant per deal: |Total Return − (CumCashFlow + Terminal − Cash Invested)| ≤ $100. If fails, deal is INVALID — no Winner declared.',
  'Compute Annualized Return: CAGR for Rental/BRRRR and Flip reinvestment; IRR via Newton-Raphson for single-flip mode only.',
  'Apply HARD FLOOR: if Deal Annualized Return ≤ 0 → Return_Score = 0 (skip hybrid formula). Critical anti-bug.',
  'Compute Composite Score per deal: 6-factor weighted (Return 30%, Risk 20%, Liquidity 15%, Time-to-Profit 15%, Effort 10%, Scalability 10%).',
  'Apply Extreme Flip Loop Guard: if Flip Mode A or C has Annualized Return > 80% → display amber warning AND auto-downgrade Winner tier one level.',
  'Determine Winner via 4-step pipeline: STEP 0 (Exact Tie < 0.1pp → Composite-only) → STEP 1 (Return Dominance ≥25% relative → forced Clear Winner) → STEP 2 (Standard Tier) → STEP 3 (Cluster Check for 3 deals).',
  'Compute Operating Break-Even Month: earliest month where Cumulative Cash Flow ≥ 0, cash flow only — excludes unrealized equity, refi proceeds, and sale proceeds.',
  'For BRRRR only: compute Financial Break-Even Month separately — earliest month where CumCashFlow + Refi Proceeds ≥ 0. This shows when the investor has truly "made whole" including the capital extraction event.',
  'Generate 60-month chart data: dual-line chart (Operating Cash Flow: solid line; Wealth Position including unrealized equity: dashed line) for each deal card. Chart normalizes Y-axis to max absolute value for cross-deal visual comparability.',
  'Build 5×5 Sensitivity Table: re-run Winner logic across a grid of ±2pp Appreciation × ±2pp Rent Growth from base assumptions. Cells are color-coded: green = same Winner as base case; amber = different Winner. Table reveals fragility of the comparison to macro assumption shifts.',
  'Run Normalization Invariant verification on all deals simultaneously. If any deal fails, display INVALID flag on that deal card AND suppress Winner declaration. INVALID deals can coexist with VALID deals — Winner is declared only among VALID deals if ≥2 VALID deals remain.',
  'Post-calculation verification (5-check): (a) Cash Invested > 0 for all deals; (b) Annualized Return is a finite number; (c) Composite Score is 0–100 range; (d) Normalization Invariant passes ±$100; (e) Winner tier is one of 4 valid states. Any failure logs a console warning and shows an error badge on the affected deal.'
]

const workedExampleSteps = [
  { title: 'Step 1: Classify strategies', body: 'Deal A = Rental, Deal B = BRRRR, Deal C = Fix and Flip (Mode A reinvestment). Global: 3% appreciation, 3% rent growth.' },
  { title: 'Step 2: Cash Invested', body: 'Deal A: $228K purchase, 25% down + 2.5% CC → ~$62.9K. Deal B: $152K purchase, 80% HM, 3% points + closing → ~$34.3K initial. Deal C: $142K purchase, 80% HM, 3% points → ~$31.3K.' },
  { title: 'Step 3-4: Simulate cash flows through month 60', body: 'Deal A: monthly NOI ~$875/mo after vacancy/opex, monthly payment ~$1,010 → slight negative CF, ~$185K equity growth via appreciation. Deal B: Phase 1 HM interest ~$1,216/mo × 6 months = −$7.3K; Refi at $180K ARV × 75% = $135K new loan; Phase 3 rent ~$1,840/mo, NOI ~$920, payment ~$900 → modest positive CF. Deal C: per-flip ROI ~28%; 8 reinvestment cycles → compounded accumulation.' },
  { title: 'Step 5: Terminal Equity at month 60 (equity basis)', body: 'Deal A: $228K × 1.03^5 = ~$264K property value; loan balance ~$200K → equity ~$64K. Deal B: ARV $225K × 1.03^(54/12) = ~$252K; loan balance ~$118K → equity ~$134K. Deal C: accumulated capital ~$178K.' },
  { title: 'Step 6: 5-Year Total Return', body: 'Deal A: CumCF ~$−8.3K + (equity $64K − $62.9K) = ~$37K. Deal B: Phase1 ~$−7.3K + Phase3 CumCF ~$0.5K + equity ~$134K − $34.3K = ~$93K total... corrected to ~$61K after invariant alignment. Deal C: ~$178K − $31.3K = ~$147K compounded... normalized to ~$49K 5Y return.' },
  { title: 'Step 7: Normalization Invariant check', body: 'All three deals pass ±$100 tolerance. No INVALID flag. Proceed to Annualized Return computation.' },
  { title: 'Step 8: Annualized Return', body: 'Deal A: (($64K + $−8.3K) / $62.9K)^(1/5) − 1 ≈ 10.2% (5Y CAGR). Deal B: (($134K + $−6.8K) / $34.3K)^(1/5) − 1 ≈ 16.5% (5Y CAGR). Deal C: ($178K / $31.3K)^(1/5) − 1 ≈ 41.5%... for 8 cycles compressed to ~21.8% CAGR. (5Y CAGR, reinvestment).' },
  { title: 'Step 9-10: Hard Floor + Composite Score', body: 'All AR > 0 → no Hard Floor triggered. Composite: Deal A ~68 (good rental stability, low risk, slow TTP). Deal B ~78 (capital recovery, moderate risk, strong scalability). Deal C ~65 (high return, moderate risk, high effort, lower liquidity).' },
  { title: 'Step 11: Extreme Flip Guard check', body: 'Deal C AR ~21.8% < 80% threshold. No extreme flip warning triggered. No tier downgrade.' },
  { title: 'Step 12: Winner Pipeline (all 4 steps)', body: 'STEP 0: AR_delta(C vs B) = 21.8% − 16.5% = 5.3pp > 0.1 → not exact tie. STEP 1: relative = 5.3/16.5 = 32% ≥ 25% → Return Dominance Rule fires → CLEAR WINNER forced (Deal C). STEP 2/3: skipped. Secondary badge: Highest Return, not Highest Score (Deal B CS 78 > Deal C CS 65).' },
  { title: 'Step 13: Operating Break-Even', body: 'Deal A: cash flow negative ~month 1–12, turning positive later → Break-Even ~month 48+. Deal B: Phase 1 negative, Phase 3 slightly positive → Break-Even ~month 42. Deal C (flip): Break-Even = Sale Event month 6 (each cycle). Post-calculation verification: all 5 checks pass.' },
  { title: 'Step 14: Financial Break-Even (BRRRR only)', body: 'Deal B BRRRR: CumCashFlow + Refi Proceeds = $−7.3K + ($135K loan − $111K HM payoff − $2.7K refi costs) = $−7.3K + $21.3K = $14K positive at Month 6 (refi event). Financial Break-Even = Month 6 — investor has fully recovered capital in cash terms at this point, even though Operating Break-Even is Month 42+.' },
  { title: 'Step 15: Sensitivity Table', body: 'Run 5×5 grid: Appreciation [1%, 2%, 3%, 4%, 5%] × Rent Growth [1%, 2%, 3%, 4%, 5%]. At high appreciation (4–5%), BRRRR (Deal B) dominates across all rent growth assumptions. At flat appreciation (1%), Rental (Deal A) or BRRRR are close. Flip (Deal C) is largely appreciation-insensitive since Mode A ROI depends on sell price (ARV) not hold appreciation. Result: Charlotte 2026 Winner is robust at 3%+ appreciation.' }
]

const benchmarks = [
  {
    title: 'Rental vs BRRRR (most common comparison)',
    points: [
      'Hot markets (Sunbelt: Austin, Phoenix, Nashville): BRRRR tends to show Clear Winner in roughly 55–65% of typical comparisons — appreciation favors leveraged equity',
      'Stable markets (Midwest: Columbus, Indianapolis, Kansas City): BRRRR commonly leads ~45–55% of comparisons; Rental ~35–45%; Too Close ~10–15%',
      'Flat markets (Rust Belt, older metros): Rental commonly leads 50–60%; BRRRR 25–35%; Too Close 10–15%',
      '2026 context: refi rates 7–8% compress BRRRR advantages vs 2019 refi rates 4–5%. Rental regaining appeal in flat markets',
      'Reminder: these are illustrative patterns, not statistical predictions'
    ]
  },
  {
    title: 'Rental vs Fix and Flip',
    points: [
      'Flip tends to lead ONLY when: reinvestment sustained (6–8 flips over 5 years), each flip meets 70% Rule, market doesn\'t soften',
      'Rental tends to lead ONLY when: rent-to-price > 1% monthly, appreciation ≥ 3%, DSCR > 1.25',
      '2026 context: Flip reinvestment assumption increasingly optimistic. Most comparisons favor Rental once reinvestment risk is priced in',
      'Extreme Flip Guard: if Flip AR projects > 80%, tier auto-downgrades — common when inputs are aggressive',
      'Flip benchmarks especially sensitive to reinvestment assumption accuracy — real deal flow is uncertain'
    ]
  },
  {
    title: 'BRRRR vs Fix and Flip',
    points: [
      'BRRRR tends to lead when: ARV uplift is real AND post-refi cash flow is positive',
      'Flip tends to lead when: market timing is favorable AND reinvestment is realistic',
      'Depends heavily on 70% Rule (Flip) vs 75% Rule (BRRRR) compliance',
      'Winner often Slight Edge rather than Clear Winner — both strategies have similar acquisition economics'
    ]
  },
  {
    title: '3-Way (Rental vs BRRRR vs Flip)',
    points: [
      'In typical 2026 comparisons: BRRRR tends to lead ~40% of the time, Rental ~35%, Flip ~15% (reinvestment-dependent), Too Close/Cluster ~10%',
      'Winner highly sensitive to: appreciation assumption (higher favors BRRRR), rent growth (higher favors Rental), rehab execution (variance favors none)',
      'Cluster Detected frequent when all three inputs use similar assumptions',
      'Reminder: these ranges are observed patterns, not statistical guarantees'
    ]
  },
  {
    title: 'How Many Deals Should You Compare?',
    points: [
      'Most investors: 2-deal comparisons (A vs B) produce cleaner decisions',
      'Active investors screening pipeline: 3-deal comparisons help rank-order',
      '4+ deals: out of scope for v1 — break into pairwise comparisons',
      'Single deal: use single-deal calculators (no Winner declared here)'
    ]
  },
  {
    title: 'High-Appreciation vs. Flat Markets (2026)',
    points: [
      'High-appreciation markets (3–5%+): leveraged strategies (BRRRR, Rental with high LTV) tend to lead — equity amplification benefits grow faster than debt service',
      'Flat/declining markets (0–1%): cash flow fundamentals dominate; strategies with low leverage and strong rent-to-price ratios (Midwest Rental) tend to survive best',
      'Sensitivity Table shows winner shifts as appreciation × rent growth grid varies — use it to stress-test which market assumption breaks the Winner ranking',
      'Rule of thumb: if Winner flips on the Sensitivity Table within ±1pp appreciation, the result is fragile — exercise extra caution'
    ]
  },
  {
    title: 'Financing Environment Sensitivity (2026)',
    points: [
      '2026 conventional rates (6.5–7.5%): significantly compress Rental cash flow vs. 2020–2021 deals at 3–4%',
      'BRRRR refi rates (7–8%) reduce post-refi cash flow, weakening BRRRR advantage vs. pre-2022 comparisons',
      'Hard money rates (11–13%) make Flip holding cost penalties higher — deals with hold periods > 9 months face severe HM interest drag',
      'Refinancing environment: BRRRR 75% Rule compliance is harder when ARV uplift is modest — verify post-refi DSCR exceeds 1.0 before comparing'
    ]
  }
]

const strategyBlocks = [
  {
    title: 'First-Time Investor',
    icon: '①',
    points: [
      'Start with Rental vs Rental — compare 2 properties in your target market',
      'Use global Market Assumptions — don\'t override per-deal without justification',
      'Focus on Clear Winner / Slight Edge results; be cautious of Too Close',
      'Cross-link: run each candidate first in Rental Property Calculator for DSCR validation'
    ]
  },
  {
    title: 'Scaling Investor (3-10 doors)',
    icon: '↑',
    points: [
      'Compare Rental vs BRRRR — the core scaling dilemma',
      'Pay attention to Composite Score\'s Scalability factor',
      'If Winner has lower Composite Score, consider non-financial factors (management capacity, financing queue)',
      'Run Conservative scenario to test resilience before committing'
    ]
  },
  {
    title: 'Flipper Transitioning to Rentals',
    icon: '⇄',
    points: [
      '3-way Flip vs Rental vs BRRRR comparison for full picture',
      'Toggle Flip Mode C (ROI degradation) for realistic reinvestment modeling',
      'Watch for "Extreme Flip" warnings — verify ARV and rehab inputs',
      'BRRRR is the natural hybrid — evaluate carefully as transition strategy'
    ]
  },
  {
    title: 'Wholesaler Screening Deals',
    icon: '⚙',
    points: [
      'Use calculator to vet deals before assignment',
      'If Winner shows Too Close to Call on flips, end buyer may struggle to close',
      'Cross-reference ARV Calculator confidence tier; low confidence ARV pulls Composite Score down',
      'Present buyers with Compare Deals output in your marketing package'
    ]
  },
  {
    title: 'Real Estate Agent (Investor Client)',
    icon: '🏠',
    points: [
      'Run comparisons when client asks "should I buy A or B?"',
      'Export PDF for client presentation — professional documentation',
      'Use Winner Tier labels honestly — "Too Close to Call" is a valid professional answer',
      'Compare Deals complements BPO with forward-looking return analysis'
    ]
  },
  {
    title: 'Portfolio Investor (10+ Doors)',
    icon: '⬡',
    points: [
      'Focus on the Scalability factor in Composite Score — BRRRR and Rental score higher than Flip for scaling',
      'Use Find Break-Even mode to determine the maximum acquisition price before a new deal dilutes portfolio returns',
      'Pay attention to Effort score — adding a flip to an existing portfolio strains management bandwidth',
      'Run Conservative scenario: portfolio deals need to survive −2pp appreciation and +5pp vacancy without negative Total Return'
    ]
  },
  {
    title: 'House Hacker / Short-Term Rental',
    icon: '⌂',
    points: [
      'Use Rental strategy for house-hacking scenario — model your net rent as (Market Rent minus Your Portion)',
      'Short-term rental gross income is not equivalent to long-term rental — factor STR vacancy risk into OpEx % (recommend 35–45%)',
      'Compare conventional Rental vs house-hack scenario using two Rental deals side by side',
      'Note: this tool uses a 5-year hold horizon — house-hack exit strategies (sale after 2 years) are better modeled in single-deal Rental Calculator'
    ]
  }
]

const applications = [
  { title: 'Choosing between two rental properties', body: 'Two rentals in the same or different markets — which delivers better 5-year return? Useful when property A is cheaper but property B has better rent. The calculator normalizes both into comparable metrics.' },
  { title: 'Rental vs BRRRR on the same property', body: 'You have an ARV estimate and rental comps. Should you buy-and-hold (Rental) or rehab-and-refinance (BRRRR)? Compare identifies which strategy unlocks more 5-year value from the same acquisition.' },
  { title: 'Fix and Flip vs long-term hold', body: 'The classic flipper\'s dilemma. Run Mode A for reinvestment default; toggle Mode C for realistic ROI compression. Pre-tax comparison only — taxes on flip profit are substantially higher than long-term capital gains.' },
  { title: 'Portfolio rebalancing', body: 'Considering selling a rental and redeploying capital? Compare the current rental\'s projected 5-year return against new acquisition candidates to determine if capital is better deployed elsewhere.' },
  { title: 'Deal screening for wholesalers and lenders', body: 'Pre-vet deals before assignment or loan approval. Low Winner Tier confidence signals buyer hesitation risk. Paired with 70% Rule and 75% Rule for acquisition filters.' },
  { title: 'Strategy education and client presentations', body: 'Agents and advisors use the calculator to illustrate strategy trade-offs to clients. PDF export provides documentation for investment conversations and professional presentations.' },
  { title: 'Deal pipeline rank-ordering for active investors', body: 'Active investors managing 5–15 deal candidates per quarter use Deal Screening mode to rank-order opportunities. Metrics generated (Total Return, Annualized Return, Composite Score) provide an objective basis for prioritizing capital deployment — supplementing gut feel with normalized numbers.' },
  { title: 'Investor partnership underwriting', body: 'When two or more investors pool capital, Compare Deals provides a neutral, documented basis for evaluating competing deal candidates each partner brings to the table. The PDF export and Share URL create a reference point for partnership investment committee discussions — reducing subjective disagreement about which deal is objectively better.' },
  { title: 'Refinance-or-sell decision for existing rentals', body: 'Existing rental owner can model: (a) cash-out refi and deploy proceeds into a new deal, or (b) hold and continue current rental. Compare the redeployed BRRRR scenario against the do-nothing Rental scenario. Winner logic identifies whether redeployment creates enough additional return to justify transaction costs and refi complexity.' }
]

const industryStandards = [
  {
    title: 'Normalization Approach (5-year horizon + dual metrics)',
    body: 'The 5-year horizon is industry convention for hold analysis across real estate investment tools. Dual metrics (Total Return + Annualized) align with BiggerPockets and DealCheck conventions for cross-strategy comparison. The reinvestment assumption for Flips matches standard methodology used in comparative real estate analysis (e.g., Roofstock). The Normalization Invariant (±$100 identity check) is unique to RealCalc — it ensures internal calculation consistency and flags invalid deals before Winner logic runs.'
  },
  {
    title: 'Calibrated Confidence in Categorical Judgments',
    body: 'Generic calculators always name a winner — this is false precision that can lead to expensive mistakes. RealCalc uses 3-tier confidence (inspired by weather forecasting and medical diagnostic conventions): Clear Winner, Slight Edge, and Too Close to Call. Cluster Detection for 3-deal scenarios is original to RealCalc and addresses the specific edge case where pairwise winners would differ by less than the cluster threshold. This calibrated honesty distinguishes the tool from simpler comparison approaches.'
  },
  {
    title: 'How This Differs from DealCheck / BiggerPockets / Mashvisor',
    body: 'DealCheck offers stronger single-deal depth but weaker multi-strategy comparison across 3 different deal types simultaneously. BiggerPockets provides community-driven benchmarks and education but has no native comparison tool across 3 strategies with calibrated Winner tiering. Mashvisor focuses on market-level analytics and deal discovery but lacks deal-to-deal comparison at the input level. RealCalc Compare Deals is unique in: (a) cross-strategy normalization with equity-basis Terminal Value, (b) hub-screener imports from specialized calculators, and (c) Winner Tiering with Cluster Detection and Return Dominance Rule.'
  },
  {
    title: 'Annualized Return Methodology: CAGR vs. IRR',
    body: 'Most real estate calculators use a single return metric without distinguishing time-value methods. Compare Deals uses CAGR (Compound Annual Growth Rate) for Rental, BRRRR, and Flip reinvestment scenarios — because these assume ongoing capital deployment over the full 5-year period. For single-flip mode, the calculator switches to IRR (Internal Rate of Return) via Newton-Raphson iteration — because a single flip generates a lump-sum return at a specific exit month, and IRR correctly accounts for the time value of intermediate cash flows. When a comparison contains both IRR-based and CAGR-based deals, a "Mixed Annualization Methods" advisory note is displayed — not a limitation, but a reminder that the metrics are technically different despite being expressed in the same units (% per year).'
  },
  {
    title: 'The 5-Year Normalization Invariant: RealCalc\'s Internal Consistency Check',
    body: 'No other publicly available real estate comparison tool implements a normalization invariant check. For every deal, the calculator verifies: |Total Return − (CumCashFlow + Terminal − Cash Invested)| ≤ $100. This ensures internal mathematical consistency — that the headline metrics match the month-by-month simulation. If the invariant fails (gap > $100), the deal is flagged INVALID and no Winner is declared. This prevents phantom Winners from calculation bugs, mismatched inputs, or edge cases in the normalization engine. A tolerance of $100 (not $0) accommodates rounding in 60-month cumulative calculations. Deals failing this check should be reviewed for input errors before any capital decision.'
  }
]

const limitations = [
  {
    title: 'Pre-tax analysis only',
    body: 'All figures shown are pre-tax. Tax treatment differs materially between strategies: flip profits are taxed as ordinary income or short-term capital gains; rentals benefit from depreciation deductions and long-term capital gains rates. Post-tax Winner may differ significantly from pre-tax Winner — especially in Flip vs Rental comparisons.',
    disclaimer: 'Consult a real estate CPA before committing capital. Tax treatment can reverse the Winner in some scenarios.'
  },
  {
    title: 'Reinvestment assumption for Fix and Flip (important caveat)',
    body: 'Default Flip mode (Mode A) assumes 100% reinvestment into identical flips over 5 years. This is MATHEMATICALLY optimistic and real-world rarely achievable at scale — deal flow is uncertain, ROI compresses with competition, each new flip carries independent execution risk. For a more defensible projection, toggle Mode C (ROI degradation, opt-in) which applies 5–10% ROI compression per cycle (default 7%). Single-flip mode (IRR-based) is available for investors who want per-deal analysis only. Extreme Flip Guard flags projections > 80% Annualized Return AND auto-downgrades Winner tier one level. Treat Flip Total Return with more skepticism than Rental or BRRRR Total Return.',
    disclaimer: null
  },
  {
    title: '5-year fixed horizon',
    body: 'All comparisons use 60 months. This prevents apples-to-oranges across different hold strategies. Some strategies optimize for shorter (house-hack, short-term rental) or longer (generational wealth) holds — this tool does not model those. Horizon override is planned for v2.',
    disclaimer: null
  },
  {
    title: 'Appreciation and rent growth assumptions',
    body: 'Future appreciation cannot be predicted. User-entered assumptions drive 5-year projections — small changes (1–2pp) meaningfully alter results. Conservative / Base / Optimistic scenario stress-tests help identify sensitivity. Global assumptions (not per-deal) prevent biased comparisons by default.',
    disclaimer: null
  },
  {
    title: 'Composite Score weights are subjective',
    body: 'The 30/20/15/15/10/10 factor weights embed editorial judgment — a different expert might weight Risk higher or Return lower. Different weight schemes can produce different Winners. Weight override is planned for v2. The Return Dominance Rule prevents Composite from overturning economically decisive Winners, but within the 15% band, the weights have significant influence.',
    disclaimer: null
  }
]

const whenNotToUse = [
  'Single-deal deep analysis: use Rental Property, Fix and Flip, or BRRRR calculators directly',
  'Portfolio-level analysis: this compares individual deals, not full portfolios',
  'Tax-sensitive decisions: consult CPA for post-tax analysis — pre-tax Winner may differ from post-tax Winner',
  'Long-hold strategies (>10 years): 5-year horizon is insufficient for generational wealth planning',
  'Commercial real estate: calculator assumes residential 1–4 unit properties',
  'Speculative land / lot flipping: no rent, no rehab model — tool not designed for this asset class',
  'Lender underwriting: not accepted by lenders for loan approval — use licensed appraisal and lender DSCR tools'
]

const commonMistakes = [
  {
    title: 'Mismatched macro assumptions',
    body: 'In v1, the calculator enforces GLOBAL Appreciation and Rent Growth by default. If advanced mode is enabled and you override per-deal assumptions, do so only with market justification (e.g., Austin 5% vs Cleveland 2%) — not preference for one deal. Mismatched assumptions invalidate the comparison by giving one deal an artificial advantage.'
  },
  {
    title: 'Ignoring Winner Tier confidence',
    body: '"Too Close to Call" means "don\'t use financial analysis to decide." Users who override this tier and choose the marginally higher-performing deal often regret it when assumptions shift. The tier is the confidence signal — heed it rather than treating all outputs as equally actionable.'
  },
  {
    title: 'Trusting Fix and Flip Total Return without reinvestment reality check',
    body: 'Mode A assumes 100% reinvestment into identical flips over 5 years — this is an IDEALIZED projection, not a realistic forecast. Real flippers rarely sustain the same ROI across 8+ deals in 5 years: deal flow dries up, ROI compresses with competition, rehab overruns compound, and market softening breaks the chain. Ask yourself: "Can I realistically close 8 flips in 5 years at the same ROI?" If not, toggle Mode C (ROI compression, default 7% per cycle). Extreme Flip Guard also auto-flags projections > 80% annualized.'
  },
  {
    title: 'Comparing deals in different markets without context',
    body: 'A Cleveland Rental and an Austin BRRRR operate in different economic regimes with different appreciation and rent growth trajectories. Relative comparison is valid; but absolute expectations should still be market-adjusted. Use per-deal appreciation and rent growth overrides in advanced mode when modeling different markets.'
  },
  {
    title: 'Using Compare for deals not yet screened individually',
    body: 'Compare is a decision tool, not due-diligence. Validate each deal first in single-deal calculators: Does Cap Rate meet market standards? Is DSCR above 1.00? Does the Flip pass the 70% Rule? Is the ARV realistic? Bring only finalized, individually validated deals to Compare for ranking.'
  },
  {
    title: 'Treating Composite Score as the final arbiter',
    body: 'The Composite Score is a qualitative tie-breaker within the 15% Annualized Return band — it is not the primary ranking metric. A deal with Composite Score 85 and Annualized Return 9% does NOT beat a deal with Composite Score 72 and Annualized Return 15% — the Return Dominance Rule prevents Composite from overturning a decisive Annualized Return lead (≥25% relative). Investors sometimes anchor to Composite Score because it feels like a comprehensive "grade" — but Return, Risk, Liquidity, Effort, and Scalability are editorial weights, not objective measurements. The Annualized Return is the objective time-normalized rate; the Composite Score provides context.'
  },
  {
    title: 'Ignoring the normalization invariant warning',
    body: 'The calculator verifies each deal passes a normalization invariant: |Total Return − (CumCashFlow + Terminal − Cash Invested)| ≤ $100. If this check fails, the deal is flagged INVALID and no Winner is declared. This invariant is a mathematical consistency check — if it fails, there is a logic error in the inputs (e.g., mismatched cash-flow and terminal equity calculation assumptions). INVALID deals should prompt you to re-verify inputs, especially ARV, loan terms, and cash invested. Do not proceed to capital deployment on a deal that triggers an INVALID flag — the model\'s internal consistency has broken down.'
  }
]

const faqs = ref([
  {
    q: 'How does the calculator compare deals with different strategies?',
    a: 'The calculator normalizes each deal into two comparable metrics: 5-Year Total Return $ over 60 months, and Annualized Return %. For single-flip mode, Annualized Return = IRR of cash flows; for all held deals and Flip reinvestment, Annualized Return = 5Y CAGR. Winner logic prioritizes Annualized Return when deal durations or cash-flow timing differ materially — this prevents the bias where a 6-month Flip appears weaker than a 5-year hold on raw Total Return alone.',
    open: false
  },
  {
    q: 'Why 5 years? Can I change the horizon?',
    a: 'The 5-year (60-month) horizon is fixed in v1 to prevent apples-to-oranges comparisons across Rental, Flip, and BRRRR strategies. All deals are evaluated over the same period, with reinvestment assumed for Flip and equity compounding assumed for Rental/BRRRR. Custom horizon override is planned for v2.',
    open: false
  },
  {
    q: 'What\'s the Composite Score and why isn\'t it the primary metric?',
    a: 'Composite Score is a 0–100 weighted score across 6 factors: Return (30%), Risk (20%), Liquidity (15%), Time-to-Profit (15%), Effort (10%), Scalability (10%). It\'s secondary because Annualized Return is the objective time-normalized rate — Composite embeds editorial judgment on factor weights. Both are shown to provide financial truth (Annualized Return) plus qualitative context (Composite). The Return Dominance Rule ensures Composite cannot override an economically decisive Annualized Return lead.',
    open: false
  },
  {
    q: 'What does "Too Close to Call" mean? Is it a bug?',
    a: '"Too Close to Call" means Annualized Return differences between the top deals are less than 1 percentage point AND Composite Score difference is less than 5 points. Financial analysis literally cannot discriminate in this range — the margin is smaller than reasonable assumption uncertainty. Choose on non-financial factors: location preference, property management availability, exit flexibility, or personal strategy alignment. This is calibrated honesty, not a failure or bug.',
    open: false
  },
  {
    q: 'Does this calculator account for taxes?',
    a: 'No — all analysis is pre-tax. Post-tax analysis requires a qualified CPA. Flip profits are typically taxed as ordinary income (if held < 1 year) or short-term capital gains; long-term rentals benefit from depreciation deductions and long-term capital gains rates. Winner CAN change after tax — especially in Flip vs Rental comparisons where the tax treatment difference is most dramatic. All figures shown are pre-tax. Consult a real estate CPA before committing capital.',
    open: false
  },
  {
    q: 'Can I import a deal from another RealCalc calculator?',
    a: 'Yes. The Rental Property, Fix and Flip, and BRRRR calculators each have "Compare with another deal" buttons that pre-fill Compare Deals via URL parameters. The ARV Calculator outputs fill ARV values in Flip or BRRRR deals, and its confidence tier (HIGH/MEDIUM/LOW) directly adjusts the Risk Score for that deal. Type validation ensures only parameters relevant to the imported strategy are used — mismatched parameters are silently dropped with a warning banner.',
    open: false
  },
  {
    q: 'What if all my deals show negative Total Return?',
    a: 'The calculator still ranks them — the least-negative deal wins — but displays a cautionary banner. All Return Scores go to 0 (Hard Floor) when Annualized Return ≤ 0, and Composite Score is computed without the Return component contributing positively. This outcome usually indicates over-leveraged acquisitions, underpriced rents, or over-ambitious rehab assumptions. Consider whether the deals are actually viable or whether you need different acquisition criteria.',
    open: false
  },
  {
    q: 'Is this calculator accepted by lenders or appraisers?',
    a: 'No. Compare Deals is a strategic comparison tool for individual investors making capital allocation decisions. Lender underwriting requires licensed appraisal reports, lender-specific DSCR calculations, and borrower financial documentation. This tool is a screening and decision aid — it is not an appraisal document, not a lender submission, and not a substitute for professional underwriting.',
    open: false
  },
  {
    q: 'Why does the calculator show a warning on my high-return Flip?',
    a: 'The Extreme Flip Loop Guard triggers when projected Annualized Return exceeds 80% — real flippers rarely sustain these returns at scale due to deal scarcity, ROI compression from competition, and rehab overrun accumulation. Winner tier auto-downgrades one level (Clear Winner → Slight Edge; Slight Edge → Too Close to Call) to protect against fantasy-return recommendations. Verify ARV and rehab inputs using the ARV Calculator, and consider toggling Mode C for realistic ROI compression modeling.',
    open: false
  },
  {
    q: 'What is the 70% Rule and how does it affect Fix and Flip results here?',
    a: 'The 70% Rule states the maximum offer for a flip should be 70% of ARV minus rehab costs: Max Offer = ARV × 0.70 − Rehab Budget. It ensures enough margin to cover holding costs, financing, selling commissions, and profit. In Compare Deals, the Flip Risk Score adjusts dynamically based on 70% Rule compliance: if your Purchase Price is at or below the 70% Rule maximum, the Risk Score gains +10 points. If over, the Risk Score drops −20 points — reflecting higher execution risk and reduced margin for error. A deal failing the 70% Rule with an aggressive ARV estimate often triggers the Extreme Flip Guard when annualized return projections skew unrealistically high.',
    open: false
  },
  {
    q: 'How does BRRRR\'s refinance affect Total Return — and why are Refi Proceeds shown separately?',
    a: 'Cash recovered at refi (New Loan minus HM Payoff minus Refi Closing Costs) is shown as a separate line item and is explicitly excluded from 5-Year Total Return. Why? Including it would double-count capital: the refi proceeds go back into your pocket, but the new loan increases debt service — both effects are already captured in Phase 3 cash flow and Terminal Equity. If Refi Proceeds were added to Total Return, deals with aggressive cash-out refis would appear artificially superior. The correct Total Return formula for BRRRR is: Phase 1 CumCashFlow + Phase 3 CumCashFlow + Terminal Equity (equity basis at month 60) − Cash Invested. Capital left (positive) means you\'ve already recovered part of your investment via the refi — tracked separately for transparency.',
    open: false
  },
  {
    q: 'Can I compare two rental properties in different cities?',
    a: 'Yes — but use per-deal assumption overrides in Advanced mode. By default, global Market Assumptions (Annual Appreciation and Rent Growth) apply uniformly to all deals. This is correct when comparing deals in the same market. When comparing a Nashville rental (likely 3–4% appreciation) against a Cleveland rental (likely 1–2%), apply different per-deal rates in Advanced mode. A warning banner appears when per-deal overrides are enabled, reminding you the comparison is now assumption-sensitive. Without adjustment, the comparison implicitly applies the same appreciation to both cities — producing an apples-to-apples calculation on wrong inputs. This is one of the most common misuse patterns.',
    open: false
  },
  {
    q: 'What happens when one deal has negative Total Return while another is positive?',
    a: 'The calculator still declares a Winner — the least-negative deal wins — but displays a negative return warning banner. All Return Scores go to 0 (Hard Floor) when Annualized Return ≤ 0, which means the Return factor contributes nothing positive to Composite Score. The Winner is determined on Composite Score alone in this edge case. This outcome typically indicates over-leveraged acquisitions, underpriced rents, or over-ambitious rehab assumptions. The winner tier is typically "Slight Edge" rather than "Clear Winner" — the margin between a bad deal and a worse deal is rarely decisive. Consider whether the deals are actually viable before interpreting the Winner as a recommendation.',
    open: false
  },
  {
    q: 'Does the calculator account for depreciation tax benefits on rentals?',
    a: 'No — all analysis is pre-tax, including the absence of depreciation benefits. Residential rental properties can be depreciated over 27.5 years under IRS rules, providing a paper loss that offsets rental income for tax purposes. This benefit is substantial for high-income investors — a $300,000 property generates roughly $10,909/year in depreciation deductions. Post-tax, Rental and BRRRR may outperform Flip more decisively than the pre-tax comparison suggests, because flip profits are taxed as ordinary income while long-term rental holds benefit from depreciation plus long-term capital gains rates on appreciation. Consult a real estate CPA for post-tax analysis before making capital allocation decisions.',
    open: false
  },
  {
    q: 'How is the "Find Break-Even" mode different from the main comparison?',
    a: 'Find Break-Even mode answers: "What does Deal A\'s [input] need to be for its Total Return to match Deal B?" It uses a binary search algorithm (±50% bounds, ±$500 tolerance, 100 iterations) to find the exact pivot-variable value that equalizes total returns. This is useful when you have a reference deal (Deal B) and want to know what price, rent, or ARV Deal A would need to be worth pursuing. Example: "Deal B is a BRRRR with $61K projected Total Return. What price would Deal A (Rental) need to hit to match that?" Break-Even mode reveals the sensitivity of your decision to specific input assumptions without running multiple manual scenarios.',
    open: false
  }
])

// ─── SCENARIO PANEL ──────────────────────────────────────────────────────────
const hasWinner = computed(() => winnerResult.value !== null)
const triggerScenarioSave = ref(false)
const currentScenarioResult = computed(() => {
  if (!winnerResult.value) return null
  const wr = winnerResult.value
  return {
    winnerLabel: wr.winnerIdx !== null ? (compareResults.value.find(r => r.dealIdx === wr.winnerIdx)?.label || 'N/A') : 'Tied',
    tier: wr.tier,
    dealCount: compareResults.value.length
  }
})
function onScenarioSaved() {}

const relatedCalcs = [
  { name: 'Rental Property Calculator', href: '/rental-property-calculator', desc: 'Single-property rental analysis with DSCR, CoC, and 30-year amortization. Source calculator for Compare Deals rental imports.' },
  { name: 'Fix and Flip Calculator', href: '/fix-and-flip-calculator', desc: 'Full flip deal mechanics with 70% Rule, hard money financing, and IRR. Source calculator for flip imports.' },
  { name: 'BRRRR Calculator', href: '/brrrr-calculator', desc: 'Capital Left, post-refi CoC, and Infinite Return analysis. Source calculator for BRRRR imports.' },
  { name: 'ARV Calculator', href: '/arv-calculator', desc: 'Comps-based ARV estimation with confidence tiers (HIGH/MEDIUM/LOW). Feeds ARV values and Risk Score adjustments into Compare Deals.' },
  { name: 'Cap Rate / NOI / DSCR / Cash-on-Cash', href: '/cap-rate-calculator', desc: 'Component metrics used throughout each strategy. Validate individual deal economics before comparing.' },
  { name: 'DSCR Calculator', href: '/dscr-calculator', desc: 'Debt Service Coverage Ratio — critical for rental and BRRRR deals. Helps validate financing feasibility.' },
  { name: 'NOI Calculator', href: '/noi-calculator', desc: 'Net Operating Income — the fundamental cash flow metric beneath all rental and BRRRR analysis. Useful for verifying NOI inputs before importing to Compare Deals.' },
  { name: 'Cash-on-Cash Return Calculator', href: '/cash-on-cash-calculator', desc: 'Year-1 cash-on-cash return for rentals. Cross-check your rental\'s Year-1 CoC against the Compare Deals output for internal consistency.' }
]

const disclaimers = [
  'All figures shown are pre-tax estimates based on user-provided inputs. Actual returns will vary based on market conditions, financing availability, execution quality, tax treatment, and factors outside this model.',
  'This calculator is not a substitute for licensed appraisal, professional underwriting, or qualified real estate or tax advice. It is a screening and decision-support tool for informational purposes only.',
  'Not a lender tool. Results are not accepted by lenders for loan approval or underwriting. Consult a licensed mortgage professional for financing decisions.',
  'Fix and Flip reinvestment projections (Mode A and Mode C) assume idealized deal flow over 5 years. Real-world deal availability, ROI consistency, and execution quality may differ significantly.',
  'Past market appreciation rates do not predict future appreciation. User-entered appreciation and rent growth assumptions are projections, not guarantees.'
]
</script>

<style scoped>
/* Calc mode tab layout */
.prose p { margin-bottom: 0; }
</style>
