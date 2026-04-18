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
            <li class="text-gray-700 font-semibold">DSCR Calculator</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- PAGE TITLE + ON THIS PAGE NAV -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-6">

        <!-- H1 -->
        <div class="mb-4">
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            DSCR Calculator — Free Debt Service Coverage Ratio Tool for US Investors
          </h1>
        </div>

        <!-- On this page nav -->
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>

          <!-- Desktop: full list -->
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#what-is-dscr" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is DSCR</a></li>
            <li><a href="#dscr-loans" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">DSCR Loans</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
          </ul>

          <!-- Mobile: first 4 always visible + collapsible rest -->
          <div class="md:hidden">
            <ul class="flex flex-wrap gap-x-4 gap-y-1.5">
              <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
              <li><a href="#what-is-dscr" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is DSCR</a></li>
              <li><a href="#dscr-loans" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">DSCR Loans</a></li>
              <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
            </ul>

          </div>
        </div>

      </div>
    </div>

    <!-- MOBILE LIVE RESULT BAR -->
    <div class="lg:hidden sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <div class="text-sm text-gray-500 font-medium">DSCR</div>
        <div class="flex items-center gap-3">
          <span v-if="hasResult" class="text-2xl font-extrabold" :style="`color: ${badge.color}`">
            {{ dscr.toFixed(2) }}x
          </span>
          <span v-else class="text-2xl font-bold text-gray-200">—</span>
          <span v-if="hasResult" class="text-xs font-bold px-2.5 py-1 rounded-full text-white"
            :style="`background: ${badge.color}`">{{ badge.label }}</span>
        </div>
      </div>
    </div>

    <!-- MAIN -->
    <main id="calculator" class="max-w-[1100px] mx-auto px-4 pt-8 pb-10">
      <div class="bg-white rounded-2xl shadow-xl" style="border: 1px solid #e5e7eb; border-top: 3px solid #f59e0b;">
          <div class="lg:grid lg:grid-cols-[3fr_2fr] items-stretch">

            <!-- INPUTS (3 cols) -->
            <div class="calc-inputs space-y-6">

              <!-- NOI / Income -->
              <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div class="calc-section-header">
                  <h2 class="calc-section-title">Net Operating Income</h2>
                </div>
                <div class="p-6">
                  <div class="flex items-center gap-1 p-1 bg-gray-100 rounded-xl w-fit mb-5" role="group">
                    <button @click="noiMode = 'direct'"
                      :class="noiMode === 'direct' ? 'bg-white shadow text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-700'"
                      class="px-4 py-2 rounded-lg text-sm transition font-medium">
                      Enter NOI Directly
                    </button>
                    <button @click="noiMode = 'calculate'"
                      :class="noiMode === 'calculate' ? 'bg-white shadow text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-700'"
                      class="px-4 py-2 rounded-lg text-sm transition font-medium">
                      Calculate from Rent
                    </button>
                  </div>

                  <!-- Direct NOI -->
                  <div v-if="noiMode === 'direct'">
                    <label for="annual-noi" class="block text-sm font-semibold text-gray-700 mb-1.5">Annual NOI</label>
                    <div class="relative">
                      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                      <input id="annual-noi" v-model.number="form.annualNOI" type="number" min="0" step="100" placeholder="e.g. 30,000"
                        class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                    </div>
                    <p class="text-xs text-gray-400 mt-1">Gross rent − vacancy − operating expenses (exclude mortgage)</p>
                  </div>

                  <!-- Calculate from rent -->
                  <div v-if="noiMode === 'calculate'" class="space-y-4">
                    <div>
                      <label for="monthly-rent" class="block text-sm font-semibold text-gray-700 mb-1.5">Monthly Rent (All Units)</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                        <input id="monthly-rent" v-model.number="form.monthlyRent" type="number" min="0" step="50" placeholder="e.g. 3,000"
                          class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div>
                        <label for="vacancy-pct" class="block text-sm font-semibold text-gray-700 mb-1.5">Vacancy Rate</label>
                        <div class="relative">
                          <input id="vacancy-pct" v-model.number="form.vacancyRate" type="number" min="0" max="100" step="0.5" placeholder="e.g. 5"
                            class="w-full pr-8 pl-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                        </div>
                      </div>
                      <div>
                        <label for="expense-ratio" class="block text-sm font-semibold text-gray-700 mb-1.5">Expense Ratio</label>
                        <div class="relative">
                          <input id="expense-ratio" v-model.number="form.expenseRatio" type="number" min="0" max="100" step="1" placeholder="e.g. 40"
                            class="w-full pr-8 pl-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                        </div>
                        <p class="text-xs text-gray-400 mt-1">Typical: 35–50%</p>
                      </div>
                    </div>
                    <div v-if="calculatedNOI > 0" class="p-3 rounded-xl text-sm font-medium bg-blue-50 border border-blue-100 text-blue-800">
                      Calculated Annual NOI: <span class="font-bold">{{ formatCurrency(calculatedNOI) }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Debt Service -->
              <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div class="calc-section-header">
                  <h2 class="calc-section-title">Annual Debt Service</h2>
                </div>
                <div class="p-6">
                  <div class="flex items-center gap-1 p-1 bg-gray-100 rounded-xl w-fit mb-5" role="group">
                    <button @click="debtMode = 'direct'"
                      :class="debtMode === 'direct' ? 'bg-white shadow text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-700'"
                      class="px-4 py-2 rounded-lg text-sm transition font-medium">
                      Enter Directly
                    </button>
                    <button @click="debtMode = 'calculate'"
                      :class="debtMode === 'calculate' ? 'bg-white shadow text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-700'"
                      class="px-4 py-2 rounded-lg text-sm transition font-medium">
                      Calculate from Loan
                    </button>
                  </div>

                  <div v-if="debtMode === 'direct'">
                    <label for="annual-debt" class="block text-sm font-semibold text-gray-700 mb-1.5">Annual Debt Service (P+I)</label>
                    <div class="relative">
                      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                      <input id="annual-debt" v-model.number="form.annualDebtService" type="number" min="0" step="100" placeholder="e.g. 24,000"
                        class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                    </div>
                    <p class="text-xs text-gray-400 mt-1">Total annual principal + interest payments</p>
                  </div>

                  <div v-if="debtMode === 'calculate'" class="space-y-4">
                    <div>
                      <label for="loan-amount" class="block text-sm font-semibold text-gray-700 mb-1.5">Loan Amount</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                        <input id="loan-amount" v-model.number="form.loanAmount" type="number" min="0" step="5000" placeholder="e.g. 240,000"
                          class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div>
                        <label for="int-rate" class="block text-sm font-semibold text-gray-700 mb-1.5">Interest Rate</label>
                        <div class="relative">
                          <input id="int-rate" v-model.number="form.interestRate" type="number" min="0" max="30" step="0.125" placeholder="e.g. 7.25"
                            class="w-full pr-8 pl-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                          <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                        </div>
                      </div>
                      <div>
                        <label for="loan-term" class="block text-sm font-semibold text-gray-700 mb-1.5">Loan Term</label>
                        <select id="loan-term" v-model.number="form.loanTerm"
                          class="w-full px-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition bg-white">
                          <option :value="30">30 years</option>
                          <option :value="20">20 years</option>
                          <option :value="15">15 years</option>
                          <option :value="10">10 years</option>
                        </select>
                      </div>
                    </div>
                    <div v-if="calculatedMonthlyPayment > 0" class="p-3 rounded-xl text-sm font-medium bg-blue-50 border border-blue-100 text-blue-800">
                      Monthly P&amp;I: <span class="font-bold">{{ formatCurrency(calculatedMonthlyPayment) }}</span>
                      &nbsp;·&nbsp; Annual: <span class="font-bold">{{ formatCurrency(calculatedAnnualDebt) }}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <!-- RESULTS (2 cols) -->
            <div class="self-stretch rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl border-t border-gray-200 lg:border-t-0 lg:border-l bg-gray-50">
              <!-- NOTE: overflow must be on the INNER div — overflow on a sticky element breaks stickiness in CSS spec -->
              <div class="lg:sticky lg:top-[4.5rem] lg:self-stretch min-w-0 w-full bg-gray-50 flex flex-col">
              <div class="lg:h-full lg:overflow-y-auto space-y-4 p-4 lg:p-5 scrollbar-thin">

                <!-- Main Result -->
                <div v-if="hasResult" class="rounded-xl border border-gray-200 bg-white overflow-hidden">
                  <div class="px-5 py-5 border-b border-gray-100">
                    <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">DSCR</p>
                    <div class="flex items-end gap-1.5 mb-3">
                      <span class="text-6xl font-extrabold leading-none"
                        :class="dscr < 1.0 ? 'text-red-600' : dscr < 1.25 ? 'text-amber-600' : ''"
                        :style="dscr >= 1.25 ? 'color:#1e3a5f;' : ''">
                        {{ dscr.toFixed(2) }}
                      </span>
                      <span class="text-2xl font-bold mb-1 text-gray-400">x</span>
                    </div>
                    <div class="mb-3">
                      <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full"
                        :style="`background: ${badge.bg}; color: ${badge.textColor}`">
                        {{ badge.label }}
                      </span>
                    </div>
                    <div class="text-xs text-gray-500 space-y-1">
                      <div class="flex justify-between"><span>NOI</span><span class="font-semibold text-gray-700">{{ formatCurrency(effectiveNOI) }}/yr</span></div>
                      <div class="flex justify-between"><span>Debt Service</span><span class="font-semibold text-gray-700">{{ formatCurrency(effectiveDebtService) }}/yr</span></div>
                    </div>
                  </div>
                </div>

                <div v-else class="rounded-xl p-8 text-center border border-dashed border-gray-200 bg-white">
                  <svg class="w-10 h-10 text-gray-200 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                  <p class="text-gray-400 font-medium text-sm">Enter NOI and debt service<br>to calculate DSCR</p>
                  <p class="text-gray-300 text-xs mt-1">Results update in real time</p>
                </div>

                <!-- Formula -->
                <div v-if="hasResult" class="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
                  <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400">Calculation</h3>
                  <div class="text-center py-2">
                    <p class="text-sm text-gray-500 mb-1">DSCR = Annual NOI ÷ Annual Debt Service</p>
                    <p class="text-lg font-bold" style="color: #1e3a5f;">
                      {{ formatCurrency(effectiveNOI) }} ÷ {{ formatCurrency(effectiveDebtService) }} = {{ dscr.toFixed(2) }}x
                    </p>
                  </div>
                </div>

                <!-- Lender Benchmarks -->
                <div class="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Lender Requirements</h3>
                  <div class="space-y-3">
                    <div v-for="lender in lenderBenchmarks" :key="lender.type"
                      class="flex items-start gap-3 p-3 rounded-xl"
                      :class="hasResult && dscr >= lender.minDSCR ? 'bg-green-50 border border-green-100' : 'bg-gray-50'">
                      <div class="w-4 h-4 rounded-full flex-shrink-0 mt-0.5"
                        :class="hasResult && dscr >= lender.minDSCR ? 'bg-green-500' : 'bg-gray-300'"></div>
                      <div>
                        <p class="text-sm font-bold text-gray-800">{{ lender.type }}</p>
                        <p class="text-xs text-gray-500">Min DSCR: {{ lender.minDSCR }}x — {{ lender.notes }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Min NOI needed -->
                <div v-if="effectiveDebtService > 0" class="bg-white rounded-2xl border border-gray-200 p-5">
                  <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Minimum NOI to Qualify</h3>
                  <div class="space-y-2 text-sm">
                    <div v-for="threshold in [1.0, 1.1, 1.25, 1.35]" :key="threshold"
                      class="flex justify-between items-center px-2 py-1.5 rounded-lg"
                      :class="effectiveNOI >= effectiveDebtService * threshold ? 'bg-green-50' : 'bg-gray-50'">
                      <span class="text-gray-600">DSCR {{ threshold }}x</span>
                      <span class="font-bold" :class="effectiveNOI >= effectiveDebtService * threshold ? 'text-green-600' : 'text-red-500'">
                        {{ formatCurrency(effectiveDebtService * threshold) }}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
              </div>
            </div>

          </div>

      </div>

          <!-- ══════════ SEO CONTENT SECTION ══════════ -->
          <div class="mt-12 space-y-8">

            <!-- What is DSCR -->
            <div id="what-is-dscr" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What Is DSCR in Real Estate?</h2>
              <p class="text-gray-600 leading-relaxed mb-4">
                The <strong>Debt Service Coverage Ratio (DSCR)</strong> measures a property's ability to cover its debt payments from its own income. It is the primary metric lenders use to underwrite investment property loans — especially DSCR loans that do not require personal income verification.
              </p>
              <div class="p-4 rounded-xl text-center font-bold text-lg mb-4" style="background: #f0f4f8; color: #1e3a5f;">
                DSCR = Annual NOI ÷ Annual Debt Service (P + I)
              </div>
              <p class="text-gray-600 leading-relaxed mb-3">
                A DSCR of <strong>1.0x</strong> means the property's net income exactly covers its mortgage — no profit, no loss on debt. A DSCR of <strong>1.25x</strong> means income covers 125% of debt obligations, providing a 25% safety cushion. Most commercial and DSCR loan programs require a minimum of 1.20–1.25x.
              </p>
              <p class="text-gray-600 leading-relaxed">
                DSCR below 1.0x means the property cannot service its own debt — the owner must contribute cash each month to cover the shortfall. This is common in appreciation-focused markets like SF, NYC, or LA, where investors accept negative cash flow in exchange for price growth.
              </p>
            </div>

            <!-- DSCR Loans -->
            <div id="dscr-loans" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">DSCR Loans: How They Work for Real Estate Investors</h2>
              <p class="text-gray-600 leading-relaxed mb-4">
                DSCR loans (also called investor cash flow loans) qualify borrowers based on the rental property's income — not the borrower's personal W-2 income, tax returns, or debt-to-income ratio. This makes them ideal for self-employed investors, those with multiple properties, and anyone who has "written off" income.
              </p>
              <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div class="p-4 rounded-xl bg-green-50 border border-green-100">
                  <p class="font-bold text-green-800 text-sm mb-2">DSCR Loan Advantages</p>
                  <ul class="text-xs text-green-700 space-y-1.5">
                    <li>• No personal income verification required</li>
                    <li>• Works for LLCs and trusts</li>
                    <li>• Scale to unlimited properties</li>
                    <li>• Close in 30 days or less</li>
                    <li>• Available for SFR, 2–4 units, condos, STRs</li>
                  </ul>
                </div>
                <div class="p-4 rounded-xl bg-amber-50 border border-amber-100">
                  <p class="font-bold text-amber-800 text-sm mb-2">Typical DSCR Loan Requirements</p>
                  <ul class="text-xs text-amber-700 space-y-1.5">
                    <li>• Minimum DSCR: 1.0–1.25x (varies by lender)</li>
                    <li>• Down payment: 20–25%</li>
                    <li>• Credit score: 680+ (720+ for best rates)</li>
                    <li>• Property must be non-owner-occupied</li>
                    <li>• Rates typically 0.5–1.5% above conventional</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- FAQ -->
            <div id="faq" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions — DSCR</h2>
              <div class="space-y-5">
                <div class="border-b border-gray-100 pb-5">
                  <h3 class="font-bold text-gray-800 mb-2">What DSCR do most lenders require?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Most conventional and portfolio lenders require a minimum DSCR of 1.20–1.25x. Some DSCR loan programs allow as low as 1.0x for strong borrowers with significant reserves. Below 1.0x, the property is cash-flow negative and most lenders will not fund it without additional collateral or buydown.</p>
                </div>
                <div class="border-b border-gray-100 pb-5">
                  <h3 class="font-bold text-gray-800 mb-2">Does DSCR use gross rent or NOI?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">DSCR uses NOI — not gross rent. NOI already deducts vacancy and operating expenses. The formula is: DSCR = Annual NOI ÷ Annual Debt Service. Some DSCR lenders use a simplified calculation based on gross rent minus PITIA (principal, interest, taxes, insurance, and association dues), but pure NOI-based DSCR is the institutional standard.</p>
                </div>
                <div class="border-b border-gray-100 pb-5">
                  <h3 class="font-bold text-gray-800 mb-2">How do I improve my DSCR?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Three levers: (1) increase NOI by raising rents or reducing vacancy; (2) reduce debt service by increasing down payment, buying down the rate, or extending the loan term; (3) negotiate a lower purchase price. A larger down payment directly reduces debt service and improves DSCR — sometimes a 5% higher down payment can push a marginal deal over the 1.25x threshold.</p>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-2">What rent does the lender use to calculate DSCR?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Most DSCR lenders use the lesser of: (1) actual current rent on a lease, or (2) market rent from a Fannie Mae Form 1007 or 1025 appraisal. If the property is vacant or below market, the appraiser's market rent opinion controls. Always ask your lender upfront which figure they will use.</p>
                </div>
              </div>
            </div>

            <!-- Related CTA -->
            <div class="rounded-2xl p-8 text-white" style="background: #1e3a5f;">
              <h2 class="text-xl font-extrabold mb-2">Complete Your Financing Analysis</h2>
              <p class="text-blue-200 text-sm mb-6 leading-relaxed">DSCR tells you if you can get the loan. These calculators tell you if the deal is worth making.</p>
              <div class="grid sm:grid-cols-3 gap-3">
                <NuxtLink to="/noi-calculator" class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
                  <p class="font-bold text-sm">NOI Calculator</p>
                  <p class="text-xs text-blue-300 mt-0.5">Calculate your NOI first</p>
                </NuxtLink>
                <NuxtLink to="/cap-rate-calculator" class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
                  <p class="font-bold text-sm">Cap Rate</p>
                  <p class="text-xs text-blue-300 mt-0.5">Compare property yields</p>
                </NuxtLink>
                <NuxtLink to="/rental-property-calculator" class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
                  <p class="font-bold text-sm">Full Analysis</p>
                  <p class="text-xs text-blue-300 mt-0.5">All metrics in one place</p>
                </NuxtLink>
              </div>
            </div>

          </div>
          <!-- /SEO CONTENT -->
    </main>

    <!-- FAQ JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is DSCR in real estate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DSCR (Debt Service Coverage Ratio) measures a property's ability to cover its mortgage from its own income. Formula: DSCR = Annual NOI ÷ Annual Debt Service. A DSCR of 1.25x means income covers 125% of debt obligations."
          }
        },
        {
          "@type": "Question",
          "name": "What DSCR do lenders require for investment property loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most lenders require a minimum DSCR of 1.20-1.25x. Some DSCR loan programs allow as low as 1.0x for strong borrowers. Below 1.0x the property is cash-flow negative and most lenders will not fund without additional collateral."
          }
        },
        {
          "@type": "Question",
          "name": "How do DSCR loans work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DSCR loans qualify borrowers based on the rental property's income, not personal W-2 income or tax returns. They require 20-25% down payment, 680+ credit score, and minimum DSCR of 1.0-1.25x depending on the lender."
          }
        }
      ]
    }
    </script>

  </div>
</template>

<script setup>
const isNavExpanded = ref(false)
import { reactive, ref, computed } from 'vue'

useHead({
  title: 'DSCR Calculator — Debt Service Coverage Ratio for Rental Properties | RealCalc',
  meta: [
    { name: 'description', content: 'Free DSCR Calculator for real estate investors. Calculate Debt Service Coverage Ratio instantly. Includes lender qualification thresholds, DSCR loan requirements, and minimum NOI analysis for US rental properties.' },
    { property: 'og:title', content: 'DSCR Calculator | RealCalc' },
    { property: 'og:description', content: 'Calculate DSCR for any investment property. Real-time results with lender qualification benchmarks and minimum NOI requirements.' },
  ]
})

// ── Form State ────────────────────────────────────────────────────────────────
const noiMode  = ref('direct')
const debtMode = ref('direct')

const form = reactive({
  // NOI direct
  annualNOI:        null,
  // NOI from rent
  monthlyRent:      null,
  vacancyRate:      null,
  expenseRatio:     null,
  // Debt direct
  annualDebtService: null,
  // Debt from loan
  loanAmount:       null,
  interestRate:     null,
  loanTerm:         30,
})

// ── Computed NOI ──────────────────────────────────────────────────────────────
const calculatedNOI = computed(() => {
  const rent = (Number(form.monthlyRent) || 0) * 12
  const egi  = rent * (1 - (Number(form.vacancyRate) || 0) / 100)
  return egi * (1 - (Number(form.expenseRatio) || 0) / 100)
})

const effectiveNOI = computed(() =>
  noiMode.value === 'direct'
    ? (Number(form.annualNOI) || 0)
    : calculatedNOI.value
)

// ── Computed Debt Service ─────────────────────────────────────────────────────
const calculatedMonthlyPayment = computed(() => {
  const p = Number(form.loanAmount) || 0
  const r = (Number(form.interestRate) || 0) / 100 / 12
  const n = (Number(form.loanTerm) || 30) * 12
  if (p <= 0 || r <= 0) return 0
  return p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
})

const calculatedAnnualDebt = computed(() => calculatedMonthlyPayment.value * 12)

const effectiveDebtService = computed(() =>
  debtMode.value === 'direct'
    ? (Number(form.annualDebtService) || 0)
    : calculatedAnnualDebt.value
)

// ── DSCR ──────────────────────────────────────────────────────────────────────
const dscr = computed(() =>
  effectiveDebtService.value > 0
    ? effectiveNOI.value / effectiveDebtService.value
    : 0
)

const hasResult = computed(() =>
  effectiveNOI.value > 0 && effectiveDebtService.value > 0
)

const badge = computed(() => {
  const d = dscr.value
  if (d >= 1.35) return { label: 'Strong', color: '#16a34a', bg: 'rgba(22,163,74,0.2)', textColor: '#86efac' }
  if (d >= 1.25) return { label: 'Approved', color: '#2563eb', bg: 'rgba(37,99,235,0.2)', textColor: '#93c5fd' }
  if (d >= 1.0)  return { label: 'Marginal', color: '#d97706', bg: 'rgba(217,119,6,0.2)', textColor: '#fcd34d' }
  return { label: 'Below Coverage', color: '#dc2626', bg: 'rgba(220,38,38,0.2)', textColor: '#fca5a5' }
})

// ── Static Data ───────────────────────────────────────────────────────────────
const lenderBenchmarks = [
  { type: 'DSCR Loan (standard)',      minDSCR: 1.25, notes: 'Most non-QM DSCR programs. No income docs required.' },
  { type: 'DSCR Loan (low ratio)',     minDSCR: 1.0,  notes: 'Some lenders allow down to 1.0x with higher down payment.' },
  { type: 'Commercial (bank)',         minDSCR: 1.25, notes: 'Bank portfolio loans for 5+ unit properties.' },
  { type: 'Agency / Fannie Mae',       minDSCR: 1.25, notes: 'For qualifying investment properties (1–4 units).' },
]

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatCurrency(val) {
  const n = Number(val) || 0
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}
</script>
