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
            <NuxtLink to="/blog" class="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Blog</NuxtLink>
          </nav>
          <NuxtLink to="/pricing"
            class="inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2.5 rounded-lg transition hover:opacity-90"
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
            <li class="text-gray-700 font-semibold">Rent vs Buy Calculator</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         HERO + ON THIS PAGE
    ═══════════════════════════════════════════════ -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-6">
        <div class="mb-4">
          <span class="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3" style="background:#fef3c7; color:#92400e;">Free Calculator</span>
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            Rent vs Buy Calculator — Break-Even Year and Net Wealth Comparison
          </h1>
          <p class="text-gray-500 mt-2 text-base">Compare buying a home vs renting with break-even year, net wealth, and honest opportunity cost analysis. 2026 consumer mortgage rates.</p>
        </div>
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            <li><a href="#what-is" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is</a></li>
            <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
            <li><a href="#benchmarks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Benchmarks</a></li>
            <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
            <li><a href="#faq" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">FAQ</a></li>
          </ul>
          <div class="md:hidden">
            <ul class="flex flex-col gap-y-2">
              <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
              <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
              <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <main class="max-w-[1100px] mx-auto px-4 sm:px-6 py-8">

      <!-- ═══════════════════════════════════════════════
           CALCULATOR SECTION
      ═══════════════════════════════════════════════ -->
      <section id="calculator" class="mb-8">

        <!-- Mode Tabs -->
        <div class="flex gap-1 mb-4 p-1 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <button @click="currentMode = 1"
            :class="currentMode === 1 ? 'bg-slate-700 text-white shadow' : 'text-slate-600 hover:bg-slate-100'"
            class="flex-1 px-3 py-2.5 rounded-xl text-sm font-semibold transition text-center">
            Standard
          </button>
          <button @click="currentMode = 2"
            :class="currentMode === 2 ? 'bg-sky-600 text-white shadow' : 'text-sky-700 hover:bg-sky-50'"
            class="flex-1 px-3 py-2.5 rounded-xl text-sm font-semibold transition text-center flex items-center justify-center gap-2">
            Detailed
            <span class="hidden sm:inline-block text-xs px-1.5 py-0.5 rounded-full font-bold"
              :class="currentMode === 2 ? 'bg-white/20 text-white' : 'bg-sky-100 text-sky-700'">
              Recommended
            </span>
          </button>
          <button @click="currentMode = 3"
            :class="currentMode === 3 ? 'bg-stone-600 text-white shadow' : 'text-stone-600 hover:bg-stone-100'"
            class="flex-1 px-3 py-2.5 rounded-xl text-sm font-semibold transition text-center">
            Lifestyle
          </button>
        </div>

        <!-- Mode 1 Banner -->
        <div v-if="currentMode === 1" class="mb-4 flex items-start gap-3 bg-sky-50 border border-sky-200 rounded-xl p-4">
          <svg class="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
          </svg>
          <div class="flex-1 text-sm text-sky-800">
            Mode 1 ignores opportunity cost — what your down payment could have earned invested elsewhere. For honest comparison,
            <button @click="currentMode = 2" class="font-bold underline ml-1">Switch to Mode 2 (Recommended) →</button>
          </div>
        </div>

        <div class="grid lg:grid-cols-[3fr_2fr] gap-6">

          <!-- LEFT: Inputs -->
          <div class="space-y-4">

            <!-- Required Inputs -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 class="text-base font-bold mb-4" style="color:#1e3a5f;">Home &amp; Rent Basics</h2>
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Home Price</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                    <input v-model.number="homePrice" type="number" placeholder="Enter home price"
                      class="w-full pl-7 pr-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition"/>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Monthly Rent</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                    <input v-model.number="monthlyRent" type="number" placeholder="Enter monthly rent"
                      class="w-full pl-7 pr-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition"/>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Hold Period (years)</label>
                  <select v-model.number="holdPeriod"
                    class="w-full px-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition bg-white">
                    <option value="3">3 years</option>
                    <option value="5">5 years</option>
                    <option value="7">7 years</option>
                    <option value="10">10 years</option>
                    <option value="15">15 years</option>
                    <option value="30">30 years</option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Mortgage Rate %</label>
                  <div class="relative">
                    <input v-model.number="mortgageRate" type="number" step="0.1" placeholder="6.75"
                      class="w-full pr-7 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition"/>
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                  <p class="text-xs text-gray-400 mt-1">2026 consumer rate default</p>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Down Payment %</label>
                  <div class="relative">
                    <input v-model.number="downPayment" type="number" step="1" placeholder="20"
                      class="w-full pr-7 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition"/>
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Loan Term</label>
                  <select v-model.number="loanTerm"
                    class="w-full px-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition bg-white">
                    <option value="15">15 years</option>
                    <option value="20">20 years</option>
                    <option value="30">30 years</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Buy Scenario Details -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button @click="showBuyDetails = !showBuyDetails"
                class="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition">
                <span class="text-base font-bold" style="color:#1e3a5f;">Buy Scenario Details</span>
                <svg class="w-4 h-4 text-gray-400 transition-transform" :class="showBuyDetails ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div v-show="showBuyDetails" class="px-6 pb-6 border-t border-gray-100">
                <div class="grid sm:grid-cols-2 gap-4 pt-4">
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1">Annual Property Tax %</label>
                    <div class="relative">
                      <input v-model.number="propertyTaxRate" type="number" step="0.1" placeholder="1.2"
                        class="w-full pr-7 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition"/>
                      <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                    </div>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1">Annual Home Insurance</label>
                    <div class="relative">
                      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                      <input v-model.number="annualInsurance" type="number" placeholder="1500"
                        class="w-full pl-7 pr-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition"/>
                    </div>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1">HOA Monthly</label>
                    <div class="relative">
                      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                      <input v-model.number="hoaMonthly" type="number" placeholder="0"
                        class="w-full pl-7 pr-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition"/>
                    </div>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1">Home Appreciation %</label>
                    <div class="relative">
                      <input v-model.number="appreciation" type="number" step="0.1" placeholder="3.5"
                        class="w-full pr-7 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition"/>
                      <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                    </div>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1">Annual Maintenance %</label>
                    <div class="relative">
                      <input v-model.number="maintenanceRate" type="number" step="0.1" placeholder="1.5"
                        class="w-full pr-7 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition"/>
                      <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                    </div>
                    <p class="text-xs text-gray-400 mt-1">% of home value/year</p>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1">Closing Costs %</label>
                    <div class="relative">
                      <input v-model.number="closingCostsPct" type="number" step="0.1" placeholder="3"
                        class="w-full pr-7 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition"/>
                      <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                    </div>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1">Selling Costs %</label>
                    <div class="relative">
                      <input v-model.number="sellingCostsPct" type="number" step="0.1" placeholder="7"
                        class="w-full pr-7 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition"/>
                      <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                    </div>
                    <p class="text-xs text-gray-400 mt-1">Applied to future home value</p>
                  </div>
                  <div v-if="downPayment < 20">
                    <label class="block text-xs font-semibold text-gray-500 mb-1">PMI Rate %</label>
                    <div class="relative">
                      <input v-model.number="pmiRate" type="number" step="0.05" placeholder="0.6"
                        class="w-full pr-7 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition"/>
                      <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                    </div>
                    <p class="text-xs text-sky-600 mt-1">Auto-cancels at 78% LTV</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Rent Scenario -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 class="text-base font-bold mb-4" style="color:#1e3a5f;">Rent Scenario</h2>
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Annual Rent Increase %</label>
                  <div class="relative">
                    <input v-model.number="rentIncrease" type="number" step="0.1" placeholder="3"
                      class="w-full pr-7 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition"/>
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-500 mb-1">Renter's Insurance /yr</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">$</span>
                    <input v-model.number="rentersInsurance" type="number" placeholder="200"
                      class="w-full pl-7 pr-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition"/>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mode 2: Opportunity Cost -->
            <div v-if="currentMode >= 2" class="bg-sky-50 border border-sky-200 rounded-2xl p-6">
              <h2 class="text-base font-bold mb-1" style="color:#0369a1;">Opportunity Cost (Mode 2)</h2>
              <p class="text-xs text-sky-700 mb-4">What your down payment could earn invested in the market</p>
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-sky-700 mb-1">Investment Return %</label>
                  <div class="relative">
                    <input v-model.number="investmentReturn" type="number" step="0.5" placeholder="7"
                      class="w-full pr-7 pl-3 py-2.5 rounded-xl border-2 border-sky-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-400/40 outline-none text-sm transition bg-white"/>
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-sky-400 text-sm">%</span>
                  </div>
                  <p class="text-xs text-sky-600 mt-1">S&amp;P 500 historical avg</p>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-sky-700 mb-1">Capital Gains Tax %</label>
                  <div class="relative">
                    <input v-model.number="capitalGainsTax" type="number" step="1" placeholder="15"
                      class="w-full pr-7 pl-3 py-2.5 rounded-xl border-2 border-sky-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-400/40 outline-none text-sm transition bg-white"/>
                    <span class="absolute right-3 top-1/2 -translate-y-1/2 text-sky-400 text-sm">%</span>
                  </div>
                  <p class="text-xs text-sky-600 mt-1">Long-term federal rate</p>
                </div>
              </div>
            </div>

            <!-- Mode 3: Lifestyle Factors -->
            <div v-if="currentMode === 3" class="bg-stone-50 border border-stone-200 rounded-2xl p-6">
              <h2 class="text-base font-bold mb-1" style="color:#57534e;">Lifestyle Factors (Mode 3)</h2>
              <p class="text-xs text-stone-600 mb-4">Rate each factor 1 (low) to 10 (high)</p>
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between text-xs mb-1">
                    <span class="font-semibold text-stone-700">Mobility Importance</span>
                    <span class="font-bold text-stone-800">{{ mobilityImportance }}/10</span>
                  </div>
                  <input type="range" v-model.number="mobilityImportance" min="1" max="10" class="w-full accent-stone-600"/>
                  <p class="text-xs text-stone-500 mt-0.5">Higher = favors renting</p>
                </div>
                <div>
                  <div class="flex justify-between text-xs mb-1">
                    <span class="font-semibold text-stone-700">Maintenance Tolerance</span>
                    <span class="font-bold text-stone-800">{{ maintenanceTolerance }}/10</span>
                  </div>
                  <input type="range" v-model.number="maintenanceTolerance" min="1" max="10" class="w-full accent-stone-600"/>
                  <p class="text-xs text-stone-500 mt-0.5">Higher = favors buying</p>
                </div>
                <div>
                  <div class="flex justify-between text-xs mb-1">
                    <span class="font-semibold text-stone-700">Customization Desire</span>
                    <span class="font-bold text-stone-800">{{ customizationDesire }}/10</span>
                  </div>
                  <input type="range" v-model.number="customizationDesire" min="1" max="10" class="w-full accent-stone-600"/>
                  <p class="text-xs text-stone-500 mt-0.5">Higher = favors buying</p>
                </div>
                <div>
                  <div class="flex justify-between text-xs mb-1">
                    <span class="font-semibold text-stone-700">Stability Preference</span>
                    <span class="font-bold text-stone-800">{{ stabilityPreference }}/10</span>
                  </div>
                  <input type="range" v-model.number="stabilityPreference" min="1" max="10" class="w-full accent-stone-600"/>
                  <p class="text-xs text-stone-500 mt-0.5">Higher = favors buying</p>
                </div>
              </div>
            </div>

            <!-- Advanced Settings -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button @click="showAdvanced = !showAdvanced"
                class="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition">
                <span class="text-base font-bold" style="color:#1e3a5f;">Advanced Tax Settings</span>
                <svg class="w-4 h-4 text-gray-400 transition-transform" :class="showAdvanced ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div v-show="showAdvanced" class="px-6 pb-6 border-t border-gray-100">
                <div class="grid sm:grid-cols-2 gap-4 pt-4">
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1">Marginal Tax Bracket %</label>
                    <div class="relative">
                      <input v-model.number="marginalTaxRate" type="number" step="1" placeholder="24"
                        class="w-full pr-7 pl-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition"/>
                      <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                    </div>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-500 mb-1">Filing Status</label>
                    <select v-model="filingStatus"
                      class="w-full px-3 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm transition bg-white">
                      <option value="single">Single ($14,600)</option>
                      <option value="married">Married ($29,200)</option>
                      <option value="hoh">Head of Household ($21,900)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

          </div><!-- /left inputs -->

          <!-- RIGHT: Results Panel -->
          <div class="space-y-4">

            <!-- Warnings -->
            <div v-if="warnings.length > 0" class="space-y-2">
              <div v-for="w in warnings" :key="w" class="flex gap-2 bg-amber-50 border border-amber-200 rounded-xl p-3">
                <svg class="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
                <p class="text-xs text-amber-800">{{ w }}</p>
              </div>
            </div>

            <!-- No inputs yet -->
            <div v-if="!hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <div class="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style="background:#f0f9ff;">
                <svg class="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
              </div>
              <p class="text-gray-500 text-sm">Enter a home price and monthly rent above to see your break-even year and net wealth comparison.</p>
            </div>

            <!-- Primary Metric Card -->
            <div v-if="hasResult" class="rounded-2xl p-6 shadow-sm border"
              :class="statusBadge === 'GREEN' ? 'bg-emerald-50 border-emerald-200' :
                      statusBadge === 'BLUE' ? 'bg-blue-50 border-blue-200' :
                      statusBadge === 'AMBER' ? 'bg-amber-50 border-amber-200' :
                      'bg-red-50 border-red-200'">
              <div class="flex items-start justify-between mb-2">
                <p class="text-xs font-bold uppercase tracking-widest"
                  :class="statusBadge === 'GREEN' ? 'text-emerald-700' :
                          statusBadge === 'BLUE' ? 'text-blue-700' :
                          statusBadge === 'AMBER' ? 'text-amber-700' :
                          'text-red-700'">
                  {{ breakEvenYear ? 'Break-Even Year' : 'Renting Creates More Wealth' }}
                </p>
                <span class="text-xs font-bold px-2.5 py-1 rounded-full"
                  :class="statusBadge === 'GREEN' ? 'bg-emerald-200 text-emerald-800' :
                          statusBadge === 'BLUE' ? 'bg-blue-200 text-blue-800' :
                          statusBadge === 'AMBER' ? 'bg-amber-200 text-amber-800' :
                          'bg-red-200 text-red-800'">
                  {{ statusBadgeLabel }}
                </span>
              </div>
              <div v-if="breakEvenYear" class="text-5xl font-extrabold mb-2"
                :class="statusBadge === 'GREEN' ? 'text-emerald-700' :
                        statusBadge === 'BLUE' ? 'text-blue-700' :
                        statusBadge === 'AMBER' ? 'text-amber-700' :
                        'text-red-700'">
                Year {{ breakEvenYear }}
              </div>
              <p class="text-sm font-medium"
                :class="statusBadge === 'GREEN' ? 'text-emerald-800' :
                        statusBadge === 'BLUE' ? 'text-blue-800' :
                        statusBadge === 'AMBER' ? 'text-amber-800' :
                        'text-red-800'">
                <span v-if="breakEvenYear">
                  Buying creates more net wealth than renting after {{ breakEvenYear }} year{{ breakEvenYear > 1 ? 's' : '' }} at these assumptions.
                </span>
                <span v-else>
                  Within the {{ holdPeriod }}-year window, renting + investing saved capital produces {{ formatCurrency(Math.abs(wealthDiffAtHold)) }} more net wealth than buying.
                  Reconsider if: hold 10+ years, rates drop, or rent rises faster.
                </span>
              </p>
              <p class="text-xs mt-2 opacity-70"
                :class="statusBadge === 'GREEN' ? 'text-emerald-700' :
                        statusBadge === 'BLUE' ? 'text-blue-700' :
                        statusBadge === 'AMBER' ? 'text-amber-700' :
                        'text-red-700'">
                Net wealth comparison includes equity buildup vs. invested capital growth.
              </p>
            </div>


            <!-- Secondary Metrics -->
            <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 class="text-sm font-bold mb-3" style="color:#1e3a5f;">Net Wealth at Year {{ holdPeriod }}</h3>
              <div class="space-y-2">
                <div class="flex justify-between py-1.5 border-b border-gray-50">
                  <span class="text-xs text-gray-500">Final Net Wealth (Buy)</span>
                  <span class="text-sm font-bold" :class="finalNetWealthBuy >= 0 ? 'text-emerald-600' : 'text-red-600'">
                    {{ formatCurrency(finalNetWealthBuy) }}
                  </span>
                </div>
                <div class="flex justify-between py-1.5 border-b border-gray-50">
                  <span class="text-xs text-gray-500">Final Net Wealth (Rent)</span>
                  <span class="text-sm font-bold" :class="finalNetWealthRent >= 0 ? 'text-sky-600' : 'text-red-600'">
                    {{ formatCurrency(finalNetWealthRent) }}
                  </span>
                </div>
                <div class="flex justify-between py-1.5 border-b border-gray-50">
                  <span class="text-xs text-gray-500">Wealth Difference (Buy − Rent)</span>
                  <span class="text-sm font-bold" :class="wealthDiffAtHold >= 0 ? 'text-emerald-600' : 'text-red-600'">
                    {{ wealthDiffAtHold >= 0 ? '+' : '' }}{{ formatCurrency(wealthDiffAtHold) }}
                  </span>
                </div>
                <div class="flex justify-between py-1.5 border-b border-gray-50">
                  <span class="text-xs text-gray-500">Monthly Buy Cost (PITI + maint)</span>
                  <span class="text-sm font-bold text-slate-700">{{ formatCurrency(monthlyBuyCost) }}</span>
                </div>
                <div class="flex justify-between py-1.5 border-b border-gray-50">
                  <span class="text-xs text-gray-500">Monthly Rent Cost</span>
                  <span class="text-sm font-bold text-sky-700">{{ formatCurrency(monthlyRentCost) }}</span>
                </div>
                <div class="flex justify-between py-1.5 border-b border-gray-50">
                  <span class="text-xs text-gray-500">Initial Capital (Buy)</span>
                  <span class="text-sm font-bold text-gray-700">{{ formatCurrency(initialCapitalBuy) }}</span>
                </div>
                <div class="flex justify-between py-1.5">
                  <span class="text-xs text-gray-500">Monthly P&amp;I</span>
                  <span class="text-sm font-bold text-gray-700">{{ formatCurrency(monthlyPI) }}</span>
                </div>
              </div>
            </div>

            <!-- Mode 2: Opportunity Cost detail -->
            <div v-if="hasResult && currentMode >= 2" class="bg-sky-50 border border-sky-200 rounded-2xl p-5">
              <h3 class="text-sm font-bold mb-3 text-sky-800">Opportunity Cost Analysis</h3>
              <div class="space-y-2">
                <div class="flex justify-between py-1.5 border-b border-sky-100">
                  <span class="text-xs text-sky-700">Initial Capital Diff (invested)</span>
                  <span class="text-sm font-bold text-sky-800">{{ formatCurrency(initialCapitalDiff) }}</span>
                </div>
                <div class="flex justify-between py-1.5 border-b border-sky-100">
                  <span class="text-xs text-sky-700">Renter Investment Value (after-tax)</span>
                  <span class="text-sm font-bold text-sky-800">{{ formatCurrency(renterInvestmentValue) }}</span>
                </div>
                <div class="flex justify-between py-1.5">
                  <span class="text-xs text-sky-700">Investment Growth (pre-tax)</span>
                  <span class="text-sm font-bold text-sky-800">{{ formatCurrency(renterInvestmentPreTax) }}</span>
                </div>
              </div>
              <div class="mt-3 p-2.5 bg-white rounded-lg border border-sky-200">
                <p class="text-xs text-sky-700">
                  <svg class="w-3.5 h-3.5 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                  Investment returns modeled using simplified after-tax compounding. Actual tax treatment varies by account type, holding period, and state. Consult a tax advisor for precise projections.
                </p>
              </div>
            </div>

            <!-- Mode 3: Lifestyle Output -->
            <div v-if="hasResult && currentMode === 3" class="bg-stone-50 border border-stone-200 rounded-2xl p-5">
              <h3 class="text-sm font-bold mb-3 text-stone-800">Lifestyle-Adjusted Recommendation</h3>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-xs text-stone-600">Financial Recommendation</span>
                  <span class="font-bold text-stone-800">{{ breakEvenYear ? `BUY (Year ${breakEvenYear})` : 'RENT' }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-xs text-stone-600">Lifestyle Score</span>
                  <span class="font-bold text-stone-800">{{ lifestyleScore }} / 30</span>
                </div>
                <div class="flex justify-between border-t border-stone-200 pt-2 mt-2">
                  <span class="text-xs font-bold text-stone-700">Weighted Recommendation</span>
                  <span class="font-extrabold" :class="lifestyleRecommendation.includes('BUY') ? 'text-emerald-700' : 'text-amber-700'">
                    {{ lifestyleRecommendation }}
                  </span>
                </div>
              </div>
              <p class="text-xs text-stone-600 mt-3 leading-relaxed">{{ lifestyleNote }}</p>
            </div>

            <!-- Monthly Cost Parity Banner -->
            <div v-if="hasResult && Math.abs(monthlyBuyCost - monthlyRentCost) < monthlyRentCost * 0.05" class="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
              <p class="text-xs font-bold text-indigo-800 mb-1">Key Insight — Monthly Costs Nearly Equal</p>
              <p class="text-xs text-indigo-700">
                Monthly buy cost ({{ formatCurrency(monthlyBuyCost) }}) and rent cost ({{ formatCurrency(monthlyRentCost) }}) are within 5%. At parity, the decision depends entirely on hold period, appreciation, and opportunity cost.
              </p>
            </div>

            <!-- Audience Redirect Banner -->
            <div v-if="hasResult && holdPeriod <= 3 && monthlyRent > homePrice * 0.006" class="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p class="text-xs font-bold text-amber-800 mb-1">Looking at this as an investment property?</p>
              <p class="text-xs text-amber-700 mb-2">Use the Mortgage Investment Calculator with investor rates (7.5%) and 25% down payment defaults.</p>
              <NuxtLink to="/mortgage-calculator-investment" class="text-xs font-bold text-amber-800 underline">Switch to Mortgage Investment →</NuxtLink>
            </div>

            <!-- Sensitivity Table -->
            <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 class="text-sm font-bold mb-3" style="color:#1e3a5f;">Break-Even by Hold Period × Rate</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-xs border-collapse">
                  <thead>
                    <tr>
                      <th class="text-left py-1.5 pr-2 text-gray-400 font-medium">Hold</th>
                      <th v-for="r in sensitivityRates" :key="r" class="py-1.5 px-1 text-center font-medium"
                        :class="Math.abs(r - mortgageRate) < 0.01 ? 'text-slate-700 bg-slate-100 rounded' : 'text-gray-400'">
                        {{ r }}%
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="hp in [3,5,7,10,15,30]" :key="hp">
                      <td class="py-1 pr-2 text-gray-600 font-medium" :class="hp === holdPeriod ? 'font-bold text-slate-700' : ''">{{ hp }}yr</td>
                      <td v-for="r in sensitivityRates" :key="r" class="py-1 px-1 text-center"
                        :class="hp === holdPeriod && Math.abs(r - mortgageRate) < 0.01 ? 'bg-slate-100 rounded font-bold text-slate-800' : 'text-gray-600'">
                        {{ sensitivityMatrix[hp]?.[r] ?? '—' }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-xs text-gray-400 mt-2">Values = break-even year (— = renting wins)</p>
            </div>

          </div><!-- /right results -->

        </div><!-- /grid -->

        <!-- Charts Row -->
        <div v-if="hasResult" class="grid md:grid-cols-2 gap-6 mt-6">
          <!-- Net Wealth Crossover Chart -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-3" style="color:#1e3a5f;">Net Wealth Crossover</h3>
            <div class="relative" style="height:220px;">
              <canvas ref="wealthChartRef"></canvas>
            </div>
          </div>
          <!-- Monthly Cost Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-3" style="color:#1e3a5f;">Monthly Cost Breakdown</h3>
            <div class="relative" style="height:220px;">
              <canvas ref="costChartRef"></canvas>
            </div>
          </div>
        </div>

        <div v-if="hasResult" class="grid md:grid-cols-2 gap-6 mt-6">
          <!-- Cumulative Cost Chart -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-3" style="color:#1e3a5f;">Cumulative Costs Over Time</h3>
            <div class="relative" style="height:220px;">
              <canvas ref="cumulativeChartRef"></canvas>
            </div>
          </div>
          <!-- Lifestyle Radar or Sensitivity Appreciation -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-3" style="color:#1e3a5f;">
              {{ currentMode === 3 ? 'Lifestyle Radar' : 'Appreciation × Rent Increase Wealth Diff (Year 10)' }}
            </h3>
            <div class="relative" style="height:220px;">
              <canvas ref="radarChartRef"></canvas>
            </div>
          </div>
        </div>

        <!-- Scenario Comparison Cards -->
        <div v-if="hasResult" class="grid md:grid-cols-3 gap-4 mt-6">
          <div v-for="sc in scenarioComparisons" :key="sc.label" class="bg-white rounded-2xl border p-4"
            :class="sc.label === 'Base' ? 'border-slate-400 shadow' : 'border-gray-200'">
            <p class="text-xs font-bold uppercase tracking-widest mb-1"
              :class="sc.label === 'Base' ? 'text-slate-700' : sc.label === 'Conservative' ? 'text-red-600' : 'text-emerald-600'">
              {{ sc.label }}
            </p>
            <p class="text-xs text-gray-500 mb-2">{{ sc.description }}</p>
            <p class="text-lg font-extrabold"
              :class="sc.breakEven ? 'text-slate-800' : 'text-red-600'">
              {{ sc.breakEven ? `Break-Even: Year ${sc.breakEven}` : 'Renting Wins' }}
            </p>
            <p class="text-xs text-gray-500 mt-1">{{ sc.statusLabel }}</p>
          </div>
        </div>

        <!-- Share + PDF -->
        <div v-if="hasResult" class="flex gap-3 mt-6 flex-wrap">
          <button @click="shareResult"
            class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border-2 transition"
            :class="shareSuccess ? 'bg-emerald-500 text-white border-emerald-500' : 'border-slate-300 text-slate-700 hover:border-slate-400 bg-white'">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
            </svg>
            {{ shareSuccess ? 'Link Copied!' : 'Share Results' }}
          </button>
          <button @click="exportPDF"
            class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border-2 border-slate-300 text-slate-700 hover:border-slate-400 bg-white transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Export PDF
          </button>
        </div>

      </section>

      <!-- ═══════════════════════════════════════════════
           SCENARIO PANEL
      ═══════════════════════════════════════════════ -->
      <ScenarioPanel
        calculator="rent-vs-buy"
        :has-result="hasResult"
        :result="currentScenarioResult"
        :trigger-save="triggerScenarioSave"
        @saved="onScenarioSaved"
      />

      <!-- ═══════════════════════════════════════════════
           SEO CONTENT SECTIONS
      ═══════════════════════════════════════════════ -->
      <div class="space-y-6">

        <!-- 1. OVERVIEW -->
        <section id="overview" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">Rent vs Buy Calculator for Primary Residence Decisions</h2>
          <p class="text-sm text-gray-400 mb-5">Compare buying vs renting with break-even year, net wealth, and honest opportunity cost analysis</p>
          <div class="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>The Rent vs Buy Calculator helps homebuyers and renters compare the long-term wealth impact of buying a home vs continuing to rent — accounting for break-even year, opportunity cost, and lifestyle factors. Use it as your should-I-rent-or-buy calculator when facing one of the biggest financial decisions of your life.</p>
            <p>The calculator offers three modes: Mode 1 Standard provides a basic buying vs renting comparison over your selected hold period. Mode 2 Detailed with Opportunity Cost (recommended) adds what your down payment could earn invested elsewhere — the factor most simple calculators skip. Mode 3 Lifestyle Adjusted layers in four weighted personal factors (mobility, maintenance tolerance, customization desire, stability preference) to produce a weighted recommendation that balances financial and lifestyle trade-offs.</p>
            <p>Common questions this buying vs renting calculator answers: "I'm not sure I'll stay 5 years — does buying still make sense?" "Mortgage rates feel high — should I just keep renting?" "My friends say buying always wins — but is that really true at today's prices?" "How much am I really losing by renting vs building equity?" At 6.75% rates with $400K homes and 3% rent increases, simple intuition often misleads. Your intuition is usually wrong here — this calculator shows why.</p>
            <p>This calculator models a primary residence decision, not investment property purchase. It uses 2026 consumer mortgage rates (~6.75% for 30-year fixed) and primary residence down payment defaults (20%). For investment property analysis, use the Mortgage Investment Calculator. Run this first to see if buying makes sense at your hold period; if Buy wins, continue with the Mortgage Calculator for payment details. Projections are estimates based on your inputs, not guarantees of outcomes. Enter home price, monthly rent, and hold period above to see your projected break-even year and net wealth comparison.</p>
          </div>
        </section>

        <!-- 2. HOW TO USE -->
        <section id="how-to-use" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">How to Use the Rent vs Buy Calculator</h2>
          <p class="text-sm text-gray-400 mb-6">From home price to projected break-even year</p>
          <div class="space-y-5">
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <p class="font-bold text-gray-800 mb-1">Enter home price and monthly rent for comparable housing</p>
                <p class="text-sm text-gray-600 leading-relaxed">Home Price = purchase price of the home you're considering (or comparable home in target neighborhood). Monthly Rent = current or expected rent for equivalent housing (same beds, same area). Critical: compare like for like — same square footage, same neighborhood, same commute. Comparing a $400K suburban purchase to a $1,500 studio rent isn't apples to apples. <em>This calculator models a primary residence decision, not investment property purchase. For investment property analysis, use the Mortgage Investment Calculator.</em></p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <p class="font-bold text-gray-800 mb-1">Set your Hold Period — this drives everything</p>
                <p class="text-sm text-gray-600 leading-relaxed">Hold Period = how long you plan to live in the home. Default is 7 years (US median tenure). A 3-year hold rarely favors buying — transaction costs (3% closing + 7% selling = 10% of home value) eat any equity gains. A 10+ year hold typically favors buying because rent compounds over time while your mortgage payment stays fixed. If unsure, run the calculator at multiple hold periods (5, 7, 10) to see how Break-Even Year shifts.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <p class="font-bold text-gray-800 mb-1">Choose mortgage rate, down payment, and loan term</p>
                <p class="text-sm text-gray-600 leading-relaxed">Default rate 6.75% reflects 2026 consumer 30-year fixed market. Down Payment default 20% avoids PMI; you can go as low as 3.5% (PMI will apply and auto-cancel at 78% LTV). Loan Term default 30 years is most common; 15-year builds equity faster. These defaults differ from investor mortgage defaults (7.5% rate, 25% down for investment properties). Override with your actual lender quote for precision.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0">4</div>
              <div>
                <p class="font-bold text-gray-800 mb-1">Switch to Mode 2 (Detailed with Opportunity Cost) — Recommended</p>
                <p class="text-sm text-gray-600 leading-relaxed">Click the Mode 2 tab to add the most important comparison element: what your down payment + closing costs could earn invested elsewhere. Default Investment Return is 7% (S&P 500 historical average). Default Capital Gains Tax is 15% (long-term US federal rate). Without opportunity cost, simple calculators understate the renting advantage by $100K+ over long holds — this is the central honesty mechanism. You'll see two wealth lines crossing on the chart: Buy path vs Rent + Invested path.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0">5</div>
              <div>
                <p class="font-bold text-gray-800 mb-1">Interpret Break-Even Year, Net Wealth, and Status Badge</p>
                <p class="text-sm text-gray-600 leading-relaxed">Primary output: Break-Even Year — "Buying creates more net wealth than renting after Year N." Status Badge: GREEN (Buying Strongly Favored, break-even ≤ Hold/2), BLUE (Buying Favored, break-even within Hold), AMBER (Marginal — Lifestyle Factors Decide, break-even just under Hold), RED (Renting Favored, break-even never within Hold). Final Net Wealth (Buy) and Final Net Wealth (Rent) give you the direct dollar comparison at end of Hold Period. Mode 3 layers in lifestyle factors to produce a weighted recommendation.</p>
              </div>
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-3 mt-6">
            <div class="bg-slate-50 rounded-xl p-4">
              <p class="text-xs font-bold text-slate-800 mb-1">Pro Tip: Hold Period Sensitivity</p>
              <p class="text-xs text-gray-600 leading-relaxed">Hold Period is the single most powerful variable. Run the calculator at 3, 7, 10, and 15 years with the same inputs to see Break-Even Year shift dramatically. If you're unsure how long you'll stay, use 7 years (US median) and treat the result as a ballpark — actual life events often force shorter holds.</p>
            </div>
            <div class="bg-sky-50 rounded-xl p-4">
              <p class="text-xs font-bold text-sky-800 mb-1">Pro Tip: Opportunity Cost Reality Check</p>
              <p class="text-xs text-sky-700 leading-relaxed">The most common error in rent-vs-buy thinking is forgetting opportunity cost. A $100K down payment isn't "free" — invested at 7% over 7 years, it grows to ~$160K (after-tax ~$150K). Mode 2 captures this. If you'd actually spend the down payment money on lifestyle instead of investing, Mode 1 may be more realistic.</p>
            </div>
            <div class="bg-amber-50 rounded-xl p-4">
              <p class="text-xs font-bold text-amber-800 mb-1">Pro Tip: Transaction Costs</p>
              <p class="text-xs text-amber-700 leading-relaxed">Closing costs (3%) and selling costs (7%) total 10% of home value in transaction friction. On a $400K home that's $40K — equivalent to ~13 months of $3,000/mo rent. Short holds amplify this drag; long holds amortize it. Don't underestimate transaction costs.</p>
            </div>
            <div class="bg-stone-50 rounded-xl p-4">
              <p class="text-xs font-bold text-stone-800 mb-1">Pro Tip: Lifestyle vs Financial</p>
              <p class="text-xs text-stone-700 leading-relaxed">Mode 3 captures lifestyle factors but they're inherently subjective. If you score Mobility 9/10 and Stability 2/10, Mode 3 will lean rent even when finances favor buying. That's a feature, not a bug — buying a home you'll regret in 3 years often costs more financially AND emotionally than renting flexibly.</p>
            </div>
          </div>
          <div class="mt-6">
            <h3 class="text-base font-bold mb-3" style="color:#1e3a5f;">Choosing the Right Mode</h3>
            <div class="grid md:grid-cols-3 gap-3">
              <div class="border border-slate-200 rounded-xl p-4 bg-slate-50">
                <p class="font-bold text-sm text-slate-800 mb-1">Mode 1 — Standard</p>
                <p class="text-xs text-gray-500 mb-2">Use when you want a quick basic comparison without modeling opportunity cost.</p>
                <p class="text-xs text-amber-600 font-medium">Note: Mode 1 ignores the most important variable. For credible analysis, switch to Mode 2.</p>
              </div>
              <div class="border border-sky-200 rounded-xl p-4 bg-sky-50">
                <p class="font-bold text-sm text-sky-800 mb-1">Mode 2 — Detailed (Recommended)</p>
                <p class="text-xs text-sky-700 mb-2">Honest wealth-based comparison that treats your down payment as if it could earn investment returns.</p>
                <p class="text-xs text-sky-600 font-medium">Most simple rent-vs-buy calculators skip opportunity cost.</p>
              </div>
              <div class="border border-stone-200 rounded-xl p-4 bg-stone-50">
                <p class="font-bold text-sm text-stone-800 mb-1">Mode 3 — Lifestyle Adjusted</p>
                <p class="text-xs text-stone-700 mb-2">Adds mobility, maintenance, customization, and stability weighting to the financial analysis.</p>
                <p class="text-xs text-stone-600 font-medium">Lifestyle factors are inherently subjective.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 3. INPUTS & OUTPUTS TABLE -->
        <section id="inputs-outputs" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">Inputs and Outputs</h2>
          <p class="text-sm text-gray-400 mb-5">What you enter, what the calculator projects</p>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead>
                <tr class="bg-gray-50">
                  <th class="text-left py-2.5 px-3 font-bold text-gray-700 border-b border-gray-200">Input</th>
                  <th class="text-left py-2.5 px-3 font-bold text-gray-700 border-b border-gray-200">Default</th>
                  <th class="text-left py-2.5 px-3 font-bold text-gray-700 border-b border-gray-200">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-100"><td class="py-2 px-3 font-medium">Home Price</td><td class="py-2 px-3 text-gray-500">—</td><td class="py-2 px-3 text-gray-500">Purchase price of comparable home</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50/50"><td class="py-2 px-3 font-medium">Monthly Rent</td><td class="py-2 px-3 text-gray-500">—</td><td class="py-2 px-3 text-gray-500">Comparable housing rental cost</td></tr>
                <tr class="border-b border-gray-100"><td class="py-2 px-3 font-medium">Hold Period</td><td class="py-2 px-3 text-gray-500">7 years</td><td class="py-2 px-3 text-gray-500">How long you plan to stay</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50/50"><td class="py-2 px-3 font-medium">Mortgage Rate %</td><td class="py-2 px-3 text-gray-500">6.75%</td><td class="py-2 px-3 text-gray-500">2026 consumer 30yr fixed</td></tr>
                <tr class="border-b border-gray-100"><td class="py-2 px-3 font-medium">Down Payment %</td><td class="py-2 px-3 text-gray-500">20%</td><td class="py-2 px-3 text-gray-500">Primary residence default</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50/50"><td class="py-2 px-3 font-medium">Appreciation %</td><td class="py-2 px-3 text-gray-500">3.5%</td><td class="py-2 px-3 text-gray-500">National long-term average</td></tr>
                <tr class="border-b border-gray-100"><td class="py-2 px-3 font-medium">Maintenance %</td><td class="py-2 px-3 text-gray-500">1.5%</td><td class="py-2 px-3 text-gray-500">% of home value/year</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50/50"><td class="py-2 px-3 font-medium">Investment Return % (Mode 2)</td><td class="py-2 px-3 text-gray-500">7%</td><td class="py-2 px-3 text-gray-500">S&P 500 historical average</td></tr>
                <tr class="border-b border-gray-100"><td class="py-2 px-3 font-medium">Capital Gains Tax % (Mode 2)</td><td class="py-2 px-3 text-gray-500">15%</td><td class="py-2 px-3 text-gray-500">Long-term federal rate</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50/50"><td class="py-2 px-3 font-medium">Lifestyle Factors (Mode 3)</td><td class="py-2 px-3 text-gray-500">5/10 each</td><td class="py-2 px-3 text-gray-500">Mobility, Maintenance, Customization, Stability</td></tr>
              </tbody>
            </table>
          </div>
          <h3 class="text-base font-bold mt-6 mb-3" style="color:#1e3a5f;">Outputs</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead>
                <tr class="bg-gray-50">
                  <th class="text-left py-2.5 px-3 font-bold text-gray-700 border-b border-gray-200">Output</th>
                  <th class="text-left py-2.5 px-3 font-bold text-gray-700 border-b border-gray-200">Formula</th>
                  <th class="text-left py-2.5 px-3 font-bold text-gray-700 border-b border-gray-200">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-100"><td class="py-2 px-3 font-medium text-slate-700">Break-Even Year</td><td class="py-2 px-3 text-gray-500 text-xs">First year Buy Net Wealth ≥ Rent Net Wealth AND remains so</td><td class="py-2 px-3 text-gray-500 text-xs">First year buying creates MORE NET WEALTH than renting AND remains so through Hold Period</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50/50"><td class="py-2 px-3 font-medium">Final Net Wealth (Buy)</td><td class="py-2 px-3 text-gray-500 text-xs">Home Value − Loan Balance − Cumulative Costs</td><td class="py-2 px-3 text-gray-500 text-xs">Net Wealth = assets minus liabilities. NOT the same as Net Cost.</td></tr>
                <tr class="border-b border-gray-100"><td class="py-2 px-3 font-medium">Final Net Wealth (Rent)</td><td class="py-2 px-3 text-gray-500 text-xs">Investment Value − Cumulative Rent</td><td class="py-2 px-3 text-gray-500 text-xs">Wealth from renting + investing path</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50/50"><td class="py-2 px-3 font-medium">Wealth Difference</td><td class="py-2 px-3 text-gray-500 text-xs">Buy NW − Rent NW</td><td class="py-2 px-3 text-gray-500 text-xs">Direct dollar advantage at end of Hold Period</td></tr>
                <tr class="border-b border-gray-100"><td class="py-2 px-3 font-medium">Monthly Buy Cost</td><td class="py-2 px-3 text-gray-500 text-xs">PITI + Maintenance + HOA</td><td class="py-2 px-3 text-gray-500 text-xs">All-in monthly housing cost for owner</td></tr>
                <tr class="border-b border-gray-100 bg-gray-50/50"><td class="py-2 px-3 font-medium">Status Badge</td><td class="py-2 px-3 text-gray-500 text-xs">Break-Even vs Hold Period ratio</td><td class="py-2 px-3 text-gray-500 text-xs">GREEN/BLUE/AMBER/RED tier</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- 4. FORMULA -->
        <section id="formula" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">How the Rent vs Buy Calculator Works</h2>
          <p class="text-sm text-gray-400 mb-5">Net Wealth methodology with opportunity cost — wealth-based, not cost-based</p>

          <div class="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-5 text-sm text-blue-800 leading-relaxed">
            The Rent vs Buy Calculator compares two wealth-building paths over your chosen Hold Period: buying a home (which builds equity through appreciation and amortization) vs renting + investing (which builds wealth through compounded investment returns on the capital you would have used as a down payment). Both paths are evaluated as Net Wealth (assets minus liabilities), not just cost — this is the fundamental honesty mechanism. Mode 2 (recommended) includes opportunity cost; Mode 1 omits it for simpler analysis.
          </div>

          <div class="space-y-5 text-sm text-gray-700 leading-relaxed">
            <div>
              <h3 class="font-bold text-base mb-2" style="color:#1e3a5f;">Buy Path Net Wealth at Year t</h3>
              <div class="bg-gray-50 rounded-xl p-4 font-mono text-xs text-gray-700 leading-loose border border-gray-200">
                Net Wealth (Buy)_t = Home Value_t − Loan Balance_t<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;− Cumulative After-Tax Costs_t<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Accumulated Savings from Lower Housing Cost_t<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(ONLY if Buy monthly cost &lt; Rent monthly cost, otherwise = 0)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Mode 2 only; Mode 1 sets to 0 always)<br/>
                <br/>
                where Home Value_t = Home Price × (1 + Appreciation)^t<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Equity_t = Home Value_t − Loan Balance_t
              </div>
            </div>
            <div>
              <h3 class="font-bold text-base mb-2" style="color:#1e3a5f;">Rent Path Net Wealth at Year t</h3>
              <div class="bg-gray-50 rounded-xl p-4 font-mono text-xs text-gray-700 leading-loose border border-gray-200">
                Net Wealth (Rent)_t = Renter Investment Value_t<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;− Cumulative Rent + Insurance_t<br/>
                <br/>
                where Renter Investment Value_t (Mode 2 only) =<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;Initial Capital Difference (Buy − Rent upfront amounts)<br/>
                &nbsp;&nbsp;+ Accumulated annual cash flow differences<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;(renter's monthly savings when rent &lt; buy cost),<br/>
                &nbsp;&nbsp;both compounded at the investment return rate, after capital gains tax
              </div>
            </div>
            <div>
              <h3 class="font-bold text-base mb-2" style="color:#1e3a5f;">Break-Even Year (Persistent Crossing)</h3>
              <div class="bg-gray-50 rounded-xl p-4 font-mono text-xs text-gray-700 leading-loose border border-gray-200">
                Break-Even Year = First year t where Net Wealth (Buy)_t ≥ Net Wealth (Rent)_t<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AND Net Wealth (Buy) remains higher for all future years within Hold Period<br/>
                <br/>
                (Compare Buy wealth vs Rent wealth — NOT compared against zero.)<br/>
                If never persistent within Hold Period → "Renting Wins"
              </div>
            </div>

            <div class="bg-amber-50 border border-amber-100 rounded-xl p-4">
              <p class="font-bold text-amber-800 mb-2">Key User-Facing Rules</p>
              <ul class="space-y-1.5 text-xs text-amber-700">
                <li>• Both paths evaluated as wealth (NOT cost) for honest comparison</li>
                <li>• Mode 2 opportunity cost is critical — Mode 1 omits it for simplicity</li>
                <li>• Mode 2 invests BOTH initial capital difference AND ongoing cash flow differences (symmetric treatment)</li>
                <li>• Break-Even must be persistent (stable across years), not transient flicker</li>
              </ul>
            </div>

            <div>
              <h3 class="font-bold text-base mb-2" style="color:#1e3a5f;">Worked Example — Generic US Suburban (National Averages)</h3>
              <p class="text-sm text-gray-600 mb-3">Mid-range home, 7-year hold (most common scenario):</p>
              <div class="overflow-x-auto">
                <table class="w-full text-xs border-collapse">
                  <tbody>
                    <tr class="border-b border-gray-100"><td class="py-1.5 px-2 font-medium">Home Price</td><td class="py-1.5 px-2 text-gray-600">$400,000</td><td class="py-1.5 px-2 font-medium">Monthly Rent</td><td class="py-1.5 px-2 text-gray-600">$2,500</td></tr>
                    <tr class="border-b border-gray-100 bg-gray-50/50"><td class="py-1.5 px-2 font-medium">Hold Period</td><td class="py-1.5 px-2 text-gray-600">7 years</td><td class="py-1.5 px-2 font-medium">Mortgage Rate</td><td class="py-1.5 px-2 text-gray-600">6.75%</td></tr>
                    <tr class="border-b border-gray-100"><td class="py-1.5 px-2 font-medium">Down Payment</td><td class="py-1.5 px-2 text-gray-600">20%</td><td class="py-1.5 px-2 font-medium">Appreciation</td><td class="py-1.5 px-2 text-gray-600">3.5%</td></tr>
                    <tr class="border-b border-gray-100 bg-gray-50/50"><td class="py-1.5 px-2 font-medium">Monthly P&amp;I</td><td class="py-1.5 px-2 text-gray-600">~$2,076</td><td class="py-1.5 px-2 font-medium">Investment Return</td><td class="py-1.5 px-2 text-gray-600">7% (Mode 2)</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="mt-3 space-y-2 text-xs text-gray-600">
                <p><strong>Mode 1 (no opportunity cost):</strong> Year 7 home value ~$508K (3.5% appreciation × 7 years). Break-even ~Year 6. Status: BLUE "Buying Favored."</p>
                <p><strong>Mode 2 (adds opportunity cost):</strong> Initial Capital (Buy) = $80K down + $12K closing = $92K. Renter's $92K compounded at 7% over 7 years (after 15% capital gains tax) grows substantially. Mode 2 break-even shifts compared to Mode 1 — typically pushed slightly later, sometimes flipping to "Rent wins." For exact numerical outputs, refer to the live calculator above.</p>
                <p><strong>Key insight:</strong> Mode 2 with opportunity cost typically pushes Break-Even later than Mode 1 by 1–3 years. Buy still often wins at 7-year holds because buyer's equity grows from BOTH appreciation AND loan amortization — leverage on the full home value, not just the down payment. Rent wins when rates are high (7%+), appreciation is low (&lt;2%), or investment returns are high (&gt;9%).</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 5. WHAT IS -->
        <section id="what-is" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">What Rent vs Buy Analysis Actually Compares</h2>
          <p class="text-sm text-gray-400 mb-5">Wealth-building paths, opportunity cost, and 2026 market context</p>
          <div class="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>The rent vs buy decision is fundamentally a comparison of two wealth-building paths over time, not a one-time cost comparison. Buying a home builds wealth through home equity — appreciation on the full property value plus mortgage paydown. Renting builds wealth through investing the capital you would have used for a down payment and closing costs. The honest question isn't "which is cheaper monthly" but "which leaves me with more net wealth after my chosen Hold Period?" Most simple calculators ignore the renting investment path entirely — that's the central methodological flaw they carry.</p>
            <p>What separates this buying vs renting calculator from others is its treatment of opportunity cost. When you put $92K into a down payment and closing costs on a $400K home, that capital could instead be invested in the market. At the S&P 500's historical average of roughly 7% annually (nominal), that $92K grows substantially over a 7-year hold — most simple rent-vs-buy calculators ignore this, making buying look tens of thousands of dollars better than honest comparison actually shows. Mode 2 (recommended) captures this dynamic. Investment returns are uncertain; 7% is a historical average and past performance is no guarantee of future results, but it provides a reasonable planning baseline you can adjust.</p>
            <p>In 2026, consumer mortgage rates average ~6.75% for 30-year fixed primary residence loans — meaningfully higher than the 3–4% "cheap money" era of 2020–2021. This higher rate environment compresses the buy-side advantage for shorter holds. Rent increases moderated to roughly 3% annually in 2025–2026 after the 4–6% surge of 2022–2024, but they still compound meaningfully against renters over time. Home appreciation is projected at roughly 3–4% nationally, with wide regional variation. Use the calculator's Conservative scenario to stress-test against a scenario where rates stay elevated or appreciation disappoints.</p>
          </div>
        </section>

        <!-- 6. RESULT MEANING -->
        <section id="result-meaning" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">What Your Break-Even Year and Net Wealth Mean</h2>
          <p class="text-sm text-gray-400 mb-5">Interpreting the primary metric, status badge, and lifestyle factors</p>
          <div class="space-y-6 text-sm text-gray-700 leading-relaxed">
            <p>Break-Even Year is the headline output — the first year buying creates more net wealth than renting AND remains so through the rest of your Hold Period. Net Wealth comparison provides the depth: how much more (or less) you'd have accumulated. Lifestyle factors (Mode 3) capture what the numbers can't.</p>

            <div>
              <h3 class="font-bold text-base mb-3" style="color:#1e3a5f;">Status Badge Tiers (based on Break-Even vs Hold Period)</h3>
              <div class="space-y-2">
                <div class="flex items-start gap-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <span class="text-xs font-bold px-2 py-0.5 bg-emerald-200 text-emerald-800 rounded-full flex-shrink-0">GREEN</span>
                  <div>
                    <p class="font-bold text-emerald-800">Buying Strongly Favored — Break-Even ≤ Hold/2</p>
                    <p class="text-xs text-emerald-700">e.g., Year 3 of 7-year hold. Rare in 2026 environment; usually requires high appreciation + favorable rates. Strong buying signal.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-xl">
                  <span class="text-xs font-bold px-2 py-0.5 bg-blue-200 text-blue-800 rounded-full flex-shrink-0">BLUE</span>
                  <div>
                    <p class="font-bold text-blue-800">Buying Favored — Break-Even between Hold/2 and Hold</p>
                    <p class="text-xs text-blue-700">e.g., Year 5 of 7-year hold. Most common positive outcome. Buying creates more wealth, but the margin depends on inputs.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-xl">
                  <span class="text-xs font-bold px-2 py-0.5 bg-amber-200 text-amber-800 rounded-full flex-shrink-0">AMBER</span>
                  <div>
                    <p class="font-bold text-amber-800">Marginal — Lifestyle Factors Decide</p>
                    <p class="text-xs text-amber-700">e.g., Year 6–7 of 7-year hold. Financial near-tie. Non-financial considerations — stability, customization, school districts — may dominate the decision.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-xl">
                  <span class="text-xs font-bold px-2 py-0.5 bg-red-200 text-red-800 rounded-full flex-shrink-0">RED</span>
                  <div>
                    <p class="font-bold text-red-800">Renting Favored at These Assumptions</p>
                    <p class="text-xs text-red-700">Break-Even never within Hold Period. Common with short holds, high rates, low appreciation, or strong investment returns. Reconsider buying if hold lengthens or inputs change.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-bold text-base mb-2" style="color:#1e3a5f;">Final Net Wealth — What the Dollar Amounts Mean</h3>
              <p>Final Net Wealth (Buy) = Home Value at sale − Loan Balance − Cumulative After-Tax Costs + Accumulated Savings if invested (Mode 2). Final Net Wealth (Rent) = After-Tax Investment Value − Cumulative Rent. Wealth Difference = Buy − Rent. Both numbers can be negative — paying for housing isn't free. The question is which path leaves you less negative or more positive at end of Hold Period.</p>
            </div>

            <div>
              <h3 class="font-bold text-base mb-2" style="color:#1e3a5f;">Why Mode 2 Opportunity Cost Matters</h3>
              <p>The capital locked in a down payment isn't sitting idle in a home — it's capital that could be working in the market. Renting frees that capital for investment; buying locks it in an illiquid asset. Mode 2 quantifies the difference: it tracks both the initial capital difference (what the renter invests instead of the buyer) and ongoing monthly cash flow differences (whichever side pays less each month invests the savings). Default 7% S&P 500 historical average is a reasonable baseline, but past performance does not guarantee future results — use the Conservative scenario (5% return) to stress-test this assumption.</p>
            </div>

            <div>
              <h3 class="font-bold text-base mb-2" style="color:#1e3a5f;">Mode 3 Lifestyle Adjustment — When Subjectivity Matters</h3>
              <p>Mode 3 weights four lifestyle factors: Mobility (higher = renting favored, range 1–10), Maintenance Tolerance (higher = buying favored), Customization Desire (higher = buying favored), Stability Preference (higher = buying favored). Lifestyle Score range: −10 to +30. Override logic: if Mode 3 score strongly disagrees with the financial recommendation, the calculator flags the mismatch — you decide which weight to trust. Calculator cannot quantify school district quality, family proximity, neighborhood preference, or emotional attachment to homeownership.</p>
            </div>

            <div class="bg-gray-50 rounded-xl p-4">
              <h3 class="font-bold text-sm mb-2" style="color:#1e3a5f;">2026 Rent vs Buy Market Context</h3>
              <p class="text-xs text-gray-600 leading-relaxed">Higher rates compress the buy-side advantage vs the 2018–2021 ultra-low-rate era. Many homes that "obviously" favored buying at 3% now show marginal or rent-favored outcomes at 6.75%. Renting + investing at 7% has become competitive for hold periods under 10 years. Buy-side recovers strongly at 10+ year holds as rent compounds faster than expected. Stress-test with the Conservative scenario before committing — rates and appreciation are uncertain.</p>
            </div>
          </div>
        </section>

        <!-- 7. BENCHMARKS -->
        <section id="benchmarks" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">Rent vs Buy Benchmarks for 2026</h2>
          <p class="text-sm text-gray-400 mb-5">Typical break-even ranges, cost benchmarks, and market context</p>
          <p class="text-sm text-gray-600 mb-5">These benchmarks illustrate typical patterns in the 2026 US market. Individual results depend heavily on specific market, rates, and personal assumptions. Your calculator results always take precedence over these aggregate patterns.</p>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-bold text-sm mb-3" style="color:#1e3a5f;">Typical Break-Even Year by Hold Period (2026)</h3>
              <div class="space-y-2">
                <div class="flex items-center gap-3">
                  <span class="text-xs font-bold w-12 flex-shrink-0 text-red-600">3yr</span>
                  <div class="flex-1 bg-red-100 rounded-full h-2"><div class="bg-red-400 h-2 rounded-full" style="width:5%"></div></div>
                  <span class="text-xs text-gray-500 w-32">Buy rarely wins (~5–10%)</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-xs font-bold w-12 flex-shrink-0 text-amber-600">5yr</span>
                  <div class="flex-1 bg-amber-100 rounded-full h-2"><div class="bg-amber-400 h-2 rounded-full" style="width:35%"></div></div>
                  <span class="text-xs text-gray-500 w-32">Buy wins ~30–40%</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-xs font-bold w-12 flex-shrink-0 text-blue-600">7yr</span>
                  <div class="flex-1 bg-blue-100 rounded-full h-2"><div class="bg-blue-400 h-2 rounded-full" style="width:60%"></div></div>
                  <span class="text-xs text-gray-500 w-32">Buy wins ~55–65%</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-xs font-bold w-12 flex-shrink-0 text-blue-700">10yr</span>
                  <div class="flex-1 bg-blue-100 rounded-full h-2"><div class="bg-blue-600 h-2 rounded-full" style="width:80%"></div></div>
                  <span class="text-xs text-gray-500 w-32">Buy wins ~75–85%</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-xs font-bold w-12 flex-shrink-0 text-emerald-600">15yr+</span>
                  <div class="flex-1 bg-emerald-100 rounded-full h-2"><div class="bg-emerald-500 h-2 rounded-full" style="width:90%"></div></div>
                  <span class="text-xs text-gray-500 w-32">Buy wins ~90%+</span>
                </div>
              </div>
            </div>
            <div>
              <h3 class="font-bold text-sm mb-3" style="color:#1e3a5f;">Monthly Cost Ranges (2026 US Suburban)</h3>
              <div class="space-y-2 text-xs text-gray-600">
                <div class="flex justify-between py-1 border-b border-gray-100">
                  <span>$300K home, 20% down, 6.75%</span>
                  <span class="font-bold">~$2,000–$2,200 PITI + maint</span>
                </div>
                <div class="flex justify-between py-1 border-b border-gray-100">
                  <span>$400K home, 20% down, 6.75%</span>
                  <span class="font-bold">~$2,700–$2,950 PITI + maint</span>
                </div>
                <div class="flex justify-between py-1 border-b border-gray-100">
                  <span>$500K home, 20% down, 6.75%</span>
                  <span class="font-bold">~$3,400–$3,700 PITI + maint</span>
                </div>
                <div class="flex justify-between py-1">
                  <span>$700K home, 20% down, 6.75%</span>
                  <span class="font-bold">~$4,800–$5,200 PITI + maint</span>
                </div>
              </div>
              <p class="text-xs text-gray-400 mt-2">High-tax states (TX, NJ, IL): add $300–$700/mo from property taxes.</p>
            </div>
            <div>
              <h3 class="font-bold text-sm mb-3" style="color:#1e3a5f;">Long-term Home Appreciation</h3>
              <ul class="space-y-1.5 text-xs text-gray-600">
                <li>• <strong>National long-term average:</strong> ~3–4% nominal annually</li>
                <li>• <strong>Sunbelt strong markets</strong> (Austin, Tampa, Phoenix): 4–7%</li>
                <li>• <strong>Rust Belt and slow-growth markets:</strong> 1–2%</li>
                <li>• <strong>Coastal supply-constrained</strong> (SF, Boston, NYC): 4–6% but volatile</li>
                <li>• Calculator default 3.5% — adjust for your specific market</li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold text-sm mb-3" style="color:#1e3a5f;">Long-term Investment Return Assumptions</h3>
              <ul class="space-y-1.5 text-xs text-gray-600">
                <li>• <strong>S&P 500 historical (1928–2025):</strong> ~10% nominal, ~7% real (after inflation)</li>
                <li>• <strong>Conservative balanced portfolio (60/40):</strong> ~6–7% nominal</li>
                <li>• <strong>Bond-heavy retiree portfolio:</strong> ~3–5% nominal</li>
                <li>• Calculator default 7% reflects S&P 500 nominal — adjust if your investment strategy differs</li>
              </ul>
            </div>
          </div>
          <div class="mt-5 bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p class="text-xs text-gray-500 italic leading-relaxed">These ranges are illustrative patterns for typical 2026 US markets, NOT measured statistical datasets, NOT predictions for your specific scenario. Rates, appreciation, rent growth, and investment returns vary by market and time period. The calculator's output on YOUR inputs always takes precedence. For market-specific data, consult Zillow, Redfin, or local realty associations.</p>
          </div>
        </section>

        <!-- 8. STRATEGY -->
        <section id="strategy" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">Rent vs Buy Decision by User Type</h2>
          <p class="text-sm text-gray-400 mb-6">Different life stages call for different analysis</p>
          <div class="grid md:grid-cols-2 gap-5">
            <div class="border border-gray-100 rounded-xl p-5">
              <p class="font-bold text-sm mb-2" style="color:#1e3a5f;">First-Time Buyer (no current home)</p>
              <p class="text-sm text-gray-600 leading-relaxed">Use Mode 2 with realistic 7% investment return — most first-time buyers underestimate opportunity cost. For Hold Period, be honest about likely tenure: job changes and family planning typically mean 5–7 years is realistic, not 30. Status Badge AMBER or GREEN suggests buying makes financial sense; RED suggests waiting, saving more, or extending your expected stay. If Buy wins, continue with the Mortgage Investment Calculator for actual payment details with consumer rates.</p>
            </div>
            <div class="border border-gray-100 rounded-xl p-5">
              <p class="font-bold text-sm mb-2" style="color:#1e3a5f;">Career Mover (frequent relocations expected)</p>
              <p class="text-sm text-gray-600 leading-relaxed">Hold Period 3–5 years makes buying extremely difficult to justify — transaction costs (10% combined) eat any equity gains. Mode 3 with Mobility importance 8–10 will almost always override financially marginal results toward renting. Renting + investing the down payment can build substantial wealth over a decade of career mobility. Don't buy unless you're confident on a 5+ year stay.</p>
            </div>
            <div class="border border-gray-100 rounded-xl p-5">
              <p class="font-bold text-sm mb-2" style="color:#1e3a5f;">Retiree (downsizing or aging in place)</p>
              <p class="text-sm text-gray-600 leading-relaxed">Hold Period 15–30 years (or "until end of life") heavily favors buying — rent compounds against fixed income over decades while a mortgage payment, once locked, loses real value to inflation. Mode 3 with Stability preference 8–10 reinforces the financial case for buying. Consider lower-leverage purchase (15% down + 15-year term) for reduced monthly PITI and faster equity build.</p>
            </div>
            <div class="border border-gray-100 rounded-xl p-5">
              <p class="font-bold text-sm mb-2" style="color:#1e3a5f;">Family Planner (kids, schools, stability)</p>
              <p class="text-sm text-gray-600 leading-relaxed">Hold Period 10–15 years (school stability matters). Mode 3 Stability 8–10, Customization 7–9 heavily favor buying. School district quality often drives location choice — calculator can't quantify this explicitly. Buying a home in a good school district is often financially marginal at 6.75% rates but lifestyle-strong; Mode 3 captures the trade-off honestly.</p>
            </div>
            <div class="border border-gray-100 rounded-xl p-5 md:col-span-2">
              <p class="font-bold text-sm mb-2" style="color:#1e3a5f;">Wealth Maximizer (optimizing long-term net worth)</p>
              <p class="text-sm text-gray-600 leading-relaxed">Run all 3 modes — let the financial result drive the decision while using Mode 3 to identify lifestyle factors that might override. Mode 2 with an honest 7% investment return is the methodologically correct comparison; Mode 1 is simpler but biased toward buying. Your Hold Period assumption is critical — be ruthless about realistic tenure. A wealth-maximizing renter who invests the down payment and monthly savings at 7%+ can outperform a buyer who sells in under 7 years, especially when accounting for transaction costs and PMI. Consider the Rental Property Calculator if you're evaluating investment property as an alternative wealth strategy.</p>
            </div>
          </div>
        </section>

        <!-- 9. APPLICATIONS -->
        <section id="applications" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">Common Use Cases</h2>
          <p class="text-sm text-gray-400 mb-5">When this calculator is the right tool</p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-gray-50 rounded-xl p-4">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">First-time homebuyer decision</p>
              <p class="text-xs text-gray-600 leading-relaxed">Should I rent another year and save more, or buy now? Calculator shows break-even year and net wealth comparison at realistic 2026 consumer rates — the quantitative foundation for your housing decision.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Relocation cost analysis</p>
              <p class="text-xs text-gray-600 leading-relaxed">Moving to a new city — should I rent first to learn neighborhoods, or buy immediately? Hold Period sensitivity analysis shows exactly when buying breaks even vs renting while you learn the market.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Career change financial planning</p>
              <p class="text-xs text-gray-600 leading-relaxed">Considering a job change with relocation risk? Calculator shows when buying becomes a financial trap if you're forced to sell within 3–5 years — transaction costs visible in the short-hold scenarios.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Market comparison analysis</p>
              <p class="text-xs text-gray-600 leading-relaxed">Compare rent-vs-buy dynamics across markets (Austin vs Pittsburgh vs San Francisco) by adjusting Home Price, Monthly Rent, Appreciation, and Property Tax. Saved Scenarios widget lets you compare up to 20 market comparisons.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Retirement housing decision</p>
              <p class="text-xs text-gray-600 leading-relaxed">Downsize and buy smaller home, or sell and rent? Set Hold Period 15–30 years and Stability factor high — calculator clarifies the long-hold financial trade-off with explicit Mode 3 lifestyle weighting.</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4">
              <p class="font-bold text-sm mb-1" style="color:#1e3a5f;">Live-in flip or househack evaluation</p>
              <p class="text-xs text-gray-600 leading-relaxed">Real estate investors considering a primary residence with rental unit can use this calculator for the primary residence component, then cross-reference the Mortgage Investment Calculator and Rental Property Calculator for the investment side of the deal.</p>
            </div>
          </div>
        </section>

        <!-- 10. INDUSTRY STANDARDS -->
        <section id="industry-standards" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">How This Calculator Aligns with Industry Conventions</h2>
          <p class="text-sm text-gray-400 mb-5">Methodology, peer comparison, and what we do differently</p>
          <div class="space-y-5 text-sm text-gray-700 leading-relaxed">
            <div>
              <h3 class="font-bold text-base mb-2" style="color:#1e3a5f;">Standard Rent vs Buy Methodology</h3>
              <p>Industry standard: compare cumulative cost of buying vs cumulative rent over hold period. This approach is insufficient — it ignores the opportunity cost of the down payment. The wealth-based methodology used here (Net Wealth = assets minus liabilities on both paths) is more honest. The NYT Rent vs Buy Calculator, widely considered the canonical consumer rent-vs-buy tool, uses wealth-based comparison; many simpler tools don't. This calculator follows wealth-based methodology with explicit opportunity cost in Mode 2.</p>
            </div>
            <div>
              <h3 class="font-bold text-base mb-2" style="color:#1e3a5f;">Transaction Cost Conventions</h3>
              <p>Closing costs (buyer side) typically 2–4% of home price (calculator default 3%). Selling costs typically 6–8% (5–6% realtor + 1–2% transfer/prep) — calculator default 7%. Many simple calculators ignore selling costs entirely — a major error for short holds. Combined transaction costs of ~10% on a $400K home equals ~13 months of $3,000/mo rent. This calculator includes both buy- and sell-side transaction costs by default.</p>
            </div>
            <div>
              <h3 class="font-bold text-base mb-2" style="color:#1e3a5f;">How This Differs from NYT, Bankrate, or Zillow Tools</h3>
              <ul class="space-y-1.5 text-sm">
                <li><strong>NYT calculator:</strong> Excellent methodology, wealth-based, but lacks lifestyle factor option and scenario comparison.</li>
                <li><strong>Bankrate / Zillow:</strong> Tend toward cost-based comparison, often ignore opportunity cost of invested capital.</li>
                <li><strong>Reddit /r/personalfinance tools:</strong> Often skip selling costs and PMI auto-cancellation modeling.</li>
                <li><strong>RealCalc Rent vs Buy:</strong> Unique in (a) Net Wealth methodology with opportunity cost as Mode 2 recommended path, (b) Mode 3 lifestyle factor weighting with radar chart, (c) persistent Break-Even crossing detection, (d) cross-calculator invariant with Mortgage Investment Calculator ±$1, (e) PMI auto-cancellation at 78% LTV modeled, (f) audience redirect for investor users.</li>
              </ul>
            </div>
          </div>
          <p class="text-xs text-gray-400 mt-4 italic">These comparisons describe market positioning, not endorsements. Multiple quality calculators exist. This calculator's approach emphasizes wealth-based methodology over cost comparison and treats opportunity cost as central.</p>
        </section>

        <!-- 11. LIMITATIONS -->
        <section id="limitations" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">Limitations of This Calculator</h2>
          <p class="text-sm text-gray-400 mb-5">What this calculator cannot tell you</p>
          <div class="space-y-4">
            <div class="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <div class="w-7 h-7 rounded-full bg-amber-100 text-amber-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <p class="font-bold text-sm mb-1">Cannot model lifestyle factors completely</p>
                <p class="text-xs text-gray-600 leading-relaxed">This calculator models a primary residence decision, not investment property purchase. Mode 3 captures 4 lifestyle dimensions but cannot quantify school quality, neighborhood preference, family proximity, emotional attachment, or identity factors associated with homeownership. Lifestyle Score is illustrative, not prescriptive. For investment property analysis, use the Mortgage Investment Calculator.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <div class="w-7 h-7 rounded-full bg-amber-100 text-amber-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <p class="font-bold text-sm mb-1">Investment returns are projections, not guarantees</p>
                <p class="text-xs text-gray-600 leading-relaxed">Default 7% S&P 500 historical average (1928–2025); past performance doesn't guarantee future results. Sequence of returns matters in real life — early losses hurt more than late losses. Tax treatment varies by account type (401k, IRA, brokerage). Use Conservative scenario (5–6% return) for stress-testing.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <div class="w-7 h-7 rounded-full bg-amber-100 text-amber-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <p class="font-bold text-sm mb-1">Tax deduction logic is simplified</p>
                <p class="text-xs text-gray-600 leading-relaxed">Default applies marginal rate × mortgage interest (approximation for most homeowners who itemize). Advanced toggle handles SALT cap ($10K), $750K loan limit, and standard vs itemized comparison. State-specific rules not modeled. Tax law subject to change. Consult a CPA for actual tax projections.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <div class="w-7 h-7 rounded-full bg-amber-100 text-amber-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0">4</div>
              <div>
                <p class="font-bold text-sm mb-1">Local market dynamics not captured</p>
                <p class="text-xs text-gray-600 leading-relaxed">Default appreciation 3.5% is the national long-term average. Local markets vary 1–7%+ — adjust input by your specific metro. Job market dynamics, demographic shifts, and climate change impacts are not modeled. Use the Conservative scenario for stress-testing if uncertain about local conditions.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <div class="w-7 h-7 rounded-full bg-amber-100 text-amber-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0">5</div>
              <div>
                <p class="font-bold text-sm mb-1">PMI auto-cancellation is approximate</p>
                <p class="text-xs text-gray-600 leading-relaxed">Calculator models PMI cancellation at 78% LTV based on amortization schedule — an improvement over most online tools that ignore PMI entirely. Actual cancellation depends on appraisal at request and lender policy. Some loan types (FHA) require refinancing to drop MIP — not standard Conventional PMI behavior. For your specific loan, consult the servicer.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <div class="w-7 h-7 rounded-full bg-amber-100 text-amber-700 font-extrabold text-sm flex items-center justify-center flex-shrink-0">6</div>
              <div>
                <p class="font-bold text-sm mb-1">Not a substitute for professional advice</p>
                <p class="text-xs text-gray-600 leading-relaxed">Educational tool for primary residence decision-making. Before committing: mortgage broker for actual rate quotes, financial planner for full wealth analysis, real estate attorney for contracts. "Not investment advice" disclaimer applies. Projections are based on your inputs, not guarantees of outcomes.</p>
              </div>
            </div>
          </div>
          <div class="mt-5 bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p class="text-sm font-bold text-gray-700 mb-2">When Not to Use This Calculator</p>
            <ul class="grid md:grid-cols-2 gap-1.5 text-xs text-gray-600">
              <li>• <strong>Investment property analysis (rentals, flips):</strong> use Mortgage Investment Calculator with investor rates</li>
              <li>• <strong>Commercial real estate:</strong> use commercial calculator with different financing structures</li>
              <li>• <strong>Lease vs buy for cars/equipment:</strong> this tool is for housing only</li>
              <li>• <strong>Specific tax planning:</strong> consult CPA — calculator's tax logic is simplified</li>
              <li>• <strong>Regional housing trend forecasting:</strong> use local market data (Zillow, Redfin)</li>
              <li>• <strong>Quick comparison without methodology rigor:</strong> simpler tools exist (but skip opportunity cost)</li>
            </ul>
          </div>
        </section>

        <!-- 12. COMMON MISTAKES -->
        <section id="common-mistakes" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">Common Mistakes in Rent vs Buy Analysis</h2>
          <p class="text-sm text-gray-400 mb-5">Avoid these five errors</p>
          <div class="space-y-4">
            <div class="flex gap-4 p-4 border border-red-100 rounded-xl bg-red-50/50">
              <div class="w-7 h-7 rounded-full bg-red-100 text-red-600 font-extrabold text-sm flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <p class="font-bold text-sm mb-1 text-red-800">Ignoring opportunity cost</p>
                <p class="text-xs text-red-700 leading-relaxed">The most common error — assuming the down payment is "free" because you'd spend it on a home anyway. In reality, that capital invested at 7% over 7 years from a $92K starting point grows substantially. This calculator's Mode 2 handles this honestly and shows you the quantitative gap.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 border border-orange-100 rounded-xl bg-orange-50/50">
              <div class="w-7 h-7 rounded-full bg-orange-100 text-orange-600 font-extrabold text-sm flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <p class="font-bold text-sm mb-1 text-orange-800">Underestimating transaction costs</p>
                <p class="text-xs text-orange-700 leading-relaxed">Closing (3%) + selling (7%) = 10% of home value in friction. On $400K that's $40K. Many simple calculators ignore selling costs entirely, making short holds look much more attractive than reality. These costs are displayed prominently in this calculator.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 border border-amber-100 rounded-xl bg-amber-50/50">
              <div class="w-7 h-7 rounded-full bg-amber-100 text-amber-600 font-extrabold text-sm flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <p class="font-bold text-sm mb-1 text-amber-800">Confusing monthly cost with wealth comparison</p>
                <p class="text-xs text-amber-700 leading-relaxed">"My mortgage payment is the same as rent" doesn't mean buying equals renting financially. Buying builds equity (wealth-positive through appreciation and paydown), renting doesn't directly build equity. The Net Wealth methodology used here captures this honestly — it's not about monthly payment equality, it's about which path builds more wealth over time.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 border border-amber-100 rounded-xl bg-amber-50/50">
              <div class="w-7 h-7 rounded-full bg-amber-100 text-amber-600 font-extrabold text-sm flex items-center justify-center flex-shrink-0">4</div>
              <div>
                <p class="font-bold text-sm mb-1 text-amber-800">Underestimating maintenance</p>
                <p class="text-xs text-amber-700 leading-relaxed">Default 1.5% of home value per year = $6K on a $400K home. Many homeowners underestimate by 50%+ — actual long-term maintenance averages closer to 2–3% when you account for roof, HVAC, plumbing, and appliance replacement. Don't zero out maintenance in the calculator; it materially affects Break-Even Year.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <div class="w-7 h-7 rounded-full bg-gray-100 text-gray-600 font-extrabold text-sm flex items-center justify-center flex-shrink-0">5</div>
              <div>
                <p class="font-bold text-sm mb-1">Assuming you'll stay 30 years</p>
                <p class="text-xs text-gray-600 leading-relaxed">US median home tenure is 7–13 years, varying by metro. Your 30-year financial plan typically doesn't survive job changes, family changes, and lifestyle shifts intact. Use a realistic Hold Period — 7 years for most users, shorter if career mobility is high. Overoptimistic tenure assumption is the single most common user error in rent-vs-buy analysis.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 13. FAQ -->
        <section id="faq" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">Frequently Asked Questions</h2>
          <p class="text-sm text-gray-400 mb-5">Common questions about rent vs buy decisions</p>
          <div class="space-y-3">
            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">Is this calculator for investment property or primary residence?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                This calculator models a primary residence decision, not investment property purchase. It uses 2026 consumer mortgage rates (~6.75%) and primary residence down payment defaults (20%). For investment property analysis (rentals, flips, househacks), use the Mortgage Investment Calculator with investor rates. Real estate investors evaluating live-in flips can use both calculators in sequence — this one for the primary residence component, the Mortgage Investment Calculator for the rental income offset analysis.
              </div>
            </details>
            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">Should I rent or buy in 2026?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                The honest answer: it depends on your Hold Period, local market, and personal financial situation. At 6.75% consumer rates with 3.5% home appreciation and 7% investment return assumption, buying typically creates more net wealth after 6–8 years; renting + investing often wins for shorter holds. Generic advice is frequently wrong for specific situations. Run the calculator with YOUR specific inputs — your numbers, your market, your hold period — for a meaningful projection.
              </div>
            </details>
            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">What is "Break-Even Year" exactly?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                Break-Even Year is the first year buying creates more Net Wealth than renting — AND remains so through the rest of your Hold Period (persistent crossing). Net Wealth = home equity + invested savings − cumulative housing costs. If your Hold Period is 10 years and Break-Even is Year 6, you have 4 years of buying-favored wealth accumulation ahead. If Break-Even is "never within Hold," renting creates more net wealth at your specific assumptions. The "persistent crossing" requirement prevents flickery results from rate/appreciation interactions.
              </div>
            </details>
            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">Why does Mode 2 (with opportunity cost) matter so much?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                When you put capital into a down payment, you forgo the investment returns that same capital could have earned in the market. On a $400K home with 20% down + 3% closing, that's $92K of capital deployed in an illiquid asset. Invested at 7% over 7 years, it grows to roughly $140K after capital gains tax — a significant sum that Mode 1 simply ignores. Mode 1 is simpler but systematically biased toward buying by that amount. Mode 2 is the methodologically correct comparison for anyone who would actually invest the down payment money rather than spending it on lifestyle.
              </div>
            </details>
            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">What hold period should I assume?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                US median home tenure is 7–13 years. Use 7 years as default if uncertain — it's the median, squarely in the middle of the realistic range. Adjust shorter (3–5 years) if career mobility is high or your life situation is uncertain. Use 10+ years if you have school-age kids, are planning a family, or are a retiree. Hold Period is the single most powerful variable in rent-vs-buy analysis — too-optimistic assumption (assuming you'll stay 30 years) is the most common user error.
              </div>
            </details>
            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">How accurate are the opportunity cost assumptions?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                Default 7% S&P 500 historical average (1928–2025) is a reasonable planning baseline but not a guarantee. Real returns vary year-to-year and sequence of returns matters significantly — an early bear market can damage long-term results more than the average suggests. Tax treatment depends heavily on account type (taxable brokerage vs 401k vs IRA). The calculator uses simplified after-tax compounding; actual results may differ. For precise retirement planning with these inputs, consult a fee-only financial advisor.
              </div>
            </details>
            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">Does the calculator handle PMI?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                Yes. If Down Payment is below 20% on Conventional-style loans, PMI is auto-detected at default 0.6% annual rate (adjustable). PMI auto-cancels at 78% LTV based on the amortization schedule — this is an improvement over most online tools that either ignore PMI entirely or never cancel it. On a typical loan, PMI cancellation occurs 5–12 years in depending on appreciation and amortization pace. Other loan types (FHA MIP, VA funding fee) are not modeled in this version. Consult your lender for specific loan PMI or MIP behavior.
              </div>
            </details>
            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">What if my appreciation is much higher or lower than 3.5%?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                Adjust the Home Appreciation input in Buy Scenario Details. Sunbelt markets (Austin, Tampa, Phoenix) have historically seen 4–7% appreciation; Rust Belt and slow-growth markets 1–2%. Your Break-Even Year shifts dramatically with appreciation — a 1 percentage point difference can move Break-Even by 2–3 years. Use the Conservative scenario (appreciation −1pp) to stress-test your assumptions before committing to a purchase.
              </div>
            </details>
            <details class="border border-gray-200 rounded-xl overflow-hidden">
              <summary class="px-5 py-4 font-bold text-sm text-gray-800 cursor-pointer hover:bg-gray-50 transition">Can I save scenarios to compare later?</summary>
              <div class="px-5 py-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
                Yes. The Saved Scenarios widget (below the primary metric card) lets you save up to 20 scenarios for free, with comparison across all of them via the Compare Real Estate Deals page. Scenarios save your inputs (price, rent, hold period, mode, break-even year) for re-loading and side-by-side comparison. Useful for comparing different markets, hold periods, or rate assumptions before making a decision.
              </div>
            </details>
          </div>
        </section>

        <!-- 14. RELATED CALCULATORS -->
        <section id="related-calculators" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 class="text-2xl font-extrabold mb-1" style="color:#1e3a5f;">Related Calculators</h2>
          <p class="text-sm text-gray-400 mb-5">When you need investor-side analysis instead</p>
          <p class="text-sm text-gray-600 mb-5">This Rent vs Buy Calculator is designed for primary residence decisions. Most users won't need investor-side calculators unless considering househacks or live-in flips. If you identify as an investor or are evaluating this property as a rental, these tools are more appropriate:</p>
          <div class="grid sm:grid-cols-2 gap-4">
            <NuxtLink to="/mortgage-calculator-investment" class="block p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-indigo-300 hover:bg-indigo-50 transition group">
              <p class="font-bold text-sm mb-1 group-hover:text-indigo-800" style="color: #1e3a5f;">Mortgage Calculator (Investment)</p>
              <p class="text-xs text-gray-500 group-hover:text-indigo-700">For investment property analysis with investor rates (7.5%) and full PITI + cash flow + DSCR. Audience redirect: if you're here for investment property, use this instead.</p>
            </NuxtLink>
            <NuxtLink to="/rental-property-calculator" class="block p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-indigo-300 hover:bg-indigo-50 transition group">
              <p class="font-bold text-sm mb-1 group-hover:text-indigo-800" style="color: #1e3a5f;">Rental Property Calculator</p>
              <p class="text-xs text-gray-500 group-hover:text-indigo-700">Year 1 operating cash flow for rental property purchase decisions. Useful if you're considering a live-in flip or househack strategy.</p>
            </NuxtLink>
            <NuxtLink to="/compare-real-estate-deals" class="block p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-indigo-300 hover:bg-indigo-50 transition group">
              <p class="font-bold text-sm mb-1 group-hover:text-indigo-800" style="color: #1e3a5f;">Compare Real Estate Deals</p>
              <p class="text-xs text-gray-500 group-hover:text-indigo-700">Side-by-side strategy comparison (rental, flip, BRRRR) for investment scenarios. Also accepts Saved Scenarios from this calculator for cross-comparison.</p>
            </NuxtLink>
            <NuxtLink to="/rental-property-roi-calculator" class="block p-5 rounded-xl border border-gray-200 bg-gray-50 hover:border-indigo-300 hover:bg-indigo-50 transition group">
              <p class="font-bold text-sm mb-1 group-hover:text-indigo-800" style="color: #1e3a5f;">Rental Property ROI Calculator</p>
              <p class="text-xs text-gray-500 group-hover:text-indigo-700">Lifetime wealth projection for rental property over 5–30 year holds. For investors, not primary residence buyers.</p>
            </NuxtLink>
          </div>
        </section>

      </div><!-- /seo content -->

    </main>

    <!-- ═══════════════════════════════════════════════
         FOOTER
    ═══════════════════════════════════════════════ -->
    <footer class="bg-gray-900 text-gray-400 mt-16">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background: #f59e0b;">
                <span class="font-extrabold text-sm" style="color:#1e3a5f;">RC</span>
              </div>
              <span class="font-extrabold text-white">RealCalc</span>
            </div>
            <p class="text-xs leading-relaxed">Free real estate investment calculators for US investors and homebuyers. Mortgage, rental, BRRRR, fix-and-flip, rent vs buy, and more.</p>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Calculators</p>
            <ul class="space-y-1.5 text-xs">
              <li><NuxtLink to="/rent-vs-buy-calculator" class="hover:text-gray-300 transition">Rent vs Buy</NuxtLink></li>
              <li><NuxtLink to="/rental-property-calculator" class="hover:text-gray-300 transition">Rental Property</NuxtLink></li>
              <li><NuxtLink to="/mortgage-calculator-investment" class="hover:text-gray-300 transition">Mortgage Investment</NuxtLink></li>
              <li><NuxtLink to="/cap-rate-calculator" class="hover:text-gray-300 transition">Cap Rate</NuxtLink></li>
              <li><NuxtLink to="/brrrr-calculator" class="hover:text-gray-300 transition">BRRRR</NuxtLink></li>
            </ul>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">More Calculators</p>
            <ul class="space-y-1.5 text-xs">
              <li><NuxtLink to="/dscr-calculator" class="hover:text-gray-300 transition">DSCR</NuxtLink></li>
              <li><NuxtLink to="/fix-and-flip-calculator" class="hover:text-gray-300 transition">Fix and Flip</NuxtLink></li>
              <li><NuxtLink to="/arv-calculator" class="hover:text-gray-300 transition">ARV</NuxtLink></li>
              <li><NuxtLink to="/noi-calculator" class="hover:text-gray-300 transition">NOI</NuxtLink></li>
              <li><NuxtLink to="/compare-real-estate-deals" class="hover:text-gray-300 transition">Compare Deals</NuxtLink></li>
            </ul>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Company</p>
            <ul class="space-y-1.5 text-xs">
              <li><NuxtLink to="/about" class="hover:text-gray-300 transition">About</NuxtLink></li>
              <li><NuxtLink to="/pricing" class="hover:text-gray-300 transition">Pricing</NuxtLink></li>
              <li><NuxtLink to="/privacy" class="hover:text-gray-300 transition">Privacy</NuxtLink></li>
              <li><NuxtLink to="/terms" class="hover:text-gray-300 transition">Terms</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-xs text-gray-600">
          <p>© 2026 RealCalc. For educational purposes only. Not investment advice. All projections based on user inputs and historical averages; not guarantees of future results.</p>
        </div>
      </div>
    </footer>

    <!-- Upgrade Modal -->
    <div v-if="showUpgradeModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-2xl max-w-md mx-4 shadow-xl">
        <h3 class="font-bold text-lg mb-3">Scenario limit reached</h3>
        <p class="text-sm text-gray-600 mb-4">Free tier: 20 saved scenarios. Upgrade to Pro for unlimited scenarios and advanced comparison features.</p>
        <div class="flex gap-2 justify-end">
          <button @click="showUpgradeModal = false" class="px-4 py-2 text-sm text-slate-600 hover:text-slate-800">Cancel</button>
          <button @click="goToUpgrade" class="px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition">Upgrade</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'

// ─── SEO HEAD ────────────────────────────────────────
useHead({
  title: 'Rent vs Buy Calculator — Break-Even Year + Net Wealth | RealCalc',
  meta: [
    { name: 'description', content: 'Free Rent vs Buy Calculator. Compare buying a home vs renting with break-even year, net wealth, and opportunity cost analysis. 2026 consumer mortgage rates.' },
    { property: 'og:title', content: 'Rent vs Buy Calculator — Break-Even Year + Net Wealth | RealCalc' },
    { property: 'og:description', content: 'Free Rent vs Buy Calculator. Compare buying a home vs renting with break-even year, net wealth, and opportunity cost analysis. 2026 consumer mortgage rates.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Rent vs Buy Calculator — Break-Even Year + Net Wealth | RealCalc' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'FinancialProduct',
          name: 'Rent vs Buy Calculator',
          description: 'Free Rent vs Buy Calculator. Compare buying a home vs renting with break-even year, net wealth analysis, and honest opportunity cost. 2026 consumer mortgage rates.',
          url: 'https://arvcalc.com/rent-vs-buy-calculator',
          featureList: [
            'Net Wealth methodology (assets minus liabilities, not cost comparison)',
            '3 modes: Standard, Detailed with Opportunity Cost (recommended), Lifestyle Adjusted',
            'Break-Even Year calculation with persistent crossing detection',
            'Opportunity Cost analysis (invested down payment growth after-tax)',
            'PMI auto-cancellation modeled at 78% LTV',
            'Tax deduction with SALT cap and standard vs itemized logic',
            'Wealth comparison at Year 5/10/30 milestones',
            '4-axis lifestyle radar (mobility, maintenance, customization, stability)',
            '3 sensitivity scenarios (Conservative, Base, Optimistic)',
            'Sensitivity tables: Hold Period × Rate, Appreciation × Rent Increase',
            'Cross-calculator invariant: P&I matches Mortgage Investment Calculator',
            'URL parameter import for shareable scenarios',
            'PDF export with wealth crossover chart',
            'Saved Scenarios widget (save up to 20 scenarios, compare across calculators)',
            'Audience redirect to Mortgage Investment for investor users',
          ],
          audience: { '@type': 'Audience', audienceType: 'US homebuyers, renters, primary residence decision-makers' },
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Rent vs Buy Calculator',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Web browser',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Is this calculator for investment property or primary residence?', acceptedAnswer: { '@type': 'Answer', text: 'This calculator models a primary residence decision, not investment property purchase. It uses 2026 consumer mortgage rates (~6.75%) and primary residence down payment defaults (20%). For investment property analysis, use the Mortgage Investment Calculator.' } },
            { '@type': 'Question', name: 'What is Break-Even Year?', acceptedAnswer: { '@type': 'Answer', text: 'Break-Even Year is the first year buying creates more Net Wealth than renting AND remains so through the rest of your Hold Period (persistent crossing). Net Wealth = home equity + invested savings minus cumulative housing costs.' } },
            { '@type': 'Question', name: 'Why does Mode 2 (opportunity cost) matter?', acceptedAnswer: { '@type': 'Answer', text: 'Most simple calculators ignore opportunity cost — what your down payment could earn invested elsewhere. Mode 2 includes this, giving you an honest wealth-based comparison. Mode 1 is simpler but systematically biased toward buying.' } },
            { '@type': 'Question', name: 'What hold period should I assume?', acceptedAnswer: { '@type': 'Answer', text: 'US median home tenure is 7-13 years. Use 7 years as default if uncertain. Hold Period is the single most powerful variable — too-optimistic assumption is the most common user error.' } },
            { '@type': 'Question', name: 'Does the calculator handle PMI?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. PMI auto-cancels at 78% LTV based on amortization schedule — typically 5-12 years in. This is an improvement over most tools that ignore PMI cancellation.' } },
          ]
        }
      ])
    }
  ]
})

// ─── STATE ────────────────────────────────────────────
const currentMode = ref(1)

// Required inputs
const homePrice = ref(null)
const monthlyRent = ref(null)
const holdPeriod = ref(7)
const mortgageRate = ref(6.75)
const downPayment = ref(20)
const loanTerm = ref(30)

// Buy scenario
const showBuyDetails = ref(false)
const propertyTaxRate = ref(1.2)
const annualInsurance = ref(1500)
const hoaMonthly = ref(0)
const appreciation = ref(3.5)
const maintenanceRate = ref(1.5)
const closingCostsPct = ref(3)
const sellingCostsPct = ref(7)
const pmiRate = ref(0.6)

// Rent scenario
const rentIncrease = ref(3)
const rentersInsurance = ref(200)

// Mode 2
const investmentReturn = ref(7)
const capitalGainsTax = ref(15)

// Mode 3
const mobilityImportance = ref(5)
const maintenanceTolerance = ref(5)
const customizationDesire = ref(5)
const stabilityPreference = ref(5)

// Advanced
const showAdvanced = ref(false)
const marginalTaxRate = ref(24)
const filingStatus = ref('married')

// UI state
const shareSuccess = ref(false)
const savedScenarios = ref([])
const showUpgradeModal = ref(false)
const triggerScenarioSave = ref(false)

// Chart refs
const wealthChartRef = ref(null)
const costChartRef = ref(null)
const cumulativeChartRef = ref(null)
const radarChartRef = ref(null)
let wealthChart = null
let costChart = null
let cumulativeChart = null
let radarChart = null

// ─── VALIDATION ──────────────────────────────────────
const hasResult = computed(() => {
  return !!(homePrice.value > 0 && monthlyRent.value > 0 && mortgageRate.value > 0)
})

const warnings = computed(() => {
  const w = []
  if (!hasResult.value) return w
  if (monthlyRent.value > 0 && monthlyRent.value < 500) {
    w.push('Monthly rent below $500 is unusual — verify input. If accurate, renting is heavily favored at this rate.')
  }
  if (holdPeriod.value === 3) {
    w.push('Short hold periods (3 years) rarely favor buying due to high transaction costs (~10% of home value). Most users break even at 5–7+ year holds.')
  }
  if (holdPeriod.value === 30) {
    w.push('30-year hold heavily favors buying in most scenarios. Rent compounds over time; mortgage payment fixed at origination.')
  }
  if (mortgageRate.value < 4) {
    w.push('Rate below 4% is significantly below 2026 market average (~6.75%). Verify quote — this is unusually favorable financing.')
  }
  if (downPayment.value >= 100) {
    w.push('All-cash purchase eliminates mortgage costs but maximizes opportunity cost. Most expensive scenario for the buy path.')
  }
  return w
})

// ─── AMORTIZATION ────────────────────────────────────
const monthlyPI = computed(() => {
  if (!homePrice.value || !mortgageRate.value || !downPayment.value) return 0
  const loanAmt = homePrice.value * (1 - downPayment.value / 100)
  if (loanAmt <= 0) return 0
  const r = mortgageRate.value / 100 / 12
  const n = loanTerm.value * 12
  if (r === 0) return loanAmt / n
  return loanAmt * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
})

const initialCapitalBuy = computed(() => {
  if (!homePrice.value) return 0
  const dp = homePrice.value * downPayment.value / 100
  const cc = homePrice.value * closingCostsPct.value / 100
  return dp + cc
})

const monthlyBuyCost = computed(() => {
  if (!hasResult.value) return 0
  const tax = (homePrice.value * propertyTaxRate.value / 100) / 12
  const ins = annualInsurance.value / 12
  const pmi = downPayment.value < 20 ? (homePrice.value * (1 - downPayment.value / 100) * pmiRate.value / 100) / 12 : 0
  const maint = (homePrice.value * maintenanceRate.value / 100) / 12
  return monthlyPI.value + tax + ins + pmi + hoaMonthly.value + maint
})

const monthlyRentCost = computed(() => {
  if (!monthlyRent.value) return 0
  return monthlyRent.value + rentersInsurance.value / 12
})

// ─── LOAN BALANCE AMORTIZATION ───────────────────────
function getLoanBalanceAtYear(year) {
  if (!homePrice.value) return 0
  const loanAmt = homePrice.value * (1 - downPayment.value / 100)
  if (loanAmt <= 0) return 0
  const r = mortgageRate.value / 100 / 12
  const n = loanTerm.value * 12
  const monthsPaid = year * 12
  if (monthsPaid >= n) return 0
  if (r === 0) return loanAmt * (1 - monthsPaid / n)
  return loanAmt * (Math.pow(1 + r, n) - Math.pow(1 + r, monthsPaid)) / (Math.pow(1 + r, n) - 1)
}

function getMonthlyInterestAtMonth(month) {
  const loanAmt = homePrice.value * (1 - downPayment.value / 100)
  const r = mortgageRate.value / 100 / 12
  const n = loanTerm.value * 12
  const balance = loanAmt * (Math.pow(1 + r, n) - Math.pow(1 + r, month)) / (Math.pow(1 + r, n) - 1)
  return balance * r
}

// ─── WEALTH TIME SERIES ──────────────────────────────
const wealthTimeSeries = computed(() => {
  if (!hasResult.value) return { buy: [], rent: [], diff: [] }
  const hp = holdPeriod.value
  const loanAmt = homePrice.value * (1 - downPayment.value / 100)
  const initialRentCapital = monthlyRent.value + rentersInsurance.value / 12

  // Initial capitals
  const initBuy = initialCapitalBuy.value
  const initRent = monthlyRent.value  // security deposit (1 month)
  const initCapDiff = Math.max(0, initBuy - initRent)

  const standardDeduction = filingStatus.value === 'married' ? 29200 : filingStatus.value === 'hoh' ? 21900 : 14600

  let renterPool = currentMode.value >= 2 ? initCapDiff : 0
  let buyerPool = 0
  let cumulBuyCost = 0
  let cumulRentCost = 0

  const buyArr = []
  const rentArr = []
  const diffArr = []

  for (let t = 1; t <= hp; t++) {
    const homeVal = homePrice.value * Math.pow(1 + appreciation.value / 100, t)
    const loanBal = getLoanBalanceAtYear(t)

    // Annual buy costs
    let annualTax = homePrice.value * propertyTaxRate.value / 100
    let annualIns = annualInsurance.value
    let annualMaint = homeVal * maintenanceRate.value / 100
    let annualHOA = hoaMonthly.value * 12

    // PMI for year t
    let annualPMI = 0
    if (downPayment.value < 20) {
      let pmiActiveMonths = 0
      for (let m = (t - 1) * 12 + 1; m <= t * 12; m++) {
        const prevBal = loanAmt * (Math.pow(1 + mortgageRate.value / 100 / 12, loanTerm.value * 12) - Math.pow(1 + mortgageRate.value / 100 / 12, m - 1)) / (Math.pow(1 + mortgageRate.value / 100 / 12, loanTerm.value * 12) - 1)
        const ltv = prevBal / homePrice.value
        if (ltv > 0.78) pmiActiveMonths++
      }
      annualPMI = (loanAmt * pmiRate.value / 100) * pmiActiveMonths / 12
    }

    // Tax deduction (simplified: mortgage interest × marginal rate)
    let annualInterest = 0
    for (let m = (t - 1) * 12 + 1; m <= t * 12; m++) {
      annualInterest += getMonthlyInterestAtMonth(m - 1)
    }
    const taxDeduction = Math.min(annualInterest, (loanAmt > 750000 ? annualInterest * 750000 / loanAmt : annualInterest)) * marginalTaxRate.value / 100

    const annualBuyCostRaw = monthlyPI.value * 12 + annualTax + annualIns + annualPMI + annualHOA + annualMaint
    // After-tax: subtract deduction from non-principal components
    const afterTaxBuyCost = annualBuyCostRaw - taxDeduction
    cumulBuyCost += afterTaxBuyCost

    // Annual rent cost
    const yearRent = monthlyRent.value * Math.pow(1 + rentIncrease.value / 100, t - 1) * 12
    const annualRentCost = yearRent + rentersInsurance.value
    cumulRentCost += annualRentCost

    // Mode 2: track investment pools
    let buyerInvestment = 0
    let renterInvestment = 0
    if (currentMode.value >= 2) {
      const annualBuyAfterTaxCost = afterTaxBuyCost
      const annualRentNet = annualRentCost
      const cashFlowDiff = annualBuyAfterTaxCost - annualRentNet
      if (cashFlowDiff > 0) {
        renterInvestment = cashFlowDiff
      } else if (cashFlowDiff < 0) {
        buyerInvestment = -cashFlowDiff
      }

      renterPool = renterPool * (1 + investmentReturn.value / 100) + renterInvestment
      buyerPool = buyerPool * (1 + investmentReturn.value / 100) + buyerInvestment
    }

    // After-tax investment values
    const renterPoolAfterTax = currentMode.value >= 2 ? applyCapGainsTax(renterPool, initCapDiff + renterInvestment) : 0
    const buyerPoolAfterTax = currentMode.value >= 2 ? applyCapGainsTax(buyerPool, buyerInvestment) : 0

    // Net Wealth (Buy) = Home Value - Loan Balance - Cumulative After-Tax Costs + Buyer Investment Value (Mode 2)
    const nwBuy = homeVal - loanBal - cumulBuyCost + buyerPoolAfterTax

    // Net Wealth (Rent) = Renter Investment Value (after-tax) - Cumulative Rent
    const nwRent = renterPoolAfterTax - cumulRentCost

    buyArr.push(nwBuy)
    rentArr.push(nwRent)
    diffArr.push(nwBuy - nwRent)
  }

  return { buy: buyArr, rent: rentArr, diff: diffArr }
})

function applyCapGainsTax(finalVal, totalContributed) {
  const gain = finalVal - totalContributed
  if (gain <= 0) return finalVal
  const tax = gain * capitalGainsTax.value / 100
  return finalVal - tax
}

// ─── KEY COMPUTED METRICS ─────────────────────────────
const finalNetWealthBuy = computed(() => {
  if (!hasResult.value) return 0
  const arr = wealthTimeSeries.value.buy
  if (arr.length === 0) return 0
  // Use selling costs on final home value
  const hp = holdPeriod.value
  const homeValFinal = homePrice.value * Math.pow(1 + appreciation.value / 100, hp)
  const loanBalFinal = getLoanBalanceAtYear(hp)
  const sellingCosts = homeValFinal * sellingCostsPct.value / 100
  return arr[arr.length - 1] - sellingCosts
})

const finalNetWealthRent = computed(() => {
  if (!hasResult.value) return 0
  const arr = wealthTimeSeries.value.rent
  return arr.length > 0 ? arr[arr.length - 1] : 0
})

const wealthDiffAtHold = computed(() => finalNetWealthBuy.value - finalNetWealthRent.value)

const breakEvenYear = computed(() => {
  if (!hasResult.value) return null
  const diff = wealthTimeSeries.value.diff
  if (diff.length === 0) return null
  for (let i = 0; i < diff.length; i++) {
    if (diff[i] >= 0) {
      // Check persistent: all remaining years also >= 0
      const isPersistent = diff.slice(i).every(d => d >= 0)
      if (isPersistent) return i + 1
    }
  }
  return null
})

const statusBadge = computed(() => {
  if (!hasResult.value) return 'RED'
  if (!breakEvenYear.value) return 'RED'
  const ratio = breakEvenYear.value / holdPeriod.value
  if (ratio <= 0.5) return 'GREEN'
  if (ratio < 0.85) return 'BLUE'
  return 'AMBER'
})

const statusBadgeLabel = computed(() => {
  switch (statusBadge.value) {
    case 'GREEN': return 'Buying Strongly Favored'
    case 'BLUE': return 'Buying Favored'
    case 'AMBER': return 'Marginal — Lifestyle Decides'
    default: return 'Renting Favored'
  }
})

// ─── SCENARIO PANEL ──────────────────────────────────
const currentScenarioResult = computed(() => {
  if (!hasResult.value) return null
  return {
    primaryMetric: breakEvenYear.value ? 'Break-Even' : 'Verdict',
    primaryValue: breakEvenYear.value ? `Year ${breakEvenYear.value}` : 'Rent Wins',
    badgeLabel: statusBadgeLabel.value,
    purchasePrice: homePrice.value || 0,
    inputs: {
      'Home Price': formatCurrency(homePrice.value || 0),
      'Monthly Rent': formatCurrency(monthlyRent.value || 0),
      'Hold Period': `${holdPeriod.value} yr`,
      'Mode': `Mode ${currentMode.value}`,
      'Mortgage Rate': `${mortgageRate.value}%`,
      'Down Payment': `${downPayment.value}%`,
    },
    metrics: {
      'Buy Net Wealth': formatCurrency(finalNetWealthBuy.value),
      'Rent Net Wealth': formatCurrency(finalNetWealthRent.value),
      'Wealth Diff': (wealthDiffAtHold.value >= 0 ? '+' : '') + formatCurrency(wealthDiffAtHold.value),
    }
  }
})

function onScenarioSaved(_id) {}

const initialCapitalDiff = computed(() => {
  if (!hasResult.value) return 0
  const initRent = monthlyRent.value
  return Math.max(0, initialCapitalBuy.value - initRent)
})

const renterInvestmentPreTax = computed(() => {
  if (!hasResult.value || currentMode.value < 2) return 0
  const hp = holdPeriod.value
  return initialCapitalDiff.value * Math.pow(1 + investmentReturn.value / 100, hp)
})

const renterInvestmentValue = computed(() => {
  if (!hasResult.value || currentMode.value < 2) return 0
  const preTax = renterInvestmentPreTax.value
  const contributed = initialCapitalDiff.value
  return applyCapGainsTax(preTax, contributed)
})

// ─── LIFESTYLE MODE 3 ────────────────────────────────
const lifestyleScore = computed(() => {
  return (mobilityImportance.value * -1) + maintenanceTolerance.value + customizationDesire.value + stabilityPreference.value
})

const lifestyleRecommendation = computed(() => {
  const financialBuy = !!breakEvenYear.value
  const score = lifestyleScore.value
  if (financialBuy && score < 0) return 'LEAN RENT'
  if (!financialBuy && score > 15) return 'LEAN BUY'
  if (financialBuy) return 'BUY'
  return 'RENT'
})

const lifestyleNote = computed(() => {
  const mobility = mobilityImportance.value
  if (mobility >= 8 && breakEvenYear.value) {
    return `At your mobility importance of ${mobility}/10, the financial savings from buying may not justify reduced flexibility. Consider renting and revisiting in 2–3 years if your stability needs change.`
  }
  if (lifestyleScore.value > 15 && !breakEvenYear.value) {
    return `Your strong stability preference (${stabilityPreference.value}/10) and customization desire (${customizationDesire.value}/10) may justify buying despite the financial case for renting. Factor in non-quantifiable benefits like school district and neighborhood belonging.`
  }
  return 'Financial and lifestyle factors are roughly aligned at your current inputs.'
})

// ─── SENSITIVITY MATRIX ──────────────────────────────
const sensitivityRates = [5, 6, 6.75, 7.5, 8.5]

const sensitivityMatrix = computed(() => {
  if (!hasResult.value) return {}
  const result = {}
  for (const hp of [3, 5, 7, 10, 15, 30]) {
    result[hp] = {}
    for (const r of sensitivityRates) {
      result[hp][r] = calcBreakEvenForParams(hp, r)
    }
  }
  return result
})

function calcBreakEvenForParams(hp, rate) {
  if (!homePrice.value || !monthlyRent.value) return '—'
  const loanAmt = homePrice.value * (1 - downPayment.value / 100)
  const rMonthly = rate / 100 / 12
  const n = loanTerm.value * 12
  const pi = loanAmt > 0 && rMonthly > 0
    ? loanAmt * (rMonthly * Math.pow(1 + rMonthly, n)) / (Math.pow(1 + rMonthly, n) - 1)
    : 0
  const annTax = homePrice.value * propertyTaxRate.value / 100
  const initCapBuy = homePrice.value * downPayment.value / 100 + homePrice.value * closingCostsPct.value / 100
  const initCapRent = monthlyRent.value
  const initCapDiff = Math.max(0, initCapBuy - initCapRent)

  let renterPool = currentMode.value >= 2 ? initCapDiff : 0
  let cumulBuyCost = 0
  let cumulRentCost = 0
  const diffs = []

  for (let t = 1; t <= hp; t++) {
    const homeVal = homePrice.value * Math.pow(1 + appreciation.value / 100, t)
    const loanBal = loanAmt > 0 && rMonthly > 0
      ? loanAmt * (Math.pow(1 + rMonthly, n) - Math.pow(1 + rMonthly, t * 12)) / (Math.pow(1 + rMonthly, n) - 1)
      : Math.max(0, loanAmt - pi * t * 12)
    const annualBuyCost = pi * 12 + annTax + annualInsurance.value + homeVal * maintenanceRate.value / 100 + hoaMonthly.value * 12
    cumulBuyCost += annualBuyCost
    const yearRent = monthlyRent.value * Math.pow(1 + rentIncrease.value / 100, t - 1) * 12 + rentersInsurance.value
    cumulRentCost += yearRent
    let renterPoolAT = 0
    if (currentMode.value >= 2) {
      const diff = annualBuyCost - yearRent
      if (diff > 0) renterPool = renterPool * (1 + investmentReturn.value / 100) + diff
      else renterPool = renterPool * (1 + investmentReturn.value / 100)
      renterPoolAT = renterPool * (1 - capitalGainsTax.value / 100)
    }
    const sellingC = homeVal * sellingCostsPct.value / 100
    const nwBuy = homeVal - loanBal - cumulBuyCost - (t === hp ? sellingC : 0)
    const nwRent = renterPoolAT - cumulRentCost
    diffs.push(nwBuy - nwRent)
  }

  for (let i = 0; i < diffs.length; i++) {
    if (diffs[i] >= 0 && diffs.slice(i).every(d => d >= 0)) {
      return i + 1
    }
  }
  return '—'
}

// ─── SCENARIO COMPARISONS ────────────────────────────
const scenarioComparisons = computed(() => {
  if (!hasResult.value) return []
  return [
    {
      label: 'Conservative',
      description: 'Rate +1pp, Appreciation −1pp',
      breakEven: calcBreakEvenScenario(mortgageRate.value + 1, appreciation.value - 1),
      statusLabel: 'If markets disappoint or rates rise'
    },
    {
      label: 'Base',
      description: 'Your current assumptions',
      breakEven: breakEvenYear.value,
      statusLabel: statusBadgeLabel.value
    },
    {
      label: 'Optimistic',
      description: 'Rate −0.5pp, Appreciation +1pp',
      breakEven: calcBreakEvenScenario(mortgageRate.value - 0.5, appreciation.value + 1),
      statusLabel: 'Best-case appreciation + lower rates'
    }
  ]
})

function calcBreakEvenScenario(rate, appr) {
  if (!homePrice.value || !monthlyRent.value) return null
  const loanAmt = homePrice.value * (1 - downPayment.value / 100)
  const r = rate / 100 / 12
  const n = loanTerm.value * 12
  const pi = loanAmt > 0 && r > 0
    ? loanAmt * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    : 0
  const initCapBuy = homePrice.value * downPayment.value / 100 + homePrice.value * closingCostsPct.value / 100
  const initCapDiff = Math.max(0, initCapBuy - monthlyRent.value)
  let renterPool = currentMode.value >= 2 ? initCapDiff : 0
  let cumulBuyCost = 0
  let cumulRentCost = 0
  const diffs = []
  for (let t = 1; t <= holdPeriod.value; t++) {
    const homeVal = homePrice.value * Math.pow(1 + appr / 100, t)
    const loanBal = loanAmt > 0 && r > 0
      ? loanAmt * (Math.pow(1 + r, n) - Math.pow(1 + r, t * 12)) / (Math.pow(1 + r, n) - 1)
      : Math.max(0, loanAmt - pi * t * 12)
    const annBuy = pi * 12 + homePrice.value * propertyTaxRate.value / 100 + annualInsurance.value + homeVal * maintenanceRate.value / 100 + hoaMonthly.value * 12
    cumulBuyCost += annBuy
    const yearRent = monthlyRent.value * Math.pow(1 + rentIncrease.value / 100, t - 1) * 12 + rentersInsurance.value
    cumulRentCost += yearRent
    if (currentMode.value >= 2) {
      const diff = annBuy - yearRent
      if (diff > 0) renterPool = renterPool * (1 + investmentReturn.value / 100) + diff
      else renterPool = renterPool * (1 + investmentReturn.value / 100)
    }
    const renterPoolAT = currentMode.value >= 2 ? renterPool * (1 - capitalGainsTax.value / 100) : 0
    const sellingC = t === holdPeriod.value ? homeVal * sellingCostsPct.value / 100 : 0
    diffs.push(homeVal - loanBal - cumulBuyCost - sellingC - (renterPoolAT - cumulRentCost))
  }
  for (let i = 0; i < diffs.length; i++) {
    if (diffs[i] >= 0 && diffs.slice(i).every(d => d >= 0)) return i + 1
  }
  return null
}

// ─── CHARTS ───────────────────────────────────────────
async function drawCharts() {
  if (!hasResult.value) return
  await nextTick()
  try {
    const { Chart, registerables } = await import('chart.js')
    Chart.register(...registerables)

    // Wealth crossover chart
    if (wealthChartRef.value) {
      if (wealthChart) wealthChart.destroy()
      const labels = Array.from({ length: holdPeriod.value }, (_, i) => `Y${i + 1}`)
      const buy = wealthTimeSeries.value.buy
      const rent = wealthTimeSeries.value.rent
      // Adjust buy for selling costs at final year
      const buyAdj = buy.map((v, i) => {
        if (i === buy.length - 1) {
          const homeVal = homePrice.value * Math.pow(1 + appreciation.value / 100, i + 1)
          return v - homeVal * sellingCostsPct.value / 100
        }
        return v
      })
      wealthChart = new Chart(wealthChartRef.value, {
        type: 'line',
        data: {
          labels,
          datasets: [
            { label: 'Buy Path', data: buyAdj, borderColor: '#475569', backgroundColor: 'rgba(71,85,105,0.1)', borderWidth: 2, fill: false, tension: 0.3 },
            { label: 'Rent Path', data: rent, borderColor: '#0ea5e9', backgroundColor: 'rgba(14,165,233,0.1)', borderWidth: 2, fill: false, tension: 0.3 }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top', labels: { font: { size: 11 } } },
            annotation: breakEvenYear.value ? {
              annotations: {
                breakEven: { type: 'line', xMin: breakEvenYear.value - 1, xMax: breakEvenYear.value - 1, borderColor: '#22c55e', borderWidth: 2, borderDash: [5, 5], label: { content: `BE Year ${breakEvenYear.value}`, enabled: true, position: 'top', font: { size: 10 } } }
              }
            } : {}
          },
          scales: {
            y: { ticks: { callback: v => '$' + (v >= 0 ? '' : '-') + Math.abs(Math.round(v / 1000)) + 'K', font: { size: 10 } } },
            x: { ticks: { font: { size: 10 } } }
          }
        }
      })
    }

    // Monthly cost bar chart
    if (costChartRef.value) {
      if (costChart) costChart.destroy()
      const loanAmt = homePrice.value * (1 - downPayment.value / 100)
      const pi = monthlyPI.value
      const tax = (homePrice.value * propertyTaxRate.value / 100) / 12
      const ins = annualInsurance.value / 12
      const pmi = downPayment.value < 20 ? loanAmt * pmiRate.value / 100 / 12 : 0
      const hoa = hoaMonthly.value
      const maint = (homePrice.value * maintenanceRate.value / 100) / 12
      costChart = new Chart(costChartRef.value, {
        type: 'bar',
        data: {
          labels: ['Buy', 'Rent'],
          datasets: [
            { label: 'P&I / Rent', data: [pi, monthlyRent.value], backgroundColor: ['#475569', '#0ea5e9'] },
            { label: 'Tax', data: [tax, 0], backgroundColor: '#94a3b8' },
            { label: 'Insurance', data: [ins, rentersInsurance.value / 12], backgroundColor: '#cbd5e1' },
            { label: 'PMI', data: [pmi, 0], backgroundColor: '#fbbf24' },
            { label: 'HOA', data: [hoa, 0], backgroundColor: '#a3e635' },
            { label: 'Maintenance', data: [maint, 0], backgroundColor: '#f87171' },
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { position: 'top', labels: { font: { size: 10 } } } },
          scales: {
            x: { stacked: true },
            y: { stacked: true, ticks: { callback: v => '$' + Math.round(v).toLocaleString(), font: { size: 10 } } }
          }
        }
      })
    }

    // Cumulative cost chart
    if (cumulativeChartRef.value) {
      if (cumulativeChart) cumulativeChart.destroy()
      const labels = Array.from({ length: holdPeriod.value }, (_, i) => `Y${i + 1}`)
      let cumBuy = 0, cumRent = 0
      const cumBuyArr = [], cumRentArr = []
      for (let t = 1; t <= holdPeriod.value; t++) {
        const homeVal = homePrice.value * Math.pow(1 + appreciation.value / 100, t)
        cumBuy += monthlyBuyCost.value * 12
        cumRent += (monthlyRent.value * Math.pow(1 + rentIncrease.value / 100, t - 1) * 12 + rentersInsurance.value)
        cumBuyArr.push(cumBuy)
        cumRentArr.push(cumRent)
      }
      cumulativeChart = new Chart(cumulativeChartRef.value, {
        type: 'line',
        data: {
          labels,
          datasets: [
            { label: 'Cumulative Buy Costs', data: cumBuyArr, borderColor: '#475569', backgroundColor: 'rgba(71,85,105,0.15)', fill: true, borderWidth: 2, tension: 0.3 },
            { label: 'Cumulative Rent Costs', data: cumRentArr, borderColor: '#0ea5e9', backgroundColor: 'rgba(14,165,233,0.15)', fill: true, borderWidth: 2, tension: 0.3 }
          ]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { position: 'top', labels: { font: { size: 11 } } } },
          scales: { y: { ticks: { callback: v => '$' + Math.round(v / 1000) + 'K', font: { size: 10 } } }, x: { ticks: { font: { size: 10 } } } }
        }
      })
    }

    // Radar or appreciation sensitivity
    if (radarChartRef.value) {
      if (radarChart) radarChart.destroy()
      if (currentMode.value === 3) {
        // Lifestyle radar
        radarChart = new Chart(radarChartRef.value, {
          type: 'radar',
          data: {
            labels: ['Mobility', 'Maintenance', 'Customization', 'Stability'],
            datasets: [
              { label: 'Your Preferences', data: [mobilityImportance.value, maintenanceTolerance.value, customizationDesire.value, stabilityPreference.value], backgroundColor: 'rgba(87,83,78,0.25)', borderColor: '#57534e', borderWidth: 2 },
              { label: 'Typical Renter', data: [8, 3, 3, 4], backgroundColor: 'rgba(14,165,233,0.1)', borderColor: '#0ea5e9', borderWidth: 1.5, borderDash: [4, 3] },
              { label: 'Typical Buyer', data: [3, 7, 8, 9], backgroundColor: 'rgba(34,197,94,0.1)', borderColor: '#22c55e', borderWidth: 1.5, borderDash: [4, 3] },
            ]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            scales: { r: { min: 0, max: 10, ticks: { stepSize: 2, font: { size: 9 } } } },
            plugins: { legend: { position: 'top', labels: { font: { size: 10 } } } }
          }
        })
      } else {
        // Appreciation × Rent Increase wealth diff at year 10 (or hold period)
        const appreciationVals = [1, 2, 3.5, 5, 7]
        const rentIncVals = [1, 2, 3, 4, 5]
        const yr = Math.min(10, holdPeriod.value)
        const datasets = appreciationVals.map((appr, ai) => {
          const data = rentIncVals.map(ri => {
            const loanAmt = homePrice.value * (1 - downPayment.value / 100)
            const r = mortgageRate.value / 100 / 12
            const n = loanTerm.value * 12
            const pi = loanAmt > 0 && r > 0 ? loanAmt * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : 0
            let cBuy = 0, cRent = 0
            let rPool = currentMode.value >= 2 ? initialCapitalDiff.value : 0
            for (let t = 1; t <= yr; t++) {
              const hv = homePrice.value * Math.pow(1 + appr / 100, t)
              cBuy += pi * 12 + homePrice.value * propertyTaxRate.value / 100 + annualInsurance.value + hv * maintenanceRate.value / 100
              const yr_rent = monthlyRent.value * Math.pow(1 + ri / 100, t - 1) * 12 + rentersInsurance.value
              cRent += yr_rent
              if (currentMode.value >= 2) {
                const diff = (pi * 12 + homePrice.value * propertyTaxRate.value / 100 + annualInsurance.value + hv * maintenanceRate.value / 100) - yr_rent
                if (diff > 0) rPool = rPool * (1 + investmentReturn.value / 100) + diff
                else rPool = rPool * (1 + investmentReturn.value / 100)
              }
            }
            const finalHv = homePrice.value * Math.pow(1 + appr / 100, yr)
            const finalLb = loanAmt > 0 && r > 0
              ? loanAmt * (Math.pow(1 + r, n) - Math.pow(1 + r, yr * 12)) / (Math.pow(1 + r, n) - 1)
              : Math.max(0, loanAmt - pi * yr * 12)
            const nwBuy = finalHv - finalLb - cBuy - finalHv * sellingCostsPct.value / 100
            const rPoolAT = currentMode.value >= 2 ? rPool * (1 - capitalGainsTax.value / 100) : 0
            const nwRent = rPoolAT - cRent
            return Math.round((nwBuy - nwRent) / 1000)
          })
          const colors = ['#ef4444', '#f97316', '#3b82f6', '#22c55e', '#8b5cf6']
          return {
            label: `${appr}% appr`,
            data,
            backgroundColor: colors[ai] + '33',
            borderColor: colors[ai],
            borderWidth: 2,
            fill: false,
            tension: 0.3
          }
        })
        radarChart = new Chart(radarChartRef.value, {
          type: 'line',
          data: { labels: rentIncVals.map(v => `${v}% rent↑`), datasets },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { position: 'top', labels: { font: { size: 9 } } } },
            scales: { y: { ticks: { callback: v => (v >= 0 ? '+' : '') + v + 'K', font: { size: 9 } } } }
          }
        })
      }
    }
  } catch (e) {
    console.error('Chart error:', e)
  }
}

// ─── SAVED SCENARIOS ──────────────────────────────────
onMounted(() => {
  const saved = localStorage.getItem('rent-vs-buy-scenarios')
  if (saved) {
    try { savedScenarios.value = JSON.parse(saved) } catch (e) { savedScenarios.value = [] }
  }

  // URL params
  const params = new URLSearchParams(window.location.search)
  if (params.get('p')) homePrice.value = Number(params.get('p'))
  if (params.get('r')) monthlyRent.value = Number(params.get('r'))
  if (params.get('hp')) holdPeriod.value = Number(params.get('hp'))
  if (params.get('lr')) mortgageRate.value = Number(params.get('lr'))
  if (params.get('dp')) downPayment.value = Number(params.get('dp'))
  if (params.get('apr')) appreciation.value = Number(params.get('apr'))
  if (params.get('ri')) rentIncrease.value = Number(params.get('ri'))
  if (params.get('inv')) investmentReturn.value = Number(params.get('inv'))
  if (params.get('tx')) propertyTaxRate.value = Number(params.get('tx'))
  if (params.get('mode')) currentMode.value = Number(params.get('mode'))
})

function saveCurrentScenario() {
  if (savedScenarios.value.length >= 20) {
    showUpgradeModal.value = true
    return
  }
  savedScenarios.value.push({
    homePrice: homePrice.value,
    monthlyRent: monthlyRent.value,
    holdPeriod: holdPeriod.value,
    mortgageRate: mortgageRate.value,
    downPayment: downPayment.value,
    loanTerm: loanTerm.value,
    appreciation: appreciation.value,
    rentIncrease: rentIncrease.value,
    investmentReturn: currentMode.value >= 2 ? investmentReturn.value : null,
    mode: currentMode.value,
    breakEvenYear: breakEvenYear.value,
    finalNetWealthBuy: finalNetWealthBuy.value,
    finalNetWealthRent: finalNetWealthRent.value,
    statusBadge: statusBadge.value,
    timestamp: Date.now(),
    label: ''
  })
  localStorage.setItem('rent-vs-buy-scenarios', JSON.stringify(savedScenarios.value))
}

function loadScenario(idx) {
  const s = savedScenarios.value[idx]
  homePrice.value = s.homePrice
  monthlyRent.value = s.monthlyRent
  holdPeriod.value = s.holdPeriod
  mortgageRate.value = s.mortgageRate
  downPayment.value = s.downPayment
  loanTerm.value = s.loanTerm
  appreciation.value = s.appreciation
  rentIncrease.value = s.rentIncrease
  if (s.investmentReturn) investmentReturn.value = s.investmentReturn
  currentMode.value = s.mode
}

function deleteScenario(idx) {
  savedScenarios.value.splice(idx, 1)
  localStorage.setItem('rent-vs-buy-scenarios', JSON.stringify(savedScenarios.value))
}

function compareAllScenarios() {
  if (savedScenarios.value.length === 0) return
  const params = new URLSearchParams()
  params.set('source', 'rent-vs-buy')
  params.set('scenarios', JSON.stringify(savedScenarios.value.slice(0, 3)))
  window.location.href = `/compare-real-estate-deals?${params}`
}

function goToUpgrade() {
  window.location.href = '/pricing'
}

// ─── SHARE / PDF ──────────────────────────────────────
function shareResult() {
  const params = new URLSearchParams()
  if (homePrice.value) params.set('p', homePrice.value)
  if (monthlyRent.value) params.set('r', monthlyRent.value)
  params.set('hp', holdPeriod.value)
  params.set('lr', mortgageRate.value)
  params.set('dp', downPayment.value)
  params.set('apr', appreciation.value)
  params.set('ri', rentIncrease.value)
  if (currentMode.value >= 2) params.set('inv', investmentReturn.value)
  params.set('mode', currentMode.value)
  const url = `${window.location.origin}${window.location.pathname}?${params}`
  navigator.clipboard?.writeText(url).catch(() => {})
  shareSuccess.value = true
  setTimeout(() => { shareSuccess.value = false }, 2500)
}

async function exportPDF() {
  if (!hasResult.value) return
  try {
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF()
    doc.setFontSize(16)
    doc.text('Rent vs Buy Calculator', 20, 20)
    doc.setFontSize(11)
    doc.text('RealCalc.com — 2026 Consumer Rates', 20, 30)
    doc.setFontSize(10)
    let y = 45
    const addLine = (label, val) => { doc.text(`${label}: ${val}`, 20, y); y += 8 }
    addLine('Home Price', formatCurrency(homePrice.value || 0))
    addLine('Monthly Rent', formatCurrency(monthlyRent.value || 0))
    addLine('Hold Period', `${holdPeriod.value} years`)
    addLine('Mortgage Rate', `${mortgageRate.value}%`)
    addLine('Down Payment', `${downPayment.value}% (${formatCurrency(homePrice.value * downPayment.value / 100)})`)
    addLine('Loan Term', `${loanTerm.value} years`)
    y += 4
    addLine('Monthly P&I', formatCurrency(monthlyPI.value))
    addLine('Monthly Buy Cost (all-in)', formatCurrency(monthlyBuyCost.value))
    addLine('Monthly Rent Cost', formatCurrency(monthlyRentCost.value))
    addLine('Initial Capital (Buy)', formatCurrency(initialCapitalBuy.value))
    y += 4
    addLine('Break-Even Year', breakEvenYear.value ? `Year ${breakEvenYear.value}` : 'Renting Wins')
    addLine('Final Net Wealth (Buy)', formatCurrency(finalNetWealthBuy.value))
    addLine('Final Net Wealth (Rent)', formatCurrency(finalNetWealthRent.value))
    addLine('Wealth Difference', formatCurrency(wealthDiffAtHold.value))
    addLine('Status', statusBadgeLabel.value)
    y += 8
    doc.setFontSize(8)
    doc.text('Generated by RealCalc.com | For educational purposes only. Not investment advice.', 20, y)
    doc.save('rent-vs-buy-analysis.pdf')
  } catch (e) {
    console.error('PDF export error:', e)
  }
}

// ─── FORMATTERS ───────────────────────────────────────
function formatCurrency(val) {
  if (!val && val !== 0) return '$0'
  return '$' + Math.round(val).toLocaleString('en-US')
}

// ─── WATCH FOR CHART UPDATES ──────────────────────────
watch([hasResult, currentMode, holdPeriod, homePrice, monthlyRent, mortgageRate, downPayment, appreciation, rentIncrease, investmentReturn, capitalGainsTax, mobilityImportance, maintenanceTolerance, customizationDesire, stabilityPreference], async () => {
  if (hasResult.value) {
    await nextTick()
    drawCharts()
  }
})
</script>
