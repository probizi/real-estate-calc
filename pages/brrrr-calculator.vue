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
            <li class="text-gray-700 font-semibold">BRRRR Calculator</li>
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
            BRRRR Calculator — Buy, Rehab, Rent, Refinance, Repeat Strategy
          </h1>
        </div>

        <!-- On this page nav -->
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>

          <!-- Desktop: full list -->
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#what-is-brrrr" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is BRRRR</a></li>
            <li><a href="#step-by-step" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Step by Step</a></li>
            <li><a href="#brrrr-vs-buy-hold" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">BRRRR vs. Buy &amp; Hold</a></li>
            <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
          </ul>

          <!-- Mobile: first 4 always visible + collapsible rest -->
          <div class="md:hidden">
            <ul class="flex flex-wrap gap-x-4 gap-y-1.5">
              <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
              <li><a href="#what-is-brrrr" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is BRRRR</a></li>
              <li><a href="#step-by-step" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Step by Step</a></li>
              <li><a href="#brrrr-vs-buy-hold" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">BRRRR vs. Buy &amp; Hold</a></li>
            </ul>
            <ul v-show="isNavExpanded" class="flex flex-wrap gap-x-4 gap-y-1.5 mt-1.5">
              <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
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

    <!-- STEP INDICATOR -->
    <div class="bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-6xl mx-auto px-4 py-3">
        <div class="flex items-center justify-between overflow-x-auto gap-2 text-xs font-bold">
          <div v-for="(step, idx) in steps" :key="idx"
            class="flex items-center gap-1.5 flex-shrink-0 px-3 py-1.5 rounded-full transition"
            :class="activeStep === idx ? 'text-white' : 'text-gray-400 bg-gray-100'"
            :style="activeStep === idx ? 'background: #1e3a5f;' : ''"
            @click="activeStep = idx"
            style="cursor: pointer;">
            <span class="w-4 h-4 rounded-full flex items-center justify-center text-xs font-extrabold"
              :class="activeStep === idx ? 'bg-yellow-400 text-gray-900' : 'bg-gray-300 text-gray-600'">
              {{ idx + 1 }}
            </span>
            {{ step }}
          </div>
        </div>
      </div>
    </div>

    <!-- MAIN -->
    <main id="calculator" class="max-w-[1100px] mx-auto px-4 pt-8 pb-10 bg-white rounded-2xl shadow-xl" style="border: 1px solid #e5e7eb; border-top: 3px solid #f59e0b;">
      <div class="lg:grid lg:grid-cols-[3fr_2fr] items-stretch">

        <!-- INPUTS -->
        <div class="calc-inputs space-y-6">

          <!-- BUY -->
          <div v-show="activeStep === 0" class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-extrabold" style="background: #1e3a5f;">B</div>
              <h2 class="font-bold text-sm" style="color: #1e3a5f;">BUY — Acquisition</h2>
            </div>
            <div class="p-6 space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="purchase-price" class="block text-sm font-semibold text-gray-700 mb-1.5">Purchase Price</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                    <input id="purchase-price" v-model.number="form.purchasePrice" type="number" min="0" step="1000" placeholder="e.g. 100,000"
                      class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                  </div>
                </div>
                <div>
                  <label for="closing-buy" class="block text-sm font-semibold text-gray-700 mb-1.5">Closing Costs</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                    <input id="closing-buy" v-model.number="form.closingCosts" type="number" min="0" step="500" placeholder="e.g. 3,000"
                      class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                  </div>
                </div>
              </div>
              <div class="flex justify-end">
                <button @click="activeStep = 1" class="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition hover:opacity-90" style="background: #1e3a5f;">
                  Next: Rehab →
                </button>
              </div>
            </div>
          </div>

          <!-- REHAB -->
          <div v-show="activeStep === 1" class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-extrabold" style="background: #f59e0b; color: #1e3a5f;">R</div>
              <h2 class="font-bold text-sm" style="color: #1e3a5f;">REHAB — Renovation Costs</h2>
            </div>
            <div class="p-6 space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="rehab-cost" class="block text-sm font-semibold text-gray-700 mb-1.5">Total Rehab Cost</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                    <input id="rehab-cost" v-model.number="form.rehabCost" type="number" min="0" step="1000" placeholder="e.g. 30,000"
                      class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                  </div>
                </div>
                <div>
                  <label for="rehab-months" class="block text-sm font-semibold text-gray-700 mb-1.5">Rehab Duration</label>
                  <div class="relative">
                    <input id="rehab-months" v-model.number="form.rehabMonths" type="number" min="1" max="24" step="1" placeholder="e.g. 3"
                      class="w-full pr-16 pl-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">months</span>
                  </div>
                </div>
                <div>
                  <label for="holding-monthly" class="block text-sm font-semibold text-gray-700 mb-1.5">Monthly Holding Cost</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                    <input id="holding-monthly" v-model.number="form.monthlyHolding" type="number" min="0" step="100" placeholder="e.g. 1,500"
                      class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Interest, taxes, insurance during rehab</p>
                </div>
                <div>
                  <label for="arv" class="block text-sm font-semibold text-gray-700 mb-1.5">After Repair Value (ARV)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                    <input id="arv" v-model.number="form.arv" type="number" min="0" step="1000" placeholder="e.g. 180,000"
                      class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                  </div>
                </div>
              </div>
              <div class="flex justify-between">
                <button @click="activeStep = 0" class="px-5 py-2.5 rounded-xl text-sm font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition">← Back</button>
                <button @click="activeStep = 2" class="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition hover:opacity-90" style="background: #1e3a5f;">Next: Rent →</button>
              </div>
            </div>
          </div>

          <!-- RENT -->
          <div v-show="activeStep === 2" class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-extrabold" style="background: #16a34a;">R</div>
              <h2 class="font-bold text-sm" style="color: #1e3a5f;">RENT — Rental Income</h2>
            </div>
            <div class="p-6 space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="monthly-rent" class="block text-sm font-semibold text-gray-700 mb-1.5">Monthly Rent</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                    <input id="monthly-rent" v-model.number="form.monthlyRent" type="number" min="0" step="50" placeholder="e.g. 1,500"
                      class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                  </div>
                </div>
                <div>
                  <label for="vacancy-rate" class="block text-sm font-semibold text-gray-700 mb-1.5">Vacancy Rate</label>
                  <div class="relative">
                    <input id="vacancy-rate" v-model.number="form.vacancyRate" type="number" min="0" max="100" step="0.5" placeholder="e.g. 8"
                      class="w-full pr-8 pl-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                  </div>
                </div>
                <div>
                  <label for="monthly-expenses" class="block text-sm font-semibold text-gray-700 mb-1.5">Monthly Operating Expenses</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                    <input id="monthly-expenses" v-model.number="form.monthlyExpenses" type="number" min="0" step="50" placeholder="e.g. 500"
                      class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Taxes, insurance, maintenance, mgmt</p>
                </div>
              </div>
              <div class="flex justify-between">
                <button @click="activeStep = 1" class="px-5 py-2.5 rounded-xl text-sm font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition">← Back</button>
                <button @click="activeStep = 3" class="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition hover:opacity-90" style="background: #1e3a5f;">Next: Refinance →</button>
              </div>
            </div>
          </div>

          <!-- REFINANCE -->
          <div v-show="activeStep === 3" class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-extrabold" style="background: #7c3aed;">R</div>
              <h2 class="font-bold text-sm" style="color: #1e3a5f;">REFINANCE — Cash-Out Refi</h2>
            </div>
            <div class="p-6 space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="refi-ltv" class="block text-sm font-semibold text-gray-700 mb-1.5">Refi LTV</label>
                  <div class="relative">
                    <input id="refi-ltv" v-model.number="form.refiLTV" type="number" min="0" max="100" step="5" placeholder="e.g. 75"
                      class="w-full pr-8 pl-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">Typical: 70–75% of ARV</p>
                </div>
                <div>
                  <label for="refi-rate" class="block text-sm font-semibold text-gray-700 mb-1.5">Refi Interest Rate</label>
                  <div class="relative">
                    <input id="refi-rate" v-model.number="form.refiRate" type="number" min="0" max="30" step="0.125" placeholder="e.g. 7.5"
                      class="w-full pr-8 pl-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                  </div>
                </div>
                <div>
                  <label for="refi-term" class="block text-sm font-semibold text-gray-700 mb-1.5">Loan Term</label>
                  <select id="refi-term" v-model.number="form.refiTerm"
                    class="w-full px-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition bg-white">
                    <option :value="30">30 years</option>
                    <option :value="20">20 years</option>
                    <option :value="15">15 years</option>
                  </select>
                </div>
                <div>
                  <label for="refi-closing" class="block text-sm font-semibold text-gray-700 mb-1.5">Refi Closing Costs</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                    <input id="refi-closing" v-model.number="form.refiClosingCosts" type="number" min="0" step="500" placeholder="e.g. 4,000"
                      class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-gray-900 font-semibold text-base transition" />
                  </div>
                </div>
              </div>
              <div v-if="refiLoanAmount > 0" class="p-3 rounded-xl text-sm font-medium bg-blue-50 border border-blue-100 text-blue-800">
                Refi Loan Amount: <span class="font-bold">{{ formatCurrency(refiLoanAmount) }}</span>
                &nbsp;·&nbsp; Cash Out: <span class="font-bold" :class="cashOut >= 0 ? 'text-green-700' : 'text-red-600'">{{ formatCurrency(cashOut) }}</span>
              </div>
              <div class="flex justify-between">
                <button @click="activeStep = 2" class="px-5 py-2.5 rounded-xl text-sm font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition">← Back</button>
                <button @click="activeStep = 4" class="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition hover:opacity-90" style="background: #1e3a5f;">View Results →</button>
              </div>
            </div>
          </div>

          <!-- REPEAT summary (step 4) — show on desktop always -->
          <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-extrabold" style="background: #f59e0b; color: #1e3a5f;">R</div>
              <h2 class="font-bold text-sm" style="color: #1e3a5f;">REPEAT — Deal Summary</h2>
            </div>
            <div class="p-6 space-y-2 text-sm">
              <div class="flex justify-between py-1 border-b border-gray-50">
                <span class="text-gray-500">Purchase + Closing</span>
                <span class="font-semibold">{{ formatCurrency((form.purchasePrice || 0) + (form.closingCosts || 0)) }}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-gray-50">
                <span class="text-gray-500">Rehab Costs</span>
                <span class="font-semibold">{{ formatCurrency(form.rehabCost || 0) }}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-gray-50">
                <span class="text-gray-500">Holding Costs ({{ form.rehabMonths || 0 }} mo)</span>
                <span class="font-semibold">{{ formatCurrency(totalHoldingCosts) }}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-gray-100 font-bold" style="color: #1e3a5f;">
                <span>Total Cash In</span>
                <span>{{ formatCurrency(totalCashIn) }}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-gray-50">
                <span class="text-gray-500">Refi Loan Amount</span>
                <span class="font-semibold">{{ formatCurrency(refiLoanAmount) }}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-gray-50">
                <span class="text-gray-500">− Refi Closing Costs</span>
                <span class="font-semibold text-red-400">-{{ formatCurrency(form.refiClosingCosts || 0) }}</span>
              </div>
              <div class="flex justify-between py-1 font-extrabold text-base border-t border-gray-200 pt-2"
                :class="cashOut >= 0 ? 'text-green-600' : 'text-red-500'">
                <span>Cash Recaptured</span>
                <span>{{ formatCurrency(netCashOut) }}</span>
              </div>
            </div>
          </div>

        </div>

        <!-- RESULTS -->
        <div class="self-stretch rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl border-t border-gray-200 lg:border-t-0 lg:border-l bg-gray-50">
          <!-- NOTE: overflow must be on the INNER div — overflow on a sticky element breaks stickiness in CSS spec -->
          <div class="lg:sticky lg:top-[4.5rem] lg:self-stretch min-w-0 w-full bg-gray-50 flex flex-col">
          <div class="lg:h-full lg:overflow-y-auto space-y-4 p-4 lg:p-5 scrollbar-thin">

            <!-- Headline Metrics -->
            <div v-if="hasResult" class="rounded-xl border border-gray-200 bg-white overflow-hidden">
              <div class="px-5 py-4 border-b border-gray-100">
                <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">BRRRR Results</p>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <p class="text-xs text-gray-400 mb-1">Cash Left in Deal</p>
                    <p class="text-xl font-extrabold" :class="cashLeftInDeal <= 0 ? 'text-amber-600' : ''" :style="cashLeftInDeal > 0 ? 'color:#1e3a5f;' : ''">
                      {{ formatCurrency(cashLeftInDeal) }}
                    </p>
                  </div>
                  <div>
                    <p class="text-xs text-gray-400 mb-1">Equity Created</p>
                    <p class="text-xl font-extrabold text-green-600">{{ formatCurrency(equityCreated) }}</p>
                  </div>
                  <div>
                    <p class="text-xs text-gray-400 mb-1">Monthly Cash Flow</p>
                    <p class="text-xl font-extrabold" :class="monthlyCashFlow >= 0 ? '' : 'text-red-600'" :style="monthlyCashFlow >= 0 ? 'color:#1e3a5f;' : ''">
                      {{ monthlyCashFlow >= 0 ? '+' : '' }}{{ formatCurrency(monthlyCashFlow) }}
                    </p>
                  </div>
                  <div>
                    <p class="text-xs text-gray-400 mb-1">Cash-on-Cash</p>
                    <p class="text-xl font-extrabold" :class="cashOnCash > 100 ? 'text-amber-600' : ''" :style="cashOnCash <= 100 ? 'color:#1e3a5f;' : ''">
                      {{ cashOnCash > 999 ? '∞' : cashOnCash.toFixed(1) + '%' }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="px-5 py-3 text-xs"
                :class="cashLeftInDeal <= 0 ? 'bg-amber-50 text-amber-800' : 'bg-gray-50 text-gray-500'">
                <span v-if="cashLeftInDeal <= 0">
                  Full capital recapture! Cash-on-cash is effectively infinite — you have no money left in this deal.
                </span>
                <span v-else>
                  {{ formatCurrency(cashLeftInDeal) }} remaining in deal. Increase ARV or LTV to recapture more capital.
                </span>
              </div>
            </div>

            <div v-else class="rounded-xl p-8 text-center border border-dashed border-gray-200 bg-white">
              <p class="text-gray-400 font-medium text-sm">Complete all 4 steps<br>to see your BRRRR results</p>
            </div>

            <!-- Rental Performance -->
            <div v-if="hasResult" class="bg-white rounded-xl border border-gray-200 p-5">
              <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Rental Performance</h3>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between"><span class="text-gray-500">Monthly Rent</span><span class="font-semibold text-green-600">+{{ formatCurrency(effectiveMonthlyRent) }}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">− Operating Expenses</span><span class="font-semibold text-red-400">-{{ formatCurrency(form.monthlyExpenses || 0) }}</span></div>
                <div class="flex justify-between border-t border-gray-100 pt-2 font-bold" style="color: #1e3a5f;"><span>= Monthly NOI</span><span>{{ formatCurrency(monthlyNOI) }}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">− Mortgage P&I</span><span class="font-semibold text-red-400">-{{ formatCurrency(monthlyMortgage) }}</span></div>
                <div class="flex justify-between font-extrabold text-base border-t border-gray-100 pt-2" :class="monthlyCashFlow >= 0 ? 'text-green-600' : 'text-red-500'">
                  <span>= Cash Flow</span><span>{{ monthlyCashFlow >= 0 ? '+' : '' }}{{ formatCurrency(monthlyCashFlow) }}</span>
                </div>
              </div>
            </div>

            <!-- Property Value vs Costs -->
            <div v-if="hasResult && form.arv" class="bg-white rounded-xl border border-gray-200 p-5">
              <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Equity Analysis</h3>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between"><span class="text-gray-500">ARV</span><span class="font-semibold">{{ formatCurrency(form.arv) }}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">Total Cost Basis</span><span class="font-semibold">{{ formatCurrency(totalCashIn) }}</span></div>
                <div class="flex justify-between font-bold border-t border-gray-100 pt-2" style="color: #1e3a5f;"><span>Equity Created</span><span>{{ formatCurrency(equityCreated) }}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">Equity %</span><span class="font-semibold">{{ equityPct.toFixed(1) }}%</span></div>
              </div>
            </div>

          </div>
          </div>
        </div>

      </div>
    </main>

    <!-- SEO CONTENT -->
    <div class="max-w-[1100px] mx-auto px-4 pb-16 mt-12 space-y-12">

      <!-- What is BRRRR -->
      <section class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 id="what-is-brrrr" class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">What Is the BRRRR Strategy?</h2>
        <div class="grid md:grid-cols-2 gap-6 text-gray-600 text-sm leading-relaxed">
          <div>
            <p class="mb-3">BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. It's a wealth-building strategy that allows investors to recycle the same capital across multiple properties by pulling it back out through a cash-out refinance after renovation and stabilization.</p>
            <p>The goal is to buy a distressed property below market value, renovate it to increase value, tenant it for cash flow, then refinance based on the new appraised value (ARV) — recovering as much of your original investment as possible.</p>
          </div>
          <div>
            <p class="mb-3">The holy grail of BRRRR is "infinite return" — when the refinance pulls out 100% or more of your invested capital, leaving $0 in the deal. At that point, you own a cash-flowing rental with no capital tied up, and you can deploy the same money into another deal.</p>
            <p>Even partial recapture (75–90% of capital) is valuable — it dramatically accelerates portfolio growth compared to traditional buy-and-hold, where your down payment stays locked in the property permanently.</p>
          </div>
        </div>
      </section>

      <!-- 5 Steps Visual -->
      <section>
        <h2 id="step-by-step" class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">The BRRRR Method — Step by Step</h2>
        <div class="grid sm:grid-cols-5 gap-4">
          <div v-for="(s, i) in brrrrSteps" :key="i" class="bg-white rounded-2xl border border-gray-200 p-5 text-center">
            <div class="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-extrabold text-lg" :style="`background: ${s.color}`">{{ s.letter }}</div>
            <h3 class="font-bold text-gray-900 mb-1">{{ s.name }}</h3>
            <p class="text-xs text-gray-500 leading-relaxed">{{ s.desc }}</p>
          </div>
        </div>
      </section>

      <!-- BRRRR vs Buy & Hold -->
      <section class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 id="brrrr-vs-buy-hold" class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">BRRRR vs. Traditional Buy & Hold</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-3 pr-4 font-bold text-gray-700">Factor</th>
                <th class="text-center py-3 px-4 font-bold" style="color: #1e3a5f;">BRRRR</th>
                <th class="text-center py-3 px-4 font-bold text-gray-500">Traditional Buy & Hold</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr>
                <td class="py-3 pr-4 font-medium text-gray-700">Capital recycling</td>
                <td class="py-3 px-4 text-center text-green-600 font-semibold">Yes — recapture via refi</td>
                <td class="py-3 px-4 text-center text-gray-500">No — down payment stays locked</td>
              </tr>
              <tr>
                <td class="py-3 pr-4 font-medium text-gray-700">Properties per $100K capital</td>
                <td class="py-3 px-4 text-center text-green-600 font-semibold">Multiple (serial deals)</td>
                <td class="py-3 px-4 text-center text-gray-500">1–2 (capital tied up)</td>
              </tr>
              <tr>
                <td class="py-3 pr-4 font-medium text-gray-700">Equity at purchase</td>
                <td class="py-3 px-4 text-center text-green-600 font-semibold">Built in via buy-below-value</td>
                <td class="py-3 px-4 text-center text-gray-500">Market rate purchase</td>
              </tr>
              <tr>
                <td class="py-3 pr-4 font-medium text-gray-700">Cash flow</td>
                <td class="py-3 px-4 text-center text-yellow-600 font-semibold">Good (higher loan on refi)</td>
                <td class="py-3 px-4 text-center text-gray-500">Better (lower mortgage)</td>
              </tr>
              <tr>
                <td class="py-3 pr-4 font-medium text-gray-700">Complexity</td>
                <td class="py-3 px-4 text-center text-yellow-600 font-semibold">Higher (rehab + refi)</td>
                <td class="py-3 px-4 text-center text-gray-500">Lower (straightforward)</td>
              </tr>
              <tr>
                <td class="py-3 pr-4 font-medium text-gray-700">Best for</td>
                <td class="py-3 px-4 text-center text-green-600 font-semibold">Scaling a portfolio fast</td>
                <td class="py-3 px-4 text-center text-gray-500">Passive income, stability</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- BRRRR by US Market -->
      <section class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 id="benchmarks" class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">BRRRR Deal Benchmarks by US Market</h2>
        <p class="text-gray-500 text-sm mb-6">Typical all-in cost, ARV spread, and refi recapture rates in active BRRRR markets. 2024 data.</p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-3 pr-4 font-bold text-gray-700">State</th>
                <th class="text-right py-3 px-4 font-bold text-gray-700">Typical All-In</th>
                <th class="text-right py-3 px-4 font-bold text-gray-700">Typical ARV</th>
                <th class="text-right py-3 px-4 font-bold text-gray-700">Avg Recapture</th>
                <th class="text-left py-3 pl-4 font-bold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="m in brrrrMarkets" :key="m.state">
                <td class="py-3 pr-4 font-semibold text-gray-900">{{ m.state }}</td>
                <td class="py-3 px-4 text-right text-gray-600">{{ m.allIn }}</td>
                <td class="py-3 px-4 text-right font-bold" style="color: #1e3a5f;">{{ m.arv }}</td>
                <td class="py-3 px-4 text-right font-semibold" :class="m.recaptureColor">{{ m.recapture }}</td>
                <td class="py-3 pl-4 text-gray-500 text-xs">{{ m.notes }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- FAQ -->
      <section class="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 id="faq" class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">BRRRR Calculator FAQ</h2>
        <div class="space-y-5">
          <div v-for="faq in faqs" :key="faq.q" class="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
            <h3 class="font-bold text-gray-900 mb-2">{{ faq.q }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ faq.a }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="rounded-2xl p-8 text-center text-white" style="background: #1e3a5f;">
        <h2 class="text-2xl font-extrabold mb-3">Analyze Every Angle of Your Deal</h2>
        <p class="text-blue-200 mb-6 text-sm">Use our full calculator suite to estimate ARV, model the fix & flip exit, or analyze the rental cash flow before and after refinance.</p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink to="/arv-calculator" class="px-5 py-2.5 rounded-xl font-bold text-sm transition hover:opacity-90" style="background: #f59e0b; color: #1e3a5f;">ARV Calculator</NuxtLink>
          <NuxtLink to="/fix-flip-calculator" class="px-5 py-2.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 transition text-white">Fix & Flip Calculator</NuxtLink>
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
          "name": "What does BRRRR stand for in real estate?",
          "acceptedAnswer": { "@type": "Answer", "text": "BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. It's a real estate investment strategy where you purchase a distressed property, renovate it to increase value, rent it for cash flow, then do a cash-out refinance to recover your invested capital — which you then deploy into the next deal." }
        },
        {
          "@type": "Question",
          "name": "What LTV should I use for the BRRRR refinance?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most BRRRR investors target 70–75% LTV on the refinance. At 75% LTV, you need the ARV to be at least 1.33× your total all-in cost (purchase + rehab + holding + closing) to fully recapture all capital. At 70% LTV, you need ARV to be 1.43× all-in costs. Check with DSCR lenders, community banks, or portfolio lenders for the best terms." }
        },
        {
          "@type": "Question",
          "name": "Does the BRRRR strategy still work in 2024?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, but it requires more selectivity than in 2020–2021. Higher interest rates (7–8%) mean larger mortgage payments that squeeze cash flow after refinancing. Successful BRRRR deals today typically require buying at a steeper discount (50–60 cents on the dollar), markets with strong rent-to-value ratios, and careful holding cost management. Midwest and Southeast markets generally offer better margins than coastal markets." }
        },
        {
          "@type": "Question",
          "name": "What is cash-on-cash return in a BRRRR deal?",
          "acceptedAnswer": { "@type": "Answer", "text": "Cash-on-cash return in BRRRR is calculated as annual cash flow divided by the cash left in the deal after refinancing. If you recapture all your capital ($0 left in the deal), your cash-on-cash is technically infinite — you're earning rental income with zero equity invested. If $10,000 remains in the deal and cash flow is $4,000/year, CoC = 40%." }
        },
        {
          "@type": "Question",
          "name": "What's the biggest risk in the BRRRR strategy?",
          "acceptedAnswer": { "@type": "Answer", "text": "The biggest risks are: (1) ARV coming in lower than expected, reducing the refi loan and capital recaptured; (2) rehab cost overruns pushing up your all-in cost; (3) extended rehab timelines increasing holding costs; and (4) trouble getting tenants or the property appraising at ARV before the seasoning period ends (many lenders require 6–12 months of ownership before a cash-out refi)." }
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
  title: 'BRRRR Calculator — Buy Rehab Rent Refinance Repeat | RealCalc',
  meta: [
    { name: 'description', content: 'Free BRRRR strategy calculator. Calculate cash recaptured, equity created, monthly cash flow, and cash-on-cash return for your Buy Rehab Rent Refinance Repeat deal.' },
    { property: 'og:title', content: 'BRRRR Calculator — Buy Rehab Rent Refinance Repeat' },
    { property: 'og:description', content: 'Analyze your BRRRR deal: cash recaptured, equity created, infinite return calculation. Free tool for US real estate investors.' }
  ]
})

const steps = ['Buy', 'Rehab', 'Rent', 'Refinance', 'Results']
const activeStep = ref(0)

const form = reactive({
  purchasePrice: null,
  closingCosts: null,
  rehabCost: null,
  rehabMonths: null,
  monthlyHolding: null,
  arv: null,
  monthlyRent: null,
  vacancyRate: null,
  monthlyExpenses: null,
  refiLTV: null,
  refiRate: null,
  refiTerm: 30,
  refiClosingCosts: null
})

const formatCurrency = (val) => {
  if (val == null || isNaN(val)) return '$0'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)
}

const totalHoldingCosts = computed(() => {
  return (form.monthlyHolding || 0) * (form.rehabMonths || 0)
})

const totalCashIn = computed(() => {
  return (form.purchasePrice || 0) + (form.closingCosts || 0) + (form.rehabCost || 0) + totalHoldingCosts.value
})

const refiLoanAmount = computed(() => {
  return (form.arv || 0) * ((form.refiLTV || 0) / 100)
})

const cashOut = computed(() => {
  return refiLoanAmount.value - totalCashIn.value
})

const netCashOut = computed(() => {
  return cashOut.value - (form.refiClosingCosts || 0)
})

const cashLeftInDeal = computed(() => {
  return totalCashIn.value - refiLoanAmount.value + (form.refiClosingCosts || 0)
})

const equityCreated = computed(() => {
  return (form.arv || 0) - totalCashIn.value
})

const equityPct = computed(() => {
  if (!form.arv) return 0
  return (equityCreated.value / form.arv) * 100
})

const effectiveMonthlyRent = computed(() => {
  return (form.monthlyRent || 0) * (1 - (form.vacancyRate || 0) / 100)
})

const monthlyNOI = computed(() => {
  return effectiveMonthlyRent.value - (form.monthlyExpenses || 0)
})

const monthlyMortgage = computed(() => {
  const P = refiLoanAmount.value
  const annualRate = (form.refiRate || 0) / 100
  const n = (form.refiTerm || 30) * 12
  if (!P || !annualRate) return 0
  const r = annualRate / 12
  return P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
})

const monthlyCashFlow = computed(() => {
  return monthlyNOI.value - monthlyMortgage.value
})

const cashOnCash = computed(() => {
  if (cashLeftInDeal.value <= 0) return Infinity
  return (monthlyCashFlow.value * 12 / cashLeftInDeal.value) * 100
})

const hasResult = computed(() => {
  return form.purchasePrice && form.arv && form.refiLTV && form.refiRate
})

const brrrrSteps = [
  { letter: 'B', name: 'Buy', color: '#1e3a5f', desc: 'Purchase a distressed or undervalued property below market value, typically with cash or hard money.' },
  { letter: 'R', name: 'Rehab', color: '#f59e0b', desc: 'Renovate to increase value to ARV. Control costs and timeline — every extra month cuts into returns.' },
  { letter: 'R', name: 'Rent', color: '#16a34a', desc: 'Tenant the property at market rent. Stabilization is required by most lenders before refinancing.' },
  { letter: 'R', name: 'Refinance', color: '#7c3aed', desc: 'Do a cash-out refinance at 70–75% of ARV. Use proceeds to recover invested capital.' },
  { letter: 'R', name: 'Repeat', color: '#0891b2', desc: 'Deploy the recovered capital into the next deal. Scale your portfolio without needing fresh cash each time.' }
]

const brrrrMarkets = [
  { state: 'Texas', allIn: '$90–130K', arv: '$145–200K', recapture: '85–100%', recaptureColor: 'text-green-600', notes: 'Strong rent-to-value; DFW, Houston most active' },
  { state: 'Florida', allIn: '$110–160K', arv: '$175–240K', recapture: '80–100%', recaptureColor: 'text-green-600', notes: 'Tampa, Jacksonville offer solid BRRRR fundamentals' },
  { state: 'Georgia', allIn: '$75–120K', arv: '$120–180K', recapture: '85–100%', recaptureColor: 'text-green-600', notes: 'Atlanta suburbs: affordable with strong rent growth' },
  { state: 'Ohio', allIn: '$50–85K', arv: '$85–140K', recapture: '90–110%', recaptureColor: 'text-green-600', notes: 'Cleveland, Columbus: highest recapture rates in US' },
  { state: 'Michigan', allIn: '$45–80K', arv: '$80–130K', recapture: '90–110%', recaptureColor: 'text-green-600', notes: 'Detroit metro offers extreme value-add opportunities' },
  { state: 'Arizona', allIn: '$150–220K', arv: '$210–300K', recapture: '75–95%', recaptureColor: 'text-yellow-600', notes: 'Phoenix: higher entry costs, still workable' },
  { state: 'California', allIn: '$350–600K', arv: '$480–800K', recapture: '60–80%', recaptureColor: 'text-yellow-600', notes: 'Difficult to achieve full recapture; requires very large equity spread' },
  { state: 'Washington', allIn: '$300–500K', arv: '$420–680K', recapture: '65–85%', recaptureColor: 'text-yellow-600', notes: 'Seattle area: partial recapture common, strong appreciation upside' }
]

const faqs = [
  { q: 'What does BRRRR stand for in real estate?', a: "BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. It's a real estate investment strategy where you purchase a distressed property, renovate it to increase value, rent it for cash flow, then do a cash-out refinance to recover your invested capital — which you then deploy into the next deal." },
  { q: 'What LTV should I use for the BRRRR refinance?', a: "Most BRRRR investors target 70–75% LTV on the refinance. At 75% LTV, you need the ARV to be at least 1.33× your total all-in cost (purchase + rehab + holding + closing) to fully recapture all capital. At 70% LTV, you need ARV to be 1.43× all-in costs. Check with DSCR lenders, community banks, or portfolio lenders for the best terms." },
  { q: 'Does the BRRRR strategy still work in 2024?', a: "Yes, but it requires more selectivity than in 2020–2021. Higher interest rates (7–8%) mean larger mortgage payments that squeeze cash flow after refinancing. Successful BRRRR deals today typically require buying at a steeper discount (50–60 cents on the dollar), markets with strong rent-to-value ratios, and careful holding cost management. Midwest and Southeast markets generally offer better margins than coastal markets." },
  { q: 'What is cash-on-cash return in a BRRRR deal?', a: "Cash-on-cash return in BRRRR is calculated as annual cash flow divided by the cash left in the deal after refinancing. If you recapture all your capital ($0 left in the deal), your cash-on-cash is technically infinite — you're earning rental income with zero equity invested. If $10,000 remains in the deal and cash flow is $4,000/year, CoC = 40%." },
  { q: "What's the biggest risk in the BRRRR strategy?", a: "The biggest risks are: (1) ARV coming in lower than expected, reducing the refi loan and capital recaptured; (2) rehab cost overruns pushing up your all-in cost; (3) extended rehab timelines increasing holding costs; and (4) trouble getting tenants or the property appraising at ARV before the seasoning period ends (many lenders require 6–12 months of ownership before a cash-out refi)." }
]
</script>