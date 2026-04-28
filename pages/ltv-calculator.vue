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
            <li class="text-gray-700 font-semibold">LTV Calculator</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- PAGE TITLE + ON THIS PAGE NAV -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-6">
        <div class="mb-4">
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            Loan-to-Value (LTV) Calculator
          </h1>
          <p class="text-gray-500 mt-2 text-base">Calculate your LTV ratio, equity, required down payment, and see if your deal fits lender ranges — in seconds.</p>
        </div>
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#saved-scenarios" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Saved Scenarios</a></li>
            <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
            <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
            <li><a href="#down-payment" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Down Payment</a></li>
            <li><a href="#refinance" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Refinance &amp; Cash-Out</a></li>
            <li><a href="#hard-money" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Hard Money</a></li>
            <li><a href="#limitations" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Limitations</a></li>
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
              <li><a href="#down-payment" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Down Payment</a></li>
              <li><a href="#refinance" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Refinance &amp; Cash-Out</a></li>
              <li><a href="#hard-money" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Hard Money</a></li>
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

    <!-- CALCULATOR SECTION -->
    <main id="calculator" class="max-w-[1100px] mx-auto px-4 pt-8 pb-10">
      <div class="rounded-3xl p-[3px]" style="background: linear-gradient(135deg, #1e3a5f 0%, #f59e0b 50%, #1e3a5f 100%);">
      <div class="bg-white rounded-[21px] shadow-xl shadow-slate-200/60 p-6" style="overflow: clip;">
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch gap-6">

        <!-- LEFT: INPUTS -->
        <div class="space-y-5 min-w-0">

          <!-- CORE INPUTS -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 class="text-lg font-bold mb-4" style="color: #1e3a5f;">Core Inputs</h2>

            <!-- Property Value -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Property Value <span class="text-red-500">*</span></label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input v-model.number="inp.propertyValue" type="number" min="1" step="1000"
                  placeholder="Enter property value or purchase price"
                  class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
              <p class="text-xs text-gray-400 mt-1">Use the appraised value, purchase price, or estimated market value.</p>
            </div>

            <!-- Loan Amount -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Loan Amount <span class="text-red-500">*</span></label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input v-model.number="inp.loanAmount" type="number" min="1" step="1000"
                  placeholder="Enter loan amount"
                  class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
              <p class="text-xs text-gray-400 mt-1">The first mortgage loan amount. Does not include second liens or HELOC.</p>
            </div>

            <!-- Transaction Type + Property Type -->
            <div class="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Transaction Type</label>
                <select v-model="inp.transactionType"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium bg-white">
                  <option value="Purchase">Purchase</option>
                  <option value="Refinance">Refinance</option>
                  <option value="Cash-out refinance">Cash-out refinance</option>
                  <option value="Hard money / bridge loan">Hard money / bridge loan</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Property Type</label>
                <select v-model="inp.propertyType"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium bg-white">
                  <option value="Primary residence">Primary residence</option>
                  <option value="Investment (single-family)">Investment (single-family)</option>
                  <option value="Investment (multifamily)">Investment (multifamily)</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Vacation rental">Vacation rental</option>
                </select>
                <p class="text-xs text-gray-400 mt-1">Different property types may have different lender LTV limits.</p>
              </div>
            </div>

            <!-- Primary Residence context note -->
            <div v-if="inp.propertyType === 'Primary residence'" class="mb-4 p-3 rounded-xl bg-blue-50 border border-blue-200">
              <p class="text-xs font-semibold text-blue-800">Primary residence loans often allow higher LTV than investment properties.</p>
            </div>
          </div>

          <!-- OPTIONAL INPUTS -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 class="text-lg font-bold mb-4" style="color: #1e3a5f;">Optional Inputs</h2>

            <!-- Target LTV -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Target LTV</label>
              <div class="relative">
                <input v-model.number="inp.targetLtv" type="number" min="1" max="100" step="1"
                  placeholder="Optional: target LTV"
                  class="w-full pl-4 pr-8 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">%</span>
              </div>
              <p class="text-xs text-gray-400 mt-1">75% is a common conventional loan LTV range, but actual limits vary by lender and loan type.</p>
            </div>

            <!-- Existing Loan Balance (refinance only) -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">
                Existing Loan Balance
                <span class="text-gray-400 font-normal">(optional)</span>
              </label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input v-model.number="inp.existingLoanBalance" type="number" min="0" step="1000"
                  :disabled="inp.transactionType === 'Purchase'"
                  placeholder="Optional: existing loan balance"
                  class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed" />
              </div>
              <p v-if="inp.transactionType === 'Purchase'" class="text-xs text-amber-600 mt-1 font-medium">For purchase scenarios, this field is ignored.</p>
              <p v-else class="text-xs text-gray-400 mt-1">Used only for refinance scenarios to estimate refinance equity.</p>
            </div>

            <!-- Scenario Name -->
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-1">Scenario Name <span class="text-gray-400 font-normal">(optional)</span></label>
              <input v-model="inp.scenarioName" type="text"
                placeholder="e.g. 123 Main St — Purchase"
                class="w-full px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
            </div>
          </div>

          <!-- VALIDATION ERRORS -->
          <div v-if="errors.length" class="bg-red-50 border border-red-200 rounded-2xl p-4">
            <p class="text-sm font-bold text-red-700 mb-2">Please fix the following:</p>
            <ul class="space-y-1">
              <li v-for="err in errors" :key="err" class="text-sm text-red-600 flex items-start gap-2">
                <span class="mt-0.5">•</span><span>{{ err }}</span>
              </li>
            </ul>
          </div>

        </div>

        <!-- RIGHT: RESULTS -->
        <div class="min-w-0 lg:relative lg:overflow-hidden">
        <div class="bg-gray-50 scrollbar-thin lg:absolute lg:inset-0 lg:overflow-y-auto">
        <div class="space-y-4 p-4 lg:p-5">

          <!-- MAIN RESULT CARD -->
          <div v-if="canCalculate && !errors.length" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            <!-- Verdict Header -->
            <div class="p-5 text-center" :style="{ background: verdictColor }">
              <p class="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">LTV Ratio</p>
              <div class="text-5xl font-extrabold text-white mb-1">{{ result.ltv.toFixed(1) }}%</div>
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-2">
                {{ verdictLabel }}
              </div>
              <p class="text-white/90 text-sm font-medium">{{ verdictSubtitle }}</p>
            </div>

            <!-- Loan > Value Warning -->
            <div v-if="result.ltv > 100" class="px-5 py-3 bg-red-50 border-b border-red-100">
              <p class="text-xs font-bold text-red-700">Loan amount exceeds property value. LTV above 100% — review your inputs. Most lenders will not approve this scenario.</p>
            </div>

            <!-- Hard Money Warning -->
            <div v-if="inp.transactionType === 'Hard money / bridge loan'" class="px-5 py-3 bg-amber-50 border-b border-amber-200">
              <p class="text-xs font-bold text-amber-800">Hard money LTV is often based on after-repair value (ARV) or loan-to-cost (LTC), not as-is value. Results may not match lender calculations.</p>
            </div>

            <!-- Transaction Context Note -->
            <div class="px-5 py-3 border-b border-gray-100 bg-gray-50">
              <p class="text-xs font-semibold text-gray-600">{{ transactionContextNote }}</p>
            </div>

            <!-- Primary Metrics -->
            <div class="p-5 space-y-3">

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">LTV Ratio</span>
                <span class="text-lg font-extrabold" style="color: #1e3a5f;">{{ result.ltv.toFixed(2) }}%</span>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Equity</span>
                <span class="text-base font-bold text-gray-800">{{ formatCurrency(result.equity) }}</span>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Equity %</span>
                <span class="text-base font-bold text-gray-800">{{ result.equityPct.toFixed(2) }}%</span>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Down Payment (implied)</span>
                <span class="text-base font-bold text-gray-800">{{ formatCurrency(result.equity) }}</span>
              </div>

              <div class="py-2 border-b border-gray-100">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 font-medium">Max Loan at Target LTV ({{ effectiveTargetLtv }}%)</span>
                  <span class="text-base font-bold text-gray-800">{{ formatCurrency(result.maxLoanAtTarget) }}</span>
                </div>
                <p class="text-xs text-gray-400 mt-0.5">Maximum loan to stay at or below target LTV.</p>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Required Equity at Target</span>
                <span class="text-base font-bold text-gray-800">{{ formatCurrency(result.requiredEquity) }}</span>
              </div>

              <div class="py-2" :class="result.loanGap !== 0 ? 'border-b border-gray-100' : ''">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 font-medium">Loan Gap vs Target</span>
                  <span class="text-base font-bold" :class="result.loanGap > 0 ? 'text-red-600' : result.loanGap < 0 ? 'text-green-600' : 'text-gray-800'">
                    {{ result.loanGap > 0 ? '+' : '' }}{{ formatCurrency(result.loanGap) }}
                  </span>
                </div>
                <p class="text-xs text-gray-400 mt-0.5">
                  <span v-if="result.loanGap > 0">Loan exceeds target LTV by {{ formatCurrency(result.loanGap) }}.</span>
                  <span v-else-if="result.loanGap < 0">Loan is {{ formatCurrency(Math.abs(result.loanGap)) }} below target — additional borrowing room available.</span>
                  <span v-else>Loan is exactly at target LTV.</span>
                </p>
              </div>

              <!-- Cash-out estimate (cash-out refinance) -->
              <div v-if="inp.transactionType === 'Cash-out refinance' && result.equity > 0" class="py-2 border-b border-gray-100">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 font-medium">Estimated Cash-Out Available</span>
                  <span class="text-base font-bold" :class="result.cashOutAvailable > 0 ? 'text-green-700' : 'text-gray-500'">
                    {{ result.cashOutAvailable > 0 ? formatCurrency(result.cashOutAvailable) : 'None at target LTV' }}
                  </span>
                </div>
                <p class="text-xs text-amber-600 mt-0.5 font-medium">Estimate excludes closing costs, reserves, and lender holdbacks.</p>
              </div>

              <!-- Refinance equity -->
              <div v-if="isRefinance && hasExistingLoan" class="py-2">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 font-medium">Current Equity (existing loan)</span>
                  <span class="text-base font-bold text-gray-800">{{ formatCurrency(result.refinanceEquity) }}</span>
                </div>
                <p class="text-xs text-gray-400 mt-0.5">Property value minus existing loan balance.</p>
              </div>

            </div>

            <!-- CLTV Disclaimer -->
            <div class="px-5 pb-4">
              <div class="p-3 rounded-xl bg-gray-50 border border-gray-200">
                <p class="text-xs text-gray-500">
                  <strong>Single mortgage only:</strong> This calculator assumes a single first mortgage. Combined LTV (CLTV) for second liens or HELOCs is not included. LTV does NOT guarantee loan approval.
                </p>
              </div>
            </div>

          </div>

          <!-- EMPTY STATE -->
          <div v-else-if="!canCalculate" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
            <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style="background: #f0f4f8;">
              <svg class="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <p class="text-gray-500 font-medium text-sm">Enter a property value and loan amount to calculate LTV.</p>
          </div>

          <!-- SENSITIVITY TABLE -->
          <div v-if="canCalculate && !errors.length" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-3" style="color: #1e3a5f;">LTV Sensitivity — Loan Amount Changes</h3>
            <p class="text-xs text-gray-400 mb-3">How LTV shifts at different loan amounts.</p>
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-gray-200">
                    <th class="text-left py-2 pr-3 font-bold text-gray-600 text-xs">Loan Amount</th>
                    <th class="text-center py-2 px-2 font-bold text-gray-600 text-xs">LTV</th>
                    <th class="text-center py-2 px-2 font-bold text-gray-600 text-xs">Equity</th>
                    <th class="text-right py-2 font-bold text-gray-600 text-xs">Verdict</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in sensitivityRows" :key="row.loan"
                    :class="row.isCurrent ? 'bg-yellow-50 font-semibold' : 'hover:bg-gray-50'">
                    <td class="py-2 pr-3 text-gray-800 text-xs">{{ formatCurrency(row.loan) }}</td>
                    <td class="py-2 px-2 text-center text-xs" :class="row.isCurrent ? 'font-bold' : ''">{{ row.ltv.toFixed(1) }}%</td>
                    <td class="py-2 px-2 text-center text-xs">{{ formatCurrency(row.equity) }}</td>
                    <td class="py-2 text-right text-xs font-semibold" :style="{ color: row.color }">{{ row.verdict }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- DEAL CONTEXT -->
          <div v-if="canCalculate && !errors.length" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-3" style="color: #1e3a5f;">Deal Context</h3>
            <div class="p-4 rounded-xl border" :class="verdictBgClass">
              <p class="text-sm font-bold mb-2" :class="verdictTextClass">{{ verdictLabel }}</p>
              <p class="text-sm text-gray-700">{{ dealContextText }}</p>
            </div>
          </div>

          <!-- SHARE + PDF EXPORT -->
          <div v-if="canCalculate && !errors.length" class="space-y-2">
            <button @click="openSaveScenario"
              class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
              style="background: #f59e0b; color: #1e3a5f;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
              </svg>
              Save Scenario
            </button>
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
          <div v-if="canCalculate && !errors.length" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-3" style="color: #1e3a5f;">Go Deeper</h3>
            <p class="text-xs text-gray-500 mb-3">LTV is one piece of the financing picture. Validate with:</p>
            <div class="space-y-2">
              <NuxtLink to="/dscr-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">DSCR Calculator</p>
                  <p class="text-xs text-gray-500">Check if the property covers the debt</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/rental-property-roi-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">Real Estate ROI Calculator</p>
                  <p class="text-xs text-gray-500">Full return analysis: appreciation, equity, cash flow</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/cap-rate-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">Cap Rate Calculator</p>
                  <p class="text-xs text-gray-500">Estimate unlevered yield before financing</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/property-cash-flow-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">Property Cash Flow Calculator</p>
                  <p class="text-xs text-gray-500">Test monthly cash flow after debt and expenses</p>
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

    <!-- SCENARIO PANEL -->
    <div id="saved-scenarios" class="max-w-[1100px] mx-auto px-4 sm:px-6 pb-6 mt-4">
      <ScenarioPanel
        calculator="ltv"
        :has-result="canCalculate && !errors.length"
        :result="currentScenarioResult"
        :trigger-save="triggerScenarioSave"
        @saved="onScenarioSaved"
      />
    </div>

    <!-- SEO CONTENT -->
    <div class="max-w-[1100px] mx-auto px-4 sm:px-6 pb-16 space-y-8">

      <!-- Overview -->
      <div id="overview" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">What Is LTV in Real Estate?</h2>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          LTV (Loan-to-Value) shows how much of a property is financed with debt. It is one of the first metrics lenders check when evaluating a loan application — but <strong>it does not guarantee approval</strong>.
        </p>
        <div class="p-5 rounded-xl bg-gray-900 text-green-400 font-mono text-sm mb-4">
          LTV = Loan Amount ÷ Property Value
        </div>
        <div class="bg-blue-50 rounded-xl p-4 border border-blue-200 mb-4">
          <p class="text-sm font-bold text-blue-900 mb-2">Quick Answer</p>
          <p class="text-sm text-blue-800 mb-2">Example: $375,000 loan ÷ $500,000 property = 75% LTV</p>
          <ul class="text-sm text-blue-800 space-y-1">
            <li>• Below 60% → LOW leverage, strong equity cushion</li>
            <li>• 60–75% → MODERATE, common conventional range</li>
            <li>• 75–85% → HIGH, tighter underwriting</li>
            <li>• 85%+ → CRITICAL, expect friction or alternative lenders</li>
          </ul>
        </div>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-green-50 border border-green-200">
            <p class="text-sm font-bold text-green-900 mb-1">LTV measures:</p>
            <ul class="text-sm text-green-800 space-y-1">
              <li>• Leverage ratio</li>
              <li>• Equity cushion</li>
              <li>• Lender risk exposure</li>
            </ul>
          </div>
          <div class="p-4 rounded-xl bg-red-50 border border-red-200">
            <p class="text-sm font-bold text-red-900 mb-1">LTV does NOT measure:</p>
            <ul class="text-sm text-red-800 space-y-1">
              <li>• Profitability</li>
              <li>• Loan approval eligibility</li>
              <li>• Cash flow or return</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Formula -->
      <div id="formula" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">LTV Formula &amp; Calculation</h2>
        <div class="p-5 rounded-xl bg-gray-900 text-green-400 font-mono text-sm mb-4 space-y-2">
          <div>LTV = Loan Amount ÷ Property Value</div>
          <div>Equity = Property Value − Loan Amount</div>
          <div>Equity % = Equity ÷ Property Value</div>
          <div>Max Loan at Target = Property Value × Target LTV</div>
        </div>
        <p class="text-gray-700 text-base leading-relaxed mb-3">
          <strong>Property Value</strong> is the appraised value or purchase price — whichever the lender uses. For purchase transactions, lenders typically use the lower of purchase price or appraised value.
        </p>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          <strong>Loan Amount</strong> is the first mortgage only. Combined LTV (CLTV) for second liens, HELOCs, or mezzanine debt is not included here.
        </p>
        <div class="p-4 rounded-xl bg-amber-50 border border-amber-200">
          <p class="text-sm text-amber-900">
            <strong>Lower LTV = less leverage, more equity, lower lender risk.</strong> Higher LTV = more leverage, less equity, higher risk. LTV shapes your financing options — not just your down payment.
          </p>
        </div>
      </div>

      <!-- How to Use -->
      <div id="how-to-use" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">How to Use This LTV Calculator</h2>
        <ol class="space-y-4">
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm" style="background: #1e3a5f;">1</div>
            <div>
              <p class="font-semibold text-gray-800">Enter the property value</p>
              <p class="text-sm text-gray-600">Use the appraised value, purchase price, or estimated market value for your scenario.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm" style="background: #1e3a5f;">2</div>
            <div>
              <p class="font-semibold text-gray-800">Enter the loan amount</p>
              <p class="text-sm text-gray-600">First mortgage only. Do not include second liens or lines of credit.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm" style="background: #1e3a5f;">3</div>
            <div>
              <p class="font-semibold text-gray-800">Select transaction and property type</p>
              <p class="text-sm text-gray-600">Transaction type generates a context note. Property type affects context only — not the math.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm" style="background: #1e3a5f;">4</div>
            <div>
              <p class="font-semibold text-gray-800">Set your target LTV (optional)</p>
              <p class="text-sm text-gray-600">Defaults to 75%. Shows max loan and required equity at your target.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm" style="background: #f59e0b; color: #1e3a5f;">5</div>
            <div>
              <p class="font-semibold text-gray-800">Read the verdict and plan your next step</p>
              <p class="text-sm text-gray-600">Use the LTV verdict and sensitivity table to decide whether to proceed to DSCR, cash flow, or lender conversations.</p>
            </div>
          </li>
        </ol>
      </div>

      <!-- Result Meaning -->
      <div id="result-meaning" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">What Your LTV Result Means</h2>
        <div class="space-y-4">
          <div class="p-4 rounded-xl border-l-4 border-green-500 bg-green-50">
            <p class="font-bold text-green-800 mb-1">LOW — LTV below 60%</p>
            <p class="text-sm text-green-700">Strong equity cushion. Conservative leverage. Generally favorable for pricing, approval likelihood, and terms. Means you have substantial equity invested.</p>
            <p class="text-xs text-green-600 mt-2 font-semibold">→ Well-positioned for conventional and portfolio lenders.</p>
          </div>
          <div class="p-4 rounded-xl border-l-4 border-blue-500 bg-blue-50">
            <p class="font-bold text-blue-800 mb-1">MODERATE — LTV 60% to 75%</p>
            <p class="text-sm text-blue-700">Common conventional range. Balanced leverage and approval likelihood. Most investment property lenders cluster around 70–75% LTV for first mortgages.</p>
            <p class="text-xs text-blue-600 mt-2 font-semibold">→ Standard range. Proceed to DSCR and cash flow checks.</p>
          </div>
          <div class="p-4 rounded-xl border-l-4 border-amber-500 bg-amber-50">
            <p class="font-bold text-amber-800 mb-1">HIGH — LTV 75% to 85%</p>
            <p class="text-sm text-amber-700">Tighter underwriting. Rates and terms may worsen. Above ~80% may require mortgage insurance for residential loans. Investment property lenders often cap at 75–80%.</p>
            <p class="text-xs text-amber-600 mt-2 font-semibold">→ Verify lender limits and rate impact before proceeding.</p>
          </div>
          <div class="p-4 rounded-xl border-l-4 border-red-500 bg-red-50">
            <p class="font-bold text-red-800 mb-1">CRITICAL — LTV 85% or above</p>
            <p class="text-sm text-red-700">Aggressive leverage. Many lenders will not proceed. Expect friction, alternative lender requirements, or hard money terms. LTV at this level increases lender risk significantly.</p>
            <p class="text-xs text-red-600 mt-2 font-semibold">→ Review whether the deal structure is realistic for conventional financing.</p>
          </div>
        </div>
        <div class="mt-4 p-4 rounded-xl bg-gray-50 border border-gray-200">
          <p class="text-xs text-gray-500">
            <strong>Note:</strong> LTV thresholds vary by lender, loan program, and property type. These are general reference ranges, not lender guidelines. LTV does NOT guarantee loan approval.
          </p>
        </div>
      </div>

      <!-- Benchmarks -->
      <div id="benchmarks" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">LTV Benchmarks by Scenario</h2>
        <p class="text-gray-600 text-sm mb-4">These are general ranges. Actual lender limits vary by program, property type, and borrower profile.</p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-3 pr-4 font-bold text-gray-700">Scenario</th>
                <th class="text-center py-3 px-2 font-bold text-gray-700">Typical Max LTV</th>
                <th class="text-left py-3 font-bold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr class="hover:bg-gray-50">
                <td class="py-3 pr-4 font-medium text-gray-800">Primary residence (purchase)</td>
                <td class="py-3 px-2 text-center text-gray-700">80–97%</td>
                <td class="py-3 text-gray-500 text-xs">FHA/VA can go higher; above 80% often requires PMI</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-3 pr-4 font-medium text-gray-800">Investment property (SFR)</td>
                <td class="py-3 px-2 text-center text-gray-700">70–80%</td>
                <td class="py-3 text-gray-500 text-xs">Most conventional programs cap at 75–80%</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-3 pr-4 font-medium text-gray-800">Investment property (multifamily)</td>
                <td class="py-3 px-2 text-center text-gray-700">65–75%</td>
                <td class="py-3 text-gray-500 text-xs">More conservative — DSCR also required</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-3 pr-4 font-medium text-gray-800">Cash-out refinance (investment)</td>
                <td class="py-3 px-2 text-center text-gray-700">65–75%</td>
                <td class="py-3 text-gray-500 text-xs">Stricter than standard refinance</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-3 pr-4 font-medium text-gray-800">Hard money / bridge</td>
                <td class="py-3 px-2 text-center text-gray-700">60–75% ARV</td>
                <td class="py-3 text-gray-500 text-xs">Based on ARV or LTC — not as-is value</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-3 pr-4 font-medium text-gray-800">Commercial</td>
                <td class="py-3 px-2 text-center text-gray-700">60–75%</td>
                <td class="py-3 text-gray-500 text-xs">Debt yield often required in addition to LTV</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Down Payment Trade-Off -->
      <div id="down-payment" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">LTV and Down Payment Trade-Off</h2>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          LTV and down payment are directly linked: Down Payment % = 100% − LTV. A target LTV of 75% means a 25% down payment.
        </p>
        <div class="overflow-x-auto mb-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-3 pr-4 font-bold text-gray-700">Target LTV</th>
                <th class="text-center py-3 px-2 font-bold text-gray-700">Down Payment %</th>
                <th class="text-center py-3 px-2 font-bold text-gray-700">On $400K Property</th>
                <th class="text-center py-3 font-bold text-gray-700">On $700K Property</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr class="hover:bg-gray-50">
                <td class="py-3 pr-4 font-medium text-gray-800">60% LTV</td>
                <td class="py-3 px-2 text-center">40%</td>
                <td class="py-3 px-2 text-center">$160,000</td>
                <td class="py-3 text-center">$280,000</td>
              </tr>
              <tr class="hover:bg-gray-50 bg-green-50">
                <td class="py-3 pr-4 font-medium text-gray-800">70% LTV</td>
                <td class="py-3 px-2 text-center">30%</td>
                <td class="py-3 px-2 text-center">$120,000</td>
                <td class="py-3 text-center">$210,000</td>
              </tr>
              <tr class="hover:bg-gray-50 bg-blue-50">
                <td class="py-3 pr-4 font-semibold text-gray-800">75% LTV</td>
                <td class="py-3 px-2 text-center font-semibold">25%</td>
                <td class="py-3 px-2 text-center font-semibold">$100,000</td>
                <td class="py-3 text-center font-semibold">$175,000</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-3 pr-4 font-medium text-gray-800">80% LTV</td>
                <td class="py-3 px-2 text-center">20%</td>
                <td class="py-3 px-2 text-center">$80,000</td>
                <td class="py-3 text-center">$140,000</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="py-3 pr-4 font-medium text-gray-800">85% LTV</td>
                <td class="py-3 px-2 text-center">15%</td>
                <td class="py-3 px-2 text-center">$60,000</td>
                <td class="py-3 text-center">$105,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-4 rounded-xl bg-amber-50 border border-amber-200">
          <p class="text-sm text-amber-900">
            <strong>Lower LTV = more cash upfront, but potentially better rate and terms.</strong> Use the calculator above to see your exact trade-off at different loan amounts.
          </p>
        </div>
      </div>

      <!-- Refinance & Cash-Out -->
      <div id="refinance" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Refinance &amp; Cash-Out LTV</h2>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          Refinance LTV uses the appraised value (not original purchase price) against the new loan amount. Cash-out refinance typically has stricter LTV limits than a standard rate-and-term refinance.
        </p>
        <div class="space-y-4 mb-4">
          <div class="p-4 rounded-xl bg-blue-50 border border-blue-200">
            <p class="text-sm font-bold text-blue-900 mb-1">Standard Refinance</p>
            <p class="text-sm text-blue-800">LTV is recalculated against current appraised value. Seasoning requirements may apply. Typically 70–80% max for investment properties.</p>
          </div>
          <div class="p-4 rounded-xl bg-amber-50 border border-amber-200">
            <p class="text-sm font-bold text-amber-900 mb-1">Cash-Out Refinance</p>
            <p class="text-sm text-amber-800">Stricter limits — often 65–75% for investment properties. Cash-out estimates in this calculator exclude closing costs, reserves, and lender holdbacks. Shown as estimates only.</p>
          </div>
        </div>
        <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
          <p class="text-sm text-gray-600">
            <strong>See how much equity you can access before paying for an appraisal.</strong> Enter your current property value, target new loan amount, and set transaction type to "Cash-out refinance."
          </p>
        </div>
      </div>

      <!-- Hard Money -->
      <div id="hard-money" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Hard Money &amp; Bridge Loan LTV</h2>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          Hard money lending works differently from conventional financing. LTV for hard money is often calculated against <strong>ARV (after-repair value)</strong> or <strong>LTC (loan-to-cost)</strong>, not the current as-is value.
        </p>
        <div class="p-4 rounded-xl bg-red-50 border border-red-200 mb-4">
          <p class="text-sm font-bold text-red-900 mb-2">Hard Money Warning</p>
          <p class="text-sm text-red-800">This calculator uses as-is property value. If you are using a hard money loan, your lender's LTV calculation based on ARV or LTC may be significantly different from what this calculator shows.</p>
        </div>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-2">ARV-Based LTV</p>
            <p class="text-sm text-gray-600">Loan ÷ After-Repair Value. Common range: 65–75% of ARV. Requires realistic ARV estimate.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-2">LTC (Loan-to-Cost)</p>
            <p class="text-sm text-gray-600">Loan ÷ Total Project Cost. Includes purchase price + renovation budget. Common range: 75–90% LTC.</p>
          </div>
        </div>
      </div>

      <!-- Limitations -->
      <div id="limitations" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Calculator Limitations</h2>
        <div class="space-y-3">
          <div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
            <svg class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
            <p class="text-sm text-gray-700"><strong>Does NOT guarantee approval.</strong> LTV is one factor. Lenders also evaluate credit, income, DSCR, reserves, and property condition.</p>
          </div>
          <div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
            <svg class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
            <p class="text-sm text-gray-700"><strong>Does NOT calculate payments.</strong> Use a mortgage calculator for monthly PITI estimates.</p>
          </div>
          <div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
            <svg class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
            <p class="text-sm text-gray-700"><strong>Single mortgage only (no CLTV).</strong> Combined LTV for second liens or HELOCs is not calculated here.</p>
          </div>
          <div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
            <svg class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
            <p class="text-sm text-gray-700"><strong>Does NOT include credit or income analysis.</strong> DSCR, credit score, and income verification are separate lender requirements.</p>
          </div>
          <div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
            <svg class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
            <p class="text-sm text-gray-700"><strong>Hard money uses ARV/LTC.</strong> Results may not match hard money lender term sheets that use after-repair value.</p>
          </div>
          <div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
            <svg class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
            <p class="text-sm text-gray-700"><strong>Cash-out estimates exclude closing costs.</strong> Actual cash received will be lower after closing costs, reserves, and any lender holdbacks.</p>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <div id="faq" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions</h2>
        <div class="space-y-5">

          <div>
            <h3 class="font-bold text-gray-800 mb-2">What is a good LTV for investment property?</h3>
            <p class="text-gray-700 text-sm leading-relaxed">Most conventional investment property lenders target 70–75% LTV. Below 70% gives you the strongest approval odds and best pricing. Above 80% is rare for investment properties without special programs. LTV alone does not determine approval — DSCR, credit, and reserves also matter.</p>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">What is the difference between LTV and CLTV?</h3>
            <p class="text-gray-700 text-sm leading-relaxed">LTV (Loan-to-Value) uses only the first mortgage. CLTV (Combined LTV) includes all liens — first mortgage, second mortgage, HELOC, and other debt against the property. This calculator computes LTV only. If you have multiple loans on the property, CLTV will be higher than LTV.</p>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">Does LTV guarantee loan approval?</h3>
            <p class="text-gray-700 text-sm leading-relaxed">No. LTV is one input in the underwriting process. Lenders also evaluate debt service coverage ratio (DSCR), credit score, liquid reserves, property condition, income documentation, and loan program requirements. A favorable LTV improves your position but does not guarantee approval.</p>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">How do I calculate my equity from LTV?</h3>
            <p class="text-gray-700 text-sm leading-relaxed">Equity = Property Value × (1 − LTV). For example, at 75% LTV on a $500,000 property, your equity is $500,000 × 25% = $125,000. Equity % = 100% − LTV %. This calculator shows your equity in both dollar and percentage terms.</p>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">Why does hard money lend against ARV instead of as-is value?</h3>
            <p class="text-gray-700 text-sm leading-relaxed">Hard money lenders fund fix-and-flip or value-add projects where the current as-is value understates the collateral value after improvements. Lending against ARV (after-repair value) allows borrowers to finance more of the project — but requires a credible ARV estimate, often validated by the lender's own appraiser.</p>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">What LTV do I need for cash-out refinance on investment property?</h3>
            <p class="text-gray-700 text-sm leading-relaxed">Most conventional lenders limit cash-out refinance on investment properties to 65–75% LTV, which is stricter than primary residence limits (~80%). Some portfolio and DSCR lenders may go up to 75–80% in certain markets. Cash-out proceeds exclude closing costs and any lender holdbacks.</p>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">How does LTV affect my interest rate?</h3>
            <p class="text-gray-700 text-sm leading-relaxed">Higher LTV typically means higher rates because the lender bears more risk. The relationship is not linear — there are often pricing breakpoints at 60%, 65%, 70%, 75%, and 80% LTV. Dropping below a breakpoint can meaningfully improve your rate. On a large loan, even 0.25% better rate can save thousands per year.</p>
          </div>

        </div>
      </div>

      <!-- Related Calculators CTA -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Related Calculators</h2>
        <p class="text-gray-500 text-sm mb-5">LTV measures leverage — validate the full deal with these tools.</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NuxtLink to="/dscr-calculator" class="flex flex-col gap-1 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition">
            <p class="font-bold text-sm" style="color: #1e3a5f;">DSCR Calculator</p>
            <p class="text-xs text-gray-500">Check if the property covers the debt service</p>
          </NuxtLink>
          <NuxtLink to="/rental-property-roi-calculator" class="flex flex-col gap-1 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition">
            <p class="font-bold text-sm" style="color: #1e3a5f;">Real Estate ROI Calculator</p>
            <p class="text-xs text-gray-500">Full return analysis including equity growth</p>
          </NuxtLink>
          <NuxtLink to="/cap-rate-calculator" class="flex flex-col gap-1 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition">
            <p class="font-bold text-sm" style="color: #1e3a5f;">Cap Rate Calculator</p>
            <p class="text-xs text-gray-500">Unlevered yield before financing</p>
          </NuxtLink>
          <NuxtLink to="/property-cash-flow-calculator" class="flex flex-col gap-1 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition">
            <p class="font-bold text-sm" style="color: #1e3a5f;">Property Cash Flow Calculator</p>
            <p class="text-xs text-gray-500">Monthly cash flow after debt and expenses</p>
          </NuxtLink>
          <NuxtLink to="/brrrr-calculator" class="flex flex-col gap-1 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition">
            <p class="font-bold text-sm" style="color: #1e3a5f;">BRRRR Calculator</p>
            <p class="text-xs text-gray-500">LTV plays a key role in BRRRR refinance</p>
          </NuxtLink>
          <NuxtLink to="/fix-and-flip-calculator" class="flex flex-col gap-1 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition">
            <p class="font-bold text-sm" style="color: #1e3a5f;">Fix &amp; Flip Calculator</p>
            <p class="text-xs text-gray-500">ARV-based analysis for rehab projects</p>
          </NuxtLink>
          <NuxtLink to="/debt-yield-calculator" class="flex flex-col gap-1 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition">
            <p class="font-bold text-sm" style="color: #1e3a5f;">Debt Yield Calculator</p>
            <p class="text-xs text-gray-500">NOI ÷ Loan — lender risk metric for commercial lending</p>
          </NuxtLink>
        </div>
      </div>

    </div>

    <!-- FOOTER -->
    <footer class="border-t border-gray-200 bg-white">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-10">
        <div class="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div class="flex items-center gap-2 mb-3">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background: #1e3a5f;">
                <span class="text-white font-extrabold text-sm leading-none">RC</span>
              </div>
              <span class="font-extrabold text-base" style="color: #1e3a5f;">RealCalc</span>
            </div>
            <p class="text-sm text-gray-500 leading-relaxed">Free professional real estate investment calculators for US investors.</p>
          </div>
          <div>
            <p class="font-bold text-gray-700 mb-3 text-sm">Calculators</p>
            <ul class="space-y-1.5">
              <li><NuxtLink to="/cap-rate-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">Cap Rate</NuxtLink></li>
              <li><NuxtLink to="/dscr-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">DSCR</NuxtLink></li>
              <li><NuxtLink to="/ltv-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">LTV</NuxtLink></li>
              <li><NuxtLink to="/brrrr-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">BRRRR</NuxtLink></li>
              <li><NuxtLink to="/fix-and-flip-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">Fix &amp; Flip</NuxtLink></li>
            </ul>
          </div>
          <div>
            <p class="font-bold text-gray-700 mb-3 text-sm">More Tools</p>
            <ul class="space-y-1.5">
              <li><NuxtLink to="/property-cash-flow-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">Cash Flow</NuxtLink></li>
              <li><NuxtLink to="/rental-property-roi-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">ROI Calculator</NuxtLink></li>
              <li><NuxtLink to="/real-estate-irr-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">IRR Calculator</NuxtLink></li>
              <li><NuxtLink to="/calculators" class="text-sm text-gray-500 hover:text-gray-800 transition">All Calculators</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p class="text-xs text-gray-400">© 2026 RealCalc. For informational purposes only. Not financial advice.</p>
          <p class="text-xs text-gray-400">LTV does not guarantee loan approval. Consult a licensed lender.</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted } from 'vue'

// ─── SEO ──────────────────────────────────────────────────────────────────────
useHead({
  title: 'LTV Calculator — Loan-to-Value Ratio & Down Payment (2026)',
  meta: [
    { name: 'description', content: 'Calculate LTV, required down payment, and equity. See if your deal fits lender ranges before you apply. Free LTV calculator for US real estate investors.' },
    { property: 'og:title', content: 'LTV Calculator — Loan-to-Value Ratio & Down Payment (2026)' },
    { property: 'og:description', content: 'Calculate LTV, required down payment, and equity. Free tool for US real estate investors.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://arvcalc.com/ltv-calculator' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'LTV Calculator — Loan-to-Value Ratio & Down Payment' },
    { name: 'twitter:description', content: 'Calculate LTV ratio, equity, and required down payment in seconds.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://arvcalc.com/ltv-calculator' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'LTV Calculator',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Web',
          description: 'Calculate Loan-to-Value ratio, equity, required down payment, and max loan at target LTV for real estate investment properties.',
          url: 'https://arvcalc.com/ltv-calculator',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is LTV in real estate?',
              acceptedAnswer: { '@type': 'Answer', text: 'LTV (Loan-to-Value) is the ratio of a loan amount to the property value. Formula: LTV = Loan Amount ÷ Property Value. It measures leverage — not profitability. LTV does not guarantee loan approval.' }
            },
            {
              '@type': 'Question',
              name: 'What is a good LTV for investment property?',
              acceptedAnswer: { '@type': 'Answer', text: 'Most conventional investment property lenders target 70–75% LTV. Below 70% gives the strongest approval odds. Above 80% is rare for investment properties without special programs.' }
            },
            {
              '@type': 'Question',
              name: 'What is the difference between LTV and CLTV?',
              acceptedAnswer: { '@type': 'Answer', text: 'LTV uses only the first mortgage. CLTV (Combined LTV) includes all liens against the property. This calculator computes LTV only and does not include second liens or HELOCs.' }
            },
            {
              '@type': 'Question',
              name: 'Does LTV guarantee loan approval?',
              acceptedAnswer: { '@type': 'Answer', text: 'No. LTV is one input in underwriting. Lenders also evaluate DSCR, credit score, reserves, income, and property condition. A favorable LTV improves your position but does not guarantee approval.' }
            },
            {
              '@type': 'Question',
              name: 'Why does hard money use ARV instead of as-is value?',
              acceptedAnswer: { '@type': 'Answer', text: 'Hard money lenders fund fix-and-flip projects where the current as-is value understates the collateral after improvements. Lending against ARV allows borrowers to finance more of the project.' }
            },
            {
              '@type': 'Question',
              name: 'What LTV do I need for cash-out refinance on investment property?',
              acceptedAnswer: { '@type': 'Answer', text: 'Most conventional lenders limit cash-out refinance on investment properties to 65–75% LTV. This is stricter than primary residence limits. Cash-out proceeds exclude closing costs and lender holdbacks.' }
            }
          ]
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arvcalc.com' },
            { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://arvcalc.com/calculators' },
            { '@type': 'ListItem', position: 3, name: 'LTV Calculator', item: 'https://arvcalc.com/ltv-calculator' }
          ]
        }
      ])
    }
  ]
})

// ─── STATE ────────────────────────────────────────────────────────────────────
const isNavExpanded = ref(false)
const shareCopied = ref(false)

// ─── SCENARIO PANEL ──────────────────────────────────────────────────────────
const triggerScenarioSave = ref(false)
function openSaveScenario () {
  triggerScenarioSave.value = true
  nextTick(() => { triggerScenarioSave.value = false })
}
const currentScenarioResult = computed(() => {
  if (!canCalculate.value || errors.value.length || !result.value) return undefined
  return {
    primaryMetric: 'LTV',
    primaryValue: result.value.ltv.toFixed(2) + '%',
    badgeLabel: verdict.value,
    badgeColor: verdictColor.value,
    loanAmount: inp.value.loanAmount,
    propertyValue: inp.value.propertyValue,
    equity: result.value.equity,
    equityPct: result.value.equityPct
  }
})
function onScenarioSaved (_id) {}

// ─── INPUTS ───────────────────────────────────────────────────────────────────
const inp = ref({
  propertyValue: null,
  loanAmount: null,
  targetLtv: null,
  transactionType: 'Purchase',
  propertyType: 'Investment (single-family)',
  existingLoanBalance: null,
  scenarioName: ''
})

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const safePropertyValue = computed(() => (inp.value.propertyValue > 0 ? inp.value.propertyValue : 0))
const safeLoanAmount = computed(() => (inp.value.loanAmount > 0 ? inp.value.loanAmount : 0))
const effectiveTargetLtv = computed(() => (inp.value.targetLtv > 0 && inp.value.targetLtv <= 100 ? inp.value.targetLtv : 75))
const isRefinance = computed(() => inp.value.transactionType === 'Refinance' || inp.value.transactionType === 'Cash-out refinance')
const hasExistingLoan = computed(() => isRefinance.value && inp.value.existingLoanBalance > 0)

const canCalculate = computed(() => safePropertyValue.value > 0 && safeLoanAmount.value > 0)

// ─── VALIDATION ERRORS ────────────────────────────────────────────────────────
const errors = computed(() => {
  const errs = []
  if (inp.value.propertyValue !== null && inp.value.propertyValue <= 0) errs.push('Property value must be greater than zero.')
  if (inp.value.loanAmount !== null && inp.value.loanAmount <= 0) errs.push('Loan amount must be greater than zero.')
  if (inp.value.targetLtv !== null && (inp.value.targetLtv <= 0 || inp.value.targetLtv > 100)) errs.push('Target LTV must be between 1% and 100%.')
  if (inp.value.existingLoanBalance !== null && inp.value.existingLoanBalance < 0) errs.push('Existing loan balance cannot be negative.')
  return errs
})

// ─── CORE RESULTS ─────────────────────────────────────────────────────────────
const result = computed(() => {
  if (!canCalculate.value || errors.value.length) return null

  const pv = safePropertyValue.value
  const loan = safeLoanAmount.value
  const targetLtvFrac = effectiveTargetLtv.value / 100

  // LTV = Loan / Property Value
  const ltv = (loan / pv) * 100

  // Equity
  const equity = pv - loan
  const equityPct = (equity / pv) * 100

  // Max Loan at Target LTV
  const maxLoanAtTarget = pv * targetLtvFrac
  const requiredEquity = pv - maxLoanAtTarget

  // Loan Gap vs Target (positive = over target, negative = under target)
  const loanGap = loan - maxLoanAtTarget

  // Cash-out available (cash-out refinance only)
  const cashOutAvailable = Math.max(0, equity - requiredEquity)

  // Refinance equity
  const refinanceEquity = hasExistingLoan.value
    ? pv - inp.value.existingLoanBalance
    : null

  return {
    ltv,
    equity,
    equityPct,
    maxLoanAtTarget,
    requiredEquity,
    loanGap,
    cashOutAvailable,
    refinanceEquity
  }
})

// ─── VERDICT ──────────────────────────────────────────────────────────────────
const verdict = computed(() => {
  if (!result.value) return null
  const ltv = result.value.ltv
  if (ltv < 60) return 'LOW'
  if (ltv < 75) return 'MODERATE'
  if (ltv < 85) return 'HIGH'
  return 'CRITICAL'
})

const verdictLabel = computed(() => {
  const map = {
    LOW: 'Low leverage — strong equity cushion',
    MODERATE: 'Moderate leverage — common conventional range',
    HIGH: 'High leverage — tighter underwriting likely',
    CRITICAL: 'Critical leverage — expect significant friction'
  }
  return map[verdict.value] || ''
})

const verdictSubtitle = computed(() => {
  const map = {
    LOW: 'LTV below 60%',
    MODERATE: 'LTV 60%–75%',
    HIGH: 'LTV 75%–85%',
    CRITICAL: 'LTV 85% or above'
  }
  return map[verdict.value] || ''
})

const verdictColor = computed(() => {
  const map = {
    LOW: '#16a34a',
    MODERATE: '#2563eb',
    HIGH: '#d97706',
    CRITICAL: '#dc2626'
  }
  return map[verdict.value] || '#6b7280'
})

const verdictBgClass = computed(() => {
  const map = {
    LOW: 'bg-green-50 border-green-200',
    MODERATE: 'bg-blue-50 border-blue-200',
    HIGH: 'bg-amber-50 border-amber-200',
    CRITICAL: 'bg-red-50 border-red-200'
  }
  return map[verdict.value] || 'bg-gray-50 border-gray-200'
})

const verdictTextClass = computed(() => {
  const map = {
    LOW: 'text-green-800',
    MODERATE: 'text-blue-800',
    HIGH: 'text-amber-800',
    CRITICAL: 'text-red-800'
  }
  return map[verdict.value] || 'text-gray-800'
})

const dealContextText = computed(() => {
  const map = {
    LOW: 'Strong equity position. You have substantial skin in the game. This LTV range typically offers the best pricing, fewest lender restrictions, and the most stability if values decline.',
    MODERATE: 'Balanced leverage. This is the most common range for investment property conventional financing. Most DSCR and portfolio lenders operate comfortably here. Run DSCR and cash flow checks next.',
    HIGH: 'Leverage is elevated. Expect stricter underwriting, potentially higher rates, and possible mortgage insurance requirements. Verify lender maximums for this property type before proceeding.',
    CRITICAL: 'Very aggressive leverage. Many conventional lenders will not proceed above 85% on investment properties. Consider alternative lenders, larger down payment, or restructuring the deal.'
  }
  return map[verdict.value] || ''
})

// ─── TRANSACTION CONTEXT NOTE ─────────────────────────────────────────────────
const transactionContextNote = computed(() => {
  const map = {
    'Purchase': 'Purchase LTV depends on lender program and appraisal value.',
    'Refinance': 'Refinance LTV may be limited by appraisal value and seasoning requirements.',
    'Cash-out refinance': 'Cash-out refinance typically has stricter LTV limits than standard refinance.',
    'Hard money / bridge loan': 'Hard money loans often use ARV (after-repair value) or LTC instead of standard LTV.'
  }
  return map[inp.value.transactionType] || ''
})

// ─── SENSITIVITY TABLE ────────────────────────────────────────────────────────
const sensitivityRows = computed(() => {
  if (!result.value) return []
  const pv = safePropertyValue.value
  const currentLoan = safeLoanAmount.value

  // Generate rows at ±20%, ±10%, ±5%, current, +5%, +10%, +20% of loan
  const offsets = [-0.20, -0.10, -0.05, 0, 0.05, 0.10, 0.20]
  return offsets.map(offset => {
    const loan = Math.max(0, currentLoan * (1 + offset))
    const ltv = (loan / pv) * 100
    const equity = pv - loan

    let v, color
    if (ltv < 60) { v = 'LOW'; color = '#16a34a' }
    else if (ltv < 75) { v = 'MODERATE'; color = '#2563eb' }
    else if (ltv < 85) { v = 'HIGH'; color = '#d97706' }
    else { v = 'CRITICAL'; color = '#dc2626' }

    return {
      loan: Math.round(loan),
      ltv,
      equity: Math.round(equity),
      verdict: v,
      color,
      isCurrent: offset === 0
    }
  })
})

// ─── URL PARAMS ───────────────────────────────────────────────────────────────
onMounted(() => {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  if (params.get('pv')) inp.value.propertyValue = parseFloat(params.get('pv'))
  if (params.get('loan')) inp.value.loanAmount = parseFloat(params.get('loan'))
  if (params.get('target')) inp.value.targetLtv = parseFloat(params.get('target'))
  if (params.get('txn')) inp.value.transactionType = params.get('txn')
  if (params.get('type')) inp.value.propertyType = params.get('type')
  if (params.get('existing')) inp.value.existingLoanBalance = parseFloat(params.get('existing'))
  if (params.get('name')) inp.value.scenarioName = params.get('name')
})

// ─── SHARE URL ────────────────────────────────────────────────────────────────
function shareUrl () {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams()
  if (inp.value.propertyValue) params.set('pv', inp.value.propertyValue)
  if (inp.value.loanAmount) params.set('loan', inp.value.loanAmount)
  if (inp.value.targetLtv) params.set('target', inp.value.targetLtv)
  if (inp.value.transactionType !== 'Purchase') params.set('txn', inp.value.transactionType)
  if (inp.value.propertyType !== 'Investment (single-family)') params.set('type', inp.value.propertyType)
  if (inp.value.existingLoanBalance) params.set('existing', inp.value.existingLoanBalance)
  if (inp.value.scenarioName) params.set('name', inp.value.scenarioName)
  const url = `${window.location.origin}/ltv-calculator?${params.toString()}`
  navigator.clipboard.writeText(url).then(() => {
    shareCopied.value = true
    setTimeout(() => { shareCopied.value = false }, 2000)
  })
}

// ─── PDF EXPORT ───────────────────────────────────────────────────────────────
async function exportPdf () {
  if (!result.value) return
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF()
  const name = inp.value.scenarioName || 'LTV Analysis'

  doc.setFontSize(18)
  doc.setTextColor(30, 58, 95)
  doc.text('Loan-to-Value (LTV) Analysis', 14, 20)

  doc.setFontSize(11)
  doc.setTextColor(100, 100, 100)
  doc.text(name, 14, 28)
  doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 34)

  doc.setFontSize(12)
  doc.setTextColor(30, 58, 95)
  doc.text('Inputs', 14, 46)
  doc.setFontSize(10)
  doc.setTextColor(50, 50, 50)
  const inputs = [
    ['Property Value', formatCurrency(inp.value.propertyValue)],
    ['Loan Amount', formatCurrency(inp.value.loanAmount)],
    ['Target LTV', effectiveTargetLtv.value + '%'],
    ['Transaction Type', inp.value.transactionType],
    ['Property Type', inp.value.propertyType],
    ['Existing Loan Balance', hasExistingLoan.value ? formatCurrency(inp.value.existingLoanBalance) : 'N/A']
  ]
  let y = 54
  inputs.forEach(([label, val]) => {
    doc.text(`${label}: ${val}`, 14, y)
    y += 7
  })

  y += 4
  doc.setFontSize(12)
  doc.setTextColor(30, 58, 95)
  doc.text('Results', 14, y)
  y += 8
  doc.setFontSize(10)
  doc.setTextColor(50, 50, 50)

  const outputs = [
    ['LTV Ratio', result.value.ltv.toFixed(2) + '%'],
    ['Verdict', verdict.value + ' — ' + verdictLabel.value],
    ['Equity', formatCurrency(result.value.equity)],
    ['Equity %', result.value.equityPct.toFixed(2) + '%'],
    ['Max Loan at Target LTV (' + effectiveTargetLtv.value + '%)', formatCurrency(result.value.maxLoanAtTarget)],
    ['Required Equity at Target', formatCurrency(result.value.requiredEquity)],
    ['Loan Gap vs Target', (result.value.loanGap > 0 ? '+' : '') + formatCurrency(result.value.loanGap)]
  ]
  if (inp.value.transactionType === 'Cash-out refinance' && result.value.cashOutAvailable > 0) {
    outputs.push(['Estimated Cash-Out Available', formatCurrency(result.value.cashOutAvailable)])
  }

  outputs.forEach(([label, val]) => {
    doc.text(`${label}: ${val}`, 14, y)
    y += 7
  })

  y += 4
  doc.setFontSize(9)
  doc.setTextColor(150, 150, 150)
  doc.text('LTV does not guarantee loan approval. Assumes single first mortgage. Not financial advice.', 14, y)
  doc.text('Verify with DSCR, Cap Rate, and Cash Flow calculators at arvcalc.com', 14, y + 5)

  doc.save(`ltv-analysis-${Date.now()}.pdf`)
}

// ─── FORMAT HELPERS ───────────────────────────────────────────────────────────
function formatCurrency (val) {
  if (!val && val !== 0) return '$0'
  const abs = Math.abs(Math.round(val))
  const formatted = '$' + abs.toLocaleString('en-US')
  return val < 0 ? '-' + formatted : formatted
}
</script>
