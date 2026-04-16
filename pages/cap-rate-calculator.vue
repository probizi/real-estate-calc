<template>
  <div class="min-h-screen bg-gray-50">

    <!-- ═══════════════════════════════════════════════
         HEADER
    ═══════════════════════════════════════════════ -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4">
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
      <div class="max-w-7xl mx-auto">
        <nav aria-label="Breadcrumb">
          <ol class="flex items-center gap-2 text-sm text-gray-400">
            <li><NuxtLink to="/" class="hover:text-gray-600 transition">Home</NuxtLink></li>
            <li><span>/</span></li>
            <li><NuxtLink to="/calculators" class="hover:text-gray-600 transition">Calculators</NuxtLink></li>
            <li><span>/</span></li>
            <li class="text-gray-700 font-semibold">Cap Rate Calculator</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         PAGE TITLE + ON THIS PAGE NAV
    ═══════════════════════════════════════════════ -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6">

        <!-- H1 -->
        <div class="mb-4">
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            Cap Rate Calculator — Free Capitalization Rate Tool for US Real Estate Investors
          </h1>
        </div>

        <!-- On this page nav -->
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>
          <ul class="flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            <li><a href="#what-is-cap-rate" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What is Cap Rate</a></li>
            <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Your Result Means</a></li>
            <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
            <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
            <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Applications</a></li>
            <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Industry Standards</a></li>
            <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
          </ul>
        </div>

      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         MOBILE LIVE RESULT BAR (sticky, hidden on desktop)
    ═══════════════════════════════════════════════ -->
    <div class="lg:hidden sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <div class="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <svg class="w-4 h-4 flex-shrink-0" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          <span v-if="calcMode === 'cap-rate'">Cap Rate</span>
          <span v-else-if="calcMode === 'find-value'">Implied Value</span>
          <span v-else>Required NOI</span>
        </div>
        <div class="flex items-center gap-3">
          <!-- cap-rate mode -->
          <template v-if="calcMode === 'cap-rate'">
            <span v-if="hasResult" class="text-2xl font-extrabold leading-none" :style="`color: ${badge.bg1}`">
              {{ capRate.toFixed(2) }}%
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="hasResult"
              class="text-xs font-bold px-2.5 py-1 rounded-full text-white"
              :style="`background: ${badge.bg1}`">
              {{ badge.label }}
            </span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <!-- find-value mode -->
          <template v-else-if="calcMode === 'find-value'">
            <span v-if="findValueResult" class="text-xl font-extrabold leading-none text-blue-700">
              {{ formatCurrency(findValueResult) }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="findValueResult" class="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">Implied</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <!-- find-noi mode -->
          <template v-else>
            <span v-if="findNOIResult" class="text-xl font-extrabold leading-none text-emerald-700">
              {{ formatCurrency(findNOIResult) }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="findNOIResult" class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">Required</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         MAIN CALCULATOR
    ═══════════════════════════════════════════════ -->
    <main id="calculator" class="max-w-7xl mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row lg:gap-8 items-start">

        <!-- ══════════════════════════════════════════
             LEFT SIDEBAR — Title card + Related links
        ══════════════════════════════════════════ -->
        <aside class="lg:w-72 xl:w-80 flex-shrink-0 space-y-5 order-2 lg:order-none mt-8 lg:mt-0">

          <!-- Title card -->
          <div class="rounded-2xl overflow-hidden" style="background: #1e3a5f;">
            <div class="p-6">
              <div class="inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full mb-3"
                style="background: rgba(245,158,11,0.2); color: #fcd34d;">
                Free · No Signup
              </div>
              <h2 class="text-2xl font-extrabold text-white mb-2 leading-tight">Cap Rate Calculator</h2>
              <p class="text-blue-200 text-sm leading-relaxed mb-4">
                The #1 metric US investors use to compare rental property returns. Covers all three use cases: find cap rate, implied value, or required NOI.
              </p>
              <div class="p-3 rounded-xl text-center" style="background: rgba(245,158,11,0.12); border: 1px solid rgba(245,158,11,0.25);">
                <span class="font-mono text-sm font-bold" style="color: #fcd34d;">Cap Rate = NOI ÷ Value × 100</span>
              </div>
            </div>
            <div class="px-6 pb-5 space-y-2 border-t border-white/10 pt-4">
              <p class="text-xs font-bold uppercase tracking-wide text-blue-400 mb-2">US Benchmarks</p>
              <div class="flex justify-between text-sm">
                <span class="text-blue-200">Midwest / Southeast</span>
                <span class="font-bold text-green-400">≥ 7%</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-blue-200">Major metros</span>
                <span class="font-bold text-yellow-400">5–6.9%</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-blue-200">NY / LA / SF</span>
                <span class="font-bold text-orange-400">&lt; 5%</span>
              </div>
            </div>
          </div>

          <!-- Related calculators -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Related Calculators</h3>
            <div class="space-y-1">
              <NuxtLink to="/noi-calculator" class="flex items-center gap-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg px-2 py-2 transition">
                <span class="w-2 h-2 rounded-full flex-shrink-0" style="background:#f59e0b;"></span>
                NOI Calculator
              </NuxtLink>
              <NuxtLink to="/cash-on-cash-calculator" class="flex items-center gap-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg px-2 py-2 transition">
                <span class="w-2 h-2 rounded-full flex-shrink-0" style="background:#3b82f6;"></span>
                Cash-on-Cash Return
              </NuxtLink>
              <NuxtLink to="/dscr-calculator" class="flex items-center gap-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg px-2 py-2 transition">
                <span class="w-2 h-2 rounded-full flex-shrink-0" style="background:#10b981;"></span>
                DSCR Calculator
              </NuxtLink>
              <NuxtLink to="/rental-property-calculator" class="flex items-center gap-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg px-2 py-2 transition">
                <span class="w-2 h-2 rounded-full flex-shrink-0" style="background:#8b5cf6;"></span>
                Rental Property Calculator
              </NuxtLink>
            </div>
          </div>

        </aside>

        <!-- ══════════════════════════════════════════
             RIGHT — Calculator content
        ══════════════════════════════════════════ -->
        <div class="flex-1 min-w-0 space-y-6 order-1 lg:order-none">

      <!-- ═══════════════════════════════════════════════
           CALCULATOR MODE SELECTOR
      ═══════════════════════════════════════════════ -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-4 pt-3 pb-2">
          <p class="text-xs font-bold uppercase tracking-wide text-center mb-2" style="color: #1e3a5f;">
            What do you want to calculate?
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">

            <!-- Mode 1: Find Cap Rate -->
            <button @click="calcMode = 'cap-rate'"
              class="relative flex flex-col items-center text-center px-3 py-2 rounded-xl border-2 transition font-semibold text-sm"
              :class="calcMode === 'cap-rate'
                ? 'border-yellow-400 bg-yellow-50 text-gray-900 shadow-sm'
                : 'border-gray-200 text-gray-500 hover:border-yellow-300 hover:bg-yellow-50/40'">
              <span v-if="calcMode === 'cap-rate'"
                class="absolute -top-2 -right-2 text-xs font-bold px-2 py-0.5 rounded-full text-white"
                style="background: #f59e0b; color: #1e3a5f;">Active</span>
              <div class="w-8 h-8 rounded-xl flex items-center justify-center mb-1.5 transition"
                :style="calcMode === 'cap-rate' ? 'background:#f59e0b;' : 'background:#f3f4f6;'">
                <svg class="w-5 h-5" :class="calcMode === 'cap-rate' ? 'text-white' : 'text-gray-400'"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <span class="font-extrabold text-base leading-tight" :style="calcMode === 'cap-rate' ? 'color:#1e3a5f;' : ''">Find Cap Rate</span>
              <span class="text-xs mt-1 leading-snug" :class="calcMode === 'cap-rate' ? 'text-amber-700' : 'text-gray-400'">
                NOI ÷ Property Value
              </span>
              <span class="text-xs mt-2 px-2.5 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'cap-rate' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-400'">
                Standard
              </span>
            </button>

            <!-- Mode 2: Find Property Value -->
            <button @click="calcMode = 'find-value'"
              class="relative flex flex-col items-center text-center px-3 py-2 rounded-xl border-2 transition font-semibold text-sm"
              :class="calcMode === 'find-value'
                ? 'border-blue-400 bg-blue-50 text-gray-900 shadow-sm'
                : 'border-gray-200 text-gray-500 hover:border-blue-300 hover:bg-blue-50/40'">
              <span v-if="calcMode === 'find-value'"
                class="absolute -top-2 -right-2 text-xs font-bold px-2 py-0.5 rounded-full text-white bg-blue-500">Active</span>
              <div class="w-8 h-8 rounded-xl flex items-center justify-center mb-1.5 transition"
                :style="calcMode === 'find-value' ? 'background:#3b82f6;' : 'background:#f3f4f6;'">
                <svg class="w-5 h-5" :class="calcMode === 'find-value' ? 'text-white' : 'text-gray-400'"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
              </div>
              <span class="font-extrabold text-base leading-tight" :style="calcMode === 'find-value' ? 'color:#1e40af;' : ''">Find Property Value</span>
              <span class="text-xs mt-1 leading-snug" :class="calcMode === 'find-value' ? 'text-blue-700' : 'text-gray-400'">
                NOI ÷ Target Cap Rate
              </span>
              <span class="text-xs mt-2 px-2.5 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-value' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-400'">
                Reverse
              </span>
            </button>

            <!-- Mode 3: Find Required NOI -->
            <button @click="calcMode = 'find-noi'"
              class="relative flex flex-col items-center text-center px-3 py-2 rounded-xl border-2 transition font-semibold text-sm"
              :class="calcMode === 'find-noi'
                ? 'border-emerald-400 bg-emerald-50 text-gray-900 shadow-sm'
                : 'border-gray-200 text-gray-500 hover:border-emerald-300 hover:bg-emerald-50/40'">
              <span v-if="calcMode === 'find-noi'"
                class="absolute -top-2 -right-2 text-xs font-bold px-2 py-0.5 rounded-full text-white bg-emerald-500">Active</span>
              <div class="w-8 h-8 rounded-xl flex items-center justify-center mb-1.5 transition"
                :style="calcMode === 'find-noi' ? 'background:#10b981;' : 'background:#f3f4f6;'">
                <svg class="w-5 h-5" :class="calcMode === 'find-noi' ? 'text-white' : 'text-gray-400'"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <span class="font-extrabold text-base leading-tight" :style="calcMode === 'find-noi' ? 'color:#065f46;' : ''">Find Required NOI</span>
              <span class="text-xs mt-1 leading-snug" :class="calcMode === 'find-noi' ? 'text-emerald-700' : 'text-gray-400'">
                Property Value × Cap Rate
              </span>
              <span class="text-xs mt-2 px-2.5 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-noi' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-400'">
                Reverse
              </span>
            </button>

          </div>

          <!-- Mode descriptions -->
          <div class="mt-3 mb-1 text-center">
            <p v-if="calcMode === 'cap-rate'" class="text-xs text-gray-500 leading-relaxed">
              Enter income, expenses, and property value to calculate the capitalization rate. Best for evaluating and comparing properties.
            </p>
            <p v-else-if="calcMode === 'find-value'" class="text-xs text-blue-700 leading-relaxed bg-blue-50 px-4 py-2 rounded-xl inline-block">
              Enter income, expenses, and a <strong>target cap rate</strong> — the calculator will show the implied property value at that yield.
            </p>
            <p v-else class="text-xs text-emerald-700 leading-relaxed bg-emerald-50 px-4 py-2 rounded-xl inline-block">
              Enter the asking price and a <strong>target cap rate</strong> — the calculator will show the NOI required to justify that price.
            </p>
          </div>

        </div>
      </div>

      <div class="grid lg:grid-cols-5 gap-6">

        <!-- ── INPUTS (3 cols) ── -->
        <div class="lg:col-span-3 space-y-3">

          <!-- Income Card — shown in cap-rate and find-value modes -->
          <div v-if="calcMode === 'cap-rate' || calcMode === 'find-value'"
            class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="px-4 py-2.5 border-b border-gray-100 flex items-center gap-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background: rgba(245,158,11,0.12);">
                <svg class="w-4 h-4" style="color: #f59e0b;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h2 class="font-bold text-sm" style="color: #1e3a5f;">Income</h2>
            </div>
            <div class="p-3 space-y-2.5">

              <!-- Income mode toggle -->
              <div>
                <p id="income-mode-label" class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">How do you want to enter income?</p>
                <div class="flex items-center gap-1 p-1 bg-gray-100 rounded-xl w-fit" role="group" aria-labelledby="income-mode-label">
                  <button @click="incomeMode = 'monthly'"
                    :aria-pressed="incomeMode === 'monthly'"
                    :class="incomeMode === 'monthly' ? 'bg-white shadow text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">
                    Monthly Rent
                  </button>
                  <button @click="incomeMode = 'annual'"
                    :aria-pressed="incomeMode === 'annual'"
                    :class="incomeMode === 'annual' ? 'bg-white shadow text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">
                    Annual Income
                  </button>
                </div>
              </div>

              <!-- Monthly mode -->
              <div v-if="incomeMode === 'monthly'" class="space-y-2.5">
                <div>
                  <label for="monthly-rent" class="block text-xs font-semibold text-gray-700 mb-1">
                    Monthly Rent (per unit)
                  </label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                    <input id="monthly-rent" v-model="form.monthlyRent" type="number" min="0" step="50"
                      placeholder="Enter monthly rent per unit"
                      aria-label="Monthly rent per unit in dollars"
                      class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div>
                  <label for="num-units" class="block text-xs font-semibold text-gray-700 mb-1">
                    Number of Units
                  </label>
                  <input id="num-units" v-model="form.numUnits" type="number" min="1" step="1"
                    placeholder="Enter number of units"
                    aria-label="Number of rental units"
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <div v-if="form.numUnits !== null && form.numUnits !== '' && Number(form.numUnits) <= 0"
                  class="p-2.5 rounded-xl text-xs font-medium text-red-800 bg-red-50 border border-red-200" role="alert">
                  Units must be at least 1 — result will not be calculated until corrected.
                </div>
                <div v-if="grossIncome > 0" class="p-2.5 rounded-xl text-xs font-medium text-blue-800 bg-blue-50 border border-blue-100">
                  Gross Annual Income: <span class="font-bold">{{ formatCurrency(grossIncome) }}</span>
                  <span class="text-blue-500 ml-1">({{ formatCurrency(form.monthlyRent * form.numUnits) }}/mo × 12)</span>
                </div>
              </div>

              <!-- Annual mode -->
              <div v-if="incomeMode === 'annual'">
                <label for="gross-income" class="block text-xs font-semibold text-gray-700 mb-1">
                  Gross Annual Rental Income
                  <span class="ml-1 text-xs font-normal text-gray-400">(before expenses &amp; vacancy)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="gross-income" v-model="form.grossIncome" type="number" min="0" step="100"
                    placeholder="Enter total yearly rental income"
                    aria-label="Gross annual rental income in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Full-year total for all units (12 months × all units)</p>
              </div>

              <!-- Vacancy -->
              <div>
                <label for="vacancy-rate" class="block text-xs font-semibold text-gray-700 mb-1">
                  Vacancy Rate
                  <span class="ml-1 text-xs font-normal text-gray-400">(typical: 5–10%)</span>
                </label>
                <div class="relative">
                  <input id="vacancy-rate" v-model="form.vacancyRate" type="number" min="0" max="100" step="0.5"
                    placeholder="Enter expected vacancy percentage"
                    aria-label="Vacancy rate as a percentage"
                    :aria-invalid="vacancyRateInvalid"
                    :aria-describedby="vacancyRateInvalid ? 'vacancy-error' : undefined"
                    :class="vacancyRateInvalid ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : 'border-gray-200 focus:border-yellow-400 focus:ring-yellow-400/20'"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border focus:ring-2 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
                <p v-if="vacancyRateInvalid" id="vacancy-error" class="text-xs text-red-500 mt-1" role="alert">
                  Must be between 0 and 100%. Clamped to {{ vacancyRateClamped }}% for calculation.
                </p>
              </div>

            </div>
          </div>

          <!-- Expenses Card — shown in cap-rate and find-value modes -->
          <div v-if="calcMode === 'cap-rate' || calcMode === 'find-value'"
            class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="px-4 py-2.5 border-b border-gray-100 flex items-center gap-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background: rgba(239,68,68,0.1);">
                <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"/>
                </svg>
              </div>
              <h2 class="font-bold text-sm" style="color: #1e3a5f;">Annual Operating Expenses</h2>
            </div>
            <div class="p-3 space-y-2.5">

              <!-- Toggle: Simple vs Detailed -->
              <div>
                <p id="expense-mode-label" class="sr-only">Expense entry mode</p>
                <div class="flex items-center gap-3 p-1 bg-gray-100 rounded-xl w-fit" role="group" aria-labelledby="expense-mode-label">
                  <button @click="expenseMode = 'simple'"
                    :aria-pressed="expenseMode === 'simple'"
                    :class="expenseMode === 'simple' ? 'bg-white shadow text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">
                    Simple
                  </button>
                  <button @click="expenseMode = 'detailed'"
                    :aria-pressed="expenseMode === 'detailed'"
                    :class="expenseMode === 'detailed' ? 'bg-white shadow text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">
                    Detailed
                  </button>
                </div>
              </div>

              <!-- SIMPLE MODE -->
              <div v-if="expenseMode === 'simple'">
                <label for="total-expenses" class="block text-xs font-semibold text-gray-700 mb-1">
                  Total Annual Expenses
                  <span class="ml-1 text-xs font-normal text-gray-400">(taxes, insurance, maintenance, mgmt)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="total-expenses" v-model="form.totalExpenses" type="number" min="0" step="100"
                    placeholder="Enter total yearly operating expenses"
                    aria-label="Total annual operating expenses in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">
                  Enter the <strong>annual</strong> total — rule of thumb: 35–50% of gross income.
                  <span v-if="grossIncome > 0" class="text-gray-500">
                    For this income that's {{ formatCurrency(grossIncome * 0.35) }}–{{ formatCurrency(grossIncome * 0.5) }}/yr.
                  </span>
                </p>
              </div>

              <!-- DETAILED MODE -->
              <div v-if="expenseMode === 'detailed'" class="space-y-3">
                <p class="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 -mb-1">
                  All fields are <strong>annual</strong> figures. Simple total field is not applied.
                </p>
                <div v-for="exp in expenseFields" :key="exp.key">
                  <label :for="`exp-${exp.key}`" class="block text-xs font-semibold text-gray-600 mb-1">{{ exp.label }}</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" aria-hidden="true">$</span>
                    <input :id="`exp-${exp.key}`" v-model="form.expenses[exp.key]" type="number" min="0" step="100"
                      :placeholder="exp.placeholder"
                      :aria-label="`${exp.label} annual amount in dollars`"
                      class="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition" />
                  </div>
                  <p v-if="exp.hint" class="text-xs text-gray-400 mt-0.5">{{ exp.hint }}</p>
                </div>
                <div class="pt-2 border-t border-gray-100">
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-gray-500 font-medium">Total Expenses</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(detailedTotalExpenses) }}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- Property Value Card — shown in cap-rate and find-noi modes -->
          <div v-if="calcMode === 'cap-rate' || calcMode === 'find-noi'"
            class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="px-4 py-2.5 border-b border-gray-100 flex items-center gap-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background: rgba(30,58,95,0.08);">
                <svg class="w-4 h-4" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
              </div>
              <h2 class="font-bold text-sm" style="color: #1e3a5f;">Property Value</h2>
            </div>
            <div class="p-3 space-y-2.5">

              <!-- Value basis toggle — FIRST so user picks context before entering values -->
              <div>
                <p id="value-basis-label" class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Calculate cap rate using:</p>
                <div class="flex items-center gap-1 p-1 bg-gray-100 rounded-xl w-fit" role="group" aria-labelledby="value-basis-label">
                  <button @click="valueBasis = 'purchase'"
                    :aria-pressed="valueBasis === 'purchase'"
                    :class="valueBasis === 'purchase' ? 'bg-white shadow text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-700'"
                    class="px-3 py-1.5 rounded-lg text-sm transition font-medium">
                    Purchase Price
                  </button>
                  <button @click="valueBasis = 'market'"
                    :aria-pressed="valueBasis === 'market'"
                    :class="valueBasis === 'market' ? 'bg-white shadow text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-700'"
                    class="px-3 py-1.5 rounded-lg text-sm transition font-medium">
                    Market Value
                  </button>
                </div>
                <p class="text-xs text-gray-400 mt-1.5">
                  <span v-if="valueBasis === 'purchase'">Return on acquisition cost. Use when evaluating a deal before buying.</span>
                  <span v-else>Yield on today's value. Use for market comparisons or refinance analysis.</span>
                </p>
              </div>

              <!-- Purchase Price -->
              <div :class="valueBasis === 'purchase' ? 'ring-2 ring-yellow-400/30 rounded-xl p-2.5 -mx-2.5' : ''">
                <label for="purchase-price" class="block text-xs font-semibold mb-1"
                  :class="valueBasis === 'purchase' ? 'text-gray-900' : 'text-gray-500'">
                  Purchase Price
                  <span v-if="valueBasis === 'purchase'"
                    class="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
                    style="background: rgba(245,158,11,0.15); color: #92400e;">used for cap rate</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="purchase-price" v-model="form.purchasePrice" type="number" min="0" step="1000"
                    placeholder="Enter property purchase price"
                    aria-label="Purchase price in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border outline-none text-gray-900 font-semibold text-sm transition"
                    :class="valueBasis === 'purchase'
                      ? 'border-yellow-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20'
                      : 'border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200'" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Acquisition cost only — no financing</p>
              </div>

              <!-- Current Market Value -->
              <div :class="valueBasis === 'market' ? 'ring-2 ring-yellow-400/30 rounded-xl p-2.5 -mx-2.5' : ''">
                <label for="market-value" class="block text-xs font-semibold mb-1"
                  :class="valueBasis === 'market' ? 'text-gray-900' : 'text-gray-500'">
                  Current Market Value
                  <span v-if="valueBasis === 'market'"
                    class="ml-2 text-xs font-bold px-2 py-0.5 rounded-full"
                    style="background: rgba(245,158,11,0.15); color: #92400e;">used for cap rate</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="market-value" v-model="form.marketValue" type="number" min="0" step="1000"
                    placeholder="Enter current market value"
                    aria-label="Current market value in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border outline-none text-gray-900 font-semibold text-sm transition"
                    :class="valueBasis === 'market'
                      ? 'border-yellow-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20'
                      : 'border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-200'" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Today's estimated value — use for refi or comparison</p>
              </div>

              <!-- Both values hint -->
              <div v-if="hasBothValues" class="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-700 font-medium">
                Both values entered —
                <button @click="valueBasis = valueBasis === 'purchase' ? 'market' : 'purchase'"
                  class="underline hover:text-blue-900 transition">
                  switch to {{ valueBasis === 'purchase' ? 'market value' : 'purchase price' }} cap rate
                </button>
              </div>

              <!-- Asset Class (inline, optional) -->
              <div class="pt-2 border-t border-gray-100">
                <label for="asset-class" class="block text-xs font-semibold text-gray-700 mb-1">
                  Asset Class
                  <span class="ml-1 text-xs font-normal text-gray-400">(optional — improves benchmarks)</span>
                </label>
                <select id="asset-class" v-model="assetClass"
                  aria-label="Select asset class for benchmark context"
                  class="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition bg-white">
                  <option value="">Not specified (generic benchmarks)</option>
                  <option value="sfr">Single Family Residence (SFR)</option>
                  <option value="small-multi">Small Multifamily (2–4 units)</option>
                  <option value="large-multi">Large Multifamily (5+ units)</option>
                  <option value="commercial">Commercial / Mixed-Use</option>
                </select>
                <div v-if="assetClass && assetClassContext" class="mt-2 p-3 rounded-xl bg-blue-50 border border-blue-100 text-sm">
                  <p class="font-semibold text-blue-800 mb-0.5">{{ assetClassContext.label }}</p>
                  <p class="text-blue-700 text-xs leading-relaxed">{{ assetClassContext.note }}</p>
                </div>
              </div>

            </div>
          </div>

          <!-- ── TARGET CAP RATE CARD — reverse modes only ── -->
          <div v-if="calcMode !== 'cap-rate'"
            class="bg-white rounded-2xl shadow-sm border-2 overflow-hidden transition"
            :class="calcMode === 'find-value' ? 'border-blue-200' : 'border-emerald-200'">
            <div class="px-4 py-2.5 border-b flex items-center gap-3"
              :class="calcMode === 'find-value' ? 'border-blue-100 bg-blue-50' : 'border-emerald-100 bg-emerald-50'">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                :style="calcMode === 'find-value' ? 'background:#3b82f6;' : 'background:#10b981;'">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <div>
                <h2 class="font-bold text-sm"
                  :class="calcMode === 'find-value' ? 'text-blue-900' : 'text-emerald-900'">
                  Target Cap Rate
                </h2>
                <p class="text-xs mt-0.5"
                  :class="calcMode === 'find-value' ? 'text-blue-600' : 'text-emerald-600'">
                  {{ calcMode === 'find-value'
                    ? 'What yield does the market trade at?'
                    : 'What return do you want on this property?' }}
                </p>
              </div>
            </div>
            <div class="p-3 space-y-2.5">

              <div>
                <label for="reverse-cap-rate" class="block text-xs font-semibold text-gray-700 mb-1">
                  Target Cap Rate
                  <span class="ml-1 text-xs font-normal text-gray-400">(% per year)</span>
                </label>
                <div class="relative">
                  <input id="reverse-cap-rate" v-model="reverseCapRate" type="number"
                    min="0.1" max="30" step="0.1"
                    placeholder="Enter target cap rate"
                    aria-label="Target capitalization rate as a percentage"
                    class="w-full pr-10 pl-4 py-2 rounded-xl border-2 outline-none text-gray-900 font-bold text-base transition"
                    :class="calcMode === 'find-value'
                      ? 'border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/20'
                      : 'border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/20'" />
                  <span class="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-gray-400" aria-hidden="true">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  Typical US ranges: 4–5% coastal markets · 5–7% secondary markets · 7–10% Midwest/Southeast
                </p>
              </div>

              <!-- Asset Class benchmark hint -->
              <div v-if="assetClass && assetClassContext"
                class="p-3 rounded-xl text-sm border"
                :class="calcMode === 'find-value' ? 'bg-blue-50 border-blue-100' : 'bg-emerald-50 border-emerald-100'">
                <p class="font-semibold mb-0.5"
                  :class="calcMode === 'find-value' ? 'text-blue-800' : 'text-emerald-800'">
                  {{ assetClassContext.label }} benchmark
                </p>
                <p class="text-xs leading-relaxed"
                  :class="calcMode === 'find-value' ? 'text-blue-700' : 'text-emerald-700'">
                  Typical range {{ assetClassContext.typicalRange[0] }}–{{ assetClassContext.typicalRange[1] }}%.
                  {{ Number(reverseCapRate) > 0
                    ? (Number(reverseCapRate) >= assetClassContext.typicalRange[0] && Number(reverseCapRate) <= assetClassContext.typicalRange[1]
                      ? `Your target of ${reverseCapRate}% is within the typical range.`
                      : Number(reverseCapRate) < assetClassContext.typicalRange[0]
                        ? `Your target of ${reverseCapRate}% is below the typical range — implies a premium valuation.`
                        : `Your target of ${reverseCapRate}% is above the typical range — implies higher risk or off-market pricing.`)
                    : '' }}
                </p>
              </div>

              <!-- Asset Class selector (also useful in reverse modes) -->
              <div class="pt-2 border-t border-gray-100">
                <label for="asset-class-rev" class="block text-xs font-semibold text-gray-700 mb-1">
                  Asset Class
                  <span class="ml-1 text-xs font-normal text-gray-400">(optional — context for benchmarks)</span>
                </label>
                <select id="asset-class-rev" v-model="assetClass"
                  class="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition bg-white">
                  <option value="">Not specified</option>
                  <option value="sfr">Single Family Residence (SFR)</option>
                  <option value="small-multi">Small Multifamily (2–4 units)</option>
                  <option value="large-multi">Large Multifamily (5+ units)</option>
                  <option value="commercial">Commercial / Mixed-Use</option>
                </select>
              </div>

            </div>
          </div>

          <!-- ── INVESTOR MODE TOGGLE — cap-rate mode only ── -->
          <button v-if="calcMode === 'cap-rate'" @click="investorOpen = !investorOpen"
            class="w-full flex items-center justify-between px-5 py-3 rounded-2xl border-2 font-semibold text-sm transition"
            :class="investorOpen
              ? 'border-yellow-400 text-yellow-800 bg-yellow-50'
              : 'border-gray-200 text-gray-600 hover:border-yellow-300 hover:text-yellow-700 hover:bg-yellow-50/40'">
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                :style="investorOpen ? 'background:#f59e0b;' : 'background:#f3f4f6;'">
                <svg class="w-4 h-4" :class="investorOpen ? 'text-white' : 'text-gray-500'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <span>Investor Mode — Add Financing</span>
              <span v-if="investorOpen" class="text-xs font-bold px-2 py-0.5 rounded-full" style="background:#fef3c7;color:#92400e;">ON</span>
            </div>
            <svg class="w-4 h-4 transition-transform flex-shrink-0" :class="investorOpen ? 'rotate-180' : ''"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <!-- ── INVESTOR MODE INPUTS — cap-rate mode only ── -->
          <div v-if="calcMode === 'cap-rate' && investorOpen" class="bg-white rounded-2xl shadow-sm border border-yellow-200 overflow-hidden">
            <div class="px-4 py-2.5 border-b border-yellow-100 flex items-center gap-3" style="background:linear-gradient(90deg,#fffbeb,#fef3c7);">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#f59e0b;">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div>
                <h2 class="font-bold text-sm" style="color:#92400e;">Financing & Investor Returns</h2>
                <p class="text-xs text-amber-700 mt-0.5">See levered returns — Cash Flow, CoC, DSCR</p>
              </div>
            </div>
            <div class="p-3 space-y-2.5">

              <!-- Down Payment % -->
              <div>
                <label for="dp-pct" class="block text-xs font-semibold text-gray-700 mb-1">Down Payment</label>
                <div class="relative">
                  <input id="dp-pct" v-model="investorForm.downPaymentPct" type="number" min="0" max="100" step="1"
                    placeholder="Enter down payment percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition"/>
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                </div>
                <p v-if="hasResult && propertyValueCalc > 0" class="text-xs text-gray-400 mt-1">
                  = {{ formatCurrency(propertyValueCalc * (investorForm.downPaymentPct || 25) / 100) }} down · Loan: {{ formatCurrency(loanAmount) }}
                </p>
              </div>

              <!-- Interest Rate -->
              <div>
                <label for="interest-rate" class="block text-xs font-semibold text-gray-700 mb-1">Interest Rate</label>
                <div class="relative">
                  <input id="interest-rate" v-model="investorForm.interestRate" type="number" min="0" max="30" step="0.125"
                    placeholder="Enter annual loan interest rate"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition"/>
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                </div>
              </div>

              <!-- Loan Term -->
              <div>
                <label for="loan-term" class="block text-xs font-semibold text-gray-700 mb-1">Loan Term</label>
                <select id="loan-term" v-model="investorForm.loanTermYears"
                  class="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition bg-white">
                  <option :value="15">15 years</option>
                  <option :value="20">20 years</option>
                  <option :value="25">25 years</option>
                  <option :value="30">30 years</option>
                </select>
              </div>

              <div class="pt-2 border-t border-gray-100 space-y-3">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Cash Invested (optional)</p>

                <!-- Closing Costs -->
                <div>
                  <label for="closing-costs" class="block text-xs font-semibold text-gray-600 mb-1">Closing Costs</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input id="closing-costs" v-model="investorForm.closingCosts" type="number" min="0" step="500"
                      placeholder="Enter closing costs"
                      class="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition"/>
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5">Typical: 2–5% of purchase price</p>
                </div>

                <!-- Rehab -->
                <div>
                  <label for="rehab-costs" class="block text-xs font-semibold text-gray-600 mb-1">Rehab / Initial Repairs</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input id="rehab-costs" v-model="investorForm.rehabCosts" type="number" min="0" step="1000"
                      placeholder="Enter rehab or initial repair costs"
                      class="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition"/>
                  </div>
                </div>

                <!-- Cash Reserves -->
                <div>
                  <label for="cash-reserves" class="block text-xs font-semibold text-gray-600 mb-1">Cash Reserves</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input id="cash-reserves" v-model="investorForm.cashReserves" type="number" min="0" step="500"
                      placeholder="Enter cash reserves"
                      class="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition"/>
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5">6–12 months expenses recommended</p>
                </div>
              </div>

            </div>
          </div>

          <!-- Reset Button -->
          <button @click="resetForm"
            class="w-full py-2.5 rounded-xl border-2 border-gray-200 text-gray-500 font-semibold text-sm hover:border-gray-300 hover:text-gray-700 transition">
            Reset All Fields
          </button>

        </div>

        <!-- ── RESULTS (2 cols) ── -->
        <div class="lg:col-span-2 space-y-6">

          <!-- Main Result -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">

            <!-- Primary Result Display — mode-aware -->

            <!-- MODE: Cap Rate (standard) -->
            <div v-if="calcMode === 'cap-rate'" class="p-6 text-center border-b border-gray-100"
              :style="hasResult ? `background: linear-gradient(135deg, ${badge.bg1}, ${badge.bg2})` : 'background: linear-gradient(135deg, #f8fafc, #f1f5f9)'">
              <p class="text-sm font-semibold mb-2" :class="hasResult ? 'text-white/80' : 'text-gray-400'">
                Cap Rate
                <span v-if="hasResult" class="ml-1 font-normal opacity-70 text-xs">({{ valueBasis === 'purchase' ? 'on purchase price' : 'on market value' }})</span>
              </p>
              <div class="text-6xl md:text-7xl font-extrabold mb-3 leading-none"
                :class="hasResult ? 'text-white' : 'text-gray-200'">
                {{ hasResult ? capRate.toFixed(2) + '%' : '—' }}
              </div>
              <div v-if="hasResult"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm border border-white/30 bg-white/20 text-white">
                <span class="w-2 h-2 rounded-full bg-white"></span>
                {{ badge.label }}
              </div>
              <div v-else class="text-gray-300 text-sm">Enter values to see result</div>
            </div>

            <!-- MODE: Find Property Value -->
            <div v-else-if="calcMode === 'find-value'" class="p-6 text-center border-b border-gray-100"
              :style="findValueResult ? 'background: linear-gradient(135deg, #1d4ed8, #1e40af)' : 'background: linear-gradient(135deg, #f8fafc, #f1f5f9)'">
              <p class="text-sm font-semibold mb-1" :class="findValueResult ? 'text-blue-100' : 'text-gray-400'">
                Implied Property Value
              </p>
              <p class="text-xs mb-3 opacity-70" :class="findValueResult ? 'text-blue-200' : 'text-gray-300'">
                {{ findValueResult ? `at ${reverseCapRate}% cap rate` : 'NOI ÷ Target Cap Rate' }}
              </p>
              <div class="font-extrabold mb-3 leading-none"
                :class="[findValueResult ? 'text-white' : 'text-gray-200', findValueResult ? 'text-4xl md:text-5xl' : 'text-6xl']">
                {{ findValueResult ? formatCurrency(findValueResult) : '—' }}
              </div>
              <div v-if="findValueResult && noi > 0"
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold text-xs border border-white/30 bg-white/20 text-white">
                Based on NOI of {{ formatCurrency(noi) }}
              </div>
              <div v-else-if="!findValueResult" class="text-gray-300 text-sm">
                {{ noi <= 0 ? 'Enter income & expenses to calculate NOI' : 'Enter a target cap rate' }}
              </div>
            </div>

            <!-- MODE: Find Required NOI -->
            <div v-else class="p-6 text-center border-b border-gray-100"
              :style="findNOIResult ? 'background: linear-gradient(135deg, #059669, #047857)' : 'background: linear-gradient(135deg, #f8fafc, #f1f5f9)'">
              <p class="text-sm font-semibold mb-1" :class="findNOIResult ? 'text-emerald-100' : 'text-gray-400'">
                Required NOI / Year
              </p>
              <p class="text-xs mb-3 opacity-70" :class="findNOIResult ? 'text-emerald-200' : 'text-gray-300'">
                {{ findNOIResult ? `to hit ${reverseCapRate}% cap rate on ${formatCurrency(propertyValueCalc)}` : 'Property Value × Cap Rate' }}
              </p>
              <div class="font-extrabold mb-3 leading-none"
                :class="[findNOIResult ? 'text-white' : 'text-gray-200', findNOIResult ? 'text-4xl md:text-5xl' : 'text-6xl']">
                {{ findNOIResult ? formatCurrency(findNOIResult) : '—' }}
              </div>
              <div v-if="findNOIResult && findNOIGrossHint"
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold text-xs border border-white/30 bg-white/20 text-white">
                ≈ {{ formatCurrency(findNOIGrossHint) }} gross rent needed
              </div>
              <div v-else-if="!findNOIResult" class="text-gray-300 text-sm">
                Enter property value and target cap rate
              </div>
            </div>

            <!-- Warning States -->
            <div v-if="warnings.length > 0" class="px-5 pt-4 pb-1 space-y-2" role="region" aria-label="Input warnings">
              <div v-for="(w, i) in warnings" :key="i"
                class="flex items-start gap-2.5 p-3 rounded-xl text-sm"
                :class="w.type === 'error' ? 'bg-red-50 border border-red-200 text-red-800' : 'bg-amber-50 border border-amber-200 text-amber-800'"
                role="alert">
                <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path v-if="w.type === 'error'" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                  <path v-else fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
                <span class="font-medium leading-snug">{{ w.msg }}</span>
              </div>
            </div>

            <!-- ── REVERSE MODE: Find Value — breakdown ── -->
            <div v-if="calcMode === 'find-value' && findValueResult" class="p-6 space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">How we got there</h3>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Gross Income</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(grossIncome) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Vacancy Loss ({{ vacancyRateClamped }}%)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(vacancyLoss) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Total Expenses</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(totalExpensesCalc) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm font-bold text-gray-700">Net Operating Income</span>
                <span class="font-bold text-gray-900">{{ formatCurrency(noi) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Target Cap Rate</span>
                <span class="font-semibold text-blue-700">{{ reverseCapRate }}%</span>
              </div>
              <div class="flex justify-between items-center py-3">
                <span class="text-sm font-extrabold text-gray-800">Implied Value = NOI ÷ Cap Rate</span>
                <span class="font-extrabold text-blue-800 text-base">{{ formatCurrency(findValueResult) }}</span>
              </div>
              <!-- Formula box -->
              <div class="p-3 rounded-xl bg-blue-50 border border-blue-100">
                <p class="text-xs text-center text-blue-700 font-medium">
                  {{ formatCurrency(noi) }} ÷ {{ reverseCapRate }}% = <strong>{{ formatCurrency(findValueResult) }}</strong>
                </p>
                <p class="text-xs text-center text-gray-400 mt-1 italic">Simplified estimate — not a formal appraisal.</p>
              </div>
              <!-- GRM hint -->
              <div class="mt-3 pt-3 border-t border-gray-100">
                <div class="flex justify-between items-center text-sm">
                  <span class="text-gray-500">Gross Rent Multiplier (GRM)</span>
                  <span class="font-semibold text-gray-700">
                    {{ grossIncome > 0 ? (findValueResult / grossIncome).toFixed(1) + 'x' : '—' }}
                  </span>
                </div>
                <p class="text-xs text-gray-400 mt-1">GRM = Implied Value ÷ Gross Annual Rent. Typical: 8–15×.</p>
              </div>
              <!-- Sensitivity: implied value at nearby cap rates -->
              <div class="mt-4 pt-3 border-t border-gray-100">
                <h4 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Implied Value at Nearby Cap Rates</h4>
                <div class="space-y-1">
                  <div v-for="delta in [-1.5, -1, -0.5, 0, 0.5, 1, 1.5]" :key="delta"
                    class="flex justify-between items-center text-xs px-2 py-1.5 rounded-lg"
                    :class="delta === 0 ? 'font-bold bg-blue-50 text-blue-800' : 'text-gray-600'">
                    <span>{{ (Number(reverseCapRate) + delta).toFixed(1) }}% cap rate</span>
                    <span>{{ formatCurrency((noi / (Number(reverseCapRate) + delta)) * 100) }}</span>
                  </div>
                </div>
                <p class="text-xs text-gray-400 mt-2 italic">NOI held constant. Shows how price changes with market cap rate.</p>
              </div>
            </div>

            <!-- ── REVERSE MODE: Find NOI — breakdown ── -->
            <div v-if="calcMode === 'find-noi' && findNOIResult" class="p-6 space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">What you need to hit {{ reverseCapRate }}% cap rate</h3>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Property Value</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(propertyValueCalc) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Target Cap Rate</span>
                <span class="font-semibold text-emerald-700">{{ reverseCapRate }}%</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-gray-100">
                <span class="text-sm font-extrabold text-gray-800">Required NOI</span>
                <span class="font-extrabold text-emerald-700 text-base">{{ formatCurrency(findNOIResult) }}</span>
              </div>
              <!-- Formula -->
              <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                <p class="text-xs text-center text-emerald-700 font-medium">
                  {{ formatCurrency(propertyValueCalc) }} × {{ reverseCapRate }}% = <strong>{{ formatCurrency(findNOIResult) }}</strong> NOI/yr
                </p>
                <p class="text-xs text-center text-gray-400 mt-1 italic">NOI = Net Operating Income before debt service.</p>
              </div>
              <!-- Gross income hint -->
              <div v-if="findNOIGrossHint" class="mt-3 p-4 rounded-xl border-2 border-emerald-200 bg-emerald-50">
                <p class="text-xs font-bold uppercase tracking-wide text-emerald-700 mb-1">Required Gross Rent (estimate)</p>
                <p class="text-2xl font-extrabold text-emerald-800">{{ formatCurrency(findNOIGrossHint) }}</p>
                <p class="text-xs text-emerald-600 mt-1">
                  Assumes 5% vacancy &amp; 40% expense ratio — common rule-of-thumb. Adjust for your actual market.
                </p>
              </div>
              <!-- Monthly rent hint -->
              <div v-if="findNOIGrossHint" class="mt-1">
                <div class="flex justify-between items-center text-sm">
                  <span class="text-gray-500">≈ Monthly gross rent needed</span>
                  <span class="font-semibold text-gray-700">{{ formatCurrency(findNOIGrossHint / 12) }}/mo</span>
                </div>
              </div>
              <!-- NOI at nearby cap rates -->
              <div class="mt-4 pt-3 border-t border-gray-100">
                <h4 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Required NOI at Nearby Cap Rates</h4>
                <div class="space-y-1">
                  <div v-for="delta in [-1.5, -1, -0.5, 0, 0.5, 1, 1.5]" :key="delta"
                    class="flex justify-between items-center text-xs px-2 py-1.5 rounded-lg"
                    :class="delta === 0 ? 'font-bold bg-emerald-50 text-emerald-800' : 'text-gray-600'">
                    <span>{{ (Number(reverseCapRate) + delta).toFixed(1) }}% cap rate</span>
                    <span>{{ formatCurrency(propertyValueCalc * ((Number(reverseCapRate) + delta) / 100)) }}/yr</span>
                  </div>
                </div>
                <p class="text-xs text-gray-400 mt-2 italic">Property value held constant. Shows how NOI requirement shifts.</p>
              </div>
            </div>

            <!-- Breakdown — cap-rate mode only -->
            <div v-if="calcMode === 'cap-rate' && hasResult" class="p-6 space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Breakdown</h3>

              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Gross Income</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(grossIncome) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Vacancy Loss ({{ vacancyRateClamped }}%)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(vacancyLoss) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Effective Gross Income</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(effectiveGrossIncome) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Total Expenses</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(totalExpensesCalc) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm font-bold text-gray-700">Net Operating Income</span>
                <span class="font-bold" :class="noi >= 0 ? 'text-green-600' : 'text-red-600'">{{ formatCurrency(noi) }}</span>
              </div>
              <div class="flex justify-between items-center py-2">
                <span class="text-sm text-gray-500">{{ valueBasis === 'purchase' ? 'Purchase Price' : 'Market Value' }}</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(propertyValueCalc) }}</span>
              </div>

              <!-- Formula -->
              <div class="mt-4 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <p class="text-xs text-center text-gray-400 font-medium">
                  Cap Rate = NOI ÷ Property Value × 100
                </p>
                <p class="text-xs text-center text-gray-500 font-semibold mt-1">
                  {{ formatCurrency(noi) }} ÷ {{ formatCurrency(propertyValueCalc) }} × 100 = <span style="color: #1e3a5f;">{{ capRate.toFixed(2) }}%</span>
                </p>
                <p class="text-xs text-center text-gray-400 mt-2 italic">Simplified estimate — not a full underwriting model.</p>
              </div>

              <!-- Key Metrics Grid -->
              <div v-if="hasResult && totalExpensesCalc > 0" class="mt-4 grid grid-cols-3 gap-2">
                <div class="rounded-xl p-3 text-center border"
                  :class="expenseRatio > 65 ? 'bg-red-50 border-red-200' : expenseRatio > 50 ? 'bg-amber-50 border-amber-200' : 'bg-green-50 border-green-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="expenseRatio > 65 ? 'text-red-500' : expenseRatio > 50 ? 'text-amber-600' : 'text-green-600'">
                    Exp. Ratio
                  </p>
                  <p class="text-base font-extrabold"
                    :class="expenseRatio > 65 ? 'text-red-700' : expenseRatio > 50 ? 'text-amber-700' : 'text-green-700'">
                    {{ expenseRatio.toFixed(0) }}%
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">of EGI</p>
                </div>
                <div class="rounded-xl p-3 text-center border"
                  :class="noiMargin < 0 ? 'bg-red-50 border-red-200' : noiMargin < 25 ? 'bg-amber-50 border-amber-200' : 'bg-green-50 border-green-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="noiMargin < 0 ? 'text-red-500' : noiMargin < 25 ? 'text-amber-600' : 'text-green-600'">
                    NOI Margin
                  </p>
                  <p class="text-base font-extrabold"
                    :class="noiMargin < 0 ? 'text-red-700' : noiMargin < 25 ? 'text-amber-700' : 'text-green-700'">
                    {{ noiMargin.toFixed(0) }}%
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">of EGI</p>
                </div>
                <div v-if="breakEvenVacancy !== null" class="rounded-xl p-3 text-center border"
                  :class="breakEvenVacancy < 10 ? 'bg-red-50 border-red-200' : breakEvenVacancy < 20 ? 'bg-amber-50 border-amber-200' : 'bg-green-50 border-green-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="breakEvenVacancy < 10 ? 'text-red-500' : breakEvenVacancy < 20 ? 'text-amber-600' : 'text-green-600'">
                    Break-even
                  </p>
                  <p class="text-base font-extrabold"
                    :class="breakEvenVacancy < 10 ? 'text-red-700' : breakEvenVacancy < 20 ? 'text-amber-700' : 'text-green-700'">
                    {{ breakEvenVacancy.toFixed(0) }}%
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">≈ {{ breakEvenVacancyMonths }} mo/yr</p>
                </div>
              </div>

              <!-- Vacancy buffer note -->
              <div v-if="hasResult && totalExpensesCalc > 0 && breakEvenVacancy !== null"
                class="mt-2 p-3 rounded-xl text-xs border"
                :class="vacancyRateClamped >= breakEvenVacancy * 0.8 ? 'bg-red-50 border-red-200 text-red-700' : 'bg-gray-50 border-gray-100 text-gray-500'">
                <span class="font-semibold">Vacancy buffer:</span>
                running {{ Number(vacancyMonths).toFixed(1) }} mo/yr vacant — break-even at {{ breakEvenVacancyMonths }} mo/yr<span v-if="vacancyRateClamped < breakEvenVacancy * 0.7"> ({{ (breakEvenVacancy - vacancyRateClamped).toFixed(0) }}% cushion)</span><span v-else class="font-semibold"> — thin margin</span>.
              </div>

              <!-- NOI Bar Visualization -->
              <div v-if="noiBreakdown" class="mt-4">
                <h4 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Income Breakdown</h4>
                <!-- Stacked bar — all segments relative to gross income = 100% -->
                <div class="flex h-5 rounded-lg overflow-hidden w-full" style="background: #f1f5f9;">
                  <div title="Vacancy Loss"
                    class="transition-all duration-300 flex-shrink-0"
                    :style="`width: ${noiBreakdown.vacancyPct}%; background: #fca5a5;`"></div>
                  <div title="Operating Expenses"
                    class="transition-all duration-300 flex-shrink-0"
                    :style="`width: ${noiBreakdown.expensePct}%; background: #fbbf24;`"></div>
                  <div v-if="!noiBreakdown.noiNegative" title="Net Operating Income"
                    class="transition-all duration-300 flex-shrink-0"
                    :style="`width: ${noiBreakdown.noiPct}%; background: #34d399;`"></div>
                </div>
                <!-- Negative NOI overflow indicator -->
                <div v-if="noiBreakdown.noiNegative"
                  class="mt-1.5 flex items-center gap-2 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 px-2.5 py-1.5 rounded-lg">
                  <svg class="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                  Expenses exceed gross income by {{ noiBreakdown.overflowPct }}% — NOI is negative
                </div>
                <div class="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  <span class="flex items-center gap-1.5 text-xs text-gray-500">
                    <span class="inline-block w-2.5 h-2.5 rounded-sm bg-red-300 flex-shrink-0"></span>
                    Vacancy ({{ vacancyRateClamped }}%)
                  </span>
                  <span class="flex items-center gap-1.5 text-xs text-gray-500">
                    <span class="inline-block w-2.5 h-2.5 rounded-sm bg-amber-400 flex-shrink-0"></span>
                    Expenses
                  </span>
                  <span v-if="!noiBreakdown.noiNegative" class="flex items-center gap-1.5 text-xs text-gray-500">
                    <span class="inline-block w-2.5 h-2.5 rounded-sm bg-emerald-400 flex-shrink-0"></span>
                    NOI
                  </span>
                </div>
              </div>

              <!-- Market Benchmarks -->
              <div class="mt-4">
                <h4 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">
                  Yield Ranges
                  <span v-if="assetClass && assetClassContext" class="ml-1 font-normal normal-case text-gray-400">— {{ assetClassContext.label }}</span>
                </h4>
                <div class="space-y-2">
                  <div v-for="bm in marketBenchmarks" :key="bm.label"
                    class="flex items-center justify-between text-sm">
                    <span class="text-gray-500">{{ bm.label }}</span>
                    <div class="flex items-center gap-2">
                      <span class="font-semibold text-gray-700">{{ bm.range }}</span>
                      <span v-if="bm.yours" class="text-xs px-2 py-0.5 rounded-full font-bold"
                        :style="`background: ${badge.bg1}20; color: ${badge.bg1}`">
                        yours
                      </span>
                    </div>
                  </div>
                </div>
                <p class="text-xs text-gray-400 mt-3 leading-relaxed">
                  Rough US rule-of-thumb ranges only — not thresholds for a "good deal." A 4% yield in Manhattan can outperform an 8% yield in a declining market. Compare against local submarket comps and current conditions.
                </p>
              </div>

              <!-- GRM Row -->
              <div v-if="grm !== null" class="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-sm">
                <div>
                  <span class="font-bold text-gray-700">Gross Rent Multiplier (GRM)</span>
                  <p class="text-xs text-gray-400">Price ÷ Gross Annual Rent. Typical: 8–15×</p>
                </div>
                <span class="font-extrabold text-lg"
                  :class="grm > 20 ? 'text-red-600' : grm > 15 ? 'text-amber-600' : grm > 10 ? 'text-blue-700' : 'text-green-600'">
                  {{ grm.toFixed(1) }}×
                </span>
              </div>

            </div>

            <!-- Deal Context Panel — cap-rate mode only -->
            <div v-if="calcMode === 'cap-rate' && hasResult" class="p-6 border-t border-gray-100" style="background: #f8fafc;">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center" style="background: #1e3a5f;">
                  <svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Deal Context</p>
                  <p class="text-sm text-gray-700 leading-relaxed">{{ insightText }}</p>
                </div>
              </div>
            </div>

            <!-- Sensitivity Table -->
            <div v-if="calcMode === 'cap-rate' && sensitivityRows" class="px-6 pb-6 border-t border-gray-100 pt-5">
              <h4 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">
                Cap Rate at Different Property Values
                <span class="ml-1 font-normal normal-case text-gray-400">(NOI fixed at {{ formatCurrency(noi) }})</span>
              </h4>
              <div class="overflow-x-auto -mx-1">
                <table class="w-full text-xs">
                  <thead>
                    <tr class="border-b border-gray-100">
                      <th class="text-left py-1.5 px-2 font-semibold text-gray-400">Change</th>
                      <th class="text-right py-1.5 px-2 font-semibold text-gray-400">Value</th>
                      <th class="text-right py-1.5 px-2 font-semibold text-gray-400">Cap Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="row in sensitivityRows" :key="row.label"
                      class="border-b border-gray-50 transition"
                      :class="row.isCurrent ? 'font-bold' : 'text-gray-600'"
                      :style="row.isCurrent ? 'background: rgba(245,158,11,0.07);' : ''">
                      <td class="py-1.5 px-2" :style="row.isCurrent ? 'color: #92400e;' : ''">
                        {{ row.label }}
                      </td>
                      <td class="text-right py-1.5 px-2">{{ formatCurrency(row.value) }}</td>
                      <td class="text-right py-1.5 px-2"
                        :class="row.capRate >= 6 ? 'text-emerald-600' : row.capRate >= 4 ? 'text-amber-600' : 'text-red-600'">
                        {{ row.capRate.toFixed(2) }}%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-xs text-gray-400 mt-2 italic">Price sensitivity — assumes expenses and income stay constant.</p>
            </div>

            <!-- Implied Value Reverse Calc — cap-rate mode only -->
            <div v-if="calcMode === 'cap-rate' && impliedValues" class="px-6 pb-6 border-t border-gray-100 pt-5">
              <h4 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">
                Implied Property Value at Target Cap Rates
                <span class="ml-1 font-normal normal-case text-gray-400">(Value = NOI ÷ Rate)</span>
              </h4>
              <div class="space-y-1.5">
                <div v-for="row in impliedValues" :key="row.rate"
                  class="flex items-center justify-between text-xs px-2 py-1.5 rounded-lg"
                  :class="row.isCurrent ? 'font-bold' : 'text-gray-600'"
                  :style="row.isCurrent ? 'background: rgba(245,158,11,0.1); color: #92400e;' : ''">
                  <span>{{ row.rate }}% cap rate</span>
                  <span>{{ formatCurrency(row.impliedValue) }}</span>
                </div>
              </div>
              <p class="text-xs text-gray-400 mt-2 italic">Use this to check if the asking price aligns with market cap rates in your area.</p>
            </div>

            <!-- Share + PDF Export + Save Scenario -->
            <div v-if="hasResult" class="p-4 border-t border-gray-100 space-y-2">
              <!-- Save Scenario (primary CTA) -->
              <button @click="openSaveScenario"
                class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
                style="background: #f59e0b; color: #1e3a5f;">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>
                Save Scenario
              </button>
              <button @click="shareResult"
                class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition border-2"
                :class="shareSuccess
                  ? 'border-green-400 text-green-700 bg-green-50'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-800'">
                <svg v-if="!shareSuccess" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                </svg>
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                {{ shareSuccess ? 'Link copied to clipboard!' : 'Share Result' }}
              </button>
              <button @click="exportPDF"
                class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
                style="background: #1e3a5f; color: white;">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Export PDF Report
              </button>
              <!-- Email capture -->
              <button @click="showEmailModal = true"
                class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs text-gray-500 hover:text-gray-700 border border-dashed border-gray-200 hover:border-gray-300 transition">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Email me this analysis
              </button>
            </div>

          </div>

          <!-- ── INVESTOR RESULTS CARD — cap-rate mode only ── -->
          <div v-if="calcMode === 'cap-rate' && investorOpen && hasResult" class="bg-white rounded-2xl shadow-sm border border-yellow-200 overflow-hidden">
            <div class="px-5 py-3 border-b border-yellow-100 flex items-center gap-2" style="background:linear-gradient(90deg,#fffbeb,#fef3c7);">
              <svg class="w-4 h-4 flex-shrink-0" style="color:#d97706;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
              <h3 class="font-bold text-sm" style="color:#92400e;">Levered Returns</h3>
            </div>
            <div class="p-5 space-y-3">

              <!-- Loan details -->
              <div>
                <h4 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Financing</h4>
                <div class="space-y-1.5">
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-500">Loan Amount</span>
                    <span class="font-semibold text-gray-900">{{ formatCurrency(loanAmount) }}</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-500">Monthly Payment</span>
                    <span class="font-semibold text-gray-900">{{ formatCurrency(monthlyPayment) }}/mo</span>
                  </div>
                  <div class="flex justify-between text-sm border-t border-gray-50 pt-1.5">
                    <span class="text-gray-500">Annual Debt Service</span>
                    <span class="font-semibold text-red-500">-{{ formatCurrency(annualDebtService) }}</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-500">Cash Invested</span>
                    <span class="font-semibold text-gray-900">{{ formatCurrency(cashInvested) }}</span>
                  </div>
                </div>
              </div>

              <!-- Key investor metrics -->
              <div class="pt-3 border-t border-gray-100">
                <h4 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Returns</h4>
                <div class="space-y-2">

                  <!-- Cash Flow After Debt -->
                  <div class="flex justify-between items-center py-2 border-b border-gray-50">
                    <span class="text-sm font-bold text-gray-700">Cash Flow / Year</span>
                    <span class="font-extrabold text-base" :class="cashFlowAfterDebt >= 0 ? 'text-green-600' : 'text-red-600'">
                      {{ cashFlowAfterDebt >= 0 ? '' : '-' }}{{ formatCurrency(Math.abs(cashFlowAfterDebt)) }}
                    </span>
                  </div>
                  <div class="flex justify-between items-center text-sm text-gray-400">
                    <span>≈ per month</span>
                    <span :class="cashFlowAfterDebt >= 0 ? 'text-green-500' : 'text-red-500'" class="font-medium">
                      {{ cashFlowAfterDebt >= 0 ? '' : '-' }}{{ formatCurrency(Math.abs(cashFlowAfterDebt) / 12) }}/mo
                    </span>
                  </div>

                  <!-- CoC -->
                  <div v-if="cocReturn !== null" class="flex justify-between items-center py-2 border-t border-gray-50 mt-1">
                    <div>
                      <span class="text-sm font-bold text-gray-700">Cash-on-Cash Return</span>
                      <p class="text-xs text-gray-400">Cash Flow ÷ Cash Invested</p>
                    </div>
                    <div class="text-right">
                      <span class="font-extrabold text-lg" :class="cocReturn >= 8 ? 'text-green-600' : cocReturn >= 4 ? 'text-amber-600' : 'text-red-600'">
                        {{ cocReturn.toFixed(2) }}%
                      </span>
                      <p class="text-xs mt-0.5 font-semibold" :class="cocReturn >= 8 ? 'text-green-500' : cocReturn >= 4 ? 'text-amber-500' : 'text-red-500'">
                        {{ cocReturn >= 8 ? 'Strong' : cocReturn >= 4 ? 'Moderate' : 'Weak' }}
                      </p>
                    </div>
                  </div>

                  <!-- DSCR -->
                  <div v-if="dscr !== null" class="flex justify-between items-center py-2 border-t border-gray-50">
                    <div>
                      <span class="text-sm font-bold text-gray-700">DSCR</span>
                      <p class="text-xs text-gray-400">NOI ÷ Debt Service</p>
                    </div>
                    <div class="text-right">
                      <span class="font-extrabold text-lg" :class="dscr >= 1.25 ? 'text-green-600' : dscr >= 1.0 ? 'text-amber-600' : 'text-red-600'">
                        {{ dscr.toFixed(2) }}x
                      </span>
                      <p class="text-xs mt-0.5 font-semibold" :class="dscr >= 1.25 ? 'text-green-500' : dscr >= 1.0 ? 'text-amber-500' : 'text-red-500'">
                        {{ dscr >= 1.25 ? 'Lender-approved range' : dscr >= 1.0 ? 'Barely covers debt' : 'Below 1.0 — cash drain' }}
                      </p>
                    </div>
                  </div>

                </div>

                <!-- Interpretation -->
                <div class="mt-3 p-3 rounded-xl text-xs leading-snug"
                  :class="cashFlowAfterDebt >= 0 && (dscr === null || dscr >= 1.25) ? 'bg-green-50 border border-green-200 text-green-800' : cashFlowAfterDebt < 0 ? 'bg-red-50 border border-red-200 text-red-800' : 'bg-amber-50 border border-amber-200 text-amber-800'">
                  <span v-if="cashFlowAfterDebt >= 0 && dscr !== null && dscr >= 1.25">
                    Property generates positive cash flow and covers debt service by {{ dscr.toFixed(2) }}x. Suitable for conventional investment financing in most markets.
                  </span>
                  <span v-else-if="cashFlowAfterDebt < 0">
                    Negative cash flow at these financing terms — the property does not service its own debt. Consider higher down payment, different financing, or renegotiating the purchase price.
                  </span>
                  <span v-else>
                    Marginally cash-flow positive. DSCR below 1.25 may limit conventional financing options. Verify income and expense assumptions carefully.
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           SCENARIOS
      ═══════════════════════════════════════════════ -->
      <div v-if="calcMode === 'cap-rate' && hasResult && scenarios" class="mt-10">
        <button @click="scenariosOpen = !scenariosOpen"
          class="w-full flex items-center justify-between px-6 py-4 rounded-2xl border-2 font-semibold text-sm transition mb-4"
          :class="scenariosOpen
            ? 'border-blue-300 text-blue-800 bg-blue-50'
            : 'border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50/30'">
          <div class="flex items-center gap-3">
            <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              :style="scenariosOpen ? 'background:#2563eb;' : 'background:#f3f4f6;'">
              <svg class="w-4 h-4" :class="scenariosOpen ? 'text-white' : 'text-gray-500'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div class="text-left">
              <span class="block">Scenario Analysis — Conservative / Base / Optimistic</span>
              <span class="text-xs font-normal" :class="scenariosOpen ? 'text-blue-600' : 'text-gray-400'">See how this deal performs under different assumptions</span>
            </div>
          </div>
          <svg class="w-4 h-4 transition-transform flex-shrink-0" :class="scenariosOpen ? 'rotate-180' : ''"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>

        <div v-if="scenariosOpen" class="grid md:grid-cols-3 gap-4">
          <div v-for="sc in scenarios" :key="sc.key"
            class="bg-white rounded-2xl border shadow-sm overflow-hidden"
            :style="`border-color: ${sc.color}40;`">

            <!-- Scenario header -->
            <div class="px-5 py-3 border-b flex items-center gap-2.5"
              :style="`background: ${sc.bgColor}; border-color: ${sc.color}30;`">
              <div class="w-2.5 h-2.5 rounded-full flex-shrink-0" :style="`background: ${sc.color};`"></div>
              <div>
                <p class="font-extrabold text-sm" :style="`color: ${sc.color};`">{{ sc.label }}</p>
                <p class="text-xs text-gray-400">{{ sc.desc }}</p>
              </div>
            </div>

            <!-- Scenario metrics -->
            <div class="p-5 space-y-3">
              <div class="flex justify-between items-center text-sm">
                <span class="text-gray-500">NOI</span>
                <span class="font-bold" :class="sc.noi >= 0 ? 'text-gray-900' : 'text-red-600'">{{ formatCurrency(sc.noi) }}</span>
              </div>
              <div class="flex justify-between items-center text-sm border-t border-gray-50 pt-2">
                <span class="text-gray-500">Cap Rate</span>
                <span class="font-extrabold text-base" :style="`color: ${sc.color};`">{{ sc.capRate.toFixed(2) }}%</span>
              </div>
              <div v-if="sc.cashFlow !== null" class="flex justify-between items-center text-sm border-t border-gray-50 pt-2">
                <span class="text-gray-500">Cash Flow/yr</span>
                <span class="font-bold" :class="sc.cashFlow >= 0 ? 'text-green-600' : 'text-red-600'">
                  {{ sc.cashFlow >= 0 ? '' : '-' }}{{ formatCurrency(Math.abs(sc.cashFlow)) }}
                </span>
              </div>
              <div v-if="sc.coc !== null" class="flex justify-between items-center text-sm">
                <span class="text-gray-500">CoC Return</span>
                <span class="font-bold" :class="sc.coc >= 8 ? 'text-green-600' : sc.coc >= 4 ? 'text-amber-600' : 'text-red-600'">
                  {{ sc.coc.toFixed(1) }}%
                </span>
              </div>
              <div class="flex justify-between items-center text-xs text-gray-400 border-t border-gray-50 pt-2">
                <span>Vacancy assumed</span>
                <span>{{ sc.vacancy.toFixed(1) }}%</span>
              </div>
            </div>
          </div>
        </div>

        <p v-if="scenariosOpen" class="mt-3 text-xs text-gray-400 text-center">
          Conservative: vacancy ×1.5+2%, rent −5%, expenses +10%. Optimistic: vacancy ×0.7, rent +5%, expenses −5%. Not a forecast — illustrative stress test only.
        </p>
      </div>

        </div><!-- /right column -->
      </div><!-- /lg:flex -->



      <!-- ═══════════════════════════════════════════════
           HOW TO USE THIS CALCULATOR
      ═══════════════════════════════════════════════ -->
      <!-- ═══════════════════════════════════════════════
           INTRO TEXT
      ═══════════════════════════════════════════════ -->
      <div class="space-y-3 max-w-3xl mt-12">
        <p class="text-gray-700 text-base leading-relaxed">
          The <strong>capitalization rate (cap rate)</strong> is the single most widely used metric in US real estate investment analysis. It measures a property's annual unlevered yield — the return you'd earn if you bought all-cash, with no mortgage. Every serious investor uses it to screen deals, anchor offer prices, and compare properties across markets on equal footing.
        </p>
        <p class="text-gray-600 text-sm leading-relaxed">
          This free cap rate calculator covers all three use cases investors actually need: <strong>calculate cap rate</strong> from NOI and property value, <strong>find implied property value</strong> given your NOI and a target cap rate, and <strong>determine the NOI required</strong> to hit a specific yield on a given purchase price. Real-time results, no signup required.
        </p>
        <p class="text-gray-600 text-sm leading-relaxed">
          Cap rate alone doesn't make or break a deal — context matters. A 4.5% cap in Dallas is not the same as a 4.5% cap in a declining Rust Belt market. That's why this tool includes <strong>2026 benchmarks by property type and state</strong>, a sensitivity table, GRM, and an investor returns module that layers in your financing to show levered cash-on-cash and DSCR alongside the unlevered cap rate.
        </p>
        <p class="text-gray-600 text-sm leading-relaxed">
          Below you'll find the complete cap rate formula with a worked real-world example, interpretation guides, property type benchmarks, strategy notes for buy-and-hold, BRRRR, and commercial deals, plus an 8-question FAQ answering the most common investor questions.
        </p>
      </div>

      <!-- ═══════════════════════════════════════════════
           OVERVIEW
      ═══════════════════════════════════════════════ -->
      <div id="overview" class="mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">Overview</h2>
        <p class="text-gray-600 leading-relaxed mb-3">
          The <strong>cap rate calculator</strong> is designed for US real estate investors who need a fast, reliable way to evaluate income-producing properties. It computes the capitalization rate from your rental income, vacancy, and operating expenses — or works in reverse to find implied property value or required NOI.
        </p>
        <p class="text-gray-600 leading-relaxed mb-3">
          Cap rate is an <strong>unlevered metric</strong>: it measures a property's income yield independent of how it is financed. This makes it ideal for comparing different properties, markets, and asset classes on equal footing. A 7% cap rate in Atlanta and a 4% cap in San Francisco reflect entirely different market dynamics — cap rate puts them on the same scale.
        </p>
        <p class="text-gray-600 leading-relaxed">
          This calculator supports three calculation modes: <strong>Find Cap Rate</strong> (standard evaluation), <strong>Find Property Value</strong> (reverse: given NOI and a target cap rate), and <strong>Find Required NOI</strong> (reverse: given asking price and target yield). An optional Investor Mode adds financing analysis — monthly payment, cash flow, CoC return, and DSCR.
        </p>
      </div>

      <div id="how-to-use" class="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-8 py-6 border-b border-gray-100" style="background: linear-gradient(to right, #f8fafc, #ffffff);">
          <h2 class="text-xl font-extrabold" style="color: #1e3a5f;">How to Use This Cap Rate Calculator</h2>
          <p class="text-gray-500 text-sm mt-1">Follow these steps to analyze any US rental property in under 2 minutes</p>
        </div>
        <div class="p-8">
          <div class="grid md:grid-cols-2 gap-10">
            <!-- Step-by-step -->
            <ol class="space-y-5">
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">1</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Choose a calculation mode</p>
                  <p class="text-gray-500 text-sm mt-1">Use <strong>Find Cap Rate</strong> to evaluate a property you're analyzing. Use <strong>Find Property Value</strong> to determine what a property is worth at a target yield. Use <strong>Find Required NOI</strong> when you know the asking price and need to verify the numbers work.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">2</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Enter your income</p>
                  <p class="text-gray-500 text-sm mt-1">Enter monthly rent per unit (or total annual gross income). Use <strong>actual collected rents</strong>, not asking rents, for accurate analysis. Multi-unit: enter rent per unit and number of units.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">3</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Set your vacancy rate</p>
                  <p class="text-gray-500 text-sm mt-1">Enter expected vacancy as a percentage. Most stabilized US rentals run <strong>5–8%</strong>. High-demand metros may see 2–3%. Enter 0 only if fully occupied long-term — always budget for turnover.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">4</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Enter operating expenses</p>
                  <p class="text-gray-500 text-sm mt-1">Use <strong>Simple mode</strong> to enter total annual expenses, or <strong>Detailed mode</strong> to itemize taxes, insurance, management, and maintenance. <em>Do not include mortgage payments</em> — cap rate is an unlevered metric.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">5</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Enter property value &amp; read your result</p>
                  <p class="text-gray-500 text-sm mt-1">For acquisitions: use agreed purchase price. For existing holdings: use current appraised value. The result shows your cap rate with a Good/Average/Poor rating and market context for your asset class.</p>
                </div>
              </li>
            </ol>
            <!-- Tips + Result interpretation -->
            <div class="space-y-5">
              <div class="p-5 rounded-xl border border-amber-200" style="background: #fffbeb;">
                <h3 class="font-bold text-sm mb-3" style="color: #92400e;">Pro Tips for Accurate Results</h3>
                <ul class="space-y-2 text-sm text-amber-800">
                  <li class="flex gap-2"><span class="font-bold flex-shrink-0">→</span> Use actual operating data from the seller's T-12 (trailing 12-month P&amp;L), not proforma projections.</li>
                  <li class="flex gap-2"><span class="font-bold flex-shrink-0">→</span> Budget 8–12% of gross rents for property management, even if self-managing — this is your opportunity cost.</li>
                  <li class="flex gap-2"><span class="font-bold flex-shrink-0">→</span> Include a maintenance reserve of $100–200/unit/month for properties older than 15 years.</li>
                  <li class="flex gap-2"><span class="font-bold flex-shrink-0">→</span> Never include debt service in expenses — cap rate assumes all-cash purchase.</li>
                </ul>
              </div>
              <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
                <h3 class="font-bold text-sm text-gray-800 mb-3">Understanding Your Result</h3>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li><span class="font-semibold text-gray-800">Cap rate ≥ 7%</span> — Strong yield. Common in Midwest and Southeast secondary markets. Higher cash flow, potentially higher vacancy risk.</li>
                  <li><span class="font-semibold text-gray-800">Cap rate 5–6.9%</span> — Typical for stabilized assets in major US metros. Balance of income and appreciation.</li>
                  <li><span class="font-semibold text-gray-800">Cap rate &lt; 5%</span> — Gateway cities (NY, LA, SF, Miami). Appreciation-driven play, not an income play.</li>
                  <li><span class="font-semibold text-gray-800">Negative NOI</span> — Expenses exceed income. Do not proceed without a clear value-add or repositioning plan.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           FORMULA & CALCULATION METHOD
      ═══════════════════════════════════════════════ -->
      <div id="formula" class="mt-10 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-8 py-6 border-b border-gray-100" style="background: linear-gradient(to right, #f8fafc, #ffffff);">
          <h2 class="text-xl font-extrabold" style="color: #1e3a5f;">Cap Rate Formula & Calculation Method</h2>
          <p class="text-gray-500 text-sm mt-1">The exact math this calculator uses — plus a real Dallas, TX example</p>
        </div>
        <div class="p-8">
          <div class="grid md:grid-cols-2 gap-10">

            <!-- Formula steps -->
            <div>
              <h3 class="font-bold text-gray-800 mb-4">Step-by-step calculation</h3>
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">1</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Calculate Gross Income</p>
                    <p class="text-xs text-gray-500 mt-0.5">Monthly rent × number of units × 12 months</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">$1,800/mo × 4 units × 12 = $86,400/yr</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">2</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Subtract Vacancy Loss</p>
                    <p class="text-xs text-gray-500 mt-0.5">Gross income × vacancy rate → Effective Gross Income (EGI)</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">$86,400 × 6% = $5,184 loss → EGI = $81,216</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">3</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Subtract Operating Expenses → NOI</p>
                    <p class="text-xs text-gray-500 mt-0.5">EGI − taxes, insurance, management, maintenance</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">$81,216 − $28,400 = $52,816 NOI</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-amber-200 bg-amber-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md flex-shrink-0 mt-0.5" style="background:#f59e0b;color:#1e3a5f;">4</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Divide NOI by Property Value</p>
                    <p class="text-xs text-gray-500 mt-0.5">NOI ÷ purchase price × 100 = Cap Rate</p>
                    <code class="text-xs font-bold" style="color:#1e3a5f;">$52,816 ÷ $880,000 × 100 = <strong>6.0% cap rate</strong></code>
                  </div>
                </div>
              </div>
            </div>

            <!-- Formula box + notes -->
            <div class="space-y-4">
              <!-- Formula visual -->
              <div class="p-5 rounded-2xl text-center" style="background: linear-gradient(135deg, #1e3a5f, #16304f);">
                <p class="text-xs font-bold uppercase tracking-widest text-blue-300 mb-3">The Formula</p>
                <div class="font-mono font-bold text-lg text-white mb-2">Cap Rate = NOI ÷ Value × 100</div>
                <div class="font-mono text-xs text-blue-200 mb-1">NOI = EGI − Operating Expenses</div>
                <div class="font-mono text-xs text-blue-300">EGI = Gross Income − Vacancy Loss</div>
                <!-- Text diagram -->
                <div class="mt-4 p-3 rounded-xl text-left font-mono text-xs" style="background: rgba(255,255,255,0.07); color: #93c5fd; line-height: 1.7;">
                  <div>Gross Rent Income</div>
                  <div>− Vacancy Loss (6%)</div>
                  <div class="border-t border-blue-700 pt-1">= Effective Gross Income</div>
                  <div>− Operating Expenses</div>
                  <div class="border-t border-blue-700 pt-1">= NOI</div>
                  <div>÷ Property Value</div>
                  <div class="border-t border-blue-700 pt-1 font-extrabold" style="color:#fcd34d;">= Cap Rate (%)</div>
                </div>
              </div>
              <div class="p-4 rounded-xl border border-blue-100 bg-blue-50">
                <p class="text-xs font-bold text-blue-800 mb-2">Reverse formulas (modes 2 &amp; 3)</p>
                <div class="space-y-1.5 text-xs text-blue-700">
                  <div class="font-mono">Property Value = NOI ÷ Cap Rate</div>
                  <div class="font-mono">Required NOI = Value × Cap Rate</div>
                </div>
              </div>
              <div class="p-4 rounded-xl border border-amber-100 bg-amber-50">
                <p class="text-xs font-bold text-amber-800 mb-1">Cap rate is always unlevered</p>
                <p class="text-xs text-amber-700 leading-relaxed">Mortgage payments are <strong>never</strong> included in NOI. Cap rate measures return as if you paid all cash. For financed deals, use the Investor Returns module or our Cash-on-Cash calculator to add leverage analysis.</p>
              </div>
            </div>

          </div>

          <!-- Real-world example -->
          <div class="mt-8 p-6 rounded-2xl border-2 border-amber-200" style="background: #fffbeb;">
            <h3 class="font-bold text-gray-900 mb-1">Real-World Example: Dallas, TX — 4-Unit Residential</h3>
            <p class="text-xs text-amber-700 mb-4">Based on typical 2026 North Dallas submarket data for a 1990s-built quadplex</p>
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Income &amp; Expenses</p>
                <div class="space-y-1.5 text-sm">
                  <div class="flex justify-between"><span class="text-gray-600">Monthly rent (×4 units)</span><span class="font-semibold">$1,800 × 4</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Gross annual income</span><span class="font-semibold">$86,400</span></div>
                  <div class="flex justify-between text-red-600"><span>Vacancy loss (6%)</span><span>− $5,184</span></div>
                  <div class="flex justify-between font-semibold border-t border-amber-200 pt-1.5 mt-1"><span>EGI</span><span>$81,216</span></div>
                  <div class="flex justify-between text-red-600"><span>Property taxes</span><span>− $9,500</span></div>
                  <div class="flex justify-between text-red-600"><span>Insurance</span><span>− $4,200</span></div>
                  <div class="flex justify-between text-red-600"><span>Property management (9%)</span><span>− $7,310</span></div>
                  <div class="flex justify-between text-red-600"><span>Maintenance &amp; CapEx reserve</span><span>− $7,390</span></div>
                  <div class="flex justify-between font-extrabold text-green-700 border-t border-amber-200 pt-1.5 mt-1"><span>Net Operating Income</span><span>$52,816</span></div>
                </div>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Result</p>
                <div class="p-4 rounded-xl text-center mb-3" style="background: #1e3a5f;">
                  <p class="text-xs text-blue-300 mb-1">Purchase Price: $880,000</p>
                  <p class="text-4xl font-extrabold text-white">6.0%</p>
                  <p class="text-xs text-blue-200 mt-1">Cap Rate</p>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed">A 6.0% cap rate is <strong>strong for Dallas in 2026</strong> — typical stabilized multifamily in the DFW metro trades at 5–6.5%. This property performs at the top of the range, with solid NOI margin and reasonable vacancy assumptions. Proceed to Cash-on-Cash analysis with your financing terms.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           INPUTS & OUTPUTS REFERENCE TABLE
      ═══════════════════════════════════════════════ -->
      <div id="inputs-outputs" class="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-8 py-5 border-b border-gray-100">
          <h2 class="text-lg font-extrabold" style="color: #1e3a5f;">Inputs & Outputs — Field Reference</h2>
          <p class="text-gray-500 text-sm mt-0.5">What each field means and where to find the numbers</p>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-100" style="background:#f8fafc;">
                <th class="text-left px-6 py-3 font-bold text-gray-500 uppercase text-xs tracking-wide w-40">Field</th>
                <th class="text-left px-4 py-3 font-bold text-gray-500 uppercase text-xs tracking-wide">What it means</th>
                <th class="text-left px-4 py-3 font-bold text-gray-500 uppercase text-xs tracking-wide w-48">Where to find it</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr>
                <td class="px-6 py-3 font-semibold text-gray-800">Monthly Rent</td>
                <td class="px-4 py-3 text-gray-600">Rent collected per unit per month. Use <em>actual</em> collected rent, not asking price.</td>
                <td class="px-4 py-3 text-gray-500">Lease agreements, property management reports</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-6 py-3 font-semibold text-gray-800">Vacancy Rate</td>
                <td class="px-4 py-3 text-gray-600">% of time units are empty. Typical US range: 5–8% for stabilized rentals.</td>
                <td class="px-4 py-3 text-gray-500">Local market data, CoStar, historical occupancy from seller's T-12</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-gray-800">Operating Expenses</td>
                <td class="px-4 py-3 text-gray-600">All annual costs to operate the property: taxes, insurance, management, maintenance. <strong>Exclude debt service.</strong></td>
                <td class="px-4 py-3 text-gray-500">Seller's T-12 P&L, county tax records, insurance quotes</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-6 py-3 font-semibold text-gray-800">Purchase Price</td>
                <td class="px-4 py-3 text-gray-600">Agreed acquisition cost. Does not include closing costs or rehab.</td>
                <td class="px-4 py-3 text-gray-500">Purchase contract, listing price</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-gray-800">NOI (output)</td>
                <td class="px-4 py-3 text-gray-600">Net Operating Income. EGI minus all operating expenses. The core income metric for income-producing property.</td>
                <td class="px-4 py-3 text-gray-500 italic">Calculated automatically</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-6 py-3 font-semibold text-gray-800">Cap Rate (output)</td>
                <td class="px-4 py-3 text-gray-600">Annual unlevered yield on total property value. Primary metric for comparing income properties across markets.</td>
                <td class="px-4 py-3 text-gray-500 italic">Calculated automatically</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           EDUCATIONAL CONTENT + FAQ
      ═══════════════════════════════════════════════ -->
      <div class="mt-10 grid md:grid-cols-2 gap-8">

        <!-- What is Cap Rate -->
        <div id="what-is-cap-rate" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What Is Cap Rate (Capitalization Rate)?</h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            The <strong>capitalization rate</strong> — universally called <strong>cap rate</strong> — is the ratio of a property's annual Net Operating Income (NOI) to its current market value or purchase price, expressed as a percentage. It answers a single, powerful question: <em>if I paid all cash, what annual return would this property generate?</em> Because it excludes financing, cap rate lets investors compare a $200k duplex in Memphis against a $2M apartment building in Denver on a single, consistent scale.
          </p>
          <div class="p-4 rounded-xl text-center font-bold text-lg mb-4" style="background: #f0f4f8; color: #1e3a5f;">
            Cap Rate = NOI ÷ Property Value × 100
          </div>
          <p class="text-gray-600 leading-relaxed">
            Cap rate is an <strong>unlevered, point-in-time income yield</strong>. It captures the property's operating performance today — not its appreciation potential, not your financing costs, and not future rent growth. That's both its strength and its limitation. Use it to quickly screen deals, anchor bid prices to market data, and benchmark against comparable sales. For a complete investment picture — especially if you're financing the deal — pair cap rate with Cash-on-Cash return, DSCR, and a multi-year discounted cash flow model. The best investors use cap rate as the starting filter, not the final answer.
          </p>
        </div>

        <!-- Good vs Bad -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What's a Typical Cap Rate?</h2>
          <div class="space-y-3 mb-4">
            <div v-for="tier in capRateTiers" :key="tier.label"
              class="flex items-center gap-3 p-3 rounded-xl border"
              :style="`background: ${tier.bg}; border-color: ${tier.border}`">
              <div class="w-3 h-3 rounded-full flex-shrink-0" :style="`background: ${tier.dot}`"></div>
              <div class="flex-1">
                <span class="font-bold text-sm" :style="`color: ${tier.textColor}`">{{ tier.label }}</span>
                <span class="text-xs text-gray-500 ml-2">{{ tier.range }}</span>
              </div>
              <span class="text-xs text-gray-500">{{ tier.note }}</span>
            </div>
          </div>
          <p class="text-xs text-gray-400 leading-relaxed">These are rough US averages, not definitions of a good or bad deal. Context, market cycle, and asset quality matter far more than the number alone. Cap rates compress in high-demand markets and expand when interest rates rise or local fundamentals weaken.</p>
        </div>

      </div>

      <!-- ═══════════════════════════════════════════════
           CAP RATE BY US MARKET
      ═══════════════════════════════════════════════ -->
      <div id="benchmarks" class="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Cap Rate Benchmarks by Market &amp; Property Type (2026)</h2>
        <p class="text-gray-500 text-sm mb-6">Typical stabilized cap rates by property type and US geography. Use as a starting point — always verify with current local broker comps and CoStar data.</p>

        <!-- PROPERTY TYPE TABLE -->
        <h3 class="font-bold text-gray-800 mb-3">By Property Type</h3>
        <div class="overflow-x-auto mb-8 rounded-xl border border-gray-100">
          <table class="w-full text-sm">
            <thead>
              <tr style="background:#f0f4f8;">
                <th class="text-left px-5 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Property Type</th>
                <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Low (Coastal)</th>
                <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Average (Sunbelt)</th>
                <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Strong (Midwest / SE)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr>
                <td class="px-5 py-3 font-semibold text-gray-800">Single-Family Rental (SFR)</td>
                <td class="px-4 py-3 text-center text-amber-600 font-semibold">3.5–4.5%</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">5–6.5%</td>
                <td class="px-4 py-3 text-center text-green-600 font-semibold">7–9%</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-5 py-3 font-semibold text-gray-800">Small Multifamily (2–4 units)</td>
                <td class="px-4 py-3 text-center text-amber-600 font-semibold">3.5–5%</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">5.5–7%</td>
                <td class="px-4 py-3 text-center text-green-600 font-semibold">7–10%</td>
              </tr>
              <tr>
                <td class="px-5 py-3 font-semibold text-gray-800">Multifamily 5+ Units</td>
                <td class="px-4 py-3 text-center text-amber-600 font-semibold">3–5%</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">5–6.5%</td>
                <td class="px-4 py-3 text-center text-green-600 font-semibold">6.5–8.5%</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-5 py-3 font-semibold text-gray-800">Retail / Strip Center</td>
                <td class="px-4 py-3 text-center text-amber-600 font-semibold">4–5.5%</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">6–7.5%</td>
                <td class="px-4 py-3 text-center text-green-600 font-semibold">8–10%</td>
              </tr>
              <tr>
                <td class="px-5 py-3 font-semibold text-gray-800">Industrial / Warehouse</td>
                <td class="px-4 py-3 text-center text-amber-600 font-semibold">3.5–5%</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">5–6.5%</td>
                <td class="px-4 py-3 text-center text-green-600 font-semibold">6.5–8%</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-5 py-3 font-semibold text-gray-800">Office</td>
                <td class="px-4 py-3 text-center text-amber-600 font-semibold">4–6%</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">6.5–8%</td>
                <td class="px-4 py-3 text-center text-green-600 font-semibold">8–11%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- GEO TABLE intro -->
        <h3 class="font-bold text-gray-800 mb-3">By State — Typical Stabilized Residential</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">California (CA)</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">3.5–5%</p>
            <p class="text-xs text-gray-500">LA, SF, San Diego. Strong appreciation markets; income yield is secondary to price growth.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Texas (TX)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">5–7%</p>
            <p class="text-xs text-gray-500">Dallas, Austin, Houston. Population growth driving rent increases. Solid income yields.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Florida (FL)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">5–7%</p>
            <p class="text-xs text-gray-500">Miami, Tampa, Orlando. High demand from migration; insurance costs rising in coastal areas.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">New York (NY)</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">3–5%</p>
            <p class="text-xs text-gray-500">NYC metro. Rent stabilization laws impact NOI. Gateway market with strong long-term demand.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Arizona (AZ)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">5.5–7.5%</p>
            <p class="text-xs text-gray-500">Phoenix, Scottsdale. Fast-growing sunbelt market with favorable landlord laws.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Georgia (GA)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">6–8%</p>
            <p class="text-xs text-gray-500">Atlanta metro. Strong job growth, no state rent control, attractive to investors.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Colorado (CO)</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">4.5–6%</p>
            <p class="text-xs text-gray-500">Denver. Strong appreciation, constrained supply. Denver has local rent-increase rules.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Washington (WA)</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">4–6%</p>
            <p class="text-xs text-gray-500">Seattle metro. Tech-driven demand, high incomes, competitive market with compressed yields.</p>
          </div>
        </div>
        <!-- Geo summary table -->
        <div class="mt-6 overflow-x-auto rounded-xl border border-gray-100">
          <table class="w-full text-sm">
            <thead>
              <tr style="background:#f0f4f8;">
                <th class="text-left px-5 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">State</th>
                <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Typical Range</th>
                <th class="text-left px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Key Notes</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr><td class="px-5 py-2.5 font-semibold text-gray-800">California</td><td class="px-4 py-2.5 text-center text-amber-600 font-semibold">3.5–5%</td><td class="px-4 py-2.5 text-gray-600 text-xs">AB 1482 rent-cap limits NOI growth. Appreciation market — income yield is secondary.</td></tr>
              <tr class="bg-gray-50/40"><td class="px-5 py-2.5 font-semibold text-gray-800">Texas</td><td class="px-4 py-2.5 text-center text-green-600 font-semibold">5–7%</td><td class="px-4 py-2.5 text-gray-600 text-xs">No state income tax, no rent control. Strong population and job growth in DFW, Austin, Houston.</td></tr>
              <tr><td class="px-5 py-2.5 font-semibold text-gray-800">Florida</td><td class="px-4 py-2.5 text-center text-green-600 font-semibold">5–7%</td><td class="px-4 py-2.5 text-gray-600 text-xs">Rising insurance costs in coastal counties compress NOI. Orlando and Tampa submarkets outperforming.</td></tr>
              <tr class="bg-gray-50/40"><td class="px-5 py-2.5 font-semibold text-gray-800">New York</td><td class="px-4 py-2.5 text-center text-amber-600 font-semibold">3–5%</td><td class="px-4 py-2.5 text-gray-600 text-xs">Rent stabilization on older stock constrains NOI. NYC remains a gateway market with deep institutional liquidity.</td></tr>
              <tr><td class="px-5 py-2.5 font-semibold text-gray-800">Arizona</td><td class="px-4 py-2.5 text-center text-green-600 font-semibold">5.5–7.5%</td><td class="px-4 py-2.5 text-gray-600 text-xs">Landlord-friendly state. Phoenix remains a top sunbelt growth market with favorable cap rate environment.</td></tr>
              <tr class="bg-gray-50/40"><td class="px-5 py-2.5 font-semibold text-gray-800">Georgia</td><td class="px-4 py-2.5 text-center text-green-600 font-semibold">6–8%</td><td class="px-4 py-2.5 text-gray-600 text-xs">No statewide rent control. Atlanta metro offers strong yields with growing tech and film industry demand.</td></tr>
              <tr><td class="px-5 py-2.5 font-semibold text-gray-800">Colorado</td><td class="px-4 py-2.5 text-center text-amber-600 font-semibold">4.5–6%</td><td class="px-4 py-2.5 text-gray-600 text-xs">Denver has city-level rent-increase rules. Constrained housing supply supports appreciation thesis.</td></tr>
              <tr class="bg-gray-50/40"><td class="px-5 py-2.5 font-semibold text-gray-800">Washington</td><td class="px-4 py-2.5 text-center text-amber-600 font-semibold">4–6%</td><td class="px-4 py-2.5 text-gray-600 text-xs">Seattle tech economy drives high incomes and rents but also high prices, compressing cap rates.</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-gray-400 mt-3">Sources: CoStar Q1 2026, CBRE Cap Rate Survey, RealPage Market Analytics. Ranges are for stabilized residential properties. Commercial rates vary by asset class and submarket.</p>
      </div>

      <!-- ═══════════════════════════════════════════════
           WHAT YOUR RESULT MEANS
      ═══════════════════════════════════════════════ -->
      <div id="result-meaning" class="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">What Your Cap Rate Result Means</h2>
        <p class="text-gray-600 leading-relaxed mb-5">
          Your cap rate is an annual unlevered income yield — what the property earns on its full value, before financing. Here is how to interpret each range:
        </p>
        <div class="space-y-3 mb-5">
          <!-- GOOD -->
          <div class="flex gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
            <div class="flex-shrink-0 mt-0.5">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500 text-white">GOOD</span>
            </div>
            <div>
              <p class="font-bold text-sm text-green-800">≥ 7% — Strong Yield</p>
              <p class="text-sm text-green-700 mt-1 leading-relaxed">Common in Midwest secondary markets (Indianapolis, Columbus, Memphis) and Southeast cities (Atlanta suburbs, Birmingham). Strong cash flow from day one. <em>Important check:</em> a cap rate this high can signal elevated risk — deferred maintenance, weak tenant base, or a declining submarket. Always ask why the yield is this elevated. If the fundamentals are solid, this is a legitimate high-performer.</p>
            </div>
          </div>
          <!-- AVERAGE -->
          <div class="flex gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200">
            <div class="flex-shrink-0 mt-0.5">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500 text-white">AVERAGE</span>
            </div>
            <div>
              <p class="font-bold text-sm text-blue-800">5–6.9% — Market-Rate Yield</p>
              <p class="text-sm text-blue-700 mt-1 leading-relaxed">The standard range for stabilized income properties in major US metros — Dallas, Phoenix, Denver, Charlotte, Nashville. This is where most institutional buyers set minimum thresholds for secondary markets. Balanced income and appreciation profile. If you're financing at today's rates (~7%), verify DSCR before proceeding.</p>
            </div>
          </div>
          <!-- POOR / COASTAL -->
          <div class="flex gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <div class="flex-shrink-0 mt-0.5">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-white">POOR</span>
            </div>
            <div>
              <p class="font-bold text-sm text-amber-800">3–4.9% — Low / Coastal Yield</p>
              <p class="text-sm text-amber-700 mt-1 leading-relaxed">Standard for gateway markets — Los Angeles (3.5–4.5%), San Francisco (3–4%), NYC boroughs (3.5–5%), Seattle (4–5.5%). At these levels the deal is an <strong>appreciation play</strong>, not an income play. Current-period cash flow is minimal or negative when financed. Justified only with strong rent-growth conviction and long hold period.</p>
            </div>
          </div>
          <!-- NEGATIVE / RED FLAG -->
          <div class="flex gap-4 p-4 rounded-xl bg-red-50 border border-red-200">
            <div class="flex-shrink-0 mt-0.5">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-500 text-white">RED FLAG</span>
            </div>
            <div>
              <p class="font-bold text-sm text-red-800">&lt; 3% or Negative NOI</p>
              <p class="text-sm text-red-700 mt-1 leading-relaxed">Sub-3% cap rates appear only in top-tier trophy assets (Manhattan penthouses, SF tech-corridor offices) or signal a significant data problem. Negative NOI means operating expenses exceed income — the property is cash-flow negative before debt service. Do not proceed without a clear value-add or repositioning plan.</p>
            </div>
          </div>
        </div>
        <!-- RIS_CONTEXT -->
        <div class="p-4 rounded-xl border border-gray-200 bg-gray-50">
          <p class="text-sm font-semibold text-gray-800 mb-1">Why the same cap rate can be good in one market and poor in another</p>
          <p class="text-sm text-gray-600 leading-relaxed">A 5% cap rate in Dallas reflects a strong, growing market with high occupancy and rent growth — investors accept lower initial yield because fundamentals support future appreciation. That same 5% cap rate in a Rust Belt city with declining population and rising vacancy is a warning sign. Cap rate is a ratio; the quality of the NOI underneath it matters just as much as the number. Always cross-reference with local submarket vacancy trends, population and job growth data, and comparable recent sales before drawing conclusions.</p>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           STRATEGY
      ═══════════════════════════════════════════════ -->
      <div id="strategy" class="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">When Cap Rate Matters Most</h2>
        <p class="text-gray-500 text-sm mb-6">How cap rate fits into each major US real estate investment strategy</p>
        <div class="grid md:grid-cols-2 gap-6">

          <!-- Buy & Hold -->
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#1e3a5f;">Buy &amp; Hold</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              Cap rate is the <strong>primary screening metric</strong> for buy-and-hold investors. Before running any other numbers, compare the cap rate to your market benchmark. If it's below your threshold (e.g., sub-5% in a market where comps show 6%), move on — no amount of leverage fixes a bad entry yield.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              Use Mode 1 (Calculate Cap Rate) to evaluate the current yield. Use Mode 3 (Find Required NOI) to set a minimum NOI target for any property at a given price point. Long-hold strategy: target stabilized cap rate ≥ 1.5–2% above your interest rate to avoid negative leverage.
            </p>
          </div>

          <!-- BRRRR -->
          <div class="p-5 rounded-xl border border-blue-100 bg-blue-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-blue-600">BRRRR</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              Cap rate is essential at <strong>two stages</strong> of a BRRRR deal: at acquisition (distressed asset, lower NOI, higher cap rate due to below-market rents or vacancy) and post-stabilization (renovated, fully leased, market rents). The gap between these two cap rates represents the <strong>forced appreciation</strong> you've created.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              Example: Buy at an effective 9% cap on distressed NOI → renovate → lease at market rents → stabilized NOI implies a 6% market cap rate. At a 6% cap on the new NOI, your appraised value supports a cash-out refinance that returns most or all of your capital. Use this calculator's Mode 2 (Find Implied Value) to model your post-renovation value.
            </p>
          </div>

          <!-- Commercial -->
          <div class="p-5 rounded-xl border border-amber-100 bg-amber-50/60">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold" style="background:#f59e0b; color:#1e3a5f;">Commercial</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              In commercial real estate, cap rate <strong>is the valuation standard</strong>. Appraisers, brokers, and lenders all anchor to it. The formula Value = NOI ÷ Cap Rate is the foundation of the income approach in every USPAP-compliant commercial appraisal. For NNN leases, the cap rate reflects both income yield and tenant credit risk — a CVS at 5.5% vs. a local tenant at 7% reflects the risk differential.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              Commercial strategy tip: identify submarkets where you expect cap rate <em>compression</em> over your hold period. If you buy at a 7% cap and exit at a 5.5% cap on the same NOI, property value increases by ~27% purely from cap rate movement — before any rent growth.
            </p>
          </div>

          <!-- Fix & Flip -->
          <div class="p-5 rounded-xl border border-emerald-100 bg-emerald-50/60">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#059669;">Fix &amp; Flip</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              Cap rate is not the primary metric for fix-and-flip deals — but it is <strong>essential for exit pricing</strong>. When you are flipping an income-producing property (a duplex, triplex, or small apartment building), the resale price is driven by the market cap rate, not comparable sales. Buyers of these assets value them on income.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              Use Mode 2 (Find Implied Value) to model your exit price: enter the stabilized NOI you expect after renovation and a realistic market cap rate for your submarket. If a stabilized 4-unit in Atlanta trades at 6.5% caps and your post-reno NOI will be $62,000, your target exit price is ~$954,000 — regardless of what you paid or spent. Build your acquisition offer back from this number, not from comps.
            </p>
          </div>

          <!-- Cap Rate Math -->
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#6366f1;">Bid Pricing</span>
            </div>
            <h3 class="font-bold text-gray-800 mb-2 text-sm">Using Cap Rate to Set a Maximum Offer</h3>
            <div class="p-3 rounded-xl bg-white border border-gray-100 font-mono text-sm text-center mb-3" style="color: #1e3a5f;">
              Max Price = NOI ÷ Market Cap Rate
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">
              If comparable sales in your submarket show a 6.5% cap rate and the property's T-12 NOI is $65,000, your maximum justified bid is $1,000,000. This anchors negotiation in objective market data rather than the seller's asking price. This is the income approach to valuation — used by every commercial appraiser in the US.
            </p>
          </div>

        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           APPLICATIONS
      ═══════════════════════════════════════════════ -->
      <div id="applications" class="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Applications of Cap Rate Analysis</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Deal Screening</p>
            <p class="text-sm text-gray-600">Quickly filter properties that don't meet your return threshold before spending time on deeper due diligence. Set a minimum cap rate and move on from deals below it.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Portfolio Comparison</p>
            <p class="text-sm text-gray-600">Compare returns across different property types, geographies, and price points on a consistent basis. Cap rate strips out financing differences so you can compare apples to apples.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Offer Price Negotiation</p>
            <p class="text-sm text-gray-600">Use market cap rates and your NOI estimate to anchor a maximum offer price. If the seller's ask implies a 4% cap in a 6% market, you have quantifiable leverage in negotiations.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Refinance Analysis</p>
            <p class="text-sm text-gray-600">Calculate cap rate on current market value (not purchase price) to assess whether a property has appreciated enough to refinance at favorable terms or extract equity.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Exit Strategy Modeling</p>
            <p class="text-sm text-gray-600">Project what your property will sell for at exit by estimating future NOI and applying a market exit cap rate. Lower exit cap = higher sale price; useful for IRR modeling.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">BRRRR & Value-Add</p>
            <p class="text-sm text-gray-600">Track cap rate before and after renovation to quantify forced appreciation. If you raise NOI from $40k to $65k in a 6.5% market, you've added ~$385k in property value on paper.</p>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           INDUSTRY STANDARDS
      ═══════════════════════════════════════════════ -->
      <div id="industry-standards" class="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Industry Standards &amp; Professional Guidelines</h2>
        <div class="grid md:grid-cols-3 gap-6">

          <!-- Fannie Mae / Freddie Mac -->
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">F</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">Fannie Mae &amp; Freddie Mac</h3>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Both GSEs require a DSCR of <strong>1.25x minimum</strong> for standard multifamily loans (1.20x for affordable housing).</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Cap rate is used indirectly: the appraiser's income-approach value (based on market cap rate) must support the loan-to-value ratio.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Freddie Mac Optigo underwriting applies a 5–10% vacancy/credit-loss floor regardless of actual vacancy, preventing inflated NOI.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> If market cap rates compress (values rise), lower appraised NOI-cap-rate values may limit loan proceeds even if purchase price is justified.</li>
            </ul>
          </div>

          <!-- CCIM -->
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">C</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">CCIM Guidelines</h3>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed mb-3">
              The CCIM Institute (Certified Commercial Investment Member) is the gold standard for commercial real estate analysis. CCIM methodology defines cap rate as part of a complete investment analysis framework alongside NPV, IRR, and equity multiple.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> CCIM uses <strong>overall rate (OAR)</strong> interchangeably with cap rate in direct capitalization analysis.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Band-of-investment method: OAR is derived from the weighted average of debt and equity return requirements — not just market comps.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> CCIM recommends DCF (discounted cash flow) for holds over 3 years, where cap rate alone is insufficient.</li>
            </ul>
          </div>

          <!-- Common Lender Thresholds -->
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">$</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">Common Lender Thresholds</h3>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> <strong>DSCR ≥ 1.25x</strong> — standard minimum for conventional commercial loans (Freddie, Fannie, bank portfolio).</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> <strong>DSCR ≥ 1.20x</strong> — minimum for DSCR investor loans (non-QM residential); some lenders allow 1.0x for strong-credit borrowers.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> <strong>Negative leverage flag</strong>: if cap rate &lt; loan constant (interest rate ÷ amortization factor), lenders require compensating factors or higher down payment.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> <strong>NOI stress test</strong>: most commercial lenders underwrite NOI at 90–95% of trailing 12-month actual to build in a conservatism buffer.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> <strong>LTV limits</strong>: 75–80% for multifamily; 65–75% for commercial — derived from appraised value, which is itself anchored to the income-approach cap rate.</li>
            </ul>
          </div>

        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           LIMITATIONS
      ═══════════════════════════════════════════════ -->
      <div id="limitations" class="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Limitations of Cap Rate</h2>
        <div class="grid sm:grid-cols-2 gap-5">
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Does Not Capture Appreciation</p>
            <p class="text-sm text-gray-600">Cap rate only measures current income yield. It ignores projected rent growth, market appreciation, and the equity you build over time. A 4% cap in a high-growth market may outperform a 9% cap in a stagnant one.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Ignores Financing</p>
            <p class="text-sm text-gray-600">Cap rate assumes an all-cash purchase. Your actual levered return (Cash-on-Cash, IRR) depends heavily on your down payment, interest rate, and loan structure. Use investor mode or a CoC calculator for levered analysis.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Point-in-Time Snapshot</p>
            <p class="text-sm text-gray-600">Cap rate is calculated on current NOI — it doesn't account for future rent increases, lease expirations, capital expenditures, or changing vacancy. A 10-year hold requires discounted cash flow (DCF) analysis for a complete picture.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Quality of Input Data</p>
            <p class="text-sm text-gray-600">Garbage in, garbage out. A seller's proforma may inflate income or omit expenses to show an attractive cap rate. Always verify using actual trailing 12-month (T-12) operating statements, not projections.</p>
          </div>
        </div>

        <!-- When Not to Use -->
        <div id="when-not-to-use" class="mt-6">
          <h3 class="font-bold text-gray-800 mb-3">When Not to Use Cap Rate as the Primary Metric</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Vacant properties:</strong> No income means no NOI, making cap rate meaningless. Use projected stabilized NOI with appropriate risk discount.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Short-term rentals (Airbnb/VRBO):</strong> Income is volatile and seasonal. Standard cap rate underestimates both upside and risk.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Land and development deals:</strong> These are valued on future use, not current income. Use residual land value analysis instead.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Owner-occupied property:</strong> Cap rate applies to investment property generating market rents, not your primary residence.</li>
          </ul>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           COMMON MISTAKES
      ═══════════════════════════════════════════════ -->
      <div id="common-mistakes" class="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Common Mistakes When Calculating Cap Rate</h2>
        <div class="space-y-3">
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">1</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Including debt service in expenses</p>
              <p class="text-sm text-gray-600 mt-0.5">Mortgage payments, interest, and loan costs are <strong>not</strong> operating expenses. Cap rate is calculated before financing. Including them produces a "leveraged cap rate" that is not comparable to market cap rates and will mislead your analysis.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">2</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Using proforma (projected) income instead of actual</p>
              <p class="text-sm text-gray-600 mt-0.5">Sellers often present a proforma with optimistic rents and low vacancy. Always request and use the trailing 12-month P&L (T-12). If it isn't available, that's a red flag.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">3</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Omitting management fees (even if self-managing)</p>
              <p class="text-sm text-gray-600 mt-0.5">If you self-manage, you should still budget 8–10% of rents as a management expense. This represents your time cost and makes the analysis portable — if you ever hire a manager or sell to someone who will, the numbers stay accurate.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">4</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Ignoring capital expenditures (CapEx)</p>
              <p class="text-sm text-gray-600 mt-0.5">Roof replacement, HVAC, appliances, and major repairs are real costs but often excluded from operating expenses. Budget $100–200/unit/month as a CapEx reserve for properties over 15 years old. Excluding CapEx overstates NOI and understates actual returns.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">5</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Entering monthly figures as annual totals</p>
              <p class="text-sm text-gray-600 mt-0.5">All expense fields expect <strong>annual totals</strong>. A common mistake is entering monthly rent as the annual income (12× understated) or monthly expenses as the annual figure. The calculator shows warnings when values look mismatched.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div id="faq" class="mt-10 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
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

      <!-- Other Calculators CTA -->
      <div class="mt-10 rounded-2xl p-8 text-center text-white"
        style="background: linear-gradient(135deg, #1e3a5f 0%, #16304f 100%);">
        <h2 class="text-2xl font-extrabold mb-2">Ready to Dig Deeper?</h2>
        <p class="text-blue-200 mb-6">Cap rate is just the start. Use our full toolkit for complete deal analysis.</p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink v-for="calc in relatedCalcs" :key="calc.href"
            :to="calc.href"
            class="px-5 py-2.5 rounded-xl font-semibold text-sm border border-white/20 bg-white/10 hover:bg-white/20 transition">
            {{ calc.label }}
          </NuxtLink>
        </div>
      </div>

    <!-- ═══════════════════════════════════════════════
         SCENARIO PANEL
    ═══════════════════════════════════════════════ -->
    <div class="max-w-6xl mx-auto px-4 pb-10">
      <ScenarioPanel
        calculator="cap-rate"
        :has-result="hasResult"
        :result="currentScenarioResult"
        :trigger-save="triggerScenarioSave"
        @saved="onScenarioSaved"
      />
    </div>

    </main>

    <!-- Email Capture Modal -->
    <EmailCaptureModal
      :show="showEmailModal"
      :calculator-name="'Cap Rate Calculator'"
      :primary-result="hasResult ? `${capRate.toFixed(2)}% Cap Rate` : undefined"
      title="Save Your Cap Rate Analysis"
      subtitle="Get market benchmarks, deal templates, and calculator updates."
      cta-label="Save & Get Free Updates"
      @close="showEmailModal = false"
      @captured="onEmailCaptured"
    />

    <!-- ═══════════════════════════════════════════════
         FOOTER
    ═══════════════════════════════════════════════ -->
    <footer class="mt-16 border-t border-gray-200 bg-white py-8 px-4">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-400">© 2026 RealCalc. For informational purposes only. Not financial advice.</p>
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
// ─── SEO ─────────────────────────────────────────────────────────────────────
useHead({
  title: 'Cap Rate Calculator — Capitalization Rate Formula, NOI & US Benchmarks | RealCalc',
  meta: [
    {
      name: 'description',
      content: 'Free cap rate calculator for US real estate investors. Compute capitalization rate from NOI and property value, reverse-solve for implied value or required NOI, and compare to 2026 benchmarks by property type and state. No signup required.'
    },
    { property: 'og:title', content: 'Cap Rate Calculator — Capitalization Rate, NOI & US Benchmarks | RealCalc' },
    { property: 'og:description', content: 'Calculate cap rate, find implied property value, or determine required NOI. 2026 benchmarks by property type and state. NOI breakdown, GRM, PDF export. Free, no signup.' },
    { name: 'keywords', content: 'cap rate calculator, capitalization rate, NOI calculator, real estate investment, rental property cap rate, property value calculator, US real estate benchmarks' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Cap Rate Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description: 'Free capitalization rate calculator for US real estate investors. Calculate cap rate from NOI and property value, reverse-solve for implied value or required NOI, with 2026 market benchmarks by property type and state.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        featureList: 'Real-time cap rate calculation, NOI breakdown, vacancy modeling, property type benchmarks, geo benchmarks, GRM, sensitivity analysis, PDF export, scenario comparison'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Calculator',
        name: 'Cap Rate Calculator',
        description: 'Calculate capitalization rate (cap rate) for US real estate investment properties. Enter NOI and property value to instantly get cap rate, or reverse-solve for implied property value and required NOI.',
        url: 'https://realcalc.com/cap-rate-calculator',
        provider: {
          '@type': 'Organization',
          name: 'RealCalc',
          url: 'https://realcalc.com'
        }
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
            name: 'What is a good cap rate for rental property?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'There is no universal "good" cap rate — it depends on the market, asset class, and investment strategy. In most US markets, 6–8% is typical for stabilized assets. High-cost metros like NYC or San Francisco often see 3–5%, while Midwest markets can yield 8–12%. Always compare against local submarket comps.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does cap rate include mortgage payments?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Cap rate is an unlevered metric — it does not include mortgage or debt service. It calculates return as if you paid all cash. For levered returns, use Cash-on-Cash return instead.'
            }
          },
          {
            '@type': 'Question',
            name: 'What expenses are included in NOI?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'NOI (Net Operating Income) deducts property taxes, insurance, property management, maintenance and repairs, utilities (if landlord-paid), and other operating expenses. It does NOT include mortgage payments, depreciation, capital expenditures, or income taxes.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do I use cap rate to value a property?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'To value a property using cap rate: Property Value = NOI ÷ Cap Rate. For example, if a property generates $30,000 NOI and the market cap rate is 6%, the implied value is $500,000. This is the standard income approach used in commercial real estate appraisal.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between cap rate and cash-on-cash return?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Cap rate measures unlevered return on the total property value, ignoring financing. Cash-on-Cash return measures return on your actual cash invested, including the effect of your mortgage. Cap rate is better for comparing properties; Cash-on-Cash reflects your actual investment performance.'
            }
          },
          {
            '@type': 'Question',
            name: 'Why do cap rates rise when interest rates go up?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'When interest rates rise, borrowing costs increase, reducing how much buyers can pay for a property at the same cash flow. Sellers must accept lower prices to attract buyers, which mathematically increases cap rates. Cap rates generally track the 10-year Treasury yield plus a risk premium of 100–250 basis points.'
            }
          },
          {
            '@type': 'Question',
            name: 'Should I use purchase price or current market value to calculate cap rate?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Use purchase price when evaluating a potential acquisition — this shows your yield on acquisition cost. Use current market value when benchmarking an existing holding or preparing for refinance — this gives the market yield a buyer would see today. This calculator supports both options.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is cap rate compression and why does it matter?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Cap rate compression occurs when property values rise faster than NOI, pushing cap rates lower. This is common in high-demand markets like coastal cities. For buyers, lower cap rates mean paying more for the same income — acceptable if strong rent growth and appreciation are expected. For sellers, cap rate compression signals a peak-value exit opportunity. Investors in compressed markets (sub-5% caps) typically rely on rent growth and long-term appreciation rather than current income to generate returns.'
            }
          }
        ]
      })
    }
  ]
})

// ─── REACTIVE STATE ──────────────────────────────────────────────────────────
const expenseMode  = ref('simple')
const incomeMode   = ref('monthly')
const valueBasis   = ref('purchase')
const openFaq      = ref(null)
const assetClass   = ref('')
const shareSuccess = ref(false)

// Investor Returns module
const investorOpen = ref(false)
const investorForm = reactive({
  downPaymentPct: null,
  interestRate:   null,
  loanTermYears:  30,
  closingCosts:   null,
  rehabCosts:     null,
  cashReserves:   null,
})

// Scenarios module
const scenariosOpen = ref(false)

// ── Calculator Mode ──────────────────────────────────────────────────────────
// 'cap-rate'  → standard: NOI / Property Value → Cap Rate
// 'find-value'→ reverse:  NOI / Target Cap Rate → Implied Property Value
// 'find-noi'  → reverse:  Property Value × Target Cap Rate → Required NOI
const calcMode       = ref('cap-rate')
const reverseCapRate = ref(null)          // target cap rate % for reverse modes

const form = reactive({
  // annual mode
  grossIncome:   null,
  // monthly mode
  monthlyRent:   null,
  numUnits:      null,
  // shared
  vacancyRate:   null,
  totalExpenses: null,
  purchasePrice: null,
  marketValue:   null,
  expenses: {
    propertyTax:  null,
    insurance:    null,
    management:   null,
    maintenance:  null,
    utilities:    null,
    hoa:          null,
    other:        null,
  }
})

// ─── EXPENSE FIELDS CONFIG ───────────────────────────────────────────────────
const expenseFields = [
  { key: 'propertyTax',  label: 'Property Taxes (annual)',        hint: null,                                                                placeholder: 'Enter annual property taxes' },
  { key: 'insurance',    label: 'Insurance (annual)',             hint: null,                                                                placeholder: 'Enter annual insurance cost' },
  { key: 'management',   label: 'Property Management (annual)',   hint: 'Often 6–10% of gross rents for residential',                       placeholder: 'Enter annual property management cost' },
  { key: 'maintenance',  label: 'Maintenance & Repairs (annual)', hint: null,                                                                placeholder: 'Enter annual maintenance and repairs' },
  { key: 'utilities',    label: 'Utilities — if landlord paid',   hint: null,                                                               placeholder: 'Enter annual utility cost' },
  { key: 'hoa',          label: 'HOA Fees (annual)',              hint: null,                                                                placeholder: 'Enter annual HOA fees' },
  { key: 'other',        label: 'Other Expenses (annual)',        hint: null,                                                                placeholder: 'Enter other annual operating expenses' },
]

// ─── ASSET CLASS CONTEXT ─────────────────────────────────────────────────────
const assetClassData = {
  'sfr':          { label: 'SFR',                   note: 'Single-family homes typically see 5–8% in most US markets. Lower in coastal metros, higher in the Midwest and Southeast.',         typicalRange: [5, 8] },
  'small-multi':  { label: 'Small Multifamily',      note: '2–4 unit properties behave similarly to SFR. Typical range 5–8%. Below-market management can inflate returns — budget for vacancy and turnover.', typicalRange: [5, 8] },
  'large-multi':  { label: 'Large Multifamily (5+)', note: '5+ unit multifamily trades at 4–6% in gateway markets, 5–8% in secondary/tertiary markets. Institutional buyers compress cap rates in competitive submarkets.', typicalRange: [4, 7] },
  'commercial':   { label: 'Commercial / Mixed-Use', note: 'Commercial cap rates vary widely by use type: retail 5–8%, office 6–9%, industrial 4–6%. Tenant credit quality and lease length significantly affect value.', typicalRange: [5, 9] },
}

const assetClassContext = computed(() =>
  assetClass.value ? assetClassData[assetClass.value] : null
)

// ─── FULLY-COMPUTED CALCULATION CHAIN ────────────────────────────────────────
const grossIncome = computed(() => {
  if (incomeMode.value === 'monthly') {
    return (Number(form.monthlyRent) || 0) * (Number(form.numUnits) || 0) * 12
  }
  return Number(form.grossIncome) || 0
})

const propertyValueCalc = computed(() =>
  valueBasis.value === 'purchase'
    ? (Number(form.purchasePrice) || 0)
    : (Number(form.marketValue) || 0)
)

const detailedTotalExpenses = computed(() =>
  Object.values(form.expenses).reduce((sum, v) => sum + (Number(v) || 0), 0)
)

const totalExpensesCalc = computed(() =>
  expenseMode.value === 'simple'
    ? (Number(form.totalExpenses) || 0)
    : detailedTotalExpenses.value
)

// Clamp vacancy to 0–100 regardless of what was typed
const vacancyRateClamped = computed(() =>
  Math.min(100, Math.max(0, Number(form.vacancyRate) || 0))
)

const vacancyRateInvalid = computed(() => {
  const raw = form.vacancyRate
  if (raw === null || raw === '') return false
  const n = Number(raw)
  return isNaN(n) || n < 0 || n > 100
})

const vacancyLoss = computed(() =>
  grossIncome.value * (vacancyRateClamped.value / 100)
)

const effectiveGrossIncome = computed(() =>
  grossIncome.value - vacancyLoss.value
)

const noi = computed(() =>
  effectiveGrossIncome.value - totalExpensesCalc.value
)

const capRate = computed(() =>
  propertyValueCalc.value > 0 ? (noi.value / propertyValueCalc.value) * 100 : 0
)

// GRM — Gross Rent Multiplier (supplemental metric in cap-rate mode)
const grm = computed(() => {
  if (calcMode.value !== 'cap-rate') return null
  if (grossIncome.value <= 0 || propertyValueCalc.value <= 0) return null
  return propertyValueCalc.value / grossIncome.value
})

// Reverse: implied property value given NOI + target cap rate
const findValueResult = computed(() => {
  const r = Number(reverseCapRate.value) || 0
  if (calcMode.value !== 'find-value' || r <= 0 || noi.value <= 0) return null
  return (noi.value / r) * 100
})

// Reverse: required NOI given property value + target cap rate
const findNOIResult = computed(() => {
  const pv = propertyValueCalc.value
  const r  = Number(reverseCapRate.value) || 0
  if (calcMode.value !== 'find-noi' || pv <= 0 || r <= 0) return null
  return pv * (r / 100)
})

// Hint: gross income needed to hit findNOIResult at a 40% expense / 5% vacancy rule-of-thumb
const findNOIGrossHint = computed(() => {
  if (!findNOIResult.value) return null
  const vacRate  = (Number(form.vacancyRate) || 5) / 100
  const expRatio = 0.40
  const factor   = (1 - vacRate) * (1 - expRatio)
  return factor > 0 ? findNOIResult.value / factor : null
})

const hasResult = computed(() => {
  if (calcMode.value === 'cap-rate') {
    const gi = grossIncome.value > 0
    const pv = propertyValueCalc.value > 0
    const vr = form.vacancyRate !== null && form.vacancyRate !== '' && !isNaN(Number(form.vacancyRate))
    return gi && pv && vr
  }
  if (calcMode.value === 'find-value') {
    return noi.value > 0 && (Number(reverseCapRate.value) || 0) > 0
  }
  if (calcMode.value === 'find-noi') {
    return propertyValueCalc.value > 0 && (Number(reverseCapRate.value) || 0) > 0
  }
  return false
})

const hasBothValues = computed(() =>
  Number(form.purchasePrice) > 0 && Number(form.marketValue) > 0
)

// ─── ANALYTICS ───────────────────────────────────────────────────────────────
const vacancyMonths = computed(() =>
  (vacancyRateClamped.value / 100) * 12
)

const expenseRatio = computed(() => {
  if (effectiveGrossIncome.value <= 0) return 0
  return (totalExpensesCalc.value / effectiveGrossIncome.value) * 100
})

const noiMargin = computed(() => {
  if (effectiveGrossIncome.value <= 0) return 0
  return (noi.value / effectiveGrossIncome.value) * 100
})

// At what vacancy rate does NOI reach zero (given current expenses)?
const breakEvenVacancy = computed(() => {
  if (!hasResult.value || grossIncome.value <= 0 || totalExpensesCalc.value <= 0) return null
  // NOI = grossIncome*(1-bev) - expenses = 0 → bev = 1 - expenses/grossIncome
  const bev = (1 - totalExpensesCalc.value / grossIncome.value) * 100
  return Math.max(0, Math.min(100, bev))
})

const breakEvenVacancyMonths = computed(() => {
  if (breakEvenVacancy.value === null) return null
  return ((breakEvenVacancy.value / 100) * 12).toFixed(1)
})

// ─── INVESTOR RETURNS ─────────────────────────────────────────────────────────
const loanAmount = computed(() => {
  if (!hasResult.value) return 0
  const price = propertyValueCalc.value
  const dp = Math.min(100, Math.max(0, Number(investorForm.downPaymentPct) || 25))
  return price * (1 - dp / 100)
})

const monthlyPayment = computed(() => {
  const P = loanAmount.value
  const rate = (Number(investorForm.interestRate) || 7) / 100 / 12
  const n = (Number(investorForm.loanTermYears) || 30) * 12
  if (P <= 0 || rate === 0) return 0
  return P * (rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1)
})

const annualDebtService = computed(() => monthlyPayment.value * 12)

const cashFlowAfterDebt = computed(() => noi.value - annualDebtService.value)

const cashInvested = computed(() => {
  if (!hasResult.value) return 0
  const price = propertyValueCalc.value
  const dp = price * (Math.min(100, Math.max(0, Number(investorForm.downPaymentPct) || 25)) / 100)
  return dp +
    (Number(investorForm.closingCosts) || 0) +
    (Number(investorForm.rehabCosts) || 0) +
    (Number(investorForm.cashReserves) || 0)
})

const cocReturn = computed(() => {
  if (cashInvested.value <= 0) return null
  return (cashFlowAfterDebt.value / cashInvested.value) * 100
})

const dscr = computed(() => {
  if (annualDebtService.value <= 0) return null
  return noi.value / annualDebtService.value
})

// ─── SCENARIOS ────────────────────────────────────────────────────────────────
const scenarios = computed(() => {
  if (!hasResult.value) return null

  const calcScenario = (vacMult, vacAdd, rentMult, expMult) => {
    const gi = grossIncome.value * rentMult
    const vac = Math.min(100, vacancyRateClamped.value * vacMult + vacAdd)
    const vacLoss = gi * (vac / 100)
    const egi = gi - vacLoss
    const exp = totalExpensesCalc.value * expMult
    const n = egi - exp
    const cr = propertyValueCalc.value > 0 ? (n / propertyValueCalc.value) * 100 : 0

    let cf = null
    let coc = null
    if (investorOpen.value && annualDebtService.value > 0) {
      cf = n - annualDebtService.value
      coc = cashInvested.value > 0 ? (cf / cashInvested.value) * 100 : null
    }

    return { noi: n, capRate: cr, cashFlow: cf, coc, vacancy: vac }
  }

  return [
    {
      key: 'conservative',
      label: 'Conservative',
      desc: 'vacancy +50%, expenses +10%, rent −5%',
      color: '#dc2626',
      bgColor: '#fef2f2',
      ...calcScenario(1.5, 2, 0.95, 1.10),
    },
    {
      key: 'base',
      label: 'Base Case',
      desc: 'Current inputs as entered',
      color: '#2563eb',
      bgColor: '#eff6ff',
      ...calcScenario(1, 0, 1, 1),
    },
    {
      key: 'optimistic',
      label: 'Optimistic',
      desc: 'vacancy −30%, expenses −5%, rent +5%',
      color: '#059669',
      bgColor: '#f0fdf4',
      ...calcScenario(0.7, 0, 1.05, 0.95),
    },
  ]
})

// ─── WARNING STATES ──────────────────────────────────────────────────────────
const warnings = computed(() => {
  if (!hasResult.value && calcMode.value !== 'find-value') return []
  const w = []

  // Find-value mode: warn about missing inputs that affect NOI
  if (calcMode.value === 'find-value') {
    if (form.vacancyRate === null || form.vacancyRate === '') {
      w.push({ type: 'warn', msg: 'Vacancy rate not entered — NOI is calculated without any vacancy deduction, which overstates income. Enter 0 to confirm no vacancy.' })
    }
    if (expenseMode.value === 'simple' && (form.totalExpenses === null || form.totalExpenses === '' || Number(form.totalExpenses) === 0)) {
      w.push({ type: 'warn', msg: 'No operating expenses entered — NOI equals effective gross income. Add taxes, insurance, management, and maintenance for a realistic implied value.' })
    } else if (expenseMode.value === 'detailed' && detailedTotalExpenses.value === 0) {
      w.push({ type: 'warn', msg: 'No operating expenses in detailed mode — implied value will be overstated. Enter at least taxes, insurance, and maintenance.' })
    }
    return w
  }

  if (!hasResult.value || calcMode.value !== 'cap-rate') return []

  // Vacancy out of range (value was clamped)
  if (vacancyRateInvalid.value) {
    w.push({ type: 'error', msg: `Vacancy rate must be between 0 and 100%. Value clamped to ${vacancyRateClamped.value}% for this calculation.` })
  }

  // Zero units (this warning only fires when hasResult is true — guard against edge cases)
  if (incomeMode.value === 'monthly' && form.numUnits !== null && form.numUnits !== '' && Number(form.numUnits) <= 0) {
    w.push({ type: 'error', msg: 'Number of units must be at least 1. Income cannot be calculated until a valid unit count is entered.' })
  }

  // Missing expenses
  if (expenseMode.value === 'simple' && (form.totalExpenses === null || form.totalExpenses === '' || Number(form.totalExpenses) === 0)) {
    w.push({ type: 'warn', msg: 'No operating expenses entered. NOI equals effective gross income, which overstates returns. Add taxes, insurance, maintenance, and management for a realistic estimate.' })
  } else if (expenseMode.value === 'detailed' && detailedTotalExpenses.value === 0) {
    w.push({ type: 'warn', msg: 'No operating expenses entered in detailed mode. Add at least taxes, insurance, and maintenance for a realistic NOI estimate.' })
  }

  // Negative NOI
  if (noi.value < 0) {
    w.push({ type: 'error', msg: 'Negative NOI — expenses exceed effective income at these inputs. This property is operationally unprofitable. Review expense and income figures before drawing conclusions.' })
  }

  // Annual/monthly confusion — income too small for an annual figure
  if (incomeMode.value === 'annual' && grossIncome.value > 0 && propertyValueCalc.value > 0) {
    if (grossIncome.value < 5000 && propertyValueCalc.value > 50000) {
      w.push({ type: 'error', msg: `Annual income of ${formatCurrency(grossIncome.value)} looks like a monthly figure. In Annual mode, enter the full-year total (e.g. ${formatCurrency(grossIncome.value * 12)} if the monthly rent is ${formatCurrency(grossIncome.value)}).` })
    } else if (capRate.value > 20) {
      w.push({ type: 'error', msg: `Cap rate of ${capRate.value.toFixed(1)}% is unusually high. Most likely cause: annual income was entered as a monthly figure. If monthly rent is ${formatCurrency(grossIncome.value)}, the annual total should be ${formatCurrency(grossIncome.value * 12)}.` })
    } else if (grossIncome.value / propertyValueCalc.value > 0.25) {
      w.push({ type: 'warn', msg: `Income-to-value ratio of ${(grossIncome.value / propertyValueCalc.value * 100).toFixed(0)}% is unusually high. Confirm that income is the full-year annual total and property value is the full purchase price, not a per-unit figure.` })
    }
  } else if (capRate.value > 20) {
    w.push({ type: 'error', msg: `Cap rate of ${capRate.value.toFixed(1)}% is unusually high. Verify income and property value are entered correctly.` })
  }

  // High vacancy
  if (vacancyRateClamped.value > 20) {
    w.push({ type: 'warn', msg: `Vacancy rate of ${vacancyRateClamped.value}% is unusually high. Most stabilized US rental properties average 5–10%. Verify this figure reflects actual or expected vacancy, not a worst-case assumption.` })
  }

  // Expense ratio too low — possible monthly figure entered as annual
  if (effectiveGrossIncome.value > 0 && totalExpensesCalc.value > 0) {
    const expRatio = totalExpensesCalc.value / effectiveGrossIncome.value
    if (expRatio < 0.05) {
      // Check if expenses look like a monthly figure
      const asMonthlyRatio = (totalExpensesCalc.value * 12) / effectiveGrossIncome.value
      if (asMonthlyRatio >= 0.2 && asMonthlyRatio <= 0.75) {
        w.push({ type: 'error', msg: `Expenses of ${formatCurrency(totalExpensesCalc.value)} look like a monthly figure. If so, the annual total would be ${formatCurrency(totalExpensesCalc.value * 12)} (${(asMonthlyRatio * 100).toFixed(0)}% of income — more typical). Enter annual totals in all fields.` })
      } else {
        w.push({ type: 'warn', msg: `Expenses appear very low — only ${(expRatio * 100).toFixed(0)}% of effective income. Typical rental properties run 35–50%. Verify taxes, insurance, maintenance, and management are included.` })
      }
    } else if (expRatio < 0.1) {
      w.push({ type: 'warn', msg: `Expenses are only ${(expRatio * 100).toFixed(0)}% of effective income. Most rental properties run 35–50% expense ratios. Make sure taxes, insurance, maintenance, and management are all included.` })
    }
  }

  // Expense ratio very high
  if (effectiveGrossIncome.value > 0 && totalExpensesCalc.value / effectiveGrossIncome.value > 0.8) {
    w.push({ type: 'warn', msg: `Expenses are ${(totalExpensesCalc.value / effectiveGrossIncome.value * 100).toFixed(0)}% of effective income — very high. Verify no expenses were accidentally doubled or entered as annual figures in monthly amounts.` })
  }

  return w
})

// ─── BADGE SYSTEM ────────────────────────────────────────────────────────────
// Labels describe the yield level, not whether it's a "good deal"
const badge = computed(() => {
  const cr = capRate.value
  if (cr <  0)  return { label: 'Negative NOI',  bg1: '#7f1d1d', bg2: '#450a0a' }
  if (cr >= 8)  return { label: 'High Yield',    bg1: '#059669', bg2: '#047857' }
  if (cr >= 6)  return { label: 'Mid Yield',     bg1: '#0284c7', bg2: '#0369a1' }
  if (cr >= 4)  return { label: 'Moderate',      bg1: '#d97706', bg2: '#b45309' }
  if (cr >= 2)  return { label: 'Low Yield',     bg1: '#ea580c', bg2: '#c2410c' }
  return              { label: 'Very Low',       bg1: '#dc2626', bg2: '#b91c1c' }
})

// ─── DEAL INSIGHT TEXT ───────────────────────────────────────────────────────
const insightText = computed(() => {
  const cr       = capRate.value
  const egi      = effectiveGrossIncome.value
  const expRatio = egi > 0 ? (totalExpensesCalc.value / egi * 100).toFixed(0) : 0
  const acCtx    = assetClass.value && assetClassContext.value ? ` For ${assetClassContext.value.label}, typical US range is ${assetClassContext.value.typicalRange[0]}–${assetClassContext.value.typicalRange[1]}%.` : ''

  if (noi.value < 0) return `NOI is negative — expenses exceed effective income at these inputs. Review expense assumptions and income figures before drawing conclusions.`

  if (cr >= 8) return `Cap rate of ${cr.toFixed(2)}% is in the high-yield range by US norms.${acCtx} Expense ratio: ${expRatio}% of EGI. High cap rates can reflect risk, distress, or below-market management — verify income and vacancy assumptions before treating this as a strong signal.`
  if (cr >= 6) return `Cap rate of ${cr.toFixed(2)}% is within the mid-yield range common in many US markets.${acCtx} Expense ratio: ${expRatio}% of EGI. Whether this represents a reasonable return depends heavily on your local submarket and acquisition basis.`
  if (cr >= 4) return `Cap rate of ${cr.toFixed(2)}% is in the moderate range — typical for suburban coastal and secondary markets.${acCtx} Expense ratio: ${expRatio}% of EGI. At this yield level, returns are sensitive to even modest changes in vacancy or expenses.`
  if (cr >= 2) return `Cap rate of ${cr.toFixed(2)}% is in the low-yield range.${acCtx} Common in high-cost primary markets. Unlevered income cushion is limited — verify all inputs are complete before drawing conclusions.`
  return `Cap rate of ${cr.toFixed(2)}% is below 2% — unlevered returns are minimal at this level.${acCtx} Double-check all inputs: missing expenses and incorrect income figures are common causes. This may also reflect a high acquisition price relative to the income.`
})

// ─── MARKET BENCHMARKS ───────────────────────────────────────────────────────
const marketBenchmarks = computed(() => {
  const cr = capRate.value
  const hr = hasResult.value
  return [
    { label: 'High Yield',    range: '≥ 8%',      yours: hr && cr >= 8 },
    { label: 'Mid Yield',     range: '6 – 7.9%',  yours: hr && cr >= 6 && cr < 8 },
    { label: 'Moderate',      range: '4 – 5.9%',  yours: hr && cr >= 4 && cr < 6 },
    { label: 'Low Yield',     range: '2 – 3.9%',  yours: hr && cr >= 2 && cr < 4 },
    { label: 'Very Low',      range: '0 – 1.9%',  yours: hr && cr >= 0 && cr < 2 },
    { label: 'Negative NOI',  range: '< 0%',      yours: hr && cr < 0 },
  ]
})

// ─── CAP RATE TIERS (education) ──────────────────────────────────────────────
const capRateTiers = [
  { label: 'High Yield',  range: '≥ 8%',   note: 'Midwest, Southeast',     bg: '#f0fdf4', border: '#bbf7d0', dot: '#059669', textColor: '#065f46' },
  { label: 'Mid Yield',   range: '6–7.9%', note: 'Most US markets',        bg: '#eff6ff', border: '#bfdbfe', dot: '#2563eb', textColor: '#1e40af' },
  { label: 'Moderate',    range: '4–5.9%', note: 'Suburban coastal',       bg: '#fffbeb', border: '#fde68a', dot: '#d97706', textColor: '#92400e' },
  { label: 'Low',         range: '< 4%',   note: 'NYC, SF (appreciation)', bg: '#fef2f2', border: '#fecaca', dot: '#dc2626', textColor: '#991b1b' },
]

// ─── SENSITIVITY TABLE ───────────────────────────────────────────────────────
// How cap rate changes at different property values (±30%)
const sensitivityRows = computed(() => {
  if (!hasResult.value || noi.value <= 0) return null
  const baseValue = propertyValueCalc.value
  return [-0.30, -0.20, -0.10, 0, 0.10, 0.20, 0.30].map(delta => {
    const val = baseValue * (1 + delta)
    const cr  = (noi.value / val) * 100
    return {
      label:     delta === 0 ? 'Current' : `${delta > 0 ? '+' : ''}${(delta * 100).toFixed(0)}%`,
      value:     val,
      capRate:   cr,
      isCurrent: delta === 0,
    }
  })
})

// Implied property value at target cap rates (reverse calculation)
const impliedValues = computed(() => {
  if (!hasResult.value || noi.value <= 0) return null
  return [4, 5, 6, 7, 8, 9, 10].map(rate => ({
    rate,
    impliedValue: (noi.value / rate) * 100,
    isCurrent: Math.abs(capRate.value - rate) < 0.5,
  }))
})

// NOI bar visualization — percentages for stacked bar
// All segments are relative to gross income (= 100% bar width)
// Expenses are clamped so vacancyPct + expensePct ≤ 100%
const noiBreakdown = computed(() => {
  if (!hasResult.value || grossIncome.value <= 0) return null
  const gi    = grossIncome.value
  const vl    = vacancyLoss.value
  const exp   = totalExpensesCalc.value
  const n     = noi.value

  const vacPct = (vl / gi) * 100
  const expPct = Math.min((exp / gi) * 100, 100 - vacPct)  // clamp so bar ≤ 100%
  const noiPct = n > 0 ? (n / gi) * 100 : 0

  return {
    vacancyPct:  vacPct,
    expensePct:  expPct,
    noiPct,
    noiNegative: n < 0,
    // % by which expenses exceed income (for text display below bar)
    overflowPct: n < 0 ? ((Math.abs(n) / gi) * 100).toFixed(0) : 0,
  }
})

// ─── FAQS ────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'What is a good cap rate for rental property?',
    a: 'There is no universal "good" cap rate — it depends on the market, asset class, and your strategy. In most US markets, 6–8% is typical for stabilized assets. High-cost metros like NYC or San Francisco often see 3–5%, while Midwest markets can yield 8–12%. A 4% cap rate in a strong appreciation market can outperform an 8% cap rate in a stagnant one. Always compare against local submarket comps, not national benchmarks.'
  },
  {
    q: 'Does cap rate include mortgage payments?',
    a: 'No. Cap rate is an unlevered metric — it does not include mortgage or debt service. It calculates return as if you paid all cash. For levered returns that reflect your actual financing, use Cash-on-Cash return instead. This makes cap rate ideal for comparing properties across different financing structures.'
  },
  {
    q: 'What expenses are included in NOI?',
    a: 'NOI (Net Operating Income) deducts property taxes, insurance, property management fees, maintenance and repairs, utilities (if landlord-paid), HOA fees, and other operating expenses. It does NOT include mortgage payments, depreciation, capital expenditures, or income taxes. Capital reserves (CapEx) are sometimes excluded from NOI — if so, NOI overstates true cash flow.'
  },
  {
    q: 'How do I use cap rate to value a property?',
    a: 'To value a property using cap rate: Property Value = NOI ÷ Cap Rate. For example, if a property generates $30,000 NOI and the market cap rate is 6%, the implied value is $500,000. This is the standard income approach used in commercial real estate appraisal. Note: this is only reliable if the NOI and market cap rate are accurate and based on current submarket data.'
  },
  {
    q: 'What is the difference between cap rate and cash-on-cash return?',
    a: 'Cap rate measures unlevered return on the total property value, ignoring financing. Cash-on-Cash return measures return on your actual cash invested, including the effect of your mortgage. Cap rate is best for comparing properties on equal footing; Cash-on-Cash reflects what you personally earn on your down payment and closing costs.'
  },
  {
    q: 'Why do cap rates rise when interest rates go up?',
    a: 'When interest rates rise, borrowing costs increase, which reduces what buyers can pay for a property at the same cash flow. Sellers must lower prices (or accept lower bids) to compensate, which mathematically increases cap rates. As a rule of thumb, cap rates tend to track the 10-year Treasury yield plus a risk premium of 100–250 basis points, though the relationship is not perfect and varies by market.'
  },
  {
    q: 'Should I use purchase price or current market value for cap rate?',
    a: 'It depends on your goal. Use purchase price when evaluating a potential acquisition — this tells you the yield on your acquisition cost. Use current market value when benchmarking an existing holding or preparing for a refinance — this gives you the market yield, which is what a buyer would pay today. This calculator supports both — toggle between them in the Property Value section.'
  },
  {
    q: 'What is a cap rate compression and why does it matter?',
    a: 'Cap rate compression occurs when property values rise faster than NOI, driving cap rates lower. This is common in high-demand markets like coastal cities. For buyers, lower cap rates mean paying more for less income — acceptable if you expect appreciation. For sellers, cap rate compression signals an opportunity to exit at peak values. Investors in compressed markets (sub-5% cap rates) typically rely on rent growth and appreciation rather than current income to generate returns.'
  },
]

// ─── RELATED CALCULATORS ─────────────────────────────────────────────────────
const relatedCalcs = [
  { label: 'Cash-on-Cash Return', href: '/cash-on-cash-calculator' },
  { label: 'DSCR Calculator',     href: '/dscr-calculator' },
  { label: 'NOI Calculator',      href: '/noi-calculator' },
  { label: 'Rental Property',     href: '/rental-property-calculator' },
  { label: 'BRRRR Calculator',    href: '/brrrr-calculator' },
]

// ─── URL PERSISTENCE ─────────────────────────────────────────────────────────
function buildShareParams() {
  const p = new URLSearchParams()
  if (calcMode.value !== 'cap-rate') p.set('cm', calcMode.value)
  if (reverseCapRate.value) p.set('rcr', reverseCapRate.value)
  if (incomeMode.value !== 'monthly') p.set('im', incomeMode.value)
  if (incomeMode.value === 'annual' && form.grossIncome) p.set('gi', form.grossIncome)
  if (incomeMode.value === 'monthly') {
    if (form.monthlyRent) p.set('mr', form.monthlyRent)
    if (form.numUnits !== null) p.set('nu', form.numUnits)
  }
  if (form.vacancyRate !== null) p.set('vr', form.vacancyRate)
  if (expenseMode.value !== 'simple') p.set('em', expenseMode.value)
  if (expenseMode.value === 'simple' && form.totalExpenses) p.set('te', form.totalExpenses)
  if (expenseMode.value === 'detailed') {
    if (form.expenses.propertyTax) p.set('ept', form.expenses.propertyTax)
    if (form.expenses.insurance)   p.set('ei',  form.expenses.insurance)
    if (form.expenses.management)  p.set('emg', form.expenses.management)
    if (form.expenses.maintenance) p.set('emt', form.expenses.maintenance)
    if (form.expenses.utilities)   p.set('eu',  form.expenses.utilities)
    if (form.expenses.hoa)         p.set('eho', form.expenses.hoa)
    if (form.expenses.other)       p.set('eot', form.expenses.other)
  }
  if (form.purchasePrice) p.set('pp', form.purchasePrice)
  if (form.marketValue)   p.set('mv', form.marketValue)
  if (valueBasis.value !== 'purchase') p.set('vb', valueBasis.value)
  if (assetClass.value) p.set('ac', assetClass.value)
  return p.toString()
}

if (process.client) {
  onMounted(() => {
    const p = new URLSearchParams(window.location.search)
    if (p.has('cm'))  calcMode.value      = p.get('cm')
    if (p.has('rcr')) reverseCapRate.value = Number(p.get('rcr'))
    if (p.has('im'))  incomeMode.value = p.get('im')
    if (p.has('gi'))  form.grossIncome  = Number(p.get('gi'))
    if (p.has('mr'))  form.monthlyRent  = Number(p.get('mr'))
    if (p.has('nu'))  form.numUnits     = Number(p.get('nu'))
    if (p.has('vr'))  form.vacancyRate  = Number(p.get('vr'))
    if (p.has('em'))  expenseMode.value = p.get('em')
    if (p.has('te'))  form.totalExpenses = Number(p.get('te'))
    if (expenseMode.value === 'detailed') {
      if (p.has('ept')) form.expenses.propertyTax = Number(p.get('ept'))
      if (p.has('ei'))  form.expenses.insurance   = Number(p.get('ei'))
      if (p.has('emg')) form.expenses.management  = Number(p.get('emg'))
      if (p.has('emt')) form.expenses.maintenance = Number(p.get('emt'))
      if (p.has('eu'))  form.expenses.utilities   = Number(p.get('eu'))
      if (p.has('eho')) form.expenses.hoa         = Number(p.get('eho'))
      if (p.has('eot')) form.expenses.other       = Number(p.get('eot'))
    }
    if (p.has('pp'))  form.purchasePrice = Number(p.get('pp'))
    if (p.has('mv'))  form.marketValue   = Number(p.get('mv'))
    if (p.has('vb'))  valueBasis.value   = p.get('vb')
    if (p.has('ac'))  assetClass.value   = p.get('ac')
  })
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function resetForm() {
  form.grossIncome   = null
  form.monthlyRent   = null
  form.numUnits      = null
  form.vacancyRate   = null
  form.totalExpenses = null
  form.purchasePrice = null
  form.marketValue   = null
  Object.keys(form.expenses).forEach(k => { form.expenses[k] = null })
  incomeMode.value     = 'monthly'
  valueBasis.value     = 'purchase'
  assetClass.value     = ''
  calcMode.value       = 'cap-rate'
  reverseCapRate.value = null
  investorForm.downPaymentPct = null
  investorForm.interestRate   = null
  investorForm.loanTermYears  = 30
  investorForm.closingCosts   = null
  investorForm.rehabCosts     = null
  investorForm.cashReserves   = null
  expenseMode.value    = 'simple'
  investorOpen.value   = false
  shareSuccess.value   = false
  openFaq.value        = null
  scenariosOpen.value  = false
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
    // Fallback: select a temporary input
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
  doc.text('Cap Rate Analysis Report', 20, 30)
  doc.setFontSize(9)
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 130, 20)
  if (assetClass.value && assetClassContext.value) {
    doc.text(`Asset class: ${assetClassContext.value.label}`, 130, 28)
  }

  // Cap Rate Hero
  doc.setFillColor(...gold)
  doc.rect(15, 50, 180, 30, 'F')
  doc.setTextColor(30, 58, 95)
  doc.setFontSize(28)
  doc.setFont('helvetica', 'bold')
  doc.text(`${capRate.value.toFixed(2)}%`, 105, 69, { align: 'center' })
  doc.setFontSize(10)
  doc.text('CAP RATE', 105, 77, { align: 'center' })

  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text(`Yield Level: ${badge.value.label}`, 105, 92, { align: 'center' })

  // Financial Breakdown
  doc.setTextColor(...navy)
  doc.setFontSize(13)
  doc.text('Financial Breakdown', 20, 108)

  const valueBasisLabel = valueBasis.value === 'purchase' ? 'Purchase Price' : 'Current Market Value'

  // Build rows — expand detailed expenses if applicable
  const rows = [
    ['Gross Annual Income', formatCurrency(grossIncome.value)],
    [`Vacancy Loss (${vacancyRateClamped.value}%)`, `-${formatCurrency(vacancyLoss.value)}`],
    ['Effective Gross Income', formatCurrency(effectiveGrossIncome.value)],
  ]

  if (expenseMode.value === 'detailed') {
    expenseFields.forEach(ef => {
      const v = Number(form.expenses[ef.key]) || 0
      if (v > 0) rows.push([`  — ${ef.label}`, `-${formatCurrency(v)}`])
    })
    rows.push(['Total Operating Expenses', `-${formatCurrency(totalExpensesCalc.value)}`])
  } else {
    rows.push(['Total Operating Expenses (lump sum)', `-${formatCurrency(totalExpensesCalc.value)}`])
  }

  rows.push(
    ['Net Operating Income (NOI)', formatCurrency(noi.value)],
    [valueBasisLabel, formatCurrency(propertyValueCalc.value)],
    ['Cap Rate', `${capRate.value.toFixed(2)}%`],
  )

  let y = 115
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
    y += 12
  })

  // Deal Context
  y += 6
  const splitInsight = doc.splitTextToSize(insightText.value, 165)
  const insightBoxHeight = Math.max(28, splitInsight.length * 5 + 16)
  doc.setFillColor(240, 244, 248)
  doc.rect(15, y - 5, 180, insightBoxHeight, 'F')
  doc.setTextColor(...navy)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text('Deal Context', 20, y + 3)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(...gray)
  doc.text(splitInsight, 20, y + 12)
  y += insightBoxHeight + 6

  // Warnings
  if (warnings.value.length > 0) {
    const warnLines = warnings.value.flatMap(w => doc.splitTextToSize(`• ${w.msg}`, 160))
    const warnBoxH = warnLines.length * 5 + 20
    doc.setFillColor(255, 251, 235)
    doc.rect(15, y - 4, 180, warnBoxH, 'F')
    doc.setFillColor(245, 158, 11)
    doc.rect(15, y - 4, 3, warnBoxH, 'F')
    doc.setTextColor(...navy)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'bold')
    doc.text('Flags & Warnings', 22, y + 4)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7.5)
    doc.setTextColor(146, 64, 14)
    doc.text(warnLines, 22, y + 12)
    y += warnBoxH + 6
  }

  // Assumptions
  const incomeDesc = incomeMode.value === 'monthly'
    ? `${form.numUnits || 0} unit(s) × $${form.monthlyRent || 0}/mo × 12`
    : 'annual figure entered directly'
  const assumptionLines = [
    `Income basis: ${incomeDesc}`,
    `Expense mode: ${expenseMode.value === 'simple' ? 'lump sum (simple)' : 'detailed breakdown'}`,
    `Value basis: ${valueBasisLabel}`,
    assetClass.value && assetClassContext.value ? `Asset class context: ${assetClassContext.value.label}` : '',
    'This report is for informational purposes only. Not financial advice. Not a substitute for professional underwriting.',
  ].filter(Boolean)

  if (y < 252) {
    doc.setTextColor(...gray)
    doc.setFontSize(7)
    doc.setFont('helvetica', 'italic')
    assumptionLines.forEach((line, i) => {
      doc.text(line, 20, y + i * 5)
    })
  }

  // Footer
  doc.setFillColor(...navy)
  doc.rect(0, 280, 210, 17, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text('realcalc.io — For informational purposes only. Not financial advice.', 105, 290, { align: 'center' })

  doc.save(`cap-rate-analysis-${Date.now()}.pdf`)
}

// ─── SCENARIO SAVE / EMAIL CAPTURE ───────────────────────────────────────────
const showEmailModal = ref(false)

// Build the ScenarioResult object from current calc state
const currentScenarioResult = computed(() => {
  if (!hasResult.value) return undefined
  return {
    primaryMetric: 'Cap Rate',
    primaryValue:  `${capRate.value.toFixed(2)}%`,
    badgeLabel:    badge.value?.label,
    badgeColor:    badge.value?.bg1,
    capRate:       capRate.value,
    noi:           noi.value,
    grossIncome:   grossIncome.value,
    totalExpenses: totalExpensesCalc.value,
    vacancyRate:   vacancyRateClamped.value,
    purchasePrice: Number(form.purchasePrice) || undefined,
    cashOnCash:    cocReturn.value ?? undefined,
    dscr:          dscr.value ?? undefined,
    annualCashFlow: (investorOpen.value && annualDebtService.value > 0)
      ? noi.value - annualDebtService.value
      : undefined,
  }
})

// "Save Scenario" button — delegate to the ScenarioPanel's inline save form by
// emitting through a shared flag so the panel opens its name input
const triggerScenarioSave = ref(false)

function openSaveScenario() {
  triggerScenarioSave.value = true
  // Reset after ScenarioPanel's watcher has fired
  nextTick(() => { triggerScenarioSave.value = false })
  // Show email capture modal if not yet collected
  try {
    if (!localStorage.getItem('realcalc_email_captured')) {
      showEmailModal.value = true
    }
  } catch {}
}

function onScenarioSaved(_id) {
  // no-op: triggerScenarioSave is already reset via nextTick in openSaveScenario
}

function onEmailCaptured(email) {
  showEmailModal.value = false
}
</script>
