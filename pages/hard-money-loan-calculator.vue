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
            <li class="text-gray-700 font-semibold">Hard Money Loan Calculator</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- PAGE TITLE + ON THIS PAGE NAV -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-6">
        <div class="mb-4">
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            Hard Money Loan Calculator
          </h1>
          <p class="text-gray-500 mt-2 text-base">Calculate hard money loan cost, points, interest, and cash needed. See if your deal still works before you borrow.</p>
        </div>
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            <li><a href="#what-drives-cost" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Drives Cost</a></li>
            <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Your Result Means</a></li>
            <li><a href="#arv-leverage" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">ARV &amp; Leverage</a></li>
            <li><a href="#cash-at-closing" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Cash at Closing</a></li>
            <li><a href="#exit-risk" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Exit Risk</a></li>
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
              <li><a href="#what-drives-cost" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Drives Cost</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Your Result Means</a></li>
              <li><a href="#arv-leverage" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">ARV &amp; Leverage</a></li>
              <li><a href="#cash-at-closing" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Cash at Closing</a></li>
              <li><a href="#exit-risk" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Exit Risk</a></li>
              <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
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

    <!-- MOBILE LIVE RESULT BAR -->
    <div class="lg:hidden sticky top-[4.5rem] z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <div class="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <svg class="w-4 h-4 flex-shrink-0" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>Total Cost</span>
        </div>
        <div class="flex items-center gap-3">
          <span v-if="hasResult" class="text-2xl font-extrabold leading-none" :style="`color: ${verdictColor}`">
            {{ formatCurrency(r.totalFinancingCost) }}
          </span>
          <span v-else class="text-2xl font-bold text-gray-200">&mdash;</span>
          <span v-if="hasResult"
            class="text-xs font-bold px-2.5 py-1 rounded-full text-white"
            :style="`background: ${verdictColor}`">
            {{ verdictLabel }}
          </span>
          <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
        </div>
      </div>
    </div>

    <!-- MAIN CALCULATOR -->
    <main id="calculator" class="max-w-[1100px] mx-auto px-4 pt-8 pb-10">
      <div class="rounded-3xl p-[3px]" style="background: linear-gradient(135deg, #1e3a5f 0%, #f59e0b 50%, #1e3a5f 100%);">
      <div class="bg-white rounded-[21px] shadow-xl shadow-slate-200/60 p-6" style="overflow: clip;">
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch gap-6">

        <!-- LEFT: INPUTS -->
        <div class="space-y-5 min-w-0">

          <!-- LOAN DETAILS -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 class="text-lg font-bold mb-4" style="color: #1e3a5f;">Loan Details</h2>

            <!-- Loan Amount -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Loan Amount <span class="text-red-500">*</span></label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input v-model.number="inp.loanAmount" type="number" min="1" step="1000"
                  placeholder="Enter loan amount"
                  class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
            </div>

            <!-- Interest Rate -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Annual Interest Rate <span class="text-red-500">*</span></label>
              <div class="relative">
                <input v-model.number="inp.interestRate" type="number" min="0" max="100" step="0.25"
                  placeholder="Enter annual interest rate"
                  class="w-full pl-4 pr-8 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">%</span>
              </div>
              <p class="text-xs text-gray-400 mt-1">Typical hard money rates often range from 10%&ndash;15%, but vary by lender, market, borrower, and deal risk.</p>
            </div>

            <!-- Loan Term -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Loan Term (months) <span class="text-red-500">*</span></label>
              <div class="relative">
                <input v-model.number="inp.loanTermMonths" type="number" min="1" max="120" step="1"
                  placeholder="Enter loan term in months"
                  class="w-full pl-4 pr-16 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">months</span>
              </div>
              <p class="text-xs text-gray-400 mt-1">Typical hard money terms often range from 6&ndash;24 months.</p>
            </div>

            <!-- Points -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Points <span class="text-red-500">*</span></label>
              <div class="relative">
                <input v-model.number="inp.points" type="number" min="0" max="20" step="0.5"
                  placeholder="Enter origination points"
                  class="w-full pl-4 pr-8 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">%</span>
              </div>
              <p class="text-xs text-gray-400 mt-1">Typical hard money points often range from 2%&ndash;4% of loan amount.</p>
            </div>
          </div>

          <!-- FEES & COSTS -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 class="text-lg font-bold mb-4" style="color: #1e3a5f;">Fees &amp; Costs</h2>

            <!-- Origination Fees -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Origination / Admin Fees <span class="text-gray-400 font-normal">(optional)</span></label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input v-model.number="inp.originationFees" type="number" min="0" step="100"
                  placeholder="Optional: origination or admin fees"
                  class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
            </div>

            <!-- Closing Costs -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Other Closing Costs <span class="text-gray-400 font-normal">(optional)</span></label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input v-model.number="inp.closingCosts" type="number" min="0" step="100"
                  placeholder="Optional: title, appraisal, insurance, etc."
                  class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
            </div>

            <!-- Interest Reserve -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Interest Reserve <span class="text-gray-400 font-normal">(optional)</span></label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input v-model.number="inp.interestReserve" type="number" min="0" step="100"
                  placeholder="Optional: prepaid interest held by lender"
                  class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
              <p class="text-xs text-gray-400 mt-1">Interest reserve is prepaid interest held by the lender. It increases cash needed at closing but should not be counted again as extra interest cost.</p>
            </div>

            <!-- Extension Fee -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Extension Fee <span class="text-gray-400 font-normal">(optional)</span></label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input v-model.number="inp.extensionFee" type="number" min="0" step="100"
                  placeholder="Optional: extension fee"
                  class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
              <p class="text-xs text-gray-400 mt-1">Use this if you expect to pay for a loan extension.</p>
            </div>

            <!-- Prepayment Penalty -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Prepayment Penalty <span class="text-gray-400 font-normal">(optional)</span></label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input v-model.number="inp.prepaymentPenalty" type="number" min="0" step="100"
                  placeholder="Optional: prepayment penalty"
                  class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
              <p class="text-xs text-gray-400 mt-1">Use this only if your lender charges a prepayment penalty.</p>
            </div>
          </div>

          <!-- PROJECT DETAILS -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 class="text-lg font-bold mb-4" style="color: #1e3a5f;">Project Details</h2>

            <!-- Purchase Price / Project Cost -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Total Project Cost <span class="text-gray-400 font-normal">(optional)</span></label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input v-model.number="inp.totalProjectCost" type="number" min="0" step="1000"
                  placeholder="Purchase price + rehab budget"
                  class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
              <p class="text-xs text-gray-400 mt-1">Used to calculate LTC (Loan-to-Cost).</p>
            </div>

            <!-- As-Is Property Value -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">As-Is Property Value <span class="text-gray-400 font-normal">(optional)</span></label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input v-model.number="inp.asIsValue" type="number" min="0" step="1000"
                  placeholder="Current property value before rehab"
                  class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
              <p class="text-xs text-gray-400 mt-1">Used to calculate As-Is LTV.</p>
            </div>

            <!-- ARV -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">After-Repair Value (ARV) <span class="text-gray-400 font-normal">(optional)</span></label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input v-model.number="inp.arv" type="number" min="0" step="1000"
                  placeholder="Estimated value after renovation"
                  class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
              <p class="text-xs text-gray-400 mt-1">Used to calculate ARV LTV. Most hard money lenders cap at 70%&ndash;75% ARV LTV.</p>
            </div>

            <!-- Exit Strategy -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Exit Strategy</label>
              <select v-model="inp.exitStrategy"
                class="w-full px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium bg-white">
                <option value="Sale">Sale (flip)</option>
                <option value="Refinance">Refinance (hold)</option>
                <option value="Other">Other / undecided</option>
              </select>
            </div>
          </div>

          <!-- VALIDATION ERRORS -->
          <div v-if="errors.length" class="bg-red-50 border border-red-200 rounded-2xl p-4">
            <p class="text-sm font-bold text-red-700 mb-2">Please fix the following:</p>
            <ul class="space-y-1">
              <li v-for="err in errors" :key="err" class="text-sm text-red-600 flex items-start gap-2">
                <span class="mt-0.5">&bull;</span><span>{{ err }}</span>
              </li>
            </ul>
          </div>

        </div>

        <!-- RIGHT: RESULTS -->
        <div class="min-w-0 lg:relative lg:overflow-hidden">
        <div class="bg-gray-50 scrollbar-thin lg:absolute lg:inset-0 lg:overflow-y-auto">
        <div class="space-y-4 p-4 lg:p-5">

          <!-- MAIN RESULT CARD -->
          <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            <!-- Verdict Header -->
            <div class="p-5 text-center" :style="{ background: verdictColor }">
              <p class="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">Total Financing Cost</p>
              <div class="text-4xl font-extrabold text-white mb-1">{{ formatCurrency(r.totalFinancingCost) }}</div>
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-2">
                {{ verdictLabel }}
              </div>
              <p class="text-white/90 text-sm font-medium">{{ verdictSubtitle }}</p>
            </div>

            <!-- ARV LTV Red Flag -->
            <div v-if="r.arvLtv !== null && r.arvLtv > 75" class="px-5 py-3 bg-red-50 border-b border-red-100">
              <p class="text-xs font-bold text-red-700">ARV LTV above 75% may not be financeable with many hard money lenders.</p>
            </div>

            <!-- LTC > 90% Warning -->
            <div v-if="r.ltc !== null && r.ltc > 90" class="px-5 py-3 bg-amber-50 border-b border-amber-200">
              <p class="text-xs font-bold text-amber-800">LTC above 90% &mdash; high leverage. Most hard money lenders cap LTC at 85%&ndash;90%.</p>
            </div>

            <!-- As-Is LTV > 100% Warning -->
            <div v-if="r.asIsLtv !== null && r.asIsLtv > 100" class="px-5 py-3 bg-red-50 border-b border-red-100">
              <p class="text-xs font-bold text-red-700">Loan exceeds as-is property value. LTV above 100% &mdash; review your inputs.</p>
            </div>

            <!-- Flip financing cost note -->
            <div v-if="inp.exitStrategy === 'Sale' && r.financingCostPctOfProject !== null && r.financingCostPctOfProject > 10" class="px-5 py-3 bg-amber-50 border-b border-amber-200">
              <p class="text-xs font-bold text-amber-800">For fix-and-flip projects, financing cost above 10% of project cost can materially reduce profit margin.</p>
            </div>

            <!-- Primary Metrics -->
            <div class="p-5 space-y-3">

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Monthly Interest-Only Payment</span>
                <span class="text-lg font-extrabold" style="color: #1e3a5f;">{{ formatCurrency(r.monthlyPayment) }}</span>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Total Interest ({{ safeLoanTermMonths }}mo)</span>
                <span class="text-base font-bold text-gray-800">{{ formatCurrency(r.totalInterest) }}</span>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Points Cost ({{ safePoints }}%)</span>
                <span class="text-base font-bold text-gray-800">{{ formatCurrency(r.pointsCost) }}</span>
              </div>

              <div v-if="safeOriginationFees > 0" class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Origination / Admin Fees</span>
                <span class="text-base font-bold text-gray-800">{{ formatCurrency(safeOriginationFees) }}</span>
              </div>

              <div v-if="safeClosingCosts > 0" class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Other Closing Costs</span>
                <span class="text-base font-bold text-gray-800">{{ formatCurrency(safeClosingCosts) }}</span>
              </div>

              <div v-if="safeExtensionFee > 0" class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Extension Fee</span>
                <span class="text-base font-bold text-gray-800">{{ formatCurrency(safeExtensionFee) }}</span>
              </div>

              <div v-if="safePrepaymentPenalty > 0" class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Prepayment Penalty</span>
                <span class="text-base font-bold text-gray-800">{{ formatCurrency(safePrepaymentPenalty) }}</span>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100 bg-gray-50 -mx-5 px-5">
                <span class="text-sm font-bold" style="color: #1e3a5f;">Total Financing Cost</span>
                <span class="text-lg font-extrabold" :style="`color: ${verdictColor}`">{{ formatCurrency(r.totalFinancingCost) }}</span>
              </div>

              <div v-if="r.financingCostPctOfProject !== null" class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Financing Cost as % of Project</span>
                <span class="text-base font-bold text-gray-800">{{ r.financingCostPctOfProject.toFixed(1) }}%</span>
              </div>

              <!-- Cash Needed at Closing -->
              <div class="flex items-center justify-between py-2 border-b border-gray-100 bg-blue-50 -mx-5 px-5">
                <span class="text-sm font-bold text-blue-900">Cash Needed at Closing</span>
                <span class="text-lg font-extrabold text-blue-800">{{ formatCurrency(r.cashNeededAtClosing) }}</span>
              </div>

              <div v-if="r.borrowerCashToProject > 0" class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Borrower Cash to Project</span>
                <span class="text-base font-bold text-gray-800">{{ formatCurrency(r.borrowerCashToProject) }}</span>
              </div>

              <!-- Leverage Ratios -->
              <div v-if="r.ltc !== null" class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">LTC (Loan-to-Cost)</span>
                <span class="text-base font-bold text-gray-800">{{ r.ltc.toFixed(1) }}%</span>
              </div>

              <div v-if="r.asIsLtv !== null" class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">As-Is LTV</span>
                <span class="text-base font-bold text-gray-800">{{ r.asIsLtv.toFixed(1) }}%</span>
              </div>

              <div v-if="r.arvLtv !== null" class="flex items-center justify-between py-2" :class="r.arvLtv > 75 ? 'border-b border-red-200' : 'border-b border-gray-100'">
                <span class="text-sm font-medium" :class="r.arvLtv > 75 ? 'text-red-700 font-bold' : 'text-gray-600'">ARV LTV</span>
                <span class="text-base font-bold" :class="r.arvLtv > 75 ? 'text-red-700' : 'text-gray-800'">{{ r.arvLtv.toFixed(1) }}%</span>
              </div>

            </div>

            <!-- Draw Schedule Disclaimer -->
            <div class="px-5 pb-4">
              <div class="p-3 rounded-xl bg-gray-50 border border-gray-200">
                <p class="text-xs text-gray-500">
                  <strong>Assumes full loan funding at closing.</strong> Actual rehab loans may use draw schedules, which can change interest cost and cash-flow timing. This is an estimate, not a lender quote.
                </p>
              </div>
            </div>

          </div>

          <!-- EMPTY STATE -->
          <div v-else class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
            <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style="background: #f0f4f8;">
              <svg class="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <p class="text-gray-500 font-medium text-sm">Enter loan amount, rate, term, and points to see your total financing cost.</p>
          </div>

          <!-- SENSITIVITY TABLE -->
          <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-3" style="color: #1e3a5f;">Cost Sensitivity &mdash; Term Changes</h3>
            <p class="text-xs text-gray-400 mb-3">How total financing cost shifts at different loan terms.</p>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-gray-200">
                    <th class="text-left py-2 pr-3 font-bold text-gray-600 text-xs">Term</th>
                    <th class="text-center py-2 px-2 font-bold text-gray-600 text-xs">Total Interest</th>
                    <th class="text-center py-2 px-2 font-bold text-gray-600 text-xs">Total Cost</th>
                    <th class="text-right py-2 font-bold text-gray-600 text-xs">Verdict</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in sensitivityRows" :key="row.term"
                    :class="row.isCurrent ? 'bg-yellow-50 font-semibold' : 'hover:bg-gray-50'">
                    <td class="py-2 pr-3 text-gray-800 text-xs">{{ row.term }}mo</td>
                    <td class="py-2 px-2 text-center text-xs" :class="row.isCurrent ? 'font-bold' : ''">{{ formatCurrency(row.totalInterest) }}</td>
                    <td class="py-2 px-2 text-center text-xs font-semibold">{{ formatCurrency(row.totalCost) }}</td>
                    <td class="py-2 text-right text-xs font-semibold" :style="{ color: row.color }">{{ row.verdict }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- DEAL CONTEXT -->
          <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-3" style="color: #1e3a5f;">Deal Context</h3>
            <div class="p-4 rounded-xl border" :class="verdictBgClass">
              <p class="text-sm font-bold mb-2" :class="verdictTextClass">{{ verdictLabel }}</p>
              <p class="text-sm text-gray-700">{{ dealContextText }}</p>
            </div>
          </div>

          <!-- SHARE + PDF EXPORT -->
          <div v-if="hasResult" class="space-y-2">
            <div class="flex gap-3">
              <button @click="shareUrl"
                class="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 font-semibold text-sm text-gray-700 transition bg-white">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                </svg>
                {{ shareCopied ? 'Copied!' : 'Share' }}
              </button>
              <button @click="exportPdf"
                class="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 font-semibold text-sm text-gray-700 transition bg-white">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Export PDF
              </button>
            </div>
          </div>

          <!-- GO DEEPER -->
          <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-3" style="color: #1e3a5f;">Go Deeper</h3>
            <p class="text-xs text-gray-500 mb-3">Hard money is one piece of the deal. Validate with:</p>
            <div class="space-y-2">
              <NuxtLink to="/fix-and-flip-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">Fix &amp; Flip Calculator</p>
                  <p class="text-xs text-gray-500">Estimate flip profit after all costs</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/arv-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">ARV Calculator</p>
                  <p class="text-xs text-gray-500">Estimate after-repair value using comps</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/ltv-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">LTV Calculator</p>
                  <p class="text-xs text-gray-500">Check leverage ratio and equity position</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/closing-costs-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">Closing Costs Calculator</p>
                  <p class="text-xs text-gray-500">Estimate full cash to close</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
            </div>
          </div>

        </div>
        </div>
        </div>

      </div>
      </div>
      </div>
    </main>

    <!-- SEO CONTENT -->
    <div class="max-w-[1100px] mx-auto px-4 sm:px-6 pb-16 space-y-8">

      <!-- Overview -->
      <div id="overview" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">What Is a Hard Money Loan?</h2>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          A short-term loan based on the deal &mdash; not your income. Hard money lenders focus on the property's value and the project's potential, not traditional borrower qualifications.
        </p>
        <div class="p-5 rounded-xl bg-gray-900 text-green-400 font-mono text-sm mb-4 space-y-1">
          <div>Typical: 10%&ndash;15% rate, 2%&ndash;4% points, 6&ndash;24 months</div>
        </div>
        <div class="bg-blue-50 rounded-xl p-4 border border-blue-200 mb-4">
          <p class="text-sm font-bold text-blue-900 mb-2">Quick Example</p>
          <ul class="text-sm text-blue-800 space-y-1">
            <li>&bull; Loan: $250,000 at 12% for 6 months</li>
            <li>&bull; Interest: ~$15,000</li>
            <li>&bull; Points (2%): ~$5,000</li>
            <li>&bull; Total financing cost: ~$20,000 (~8% of loan)</li>
            <li>&bull; Extend to 9 months &rarr; +$7,500 more interest</li>
          </ul>
        </div>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-green-50 border border-green-200">
            <p class="text-sm font-bold text-green-900 mb-1">Hard money is useful for:</p>
            <ul class="text-sm text-green-800 space-y-1">
              <li>&bull; Fix-and-flip projects</li>
              <li>&bull; Bridge financing</li>
              <li>&bull; Fast closings</li>
              <li>&bull; Non-qualifying borrowers</li>
            </ul>
          </div>
          <div class="p-4 rounded-xl bg-red-50 border border-red-200">
            <p class="text-sm font-bold text-red-900 mb-1">Hard money is NOT:</p>
            <ul class="text-sm text-red-800 space-y-1">
              <li>&bull; Cheap financing</li>
              <li>&bull; A long-term hold strategy</li>
              <li>&bull; Guaranteed approval</li>
              <li>&bull; A substitute for deal analysis</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Important Context -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Important Context</h2>
        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-amber-50 border border-amber-200">
            <ul class="text-sm text-amber-900 space-y-2">
              <li>&bull; Hard money is expensive financing &mdash; that is the tradeoff for speed and flexibility</li>
              <li>&bull; Monthly payment is NOT total cost &mdash; total cost = interest + points + fees</li>
              <li>&bull; Exit strategy is critical &mdash; hard money only works if you exit on time</li>
              <li>&bull; This is an estimate, not a lender quote &mdash; actual terms vary by lender</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- How to Use -->
      <div id="how-to-use" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">How to Use This Calculator</h2>
        <ol class="space-y-4">
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm" style="background: #1e3a5f;">1</div>
            <div>
              <p class="font-semibold text-gray-800">Enter the loan amount</p>
              <p class="text-sm text-gray-600">The total hard money loan you plan to borrow.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm" style="background: #1e3a5f;">2</div>
            <div>
              <p class="font-semibold text-gray-800">Enter rate, term, and points</p>
              <p class="text-sm text-gray-600">These three inputs drive the majority of your financing cost.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm" style="background: #1e3a5f;">3</div>
            <div>
              <p class="font-semibold text-gray-800">Add fees and closing costs</p>
              <p class="text-sm text-gray-600">Include origination fees, closing costs, and interest reserve if applicable.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm" style="background: #1e3a5f;">4</div>
            <div>
              <p class="font-semibold text-gray-800">Enter project details (optional)</p>
              <p class="text-sm text-gray-600">Add total project cost and ARV to see LTC, LTV, and ARV LTV leverage ratios.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm" style="background: #f59e0b; color: #1e3a5f;">5</div>
            <div>
              <p class="font-semibold text-gray-800">Read total cost and decide</p>
              <p class="text-sm text-gray-600">If financing cost eats your profit, the deal may not work with hard money.</p>
            </div>
          </li>
        </ol>
      </div>

      <!-- Formula -->
      <div id="formula" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Hard Money Loan Formulas</h2>
        <div class="p-5 rounded-xl bg-gray-900 text-green-400 font-mono text-sm mb-4 space-y-2">
          <div>Monthly Payment = Loan Amount &times; (Annual Rate / 12)</div>
          <div>Total Interest = Monthly Payment &times; Term (months)</div>
          <div>Points Cost = Loan Amount &times; Points %</div>
          <div>Total Financing Cost = Interest + Points + Fees + Closing + Extension + Penalty</div>
          <div>Cash at Closing = Borrower Gap + Points + Fees + Closing + Interest Reserve</div>
          <div>LTC = Loan / Total Project Cost</div>
          <div>As-Is LTV = Loan / As-Is Value</div>
          <div>ARV LTV = Loan / After-Repair Value</div>
        </div>
        <div class="p-4 rounded-xl bg-amber-50 border border-amber-200">
          <p class="text-sm text-amber-900">
            <strong>Interest Reserve</strong> is prepaid interest held by the lender. It increases cash needed at closing but is NOT added to total financing cost &mdash; it is already part of total interest.
          </p>
        </div>
      </div>

      <!-- What Drives Cost -->
      <div id="what-drives-cost" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">What Really Drives Hard Money Cost</h2>
        <div class="space-y-4">
          <div class="p-4 rounded-xl border-l-4 border-red-500 bg-red-50">
            <p class="font-bold text-red-800 mb-1">Interest Rate</p>
            <p class="text-sm text-red-700">Higher rate = higher monthly cost. Even 1% difference on a $300k loan adds $250/mo.</p>
          </div>
          <div class="p-4 rounded-xl border-l-4 border-amber-500 bg-amber-50">
            <p class="font-bold text-amber-800 mb-1">Points</p>
            <p class="text-sm text-amber-700">Upfront cost paid immediately. 3 points on $300k = $9,000 before you start.</p>
          </div>
          <div class="p-4 rounded-xl border-l-4 border-blue-500 bg-blue-50">
            <p class="font-bold text-blue-800 mb-1">Time</p>
            <p class="text-sm text-blue-700">The longer you hold, the more you pay. Time is the hidden killer &mdash; 3 extra months on a $300k loan at 12% = $9,000 more.</p>
          </div>
        </div>
      </div>

      <!-- Result Meaning -->
      <div id="result-meaning" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">What Your Result Means</h2>
        <div class="space-y-4">
          <div class="p-4 rounded-xl border-l-4 border-green-500 bg-green-50">
            <p class="font-bold text-green-800 mb-1">LOW COST &mdash; Below 5% of loan</p>
            <p class="text-sm text-green-700">Financing cost is manageable relative to the loan. Short hold, reasonable rate. Profit margin should survive if the deal is solid.</p>
          </div>
          <div class="p-4 rounded-xl border-l-4 border-blue-500 bg-blue-50">
            <p class="font-bold text-blue-800 mb-1">MODERATE &mdash; 5% to 10% of loan</p>
            <p class="text-sm text-blue-700">Common range for typical hard money deals. Verify that your projected profit still makes sense after this cost.</p>
          </div>
          <div class="p-4 rounded-xl border-l-4 border-amber-500 bg-amber-50">
            <p class="font-bold text-amber-800 mb-1">HIGH &mdash; 10% to 15% of loan</p>
            <p class="text-sm text-amber-700">Financing drag is significant. Delays or cost overruns could erase the deal. Stress-test before committing.</p>
          </div>
          <div class="p-4 rounded-xl border-l-4 border-red-500 bg-red-50">
            <p class="font-bold text-red-800 mb-1">VERY HIGH &mdash; Above 15% of loan</p>
            <p class="text-sm text-red-700">Financing cost is aggressive. Only viable if margins are exceptional. Most flips cannot absorb this level of financing drag.</p>
          </div>
        </div>
      </div>

      <!-- ARV & Leverage -->
      <div id="arv-leverage" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">ARV and Leverage</h2>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          Hard money lenders typically cap ARV LTV around 70%&ndash;75%. If you exceed that, many lenders say no &mdash; others increase rate and points.
        </p>
        <div class="p-5 rounded-xl bg-gray-900 text-green-400 font-mono text-sm mb-4 space-y-1">
          <div>ARV LTV = Loan Amount &divide; After-Repair Value</div>
          <div>LTC = Loan Amount &divide; Total Project Cost</div>
          <div>As-Is LTV = Loan Amount &divide; Current Property Value</div>
        </div>
        <div class="p-4 rounded-xl bg-red-50 border border-red-200">
          <p class="text-sm text-red-800">
            <strong>Check ARV LTV before shopping the deal.</strong> LTC, As-Is LTV, and ARV LTV are different metrics &mdash; lenders may use any combination. Do not confuse them.
          </p>
        </div>
      </div>

      <!-- Cash at Closing -->
      <div id="cash-at-closing" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Cash Needed at Closing</h2>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          Hard money closing requires more than just the gap between loan and project cost. You also pay points, fees, and possibly interest reserve upfront.
        </p>
        <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
          <p class="text-sm font-bold text-blue-900 mb-2">Example</p>
          <ul class="text-sm text-blue-800 space-y-1">
            <li>&bull; Project: $300,000, Loan: $225,000</li>
            <li>&bull; Gap: $75,000</li>
            <li>&bull; + Points: $6,750</li>
            <li>&bull; + Fees + Closing: $3,000</li>
            <li>&bull; = Often $85,000+ cash needed</li>
          </ul>
        </div>
      </div>

      <!-- Exit Risk -->
      <div id="exit-risk" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Exit Strategy Risk</h2>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          Hard money only works if you exit on time. If you don't, interest keeps accruing, extension fees may apply, and profit shrinks. No exit = high risk.
        </p>
        <div class="p-4 rounded-xl bg-amber-50 border border-amber-200">
          <p class="text-sm text-amber-900">
            <strong>A bad hard money loan turns winners into losers.</strong> 2 extra points + 3 months of delay = profit gone. Check your numbers before you sign.
          </p>
        </div>
      </div>

      <!-- Limitations -->
      <div id="limitations" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Limitations</h2>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          This calculator gives a realistic estimate &mdash; not a lender quote.
        </p>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-green-50 border border-green-200">
            <p class="text-sm font-bold text-green-900 mb-1">This calculator does:</p>
            <ul class="text-sm text-green-800 space-y-1">
              <li>&bull; Show total financing cost</li>
              <li>&bull; Calculate cash needed at closing</li>
              <li>&bull; Show leverage ratios (LTC, LTV, ARV LTV)</li>
              <li>&bull; Flag risky leverage levels</li>
            </ul>
          </div>
          <div class="p-4 rounded-xl bg-red-50 border border-red-200">
            <p class="text-sm font-bold text-red-900 mb-1">This calculator does NOT:</p>
            <ul class="text-sm text-red-800 space-y-1">
              <li>&bull; Model full draw schedules</li>
              <li>&bull; Include every lender fee</li>
              <li>&bull; Guarantee loan approval</li>
              <li>&bull; Promise profitability</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Real Investment Insight -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Real Investment Insight</h2>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          Hard money doesn't kill deals &mdash; bad assumptions do. The best investors calculate financing cost first, not last.
        </p>
        <div class="p-4 rounded-xl bg-blue-50 border border-blue-200">
          <p class="text-sm font-bold text-blue-900">Be the investor who knows their numbers before talking to a lender.</p>
        </div>
      </div>

      <!-- FAQ -->
      <div id="faq" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="font-bold text-gray-800 mb-2">What is a hard money loan?</p>
            <p class="text-sm text-gray-700">A short-term loan based on the deal &mdash; not your income. Typical terms: 10%&ndash;15% rate, 2%&ndash;4% points, 6&ndash;24 months. Used primarily for fix-and-flip and bridge financing.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="font-bold text-gray-800 mb-2">What is the difference between LTC, LTV, and ARV LTV?</p>
            <p class="text-sm text-gray-700">LTC (Loan-to-Cost) compares the loan to total project cost. LTV compares it to current as-is value. ARV LTV compares it to the projected after-repair value. Each metric serves a different purpose &mdash; lenders may use any or all of them.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="font-bold text-gray-800 mb-2">Why is ARV LTV above 75% a red flag?</p>
            <p class="text-sm text-gray-700">Most hard money lenders cap ARV LTV at 70%&ndash;75%. Above 75%, many lenders decline or offer worse terms. Higher ARV LTV also means less equity cushion if the project underperforms.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="font-bold text-gray-800 mb-2">What is interest reserve?</p>
            <p class="text-sm text-gray-700">Prepaid interest held by the lender at closing. It covers future monthly payments from day one. It increases cash needed at closing but does not add extra interest &mdash; it is part of total interest already.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="font-bold text-gray-800 mb-2">Does this calculator guarantee loan approval?</p>
            <p class="text-sm text-gray-700">No. This is an estimation tool. Actual approval depends on the lender, property, borrower experience, market conditions, and many other factors. Always verify terms with your lender.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="font-bold text-gray-800 mb-2">How does time affect hard money cost?</p>
            <p class="text-sm text-gray-700">Time is the hidden killer. Every additional month adds one more monthly interest payment. A 3-month delay on a $300,000 loan at 12% adds $9,000 in interest alone &mdash; before extension fees.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="font-bold text-gray-800 mb-2">What is total financing cost vs monthly payment?</p>
            <p class="text-sm text-gray-700">Monthly payment shows only interest. Total financing cost includes all interest, points, origination fees, closing costs, extension fees, and prepayment penalties. Always evaluate the total, not just the monthly number.</p>
          </div>
        </div>
      </div>

      <!-- Related Calculators CTA -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Related Calculators</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NuxtLink to="/fix-and-flip-calculator" class="group p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-md transition">
            <p class="font-bold text-sm mb-1" style="color: #1e3a5f;">Fix &amp; Flip Calculator</p>
            <p class="text-xs text-gray-500">Estimate flip profit after all costs</p>
          </NuxtLink>
          <NuxtLink to="/arv-calculator" class="group p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-md transition">
            <p class="font-bold text-sm mb-1" style="color: #1e3a5f;">ARV Calculator</p>
            <p class="text-xs text-gray-500">After-repair value from comps</p>
          </NuxtLink>
          <NuxtLink to="/70-percent-rule-calculator" class="group p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-md transition">
            <p class="font-bold text-sm mb-1" style="color: #1e3a5f;">70% Rule Calculator</p>
            <p class="text-xs text-gray-500">Quick max purchase price for flips</p>
          </NuxtLink>
          <NuxtLink to="/ltv-calculator" class="group p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-md transition">
            <p class="font-bold text-sm mb-1" style="color: #1e3a5f;">LTV Calculator</p>
            <p class="text-xs text-gray-500">Leverage ratio and equity analysis</p>
          </NuxtLink>
          <NuxtLink to="/closing-costs-calculator" class="group p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-md transition">
            <p class="font-bold text-sm mb-1" style="color: #1e3a5f;">Closing Costs Calculator</p>
            <p class="text-xs text-gray-500">Total cash to close breakdown</p>
          </NuxtLink>
          <NuxtLink to="/rehab-cost-estimator" class="group p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-md transition">
            <p class="font-bold text-sm mb-1" style="color: #1e3a5f;">Rehab Cost Estimator</p>
            <p class="text-xs text-gray-500">Estimate renovation budget with contingency</p>
          </NuxtLink>
          <NuxtLink to="/house-flipping-profit-calculator" class="group p-4 rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-md transition">
            <p class="font-bold text-sm mb-1" style="color: #1e3a5f;">House Flipping Profit Calculator</p>
            <p class="text-xs text-gray-500">Real flip profit after ALL costs</p>
          </NuxtLink>
        </div>
      </div>

    </div>

    <!-- FOOTER -->
    <footer class="bg-white border-t border-gray-200 py-8">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 text-center">
        <p class="text-sm text-gray-400">&copy; {{ new Date().getFullYear() }} RealCalc &mdash; Real Estate Investment Hub. For educational purposes only. Not financial advice.</p>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// ─── SEO ──────────────────────────────────────────────────────────────────────
useHead({
  title: 'Hard Money Loan Calculator — Real Cost, Points & Cash Needed (2026)',
  meta: [
    { name: 'description', content: 'Calculate hard money loan cost, points, interest, and cash needed. See if your deal still works before you borrow.' },
    { property: 'og:title', content: 'Hard Money Loan Calculator — Real Cost, Points & Cash Needed (2026)' },
    { property: 'og:description', content: 'Calculate hard money loan cost, points, interest, and cash needed. Free tool for US real estate investors.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://arvcalc.com/hard-money-loan-calculator' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Hard Money Loan Calculator — Real Cost, Points & Cash Needed' },
    { name: 'twitter:description', content: 'Calculate hard money loan cost, points, interest, and cash needed at closing.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://arvcalc.com/hard-money-loan-calculator' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Hard Money Loan Calculator',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Web',
          description: 'Calculate hard money loan total financing cost, points, interest, cash needed at closing, and leverage ratios (LTC, LTV, ARV LTV).',
          url: 'https://arvcalc.com/hard-money-loan-calculator',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is a hard money loan?',
              acceptedAnswer: { '@type': 'Answer', text: 'A short-term loan based on the deal, not borrower income. Typical terms: 10%–15% rate, 2%–4% points, 6–24 months. Used primarily for fix-and-flip and bridge financing.' }
            },
            {
              '@type': 'Question',
              name: 'What is the difference between LTC, LTV, and ARV LTV?',
              acceptedAnswer: { '@type': 'Answer', text: 'LTC compares the loan to total project cost. LTV compares it to current as-is value. ARV LTV compares it to the projected after-repair value. Each metric serves a different purpose and lenders may use any combination.' }
            },
            {
              '@type': 'Question',
              name: 'Why is ARV LTV above 75% a red flag?',
              acceptedAnswer: { '@type': 'Answer', text: 'Most hard money lenders cap ARV LTV at 70%–75%. Above that, many lenders decline or increase rate and points. Higher ARV LTV means less equity cushion.' }
            },
            {
              '@type': 'Question',
              name: 'What is interest reserve in hard money?',
              acceptedAnswer: { '@type': 'Answer', text: 'Prepaid interest held by the lender at closing. It covers future monthly payments and increases cash needed at closing, but is not additional interest cost — it is part of total interest.' }
            },
            {
              '@type': 'Question',
              name: 'Does this calculator guarantee loan approval?',
              acceptedAnswer: { '@type': 'Answer', text: 'No. This is an estimation tool. Actual approval depends on the lender, property, borrower experience, and market conditions.' }
            },
            {
              '@type': 'Question',
              name: 'How does time affect hard money loan cost?',
              acceptedAnswer: { '@type': 'Answer', text: 'Every additional month adds one more interest payment. A 3-month delay on a $300,000 loan at 12% adds $9,000 in interest — before extension fees.' }
            },
            {
              '@type': 'Question',
              name: 'What is total financing cost vs monthly payment?',
              acceptedAnswer: { '@type': 'Answer', text: 'Monthly payment shows only interest. Total financing cost includes all interest, points, fees, and penalties. Always evaluate the total cost, not just the monthly number.' }
            }
          ]
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arvcalc.com' },
            { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://arvcalc.com/calculators' },
            { '@type': 'ListItem', position: 3, name: 'Hard Money Loan Calculator', item: 'https://arvcalc.com/hard-money-loan-calculator' }
          ]
        }
      ])
    }
  ]
})

// ─── STATE ────────────────────────────────────────────────────────────────────
const isNavExpanded = ref(false)
const shareCopied = ref(false)

// ─── INPUTS ───────────────────────────────────────────────────────────────────
const inp = ref({
  loanAmount: null,
  interestRate: null,
  loanTermMonths: null,
  points: null,
  originationFees: null,
  closingCosts: null,
  interestReserve: null,
  extensionFee: null,
  prepaymentPenalty: null,
  totalProjectCost: null,
  asIsValue: null,
  arv: null,
  exitStrategy: 'Sale'
})

// ─── SAFE VALUES ──────────────────────────────────────────────────────────────
const safeLoanAmount = computed(() => (inp.value.loanAmount > 0 ? inp.value.loanAmount : 0))
const safeInterestRate = computed(() => (inp.value.interestRate > 0 ? inp.value.interestRate : 0))
const safeLoanTermMonths = computed(() => (inp.value.loanTermMonths > 0 ? Math.round(inp.value.loanTermMonths) : 0))
const safePoints = computed(() => (inp.value.points >= 0 ? inp.value.points : 0))
const safeOriginationFees = computed(() => (inp.value.originationFees > 0 ? inp.value.originationFees : 0))
const safeClosingCosts = computed(() => (inp.value.closingCosts > 0 ? inp.value.closingCosts : 0))
const safeInterestReserve = computed(() => (inp.value.interestReserve > 0 ? inp.value.interestReserve : 0))
const safeExtensionFee = computed(() => (inp.value.extensionFee > 0 ? inp.value.extensionFee : 0))
const safePrepaymentPenalty = computed(() => (inp.value.prepaymentPenalty > 0 ? inp.value.prepaymentPenalty : 0))

const canCalculate = computed(() =>
  safeLoanAmount.value > 0 &&
  safeInterestRate.value > 0 &&
  safeLoanTermMonths.value > 0 &&
  inp.value.points !== null && inp.value.points >= 0
)

// ─── VALIDATION ───────────────────────────────────────────────────────────────
const errors = computed(() => {
  const errs = []
  if (inp.value.loanAmount !== null && inp.value.loanAmount <= 0) errs.push('Loan amount must be greater than zero.')
  if (inp.value.interestRate !== null && inp.value.interestRate <= 0) errs.push('Interest rate must be greater than zero.')
  if (inp.value.interestRate !== null && inp.value.interestRate > 100) errs.push('Interest rate cannot exceed 100%.')
  if (inp.value.loanTermMonths !== null && inp.value.loanTermMonths <= 0) errs.push('Loan term must be at least 1 month.')
  if (inp.value.points !== null && inp.value.points < 0) errs.push('Points cannot be negative.')
  if (inp.value.originationFees !== null && inp.value.originationFees < 0) errs.push('Origination fees cannot be negative.')
  if (inp.value.closingCosts !== null && inp.value.closingCosts < 0) errs.push('Closing costs cannot be negative.')
  if (inp.value.interestReserve !== null && inp.value.interestReserve < 0) errs.push('Interest reserve cannot be negative.')
  if (inp.value.extensionFee !== null && inp.value.extensionFee < 0) errs.push('Extension fee cannot be negative.')
  if (inp.value.prepaymentPenalty !== null && inp.value.prepaymentPenalty < 0) errs.push('Prepayment penalty cannot be negative.')
  return errs
})

const hasResult = computed(() => canCalculate.value && !errors.value.length)

// ─── CORE RESULTS ─────────────────────────────────────────────────────────────
const r = computed(() => {
  if (!hasResult.value) return null

  const loan = safeLoanAmount.value
  const monthlyRate = safeInterestRate.value / 100 / 12
  const term = safeLoanTermMonths.value

  // Monthly interest-only payment
  const monthlyPayment = loan * monthlyRate

  // Total interest over the term
  const totalInterest = monthlyPayment * term

  // Points cost
  const pointsCost = loan * (safePoints.value / 100)

  // Total financing cost (NO interest reserve — it's prepaid interest already in totalInterest)
  const totalFinancingCost = totalInterest + pointsCost + safeOriginationFees.value + safeClosingCosts.value + safeExtensionFee.value + safePrepaymentPenalty.value

  // Borrower cash to project (gap between project cost and loan, if project cost entered)
  const projectCost = inp.value.totalProjectCost > 0 ? inp.value.totalProjectCost : null
  const borrowerCashToProject = projectCost !== null ? Math.max(0, projectCost - loan) : 0

  // Cash needed at closing
  const cashNeededAtClosing = borrowerCashToProject + pointsCost + safeOriginationFees.value + safeClosingCosts.value + safeInterestReserve.value

  // Leverage ratios
  const ltc = projectCost !== null && projectCost > 0 ? (loan / projectCost) * 100 : null
  const asIsLtv = inp.value.asIsValue > 0 ? (loan / inp.value.asIsValue) * 100 : null
  const arvLtv = inp.value.arv > 0 ? (loan / inp.value.arv) * 100 : null

  // Financing cost as % of project
  const financingCostPctOfProject = projectCost !== null && projectCost > 0 ? (totalFinancingCost / projectCost) * 100 : null

  // Financing cost as % of loan (for verdict)
  const financingCostPctOfLoan = (totalFinancingCost / loan) * 100

  return {
    monthlyPayment,
    totalInterest,
    pointsCost,
    totalFinancingCost,
    cashNeededAtClosing,
    borrowerCashToProject,
    ltc,
    asIsLtv,
    arvLtv,
    financingCostPctOfProject,
    financingCostPctOfLoan
  }
})

// ─── VERDICT ──────────────────────────────────────────────────────────────────
const verdict = computed(() => {
  if (!r.value) return null
  const pct = r.value.financingCostPctOfLoan
  if (pct < 5) return 'LOW'
  if (pct < 10) return 'MODERATE'
  if (pct < 15) return 'HIGH'
  return 'VERY_HIGH'
})

const verdictLabel = computed(() => {
  const map = {
    LOW: 'Low financing cost',
    MODERATE: 'Moderate financing cost',
    HIGH: 'High financing cost',
    VERY_HIGH: 'Very high financing cost'
  }
  return map[verdict.value] || ''
})

const verdictSubtitle = computed(() => {
  if (!r.value) return ''
  return `${r.value.financingCostPctOfLoan.toFixed(1)}% of loan amount`
})

const verdictColor = computed(() => {
  const map = {
    LOW: '#16a34a',
    MODERATE: '#2563eb',
    HIGH: '#d97706',
    VERY_HIGH: '#dc2626'
  }
  return map[verdict.value] || '#6b7280'
})

const verdictBgClass = computed(() => {
  const map = {
    LOW: 'bg-green-50 border-green-200',
    MODERATE: 'bg-blue-50 border-blue-200',
    HIGH: 'bg-amber-50 border-amber-200',
    VERY_HIGH: 'bg-red-50 border-red-200'
  }
  return map[verdict.value] || 'bg-gray-50 border-gray-200'
})

const verdictTextClass = computed(() => {
  const map = {
    LOW: 'text-green-800',
    MODERATE: 'text-blue-800',
    HIGH: 'text-amber-800',
    VERY_HIGH: 'text-red-800'
  }
  return map[verdict.value] || 'text-gray-800'
})

const dealContextText = computed(() => {
  const map = {
    LOW: 'Financing cost is manageable. Short hold and reasonable terms keep the drag low. If the deal itself is solid, hard money should not be the bottleneck.',
    MODERATE: 'Typical hard money range. Verify that your projected profit still works after financing. Run a flip profit or cash flow analysis to confirm.',
    HIGH: 'Financing drag is significant. Delays or cost overruns could erase the deal. Consider negotiating terms or shortening the hold period.',
    VERY_HIGH: 'Financing cost is aggressive. Only viable if margins are exceptional. Most projects cannot absorb this level of cost — stress-test carefully.'
  }
  return map[verdict.value] || ''
})

// ─── SENSITIVITY TABLE ────────────────────────────────────────────────────────
const sensitivityRows = computed(() => {
  if (!r.value) return []

  const loan = safeLoanAmount.value
  const monthlyRate = safeInterestRate.value / 100 / 12
  const currentTerm = safeLoanTermMonths.value
  const pointsCost = r.value.pointsCost
  const fees = safeOriginationFees.value + safeClosingCosts.value + safeExtensionFee.value + safePrepaymentPenalty.value

  const terms = []
  // Generate terms: 3, 6, 9, 12, 18, 24 — but always include current
  const standardTerms = [3, 6, 9, 12, 18, 24]
  for (const t of standardTerms) {
    if (!terms.includes(t)) terms.push(t)
  }
  if (!terms.includes(currentTerm)) terms.push(currentTerm)
  terms.sort((a, b) => a - b)

  return terms.map(term => {
    const monthlyPayment = loan * monthlyRate
    const totalInterest = monthlyPayment * term
    const totalCost = totalInterest + pointsCost + fees
    const pct = (totalCost / loan) * 100

    let v, color
    if (pct < 5) { v = 'LOW'; color = '#16a34a' }
    else if (pct < 10) { v = 'MODERATE'; color = '#2563eb' }
    else if (pct < 15) { v = 'HIGH'; color = '#d97706' }
    else { v = 'VERY HIGH'; color = '#dc2626' }

    return {
      term,
      totalInterest: Math.round(totalInterest),
      totalCost: Math.round(totalCost),
      verdict: v,
      color,
      isCurrent: term === currentTerm
    }
  })
})

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function formatCurrency (val) {
  if (val === null || val === undefined || isNaN(val)) return '$0'
  return '$' + Math.round(val).toLocaleString('en-US')
}

// ─── SHARE ────────────────────────────────────────────────────────────────────
function shareUrl () {
  const params = new URLSearchParams()
  if (inp.value.loanAmount) params.set('loan', inp.value.loanAmount)
  if (inp.value.interestRate) params.set('rate', inp.value.interestRate)
  if (inp.value.loanTermMonths) params.set('term', inp.value.loanTermMonths)
  if (inp.value.points !== null) params.set('pts', inp.value.points)
  if (inp.value.originationFees) params.set('orig', inp.value.originationFees)
  if (inp.value.closingCosts) params.set('cc', inp.value.closingCosts)
  if (inp.value.interestReserve) params.set('ir', inp.value.interestReserve)
  if (inp.value.totalProjectCost) params.set('proj', inp.value.totalProjectCost)
  if (inp.value.asIsValue) params.set('asis', inp.value.asIsValue)
  if (inp.value.arv) params.set('arv', inp.value.arv)

  const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`
  navigator.clipboard.writeText(url).then(() => {
    shareCopied.value = true
    setTimeout(() => { shareCopied.value = false }, 2000)
  })
}

// ─── PDF EXPORT ───────────────────────────────────────────────────────────────
async function exportPdf () {
  const { default: jsPDF } = await import('jspdf')
  const doc = new jsPDF()
  let y = 20

  doc.setFontSize(18)
  doc.setTextColor(30, 58, 95)
  doc.text('Hard Money Loan Calculator', 14, y)
  y += 12

  doc.setFontSize(10)
  doc.setTextColor(100)
  doc.text(`Generated ${new Date().toLocaleDateString('en-US')} — arvcalc.com`, 14, y)
  y += 12

  if (r.value) {
    const lines = [
      ['Loan Amount', formatCurrency(safeLoanAmount.value)],
      ['Interest Rate', safeInterestRate.value + '%'],
      ['Term', safeLoanTermMonths.value + ' months'],
      ['Points', safePoints.value + '%'],
      [''],
      ['Monthly Payment', formatCurrency(r.value.monthlyPayment)],
      ['Total Interest', formatCurrency(r.value.totalInterest)],
      ['Points Cost', formatCurrency(r.value.pointsCost)],
      ['Total Financing Cost', formatCurrency(r.value.totalFinancingCost)],
      ['Cash Needed at Closing', formatCurrency(r.value.cashNeededAtClosing)],
    ]
    if (r.value.ltc !== null) lines.push(['LTC', r.value.ltc.toFixed(1) + '%'])
    if (r.value.asIsLtv !== null) lines.push(['As-Is LTV', r.value.asIsLtv.toFixed(1) + '%'])
    if (r.value.arvLtv !== null) lines.push(['ARV LTV', r.value.arvLtv.toFixed(1) + '%'])

    doc.setFontSize(11)
    for (const line of lines) {
      if (line.length === 1) { y += 4; continue }
      doc.setTextColor(80)
      doc.text(line[0], 14, y)
      doc.setTextColor(30, 58, 95)
      doc.text(line[1], 120, y)
      y += 7
    }

    y += 6
    doc.setFontSize(9)
    doc.setTextColor(150)
    doc.text('This is an estimate, not a lender quote. Does not guarantee loan approval.', 14, y)
  }

  doc.save('hard-money-loan-calculator.pdf')
}

// ─── URL PARAMS (on mount) ────────────────────────────────────────────────────
if (import.meta.client) {
  const params = new URLSearchParams(window.location.search)
  if (params.get('loan')) inp.value.loanAmount = Number(params.get('loan'))
  if (params.get('rate')) inp.value.interestRate = Number(params.get('rate'))
  if (params.get('term')) inp.value.loanTermMonths = Number(params.get('term'))
  if (params.get('pts')) inp.value.points = Number(params.get('pts'))
  if (params.get('orig')) inp.value.originationFees = Number(params.get('orig'))
  if (params.get('cc')) inp.value.closingCosts = Number(params.get('cc'))
  if (params.get('ir')) inp.value.interestReserve = Number(params.get('ir'))
  if (params.get('proj')) inp.value.totalProjectCost = Number(params.get('proj'))
  if (params.get('asis')) inp.value.asIsValue = Number(params.get('asis'))
  if (params.get('arv')) inp.value.arv = Number(params.get('arv'))
}
</script>
