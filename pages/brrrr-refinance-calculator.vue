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
            class="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-lg transition hover:opacity-90"
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
            <li class="text-gray-700 font-semibold">BRRRR Refinance Calculator</li>
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
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            BRRRR Refinance Calculator — Cash Left, DSCR &amp; Appraisal Risk (2026)
          </h1>
        </div>
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            <li><a href="#why-brrrr-fail" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Why Deals Fail</a></li>
            <li><a href="#cash-left-vs-recovered" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Cash Left vs Recovered</a></li>
            <li><a href="#appraisal-gap" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Appraisal Gap</a></li>
            <li><a href="#dscr-after-refi" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">DSCR After Refi</a></li>
            <li><a href="#coc-after-brrrr" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">CoC After BRRRR</a></li>
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
              <li><a href="#why-brrrr-fail" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Why Deals Fail</a></li>
              <li><a href="#cash-left-vs-recovered" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Cash Left vs Recovered</a></li>
              <li><a href="#appraisal-gap" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Appraisal Gap</a></li>
              <li><a href="#dscr-after-refi" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">DSCR After Refi</a></li>
              <li><a href="#coc-after-brrrr" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">CoC After BRRRR</a></li>
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          <span>Cash Left in Deal</span>
        </div>
        <div class="flex items-center gap-3">
          <span v-if="hasResult" class="text-xl font-extrabold leading-none" :style="`color: ${verdict.color}`">
            {{ formatCurrency(cashLeftInDeal) }}
          </span>
          <span v-else class="text-xl font-bold text-gray-200">—</span>
          <span v-if="hasResult" class="text-xs font-bold px-2.5 py-1 rounded-full text-white" :style="`background: ${verdict.color}`">
            {{ verdict.label }}
          </span>
          <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         CALCULATOR
    ═══════════════════════════════════════════════ -->
    <main id="calculator" class="max-w-[1100px] mx-auto px-4 pt-8 pb-10">
      <div class="rounded-3xl p-[3px]" style="background: linear-gradient(135deg, #1e3a5f 0%, #f59e0b 50%, #1e3a5f 100%);">
      <div class="bg-white rounded-[21px] shadow-xl shadow-slate-200/60" style="overflow: clip;">

      <div class="lg:grid lg:grid-cols-[3fr_2fr] items-stretch gap-0">

        <!-- ═══════ INPUTS ═══════ -->
        <div class="space-y-5 pr-0 lg:pr-5">

          <!-- ─── 1. PROJECT COSTS ─── -->
          <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div class="px-5 py-3 border-b border-gray-100 flex items-center gap-3" style="background: #f8fafc;">
              <span class="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0" style="background: #1e3a5f;">1</span>
              <span class="font-bold text-sm" style="color: #1e3a5f;">Project Costs</span>
            </div>
            <div class="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Purchase Price</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input v-model.number="form.purchasePrice" type="number" min="0" step="1000" placeholder="Enter purchase price"
                    class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Rehab Cost</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input v-model.number="form.rehabCost" type="number" min="0" step="1000" placeholder="Enter rehab cost"
                    class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Purchase Closing Costs</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input v-model.number="form.purchaseClosing" type="number" min="0" step="500" placeholder="Enter purchase closing costs"
                    class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Holding Costs During Rehab</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input v-model.number="form.holdingCosts" type="number" min="0" step="500" placeholder="Enter total holding costs"
                    class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Taxes, insurance, utilities, security, maintenance, and other costs paid during rehab before refinance.</p>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Initial Financing Costs</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input v-model.number="form.initialFinancingCosts" type="number" min="0" step="500" placeholder="Enter initial financing costs"
                    class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Hard money points, interest, origination fees, extension fees, and other acquisition financing costs before refinance.</p>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Cash Invested Override</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input v-model.number="form.cashInvestedOverride" type="number" min="0" step="1000" placeholder="Optional: override cash invested"
                    class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Leave empty to use calculated total project cost. Override if some costs were financed or reimbursed.</p>
              </div>
            </div>
            <!-- Cash Invested Override warning -->
            <div v-if="showCashOverrideWarning" class="mx-5 mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800">
              Cash invested override is less than calculated total project cost. Verify accuracy.
            </div>
          </div>

          <!-- ─── 2. REFINANCE ASSUMPTIONS ─── -->
          <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div class="px-5 py-3 border-b border-gray-100 flex items-center gap-3" style="background: #f8fafc;">
              <span class="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0" style="background: #1e3a5f;">2</span>
              <span class="font-bold text-sm" style="color: #1e3a5f;">Refinance Assumptions</span>
            </div>
            <div class="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Appraised Value (After Refi)</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input v-model.number="form.appraisedValue" type="number" min="0" step="1000" placeholder="Enter appraised value"
                    class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Refinance LTV</label>
                <div class="relative">
                  <input v-model.number="form.refiLTV" type="number" min="50" max="90" step="1" placeholder="Enter refi LTV %"
                    class="w-full pr-8 pl-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">Typical cash-out refinance LTV may range from 70%–80%, but depends on lender, property type, DSCR, appraisal, and seasoning.</p>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Refinance Closing Costs</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input v-model.number="form.refiClosingCosts" type="number" min="0" step="500" placeholder="Enter refi closing costs"
                    class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Existing Debt Payoff</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input v-model.number="form.debtPayoff" type="number" min="0" step="1000" placeholder="Enter existing debt payoff"
                    class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Refinance Interest Rate</label>
                <div class="relative">
                  <input v-model.number="form.refiRate" type="number" min="0" max="15" step="0.125" placeholder="Enter refi rate %"
                    class="w-full pr-8 pl-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
                <p class="text-xs text-gray-400 mt-1">Refinance rates may be higher than purchase mortgage rates and vary by lender, loan type, DSCR, and borrower profile.</p>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Refinance Loan Term</label>
                <select v-model.number="form.refiTerm" class="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition bg-white">
                  <option :value="30">30 years</option>
                  <option :value="25">25 years</option>
                  <option :value="20">20 years</option>
                  <option :value="15">15 years</option>
                </select>
              </div>
            </div>
          </div>

          <!-- ─── 3. RENTAL INCOME ─── -->
          <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div class="px-5 py-3 border-b border-gray-100 flex items-center gap-3" style="background: #f8fafc;">
              <span class="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0" style="background: #1e3a5f;">3</span>
              <span class="font-bold text-sm" style="color: #1e3a5f;">Rental Income</span>
            </div>
            <div class="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Monthly Rent</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input v-model.number="form.monthlyRent" type="number" min="0" step="50" placeholder="Enter monthly rent"
                    class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Vacancy Rate</label>
                <div class="relative">
                  <input v-model.number="form.vacancyRate" type="number" min="0" max="50" step="0.5" placeholder="Enter vacancy rate %"
                    class="w-full pr-8 pl-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Monthly Operating Expenses</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input v-model.number="form.monthlyExpenses" type="number" min="0" step="50" placeholder="Enter monthly operating expenses"
                    class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Annual Replacement Reserves</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input v-model.number="form.annualReserves" type="number" min="0" step="100" placeholder="Enter annual reserves"
                    class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
            </div>
          </div>

          <!-- ─── 4. STRATEGY TARGETS ─── -->
          <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div class="px-5 py-3 border-b border-gray-100 flex items-center gap-3" style="background: #f8fafc;">
              <span class="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0" style="background: #1e3a5f;">4</span>
              <span class="font-bold text-sm" style="color: #1e3a5f;">Strategy Targets</span>
            </div>
            <div class="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Target Cash Left in Deal</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input v-model.number="form.targetCashLeft" type="number" min="0" step="1000" placeholder="Optional: target cash left in deal"
                    class="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Target cash left is your personal threshold. Default 0 means you are testing for full capital recovery.</p>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1.5">Scenario Name</label>
                <input v-model="form.scenarioName" type="text" placeholder="Optional: name this scenario"
                  class="w-full px-4 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-sm transition" />
              </div>
            </div>
          </div>

        </div>

        <!-- ═══════ RESULTS PANEL ═══════ -->
        <div class="self-stretch rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl border-t border-gray-200 lg:border-t-0 lg:border-l bg-gray-50 mt-5 lg:mt-0">
          <div class="lg:sticky lg:top-[4.5rem] min-w-0 w-full bg-gray-50 flex flex-col">
          <div class="lg:max-h-[calc(100vh-5rem)] lg:overflow-y-auto space-y-4 p-4 lg:p-5">

            <!-- PRIMARY VERDICT BADGE -->
            <div v-if="hasResult" class="rounded-2xl overflow-hidden" :style="`background: linear-gradient(135deg, ${verdict.color}, ${verdict.colorDark})`">
              <div class="px-5 pt-5 pb-4">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-widest text-white/70">BRRRR Refinance Result</span>
                  <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 text-white">{{ verdict.label }}</span>
                </div>
                <div class="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p class="text-xs text-white/70 mb-1">Cash Left in Deal</p>
                    <p class="text-2xl font-extrabold text-white leading-none">{{ formatCurrency(cashLeftInDeal) }}</p>
                    <p class="text-xs text-white/70 mt-1">Recovery: {{ cashRecoveryPctDisplay }}</p>
                  </div>
                  <div>
                    <p class="text-xs text-white/70 mb-1">Cash-on-Cash on Cash Left</p>
                    <p class="text-2xl font-extrabold text-white leading-none">{{ cocDisplay }}</p>
                    <p class="text-xs text-white/70 mt-1">annual return</p>
                  </div>
                </div>
                <div class="bg-white/20 rounded-xl p-3 text-xs text-white">{{ verdict.context }}</div>
              </div>
            </div>

            <!-- PLACEHOLDER -->
            <div v-else class="rounded-xl p-8 text-center border border-dashed border-gray-200 bg-white">
              <p class="text-gray-400 font-medium text-sm">Enter project costs, refinance assumptions, and rental income to see BRRRR refinance analysis</p>
              <p class="text-xs text-gray-300 mt-1">Before-tax analysis</p>
            </div>

            <!-- VERDICT EXPLANATION -->
            <div v-if="hasResult" class="bg-white rounded-xl border border-gray-200 p-4">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Verdict Explanation</p>
              <p class="text-sm text-gray-600">Verdict is based on three core tests: 1. Cash recovery, 2. DSCR after refinance, 3. Cash flow after refinance. The most conservative signal controls the final verdict.</p>
              <p class="text-xs text-gray-500 mt-2">Controlling factor: <span class="font-bold" :style="`color: ${verdict.color}`">{{ verdict.controllingFactor }}</span></p>
            </div>

            <!-- 4 KEY METRICS -->
            <div v-if="hasResult" class="grid grid-cols-2 gap-3">
              <div class="bg-white rounded-xl border border-gray-200 p-3">
                <p class="text-xs text-gray-400 mb-1 font-semibold">Cash Recovery %</p>
                <p class="text-sm font-extrabold" :class="cashRecoveryPct >= 90 ? 'text-green-600' : cashRecoveryPct >= 70 ? 'text-amber-600' : 'text-red-600'">{{ cashRecoveryPctDisplay }}</p>
                <p class="text-xs text-gray-500 mt-0.5">of invested capital</p>
              </div>
              <div class="bg-white rounded-xl border border-gray-200 p-3">
                <p class="text-xs text-gray-400 mb-1 font-semibold">DSCR After Refi</p>
                <p class="text-sm font-extrabold" :class="hasRefiRate ? (dscrAfterRefi >= 1.25 ? 'text-green-600' : dscrAfterRefi >= 1.0 ? 'text-amber-600' : 'text-red-600') : 'text-gray-400'">
                  <span v-if="hasRefiRate">{{ dscrAfterRefi.toFixed(2) }}x</span>
                  <span v-else>N/A</span>
                </p>
                <p class="text-xs text-gray-500 mt-0.5">{{ hasRefiRate ? 'debt coverage' : 'no rate entered' }}</p>
              </div>
              <div class="bg-white rounded-xl border border-gray-200 p-3">
                <p class="text-xs text-gray-400 mb-1 font-semibold">Annual Cash Flow</p>
                <p class="text-sm font-extrabold" :class="annualCashFlowAfterRefi >= 0 ? 'text-green-600' : 'text-red-600'">
                  {{ hasRefiRate ? formatCurrency(annualCashFlowAfterRefi) : formatCurrency(annualNOI) }}
                </p>
                <p class="text-xs text-gray-500 mt-0.5">{{ hasRefiRate ? 'after debt service' : 'before debt service' }}</p>
              </div>
              <div class="bg-white rounded-xl border border-gray-200 p-3">
                <p class="text-xs text-gray-400 mb-1 font-semibold">Equity Remaining</p>
                <p class="text-sm font-extrabold text-blue-700">{{ formatCurrency(equityRemaining) }}</p>
                <p class="text-xs text-gray-500 mt-0.5">appraised − refi loan</p>
              </div>
            </div>

            <!-- RISK FLAGS -->
            <div v-if="hasResult && riskFlags.length > 0" class="bg-white rounded-xl border border-gray-200 p-4">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Risk Flags</p>
              <div class="space-y-2">
                <div v-for="flag in riskFlags" :key="flag.msg" class="flex items-start gap-2 p-2 rounded-lg" :class="flag.level === 'critical' ? 'bg-red-50 border border-red-200' : 'bg-amber-50 border border-amber-200'">
                  <span class="text-sm flex-shrink-0 mt-0.5">{{ flag.level === 'critical' ? '🔴' : '🟡' }}</span>
                  <p class="text-xs" :class="flag.level === 'critical' ? 'text-red-800' : 'text-amber-800'">{{ flag.msg }}</p>
                </div>
              </div>
            </div>

            <!-- REFINANCE BREAKDOWN -->
            <div v-if="hasResult" class="bg-white rounded-xl border border-gray-200 p-4">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Refinance Breakdown</p>
              <div class="space-y-1.5 text-sm">
                <div class="flex justify-between"><span class="text-gray-500">Total Project Cost</span><span class="font-semibold">{{ formatCurrency(totalProjectCost) }}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">Cash Invested Used</span><span class="font-semibold">{{ formatCurrency(cashInvestedUsed) }}</span></div>
                <div class="flex justify-between border-t border-gray-100 pt-1.5"><span class="text-gray-500">Refi Loan ({{ form.appraisedValue ? formatCurrency(form.appraisedValue) : '—' }} × {{ form.refiLTV || 75 }}%)</span><span class="font-semibold text-blue-700">{{ formatCurrency(refiLoanAmount) }}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">− Existing Debt Payoff</span><span class="font-semibold text-red-400">-{{ formatCurrency(form.debtPayoff || 0) }}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">− Refi Closing Costs</span><span class="font-semibold text-red-400">-{{ formatCurrency(form.refiClosingCosts || 0) }}</span></div>
                <div class="flex justify-between border-t border-gray-100 pt-2 font-bold" style="color:#1e3a5f;"><span>= Net Refinance Proceeds</span><span>{{ formatCurrency(netRefiProceeds) }}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">Cash Recovered</span><span class="font-semibold text-green-600">{{ formatCurrency(cashRecovered) }}</span></div>
                <div class="flex justify-between border-t border-gray-100 pt-2 font-extrabold text-base" :style="`color: ${verdict.color}`">
                  <span>Cash Left in Deal</span>
                  <span>{{ formatCurrency(cashLeftInDeal) }}</span>
                </div>
              </div>
            </div>

            <!-- RENTAL / POST-REFI BREAKDOWN -->
            <div v-if="hasResult" class="bg-white rounded-xl border border-gray-200 p-4">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Post-Refinance Rental</p>
              <div class="space-y-1.5 text-sm">
                <div class="flex justify-between"><span class="text-gray-500">Annual Rent</span><span class="font-semibold">{{ formatCurrency(annualRent) }}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">− Vacancy Loss ({{ form.vacancyRate || 0 }}%)</span><span class="font-semibold text-red-400">-{{ formatCurrency(vacancyLoss) }}</span></div>
                <div class="flex justify-between"><span class="text-gray-600 font-medium">= Effective Income</span><span class="font-semibold">{{ formatCurrency(effectiveIncome) }}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">− Operating Expenses</span><span class="font-semibold text-red-400">-{{ formatCurrency(annualOperatingExpenses) }}</span></div>
                <div class="flex justify-between border-t border-gray-100 pt-1.5 font-bold" style="color:#1e3a5f;"><span>= NOI</span><span>{{ formatCurrency(annualNOI) }}</span></div>
                <template v-if="hasRefiRate">
                  <div class="flex justify-between"><span class="text-gray-500">− Annual Debt Service</span><span class="font-semibold text-red-400">-{{ formatCurrency(annualDebtService) }}</span></div>
                  <div class="flex justify-between border-t border-gray-100 pt-1.5 font-extrabold text-base" :class="annualCashFlowAfterRefi >= 0 ? 'text-green-600' : 'text-red-600'">
                    <span>= Annual Cash Flow</span>
                    <span>{{ formatCurrency(annualCashFlowAfterRefi) }}</span>
                  </div>
                  <div class="flex justify-between text-xs text-gray-400"><span>Monthly</span><span class="font-medium">{{ formatCurrency(annualCashFlowAfterRefi / 12) }}/mo</span></div>
                  <div class="flex justify-between text-xs text-gray-400 pt-1"><span>DSCR</span><span class="font-bold">{{ dscrAfterRefi.toFixed(2) }}x</span></div>
                </template>
                <div v-else class="text-xs text-amber-700 bg-amber-50 p-2 rounded-lg mt-1">Cash flow shown before debt service — enter refinance interest rate to see full analysis.</div>
              </div>
            </div>

            <!-- RESERVE-ADJUSTED CASH FLOW -->
            <div v-if="hasResult && (form.annualReserves || 0) > 0" class="bg-white rounded-xl border border-gray-200 p-4">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Reserve-Adjusted Cash Flow</p>
              <div class="space-y-1.5 text-sm">
                <div class="flex justify-between"><span class="text-gray-500">Annual Cash Flow</span><span class="font-semibold">{{ formatCurrency(hasRefiRate ? annualCashFlowAfterRefi : annualNOI) }}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">− Replacement Reserves</span><span class="font-semibold text-red-400">-{{ formatCurrency(form.annualReserves || 0) }}</span></div>
                <div class="flex justify-between border-t border-gray-100 pt-1.5 font-bold" :class="reserveAdjustedCashFlow >= 0 ? 'text-green-600' : 'text-red-600'">
                  <span>= Reserve-Adjusted CF</span>
                  <span>{{ formatCurrency(reserveAdjustedCashFlow) }}</span>
                </div>
              </div>
              <p class="text-xs text-gray-400 mt-2">Replacement reserves are shown separately and are not included in NOI by default.</p>
            </div>

            <!-- ADVANCED OUTPUTS -->
            <div v-if="hasResult" class="bg-white rounded-xl border border-gray-200 p-4">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Advanced Outputs</p>
              <div class="space-y-1.5 text-sm">
                <div class="flex justify-between"><span class="text-gray-500">Cash-on-Cash on Cash Left</span><span class="font-semibold">{{ cocDisplay }}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">Break-Even Appraised Value</span><span class="font-semibold">{{ formatCurrency(breakEvenAppraisedValue) }}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">Appraisal Gap to Full Recovery</span><span class="font-semibold" :class="appraisalGap > 0 ? 'text-red-600' : 'text-green-600'">{{ appraisalGap > 0 ? formatCurrency(appraisalGap) : 'None' }}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">LTV After Refinance</span><span class="font-semibold">{{ ltvAfterRefi }}%</span></div>
              </div>
            </div>

            <!-- SENSITIVITY TABLE -->
            <div v-if="hasResult" class="bg-white rounded-xl border border-gray-200 p-4">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Sensitivity: Appraised Value × LTV → Cash Left in Deal</p>
              <div class="overflow-x-auto">
                <table class="w-full text-xs">
                  <thead>
                    <tr class="border-b border-gray-100">
                      <th class="text-left py-1.5 pr-2 font-bold text-gray-500">Appraised</th>
                      <th v-for="ltv in [70,75,80]" :key="ltv" class="text-center py-1.5 px-2 font-bold text-gray-500">{{ ltv }}% LTV</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="row in sensitivityTable" :key="row.label" class="border-b border-gray-50">
                      <td class="py-1.5 pr-2 font-semibold text-gray-600">{{ row.label }}</td>
                      <td v-for="ltv in [70,75,80]" :key="ltv" class="text-center py-1.5 px-2 font-bold" :class="row[ltv] <= 0 ? 'text-emerald-600' : row[ltv] <= 15000 ? 'text-amber-600' : 'text-red-600'">
                        {{ row[ltv] <= 0 ? formatCurrency(0) : formatCurrency(row[ltv]) }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- COC ANTI-HYPE NOTE -->
            <div v-if="hasResult && cashLeftInDeal <= 5000" class="bg-amber-50 border border-amber-200 rounded-xl p-3">
              <p class="text-xs text-amber-800">Cash-on-cash becomes misleading when little or no cash remains in the deal.</p>
            </div>

            <!-- ACTION BUTTONS -->
            <div v-if="hasResult" class="p-4 border-t border-gray-100 space-y-2">
              <button @click="openSaveScenario"
                class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
                style="background: #f59e0b; color: #1e3a5f;">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>
                Save Scenario
              </button>
              <div class="grid grid-cols-2 gap-2">
                <button @click="shareResult"
                  class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border"
                  :class="shareSuccess ? 'border-green-400 text-green-700 bg-green-50' : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'">
                  <svg v-if="!shareSuccess" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  {{ shareSuccess ? 'Copied!' : 'Share' }}
                </button>
                <button @click="exportPDF"
                  class="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  Export PDF
                </button>
              </div>
            </div>

          </div>
          </div>
        </div>

      </div>

      </div>
      </div>
    </main>

    <!-- ═══════════════════════════════════════════════
         SCENARIO PANEL
    ═══════════════════════════════════════════════ -->
    <div class="max-w-[1100px] mx-auto px-4 pb-6 mt-4">
      <ScenarioPanel
        calculator="brrrr-refinance"
        :has-result="hasResult"
        :result="currentScenarioResult"
        :trigger-save="triggerScenarioSave"
        @saved="onScenarioSaved"
      />
    </div>

    <!-- ═══════════════════════════════════════════════
         INFO BLOCKS
    ═══════════════════════════════════════════════ -->
    <div class="max-w-[1100px] mx-auto px-4 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="bg-white rounded-2xl border border-gray-200 p-5">
        <div class="flex items-start gap-3 mb-3">
          <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style="background: #fef3c7;">
            <svg class="w-5 h-5" style="color: #d97706;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div>
            <p class="font-bold text-sm text-gray-800">Refinance-Focused Analysis</p>
            <p class="text-xs text-gray-400 mt-0.5">Cash recovery + DSCR + cash flow</p>
          </div>
        </div>
        <p class="text-xs text-gray-600 leading-relaxed">Unlike a standard BRRRR calculator, this tool focuses specifically on the refinance event: how much capital comes back, how much stays trapped, and whether the property supports the new debt.</p>
      </div>
      <div class="bg-white rounded-2xl border border-gray-200 p-5">
        <div class="flex items-start gap-3 mb-3">
          <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style="background: #f0fdf4;">
            <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div>
            <p class="font-bold text-sm text-gray-800">Cash Recovered ≠ Profit</p>
            <p class="text-xs text-gray-400 mt-0.5">Critical distinction</p>
          </div>
        </div>
        <p class="text-xs text-gray-600 leading-relaxed">Cash recovered is your invested capital returned via refinance — it is NOT profit. Cash left in deal is the real capital still committed. Full cash-out is not guaranteed.</p>
      </div>
      <div class="bg-white rounded-2xl border border-amber-200 p-5">
        <div class="flex items-start gap-3 mb-3">
          <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style="background: #fef3c7;">
            <svg class="w-5 h-5" style="color: #d97706;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          </div>
          <div>
            <p class="font-bold text-sm text-gray-800">Planning Estimate Only</p>
            <p class="text-xs text-amber-700 mt-0.5">Not a guarantee</p>
          </div>
        </div>
        <p class="text-xs text-gray-600 leading-relaxed">This calculator does not guarantee appraisal value, full cash-out, refinance approval, or rent performance. Actual refinance depends on lender, appraisal, seasoning, DSCR, property type, and underwriting.</p>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         SEO CONTENT
    ═══════════════════════════════════════════════ -->
    <div class="max-w-[1100px] mx-auto px-4 pb-16 mt-12 space-y-12">

      <!-- OVERVIEW -->
      <section id="overview" class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Overview — BRRRR Refinance Calculator</h2>
        <div class="space-y-4 text-gray-600 text-sm leading-relaxed">
          <p>You bought, rehabbed, and rented. Now comes the moment of truth: the refinance. If appraisal, LTV, or DSCR fail, your cash stays trapped — and your BRRRR dies. This calculator helps you see if yours survives.</p>
          <p>"Pulling all your money out" is not automatic. One low appraisal, one strict lender, one weak DSCR — and the repeat part of BRRRR breaks. Check the refinance before you buy.</p>
          <p>Enter your total project costs, refinance assumptions, and rental income. The calculator outputs cash recovered, cash left in deal, cash recovery percentage, DSCR after refinance, cash flow after refinance, break-even appraised value, appraisal gap, and a conservative verdict based on all three signals.</p>
        </div>
      </section>

      <!-- HOW TO USE -->
      <section id="how-to-use" class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">How to Use the BRRRR Refinance Calculator</h2>
        <div class="space-y-4 text-gray-600 text-sm leading-relaxed">
          <p><strong>Step 1:</strong> Enter project costs — purchase price, rehab, closing costs, holding costs, and initial financing costs. Use the cash invested override if some costs were financed.</p>
          <p><strong>Step 2:</strong> Enter refinance assumptions — appraised value, LTV, closing costs, existing debt payoff, interest rate, and term.</p>
          <p><strong>Step 3:</strong> Enter rental income — monthly rent, vacancy rate, operating expenses, and replacement reserves.</p>
          <p><strong>Step 4:</strong> Review results — cash left in deal, DSCR, cash flow, break-even appraised value, and risk flags.</p>
        </div>
      </section>

      <!-- QUICK ANSWER -->
      <section class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">How Do You Know If a BRRRR Refinance Works?</h2>
        <div class="space-y-4 text-gray-600 text-sm leading-relaxed">
          <p>A BRRRR refinance works only if two things happen: 1) You recover enough cash, and 2) The rental still supports the new loan.</p>
          <p>Example: If you invest $200,000 and refinance at 75% of a $300,000 appraisal, the new loan is $225,000. But after debt payoff and refinance costs, you might recover only $150,000. That leaves $50,000 in the deal — still your capital at risk.</p>
        </div>
      </section>

      <!-- FORMULA -->
      <section id="formula" class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Core Formulas</h2>
        <div class="bg-gray-50 rounded-xl p-5 font-mono text-xs space-y-1.5 mb-6">
          <p><span class="text-gray-500">Total Project Cost =</span> Purchase + Rehab + Closing + Holding + Initial Financing</p>
          <p><span class="text-gray-500">Refi Loan =</span> Appraised Value × Refinance LTV</p>
          <p><span class="text-gray-500">Net Refi Proceeds =</span> Refi Loan − Debt Payoff − Refi Closing Costs</p>
          <p><span class="text-gray-500">Cash Recovered =</span> min(Net Proceeds, Cash Invested)</p>
          <p><span class="text-gray-500">Cash Left in Deal =</span> Cash Invested − Cash Recovered</p>
          <p><span class="text-gray-500">DSCR =</span> NOI ÷ Annual Refinance Debt Service</p>
        </div>
        <p class="text-sm text-gray-600">Cash recovered is NOT profit. Cash left in the deal is the real capital still committed.</p>
      </section>

      <!-- WHY BRRRR DEALS FAIL -->
      <section id="why-brrrr-fail" class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Why BRRRR Deals Fail</h2>
        <div class="space-y-4 text-gray-600 text-sm leading-relaxed">
          <p>BRRRR deals usually fail at refinance. Common reasons:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>Appraisal comes in low</li>
            <li>Rehab cost runs over budget</li>
            <li>Lender limits cash-out LTV</li>
            <li>Debt payoff eats proceeds</li>
            <li>Rent does not support DSCR</li>
            <li>Cash flow turns negative after refi</li>
          </ul>
          <p>The repeat step only works if refinance and cash flow both work.</p>
        </div>
      </section>

      <!-- CASH LEFT VS RECOVERED -->
      <section id="cash-left-vs-recovered" class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Cash Left vs Cash Recovered</h2>
        <div class="space-y-4 text-gray-600 text-sm leading-relaxed">
          <p>Cash recovered is the money you get back. Cash left in deal is the money still trapped.</p>
          <p>If you recover $150,000 from a $200,000 investment — you did not "get all your money back." You still have $50,000 committed. That changes liquidity, return, and your ability to repeat.</p>
        </div>
      </section>

      <!-- APPRAISAL GAP -->
      <section id="appraisal-gap" class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Appraisal Gap</h2>
        <div class="space-y-4 text-gray-600 text-sm leading-relaxed">
          <p>The appraisal controls the refinance. This calculator shows the break-even appraised value needed to recover your invested cash.</p>
          <p>If the required value is higher than realistic market value, the deal depends on an aggressive appraisal. That is a major risk.</p>
        </div>
      </section>

      <!-- DSCR AFTER REFINANCE -->
      <section id="dscr-after-refi" class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">DSCR After Refinance</h2>
        <div class="space-y-4 text-gray-600 text-sm leading-relaxed">
          <p>A BRRRR deal must support the new debt. If DSCR is weak: lender approval may be difficult, cash flow may be thin, and the property may not support the refinance loan.</p>
          <p>A full cash-out with bad DSCR is not a strong BRRRR.</p>
        </div>
      </section>

      <!-- COC AFTER BRRRR -->
      <section id="coc-after-brrrr" class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Cash-on-Cash After BRRRR</h2>
        <div class="space-y-4 text-gray-600 text-sm leading-relaxed">
          <p>Cash-on-cash return after BRRRR is based on cash left in the deal. If little or no cash remains, the percentage can become misleading.</p>
          <p>That is why this calculator shows cash left, DSCR, cash flow, and reserve-adjusted cash flow together.</p>
        </div>
      </section>

      <!-- LIMITATIONS -->
      <section id="limitations" class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Limitations</h2>
        <div class="space-y-4 text-gray-600 text-sm leading-relaxed">
          <p>This calculator does not guarantee: appraisal value, full cash-out, refinance approval, lender seasoning rules, or rent performance. Use it before you buy, then confirm with actual lender terms.</p>
          <p>This is a planning estimate. Actual refinance approval depends on lender, appraisal, seasoning, DSCR, property type, and underwriting.</p>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq" class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions</h2>
        <div class="space-y-5">
          <div v-for="(faq, i) in faqs" :key="i">
            <h3 class="font-bold text-gray-800 mb-2">{{ faq.q }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ faq.a }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-white rounded-2xl border border-gray-200 p-8 text-center">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Stop Guessing If Your Cash Comes Back</h2>
        <p class="text-gray-600 text-sm mb-6">Enter your numbers — see cash left, DSCR, and appraisal risk in 10 seconds.</p>
        <a href="#calculator" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition hover:opacity-90" style="background: #f59e0b; color: #1e3a5f;">
          Use Calculator Now
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
        </a>
      </section>

      <!-- RELATED CALCULATORS -->
      <section class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Related Calculators</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NuxtLink v-for="rc in relatedCalcs" :key="rc.to" :to="rc.to"
            class="group p-4 rounded-xl border border-gray-100 hover:border-yellow-400 transition flex flex-col">
            <p class="font-bold text-sm mb-1" style="color: #1e3a5f;">{{ rc.name }}</p>
            <p class="text-xs text-gray-500 flex-1">{{ rc.desc }}</p>
            <span class="inline-flex items-center gap-1 text-xs font-bold mt-2 group-hover:gap-2 transition-all" style="color: #f59e0b;">
              Open <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </NuxtLink>
        </div>
      </section>
    </div>

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
import { reactive, ref, computed, onMounted, nextTick } from 'vue'

// ─── SEO HEAD ────────────────────────────────────────────────────────────────
useHead({
  title: 'BRRRR Refinance Calculator — Cash Left, DSCR & Appraisal Risk (2026) | RealCalc',
  meta: [
    { name: 'description', content: 'Calculate BRRRR refinance proceeds, cash recovered, cash left in the deal, DSCR, appraisal gap, and post-refi cash flow.' },
    { property: 'og:title', content: 'BRRRR Refinance Calculator — Cash Left, DSCR & Appraisal Risk (2026) | RealCalc' },
    { property: 'og:description', content: 'Calculate BRRRR refinance proceeds, cash recovered, cash left in the deal, DSCR, appraisal gap, and post-refi cash flow.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'BRRRR Refinance Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description: 'Calculate BRRRR refinance proceeds, cash recovered, cash left in the deal, DSCR after refinance, appraisal gap, and post-refi cash flow for US real estate investors.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        featureList: 'Cash recovery analysis, DSCR after refinance, appraisal gap detection, break-even appraised value, reserve-adjusted cash flow, sensitivity analysis, PDF export'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How do you know if a BRRRR refinance works?', acceptedAnswer: { '@type': 'Answer', text: 'A BRRRR refinance works only if you recover enough cash AND the rental supports the new loan. Check both cash recovery and DSCR after refinance.' } },
          { '@type': 'Question', name: 'Is cash recovered the same as profit?', acceptedAnswer: { '@type': 'Answer', text: 'No. Cash recovered is your invested capital returned via refinance — it is NOT profit. Cash left in deal is the real capital still committed.' } },
          { '@type': 'Question', name: 'What is a good DSCR after BRRRR refinance?', acceptedAnswer: { '@type': 'Answer', text: 'Most lenders require DSCR of 1.15-1.25x minimum for cash-out refinance approval. Below 1.0x means the property cannot cover its own debt payments.' } },
          { '@type': 'Question', name: 'What is the break-even appraised value?', acceptedAnswer: { '@type': 'Answer', text: 'The minimum appraised value needed to recover all your invested cash through refinance. If the required value exceeds realistic market value, the deal depends on an aggressive appraisal.' } },
          { '@type': 'Question', name: 'Can a BRRRR refinance guarantee full cash-out?', acceptedAnswer: { '@type': 'Answer', text: 'No. Full cash-out depends on appraisal, lender LTV limits, debt payoff amount, and closing costs. This calculator helps you estimate proceeds before committing.' } }
        ]
      })
    }
  ]
})

// ─── STATE ───────────────────────────────────────────────────────────────────
const isNavExpanded = ref(false)
const shareSuccess = ref(false)
const triggerScenarioSave = ref(false)

function openSaveScenario() {
  triggerScenarioSave.value = true
  nextTick(() => { triggerScenarioSave.value = false })
}

// ─── FORM ────────────────────────────────────────────────────────────────────
const form = reactive({
  // Project Costs
  purchasePrice: null,
  rehabCost: null,
  purchaseClosing: null,
  holdingCosts: null,
  initialFinancingCosts: null,
  cashInvestedOverride: null,
  // Refinance Assumptions
  appraisedValue: null,
  refiLTV: null,
  refiClosingCosts: null,
  debtPayoff: null,
  refiRate: null,
  refiTerm: 30,
  // Rental Income
  monthlyRent: null,
  vacancyRate: null,
  monthlyExpenses: null,
  annualReserves: null,
  // Strategy Targets
  targetCashLeft: null,
  scenarioName: ''
})

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const formatCurrency = (val) => {
  if (val == null || isNaN(val)) return '$0'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)
}

// ─── CORE CALCULATIONS ───────────────────────────────────────────────────────

const totalProjectCost = computed(() => {
  return (form.purchasePrice || 0) + (form.rehabCost || 0) + (form.purchaseClosing || 0) + (form.holdingCosts || 0) + (form.initialFinancingCosts || 0)
})

const cashInvestedUsed = computed(() => {
  if (form.cashInvestedOverride != null && form.cashInvestedOverride > 0) return form.cashInvestedOverride
  return totalProjectCost.value
})

const showCashOverrideWarning = computed(() => {
  return form.cashInvestedOverride != null && form.cashInvestedOverride > 0 && form.cashInvestedOverride < totalProjectCost.value
})

const refiLoanAmount = computed(() => (form.appraisedValue || 0) * ((form.refiLTV || 75) / 100))

const netRefiProceeds = computed(() => refiLoanAmount.value - (form.debtPayoff || 0) - (form.refiClosingCosts || 0))

const cashRecovered = computed(() => {
  if (netRefiProceeds.value <= 0) return 0
  return Math.min(netRefiProceeds.value, cashInvestedUsed.value)
})

const cashLeftInDeal = computed(() => {
  const left = cashInvestedUsed.value - cashRecovered.value
  return Math.max(0, left)
})

const cashRecoveryPct = computed(() => {
  if (!cashInvestedUsed.value) return 0
  return (cashRecovered.value / cashInvestedUsed.value) * 100
})

const cashRecoveryPctDisplay = computed(() => {
  if (!cashInvestedUsed.value) return 'N/A'
  return cashRecoveryPct.value.toFixed(1) + '%'
})

const equityRemaining = computed(() => (form.appraisedValue || 0) - refiLoanAmount.value)

// ─── RENTAL / POST-REFI ─────────────────────────────────────────────────────

const annualRent = computed(() => (form.monthlyRent || 0) * 12)

const vacancyLoss = computed(() => annualRent.value * ((form.vacancyRate || 0) / 100))

const effectiveIncome = computed(() => annualRent.value - vacancyLoss.value)

const annualOperatingExpenses = computed(() => (form.monthlyExpenses || 0) * 12)

const annualNOI = computed(() => effectiveIncome.value - annualOperatingExpenses.value)

const hasRefiRate = computed(() => form.refiRate != null && form.refiRate > 0)

const monthlyMortgagePayment = computed(() => {
  const P = refiLoanAmount.value
  const annualRate = (form.refiRate || 0) / 100
  const n = (form.refiTerm || 30) * 12
  if (!P) return 0
  if (!annualRate) return P / n
  const r = annualRate / 12
  return P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
})

const annualDebtService = computed(() => monthlyMortgagePayment.value * 12)

const annualCashFlowAfterRefi = computed(() => annualNOI.value - annualDebtService.value)

const dscrAfterRefi = computed(() => {
  if (!annualDebtService.value) return 0
  return annualNOI.value / annualDebtService.value
})

const reserveAdjustedCashFlow = computed(() => {
  const baseCF = hasRefiRate.value ? annualCashFlowAfterRefi.value : annualNOI.value
  return baseCF - (form.annualReserves || 0)
})

// ─── CASH-ON-CASH ────────────────────────────────────────────────────────────

const cocDisplay = computed(() => {
  if (cashLeftInDeal.value === 0 && annualCashFlowAfterRefi.value > 0 && hasRefiRate.value) {
    return 'Infinite / no cash left'
  }
  if (cashLeftInDeal.value === 0) {
    return 'No cash left, but cash flow is not positive.'
  }
  if (cashLeftInDeal.value > 0 && hasRefiRate.value) {
    return (annualCashFlowAfterRefi.value / cashLeftInDeal.value * 100).toFixed(1) + '%'
  }
  if (cashLeftInDeal.value > 0) {
    return (annualNOI.value / cashLeftInDeal.value * 100).toFixed(1) + '%'
  }
  return 'N/A'
})

// ─── ADVANCED OUTPUTS ────────────────────────────────────────────────────────

const breakEvenAppraisedValue = computed(() => {
  const ltv = (form.refiLTV || 75) / 100
  if (!ltv) return 0
  // breakEvenAV × ltv - debtPayoff - refiClosing = cashInvestedUsed
  // For refi closing: assume same dollar amount
  const needed = cashInvestedUsed.value + (form.debtPayoff || 0) + (form.refiClosingCosts || 0)
  return Math.ceil(needed / ltv)
})

const appraisalGap = computed(() => {
  const gap = breakEvenAppraisedValue.value - (form.appraisedValue || 0)
  return Math.max(0, gap)
})

const ltvAfterRefi = computed(() => {
  if (!form.appraisedValue) return 0
  return ((refiLoanAmount.value / form.appraisedValue) * 100).toFixed(1)
})

// ─── VERDICT (conservative overlap) ──────────────────────────────────────────

const verdict = computed(() => {
  if (!hasResult.value) return { label: '—', color: '#6b7280', colorDark: '#4b5563', context: '', controllingFactor: '' }

  // Calculate individual signals
  let recoveryLevel = 'good'
  if (cashRecoveryPct.value >= 90) recoveryLevel = 'excellent'
  else if (cashRecoveryPct.value >= 70) recoveryLevel = 'good'
  else if (cashRecoveryPct.value >= 50) recoveryLevel = 'average'
  else recoveryLevel = 'poor'

  let dscrLevel = 'good'
  if (hasRefiRate.value) {
    if (dscrAfterRefi.value >= 1.25) dscrLevel = 'excellent'
    else if (dscrAfterRefi.value >= 1.15) dscrLevel = 'good'
    else if (dscrAfterRefi.value >= 1.0) dscrLevel = 'average'
    else dscrLevel = 'poor'
  }

  let cfLevel = 'good'
  if (hasRefiRate.value) {
    if (annualCashFlowAfterRefi.value > 3000) cfLevel = 'excellent'
    else if (annualCashFlowAfterRefi.value > 0) cfLevel = 'good'
    else cfLevel = 'poor'
  }

  // Most conservative wins
  const levels = { excellent: 4, good: 3, average: 2, poor: 1 }
  const signals = [
    { name: 'cash recovery', level: recoveryLevel },
    { name: 'DSCR', level: dscrLevel },
    { name: 'cash flow', level: cfLevel }
  ]

  // Add appraisal gap signal
  if (appraisalGap.value > 0) signals.push({ name: 'appraisal gap', level: 'poor' })
  if (parseFloat(ltvAfterRefi.value) > 80) signals.push({ name: 'high LTV', level: 'average' })

  const worst = signals.reduce((min, s) => levels[s.level] < levels[min.level] ? s : min, signals[0])

  if (netRefiProceeds.value <= 0) {
    return { label: 'Negative Proceeds', color: '#DC2626', colorDark: '#B91C1C', context: 'Refinance proceeds are negative. Cash recovered = $0. You would need to bring cash to the closing table.', controllingFactor: 'negative refinance proceeds' }
  }

  if (worst.level === 'excellent') {
    return { label: 'Excellent', color: '#059669', colorDark: '#047857', context: `Strong refinance outcome: ${cashRecoveryPctDisplay.value} recovery, solid DSCR, positive cash flow.`, controllingFactor: worst.name }
  }
  if (worst.level === 'good') {
    return { label: 'Good', color: '#2563eb', colorDark: '#1d4ed8', context: `Viable refinance: ${cashRecoveryPctDisplay.value} recovery with acceptable debt coverage and cash flow.`, controllingFactor: worst.name }
  }
  if (worst.level === 'average') {
    return { label: 'Average', color: '#F59E0B', colorDark: '#D97706', context: `Moderate refinance outcome. Review ${worst.name} before proceeding.`, controllingFactor: worst.name }
  }
  return { label: 'Poor', color: '#DC2626', colorDark: '#B91C1C', context: `Weak refinance outcome. ${worst.name} is the primary concern.`, controllingFactor: worst.name }
})

const hasResult = computed(() => {
  return !!(form.purchasePrice && form.appraisedValue && form.monthlyRent)
})

// ─── RISK FLAGS ──────────────────────────────────────────────────────────────

const riskFlags = computed(() => {
  if (!hasResult.value) return []
  const flags = []

  // Low cash recovery
  if (cashRecoveryPct.value < 70 && cashRecoveryPct.value > 0) {
    flags.push({ level: 'warning', msg: `Low cash recovery: ${cashRecoveryPctDisplay.value}. Significant capital remains trapped in the deal.` })
  }

  // High cash left
  if (cashLeftInDeal.value > 50000) {
    flags.push({ level: 'warning', msg: `High cash left in deal: ${formatCurrency(cashLeftInDeal.value)}. Consider whether BRRRR strategy applies.` })
  }

  // DSCR warnings
  if (hasRefiRate.value && dscrAfterRefi.value < 1.0) {
    flags.push({ level: 'critical', msg: `DSCR ${dscrAfterRefi.value.toFixed(2)}x is below 1.00. Property cannot cover debt service. Refinance unlikely to be approved.` })
  } else if (hasRefiRate.value && dscrAfterRefi.value < 1.15) {
    flags.push({ level: 'warning', msg: `DSCR ${dscrAfterRefi.value.toFixed(2)}x is below 1.15. Most lenders require 1.15-1.25x minimum for cash-out refi.` })
  }

  // Negative cash flow
  if (hasRefiRate.value && annualCashFlowAfterRefi.value < 0) {
    flags.push({ level: 'critical', msg: `Negative cash flow: ${formatCurrency(annualCashFlowAfterRefi.value)}/year. Property loses money after refinance debt service.` })
  }

  // Negative refi proceeds
  if (netRefiProceeds.value < 0) {
    flags.push({ level: 'critical', msg: `Negative refinance proceeds: ${formatCurrency(netRefiProceeds.value)}. Debt payoff and closing costs exceed new loan amount.` })
  }

  // Appraisal gap
  if (appraisalGap.value > 0) {
    flags.push({ level: 'warning', msg: `Appraisal gap: ${formatCurrency(appraisalGap.value)}. Appraised value needs to be ${formatCurrency(breakEvenAppraisedValue.value)} for full recovery.` })
  }

  // High LTV
  if (parseFloat(ltvAfterRefi.value) > 80) {
    flags.push({ level: 'warning', msg: `LTV after refinance is ${ltvAfterRefi.value}%. Many lenders cap cash-out refi at 75-80% LTV.` })
  }

  // High vacancy
  if ((form.vacancyRate || 0) > 15) {
    flags.push({ level: 'warning', msg: `High vacancy rate: ${form.vacancyRate}%. Verify against local market data.` })
  }

  // Reserve-adjusted cash flow warning
  if ((form.annualReserves || 0) > 0 && reserveAdjustedCashFlow.value <= 0) {
    flags.push({ level: 'warning', msg: 'Reserve-adjusted cash flow is not positive after setting aside replacement reserves.' })
  }

  // Cash invested override warning
  if (showCashOverrideWarning.value) {
    flags.push({ level: 'warning', msg: 'Cash invested override is less than calculated total project cost. Verify accuracy.' })
  }

  return flags
})

// ─── SENSITIVITY TABLE ───────────────────────────────────────────────────────

const sensitivityTable = computed(() => {
  if (!hasResult.value) return []
  const baseAV = form.appraisedValue || 0
  return [-10, -5, 0, 5, 10].map(d => {
    const av = Math.round(baseAV * (1 + d / 100))
    const row = { label: d === 0 ? 'Base' : `${d > 0 ? '+' : ''}${d}%` }
    for (const ltv of [70, 75, 80]) {
      const loan = av * (ltv / 100)
      const proceeds = loan - (form.debtPayoff || 0) - (form.refiClosingCosts || 0)
      const recovered = proceeds <= 0 ? 0 : Math.min(proceeds, cashInvestedUsed.value)
      row[ltv] = Math.max(0, cashInvestedUsed.value - recovered)
    }
    return row
  })
})

// ─── SCENARIO PANEL ──────────────────────────────────────────────────────────

const currentScenarioResult = computed(() => {
  if (!hasResult.value) return null
  return {
    label: verdict.value.label,
    value: formatCurrency(cashLeftInDeal.value),
    subValue: `Recovery: ${cashRecoveryPctDisplay.value}`,
    inputs: {
      'Purchase Price': formatCurrency(form.purchasePrice || 0),
      'Rehab Cost': formatCurrency(form.rehabCost || 0),
      'Appraised Value': formatCurrency(form.appraisedValue || 0),
      'Refi LTV': `${form.refiLTV || 75}%`,
      'Monthly Rent': formatCurrency(form.monthlyRent || 0)
    },
    metrics: {
      'Cash Left in Deal': formatCurrency(cashLeftInDeal.value),
      'Cash Recovery': cashRecoveryPctDisplay.value,
      'DSCR': hasRefiRate.value ? dscrAfterRefi.value.toFixed(2) + 'x' : 'N/A',
      'Annual Cash Flow': hasRefiRate.value ? formatCurrency(annualCashFlowAfterRefi.value) : formatCurrency(annualNOI.value),
      'Reserve-Adjusted CF': (form.annualReserves || 0) > 0 ? formatCurrency(reserveAdjustedCashFlow.value) : 'N/A',
      'Verdict': verdict.value.label
    }
  }
})

function onScenarioSaved(_id) {}

// ─── URL PARAMS ──────────────────────────────────────────────────────────────

const route = useRoute()

onMounted(() => {
  const q = route.query
  const n = (k) => { const v = parseFloat(q[k]); return isNaN(v) ? null : v }

  if (q.pp) form.purchasePrice = n('pp')
  if (q.rc) form.rehabCost = n('rc')
  if (q.pc) form.purchaseClosing = n('pc')
  if (q.hc) form.holdingCosts = n('hc')
  if (q.ifc) form.initialFinancingCosts = n('ifc')
  if (q.cio) form.cashInvestedOverride = n('cio')
  if (q.av) form.appraisedValue = n('av')
  if (q.rltv) form.refiLTV = n('rltv')
  if (q.rcc) form.refiClosingCosts = n('rcc')
  if (q.dp) form.debtPayoff = n('dp')
  if (q.rr) form.refiRate = n('rr')
  if (q.rt) form.refiTerm = n('rt') || 30
  if (q.mr) form.monthlyRent = n('mr')
  if (q.vr) form.vacancyRate = n('vr')
  if (q.me) form.monthlyExpenses = n('me')
  if (q.ar) form.annualReserves = n('ar')
  if (q.tcl) form.targetCashLeft = n('tcl')
})

// ─── SHARE & PDF ─────────────────────────────────────────────────────────────

async function shareResult() {
  const p = new URLSearchParams()
  if (form.purchasePrice) p.set('pp', form.purchasePrice)
  if (form.rehabCost) p.set('rc', form.rehabCost)
  if (form.purchaseClosing) p.set('pc', form.purchaseClosing)
  if (form.holdingCosts) p.set('hc', form.holdingCosts)
  if (form.initialFinancingCosts) p.set('ifc', form.initialFinancingCosts)
  if (form.cashInvestedOverride) p.set('cio', form.cashInvestedOverride)
  if (form.appraisedValue) p.set('av', form.appraisedValue)
  if (form.refiLTV) p.set('rltv', form.refiLTV)
  if (form.refiClosingCosts) p.set('rcc', form.refiClosingCosts)
  if (form.debtPayoff) p.set('dp', form.debtPayoff)
  if (form.refiRate) p.set('rr', form.refiRate)
  if (form.refiTerm) p.set('rt', form.refiTerm)
  if (form.monthlyRent) p.set('mr', form.monthlyRent)
  if (form.vacancyRate) p.set('vr', form.vacancyRate)
  if (form.monthlyExpenses) p.set('me', form.monthlyExpenses)
  if (form.annualReserves) p.set('ar', form.annualReserves)
  const url = `${window.location.origin}${window.location.pathname}?${p.toString()}`
  try { await navigator.clipboard.writeText(url) } catch {
    const el = document.createElement('input'); el.value = url
    document.body.appendChild(el); el.select(); document.execCommand('copy'); document.body.removeChild(el)
  }
  shareSuccess.value = true
  setTimeout(() => { shareSuccess.value = false }, 2000)
}

async function exportPDF() {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF()
  const navy = [30, 58, 95], gold = [245, 158, 11]
  doc.setFillColor(...navy); doc.rect(0, 0, 210, 38, 'F')
  doc.setTextColor(255, 255, 255); doc.setFontSize(22); doc.setFont('helvetica', 'bold'); doc.text('RealCalc', 20, 18)
  doc.setFontSize(11); doc.setFont('helvetica', 'normal'); doc.text('BRRRR Refinance — Cash Recovery Report', 20, 28)
  doc.setFontSize(8); doc.text(`${new Date().toLocaleDateString('en-US', {year:'numeric',month:'long',day:'numeric'})}`, 155, 20)
  let y = 50
  doc.setFontSize(12); doc.setFont('helvetica','bold'); doc.setTextColor(...navy); doc.text('BRRRR Refinance Analysis', 20, y); y += 8
  const rows = [
    ['Total Project Cost', formatCurrency(totalProjectCost.value)],
    ['Cash Invested Used', formatCurrency(cashInvestedUsed.value)],
    ['Appraised Value', formatCurrency(form.appraisedValue || 0)],
    ['Refi Loan Amount', formatCurrency(refiLoanAmount.value)],
    ['Net Refi Proceeds', formatCurrency(netRefiProceeds.value)],
    ['Cash Recovered', formatCurrency(cashRecovered.value)],
    ['Cash Left in Deal', formatCurrency(cashLeftInDeal.value)],
    ['Cash Recovery %', cashRecoveryPctDisplay.value],
    ['Equity Remaining', formatCurrency(equityRemaining.value)],
    ['NOI', formatCurrency(annualNOI.value)],
    ['Annual Debt Service', formatCurrency(annualDebtService.value)],
    ['Annual Cash Flow', formatCurrency(annualCashFlowAfterRefi.value)],
    ['DSCR', hasRefiRate.value ? dscrAfterRefi.value.toFixed(2) + 'x' : 'N/A'],
    ['Break-Even Appraised Value', formatCurrency(breakEvenAppraisedValue.value)],
    ['Verdict', verdict.value.label]
  ]
  doc.setFontSize(9)
  rows.forEach(([label, value]) => {
    doc.setFont('helvetica','normal'); doc.setTextColor(80,80,80); doc.text(label, 20, y)
    doc.setFont('helvetica','bold'); doc.setTextColor(...navy); doc.text(String(value), 140, y, {align:'right'}); y += 7
  })
  doc.setFillColor(...gold); doc.rect(0, 280, 210, 17, 'F')
  doc.setTextColor(...navy); doc.setFontSize(8); doc.setFont('helvetica','bold')
  doc.text('RealCalc — Free Real Estate Investment Calculator Hub | Before-tax analysis', 105, 291, {align:'center'})
  doc.save('brrrr-refinance-analysis.pdf')
}

// ─── STATIC DATA ─────────────────────────────────────────────────────────────

const faqs = [
  { q: 'How do you know if a BRRRR refinance works?', a: 'A BRRRR refinance works only if two things happen: you recover enough cash AND the rental supports the new loan. Check both cash recovery percentage and DSCR after refinance. A full cash-out with weak DSCR is not a strong BRRRR.' },
  { q: 'Is cash recovered the same as profit?', a: 'No. Cash recovered is your invested capital returned via refinance — it is NOT profit. Cash left in deal is the real capital still committed. If you recover $150,000 from a $200,000 investment, you still have $50,000 in the deal.' },
  { q: 'What is a good DSCR after BRRRR refinance?', a: 'Most lenders require DSCR of 1.15-1.25x minimum for cash-out refinance approval on investment property. Below 1.0x means the property cannot cover its own debt payments. Target 1.25x or higher for comfortable approval.' },
  { q: 'What is the break-even appraised value?', a: 'The minimum appraised value needed to recover all your invested cash through refinance. If the required value exceeds realistic market value, the deal depends on an aggressive appraisal — that is a major risk.' },
  { q: 'Can a BRRRR refinance guarantee full cash-out?', a: 'No. Full cash-out depends on appraisal, lender LTV limits, debt payoff amount, and closing costs. One low appraisal, one strict lender, one weak DSCR — and the repeat part of BRRRR breaks. Check the refinance before you buy.' },
  { q: 'What happens if refinance proceeds are negative?', a: 'If the existing debt payoff plus closing costs exceed the new loan amount, refinance proceeds are negative. Cash recovered = $0 and you may need to bring cash to the closing table. This is a critical warning.' },
  { q: 'Should I include replacement reserves in NOI?', a: 'By convention, NOI does not include replacement reserves. This calculator shows reserve-adjusted cash flow separately. Reserves reduce your actual available cash flow but are not included in the standard NOI calculation used for DSCR.' }
]

const relatedCalcs = [
  { to: '/brrrr-calculator', name: 'BRRRR Calculator', desc: 'Full BRRRR strategy view — Buy, Rehab, Rent, Refinance, Repeat analysis.' },
  { to: '/arv-calculator', name: 'ARV Calculator', desc: 'Validate after-repair value with comparable sales.' },
  { to: '/dscr-calculator', name: 'DSCR Calculator', desc: 'Test refinance debt coverage in detail.' },
  { to: '/ltv-calculator', name: 'LTV Calculator', desc: 'Check refinance leverage and LTV limits.' },
  { to: '/cash-on-cash-calculator', name: 'Cash-on-Cash Calculator', desc: 'Measure return on cash left in deal.' },
  { to: '/rental-property-calculator', name: 'Rental Property Calculator', desc: 'Evaluate stabilized rental after refinance.' },
  { to: '/noi-calculator', name: 'NOI Calculator', desc: 'Detailed net operating income breakdown.' }
]
</script>
