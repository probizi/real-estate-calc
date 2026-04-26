<template>
  <div class="min-h-screen bg-white">

    <!-- ═══════════════════════════════════════════════
         HEADER
    ═══════════════════════════════════════════════ -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: #1e3a5f;">
              <span class="text-white font-extrabold text-lg leading-none">RC</span>
            </div>
            <div class="leading-tight">
              <span class="block font-extrabold text-xl" style="color: #1e3a5f;">RealCalc</span>
              <span class="block text-xs font-medium text-gray-400 -mt-0.5">Investment Hub</span>
            </div>
          </NuxtLink>

          <!-- Desktop Nav -->
          <nav class="hidden md:flex items-center gap-8">
            <NuxtLink to="/calculators" class="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Calculators</NuxtLink>
            <NuxtLink to="/pricing"     class="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Pricing</NuxtLink>
            <NuxtLink to="/blog"        class="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Blog</NuxtLink>
          </nav>

          <!-- CTA -->
          <div class="flex items-center gap-3">
            <NuxtLink to="/login"   class="hidden md:inline text-sm font-semibold text-gray-600 hover:text-gray-900 transition">Sign in</NuxtLink>
            <NuxtLink to="/pricing" class="inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2.5 rounded-lg transition hover:opacity-90" style="background: #f59e0b; color: #1e3a5f;">
              Get Started Free
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- ═══════════════════════════════════════════════
         HERO
    ═══════════════════════════════════════════════ -->
    <section class="relative overflow-hidden text-white py-20 md:py-32 px-4" style="background: linear-gradient(135deg, #1e3a5f 0%, #16304f 50%, #0f2540 100%);">
      <!-- decorative blobs -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10" style="background: #f59e0b; filter: blur(80px);"></div>
        <div class="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-10" style="background: #f59e0b; filter: blur(80px);"></div>
      </div>

      <div class="max-w-6xl mx-auto relative">
        <!-- Badge -->
        <div class="flex justify-center mb-6">
          <span class="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border" style="border-color: rgba(245,158,11,0.4); background: rgba(245,158,11,0.1); color: #fcd34d;">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            Trusted by 25,000+ US Real Estate Investors
          </span>
        </div>

        <!-- H1 -->
        <h1 class="text-center text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          Free Real Estate<br/>
          <span style="color: #f59e0b;">Investment Calculators</span>
        </h1>

        <p class="text-center text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
          Analyze rental properties, flip deals, and BRRRR strategies in seconds.
          30 professional tools — 100% free, no signup required. Instant PDF reports.
        </p>

        <!-- Trust pills -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <span class="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border border-white/20 bg-white/10">
            <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Always Free
          </span>
          <span class="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border border-white/20 bg-white/10">
            <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            No Signup Required
          </span>
          <span class="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border border-white/20 bg-white/10">
            <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Real-Time Results
          </span>
          <span class="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border border-white/20 bg-white/10">
            <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            PDF Export
          </span>
        </div>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <NuxtLink to="/calculators"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition shadow-2xl hover:scale-105"
            style="background: #f59e0b; color: #1e3a5f;">
            Browse All Calculators
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </NuxtLink>
          <NuxtLink to="/rental-property-calculator"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/40 bg-white/10 hover:bg-white/20 transition">
            Try Rental Property Calculator
          </NuxtLink>
        </div>

        <!-- Stats row -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-extrabold mb-1" style="color: #f59e0b;">30</div>
            <div class="text-sm text-blue-200 font-medium">Free Calculators</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-extrabold mb-1" style="color: #f59e0b;">500K+</div>
            <div class="text-sm text-blue-200 font-medium">Calculations Done</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-extrabold mb-1" style="color: #f59e0b;">8</div>
            <div class="text-sm text-blue-200 font-medium">US States Covered</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-extrabold mb-1" style="color: #f59e0b;">4.9★</div>
            <div class="text-sm text-blue-200 font-medium">Investor Rating</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════
         PRIORITY 1 CALCULATORS
    ═══════════════════════════════════════════════ -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <span class="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full" style="background: rgba(30,58,95,0.08); color: #1e3a5f;">Essential Tools</span>
          <h2 class="text-4xl md:text-5xl font-extrabold mb-4" style="color: #1e3a5f;">Most Popular Calculators</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">30 free calculators used by 25,000+ US investors every day to analyze deals, qualify for loans, and build lasting wealth.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <!-- Rental Property -->
          <NuxtLink to="/rental-property-calculator"
            class="group bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold mb-2 transition" style="color: #1e3a5f;">Rental Property</h3>
              <p class="text-sm text-gray-500 mb-4 leading-relaxed">Complete cash flow analysis: income, expenses, NOI, cap rate &amp; ROI</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2" style="color: #f59e0b;">
              Calculate Now
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <!-- Cap Rate -->
          <NuxtLink to="/cap-rate-calculator"
            class="group bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold mb-2" style="color: #1e3a5f;">Cap Rate</h3>
              <p class="text-sm text-gray-500 mb-4 leading-relaxed">Measure investment return and compare properties using capitalization rate</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2" style="color: #f59e0b;">
              Calculate Now
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <!-- Cash-on-Cash -->
          <NuxtLink to="/cash-on-cash-calculator"
            class="group bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold mb-2" style="color: #1e3a5f;">Cash-on-Cash Return</h3>
              <p class="text-sm text-gray-500 mb-4 leading-relaxed">Calculate annual ROI on actual cash invested accounting for financing</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2" style="color: #f59e0b;">
              Calculate Now
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <!-- NOI -->
          <NuxtLink to="/noi-calculator"
            class="group bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold mb-2" style="color: #1e3a5f;">NOI Calculator</h3>
              <p class="text-sm text-gray-500 mb-4 leading-relaxed">Net Operating Income from gross income minus all operating expenses</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2" style="color: #f59e0b;">
              Calculate Now
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <!-- DSCR -->
          <NuxtLink to="/dscr-calculator"
            class="group bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold mb-2" style="color: #1e3a5f;">DSCR Calculator</h3>
              <p class="text-sm text-gray-500 mb-4 leading-relaxed">Qualify for investment financing with Debt Service Coverage Ratio analysis</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2" style="color: #f59e0b;">
              Calculate Now
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <!-- Fix & Flip -->
          <NuxtLink to="/fix-and-flip-calculator"
            class="group bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold mb-2" style="color: #1e3a5f;">Fix &amp; Flip</h3>
              <p class="text-sm text-gray-500 mb-4 leading-relaxed">Estimate flip profits with purchase price, rehab costs, ARV and holding costs</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2" style="color: #f59e0b;">
              Calculate Now
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <!-- ARV -->
          <NuxtLink to="/arv-calculator"
            class="group bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold mb-2" style="color: #1e3a5f;">ARV Calculator</h3>
              <p class="text-sm text-gray-500 mb-4 leading-relaxed">After Repair Value estimation for fix &amp; flip and BRRRR deals</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2" style="color: #f59e0b;">
              Calculate Now
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <!-- BRRRR -->
          <NuxtLink to="/brrrr-calculator"
            class="group bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold mb-2" style="color: #1e3a5f;">BRRRR Calculator</h3>
              <p class="text-sm text-gray-500 mb-4 leading-relaxed">Buy, Rehab, Rent, Refinance, Repeat — full BRRRR strategy analysis</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2" style="color: #f59e0b;">
              Calculate Now
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <!-- Compare Deals -->
          <NuxtLink to="/compare-real-estate-deals"
            class="group bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold mb-2" style="color: #1e3a5f;">Compare Real Estate Deals</h3>
              <p class="text-sm text-gray-500 mb-4 leading-relaxed">Compare up to 3 deals across Rental, Fix &amp; Flip, and BRRRR — get a Winner tier verdict with confidence level</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2" style="color: #f59e0b;">
              Compare Now
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <!-- Rental Property ROI -->
          <NuxtLink to="/rental-property-roi-calculator"
            class="group bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold mb-2" style="color: #1e3a5f;">Rental Property ROI</h3>
              <p class="text-sm text-gray-500 mb-4 leading-relaxed">Full lifetime ROI — cash flow, appreciation, equity build-up, and wealth projection over the hold period</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2" style="color: #f59e0b;">
              Calculate Now
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <!-- Mortgage Investment -->
          <NuxtLink to="/mortgage-calculator-investment"
            class="group bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold mb-2" style="color: #1e3a5f;">Investment Property Mortgage Calculator</h3>
              <p class="text-sm text-gray-500 mb-4 leading-relaxed">Project monthly PITI, rental cash flow, DSCR, and compare loan scenarios. Uses 2026 investor rates.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2" style="color: #f59e0b;">
              Calculate Now
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <!-- Rent vs Buy Calculator -->
          <NuxtLink to="/rent-vs-buy-calculator"
            class="group bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold mb-2" style="color: #1e3a5f;">Rent vs Buy Calculator</h3>
              <p class="text-sm text-gray-500 mb-4 leading-relaxed">Financial comparison of renting vs. buying — break-even year, wealth gap, and 10-year projection.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2" style="color: #f59e0b;">
              Calculate Now
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

          <!-- 70% Rule Calculator -->
          <NuxtLink to="/70-percent-rule-calculator"
            class="group bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 flex flex-col">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style="background: #1e3a5f;">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold mb-2" style="color: #1e3a5f;">70% Rule Calculator</h3>
              <p class="text-sm text-gray-500 mb-4 leading-relaxed">Quick flip offer calculator — maximum purchase price based on ARV and rehab costs.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2" style="color: #f59e0b;">
              Calculate Now
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>

        </div>

        <div class="text-center mt-10">
          <NuxtLink to="/calculators"
            class="inline-flex items-center gap-2 font-bold text-base px-8 py-4 rounded-xl text-white transition hover:opacity-90 shadow-lg"
            style="background: #1e3a5f;">
            View All 30 Calculators
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════
         HOW IT WORKS
    ═══════════════════════════════════════════════ -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <span class="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full" style="background: rgba(30,58,95,0.08); color: #1e3a5f;">Simple Process</span>
          <h2 class="text-4xl font-extrabold" style="color: #1e3a5f;">Analyze Any Deal in 3 Steps</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8 relative">
          <!-- connector line desktop -->
          <div class="hidden md:block absolute top-8 left-1/3 right-1/3 h-0.5" style="background: linear-gradient(to right, #f59e0b, #f59e0b); opacity: 0.3;"></div>

          <div class="text-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-6 shadow-lg text-white" style="background: #1e3a5f;">1</div>
            <h3 class="text-xl font-bold mb-3" style="color: #1e3a5f;">Choose Your Calculator</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Pick from 30 specialized tools — rental property, fix &amp; flip, BRRRR, DSCR, and more.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-6 shadow-lg text-white" style="background: #1e3a5f;">2</div>
            <h3 class="text-xl font-bold mb-3" style="color: #1e3a5f;">Enter Your Numbers</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Fill in property details and watch results update instantly in real time — no waiting.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-extrabold mx-auto mb-6 shadow-lg text-white" style="background: #1e3a5f;">3</div>
            <h3 class="text-xl font-bold mb-3" style="color: #1e3a5f;">Get Results &amp; Export PDF</h3>
            <p class="text-gray-600 text-sm leading-relaxed">See Good / Average / Poor analysis badge and export a professional PDF report for partners and lenders.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════
         WHY CHOOSE US
    ═══════════════════════════════════════════════ -->
    <section class="py-20 px-4" style="background: #f8fafc;">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Left text -->
          <div>
            <span class="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full" style="background: rgba(30,58,95,0.08); color: #1e3a5f;">Why RealCalc</span>
            <h2 class="text-4xl font-extrabold mb-6 leading-tight" style="color: #1e3a5f;">
              Built for Serious<br/> Real Estate Investors
            </h2>
            <p class="text-gray-600 mb-8 leading-relaxed">
              Every calculator is validated against industry standards from BiggerPockets, Investopedia, and institutional lending guidelines.
              Whether you're analyzing your first rental or managing a 100-unit portfolio — RealCalc gives you the numbers lenders and partners trust in 2026.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style="background: #f59e0b;">
                  <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span class="text-gray-700 font-medium">All 30 calculators 100% free — no limits, no credit card</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style="background: #f59e0b;">
                  <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span class="text-gray-700 font-medium">Real-time results with Good / Average / Poor deal rating</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style="background: #f59e0b;">
                  <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span class="text-gray-700 font-medium">2026 market data for CA, TX, FL, NY, AZ, GA, CO, WA</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style="background: #f59e0b;">
                  <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span class="text-gray-700 font-medium">Bank-ready PDF reports — white-label for brokers (Pro plan)</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style="background: #f59e0b;">
                  <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span class="text-gray-700 font-medium">Mobile-first — instant results on any device, anywhere</span>
              </li>
            </ul>
          </div>

          <!-- Right: feature cards -->
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style="background: rgba(30,58,95,0.08);">
                <svg class="w-5 h-5" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h4 class="font-bold text-sm mb-1" style="color: #1e3a5f;">Instant Results</h4>
              <p class="text-xs text-gray-500">Calculations update as you type — no submit button needed</p>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style="background: rgba(245,158,11,0.1);">
                <svg class="w-5 h-5" style="color: #f59e0b;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h4 class="font-bold text-sm mb-1" style="color: #1e3a5f;">Verified Formulas</h4>
              <p class="text-xs text-gray-500">Validated against BiggerPockets &amp; institutional standards</p>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style="background: rgba(30,58,95,0.08);">
                <svg class="w-5 h-5" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              </div>
              <h4 class="font-bold text-sm mb-1" style="color: #1e3a5f;">PDF Export</h4>
              <p class="text-xs text-gray-500">Professional reports for banks, partners, and clients</p>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style="background: rgba(245,158,11,0.1);">
                <svg class="w-5 h-5" style="color: #f59e0b;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/></svg>
              </div>
              <h4 class="font-bold text-sm mb-1" style="color: #1e3a5f;">State Market Data</h4>
              <p class="text-xs text-gray-500">Local benchmarks for 8 major US real estate markets</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════
         PRICING TEASER
    ═══════════════════════════════════════════════ -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <span class="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full" style="background: rgba(30,58,95,0.08); color: #1e3a5f;">Pricing</span>
          <h2 class="text-4xl font-extrabold mb-4" style="color: #1e3a5f;">Calculators Always Free.<br/>Reports &amp; History for Pros.</h2>
          <p class="text-gray-600 max-w-xl mx-auto">Unlock PDF reports, saved calculations, scenario comparison, and a full portfolio dashboard — built for serious investors in 2026.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <!-- Free -->
          <div class="rounded-2xl border border-gray-200 p-8 flex flex-col">
            <div class="mb-6">
              <div class="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Free</div>
              <div class="text-5xl font-extrabold mb-1" style="color: #1e3a5f;">$0</div>
              <div class="text-sm text-gray-400">Forever</div>
            </div>
            <ul class="space-y-3 flex-1 mb-8">
              <li class="flex items-center gap-2 text-sm text-gray-600"><svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg> All 30 calculators</li>
              <li class="flex items-center gap-2 text-sm text-gray-600"><svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg> Unlimited calculations</li>
              <li class="flex items-center gap-2 text-sm text-gray-600"><svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg> Real-time results</li>
              <li class="flex items-center gap-2 text-sm text-gray-400"><svg class="w-4 h-4 text-gray-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg> PDF reports</li>
              <li class="flex items-center gap-2 text-sm text-gray-400"><svg class="w-4 h-4 text-gray-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg> Saved calculations</li>
            </ul>
            <NuxtLink to="/calculators" class="block text-center font-bold py-3 px-6 rounded-xl border-2 transition hover:bg-gray-50 text-sm" style="border-color: #1e3a5f; color: #1e3a5f;">
              Start Free
            </NuxtLink>
          </div>

          <!-- Individual — highlighted -->
          <div class="rounded-2xl p-8 flex flex-col relative shadow-xl" style="background: #1e3a5f;">
            <div class="absolute -top-3 left-1/2 -translate-x-1/2">
              <span class="text-xs font-bold px-4 py-1.5 rounded-full" style="background: #f59e0b; color: #1e3a5f;">Most Popular</span>
            </div>
            <div class="mb-6">
              <div class="text-sm font-bold uppercase tracking-widest text-blue-300 mb-2">Individual</div>
              <div class="text-5xl font-extrabold text-white mb-1">$39<span class="text-2xl font-normal text-blue-300">/mo</span></div>
              <div class="text-sm text-blue-300">Billed monthly</div>
            </div>
            <ul class="space-y-3 flex-1 mb-8">
              <li class="flex items-center gap-2 text-sm text-blue-100"><svg class="w-4 h-4 flex-shrink-0" style="color: #f59e0b;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg> Everything in Free</li>
              <li class="flex items-center gap-2 text-sm text-blue-100"><svg class="w-4 h-4 flex-shrink-0" style="color: #f59e0b;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg> PDF reports &amp; export</li>
              <li class="flex items-center gap-2 text-sm text-blue-100"><svg class="w-4 h-4 flex-shrink-0" style="color: #f59e0b;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg> Save &amp; history</li>
              <li class="flex items-center gap-2 text-sm text-blue-100"><svg class="w-4 h-4 flex-shrink-0" style="color: #f59e0b;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg> Scenario analysis</li>
              <li class="flex items-center gap-2 text-sm text-blue-100"><svg class="w-4 h-4 flex-shrink-0" style="color: #f59e0b;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg> Portfolio dashboard</li>
            </ul>
            <NuxtLink to="/pricing" class="block text-center font-bold py-3 px-6 rounded-xl transition hover:opacity-90 text-sm" style="background: #f59e0b; color: #1e3a5f;">
              Get Individual Plan
            </NuxtLink>
          </div>

          <!-- Professional -->
          <div class="rounded-2xl border border-gray-200 p-8 flex flex-col">
            <div class="mb-6">
              <div class="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Professional</div>
              <div class="text-5xl font-extrabold mb-1" style="color: #1e3a5f;">$99<span class="text-2xl font-normal text-gray-400">/mo</span></div>
              <div class="text-sm text-gray-400">For brokers &amp; teams</div>
            </div>
            <ul class="space-y-3 flex-1 mb-8">
              <li class="flex items-center gap-2 text-sm text-gray-600"><svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg> Everything in Individual</li>
              <li class="flex items-center gap-2 text-sm text-gray-600"><svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg> White-label PDF</li>
              <li class="flex items-center gap-2 text-sm text-gray-600"><svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg> Up to 3 users</li>
              <li class="flex items-center gap-2 text-sm text-gray-600"><svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg> Client portal</li>
              <li class="flex items-center gap-2 text-sm text-gray-600"><svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg> Bank report templates</li>
            </ul>
            <NuxtLink to="/pricing" class="block text-center font-bold py-3 px-6 rounded-xl border-2 transition hover:bg-gray-50 text-sm" style="border-color: #1e3a5f; color: #1e3a5f;">
              Get Professional Plan
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════
         TESTIMONIALS
    ═══════════════════════════════════════════════ -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14">
          <span class="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full" style="background: rgba(30,58,95,0.08); color: #1e3a5f;">Investors Love RealCalc</span>
          <h2 class="text-4xl font-extrabold" style="color: #1e3a5f;">What Investors Are Saying</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl p-7 shadow-md border border-gray-100">
            <div class="flex gap-1 mb-4">
              <span v-for="i in 5" :key="i" class="text-yellow-400 text-lg">★</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-5">"Used the DSCR calculator before calling my lender — walked in knowing exactly my numbers. Got approved first try on a $480K investment property. This tool is invaluable."</p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm" style="background: #1e3a5f;">MR</div>
              <div>
                <div class="font-bold text-sm text-gray-900">Michael R.</div>
                <div class="text-xs text-gray-400">Rental investor · Austin, TX · 12 units</div>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-2xl p-7 shadow-md border border-gray-100">
            <div class="flex gap-1 mb-4">
              <span v-for="i in 5" :key="i" class="text-yellow-400 text-lg">★</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-5">"The Fix &amp; Flip calculator is incredibly detailed. I analyze 8–12 deals a week and RealCalc is my first stop every time. The Good/Poor badge alone has saved me from 3 bad deals."</p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm" style="background: #1e3a5f;">SL</div>
              <div>
                <div class="font-bold text-sm text-gray-900">Sarah L.</div>
                <div class="text-xs text-gray-400">Fix &amp; flip investor · Miami, FL · 20+ flips</div>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-2xl p-7 shadow-md border border-gray-100">
            <div class="flex gap-1 mb-4">
              <span v-for="i in 5" :key="i" class="text-yellow-400 text-lg">★</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed mb-5">"As a broker I use the Pro plan to send white-label reports to every client. It's professional, fast, and my clients always ask what software I use. Easiest $99/mo I spend."</p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm" style="background: #1e3a5f;">DK</div>
              <div>
                <div class="font-bold text-sm text-gray-900">David K.</div>
                <div class="text-xs text-gray-400">Real estate broker · Los Angeles, CA · $40M+ sold</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════
         FAQ
    ═══════════════════════════════════════════════ -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-14">
          <span class="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full" style="background: rgba(30,58,95,0.08); color: #1e3a5f;">FAQ</span>
          <h2 class="text-4xl font-extrabold" style="color: #1e3a5f;">Frequently Asked Questions</h2>
        </div>

        <div class="space-y-3">
          <details class="bg-gray-50 rounded-xl border border-gray-200 group overflow-hidden">
            <summary class="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-gray-900 text-base">
              Are these calculators really free forever?
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </summary>
            <p class="px-6 pb-5 text-gray-600 text-sm leading-relaxed">Yes — completely free, forever. All 30 calculators with unlimited calculations, no signup and no credit card required. The paid plans unlock PDF reports, saved history, and advanced features, but all calculations themselves remain free.</p>
          </details>

          <details class="bg-gray-50 rounded-xl border border-gray-200 group overflow-hidden">
            <summary class="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-gray-900 text-base">
              What is a good cap rate for rental property?
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </summary>
            <p class="px-6 pb-5 text-gray-600 text-sm leading-relaxed">A cap rate of 6–8% is generally considered good for residential rental properties in most US markets. In high-cost cities like NYC or LA, 4–5% is typical. In secondary markets like Midwest or parts of the South, 8–10%+ is achievable. Always compare to your local market benchmarks.</p>
          </details>

          <details class="bg-gray-50 rounded-xl border border-gray-200 group overflow-hidden">
            <summary class="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-gray-900 text-base">
              What DSCR do lenders require for investment properties?
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </summary>
            <p class="px-6 pb-5 text-gray-600 text-sm leading-relaxed">Most lenders require a minimum DSCR of 1.20–1.25 for investment property loans. A DSCR of 1.0 means income exactly covers debt payments. Anything above 1.25 is considered strong. Some DSCR loan programs allow as low as 1.0 for well-qualified borrowers.</p>
          </details>

          <details class="bg-gray-50 rounded-xl border border-gray-200 group overflow-hidden">
            <summary class="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-gray-900 text-base">
              What's the difference between cap rate and cash-on-cash return?
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </summary>
            <p class="px-6 pb-5 text-gray-600 text-sm leading-relaxed">Cap rate measures return based on property value (NOI ÷ Purchase Price) and ignores financing. Cash-on-cash return measures the annual cash flow relative to your actual cash invested (down payment + closing costs + rehab). Cash-on-cash is more useful for leveraged investments.</p>
          </details>

          <details class="bg-gray-50 rounded-xl border border-gray-200 group overflow-hidden">
            <summary class="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-gray-900 text-base">
              How does the BRRRR strategy work?
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </summary>
            <p class="px-6 pb-5 text-gray-600 text-sm leading-relaxed">BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. You buy a distressed property at a discount, renovate it to increase value, rent it out, then do a cash-out refinance to recover your invested capital. The goal is to recycle your money and build a portfolio with minimal additional capital.</p>
          </details>

          <details class="bg-gray-50 rounded-xl border border-gray-200 group overflow-hidden">
            <summary class="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-gray-900 text-base">
              Can I export a PDF report to share with my lender?
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </summary>
            <p class="px-6 pb-5 text-gray-600 text-sm leading-relaxed">Yes — PDF export is available on the Individual ($39/mo) and Professional ($99/mo) plans. Reports include all input data, calculated results, status assessment, and methodology notes. Professional plan users can add their own logo for white-label client reports.</p>
          </details>

          <details class="bg-gray-50 rounded-xl border border-gray-200 group overflow-hidden">
            <summary class="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-gray-900 text-base">
              Is it still a good time to invest in real estate in 2026?
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </summary>
            <p class="px-6 pb-5 text-gray-600 text-sm leading-relaxed">In 2026, real estate investing still offers strong long-term returns through appreciation, rental income, and tax advantages. Success depends on the deal, not the market year. Use our calculators to model realistic cash flows at today's rates — strong deals work in any environment. Focus on positive cash flow, adequate DSCR, and a conservative ARV when underwriting.</p>
          </details>

          <details class="bg-gray-50 rounded-xl border border-gray-200 group overflow-hidden">
            <summary class="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-gray-900 text-base">
              What is the 1% rule for rental properties?
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </summary>
            <p class="px-6 pb-5 text-gray-600 text-sm leading-relaxed">The 1% rule states that monthly rent should be at least 1% of the purchase price (e.g., a $200,000 property should rent for $2,000/month). It is a quick screening tool, not a definitive analysis. In high-cost markets like CA or NY, achieving 1% is rare — use our Rental Property Calculator for a full cash flow analysis that accounts for financing, vacancy, and expenses.</p>
          </details>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════
         FINAL CTA
    ═══════════════════════════════════════════════ -->
    <section class="py-24 px-4 text-white" style="background: linear-gradient(135deg, #1e3a5f 0%, #0f2540 100%);">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-5">Ready to Find Your Next Winner?</h2>
        <p class="text-lg text-blue-200 mb-10">Join 25,000+ US investors using free professional calculators to make smarter, data-driven decisions in 2026.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/calculators"
            class="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-lg transition hover:opacity-90 shadow-2xl hover:scale-105"
            style="background: #f59e0b; color: #1e3a5f;">
            Browse All Calculators
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </NuxtLink>
          <NuxtLink to="/rental-property-calculator"
            class="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-lg border-2 border-white/30 bg-white/10 hover:bg-white/20 transition">
            Start with Rental Property
          </NuxtLink>
        </div>
        <p class="mt-6 text-sm text-blue-300">No signup required · All calculators free forever · Instant results</p>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════
         FOOTER
    ═══════════════════════════════════════════════ -->
    <footer class="py-14 px-4" style="background: #0f2540;">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-5 gap-10 mb-10">
          <!-- Brand -->
          <div class="md:col-span-2">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: #1e3a5f; border: 1px solid rgba(245,158,11,0.3);">
                <span class="text-white font-extrabold text-lg">RC</span>
              </div>
              <span class="text-xl font-extrabold text-white">RealCalc</span>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">Professional real estate investment calculators for US investors. Free, accurate, instant.</p>
            <div class="flex gap-3">
              <span class="text-xs font-semibold px-3 py-1.5 rounded-full text-white" style="background: rgba(245,158,11,0.15); border: 1px solid rgba(245,158,11,0.3); color: #f59e0b;">Always Free</span>
              <span class="text-xs font-semibold px-3 py-1.5 rounded-full text-white" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);">No Signup</span>
            </div>
          </div>

          <!-- Calculators -->
          <div>
            <h3 class="font-bold text-white mb-4 text-sm uppercase tracking-wider">Calculators</h3>
            <ul class="space-y-2.5">
              <li><NuxtLink to="/rental-property-calculator" class="text-gray-400 hover:text-white text-sm transition">Rental Property</NuxtLink></li>
              <li><NuxtLink to="/cap-rate-calculator"        class="text-gray-400 hover:text-white text-sm transition">Cap Rate</NuxtLink></li>
              <li><NuxtLink to="/dscr-calculator"            class="text-gray-400 hover:text-white text-sm transition">DSCR</NuxtLink></li>
              <li><NuxtLink to="/noi-calculator"             class="text-gray-400 hover:text-white text-sm transition">NOI</NuxtLink></li>
              <li><NuxtLink to="/fix-and-flip-calculator"    class="text-gray-400 hover:text-white text-sm transition">Fix &amp; Flip</NuxtLink></li>
              <li><NuxtLink to="/arv-calculator"             class="text-gray-400 hover:text-white text-sm transition">ARV</NuxtLink></li>
              <li><NuxtLink to="/brrrr-calculator"           class="text-gray-400 hover:text-white text-sm transition">BRRRR</NuxtLink></li>
              <li><NuxtLink to="/compare-real-estate-deals"  class="text-gray-400 hover:text-white text-sm transition">Compare Real Estate Deals</NuxtLink></li>
              <li><NuxtLink to="/calculators"                class="font-semibold transition text-sm" style="color: #f59e0b;">View All 30 →</NuxtLink></li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h3 class="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul class="space-y-2.5">
              <li><NuxtLink to="/about"   class="text-gray-400 hover:text-white text-sm transition">About</NuxtLink></li>
              <li><NuxtLink to="/blog"    class="text-gray-400 hover:text-white text-sm transition">Blog</NuxtLink></li>
              <li><NuxtLink to="/pricing" class="text-gray-400 hover:text-white text-sm transition">Pricing</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-gray-400 hover:text-white text-sm transition">Contact</NuxtLink></li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h3 class="font-bold text-white mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul class="space-y-2.5">
              <li><NuxtLink to="/privacy" class="text-gray-400 hover:text-white text-sm transition">Privacy Policy</NuxtLink></li>
              <li><NuxtLink to="/terms"   class="text-gray-400 hover:text-white text-sm transition">Terms of Service</NuxtLink></li>
            </ul>
          </div>
        </div>

        <div class="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style="border-color: rgba(255,255,255,0.08);">
          <p class="text-gray-500 text-sm">© 2026 RealCalc. All calculators free forever. For US investors.</p>
          <p class="text-gray-600 text-xs">Not financial advice. Always consult a licensed professional.</p>
        </div>
      </div>
    </footer>

    <!-- JSON-LD: WebSite + FAQPage Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "name": "RealCalc — Real Estate Investment Calculator Hub",
          "description": "Free real estate investment calculators for US investors (2026). Cap Rate, DSCR, Rental Property, Fix & Flip, BRRRR, ARV, NOI, Cash-on-Cash and 30 tools total. Trusted by 25,000+ investors.",
          "url": "https://arvcalc.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://arvcalc.com/calculators?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Are these real estate calculators really free forever?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes — completely free, forever. All 30 calculators with unlimited calculations, no signup and no credit card required. PDF reports and saved history are available on paid plans."
              }
            },
            {
              "@type": "Question",
              "name": "What is a good cap rate for rental property in 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A cap rate of 6–8% is generally considered good for residential rental properties in most US markets in 2026. In high-cost cities like NYC or LA, 4–5% is typical. In secondary markets, 8–10%+ is achievable."
              }
            },
            {
              "@type": "Question",
              "name": "What DSCR do lenders require for investment properties?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most lenders require a minimum DSCR of 1.20–1.25 for investment property loans. A DSCR of 1.0 means income exactly covers debt payments. Anything above 1.25 is considered strong."
              }
            },
            {
              "@type": "Question",
              "name": "What is the difference between cap rate and cash-on-cash return?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Cap rate measures return based on property value ignoring financing. Cash-on-cash measures annual cash flow relative to actual cash invested including down payment and closing costs."
              }
            },
            {
              "@type": "Question",
              "name": "Is it still a good time to invest in real estate in 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In 2026, real estate investing still offers strong long-term returns through appreciation, rental income, and tax advantages. Success depends on the deal, not the market year. Use our calculators to model realistic cash flows at today's rates."
              }
            },
            {
              "@type": "Question",
              "name": "What is the 1% rule for rental properties?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The 1% rule states that monthly rent should be at least 1% of the purchase price. It is a quick screening tool — use our Rental Property Calculator for a full cash flow analysis that accounts for financing, vacancy, and expenses."
              }
            }
          ]
        }
      ]
    }
    </script>

  </div>
</template>

<script setup>
useHead({
  title: 'Free Real Estate Investment Calculators 2026 | Cap Rate, DSCR, Rental Property & More — RealCalc',
  meta: [
    {
      name: 'description',
      content: 'Free real estate investment calculators for US investors (2026). Calculate cap rate, DSCR, cash-on-cash, NOI, fix & flip profit, ARV, BRRRR and more — 30 tools total. Instant results, no signup required.'
    },
    { name: 'keywords', content: 'real estate calculator 2026, cap rate calculator, DSCR calculator, rental property calculator, fix and flip calculator, BRRRR calculator, NOI calculator, cash on cash return calculator, ARV calculator, real estate investment analysis, free real estate tools' },
    { property: 'og:title', content: 'Free Real Estate Investment Calculators 2026 — RealCalc' },
    { property: 'og:description', content: 'Professional real estate investment calculators for US investors. 30 free tools: cap rate, DSCR, rental property, fix & flip, BRRRR, ARV, NOI and more. Trusted by 25,000+ investors.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Free Real Estate Investment Calculators 2026 — RealCalc' },
    { name: 'twitter:description', content: '30 free real estate investment calculators for US investors. Trusted by 25,000+ investors. No signup required.' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'RealCalc' }
  ],
  link: [
    { rel: 'canonical', href: 'https://arvcalc.com/' }
  ]
})
</script>
