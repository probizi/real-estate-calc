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
            <li class="text-gray-700 font-semibold">Airbnb / STR Calculator</li>
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
            Airbnb Calculator — STR Profit, Cash Flow & Break-Even Occupancy (2026)
          </h1>
        </div>

        <!-- On this page nav -->
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>

          <!-- Desktop: full list -->
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            <li><a href="#what-is-str-revenue" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What is STR Revenue</a></li>
            <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Your Result Means</a></li>
            <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
            <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
            <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Applications</a></li>
            <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Industry Standards</a></li>
            <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
          </ul>

          <!-- Mobile: first 3 always visible + collapsible rest -->
          <div class="md:hidden">
            <ul class="flex flex-col gap-y-2">
              <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
              <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
              <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            </ul>
            <ul v-show="isNavExpanded" class="flex flex-col gap-y-2 mt-2">
              <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
              <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
              <li><a href="#what-is-str-revenue" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What is STR Revenue</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Your Result Means</a></li>
              <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
              <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
              <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Applications</a></li>
              <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Industry Standards</a></li>
              <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
              <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
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
          <span>Monthly Cash Flow</span>
        </div>
        <div class="flex items-center gap-3">
          <template v-if="hasResult">
            <span class="text-2xl font-extrabold leading-none" :style="`color: ${tierColor}`">
              {{ formatCurrency(monthlyCashFlow) }}
            </span>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full text-white"
              :style="`background: ${tierColor}`">
              {{ tier }}
            </span>
          </template>
          <template v-else>
            <span class="text-2xl font-bold text-gray-200">—</span>
            <span class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         MAIN CALCULATOR
    ═══════════════════════════════════════════════ -->
    <main id="calculator" class="max-w-[1100px] mx-auto px-4 pt-8 pb-10">
      <!-- Accent gradient border -->
      <div class="rounded-3xl p-[3px]" style="background: linear-gradient(135deg, #1e3a5f 0%, #f59e0b 50%, #1e3a5f 100%);">
      <div class="bg-white rounded-[21px] shadow-xl shadow-slate-200/60" style="overflow: clip;">

      <!-- Two-column body: inputs left, results right -->
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch">

        <!-- ── INPUTS (left column) ── -->
        <div class="calc-inputs border-b lg:border-b-0 lg:border-r border-gray-200 bg-white min-w-0">

          <!-- ── PROPERTY & REVENUE SECTION ── -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Property & Revenue</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">

              <!-- Purchase Price -->
              <div>
                <label for="purchase-price" class="block text-xs font-semibold text-gray-700 mb-1">
                  Purchase Price
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="purchase-price" v-model="form.purchasePrice" type="number" min="0" step="1000"
                    placeholder="Enter property purchase price"
                    aria-label="Purchase price in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

              <!-- ADR -->
              <div>
                <label for="adr" class="block text-xs font-semibold text-gray-700 mb-1">
                  Average Daily Rate (ADR)
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="adr" v-model="form.adr" type="number" min="0" step="10"
                    placeholder="Enter average nightly rate"
                    aria-label="Average daily rate in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Average nightly rent before platform fees</p>
              </div>

              <!-- Occupancy Rate -->
              <div>
                <label for="occupancy-rate" class="block text-xs font-semibold text-gray-700 mb-1">
                  Occupancy Rate
                </label>
                <div class="relative">
                  <input id="occupancy-rate" v-model="form.occupancyRate" type="number" min="0" max="100" step="1"
                    placeholder="Enter expected occupancy rate"
                    aria-label="Occupancy rate as a percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
              </div>

              <!-- Nights Available -->
              <div>
                <label for="nights-available" class="block text-xs font-semibold text-gray-700 mb-1">
                  Nights Available per Year
                  <span class="ml-1 text-xs font-normal text-gray-400">(optional, default 365)</span>
                </label>
                <input id="nights-available" v-model="form.nightsAvailable" type="number" min="1" max="365" step="1"
                  placeholder="Optional: nights available per year"
                  aria-label="Nights available per year"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                <p class="text-xs text-gray-400 mt-1">Use for seasonal properties or personal-use days</p>
              </div>

              <!-- Average Stay Length -->
              <div>
                <label for="avg-stay" class="block text-xs font-semibold text-gray-700 mb-1">
                  Average Stay Length
                  <span class="ml-1 text-xs font-normal text-gray-400">(optional, default 3 nights)</span>
                </label>
                <input id="avg-stay" v-model="form.avgStayLength" type="number" min="0.5" step="0.5"
                  placeholder="Optional: average stay length in nights"
                  aria-label="Average stay length in nights"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
              </div>

              <!-- Scenario Name -->
              <div>
                <label for="scenario-name" class="block text-xs font-semibold text-gray-700 mb-1">
                  Scenario Name
                  <span class="ml-1 text-xs font-normal text-gray-400">(optional)</span>
                </label>
                <input id="scenario-name" v-model="form.scenarioName" type="text"
                  placeholder="Optional: name this STR scenario"
                  aria-label="Scenario name"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
              </div>

              <!-- Computed info -->
              <div v-if="occupiedNights > 0" class="p-2.5 rounded-xl text-xs font-medium text-blue-800 bg-blue-50 border border-blue-100">
                Occupied Nights: <span class="font-bold">{{ occupiedNights.toFixed(1) }}</span>
                · Est. Bookings: <span class="font-bold">{{ estimatedBookings.toFixed(1) }}</span>
              </div>
            </div>
          </div>

          <!-- ── CLEANING & FEES SECTION ── -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Cleaning & Platform Fees</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">

              <!-- Cleaning Fee Charged -->
              <div>
                <label for="clean-fee" class="block text-xs font-semibold text-gray-700 mb-1">
                  Cleaning Fee Charged to Guest
                  <span class="ml-1 text-xs font-normal text-gray-400">(optional)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="clean-fee" v-model="form.cleaningFeeCharged" type="number" min="0" step="10"
                    placeholder="Optional: cleaning fee charged to guest"
                    aria-label="Cleaning fee charged to guest"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

              <!-- Cleaning Cost per Turn -->
              <div>
                <label for="clean-cost" class="block text-xs font-semibold text-gray-700 mb-1">
                  Cleaning Cost per Turnover
                  <span class="ml-1 text-xs font-normal text-gray-400">(optional)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="clean-cost" v-model="form.cleaningCostPerTurn" type="number" min="0" step="10"
                    placeholder="Optional: cleaning cost per turnover"
                    aria-label="Cleaning cost per turnover"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

              <!-- Cleaning cost vs fee warning -->
              <div v-if="cleaningCostExceedsFee" class="p-2.5 rounded-xl text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200">
                Cleaning cost exceeds cleaning fee revenue. Turnover creates net cost.
              </div>

              <!-- Platform Fee -->
              <div>
                <label for="platform-fee" class="block text-xs font-semibold text-gray-700 mb-1">
                  Platform Fee Percentage
                  <span class="ml-1 text-xs font-normal text-gray-400">(optional, default 3%)</span>
                </label>
                <div class="relative">
                  <input id="platform-fee" v-model="form.platformFeePct" type="number" min="0" max="25" step="0.5"
                    placeholder="Optional: platform fee percentage"
                    aria-label="Platform fee percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">Airbnb host fees often vary by fee structure. Enter your expected host-side platform fee.</p>
              </div>

              <!-- Lodging Tax -->
              <div>
                <label for="lodging-tax" class="block text-xs font-semibold text-gray-700 mb-1">
                  Lodging / Occupancy Tax
                  <span class="ml-1 text-xs font-normal text-gray-400">(optional)</span>
                </label>
                <div class="relative">
                  <input id="lodging-tax" v-model="form.lodgingTaxPct" type="number" min="0" max="30" step="0.5"
                    placeholder="Optional: lodging or occupancy tax percentage"
                    aria-label="Lodging tax percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">Use only taxes that affect host economics. Some platforms collect and remit taxes directly.</p>
              </div>
            </div>
          </div>

          <!-- ── EXPENSES SECTION ── -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Operating Expenses</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">

              <!-- Monthly Operating Expenses -->
              <div>
                <label for="monthly-opex" class="block text-xs font-semibold text-gray-700 mb-1">
                  Monthly Operating Expenses
                  <span class="ml-1 text-xs font-normal text-gray-400">(optional)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="monthly-opex" v-model="form.monthlyOpex" type="number" min="0" step="50"
                    placeholder="Optional: monthly operating expenses"
                    aria-label="Monthly operating expenses in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Utilities, internet, supplies, insurance, maintenance, subscriptions. Excludes debt service.</p>
              </div>

              <!-- STR Management Fee -->
              <div>
                <label for="mgmt-fee" class="block text-xs font-semibold text-gray-700 mb-1">
                  STR Management Fee
                  <span class="ml-1 text-xs font-normal text-gray-400">(optional)</span>
                </label>
                <div class="relative">
                  <input id="mgmt-fee" v-model="form.mgmtFeePct" type="number" min="0" max="40" step="1"
                    placeholder="Optional: STR management fee percentage"
                    aria-label="STR management fee percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">STR management can be much higher than long-term rental management.</p>
              </div>

              <!-- Management Fee Base -->
              <div v-if="Number(form.mgmtFeePct) > 0">
                <label for="mgmt-base" class="block text-xs font-semibold text-gray-700 mb-1">
                  Management Fee Charged On
                </label>
                <select id="mgmt-base" v-model="form.mgmtFeeBase"
                  aria-label="Management fee base"
                  class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition bg-white">
                  <option value="net">Net booking revenue</option>
                  <option value="gross">Gross booking revenue</option>
                </select>
                <p class="text-xs text-gray-400 mt-1">STR management fees vary widely and may include additional service charges.</p>
              </div>

              <!-- Annual Repairs / CapEx Reserve -->
              <div>
                <label for="capex-reserve" class="block text-xs font-semibold text-gray-700 mb-1">
                  Annual Repairs / CapEx Reserve
                  <span class="ml-1 text-xs font-normal text-gray-400">(optional)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="capex-reserve" v-model="form.annualReserve" type="number" min="0" step="100"
                    placeholder="Optional: annual repairs or CapEx reserve"
                    aria-label="Annual repairs or CapEx reserve"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

              <!-- Regulation Risk -->
              <div>
                <label for="reg-risk" class="block text-xs font-semibold text-gray-700 mb-1">
                  Local STR Regulation Risk
                  <span class="ml-1 text-xs font-normal text-gray-400">(optional)</span>
                </label>
                <select id="reg-risk" v-model="form.regulationRisk"
                  aria-label="STR regulation risk level"
                  class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition bg-white">
                  <option value="unknown">Unknown</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <p class="text-xs text-gray-400 mt-1">Verify local STR laws, permits, HOA rules, and rental restrictions before relying on projections.</p>
              </div>
            </div>
          </div>

          <!-- ── FINANCING SECTION ── -->
          <button @click="financeOpen = !financeOpen"
            class="w-full flex items-center justify-between px-5 py-3 text-sm transition border-b border-gray-100"
            :class="financeOpen
              ? 'bg-amber-50 text-amber-800 font-semibold'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800 font-medium'">
            <div class="flex items-center gap-2">
              <span>Financing — Add Debt Service</span>
              <span v-if="financeOpen" class="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">ON</span>
            </div>
            <svg class="w-4 h-4 transition-transform flex-shrink-0" :class="financeOpen ? 'rotate-180' : ''"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <div v-if="financeOpen" class="border-b border-gray-100">
            <div class="calc-section-header">
              <div>
                <h2 class="calc-section-title">Financing & Cash Invested</h2>
                <p class="text-xs text-amber-700 mt-0.5 ml-3">See levered returns — Cash Flow, CoC, DSCR</p>
              </div>
            </div>
            <div class="px-4 py-3 space-y-2.5">

              <!-- Down Payment -->
              <div>
                <label for="down-payment" class="block text-xs font-semibold text-gray-700 mb-1">Down Payment</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="down-payment" v-model="form.downPayment" type="number" min="0" step="1000"
                    placeholder="Optional: down payment amount"
                    aria-label="Down payment in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">If empty, down payment percentage is used</p>
              </div>

              <!-- Down Payment % -->
              <div>
                <label for="down-pct" class="block text-xs font-semibold text-gray-700 mb-1">Down Payment %
                  <span class="ml-1 text-xs font-normal text-gray-400">(default 25%)</span>
                </label>
                <div class="relative">
                  <input id="down-pct" v-model="form.downPaymentPct" type="number" min="0" max="100" step="1"
                    placeholder="Optional: down payment percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                </div>
              </div>

              <!-- Interest Rate -->
              <div>
                <label for="interest-rate" class="block text-xs font-semibold text-gray-700 mb-1">Interest Rate</label>
                <div class="relative">
                  <input id="interest-rate" v-model="form.interestRate" type="number" min="0" max="30" step="0.125"
                    placeholder="Optional: annual interest rate"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                </div>
              </div>

              <!-- Loan Term -->
              <div>
                <label for="loan-term" class="block text-xs font-semibold text-gray-700 mb-1">Loan Term</label>
                <select id="loan-term" v-model="form.loanTermYears"
                  class="w-full px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition bg-white">
                  <option :value="15">15 years</option>
                  <option :value="20">20 years</option>
                  <option :value="25">25 years</option>
                  <option :value="30">30 years</option>
                </select>
              </div>

              <div class="pt-2 border-t border-gray-100 space-y-3">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Additional Cash Invested</p>

                <!-- Closing Costs -->
                <div>
                  <label for="closing-costs" class="block text-xs font-semibold text-gray-600 mb-1">Closing Costs</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input id="closing-costs" v-model="form.closingCosts" type="number" min="0" step="500"
                      placeholder="Optional: closing costs"
                      class="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition" />
                  </div>
                </div>

                <!-- Furnishing / Setup -->
                <div>
                  <label for="furnishing" class="block text-xs font-semibold text-gray-600 mb-1">Furnishing / Setup Cost</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input id="furnishing" v-model="form.furnishingCost" type="number" min="0" step="1000"
                      placeholder="Optional: furnishing or setup cost"
                      class="w-full pl-7 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition" />
                  </div>
                </div>
              </div>

              <!-- Summary -->
              <div v-if="hasResult && loanAmount > 0" class="p-2.5 rounded-xl text-xs font-medium text-blue-800 bg-blue-50 border border-blue-100">
                Down: <span class="font-bold">{{ formatCurrency(downPaymentUsed) }}</span>
                · Loan: <span class="font-bold">{{ formatCurrency(loanAmount) }}</span>
                <span v-if="monthlyDebtService > 0"> · Payment: <span class="font-bold">{{ formatCurrency(monthlyDebtService) }}/mo</span></span>
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

          <!-- Main Result Card -->
          <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">

            <!-- Primary Result: Monthly Cash Flow -->
            <div class="px-5 py-5 border-b border-gray-100 bg-white">
              <p class="text-xs font-semibold uppercase tracking-wide mb-2 text-gray-400">
                Monthly Cash Flow
                <span v-if="hasResult && !hasDebtService" class="ml-1 font-normal normal-case">(before debt service)</span>
              </p>
              <div class="font-extrabold leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full transition-all mb-3"
                :class="[hasResult ? 'text-5xl' : 'text-6xl text-gray-200']"
                :style="hasResult ? `color: ${tierColor}` : ''">
                {{ hasResult ? formatCurrency(monthlyCashFlow) : '—' }}
              </div>
              <div v-if="hasResult"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-xs text-white"
                :style="`background: ${tierColor}`">
                <span class="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                {{ tier }}
              </div>
              <div v-else class="text-sm text-gray-300">Enter values to see result</div>
            </div>

            <!-- Warning States / Risk Flags -->
            <div v-if="riskFlags.length > 0" class="px-5 pt-4 pb-1 space-y-2" role="region" aria-label="Risk flags">
              <div v-for="(w, i) in riskFlags" :key="i"
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

            <!-- Breakdown -->
            <div v-if="hasResult" class="p-6 space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Revenue Breakdown</h3>

              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Occupied Nights</span>
                <span class="font-semibold text-gray-900">{{ occupiedNights.toFixed(1) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Estimated Bookings</span>
                <span class="font-semibold text-gray-900">{{ estimatedBookings.toFixed(1) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Nightly Revenue</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(nightlyRevenue) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Cleaning Fee Revenue</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(cleaningFeeRevenue) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm font-bold text-gray-700">Gross Booking Revenue</span>
                <span class="font-bold text-gray-900">{{ formatCurrency(grossBookingRevenue) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Platform Fees ({{ platformFeePctVal }}%)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(platformFees) }}</span>
              </div>
              <div v-if="lodgingTax > 0" class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Lodging Tax ({{ lodgingTaxPctVal }}%)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(lodgingTax) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm font-bold text-gray-700">Net Booking Revenue</span>
                <span class="font-bold text-gray-900">{{ formatCurrency(netBookingRevenue) }}</span>
              </div>

              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3 mt-4">Expense Breakdown</h3>

              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Cleaning Cost</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(cleaningCost) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Annual Operating Expenses</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(annualOpex) }}</span>
              </div>
              <div v-if="strManagementFee > 0" class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">STR Management Fee</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(strManagementFee) }}</span>
              </div>

              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-sm font-bold text-gray-700">Net Operating Income (NOI)</span>
                <span class="font-bold" :class="noiValue >= 0 ? 'text-green-600' : 'text-red-600'">{{ formatCurrency(noiValue) }}</span>
              </div>

              <!-- Financing section if applicable -->
              <template v-if="hasDebtService">
                <div class="flex justify-between items-center py-2 border-b border-gray-50">
                  <span class="text-sm text-gray-500">Annual Debt Service</span>
                  <span class="font-semibold text-red-500">-{{ formatCurrency(annualDebtService) }}</span>
                </div>
              </template>

              <div class="flex justify-between items-center py-2">
                <span class="text-sm font-extrabold text-gray-800">Annual Cash Flow</span>
                <span class="font-extrabold text-base" :class="annualCashFlow >= 0 ? 'text-green-600' : 'text-red-600'">
                  {{ annualCashFlow >= 0 ? '' : '-' }}{{ formatCurrency(Math.abs(annualCashFlow)) }}
                </span>
              </div>
              <div class="flex justify-between items-center text-sm text-gray-400">
                <span>≈ per month</span>
                <span :class="monthlyCashFlow >= 0 ? 'text-green-500' : 'text-red-500'" class="font-medium">
                  {{ monthlyCashFlow >= 0 ? '' : '-' }}{{ formatCurrency(Math.abs(monthlyCashFlow)) }}/mo
                </span>
              </div>

              <!-- Note: if no interest rate -->
              <div v-if="!hasDebtService" class="p-2.5 rounded-xl text-xs font-medium text-blue-800 bg-blue-50 border border-blue-100">
                If no interest rate is entered, cash flow is shown before debt service.
              </div>

              <!-- Formula -->
              <div class="mt-4 p-3 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden">
                <p class="text-xs text-center text-gray-400 font-medium">
                  NOI = Net Booking Revenue − Cleaning Cost − Operating Expenses − Management Fee
                </p>
                <p class="text-xs text-center text-gray-400 mt-1 italic">STR revenue depends on ADR, occupancy, seasonality, reviews, local competition, and platform visibility.</p>
              </div>

              <!-- Key Metrics Grid -->
              <div v-if="hasResult" class="mt-4 grid grid-cols-3 gap-2">
                <!-- Cap Rate -->
                <div class="rounded-xl p-3 text-center border"
                  :class="capRateValue >= 7 ? 'bg-green-50 border-green-200' : capRateValue >= 4 ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="capRateValue >= 7 ? 'text-green-500' : capRateValue >= 4 ? 'text-amber-600' : 'text-red-500'">
                    Cap Rate
                  </p>
                  <p class="text-base font-extrabold"
                    :class="capRateValue >= 7 ? 'text-green-700' : capRateValue >= 4 ? 'text-amber-700' : 'text-red-700'">
                    {{ capRateValue.toFixed(2) }}%
                  </p>
                </div>
                <!-- RevPAN -->
                <div class="rounded-xl p-3 text-center border bg-blue-50 border-blue-200">
                  <p class="text-xs font-semibold mb-0.5 text-blue-500">RevPAN</p>
                  <p class="text-base font-extrabold text-blue-700">${{ revPAN.toFixed(2) }}</p>
                  <p class="text-xs text-gray-400 mt-0.5">/night</p>
                </div>
                <!-- Expense Ratio -->
                <div v-if="expenseRatioValue !== null" class="rounded-xl p-3 text-center border"
                  :class="expenseRatioValue > 55 ? 'bg-red-50 border-red-200' : expenseRatioValue > 40 ? 'bg-amber-50 border-amber-200' : 'bg-green-50 border-green-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="expenseRatioValue > 55 ? 'text-red-500' : expenseRatioValue > 40 ? 'text-amber-600' : 'text-green-600'">
                    Exp. Ratio
                  </p>
                  <p class="text-base font-extrabold"
                    :class="expenseRatioValue > 55 ? 'text-red-700' : expenseRatioValue > 40 ? 'text-amber-700' : 'text-green-700'">
                    {{ expenseRatioValue.toFixed(0) }}%
                  </p>
                </div>
              </div>

              <!-- Break-Even Occupancy -->
              <div v-if="hasResult" class="mt-4 pt-3 border-t border-gray-100">
                <div class="flex justify-between items-center text-sm mb-1">
                  <div>
                    <span class="font-bold text-gray-700">Break-Even Occupancy</span>
                    <p class="text-xs text-gray-400">Occupancy needed to cover fixed costs{{ hasDebtService ? ' + debt' : '' }}</p>
                  </div>
                  <div class="text-right">
                    <span v-if="breakEvenOccupancy !== null" class="font-extrabold text-lg"
                      :class="breakEvenOccupancy > 75 ? 'text-red-600' : breakEvenOccupancy > 65 ? 'text-amber-600' : breakEvenOccupancy > 50 ? 'text-blue-700' : 'text-green-600'">
                      {{ breakEvenOccupancy > 100 ? '>100' : breakEvenOccupancy.toFixed(1) }}%
                    </span>
                    <span v-else class="font-bold text-sm text-gray-400">N/A</span>
                  </div>
                </div>
                <div v-if="breakEvenOccupancy !== null && breakEvenOccupancy > 100" class="p-2.5 rounded-xl text-xs font-medium text-red-800 bg-red-50 border border-red-200">
                  Break-even occupancy exceeds 100%. The STR may not cover costs under current assumptions.
                </div>
                <div v-if="breakEvenMarginNegative" class="p-2.5 rounded-xl text-xs font-medium text-red-800 bg-red-50 border border-red-200">
                  Net margin per occupied night is zero or negative. Break-even occupancy unavailable.
                </div>
              </div>

              <!-- Investor metrics if financing -->
              <template v-if="hasDebtService">
                <div class="mt-4 pt-3 border-t border-gray-100">
                  <h4 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Financing</h4>
                  <div class="space-y-1.5">
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-500">Loan Amount</span>
                      <span class="font-semibold text-gray-900">{{ formatCurrency(loanAmount) }}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-500">Monthly Payment</span>
                      <span class="font-semibold text-gray-900">{{ formatCurrency(monthlyDebtService) }}/mo</span>
                    </div>
                    <div class="flex justify-between text-sm">
                      <span class="text-gray-500">Cash Invested</span>
                      <span class="font-semibold text-gray-900">{{ formatCurrency(cashInvested) }}</span>
                    </div>
                  </div>
                </div>

                <div v-if="dscrValue !== null" class="mt-3 flex justify-between items-center py-2 border-t border-gray-50">
                  <div>
                    <span class="text-sm font-bold text-gray-700">DSCR</span>
                    <p class="text-xs text-gray-400">NOI ÷ Debt Service</p>
                  </div>
                  <div class="text-right">
                    <span class="font-extrabold text-lg" :class="dscrValue >= 1.25 ? 'text-green-600' : dscrValue >= 1.0 ? 'text-amber-600' : 'text-red-600'">
                      {{ dscrValue.toFixed(2) }}x
                    </span>
                    <p class="text-xs mt-0.5 font-semibold" :class="dscrValue >= 1.25 ? 'text-green-500' : dscrValue >= 1.0 ? 'text-amber-500' : 'text-red-500'">
                      {{ dscrValue >= 1.25 ? 'Lender-approved range' : dscrValue >= 1.0 ? 'Barely covers debt' : 'Below 1.0 — cash drain' }}
                    </p>
                  </div>
                </div>

                <div v-if="cocReturn !== null" class="flex justify-between items-center py-2 border-t border-gray-50">
                  <div>
                    <span class="text-sm font-bold text-gray-700">Cash-on-Cash Return</span>
                    <p class="text-xs text-gray-400">Cash Flow ÷ Cash Invested</p>
                  </div>
                  <div class="text-right">
                    <span class="font-extrabold text-lg" :class="cocReturn >= 8 ? 'text-green-600' : cocReturn >= 4 ? 'text-amber-600' : 'text-red-600'">
                      {{ cocReturn.toFixed(2) }}%
                    </span>
                  </div>
                </div>
              </template>

              <!-- Reserve-Adjusted Cash Flow -->
              <div v-if="reserveAdjustedCashFlow !== null" class="mt-3 pt-3 border-t border-gray-100">
                <div class="flex justify-between items-center text-sm">
                  <span class="text-gray-500">Reserve-Adjusted Cash Flow</span>
                  <span class="font-bold" :class="reserveAdjustedCashFlow >= 0 ? 'text-green-600' : 'text-red-600'">
                    {{ formatCurrency(reserveAdjustedCashFlow) }}/yr
                  </span>
                </div>
                <p class="text-xs text-gray-400 mt-1 italic">Repairs / CapEx reserve is shown separately and is not included in NOI by default unless entered as operating expense.</p>
              </div>
            </div>

            <!-- Deal Context Panel -->
            <div v-if="hasResult"
              class="px-5 py-4 border-t border-gray-100 rounded-b-xl"
              :style="`background: ${tierColor}12;`">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-bold px-2.5 py-0.5 rounded-full text-white"
                  :style="`background: ${tierColor}`">
                  {{ tier }}
                </span>
                <span class="text-xs font-semibold text-gray-400 uppercase tracking-wide">Deal context</span>
              </div>
              <p class="text-sm leading-relaxed font-medium text-gray-700">{{ insightText }}</p>
            </div>

            <!-- Sensitivity: NOI at different occupancy rates -->
            <div v-if="hasResult && sensitivityRows" class="border-t border-gray-100">
              <div class="px-4 pt-3 pb-1">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                    Cash Flow at Different Occupancy
                  </span>
                </div>
                <!-- First 3 rows — always visible -->
                <div class="space-y-0.5 mb-1">
                  <div v-for="row in sensitivityRows.slice(0, 3)" :key="row.label"
                    class="flex justify-between items-center text-xs px-2 py-1.5 rounded-lg"
                    :class="row.isCurrent ? 'font-bold' : 'text-gray-600'"
                    :style="row.isCurrent ? 'background: rgba(245,158,11,0.07);' : ''">
                    <span :style="row.isCurrent ? 'color: #92400e;' : ''">{{ row.label }}</span>
                    <span>{{ formatCurrency(row.noi) }} NOI</span>
                    <span :class="row.cashFlow >= 0 ? 'text-emerald-600' : 'text-red-600'" class="font-semibold">
                      {{ formatCurrency(row.cashFlow) }}
                    </span>
                  </div>
                </div>
                <button v-if="!showSensitivity" @click="showSensitivity = true"
                  class="text-xs text-gray-400 hover:text-gray-600 transition px-2 py-1">
                  Show all ranges ↓
                </button>
              </div>

              <div v-if="showSensitivity">
                <div class="px-4 pb-2 pt-0">
                  <div class="space-y-0.5">
                    <div v-for="row in sensitivityRows.slice(3)" :key="row.label"
                      class="flex justify-between items-center text-xs px-2 py-1.5 rounded-lg"
                      :class="row.isCurrent ? 'font-bold' : 'text-gray-600'"
                      :style="row.isCurrent ? 'background: rgba(245,158,11,0.07);' : ''">
                      <span :style="row.isCurrent ? 'color: #92400e;' : ''">{{ row.label }}</span>
                      <span>{{ formatCurrency(row.noi) }} NOI</span>
                      <span :class="row.cashFlow >= 0 ? 'text-emerald-600' : 'text-red-600'" class="font-semibold">
                        {{ formatCurrency(row.cashFlow) }}
                      </span>
                    </div>
                  </div>
                  <p class="text-xs text-gray-400 mt-2 italic">Occupancy sensitivity — ADR and expenses held constant.</p>
                </div>
              </div>
            </div>

            <!-- Share + PDF Export + Save Scenario -->
            <div v-if="hasResult" class="p-4 border-t border-gray-100 space-y-2">
              <!-- 1. PRIMARY: Save -->
              <button @click="openSaveScenario"
                class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
                style="background: #f59e0b; color: #1e3a5f;">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>
                Save Scenario
              </button>
              <!-- 2. SECONDARY: Share + PDF -->
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
              <!-- 3. TERTIARY: Email -->
              <button @click="showEmailModal = true"
                class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs text-gray-500 hover:text-gray-700 border border-dashed border-gray-200 hover:border-gray-300 transition">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      </div><!-- /bg-white inner -->
      </div><!-- /gradient wrapper -->

      <!-- ═══════════════════════════════════════════════
           SCENARIO PANEL
      ═══════════════════════════════════════════════ -->
      <div class="max-w-6xl mx-auto px-4 pb-6 mt-4">
        <ScenarioPanel
          calculator="airbnb-str"
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
            That Airbnb deal looks profitable… until reality hits. Lower occupancy, platform fees, cleaning costs, and management can turn a "great deal" into negative cash flow. See the real numbers before you buy.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            A small mistake in occupancy or expenses can wipe out your profit. If your break-even occupancy is too high, the deal depends on perfect execution. Check your numbers before you commit.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            Most investors look at ADR × nights — but real income depends on occupancy, cleaning costs, platform fees, management fees, and operating expenses. A $220/night property at 65% occupancy can generate ~$52,000 nightly revenue but only ~$25,000 NOI — and negative cash flow after debt. The gap is where deals fail.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            This free Airbnb / STR calculator covers everything a short-term rental investor needs: gross and net booking revenue, cleaning economics, platform fees, lodging tax, management costs, NOI, cash flow, DSCR, cash-on-cash return, break-even occupancy, and regulation risk — all in real time, no signup required.
          </p>
        </div>
      </div>

      <!-- ═══ OVERVIEW ═══ -->
      <div id="overview" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">Overview</h2>
        <p class="text-gray-600 leading-relaxed mb-3">
          The <strong>Airbnb / STR Calculator</strong> is designed for US real estate investors evaluating short-term rental properties. Unlike traditional rental calculators, this tool models occupancy-driven revenue, cleaning economics, platform fees, lodging taxes, and STR management costs — the variables that actually determine whether an Airbnb makes money.
        </p>
        <p class="text-gray-600 leading-relaxed mb-3">
          STR income is fundamentally different from long-term rental income. It depends on four fragile assumptions: average daily rate (ADR), occupancy, fees and taxes, and operating/management costs. This calculator makes all four visible so you can stress-test your assumptions before buying.
        </p>
        <p class="text-gray-600 leading-relaxed">
          This is a planning and screening tool, not a guarantee of booking performance. It does not predict exact Airbnb revenue, replace market data tools, or substitute for local STR regulation review. Use it to screen deals, compare STR vs long-term rental, and identify risk before you commit capital.
        </p>
      </div>

      <!-- ═══ HOW TO USE ═══ -->
      <div id="how-to-use" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-1" style="color: #1e3a5f;">How to Use This Airbnb / STR Calculator</h2>
        <p class="text-gray-500 text-sm mb-6">Follow these steps to analyze any short-term rental in under 3 minutes</p>
        <div class="grid md:grid-cols-2 gap-10">
            <ol class="space-y-5">
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">1</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Enter property and revenue basics</p>
                  <p class="text-gray-500 text-sm mt-1">Purchase price, average nightly rate (ADR), expected occupancy rate, and nights available. Use <strong>actual market comps</strong> from AirDNA, Mashvisor, or local data — not listing-page claims.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">2</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Set cleaning fees and platform costs</p>
                  <p class="text-gray-500 text-sm mt-1">Enter the cleaning fee you charge guests and your actual cleaning cost per turnover. Add platform fee percentage (Airbnb host fee is typically 3%) and any lodging/occupancy tax that affects your bottom line.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">3</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Add operating expenses and management</p>
                  <p class="text-gray-500 text-sm mt-1">Enter monthly operating expenses (utilities, internet, supplies, insurance, maintenance). If using a property manager, enter the STR management fee percentage and select whether it applies to gross or net booking revenue.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">4</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Add financing (optional)</p>
                  <p class="text-gray-500 text-sm mt-1">Open the financing section to add down payment, interest rate, loan term, closing costs, and furnishing costs. This enables DSCR and cash-on-cash calculations.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">5</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Read your results and check risk flags</p>
                  <p class="text-gray-500 text-sm mt-1">Review cash flow, NOI, break-even occupancy, and all risk flags. Pay special attention to break-even occupancy — if it's above 70%, the deal is fragile.</p>
                </div>
              </li>
            </ol>
            <div class="space-y-5">
              <div class="p-5 rounded-xl border border-amber-200" style="background: #fffbeb;">
                <h3 class="font-bold text-sm mb-3" style="color: #92400e;">Pro Tips for Accurate STR Results</h3>
                <ul class="space-y-2 text-sm text-amber-800">
                  <li class="flex gap-2"><span class="font-bold flex-shrink-0">→</span> Use conservative occupancy (55–65%) unless you have strong market evidence for higher.</li>
                  <li class="flex gap-2"><span class="font-bold flex-shrink-0">→</span> Always separate cleaning fee revenue from cleaning cost — the net difference matters.</li>
                  <li class="flex gap-2"><span class="font-bold flex-shrink-0">→</span> STR management fees (15–30%) are much higher than long-term rental management (8–10%).</li>
                  <li class="flex gap-2"><span class="font-bold flex-shrink-0">→</span> Check local regulation risk before committing — STR bans can invalidate the entire model.</li>
                </ul>
              </div>
              <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
                <h3 class="font-bold text-sm text-gray-800 mb-3">Understanding Your Result</h3>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li><span class="font-semibold text-gray-800">Break-even &lt; 50%</span> — Strong. The deal survives low occupancy and seasonal dips.</li>
                  <li><span class="font-semibold text-gray-800">Break-even 50–65%</span> — Workable. Moderate risk, verify assumptions carefully.</li>
                  <li><span class="font-semibold text-gray-800">Break-even 65–75%</span> — Risky. Depends on consistently strong bookings.</li>
                  <li><span class="font-semibold text-gray-800">Break-even &gt; 75%</span> — Fragile. Small dips in occupancy or ADR cause losses.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      <!-- ═══ INPUTS & OUTPUTS ═══ -->
      <div id="inputs-outputs" class="border-b border-gray-100">
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
                <td class="px-6 py-3 font-semibold text-gray-800">Average Daily Rate</td>
                <td class="px-4 py-3 text-gray-600">Average nightly rent before platform fees. Use actual market comps, not listing aspirations.</td>
                <td class="px-4 py-3 text-gray-500">AirDNA, Mashvisor, PriceLabs, comparable listings</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-6 py-3 font-semibold text-gray-800">Occupancy Rate</td>
                <td class="px-4 py-3 text-gray-600">% of available nights that are booked. Typical STR: 50–70% annualized.</td>
                <td class="px-4 py-3 text-gray-500">AirDNA market data, local STR reports, host communities</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-gray-800">Platform Fee</td>
                <td class="px-4 py-3 text-gray-600">Host-side fee charged by Airbnb, VRBO, etc. Typically 3% for Airbnb host-only fee model.</td>
                <td class="px-4 py-3 text-gray-500">Platform dashboard, fee structure page</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-6 py-3 font-semibold text-gray-800">Cleaning Cost</td>
                <td class="px-4 py-3 text-gray-600">Your actual cost to clean per turnover. <strong>Not</strong> the fee charged to guests.</td>
                <td class="px-4 py-3 text-gray-500">Cleaning service quotes, local market rates</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-gray-800">NOI (output)</td>
                <td class="px-4 py-3 text-gray-600">Net Operating Income. Net booking revenue minus cleaning cost, operating expenses, and management fee. Excludes debt service.</td>
                <td class="px-4 py-3 text-gray-500 italic">Calculated automatically</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-6 py-3 font-semibold text-gray-800">Break-Even Occ.</td>
                <td class="px-4 py-3 text-gray-600">Minimum occupancy needed for NOI to cover fixed costs and debt service.</td>
                <td class="px-4 py-3 text-gray-500 italic">Calculated automatically</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ═══ FORMULA ═══ -->
      <div id="formula" class="border-b border-gray-100">
        <div class="px-8 py-6 border-b border-gray-100">
          <h2 class="text-xl font-extrabold" style="color: #1e3a5f;">STR Revenue & NOI Formula</h2>
          <p class="text-gray-500 text-sm mt-1">The exact math this calculator uses — plus a real example</p>
        </div>
        <div class="px-8 py-8">
          <div class="grid md:grid-cols-2 gap-10">
            <div>
              <h3 class="font-bold text-gray-800 mb-4">Step-by-step calculation</h3>
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">1</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Calculate Occupied Nights</p>
                    <p class="text-xs text-gray-500 mt-0.5">Nights Available × Occupancy Rate</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">365 × 65% = 237.25 nights</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">2</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Gross Booking Revenue</p>
                    <p class="text-xs text-gray-500 mt-0.5">(Occupied Nights × ADR) + (Bookings × Cleaning Fee)</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">$52,195 + $9,490 = $61,685</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">3</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Net Booking Revenue</p>
                    <p class="text-xs text-gray-500 mt-0.5">Gross − Platform Fees − Lodging Tax</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">$61,685 − $1,851 = $59,834</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-amber-200 bg-amber-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md flex-shrink-0 mt-0.5" style="background:#f59e0b;color:#1e3a5f;">4</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">NOI</p>
                    <p class="text-xs text-gray-500 mt-0.5">Net Booking Revenue − Cleaning Cost − Opex − Management</p>
                    <code class="text-xs font-bold" style="color:#1e3a5f;">$59,834 − $7,908 − $14,400 − $11,967 = <strong>$25,559 NOI</strong></code>
                  </div>
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="p-5 rounded-xl text-center border border-gray-200 bg-gray-50">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">The Formula</p>
                <div class="font-mono font-bold text-lg mb-2" style="color:#1e3a5f;">NOI = Net Revenue − Costs</div>
                <div class="font-mono text-xs text-gray-500 mb-1">Net Revenue = Gross − Fees − Tax</div>
                <div class="font-mono text-xs text-gray-500">Gross = Nightly Rev + Cleaning Rev</div>
                <div class="mt-4 p-3 rounded-lg border border-gray-200 text-left font-mono text-xs bg-white" style="color: #374151; line-height: 1.7;">
                  <div>Occupied Nights × ADR</div>
                  <div>+ Cleaning Fee Revenue</div>
                  <div class="border-t border-gray-300 pt-1">= Gross Booking Revenue</div>
                  <div>− Platform Fees</div>
                  <div>− Lodging Tax</div>
                  <div class="border-t border-gray-300 pt-1">= Net Booking Revenue</div>
                  <div>− Cleaning Cost</div>
                  <div>− Operating Expenses</div>
                  <div>− Management Fee</div>
                  <div class="border-t border-gray-300 pt-1 font-extrabold" style="color:#1e3a5f;">= NOI</div>
                </div>
              </div>
              <div class="p-4 rounded-xl border border-amber-100 bg-amber-50">
                <p class="text-xs font-bold text-amber-800 mb-1">NOI excludes debt service</p>
                <p class="text-xs text-amber-700 leading-relaxed">Cash flow subtracts debt service from NOI. If no financing is entered, cash flow equals NOI.</p>
              </div>
            </div>
          </div>

          <!-- Real-world example -->
          <div class="mt-8 p-6 rounded-2xl border-2 border-amber-200" style="background: #fffbeb;">
            <h3 class="font-bold text-gray-900 mb-1">Real-World Example: $500K STR with 65% Occupancy</h3>
            <p class="text-xs text-amber-700 mb-4">Based on RIS test case — $220/night ADR, 3-night avg stay, 20% management on net revenue</p>
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Revenue &amp; Expenses</p>
                <div class="space-y-1.5 text-sm">
                  <div class="flex justify-between"><span class="text-gray-600">Occupied Nights</span><span class="font-semibold">237.25</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Nightly Revenue</span><span class="font-semibold">$52,195</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Cleaning Fee Revenue</span><span class="font-semibold">$9,490</span></div>
                  <div class="flex justify-between font-semibold border-t border-amber-200 pt-1.5 mt-1"><span>Gross Booking Revenue</span><span>$61,685</span></div>
                  <div class="flex justify-between text-red-600"><span>Platform Fees (3%)</span><span>−$1,851</span></div>
                  <div class="flex justify-between font-semibold border-t border-amber-200 pt-1.5 mt-1"><span>Net Booking Revenue</span><span>$59,834</span></div>
                  <div class="flex justify-between text-red-600"><span>Cleaning Cost</span><span>−$7,908</span></div>
                  <div class="flex justify-between text-red-600"><span>Operating Expenses</span><span>−$14,400</span></div>
                  <div class="flex justify-between text-red-600"><span>Management Fee (20%)</span><span>−$11,967</span></div>
                  <div class="flex justify-between font-extrabold text-green-700 border-t border-amber-200 pt-1.5 mt-1"><span>NOI</span><span>$25,559</span></div>
                </div>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Result</p>
                <div class="p-4 rounded-xl text-center mb-3" style="background: #1e3a5f;">
                  <p class="text-xs text-blue-300 mb-1">After $28,440 annual debt service</p>
                  <p class="text-3xl font-extrabold text-red-400">-$2,881/yr</p>
                  <p class="text-xs text-blue-200 mt-1">Cash Flow · DSCR ≈ 0.90</p>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed">This deal is <strong>negative cash flow</strong> with 25% down at 6.5%. The $25,559 NOI cannot cover $28,440 in debt service. Either reduce leverage, negotiate a lower purchase price, or confirm you can achieve higher occupancy with market data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══ WHAT IS STR REVENUE ═══ -->
      <div id="what-is-str-revenue" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What Is STR Revenue (and Why ADR Is Not Profit)?</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          <strong>Short-term rental revenue</strong> is the total income generated from nightly bookings and associated fees on platforms like Airbnb and VRBO. But revenue is not profit. Between gross booking revenue and your actual income sit multiple layers of deductions: platform fees (3–15%), cleaning costs, lodging taxes, operating expenses, and management fees (15–30%).
        </p>
        <div class="p-4 rounded-xl text-center font-bold text-lg mb-4" style="background: #f0f4f8; color: #1e3a5f;">
          Real Profit = Gross Revenue − Fees − Taxes − Cleaning − Expenses − Management − Debt
        </div>
        <p class="text-gray-600 leading-relaxed">
          Occupancy drives everything. A $300/night ADR means nothing at 30% occupancy. Cleaning costs scale with turnover — shorter stays mean more cleanings per month. Platform fees reduce every dollar of revenue. And STR management (15–30%) is far more expensive than traditional property management (8–10%). The best STR investors model all of these variables before they buy, not after.
        </p>
      </div>

      <!-- ═══ WHAT YOUR RESULT MEANS ═══ -->
      <div id="result-meaning" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">What Your STR Result Means</h2>
        <p class="text-gray-600 leading-relaxed mb-5">
          Your result shows projected cash flow and profitability under the assumptions you entered. Here's how to interpret the verdict tiers:
        </p>
        <div class="space-y-3 mb-5">
          <div class="flex gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
            <div class="flex-shrink-0 mt-0.5">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500 text-white">EXCELLENT</span>
            </div>
            <div>
              <p class="font-bold text-sm text-green-800">Strong STR Income Profile</p>
              <p class="text-sm text-green-700 mt-1 leading-relaxed">The STR shows strong projected income support under current assumptions. Verify ADR, occupancy, local rules, seasonality, and expense data before proceeding.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200">
            <div class="flex-shrink-0 mt-0.5">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500 text-white">GOOD</span>
            </div>
            <div>
              <p class="font-bold text-sm text-blue-800">Solid STR Screen</p>
              <p class="text-sm text-blue-700 mt-1 leading-relaxed">The STR appears to meet a reasonable screening range. Stress-test occupancy, ADR, platform fees, and management costs before buying.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <div class="flex-shrink-0 mt-0.5">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-white">CONCERNING</span>
            </div>
            <div>
              <p class="font-bold text-sm text-amber-800">Fragile STR Economics</p>
              <p class="text-sm text-amber-700 mt-1 leading-relaxed">The STR may be sensitive to booking volatility, seasonality, expenses, or financing terms. Run downside scenarios before proceeding.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl bg-red-50 border border-red-200">
            <div class="flex-shrink-0 mt-0.5">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-500 text-white">CRITICAL</span>
            </div>
            <div>
              <p class="font-bold text-sm text-red-800">Weak or High-Risk STR Profile</p>
              <p class="text-sm text-red-700 mt-1 leading-relaxed">The STR may not support the purchase price, debt structure, or operating assumptions. Renegotiate price, improve revenue assumptions with evidence, reduce leverage, or reject the deal.</p>
            </div>
          </div>
        </div>
        <div class="p-4 rounded-xl border border-gray-200 bg-gray-50">
          <p class="text-sm font-semibold text-gray-800 mb-1">STR income is fragile</p>
          <p class="text-sm text-gray-600 leading-relaxed">ADR is not profit. Occupancy drives everything. Fees, cleaning, management, and taxes can destroy margin. Regulation risk can invalidate the entire model. These are screening tiers only — not investment advice.</p>
        </div>
      </div>

      <!-- ═══ BENCHMARKS ═══ -->
      <div id="benchmarks" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">STR Performance Benchmarks (2026)</h2>
        <p class="text-gray-500 text-sm mb-6">Typical ranges for US short-term rental properties. Always verify with local market data.</p>

        <h3 class="font-bold text-gray-800 mb-3">By Market Type</h3>
        <div class="overflow-x-auto mb-8 rounded-xl border border-gray-100">
          <table class="w-full text-sm">
            <thead>
              <tr style="background:#f0f4f8;">
                <th class="text-left px-5 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Market Type</th>
                <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Typical ADR</th>
                <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Typical Occupancy</th>
                <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Avg Stay</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr>
                <td class="px-5 py-3 font-semibold text-gray-800">Urban Metro</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">$150–$300</td>
                <td class="px-4 py-3 text-center text-green-600 font-semibold">60–75%</td>
                <td class="px-4 py-3 text-center text-gray-600">2–3 nights</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-5 py-3 font-semibold text-gray-800">Beach / Resort</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">$200–$500</td>
                <td class="px-4 py-3 text-center text-amber-600 font-semibold">45–65%</td>
                <td class="px-4 py-3 text-center text-gray-600">4–7 nights</td>
              </tr>
              <tr>
                <td class="px-5 py-3 font-semibold text-gray-800">Mountain / Ski</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">$250–$600</td>
                <td class="px-4 py-3 text-center text-amber-600 font-semibold">40–60%</td>
                <td class="px-4 py-3 text-center text-gray-600">3–5 nights</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-5 py-3 font-semibold text-gray-800">Suburban</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">$100–$200</td>
                <td class="px-4 py-3 text-center text-green-600 font-semibold">55–70%</td>
                <td class="px-4 py-3 text-center text-gray-600">2–4 nights</td>
              </tr>
              <tr>
                <td class="px-5 py-3 font-semibold text-gray-800">Rural / Unique</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">$80–$250</td>
                <td class="px-4 py-3 text-center text-amber-600 font-semibold">35–55%</td>
                <td class="px-4 py-3 text-center text-gray-600">3–5 nights</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="font-bold text-gray-800 mb-3">By US Region</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Florida</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">55–70%</p>
            <p class="text-xs text-gray-500">Year-round demand in Orlando, Miami, Tampa. Strong STR market with growing regulation.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Tennessee</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">50–65%</p>
            <p class="text-xs text-gray-500">Nashville and Smoky Mountains are top STR markets. Check local permit requirements.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">California</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">40–60%</p>
            <p class="text-xs text-gray-500">LA, San Diego, Palm Springs. High ADR but heavy regulation and permit requirements.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Colorado</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">40–55%</p>
            <p class="text-xs text-gray-500">Ski markets (Breckenridge, Vail) are seasonal. Denver urban STR faces regulation pressure.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Arizona</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">55–70%</p>
            <p class="text-xs text-gray-500">Scottsdale and Phoenix. Snowbird demand drives winter peaks. Landlord-friendly state.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Texas</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">50–65%</p>
            <p class="text-xs text-gray-500">Austin, San Antonio, Gulf Coast. State preemption limits local bans. Growing market.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Hawaii</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">60–75%</p>
            <p class="text-xs text-gray-500">Maui, Big Island. High ADR but strict zoning. Only permitted properties can legally operate.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">New York</p>
            <p class="text-2xl font-extrabold text-red-600 mb-1">30–50%</p>
            <p class="text-xs text-gray-500">NYC effectively banned most STRs in 2023. Upstate and Catskills remain viable markets.</p>
          </div>
        </div>
        <p class="text-xs text-gray-400 mt-3">Sources: AirDNA Market Reports 2025–2026, local host community data. Ranges are annualized averages — seasonal markets may see 90%+ in peak months and 20% in off-season.</p>
      </div>

      <!-- ═══ STRATEGY ═══ -->
      <div id="strategy" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">STR Investment Strategy</h2>
        <p class="text-gray-500 text-sm mb-6">How to use this calculator for different STR investment approaches</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#1e3a5f;">STR vs LTR</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              Compare STR projected cash flow against long-term rental returns. STR can generate 2–3× the gross revenue of LTR, but expenses are also 2–3× higher. The gap narrows quickly once you factor in cleaning, management, furnishing, and vacancy risk. Use this calculator alongside the Rental Property Calculator for a true comparison.
            </p>
          </div>
          <div class="p-5 rounded-xl border border-blue-100 bg-blue-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-blue-600">Self-Managed vs Pro</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              Run this calculator twice: once with 0% management fee (self-managed) and once with 20–25% (professional STR management). The difference shows the real cost of your time. If the deal only works self-managed, you don't have an investment — you have a job.
            </p>
          </div>
          <div class="p-5 rounded-xl border border-amber-100 bg-amber-50/60">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold" style="background:#f59e0b; color:#1e3a5f;">Seasonality Test</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              Seasonal markets (ski, beach) may show 80%+ occupancy in peak months but 20–30% off-season. Use the annualized average occupancy for this calculator. If break-even occupancy is above 50% in a seasonal market, the deal is fragile — you need strong peak months to offset dead months.
            </p>
          </div>
          <div class="p-5 rounded-xl border border-emerald-100 bg-emerald-50/60">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#059669;">Leverage Test</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              Open the financing section and test different down payments and interest rates. STR properties often need 25–30% down for DSCR loans. If DSCR is below 1.0, the property doesn't service its own debt. Many STR deals that look profitable unlevered fall apart when you add financing.
            </p>
          </div>
        </div>
      </div>

      <!-- ═══ APPLICATIONS ═══ -->
      <div id="applications" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Applications of STR Analysis</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Acquisition Screening</p>
            <p class="text-sm text-gray-600">Quickly filter STR properties that don't meet your return threshold. If break-even occupancy exceeds 70%, move on.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">STR vs LTR Comparison</p>
            <p class="text-sm text-gray-600">Compare projected STR cash flow against a traditional long-term rental on the same property. Use both calculators side by side.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Management Decision</p>
            <p class="text-sm text-gray-600">Test self-management vs professional STR management at different fee levels to understand the true cost of each approach.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Occupancy Stress Test</p>
            <p class="text-sm text-gray-600">Use the sensitivity table to see how cash flow changes at different occupancy levels. Identify the occupancy floor where the deal breaks.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Financing Viability</p>
            <p class="text-sm text-gray-600">Test DSCR and cash-on-cash return at different leverage levels. Many STR deals require higher equity to work financially.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Cleaning Economics</p>
            <p class="text-sm text-gray-600">Analyze whether your cleaning fee covers actual cleaning costs. Short stays with high turnover can turn cleaning into a net cost center.</p>
          </div>
        </div>
      </div>

      <!-- ═══ INDUSTRY STANDARDS ═══ -->
      <div id="industry-standards" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Industry Standards &amp; STR Metrics</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">R</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">RevPAN (Revenue per Available Night)</h3>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> RevPAN measures revenue efficiency across all nights — booked and unbooked.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Higher RevPAN means you're earning more per calendar night, which accounts for both ADR and occupancy.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Industry standard metric used by AirDNA and major STR analytics platforms.</li>
            </ul>
          </div>
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">B</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">Break-Even Occupancy</h3>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> The <strong>most important STR metric</strong>. Shows the minimum occupancy needed to cover all costs.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Below 50%: strong. 50–65%: workable. 65–75%: risky. Above 75%: fragile.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Accounts for variable margin per occupied night, not just a simple revenue/cost ratio.</li>
            </ul>
          </div>
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">$</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">STR Lending Standards</h3>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> <strong>DSCR ≥ 1.25x</strong> — standard minimum for most DSCR lenders accepting STR income.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Many lenders use 75% of projected STR income for qualification — not 100%.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Down payment requirements: typically 25–30% for STR-specific DSCR loans.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Some lenders require 12-month STR income history for refinance.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ═══ LIMITATIONS ═══ -->
      <div id="limitations" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Limitations of This Calculator</h2>
        <div class="grid sm:grid-cols-2 gap-5">
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Does Not Guarantee Bookings</p>
            <p class="text-sm text-gray-600">Occupancy and ADR are assumptions, not guarantees. Actual performance depends on reviews, listing quality, competition, seasonality, and platform algorithms.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">No Seasonality Modeling</p>
            <p class="text-sm text-gray-600">This v1 uses annualized averages. Seasonal markets with extreme peaks and troughs may show misleading average results. Use month-by-month analysis for seasonal properties.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">No Dynamic Pricing</p>
            <p class="text-sm text-gray-600">This calculator uses a single ADR. In practice, dynamic pricing tools (PriceLabs, Beyond Pricing) adjust rates daily based on demand. Your actual ADR may vary significantly.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Regulation Risk Not Modeled</p>
            <p class="text-sm text-gray-600">The calculator shows a regulation risk warning but doesn't adjust financials. A "High" regulation risk could mean the entire revenue model is invalid. Always verify local laws before buying.</p>
          </div>
        </div>
        <div id="when-not-to-use" class="mt-6">
          <h3 class="font-bold text-gray-800 mb-3">When Not to Use This Calculator Alone</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Seasonal-only properties:</strong> Month-by-month analysis is essential for ski lodges, beach houses, and event-driven markets.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Markets with pending regulation:</strong> If local STR laws are changing, revenue projections may be invalid within months.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Luxury or unique properties:</strong> Ultra-high ADR properties with limited comp data need custom analysis beyond standardized calculators.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Multifamily STR conversions:</strong> Converting long-term units to STR involves vacancy loss, furnishing, and operational complexity not captured here.</li>
          </ul>
        </div>
      </div>

      <!-- ═══ COMMON MISTAKES ═══ -->
      <div id="common-mistakes" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Common Mistakes in STR Analysis</h2>
        <div class="space-y-3">
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">1</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Using peak-season occupancy as an annual average</p>
              <p class="text-sm text-gray-600 mt-0.5">Many hosts see 85–95% occupancy during peak months and assume this is sustainable year-round. Use annualized averages from market data tools, not your best month.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">2</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Ignoring cleaning cost vs cleaning fee gap</p>
              <p class="text-sm text-gray-600 mt-0.5">If your cleaning costs $150 but you charge guests $100, you lose $50 per turnover. With short stays (2 nights), that's 130+ cleanings per year — a $6,500 annual loss hidden in your "revenue."</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">3</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Forgetting platform fees reduce revenue</p>
              <p class="text-sm text-gray-600 mt-0.5">3% seems small, but on $60,000 gross revenue that's $1,800 you never see. And if you're on a split-fee model (14–16% guest fee), your net per booking is even lower than advertised.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">4</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Underestimating STR management costs</p>
              <p class="text-sm text-gray-600 mt-0.5">Traditional property management is 8–10%. STR management is 15–30% — and that's <strong>before</strong> additional per-booking fees some managers charge. This single line item can eliminate all profit.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">5</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Ignoring regulation risk</p>
              <p class="text-sm text-gray-600 mt-0.5">Cities can ban or severely restrict STR with little notice. NYC, LA, and dozens of other cities have implemented strict STR ordinances. If you can't legally operate, revenue is zero — regardless of your ADR projections.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══ FAQ ═══ -->
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
        <h2 class="text-2xl font-extrabold mb-2">Compare STR to Long-Term Rental</h2>
        <p class="text-blue-200 mb-6">STR analysis is just the start. Use our full toolkit for complete deal analysis.</p>
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
      :calculator-name="'Airbnb / STR Calculator'"
      :primary-result="hasResult ? `${formatCurrency(monthlyCashFlow)}/mo Cash Flow` : undefined"
      title="Save Your STR Analysis"
      subtitle="Get market benchmarks, deal templates, and calculator updates."
      cta-label="Save & Get Free Updates"
      @close="showEmailModal = false"
      @captured="onEmailCaptured"
    />

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
</template>

<script setup>
// ─── SEO ─────────────────────────────────────────────────────────────────────
useHead({
  title: 'Airbnb Calculator — STR Profit, Cash Flow & Break-Even Occupancy (2026) | RealCalc',
  meta: [
    {
      name: 'description',
      content: 'Estimate Airbnb income, occupancy, fees, NOI, cash flow, and break-even occupancy. See if your STR actually makes money. Free calculator, no signup required.'
    },
    { property: 'og:title', content: 'Airbnb Calculator — STR Profit, Cash Flow & Break-Even Occupancy | RealCalc' },
    { property: 'og:description', content: 'Estimate Airbnb income, occupancy, fees, NOI, cash flow, and break-even occupancy. See if your STR actually makes money.' },
    { name: 'keywords', content: 'airbnb calculator, str calculator, short term rental calculator, airbnb profit calculator, airbnb cash flow, break even occupancy, str investment, vacation rental calculator' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Airbnb / STR Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description: 'Free Airbnb / short-term rental calculator for US real estate investors. Estimate revenue, NOI, cash flow, break-even occupancy, DSCR, and regulation risk.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        featureList: 'Occupancy-driven revenue, cleaning economics, platform fees, lodging tax, management fees, NOI, cash flow, DSCR, cash-on-cash, break-even occupancy, regulation risk, PDF export'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Calculator',
        name: 'Airbnb / STR Calculator',
        description: 'Calculate Airbnb / short-term rental profitability including revenue, fees, expenses, NOI, cash flow, and break-even occupancy.',
        url: 'https://arvcalc.com/airbnb-str-calculator',
        provider: { '@type': 'Organization', name: 'RealCalc', url: 'https://arvcalc.com' }
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
            name: 'How much does an Airbnb really make?',
            acceptedAnswer: { '@type': 'Answer', text: 'Most Airbnb investors overestimate income. A $220/night property at 65% occupancy generates ~$52,000 in nightly revenue, but after platform fees (3%), cleaning costs, operating expenses, and management fees (20%), NOI may only be ~$25,000. With financing, cash flow can be negative. Always calculate net income, not gross bookings.' }
          },
          {
            '@type': 'Question',
            name: 'What is a good occupancy rate for Airbnb?',
            acceptedAnswer: { '@type': 'Answer', text: 'Typical US STR occupancy ranges from 50–70% annualized. Urban markets often see 60–75%, while seasonal markets (beach, ski) may average 40–55% annually despite peak-season months above 90%. Use conservative estimates (55–65%) unless you have strong market evidence for higher.' }
          },
          {
            '@type': 'Question',
            name: 'How do Airbnb platform fees work?',
            acceptedAnswer: { '@type': 'Answer', text: 'Airbnb uses two fee models. The host-only model charges hosts 3% per booking. The split-fee model charges hosts 3% and guests 14%. Either way, platform fees reduce your actual revenue. VRBO charges hosts 3% or guests 5–15%. Always include platform fees in your profitability analysis.' }
          },
          {
            '@type': 'Question',
            name: 'What is break-even occupancy for STR?',
            acceptedAnswer: { '@type': 'Answer', text: 'Break-even occupancy is the minimum occupancy rate needed for your STR to cover all costs. It accounts for variable revenue per night, cleaning costs, fixed expenses, and debt service. Below 50% is strong; 65–75% is risky; above 75% means your deal depends on near-perfect execution.' }
          },
          {
            '@type': 'Question',
            name: 'Should I self-manage or hire an STR manager?',
            acceptedAnswer: { '@type': 'Answer', text: 'STR management fees typically run 15–30% of revenue — much higher than traditional property management (8–10%). Run your numbers both ways: if the deal only works self-managed, you have an operating business, not a passive investment. Factor in your time value and the coordination burden of guest communication, cleaning, maintenance, and restocking.' }
          },
          {
            '@type': 'Question',
            name: 'How do cleaning costs affect STR profitability?',
            acceptedAnswer: { '@type': 'Answer', text: 'Cleaning costs scale with turnover, not occupancy. Shorter average stays mean more cleanings per year. At 65% occupancy with 3-night average stays, you may have 79+ turnovers per year. If cleaning costs $100 per turn but you only charge guests $80, you lose $1,580/year on cleaning alone. Always separate cleaning fee revenue from cleaning cost.' }
          },
          {
            '@type': 'Question',
            name: 'What is STR regulation risk?',
            acceptedAnswer: { '@type': 'Answer', text: 'Many US cities regulate or ban short-term rentals. NYC effectively banned most STRs in 2023. Other cities require permits, limit nights, or restrict STR by zone. If regulation risk is high, your entire revenue model may be invalid. Always verify local STR laws, HOA rules, and permit requirements before buying.' }
          },
          {
            '@type': 'Question',
            name: 'Can I use this calculator for VRBO or other platforms?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. This calculator works for any short-term rental platform — Airbnb, VRBO, Booking.com, or direct bookings. Simply adjust the platform fee percentage to match your platform\'s host-side fee structure. The underlying economics (occupancy, cleaning, management, expenses) are the same regardless of platform.' }
          }
        ]
      })
    }
  ]
})

// ─── REACTIVE STATE ──────────────────────────────────────────────────────────
const openFaq = ref(null)
const shareSuccess = ref(false)
const isNavExpanded = ref(false)
const financeOpen = ref(false)
const showSensitivity = ref(false)

const form = reactive({
  purchasePrice: null,
  adr: null,
  occupancyRate: null,
  nightsAvailable: null,
  avgStayLength: null,
  cleaningFeeCharged: null,
  cleaningCostPerTurn: null,
  platformFeePct: null,
  lodgingTaxPct: null,
  monthlyOpex: null,
  mgmtFeePct: null,
  mgmtFeeBase: 'net',
  annualReserve: null,
  regulationRisk: 'unknown',
  scenarioName: null,
  // Financing
  downPayment: null,
  downPaymentPct: null,
  interestRate: null,
  loanTermYears: 30,
  closingCosts: null,
  furnishingCost: null,
})

// ─── COMPUTED: CORE CALCULATION ENGINE ──────────────────────────────────────

const nightsAvailableVal = computed(() => {
  const v = Number(form.nightsAvailable)
  return (v >= 1 && v <= 365) ? v : 365
})

const avgStayLengthVal = computed(() => {
  const v = Number(form.avgStayLength)
  return v > 0 ? v : 3
})

const platformFeePctVal = computed(() => {
  const v = Number(form.platformFeePct)
  return (v >= 0 && v <= 25) ? v : 3
})

const lodgingTaxPctVal = computed(() => {
  const v = Number(form.lodgingTaxPct)
  return (v >= 0 && v <= 30) ? v : 0
})

const mgmtFeePctVal = computed(() => {
  const v = Number(form.mgmtFeePct)
  return (v >= 0 && v <= 40) ? v : 0
})

// Step 2: Occupied Nights
const occupiedNights = computed(() => {
  const occ = Number(form.occupancyRate) || 0
  return nightsAvailableVal.value * (occ / 100)
})

// Step 3: Estimated Bookings
const estimatedBookings = computed(() => {
  return avgStayLengthVal.value > 0 ? occupiedNights.value / avgStayLengthVal.value : 0
})

// Step 4: Nightly Revenue
const nightlyRevenue = computed(() => {
  return occupiedNights.value * (Number(form.adr) || 0)
})

// Step 5: Cleaning Fee Revenue
const cleaningFeeRevenue = computed(() => {
  return estimatedBookings.value * (Number(form.cleaningFeeCharged) || 0)
})

// Step 6: Cleaning Cost
const cleaningCost = computed(() => {
  return estimatedBookings.value * (Number(form.cleaningCostPerTurn) || 0)
})

// Step 7: Gross Booking Revenue
const grossBookingRevenue = computed(() => {
  return nightlyRevenue.value + cleaningFeeRevenue.value
})

// Step 8: Platform Fees
const platformFees = computed(() => {
  return grossBookingRevenue.value * (platformFeePctVal.value / 100)
})

// Step 9: Lodging Tax
const lodgingTax = computed(() => {
  return grossBookingRevenue.value * (lodgingTaxPctVal.value / 100)
})

// Step 10: Net Booking Revenue
const netBookingRevenue = computed(() => {
  return grossBookingRevenue.value - platformFees.value - lodgingTax.value
})

// Step 11: Annual Operating Expenses
const annualOpex = computed(() => {
  return (Number(form.monthlyOpex) || 0) * 12
})

// Step 12: STR Management Fee
const strManagementFee = computed(() => {
  const pct = mgmtFeePctVal.value / 100
  if (form.mgmtFeeBase === 'gross') {
    return grossBookingRevenue.value * pct
  }
  return netBookingRevenue.value * pct
})

// Step 13: NOI
const noiValue = computed(() => {
  return netBookingRevenue.value - cleaningCost.value - annualOpex.value - strManagementFee.value
})

// Step 14: Cap Rate
const capRateValue = computed(() => {
  const price = Number(form.purchasePrice) || 0
  return price > 0 ? (noiValue.value / price) * 100 : 0
})

// Step 15-16: Down Payment & Loan
const downPaymentUsed = computed(() => {
  const dp = Number(form.downPayment)
  if (dp > 0) return dp
  const pct = Number(form.downPaymentPct)
  const price = Number(form.purchasePrice) || 0
  return price * ((pct >= 0 && pct < 100 ? pct : 25) / 100)
})

const loanAmount = computed(() => {
  const price = Number(form.purchasePrice) || 0
  return Math.max(0, price - downPaymentUsed.value)
})

// Step 17: Monthly Debt Service
const monthlyDebtService = computed(() => {
  const rate = Number(form.interestRate)
  if (!rate || rate <= 0) return 0
  const P = loanAmount.value
  if (P <= 0) return 0
  const monthlyRate = rate / 100 / 12
  const n = (Number(form.loanTermYears) || 30) * 12
  return P * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1)
})

// Step 18: Annual Debt Service
const annualDebtService = computed(() => monthlyDebtService.value * 12)

const hasDebtService = computed(() => monthlyDebtService.value > 0)

// Step 19: Cash Flow
const annualCashFlow = computed(() => {
  return hasDebtService.value ? noiValue.value - annualDebtService.value : noiValue.value
})

const monthlyCashFlow = computed(() => annualCashFlow.value / 12)

// Step 20: Cash Invested
const cashInvested = computed(() => {
  return downPaymentUsed.value + (Number(form.closingCosts) || 0) + (Number(form.furnishingCost) || 0)
})

// Step 21: Cash-on-Cash Return
const cocReturn = computed(() => {
  if (cashInvested.value <= 0) return null
  return (annualCashFlow.value / cashInvested.value) * 100
})

// Step 22: DSCR
const dscrValue = computed(() => {
  if (!hasDebtService.value || annualDebtService.value <= 0) return null
  return noiValue.value / annualDebtService.value
})

// Step 23: RevPAN
const revPAN = computed(() => {
  return nightsAvailableVal.value > 0 ? netBookingRevenue.value / nightsAvailableVal.value : 0
})

// Step 24: Expense Ratio
const expenseRatioValue = computed(() => {
  if (netBookingRevenue.value <= 0) return null
  return ((cleaningCost.value + annualOpex.value + strManagementFee.value) / netBookingRevenue.value) * 100
})

// Step 25: Reserve-Adjusted Cash Flow
const reserveAdjustedCashFlow = computed(() => {
  const reserve = Number(form.annualReserve) || 0
  if (reserve <= 0) return null
  return annualCashFlow.value - reserve
})

// Step 26: Break-Even Occupancy
const breakEvenMarginNegative = ref(false)

const breakEvenOccupancy = computed(() => {
  const adr = Number(form.adr) || 0
  const cleanFeeCharged = Number(form.cleaningFeeCharged) || 0
  const cleanCostPerTurn = Number(form.cleaningCostPerTurn) || 0
  const avgStay = avgStayLengthVal.value
  const platPct = platformFeePctVal.value / 100
  const taxPct = lodgingTaxPctVal.value / 100
  const mgmtPct = mgmtFeePctVal.value / 100

  // Variable revenue per occupied night
  const variableRevenuePerNight = adr + (cleanFeeCharged / avgStay)

  // Variable cleaning cost per occupied night
  const variableCleanCostPerNight = cleanCostPerTurn / avgStay

  // Net revenue per occupied night (after platform fees and tax)
  const netRevenuePerNight = variableRevenuePerNight * (1 - platPct - taxPct)

  // Net margin per occupied night
  let netMarginPerNight = netRevenuePerNight - variableCleanCostPerNight

  // Management fee effect
  if (form.mgmtFeeBase === 'gross') {
    netMarginPerNight -= variableRevenuePerNight * mgmtPct
  } else {
    netMarginPerNight -= netRevenuePerNight * mgmtPct
  }

  if (netMarginPerNight <= 0) {
    breakEvenMarginNegative.value = true
    return null
  }
  breakEvenMarginNegative.value = false

  // Fixed annual burden
  const fixedBurden = annualOpex.value + (hasDebtService.value ? annualDebtService.value : 0)

  const breakEvenNights = fixedBurden / netMarginPerNight
  return (breakEvenNights / nightsAvailableVal.value) * 100
})

// Cleaning cost exceeds fee warning
const cleaningCostExceedsFee = computed(() => {
  const fee = Number(form.cleaningFeeCharged) || 0
  const cost = Number(form.cleaningCostPerTurn) || 0
  return cost > 0 && fee > 0 && cost > fee
})

// ─── HAS RESULT ─────────────────────────────────────────────────────────────
const hasResult = computed(() => {
  const price = Number(form.purchasePrice) || 0
  const adr = Number(form.adr)
  const occ = Number(form.occupancyRate)
  return price > 0 && adr >= 0 && adr !== null && form.adr !== null && form.adr !== '' &&
    occ >= 0 && occ <= 100 && form.occupancyRate !== null && form.occupancyRate !== ''
})

// ─── VERDICT MODEL ──────────────────────────────────────────────────────────
const tier = computed(() => {
  if (!hasResult.value) return ''
  if (dscrValue.value !== null) {
    if (dscrValue.value >= 1.35 && annualCashFlow.value > 0) return 'Strong STR income profile'
    if (dscrValue.value >= 1.20 && annualCashFlow.value > 0) return 'Solid STR screen'
    if (dscrValue.value >= 1.00 || annualCashFlow.value <= 0) return 'Fragile STR economics'
    return 'Weak or high-risk STR profile'
  }
  // No DSCR — use cap rate
  if (capRateValue.value >= 10 && noiValue.value > 0) return 'Strong STR income profile'
  if (capRateValue.value >= 7 && noiValue.value > 0) return 'Solid STR screen'
  if (capRateValue.value >= 4 || noiValue.value <= 0) return 'Fragile STR economics'
  return 'Weak or high-risk STR profile'
})

const tierColor = computed(() => {
  if (!hasResult.value) return '#9ca3af'
  const t = tier.value
  if (t === 'Strong STR income profile') return '#059669'
  if (t === 'Solid STR screen') return '#0284c7'
  if (t === 'Fragile STR economics') return '#d97706'
  return '#dc2626'
})

// ─── RISK FLAGS ─────────────────────────────────────────────────────────────
const riskFlags = computed(() => {
  if (!hasResult.value) return []
  const flags = []
  const occ = Number(form.occupancyRate) || 0

  if (occ > 80) {
    flags.push({ type: 'warn', msg: 'High occupancy assumption may be aggressive unless supported by market data.' })
  }

  if (expenseRatioValue.value !== null && expenseRatioValue.value > 55) {
    flags.push({ type: 'warn', msg: 'High expense ratio may leave limited margin for vacancy, repairs, or seasonality.' })
  }

  if (breakEvenOccupancy.value !== null && breakEvenOccupancy.value > 70) {
    flags.push({ type: 'warn', msg: 'High break-even occupancy means the STR needs strong bookings to work.' })
  }

  if (dscrValue.value !== null && dscrValue.value < 1.20) {
    flags.push({ type: 'warn', msg: 'Debt coverage may be below common comfort levels.' })
  }

  if (annualCashFlow.value < 0) {
    flags.push({ type: 'error', msg: 'Property is negative cash flow under current assumptions.' })
  }

  if (form.regulationRisk === 'high') {
    flags.push({ type: 'error', msg: 'High local STR regulation risk may affect legal operation or future revenue.' })
  }

  if (form.regulationRisk === 'unknown') {
    flags.push({ type: 'warn', msg: 'Verify local STR rules before relying on projected revenue.' })
  }

  const avgStay = avgStayLengthVal.value
  if (avgStay < 2) {
    flags.push({ type: 'warn', msg: 'Very short stays increase turnover intensity and cleaning burden.' })
  }

  return flags
})

// ─── INSIGHT TEXT ────────────────────────────────────────────────────────────
const insightText = computed(() => {
  if (!hasResult.value) return ''
  const t = tier.value
  if (t === 'Strong STR income profile') return 'The STR shows strong projected income support under current assumptions. Verify ADR, occupancy, local rules, seasonality, and expense data before proceeding.'
  if (t === 'Solid STR screen') return 'The STR appears to meet a reasonable screening range. Stress-test occupancy, ADR, platform fees, and management costs before buying.'
  if (t === 'Fragile STR economics') return 'The STR may be sensitive to booking volatility, seasonality, expenses, or financing terms. Run downside scenarios before proceeding.'
  return 'The STR may not support the purchase price, debt structure, or operating assumptions. Renegotiate price, improve revenue assumptions with evidence, reduce leverage, or reject the deal.'
})

// ─── SENSITIVITY TABLE ──────────────────────────────────────────────────────
const sensitivityRows = computed(() => {
  if (!hasResult.value) return null
  const baseOcc = Number(form.occupancyRate) || 0
  const adr = Number(form.adr) || 0
  const cleanFee = Number(form.cleaningFeeCharged) || 0
  const cleanCost = Number(form.cleaningCostPerTurn) || 0
  const nights = nightsAvailableVal.value
  const avgStay = avgStayLengthVal.value
  const platPct = platformFeePctVal.value / 100
  const taxPct = lodgingTaxPctVal.value / 100
  const mgmtPct = mgmtFeePctVal.value / 100
  const opex = annualOpex.value
  const ads = hasDebtService.value ? annualDebtService.value : 0

  return [40, 50, 55, 60, 65, 70, 80].map(occ => {
    const occNights = nights * (occ / 100)
    const bookings = avgStay > 0 ? occNights / avgStay : 0
    const nr = occNights * adr
    const cfr = bookings * cleanFee
    const gbr = nr + cfr
    const pf = gbr * platPct
    const lt = gbr * taxPct
    const nbr = gbr - pf - lt
    const cc = bookings * cleanCost
    const mgmt = form.mgmtFeeBase === 'gross' ? gbr * mgmtPct : nbr * mgmtPct
    const n = nbr - cc - opex - mgmt
    const cf = n - ads
    return {
      label: `${occ}% occupancy`,
      noi: n,
      cashFlow: cf,
      isCurrent: occ === baseOcc,
    }
  })
})

// ─── FAQS ────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How much does an Airbnb really make?',
    a: 'Most Airbnb investors overestimate income. A $220/night property at 65% occupancy generates ~$52,000 in nightly revenue, but after platform fees (3%), cleaning costs, operating expenses, and management fees (20%), NOI may only be ~$25,000. With financing, cash flow can be negative. Always calculate net income, not gross bookings.'
  },
  {
    q: 'What is a good occupancy rate for Airbnb?',
    a: 'Typical US STR occupancy ranges from 50–70% annualized. Urban markets often see 60–75%, while seasonal markets (beach, ski) may average 40–55% annually despite peak-season months above 90%. Use conservative estimates (55–65%) unless you have strong market evidence for higher.'
  },
  {
    q: 'How do Airbnb platform fees work?',
    a: 'Airbnb uses two fee models. The host-only model charges hosts 3% per booking. The split-fee model charges hosts 3% and guests 14%. Either way, platform fees reduce your actual revenue. VRBO charges hosts 3% or guests 5–15%. Always include platform fees in your profitability analysis.'
  },
  {
    q: 'What is break-even occupancy for STR?',
    a: 'Break-even occupancy is the minimum occupancy rate needed for your STR to cover all costs. It accounts for variable revenue per night, cleaning costs, fixed expenses, and debt service. Below 50% is strong; 65–75% is risky; above 75% means your deal depends on near-perfect execution.'
  },
  {
    q: 'Should I self-manage or hire an STR manager?',
    a: 'STR management fees typically run 15–30% of revenue — much higher than traditional property management (8–10%). Run your numbers both ways: if the deal only works self-managed, you have an operating business, not a passive investment. Factor in your time value and the coordination burden of guest communication, cleaning, maintenance, and restocking.'
  },
  {
    q: 'How do cleaning costs affect STR profitability?',
    a: 'Cleaning costs scale with turnover, not occupancy. Shorter average stays mean more cleanings per year. At 65% occupancy with 3-night average stays, you may have 79+ turnovers per year. If cleaning costs $100 per turn but you only charge guests $80, you lose $1,580/year on cleaning alone. Always separate cleaning fee revenue from cleaning cost.'
  },
  {
    q: 'What is STR regulation risk?',
    a: 'Many US cities regulate or ban short-term rentals. NYC effectively banned most STRs in 2023. Other cities require permits, limit nights, or restrict STR by zone. If regulation risk is high, your entire revenue model may be invalid. Always verify local STR laws, HOA rules, and permit requirements before buying.'
  },
  {
    q: 'Can I use this calculator for VRBO or other platforms?',
    a: 'Yes. This calculator works for any short-term rental platform — Airbnb, VRBO, Booking.com, or direct bookings. Simply adjust the platform fee percentage to match your platform\'s host-side fee structure. The underlying economics are the same regardless of platform.'
  },
]

// ─── RELATED CALCULATORS ─────────────────────────────────────────────────────
const relatedCalcs = [
  { label: 'Rental Property',     href: '/rental-property-calculator' },
  { label: 'NOI Calculator',      href: '/noi-calculator' },
  { label: 'Cash Flow Calculator', href: '/property-cash-flow-calculator' },
  { label: 'Cap Rate Calculator',  href: '/cap-rate-calculator' },
  { label: 'DSCR Calculator',     href: '/dscr-calculator' },
  { label: 'Cash-on-Cash Return', href: '/cash-on-cash-calculator' },
  { label: 'Real Estate ROI',     href: '/real-estate-roi-calculator' },
  { label: 'Compare Deals',       href: '/compare-real-estate-deals' },
]

// ─── URL PERSISTENCE ─────────────────────────────────────────────────────────
function buildShareParams() {
  const p = new URLSearchParams()
  if (form.purchasePrice) p.set('price', form.purchasePrice)
  if (form.adr) p.set('adr', form.adr)
  if (form.occupancyRate !== null && form.occupancyRate !== '') p.set('occ', form.occupancyRate)
  if (form.nightsAvailable) p.set('nights', form.nightsAvailable)
  if (form.avgStayLength) p.set('stay', form.avgStayLength)
  if (form.cleaningFeeCharged) p.set('cleanfee', form.cleaningFeeCharged)
  if (form.cleaningCostPerTurn) p.set('cleancost', form.cleaningCostPerTurn)
  if (form.platformFeePct !== null && form.platformFeePct !== '') p.set('platform', form.platformFeePct)
  if (form.lodgingTaxPct) p.set('tax', form.lodgingTaxPct)
  if (form.monthlyOpex) p.set('opex', form.monthlyOpex)
  if (form.mgmtFeePct) p.set('mgmtpct', form.mgmtFeePct)
  if (form.mgmtFeeBase !== 'net') p.set('mgmtbase', form.mgmtFeeBase)
  if (form.annualReserve) p.set('reserve', form.annualReserve)
  if (form.downPayment) p.set('down', form.downPayment)
  if (form.downPaymentPct !== null && form.downPaymentPct !== '') p.set('downpct', form.downPaymentPct)
  if (form.interestRate) p.set('rate', form.interestRate)
  if (form.loanTermYears !== 30) p.set('term', form.loanTermYears)
  if (form.closingCosts) p.set('closing', form.closingCosts)
  if (form.furnishingCost) p.set('setup', form.furnishingCost)
  if (form.regulationRisk !== 'unknown') p.set('reg', form.regulationRisk)
  if (form.scenarioName) p.set('name', form.scenarioName)
  return p.toString()
}

if (process.client) {
  onMounted(() => {
    const p = new URLSearchParams(window.location.search)
    if (p.has('price'))    form.purchasePrice = Number(p.get('price'))
    if (p.has('adr'))      form.adr = Number(p.get('adr'))
    if (p.has('occ'))      form.occupancyRate = Number(p.get('occ'))
    if (p.has('nights'))   form.nightsAvailable = Number(p.get('nights'))
    if (p.has('stay'))     form.avgStayLength = Number(p.get('stay'))
    if (p.has('cleanfee')) form.cleaningFeeCharged = Number(p.get('cleanfee'))
    if (p.has('cleancost')) form.cleaningCostPerTurn = Number(p.get('cleancost'))
    if (p.has('platform')) form.platformFeePct = Number(p.get('platform'))
    if (p.has('tax'))      form.lodgingTaxPct = Number(p.get('tax'))
    if (p.has('opex'))     form.monthlyOpex = Number(p.get('opex'))
    if (p.has('mgmtpct'))  form.mgmtFeePct = Number(p.get('mgmtpct'))
    if (p.has('mgmtbase')) form.mgmtFeeBase = p.get('mgmtbase')
    if (p.has('reserve'))  form.annualReserve = Number(p.get('reserve'))
    if (p.has('down'))     form.downPayment = Number(p.get('down'))
    if (p.has('downpct'))  form.downPaymentPct = Number(p.get('downpct'))
    if (p.has('rate'))     { form.interestRate = Number(p.get('rate')); financeOpen.value = true }
    if (p.has('term'))     form.loanTermYears = Number(p.get('term'))
    if (p.has('closing'))  form.closingCosts = Number(p.get('closing'))
    if (p.has('setup'))    form.furnishingCost = Number(p.get('setup'))
    if (p.has('reg'))      form.regulationRisk = p.get('reg')
    if (p.has('name'))     form.scenarioName = p.get('name')
  })
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function resetForm() {
  Object.keys(form).forEach(k => {
    if (k === 'mgmtFeeBase') form[k] = 'net'
    else if (k === 'regulationRisk') form[k] = 'unknown'
    else if (k === 'loanTermYears') form[k] = 30
    else form[k] = null
  })
  financeOpen.value = false
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
  doc.text('Airbnb / STR Analysis Report', 20, 30)
  doc.setFontSize(9)
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 130, 20)

  // Hero
  doc.setFillColor(...gold)
  doc.rect(15, 50, 180, 30, 'F')
  doc.setTextColor(30, 58, 95)
  doc.setFontSize(24)
  doc.setFont('helvetica', 'bold')
  doc.text(`${formatCurrency(monthlyCashFlow.value)}/mo`, 105, 69, { align: 'center' })
  doc.setFontSize(10)
  doc.text('MONTHLY CASH FLOW', 105, 77, { align: 'center' })

  doc.setFontSize(12)
  doc.text(`Verdict: ${tier.value}`, 105, 92, { align: 'center' })

  // Breakdown
  doc.setTextColor(...navy)
  doc.setFontSize(13)
  doc.text('Financial Breakdown', 20, 108)

  const rows = [
    ['Occupied Nights', occupiedNights.value.toFixed(1)],
    ['Nightly Revenue', formatCurrency(nightlyRevenue.value)],
    ['Cleaning Fee Revenue', formatCurrency(cleaningFeeRevenue.value)],
    ['Gross Booking Revenue', formatCurrency(grossBookingRevenue.value)],
    [`Platform Fees (${platformFeePctVal.value}%)`, `-${formatCurrency(platformFees.value)}`],
    ['Net Booking Revenue', formatCurrency(netBookingRevenue.value)],
    ['Cleaning Cost', `-${formatCurrency(cleaningCost.value)}`],
    ['Annual Operating Expenses', `-${formatCurrency(annualOpex.value)}`],
    ['STR Management Fee', `-${formatCurrency(strManagementFee.value)}`],
    ['NOI', formatCurrency(noiValue.value)],
    ['Annual Cash Flow', formatCurrency(annualCashFlow.value)],
  ]

  if (hasDebtService.value) {
    rows.splice(10, 0, ['Annual Debt Service', `-${formatCurrency(annualDebtService.value)}`])
  }

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
    doc.text(String(row[1]), 190, y, { align: 'right' })
    y += 10
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

  // Footer
  doc.setFillColor(...navy)
  doc.rect(0, 280, 210, 17, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text('arvcalc.com — For informational purposes only. Not financial advice.', 105, 290, { align: 'center' })

  doc.save(`airbnb-str-analysis-${Date.now()}.pdf`)
}

// ─── SCENARIO SAVE / EMAIL CAPTURE ───────────────────────────────────────────
const showEmailModal = ref(false)

const currentScenarioResult = computed(() => {
  if (!hasResult.value) return undefined
  return {
    primaryMetric: 'Monthly Cash Flow',
    primaryValue: formatCurrency(monthlyCashFlow.value),
    badgeLabel: tier.value,
    badgeColor: tierColor.value,
    noi: noiValue.value,
    annualCashFlow: annualCashFlow.value,
    monthlyCashFlow: monthlyCashFlow.value,
    netBookingRevenue: netBookingRevenue.value,
    grossBookingRevenue: grossBookingRevenue.value,
    capRate: capRateValue.value,
    dscr: dscrValue.value ?? undefined,
    cocReturn: cocReturn.value ?? undefined,
    breakEvenOccupancy: breakEvenOccupancy.value ?? undefined,
    purchasePrice: Number(form.purchasePrice) || undefined,
    occupancyRate: Number(form.occupancyRate) || undefined,
    adr: Number(form.adr) || undefined,
  }
})

const triggerScenarioSave = ref(false)

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

function onEmailCaptured(email) {
  showEmailModal.value = false
}
</script>
