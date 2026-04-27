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
            <li class="text-gray-700 font-semibold">Vacancy Rate Calculator</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- PAGE TITLE + ON THIS PAGE NAV -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-6">
        <div class="mb-4">
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            Vacancy Rate Calculator — Income Lost + Diagnostic Verdict
          </h1>
          <p class="text-gray-500 mt-2 text-base">Diagnostic verdict with action thresholds based on dollar magnitude — for landlords and investors analyzing rental property vacancy</p>
        </div>
        <div class="block rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-2">
          <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">On this page</p>
          <ul class="hidden md:flex flex-wrap gap-x-5 gap-y-1.5">
            <li><a href="#calculator" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Calculator</a></li>
            <li><a href="#saved-scenarios" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Saved Scenarios</a></li>
            <li><a href="#overview" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Overview</a></li>
            <li><a href="#search-entry-hooks" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Common Questions</a></li>
            <li><a href="#how-to-use" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">How to Use</a></li>
            <li><a href="#inputs-outputs" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Inputs &amp; Outputs</a></li>
            <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
            <li><a href="#what-is" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">What Is Vacancy Rate</a></li>
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
              <li><a href="#formula" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Formula</a></li>
              <li><a href="#result-meaning" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Result Meaning</a></li>
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
    <div id="calculator" class="max-w-[1100px] mx-auto px-4 sm:px-6 py-8">
      <div class="grid lg:grid-cols-[3fr_2fr] gap-6 items-start">

        <!-- LEFT: INPUTS -->
        <div class="space-y-5">

          <!-- CORE INPUTS -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 class="text-lg font-bold mb-4" style="color: #1e3a5f;">Core Inputs</h2>

            <!-- Annual Potential Rent -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Annual Potential Rent <span class="text-red-500">*</span></label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input v-model.number="inp.annual_potential_rent" type="number" min="1" step="100"
                  placeholder="e.g. 24,000"
                  class="w-full pl-7 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
              <p class="text-xs text-gray-400 mt-1">Total rent if property were 100% occupied at market rent for 12 months.</p>
            </div>

            <!-- Days/Months Toggle -->
            <div class="mb-4">
              <div class="flex items-center justify-between mb-1">
                <label class="block text-sm font-semibold text-gray-700">Days or Months Vacant <span class="text-red-500">*</span></label>
                <div class="flex rounded-lg overflow-hidden border border-gray-300 text-xs font-semibold">
                  <button @click="vacancyInputMode = 'days'" :class="vacancyInputMode === 'days' ? 'bg-yellow-400 text-gray-900' : 'bg-white text-gray-500 hover:bg-gray-50'" class="px-3 py-1 transition">Days</button>
                  <button @click="vacancyInputMode = 'months'" :class="vacancyInputMode === 'months' ? 'bg-yellow-400 text-gray-900' : 'bg-white text-gray-500 hover:bg-gray-50'" class="px-3 py-1 border-l border-gray-300 transition">Months</button>
                </div>
              </div>

              <!-- Both filled warning -->
              <div v-if="inp.days_vacant !== null && inp.months_vacant !== null && inp.days_vacant !== '' && inp.months_vacant !== ''" class="mb-2 p-2 rounded-lg bg-amber-50 border border-amber-200">
                <p class="text-xs text-amber-700 font-semibold">Both Days Vacant and Months Vacant are set. Using Days Vacant value.</p>
              </div>

              <!-- Days input -->
              <div v-if="vacancyInputMode === 'days'">
                <input v-model.number="inp.days_vacant" type="number" min="0" step="1"
                  :placeholder="inp.number_of_units > 1 ? 'e.g. 365 (sum unit-days)' : 'e.g. 30 days'"
                  class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
                <p class="text-xs text-gray-400 mt-1">Total calendar days vacant in last 12 months. For multi-unit: sum unit-days vacant across all units.</p>
              </div>

              <!-- Months input -->
              <div v-if="vacancyInputMode === 'months'">
                <input v-model.number="inp.months_vacant" type="number" min="0" max="12" step="0.1"
                  placeholder="e.g. 1.5 months"
                  class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
                <p class="text-xs text-gray-400 mt-1">Months vacant (auto-converts to days at 30.4 days/month).</p>
              </div>

              <!-- Validation error -->
              <div v-if="daysVacantError" class="mt-2 p-2 rounded-lg bg-red-50 border border-red-200">
                <p class="text-xs text-red-700 font-semibold">{{ daysVacantError }}</p>
              </div>
            </div>

            <!-- Number of Units -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Number of Units</label>
              <input v-model.number="inp.number_of_units" type="number" min="1" max="1000" step="1"
                placeholder="e.g. 1"
                class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              <p class="text-xs text-gray-400 mt-1">1 = single-family. 2-4 = small multifamily. 5+ = apartment building.</p>
            </div>

            <!-- Vacancy Pattern (multi-unit only) -->
            <div v-if="(inp.number_of_units || 1) > 1" class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Vacancy Pattern</label>
              <select v-model="inp.vacancy_pattern"
                class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium bg-white">
                <option value="Mixed">Mixed (both patterns)</option>
                <option value="Concentrated">Concentrated (1-2 units always vacant)</option>
                <option value="Distributed">Distributed (many units short-term vacant)</option>
              </select>
              <p class="text-xs text-gray-400 mt-1">Pattern affects diagnostic interpretation (concentrated = demand/condition; distributed = turnover/leasing).</p>
            </div>
          </div>

          <!-- MARKET BENCHMARK -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 class="text-lg font-bold mb-4" style="color: #1e3a5f;">Market Benchmark</h2>

            <!-- Property Type -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Property Type</label>
              <select v-model="inp.property_type"
                class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium bg-white">
                <option value="Single-Family Rental">Single-Family Rental</option>
                <option value="Multifamily 2-4 Units">Multifamily 2-4 Units</option>
                <option value="Apartment Building 5+ Units">Apartment Building 5+ Units</option>
                <option value="Vacation/Short-Term Rental">Vacation/Short-Term Rental</option>
                <option value="Commercial Retail">Commercial Retail</option>
                <option value="Office">Office</option>
              </select>
              <p class="text-xs text-gray-400 mt-1">Sets default market benchmark. Vacation/STR uses adjusted verdict tiers.</p>
            </div>

            <!-- Market Vacancy Override -->
            <div class="mb-2">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Market Average Vacancy Rate (% override)</label>
              <div class="relative">
                <input v-model.number="inp.market_vacancy_override" type="number" min="0" max="50" step="0.1"
                  :placeholder="propertyTypeDefaultMarket(inp.property_type)"
                  class="w-full pr-8 px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">%</span>
              </div>
              <p class="text-xs text-amber-600 font-medium mt-1">Default benchmarks are illustrative national averages, NOT measured local data. Override with local rental market research (property manager, MLS, Rentometer) for accurate comparison.</p>
            </div>
          </div>

          <!-- COST INPUTS -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 class="text-lg font-bold mb-4" style="color: #1e3a5f;">Cost Inputs (Optional)</h2>

            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Turnover Costs Per Vacancy</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                  <input v-model.number="inp.turnover_costs_per_vacancy" type="number" min="0" step="100"
                    placeholder="e.g. 1,500"
                    class="w-full pl-7 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Cleaning, repairs, leasing fee, ads per event. Typical $500–$2,500.</p>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Number of Turnovers / Year</label>
                <input v-model.number="inp.number_of_turnovers" type="number" min="0" step="1"
                  placeholder="e.g. 1"
                  class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Utilities During Vacancy ($/mo)</label>
                <div class="relative">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                  <input v-model.number="inp.utilities_during_vacancy_monthly" type="number" min="0" step="10"
                    placeholder="e.g. 150"
                    class="w-full pl-7 pr-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
                </div>
                <p class="text-xs text-gray-400 mt-1">Owner-paid utilities per unit on average during vacancy.</p>
              </div>
            </div>
          </div>

          <!-- SCENARIO META -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 class="text-lg font-bold mb-4" style="color: #1e3a5f;">Scenario Details (Optional)</h2>
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Scenario Name</label>
                <input v-model="inp.scenario_name" type="text" maxlength="50"
                  placeholder="Property A"
                  class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Analysis Period End Date</label>
                <input v-model="inp.analysis_period_end_date" type="date" :max="todayStr"
                  class="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
            </div>
          </div>

          <!-- Share + PDF -->
          <div class="flex gap-3">
            <button @click="copyShareableURL" class="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-gray-300 font-semibold text-sm text-gray-700 hover:border-gray-400 transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
              Share
            </button>
            <button @click="exportPDF" class="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-gray-300 font-semibold text-sm text-gray-700 hover:border-gray-400 transition">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              Export PDF
            </button>
          </div>
        </div>

        <!-- RIGHT: RESULTS -->
        <div class="lg:sticky lg:top-20 space-y-4">
          <template v-if="results">

            <!-- STR INDICATOR -->
            <div v-if="isSTR" class="rounded-xl bg-blue-50 border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 text-center">
              Using STR-adjusted tiers (Vacation/Short-Term Rental)
            </div>

            <!-- VERDICT CARD -->
            <div class="rounded-2xl border-2 p-5 text-center" :style="{ borderColor: verdictConfig.color, background: verdictConfig.bgColor }">
              <div class="text-3xl mb-1">{{ verdictConfig.icon }}</div>
              <div class="text-2xl font-extrabold mb-0.5" :style="{ color: verdictConfig.color }">{{ results.verdictTier }}</div>
              <div class="text-sm font-semibold text-gray-600 mb-2">{{ verdictConfig.severityLabel }}</div>
              <div class="text-4xl font-extrabold mb-1" style="color: #1e3a5f;">{{ fmt2(results.vacancyRate) }}%</div>
              <div class="text-xs text-gray-500 mb-2">Vacancy Rate</div>
              <div class="text-xs font-medium text-gray-600 bg-white/70 rounded-lg px-2 py-1">{{ verdictSubMessage }}</div>
            </div>

            <!-- LOW RENT BANNER -->
            <div v-if="results.lowRentFlag" class="rounded-xl bg-amber-50 border border-amber-200 p-3">
              <p class="text-sm font-bold text-amber-800">Low rent input detected</p>
              <p class="text-xs text-amber-700 mt-1">Income calculations on rent below $500/month per unit may not reflect typical investment property dynamics. Verify the Annual Potential Rent input is accurate.</p>
            </div>

            <!-- ZERO VACANCY UNDERPRICING BANNER -->
            <div v-if="results.vacancyRate === 0" class="rounded-xl bg-orange-50 border border-orange-300 p-3">
              <p class="text-sm font-bold text-orange-800">0% vacancy: investigate underpricing</p>
              <p class="text-xs text-orange-700 mt-1">Zero vacancy in long-term rental markets often indicates rent is priced BELOW market. (1) Pull comparable rentals — your rent vs median for similar property. (2) If your rent is 5%+ below median, consider modest increase at next renewal. (3) True 0% vacancy with at-market rent is rare — verify your data is complete (12 full months tracked). Underpricing is a hidden form of income loss.</p>
            </div>

            <!-- LIKELY CAUSES BLOCK -->
            <div v-if="results.verdictTier !== 'EXCELLENT'" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <p class="text-sm font-bold mb-2" style="color: #1e3a5f;">Likely Causes ({{ results.verdictTier }} tier)</p>
              <ul class="space-y-1">
                <li v-for="cause in likelyCauses" :key="cause" class="text-xs text-gray-700 flex items-start gap-2">
                  <span class="text-gray-400 mt-0.5">•</span>
                  <span>{{ cause }}</span>
                </li>
              </ul>
              <p class="text-xs text-gray-400 mt-2 italic">Likely Causes are diagnostic starting points — not verified diagnoses.</p>
            </div>
            <div v-else class="bg-green-50 rounded-2xl border border-green-200 p-4">
              <p class="text-sm font-bold text-green-700">Performance is strong. Maintain current strategy.</p>
            </div>

            <!-- ACTION THRESHOLDS BLOCK -->
            <div class="rounded-2xl border p-4" :style="{ borderColor: actionConfig.borderColor, background: actionConfig.bgColor }">
              <p class="text-xs font-bold uppercase tracking-widest mb-1" :style="{ color: actionConfig.textColor }">Recommended Action (by Lost Rent magnitude)</p>
              <p class="text-sm font-extrabold mb-1" :style="{ color: actionConfig.textColor }">{{ actionConfig.severity }} {{ actionConfig.title }}</p>
              <p class="text-xs text-gray-700 leading-relaxed">{{ actionConfig.body }}</p>
              <!-- Escalation banner -->
              <div v-if="results.escalationTriggered" class="mt-2 rounded-lg bg-red-50 border border-red-200 px-3 py-2">
                <p class="text-xs font-bold text-red-700">⬆ ESCALATED — Lost Rent is {{ fmt1(results.lossRatioPct) }}% of potential rent (&gt;20% threshold)</p>
                <p class="text-xs text-red-600">Escalated from {{ results.baseActionTier.replace(/_/g,' ') }}</p>
              </div>
              <p class="text-xs text-gray-400 italic mt-2">Action threshold uses absolute Lost Rent dollars, independent of vacancy rate %. A 4% vacancy on $1M rent ($40,000 loss) signals REPOSITION despite EXCELLENT verdict.</p>
            </div>

            <!-- MARKET POSITION -->
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Market Position</p>
              <div class="flex items-center justify-between mb-1">
                <span class="text-sm font-bold" :style="{ color: marketPositionConfig.color }">{{ marketPositionConfig.label }}</span>
                <span class="text-xs text-gray-500">vs {{ fmt1(results.marketBenchmark) }}% benchmark</span>
              </div>
              <p class="text-xs text-gray-600">{{ marketPositionConfig.message }}</p>
              <!-- ABSOLUTE_HIGH note -->
              <div v-if="results.marketPosition === 'ABSOLUTE_HIGH'" class="mt-2 rounded-lg bg-red-50 border border-red-200 px-3 py-2">
                <p class="text-xs font-bold text-red-700">High in absolute terms</p>
                <p class="text-xs text-red-600">Your {{ fmt2(results.vacancyRate) }}% vacancy may be near the {{ fmt1(results.marketBenchmark) }}% benchmark for {{ inp.property_type }}, but &gt;15% is high in absolute terms. Either submarket is oversupplied — investigate why benchmark is high — or data calibration issue. Don't read 'tracking benchmark' as 'fine'.</p>
              </div>
              <p class="text-xs text-gray-400 mt-2 italic">Default benchmarks are illustrative national ranges, NOT local market data.</p>
            </div>

            <!-- SECONDARY METRICS -->
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-3">
                <p class="text-xs text-gray-400 mb-1">Income Lost to Vacancy</p>
                <p class="text-xl font-extrabold" style="color: #ef4444;">{{ fmtDollar(results.incomeLost) }}</p>
                <p class="text-xs text-gray-400">Pure rent foregone</p>
              </div>
              <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-3">
                <p class="text-xs text-gray-400 mb-1">Effective Annual Rent</p>
                <p class="text-xl font-extrabold" style="color: #10b981;">{{ fmtDollar(results.effectiveAnnualIncome) }}</p>
                <p class="text-xs text-gray-400">Rent actually collected</p>
              </div>
              <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-3">
                <p class="text-xs text-gray-400 mb-1">Total Vacancy Cost</p>
                <p class="text-xl font-extrabold" style="color: #f59e0b;">{{ fmtDollar(results.totalVacancyCost) }}</p>
                <p class="text-xs text-gray-400">Lost + turnover + utilities</p>
              </div>
              <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-3">
                <p class="text-xs text-gray-400 mb-1">{{ (inp.number_of_units || 1) > 1 ? 'Unit-Days Vacant' : 'Days Vacant' }}</p>
                <p class="text-xl font-extrabold" style="color: #1e3a5f;">{{ Math.round(results.daysVacant) }}</p>
                <p class="text-xs text-gray-400">{{ fmt1(results.weeksVacant) }} wks / {{ fmt1(results.monthsVacantDerived) }} mo</p>
              </div>
            </div>

            <!-- VACANCY GAUGE -->
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <p class="text-sm font-bold mb-3" style="color: #1e3a5f;">Vacancy Rate Gauge</p>
              <div class="flex justify-center">
                <svg width="220" height="130" viewBox="0 0 220 130">
                  <!-- Track arc background -->
                  <path d="M 20 110 A 90 90 0 0 1 200 110" fill="none" stroke="#e5e7eb" stroke-width="16" stroke-linecap="round"/>
                  <!-- Zone arcs -->
                  <path :d="gaugeZoneArc(0, isSTR ? 25 : 5)" fill="none" stroke="#10b981" stroke-width="16" stroke-linecap="round"/>
                  <path :d="gaugeZoneArc(isSTR ? 25 : 5, isSTR ? 35 : 10)" fill="none" stroke="#3b82f6" stroke-width="16"/>
                  <path :d="gaugeZoneArc(isSTR ? 35 : 10, isSTR ? 50 : 15)" fill="none" stroke="#f59e0b" stroke-width="16"/>
                  <path :d="gaugeZoneArc(isSTR ? 50 : 15, isSTR ? 100 : 50)" fill="none" stroke="#ef4444" stroke-width="16"/>
                  <!-- Needle -->
                  <line :x1="110" :y1="110" :x2="gaugeNeedleX" :y2="gaugeNeedleY" stroke="#1e3a5f" stroke-width="3" stroke-linecap="round"/>
                  <circle cx="110" cy="110" r="5" fill="#1e3a5f"/>
                  <!-- Market benchmark marker -->
                  <circle :cx="benchmarkMarkerX" :cy="benchmarkMarkerY" r="4" fill="#f59e0b" stroke="white" stroke-width="1.5"/>
                  <!-- Labels -->
                  <text x="110" y="90" text-anchor="middle" font-size="18" font-weight="800" fill="#1e3a5f">{{ fmt2(results.vacancyRate) }}%</text>
                  <text x="110" y="104" text-anchor="middle" font-size="9" fill="#6b7280">Vacancy Rate</text>
                  <text x="12" y="126" text-anchor="middle" font-size="8" fill="#10b981">0%</text>
                  <text x="208" y="126" text-anchor="middle" font-size="8" fill="#ef4444">{{ isSTR ? '100%' : '50%' }}</text>
                </svg>
              </div>
              <div class="flex justify-center gap-4 text-xs mt-1">
                <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-green-500 inline-block"></span> Excellent</span>
                <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-blue-500 inline-block"></span> Good</span>
                <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span> Concerning</span>
                <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-red-500 inline-block"></span> Critical</span>
              </div>
              <p class="text-xs text-gray-400 text-center mt-1">Gold dot = market benchmark</p>
            </div>

            <!-- INCOME COMPARISON BAR -->
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <p class="text-sm font-bold mb-3" style="color: #1e3a5f;">Income Comparison</p>
              <div class="space-y-2">
                <div>
                  <div class="flex justify-between text-xs text-gray-500 mb-0.5">
                    <span>Potential Annual Rent</span>
                    <span class="font-semibold">{{ fmtDollar(results.potentialAnnualIncome) }}</span>
                  </div>
                  <div class="h-4 bg-gray-200 rounded-full w-full"></div>
                </div>
                <div>
                  <div class="flex justify-between text-xs text-gray-500 mb-0.5">
                    <span>Effective Annual Rent</span>
                    <span class="font-semibold text-green-600">{{ fmtDollar(results.effectiveAnnualIncome) }}</span>
                  </div>
                  <div class="h-4 bg-gray-200 rounded-full w-full overflow-hidden">
                    <div class="h-4 bg-green-500 rounded-full" :style="{ width: occupancyBarPct + '%' }"></div>
                  </div>
                </div>
                <p class="text-xs text-gray-500 text-center mt-1">Income lost to vacancy: <span class="font-bold text-red-600">{{ fmtDollar(results.incomeLost) }} ({{ fmt2(results.vacancyRate) }}%)</span></p>
              </div>
            </div>

            <!-- CALENDAR VIZ -->
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <p class="text-sm font-bold mb-1" style="color: #1e3a5f;">Vacancy Days (Illustrative)</p>
              <p class="text-xs text-amber-600 font-medium mb-2">This calendar is ILLUSTRATIVE — vacant days are randomly distributed for visualization. It does NOT represent actual vacancy dates.</p>
              <div class="grid gap-0.5" style="grid-template-columns: repeat(52, minmax(0,1fr));">
                <div v-for="(week, wi) in calendarWeeks" :key="wi" class="flex flex-col gap-0.5">
                  <div v-for="(day, di) in week" :key="di"
                    class="w-full rounded-sm"
                    style="aspect-ratio: 1/1;"
                    :style="{ background: day ? 'rgba(239,68,68,0.6)' : '#e5e7eb' }">
                  </div>
                </div>
              </div>
              <p class="text-xs text-gray-400 mt-1 text-center">Red = vacant · Gray = occupied · {{ Math.round(results.daysVacant) }} days vacant of {{ results.totalPotentialDays }}</p>
            </div>

            <!-- DETAILED BREAKDOWN TABLE -->
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <p class="text-sm font-bold mb-3" style="color: #1e3a5f;">Full Breakdown</p>
              <table class="w-full text-xs">
                <tbody class="divide-y divide-gray-100">
                  <tr class="py-1"><td class="py-1 text-gray-500">Number of Units</td><td class="py-1 text-right font-semibold">{{ inp.number_of_units || 1 }}</td></tr>
                  <tr><td class="py-1 text-gray-500">{{ (inp.number_of_units || 1) > 1 ? 'Unit-Days Vacant' : 'Days Vacant' }}</td><td class="py-1 text-right font-semibold">{{ Math.round(results.daysVacant) }} days</td></tr>
                  <tr><td class="py-1 text-gray-500">Days Occupied</td><td class="py-1 text-right font-semibold">{{ Math.round(results.daysOccupied) }} days</td></tr>
                  <tr><td class="py-1 text-gray-500">Vacancy Rate</td><td class="py-1 text-right font-semibold">{{ fmt2(results.vacancyRate) }}%</td></tr>
                  <tr><td class="py-1 text-gray-500">Occupancy Rate</td><td class="py-1 text-right font-semibold">{{ fmt2(100 - results.vacancyRate) }}%</td></tr>
                  <tr><td class="py-1 text-gray-500">Equivalent Months Vacant</td><td class="py-1 text-right font-semibold">{{ fmt2(results.monthsVacantDerived) }} mo</td></tr>
                  <tr><td class="py-1 text-gray-500">Equivalent Weeks Vacant</td><td class="py-1 text-right font-semibold">{{ fmt2(results.weeksVacant) }} wks</td></tr>
                  <tr><td class="py-1 text-gray-500">Daily Rent Rate</td><td class="py-1 text-right font-semibold">{{ fmtDollar(results.dailyRentRate) }}/day</td></tr>
                  <tr class="border-t-2 border-gray-200"><td class="py-1 text-gray-500">Annual Potential Rent</td><td class="py-1 text-right font-semibold">{{ fmtDollar(results.potentialAnnualIncome) }}</td></tr>
                  <tr><td class="py-1 text-gray-500">Effective Annual Rent</td><td class="py-1 text-right font-semibold text-green-600">{{ fmtDollar(results.effectiveAnnualIncome) }}</td></tr>
                  <tr><td class="py-1 text-gray-500">Income Lost to Vacancy</td><td class="py-1 text-right font-semibold text-red-600">{{ fmtDollar(results.incomeLost) }}</td></tr>
                  <tr><td class="py-1 text-gray-500">Turnover Costs ({{ inp.number_of_turnovers || 1 }} events)</td><td class="py-1 text-right font-semibold">{{ fmtDollar(results.turnoverCostsTotal) }}</td></tr>
                  <tr><td class="py-1 text-gray-500">Vacancy-Period Utilities</td><td class="py-1 text-right font-semibold">{{ fmtDollar(results.vacancyUtilitiesCost) }}</td></tr>
                  <tr class="font-bold"><td class="py-1 text-gray-700">TOTAL VACANCY COST</td><td class="py-1 text-right" style="color: #f59e0b;">{{ fmtDollar(results.totalVacancyCost) }}</td></tr>
                  <tr><td class="py-1 text-gray-500">Net Effective Income</td><td class="py-1 text-right font-semibold">{{ fmtDollar(results.netEffectiveIncome) }}</td></tr>
                  <tr class="border-t-2 border-gray-200"><td class="py-1 text-gray-500">Market Benchmark</td><td class="py-1 text-right font-semibold">{{ fmt1(results.marketBenchmark) }}% ({{ inp.property_type }})</td></tr>
                  <tr><td class="py-1 text-gray-500">Tolerance Band</td><td class="py-1 text-right font-semibold">±{{ fmt2(results.tolerance) }}%</td></tr>
                  <tr><td class="py-1 text-gray-500">Position vs Market</td><td class="py-1 text-right font-semibold">{{ results.delta >= 0 ? '+' : '' }}{{ fmt2(results.delta) }}%</td></tr>
                  <tr><td class="py-1 text-gray-500">Action Tier</td><td class="py-1 text-right font-semibold">{{ results.actionTier.replace(/_/g, ' ') }}</td></tr>
                </tbody>
              </table>
            </div>

            <!-- TIME DIMENSION NOTE -->
            <div class="bg-blue-50 rounded-2xl border border-blue-100 p-4">
              <p class="text-xs font-bold text-blue-700 mb-1">Trailing 12-Month Metric</p>
              <p class="text-xs text-blue-600">Vacancy rate reflects past performance, not current state. One long vacancy event can distort an annual rate even if today the property is stably occupied. A 60-day vacancy in month 3 creates 16% annual rate — but if subsequent months are fully occupied, the property may already be on track to &lt;5% next year. Re-run quarterly for trend tracking.</p>
            </div>

          </template>

          <!-- EMPTY STATE -->
          <template v-else>
            <div class="bg-white rounded-2xl border-2 border-dashed border-gray-200 p-8 text-center">
              <div class="text-4xl mb-3">📊</div>
              <p class="font-bold text-gray-700 mb-1">Enter your property data</p>
              <p class="text-sm text-gray-400">Enter Annual Potential Rent and Days Vacant above to get your diagnostic verdict, likely causes, and action threshold.</p>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- SAVED SCENARIOS WIDGET -->
    <div id="saved-scenarios" class="max-w-[1100px] mx-auto px-4 sm:px-6 pb-8">
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div class="flex items-center justify-between mb-1">
          <h2 class="text-lg font-bold" style="color: #1e3a5f;">Saved Scenarios</h2>
          <span class="text-xs text-gray-400">{{ savedScenarios.length }}/20</span>
        </div>
        <p class="text-sm text-gray-500 mb-4">Save up to 20 vacancy analyses to compare properties</p>

        <!-- Empty state -->
        <div v-if="savedScenarios.length === 0" class="text-center py-6 border-2 border-dashed border-gray-200 rounded-xl">
          <p class="text-gray-400 text-sm mb-3">No scenarios saved yet</p>
          <button @click="saveCurrentScenario" :disabled="!results" class="px-4 py-2 rounded-lg text-sm font-semibold transition" :class="results ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500' : 'bg-gray-100 text-gray-400 cursor-not-allowed'">Save current analysis</button>
        </div>

        <!-- Scenarios table -->
        <div v-else class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-200 text-left text-xs text-gray-400 uppercase tracking-wide">
                <th class="pb-2 font-semibold">Name</th>
                <th class="pb-2 font-semibold">Date</th>
                <th class="pb-2 font-semibold">Vacancy</th>
                <th class="pb-2 font-semibold">Lost Rent</th>
                <th class="pb-2 font-semibold">Verdict</th>
                <th class="pb-2 font-semibold">Action</th>
                <th class="pb-2 font-semibold"></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="s in savedScenarios" :key="s.id" class="text-xs">
                <td class="py-2 font-semibold text-gray-800">{{ s.name }}</td>
                <td class="py-2 text-gray-400">{{ formatDate(s.created_at) }}</td>
                <td class="py-2 font-semibold">{{ fmt2(s.outputs.vacancy_rate) }}%</td>
                <td class="py-2 text-red-600 font-semibold">{{ fmtDollar(s.outputs.income_lost) }}</td>
                <td class="py-2">
                  <span class="inline-block px-2 py-0.5 rounded-full text-xs font-bold"
                    :style="{ background: verdictColorMap[s.outputs.verdict_tier]?.bg || '#f3f4f6', color: verdictColorMap[s.outputs.verdict_tier]?.text || '#374151' }">
                    {{ s.outputs.verdict_tier }}
                  </span>
                </td>
                <td class="py-2 text-gray-600">{{ (s.outputs.action_tier || '').replace(/_/g,' ') }}</td>
                <td class="py-2">
                  <div class="flex gap-2">
                    <button @click="loadScenario(s)" class="text-blue-600 hover:underline text-xs">Load</button>
                    <button @click="deleteScenario(s.id)" class="text-red-500 hover:underline text-xs">Del</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex gap-3 mt-4">
            <button @click="saveCurrentScenario" :disabled="!results" class="px-4 py-2 rounded-lg text-sm font-semibold transition" :class="results ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500' : 'bg-gray-100 text-gray-400 cursor-not-allowed'">Save current as new</button>
            <NuxtLink to="/compare-real-estate-deals?source=vacancy-rate-calculator"
              class="px-4 py-2 rounded-lg text-sm font-semibold border border-gray-300 text-gray-700 hover:border-gray-400 transition">
              Compare All →
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         SEO CONTENT SECTIONS
    ═══════════════════════════════════════════════ -->
    <div class="max-w-[1100px] mx-auto px-4 sm:px-6 pb-16 space-y-12">

      <!-- QUICK ANSWER -->
      <section id="quick-answer">
        <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Quick Answer — Vacancy Rate Formula and Thresholds</h2>
          <div class="grid sm:grid-cols-2 gap-6">
            <div>
              <p class="font-bold text-gray-800 mb-2">Vacancy Rate Formula</p>
              <div class="bg-white rounded-xl p-3 font-mono text-sm border border-yellow-200">
                Vacancy Rate = (Days Vacant ÷ 365) × 100%
              </div>
              <p class="font-bold text-gray-800 mt-3 mb-2">Income Lost Formula</p>
              <div class="bg-white rounded-xl p-3 font-mono text-sm border border-yellow-200">
                Income Lost = Annual Potential Rent × Vacancy Rate
              </div>
            </div>
            <div>
              <p class="font-bold text-gray-800 mb-2">Good Vacancy Rate (residential)</p>
              <ul class="space-y-1 text-sm">
                <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-green-500"></span><strong>Excellent:</strong> under 5%</li>
                <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-blue-500"></span><strong>Good:</strong> 5–10% (healthy range)</li>
                <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-yellow-400"></span><strong>Concerning:</strong> 10–15% (moderate leakage)</li>
                <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-red-500"></span><strong>Critical:</strong> 15%+ (severe income loss)</li>
              </ul>
              <p class="font-bold text-gray-800 mt-3 mb-1 text-sm">Vacation/STR (different scale):</p>
              <p class="text-xs text-gray-600">Excellent &lt;25% · Good 25–35% · Concerning 35–50% · Critical 50%+</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-4">Use the Vacancy Rate Calculator above to compute your rate, identify likely causes, and get action thresholds based on dollar magnitude. → Enter your numbers above for instant diagnostic.</p>
        </div>
      </section>

      <!-- OVERVIEW -->
      <section id="overview">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Calculate Vacancy Rate + Income Lost + Likely Causes</h2>
        <p class="text-gray-500 mb-4">Diagnostic verdict with action thresholds based on dollar magnitude — for landlords and investors</p>
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>Wondering if your $5,000–$50,000 in lost rent is normal — or a sign of bigger problems? Use this Vacancy Rate Calculator to measure annual vacancy %, quantify income lost, identify likely causes (pricing, marketing, tenant retention, structural), and get action thresholds based on dollar magnitude — not just percent rates. Enter your numbers above for instant diagnostic.</p>
          <p>What makes this calculator different from a simple rate calculator: it delivers a 4-tier Verdict with severity descriptors (EXCELLENT through CRITICAL), a Likely Causes block per tier for diagnostic interpretation, Action Thresholds by Lost Rent magnitude (MONITOR / INVESTIGATE / REPOSITION / STRUCTURAL — independent of % rate), Vacancy Pattern interpretation for multi-unit properties, and Market Benchmark comparison with calibration honesty.</p>
          <p>Common questions this calculator answers: "Is my 12% vacancy rate normal — or a sign of structural problems?" · "I'm losing $24K/year to vacancy — what action is needed?" · "My multifamily has 1 unit always vacant — is that demand or pricing?" · "I have 0% vacancy — am I leaving money on the table?" Default benchmarks shown are illustrative national ranges, NOT your local market rate. In high-demand markets, stabilized vacancy may be 3–5%. In oversupplied markets, vacancy can exceed 15% even for well-managed properties. The vacancy rate is the question — Likely Causes and Action Thresholds are the answer. Once you've diagnosed your vacancy, model the financial impact with our <NuxtLink to="/property-cash-flow-calculator" class="text-yellow-700 font-semibold hover:underline">Property Cash Flow Calculator</NuxtLink> — vacancy is a primary input there.</p>
          <p>This calculator is built for landlords, investors, and property managers who want to move beyond a number to action. It's a diagnostic tool — not a financial audit. The Verdict and Likely Causes give you a place to start investigating; root-cause diagnosis requires local market analysis, property condition review, and professional consultation. The Action Thresholds tell you when consultation is justified by dollar magnitude. Enter your annual potential rent and days vacant above — this calculator returns Vacancy Rate %, Verdict tier, Likely Causes, Action Threshold based on Lost Rent magnitude, and Pattern interpretation for multi-unit properties.</p>
        </div>
      </section>

      <!-- SEARCH ENTRY HOOKS -->
      <section id="search-entry-hooks">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Vacancy Rate Questions This Calculator Answers</h2>
        <p class="text-gray-500 mb-6">Landlords come to this calculator with very specific questions about vacancy. Here are the most common ones — answered directly for fast reference.</p>
        <div class="grid sm:grid-cols-2 gap-4">
          <div v-for="hook in searchHooks" :key="hook.q" class="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <p class="text-sm font-bold mb-1" style="color: #1e3a5f;">Q: {{ hook.q }}</p>
            <p class="text-sm text-gray-700">A: {{ hook.a }}</p>
          </div>
        </div>
        <p class="text-sm text-gray-600 mt-4">Enter your numbers above for diagnostic answers, not just metric outputs. → This calculator shows Verdict + Likely Causes + Action Threshold + Pattern interpretation.</p>
      </section>

      <!-- HOW TO USE -->
      <section id="how-to-use">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">How to Use the Vacancy Rate Calculator</h2>
        <p class="text-gray-500 mb-4">From inputs to diagnostic verdict and action threshold</p>
        <p class="text-sm text-gray-600 mb-6">This calculator shows your vacancy rate, lost income, and diagnostic verdict in 5 steps. Enter your numbers above as you read — outputs update immediately.</p>
        <div class="space-y-4">
          <div v-for="(step, i) in howToUseSteps" :key="i" class="flex gap-4">
            <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style="background: #1e3a5f;">{{ i + 1 }}</div>
            <div>
              <p class="font-bold text-gray-800">{{ step.title }}</p>
              <p class="text-sm text-gray-600 mt-1">{{ step.body }}</p>
            </div>
          </div>
        </div>
        <div class="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p class="text-sm font-bold text-blue-800 mb-2">After completing diagnostic, follow up with related calculators:</p>
          <ul class="space-y-1 text-sm text-blue-700">
            <li>→ <NuxtLink to="/property-cash-flow-calculator" class="hover:underline font-semibold">Property Cash Flow Calculator</NuxtLink> — model how vacancy assumption affects Year 1 cash flow</li>
            <li>→ <NuxtLink to="/real-estate-roi-calculator" class="hover:underline font-semibold">Real Estate ROI Calculator</NuxtLink> — full pre-purchase deal analysis with calibrated vacancy</li>
            <li>→ <NuxtLink to="/compare-real-estate-deals" class="hover:underline font-semibold">Compare Real Estate Deals</NuxtLink> — track vacancy across multiple properties</li>
            <li>→ <NuxtLink to="/rental-property-calculator" class="hover:underline font-semibold">Rental Property Calculator</NuxtLink> — Year 1 operations with vacancy impact on NOI</li>
          </ul>
        </div>
        <div class="mt-4 grid sm:grid-cols-2 gap-3">
          <div v-for="tip in proTips" :key="tip.title" class="bg-amber-50 border border-amber-100 rounded-xl p-3">
            <p class="text-xs font-bold text-amber-800 mb-1">{{ tip.title }}</p>
            <p class="text-xs text-amber-700">{{ tip.body }}</p>
          </div>
        </div>
      </section>

      <!-- INPUTS & OUTPUTS -->
      <section id="inputs-outputs">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Inputs and Outputs</h2>
        <div class="grid sm:grid-cols-2 gap-6">
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 class="font-bold text-gray-800 mb-3">Inputs (12 fields)</h3>
            <table class="w-full text-xs">
              <thead><tr class="text-gray-400 border-b"><th class="pb-1 text-left">Input</th><th class="pb-1 text-left">Required</th><th class="pb-1 text-left">Default</th></tr></thead>
              <tbody class="divide-y divide-gray-50 text-gray-700">
                <tr><td class="py-1">Annual Potential Rent</td><td>Yes</td><td>—</td></tr>
                <tr><td class="py-1">Days Vacant</td><td>Yes*</td><td>—</td></tr>
                <tr><td class="py-1">Months Vacant</td><td>Alt to days</td><td>—</td></tr>
                <tr><td class="py-1">Number of Units</td><td>No</td><td>1</td></tr>
                <tr><td class="py-1">Vacancy Pattern</td><td>No</td><td>Mixed</td></tr>
                <tr><td class="py-1">Property Type</td><td>No</td><td>SFR</td></tr>
                <tr><td class="py-1">Market Vacancy Override</td><td>No</td><td>7%</td></tr>
                <tr><td class="py-1">Turnover Costs / Event</td><td>No</td><td>$0</td></tr>
                <tr><td class="py-1">Number of Turnovers</td><td>No</td><td>1</td></tr>
                <tr><td class="py-1">Utilities During Vacancy</td><td>No</td><td>$0</td></tr>
                <tr><td class="py-1">Scenario Name</td><td>No</td><td>Property #</td></tr>
                <tr><td class="py-1">Analysis Period End Date</td><td>No</td><td>Today</td></tr>
              </tbody>
            </table>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 class="font-bold text-gray-800 mb-3">Key Outputs</h3>
            <ul class="space-y-2 text-xs text-gray-700">
              <li class="flex gap-2"><span class="font-bold text-green-600">Verdict Tier</span> — EXCELLENT/GOOD/CONCERNING/CRITICAL + severity descriptor</li>
              <li class="flex gap-2"><span class="font-bold text-blue-600">Likely Causes</span> — per-tier diagnostic block (Round 2)</li>
              <li class="flex gap-2"><span class="font-bold text-amber-600">Action Threshold</span> — dollar-magnitude recommendation (Round 2)</li>
              <li class="flex gap-2"><span class="font-bold text-purple-600">Market Position</span> — BELOW/AT/ABOVE/ABSOLUTE_HIGH vs benchmark</li>
              <li class="flex gap-2"><span class="font-bold text-red-600">Income Lost</span> — pure rent foregone</li>
              <li class="flex gap-2"><span class="font-bold text-gray-700">Total Vacancy Cost</span> — income lost + turnover + utilities</li>
              <li class="flex gap-2"><span class="font-bold text-gray-700">Effective Annual Income</span> — rent actually collected</li>
              <li class="flex gap-2"><span class="font-bold text-gray-700">3 Visualizations</span> — gauge, income bar, calendar</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- FORMULA -->
      <section id="formula">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Vacancy Rate Calculation Step-by-Step (With Numbers)</h2>
        <p class="text-gray-500 mb-6">The math behind Vacancy Rate, Income Lost, and Action Thresholds</p>

        <h3 class="text-xl font-bold mb-3" style="color: #1e3a5f;">How Vacancy Rate Is Calculated (3-Step Approach)</h3>
        <p class="text-gray-700 mb-4">Vacancy rate math has 3 steps: (1) Calculate the rate (days vacant ÷ 365), (2) Quantify the dollar impact (income lost + total cost), (3) Determine action threshold (by dollar magnitude, not just rate).</p>

        <h3 class="text-xl font-bold mb-3" style="color: #1e3a5f;">Vacancy Rate Formula in Real Estate Investing</h3>
        <div class="bg-gray-50 rounded-xl border border-gray-200 p-4 mb-4">
          <p class="font-mono text-sm mb-2">Vacancy Rate = (Days Vacant ÷ 365) × 100%</p>
          <p class="text-sm text-gray-600">For multi-unit: replace 365 with (Number of Units × 365) to get unit-days denominator. Industry standard — NAR, IREM, BiggerPockets all use the same formula.</p>
        </div>
        <p class="text-sm text-gray-700 mb-4">For investment analysis, vacancy rate feeds two downstream calculations: Effective Income (used in NOI, Cap Rate, DSCR analysis) and Annual Cash Flow (used in pre-purchase ROI projections). → Use <NuxtLink to="/cap-rate-calculator" class="text-yellow-700 font-semibold hover:underline">Cap Rate Calculator</NuxtLink> with vacancy-adjusted Effective Income for accurate NOI. → Use <NuxtLink to="/dscr-calculator" class="text-yellow-700 font-semibold hover:underline">DSCR Calculator</NuxtLink> with vacancy-adjusted Effective Income for lender underwriting.</p>

        <h3 class="text-xl font-bold mb-3" style="color: #1e3a5f;">How to Calculate Rental Vacancy Loss</h3>
        <div class="bg-gray-50 rounded-xl border border-gray-200 p-4 mb-4">
          <p class="font-mono text-xs mb-1">Income Lost = Annual Potential Rent × Vacancy Rate</p>
          <p class="font-mono text-xs mb-1">Turnover Costs Total = Cost Per Turnover × Number of Turnovers</p>
          <p class="font-mono text-xs mb-1">Vacancy Utilities = Monthly Utility × (Days Vacant ÷ 30.4)</p>
          <p class="font-mono text-xs">Total Vacancy Loss = Income Lost + Turnover Costs + Utilities</p>
        </div>
        <p class="text-sm text-gray-600 mb-4">Example: $30,000 annual potential rent, 8% vacancy rate, 1 turnover at $1,500, $150/mo utilities, 29 days vacant. Income Lost = $2,400 · Turnover Costs = $1,500 · Utilities = $143 · Total = $4,043. Calculator computes all three automatically — enter your numbers above for instant calculation.</p>

        <h3 class="text-xl font-bold mb-3" style="color: #1e3a5f;">Step-by-Step Calculation of Vacancy Rate and Lost Income</h3>
        <div class="bg-gray-50 rounded-xl border border-gray-200 p-4 mb-4 text-sm space-y-2">
          <p><strong>Vacancy Rate:</strong> Days Vacant ÷ 365 × 100% (always 365-day denominator)</p>
          <p><strong>Daily Rate:</strong> Annual Potential Rent ÷ 365</p>
          <p><strong>Effective Annual Income:</strong> Annual Potential Rent × (1 − Vacancy Rate)</p>
          <p><strong>Action Threshold:</strong> &lt;$10K → MONITOR · $10K–$25K → INVESTIGATE · $25K–$50K → REPOSITION · ≥$50K → STRUCTURAL</p>
          <p><strong>Market Tolerance:</strong> MAX(2.0%, Market Benchmark × 0.20) — prevents false signals for high-baseline types</p>
        </div>

        <h3 class="text-xl font-bold mb-3" style="color: #1e3a5f;">Example: Vacancy Rate Calculation With Numbers</h3>
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <p class="text-sm font-semibold text-gray-700 mb-2">Single-family rental with one extended vacancy:</p>
          <div class="text-sm space-y-1 text-gray-700">
            <p>Annual Potential Rent: $24,000 · Days Vacant: 45 · Property Type: SFR (7% benchmark)</p>
            <p>Turnover Costs: $1,500 · Utilities: $200/mo</p>
            <p class="mt-2"><strong>Vacancy Rate:</strong> 45 ÷ 365 = <span class="font-bold text-amber-600">12.33%</span> — Verdict: CONCERNING · Severity: "Moderate income leakage"</p>
            <p><strong>Income Lost:</strong> $24,000 × 12.33% = $2,959</p>
            <p><strong>Total Vacancy Cost:</strong> $2,959 + $1,500 + $296 = $4,755</p>
            <p><strong>Action Threshold:</strong> MONITOR ($2,959 &lt; $10,000)</p>
            <p class="text-xs text-gray-500 mt-2">Key insight: 12.33% vacancy looks bad (CONCERNING tier) but Lost Rent of $2,959 is below MONITOR threshold. Calculator surfaces this discrepancy — % is concerning but dollar impact is small enough for cautious investigation, not aggressive intervention.</p>
          </div>
        </div>
      </section>

      <!-- WHAT IS -->
      <section id="what-is">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">What Is Vacancy Rate? (Diagnostic Metric Explained)</h2>
        <p class="text-gray-500 mb-4">Why vacancy rate is a question, not an answer</p>
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>Vacancy rate is the percentage of time a rental property goes unoccupied during a measurement period. It's the standard diagnostic for rental property performance, expressed annually for benchmarking. But "vacancy rate" alone tells you almost nothing. A 12% rate could mean a structurally healthy single-family rental in a balanced market — or a deeply troubled multifamily in an oversupplied submarket. This is why the Vacancy Rate Calculator extends beyond the metric itself: it interprets the rate (Verdict Tier), suggests likely causes (Diagnostic Block), and recommends action thresholds based on dollar magnitude (Action Tier).</p>
          <p>Three properties can have identical 12% vacancy with completely different problems: (1) SFR in stable market — one 45-day gap between long-term tenants. Likely cause: standard turnover. Action: monitor. (2) SFR in declining submarket — continuous failure to find tenants at posted rent. Likely cause: pricing above market. Action: pricing investigation. (3) 10-unit apartment — 1 unit always vacant due to layout problems. Likely cause: unit-specific demand issue. Action: unit-level investigation. All three show 12% vacancy. Same CONCERNING verdict. But the LIKELY CAUSES, ACTION THRESHOLD, and PATTERN interpretation differ — that's the diagnostic value.</p>
          <p>Current market dynamics affecting vacancy benchmarks (2026): Post-2024 multifamily oversupply in many Sun Belt markets (vacancy 15%+ even for well-managed properties); high-demand metros (NYC, Boston, SF Bay) seeing stabilized vacancy 3–5%; vacation rental seasonal patterns extreme (summer 5%, winter 50%); rising interest rates reducing tenant turnover; single-family rental demand strong (homeownership barrier). These dynamics mean default benchmarks are starting context, not current local truth.</p>
          <p>A subtle trap in vacancy analysis: comparing your rate to a property-type benchmark can create false confidence at high baselines. Office properties typically have an 18% benchmark vacancy. If your Office property shows 21% vacancy, the math says "within 3% of benchmark = AT_MARKET." But 21% vacancy is high in absolute terms regardless of the benchmark — either your submarket is oversupplied, or the benchmark needs adjustment. This calculator's Round 3 override flags this as ABSOLUTE_HIGH to prevent the false "tracking benchmark = fine" signal. All five diagnostic dimensions matter independently: Verdict Tier (%), Action Tier ($), Market Position, Absolute Floor (R3), and Pattern (multi-unit). → Use this calculator to surface each one.</p>
        </div>
      </section>

      <!-- RESULT MEANING -->
      <section id="result-meaning">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">How to Read the Verdict, Likely Causes, and Action Threshold</h2>
        <p class="text-gray-500 mb-4">Diagnostic interpretation, not just metric output</p>
        <p class="text-sm text-gray-600 mb-4">Once you've entered your numbers above, this calculator shows 4 layers of output: Verdict Tier (how am I doing?), Likely Causes (why?), Action Threshold (what should I do?), and Pattern (how is vacancy distributed?).</p>

        <div class="grid sm:grid-cols-2 gap-4 mb-6">
          <div v-for="tier in verdictTiersExplanation" :key="tier.name" class="rounded-xl border p-4" :style="{ borderColor: tier.color, background: tier.bg }">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-lg">{{ tier.icon }}</span>
              <span class="font-extrabold" :style="{ color: tier.color }">{{ tier.name }}</span>
            </div>
            <p class="text-xs text-gray-600 mb-1">{{ tier.range }}</p>
            <p class="text-xs font-semibold text-gray-700">{{ tier.severity }}</p>
          </div>
        </div>

        <div class="space-y-6">
          <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <h3 class="font-bold text-gray-800 mb-2">Likely Causes Interpretation</h3>
            <p class="text-sm text-gray-600 mb-2">The Likely Causes block lists 3–5 most common causes per tier — diagnostic suggestions to start investigating, NOT verified diagnoses.</p>
            <div class="grid sm:grid-cols-2 gap-3 text-xs text-gray-700">
              <div>
                <p class="font-semibold mb-1 text-amber-700">CONCERNING tier causes:</p>
                <ul class="space-y-0.5"><li>• Pricing above market for property class</li><li>• Slow leasing cycle (&gt;30 days between tenants)</li><li>• Weak listing presentation or marketing reach</li><li>• Tenant screening creating extended vacancies</li></ul>
              </div>
              <div>
                <p class="font-semibold mb-1 text-red-700">CRITICAL tier causes:</p>
                <ul class="space-y-0.5"><li>• Structural pricing problem</li><li>• Location demand decline or submarket oversupply</li><li>• Property condition issues (deferred maintenance)</li><li>• Property class mismatch with tenant pool</li><li>• Management/leasing process failure</li></ul>
              </div>
            </div>
            <p class="text-xs text-gray-400 italic mt-2">Likely Causes are starting points for your investigation. Verified root cause requires local market data, property condition review, and (often) property manager input.</p>
          </div>

          <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <h3 class="font-bold text-gray-800 mb-2">Action Threshold Interpretation</h3>
            <p class="text-sm text-gray-600 mb-2">Action Tier is computed from Lost Rent dollar magnitude — INDEPENDENT of vacancy rate %. A 4% vacancy on $1M rent = $40,000 loss → REPOSITION action. A 15% vacancy on $20K rent = $3,000 loss → MONITOR action.</p>
            <div class="grid sm:grid-cols-2 gap-2 text-xs">
              <div class="bg-green-50 rounded-lg p-2"><p class="font-bold text-green-700">MONITOR (&lt;$10K lost)</p><p class="text-green-600">Normal operations</p></div>
              <div class="bg-yellow-50 rounded-lg p-2"><p class="font-bold text-yellow-700">INVESTIGATE ($10–25K)</p><p class="text-yellow-600">Pull comps, test rent reduction</p></div>
              <div class="bg-orange-50 rounded-lg p-2"><p class="font-bold text-orange-700">REPOSITION ($25–50K)</p><p class="text-orange-600">Deeper analysis, 5–10% reduction</p></div>
              <div class="bg-red-50 rounded-lg p-2"><p class="font-bold text-red-700">STRUCTURAL (≥$50K)</p><p class="text-red-600">Commercial advisor, repositioning</p></div>
            </div>
            <div class="mt-3 p-3 bg-blue-50 rounded-lg">
              <p class="text-xs font-bold text-blue-800 mb-1">Scale-Aware Escalation (R3)</p>
              <p class="text-xs text-blue-700">When Lost Rent exceeds 20% of Potential Rent, calculator escalates Action Tier one level. Why: $20K loss on $50K rent (40%) is catastrophic; $20K loss on $1M rent (2%) is normal. Watch for the "Escalated from X" banner — it's the most important small-asset diagnostic signal.</p>
            </div>
            <div class="mt-2 p-3 bg-red-50 rounded-lg">
              <p class="text-xs font-bold text-red-800 mb-1">Absolute Floor Protection (R3)</p>
              <p class="text-xs text-red-700">When vacancy &gt;15% on residential property types, Market Position overrides to ABSOLUTE_HIGH — prevents false "tracking benchmark = fine" signals on high-baseline types like Office at 21%. STR exempt (high baseline normal there).</p>
            </div>
          </div>

          <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <h3 class="font-bold text-gray-800 mb-2">Market Position Interpretation</h3>
            <p class="text-sm text-gray-600 mb-2">Position vs Market shows whether your rate is above/below local benchmark with relative tolerance band.</p>
            <p class="text-xs text-amber-600">Market Position uses default benchmark unless you've overridden with local data. Defaults are illustrative national ranges — in high-demand markets, stabilized vacancy may be 3–5% (your 7% would be 'concerning' here). In oversupplied markets, vacancy exceeds 15% even for well-managed properties. Calibrate with local property manager, MLS, or Rentometer for accurate position.</p>
            <div class="mt-3 p-3 bg-blue-50 rounded-lg">
              <p class="text-xs font-semibold text-blue-800">0% vacancy is often a flag, not a victory.</p>
              <p class="text-xs text-blue-700 mt-0.5">True 0% in long-term rentals typically signals under-pricing. Calculator shows EXCELLENT tier but adds underpricing warning banner. Pull comparable rentals — if your rent is 5%+ below median for similar property, you're trading occupancy for income.</p>
            </div>
          </div>

          <div class="bg-blue-50 rounded-xl border border-blue-100 p-4">
            <p class="text-sm font-bold text-blue-800 mb-1">After diagnostic verdict, recommended next steps:</p>
            <ul class="text-sm text-blue-700 space-y-0.5">
              <li>→ <NuxtLink to="/property-cash-flow-calculator" class="hover:underline font-semibold">Property Cash Flow Calculator</NuxtLink> — use this vacancy rate as Year 1 assumption</li>
              <li>→ <NuxtLink to="/cap-rate-calculator" class="hover:underline font-semibold">Cap Rate Calculator</NuxtLink> — with vacancy-adjusted Effective Income</li>
              <li>→ <NuxtLink to="/real-estate-roi-calculator" class="hover:underline font-semibold">Real Estate ROI Calculator</NuxtLink> — full deal pre-purchase analysis</li>
              <li>→ <NuxtLink to="/compare-real-estate-deals" class="hover:underline font-semibold">Compare Real Estate Deals</NuxtLink> — compare vacancy across portfolio</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- BENCHMARKS -->
      <section id="benchmarks">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Vacancy Rate Benchmarks for 2026</h2>
        <p class="text-xs text-amber-600 font-medium mb-4">Illustrative patterns, not measured data.</p>
        <div class="grid sm:grid-cols-2 gap-5">
          <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <h3 class="font-bold text-gray-800 mb-3">Standard Residential Ranges (Illustrative)</h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li><strong>Single-Family Rentals:</strong> 5–9% in balanced markets</li>
              <li><strong>Small Multifamily (2–4 units):</strong> 7–10%</li>
              <li><strong>Apartment Buildings (5+ units):</strong> 8–12%</li>
              <li><strong>Vacation/Short-Term Rentals:</strong> 25–45% (highly seasonal)</li>
              <li><strong>Commercial Retail:</strong> 8–15% (post-pandemic shifts)</li>
              <li><strong>Office:</strong> 12–20% (still elevated post-2020)</li>
            </ul>
          </div>
          <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <h3 class="font-bold text-gray-800 mb-3">Market Dynamics</h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li><strong>High-Demand Markets</strong> (NYC, SF Bay, Boston, Seattle): stabilized vacancy 3–5%. A 7% rate here is concerning.</li>
              <li><strong>Balanced Markets</strong> (most US metros): stabilized vacancy 7–9%. Calculator defaults align well.</li>
              <li><strong>Oversupplied Markets</strong> (Sun Belt post-construction boom): vacancy can exceed 15% even for well-managed properties.</li>
              <li><strong>Seasonal Markets</strong> (vacation, college towns): annual averages mask extreme seasonal patterns.</li>
            </ul>
          </div>
        </div>
        <div class="mt-4 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <h3 class="font-bold text-gray-800 mb-3">Action Threshold Dollar Magnitudes (Same 5% Rate — Different Asset Scales)</h3>
          <div class="text-sm text-gray-700 space-y-1">
            <p>SFR $1,500/mo rent: 5% vacancy = $900 lost → MONITOR</p>
            <p>SFR $4,000/mo rent: 5% vacancy = $2,400 lost → MONITOR</p>
            <p>10-unit at $1,000/mo each: 5% vacancy = $6,000 lost → MONITOR</p>
            <p>50-unit at $1,500/mo each: 5% vacancy = $45,000 lost → REPOSITION</p>
            <p>$1M rent portfolio: 5% vacancy = $50,000 lost → STRUCTURAL</p>
          </div>
          <p class="text-xs text-gray-400 mt-2 italic">Same percent rate, dramatically different action implications based on dollar magnitude — which is why this calculator computes Action Threshold independently of Verdict Tier.</p>
        </div>
        <p class="text-xs text-amber-600 font-medium mt-3">These ranges are illustrative national patterns — NOT measured statistical datasets. Individual results vary significantly by metro area, submarket, property class, and economic conditions. The calculator's output on YOUR inputs always takes precedence over aggregate ranges.</p>
      </section>

      <!-- STRATEGY -->
      <section id="strategy">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Vacancy Strategy by Investor Type</h2>
        <p class="text-sm text-gray-600 mb-6">Different investor types use this calculator differently. Enter your numbers above and identify your strategy block below for tailored interpretation.</p>
        <div class="grid sm:grid-cols-2 gap-4">
          <div v-for="s in strategies" :key="s.type" class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <h3 class="font-bold mb-2" style="color: #1e3a5f;">{{ s.type }}</h3>
            <p class="text-xs text-gray-700 mb-1"><strong>Critical:</strong> {{ s.critical }}</p>
            <p class="text-xs text-gray-700 mb-1"><strong>Misleading:</strong> {{ s.misleading }}</p>
            <p class="text-xs text-gray-700"><strong>Prioritize:</strong> {{ s.prioritize }}</p>
          </div>
        </div>
        <div class="mt-6 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <h3 class="font-bold text-gray-800 mb-3">Next Steps — When Action Threshold Triggers Investigation</h3>
          <div class="space-y-3 text-sm text-gray-700">
            <p><strong class="text-green-700">1. MONITOR (&lt;$10K lost).</strong> No professional engagement required. Continue current management. Track quarterly trend with saved scenarios.</p>
            <p><strong class="text-yellow-700">2. INVESTIGATE_PRICING ($10K–$25K).</strong> Self-serve analysis is sufficient. Pull comparable rentals from MLS, Zillow Rent Manager, or Rentometer. Test market response with $50–$200/mo rent reduction at next renewal cycle.</p>
            <p><strong class="text-orange-700">3. REPOSITION_REDUCE ($25K–$50K).</strong> Engage local property manager for market analysis. Property manager fees are justified by dollar magnitude. Consider 5–10% rent reduction.</p>
            <p><strong class="text-red-700">4. STRUCTURAL_ISSUE (≥$50K).</strong> Engage commercial real estate advisor for repositioning analysis. Evaluate fundamental options: major renovation, tenant-base shift, or sale. → Use <NuxtLink to="/1031-exchange-calculator" class="text-yellow-700 font-semibold hover:underline">1031 Exchange Calculator</NuxtLink> if exploring tax-deferred exit. → Use <NuxtLink to="/real-estate-roi-calculator" class="text-yellow-700 font-semibold hover:underline">Real Estate ROI Calculator</NuxtLink> on alternative deployments of equity.</p>
          </div>
        </div>
      </section>

      <!-- APPLICATIONS -->
      <section id="applications">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Common Use Cases</h2>
        <p class="text-sm text-gray-600 mb-6">This calculator solves these specific landlord problems. Enter your numbers above for any of the use cases below.</p>
        <div class="grid sm:grid-cols-2 gap-4">
          <div v-for="app in applications" :key="app.title" class="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <p class="font-bold text-gray-800 mb-1">{{ app.title }}</p>
            <p class="text-sm text-gray-600" v-html="app.body"></p>
          </div>
        </div>
      </section>

      <!-- INDUSTRY STANDARDS -->
      <section id="industry-standards">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Vacancy Rate Standards Explained (2026)</h2>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-3 text-gray-700 text-sm">
          <p>Industry standard formula (Vacancy Rate = Days Vacant ÷ 365 × 100%) matches BiggerPockets, NAR (National Association of Realtors), IREM (Institute of Real Estate Management), and standard real estate operations textbooks. Tier thresholds (residential 5/10/15% — STR 25/35/50%) reflect general industry consensus for healthy/concerning/critical rates. The calculator's 4-tier framework with severity descriptors is more diagnostic than the common 2-tier ("acceptable" vs "high") framing.</p>
          <p>The Action Threshold framework (dollar-based) is a calculator-specific diagnostic enhancement. Most calculators output only rate %. The Action Tier reflects practitioner reality: same percent rate has dramatically different action implications by dollar magnitude.</p>
          <p class="text-xs text-gray-400 italic">Methodology aligns with industry-standard vacancy rate formula. Tier thresholds and action thresholds are calculator-specific frameworks designed for diagnostic depth. Cross-reference with local property manager standards for your specific market.</p>
        </div>
      </section>

      <!-- LIMITATIONS -->
      <section id="limitations">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Limitations of This Calculator</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div v-for="lim in limitations" :key="lim.title" class="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <p class="font-bold text-gray-800 text-sm mb-1">{{ lim.title }}</p>
            <p class="text-xs text-gray-600">{{ lim.body }}</p>
          </div>
        </div>
        <div class="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-4">
          <p class="text-sm font-bold text-amber-800 mb-2">When NOT to Use</p>
          <ul class="text-xs text-amber-700 space-y-0.5">
            <li>• Sub-365-day analysis (calculator uses annual denominator)</li>
            <li>• Property never operated as rental (no historical vacancy data)</li>
            <li>• Very short ownership (&lt;3 months: not enough data)</li>
            <li>• Mid-renovation property (vacancy reflects renovation, not market)</li>
            <li>• Foreign property (tax/market dynamics not modeled)</li>
            <li>• Commercial properties with multi-tenant complexity (use commercial-specific tools)</li>
          </ul>
        </div>
      </section>

      <!-- COMMON MISTAKES -->
      <section id="common-mistakes">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Common Mistakes in Vacancy Analysis</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div v-for="mistake in commonMistakes" :key="mistake.title" class="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <p class="font-bold text-gray-800 text-sm mb-1">{{ mistake.title }}</p>
            <p class="text-xs text-gray-600">{{ mistake.body }}</p>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Vacancy Rate Frequently Asked Questions</h2>
        <div class="space-y-3">
          <div v-for="(item, i) in faqItems" :key="i" class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <button @click="toggleFaq(i)" class="w-full flex items-center justify-between px-5 py-4 text-left">
              <span class="font-bold text-gray-800 text-sm pr-4">{{ item.q }}</span>
              <svg class="w-4 h-4 flex-shrink-0 text-gray-400 transition-transform" :class="openFaqIndex === i ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-show="openFaqIndex === i" class="px-5 pb-4 text-sm text-gray-700 leading-relaxed" v-html="item.a"></div>
          </div>
        </div>
      </section>

      <!-- RELATED CALCULATORS -->
      <section id="related-calculators">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Related Calculators</h2>
        <p class="text-sm text-gray-600 mb-4">This calculator is the diagnostic tool. Use related calculators to model the financial impact of your diagnosed vacancy.</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NuxtLink v-for="rc in relatedCalcs" :key="rc.href" :to="rc.href"
            class="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:border-yellow-400 hover:shadow-md transition">
            <p class="font-bold text-sm mb-1" style="color: #1e3a5f;">{{ rc.name }}</p>
            <p class="text-xs text-gray-500">{{ rc.desc }}</p>
          </NuxtLink>
        </div>
      </section>
    </div>

    <!-- FOOTER -->
    <footer class="bg-white border-t border-gray-200 mt-8">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-8">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background: #1e3a5f;">
              <span class="text-white font-extrabold text-sm">RC</span>
            </div>
            <span class="font-bold" style="color: #1e3a5f;">RealCalc</span>
          </div>
          <p class="text-xs text-gray-400 text-center">Educational tool only. Not investment advice. Verify with local data sources.</p>
          <div class="flex gap-4 text-xs text-gray-400">
            <NuxtLink to="/privacy" class="hover:text-gray-600 transition">Privacy</NuxtLink>
            <NuxtLink to="/terms" class="hover:text-gray-600 transition">Terms</NuxtLink>
            <NuxtLink to="/about" class="hover:text-gray-600 transition">About</NuxtLink>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

// ============================================================
// SEO HEAD
// ============================================================
useHead({
  title: 'Vacancy Rate Calculator — Income Lost + Likely Causes',
  meta: [
    { name: 'description', content: 'Free Vacancy Rate Calculator with diagnostic verdict, likely causes, action thresholds. Quantify income lost to vacancy and what to do about it.' },
    { property: 'og:title', content: 'Vacancy Rate Calculator — Income Lost + Likely Causes' },
    { property: 'og:description', content: 'Diagnostic tool: vacancy rate %, income lost, likely causes per tier, action thresholds by dollar magnitude. For landlords and investors.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Vacancy Rate Calculator',
          description: 'Free Vacancy Rate Calculator with diagnostic verdict, likely causes, and action thresholds. Quantify income lost to vacancy and what to do about it.',
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Web browser',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          featureList: [
            '4-tier Verdict (EXCELLENT / GOOD / CONCERNING / CRITICAL)',
            'Likely Causes block per tier',
            'Action Threshold by Lost Rent magnitude (dollar-based)',
            'Scale-Aware Escalation (R3 — LOSS_RATIO >20% triggers escalation)',
            'Absolute Floor Protection (R3 — >15% vacancy → ABSOLUTE_HIGH override)',
            'Multi-unit Vacancy Pattern interpretation (Concentrated/Distributed/Mixed)',
            '0% vacancy under-pricing insight',
            'Trailing 12-month time dimension framing',
            'Market Benchmark with relative tolerance band',
            'Vacancy Rate Gauge visualization',
            'Income Comparison Bar visualization',
            'Vacancy Days Calendar (illustrative)',
            'URL parameter import for shareable scenarios',
            'Saved Scenarios widget (up to 20 scenarios)',
            'Property type tier shift (residential vs STR)',
          ],
          audience: { '@type': 'Audience', audienceType: 'US landlords, investors, property managers' },
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'What is a good vacancy rate for rental property?', acceptedAnswer: { '@type': 'Answer', text: 'For residential rentals, under 5% is excellent. 5-10% is healthy/normal. 10-15% is concerning (moderate income leakage). 15%+ is critical (severe income loss). For vacation rentals, scale shifts: under 25% is excellent, 25-35% good, 35-50% concerning, 50%+ critical.' } },
            { '@type': 'Question', name: 'How is vacancy rate calculated?', acceptedAnswer: { '@type': 'Answer', text: 'Vacancy Rate = (Days Vacant ÷ 365) × 100%. Use trailing 12 months for annual rate. For multi-unit: sum all unit-days vacant across all units. Always use 365-day denominator.' } },
            { '@type': 'Question', name: 'Is 0% vacancy good?', acceptedAnswer: { '@type': 'Answer', text: 'Counter-intuitively, often NO. True 0% vacancy in long-term rentals (12+ months) typically signals under-pricing — property rented below market rate. Calculator shows EXCELLENT tier but adds underpricing investigation banner.' } },
            { '@type': 'Question', name: 'What does ABSOLUTE_HIGH market position mean?', acceptedAnswer: { '@type': 'Answer', text: 'Round 3 calculator override. Triggers when vacancy rate >15% AND property is residential. Prevents false "tracking benchmark = fine" signals on high-baseline types like Office at 21% vacancy (18% benchmark).' } },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arvcalc.com' },
            { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://arvcalc.com/calculators' },
            { '@type': 'ListItem', position: 3, name: 'Vacancy Rate Calculator', item: 'https://arvcalc.com/vacancy-rate-calculator' },
          ],
        },
      ]),
    },
  ],
})

// ============================================================
// CONSTANTS
// ============================================================
const STORAGE_KEY = 'vacancy-rate-scenarios'
const todayStr = new Date().toISOString().split('T')[0]

const PROPERTY_TYPE_DEFAULTS = {
  'Single-Family Rental': 7,
  'Multifamily 2-4 Units': 8,
  'Apartment Building 5+ Units': 9,
  'Vacation/Short-Term Rental': 35,
  'Commercial Retail': 12,
  'Office': 18,
}

function propertyTypeDefaultMarket(type) {
  return String(PROPERTY_TYPE_DEFAULTS[type] || 7)
}

// ============================================================
// STATE
// ============================================================
const isNavExpanded = ref(false)
const openFaqIndex = ref(null)
const vacancyInputMode = ref('days')
const savedScenarios = ref([])

const inp = ref({
  annual_potential_rent: null,
  days_vacant: null,
  months_vacant: null,
  number_of_units: null,
  vacancy_pattern: 'Mixed',
  property_type: 'Single-Family Rental',
  market_vacancy_override: null,
  turnover_costs_per_vacancy: null,
  number_of_turnovers: null,
  utilities_during_vacancy_monthly: null,
  scenario_name: '',
  analysis_period_end_date: todayStr,
})

// ============================================================
// URL PARAM MAP
// ============================================================
const URL_PARAM_MAP = {
  rent: 'annual_potential_rent',
  days: 'days_vacant',
  months: 'months_vacant',
  units: 'number_of_units',
  market: 'market_vacancy_override',
  turnover: 'turnover_costs_per_vacancy',
  turns: 'number_of_turnovers',
  utilities: 'utilities_during_vacancy_monthly',
}

const PROPERTY_TYPE_SLUG_MAP = {
  'single-family': 'Single-Family Rental',
  'sfr': 'Single-Family Rental',
  'multifamily-2-4': 'Multifamily 2-4 Units',
  'apartment-5plus': 'Apartment Building 5+ Units',
  'vacation-rental': 'Vacation/Short-Term Rental',
  'str': 'Vacation/Short-Term Rental',
  'commercial-retail': 'Commercial Retail',
  'office': 'Office',
}

const VACANCY_PATTERN_SLUG_MAP = {
  'concentrated': 'Concentrated',
  'distributed': 'Distributed',
  'mixed': 'Mixed',
}

// ============================================================
// DERIVED HELPERS
// ============================================================
const isSTR = computed(() => inp.value.property_type === 'Vacation/Short-Term Rental')

const marketBenchmark = computed(() => {
  if (inp.value.market_vacancy_override !== null && inp.value.market_vacancy_override !== '' && !isNaN(Number(inp.value.market_vacancy_override))) {
    return Number(inp.value.market_vacancy_override)
  }
  return PROPERTY_TYPE_DEFAULTS[inp.value.property_type] || 7
})

// Validate days vacant
const daysVacantError = computed(() => {
  const units = Number(inp.value.number_of_units) || 1
  const maxDays = units * 365
  const daysVal = Number(inp.value.days_vacant)
  const monthsVal = Number(inp.value.months_vacant)

  // Check which mode is active
  if (vacancyInputMode.value === 'days' && inp.value.days_vacant !== null && inp.value.days_vacant !== '') {
    if (isNaN(daysVal) || daysVal < 0) return 'Days vacant must be 0 or greater.'
    if (daysVal > maxDays) {
      if (units === 1) return `Days vacant cannot exceed potential days. Single-unit max: 365. Did you mean to enter days across multiple years?`
      return `Days vacant cannot exceed potential days. Multi-unit max: ${maxDays} (${units} units × 365).`
    }
  }
  if (vacancyInputMode.value === 'months' && inp.value.months_vacant !== null && inp.value.months_vacant !== '') {
    const derivedDays = Math.round(monthsVal * 30.4)
    if (derivedDays > maxDays) {
      return `Months vacant implies ${derivedDays} days, which exceeds max ${maxDays} days for ${units} units.`
    }
  }
  return null
})

// ============================================================
// CORE CALCULATION ENGINE
// ============================================================
const results = computed(() => {
  const rent = Number(inp.value.annual_potential_rent)
  if (!rent || rent <= 0) return null

  const units = Math.max(1, Number(inp.value.number_of_units) || 1)

  // STEP 1: Days vacant resolution (PRECEDENCE RULE)
  let daysVacant
  const daysRaw = inp.value.days_vacant
  const monthsRaw = inp.value.months_vacant
  const hasDays = daysRaw !== null && daysRaw !== '' && !isNaN(Number(daysRaw))
  const hasMonths = monthsRaw !== null && monthsRaw !== '' && !isNaN(Number(monthsRaw))

  if (hasDays) {
    daysVacant = Number(daysRaw)
  } else if (hasMonths) {
    daysVacant = Math.round(Number(monthsRaw) * 30.4)
  } else {
    return null // neither filled
  }

  if (isNaN(daysVacant) || daysVacant < 0) return null

  // Validate
  const maxDays = units * 365
  if (daysVacant > maxDays) return null
  if (daysVacantError.value) return null

  // STEP 2: Total potential days
  const totalPotentialDays = units * 365

  // STEP 3: Vacancy Rate
  const vacancyRate = (daysVacant / totalPotentialDays) * 100

  // STEP 4: Days Occupied
  const daysOccupied = totalPotentialDays - daysVacant

  // STEP 5: Income calculations
  const potentialAnnualIncome = rent
  const effectiveAnnualIncome = rent * (1 - vacancyRate / 100)
  const incomeLost = rent * (vacancyRate / 100)
  const dailyRentRate = rent / 365

  // STEP 6: Total cost of vacancy
  const turnoverCostsPer = Number(inp.value.turnover_costs_per_vacancy) || 0
  const numTurnovers = Number(inp.value.number_of_turnovers) || 1
  const turnoverCostsTotal = turnoverCostsPer * numTurnovers

  let vacancyUtilitiesCost = 0
  if (daysVacant > 0) {
    const utilMonthly = Number(inp.value.utilities_during_vacancy_monthly) || 0
    vacancyUtilitiesCost = utilMonthly * (daysVacant / 30.4)
  }

  const totalVacancyCost = incomeLost + turnoverCostsTotal + vacancyUtilitiesCost
  const netEffectiveIncome = potentialAnnualIncome - totalVacancyCost

  // STEP 7 (same as step 6 formula + NET)
  // Already done above

  // STEP 8: Market comparison + R3 FIX #18
  const mktBenchmark = marketBenchmark.value
  const tolerance = Math.max(2.0, mktBenchmark * 0.20)
  const delta = vacancyRate - mktBenchmark

  let basePosition
  if (delta < -tolerance) basePosition = 'BELOW_MARKET'
  else if (delta > tolerance) basePosition = 'ABOVE_MARKET'
  else basePosition = 'AT_MARKET'

  // R3 FIX #18: Absolute floor protection
  const isResidential = inp.value.property_type !== 'Vacation/Short-Term Rental'
  let marketPosition = basePosition
  if (isResidential && vacancyRate > 15 && (basePosition === 'BELOW_MARKET' || basePosition === 'AT_MARKET')) {
    marketPosition = 'ABSOLUTE_HIGH'
  }

  // STEP 9: Equivalent metrics
  const weeksVacant = daysVacant / 7
  const monthsVacantDerived = daysVacant / 30.4

  // STEP 10: Action Thresholds + R3 FIX #17 scale-aware
  let baseActionTier
  if (incomeLost < 10000) baseActionTier = 'MONITOR'
  else if (incomeLost < 25000) baseActionTier = 'INVESTIGATE_PRICING'
  else if (incomeLost < 50000) baseActionTier = 'REPOSITION_REDUCE_RENT'
  else baseActionTier = 'STRUCTURAL_ISSUE'

  const lossRatio = potentialAnnualIncome > 0 ? incomeLost / potentialAnnualIncome : 0
  const lossRatioPct = lossRatio * 100
  let actionTier = baseActionTier
  let escalationTriggered = false

  if (lossRatio > 0.20) {
    escalationTriggered = true
    // Escalate one level
    const escalationMap = {
      'MONITOR': 'INVESTIGATE_PRICING',
      'INVESTIGATE_PRICING': 'REPOSITION_REDUCE_RENT',
      'REPOSITION_REDUCE_RENT': 'STRUCTURAL_ISSUE',
      'STRUCTURAL_ISSUE': 'STRUCTURAL_ISSUE',
    }
    actionTier = escalationMap[baseActionTier]
  }

  // STEP 11: Verdict
  let verdictTier
  if (isSTR.value) {
    if (vacancyRate < 25) verdictTier = 'EXCELLENT'
    else if (vacancyRate < 35) verdictTier = 'GOOD'
    else if (vacancyRate < 50) verdictTier = 'CONCERNING'
    else verdictTier = 'CRITICAL'
  } else {
    if (vacancyRate < 5) verdictTier = 'EXCELLENT'
    else if (vacancyRate < 10) verdictTier = 'GOOD'
    else if (vacancyRate < 15) verdictTier = 'CONCERNING'
    else verdictTier = 'CRITICAL'
  }

  // Low rent flag
  const lowRentFlag = potentialAnnualIncome < 6000 * units

  return {
    daysVacant,
    totalPotentialDays,
    vacancyRate,
    daysOccupied,
    potentialAnnualIncome,
    effectiveAnnualIncome,
    incomeLost,
    dailyRentRate,
    turnoverCostsTotal,
    vacancyUtilitiesCost,
    totalVacancyCost,
    netEffectiveIncome,
    marketBenchmark: mktBenchmark,
    tolerance,
    delta,
    basePosition,
    marketPosition,
    weeksVacant,
    monthsVacantDerived,
    baseActionTier,
    actionTier,
    escalationTriggered,
    lossRatioPct,
    verdictTier,
    lowRentFlag,
  }
})

// ============================================================
// VERDICT CONFIG
// ============================================================
const verdictConfig = computed(() => {
  if (!results.value) return {}
  const tier = results.value.verdictTier
  const configs = {
    EXCELLENT: { color: '#10b981', bgColor: '#f0fdf4', icon: '✅', severityLabel: 'Top-tier performance' },
    GOOD:      { color: '#3b82f6', bgColor: '#eff6ff', icon: '👍', severityLabel: 'Healthy occupancy' },
    CONCERNING:{ color: '#f59e0b', bgColor: '#fffbeb', icon: '⚠️', severityLabel: 'Moderate income leakage' },
    CRITICAL:  { color: '#ef4444', bgColor: '#fef2f2', icon: '❌', severityLabel: 'Severe income loss' },
  }
  return configs[tier] || configs.EXCELLENT
})

const verdictSubMessage = computed(() => {
  if (!results.value) return ''
  const { verdictTier, vacancyRate, marketBenchmark: mb, marketPosition } = results.value
  const delta = Math.abs(results.value.delta)
  if (vacancyRate === 0) return 'Full occupancy — investigate underpricing'
  if (marketPosition === 'ABSOLUTE_HIGH') return `${fmt2(vacancyRate)}% — high in absolute terms (>15%)`
  if (verdictTier === 'EXCELLENT') {
    if (marketPosition === 'BELOW_MARKET') return `${fmt2(delta)}% better than ${fmt1(mb)}% market average`
    return `Slightly better than ${fmt1(mb)}% market average`
  }
  if (verdictTier === 'GOOD') {
    if (marketPosition === 'BELOW_MARKET') return `Better than ${fmt1(mb)}% market average`
    if (marketPosition === 'AT_MARKET') return `In line with ${fmt1(mb)}% market average`
    return `Above ${fmt1(mb)}% market average — minor improvement opportunity`
  }
  if (verdictTier === 'CONCERNING') {
    if (marketPosition === 'BELOW_MARKET') return `Below ${fmt1(mb)}% market average — but still 10%+ vacancy`
    if (marketPosition === 'AT_MARKET') return `Tracking ${fmt1(mb)}% market average — moderate leakage`
    return `Above ${fmt1(mb)}% market average — review pricing and tenant retention`
  }
  // CRITICAL
  if (marketPosition === 'BELOW_MARKET') return `Even with above-market property type, ${fmt2(vacancyRate)}% is critical`
  return `Far above ${fmt1(mb)}% market average — structural action needed`
})

// ============================================================
// LIKELY CAUSES
// ============================================================
const likelyCauses = computed(() => {
  if (!results.value) return []
  const { verdictTier } = results.value
  const units = Number(inp.value.number_of_units) || 1
  const pattern = inp.value.vacancy_pattern || 'Mixed'

  const causes = {
    GOOD: [
      'Normal turnover cycle',
      'Slight pricing or marketing optimization opportunity',
    ],
    CONCERNING: [
      'Pricing above market for property class',
      'Slow leasing cycle (>30 days between tenants)',
      'Weak listing presentation or marketing reach',
      'Tenant screening creating extended vacancies',
    ],
    CRITICAL: [
      'Structural pricing problem (significantly above market)',
      'Location demand decline or oversupply in submarket',
      'Property condition issues (deferred maintenance, dated finishes)',
      'Property class mismatch with tenant pool',
      'Management/leasing process failure',
    ],
  }

  const list = [...(causes[verdictTier] || [])]

  if (units > 1) {
    if (pattern === 'Concentrated') {
      list.push('PATTERN: One unit vacant long-term often signals demand or condition issue specific to that unit. Investigate unit-level differences (floor plan, floor, view, amenities).')
    } else if (pattern === 'Distributed') {
      list.push('PATTERN: Multiple units vacant short-term often signals turnover/leasing process issue, not underlying demand. Investigate leasing cycle, tenant retention, marketing reach.')
    }
  }

  return list
})

// ============================================================
// ACTION CONFIG
// ============================================================
const actionConfig = computed(() => {
  if (!results.value) return {}
  const tier = results.value.actionTier
  const configs = {
    MONITOR: {
      severity: '🟢 LOW',
      title: 'Monitor performance',
      body: 'Income loss is in normal range for typical property operations. Continue current management strategy. Re-evaluate if vacancy increases or tenant turnover spikes.',
      borderColor: '#10b981',
      bgColor: '#f0fdf4',
      textColor: '#059669',
    },
    INVESTIGATE_PRICING: {
      severity: '🟡 MEDIUM',
      title: 'Investigate pricing immediately',
      body: 'Income loss exceeds typical range. Most common cause at this magnitude: rent priced above local market. Action steps: (1) Pull comparable rentals from MLS, Zillow Rent Manager, Rentometer. (2) Compare your rent to median for similar square footage. (3) Consider $50–$200/mo reduction to test market response.',
      borderColor: '#f59e0b',
      bgColor: '#fffbeb',
      textColor: '#b45309',
    },
    REPOSITION_REDUCE_RENT: {
      severity: '🟠 HIGH',
      title: 'Reposition asset or reduce rent',
      body: 'Income loss is significant. Pricing investigation alone likely insufficient. Action steps: (1) Conduct deep market analysis with property manager. (2) Reduce rent by 5–10% to capture market. (3) Evaluate property condition vs comparable rentals. (4) Review marketing channels — listing visibility may be constraining tenant pool.',
      borderColor: '#f97316',
      bgColor: '#fff7ed',
      textColor: '#c2410c',
    },
    STRUCTURAL_ISSUE: {
      severity: '🔴 SEVERE',
      title: 'Structural issue — not just marketing',
      body: 'Income loss at this magnitude indicates structural problem beyond pricing or marketing. Action steps: (1) Engage commercial real estate advisor for property repositioning analysis. (2) Evaluate fundamental options: major renovation, tenant-base shift, or sale. (3) Consider market-level factors: oversupply, demographic shift, employer relocation. (4) Stress-test long-term hold thesis at current vacancy rate — this may be a sell signal.',
      borderColor: '#ef4444',
      bgColor: '#fef2f2',
      textColor: '#dc2626',
    },
  }
  return configs[tier] || configs.MONITOR
})

// ============================================================
// MARKET POSITION CONFIG
// ============================================================
const marketPositionConfig = computed(() => {
  if (!results.value) return {}
  const { marketPosition, delta, marketBenchmark: mb } = results.value
  const absDelta = Math.abs(delta).toFixed(1)
  const configs = {
    BELOW_MARKET: { label: 'Below Market', color: '#10b981', message: `${absDelta}% below the ${fmt1(mb)}% market benchmark — outperforming.` },
    AT_MARKET:    { label: 'At Market',    color: '#3b82f6', message: `Tracking the ${fmt1(mb)}% market benchmark.` },
    ABOVE_MARKET: { label: 'Above Market', color: '#f59e0b', message: `${absDelta}% above the ${fmt1(mb)}% market benchmark — underperforming.` },
    ABSOLUTE_HIGH:{ label: 'High in Absolute Terms', color: '#ef4444', message: `Vacancy >15% in absolute terms — benchmark may reflect oversupplied submarket.` },
  }
  return configs[marketPosition] || configs.AT_MARKET
})

// ============================================================
// VISUALIZATIONS
// ============================================================

// Occupancy bar percentage
const occupancyBarPct = computed(() => {
  if (!results.value) return 0
  return Math.max(0, Math.min(100, 100 - results.value.vacancyRate))
})

// Gauge helpers — semi-arc 180 degrees from left to right
// Arc from angle 180° (left) to 360°/0° (right), radius 90, center 110,110
function angleToXY(pct, maxPct) {
  // Map pct (0..maxPct) to angle 180..0 degrees (left to right semi-circle)
  const fraction = Math.min(pct, maxPct) / maxPct
  const angleDeg = 180 - fraction * 180
  const angleRad = (angleDeg * Math.PI) / 180
  const r = 90
  const cx = 110, cy = 110
  return { x: cx + r * Math.cos(angleRad), y: cy - r * Math.sin(angleRad) }
}

function gaugeZoneArc(fromPct, toPct) {
  // Draw arc segment from fromPct to toPct on the gauge (max 50% for residential, 100% for STR)
  const maxPct = isSTR.value ? 100 : 50
  const from = angleToXY(fromPct, maxPct)
  const to = angleToXY(toPct, maxPct)
  const largeArc = (toPct - fromPct) / maxPct > 0.5 ? 1 : 0
  return `M ${from.x} ${from.y} A 90 90 0 ${largeArc} 0 ${to.x} ${to.y}`
}

const gaugeNeedleX = computed(() => {
  if (!results.value) return 110
  const maxPct = isSTR.value ? 100 : 50
  const rate = Math.min(results.value.vacancyRate, maxPct)
  return angleToXY(rate, maxPct).x
})
const gaugeNeedleY = computed(() => {
  if (!results.value) return 20
  const maxPct = isSTR.value ? 100 : 50
  const rate = Math.min(results.value.vacancyRate, maxPct)
  return angleToXY(rate, maxPct).y
})
const benchmarkMarkerX = computed(() => {
  if (!results.value) return 110
  const maxPct = isSTR.value ? 100 : 50
  const bm = Math.min(results.value.marketBenchmark, maxPct)
  return angleToXY(bm, maxPct).x
})
const benchmarkMarkerY = computed(() => {
  if (!results.value) return 20
  const maxPct = isSTR.value ? 100 : 50
  const bm = Math.min(results.value.marketBenchmark, maxPct)
  return angleToXY(bm, maxPct).y
})

// Calendar
const calendarWeeks = computed(() => {
  if (!results.value) return []
  const totalDays = 365
  const vacantDays = Math.round(Math.min(results.value.daysVacant, totalDays))
  // Create array of 365 booleans
  const dayArr = Array(totalDays).fill(false)
  // Randomly distribute vacant days (seeded-like for stability)
  let placed = 0
  let step = vacantDays > 0 ? Math.floor(totalDays / vacantDays) : 999
  for (let i = 0; i < totalDays && placed < vacantDays; i += Math.max(1, step)) {
    dayArr[i] = true
    placed++
  }
  // Group into 52 weeks × 7 days
  const weeks = []
  for (let w = 0; w < 52; w++) {
    const week = []
    for (let d = 0; d < 7; d++) {
      week.push(dayArr[w * 7 + d] || false)
    }
    weeks.push(week)
  }
  return weeks
})

// ============================================================
// SAVED SCENARIOS
// ============================================================
const verdictColorMap = {
  EXCELLENT: { bg: '#d1fae5', text: '#065f46' },
  GOOD:      { bg: '#dbeafe', text: '#1e40af' },
  CONCERNING:{ bg: '#fef3c7', text: '#92400e' },
  CRITICAL:  { bg: '#fee2e2', text: '#991b1b' },
}

function saveCurrentScenario() {
  if (!results.value) return
  const r = results.value
  const scenario = {
    id: Date.now().toString(),
    name: inp.value.scenario_name || `Property ${savedScenarios.value.length + 1}`,
    created_at: new Date().toISOString(),
    inputs: { ...inp.value },
    outputs: {
      vacancy_rate: r.vacancyRate,
      income_lost: r.incomeLost,
      total_cost: r.totalVacancyCost,
      verdict_tier: r.verdictTier,
      action_tier: r.actionTier,
      market_position: r.marketPosition,
    },
  }
  let scenarios = [...savedScenarios.value, scenario]
  if (scenarios.length > 20) scenarios = scenarios.slice(-20)
  savedScenarios.value = scenarios
  if (process.client) localStorage.setItem(STORAGE_KEY, JSON.stringify(scenarios))
}

function loadScenario(s) {
  inp.value = { ...s.inputs }
}

function deleteScenario(id) {
  savedScenarios.value = savedScenarios.value.filter(s => s.id !== id)
  if (process.client) localStorage.setItem(STORAGE_KEY, JSON.stringify(savedScenarios.value))
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' })
}

// ============================================================
// SHARE URL + PDF
// ============================================================
function copyShareableURL() {
  if (!process.client) return
  const params = new URLSearchParams()
  if (inp.value.annual_potential_rent) params.set('rent', inp.value.annual_potential_rent)
  if (inp.value.days_vacant !== null && inp.value.days_vacant !== '') params.set('days', inp.value.days_vacant)
  if (inp.value.months_vacant !== null && inp.value.months_vacant !== '') params.set('months', inp.value.months_vacant)
  if (inp.value.number_of_units) params.set('units', inp.value.number_of_units)
  if (inp.value.property_type) params.set('type', Object.keys(PROPERTY_TYPE_SLUG_MAP).find(k => PROPERTY_TYPE_SLUG_MAP[k] === inp.value.property_type) || 'single-family')
  if (inp.value.market_vacancy_override) params.set('market', inp.value.market_vacancy_override)
  if (inp.value.vacancy_pattern) params.set('pattern', (inp.value.vacancy_pattern || '').toLowerCase())
  if (inp.value.turnover_costs_per_vacancy) params.set('turnover', inp.value.turnover_costs_per_vacancy)
  if (inp.value.number_of_turnovers) params.set('turns', inp.value.number_of_turnovers)
  if (inp.value.utilities_during_vacancy_monthly) params.set('utilities', inp.value.utilities_during_vacancy_monthly)
  const url = `${window.location.origin}/vacancy-rate-calculator?${params.toString()}`
  navigator.clipboard.writeText(url).then(() => alert('Link copied to clipboard!')).catch(() => {})
}

async function exportPDF() {
  if (!process.client) return
  const r = results.value
  if (!r) { alert('Please enter Annual Potential Rent and Days/Months Vacant first.'); return }
  try {
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF()
    doc.setFontSize(16)
    doc.text('Vacancy Rate Calculator — RealCalc', 14, 20)
    doc.setFontSize(10)
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 28)
    doc.setFontSize(12)
    doc.text(`Vacancy Rate: ${fmt2(r.vacancyRate)}%`, 14, 40)
    doc.text(`Verdict: ${r.verdictTier}`, 14, 50)
    doc.text(`Income Lost to Vacancy: ${fmtDollar(r.incomeLost)}`, 14, 60)
    doc.text(`Total Vacancy Cost: ${fmtDollar(r.totalVacancyCost)}`, 14, 70)
    doc.text(`Effective Annual Income: ${fmtDollar(r.effectiveAnnualIncome)}`, 14, 80)
    doc.text(`Action Tier: ${r.actionTier.replace(/_/g, ' ')}`, 14, 90)
    doc.text(`Market Position: ${r.marketPosition}`, 14, 100)
    if (r.escalationTriggered) doc.text(`Escalated from: ${r.baseActionTier.replace(/_/g, ' ')} (Loss Ratio: ${fmt1(r.lossRatioPct)}%)`, 14, 110)
    doc.setFontSize(9)
    doc.text('Note: Diagnostic tool. Not investment advice. Verify with local data sources.', 14, 130)
    doc.text('arvcalc.com — RealCalc Investment Hub', 14, 138)
    doc.save('vacancy-rate-analysis.pdf')
  } catch (e) {
    console.error('PDF export error', e)
  }
}

// ============================================================
// FAQ
// ============================================================
function toggleFaq(i) {
  openFaqIndex.value = openFaqIndex.value === i ? null : i
}

// ============================================================
// FORMAT HELPERS
// ============================================================
function fmtDollar(val) {
  if (val === null || val === undefined || isNaN(val)) return '$0'
  return '$' + Math.round(val).toLocaleString('en-US')
}
function fmt2(val) {
  if (val === null || val === undefined || isNaN(val)) return '0.00'
  return Number(val).toFixed(2)
}
function fmt1(val) {
  if (val === null || val === undefined || isNaN(val)) return '0.0'
  return Number(val).toFixed(1)
}

// ============================================================
// LIFECYCLE
// ============================================================
onMounted(() => {
  if (process.client) {
    // Load saved scenarios
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) savedScenarios.value = JSON.parse(stored)
    } catch {}

    // Import URL params
    const params = new URLSearchParams(window.location.search)
    if (params.has('type')) {
      const slug = params.get('type').toLowerCase()
      if (PROPERTY_TYPE_SLUG_MAP[slug]) inp.value.property_type = PROPERTY_TYPE_SLUG_MAP[slug]
    }
    if (params.has('pattern')) {
      const slug = params.get('pattern').toLowerCase()
      if (VACANCY_PATTERN_SLUG_MAP[slug]) inp.value.vacancy_pattern = VACANCY_PATTERN_SLUG_MAP[slug]
    }
    for (const [shortKey, fullKey] of Object.entries(URL_PARAM_MAP)) {
      if (params.has(shortKey)) {
        const val = params.get(shortKey)
        const num = parseFloat(val)
        if (!isNaN(num)) inp.value[fullKey] = num
      }
    }
    // Set input mode based on params
    if (params.has('months') && !params.has('days')) vacancyInputMode.value = 'months'
  }
})

// ============================================================
// STATIC CONTENT DATA
// ============================================================
const searchHooks = [
  { q: 'What is a good vacancy rate?', a: 'Under 5% is excellent for residential. 5–10% is healthy. 10%+ indicates moderate to severe income leakage requiring action. Vacation rentals scale differently: under 25% is excellent.' },
  { q: 'How do you calculate vacancy rate?', a: 'Vacancy Rate = (Days Vacant ÷ 365) × 100%. Use trailing 12 months. Calculator handles the math + diagnostic interpretation automatically — enter your annual potential rent and days vacant above.' },
  { q: 'What is a vacancy rate calculator multifamily?', a: 'A diagnostic tool supporting multi-unit input with Vacancy Pattern analysis: Concentrated (1–2 units always vacant = demand issue) vs Distributed (many units short-term = turnover issue). Same percent rate, different problems, different actions.' },
  { q: 'How much rent am I losing to vacancy?', a: 'Income Lost = Annual Potential Rent × Vacancy Rate. Calculator also computes Total Vacancy Cost (Income Lost + Turnover Costs + Utilities During Vacancy) for full impact view.' },
  { q: 'Why is my rental vacant for so long?', a: 'Common Likely Causes: pricing above market, slow leasing cycle (>30 days), weak listing/marketing, restrictive tenant screening, structural pricing problem, location demand decline, property condition issues. Calculator\'s Likely Causes block matches your vacancy tier.' },
  { q: 'Is 0% vacancy good?', a: 'Counter-intuitive answer: usually NO. True 0% in long-term rentals often signals under-pricing — property rented below market rate. Calculator surfaces this with under-pricing insight banner.' },
  { q: 'How do I lower my rental vacancy rate?', a: 'Action depends on Lost Rent magnitude: MONITOR (<$10K loss): maintain strategy · INVESTIGATE_PRICING ($10–25K): pull comps, reduce rent · REPOSITION ($25–50K): deeper analysis, 5–10% rent reduction · STRUCTURAL (≥$50K): commercial advisor, repositioning analysis.' },
  { q: 'What is vacancy rate vs occupancy rate?', a: 'Inverse: Occupancy Rate = 100% − Vacancy Rate. Calculator displays both. Vacancy rate is more common for landlords (focus on income loss); occupancy rate more common for asset managers (focus on performance).' },
]

const howToUseSteps = [
  { title: 'Enter annual potential rent', body: 'For single-unit: monthly market rent × 12. For multi-unit: sum of all units\' annual potential rent. "Potential" means rent if 100% occupied at market rate — NOT your actual lease amount.' },
  { title: 'Enter days vacant in last 12 months', body: 'Total calendar days vacant across all vacancy events in trailing 12 months. Toggle to Months mode if you only know rough timing. Sum across all units in multi-unit properties. If both Days and Months are entered, Days takes precedence (more precise).' },
  { title: 'Configure property type and benchmark', body: 'Select Property Type — sets default market benchmark. Vacation/STR properties use shifted verdict tiers (25/35/50%). Override Market Vacancy with your local rate for accurate comparison. Default benchmarks are illustrative national ranges only.' },
  { title: '(Optional) Enter cost detail and multi-unit context', body: 'Turnover costs per vacancy event ($500–$2,500 typical), number of turnovers, utilities during vacancy (monthly). For multi-unit: enter Number of Units and select Vacancy Pattern (Concentrated vs Distributed). Same 12% vacancy rate = different problem depending on pattern.' },
  { title: 'Read the diagnostic verdict, causes, and action threshold', body: 'Results: Verdict Tier (how am I doing?) → Likely Causes (why?) → Action Threshold by dollar magnitude (what to do?) → Secondary metrics (income lost, effective rent, total cost) → Visualizations (gauge, income bar, calendar).' },
]

const proTips = [
  { title: 'Pro Tip: Use potential rent, not actual', body: 'If renting at $1,500/mo when market is $1,750, your real income loss is $3,000/year more than the calculator shows. Run a separate scenario at market rent to see true opportunity cost.' },
  { title: 'Pro Tip: Re-run quarterly for trend tracking', body: 'Vacancy rate is a TRAILING 12-month metric — one bad event distorts annual rate. Use saved scenarios to track quarter-over-quarter trend direction.' },
  { title: 'Pro Tip: 0% vacancy is a flag, not a victory', body: 'Calculator shows EXCELLENT tier but adds "investigate underpricing" banner. Test by raising $50–$100/mo at next renewal — if tenant accepts, you were underpricing.' },
  { title: 'Pro Tip: Multi-unit pattern matters', body: 'Same 12% vacancy is a different problem: Concentrated = unit-level investigation (floor plan, view, amenities). Distributed = whole-property investigation (leasing process, marketing reach).' },
  { title: 'Pro Tip: Watch for the Escalated banner on small assets', body: 'If Lost Rent exceeds 20% of Potential Rent, calculator escalates Action Tier. $20K loss on $50K rent (40%) is catastrophic. Don\'t dismiss the escalation badge — it\'s the most important small-asset diagnostic signal.' },
  { title: 'Pro Tip: Don\'t trust AT_MARKET when vacancy >15%', body: 'High-baseline types (Office 18%) have wide tolerance bands. Office at 21% mathematically "tracks benchmark" but is bad in absolute terms. Calculator\'s R3 override surfaces this as ABSOLUTE_HIGH.' },
]

const verdictTiersExplanation = [
  { name: 'EXCELLENT', icon: '✅', color: '#10b981', bg: '#f0fdf4', range: 'Vacancy Rate < 5% (residential) or < 25% (STR)', severity: 'Top-tier performance' },
  { name: 'GOOD', icon: '👍', color: '#3b82f6', bg: '#eff6ff', range: '5–10% (residential) or 25–35% (STR)', severity: 'Healthy operating range' },
  { name: 'CONCERNING', icon: '⚠️', color: '#f59e0b', bg: '#fffbeb', range: '10–15% (residential) or 35–50% (STR)', severity: 'Moderate income leakage' },
  { name: 'CRITICAL', icon: '❌', color: '#ef4444', bg: '#fef2f2', range: '≥ 15% (residential) or ≥ 50% (STR)', severity: 'Severe income loss' },
]

const strategies = [
  { type: 'First-Time Landlord', critical: 'Verdict tier; Likely Causes interpretation; benchmark calibration disclaimer', misleading: 'Treating CONCERNING tier as automatic failure — may be normal in local market', prioritize: 'Calibrate market benchmark with local data BEFORE acting on verdict; track trend over 4 quarters → Use Compare Real Estate Deals' },
  { type: 'Portfolio Investor', critical: 'Action Thresholds across portfolio; aggregate dollar impact', misleading: 'Comparing percent rates across properties without dollar context (4% on $1M rent ≠ 4% on $20K rent)', prioritize: 'Sort properties by Action Tier ($ magnitude), not by rate % → Use Real Estate ROI Calculator for portfolio-wide IRR' },
  { type: 'Multifamily Owner', critical: 'Pattern interpretation (Concentrated vs Distributed); unit-level vs property-level diagnosis', misleading: 'Treating aggregate vacancy as uniform property issue', prioritize: 'Always select VACANCY_PATTERN; investigate unit-level when Concentrated → Use Property Cash Flow Calculator' },
  { type: 'Vacation Rental Operator', critical: 'STR-shifted tiers (25/35/50% thresholds); seasonal interpretation', misleading: 'Treating 30% annual vacancy as CRITICAL (it\'s GOOD under STR-shifted tiers)', prioritize: 'Run separate analyses for peak/shoulder/trough seasons → Use Rental Property Calculator with STR vacancy assumption' },
  { type: 'Property Manager', critical: 'Quarterly trend tracking with saved scenarios', misleading: 'Static annual reports without trend context', prioritize: 'Save quarterly scenarios; report trend direction alongside absolute rates → Use Compare Real Estate Deals to compare across portfolio' },
]

const applications = [
  { title: 'Quarterly portfolio review', body: 'Track vacancy trend across portfolio with saved scenarios. Identify properties trending toward CONCERNING/CRITICAL before they cross threshold. → Use <a href="/compare-real-estate-deals" class="text-yellow-700 font-semibold hover:underline">Compare Real Estate Deals</a> to compare portfolio properties.' },
  { title: 'Pre-purchase due diligence', body: 'Calculate seller\'s reported vacancy history against market benchmark for property class. CRITICAL-tier vacancy with no clear cause = walk-away signal. → Use <a href="/real-estate-roi-calculator" class="text-yellow-700 font-semibold hover:underline">Real Estate ROI Calculator</a> with calibrated vacancy as input.' },
  { title: 'Multi-unit unit-level diagnosis', body: 'Run aggregate analysis for property + identify pattern. Then drill into specific units showing vacancy concentration. → Use <a href="/compare-real-estate-deals" class="text-yellow-700 font-semibold hover:underline">Compare Real Estate Deals</a> to compare units.' },
  { title: 'Pricing optimization decision support', body: 'Run scenarios at different rent levels — current vs 5% reduction vs 10% reduction. Compare expected vacancy reduction against rent loss. → Use <a href="/property-cash-flow-calculator" class="text-yellow-700 font-semibold hover:underline">Property Cash Flow Calculator</a> to model net impact.' },
  { title: '0% vacancy under-pricing investigation', body: 'Property at full occupancy for 12+ months suggests testing higher rent. Run scenario at +5%/+10% rent levels — if expected vacancy stays under 5%, you\'ve identified pricing upside.' },
  { title: 'Owner reporting / LP communication', body: 'Property managers and syndicators report vacancy quarterly. Use calculator\'s diagnostic depth (Verdict + Causes + Action) for richer reports than rate alone. → Use <a href="/real-estate-roi-calculator" class="text-yellow-700 font-semibold hover:underline">Real Estate ROI Calculator</a> for full operations view.' },
]

const limitations = [
  { title: 'Default benchmarks are illustrative, not local data', body: 'Default vacancy benchmarks per property type are general national ranges. Actual local rates vary dramatically by metro, submarket, property class, season, and economic conditions. Override Market Vacancy field with local data.' },
  { title: 'Trailing 12-month metric — distortion risk', body: 'Vacancy rate reflects past 12 months, not current state. One long vacancy event distorts annual rate. A 60-day gap in Q1 produces 16% annual rate even if subsequent 9 months are fully occupied. Re-run quarterly for trend tracking.' },
  { title: 'Likely Causes are diagnostic suggestions, not verified', body: 'Likely Causes block lists most-common-cause-by-tier. Your specific property may have different actual causes. Verified diagnosis requires local market data, property condition review, and (often) property manager input.' },
  { title: 'Multi-unit pattern requires user input', body: 'Pattern interpretation depends on user-selected VACANCY_PATTERN dropdown. Calculator cannot automatically detect pattern from aggregate days-vacant input. Accuracy depends on user\'s pattern observation.' },
  { title: 'Single-property snapshot, not portfolio aggregation', body: 'Calculator analyzes one property/scenario at a time. Portfolio-level vacancy aggregation requires multiple scenarios + Compare Real Estate Deals page.' },
  { title: 'Vacation rental annual aggregation masks seasonality', body: 'STR-shifted tiers treat annual rate. Vacation rentals with extreme seasonality average to ~25–30% annually. Calculator doesn\'t break out seasonal patterns.' },
  { title: 'Calendar visualization is illustrative only', body: 'Vacancy Days Calendar shows random distribution of vacant days for visualization purposes. It does NOT represent actual vacancy dates.' },
  { title: 'Not a substitute for professional advice', body: 'Educational diagnostic tool. Action Threshold dollar magnitudes (especially STRUCTURAL_ISSUE ≥$50K) trigger recommendations for property manager / commercial real estate advisor engagement.' },
]

const commonMistakes = [
  { title: 'Using actual lease rent instead of market potential', body: 'Annual Potential Rent input should be MARKET rent. Run separate scenario at market potential to see real opportunity cost.' },
  { title: 'Treating 0% vacancy as victory', body: 'True 0% in long-term rental over 12 months often signals under-pricing. Test by raising rent $50–$100/mo at next renewal.' },
  { title: 'Comparing percent rates across very different rent levels', body: '4% vacancy on $1M rent ($40K loss) is structurally severe. 4% vacancy on $20K rent ($800 loss) is normal monitoring. Same percent rate, very different action implications.' },
  { title: 'Ignoring multi-unit pattern', body: '10% aggregate vacancy with 1 unit always vacant is different from 10 units vacant one-month-each. Always select VACANCY_PATTERN for multi-unit properties.' },
  { title: 'Using default benchmarks as authoritative', body: 'Calculator defaults are illustrative national ranges, NOT local market rates. Override with local data for accurate calibration.' },
  { title: 'Acting on annual rate without time-dimension context', body: 'One bad event distorts annual rate. Re-run quarterly to distinguish event-driven vacancy from pattern vacancy.' },
]

const faqItems = [
  { q: 'What is a good vacancy rate for rental property?', a: 'For residential rentals, under 5% is excellent (top-tier performance). 5–10% is healthy/normal. 10–15% is concerning (moderate income leakage). 15%+ is critical (severe income loss requiring investigation). For vacation rentals, scale shifts: under 25% is excellent, 25–35% good, 35–50% concerning, 50%+ critical. Note: "good" depends on your local market — 7% may be excellent in oversupplied markets but concerning in high-demand metros.' },
  { q: 'How is vacancy rate calculated?', a: 'Vacancy Rate = (Days Vacant ÷ 365) × 100%. Use trailing 12 months for annual rate. For multi-unit: sum all unit-days vacant across all units in 12 months, then divide by (Number of Units × 365). Always use 365-day denominator.' },
  { q: 'What is an acceptable vacancy rate?', a: '"Acceptable" depends on context. National illustrative ranges: single-family 5–9%, small multifamily 7–10%, apartment buildings 8–12%, vacation rentals 25–45%. High-demand markets stabilized 3–5%; balanced 7–9%; oversupplied 15%+. The calculator\'s 4-tier verdict provides framework, but your local market determines whether action is needed.' },
  { q: 'How much rent am I losing to vacancy?', a: 'Income Lost to Vacancy = Annual Potential Rent × Vacancy Rate. Example: $24,000 annual potential rent × 12% vacancy rate = $2,880 income lost. Calculator also computes Total Vacancy Cost (income lost + turnover costs + utilities during vacancy) for full impact view. Action threshold uses Lost Rent dollar magnitude.' },
  { q: 'Why is my rental vacant for so long?', a: 'Calculator\'s Likely Causes block per tier identifies most common reasons. CONCERNING tier (10–15%): pricing above market, slow leasing cycle, weak listing presentation, tenant screening too restrictive. CRITICAL tier (15%+): structural pricing problem, location demand decline, property condition issues, property class mismatch, management/leasing process failure.' },
  { q: 'How do I reduce my rental vacancy?', a: 'Action depends on Lost Rent dollar magnitude (Action Tier from calculator): MONITOR (<$10K): maintain current strategy. INVESTIGATE_PRICING ($10–25K): pull comparable rentals from MLS/Zillow/Rentometer, test $50–200/mo rent reduction. REPOSITION ($25–50K): deeper market analysis with property manager, 5–10% rent reduction. STRUCTURAL_ISSUE (≥$50K): commercial real estate advisor for repositioning analysis.' },
  { q: 'Is 0% vacancy good?', a: 'Counter-intuitively, often NO. True 0% vacancy in long-term rentals (12+ months) typically signals UNDER-PRICING — property rented below market rate. Calculator displays EXCELLENT tier but adds "investigate underpricing" banner. Investigation steps: pull comparable rentals — if your rent is 5%+ below median for similar property, you\'re trading occupancy for income. Test by raising rent at renewal.' },
  { q: 'What\'s the difference between vacancy rate and occupancy rate?', a: 'They\'re inverse: Occupancy Rate = 100% − Vacancy Rate. Calculator displays both. Industry usage varies: vacancy rate is more common in landlord/owner contexts (focus on income loss); occupancy rate is more common in asset management contexts (focus on performance).' },
  { q: 'How do I calculate vacancy rate for a multifamily property?', a: 'For multi-unit: sum unit-days vacant across all units in 12 months. Example: 10-unit property with 1 unit vacant 12 months + 2 units vacant 1 month each = 365 + 60 = 425 unit-days. Divide by total potential unit-days: 10 × 365 = 3,650. Vacancy Rate = 425 ÷ 3,650 = 11.6%. Calculator handles this via NUMBER_OF_UNITS input. Critically, also select VACANCY_PATTERN.' },
  { q: 'Should I rely on the default benchmark?', a: 'No — defaults are illustrative starting points. In high-demand markets stabilized vacancy is 3–5%; in oversupplied markets 15%+. For accurate calibration, override Market Vacancy field with data from local property manager, MLS, Rentometer, or Zillow Rental Manager.' },
  { q: 'What is a vacancy pattern?', a: 'For multi-unit properties, vacancy pattern describes how vacancy is distributed across units. Three options: CONCENTRATED (1–2 units always vacant — demand or condition issue specific to those units), DISTRIBUTED (many units vacant short-term each — turnover/leasing issue), MIXED (both patterns present).' },
  { q: 'Can I save scenarios to compare properties?', a: 'Yes. Saved Scenarios widget (below the calculator) lets you save up to 20 scenarios for free. Compare via <a href="/compare-real-estate-deals" class="text-yellow-700 font-semibold hover:underline">Compare Real Estate Deals</a> page. → Use Compare Real Estate Deals for portfolio-wide vacancy comparison.' },
  { q: 'How often should I check my rental vacancy rate?', a: 'Quarterly is the practical standard. Annual is too infrequent — you miss trends developing. Monthly is too granular. Quarterly cadence captures trend direction (Q1→Q2→Q3) which is more actionable than absolute snapshot.' },
  { q: 'What happens if I miss the trailing 12-month rule?', a: 'For partial-year analysis (less than 12 months of data), calculator displays a trailing-partial-year caution. For new property purchases or major rehab properties, defer formal vacancy analysis until 12 full months of operation post-stabilization.' },
  { q: 'Does the calculator work for vacation rentals?', a: 'Yes, with property type set to "Vacation/Short-Term Rental." Calculator applies STR-shifted tiers: EXCELLENT < 25%, GOOD 25–35%, CONCERNING 35–50%, CRITICAL ≥50%. Default benchmark shifts to 35%. Annual aggregate masks seasonality — for peak/shoulder/trough analysis, run separate scenarios per period.' },
  { q: 'When should I consult a property manager or advisor?', a: 'Calculator\'s Action Threshold (dollar-based) provides framework: Under $10,000 lost rent (MONITOR): self-serve sufficient. $10,000–$25,000 (INVESTIGATE_PRICING): self-serve with comp data. $25,000–$50,000 (REPOSITION): engage property manager. $50,000+ (STRUCTURAL): engage commercial real estate advisor for repositioning analysis.' },
  { q: 'What is the average vacancy rate in the USA?', a: 'National average residential vacancy rate ranges 7–9% based on Census Bureau Housing Vacancy Survey patterns — but "average" varies dramatically by metro: Northeast urban core (NYC, Boston): 3–5%. West Coast major metros: 4–6%. Midwest balanced metros: 7–9%. Southwest post-construction-boom: 9–12%. Sun Belt oversupplied: 12–18%. Vacation destination markets: 25–45% annual aggregate. For your specific market, override the calculator\'s default benchmark with local data — national averages are too aggregated for individual property analysis.' },
  { q: 'How do I lower vacancy rate on rental property?', a: 'Lowering vacancy has 4 intervention levels: (1) PRICING ADJUSTMENT (most common fix): Pull 5–10 comparable rentals. If your rent is 5%+ above median, reduce by $50–$200/month. Most CONCERNING-tier vacancy responds to pricing alone. (2) MARKETING IMPROVEMENT: Verify listing on Zillow, Trulia, Apartments.com, Facebook Marketplace. Update photos professionally if dated. (3) TENANT RETENTION: Renewal incentive ($50–100 off renewal rent). (4) CONDITION/REPOSITIONING: For STRUCTURAL_ISSUE tier, engage commercial real estate advisor.' },
  { q: 'Vacancy rate formula multifamily example?', a: 'Multifamily vacancy rate uses unit-days vacant denominator: Vacancy Rate = (Total Unit-Days Vacant ÷ (Number of Units × 365)) × 100%. Example: 10-unit apartment: 1 unit vacant entire year (365 unit-days) + 2 units vacant 30 days each (60 unit-days) + 1 unit vacant 15 days (15 unit-days) = 440 total. Divided by 3,650 total potential unit-days = 12.05% vacancy rate. Calculator handles this automatically. Equally important: select VACANCY_PATTERN.' },
  { q: 'Vacancy rate vs occupancy rate Excel formula?', a: 'Both metrics: Vacancy Rate (Excel): =DaysVacant/365*100. Occupancy Rate (Excel): =100-(DaysVacant/365*100). For multi-unit: =SUM(UnitDaysVacant)/(NumUnits*365)*100. Income Lost (Excel): =AnnualPotentialRent*VacancyRate/100. Calculator displays both Vacancy Rate and Occupancy Rate — same data, two framings.' },
  { q: 'What does "ABSOLUTE_HIGH" market position mean?', a: 'Round 3 calculator override. Triggers when vacancy rate >15% AND property is residential (Office, Commercial Retail, Multifamily, Apartment, SFR — NOT vacation rental). Reason: property-type benchmarks at high baseline (Office 18%) can mask absolute-terms problems. 21% vacancy on Office "tracks 18% benchmark" mathematically (within tolerance) but is bad in absolute terms. Without the override, calculator would show AT_MARKET and you\'d read "tracking benchmark = fine" — a false positive. The R3 override forces ABSOLUTE_HIGH classification, ensuring CRITICAL verdict + market position + Action Tier all align as coherent warning. STR exempt — high baseline normal there.' },
  { q: 'Why does calculator escalate Action Tier on small properties?', a: 'Round 3 SCALE-AWARE escalation. Triggers when Lost Rent exceeds 20% of Annual Potential Rent. Reason: same dollar loss carries very different real-world severity by asset scale: $20K loss on $50K rent (40%) = catastrophic for small-asset investor → escalate from INVESTIGATE_PRICING to REPOSITION. $20K loss on $200K rent (10%) = significant but manageable → no escalation. $20K loss on $1M rent (2%) = normal operational variance → no escalation. Without escalation, calculator\'s absolute-dollar Action Threshold would systematically under-call severity for small assets. Watch for "Escalated from X" banner — it\'s the most important small-asset diagnostic signal.' },
]

const relatedCalcs = [
  { name: 'Property Cash Flow Calculator', desc: 'Vacancy is INPUT here for full Year 1 cash flow modeling', href: '/property-cash-flow-calculator' },
  { name: 'Real Estate ROI Calculator', desc: 'Pre-purchase analysis with calibrated vacancy assumption', href: '/real-estate-roi-calculator' },
  { name: 'Rental Property Calculator', desc: 'Year 1 operations including vacancy', href: '/rental-property-calculator' },
  { name: 'Cap Rate Calculator', desc: 'Effective Income (this tool\'s output) feeds Cap Rate calculation', href: '/cap-rate-calculator' },
  { name: 'NOI Calculator', desc: 'NOI uses effective income (vacancy-adjusted)', href: '/noi-calculator' },
  { name: 'Compare Real Estate Deals', desc: 'Multi-property vacancy comparison', href: '/compare-real-estate-deals' },
  { name: 'Cash-on-Cash Calculator', desc: 'Year 1 cash yield with vacancy impact', href: '/cash-on-cash-calculator' },
  { name: 'DSCR Calculator', desc: 'Replacement property lender underwriting', href: '/dscr-calculator' },
  { name: '1031 Exchange Calculator', desc: 'Tax-deferred exit if exploring sale after STRUCTURAL verdict', href: '/1031-exchange-calculator' },
]
</script>
