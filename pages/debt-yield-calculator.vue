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
            <li class="text-gray-700 font-semibold">Debt Yield Calculator</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- PAGE TITLE + ON THIS PAGE NAV -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-6">
        <div class="mb-4">
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            Debt Yield Calculator — Commercial Real Estate Loan Risk Tool
          </h1>
          <p class="text-gray-500 mt-2 text-base">Calculate debt yield (NOI ÷ Loan), see how lenders evaluate loan risk, and validate your deal against common lender thresholds.</p>
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
            <li><a href="#vs-dscr" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Debt Yield vs DSCR</a></li>
            <li><a href="#property-types" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Property Types</a></li>
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
              <li><a href="#vs-dscr" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Debt Yield vs DSCR</a></li>
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
          <span v-if="calcMode === 'calculate'">Debt Yield</span>
          <span v-else-if="calcMode === 'find-noi'">Required NOI</span>
          <span v-else>Max Loan</span>
        </div>
        <div class="flex items-center gap-3">
          <template v-if="calcMode === 'calculate'">
            <span v-if="hasResult" class="text-xl font-extrabold leading-none" :style="`color: ${verdict?.color}`">
              {{ debtYieldFormatted }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="hasResult && verdict" class="text-xs font-bold px-2.5 py-1 rounded-full" :class="verdict.bgClass">{{ verdict.label }}</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <template v-else-if="calcMode === 'find-noi'">
            <span v-if="revNOI !== null" class="text-xl font-extrabold leading-none text-blue-700">{{ formatCurrency(revNOI) }}</span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="revNOI !== null" class="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">Target</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <template v-else>
            <span v-if="revLoan !== null" class="text-xl font-extrabold leading-none text-emerald-700">{{ formatCurrency(revLoan) }}</span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="revLoan !== null" class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">Max Loan</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
        </div>
      </div>
    </div>

    <!-- MAIN CALCULATOR -->
    <main id="calculator" class="max-w-[1100px] mx-auto px-4 pt-8 pb-10">
      <div class="rounded-3xl p-[3px]" style="background: linear-gradient(135deg, #1e3a5f 0%, #f59e0b 50%, #1e3a5f 100%);">
      <div class="bg-white rounded-[21px] shadow-xl shadow-slate-200/60" style="overflow: clip;">

      <!-- MODE SELECTOR -->
      <div class="border-b border-gray-100 rounded-t-2xl bg-white">
        <div class="px-5 pt-4 pb-3">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">What do you want to calculate?</p>
          <div class="grid grid-cols-3 gap-2">
            <button @click="calcMode = 'calculate'"
              class="text-left px-3 py-2.5 rounded-xl border-2 transition-all"
              :class="calcMode === 'calculate' ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 hover:border-gray-300'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'calculate' ? 'color:#1e3a5f;' : 'color:#6b7280;'">Calculate Debt Yield</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'calculate' ? 'text-amber-700' : 'text-gray-400'">NOI + Loan → Debt Yield</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'calculate' ? 'bg-amber-100 text-amber-800' : 'bg-gray-200 text-gray-400'">Standard</span>
            </button>
            <button @click="calcMode = 'find-noi'"
              class="text-left px-3 py-2.5 rounded-xl border-2 transition-all"
              :class="calcMode === 'find-noi' ? 'border-blue-400 bg-blue-50' : 'border-gray-200 hover:border-gray-300'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-noi' ? 'color:#1e3a5f;' : 'color:#6b7280;'">Find Required NOI</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-noi' ? 'text-blue-700' : 'text-gray-400'">Target + Loan → NOI</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-noi' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
            <button @click="calcMode = 'find-loan'"
              class="text-left px-3 py-2.5 rounded-xl border-2 transition-all"
              :class="calcMode === 'find-loan' ? 'border-emerald-400 bg-emerald-50' : 'border-gray-200 hover:border-gray-300'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-loan' ? 'color:#1e3a5f;' : 'color:#6b7280;'">Find Max Loan</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-loan' ? 'text-emerald-700' : 'text-gray-400'">NOI + Target → Max Loan</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-loan' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
          </div>
          <div class="mt-2.5">
            <p v-if="calcMode === 'calculate'" class="text-xs text-gray-500 leading-relaxed">
              Enter NOI and loan amount to calculate debt yield. Property value does not affect debt yield.
            </p>
            <p v-else-if="calcMode === 'find-noi'" class="text-xs text-blue-700 leading-relaxed bg-blue-50 px-3 py-1.5 rounded-lg">
              Enter your <strong>loan amount</strong> and <strong>target debt yield</strong> to find the minimum required NOI.
            </p>
            <p v-else class="text-xs text-emerald-700 leading-relaxed bg-emerald-50 px-3 py-1.5 rounded-lg">
              Enter your <strong>NOI</strong> and <strong>target debt yield</strong> to find the maximum supportable loan amount.
            </p>
          </div>
        </div>
      </div>

      <!-- TWO-COLUMN BODY -->
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch">

        <!-- LEFT: INPUTS -->
        <div class="border-b lg:border-b-0 lg:border-r border-gray-200 bg-white min-w-0">

          <!-- ─── MODE: CALCULATE ─── -->
          <template v-if="calcMode === 'calculate'">

            <!-- SECTION: Core Inputs -->
            <div class="border-b border-gray-100">
              <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
                <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Core Inputs</h2>
              </div>
              <div class="px-4 py-3 space-y-3">

                <!-- NOI -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">
                    Net Operating Income (NOI) <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="form.noi" type="number" min="0" step="1000"
                      placeholder="Enter annual net operating income"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Annual NOI = Gross income minus operating expenses (before debt service).</p>
                </div>

                <!-- Loan Amount -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">
                    Loan Amount <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="form.loanAmount" type="number" min="0" step="10000"
                      placeholder="Enter loan amount"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                  <p class="text-xs text-gray-400 mt-1">The outstanding loan principal. Property value does not affect debt yield.</p>
                </div>

                <!-- Target Debt Yield -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Target Debt Yield</label>
                  <div class="relative">
                    <input v-model.number="form.targetDebtYield" type="number" min="0" max="50" step="0.5"
                      placeholder="Optional: target debt yield"
                      class="w-full pl-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Common lender minimum: 8–10%. Used to compute max loan at target and gap analysis.</p>
                </div>

              </div>
            </div>

            <!-- SECTION: Optional Cross-Check Inputs -->
            <div class="border-b border-gray-100">
              <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
                <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Optional Cross-Checks</h2>
              </div>
              <div class="px-4 py-3 space-y-3">

                <!-- Property Value (optional) -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Property Value</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="form.propertyValue" type="number" min="0" step="10000"
                      placeholder="Optional: property value"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                  <p class="text-xs text-amber-600 mt-1 flex items-start gap-1">
                    <svg class="w-3 h-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                    Property value does NOT affect debt yield. Used only to show LTV as a cross-check metric.
                  </p>
                </div>

                <!-- Property Type -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Property Type</label>
                  <select v-model="form.propertyType"
                    class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm bg-white">
                    <option value="multifamily">Multifamily</option>
                    <option value="office">Office</option>
                    <option value="retail">Retail</option>
                    <option value="industrial">Industrial</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="mixed">Mixed-use</option>
                  </select>
                  <p class="text-xs text-gray-400 mt-1">Property type affects context notes only. It does not change the debt yield formula.</p>
                </div>

                <!-- Scenario Name -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Scenario Name</label>
                  <input v-model="form.scenarioName" type="text"
                    placeholder="Optional: name this scenario"
                    class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                </div>

              </div>
            </div>

          </template>

          <!-- ─── MODE: FIND NOI ─── -->
          <template v-else-if="calcMode === 'find-noi'">
            <div class="border-b border-gray-100">
              <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
                <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Inputs — Find Required NOI</h2>
              </div>
              <div class="px-4 py-3 space-y-3">

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Loan Amount <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="revNOIForm.loanAmount" type="number" min="0" step="10000"
                      placeholder="Enter loan amount"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Target Debt Yield <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <input v-model.number="revNOIForm.targetDebtYield" type="number" min="0" max="50" step="0.5"
                      placeholder="Enter target debt yield"
                      class="w-full pl-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Minimum debt yield required by your lender.</p>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Scenario Name</label>
                  <input v-model="revNOIForm.scenarioName" type="text"
                    placeholder="Optional: name this scenario"
                    class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                </div>

              </div>
            </div>
          </template>

          <!-- ─── MODE: FIND LOAN ─── -->
          <template v-else>
            <div class="border-b border-gray-100">
              <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
                <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Inputs — Find Max Loan</h2>
              </div>
              <div class="px-4 py-3 space-y-3">

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Net Operating Income (NOI) <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="revLoanForm.noi" type="number" min="0" step="1000"
                      placeholder="Enter annual NOI"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Target Debt Yield <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <input v-model.number="revLoanForm.targetDebtYield" type="number" min="0" max="50" step="0.5"
                      placeholder="Enter minimum debt yield required"
                      class="w-full pl-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Minimum debt yield required. Max loan = NOI ÷ Target Debt Yield.</p>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Scenario Name</label>
                  <input v-model="revLoanForm.scenarioName" type="text"
                    placeholder="Optional: name this scenario"
                    class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                </div>

              </div>
            </div>
          </template>

          <!-- IMPORTANT DISCLAIMERS (all modes) -->
          <div class="px-4 py-3 border-t border-gray-100 bg-gray-50 space-y-2">
            <p class="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Important Notes</p>
            <div class="flex items-start gap-1.5 text-xs text-gray-500">
              <svg class="w-3 h-3 flex-shrink-0 mt-0.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
              <span>Debt yield is not loan approval. Lenders use multiple criteria.</span>
            </div>
            <div class="flex items-start gap-1.5 text-xs text-gray-500">
              <svg class="w-3 h-3 flex-shrink-0 mt-0.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
              <span>Debt yield does not include interest rate. It is independent of financing terms.</span>
            </div>
            <div class="flex items-start gap-1.5 text-xs text-gray-500">
              <svg class="w-3 h-3 flex-shrink-0 mt-0.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
              <span>Debt yield does not include DSCR. They are separate metrics.</span>
            </div>
            <div class="flex items-start gap-1.5 text-xs text-gray-500">
              <svg class="w-3 h-3 flex-shrink-0 mt-0.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
              <span>Property value does not affect debt yield. LTV and cap rate shown as optional cross-checks only.</span>
            </div>
          </div>

        </div>

        <!-- RIGHT: RESULTS -->
        <div class="min-w-0 lg:relative lg:overflow-hidden">
        <div class="bg-gray-50 scrollbar-thin lg:absolute lg:inset-0 lg:overflow-y-auto">
        <div class="space-y-4 p-4 lg:p-5">

          <!-- CALCULATE MODE: MAIN RESULT -->
          <template v-if="calcMode === 'calculate'">

            <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

              <!-- Verdict Header -->
              <div class="p-5 text-center" :style="{ background: verdict?.gradient }">
                <p class="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">Debt Yield</p>
                <div class="text-5xl font-extrabold text-white mb-1">{{ debtYieldFormatted }}</div>
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-2">
                  {{ verdict?.label }}
                </div>
                <p class="text-white/90 text-sm font-medium">{{ verdict?.subtitle }}</p>
              </div>

              <!-- Property Type Context Note -->
              <div class="px-5 py-3 border-b border-gray-100 bg-gray-50">
                <p class="text-xs font-semibold text-gray-600">{{ propertyTypeContext }}</p>
              </div>

              <!-- Primary Metrics -->
              <div class="p-5 space-y-3">

                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-gray-600 font-medium">Debt Yield</span>
                  <span class="text-lg font-extrabold" :style="{ color: verdict?.color }">{{ debtYieldFormatted }}</span>
                </div>

                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-gray-600 font-medium">NOI</span>
                  <span class="text-base font-bold text-gray-800">{{ formatCurrency(form.noi) }}</span>
                </div>

                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-gray-600 font-medium">Loan Amount</span>
                  <span class="text-base font-bold text-gray-800">{{ formatCurrency(form.loanAmount) }}</span>
                </div>

                <div class="py-2 border-b border-gray-100">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 font-medium">Max Loan at Target ({{ effectiveTargetDY }}%)</span>
                    <span class="text-base font-bold text-gray-800">{{ formatCurrency(maxLoanAtTarget) }}</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5">Maximum loan where debt yield ≥ {{ effectiveTargetDY }}%.</p>
                </div>

                <div class="py-2" :class="loanGap !== 0 ? 'border-b border-gray-100' : ''">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 font-medium">Loan Gap vs Target</span>
                    <span class="text-base font-bold" :class="loanGap > 0 ? 'text-red-600' : loanGap < 0 ? 'text-green-600' : 'text-gray-800'">
                      {{ loanGap > 0 ? '+' : '' }}{{ formatCurrency(loanGap) }}
                    </span>
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5">
                    <span v-if="loanGap > 0">Loan exceeds target threshold by {{ formatCurrency(loanGap) }}.</span>
                    <span v-else-if="loanGap < 0">{{ formatCurrency(Math.abs(loanGap)) }} of additional loan capacity at target yield.</span>
                    <span v-else>Loan is exactly at the target debt yield threshold.</span>
                  </p>
                </div>

              </div>

              <!-- Optional Cross-Checks -->
              <div v-if="form.propertyValue > 0" class="p-5 pt-0 space-y-3">
                <p class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Cross-Check Metrics (Contextual Only)</p>

                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-gray-600 font-medium">LTV (cross-check)</span>
                  <span class="text-base font-bold text-gray-700">{{ crossCheckLTV !== null ? crossCheckLTV.toFixed(2) + '%' : '—' }}</span>
                </div>

                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-gray-600 font-medium">Cap Rate (cross-check)</span>
                  <span class="text-base font-bold text-gray-700">{{ crossCheckCapRate !== null ? crossCheckCapRate.toFixed(2) + '%' : '—' }}</span>
                </div>

                <div class="p-3 rounded-xl bg-amber-50 border border-amber-200">
                  <p class="text-xs text-amber-800">LTV and Cap Rate are shown as contextual cross-checks. Neither determines debt yield.</p>
                </div>
              </div>

              <!-- Disclaimers -->
              <div class="px-5 pb-5">
                <div class="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <p class="text-xs text-gray-500">
                    <strong>Debt yield is not loan approval.</strong> Lenders also evaluate DSCR, credit, reserves, and property condition. This result does not guarantee financing.
                  </p>
                </div>
              </div>

            </div>

            <!-- EMPTY STATE -->
            <div v-else class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style="background: #f0f4f8;">
                <svg class="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <p class="text-gray-500 font-medium text-sm">Enter NOI and loan amount to calculate debt yield.</p>
              <p class="text-gray-400 text-xs mt-1">Debt Yield = NOI ÷ Loan Amount</p>
            </div>

            <!-- SENSITIVITY TABLE -->
            <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 class="text-sm font-bold mb-3" style="color: #1e3a5f;">Debt Yield Sensitivity — Loan Variations</h3>
              <p class="text-xs text-gray-400 mb-3">How debt yield shifts at different loan amounts (NOI held constant).</p>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="border-b border-gray-200">
                      <th class="text-left py-2 pr-3 font-bold text-gray-600 text-xs">Loan Amount</th>
                      <th class="text-center py-2 px-2 font-bold text-gray-600 text-xs">Debt Yield</th>
                      <th class="text-right py-2 font-bold text-gray-600 text-xs">Signal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="row in sensitivityRows" :key="row.loan"
                      :class="row.isCurrent ? 'bg-yellow-50 font-semibold' : 'hover:bg-gray-50'">
                      <td class="py-2 pr-3 text-gray-800 text-xs">{{ formatCurrency(row.loan) }}</td>
                      <td class="py-2 px-2 text-center text-xs font-bold" :style="{ color: row.color }">{{ row.dy.toFixed(2) }}%</td>
                      <td class="py-2 text-right text-xs font-semibold" :style="{ color: row.color }">{{ row.label }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- DEAL CONTEXT -->
            <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 class="text-sm font-bold mb-3" style="color: #1e3a5f;">Deal Context</h3>
              <div class="p-4 rounded-xl border" :class="verdict?.bgClass">
                <p class="text-sm font-bold mb-2" :style="{ color: verdict?.color }">{{ verdict?.label }}</p>
                <p class="text-sm text-gray-700">{{ dealContextText }}</p>
              </div>
            </div>

          </template>

          <!-- FIND NOI MODE: RESULT -->
          <template v-else-if="calcMode === 'find-noi'">
            <div v-if="revNOI !== null" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div class="p-5 text-center bg-blue-700">
                <p class="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">Required NOI</p>
                <div class="text-4xl font-extrabold text-white mb-1">{{ formatCurrency(revNOI) }}</div>
                <p class="text-white/90 text-sm">To achieve {{ revNOIForm.targetDebtYield }}% debt yield</p>
              </div>
              <div class="p-5 space-y-3">
                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-gray-600 font-medium">Required NOI</span>
                  <span class="text-lg font-extrabold text-blue-700">{{ formatCurrency(revNOI) }}</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-gray-600 font-medium">Loan Amount</span>
                  <span class="text-base font-bold text-gray-800">{{ formatCurrency(revNOIForm.loanAmount) }}</span>
                </div>
                <div class="flex items-center justify-between py-2">
                  <span class="text-sm text-gray-600 font-medium">Target Debt Yield</span>
                  <span class="text-base font-bold text-blue-700">{{ revNOIForm.targetDebtYield }}%</span>
                </div>
                <div class="p-3 rounded-xl bg-blue-50 border border-blue-200">
                  <p class="text-xs text-blue-800 font-medium">Formula: Required NOI = Loan × Target Debt Yield ÷ 100</p>
                </div>
              </div>
            </div>
            <div v-else class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <p class="text-gray-500 font-medium text-sm">Enter loan amount and target debt yield.</p>
            </div>
          </template>

          <!-- FIND LOAN MODE: RESULT -->
          <template v-else>
            <div v-if="revLoan !== null" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div class="p-5 text-center bg-emerald-700">
                <p class="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">Max Loan Amount</p>
                <div class="text-4xl font-extrabold text-white mb-1">{{ formatCurrency(revLoan) }}</div>
                <p class="text-white/90 text-sm">At {{ revLoanForm.targetDebtYield }}% debt yield</p>
              </div>
              <div class="p-5 space-y-3">
                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-gray-600 font-medium">Max Loan</span>
                  <span class="text-lg font-extrabold text-emerald-700">{{ formatCurrency(revLoan) }}</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-gray-600 font-medium">NOI</span>
                  <span class="text-base font-bold text-gray-800">{{ formatCurrency(revLoanForm.noi) }}</span>
                </div>
                <div class="flex items-center justify-between py-2">
                  <span class="text-sm text-gray-600 font-medium">Target Debt Yield</span>
                  <span class="text-base font-bold text-emerald-700">{{ revLoanForm.targetDebtYield }}%</span>
                </div>
                <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <p class="text-xs text-emerald-800 font-medium">Formula: Max Loan = NOI ÷ (Target Debt Yield ÷ 100)</p>
                </div>
              </div>
            </div>
            <div v-else class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <p class="text-gray-500 font-medium text-sm">Enter NOI and target debt yield.</p>
            </div>
          </template>

          <!-- SAVE + SHARE + PDF (all modes when result exists) -->
          <div v-if="(calcMode === 'calculate' && hasResult) || (calcMode === 'find-noi' && revNOI !== null) || (calcMode === 'find-loan' && revLoan !== null)" class="space-y-2">
            <button @click="openSaveScenario"
              class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
              style="background: #f59e0b; color: #1e3a5f;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div v-if="calcMode === 'calculate' && hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-3" style="color: #1e3a5f;">Go Deeper</h3>
            <p class="text-xs text-gray-500 mb-3">Debt yield is one lens. Validate with:</p>
            <div class="space-y-2">
              <NuxtLink to="/dscr-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">DSCR Calculator</p>
                  <p class="text-xs text-gray-500">Measure debt coverage with interest rate included</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/ltv-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">LTV Calculator</p>
                  <p class="text-xs text-gray-500">Check loan-to-value ratio and equity position</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/cap-rate-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">Cap Rate Calculator</p>
                  <p class="text-xs text-gray-500">Unlevered property yield for market comparison</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/noi-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">NOI Calculator</p>
                  <p class="text-xs text-gray-500">Calculate NOI from income and expenses</p>
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

    <!-- SAVED SCENARIOS -->
    <div id="saved-scenarios" class="max-w-[1100px] mx-auto px-4 sm:px-6 pb-6 mt-4">
      <ScenarioPanel
        calculator="debt-yield"
        :has-result="hasResult || revNOI !== null || revLoan !== null"
        :result="currentScenarioResult"
        :trigger-save="triggerScenarioSave"
        @saved="onScenarioSaved"
      />
    </div>

    <!-- SEO CONTENT -->
    <div class="max-w-[1100px] mx-auto px-4 sm:px-6 pb-16 space-y-8">

      <!-- Overview -->
      <div id="overview" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">What Is Debt Yield in Real Estate?</h2>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          Debt yield is a commercial real estate lending metric that measures the ratio of a property's Net Operating Income (NOI) to the outstanding loan amount. It shows a lender how much annual income the property generates per dollar of loan — independent of property value, interest rate, or amortization schedule.
        </p>
        <div class="p-5 rounded-xl bg-gray-900 text-green-400 font-mono text-sm mb-4">
          Debt Yield = NOI ÷ Loan Amount
        </div>
        <div class="bg-blue-50 rounded-xl p-4 border border-blue-200 mb-4">
          <p class="text-sm font-bold text-blue-900 mb-2">Quick Answer</p>
          <p class="text-sm text-blue-800 mb-2">Example: $120,000 NOI ÷ $1,500,000 loan = 8.0% debt yield</p>
          <ul class="text-sm text-blue-800 space-y-1">
            <li>• Below 7% → DISTRESSED — significant lender risk</li>
            <li>• 7–9% → BELOW THRESHOLD — common lender floor</li>
            <li>• 9–10% → APPROACHING THRESHOLD — marginal</li>
            <li>• 10–12% → MEETS THRESHOLD — acceptable for many lenders</li>
            <li>• Above 12% → STRONG — well above typical minimums</li>
          </ul>
        </div>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-green-50 border border-green-200">
            <p class="text-sm font-bold text-green-900 mb-1">Debt yield measures:</p>
            <ul class="text-sm text-green-800 space-y-1">
              <li>• Income-to-loan ratio</li>
              <li>• Lender's recovery floor</li>
              <li>• NOI coverage per loan dollar</li>
            </ul>
          </div>
          <div class="p-4 rounded-xl bg-red-50 border border-red-200">
            <p class="text-sm font-bold text-red-900 mb-1">Debt yield does NOT measure:</p>
            <ul class="text-sm text-red-800 space-y-1">
              <li>• Property value or cap rate</li>
              <li>• DSCR or debt coverage</li>
              <li>• Interest rate sensitivity</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- How to Use -->
      <div id="how-to-use" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">How to Use This Calculator</h2>
        <ol class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style="background: #1e3a5f;">1</span>
            <div>
              <p class="font-semibold text-gray-800">Enter your annual NOI</p>
              <p class="text-sm text-gray-500">Net Operating Income = Gross rental income minus all operating expenses, before debt service.</p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style="background: #1e3a5f;">2</span>
            <div>
              <p class="font-semibold text-gray-800">Enter the loan amount</p>
              <p class="text-sm text-gray-500">The outstanding principal of the first mortgage. Property value does not affect the result.</p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style="background: #1e3a5f;">3</span>
            <div>
              <p class="font-semibold text-gray-800">Optionally enter a target debt yield</p>
              <p class="text-sm text-gray-500">The lender's minimum threshold — typically 8–10%. Used to compute max supportable loan and gap analysis.</p>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style="background: #1e3a5f;">4</span>
            <div>
              <p class="font-semibold text-gray-800">Read your result</p>
              <p class="text-sm text-gray-500">Compare to common lender thresholds. Use the sensitivity table to see how changes affect debt yield.</p>
            </div>
          </li>
        </ol>
      </div>

      <!-- Formula -->
      <div id="formula" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Debt Yield Formula</h2>
        <div class="p-5 rounded-xl bg-gray-900 text-green-400 font-mono text-sm mb-4">
          Debt Yield (%) = (NOI ÷ Loan Amount) × 100
        </div>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          This formula is simple but powerful. Unlike DSCR (which depends on interest rate and amortization) or Cap Rate (which depends on property value), debt yield depends only on the income the property generates relative to the loan outstanding.
        </p>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-2">Example: Meets Threshold</p>
            <p class="text-sm text-gray-600">NOI: $150,000</p>
            <p class="text-sm text-gray-600">Loan: $1,500,000</p>
            <p class="text-sm font-bold text-green-700 mt-2">Debt Yield: $150k ÷ $1.5M = 10.0%</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-2">Example: Below Threshold</p>
            <p class="text-sm text-gray-600">NOI: $100,000</p>
            <p class="text-sm text-gray-600">Loan: $1,500,000</p>
            <p class="text-sm font-bold text-red-700 mt-2">Debt Yield: $100k ÷ $1.5M = 6.7%</p>
          </div>
        </div>
      </div>

      <!-- Result Meaning -->
      <div id="result-meaning" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">What Does Your Debt Yield Mean?</h2>
        <div class="space-y-4">
          <div class="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
            <span class="w-3 h-3 rounded-full bg-green-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-green-900">≥ 12% — Strong</p>
              <p class="text-sm text-green-800">Well above typical lender minimums. Strong income-to-loan ratio. Favorable position for financing.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200">
            <span class="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-blue-900">10–12% — Meets Threshold</p>
              <p class="text-sm text-blue-800">Acceptable for most conventional CRE lenders. Meets the common 10% minimum. Loan likely proceeds to underwriting.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <span class="w-3 h-3 rounded-full bg-amber-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-amber-900">9–10% — Approaching Threshold</p>
              <p class="text-sm text-amber-800">Close to the 10% floor. May require NOI improvement or loan reduction to satisfy some lenders.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-200">
            <span class="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-orange-900">7–9% — Below Threshold</p>
              <p class="text-sm text-orange-800">Below common lender minimums. Renegotiate loan terms, increase NOI, or consider alternative lenders.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-red-50 border border-red-200">
            <span class="w-3 h-3 rounded-full bg-red-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-red-900">&lt; 7% — Distressed</p>
              <p class="text-sm text-red-800">Significant lender risk signal. Property income is insufficient relative to loan exposure. Major restructuring likely needed.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Benchmarks -->
      <div id="benchmarks" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Debt Yield Benchmarks by Lender Type</h2>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          Debt yield thresholds vary by lender type, property type, and market conditions. These are common ranges — not guarantees.
        </p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="border-b-2 border-gray-200">
                <th class="text-left py-3 pr-4 font-bold text-gray-700">Lender Type</th>
                <th class="text-center py-3 px-2 font-bold text-gray-700">Typical Min. DY</th>
                <th class="text-left py-3 pl-2 font-bold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr>
                <td class="py-3 pr-4 font-medium text-gray-800">CMBS / Conduit</td>
                <td class="py-3 px-2 text-center font-semibold text-gray-700">8–10%</td>
                <td class="py-3 pl-2 text-gray-500 text-xs">Floor written into loan docs. Market-cycle dependent.</td>
              </tr>
              <tr>
                <td class="py-3 pr-4 font-medium text-gray-800">Life Insurance Companies</td>
                <td class="py-3 px-2 text-center font-semibold text-gray-700">8–10%</td>
                <td class="py-3 pl-2 text-gray-500 text-xs">Conservative underwriting, lower leverage.</td>
              </tr>
              <tr>
                <td class="py-3 pr-4 font-medium text-gray-800">Bank / Portfolio</td>
                <td class="py-3 px-2 text-center font-semibold text-gray-700">7–9%</td>
                <td class="py-3 pl-2 text-gray-500 text-xs">More flexible, varies by relationship and market.</td>
              </tr>
              <tr>
                <td class="py-3 pr-4 font-medium text-gray-800">Agency (Fannie/Freddie)</td>
                <td class="py-3 px-2 text-center font-semibold text-gray-700">Varies</td>
                <td class="py-3 pl-2 text-gray-500 text-xs">Multifamily focused. DSCR more heavily weighted.</td>
              </tr>
              <tr>
                <td class="py-3 pr-4 font-medium text-gray-800">Bridge / Hard Money</td>
                <td class="py-3 px-2 text-center font-semibold text-gray-700">Varies widely</td>
                <td class="py-3 pl-2 text-gray-500 text-xs">May not use debt yield. Asset-value based underwriting common.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-gray-400 mt-4">Thresholds are indicative only. Actual requirements depend on lender, market cycle, and deal specifics. This is not a loan approval tool.</p>
      </div>

      <!-- Debt Yield vs DSCR -->
      <div id="vs-dscr" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Debt Yield vs DSCR — Key Differences</h2>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          Debt yield and DSCR are both used in commercial lending — but they measure different things and cannot be substituted for each other.
        </p>
        <div class="overflow-x-auto mb-4">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="border-b-2 border-gray-200">
                <th class="text-left py-3 pr-4 font-bold text-gray-700">Metric</th>
                <th class="text-left py-3 px-2 font-bold text-gray-700">Formula</th>
                <th class="text-left py-3 pl-2 font-bold text-gray-700">Depends On</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr>
                <td class="py-3 pr-4 font-semibold" style="color: #1e3a5f;">Debt Yield</td>
                <td class="py-3 px-2 text-gray-700 font-mono text-xs">NOI ÷ Loan</td>
                <td class="py-3 pl-2 text-gray-600 text-xs">NOI and loan only. Rate-independent.</td>
              </tr>
              <tr>
                <td class="py-3 pr-4 font-semibold text-purple-800">DSCR</td>
                <td class="py-3 px-2 text-gray-700 font-mono text-xs">NOI ÷ Debt Service</td>
                <td class="py-3 pl-2 text-gray-600 text-xs">NOI, loan, interest rate, and amortization.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-4 rounded-xl bg-purple-50 border border-purple-200">
          <p class="text-sm font-bold text-purple-900 mb-2">Why lenders use both:</p>
          <p class="text-sm text-purple-800">
            DSCR tells lenders if the current cash flow covers today's debt payments. Debt yield tells lenders what yield they'd recover if they took the property back — independent of what interest rate was used to structure the loan. In rising rate environments, debt yield becomes a critical stress-test metric.
          </p>
        </div>
        <div class="mt-4 flex gap-3">
          <NuxtLink to="/dscr-calculator" class="flex-1 flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 transition">
            <p class="text-sm font-semibold" style="color: #1e3a5f;">DSCR Calculator</p>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </NuxtLink>
          <NuxtLink to="/ltv-calculator" class="flex-1 flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 transition">
            <p class="text-sm font-semibold" style="color: #1e3a5f;">LTV Calculator</p>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </NuxtLink>
        </div>
      </div>

      <!-- Property Types -->
      <div id="property-types" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Debt Yield by Property Type</h2>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          The debt yield formula is identical for all property types — but typical lender thresholds vary by asset class due to income stability, vacancy risk, and cap rate norms.
        </p>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-1">Multifamily</p>
            <p class="text-sm text-gray-600">Most liquid asset class. Lenders often accept 8–9% minimums for stabilized properties. Agency lending widely available.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-1">Office</p>
            <p class="text-sm text-gray-600">Higher risk post-COVID. Lenders typically require 10%+ for office collateral. Vacancy and lease roll risk elevated.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-1">Retail</p>
            <p class="text-sm text-gray-600">Tenant quality and lease term critical. Single-tenant NNN may get favorable treatment. Inline retail requires higher debt yield.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-1">Industrial</p>
            <p class="text-sm text-gray-600">Strong demand, long leases. Lenders may accept 8–9% for institutional-quality industrial assets. Fastest-growing CRE sector.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-1">Hospitality</p>
            <p class="text-sm text-gray-600">Highly cyclical. Revenue-per-available-room (RevPAR) matters. Lenders typically require 11–13%+ for hotel collateral.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-1">Mixed-use</p>
            <p class="text-sm text-gray-600">Analyzed as a blend. Retail portion typically stressed more aggressively than residential. Consult lender underwriting guidelines.</p>
          </div>
        </div>
        <p class="text-xs text-gray-400 mt-4">All thresholds are indicative and vary by lender, market, and cycle. Debt yield does not guarantee loan approval or lender acceptance.</p>
      </div>

      <!-- Limitations -->
      <div id="limitations" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Limitations of Debt Yield</h2>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
            <div>
              <p class="font-semibold text-gray-800">Does not include interest rate</p>
              <p class="text-sm text-gray-600">A deal could show strong debt yield but still be cash-flow negative if the interest rate is high. Use DSCR to check actual coverage.</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
            <div>
              <p class="font-semibold text-gray-800">Not a standalone loan approval metric</p>
              <p class="text-sm text-gray-600">Lenders evaluate debt yield alongside DSCR, LTV, borrower credit, reserves, property condition, and market data. Passing debt yield alone does not mean approval.</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
            <div>
              <p class="font-semibold text-gray-800">NOI quality matters</p>
              <p class="text-sm text-gray-600">Lenders typically underwrite to stabilized NOI, not in-place NOI. Leased-up projections, inflated rent assumptions, or understated expenses will produce misleading results.</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
            <div>
              <p class="font-semibold text-gray-800">Thresholds are not universal</p>
              <p class="text-sm text-gray-600">The 10% threshold is widely cited but not a legal requirement. Each lender sets their own floor. CMBS minimum debt yield is written into loan documents and varies by deal.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <div id="faq" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions</h2>
        <div class="space-y-5">

          <div>
            <h3 class="font-bold text-gray-800 mb-2">What is debt yield in real estate?</h3>
            <p class="text-gray-700 text-sm leading-relaxed">Debt yield is the ratio of a property's Net Operating Income (NOI) to the outstanding loan amount, expressed as a percentage. Formula: Debt Yield = NOI ÷ Loan Amount. It is used by commercial real estate lenders to measure the income-to-loan ratio independent of property value, interest rate, or amortization.</p>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">What is a good debt yield?</h3>
            <p class="text-gray-700 text-sm leading-relaxed">Most commercial lenders, especially CMBS and life insurance companies, target a minimum of 8–10% debt yield. A debt yield of 10% or above is generally considered acceptable for conventional CRE lending. Above 12% is strong. Below 8% is concerning for most lenders. Exact thresholds vary by lender type, property type, and market cycle.</p>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">How is debt yield different from DSCR?</h3>
            <p class="text-gray-700 text-sm leading-relaxed">DSCR (Debt Service Coverage Ratio) measures NOI relative to actual debt payments — it depends on interest rate and amortization. Debt yield measures NOI relative to the loan balance — it is rate-independent. Lenders use both: DSCR checks today's cash flow coverage, while debt yield stress-tests the lender's recovery position regardless of current rates.</p>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">Why doesn't property value affect debt yield?</h3>
            <p class="text-gray-700 text-sm leading-relaxed">Debt yield intentionally ignores property value. This makes it cycle-resistant. During a price bubble, cap rates compress and LTV looks favorable, but debt yield may reveal inadequate income coverage. Lenders use debt yield as a floor that cannot be engineered away by inflated appraisals.</p>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">Does debt yield guarantee loan approval?</h3>
            <p class="text-gray-700 text-sm leading-relaxed">No. Debt yield is one input in commercial lending underwriting. Lenders also evaluate DSCR, LTV, borrower credit history, liquidity reserves, property condition, market occupancy trends, and other factors. Meeting the debt yield threshold is necessary but not sufficient for approval.</p>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">How do I increase debt yield?</h3>
            <p class="text-gray-700 text-sm leading-relaxed">You can increase debt yield by (1) increasing NOI — through higher rents, reduced vacancy, or cutting expenses; (2) reducing the loan amount — bring more equity, or negotiate a lower loan-to-cost; (3) both simultaneously. Property value appreciation alone does not improve debt yield.</p>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">What is debt yield used for in CMBS loans?</h3>
            <p class="text-gray-700 text-sm leading-relaxed">In CMBS (commercial mortgage-backed securities) loans, the minimum debt yield is often written directly into loan documents. It can affect the ability to release collateral, extend the loan, or take new mezzanine financing. Falling below the written minimum may trigger cash management provisions or other lender protections.</p>
          </div>

        </div>
      </div>

      <!-- Related Calculators -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Related Calculators</h2>
        <p class="text-gray-500 text-sm mb-5">Debt yield is one piece of commercial underwriting. Validate the full deal with these tools.</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NuxtLink to="/dscr-calculator" class="flex flex-col gap-1 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition">
            <p class="font-bold text-sm" style="color: #1e3a5f;">DSCR Calculator</p>
            <p class="text-xs text-gray-500">Debt coverage ratio including interest rate and payments</p>
          </NuxtLink>
          <NuxtLink to="/ltv-calculator" class="flex flex-col gap-1 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition">
            <p class="font-bold text-sm" style="color: #1e3a5f;">LTV Calculator</p>
            <p class="text-xs text-gray-500">Loan-to-value ratio, equity, and max loan at target LTV</p>
          </NuxtLink>
          <NuxtLink to="/cap-rate-calculator" class="flex flex-col gap-1 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition">
            <p class="font-bold text-sm" style="color: #1e3a5f;">Cap Rate Calculator</p>
            <p class="text-xs text-gray-500">Unlevered property yield for market comparison</p>
          </NuxtLink>
          <NuxtLink to="/noi-calculator" class="flex flex-col gap-1 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition">
            <p class="font-bold text-sm" style="color: #1e3a5f;">NOI Calculator</p>
            <p class="text-xs text-gray-500">Calculate NOI from income and operating expenses</p>
          </NuxtLink>
          <NuxtLink to="/property-cash-flow-calculator" class="flex flex-col gap-1 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition">
            <p class="font-bold text-sm" style="color: #1e3a5f;">Property Cash Flow Calculator</p>
            <p class="text-xs text-gray-500">Monthly cash flow after debt service and expenses</p>
          </NuxtLink>
          <NuxtLink to="/rental-property-roi-calculator" class="flex flex-col gap-1 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition">
            <p class="font-bold text-sm" style="color: #1e3a5f;">Real Estate ROI Calculator</p>
            <p class="text-xs text-gray-500">Full return analysis including equity growth and cash flow</p>
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
              <li><NuxtLink to="/debt-yield-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">Debt Yield</NuxtLink></li>
              <li><NuxtLink to="/noi-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">NOI</NuxtLink></li>
            </ul>
          </div>
          <div>
            <p class="font-bold text-gray-700 mb-3 text-sm">More Tools</p>
            <ul class="space-y-1.5">
              <li><NuxtLink to="/property-cash-flow-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">Cash Flow</NuxtLink></li>
              <li><NuxtLink to="/brrrr-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">BRRRR</NuxtLink></li>
              <li><NuxtLink to="/real-estate-irr-calculator" class="text-sm text-gray-500 hover:text-gray-800 transition">IRR Calculator</NuxtLink></li>
              <li><NuxtLink to="/calculators" class="text-sm text-gray-500 hover:text-gray-800 transition">All Calculators</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p class="text-xs text-gray-400">© 2026 RealCalc. For informational purposes only. Not financial advice.</p>
          <p class="text-xs text-gray-400">Debt yield does not guarantee loan approval. Consult a licensed lender.</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted } from 'vue'

// ─── SEO ──────────────────────────────────────────────────────────────────────
useHead({
  title: 'Debt Yield Calculator — Commercial Real Estate Loan Risk Tool (2026)',
  meta: [
    { name: 'description', content: 'Calculate debt yield (NOI ÷ Loan Amount) for commercial real estate. See lender thresholds, max supportable loan, and sensitivity analysis. Free tool for US real estate investors.' },
    { property: 'og:title', content: 'Debt Yield Calculator — Commercial Real Estate Loan Risk Tool (2026)' },
    { property: 'og:description', content: 'Calculate debt yield, find required NOI, and determine max loan. Free tool for US commercial real estate investors.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://arvcalc.com/debt-yield-calculator' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Debt Yield Calculator — Commercial Real Estate Loan Risk Tool' },
    { name: 'twitter:description', content: 'Calculate debt yield ratio instantly. NOI ÷ Loan Amount. Free tool for CRE investors.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://arvcalc.com/debt-yield-calculator' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Debt Yield Calculator',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Web',
          description: 'Calculate debt yield (NOI ÷ Loan Amount) for commercial real estate. Includes reverse modes for finding required NOI or max supportable loan.',
          url: 'https://arvcalc.com/debt-yield-calculator',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is debt yield in real estate?',
              acceptedAnswer: { '@type': 'Answer', text: 'Debt yield is the ratio of a property\'s Net Operating Income (NOI) to the outstanding loan amount. Formula: Debt Yield = NOI ÷ Loan Amount. It measures income coverage per loan dollar, independent of property value, interest rate, or amortization.' }
            },
            {
              '@type': 'Question',
              name: 'What is a good debt yield for commercial real estate?',
              acceptedAnswer: { '@type': 'Answer', text: 'Most CMBS and institutional lenders require a minimum debt yield of 8–10%. A debt yield of 10% or above is generally acceptable. Above 12% is strong. Below 8% is considered distressed by most lenders.' }
            },
            {
              '@type': 'Question',
              name: 'How is debt yield different from DSCR?',
              acceptedAnswer: { '@type': 'Answer', text: 'DSCR measures NOI relative to actual debt payments (depends on interest rate and amortization). Debt yield measures NOI relative to loan balance — it is rate-independent. Lenders use both metrics in commercial underwriting.' }
            },
            {
              '@type': 'Question',
              name: 'Why doesn\'t property value affect debt yield?',
              acceptedAnswer: { '@type': 'Answer', text: 'Debt yield intentionally ignores property value to prevent appraisal inflation from masking inadequate income. Lenders use it as a cycle-resistant floor that focuses purely on income-to-loan ratio.' }
            },
            {
              '@type': 'Question',
              name: 'Does debt yield guarantee loan approval?',
              acceptedAnswer: { '@type': 'Answer', text: 'No. Debt yield is one underwriting input. Lenders also evaluate DSCR, LTV, credit, reserves, and market conditions. Meeting a debt yield threshold is necessary but not sufficient for loan approval.' }
            },
            {
              '@type': 'Question',
              name: 'How do I increase debt yield?',
              acceptedAnswer: { '@type': 'Answer', text: 'Increase NOI (raise rents, reduce vacancy, cut expenses) or reduce the loan amount. Property value appreciation alone does not improve debt yield.' }
            }
          ]
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arvcalc.com' },
            { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://arvcalc.com/calculators' },
            { '@type': 'ListItem', position: 3, name: 'Debt Yield Calculator', item: 'https://arvcalc.com/debt-yield-calculator' }
          ]
        }
      ])
    }
  ]
})

// ─── STATE ────────────────────────────────────────────────────────────────────
const isNavExpanded = ref(false)
const shareCopied = ref(false)
const calcMode = ref('calculate')

// ─── SCENARIO PANEL ──────────────────────────────────────────────────────────
const triggerScenarioSave = ref(false)
function openSaveScenario () {
  triggerScenarioSave.value = true
  nextTick(() => { triggerScenarioSave.value = false })
}
const currentScenarioResult = computed(() => {
  if (calcMode.value === 'calculate' && hasResult.value) {
    return {
      primaryMetric: 'Debt Yield',
      primaryValue: debtYieldFormatted.value,
      badgeLabel: verdict.value?.label,
      badgeColor: verdict.value?.color,
      noi: form.value.noi,
      loanAmount: form.value.loanAmount,
      propertyValue: form.value.propertyValue || null,
      targetDebtYield: effectiveTargetDY.value,
      maxLoanAtTarget: maxLoanAtTarget.value
    }
  }
  if (calcMode.value === 'find-noi' && revNOI.value !== null) {
    return {
      primaryMetric: 'Required NOI',
      primaryValue: formatCurrency(revNOI.value),
      badgeLabel: 'Target',
      badgeColor: '#1d4ed8',
      loanAmount: revNOIForm.value.loanAmount,
      targetDebtYield: revNOIForm.value.targetDebtYield
    }
  }
  if (calcMode.value === 'find-loan' && revLoan.value !== null) {
    return {
      primaryMetric: 'Max Loan',
      primaryValue: formatCurrency(revLoan.value),
      badgeLabel: 'Max Loan',
      badgeColor: '#059669',
      noi: revLoanForm.value.noi,
      targetDebtYield: revLoanForm.value.targetDebtYield
    }
  }
  return undefined
})
function onScenarioSaved (_id) {}

// ─── INPUTS ───────────────────────────────────────────────────────────────────
const form = ref({
  noi: null,
  loanAmount: null,
  targetDebtYield: null,
  propertyValue: null,
  propertyType: 'multifamily',
  scenarioName: ''
})

const revNOIForm = ref({
  loanAmount: null,
  targetDebtYield: null,
  scenarioName: ''
})

const revLoanForm = ref({
  noi: null,
  targetDebtYield: null,
  scenarioName: ''
})

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const safeNOI = computed(() => (form.value.noi > 0 ? form.value.noi : 0))
const safeLoan = computed(() => (form.value.loanAmount > 0 ? form.value.loanAmount : 0))
const effectiveTargetDY = computed(() => (form.value.targetDebtYield > 0 ? form.value.targetDebtYield : 10))

const canCalculate = computed(() => safeNOI.value > 0 && safeLoan.value > 0)
const hasResult = computed(() => canCalculate.value)

// ─── CORE CALCULATION ─────────────────────────────────────────────────────────
// Debt Yield = NOI / Loan Amount (property value does NOT affect this)
const debtYield = computed(() => {
  if (!canCalculate.value) return null
  return (safeNOI.value / safeLoan.value) * 100
})

const debtYieldFormatted = computed(() => {
  if (debtYield.value === null) return '—'
  return debtYield.value.toFixed(2) + '%'
})

// Max Loan at Target = NOI / (targetDY / 100)
const maxLoanAtTarget = computed(() => {
  if (!canCalculate.value) return 0
  return safeNOI.value / (effectiveTargetDY.value / 100)
})

// Loan Gap vs Target (positive = loan exceeds target max, negative = room below target)
const loanGap = computed(() => {
  if (!canCalculate.value) return 0
  return safeLoan.value - maxLoanAtTarget.value
})

// Optional cross-checks (only when property value entered)
const crossCheckLTV = computed(() => {
  if (!canCalculate.value || !form.value.propertyValue || form.value.propertyValue <= 0) return null
  return (safeLoan.value / form.value.propertyValue) * 100
})

const crossCheckCapRate = computed(() => {
  if (!canCalculate.value || !form.value.propertyValue || form.value.propertyValue <= 0) return null
  return (safeNOI.value / form.value.propertyValue) * 100
})

// ─── REVERSE MODES ────────────────────────────────────────────────────────────
// Find NOI: Required NOI = Loan × (targetDY / 100)
const revNOI = computed(() => {
  const loan = revNOIForm.value.loanAmount
  const dy = revNOIForm.value.targetDebtYield
  if (!loan || loan <= 0 || !dy || dy <= 0) return null
  return loan * (dy / 100)
})

// Find Max Loan: Max Loan = NOI / (targetDY / 100)
const revLoan = computed(() => {
  const noi = revLoanForm.value.noi
  const dy = revLoanForm.value.targetDebtYield
  if (!noi || noi <= 0 || !dy || dy <= 0) return null
  return noi / (dy / 100)
})

// ─── VERDICT / RIS ────────────────────────────────────────────────────────────
const verdict = computed(() => {
  if (debtYield.value === null) return null
  const dy = debtYield.value
  if (dy >= 12) return {
    label: 'Strong',
    color: '#15803d',
    gradient: 'linear-gradient(135deg, #15803d, #166534)',
    bgClass: 'bg-green-50 border-green-200',
    subtitle: 'Well above typical lender minimums'
  }
  if (dy >= 10) return {
    label: 'Meets Threshold',
    color: '#1d4ed8',
    gradient: 'linear-gradient(135deg, #1d4ed8, #1e40af)',
    bgClass: 'bg-blue-50 border-blue-200',
    subtitle: 'Acceptable for most conventional CRE lenders'
  }
  if (dy >= 9) return {
    label: 'Approaching Threshold',
    color: '#b45309',
    gradient: 'linear-gradient(135deg, #b45309, #92400e)',
    bgClass: 'bg-amber-50 border-amber-200',
    subtitle: 'Close to the 10% floor — may need improvement'
  }
  if (dy >= 7) return {
    label: 'Below Threshold',
    color: '#ea580c',
    gradient: 'linear-gradient(135deg, #ea580c, #c2410c)',
    bgClass: 'bg-orange-50 border-orange-200',
    subtitle: 'Below common lender minimums'
  }
  return {
    label: 'Distressed',
    color: '#dc2626',
    gradient: 'linear-gradient(135deg, #dc2626, #b91c1c)',
    bgClass: 'bg-red-50 border-red-200',
    subtitle: 'Significant lender risk signal'
  }
})

// ─── DEAL CONTEXT ─────────────────────────────────────────────────────────────
const dealContextText = computed(() => {
  if (!hasResult.value || !verdict.value) return ''
  const dy = debtYield.value
  const gap = loanGap.value
  if (dy >= 12) {
    return `At ${dy.toFixed(2)}% debt yield, this property generates strong income relative to the loan amount. Most conventional CRE lenders set a floor of 8–10%, so this deal has significant headroom. If the lender's threshold is ${effectiveTargetDY.value}%, you have ${formatCurrency(Math.abs(gap))} of additional loan capacity before hitting that floor.`
  }
  if (dy >= 10) {
    return `At ${dy.toFixed(2)}% debt yield, this deal meets the common 10% lender threshold. The property is generating adequate income relative to the loan. ${gap > 0 ? `The current loan exceeds your target max by ${formatCurrency(gap)} — consider reviewing the loan structure.` : `There is ${formatCurrency(Math.abs(gap))} of remaining loan capacity at the ${effectiveTargetDY.value}% target.`}`
  }
  if (dy >= 9) {
    return `At ${dy.toFixed(2)}% debt yield, you are approaching but not yet at the common 10% threshold. Some lenders may still proceed, but you may face scrutiny. To reach ${effectiveTargetDY.value}%, you would need to reduce the loan to ${formatCurrency(maxLoanAtTarget.value)} or increase NOI.`
  }
  if (dy >= 7) {
    return `At ${dy.toFixed(2)}% debt yield, this deal falls below typical lender minimums of 8–10%. Consider increasing NOI (reduce vacancy, raise rents, trim expenses) or reducing the loan amount. To meet a ${effectiveTargetDY.value}% threshold, the maximum supportable loan at current NOI is ${formatCurrency(maxLoanAtTarget.value)}.`
  }
  return `At ${dy.toFixed(2)}% debt yield, lenders will view this as a distressed income-to-loan ratio. The current NOI of ${formatCurrency(safeNOI.value)} is significantly below what is needed to support a ${formatCurrency(safeLoan.value)} loan at a ${effectiveTargetDY.value}% debt yield target. Major restructuring is likely required.`
})

// ─── PROPERTY TYPE CONTEXT ────────────────────────────────────────────────────
const propertyTypeContext = computed(() => {
  const map = {
    multifamily: 'Multifamily: Most lenders accept 8–9% for stabilized assets. Agency programs widely available.',
    office: 'Office: Elevated risk. Most lenders require 10%+ given post-COVID vacancy concerns.',
    retail: 'Retail: Varies widely. NNN single-tenant may get favorable treatment; inline retail typically requires higher yield.',
    industrial: 'Industrial: Strong demand sector. Lenders often accept 8–9% for institutional-grade assets.',
    hospitality: 'Hospitality: Highly cyclical. Most lenders require 11–13%+ for hotel collateral.',
    mixed: 'Mixed-use: Analyzed as a blend. Consult lender underwriting guidelines for allocation methodology.'
  }
  return map[form.value.propertyType] || ''
})

// ─── SENSITIVITY TABLE ────────────────────────────────────────────────────────
const sensitivityRows = computed(() => {
  if (!canCalculate.value) return []
  const loan = safeLoan.value
  const noi = safeNOI.value
  const steps = [-30, -20, -10, 0, 10, 20, 30]
  return steps.map(pct => {
    const adjLoan = loan * (1 + pct / 100)
    const dy = (noi / adjLoan) * 100
    const isCurrent = pct === 0
    let color = '#dc2626'
    let label = 'Distressed'
    if (dy >= 12) { color = '#15803d'; label = 'Strong' }
    else if (dy >= 10) { color = '#1d4ed8'; label = 'Meets Threshold' }
    else if (dy >= 9) { color = '#b45309'; label = 'Approaching' }
    else if (dy >= 7) { color = '#ea580c'; label = 'Below Threshold' }
    return { loan: adjLoan, dy, color, label, isCurrent }
  })
})

// ─── SHARE + PDF ──────────────────────────────────────────────────────────────
function shareUrl () {
  const url = new URL(window.location.href)
  if (form.value.noi) url.searchParams.set('noi', form.value.noi)
  if (form.value.loanAmount) url.searchParams.set('loan', form.value.loanAmount)
  if (form.value.targetDebtYield) url.searchParams.set('target', form.value.targetDebtYield)
  if (form.value.propertyValue) url.searchParams.set('pv', form.value.propertyValue)
  navigator.clipboard.writeText(url.toString()).then(() => {
    shareCopied.value = true
    setTimeout(() => { shareCopied.value = false }, 2000)
  })
}

async function exportPdf () {
  const { default: jsPDF } = await import('jspdf')
  const doc = new jsPDF()
  doc.setFontSize(18)
  doc.setTextColor(30, 58, 95)
  doc.text('Debt Yield Calculator', 20, 20)
  doc.setFontSize(11)
  doc.setTextColor(80, 80, 80)
  doc.text(`NOI: ${formatCurrency(safeNOI.value)}`, 20, 35)
  doc.text(`Loan Amount: ${formatCurrency(safeLoan.value)}`, 20, 43)
  doc.text(`Debt Yield: ${debtYieldFormatted.value}`, 20, 51)
  doc.text(`Verdict: ${verdict.value?.label || '—'}`, 20, 59)
  doc.text(`Max Loan at ${effectiveTargetDY.value}% Target: ${formatCurrency(maxLoanAtTarget.value)}`, 20, 67)
  if (crossCheckLTV.value !== null) doc.text(`LTV (cross-check): ${crossCheckLTV.value.toFixed(2)}%`, 20, 75)
  if (crossCheckCapRate.value !== null) doc.text(`Cap Rate (cross-check): ${crossCheckCapRate.value.toFixed(2)}%`, 20, 83)
  doc.setFontSize(9)
  doc.setTextColor(150, 150, 150)
  doc.text('Debt yield is not loan approval. For informational use only. arvcalc.com', 20, 280)
  doc.save('debt-yield-calculator.pdf')
}

// ─── URL PARAMS ───────────────────────────────────────────────────────────────
onMounted(() => {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  if (params.get('noi')) form.value.noi = parseFloat(params.get('noi'))
  if (params.get('loan')) form.value.loanAmount = parseFloat(params.get('loan'))
  if (params.get('target')) form.value.targetDebtYield = parseFloat(params.get('target'))
  if (params.get('pv')) form.value.propertyValue = parseFloat(params.get('pv'))
})

// ─── FORMAT HELPERS ───────────────────────────────────────────────────────────
function formatCurrency (val) {
  if (!val && val !== 0) return '$0'
  return '$' + Math.round(val).toLocaleString('en-US')
}
</script>
