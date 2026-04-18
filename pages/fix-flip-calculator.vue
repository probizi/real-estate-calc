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

    <!-- PAGE HEADER (breadcrumb only) -->
    <div class="bg-white border-b border-gray-100 px-4 py-3">
      <div class="max-w-[1100px] mx-auto">
        <nav aria-label="Breadcrumb">
          <ol class="flex items-center gap-2 text-sm text-gray-400">
            <li><NuxtLink to="/" class="hover:text-gray-600 transition">Home</NuxtLink></li>
            <li><span>/</span></li>
            <li><NuxtLink to="/calculators" class="hover:text-gray-600 transition">Calculators</NuxtLink></li>
            <li><span>/</span></li>
            <li class="text-gray-700 font-semibold">Fix & Flip</li>
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
            Fix &amp; Flip Calculator — Net Profit, ROI &amp; Maximum Allowable Offer
          </h1>
        </div>

        <!-- On this page nav -->
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>

          <!-- Desktop: full list -->
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#what-is-fix-flip" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is Fix &amp; Flip</a></li>
            <li><a href="#formulas" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Key Formulas</a></li>
            <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
            <li><a href="#budget" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Budget Items</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
          </ul>

          <!-- Mobile: first 4 always visible + collapsible rest -->
          <div class="md:hidden">
            <ul class="flex flex-wrap gap-x-4 gap-y-1.5">
              <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
              <li><a href="#what-is-fix-flip" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is Fix &amp; Flip</a></li>
              <li><a href="#formulas" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Key Formulas</a></li>
              <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
            </ul>
            <ul v-show="isNavExpanded" class="flex flex-wrap gap-x-4 gap-y-1.5 mt-1.5">
              <li><a href="#budget" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Budget Items</a></li>
              <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
            </ul>
            <button
              @click="isNavExpanded = !isNavExpanded"
              class="mt-2 flex items-center gap-1 text-xs font-bold transition"
              style="color: #b45309;">
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

    <!-- MOBILE LIVE RESULT BAR -->
    <div class="lg:hidden sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <div class="text-sm text-gray-500 font-medium">Net Profit</div>
        <div class="flex items-center gap-3">
          <span v-if="hasResult" class="text-2xl font-extrabold" :class="netProfit >= 0 ? 'text-green-600' : 'text-red-500'">
            {{ netProfit >= 0 ? '+' : '' }}{{ formatCurrency(netProfit) }}
          </span>
          <span v-else class="text-2xl font-bold text-gray-200">—</span>
          <span v-if="hasResult" class="text-xs font-bold px-2.5 py-1 rounded-full text-white"
            :style="`background: ${badge.color}`">{{ badge.label }}</span>
        </div>
      </div>
    </div>

    <!-- MAIN -->
    <main id="calculator" class="max-w-[1100px] mx-auto px-4 pt-8 pb-10 bg-white rounded-2xl shadow-xl" style="border: 1px solid #e5e7eb; border-top: 3px solid #f59e0b;">
          <div class="lg:grid lg:grid-cols-[3fr_2fr] items-stretch">

            <!-- INPUTS -->
            <div class="calc-inputs space-y-6">

              <!-- Purchase & Rehab -->
              <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div class="calc-section-header">
                  <h2 class="calc-section-title">Purchase &amp; Rehab Costs</h2>
                </div>
                <div class="p-6 space-y-4">
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label for="purchase-price" class="block text-sm font-semibold text-gray-700 mb-1.5">Purchase Price</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                        <input id="purchase-price" v-model.number="form.purchasePrice" type="number" min="0" step="1000" placeholder="e.g. 120,000"
                          class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                      </div>
                    </div>
                    <div>
                      <label for="rehab-cost" class="block text-sm font-semibold text-gray-700 mb-1.5">Rehab / Renovation Cost</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                        <input id="rehab-cost" v-model.number="form.rehabCost" type="number" min="0" step="1000" placeholder="e.g. 40,000"
                          class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                      </div>
                    </div>
                    <div>
                      <label for="closing-buy" class="block text-sm font-semibold text-gray-700 mb-1.5">Closing Costs (Buy)</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                        <input id="closing-buy" v-model.number="form.closingBuy" type="number" min="0" step="500" placeholder="e.g. 3,000"
                          class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                      </div>
                    </div>
                    <div>
                      <label for="holding-months" class="block text-sm font-semibold text-gray-700 mb-1.5">Hold Period (Months)</label>
                      <input id="holding-months" v-model.number="form.holdingMonths" type="number" min="1" max="36" step="1" placeholder="e.g. 6"
                        class="w-full px-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Holding Costs -->
              <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div class="calc-section-header">
                  <h2 class="calc-section-title">Monthly Holding Costs</h2>
                </div>
                <div class="p-6 space-y-3">
                  <div class="grid grid-cols-2 gap-3">
                    <div>
                      <label for="hard-money-interest" class="block text-xs font-semibold text-gray-600 mb-1">Hard Money Interest/mo</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                        <input id="hard-money-interest" v-model.number="form.monthlyInterest" type="number" min="0" step="100" placeholder="e.g. 1,500"
                          class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-medium text-sm transition" />
                      </div>
                    </div>
                    <div>
                      <label for="property-tax-mo" class="block text-xs font-semibold text-gray-600 mb-1">Property Tax/mo</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                        <input id="property-tax-mo" v-model.number="form.monthlyTax" type="number" min="0" step="25" placeholder="e.g. 250"
                          class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-medium text-sm transition" />
                      </div>
                    </div>
                    <div>
                      <label for="insurance-mo" class="block text-xs font-semibold text-gray-600 mb-1">Insurance/mo</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                        <input id="insurance-mo" v-model.number="form.monthlyInsurance" type="number" min="0" step="25" placeholder="e.g. 150"
                          class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-medium text-sm transition" />
                      </div>
                    </div>
                    <div>
                      <label for="utilities-mo" class="block text-xs font-semibold text-gray-600 mb-1">Utilities/mo</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                        <input id="utilities-mo" v-model.number="form.monthlyUtilities" type="number" min="0" step="25" placeholder="e.g. 100"
                          class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-medium text-sm transition" />
                      </div>
                    </div>
                  </div>
                  <div v-if="form.holdingMonths && totalMonthlyHolding > 0" class="pt-2 border-t border-gray-100 flex justify-between items-center text-sm">
                    <span class="text-gray-500 font-medium">Total Holding Costs ({{ form.holdingMonths }} mo)</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(totalHoldingCosts) }}</span>
                  </div>
                </div>
              </div>

              <!-- Sale -->
              <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div class="calc-section-header">
                  <h2 class="calc-section-title">After Repair Value &amp; Sale Costs</h2>
                </div>
                <div class="p-6 space-y-4">
                  <div>
                    <label for="arv" class="block text-sm font-semibold text-gray-700 mb-1.5">After Repair Value (ARV)</label>
                    <div class="relative">
                      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                      <input id="arv" v-model.number="form.arv" type="number" min="0" step="1000" placeholder="e.g. 220,000"
                        class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label for="agent-commission" class="block text-sm font-semibold text-gray-700 mb-1.5">Agent Commission</label>
                      <div class="relative">
                        <input id="agent-commission" v-model.number="form.agentCommission" type="number" min="0" max="10" step="0.25" placeholder="e.g. 5"
                          class="w-full pr-8 pl-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                        <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                      </div>
                    </div>
                    <div>
                      <label for="closing-sell" class="block text-sm font-semibold text-gray-700 mb-1.5">Closing Costs (Sell)</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                        <input id="closing-sell" v-model.number="form.closingSell" type="number" min="0" step="500" placeholder="e.g. 3,000"
                          class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <!-- RESULTS -->
            <div class="self-stretch rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl border-t border-gray-200 lg:border-t-0 lg:border-l">
              <!-- NOTE: overflow must be on the INNER div — overflow on a sticky element breaks stickiness in CSS spec -->
              <div class="lg:sticky lg:top-[4.5rem] lg:self-stretch min-w-0 w-full bg-gray-50 flex flex-col">
              <div class="lg:h-full lg:overflow-y-auto space-y-4 p-4 lg:p-5 scrollbar-thin">

                <!-- Main Result -->
                <div v-if="hasResult" class="rounded-xl border border-gray-200 bg-white overflow-hidden">
                  <div class="px-5 py-5 border-b border-gray-100">
                    <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Net Profit</p>
                    <div class="flex items-end gap-2 mb-3">
                      <span class="text-5xl font-extrabold leading-none" :class="netProfit < 0 ? 'text-red-600' : ''" :style="netProfit >= 0 ? 'color:#1e3a5f;' : ''">
                        {{ netProfit >= 0 ? '+' : '' }}{{ formatCurrency(netProfit) }}
                      </span>
                    </div>
                    <span class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full"
                      :style="`background: ${badge.bg}; color: ${badge.textColor}`">
                      {{ badge.label }}
                    </span>
                    <div class="mt-3 text-xs text-gray-500 grid grid-cols-2 gap-2">
                      <div><span>ROI</span><p class="font-bold text-sm text-gray-800">{{ roi.toFixed(1) }}%</p></div>
                      <div><span>Annualized ROI</span><p class="font-bold text-sm text-gray-800">{{ annualizedROI.toFixed(1) }}%</p></div>
                    </div>
                  </div>
                </div>

                <div v-else class="rounded-xl p-8 text-center border border-dashed border-gray-200 bg-white">
                  <p class="text-gray-400 font-medium text-sm">Enter purchase price & ARV<br>to see your flip profit</p>
                </div>

                <!-- P&L Breakdown -->
                <div v-if="hasResult" class="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
                  <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400">Profit &amp; Loss</h3>
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between py-1 border-b border-gray-50 font-bold text-green-600">
                      <span>Sale Price (ARV)</span><span>+{{ formatCurrency(form.arv || 0) }}</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-gray-50">
                      <span class="text-gray-500">− Purchase Price</span><span class="text-red-400">-{{ formatCurrency(form.purchasePrice || 0) }}</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-gray-50">
                      <span class="text-gray-500">− Rehab Costs</span><span class="text-red-400">-{{ formatCurrency(form.rehabCost || 0) }}</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-gray-50">
                      <span class="text-gray-500">− Holding Costs</span><span class="text-red-400">-{{ formatCurrency(totalHoldingCosts) }}</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-gray-50">
                      <span class="text-gray-500">− Closing Costs (Buy)</span><span class="text-red-400">-{{ formatCurrency(form.closingBuy || 0) }}</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-gray-50">
                      <span class="text-gray-500">− Agent Commission</span><span class="text-red-400">-{{ formatCurrency(agentCommissionAmt) }}</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-gray-100">
                      <span class="text-gray-500">− Closing Costs (Sell)</span><span class="text-red-400">-{{ formatCurrency(form.closingSell || 0) }}</span>
                    </div>
                    <div class="flex justify-between py-1 font-extrabold text-base" :class="netProfit >= 0 ? 'text-green-600' : 'text-red-500'">
                      <span>= Net Profit</span><span>{{ formatCurrency(netProfit) }}</span>
                    </div>
                  </div>
                </div>

                <!-- MAO (70% Rule) -->
                <div v-if="form.arv && form.rehabCost" class="bg-white rounded-2xl border border-gray-200 p-5">
                  <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Maximum Allowable Offer</h3>
                  <p class="text-xs text-gray-500 mb-3">Based on the 70% Rule: MAO = (ARV × 70%) − Rehab Costs</p>
                  <div class="text-2xl font-extrabold mb-1" style="color: #1e3a5f;">{{ formatCurrency(mao) }}</div>
                  <p class="text-xs text-gray-400">You're {{ form.purchasePrice ? (form.purchasePrice <= mao ? 'within' : 'above') : '—' }} the MAO
                    <span v-if="form.purchasePrice" class="font-semibold" :class="form.purchasePrice <= mao ? 'text-green-600' : 'text-red-500'">
                      ({{ form.purchasePrice <= mao ? 'good deal' : formatCurrency(form.purchasePrice - mao) + ' over' }})
                    </span>
                  </p>
                </div>

              </div>
              </div>
            </div>

          </div>
    </main>

    <!-- SEO CONTENT -->
    <div class="max-w-[1100px] mx-auto px-4 pb-16 mt-12 space-y-12">

      <!-- What is Fix & Flip -->
      <section class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 id="what-is-fix-flip" class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">What Is Fix & Flip Investing?</h2>
        <div class="grid md:grid-cols-2 gap-6 text-gray-600 text-sm leading-relaxed">
          <div>
            <p class="mb-3">Fix and flip investing means purchasing a distressed or undervalued property, renovating it to increase its value, then selling it at a profit — ideally within 6–12 months. It's one of the most active strategies in US real estate, generating income rather than passive cash flow.</p>
            <p>Success depends on three things: buying below market value, controlling renovation costs, and accurately estimating the After Repair Value (ARV) based on comparable sales in the same neighborhood.</p>
          </div>
          <div>
            <p class="mb-3">Unlike rental investing, fix & flip requires active management, capital reserves for surprises, and a reliable contractor network. Most experienced flippers target a minimum profit of 20% of ARV — enough to absorb cost overruns and still walk away with a healthy return.</p>
            <p>The 70% Rule is the most widely used quick-filter in the industry: never pay more than 70% of ARV minus repair costs. This calculator goes further, modeling every real cost line item so you know exactly what to offer.</p>
          </div>
        </div>
      </section>

      <!-- Key Formulas -->
      <section>
        <h2 id="formulas" class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Fix & Flip Key Formulas</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-white rounded-2xl border border-gray-200 p-5">
            <div class="text-xs font-bold uppercase tracking-widest mb-2 text-blue-500">Net Profit</div>
            <div class="font-mono text-xs bg-gray-50 rounded-lg p-3 text-gray-700 mb-3">ARV − Purchase − Rehab − Holding − Closing</div>
            <p class="text-xs text-gray-500">Your bottom-line take-home after all costs are accounted for.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-200 p-5">
            <div class="text-xs font-bold uppercase tracking-widest mb-2 text-green-500">ROI</div>
            <div class="font-mono text-xs bg-gray-50 rounded-lg p-3 text-gray-700 mb-3">Net Profit ÷ Total Cash Invested × 100</div>
            <p class="text-xs text-gray-500">Return on your total cash deployed, including down payment and rehab funds.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-200 p-5">
            <div class="text-xs font-bold uppercase tracking-widest mb-2 text-yellow-500">Annualized ROI</div>
            <div class="font-mono text-xs bg-gray-50 rounded-lg p-3 text-gray-700 mb-3">ROI ÷ Hold Months × 12</div>
            <p class="text-xs text-gray-500">Normalizes short-term flips to an annual rate so you can compare against other investments.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-200 p-5">
            <div class="text-xs font-bold uppercase tracking-widest mb-2 text-orange-500">MAO (70% Rule)</div>
            <div class="font-mono text-xs bg-gray-50 rounded-lg p-3 text-gray-700 mb-3">(ARV × 70%) − Rehab Costs</div>
            <p class="text-xs text-gray-500">The maximum you can pay and still leave enough margin for profit and surprises.</p>
          </div>
        </div>
      </section>

      <!-- Fix & Flip Returns by US Market -->
      <section class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 id="benchmarks" class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Fix & Flip Profit Benchmarks by US Market</h2>
        <p class="text-gray-500 text-sm mb-6">Typical gross profit per flip and average hold periods by state. Source: industry survey data, 2023–2024.</p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-3 pr-4 font-bold text-gray-700">State</th>
                <th class="text-right py-3 px-4 font-bold text-gray-700">Avg Gross Profit</th>
                <th class="text-right py-3 px-4 font-bold text-gray-700">Avg Hold Period</th>
                <th class="text-right py-3 px-4 font-bold text-gray-700">Avg Flip ROI</th>
                <th class="text-left py-3 pl-4 font-bold text-gray-700">Market Notes</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="m in markets" :key="m.state">
                <td class="py-3 pr-4 font-semibold text-gray-900">{{ m.state }}</td>
                <td class="py-3 px-4 text-right font-bold text-green-600">{{ m.profit }}</td>
                <td class="py-3 px-4 text-right text-gray-600">{{ m.hold }}</td>
                <td class="py-3 px-4 text-right font-semibold" :class="m.roiColor">{{ m.roi }}</td>
                <td class="py-3 pl-4 text-gray-500 text-xs">{{ m.notes }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Cost Breakdown Guide -->
      <section>
        <h2 id="budget" class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">What to Include in Your Fix & Flip Budget</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl border border-gray-200 p-6">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style="background: rgba(30,58,95,0.08);">
              <svg class="w-5 h-5" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-3">Acquisition Costs</h3>
            <ul class="space-y-1.5 text-sm text-gray-600">
              <li class="flex items-start gap-2"><span class="text-red-400 mt-0.5">•</span>Purchase price</li>
              <li class="flex items-start gap-2"><span class="text-red-400 mt-0.5">•</span>Lender origination fees (1–3%)</li>
              <li class="flex items-start gap-2"><span class="text-red-400 mt-0.5">•</span>Title insurance & escrow fees</li>
              <li class="flex items-start gap-2"><span class="text-red-400 mt-0.5">•</span>Inspection costs</li>
              <li class="flex items-start gap-2"><span class="text-red-400 mt-0.5">•</span>Attorney/closing agent fees</li>
            </ul>
          </div>
          <div class="bg-white rounded-2xl border border-gray-200 p-6">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style="background: rgba(245,158,11,0.12);">
              <svg class="w-5 h-5" style="color: #f59e0b;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-3">Holding Costs (Per Month)</h3>
            <ul class="space-y-1.5 text-sm text-gray-600">
              <li class="flex items-start gap-2"><span class="text-yellow-500 mt-0.5">•</span>Hard money / loan interest</li>
              <li class="flex items-start gap-2"><span class="text-yellow-500 mt-0.5">•</span>Property taxes (prorated)</li>
              <li class="flex items-start gap-2"><span class="text-yellow-500 mt-0.5">•</span>Hazard insurance</li>
              <li class="flex items-start gap-2"><span class="text-yellow-500 mt-0.5">•</span>Utilities (electric, gas, water)</li>
              <li class="flex items-start gap-2"><span class="text-yellow-500 mt-0.5">•</span>HOA dues (if applicable)</li>
            </ul>
          </div>
          <div class="bg-white rounded-2xl border border-gray-200 p-6">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style="background: rgba(34,197,94,0.12);">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-3">Selling Costs</h3>
            <ul class="space-y-1.5 text-sm text-gray-600">
              <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">•</span>Agent commissions (4–6% of ARV)</li>
              <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">•</span>Title & transfer taxes</li>
              <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">•</span>Seller concessions (0–3%)</li>
              <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">•</span>Staging & photography</li>
              <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">•</span>Capital gains tax (short-term rate)</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 id="faq" class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Fix & Flip Calculator FAQ</h2>
        <div class="space-y-5">
          <div v-for="faq in faqs" :key="faq.q" class="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
            <h3 class="font-bold text-gray-900 mb-2">{{ faq.q }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ faq.a }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="rounded-2xl p-8 text-center text-white" style="background: #1e3a5f;">
        <h2 class="text-2xl font-extrabold mb-3">Analyze More Deals With Our Full Calculator Suite</h2>
        <p class="text-blue-200 mb-6 text-sm">Once you have your flip profit, use our other tools to evaluate rental hold strategies, ARV estimates, and BRRRR deals.</p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink to="/arv-calculator" class="px-5 py-2.5 rounded-xl font-bold text-sm transition hover:opacity-90" style="background: #f59e0b; color: #1e3a5f;">ARV Calculator</NuxtLink>
          <NuxtLink to="/brrrr-calculator" class="px-5 py-2.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 transition text-white">BRRRR Calculator</NuxtLink>
          <NuxtLink to="/rental-property-calculator" class="px-5 py-2.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 transition text-white">Rental Property Calculator</NuxtLink>
        </div>
      </section>

    </div>

    <!-- FAQ JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the 70% rule in fix and flip?",
          "acceptedAnswer": { "@type": "Answer", "text": "The 70% rule states that an investor should pay no more than 70% of the After Repair Value (ARV) minus the cost of repairs. For example, if a home's ARV is $200,000 and repairs cost $30,000, the maximum purchase price would be $200,000 × 0.70 − $30,000 = $110,000. This rule ensures enough margin for holding costs, closing costs, and profit." }
        },
        {
          "@type": "Question",
          "name": "What is a good ROI for a fix and flip?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most experienced flippers target a minimum net profit of 15–20% of the ARV, which typically translates to an ROI of 20–40% on total cash invested. Annualized, successful flippers often achieve 40–80% returns. Anything below 10% of ARV is generally considered too thin given the risks involved." }
        },
        {
          "@type": "Question",
          "name": "What costs do most fix and flip investors forget?",
          "acceptedAnswer": { "@type": "Answer", "text": "The most commonly underestimated costs are holding costs (loan interest, taxes, insurance, utilities during rehab), seller concessions, capital gains taxes on short-term profits, and rehab cost overruns — which average 10–20% more than the original budget. Always build a 10–15% contingency into your rehab estimate." }
        },
        {
          "@type": "Question",
          "name": "How do I calculate the Maximum Allowable Offer (MAO)?",
          "acceptedAnswer": { "@type": "Answer", "text": "The MAO formula is: MAO = (ARV × desired margin percentage) − all costs. The 70% Rule version is: MAO = (ARV × 70%) − Rehab Costs. For a more precise MAO, subtract all costs (rehab, holding, closing, commissions) and your target profit from the ARV." }
        },
        {
          "@type": "Question",
          "name": "Should I use hard money or cash to fund a fix and flip?",
          "acceptedAnswer": { "@type": "Answer", "text": "Both work, but hard money loans are more common because they preserve your capital for multiple deals and let you scale. Hard money typically costs 8–14% interest plus 1–3 points, and these costs must be factored into your holding cost calculations. Cash deals close faster and have no financing costs, but tie up capital that could fund other projects." }
        }
      ]
    }
    </script>

  </div>
</template>

<script setup>
const isNavExpanded = ref(false)
import { reactive, computed } from 'vue'

useHead({
  title: 'Fix & Flip Calculator — Net Profit, ROI & MAO | RealCalc',
  meta: [
    { name: 'description', content: 'Free fix and flip profit calculator. Calculate net profit, ROI, annualized return, and Maximum Allowable Offer (MAO) using the 70% Rule. Built for US real estate investors.' },
    { property: 'og:title', content: 'Fix & Flip Calculator — Net Profit, ROI & MAO' },
    { property: 'og:description', content: 'Calculate your fix and flip profit, ROI, and maximum offer price before you buy. Free tool for US real estate investors.' }
  ]
})

const form = reactive({
  purchasePrice: null,
  rehabCost: null,
  closingBuy: null,
  holdingMonths: null,
  monthlyInterest: null,
  monthlyTax: null,
  monthlyInsurance: null,
  monthlyUtilities: null,
  arv: null,
  agentCommission: null,
  closingSell: null
})

const formatCurrency = (val) => {
  if (val == null || isNaN(val)) return '$0'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)
}

const totalMonthlyHolding = computed(() => {
  return (form.monthlyInterest || 0) + (form.monthlyTax || 0) + (form.monthlyInsurance || 0) + (form.monthlyUtilities || 0)
})

const totalHoldingCosts = computed(() => {
  return totalMonthlyHolding.value * (form.holdingMonths || 0)
})

const agentCommissionAmt = computed(() => {
  return (form.arv || 0) * ((form.agentCommission || 0) / 100)
})

const totalCosts = computed(() => {
  return (form.purchasePrice || 0) +
    (form.rehabCost || 0) +
    (form.closingBuy || 0) +
    totalHoldingCosts.value +
    agentCommissionAmt.value +
    (form.closingSell || 0)
})

const netProfit = computed(() => {
  return (form.arv || 0) - totalCosts.value
})

const roi = computed(() => {
  if (!totalCosts.value) return 0
  return (netProfit.value / totalCosts.value) * 100
})

const annualizedROI = computed(() => {
  const months = form.holdingMonths || 6
  return (roi.value / months) * 12
})

const mao = computed(() => {
  return (form.arv || 0) * 0.7 - (form.rehabCost || 0)
})

const profitMarginPct = computed(() => {
  if (!form.arv) return 0
  return (netProfit.value / form.arv) * 100
})

const hasResult = computed(() => {
  return form.purchasePrice && form.arv
})

const badge = computed(() => {
  const pct = profitMarginPct.value
  if (pct >= 20) return { label: 'Strong Deal', color: '#16a34a', bg: 'rgba(22,163,74,0.15)', textColor: '#15803d' }
  if (pct >= 10) return { label: 'Acceptable', color: '#d97706', bg: 'rgba(217,119,6,0.15)', textColor: '#b45309' }
  if (pct >= 0) return { label: 'Thin Margin', color: '#ea580c', bg: 'rgba(234,88,12,0.15)', textColor: '#c2410c' }
  return { label: 'Loss', color: '#dc2626', bg: 'rgba(220,38,38,0.15)', textColor: '#b91c1c' }
})

const markets = [
  { state: 'California', profit: '$78,000', hold: '7.2 mo', roi: '28%', roiColor: 'text-green-600', notes: 'High ARVs but also high acquisition costs; LA/SD most active' },
  { state: 'Texas', profit: '$52,000', hold: '5.8 mo', roi: '35%', roiColor: 'text-green-600', notes: 'Dallas, Houston, San Antonio offer strong velocity' },
  { state: 'Florida', profit: '$61,000', hold: '6.1 mo', roi: '32%', roiColor: 'text-green-600', notes: 'Tampa, Jacksonville, Orlando remain top flip markets' },
  { state: 'New York', profit: '$85,000', hold: '9.4 mo', roi: '22%', roiColor: 'text-yellow-600', notes: 'Longer hold periods; NYC boroughs most profitable' },
  { state: 'Arizona', profit: '$48,000', hold: '5.2 mo', roi: '38%', roiColor: 'text-green-600', notes: 'Phoenix/Scottsdale: fast-moving market with solid margins' },
  { state: 'Georgia', profit: '$44,000', hold: '5.5 mo', roi: '36%', roiColor: 'text-green-600', notes: 'Atlanta suburbs offer affordable entry + strong appreciation' },
  { state: 'Colorado', profit: '$55,000', hold: '6.0 mo', roi: '30%', roiColor: 'text-green-600', notes: 'Denver metro: competitive but profitable for experienced flippers' },
  { state: 'Washington', profit: '$67,000', hold: '6.8 mo', roi: '27%', roiColor: 'text-yellow-600', notes: 'Seattle area: high prices require larger capital base' }
]

const faqs = [
  { q: 'What is the 70% rule in fix and flip?', a: "The 70% rule states that an investor should pay no more than 70% of the After Repair Value (ARV) minus the cost of repairs. For example, if a home's ARV is $200,000 and repairs cost $30,000, the maximum purchase price would be $200,000 × 0.70 − $30,000 = $110,000. This rule ensures enough margin for holding costs, closing costs, and profit." },
  { q: 'What is a good ROI for a fix and flip?', a: 'Most experienced flippers target a minimum net profit of 15–20% of the ARV, which typically translates to an ROI of 20–40% on total cash invested. Annualized, successful flippers often achieve 40–80% returns. Anything below 10% of ARV is generally considered too thin given the risks involved.' },
  { q: 'What costs do most fix and flip investors forget?', a: 'The most commonly underestimated costs are holding costs (loan interest, taxes, insurance, utilities during rehab), seller concessions, capital gains taxes on short-term profits, and rehab cost overruns — which average 10–20% more than the original budget. Always build a 10–15% contingency into your rehab estimate.' },
  { q: 'How do I calculate the Maximum Allowable Offer (MAO)?', a: 'The MAO formula is: MAO = (ARV × desired margin percentage) − all costs. The 70% Rule version is: MAO = (ARV × 70%) − Rehab Costs. For a more precise MAO, subtract all costs (rehab, holding, closing, commissions) and your target profit from the ARV.' },
  { q: 'Should I use hard money or cash to fund a fix and flip?', a: 'Both work, but hard money loans are more common because they preserve your capital for multiple deals and let you scale. Hard money typically costs 8–14% interest plus 1–3 points, and these costs must be factored into your holding cost calculations. Cash deals close faster and have no financing costs, but tie up capital that could fund other projects.' }
]
</script>
