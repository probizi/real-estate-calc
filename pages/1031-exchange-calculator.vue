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

    <!-- BREADCRUMB -->
    <div class="bg-white border-b border-gray-100 px-4 py-3">
      <div class="max-w-[1100px] mx-auto">
        <nav aria-label="Breadcrumb">
          <ol class="flex items-center gap-2 text-sm text-gray-400">
            <li><NuxtLink to="/" class="hover:text-gray-600 transition">Home</NuxtLink></li>
            <li><span>/</span></li>
            <li><NuxtLink to="/calculators" class="hover:text-gray-600 transition">Calculators</NuxtLink></li>
            <li><span>/</span></li>
            <li class="text-gray-700 font-semibold">1031 Exchange Calculator</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- PAGE TITLE + ON THIS PAGE NAV -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-6">
        <div class="mb-4">
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            1031 Exchange Calculator — Tax Deferred + Eligibility Verdict
          </h1>
          <p class="text-gray-500 mt-2 text-base">45/180-day deadlines, boot taxation, depreciation recapture — for tax-strategy decisions before selling</p>
        </div>

        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            <li><a href="#search-entry-hooks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Common Questions</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            <li><a href="#what-is" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is 1031?</a></li>
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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"/>
          </svg>
          <span>1031 Exchange</span>
        </div>
        <div class="flex items-center gap-3">
          <template v-if="results">
            <span class="text-xl font-extrabold leading-none" :class="results.tax_deferred > 0 ? 'text-green-600' : 'text-red-600'">
              {{ fmtK(results.tax_deferred) }} deferred
            </span>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full border" :class="verdictCfg(results.verdict).badge">
              {{ verdictCfg(results.verdict).shortLabel }}
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

      <div class="rounded-3xl p-[3px]" style="background: linear-gradient(135deg, #1e3a5f 0%, #f59e0b 50%, #1e3a5f 100%);">
      <div class="bg-white rounded-[21px] shadow-xl shadow-slate-200/60" style="overflow: clip;">

      <!-- Calculator grid -->
      <div class="grid lg:grid-cols-[3fr_2fr] gap-0">

        <!-- ══ LEFT: INPUTS ══ -->
        <div class="border-r border-gray-100 p-6 space-y-6">

          <!-- RELINQUISHED PROPERTY -->
          <div>
            <h2 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Relinquished Property (Sale)</h2>
            <div class="space-y-3">
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="sale_price">Sale Price</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                    <input id="sale_price" v-model.number="inp.sale_price" type="number" min="0" step="1000"
                      placeholder="Enter sale price"
                      class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="selling_costs_pct">Selling Costs %</label>
                  <div class="relative">
                    <input id="selling_costs_pct" v-model.number="inp.selling_costs_pct" type="number" min="0" max="20" step="0.5"
                      placeholder="Commission + closing"
                      class="w-full pl-4 pr-8 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="original_purchase_price">Original Purchase Price</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                    <input id="original_purchase_price" v-model.number="inp.original_purchase_price" type="number" min="0" step="1000"
                      placeholder="Enter original cost"
                      class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="original_closing_costs">Original Closing Costs</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                    <input id="original_closing_costs" v-model.number="inp.original_closing_costs" type="number" min="0" step="500"
                      placeholder="At purchase (default zero)"
                      class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="capital_improvements">Capital Improvements</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                    <input id="capital_improvements" v-model.number="inp.capital_improvements" type="number" min="0" step="1000"
                      placeholder="Renovations added to basis"
                      class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="years_held">Years Held</label>
                  <input id="years_held" v-model.number="inp.years_held" type="number" min="0" max="50" step="1"
                    placeholder="Hold period for auto-depreciation"
                    class="w-full px-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="current_loan_balance">Mortgage Payoff at Sale</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                    <input id="current_loan_balance" v-model.number="inp.current_loan_balance" type="number" min="0" step="1000"
                      placeholder="Loan balance to pay off"
                      class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="total_depreciation_taken">
                    Depreciation Taken
                    <span v-if="autoDepreciation > 0" class="ml-1 text-xs font-normal text-blue-600">(auto)</span>
                  </label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                    <input id="total_depreciation_taken" v-model="inp.total_depreciation_taken" type="number" min="0" step="1000"
                      :placeholder="autoDepreciation > 0 ? 'Auto: ' + fmtDollarFull(autoDepreciation) : 'From Schedule E tax returns'"
                      class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                  <p v-if="autoDepreciation > 0 && !inp.total_depreciation_taken" class="mt-1 text-xs text-blue-600">
                    Using auto: {{ fmtDollarFull(autoDepreciation) }} (27.5yr simplified)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- REPLACEMENT PROPERTY -->
          <div>
            <h2 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Replacement Property (Purchase)</h2>
            <div class="space-y-3">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1" for="replacement_purchase_price">Replacement Property Price</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                  <input id="replacement_purchase_price" v-model.number="inp.replacement_purchase_price" type="number" min="0" step="1000"
                    placeholder="Full purchase price of replacement"
                    class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                </div>
                <p class="mt-1 text-xs text-gray-500">For full deferral: must be ≥ your net sale proceeds</p>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="replacement_loan_amount">New Mortgage Amount</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                    <input id="replacement_loan_amount" v-model.number="inp.replacement_loan_amount" type="number" min="0" step="1000"
                      placeholder="Replacement property loan"
                      class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="cash_boot_received">Cash Boot Received</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                    <input id="cash_boot_received" v-model.number="inp.cash_boot_received" type="number" min="0" step="1000"
                      placeholder="Cash taken out of exchange"
                      class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- TAX PROFILE -->
          <div>
            <h2 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Tax Profile</h2>
            <div class="space-y-3">
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="filing_status">Filing Status</label>
                  <select id="filing_status" v-model="inp.filing_status"
                    class="w-full px-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition bg-white">
                    <option value="mfj">Married Filing Jointly</option>
                    <option value="single">Single</option>
                    <option value="hoh">Head of Household</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="federal_ltcg_bracket">Federal LTCG Bracket</label>
                  <select id="federal_ltcg_bracket" v-model.number="inp.federal_ltcg_bracket"
                    class="w-full px-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition bg-white">
                    <option :value="0">0% (low income)</option>
                    <option :value="15">15% (most investors)</option>
                    <option :value="20">20% (high income)</option>
                  </select>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="state_cg_rate">State Cap Gains Rate %</label>
                  <div class="relative">
                    <input id="state_cg_rate" v-model.number="inp.state_cg_rate" type="number" min="0" max="20" step="0.1"
                      placeholder="Set to zero for FL TX NV WA"
                      class="w-full pl-4 pr-8 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1" for="annual_income">Annual Income (AGI)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">$</span>
                    <input id="annual_income" v-model.number="inp.annual_income" type="number" min="0" step="10000"
                      placeholder="For NIIT threshold check"
                      class="w-full pl-7 pr-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
                  </div>
                </div>
              </div>
              <!-- NIIT status badge -->
              <div class="flex items-center gap-2 p-3 rounded-xl" :class="niitApplies ? 'bg-amber-50 border border-amber-200' : 'bg-gray-50 border border-gray-200'">
                <svg class="w-4 h-4 flex-shrink-0" :class="niitApplies ? 'text-amber-600' : 'text-gray-400'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-xs font-semibold" :class="niitApplies ? 'text-amber-700' : 'text-gray-500'">
                  NIIT 3.8%:
                  <span v-if="!inp.annual_income">enter AGI to check</span>
                  <span v-else-if="niitApplies">APPLIES — AGI exceeds {{ inp.filing_status === 'mfj' ? '$250K MFJ' : '$200K Single' }} threshold</span>
                  <span v-else>not applicable — AGI below threshold</span>
                </span>
              </div>
            </div>
          </div>

          <!-- EXCHANGE TIMING -->
          <div>
            <h2 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Exchange Timing</h2>
            <div class="space-y-3">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1" for="sale_date">Closing Date of Sale</label>
                <input id="sale_date" v-model="inp.sale_date" type="date"
                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 focus:outline-none text-gray-900 font-semibold text-sm transition" />
              </div>
              <div v-if="inp.sale_date" class="grid grid-cols-2 gap-3">
                <div class="p-3 rounded-xl bg-blue-50 border border-blue-200">
                  <p class="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">45-Day Deadline</p>
                  <p class="text-sm font-bold text-blue-900">{{ fmtDateStr(identificationDeadline) }}</p>
                  <p class="text-xs text-blue-700 mt-0.5">Identify replacement in writing</p>
                </div>
                <div class="p-3 rounded-xl bg-blue-50 border border-blue-200">
                  <p class="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">180-Day Deadline</p>
                  <p class="text-sm font-bold text-blue-900">{{ fmtDateStr(exchangeDeadline) }}</p>
                  <p class="text-xs text-blue-700 mt-0.5">Close on replacement property</p>
                </div>
              </div>
              <p class="text-xs text-gray-500 italic">Both deadlines are calendar days — no business-day extensions. Missing 45-day = exchange dead even within 180-day window.</p>
            </div>
          </div>

        </div><!-- end LEFT INPUTS -->

        <!-- ══ RIGHT: RESULTS ══ -->
        <div class="p-6 space-y-5 lg:overflow-y-auto">

          <!-- EMPTY STATE -->
          <div v-if="!results" class="flex flex-col items-center justify-center py-16 text-center">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style="background: #f0f4f9;">
              <svg class="w-8 h-8" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"/>
              </svg>
            </div>
            <p class="text-gray-500 text-sm font-medium">Enter sale price, replacement price,<br>and original purchase price to begin.</p>
          </div>

          <!-- RESULTS PANEL -->
          <template v-if="results">

            <!-- ─── 3b. ELIGIBILITY VERDICT ─── -->
            <div class="rounded-2xl border-2 p-5" :class="[verdictCfg(results.verdict).bg, verdictCfg(results.verdict).border]">
              <div class="flex items-start justify-between mb-3">
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest mb-1" :class="verdictCfg(results.verdict).text">
                    1031 Eligibility Verdict
                  </p>
                  <div class="flex items-center gap-2">
                    <span class="text-2xl">{{ verdictCfg(results.verdict).icon }}</span>
                    <span class="text-xl font-extrabold" :class="verdictCfg(results.verdict).text">
                      {{ verdictCfg(results.verdict).label }}
                    </span>
                  </div>
                  <p class="text-sm mt-1" :class="verdictCfg(results.verdict).text">{{ results.verdict_subtitle }}</p>
                </div>
              </div>

              <!-- 4-condition check -->
              <div class="space-y-1.5 mb-3">
                <div class="flex items-center gap-2 text-xs" :class="results.days_until_id >= 0 ? 'text-green-700' : 'text-red-700'">
                  <span>{{ results.days_until_id >= 0 ? '✓' : '✗' }}</span>
                  <span>45-day identification window:
                    <strong>{{ results.days_until_id >= 0 ? results.days_until_id + ' days remaining' : Math.abs(results.days_until_id) + ' days PAST deadline' }}</strong>
                  </span>
                </div>
                <div class="flex items-center gap-2 text-xs" :class="results.days_until_exchange >= 0 ? 'text-green-700' : 'text-red-700'">
                  <span>{{ results.days_until_exchange >= 0 ? '✓' : '✗' }}</span>
                  <span>180-day exchange window:
                    <strong>{{ results.days_until_exchange >= 0 ? results.days_until_exchange + ' days remaining' : Math.abs(results.days_until_exchange) + ' days PAST deadline' }}</strong>
                  </span>
                </div>
                <div class="flex items-center gap-2 text-xs" :class="results.realized_gain > 0 ? 'text-green-700' : 'text-red-700'">
                  <span>{{ results.realized_gain > 0 ? '✓' : '✗' }}</span>
                  <span>Gain on sale: <strong>{{ results.realized_gain > 0 ? fmtDollarFull(results.realized_gain) : 'Loss — 1031 not applicable' }}</strong></span>
                </div>
                <div class="flex items-center gap-2 text-xs text-amber-700">
                  <span>⚠</span>
                  <span>Like-kind + QI + IRS compliance: <strong>ASSUMED (cannot verify)</strong></span>
                </div>
              </div>

              <!-- ELIGIBILITY ASSUMED disclaimer -->
              <div class="p-2.5 rounded-lg bg-white/60 text-xs text-gray-600 italic">
                Verdict ASSUMED based on inputs. Final eligibility requires Qualified Intermediary, like-kind property classification, and IRS compliance. Consult a 1031-specialized CPA before initiating.
              </div>
            </div>

            <!-- ─── 3c. PRIMARY RESULT CARD ─── -->
            <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Tax Deferred via 1031 Exchange</p>

              <div class="text-center mb-4">
                <div class="text-4xl font-extrabold mb-1" :class="results.tax_deferred > 0 ? 'text-green-600' : 'text-gray-400'">
                  {{ fmtDollarFull(results.tax_deferred) }}
                </div>
                <div class="text-sm text-gray-500">tax deferred vs straight sale</div>
              </div>

              <div class="grid grid-cols-2 gap-3 mb-3">
                <div class="text-center p-3 rounded-xl bg-red-50">
                  <div class="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">Straight Sale Tax</div>
                  <div class="text-lg font-extrabold text-red-700">{{ fmtDollarFull(results.total_tax_if_sold) }}</div>
                </div>
                <div class="text-center p-3 rounded-xl bg-green-50">
                  <div class="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">1031 Exchange Tax</div>
                  <div class="text-lg font-extrabold text-green-700">{{ fmtDollarFull(results.tax_if_exchanged) }}</div>
                  <div class="text-xs text-green-600">{{ results.total_boot > 0 ? 'boot tax only' : 'full deferral' }}</div>
                </div>
              </div>

              <!-- TAX DEFERRED DISCLAIMER (mandatory) -->
              <div class="flex items-start gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200">
                <span class="text-amber-600 text-sm flex-shrink-0 mt-0.5">⚠</span>
                <p class="text-xs text-amber-800 font-medium">
                  Tax <strong>DEFERRED</strong>, not eliminated. Tax is owed when the replacement property is eventually sold (unless chained into another 1031). Basis transfers to replacement.
                </p>
              </div>

              <div class="mt-3 p-2 bg-gray-50 rounded-lg text-xs text-gray-500 text-center italic">
                Estimate only — consult a CPA or Qualified Intermediary before executing
              </div>
            </div>

            <!-- ─── 3d. TAX COMPARISON BAR ─── -->
            <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Tax Comparison</p>

              <div class="space-y-3">
                <!-- Straight Sale Bar -->
                <div>
                  <div class="flex justify-between items-center mb-1">
                    <span class="text-xs font-semibold text-gray-600">Straight Sale Tax</span>
                    <span class="text-xs font-bold text-red-700">{{ fmtDollarFull(results.total_tax_if_sold) }}</span>
                  </div>
                  <div class="h-7 bg-gray-100 rounded-lg overflow-hidden flex">
                    <div v-if="results.federal_recapture_tax > 0"
                      class="h-full bg-red-700 flex items-center justify-center"
                      :style="{ width: pctOfTotal(results.federal_recapture_tax, results.total_tax_if_sold) + '%' }"
                      :title="'Recapture: ' + fmtDollarFull(results.federal_recapture_tax)">
                      <span v-if="pctOfTotal(results.federal_recapture_tax, results.total_tax_if_sold) > 12" class="text-white text-xs font-bold">R</span>
                    </div>
                    <div v-if="results.federal_ltcg_tax > 0"
                      class="h-full bg-red-500 flex items-center justify-center"
                      :style="{ width: pctOfTotal(results.federal_ltcg_tax, results.total_tax_if_sold) + '%' }"
                      :title="'Fed LTCG: ' + fmtDollarFull(results.federal_ltcg_tax)">
                      <span v-if="pctOfTotal(results.federal_ltcg_tax, results.total_tax_if_sold) > 12" class="text-white text-xs font-bold">LTCG</span>
                    </div>
                    <div v-if="results.state_tax > 0"
                      class="h-full bg-orange-400 flex items-center justify-center"
                      :style="{ width: pctOfTotal(results.state_tax, results.total_tax_if_sold) + '%' }"
                      :title="'State: ' + fmtDollarFull(results.state_tax)">
                      <span v-if="pctOfTotal(results.state_tax, results.total_tax_if_sold) > 12" class="text-white text-xs font-bold">ST</span>
                    </div>
                    <div v-if="results.niit_tax > 0"
                      class="h-full bg-orange-300 flex items-center justify-center"
                      :style="{ width: pctOfTotal(results.niit_tax, results.total_tax_if_sold) + '%' }"
                      :title="'NIIT: ' + fmtDollarFull(results.niit_tax)">
                      <span v-if="pctOfTotal(results.niit_tax, results.total_tax_if_sold) > 12" class="text-white text-xs font-bold">NIIT</span>
                    </div>
                  </div>
                </div>

                <!-- 1031 Exchange Bar -->
                <div>
                  <div class="flex justify-between items-center mb-1">
                    <span class="text-xs font-semibold text-gray-600">1031 Exchange Tax</span>
                    <span class="text-xs font-bold text-green-700">{{ fmtDollarFull(results.tax_if_exchanged) }}</span>
                  </div>
                  <div class="h-7 bg-gray-100 rounded-lg overflow-hidden flex">
                    <div v-if="results.tax_if_exchanged > 0"
                      class="h-full bg-green-500 flex items-center justify-center"
                      :style="{ width: Math.max(3, pctOfTotal(results.tax_if_exchanged, results.total_tax_if_sold)) + '%' }">
                      <span v-if="pctOfTotal(results.tax_if_exchanged, results.total_tax_if_sold) > 15" class="text-white text-xs font-bold">Boot Tax</span>
                    </div>
                    <div v-else class="w-full flex items-center justify-center">
                      <span class="text-xs font-bold text-green-600">$0 — Full Deferral</span>
                    </div>
                  </div>
                </div>

                <!-- Legend -->
                <div class="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                  <span class="flex items-center gap-1 text-xs text-gray-500"><span class="inline-block w-3 h-3 rounded bg-red-700"></span>Recapture (25%)</span>
                  <span class="flex items-center gap-1 text-xs text-gray-500"><span class="inline-block w-3 h-3 rounded bg-red-500"></span>Fed LTCG</span>
                  <span class="flex items-center gap-1 text-xs text-gray-500"><span class="inline-block w-3 h-3 rounded bg-orange-400"></span>State</span>
                  <span v-if="results.niit_tax > 0" class="flex items-center gap-1 text-xs text-gray-500"><span class="inline-block w-3 h-3 rounded bg-orange-300"></span>NIIT</span>
                </div>

                <div class="text-center p-2 rounded-xl" style="background: #f0fdf4;">
                  <span class="text-sm font-bold text-green-700">Tax Deferred: {{ fmtDollarFull(results.tax_deferred) }}</span>
                  <span v-if="results.total_tax_if_sold > 0" class="text-xs text-green-600 ml-2">
                    ({{ Math.round(results.tax_deferred / results.total_tax_if_sold * 100) }}% reduction)
                  </span>
                </div>
              </div>
            </div>

            <!-- ─── 3e. DEADLINE TIMELINE ─── -->
            <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm" :class="timelineUrgencyClass">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Exchange Timeline</p>

              <div class="space-y-4">
                <!-- 45-Day Timeline -->
                <div>
                  <div class="flex justify-between items-center mb-1.5">
                    <div class="flex items-center gap-1.5">
                      <span class="text-sm">⏱</span>
                      <span class="text-xs font-semibold text-gray-700">45-Day Identification</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                      <span class="text-xs font-bold" :class="timelineIdColor">
                        {{ results.days_until_id >= 0 ? results.days_until_id + ' days left' : 'EXPIRED' }}
                      </span>
                      <span class="text-xs px-1.5 py-0.5 rounded-full font-bold" :class="timelineIdBadge">
                        {{ timelineIdStatus }}
                      </span>
                    </div>
                  </div>
                  <div class="h-4 bg-gray-100 rounded-full overflow-hidden relative">
                    <div class="h-full rounded-full transition-all duration-500"
                      :class="timelineIdBarColor"
                      :style="{ width: Math.max(0, Math.min(100, (results.days_since_sale / 45) * 100)) + '%' }">
                    </div>
                  </div>
                  <div class="flex justify-between mt-1 text-xs text-gray-400">
                    <span>Sale: {{ inp.sale_date ? fmtDateStr(inp.sale_date) : '—' }}</span>
                    <span>{{ fmtDateStr(identificationDeadline) }}</span>
                  </div>
                </div>

                <!-- 180-Day Timeline -->
                <div>
                  <div class="flex justify-between items-center mb-1.5">
                    <div class="flex items-center gap-1.5">
                      <span class="text-sm">⏱</span>
                      <span class="text-xs font-semibold text-gray-700">180-Day Exchange</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                      <span class="text-xs font-bold" :class="timelineExColor">
                        {{ results.days_until_exchange >= 0 ? results.days_until_exchange + ' days left' : 'EXPIRED' }}
                      </span>
                    </div>
                  </div>
                  <div class="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-500"
                      :class="timelineExBarColor"
                      :style="{ width: Math.max(0, Math.min(100, (results.days_since_sale / 180) * 100)) + '%' }">
                    </div>
                  </div>
                  <div class="flex justify-between mt-1 text-xs text-gray-400">
                    <span>Sale: {{ inp.sale_date ? fmtDateStr(inp.sale_date) : '—' }}</span>
                    <span>{{ fmtDateStr(exchangeDeadline) }}</span>
                  </div>
                </div>

                <!-- Status label -->
                <div class="text-center p-2 rounded-lg border text-xs font-semibold" :class="timelineStatusClass">
                  Status: {{ timelineStatusLabel }}
                </div>
              </div>
            </div>

            <!-- ─── 3f. SECONDARY METRICS ─── -->
            <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Tax Breakdown</p>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <div class="p-2 rounded-lg bg-gray-50">
                  <div class="text-gray-500 mb-0.5">Adjusted Basis</div>
                  <div class="font-bold text-gray-900">{{ fmtDollarFull(results.adjusted_basis) }}</div>
                </div>
                <div class="p-2 rounded-lg bg-gray-50">
                  <div class="text-gray-500 mb-0.5">Realized Gain</div>
                  <div class="font-bold" :class="results.realized_gain > 0 ? 'text-gray-900' : 'text-red-600'">{{ fmtDollarFull(results.realized_gain) }}</div>
                </div>
                <div class="p-2 rounded-lg bg-gray-50">
                  <div class="text-gray-500 mb-0.5">Recapture Portion (25%)</div>
                  <div class="font-bold text-gray-900">{{ fmtDollarFull(results.recapture_portion) }}</div>
                </div>
                <div class="p-2 rounded-lg bg-gray-50">
                  <div class="text-gray-500 mb-0.5">LTCG Portion ({{ inp.federal_ltcg_bracket }}%)</div>
                  <div class="font-bold text-gray-900">{{ fmtDollarFull(results.ltcg_portion) }}</div>
                </div>
                <div class="p-2 rounded-lg bg-red-50">
                  <div class="text-red-600 mb-0.5">Federal Recapture Tax</div>
                  <div class="font-bold text-red-700">{{ fmtDollarFull(results.federal_recapture_tax) }}</div>
                </div>
                <div class="p-2 rounded-lg bg-red-50">
                  <div class="text-red-600 mb-0.5">Federal LTCG Tax</div>
                  <div class="font-bold text-red-700">{{ fmtDollarFull(results.federal_ltcg_tax) }}</div>
                </div>
                <div class="p-2 rounded-lg bg-red-50">
                  <div class="text-red-600 mb-0.5">State CG Tax
                    <span class="inline-block ml-1 cursor-help" title="Simplified: flat % on total gain. Actual state treatment varies.">ⓘ</span>
                  </div>
                  <div class="font-bold text-red-700">{{ fmtDollarFull(results.state_tax) }}</div>
                </div>
                <div class="p-2 rounded-lg" :class="results.niit_tax > 0 ? 'bg-red-50' : 'bg-gray-50'">
                  <div class="mb-0.5" :class="results.niit_tax > 0 ? 'text-red-600' : 'text-gray-500'">
                    NIIT (3.8%)
                    <span class="inline-block ml-1 cursor-help" title="Simplified: 3.8% × full gain. Actual NIIT may be lower at marginal AGI.">ⓘ</span>
                  </div>
                  <div class="font-bold" :class="results.niit_tax > 0 ? 'text-red-700' : 'text-gray-400'">
                    {{ results.niit_tax > 0 ? fmtDollarFull(results.niit_tax) : 'N/A' }}
                  </div>
                </div>
              </div>
              <div class="mt-3 p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-500 italic">
                ⓘ State tax simplified (flat %). ⓘ NIIT is upper-bound estimate. Actual amounts may differ — consult CPA.
              </div>
            </div>

            <!-- ─── 3f cont. NET PROCEEDS ─── -->
            <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Net Proceeds Comparison</p>
              <div class="grid grid-cols-2 gap-3">
                <div class="p-3 rounded-xl bg-red-50 border border-red-200">
                  <div class="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">Straight Sale</div>
                  <div class="text-lg font-extrabold text-red-800">{{ fmtDollarFull(results.net_proceeds_if_sold) }}</div>
                  <div class="text-xs text-red-600 mt-0.5">free cash to investor</div>
                </div>
                <div class="p-3 rounded-xl bg-green-50 border border-green-200">
                  <div class="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">1031 Exchange</div>
                  <div class="text-lg font-extrabold text-green-800">{{ fmtDollarFull(results.equity_deployed) }}</div>
                  <div class="text-xs text-green-600 mt-0.5">equity deployed into replacement</div>
                </div>
              </div>
              <p class="mt-2 text-xs text-gray-500 italic">
                1031 equity is locked into replacement property — not spendable. Free cash to investor: {{ fmtDollarFull(Math.max(0, results.remaining_cash)) }} (cash boot minus boot tax).
              </p>
            </div>

            <!-- ─── 3g. BOOT ALLOCATION (CONDITIONAL) ─── -->
            <div v-if="results.total_boot > 0" class="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">Boot Taxation Breakdown (Recapture-First)</p>

              <!-- Boot composition -->
              <div class="grid grid-cols-3 gap-2 mb-3">
                <div class="p-2 rounded-lg bg-white border border-amber-200 text-center">
                  <div class="text-xs text-amber-600 mb-0.5">Cash Boot</div>
                  <div class="text-sm font-bold text-amber-900">{{ fmtDollarFull(results.cash_boot) }}</div>
                </div>
                <div class="p-2 rounded-lg bg-white border border-amber-200 text-center">
                  <div class="text-xs text-amber-600 mb-0.5">Mortgage Boot</div>
                  <div class="text-sm font-bold text-amber-900">{{ fmtDollarFull(results.mortgage_boot) }}</div>
                </div>
                <div class="p-2 rounded-lg bg-white border border-amber-200 text-center">
                  <div class="text-xs text-amber-600 mb-0.5">Trade-Down</div>
                  <div class="text-sm font-bold text-amber-900">{{ fmtDollarFull(results.trade_down_boot) }}</div>
                </div>
              </div>
              <div class="text-center mb-3 p-2 bg-white rounded-lg border border-amber-200">
                <span class="text-xs text-amber-600">Total Boot: </span>
                <span class="text-base font-extrabold text-amber-900">{{ fmtDollarFull(results.total_boot) }}</span>
              </div>

              <!-- Boot stacked bar visualization -->
              <div class="mb-3">
                <div class="h-6 bg-gray-100 rounded-lg overflow-hidden flex" v-if="results.total_boot > 0">
                  <div v-if="results.cash_boot > 0"
                    class="h-full bg-amber-500"
                    :style="{ width: pctOfTotal(results.cash_boot, results.total_boot) + '%' }"
                    :title="'Cash Boot: ' + fmtDollarFull(results.cash_boot)">
                  </div>
                  <div v-if="results.mortgage_boot > 0"
                    class="h-full bg-amber-700"
                    :style="{ width: pctOfTotal(results.mortgage_boot, results.total_boot) + '%' }"
                    :title="'Mortgage Boot: ' + fmtDollarFull(results.mortgage_boot)">
                  </div>
                  <div v-if="results.trade_down_boot > 0"
                    class="h-full bg-orange-500"
                    :style="{ width: pctOfTotal(results.trade_down_boot, results.total_boot) + '%' }"
                    :title="'Trade-Down Boot: ' + fmtDollarFull(results.trade_down_boot)">
                  </div>
                </div>
                <div class="flex gap-3 mt-1 text-xs text-gray-500">
                  <span v-if="results.cash_boot > 0" class="flex items-center gap-1"><span class="inline-block w-2.5 h-2.5 rounded-sm bg-amber-500"></span>Cash</span>
                  <span v-if="results.mortgage_boot > 0" class="flex items-center gap-1"><span class="inline-block w-2.5 h-2.5 rounded-sm bg-amber-700"></span>Mortgage</span>
                  <span v-if="results.trade_down_boot > 0" class="flex items-center gap-1"><span class="inline-block w-2.5 h-2.5 rounded-sm bg-orange-500"></span>Trade-Down</span>
                </div>
              </div>

              <!-- Boot tax detail (RECAPTURE-FIRST) -->
              <div class="space-y-1.5 text-xs">
                <div class="flex justify-between p-2 bg-white rounded-lg border border-amber-100">
                  <span class="text-gray-700">Recapture Portion: {{ fmtDollarFull(results.boot_recapture_portion) }} × 25%</span>
                  <span class="font-bold text-red-700">{{ fmtDollarFull(results.boot_recapture_tax) }}</span>
                </div>
                <div class="flex justify-between p-2 bg-white rounded-lg border border-amber-100">
                  <span class="text-gray-700">LTCG Portion: {{ fmtDollarFull(results.boot_ltcg_portion) }} × {{ inp.federal_ltcg_bracket }}%</span>
                  <span class="font-bold text-red-700">{{ fmtDollarFull(results.boot_ltcg_tax) }}</span>
                </div>
                <div class="flex justify-between p-2 bg-white rounded-lg border border-amber-100">
                  <div class="flex items-center gap-1">
                    <span class="text-gray-700">State Tax: {{ fmtDollarFull(results.total_boot) }} × {{ inp.state_cg_rate || 0 }}%</span>
                    <span class="cursor-help text-amber-600" title="State tax estimated using flat rate — actual state treatment of recapture may differ">ⓘ</span>
                  </div>
                  <span class="font-bold text-red-700">{{ fmtDollarFull(results.boot_state_tax) }}</span>
                </div>
                <div v-if="niitApplies" class="flex justify-between p-2 bg-white rounded-lg border border-amber-100">
                  <div class="flex items-center gap-1">
                    <span class="text-gray-700">NIIT: {{ fmtDollarFull(results.total_boot) }} × 3.8%</span>
                    <span class="cursor-help text-amber-600" title="NIIT shown is upper-bound estimate. Actual NIIT may be lower if AGI marginally exceeds threshold">ⓘ</span>
                  </div>
                  <span class="font-bold text-red-700">{{ fmtDollarFull(results.boot_niit) }}</span>
                </div>
                <div class="flex justify-between p-2.5 bg-amber-100 rounded-lg font-bold">
                  <span class="text-amber-900">TOTAL BOOT TAX</span>
                  <span class="text-red-700">{{ fmtDollarFull(results.total_boot_tax) }}</span>
                </div>
              </div>
              <p class="mt-2 text-xs text-amber-700 italic">
                Boot triggers depreciation recapture FIRST (25% federal), then LTCG bracket. Per IRC §1245/§1250 + §1031.
              </p>
            </div>

            <!-- ─── 3h. SENSITIVITY TABLE ─── -->
            <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Sensitivity — Tax Deferred</p>
              <p class="text-xs text-gray-500 mb-3">Sale Price × Federal LTCG Bracket</p>

              <div class="overflow-x-auto">
                <table class="w-full text-xs border-collapse">
                  <thead>
                    <tr>
                      <th class="text-left p-2 text-gray-500 font-semibold border-b border-gray-200">Sale Price</th>
                      <th class="text-center p-2 text-gray-500 font-semibold border-b border-gray-200">0% LTCG</th>
                      <th class="text-center p-2 text-gray-500 font-semibold border-b border-gray-200">15% LTCG</th>
                      <th class="text-center p-2 text-gray-500 font-semibold border-b border-gray-200">20% LTCG</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="row in sensitivityTable" :key="row.price" class="border-b border-gray-100">
                      <td class="p-2 font-semibold text-gray-700">{{ fmtK(row.price) }}</td>
                      <td v-for="bracket in [0, 15, 20]" :key="bracket"
                        class="p-2 text-center font-bold rounded-md"
                        :class="[
                          sensitivityCellClass(row[bracket]),
                          isCurrentSensCell(row.price, bracket) ? 'ring-2 ring-indigo-500 ring-inset' : ''
                        ]">
                        {{ fmtK(row[bracket]) }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="mt-2 text-xs text-gray-400 italic">Current selection highlighted with indigo border. Green = ≥$50K deferred, light green = $20K-50K, amber = $5K-20K, red = &lt;$5K.</p>
            </div>

            <!-- ─── 3i. SCENARIOS ─── -->
            <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Scenario Comparison</p>
              <div class="grid grid-cols-3 gap-2">
                <div v-for="sc in scenarios" :key="sc.label" class="p-3 rounded-xl border" :class="sc.isBase ? 'border-indigo-300 bg-indigo-50' : 'border-gray-200 bg-gray-50'">
                  <div class="text-xs font-bold mb-2" :class="sc.isBase ? 'text-indigo-700' : 'text-gray-600'">{{ sc.label }}</div>
                  <div v-if="sc.r" class="space-y-1.5">
                    <div>
                      <div class="text-xs text-gray-500">Tax Deferred</div>
                      <div class="text-sm font-extrabold" :class="sc.r.tax_deferred > 0 ? 'text-green-600' : 'text-gray-400'">
                        {{ fmtK(sc.r.tax_deferred) }}
                      </div>
                    </div>
                    <div>
                      <div class="text-xs text-gray-500">Verdict</div>
                      <div class="text-xs font-bold" :class="verdictCfg(sc.r.verdict).text">
                        {{ verdictCfg(sc.r.verdict).shortLabel }}
                      </div>
                    </div>
                    <div>
                      <div class="text-xs text-gray-500">Sale Price</div>
                      <div class="text-xs font-semibold text-gray-700">{{ fmtK(sc.salePrice) }}</div>
                    </div>
                  </div>
                  <div v-else class="text-xs text-gray-400 italic">—</div>
                </div>
              </div>
              <p class="mt-2 text-xs text-gray-400 italic">Conservative: −5% sale price, +20% selling costs. Optimistic: +5% sale price, −20% selling costs. Scenarios stress-test sale-side variance only.</p>
            </div>

            <!-- ─── 3j. KEY INSIGHT CARD ─── -->
            <div v-if="results.key_insight" class="rounded-2xl border-2 p-4"
              :class="{
                'border-red-400 bg-red-50': results.key_insight.severity === 'red',
                'border-amber-400 bg-amber-50': results.key_insight.severity === 'amber',
                'border-blue-400 bg-blue-50': results.key_insight.severity === 'info',
                'border-green-400 bg-green-50': results.key_insight.severity === 'success',
              }">
              <div class="flex items-start gap-3">
                <span class="text-xl flex-shrink-0 mt-0.5">
                  {{ results.key_insight.severity === 'red' ? '🚨' : results.key_insight.severity === 'amber' ? '⚠️' : results.key_insight.severity === 'success' ? '✅' : 'ℹ️' }}
                </span>
                <p class="text-sm font-medium"
                  :class="{
                    'text-red-800': results.key_insight.severity === 'red',
                    'text-amber-800': results.key_insight.severity === 'amber',
                    'text-blue-800': results.key_insight.severity === 'info',
                    'text-green-800': results.key_insight.severity === 'success',
                  }">
                  {{ results.key_insight.message }}
                </p>
              </div>
            </div>

            <!-- Share + PDF -->
            <div class="p-4 border-t border-gray-100 space-y-2">
              <!-- 1. PRIMARY: Save -->
              <button @click="openSaveScenario"
                class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
                style="background: #f59e0b; color: #1e3a5f;">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>
                Save Scenario
              </button>
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
            </div>

          </template>
        </div><!-- end RIGHT RESULTS -->

      </div><!-- end Calculator grid -->
      </div>
      </div>
    </main><!-- end calculator main -->

    <!-- ═══════════════════════════════════════════════
         SECTION 4: SAVED SCENARIOS (ScenarioPanel)
    ═══════════════════════════════════════════════ -->
    <div class="max-w-[1100px] mx-auto px-4 pb-6 mt-4">
      <ScenarioPanel
        calculator="1031-exchange"
        :has-result="!!results"
        :result="currentScenarioResult"
        :trigger-save="triggerScenarioSave"
        @saved="onScenarioSaved"
      />
    </div>

    <!-- ═══════════════════════════════════════════════
         SECTION 5: SEO CONTENT (16 sections)
    ═══════════════════════════════════════════════ -->
    <div class="max-w-[860px] mx-auto px-4 pb-16 space-y-16">

      <!-- ── 1. OVERVIEW ── -->
      <section id="overview">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Calculate Tax Deferred via 1031 Exchange + Eligibility Verdict</h2>
        <p class="text-gray-500 mb-6 text-sm">45/180-day deadlines, boot taxation, depreciation recapture — for tax-strategy decisions before selling</p>

        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>Selling a rental property and facing a $50,000–$200,000 capital gains tax bill? Use this 1031 Exchange Calculator to estimate exactly how much tax you can defer — including federal LTCG, depreciation recapture (25%), state capital gains, and NIIT (3.8%) — with a clear Eligibility Verdict and 45/180-day deadline countdown. The calculator answers the central question for every investor considering a tax-deferred swap: is the 1031 worth it at this deal size, and am I still in the eligibility window?</p>

          <p>Most 1031 calculators show only the Tax Deferred dollar amount. This one adds five layers that matter for real decisions: an Eligibility Verdict (ELIGIBLE — STRONG / ELIGIBLE — MODERATE / PARTIALLY DEFERRED / AT RISK / NOT ELIGIBLE) that grades not just structure but economic benefit; a live 45-day and 180-day deadline countdown with hard-fail logic; boot taxation using the correct IRS recapture-first allocation (not uniform LTCG rates); a comparison of straight sale vs full exchange vs partial exchange; and a Verdict downgrade when Tax Deferred falls below $10K — because the complexity of a 1031 often exceeds small savings.</p>

          <p>Common questions this calculator answers:</p>
          <ul class="list-disc list-inside space-y-1 ml-4 text-sm">
            <li>"How much capital gains tax do I defer with a 1031 vs straight sale?"</li>
            <li>"I'm 38 days post-sale — am I still eligible to identify replacement?"</li>
            <li>"My replacement property is $50K cheaper — how much boot tax do I owe?"</li>
            <li>"Is my benefit even worth the 1031 complexity at this size deal?"</li>
          </ul>
          <p class="text-sm italic text-gray-600">1031 exchanges <strong>DEFER</strong> capital gains tax into your replacement property — they don't eliminate it. Tax is owed when the replacement is sold (unless chained into another 1031). The deferral is real — but the math, deadlines, and structure decide whether it actually helps you.</p>
          <p class="text-sm">If you're evaluating whether replacement property fundamentals justify the exchange, run the candidate through our <NuxtLink to="/real-estate-roi-calculator" class="text-yellow-700 font-semibold hover:underline">Real Estate ROI Calculator</NuxtLink> for full ROI analysis alongside this tax-strategy view.</p>

          <p class="p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
            This calculator estimates 1031 exchange tax deferral for <strong>investment property only</strong> — not primary residence. Tax is <strong>DEFERRED, not eliminated</strong>. Eligibility shown is <strong>ASSUMED</strong> based on inputs — final eligibility depends on Qualified Intermediary, like-kind classification, and IRS compliance. State capital gains and NIIT calculations are simplified — actual amounts may differ. This tool is an estimation tool, not tax advice. Engage a 1031-specialized CPA before initiating an exchange.
          </p>
        </div>
      </section>

      <!-- ── 2. SEARCH ENTRY HOOKS ── -->
      <section id="search-entry-hooks">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">1031 Exchange Questions This Calculator Answers</h2>
        <p class="text-gray-500 mb-5 text-sm">Common long-tail queries — answered with real numbers</p>
        <p class="text-gray-700 mb-4">Investors come to this calculator with very specific questions. Here are the most common ones — answered with real numbers in seconds.</p>

        <div class="space-y-3">
          <div v-for="hook in searchHooks" :key="hook.q" class="p-4 rounded-xl border border-gray-200 bg-gray-50">
            <p class="text-sm font-bold text-gray-900 mb-1">{{ hook.q }}</p>
            <p class="text-sm text-gray-600">{{ hook.a }}</p>
          </div>
        </div>

        <p class="mt-5 text-sm text-gray-600 italic">Enter your numbers above for a complete answer to any of these questions.</p>
      </section>

      <!-- ── 3. HOW TO USE ── -->
      <section id="how-to-use">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">How to Use the 1031 Exchange Calculator</h2>
        <p class="text-gray-500 mb-6 text-sm">From property inputs to Eligibility Verdict and Tax Deferred amount</p>

        <div class="space-y-4">
          <div v-for="(step, i) in howToSteps" :key="i" class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-white font-bold text-sm" style="background: #1e3a5f;">{{ i + 1 }}</div>
            <div>
              <p class="font-bold text-gray-900 mb-1">{{ step.title }}</p>
              <p class="text-sm text-gray-700">{{ step.body }}</p>
            </div>
          </div>
        </div>

        <div class="mt-6 space-y-3">
          <h3 class="text-sm font-bold text-gray-700 uppercase tracking-wide">Pro Tips</h3>
          <div v-for="tip in proTips" :key="tip.title" class="p-4 rounded-xl bg-blue-50 border border-blue-200">
            <p class="text-sm font-bold text-blue-900 mb-1">{{ tip.title }}</p>
            <p class="text-sm text-blue-800">{{ tip.body }}</p>
          </div>
        </div>
      </section>

      <!-- ── 4. INPUTS & OUTPUTS ── -->
      <section id="inputs-outputs">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Inputs and Outputs</h2>

        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="border-b-2 border-gray-200">
                <th class="text-left p-3 font-bold text-gray-700">Input</th>
                <th class="text-left p-3 font-bold text-gray-700">Required</th>
                <th class="text-left p-3 font-bold text-gray-700">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-100 bg-gray-50"><td colspan="3" class="p-2 text-xs font-bold uppercase text-gray-400 tracking-wide">Relinquished Property</td></tr>
              <tr class="border-b border-gray-100" v-for="r in inputsTable" :key="r.name">
                <td class="p-3 text-gray-900">{{ r.name }}</td>
                <td class="p-3"><span class="text-xs font-bold px-2 py-0.5 rounded-full" :class="r.req ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-500'">{{ r.req ? 'Required' : 'Optional' }}</span></td>
                <td class="p-3 text-gray-600 text-sm">{{ r.def }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="border-b-2 border-gray-200">
                <th class="text-left p-3 font-bold text-gray-700">Output</th>
                <th class="text-left p-3 font-bold text-gray-700">Formula</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-100" v-for="o in outputsTable" :key="o.name">
                <td class="p-3 font-semibold text-gray-900">{{ o.name }}</td>
                <td class="p-3 text-gray-600 text-sm">{{ o.formula }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ── 5. FORMULA ── -->
      <section id="formula">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">1031 Exchange Calculation Step-by-Step (With Numbers)</h2>
        <p class="text-gray-500 mb-6 text-sm">The math behind Tax Deferred, Boot Taxation, and Eligibility checks</p>

        <h3 class="text-lg font-bold mb-3" style="color: #1e3a5f;">How 1031 Exchange Tax Is Calculated (3-Phase Approach)</h3>
        <p class="text-gray-700 mb-4">1031 exchange tax math has three phases: (1) Calculate what you'd owe in a straight sale — federal LTCG + depreciation recapture + state + NIIT layers. (2) Calculate boot if the exchange is partial — recapture-first allocation. (3) Tax Deferred = straight sale tax − boot tax from phase two.</p>

        <h3 class="text-lg font-bold mb-3" style="color: #1e3a5f;">Step-by-Step Calculation of 1031 Exchange Tax</h3>
        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Adjusted Basis</p>
            <code class="text-sm text-gray-800 block">Adjusted Basis = Original Price + Closing Costs + Capital Improvements − Depreciation Taken</code>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Realized Gain</p>
            <code class="text-sm text-gray-800 block">Net Sale Proceeds = Sale Price − Selling Costs − Mortgage Payoff<br>Realized Gain = Sale Price − Selling Costs − Adjusted Basis<br>Recapture Portion = MIN(Realized Gain, Depreciation Taken)<br>LTCG Portion = Realized Gain − Recapture Portion</code>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Tax If Sold (4 Layers)</p>
            <code class="text-sm text-gray-800 block">Federal Recapture Tax = Recapture Portion × 25%<br>Federal LTCG Tax = LTCG Portion × Federal LTCG Bracket<br>State Capital Gains Tax = Realized Gain × State Rate ⓘ simplified<br>NIIT = Realized Gain × 3.8% (if AGI > threshold) ⓘ simplified<br>Total Tax If Sold = sum</code>
          </div>
          <div class="p-4 rounded-xl bg-amber-50 border border-amber-200">
            <p class="text-xs font-bold uppercase tracking-wide text-amber-700 mb-2">Boot Taxation — RECAPTURE-FIRST (Critical)</p>
            <code class="text-sm text-amber-900 block">Boot Recapture Portion = MIN(Total Boot, Depreciation Taken)<br>Boot LTCG Portion = Total Boot − Boot Recapture Portion<br>Boot Recapture Tax = Boot Recapture Portion × 25%<br>Boot LTCG Tax = Boot LTCG Portion × Federal LTCG Bracket<br>Boot State Tax = Total Boot × State Rate<br>Boot NIIT = Total Boot × 3.8% (if applicable)<br>Total Boot Tax = sum</code>
          </div>
          <div class="p-4 rounded-xl bg-green-50 border border-green-200">
            <p class="text-xs font-bold uppercase tracking-wide text-green-700 mb-2">Tax Deferred</p>
            <code class="text-sm text-green-900 block">Tax Deferred = Total Tax If Sold − Total Boot Tax</code>
          </div>
        </div>

        <h3 class="text-lg font-bold mt-8 mb-3" style="color: #1e3a5f;">Example: 1031 Exchange Calculation With Numbers</h3>
        <div class="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <p class="text-sm font-bold text-gray-700 mb-3">Standard investor sale after 10-year hold</p>
          <div class="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <p class="font-semibold text-gray-600 mb-2">Inputs</p>
              <ul class="space-y-1 text-gray-700">
                <li>Original Purchase: $200,000</li>
                <li>Held: 10 years</li>
                <li>Sale Price: $500,000 | Selling Costs: 7%</li>
                <li>Current Loan: $150,000</li>
                <li>Replacement: $500,000 | Replacement Loan: $150,000</li>
                <li>Tax Profile: MFJ 15% LTCG, 5% State, NIIT applies</li>
              </ul>
            </div>
            <div>
              <p class="font-semibold text-gray-600 mb-2">Results</p>
              <ul class="space-y-1 text-gray-700">
                <li>Adjusted Basis: ~$130K (after ~$70K depreciation)</li>
                <li>Net Sale Proceeds: ~$465K</li>
                <li>Realized Gain: ~$335K</li>
                <li>Recapture Tax (25%): ~$17.5K</li>
                <li>LTCG Tax (15%): ~$39.75K</li>
                <li>State + NIIT: ~$29.5K</li>
                <li class="font-bold text-red-700">Total Tax If Sold: ~$86.7K</li>
                <li class="font-bold text-green-700">1031 Tax Deferred: ~$86.7K (full deferral)</li>
                <li>Verdict: ELIGIBLE — STRONG ✅✅</li>
              </ul>
            </div>
          </div>
          <p class="text-xs text-gray-500 italic">Key insight: standard 10-year hold with 2.5× appreciation produces ~$87K tax bill on straight sale. Full 1031 exchange defers all of it — that preserved capital becomes additional buying power in the replacement property.</p>
        </div>
      </section>

      <!-- ── 6. WHAT IS ── -->
      <section id="what-is">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">What Is a 1031 Exchange? (Tax Deferral Rules Explained)</h2>
        <p class="text-gray-500 mb-6 text-sm">Tax deferral mechanism for investment real estate</p>

        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>A 1031 exchange (named after Section 1031 of the Internal Revenue Code) lets investors swap one investment property for another while deferring capital gains tax. The key word is <strong>DEFERRED</strong> — not eliminated. Tax is postponed until the replacement property is eventually sold without another exchange. Some investors chain 1031 exchanges across decades, effectively deferring tax indefinitely (sometimes called "swap till you drop" — basis steps up at death, heirs receive stepped-up basis). The exchange must follow strict IRS rules: investor cannot touch the sale proceeds (Qualified Intermediary holds funds), replacement must be like-kind investment property, identification must happen within 45 days of sale, and the exchange must close within 180 days.</p>

          <p>The primary benefit is preserving capital that would otherwise go to tax. On a $300K gain in the 15% LTCG bracket, an investor faces federal LTCG of ~$45K, depreciation recapture of $15-25K, state capital gains of ~$15K (at 5%), and NIIT of ~$11K (if applicable) — totaling $85-95K of tax deferred through a 1031. That preserved capital becomes additional buying power in the replacement property. Beyond buying power, 1031 enables strategic shifts: out of management-intensive properties into passive investments, out of appreciating markets into cash-flow markets, or geographic relocation without tax friction.</p>

          <p>At 2026 rates, 1031 deferral is particularly valuable for high-LTCG-bracket investors (20% federal — saves 20%+ on the LTCG portion), high-state-tax investors (CA 13.3%, NJ 10.75%, OR 9.9%), NIIT-affected investors (AGI over $250K MFJ adds 3.8%), and heavily-depreciated properties where $100K+ depreciation recapture savings are on the line.</p>
        </div>
      </section>

      <!-- ── 7. RESULT MEANING ── -->
      <section id="result-meaning">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">How to Read the Eligibility Verdict, Tax Deferred, and Deadlines</h2>
        <p class="text-gray-500 mb-6 text-sm">Interpreting your 1031 exchange analysis</p>

        <div class="space-y-6">
          <div>
            <h3 class="text-base font-bold text-gray-900 mb-3">Eligibility Verdict — 5 Tiers</h3>
            <div class="space-y-2">
              <div v-for="tier in verdictTiers" :key="tier.label" class="p-3 rounded-xl border" :class="tier.bg">
                <div class="flex items-center gap-2 mb-1">
                  <span class="text-lg">{{ tier.icon }}</span>
                  <span class="text-sm font-bold" :class="tier.textClass">{{ tier.label }}</span>
                </div>
                <p class="text-sm text-gray-700">{{ tier.meaning }}</p>
              </div>
            </div>
            <div class="mt-3 p-3 bg-amber-50 rounded-xl border border-amber-200 text-sm text-amber-800">
              <strong>Eligibility ASSUMED:</strong> Verdict shown is ASSUMED based on your inputs. Calculator cannot verify like-kind property classification, Qualified Intermediary usage, or full IRS compliance. ELIGIBLE Verdict is a structural green light, not a guarantee — final eligibility requires CPA + 1031-specialized attorney review.
            </div>
          </div>

          <div>
            <h3 class="text-base font-bold text-gray-900 mb-3">Tax Breakdown — 4 Layers</h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li><strong>Federal LTCG (15-20%):</strong> typically the largest layer — applies to LTCG portion of gain (above depreciation recapture).</li>
              <li><strong>Depreciation Recapture (25% federal flat):</strong> applies ONLY to depreciation taken, NOT total gain. Critical distinction — taxed at 25% regardless of your LTCG bracket.</li>
              <li><strong>State Capital Gains (varies):</strong> flat % in this calculator. <em>Actual state treatment varies — some states conform to federal 25% recapture rate, others tax at ordinary income rates. No-tax states (FL, TX, NV, WA, SD, AK, WY, NH, TN) should use 0%.</em></li>
              <li><strong>NIIT (3.8% if AGI > threshold):</strong> on full gain in this calculator. <em>Actual NIIT = MIN(Net Investment Income, AGI excess) × 3.8% — may be lower at marginal AGI. Calculator output is upper-bound estimate.</em></li>
            </ul>
          </div>

          <div>
            <h3 class="text-base font-bold text-gray-900 mb-3">Boot Interpretation</h3>
            <p class="text-sm text-gray-700 mb-2">Boot is the taxable portion of an otherwise-deferred exchange. Three types: <strong>Cash Boot</strong> (cash received from exchange), <strong>Mortgage Boot</strong> (debt relief when replacement debt is less than relinquished debt), and <strong>Trade-Down Boot</strong> (net sale proceeds exceed replacement purchase price). Boot is taxed RECAPTURE-FIRST: first at the 25% recapture rate (up to depreciation taken), then at your LTCG bracket — NOT uniformly at LTCG rates.</p>
          </div>

          <div>
            <h3 class="text-base font-bold text-gray-900 mb-3">Deadline Interpretation</h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li><strong>45-Day Identification:</strong> WRITTEN identification of replacement property delivered to QI by 11:59 PM Day 45. Calendar days. No business-day extension. One day late = exchange dead.</li>
              <li><strong>180-Day Exchange:</strong> closing on replacement by 11:59 PM Day 180. Calendar days. Absolute deadline.</li>
              <li class="text-red-700"><strong>45-day failure = entire exchange dead, even within 180-day window.</strong> No exceptions outside presidentially-declared disaster zones.</li>
            </ul>
            <div class="mt-3 p-3 bg-blue-50 rounded-xl border border-blue-200 text-sm text-blue-800">
              <strong>Tax Deferred, Not Eliminated:</strong> Tax Deferred shown represents tax postponed, not saved. When the replacement property is eventually sold (without another 1031), the accumulated deferred tax becomes due. The benefit is the time value of money — preserved capital compounds over the deferral period.
            </div>
          </div>
        </div>
      </section>

      <!-- ── 8. BENCHMARKS ── -->
      <section id="benchmarks">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">1031 Exchange Benchmarks for 2026</h2>
        <p class="text-gray-500 mb-6 text-sm">Illustrative patterns, not measured data. Individual results depend on holding period, appreciation, depreciation, and tax profile.</p>

        <div class="grid md:grid-cols-2 gap-4">
          <div v-for="bm in benchmarks" :key="bm.title" class="p-4 rounded-xl border border-gray-200 bg-gray-50">
            <p class="text-sm font-bold text-gray-900 mb-2">{{ bm.title }}</p>
            <ul class="space-y-1">
              <li v-for="item in bm.items" :key="item" class="text-sm text-gray-700 flex items-start gap-2">
                <span class="text-gray-400 mt-0.5">•</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <p class="mt-5 text-xs text-gray-500 italic p-3 bg-gray-50 rounded-xl border border-gray-200">These ranges are illustrative patterns for typical 2026 investor scenarios, NOT measured statistical datasets. Individual results vary significantly. The calculator's output on YOUR inputs always takes precedence over aggregate ranges.</p>
      </section>

      <!-- ── 9. STRATEGY ── -->
      <section id="strategy">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">1031 Strategy by Investor Type</h2>
        <p class="text-gray-500 mb-6 text-sm">What to prioritize — and what common misconceptions to avoid</p>

        <div class="space-y-4">
          <div v-for="st in strategies" :key="st.type" class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
            <h3 class="text-base font-bold mb-3" style="color: #1e3a5f;">{{ st.type }}</h3>
            <div class="grid md:grid-cols-3 gap-3 text-sm">
              <div class="p-3 rounded-lg bg-green-50">
                <p class="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">Critical</p>
                <p class="text-gray-700">{{ st.critical }}</p>
              </div>
              <div class="p-3 rounded-lg bg-red-50">
                <p class="text-xs font-bold text-red-700 uppercase tracking-wide mb-1">Misleading</p>
                <p class="text-gray-700">{{ st.misleading }}</p>
              </div>
              <div class="p-3 rounded-lg bg-blue-50">
                <p class="text-xs font-bold text-blue-700 uppercase tracking-wide mb-1">Prioritize</p>
                <p class="text-gray-700">{{ st.prioritize }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- NEXT STEPS — commercial intent block -->
        <div class="mt-8 p-6 rounded-2xl border border-gray-200 bg-gray-50">
          <h3 class="text-lg font-bold mb-4" style="color: #1e3a5f;">Next Steps — When You're Ready to Execute</h3>
          <p class="text-sm text-gray-700 mb-4">After running the calculator and confirming the math works, real execution requires three professional engagements:</p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="p-4 rounded-xl bg-white border border-gray-200">
              <div class="text-2xl mb-2">1️⃣</div>
              <p class="font-bold text-sm text-gray-900 mb-1">Connect with a Qualified Intermediary (QI)</p>
              <p class="text-sm text-gray-700">QI engagement is REQUIRED before sale closes. Typical fees: $750–$2,500. Engage QI 30+ days before listing.</p>
            </div>
            <div class="p-4 rounded-xl bg-white border border-gray-200">
              <div class="text-2xl mb-2">2️⃣</div>
              <p class="font-bold text-sm text-gray-900 mb-1">Talk to a 1031-Specialized CPA</p>
              <p class="text-sm text-gray-700">Standard CPAs may miss state-specific recapture rules, NIIT nuances, or basis-tracking requirements across chained exchanges.</p>
            </div>
            <div class="p-4 rounded-xl bg-white border border-gray-200">
              <div class="text-2xl mb-2">3️⃣</div>
              <p class="font-bold text-sm text-gray-900 mb-1">Engage a 1031-Specialized Attorney</p>
              <p class="text-sm text-gray-700">Required for reverse exchanges, improvement exchanges, multi-property identification, or any non-standard structure.</p>
            </div>
          </div>
          <p class="mt-4 text-xs text-gray-500 italic">If you don't have these professionals lined up before initiating, the deadline pressure (45 days to identify, 180 days to close) makes finding them mid-exchange nearly impossible.</p>
        </div>
      </section>

      <!-- ── 10. APPLICATIONS ── -->
      <section id="applications">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Common Use Cases</h2>

        <div class="grid md:grid-cols-2 gap-4">
          <div v-for="app in applications" :key="app.title" class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
            <h3 class="text-base font-bold mb-2" style="color: #1e3a5f;">{{ app.title }}</h3>
            <p class="text-sm text-gray-700" v-html="app.body"></p>
          </div>
        </div>
      </section>

      <!-- ── 11. INDUSTRY STANDARDS ── -->
      <section id="industry-standards">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">1031 Exchange Rules Explained (2026 IRS Update)</h2>
        <p class="text-gray-500 mb-6 text-sm">Methodology and regulatory alignment</p>

        <div class="space-y-4 text-gray-700">
          <p>Tax formulas align with IRS Publication 544, IRS Section 1031, and industry standards used by Federation of Exchange Accommodators (FEA) member QIs, 1031-specialized CPAs and attorneys, and major real estate finance textbooks. Boot taxation methodology (RECAPTURE-FIRST allocation) reflects current IRS guidance on partial 1031 exchanges. This is the more conservative treatment — some older calculators used uniform LTCG rates, which understate tax when depreciation recapture is significant.</p>

          <p class="p-4 bg-gray-50 rounded-xl border border-gray-200 text-sm">Methodology aligns with IRS Section 1031 regulations and IRS Publication 544. The Eligibility Verdict layer (5 tiers with MODERATE/STRONG magnitude grading) and Verdict downgrade for small benefits add decision support beyond raw tax calculation. State tax and NIIT calculations are simplified — consult a state-licensed CPA for exact treatment in your state and situation.</p>

          <div class="grid md:grid-cols-2 gap-4 mt-4">
            <div class="p-4 rounded-xl bg-blue-50 border border-blue-200 text-sm">
              <p class="font-bold text-blue-900 mb-2">Current 2026 Federal LTCG Brackets</p>
              <ul class="space-y-1 text-blue-800">
                <li>0% bracket: ≤$47,025 Single / ≤$94,050 MFJ</li>
                <li>15% bracket: $47,026–$518,900 Single / $94,051–$583,750 MFJ</li>
                <li>20% bracket: >$518,900 Single / >$583,750 MFJ</li>
              </ul>
              <p class="text-xs mt-2 text-blue-700 italic">Verify exact thresholds with IRS tables — adjusted annually.</p>
            </div>
            <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm">
              <p class="font-bold text-amber-900 mb-2">1031 Deadline Rules (Absolute)</p>
              <ul class="space-y-1 text-amber-800">
                <li>45 days: identify replacement in writing to QI</li>
                <li>180 days: close on replacement property</li>
                <li>Both: calendar days, not business days</li>
                <li>No extensions for weekends or holidays</li>
                <li>Exception: presidentially-declared disaster zones only</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 12. LIMITATIONS ── -->
      <section id="limitations">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Limitations of This Calculator</h2>

        <div class="space-y-3">
          <div v-for="lim in limitations" :key="lim.title" class="p-4 rounded-xl border border-gray-200 bg-gray-50">
            <p class="text-sm font-bold text-gray-900 mb-1">{{ lim.title }}</p>
            <p class="text-sm text-gray-700">{{ lim.body }}</p>
          </div>
        </div>

        <div class="mt-6 p-5 rounded-xl border border-red-200 bg-red-50">
          <p class="text-sm font-bold text-red-900 mb-2">When NOT to Use This Calculator</p>
          <ul class="space-y-1 text-sm text-red-800">
            <li>• Primary residence sale: use Section 121 exclusion instead</li>
            <li>• Stocks, bonds, partnership interests: 1031 only applies to real estate (since 2018 TCJA)</li>
            <li>• Foreign property: 1031 requires US-to-US property only</li>
            <li>• Inherited property: stepped-up basis usually eliminates need for 1031</li>
            <li>• Very small gains (&lt;$10K tax): complexity typically exceeds benefit</li>
            <li>• Short-term holds (&lt;1 year): ordinary income tax, 1031 rules complex</li>
          </ul>
        </div>
      </section>

      <!-- ── 13. COMMON MISTAKES ── -->
      <section id="common-mistakes">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Common Mistakes in 1031 Exchange Analysis</h2>

        <div class="grid md:grid-cols-2 gap-4">
          <div v-for="(m, i) in commonMistakes" :key="i" class="p-4 rounded-xl border border-orange-200 bg-orange-50">
            <div class="flex items-start gap-3">
              <span class="text-orange-600 font-extrabold text-sm mt-0.5">{{ i + 1 }}</span>
              <div>
                <p class="text-sm font-bold text-orange-900 mb-1">{{ m.title }}</p>
                <p class="text-sm text-orange-800">{{ m.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 14. FAQ ── -->
      <section id="faq">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">1031 Exchange Frequently Asked Questions (2026)</h2>

        <div class="space-y-3">
          <details v-for="faqItem in faqItems" :key="faqItem.q" class="group rounded-xl border border-gray-200 bg-white overflow-hidden">
            <summary class="flex items-center justify-between p-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition list-none">
              <span class="text-sm pr-4">{{ faqItem.q }}</span>
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <div class="px-4 pb-4 text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-3">
              {{ faqItem.a }}
            </div>
          </details>
        </div>
      </section>

      <!-- ── 15. RELATED CALCULATORS ── -->
      <section id="related-calculators">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Related Calculators</h2>
        <p class="text-gray-500 mb-6 text-sm">This is the EXIT STRATEGY tool — use these for replacement property evaluation</p>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <NuxtLink v-for="rc in relatedCalcs" :key="rc.href" :to="rc.href"
            class="p-4 rounded-xl border border-gray-200 bg-white hover:border-yellow-400 hover:shadow-md transition group">
            <p class="text-sm font-bold text-gray-900 group-hover:text-yellow-700 transition mb-1">{{ rc.name }}</p>
            <p class="text-xs text-gray-500">{{ rc.desc }}</p>
          </NuxtLink>
        </div>
      </section>

    </div><!-- end SEO content -->

    <!-- FOOTER -->
    <footer class="bg-white border-t border-gray-200 mt-8">
      <div class="max-w-[1100px] mx-auto px-4 py-10">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div class="md:col-span-1">
            <NuxtLink to="/" class="flex items-center gap-3 mb-3">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background: #1e3a5f;">
                <span class="text-white font-extrabold text-sm">RC</span>
              </div>
              <span class="font-extrabold text-base" style="color: #1e3a5f;">RealCalc</span>
            </NuxtLink>
            <p class="text-xs text-gray-500">Free real estate investment calculators for US investors.</p>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Calculators</p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li><NuxtLink to="/cap-rate-calculator" class="hover:text-gray-900 transition">Cap Rate</NuxtLink></li>
              <li><NuxtLink to="/noi-calculator" class="hover:text-gray-900 transition">NOI</NuxtLink></li>
              <li><NuxtLink to="/cash-on-cash-calculator" class="hover:text-gray-900 transition">Cash-on-Cash</NuxtLink></li>
              <li><NuxtLink to="/dscr-calculator" class="hover:text-gray-900 transition">DSCR</NuxtLink></li>
            </ul>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">More Tools</p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li><NuxtLink to="/real-estate-roi-calculator" class="hover:text-gray-900 transition">Real Estate ROI</NuxtLink></li>
              <li><NuxtLink to="/property-cash-flow-calculator" class="hover:text-gray-900 transition">Cash Flow</NuxtLink></li>
              <li><NuxtLink to="/1031-exchange-calculator" class="hover:text-gray-900 transition">1031 Exchange</NuxtLink></li>
              <li><NuxtLink to="/compare-deals" class="hover:text-gray-900 transition">Compare Deals</NuxtLink></li>
            </ul>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Legal</p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li><NuxtLink to="/privacy" class="hover:text-gray-900 transition">Privacy Policy</NuxtLink></li>
              <li><NuxtLink to="/terms" class="hover:text-gray-900 transition">Terms of Service</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p class="text-xs text-gray-400">© 2026 RealCalc. For educational purposes only — not investment or tax advice.</p>
          <p class="text-xs text-gray-400">Not affiliated with IRS or any government agency.</p>
        </div>
      </div>
    </footer>

  </div><!-- end page wrapper -->
</template>

<script setup>
import { nextTick } from 'vue'
// ============================================================
// HEAD / SEO
// ============================================================
useHead({
  title: '1031 Exchange Calculator — Tax Deferred + Eligibility Verdict',
  meta: [
    { name: 'description', content: 'Free 1031 Exchange Calculator with Eligibility Verdict, 45/180-day deadlines, boot taxation, depreciation recapture. 2026 capital gains rates.' },
    { property: 'og:title', content: '1031 Exchange Calculator — Tax Deferred + Eligibility Verdict' },
    { property: 'og:description', content: 'Estimate how much capital gains tax you defer with a 1031 exchange. Eligibility Verdict, deadline countdown, boot taxation with recapture-first allocation.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'SoftwareApplication',
            name: '1031 Exchange Calculator',
            description: 'Free 1031 Exchange Calculator with Eligibility Verdict, 45/180-day deadlines, boot taxation, depreciation recapture. 2026 capital gains rates.',
            url: 'https://arvcalc.com/1031-exchange-calculator',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web browser',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            featureList: [
              'Eligibility Verdict (5 tiers: ELIGIBLE STRONG / ELIGIBLE MODERATE / PARTIALLY DEFERRED / AT RISK / NOT ELIGIBLE)',
              'Tax Deferred primary output vs Straight Sale',
              '45-Day Identification Deadline countdown (absolute calendar days)',
              '180-Day Exchange Completion Deadline countdown',
              'Boot taxation breakdown (recapture-first allocation per IRC §1245/§1250)',
              'Tax Comparison Bar visualization (signature)',
              'Deadline Timeline visualization (signature)',
              'Boot Allocation Breakdown (conditional on boot > 0)',
              '4-layer tax calculation (Federal LTCG + Recapture + State + NIIT)',
              'Sensitivity table: Sale Price × Federal LTCG Bracket',
              'Scenario comparison (Conservative / Base / Optimistic)',
              'Key Insight Card with blunt deadline fail language',
              'URL parameter import for shareable scenarios',
              'Saved Scenarios widget (up to 20 scenarios)',
            ],
            audience: { '@type': 'Audience', audienceType: 'US real estate investors selling appreciated investment property' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Does this calculator work for primary residence sales?', acceptedAnswer: { '@type': 'Answer', text: 'No. 1031 exchanges apply only to investment/business property. For primary residence, use Section 121 exclusion (up to $250K Single / $500K MFJ tax-free gain).' } },
              { '@type': 'Question', name: 'Does an ELIGIBLE Verdict mean my exchange will succeed?', acceptedAnswer: { '@type': 'Answer', text: 'No. ELIGIBLE means your inputs structurally permit deferral. Does NOT verify Qualified Intermediary usage, like-kind property classification, or IRS compliance. Final eligibility requires CPA + 1031-specialized attorney review.' } },
              { '@type': 'Question', name: 'How is boot taxed in a 1031 exchange?', acceptedAnswer: { '@type': 'Answer', text: 'Boot is taxed RECAPTURE-FIRST, then LTCG. Boot Recapture Portion = MIN(Total Boot, Depreciation Taken) × 25%. Remaining boot taxed at your LTCG bracket. Plus state and NIIT.' } },
              { '@type': 'Question', name: 'What happens if I miss the 45-day deadline?', acceptedAnswer: { '@type': 'Answer', text: 'Exchange is dead — even if within 180-day window. The 45-day deadline is absolute (calendar days, no business-day extension). Full capital gains tax applies as if no exchange was attempted.' } },
            ],
          },
        ],
      }),
    },
  ],
})

// ============================================================
// ROUTE (for URL params)
// ============================================================
const route = useRoute()

// ============================================================
// REACTIVE STATE
// ============================================================
const isNavExpanded = ref(false)
const shareSuccess = ref(false)
const triggerScenarioSave = ref(false)

// Today's date as YYYY-MM-DD
const todayStr = new Date().toISOString().split('T')[0]

const inp = ref({
  // Relinquished
  sale_price: null,
  selling_costs_pct: null,
  original_purchase_price: null,
  original_closing_costs: null,
  capital_improvements: null,
  years_held: null,
  current_loan_balance: null,
  total_depreciation_taken: null,  // null = use auto-calc
  // Replacement
  replacement_purchase_price: null,
  replacement_loan_amount: null,
  cash_boot_received: null,
  // Tax Profile
  filing_status: 'mfj',
  federal_ltcg_bracket: 15,
  state_cg_rate: null,
  annual_income: null,
  // Timing
  sale_date: todayStr,
})

// ============================================================
// COMPUTED HELPERS
// ============================================================
const autoDepreciation = computed(() => {
  const origPrice = Number(inp.value.original_purchase_price) || 0
  const origClosing = Number(inp.value.original_closing_costs) || 0
  const yearsHeld = Number(inp.value.years_held) || 0
  if (yearsHeld <= 0 || origPrice <= 0) return 0
  const depBase = origPrice + origClosing
  return Math.round((depBase / 27.5) * Math.min(yearsHeld, 27.5))
})

const niitApplies = computed(() => {
  const income = Number(inp.value.annual_income) || 0
  if (income <= 0) return false
  const threshold = inp.value.filing_status === 'mfj' ? 250000 : 200000
  return income > threshold
})

// Computed deadline dates from sale_date
const identificationDeadline = computed(() => {
  if (!inp.value.sale_date) return null
  const d = new Date(inp.value.sale_date)
  if (isNaN(d.getTime())) return null
  d.setDate(d.getDate() + 45)
  return d
})

const exchangeDeadline = computed(() => {
  if (!inp.value.sale_date) return null
  const d = new Date(inp.value.sale_date)
  if (isNaN(d.getTime())) return null
  d.setDate(d.getDate() + 180)
  return d
})

// ============================================================
// CORE ENGINE
// ============================================================
function runEngine(overrides = {}) {
  const i = { ...inp.value, ...overrides }

  const salePrice = Number(i.sale_price) || 0
  const origPrice = Number(i.original_purchase_price) || 0
  const replacementPrice = Number(i.replacement_purchase_price) || 0

  if (salePrice <= 0 || origPrice <= 0 || replacementPrice <= 0) return null

  const origClosing = Number(i.original_closing_costs) || 0
  const capImp = Number(i.capital_improvements) || 0
  const yearsHeld = Number(i.years_held) || 0
  const autoDep = yearsHeld > 0 ? Math.round(((origPrice + origClosing) / 27.5) * Math.min(yearsHeld, 27.5)) : 0
  const depTaken = (i.total_depreciation_taken !== null && i.total_depreciation_taken !== '' && i.total_depreciation_taken !== undefined)
    ? Number(i.total_depreciation_taken)
    : autoDep

  const adjustedBasis = origPrice + origClosing + capImp - depTaken

  const sellingCostsPct = Number(i.selling_costs_pct) || 0
  const sellingCosts = salePrice * sellingCostsPct / 100
  const currentLoan = Number(i.current_loan_balance) || 0

  // Net sale proceeds (equity from sale after mortgage payoff)
  const netSaleProceeds = salePrice - sellingCosts - currentLoan

  // Realized gain (for tax — no mortgage deduction)
  const realizedGain = salePrice - sellingCosts - adjustedBasis

  // Phase 4: Tax If Sold
  const federalLtcgBracket = Number(i.federal_ltcg_bracket) || 0
  const stateCgRate = Number(i.state_cg_rate) || 0
  const annualIncome = Number(i.annual_income) || 0
  const niitThreshold = i.filing_status === 'mfj' ? 250000 : 200000
  const applyNiit = annualIncome > niitThreshold

  let totalTaxIfSold = 0
  let federalRecaptureTax = 0
  let federalLtcgTax = 0
  let stateTax = 0
  let niitTax = 0
  let recapturePortion = 0
  let ltcgPortion = 0

  if (realizedGain > 0) {
    recapturePortion = Math.min(realizedGain, Math.max(0, depTaken))
    ltcgPortion = realizedGain - recapturePortion
    federalRecaptureTax = recapturePortion * 0.25
    federalLtcgTax = ltcgPortion * (federalLtcgBracket / 100)
    stateTax = realizedGain * (stateCgRate / 100)
    niitTax = applyNiit ? realizedGain * 0.038 : 0
    totalTaxIfSold = federalRecaptureTax + federalLtcgTax + stateTax + niitTax
  }

  // Phase 5: Boot Calculation
  const cashBootReceived = Math.max(0, Number(i.cash_boot_received) || 0)
  const replacementLoan = Number(i.replacement_loan_amount) || 0
  const cashBoot = cashBootReceived
  const mortgageBoot = Math.max(0, currentLoan - replacementLoan)
  const tradeDownBoot = Math.max(0, netSaleProceeds - replacementPrice)
  const rawTotalBoot = cashBoot + mortgageBoot + tradeDownBoot
  const totalBoot = Math.min(rawTotalBoot, Math.max(0, realizedGain))

  // Phase 9: Deadline Tracking
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  let daysSinceSale = 0
  let daysUntilId = 45
  let daysUntilExchange = 180
  let timelineStatus = 'PRE_SALE'
  let identDeadline = null
  let exDeadline = null

  if (i.sale_date) {
    const saleDate = new Date(i.sale_date)
    if (!isNaN(saleDate.getTime())) {
      saleDate.setHours(0, 0, 0, 0)
      daysSinceSale = Math.floor((today - saleDate) / (1000 * 60 * 60 * 24))
      daysUntilId = 45 - daysSinceSale
      daysUntilExchange = 180 - daysSinceSale

      identDeadline = new Date(saleDate)
      identDeadline.setDate(identDeadline.getDate() + 45)
      exDeadline = new Date(saleDate)
      exDeadline.setDate(exDeadline.getDate() + 180)

      if (daysSinceSale < 0) timelineStatus = 'PRE_SALE'
      else if (daysUntilId >= 0) timelineStatus = 'IDENTIFICATION_WINDOW'
      else if (daysUntilExchange >= 0) timelineStatus = 'EXCHANGE_WINDOW'
      else timelineStatus = 'EXPIRED'
    }
  }

  // Hard fail conditions
  const hardFail = daysUntilId < 0 || daysUntilExchange < 0 || realizedGain <= 0

  // Phase 7: Exchange Tax (RECAPTURE-FIRST allocation)
  let totalBootTax = 0
  let taxIfExchanged = 0
  let bootRecapturePortion = 0
  let bootLtcgPortion = 0
  let bootRecaptureTax = 0
  let bootLtcgTax = 0
  let bootStateTax = 0
  let bootNiit = 0

  if (hardFail) {
    totalBootTax = totalTaxIfSold
    taxIfExchanged = totalTaxIfSold
  } else if (totalBoot > 0) {
    bootRecapturePortion = Math.min(totalBoot, Math.max(0, depTaken))
    bootLtcgPortion = totalBoot - bootRecapturePortion
    bootRecaptureTax = bootRecapturePortion * 0.25
    bootLtcgTax = bootLtcgPortion * (federalLtcgBracket / 100)
    bootStateTax = totalBoot * (stateCgRate / 100)
    bootNiit = applyNiit ? totalBoot * 0.038 : 0
    totalBootTax = bootRecaptureTax + bootLtcgTax + bootStateTax + bootNiit
    taxIfExchanged = totalBootTax
  }

  // Phase 8: Tax Deferred + Net Proceeds
  const taxDeferred = Math.max(0, totalTaxIfSold - taxIfExchanged)
  const netProceedsIfSold = netSaleProceeds - totalTaxIfSold
  const netProceedsIfExchanged = netSaleProceeds - taxIfExchanged
  const equityDeployed = Math.max(0, netProceedsIfExchanged - cashBootReceived)
  const remainingCash = cashBootReceived - taxIfExchanged

  // Replacement vs sale comparison
  const replacementBelowThreshold = replacementPrice < salePrice * 0.80

  // Verdict (5 tiers)
  let verdict
  if (realizedGain <= 0) {
    verdict = 'NOT_ELIGIBLE'
  } else if (daysUntilId < 0) {
    verdict = 'NOT_ELIGIBLE'
  } else if (daysUntilExchange < 0) {
    verdict = 'NOT_ELIGIBLE'
  } else if (daysUntilId < 14 || daysUntilExchange < 30 || (taxDeferred < 10000 && taxDeferred > 0) || replacementBelowThreshold) {
    verdict = 'AT_RISK'
  } else if (totalBoot > 0) {
    verdict = 'PARTIALLY_DEFERRED'
  } else if (taxDeferred >= 50000) {
    verdict = 'ELIGIBLE_STRONG'
  } else {
    verdict = 'ELIGIBLE_MODERATE'
  }

  const verdictSubtitles = {
    ELIGIBLE_STRONG: 'Strong tax deferral — all conditions met. Substantial savings preserved.',
    ELIGIBLE_MODERATE: 'Moderate tax deferral — verify QI fees and complexity worth the benefit.',
    PARTIALLY_DEFERRED: 'Partial exchange — boot will be taxed now, majority deferred.',
    AT_RISK: 'Conditions tight — verify deadlines, replacement values, and savings size.',
    NOT_ELIGIBLE: 'Exchange cannot proceed — see conditions above.',
  }

  // Key Insight (max 1, priority order)
  let keyInsight = null
  if (daysUntilId < 0 && daysUntilExchange >= 0) {
    keyInsight = { severity: 'red', message: 'EXCHANGE IS OVER. 45-day identification deadline has passed without written identification to your QI. The exchange CANNOT proceed even within the 180-day window. You will pay full capital gains tax as if no exchange was attempted. No extensions. No exceptions outside presidentially-declared disaster zones.' }
  } else if (daysUntilExchange < 0) {
    keyInsight = { severity: 'red', message: 'EXCHANGE IS OVER. 180-day completion deadline has passed. Even if replacement is identified, the exchange cannot complete. You will pay full capital gains tax as if no exchange was attempted. Begin straight-sale tax planning with your CPA.' }
  } else if (realizedGain <= 0) {
    keyInsight = { severity: 'red', message: 'Capital loss or no gain detected — 1031 exchange not applicable. Deduct the loss instead. Calculator shows straight-sale results with $0 tax deferred.' }
  } else if (daysUntilId >= 0 && daysUntilId < 14) {
    keyInsight = { severity: 'red', message: `URGENT — 45-day identification deadline approaching. You have ${daysUntilId} day${daysUntilId === 1 ? '' : 's'} to deliver WRITTEN identification of replacement properties to your QI. Miss this deadline and the exchange dies. No grace period.` }
  } else if (daysUntilExchange >= 0 && daysUntilExchange < 30) {
    keyInsight = { severity: 'amber', message: `URGENT — 180-day exchange deadline approaching. You have ${daysUntilExchange} days to close on replacement property. Confirm closing timeline with seller and QI immediately.` }
  } else if (applyNiit) {
    keyInsight = { severity: 'info', message: 'NIIT 3.8% applies to your gain (AGI exceeds threshold). 1031 exchange defers this surtax along with capital gains. NOTE: NIIT shown is upper-bound estimate — actual NIIT may be lower if AGI marginally exceeds threshold.' }
  } else if (recapturePortion > realizedGain * 0.30 && realizedGain > 0) {
    keyInsight = { severity: 'info', message: 'Depreciation recapture is a large component of your tax bill (25% federal flat). 1031 exchange defers this recapture along with LTCG — particularly valuable for long-held rentals.' }
  } else if (taxDeferred > 0 && taxDeferred < 10000) {
    keyInsight = { severity: 'amber', message: `Tax savings modest ($${fmtDollarFull(taxDeferred)}). Verify QI fees ($1-3K) and exchange complexity are worth the deferral. Straight sale may be simpler if savings are below $10K — the friction may exceed the benefit.` }
  } else if (totalBoot > 0 && realizedGain > 0 && totalBoot > realizedGain * 0.5) {
    keyInsight = { severity: 'amber', message: `Boot ($${fmtDollarFull(totalBoot)}) is more than half of your realized gain. Most of your gain is taxable now anyway — verify the 1031 complexity is worth the modest deferral on the remaining portion.` }
  } else if (stateCgRate === 0 && realizedGain > 0) {
    keyInsight = { severity: 'info', message: 'No state capital gains tax (0% rate set) — federal-only deferral. Tax savings concentrated in federal layers (LTCG + recapture + NIIT).' }
  } else if ((verdict === 'ELIGIBLE_STRONG' || verdict === 'ELIGIBLE_MODERATE') && totalBoot === 0) {
    keyInsight = { severity: 'success', message: 'Optimal 1031 structure. Full tax deferral, all gain transferred to replacement basis. Tax owed only when replacement is sold — or never, if you chain into another 1031 (or hold until death — heirs get stepped-up basis).' }
  }

  return {
    verdict,
    verdict_subtitle: verdictSubtitles[verdict],
    adjusted_basis: adjustedBasis,
    realized_gain: realizedGain,
    recapture_portion: recapturePortion,
    ltcg_portion: ltcgPortion,
    dep_taken: depTaken,
    dep_auto_calc: autoDep,
    federal_recapture_tax: federalRecaptureTax,
    federal_ltcg_tax: federalLtcgTax,
    state_tax: stateTax,
    niit_tax: niitTax,
    total_tax_if_sold: totalTaxIfSold,
    cash_boot: cashBoot,
    mortgage_boot: mortgageBoot,
    trade_down_boot: tradeDownBoot,
    total_boot: totalBoot,
    boot_recapture_portion: bootRecapturePortion,
    boot_ltcg_portion: bootLtcgPortion,
    boot_recapture_tax: bootRecaptureTax,
    boot_ltcg_tax: bootLtcgTax,
    boot_state_tax: bootStateTax,
    boot_niit: bootNiit,
    total_boot_tax: totalBootTax,
    tax_if_exchanged: taxIfExchanged,
    tax_deferred: taxDeferred,
    net_sale_proceeds: netSaleProceeds,
    net_proceeds_if_sold: netProceedsIfSold,
    net_proceeds_if_exchanged: netProceedsIfExchanged,
    equity_deployed: equityDeployed,
    remaining_cash: remainingCash,
    days_since_sale: daysSinceSale,
    days_until_id: daysUntilId,
    days_until_exchange: daysUntilExchange,
    timeline_status: timelineStatus,
    identification_deadline: identDeadline,
    exchange_deadline: exDeadline,
    apply_niit: applyNiit,
    hard_fail: hardFail,
    replacement_below_threshold: replacementBelowThreshold,
    is_loss: realizedGain <= 0,
    key_insight: keyInsight,
    selling_costs: sellingCosts,
  }
}

// Main computed results
const results = computed(() => runEngine())

// ============================================================
// SENSITIVITY TABLE (Sale Price × LTCG Bracket)
// ============================================================
const SENSITIVITY_PRICES = [300000, 400000, 500000, 600000, 750000, 1000000]
const SENSITIVITY_BRACKETS = [0, 15, 20]

const sensitivityTable = computed(() => {
  return SENSITIVITY_PRICES.map(price => {
    const row = { price }
    for (const bracket of SENSITIVITY_BRACKETS) {
      const r = runEngine({ sale_price: price, federal_ltcg_bracket: bracket })
      row[bracket] = r ? r.tax_deferred : 0
    }
    return row
  })
})

function sensitivityCellClass(val) {
  if (val >= 50000) return 'bg-green-100 text-green-800'
  if (val >= 20000) return 'bg-green-50 text-green-700'
  if (val >= 5000) return 'bg-amber-100 text-amber-800'
  return 'bg-red-100 text-red-700'
}

function isCurrentSensCell(price, bracket) {
  const sp = Number(inp.value.sale_price) || 0
  const lb = Number(inp.value.federal_ltcg_bracket) || 15
  // Find closest price in table
  return price === SENSITIVITY_PRICES.reduce((prev, curr) =>
    Math.abs(curr - sp) < Math.abs(prev - sp) ? curr : prev
  ) && bracket === lb
}

// ============================================================
// SCENARIOS
// ============================================================
const scenarios = computed(() => {
  const sp = Number(inp.value.sale_price) || 0
  const scPct = Number(inp.value.selling_costs_pct) || 0

  const conservativeSale = sp * 0.95
  const conservativeCosts = scPct * 1.2
  const optimisticSale = sp * 1.05
  const optimisticCosts = scPct * 0.8

  return [
    {
      label: 'Conservative',
      isBase: false,
      salePrice: conservativeSale,
      r: sp > 0 ? runEngine({ sale_price: conservativeSale, selling_costs_pct: conservativeCosts }) : null,
    },
    {
      label: 'Your Assumptions',
      isBase: true,
      salePrice: sp,
      r: results.value,
    },
    {
      label: 'Optimistic',
      isBase: false,
      salePrice: optimisticSale,
      r: sp > 0 ? runEngine({ sale_price: optimisticSale, selling_costs_pct: optimisticCosts }) : null,
    },
  ]
})

// ============================================================
// TIMELINE COMPUTED CLASSES
// ============================================================
const timelineUrgencyClass = computed(() => {
  if (!results.value) return ''
  const dId = results.value.days_until_id
  const dEx = results.value.days_until_exchange
  if (dId < 0 || dEx < 0) return 'border-red-300'
  if (dId < 14) return 'border-red-300'
  if (dEx < 30) return 'border-amber-300'
  return 'border-gray-200'
})

const timelineIdColor = computed(() => {
  if (!results.value) return 'text-gray-500'
  const d = results.value.days_until_id
  if (d < 0) return 'text-red-600'
  if (d < 14) return 'text-red-600'
  if (d < 30) return 'text-amber-600'
  return 'text-green-600'
})

const timelineIdBadge = computed(() => {
  if (!results.value) return 'bg-gray-100 text-gray-500'
  const d = results.value.days_until_id
  if (d < 0) return 'bg-red-100 text-red-700'
  if (d < 14) return 'bg-red-100 text-red-700'
  if (d < 30) return 'bg-amber-100 text-amber-700'
  return 'bg-green-100 text-green-700'
})

const timelineIdStatus = computed(() => {
  if (!results.value) return '—'
  const d = results.value.days_until_id
  if (d < 0) return 'EXPIRED'
  if (d < 14) return 'URGENT'
  if (d < 30) return 'WATCH'
  return 'OK'
})

const timelineIdBarColor = computed(() => {
  if (!results.value) return 'bg-gray-300'
  const d = results.value.days_until_id
  if (d < 0) return 'bg-red-500'
  if (d < 14) return 'bg-red-400'
  if (d < 30) return 'bg-amber-400'
  return 'bg-green-400'
})

const timelineExColor = computed(() => {
  if (!results.value) return 'text-gray-500'
  const d = results.value.days_until_exchange
  if (d < 0) return 'text-red-600'
  if (d < 30) return 'text-amber-600'
  return 'text-green-600'
})

const timelineExBarColor = computed(() => {
  if (!results.value) return 'bg-gray-300'
  const d = results.value.days_until_exchange
  if (d < 0) return 'bg-red-500'
  if (d < 30) return 'bg-amber-400'
  return 'bg-blue-400'
})

const timelineStatusClass = computed(() => {
  if (!results.value) return 'bg-gray-50 border-gray-200 text-gray-500'
  const s = results.value.timeline_status
  if (s === 'EXPIRED') return 'bg-red-50 border-red-200 text-red-700'
  if (s === 'PRE_SALE') return 'bg-blue-50 border-blue-200 text-blue-700'
  if (s === 'IDENTIFICATION_WINDOW') return 'bg-green-50 border-green-200 text-green-700'
  if (s === 'EXCHANGE_WINDOW') return 'bg-amber-50 border-amber-200 text-amber-700'
  return 'bg-gray-50 border-gray-200 text-gray-500'
})

const timelineStatusLabel = computed(() => {
  if (!results.value) return '—'
  const s = results.value.timeline_status
  const map = {
    PRE_SALE: 'PRE-SALE — sale not yet closed',
    IDENTIFICATION_WINDOW: 'IDENTIFICATION WINDOW — identify replacement by deadline',
    EXCHANGE_WINDOW: 'EXCHANGE WINDOW — 45-day expired, close on replacement by deadline',
    EXPIRED: 'EXPIRED — exchange window closed',
  }
  return map[s] || s
})

// ============================================================
// FORMAT HELPERS
// ============================================================
function fmtDollarFull(n) {
  if (n === null || n === undefined || isNaN(n)) return '$0'
  const abs = Math.abs(n)
  const formatted = abs.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
  return (n < 0 ? '-$' : '$') + formatted
}

function fmtK(n) {
  if (n === null || n === undefined || isNaN(n)) return '—'
  const abs = Math.abs(n)
  if (abs >= 1000000) return (n < 0 ? '-' : '') + '$' + (abs / 1000000).toFixed(2) + 'M'
  if (abs >= 1000) return (n < 0 ? '-' : '') + '$' + (abs / 1000).toFixed(1) + 'K'
  return (n < 0 ? '-$' : '$') + Math.round(abs)
}

function fmtDateStr(d) {
  if (!d) return '—'
  const date = d instanceof Date ? d : new Date(d)
  if (isNaN(date.getTime())) return '—'
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

function fmtTimestamp(ts) {
  if (!ts) return ''
  return new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

function pctOfTotal(part, total) {
  if (!total || total <= 0) return 0
  return Math.max(0, Math.min(100, (part / total) * 100))
}

// ============================================================
// VERDICT CONFIG
// ============================================================
function verdictCfg(v) {
  const cfgMap = {
    ELIGIBLE_STRONG: {
      bg: 'bg-green-50',
      border: 'border-green-500',
      text: 'text-green-700',
      badge: 'bg-green-100 text-green-800 border-green-300',
      label: 'ELIGIBLE — STRONG TAX DEFERRAL',
      shortLabel: 'ELIGIBLE ✅✅',
      icon: '✅',
    },
    ELIGIBLE_MODERATE: {
      bg: 'bg-green-50',
      border: 'border-green-400',
      text: 'text-green-700',
      badge: 'bg-green-100 text-green-800 border-green-300',
      label: 'ELIGIBLE — MODERATE BENEFIT',
      shortLabel: 'ELIGIBLE ✅',
      icon: '✅',
    },
    PARTIALLY_DEFERRED: {
      bg: 'bg-amber-50',
      border: 'border-amber-400',
      text: 'text-amber-700',
      badge: 'bg-amber-100 text-amber-800 border-amber-300',
      label: 'PARTIALLY DEFERRED',
      shortLabel: 'PARTIAL 🟡',
      icon: '🟡',
    },
    AT_RISK: {
      bg: 'bg-amber-50',
      border: 'border-amber-500',
      text: 'text-amber-700',
      badge: 'bg-amber-100 text-amber-800 border-amber-300',
      label: 'AT RISK',
      shortLabel: 'AT RISK ⚠',
      icon: '⚠️',
    },
    NOT_ELIGIBLE: {
      bg: 'bg-red-50',
      border: 'border-red-500',
      text: 'text-red-700',
      badge: 'bg-red-100 text-red-800 border-red-300',
      label: 'NOT ELIGIBLE',
      shortLabel: 'NOT ELIGIBLE ❌',
      icon: '❌',
    },
  }
  return cfgMap[v] || cfgMap['NOT_ELIGIBLE']
}

// ============================================================
// URL PARAMETER IMPORT
// ============================================================
const URL_PARAM_MAP = {
  op: 'original_purchase_price',
  oc: 'original_closing_costs',
  ci: 'capital_improvements',
  yh: 'years_held',
  sp: 'sale_price',
  sc: 'selling_costs_pct',
  lb: 'current_loan_balance',
  dt: 'total_depreciation_taken',
  rp: 'replacement_purchase_price',
  rl: 'replacement_loan_amount',
  cb: 'cash_boot_received',
  fs: 'filing_status',
  lt: 'federal_ltcg_bracket',
  st: 'state_cg_rate',
  ai: 'annual_income',
  sd: 'sale_date',
}

function importFromUrlParams(query) {
  for (const [shortKey, fullKey] of Object.entries(URL_PARAM_MAP)) {
    if (query[shortKey] !== undefined) {
      const stringFields = ['filing_status', 'sale_date']
      if (stringFields.includes(fullKey)) {
        inp.value[fullKey] = query[shortKey]
      } else {
        const parsed = parseFloat(query[shortKey])
        if (!isNaN(parsed)) inp.value[fullKey] = parsed
      }
    }
  }
}

function serializeInputsToUrlParams() {
  const params = []
  for (const [shortKey, fullKey] of Object.entries(URL_PARAM_MAP)) {
    const value = inp.value[fullKey]
    if (value !== null && value !== undefined && value !== '') {
      params.push(`${shortKey}=${encodeURIComponent(value)}`)
    }
  }
  return params.join('&')
}

// ============================================================
// SCENARIO PANEL
// ============================================================
function openSaveScenario() {
  triggerScenarioSave.value = true
  nextTick(() => { triggerScenarioSave.value = false })
}

const currentScenarioResult = computed(() => {
  const r = results.value
  if (!r) return undefined
  const cfg = verdictCfg(r.verdict)
  return {
    primaryMetric: 'Tax Deferred',
    primaryValue: fmtDollarFull(r.tax_deferred),
    badgeLabel: cfg.shortLabel,
    badgeColor: cfg.badge,
    purchasePrice: inp.value.replacement_purchase_price,
    profit: r.tax_deferred,
  }
})

function onScenarioSaved(_id) {}

// ============================================================
// LIFECYCLE
// ============================================================
onMounted(() => {
  importFromUrlParams(route.query)
})

// ============================================================
// STATIC SEO CONTENT DATA
// ============================================================
const searchHooks = [
  { q: '"How much tax can I defer with a 1031 exchange?"', a: 'Calculator returns exact Tax Deferred amount based on your sale price, basis, depreciation taken, and tax bracket. Enter your numbers above for a precise estimate.' },
  { q: '"1031 exchange example with numbers"', a: 'See the worked example above — $500K sale, $200K original purchase, 10-year hold = ~$87K Tax Deferred at 15% LTCG, 5% state, NIIT applicable.' },
  { q: '"What happens if I miss the 45-day deadline?"', a: 'Exchange dies — even if within 180-day window. Calculator\'s Verdict turns NOT ELIGIBLE and you owe full capital gains tax as if no exchange was attempted.' },
  { q: '"1031 exchange rules 2026"', a: 'Federal LTCG brackets (0/15/20%), depreciation recapture (25%), state tax (varies), NIIT (3.8% above $250K MFJ / $200K Single). All factored into calculator. 45-day and 180-day deadlines remain unchanged.' },
  { q: '"How do I avoid boot tax in a 1031 exchange?"', a: 'Match replacement value AND replacement debt to relinquished. Boot = $0 = no tax. Calculator shows exactly when boot triggers across all three types (cash, mortgage, trade-down).' },
  { q: '"Can I live in a 1031 exchange property?"', a: 'Not initially — investment property only. After holding as investment for 2+ years, IRS safe harbor rules may permit conversion to primary residence. Consult CPA on safe harbor rules.' },
  { q: '"How much tax do you pay on a 1031 exchange?"', a: 'Zero, if all conditions met and no boot. If partial exchange, boot tax owed — recapture-first allocation: up to 25% × boot (recapture portion) + your LTCG bracket × remaining boot.' },
  { q: '"1031 exchange deadline rules"', a: '45 days to identify replacement in writing to QI. 180 days to close. Both calendar days. Both absolute. Missing 45-day = exchange dead even within 180-day window.' },
]

const howToSteps = [
  { title: 'Enter relinquished property details', body: 'Original purchase price, capital improvements, years held, sale price, selling costs %, and current loan balance. Calculator auto-calculates depreciation using simplified 27.5-year residential schedule — override with your actual Schedule E depreciation if available.' },
  { title: 'Enter replacement property details', body: 'Replacement Purchase Price and Replacement Loan Amount. For full tax deferral, the replacement value must be ≥ your net sale proceeds AND replacement debt must be ≥ current loan balance. Either shortfall creates boot.' },
  { title: 'Set your tax profile', body: 'Filing Status (MFJ/Single/HoH), Federal LTCG Bracket (0/15/20%), State Capital Gains Rate (set 0% for FL/TX/NV/WA/SD/AK/WY/NH/TN), and Annual Income for NIIT determination. NIIT 3.8% applies automatically if AGI > $250K MFJ or $200K Single.' },
  { title: 'Set sale and exchange dates', body: 'Enter the closing date of your relinquished property sale. Calculator computes 45-day Identification Deadline and 180-Day Exchange Deadline automatically. Both are absolute calendar days — no business-day extensions.' },
  { title: 'Read the Eligibility Verdict at the top', body: 'ELIGIBLE STRONG (≥$50K deferred, no boot) / ELIGIBLE MODERATE ($10K-$50K) / PARTIALLY DEFERRED (boot present) / AT RISK (tight deadline, small savings, or replacement < 80% of sale price) / NOT ELIGIBLE (hard fail). Verdict is ASSUMED — not verified. Final eligibility requires CPA + QI + attorney.' },
]

const proTips = [
  { title: 'Override Auto-Depreciation', body: 'Calculator uses simplified 27.5-year residential schedule. If you took bonus depreciation, cost segregation, or land adjustments, enter actual depreciation from Schedule E for accuracy.' },
  { title: 'Check Your LTCG Bracket', body: 'Most investors land in 15% (income $94K–$583K MFJ in 2026). Top 20% triggers above $583K MFJ. Below $94K MFJ may qualify for 0% LTCG rate.' },
  { title: 'Boot Is Taxed Recapture-First', body: 'With $100K depreciation taken and $50K of boot, the entire $50K is taxed at 25% recapture rate — not 15% LTCG. This catches many investors off-guard at filing.' },
  { title: 'Verdict Downgrade for Small Benefits', body: 'If Tax Deferred < $10K, calculator downgrades to AT RISK regardless of structural eligibility. QI fees ($750–$2,500) plus deadline pressure often exceed small benefits.' },
]

const inputsTable = [
  { name: 'Sale Price', req: true, def: 'Required' },
  { name: 'Selling Costs %', req: false, def: 'Enter commission + closing' },
  { name: 'Original Purchase Price', req: true, def: 'Required' },
  { name: 'Original Closing Costs', req: false, def: '0' },
  { name: 'Capital Improvements', req: false, def: '0' },
  { name: 'Years Held', req: false, def: 'For auto-depreciation' },
  { name: 'Mortgage Payoff at Sale', req: false, def: '0 (all-cash)' },
  { name: 'Total Depreciation Taken', req: false, def: 'Auto-calc (27.5yr)' },
  { name: 'Replacement Property Price', req: true, def: 'Required' },
  { name: 'New Mortgage Amount', req: false, def: '0' },
  { name: 'Cash Boot Received', req: false, def: '0' },
  { name: 'Filing Status', req: false, def: 'Married Filing Jointly' },
  { name: 'Federal LTCG Bracket', req: false, def: '15%' },
  { name: 'State Capital Gains Rate', req: false, def: 'Enter your state rate' },
  { name: 'Annual Income (AGI)', req: false, def: 'For NIIT check' },
  { name: 'Sale Date', req: false, def: 'Today' },
]

const outputsTable = [
  { name: 'Eligibility Verdict', formula: '5 tiers (ELIGIBLE STRONG / MODERATE / PARTIAL / AT RISK / NOT ELIGIBLE)' },
  { name: 'Tax Deferred', formula: 'Total Tax If Sold − Tax If Exchanged' },
  { name: 'Total Tax If Sold', formula: 'Fed Recapture + Fed LTCG + State + NIIT' },
  { name: 'Tax If Exchanged', formula: 'Boot Tax only (recapture-first allocation)' },
  { name: 'Realized Gain', formula: 'Sale Price − Selling Costs − Adjusted Basis' },
  { name: 'Recapture Portion', formula: 'MIN(Realized Gain, Depreciation Taken)' },
  { name: 'LTCG Portion', formula: 'Realized Gain − Recapture Portion' },
  { name: 'Total Boot', formula: 'Cash Boot + Mortgage Boot + Trade-Down Boot (capped at Realized Gain)' },
  { name: '45-Day Deadline', formula: 'Sale Date + 45 calendar days' },
  { name: '180-Day Deadline', formula: 'Sale Date + 180 calendar days' },
  { name: 'Days Remaining (ID / Exchange)', formula: '45 or 180 − Days Since Sale' },
]

const verdictTiers = [
  { label: 'ELIGIBLE — STRONG TAX DEFERRAL ✅✅', icon: '✅', bg: 'bg-green-50 border-green-300', textClass: 'text-green-700', meaning: 'All conditions met, no boot, Tax Deferred ≥ $50K. Clear economic case — deferral substantially exceeds QI fees and complexity.' },
  { label: 'ELIGIBLE — MODERATE BENEFIT ✅', icon: '✅', bg: 'bg-green-50 border-green-200', textClass: 'text-green-700', meaning: 'All conditions met, no boot, Tax Deferred $10K–$50K. Workable — verify QI fees ($750–$2,500) leave meaningful net benefit.' },
  { label: 'PARTIALLY DEFERRED 🟡', icon: '🟡', bg: 'bg-amber-50 border-amber-300', textClass: 'text-amber-700', meaning: 'Conditions met but boot present — boot will be taxed now. Exchange works but partial gain taxable immediately (recapture-first allocation).' },
  { label: 'AT RISK ⚠', icon: '⚠️', bg: 'bg-amber-50 border-amber-300', textClass: 'text-amber-700', meaning: 'Deadline within 14 days, replacement < 80% of sale price, OR Tax Deferred < $10K. Exchange viable but tight or economically marginal.' },
  { label: 'NOT ELIGIBLE ❌', icon: '❌', bg: 'bg-red-50 border-red-300', textClass: 'text-red-700', meaning: '45-day or 180-day deadline missed, capital loss on sale, or structural hard fail. Exchange cannot proceed — treat as straight sale.' },
]

const benchmarks = [
  { title: 'Typical Tax Deferred by Deal Size', items: ['Small ($150K–$300K sale, 5-10yr hold): $20K–$50K typical', 'Mid-size ($300K–$600K sale, 10yr+ hold): $50K–$150K', 'Large ($600K+ sale, high-bracket investor): $150K–$500K+'] },
  { title: 'Boot Taxation Patterns', items: ['Cash boot $50K with $100K+ depreciation: full $50K at 25% recapture', 'Cash boot $50K with $30K depreciation: $30K at 25% + $20K at LTCG', 'Combined boot > 50% of gain: significant taxation, reconsider 1031'] },
  { title: 'Deadline Pressure Patterns', items: ['Days 0–30: comfortable identification window', 'Days 31–44: increasing urgency', 'Day 45+: identification CLOSED — exchange dead', 'Days 150–180: execution pressure to close'] },
  { title: '2026 NIIT Thresholds', items: ['Single: AGI > $200,000 → 3.8% applies', 'MFJ: AGI > $250,000 → 3.8% applies', 'HoH: AGI > $200,000 → 3.8% applies', 'NIIT in calculator is upper-bound estimate'] },
]

const strategies = [
  { type: 'First-Time Exchanger', critical: 'Eligibility Verdict + ELIGIBILITY ASSUMED disclosure', misleading: 'Treating ELIGIBLE Verdict as guarantee without confirming QI and like-kind classification', prioritize: 'Engage 1031-specialized CPA + QI BEFORE listing property. Do not rely on calculator alone.' },
  { type: 'Portfolio Builder', critical: 'Tax Deferred amount + Trade-Down Boot avoidance', misleading: 'Comparing 1031 deferral to ROI without evaluating replacement property fundamentals', prioritize: 'Replacement quality over tax savings — a bad replacement at full deferral is worse than a good one with partial boot.' },
  { type: 'Retiree Planning (Swap Till Drop)', critical: 'Death + stepped-up basis end-game; chain compounding', misleading: 'Treating each 1031 as if tax is permanently eliminated (it\'s not — until death)', prioritize: 'Coordinate with estate planner. Document basis tracking across exchanges. Consider Delaware Statutory Trust (DST) for passive structure.' },
  { type: 'Tax Optimizer (High-AGI)', critical: 'Boot recapture-first allocation + NIIT for high-AGI + state CG', misleading: 'Boot Tax = Boot × LTCG rate (uniform — actually recapture-first per IRS)', prioritize: 'Match replacement value AND replacement debt EXACTLY for full deferral. Even $1 of mortgage boot triggers partial taxation.' },
  { type: 'Relocation Investor', critical: 'State CG rate change + NIIT thresholds', misleading: 'Assuming relocation to no-tax state avoids state CG on existing property', prioritize: 'Verify state nexus rules with CPA. Relocating to TX/FL does NOT avoid CA capital gains on CA-based property.' },
]

const applications = [
  { title: 'Pre-Sale Strategic Decision', body: 'Considering selling appreciated property — calculator shows whether 1031 deferral is worth the complexity vs straight sale + tax payment. Compare Tax Deferred to QI fees + deadline pressure.' },
  { title: 'Live Deadline Tracking', body: 'Already in a 1031 (sale closed, looking for replacement) — calculator shows live countdown to 45-day and 180-day deadlines with color-coded urgency.' },
  { title: 'Replacement Property Comparison', body: 'Identified 2-3 replacement candidates — model each to see which produces full deferral vs which triggers boot. After identifying the tax-optimal candidate, evaluate its standalone performance with our <a href="/real-estate-roi-calculator" class="text-yellow-700 font-semibold hover:underline">Real Estate ROI Calculator</a> and <a href="/property-cash-flow-calculator" class="text-yellow-700 font-semibold hover:underline">Property Cash Flow Calculator</a>.' },
  { title: 'Boot Taxation Pre-Check', body: 'Replacement property is smaller or cheaper — calculator shows exact boot amount and recapture-first tax breakdown so you know the tax cost before committing.' },
  { title: 'State Relocation Analysis', body: 'Considering relocating to a no-tax state before sale — calculator shows whether the state CG rate change reduces tax. Note: state nexus rules may invalidate the strategy — verify with CPA.' },
  { title: 'Estate Planning Preview', body: 'Planning to chain 1031s through retirement — calculator quantifies cumulative deferred tax that becomes permanently eliminated at step-up. For multi-property comparison, use the <a href="/compare-deals" class="text-yellow-700 font-semibold hover:underline">Compare Real Estate Deals</a> page with saved scenarios.' },
]

const limitations = [
  { title: 'Eligibility ASSUMED, not verified', body: 'Calculator cannot verify like-kind property classification, Qualified Intermediary usage, deed assignment, or IRS compliance. ELIGIBLE Verdict means inputs structurally permit deferral — not that your specific exchange will succeed. Engage CPA + 1031-specialized attorney before initiating.' },
  { title: 'Tax DEFERRED, not eliminated', body: 'Capital gains tax is postponed, not saved. When replacement is eventually sold without another 1031, accumulated deferred tax becomes due. Calculator shows immediate tax savings — not lifetime tax savings.' },
  { title: 'State tax simplified', body: 'Calculator applies state rate as flat % to total gain. Actual state treatment of depreciation recapture varies — some states conform to federal 25%, others tax at ordinary income rates. Consult a state-licensed CPA.' },
  { title: 'NIIT simplified', body: 'NIIT shown is 3.8% × full gain when AGI > threshold. Actual NIIT = MIN(Net Investment Income, AGI excess) × 3.8% — may be lower at marginal AGI. Calculator output is upper-bound estimate.' },
  { title: 'Auto-depreciation simplified', body: 'Auto-depreciation uses 27.5-year residential schedule on (Original Price + Closing Costs). Does NOT model land-value separation, bonus depreciation, cost segregation, or commercial 39-year schedule. Override with actual Schedule E depreciation.' },
  { title: 'Reverse 1031 and Improvement exchanges not modeled', body: 'Calculator covers standard delayed exchanges only. Does NOT model reverse 1031 (replacement before sale), improvement exchanges (build-to-suit), or multi-property identification (3-property / 200% / 95% rules).' },
  { title: 'Single replacement property', body: 'Calculator models one replacement property. For multi-property identification strategies (3-property rule, 200% rule, 95% rule), consult a 1031-specialized attorney.' },
  { title: 'Not a substitute for professional advice', body: 'Educational estimation tool, not tax advice. Before initiating: 1031-specialized CPA (tax planning), 1031-specialized attorney (structure review), Qualified Intermediary (proceeds handling). Not investment or tax advice.' },
]

const commonMistakes = [
  { title: 'Assuming uniform LTCG taxation on boot', body: 'Boot is taxed RECAPTURE-FIRST. With $100K depreciation taken and $50K boot, the full $50K is taxed at 25% recapture — not 15% LTCG. The difference: $12,500 vs $7,500.' },
  { title: 'Using down payment instead of replacement price for boot', body: 'Trade-Down Boot is calculated against FULL Replacement Property Price, not just down payment. Replacement debt counts as reinvestment because it transfers as part of the equity.' },
  { title: 'Missing the 45-day deadline by 1 day', body: '45-day deadline = absolute calendar days, no business-day extension. Missing by even 1 day = exchange dead. Mark Day 40 in your calendar as action deadline.' },
  { title: 'Pursuing 1031 for very small tax savings', body: 'QI fees ($750–$2,500) + deadline pressure + replacement constraints often exceed benefits when Tax Deferred < $10K. Calculator downgrades Verdict to AT RISK in this range.' },
  { title: 'Treating ELIGIBLE Verdict as a guarantee', body: 'Verdict is a structural check on computable inputs. Does NOT verify QI usage, like-kind classification, deed assignment, or IRS compliance. Final determination is made by IRS, not this calculator.' },
  { title: 'Touching sale proceeds even briefly', body: 'Constructive receipt voids the entire 1031. Investor cannot touch proceeds — QI must hold throughout. Even a temporary deposit in investor\'s account is fatal to the exchange.' },
]

const faqItems = [
  { q: 'Does this calculator work for primary residence sales?', a: 'No. 1031 exchanges apply only to investment/business property, not primary residence. For primary residence, use Section 121 exclusion (up to $250K Single / $500K MFJ tax-free gain). Mixed-use cases (rented for years, then converted to residence) are complex — consult CPA.' },
  { q: 'Does an ELIGIBLE Verdict mean my exchange will succeed?', a: 'No. ELIGIBLE means your inputs structurally permit deferral — sale price matches replacement value, debt matches debt, deadlines on track. Does NOT verify Qualified Intermediary usage, like-kind property classification, proper deed assignment, or IRS compliance. Final eligibility requires CPA + 1031-specialized attorney review.' },
  { q: 'Do I save tax permanently with a 1031 exchange?', a: 'No. Tax is DEFERRED, not eliminated. When the replacement property is eventually sold without another 1031, the accumulated deferred tax becomes due. The benefit is the time value of money — preserved capital compounds during the deferral period. Stepped-up basis at death can effectively eliminate deferred tax for heirs.' },
  { q: 'How is boot taxed exactly?', a: 'Boot is taxed RECAPTURE-FIRST per IRC §1245/§1250. If you have $100K depreciation taken and $50K boot: Boot Recapture Portion = MIN($50K, $100K) = $50K → taxed at 25% = $12,500. Boot LTCG Portion = $0. Plus state tax and NIIT on full $50K. Total boot tax with 5% state + NIIT: ~$16,900.' },
  { q: 'What\'s the difference between the 45-day and 180-day deadlines?', a: 'Both are calendar days from sale closing. 45-day: deadline to IDENTIFY replacement property in writing (delivered to QI). 180-day: deadline to CLOSE on identified replacement. Both absolute. No business-day extensions. Missing 45-day = exchange dead even within 180-day window.' },
  { q: 'How accurate are the state tax and NIIT calculations?', a: 'Both are simplified. State tax: applied as flat % to total gain — actual treatment varies (some states conform to 25% federal recapture, others tax at ordinary income rates). NIIT: applied as 3.8% × full gain when AGI > threshold — actual NIIT = MIN(NII, AGI excess) × 3.8%, may be lower at marginal AGI. For exact calculations, consult state-licensed CPA.' },
  { q: 'Can I do a 1031 if I\'m selling a property I lived in part-time?', a: '1031 applies only to investment/business property. Mixed-use cases are complex — IRS considers conversion timing, rental history, and intent. Section 121 exclusion may be more beneficial than 1031. Consult 1031-specialized attorney.' },
  { q: 'What\'s a Qualified Intermediary and why do I need one?', a: 'A Qualified Intermediary (QI) is an independent third party who holds sale proceeds during the exchange period. Investor cannot touch proceeds — doing so triggers "constructive receipt" and full taxation. QI services typically cost $750–$2,500. Choose experienced 1031-specialized QI, engaged before the sale closes.' },
  { q: 'Can I exchange one property for multiple replacement properties?', a: 'Yes. Three identification rules: 3-property rule (up to 3 regardless of value), 200% rule (any number, total ≤ 200% of relinquished sale price), 95% rule (unlimited if you close on 95%+ of identified value). This calculator models single replacement only.' },
  { q: 'What if I\'m doing a Reverse 1031?', a: 'Reverse 1031 exchanges (replacement purchased BEFORE sale) are legal but more complex — require Exchange Accommodation Titleholder (EAT) and stricter time constraints. This calculator does NOT model reverse exchanges. Consult a 1031-specialized attorney.' },
  { q: 'Should I add cash to replacement to avoid mortgage boot?', a: 'Often yes. Mortgage boot from debt relief can be offset by adding equivalent cash to replacement. $50K mortgage boot + $50K additional cash added → no net boot. This calculator assumes worst case (no cash offset to mortgage boot).' },
  { q: 'Can I save scenarios to compare candidate replacements?', a: 'Yes. The Saved Scenarios widget (immediately below the calculator) lets you save up to 20 scenarios for free. Load any saved scenario to restore all inputs and recalculate. Compare scenarios via the Compare Real Estate Deals page.' },
  { q: 'How much tax do you actually pay on a 1031 exchange?', a: 'If all conditions are met and no boot triggers: $0 — full deferral. With boot (partial exchange): tax on boot amount only — recapture-first allocation (25% × recapture portion + LTCG bracket × LTCG portion + state + NIIT). For typical $50K boot with $100K+ depreciation: approximately $15K–$20K tax.' },
  { q: 'What happens if a 1031 exchange fails?', a: 'Failed exchanges are treated as straight sales — full capital gains tax owed on the original sale. Most common failures: missed 45-day identification deadline (most common), missed 180-day completion deadline, QI mishandling, identification format problems, or constructive receipt. Tax owed = full "Total Tax If Sold" amount shown in calculator, plus QI fees.' },
  { q: 'Can you live in a 1031 exchange property?', a: 'Not initially. Replacement must be held for investment or business use. After holding as investment for minimum 2 years, IRS safe harbor rules permit conversion to primary residence. Then wait additional 5 years before claiming Section 121 exclusion. Attempting to claim primary residence intent at exchange time invalidates the 1031.' },
  { q: 'How many times can you do a 1031 exchange?', a: 'Unlimited. Investors can chain 1031 exchanges across decades — each defers accumulated tax from all previous exchanges ("swap till you drop"). At the investor\'s death, basis steps up to fair market value, effectively eliminating accumulated deferred tax for heirs. Each exchange must independently meet all IRS rules and has its own QI fees.' },
]

// ============================================================
// SHARE + PDF
// ============================================================
function shareResult() {
  if (!process.client) return
  const params = new URLSearchParams()
  const i = inp.value
  if (i.sale_price) params.set('sp', i.sale_price)
  if (i.selling_costs_pct) params.set('sc', i.selling_costs_pct)
  if (i.original_purchase_price) params.set('op', i.original_purchase_price)
  if (i.original_closing_costs) params.set('oc', i.original_closing_costs)
  if (i.capital_improvements) params.set('ci', i.capital_improvements)
  if (i.years_held) params.set('yh', i.years_held)
  if (i.current_loan_balance) params.set('lb', i.current_loan_balance)
  if (i.total_depreciation_taken) params.set('dep', i.total_depreciation_taken)
  if (i.replacement_purchase_price) params.set('rp', i.replacement_purchase_price)
  if (i.replacement_loan_amount) params.set('rl', i.replacement_loan_amount)
  if (i.cash_boot_received) params.set('cb', i.cash_boot_received)
  if (i.federal_ltcg_bracket) params.set('fg', i.federal_ltcg_bracket)
  if (i.state_cg_rate) params.set('sr', i.state_cg_rate)
  if (i.filing_status) params.set('fs', i.filing_status)
  if (i.sale_date) params.set('sd', i.sale_date)
  const url = `${window.location.origin}/1031-exchange-calculator?${params.toString()}`
  navigator.clipboard.writeText(url).then(() => {
    shareSuccess.value = true
    setTimeout(() => { shareSuccess.value = false }, 3000)
  }).catch(() => {})
}

async function exportPDF() {
  if (!process.client) return
  const r = results.value
  if (!r) { return }
  try {
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF()
    doc.setFontSize(16)
    doc.text('1031 Exchange Calculator — RealCalc', 14, 20)
    doc.setFontSize(10)
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 28)
    doc.setFontSize(12)
    doc.text(`Eligibility Verdict: ${r.eligibility_verdict}`, 14, 40)
    doc.text(`Tax Deferred: ${fmtDollarFull(r.tax_deferred)}`, 14, 50)
    doc.text(`Tax if Straight Sale: ${fmtDollarFull(r.total_tax_if_sold)}`, 14, 60)
    doc.text(`Tax if Exchanged: ${fmtDollarFull(r.tax_if_exchanged)}`, 14, 70)
    doc.text(`Realized Gain: ${fmtDollarFull(r.realized_gain)}`, 14, 80)
    doc.text(`Depreciation Recapture: ${fmtDollarFull(r.depreciation_recapture)}`, 14, 90)
    if (r.total_boot > 0) {
      doc.text(`Boot Amount: ${fmtDollarFull(r.total_boot)}`, 14, 100)
      doc.text(`Boot Tax: ${fmtDollarFull(r.boot_tax)}`, 14, 110)
    }
    doc.setFontSize(9)
    doc.text('DISCLAIMER: This is an estimation tool, not tax advice. Consult a 1031-specialized CPA.', 14, 130)
    doc.text('arvcalc.com', 14, 280)
    doc.save(`1031-exchange-analysis-${Date.now()}.pdf`)
  } catch (e) {
    console.error('PDF export error:', e)
  }
}

const relatedCalcs = [
  { name: 'Real Estate ROI Calculator', desc: 'Full ROI analysis — use for replacement property evaluation', href: '/real-estate-roi-calculator' },
  { name: 'Property Cash Flow Calculator', desc: 'Year 1 cash flow on replacement property', href: '/property-cash-flow-calculator' },
  { name: 'Cap Rate Calculator', desc: 'Replacement property yield evaluation', href: '/cap-rate-calculator' },
  { name: 'DSCR Calculator', desc: 'Replacement property lender underwriting', href: '/dscr-calculator' },
  { name: 'Cash-on-Cash Calculator', desc: 'Year 1 cash yield on replacement', href: '/cash-on-cash-calculator' },
  { name: 'NOI Calculator', desc: 'Operating income on replacement property', href: '/noi-calculator' },
  { name: 'Compare Real Estate Deals', desc: 'Compare candidate replacement properties side by side', href: '/compare-deals' },
  { name: 'ARV Calculator', desc: 'After-repair value for renovation targets', href: '/arv-calculator' },
  { name: 'BRRRR Calculator', desc: 'Buy-rehab-rent-refinance-repeat strategy', href: '/brrrr-calculator' },
]
</script>
