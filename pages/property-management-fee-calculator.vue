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
            <li class="text-gray-700 font-semibold">Property Management Fee Calculator</li>
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
            Property Management Fee Calculator — Real Cost, NOI Impact &amp; Cash Flow (2026)
          </h1>
          <p class="text-gray-500 mt-2 text-base">See the full cost of property management — not just the percentage fee. Leasing, renewals, markup, setup, and time value analysis.</p>
        </div>

        <!-- On this page nav -->
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>

          <!-- Desktop: full list -->
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#saved-scenarios" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Saved Scenarios</a></li>
            <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            <li><a href="#what-is" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is Mgmt Cost</a></li>
            <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
            <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
            <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
            <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Applications</a></li>
            <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Industry Standards</a></li>
            <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
            <li><a href="#common-mistakes" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Common Mistakes</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
          </ul>

          <!-- Mobile: first 3 always visible (vertical) + collapsible rest -->
          <div class="md:hidden">
            <ul class="flex flex-col gap-y-2">
              <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
              <li><a href="#saved-scenarios" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Saved Scenarios</a></li>
              <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            </ul>
            <ul v-show="isNavExpanded" class="flex flex-col gap-y-2 mt-2">
              <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
              <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
              <li><a href="#what-is" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is Mgmt Cost</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
              <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
              <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
              <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Applications</a></li>
              <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Industry Standards</a></li>
              <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
              <li><a href="#common-mistakes" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Common Mistakes</a></li>
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
          <span>Annual Cost</span>
        </div>
        <div class="flex items-center gap-3">
          <template v-if="hasResult">
            <span class="text-2xl font-extrabold leading-none" :style="`color: ${badge.bg1}`">
              {{ formatCurrency(ongoingAnnualCost) }}
            </span>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full text-white"
              :style="`background: ${badge.bg1}`">
              {{ badge.label }}
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
      <!-- Акцентная рамка калькулятора -->
      <div class="rounded-3xl p-[3px]" style="background: linear-gradient(135deg, #1e3a5f 0%, #f59e0b 50%, #1e3a5f 100%);">
      <div class="bg-white rounded-[21px] shadow-xl shadow-slate-200/60" style="overflow: clip;">

      <!-- Two-column body: inputs left, results right -->
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch">

        <!-- ── INPUTS (left column) ── -->
        <div class="calc-inputs border-b lg:border-b-0 lg:border-r border-gray-200 bg-white min-w-0">

          <!-- Property & Rent -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Property &amp; Rent</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">

              <!-- Monthly Rent per Unit -->
              <div>
                <label for="monthly-rent" class="block text-xs font-semibold text-gray-700 mb-1">
                  Monthly Scheduled Rent (per unit)
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="monthly-rent" v-model="form.monthlyRent" type="number" min="0" step="50"
                    placeholder="Enter monthly rent per unit"
                    aria-label="Monthly scheduled rent per unit in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

              <!-- Number of Units -->
              <div>
                <label for="num-units" class="block text-xs font-semibold text-gray-700 mb-1">
                  Number of Units
                </label>
                <input id="num-units" v-model="form.numUnits" type="number" min="1" step="1"
                  placeholder="Enter number of units"
                  aria-label="Number of rental units"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                <p class="text-xs text-gray-400 mt-1">Some managers offer lower percentage fees for multi-unit properties. Adjust the management fee percentage manually if needed.</p>
              </div>

              <!-- Vacancy Rate -->
              <div>
                <label for="vacancy-rate" class="block text-xs font-semibold text-gray-700 mb-1">
                  Vacancy Rate
                  <span class="ml-1 text-xs font-normal text-gray-400">(typical: 5–10%)</span>
                </label>
                <div class="relative">
                  <input id="vacancy-rate" v-model="form.vacancyRate" type="number" min="0" max="100" step="0.5"
                    placeholder="Enter expected vacancy percentage"
                    aria-label="Vacancy rate as a percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
              </div>

              <!-- Computed rent summary -->
              <div v-if="annualScheduledRent > 0" class="p-2.5 rounded-xl text-xs font-medium text-blue-800 bg-blue-50 border border-blue-100">
                Annual Scheduled Rent: <span class="font-bold">{{ formatCurrency(annualScheduledRent) }}</span>
                <span v-if="collectedRent > 0" class="text-blue-500 ml-1">· Collected: {{ formatCurrency(collectedRent) }}/yr</span>
              </div>

            </div>
          </div>

          <!-- Management Fee -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Management Fee</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">

              <!-- Fee Percentage -->
              <div>
                <label for="fee-pct" class="block text-xs font-semibold text-gray-700 mb-1">
                  Management Fee Percentage
                  <span class="ml-1 text-xs font-normal text-gray-400">(typical: 8–10%)</span>
                </label>
                <div class="relative">
                  <input id="fee-pct" v-model="form.feePct" type="number" min="0" max="100" step="0.5"
                    placeholder="Enter management fee percentage"
                    aria-label="Management fee percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
              </div>

              <!-- Fee Base Toggle -->
              <div>
                <p id="fee-base-label" class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Fee charged on:</p>
                <div class="flex items-center gap-1 p-1 bg-white border border-gray-200 rounded-xl w-fit shadow-sm" role="group" aria-labelledby="fee-base-label">
                  <button @click="form.feeBase = 'collected'"
                    :aria-pressed="form.feeBase === 'collected'"
                    :class="form.feeBase === 'collected' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">
                    Collected Rent
                  </button>
                  <button @click="form.feeBase = 'scheduled'"
                    :aria-pressed="form.feeBase === 'scheduled'"
                    :class="form.feeBase === 'scheduled' ? 'bg-amber-50 shadow text-gray-900 font-bold border border-amber-200' : 'text-gray-500 hover:text-gray-700'"
                    class="px-4 py-2 rounded-lg text-sm transition font-medium">
                    Scheduled Rent
                  </button>
                </div>
                <p class="text-xs text-gray-400 mt-1">
                  <span v-if="form.feeBase === 'collected'">Fee is based on actual rent collected after vacancy. Lower cost when units are empty.</span>
                  <span v-else>Fee is based on scheduled (gross) rent regardless of vacancy. You pay even on vacant units.</span>
                </p>
              </div>

              <!-- Warning: scheduled + vacancy -->
              <div v-if="form.feeBase === 'scheduled' && Number(form.vacancyRate) > 0"
                class="p-2.5 rounded-xl text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200">
                Charging on scheduled rent can increase effective cost when vacancy exists.
              </div>

            </div>
          </div>

          <!-- Additional Fees -->
          <div class="border-b border-gray-100">
            <div class="calc-section-header">
              <h2 class="calc-section-title">Additional Fees</h2>
            </div>
            <div class="px-4 py-3 space-y-2.5">

              <!-- Leasing Fee -->
              <div>
                <label for="leasing-fee" class="block text-xs font-semibold text-gray-700 mb-1">
                  Leasing Fee (per new tenant)
                  <span class="ml-1 text-xs font-normal text-gray-400">(typical: 50–100% of 1 month's rent)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="leasing-fee" v-model="form.leasingFee" type="number" min="0" step="50"
                    placeholder="Enter leasing fee per new tenant"
                    aria-label="Leasing fee per new tenant in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

              <!-- Expected New Leases per Year -->
              <div>
                <label for="new-leases" class="block text-xs font-semibold text-gray-700 mb-1">
                  Expected New Leases Per Year
                </label>
                <input id="new-leases" v-model="form.newLeasesPerYear" type="number" min="0" step="1"
                  placeholder="Enter expected tenant placements per year"
                  aria-label="Number of new leases per year"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
              </div>

              <!-- Renewal Fee -->
              <div>
                <label for="renewal-fee" class="block text-xs font-semibold text-gray-700 mb-1">
                  Renewal Fee (per renewal)
                  <span class="ml-1 text-xs font-normal text-gray-400">(typical: $100–$300)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="renewal-fee" v-model="form.renewalFee" type="number" min="0" step="25"
                    placeholder="Enter renewal fee per tenant"
                    aria-label="Renewal fee per tenant in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

              <!-- Expected Renewals per Year -->
              <div>
                <label for="renewals" class="block text-xs font-semibold text-gray-700 mb-1">
                  Expected Renewals Per Year
                </label>
                <input id="renewals" v-model="form.renewalsPerYear" type="number" min="0" step="1"
                  placeholder="Enter expected renewals per year"
                  aria-label="Number of renewals per year"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
              </div>

              <!-- Setup Fee -->
              <div>
                <label for="setup-fee" class="block text-xs font-semibold text-gray-700 mb-1">
                  Setup / Onboarding Fee
                  <span class="ml-1 text-xs font-normal text-gray-400">(one-time, first year only)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="setup-fee" v-model="form.setupFee" type="number" min="0" step="50"
                    placeholder="Enter one-time setup fee"
                    aria-label="Setup fee in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

              <!-- Maintenance Markup -->
              <div>
                <label for="maint-spend" class="block text-xs font-semibold text-gray-700 mb-1">
                  Annual Maintenance Spend
                  <span class="ml-1 text-xs font-normal text-gray-400">(before markup)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="maint-spend" v-model="form.maintenanceSpend" type="number" min="0" step="100"
                    placeholder="Enter annual maintenance spend"
                    aria-label="Annual maintenance spend in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

              <div>
                <label for="maint-markup" class="block text-xs font-semibold text-gray-700 mb-1">
                  Maintenance Markup Percentage
                  <span class="ml-1 text-xs font-normal text-gray-400">(typical: 10–15%)</span>
                </label>
                <div class="relative">
                  <input id="maint-markup" v-model="form.maintenanceMarkup" type="number" min="0" max="100" step="1"
                    placeholder="Enter maintenance markup percentage"
                    aria-label="Maintenance markup percentage"
                    class="w-full pr-8 pl-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition bg-white" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">Some managers charge 10%–15% markup on coordinated repairs or vendor invoices.</p>
              </div>

              <!-- Other Annual Fees -->
              <div>
                <label for="other-fees" class="block text-xs font-semibold text-gray-700 mb-1">
                  Other Annual Fees
                  <span class="ml-1 text-xs font-normal text-gray-400">(admin, technology, advertising, etc.)</span>
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="other-fees" v-model="form.otherFees" type="number" min="0" step="50"
                    placeholder="Enter other annual fees"
                    aria-label="Other annual fees in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

            </div>
          </div>

          <!-- Performance Impact (optional) -->
          <button @click="performanceOpen = !performanceOpen"
            class="w-full flex items-center justify-between px-5 py-3 text-sm transition border-b border-gray-100"
            :class="performanceOpen
              ? 'bg-amber-50 text-amber-800 font-semibold'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800 font-medium'">
            <div class="flex items-center gap-2">
              <span>Performance Impact — NOI &amp; Cash Flow</span>
              <span v-if="performanceOpen" class="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">ON</span>
            </div>
            <svg class="w-4 h-4 transition-transform flex-shrink-0" :class="performanceOpen ? 'rotate-180' : ''"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <div v-if="performanceOpen" class="border-b border-gray-100">
            <div class="calc-section-header">
              <div>
                <h2 class="calc-section-title">NOI &amp; Cash Flow Impact</h2>
                <p class="text-xs text-amber-700 mt-0.5 ml-3">See how management fees reduce your returns</p>
              </div>
            </div>
            <div class="px-4 py-3 space-y-2.5">

              <!-- NOI Before Management -->
              <div>
                <label for="noi-before" class="block text-xs font-semibold text-gray-700 mb-1">
                  NOI Before Management (annual)
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="noi-before" v-model="form.noiBefore" type="number" min="0" step="500"
                    placeholder="Enter estimated annual NOI before management fees"
                    aria-label="NOI before management in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Enter your estimated annual NOI before any property management fees.</p>
              </div>

              <!-- Annual Debt Service -->
              <div>
                <label for="debt-service" class="block text-xs font-semibold text-gray-700 mb-1">
                  Annual Debt Service (mortgage payments)
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="debt-service" v-model="form.debtService" type="number" min="0" step="500"
                    placeholder="Enter annual mortgage payments"
                    aria-label="Annual debt service in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

            </div>
          </div>

          <!-- Time Value (optional) -->
          <button @click="timeValueOpen = !timeValueOpen"
            class="w-full flex items-center justify-between px-5 py-3 text-sm transition border-b border-gray-100"
            :class="timeValueOpen
              ? 'bg-amber-50 text-amber-800 font-semibold'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800 font-medium'">
            <div class="flex items-center gap-2">
              <span>Time Value — Self-Management Comparison</span>
              <span v-if="timeValueOpen" class="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">ON</span>
            </div>
            <svg class="w-4 h-4 transition-transform flex-shrink-0" :class="timeValueOpen ? 'rotate-180' : ''"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          <div v-if="timeValueOpen" class="border-b border-gray-100">
            <div class="calc-section-header">
              <div>
                <h2 class="calc-section-title">Time Value Analysis</h2>
                <p class="text-xs text-amber-700 mt-0.5 ml-3">This helps compare management cost against the value of your own time.</p>
              </div>
            </div>
            <div class="px-4 py-3 space-y-2.5">

              <!-- Owner Hourly Value -->
              <div>
                <label for="hourly-value" class="block text-xs font-semibold text-gray-700 mb-1">
                  Your Hourly Value ($)
                </label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm" aria-hidden="true">$</span>
                  <input id="hourly-value" v-model="form.hourlyValue" type="number" min="0" step="5"
                    placeholder="Enter what your time is worth per hour"
                    aria-label="Owner hourly value in dollars"
                    class="w-full pl-8 pr-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>

              <!-- Hours Saved per Month -->
              <div>
                <label for="hours-saved" class="block text-xs font-semibold text-gray-700 mb-1">
                  Hours Saved per Month
                  <span class="ml-1 text-xs font-normal text-gray-400">(typical: 5–15 hrs)</span>
                </label>
                <input id="hours-saved" v-model="form.hoursSaved" type="number" min="0" step="1"
                  placeholder="Enter hours saved per month with a manager"
                  aria-label="Hours saved per month"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
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

            <!-- Primary Result Display -->
            <div class="px-5 py-5 border-b border-gray-100 bg-white">
              <p class="text-xs font-semibold uppercase tracking-wide mb-2 text-gray-400">
                Ongoing Annual Management Cost
              </p>
              <div class="font-extrabold leading-none overflow-hidden text-ellipsis whitespace-nowrap w-full transition-all mb-3"
                :class="hasResult ? 'text-5xl' : 'text-6xl text-gray-200'"
                :style="hasResult ? `color: ${badge.bg1}` : ''">
                {{ hasResult ? formatCurrency(ongoingAnnualCost) : '—' }}
              </div>
              <div v-if="hasResult"
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-bold text-xs text-white"
                :style="`background: ${badge.bg1}`">
                <span class="w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0"></span>
                {{ badge.label }}
              </div>
              <div v-else class="text-sm text-gray-300">Enter values to see result</div>
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

            <!-- Breakdown -->
            <div v-if="hasResult" class="p-6 space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Cost Breakdown</h3>

              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Annual Scheduled Rent</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(annualScheduledRent) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Vacancy Loss ({{ vacancyRateClamped }}%)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(vacancyLoss) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Collected Rent</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(collectedRent) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Fee Base ({{ form.feeBase === 'collected' ? 'collected' : 'scheduled' }})</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(feeBase) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Annual Management Fee ({{ Number(form.feePct) || 0 }}%)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(annualManagementFee) }}</span>
              </div>
              <div v-if="annualLeasingFees > 0" class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Leasing Fees ({{ form.newLeasesPerYear || 0 }} new)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(annualLeasingFees) }}</span>
              </div>
              <div v-if="annualRenewalFees > 0" class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Renewal Fees ({{ form.renewalsPerYear || 0 }} renewals)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(annualRenewalFees) }}</span>
              </div>
              <div v-if="maintenanceMarkupCost > 0" class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Maintenance Markup ({{ Number(form.maintenanceMarkup) || 0 }}%)</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(maintenanceMarkupCost) }}</span>
              </div>
              <div v-if="Number(form.otherFees) > 0" class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Other Fees</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(Number(form.otherFees)) }}</span>
              </div>

              <!-- Totals -->
              <div class="flex justify-between items-center py-2 border-t border-gray-200 mt-2">
                <span class="text-sm font-bold text-gray-700">Ongoing Annual Cost</span>
                <span class="font-extrabold text-base" :style="`color: ${badge.bg1}`">{{ formatCurrency(ongoingAnnualCost) }}</span>
              </div>
              <div v-if="Number(form.setupFee) > 0" class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm font-bold text-gray-700">First-Year Cost (incl. setup)</span>
                <span class="font-extrabold text-base text-gray-900">{{ formatCurrency(firstYearCost) }}</span>
              </div>

              <!-- Formula -->
              <div class="mt-4 p-3 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden">
                <p class="text-xs text-center text-gray-400 font-medium">
                  Ongoing Cost = Management Fee + Leasing + Renewals + Markup + Other
                </p>
                <p class="text-xs text-center text-gray-500 font-semibold mt-1 break-all">
                  {{ formatCurrency(annualManagementFee) }} + {{ formatCurrency(annualLeasingFees) }} + {{ formatCurrency(annualRenewalFees) }} + {{ formatCurrency(maintenanceMarkupCost) }} + {{ formatCurrency(Number(form.otherFees) || 0) }} = <span style="color: #1e3a5f;">{{ formatCurrency(ongoingAnnualCost) }}</span>
                </p>
                <p class="text-xs text-center text-gray-400 mt-2 italic">Planning estimate — not a contract quote.</p>
              </div>

              <!-- Key Metrics Grid -->
              <div class="mt-4 grid grid-cols-3 gap-2">
                <div class="rounded-xl p-3 text-center border"
                  :class="costPctCollected > 18 ? 'bg-red-50 border-red-200' : costPctCollected > 12 ? 'bg-amber-50 border-amber-200' : 'bg-green-50 border-green-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="costPctCollected > 18 ? 'text-red-500' : costPctCollected > 12 ? 'text-amber-600' : 'text-green-600'">
                    % Collected
                  </p>
                  <p class="text-base font-extrabold"
                    :class="costPctCollected > 18 ? 'text-red-700' : costPctCollected > 12 ? 'text-amber-700' : 'text-green-700'">
                    {{ costPctCollected.toFixed(1) }}%
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">of collected</p>
                </div>
                <div class="rounded-xl p-3 text-center border"
                  :class="costPctScheduled > 15 ? 'bg-red-50 border-red-200' : costPctScheduled > 10 ? 'bg-amber-50 border-amber-200' : 'bg-green-50 border-green-200'">
                  <p class="text-xs font-semibold mb-0.5"
                    :class="costPctScheduled > 15 ? 'text-red-500' : costPctScheduled > 10 ? 'text-amber-600' : 'text-green-600'">
                    % Scheduled
                  </p>
                  <p class="text-base font-extrabold"
                    :class="costPctScheduled > 15 ? 'text-red-700' : costPctScheduled > 10 ? 'text-amber-700' : 'text-green-700'">
                    {{ costPctScheduled.toFixed(1) }}%
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">of scheduled</p>
                </div>
                <div class="rounded-xl p-3 text-center border bg-blue-50 border-blue-200">
                  <p class="text-xs font-semibold mb-0.5 text-blue-600">
                    Per Unit/Mo
                  </p>
                  <p class="text-base font-extrabold text-blue-700">
                    {{ formatCurrency(perUnitMonthlyCost) }}
                  </p>
                  <p class="text-xs text-gray-400 mt-0.5">monthly</p>
                </div>
              </div>

              <!-- Monthly equivalent -->
              <div class="mt-3 flex justify-between items-center text-sm border-t border-gray-100 pt-3">
                <span class="text-gray-500 font-medium">Monthly Equivalent Cost</span>
                <span class="font-bold text-gray-900">{{ formatCurrency(monthlyEquivalentCost) }}/mo</span>
              </div>

            </div>

            <!-- NOI & Cash Flow Impact -->
            <div v-if="hasResult && performanceOpen && (noiAfterMgmt !== null || cashFlowAfterMgmt !== null)"
              class="px-5 py-4 border-t border-gray-100 space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Performance Impact</h3>

              <div v-if="noiAfterMgmt !== null" class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">NOI Before Management</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(Number(form.noiBefore)) }}</span>
              </div>
              <div v-if="noiAfterMgmt !== null" class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Management Costs</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(ongoingAnnualCost) }}</span>
              </div>
              <div v-if="noiAfterMgmt !== null" class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm font-bold text-gray-700">NOI After Management</span>
                <span class="font-extrabold" :class="noiAfterMgmt >= 0 ? 'text-green-600' : 'text-red-600'">{{ formatCurrency(noiAfterMgmt) }}</span>
              </div>

              <div v-if="cashFlowAfterMgmt !== null" class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Annual Debt Service</span>
                <span class="font-semibold text-red-500">-{{ formatCurrency(Number(form.debtService)) }}</span>
              </div>
              <div v-if="cashFlowAfterMgmt !== null" class="flex justify-between items-center py-2">
                <span class="text-sm font-bold text-gray-700">Cash Flow After Management</span>
                <span class="font-extrabold" :class="cashFlowAfterMgmt >= 0 ? 'text-green-600' : 'text-red-600'">{{ formatCurrency(cashFlowAfterMgmt) }}</span>
              </div>

              <!-- Impact interpretation -->
              <div class="p-3 rounded-xl text-xs leading-snug"
                :class="cashFlowAfterMgmt !== null && cashFlowAfterMgmt < 0 ? 'bg-red-50 border border-red-200 text-red-800' : noiAfterMgmt !== null && noiAfterMgmt < 0 ? 'bg-red-50 border border-red-200 text-red-800' : 'bg-green-50 border border-green-200 text-green-800'">
                <span v-if="cashFlowAfterMgmt !== null && cashFlowAfterMgmt < 0">
                  Cash flow is negative after management costs and debt service. Management fees may be absorbing too much income — consider negotiating fees or self-managing.
                </span>
                <span v-else-if="noiAfterMgmt !== null && noiAfterMgmt < 0">
                  NOI is negative after management costs. This property does not cover operating and management expenses.
                </span>
                <span v-else>
                  Property remains cash-flow positive after all management costs. Management fees consume {{ costPctCollected.toFixed(1) }}% of collected rent.
                </span>
              </div>
            </div>

            <!-- Time Value Results -->
            <div v-if="hasResult && timeValueOpen && breakEvenHours !== null"
              class="px-5 py-4 border-t border-gray-100 space-y-3">
              <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Time Value Comparison</h3>

              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Your Hourly Value</span>
                <span class="font-semibold text-gray-900">{{ formatCurrency(Number(form.hourlyValue)) }}/hr</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Estimated Hours Saved / Month</span>
                <span class="font-semibold text-gray-900">{{ form.hoursSaved }} hrs</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm text-gray-500">Value of Time Saved / Year</span>
                <span class="font-semibold text-green-600">{{ formatCurrency(timeSavedValue) }}</span>
              </div>
              <div class="flex justify-between items-center py-2 border-b border-gray-50">
                <span class="text-sm font-bold text-gray-700">Break-Even Hours / Month</span>
                <span class="font-extrabold text-base" style="color: #1e3a5f;">{{ breakEvenHours.toFixed(1) }} hrs</span>
              </div>

              <div class="p-3 rounded-xl text-xs leading-snug"
                :class="timeSavedValue >= ongoingAnnualCost ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-amber-50 border border-amber-200 text-amber-800'">
                <span v-if="timeSavedValue >= ongoingAnnualCost">
                  Management cost is justified by time savings. You would need to self-manage at least {{ breakEvenHours.toFixed(1) }} hrs/month to break even — hiring a manager saves you net value.
                </span>
                <span v-else>
                  Management cost exceeds the value of your saved time. Consider self-managing if your schedule allows — break-even requires {{ breakEvenHours.toFixed(1) }} hrs/month, but you only estimate saving {{ form.hoursSaved }} hrs.
                </span>
              </div>
            </div>

            <!-- Deal Context Panel -->
            <div v-if="hasResult"
              class="px-5 py-4 border-t border-gray-100 rounded-b-xl"
              :style="`background: ${badge.bg1}12;`">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-bold px-2.5 py-0.5 rounded-full text-white"
                  :style="`background: ${badge.bg1}`">
                  {{ badge.label }}
                </span>
                <span class="text-xs font-semibold text-gray-400 uppercase tracking-wide">Cost context</span>
              </div>
              <p class="text-sm leading-relaxed font-medium text-gray-700">{{ insightText }}</p>
            </div>

            <!-- Sensitivity — cost at different fee percentages -->
            <div v-if="hasResult && sensitivityRows" class="border-t border-gray-100">
              <div class="px-4 pt-3 pb-1">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                    Cost at different fee rates
                  </span>
                </div>
                <div class="space-y-0.5 mb-1">
                  <div v-for="row in sensitivityRows.slice(0, 3)" :key="row.label"
                    class="flex justify-between items-center text-xs px-2 py-1.5 rounded-lg"
                    :class="row.isCurrent ? 'font-bold' : 'text-gray-600'"
                    :style="row.isCurrent ? 'background: rgba(245,158,11,0.07);' : ''">
                    <span :style="row.isCurrent ? 'color: #92400e;' : ''">{{ row.label }}</span>
                    <span>{{ formatCurrency(row.annualFee) }}</span>
                    <span :class="row.costPct > 15 ? 'text-red-600' : row.costPct > 10 ? 'text-amber-600' : 'text-green-600'" class="font-semibold">
                      {{ row.costPct.toFixed(1) }}%
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
                      <span>{{ formatCurrency(row.annualFee) }}</span>
                      <span :class="row.costPct > 15 ? 'text-red-600' : row.costPct > 10 ? 'text-amber-600' : 'text-green-600'" class="font-semibold">
                        {{ row.costPct.toFixed(1) }}%
                      </span>
                    </div>
                  </div>
                  <p class="text-xs text-gray-400 mt-2 italic">Fee rate sensitivity — all other fees held constant. % is total cost relative to collected rent.</p>
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
              <!-- 2. SECONDARY: Share + PDF в одну строку -->
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
      <div id="saved-scenarios" class="max-w-6xl mx-auto px-4 pb-6 mt-4">
        <ScenarioPanel
          calculator="mgmt-fee"
          :has-result="hasResult"
          :result="currentScenarioResult"
          :trigger-save="triggerScenarioSave"
          @saved="onScenarioSaved"
        />
      </div>

      <!-- ═══════════════════════════════════════════════
           SEO CONTENT — editorial style (single container)
      ═══════════════════════════════════════════════ -->
      <div class="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

      <!-- INTRO TEXT -->
      <div class="border-b border-gray-100 px-8 py-8">
        <div class="space-y-3">
          <p class="text-gray-700 text-base leading-relaxed">
            That <strong>"8% management fee"</strong> is not the real cost. Between leasing fees, renewals, maintenance markup, and vacancy impact — many landlords underestimate what they actually pay for property management. This calculator shows the full picture before you sign a management agreement.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            This free property management fee calculator computes your <strong>total annual management cost</strong> — not just the percentage fee. It includes leasing commissions, renewal fees, maintenance markup, setup fees, and shows how these costs impact your NOI and cash flow. Real-time results, no signup required.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            Choosing the wrong property manager does not just reduce profit — it can eliminate your cash flow. A few hidden fees can turn a good rental into a bad investment. Check your numbers before you commit.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            Below you will find the complete management cost formula, interpretation guides, cost benchmarks by property type and market, strategy notes for evaluating management agreements, plus an 8-question FAQ answering the most common investor questions about property management fees.
          </p>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           OVERVIEW
      ═══════════════════════════════════════════════ -->
      <div id="overview" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">Overview</h2>
        <p class="text-gray-600 leading-relaxed mb-3">
          The <strong>property management fee calculator</strong> is designed for US landlords and investors who need to understand the true cost of hiring a property manager. Most investors focus only on the percentage fee — but leasing commissions, renewal fees, maintenance markup, and setup costs often add 30–60% more to the actual annual management expense.
        </p>
        <p class="text-gray-600 leading-relaxed mb-3">
          This tool breaks down every component of property management cost: the monthly percentage fee (computed on either collected or scheduled rent), tenant placement (leasing) fees, renewal commissions, maintenance coordination markup, one-time setup fees, and miscellaneous charges. It then shows the total impact on your NOI and cash flow.
        </p>
        <p class="text-gray-600 leading-relaxed">
          An optional time-value module lets you compare management cost against the value of your own time — answering the fundamental question: <strong>is hiring a manager worth it for this property?</strong> The calculator computes break-even hours per month so you can make a data-driven decision.
        </p>
      </div>

      <!-- HOW TO USE -->
      <div id="how-to-use" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-1" style="color: #1e3a5f;">How to Use This Property Management Fee Calculator</h2>
        <p class="text-gray-500 text-sm mb-6">Follow these steps to see your real management cost in under 2 minutes</p>
        <div class="grid md:grid-cols-2 gap-10">
            <!-- Step-by-step -->
            <ol class="space-y-5">
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">1</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Enter property details</p>
                  <p class="text-gray-500 text-sm mt-1">Enter monthly rent per unit, number of units, and expected vacancy rate. The calculator computes scheduled rent, vacancy loss, and collected rent automatically.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">2</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Set fee percentage and base</p>
                  <p class="text-gray-500 text-sm mt-1">Enter the management fee percentage (typically 8–10%) and select whether the fee is charged on <strong>collected rent</strong> or <strong>scheduled rent</strong>. This distinction matters significantly when vacancy exists.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">3</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Add leasing, renewal, and other fees</p>
                  <p class="text-gray-500 text-sm mt-1">Enter leasing fees per new tenant, renewal fees, maintenance markup percentage, setup fees, and any other annual charges. These are often the hidden costs that inflate total management expense.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">4</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Review NOI and cash flow impact</p>
                  <p class="text-gray-500 text-sm mt-1">Optionally enter your NOI before management and annual debt service to see how management costs reduce your actual returns. If cash flow goes negative, reconsider the management structure.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">5</div>
                <div>
                  <p class="font-bold text-gray-900 text-sm">Compare against self-management</p>
                  <p class="text-gray-500 text-sm mt-1">Use the time-value module to enter your hourly rate and estimated hours saved. The calculator shows whether hiring a manager is cost-effective based on the value of your time.</p>
                </div>
              </li>
            </ol>
            <!-- Tips + Result interpretation -->
            <div class="space-y-5">
              <div class="p-5 rounded-xl border border-amber-200" style="background: #fffbeb;">
                <h3 class="font-bold text-sm mb-3" style="color: #92400e;">Pro Tips for Accurate Results</h3>
                <ul class="space-y-2 text-sm text-amber-800">
                  <li class="flex gap-2"><span class="font-bold flex-shrink-0">→</span> Always include leasing fees — they are often the largest hidden cost, especially with turnover.</li>
                  <li class="flex gap-2"><span class="font-bold flex-shrink-0">→</span> Ask if your manager charges on collected or scheduled rent — this can differ by 5–15% in effective cost.</li>
                  <li class="flex gap-2"><span class="font-bold flex-shrink-0">→</span> Check maintenance markup in the contract — even 10% on a $5,000 repair adds $500 to your annual cost.</li>
                  <li class="flex gap-2"><span class="font-bold flex-shrink-0">→</span> Setup fees only affect first-year cost — do not annualize them when comparing managers.</li>
                </ul>
              </div>
              <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
                <h3 class="font-bold text-sm text-gray-800 mb-3">Understanding Your Result</h3>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li><span class="font-semibold text-gray-800">Total cost &lt; 8% of collected</span> — Low management cost. Unusual unless the property is large or you negotiated well.</li>
                  <li><span class="font-semibold text-gray-800">Total cost 8–12%</span> — Normal range for most US residential properties. Acceptable if service is good.</li>
                  <li><span class="font-semibold text-gray-800">Total cost 12–18%</span> — High. Common with frequent turnover or high maintenance properties.</li>
                  <li><span class="font-semibold text-gray-800">Total cost &gt; 18%</span> — Very high. Likely driven by leasing fees, markup, or low rent relative to flat fees.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      <!-- INPUTS & OUTPUTS -->
      <div id="inputs-outputs" class="border-b border-gray-100">
        <div class="px-8 py-5 border-b border-gray-100">
          <h2 class="text-lg font-extrabold" style="color: #1e3a5f;">Inputs &amp; Outputs — Field Reference</h2>
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
                <td class="px-4 py-3 text-gray-600">Scheduled rent per unit per month. The amount stated in the lease.</td>
                <td class="px-4 py-3 text-gray-500">Lease agreements, rent rolls</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-6 py-3 font-semibold text-gray-800">Vacancy Rate</td>
                <td class="px-4 py-3 text-gray-600">Percentage of time units are vacant. Affects collected rent and fee calculations.</td>
                <td class="px-4 py-3 text-gray-500">Historical occupancy data, market reports</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-gray-800">Management Fee %</td>
                <td class="px-4 py-3 text-gray-600">Monthly percentage fee charged by the manager. Typical US range: 8–10% residential.</td>
                <td class="px-4 py-3 text-gray-500">Property management agreement</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-6 py-3 font-semibold text-gray-800">Leasing Fee</td>
                <td class="px-4 py-3 text-gray-600">One-time fee per new tenant placed. Often 50–100% of one month's rent.</td>
                <td class="px-4 py-3 text-gray-500">Management agreement, fee schedule</td>
              </tr>
              <tr>
                <td class="px-6 py-3 font-semibold text-gray-800">Renewal Fee</td>
                <td class="px-4 py-3 text-gray-600">Fee charged per lease renewal. Typical: $100–$300 per renewal.</td>
                <td class="px-4 py-3 text-gray-500">Management agreement</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-6 py-3 font-semibold text-gray-800">Ongoing Cost (output)</td>
                <td class="px-4 py-3 text-gray-600">Total annual management cost excluding setup fee. Includes all recurring fees.</td>
                <td class="px-4 py-3 text-gray-500 italic">Calculated automatically</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- FORMULA -->
      <div id="formula" class="border-b border-gray-100">
        <div class="px-8 py-6 border-b border-gray-100">
          <h2 class="text-xl font-extrabold" style="color: #1e3a5f;">Management Cost Formula &amp; Calculation Method</h2>
          <p class="text-gray-500 text-sm mt-1">The exact math this calculator uses — plus a real-world example</p>
        </div>
        <div class="px-8 py-8">
          <div class="grid md:grid-cols-2 gap-10">

            <!-- Formula steps -->
            <div>
              <h3 class="font-bold text-gray-800 mb-4">Step-by-step calculation</h3>
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">1</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Calculate Scheduled &amp; Collected Rent</p>
                    <p class="text-xs text-gray-500 mt-0.5">Monthly rent × units × 12 = scheduled. Subtract vacancy loss.</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">$2,500/mo × 1 × 12 = $30,000 · 5% vacancy → $28,500 collected</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">2</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Calculate Annual Management Fee</p>
                    <p class="text-xs text-gray-500 mt-0.5">Fee base (collected or scheduled) × fee percentage</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">$28,500 × 8% = $2,280 annual management fee</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">3</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Add Leasing, Renewals, Markup, Other</p>
                    <p class="text-xs text-gray-500 mt-0.5">Each fee component added annually</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">$2,500 leasing + $200 renewal + $500 markup + $0 other</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-amber-200 bg-amber-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md flex-shrink-0 mt-0.5" style="background:#f59e0b;color:#1e3a5f;">4</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Total Ongoing Annual Cost</p>
                    <p class="text-xs text-gray-500 mt-0.5">Sum of all fee components</p>
                    <code class="text-xs font-bold" style="color:#1e3a5f;">$2,280 + $2,500 + $200 + $500 + $0 = <strong>$5,480/yr</strong></code>
                  </div>
                </div>
              </div>
            </div>

            <!-- Formula box + notes -->
            <div class="space-y-4">
              <div class="p-5 rounded-xl text-center border border-gray-200 bg-gray-50">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">The Formula</p>
                <div class="font-mono font-bold text-base mb-2" style="color:#1e3a5f;">Total Cost = Mgmt Fee + Leasing + Renewals + Markup + Other</div>
                <div class="font-mono text-xs text-gray-500 mb-1">Mgmt Fee = Fee Base × Fee %</div>
                <div class="font-mono text-xs text-gray-500">Fee Base = Collected or Scheduled Rent</div>
                <div class="mt-4 p-3 rounded-lg border border-gray-200 text-left font-mono text-xs bg-white" style="color: #374151; line-height: 1.7;">
                  <div>Monthly Rent × Units × 12</div>
                  <div>= Annual Scheduled Rent</div>
                  <div>− Vacancy Loss</div>
                  <div class="border-t border-gray-300 pt-1">= Collected Rent</div>
                  <div>Fee Base × Fee %</div>
                  <div class="border-t border-gray-300 pt-1">= Annual Management Fee</div>
                  <div>+ Leasing + Renewals + Markup + Other</div>
                  <div class="border-t border-gray-300 pt-1 font-extrabold" style="color:#1e3a5f;">= Total Ongoing Cost</div>
                </div>
              </div>
              <div class="p-4 rounded-xl border border-blue-100 bg-blue-50">
                <p class="text-xs font-bold text-blue-800 mb-2">First-year vs ongoing cost</p>
                <div class="space-y-1.5 text-xs text-blue-700">
                  <div class="font-mono">First Year = Ongoing Cost + Setup Fee</div>
                  <div class="font-mono">Ongoing = Cost without one-time fees</div>
                </div>
              </div>
              <div class="p-4 rounded-xl border border-amber-100 bg-amber-50">
                <p class="text-xs font-bold text-amber-800 mb-1">Fee base matters</p>
                <p class="text-xs text-amber-700 leading-relaxed">Some managers charge on <strong>scheduled rent</strong> — meaning you pay the fee even on vacant units. With high vacancy, this significantly increases your effective cost. Always verify which rent basis your management agreement uses.</p>
              </div>
            </div>

          </div>

          <!-- Real-world example -->
          <div class="mt-8 p-6 rounded-2xl border-2 border-amber-200" style="background: #fffbeb;">
            <h3 class="font-bold text-gray-900 mb-1">Real-World Example: Single-Family Rental — $2,500/mo</h3>
            <p class="text-xs text-amber-700 mb-4">Based on typical 2026 US residential management terms</p>
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Fee Components</p>
                <div class="space-y-1.5 text-sm">
                  <div class="flex justify-between"><span class="text-gray-600">Monthly rent</span><span class="font-semibold">$2,500/mo</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Annual scheduled rent</span><span class="font-semibold">$30,000</span></div>
                  <div class="flex justify-between text-red-600"><span>Vacancy loss (5%)</span><span>− $1,500</span></div>
                  <div class="flex justify-between font-semibold border-t border-amber-200 pt-1.5 mt-1"><span>Collected rent</span><span>$28,500</span></div>
                  <div class="flex justify-between text-red-600"><span>Management fee (8%)</span><span>− $2,280</span></div>
                  <div class="flex justify-between text-red-600"><span>Leasing fee (1 new)</span><span>− $2,500</span></div>
                  <div class="flex justify-between text-red-600"><span>Renewal fee (0)</span><span>− $0</span></div>
                  <div class="flex justify-between text-red-600"><span>Maintenance markup (10% on $5,000)</span><span>− $500</span></div>
                  <div class="flex justify-between font-extrabold text-gray-900 border-t border-amber-200 pt-1.5 mt-1"><span>Ongoing Annual Cost</span><span>$5,280</span></div>
                </div>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Result</p>
                <div class="p-4 rounded-xl text-center mb-3" style="background: #1e3a5f;">
                  <p class="text-xs text-blue-300 mb-1">Effective cost as % of collected rent</p>
                  <p class="text-4xl font-extrabold text-white">18.5%</p>
                  <p class="text-xs text-blue-200 mt-1">Total Annual Cost</p>
                </div>
                <p class="text-xs text-gray-600 leading-relaxed">The stated fee is 8% — but the <strong>real total cost is 18.5%</strong> of collected rent when leasing and markup are included. This is typical for properties with tenant turnover. If you self-manage and value your time at $50/hr, break-even is about 8.8 hours per month.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- WHAT IS MANAGEMENT COST -->
      <div id="what-is" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What Is Property Management Cost?</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          <strong>Property management cost</strong> is the total annual expense of hiring a professional property manager — not just the stated percentage fee. It includes the monthly management fee, tenant placement (leasing) commissions, renewal fees, maintenance coordination markup, setup charges, and miscellaneous admin costs. Most landlords significantly underestimate this total.
        </p>
        <div class="p-4 rounded-xl text-center font-bold text-lg mb-4" style="background: #f0f4f8; color: #1e3a5f;">
          Total Cost = Mgmt Fee + Leasing + Renewals + Markup + Other
        </div>
        <p class="text-gray-600 leading-relaxed">
          The percentage fee is only the visible cost. Leasing fees, renewals, maintenance markup, setup fees, and time value determine the real impact. A property with frequent tenant turnover can easily see total management costs reach 15–20%+ of collected rent — far higher than the quoted 8–10% monthly fee. Understanding the full cost structure is essential before signing any management agreement.
        </p>
      </div>

      <!-- WHAT'S A TYPICAL COST -->
      <div class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What's a Typical Management Cost?</h2>
        <div class="space-y-3 mb-4">
          <div v-for="tier in costTiers" :key="tier.label"
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
        <p class="text-xs text-gray-400 leading-relaxed">These are general US planning ranges for total annual management cost as a percentage of collected rent. Actual costs vary by market, property type, turnover rate, and service level. Not rules — just benchmarks for comparison.</p>
      </div>

      <!-- RESULT MEANING -->
      <div id="result-meaning" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">What Your Management Cost Result Means</h2>
        <p class="text-gray-600 leading-relaxed mb-5">
          Your total management cost as a percentage of collected rent shows how much of your rental income goes to management. Here is how to interpret each range:
        </p>
        <div class="space-y-3 mb-5">
          <div class="flex gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
            <div class="flex-shrink-0 mt-0.5">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500 text-white">LOW</span>
            </div>
            <div>
              <p class="font-bold text-sm text-green-800">&lt; 8% — Low Cost</p>
              <p class="text-sm text-green-700 mt-1 leading-relaxed">Unusual for full-service management. Common for multi-unit properties with negotiated rates and low turnover. Verify that the manager is not cutting corners on tenant screening or maintenance coordination.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200">
            <div class="flex-shrink-0 mt-0.5">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500 text-white">NORMAL</span>
            </div>
            <div>
              <p class="font-bold text-sm text-blue-800">8–12% — Normal Range</p>
              <p class="text-sm text-blue-700 mt-1 leading-relaxed">Standard cost for most US residential rental properties. The 8–10% monthly fee plus typical leasing and renewal fees land most properties in this range. Acceptable if service quality is good and turnover is moderate.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <div class="flex-shrink-0 mt-0.5">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-white">HIGH</span>
            </div>
            <div>
              <p class="font-bold text-sm text-amber-800">12–18% — High Cost</p>
              <p class="text-sm text-amber-700 mt-1 leading-relaxed">Common in properties with frequent turnover, low rents, or aggressive markup clauses. Leasing fees and maintenance markup are usually the culprits. Review the management agreement for specific cost drivers and consider negotiating flat-fee alternatives.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl bg-red-50 border border-red-200">
            <div class="flex-shrink-0 mt-0.5">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-500 text-white">VERY HIGH</span>
            </div>
            <div>
              <p class="font-bold text-sm text-red-800">&gt; 18% — Very High Cost</p>
              <p class="text-sm text-red-700 mt-1 leading-relaxed">At this level, management is consuming a disproportionate share of rental income. Consider self-management, renegotiating terms, or switching managers. Verify that all fee components are necessary and competitively priced for your market.</p>
            </div>
          </div>
        </div>
        <div class="p-4 rounded-xl border border-gray-200 bg-gray-50">
          <p class="text-sm font-semibold text-gray-800 mb-1">The question is not: "Is the management fee reasonable?"</p>
          <p class="text-sm text-gray-600 leading-relaxed">The real question is: <strong>"Does the property still work after management?"</strong> If the deal only works without management — it is fragile. A good investment should produce positive cash flow even with professional management. If management fees eliminate your cash flow, either the deal is too thin or the fees are too high.</p>
        </div>
      </div>

      <!-- BENCHMARKS -->
      <div id="benchmarks" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Management Fee Benchmarks by Property Type &amp; Market (2026)</h2>
        <p class="text-gray-500 text-sm mb-6">Typical management fee percentages and total cost ranges by property type. Use as a starting point — always verify with current quotes from local managers.</p>

        <h3 class="font-bold text-gray-800 mb-3">By Property Type</h3>
        <div class="overflow-x-auto mb-8 rounded-xl border border-gray-100">
          <table class="w-full text-sm">
            <thead>
              <tr style="background:#f0f4f8;">
                <th class="text-left px-5 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Property Type</th>
                <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Monthly Fee %</th>
                <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Leasing Fee</th>
                <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Total Cost Range</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr>
                <td class="px-5 py-3 font-semibold text-gray-800">Single-Family Rental</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">8–10%</td>
                <td class="px-4 py-3 text-center text-amber-600 font-semibold">75–100% of 1 mo</td>
                <td class="px-4 py-3 text-center text-green-600 font-semibold">10–18%</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-5 py-3 font-semibold text-gray-800">Small Multifamily (2–4)</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">7–10%</td>
                <td class="px-4 py-3 text-center text-amber-600 font-semibold">50–100% of 1 mo</td>
                <td class="px-4 py-3 text-center text-green-600 font-semibold">10–16%</td>
              </tr>
              <tr>
                <td class="px-5 py-3 font-semibold text-gray-800">Large Multifamily (5+)</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">4–8%</td>
                <td class="px-4 py-3 text-center text-amber-600 font-semibold">50–75% of 1 mo</td>
                <td class="px-4 py-3 text-center text-green-600 font-semibold">8–14%</td>
              </tr>
              <tr class="bg-gray-50/40">
                <td class="px-5 py-3 font-semibold text-gray-800">Commercial / Mixed-Use</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">4–6%</td>
                <td class="px-4 py-3 text-center text-amber-600 font-semibold">Varies by lease</td>
                <td class="px-4 py-3 text-center text-green-600 font-semibold">6–12%</td>
              </tr>
              <tr>
                <td class="px-5 py-3 font-semibold text-gray-800">Vacation / Short-Term Rental</td>
                <td class="px-4 py-3 text-center text-blue-600 font-semibold">15–25%</td>
                <td class="px-4 py-3 text-center text-amber-600 font-semibold">N/A</td>
                <td class="px-4 py-3 text-center text-red-600 font-semibold">20–30%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- By Market -->
        <h3 class="font-bold text-gray-800 mb-3">By US Market — Typical Residential Management</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Texas (TX)</p>
            <p class="text-2xl font-extrabold text-blue-600 mb-1">8–10%</p>
            <p class="text-xs text-gray-500">DFW, Austin, Houston. Competitive market with many managers. Leasing fees $800–$1,500.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Florida (FL)</p>
            <p class="text-2xl font-extrabold text-blue-600 mb-1">8–10%</p>
            <p class="text-xs text-gray-500">Tampa, Orlando, Jacksonville. Similar to Texas. Turnover-heavy markets push total costs higher.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">California (CA)</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">6–8%</p>
            <p class="text-xs text-gray-500">Higher rents mean lower % fees, but leasing fees are high ($1,500–$3,000+). Total cost 10–15%.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Midwest (OH, IN, MO)</p>
            <p class="text-2xl font-extrabold text-green-600 mb-1">8–12%</p>
            <p class="text-xs text-gray-500">Lower rents mean higher % fees needed. Flat-fee models more common. Total cost 12–20%.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Georgia (GA)</p>
            <p class="text-2xl font-extrabold text-blue-600 mb-1">8–10%</p>
            <p class="text-xs text-gray-500">Atlanta metro. Active investor market with competitive management pricing.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Arizona (AZ)</p>
            <p class="text-2xl font-extrabold text-blue-600 mb-1">7–10%</p>
            <p class="text-xs text-gray-500">Phoenix. Growing market with many PM companies. Competitive leasing fees.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">New York (NY)</p>
            <p class="text-2xl font-extrabold text-amber-600 mb-1">5–8%</p>
            <p class="text-xs text-gray-500">NYC metro. Lower % due to high rents, but broker fees and leasing costs add significantly.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Colorado (CO)</p>
            <p class="text-2xl font-extrabold text-blue-600 mb-1">8–10%</p>
            <p class="text-xs text-gray-500">Denver. Moderate vacancy, competitive PM market. Leasing fees typically one month's rent.</p>
          </div>
        </div>

        <div class="mt-6 overflow-x-auto rounded-xl border border-gray-100">
          <table class="w-full text-sm">
            <thead>
              <tr style="background:#f0f4f8;">
                <th class="text-left px-5 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Market</th>
                <th class="text-center px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Monthly Fee</th>
                <th class="text-left px-4 py-3 font-bold text-gray-600 text-xs uppercase tracking-wide">Key Notes</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr><td class="px-5 py-2.5 font-semibold text-gray-800">Texas</td><td class="px-4 py-2.5 text-center text-blue-600 font-semibold">8–10%</td><td class="px-4 py-2.5 text-gray-600 text-xs">Competitive market, many managers. No state income tax benefits landlords.</td></tr>
              <tr class="bg-gray-50/40"><td class="px-5 py-2.5 font-semibold text-gray-800">Florida</td><td class="px-4 py-2.5 text-center text-blue-600 font-semibold">8–10%</td><td class="px-4 py-2.5 text-gray-600 text-xs">High migration markets. Turnover drives leasing fee costs higher.</td></tr>
              <tr><td class="px-5 py-2.5 font-semibold text-gray-800">California</td><td class="px-4 py-2.5 text-center text-amber-600 font-semibold">6–8%</td><td class="px-4 py-2.5 text-gray-600 text-xs">High rents compress % fees, but flat costs are high. Rent control adds compliance cost.</td></tr>
              <tr class="bg-gray-50/40"><td class="px-5 py-2.5 font-semibold text-gray-800">Midwest</td><td class="px-4 py-2.5 text-center text-green-600 font-semibold">8–12%</td><td class="px-4 py-2.5 text-gray-600 text-xs">Lower rents mean managers need higher % to be viable. Flat-fee models common.</td></tr>
              <tr><td class="px-5 py-2.5 font-semibold text-gray-800">Georgia</td><td class="px-4 py-2.5 text-center text-blue-600 font-semibold">8–10%</td><td class="px-4 py-2.5 text-gray-600 text-xs">Atlanta metro investor-friendly. Many PM options with competitive pricing.</td></tr>
              <tr class="bg-gray-50/40"><td class="px-5 py-2.5 font-semibold text-gray-800">Arizona</td><td class="px-4 py-2.5 text-center text-blue-600 font-semibold">7–10%</td><td class="px-4 py-2.5 text-gray-600 text-xs">Phoenix growth market. Good supply of managers keeps fees competitive.</td></tr>
              <tr><td class="px-5 py-2.5 font-semibold text-gray-800">New York</td><td class="px-4 py-2.5 text-center text-amber-600 font-semibold">5–8%</td><td class="px-4 py-2.5 text-gray-600 text-xs">NYC management costly in absolute terms despite lower %. Compliance and rent stabilization add overhead.</td></tr>
              <tr class="bg-gray-50/40"><td class="px-5 py-2.5 font-semibold text-gray-800">Colorado</td><td class="px-4 py-2.5 text-center text-blue-600 font-semibold">8–10%</td><td class="px-4 py-2.5 text-gray-600 text-xs">Denver area. Standard pricing with moderate vacancy and competitive leasing fees.</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-gray-400 mt-3">Sources: Buildium 2026 PM Survey, NARPM data, local manager fee schedules. Ranges reflect typical residential management. Commercial and short-term rental rates vary significantly.</p>
      </div>

      <!-- STRATEGY -->
      <div id="strategy" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">When Management Cost Analysis Matters Most</h2>
        <p class="text-gray-500 text-sm mb-6">How management fee analysis fits into each major investment strategy</p>
        <div class="grid md:grid-cols-2 gap-6">

          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#1e3a5f;">Buy &amp; Hold</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              For long-term buy-and-hold investors, management cost is a <strong>permanent operating expense</strong>. A 3% difference in total management cost (8% vs 11%) on a $30,000/yr rental is $900/yr — over a 10-year hold, that is $9,000 in lost cash flow. Always model management costs before acquisition.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              Focus on reducing turnover (the biggest cost driver) through tenant retention programs. Negotiate flat leasing fees rather than percentage-based ones for higher-rent properties.
            </p>
          </div>

          <div class="p-5 rounded-xl border border-blue-100 bg-blue-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-blue-600">Out-of-State</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              Out-of-state investors <strong>must</strong> use professional management — self-managing remotely is impractical. This means management cost is non-negotiable and must be factored into every deal analysis from day one. Do not evaluate a deal assuming self-management if you plan to hire a manager.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              Interview at least 3 local managers and compare total cost structure, not just the percentage fee. The cheapest manager is rarely the best — focus on tenant quality, vacancy minimization, and maintenance responsiveness.
            </p>
          </div>

          <div class="p-5 rounded-xl border border-amber-100 bg-amber-50/60">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold" style="background:#f59e0b; color:#1e3a5f;">Multi-Unit</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              Multi-unit properties (5+) typically negotiate <strong>lower percentage fees</strong> due to economies of scale. However, total leasing volume may be higher, and maintenance coordination becomes more complex. The per-unit cost often decreases while total dollar cost increases.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              For larger properties, compare percentage-based vs. flat-fee management structures. Some managers offer $50–100/unit/month flat fees that can be more predictable than percentage-based arrangements.
            </p>
          </div>

          <div class="p-5 rounded-xl border border-emerald-100 bg-emerald-50/60">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#059669;">Self-Manage</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-3">
              Self-management eliminates the fee — but not the work. Use the time-value analysis to determine if your time is better spent on management or other income-producing activities. At $75/hr, 10 hours of monthly management work equals $9,000/yr in time cost.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              If self-managing, still budget 8–10% of rent in your analysis. This makes the deal portable — if you ever want to sell or hire a manager, the numbers remain accurate.
            </p>
          </div>

          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold text-white" style="background:#6366f1;">Negotiation</span>
            </div>
            <h3 class="font-bold text-gray-800 mb-2 text-sm">Using This Calculator to Negotiate Better Terms</h3>
            <div class="p-3 rounded-xl bg-white border border-gray-100 font-mono text-sm text-center mb-3" style="color: #1e3a5f;">
              Compare: Total Cost Manager A vs Manager B
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">
              Run each manager's fee structure through this calculator. A manager with 10% fee but no leasing fee may cost less than one charging 8% with a full-month leasing fee. Total cost comparison is the only way to evaluate management proposals.
            </p>
          </div>

        </div>
      </div>

      <!-- APPLICATIONS -->
      <div id="applications" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Applications of Management Fee Analysis</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Manager Comparison</p>
            <p class="text-sm text-gray-600">Run multiple manager proposals through the calculator to compare total cost, not just the stated percentage fee. The lowest percentage is often not the lowest total cost.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Deal Underwriting</p>
            <p class="text-sm text-gray-600">Include realistic management costs in your acquisition analysis. Deals that only work without management are fragile investments. Budget full management cost from day one.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Self-Manage vs Hire</p>
            <p class="text-sm text-gray-600">Use the time-value comparison to make a data-driven decision about whether to self-manage or hire. Factor in your hourly value and realistic time commitment.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Contract Review</p>
            <p class="text-sm text-gray-600">Before signing a management agreement, model the total cost using actual contract terms. Identify hidden fees that are not immediately obvious from the percentage rate alone.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Portfolio Optimization</p>
            <p class="text-sm text-gray-600">Analyze management cost across your portfolio. Properties with high per-unit management costs may benefit from consolidation with a single manager at volume-discount rates.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Exit Planning</p>
            <p class="text-sm text-gray-600">When selling, include management cost in your proforma for buyers. Professional management costs demonstrate stabilized operations and support higher valuations for institutional buyers.</p>
          </div>
        </div>
      </div>

      <!-- INDUSTRY STANDARDS -->
      <div id="industry-standards" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Industry Standards &amp; Professional Guidelines</h2>
        <div class="grid md:grid-cols-3 gap-6">

          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">N</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">NARPM Standards</h3>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> NARPM (National Association of Residential Property Managers) sets industry standards for management fees and practices.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Recommends transparent fee disclosure in management agreements — all fees should be itemized.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Standard residential management fee: <strong>8–12%</strong> of collected rent plus leasing fees.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Member managers follow a code of ethics regarding fee transparency and fiduciary duty.</li>
            </ul>
          </div>

          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">I</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">IREM Guidelines</h3>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed mb-3">
              IREM (Institute of Real Estate Management) provides the CPM (Certified Property Manager) designation — the gold standard for commercial and multifamily management professionals.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Commercial management fees typically <strong>4–6%</strong> of gross revenue, often with a minimum monthly fee.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> IREM expense analysis benchmarks help identify whether your management cost is competitive.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Recommends annual management contract review and competitive bidding every 3–5 years.</li>
            </ul>
          </div>

          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">$</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">Common Fee Structures</h3>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> <strong>Percentage-based</strong> — most common: 8–10% of rent, aligns manager incentive with occupancy.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> <strong>Flat fee</strong> — $50–200/unit/month. More predictable, common for multi-unit. May not incentivize rent growth.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> <strong>Hybrid</strong> — lower percentage + flat monthly minimum. Protects the manager during vacancy while limiting cost at full occupancy.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> <strong>Performance-based</strong> — rare. Base fee + bonus for exceeding occupancy or rent targets. Best alignment but uncommon.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> <strong>Leasing fees</strong> range from 25% to 100% of first month's rent. Renewal fees from $0 to $300+. Always negotiate these separately.</li>
            </ul>
          </div>

        </div>
      </div>

      <!-- LIMITATIONS -->
      <div id="limitations" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Limitations</h2>
        <div class="grid sm:grid-cols-2 gap-5">
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Not a Contract Quote</p>
            <p class="text-sm text-gray-600">This calculator provides a planning estimate based on your inputs. Actual management costs depend on the specific contract terms, local market, and manager quality. Always verify with real quotes.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Does Not Include All Possible Fees</p>
            <p class="text-sm text-gray-600">Some managers charge additional fees not modeled here: eviction coordination, inspection fees, advertising costs, tax preparation, or reserve fund management. Read the full agreement before signing.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Does Not Predict Service Quality</p>
            <p class="text-sm text-gray-600">Lower cost does not mean better value. A manager charging 10% who keeps vacancy at 3% may deliver better returns than one charging 7% with 10% vacancy. Cost is one factor — performance is another.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Turnover Assumptions</p>
            <p class="text-sm text-gray-600">Leasing and renewal fees depend on how many tenants turn over. This calculator uses your estimate — actual turnover may be higher or lower. Budget conservatively.</p>
          </div>
        </div>

        <div id="when-not-to-use" class="mt-6">
          <h3 class="font-bold text-gray-800 mb-3">When This Calculator May Not Apply</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Short-term rentals (Airbnb/VRBO):</strong> Management for STRs is fundamentally different — 15–25% fees include cleaning coordination, guest communication, and dynamic pricing. Use a dedicated STR calculator.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Commercial with NNN leases:</strong> Triple-net properties have minimal management duties. Management fees are often 2–4% and include primarily rent collection and financial reporting.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>HOA-managed properties:</strong> If the HOA handles common-area management, your property manager's scope is reduced. Fees should reflect only unit-level management duties.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Development or vacant properties:</strong> Management fees apply to income-producing properties. Development projects have project management costs, not PM fees.</li>
          </ul>
        </div>
      </div>

      <!-- COMMON MISTAKES -->
      <div id="common-mistakes" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Common Mistakes When Evaluating Management Cost</h2>
        <div class="space-y-3">
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">1</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Comparing only percentage fees</p>
              <p class="text-sm text-gray-600 mt-0.5">A 7% fee with a full-month leasing fee can cost more than a 10% fee with no leasing fee. Always compare <strong>total annual cost</strong>, not the headline percentage.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">2</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Ignoring leasing fees in deal analysis</p>
              <p class="text-sm text-gray-600 mt-0.5">With annual turnover, leasing fees can exceed the monthly management fee. A $2,500/mo rental with one turnover per year adds $1,250–$2,500 in leasing costs alone.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">3</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Not checking the fee base (collected vs scheduled)</p>
              <p class="text-sm text-gray-600 mt-0.5">Managers who charge on scheduled rent cost more during vacancy periods. With 10% vacancy and 8% fee on scheduled rent, you pay 8.9% of collected rent — not 8%.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">4</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Overlooking maintenance markup</p>
              <p class="text-sm text-gray-600 mt-0.5">A 10–15% markup on vendor invoices adds up quickly. On a property with $5,000/yr in repairs, that is $500–$750 in hidden costs. Check whether the markup applies to emergency repairs, routine maintenance, or both.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">5</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Assuming zero management cost when self-managing</p>
              <p class="text-sm text-gray-600 mt-0.5">Your time has value. Budget 8–10% of rent as management cost even when self-managing. This makes your deal analysis portable and honest about the true cost of ownership.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
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

      <!-- Other Calculators CTA -->
      <div id="related-calculators" class="mt-6 rounded-2xl p-8 text-center text-white"
        style="background: #1e3a5f;">
        <h2 class="text-2xl font-extrabold mb-2">Ready to Dig Deeper?</h2>
        <p class="text-blue-200 mb-6">Management cost is just one piece. Use our full toolkit for complete deal analysis.</p>
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
      :calculator-name="'Property Management Fee Calculator'"
      :primary-result="hasResult ? `${formatCurrency(ongoingAnnualCost)} Annual Cost` : undefined"
      title="Save Your Management Cost Analysis"
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
// ─── SEO ─────────────────────────────────────────────────────────────────────
useHead({
  title: 'Property Management Fee Calculator — Real Cost, NOI Impact & Cash Flow (2026) | RealCalc',
  meta: [
    {
      name: 'description',
      content: 'Calculate the true cost of property management: monthly fees, leasing, renewals, markup, and impact on NOI and cash flow. Free calculator for US landlords — see real costs, not just the percentage.'
    },
    { property: 'og:title', content: 'Property Management Fee Calculator — Real Cost, NOI Impact & Cash Flow | RealCalc' },
    { property: 'og:description', content: 'See the full cost of property management — leasing fees, renewals, maintenance markup, and impact on your NOI and cash flow. Free, no signup.' },
    { name: 'keywords', content: 'property management fee calculator, property management cost, management fee percentage, leasing fee, property manager cost, rental property management, NOI impact management' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Property Management Fee Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description: 'Free property management fee calculator for US landlords. Calculate total management cost including leasing, renewals, markup, and impact on NOI and cash flow.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        featureList: 'Management fee calculation, leasing fee analysis, renewal cost tracking, maintenance markup, NOI impact, cash flow impact, time value comparison, break-even hours, PDF export'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Calculator',
        name: 'Property Management Fee Calculator',
        description: 'Calculate the true cost of property management including monthly fees, leasing commissions, renewals, maintenance markup, and impact on NOI and cash flow.',
        url: 'https://arvcalc.com/property-management-fee-calculator',
        provider: {
          '@type': 'Organization',
          name: 'RealCalc',
          url: 'https://arvcalc.com'
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
            name: 'How much does property management really cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most investors think they pay 8-10% of rent, but the true cost is often 12-18% when you include leasing fees (50-100% of one month\'s rent per new tenant), renewal fees ($100-300), maintenance markup (10-15%), and setup fees. On a $2,500/month rental, total annual management cost can easily reach $3,000-$5,000+ per year.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between collected and scheduled rent for management fees?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Collected rent is the actual rent received after vacancy losses. Scheduled rent is the full amount stated in all leases regardless of vacancy. Some managers charge fees on scheduled rent, meaning you pay the management fee even on vacant units. With 10% vacancy and an 8% fee on scheduled rent, your effective cost on collected rent rises to about 8.9%.'
            }
          },
          {
            '@type': 'Question',
            name: 'What are typical leasing fees for property management?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Leasing fees (tenant placement fees) typically range from 50% to 100% of one month\'s rent per new tenant placed. On a $2,000/month property, that is $1,000-$2,000 per tenant turnover. With annual turnover, this single fee can exceed the total monthly management fees for the year. Some managers offer reduced leasing fees for multi-year contracts.'
            }
          },
          {
            '@type': 'Question',
            name: 'Should I self-manage or hire a property manager?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The decision depends on your time value, portfolio size, and distance from the property. If your hourly rate is $75 and management saves you 10 hours per month, that is $9,000/year in time savings. If total management cost is $5,000/year, hiring a manager creates net value. Out-of-state investors almost always need professional management regardless of cost.'
            }
          },
          {
            '@type': 'Question',
            name: 'How do management fees affect NOI and cash flow?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Management fees directly reduce NOI and cash flow. For example, if NOI before management is $18,000 and total management cost is $3,600, your NOI after management drops to $14,400. If you also have $12,000 in annual debt service, cash flow drops from $6,000 to $2,400. This is why management costs must be factored into every deal analysis from day one.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is a typical maintenance markup charged by property managers?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Property managers typically charge a 10-15% markup on maintenance and repair work they coordinate. On $5,000 in annual maintenance, that is an additional $500-$750 per year. Some managers do not charge markup on emergency repairs, while others apply it to all vendor invoices. This should be clearly stated in the management agreement.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are property management fees tax deductible?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, property management fees are fully tax-deductible as an operating expense for rental properties. This includes the monthly management fee, leasing fees, renewal fees, and other management-related charges. They are reported on Schedule E of your tax return. However, the deduction reduces your taxable income, not your tax liability dollar-for-dollar.'
            }
          },
          {
            '@type': 'Question',
            name: 'How can I reduce my property management costs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Key strategies: 1) Reduce turnover through tenant retention programs (lower leasing fees). 2) Negotiate flat leasing fees instead of percentage-based ones for higher-rent properties. 3) Ask for volume discounts if you have multiple units. 4) Request fee base on collected rent, not scheduled. 5) Cap maintenance markup at 10%. 6) Negotiate away setup fees for multi-year contracts.'
            }
          }
        ]
      })
    }
  ]
})

// ─── REACTIVE STATE ──────────────────────────────────────────────────────────
const openFaq      = ref(null)
const shareSuccess = ref(false)
const isNavExpanded = ref(false)

const performanceOpen = ref(false)
const timeValueOpen   = ref(false)
const showSensitivity = ref(false)

const form = reactive({
  monthlyRent:        null,
  numUnits:           null,
  vacancyRate:        null,
  feePct:             null,
  feeBase:            'collected',
  leasingFee:         null,
  newLeasesPerYear:   null,
  renewalFee:         null,
  renewalsPerYear:    null,
  setupFee:           null,
  maintenanceSpend:   null,
  maintenanceMarkup:  null,
  otherFees:          null,
  noiBefore:          null,
  debtService:        null,
  hourlyValue:        null,
  hoursSaved:         null,
})

// ─── COST TIERS (education) ─────────────────────────────────────────────────
const costTiers = [
  { label: 'Low Cost',      range: '< 8%',    note: 'Multi-unit negotiated',     bg: '#f0fdf4', border: '#bbf7d0', dot: '#059669', textColor: '#065f46' },
  { label: 'Normal',        range: '8–12%',   note: 'Most US residential',       bg: '#eff6ff', border: '#bfdbfe', dot: '#2563eb', textColor: '#1e40af' },
  { label: 'High',          range: '12–18%',  note: 'High turnover / low rent',  bg: '#fffbeb', border: '#fde68a', dot: '#d97706', textColor: '#92400e' },
  { label: 'Very High',     range: '> 18%',   note: 'Review fee structure',      bg: '#fef2f2', border: '#fecaca', dot: '#dc2626', textColor: '#991b1b' },
]

// ─── FULLY-COMPUTED CALCULATION CHAIN ────────────────────────────────────────
const annualScheduledRent = computed(() =>
  (Number(form.monthlyRent) || 0) * (Number(form.numUnits) || 0) * 12
)

const vacancyRateClamped = computed(() =>
  Math.min(100, Math.max(0, Number(form.vacancyRate) || 0))
)

const vacancyLoss = computed(() =>
  annualScheduledRent.value * (vacancyRateClamped.value / 100)
)

const collectedRent = computed(() =>
  annualScheduledRent.value - vacancyLoss.value
)

const feeBase = computed(() =>
  form.feeBase === 'collected' ? collectedRent.value : annualScheduledRent.value
)

const annualManagementFee = computed(() =>
  feeBase.value * ((Number(form.feePct) || 0) / 100)
)

const annualLeasingFees = computed(() =>
  (Number(form.leasingFee) || 0) * (Number(form.newLeasesPerYear) || 0)
)

const annualRenewalFees = computed(() =>
  (Number(form.renewalFee) || 0) * (Number(form.renewalsPerYear) || 0)
)

const maintenanceMarkupCost = computed(() =>
  (Number(form.maintenanceSpend) || 0) * ((Number(form.maintenanceMarkup) || 0) / 100)
)

const ongoingAnnualCost = computed(() =>
  annualManagementFee.value +
  annualLeasingFees.value +
  annualRenewalFees.value +
  maintenanceMarkupCost.value +
  (Number(form.otherFees) || 0)
)

const firstYearCost = computed(() =>
  ongoingAnnualCost.value + (Number(form.setupFee) || 0)
)

const monthlyEquivalentCost = computed(() =>
  ongoingAnnualCost.value / 12
)

const costPctCollected = computed(() =>
  collectedRent.value > 0 ? (ongoingAnnualCost.value / collectedRent.value) * 100 : 0
)

const costPctScheduled = computed(() =>
  annualScheduledRent.value > 0 ? (ongoingAnnualCost.value / annualScheduledRent.value) * 100 : 0
)

const perUnitMonthlyCost = computed(() => {
  const units = Number(form.numUnits) || 1
  return ongoingAnnualCost.value / 12 / units
})

const hasResult = computed(() => {
  return annualScheduledRent.value > 0 &&
    form.vacancyRate !== null && form.vacancyRate !== '' &&
    (Number(form.feePct) || 0) > 0
})

// ─── PERFORMANCE IMPACT ─────────────────────────────────────────────────────
const noiAfterMgmt = computed(() => {
  if (!hasResult.value || !performanceOpen.value) return null
  const noi = Number(form.noiBefore)
  if (!noi || noi <= 0) return null
  return noi - ongoingAnnualCost.value
})

const cashFlowAfterMgmt = computed(() => {
  if (noiAfterMgmt.value === null) return null
  const ds = Number(form.debtService)
  if (!ds || ds <= 0) return null
  return noiAfterMgmt.value - ds
})

// ─── TIME VALUE ─────────────────────────────────────────────────────────────
const timeSavedValue = computed(() =>
  (Number(form.hourlyValue) || 0) * (Number(form.hoursSaved) || 0) * 12
)

const breakEvenHours = computed(() => {
  if (!hasResult.value || !timeValueOpen.value) return null
  const hv = Number(form.hourlyValue) || 0
  if (hv <= 0) return null
  return ongoingAnnualCost.value / 12 / hv
})

// ─── WARNING STATES ──────────────────────────────────────────────────────────
const warnings = computed(() => {
  if (!hasResult.value) return []
  const w = []

  if (form.feeBase === 'scheduled' && vacancyRateClamped.value > 0) {
    const effectivePct = annualScheduledRent.value > 0 && collectedRent.value > 0
      ? (annualManagementFee.value / collectedRent.value * 100).toFixed(1)
      : 0
    if (effectivePct > Number(form.feePct)) {
      w.push({ type: 'warn', msg: `Fee is ${form.feePct}% of scheduled rent but ${effectivePct}% of collected rent due to ${vacancyRateClamped.value}% vacancy. Charging on scheduled rent increases effective cost.` })
    }
  }

  if (Number(form.maintenanceMarkup) > 10) {
    w.push({ type: 'warn', msg: `Maintenance markup of ${form.maintenanceMarkup}% is above average (10% is typical). On ${formatCurrency(Number(form.maintenanceSpend) || 0)} in annual maintenance, this adds ${formatCurrency(maintenanceMarkupCost.value)}.` })
  }

  if (Number(form.numUnits) > 1) {
    w.push({ type: 'warn', msg: 'Multi-unit properties may qualify for lower percentage management fees, but leasing, maintenance, and admin costs can still add up.' })
  }

  if (costPctCollected.value > 20) {
    w.push({ type: 'error', msg: `Total management cost is ${costPctCollected.value.toFixed(1)}% of collected rent — unusually high. Review fee structure and consider negotiating or switching managers.` })
  }

  return w
})

// ─── BADGE SYSTEM ────────────────────────────────────────────────────────────
const badge = computed(() => {
  const pct = costPctCollected.value
  if (pct <= 0)  return { label: 'Enter Fees',  bg1: '#6b7280', bg2: '#4b5563' }
  if (pct < 8)   return { label: 'Low Cost',    bg1: '#059669', bg2: '#047857' }
  if (pct < 12)  return { label: 'Normal',      bg1: '#0284c7', bg2: '#0369a1' }
  if (pct < 18)  return { label: 'High',        bg1: '#d97706', bg2: '#b45309' }
  return          { label: 'Very High',   bg1: '#dc2626', bg2: '#b91c1c' }
})

// ─── DEAL INSIGHT TEXT ───────────────────────────────────────────────────────
const insightText = computed(() => {
  const pct = costPctCollected.value
  const feePct = Number(form.feePct) || 0

  if (pct < 8) return `Total management cost of ${pct.toFixed(1)}% of collected rent is in the low range. This is unusual for full-service residential management — verify that tenant screening, maintenance coordination, and reporting are included at this rate.`
  if (pct < 12) return `Total management cost of ${pct.toFixed(1)}% of collected rent is within the normal range for US residential properties. The stated fee is ${feePct}%, but additional charges bring the real cost higher. This is typical and acceptable for most markets.`
  if (pct < 18) return `Total management cost of ${pct.toFixed(1)}% of collected rent is in the high range. Leasing fees and turnover are likely the main drivers. Consider negotiating flat leasing fees, reducing turnover, or comparing alternative managers.`
  return `Total management cost of ${pct.toFixed(1)}% of collected rent is very high. At this level, management is consuming a disproportionate share of rental income. Review each fee component, negotiate aggressively, or consider self-management if feasible.`
})

// ─── SENSITIVITY TABLE ──────────────────────────────────────────────────────
const sensitivityRows = computed(() => {
  if (!hasResult.value) return null
  const basePct = Number(form.feePct) || 0
  return [4, 6, 8, 10, 12, 15, 20].map(pct => {
    const mgmtFee = feeBase.value * (pct / 100)
    const totalCost = mgmtFee + annualLeasingFees.value + annualRenewalFees.value + maintenanceMarkupCost.value + (Number(form.otherFees) || 0)
    const costPct = collectedRent.value > 0 ? (totalCost / collectedRent.value) * 100 : 0
    return {
      label: `${pct}% fee`,
      annualFee: totalCost,
      costPct,
      isCurrent: pct === basePct,
    }
  })
})

// ─── FAQS ────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How much does property management really cost?',
    a: 'Most investors think they pay 8–10% of rent, but the true total cost is often 12–18% when leasing fees, renewal fees, maintenance markup, and other charges are included. On a $2,500/month rental with one tenant turnover per year, total annual management cost can reach $3,000–$5,000+ — that is 10–18% of collected rent, not the stated 8%.'
  },
  {
    q: 'What is the difference between collected and scheduled rent for fee calculation?',
    a: 'Collected rent is actual rent received after vacancy losses. Scheduled rent is the full lease amount regardless of whether units are occupied. If your manager charges fees on scheduled rent, you pay the management fee even on vacant units. With 10% vacancy and an 8% fee on scheduled rent, your effective cost on collected rent is about 8.9%.'
  },
  {
    q: 'What are typical leasing fees?',
    a: 'Leasing fees (tenant placement) typically range from 50% to 100% of one month\'s rent per new tenant. On a $2,000/month property, that is $1,000–$2,000 per turnover. Properties with annual turnover may spend more on leasing fees than on the monthly management fee itself. This is the most commonly overlooked cost component.'
  },
  {
    q: 'Should I self-manage or hire a property manager?',
    a: 'Calculate the break-even point: if your hourly rate is $75 and management saves you 10 hours per month, that is $9,000/year in time savings. If total management cost is $5,000/year, hiring a manager creates $4,000 in net value. Out-of-state investors almost always need professional management. Local investors with few units may benefit from self-managing.'
  },
  {
    q: 'How do management fees affect NOI?',
    a: 'Management fees directly reduce NOI. If NOI before management is $18,000 and total management cost is $3,600, NOI after management is $14,400. This also reduces cap rate (lower NOI = lower yield) and cash flow (less income to cover debt service). Management costs must be included in any serious deal analysis.'
  },
  {
    q: 'What is a maintenance markup and is it standard?',
    a: 'A maintenance markup is a percentage (typically 10–15%) that managers add to vendor invoices for coordinating repairs. On $5,000 in annual maintenance, a 10% markup costs $500. It is common but not universal — some managers include coordination in their monthly fee. Always check the management agreement for markup terms.'
  },
  {
    q: 'Are property management fees tax deductible?',
    a: 'Yes, all property management fees (monthly management, leasing, renewal, markup) are fully deductible as operating expenses on Schedule E. This reduces your taxable rental income, but the deduction is at your marginal tax rate — not a dollar-for-dollar offset. Track all management costs separately for tax reporting.'
  },
  {
    q: 'How can I negotiate lower management fees?',
    a: 'Key negotiation strategies: 1) Offer multi-year contracts for lower rates. 2) Bundle multiple properties with one manager for volume discounts. 3) Negotiate flat leasing fees instead of percentage-based. 4) Request fee base on collected rent, not scheduled. 5) Cap maintenance markup at 10%. 6) Ask to waive setup fees. Always compare total cost, not just the monthly percentage.'
  },
]

// ─── RELATED CALCULATORS ─────────────────────────────────────────────────────
const relatedCalcs = [
  { label: 'Rental Property',      href: '/rental-property-calculator' },
  { label: 'NOI Calculator',       href: '/noi-calculator' },
  { label: 'Cash Flow Calculator', href: '/property-cash-flow-calculator' },
  { label: 'Cap Rate Calculator',  href: '/cap-rate-calculator' },
  { label: 'Cash-on-Cash Return',  href: '/cash-on-cash-calculator' },
  { label: 'Multifamily Property', href: '/multifamily-property-calculator' },
]

// ─── URL PERSISTENCE ─────────────────────────────────────────────────────────
function buildShareParams() {
  const p = new URLSearchParams()
  if (form.monthlyRent)       p.set('mr', form.monthlyRent)
  if (form.numUnits)          p.set('nu', form.numUnits)
  if (form.vacancyRate !== null && form.vacancyRate !== '') p.set('vr', form.vacancyRate)
  if (form.feePct)            p.set('fp', form.feePct)
  if (form.feeBase !== 'collected') p.set('fb', form.feeBase)
  if (form.leasingFee)        p.set('lf', form.leasingFee)
  if (form.newLeasesPerYear)  p.set('nl', form.newLeasesPerYear)
  if (form.renewalFee)        p.set('rf', form.renewalFee)
  if (form.renewalsPerYear)   p.set('rn', form.renewalsPerYear)
  if (form.setupFee)          p.set('sf', form.setupFee)
  if (form.maintenanceSpend)  p.set('ms', form.maintenanceSpend)
  if (form.maintenanceMarkup) p.set('mm', form.maintenanceMarkup)
  if (form.otherFees)         p.set('of', form.otherFees)
  if (form.noiBefore)         p.set('nb', form.noiBefore)
  if (form.debtService)       p.set('ds', form.debtService)
  if (form.hourlyValue)       p.set('hv', form.hourlyValue)
  if (form.hoursSaved)        p.set('hs', form.hoursSaved)
  return p.toString()
}

if (process.client) {
  onMounted(() => {
    const p = new URLSearchParams(window.location.search)
    if (p.has('mr'))  form.monthlyRent       = Number(p.get('mr'))
    if (p.has('nu'))  form.numUnits          = Number(p.get('nu'))
    if (p.has('vr'))  form.vacancyRate       = Number(p.get('vr'))
    if (p.has('fp'))  form.feePct            = Number(p.get('fp'))
    if (p.has('fb'))  form.feeBase           = p.get('fb')
    if (p.has('lf'))  form.leasingFee        = Number(p.get('lf'))
    if (p.has('nl'))  form.newLeasesPerYear  = Number(p.get('nl'))
    if (p.has('rf'))  form.renewalFee        = Number(p.get('rf'))
    if (p.has('rn'))  form.renewalsPerYear   = Number(p.get('rn'))
    if (p.has('sf'))  form.setupFee          = Number(p.get('sf'))
    if (p.has('ms'))  form.maintenanceSpend  = Number(p.get('ms'))
    if (p.has('mm'))  form.maintenanceMarkup = Number(p.get('mm'))
    if (p.has('of'))  form.otherFees         = Number(p.get('of'))
    if (p.has('nb'))  { form.noiBefore       = Number(p.get('nb')); performanceOpen.value = true }
    if (p.has('ds'))  { form.debtService     = Number(p.get('ds')); performanceOpen.value = true }
    if (p.has('hv'))  { form.hourlyValue     = Number(p.get('hv')); timeValueOpen.value = true }
    if (p.has('hs'))  { form.hoursSaved      = Number(p.get('hs')); timeValueOpen.value = true }
  })
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function resetForm() {
  form.monthlyRent       = null
  form.numUnits          = null
  form.vacancyRate       = null
  form.feePct            = null
  form.feeBase           = 'collected'
  form.leasingFee        = null
  form.newLeasesPerYear  = null
  form.renewalFee        = null
  form.renewalsPerYear   = null
  form.setupFee          = null
  form.maintenanceSpend  = null
  form.maintenanceMarkup = null
  form.otherFees         = null
  form.noiBefore         = null
  form.debtService       = null
  form.hourlyValue       = null
  form.hoursSaved        = null
  performanceOpen.value  = false
  timeValueOpen.value    = false
  shareSuccess.value     = false
  openFaq.value          = null
  showSensitivity.value  = false
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
  doc.text('Property Management Fee Analysis Report', 20, 30)
  doc.setFontSize(9)
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 130, 20)

  // Hero
  doc.setFillColor(...gold)
  doc.rect(15, 50, 180, 30, 'F')
  doc.setTextColor(30, 58, 95)
  doc.setFontSize(28)
  doc.setFont('helvetica', 'bold')
  doc.text(formatCurrency(ongoingAnnualCost.value), 105, 69, { align: 'center' })
  doc.setFontSize(10)
  doc.text('ONGOING ANNUAL COST', 105, 77, { align: 'center' })

  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text(`Cost Level: ${badge.value.label}`, 105, 92, { align: 'center' })

  // Breakdown
  doc.setTextColor(...navy)
  doc.setFontSize(13)
  doc.text('Cost Breakdown', 20, 108)

  const rows = [
    ['Annual Scheduled Rent', formatCurrency(annualScheduledRent.value)],
    [`Vacancy Loss (${vacancyRateClamped.value}%)`, `-${formatCurrency(vacancyLoss.value)}`],
    ['Collected Rent', formatCurrency(collectedRent.value)],
    [`Management Fee (${Number(form.feePct) || 0}%)`, `-${formatCurrency(annualManagementFee.value)}`],
    ['Leasing Fees', `-${formatCurrency(annualLeasingFees.value)}`],
    ['Renewal Fees', `-${formatCurrency(annualRenewalFees.value)}`],
    ['Maintenance Markup', `-${formatCurrency(maintenanceMarkupCost.value)}`],
    ['Other Fees', `-${formatCurrency(Number(form.otherFees) || 0)}`],
    ['Ongoing Annual Cost', formatCurrency(ongoingAnnualCost.value)],
    ['Cost % of Collected Rent', `${costPctCollected.value.toFixed(1)}%`],
    ['Cost % of Scheduled Rent', `${costPctScheduled.value.toFixed(1)}%`],
    ['Per Unit Monthly Cost', formatCurrency(perUnitMonthlyCost.value)],
  ]

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
  doc.text('Cost Context', 20, y + 3)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(...gray)
  doc.text(splitInsight, 20, y + 12)

  // Footer
  doc.setFillColor(...navy)
  doc.rect(0, 280, 210, 17, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text('arvcalc.com — For informational purposes only. Not financial advice.', 105, 290, { align: 'center' })

  doc.save(`mgmt-fee-analysis-${Date.now()}.pdf`)
}

// ─── SCENARIO SAVE / EMAIL CAPTURE ───────────────────────────────────────────
const showEmailModal = ref(false)

const currentScenarioResult = computed(() => {
  if (!hasResult.value) return undefined
  return {
    primaryMetric: 'Annual Mgmt Cost',
    primaryValue:  formatCurrency(ongoingAnnualCost.value),
    badgeLabel:    badge.value?.label,
    badgeColor:    badge.value?.bg1,
    ongoingCost:   ongoingAnnualCost.value,
    firstYearCost: firstYearCost.value,
    costPctCollected: costPctCollected.value,
    costPctScheduled: costPctScheduled.value,
    noiAfterMgmt:  noiAfterMgmt.value ?? undefined,
    cashFlowAfterMgmt: cashFlowAfterMgmt.value ?? undefined,
    perUnitMonthlyCost: perUnitMonthlyCost.value,
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
