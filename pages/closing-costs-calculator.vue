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
            <li class="text-gray-700 font-semibold">Closing Costs Calculator</li>
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
            Closing Costs Calculator — Estimate Cash to Close (2026)
          </h1>
          <p class="text-gray-500 mt-2 text-base">Calculate closing costs, total cash needed, and down payment. Avoid surprises at closing and see how much cash you really need.</p>
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
            <li><a href="#what-are-closing-costs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Are Closing Costs</a></li>
            <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
            <li><a href="#seller-credits" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Seller Credits</a></li>
            <li><a href="#points-vs-cash" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Points vs Cash</a></li>
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
              <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
              <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
              <li><a href="#what-are-closing-costs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Are Closing Costs</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
              <li><a href="#seller-credits" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Seller Credits</a></li>
              <li><a href="#points-vs-cash" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Points vs Cash</a></li>
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

    <!-- ═══════════════════════════════════════════════
         MOBILE LIVE RESULT BAR
    ═══════════════════════════════════════════════ -->
    <div class="lg:hidden sticky top-[4.5rem] z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <div class="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <svg class="w-4 h-4 flex-shrink-0" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          <span v-if="calcMode === 'calculate'">Total Cash to Close</span>
          <span v-else-if="calcMode === 'find-price'">Max Purchase Price</span>
          <span v-else>Required Cash Reserve</span>
        </div>
        <div class="flex items-center gap-3">
          <template v-if="calcMode === 'calculate'">
            <span v-if="hasResult" class="text-2xl font-extrabold leading-none" :style="`color: ${verdict?.color}`">
              {{ formatCurrency(totalCashToClose) }}
            </span>
            <span v-else class="text-2xl font-bold text-gray-200">&mdash;</span>
            <span v-if="hasResult && verdict"
              class="text-xs font-bold px-2.5 py-1 rounded-full text-white"
              :style="`background: ${verdict.color}`">
              {{ verdict.label }}
            </span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <template v-else-if="calcMode === 'find-price'">
            <span v-if="revPrice !== null" class="text-xl font-extrabold leading-none text-blue-700">{{ formatCurrency(revPrice) }}</span>
            <span v-else class="text-2xl font-bold text-gray-200">&mdash;</span>
            <span v-if="revPrice !== null" class="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">Max Price</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
          </template>
          <template v-else>
            <span v-if="revReserve !== null" class="text-xl font-extrabold leading-none text-emerald-700">{{ formatCurrency(revReserve) }}</span>
            <span v-else class="text-2xl font-bold text-gray-200">&mdash;</span>
            <span v-if="revReserve !== null" class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">Reserve</span>
            <span v-else class="text-xs text-gray-400 font-medium">fill in fields below</span>
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
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'calculate' ? 'color:#1e3a5f;' : 'color:#6b7280;'">Total Cash to Close</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'calculate' ? 'text-amber-700' : 'text-gray-400'">Down Payment + Costs</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'calculate' ? 'bg-amber-100 text-amber-800' : 'bg-gray-200 text-gray-400'">Standard</span>
            </button>
            <button @click="calcMode = 'find-price'"
              class="text-left px-3 py-2.5 rounded-xl transition-all"
              :class="calcMode === 'find-price' ? 'bg-white shadow border border-blue-200' : 'hover:bg-gray-50'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-price' ? 'color:#1e3a5f;' : 'color:#6b7280;'">Find Max Price</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-price' ? 'text-blue-700' : 'text-gray-400'">Budget &rarr; Max Purchase</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-price' ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
            <button @click="calcMode = 'find-reserve'"
              class="text-left px-3 py-2.5 rounded-xl transition-all"
              :class="calcMode === 'find-reserve' ? 'bg-white shadow border border-emerald-200' : 'hover:bg-gray-50'">
              <span class="block text-xs font-bold leading-tight" :style="calcMode === 'find-reserve' ? 'color:#1e3a5f;' : 'color:#6b7280;'">Cash Reserve Needed</span>
              <span class="block text-xs mt-0.5" :class="calcMode === 'find-reserve' ? 'text-emerald-700' : 'text-gray-400'">Close + 6-mo Reserve</span>
              <span class="inline-block text-xs mt-1 px-2 py-0.5 rounded-full font-semibold"
                :class="calcMode === 'find-reserve' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-400'">Reverse</span>
            </button>
          </div>
          <div class="mt-2.5">
            <p v-if="calcMode === 'calculate'" class="text-xs text-gray-500 leading-relaxed">
              Enter purchase price, down payment, and closing cost details to see your total cash to close. Closing costs are separate from down payment.
            </p>
            <p v-else-if="calcMode === 'find-price'" class="text-xs text-blue-700 leading-relaxed bg-blue-50 px-3 py-1.5 rounded-lg">
              Enter your <strong>total cash budget</strong>, <strong>down payment %</strong>, and <strong>estimated closing cost %</strong> to find the maximum purchase price you can afford.
            </p>
            <p v-else class="text-xs text-emerald-700 leading-relaxed bg-emerald-50 px-3 py-1.5 rounded-lg">
              Enter deal details to calculate <strong>total cash to close + 6 months of reserves</strong> (PITI or operating expenses).
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

            <!-- SECTION: Property & Loan -->
            <div class="border-b border-gray-100">
              <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
                <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Property &amp; Loan</h2>
              </div>
              <div class="px-4 py-3 space-y-3">

                <!-- Purchase Price -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">
                    Purchase Price <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="form.purchasePrice" type="number" min="0" step="10000"
                      placeholder="Enter purchase price"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                </div>

                <!-- Down Payment % -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">
                    Down Payment (%) <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <input v-model.number="form.downPaymentPct" type="number" min="0" max="100" step="1"
                      placeholder="Enter down payment percentage"
                      class="w-full pl-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Typical: 20% conventional, 25% investment. Down payment is separate from closing costs.</p>
                </div>

                <!-- Loan Amount (auto-calculated but overridable) -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">
                    Loan Amount
                  </label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="form.loanAmountOverride" type="number" min="0" step="10000"
                      :placeholder="autoLoanAmount > 0 ? formatCurrency(autoLoanAmount) : 'Auto-calculated from price & down payment'"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                  <p v-if="loanMismatch" class="text-xs text-amber-600 mt-1 flex items-start gap-1">
                    <svg class="w-3 h-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                    Loan amount override does not match Price &minus; Down Payment ({{ formatCurrency(autoLoanAmount) }}). Make sure this is intentional.
                  </p>
                  <p v-else class="text-xs text-gray-400 mt-1">Auto-calculated as Price &minus; Down Payment. Override only if your loan differs.</p>
                </div>

              </div>
            </div>

            <!-- SECTION: Closing Cost Components -->
            <div class="border-b border-gray-100">
              <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
                <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Closing Cost Components</h2>
              </div>
              <div class="px-4 py-3 space-y-3">

                <!-- Loan Origination Fee -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Loan Origination Fee (%)</label>
                  <div class="relative">
                    <input v-model.number="form.originationPct" type="number" min="0" max="5" step="0.25"
                      placeholder="Typically 0.5% - 1%"
                      class="w-full pl-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Applied to the loan amount. Common: 0.5%&ndash;1% for conventional loans.</p>
                </div>

                <!-- Discount Points -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Discount Points</label>
                  <div class="relative">
                    <input v-model.number="form.discountPoints" type="number" min="0" max="5" step="0.25"
                      placeholder="Optional: 0 - 3 points"
                      class="w-full pl-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">pts</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">1 point = 1% of loan amount. Reduces rate but increases upfront cost.</p>
                </div>

                <!-- Title & Escrow -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Title, Escrow &amp; Attorney ($)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="form.titleEscrow" type="number" min="0" step="100"
                      placeholder="Typically $1,500 - $3,000"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                </div>

                <!-- Appraisal + Inspection -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Appraisal &amp; Inspection ($)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="form.appraisalInspection" type="number" min="0" step="100"
                      placeholder="Typically $700 - $1,500"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                </div>

                <!-- Recording & Transfer -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Recording &amp; Transfer Fees ($)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="form.recordingTransfer" type="number" min="0" step="100"
                      placeholder="Varies by state — typically $200 - $2,000"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Varies significantly by state and county.</p>
                </div>

                <!-- Prepaid Taxes & Insurance -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Prepaid Taxes &amp; Insurance ($)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="form.prepaids" type="number" min="0" step="100"
                      placeholder="Typically 2 - 6 months prepaid"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Upfront property taxes and homeowner's insurance. Often 2&ndash;6 months prepaid at closing.</p>
                </div>

                <!-- Other / Misc Fees -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Other / Miscellaneous Fees ($)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="form.otherFees" type="number" min="0" step="100"
                      placeholder="Survey, courier, HOA transfer, etc."
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                </div>

              </div>
            </div>

            <!-- SECTION: Credits & Adjustments -->
            <div class="border-b border-gray-100">
              <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
                <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Credits &amp; Adjustments</h2>
              </div>
              <div class="px-4 py-3 space-y-3">

                <!-- Seller Credit -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Seller Credit ($)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="form.sellerCredit" type="number" min="0" step="500"
                      placeholder="Negotiated seller concession"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                  <p v-if="sellerCreditExceedsGross" class="text-xs text-amber-600 mt-1 flex items-start gap-1">
                    <svg class="w-3 h-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                    Seller credit exceeds total closing costs. Net closing costs capped at $0 &mdash; credits cannot reduce below zero.
                  </p>
                  <p v-else class="text-xs text-gray-400 mt-1">Reduces closing costs. Lenders typically cap credits at 3%&ndash;6% of price depending on loan type.</p>
                </div>

                <!-- Lender Credit -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Lender Credit ($)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="form.lenderCredit" type="number" min="0" step="500"
                      placeholder="Credit from lender (if any)"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
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

          <!-- ─── MODE: FIND MAX PRICE ─── -->
          <template v-else-if="calcMode === 'find-price'">
            <div class="border-b border-gray-100">
              <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
                <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Inputs &mdash; Find Max Purchase Price</h2>
              </div>
              <div class="px-4 py-3 space-y-3">

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Total Cash Budget <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="revPriceForm.cashBudget" type="number" min="0" step="5000"
                      placeholder="How much cash do you have?"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Total available cash for down payment + closing costs.</p>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Down Payment (%) <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <input v-model.number="revPriceForm.downPaymentPct" type="number" min="0" max="100" step="1"
                      placeholder="Enter down payment %"
                      class="w-full pl-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Estimated Closing Costs (%) <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <input v-model.number="revPriceForm.closingCostPct" type="number" min="0" max="10" step="0.5"
                      placeholder="Typically 2% - 5%"
                      class="w-full pl-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Estimated total closing costs as % of purchase price.</p>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Scenario Name</label>
                  <input v-model="revPriceForm.scenarioName" type="text"
                    placeholder="Optional: name this scenario"
                    class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                </div>

              </div>
            </div>
          </template>

          <!-- ─── MODE: FIND RESERVE ─── -->
          <template v-else>
            <div class="border-b border-gray-100">
              <div class="px-5 py-3 bg-gray-50 border-b border-gray-100">
                <h2 class="text-xs font-bold uppercase tracking-wider text-gray-500">Inputs &mdash; Cash Reserve Needed</h2>
              </div>
              <div class="px-4 py-3 space-y-3">

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Purchase Price <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="revReserveForm.purchasePrice" type="number" min="0" step="10000"
                      placeholder="Enter purchase price"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Down Payment (%) <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <input v-model.number="revReserveForm.downPaymentPct" type="number" min="0" max="100" step="1"
                      placeholder="Enter down payment %"
                      class="w-full pl-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Estimated Closing Costs (%) <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <input v-model.number="revReserveForm.closingCostPct" type="number" min="0" max="10" step="0.5"
                      placeholder="Typically 2% - 5%"
                      class="w-full pl-4 pr-8 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Monthly PITI / Expenses <span class="text-red-500">*</span></label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                    <input v-model.number="revReserveForm.monthlyExpense" type="number" min="0" step="100"
                      placeholder="Monthly mortgage + tax + insurance"
                      class="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-semibold text-sm" />
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Monthly payment (PITI) or total operating cost. Used to compute 6-month reserve.</p>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Scenario Name</label>
                  <input v-model="revReserveForm.scenarioName" type="text"
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
              <span>Closing costs are <strong>separate</strong> from your down payment. Total cash = down payment + closing costs.</span>
            </div>
            <div class="flex items-start gap-1.5 text-xs text-gray-500">
              <svg class="w-3 h-3 flex-shrink-0 mt-0.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
              <span>Costs vary significantly by state, lender, and deal structure. This is an estimate, not a Closing Disclosure.</span>
            </div>
            <div class="flex items-start gap-1.5 text-xs text-gray-500">
              <svg class="w-3 h-3 flex-shrink-0 mt-0.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
              <span>Seller credits reduce closing costs but cannot bring net closing costs below $0.</span>
            </div>
            <div class="flex items-start gap-1.5 text-xs text-gray-500">
              <svg class="w-3 h-3 flex-shrink-0 mt-0.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
              <span>Confirm final numbers with your lender's Loan Estimate before signing.</span>
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
                <p class="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">Total Cash to Close</p>
                <div class="text-5xl font-extrabold text-white mb-1">{{ formatCurrency(totalCashToClose) }}</div>
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-2">
                  {{ verdict?.label }}
                </div>
                <p class="text-white/90 text-sm font-medium">{{ verdict?.subtitle }}</p>
              </div>

              <!-- Primary Metrics -->
              <div class="p-5 space-y-3">

                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-gray-600 font-medium">Purchase Price</span>
                  <span class="text-base font-bold text-gray-800">{{ formatCurrency(form.purchasePrice) }}</span>
                </div>

                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-gray-600 font-medium">Down Payment ({{ form.downPaymentPct }}%)</span>
                  <span class="text-base font-bold text-gray-800">{{ formatCurrency(downPaymentAmount) }}</span>
                </div>

                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-gray-600 font-medium">Loan Amount</span>
                  <span class="text-base font-bold text-gray-800">{{ formatCurrency(effectiveLoanAmount) }}</span>
                </div>

                <div class="py-2 border-b border-gray-100">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-600 font-medium">Gross Closing Costs</span>
                    <span class="text-base font-bold text-gray-800">{{ formatCurrency(grossClosingCosts) }}</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5">Before credits. {{ closingCostPctFormatted }}% of purchase price.</p>
                </div>

                <div v-if="totalCredits > 0" class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-green-700 font-medium">Total Credits</span>
                  <span class="text-base font-bold text-green-700">&minus;{{ formatCurrency(totalCredits) }}</span>
                </div>

                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm font-semibold" style="color: #1e3a5f;">Net Closing Costs</span>
                  <span class="text-lg font-extrabold" style="color: #1e3a5f;">{{ formatCurrency(netClosingCosts) }}</span>
                </div>

                <div class="py-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sm font-bold" :style="{ color: verdict?.color }">Total Cash to Close</span>
                    <span class="text-xl font-extrabold" :style="{ color: verdict?.color }">{{ formatCurrency(totalCashToClose) }}</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-0.5">Down Payment + Net Closing Costs. This is what you need at closing.</p>
                </div>

              </div>

              <!-- Cost Breakdown -->
              <div class="p-5 pt-0">
                <p class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Closing Cost Breakdown</p>
                <div class="space-y-2">
                  <div v-if="originationAmount > 0" class="flex items-center justify-between text-sm">
                    <span class="text-gray-600">Loan Origination ({{ form.originationPct || 0 }}%)</span>
                    <span class="font-semibold text-gray-800">{{ formatCurrency(originationAmount) }}</span>
                  </div>
                  <div v-if="discountPointsAmount > 0" class="flex items-center justify-between text-sm">
                    <span class="text-gray-600">Discount Points ({{ form.discountPoints || 0 }} pts)</span>
                    <span class="font-semibold text-gray-800">{{ formatCurrency(discountPointsAmount) }}</span>
                  </div>
                  <div v-if="safeVal(form.titleEscrow) > 0" class="flex items-center justify-between text-sm">
                    <span class="text-gray-600">Title, Escrow &amp; Attorney</span>
                    <span class="font-semibold text-gray-800">{{ formatCurrency(form.titleEscrow) }}</span>
                  </div>
                  <div v-if="safeVal(form.appraisalInspection) > 0" class="flex items-center justify-between text-sm">
                    <span class="text-gray-600">Appraisal &amp; Inspection</span>
                    <span class="font-semibold text-gray-800">{{ formatCurrency(form.appraisalInspection) }}</span>
                  </div>
                  <div v-if="safeVal(form.recordingTransfer) > 0" class="flex items-center justify-between text-sm">
                    <span class="text-gray-600">Recording &amp; Transfer</span>
                    <span class="font-semibold text-gray-800">{{ formatCurrency(form.recordingTransfer) }}</span>
                  </div>
                  <div v-if="safeVal(form.prepaids) > 0" class="flex items-center justify-between text-sm">
                    <span class="text-gray-600">Prepaid Taxes &amp; Insurance</span>
                    <span class="font-semibold text-gray-800">{{ formatCurrency(form.prepaids) }}</span>
                  </div>
                  <div v-if="safeVal(form.otherFees) > 0" class="flex items-center justify-between text-sm">
                    <span class="text-gray-600">Other / Miscellaneous</span>
                    <span class="font-semibold text-gray-800">{{ formatCurrency(form.otherFees) }}</span>
                  </div>
                </div>
              </div>

              <!-- Disclaimers -->
              <div class="px-5 pb-5">
                <div class="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <p class="text-xs text-gray-500">
                    <strong>This is an estimate, not a final bill.</strong> Actual closing costs vary by state, lender, and deal structure. Confirm with your lender's Loan Estimate or Closing Disclosure before signing.
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
              <p class="text-gray-500 font-medium text-sm">Enter purchase price and down payment to calculate closing costs.</p>
              <p class="text-gray-400 text-xs mt-1">Total Cash = Down Payment + Net Closing Costs</p>
            </div>

            <!-- SENSITIVITY TABLE -->
            <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 class="text-sm font-bold mb-3" style="color: #1e3a5f;">Cash to Close Sensitivity &mdash; Closing Cost % Variations</h3>
              <p class="text-xs text-gray-400 mb-3">How total cash changes at different closing cost percentages (down payment held constant).</p>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="border-b border-gray-200">
                      <th class="text-left py-2 pr-3 font-bold text-gray-600 text-xs">Closing Cost %</th>
                      <th class="text-center py-2 px-2 font-bold text-gray-600 text-xs">Closing Costs</th>
                      <th class="text-right py-2 font-bold text-gray-600 text-xs">Total Cash</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="row in sensitivityRows" :key="row.pct"
                      :class="row.isCurrent ? 'bg-yellow-50 font-semibold' : 'hover:bg-gray-50'">
                      <td class="py-2 pr-3 text-gray-800 text-xs">{{ row.pct.toFixed(1) }}%</td>
                      <td class="py-2 px-2 text-center text-xs font-bold text-gray-700">{{ formatCurrency(row.costs) }}</td>
                      <td class="py-2 text-right text-xs font-bold" :style="{ color: row.color }">{{ formatCurrency(row.total) }}</td>
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

          <!-- FIND PRICE MODE: RESULT -->
          <template v-else-if="calcMode === 'find-price'">
            <div v-if="revPrice !== null" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div class="p-5 text-center bg-blue-700">
                <p class="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">Max Purchase Price</p>
                <div class="text-4xl font-extrabold text-white mb-1">{{ formatCurrency(revPrice) }}</div>
                <p class="text-white/90 text-sm">With {{ formatCurrency(revPriceForm.cashBudget) }} total cash</p>
              </div>
              <div class="p-5 space-y-3">
                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-gray-600 font-medium">Max Purchase Price</span>
                  <span class="text-lg font-extrabold text-blue-700">{{ formatCurrency(revPrice) }}</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-gray-600 font-medium">Down Payment ({{ revPriceForm.downPaymentPct }}%)</span>
                  <span class="text-base font-bold text-gray-800">{{ formatCurrency(revPrice * revPriceForm.downPaymentPct / 100) }}</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-gray-600 font-medium">Est. Closing Costs ({{ revPriceForm.closingCostPct }}%)</span>
                  <span class="text-base font-bold text-gray-800">{{ formatCurrency(revPrice * revPriceForm.closingCostPct / 100) }}</span>
                </div>
                <div class="flex items-center justify-between py-2">
                  <span class="text-sm text-gray-600 font-medium">Cash Budget</span>
                  <span class="text-base font-bold text-gray-800">{{ formatCurrency(revPriceForm.cashBudget) }}</span>
                </div>
                <div class="p-3 rounded-xl bg-blue-50 border border-blue-200">
                  <p class="text-xs text-blue-800 font-medium">Max Price = Cash Budget &divide; (Down Payment % + Closing Cost %) &times; 100</p>
                </div>
                <div class="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <p class="text-xs text-gray-500">This estimate assumes closing costs as a simple % of price. Actual costs vary by state and lender.</p>
                </div>
              </div>
            </div>
            <div v-else class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style="background: #f0f4f8;">
                <svg class="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <p class="text-gray-500 font-medium text-sm">Enter cash budget, down payment %, and closing cost %.</p>
            </div>
          </template>

          <!-- FIND RESERVE MODE: RESULT -->
          <template v-else>
            <div v-if="revReserve !== null" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div class="p-5 text-center bg-emerald-700">
                <p class="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">Total Cash Needed</p>
                <div class="text-4xl font-extrabold text-white mb-1">{{ formatCurrency(revReserve) }}</div>
                <p class="text-white/90 text-sm">Close + 6-month reserve</p>
              </div>
              <div class="p-5 space-y-3">
                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-gray-600 font-medium">Cash to Close</span>
                  <span class="text-base font-bold text-gray-800">{{ formatCurrency(revReserveCashToClose) }}</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-gray-100">
                  <span class="text-sm text-gray-600 font-medium">6-Month Reserve</span>
                  <span class="text-base font-bold text-gray-800">{{ formatCurrency(revReserve6mo) }}</span>
                </div>
                <div class="flex items-center justify-between py-2">
                  <span class="text-sm text-gray-600 font-medium">Total Cash Needed</span>
                  <span class="text-lg font-extrabold text-emerald-700">{{ formatCurrency(revReserve) }}</span>
                </div>
                <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <p class="text-xs text-emerald-800 font-medium">Total = (Down Payment + Est. Closing Costs) + (Monthly Expense &times; 6)</p>
                </div>
                <div class="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <p class="text-xs text-gray-500">Lenders often require 3&ndash;6 months of reserves. This estimate uses 6 months for safety. Actual closing costs vary by state and lender.</p>
                </div>
              </div>
            </div>
            <div v-else class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style="background: #f0f4f8;">
                <svg class="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <p class="text-gray-500 font-medium text-sm">Enter deal details and monthly expenses.</p>
            </div>
          </template>

          <!-- ═══════════════════════════════════════════════
               ACTION BUTTONS (all modes)
          ═══════════════════════════════════════════════ -->
          <div v-if="hasResult || revPrice !== null || revReserve !== null" class="p-4 border-t border-gray-100 space-y-2">
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
            <p class="text-xs text-gray-500 mb-3">Closing costs are one piece of the deal. Validate with:</p>
            <div class="space-y-2">
              <NuxtLink to="/ltv-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">LTV Calculator</p>
                  <p class="text-xs text-gray-500">Check leverage and down payment ratio</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/mortgage-calculator-investment" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">Mortgage Calculator</p>
                  <p class="text-xs text-gray-500">Estimate monthly PITI and cash flow</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/cash-on-cash-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">Cash-on-Cash Calculator</p>
                  <p class="text-xs text-gray-500">Measure return on your actual cash invested</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/dscr-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">DSCR Calculator</p>
                  <p class="text-xs text-gray-500">Lender income coverage ratio</p>
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
          calculator="closing-costs"
          :has-result="hasResult || revPrice !== null || revReserve !== null"
          :result="currentScenarioResult"
          :trigger-save="triggerScenarioSave"
          @saved="onScenarioSaved"
        />
      </div>

      <!-- ═══════════════════════════════════════════════
           SEO CONTENT
      ═══════════════════════════════════════════════ -->
      <div class="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

      <!-- INTRO -->
      <div class="border-b border-gray-100 px-8 py-8">
        <div class="space-y-3">
          <p class="text-gray-700 text-base leading-relaxed">
            You found the property. You agreed on the price. Then closing day arrives &mdash; and you're short $10,000. Don't let that be you. <strong>Closing costs</strong> are the fees and prepaid expenses required to finalize a real estate purchase, and they are <strong>separate from your down payment</strong>. Most buyers who underestimate cash to close do so because they confuse the two.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            This free closing costs calculator shows you exactly how much cash you need at closing &mdash; broken down by lender fees, title and escrow, prepaids, and seller credits. It also works in reverse: enter your cash budget to find the maximum purchase price you can afford, or calculate total cash needed including 6 months of reserves.
          </p>
          <p class="text-gray-600 text-sm leading-relaxed">
            Being short at closing doesn't just delay the deal &mdash; it can cost you your earnest money and kill the contract. Check your numbers before you commit.
          </p>
        </div>
      </div>

      <!-- OVERVIEW -->
      <div id="overview" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">Overview</h2>
        <p class="text-gray-600 leading-relaxed mb-3">
          The <strong>closing costs calculator</strong> is designed for real estate buyers and investors who need a fast, reliable way to estimate how much cash they'll need at closing &mdash; beyond the down payment. It computes gross closing costs from itemized components, applies seller and lender credits, and shows the total cash to close in a single view.
        </p>
        <p class="text-gray-600 leading-relaxed mb-3">
          <strong>Closing costs are not the same as your down payment.</strong> The down payment is equity in the property. Closing costs are transaction fees &mdash; lender charges, title insurance, escrow, taxes, and insurance prepaid at closing. Total cash to close = down payment + net closing costs after credits.
        </p>
        <p class="text-gray-600 leading-relaxed">
          This calculator supports three modes: <strong>Total Cash to Close</strong> (standard: itemized closing costs + down payment), <strong>Find Max Purchase Price</strong> (reverse: how much property your cash budget supports), and <strong>Cash Reserve Needed</strong> (reverse: close + 6-month reserve for lender qualification).
        </p>
      </div>

      <!-- HOW TO USE -->
      <div id="how-to-use" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-1" style="color: #1e3a5f;">How to Use This Closing Costs Calculator</h2>
        <p class="text-gray-500 text-sm mb-6">Follow these steps to estimate your total cash to close in under 2 minutes</p>
        <div class="grid md:grid-cols-2 gap-10">
          <ol class="space-y-5">
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">1</div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Enter your purchase price</p>
                <p class="text-gray-500 text-sm mt-1">The agreed-upon sale price. All percentage-based costs are calculated from this number.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">2</div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Set your down payment percentage</p>
                <p class="text-gray-500 text-sm mt-1">Typical: 20% conventional, 25% investment. The calculator auto-computes the loan amount, but you can override it if your loan differs.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">3</div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Fill in closing cost components</p>
                <p class="text-gray-500 text-sm mt-1">Origination fee, discount points, title/escrow, appraisal, recording fees, prepaids, and any other costs. Leave blank what doesn't apply.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">4</div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Add credits (if any)</p>
                <p class="text-gray-500 text-sm mt-1">Seller credits and lender credits reduce your closing costs. Credits cannot bring net closing costs below $0.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-extrabold text-white" style="background: #1e3a5f; min-width: 2rem;">5</div>
              <div>
                <p class="font-bold text-gray-900 text-sm">Read your total cash to close</p>
                <p class="text-gray-500 text-sm mt-1">Down payment + net closing costs = the cash you need at closing. Use the sensitivity table to see how different cost estimates affect your total.</p>
              </div>
            </li>
          </ol>
          <div class="space-y-5">
            <div class="p-5 rounded-xl border border-amber-200" style="background: #fffbeb;">
              <h3 class="font-bold text-sm mb-3" style="color: #92400e;">Pro Tips for Accurate Estimates</h3>
              <ul class="space-y-2 text-sm text-amber-800">
                <li class="flex gap-2"><span class="font-bold flex-shrink-0">&rarr;</span> Ask your lender for a Loan Estimate &mdash; it itemizes expected costs and is required within 3 business days of application.</li>
                <li class="flex gap-2"><span class="font-bold flex-shrink-0">&rarr;</span> Title and escrow fees vary widely by state. Get local quotes before finalizing your budget.</li>
                <li class="flex gap-2"><span class="font-bold flex-shrink-0">&rarr;</span> Seller credits are negotiable &mdash; but lenders cap them (commonly 3%&ndash;6% depending on loan type and LTV).</li>
                <li class="flex gap-2"><span class="font-bold flex-shrink-0">&rarr;</span> Prepaid taxes and insurance can be significant &mdash; especially in high-tax states like TX, NJ, or IL.</li>
              </ul>
            </div>
            <div class="p-5 rounded-xl border border-gray-200 bg-gray-50">
              <h3 class="font-bold text-sm mb-3" style="color: #1e3a5f;">Understanding Your Result</h3>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex gap-2"><span class="w-3 h-3 rounded-full bg-green-500 flex-shrink-0 mt-0.5"></span> <strong>&lt; 2%:</strong> Low closing costs &mdash; typical for cash deals or heavy credits.</li>
                <li class="flex gap-2"><span class="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0 mt-0.5"></span> <strong>2&ndash;3%:</strong> Typical range for conventional loans with good terms.</li>
                <li class="flex gap-2"><span class="w-3 h-3 rounded-full bg-amber-500 flex-shrink-0 mt-0.5"></span> <strong>3&ndash;4%:</strong> Average &mdash; most financed purchases fall here.</li>
                <li class="flex gap-2"><span class="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0 mt-0.5"></span> <strong>4&ndash;5%:</strong> Above average &mdash; may include points or high prepaids.</li>
                <li class="flex gap-2"><span class="w-3 h-3 rounded-full bg-red-500 flex-shrink-0 mt-0.5"></span> <strong>&gt; 5%:</strong> High &mdash; review fees carefully, consider shopping lenders.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- INPUTS & OUTPUTS -->
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
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Purchase Price</td><td class="py-3 px-2 text-gray-500">Input ($)</td><td class="py-3 pl-2 text-gray-600">Agreed sale price for the property.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Down Payment %</td><td class="py-3 px-2 text-gray-500">Input (%)</td><td class="py-3 pl-2 text-gray-600">Percentage of purchase price paid as equity. Separate from closing costs.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Loan Amount</td><td class="py-3 px-2 text-gray-500">Auto / Override</td><td class="py-3 pl-2 text-gray-600">Auto: Price &minus; Down Payment. Override triggers mismatch warning.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Origination Fee %</td><td class="py-3 px-2 text-gray-500">Input (%)</td><td class="py-3 pl-2 text-gray-600">Lender origination fee, applied to loan amount. Common: 0.5%&ndash;1%.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Discount Points</td><td class="py-3 px-2 text-gray-500">Input (pts)</td><td class="py-3 pl-2 text-gray-600">1 point = 1% of loan amount. Reduces rate but increases upfront cost.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Title, Escrow, Attorney</td><td class="py-3 px-2 text-gray-500">Input ($)</td><td class="py-3 pl-2 text-gray-600">Fees for title search, insurance, escrow, and legal services.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Appraisal &amp; Inspection</td><td class="py-3 px-2 text-gray-500">Input ($)</td><td class="py-3 pl-2 text-gray-600">Property appraisal and home inspection fees.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Recording &amp; Transfer</td><td class="py-3 px-2 text-gray-500">Input ($)</td><td class="py-3 pl-2 text-gray-600">County recording and transfer tax fees. Varies by state.</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Prepaids</td><td class="py-3 px-2 text-gray-500">Input ($)</td><td class="py-3 pl-2 text-gray-600">Prepaid property taxes and homeowner's insurance (2&ndash;6 months).</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Seller Credit</td><td class="py-3 px-2 text-gray-500">Input ($)</td><td class="py-3 pl-2 text-gray-600">Negotiated seller concession. Reduces closing costs (not below $0).</td></tr>
                <tr><td class="py-3 pr-4 font-medium text-gray-800">Lender Credit</td><td class="py-3 px-2 text-gray-500">Input ($)</td><td class="py-3 pl-2 text-gray-600">Credit from lender, often in exchange for a higher rate.</td></tr>
                <tr class="bg-amber-50"><td class="py-3 pr-4 font-bold text-amber-900">Total Cash to Close</td><td class="py-3 px-2 text-amber-700">Output ($)</td><td class="py-3 pl-2 text-amber-800">Down Payment + Net Closing Costs. Total cash needed at closing.</td></tr>
                <tr class="bg-amber-50"><td class="py-3 pr-4 font-bold text-amber-900">Net Closing Costs</td><td class="py-3 px-2 text-amber-700">Output ($)</td><td class="py-3 pl-2 text-amber-800">Gross closing costs minus credits. Cannot go below $0.</td></tr>
                <tr class="bg-amber-50"><td class="py-3 pr-4 font-bold text-amber-900">Closing Cost %</td><td class="py-3 px-2 text-amber-700">Output (%)</td><td class="py-3 pl-2 text-amber-800">Gross closing costs &divide; purchase price. Typical range: 2%&ndash;5%.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- FORMULA -->
      <div id="formula" class="border-b border-gray-100">
        <div class="px-8 py-6 border-b border-gray-100">
          <h2 class="text-xl font-extrabold" style="color: #1e3a5f;">Closing Costs Formula &amp; Calculation Method</h2>
          <p class="text-gray-500 text-sm mt-1">The exact math this calculator uses &mdash; plus a real-world example</p>
        </div>
        <div class="px-8 py-8">
          <div class="grid md:grid-cols-2 gap-10">

            <div>
              <h3 class="font-bold text-gray-800 mb-4">Step-by-step calculation</h3>
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">1</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Determine down payment</p>
                    <p class="text-xs text-gray-500 mt-0.5">Purchase Price &times; Down Payment %</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">$400,000 &times; 20% = $80,000 down payment</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">2</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Sum all closing cost components</p>
                    <p class="text-xs text-gray-500 mt-0.5">Origination + points + title + appraisal + recording + prepaids + other</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">$3,200 + $0 + $2,100 + $900 + $600 + $3,200 + $500 = $10,500</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5" style="background:#1e3a5f;">3</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Subtract credits</p>
                    <p class="text-xs text-gray-500 mt-0.5">Gross costs &minus; seller credit &minus; lender credit (min $0)</p>
                    <code class="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">$10,500 &minus; $5,000 = $5,500 net closing costs</code>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl border border-amber-200 bg-amber-50">
                  <span class="text-xs font-bold px-2 py-0.5 rounded-md flex-shrink-0 mt-0.5" style="background:#f59e0b;color:#1e3a5f;">4</span>
                  <div>
                    <p class="text-sm font-semibold text-gray-800">Add down payment + net closing costs</p>
                    <p class="text-xs text-gray-500 mt-0.5">Total Cash to Close = Down Payment + Net Closing Costs</p>
                    <code class="text-xs font-bold" style="color:#1e3a5f;">$80,000 + $5,500 = <strong>$85,500 total cash to close</strong></code>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="p-5 rounded-xl text-center border border-gray-200 bg-gray-50">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">The Formula</p>
                <div class="font-mono font-bold text-base mb-2" style="color:#1e3a5f;">Total Cash = Down Payment + Net Closing Costs</div>
                <div class="mt-4 p-3 rounded-lg border border-gray-200 text-left font-mono text-xs bg-white" style="color: #374151; line-height: 1.7;">
                  <div>Down Payment = Price &times; DP%</div>
                  <div>Gross Costs = Sum of all cost components</div>
                  <div>Net Costs = max(Gross &minus; Credits, 0)</div>
                  <div class="border-t border-gray-300 pt-1 font-extrabold" style="color:#1e3a5f;">Total Cash = DP + Net Costs</div>
                </div>
              </div>
              <div class="p-4 rounded-xl border border-blue-100 bg-blue-50">
                <p class="text-xs font-bold text-blue-800 mb-2">Reverse formulas (modes 2 &amp; 3)</p>
                <div class="space-y-1.5 text-xs text-blue-700">
                  <div class="font-mono">Max Price = Cash Budget &divide; (DP% + CC%) &times; 100</div>
                  <div class="font-mono">Reserve = Cash to Close + Monthly &times; 6</div>
                </div>
              </div>
              <div class="p-4 rounded-xl border border-amber-100 bg-amber-50">
                <p class="text-xs font-bold text-amber-800 mb-1">Closing costs &ne; down payment</p>
                <p class="text-xs text-amber-700 leading-relaxed">Down payment is equity in the property. Closing costs are transaction fees. They are always separate in this calculator. For leverage analysis, use our <NuxtLink to="/ltv-calculator" class="underline">LTV Calculator</NuxtLink>.</p>
              </div>
            </div>

          </div>

          <!-- Real-world example -->
          <div class="mt-8 p-6 rounded-2xl border-2 border-amber-200" style="background: #fffbeb;">
            <h3 class="font-bold text-gray-900 mb-1">Real-World Example: $400,000 Purchase with 20% Down</h3>
            <p class="text-xs text-amber-700 mb-4">Typical 2026 conventional loan scenario</p>
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Deal Details</p>
                <div class="space-y-1.5 text-sm">
                  <div class="flex justify-between"><span class="text-gray-600">Purchase price</span><span class="font-semibold">$400,000</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Down payment (20%)</span><span class="font-semibold">$80,000</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Loan amount</span><span class="font-semibold">$320,000</span></div>
                  <div class="flex justify-between mt-2"><span class="text-gray-600">Origination (1%)</span><span class="font-semibold">$3,200</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Title &amp; escrow</span><span class="font-semibold">$2,100</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Appraisal &amp; inspection</span><span class="font-semibold">$900</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Recording &amp; transfer</span><span class="font-semibold">$600</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Prepaids (4 mo)</span><span class="font-semibold">$3,200</span></div>
                  <div class="flex justify-between"><span class="text-gray-600">Other fees</span><span class="font-semibold">$500</span></div>
                  <div class="flex justify-between text-green-700"><span>Seller credit</span><span>&minus;$5,000</span></div>
                </div>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Result</p>
                <div class="p-4 rounded-xl text-center mb-3" style="background: #1e3a5f;">
                  <p class="text-xs text-blue-300 mb-1">Total Cash to Close</p>
                  <p class="text-4xl font-extrabold text-white">$85,500</p>
                  <p class="text-xs text-blue-200 mt-1">$80,000 down + $5,500 net costs</p>
                </div>
                <div class="space-y-1 text-xs text-gray-600">
                  <p>Gross closing costs: $10,500 (2.63% of price)</p>
                  <p>Net closing costs: $5,500 (after $5,000 seller credit)</p>
                  <p class="mt-2 font-medium">The $5,500 in net closing costs is separate from the $80,000 down payment. Without the seller credit, total cash would be $90,500.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- WHAT ARE CLOSING COSTS -->
      <div id="what-are-closing-costs" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What Are Closing Costs?</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          <strong>Closing costs</strong> are the fees and prepaid expenses required to finalize a real estate purchase. They are paid at closing (the day ownership transfers) and are <strong>separate from your down payment</strong>. The down payment is equity you're putting into the property; closing costs are transaction fees you pay to complete the deal.
        </p>
        <p class="text-gray-600 leading-relaxed mb-4">
          Typical closing costs range from <strong>2%&ndash;5% of the purchase price</strong> for financed purchases. Cash purchases are usually lower because there are no lender fees. The exact amount depends on your state, lender, loan type, and negotiated credits.
        </p>
        <div class="grid sm:grid-cols-3 gap-4 mb-4">
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-1">Lender Fees</p>
            <p class="text-sm text-gray-600">Origination charges, underwriting, discount points, and processing fees. You pay for the money you borrow.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-1">Title &amp; Escrow</p>
            <p class="text-sm text-gray-600">Title search, title insurance, escrow/settlement agent, and attorney fees. You pay to legally transfer ownership.</p>
          </div>
          <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <p class="text-sm font-bold text-gray-800 mb-1">Prepaids</p>
            <p class="text-sm text-gray-600">Prepaid property taxes, homeowner's insurance, and escrow account funding. You pay future costs upfront.</p>
          </div>
        </div>
        <div class="p-4 rounded-xl bg-amber-50 border border-amber-200">
          <p class="text-xs text-amber-800"><strong>Closing costs do NOT include your down payment.</strong> On a $400,000 home with 20% down, expect roughly $8,000&ndash;$12,000 in closing costs on top of the $80,000 down payment. Total cash to close: approximately $88,000&ndash;$92,000.</p>
        </div>
      </div>

      <!-- RESULT MEANING -->
      <div id="result-meaning" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">What Your Result Means</h2>
        <p class="text-gray-600 leading-relaxed mb-5">
          Your closing cost percentage shows how your estimated costs compare to typical ranges. Here's how to interpret each tier:
        </p>
        <div class="space-y-3 mb-5">
          <div class="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
            <span class="w-3 h-3 rounded-full bg-green-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-green-900">&lt; 2% &mdash; Low</p>
              <p class="text-sm text-green-800">Below typical range. Common for cash deals (no lender fees), heavy seller credits, or streamlined refinances. Verify you haven't missed any costs.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200">
            <span class="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-blue-900">2&ndash;3% &mdash; Typical</p>
              <p class="text-sm text-blue-800">Normal range for conventional loans with good terms and some negotiated credits. Well-structured deals often land here.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <span class="w-3 h-3 rounded-full bg-amber-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-amber-900">3&ndash;4% &mdash; Average</p>
              <p class="text-sm text-amber-800">Most financed purchases fall here. Includes standard lender fees, title insurance, and moderate prepaids. Nothing unusual.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-200">
            <span class="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-orange-900">4&ndash;5% &mdash; Above Average</p>
              <p class="text-sm text-orange-800">May include discount points, high prepaids, or elevated state transfer taxes. Review each line item &mdash; you may be able to negotiate some fees down.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-red-50 border border-red-200">
            <span class="w-3 h-3 rounded-full bg-red-500 flex-shrink-0 mt-1"></span>
            <div>
              <p class="font-bold text-red-900">&gt; 5% &mdash; High</p>
              <p class="text-sm text-red-800">Above typical range. Could include multiple discount points, high transfer taxes, or unusually large prepaids. Shop lenders, negotiate credits, and review every fee. Consider whether discount points make financial sense for your hold period.</p>
            </div>
          </div>
        </div>
        <div class="p-4 rounded-xl bg-gray-50 border border-gray-200">
          <p class="text-xs text-gray-500">These ranges are typical US averages. Actual costs vary significantly by state, lender, and deal structure. High-tax states (NY, NJ, TX) often exceed 4% even for standard deals. This calculator provides an estimate, not a guarantee of actual costs.</p>
        </div>
      </div>

      <!-- SELLER CREDITS -->
      <div id="seller-credits" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Seller Credits &amp; Concessions</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          Seller credits are negotiated concessions where the seller pays a portion of the buyer's closing costs. They reduce your out-of-pocket cash at closing but <strong>cannot bring net closing costs below $0</strong>.
        </p>
        <div class="grid sm:grid-cols-2 gap-5 mb-4">
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">Common Lender Caps</p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> <strong>Conventional (&gt;25% down):</strong> typically up to 9% of price</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> <strong>Conventional (10&ndash;25% down):</strong> typically up to 6%</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> <strong>Conventional (&lt;10% down):</strong> typically up to 3%</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> <strong>FHA:</strong> up to 6%</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">&rarr;</span> <strong>VA:</strong> up to 4% (plus all reasonable closing costs)</li>
            </ul>
          </div>
          <div class="p-5 rounded-xl border border-gray-100 bg-gray-50">
            <p class="font-bold text-sm mb-2" style="color: #1e3a5f;">How Credits Work</p>
            <p class="text-sm text-gray-600 mb-2">Example: On a $300,000 deal with $9,000 in closing costs and a $6,000 seller credit:</p>
            <ul class="space-y-1 text-sm text-gray-600">
              <li>&bull; Gross closing costs: $9,000</li>
              <li>&bull; Seller credit: &minus;$6,000</li>
              <li>&bull; Net closing costs: $3,000</li>
            </ul>
            <p class="text-xs text-amber-700 mt-3">Excess credits above gross costs are forfeited &mdash; they cannot reduce costs below $0 or be applied to down payment.</p>
          </div>
        </div>
      </div>

      <!-- POINTS VS CASH -->
      <div id="points-vs-cash" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Discount Points vs. Cash</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          Paying discount points increases your closing costs but may reduce your interest rate. <strong>One point equals 1% of the loan amount.</strong> Whether points make sense depends on how long you hold the property.
        </p>
        <div class="p-6 rounded-2xl border-2 border-amber-200" style="background: #fffbeb;">
          <h3 class="font-bold text-gray-900 mb-3">Example: Points Break-Even Analysis</h3>
          <div class="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <p class="font-semibold text-gray-700 mb-2">The Cost</p>
              <p class="text-gray-600">1 point on a $320,000 loan = <strong>$3,200 upfront</strong></p>
              <p class="text-gray-600 mt-1">This might reduce your rate by ~0.25%</p>
            </div>
            <div>
              <p class="font-semibold text-gray-700 mb-2">The Savings</p>
              <p class="text-gray-600">~$45/month savings on a 30-year mortgage</p>
              <p class="text-gray-600 mt-1">Break-even: ~71 months (~6 years)</p>
            </div>
          </div>
          <p class="text-xs text-amber-800 mt-4">If you plan to hold less than 6 years, points may not pay off. If you plan to hold 10+ years, points can save significant interest over the life of the loan.</p>
        </div>
      </div>

      <!-- LIMITATIONS -->
      <div id="limitations" class="border-b border-gray-100 px-8 py-8">
        <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Limitations</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          This calculator gives you a realistic estimate &mdash; not a final bill. Use it to budget, then confirm with your lender.
        </p>
        <div class="grid sm:grid-cols-2 gap-5">
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Does Not Reflect Exact Lender Fees</p>
            <p class="text-sm text-gray-600">Every lender charges differently. Origination fees, underwriting fees, and processing fees vary. Get a Loan Estimate for exact numbers.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Does Not Include All State Variations</p>
            <p class="text-sm text-gray-600">Transfer taxes, recording fees, and title insurance costs vary dramatically by state. NY, NJ, and HI have some of the highest; IN and MO some of the lowest.</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Not a Loan Estimate or Closing Disclosure</p>
            <p class="text-sm text-gray-600">This tool does not replace the official Loan Estimate (provided within 3 business days of application) or the Closing Disclosure (provided 3 days before closing).</p>
          </div>
          <div class="p-4 rounded-xl border border-red-100 bg-red-50/50">
            <p class="font-bold text-sm text-red-800 mb-2">Costs May Change Before Closing</p>
            <p class="text-sm text-gray-600">Some costs are estimates until closing. Prepaids, proration adjustments, and escrow deposits may shift. Budget a 5&ndash;10% cushion above your estimate.</p>
          </div>
        </div>
      </div>

      <!-- FAQ -->
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
        <p class="text-blue-200 mb-6">Closing costs are one piece of the deal. Validate the full picture with these tools.</p>
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
      :calculator-name="'Closing Costs Calculator'"
      :primary-result="hasResult ? formatCurrency(totalCashToClose) + ' Cash to Close' : undefined"
      title="Save Your Closing Cost Estimate"
      subtitle="Get deal templates, market benchmarks, and calculator updates."
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
  title: 'Closing Costs Calculator — Estimate Cash to Close (2026) | RealCalc',
  meta: [
    { name: 'description', content: 'Calculate closing costs, total cash needed, and down payment for real estate purchases. See itemized fees, seller credits, and how much cash you really need at closing. Free tool for US investors — no signup required.' },
    { property: 'og:title', content: 'Closing Costs Calculator — Estimate Cash to Close (2026) | RealCalc' },
    { property: 'og:description', content: 'Calculate closing costs, total cash to close, and budget your real estate purchase. Itemized fees, seller credits, and sensitivity analysis. Free calculator for US buyers and investors.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://arvcalc.com/closing-costs-calculator' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Closing Costs Calculator — Cash to Close Estimator' },
    { name: 'twitter:description', content: 'Estimate closing costs and total cash to close. Free tool for real estate buyers and investors.' },
    { name: 'keywords', content: 'closing costs calculator, cash to close, closing cost estimate, real estate closing costs, buyer closing costs, seller credit calculator, down payment vs closing costs, total cash to close' },
  ],
  link: [
    { rel: 'canonical', href: 'https://arvcalc.com/closing-costs-calculator' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Closing Costs Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description: 'Calculate closing costs, total cash to close, max purchase price, and cash reserve needed. Itemized fees with seller and lender credits.',
        url: 'https://arvcalc.com/closing-costs-calculator',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        featureList: 'Closing cost estimation, total cash to close, max purchase price finder, cash reserve calculator, seller credit analysis, sensitivity table, PDF export, scenario comparison'
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
            name: 'What are closing costs in real estate?',
            acceptedAnswer: { '@type': 'Answer', text: 'Closing costs are the fees and prepaid expenses required to finalize a real estate purchase. They typically include lender fees, title and escrow charges, appraisal and inspection fees, and prepaid taxes and insurance. Closing costs are separate from your down payment and typically range from 2% to 5% of the purchase price.' }
          },
          {
            '@type': 'Question',
            name: 'Are closing costs separate from the down payment?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. Closing costs and down payment are completely separate. The down payment is equity you put into the property. Closing costs are transaction fees paid to finalize the purchase. Total cash to close = down payment + closing costs.' }
          },
          {
            '@type': 'Question',
            name: 'How much are typical closing costs?',
            acceptedAnswer: { '@type': 'Answer', text: 'Typical closing costs range from 2% to 5% of the purchase price for financed purchases. On a $400,000 home, expect roughly $8,000 to $20,000 in closing costs. Actual costs vary significantly by state, lender, and deal structure.' }
          },
          {
            '@type': 'Question',
            name: 'Can seller credits reduce closing costs to zero?',
            acceptedAnswer: { '@type': 'Answer', text: 'Seller credits can reduce your closing costs but cannot bring them below $0. Excess credits are forfeited — they cannot be applied to the down payment or given to the buyer as cash. Lenders also cap seller credits, typically at 3% to 6% of the purchase price depending on loan type.' }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between a Loan Estimate and this calculator?',
            acceptedAnswer: { '@type': 'Answer', text: 'This calculator provides an estimate for budgeting purposes. A Loan Estimate is an official document your lender must provide within 3 business days of your loan application, itemizing expected costs. The Closing Disclosure, provided 3 days before closing, shows final actual costs. Always confirm with official documents before signing.' }
          },
          {
            '@type': 'Question',
            name: 'Do closing costs vary by state?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes, significantly. Transfer taxes, recording fees, and title insurance costs vary dramatically by state. States like New York, New Jersey, and Hawaii tend to have higher closing costs, while states like Indiana and Missouri tend to be lower. Always get local quotes for accurate estimates.' }
          },
          {
            '@type': 'Question',
            name: 'Are discount points worth paying?',
            acceptedAnswer: { '@type': 'Answer', text: 'Discount points (1 point = 1% of loan amount) reduce your interest rate but increase upfront closing costs. Whether they are worth it depends on your hold period. Typical break-even is 5 to 7 years. If you plan to hold shorter, skip the points. If longer, they may save significant interest over the life of the loan.' }
          },
          {
            '@type': 'Question',
            name: 'Does refinancing have closing costs?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. Refinance closing costs are typically 2% to 5% of the new loan amount. Rolling costs into the loan increases your balance and total interest paid. Always calculate the true cost of refinancing before proceeding.' }
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
          { '@type': 'ListItem', position: 3, name: 'Closing Costs Calculator', item: 'https://arvcalc.com/closing-costs-calculator' }
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
  purchasePrice: null,
  downPaymentPct: null,
  loanAmountOverride: null,
  originationPct: null,
  discountPoints: null,
  titleEscrow: null,
  appraisalInspection: null,
  recordingTransfer: null,
  prepaids: null,
  otherFees: null,
  sellerCredit: null,
  lenderCredit: null,
  scenarioName: ''
})

const revPriceForm = reactive({
  cashBudget: null,
  downPaymentPct: null,
  closingCostPct: null,
  scenarioName: ''
})

const revReserveForm = reactive({
  purchasePrice: null,
  downPaymentPct: null,
  closingCostPct: null,
  monthlyExpense: null,
  scenarioName: ''
})

// ─── FAQ DATA ────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'What are closing costs in real estate?', a: 'Closing costs are the fees and prepaid expenses required to finalize a real estate purchase. They typically include lender fees (origination, underwriting), title and escrow charges, appraisal and inspection fees, recording and transfer taxes, and prepaid property taxes and insurance. They are separate from your down payment and typically range from 2% to 5% of the purchase price for financed purchases.' },
  { q: 'Are closing costs separate from the down payment?', a: 'Yes, completely separate. The down payment is equity you put into the property — it reduces your loan amount and builds ownership stake. Closing costs are transaction fees you pay to finalize the purchase. Total cash to close = down payment + net closing costs. This calculator keeps them clearly separated.' },
  { q: 'How much are typical closing costs?', a: 'Typical closing costs range from 2% to 5% of the purchase price for financed purchases. On a $400,000 home, expect roughly $8,000 to $20,000 in closing costs. Cash purchases are usually lower because there are no lender fees. Actual costs vary significantly by state, lender, loan type, and negotiated credits.' },
  { q: 'Can seller credits eliminate my closing costs?', a: 'Seller credits can reduce your closing costs but cannot bring them below $0. Excess credits are forfeited — they cannot be applied to the down payment or returned as cash. Lenders also cap seller credits, typically at 3% to 6% of the purchase price depending on loan type and LTV. Don\'t assume unlimited credits.' },
  { q: 'Do closing costs vary by state?', a: 'Yes, significantly. Transfer taxes, recording fees, and title insurance costs vary dramatically by state. States like New York, New Jersey, and Hawaii tend to have higher closing costs, while states like Indiana and Missouri tend to be lower. Always get local quotes for accurate estimates in your area.' },
  { q: 'Are discount points worth paying?', a: 'Discount points (1 point = 1% of loan amount) reduce your interest rate but increase upfront closing costs. Whether they are worth it depends on your hold period. Typical break-even is 5 to 7 years. If you plan to sell or refinance within 5 years, points usually don\'t pay off. If you plan to hold 10+ years, they can save significant total interest.' },
  { q: 'Does refinancing have closing costs?', a: 'Yes. Refinance closing costs are typically 2% to 5% of the new loan amount. Even if rolled into the loan (no out-of-pocket), they increase your loan balance and total interest paid over the life of the loan. Always calculate the true cost of refinancing, including closing costs, before proceeding.' },
  { q: 'What is the difference between this calculator and a Loan Estimate?', a: 'This calculator provides a budgeting estimate based on your inputs. A Loan Estimate is an official document your lender must provide within 3 business days of your loan application, itemizing expected costs by category. The Closing Disclosure, provided 3 days before closing, shows final actual costs. Always verify with official documents before signing.' }
]

const relatedCalcs = [
  { label: 'LTV Calculator', href: '/ltv-calculator' },
  { label: 'Mortgage Calculator', href: '/mortgage-calculator-investment' },
  { label: 'Cash-on-Cash Calculator', href: '/cash-on-cash-calculator' },
  { label: 'DSCR Calculator', href: '/dscr-calculator' },
  { label: 'Real Estate ROI', href: '/rental-property-roi-calculator' },
  { label: 'Rental Property', href: '/rental-property-calculator' },
  { label: 'Hard Money Loan', href: '/hard-money-loan-calculator' },
]

// ─── HELPER ──────────────────────────────────────────────────────────────────
function safeVal(v) { return v > 0 ? v : 0 }

// ─── CORE CALCULATIONS ─────────────────────────────────────────────────────
const safePurchasePrice = computed(() => safeVal(form.purchasePrice))
const safeDownPct = computed(() => (form.downPaymentPct > 0 && form.downPaymentPct <= 100 ? form.downPaymentPct : 0))

const downPaymentAmount = computed(() => safePurchasePrice.value * safeDownPct.value / 100)
const autoLoanAmount = computed(() => safePurchasePrice.value - downPaymentAmount.value)
const effectiveLoanAmount = computed(() => {
  if (form.loanAmountOverride > 0) return form.loanAmountOverride
  return autoLoanAmount.value
})
const loanMismatch = computed(() => {
  if (!form.loanAmountOverride || form.loanAmountOverride <= 0) return false
  return Math.abs(form.loanAmountOverride - autoLoanAmount.value) > 1
})

// Closing cost components
const originationAmount = computed(() => effectiveLoanAmount.value * safeVal(form.originationPct) / 100)
const discountPointsAmount = computed(() => effectiveLoanAmount.value * safeVal(form.discountPoints) / 100)

const grossClosingCosts = computed(() => {
  return originationAmount.value +
    discountPointsAmount.value +
    safeVal(form.titleEscrow) +
    safeVal(form.appraisalInspection) +
    safeVal(form.recordingTransfer) +
    safeVal(form.prepaids) +
    safeVal(form.otherFees)
})

const totalCredits = computed(() => safeVal(form.sellerCredit) + safeVal(form.lenderCredit))
const sellerCreditExceedsGross = computed(() => totalCredits.value > grossClosingCosts.value && grossClosingCosts.value > 0)

// Net closing costs: cannot go below 0
const netClosingCosts = computed(() => Math.max(grossClosingCosts.value - totalCredits.value, 0))

// Total cash to close = down payment + net closing costs
const totalCashToClose = computed(() => downPaymentAmount.value + netClosingCosts.value)

const closingCostPct = computed(() => {
  if (safePurchasePrice.value <= 0) return 0
  return (grossClosingCosts.value / safePurchasePrice.value) * 100
})
const closingCostPctFormatted = computed(() => closingCostPct.value.toFixed(2))

const canCalculate = computed(() => safePurchasePrice.value > 0 && safeDownPct.value > 0)
const hasResult = computed(() => canCalculate.value)

// ─── VERDICT / RIS ──────────────────────────────────────────────────────────
const verdict = computed(() => {
  if (!hasResult.value) return null
  const pct = closingCostPct.value
  if (pct < 2) return {
    label: 'Low Closing Costs',
    color: '#15803d',
    gradient: 'linear-gradient(135deg, #15803d, #166534)',
    bgClass: 'bg-green-50 border-green-200',
    subtitle: 'Below typical range — verify all costs are included'
  }
  if (pct < 3) return {
    label: 'Typical',
    color: '#1d4ed8',
    gradient: 'linear-gradient(135deg, #1d4ed8, #1e40af)',
    bgClass: 'bg-blue-50 border-blue-200',
    subtitle: 'Normal range for conventional loans'
  }
  if (pct < 4) return {
    label: 'Average',
    color: '#b45309',
    gradient: 'linear-gradient(135deg, #b45309, #92400e)',
    bgClass: 'bg-amber-50 border-amber-200',
    subtitle: 'Most financed purchases fall here'
  }
  if (pct < 5) return {
    label: 'Above Average',
    color: '#ea580c',
    gradient: 'linear-gradient(135deg, #ea580c, #c2410c)',
    bgClass: 'bg-orange-50 border-orange-200',
    subtitle: 'Review fees — you may be able to negotiate'
  }
  return {
    label: 'High Closing Costs',
    color: '#dc2626',
    gradient: 'linear-gradient(135deg, #dc2626, #b91c1c)',
    bgClass: 'bg-red-50 border-red-200',
    subtitle: 'Shop lenders and review every fee'
  }
})

// ─── DEAL CONTEXT TEXT ──────────────────────────────────────────────────────
const dealContextText = computed(() => {
  if (!hasResult.value || !verdict.value) return ''
  const pct = closingCostPct.value
  const dp = downPaymentAmount.value
  const net = netClosingCosts.value
  const total = totalCashToClose.value
  if (pct < 2) {
    return `Your estimated closing costs of ${formatCurrency(grossClosingCosts.value)} (${pct.toFixed(2)}% of price) are below the typical 2–5% range. This is common for cash deals or deals with significant seller credits. Verify you haven't missed any costs. Total cash needed: ${formatCurrency(total)} (${formatCurrency(dp)} down payment + ${formatCurrency(net)} net closing costs).`
  }
  if (pct < 3) {
    return `Your estimated closing costs of ${formatCurrency(grossClosingCosts.value)} (${pct.toFixed(2)}% of price) fall in the typical range for conventional loans with good terms. Total cash needed: ${formatCurrency(total)} — that's ${formatCurrency(dp)} down payment + ${formatCurrency(net)} in net closing costs. Budget a small cushion (5–10%) for any last-minute adjustments.`
  }
  if (pct < 4) {
    return `At ${pct.toFixed(2)}% of price, your closing costs of ${formatCurrency(grossClosingCosts.value)} are in the average range for most financed purchases. Total cash to close: ${formatCurrency(total)}. Remember — the ${formatCurrency(dp)} down payment and ${formatCurrency(net)} in closing costs are separate expenses. Confirm with your lender's Loan Estimate.`
  }
  if (pct < 5) {
    return `At ${pct.toFixed(2)}% of price, your closing costs are above average. This may include discount points, high transfer taxes, or large prepaids. Review each line item to see if any fees can be reduced. Total cash needed: ${formatCurrency(total)} (${formatCurrency(dp)} down + ${formatCurrency(net)} net costs). Consider shopping lenders.`
  }
  return `At ${pct.toFixed(2)}% of price, your estimated closing costs of ${formatCurrency(grossClosingCosts.value)} are above the typical range. Review every fee carefully — consider whether discount points are worth the upfront cost, get competing title quotes, and negotiate seller credits. Total cash to close: ${formatCurrency(total)}.`
})

// ─── REVERSE MODE: FIND MAX PRICE ──────────────────────────────────────────
const revPrice = computed(() => {
  const cash = revPriceForm.cashBudget
  const dp = revPriceForm.downPaymentPct
  const cc = revPriceForm.closingCostPct
  if (!cash || cash <= 0 || !dp || dp <= 0 || !cc || cc < 0) return null
  const totalPct = dp + cc
  if (totalPct <= 0) return null
  return cash / (totalPct / 100)
})

// ─── REVERSE MODE: FIND RESERVE ────────────────────────────────────────────
const revReserveCashToClose = computed(() => {
  const price = revReserveForm.purchasePrice
  const dp = revReserveForm.downPaymentPct
  const cc = revReserveForm.closingCostPct
  if (!price || price <= 0 || !dp || dp <= 0 || !cc || cc < 0) return null
  return price * dp / 100 + price * cc / 100
})

const revReserve6mo = computed(() => {
  const mo = revReserveForm.monthlyExpense
  if (!mo || mo <= 0) return null
  return mo * 6
})

const revReserve = computed(() => {
  if (revReserveCashToClose.value === null || revReserve6mo.value === null) return null
  return revReserveCashToClose.value + revReserve6mo.value
})

// ─── SENSITIVITY TABLE ──────────────────────────────────────────────────────
const sensitivityRows = computed(() => {
  if (!hasResult.value) return []
  const price = safePurchasePrice.value
  const dp = downPaymentAmount.value
  const currentPct = closingCostPct.value
  const steps = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
  return steps.map(pct => {
    const costs = price * pct / 100
    const total = dp + Math.max(costs - totalCredits.value, 0)
    const isCurrent = Math.abs(pct - currentPct) < 0.3
    let color = '#15803d'
    if (pct >= 5) color = '#dc2626'
    else if (pct >= 4) color = '#ea580c'
    else if (pct >= 3) color = '#b45309'
    else if (pct >= 2) color = '#1d4ed8'
    return { pct, costs, total, isCurrent, color }
  })
})

// ─── SHARE PARAMS ───────────────────────────────────────────────────────────
function buildShareParams() {
  const p = new URLSearchParams()
  if (calcMode.value !== 'calculate') p.set('cm', calcMode.value)
  if (form.purchasePrice) p.set('pp', form.purchasePrice)
  if (form.downPaymentPct) p.set('dp', form.downPaymentPct)
  if (form.loanAmountOverride) p.set('la', form.loanAmountOverride)
  if (form.originationPct) p.set('of', form.originationPct)
  if (form.discountPoints) p.set('pts', form.discountPoints)
  if (form.titleEscrow) p.set('te', form.titleEscrow)
  if (form.appraisalInspection) p.set('ai', form.appraisalInspection)
  if (form.recordingTransfer) p.set('rt', form.recordingTransfer)
  if (form.prepaids) p.set('pre', form.prepaids)
  if (form.otherFees) p.set('oth', form.otherFees)
  if (form.sellerCredit) p.set('sc', form.sellerCredit)
  if (form.lenderCredit) p.set('lc', form.lenderCredit)
  if (form.scenarioName) p.set('sn', form.scenarioName)
  // Reverse price
  if (revPriceForm.cashBudget) p.set('rcb', revPriceForm.cashBudget)
  if (revPriceForm.downPaymentPct) p.set('rdp', revPriceForm.downPaymentPct)
  if (revPriceForm.closingCostPct) p.set('rcc', revPriceForm.closingCostPct)
  // Reverse reserve
  if (revReserveForm.purchasePrice) p.set('rrp', revReserveForm.purchasePrice)
  if (revReserveForm.downPaymentPct) p.set('rrdp', revReserveForm.downPaymentPct)
  if (revReserveForm.closingCostPct) p.set('rrcc', revReserveForm.closingCostPct)
  if (revReserveForm.monthlyExpense) p.set('rrme', revReserveForm.monthlyExpense)
  return p.toString()
}

// ─── URL PARAM PARSING ──────────────────────────────────────────────────────
onMounted(() => {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  if (params.get('cm')) calcMode.value = params.get('cm')
  if (params.get('pp')) form.purchasePrice = parseFloat(params.get('pp'))
  if (params.get('dp')) form.downPaymentPct = parseFloat(params.get('dp'))
  if (params.get('la')) form.loanAmountOverride = parseFloat(params.get('la'))
  if (params.get('of')) form.originationPct = parseFloat(params.get('of'))
  if (params.get('pts')) form.discountPoints = parseFloat(params.get('pts'))
  if (params.get('te')) form.titleEscrow = parseFloat(params.get('te'))
  if (params.get('ai')) form.appraisalInspection = parseFloat(params.get('ai'))
  if (params.get('rt')) form.recordingTransfer = parseFloat(params.get('rt'))
  if (params.get('pre')) form.prepaids = parseFloat(params.get('pre'))
  if (params.get('oth')) form.otherFees = parseFloat(params.get('oth'))
  if (params.get('sc')) form.sellerCredit = parseFloat(params.get('sc'))
  if (params.get('lc')) form.lenderCredit = parseFloat(params.get('lc'))
  if (params.get('sn')) form.scenarioName = params.get('sn')
  if (params.get('rcb')) revPriceForm.cashBudget = parseFloat(params.get('rcb'))
  if (params.get('rdp')) revPriceForm.downPaymentPct = parseFloat(params.get('rdp'))
  if (params.get('rcc')) revPriceForm.closingCostPct = parseFloat(params.get('rcc'))
  if (params.get('rrp')) revReserveForm.purchasePrice = parseFloat(params.get('rrp'))
  if (params.get('rrdp')) revReserveForm.downPaymentPct = parseFloat(params.get('rrdp'))
  if (params.get('rrcc')) revReserveForm.closingCostPct = parseFloat(params.get('rrcc'))
  if (params.get('rrme')) revReserveForm.monthlyExpense = parseFloat(params.get('rrme'))
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

  doc.setFillColor(...navy)
  doc.rect(0, 0, 210, 40, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(22)
  doc.setFont('helvetica', 'bold')
  doc.text('RealCalc', 20, 20)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.text('Closing Costs Analysis Report', 20, 30)
  doc.setFontSize(9)
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, 130, 20)

  let heroValue, heroLabel
  if (calcMode.value === 'find-price') {
    heroValue = formatCurrency(revPrice.value)
    heroLabel = 'MAX PURCHASE PRICE'
  } else if (calcMode.value === 'find-reserve') {
    heroValue = formatCurrency(revReserve.value)
    heroLabel = 'TOTAL CASH NEEDED (CLOSE + RESERVE)'
  } else {
    heroValue = formatCurrency(totalCashToClose.value)
    heroLabel = 'TOTAL CASH TO CLOSE'
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
      ['Purchase Price', formatCurrency(form.purchasePrice)],
      [`Down Payment (${form.downPaymentPct}%)`, formatCurrency(downPaymentAmount.value)],
      ['Loan Amount', formatCurrency(effectiveLoanAmount.value)],
      ['Gross Closing Costs', formatCurrency(grossClosingCosts.value)],
      ['Credits', '-' + formatCurrency(totalCredits.value)],
      ['Net Closing Costs', formatCurrency(netClosingCosts.value)],
      ['Total Cash to Close', formatCurrency(totalCashToClose.value)],
      ['Closing Cost %', closingCostPctFormatted.value + '%'],
      ['Verdict', verdict.value?.label || '—'],
    ]
    rows.forEach(([label, value]) => {
      doc.setTextColor(...gray)
      doc.text(label, 20, y)
      doc.setTextColor(...navy)
      doc.setFont('helvetica', 'bold')
      doc.text(value, 190, y, { align: 'right' })
      doc.setFont('helvetica', 'normal')
      y += 7
    })
  }

  y += 10
  doc.setTextColor(...gray)
  doc.setFontSize(7)
  doc.setFont('helvetica', 'italic')
  const disclaimers = [
    'Closing costs are separate from down payment. Total cash = down payment + net closing costs.',
    'Costs vary by state, lender, and deal structure. This is an estimate, not a Closing Disclosure.',
    'This report is for informational purposes only. Not financial advice.',
  ]
  disclaimers.forEach((line, i) => {
    if (y + i * 5 < 270) doc.text(line, 20, y + i * 5)
  })

  doc.setFillColor(...navy)
  doc.rect(0, 280, 210, 17, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.text('arvcalc.com — For informational purposes only. Not financial advice.', 105, 290, { align: 'center' })

  doc.save(`closing-costs-analysis-${Date.now()}.pdf`)
}

// ─── SCENARIO SAVE / EMAIL CAPTURE ──────────────────────────────────────────
const triggerScenarioSave = ref(false)

const currentScenarioResult = computed(() => {
  if (calcMode.value === 'calculate' && hasResult.value) {
    return {
      primaryMetric: 'Total Cash to Close',
      primaryValue: formatCurrency(totalCashToClose.value),
      badgeLabel: verdict.value?.label,
      badgeColor: verdict.value?.color,
      purchasePrice: form.purchasePrice,
      downPayment: downPaymentAmount.value,
      grossClosingCosts: grossClosingCosts.value,
      netClosingCosts: netClosingCosts.value,
      closingCostPct: closingCostPct.value
    }
  }
  if (calcMode.value === 'find-price' && revPrice.value !== null) {
    return {
      primaryMetric: 'Max Purchase Price',
      primaryValue: formatCurrency(revPrice.value),
      badgeLabel: 'Max Price',
      badgeColor: '#1d4ed8',
      cashBudget: revPriceForm.cashBudget,
      downPaymentPct: revPriceForm.downPaymentPct,
      closingCostPct: revPriceForm.closingCostPct
    }
  }
  if (calcMode.value === 'find-reserve' && revReserve.value !== null) {
    return {
      primaryMetric: 'Total Cash Needed',
      primaryValue: formatCurrency(revReserve.value),
      badgeLabel: 'Reserve',
      badgeColor: '#059669',
      purchasePrice: revReserveForm.purchasePrice,
      monthlyExpense: revReserveForm.monthlyExpense
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
