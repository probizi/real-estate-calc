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
            <li class="text-gray-700 font-semibold">NOI Calculator</li>
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
            NOI Calculator — Free Net Operating Income Tool for US Real Estate
          </h1>
        </div>

        <!-- On this page nav -->
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>

          <!-- Desktop: full list -->
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#what-is-noi" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is NOI</a></li>
            <li><a href="#include-exclude" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Include &amp; Exclude</a></li>
            <li><a href="#market-ratios" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Market Ratios</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
          </ul>

          <!-- Mobile: first 4 always visible + collapsible rest -->
          <div class="md:hidden">
            <ul class="flex flex-wrap gap-x-4 gap-y-1.5">
              <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
              <li><a href="#what-is-noi" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is NOI</a></li>
              <li><a href="#include-exclude" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Include &amp; Exclude</a></li>
              <li><a href="#market-ratios" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Market Ratios</a></li>
            </ul>
            <ul v-show="isNavExpanded" class="flex flex-wrap gap-x-4 gap-y-1.5 mt-1.5">
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
        <div class="text-sm text-gray-500 font-medium">Annual NOI</div>
        <div class="flex items-center gap-3">
          <span v-if="hasResult" class="text-2xl font-extrabold" :class="annualNOI >= 0 ? 'text-green-600' : 'text-red-500'">
            {{ formatCurrency(annualNOI) }}
          </span>
          <span v-else class="text-2xl font-bold text-gray-200">—</span>
        </div>
      </div>
    </div>

    <!-- MAIN -->
    <main id="calculator" class="max-w-[1100px] mx-auto px-4 pt-8 pb-10">
          <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:gap-8 items-start">

            <!-- INPUTS (3 cols) -->
            <div class="calc-inputs space-y-6 mb-8 lg:mb-0">

              <!-- Income -->
              <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div class="calc-section-header">
                  <h2 class="calc-section-title">Gross Income</h2>
                </div>
                <div class="p-5 space-y-3">
                  <div>
                    <label for="gross-rent" class="block text-xs font-semibold text-gray-700 mb-1">
                      Gross Scheduled Rent (Annual)
                    </label>
                    <div class="relative">
                      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                      <input id="gross-rent" v-model.number="form.grossRent" type="number" min="0" step="100"
                        placeholder="e.g. 48,000"
                        class="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                    </div>
                    <p class="text-xs text-gray-400 mt-1">100% occupancy, all units combined</p>
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label for="other-income" class="block text-sm font-semibold text-gray-700 mb-1.5">Other Income (Annual)</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                        <input id="other-income" v-model.number="form.otherIncome" type="number" min="0" step="100"
                          placeholder="e.g. 1,200"
                          class="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                      </div>
                      <p class="text-xs text-gray-400 mt-1">Laundry, parking, storage</p>
                    </div>
                    <div>
                      <label for="vacancy-rate" class="block text-xs font-semibold text-gray-700 mb-1">
                        Vacancy Rate
                        <span class="text-xs font-normal text-gray-400 ml-1">(typical 5–8%)</span>
                      </label>
                      <div class="relative">
                        <input id="vacancy-rate" v-model.number="form.vacancyRate" type="number" min="0" max="100" step="0.5"
                          placeholder="e.g. 5"
                          class="w-full pr-8 pl-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-sm transition" />
                        <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">%</span>
                      </div>
                    </div>
                  </div>
                  <div v-if="egi > 0" class="p-3 rounded-xl text-sm font-medium bg-blue-50 border border-blue-100 text-blue-800">
                    Effective Gross Income: <span class="font-bold">{{ formatCurrency(egi) }}</span>
                  </div>
                </div>
              </div>

              <!-- Operating Expenses -->
              <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div class="calc-section-header">
                  <h2 class="calc-section-title">Annual Operating Expenses</h2>
                </div>
                <div class="p-5 space-y-3">
                  <p class="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                    NOI excludes mortgage payments, depreciation, and income taxes. These are <strong>operating</strong> expenses only.
                  </p>
                  <div class="grid grid-cols-2 gap-3">
                    <div v-for="exp in expenseFields" :key="exp.key">
                      <label :for="`exp-${exp.key}`" class="block text-xs font-semibold text-gray-600 mb-1">{{ exp.label }}</label>
                      <div class="relative">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                        <input :id="`exp-${exp.key}`" v-model.number="form.expenses[exp.key]" type="number" min="0" step="100"
                          :placeholder="exp.placeholder"
                          class="w-full pl-7 pr-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition" />
                      </div>
                      <p v-if="exp.hint" class="text-xs text-gray-400 mt-0.5">{{ exp.hint }}</p>
                    </div>
                  </div>
                  <div class="pt-2 border-t border-gray-100 flex justify-between items-center text-sm">
                    <span class="text-gray-500 font-medium">Total Operating Expenses</span>
                    <span class="font-bold text-gray-900">{{ formatCurrency(totalExpenses) }}</span>
                  </div>
                  <div v-if="totalExpenses > 0 && egi > 0" class="text-xs text-gray-400">
                    Expense ratio: <span class="font-semibold" :class="expenseRatio <= 45 ? 'text-green-600' : expenseRatio <= 60 ? 'text-amber-600' : 'text-red-600'">{{ expenseRatio.toFixed(1) }}%</span>
                    <span class="ml-1">(healthy range: 35–50%)</span>
                  </div>
                </div>
              </div>

            </div>

            <!-- RESULTS (2 cols) -->
            <div class="lg:sticky lg:top-24">
              <div class="sticky top-24 space-y-5">

                <!-- Main Result -->
                <div v-if="hasResult" class="rounded-xl border border-gray-200 bg-white overflow-hidden">
                  <div class="px-5 py-5 border-b border-gray-100">
                    <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Annual NOI</p>
                    <div class="flex items-end gap-3 mb-2">
                      <span class="text-5xl font-extrabold leading-none" :class="annualNOI >= 0 ? '' : 'text-red-600'" :style="annualNOI >= 0 ? 'color:#1e3a5f;' : ''">
                        {{ formatCurrency(annualNOI) }}
                      </span>
                      <span class="text-xs font-bold px-2 py-1 rounded-full mb-1"
                        :class="noiRating === 'Good' ? 'bg-green-100 text-green-700' : noiRating === 'Average' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'">
                        {{ noiRating }}
                      </span>
                    </div>
                    <p class="text-sm text-gray-500">Monthly: <span class="font-semibold text-gray-800">{{ formatCurrency(monthlyNOI) }}</span></p>
                  </div>
                  <div class="px-5 py-3 bg-gray-50 space-y-1.5 text-xs text-gray-500">
                    <div class="flex justify-between"><span>Expense Ratio</span><span class="font-semibold text-gray-700">{{ expenseRatio.toFixed(1) }}%</span></div>
                    <div class="flex justify-between"><span>Net Income Ratio</span><span class="font-semibold text-gray-700">{{ (100 - expenseRatio).toFixed(1) }}%</span></div>
                  </div>
                </div>

                <div v-else class="rounded-xl p-8 text-center border border-dashed border-gray-200 bg-white">
                  <svg class="w-10 h-10 text-gray-200 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                  <p class="text-gray-400 font-medium text-sm">Enter gross rent to calculate NOI</p>
                  <p class="text-gray-300 text-xs mt-1">Results update in real time</p>
                </div>

                <!-- NOI Breakdown -->
                <div v-if="hasResult" class="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
                  <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400">NOI Breakdown</h3>
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between py-1 border-b border-gray-50">
                      <span class="text-gray-600">Gross Scheduled Rent</span>
                      <span class="font-semibold text-green-600">+{{ formatCurrency(form.grossRent || 0) }}</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-gray-50">
                      <span class="text-gray-600">Other Income</span>
                      <span class="font-semibold text-green-600">+{{ formatCurrency(form.otherIncome || 0) }}</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-gray-50">
                      <span class="text-gray-500">− Vacancy ({{ form.vacancyRate || 0 }}%)</span>
                      <span class="font-semibold text-red-400">-{{ formatCurrency(vacancyLoss) }}</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-gray-100 font-bold" style="color: #1e3a5f;">
                      <span>= Effective Gross Income</span>
                      <span>{{ formatCurrency(egi) }}</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-gray-50">
                      <span class="text-gray-500">− Operating Expenses</span>
                      <span class="font-semibold text-red-400">-{{ formatCurrency(totalExpenses) }}</span>
                    </div>
                    <div class="flex justify-between py-1 font-extrabold text-base" style="color: #1e3a5f;">
                      <span>= NOI</span>
                      <span>{{ formatCurrency(annualNOI) }}</span>
                    </div>
                  </div>
                </div>

                <!-- Implied Property Value -->
                <div v-if="hasResult && annualNOI > 0" class="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Implied Property Value</h3>
                  <p class="text-xs text-gray-500 mb-3">Value = NOI ÷ Cap Rate</p>
                  <div class="space-y-1.5">
                    <div v-for="cr in [4, 5, 6, 7, 8, 9, 10]" :key="cr"
                      class="flex justify-between text-sm px-2 py-1.5 rounded-lg"
                      :class="cr === 6 ? 'font-bold bg-amber-50' : 'text-gray-600'">
                      <span :style="cr === 6 ? 'color:#92400e;' : ''">At {{ cr }}% cap rate</span>
                      <span :style="cr === 6 ? 'color:#92400e;' : ''">{{ formatCurrency(annualNOI / (cr / 100)) }}</span>
                    </div>
                  </div>
                  <p class="text-xs text-gray-400 mt-2 italic">Use to gauge fair value vs. asking price.</p>
                </div>

              </div>
            </div>

          </div>

          <!-- ══════════ SEO CONTENT SECTION ══════════ -->
          <div class="mt-12 space-y-8">

            <!-- What is NOI -->
            <div id="what-is-noi" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What Is Net Operating Income (NOI)?</h2>
              <p class="text-gray-600 leading-relaxed mb-4">
                <strong>Net Operating Income (NOI)</strong> is the annual income generated by an investment property after subtracting all operating expenses — but before deducting mortgage payments, depreciation, or income taxes. It is the single most important number in commercial and residential real estate analysis.
              </p>
              <div class="p-4 rounded-xl text-center font-bold text-lg mb-4" style="background: #f0f4f8; color: #1e3a5f;">
                NOI = Effective Gross Income − Total Operating Expenses
              </div>
              <p class="text-gray-600 leading-relaxed mb-3">
                Because NOI excludes financing costs, it is an <strong>unlevered metric</strong> — meaning it measures the property's performance independent of how it is financed. A property's NOI is the same whether the buyer pays cash or takes out a mortgage. This makes NOI invaluable for comparing properties across different capital structures and markets.
              </p>
              <p class="text-gray-600 leading-relaxed">
                NOI is the numerator in the cap rate formula (<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm">Cap Rate = NOI ÷ Value</code>), the basis for lender DSCR underwriting (<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm">DSCR = NOI ÷ Annual Debt Service</code>), and the foundation for the income approach to property valuation.
              </p>
            </div>

            <!-- What to Include / Exclude -->
            <div id="include-exclude" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-6" style="color: #1e3a5f;">What to Include and Exclude from NOI</h2>
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 class="font-bold text-green-700 mb-3 flex items-center gap-2">
                    <span class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-xs">✓</span>
                    Include in Operating Expenses
                  </h3>
                  <ul class="space-y-2 text-sm text-gray-600">
                    <li class="flex gap-2"><span class="text-green-500 mt-0.5">•</span><span><strong>Property taxes</strong> — annual tax bill from the county assessor</span></li>
                    <li class="flex gap-2"><span class="text-green-500 mt-0.5">•</span><span><strong>Insurance</strong> — hazard, liability, and flood if applicable</span></li>
                    <li class="flex gap-2"><span class="text-green-500 mt-0.5">•</span><span><strong>Property management</strong> — typically 6–12% of gross rents</span></li>
                    <li class="flex gap-2"><span class="text-green-500 mt-0.5">•</span><span><strong>Maintenance &amp; repairs</strong> — ongoing upkeep, not capital improvements</span></li>
                    <li class="flex gap-2"><span class="text-green-500 mt-0.5">•</span><span><strong>Utilities</strong> — only those paid by the landlord (trash, water, common area)</span></li>
                    <li class="flex gap-2"><span class="text-green-500 mt-0.5">•</span><span><strong>HOA fees</strong> — if applicable to the property</span></li>
                    <li class="flex gap-2"><span class="text-green-500 mt-0.5">•</span><span><strong>Landscaping &amp; snow removal</strong> — regular maintenance contracts</span></li>
                    <li class="flex gap-2"><span class="text-green-500 mt-0.5">•</span><span><strong>Reserves for replacement</strong> — budget for major systems (roof, HVAC)</span></li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-bold text-red-700 mb-3 flex items-center gap-2">
                    <span class="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-xs">✕</span>
                    Exclude from NOI
                  </h3>
                  <ul class="space-y-2 text-sm text-gray-600">
                    <li class="flex gap-2"><span class="text-red-400 mt-0.5">•</span><span><strong>Mortgage payments</strong> (P&amp;I) — financing is excluded by definition</span></li>
                    <li class="flex gap-2"><span class="text-red-400 mt-0.5">•</span><span><strong>Depreciation</strong> — a paper expense, not a cash outflow</span></li>
                    <li class="flex gap-2"><span class="text-red-400 mt-0.5">•</span><span><strong>Income taxes</strong> — NOI is pre-tax</span></li>
                    <li class="flex gap-2"><span class="text-red-400 mt-0.5">•</span><span><strong>Capital expenditures</strong> — roof replacement, renovations (these are CapEx, not OpEx)</span></li>
                    <li class="flex gap-2"><span class="text-red-400 mt-0.5">•</span><span><strong>Loan origination fees</strong> — financing costs</span></li>
                    <li class="flex gap-2"><span class="text-red-400 mt-0.5">•</span><span><strong>Amortization</strong> — not an operating expense</span></li>
                  </ul>
                </div>
              </div>
              <div class="mt-5 p-4 rounded-xl bg-amber-50 border border-amber-200">
                <p class="text-sm text-amber-800"><strong>Red flag:</strong> If a seller's proforma shows an expense ratio below 30%, scrutinize every line item. Experienced investors budget management fees even for self-managed properties — you still have the option cost of your time.</p>
              </div>
            </div>

            <!-- NOI by Market -->
            <div id="market-ratios" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">Typical NOI Expense Ratios by Market (2026)</h2>
              <p class="text-gray-500 text-sm mb-6">Operating expenses as % of gross income for stabilized residential rental properties. Higher-cost markets tend to have higher expense ratios due to taxes and insurance.</p>
              <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">California (CA)</p>
                  <p class="text-2xl font-extrabold text-amber-600 mb-1">40–55%</p>
                  <p class="text-xs text-gray-500">High property taxes and insurance. LA/SF portfolios often run close to 50%.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Texas (TX)</p>
                  <p class="text-2xl font-extrabold text-green-600 mb-1">35–45%</p>
                  <p class="text-xs text-gray-500">High property tax rates but no income tax. Dallas/Houston average mid-40s.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Florida (FL)</p>
                  <p class="text-2xl font-extrabold text-amber-600 mb-1">38–50%</p>
                  <p class="text-xs text-gray-500">Rising insurance costs post-hurricanes. Coastal properties see higher ratios.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">New York (NY)</p>
                  <p class="text-2xl font-extrabold text-red-600 mb-1">45–60%</p>
                  <p class="text-xs text-gray-500">NYC: very high property taxes and operating costs. Rent-stabilized units can exceed 60%.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Arizona (AZ)</p>
                  <p class="text-2xl font-extrabold text-green-600 mb-1">33–43%</p>
                  <p class="text-xs text-gray-500">Lower insurance and taxes. Phoenix among the more landlord-friendly operating environments.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Georgia (GA)</p>
                  <p class="text-2xl font-extrabold text-green-600 mb-1">33–43%</p>
                  <p class="text-xs text-gray-500">Atlanta metro. Favorable operating costs. Management fees are the biggest variable.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Colorado (CO)</p>
                  <p class="text-2xl font-extrabold text-amber-600 mb-1">38–48%</p>
                  <p class="text-xs text-gray-500">Denver. Moderate taxes. Snow removal and maintenance add to operating costs.</p>
                </div>
                <div class="p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Washington (WA)</p>
                  <p class="text-2xl font-extrabold text-amber-600 mb-1">38–50%</p>
                  <p class="text-xs text-gray-500">Seattle area. High property taxes and management costs. No state income tax.</p>
                </div>
              </div>
            </div>

            <!-- FAQ -->
            <div id="faq" class="bg-white rounded-2xl border border-gray-200 p-8">
              <h2 class="text-xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions — NOI</h2>
              <div class="space-y-5">
                <div class="border-b border-gray-100 pb-5">
                  <h3 class="font-bold text-gray-800 mb-2">Is NOI the same as cash flow?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">No. NOI does not include mortgage payments. Cash flow = NOI − Annual Debt Service. A property can have positive NOI but negative cash flow if the mortgage payment is higher than NOI. NOI is an unlevered metric; cash flow is levered.</p>
                </div>
                <div class="border-b border-gray-100 pb-5">
                  <h3 class="font-bold text-gray-800 mb-2">What is a good NOI for a rental property?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">There is no single "good" NOI — it depends on the purchase price and market. What matters is the NOI yield (cap rate). A $25,000 NOI on a $300,000 property (8.3% cap) is excellent; the same $25,000 on a $600,000 property (4.2% cap) is marginal in most US markets. Always evaluate NOI relative to cost.</p>
                </div>
                <div class="border-b border-gray-100 pb-5">
                  <h3 class="font-bold text-gray-800 mb-2">Should I include a management fee even if I self-manage?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Yes — always budget a management fee (8–10%) even if you self-manage. If you ever hire a property manager, sell the property, or simply want accurate underwriting, you need the fee included. NOI calculated without a management fee overstates property performance.</p>
                </div>
                <div class="border-b border-gray-100 pb-5">
                  <h3 class="font-bold text-gray-800 mb-2">How do lenders use NOI?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Lenders use NOI to calculate the Debt Service Coverage Ratio (DSCR = NOI ÷ Annual Debt Service). Most commercial lenders require a minimum DSCR of 1.20–1.25x, meaning NOI must be at least 20–25% higher than the annual mortgage payment. DSCR loans for residential investors typically require ≥ 1.0x.</p>
                </div>
                <div class="border-b border-gray-100 pb-5">
                  <h3 class="font-bold text-gray-800 mb-2">What is the difference between NOI and EBITDA?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">NOI is a real estate-specific metric. EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) is used in corporate finance. For real estate, NOI is the standard — it excludes interest (debt service), taxes on income, and depreciation, focusing purely on the property's operating performance.</p>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 mb-2">Can NOI be negative?</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">Yes. Negative NOI means operating expenses exceed effective gross income — the property loses money before debt service. This is rare in stabilized income properties but can occur with high vacancy, deferred maintenance, or unusually high operating costs. Negative NOI properties are typically valued using replacement cost or sales comparison rather than the income approach.</p>
                </div>
              </div>
            </div>

            <!-- Related Calculators CTA -->
            <div class="rounded-2xl p-8 text-white" style="background: #1e3a5f;">
              <h2 class="text-xl font-extrabold mb-2">Use NOI in Your Full Analysis</h2>
              <p class="text-blue-200 text-sm mb-6 leading-relaxed">NOI is the starting point. Run it through our other calculators for a complete picture of any investment opportunity.</p>
              <div class="grid sm:grid-cols-3 gap-3">
                <NuxtLink to="/cap-rate-calculator"
                  class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
                  <p class="font-bold text-sm">Cap Rate</p>
                  <p class="text-xs text-blue-300 mt-0.5">NOI ÷ Value × 100</p>
                </NuxtLink>
                <NuxtLink to="/dscr-calculator"
                  class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
                  <p class="font-bold text-sm">DSCR</p>
                  <p class="text-xs text-blue-300 mt-0.5">NOI ÷ Debt Service</p>
                </NuxtLink>
                <NuxtLink to="/rental-property-calculator"
                  class="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition text-center">
                  <p class="font-bold text-sm">Rental Property</p>
                  <p class="text-xs text-blue-300 mt-0.5">Full cash flow analysis</p>
                </NuxtLink>
              </div>
            </div>

          </div>
          <!-- /SEO CONTENT -->
    </main>

    <!-- FAQ JSON-LD Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Net Operating Income (NOI) in real estate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NOI is the annual income from an investment property after subtracting all operating expenses, but before deducting mortgage payments, depreciation, or income taxes. It equals Effective Gross Income minus Total Operating Expenses."
          }
        },
        {
          "@type": "Question",
          "name": "Is NOI the same as cash flow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. NOI does not include mortgage payments. Cash flow equals NOI minus annual debt service. NOI is an unlevered metric that measures property performance independent of financing."
          }
        },
        {
          "@type": "Question",
          "name": "What expenses should be excluded from NOI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Exclude mortgage payments, depreciation, income taxes, capital expenditures, and loan fees. Include only operating expenses: property taxes, insurance, management fees, maintenance, and utilities paid by the landlord."
          }
        },
        {
          "@type": "Question",
          "name": "How do lenders use NOI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lenders calculate DSCR (Debt Service Coverage Ratio) as NOI divided by annual debt service. Most commercial lenders require a minimum DSCR of 1.20-1.25x. DSCR loan programs for residential investors typically require at least 1.0x."
          }
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
  title: 'NOI Calculator — Net Operating Income for Rental Properties | RealCalc',
  meta: [
    { name: 'description', content: 'Free NOI Calculator for US real estate investors. Calculate Net Operating Income from rental property income and expenses. Includes implied property value table, expense ratio analysis, and market benchmarks.' },
    { property: 'og:title', content: 'NOI Calculator — Net Operating Income | RealCalc' },
    { property: 'og:description', content: 'Calculate NOI for any US rental property. Real-time results with expense breakdown and implied property value at multiple cap rates.' },
  ]
})

// ── Expense Fields Config ─────────────────────────────────────────────────────
const expenseFields = [
  { key: 'propertyTax',  label: 'Property Taxes',          placeholder: 'e.g. 4,200',  hint: 'Annual tax bill' },
  { key: 'insurance',    label: 'Insurance',               placeholder: 'e.g. 1,800',  hint: 'Hazard + liability' },
  { key: 'management',   label: 'Property Management',     placeholder: 'e.g. 4,800',  hint: '8–10% of gross rents' },
  { key: 'maintenance',  label: 'Maintenance & Repairs',   placeholder: 'e.g. 2,400',  hint: 'Routine upkeep' },
  { key: 'utilities',    label: 'Utilities (landlord)',     placeholder: 'e.g. 600',    hint: 'If paid by owner' },
  { key: 'hoa',          label: 'HOA Fees',                placeholder: 'e.g. 0',      hint: 'If applicable' },
  { key: 'other',        label: 'Other Expenses',          placeholder: 'e.g. 500',    hint: 'Misc operating costs' },
]

// ── Form State ────────────────────────────────────────────────────────────────
const form = reactive({
  grossRent:   null,
  otherIncome: null,
  vacancyRate: null,
  expenses: {
    propertyTax:  null,
    insurance:    null,
    management:   null,
    maintenance:  null,
    utilities:    null,
    hoa:          null,
    other:        null,
  }
})

// ── Computed ──────────────────────────────────────────────────────────────────
const grossIncome = computed(() =>
  (Number(form.grossRent) || 0) + (Number(form.otherIncome) || 0)
)

const vacancyLoss = computed(() =>
  grossIncome.value * ((Number(form.vacancyRate) || 0) / 100)
)

const egi = computed(() => grossIncome.value - vacancyLoss.value)

const totalExpenses = computed(() =>
  Object.values(form.expenses).reduce((sum, v) => sum + (Number(v) || 0), 0)
)

const annualNOI = computed(() => egi.value - totalExpenses.value)

const monthlyNOI = computed(() => annualNOI.value / 12)

const expenseRatio = computed(() =>
  grossIncome.value > 0 ? (totalExpenses.value / grossIncome.value) * 100 : 0
)

const hasResult = computed(() => (Number(form.grossRent) || 0) > 0)

const noiRating = computed(() => {
  if (!hasResult.value || grossIncome.value <= 0) return 'N/A'
  const ratio = expenseRatio.value
  if (ratio <= 40) return 'Good'
  if (ratio <= 52) return 'Average'
  return 'Poor'
})

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatCurrency(val) {
  const n = Number(val) || 0
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}
</script>
