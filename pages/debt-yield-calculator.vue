<template>
  <div class="min-h-screen bg-gray-50">

    <!-- ═══��═══════════════════════════════════════════
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
            <li class="text-gray-700 font-semibold">Debt Yield Calculator</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         PAGE TITLE + ON THIS PAGE NAV
    ═══════════════════════════════════════════════ -->
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
            <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            <li><a href="#what-is-debt-yield" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is Debt Yield</a></li>
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
              <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
              <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
              <li><a href="#what-is-debt-yield" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is Debt Yield</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
              <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
              <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
              <li><a href="#applications" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Applications</a></li>
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
         MOBILE LIVE RESULT BAR
    ═══════════════════════════════════════════════ -->
    <div class="lg:hidden sticky top-[4.5rem] z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <div class="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <svg class="w-4 h-4 flex-shrink-0" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          <span v-if="calcMode === 'calculate'">Debt Yield</span>
          <span v-else-if="calcMode === 'find-noi'">Required NOI</span>
          <span v-else>Max Loan</span>
        </div>
        <div class="flex items-center gap-3">
          <template v-if="calcMode === 'calculate'">
            <span v-if="hasResult" class="text-2xl font-extrabold leading-none" :style="`color: ${verdict?.color}`">
              {{ debtYieldFormatted }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">—</span>
            <span v-if="hasResult && verdict"
              class="text-xs font-bold px-2.5 py-1 rounded-full text-white"
              :style="`background: ${verdict.color}`">
              {{ verdict.label }}
            </span>
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

    <!-- ═══════════════════════════════════════════════
         MAIN CALCULATOR
    ═════��═════════════════════════════════════════ -->
    <main id="calculator" class="max-w-[1100px] mx-auto px-4 pt-8 pb-10">
      <div class="rounded-3xl p-[3px]" style="background: linear-gradient(135deg, #1e3a5f 0%, #f59e0b 50%, #1e3a5f 100%);">
      <div class="bg-white rounded-[21px] shadow-xl shadow-slate-200/60" style="overflow: clip;">

      <!-- ═══════════════════════════════════════════════
           MODE SELECTOR
      ═══════════════════════════════════════════════ -->
      <div class="border-b border-gray-100 rounded-t-2xl bg-white">
        <div class="px-5 pt-4 pb-3">
          <p class="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">What do you want to calculate?</p>
          <div class="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-gray-100">
            <button @click="calcMode = 'calculate'"
              class="text-left px-3 py-2.5 rounded-xl transition-all"
              :class="calcMode === 'calculate' ? 'bg-white shadow border border-yellow-200' : 'hover:bg-gray-50'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'calculate' ? 'color:#1e3a5f;' : 'color:#6b7280;'">Calculate Debt Yield</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'calculate' ? 'text-amber-700' : 'text-gray-400'">NOI + Loan → Debt Yield</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'calculate' ? 'bg-amber-100 text-amber-800' : 'bg-gray-200 text-gray-400'">Standard</span>
            </button>
            <button @click="calcMode = 'find-noi'"
              class="text-left px-3 py-2.5 rounded-xl transition-all"
              :class="calcMode === 'find-noi' ? 'bg-white shadow border border-blue-200' : 'hover:bg-gray-50'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-noi' ? 'color:#1e3a5f;' : 'color:#6b7280;'">Find Required NOI</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-noi' ? 'text-blue-700' : 'text-gray-400'">Target + Loan → NOI</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-noi' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
            <button @click="calcMode = 'find-loan'"
              class="text-left px-3 py-2.5 rounded-xl transition-all"
              :class="calcMode === 'find-loan' ? 'bg-white shadow border border-emerald-200' : 'hover:bg-gray-50'">
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

      <!-- ═══════════════════════════════════════════════
           TWO-COLUMN BODY
      ═══════════════════════════════════════════════ -->
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch">

        <!-- ── LEFT: INPUTS ── -->
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
                  <p class="text-xs text-gray-400 mt-1">Minimum debt yield required. Max loan = NOI / Target Debt Yield.</p>
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

        <!-- ── RIGHT: RESULTS ── -->
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
                  <p class="text-xs text-gray-400 mt-0.5">Maximum loan where debt yield &ge; {{ effectiveTargetDY }}%.</p>
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
              <p class="text-gray-400 text-xs mt-1">Debt Yield = NOI &divide; Loan Amount</p>
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
                  <p class="text-xs text-blue-800 font-medium">Formula: Required NOI = Loan &times; Target Debt Yield &divide; 100</p>
                </div>
              </div>
            </div>
            <div v-else class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style="background: #f0f4f8;">
                <svg class="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
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
                  <p class="text-xs text-emerald-800 font-medium">Formula: Max Loan = NOI &divide; (Target Debt Yield &divide; 100)</p>
                </div>
              </div>
            </div>
            <div v-else class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style="background: #f0f4f8;">
                <svg class="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <p class="text-gray-500 font-medium text-sm">Enter NOI and target debt yield.</p>
            </div>
          </template>

          <!-- ═══════════════════════════════════════════════
               ACTION BUTTONS (all modes)
          ═══════════════════════════════════════════════ -->
          <div v-if="hasResult || revNOI !== null || revLoan !== null" class="p-4 border-t border-gray-100 space-y-2">
            <!-- 1. PRIMARY: Save -->
            <button @click="openSaveScenario"
              class="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
              style="background: #f59e0b; color: #1e3a5f;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
              </svg>
              Save Scenario
            </button>
            <!-- 2. SECONDARY: Share + PDF -->
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
            <!-- 3. TERTIARY: Email -->
            <button @click="showEmailModal = true"
              class="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs text-gray-500 hover:text-gray-700 border border-dashed border-gray-200 hover:border-gray-300 transition">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email me this analysis
            </button>
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

      <!-- ═══════════════════════════════════════════════
           SAVED SCENARIOS
      ═══════════════════════════════════════════════ -->
      <div id="saved-scenarios" class="max-w-6xl mx-auto px-4 pb-6 mt-4">
        <ScenarioPanel
          calculator="debt-yield"
          :has-result="hasResult || revNOI !== null || revLoan !== null"
          :result="currentScenarioResult"
          :trigger-save="triggerScenarioSave"
          @saved="onScenarioSaved"
        />
      </div>

      <!-- ═══════════════════════════════════════════════
           SEO CONTENT
      ═══════════════════════════════════════════════ -->
      <div class="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

      <!-- INTRO TEXT -->
      <div class="border-b border-gray-100 px-8 py-8">
        <div class="space-y-3">
          <p class="text-gray-700 text-base leading-relaxed">
            <strong>Debt yield</strong> is the single most important rate-independent lending metric in commercial real estate. It measures the ratio of a property's Net Operating Income (NOI) to the outstanding loan amount — telling lenders exactly how much annual income the property generates per dollar of loan exposure, without regard to interest rate, amortization, or property value.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            This free debt yield calculator covers all three use cases CRE professionals need: <strong>calculate debt yield</strong> from NOI and loan amount, <strong>find required NOI</strong> given a loan and target threshold, and <strong>determine the maximum supportable loan</strong> at a given debt yield floor. Real-time results, sensitivity analysis, and lender threshold comparison — no signup required.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            Unlike DSCR (which depends on interest rate and amortization) or cap rate (which depends on property value), debt yield is intentionally simple: NOI divided by loan amount. This makes it the most manipulation-resistant metric in a lender's toolkit — it cannot be improved by extending loan terms, lowering rates, or inflating appraisals. That's why CMBS lenders write minimum debt yield thresholds directly into loan documents.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            Below you'll find the complete debt yield formula with worked examples, interpretation guides by lender type and property class, sensitivity tables, strategy notes for borrowers, and an 8-question FAQ answering the most common commercial lending questions.
          </p>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           OVERVIEW
      ═══════════════════════════════════════════════ -->
      <div id="overview" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">Overview</h2>
        <p class="text-gray-600 leading-relaxed mb-3">
          The <strong>debt yield calculator</strong> is designed for commercial real estate borrowers, brokers, and lenders who need a fast, reliable way to evaluate loan risk relative to property income. It computes debt yield from your NOI and loan amount — or works in reverse to find required NOI or maximum supportable loan.
        </p>
        <p class="text-gray-600 leading-relaxed mb-3">
          Debt yield is a <strong>rate-independent metric</strong>: it measures a property's income coverage per dollar of loan exposure, regardless of what interest rate was used to structure the financing. This makes it the lender's stress-test metric of choice — if the borrower defaults, debt yield tells the lender what yield they'd earn on the outstanding balance by taking the property and collecting rents.
        </p>
        <p class="text-gray-600 leading-relaxed">
          This calculator supports three calculation modes: <strong>Calculate Debt Yield</strong> (standard: NOI &divide; Loan), <strong>Find Required NOI</strong> (reverse: what NOI is needed to meet a target threshold), and <strong>Find Max Loan</strong> (reverse: what's the most a lender should extend at a given debt yield floor). Optional cross-check fields for property value show LTV and cap rate alongside the primary result — without affecting the debt yield calculation.
        </p>
      </div>

      <!-- ═══════════════════════════════════════════════
           HOW TO USE
      ═══════════════════════════════════════════════ -->
      <div id="how-to-use" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-1" style="color: #1e3a5f;">How to Use This Debt Yield Calculator</h2>
        <p class="text-gray-500 text-sm mb-6">Follow these steps to evaluate any commercial real estate loan in under 2 minutes</p>
        <div class="grid md:grid-cols-2 gap-10">
          <ol class="space-y-5">
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">1</div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Choose a calculation mode</p>
                <p class="text-gray-500 text-sm mt-1">Use <strong>Calculate Debt Yield</strong> when you have NOI and loan amount. Use <strong>Find Required NOI</strong> to determine the minimum income needed for a specific loan. Use <strong>Find Max Loan</strong> to see the largest loan your NOI can support at a target threshold.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">2</div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Enter your annual NOI</p>
                <p class="text-gray-500 text-sm mt-1">Net Operating Income = Gross rental income minus all operating expenses, before debt service. Use actual trailing 12-month data, not proforma projections. Do <strong>not</strong> include mortgage payments — they are not operating expenses.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">3</div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Enter the loan amount</p>
                <p class="text-gray-500 text-sm mt-1">The outstanding first mortgage principal. Debt yield measures NOI relative to loan — property value is intentionally excluded. Enter property value only as an optional cross-check.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">4</div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Set a target debt yield (optional)</p>
                <p class="text-gray-500 text-sm mt-1">The lender's minimum threshold — typically 8–10% for CMBS and institutional lenders. If not entered, defaults to 10%. Used to compute max supportable loan and gap analysis.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">5</div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Read your result</p>
                <p class="text-gray-500 text-sm mt-1">Compare to lender thresholds by type. Use the sensitivity table to see how loan amount changes affect debt yield. Review the deal context narrative for actionable guidance.</p>
              </div>
            </li>
          </ol>
          <div class="space-y-5">
            <div class="p-5 rounded-xl border border-amber-200" style="background: #fffbeb;">
              <h3 class="font-bold text-sm mb-3" style="color: #92400e;">Pro Tips for Accurate Results</h3>
              <ul class="space-y-2 text-sm text-amber-800">
                <li class="flex gap-2"><span class="font-bold flex-shrink-0">&rarr;</span> Use stabilized NOI, not in-place NOI from a partially leased property. Lenders underwrite to stabilized figures.</li>
                <li class="flex gap-2"><span class="font-bold flex-shrink-0">&rarr;</span> Exclude capital expenditures from NOI. CapEx is not an operating expense — lenders separate it in underwriting.</li>
                <li class="flex gap-2"><span class="font-bold flex-shrink-0">&rarr;</span> For CMBS loans, check the specific minimum debt yield written into the loan documents — it may differ from the 10% default.</li>
                <li class="flex gap-2"><span class="font-bold flex-shrink-0">&rarr;</span> Use the sensitivity table to stress-test: what happens to debt yield if NOI drops 10%? If the loan is $500k larger?</li>
              </ul>
            </div>
            <div class="p-5 rounded-xl border border-gray-200 bg-gray-50">
              <h3 class="font-bold text-sm mb-3" style="color: #1e3a5f;">Understanding Your Result</h3>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex gap-2"><span class="w-3 h-3 rounded-full bg-green-500 flex-shrink-0 mt-0.5"></span> <strong>&ge; 12%:</strong> Strong — well above typical lender minimums.</li>
                <li class="flex gap-2"><span class="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0 mt-0.5"></span> <strong>10–12%:</strong> Meets Threshold — acceptable for most conventional CRE lenders.</li>
                <li class="flex gap-2"><span class="w-3 h-3 rounded-full bg-amber-500 flex-shrink-0 mt-0.5"></span> <strong>9–10%:</strong> Approaching — close to the floor, may need improvement.</li>
                <li class="flex gap-2"><span class="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0 mt-0.5"></span> <strong>7–9%:</strong> Below Threshold — renegotiate terms or increase NOI.</li>
                <li class="flex gap-2"><span class="w-3 h-3 rounded-full bg-red-500 flex-shrink-0 mt-0.5"></span> <strong>&lt; 7%:</strong> Distressed — significant lender risk. Major restructuring needed.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           INPUTS & OUTPUTS
      ═══════════════════════════════════════════════ -->
      <div id="inputs-outputs" class="border-b border-gray-100">
        <div class="px-8 py-6 border-b border-gray-100">
          <h2 class="text-xl font-extrabold" style="color: #1e3a5f;">Inputs &amp; Outputs Reference</h2>
          <p class="text-gray-500 text-sm mt-1">Every field in the calculator and what it means</p>
        </div>
        <div class="px-8 py-8">
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead>
                <tr class="border-b-2 border-gray-200">
                  <th class="text-left py-3 pr-4 font-bold text-gray-700">Field</th>
                  <th class="text-left py-3 px-2 font-bold text-gray-700">Type</th>
                  <th class="text-left py-3 pl-2 font-bold text-gray-700">Description</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr><td class="py-3 pr-4 font-medium text-gray-800">NOI</td><td class="py-3 px-2 text-gray-500">Input ($)</td><td class="py-3 pl-2 text-gray-600">Annual Net Operating Income — gross income minus operating expenses, before debt service.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Loan Amount</td><td class="py-3 px-2 text-gray-500">Input ($)</td><td class="py-3 pl-2 text-gray-600">Outstanding first mortgage principal balance.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Target Debt Yield</td><td class="py-3 px-2 text-gray-500">Input (%)</td><td class="py-3 pl-2 text-gray-600">Lender's minimum threshold. Common range: 8–10%. Default: 10%.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Property Value</td><td class="py-3 px-2 text-gray-500">Optional ($)</td><td class="py-3 pl-2 text-gray-600">Used only for LTV and cap rate cross-checks. Does NOT affect debt yield.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Property Type</td><td class="py-3 px-2 text-gray-500">Optional</td><td class="py-3 pl-2 text-gray-600">Affects context notes only. Does not change the debt yield formula.</td></tr>
                <tr class="bg-amber-50"><td class="py-3 pr-4 font-bold text-amber-900">Debt Yield</td><td class="py-3 px-2 text-amber-700">Output (%)</td><td class="py-3 pl-2 text-amber-800">NOI &divide; Loan Amount &times; 100. The primary metric.</td></tr>
                <tr class="bg-amber-50"><td class="py-3 pr-4 font-bold text-amber-900">Max Loan at Target</td><td class="py-3 px-2 text-amber-700">Output ($)</td><td class="py-3 pl-2 text-amber-800">NOI &divide; (Target DY / 100). Maximum supportable loan at target threshold.</td></tr>
                <tr class="bg-amber-50"><td class="py-3 pr-4 font-bold text-amber-900">Loan Gap</td><td class="py-3 px-2 text-amber-700">Output ($)</td><td class="py-3 pl-2 text-amber-800">Current Loan minus Max Loan at Target. Positive = overleveraged.</td></tr>
                <tr class="bg-amber-50"><td class="py-3 pr-4 font-bold text-amber-900">LTV (cross-check)</td><td class="py-3 px-2 text-amber-700">Output (%)</td><td class="py-3 pl-2 text-amber-800">Loan &divide; Property Value. Shown only when property value is entered.</td></tr>
                <tr class="bg-amber-50"><td class="py-3 pr-4 font-bold text-amber-900">Cap Rate (cross-check)</td><td class="py-3 px-2 text-amber-700">Output (%)</td><td class="py-3 pl-2 text-amber-800">NOI &divide; Property Value. Shown only when property value is entered.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           FORMULA
      ═══════════════════════════════════════════════ -->
      <div id="formula" class="border-b border-gray-100">
        <div class="px-8 py-6 border-b border-gray-100">
          <h2 class="text-xl font-extrabold" style="color: #1e3a5f;">Debt Yield Formula &amp; Calculation Method</h2>
          <p class="text-gray-500 text-sm mt-1">The exact math this calculator uses — plus a real multifamily example</p>
        </div>
        <div class="px-8 py-8">
          <div class="grid md:grid-cols-2 gap-10">

            <div>
              <h3 class="font-bold text-gray-800 mb-4">Step-by-step calculation</h3>
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">1</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Determine Annual NOI</p>
                    <p class="text-xs text-gray-500 mt-0.5">Gross rental income minus all operating expenses (taxes, insurance, management, maintenance)</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">$180,000 gross - $30,000 expenses = $150,000 NOI</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">2</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Identify Loan Amount</p>
                    <p class="text-xs text-gray-500 mt-0.5">Outstanding first mortgage principal — not property value</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">Loan = $1,500,000</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-amber-200 bg-amber-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md flex-shrink-0 mt-0.5" style="background:#f59e0b;color:#1e3a5f;">3</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Divide NOI by Loan Amount</p>
                    <p class="text-xs text-gray-500 mt-0.5">NOI &divide; Loan &times; 100 = Debt Yield %</p>
                    <code class="text-xs font-bold" style="color:#1e3a5f;">$150,000 &divide; $1,500,000 &times; 100 = <strong>10.0% debt yield</strong></code>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="p-5 rounded-xl text-center border border-gray-200 bg-gray-50">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">The Formula</p>
                <div class="font-mono font-bold text-lg mb-2" style="color:#1e3a5f;">Debt Yield = NOI &divide; Loan &times; 100</div>
                <div class="mt-4 p-3 rounded-lg border border-gray-200 text-left font-mono text-xs bg-white" style="color: #374151; line-height: 1.7;">
                  <div>Net Operating Income</div>
                  <div>&divide; Loan Amount</div>
                  <div class="border-t border-gray-300 pt-1 font-extrabold" style="color:#1e3a5f;">= Debt Yield (%)</div>
                </div>
              </div>
              <div class="p-4 rounded-xl border border-blue-100 bg-blue-50">
                <p class="text-xs font-bold text-blue-800 mb-2">Reverse formulas (modes 2 &amp; 3)</p>
                <div class="space-y-1.5 text-xs text-blue-700">
                  <div class="font-mono">Required NOI = Loan &times; Target DY / 100</div>
                  <div class="font-mono">Max Loan = NOI &divide; (Target DY / 100)</div>
                </div>
              </div>
              <div class="p-4 rounded-xl border border-amber-100 bg-amber-50">
                <p class="text-xs font-bold text-amber-800 mb-1">Property value is excluded</p>
                <p class="text-xs text-amber-700 leading-relaxed">Debt yield intentionally ignores property value. This prevents appraisal inflation from masking inadequate income. For value-based metrics, use our <NuxtLink to="/cap-rate-calculator" class="underline">Cap Rate</NuxtLink> or <NuxtLink to="/ltv-calculator" class="underline">LTV</NuxtLink> calculators.</p>
              </div>
            </div>

          </div>

          <!-- Real-world example -->
          <div class="mt-8 p-6 rounded-2xl border-2 border-amber-200" style="background: #fffbeb;">
            <h3 class="font-bold text-gray-900 mb-1">Real-World Example: Houston, TX — 24-Unit Multifamily</h3>
            <p class="text-xs text-amber-700 mb-4">Based on typical 2026 Houston submarket data for a 2000s-built garden-style apartment</p>
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Income &amp; Loan</p>
                <div class="space-y-1.5 text-sm">
                  <div class="flex justify-between"><span class="text-gray-600">Gross annual rent</span><span class="font-semibold">$288,000</span></div>
                  <div class="flex justify-between text-red-600"><span>Vacancy + credit loss (7%)</span><span>-$20,160</span></div>
                  <div class="flex justify-between text-red-600"><span>Operating expenses</span><span>-$117,840</span></div>
                  <div class="flex justify-between font-extrabold text-green-700 border-t border-amber-200 pt-1.5 mt-1"><span>NOI</span><span>$150,000</span></div>
                  <div class="flex justify-between mt-3"><span class="text-gray-600">Loan amount</span><span class="font-semibold">$1,500,000</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Property value</span><span class="font-semibold">$2,200,000</span></div>
                </div>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Result</p>
                <div class="p-4 rounded-xl text-center mb-3" style="background: #1e3a5f;">
                  <p class="text-xs text-blue-300 mb-1">Loan: $1,500,000</p>
                  <p class="text-4xl font-extrabold text-white">10.0%</p>
                  <p class="text-xs text-blue-200 mt-1">Debt Yield — Meets Threshold</p>
                </div>
                <div class="space-y-1 text-xs text-gray-600">
                  <p>LTV (cross-check): 68.2%</p>
                  <p>Cap Rate (cross-check): 6.82%</p>
                  <p class="mt-2 font-medium">At 10% debt yield, this deal meets the common CMBS floor. Max loan at 10% target = $1,500,000. No loan gap. Proceed to DSCR analysis with your financing terms.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           WHAT IS DEBT YIELD
      ═══════════════════════════════════════════════ -->
      <div id="what-is-debt-yield" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What Is Debt Yield in Commercial Real Estate?</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          <strong>Debt yield</strong> is the ratio of a property's annual Net Operating Income (NOI) to the outstanding loan amount, expressed as a percentage. It answers a single, critical question: <em>if the lender had to take the property back today, what annual yield would they earn on their loan exposure from the property's income alone?</em> Because it excludes property value, interest rate, and amortization, debt yield is the most manipulation-resistant metric in commercial lending.
        </p>
        <div class="p-4 rounded-xl text-center font-bold text-lg mb-4" style="background: #f0f4f8; color: #1e3a5f;">
          Debt Yield = NOI &divide; Loan Amount &times; 100
        </div>
        <p class="text-gray-600 leading-relaxed">
          Debt yield emerged as a key underwriting metric after the 2008 financial crisis, when lenders realized that DSCR and LTV could be manipulated through aggressive rate assumptions and inflated appraisals. Debt yield strips away those variables: it depends only on the income the property actually generates relative to the loan outstanding. Today, most CMBS lenders, life insurance companies, and institutional capital sources require minimum debt yield thresholds — typically 8–10% — as a non-negotiable loan qualification criterion. The metric is most powerful when used alongside DSCR and LTV, not as a replacement.
        </p>
      </div>

      <!-- ═══════════════════════════════════════════════
           WHAT YOUR RESULT MEANS
      ═══════════════════════════════════════════════ -->
      <div id="result-meaning" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">What Your Debt Yield Result Means</h2>
        <p class="text-gray-600 leading-relaxed mb-5">
          Your debt yield measures how much annual NOI the property generates per dollar of loan exposure. Here is how lenders interpret each range:
        </p>
        <div class="space-y-3 mb-5">
          <div class="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
            <span class="w-3 h-3 rounded-full bg-green-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-green-900">&ge; 12% — Strong</p>
              <p class="text-sm text-green-800">Well above typical lender minimums. Strong income-to-loan ratio. The property generates significant cash flow relative to the outstanding debt. Favorable position for financing — multiple lender options likely available. Typical for stabilized, well-located multifamily and industrial assets with strong occupancy.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200">
            <span class="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-blue-900">10–12% — Meets Threshold</p>
              <p class="text-sm text-blue-800">Acceptable for most conventional CRE lenders including CMBS and life companies. Meets the widely cited 10% minimum floor. Loan likely proceeds to full underwriting. The property provides adequate income cushion above the loan amount to satisfy standard lending criteria.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <span class="w-3 h-3 rounded-full bg-amber-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-amber-900">9–10% — Approaching Threshold</p>
              <p class="text-sm text-amber-800">Close to the 10% floor but not quite there. Some lenders may accept this range, especially for prime locations or strong borrower profiles. However, expect additional scrutiny, potential loan size reduction, or reserve requirements. Consider increasing NOI or reducing the loan request.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-200">
            <span class="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-orange-900">7–9% — Below Threshold</p>
              <p class="text-sm text-orange-800">Below common lender minimums of 8–10%. Most CMBS and institutional lenders will not proceed at this level. Borrower should renegotiate loan terms, increase NOI through operational improvements, or bring additional equity. Bridge or portfolio lenders may still consider with compensating factors.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-red-50 border border-red-200">
            <span class="w-3 h-3 rounded-full bg-red-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-red-900">&lt; 7% — Distressed</p>
              <p class="text-sm text-red-800">Significant lender risk signal. The property's income is insufficient relative to the loan exposure. This level often indicates overleveraging, below-market NOI, or both. Major restructuring — loan reduction, capital injection, or operational turnaround — is typically required before conventional financing is available.</p>
            </div>
          </div>
        </div>
        <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
          <p class="text-xs text-gray-500">These thresholds are widely cited industry ranges, not absolute rules. Every lender sets their own criteria. A debt yield that meets a threshold does not guarantee loan approval — lenders also evaluate DSCR, LTV, borrower credit, property condition, and market conditions.</p>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           BENCHMARKS
      ═══════════════════════════════════════════════ -->
      <div id="benchmarks" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Debt Yield Benchmarks by Lender Type &amp; Property Class</h2>

        <p class="text-gray-600 text-sm leading-relaxed mb-6">Debt yield thresholds vary by lender type, property class, and market cycle. These are common 2026 ranges based on industry data — not guarantees or commitments.</p>

        <!-- By Lender Type -->
        <h3 class="font-bold text-gray-800 mb-3">By Lender Type</h3>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="border-b-2 border-gray-200">
                <th class="text-left py-3 pr-4 font-bold text-gray-700">Lender Type</th>
                <th class="text-center py-3 px-2 font-bold text-gray-700">Typical Min. DY</th>
                <th class="text-left py-3 pl-2 font-bold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr><td class="py-3 pr-4 font-medium text-gray-800">CMBS / Conduit</td><td class="py-3 px-2 text-center font-semibold text-gray-700">8–10%</td><td class="py-3 pl-2 text-gray-500 text-xs">Floor written into loan docs. Market-cycle dependent. Post-2020 trends favor 9–10% for new originations.</td></tr>
              <tr><td class="py-3 pr-4 font-medium text-gray-800">Life Insurance Companies</td><td class="py-3 px-2 text-center font-semibold text-gray-700">8–10%</td><td class="py-3 pl-2 text-gray-500 text-xs">Conservative underwriting, lower leverage. Prefer stabilized, well-located assets.</td></tr>
              <tr><td class="py-3 pr-4 font-medium text-gray-800">Bank / Portfolio</td><td class="py-3 px-2 text-center font-semibold text-gray-700">7–9%</td><td class="py-3 pl-2 text-gray-500 text-xs">More flexible, varies by relationship and market. Balance sheet lending allows for exceptions.</td></tr>
              <tr><td class="py-3 pr-4 font-medium text-gray-800">Agency (Fannie/Freddie)</td><td class="py-3 px-2 text-center font-semibold text-gray-700">Varies</td><td class="py-3 pl-2 text-gray-500 text-xs">Multifamily focused. DSCR more heavily weighted than debt yield in underwriting.</td></tr>
              <tr><td class="py-3 pr-4 font-medium text-gray-800">Bridge / Hard Money</td><td class="py-3 px-2 text-center font-semibold text-gray-700">Varies widely</td><td class="py-3 pl-2 text-gray-500 text-xs">May not use debt yield. Asset-value based underwriting common. Short-term focus.</td></tr>
            </tbody>
          </table>
        </div>

        <!-- By Property Type -->
        <h3 class="font-bold text-gray-800 mb-3">By Property Type</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-1">Multifamily</p>
            <p class="text-xs text-gray-500 mb-1">Typical range: 8–10%</p>
            <p class="text-sm text-gray-600">Most liquid asset class. Lenders often accept 8–9% minimums for stabilized properties. Agency lending widely available.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-1">Office</p>
            <p class="text-xs text-gray-500 mb-1">Typical range: 10–12%+</p>
            <p class="text-sm text-gray-600">Higher risk post-COVID. Lenders typically require 10%+ for office collateral. Vacancy and lease roll risk elevated.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-1">Retail</p>
            <p class="text-xs text-gray-500 mb-1">Typical range: 9–11%</p>
            <p class="text-sm text-gray-600">Tenant quality and lease term critical. Single-tenant NNN may get favorable treatment. Inline retail requires higher debt yield.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-1">Industrial</p>
            <p class="text-xs text-gray-500 mb-1">Typical range: 8–10%</p>
            <p class="text-sm text-gray-600">Strong demand, long leases. Lenders may accept 8–9% for institutional-quality industrial assets. Fastest-growing CRE sector.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-1">Hospitality</p>
            <p class="text-xs text-gray-500 mb-1">Typical range: 11–13%+</p>
            <p class="text-sm text-gray-600">Highly cyclical. Revenue-per-available-room (RevPAR) matters. Lenders typically require 11–13%+ for hotel collateral.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-1">Mixed-use</p>
            <p class="text-xs text-gray-500 mb-1">Typical range: Varies by blend</p>
            <p class="text-sm text-gray-600">Analyzed as a blend. Retail portion typically stressed more aggressively than residential. Consult lender underwriting guidelines.</p>
          </div>
        </div>
        <p class="text-xs text-gray-400">All thresholds are indicative and vary by lender, market, and cycle. Debt yield does not guarantee loan approval or lender acceptance.</p>
      </div>

      <!-- ═══════════════════════════════════════════════
           STRATEGY
      ═══════════════════════════════════════════════ -->
      <div id="strategy" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Debt Yield Strategy for Borrowers</h2>
        <div class="grid sm:grid-cols-2 gap-5 mb-6">

          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Increase NOI Before Applying</p>
            <p class="text-sm text-gray-600">The most direct way to improve debt yield is to increase NOI. Raise rents to market, reduce vacancy through better management, and trim unnecessary operating expenses. Every dollar of additional NOI increases debt yield without changing the loan.</p>
          </div>

          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Right-Size the Loan Request</p>
            <p class="text-sm text-gray-600">If your current loan amount produces a debt yield below the lender's threshold, use the Max Loan at Target feature to find the largest loan the NOI supports. Bring the delta as additional equity rather than fighting an unwinnable underwriting battle.</p>
          </div>

          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Pair with DSCR Analysis</p>
            <p class="text-sm text-gray-600">Debt yield and DSCR measure different risks. A deal can have strong debt yield (high NOI per loan dollar) but weak DSCR (high interest rate eats the cash flow). Always check both metrics before approaching a lender. Use our <NuxtLink to="/dscr-calculator" class="underline font-medium">DSCR Calculator</NuxtLink> alongside this tool.</p>
          </div>

          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Use Sensitivity for Stress Testing</p>
            <p class="text-sm text-gray-600">The sensitivity table shows how debt yield changes at +-30% loan variations. Use this to present lenders with a range analysis — it demonstrates sophisticated borrower underwriting and builds credibility in the loan application process.</p>
          </div>

        </div>

        <div class="p-5 rounded-xl border-2 border-amber-200" style="background: #fffbeb;">
          <h3 class="font-bold text-sm mb-2" style="color: #92400e;">Bid Pricing with Debt Yield</h3>
          <p class="text-sm text-gray-700">When structuring an acquisition bid, work backwards from your lender's debt yield floor: <code class="text-xs bg-amber-100 px-1.5 py-0.5 rounded font-mono">Max Loan = NOI &divide; Min Debt Yield</code>. If you need $1.5M in financing and the lender requires 10% debt yield, the property must generate at least $150,000 NOI. If actual NOI is $130,000, you either need to close the $20,000 gap through operational improvements or bring $200,000 more equity to reduce the loan to $1.3M.</p>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           APPLICATIONS
      ═══════════════════════════════════════════════ -->
      <div id="applications" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Applications of Debt Yield Analysis</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Loan Qualification</p>
            <p class="text-sm text-gray-600">Screen whether your deal meets minimum lender thresholds before spending time and money on a full application. If debt yield is below 8%, most CMBS lenders won't proceed.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Loan Sizing</p>
            <p class="text-sm text-gray-600">Use Find Max Loan mode to determine the largest loan your NOI supports at a specific debt yield floor. This gives you a ceiling for loan negotiations before approaching lenders.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">CMBS Monitoring</p>
            <p class="text-sm text-gray-600">CMBS loans often have minimum debt yield covenants. Track your property's debt yield over time to avoid tripping provisions that could trigger cash management or other lender protections.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Refinance Readiness</p>
            <p class="text-sm text-gray-600">Before approaching a lender for refinance, calculate debt yield at the proposed new loan amount. If NOI has grown and the loan stays the same, debt yield improves — strengthening your negotiating position.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Lender Comparison</p>
            <p class="text-sm text-gray-600">Different lenders have different debt yield floors. Use your calculated debt yield to quickly identify which lender categories your deal qualifies for — CMBS, life company, bank, or bridge.</p>
          </div>
          <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Portfolio Stress Testing</p>
            <p class="text-sm text-gray-600">Run debt yield on each property in your portfolio with a 10–20% NOI haircut to simulate a downturn. Properties that drop below 7% under stress are your highest-risk positions and should be monitored closely.</p>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           INDUSTRY STANDARDS
      ═══════════════════════════════════════════════ -->
      <div id="industry-standards" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Industry Standards &amp; Regulatory Context</h2>
        <div class="grid md:grid-cols-3 gap-6">

          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">C</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">CMBS Market Standards</h3>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> Minimum debt yield of <strong>8–10%</strong> is standard for new CMBS originations as of 2026.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> Debt yield floors are <strong>written into loan documents</strong> — falling below triggers cash management provisions.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> Post-GFC, debt yield replaced LTV and DSCR as the primary sizing constraint for many conduit loans.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> Mezzanine debt can only be layered if <strong>combined</strong> debt yield (senior + mezz) still meets the floor.</li>
            </ul>
          </div>

          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">R</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">Regulatory Guidance</h3>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed mb-3">
              Federal banking regulators (OCC, FDIC, Federal Reserve) issue interagency guidance on CRE lending concentration risks. While they don't mandate specific debt yield thresholds, they require banks to demonstrate sound underwriting practices.
            </p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> Banks with CRE concentrations exceeding <strong>300% of tier 1 capital</strong> face enhanced regulatory scrutiny.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> Regulators expect lenders to use multiple metrics — debt yield alongside DSCR, LTV, and borrower analysis.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> Debt yield has become a de facto stress-test metric in examiner reviews of CRE loan portfolios.</li>
            </ul>
          </div>

          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style="background:#1e3a5f;">
                <span class="text-xs font-extrabold text-white">$</span>
              </div>
              <h3 class="font-bold text-gray-800 text-sm">Debt Yield vs Other Sizing Metrics</h3>
            </div>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> <strong>DSCR</strong> depends on interest rate and amortization — can be gamed by extending terms or lowering rates. Debt yield cannot.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> <strong>LTV</strong> depends on property appraisal — can be inflated by aggressive comps or unrealistic assumptions. Debt yield ignores value entirely.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> <strong>Cap Rate</strong> measures return on property value — relevant for investors, not for loan risk. Debt yield measures return on loan exposure.</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> Loans are typically sized to the <strong>most restrictive</strong> of all three constraints: debt yield, DSCR, and LTV.</li>
            </ul>
          </div>

        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           LIMITATIONS
      ═══════════════════════════════════════════════ -->
      <div id="limitations" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Limitations of Debt Yield</h2>
        <div class="grid sm:grid-cols-2 gap-5">
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Does Not Include Interest Rate</p>
            <p class="text-sm text-gray-600">A deal could show strong debt yield (high NOI per loan dollar) but still be cash-flow negative if the interest rate is very high. Debt yield tells you nothing about actual debt service coverage. Always check DSCR alongside debt yield.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Not a Standalone Loan Approval Metric</p>
            <p class="text-sm text-gray-600">Lenders evaluate debt yield alongside DSCR, LTV, borrower credit, reserves, property condition, and market data. Passing debt yield alone does not mean approval. It is a necessary but not sufficient condition.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">NOI Quality Matters</p>
            <p class="text-sm text-gray-600">Lenders typically underwrite to stabilized NOI, not in-place NOI from a partially leased property. Inflated rent assumptions or understated expenses will produce misleadingly high debt yield. Use actual trailing 12-month data.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Thresholds Are Not Universal</p>
            <p class="text-sm text-gray-600">The 10% threshold is widely cited but not a legal requirement or industry standard. Each lender sets their own floor based on their risk appetite, portfolio composition, and market conditions. CMBS minimums are contractual, not regulatory.</p>
          </div>
        </div>

        <div id="when-not-to-use" class="mt-6">
          <h3 class="font-bold text-gray-800 mb-3">When Debt Yield Is Less Useful</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Transitional/value-add deals:</strong> NOI is below stabilized levels. Debt yield on current NOI understates the property's potential. Lenders use projected stabilized NOI instead.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Construction loans:</strong> No operating income exists yet. Debt yield is not applicable until the property is built and leased.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Owner-occupied properties:</strong> Market rent must be imputed. Debt yield on imputed rents is less reliable than on actual lease income.</li>
            <li class="flex gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5"></span><strong>Single-tenant net lease:</strong> Debt yield is meaningful but tenant credit quality and lease term matter more than the ratio alone.</li>
          </ul>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           COMMON MISTAKES
      ═══════════════════════════════════════════════ -->
      <div id="common-mistakes" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Common Mistakes When Calculating Debt Yield</h2>
        <div class="space-y-3">
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">1</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Confusing debt yield with DSCR</p>
              <p class="text-sm text-gray-600 mt-0.5">DSCR divides NOI by <strong>debt service</strong> (annual payments). Debt yield divides NOI by <strong>loan balance</strong>. They are fundamentally different metrics that measure different risks. A property can have 10% debt yield but a DSCR below 1.0x if the interest rate is high enough.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">2</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Including property value in the calculation</p>
              <p class="text-sm text-gray-600 mt-0.5">Debt yield is NOI &divide; <strong>Loan</strong>, not NOI &divide; Value. Using property value gives you cap rate, not debt yield. This calculator clearly separates the two — property value is used only as an optional cross-check and does not affect the debt yield result.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">3</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Using gross income instead of NOI</p>
              <p class="text-sm text-gray-600 mt-0.5">Debt yield must use Net Operating Income — after deducting vacancy, taxes, insurance, management, and maintenance. Using gross rent will significantly overstate debt yield and produce false confidence in the loan's risk profile.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">4</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Treating debt yield as a loan approval guarantee</p>
              <p class="text-sm text-gray-600 mt-0.5">Meeting a debt yield threshold is necessary but <strong>not sufficient</strong> for loan approval. Lenders also evaluate borrower credit, reserves, property condition, market trends, and other factors. Never assume that achieving 10% debt yield means the loan is approved.</p>
            </div>
          </div>
          <div class="flex gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/50">
            <span class="text-amber-500 font-extrabold text-lg flex-shrink-0">5</span>
            <div>
              <p class="font-bold text-sm text-gray-800">Using proforma NOI instead of actual</p>
              <p class="text-sm text-gray-600 mt-0.5">Proforma projections are forward-looking estimates, not audited results. Lenders underwrite to trailing 12-month actual NOI (T-12) or stabilized NOI based on market rents and verified occupancy. Using proforma inflates debt yield and misrepresents loan risk.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══════════════════════════════════════════════
           FAQ
      ═══════════════════════════════════════════════ -->
      <div id="faq" class="px-8 py-8">
        <h2 class="text-2xl font-extrabold mb-8 text-center" style="color: #1e3a5f;">
          Frequently Asked Questions
        </h2>
        <div class="space-y-4 max-w-3xl mx-auto">
          <div v-for="(faq, i) in faqs" :key="i"
            class="border border-gray-100 rounded-xl overflow-hidden">
            <button
              @click="toggleFaq(i)"
              :aria-expanded="openFaq === i"
              :aria-controls="`faq-answer-${i}`"
              class="w-full text-left px-6 py-4 flex items-center justify-between font-semibold text-gray-800 hover:bg-gray-50 transition">
              <span>{{ faq.q }}</span>
              <svg class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform"
                :class="openFaq === i ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div :id="`faq-answer-${i}`" v-if="openFaq === i" class="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>

      </div><!-- /editorial wrapper -->

      <!-- Related Calculators CTA -->
      <div id="related-calculators" class="mt-6 rounded-2xl p-8 text-center text-white"
        style="background: #1e3a5f;">
        <h2 class="text-2xl font-extrabold mb-2">Ready to Dig Deeper?</h2>
        <p class="text-blue-200 mb-6">Debt yield is one piece of commercial underwriting. Validate the full deal with these tools.</p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink v-for="calc in relatedCalcs" :key="calc.href"
            :to="calc.href"
            class="px-5 py-2.5 rounded-xl font-semibold text-sm border border-white/20 bg-white/10 hover:bg-white/20 transition">
            {{ calc.label }}
          </NuxtLink>
        </div>
      </div>

    </main>

    <!-- Email Capture Modal -->
    <EmailCaptureModal
      :show="showEmailModal"
      :calculator-name="'Debt Yield Calculator'"
      :primary-result="hasResult ? debtYieldFormatted + ' Debt Yield' : undefined"
      title="Save Your Debt Yield Analysis"
      subtitle="Get market benchmarks, deal templates, and calculator updates."
      cta-label="Save & Get Free Updates"
      @close="showEmailModal = false"
      @captured="onEmailCaptured"
    />

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
import { ref, reactive, computed, nextTick, onMounted } from 'vue'

// ─── SEO ──────────────────────────────────────────────────────────────────────
useHead({
  title: 'Debt Yield Calculator — Commercial Real Estate Loan Risk Tool (2026) | RealCalc',
  meta: [
    { name: 'description', content: 'Calculate debt yield (NOI ÷ Loan Amount) for commercial real estate. See lender thresholds, max supportable loan, sensitivity analysis, and property type benchmarks. Free tool for US CRE investors — no signup required.' },
    { property: 'og:title', content: 'Debt Yield Calculator — Commercial Real Estate Loan Risk Tool (2026) | RealCalc' },
    { property: 'og:description', content: 'Calculate debt yield, find required NOI, and determine max loan. Lender thresholds, sensitivity analysis, and property type benchmarks. Free tool for US commercial real estate investors.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://arvcalc.com/debt-yield-calculator' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Debt Yield Calculator — CRE Loan Risk Tool' },
    { name: 'twitter:description', content: 'Calculate debt yield ratio instantly. NOI ÷ Loan Amount. Free tool for CRE investors.' },
    { name: 'keywords', content: 'debt yield calculator, commercial real estate debt yield, NOI to loan ratio, CMBS debt yield, CRE loan risk, debt yield vs DSCR, max loan calculator, commercial lending metrics' },
  ],
  link: [
    { rel: 'canonical', href: 'https://arvcalc.com/debt-yield-calculator' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Debt Yield Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description: 'Calculate debt yield (NOI ÷ Loan Amount) for commercial real estate. Includes reverse modes for finding required NOI or max supportable loan, with lender thresholds and sensitivity analysis.',
        url: 'https://arvcalc.com/debt-yield-calculator',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        featureList: 'Debt yield calculation, required NOI finder, max loan finder, lender threshold comparison, sensitivity analysis, LTV cross-check, cap rate cross-check, PDF export, scenario comparison'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Calculator',
        name: 'Debt Yield Calculator',
        description: 'Calculate debt yield (NOI ÷ Loan Amount) for commercial real estate investment properties. Find required NOI or max supportable loan at target debt yield threshold.',
        url: 'https://arvcalc.com/debt-yield-calculator',
        provider: {
          '@type': 'Organization',
          name: 'RealCalc',
          url: 'https://arvcalc.com'
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
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
            acceptedAnswer: { '@type': 'Answer', text: 'Most CMBS and institutional lenders require a minimum debt yield of 8–10%. A debt yield of 10% or above is generally acceptable for conventional CRE lending. Above 12% is strong. Below 8% is concerning for most lenders.' }
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
          },
          {
            '@type': 'Question',
            name: 'What is debt yield used for in CMBS loans?',
            acceptedAnswer: { '@type': 'Answer', text: 'In CMBS loans, minimum debt yield is often written into loan documents. It affects collateral release, loan extension, and mezzanine financing ability. Falling below the written minimum may trigger cash management provisions.' }
          },
          {
            '@type': 'Question',
            name: 'Can I use debt yield for residential rental properties?',
            acceptedAnswer: { '@type': 'Answer', text: 'Debt yield is primarily a commercial lending metric. For 1-4 unit residential properties financed with conventional mortgages, lenders focus on DSCR and LTV rather than debt yield. For 5+ unit multifamily with commercial financing, debt yield becomes relevant.' }
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arvcalc.com' },
          { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://arvcalc.com/calculators' },
          { '@type': 'ListItem', position: 3, name: 'Debt Yield Calculator', item: 'https://arvcalc.com/debt-yield-calculator' }
        ]
      })
    }
  ]
})

// ─── REACTIVE STATE ──────────────────────────────────────────────────────────
const isNavExpanded = ref(false)
const shareSuccess = ref(false)
const showEmailModal = ref(false)
const openFaq = ref(null)
const calcMode = ref('calculate')

const form = reactive({
  noi: null,
  loanAmount: null,
  targetDebtYield: null,
  propertyValue: null,
  propertyType: 'multifamily',
  scenarioName: ''
})

const revNOIForm = reactive({
  loanAmount: null,
  targetDebtYield: null,
  scenarioName: ''
})

const revLoanForm = reactive({
  noi: null,
  targetDebtYield: null,
  scenarioName: ''
})

// ─── FAQ DATA ────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'What is debt yield in real estate?', a: 'Debt yield is the ratio of a property\'s Net Operating Income (NOI) to the outstanding loan amount, expressed as a percentage. Formula: Debt Yield = NOI ÷ Loan Amount. It is used by commercial real estate lenders to measure the income-to-loan ratio independent of property value, interest rate, or amortization. A higher debt yield indicates lower lender risk.' },
  { q: 'What is a good debt yield?', a: 'Most commercial lenders, especially CMBS and life insurance companies, target a minimum of 8–10% debt yield. A debt yield of 10% or above is generally considered acceptable for conventional CRE lending. Above 12% is strong. Below 8% is concerning for most lenders. Exact thresholds vary by lender type, property type, and market cycle.' },
  { q: 'How is debt yield different from DSCR?', a: 'DSCR (Debt Service Coverage Ratio) measures NOI relative to actual debt payments — it depends on interest rate and amortization. Debt yield measures NOI relative to the loan balance — it is rate-independent. Lenders use both: DSCR checks today\'s cash flow coverage, while debt yield stress-tests the lender\'s recovery position regardless of current rates.' },
  { q: 'Why doesn\'t property value affect debt yield?', a: 'Debt yield intentionally ignores property value. This makes it cycle-resistant. During a price bubble, cap rates compress and LTV looks favorable, but debt yield may reveal inadequate income coverage. Lenders use debt yield as a floor that cannot be engineered away by inflated appraisals.' },
  { q: 'Does debt yield guarantee loan approval?', a: 'No. Debt yield is one input in commercial lending underwriting. Lenders also evaluate DSCR, LTV, borrower credit history, liquidity reserves, property condition, market occupancy trends, and other factors. Meeting the debt yield threshold is necessary but not sufficient for approval.' },
  { q: 'How do I increase debt yield?', a: 'You can increase debt yield by (1) increasing NOI — through higher rents, reduced vacancy, or cutting expenses; (2) reducing the loan amount — bring more equity, or negotiate a lower loan-to-cost; (3) both simultaneously. Property value appreciation alone does not improve debt yield.' },
  { q: 'What is debt yield used for in CMBS loans?', a: 'In CMBS (commercial mortgage-backed securities) loans, the minimum debt yield is often written directly into loan documents. It can affect the ability to release collateral, extend the loan, or take new mezzanine financing. Falling below the written minimum may trigger cash management provisions or other lender protections.' },
  { q: 'Can I use debt yield for residential rental properties?', a: 'Debt yield is primarily a commercial lending metric used for 5+ unit multifamily, office, retail, industrial, and hospitality properties. For 1–4 unit residential properties financed with conventional mortgages (Fannie Mae, Freddie Mac, FHA), lenders focus on DSCR and LTV rather than debt yield. Debt yield becomes relevant when residential properties are financed through commercial loan programs.' }
]

const relatedCalcs = [
  { label: 'DSCR Calculator', href: '/dscr-calculator' },
  { label: 'LTV Calculator', href: '/ltv-calculator' },
  { label: 'Cap Rate Calculator', href: '/cap-rate-calculator' },
  { label: 'NOI Calculator', href: '/noi-calculator' },
  { label: 'Property Cash Flow', href: '/property-cash-flow-calculator' },
  { label: 'Real Estate ROI', href: '/rental-property-roi-calculator' },
  { label: 'Closing Costs', href: '/closing-costs-calculator' },
  { label: 'Multifamily Property', href: '/multifamily-property-calculator' },
]

// ─── PROPERTY TYPE CONTEXT DATA ─────────────────────────────────────────────
const propertyTypeContextMap = {
  multifamily: 'Multifamily: Most lenders accept 8–9% for stabilized assets. Agency programs widely available.',
  office: 'Office: Elevated risk. Most lenders require 10%+ given post-COVID vacancy concerns.',
  retail: 'Retail: Varies widely. NNN single-tenant may get favorable treatment; inline retail typically requires higher yield.',
  industrial: 'Industrial: Strong demand sector. Lenders often accept 8–9% for institutional-grade assets.',
  hospitality: 'Hospitality: Highly cyclical. Most lenders require 11–13%+ for hotel collateral.',
  mixed: 'Mixed-use: Analyzed as a blend. Consult lender underwriting guidelines for allocation methodology.'
}

const propertyTypeContext = computed(() => propertyTypeContextMap[form.propertyType] || '')

// ─── CORE CALCULATIONS ─────────────────────────────────────────────────────
const safeNOI = computed(() => (form.noi > 0 ? form.noi : 0))
const safeLoan = computed(() => (form.loanAmount > 0 ? form.loanAmount : 0))
const effectiveTargetDY = computed(() => (form.targetDebtYield > 0 ? form.targetDebtYield : 10))

const canCalculate = computed(() => safeNOI.value > 0 && safeLoan.value > 0)
const hasResult = computed(() => canCalculate.value)

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

// Loan Gap vs Target
const loanGap = computed(() => {
  if (!canCalculate.value) return 0
  return safeLoan.value - maxLoanAtTarget.value
})

// Optional cross-checks
const crossCheckLTV = computed(() => {
  if (!canCalculate.value || !form.propertyValue || form.propertyValue <= 0) return null
  return (safeLoan.value / form.propertyValue) * 100
})

const crossCheckCapRate = computed(() => {
  if (!canCalculate.value || !form.propertyValue || form.propertyValue <= 0) return null
  return (safeNOI.value / form.propertyValue) * 100
})

// ─── REVERSE MODES ──────────────────────────────────────────────────────────
// Find NOI: Required NOI = Loan × (targetDY / 100)
const revNOI = computed(() => {
  const loan = revNOIForm.loanAmount
  const dy = revNOIForm.targetDebtYield
  if (!loan || loan <= 0 || !dy || dy <= 0) return null
  return loan * (dy / 100)
})

// Find Max Loan: Max Loan = NOI / (targetDY / 100)
const revLoan = computed(() => {
  const noi = revLoanForm.noi
  const dy = revLoanForm.targetDebtYield
  if (!noi || noi <= 0 || !dy || dy <= 0) return null
  return noi / (dy / 100)
})

// ─── VERDICT / RIS ──────────────────────────────────────────────────────────
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

// ─── DEAL CONTEXT TEXT ──────────────────────────────────────────────────────
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

// ─── SENSITIVITY TABLE ──────────────────────────────────────────────────────
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

// ─── SHARE PARAMS ───────────────────────────────────────────────────────────
function buildShareParams() {
  const p = new URLSearchParams()
  if (calcMode.value !== 'calculate') p.set('cm', calcMode.value)
  // Standard mode fields
  if (form.noi) p.set('noi', form.noi)
  if (form.loanAmount) p.set('la', form.loanAmount)
  if (form.targetDebtYield) p.set('tdy', form.targetDebtYield)
  if (form.propertyValue) p.set('pv', form.propertyValue)
  if (form.propertyType !== 'multifamily') p.set('pt', form.propertyType)
  if (form.scenarioName) p.set('sn', form.scenarioName)
  // Reverse NOI mode fields
  if (revNOIForm.loanAmount) p.set('rla', revNOIForm.loanAmount)
  if (revNOIForm.targetDebtYield) p.set('rtdy', revNOIForm.targetDebtYield)
  if (revNOIForm.scenarioName) p.set('rsn', revNOIForm.scenarioName)
  // Reverse Loan mode fields
  if (revLoanForm.noi) p.set('rnoi', revLoanForm.noi)
  if (revLoanForm.targetDebtYield) p.set('rltdy', revLoanForm.targetDebtYield)
  if (revLoanForm.scenarioName) p.set('rlsn', revLoanForm.scenarioName)
  return p.toString()
}

// ─── URL PARAM PARSING ──────────────────────────────────────────────────────
onMounted(() => {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  if (params.get('cm')) calcMode.value = params.get('cm')
  if (params.get('noi')) form.noi = parseFloat(params.get('noi'))
  if (params.get('la')) form.loanAmount = parseFloat(params.get('la'))
  if (params.get('tdy')) form.targetDebtYield = parseFloat(params.get('tdy'))
  if (params.get('pv')) form.propertyValue = parseFloat(params.get('pv'))
  if (params.get('pt')) form.propertyType = params.get('pt')
  if (params.get('sn')) form.scenarioName = params.get('sn')
  if (params.get('rla')) revNOIForm.loanAmount = parseFloat(params.get('rla'))
  if (params.get('rtdy')) revNOIForm.targetDebtYield = parseFloat(params.get('rtdy'))
  if (params.get('rsn')) revNOIForm.scenarioName = params.get('rsn')
  if (params.get('rnoi')) revLoanForm.noi = parseFloat(params.get('rnoi'))
  if (params.get('rltdy')) revLoanForm.targetDebtYield = parseFloat(params.get('rltdy'))
  if (params.get('rlsn')) revLoanForm.scenarioName = params.get('rlsn')
})

// ─── HELPER FUNCTIONS ───────────────────────────────────────────────────────
function formatCurrency(val) {
  if (!val && val !== 0) return '$0'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)
}

function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
}

async function shareResult() {
  const params = buildShareParams()
  const url = `${window.location.origin}${window.location.pathname}${params ? '?' + params : ''}`
  try {
    await navigator.clipboard.writeText(url)
    shareSuccess.value = true
    setTimeout(() => { shareSuccess.value = false }, 3000)
  } catch {
    const el = document.createElement('input')
    el.value = url
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    shareSuccess.value = true
    setTimeout(() => { shareSuccess.value = false }, 3000)
  }
}

// ─── PDF EXPORT ─────────────────────────────────────────────────────────────
async function exportPDF() {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF()

  const navy = [30, 58, 95]
  const gold = [245, 158, 11]
  const gray = [107, 114, 128]

  // Header
  doc.setFillColor(...navy)
  doc.rect(0, 0, 210, 40, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(22)
  doc.setFont('helvetica', 'bold')
  doc.text('RealCalc', 20, 20)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.text('Debt Yield Analysis Report', 20, 30)
  doc.setFontSize(9)
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 130, 20)
  if (form.propertyType) {
    doc.text(`Property type: ${form.propertyType}`, 130, 28)
  }

  // Hero block — mode-aware
  let heroValue, heroLabel, heroSub
  if (calcMode.value === 'find-noi') {
    heroValue = formatCurrency(revNOI.value)
    heroLabel = 'REQUIRED NOI (Annual)'
    heroSub = `To achieve ${revNOIForm.targetDebtYield}% debt yield on ${formatCurrency(revNOIForm.loanAmount)} loan`
  } else if (calcMode.value === 'find-loan') {
    heroValue = formatCurrency(revLoan.value)
    heroLabel = 'MAX LOAN AMOUNT'
    heroSub = `At ${revLoanForm.targetDebtYield}% debt yield with ${formatCurrency(revLoanForm.noi)} NOI`
  } else {
    heroValue = debtYieldFormatted.value
    heroLabel = 'DEBT YIELD'
    heroSub = `Tier: ${verdict.value?.label || '—'}`
  }

  doc.setFillColor(...gold)
  doc.rect(15, 50, 180, 30, 'F')
  doc.setTextColor(30, 58, 95)
  doc.setFontSize(28)
  doc.setFont('helvetica', 'bold')
  doc.text(heroValue, 105, 66, { align: 'center' })
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text(heroLabel, 105, 74, { align: 'center' })

  // Breakdown
  let y = 95
  doc.setTextColor(...navy)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Key Metrics', 20, y)
  y += 8

  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(...gray)

  if (calcMode.value === 'calculate' && hasResult.value) {
    const rows = [
      ['NOI', formatCurrency(form.noi)],
      ['Loan Amount', formatCurrency(form.loanAmount)],
      ['Debt Yield', debtYieldFormatted.value],
      ['Verdict', verdict.value?.label || '—'],
      [`Max Loan at ${effectiveTargetDY.value}% Target`, formatCurrency(maxLoanAtTarget.value)],
      ['Loan Gap vs Target', `${loanGap.value > 0 ? '+' : ''}${formatCurrency(loanGap.value)}`],
    ]
    if (crossCheckLTV.value !== null) rows.push(['LTV (cross-check)', crossCheckLTV.value.toFixed(2) + '%'])
    if (crossCheckCapRate.value !== null) rows.push(['Cap Rate (cross-check)', crossCheckCapRate.value.toFixed(2) + '%'])

    rows.forEach(([label, value]) => {
      doc.setTextColor(...gray)
      doc.text(label, 20, y)
      doc.setTextColor(...navy)
      doc.setFont('helvetica', 'bold')
      doc.text(value, 190, y, { align: 'right' })
      doc.setFont('helvetica', 'normal')
      y += 7
    })
  } else if (calcMode.value === 'find-noi' && revNOI.value !== null) {
    doc.text('Required NOI', 20, y); doc.text(formatCurrency(revNOI.value), 190, y, { align: 'right' }); y += 7
    doc.text('Loan Amount', 20, y); doc.text(formatCurrency(revNOIForm.loanAmount), 190, y, { align: 'right' }); y += 7
    doc.text('Target Debt Yield', 20, y); doc.text(revNOIForm.targetDebtYield + '%', 190, y, { align: 'right' }); y += 7
  } else if (calcMode.value === 'find-loan' && revLoan.value !== null) {
    doc.text('Max Loan', 20, y); doc.text(formatCurrency(revLoan.value), 190, y, { align: 'right' }); y += 7
    doc.text('NOI', 20, y); doc.text(formatCurrency(revLoanForm.noi), 190, y, { align: 'right' }); y += 7
    doc.text('Target Debt Yield', 20, y); doc.text(revLoanForm.targetDebtYield + '%', 190, y, { align: 'right' }); y += 7
  }

  // Disclaimers
  y += 10
  doc.setTextColor(...gray)
  doc.setFontSize(7)
  doc.setFont('helvetica', 'italic')
  const disclaimers = [
    'Debt yield is not loan approval. Lenders use multiple criteria including DSCR, LTV, credit, and reserves.',
    'Property value does not affect debt yield. LTV and cap rate are shown as optional cross-checks only.',
    'This report is for informational purposes only. Not financial advice.',
  ]
  disclaimers.forEach((line, i) => {
    if (y + i * 5 < 270) doc.text(line, 20, y + i * 5)
  })

  // Footer
  doc.setFillColor(...navy)
  doc.rect(0, 280, 210, 17, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text('arvcalc.com — For informational purposes only. Not financial advice.', 105, 290, { align: 'center' })

  doc.save(`debt-yield-analysis-${Date.now()}.pdf`)
}

// ─── SCENARIO SAVE / EMAIL CAPTURE ──────────────────────────────────────────
const triggerScenarioSave = ref(false)

const currentScenarioResult = computed(() => {
  if (calcMode.value === 'calculate' && hasResult.value) {
    return {
      primaryMetric: 'Debt Yield',
      primaryValue: debtYieldFormatted.value,
      badgeLabel: verdict.value?.label,
      badgeColor: verdict.value?.color,
      noi: form.noi,
      loanAmount: form.loanAmount,
      propertyValue: form.propertyValue || null,
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
      loanAmount: revNOIForm.loanAmount,
      targetDebtYield: revNOIForm.targetDebtYield
    }
  }
  if (calcMode.value === 'find-loan' && revLoan.value !== null) {
    return {
      primaryMetric: 'Max Loan',
      primaryValue: formatCurrency(revLoan.value),
      badgeLabel: 'Max Loan',
      badgeColor: '#059669',
      noi: revLoanForm.noi,
      targetDebtYield: revLoanForm.targetDebtYield
    }
  }
  return undefined
})

function openSaveScenario() {
  triggerScenarioSave.value = true
  nextTick(() => { triggerScenarioSave.value = false })
  try {
    if (!localStorage.getItem('realcalc_email_captured')) {
      showEmailModal.value = true
    }
  } catch {}
}

function onScenarioSaved(_id) {}

function onEmailCaptured(_email) {
  showEmailModal.value = false
}
</script>
