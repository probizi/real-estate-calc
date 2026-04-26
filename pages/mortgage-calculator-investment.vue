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
            <li class="text-gray-700 font-semibold">Investment Property Mortgage Calculator</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         H1 + ON THIS PAGE
    ═══════════════════════════════════════════════ -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-6">
        <div class="mb-4">
          <span class="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3" style="background:#fef3c7; color:#92400e;">Free Calculator</span>
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            Investment Property Mortgage Calculator — PITI, Cash Flow, DSCR
          </h1>
          <p class="text-gray-500 mt-2 text-base">Project monthly PITI, rental cash flow, DSCR, and compare loan scenarios. Uses 2026 investor rates.</p>
        </div>
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            <li><a href="#what-is" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is</a></li>
            <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
            <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
            <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
            <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Applications</a></li>
            <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
          </ul>
          <div class="md:hidden">
            <ul class="flex flex-col gap-y-2">
              <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
              <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
              <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            </ul>
            <ul v-show="isNavExpanded" class="flex flex-col gap-y-2 mt-2">
              <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
              <li><a href="#what-is" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
              <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
              <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
              <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
            </ul>
            <button @click="isNavExpanded = !isNavExpanded"
              class="mt-2 flex items-center gap-1 text-xs font-bold transition" style="color: #b45309;">
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          <span v-if="currentMode === 1">PITI</span>
          <span v-else-if="currentMode === 2">Cash Flow</span>
          <span v-else>Compare</span>
        </div>
        <div class="flex items-center gap-3">
          <template v-if="currentMode === 1 && hasResult">
            <span class="text-2xl font-extrabold leading-none" style="color:#1e3a5f;">{{ formatCurrency(monthlyPITI) }}</span>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full text-white bg-blue-600">/mo</span>
          </template>
          <template v-else-if="currentMode === 2 && hasResult">
            <span class="text-2xl font-extrabold leading-none" :class="cashFlowBadge.textClass">{{ formatCurrency(Math.abs(netMonthlyCashFlow)) }}</span>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full text-white" :class="cashFlowBadge.bgClass">{{ cashFlowBadge.shortLabel }}</span>
          </template>
          <template v-else>
            <span class="text-sm text-gray-400 font-medium">Enter inputs below</span>
          </template>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         MAIN CONTENT
    ═══════════════════════════════════════════════ -->
    <main class="max-w-[1100px] mx-auto px-4 sm:px-6 py-8">

      <!-- ═══════════════════════════════════════════════
           CALCULATOR SECTION
      ═══════════════════════════════════════════════ -->
      <div id="calculator" class="scroll-mt-20">
        <div class="grid lg:grid-cols-[3fr_2fr] gap-6">

          <!-- ═══ LEFT COLUMN — INPUTS ═══ -->
          <div class="space-y-4">

            <!-- Mode Tabs -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Calculator Mode</p>
              <div class="grid grid-cols-3 gap-2">
                <button @click="currentMode = 1"
                  class="py-3 px-3 rounded-xl text-xs font-bold transition border-2"
                  :class="currentMode === 1 ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-500 hover:border-gray-300'">
                  <span class="block text-sm font-extrabold">Mode 1</span>
                  <span class="block text-xs mt-0.5">Standard PITI</span>
                  <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold"
                    :class="currentMode === 1 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-400'">Default</span>
                </button>
                <button @click="currentMode = 2"
                  class="py-3 px-3 rounded-xl text-xs font-bold transition border-2"
                  :class="currentMode === 2 ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-gray-200 text-gray-500 hover:border-gray-300'">
                  <span class="block text-sm font-extrabold">Mode 2</span>
                  <span class="block text-xs mt-0.5">Rental Offset</span>
                  <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold"
                    :class="currentMode === 2 ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-400'">Investor</span>
                </button>
                <button @click="currentMode = 3"
                  class="py-3 px-3 rounded-xl text-xs font-bold transition border-2"
                  :class="currentMode === 3 ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-500 hover:border-gray-300'">
                  <span class="block text-sm font-extrabold">Mode 3</span>
                  <span class="block text-xs mt-0.5">Compare Loans</span>
                  <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold"
                    :class="currentMode === 3 ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-400'">Advanced</span>
                </button>
              </div>
            </div>

            <!-- Core Inputs (Mode 1 & 2) -->
            <div v-if="currentMode !== 3" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Property &amp; Loan</p>
              <div class="space-y-4">

                <!-- Property Price -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Property Price</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="propertyPrice" type="number" min="0" step="1000"
                      placeholder="Enter property price"
                      class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition"/>
                  </div>
                  <p v-if="propertyPrice > 0 && propertyPrice < 10000" class="text-xs text-red-500 mt-1">Price seems low — enter full amount (e.g. 300000)</p>
                  <p v-if="propertyPrice > 50000000" class="text-xs text-amber-500 mt-1">Price above $50M — verify input</p>
                </div>

                <!-- Down Payment -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Down Payment</label>
                  <div class="flex gap-2">
                    <div class="relative flex-1">
                      <input v-model.number="downPayment" type="number" min="0" max="100" step="0.5"
                        placeholder="25"
                        class="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition pr-8"/>
                      <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                    </div>
                    <div class="relative flex-1">
                      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                      <input :value="downPaymentAmount > 0 ? Math.round(downPaymentAmount) : ''" type="number" disabled
                        class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-100 bg-gray-50 text-gray-500 font-semibold text-sm"/>
                    </div>
                  </div>
                  <p v-if="isAllCash" class="text-xs text-blue-600 mt-1 font-medium">All-cash purchase — see note in results</p>
                  <p v-if="pmIActive" class="text-xs text-amber-600 mt-1">PMI applies (Conv/Second Home &lt;20% down)</p>
                </div>

                <!-- Loan Type -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Loan Type</label>
                  <select v-model="loanType" @change="onLoanTypeChange"
                    class="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition bg-white">
                    <option value="Conventional">Conventional (Fannie/Freddie)</option>
                    <option value="DSCR">DSCR Loan</option>
                    <option value="Portfolio">Portfolio Loan</option>
                    <option value="HardMoney">Hard Money</option>
                    <option value="SecondHome">Second Home</option>
                  </select>
                  <p v-if="loanType === 'HardMoney'" class="text-xs text-amber-600 mt-1">Hard Money: short-term (1yr default), 12% rate. Best for flips, not long-term holds.</p>
                </div>

                <!-- Interest Rate + Loan Term -->
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-semibold text-gray-700 mb-1">Interest Rate</label>
                    <div class="relative">
                      <input v-model.number="loanRate" type="number" min="0.1" max="25" step="0.05"
                        placeholder="7.5"
                        class="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition pr-8"/>
                      <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                    </div>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-700 mb-1">Loan Term</label>
                    <select v-model.number="loanTerm"
                      class="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition bg-white">
                      <option :value="1">1 year</option>
                      <option :value="15">15 years</option>
                      <option :value="20">20 years</option>
                      <option :value="25">25 years</option>
                      <option :value="30">30 years</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tax, Insurance, PMI -->
            <div v-if="currentMode !== 3" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Taxes, Insurance &amp; HOA</p>
              <div class="space-y-4">

                <!-- Property Tax toggle -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Annual Property Tax</label>
                  <div class="flex gap-2 mb-2">
                    <button @click="taxMode = 'pct'" :class="taxMode === 'pct' ? 'bg-navy text-white border-transparent' : 'bg-white text-gray-500 border-gray-200'"
                      class="flex-1 py-1.5 rounded-lg text-xs font-bold transition border" style="background: taxMode === 'pct' ? '#1e3a5f' : '';"
                      :style="taxMode === 'pct' ? 'background:#1e3a5f;' : ''">% of Price</button>
                    <button @click="taxMode = 'dollar'" :class="taxMode === 'dollar' ? 'bg-navy text-white border-transparent' : 'bg-white text-gray-500 border-gray-200'"
                      class="flex-1 py-1.5 rounded-lg text-xs font-bold transition border"
                      :style="taxMode === 'dollar' ? 'background:#1e3a5f;' : ''">Dollar Amount</button>
                  </div>
                  <div v-if="taxMode === 'pct'" class="relative">
                    <input v-model.number="taxPct" type="number" min="0" max="10" step="0.1" placeholder="1.2"
                      class="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition pr-8"/>
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                  <div v-else class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="taxDollar" type="number" min="0" step="100" placeholder="Enter annual property tax"
                      class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition"/>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">US avg 1.2%; TX/NJ/IL often 2–3%</p>
                </div>

                <!-- Insurance -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Annual Home Insurance</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="annualInsurance" type="number" min="0" step="100" placeholder="1800"
                      class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition"/>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Investor rate default $1,800/yr; FL/TX may be higher</p>
                </div>

                <!-- HOA -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">HOA Fees (Monthly)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="hoaMonthly" type="number" min="0" step="25" placeholder="0"
                      class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition"/>
                  </div>
                </div>

                <!-- PMI Rate (if applicable) -->
                <div v-if="pmIActive">
                  <label class="block text-xs font-semibold text-gray-700 mb-1">PMI Rate</label>
                  <div class="relative">
                    <input v-model.number="pmiRate" type="number" min="0.1" max="3" step="0.1" placeholder="0.75"
                      class="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition pr-8"/>
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                  <p class="text-xs text-amber-600 mt-1">PMI auto-cancels at ~78% LTV (not modeled in v1)</p>
                </div>
              </div>
            </div>

            <!-- Mode 2 Rental Inputs -->
            <div v-if="currentMode === 2" class="bg-white rounded-2xl shadow-sm border border-indigo-200 p-6">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-5 h-5 rounded bg-indigo-100 flex items-center justify-center">
                  <svg class="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <p class="text-xs font-bold uppercase tracking-widest text-indigo-600">Rental Income Offset</p>
              </div>
              <div class="space-y-4">
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Expected Monthly Rent</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="monthlyRent" type="number" min="0" step="50"
                      placeholder="Enter expected monthly rent"
                      class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition"/>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Gross rent before vacancy/expenses</p>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-semibold text-gray-700 mb-1">Vacancy Rate</label>
                    <div class="relative">
                      <input v-model.number="vacancyPct" type="number" min="0" max="50" step="0.5" placeholder="8"
                        class="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition pr-8"/>
                      <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                    </div>
                    <p class="text-xs text-gray-400 mt-1">US avg ~8%</p>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-700 mb-1">OpEx % of Rent</label>
                    <div class="relative">
                      <input v-model.number="opexPct" type="number" min="0" max="80" step="1" placeholder="30"
                        class="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition pr-8"/>
                      <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                    </div>
                    <p class="text-xs text-gray-400 mt-1">Mgmt, repairs, reserves</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Advanced Options (Mode 1 & 2) -->
            <div v-if="currentMode !== 3" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <button @click="showAdvanced = !showAdvanced" class="flex items-center justify-between w-full">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400">Advanced Options</p>
                <svg class="w-4 h-4 text-gray-400 transition-transform" :class="showAdvanced ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div v-show="showAdvanced" class="mt-4 space-y-4">
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-semibold text-gray-700 mb-1">Extra Monthly Principal</label>
                    <div class="relative">
                      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                      <input v-model.number="extraPrincipal" type="number" min="0" step="50" placeholder="0"
                        class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition"/>
                    </div>
                    <p class="text-xs text-gray-400 mt-1">Shortens payoff, not payment</p>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-700 mb-1">Closing Costs</label>
                    <div class="relative">
                      <input v-model.number="closingCostsPct" type="number" min="0" max="10" step="0.1" placeholder="2"
                        class="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition pr-8"/>
                      <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Points Paid</label>
                  <div class="relative">
                    <input v-model.number="pointsPaid" type="number" min="0" max="5" step="0.25" placeholder="0"
                      class="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition pr-8"/>
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">pts</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mode 3 Compare Inputs -->
            <div v-if="currentMode === 3" class="bg-white rounded-2xl shadow-sm border border-emerald-200 p-6">
              <p class="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-4">Compare Loan Scenarios</p>
              <div class="text-xs text-gray-500 mb-4">Enter Property Price once. Customize loan details per scenario.</div>

              <!-- Shared Property Price -->
              <div class="mb-4">
                <label class="block text-xs font-semibold text-gray-700 mb-1">Property Price (shared)</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input v-model.number="propertyPrice" type="number" min="0" step="1000"
                    placeholder="Enter property price"
                    class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition"/>
                </div>
              </div>

              <!-- Scenarios A / B / C -->
              <div class="space-y-4">
                <div v-for="(s, idx) in compareScenarios" :key="idx" class="border border-gray-200 rounded-xl p-4">
                  <p class="text-xs font-bold mb-3" :class="['text-blue-600', 'text-indigo-600', 'text-emerald-600'][idx]">
                    Scenario {{ ['A','B','C'][idx] }}
                  </p>
                  <div class="grid grid-cols-2 gap-2">
                    <div>
                      <label class="block text-xs text-gray-500 mb-1">Loan Type</label>
                      <select v-model="s.loanType" @change="onCompareTypeChange(idx)"
                        class="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 text-xs font-semibold bg-white outline-none focus:border-yellow-400">
                        <option value="Conventional">Conventional</option>
                        <option value="DSCR">DSCR</option>
                        <option value="Portfolio">Portfolio</option>
                        <option value="HardMoney">Hard Money</option>
                        <option value="SecondHome">Second Home</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-xs text-gray-500 mb-1">Rate (%)</label>
                      <input v-model.number="s.rate" type="number" min="0.1" max="25" step="0.05"
                        class="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 text-xs font-semibold outline-none focus:border-yellow-400"/>
                    </div>
                    <div>
                      <label class="block text-xs text-gray-500 mb-1">Term (years)</label>
                      <select v-model.number="s.term"
                        class="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 text-xs font-semibold bg-white outline-none focus:border-yellow-400">
                        <option :value="15">15</option>
                        <option :value="20">20</option>
                        <option :value="25">25</option>
                        <option :value="30">30</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-xs text-gray-500 mb-1">Down (%)</label>
                      <input v-model.number="s.down" type="number" min="0" max="100" step="1"
                        class="w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 text-xs font-semibold outline-none focus:border-yellow-400"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div><!-- /left col -->

          <!-- ═══ RIGHT COLUMN — RESULTS ═══ -->
          <div class="space-y-4">
            <div class="lg:sticky lg:top-[5.5rem]">

              <!-- All-cash message -->
              <div v-if="isAllCash && currentMode !== 3" class="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-4">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <p class="font-bold text-blue-800 text-sm">All-cash purchase. Mortgage doesn't apply.</p>
                    <p class="text-xs text-blue-600 mt-1">For 100% down, use the Rental Property Calculator to evaluate cash-only returns.</p>
                    <NuxtLink to="/rental-property-calculator" class="inline-block mt-2 text-xs font-bold text-blue-700 underline">Use Rental Property Calculator →</NuxtLink>
                  </div>
                </div>
              </div>

              <!-- Hard Money + Mode 2 BLOCKING -->
              <div v-if="currentMode === 2 && loanType === 'HardMoney' && !isAllCash" class="bg-red-50 border-2 border-red-400 rounded-2xl p-5 mb-4">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                  <div>
                    <p class="font-bold text-red-800 text-sm mb-2">Hard money loans are not designed for rental cash flow analysis.</p>
                    <p class="text-xs text-red-600 leading-relaxed mb-3">Hard money is short-term bridge financing (6–12 months) at 12–14% rates intended for flip projects, not long-term rentals. Monthly payments at hard money rates will always far exceed rental income.</p>
                    <div class="space-y-2">
                      <NuxtLink to="/fix-and-flip-calculator" class="block w-full text-center py-2 px-3 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-700 transition">
                        Analyze as flip deal → Fix and Flip Calculator
                      </NuxtLink>
                      <button @click="loanType = 'Conventional'; onLoanTypeChange()" class="block w-full text-center py-2 px-3 bg-white border border-red-300 text-red-700 rounded-lg text-xs font-bold hover:bg-red-50 transition">
                        Switch to Conventional loan ↑
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- MODE 1 / 2 RESULTS -->
              <div v-if="(currentMode === 1 || currentMode === 2) && !isAllCash && !(currentMode === 2 && loanType === 'HardMoney')" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                <!-- Primary Metric -->
                <div class="p-5 border-b border-gray-100" :class="currentMode === 2 ? 'bg-indigo-50' : 'bg-blue-50'">
                  <template v-if="hasResult">
                    <!-- Mode 1 primary -->
                    <template v-if="currentMode === 1">
                      <p class="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">Monthly Payment (PITI)</p>
                      <div class="text-4xl font-extrabold" style="color:#1e3a5f;">{{ formatCurrency(monthlyPITI) }}</div>
                      <p class="text-xs text-gray-500 mt-1">/ month</p>
                      <div class="mt-2 flex flex-wrap gap-2 text-xs text-blue-700">
                        <span>P&I: <strong>{{ formatCurrency(monthlyPI) }}</strong></span>
                        <span>Tax: <strong>{{ formatCurrency(monthlyTax) }}</strong></span>
                        <span>Ins: <strong>{{ formatCurrency(monthlyInsurance) }}</strong></span>
                        <span v-if="monthlyPMI > 0">PMI: <strong>{{ formatCurrency(monthlyPMI) }}</strong></span>
                        <span v-if="hoaMonthly > 0">HOA: <strong>{{ formatCurrency(hoaMonthly) }}</strong></span>
                      </div>
                      <!-- Hard Money warning Mode 1 -->
                      <div v-if="loanType === 'HardMoney'" class="mt-2 text-xs text-amber-700 bg-amber-50 rounded-lg p-2">
                        Hard money is short-term financing (6–12 mo) for flips. Not designed for long-term rental holds.
                      </div>
                    </template>
                    <!-- Mode 2 primary -->
                    <template v-else>
                      <p class="text-xs font-bold uppercase tracking-widest mb-1"
                        :class="netMonthlyCashFlow >= 0 ? 'text-indigo-600' : 'text-indigo-600'">
                        {{ netMonthlyCashFlow >= 0 ? 'Net Monthly Cash Flow' : 'Net Monthly Cost' }}
                      </p>
                      <div class="text-4xl font-extrabold" :class="cashFlowBadge.textClass">
                        {{ formatCurrency(Math.abs(netMonthlyCashFlow)) }}
                      </div>
                      <p class="text-xs text-gray-500 mt-1">{{ netMonthlyCashFlow >= 0 ? 'You pocket this each month' : 'You pay this out-of-pocket' }} / month</p>
                      <div class="mt-2 flex flex-wrap gap-2 text-xs text-indigo-700">
                        <span>PITI: <strong>{{ formatCurrency(monthlyPITI) }}</strong></span>
                        <span>Eff Rent: <strong>{{ formatCurrency(effectiveRent) }}</strong></span>
                      </div>
                      <!-- Status Badge -->
                      <div class="mt-3">
                        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white" :class="cashFlowBadge.bgClass">
                          <span class="w-1.5 h-1.5 rounded-full bg-white/60"></span>
                          {{ cashFlowBadge.label }}
                        </span>
                      </div>
                      <!-- Very negative CF warning -->
                      <div v-if="netMonthlyCashFlow < -500" class="mt-2 text-xs text-amber-700 bg-amber-50 rounded-lg p-2">
                        Significantly negative cash flow. This deal requires ${{ Math.abs(Math.round(netMonthlyCashFlow)).toLocaleString() }}/mo of owner investment. Verify rent assumptions or consider different financing.
                      </div>
                      <!-- No rent prompt -->
                      <div v-if="!monthlyRent || monthlyRent === 0" class="mt-2 text-xs text-indigo-600 bg-indigo-50 rounded-lg p-2">
                        Enter expected monthly rent above to see cash flow analysis.
                      </div>
                    </template>
                  </template>
                  <template v-else>
                    <p class="text-xs text-gray-400 font-medium">Enter property price and loan details to see results</p>
                    <div class="text-3xl font-extrabold text-gray-200 mt-1">—</div>
                  </template>
                </div>

                <!-- DSCR vs Cash Flow KEY INSIGHT (Mode 2) -->
                <div v-if="currentMode === 2 && hasResult" class="mx-4 my-3 p-3 bg-indigo-50 border border-indigo-200 rounded-xl">
                  <div class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div>
                      <p class="text-xs font-bold text-indigo-800 mb-1">DSCR vs Cash Flow — Both Matter</p>
                      <p class="text-xs text-indigo-700 leading-relaxed"><strong>DSCR</strong>: lender metric — uses P&I only vs rent. Answers: "Will lender fund this?"</p>
                      <p class="text-xs text-indigo-700 leading-relaxed mt-0.5"><strong>Cash Flow</strong>: investor metric — uses full PITI vs rent. Answers: "Will this deal pay me?"</p>
                      <p class="text-xs text-indigo-600 mt-1 italic">A deal can pass DSCR ≥ 1.2 AND still be cash-flow negative. Both must be considered.</p>
                    </div>
                  </div>
                </div>

                <!-- DSCR < 1.0 warning -->
                <div v-if="currentMode === 2 && hasResult && monthlyRent > 0 && dscr < 1.0" class="mx-4 mb-3 p-3 bg-amber-50 border border-amber-200 rounded-xl">
                  <p class="text-xs font-bold text-amber-800">DSCR {{ dscr.toFixed(2) }} — below typical lender minimum of 1.20</p>
                  <p class="text-xs text-amber-700 mt-0.5">Conventional financing may not approve at this DSCR. Consider Portfolio lender, higher down payment, or lower rate.</p>
                  <NuxtLink to="/dscr-calculator" class="text-xs font-bold text-amber-700 underline mt-1 inline-block">Run DSCR Calculator for underwriting details →</NuxtLink>
                </div>


                <!-- Secondary Metrics -->
                <div v-if="hasResult" class="p-5 space-y-2">
                  <div class="flex justify-between text-sm py-1.5 border-b border-gray-50">
                    <span class="text-gray-500">Loan Amount</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(loanAmount) }}</span>
                  </div>
                  <div class="flex justify-between text-sm py-1.5 border-b border-gray-50">
                    <span class="text-gray-500">Total Cash to Close</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(totalCashToClose) }}</span>
                  </div>
                  <div class="flex justify-between text-sm py-1.5 border-b border-gray-50">
                    <span class="text-gray-500">Total Interest ({{ loanTerm }}yr)</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(totalInterest) }}</span>
                  </div>
                  <div class="flex justify-between text-sm py-1.5 border-b border-gray-50">
                    <span class="text-gray-500">Total of Payments</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(totalPayments) }}</span>
                  </div>
                  <div class="flex justify-between text-sm py-1.5 border-b border-gray-50">
                    <span class="text-gray-500">Effective APR</span>
                    <span class="font-bold text-gray-900">{{ effectiveAPR.toFixed(3) }}%</span>
                  </div>
                  <div class="flex justify-between text-sm py-1.5 border-b border-gray-50">
                    <span class="text-gray-500">First Payment: Principal</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(firstMonthPrincipal) }}</span>
                  </div>
                  <div class="flex justify-between text-sm py-1.5">
                    <span class="text-gray-500">First Payment: Interest</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(firstMonthInterest) }}</span>
                  </div>

                  <!-- Extra principal payoff note -->
                  <div v-if="extraPrincipal > 0 && earlyPayoffMonths > 0" class="mt-2 p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-700">
                    With extra ${{ extraPrincipal }}/mo principal: pays off <strong>{{ earlyPayoffMonths }} months early</strong>, saves ~<strong>{{ formatCurrency(interestSaved) }}</strong> in interest.
                  </div>

                  <!-- PMI Disclosure -->
                  <div v-if="pmIActive && monthlyPMI > 0" class="mt-2 p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-700">
                    <p class="font-bold mb-0.5">PMI Auto-Cancel Disclosure</p>
                    PMI typically cancels at ~78% LTV. This calculator assumes PMI for the full term (v1). Your actual total may be lower once PMI cancels (typically years 8–12).
                  </div>
                </div>

                <!-- Mode 2 Investor Metrics -->
                <div v-if="currentMode === 2 && hasResult && monthlyRent > 0" class="border-t border-gray-100 p-5">
                  <p class="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3">Investor Metrics</p>
                  <div class="space-y-2">
                    <div class="flex justify-between text-sm py-1.5 border-b border-gray-50">
                      <span class="text-gray-500">Effective Monthly Rent
                        <span class="text-xs text-gray-400 ml-1">(after vacancy + OpEx)</span>
                      </span>
                      <span class="font-bold text-gray-900">{{ formatCurrency(effectiveRent) }}</span>
                    </div>
                    <div class="flex justify-between text-sm py-1.5 border-b border-gray-50">
                      <span class="text-gray-500">Annual Cash Flow</span>
                      <span class="font-bold" :class="netMonthlyCashFlow >= 0 ? 'text-emerald-600' : 'text-red-600'">
                        {{ netMonthlyCashFlow >= 0 ? '+' : '' }}{{ formatCurrency(annualCashFlow) }}
                      </span>
                    </div>
                    <div class="flex justify-between text-sm py-1.5 border-b border-gray-50">
                      <span class="text-gray-500">Year 1 Cash-on-Cash</span>
                      <span class="font-bold" :class="yearOneCoc >= 0 ? 'text-emerald-600' : 'text-red-600'">{{ yearOneCoc.toFixed(2) }}%</span>
                    </div>
                    <div class="flex justify-between text-sm py-1.5 border-b border-gray-50">
                      <span class="text-gray-500 flex items-center gap-1">
                        DSCR
                        <span class="text-xs text-gray-400">(P&I only)</span>
                      </span>
                      <span class="font-bold" :class="dscr >= 1.2 ? 'text-emerald-600' : dscr >= 1.0 ? 'text-amber-600' : 'text-red-600'">{{ dscr.toFixed(2) }}</span>
                    </div>
                    <div class="flex justify-between text-sm py-1.5">
                      <span class="text-gray-500 flex items-center gap-1">
                        Break-Even Rent (Gross Required Rent)
                        <span class="text-xs text-gray-400">gross before vac/OpEx</span>
                      </span>
                      <span class="font-bold text-gray-900">{{ formatCurrency(breakEvenRent) }}</span>
                    </div>
                  </div>
                </div>

              </div>

              <!-- MODE 3 COMPARE TABLE -->
              <div v-if="currentMode === 3 && propertyPrice > 0" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div class="p-5 bg-emerald-50 border-b border-emerald-100">
                  <p class="text-xs font-bold uppercase tracking-widest text-emerald-600">Loan Comparison</p>
                </div>
                <div class="p-4 overflow-x-auto">
                  <table class="w-full text-xs">
                    <thead>
                      <tr>
                        <td class="py-1.5 pr-2 text-gray-400 font-medium text-xs w-32">Metric</td>
                        <th v-for="(s, idx) in compareResults" :key="idx"
                          class="py-1.5 px-2 text-center font-bold rounded-t-lg"
                          :class="[
                            s.isWinner ? 'bg-emerald-100 text-emerald-800 border-2 border-b-0 border-emerald-400' : '',
                            ['text-blue-700', 'text-indigo-700', 'text-emerald-700'][idx]
                          ]">
                          Scenario {{ ['A','B','C'][idx] }}
                          <span v-if="s.isWinner" class="block text-xs font-bold text-emerald-700">★ Lowest Cost</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-t border-gray-100">
                        <td class="py-1.5 pr-2 text-gray-500">Loan Type</td>
                        <td v-for="(s, i) in compareResults" :key="i" class="py-1.5 px-2 text-center font-semibold" :class="s.isWinner ? 'bg-emerald-50' : ''">{{ s.loanType }}</td>
                      </tr>
                      <tr class="border-t border-gray-100">
                        <td class="py-1.5 pr-2 text-gray-500">Rate</td>
                        <td v-for="(s, i) in compareResults" :key="i" class="py-1.5 px-2 text-center font-semibold" :class="s.isWinner ? 'bg-emerald-50' : ''">{{ s.rate }}%</td>
                      </tr>
                      <tr class="border-t border-gray-100">
                        <td class="py-1.5 pr-2 text-gray-500">Term</td>
                        <td v-for="(s, i) in compareResults" :key="i" class="py-1.5 px-2 text-center font-semibold" :class="s.isWinner ? 'bg-emerald-50' : ''">{{ s.term }}yr</td>
                      </tr>
                      <tr class="border-t border-gray-100">
                        <td class="py-1.5 pr-2 text-gray-500">Down</td>
                        <td v-for="(s, i) in compareResults" :key="i" class="py-1.5 px-2 text-center font-semibold" :class="s.isWinner ? 'bg-emerald-50' : ''">{{ s.down }}%</td>
                      </tr>
                      <tr class="border-t border-gray-100">
                        <td class="py-1.5 pr-2 text-gray-500">Monthly P&I</td>
                        <td v-for="(s, i) in compareResults" :key="i" class="py-1.5 px-2 text-center font-bold" :class="s.isWinner ? 'bg-emerald-50 text-emerald-800' : ''">{{ formatCurrency(s.monthlyPI) }}</td>
                      </tr>
                      <tr class="border-t border-gray-100">
                        <td class="py-1.5 pr-2 text-gray-500">Monthly PITI</td>
                        <td v-for="(s, i) in compareResults" :key="i" class="py-1.5 px-2 text-center font-bold" :class="s.isWinner ? 'bg-emerald-50 text-emerald-800' : ''">{{ formatCurrency(s.monthlyPITI) }}</td>
                      </tr>
                      <tr class="border-t border-gray-100">
                        <td class="py-1.5 pr-2 text-gray-500">Total Interest</td>
                        <td v-for="(s, i) in compareResults" :key="i" class="py-1.5 px-2 text-center font-bold" :class="s.isWinner ? 'bg-emerald-50 text-emerald-800' : 'text-red-600'">{{ formatCurrency(s.totalInterest) }}</td>
                      </tr>
                      <tr class="border-t border-gray-100">
                        <td class="py-1.5 pr-2 text-gray-500">Cash to Close</td>
                        <td v-for="(s, i) in compareResults" :key="i" class="py-1.5 px-2 text-center font-semibold" :class="s.isWinner ? 'bg-emerald-50' : ''">{{ formatCurrency(s.cashToClose) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Mode 3 CTA Block -->
                <div class="p-4 border-t border-gray-100 bg-gray-50 space-y-2">
                  <p class="text-xs text-gray-500 mb-2">Loan comparison shows interest cost and payment differences. For full deal outcomes (cash flow, CoC, IRR, lifetime ROI) under each loan scenario:</p>
                  <NuxtLink :to="`/compare-real-estate-deals?source=mortgage-investment`"
                    class="block w-full text-center py-2.5 px-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition">
                    Compare full deal outcomes across strategies
                  </NuxtLink>
                  <NuxtLink :to="`/rental-property-roi-calculator?p=${propertyPrice}`"
                    class="block w-full text-center py-2.5 px-3 bg-white border border-indigo-200 text-indigo-700 rounded-xl text-xs font-bold hover:bg-indigo-50 transition">
                    Project 10-year wealth for winning loan
                  </NuxtLink>
                  <NuxtLink to="/dscr-calculator"
                    class="block w-full text-center py-2.5 px-3 bg-white border border-gray-200 text-gray-600 rounded-xl text-xs font-bold hover:bg-gray-50 transition">
                    Check DSCR for each loan
                  </NuxtLink>
                </div>
              </div>

              <!-- Share / PDF (Mode 1/2) -->
              <div v-if="hasResult && currentMode !== 3" class="grid grid-cols-2 gap-2 mt-2">
                <button @click="shareResult"
                  class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border"
                  :class="shareSuccess ? 'border-green-400 text-green-700 bg-green-50' : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'">
                  <svg v-if="!shareSuccess" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                  </svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
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

            </div><!-- /sticky -->
          </div><!-- /right col -->

        </div><!-- /grid -->

        <!-- ═══════════════════════════════════════════════
             SCENARIO PANEL
        ═══════════════════════════════════════════════ -->
        <div class="mt-6">
          <ScenarioPanel
            calculator="mortgage-investment"
            :has-result="hasResult"
            :result="currentScenarioResult"
            :trigger-save="triggerScenarioSave"
            @saved="onScenarioSaved"
          />
        </div>

        <!-- ═══ INFO BLOCKS ═══ -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style="background:#eff6ff;">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Full PITI Payment</p>
            <p class="text-xs text-gray-500">Principal, Interest, Taxes, Insurance — not just P&I like most calculators.</p>
          </div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style="background:#eef2ff;">
              <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Rental Cash Flow</p>
            <p class="text-xs text-gray-500">Mode 2 offsets PITI against effective rent for true investor cash flow.</p>
          </div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style="background:#f0fdf4;">
              <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">DSCR Analysis</p>
            <p class="text-xs text-gray-500">Lender underwriting metric — P&I only. Know if your deal pencils before applying.</p>
          </div>
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style="background:#fff7ed;">
              <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
              </svg>
            </div>
            <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Compare Loan Scenarios</p>
            <p class="text-xs text-gray-500">Side-by-side: Conv 30yr vs 15yr vs DSCR. Find the lowest lifetime cost.</p>
          </div>
        </div>

        <!-- ═══ VISUALIZATIONS ═══ -->
        <div v-if="hasResult && currentMode !== 3" class="mt-6 grid md:grid-cols-2 gap-6">

          <!-- Amortization Chart -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <p class="text-sm font-bold text-gray-700 mb-1">Amortization Schedule</p>
            <p class="text-xs text-gray-400 mb-3">Remaining balance vs. cumulative principal and interest paid</p>
            <div class="relative h-52">
              <svg viewBox="0 0 400 200" class="w-full h-full" preserveAspectRatio="none">
                <!-- Grid lines -->
                <line x1="0" y1="50" x2="400" y2="50" stroke="#f3f4f6" stroke-width="1"/>
                <line x1="0" y1="100" x2="400" y2="100" stroke="#f3f4f6" stroke-width="1"/>
                <line x1="0" y1="150" x2="400" y2="150" stroke="#f3f4f6" stroke-width="1"/>
                <!-- Remaining balance (blue, descending) -->
                <polyline v-if="amortChartPoints.balance.length > 1"
                  :points="amortChartPoints.balance.join(' ')"
                  fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <!-- Cumulative principal (indigo, ascending) -->
                <polyline v-if="amortChartPoints.principal.length > 1"
                  :points="amortChartPoints.principal.join(' ')"
                  fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,3" stroke-linecap="round"/>
                <!-- Cumulative interest (red, ascending) -->
                <polyline v-if="amortChartPoints.interest.length > 1"
                  :points="amortChartPoints.interest.join(' ')"
                  fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="flex flex-wrap gap-3 mt-2 text-xs">
              <span class="flex items-center gap-1.5"><span class="w-4 h-0.5 bg-blue-500 inline-block"></span>Remaining Balance</span>
              <span class="flex items-center gap-1.5"><span class="w-4 h-0.5 bg-indigo-500 inline-block border-dashed"></span>Cum. Principal</span>
              <span class="flex items-center gap-1.5"><span class="w-4 h-0.5 bg-red-500 inline-block"></span>Cum. Interest</span>
            </div>
          </div>

          <!-- Payment Breakdown Pie (SVG-based donut) -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <p class="text-sm font-bold text-gray-700 mb-1">PITI Breakdown</p>
            <p class="text-xs text-gray-400 mb-3">Where does your monthly payment go?</p>
            <div class="flex items-center gap-4">
              <div class="relative w-32 h-32 flex-shrink-0">
                <svg viewBox="0 0 100 100" class="w-full h-full -rotate-90">
                  <template v-for="(slice, idx) in pitiDonut" :key="idx">
                    <circle cx="50" cy="50" r="40"
                      fill="transparent"
                      :stroke="slice.color"
                      stroke-width="20"
                      :stroke-dasharray="`${slice.dash} ${251.3 - slice.dash}`"
                      :stroke-dashoffset="-slice.offset"/>
                  </template>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-xs font-bold text-gray-700">PITI</span>
                </div>
              </div>
              <div class="space-y-1.5 text-xs flex-1">
                <div class="flex items-center justify-between gap-2">
                  <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-sm inline-block" style="background:#3b82f6"></span>P&I</span>
                  <span class="font-bold">{{ formatCurrency(monthlyPI) }}</span>
                </div>
                <div class="flex items-center justify-between gap-2">
                  <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-sm inline-block" style="background:#f59e0b"></span>Tax</span>
                  <span class="font-bold">{{ formatCurrency(monthlyTax) }}</span>
                </div>
                <div class="flex items-center justify-between gap-2">
                  <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-sm inline-block" style="background:#10b981"></span>Insurance</span>
                  <span class="font-bold">{{ formatCurrency(monthlyInsurance) }}</span>
                </div>
                <div v-if="monthlyPMI > 0" class="flex items-center justify-between gap-2">
                  <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-sm inline-block" style="background:#f97316"></span>PMI</span>
                  <span class="font-bold">{{ formatCurrency(monthlyPMI) }}</span>
                </div>
                <div v-if="(hoaMonthly||0) > 0" class="flex items-center justify-between gap-2">
                  <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-sm inline-block" style="background:#8b5cf6"></span>HOA</span>
                  <span class="font-bold">{{ formatCurrency(hoaMonthly) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Mode 2 Cash Flow Bar Chart -->
          <div v-if="currentMode === 2 && monthlyRent > 0" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <p class="text-sm font-bold text-gray-700 mb-1">Rent vs PITI</p>
            <p class="text-xs text-gray-400 mb-3">Effective rent compared to monthly payment breakdown</p>
            <div class="space-y-2">
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span class="text-gray-500">Effective Rent</span>
                  <span class="font-bold text-emerald-700">{{ formatCurrency(effectiveRent) }}</span>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-5">
                  <div class="bg-emerald-500 h-5 rounded-full transition-all duration-500"
                    :style="`width: ${Math.min(100, (effectiveRent / (Math.max(monthlyPITI, effectiveRent) * 1.1)) * 100).toFixed(1)}%`"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-xs mb-1">
                  <span class="text-gray-500">Monthly PITI</span>
                  <span class="font-bold text-red-600">{{ formatCurrency(monthlyPITI) }}</span>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-5 flex overflow-hidden">
                  <div class="bg-red-400 h-5 transition-all duration-500"
                    :style="`width: ${Math.min(100, (monthlyPI / (Math.max(monthlyPITI, effectiveRent) * 1.1)) * 100).toFixed(1)}%`"></div>
                  <div class="bg-amber-400 h-5 transition-all duration-500"
                    :style="`width: ${Math.min(100 - (monthlyPI / (Math.max(monthlyPITI, effectiveRent) * 1.1)) * 100, ((monthlyTax + monthlyInsurance + monthlyPMI + (hoaMonthly||0)) / (Math.max(monthlyPITI, effectiveRent) * 1.1)) * 100).toFixed(1)}%`"></div>
                </div>
              </div>
            </div>
            <div class="flex gap-3 mt-2 text-xs">
              <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-sm bg-emerald-500 inline-block"></span>Eff. Rent</span>
              <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-sm bg-red-400 inline-block"></span>P&I</span>
              <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-sm bg-amber-400 inline-block"></span>Tax+Ins</span>
            </div>
          </div>

          <!-- Sensitivity Table: Rate x Down -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <p class="text-sm font-bold text-gray-700 mb-1">PITI Sensitivity: Rate × Down Payment</p>
            <p class="text-xs text-gray-400 mb-3">Monthly PITI at different rates and down payments</p>
            <div class="overflow-x-auto">
              <table class="w-full text-xs">
                <thead>
                  <tr>
                    <th class="text-left py-1 pr-2 text-gray-400 font-medium">Rate ↓ / Down →</th>
                    <th v-for="d in [15,20,25,30,40]" :key="d"
                      class="py-1 px-1 text-center font-bold"
                      :class="Math.round(downPayment) === d ? 'text-indigo-700' : 'text-gray-500'">{{ d }}%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="r in [6.5,7.0,7.5,8.0,8.5,9.0]" :key="r" class="border-t border-gray-50">
                    <td class="py-1.5 pr-2 font-bold"
                      :class="Math.abs((loanRate||7.5) - r) < 0.01 ? 'text-indigo-700' : 'text-gray-600'">{{ r }}%</td>
                    <td v-for="d in [15,20,25,30,40]" :key="d"
                      class="py-1.5 px-1 text-center"
                      :class="Math.abs((loanRate||7.5) - r) < 0.01 && Math.round(downPayment) === d ? 'bg-indigo-50 text-indigo-800 font-bold rounded' : 'text-gray-600'">
                      {{ formatCurrencyShort(calcSensitivityPITI(propertyPrice || 300000, d, r)) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div><!-- /visualizations -->

        <!-- Sensitivity Table 2: Term x Rate -->
        <div v-if="hasResult && currentMode !== 3" class="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <p class="text-sm font-bold text-gray-700 mb-1">Loan Term × Rate Comparison</p>
          <p class="text-xs text-gray-400 mb-3">Monthly P&I and total interest — shorter terms cost more monthly but save dramatically on interest</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs">
              <thead>
                <tr>
                  <th class="text-left py-1 pr-2 text-gray-400 font-medium">Term ↓ / Rate →</th>
                  <th v-for="r in [6.5,7.0,7.5,8.0,8.5]" :key="r"
                    class="py-1 px-2 text-center font-bold"
                    :class="Math.abs((loanRate||7.5) - r) < 0.01 ? 'text-indigo-700' : 'text-gray-500'">{{ r }}%</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="t in [15,20,25,30]" :key="t" class="border-t border-gray-50">
                  <td class="py-2 pr-2 font-bold" :class="loanTerm === t ? 'text-indigo-700' : 'text-gray-600'">{{ t }}yr</td>
                  <td v-for="r in [6.5,7.0,7.5,8.0,8.5]" :key="r"
                    class="py-2 px-2 text-center"
                    :class="loanTerm === t && Math.abs((loanRate||7.5) - r) < 0.01 ? 'bg-indigo-50 text-indigo-800 font-bold rounded' : 'text-gray-600'">
                    <div>{{ formatCurrencyShort(calcTermRatePI(loanAmount || propertyPrice * 0.75, t, r)) }}/mo</div>
                    <div class="text-gray-400">{{ formatCurrencyShort(calcTermRateTotalInt(loanAmount || propertyPrice * 0.75, t, r)) }} tot</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div><!-- /calculator -->

      <!-- ═══════════════════════════════════════════════
           SEO CONTENT SECTIONS
      ═══════════════════════════════════════════════ -->
      <div class="mt-12 space-y-0">

        <!-- 1. OVERVIEW -->
        <section id="overview" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">Investment Property Mortgage Calculator for Real Estate Investors</h2>
          <p class="text-sm text-gray-400 mb-4">Project PITI, rental cash flow, and DSCR in seconds</p>
          <div class="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>The Investment Property Mortgage Calculator helps real estate investors project the full monthly payment (PITI), estimate cash flow after rent, and compare loan scenarios — using 2026 investor mortgage rates, not primary residence rates. It functions as a DSCR mortgage calculator, rental property mortgage calculator, and investor mortgage payment calculator in one tool, covering the full financing analysis from PITI to break-even rent.</p>
            <p>The calculator offers three modes designed for different investor needs. Mode 1 (Standard, blue) calculates classic PITI across all loan types. Mode 2 (Investor with Rental Offset, indigo) is the key differentiator — it adds rental income, vacancy, and operating expense inputs to produce Net Monthly Cash Flow, DSCR, and Break-Even Rent (Gross Required Rent). Mode 3 (Compare Loan Scenarios, emerald) places up to three loans side-by-side to find the lowest lifetime cost. Primary residence mortgage calculators don't offer this investor-specific analysis.</p>
            <p>The tool integrates with RealCalc's full investment analysis workflow. Use it after the Rental Property Calculator confirms Year 1 operating numbers, and before the Rental Property ROI Calculator projects lifetime wealth. For cross-strategy comparison (Rental vs BRRRR vs Fix and Flip), the Compare Real Estate Deals tool uses mortgage terms modeled here. DSCR results feed directly into the DSCR Calculator for lender underwriting preview.</p>
            <p>This calculator is designed for investment properties, not primary residences. It uses 2026 investor mortgage rates (typically 7.5% Conventional, 8.25% DSCR) and investor down payment defaults (25%). For primary residence analysis, use a primary residence mortgage calculator with owner-occupant rates. Projections reflect your inputs, not guaranteed outcomes — rate, tax, and rent assumptions all materially affect results. Enter property price and loan terms above to see projected PITI, cash flow, and DSCR instantly.</p>
          </div>
        </section>

        <!-- 2. HOW TO USE -->
        <section id="how-to-use" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">How to Use the Investment Property Mortgage Calculator</h2>
          <p class="text-sm text-gray-400 mb-5">From property price to projected PITI and cash flow</p>
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <p class="font-bold text-gray-800 mb-1">Enter property price and down payment</p>
                <p class="text-sm text-gray-600 leading-relaxed">Property Price is the purchase price from the listing or appraisal — not the ARV or market value estimate. Down Payment defaults to 25%, which is the investor standard in 2026, not the 3–20% common in primary residence mortgages. A down payment below 20% triggers PMI on Conventional and Second Home loans only — DSCR, Portfolio, and Hard Money loans do not have PMI regardless of down payment. For DSCR loans, most programs require 20–25% down as a minimum.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <p class="font-bold text-gray-800 mb-1">Select loan type and interest rate</p>
                <p class="text-sm text-gray-600 leading-relaxed">The Loan Type selector automatically adjusts the default interest rate to 2026 market levels: Conventional 7.5%, DSCR 8.25%, Portfolio 8.5%, Hard Money 12.0%, Second Home 7.25%. Override with your actual lender quote for precision. Loan Term options are 15, 20, 25, or 30 years; 30-year is most common for rental holds. Hard Money defaults to a 1-year term (typical short-term bridge). This calculator is designed for investment properties, not primary residences — consumer owner-occupant rates are typically 0.75–1.5 percentage points lower than the investor defaults shown here.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <p class="font-bold text-gray-800 mb-1">Add property taxes, insurance, and HOA</p>
                <p class="text-sm text-gray-600 leading-relaxed">Property Tax can be entered as a percentage of price (default 1.2%, the US national average) or as an absolute dollar amount. High-tax states like Texas, New York, and New Jersey often require 2–3% or more. Insurance defaults to $1,800/year, which reflects the investor rate — higher than owner-occupant policies due to rental use classification. HOA fees are optional but affect PITI. These four components (P&I + Tax + Insurance ± PMI ± HOA) form the full PITI — the actual monthly mortgage obligation, which primary residence calculators often understate by showing only P&I.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0">4</div>
              <div>
                <p class="font-bold text-gray-800 mb-1">Switch to Investor Mode (Mode 2) for cash flow analysis</p>
                <p class="text-sm text-gray-600 leading-relaxed">Click the Mode 2 (Investor with Rental Offset) tab to unlock the rental income analysis. Enter Expected Monthly Rent — the gross rent a tenant would pay. Vacancy % defaults to 8%, the US average for stabilized rentals; some markets run 10–12%. OpEx % of Rent defaults to 30%, covering property management, maintenance, capital expenditures, and reserves. The calculator computes Effective Monthly Rent (Gross × (1 − Vacancy) × (1 − OpEx)) and subtracts PITI to produce Net Monthly Cash Flow. When Effective Rent exceeds PITI, the result shows "Net Monthly Cash Flow" (you pocket money); when PITI exceeds Effective Rent, it shows "Net Monthly Cost" (you pay out-of-pocket) — no minus sign on the primary display to avoid confusion.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0">5</div>
              <div>
                <p class="font-bold text-gray-800 mb-1">Interpret PITI, Cash Flow, DSCR, and Break-Even Rent (Gross Required Rent)</p>
                <p class="text-sm text-gray-600 leading-relaxed">In Mode 1, the primary output is Monthly PITI with a full P&I / Tax / Insurance breakdown. In Mode 2, the Status Badge colors your cash flow tier: green (Positive CF &gt;$200/mo), blue (Break-Even $0–$200), amber (Slightly Negative −$200–$0), or red (Significantly Negative &lt;−$200). DSCR is the lender underwriting metric — it uses P&I only as debt service, not full PITI. Break-Even Rent (Gross Required Rent) is the minimum gross rent before vacancy and expenses to cover PITI. A key insight: a property can have negative cash flow AND still meet lender DSCR ≥ 1.2. DSCR evaluates lender risk (P&I vs. rent); Cash Flow evaluates investor outcome (full PITI vs. effective rent). Both must be considered independently — a deal can be lender-approved and investor-negative simultaneously.</p>
              </div>
            </div>
          </div>

          <!-- Pro Tips -->
          <div class="mt-6 space-y-3">
            <p class="text-xs font-bold uppercase tracking-widest text-gray-400">Pro Tips</p>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="bg-blue-50 rounded-xl p-4">
                <p class="text-xs font-bold text-blue-800 mb-1">Rate Reality Check</p>
                <p class="text-xs text-blue-700 leading-relaxed">Investor rates are typically 0.75–1.5 percentage points higher than primary residence rates. If a lender quotes you a rate matching primary residence mortgage rates for an investment property, that's a red flag. Use this calculator with realistic investor rates (7.5% Conv, 8.25% DSCR in 2026) to set expectations before speaking with lenders.</p>
              </div>
              <div class="bg-indigo-50 rounded-xl p-4">
                <p class="text-xs font-bold text-indigo-800 mb-1">Break-Even Rent Is Higher Than You Think</p>
                <p class="text-xs text-indigo-700 leading-relaxed">Break-Even Rent (Gross Required Rent) is almost always 30–40% above PITI. A PITI of $2,023 needs gross rent of $3,141 for zero cash flow at 8% vacancy + 30% OpEx. Many new investors underestimate this gap and model the property as if rent covers costs directly — it never does at standard vacancy and expense assumptions.</p>
              </div>
              <div class="bg-amber-50 rounded-xl p-4">
                <p class="text-xs font-bold text-amber-800 mb-1">Don't Confuse DSCR with Cash Flow</p>
                <p class="text-xs text-amber-700 leading-relaxed">DSCR ≥ 1.25 means the lender will fund (P&I is covered by rent). But if property taxes and insurance are high, monthly Cash Flow can still be negative. A Texas property with DSCR 1.25 can show Cash Flow of −$150/mo because taxes add $400+/mo above what DSCR measures. Always check both metrics.</p>
              </div>
              <div class="bg-emerald-50 rounded-xl p-4">
                <p class="text-xs font-bold text-emerald-800 mb-1">Compare Loan Scenarios in Mode 3</p>
                <p class="text-xs text-emerald-700 leading-relaxed">Use Mode 3 to compare 30yr vs 15yr vs DSCR loans side-by-side. Shorter terms have dramatically lower total interest but higher monthly payments. A 15yr Conv at 7.0% ($2,021/mo) saves $201K vs a 30yr at 7.5% ($1,573/mo) — but the $450/mo higher payment may push cash flow deeply negative. The right choice depends on your cash flow needs and long-term strategy.</p>
              </div>
            </div>
          </div>

          <!-- Mode explanations -->
          <div class="mt-6">
            <h3 class="text-base font-extrabold mb-3" style="color:#1e3a5f;">Choosing the Right Mode</h3>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="border-2 border-blue-200 rounded-xl p-4">
                <p class="font-bold text-blue-700 text-sm mb-1">Mode 1 — Standard (blue)</p>
                <p class="text-xs text-gray-600 mb-1"><strong>Use when:</strong> You want a classic PITI breakdown for any loan type.</p>
                <p class="text-xs text-gray-600"><strong>Output:</strong> Monthly PITI + amortization chart + total interest over loan life.</p>
              </div>
              <div class="border-2 border-indigo-200 rounded-xl p-4">
                <p class="font-bold text-indigo-700 text-sm mb-1">Mode 2 — Investor Offset (indigo)</p>
                <p class="text-xs text-gray-600 mb-1"><strong>Use when:</strong> You want cash flow analysis — does rental income cover the mortgage?</p>
                <p class="text-xs text-gray-600"><strong>Output:</strong> Net Cash Flow + DSCR + CoC% + Break-Even Rent (Gross Required Rent) + Status Badge. Unique to investor tools.</p>
              </div>
              <div class="border-2 border-emerald-200 rounded-xl p-4">
                <p class="font-bold text-emerald-700 text-sm mb-1">Mode 3 — Compare (emerald)</p>
                <p class="text-xs text-gray-600 mb-1"><strong>Use when:</strong> Weighing 2–3 different loan options (30yr vs 15yr vs DSCR).</p>
                <p class="text-xs text-gray-600"><strong>Output:</strong> Side-by-side comparison with "Lowest Cost" winner highlighted. For full strategy comparison (Flip/BRRRR/Rental), use Compare Real Estate Deals.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 3. INPUTS & OUTPUTS -->
        <section id="inputs-outputs" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">Inputs and Outputs</h2>
          <p class="text-sm text-gray-400 mb-5">What you enter, what the calculator projects</p>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Inputs</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-xs border border-gray-100 rounded-xl overflow-hidden">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="py-2 px-3 text-left font-bold text-gray-600">Input</th>
                      <th class="py-2 px-3 text-left font-bold text-gray-600">Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-t border-gray-100"><td class="py-2 px-3 font-semibold">Property Price</td><td class="py-2 px-3 text-gray-500">Empty (required)</td></tr>
                    <tr class="border-t border-gray-100 bg-gray-50"><td class="py-2 px-3 font-semibold">Down Payment %</td><td class="py-2 px-3 text-gray-500">25% (investor standard)</td></tr>
                    <tr class="border-t border-gray-100"><td class="py-2 px-3 font-semibold">Loan Term</td><td class="py-2 px-3 text-gray-500">30 years</td></tr>
                    <tr class="border-t border-gray-100 bg-gray-50"><td class="py-2 px-3 font-semibold">Interest Rate</td><td class="py-2 px-3 text-gray-500">7.5% Conv / 8.25% DSCR</td></tr>
                    <tr class="border-t border-gray-100"><td class="py-2 px-3 font-semibold">Loan Type</td><td class="py-2 px-3 text-gray-500">Conventional</td></tr>
                    <tr class="border-t border-gray-100 bg-gray-50"><td class="py-2 px-3 font-semibold">Property Tax</td><td class="py-2 px-3 text-gray-500">1.2% of price</td></tr>
                    <tr class="border-t border-gray-100"><td class="py-2 px-3 font-semibold">Annual Insurance</td><td class="py-2 px-3 text-gray-500">$1,800</td></tr>
                    <tr class="border-t border-gray-100 bg-gray-50"><td class="py-2 px-3 font-semibold">HOA (monthly)</td><td class="py-2 px-3 text-gray-500">$0</td></tr>
                    <tr class="border-t border-gray-100"><td class="py-2 px-3 font-semibold">Monthly Rent (Mode 2)</td><td class="py-2 px-3 text-gray-500">Empty</td></tr>
                    <tr class="border-t border-gray-100 bg-gray-50"><td class="py-2 px-3 font-semibold">Vacancy % (Mode 2)</td><td class="py-2 px-3 text-gray-500">8%</td></tr>
                    <tr class="border-t border-gray-100"><td class="py-2 px-3 font-semibold">OpEx % of Rent (Mode 2)</td><td class="py-2 px-3 text-gray-500">30%</td></tr>
                    <tr class="border-t border-gray-100 bg-gray-50"><td class="py-2 px-3 font-semibold">Extra Principal</td><td class="py-2 px-3 text-gray-500">$0 (shortens payoff)</td></tr>
                    <tr class="border-t border-gray-100"><td class="py-2 px-3 font-semibold">Closing Costs %</td><td class="py-2 px-3 text-gray-500">2%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 class="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Outputs</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-xs border border-gray-100 rounded-xl overflow-hidden">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="py-2 px-3 text-left font-bold text-gray-600">Output</th>
                      <th class="py-2 px-3 text-left font-bold text-gray-600">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-t border-gray-100"><td class="py-2 px-3 font-semibold">Monthly PITI</td><td class="py-2 px-3 text-gray-500">Full monthly obligation</td></tr>
                    <tr class="border-t border-gray-100 bg-gray-50"><td class="py-2 px-3 font-semibold">Net Monthly Cash Flow / Cost</td><td class="py-2 px-3 text-gray-500">Investor out-of-pocket (Mode 2)</td></tr>
                    <tr class="border-t border-gray-100"><td class="py-2 px-3 font-semibold">Loan Amount</td><td class="py-2 px-3 text-gray-500">Mortgage principal</td></tr>
                    <tr class="border-t border-gray-100 bg-gray-50"><td class="py-2 px-3 font-semibold">Total Cash to Close</td><td class="py-2 px-3 text-gray-500">Capital required at purchase</td></tr>
                    <tr class="border-t border-gray-100"><td class="py-2 px-3 font-semibold">Total Interest</td><td class="py-2 px-3 text-gray-500">Lifetime cost of borrowing</td></tr>
                    <tr class="border-t border-gray-100 bg-gray-50"><td class="py-2 px-3 font-semibold">Effective APR</td><td class="py-2 px-3 text-gray-500">True rate including points</td></tr>
                    <tr class="border-t border-gray-100"><td class="py-2 px-3 font-semibold">Effective Monthly Rent</td><td class="py-2 px-3 text-gray-500">Post-vacancy, post-OpEx rent</td></tr>
                    <tr class="border-t border-gray-100 bg-gray-50"><td class="py-2 px-3 font-semibold">Annual Cash Flow</td><td class="py-2 px-3 text-gray-500">Net monthly × 12</td></tr>
                    <tr class="border-t border-gray-100"><td class="py-2 px-3 font-semibold">Year 1 Cash-on-Cash %</td><td class="py-2 px-3 text-gray-500">Annual CF / cash invested</td></tr>
                    <tr class="border-t border-gray-100 bg-gray-50"><td class="py-2 px-3 font-semibold">DSCR (P&I only)</td><td class="py-2 px-3 text-gray-500">Lender underwriting metric. ≥1.2 typical min. NOT the same as Cash Flow — a property can meet DSCR AND have negative Cash Flow simultaneously.</td></tr>
                    <tr class="border-t border-gray-100"><td class="py-2 px-3 font-semibold">Break-Even Rent (Gross Required Rent)</td><td class="py-2 px-3 text-gray-500">GROSS rent BEFORE vacancy and expenses. Typically 30–40% higher than PITI.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- 4. FORMULA -->
        <section id="formula" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">How the Investment Property Mortgage Calculator Works</h2>
          <p class="text-sm text-gray-400 mb-5">Amortization + PITI breakdown — with a worked Austin 2026 example</p>

          <div class="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-5 text-sm text-blue-800 leading-relaxed">
            The Investment Property Mortgage Calculator applies the standard mortgage amortization formula to project monthly Principal and Interest, then adds property taxes, insurance, PMI (if applicable), and HOA fees to calculate the full PITI payment. In Mode 2 (Investor with Rental Offset), it also subtracts effective rental income — gross rent minus vacancy and operating expenses — to project Net Monthly Cash Flow. Uses 2026 investor rates, not primary residence rates.
          </div>

          <div class="space-y-4">
            <div class="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Standard Amortization Formula</p>
              <pre class="text-xs text-gray-700 font-mono leading-relaxed whitespace-pre-wrap">Monthly P&I = Loan × [r(1+r)^n] / [(1+r)^n − 1]
where r = Annual Rate / 12 / 100,  n = Term × 12
Edge case: if r = 0, Monthly P&I = Loan / n</pre>
            </div>

            <div class="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">PITI Components</p>
              <pre class="text-xs text-gray-700 font-mono leading-relaxed whitespace-pre-wrap">Monthly PITI = P&I + Tax/12 + Insurance/12 + PMI + HOA
PMI: only if Down &lt; 20% AND Loan Type = Conventional or Second Home
     PMI = Loan × PMI Rate / 12
     DSCR / Portfolio / Hard Money: never have PMI</pre>
            </div>

            <div class="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mode 2 Cash Flow Formulas</p>
              <pre class="text-xs text-gray-700 font-mono leading-relaxed whitespace-pre-wrap">Effective Rent = Gross Rent × (1 − Vacancy%) × (1 − OpEx%)
Net Monthly Cash Flow = Effective Rent − PITI
  (positive → "Cash Flow", negative → "Net Monthly Cost")
Annual Cash Flow = Net Monthly × 12
Year 1 CoC% = Annual Cash Flow / Total Cash to Close × 100

DSCR = Annual NOI / Annual Debt Service
  Annual NOI = Gross Rent × 12 × (1−Vacancy%) × (1−OpEx%)
  Annual Debt Service = Monthly P&I × 12  ← P&I ONLY, not full PITI
  (taxes/insurance are operating expenses, not debt service)

Break-Even Rent (Gross Required Rent) = PITI / [(1−Vacancy%) × (1−OpEx%)]</pre>
            </div>
          </div>

          <!-- Worked Example: Austin 2026 -->
          <div class="mt-5 border-2 border-dashed border-gray-200 rounded-xl p-5">
            <p class="text-sm font-extrabold mb-3" style="color:#1e3a5f;">Worked Example: Austin, TX — 2026 Conventional Rental</p>
            <div class="grid md:grid-cols-2 gap-4 text-xs text-gray-700">
              <div>
                <p class="font-bold text-gray-600 mb-2">Inputs</p>
                <div class="space-y-1">
                  <div class="flex justify-between"><span>Property Price</span><span class="font-bold">$300,000</span></div>
                  <div class="flex justify-between"><span>Down Payment</span><span class="font-bold">25% ($75,000)</span></div>
                  <div class="flex justify-between"><span>Loan Type</span><span class="font-bold">Conventional</span></div>
                  <div class="flex justify-between"><span>Interest Rate</span><span class="font-bold">7.5%</span></div>
                  <div class="flex justify-between"><span>Loan Term</span><span class="font-bold">30 years</span></div>
                  <div class="flex justify-between"><span>Property Tax</span><span class="font-bold">1.2% ($300/mo)</span></div>
                  <div class="flex justify-between"><span>Insurance</span><span class="font-bold">$150/mo</span></div>
                  <div class="flex justify-between"><span>Monthly Rent (Mode 2)</span><span class="font-bold">$2,500</span></div>
                  <div class="flex justify-between"><span>Vacancy</span><span class="font-bold">8%</span></div>
                  <div class="flex justify-between"><span>OpEx</span><span class="font-bold">30%</span></div>
                </div>
              </div>
              <div>
                <p class="font-bold text-gray-600 mb-2">Results</p>
                <div class="space-y-1">
                  <div class="flex justify-between"><span>Loan Amount</span><span class="font-bold">$225,000</span></div>
                  <div class="flex justify-between"><span>Monthly P&I</span><span class="font-bold">$1,573</span></div>
                  <div class="flex justify-between"><span>Monthly PITI</span><span class="font-bold text-blue-700">$2,023</span></div>
                  <div class="flex justify-between"><span>PMI</span><span class="font-bold text-emerald-600">$0 (25% down)</span></div>
                  <div class="flex justify-between"><span>Total Interest (30yr)</span><span class="font-bold">~$340,300</span></div>
                  <div class="flex justify-between border-t border-gray-200 pt-1 mt-1"><span>Effective Rent</span><span class="font-bold">$1,610/mo</span></div>
                  <div class="flex justify-between"><span>Net Monthly Cost</span><span class="font-bold text-red-600">$413/mo</span></div>
                  <div class="flex justify-between"><span>Status</span><span class="font-bold text-red-600">RED — Sig. Negative</span></div>
                  <div class="flex justify-between"><span>DSCR</span><span class="font-bold text-amber-600">~1.02</span></div>
                  <div class="flex justify-between"><span>Break-Even Rent (Gross Required Rent)</span><span class="font-bold">$3,141/mo</span></div>
                </div>
              </div>
            </div>
            <div class="mt-4 p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-800">
              <p class="font-bold mb-1">Key Insight from This Example</p>
              <p>This deal produces negative Cash Flow (−$413/mo) but a DSCR of 1.02 — barely below the typical lender minimum of ~1.20. Both metrics tell different stories: the lender is borderline (DSCR too low), and the investor is losing $413/month (negative Cash Flow). Both must be considered. The market rent of $2,500 is far below the Break-Even Rent (Gross Required Rent) of $3,141 — that gap explains the negative cash flow in full.</p>
            </div>
            <div class="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800">
              <p class="font-bold mb-1">Alternative: Sunbelt Positive Cash Flow (RIS Test 5)</p>
              <p>$200K, 25% down, 7.5%, Rent $2,200/mo, 6% vacancy, 25% OpEx → PITI ~$1,349, Effective Rent $1,551, Net CF +$202/mo (GREEN Positive). Lower-price markets with strong rent-to-price ratios can produce cash flow at investor rates — the key is rent-to-price ratio, not absolute rent level.</p>
            </div>
          </div>
        </section>

        <!-- 5. WHAT IS -->
        <section id="what-is" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">What Is an Investment Property Mortgage?</h2>
          <p class="text-sm text-gray-400 mb-5">How investor financing differs from primary residence mortgages</p>
          <div class="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>An investment property mortgage is a loan to finance a non-owner-occupied property — typically a rental home, small multifamily, or property held for appreciation. The financing structure differs substantially from primary residence mortgages. Interest rates run 0.75–1.5 percentage points higher due to investor risk premium; lenders know investment properties have higher default rates during economic downturns when investors choose to protect their primary residence first. Down payment requirements are typically 20–25% (versus 3–20% for primary residence), PMI is rarely required because 20%+ down is standard, and underwriting scrutinizes rental income capacity or requires higher cash reserves. Mortgage interest is deductible against rental income rather than subject to the SALT cap that limits primary residence deductions.</p>
            <p>Two critical metrics distinguish investor mortgage analysis from consumer mortgage analysis: DSCR and Cash Flow. DSCR (Debt Service Coverage Ratio) is the lender's view — it asks "Can the property's rental income service the P&I debt?" using Annual NOI divided by Annual Debt Service (P&I only — taxes and insurance are operating expenses, not debt). A DSCR of 1.20 means rental income covers P&I 1.20 times; most lenders want ≥1.20–1.25. Cash Flow is the investor's view — "Does this deal put money in my pocket each month after ALL costs?" including taxes, insurance, HOA, and operating expenses. A property can have DSCR ≥ 1.25 (loan approvable) AND negative Cash Flow simultaneously — this is common in high-tax states like Texas, Illinois, and New Jersey, where property taxes push PITI well above what the P&I-only DSCR measures. Both truths coexist: DSCR for financeability, Cash Flow for investor outcome.</p>
            <p>In 2026, investor rates average 7.5% Conventional, 8.25% DSCR, and 12% for Hard Money — substantially above the 5% era of pre-2022. This rate environment has materially compressed cash flow margins. Properties that cash-flowed positive at 5% rates now often show negative Cash Flow at 7.5%, even with the same rent. Many 2026 investors deliberately accept negative or break-even Cash Flow, banking on appreciation and principal paydown for long-term returns — a shift that makes the BRRRR and Rental Property ROI Calculator analysis essential alongside this financing calculator. This calculator uses 2026 defaults to give accurate current-market projections, not outdated pre-2022 assumptions.</p>
          </div>
        </section>

        <!-- 6. RESULT MEANING -->
        <section id="result-meaning" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">What Your PITI, Cash Flow, and DSCR Mean</h2>
          <p class="text-sm text-gray-400 mb-5">Interpreting the primary and secondary metrics</p>

          <p class="text-sm text-gray-600 leading-relaxed mb-6">PITI is the full monthly payment obligation — what you owe the lender, tax authority, and insurance company every month regardless of whether the property is rented. Cash Flow is the investor's net outcome after rent offsets PITI. DSCR is the lender's underwriting lens. All three together tell the complete financing story for an investment property.</p>

          <div class="space-y-6">
            <!-- PITI breakdown -->
            <div class="border border-gray-200 rounded-xl p-5">
              <h3 class="text-base font-extrabold mb-3" style="color:#1e3a5f;">PITI — The Full Monthly Payment</h3>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex gap-2"><span class="text-blue-500 font-bold flex-shrink-0">P</span><span><strong>Principal:</strong> Amount applied to reducing the loan balance. Small in early years of 30yr loans.</span></li>
                <li class="flex gap-2"><span class="text-blue-500 font-bold flex-shrink-0">I</span><span><strong>Interest:</strong> Amount paid to the lender for borrowing. Dominates early payment years.</span></li>
                <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">T</span><span><strong>Taxes:</strong> Monthly property tax (annual tax ÷ 12). US average 1.2%; TX/NJ/IL often 2–3%.</span></li>
                <li class="flex gap-2"><span class="text-emerald-500 font-bold flex-shrink-0">I</span><span><strong>Insurance:</strong> Monthly homeowner insurance (annual ÷ 12). Investor policies cost more than owner-occupant policies.</span></li>
                <li class="flex gap-2"><span class="text-orange-500 font-bold flex-shrink-0">+</span><span><strong>PMI (if applicable):</strong> Only for Conventional/Second Home with &lt;20% down. Auto-cancels at ~78% LTV (not modeled in v1).</span></li>
                <li class="flex gap-2"><span class="text-purple-500 font-bold flex-shrink-0">+</span><span><strong>HOA:</strong> Monthly condo or PUD association fee. Adds directly to PITI.</span></li>
              </ul>
              <p class="text-xs text-gray-500 mt-3">Total PITI is what you pay every month. Primary residence calculators often show only P&I, which understates actual monthly cost by 20–40%.</p>
            </div>

            <!-- Cash Flow tiers -->
            <div class="border border-gray-200 rounded-xl p-5">
              <h3 class="text-base font-extrabold mb-3" style="color:#1e3a5f;">Net Monthly Cash Flow Tiers (Mode 2)</h3>
              <div class="space-y-2">
                <div class="flex items-center gap-3 p-2.5 bg-emerald-50 rounded-xl">
                  <span class="w-16 text-xs font-bold text-emerald-700 text-center">&gt;$200/mo</span>
                  <span class="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0"></span>
                  <span class="text-xs text-emerald-800"><strong>Positive Cash Flow</strong> — Deal pays you every month after all costs. Target in most markets.</span>
                </div>
                <div class="flex items-center gap-3 p-2.5 bg-blue-50 rounded-xl">
                  <span class="w-16 text-xs font-bold text-blue-700 text-center">$0–$200</span>
                  <span class="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0"></span>
                  <span class="text-xs text-blue-800"><strong>Break-Even</strong> — Deal is self-sustaining but thin. Small rent decline pushes into negative territory.</span>
                </div>
                <div class="flex items-center gap-3 p-2.5 bg-amber-50 rounded-xl">
                  <span class="w-16 text-xs font-bold text-amber-700 text-center">−$200–$0</span>
                  <span class="w-3 h-3 rounded-full bg-amber-500 flex-shrink-0"></span>
                  <span class="text-xs text-amber-800"><strong>Slightly Negative</strong> — Costs you modestly. May be acceptable for appreciation plays in appreciation-dominant markets.</span>
                </div>
                <div class="flex items-center gap-3 p-2.5 bg-red-50 rounded-xl">
                  <span class="w-16 text-xs font-bold text-red-700 text-center">&lt;−$200</span>
                  <span class="w-3 h-3 rounded-full bg-red-500 flex-shrink-0"></span>
                  <span class="text-xs text-red-800"><strong>Significantly Negative</strong> — Requires substantial monthly investment. Verify rent assumptions or consider alternative financing structure.</span>
                </div>
              </div>
            </div>

            <!-- DSCR tiers -->
            <div class="border border-gray-200 rounded-xl p-5">
              <h3 class="text-base font-extrabold mb-3" style="color:#1e3a5f;">DSCR Tiers (Lender Underwriting)</h3>
              <div class="space-y-2">
                <div class="flex items-center gap-3 p-2.5 bg-emerald-50 rounded-xl">
                  <span class="w-20 text-xs font-bold text-emerald-700">≥ 1.25</span>
                  <span class="text-xs text-emerald-800">Conventional investor programs — lender-friendly. Most standard programs approve.</span>
                </div>
                <div class="flex items-center gap-3 p-2.5 bg-blue-50 rounded-xl">
                  <span class="w-20 text-xs font-bold text-blue-700">1.15–1.25</span>
                  <span class="text-xs text-blue-800">Most Portfolio and DSCR loan programs approve. May need strong borrower profile.</span>
                </div>
                <div class="flex items-center gap-3 p-2.5 bg-amber-50 rounded-xl">
                  <span class="w-20 text-xs font-bold text-amber-700">1.00–1.15</span>
                  <span class="text-xs text-amber-800">Marginal — may require higher down payment, stronger investor profile, or compensating factors.</span>
                </div>
                <div class="flex items-center gap-3 p-2.5 bg-red-50 rounded-xl">
                  <span class="w-20 text-xs font-bold text-red-700">&lt; 1.00</span>
                  <span class="text-xs text-red-800">Below typical thresholds — rental income doesn't fully cover P&I. Most lenders will decline without significant compensating factors.</span>
                </div>
              </div>
            </div>

            <!-- KEY INSIGHT -->
            <div class="border-2 border-indigo-300 rounded-xl p-5 bg-indigo-50">
              <h3 class="text-base font-extrabold mb-3 text-indigo-900">DSCR vs Cash Flow — Both Matter</h3>
              <ul class="space-y-2 text-sm text-indigo-800">
                <li><strong>DSCR uses P&I only (lender metric)</strong> — Annual NOI ÷ (Monthly P&I × 12). Taxes, insurance, and HOA are NOT in debt service. Answers: "Will lender fund this?"</li>
                <li><strong>Cash Flow uses full PITI (investor metric)</strong> — Effective Rent minus full PITI including taxes, insurance, PMI, and HOA. Answers: "Will this deal pay me each month?"</li>
                <li><strong>A deal can pass DSCR and still be cash-flow negative</strong> — common in high-tax states (TX, IL, NJ) and high-insurance markets (FL) where taxes/insurance add hundreds per month above what DSCR measures.</li>
              </ul>
              <div class="mt-3 p-3 bg-white rounded-xl border border-indigo-200 text-xs text-indigo-700">
                <p class="font-bold mb-1">Example: DSCR 1.25, Cash Flow −$150/mo</p>
                <p>Property has DSCR of 1.25 — lender will approve (P&I comfortably covered by rent). But property taxes of $450/mo push PITI $300/mo above P&I alone, creating negative investor Cash Flow of −$150/mo. Deal is lender-approvable AND investor-negative simultaneously. Both truths must be considered — DSCR for approvability, Cash Flow for outcome.</p>
              </div>
            </div>

            <!-- Break-Even Rent -->
            <div class="border border-gray-200 rounded-xl p-5">
              <h3 class="text-base font-extrabold mb-3" style="color:#1e3a5f;">Break-Even Rent (Gross Required Rent) — What It Tells You</h3>
              <p class="text-sm text-gray-700 leading-relaxed">Break-Even Rent (Gross Required Rent) is the minimum gross rent a tenant must pay — before vacancy and operating expenses are deducted — for the deal to have zero cash flow. It is always higher than PITI, typically 30–40% higher at standard 8% vacancy + 30% OpEx assumptions. Example: PITI $2,185 → Break-Even Rent (Gross Required Rent) $3,394 (55% higher) — because that gross rent, after 8% vacancy and 30% expenses, exactly covers PITI. If your actual market rent falls below the Break-Even Rent (Gross Required Rent), the deal will be cash-flow negative at standard assumptions. Use this as your market rent benchmark before committing to a deal.</p>
              <div class="mt-3 p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-700">
                <strong>Formula:</strong> Break-Even Rent (Gross Required Rent) = PITI ÷ [(1 − Vacancy%) × (1 − OpEx%)]
                <br/>Example: $2,185 ÷ (0.92 × 0.70) = $3,394
              </div>
            </div>

            <!-- 2026 Context -->
            <div class="border border-gray-200 rounded-xl p-5">
              <h3 class="text-base font-extrabold mb-3" style="color:#1e3a5f;">2026 Investor Mortgage Market Context</h3>
              <div class="space-y-2 text-sm text-gray-700 leading-relaxed">
                <p>Investor mortgage rates have risen 250–300 basis points from the pre-2022 era. Properties that cash-flowed at 5% rates now typically require aggressive acquisition pricing — 75%+ of ARV — to achieve positive cash flow at 7.5%. DSCR loans have become the dominant vehicle for multi-property investors and self-employed buyers, trading a 1% rate premium for no W-2 or tax return requirements. Hard money rates of 12–14% are viable only for short-term flips (6–12 months) — never for long-term rental holds.</p>
                <p>Use this calculator at current 2026 rates to avoid the "last decade cash flow" trap that misled many new investors who modeled deals at 5% rates, only to find financing costs materially higher at close. The conservative scenario (rate +1pp, vacancy +5%, OpEx +10%) is your stress test before committing capital.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 7. BENCHMARKS -->
        <section id="benchmarks" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">Investment Property Mortgage Benchmarks for 2026</h2>
          <p class="text-sm text-gray-400 mb-5">Rate ranges, typical PITI, and lender thresholds</p>

          <p class="text-sm text-gray-600 mb-5">The figures below reflect illustrative patterns for typical investor mortgage scenarios in 2026 US markets — not measured statistical datasets or rate predictions for any specific deal. Individual results depend on credit score, property type, LTV, reserves, and lender relationship.</p>

          <div class="grid md:grid-cols-3 gap-5">
            <div>
              <h3 class="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">2026 Investor Rates by Loan Type</h3>
              <div class="space-y-2">
                <div class="flex justify-between text-sm py-1.5 border-b border-gray-100">
                  <span class="text-gray-600">Conventional (Fannie/Freddie)</span>
                  <span class="font-bold text-gray-900">7.25–7.75%</span>
                </div>
                <div class="flex justify-between text-sm py-1.5 border-b border-gray-100">
                  <span class="text-gray-600">Second Home</span>
                  <span class="font-bold text-gray-900">7.00–7.50%</span>
                </div>
                <div class="flex justify-between text-sm py-1.5 border-b border-gray-100">
                  <span class="text-gray-600">DSCR Loan</span>
                  <span class="font-bold text-gray-900">8.00–8.75%</span>
                </div>
                <div class="flex justify-between text-sm py-1.5 border-b border-gray-100">
                  <span class="text-gray-600">Portfolio Loan</span>
                  <span class="font-bold text-gray-900">7.50–9.00%</span>
                </div>
                <div class="flex justify-between text-sm py-1.5">
                  <span class="text-gray-600">Hard Money</span>
                  <span class="font-bold text-gray-900">11–14% + 2–4 pts</span>
                </div>
              </div>
              <p class="text-xs text-gray-400 mt-2">Rates shift weekly. Use lender quotes for actual underwriting.</p>
            </div>

            <div>
              <h3 class="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Typical Monthly PITI (Austin, TX 2026)</h3>
              <div class="space-y-2">
                <div class="flex justify-between text-sm py-1.5 border-b border-gray-100">
                  <span class="text-gray-600">$200K, 25% down, 7.5%</span>
                  <span class="font-bold text-gray-900">~$1,350–1,450</span>
                </div>
                <div class="flex justify-between text-sm py-1.5 border-b border-gray-100">
                  <span class="text-gray-600">$300K, 25% down, 7.5%</span>
                  <span class="font-bold text-gray-900">~$2,000–2,100</span>
                </div>
                <div class="flex justify-between text-sm py-1.5 border-b border-gray-100">
                  <span class="text-gray-600">$400K, 25% down, 7.5%</span>
                  <span class="font-bold text-gray-900">~$2,700–2,800</span>
                </div>
                <div class="flex justify-between text-sm py-1.5">
                  <span class="text-gray-600">$500K, 25% down, 7.5%</span>
                  <span class="font-bold text-gray-900">~$3,350–3,500</span>
                </div>
              </div>
              <p class="text-xs text-gray-400 mt-2">TX has higher taxes (2–3%). FL: higher insurance. NY: higher everything.</p>
            </div>

            <div>
              <h3 class="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">DSCR Thresholds by Program</h3>
              <div class="space-y-2">
                <div class="flex justify-between text-sm py-1.5 border-b border-gray-100">
                  <span class="text-gray-600">Conventional Investor</span>
                  <span class="font-bold text-gray-900">≥ 1.25</span>
                </div>
                <div class="flex justify-between text-sm py-1.5 border-b border-gray-100">
                  <span class="text-gray-600">DSCR Loan Programs</span>
                  <span class="font-bold text-gray-900">≥ 1.15 (some 1.00)</span>
                </div>
                <div class="flex justify-between text-sm py-1.5 border-b border-gray-100">
                  <span class="text-gray-600">Portfolio Lenders</span>
                  <span class="font-bold text-gray-900">1.10–1.20</span>
                </div>
                <div class="flex justify-between text-sm py-1.5">
                  <span class="text-gray-600">Commercial 5+ units</span>
                  <span class="font-bold text-gray-900">1.25–1.35</span>
                </div>
              </div>
              <p class="text-xs text-gray-400 mt-2">Thresholds vary by lender, property type, and borrower profile.</p>
            </div>
          </div>
        </section>

        <!-- 8. STRATEGY -->
        <section id="strategy" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">How to Use This Calculator by Investor Type</h2>
          <p class="text-sm text-gray-400 mb-5">Matching the mortgage analysis to your strategy</p>
          <div class="grid md:grid-cols-2 gap-5">
            <div class="border border-gray-200 rounded-xl p-5">
              <p class="font-extrabold text-sm mb-2" style="color:#1e3a5f;">First-Time Investor (1st rental property)</p>
              <p class="text-sm text-gray-600 leading-relaxed">Start with Mode 1 to understand full PITI at 2026 investor rates before making an offer — many first-timers underestimate PITI by 30–40% by using P&I only. Then switch to Mode 2 to see cash flow reality at current market conditions. Target DSCR ≥ 1.25 for conventional lender approval; target positive Cash Flow for a sustainable hold. Validate your assumptions in the Rental Property Calculator before committing capital — deals that fail Year 1 cash flow rarely recover through appreciation alone.</p>
            </div>
            <div class="border border-gray-200 rounded-xl p-5">
              <p class="font-extrabold text-sm mb-2" style="color:#1e3a5f;">Portfolio Builder (5+ properties)</p>
              <p class="text-sm text-gray-600 leading-relaxed">Select DSCR loan type for portfolio scaling — no W-2 or tax return scrutiny, faster closing. Use Mode 3 to compare DSCR vs Portfolio loan options side-by-side. With multiple properties, negative cash flow compounds across the portfolio, so focus on cash-flowing deals from the start. Stress-test each deal with the Conservative scenario (rate +1pp, vacancy +5%, OpEx +10%) before committing — what cash-flows at base may not at margin stress.</p>
            </div>
            <div class="border border-gray-200 rounded-xl p-5">
              <p class="font-extrabold text-sm mb-2" style="color:#1e3a5f;">Fix-and-Flip Investor</p>
              <p class="text-sm text-gray-600 leading-relaxed">Select Hard Money loan type with the default 1-year term. Mode 2 (rental cash flow) doesn't apply to flips — use Mode 1 to see monthly payment and total interest carry during the flip period. Hard Money at 12–14% + 2–4 points generates significant carrying cost that eats into flip margins. For full flip deal analysis (purchase + rehab + hold + sale profit), use the Fix and Flip Calculator — this calculator handles the financing carry cost component only.</p>
            </div>
            <div class="border border-gray-200 rounded-xl p-5">
              <p class="font-extrabold text-sm mb-2" style="color:#1e3a5f;">Wholesaler</p>
              <p class="text-sm text-gray-600 leading-relaxed">Use this calculator to verify cash flow for end-buyers before marketing a deal. If Mode 2 shows DSCR below 1.15 and Cash Flow deeply negative at typical investor rates, most buy-and-hold investors won't close. Use Mode 3 to show end-buyers how different loan structures affect monthly payment — demonstrating thorough analysis increases assignment conversion. Present Break-Even Rent (Gross Required Rent) as the rent-validation number buyers need to verify in the local market.</p>
            </div>
            <div class="border border-gray-200 rounded-xl p-5">
              <p class="font-extrabold text-sm mb-2" style="color:#1e3a5f;">Retirement Income Investor</p>
              <p class="text-sm text-gray-600 leading-relaxed">Favor lower-leverage structures — higher down payment reduces PITI and increases monthly Cash Flow, producing more reliable income. Use Mode 2 with the Conservative scenario for realistic retirement income projections. Cross-link to the Rental Property ROI Calculator for long-hold wealth projection across 15–20 year horizons where compounding appreciation and principal paydown significantly augment cash income. Consider 15-year terms in Mode 3 — higher monthly payment but full equity in 15 years, dramatically reducing the income-producing asset's carrying cost in retirement.</p>
            </div>
          </div>
        </section>

        <!-- 9. APPLICATIONS -->
        <section id="applications" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">Common Use Cases</h2>
          <p class="text-sm text-gray-400 mb-5">When this calculator is the right tool</p>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="bg-gray-50 rounded-xl p-4">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Pre-purchase feasibility check</p>
              <p class="text-xs text-gray-600 leading-relaxed">Before making an offer, project PITI + Cash Flow at realistic 2026 investor rates to confirm the deal pencils at your financing terms. Many deals that look viable at P&I don't survive full PITI analysis.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Comparing loan programs</p>
              <p class="text-xs text-gray-600 leading-relaxed">Use Mode 3 to compare Conventional vs DSCR vs Portfolio loans on monthly payment, total interest, and cash to close. The right loan depends on your income documentation situation and long-term strategy, not just the monthly payment.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Refinance decision analysis</p>
              <p class="text-xs text-gray-600 leading-relaxed">Compare current loan (Scenario A in Mode 3) against refi options (Scenarios B and C) to find break-even timing and lifetime interest savings. Critical for BRRRR cash-out refi decisions.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">DSCR loan underwriting preview</p>
              <p class="text-xs text-gray-600 leading-relaxed">Select DSCR loan type, enter rental income in Mode 2, check if property meets typical 1.15–1.25 DSCR threshold. Avoids wasted applications on deals the lender won't approve at current rents.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Rate sensitivity stress test</p>
              <p class="text-xs text-gray-600 leading-relaxed">Run Mode 2 with rate +1% (or use the Advanced options) to confirm the deal still cash-flows if rates rise before closing or at refi time. The sensitivity table shows PITI across rate/down combinations automatically.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Investor client presentations</p>
              <p class="text-xs text-gray-600 leading-relaxed">Real estate agents and investment advisors use this calculator to show clients the difference between primary residence mortgage expectations and investor reality. Export PDF for polished meeting presentations showing PITI, Cash Flow, and DSCR side-by-side.</p>
            </div>
          </div>
        </section>

        <!-- 10. INDUSTRY STANDARDS -->
        <section id="industry-standards" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">How This Calculator Aligns with Industry Conventions</h2>
          <p class="text-sm text-gray-400 mb-5">Investor vs primary residence conventions, loan types, peer tools</p>

          <div class="space-y-6 text-sm text-gray-700 leading-relaxed">
            <div>
              <h3 class="text-base font-bold mb-2" style="color:#1e3a5f;">Investor vs Consumer Mortgage Conventions</h3>
              <p>Investor mortgages carry a 0.75–1.5% rate premium over primary residence mortgages — reflecting the higher default risk lenders assign to non-owner-occupied properties. Down payment minimums are 20–25% (versus 3–20% for primary residence), and PMI is rarely required because 20%+ down is the investor standard. Lenders require 6+ months of cash reserves on investment properties — substantially higher than primary residence requirements. Conventional underwriting counts only 75% of rental income toward borrower DTI, reflecting the assumption of vacancy and management costs.</p>
            </div>

            <div>
              <h3 class="text-base font-bold mb-2" style="color:#1e3a5f;">The 5 Investor Loan Types Explained</h3>
              <ul class="space-y-1.5">
                <li><strong>Conventional:</strong> Standard Fannie/Freddie loans. Requires personal income verification, W-2 or tax returns. Best rate for qualified borrowers.</li>
                <li><strong>DSCR:</strong> Qualifies on property cash flow alone — no W-2, no tax returns. Rates ~1% higher than Conventional but faster underwriting. Popular for portfolio scaling.</li>
                <li><strong>Portfolio:</strong> Relationship-based lender holds the loan on their own balance sheet. Flexible terms but typically higher rates and variable requirements.</li>
                <li><strong>Hard Money:</strong> Short-term bridge financing at 12–14% + points. 6–18 month terms. Designed for flip projects where speed and flexibility outweigh rate cost.</li>
                <li><strong>Second Home:</strong> Owner-occupied part-time. Slightly lower rate than full investment property — but usage rules restrict true rental income generation.</li>
              </ul>
            </div>

            <div>
              <h3 class="text-base font-bold mb-2" style="color:#1e3a5f;">How This Differs from Other Mortgage Calculators</h3>
              <ul class="space-y-1.5">
                <li><strong>Zillow / Bankrate:</strong> Consumer-focused, primary residence rates, no investor modes, no DSCR, no rental offset.</li>
                <li><strong>BiggerPockets:</strong> Has investor calculator but combines multiple analyses into one workflow — this calculator isolates the mortgage/financing decision.</li>
                <li><strong>DealCheck:</strong> Good investor modeling, less explicit DSCR vs Cash Flow distinction.</li>
                <li><strong>RealCalc Mortgage Calculator:</strong> Unique in (a) Mode 2 rental offset as standalone investor mode, (b) 5 loan types with type-specific rate defaults, (c) explicit DSCR vs Cash Flow KEY INSIGHT in both UI and content, (d) cross-calculator Rental Property Calculator Year 1 CoC invariant.</li>
              </ul>
              <p class="text-xs text-gray-400 mt-2">These comparisons describe market positioning, not endorsements. Individual calculator accuracy depends on input assumptions.</p>
            </div>
          </div>
        </section>

        <!-- 11. LIMITATIONS -->
        <section id="limitations" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">Limitations of This Calculator</h2>
          <p class="text-sm text-gray-400 mb-5">What this calculator cannot tell you</p>
          <div class="grid md:grid-cols-2 gap-5">
            <div class="border border-gray-100 rounded-xl p-4">
              <p class="font-bold text-sm mb-1 text-red-600">Rates are illustrative, not quotes</p>
              <p class="text-xs text-gray-600 leading-relaxed">Default rates reflect 2026 market averages for investment properties — this calculator is designed for investment properties, not primary residences. Your actual investor rate depends on credit score, LTV, property type, cash reserves, and the specific lender relationship. Override with your actual lender quote for accuracy. Rates shift weekly with market conditions.</p>
            </div>
            <div class="border border-gray-100 rounded-xl p-4">
              <p class="font-bold text-sm mb-1 text-amber-600">Rental income assumptions require validation</p>
              <p class="text-xs text-gray-600 leading-relaxed">Expected Rent must match realistic market rent — not asking price or wishful thinking. Zillow Rent Zestimate tends to overstate by 5–15% in many markets. Best source: 3–5 recent lease comparables within 1 mile of the subject property. Overestimated rent inflates both Cash Flow and DSCR, creating a false-positive picture.</p>
            </div>
            <div class="border border-gray-100 rounded-xl p-4">
              <p class="font-bold text-sm mb-1 text-amber-600">PMI auto-cancellation not modeled (v1 limitation)</p>
              <p class="text-xs text-gray-600 leading-relaxed">PMI typically cancels at ~78% LTV — when principal payments + appreciation bring equity to 22% of original loan. This calculator assumes PMI continues for the full loan term. Actual total interest and monthly costs may be lower once PMI cancels (typically years 8–12 depending on extra payments and appreciation). Recalculate or consult your servicer after reaching 78% LTV.</p>
            </div>
            <div class="border border-gray-100 rounded-xl p-4">
              <p class="font-bold text-sm mb-1 text-amber-600">Property taxes vary significantly by location</p>
              <p class="text-xs text-gray-600 leading-relaxed">Default 1.2% is the US national average but varies dramatically. Texas, Illinois, New Jersey: 2–3%+ typical. Hawaii, Colorado, Wyoming: 0.5–0.7%. Use your county's actual effective tax rate for accuracy. Tax rate errors of 1% on a $300K property create a $250/mo PITI error — material for cash flow analysis.</p>
            </div>
            <div class="border border-gray-100 rounded-xl p-4">
              <p class="font-bold text-sm mb-1 text-blue-600">Does not model ARM adjustments or balloon terms</p>
              <p class="text-xs text-gray-600 leading-relaxed">v1 assumes fixed-rate fully-amortizing loans for the full term. ARMs and balloon loans have different payment structures that change significantly after initial fixed periods. For ARM or balloon loan analysis, consult your lender directly — the payment dynamics differ materially from what this calculator projects.</p>
            </div>
            <div class="border border-gray-100 rounded-xl p-4">
              <p class="font-bold text-sm mb-1 text-blue-600">Not a substitute for professional advice</p>
              <p class="text-xs text-gray-600 leading-relaxed">This is an educational and screening tool. Before committing to a purchase or financing decision: obtain actual rate quotes from licensed mortgage brokers, consult a CPA for tax treatment specific to your situation, and review contracts with a real estate attorney. This is not investment advice — projections are based on your inputs, not guaranteed outcomes.</p>
            </div>
          </div>

          <div class="mt-5 bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p class="text-sm font-bold text-gray-700 mb-2">When Not to Use This Calculator</p>
            <ul class="grid md:grid-cols-2 gap-1.5 text-xs text-gray-600">
              <li>• <strong>Primary residence mortgage:</strong> use a primary residence calculator with owner-occupant rates</li>
              <li>• <strong>Commercial property (5+ units):</strong> use a commercial calculator with different DSCR thresholds</li>
              <li>• <strong>Cash purchase (100% down):</strong> use the Rental Property Calculator for cash-only returns</li>
              <li>• <strong>Long-term wealth projection:</strong> use the Rental Property ROI Calculator</li>
              <li>• <strong>Lender underwriting certainty:</strong> DSCR thresholds vary by program — always confirm with lender</li>
              <li>• <strong>ARM or balloon loan analysis:</strong> v1 assumes fixed-rate; consult your lender directly</li>
            </ul>
          </div>
        </section>

        <!-- 12. COMMON MISTAKES -->
        <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">Common Mistakes When Using Mortgage Calculators</h2>
          <p class="text-sm text-gray-400 mb-5">Avoid these five errors</p>
          <div class="space-y-4">
            <div class="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <div class="w-7 h-7 rounded-full bg-red-100 text-red-600 font-extrabold text-sm flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <p class="font-bold text-sm mb-1">Using primary residence mortgage rates for investor analysis</p>
                <p class="text-xs text-gray-600 leading-relaxed">Plugging a 6.0% primary residence rate into an investor deal analysis produces 1.5% too-optimistic results — which at $300K loan translates to $238/mo lower PITI than reality. Always use investor rates (7.5% Conv, 8.25% DSCR for 2026). This calculator defaults to investor rates automatically.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <div class="w-7 h-7 rounded-full bg-red-100 text-red-600 font-extrabold text-sm flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <p class="font-bold text-sm mb-1">Confusing DSCR with Cash Flow</p>
                <p class="text-xs text-gray-600 leading-relaxed">DSCR and Cash Flow measure different things — DSCR uses P&I only, Cash Flow uses full PITI. A deal with DSCR 1.25 can have negative Cash Flow of −$200/mo when property taxes are high. Always check both metrics separately: DSCR for lender approval likelihood, Cash Flow for your monthly investor outcome.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <div class="w-7 h-7 rounded-full bg-amber-100 text-amber-600 font-extrabold text-sm flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <p class="font-bold text-sm mb-1">Forgetting taxes and insurance (P&I vs PITI)</p>
                <p class="text-xs text-gray-600 leading-relaxed">Many calculators show only P&I, understating actual monthly cost by 20–40%. On a $300K property in Texas, property tax alone adds $500–750/mo. Always budget around full PITI. This calculator shows PITI by default — never just P&I.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <div class="w-7 h-7 rounded-full bg-amber-100 text-amber-600 font-extrabold text-sm flex items-center justify-center flex-shrink-0">4</div>
              <div>
                <p class="font-bold text-sm mb-1">Underestimating Break-Even Rent (Gross Required Rent)</p>
                <p class="text-xs text-gray-600 leading-relaxed">Break-Even Rent (Gross Required Rent) is typically 30–40% higher than PITI due to vacancy and operating expenses being deducted from gross rent before it reaches you. A PITI of $2,185 needs ~$3,394 in gross rent for zero cash flow at standard 8% vacancy + 30% OpEx. Many investors assume rent "covers costs" if rent ≥ PITI — that's always wrong at standard assumptions.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <div class="w-7 h-7 rounded-full bg-blue-100 text-blue-600 font-extrabold text-sm flex items-center justify-center flex-shrink-0">5</div>
              <div>
                <p class="font-bold text-sm mb-1">Using Hard Money for long-term rental analysis</p>
                <p class="text-xs text-gray-600 leading-relaxed">Hard money is short-term bridge financing at 12–14% rates, designed for flip projects lasting 6–18 months. Modeling Hard Money as a long-term rental loan produces nonsensical negative cash flow results that tell you nothing useful. This calculator automatically blocks the rental cash flow analysis (Mode 2) when Hard Money is selected and redirects to the Fix and Flip Calculator.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 13. FAQ -->
        <section id="faq" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">Frequently Asked Questions</h2>
          <p class="text-sm text-gray-400 mb-5">Common questions about investment property mortgages</p>
          <div class="space-y-4">

            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">What's the difference between investor and primary residence mortgage rates?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                Investor rates run 0.75–1.5 percentage points higher than primary residence rates. In 2026, Conventional investor rates average 7.5% versus 6.5–7.0% for primary residence mortgages. The premium reflects lender risk — investment properties have higher default rates during economic downturns when owners prioritize their primary residence. <strong>This calculator is designed for investment properties, not primary residences — it uses investor rates by default.</strong> For primary residence analysis, use a primary residence mortgage calculator with owner-occupant rate assumptions and 3–20% down options.
              </div>
            </details>

            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">What does PITI stand for?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                PITI = Principal + Interest + Taxes + Insurance. It represents the full monthly mortgage obligation — not just the loan payment (P&I) but also the property tax escrow and insurance escrow. Many consumer mortgage calculators show only P&I, which understates actual monthly cost by 20–40% on investment properties due to higher tax and insurance rates. Full PITI may also include PMI (if down payment &lt;20% on Conventional/Second Home loans) and HOA fees. Always budget around PITI, never just P&I.
              </div>
            </details>

            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">When does PMI apply to investor mortgages?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                PMI applies only when two conditions are both met: (1) down payment is less than 20%, AND (2) loan type is Conventional or Second Home. DSCR loans, Portfolio loans, and Hard Money loans do not have PMI regardless of down payment — their higher base rates compensate the lender for risk rather than a separate insurance premium. PMI typically auto-cancels at approximately 78% LTV through principal paydown, though this calculator does not model the cancellation in v1. Always verify PMI terms with your specific lender.
              </div>
            </details>

            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">Why does DSCR show approvable but my Cash Flow is negative?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                This is the core insight of investor mortgage analysis. <strong>DSCR uses P&I only as debt service</strong> — it measures whether rental income covers the loan's principal and interest. <strong>Cash Flow uses full PITI</strong> — including taxes, insurance, HOA, and PMI — as the total cost offset against effective rent (after vacancy and operating expenses). A property in Texas with high property taxes (2.5% = $625/mo on a $300K property) can have DSCR ≥ 1.25 (lender sees P&I comfortably covered) AND Cash Flow of −$150/mo (investor still pays monthly because taxes and insurance push PITI $300 above what P&I alone shows). Both are correct — they answer different questions. DSCR for approvability; Cash Flow for your pocket.
              </div>
            </details>

            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">What's a DSCR loan and when should I use one?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                DSCR loans qualify borrowers based on the property's rental income relative to the mortgage P&I payment — no W-2, no tax returns required. Typical minimum DSCR is 1.15–1.25 depending on the program. Rates run approximately 1% above Conventional investor rates (around 8.25% in 2026) but underwriting is faster and does not depend on personal income documentation. DSCR loans are ideal for self-employed investors, portfolio scalers who have exhausted conventional loan limits, or investors whose personal income doesn't reflect their true financial strength due to depreciation deductions or business entity structuring.
              </div>
            </details>

            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">Can I use this for a flip?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                Yes, for modeling the Hard Money carrying cost during a flip. Select Hard Money loan type (12% default, 1-year default term) and use Mode 1 to see the monthly P&I + total interest cost over your flip hold period. Mode 2 (rental cash flow) is blocked for Hard Money because the combination doesn't make analytical sense for flips. For the complete flip deal analysis — purchase price, rehab budget, holding costs, after-repair value, and profit margin — use the Fix and Flip Calculator, which is purpose-built for flip modeling.
              </div>
            </details>

            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">What down payment should I expect for an investment property?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                Investor down payment minimums in 2026: Conventional 20–25%, DSCR 20–25% (some programs at 15% with rate adjustment), Portfolio 15–30% (varies by lender), Hard Money 10–30% + origination points, Second Home 10–20%. This calculator defaults to 25%, which represents the practical investor standard. Down payments below 20% on Conventional or Second Home loans trigger PMI. DSCR and Portfolio lenders typically don't offer low-down options regardless of borrower qualification.
              </div>
            </details>

            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">How do I calculate Break-Even Rent?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                Break-Even Rent (Gross Required Rent) = PITI ÷ [(1 − Vacancy%) × (1 − OpEx%)]. This formula gives you the minimum GROSS rent a tenant must pay — before your vacancy loss and operating expense deductions — for the deal to break even on cash flow. Example: PITI $2,185, 8% vacancy, 30% OpEx → Break-Even Rent (Gross Required Rent) = $2,185 ÷ (0.92 × 0.70) = $3,394. The "Gross Required Rent" qualifier is essential — this is what you'd need to charge tenants, not what you net after expenses. Typically 30–40% higher than PITI at standard vacancy and expense assumptions.
              </div>
            </details>

            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">Does this calculator model ARM or balloon loans?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                Not in v1. This calculator assumes fixed-rate, fully-amortizing loans for the complete loan term selected. ARMs (adjustable-rate mortgages) have payment structures that change after an initial fixed period; balloon loans require a large payment at term end rather than full amortization. Both are common in Portfolio and commercial loan programs. For ARM or balloon loan analysis, consult your lender directly — the payment dynamics differ materially from what a fixed amortization calculator projects.
              </div>
            </details>

          </div>
        </section>

        <!-- 14. RELATED CALCULATORS -->
        <section id="related-calculators" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">Related Calculators</h2>
          <p class="text-sm text-gray-400 mb-5">Continue your investor analysis workflow</p>

          <!-- Primary Residence Redirect -->
          <div class="mb-5 p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center gap-3">
            <div class="flex-1">
              <p class="text-sm font-semibold text-slate-700">Evaluating a primary residence — not an investment property?</p>
              <p class="text-xs text-slate-500 mt-0.5">This calculator uses investor defaults (7.5% rate, 25% down). For homebuyers comparing buying vs. renting, use the dedicated Rent vs Buy Calculator instead.</p>
            </div>
            <button @click="goToRentVsBuy" class="shrink-0 px-4 py-2 text-sm font-semibold bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg flex items-center gap-2 transition whitespace-nowrap">
              <span>If primary residence, see Rent vs Buy →</span>
            </button>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <NuxtLink to="/rental-property-calculator" class="block p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-indigo-300 hover:bg-indigo-50 transition group">
              <p class="font-bold text-sm mb-1 group-hover:text-indigo-800" style="color: #1e3a5f;">Rental Property Calculator</p>
              <p class="text-xs text-gray-500 group-hover:text-indigo-700">Year 1 operating cash flow with DSCR, CoC, NOI. Validate your financing assumptions from this calculator. Cross-validates Year 1 CoC ±0.1%.</p>
            </NuxtLink>
            <NuxtLink to="/rental-property-roi-calculator" class="block p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-indigo-300 hover:bg-indigo-50 transition group">
              <p class="font-bold text-sm mb-1 group-hover:text-indigo-800" style="color: #1e3a5f;">Rental Property ROI Calculator</p>
              <p class="text-xs text-gray-500 group-hover:text-indigo-700">Lifetime wealth projection over 5–30 year holds. IRR, appreciation, depreciation. Use after modeling financing here.</p>
            </NuxtLink>
            <NuxtLink to="/dscr-calculator" class="block p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-indigo-300 hover:bg-indigo-50 transition group">
              <p class="font-bold text-sm mb-1 group-hover:text-indigo-800" style="color: #1e3a5f;">DSCR Calculator</p>
              <p class="text-xs text-gray-500 group-hover:text-indigo-700">Dedicated lender underwriting analysis. Cross-validates DSCR from Mode 2 ±0.01 for identical inputs.</p>
            </NuxtLink>
            <NuxtLink to="/fix-and-flip-calculator" class="block p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-indigo-300 hover:bg-indigo-50 transition group">
              <p class="font-bold text-sm mb-1 group-hover:text-indigo-800" style="color: #1e3a5f;">Fix and Flip Calculator</p>
              <p class="text-xs text-gray-500 group-hover:text-indigo-700">Full flip deal analysis. Use when Hard Money Mode 2 redirects you here — complete flip profit modeling.</p>
            </NuxtLink>
            <NuxtLink to="/compare-real-estate-deals" class="block p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-indigo-300 hover:bg-indigo-50 transition group">
              <p class="font-bold text-sm mb-1 group-hover:text-indigo-800" style="color: #1e3a5f;">Compare Real Estate Deals</p>
              <p class="text-xs text-gray-500 group-hover:text-indigo-700">Side-by-side Flip vs BRRRR vs Rental comparison. Use Mode 3 CTA to continue full strategy analysis here.</p>
            </NuxtLink>
            <NuxtLink to="/brrrr-calculator" class="block p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-indigo-300 hover:bg-indigo-50 transition group">
              <p class="font-bold text-sm mb-1 group-hover:text-indigo-800" style="color: #1e3a5f;">BRRRR Calculator</p>
              <p class="text-xs text-gray-500 group-hover:text-indigo-700">Buy-Rehab-Rent-Refi-Repeat analysis. Compare refi terms modeled here against the BRRRR refi scenario.</p>
            </NuxtLink>
          </div>
        </section>

      </div><!-- /seo content -->

    </main>

    <!-- ═══════════════════════════════════════════════
         FOOTER
    ═══════════════════════════════════════════════ -->
    <footer class="bg-gray-900 text-gray-400 mt-16">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background: #f59e0b;">
                <span class="font-extrabold text-sm" style="color:#1e3a5f;">RC</span>
              </div>
              <span class="font-extrabold text-white">RealCalc</span>
            </div>
            <p class="text-xs leading-relaxed">Free real estate investment calculators for US investors. Mortgage, rental, BRRRR, fix-and-flip, and more.</p>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Calculators</p>
            <ul class="space-y-1.5 text-xs">
              <li><NuxtLink to="/rental-property-calculator" class="hover:text-gray-300 transition">Rental Property</NuxtLink></li>
              <li><NuxtLink to="/mortgage-calculator-investment" class="hover:text-gray-300 transition">Mortgage Investment</NuxtLink></li>
              <li><NuxtLink to="/cap-rate-calculator" class="hover:text-gray-300 transition">Cap Rate</NuxtLink></li>
              <li><NuxtLink to="/dscr-calculator" class="hover:text-gray-300 transition">DSCR</NuxtLink></li>
              <li><NuxtLink to="/brrrr-calculator" class="hover:text-gray-300 transition">BRRRR</NuxtLink></li>
            </ul>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">More Tools</p>
            <ul class="space-y-1.5 text-xs">
              <li><NuxtLink to="/fix-and-flip-calculator" class="hover:text-gray-300 transition">Fix &amp; Flip</NuxtLink></li>
              <li><NuxtLink to="/arv-calculator" class="hover:text-gray-300 transition">ARV Calculator</NuxtLink></li>
              <li><NuxtLink to="/compare-real-estate-deals" class="hover:text-gray-300 transition">Compare Deals</NuxtLink></li>
              <li><NuxtLink to="/rental-property-roi-calculator" class="hover:text-gray-300 transition">Rental ROI</NuxtLink></li>
              <li><NuxtLink to="/calculators" class="hover:text-gray-300 transition">All Calculators</NuxtLink></li>
            </ul>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Company</p>
            <ul class="space-y-1.5 text-xs">
              <li><NuxtLink to="/pricing" class="hover:text-gray-300 transition">Pricing</NuxtLink></li>
              <li><NuxtLink to="/blog" class="hover:text-gray-300 transition">Blog</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:text-gray-300 transition">About</NuxtLink></li>
              <li><NuxtLink to="/privacy" class="hover:text-gray-300 transition">Privacy</NuxtLink></li>
              <li><NuxtLink to="/terms" class="hover:text-gray-300 transition">Terms</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-6 text-xs text-center text-gray-500">
          © 2026 RealCalc. For educational purposes only. Not financial or investment advice.
        </div>
      </div>
    </footer>


  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

// ─── HEAD ────────────────────────────────────────────
useHead({
  title: 'Investment Property Mortgage Calculator — PITI + Cash Flow | RealCalc',
  meta: [
    { name: 'description', content: 'Free Investment Property Mortgage Calculator for real estate investors. Calculate PITI, rental cash flow, DSCR, and compare loan scenarios. 2026 investor rates.' },
    { property: 'og:title', content: 'Investment Property Mortgage Calculator — PITI + Cash Flow | RealCalc' },
    { property: 'og:description', content: 'Free Investment Property Mortgage Calculator for real estate investors. Calculate PITI, rental cash flow, DSCR, and compare loan scenarios. 2026 investor rates.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'SoftwareApplication',
            name: 'Investment Property Mortgage Calculator',
            description: 'Free Investment Property Mortgage Calculator for real estate investors. Calculate PITI, rental cash flow, DSCR, compare loan types (Conventional, DSCR, Portfolio) at 2026 investor rates.',
            url: 'https://arvcalc.com/mortgage-calculator-investment',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web browser',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            audience: { '@type': 'Audience', audienceType: 'US Real Estate Investors' },
            featureList: [
              'Investment property PITI with 2026 investor rates',
              '3 modes: Standard, Investor with Rental Offset, Compare Loan Scenarios',
              '5 loan types: Conventional, DSCR, Portfolio, Hard Money, Second Home',
              'Net Monthly Cash Flow with Status Badge',
              'DSCR for lender underwriting preview (P&I only)',
              'Break-Even Rent (Gross Required Rent)',
              'Year 1 Cash-on-Cash Return',
              'Amortization schedule and chart',
              'PMI auto-detection (Conventional/Second Home only)',
              'Mode 3 side-by-side loan comparison',
              '3 sensitivity scenarios (Conservative/Base/Optimistic)',
              'URL import from Rental Property Calculator and ROI',
              'PDF export',
              'Cross-calculator invariant: Year 1 CoC matches Rental Property Calculator ±0.1pp',
              'Saved Scenarios widget (save up to 20 scenarios, compare across calculators)',
              'DSCR vs Cash Flow KEY INSIGHT — both lender and investor perspective'
            ]
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: "What's the difference between investor and primary residence mortgage rates?", acceptedAnswer: { '@type': 'Answer', text: 'Investor rates run 0.75–1.5 percentage points higher than primary residence rates (7.5% Conv vs 6.5–7.0% primary in 2026). This calculator is designed for investment properties, not primary residences.' } },
              { '@type': 'Question', name: 'What does PITI stand for?', acceptedAnswer: { '@type': 'Answer', text: 'PITI = Principal + Interest + Taxes + Insurance. Full monthly mortgage obligation including property tax and insurance escrow, not just P&I.' } },
              { '@type': 'Question', name: 'Why does DSCR show approvable but my Cash Flow is negative?', acceptedAnswer: { '@type': 'Answer', text: 'DSCR uses P&I only as debt service. Cash Flow uses full PITI. A property can have DSCR ≥ 1.25 (lender approves) AND negative Cash Flow simultaneously — common in high-tax states where taxes add hundreds above what DSCR measures.' } },
              { '@type': 'Question', name: 'How do I calculate Break-Even Rent?', acceptedAnswer: { '@type': 'Answer', text: 'Break-Even Rent (Gross Required Rent) = PITI ÷ [(1 − Vacancy%) × (1 − OpEx%)]. Gives gross rent needed before vacancy and expenses to cover PITI. Typically 30–40% higher than PITI.' } },
              { '@type': 'Question', name: 'When does PMI apply?', acceptedAnswer: { '@type': 'Answer', text: 'PMI only when: down payment < 20% AND loan type is Conventional or Second Home. DSCR, Portfolio, Hard Money: never have PMI.' } }
            ]
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arvcalc.com' },
              { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://arvcalc.com/calculators' },
              { '@type': 'ListItem', position: 3, name: 'Investment Property Mortgage Calculator', item: 'https://arvcalc.com/mortgage-calculator-investment' }
            ]
          }
        ]
      })
    }
  ]
})

// ─── STATE ────────────────────────────────────────────
const isNavExpanded = ref(false)
const shareSuccess = ref(false)

// Core inputs
const propertyPrice = ref(null)
const downPayment = ref(25)
const loanType = ref('Conventional')
const loanRate = ref(7.5)
const loanTerm = ref(30)

// Tax & Insurance
const taxMode = ref('pct')
const taxPct = ref(1.2)
const taxDollar = ref(null)
const annualInsurance = ref(1800)
const hoaMonthly = ref(0)
const pmiRate = ref(0.75)

// Mode
const currentMode = ref(1)

// Mode 2
const monthlyRent = ref(null)
const vacancyPct = ref(8)
const opexPct = ref(30)

// Advanced
const showAdvanced = ref(false)
const extraPrincipal = ref(0)
const closingCostsPct = ref(2)
const pointsPaid = ref(0)

// Mode 3 compare scenarios
const compareScenarios = ref([
  { loanType: 'Conventional', rate: 7.5, term: 30, down: 25 },
  { loanType: 'Conventional', rate: 7.0, term: 15, down: 25 },
  { loanType: 'DSCR', rate: 8.25, term: 30, down: 25 }
])

// Scenario Panel
const triggerScenarioSave = ref(false)

// Rate defaults by loan type
const RATE_DEFAULTS = {
  Conventional: 7.5,
  DSCR: 8.25,
  Portfolio: 8.5,
  HardMoney: 12.0,
  SecondHome: 7.25
}

// ─── DERIVED / COMPUTED ───────────────────────────────

const downPaymentAmount = computed(() => {
  if (!propertyPrice.value || !downPayment.value) return 0
  return propertyPrice.value * (downPayment.value / 100)
})

const isAllCash = computed(() => (downPayment.value || 0) >= 100)

const pmIActive = computed(() => {
  const dp = downPayment.value || 0
  const lt = loanType.value
  return dp < 20 && (lt === 'Conventional' || lt === 'SecondHome')
})

const loanAmount = computed(() => {
  if (!propertyPrice.value || isAllCash.value) return 0
  const dp = downPaymentAmount.value
  return Math.max(0, propertyPrice.value - dp)
})

const monthlyTax = computed(() => {
  if (!propertyPrice.value) return 0
  if (taxMode.value === 'pct') {
    return (propertyPrice.value * ((taxPct.value || 1.2) / 100)) / 12
  }
  return (taxDollar.value || 0) / 12
})

const monthlyInsurance = computed(() => (annualInsurance.value || 1800) / 12)

const monthlyPMI = computed(() => {
  if (!pmIActive.value) return 0
  return loanAmount.value * ((pmiRate.value || 0.75) / 100) / 12
})

const monthlyPI = computed(() => {
  if (!loanAmount.value || loanAmount.value <= 0) return 0
  const r = (loanRate.value || 7.5) / 100 / 12
  const n = (loanTerm.value || 30) * 12
  if (r === 0) return loanAmount.value / n
  return loanAmount.value * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
})

const monthlyPITI = computed(() => {
  return monthlyPI.value + monthlyTax.value + monthlyInsurance.value + monthlyPMI.value + (hoaMonthly.value || 0)
})

const hasResult = computed(() => {
  return !!propertyPrice.value && propertyPrice.value >= 10000 && !isAllCash.value
})

// Total cash to close
const totalCashToClose = computed(() => {
  if (!propertyPrice.value) return 0
  const cc = propertyPrice.value * ((closingCostsPct.value || 2) / 100)
  const ptsCost = loanAmount.value * ((pointsPaid.value || 0) / 100)
  return downPaymentAmount.value + cc + ptsCost
})

// Total interest (without extra principal)
const totalInterest = computed(() => {
  if (!monthlyPI.value) return 0
  return monthlyPI.value * (loanTerm.value || 30) * 12 - loanAmount.value
})

const totalPayments = computed(() => monthlyPI.value * (loanTerm.value || 30) * 12)

// Effective APR (simplified: accounts for points + closing costs)
const effectiveAPR = computed(() => {
  if (!loanAmount.value || !monthlyPI.value) return loanRate.value || 7.5
  const n = (loanTerm.value || 30) * 12
  const netLoan = loanAmount.value - loanAmount.value * ((pointsPaid.value || 0) / 100)
  if (netLoan <= 0) return loanRate.value || 7.5
  // Solve for monthly rate using Newton's method
  const pmt = monthlyPI.value
  let r = (loanRate.value || 7.5) / 100 / 12
  for (let i = 0; i < 20; i++) {
    const f = netLoan - pmt * (1 - Math.pow(1 + r, -n)) / r
    const df = pmt * (1 - Math.pow(1 + r, -n)) / (r * r) - pmt * n * Math.pow(1 + r, -n - 1) / r
    r = r - f / df
    if (Math.abs(f) < 0.01) break
  }
  return Math.max(0, r * 12 * 100)
})

// First month breakdown
const firstMonthInterest = computed(() => {
  if (!loanAmount.value) return 0
  return loanAmount.value * ((loanRate.value || 7.5) / 100 / 12)
})
const firstMonthPrincipal = computed(() => Math.max(0, monthlyPI.value - firstMonthInterest.value))

// Amortization schedule (simplified, yearly points for chart)
const amortSchedule = computed(() => {
  if (!loanAmount.value || !monthlyPI.value) return []
  const r = (loanRate.value || 7.5) / 100 / 12
  const n = (loanTerm.value || 30) * 12
  const extra = extraPrincipal.value || 0
  let balance = loanAmount.value
  let cumPrincipal = 0
  let cumInterest = 0
  const yearlyData = []

  for (let m = 1; m <= n; m++) {
    if (balance <= 0) break
    const intPmt = balance * r
    const prinPmt = Math.min(balance, monthlyPI.value - intPmt + extra)
    balance = Math.max(0, balance - prinPmt)
    cumPrincipal += prinPmt
    cumInterest += intPmt
    if (m % 12 === 0 || balance <= 0) {
      yearlyData.push({ year: Math.ceil(m / 12), balance, cumPrincipal, cumInterest })
    }
    if (balance <= 0) break
  }
  return yearlyData
})

// Extra principal payoff calculation
const earlyPayoffMonths = computed(() => {
  if (!extraPrincipal.value || !loanAmount.value || !monthlyPI.value) return 0
  const r = (loanRate.value || 7.5) / 100 / 12
  const extra = extraPrincipal.value
  let balance = loanAmount.value
  const stdPayoff = (loanTerm.value || 30) * 12
  let months = 0
  while (balance > 0 && months < stdPayoff) {
    const int = balance * r
    const prin = Math.min(balance, monthlyPI.value - int + extra)
    balance = Math.max(0, balance - prin)
    months++
  }
  return Math.max(0, stdPayoff - months)
})

const interestSaved = computed(() => {
  if (!earlyPayoffMonths.value) return 0
  const r = (loanRate.value || 7.5) / 100 / 12
  const extra = extraPrincipal.value
  let balance = loanAmount.value
  let actualInterest = 0
  const stdPayoff = (loanTerm.value || 30) * 12
  let months = 0
  while (balance > 0 && months < stdPayoff) {
    const int = balance * r
    const prin = Math.min(balance, monthlyPI.value - int + extra)
    balance = Math.max(0, balance - prin)
    actualInterest += int
    months++
  }
  return Math.max(0, totalInterest.value - actualInterest)
})

// Amortization chart points (SVG, 400x200 viewBox)
const amortChartPoints = computed(() => {
  if (!amortSchedule.value.length) return { balance: [], principal: [], interest: [] }
  const data = amortSchedule.value
  const maxVal = loanAmount.value * 1.1
  const maxYears = (loanTerm.value || 30)
  const toX = y => (y / maxYears) * 400
  const toY = v => 190 - (Math.min(v, maxVal) / maxVal) * 180

  return {
    balance: data.map(d => `${toX(d.year).toFixed(1)},${toY(d.balance).toFixed(1)}`),
    principal: data.map(d => `${toX(d.year).toFixed(1)},${toY(d.cumPrincipal).toFixed(1)}`),
    interest: data.map(d => `${toX(d.year).toFixed(1)},${toY(d.cumInterest).toFixed(1)}`)
  }
})

// PITI donut chart
const pitiDonut = computed(() => {
  if (!monthlyPITI.value) return []
  const total = monthlyPITI.value
  const circum = 251.3
  const slices = [
    { value: monthlyPI.value, color: '#3b82f6' },
    { value: monthlyTax.value, color: '#f59e0b' },
    { value: monthlyInsurance.value, color: '#10b981' },
    { value: monthlyPMI.value, color: '#f97316' },
    { value: hoaMonthly.value || 0, color: '#8b5cf6' }
  ].filter(s => s.value > 0)

  let offset = 0
  return slices.map(s => {
    const dash = (s.value / total) * circum
    const result = { ...s, dash, offset }
    offset += dash
    return result
  })
})

// Mode 2 computed
const effectiveRent = computed(() => {
  if (!monthlyRent.value) return 0
  return monthlyRent.value * (1 - (vacancyPct.value || 8) / 100) * (1 - (opexPct.value || 30) / 100)
})

const netMonthlyCashFlow = computed(() => effectiveRent.value - monthlyPITI.value)

const annualCashFlow = computed(() => netMonthlyCashFlow.value * 12)

const yearOneCoc = computed(() => {
  if (!totalCashToClose.value) return 0
  return (annualCashFlow.value / totalCashToClose.value) * 100
})

const dscr = computed(() => {
  if (!monthlyPI.value || !monthlyRent.value) return 0
  const annualNOI = monthlyRent.value * 12 * (1 - (vacancyPct.value || 8) / 100) * (1 - (opexPct.value || 30) / 100)
  const annualDebtService = monthlyPI.value * 12
  return annualDebtService > 0 ? annualNOI / annualDebtService : 0
})

const breakEvenRent = computed(() => {
  const vac = (vacancyPct.value || 8) / 100
  const op = (opexPct.value || 30) / 100
  const denom = (1 - vac) * (1 - op)
  return denom > 0 ? monthlyPITI.value / denom : 0
})

// Cash Flow badge
const cashFlowBadge = computed(() => {
  const cf = netMonthlyCashFlow.value
  if (cf > 200) return { label: 'Positive Cash Flow', shortLabel: '+CF', bgClass: 'bg-emerald-500', textClass: 'text-emerald-700' }
  if (cf >= 0) return { label: 'Break-Even', shortLabel: '±', bgClass: 'bg-blue-500', textClass: 'text-blue-700' }
  if (cf >= -200) return { label: 'Slightly Negative', shortLabel: '−CF', bgClass: 'bg-amber-500', textClass: 'text-amber-700' }
  return { label: 'Significantly Negative', shortLabel: '−−CF', bgClass: 'bg-red-500', textClass: 'text-red-700' }
})

// ─── SENSITIVITY HELPERS ─────────────────────────────
function calcPI(loan, term, rate) {
  if (!loan) return 0
  const r = rate / 100 / 12
  const n = term * 12
  if (r === 0) return loan / n
  return loan * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
}

function calcSensitivityPITI(price, dp, rate) {
  const loan = price * (1 - dp / 100)
  const pi = calcPI(loan, 30, rate)
  const tax = (price * 0.012) / 12
  const ins = 1800 / 12
  return pi + tax + ins
}

function calcTermRatePI(loan, term, rate) {
  return calcPI(loan, term, rate)
}

function calcTermRateTotalInt(loan, term, rate) {
  const pi = calcPI(loan, term, rate)
  return Math.max(0, pi * term * 12 - loan)
}

// ─── MODE 3 COMPARE ──────────────────────────────────
const compareResults = computed(() => {
  const price = propertyPrice.value || 0
  const results = compareScenarios.value.map(s => {
    const loan = price * (1 - (s.down || 25) / 100)
    const pi = calcPI(loan, s.term || 30, s.rate || 7.5)
    const tax = (price * 0.012) / 12
    const ins = 1800 / 12
    const piti = pi + tax + ins
    const ti = Math.max(0, pi * (s.term || 30) * 12 - loan)
    const cc = price * ((s.down || 25) / 100) + price * 0.02
    return {
      loanType: s.loanType,
      rate: s.rate,
      term: s.term,
      down: s.down,
      monthlyPI: pi,
      monthlyPITI: piti,
      totalInterest: ti,
      cashToClose: cc,
      isWinner: false
    }
  })
  // Find winner: lowest total interest
  const minInterest = Math.min(...results.map(r => r.totalInterest))
  results.forEach(r => { r.isWinner = Math.abs(r.totalInterest - minInterest) < 1 })
  return results
})

// ─── EVENT HANDLERS ───────────────────────────────────
function onLoanTypeChange() {
  const defaults = RATE_DEFAULTS[loanType.value]
  if (defaults) loanRate.value = defaults
  if (loanType.value === 'HardMoney') loanTerm.value = 1
}

function onCompareTypeChange(idx) {
  const s = compareScenarios.value[idx]
  s.rate = RATE_DEFAULTS[s.loanType] || 7.5
}

// ─── SCENARIO PANEL ──────────────────────────────────
const currentScenarioResult = computed(() => {
  if (!hasResult.value) return undefined
  if (currentMode.value === 2) {
    const cf = netMonthlyCashFlow.value
    const badge = cashFlowBadge.value
    const colorMap = {
      'bg-emerald-500': '#10b981',
      'bg-blue-500':    '#3b82f6',
      'bg-amber-500':   '#f59e0b',
      'bg-red-500':     '#ef4444',
    }
    return {
      primaryMetric: 'Monthly Cash Flow',
      primaryValue:  (cf >= 0 ? '+' : '') + formatCurrency(Math.abs(cf)),
      badgeLabel:    badge.shortLabel,
      badgeColor:    colorMap[badge.bgClass] ?? '#6b7280',
      purchasePrice: propertyPrice.value || undefined,
      monthlyCashFlow: cf,
      annualCashFlow:  annualCashFlow.value,
      dscr:            dscr.value || undefined,
    }
  }
  return {
    primaryMetric: 'Monthly PITI',
    primaryValue:  formatCurrency(monthlyPITI.value),
    badgeColor:    '#1e3a5f',
    purchasePrice: propertyPrice.value || undefined,
  }
})

function onScenarioSaved(_id) {}

// ─── URL PARAMS ──────────────────────────────────────
onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  if (params.get('p')) propertyPrice.value = Number(params.get('p'))
  if (params.get('dp')) downPayment.value = Number(params.get('dp'))
  if (params.get('lr')) loanRate.value = Number(params.get('lr'))
  if (params.get('lt')) loanTerm.value = Number(params.get('lt'))
  if (params.get('lty')) loanType.value = params.get('lty')
  if (params.get('r')) { monthlyRent.value = Number(params.get('r')) }
  if (params.get('vc')) vacancyPct.value = Number(params.get('vc'))
  if (params.get('op')) opexPct.value = Number(params.get('op'))
  if (params.get('pt')) taxPct.value = Number(params.get('pt'))
  if (params.get('ins')) annualInsurance.value = Number(params.get('ins'))
  if (params.get('hoa')) hoaMonthly.value = Number(params.get('hoa'))
  if (params.get('mode')) currentMode.value = Number(params.get('mode'))
})

// ─── AUDIENCE REDIRECT ───────────────────────────────
function goToRentVsBuy() {
  const params = new URLSearchParams({
    p: propertyPrice.value || '',
    lr: 6.75,
    dp: 20
  })
  window.location.href = `/rent-vs-buy-calculator?${params}`
}

// ─── SHARE / PDF ─────────────────────────────────────
function shareResult() {
  const params = new URLSearchParams()
  if (propertyPrice.value) params.set('p', propertyPrice.value)
  if (downPayment.value) params.set('dp', downPayment.value)
  if (loanRate.value) params.set('lr', loanRate.value)
  if (loanTerm.value) params.set('lt', loanTerm.value)
  if (loanType.value) params.set('lty', loanType.value)
  if (monthlyRent.value) params.set('r', monthlyRent.value)
  if (vacancyPct.value) params.set('vc', vacancyPct.value)
  if (opexPct.value) params.set('op', opexPct.value)
  params.set('mode', currentMode.value)
  const url = `${window.location.origin}${window.location.pathname}?${params}`
  navigator.clipboard?.writeText(url).catch(() => {})
  shareSuccess.value = true
  setTimeout(() => { shareSuccess.value = false }, 2500)
}

async function exportPDF() {
  if (!hasResult.value) return
  try {
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF()
    doc.setFontSize(16)
    doc.text('Investment Property Mortgage Calculator', 20, 20)
    doc.setFontSize(11)
    doc.text(`RealCalc.com — 2026 Investor Rates`, 20, 30)
    doc.setFontSize(10)
    let y = 45
    const addLine = (label, val) => { doc.text(`${label}: ${val}`, 20, y); y += 8 }
    addLine('Property Price', formatCurrency(propertyPrice.value || 0))
    addLine('Down Payment', `${downPayment.value}% (${formatCurrency(downPaymentAmount.value)})`)
    addLine('Loan Amount', formatCurrency(loanAmount.value))
    addLine('Loan Type', loanType.value)
    addLine('Interest Rate', `${loanRate.value}%`)
    addLine('Loan Term', `${loanTerm.value} years`)
    y += 4
    addLine('Monthly P&I', formatCurrency(monthlyPI.value))
    addLine('Monthly Tax', formatCurrency(monthlyTax.value))
    addLine('Monthly Insurance', formatCurrency(monthlyInsurance.value))
    if (monthlyPMI.value > 0) addLine('Monthly PMI', formatCurrency(monthlyPMI.value))
    addLine('Monthly PITI', formatCurrency(monthlyPITI.value))
    y += 4
    addLine('Total Cash to Close', formatCurrency(totalCashToClose.value))
    addLine('Total Interest', formatCurrency(totalInterest.value))
    addLine('Effective APR', `${effectiveAPR.value.toFixed(3)}%`)
    if (currentMode.value === 2 && monthlyRent.value) {
      y += 4
      addLine('Monthly Rent (Gross)', formatCurrency(monthlyRent.value))
      addLine('Effective Monthly Rent', formatCurrency(effectiveRent.value))
      addLine('Net Monthly Cash Flow', `${netMonthlyCashFlow.value >= 0 ? '+' : '-'}${formatCurrency(Math.abs(netMonthlyCashFlow.value))}`)
      addLine('DSCR (P&I only)', dscr.value.toFixed(2))
      addLine('Year 1 Cash-on-Cash', `${yearOneCoc.value.toFixed(2)}%`)
      addLine('Break-Even Rent (Gross Required Rent)', formatCurrency(breakEvenRent.value))
    }
    y += 8
    doc.setFontSize(8)
    doc.text('Generated by RealCalc.com | For educational purposes only. Not investment advice.', 20, y)
    doc.save('mortgage-investment-analysis.pdf')
  } catch (e) {
    console.error('PDF export error:', e)
  }
}

// ─── FORMATTERS ───────────────────────────────────────
function formatCurrency(val) {
  if (!val && val !== 0) return '$0'
  return '$' + Math.round(val).toLocaleString('en-US')
}

function formatCurrencyShort(val) {
  if (!val && val !== 0) return '$0'
  const v = Math.round(val)
  if (v >= 1000000) return '$' + (v / 1000000).toFixed(1) + 'M'
  if (v >= 10000) return '$' + (v / 1000).toFixed(0) + 'K'
  return '$' + v.toLocaleString('en-US')
}
</script>
