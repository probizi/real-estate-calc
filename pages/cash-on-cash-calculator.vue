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
            <li class="text-gray-700 font-semibold">Cash-on-Cash Return</li>
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
            Cash-on-Cash Return Calculator — Free CoC Tool for US Rental Properties
          </h1>
        </div>

        <!-- On this page nav -->
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>

          <!-- Desktop: full list -->
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#what-is-coc" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is CoC Return</a></li>
            <li><a href="#coc-vs-cap-rate" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">CoC vs. Cap Rate</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
          </ul>

          <!-- Mobile: first 4 always visible + collapsible rest -->
          <div class="md:hidden">
            <ul class="flex flex-wrap gap-x-4 gap-y-1.5">
              <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
              <li><a href="#what-is-coc" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is CoC Return</a></li>
              <li><a href="#coc-vs-cap-rate" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">CoC vs. Cap Rate</a></li>
              <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
            </ul>

          </div>
        </div>

      </div>
    </div>

    <!-- MOBILE LIVE RESULT BAR -->
    <div class="lg:hidden sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <div class="text-sm text-gray-500 font-medium">Cash-on-Cash Return</div>
        <div class="flex items-center gap-3">
          <span v-if="hasResult" class="text-2xl font-extrabold" :style="`color: ${badge.color}`">
            {{ cashOnCash.toFixed(2) }}%
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

              <!-- Annual Cash Flow -->
              <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div class="calc-section-header">
                  <h2 class="calc-section-title">Annual Pre-Tax Cash Flow</h2>
                </div>
                <div class="p-6">
                  <div class="flex items-center gap-1 p-1 bg-gray-100 rounded-xl w-fit mb-5" role="group">
                    <button @click="inputMode = 'direct'"
                      :class="inputMode === 'direct' ? 'bg-white shadow text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-700'"
                      class="px-4 py-2 rounded-lg text-sm transition font-medium">
                      Enter Directly
                    </button>
                    <button @click="inputMode = 'breakdown'"
                      :class="inputMode === 'breakdown' ? 'bg-white shadow text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-700'"
                      class="px-4 py-2 rounded-lg text-sm transition font-medium">
                      Build from Scratch
                    </button>
                  </div>

                  <!-- Direct mode -->
                  <div v-if="inputMode === 'direct'">
                    <label for="annual-cash-flow" class="block text-sm font-semibold text-gray-700 mb-1.5">Annual Pre-Tax Cash Flow</label>
                    <div class="relative">
                      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                      <input id="annual-cash-flow" v-model.number="form.annualCashFlow" type="number" step="100" placeholder="e.g. 6,000"
                        class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                    </div>
                    <p class="text-xs text-gray-400 mt-1">Gross rent − all operating expenses − annual mortgage payments</p>
                  </div>

                  <!-- Breakdown mode -->
                  <div v-if="inputMode === 'breakdown'" class="space-y-4">
                    <div>
                      <label for="gross-rent" class="block text-sm font-semibold text-gray-700 mb-1.5">Annual Gross Rent</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                        <input id="gross-rent" v-model.number="form.grossRent" type="number" min="0" step="100" placeholder="e.g. 24,000"
                          class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                      </div>
                    </div>
                    <div>
                      <label for="vacancy-loss" class="block text-sm font-semibold text-gray-700 mb-1.5">Vacancy Loss</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                        <input id="vacancy-loss" v-model.number="form.vacancyLoss" type="number" min="0" step="100" placeholder="e.g. 1,200"
                          class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                      </div>
                    </div>
                    <div>
                      <label for="annual-expenses" class="block text-sm font-semibold text-gray-700 mb-1.5">Annual Operating Expenses</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                        <input id="annual-expenses" v-model.number="form.annualExpenses" type="number" min="0" step="100" placeholder="e.g. 8,000"
                          class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                      </div>
                    </div>
                    <div>
                      <label for="annual-debt" class="block text-sm font-semibold text-gray-700 mb-1.5">Annual Debt Service (Mortgage)</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                        <input id="annual-debt" v-model.number="form.annualDebtService" type="number" min="0" step="100" placeholder="e.g. 12,000"
                          class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                      </div>
                    </div>
                    <div v-if="computedCashFlow !== 0" class="p-3 rounded-xl text-sm font-medium bg-blue-50 border border-blue-100 text-blue-800">
                      Calculated Annual Cash Flow: <span class="font-bold">{{ formatCurrency(computedCashFlow) }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Total Cash Invested -->
              <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div class="calc-section-header">
                  <h2 class="calc-section-title">Total Cash Invested</h2>
                </div>
                <div class="p-6 space-y-4">
                  <div>
                    <label for="down-payment" class="block text-sm font-semibold text-gray-700 mb-1.5">Down Payment</label>
                    <div class="relative">
                      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                      <input id="down-payment" v-model.number="form.downPayment" type="number" min="0" step="1000" placeholder="e.g. 60,000"
                        class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                    </div>
                  </div>
                  <div>
                    <label for="closing-costs" class="block text-sm font-semibold text-gray-700 mb-1.5">Closing Costs</label>
                    <div class="relative">
                      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                      <input id="closing-costs" v-model.number="form.closingCosts" type="number" min="0" step="500" placeholder="e.g. 5,000"
                        class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                    </div>
                  </div>
                  <div>
                    <label for="rehab-costs" class="block text-sm font-semibold text-gray-700 mb-1.5">Rehab / Repair Costs</label>
                    <div class="relative">
                      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                      <input id="rehab-costs" v-model.number="form.rehabCosts" type="number" min="0" step="500" placeholder="e.g. 10,000"
                        class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                    </div>
                    <p class="text-xs text-gray-400 mt-1">Any upfront repairs before renting</p>
                  </div>
                  <div class="pt-2 border-t border-gray-100 flex justify-between items-center text-sm">
                    <span class="text-gray-500 font-medium">Total Cash Invested</span>
                    <span class="font-bold" style="color: #1e3a5f;">{{ formatCurrency(totalCashInvested) }}</span>
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
                    <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Cash-on-Cash Return</p>
                    <div class="flex items-end gap-1.5 mb-3">
                      <span class="text-6xl font-extrabold leading-none" style="color:#1e3a5f;">{{ cashOnCash.toFixed(2) }}</span>
                      <span class="text-3xl font-bold mb-1 text-gray-400">%</span>
                    </div>
                    <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full"
                      :style="`background: ${badge.bg}; color: ${badge.textColor}`">
                      {{ badge.label }}
                    </span>
                    <p class="text-gray-400 text-xs mt-2">Annual cash flow ÷ total cash invested × 100</p>
                  </div>
                </div>

                <div v-else class="rounded-xl p-8 text-center border border-dashed border-gray-200 bg-white">
                  <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                    <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                  <p class="text-gray-400 font-medium text-sm">Enter cash flow &amp; total<br>cash invested to calculate</p>
                  <p class="text-gray-300 text-xs mt-1">Results update in real time</p>
                </div>

                <!-- Formula breakdown -->
                <div v-if="hasResult" class="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
                  <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400">Calculation</h3>
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between">
                      <span class="text-gray-500">Annual Cash Flow</span>
                      <span class="font-semibold" :class="effectiveCashFlow >= 0 ? 'text-green-600' : 'text-red-500'">{{ formatCurrency(effectiveCashFlow) }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-500">÷ Total Cash Invested</span>
                      <span class="font-semibold">{{ formatCurrency(totalCashInvested) }}</span>
                    </div>
                    <div class="flex justify-between font-bold border-t border-gray-100 pt-2 text-base" style="color: #1e3a5f;">
                      <span>= CoC Return</span>
                      <span>{{ cashOnCash.toFixed(2) }}%</span>
                    </div>
                  </div>
                </div>

                <!-- Benchmarks -->
                <div class="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">US Market Benchmarks</h3>
                  <div class="space-y-2">
                    <div v-for="bm in benchmarks" :key="bm.label" class="flex items-center gap-3">
                      <div class="w-2 h-2 rounded-full flex-shrink-0" :style="`background: ${bm.color}`"></div>
                      <div class="flex justify-between w-full text-sm">
                        <span class="text-gray-600">{{ bm.label }}</span>
                        <span class="font-semibold text-gray-900">{{ bm.range }}</span>
                      </div>
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

            <!-- What is CoC -->
            <div id="what-is-coc" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What Is Cash-on-Cash Return in Real Estate?</h2>
              <p class="text-gray-600 leading-relaxed mb-4">
                <strong>Cash-on-cash return (CoC)</strong> measures the annual pre-tax cash flow you receive as a percentage of the total cash you invested in a property. Unlike cap rate (which ignores financing), CoC reflects the actual impact of your mortgage — making it the most relevant yield metric for leveraged real estate investors.
              </p>
              <div class="p-4 rounded-xl text-center font-bold text-lg mb-4" style="background: #f0f4f8; color: #1e3a5f;">
                Cash-on-Cash Return = Annual Pre-Tax Cash Flow ÷ Total Cash Invested × 100
              </div>
              <p class="text-gray-600 leading-relaxed mb-3">
                <strong>Example:</strong> You invest $70,000 in a property (down payment + closing costs + repairs) and the property generates $5,600 in annual cash flow after all expenses and mortgage payments. Your cash-on-cash return = $5,600 ÷ $70,000 × 100 = <strong>8%</strong>.
              </p>
              <p class="text-gray-600 leading-relaxed">
                CoC is a before-tax metric — it does not account for depreciation, mortgage interest deduction, or other tax benefits of real estate ownership. The after-tax return is typically higher, especially in the early years of a loan when interest (tax-deductible) makes up most of the payment.
              </p>
            </div>

            <!-- CoC vs Cap Rate -->
            <div id="coc-vs-cap-rate" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Cash-on-Cash Return vs. Cap Rate: What's the Difference?</h2>
              <div class="grid md:grid-cols-2 gap-5 mb-4">
                <div class="p-5 rounded-xl bg-amber-50 border border-amber-100">
                  <p class="font-bold mb-2" style="color:#92400e;">Cap Rate</p>
                  <ul class="text-sm text-amber-900 space-y-2">
                    <li>• Measures unlevered yield (ignores financing)</li>
                    <li>• Based on NOI ÷ Property Value</li>
                    <li>• Same for all buyers regardless of down payment</li>
                    <li>• Best for comparing properties head-to-head</li>
                    <li>• Used by lenders and appraisers</li>
                  </ul>
                </div>
                <div class="p-5 rounded-xl bg-blue-50 border border-blue-100">
                  <p class="font-bold text-blue-800 mb-2">Cash-on-Cash Return</p>
                  <ul class="text-sm text-blue-900 space-y-2">
                    <li>• Measures levered yield (includes your mortgage)</li>
                    <li>• Based on Annual Cash Flow ÷ Cash Invested</li>
                    <li>• Varies based on your down payment and rate</li>
                    <li>• Best for evaluating your personal return</li>
                    <li>• Used by investors to compare deals</li>
                  </ul>
                </div>
              </div>
              <p class="text-gray-600 text-sm leading-relaxed">
                A property can have a 6% cap rate but deliver a 10% cash-on-cash return if leveraged at favorable terms — or a 3% CoC return if purchased in cash with no financing benefit. Both metrics matter; neither alone tells the full story.
              </p>
            </div>

            <!-- FAQ -->
            <div id="faq" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions — Cash-on-Cash Return</h2>
              <div class="space-y-5">
                <div class="border-b border-gray-100 pb-5">
                  <h3 class="font-bold text-gray-800 mb-2">What is a good cash-on-cash return?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Most experienced investors target 6–12% CoC return in the US. In competitive markets (CA, NY, CO), 3–5% may be acceptable if appreciation upside is strong. In cash-flow markets (GA, OH, IN, TX suburbs), 8–12% CoC is achievable. Below 4% CoC with no strong appreciation case is generally a poor use of capital.</p>
                </div>
                <div class="border-b border-gray-100 pb-5">
                  <h3 class="font-bold text-gray-800 mb-2">Can cash-on-cash return be negative?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Yes. A negative CoC return means the property loses money after all costs including the mortgage. This is common for new acquisitions in high-cost markets, heavily leveraged deals in low-cap rate environments, or properties with significant deferred maintenance. Some investors accept negative CoC in exchange for strong appreciation expectations.</p>
                </div>
                <div class="border-b border-gray-100 pb-5">
                  <h3 class="font-bold text-gray-800 mb-2">Does CoC include property appreciation?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">No. Cash-on-cash return only measures cash flow from operations — it does not include appreciation, principal paydown, or tax benefits. Your total return on investment (ROI) will include all these components. CoC is specifically an income-yield metric measuring the cash return on your invested capital.</p>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-2">How does leverage affect cash-on-cash return?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Leverage amplifies CoC returns when property yield exceeds borrowing cost. If a property has a 7% cap rate and you borrow at 6% interest, leverage increases your CoC above 7%. But when borrowing costs exceed the cap rate (negative leverage), more debt reduces CoC. In 2025–2026 with elevated interest rates, many deals are negatively leveraged — the cap rate is below the mortgage rate.</p>
                </div>
              </div>
            </div>

            <!-- Related CTA -->
            <div class="rounded-2xl p-8 text-white" style="background: #1e3a5f;">
              <h2 class="text-xl font-extrabold mb-2">Build the Full Picture</h2>
              <p class="text-blue-200 text-sm mb-6 leading-relaxed">Cash-on-cash return is one piece of the puzzle. Use our calculators together for a complete investment analysis.</p>
              <div class="grid sm:grid-cols-3 gap-3">
                <NuxtLink to="/cap-rate-calculator" class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
                  <p class="font-bold text-sm">Cap Rate</p>
                  <p class="text-xs text-blue-300 mt-0.5">Unlevered yield</p>
                </NuxtLink>
                <NuxtLink to="/noi-calculator" class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
                  <p class="font-bold text-sm">NOI Calculator</p>
                  <p class="text-xs text-blue-300 mt-0.5">Calculate cash flow input</p>
                </NuxtLink>
                <NuxtLink to="/rental-property-calculator" class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
                  <p class="font-bold text-sm">Full Analysis</p>
                  <p class="text-xs text-blue-300 mt-0.5">All metrics combined</p>
                </NuxtLink>
              </div>
            </div>

          </div>
          <!-- /SEO CONTENT -->
    </main>

  </div>
</template>

<script setup>
const isNavExpanded = ref(false)
import { reactive, ref, computed } from 'vue'

useHead({
  title: 'Cash-on-Cash Return Calculator — Rental Property CoC | RealCalc',
  meta: [
    { name: 'description', content: 'Free Cash-on-Cash Return Calculator for US real estate investors. Calculate CoC return instantly from annual cash flow and total cash invested. Includes US market benchmarks and comparison with cap rate.' },
    { property: 'og:title', content: 'Cash-on-Cash Return Calculator | RealCalc' },
    { property: 'og:description', content: 'Calculate your cash-on-cash return on any US rental property. Real-time results with Good/Average/Poor rating and market benchmarks.' },
  ]
})

// ── Form State ────────────────────────────────────────────────────────────────
const inputMode = ref('direct')

const form = reactive({
  // Direct mode
  annualCashFlow:    null,
  // Breakdown mode
  grossRent:         null,
  vacancyLoss:       null,
  annualExpenses:    null,
  annualDebtService: null,
  // Cash invested
  downPayment:   null,
  closingCosts:  null,
  rehabCosts:    null,
})

// ── Cash Flow ─────────────────────────────────────────────────────────────────
const computedCashFlow = computed(() => {
  const rent    = Number(form.grossRent) || 0
  const vacancy = Number(form.vacancyLoss) || 0
  const expenses= Number(form.annualExpenses) || 0
  const debt    = Number(form.annualDebtService) || 0
  return rent - vacancy - expenses - debt
})

const effectiveCashFlow = computed(() =>
  inputMode.value === 'direct'
    ? (form.annualCashFlow !== null ? Number(form.annualCashFlow) : 0)
    : computedCashFlow.value
)

// ── Cash Invested ─────────────────────────────────────────────────────────────
const totalCashInvested = computed(() =>
  (Number(form.downPayment) || 0) +
  (Number(form.closingCosts) || 0) +
  (Number(form.rehabCosts) || 0)
)

// ── Result ────────────────────────────────────────────────────────────────────
const cashOnCash = computed(() =>
  totalCashInvested.value > 0
    ? (effectiveCashFlow.value / totalCashInvested.value) * 100
    : 0
)

const hasResult = computed(() => {
  const hasCF = inputMode.value === 'direct'
    ? form.annualCashFlow !== null && form.annualCashFlow !== ''
    : (Number(form.grossRent) || 0) > 0
  return hasCF && totalCashInvested.value > 0
})

const badge = computed(() => {
  const c = cashOnCash.value
  if (c >= 10) return { label: 'Excellent',      color: '#16a34a', bg: 'rgba(22,163,74,0.2)',    textColor: '#86efac' }
  if (c >= 8)  return { label: 'Strong',         color: '#2563eb', bg: 'rgba(37,99,235,0.2)',    textColor: '#93c5fd' }
  if (c >= 5)  return { label: 'Acceptable',     color: '#d97706', bg: 'rgba(217,119,6,0.2)',    textColor: '#fcd34d' }
  if (c >= 0)  return { label: 'Below Average',  color: '#f97316', bg: 'rgba(249,115,22,0.2)',   textColor: '#fed7aa' }
  return         { label: 'Negative',            color: '#dc2626', bg: 'rgba(220,38,38,0.2)',    textColor: '#fca5a5' }
})

// ── Static Data ───────────────────────────────────────────────────────────────
const benchmarks = [
  { label: 'Cash-flow markets (GA, OH, IN)', range: '8–12%', color: '#16a34a' },
  { label: 'Secondary markets (TX, AZ, FL)', range: '5–8%',  color: '#2563eb' },
  { label: 'Major metros (NY, LA, Denver)',   range: '2–5%',  color: '#d97706' },
  { label: 'High-cost coastal (SF, NYC)',     range: '0–3%',  color: '#dc2626' },
]

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatCurrency(val) {
  const n = Number(val) || 0
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}
</script>
