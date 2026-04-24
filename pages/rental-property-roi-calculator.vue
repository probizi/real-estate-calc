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
            <li class="text-gray-700 font-semibold">Rental Property ROI Calculator</li>
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
          <span class="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">Free Calculator</span>
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            Rental Property ROI Calculator — Long-Term Wealth Projection Tool
          </h1>
          <p class="text-gray-500 text-base mt-2">Project total wealth over 1–30 year holds — Wealth Waterfall, IRR, and Wealth Break-Even Hold Period</p>
        </div>
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            <li><a href="#what-is" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is Rental ROI</a></li>
            <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
            <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
            <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
            <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Use Cases</a></li>
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
              <li><a href="#what-is" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is Rental ROI</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
              <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
              <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
              <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Use Cases</a></li>
              <li><a href="#industry-standards" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Industry Standards</a></li>
              <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
              <li><a href="#common-mistakes" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Common Mistakes</a></li>
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
         CALCULATOR
    ═══════════════════════════════════════════════ -->
    <div id="calculator" class="max-w-[1100px] mx-auto px-4 sm:px-6 py-8">

      <!-- MODE TABS -->
      <div class="flex gap-2 mb-6 flex-wrap">
        <button @click="calcMode = 'forward'"
          :class="calcMode === 'forward' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'"
          class="px-4 py-2.5 rounded-xl font-semibold text-sm border-2 transition flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          Forward ROI
        </button>
        <button @click="calcMode = 'sensitivity'"
          :class="calcMode === 'sensitivity' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'"
          class="px-4 py-2.5 rounded-xl font-semibold text-sm border-2 transition flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18M10 3v18"/></svg>
          Hold Period Sensitivity
        </button>
        <button @click="calcMode = 'compare'"
          :class="calcMode === 'compare' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-300'"
          class="px-4 py-2.5 rounded-xl font-semibold text-sm border-2 transition flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
          Compare Sell Years
        </button>
      </div>

      <div class="grid lg:grid-cols-[3fr_2fr] gap-6 items-stretch">

        <!-- ── LEFT: INPUT FORM ── -->
        <div class="space-y-4">

          <!-- Warning banners -->
          <div v-if="form.holdPeriod <= 3 && form.holdPeriod > 0" class="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex gap-2 text-sm text-amber-800">
            <svg class="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            <span><strong>Short Hold Warning:</strong> Hold periods ≤3 years are heavily skewed by selling costs and sale tax. Results may not reflect long-term rental economics.
              <span v-if="form.holdPeriod === 1"> For Hold = 1 year, sale tax is approximate — actual treatment may be short-term capital gains at ordinary income rates depending on exact closing dates.</span>
            </span>
          </div>
          <div v-if="form.appreciation > 6" class="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex gap-2 text-sm text-amber-800">
            <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            <span><strong>Aggressive appreciation assumption.</strong> US historical average is 3–4%. Consider running the Conservative scenario.</span>
          </div>
          <div v-if="form.rentGrowth > 6" class="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex gap-2 text-sm text-amber-800">
            <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            <span><strong>Aggressive rent growth assumption.</strong> US rental market average is 2–4%. Consider running the Conservative scenario.</span>
          </div>
          <div v-if="form.vacancy < 5 && form.vacancy !== null" class="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex gap-2 text-sm text-amber-800">
            <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            <span><strong>Very optimistic vacancy assumption.</strong> US average is 6–8%.</span>
          </div>
          <div v-if="form.purchasePrice > 0 && form.purchasePrice < 10000" class="bg-red-50 border border-red-300 rounded-xl px-4 py-3 flex gap-2 text-sm text-red-800">
            <svg class="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            <span><strong>Purchase price appears too low.</strong> US residential real estate is typically $50,000+. If you meant ${{ (form.purchasePrice * 1000).toLocaleString('en-US') }}, please re-enter the full amount (e.g., enter 300000 for $300,000).</span>
          </div>

          <!-- Acquisition -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h2 class="text-base font-bold mb-4" style="color:#1e3a5f;">Acquisition</h2>
            <div class="grid sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">Purchase Price</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                  <input v-model.number="form.purchasePrice" type="number" min="0" placeholder="Enter purchase price"
                    class="w-full pl-7 pr-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition" />
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">Down Payment %</label>
                <div class="relative">
                  <input v-model.number="form.downPayment" type="number" min="0" max="100" placeholder="25"
                    class="w-full pr-8 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">Closing Costs %</label>
                <div class="relative">
                  <input v-model.number="form.closingCosts" type="number" min="0" max="20" placeholder="2"
                    class="w-full pr-8 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">Initial Rehab Budget</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                  <input v-model.number="form.rehab" type="number" min="0" placeholder="0 if turnkey"
                    class="w-full pl-7 pr-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition" />
                </div>
              </div>
            </div>
          </div>

          <!-- Financing -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h2 class="text-base font-bold mb-4" style="color:#1e3a5f;">Financing</h2>
            <div class="grid sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">Loan Rate %</label>
                <div class="relative">
                  <input v-model.number="form.loanRate" type="number" min="0" max="30" step="0.1" placeholder="7.5"
                    class="w-full pr-8 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">Loan Term (years)</label>
                <input v-model.number="form.loanTerm" type="number" min="1" max="40" placeholder="30"
                  class="w-full px-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition" />
              </div>
              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-gray-500 mb-1">Loan Type</label>
                <select v-model="form.loanType"
                  class="w-full px-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition bg-white">
                  <option value="conventional">Conventional</option>
                  <option value="dscr">DSCR</option>
                  <option value="portfolio">Portfolio</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Rental Income -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h2 class="text-base font-bold mb-4" style="color:#1e3a5f;">Rental Income</h2>
            <div class="grid sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">Monthly Rent</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                  <input v-model.number="form.monthlyRent" type="number" min="0" placeholder="Enter monthly rent"
                    class="w-full pl-7 pr-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition" />
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">Vacancy %</label>
                <div class="relative">
                  <input v-model.number="form.vacancy" type="number" min="0" max="50" placeholder="8"
                    class="w-full pr-8 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">Annual Rent Growth %</label>
                <div class="relative">
                  <input v-model.number="form.rentGrowth" type="number" min="0" max="20" step="0.5" placeholder="3"
                    class="w-full pr-8 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">OpEx % of Rent</label>
                <div class="relative">
                  <input v-model.number="form.opex" type="number" min="0" max="90" placeholder="35"
                    class="w-full pr-8 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Appreciation & Hold Period -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h2 class="text-base font-bold mb-4" style="color:#1e3a5f;">Appreciation &amp; Hold Period</h2>
            <div class="grid sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">Annual Appreciation %</label>
                <div class="relative">
                  <input v-model.number="form.appreciation" type="number" min="0" max="20" step="0.5" placeholder="3"
                    class="w-full pr-8 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">
                  Hold Period (years)
                  <span v-if="calcMode !== 'sensitivity'" class="font-normal text-gray-400">1–30</span>
                  <span v-else class="font-normal text-gray-400">used for Mode 1</span>
                </label>
                <input v-model.number="form.holdPeriod" type="number" min="1" max="30" placeholder="10"
                  class="w-full px-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition" />
              </div>
            </div>
          </div>

          <!-- Mode 3: Compare Sell Years -->
          <div v-if="calcMode === 'compare'" class="bg-white rounded-2xl shadow-sm border border-emerald-200 p-5">
            <h2 class="text-base font-bold mb-3" style="color:#065f46;">Compare Two Sell Years</h2>
            <div class="grid sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">Sell Year A</label>
                <input v-model.number="form.sellYearA" type="number" min="1" max="30" placeholder="7"
                  class="w-full px-3 py-2.5 rounded-xl border-2 border-emerald-300 hover:border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/40 text-sm outline-none transition" />
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">Sell Year B</label>
                <input v-model.number="form.sellYearB" type="number" min="1" max="30" placeholder="15"
                  class="w-full px-3 py-2.5 rounded-xl border-2 border-emerald-300 hover:border-emerald-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/40 text-sm outline-none transition" />
              </div>
            </div>
          </div>

          <!-- Tax Parameters (Advanced, collapsed) -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <button @click="showAdvanced = !showAdvanced" class="flex items-center gap-2 w-full text-left">
              <svg class="w-4 h-4 text-gray-400 transition-transform duration-200" :class="showAdvanced ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
              <span class="text-base font-bold" style="color:#1e3a5f;">Tax Parameters</span>
              <span class="text-xs text-gray-400 font-normal ml-1">(Advanced — defaults are standard for most investors)</span>
            </button>
            <div v-show="showAdvanced" class="mt-4 grid sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">Marginal Tax Rate %</label>
                <div class="relative">
                  <input v-model.number="form.marginalTax" type="number" min="0" max="60" placeholder="24"
                    class="w-full pr-8 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">Land Value % of Purchase</label>
                <div class="relative">
                  <input v-model.number="form.landValue" type="number" min="0" max="90" placeholder="20"
                    class="w-full pr-8 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">Selling Cost %</label>
                <div class="relative">
                  <input v-model.number="form.sellingCost" type="number" min="0" max="20" placeholder="7"
                    class="w-full pr-8 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-gray-500 mb-1">Federal LTCG Rate %</label>
                <div class="relative">
                  <input v-model.number="form.fedLTCG" type="number" min="0" max="25" placeholder="15"
                    class="w-full pr-8 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
              </div>
              <div class="sm:col-span-2">
                <label class="block text-xs font-semibold text-gray-500 mb-1">State Capital Gains %</label>
                <div class="relative">
                  <input v-model.number="form.stateCG" type="number" min="0" max="20" placeholder="0"
                    class="w-full pr-8 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 text-sm outline-none transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">e.g. CA = 9.3%, TX/FL/NV = 0%</p>
              </div>
            </div>
          </div>

        </div><!-- /Left col -->

        <!-- ── RIGHT: RESULTS PANEL ── -->
        <div class="lg:sticky lg:top-[4.5rem] lg:overflow-y-auto lg:max-h-[calc(100vh-5.5rem)] lg:pr-1">
          <div class="space-y-4">

          <!-- No inputs state -->
          <div v-if="!hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
            <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3" style="background:#f0f4ff;">
              <svg class="w-7 h-7" fill="none" stroke="#4f46e5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            </div>
            <p class="text-sm font-semibold text-gray-500">Enter purchase price and monthly rent to see your lifetime wealth projection</p>
            <p class="text-xs text-gray-400 mt-1">Wealth Waterfall, Total ROI, and Annualized Return (IRR)</p>
          </div>

          <!-- ── MODE 1: FORWARD ROI RESULTS ── -->
          <div v-if="result && calcMode === 'forward'" class="space-y-4">

            <!-- Primary Metrics Row -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {{ f.holdPeriod }}-Year Wealth Projection
                </span>
                <span class="px-2 py-0.5 rounded-full text-xs font-bold"
                  :class="roiTierClass">{{ roiTierLabel }}</span>
              </div>
              <div class="grid grid-cols-2 gap-3 mb-4">
                <div class="bg-gray-50 rounded-xl p-3">
                  <p class="text-xs text-gray-400 mb-0.5">Initial Cash</p>
                  <p class="text-lg font-extrabold" style="color:#1e3a5f;">{{ formatCurrency(result.initialCash) }}</p>
                </div>
                <div class="bg-gray-50 rounded-xl p-3">
                  <p class="text-xs text-gray-400 mb-0.5">Total Wealth Created</p>
                  <p class="text-lg font-extrabold" :class="result.totalWealth >= 0 ? 'text-indigo-700' : 'text-red-600'">{{ formatCurrency(result.totalWealth) }}</p>
                </div>
                <div class="bg-indigo-50 rounded-xl p-3 border border-indigo-100">
                  <p class="text-xs text-indigo-500 mb-0.5">Total ROI %</p>
                  <p class="text-2xl font-extrabold" :class="result.totalROI >= 0 ? 'text-indigo-700' : 'text-red-600'">{{ result.totalROI.toFixed(1) }}%</p>
                </div>
                <div class="rounded-xl p-3 border" :class="irrDisplayClass">
                  <p class="text-xs mb-0.5" :class="result.irrApproximated ? 'text-amber-500' : 'text-indigo-500'">Annualized Return (IRR)</p>
                  <p class="text-2xl font-extrabold" :class="result.irr >= 0 ? 'text-indigo-700' : 'text-red-600'">
                    {{ result.irr.toFixed(1) }}%
                    <span v-if="result.irrApproximated" class="text-xs font-normal text-amber-600 ml-1" title="IRR approximated using CAGR due to irregular cash flow pattern">ⓘ approx.</span>
                  </p>
                </div>
              </div>

              <!-- Negative IRR banner -->
              <div v-if="result.irr < 0" class="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700 mb-3">
                <strong>Negative Annualized Return:</strong> This deal projects a loss over {{ f.holdPeriod }} years. IRR is negative, meaning cash in a savings account would likely perform better. Review appreciation, rent, and rehab assumptions.
              </div>

              <!-- Wealth Break-Even -->
              <div class="bg-gray-50 rounded-xl p-3 flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p class="text-xs text-gray-400">Wealth Break-Even Hold Period</p>
                  <p class="font-bold text-sm text-indigo-700">
                    {{ result.wealthBreakEven ? 'Year ' + result.wealthBreakEven : 'Beyond 30 years' }}
                  </p>
                </div>
              </div>

              <!-- Year 1 CoC -->
              <div class="mt-3 bg-gray-50 rounded-xl p-3">
                <p class="text-xs text-gray-400 mb-0.5">Year 1 Cash-on-Cash Return</p>
                <p class="font-bold text-sm" :class="result.yr1CoC >= 6 ? 'text-green-600' : result.yr1CoC >= 3 ? 'text-amber-600' : 'text-red-600'">{{ result.yr1CoC.toFixed(2) }}%</p>
              </div>
            </div>

            <!-- Wealth Waterfall Chart -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 class="text-sm font-bold mb-4" style="color:#1e3a5f;">Wealth Waterfall — Where the Return Comes From</h3>
              <div class="space-y-2.5">
                <!-- Cash Flow -->
                <div>
                  <div class="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Pre-Tax Cumulative Cash Flow</span>
                    <span class="font-semibold" :class="result.wf.cashFlow >= 0 ? 'text-blue-600' : 'text-red-500'">{{ formatCurrency(result.wf.cashFlow) }}</span>
                  </div>
                  <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div class="h-3 bg-blue-400 rounded-full transition-all duration-500"
                      :style="'width:' + Math.max(1, Math.abs(result.wf.cashFlow) / waterfallMax * 100).toFixed(1) + '%'"></div>
                  </div>
                </div>
                <!-- Principal Paydown -->
                <div>
                  <div class="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Principal Paydown</span>
                    <span class="font-semibold text-indigo-600">{{ formatCurrency(result.wf.principalPaydown) }}</span>
                  </div>
                  <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div class="h-3 bg-indigo-400 rounded-full transition-all duration-500"
                      :style="'width:' + (result.wf.principalPaydown / waterfallMax * 100).toFixed(1) + '%'"></div>
                  </div>
                </div>
                <!-- Appreciation -->
                <div>
                  <div class="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Appreciation</span>
                    <span class="font-semibold text-emerald-600">{{ formatCurrency(result.wf.appreciation) }}</span>
                  </div>
                  <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div class="h-3 bg-emerald-400 rounded-full transition-all duration-500"
                      :style="'width:' + (result.wf.appreciation / waterfallMax * 100).toFixed(1) + '%'"></div>
                  </div>
                </div>
                <!-- Estimated Depreciation Benefit -->
                <div>
                  <div class="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Estimated Depreciation Benefit</span>
                    <span class="font-semibold text-amber-600">{{ formatCurrency(result.wf.deprBenefit) }}</span>
                  </div>
                  <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div class="h-3 bg-amber-400 rounded-full transition-all duration-500"
                      :style="'width:' + (result.wf.deprBenefit / waterfallMax * 100).toFixed(1) + '%'"></div>
                  </div>
                </div>
                <!-- Sale Tax (negative) -->
                <div>
                  <div class="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Sale Tax (Recapture + LTCG)</span>
                    <span class="font-semibold text-red-500">−{{ formatCurrency(result.wf.saleTax) }}</span>
                  </div>
                  <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div class="h-3 bg-red-400 rounded-full transition-all duration-500"
                      :style="'width:' + (result.wf.saleTax / waterfallMax * 100).toFixed(1) + '%'"></div>
                  </div>
                  <div class="flex justify-between text-xs text-gray-400 mt-0.5">
                    <span>Recapture (25%): {{ formatCurrency(result.wf.recaptureTax) }}</span>
                    <span>LTCG: {{ formatCurrency(result.wf.ltcgTax) }}</span>
                  </div>
                </div>
                <!-- Total Wealth -->
                <div class="border-t border-gray-200 pt-2 mt-1">
                  <div class="flex justify-between text-sm font-bold">
                    <span style="color:#1e3a5f;">Total Wealth Created</span>
                    <span :class="result.totalWealth >= 0 ? 'text-indigo-700' : 'text-red-600'">{{ formatCurrency(result.totalWealth) }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Year-by-Year Equity Chart -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 class="text-sm font-bold mb-3" style="color:#1e3a5f;">Year-by-Year Equity Position</h3>
              <div class="overflow-x-auto">
                <svg :width="Math.max(280, (f.holdPeriod) * 30)" height="120" class="min-w-full">
                  <!-- Grid lines -->
                  <line v-for="i in 5" :key="'gl'+i"
                    :x1="0" :y1="110 - (i-1) * 22"
                    :x2="Math.max(280, (f.holdPeriod) * 30)" :y2="110 - (i-1) * 22"
                    stroke="#f0f0f0" stroke-width="1"/>
                  <!-- Cash Flow line -->
                  <polyline v-if="equityChartPoints.cf.length > 1"
                    :points="equityChartPoints.cf.join(' ')"
                    fill="none" stroke="#60a5fa" stroke-width="2"/>
                  <!-- Principal Paydown line -->
                  <polyline v-if="equityChartPoints.pp.length > 1"
                    :points="equityChartPoints.pp.join(' ')"
                    fill="none" stroke="#818cf8" stroke-width="2"/>
                  <!-- Appreciation line -->
                  <polyline v-if="equityChartPoints.app.length > 1"
                    :points="equityChartPoints.app.join(' ')"
                    fill="none" stroke="#34d399" stroke-width="2"/>
                </svg>
              </div>
              <div class="flex gap-4 mt-2 flex-wrap">
                <div class="flex items-center gap-1 text-xs text-gray-500"><span class="w-3 h-0.5 bg-blue-400 inline-block"></span>Cash Flow</div>
                <div class="flex items-center gap-1 text-xs text-gray-500"><span class="w-3 h-0.5 bg-indigo-400 inline-block"></span>Principal Paydown</div>
                <div class="flex items-center gap-1 text-xs text-gray-500"><span class="w-3 h-0.5 bg-emerald-400 inline-block"></span>Appreciation</div>
              </div>
            </div>

            <!-- Scenarios -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 class="text-sm font-bold mb-3" style="color:#1e3a5f;">Scenarios</h3>
              <div v-if="irrSensitiveWarning" class="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs text-amber-700 mb-3">
                <strong>IRR Sensitive to Assumptions</strong> — Conservative vs Optimistic IRR delta &gt;3 pp. Results highly dependent on appreciation and rent growth assumptions.
              </div>
              <div class="flex gap-2 mb-3">
                <button v-for="s in ['conservative','base','optimistic']" :key="s"
                  @click="activeScenario = s"
                  :class="activeScenario === s ? (s === 'conservative' ? 'bg-red-100 border-red-300 text-red-700' : s === 'optimistic' ? 'bg-green-100 border-green-300 text-green-700' : 'bg-indigo-100 border-indigo-300 text-indigo-700') : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-gray-300'"
                  class="flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold border-2 transition capitalize">
                  {{ s }}
                </button>
              </div>
              <div v-if="scenarioResult" class="grid grid-cols-2 gap-2 text-xs">
                <div class="bg-gray-50 rounded-lg p-2">
                  <p class="text-gray-400">Total ROI</p>
                  <p class="font-bold text-gray-700">{{ scenarioResult.totalROI.toFixed(1) }}%</p>
                </div>
                <div class="bg-gray-50 rounded-lg p-2">
                  <p class="text-gray-400">IRR</p>
                  <p class="font-bold text-gray-700">{{ scenarioResult.irr.toFixed(1) }}%</p>
                </div>
                <div class="bg-gray-50 rounded-lg p-2">
                  <p class="text-gray-400">Total Wealth</p>
                  <p class="font-bold text-gray-700">{{ formatCurrency(scenarioResult.totalWealth) }}</p>
                </div>
                <div class="bg-gray-50 rounded-lg p-2">
                  <p class="text-gray-400">Break-Even</p>
                  <p class="font-bold text-gray-700">{{ scenarioResult.wealthBreakEven ? 'Yr ' + scenarioResult.wealthBreakEven : '>30yr' }}</p>
                </div>
              </div>
              <div v-if="activeScenario === 'conservative'" class="text-xs text-gray-400 mt-2">Appreciation −2pp, Rent Growth −1pp, Vacancy +5pp, OpEx +5pp</div>
              <div v-if="activeScenario === 'optimistic'" class="text-xs text-gray-400 mt-2">Appreciation +1pp, Rent Growth +1pp, Vacancy −2pp, OpEx −2pp</div>
            </div>

            <!-- Sensitivity Table 1 -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 class="text-sm font-bold mb-3" style="color:#1e3a5f;">Total ROI % — Appreciation × Rent Growth</h3>
              <div class="overflow-x-auto">
                <table class="text-xs w-full">
                  <thead>
                    <tr class="text-gray-400">
                      <th class="py-1 pr-2 text-left font-medium">App \ RG</th>
                      <th v-for="rg in [0,1,2,3,4,5]" :key="'rg'+rg" class="py-1 px-1 text-center font-medium">{{ rg }}%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="app in [0,1,2,3,4,5,6]" :key="'app'+app">
                      <td class="py-1 pr-2 font-semibold text-gray-500">{{ app }}%</td>
                      <td v-for="rg in [0,1,2,3,4,5]" :key="'cell'+app+rg"
                        class="py-1 px-1 text-center rounded"
                        :class="(app === f.appreciation && rg === f.rentGrowth) ? 'bg-indigo-100 text-indigo-700 font-bold ring-2 ring-indigo-300' : sensitivityTable1[app][rg] >= 220 ? 'text-green-700' : sensitivityTable1[app][rg] >= 120 ? 'text-blue-700' : sensitivityTable1[app][rg] >= 60 ? 'text-amber-600' : 'text-red-600'">
                        {{ sensitivityTable1[app][rg] !== null ? sensitivityTable1[app][rg].toFixed(0) + '%' : '—' }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Sensitivity Table 2 -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 class="text-sm font-bold mb-3" style="color:#1e3a5f;">Annualized IRR — Hold Period × Appreciation</h3>
              <div class="overflow-x-auto">
                <table class="text-xs w-full">
                  <thead>
                    <tr class="text-gray-400">
                      <th class="py-1 pr-2 text-left font-medium">Hold \ App</th>
                      <th v-for="app in [1,2,3,4,5]" :key="'ta'+app" class="py-1 px-1 text-center font-medium">{{ app }}%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="hold in [5,10,15,20,25,30]" :key="'hold'+hold">
                      <td class="py-1 pr-2 font-semibold text-gray-500">{{ hold }}Y</td>
                      <td v-for="app in [1,2,3,4,5]" :key="'cell2'+hold+app"
                        class="py-1 px-1 text-center rounded"
                        :class="sensitivityTable2[hold][app] >= 13 ? 'text-green-700' : sensitivityTable2[hold][app] >= 9 ? 'text-blue-700' : sensitivityTable2[hold][app] >= 6 ? 'text-amber-600' : 'text-red-600'">
                        {{ sensitivityTable2[hold][app] !== null ? sensitivityTable2[hold][app].toFixed(1) + '%' : '—' }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Sensitivity Table 3 -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 class="text-sm font-bold mb-3" style="color:#1e3a5f;">Total ROI % — Leverage × Hold Period</h3>
              <div class="overflow-x-auto">
                <table class="text-xs w-full">
                  <thead>
                    <tr class="text-gray-400">
                      <th class="py-1 pr-2 text-left font-medium">Down \ Hold</th>
                      <th v-for="hold in [5,10,15,20]" :key="'th'+hold" class="py-1 px-1 text-center font-medium">{{ hold }}Y</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="dp in [15,20,25,30,40,50]" :key="'dp'+dp">
                      <td class="py-1 pr-2 font-semibold text-gray-500">{{ dp }}%</td>
                      <td v-for="hold in [5,10,15,20]" :key="'cell3'+dp+hold"
                        class="py-1 px-1 text-center rounded"
                        :class="sensitivityTable3[dp][hold] >= 220 ? 'text-green-700' : sensitivityTable3[dp][hold] >= 120 ? 'text-blue-700' : sensitivityTable3[dp][hold] >= 60 ? 'text-amber-600' : 'text-red-600'">
                        {{ sensitivityTable3[dp][hold] !== null ? sensitivityTable3[dp][hold].toFixed(0) + '%' : '—' }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div><!-- /Mode 1 results -->

          <!-- ── MODE 2: HOLD SENSITIVITY ── -->
          <div v-if="result && calcMode === 'sensitivity'" class="bg-white rounded-2xl shadow-sm border border-blue-100 p-5">
            <h3 class="text-sm font-bold mb-4 text-blue-700">Hold Period Sensitivity — When Should You Sell?</h3>
            <div class="overflow-x-auto">
              <table class="text-xs w-full">
                <thead>
                  <tr class="border-b border-gray-200">
                    <th class="py-2 text-left text-gray-400 font-medium pr-3">Metric</th>
                    <th v-for="y in [5,10,15,20,25,30]" :key="'sh'+y"
                      class="py-2 px-1 text-center font-semibold"
                      :class="sensitivityOptimalYear === y ? 'text-indigo-700' : 'text-gray-500'">
                      {{ y }}Y
                      <span v-if="sensitivityOptimalYear === y" class="block text-indigo-500 text-[10px] font-bold">★ Optimal</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr>
                    <td class="py-2 pr-3 text-gray-500 font-medium">Total ROI %</td>
                    <td v-for="y in [5,10,15,20,25,30]" :key="'roi'+y"
                      class="py-2 px-1 text-center font-semibold"
                      :class="sensitivityOptimalYear === y ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700'">
                      {{ holdSensitivity[y] ? holdSensitivity[y].totalROI.toFixed(0) + '%' : '—' }}
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 pr-3 text-gray-500 font-medium">IRR</td>
                    <td v-for="y in [5,10,15,20,25,30]" :key="'irr'+y"
                      class="py-2 px-1 text-center font-semibold"
                      :class="sensitivityOptimalYear === y ? 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-300' : 'text-gray-700'">
                      {{ holdSensitivity[y] ? holdSensitivity[y].irr.toFixed(1) + '%' : '—' }}
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 pr-3 text-gray-500 font-medium">Total Wealth</td>
                    <td v-for="y in [5,10,15,20,25,30]" :key="'tw'+y"
                      class="py-2 px-1 text-center"
                      :class="sensitivityOptimalYear === y ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600'">
                      {{ holdSensitivity[y] ? formatCurrencyK(holdSensitivity[y].totalWealth) : '—' }}
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 pr-3 text-gray-500 font-medium">Equity at Sale</td>
                    <td v-for="y in [5,10,15,20,25,30]" :key="'eq'+y"
                      class="py-2 px-1 text-center text-gray-600"
                      :class="sensitivityOptimalYear === y ? 'bg-indigo-50' : ''">
                      {{ holdSensitivity[y] ? formatCurrencyK(holdSensitivity[y].equityAtSale) : '—' }}
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 pr-3 text-gray-500 font-medium">Cum Cash Flow</td>
                    <td v-for="y in [5,10,15,20,25,30]" :key="'cf'+y"
                      class="py-2 px-1 text-center text-gray-600"
                      :class="sensitivityOptimalYear === y ? 'bg-indigo-50' : ''">
                      {{ holdSensitivity[y] ? formatCurrencyK(holdSensitivity[y].cumCashFlow) : '—' }}
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2 pr-3 text-gray-500 font-medium">Net Proceeds</td>
                    <td v-for="y in [5,10,15,20,25,30]" :key="'np'+y"
                      class="py-2 px-1 text-center text-gray-600"
                      :class="sensitivityOptimalYear === y ? 'bg-indigo-50' : ''">
                      {{ holdSensitivity[y] ? formatCurrencyK(holdSensitivity[y].netProceeds) : '—' }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-xs text-gray-400 mt-3">★ Optimal Hold = highest Annualized Return (IRR). IRR typically peaks at 7–15 years for most US rentals.</p>
          </div>

          <!-- ── MODE 3: COMPARE SELL YEARS ── -->
          <div v-if="result && calcMode === 'compare' && compareYearsValid" class="bg-white rounded-2xl shadow-sm border border-emerald-100 p-5">
            <h3 class="text-sm font-bold mb-4 text-emerald-700">Compare Sell Years — Year {{ f.sellYearA }} vs Year {{ f.sellYearB }}</h3>
            <!-- Winner badge -->
            <div v-if="compareWinner" class="mb-4 px-4 py-2 rounded-xl text-sm font-semibold text-center"
              :class="Math.abs(compareResultA.irr - compareResultB.irr) < 1 ? 'bg-gray-100 text-gray-600' : compareWinner === 'A' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' : 'bg-emerald-100 text-emerald-700 border border-emerald-200'">
              <span v-if="Math.abs(compareResultA.irr - compareResultB.irr) < 1">Too Close to Call — choose based on liquidity needs or market conditions</span>
              <span v-else>Year {{ compareWinner === 'A' ? f.sellYearA : f.sellYearB }} has Better Annualized Return ★</span>
            </div>
            <div class="overflow-x-auto">
              <table class="text-xs w-full">
                <thead>
                  <tr class="border-b border-gray-200">
                    <th class="py-2 text-left text-gray-400 font-medium pr-3">Metric</th>
                    <th class="py-2 px-2 text-center font-semibold text-emerald-700">Year {{ f.sellYearA }}</th>
                    <th class="py-2 px-2 text-center font-semibold text-emerald-600">Year {{ f.sellYearB }}</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100" v-if="compareResultA && compareResultB">
                  <tr><td class="py-2 pr-3 text-gray-500">Total ROI %</td>
                    <td class="py-2 px-2 text-center font-bold" :class="compareResultA.totalROI >= compareResultB.totalROI ? 'text-emerald-700' : 'text-gray-600'">{{ compareResultA.totalROI.toFixed(1) }}%</td>
                    <td class="py-2 px-2 text-center font-bold" :class="compareResultB.totalROI > compareResultA.totalROI ? 'text-emerald-700' : 'text-gray-600'">{{ compareResultB.totalROI.toFixed(1) }}%</td>
                  </tr>
                  <tr><td class="py-2 pr-3 text-gray-500">Annualized Return (IRR)</td>
                    <td class="py-2 px-2 text-center font-bold" :class="compareResultA.irr >= compareResultB.irr ? 'text-emerald-700' : 'text-gray-600'">{{ compareResultA.irr.toFixed(1) }}%</td>
                    <td class="py-2 px-2 text-center font-bold" :class="compareResultB.irr > compareResultA.irr ? 'text-emerald-700' : 'text-gray-600'">{{ compareResultB.irr.toFixed(1) }}%</td>
                  </tr>
                  <tr><td class="py-2 pr-3 text-gray-500">Total Wealth</td>
                    <td class="py-2 px-2 text-center text-gray-700">{{ formatCurrency(compareResultA.totalWealth) }}</td>
                    <td class="py-2 px-2 text-center text-gray-700">{{ formatCurrency(compareResultB.totalWealth) }}</td>
                  </tr>
                  <tr><td class="py-2 pr-3 text-gray-500">Equity at Sale</td>
                    <td class="py-2 px-2 text-center text-gray-700">{{ formatCurrency(compareResultA.equityAtSale) }}</td>
                    <td class="py-2 px-2 text-center text-gray-700">{{ formatCurrency(compareResultB.equityAtSale) }}</td>
                  </tr>
                  <tr><td class="py-2 pr-3 text-gray-500">Net Proceeds</td>
                    <td class="py-2 px-2 text-center text-gray-700">{{ formatCurrency(compareResultA.netProceeds) }}</td>
                    <td class="py-2 px-2 text-center text-gray-700">{{ formatCurrency(compareResultB.netProceeds) }}</td>
                  </tr>
                  <tr><td class="py-2 pr-3 text-gray-500">Remaining Loan</td>
                    <td class="py-2 px-2 text-center text-gray-700">{{ formatCurrency(compareResultA.remainingLoan) }}</td>
                    <td class="py-2 px-2 text-center text-gray-700">{{ formatCurrency(compareResultB.remainingLoan) }}</td>
                  </tr>
                  <tr><td class="py-2 pr-3 text-gray-500">Risk Note</td>
                    <td class="py-2 px-2 text-center text-gray-500">{{ compareResultA.riskNote }}</td>
                    <td class="py-2 px-2 text-center text-gray-500">{{ compareResultB.riskNote }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-xs text-gray-400 mt-3">v1 scope: sell-year comparison only. 1031 Exchange and mid-hold refinance are v2 features.</p>
          </div>
          <div v-if="result && calcMode === 'compare' && !compareYearsValid" class="bg-emerald-50 rounded-2xl border border-emerald-100 p-6 text-center text-sm text-emerald-700">
            Enter two different Sell Year values (1–30) above to compare exit timings.
          </div>

          <!-- Save + Share + PDF -->
          <div v-if="hasResult" class="p-0 space-y-2">
            <!-- PRIMARY: Save Scenario -->
            <button @click="openSaveScenario"
              class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
              style="background: #f59e0b; color: #1e3a5f;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
              </svg>
              Save Scenario
            </button>
            <!-- SECONDARY: Share + PDF -->
            <div class="grid grid-cols-2 gap-2">
              <button @click="shareResult"
                class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border"
                :class="shareSuccess ? 'border-green-400 text-green-700 bg-green-50' : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'">
                <svg v-if="!shareSuccess" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                </svg>
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                {{ shareSuccess ? 'Copied!' : 'Share' }}
              </button>
              <button @click="exportPDF"
                class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Export PDF
              </button>
            </div>
          </div>

          <!-- Disclaimer -->
          <div class="bg-gray-50 rounded-xl border border-gray-100 p-3 text-xs text-gray-400 leading-relaxed">
            ROI and IRR shown use pre-tax cash flow with estimated depreciation benefit added and simplified sale tax deducted. Annual income tax on rental profit is NOT modeled. Consult a real estate CPA for precise after-tax planning.
          </div>

          </div><!-- /inner space-y-4 -->
        </div><!-- /Right col -->
      </div><!-- /Grid -->
    </div><!-- /Calculator -->

    <!-- ═══════════════════════════════════════════════
         SCENARIO PANEL
    ═══════════════════════════════════════════════ -->
    <div class="max-w-[1100px] mx-auto px-4 pb-6 mt-4">
      <ScenarioPanel
        calculator="rental-property-roi"
        :has-result="hasResult"
        :result="scenarioPanelResult"
        :trigger-save="triggerScenarioSave"
        @saved="onScenarioSaved"
      />
    </div>

    <!-- ═══════════════════════════════════════════════
         SEO CONTENT SECTIONS
    ═══════════════════════════════════════════════ -->
    <div class="max-w-[1100px] mx-auto px-4 sm:px-6 pb-16 space-y-0">

      <!-- ── OVERVIEW ── -->
      <div id="overview" class="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 mb-4">
        <h2 class="text-xl font-extrabold mb-1" style="color:#1e3a5f;">Long-Term Rental Property Analysis — What This Calculator Does</h2>
        <p class="text-sm text-gray-400 mb-5 italic">A lifetime wealth projection tool for 1–30 year hold strategies</p>

        <p class="text-gray-700 text-sm leading-relaxed mb-4">The Rental Property ROI Calculator helps you project how much total wealth a rental property will build over 1 to 30 years — and understand whether the annualized return is worth your time and capital. Unlike a standard real estate roi calculator that shows only Year 1 metrics, this investment property roi calculator models the full hold period to deliver both Total ROI % and Annualized Return (IRR). Whether you're evaluating a new acquisition or stress-testing an existing property's long term rental roi, this tool provides the multi-year perspective US buy-and-hold investors need in the 2026 market.</p>

        <p class="text-gray-700 text-sm leading-relaxed mb-4">At the core of this tool is a 4-component Wealth Waterfall that breaks down Total ROI into: Pre-Tax Cumulative Cash Flow, Principal Paydown, Appreciation, and Estimated Depreciation Benefit — minus Sale Tax at exit (Depreciation Recapture + Capital Gains). This decomposition reveals not just how much a deal returns, but where that return comes from. The calculator supports hold periods from 1 to 30 years with standard analytical checkpoints at 5/10/15/20/25/30, and reports two primary metrics simultaneously: Total ROI % (absolute return over the hold period) and Annualized Return (IRR, time-normalized).</p>

        <p class="text-gray-700 text-sm leading-relaxed mb-4">This tool works hand-in-hand with the <NuxtLink to="/rental-property-calculator" class="text-indigo-600 hover:underline">Rental Property Calculator</NuxtLink> for Year 1 operating analysis. The recommended workflow: run the Rental Property Calculator first to validate Year 1 cash flow and DSCR, then click "Analyze long-term ROI" to pre-fill this tool and project lifetime wealth. For cross-strategy comparison (Rental vs BRRRR vs Fix and Flip), use the Compare Real Estate Deals tool. This calculator is designed for long-term buy-and-hold investors, retirement portfolio builders, and real estate professionals presenting 10–30 year projections to clients — not short-term flippers.</p>

        <p class="text-gray-700 text-sm leading-relaxed mb-4 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
          <strong>Tax transparency:</strong> All figures combine pre-tax cash flow with estimated depreciation benefit and deducted sale tax (Depreciation Recapture + Capital Gains). Annual income tax on rental profit is NOT modeled. This is <strong>partial after-tax, not fully after-tax</strong>. Results are projections based on your inputs, not guarantees. Consult a real estate CPA for precise tax planning. Enter your first property above, or import from Rental Property Calculator for instant long-term analysis.
        </p>
      </div>

      <!-- ── HOW TO USE ── -->
      <div id="how-to-use" class="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 mb-4">
        <h2 class="text-xl font-extrabold mb-1" style="color:#1e3a5f;">How to Use the Rental Property ROI Calculator</h2>
        <p class="text-sm text-gray-400 mb-6 italic">From property inputs to 10-year wealth projection</p>

        <ol class="space-y-5 text-sm text-gray-700">
          <li class="flex gap-3">
            <span class="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5" style="background:#1e3a5f;">1</span>
            <div>
              <p class="font-bold text-gray-800 mb-1">Enter acquisition and financing details</p>
              <p class="leading-relaxed">Enter Purchase Price, Down Payment %, Closing Costs %, and any Initial Rehab budget. Then set Loan Rate, Loan Term, and Loan Type (Conventional, DSCR, or Portfolio). These inputs determine your Initial Cash Invested — the denominator of your ROI calculation. <strong>Tip:</strong> if you've already run this deal through the <NuxtLink to="/rental-property-calculator" class="text-indigo-600 hover:underline">Rental Property Calculator</NuxtLink>, click "Analyze long-term ROI" on that page to import all inputs automatically via URL parameters.</p>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5" style="background:#1e3a5f;">2</span>
            <div>
              <p class="font-bold text-gray-800 mb-1">Enter rental income and operating assumptions</p>
              <p class="leading-relaxed">Enter Monthly Rent, Vacancy %, Annual Rent Growth %, and OpEx % of Rent. Rent Growth 3% is the US national average (2–4% typical by market). Vacancy 8% is a conservative default — your market may differ. OpEx 35% accounts for repairs, management, insurance, property taxes, and reserves. Underestimating OpEx is the most common source of optimistic projections.</p>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5" style="background:#1e3a5f;">3</span>
            <div>
              <p class="font-bold text-gray-800 mb-1">Set appreciation and hold period</p>
              <p class="leading-relaxed">Enter Annual Appreciation % — 3% is the US historical average for residential real estate. Hold Period ranges from 1 to 30 years; 10 years is the default for typical long-hold strategy. Warning: hold periods ≤3 years trigger a "short hold warning" because selling costs and sale tax heavily dominate the return at short holds. For Hold = 1 year, a special disclosure appears: sale tax treatment is approximate because actual short-term vs long-term treatment depends on exact holding dates.</p>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5" style="background:#1e3a5f;">4</span>
            <div>
              <p class="font-bold text-gray-800 mb-1">Review tax parameters (Advanced — usually leave defaults)</p>
              <p class="leading-relaxed">Marginal Tax Rate, Land Value %, Selling Cost %, Federal LTCG Rate, and State CG Rate all have sensible defaults for most investors. Depreciation is automatically calculated over 27.5 years on the non-land portion of purchase + rehab. Sale tax uses a SPLIT formula: Depreciation Recapture (25%) on accumulated depreciation + LTCG on remaining gain. This is meaningfully more accurate than simplified "single rate" calculators. For state-specific accuracy, override State CG Rate (e.g., CA 9.3%, TX/FL/NV 0%).</p>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5" style="background:#1e3a5f;">5</span>
            <div>
              <p class="font-bold text-gray-800 mb-1">Interpret Total ROI, Annualized Return, and Wealth Waterfall</p>
              <p class="leading-relaxed">The primary output shows Total ROI % over the hold period AND Annualized Return (IRR). The Wealth Waterfall breakdown shows where total wealth comes from: pre-tax cash flow + principal paydown + appreciation + estimated depreciation benefit, minus sale tax. For most long holds, Appreciation is the largest component (50%+ of Total Wealth) — this is leverage compounding over time. Use the Hold Period Sensitivity tab to see how "when you sell" affects your IRR. <strong>All figures combine pre-tax cash flow with estimated depreciation benefit and deducted sale tax. Annual income tax on rental profit is NOT modeled. Consult a real estate CPA for precise tax planning.</strong></p>
            </div>
          </li>
        </ol>

        <div class="mt-6 grid sm:grid-cols-2 gap-3">
          <div class="bg-indigo-50 border border-indigo-100 rounded-xl p-3 text-xs text-indigo-700">
            <p class="font-bold mb-1">Pro Tip: Dual Metrics</p>
            <p>Total ROI % shows how much wealth the deal creates; Annualized Return (IRR) shows whether it was worth the time. A 300% Total ROI over 25 years is weaker than 100% over 7 years on an annualized basis. Always judge by BOTH — they answer different questions.</p>
          </div>
          <div class="bg-amber-50 border border-amber-100 rounded-xl p-3 text-xs text-amber-700">
            <p class="font-bold mb-1">Pro Tip: Waterfall Reading</p>
            <p>If Appreciation is the biggest component of Total Wealth, the deal depends heavily on market assumptions. Run the Conservative scenario (−2pp appreciation) to stress-test. If Total ROI drops dramatically, the deal is "market-dependent."</p>
          </div>
          <div class="bg-blue-50 border border-blue-100 rounded-xl p-3 text-xs text-blue-700">
            <p class="font-bold mb-1">Pro Tip: Hold Period Optimization</p>
            <p>Use Hold Period Sensitivity mode to find your optimal exit year. IRR typically peaks at 7–15 years for most rentals — earlier exits lose to selling costs + sale tax; later exits spread returns over more time.</p>
          </div>
          <div class="bg-green-50 border border-green-100 rounded-xl p-3 text-xs text-green-700">
            <p class="font-bold mb-1">Pro Tip: Year 1 First</p>
            <p>Run every deal through the Rental Property Calculator first to validate Year 1 cash flow and DSCR. Only after operating metrics pass should you analyze 10+ year ROI here. A deal that fails Year 1 rarely recovers through appreciation alone.</p>
          </div>
        </div>

        <div class="mt-6">
          <h3 class="font-bold text-gray-800 mb-3">Choosing the Right Mode</h3>
          <div class="space-y-3">
            <div class="flex gap-3 items-start">
              <span class="w-3 h-3 rounded-full bg-indigo-500 flex-shrink-0 mt-1.5"></span>
              <div class="text-sm"><strong class="text-indigo-700">Forward ROI (indigo)</strong> — Use when you have a specific property + hold period in mind and want to see projected wealth creation. Output: Wealth Waterfall + Total ROI + IRR + Wealth Break-Even Hold Period.</div>
            </div>
            <div class="flex gap-3 items-start">
              <span class="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0 mt-1.5"></span>
              <div class="text-sm"><strong class="text-blue-700">Hold Period Sensitivity (blue)</strong> — Use when you want to see how hold period affects ROI. Output: side-by-side comparison table at 5/10/15/20/25/30 year checkpoints, with "optimal hold" highlighted by highest IRR.</div>
            </div>
            <div class="flex gap-3 items-start">
              <span class="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5"></span>
              <div class="text-sm"><strong class="text-emerald-700">Compare Sell Years (emerald)</strong> — Use when you've narrowed to two specific exit years and want detailed side-by-side projection. Output: Total ROI, IRR, Net Proceeds, Remaining Loan, and "Better Annualized Return" winner label. Note: 1031 Exchange and mid-hold refinance are v2 features not supported in v1.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── INPUTS & OUTPUTS ── -->
      <div id="inputs-outputs" class="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 mb-4">
        <h2 class="text-xl font-extrabold mb-1" style="color:#1e3a5f;">Inputs and Outputs</h2>
        <p class="text-sm text-gray-400 mb-5 italic">What you enter, what the calculator projects</p>

        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr><th class="py-2 px-4 text-left text-xs font-bold text-gray-500 uppercase">Input</th><th class="py-2 px-4 text-left text-xs font-bold text-gray-500 uppercase">Required</th><th class="py-2 px-4 text-left text-xs font-bold text-gray-500 uppercase">Default</th></tr>
            </thead>
            <tbody class="divide-y divide-gray-100 text-gray-700">
              <tr class="bg-gray-50/50"><td class="py-2 px-4 font-bold text-gray-500 text-xs uppercase" colspan="3">Acquisition</td></tr>
              <tr><td class="py-2 px-4">Purchase Price</td><td class="py-2 px-4">Yes</td><td class="py-2 px-4 text-gray-400">Enter purchase price</td></tr>
              <tr><td class="py-2 px-4">Down Payment %</td><td class="py-2 px-4">Yes</td><td class="py-2 px-4">25%</td></tr>
              <tr><td class="py-2 px-4">Closing Costs %</td><td class="py-2 px-4">Yes</td><td class="py-2 px-4">2%</td></tr>
              <tr><td class="py-2 px-4">Initial Rehab Budget</td><td class="py-2 px-4">No</td><td class="py-2 px-4">$0</td></tr>
              <tr class="bg-gray-50/50"><td class="py-2 px-4 font-bold text-gray-500 text-xs uppercase" colspan="3">Financing</td></tr>
              <tr><td class="py-2 px-4">Loan Rate %</td><td class="py-2 px-4">Yes</td><td class="py-2 px-4">7.5%</td></tr>
              <tr><td class="py-2 px-4">Loan Term (years)</td><td class="py-2 px-4">Yes</td><td class="py-2 px-4">30</td></tr>
              <tr><td class="py-2 px-4">Loan Type</td><td class="py-2 px-4">No</td><td class="py-2 px-4">Conventional</td></tr>
              <tr class="bg-gray-50/50"><td class="py-2 px-4 font-bold text-gray-500 text-xs uppercase" colspan="3">Rental Income</td></tr>
              <tr><td class="py-2 px-4">Monthly Rent</td><td class="py-2 px-4">Yes</td><td class="py-2 px-4">Enter monthly rent</td></tr>
              <tr><td class="py-2 px-4">Vacancy %</td><td class="py-2 px-4">No</td><td class="py-2 px-4">8%</td></tr>
              <tr><td class="py-2 px-4">Annual Rent Growth %</td><td class="py-2 px-4">No</td><td class="py-2 px-4">3%</td></tr>
              <tr><td class="py-2 px-4">OpEx % of Rent</td><td class="py-2 px-4">No</td><td class="py-2 px-4">35%</td></tr>
              <tr class="bg-gray-50/50"><td class="py-2 px-4 font-bold text-gray-500 text-xs uppercase" colspan="3">Appreciation &amp; Hold</td></tr>
              <tr><td class="py-2 px-4">Annual Appreciation %</td><td class="py-2 px-4">No</td><td class="py-2 px-4">3%</td></tr>
              <tr><td class="py-2 px-4">Hold Period (years)</td><td class="py-2 px-4">No</td><td class="py-2 px-4">10 (range 1–30)</td></tr>
              <tr class="bg-gray-50/50"><td class="py-2 px-4 font-bold text-gray-500 text-xs uppercase" colspan="3">Tax Parameters (Advanced)</td></tr>
              <tr><td class="py-2 px-4">Marginal Tax Rate %</td><td class="py-2 px-4">No</td><td class="py-2 px-4">24%</td></tr>
              <tr><td class="py-2 px-4">Land Value % of Purchase</td><td class="py-2 px-4">No</td><td class="py-2 px-4">20%</td></tr>
              <tr><td class="py-2 px-4">Selling Cost %</td><td class="py-2 px-4">No</td><td class="py-2 px-4">7%</td></tr>
              <tr><td class="py-2 px-4">Federal LTCG Rate %</td><td class="py-2 px-4">No</td><td class="py-2 px-4">15%</td></tr>
              <tr><td class="py-2 px-4">State Capital Gains %</td><td class="py-2 px-4">No</td><td class="py-2 px-4">0%</td></tr>
            </tbody>
          </table>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr><th class="py-2 px-4 text-left text-xs font-bold text-gray-500 uppercase">Output</th><th class="py-2 px-4 text-left text-xs font-bold text-gray-500 uppercase">Formula</th><th class="py-2 px-4 text-left text-xs font-bold text-gray-500 uppercase">Purpose</th></tr>
            </thead>
            <tbody class="divide-y divide-gray-100 text-gray-700 text-xs">
              <tr class="bg-gray-50/50"><td class="py-2 px-4 font-bold text-gray-500 uppercase text-xs" colspan="3">Primary Metrics</td></tr>
              <tr><td class="py-2 px-4 font-semibold">Total ROI %</td><td class="py-2 px-4 font-mono">Total Wealth / Initial Cash × 100</td><td class="py-2 px-4 text-gray-500">Absolute return over hold period</td></tr>
              <tr><td class="py-2 px-4 font-semibold">Annualized Return (IRR)</td><td class="py-2 px-4 font-mono">IRR of cash flow series Y0→YN</td><td class="py-2 px-4 text-gray-500">Time-normalized annual return</td></tr>
              <tr><td class="py-2 px-4 font-semibold">Total Wealth Created</td><td class="py-2 px-4 font-mono">4 components − Sale Tax</td><td class="py-2 px-4 text-gray-500">Total dollar wealth created</td></tr>
              <tr class="bg-gray-50/50"><td class="py-2 px-4 font-bold text-gray-500 uppercase text-xs" colspan="3">Wealth Waterfall Components</td></tr>
              <tr><td class="py-2 px-4">Cumulative Cash Flow</td><td class="py-2 px-4 font-mono">Σ(Pre-Tax CF) years 1..hold</td><td class="py-2 px-4 text-gray-500">Operating income contribution</td></tr>
              <tr><td class="py-2 px-4">Principal Paydown</td><td class="py-2 px-4 font-mono">Original Loan − Remaining Balance</td><td class="py-2 px-4 text-gray-500">Equity built via amortization</td></tr>
              <tr><td class="py-2 px-4">Appreciation</td><td class="py-2 px-4 font-mono">Sale Value − Purchase Price</td><td class="py-2 px-4 text-gray-500">Market value growth</td></tr>
              <tr><td class="py-2 px-4">Estimated Depreciation Benefit</td><td class="py-2 px-4 font-mono">Annual Depr × Tax Rate × Years</td><td class="py-2 px-4 text-gray-500">Tax benefit estimate (not guaranteed)</td></tr>
              <tr><td class="py-2 px-4 text-red-600 font-semibold">MINUS Sale Tax</td><td class="py-2 px-4 font-mono text-xs">SPLIT: Recapture = 25% × min(AccumDepr, max(0,Gain)); LTCG = (Fed+State) × max(0,Gain−AccumDepr)</td><td class="py-2 px-4 text-gray-500">Tax at exit</td></tr>
              <tr class="bg-gray-50/50"><td class="py-2 px-4 font-bold text-gray-500 uppercase text-xs" colspan="3">Derived Metrics</td></tr>
              <tr><td class="py-2 px-4">Year 1 Cash-on-Cash %</td><td class="py-2 px-4 font-mono">Yr1 CF / Initial Cash × 100</td><td class="py-2 px-4 text-gray-500">Cross-calc invariant (matches Rental Prop Calc)</td></tr>
              <tr><td class="py-2 px-4">Wealth Break-Even Hold Period</td><td class="py-2 px-4 font-mono">First year cumWealth &gt; 0</td><td class="py-2 px-4 text-gray-500">When deal turns wealth-positive</td></tr>
              <tr><td class="py-2 px-4">Equity at Sale</td><td class="py-2 px-4 font-mono">Sale Price − Remaining Loan</td><td class="py-2 px-4 text-gray-500">Pre-tax equity position</td></tr>
              <tr><td class="py-2 px-4">Net Proceeds at Sale</td><td class="py-2 px-4 font-mono">Sale Price − Costs − Loan − Sale Tax</td><td class="py-2 px-4 text-gray-500">Actual cash from sale</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ── FORMULA ── -->
      <div id="formula" class="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 mb-4">
        <h2 class="text-xl font-extrabold mb-1" style="color:#1e3a5f;">How the Rental Property ROI Calculator Works</h2>
        <p class="text-sm text-gray-400 mb-5 italic">6-phase simulation from acquisition to sale — with a worked Austin, TX 2026 example</p>

        <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-6 text-sm text-indigo-900">
          The Rental Property ROI Calculator runs a 6-phase simulation: (1) Initial Cash Invested, (2) Loan Amortization Schedule, (3) Year-by-Year Cash Flow with rent growth, (4) Terminal Sale with split tax calculation, (5) Wealth Waterfall decomposition, (6) Total ROI and IRR. Unlike single-year calculators, this tool models the full hold period — 1–30 year hold periods — to show how cash flow, principal paydown, appreciation, and tax benefits combine into total wealth creation. Results are projections based on user inputs and 27.5-year residential depreciation, not market-reported data.
        </div>

        <div class="bg-gray-900 rounded-xl p-4 mb-6 font-mono text-xs text-green-300 overflow-x-auto">
          <div class="text-gray-400 mb-1">╔══════════════════════════════════════════════════════════════════════════╗</div>
          <div class="text-yellow-300">║ CANONICAL PARTIAL-TAX MODEL                                              ║</div>
          <div class="text-gray-400">║                                                                          ║</div>
          <div class="text-white">║ Total Wealth Created =                                                   ║</div>
          <div class="text-blue-300">║   Pre-Tax Cash Flow                                                      ║</div>
          <div class="text-indigo-300">║   + Principal Paydown                                                    ║</div>
          <div class="text-emerald-300">║   + Appreciation                                                         ║</div>
          <div class="text-amber-300">║   + Estimated Depreciation Benefit                                       ║</div>
          <div class="text-red-300">║   − Sale Tax (Recapture 25% + LTCG on remaining gain)                   ║</div>
          <div class="text-gray-400">║                                                                          ║</div>
          <div class="text-yellow-300">║ This is a PARTIAL-TAX model:                                             ║</div>
          <div class="text-green-300">║   ✓ Includes: estimated depreciation benefit + sale tax                  ║</div>
          <div class="text-red-300">║   ✗ Excludes: annual income tax, NIIT (3.8% surtax), passive loss limits ║</div>
          <div class="text-gray-400">║                                                                          ║</div>
          <div class="text-yellow-200">║ This is NOT fully after-tax. For precise after-tax analysis,            ║</div>
          <div class="text-yellow-200">║ consult a real estate CPA.                                               ║</div>
          <div class="text-gray-400">╚══════════════════════════════════════════════════════════════════════════╝</div>
        </div>

        <div class="space-y-4 text-sm text-gray-700">
          <div>
            <h3 class="font-bold text-gray-800 mb-2">Phase 1 — Initial Cash Invested</h3>
            <div class="bg-gray-50 rounded-xl p-3 font-mono text-xs text-gray-600">
              <p>Down Payment = Purchase × Down Payment %</p>
              <p>Closing Costs = Purchase × Closing %</p>
              <p>Initial Cash Invested = Down Payment + Closing Costs + Rehab</p>
            </div>
          </div>
          <div>
            <h3 class="font-bold text-gray-800 mb-2">Phase 2 — Loan Amortization</h3>
            <div class="bg-gray-50 rounded-xl p-3 font-mono text-xs text-gray-600">
              <p>Monthly Payment = Loan × [Rate/12 × (1+Rate/12)^N] / [(1+Rate/12)^N − 1]</p>
              <p>For each month m: Interest_m = Balance × Rate/12; Principal_m = Payment − Interest_m</p>
              <p>Sum Principal payments over hold period → Principal Paydown (Wealth Waterfall)</p>
            </div>
          </div>
          <div>
            <h3 class="font-bold text-gray-800 mb-2">Phase 3 — Year-by-Year Simulation</h3>
            <div class="bg-gray-50 rounded-xl p-3 font-mono text-xs text-gray-600">
              <p>Gross Rent_Y = Monthly Rent × 12 × (1 + Rent Growth)^(Y-1)</p>
              <p>Effective Rent_Y = Gross Rent × (1 − Vacancy %)</p>
              <p>NOI_Y = Effective Rent × (1 − OpEx %)</p>
              <p>Pre-Tax Cash Flow_Y = NOI − Annual Debt Service</p>
              <p>Annual Depreciation = (Purchase + Rehab) × (1 − Land %) / 27.5</p>
              <p>Estimated Depreciation Benefit_Y = Depreciation × Marginal Tax Rate</p>
            </div>
          </div>
          <div>
            <h3 class="font-bold text-gray-800 mb-2">Phase 4 — Terminal Sale + SPLIT Tax (canonical — never simplified)</h3>
            <div class="bg-gray-50 rounded-xl p-3 font-mono text-xs text-gray-600">
              <p>Property Value_Sale = Purchase × (1 + Appreciation)^Hold</p>
              <p>Selling Costs = Sale Value × Selling Cost %</p>
              <p>Accumulated Depreciation = Annual Depreciation × Hold Period</p>
              <p>Adjusted Basis = Purchase + Rehab − Accumulated Depreciation</p>
              <p>Total Gain = (Sale Value − Selling Costs) − Adjusted Basis</p>
              <p class="mt-2 text-red-600 font-bold">// SPLIT Tax — Rule 3 canonical formula (NEVER single combined rate):</p>
              <p>Recapture Tax = 25% × min(AccumDepr, max(0, Total Gain))</p>
              <p>LTCG Gain = max(0, Total Gain − AccumDepr)</p>
              <p>Capital Gains Tax = LTCG Gain × (Federal LTCG + State CG)</p>
              <p>Total Sale Tax = Recapture Tax + Capital Gains Tax</p>
              <p class="text-green-600">// Loss-sale edge case: if Total Gain ≤ 0, all taxes = 0</p>
            </div>
          </div>
          <div>
            <h3 class="font-bold text-gray-800 mb-2">Phase 5 — Wealth Waterfall (explanatory decomposition)</h3>
            <div class="bg-gray-50 rounded-xl p-3 font-mono text-xs text-gray-600">
              <p>Total Wealth = Cumulative Cash Flow + Principal Paydown + Appreciation</p>
              <p>             + Estimated Depreciation Benefit − Total Sale Tax</p>
            </div>
          </div>
          <div>
            <h3 class="font-bold text-gray-800 mb-2">Phase 6 — Total ROI + Annualized Return (IRR)</h3>
            <div class="bg-gray-50 rounded-xl p-3 font-mono text-xs text-gray-600">
              <p>Total ROI % = Total Wealth / Initial Cash Invested × 100</p>
              <p>IRR cash flows: CF_0 = −Initial Cash; CF_1..N-1 = Pre-Tax CF per year</p>
              <p>               CF_N = Year N CF + Net Proceeds at Sale</p>
              <p>Solve: NPV = Σ(CF_t / (1+IRR)^t) = 0 via Newton-Raphson (tolerance 0.01%)</p>
              <p>If solver fails → CAGR fallback with "(approximated)" label + ⓘ info icon</p>
            </div>
          </div>
        </div>

        <!-- Worked Example -->
        <div class="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 class="font-bold text-blue-800 mb-3">Worked Example — Austin, TX (2026 10-Year Hold)</h3>
          <div class="text-xs text-blue-900 space-y-1 font-mono">
            <p class="font-bold text-blue-700">Inputs: $300K purchase, 25% down, 2% closing, $0 rehab, 7.5% rate/30yr, $2,200/mo rent, 8% vacancy, 35% OpEx, 3% appreciation, 3% rent growth, 10-year hold, 24% marginal tax, 20% land, 7% selling cost, 15% Fed LTCG, 0% State CG</p>
            <p class="mt-2">Phase 1: Initial Cash = $75,000 + $6,000 = $81,000</p>
            <p>Phase 2: Loan = $225,000; Monthly P&amp;I ≈ $1,573; Principal paid at Y10 ≈ $35,200</p>
            <p>Phase 3: Year 1 NOI ≈ $16,750; Pre-Tax CF Yr1 ≈ −$1,100 (thin due to 7.5% rate); CF grows as rent grows</p>
            <p>Phase 4: Sale value at Y10 = $300K × 1.03^10 = $403,175; Selling costs = $28,222; Remaining loan ≈ $189,800</p>
            <p>Phase 5 SPLIT Tax: AccumDepr = $240K/27.5 × 10 = $87,273; Adj Basis = $300K−$87,273 = $212,727</p>
            <p>Total Gain = ($403,175−$28,222)−$212,727 = $162,226</p>
            <p class="text-red-700">Recapture = 25% × min($87,273, $162,226) = $21,818; LTCG = 15% × ($162,226−$87,273) = $11,243</p>
            <p class="text-red-700">Total Sale Tax = $33,061 (vs single-rate at 15% = $24,334 — 36% underestimate)</p>
            <p class="font-bold text-blue-700 mt-2">Phase 6 Waterfall: CF≈$8–12K + PP≈$35K + Appre≈$103K + DepBenefit≈$6.3K − SaleTax≈$33K ≈ Total Wealth $119K–$123K</p>
            <p class="font-bold text-blue-700">Total ROI ≈ 147% | IRR ≈ 11.5% | Wealth Break-Even ≈ Year 5</p>
          </div>
        </div>

        <!-- COMBINED-TAX BAN -->
        <div class="mt-4 bg-red-50 border border-red-200 rounded-xl p-4 text-xs text-red-800">
          <p class="font-bold mb-1">CRITICAL: Combined-Tax Formula Is Forbidden</p>
          <p>Any formula applying a single combined rate to Total Gain is incorrect and explicitly rejected. The correct formula ALWAYS separates: Recapture Tax (25% × capped accumulated depreciation) + Capital Gains Tax (LTCG rate × remaining gain). The simplified single-rate approach underestimates tax liability by 20–35% in typical cases.</p>
        </div>
      </div>

      <!-- ── WHAT IS ── -->
      <div id="what-is" class="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 mb-4">
        <h2 class="text-xl font-extrabold mb-1" style="color:#1e3a5f;">What Is Rental Property ROI?</h2>
        <p class="text-sm text-gray-400 mb-5 italic">Lifetime wealth analysis vs. single-year operating snapshot</p>

        <p class="text-gray-700 text-sm leading-relaxed mb-4">Traditional "rental ROI" often means Year 1 Cash-on-Cash return — a single-year snapshot of income against cash invested. Lifetime Rental ROI is fundamentally different: it measures total wealth created over a multi-year hold period (1–30 years, with standard checkpoints at 5/10/15/20/25/30). It includes four wealth drivers — cash flow, principal paydown, appreciation, and depreciation tax benefits — minus sale tax at exit. Most rental properties are weak on Year 1 cash flow but strong on 5-year+ Total ROI because appreciation and leverage compound over time. This calculator implements the full lifetime analysis with proper split tax treatment.</p>

        <p class="text-gray-700 text-sm leading-relaxed mb-4">Total ROI alone doesn't tell you where the return came from. Decomposing Total Wealth into 4 components via the Wealth Waterfall reveals the deal's nature: a high Cash Flow component indicates operational efficiency; high Principal Paydown means leverage is working for you; high Appreciation means the deal is market-dependent (run Conservative scenario to stress-test); high Estimated Depreciation Benefit means a high-bracket investor extracts significant tax value. If Appreciation dominates (50%+), the deal is essentially a bet on future property values. If Cash Flow and Principal Paydown dominate, the deal is more resilient to market changes.</p>

        <p class="text-gray-700 text-sm leading-relaxed mb-4">Annualized Return (IRR) measures per-year return including all cash flows and final sale, accounting for the time value of money. A 200% Total ROI over 25 years is actually lower IRR than 100% over 7 years. This calculator uses the SPLIT sale tax formula (Depreciation Recapture 25% + LTCG on remaining gain) — more accurate than simplified "single rate" calculators that underestimate tax liability by 20–35%. All outputs use "partial after-tax" framing: pre-tax cash flow + estimated depreciation benefit + sale tax. Annual income tax on rental profit is NOT modeled. Consult a CPA for precise after-tax analysis.</p>
      </div>

      <!-- ── RESULT MEANING ── -->
      <div id="result-meaning" class="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 mb-4">
        <h2 class="text-xl font-extrabold mb-1" style="color:#1e3a5f;">What Your Total ROI and Annualized Return Mean</h2>
        <p class="text-sm text-gray-400 mb-5 italic">Interpreting the DUAL primary metrics + Wealth Break-Even</p>

        <p class="text-gray-700 text-sm leading-relaxed mb-4">Total ROI answers "how much wealth did the deal create relative to my cash invested?" while Annualized Return (IRR) answers "at what annual rate did I earn that return?" Both matter — they answer different questions and should always be evaluated together.</p>

        <div class="grid sm:grid-cols-2 gap-5 mb-5">
          <div>
            <h3 class="font-bold text-gray-800 mb-3 text-sm">Total ROI % Tiers — 10-Year Hold</h3>
            <div class="space-y-2 text-xs">
              <div class="flex items-center gap-2 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                <span class="font-bold text-red-600 w-24">Below 120%</span><span class="text-red-700">Weak — underperforms typical long-hold rentals</span>
              </div>
              <div class="flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                <span class="font-bold text-amber-600 w-24">120–220%</span><span class="text-amber-700">Average — standard long-hold return</span>
              </div>
              <div class="flex items-center gap-2 bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                <span class="font-bold text-green-600 w-24">Above 220%</span><span class="text-green-700">Strong — above-average appreciation, cash flow, or leverage</span>
              </div>
              <p class="text-gray-400 text-xs mt-1">For 20-year hold: roughly double; for 5-year hold: roughly half.</p>
            </div>
          </div>
          <div>
            <h3 class="font-bold text-gray-800 mb-3 text-sm">Annualized Return (IRR) Tiers</h3>
            <div class="space-y-2 text-xs">
              <div class="flex items-center gap-2 bg-red-50 border border-red-100 rounded-lg px-3 py-2"><span class="font-bold text-red-600 w-20">Below 6%</span><span class="text-red-700">Below Market — review assumptions</span></div>
              <div class="flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2"><span class="font-bold text-amber-600 w-20">6–9%</span><span class="text-amber-700">Market Rate — comparable to S&amp;P 500</span></div>
              <div class="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2"><span class="font-bold text-blue-600 w-20">9–13%</span><span class="text-blue-700">Good — above-market with leverage + tax benefits</span></div>
              <div class="flex items-center gap-2 bg-green-50 border border-green-100 rounded-lg px-3 py-2"><span class="font-bold text-green-600 w-20">13–18%</span><span class="text-green-700">Strong — high-quality deal with appreciation</span></div>
              <div class="flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2"><span class="font-bold text-emerald-600 w-20">Above 18%</span><span class="text-emerald-700">Exceptional — verify inputs, may be aggressive</span></div>
              <div class="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2"><span class="font-bold text-gray-500 w-20">Negative</span><span class="text-gray-600">Loss projected — review assumptions</span></div>
            </div>
          </div>
        </div>

        <div class="bg-indigo-50 border border-indigo-100 rounded-xl p-4 text-sm text-indigo-900 mb-4">
          <h3 class="font-bold mb-2">Wealth Break-Even Hold Period — What It Tells You</h3>
          <p class="mb-2">The Wealth Break-Even Hold Period is the year at which cumulative wealth (including hypothetical sale tax if sold that year) first turns positive. This is different from operational cash-flow break-even.</p>
          <ul class="space-y-1 text-xs">
            <li><strong>Year 1–3:</strong> Deal starts generating value quickly, often driven by appreciation + leverage</li>
            <li><strong>Year 4–7:</strong> Typical for most US rentals with standard assumptions</li>
            <li><strong>Year 8+:</strong> Deal is heavily tax/appreciation-dependent; may not recover early exit</li>
            <li><strong>"Beyond 30 years":</strong> Deal does not pay back total wealth — review inputs, may be genuinely unviable</li>
          </ul>
        </div>

        <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-700">
          <h3 class="font-bold mb-2">2026 US Rental Market Context</h3>
          <p class="text-xs leading-relaxed">Post-2022 mortgage rates (7–8%) compress Year 1 cash flow significantly — many 2026 deals show negative or near-zero Year 1 cash-on-cash. Appreciation has normalized to 3–4% from the 2020–2022 surge. Rent growth moderated to 2–4% nationally. Many 2026 deals show weak Year 1 CoC (1–4%) but strong 10-year IRR (10–13%) because appreciation and principal paydown compensate for thin early cash flow. This is exactly why lifetime ROI analysis matters more than ever in 2026 — Year 1 metrics alone can make good deals look bad.</p>
        </div>
      </div>

      <!-- ── BENCHMARKS ── -->
      <div id="benchmarks" class="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 mb-4">
        <h2 class="text-xl font-extrabold mb-1" style="color:#1e3a5f;">Rental Property ROI Benchmarks for 2026</h2>
        <p class="text-sm text-gray-400 mb-5 italic">What total returns and IRR look like across hold periods</p>

        <p class="text-gray-600 text-sm mb-4">These ranges are illustrative patterns based on commonly-used assumption levels, not measured statistical datasets. Individual results depend heavily on your specific location, leverage, appreciation, and execution quality.</p>

        <div class="overflow-x-auto mb-5">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="py-2 px-4 text-left text-xs font-bold text-gray-500">Hold Period</th>
                <th class="py-2 px-4 text-center text-xs font-bold text-red-500">Weak</th>
                <th class="py-2 px-4 text-center text-xs font-bold text-amber-500">Average</th>
                <th class="py-2 px-4 text-center text-xs font-bold text-green-600">Strong</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 text-xs text-center">
              <tr><td class="py-2 px-4 text-left font-semibold text-gray-700">5 Years</td><td class="py-2 px-4 text-red-600">&lt;50%</td><td class="py-2 px-4 text-amber-600">50–90%</td><td class="py-2 px-4 text-green-700">&gt;90%</td></tr>
              <tr class="bg-indigo-50/30"><td class="py-2 px-4 text-left font-semibold text-indigo-700">10 Years</td><td class="py-2 px-4 text-red-600">&lt;120%</td><td class="py-2 px-4 text-amber-600">120–220%</td><td class="py-2 px-4 text-green-700">&gt;220%</td></tr>
              <tr><td class="py-2 px-4 text-left font-semibold text-gray-700">15 Years</td><td class="py-2 px-4 text-red-600">&lt;220%</td><td class="py-2 px-4 text-amber-600">220–400%</td><td class="py-2 px-4 text-green-700">&gt;400%</td></tr>
              <tr><td class="py-2 px-4 text-left font-semibold text-gray-700">20 Years</td><td class="py-2 px-4 text-red-600">&lt;360%</td><td class="py-2 px-4 text-amber-600">360–650%</td><td class="py-2 px-4 text-green-700">&gt;650%</td></tr>
              <tr><td class="py-2 px-4 text-left font-semibold text-gray-700">25 Years</td><td class="py-2 px-4 text-red-600">&lt;550%</td><td class="py-2 px-4 text-amber-600">550–1000%</td><td class="py-2 px-4 text-green-700">&gt;1000%</td></tr>
              <tr><td class="py-2 px-4 text-left font-semibold text-gray-700">30 Years</td><td class="py-2 px-4 text-red-600">&lt;800%</td><td class="py-2 px-4 text-amber-600">800–1500%</td><td class="py-2 px-4 text-green-700">&gt;1500%</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 mb-4">
          <h3 class="font-bold mb-2 text-gray-800">Typical Wealth Waterfall Composition (10-Year Hold, 25% Down)</h3>
          <ul class="space-y-1 text-xs text-gray-600">
            <li class="flex justify-between"><span class="text-emerald-600 font-semibold">Appreciation</span><span>50–65% of Total Wealth</span></li>
            <li class="flex justify-between"><span class="text-indigo-600 font-semibold">Principal Paydown</span><span>20–30% of Total Wealth</span></li>
            <li class="flex justify-between"><span class="text-blue-600 font-semibold">Cumulative Cash Flow</span><span>5–15% of Total Wealth</span></li>
            <li class="flex justify-between"><span class="text-amber-600 font-semibold">Estimated Depreciation Benefit</span><span>3–8% of Total Wealth</span></li>
            <li class="flex justify-between"><span class="text-red-500 font-semibold">MINUS Sale Tax</span><span>20–25% reduction from positive components</span></li>
          </ul>
          <p class="text-xs text-gray-400 mt-2">Appreciation &gt;70% means market-dependent. Cash Flow &gt;20% means unusually strong operating economics.</p>
        </div>

        <p class="text-xs text-gray-400 bg-yellow-50 border border-yellow-100 rounded-xl p-3">
          <strong>Benchmarks disclaimer:</strong> These ranges reflect illustrative outcomes at commonly-used assumption levels (3% appreciation, 3% rent growth, 25% down, 30-year amortization). They are NOT measured statistical datasets, NOT market research, NOT predictions for any specific deal. Actual results depend on your specific inputs, local market, financing, execution quality, and tax situation. The calculator's output on YOUR inputs always takes precedence over these aggregate expectations.
        </p>
      </div>

      <!-- ── STRATEGY ── -->
      <div id="strategy" class="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 mb-4">
        <h2 class="text-xl font-extrabold mb-1" style="color:#1e3a5f;">How to Use Rental Property ROI by Investor Type</h2>
        <p class="text-sm text-gray-400 mb-5 italic">Matching the analysis to your long-term goals</p>

        <div class="grid sm:grid-cols-2 gap-4">
          <div class="bg-gray-50 rounded-xl p-4">
            <h3 class="font-bold text-gray-800 mb-2 text-sm">First-Time Investor</h3>
            <p class="text-xs text-gray-600 leading-relaxed">Start with 10-year hold at default assumptions (3% appreciation, 3% rent growth) and compare Forward ROI against IRR Tiers — aim for 9%+ IRR as a minimum threshold. Use the Conservative scenario to stress-test before committing capital. Validate Year 1 operations in the <NuxtLink to="/rental-property-calculator" class="text-indigo-600 hover:underline">Rental Property Calculator</NuxtLink> first — deals that fail Year 1 rarely recover through appreciation alone.</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-4">
            <h3 class="font-bold text-gray-800 mb-2 text-sm">Scaling Investor (3–10 Properties)</h3>
            <p class="text-xs text-gray-600 leading-relaxed">Use Hold Period Sensitivity mode to identify the optimal exit year per property. Prioritize properties with high Principal Paydown component (leverage working in your favor). Watch for Appreciation-dominated deals (&gt;60%) — market dependency adds portfolio-level risk. For 1031 Exchange planning to defer taxes on sale proceeds, consult a CPA (1031 Exchange is a v2 feature not modeled in v1).</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-4">
            <h3 class="font-bold text-gray-800 mb-2 text-sm">Retirement Portfolio Builder</h3>
            <p class="text-xs text-gray-600 leading-relaxed">Use 20–30 year hold periods to see cumulative wealth at your planned retirement year — appreciation and principal paydown compound dramatically at long holds. Focus on the Wealth Break-Even Hold Period to understand when the deal turns wealth-positive. Use Compare Sell Years mode to test "sell at retirement" vs. "sell earlier" scenarios. Estimated Depreciation Benefit compounds significantly over 20+ year holds.</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-4">
            <h3 class="font-bold text-gray-800 mb-2 text-sm">Real Estate Agent / Advisor</h3>
            <p class="text-xs text-gray-600 leading-relaxed">Present the Wealth Waterfall visualization to clients as a clear breakdown of return sources — this builds trust and differentiates your presentations. Use Hold Period Sensitivity for "when should I sell?" conversations. IRR tiers provide a benchmarking framework for deal quality comparison. Always caveat: projections are not guarantees; recommend a real estate CPA for tax specifics before any major decision.</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-4 sm:col-span-2">
            <h3 class="font-bold text-gray-800 mb-2 text-sm">Existing Portfolio Evaluator</h3>
            <p class="text-xs text-gray-600 leading-relaxed">Run current properties at their actual current state — use today's property value as "purchase price" and the remaining hold period as the hold years. Compare "hold another 10 years" ROI against "sell now + redeploy" alternative. Consider whether the Appreciation component still has runway (late-cycle markets may have limited future appreciation). Use <NuxtLink to="/compare-deals" class="text-indigo-600 hover:underline">Compare Real Estate Deals</NuxtLink> to test "sell + buy BRRRR" or other redeployment scenarios.</p>
          </div>
        </div>
      </div>

      <!-- ── APPLICATIONS ── -->
      <div id="applications" class="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 mb-4">
        <h2 class="text-xl font-extrabold mb-1" style="color:#1e3a5f;">Common Use Cases</h2>
        <p class="text-sm text-gray-400 mb-5 italic">When this calculator is the right tool</p>

        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex gap-3">
            <div class="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0"><span class="text-indigo-600 font-bold text-sm">1</span></div>
            <div>
              <p class="font-semibold text-sm text-gray-800 mb-1">Pre-purchase long-term ROI validation</p>
              <p class="text-xs text-gray-600">Before committing capital, validate that 10-year projected IRR meets your threshold (typically 9%+). Run Conservative scenario to confirm the deal survives reasonable market softening.</p>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0"><span class="text-blue-600 font-bold text-sm">2</span></div>
            <div>
              <p class="font-semibold text-sm text-gray-800 mb-1">Portfolio hold-vs-sell decision</p>
              <p class="text-xs text-gray-600">For an existing rental, run Forward ROI with remaining hold period to see projected wealth creation from today forward. Compare against "sell now + redeploy" via Compare Real Estate Deals.</p>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0"><span class="text-emerald-600 font-bold text-sm">3</span></div>
            <div>
              <p class="font-semibold text-sm text-gray-800 mb-1">Retirement planning with rental income</p>
              <p class="text-xs text-gray-600">Model 20–30 year holds to see cumulative wealth at your planned retirement year. Shows how cash flow + appreciation + principal paydown combine into retirement portfolio value.</p>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0"><span class="text-amber-600 font-bold text-sm">4</span></div>
            <div>
              <p class="font-semibold text-sm text-gray-800 mb-1">Client presentations (agents, advisors)</p>
              <p class="text-xs text-gray-600">Use the Wealth Waterfall visualization to explain return drivers clearly to clients. PDF export provides documentation for investment conversations and lender presentations.</p>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center flex-shrink-0"><span class="text-rose-600 font-bold text-sm">5</span></div>
            <div>
              <p class="font-semibold text-sm text-gray-800 mb-1">Estimated Depreciation Benefit planning</p>
              <p class="text-xs text-gray-600">Quick estimate of annual depreciation tax benefit for planning purposes. Note: v1 assumes full deductibility — consult a CPA for passive activity loss implications at higher incomes.</p>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0"><span class="text-purple-600 font-bold text-sm">6</span></div>
            <div>
              <p class="font-semibold text-sm text-gray-800 mb-1">Optimal hold period identification</p>
              <p class="text-xs text-gray-600">Use Hold Period Sensitivity mode to find the hold period that maximizes IRR. Typically peaks at 7–15 years depending on leverage and appreciation assumptions.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ── INDUSTRY STANDARDS ── -->
      <div id="industry-standards" class="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 mb-4">
        <h2 class="text-xl font-extrabold mb-1" style="color:#1e3a5f;">How This Calculator Aligns with Industry Conventions</h2>
        <p class="text-sm text-gray-400 mb-5 italic">Methodology standards and peer tool positioning</p>

        <div class="space-y-4 text-sm text-gray-700">
          <div>
            <h3 class="font-bold text-gray-800 mb-1">Lifetime ROI Methodology</h3>
            <p>1–30 year hold periods with standard analytical checkpoints at 5/10/15/20/25/30 match institutional real estate analysis horizons. The 4-component wealth decomposition (cash flow + principal + appreciation + depreciation) aligns with CCIM and institutional REIT frameworks. 27.5-year residential depreciation per IRS §168 is standard. Split sale tax (Recapture 25% + LTCG per IRC §1250) is the correct treatment — not a simplified estimate. IRR as the annualization metric matches private equity and REIT reporting standards.</p>
          </div>
          <div>
            <h3 class="font-bold text-gray-800 mb-1">Tax Treatment Conventions</h3>
            <p>Pre-tax cash flow display matches BiggerPockets and DealCheck industry convention. Estimated Depreciation Benefit as a separate line (not blended into cash flow) prevents confusion. The split sale tax calculation (Recapture + LTCG) is the correct IRS treatment; most consumer calculators simplify to a single rate. "Partial after-tax" framing honestly discloses what IS and ISN'T modeled. Annual income tax on rental profit is intentionally not modeled — it's too personal-tax-situation-specific for a universal calculator.</p>
          </div>
          <div>
            <h3 class="font-bold text-gray-800 mb-1">How This Differs from BiggerPockets / DealCheck / SparkRental</h3>
            <p>BiggerPockets has strong single-year rental analysis but weaker multi-year lifetime wealth decomposition. DealCheck offers multi-year projections but uses a combined sale tax rate that underestimates liability. SparkRental has strong educational content but less detailed lifetime modeling. RealCalc Rental Property ROI is unique in: (a) 4-component Wealth Waterfall with visual breakdown, (b) split Recapture + LTCG tax formula (correct, not simplified), (c) 3 modes including Hold Period Sensitivity, and (d) cross-calculator invariant with Rental Property Calculator for Year 1 validation.</p>
          </div>
        </div>
      </div>

      <!-- ── LIMITATIONS ── -->
      <div id="limitations" class="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 mb-4">
        <h2 class="text-xl font-extrabold mb-1" style="color:#1e3a5f;">Limitations of This Calculator</h2>
        <p class="text-sm text-gray-400 mb-5 italic">What Rental Property ROI cannot tell you</p>

        <!-- CANONICAL PARTIAL-TAX FORMULA BLOCK — mandatory verbatim -->
        <div class="bg-gray-900 rounded-xl p-4 mb-5 font-mono text-xs overflow-x-auto">
          <p class="text-white">Total Wealth Created =</p>
          <p class="text-blue-300">  Pre-Tax Cash Flow</p>
          <p class="text-indigo-300">  + Principal Paydown</p>
          <p class="text-emerald-300">  + Appreciation</p>
          <p class="text-amber-300">  + Estimated Depreciation Benefit</p>
          <p class="text-red-300">  − Sale Tax (Recapture + LTCG)</p>
          <p class="text-yellow-300 mt-2">This is a PARTIAL-TAX model:</p>
          <p class="text-green-300">  ✓ Includes: estimated depreciation benefit + sale tax (Recapture + LTCG)</p>
          <p class="text-red-300">  ✗ Excludes: annual income tax on rental profit, NIIT (3.8% for high earners),</p>
          <p class="text-red-300">             passive activity loss limits, state income tax variations,</p>
          <p class="text-red-300">             alternative minimum tax</p>
        </div>

        <div class="space-y-4 text-sm">
          <div class="flex gap-3">
            <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
            <div>
              <p class="font-bold text-gray-800 mb-1">Partial after-tax framing, not fully after-tax</p>
              <p class="text-gray-600 text-xs leading-relaxed">Pre-tax cash flow is displayed with estimated depreciation benefit added and sale tax deducted. Annual INCOME tax on rental profit is NOT modeled. Passive activity loss limits (IRC §469), at-risk rules, NIIT (3.8% for high earners), and state income tax variations are all NOT modeled. See the Canonical Partial-Tax Model above. Consult a real estate CPA for precise after-tax analysis.</p>
            </div>
          </div>
          <div class="flex gap-3">
            <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
            <div>
              <p class="font-bold text-gray-800 mb-1">Estimated Depreciation Benefit is estimated, not guaranteed</p>
              <p class="text-gray-600 text-xs leading-relaxed">The label "Estimated Depreciation Benefit" is intentional. The linear formula (Annual Depreciation × Marginal Tax Rate × Years) assumes full deductibility each year, which requires the property to be cash-flow positive, the investor to qualify under passive activity rules (IRC §469), and at-risk basis to be sufficient. Passive Activity Loss limits can cap deductibility. Consult a CPA for precise tax impact.</p>
            </div>
          </div>
          <div class="flex gap-3">
            <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
            <div>
              <p class="font-bold text-gray-800 mb-1">Sale tax simplified (still split, but approximate)</p>
              <p class="text-gray-600 text-xs leading-relaxed">Uses Federal Depreciation Recapture (25%) + Federal LTCG + State CG, but does NOT model: NIIT 3.8% surtax for high earners, Alternative Minimum Tax, short-term capital gains on sub-1-year holds, or capital loss carryforward from other investments. Year 1 sale tax is especially approximate. More accurate than single-rate calculators, but not a tax preparation tool.</p>
            </div>
          </div>
          <div class="flex gap-3">
            <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">4</span>
            <div>
              <p class="font-bold text-gray-800 mb-1">Appreciation and rent growth are assumptions</p>
              <p class="text-gray-600 text-xs leading-relaxed">Future real estate values cannot be predicted. Small changes to the appreciation assumption produce large changes in Total ROI at long hold periods (especially 15+ years). The Conservative scenario (−2pp appreciation) stress-tests this. Results are projections based on YOUR inputs, not market forecasts.</p>
            </div>
          </div>
          <div class="flex gap-3">
            <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">5</span>
            <div>
              <p class="font-bold text-gray-800 mb-1">Does not model 1031 Exchange, refinance, or portfolio rollover</p>
              <p class="text-gray-600 text-xs leading-relaxed">v1 scope is limited to single-property hold-and-sell scenarios. 1031 Exchange (tax deferral via replacement property) requires replacement-property assumptions — this is a v2 roadmap feature. Mid-hold cash-out refinance also requires new loan terms — v2 feature. For multi-property portfolio analysis or 1031 planning, consult a financial advisor and qualified intermediary.</p>
            </div>
          </div>
          <div class="flex gap-3">
            <span class="w-6 h-6 rounded-full bg-red-100 text-red-600 flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">6</span>
            <div>
              <p class="font-bold text-gray-800 mb-1">Not a substitute for professional advice</p>
              <p class="text-gray-600 text-xs leading-relaxed">This is an educational and deal-screening tool. Before committing capital, consult: a real estate CPA for tax specifics, an attorney for entity structure, a lender for actual financing terms, and a real estate advisor for market specifics. This calculator is not investment advice and is not a substitute for professional tax, legal, or financial guidance.</p>
            </div>
          </div>
        </div>

        <div class="mt-5 bg-gray-50 rounded-xl p-4">
          <h3 class="font-bold text-sm text-gray-800 mb-2">When Not to Use This Calculator</h3>
          <ul class="space-y-1 text-xs text-gray-600">
            <li>→ <strong>Year 1 operational analysis:</strong> use <NuxtLink to="/rental-property-calculator" class="text-indigo-600 hover:underline">Rental Property Calculator</NuxtLink> for monthly cash flow, DSCR, Year 1 CoC</li>
            <li>→ <strong>Short-term flips (&lt;1 year):</strong> use <NuxtLink to="/fix-flip-calculator" class="text-indigo-600 hover:underline">Fix and Flip Calculator</NuxtLink></li>
            <li>→ <strong>BRRRR strategy:</strong> use <NuxtLink to="/brrrr-calculator" class="text-indigo-600 hover:underline">BRRRR Calculator</NuxtLink> for refi-focused analysis</li>
            <li>→ <strong>Cross-strategy comparison:</strong> use <NuxtLink to="/compare-deals" class="text-indigo-600 hover:underline">Compare Real Estate Deals</NuxtLink></li>
            <li>→ <strong>Tax preparation:</strong> consult a CPA — this calculator is not a tax prep tool</li>
            <li>→ <strong>1031 Exchange planning:</strong> v2 feature; consult CPA + qualified intermediary</li>
            <li>→ <strong>Commercial or multifamily 5+ units:</strong> calculator assumes residential 1–4 unit</li>
          </ul>
        </div>
      </div>

      <!-- ── COMMON MISTAKES ── -->
      <div id="common-mistakes" class="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 mb-4">
        <h2 class="text-xl font-extrabold mb-1" style="color:#1e3a5f;">Common Mistakes When Analyzing Rental ROI</h2>
        <p class="text-sm text-gray-400 mb-5 italic">Avoid these five errors</p>

        <div class="space-y-3 text-sm">
          <div class="flex gap-3">
            <span class="text-red-500 font-bold flex-shrink-0 mt-0.5">✗</span>
            <div>
              <p class="font-bold text-gray-800 mb-0.5">Comparing Total ROI across different hold periods</p>
              <p class="text-xs text-gray-600">200% ROI over 20 years is weaker than 100% over 7 years on an annualized basis. Always compare IRR (annualized) when evaluating deals across different hold periods — not Total ROI %, which is not time-normalized.</p>
            </div>
          </div>
          <div class="flex gap-3">
            <span class="text-red-500 font-bold flex-shrink-0 mt-0.5">✗</span>
            <div>
              <p class="font-bold text-gray-800 mb-0.5">Treating Estimated Depreciation Benefit as guaranteed savings</p>
              <p class="text-xs text-gray-600">Passive activity loss limits, at-risk rules, and your personal tax situation can significantly reduce actual benefit. The linear formula assumes full deductibility each year, which many investors at higher incomes cannot achieve. Consult a CPA for precise tax planning.</p>
            </div>
          </div>
          <div class="flex gap-3">
            <span class="text-red-500 font-bold flex-shrink-0 mt-0.5">✗</span>
            <div>
              <p class="font-bold text-gray-800 mb-0.5">Ignoring appreciation dependence in the Wealth Waterfall</p>
              <p class="text-xs text-gray-600">If Appreciation is &gt;60% of Total Wealth, the deal is essentially a bet on future property values — not a cash-flow-driven investment. Run the Conservative scenario (−2pp appreciation) to see how fragile the projection is. If Total ROI drops dramatically, the deal requires market tailwinds.</p>
            </div>
          </div>
          <div class="flex gap-3">
            <span class="text-red-500 font-bold flex-shrink-0 mt-0.5">✗</span>
            <div>
              <p class="font-bold text-gray-800 mb-0.5">Overlooking sale tax impact at exit</p>
              <p class="text-xs text-gray-600">Depreciation Recapture (25%) + LTCG can eat 20–30% of gross sale gains. Tax-free exits via 1031 Exchange are possible but require replacement property planning — not modeled in v1. Factor in the full split tax cost before comparing deals to alternative investments.</p>
            </div>
          </div>
          <div class="flex gap-3">
            <span class="text-red-500 font-bold flex-shrink-0 mt-0.5">✗</span>
            <div>
              <p class="font-bold text-gray-800 mb-0.5">Using lifetime ROI without validating Year 1 operations first</p>
              <p class="text-xs text-gray-600">A property that fails Year 1 DSCR or shows a deeply negative cash-on-cash rarely recovers through appreciation alone. Always run the <NuxtLink to="/rental-property-calculator" class="text-indigo-600 hover:underline">Rental Property Calculator</NuxtLink> first; bring only operationally viable deals to lifetime analysis.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ── FAQ ── -->
      <div id="faq" class="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 mb-4">
        <h2 class="text-xl font-extrabold mb-1" style="color:#1e3a5f;">Frequently Asked Questions</h2>
        <p class="text-sm text-gray-400 mb-5 italic">Common questions about rental property ROI analysis</p>

        <div class="space-y-3">
          <div v-for="(faq, i) in faqs" :key="i" class="border border-gray-200 rounded-xl overflow-hidden">
            <button @click="openFaq = openFaq === i ? null : i"
              class="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition">
              <span class="font-semibold text-sm text-gray-800">{{ faq.q }}</span>
              <svg class="w-4 h-4 text-gray-400 flex-shrink-0 ml-3 transition-transform duration-200" :class="openFaq === i ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="openFaq === i" class="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>

      <!-- ── RELATED CALCULATORS ── -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-8 mb-4">
        <h2 class="text-xl font-extrabold mb-1" style="color:#1e3a5f;">Related Calculators</h2>
        <p class="text-sm text-gray-400 mb-5 italic">Continue your analysis with these specialized tools</p>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <NuxtLink to="/rental-property-calculator" class="group border border-gray-200 rounded-xl p-4 hover:border-indigo-300 hover:bg-indigo-50/50 transition">
            <p class="font-bold text-sm text-gray-800 group-hover:text-indigo-700 mb-1">Rental Property Calculator</p>
            <p class="text-xs text-gray-500">Year 1 operating analysis — cash flow, DSCR, CoC, NOI. Companion tool for single-year validation before lifetime ROI analysis.</p>
          </NuxtLink>
          <NuxtLink to="/compare-deals" class="group border border-gray-200 rounded-xl p-4 hover:border-indigo-300 hover:bg-indigo-50/50 transition">
            <p class="font-bold text-sm text-gray-800 group-hover:text-indigo-700 mb-1">Compare Real Estate Deals</p>
            <p class="text-xs text-gray-500">Cross-strategy comparison — Rental vs Fix and Flip vs BRRRR. Use when evaluating multiple deals with different strategies.</p>
          </NuxtLink>
          <NuxtLink to="/cap-rate-calculator" class="group border border-gray-200 rounded-xl p-4 hover:border-indigo-300 hover:bg-indigo-50/50 transition">
            <p class="font-bold text-sm text-gray-800 group-hover:text-indigo-700 mb-1">Cap Rate Calculator</p>
            <p class="text-xs text-gray-500">Fundamental valuation metric (NOI / Property Value). Quick screening before lifetime ROI analysis.</p>
          </NuxtLink>
          <NuxtLink to="/dscr-calculator" class="group border border-gray-200 rounded-xl p-4 hover:border-indigo-300 hover:bg-indigo-50/50 transition">
            <p class="font-bold text-sm text-gray-800 group-hover:text-indigo-700 mb-1">DSCR Calculator</p>
            <p class="text-xs text-gray-500">Debt service coverage for lender underwriting. Validates financing feasibility before committing to a deal.</p>
          </NuxtLink>
          <NuxtLink to="/noi-calculator" class="group border border-gray-200 rounded-xl p-4 hover:border-indigo-300 hover:bg-indigo-50/50 transition">
            <p class="font-bold text-sm text-gray-800 group-hover:text-indigo-700 mb-1">NOI Calculator</p>
            <p class="text-xs text-gray-500">Operating income analysis — input for Cap Rate and lifetime ROI calculations.</p>
          </NuxtLink>
          <NuxtLink to="/brrrr-calculator" class="group border border-gray-200 rounded-xl p-4 hover:border-indigo-300 hover:bg-indigo-50/50 transition">
            <p class="font-bold text-sm text-gray-800 group-hover:text-indigo-700 mb-1">BRRRR Calculator</p>
            <p class="text-xs text-gray-500">BRRRR strategy analysis with refi-focused modeling. Compare BRRRR vs standard rental ROI with this companion tool.</p>
          </NuxtLink>
        </div>
      </div>

    </div><!-- /SEO content -->

    <!-- ═══════════════════════════════════════════════
         FOOTER
    ═══════════════════════════════════════════════ -->
    <footer class="bg-white border-t border-gray-200 mt-8">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-8">
        <div class="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:#1e3a5f;">
                <span class="text-white font-extrabold text-sm">RC</span>
              </div>
              <span class="font-extrabold text-base" style="color:#1e3a5f;">RealCalc</span>
            </div>
            <p class="text-xs text-gray-400 max-w-xs">Free real estate investment calculators for US investors. Not investment advice.</p>
          </div>
          <div class="flex gap-8 text-xs text-gray-500">
            <div>
              <p class="font-bold text-gray-700 mb-2">Calculators</p>
              <ul class="space-y-1">
                <li><NuxtLink to="/rental-property-calculator" class="hover:text-gray-800 transition">Rental Property</NuxtLink></li>
                <li><NuxtLink to="/cap-rate-calculator" class="hover:text-gray-800 transition">Cap Rate</NuxtLink></li>
                <li><NuxtLink to="/dscr-calculator" class="hover:text-gray-800 transition">DSCR</NuxtLink></li>
                <li><NuxtLink to="/brrrr-calculator" class="hover:text-gray-800 transition">BRRRR</NuxtLink></li>
              </ul>
            </div>
            <div>
              <p class="font-bold text-gray-700 mb-2">More</p>
              <ul class="space-y-1">
                <li><NuxtLink to="/compare-deals" class="hover:text-gray-800 transition">Compare Deals</NuxtLink></li>
                <li><NuxtLink to="/arv-calculator" class="hover:text-gray-800 transition">ARV</NuxtLink></li>
                <li><NuxtLink to="/fix-flip-calculator" class="hover:text-gray-800 transition">Fix &amp; Flip</NuxtLink></li>
                <li><NuxtLink to="/calculators" class="hover:text-gray-800 transition">All Calculators</NuxtLink></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-100 mt-6 pt-4 text-xs text-gray-400 text-center">
          © 2026 RealCalc. For educational purposes only. Not investment, tax, or legal advice.
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, nextTick } from 'vue'

// ─── 1. SEO HEAD ──────────────────────────────────────────────────────────────
useHead({
  title: 'Rental Property ROI Calculator — Lifetime Wealth | RealCalc',
  meta: [
    { name: 'description', content: 'Project rental property ROI over 1-30 year holds — total return, annualized IRR, wealth waterfall. Free long-term rental analysis tool for investors.' },
    { property: 'og:title', content: 'Rental Property ROI Calculator — Lifetime Wealth | RealCalc' },
    { property: 'og:description', content: 'Project rental property ROI over 1-30 year holds — total return, annualized IRR, wealth waterfall. Free long-term rental analysis tool for investors.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://realcalc.com' },
            { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://realcalc.com/calculators' },
            { '@type': 'ListItem', position: 3, name: 'Rental Property ROI Calculator', item: 'https://realcalc.com/rental-property-roi-calculator' }
          ]
        },
        {
          '@context': 'https://schema.org',
          '@type': ['FinancialProduct', 'SoftwareApplication'],
          name: 'Rental Property ROI Calculator',
          description: 'Free lifetime wealth projection tool for rental properties. Project 1-30 year Total ROI, Annualized Return (IRR), and Wealth Waterfall with correct split tax formula.',
          url: 'https://realcalc.com/rental-property-roi-calculator',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Web browser',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          audience: { '@type': 'Audience', audienceType: 'US Real Estate Investors (long-term buy-and-hold strategy)' },
          featureList: [
            'Lifetime wealth projection 1-30 year hold periods',
            '4-component Wealth Waterfall breakdown',
            'Cumulative Cash Flow + Principal Paydown + Appreciation + Estimated Depreciation Benefit',
            'Split Sale Tax formula (Depreciation Recapture 25% + LTCG on remaining gain)',
            'Total ROI % and Annualized Return (IRR)',
            'Wealth Break-Even Hold Period identification',
            '3 modes: Forward ROI, Hold Period Sensitivity, Compare Sell Years',
            'Hold Period Sensitivity table (5/10/15/20/25/30 year checkpoints)',
            '3 scenarios (Conservative / Base / Optimistic)',
            '3 sensitivity tables (Appreciation x Rent Growth, Hold x Appreciation, Leverage x Hold)',
            'URL parameter import from Rental Property Calculator',
            'PDF export with Wealth Waterfall',
            'Cross-calculator Year 1 CoC invariant validation'
          ],
          mainEntityOfPage: {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: "What's the difference between this and the Rental Property Calculator?", acceptedAnswer: { '@type': 'Answer', text: 'Rental Property Calculator = Year 1 operating analysis (cash flow, DSCR, CoC, NOI). Rental Property ROI = multi-year wealth projection (1-30 years) including appreciation, principal paydown, depreciation benefit, and sale tax. Both are complementary.' } },
              { '@type': 'Question', name: 'Can IRR be negative?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, IRR can legitimately be negative when the deal projects a loss over the hold period. Negative IRR is a valid output — it means you would earn more keeping cash in a savings account. Review assumptions to verify inputs are realistic.' } },
              { '@type': 'Question', name: 'Does this calculator include taxes?', acceptedAnswer: { '@type': 'Answer', text: 'Partial after-tax: pre-tax cash flow + estimated depreciation benefit + sale tax deducted (Recapture + Capital Gains). Annual income tax on rental profit is NOT modeled. Consult a real estate CPA for precise after-tax analysis.' } }
            ]
          }
        }
      ])
    }
  ]
})

// ─── 2. REACTIVE STATE ────────────────────────────────────────────────────────
const calcMode = ref('forward')        // 'forward' | 'sensitivity' | 'compare'
const showAdvanced = ref(false)
const isNavExpanded = ref(false)
const openFaq = ref(null)
const shareSuccess = ref(false)
const activeScenario = ref('base')
const triggerScenarioSave = ref(false)

const form = reactive({
  purchasePrice: null,
  downPayment: 25,
  closingCosts: 2,
  rehab: 0,
  loanRate: 7.5,
  loanTerm: 30,
  loanType: 'conventional',
  monthlyRent: null,
  vacancy: 8,
  rentGrowth: 3,
  opex: 35,
  appreciation: 3,
  holdPeriod: 10,
  marginalTax: 24,
  landValue: 20,
  sellingCost: 7,
  fedLTCG: 15,
  stateCG: 0,
  sellYearA: 7,
  sellYearB: 15,
})

// ─── 3. FAQ DATA ──────────────────────────────────────────────────────────────
const faqs = [
  { q: "What's the difference between this and the Rental Property Calculator?", a: "Rental Property Calculator = Year 1 operating analysis (cash flow, DSCR, CoC, NOI). Rental Property ROI Calculator = multi-year wealth projection (1-30 years range with standard checkpoints at 5/10/15/20/25/30) including appreciation, principal paydown, depreciation benefit, and sale tax at exit. Both are complementary; most investors run both in sequence. Year 1 CoC values must match between the two calculators for identical inputs." },
  { q: "What's a 'good' Total ROI for a rental property?", a: "It depends heavily on hold period. For a 10-year hold, Average is 120-220% and Strong is above 220%. For a 20-year hold, roughly double those thresholds. Annualized Return (IRR) is often a better benchmark for comparing deals across time periods: 9-13% is Good, 13-18% is Strong, above 18% often indicates aggressive assumptions worth verifying. Below 6% IRR loses to passive index investing on a risk-adjusted basis." },
  { q: "Does this calculator include taxes?", a: "Partial after-tax: pre-tax annual cash flow is shown (income tax on rental profit NOT modeled), estimated depreciation benefit is added, and sale tax is deducted at exit (Depreciation Recapture 25% + Long-Term Capital Gains on remaining gain). This is a partial-tax model, not fully after-tax. It is more accurate than simplified single-rate calculators but not a substitute for CPA analysis of your specific tax situation." },
  { q: "Why is there a separate Depreciation Recapture tax?", a: "When you sell a depreciated property, the IRS recaptures depreciation deductions taken over the hold period at a flat 25% federal rate (IRC §1250, unrecaptured Section 1250 gain). The remaining gain above accumulated depreciation is then taxed at standard LTCG rates (15-20%). This split is significantly more accurate than single combined-rate simplifications used by most consumer calculators, which underestimate tax liability by 20-35% in typical scenarios." },
  { q: "Can IRR be negative? Is that a bug?", a: "No — negative IRR is a legitimate output, not a bug. It means the deal projects a loss over the specified hold period, and you would earn more keeping the same cash in a savings account or other investment. The calculator displays negative IRR with a red banner to draw attention. Review your assumptions — especially appreciation, rent growth, and rehab budget. If inputs are realistic and IRR remains negative, the deal is genuinely weak for that hold period." },
  { q: "What hold period should I use?", a: "Default is 10 years, which represents a typical long-hold rental strategy. For retirement planning, use 20-30 years to see cumulative wealth growth. For specific exit strategies, use the Compare Sell Years mode to compare two specific exit timings. Warning: hold periods of 3 years or fewer are heavily skewed by selling costs and sale tax — early exits are very expensive. Use Mode 1 with your specific target hold period, not Mode 2 sensitivity checkpoints, for sub-5-year analysis." },
  { q: "Can I import a deal from Rental Property Calculator?", a: "Yes. The Rental Property Calculator has an 'Analyze long-term ROI' button in the results section that pre-fills this calculator via URL parameters. All acquisition, financing, rental income, and market assumption fields transfer automatically. You only need to specify Hold Period and optionally adjust tax parameters before reviewing the lifetime wealth projection. Year 1 CoC should match between the two calculators for the same inputs." },
  { q: "Does this handle 1031 Exchange scenarios?", a: "Not in v1. A 1031 Exchange requires replacement property assumptions (new basis, cash flow, appreciation assumptions for the new property) that this calculator cannot model without significant additional inputs. This is a v2 roadmap feature. For 1031 Exchange planning, consult a real estate CPA and qualified intermediary — the timing rules and identification requirements require professional guidance regardless of calculator support." },
  { q: "What's the Wealth Break-Even Hold Period?", a: "The Wealth Break-Even Hold Period is the first year at which your cumulative wealth (including hypothetical sale tax if you sold that year) turns positive — meaning you've earned back your initial cash investment plus more. Typical US rentals hit Wealth Break-Even at Year 4-7 under base assumptions. This is NOT the same as operational cash flow break-even (computed by the Rental Property Calculator). A 'Beyond 30 years' result means the deal doesn't pay back total wealth within the modeled horizon — review your inputs." },
]

// ─── 4. CORE CALCULATION ENGINE ───────────────────────────────────────────────

// Get effective form values with defaults
const f = computed(() => ({
  purchasePrice: form.purchasePrice || 0,
  downPayment: form.downPayment ?? 25,
  closingCosts: form.closingCosts ?? 2,
  rehab: form.rehab || 0,
  loanRate: form.loanRate ?? 7.5,
  loanTerm: form.loanTerm ?? 30,
  monthlyRent: form.monthlyRent || 0,
  vacancy: form.vacancy ?? 8,
  rentGrowth: form.rentGrowth ?? 3,
  opex: form.opex ?? 35,
  appreciation: form.appreciation ?? 3,
  holdPeriod: Math.max(1, Math.min(30, form.holdPeriod ?? 10)),
  marginalTax: form.marginalTax ?? 24,
  landValue: form.landValue ?? 20,
  sellingCost: form.sellingCost ?? 7,
  fedLTCG: form.fedLTCG ?? 15,
  stateCG: form.stateCG ?? 0,
  sellYearA: Math.max(1, Math.min(30, form.sellYearA ?? 7)),
  sellYearB: Math.max(1, Math.min(30, form.sellYearB ?? 15)),
}))

const hasResult = computed(() => f.value.purchasePrice > 0 && f.value.monthlyRent > 0)

// Newton-Raphson IRR solver
function solveIRR(cashFlows) {
  if (!cashFlows || cashFlows.length < 2) return { irr: 0, approximated: true }

  // Check for valid sign change
  const hasNeg = cashFlows.some(cf => cf < 0)
  const hasPos = cashFlows.some(cf => cf > 0)
  if (!hasNeg || !hasPos) return { irr: 0, approximated: true }

  let r = 0.10
  for (let iter = 0; iter < 200; iter++) {
    let npv = 0
    let dnpv = 0
    for (let t = 0; t < cashFlows.length; t++) {
      const denom = Math.pow(1 + r, t)
      npv += cashFlows[t] / denom
      if (t > 0) dnpv -= t * cashFlows[t] / (denom * (1 + r))
    }
    if (Math.abs(dnpv) < 1e-12) break
    const newR = r - npv / dnpv
    if (Math.abs(newR - r) < 0.00001) {
      return { irr: newR * 100, approximated: false }
    }
    // Handle divergence
    if (Math.abs(newR) > 10) {
      r = (r > 0) ? 0.5 : -0.5
    } else {
      r = newR
    }
  }

  return { irr: r * 100, approximated: false }
}

// Core computation for given hold year and overrides
function computeForYear(holdYears, overrides = {}) {
  const p = { ...f.value, ...overrides }
  if (p.purchasePrice <= 0 || p.monthlyRent <= 0) return null

  holdYears = Math.max(1, Math.min(30, holdYears))

  // Phase 1
  const downPaymentAmt = p.purchasePrice * (p.downPayment / 100)
  const closingAmt = p.purchasePrice * (p.closingCosts / 100)
  const initialCash = downPaymentAmt + closingAmt + p.rehab
  if (initialCash <= 0) return null
  // Guard: prevent astronomical ROI from near-zero initial investment
  if (initialCash < 500) return null

  // Phase 2: Amortization
  const loanAmount = p.purchasePrice - downPaymentAmt
  const totalMonths = (p.loanTerm || 30) * 12
  const holdMonths = holdYears * 12

  let monthlyPayment = 0
  let principalPaydown = 0
  let remainingLoan = loanAmount

  if (loanAmount > 0 && p.loanRate > 0) {
    const monthlyRate = (p.loanRate / 100) / 12
    if (monthlyRate > 0) {
      const factor = Math.pow(1 + monthlyRate, totalMonths)
      monthlyPayment = loanAmount * (monthlyRate * factor) / (factor - 1)
    } else {
      monthlyPayment = loanAmount / totalMonths
    }

    let bal = loanAmount
    for (let m = 1; m <= Math.min(holdMonths, totalMonths); m++) {
      const interest = bal * ((p.loanRate / 100) / 12)
      const principal = Math.min(monthlyPayment - interest, bal)
      bal = Math.max(0, bal - principal)
    }
    remainingLoan = bal
    principalPaydown = loanAmount - bal
  } else if (loanAmount > 0) {
    remainingLoan = Math.max(0, loanAmount - (loanAmount / totalMonths) * holdMonths)
    principalPaydown = loanAmount - remainingLoan
  }

  const annualDebtService = monthlyPayment * 12

  // Phase 3: Year-by-Year
  const depreciableBasis = (p.purchasePrice + p.rehab) * (1 - p.landValue / 100)
  const annualDepreciation = depreciableBasis / 27.5
  const annualDeprBenefit = annualDepreciation * (p.marginalTax / 100)

  const irrCashFlows = [-initialCash]
  let cumCashFlow = 0

  for (let y = 1; y <= holdYears; y++) {
    const grossRent = p.monthlyRent * 12 * Math.pow(1 + p.rentGrowth / 100, y - 1)
    const effectiveRent = grossRent * (1 - p.vacancy / 100)
    const noi = effectiveRent * (1 - p.opex / 100)
    const preTaxCF = noi - annualDebtService
    cumCashFlow += preTaxCF

    if (y < holdYears) {
      irrCashFlows.push(preTaxCF)
    }
  }

  // Year 1 CoC
  const yr1GrossRent = p.monthlyRent * 12
  const yr1EffRent = yr1GrossRent * (1 - p.vacancy / 100)
  const yr1NOI = yr1EffRent * (1 - p.opex / 100)
  const yr1CF = yr1NOI - annualDebtService
  const yr1CoC = initialCash > 0 ? (yr1CF / initialCash) * 100 : 0

  // Phase 4+5: Terminal Sale with SPLIT tax
  const saleValue = p.purchasePrice * Math.pow(1 + p.appreciation / 100, holdYears)
  const sellingCosts = saleValue * (p.sellingCost / 100)
  const netSalePrice = saleValue - sellingCosts

  const accumDepr = annualDepreciation * holdYears
  const adjustedBasis = p.purchasePrice + p.rehab - accumDepr
  const totalGain = netSalePrice - adjustedBasis

  // Rule 3 SPLIT tax with min/max guards
  let recaptureTax = 0
  let ltcgTax = 0
  let totalSaleTax = 0

  if (totalGain > 0) {
    const recaptureBase = Math.min(accumDepr, Math.max(0, totalGain))
    recaptureTax = recaptureBase * 0.25
    const ltcgGain = Math.max(0, totalGain - accumDepr)
    ltcgTax = ltcgGain * ((p.fedLTCG + p.stateCG) / 100)
    totalSaleTax = recaptureTax + ltcgTax
  }

  const netProceeds = saleValue - sellingCosts - remainingLoan - totalSaleTax
  const equityAtSale = saleValue - remainingLoan

  // Last IRR cash flow includes terminal
  const lastYearGrossRent = p.monthlyRent * 12 * Math.pow(1 + p.rentGrowth / 100, holdYears - 1)
  const lastYearEffRent = lastYearGrossRent * (1 - p.vacancy / 100)
  const lastYearNOI = lastYearEffRent * (1 - p.opex / 100)
  const lastYearCF = lastYearNOI - annualDebtService
  irrCashFlows.push(lastYearCF + netProceeds)

  // Phase 5: Waterfall
  const appreciationAmt = saleValue - p.purchasePrice
  const totalDeprBenefit = annualDeprBenefit * holdYears
  const totalWealth = cumCashFlow + principalPaydown + appreciationAmt + totalDeprBenefit - totalSaleTax
  const totalROI = (totalWealth / initialCash) * 100

  // Phase 6: IRR
  const irrResult = solveIRR(irrCashFlows)
  let irr = irrResult.irr
  let irrApproximated = irrResult.approximated

  if (irrApproximated || Math.abs(irr) > 100) {
    // CAGR fallback
    if (totalWealth > -initialCash && initialCash > 0) {
      const cagr = Math.pow((totalWealth + initialCash) / initialCash, 1 / holdYears) - 1
      irr = cagr * 100
    } else {
      irr = 0
    }
    irrApproximated = true
  }

  return {
    initialCash,
    totalWealth,
    totalROI,
    irr,
    irrApproximated,
    yr1CoC,
    equityAtSale,
    netProceeds,
    remainingLoan,
    cumCashFlow,
    principalPaydown,
    wf: {
      cashFlow: cumCashFlow,
      principalPaydown,
      appreciation: appreciationAmt,
      deprBenefit: totalDeprBenefit,
      saleTax: totalSaleTax,
      recaptureTax,
      ltcgTax,
    },
    riskNote: holdYears <= 3 ? 'Short hold — selling costs dominate' : holdYears >= 20 ? 'Long hold — appreciation-dependent' : 'Standard hold'
  }
}

// Wealth Break-Even computation
function computeWealthBreakEven(overrides = {}) {
  const p = { ...f.value, ...overrides }
  if (p.purchasePrice <= 0 || p.monthlyRent <= 0) return null

  const downPaymentAmt = p.purchasePrice * (p.downPayment / 100)
  const closingAmt = p.purchasePrice * (p.closingCosts / 100)
  const initialCash = downPaymentAmt + closingAmt + p.rehab
  if (initialCash <= 0) return null

  for (let y = 1; y <= 30; y++) {
    const r = computeForYear(y, overrides)
    if (!r) continue
    if (r.totalWealth >= 0) return y
  }
  return null // Beyond 30 years
}

// ─── 5. COMPUTED RESULTS ──────────────────────────────────────────────────────

const result = computed(() => {
  if (!hasResult.value) return null
  const r = computeForYear(f.value.holdPeriod)
  if (!r) return null
  r.wealthBreakEven = computeWealthBreakEven()
  return r
})

const waterfallMax = computed(() => {
  if (!result.value) return 1
  const { cashFlow, principalPaydown, appreciation, deprBenefit, saleTax } = result.value.wf
  return Math.max(1, Math.abs(cashFlow), principalPaydown, appreciation, deprBenefit, saleTax)
})

const roiTierLabel = computed(() => {
  if (!result.value) return ''
  const roi = result.value.totalROI
  if (roi >= 220) return 'Strong'
  if (roi >= 120) return 'Average'
  if (roi >= 60) return 'Below Average'
  return 'Weak'
})

const roiTierClass = computed(() => {
  if (!result.value) return ''
  const roi = result.value.totalROI
  if (roi >= 220) return 'bg-green-100 text-green-700'
  if (roi >= 120) return 'bg-blue-100 text-blue-700'
  if (roi >= 60) return 'bg-amber-100 text-amber-700'
  return 'bg-red-100 text-red-700'
})

const irrDisplayClass = computed(() => {
  if (!result.value) return 'bg-indigo-50 border-indigo-100'
  if (result.value.irrApproximated) return 'bg-amber-50 border-amber-200'
  return 'bg-indigo-50 border-indigo-100'
})

// Hold Period Sensitivity (Mode 2)
const holdSensitivity = computed(() => {
  if (!hasResult.value) return {}
  const data = {}
  for (const y of [5, 10, 15, 20, 25, 30]) {
    data[y] = computeForYear(y)
  }
  return data
})

const sensitivityOptimalYear = computed(() => {
  const hs = holdSensitivity.value
  let bestYear = 10
  let bestIRR = -Infinity
  for (const y of [5, 10, 15, 20, 25, 30]) {
    if (hs[y] && hs[y].irr > bestIRR) {
      bestIRR = hs[y].irr
      bestYear = y
    }
  }
  return bestYear
})

// Compare Sell Years (Mode 3)
const compareYearsValid = computed(() => {
  return f.value.sellYearA > 0 && f.value.sellYearB > 0 && f.value.sellYearA !== f.value.sellYearB && hasResult.value
})

const compareResultA = computed(() => compareYearsValid.value ? computeForYear(f.value.sellYearA) : null)
const compareResultB = computed(() => compareYearsValid.value ? computeForYear(f.value.sellYearB) : null)
const compareWinner = computed(() => {
  if (!compareResultA.value || !compareResultB.value) return null
  return compareResultA.value.irr >= compareResultB.value.irr ? 'A' : 'B'
})

// Scenarios
function computeScenario(type) {
  if (!hasResult.value) return null
  const overrides = {}
  const base = f.value
  if (type === 'conservative') {
    overrides.appreciation = Math.max(0, base.appreciation - 2)
    overrides.rentGrowth = Math.max(0, base.rentGrowth - 1)
    overrides.vacancy = base.vacancy + 5
    overrides.opex = base.opex + 5
  } else if (type === 'optimistic') {
    overrides.appreciation = base.appreciation + 1
    overrides.rentGrowth = base.rentGrowth + 1
    overrides.vacancy = Math.max(3, base.vacancy - 2)
    overrides.opex = Math.max(25, base.opex - 2)
  }
  const r = computeForYear(f.value.holdPeriod, overrides)
  if (!r) return null
  r.wealthBreakEven = computeWealthBreakEven(overrides)
  return r
}

const scenarioResult = computed(() => {
  if (activeScenario.value === 'base') return result.value
  return computeScenario(activeScenario.value)
})

const irrSensitiveWarning = computed(() => {
  if (!hasResult.value) return false
  const cons = computeScenario('conservative')
  const opt = computeScenario('optimistic')
  if (!cons || !opt) return false
  return Math.abs(opt.irr - cons.irr) > 3
})

// Sensitivity Tables
const sensitivityTable1 = computed(() => {
  if (!hasResult.value) return {}
  const data = {}
  for (const app of [0, 1, 2, 3, 4, 5, 6]) {
    data[app] = {}
    for (const rg of [0, 1, 2, 3, 4, 5]) {
      const r = computeForYear(f.value.holdPeriod, { appreciation: app, rentGrowth: rg })
      data[app][rg] = r ? r.totalROI : null
    }
  }
  return data
})

const sensitivityTable2 = computed(() => {
  if (!hasResult.value) return {}
  const data = {}
  for (const hold of [5, 10, 15, 20, 25, 30]) {
    data[hold] = {}
    for (const app of [1, 2, 3, 4, 5]) {
      const r = computeForYear(hold, { appreciation: app })
      data[hold][app] = r ? r.irr : null
    }
  }
  return data
})

const sensitivityTable3 = computed(() => {
  if (!hasResult.value) return {}
  const data = {}
  for (const dp of [15, 20, 25, 30, 40, 50]) {
    data[dp] = {}
    for (const hold of [5, 10, 15, 20]) {
      const r = computeForYear(hold, { downPayment: dp })
      data[dp][hold] = r ? r.totalROI : null
    }
  }
  return data
})

// Year-by-Year equity chart points
const equityChartPoints = computed(() => {
  if (!hasResult.value || !result.value) return { cf: [], pp: [], app: [] }

  const p = f.value
  const hold = p.holdPeriod
  const chartW = Math.max(280, hold * 30)
  const chartH = 110

  const downPaymentAmt = p.purchasePrice * (p.downPayment / 100)
  const loanAmount = p.purchasePrice - downPaymentAmt
  const monthlyRate = (p.loanRate / 100) / 12
  const totalMonths = (p.loanTerm || 30) * 12
  let monthlyPayment = 0
  if (loanAmount > 0 && monthlyRate > 0) {
    const factor = Math.pow(1 + monthlyRate, totalMonths)
    monthlyPayment = loanAmount * (monthlyRate * factor) / (factor - 1)
  }
  const annualDebtService = monthlyPayment * 12
  const depreciableBasis = (p.purchasePrice + p.rehab) * (1 - p.landValue / 100)
  const annualDepreciation = depreciableBasis / 27.5

  const cfPoints = [], ppPoints = [], appPoints = []
  const allVals = []

  let cumCF = 0
  for (let y = 1; y <= hold; y++) {
    const grossRent = p.monthlyRent * 12 * Math.pow(1 + p.rentGrowth / 100, y - 1)
    const effectiveRent = grossRent * (1 - p.vacancy / 100)
    const noi = effectiveRent * (1 - p.opex / 100)
    cumCF += noi - annualDebtService

    let bal = loanAmount
    if (loanAmount > 0 && monthlyRate > 0) {
      for (let m = 1; m <= y * 12 && m <= totalMonths; m++) {
        const interest = bal * monthlyRate
        const principal = Math.min(monthlyPayment - interest, bal)
        bal = Math.max(0, bal - principal)
      }
    }
    const pp = loanAmount - bal
    const app = p.purchasePrice * Math.pow(1 + p.appreciation / 100, y) - p.purchasePrice

    allVals.push(cumCF, pp, app)
    cfPoints.push({ y, v: cumCF })
    ppPoints.push({ y, v: pp })
    appPoints.push({ y, v: app })
  }

  const maxV = Math.max(1, ...allVals.map(Math.abs))

  const toSVG = (pts) => pts.map(({ y, v }) => {
    const x = (y / hold) * (chartW - 20) + 10
    const yCoord = chartH - (v / maxV) * (chartH - 10)
    return `${x},${Math.max(5, Math.min(chartH - 5, yCoord))}`
  })

  return {
    cf: toSVG(cfPoints),
    pp: toSVG(ppPoints),
    app: toSVG(appPoints),
  }
})

// Scenario panel result
const scenarioPanelResult = computed(() => {
  if (!result.value) return null
  const roi = result.value.totalROI
  const irr = result.value.irr
  return {
    primaryMetric: 'Total ROI',
    primaryValue: roi != null ? roi.toFixed(1) + '%' : '—',
    badgeLabel: roiTierLabel.value,
    badgeColor: roi >= 220 ? '#10b981' : roi >= 120 ? '#3b82f6' : roi >= 60 ? '#f59e0b' : '#ef4444',
    roi: roi,
    cashOnCash: irr,
    purchasePrice: f.value.purchasePrice,
    totalCashInvested: result.value.initialCash,
    annualCashFlow: result.value.totalWealth,
  }
})

// ─── 6. UTILITY FUNCTIONS ────────────────────────────────────────────────────

function formatCurrency(val) {
  if (val === null || val === undefined || isNaN(val)) return '—'
  const absVal = Math.abs(val)
  const prefix = val < 0 ? '-' : ''
  return prefix + '$' + Math.round(absVal).toLocaleString('en-US')
}

function formatCurrencyK(val) {
  if (val === null || val === undefined || isNaN(val)) return '—'
  const absVal = Math.abs(val)
  const prefix = val < 0 ? '-' : ''
  if (absVal >= 1000000) return prefix + '$' + (absVal / 1000000).toFixed(1) + 'M'
  if (absVal >= 1000) return prefix + '$' + Math.round(absVal / 1000) + 'K'
  return prefix + '$' + Math.round(absVal)
}

// ─── 7. ACTIONS ──────────────────────────────────────────────────────────────

function openSaveScenario() {
  triggerScenarioSave.value = true
  nextTick(() => { triggerScenarioSave.value = false })
}

function onScenarioSaved(_id) {
  // no-op — panel handles display
}

async function shareResult() {
  const params = new URLSearchParams()
  if (form.purchasePrice) params.set('p', form.purchasePrice)
  if (form.downPayment !== 25) params.set('dp', form.downPayment)
  if (form.closingCosts !== 2) params.set('cc', form.closingCosts)
  if (form.rehab) params.set('rb', form.rehab)
  if (form.loanRate !== 7.5) params.set('lr', form.loanRate)
  if (form.loanTerm !== 30) params.set('lt', form.loanTerm)
  if (form.monthlyRent) params.set('r', form.monthlyRent)
  if (form.vacancy !== 8) params.set('vc', form.vacancy)
  if (form.rentGrowth !== 3) params.set('gr', form.rentGrowth)
  if (form.opex !== 35) params.set('op', form.opex)
  if (form.appreciation !== 3) params.set('ga', form.appreciation)
  if (form.holdPeriod !== 10) params.set('hp', form.holdPeriod)
  if (form.marginalTax !== 24) params.set('mtr', form.marginalTax)
  if (form.landValue !== 20) params.set('lv', form.landValue)
  if (form.sellingCost !== 7) params.set('sc', form.sellingCost)
  if (form.fedLTCG !== 15) params.set('cgf', form.fedLTCG)
  if (form.stateCG !== 0) params.set('cgs', form.stateCG)

  const url = window.location.origin + window.location.pathname + (params.toString() ? '?' + params.toString() : '')

  try {
    await navigator.clipboard.writeText(url)
    shareSuccess.value = true
    setTimeout(() => { shareSuccess.value = false }, 3000)
  } catch {
    shareSuccess.value = true
    setTimeout(() => { shareSuccess.value = false }, 3000)
  }
}

async function exportPDF() {
  if (!result.value) return
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF()
  const r = result.value

  doc.setFontSize(18)
  doc.setTextColor(30, 58, 95)
  doc.text('Rental Property ROI Analysis', 20, 20)

  doc.setFontSize(10)
  doc.setTextColor(100, 100, 100)
  doc.text(`Generated by RealCalc | ${new Date().toLocaleDateString('en-US')}`, 20, 28)

  doc.setFontSize(11)
  doc.setTextColor(30, 30, 30)
  doc.text('Inputs', 20, 40)
  doc.setFontSize(9)
  doc.text(`Purchase Price: $${(form.purchasePrice || 0).toLocaleString()}`, 20, 48)
  doc.text(`Down Payment: ${form.downPayment ?? 25}%`, 20, 54)
  doc.text(`Monthly Rent: $${(form.monthlyRent || 0).toLocaleString()}`, 20, 60)
  doc.text(`Hold Period: ${f.value.holdPeriod} years`, 20, 66)
  doc.text(`Appreciation: ${form.appreciation ?? 3}%`, 20, 72)

  doc.setFontSize(11)
  doc.text('Results', 110, 40)
  doc.setFontSize(9)
  doc.text(`Initial Cash Invested: ${formatCurrency(r.initialCash)}`, 110, 48)
  doc.text(`Total Wealth Created: ${formatCurrency(r.totalWealth)}`, 110, 54)
  doc.text(`Total ROI: ${r.totalROI.toFixed(1)}%`, 110, 60)
  doc.text(`Annualized Return (IRR): ${r.irr.toFixed(1)}%${r.irrApproximated ? ' (approx)' : ''}`, 110, 66)
  doc.text(`Wealth Break-Even: ${r.wealthBreakEven ? 'Year ' + r.wealthBreakEven : 'Beyond 30 years'}`, 110, 72)

  doc.setFontSize(11)
  doc.text('Wealth Waterfall', 20, 85)
  doc.setFontSize(9)
  doc.text(`Pre-Tax Cash Flow: ${formatCurrency(r.wf.cashFlow)}`, 20, 93)
  doc.text(`Principal Paydown: ${formatCurrency(r.wf.principalPaydown)}`, 20, 99)
  doc.text(`Appreciation: ${formatCurrency(r.wf.appreciation)}`, 20, 105)
  doc.text(`Estimated Depreciation Benefit: ${formatCurrency(r.wf.deprBenefit)}`, 20, 111)
  doc.text(`Depreciation Recapture Tax (25%): -${formatCurrency(r.wf.recaptureTax)}`, 20, 117)
  doc.text(`Capital Gains Tax (LTCG): -${formatCurrency(r.wf.ltcgTax)}`, 20, 123)
  doc.text(`Total Sale Tax: -${formatCurrency(r.wf.saleTax)}`, 20, 129)

  doc.setFontSize(10)
  doc.setTextColor(79, 70, 229)
  doc.text(`Total Wealth Created: ${formatCurrency(r.totalWealth)}`, 20, 138)

  doc.setFontSize(7)
  doc.setTextColor(150, 150, 150)
  doc.text('This analysis uses pre-tax cash flow with estimated depreciation benefit and simplified sale tax. Annual income tax on rental profit is NOT modeled.', 20, 275)
  doc.text('Consult a real estate CPA for precise after-tax planning. Not investment advice.', 20, 280)

  doc.save(`rental-property-roi-${Date.now()}.pdf`)
}

// ─── 8. URL PARAM PARSING ─────────────────────────────────────────────────────

onMounted(() => {
  if (typeof window === 'undefined') return
  const p = new URLSearchParams(window.location.search)
  if (p.has('p')) form.purchasePrice = Number(p.get('p'))
  if (p.has('dp')) form.downPayment = Number(p.get('dp'))
  if (p.has('cc')) form.closingCosts = Number(p.get('cc'))
  if (p.has('rb')) form.rehab = Number(p.get('rb'))
  if (p.has('lr')) form.loanRate = Number(p.get('lr'))
  if (p.has('lt')) form.loanTerm = Number(p.get('lt'))
  if (p.has('r')) form.monthlyRent = Number(p.get('r'))
  if (p.has('vc')) form.vacancy = Number(p.get('vc'))
  if (p.has('gr')) form.rentGrowth = Number(p.get('gr'))
  if (p.has('op')) form.opex = Number(p.get('op'))
  if (p.has('ga')) form.appreciation = Number(p.get('ga'))
  if (p.has('hp')) form.holdPeriod = Number(p.get('hp'))
  if (p.has('mtr')) form.marginalTax = Number(p.get('mtr'))
  if (p.has('lv')) form.landValue = Number(p.get('lv'))
  if (p.has('sc')) form.sellingCost = Number(p.get('sc'))
  if (p.has('cgf')) form.fedLTCG = Number(p.get('cgf'))
  if (p.has('cgs')) form.stateCG = Number(p.get('cgs'))
  if (p.has('sya')) form.sellYearA = Number(p.get('sya'))
  if (p.has('syb')) form.sellYearB = Number(p.get('syb'))
  if (p.has('mode')) calcMode.value = p.get('mode')
})
</script>
