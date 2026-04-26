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
            class="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-lg transition hover:opacity-90"
            style="background: #f59e0b; color: #1e3a5f;">
            Get Started Free
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- BREADCRUMB -->
    <div class="bg-white border-b border-gray-100 px-4 py-3">
      <div class="max-w-[1100px] mx-auto">
        <nav aria-label="Breadcrumb">
          <ol class="flex items-center gap-2 text-sm text-gray-400">
            <li><NuxtLink to="/" class="hover:text-gray-600 transition">Home</NuxtLink></li>
            <li><span>/</span></li>
            <li><NuxtLink to="/calculators" class="hover:text-gray-600 transition">Calculators</NuxtLink></li>
            <li><span>/</span></li>
            <li class="text-gray-700 font-semibold">Property Cash Flow Calculator</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- PAGE TITLE + ON THIS PAGE NAV -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-6">
        <div class="mb-4">
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            Property Cash Flow Calculator — Monthly CF + Break-even Occupancy
          </h1>
          <p class="text-gray-500 mt-2 text-base">Year 1 stabilized cash flow analysis with Cash Flow Verdict, DCR, OER, and Composition breakdown — for investor decisions</p>
        </div>

        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#saved-scenarios" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Saved Scenarios</a></li>
            <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            <li><a href="#what-is" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is Cash Flow</a></li>
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
              <li><a href="#saved-scenarios" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Saved Scenarios</a></li>
              <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            </ul>
            <ul v-show="isNavExpanded" class="flex flex-col gap-y-2 mt-2">
              <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
              <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
              <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
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

    <!-- MOBILE LIVE BAR -->
    <div class="lg:hidden sticky top-[4.5rem] z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <div class="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <svg class="w-4 h-4 flex-shrink-0" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>Cash Flow</span>
        </div>
        <div class="flex items-center gap-3">
          <template v-if="results">
            <span class="text-xl font-extrabold leading-none" :class="results.monthly_cash_flow >= 0 ? 'text-green-600' : 'text-red-600'">
              {{ results.monthly_cash_flow >= 0 ? '+' : '' }}{{ fmtDollar(results.monthly_cash_flow) }}/mo
            </span>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full border" :class="verdictBadgeClass(results.verdict)">{{ results.verdict }}</span>
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

      <div class="rounded-3xl p-[3px]" style="background: linear-gradient(135deg, #1e3a5f 0%, #f59e0b 50%, #1e3a5f 100%);">
      <div class="bg-white rounded-[21px] shadow-xl shadow-slate-200/60" style="overflow: clip;">

      <!-- Calculator grid -->
      <div class="grid lg:grid-cols-[3fr_2fr] gap-0">

        <!-- ══ LEFT: INPUTS ══ -->
        <div class="border-r border-gray-100 p-6 space-y-6">

          <!-- FINANCING -->
          <div>
            <h2 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Property &amp; Financing</h2>
            <div class="space-y-3">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1" for="purchase_price">Purchase Price</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                  <input id="purchase_price" v-model.number="inp.purchase_price" type="number" min="0" step="1000"
                    placeholder="Enter purchase price"
                    class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="down_payment_pct">Down Payment %</label>
                  <div class="relative">
                    <input id="down_payment_pct" v-model.number="inp.down_payment_pct" type="number" min="0" max="100" step="0.5"
                      placeholder="Enter down payment percentage"
                      class="w-full pl-4 pr-8 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="mortgage_rate_pct">Mortgage Rate %</label>
                  <div class="relative">
                    <input id="mortgage_rate_pct" v-model.number="inp.mortgage_rate_pct" type="number" min="0" max="30" step="0.125"
                      placeholder="Enter mortgage interest rate"
                      class="w-full pl-4 pr-8 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="loan_term_years">Loan Term (years)</label>
                  <input id="loan_term_years" v-model.number="inp.loan_term_years" type="number" min="1" max="40" step="1"
                    placeholder="Enter loan term in years"
                    class="w-full px-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="closing_costs_pct">Closing Costs %</label>
                  <div class="relative">
                    <input id="closing_costs_pct" v-model.number="inp.closing_costs_pct" type="number" min="0" max="10" step="0.1"
                      placeholder="Enter closing costs percentage"
                      class="w-full pl-4 pr-8 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- INCOME -->
          <div>
            <h2 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Income</h2>
            <div class="space-y-3">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1" for="monthly_rent">Monthly Rent</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                  <input id="monthly_rent" v-model.number="inp.monthly_rent" type="number" min="0" step="50"
                    placeholder="Enter monthly rent"
                    class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="other_monthly_income">Other Income/mo</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                    <input id="other_monthly_income" v-model.number="inp.other_monthly_income" type="number" min="0" step="10"
                      placeholder="Enter other monthly income"
                      class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="vacancy_pct">Vacancy %</label>
                  <div class="relative">
                    <input id="vacancy_pct" v-model.number="inp.vacancy_pct" type="number" min="0" max="100" step="0.5"
                      placeholder="Enter vacancy rate"
                      class="w-full pl-4 pr-8 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- OPERATING EXPENSES -->
          <div>
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xs font-bold uppercase tracking-widest text-gray-400">Operating Expenses</h2>
              <!-- Toggle %/$ -->
              <div class="flex items-center bg-gray-100 rounded-lg p-1 gap-1">
                <button @click="opexMode = 'pct'"
                  :class="['px-3 py-1 rounded-md text-xs font-bold transition', opexMode === 'pct' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700']">
                  %
                </button>
                <button @click="opexMode = 'dollar'"
                  :class="['px-3 py-1 rounded-md text-xs font-bold transition', opexMode === 'dollar' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700']">
                  $
                </button>
              </div>
            </div>
            <div class="space-y-3">
              <!-- Property Tax -->
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">Property Tax</label>
                  <div v-if="opexMode === 'pct'" class="relative">
                    <input v-model.number="inp.property_tax_pct" type="number" min="0" max="5" step="0.1"
                      placeholder="Enter property tax rate"
                      class="w-full pl-4 pr-8 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                  <div v-else class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                    <input v-model.number="inp.property_tax_dollar" type="number" min="0" step="100"
                      placeholder="Enter annual property taxes"
                      class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">Insurance (annual)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                    <input v-model.number="inp.insurance_annual" type="number" min="0" step="100"
                      placeholder="Enter annual insurance cost"
                      class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">HOA (monthly)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                    <input v-model.number="inp.hoa_monthly" type="number" min="0" step="10"
                      placeholder="Enter monthly HOA fees"
                      class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">Property Mgmt %</label>
                  <div class="relative">
                    <input v-model.number="inp.pm_pct" type="number" min="0" max="20" step="0.5"
                      placeholder="Enter management percentage"
                      class="w-full pl-4 pr-8 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">Maintenance %</label>
                  <div class="relative">
                    <input v-model.number="inp.maint_pct" type="number" min="0" max="20" step="0.5"
                      placeholder="Enter maintenance percentage"
                      class="w-full pl-4 pr-8 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">CapEx Reserve %</label>
                  <div class="relative">
                    <input v-model.number="inp.capex_pct" type="number" min="0" max="20" step="0.5"
                      placeholder="Enter CapEx reserve percentage"
                      class="w-full pl-4 pr-8 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">Utilities (monthly)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                    <input v-model.number="inp.utilities_monthly" type="number" min="0" step="10"
                      placeholder="Enter monthly utilities"
                      class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">Other (monthly)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                    <input v-model.number="inp.other_monthly" type="number" min="0" step="10"
                      placeholder="Enter other monthly expenses"
                      class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SHARE + PDF -->
          <div class="flex gap-3 pt-2">
            <button @click="copyShareableURL"
              class="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-gray-200 hover:border-gray-300 text-gray-600 font-semibold text-sm transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
              </svg>
              Share
            </button>
            <button @click="exportPDF"
              class="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-gray-200 hover:border-gray-300 text-gray-600 font-semibold text-sm transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Export PDF
            </button>
          </div>

        </div><!-- end left -->

        <!-- ══ RIGHT: RESULTS ══ -->
        <div class="p-6 space-y-4 bg-gray-50/50">

          <!-- Empty state -->
          <div v-if="!results" class="flex flex-col items-center justify-center py-20 text-center">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style="background: #e8f4fd;">
              <svg class="w-8 h-8" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <p class="text-gray-600 font-semibold text-base">Enter purchase price and rent</p>
            <p class="text-gray-400 text-sm mt-1">Results appear instantly as you type</p>
          </div>

          <template v-if="results">

            <!-- 3b. CASH FLOW VERDICT CARD -->
            <div class="rounded-2xl p-4 border-2" :class="verdictCardClass(results.verdict)">
              <div class="flex items-start justify-between">
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest mb-1 opacity-70">Cash Flow Verdict</p>
                  <div class="flex items-center gap-2">
                    <span class="text-2xl">{{ verdictIcon(results.verdict) }}</span>
                    <span class="text-2xl font-extrabold">{{ results.verdict }}</span>
                  </div>
                  <p class="text-sm mt-1 font-medium opacity-80">{{ verdictSubtitle(results.verdict) }}</p>
                </div>
              </div>
            </div>

            <!-- 3c. PRIMARY RESULT CARD -->
            <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Monthly Cash Flow</p>
              <div class="flex items-end gap-3 mb-1">
                <span class="text-4xl font-extrabold" :class="results.monthly_cash_flow >= 0 ? 'text-green-600' : 'text-red-600'">
                  {{ results.monthly_cash_flow >= 0 ? '+' : '' }}{{ fmtDollar(results.monthly_cash_flow) }}
                </span>
                <span class="text-gray-400 text-sm font-medium mb-1">/month</span>
              </div>
              <div class="flex gap-4 text-sm mb-3">
                <div>
                  <span class="text-gray-500">Annual:</span>
                  <span class="font-bold ml-1" :class="results.annual_cash_flow >= 0 ? 'text-green-600' : 'text-red-600'">
                    {{ results.annual_cash_flow >= 0 ? '+' : '' }}{{ fmtDollar(results.annual_cash_flow) }}
                  </span>
                </div>
                <div>
                  <span class="text-gray-500">Cash Flow Yield:</span>
                  <span class="font-bold ml-1 text-gray-800">{{ fmt2(results.cash_flow_yield_pct) }}%</span>
                </div>
              </div>
              <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 flex gap-2">
                <span class="text-amber-500 text-sm flex-shrink-0">⚠</span>
                <p class="text-amber-800 text-xs font-medium leading-snug">
                  <strong>Stabilized Year 1 average.</strong> Real months vary — vacancies, turnover, and repairs concentrate unpredictably. Plan for negative months even when annual cash flow is positive.
                </p>
              </div>
            </div>

            <!-- 3d. BREAK-EVEN OCCUPANCY CARD -->
            <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Break-even Occupancy</p>
              <div class="flex items-center gap-3 mb-2">
                <span class="text-3xl font-extrabold" :class="breakEvenColor(results.break_even_tier)">
                  {{ results.break_even_occupancy_pct > 100 ? '&gt;100' : fmt1(results.break_even_occupancy_pct) }}%
                </span>
                <span class="px-2.5 py-1 rounded-full text-xs font-bold border" :class="breakEvenBadgeClass(results.break_even_tier)">
                  {{ breakEvenTierLabel(results.break_even_tier) }}
                </span>
              </div>
              <p class="text-sm text-gray-600 font-medium">
                <template v-if="results.break_even_occupancy_pct <= 100">
                  You can afford ~<strong>{{ fmt1(Math.max(0, results.vacancy_months_tolerable)) }} months</strong> vacancy per year before losing money.
                </template>
                <template v-else>
                  Property cannot break even at full occupancy — expenses exceed gross rent.
                </template>
              </p>
            </div>

            <!-- 3e. SECONDARY METRICS PANEL -->
            <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Key Metrics</p>
              <div class="space-y-2.5">
                <div class="flex justify-between items-center text-sm">
                  <span class="text-gray-500">NOI (Annual)</span>
                  <span class="font-bold text-gray-800">{{ fmtDollar(results.noi_annual) }}</span>
                </div>
                <div class="flex justify-between items-center text-sm">
                  <span class="text-gray-500">Debt Service (Annual)</span>
                  <span class="font-bold text-gray-800">{{ fmtDollar(results.annual_debt_service) }}</span>
                </div>
                <div class="flex justify-between items-center text-sm">
                  <span class="text-gray-500">Operating Expense Ratio</span>
                  <span class="font-bold" :class="results.oer_pct > 50 ? 'text-red-600' : results.oer_pct > 35 ? 'text-amber-600' : 'text-green-600'">
                    {{ fmt1(results.oer_pct) }}%
                  </span>
                </div>
                <div class="border-t border-gray-100 pt-2.5">
                  <div class="flex justify-between items-start text-sm">
                    <span class="text-gray-500">Debt Coverage Ratio (DCR)</span>
                    <span class="font-bold text-gray-800 text-right">
                      {{ results.dcr === null ? 'N/A' : fmt2(results.dcr) }}
                    </span>
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5">{{ dcrInterpretation(results.dcr) }}</p>
                </div>
                <div class="flex justify-between items-center text-sm">
                  <span class="text-gray-500">Cash Flow Yield (= CoC)</span>
                  <span class="font-bold" :class="results.cash_flow_yield_pct >= 8 ? 'text-green-600' : results.cash_flow_yield_pct >= 5 ? 'text-amber-600' : 'text-gray-800'">
                    {{ fmt2(results.cash_flow_yield_pct) }}%
                  </span>
                </div>
              </div>
            </div>

            <!-- 3f. CASH FLOW COMPOSITION BREAKDOWN -->
            <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Cash Flow Composition</p>
              <p class="text-xs text-gray-400 mb-3">Where each rent dollar goes</p>
              <!-- Horizontal stacked bar SVG -->
              <div class="overflow-hidden rounded-lg mb-3">
                <svg width="100%" height="32" viewBox="0 0 400 32" preserveAspectRatio="none">
                  <template v-for="(seg, i) in compositionSegments" :key="i">
                    <rect :x="seg.x" y="0" :width="seg.w" height="32" :fill="seg.color" />
                  </template>
                </svg>
              </div>
              <!-- Legend -->
              <div class="flex flex-wrap gap-2">
                <div v-for="(seg, i) in compositionSegments" :key="i" class="flex items-center gap-1">
                  <div class="w-3 h-3 rounded-sm flex-shrink-0" :style="`background:${seg.color}`"></div>
                  <span class="text-xs text-gray-600">{{ seg.label }} {{ fmt0(seg.pct) }}¢</span>
                </div>
              </div>
            </div>

            <!-- 3g. MONTHLY CASH FLOW BAR (12 months) -->
            <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Monthly Cash Flow (12 months)</p>
              <div class="overflow-x-auto">
                <svg width="100%" height="100" viewBox="0 0 480 100" preserveAspectRatio="xMidYMid meet">
                  <!-- zero line -->
                  <line x1="0" :y1="monthlyBarZeroY" x2="480" :y2="monthlyBarZeroY" stroke="#e5e7eb" stroke-width="1"/>
                  <template v-for="(bar, i) in monthlyBars" :key="i">
                    <rect :x="bar.x" :y="bar.y" :width="bar.w" :height="bar.h" :fill="bar.color" rx="2"/>
                    <text :x="bar.x + bar.w/2" y="98" text-anchor="middle" font-size="8" fill="#9ca3af">{{ bar.label }}</text>
                  </template>
                </svg>
              </div>
            </div>

            <!-- 3h. BREAK-EVEN THRESHOLD VISUALIZATION -->
            <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Break-even Threshold</p>
              <p class="text-xs text-gray-400 mb-2">Annual cash flow at different occupancy levels</p>
              <div class="overflow-x-auto">
                <svg width="100%" height="120" viewBox="0 0 400 120" preserveAspectRatio="xMidYMid meet">
                  <!-- Green cushion area -->
                  <rect v-if="beThresholdData.cushionX1 < beThresholdData.cushionX2"
                    :x="beThresholdData.cushionX1" y="10"
                    :width="beThresholdData.cushionX2 - beThresholdData.cushionX1" height="80"
                    fill="#dcfce7" opacity="0.6"/>
                  <!-- Red zone if BE > 100% -->
                  <rect v-if="results.break_even_occupancy_pct > 100" x="0" y="10" width="400" height="80" fill="#fee2e2" opacity="0.4"/>
                  <!-- Zero line -->
                  <line x1="20" :y1="beThresholdData.zeroY" x2="390" :y2="beThresholdData.zeroY" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4,3"/>
                  <!-- Cash flow line -->
                  <polyline :points="beThresholdData.linePoints" fill="none" stroke="#1e3a5f" stroke-width="2" stroke-linejoin="round"/>
                  <!-- User occupancy marker -->
                  <line :x1="beThresholdData.userX" y1="10" :x2="beThresholdData.userX" y2="90" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3"/>
                  <!-- BE marker -->
                  <line v-if="results.break_even_occupancy_pct <= 100"
                    :x1="beThresholdData.beX" y1="10" :x2="beThresholdData.beX" y2="90"
                    stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
                  <!-- Labels -->
                  <text x="20" y="108" font-size="8" fill="#9ca3af">0%</text>
                  <text x="390" y="108" font-size="8" fill="#9ca3af" text-anchor="end">100%</text>
                  <text v-if="results.break_even_occupancy_pct <= 100"
                    :x="beThresholdData.beX" y="108" font-size="7" fill="#dc2626" text-anchor="middle">BE {{ fmt0(results.break_even_occupancy_pct) }}%</text>
                  <text :x="beThresholdData.userX" y="8" font-size="7" fill="#f59e0b" text-anchor="middle">You</text>
                </svg>
              </div>
            </div>

            <!-- 3i. SENSITIVITY TABLE -->
            <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 overflow-x-auto">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Sensitivity: Rent × Vacancy</p>
              <table class="w-full text-xs border-collapse">
                <thead>
                  <tr>
                    <th class="text-left py-1.5 px-2 text-gray-500 font-semibold">Rent ↓ / Vac →</th>
                    <th v-for="v in sensitivityVacancies" :key="v" class="text-center py-1.5 px-2 text-gray-500 font-semibold">{{ v }}%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="r in sensitivityRents" :key="r">
                    <td class="py-1.5 px-2 font-semibold text-gray-700">${{ r.toLocaleString() }}</td>
                    <td v-for="v in sensitivityVacancies" :key="v"
                      class="py-1.5 px-2 text-center font-bold rounded transition"
                      :class="sensitivityCellClass(r, v)"
                      :style="sensitivityCellStyle(r, v)">
                      {{ sensitivityCell(r, v) }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="text-xs text-gray-400 mt-2">🟢 ≥$300 STRONG · 🟡 $100-300 GOOD · 🟠 $0-100 THIN · 🔴 &lt;$0 NEGATIVE · indigo border = current</p>
            </div>

            <!-- 3j. SCENARIOS -->
            <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Scenarios (Rent ±5%)</p>
              <div v-if="scenarioVerdictShifts" class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-3 flex gap-2">
                <span class="text-amber-500 text-sm">⚠</span>
                <p class="text-amber-800 text-xs font-medium">Cash flow is sensitive to assumptions — verify market rent comps before committing.</p>
              </div>
              <div class="grid grid-cols-3 gap-3">
                <div v-for="sc in scenarios" :key="sc.label"
                  class="rounded-xl border-2 p-3"
                  :class="sc.label === 'Base' ? 'border-indigo-300 bg-indigo-50/50' : 'border-gray-200 bg-gray-50'">
                  <p class="text-xs font-bold uppercase tracking-wide mb-2" :class="sc.label === 'Base' ? 'text-indigo-600' : 'text-gray-400'">{{ sc.label }}</p>
                  <div class="space-y-1">
                    <div class="text-center mb-2">
                      <span class="text-xl font-extrabold" :class="sc.r.monthly_cash_flow >= 0 ? 'text-green-600' : 'text-red-600'">
                        {{ sc.r.monthly_cash_flow >= 0 ? '+' : '' }}{{ fmtDollar(sc.r.monthly_cash_flow) }}
                      </span>
                      <span class="text-gray-400 text-xs">/mo</span>
                    </div>
                    <div class="flex justify-between text-xs">
                      <span class="text-gray-500">Annual</span>
                      <span class="font-bold" :class="sc.r.annual_cash_flow >= 0 ? 'text-green-600' : 'text-red-600'">{{ fmtDollar(sc.r.annual_cash_flow) }}</span>
                    </div>
                    <div class="flex justify-between text-xs">
                      <span class="text-gray-500">DCR</span>
                      <span class="font-bold text-gray-700">{{ sc.r.dcr === null ? 'N/A' : fmt2(sc.r.dcr) }}</span>
                    </div>
                    <div class="flex justify-center mt-2">
                      <span class="px-2 py-0.5 rounded-full text-xs font-bold border" :class="verdictBadgeClass(sc.r.verdict)">{{ sc.r.verdict }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 3k. KEY INSIGHT CARD -->
            <div v-if="keyInsight" class="rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-4">
              <div class="flex gap-3">
                <span class="text-lg">💡</span>
                <div>
                  <p class="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">Key Insight</p>
                  <p class="text-sm text-indigo-900 font-medium">{{ keyInsight }}</p>
                </div>
              </div>
            </div>

            <!-- Save Scenario Button -->
            <button @click="saveScenario"
              class="w-full py-3 rounded-xl font-bold text-sm transition hover:opacity-90 flex items-center justify-center gap-2"
              style="background: #1e3a5f; color: white;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
              </svg>
              Save Current Scenario
            </button>

          </template>
        </div><!-- end right -->
      </div><!-- end grid -->

      </div></div><!-- end gradient wrapper -->

      <!-- ═══════════════════════════════════════════════
           SECTION 4: SAVED SCENARIOS WIDGET
           IMMEDIATELY below calculator, BEFORE SEO content
      ═══════════════════════════════════════════════ -->
      <div id="saved-scenarios" class="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div class="px-6 py-5 border-b border-gray-100">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-xl font-extrabold" style="color: #1e3a5f;">Saved Scenarios</h2>
              <p class="text-gray-500 text-sm mt-0.5">{{ savedScenarios.length }} of {{ MAX_SCENARIOS }} saved — compare different properties and assumptions</p>
            </div>
            <NuxtLink v-if="savedScenarios.length >= 2"
              to="/compare-real-estate-deals?source=property-cash-flow-calculator"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition hover:opacity-90"
              style="background: #1e3a5f; color: white;">
              Compare All →
            </NuxtLink>
          </div>
        </div>
        <div class="p-6">
          <!-- Empty state -->
          <div v-if="savedScenarios.length === 0" class="text-center py-10">
            <div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
              </svg>
            </div>
            <p class="text-gray-600 font-medium text-sm">No saved scenarios yet</p>
            <p class="text-gray-400 text-xs mt-1">Fill in the calculator, then click "Save Current Scenario" to save your analysis</p>
          </div>
          <!-- Scenarios grid -->
          <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="scenario in savedScenarios" :key="scenario.id"
              class="bg-gray-50 rounded-2xl border border-gray-200 p-4 hover:shadow-sm transition-shadow">
              <div class="flex items-start justify-between mb-2">
                <div class="flex-1 min-w-0 mr-2">
                  <div v-if="editingId !== scenario.id" class="flex items-center gap-1">
                    <span class="text-sm font-bold text-gray-900 truncate">{{ scenario.label }}</span>
                    <button @click="startEdit(scenario)" class="text-gray-300 hover:text-gray-500 transition flex-shrink-0">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                      </svg>
                    </button>
                  </div>
                  <input v-else
                    v-model="editingLabel"
                    @blur="finishEdit(scenario.id)"
                    @keyup.enter="finishEdit(scenario.id)"
                    class="text-sm font-bold text-gray-900 border border-indigo-300 rounded px-1 w-full focus:outline-none focus:border-indigo-500"
                    autofocus />
                  <div class="text-xs text-gray-400 mt-0.5">{{ scenario.date }}</div>
                </div>
                <button @click="deleteScenario(scenario.id)" class="text-gray-300 hover:text-red-400 transition-colors flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              <div class="space-y-1.5">
                <div class="flex justify-between text-xs">
                  <span class="text-gray-500">Verdict</span>
                  <span class="font-bold px-1.5 py-0.5 rounded text-xs" :class="verdictBadgeClass(scenario.verdict)">{{ scenario.verdict }}</span>
                </div>
                <div class="flex justify-between text-xs">
                  <span class="text-gray-500">Monthly CF</span>
                  <span class="font-bold" :class="scenario.monthly_cash_flow >= 0 ? 'text-green-600' : 'text-red-600'">
                    {{ scenario.monthly_cash_flow >= 0 ? '+' : '' }}{{ fmtDollar(scenario.monthly_cash_flow) }}
                  </span>
                </div>
                <div class="flex justify-between text-xs">
                  <span class="text-gray-500">DCR</span>
                  <span class="font-bold text-gray-700">{{ scenario.dcr === null ? 'N/A' : fmt2(scenario.dcr) }}</span>
                </div>
                <div class="flex justify-between text-xs">
                  <span class="text-gray-500">Break-even</span>
                  <span class="font-bold text-gray-700">{{ scenario.break_even_occupancy_pct > 100 ? '>100%' : fmt1(scenario.break_even_occupancy_pct) + '%' }}</span>
                </div>
              </div>
              <button @click="loadScenario(scenario)"
                class="mt-3 w-full py-1.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors">
                Load this scenario
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           SECTION 5: SEO CONTENT BLOCK
      ═══════════════════════════════════════════════ -->
      <div class="mt-6 space-y-6">

        <!-- OVERVIEW -->
        <section id="overview" class="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">Calculate Monthly Cash Flow with Verdict + Break-even Occupancy</h2>
          <p class="text-gray-500 mb-6 text-sm">Year 1 stabilized cash flow analysis with DCR, OER, and Cash Flow Composition breakdown — for investor decisions</p>

          <div class="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              Will this property actually pay you each month — or quietly drain your savings? The Property Cash Flow Calculator answers that directly: enter purchase price, financing terms, rent, and expenses to get a <strong>Cash Flow Verdict</strong> (STRONG / GOOD / THIN / NEGATIVE), <strong>Break-even Occupancy</strong>, and <strong>DCR</strong> in one screen. Stop guessing whether $200/month is healthy or marginal — the calculator tells you.
            </p>
            <p>
              Most rental cash flow calculators show a single Monthly Cash Flow number and leave you to judge it alone. This calculator adds what serious investors actually need: the <strong>Cash Flow Verdict</strong> synthesizes Monthly CF and DCR into a single four-tier decision. <strong>Break-even Occupancy</strong> tells you how much vacancy you can absorb before losing money — with a five-tier interpretation and vacancy-months translation ("you can afford 1.8 months vacancy per year"). The <strong>Cash Flow Composition Breakdown</strong> shows where each rent dollar goes across property tax, insurance, management, maintenance, CapEx, vacancy, debt, and profit. And the <strong>DCR</strong> is displayed with plain-language context: "property generates 28% more income than debt payments" rather than a bare 1.28 ratio.
            </p>
            <p>
              Common questions this calculator answers directly:
            </p>
            <ul class="list-disc list-inside space-y-1 pl-2">
              <li>"Will this rental actually cash flow positive at 7.5% investor rates?"</li>
              <li>"How many months of vacancy can I tolerate before losing money?"</li>
              <li>"My DCR is 1.15 — is that good or risky for a DSCR loan?"</li>
              <li>"Where does each rent dollar actually go?"</li>
            </ul>
            <p class="font-semibold text-gray-800">Numbers don't tell you if a deal is good — Verdicts do.</p>
            <p class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-blue-900 text-xs">
              <strong>Investor audience note:</strong> This calculator analyzes investment property cash flow with 2026 investor financing rates (7.5% Conventional, 25% down). For primary residence rent vs. buy decisions, use the Rent vs Buy Calculator instead. Cash flow shown is Year 1 stabilized — actual months vary significantly.
            </p>
          </div>
        </section>

        <!-- HOW TO USE -->
        <section id="how-to-use" class="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">How to Use the Property Cash Flow Calculator</h2>
          <p class="text-gray-500 mb-6 text-sm">From inputs to Verdict, Break-even Occupancy, and DCR</p>

          <div class="space-y-5">
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm" style="background: #1e3a5f;">1</div>
              <div class="text-sm text-gray-700 leading-relaxed">
                <p class="font-semibold text-gray-900 mb-1">Enter purchase price, financing, and rent</p>
                <p>Input the property purchase price, down payment percentage, mortgage rate, loan term, and expected monthly rent. Also enter any additional monthly income (parking, laundry, storage).</p>
                <p class="mt-2 bg-blue-50 border border-blue-200 rounded-xl p-3 text-blue-900 text-xs">
                  <strong>Important:</strong> This calculator uses 2026 investor rates (7.5% Conventional, 25% down). These are investment property rates, not primary residence rates. For primary residence purchases, use the Mortgage Calculator instead.
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm" style="background: #1e3a5f;">2</div>
              <div class="text-sm text-gray-700 leading-relaxed">
                <p class="font-semibold text-gray-900 mb-1">Use % or $ mode for operating expenses</p>
                <p>Toggle between percentage mode (default) and dollar mode. In <strong>% mode</strong>, expenses are calculated as a percentage of gross annual rent — this uses industry-standard defaults: Property Management 8%, Maintenance 5%, CapEx 5%. In <strong>$ mode</strong>, enter exact annual or monthly dollar amounts when you have verified actuals from property records or quotes.</p>
                <p class="mt-1 text-gray-500">Total typical OpEx: 30–35% of gross rent. If your inputs yield total OpEx under 25%, double-check — you're likely missing categories.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm" style="background: #1e3a5f;">3</div>
              <div class="text-sm text-gray-700 leading-relaxed">
                <p class="font-semibold text-gray-900 mb-1">Read the Cash Flow Verdict at the top of results</p>
                <p>The Verdict is a Decision Lite four-tier rating — a single answer to "is this a good cash flow deal?"</p>
                <div class="mt-2 space-y-1">
                  <div class="flex items-center gap-2"><span class="text-green-600 font-bold text-sm">✅ STRONG</span><span>— Monthly CF ≥ $300 AND DCR ≥ 1.25 — comfortable margin with lender approval headroom</span></div>
                  <div class="flex items-center gap-2"><span class="text-blue-600 font-bold text-sm">✅ GOOD</span><span>— Monthly CF ≥ $100 AND DCR ≥ 1.10 — typical 2026 investor target</span></div>
                  <div class="flex items-center gap-2"><span class="text-amber-600 font-bold text-sm">🟡 THIN</span><span>— Monthly CF $0–100 OR DCR 1.00–1.10 — viable but verify assumptions carefully</span></div>
                  <div class="flex items-center gap-2"><span class="text-red-600 font-bold text-sm">❌ NEGATIVE</span><span>— Monthly CF &lt; $0 OR DCR &lt; 1.00 — reconsider price, rent, or structure</span></div>
                </div>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm" style="background: #1e3a5f;">4</div>
              <div class="text-sm text-gray-700 leading-relaxed">
                <p class="font-semibold text-gray-900 mb-1">Check Break-even Occupancy + DCR for cushion</p>
                <p><strong>Break-even Occupancy</strong> answers vacancy tolerance directly. Below 80%: STRONG CUSHION (2+ months vacancy tolerable). 80–90%: NORMAL — typical investor comfort zone. 90–95%: THIN — under one month cushion, watch tenant turnover. 95–100%: RAZOR-THIN — almost no room for error. Above 100%: INFEASIBLE — property cannot break even at full occupancy.</p>
                <p class="mt-1"><strong>DCR</strong> confirms the lender's perspective: 1.25+ is lender-friendly for DSCR loans; 1.10–1.25 is acceptable but tight; below 1.10 signals NOI barely covers debt.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm" style="background: #1e3a5f;">5</div>
              <div class="text-sm text-gray-700 leading-relaxed">
                <p class="font-semibold text-gray-900 mb-1">Stress-test with scenarios before committing</p>
                <p>The calculator automatically runs three scenarios: Conservative (Rent −5%, Vacancy +5pp, Maintenance +3pp, Tax +20%), Base (your inputs), and Optimistic (Rent +5%, Vacancy −3pp, Maintenance −2pp). If the Verdict shifts across scenarios, a warning banner appears.</p>
                <div class="mt-2 bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-800 text-xs">
                  <strong>Practical note on stabilized cash flow:</strong> Don't expect the same dollar amount every single month. The Monthly Cash Flow shown is a Year 1 stabilized average. Real months vary as tenants turn over, repairs hit, and vacancy concentrates seasonally. Plan for several negative months even when annual cash flow is positive.
                </div>
              </div>
            </div>
          </div>

          <!-- Pro Tips -->
          <div class="mt-6 pt-6 border-t border-gray-100">
            <h3 class="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Pro Tips</h3>
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="bg-gray-50 rounded-xl p-4 text-sm text-gray-700">
                <p class="font-semibold text-gray-900 mb-1">Verify your rent comp is realistic</p>
                <p>Rent is the highest-leverage input. An optimistic rent estimate of $200/month can shift Verdict from THIN to GOOD on paper — but you'll never see it. Use Rentometer or Zillow Rent Estimate, then drop 5% for safety margin.</p>
              </div>
              <div class="bg-gray-50 rounded-xl p-4 text-sm text-gray-700">
                <p class="font-semibold text-gray-900 mb-1">OpEx defaults are minimums, not targets</p>
                <p>PM 8% + Maintenance 5% + CapEx 5% = 18% operational. Add property tax + insurance and you're typically at 30–35% total. If your total OpEx shows under 25%, double-check for missing categories.</p>
              </div>
              <div class="bg-gray-50 rounded-xl p-4 text-sm text-gray-700">
                <p class="font-semibold text-gray-900 mb-1">Break-even Occupancy 95%+ is fragile</p>
                <p>95% Break-even means less than 0.6 months of vacancy tolerance per year. Tenant turnover alone often costs 1–2 months of lost rent. Properties with 95%+ break-even are Year-1-fragile — one vacancy event wipes out annual cash flow.</p>
              </div>
              <div class="bg-gray-50 rounded-xl p-4 text-sm text-gray-700">
                <p class="font-semibold text-gray-900 mb-1">Negative cash flow ≠ automatic pass</p>
                <p>Year 1 negative cash flow with DCR &gt; 1.0 can be acceptable for appreciation plays — the property covers its debt operationally while you fund short-term variance. Year 1 negative WITH DCR &lt; 1.0 is a red flag: property loses money even before your cash injection.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- INPUTS & OUTPUTS -->
        <section id="inputs-outputs" class="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Inputs and Outputs</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Inputs</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr class="border-b border-gray-100">
                    <th class="text-left py-2 text-gray-500 font-semibold">Input</th>
                    <th class="text-left py-2 text-gray-500 font-semibold">Default</th>
                  </tr></thead>
                  <tbody class="divide-y divide-gray-50">
                    <tr><td class="py-2 text-gray-700 font-medium" colspan="2"><strong class="text-xs uppercase tracking-wide text-gray-400">Property &amp; Financing</strong></td></tr>
                    <tr><td class="py-1.5 text-gray-700">Purchase Price</td><td class="py-1.5 text-gray-500">Required</td></tr>
                    <tr><td class="py-1.5 text-gray-700">Down Payment %</td><td class="py-1.5 text-gray-500">25% (investor)</td></tr>
                    <tr><td class="py-1.5 text-gray-700">Mortgage Rate %</td><td class="py-1.5 text-gray-500">7.5% (2026)</td></tr>
                    <tr><td class="py-1.5 text-gray-700">Loan Term</td><td class="py-1.5 text-gray-500">30 years</td></tr>
                    <tr><td class="py-1.5 text-gray-700">Closing Costs %</td><td class="py-1.5 text-gray-500">3%</td></tr>
                    <tr><td class="py-2 text-gray-700 font-medium" colspan="2"><strong class="text-xs uppercase tracking-wide text-gray-400">Income</strong></td></tr>
                    <tr><td class="py-1.5 text-gray-700">Monthly Rent</td><td class="py-1.5 text-gray-500">Required</td></tr>
                    <tr><td class="py-1.5 text-gray-700">Other Monthly Income</td><td class="py-1.5 text-gray-500">$0</td></tr>
                    <tr><td class="py-1.5 text-gray-700">Vacancy %</td><td class="py-1.5 text-gray-500">8%</td></tr>
                    <tr><td class="py-2 text-gray-700 font-medium" colspan="2"><strong class="text-xs uppercase tracking-wide text-gray-400">Operating Expenses (toggle %/$)</strong></td></tr>
                    <tr><td class="py-1.5 text-gray-700">Property Tax</td><td class="py-1.5 text-gray-500">1.2% of value</td></tr>
                    <tr><td class="py-1.5 text-gray-700">Insurance (annual)</td><td class="py-1.5 text-gray-500">$1,800</td></tr>
                    <tr><td class="py-1.5 text-gray-700">HOA Monthly</td><td class="py-1.5 text-gray-500">$0</td></tr>
                    <tr><td class="py-1.5 text-gray-700">Property Management %</td><td class="py-1.5 text-gray-500">8%</td></tr>
                    <tr><td class="py-1.5 text-gray-700">Maintenance &amp; Repairs %</td><td class="py-1.5 text-gray-500">5%</td></tr>
                    <tr><td class="py-1.5 text-gray-700">CapEx Reserve %</td><td class="py-1.5 text-gray-500">5%</td></tr>
                    <tr><td class="py-1.5 text-gray-700">Utilities Monthly</td><td class="py-1.5 text-gray-500">$0</td></tr>
                    <tr><td class="py-1.5 text-gray-700">Other Expenses Monthly</td><td class="py-1.5 text-gray-500">$0</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 class="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Outputs</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead><tr class="border-b border-gray-100">
                    <th class="text-left py-2 text-gray-500 font-semibold">Output</th>
                    <th class="text-left py-2 text-gray-500 font-semibold">Purpose</th>
                  </tr></thead>
                  <tbody class="divide-y divide-gray-50">
                    <tr><td class="py-1.5 font-semibold text-gray-800">Cash Flow Verdict</td><td class="py-1.5 text-gray-500">Go/no-go decision (4 tiers)</td></tr>
                    <tr><td class="py-1.5 font-semibold text-gray-800">Monthly Cash Flow</td><td class="py-1.5 text-gray-500">Year 1 stabilized average</td></tr>
                    <tr><td class="py-1.5 font-semibold text-gray-800">Annual Cash Flow</td><td class="py-1.5 text-gray-500">Full year total</td></tr>
                    <tr><td class="py-1.5 font-semibold text-gray-800">Cash Flow Yield %</td><td class="py-1.5 text-gray-500">= Cash-on-Cash return</td></tr>
                    <tr><td class="py-1.5 font-semibold text-gray-800">Break-even Occupancy</td><td class="py-1.5 text-gray-500">Vacancy tolerance (5 tiers)</td></tr>
                    <tr><td class="py-1.5 font-semibold text-gray-800">OER %</td><td class="py-1.5 text-gray-500">Expense efficiency signal</td></tr>
                    <tr><td class="py-1.5 font-semibold text-gray-800">DCR</td><td class="py-1.5 text-gray-500">Lender perspective (plain language)</td></tr>
                    <tr><td class="py-1.5 font-semibold text-gray-800">NOI Annual</td><td class="py-1.5 text-gray-500">Pre-debt income (≈ NOI Calc)</td></tr>
                    <tr><td class="py-1.5 font-semibold text-gray-800">Debt Service Annual</td><td class="py-1.5 text-gray-500">Total annual P&amp;I</td></tr>
                    <tr><td class="py-1.5 font-semibold text-gray-800">Composition Breakdown</td><td class="py-1.5 text-gray-500">Rent dollar allocation chart</td></tr>
                    <tr><td class="py-1.5 font-semibold text-gray-800">12-Month CF Bar</td><td class="py-1.5 text-gray-500">Month-by-month visual</td></tr>
                    <tr><td class="py-1.5 font-semibold text-gray-800">Break-even Threshold</td><td class="py-1.5 text-gray-500">Occupancy vs. cash flow chart</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- FORMULA -->
        <section id="formula" class="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">How the Property Cash Flow Calculator Works</h2>
          <p class="text-gray-700 text-sm mb-5 leading-relaxed">Cash flow is what's left after collecting rent and paying all expenses including debt. The math is straightforward addition and subtraction. What makes this calculator different: every expense category is broken out, and Break-even Occupancy is computed as a signature metric alongside Monthly Cash Flow.</p>

          <div class="space-y-4 text-sm text-gray-700">
            <div class="bg-gray-50 rounded-xl p-5 font-mono text-xs space-y-2 leading-relaxed">
              <p class="text-gray-500 font-sans text-xs uppercase tracking-wide mb-2 font-bold">Income</p>
              <p>Effective Gross Income (EGI) = Gross Rent × 12 × (1 − Vacancy%)</p>
              <p class="mt-3 text-gray-500 font-sans text-xs uppercase tracking-wide font-bold">Operating Expenses</p>
              <p>Total OpEx = Property Tax + Insurance + HOA + (Gross Rent × 12 × [PM% + Maint% + CapEx%]) + Utilities + Other</p>
              <p class="mt-3 text-gray-500 font-sans text-xs uppercase tracking-wide font-bold">Net Operating Income</p>
              <p>NOI = EGI − Total OpEx  <span class="text-gray-400">(cross-calc invariant: matches NOI Calculator ±$10)</span></p>
              <p class="mt-3 text-gray-500 font-sans text-xs uppercase tracking-wide font-bold">Debt Service</p>
              <p>Monthly P&amp;I = Loan × [r(1+r)ⁿ] / [(1+r)ⁿ − 1]</p>
              <p>Annual Debt Service = Monthly P&amp;I × 12</p>
              <p class="mt-3 text-gray-500 font-sans text-xs uppercase tracking-wide font-bold">Cash Flow</p>
              <p>Monthly Cash Flow = (NOI − Annual Debt Service) / 12</p>
              <p>Annual Cash Flow = NOI − Annual Debt Service</p>
              <p class="mt-3 text-gray-500 font-sans text-xs uppercase tracking-wide font-bold">Cash Flow Yield (= Cash-on-Cash)</p>
              <p>Cash Flow Yield % = (Annual Cash Flow / Total Cash Invested) × 100</p>
              <p class="text-gray-400">  where Total Cash Invested = Down Payment + Closing Costs</p>
              <p class="mt-3 text-gray-500 font-sans text-xs uppercase tracking-wide font-bold">Break-even Occupancy (signature metric)</p>
              <p>Break-even Occupancy % = (Total OpEx + Annual Debt Service) / Annual Gross Rent</p>
              <p class="mt-3 text-gray-500 font-sans text-xs uppercase tracking-wide font-bold">Debt Coverage Ratio</p>
              <p>DCR = NOI / Annual Debt Service</p>
            </div>

            <div class="border border-gray-200 rounded-xl p-5">
              <h3 class="font-bold text-gray-900 mb-3">Worked Example — Standard US Suburban Rental (RIS Test 3)</h3>
              <div class="grid sm:grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <p class="font-semibold text-gray-600 text-xs uppercase tracking-wide mb-2">Inputs</p>
                  <div class="space-y-1 text-xs text-gray-600">
                    <div class="flex justify-between"><span>Purchase Price</span><span class="font-semibold">$150,000</span></div>
                    <div class="flex justify-between"><span>Down Payment</span><span class="font-semibold">25% ($37,500)</span></div>
                    <div class="flex justify-between"><span>Rate / Term</span><span class="font-semibold">7.5% / 30yr</span></div>
                    <div class="flex justify-between"><span>Monthly Rent</span><span class="font-semibold">$1,800</span></div>
                    <div class="flex justify-between"><span>Vacancy</span><span class="font-semibold">8%</span></div>
                    <div class="flex justify-between"><span>Property Tax</span><span class="font-semibold">1.2%</span></div>
                    <div class="flex justify-between"><span>Insurance</span><span class="font-semibold">$1,800/yr</span></div>
                    <div class="flex justify-between"><span>PM / Maint / CapEx</span><span class="font-semibold">8% / 5% / 5%</span></div>
                  </div>
                </div>
                <div>
                  <p class="font-semibold text-gray-600 text-xs uppercase tracking-wide mb-2">Outputs</p>
                  <div class="space-y-1 text-xs text-gray-600">
                    <div class="flex justify-between"><span>Loan</span><span class="font-semibold">$112,500</span></div>
                    <div class="flex justify-between"><span>Monthly P&amp;I</span><span class="font-semibold">~$786</span></div>
                    <div class="flex justify-between"><span>EGI</span><span class="font-semibold">~$19,872</span></div>
                    <div class="flex justify-between"><span>Total OpEx</span><span class="font-semibold">~$7,800</span></div>
                    <div class="flex justify-between"><span>NOI</span><span class="font-semibold">~$12,072</span></div>
                    <div class="flex justify-between"><span>Annual Debt Service</span><span class="font-semibold">~$9,432</span></div>
                    <div class="flex justify-between"><span>Monthly CF</span><span class="font-semibold text-green-600">~+$220</span></div>
                    <div class="flex justify-between"><span>DCR</span><span class="font-semibold">~1.28</span></div>
                    <div class="flex justify-between"><span>Break-even Occupancy</span><span class="font-semibold">~87% (NORMAL)</span></div>
                    <div class="flex justify-between"><span>Cash Flow Verdict</span><span class="font-bold text-blue-600">GOOD ✅</span></div>
                  </div>
                </div>
              </div>
              <p class="text-xs text-gray-500">Sub-$200K properties at 7.5% rates often produce Monthly CF in the $150–250 range with Break-even Occupancy 85–90%. GOOD territory by Verdict — but verify rent comps. An inflated rent assumption can shift Break-even from 87% to 95% (RAZOR-THIN) on paper while appearing fine by Verdict alone.</p>
            </div>
          </div>
        </section>

        <!-- WHAT IS -->
        <section id="what-is" class="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">What Real Estate Cash Flow Actually Means</h2>
          <p class="text-gray-500 mb-6 text-sm">Operational view vs. lifetime ROI</p>

          <div class="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              Cash flow is the operational lens on rental property performance: rent collected minus all expenses minus debt service equals what lands in your pocket each month. It's distinct from ROI, which blends cash flow, appreciation, tax benefits, and equity paydown over a holding period. Cash flow is simply the monthly check size — or drain.
            </p>
            <p>
              A property can have strong ROI and negative cash flow simultaneously. High-appreciation coastal markets often work this way — the appreciation play is compelling over 7–10 years, but the property requires monthly cash injections to cover the gap between rent and expenses. Neither description is wrong, but they're different questions. "Can this property pay debt and put money in my pocket?" is the cash flow question (this calculator). "What's total return over a 7-year hold?" is the ROI question (Real Estate ROI Calculator). Beginners who skip cash flow analysis get blindsided when monthly drains erode their reserves before appreciation pays off.
            </p>
            <p>
              At 2026 investor rates (7.5% Conventional, 8.25% DSCR), cash flow is compressed compared to the 2018–2021 low-rate era. Properties that produced $400+/month at 4% rates often show $50–200 at 7.5% with identical fundamentals. This compression makes Break-even Occupancy and DCR more important than ever — a thin positive cash flow with DCR 1.05 has almost no margin for error. Stabilized cash flow is a Year 1 monthly average; actual months vary as vacancies, repairs, and tenant turnover cluster unpredictably.
            </p>
          </div>
        </section>

        <!-- RESULT MEANING -->
        <section id="result-meaning" class="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">How to Read Cash Flow Verdict, Break-even, and DCR</h2>
          <p class="text-gray-500 mb-6 text-sm">Interpreting your cash flow analysis</p>

          <div class="space-y-6 text-sm text-gray-700">
            <p>The Verdict is the headline answer. Break-even Occupancy answers your vacancy tolerance. DCR confirms the lender's perspective. OER reveals expense efficiency. Together they give you a complete picture — not just a single number.</p>

            <div>
              <h3 class="font-bold text-gray-900 mb-3">Cash Flow Verdict (4 tiers)</h3>
              <div class="space-y-2">
                <div class="flex gap-3 p-3 bg-green-50 border border-green-200 rounded-xl">
                  <span class="text-green-600 font-bold text-lg">✅</span>
                  <div><p class="font-bold text-green-800">STRONG</p><p class="text-green-700 text-xs mt-0.5">CF ≥ $300/mo AND DCR ≥ 1.25 — comfortable margin plus lender approval headroom. Rare at 2026 rates on properties above $250K.</p></div>
                </div>
                <div class="flex gap-3 p-3 bg-blue-50 border border-blue-200 rounded-xl">
                  <span class="text-blue-600 font-bold text-lg">✅</span>
                  <div><p class="font-bold text-blue-800">GOOD</p><p class="text-blue-700 text-xs mt-0.5">CF ≥ $100/mo AND DCR ≥ 1.10 — the typical 2026 investor target. Property covers itself with reasonable cushion.</p></div>
                </div>
                <div class="flex gap-3 p-3 bg-amber-50 border border-amber-200 rounded-xl">
                  <span class="text-amber-600 font-bold text-lg">🟡</span>
                  <div><p class="font-bold text-amber-800">THIN</p><p class="text-amber-700 text-xs mt-0.5">CF $0–100/mo OR DCR 1.00–1.10 — technically positive but fragile. Verify every assumption. One bad month erases the annual gain.</p></div>
                </div>
                <div class="flex gap-3 p-3 bg-red-50 border border-red-200 rounded-xl">
                  <span class="text-red-600 font-bold text-lg">❌</span>
                  <div><p class="font-bold text-red-800">NEGATIVE</p><p class="text-red-700 text-xs mt-0.5">CF &lt; $0/mo OR DCR &lt; 1.00 — property loses money operationally. Reconsider purchase price, rent, or financing structure.</p></div>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-bold text-gray-900 mb-3">Break-even Occupancy (5 tiers)</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-xs">
                  <thead><tr class="border-b border-gray-200">
                    <th class="text-left py-2 pr-4 font-bold text-gray-700">Tier</th>
                    <th class="text-left py-2 pr-4 font-bold text-gray-700">Range</th>
                    <th class="text-left py-2 font-bold text-gray-700">Vacancy Tolerance</th>
                  </tr></thead>
                  <tbody class="divide-y divide-gray-50">
                    <tr><td class="py-1.5 pr-4 font-semibold text-green-700">✅ STRONG CUSHION</td><td class="py-1.5 pr-4">&lt; 80%</td><td class="py-1.5 text-gray-600">2.4+ months vacancy tolerable per year</td></tr>
                    <tr><td class="py-1.5 pr-4 font-semibold text-blue-700">🟢 NORMAL</td><td class="py-1.5 pr-4">80–90%</td><td class="py-1.5 text-gray-600">1.2–2.4 months — typical investor comfort zone</td></tr>
                    <tr><td class="py-1.5 pr-4 font-semibold text-amber-700">⚠ THIN</td><td class="py-1.5 pr-4">90–95%</td><td class="py-1.5 text-gray-600">0.6–1.2 months — verify rent and expenses carefully</td></tr>
                    <tr><td class="py-1.5 pr-4 font-semibold text-orange-700">⚠ RAZOR-THIN</td><td class="py-1.5 pr-4">95–100%</td><td class="py-1.5 text-gray-600">Under 0.6 months — almost no cushion for error</td></tr>
                    <tr><td class="py-1.5 pr-4 font-semibold text-red-700">❌ INFEASIBLE</td><td class="py-1.5 pr-4">&gt; 100%</td><td class="py-1.5 text-gray-600">Cannot break even — expenses exceed gross rent</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 class="font-bold text-gray-900 mb-3">DCR Plain-Language Guide</h3>
              <div class="space-y-1 text-xs text-gray-600">
                <div class="flex justify-between py-1.5 border-b border-gray-50"><span>DCR 1.50+</span><span class="font-semibold text-green-700">Property generates 50%+ more income than debt — strong cushion</span></div>
                <div class="flex justify-between py-1.5 border-b border-gray-50"><span>DCR 1.25–1.50</span><span class="font-semibold text-green-600">Lender-friendly — DSCR loans typically approve at 1.25+</span></div>
                <div class="flex justify-between py-1.5 border-b border-gray-50"><span>DCR 1.10–1.25</span><span class="font-semibold text-amber-600">Acceptable but tight — limited cushion for expense spikes</span></div>
                <div class="flex justify-between py-1.5 border-b border-gray-50"><span>DCR 1.00–1.10</span><span class="font-semibold text-orange-600">Marginal — NOI barely clears debt payments</span></div>
                <div class="flex justify-between py-1.5"><span>DCR &lt; 1.00</span><span class="font-semibold text-red-600">NOI doesn't cover debt — property loses operationally</span></div>
              </div>
              <p class="text-xs text-gray-400 mt-2">This calculator's DCR matches DSCR Calculator output ±0.01 (cross-calculator invariant).</p>
            </div>

            <div>
              <h3 class="font-bold text-gray-900 mb-2">OER (Operating Expense Ratio)</h3>
              <p class="text-xs text-gray-600">OER = Total Operating Expenses / Effective Gross Income. Below 35%: efficient operation. 35–50%: typical range. Above 50%: investigate — expenses may be high relative to income.</p>
            </div>

            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h3 class="font-bold text-amber-800 mb-2">How to read the stabilized average</h3>
              <p class="text-amber-800 text-xs leading-relaxed">
                The Monthly Cash Flow shown is a Year 1 stabilized average across all 12 months. Real months won't hit this exactly — some months deliver $0 (tenant turnover, cleaning), some deliver twice the average (stable tenant, no repairs hit). The average converges to the displayed figure over the year. This means: don't plan your personal budget around receiving $385 every month. Build a 3-month cash reserve before relying on rental cash flow for living expenses.
              </p>
            </div>
          </div>
        </section>

        <!-- BENCHMARKS -->
        <section id="benchmarks" class="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Property Cash Flow Benchmarks for 2026</h2>

          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 text-xs text-amber-800">
            <strong>Important:</strong> These ranges are illustrative patterns for typical 2026 US markets — not measured statistical datasets and not predictions for your specific property. Local rents, expenses, and rates vary significantly. The calculator's output on your inputs always takes precedence.
          </div>

          <div class="grid sm:grid-cols-2 gap-5 text-sm text-gray-700">
            <div>
              <h3 class="font-bold text-gray-900 mb-2">Monthly Cash Flow Patterns (2026)</h3>
              <div class="space-y-1 text-xs text-gray-600">
                <div class="flex justify-between py-1 border-b border-gray-50"><span>Standard markets</span><span class="font-semibold">$50–200/mo positive</span></div>
                <div class="flex justify-between py-1 border-b border-gray-50"><span>Strong CF markets (Sunbelt, Midwest)</span><span class="font-semibold">$200–500/mo</span></div>
                <div class="flex justify-between py-1 border-b border-gray-50"><span>Coastal compressed markets</span><span class="font-semibold">$0–100 or negative</span></div>
                <div class="flex justify-between py-1"><span>All-cash purchases ($200–400K)</span><span class="font-semibold">$400–1,500/mo</span></div>
              </div>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-2">Break-even Occupancy Benchmarks</h3>
              <div class="space-y-1 text-xs text-gray-600">
                <div class="flex justify-between py-1 border-b border-gray-50"><span>Robust deals</span><span class="font-semibold">&lt; 85%</span></div>
                <div class="flex justify-between py-1 border-b border-gray-50"><span>Typical investor tolerance</span><span class="font-semibold">85–92%</span></div>
                <div class="flex justify-between py-1 border-b border-gray-50"><span>Thin</span><span class="font-semibold">92–97%</span></div>
                <div class="flex justify-between py-1"><span>Infeasible</span><span class="font-semibold">100%+</span></div>
              </div>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-2">DCR Benchmarks</h3>
              <div class="space-y-1 text-xs text-gray-600">
                <div class="flex justify-between py-1 border-b border-gray-50"><span>1.50+ Strong cushion</span><span class="font-semibold text-green-600">Rare at 2026 rates</span></div>
                <div class="flex justify-between py-1 border-b border-gray-50"><span>1.25–1.50 Lender-friendly</span><span class="font-semibold text-green-600">DSCR loan eligible</span></div>
                <div class="flex justify-between py-1 border-b border-gray-50"><span>1.10–1.25 Acceptable</span><span class="font-semibold text-amber-600">Tight margins</span></div>
                <div class="flex justify-between py-1 border-b border-gray-50"><span>1.00–1.10 Marginal</span><span class="font-semibold text-orange-600">Little cushion</span></div>
                <div class="flex justify-between py-1"><span>&lt; 1.00 Infeasible</span><span class="font-semibold text-red-600">Operational loss</span></div>
              </div>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 mb-2">2026 Investor Financing Rates</h3>
              <div class="space-y-1 text-xs text-gray-600">
                <div class="flex justify-between py-1 border-b border-gray-50"><span>Conventional 30yr (investor)</span><span class="font-semibold">~7.5%</span></div>
                <div class="flex justify-between py-1 border-b border-gray-50"><span>DSCR loan (no W-2)</span><span class="font-semibold">~8.25%</span></div>
                <div class="flex justify-between py-1"><span>Portfolio loan</span><span class="font-semibold">~8.5%</span></div>
              </div>
            </div>
          </div>
        </section>

        <!-- STRATEGY -->
        <section id="strategy" class="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Cash Flow Strategy by Investor Type</h2>

          <div class="space-y-4">
            <div v-for="strat in strategies" :key="strat.title" class="border border-gray-200 rounded-xl p-5">
              <h3 class="font-bold text-gray-900 mb-3">{{ strat.title }}</h3>
              <div class="grid sm:grid-cols-3 gap-3 text-xs text-gray-600">
                <div class="bg-green-50 rounded-lg p-3">
                  <p class="font-semibold text-green-800 mb-1">Critical metrics</p>
                  <p>{{ strat.critical }}</p>
                </div>
                <div class="bg-amber-50 rounded-lg p-3">
                  <p class="font-semibold text-amber-800 mb-1">Misleading if overweighted</p>
                  <p>{{ strat.misleading }}</p>
                </div>
                <div class="bg-blue-50 rounded-lg p-3">
                  <p class="font-semibold text-blue-800 mb-1">Prioritize</p>
                  <p>{{ strat.prioritize }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- APPLICATIONS -->
        <section id="applications" class="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Common Use Cases</h2>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="app in applications" :key="app.title" class="bg-gray-50 rounded-xl p-4">
              <div class="text-2xl mb-2">{{ app.icon }}</div>
              <h3 class="font-bold text-gray-900 text-sm mb-1">{{ app.title }}</h3>
              <p class="text-xs text-gray-600 leading-relaxed">{{ app.desc }}</p>
            </div>
          </div>
        </section>

        <!-- INDUSTRY STANDARDS -->
        <section id="industry-standards" class="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">How This Calculator Aligns with Investor Conventions</h2>
          <div class="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>The core formulas — NOI, DCR, Break-even Occupancy, Cash Flow Yield — match methodology used by BiggerPockets, Stessa, RentalRedi, and standard real estate finance textbooks. The default OpEx breakdown (Property Management 8% + Maintenance 5% + CapEx 5% = 18% operational, with property tax and insurance as separate line items) reflects investor community consensus on minimum reserves.</p>
            <p class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-blue-900 text-xs">
              <strong>Note:</strong> The Cash Flow Verdict layer (4 tiers) and Break-even Occupancy interpretation add decision support beyond raw metrics — a Decision Lite pattern that synthesizes multiple signals into investor-actionable outputs. The underlying formulas are standard; the interpretation layer is proprietary to RealCalc's Phase 20 architecture.
            </p>
          </div>
        </section>

        <!-- LIMITATIONS -->
        <section id="limitations" class="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Limitations of This Calculator</h2>

          <div class="space-y-4 text-sm text-gray-700">
            <div v-for="(lim, i) in limitations" :key="i" class="flex gap-4 p-4 bg-gray-50 rounded-xl">
              <span class="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-xs font-bold text-gray-600">{{ i + 1 }}</span>
              <div>
                <p class="font-semibold text-gray-900 mb-1">{{ lim.title }}</p>
                <p class="text-xs text-gray-600 leading-relaxed">{{ lim.desc }}</p>
              </div>
            </div>
          </div>

          <div class="mt-6 border-t border-gray-100 pt-5">
            <h3 class="font-bold text-gray-900 mb-3 text-sm">When Not to Use This Calculator</h3>
            <div class="grid sm:grid-cols-2 gap-2">
              <div v-for="alt in whenNotToUse" :key="alt.label" class="flex items-start gap-2 text-xs text-gray-600">
                <span class="text-gray-400 mt-0.5">→</span>
                <span><strong>{{ alt.label }}:</strong> use <NuxtLink :to="alt.to" class="text-blue-600 hover:underline">{{ alt.calc }}</NuxtLink></span>
              </div>
            </div>
          </div>
        </section>

        <!-- COMMON MISTAKES -->
        <section id="common-mistakes" class="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Common Mistakes in Cash Flow Analysis</h2>

          <div class="space-y-3">
            <div v-for="(m, i) in commonMistakes" :key="i" class="flex gap-4 p-4 border-l-4 border-red-200 bg-red-50/50 rounded-r-xl">
              <span class="text-red-500 font-bold text-lg flex-shrink-0">{{ i + 1 }}</span>
              <div>
                <p class="font-bold text-red-800 text-sm mb-1">{{ m.title }}</p>
                <p class="text-xs text-gray-700 leading-relaxed">{{ m.desc }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions</h2>

          <div class="space-y-4">
            <div v-for="(q, i) in faqs" :key="i" class="border border-gray-200 rounded-xl overflow-hidden">
              <button @click="toggleFaq(i)"
                class="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
                <span class="font-semibold text-gray-900 text-sm pr-4">{{ q.question }}</span>
                <svg class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200" :class="openFaq === i ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div v-show="openFaq === i" class="px-5 pb-5 text-sm text-gray-700 leading-relaxed border-t border-gray-100">
                <p class="pt-4" v-html="q.answer"></p>
              </div>
            </div>
          </div>
        </section>

        <!-- RELATED CALCULATORS -->
        <section id="related" class="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Related Calculators</h2>
          <p class="text-gray-600 text-sm mb-5">This calculator is the operational cash flow lens. Specialized calculators handle related questions in more depth. Most investor workflows use 3–5 tools together.</p>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <NuxtLink v-for="rel in relatedCalcs" :key="rel.to" :to="rel.to"
              class="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-yellow-300 hover:shadow-sm transition group">
              <div class="text-xl flex-shrink-0">{{ rel.icon }}</div>
              <div>
                <p class="font-bold text-gray-900 text-sm group-hover:text-yellow-700 transition">{{ rel.name }}</p>
                <p class="text-xs text-gray-500 mt-0.5">{{ rel.desc }}</p>
              </div>
            </NuxtLink>
          </div>
        </section>

      </div><!-- end SEO content block -->

    </main>

    <!-- FOOTER -->
    <footer class="bg-white border-t border-gray-200 mt-12">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-10">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center gap-2 mb-3">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background: #1e3a5f;">
                <span class="text-white font-extrabold text-sm">RC</span>
              </div>
              <span class="font-extrabold text-gray-900">RealCalc</span>
            </div>
            <p class="text-sm text-gray-500">Professional real estate investment calculators for US investors.</p>
          </div>
          <div>
            <p class="font-bold text-gray-900 text-sm mb-3">Calculators</p>
            <ul class="space-y-2 text-sm text-gray-500">
              <li><NuxtLink to="/cap-rate-calculator" class="hover:text-gray-700 transition">Cap Rate Calculator</NuxtLink></li>
              <li><NuxtLink to="/cash-on-cash-calculator" class="hover:text-gray-700 transition">Cash-on-Cash Calculator</NuxtLink></li>
              <li><NuxtLink to="/dscr-calculator" class="hover:text-gray-700 transition">DSCR Calculator</NuxtLink></li>
              <li><NuxtLink to="/noi-calculator" class="hover:text-gray-700 transition">NOI Calculator</NuxtLink></li>
            </ul>
          </div>
          <div>
            <p class="font-bold text-gray-900 text-sm mb-3">More Calculators</p>
            <ul class="space-y-2 text-sm text-gray-500">
              <li><NuxtLink to="/brrrr-calculator" class="hover:text-gray-700 transition">BRRRR Calculator</NuxtLink></li>
              <li><NuxtLink to="/fix-flip-calculator" class="hover:text-gray-700 transition">Fix &amp; Flip Calculator</NuxtLink></li>
              <li><NuxtLink to="/arv-calculator" class="hover:text-gray-700 transition">ARV Calculator</NuxtLink></li>
              <li><NuxtLink to="/real-estate-roi-calculator" class="hover:text-gray-700 transition">Real Estate ROI Calculator</NuxtLink></li>
            </ul>
          </div>
          <div>
            <p class="font-bold text-gray-900 text-sm mb-3">Company</p>
            <ul class="space-y-2 text-sm text-gray-500">
              <li><NuxtLink to="/calculators" class="hover:text-gray-700 transition">All Calculators</NuxtLink></li>
              <li><NuxtLink to="/pricing" class="hover:text-gray-700 transition">Pricing</NuxtLink></li>
              <li><NuxtLink to="/blog" class="hover:text-gray-700 transition">Blog</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-xs text-gray-400">© 2026 RealCalc. For educational and informational purposes only. Not investment advice.</p>
          <p class="text-xs text-gray-400">Investor rates: 7.5% Conventional, 25% down. Not primary residence rates.</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// ─── SEO ─────────────────────────────────────────────────────────────────────
useHead({
  title: 'Property Cash Flow Calculator — Monthly CF, DCR, Break-even Occupancy | RealCalc',
  meta: [
    { name: 'description', content: 'Free Property Cash Flow Calculator with Cash Flow Verdict, Break-even Occupancy, DCR. Year 1 stabilized monthly cash flow. 2026 investor rates.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Property Cash Flow Calculator — Monthly CF, DCR, Break-even Occupancy | RealCalc' },
    { property: 'og:description', content: 'Free Property Cash Flow Calculator with Cash Flow Verdict, Break-even Occupancy, DCR. Year 1 stabilized monthly cash flow. 2026 investor rates.' },
    { property: 'og:url', content: 'https://arvcalc.com/property-cash-flow-calculator' },
    { property: 'og:type', content: 'website' },
  ],
  link: [
    { rel: 'canonical', href: 'https://arvcalc.com/property-cash-flow-calculator' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'SoftwareApplication',
            name: 'Property Cash Flow Calculator',
            url: 'https://arvcalc.com/property-cash-flow-calculator',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web',
            description: 'Free Property Cash Flow Calculator with Cash Flow Verdict, Break-even Occupancy, DCR. Year 1 stabilized monthly cash flow. 2026 investor rates.',
            featureList: [
              'Cash Flow Verdict (4 tiers: STRONG / GOOD / THIN / NEGATIVE)',
              'Monthly Cash Flow primary output (Year 1 stabilized)',
              'Break-even Occupancy with 5-tier interpretation + vacancy-months translation',
              'DCR with plain-language interpretation',
              'Operating Expense Ratio (OER)',
              'Cash Flow Composition Breakdown signature visualization',
              'Monthly Cash Flow Bar (12 months with vacancy)',
              'Break-even Threshold visualization',
              '3 sensitivity scenarios (Rent ±5%)',
              'Rent × Vacancy sensitivity table with color zones',
              'OpEx toggle %/$ mode',
              'Cross-calculator invariants (NOI, DCR, CoC)',
              'URL parameter import',
              'PDF export',
              'Saved Scenarios widget (up to 20)',
            ],
            audience: { '@type': 'Audience', audienceType: 'US real estate investors' },
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is this calculator for primary residence or investment property?',
                acceptedAnswer: { '@type': 'Answer', text: 'Investment property only. Default rates are 7.5% Conventional, 25% down — investor financing, not primary residence rates. For primary residence analysis, use the Rent vs Buy Calculator.' },
              },
              {
                '@type': 'Question',
                name: 'What is Break-even Occupancy?',
                acceptedAnswer: { '@type': 'Answer', text: 'Break-even Occupancy = (Total OpEx + Annual Debt Service) / Annual Gross Rent. It answers how much occupancy you need to break even. If 85%, you need 85% occupancy — meaning you can tolerate about 1.8 months of vacancy per year before losing money.' },
              },
              {
                '@type': 'Question',
                name: 'What does the Cash Flow Verdict mean?',
                acceptedAnswer: { '@type': 'Answer', text: 'The Cash Flow Verdict is a 4-tier Decision Lite rating: STRONG (CF ≥ $300 AND DCR ≥ 1.25), GOOD (CF ≥ $100 AND DCR ≥ 1.10), THIN (CF $0-100 OR DCR 1.00-1.10), NEGATIVE (CF < $0 OR DCR < 1.00).' },
              },
              {
                '@type': 'Question',
                name: 'How is Monthly Cash Flow calculated?',
                acceptedAnswer: { '@type': 'Answer', text: 'Monthly Cash Flow = (NOI − Annual Debt Service) / 12. NOI = Effective Gross Income − Total Operating Expenses. EGI = Annual Gross Rent × (1 − Vacancy%). This is a Year 1 stabilized monthly average — actual months vary.' },
              },
              {
                '@type': 'Question',
                name: 'Can I save scenarios for comparison?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Saved Scenarios widget (directly below the calculator) lets you save up to 20 scenarios for free. All data is stored in your browser\'s localStorage — no account required. Use Compare Real Estate Deals to view them side by side.' },
              },
            ],
          },
        ],
      }),
    },
  ],
})

// ============================================================
// STATE
// ============================================================
const isNavExpanded = ref(false)
const opexMode = ref('pct') // 'pct' | 'dollar'
const openFaq = ref(null)
const editingId = ref(null)
const editingLabel = ref('')

// ============================================================
// INPUTS — all empty by default (only placeholders shown)
// ============================================================
const inp = ref({
  purchase_price: null,
  down_payment_pct: null,
  mortgage_rate_pct: null,
  loan_term_years: null,
  closing_costs_pct: null,
  monthly_rent: null,
  other_monthly_income: null,
  vacancy_pct: null,
  // OpEx % mode
  property_tax_pct: null,
  // OpEx $ mode
  property_tax_dollar: null,
  // Fixed $ fields (always $ mode)
  insurance_annual: null,
  hoa_monthly: null,
  pm_pct: null,
  maint_pct: null,
  capex_pct: null,
  utilities_monthly: null,
  other_monthly: null,
})

// Effective defaults (used when field is null)
function d(field) {
  const defaults = {
    down_payment_pct: 25,
    mortgage_rate_pct: 7.5,
    loan_term_years: 30,
    closing_costs_pct: 3,
    other_monthly_income: 0,
    vacancy_pct: 8,
    property_tax_pct: 1.2,
    insurance_annual: 1800,
    hoa_monthly: 0,
    pm_pct: 8,
    maint_pct: 5,
    capex_pct: 5,
    utilities_monthly: 0,
    other_monthly: 0,
  }
  return inp.value[field] !== null && inp.value[field] !== undefined && inp.value[field] !== ''
    ? Number(inp.value[field])
    : (defaults[field] ?? 0)
}

// ============================================================
// CALCULATION ENGINE (9 phases per RIS canonical pipeline)
// ============================================================
function calculateCashFlow(overrides = {}) {
  const i = {
    purchase_price: d('purchase_price'),
    down_payment_pct: d('down_payment_pct'),
    mortgage_rate_pct: d('mortgage_rate_pct'),
    loan_term_years: d('loan_term_years'),
    closing_costs_pct: d('closing_costs_pct'),
    monthly_rent: d('monthly_rent'),
    other_monthly_income: d('other_monthly_income'),
    vacancy_pct: d('vacancy_pct'),
    property_tax_pct: d('property_tax_pct'),
    property_tax_dollar: inp.value.property_tax_dollar !== null ? Number(inp.value.property_tax_dollar) : null,
    insurance_annual: d('insurance_annual'),
    hoa_monthly: d('hoa_monthly'),
    pm_pct: d('pm_pct'),
    maint_pct: d('maint_pct'),
    capex_pct: d('capex_pct'),
    utilities_monthly: d('utilities_monthly'),
    other_monthly: d('other_monthly'),
    ...overrides,
  }

  // Phase 1: Validate
  if (!i.purchase_price || i.purchase_price <= 0) return null
  if (!i.monthly_rent || i.monthly_rent <= 0) return null

  // Phase 2: Income
  const grossMonthlyRent = i.monthly_rent + i.other_monthly_income
  const annualGrossRent = grossMonthlyRent * 12
  const egi = annualGrossRent * (1 - i.vacancy_pct / 100)

  // Phase 3: Expenses
  let annualPropertyTax
  if (opexMode.value === 'dollar' && i.property_tax_dollar !== null) {
    annualPropertyTax = i.property_tax_dollar
  } else {
    annualPropertyTax = i.purchase_price * (i.property_tax_pct / 100)
  }
  const annualInsurance = i.insurance_annual
  const annualHoa = i.hoa_monthly * 12
  const annualPm = annualGrossRent * (i.pm_pct / 100)
  const annualMaint = annualGrossRent * (i.maint_pct / 100)
  const annualCapex = annualGrossRent * (i.capex_pct / 100)
  const annualUtilities = i.utilities_monthly * 12
  const annualOther = i.other_monthly * 12
  const vacancyAdjustment = annualGrossRent - egi

  const totalAnnualOpex = annualPropertyTax + annualInsurance + annualHoa +
    annualPm + annualMaint + annualCapex + annualUtilities + annualOther

  // Phase 4: NOI
  const noi = egi - totalAnnualOpex
  const monthlyNoi = noi / 12

  // Phase 5: Debt Service
  const loanAmount = i.purchase_price * (1 - i.down_payment_pct / 100)
  const r = i.mortgage_rate_pct / 100 / 12
  const n = i.loan_term_years * 12
  let monthlyPI
  if (loanAmount <= 0) {
    monthlyPI = 0
  } else if (r > 0) {
    monthlyPI = loanAmount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)
  } else {
    monthlyPI = loanAmount / n
  }
  const annualDebtService = monthlyPI * 12

  // Phase 6: Cash Flow
  const monthlyCashFlow = monthlyNoi - monthlyPI
  const annualCashFlow = noi - annualDebtService
  const downPaymentDollars = i.purchase_price * (i.down_payment_pct / 100)
  const closingCostsDollars = i.purchase_price * (i.closing_costs_pct / 100)
  const totalCashInvested = downPaymentDollars + closingCostsDollars
  const cashFlowYieldPct = totalCashInvested <= 0 ? 0 : (annualCashFlow / totalCashInvested) * 100

  // Phase 7: Break-even Occupancy
  const breakEvenOccupancyPct = annualGrossRent <= 0 ? 0 :
    ((totalAnnualOpex + annualDebtService) / annualGrossRent) * 100

  // Phase 8: OER
  const oerPct = egi <= 0 ? 0 : (totalAnnualOpex / egi) * 100

  // Phase 9: DCR
  const dcr = annualDebtService <= 0 ? null : noi / annualDebtService

  // Verdict (Decision Lite — 4 tiers)
  const verdict = computeVerdict(monthlyCashFlow, dcr)

  // Break-even tier + vacancy months
  const breakEvenTier = computeBreakEvenTier(breakEvenOccupancyPct)
  const vacancyMonthsTolerable = (1 - breakEvenOccupancyPct / 100) * 12

  // Composition breakdown
  const compositionBreakdown = {
    annualPropertyTax,
    annualInsurance,
    annualHoa,
    annualPm,
    annualMaint,
    annualCapex,
    annualUtilities,
    annualOther,
    vacancyAdjustment,
    annualDebtService,
    annualCashFlow,
    annualGrossRent,
  }

  return {
    verdict,
    monthly_cash_flow: monthlyCashFlow,
    annual_cash_flow: annualCashFlow,
    cash_flow_yield_pct: cashFlowYieldPct,
    break_even_occupancy_pct: breakEvenOccupancyPct,
    break_even_tier: breakEvenTier,
    vacancy_months_tolerable: vacancyMonthsTolerable,
    oer_pct: oerPct,
    dcr,
    noi_annual: noi,
    annual_debt_service: annualDebtService,
    total_cash_invested: totalCashInvested,
    composition: compositionBreakdown,
    // For sensitivity table
    _fn: (rent, vac) => {
      const altEgi = (rent + i.other_monthly_income) * 12 * (1 - vac / 100)
      const altOpex = annualPropertyTax + annualInsurance + annualHoa +
        (rent + i.other_monthly_income) * 12 * (i.pm_pct / 100) +
        (rent + i.other_monthly_income) * 12 * (i.maint_pct / 100) +
        (rent + i.other_monthly_income) * 12 * (i.capex_pct / 100) +
        annualUtilities + annualOther
      const altNoi = altEgi - altOpex
      const altAnnualCF = altNoi - annualDebtService
      return altAnnualCF / 12
    },
  }
}

function computeVerdict(monthlyCF, dcr) {
  if (monthlyCF < 0 || (dcr !== null && dcr < 1.00)) return 'NEGATIVE'
  if (monthlyCF < 100 || (dcr !== null && dcr < 1.10)) return 'THIN'
  if (monthlyCF >= 300 && (dcr === null || dcr >= 1.25)) return 'STRONG'
  return 'GOOD'
}

function computeBreakEvenTier(beoPct) {
  if (beoPct > 100) return 'INFEASIBLE'
  if (beoPct >= 95) return 'RAZOR_THIN'
  if (beoPct >= 90) return 'THIN'
  if (beoPct >= 80) return 'NORMAL'
  return 'STRONG_CUSHION'
}

// ============================================================
// MAIN COMPUTED RESULTS
// ============================================================
const results = computed(() => calculateCashFlow())

// ============================================================
// KEY INSIGHT
// ============================================================
const keyInsight = computed(() => {
  const r = results.value
  if (!r) return null
  if (r.dcr !== null && r.dcr < 1.0) return `NOI doesn't cover debt payments — DCR ${fmt2(r.dcr)} means property loses ${Math.round((1 - r.dcr) * 100)}¢ per debt dollar. Price negotiation or rent increase needed.`
  if (r.break_even_occupancy_pct > 100) return 'Property cannot break even at full occupancy. Operating expenses + debt service exceed gross rent — not viable at these assumptions.'
  if (r.break_even_occupancy_pct >= 95) return `Break-even Occupancy ${fmt1(r.break_even_occupancy_pct)}% leaves less than 0.6 months vacancy tolerance. Tenant turnover alone often costs 1–2 months of rent.`
  if (r.oer_pct > 55) return `Operating Expense Ratio ${fmt1(r.oer_pct)}% is high — over half of effective income goes to expenses. Review Composition Breakdown to identify dominant cost.`
  if (r.monthly_cash_flow > 300 && r.dcr !== null && r.dcr >= 1.25) return `STRONG cash flow deal — $${Math.round(r.monthly_cash_flow)}/mo with DCR ${fmt2(r.dcr)} and ${fmt1(r.break_even_occupancy_pct)}% Break-even Occupancy.`
  return null
})

// ============================================================
// COMPOSITION BREAKDOWN (SVG stacked bar)
// ============================================================
const compositionSegments = computed(() => {
  const r = results.value
  if (!r || !r.composition) return []
  const c = r.composition
  const total = c.annualGrossRent
  if (total <= 0) return []

  const seg = [
    { label: 'Tax', value: c.annualPropertyTax, color: '#6366f1' },
    { label: 'Ins', value: c.annualInsurance, color: '#8b5cf6' },
    { label: 'HOA', value: c.annualHoa, color: '#a78bfa' },
    { label: 'PM', value: c.annualPm, color: '#f59e0b' },
    { label: 'Maint', value: c.annualMaint, color: '#fb923c' },
    { label: 'CapEx', value: c.annualCapex, color: '#f97316' },
    { label: 'Utils', value: c.annualUtilities, color: '#94a3b8' },
    { label: 'Other', value: c.annualOther, color: '#cbd5e1' },
    { label: 'Vacancy', value: c.vacancyAdjustment, color: '#fca5a5' },
    { label: 'Debt', value: c.annualDebtService, color: '#1e3a5f' },
    { label: 'Profit', value: Math.max(0, c.annualCashFlow), color: '#16a34a' },
  ].filter(s => s.value > 0)

  const totalParts = seg.reduce((a, s) => a + s.value, 0)
  let x = 0
  return seg.map(s => {
    const pct = s.value / totalParts
    const w = pct * 400
    const segment = { ...s, pct: (s.value / total) * 100, x: Math.round(x), w: Math.round(w) }
    x += w
    return segment
  })
})

// ============================================================
// MONTHLY BAR CHART (12 months)
// ============================================================
const monthlyBarZeroY = computed(() => {
  const r = results.value
  if (!r) return 50
  const cf = r.monthly_cash_flow
  // Vacancy distributed: assume 1 month vacant (based on vacancy %)
  const vacMonths = Math.round(d('vacancy_pct') / 100 * 12)
  const maxAbs = Math.max(Math.abs(cf) * 1.5, 100)
  return 90 - (Math.max(0, cf) / maxAbs) * 80
})

const monthlyBars = computed(() => {
  const r = results.value
  if (!r) return []
  const cf = r.monthly_cash_flow
  const vacMonths = Math.round(d('vacancy_pct') / 100 * 12)
  const months = ['J','F','M','A','M','J','J','A','S','O','N','D']
  const maxAbs = Math.max(Math.abs(cf) * 1.5, 100)
  const chartH = 80
  const barW = 36
  const gap = 4

  return months.map((label, i) => {
    const isVacant = i < vacMonths
    const monthlyCF = isVacant
      ? cf - (d('monthly_rent') * (1 - d('vacancy_pct') / 100)) // rough: no rent
      : cf
    const actualCF = isVacant ? -(d('monthly_rent') - d('monthly_rent') * (1 - d('vacancy_pct') / 100)) + cf : cf
    const value = isVacant ? cf - d('monthly_rent') : cf
    const clamped = Math.max(-maxAbs, Math.min(maxAbs, value))
    const zeroY = chartH - (Math.max(0, cf) / maxAbs) * chartH
    const barH = Math.abs(clamped) / maxAbs * chartH
    const y = clamped >= 0 ? zeroY - barH : zeroY
    const x = i * (barW + gap)

    return {
      x,
      y: Math.round(Math.max(0, Math.min(chartH, y))),
      w: barW,
      h: Math.round(Math.max(2, barH)),
      color: isVacant ? '#fca5a5' : (cf >= 0 ? '#16a34a' : '#dc2626'),
      label,
    }
  })
})

// ============================================================
// BREAK-EVEN THRESHOLD VISUALIZATION
// ============================================================
const beThresholdData = computed(() => {
  const r = results.value
  if (!r) return { linePoints: '', zeroY: 50, userX: 200, beX: 200, cushionX1: 0, cushionX2: 0 }

  const W = 400
  const chartX = 20
  const chartW = W - 30
  const chartH = 80
  const yPad = 10

  // We plot annual CF at occupancy levels 0% to 100%
  const points = []
  const opexFixed = r.composition.annualPropertyTax + r.composition.annualInsurance +
    r.composition.annualHoa + r.composition.annualUtilities + r.composition.annualOther
  const annualGross = (d('monthly_rent') + d('other_monthly_income')) * 12
  const opexVarPct = (d('pm_pct') + d('maint_pct') + d('capex_pct')) / 100
  const annualDS = r.annual_debt_service

  const cfAtOcc = (occ) => {
    const egi = annualGross * occ
    const opexVar = annualGross * opexVarPct
    const totalOpex = opexFixed + opexVar
    const noi = egi - totalOpex
    return noi - annualDS
  }

  const cfMin = cfAtOcc(0)
  const cfMax = cfAtOcc(1)
  const cfRange = Math.max(cfMax - cfMin, 1)

  for (let i = 0; i <= 20; i++) {
    const occ = i / 20
    const cf = cfAtOcc(occ)
    const x = chartX + occ * chartW
    const y = yPad + chartH - ((cf - cfMin) / cfRange) * chartH
    points.push(`${Math.round(x)},${Math.round(Math.max(yPad, Math.min(yPad + chartH, y)))}`)
  }

  const zeroY = yPad + chartH - ((0 - cfMin) / cfRange) * chartH
  const userOcc = (100 - d('vacancy_pct')) / 100
  const userX = chartX + userOcc * chartW
  const beOcc = r.break_even_occupancy_pct / 100
  const beX = chartX + Math.min(1, Math.max(0, beOcc)) * chartW

  // Cushion = area between user occupancy and BE
  const cushionX1 = Math.min(userX, beX)
  const cushionX2 = Math.max(userX, beX)

  return {
    linePoints: points.join(' '),
    zeroY: Math.round(Math.max(yPad, Math.min(yPad + chartH, zeroY))),
    userX: Math.round(userX),
    beX: Math.round(beX),
    cushionX1: Math.round(cushionX1),
    cushionX2: Math.round(cushionX2),
  }
})

// ============================================================
// SENSITIVITY TABLE
// ============================================================
const sensitivityRents = computed(() => {
  const base = d('monthly_rent') || 1800
  const step = Math.round(base * 0.15 / 100) * 100 || 300
  const mid = Math.round(base / step) * step
  return [mid - 2*step, mid - step, mid, mid + step, mid + 2*step, mid + 3*step].filter(r => r > 0)
})

const sensitivityVacancies = [5, 8, 10, 15, 20]

function sensitivityCell(rent, vac) {
  const r = results.value
  if (!r) return '—'
  const val = r._fn(rent, vac)
  return (val >= 0 ? '+' : '') + '$' + Math.round(Math.abs(val)).toLocaleString() + (val < 0 ? ' ❌' : '')
}

function sensitivityCellStyle(rent, vac) {
  const r = results.value
  if (!r) return {}
  const val = r._fn(rent, vac)
  const isCurrentCell = Math.abs(rent - d('monthly_rent')) < 1 && Math.abs(vac - d('vacancy_pct')) < 0.1
  const style = {}
  if (isCurrentCell) style.outline = '2px solid #6366f1'
  return style
}

function sensitivityCellClass(rent, vac) {
  const r = results.value
  if (!r) return 'text-gray-400'
  const val = r._fn(rent, vac)
  if (val >= 300) return 'bg-green-100 text-green-800'
  if (val >= 100) return 'bg-green-50 text-green-700'
  if (val >= 0) return 'bg-amber-100 text-amber-800'
  return 'bg-red-100 text-red-700'
}

// ============================================================
// SCENARIOS
// ============================================================
const scenarios = computed(() => {
  const baseRent = d('monthly_rent')
  const baseVac = d('vacancy_pct')
  const baseMaint = d('maint_pct')
  const basePt = d('property_tax_pct')
  const baseIns = d('insurance_annual')

  const conservativeOverrides = {
    monthly_rent: baseRent * 0.95,
    vacancy_pct: baseVac + 5,
    maint_pct: baseMaint + 3,
    property_tax_pct: basePt * 1.20,
    insurance_annual: baseIns * 1.20,
  }

  const optimisticOverrides = {
    monthly_rent: baseRent * 1.05,
    vacancy_pct: Math.max(0, baseVac - 3),
    maint_pct: Math.max(0, baseMaint - 2),
  }

  const calc = (overrides) => {
    // We need to temporarily adjust inp values
    const saved = {}
    for (const k of Object.keys(overrides)) {
      saved[k] = inp.value[k]
      inp.value[k] = overrides[k]
    }
    const r = calculateCashFlow()
    for (const k of Object.keys(overrides)) {
      inp.value[k] = saved[k]
    }
    return r
  }

  const base = results.value
  const conservative = base ? calculateCashFlow(conservativeOverrides) : null
  const optimistic = base ? calculateCashFlow(optimisticOverrides) : null

  return [
    { label: 'Conservative', r: conservative || { monthly_cash_flow: 0, annual_cash_flow: 0, dcr: null, verdict: 'NEGATIVE' } },
    { label: 'Base', r: base || { monthly_cash_flow: 0, annual_cash_flow: 0, dcr: null, verdict: 'NEGATIVE' } },
    { label: 'Optimistic', r: optimistic || { monthly_cash_flow: 0, annual_cash_flow: 0, dcr: null, verdict: 'NEGATIVE' } },
  ]
})

const scenarioVerdictShifts = computed(() => {
  const [c, b, o] = scenarios.value.map(s => s.r?.verdict)
  return c && b && o && (c !== b || b !== o)
})

// ============================================================
// DISPLAY HELPERS
// ============================================================
function fmtDollar(v) {
  if (v === null || v === undefined || isNaN(v)) return '$0'
  const abs = Math.abs(Math.round(v))
  return (v < 0 ? '-$' : '$') + abs.toLocaleString()
}
function fmt0(v) { return (Math.round(v || 0)).toString() }
function fmt1(v) { return (Math.round((v || 0) * 10) / 10).toFixed(1) }
function fmt2(v) { return (Math.round((v || 0) * 100) / 100).toFixed(2) }

function dcrInterpretation(dcr) {
  if (dcr === null || dcr === undefined) return 'N/A — no debt'
  if (dcr < 1.00) return `NOI doesn't cover debt — property loses ${Math.round((1 - dcr) * 100)}% per debt dollar`
  const pct = Math.round((dcr - 1) * 100)
  return `Property generates ${pct}% more income than debt payments`
}

function verdictIcon(v) {
  const icons = { STRONG: '✅', GOOD: '✅', THIN: '🟡', NEGATIVE: '❌' }
  return icons[v] || '—'
}

function verdictSubtitle(v) {
  const subs = {
    STRONG: 'Comfortable monthly margin + DCR lender-friendly. Rare at 2026 investor rates.',
    GOOD: 'Typical 2026 investor target — property covers itself with reasonable cushion.',
    THIN: 'Technically positive but fragile. Verify every assumption before committing.',
    NEGATIVE: 'Property loses money operationally. Reconsider price, rent, or financing structure.',
  }
  return subs[v] || ''
}

function verdictCardClass(v) {
  const classes = {
    STRONG: 'bg-green-50 border-green-300 text-green-800',
    GOOD: 'bg-blue-50 border-blue-300 text-blue-800',
    THIN: 'bg-amber-50 border-amber-300 text-amber-800',
    NEGATIVE: 'bg-red-50 border-red-300 text-red-800',
  }
  return classes[v] || 'bg-gray-50 border-gray-200 text-gray-700'
}

function verdictBadgeClass(v) {
  const classes = {
    STRONG: 'bg-green-100 text-green-700 border-green-300',
    GOOD: 'bg-blue-100 text-blue-700 border-blue-300',
    THIN: 'bg-amber-100 text-amber-700 border-amber-300',
    NEGATIVE: 'bg-red-100 text-red-700 border-red-300',
  }
  return classes[v] || 'bg-gray-100 text-gray-700 border-gray-200'
}

function breakEvenColor(tier) {
  const colors = {
    STRONG_CUSHION: 'text-green-600',
    NORMAL: 'text-blue-600',
    THIN: 'text-amber-600',
    RAZOR_THIN: 'text-orange-600',
    INFEASIBLE: 'text-red-600',
  }
  return colors[tier] || 'text-gray-600'
}

function breakEvenBadgeClass(tier) {
  const classes = {
    STRONG_CUSHION: 'bg-green-100 text-green-700 border-green-300',
    NORMAL: 'bg-blue-100 text-blue-700 border-blue-300',
    THIN: 'bg-amber-100 text-amber-700 border-amber-300',
    RAZOR_THIN: 'bg-orange-100 text-orange-700 border-orange-300',
    INFEASIBLE: 'bg-red-100 text-red-700 border-red-300',
  }
  return classes[tier] || 'bg-gray-100 text-gray-600 border-gray-200'
}

function breakEvenTierLabel(tier) {
  const labels = {
    STRONG_CUSHION: 'STRONG CUSHION',
    NORMAL: 'NORMAL',
    THIN: 'THIN',
    RAZOR_THIN: 'RAZOR-THIN',
    INFEASIBLE: 'INFEASIBLE',
  }
  return labels[tier] || tier
}

function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
}

// ============================================================
// SAVED SCENARIOS
// ============================================================
const STORAGE_KEY = 'property-cash-flow-scenarios'
const MAX_SCENARIOS = 20
const savedScenarios = ref([])

function saveScenario() {
  const r = results.value
  if (!r) return
  if (savedScenarios.value.length >= MAX_SCENARIOS) {
    alert(`Maximum ${MAX_SCENARIOS} scenarios reached. Delete one to save a new scenario.`)
    return
  }
  const scenario = {
    id: Date.now() + Math.random(),
    label: `Scenario ${savedScenarios.value.length + 1}`,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    inputs: { ...inp.value, _opexMode: opexMode.value },
    verdict: r.verdict,
    monthly_cash_flow: r.monthly_cash_flow,
    annual_cash_flow: r.annual_cash_flow,
    cash_flow_yield_pct: r.cash_flow_yield_pct,
    break_even_occupancy_pct: r.break_even_occupancy_pct,
    break_even_tier: r.break_even_tier,
    dcr: r.dcr,
    oer_pct: r.oer_pct,
    noi_annual: r.noi_annual,
  }
  const updated = [scenario, ...savedScenarios.value]
  savedScenarios.value = updated
  if (process.client) localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
}

function loadScenario(scenario) {
  Object.assign(inp.value, scenario.inputs)
  if (scenario.inputs._opexMode) opexMode.value = scenario.inputs._opexMode
}

function deleteScenario(id) {
  if (!confirm('Delete this scenario?')) return
  const updated = savedScenarios.value.filter(s => s.id !== id)
  savedScenarios.value = updated
  if (process.client) localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
}

function startEdit(scenario) {
  editingId.value = scenario.id
  editingLabel.value = scenario.label
}

function finishEdit(id) {
  const scenario = savedScenarios.value.find(s => s.id === id)
  if (scenario && editingLabel.value.trim()) {
    scenario.label = editingLabel.value.trim()
    if (process.client) localStorage.setItem(STORAGE_KEY, JSON.stringify(savedScenarios.value))
  }
  editingId.value = null
  editingLabel.value = ''
}

// ============================================================
// URL PARAMETER IMPORT
// ============================================================
const URL_PARAM_MAP = {
  p: 'purchase_price',
  dp: 'down_payment_pct',
  lr: 'mortgage_rate_pct',
  lt: 'loan_term_years',
  r: 'monthly_rent',
  oi: 'other_monthly_income',
  vc: 'vacancy_pct',
  pt: 'property_tax_pct',
  ins: 'insurance_annual',
  hoa: 'hoa_monthly',
  pm: 'pm_pct',
  mn: 'maint_pct',
  cx: 'capex_pct',
  cl: 'closing_costs_pct',
}

onMounted(() => {
  if (process.client) {
    // Load saved scenarios
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) savedScenarios.value = JSON.parse(stored)
    } catch {}

    // Import URL params
    const params = new URLSearchParams(window.location.search)
    let hasParams = false
    for (const [shortKey, fullKey] of Object.entries(URL_PARAM_MAP)) {
      if (params.has(shortKey)) {
        hasParams = true
        const val = parseFloat(params.get(shortKey))
        if (!isNaN(val)) inp.value[fullKey] = val
      }
    }
  }
})

// ============================================================
// SHARE URL
// ============================================================
function copyShareableURL() {
  if (!process.client) return
  const params = new URLSearchParams()
  if (inp.value.purchase_price) params.set('p', inp.value.purchase_price)
  if (inp.value.down_payment_pct) params.set('dp', inp.value.down_payment_pct)
  if (inp.value.mortgage_rate_pct) params.set('lr', inp.value.mortgage_rate_pct)
  if (inp.value.loan_term_years) params.set('lt', inp.value.loan_term_years)
  if (inp.value.monthly_rent) params.set('r', inp.value.monthly_rent)
  if (inp.value.other_monthly_income) params.set('oi', inp.value.other_monthly_income)
  if (inp.value.vacancy_pct) params.set('vc', inp.value.vacancy_pct)
  if (inp.value.property_tax_pct) params.set('pt', inp.value.property_tax_pct)
  if (inp.value.insurance_annual) params.set('ins', inp.value.insurance_annual)
  if (inp.value.hoa_monthly) params.set('hoa', inp.value.hoa_monthly)
  if (inp.value.pm_pct) params.set('pm', inp.value.pm_pct)
  if (inp.value.maint_pct) params.set('mn', inp.value.maint_pct)
  if (inp.value.capex_pct) params.set('cx', inp.value.capex_pct)
  if (inp.value.closing_costs_pct) params.set('cl', inp.value.closing_costs_pct)
  const url = `${window.location.origin}/property-cash-flow-calculator?${params.toString()}`
  navigator.clipboard.writeText(url).then(() => alert('Link copied to clipboard!')).catch(() => {})
}

// ============================================================
// PDF EXPORT
// ============================================================
async function exportPDF() {
  if (!process.client) return
  const r = results.value
  if (!r) { alert('Please enter purchase price and rent first.'); return }
  try {
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF()
    doc.setFontSize(16)
    doc.text('Property Cash Flow Calculator — RealCalc', 14, 20)
    doc.setFontSize(10)
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 28)
    doc.setFontSize(12)
    doc.text(`Cash Flow Verdict: ${r.verdict}`, 14, 40)
    doc.text(`Monthly Cash Flow: ${fmtDollar(r.monthly_cash_flow)}/month`, 14, 50)
    doc.text(`Annual Cash Flow: ${fmtDollar(r.annual_cash_flow)}`, 14, 58)
    doc.text(`Cash Flow Yield: ${fmt2(r.cash_flow_yield_pct)}%`, 14, 66)
    doc.text(`Break-even Occupancy: ${fmt1(r.break_even_occupancy_pct)}% (${breakEvenTierLabel(r.break_even_tier)})`, 14, 74)
    doc.text(`Vacancy Months Tolerable: ${fmt1(r.vacancy_months_tolerable)} months/yr`, 14, 82)
    doc.text(`DCR: ${r.dcr === null ? 'N/A — no debt' : fmt2(r.dcr)}`, 14, 90)
    doc.text(`NOI (Annual): ${fmtDollar(r.noi_annual)}`, 14, 98)
    doc.text(`Operating Expense Ratio: ${fmt1(r.oer_pct)}%`, 14, 106)
    doc.setFontSize(9)
    doc.text('Note: Cash Flow is Year 1 stabilized monthly average. Actual months vary. Not investment advice.', 14, 130)
    doc.text('arvcalc.com — RealCalc Investment Hub', 14, 138)
    doc.save('property-cash-flow-analysis.pdf')
  } catch (e) {
    console.error('PDF export error', e)
  }
}

// ============================================================
// STATIC CONTENT DATA
// ============================================================
const strategies = [
  {
    title: 'Beginner Investor',
    critical: 'Cash Flow Verdict (lean on the synthesis); Stabilization disclaimer',
    misleading: 'High Monthly CF without checking DCR — a $400/mo CF with DCR 1.03 is fragile',
    prioritize: 'GOOD or STRONG Verdict + Break-even ≤ 90% + DCR ≥ 1.25',
  },
  {
    title: 'Cash Flow–Focused Investor',
    critical: 'Monthly CF; Break-even Occupancy; DCR',
    misleading: "Cash Flow Yield % alone — easily confused with ROI, doesn't reflect risk",
    prioritize: '$200+/mo CF, Break-even < 90%, DCR ≥ 1.20 minimum',
  },
  {
    title: 'Appreciation Play Investor',
    critical: 'DCR ≥ 1.0 (operational viability floor); Break-even Occupancy',
    misleading: 'Negative Monthly CF as automatic deal-killer — it\'s acceptable if DCR > 1.0 and you can fund variance',
    prioritize: 'Real Estate ROI Calculator for full picture; this calculator confirms the operational floor',
  },
  {
    title: 'Lender / DSCR Loan Applicant',
    critical: 'DCR (≥ 1.25 for DSCR loan approval); OER (lender expects < 50%)',
    misleading: 'Monthly CF alone — lenders care about DCR, not your net pocket amount',
    prioritize: 'DSCR Calculator for full underwriting; this calculator as pre-check',
  },
  {
    title: 'High-Volume Portfolio Operator',
    critical: 'Cash Flow Composition Breakdown; OER across portfolio',
    misleading: 'Average Monthly CF — operators need to spot expense outliers per property',
    prioritize: 'Lower OER through in-house PM, amortized CapEx reserves, portfolio-level insurance',
  },
]

const applications = [
  { icon: '🏠', title: 'Pre-offer cash flow check', desc: 'Confirm cash flow at your offer price and financing terms before inspection or contracts. Know your Verdict before committing.' },
  { icon: '🔄', title: 'Refinance decision modeling', desc: 'Model the impact of a new rate or loan on Monthly CF, DCR, and Break-even Occupancy. See if refi makes the deal viable.' },
  { icon: '📈', title: 'Rent increase impact analysis', desc: 'Evaluate $50/$100/$200 rent increases — see how Verdict, Break-even, and Cash Flow Yield shift before raising rent.' },
  { icon: '🏦', title: 'DSCR loan pre-qualification', desc: 'Pre-check DCR against the 1.25 lender minimum before applying. This calculator matches DSCR Calculator output ±0.01.' },
  { icon: '🔍', title: 'Expense audit on existing rental', desc: 'Cash flow lower than expected? Composition Breakdown reveals the dominant cost category — tax, PM, CapEx, or vacancy.' },
  { icon: '🗺️', title: 'New market screening', desc: 'Model 5–10 properties in an unfamiliar market, save scenarios, compare Break-even Occupancy across submarkets.' },
]

const limitations = [
  {
    title: 'Investor analysis only — not primary residence',
    desc: 'Default rates are 7.5% Conventional with 25% down — investor financing. For primary residence analysis, use the Mortgage Calculator or Rent vs Buy Calculator. For house-hacks, use this for the rental component.',
  },
  {
    title: 'Year 1 stabilized average — not month-by-month projection',
    desc: 'This calculator outputs a Year 1 stabilized monthly average. It does not model specific month-by-month vacancy timing, tenant turnover costs, one-time repairs (HVAC, roof), or seasonal expense variance. Use for go/no-go decisions, not as a guarantee of constant monthly cash flow.',
  },
  {
    title: 'Single year focus — not lifetime ROI',
    desc: 'Answers "Year 1 operational cash flow?" only. Does not project lifetime ROI, equity buildup, or tax-shelter benefits. Use the Real Estate ROI Calculator for full multi-year return modeling.',
  },
  {
    title: 'Cash Flow Verdict aids judgment — doesn\'t replace it',
    desc: 'The Verdict synthesizes Monthly CF and DCR into a tier. It does not account for execution capability, market stability, tenant quality, property condition, or local regulation. A STRONG Verdict requires all of these to actually perform.',
  },
  {
    title: 'Tax assumptions are simplified',
    desc: 'Operating expenses are pre-tax. The calculator does not model depreciation tax shield, mortgage interest deduction, bonus depreciation, or capital gains treatment. Consult a CPA for actual tax projections.',
  },
  {
    title: 'Educational tool — not a substitute for professional advice',
    desc: 'Results are for informational purposes. Before any purchase commitment: engage a real estate attorney, licensed CPA, property inspector, and local market specialist. This is not investment advice.',
  },
]

const whenNotToUse = [
  { label: 'Primary residence rent vs buy', to: '/rent-vs-buy-calculator', calc: 'Rent vs Buy Calculator' },
  { label: 'Lifetime ROI (7-30 yr)', to: '/real-estate-roi-calculator', calc: 'Real Estate ROI Calculator' },
  { label: 'Lender DSCR underwriting', to: '/dscr-calculator', calc: 'DSCR Calculator' },
  { label: 'Pre-debt operating income', to: '/noi-calculator', calc: 'NOI Calculator' },
  { label: 'Property-level yield (no financing)', to: '/cap-rate-calculator', calc: 'Cap Rate Calculator' },
  { label: 'Year-1 cash return only', to: '/cash-on-cash-calculator', calc: 'Cash-on-Cash Calculator' },
]

const commonMistakes = [
  {
    title: 'Inflating the rent assumption',
    desc: 'Rent is the highest-leverage input. An optimistic rent estimate of $200/month extra shifts Verdict from THIN to GOOD on paper — but reality won\'t deliver. Use Rentometer or Zillow Rent Estimate, then apply a 5% discount for safety.',
  },
  {
    title: 'Underestimating operating expenses',
    desc: 'Beginners routinely skip CapEx reserve (5%), maintenance (5%), or property management (8%). Total OpEx under 25% is almost always incomplete. Typical US rental sits at 30–35% of gross rent — verify every line item.',
  },
  {
    title: 'Trusting Monthly CF without checking DCR',
    desc: '$300/month cash flow sounds great. But DCR 1.05 means a single bad month wipes out the year. Always verify DCR ≥ 1.20 minimum — that\'s what lenders and experienced investors require as a buffer.',
  },
  {
    title: 'Ignoring Break-even Occupancy',
    desc: 'A property with 95% Break-even Occupancy has only 0.6 months vacancy tolerance per year. Tenant turnover alone typically costs 1–2 months of lost rent. This is a Year-1-fragile situation regardless of the Verdict tier.',
  },
  {
    title: 'Treating the stabilized average as a guarantee',
    desc: 'Stabilized cash flow is a Year 1 average — not what you receive every single month. Some months will be $0 (turnover), some months will be double. Plan for variance and build a 3-month cash reserve before relying on rental income for living expenses.',
  },
]

const faqs = [
  {
    question: 'Is this calculator for primary residence or investment property?',
    answer: 'Investment property only. Default rates are 7.5% Conventional with 25% down — these are 2026 investor financing rates, not primary residence rates. For primary residence analysis, use the Rent vs Buy Calculator. For house-hacks, use this calculator for the rental unit component and the Mortgage Calculator for the owner-occupied portion.',
  },
  {
    question: 'Why is my Monthly Cash Flow lower than I expected?',
    answer: '2026 investor rates (7.5%+) compress cash flow significantly compared to the 2018–2021 low-rate era. A property that produced $400/month at 4% may show only $50–150 at 7.5% with identical fundamentals. Also check your operating expenses — beginners regularly miss CapEx reserve, updated property tax, and current insurance quotes. Toggle to $ mode and enter verified actuals.',
  },
  {
    question: 'What is a "good" Monthly Cash Flow at 2026 rates?',
    answer: 'Verdict tiers: <strong>STRONG</strong> ($300+/mo AND DCR ≥ 1.25) is rare under $250K at these rates. <strong>GOOD</strong> ($100–300/mo AND DCR ≥ 1.10) is the typical 2026 investor target. <strong>THIN</strong> ($0–100/mo OR DCR 1.00–1.10) is viable but fragile. Don\'t fixate on the absolute dollar amount — DCR ≥ 1.20 with positive cash flow is healthier than $400/month with DCR 1.05.',
  },
  {
    question: 'What is Break-even Occupancy and why does it matter more than Monthly Cash Flow?',
    answer: 'Break-even Occupancy = (Total OpEx + Annual Debt Service) / Annual Gross Rent. It answers "what occupancy percentage do I need to break even financially?" If 85%, you need 85% occupancy — meaning you can tolerate about 1.8 months of vacancy per year before losing money. Most ROI calculators don\'t show this. It\'s the signature metric of this calculator because it directly tells you how fragile your cash flow is to vacancy — the actual variable you can\'t control.',
  },
  {
    question: 'How does DCR differ from DSCR?',
    answer: 'Same formula (NOI / Annual Debt Service), different terminology. DCR (Debt Coverage Ratio) is the generic real estate finance term. DSCR (Debt Service Coverage Ratio) is the lender-specific version used in DSCR loan programs. This calculator\'s DCR output matches the DSCR Calculator output ±0.01 — a cross-calculator invariant enforced in the calculation engine.',
  },
  {
    question: 'Why is the cash flow "stabilized" — what does that mean practically?',
    answer: 'Stabilized means Year 1 monthly average across all 12 months. Real months won\'t match exactly: some months deliver $0 (tenant moved out, cleaning, re-leasing), some months deliver 2× the average (stable tenant, no repairs). The average converges to the displayed figure across the full year. Practically: don\'t budget personal expenses around receiving $385 every month. Build a 3-month cash reserve to absorb variance before relying on this income.',
  },
  {
    question: 'Why does the calculator exclude appreciation from cash flow?',
    answer: 'Appreciation isn\'t cash — you can\'t deposit it at the bank each month. Cash flow is strictly operational: what rent comes in, what expenses go out, what\'s left. Appreciation matters for total return (use the Real Estate ROI Calculator for that) but doesn\'t pay your mortgage or fund monthly operations. Properties with negative cash flow but strong appreciation are "appreciation plays" — viable for certain strategies, but they\'re not cash flow deals by definition.',
  },
  {
    question: 'What happens with an all-cash purchase?',
    answer: 'The calculator handles all-cash correctly: Loan = $0, Monthly P&I = $0, Annual Debt Service = $0. Cash Flow equals NOI directly. DCR displays as "N/A — no debt." Cash Flow Yield is computed against the full purchase price plus closing costs. Note: all-cash purchases maximize monthly cash flow but typically produce lower ROI than leveraged purchases because you\'re deploying more capital per dollar of return.',
  },
  {
    question: 'How accurate are the default operating expense percentages?',
    answer: 'The defaults (PM 8% + Maintenance 5% + CapEx 5% = 18% operational; total typically 30–35% with property tax + insurance + HOA) reflect investor community consensus as of 2026. They\'re reasonable starting points but should be replaced with actuals when available: county property tax record, HOA statement, current insurance quote, local PM rate quote. Switch to $ mode in the toggle when you have verified dollar amounts.',
  },
  {
    question: 'Can I save multiple scenarios and compare them?',
    answer: 'Yes. The Saved Scenarios widget (directly below the calculator) lets you save up to 20 scenarios for free — no account required. All data is stored in your browser\'s localStorage. Each saved scenario stores: Verdict, Monthly CF, Annual CF, DCR, Break-even Occupancy, OER, NOI, and the full inputs snapshot. Click "Compare All" to navigate to the Compare Real Estate Deals page with your scenarios pre-loaded.',
  },
]

const relatedCalcs = [
  { to: '/cash-on-cash-calculator', icon: '💵', name: 'Cash-on-Cash Calculator', desc: 'Year 1 cash yield — matches Cash Flow Yield ±0.1pp' },
  { to: '/noi-calculator', icon: '📊', name: 'NOI Calculator', desc: 'Pre-debt operating income — matches NOI output ±$10' },
  { to: '/cap-rate-calculator', icon: '📈', name: 'Cap Rate Calculator', desc: 'Property-level yield without financing' },
  { to: '/dscr-calculator', icon: '🏦', name: 'DSCR Calculator', desc: 'Lender underwriting — matches DCR ±0.01' },
  { to: '/rental-property-calculator', icon: '🏠', name: 'Rental Property Calculator', desc: 'Year 1 operations breakdown' },
  { to: '/real-estate-roi-calculator', icon: '🎯', name: 'Real Estate ROI Calculator', desc: 'Comprehensive Decision Engine across strategies' },
  { to: '/compare-deals', icon: '⚖️', name: 'Compare Real Estate Deals', desc: 'Side-by-side comparison of saved scenarios' },
  { to: '/mortgage-calculator-investment', icon: '🔢', name: 'Mortgage Investment Calculator', desc: 'Detailed investor mortgage breakdown' },
]
</script>
