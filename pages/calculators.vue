<template>
  <div class="min-h-screen bg-gray-50">

    <!-- HEADER -->
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
            <NuxtLink to="/calculators" class="font-medium text-sm transition" style="color: #f59e0b;">Calculators</NuxtLink>
            <NuxtLink to="/pricing" class="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Pricing</NuxtLink>
            <NuxtLink to="/blog" class="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Blog</NuxtLink>
          </nav>
          <NuxtLink to="/pricing"
            class="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-lg transition hover:opacity-90"
            style="background: #f59e0b; color: #1e3a5f;">
            Get Started Free
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- HERO -->
    <section class="relative overflow-hidden text-white py-16 px-4" style="background: linear-gradient(135deg, #1e3a5f 0%, #16304f 50%, #0f2540 100%);">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-10" style="background: #f59e0b; filter: blur(70px);"></div>
        <div class="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-10" style="background: #f59e0b; filter: blur(70px);"></div>
      </div>
      <div class="max-w-[1100px] mx-auto relative">
        <nav class="mb-4">
          <ol class="flex items-center gap-2 text-sm text-blue-300">
            <li><NuxtLink to="/" class="hover:text-white transition">Home</NuxtLink></li>
            <li><span>/</span></li>
            <li class="text-white font-semibold">Calculators</li>
          </ol>
        </nav>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Free Real Estate Investment Calculators
        </h1>
        <p class="text-blue-100 text-lg max-w-2xl leading-relaxed mb-6">
          30 professional tools for US real estate investors. Analyze rental properties, flip deals, BRRRR strategies, compare deals side-by-side, and more — instantly, no signup required.
        </p>
        <div class="flex flex-wrap gap-3">
          <span class="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full border border-white/20 bg-white/10">
            <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Always Free
          </span>
          <span class="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full border border-white/20 bg-white/10">
            <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            No Signup Required
          </span>
          <span class="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full border border-white/20 bg-white/10">
            <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Instant PDF Export
          </span>
        </div>
      </div>
    </section>

    <!-- MAIN CONTENT -->
    <main class="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">

      <!-- ── Section 1: Rental & Income Property ── -->
      <div class="mb-12">
        <h2 class="text-xl font-extrabold mb-1" style="color: #1e3a5f;">Rental &amp; Income Property</h2>
        <p class="text-gray-500 text-sm mb-6">Analyze buy-and-hold investments, BRRRR, and recurring income strategies.</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          <!-- Active -->
          <NuxtLink to="/rental-property-calculator"
            class="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1" style="color: #1e3a5f;">Rental Property Calculator</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">Complete cash flow analysis: income, expenses, NOI, cap rate &amp; ROI for any rental property.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all" style="color: #f59e0b;">
              Open Calculator <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <NuxtLink to="/noi-calculator"
            class="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1" style="color: #1e3a5f;">NOI Calculator</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">Net Operating Income from gross rent minus vacancy and operating expenses. Essential for lenders and valuation.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all" style="color: #f59e0b;">
              Open Calculator <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <NuxtLink to="/cap-rate-calculator"
            class="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1" style="color: #1e3a5f;">Cap Rate Calculator</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">Calculate capitalization rate, find implied value, or solve for required NOI. Includes 2026 US market benchmarks.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all" style="color: #f59e0b;">
              Open Calculator <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <NuxtLink to="/cash-on-cash-calculator"
            class="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1" style="color: #1e3a5f;">Cash-on-Cash Return</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">Annual ROI on actual cash invested, accounting for financing. The levered return metric every landlord needs.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all" style="color: #f59e0b;">
              Open Calculator <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <NuxtLink to="/dscr-calculator"
            class="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1" style="color: #1e3a5f;">DSCR Calculator</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">Debt Service Coverage Ratio for investment loan qualification. Know before you apply.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all" style="color: #f59e0b;">
              Open Calculator <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <NuxtLink to="/brrrr-calculator"
            class="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1" style="color: #1e3a5f;">BRRRR Calculator</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">Buy, Rehab, Rent, Refinance, Repeat — full BRRRR strategy analysis with equity recycling metrics.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all" style="color: #f59e0b;">
              Open Calculator <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <NuxtLink to="/compare-real-estate-deals"
            class="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1" style="color: #1e3a5f;">Compare Real Estate Deals</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">Side-by-side comparison of 2-3 real estate deals. Winner tier verdict with calibrated confidence — Clear, Slight Edge, or Too Close to Call.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all" style="color: #f59e0b;">
              Compare Now <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <!-- Active: Rental Property ROI -->
          <NuxtLink to="/rental-property-roi-calculator"
            class="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1" style="color: #1e3a5f;">Rental Property ROI Calculator</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">Full lifetime ROI analysis — cash flow, appreciation, equity build-up, and wealth projection over the hold period.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all" style="color: #f59e0b;">
              Open Calculator <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <NuxtLink to="/vacancy-rate-calculator" class="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition flex flex-col relative">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style="background: #1e3a5f;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1" style="color: #1e3a5f;">Vacancy Rate Calculator</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">Diagnostic verdict with likely causes and action thresholds — quantify income lost to vacancy.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-semibold group-hover:underline" style="color: #f59e0b;">Calculate now →</span>
          </NuxtLink>

          <div class="group bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col opacity-70 cursor-not-allowed relative">
            <div class="absolute top-3 right-3"><span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-gray-200 text-gray-600">Coming Soon</span></div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style="background: #94a3b8;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1 text-gray-500">Multifamily Property Calculator</h3>
              <p class="text-sm text-gray-400 leading-relaxed mb-3">Underwriting tool for 5+ unit apartment buildings with per-unit analysis.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-semibold text-gray-400">In development</span>
          </div>

          <div class="group bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col opacity-70 cursor-not-allowed relative">
            <div class="absolute top-3 right-3"><span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-gray-200 text-gray-600">Coming Soon</span></div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style="background: #94a3b8;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1 text-gray-500">Airbnb / STR Calculator</h3>
              <p class="text-sm text-gray-400 leading-relaxed mb-3">Short-term rental income projection — seasonal occupancy, ADR, cleaning costs, platform fees.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-semibold text-gray-400">In development</span>
          </div>

          <div class="group bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col opacity-70 cursor-not-allowed relative">
            <div class="absolute top-3 right-3"><span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-gray-200 text-gray-600">Coming Soon</span></div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style="background: #94a3b8;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1 text-gray-500">GRM Calculator</h3>
              <p class="text-sm text-gray-400 leading-relaxed mb-3">Gross Rent Multiplier — quick valuation screening ratio.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-semibold text-gray-400">In development</span>
          </div>

          <div class="group bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col opacity-70 cursor-not-allowed relative">
            <div class="absolute top-3 right-3"><span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-gray-200 text-gray-600">Coming Soon</span></div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style="background: #94a3b8;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1 text-gray-500">Property Management Fee Calculator</h3>
              <p class="text-sm text-gray-400 leading-relaxed mb-3">Compare self-management vs. professional property management costs.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-semibold text-gray-400">In development</span>
          </div>

        </div>
      </div>

      <!-- ── Section 2: Fix & Flip and Value Analysis ── -->
      <div class="mb-12">
        <h2 class="text-xl font-extrabold mb-1" style="color: #1e3a5f;">Fix &amp; Flip and Value Analysis</h2>
        <p class="text-gray-500 text-sm mb-6">Profit estimation and after-repair value tools for active investors.</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          <NuxtLink to="/fix-and-flip-calculator"
            class="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1" style="color: #1e3a5f;">Fix &amp; Flip Calculator</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">Estimate flip profit with purchase price, rehab costs, ARV, holding costs, and selling expenses.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all" style="color: #f59e0b;">
              Open Calculator <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <NuxtLink to="/arv-calculator"
            class="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1" style="color: #1e3a5f;">ARV Calculator</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">After Repair Value estimation using comparable sales and renovation multipliers for flip and BRRRR deals.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all" style="color: #f59e0b;">
              Open Calculator <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <NuxtLink to="/70-percent-rule-calculator"
            class="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1" style="color: #1e3a5f;">70% Rule Calculator</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">Quick flip offer calculator — maximum purchase price based on ARV and rehab costs.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all" style="color: #f59e0b;">
              Open Calculator <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <div class="group bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col opacity-70 cursor-not-allowed relative">
            <div class="absolute top-3 right-3"><span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-gray-200 text-gray-600">Coming Soon</span></div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style="background: #94a3b8;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1 text-gray-500">House Flipping Profit Calculator</h3>
              <p class="text-sm text-gray-400 leading-relaxed mb-3">Full flip profit projection with all costs and resale assumptions.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-semibold text-gray-400">In development</span>
          </div>

          <div class="group bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col opacity-70 cursor-not-allowed relative">
            <div class="absolute top-3 right-3"><span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-gray-200 text-gray-600">Coming Soon</span></div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style="background: #94a3b8;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1 text-gray-500">Rehab Cost Estimator</h3>
              <p class="text-sm text-gray-400 leading-relaxed mb-3">Room-by-room renovation cost breakdown for flips and BRRRR.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-semibold text-gray-400">In development</span>
          </div>

          <div class="group bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col opacity-70 cursor-not-allowed relative">
            <div class="absolute top-3 right-3"><span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-gray-200 text-gray-600">Coming Soon</span></div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style="background: #94a3b8;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1 text-gray-500">BRRRR Refinance Calculator</h3>
              <p class="text-sm text-gray-400 leading-relaxed mb-3">Dedicated refi cash-out calculator for the "R" step of BRRRR.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-semibold text-gray-400">In development</span>
          </div>

        </div>
      </div>

      <!-- ── Section 3: Financing & Loans ── -->
      <div class="mb-12">
        <h2 class="text-xl font-extrabold mb-1" style="color: #1e3a5f;">Financing &amp; Loans</h2>
        <p class="text-gray-500 text-sm mb-6">Mortgage analysis, LTV, hard money, and closing cost tools for leveraged investors.</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          <NuxtLink to="/mortgage-calculator-investment"
            class="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-yellow-400 shadow-sm hover:shadow-md flex flex-col transition-all duration-200">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1" style="color: #1e3a5f;">Investment Property Mortgage Calculator</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">Project monthly PITI, rental cash flow, DSCR, and compare loan scenarios. Uses 2026 investor rates.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2" style="color: #f59e0b;">
              Calculate Now
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <div class="group bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col opacity-70 cursor-not-allowed relative">
            <div class="absolute top-3 right-3"><span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-gray-200 text-gray-600">Coming Soon</span></div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style="background: #94a3b8;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1 text-gray-500">LTV Calculator</h3>
              <p class="text-sm text-gray-400 leading-relaxed mb-3">Loan-to-Value ratio for acquisition and refinance scenarios.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-semibold text-gray-400">In development</span>
          </div>

          <div class="group bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col opacity-70 cursor-not-allowed relative">
            <div class="absolute top-3 right-3"><span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-gray-200 text-gray-600">Coming Soon</span></div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style="background: #94a3b8;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1 text-gray-500">Hard Money Loan Calculator</h3>
              <p class="text-sm text-gray-400 leading-relaxed mb-3">Short-term hard money costs, points, and total interest for flips.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-semibold text-gray-400">In development</span>
          </div>

          <div class="group bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col opacity-70 cursor-not-allowed relative">
            <div class="absolute top-3 right-3"><span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-gray-200 text-gray-600">Coming Soon</span></div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style="background: #94a3b8;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1 text-gray-500">Debt Yield Calculator</h3>
              <p class="text-sm text-gray-400 leading-relaxed mb-3">NOI/loan-amount ratio used by commercial lenders.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-semibold text-gray-400">In development</span>
          </div>

          <div class="group bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col opacity-70 cursor-not-allowed relative">
            <div class="absolute top-3 right-3"><span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-gray-200 text-gray-600">Coming Soon</span></div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style="background: #94a3b8;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1 text-gray-500">Closing Costs Calculator (Investor)</h3>
              <p class="text-sm text-gray-400 leading-relaxed mb-3">Estimated closing costs for investment purchases.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-semibold text-gray-400">In development</span>
          </div>

        </div>
      </div>

      <!-- ── Section 4: Returns & Analysis ── -->
      <div class="mb-12">
        <h2 class="text-xl font-extrabold mb-1" style="color: #1e3a5f;">Returns &amp; Analysis</h2>
        <p class="text-gray-500 text-sm mb-6">ROI, IRR, and buy-vs-rent tools for comprehensive investment evaluation.</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          <NuxtLink to="/property-cash-flow-calculator"
            class="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1" style="color: #1e3a5f;">Property Cash Flow Calculator</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">Cash Flow Verdict + Break-even Occupancy + DCR. Year 1 stabilized monthly cash flow with Composition Breakdown and Saved Scenarios.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all" style="color: #f59e0b;">
              Open Calculator <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <NuxtLink to="/real-estate-roi-calculator"
            class="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1" style="color: #1e3a5f;">Real Estate ROI Calculator</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">Verdict + Strategy Winner + Risk Score. Compare Rental, Flip, and BRRRR — get a Decision Engine verdict with IRR and capital payback.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all" style="color: #f59e0b;">
              Open Calculator <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <NuxtLink to="/rent-vs-buy-calculator"
            class="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-yellow-400 shadow-sm hover:shadow-md flex flex-col transition-all duration-200">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1" style="color: #1e3a5f;">Rent vs Buy Calculator</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">Financial comparison of renting vs. buying — break-even year, wealth gap, and 10-year projection.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2" style="color: #f59e0b;">
              Calculate Now
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <div class="group bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col opacity-70 cursor-not-allowed relative">
            <div class="absolute top-3 right-3"><span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-gray-200 text-gray-600">Coming Soon</span></div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style="background: #94a3b8;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1 text-gray-500">Real Estate IRR Calculator</h3>
              <p class="text-sm text-gray-400 leading-relaxed mb-3">Internal Rate of Return for multi-year investment analysis.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-semibold text-gray-400">In development</span>
          </div>

        </div>
      </div>

      <!-- ── Section 5: Tax & Exit Strategy ── -->
      <div class="mb-12">
        <h2 class="text-xl font-extrabold mb-1" style="color: #1e3a5f;">Tax &amp; Exit Strategy</h2>
        <p class="text-gray-500 text-sm mb-6">1031 exchanges, capital gains, and depreciation tools for tax-smart exits.</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          <NuxtLink to="/1031-exchange-calculator"
            class="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-yellow-400 shadow-sm hover:shadow-md flex flex-col transition-all duration-200">
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1" style="color: #1e3a5f;">1031 Exchange Calculator</h3>
              <p class="text-sm text-gray-500 leading-relaxed mb-3">Tax-deferred exchange analysis — basis, boot, depreciation recapture, and 45/180-day deadlines.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2" style="color: #f59e0b;">
              Open Calculator
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <div class="group bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col opacity-70 cursor-not-allowed relative">
            <div class="absolute top-3 right-3"><span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-gray-200 text-gray-600">Coming Soon</span></div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style="background: #94a3b8;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1 text-gray-500">Real Estate Capital Gains Tax Calculator</h3>
              <p class="text-sm text-gray-400 leading-relaxed mb-3">Short-term vs. long-term capital gains on property sales.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-semibold text-gray-400">In development</span>
          </div>

          <div class="group bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col opacity-70 cursor-not-allowed relative">
            <div class="absolute top-3 right-3"><span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-gray-200 text-gray-600">Coming Soon</span></div>
            <div class="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style="background: #94a3b8;">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-base mb-1 text-gray-500">Depreciation Calculator</h3>
              <p class="text-sm text-gray-400 leading-relaxed mb-3">Annual depreciation schedule for rental properties.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-semibold text-gray-400">In development</span>
          </div>

        </div>
      </div>

      <!-- How to pick a calculator -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h2 class="text-xl font-extrabold mb-6" style="color: #1e3a5f;">Which Calculator Do I Need?</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex gap-3">
            <span class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-extrabold text-white" style="background:#1e3a5f;">1</span>
            <div>
              <p class="font-semibold text-gray-800 text-sm">"I'm evaluating a rental property"</p>
              <p class="text-sm text-gray-500">Start with <NuxtLink to="/rental-property-calculator" class="font-semibold hover:underline" style="color:#f59e0b;">Rental Property</NuxtLink> or <NuxtLink to="/cap-rate-calculator" class="font-semibold hover:underline" style="color:#f59e0b;">Cap Rate</NuxtLink></p>
            </div>
          </div>
          <div class="flex gap-3">
            <span class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-extrabold text-white" style="background:#1e3a5f;">2</span>
            <div>
              <p class="font-semibold text-gray-800 text-sm">"I need to qualify for a DSCR loan"</p>
              <p class="text-sm text-gray-500">Use <NuxtLink to="/dscr-calculator" class="font-semibold hover:underline" style="color:#f59e0b;">DSCR Calculator</NuxtLink> + <NuxtLink to="/noi-calculator" class="font-semibold hover:underline" style="color:#f59e0b;">NOI Calculator</NuxtLink></p>
            </div>
          </div>
          <div class="flex gap-3">
            <span class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-extrabold text-white" style="background:#1e3a5f;">3</span>
            <div>
              <p class="font-semibold text-gray-800 text-sm">"I'm planning a fix &amp; flip"</p>
              <p class="text-sm text-gray-500">Use <NuxtLink to="/arv-calculator" class="font-semibold hover:underline" style="color:#f59e0b;">ARV</NuxtLink> then <NuxtLink to="/fix-and-flip-calculator" class="font-semibold hover:underline" style="color:#f59e0b;">Fix &amp; Flip</NuxtLink></p>
            </div>
          </div>
          <div class="flex gap-3">
            <span class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-extrabold text-white" style="background:#1e3a5f;">4</span>
            <div>
              <p class="font-semibold text-gray-800 text-sm">"I'm running a BRRRR deal"</p>
              <p class="text-sm text-gray-500">Use <NuxtLink to="/brrrr-calculator" class="font-semibold hover:underline" style="color:#f59e0b;">BRRRR Calculator</NuxtLink> + <NuxtLink to="/noi-calculator" class="font-semibold hover:underline" style="color:#f59e0b;">NOI</NuxtLink></p>
            </div>
          </div>
          <div class="flex gap-3">
            <span class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-extrabold text-white" style="background:#1e3a5f;">5</span>
            <div>
              <p class="font-semibold text-gray-800 text-sm">"I want to compare multiple deals across strategies"</p>
              <p class="text-sm text-gray-500">Use <NuxtLink to="/compare-real-estate-deals" class="font-semibold hover:underline" style="color:#f59e0b;">Compare Real Estate Deals</NuxtLink> — works for Rental vs BRRRR vs Flip</p>
            </div>
          </div>
          <div class="flex gap-3">
            <span class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-extrabold text-white" style="background:#1e3a5f;">6</span>
            <div>
              <p class="font-semibold text-gray-800 text-sm">"I want to know my actual cash yield"</p>
              <p class="text-sm text-gray-500">Use <NuxtLink to="/cash-on-cash-calculator" class="font-semibold hover:underline" style="color:#f59e0b;">Cash-on-Cash Return</NuxtLink></p>
            </div>
          </div>
          <div class="flex gap-3">
            <span class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-extrabold text-white" style="background:#1e3a5f;">7</span>
            <div>
              <p class="font-semibold text-gray-800 text-sm">"I want to know my investment mortgage payment"</p>
              <p class="text-sm text-gray-500">Use <NuxtLink to="/mortgage-calculator-investment" class="font-semibold hover:underline" style="color:#f59e0b;">Mortgage Calculator</NuxtLink> + <NuxtLink to="/dscr-calculator" class="font-semibold hover:underline" style="color:#f59e0b;">DSCR</NuxtLink> to pre-qualify</p>
            </div>
          </div>
        </div>
      </div>

    </main>

    <!-- FOOTER -->
    <footer class="mt-16 border-t border-gray-200 bg-white py-8 px-4">
      <div class="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-400">© 2026 RealCalc. For informational purposes only. Not financial advice.</p>
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
useHead({
  title: 'Free Real Estate Investment Calculators — RealCalc',
  meta: [
    { name: 'description', content: '30 free real estate investment calculators for US investors: rental property, cap rate, NOI, DSCR, cash-on-cash, fix & flip, ARV, BRRRR, compare real estate deals, and more. No signup required.' },
    { property: 'og:title', content: 'Free Real Estate Investment Calculators — RealCalc' },
    { property: 'og:description', content: '30 free real estate investment calculators for US investors. Instant results, PDF export, no signup.' },
    { name: 'robots', content: 'index, follow' },
  ]
})
</script>
