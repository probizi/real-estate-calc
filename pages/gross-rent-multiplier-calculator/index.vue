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
            <li class="text-gray-700 font-semibold">GRM Calculator</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- PAGE TITLE + ON THIS PAGE NAV -->
    <div class="bg-white border-b border-gray-100">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6 py-6">
        <div class="mb-4">
          <h1 class="text-3xl sm:text-4xl font-extrabold leading-tight" style="color: #1e3a5f;">
            Gross Rent Multiplier (GRM) Calculator
          </h1>
          <p class="text-gray-500 mt-2 text-base">Fast first-pass deal screening — compare property price to gross rental income and get a deal verdict in seconds.</p>
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
            <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
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
              <li><a href="#strategy" class="text-sm font-medium text-gray-600 hover:text-yellow-700 transition">Strategy</a></li>
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

    <!-- CALCULATOR SECTION -->
    <main id="calculator" class="max-w-[1100px] mx-auto px-4 pt-8 pb-10">
      <!-- Акцентная рамка калькулятора -->
      <div class="rounded-3xl p-[3px]" style="background: linear-gradient(135deg, #1e3a5f 0%, #f59e0b 50%, #1e3a5f 100%);">
      <div class="bg-white rounded-[21px] shadow-xl shadow-slate-200/60 p-6" style="overflow: clip;">
      <div class="lg:grid lg:grid-cols-[3fr_2fr] lg:items-stretch gap-6">

        <!-- LEFT: INPUTS -->
        <div class="space-y-5 min-w-0">

          <!-- CORE INPUTS -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 class="text-lg font-bold mb-4" style="color: #1e3a5f;">Core Inputs</h2>

            <!-- Property Price -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Property Price <span class="text-red-500">*</span></label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input v-model.number="inp.price" type="number" min="1" step="1000"
                  placeholder="Enter purchase price"
                  class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
              <p class="text-xs text-gray-400 mt-1">Total acquisition price, including closing costs if applicable.</p>
            </div>

            <!-- Annual Gross Rent -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Annual Gross Rent <span class="text-red-500">*</span></label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input v-model.number="inp.rent" type="number" min="1" step="100"
                  placeholder="Enter total annual rent before expenses"
                  class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
              <p class="text-xs text-gray-400 mt-1">Scheduled rental income only — before vacancy, expenses, or taxes. Do not include parking, laundry, or other non-rent income here.</p>
            </div>

            <!-- Other Income -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Other Annual Income <span class="text-gray-400 font-normal">(optional)</span></label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">$</span>
                <input v-model.number="inp.otherIncome" type="number" min="0" step="100"
                  placeholder="Optional: parking, laundry, storage, or other income"
                  class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              </div>
              <p class="text-xs text-gray-400 mt-1">Not included in Primary GRM. Used for Income-Adjusted GRM and Effective GRM.</p>
            </div>

            <!-- Property Type + Market Type -->
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Property Type</label>
                <select v-model="inp.propertyType"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium bg-white">
                  <option value="Single-family">Single-family</option>
                  <option value="Multifamily">Multifamily</option>
                  <option value="Vacation rental">Vacation rental</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Market Type</label>
                <select v-model="inp.marketType"
                  class="w-full px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium bg-white">
                  <option value="Balanced market">Balanced market</option>
                  <option value="Low-cost market">Low-cost market</option>
                  <option value="High-demand market">High-demand market</option>
                </select>
                <p class="text-xs text-gray-400 mt-1">Shifts verdict thresholds.</p>
              </div>
            </div>
          </div>

          <!-- OPTIONAL INPUTS -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 class="text-lg font-bold mb-4" style="color: #1e3a5f;">Optional Adjustments</h2>

            <!-- Vacancy Rate -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Vacancy Rate</label>
              <div class="relative">
                <input v-model.number="inp.vacancyRate" type="number" min="0" max="99.99" step="0.5"
                  placeholder="Optional: expected vacancy rate"
                  class="w-full pl-4 pr-8 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">%</span>
              </div>
              <p class="text-xs text-gray-400 mt-1">When entered, shows Effective GRM after vacancy adjustment.</p>
            </div>

            <!-- Vacancy Affects Other Income toggle -->
            <div v-if="hasVacancy && hasOtherIncome" class="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200">
              <div class="flex items-start gap-3">
                <label class="relative inline-flex items-center cursor-pointer mt-0.5">
                  <input type="checkbox" v-model="inp.vacancyAffectsOtherIncome" class="sr-only peer">
                  <div class="w-9 h-5 bg-gray-300 peer-focus:ring-2 peer-focus:ring-yellow-400/40 rounded-full peer peer-checked:bg-yellow-400 transition-colors"></div>
                  <div class="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4"></div>
                </label>
                <div>
                  <p class="text-sm font-semibold text-amber-900">Vacancy affects other income</p>
                  <p class="text-xs text-amber-700 mt-0.5">Turn on if parking, laundry, storage, or other income falls when units are vacant.</p>
                </div>
              </div>
            </div>

            <!-- Expense Ratio -->
            <div class="mb-4">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Operating Expense Ratio</label>
              <div class="relative">
                <input v-model.number="inp.expenseRatio" type="number" min="0" max="99.99" step="0.5"
                  placeholder="Optional: operating expense ratio"
                  class="w-full pl-4 pr-8 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
                <span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">%</span>
              </div>
              <p class="text-xs text-gray-400 mt-1">When entered, shows NOI Proxy Yield as a diagnostic supplement.</p>
            </div>

            <!-- Target GRM -->
            <div class="mb-0">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Target GRM</label>
              <input v-model.number="inp.targetGrm" type="number" min="0.1" step="0.5"
                placeholder="Optional: target GRM for rent requirement"
                class="w-full px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
              <p class="text-xs text-gray-400 mt-1">Shows how much annual rent is needed to hit your target GRM. Default: 8.</p>
            </div>
          </div>

          <!-- SCENARIO NAME -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 class="text-lg font-bold mb-4" style="color: #1e3a5f;">Save Scenario</h2>
            <div class="mb-3">
              <label class="block text-sm font-semibold text-gray-700 mb-1">Scenario Name</label>
              <input v-model="inp.scenarioName" type="text"
                placeholder="Optional: name this property"
                class="w-full px-4 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none transition text-gray-900 font-medium" />
            </div>
            <button @click="saveScenario"
              :disabled="!canCalculate"
              class="w-full py-2.5 rounded-xl font-bold text-sm transition"
              :class="canCalculate ? 'text-white hover:opacity-90' : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
              :style="canCalculate ? 'background: #1e3a5f;' : ''">
              Save This Scenario
            </button>
            <p v-if="scenarioSavedMsg" class="text-xs text-green-600 font-semibold mt-2 text-center">{{ scenarioSavedMsg }}</p>
          </div>

          <!-- VALIDATION ERRORS -->
          <div v-if="errors.length" class="bg-red-50 border border-red-200 rounded-2xl p-4">
            <p class="text-sm font-bold text-red-700 mb-2">Please fix the following:</p>
            <ul class="space-y-1">
              <li v-for="err in errors" :key="err" class="text-sm text-red-600 flex items-start gap-2">
                <span class="mt-0.5">•</span><span>{{ err }}</span>
              </li>
            </ul>
          </div>

        </div>

        <!-- RIGHT: RESULTS -->
        <div class="min-w-0 lg:relative lg:overflow-hidden">
        <div class="bg-gray-50 scrollbar-thin lg:absolute lg:inset-0 lg:overflow-y-auto">
        <div class="space-y-4 p-4 lg:p-5">

          <!-- MAIN RESULT CARD -->
          <div v-if="canCalculate && !errors.length" class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

            <!-- Verdict Header -->
            <div class="p-5 text-center" :style="{ background: verdictColor }">
              <p class="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">GRM Verdict</p>
              <div class="text-5xl font-extrabold text-white mb-1">{{ result.grm.toFixed(2) }}</div>
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-2">
                {{ verdictLabel }}
              </div>
              <p class="text-white/90 text-sm font-medium">{{ verdictSubtitle }}</p>
            </div>

            <!-- Market Adjustment Badge -->
            <div v-if="inp.marketType !== 'Balanced market'" class="px-5 py-3 border-b border-gray-100" :class="inp.marketType === 'High-demand market' ? 'bg-blue-50' : 'bg-orange-50'">
              <p class="text-xs font-bold" :class="inp.marketType === 'High-demand market' ? 'text-blue-800' : 'text-orange-800'">
                <template v-if="inp.marketType === 'High-demand market'">
                  High-demand market adjustment applied — higher GRM may be normal in supply-constrained markets.
                </template>
                <template v-else>
                  Low-cost market adjustment applied — lower GRM is expected where income yield should be stronger.
                </template>
              </p>
              <p class="text-xs mt-1" :class="inp.marketType === 'High-demand market' ? 'text-blue-600' : 'text-orange-600'">
                Same GRM can produce different verdicts in different market types.
              </p>
            </div>

            <!-- GRM > 50 Warning -->
            <div v-if="result.grm > 50" class="px-5 py-3 bg-red-50 border-b border-red-100">
              <p class="text-xs font-bold text-red-700">GRM above 50 usually indicates unrealistic inputs or a property that does not function as an income investment.</p>
            </div>

            <!-- Primary Metrics -->
            <div class="p-5 space-y-3">

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Primary GRM</span>
                <span class="text-lg font-extrabold" style="color: #1e3a5f;">{{ result.grm.toFixed(2) }}</span>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Years to Recoup</span>
                <span class="text-base font-bold text-gray-800">{{ result.grm.toFixed(1) }} yrs</span>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <div>
                  <span class="text-sm text-gray-600 font-medium">Gross Income Yield</span>
                  <p class="text-xs text-gray-400">Not Cap Rate. Ignores expenses.</p>
                </div>
                <span class="text-base font-bold text-gray-800">{{ result.grossIncomeYield.toFixed(2) }}%</span>
              </div>

              <div class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Annual Gross Rent</span>
                <span class="text-base font-bold text-gray-800">{{ formatCurrency(inp.rent) }}</span>
              </div>

              <!-- Total Gross Income (if other income) -->
              <div v-if="hasOtherIncome" class="flex items-center justify-between py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600 font-medium">Total Gross Income</span>
                <span class="text-base font-bold text-gray-800">{{ formatCurrency(result.totalGrossIncome) }}</span>
              </div>

              <!-- Income-Adjusted GRM -->
              <div v-if="hasOtherIncome" class="py-2 border-b border-gray-100">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 font-medium">Income-Adjusted GRM</span>
                  <span class="text-base font-bold text-gray-800">{{ result.incomeAdjustedGrm.toFixed(2) }}</span>
                </div>
                <p class="text-xs text-gray-400 mt-0.5">Includes other recurring income. Primary GRM remains based on rent only.</p>
              </div>

              <!-- Effective GRM (if vacancy) -->
              <div v-if="hasVacancy" class="py-2 border-b border-gray-100">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 font-medium">Effective GRM (after vacancy)</span>
                  <span class="text-base font-bold" :class="effectiveGrmCrossedTier ? 'text-orange-600' : 'text-gray-800'">
                    {{ result.effectiveGrm !== null ? result.effectiveGrm.toFixed(2) : 'N/A' }}
                  </span>
                </div>
                <div v-if="result.effectiveGrm !== null">
                  <p class="text-xs text-gray-400 mt-0.5">Effective GRM adjusts for vacancy and optional other income. It is a diagnostic supplement, not the primary GRM.</p>
                  <p class="text-xs font-semibold text-gray-600 mt-1">
                    Vacancy increases GRM from {{ result.grm.toFixed(2) }} to {{ result.effectiveGrm.toFixed(2) }}
                    ({{ result.vacancyGrmDelta >= 0 ? '+' : '' }}{{ result.vacancyGrmDelta.toFixed(2) }}).
                  </p>
                  <div v-if="effectiveGrmCrossedTier" class="mt-1 p-2 rounded-lg bg-orange-50 border border-orange-200">
                    <p class="text-xs font-bold text-orange-700">Vacancy-adjusted GRM moves this deal into a weaker screening band.</p>
                  </div>
                </div>
                <div v-else class="mt-1 p-2 rounded-lg bg-red-50 border border-red-200">
                  <p class="text-xs font-bold text-red-700">Effective gross income must be greater than zero.</p>
                </div>
              </div>

              <!-- NOI Proxy -->
              <div v-if="hasExpenseRatio && result.effectiveGrossIncome > 0" class="py-2 border-b border-gray-100">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 font-medium">NOI Proxy Yield</span>
                  <span class="text-base font-bold text-gray-800">{{ result.noiProxyYield.toFixed(2) }}%</span>
                </div>
                <p class="text-xs text-gray-400 mt-0.5">NOI Proxy is a rough estimate based on user-entered expense ratio. Use the <NuxtLink to="/noi-calculator" class="underline hover:text-gray-600">NOI Calculator</NuxtLink> or <NuxtLink to="/cap-rate-calculator" class="underline hover:text-gray-600">Cap Rate Calculator</NuxtLink> for accurate yield.</p>
              </div>

              <!-- Required Rent -->
              <div class="py-2">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600 font-medium">Required Rent for GRM {{ effectiveTargetGrm }}</span>
                  <span class="text-base font-bold text-gray-800">{{ formatCurrency(result.requiredRent) }}/yr</span>
                </div>
                <p class="text-xs text-gray-400 mt-0.5">To reach GRM {{ effectiveTargetGrm }}, this property needs approximately {{ formatCurrency(result.requiredRent) }} in annual rent.</p>
                <div v-if="hasOtherIncome" class="mt-1">
                  <p class="text-xs text-gray-500">If other income is included in your broader screening, rent-only requirement after other income is approximately {{ formatCurrency(result.requiredRentAfterOtherIncome) }}/year.</p>
                  <p class="text-xs text-gray-400 mt-0.5">Primary GRM target uses rent only. The after-other-income view is supplemental.</p>
                </div>
              </div>

            </div>

            <!-- Years to Recoup Disclaimer -->
            <div class="px-5 pb-4">
              <div class="p-3 rounded-xl bg-gray-50 border border-gray-200">
                <p class="text-xs text-gray-500">
                  <strong>Years to Recoup:</strong> This assumes 100% of gross rent goes toward recovering the purchase price, before vacancy, expenses, financing, taxes, repairs, and management fees.
                </p>
              </div>
            </div>

          </div>

          <!-- EMPTY STATE -->
          <div v-else-if="!canCalculate" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
            <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style="background: #f0f4f8;">
              <svg class="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <p class="text-gray-500 font-medium text-sm">Enter a purchase price and annual gross rent to calculate GRM.</p>
          </div>

          <!-- REAL IMPACT BLOCK -->
          <div v-if="canCalculate && !errors.length" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-3" style="color: #1e3a5f;">Real Impact</h3>
            <div class="p-4 rounded-xl border" :class="verdictBgClass">
              <p class="text-sm font-bold mb-2" :class="verdictTextClass">{{ verdictLabel }}</p>
              <p class="text-sm text-gray-700 whitespace-pre-line">{{ realImpactText }}</p>
            </div>
          </div>

          <!-- SCREENING DECISION -->
          <div v-if="canCalculate && !errors.length" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-3" style="color: #1e3a5f;">Screening Decision</h3>
            <div class="p-4 rounded-xl border" :class="verdictBgClass">
              <p class="text-sm text-gray-700">{{ screeningDecisionText }}</p>
            </div>
          </div>

          <!-- LIKELY CAUSES -->
          <div v-if="canCalculate && !errors.length" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-1" style="color: #1e3a5f;">Likely Causes</h3>
            <p class="text-xs text-gray-400 mb-3">These are common patterns, not a diagnosis. Verify with rent comps, expense data, inspection, and local market context.</p>
            <ul class="space-y-1.5">
              <li v-for="cause in likelyCauses" :key="cause" class="flex items-start gap-2 text-sm text-gray-700">
                <span class="mt-0.5 text-gray-400">•</span><span>{{ cause }}</span>
              </li>
            </ul>
          </div>

          <!-- SHARE + PDF EXPORT -->
          <div v-if="canCalculate && !errors.length" class="flex gap-3">
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

          <!-- NEXT CALCULATORS -->
          <div v-if="canCalculate && !errors.length" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-sm font-bold mb-3" style="color: #1e3a5f;">Go Deeper</h3>
            <p class="text-xs text-gray-500 mb-3">GRM is a first-pass screen. Validate with these tools:</p>
            <div class="space-y-2">
              <NuxtLink to="/cap-rate-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">Cap Rate Calculator</p>
                  <p class="text-xs text-gray-500">Include expenses and estimate true yield</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/noi-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">NOI Calculator</p>
                  <p class="text-xs text-gray-500">Calculate income after operating expenses</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/rental-property-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">Property Cash Flow Calculator</p>
                  <p class="text-xs text-gray-500">Test monthly cash flow after debt and expenses</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/arv-calculator" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">Real Estate ROI Calculator</p>
                  <p class="text-xs text-gray-500">Multi-year return, appreciation, equity growth</p>
                </div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </NuxtLink>
              <NuxtLink to="/compare-deals" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <div>
                  <p class="text-sm font-semibold text-gray-800">Compare Real Estate Deals</p>
                  <p class="text-xs text-gray-500">Compare GRM across multiple properties</p>
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
    <div id="saved-scenarios" class="max-w-[1100px] mx-auto px-4 sm:px-6 pb-8">
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-bold" style="color: #1e3a5f;">Saved Scenarios</h2>
          <span class="text-xs text-gray-400">{{ savedScenarios.length }}/20</span>
        </div>
        <div v-if="savedScenarios.length === 0" class="text-center py-8 text-gray-400 text-sm">
          No saved scenarios yet. Fill in inputs above and click "Save This Scenario."
        </div>
        <div v-else class="space-y-3">
          <div v-for="(sc, idx) in savedScenarios" :key="sc.id"
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-bold text-gray-800 truncate">{{ sc.name || 'Unnamed Property' }}</p>
              <p class="text-xs text-gray-500 mt-0.5">
                Price: {{ formatCurrency(sc.price) }} · Rent: {{ formatCurrency(sc.rent) }}/yr ·
                GRM: <strong>{{ sc.grm }}</strong> ·
                <span :class="sc.verdict === 'EXCELLENT' ? 'text-green-700' : sc.verdict === 'GOOD' ? 'text-blue-700' : sc.verdict === 'CONCERNING' ? 'text-amber-700' : 'text-red-700'" class="font-bold">{{ sc.verdict }}</span>
              </p>
              <p class="text-xs text-gray-400 mt-0.5">{{ sc.marketType }} · {{ sc.propertyType }}</p>
            </div>
            <div class="flex gap-2 flex-shrink-0">
              <button @click="loadScenario(sc)"
                class="px-3 py-1.5 rounded-lg text-xs font-bold text-white transition hover:opacity-90"
                style="background: #1e3a5f;">
                Load
              </button>
              <button @click="deleteScenario(idx)"
                class="px-3 py-1.5 rounded-lg text-xs font-bold text-red-600 border border-red-200 hover:bg-red-50 transition bg-white">
                Delete
              </button>
            </div>
          </div>
          <div class="flex justify-end pt-2">
            <NuxtLink to="/compare-deals?source=gross-rent-multiplier-calculator"
              class="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-xl transition hover:opacity-90"
              style="background: #f59e0b; color: #1e3a5f;">
              Compare All Deals
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- SEO CONTENT -->
    <div class="max-w-[1100px] mx-auto px-4 sm:px-6 pb-16 space-y-8">

      <!-- Overview -->
      <div id="overview" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">What Is the Gross Rent Multiplier (GRM)?</h2>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          The Gross Rent Multiplier (GRM) is a fast screening metric used by real estate investors to compare a property's purchase price to its annual gross rental income. It answers the question: <em>"Is this property priced reasonably relative to what it earns in rent?"</em>
        </p>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          GRM is a <strong>first-pass filter</strong>, not a profitability model. It is designed to help you quickly reject weak deals before spending time on deeper financial analysis.
        </p>
        <div class="p-4 rounded-xl bg-amber-50 border border-amber-200">
          <p class="text-sm font-bold text-amber-900 mb-1">GRM is:</p>
          <ul class="text-sm text-amber-800 space-y-1">
            <li>• A price-to-rent comparison tool</li>
            <li>• A fast screening metric for rental deals</li>
            <li>• A first-pass filter before Cap Rate, NOI, and Cash Flow analysis</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-red-50 border border-red-200 mt-4">
          <p class="text-sm font-bold text-red-900 mb-1">GRM is NOT:</p>
          <ul class="text-sm text-red-800 space-y-1">
            <li>• A profitability metric</li>
            <li>• A cap rate or yield measure</li>
            <li>• A cash-flow model</li>
            <li>• A final investment decision tool</li>
          </ul>
        </div>
      </div>

      <!-- Formula -->
      <div id="formula" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">GRM Formula</h2>
        <div class="p-5 rounded-xl bg-gray-900 text-green-400 font-mono text-sm mb-4">
          GRM = Property Price ÷ Annual Gross Rent
        </div>
        <p class="text-gray-700 text-base leading-relaxed mb-3">
          <strong>Annual Gross Rent</strong> means scheduled rental income only — before vacancy, operating expenses, debt service, taxes, or repairs.
        </p>
        <p class="text-gray-700 text-base leading-relaxed mb-4">
          Other income (parking, laundry, storage, pet fees) is <strong>excluded from Primary GRM</strong>. It is only included in the optional Income-Adjusted GRM for supplemental analysis.
        </p>
        <div class="bg-blue-50 rounded-xl p-4 border border-blue-200 mb-4">
          <p class="text-sm font-bold text-blue-900 mb-2">Quick Answer</p>
          <p class="text-sm text-blue-800">GRM = Property Price ÷ Annual Gross Rent</p>
          <ul class="text-sm text-blue-800 mt-2 space-y-1">
            <li>• &lt;6 → Excellent</li>
            <li>• 6–9 → Good</li>
            <li>• 9–12 → Concerning</li>
            <li>• 12+ → Likely overpriced</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-amber-50 border border-amber-200">
          <p class="text-sm text-amber-900">
            <strong>Lower GRM is better.</strong> A lower GRM means you are paying less for each dollar of gross rent. A higher GRM means you are paying more.
          </p>
        </div>
      </div>

      <!-- How to Use -->
      <div id="how-to-use" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">How to Use This GRM Calculator</h2>
        <ol class="space-y-4">
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm" style="background: #1e3a5f;">1</div>
            <div>
              <p class="font-semibold text-gray-800">Enter the purchase price</p>
              <p class="text-sm text-gray-600">Total acquisition cost, including closing costs if applicable.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm" style="background: #1e3a5f;">2</div>
            <div>
              <p class="font-semibold text-gray-800">Enter annual gross rent</p>
              <p class="text-sm text-gray-600">Scheduled rental income only. Do not include parking, laundry, or other non-rent income here.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm" style="background: #1e3a5f;">3</div>
            <div>
              <p class="font-semibold text-gray-800">Set market type</p>
              <p class="text-sm text-gray-600">Balanced, Low-cost, or High-demand. This adjusts the verdict thresholds.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm" style="background: #1e3a5f;">4</div>
            <div>
              <p class="font-semibold text-gray-800">Add optional inputs</p>
              <p class="text-sm text-gray-600">Other Income, Vacancy Rate, Expense Ratio, and Target GRM are optional but unlock more diagnostic outputs.</p>
            </div>
          </li>
          <li class="flex gap-4">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-sm" style="background: #f59e0b; color: #1e3a5f;">5</div>
            <div>
              <p class="font-semibold text-gray-800">Read the verdict and go deeper</p>
              <p class="text-sm text-gray-600">Use the verdict to decide whether to proceed to Cap Rate, NOI, and Cash Flow analysis, or reject the deal.</p>
            </div>
          </li>
        </ol>
      </div>

      <!-- Result Meaning -->
      <div id="result-meaning" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">What Your GRM Result Means</h2>
        <div class="space-y-4">
          <div class="p-4 rounded-xl border-l-4 border-green-500 bg-green-50">
            <p class="font-bold text-green-800 mb-1">EXCELLENT — GRM below 6</p>
            <p class="text-sm text-green-700">Strong income potential. The property produces high gross rent relative to price. Verify rent quality, property condition, and expense burden before assuming the deal is strong.</p>
            <p class="text-xs text-green-600 mt-2 font-semibold">→ Proceed to deeper analysis, but verify fundamentals.</p>
          </div>
          <div class="p-4 rounded-xl border-l-4 border-blue-500 bg-blue-50">
            <p class="font-bold text-blue-800 mb-1">GOOD — GRM 6 to 9</p>
            <p class="text-sm text-blue-700">Reasonable screening range. The property may be worth deeper analysis. Run Cap Rate, NOI, and Cash Flow before deciding.</p>
            <p class="text-xs text-blue-600 mt-2 font-semibold">→ Proceed to Cap Rate, Cash Flow, and ROI checks.</p>
          </div>
          <div class="p-4 rounded-xl border-l-4 border-amber-500 bg-amber-50">
            <p class="font-bold text-amber-800 mb-1">CONCERNING — GRM 9 to 12</p>
            <p class="text-sm text-amber-700">Premium pricing or weak income signal. Cash flow may be thin after expenses and vacancy. The deal needs a clear justification: appreciation, location, tenant quality, or upside.</p>
            <p class="text-xs text-amber-600 mt-2 font-semibold">→ Investigate assumptions before deeper work.</p>
          </div>
          <div class="p-4 rounded-xl border-l-4 border-red-500 bg-red-50">
            <p class="font-bold text-red-800 mb-1">CRITICAL — GRM 12 or above</p>
            <p class="text-sm text-red-700">Likely overpriced for rental income. The deal probably does not work on income alone. Only proceed if there is a strong appreciation thesis, major rent upside, or strategic reason.</p>
            <p class="text-xs text-red-600 mt-2 font-semibold">→ Reject unless there is strong justification.</p>
          </div>
        </div>
        <div class="mt-4 p-4 rounded-xl bg-gray-50 border border-gray-200">
          <p class="text-xs text-gray-500">
            <strong>Note:</strong> Market Type adjusts these thresholds. High-demand markets shift thresholds up by 2. Low-cost markets shift them down by 1. The same GRM can produce different verdicts in different market types.
          </p>
        </div>
      </div>

      <!-- Benchmarks -->
      <div id="benchmarks" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">GRM Benchmarks by Market Type</h2>
        <p class="text-gray-600 text-sm mb-4">These ranges are observational and contextual. They do NOT override calculator verdicts.</p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-3 pr-4 font-bold text-gray-700">Market Type</th>
                <th class="text-center py-3 px-2 font-bold text-gray-700">Excellent</th>
                <th class="text-center py-3 px-2 font-bold text-gray-700">Good</th>
                <th class="text-center py-3 px-2 font-bold text-gray-700">Concerning</th>
                <th class="text-center py-3 px-2 font-bold text-gray-700">Critical</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-100">
                <td class="py-3 pr-4 font-semibold text-gray-800">Low-cost market</td>
                <td class="text-center py-3 px-2 text-green-700 font-semibold">&lt;5</td>
                <td class="text-center py-3 px-2 text-blue-700 font-semibold">5–8</td>
                <td class="text-center py-3 px-2 text-amber-700 font-semibold">8–11</td>
                <td class="text-center py-3 px-2 text-red-700 font-semibold">≥11</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-3 pr-4 font-semibold text-gray-800">Balanced market</td>
                <td class="text-center py-3 px-2 text-green-700 font-semibold">&lt;6</td>
                <td class="text-center py-3 px-2 text-blue-700 font-semibold">6–9</td>
                <td class="text-center py-3 px-2 text-amber-700 font-semibold">9–12</td>
                <td class="text-center py-3 px-2 text-red-700 font-semibold">≥12</td>
              </tr>
              <tr>
                <td class="py-3 pr-4 font-semibold text-gray-800">High-demand market</td>
                <td class="text-center py-3 px-2 text-green-700 font-semibold">&lt;8</td>
                <td class="text-center py-3 px-2 text-blue-700 font-semibold">8–11</td>
                <td class="text-center py-3 px-2 text-amber-700 font-semibold">11–14</td>
                <td class="text-center py-3 px-2 text-red-700 font-semibold">≥14</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-gray-400 mt-3">Benchmarks are contextual and do not override calculator verdicts. Low-cost markets may have lower GRM; high-demand markets may support higher GRM.</p>
      </div>

      <!-- Strategy -->
      <div id="strategy" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">When to Use GRM — and When Not To</h2>
        <div class="grid sm:grid-cols-2 gap-6">
          <div>
            <p class="font-bold text-green-700 mb-3">GRM works best for:</p>
            <ul class="space-y-2 text-sm text-gray-700">
              <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">✓</span> Buy-and-hold rental properties</li>
              <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">✓</span> Early deal screening before deeper analysis</li>
              <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">✓</span> Comparing multiple properties quickly</li>
              <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">✓</span> Rejecting weak deals before running full models</li>
            </ul>
          </div>
          <div>
            <p class="font-bold text-red-700 mb-3">GRM is weak for:</p>
            <ul class="space-y-2 text-sm text-gray-700">
              <li class="flex items-start gap-2"><span class="text-red-400 mt-0.5">✗</span> Fix and flip strategies</li>
              <li class="flex items-start gap-2"><span class="text-red-400 mt-0.5">✗</span> BRRRR refinance-heavy deals</li>
              <li class="flex items-start gap-2"><span class="text-red-400 mt-0.5">✗</span> Properties with high expense ratios</li>
              <li class="flex items-start gap-2"><span class="text-red-400 mt-0.5">✗</span> Final investment decisions</li>
            </ul>
          </div>
        </div>
        <p class="text-sm text-gray-500 mt-4">For fix and flip or BRRRR strategies, use the <NuxtLink to="/fix-flip-calculator" class="font-semibold underline hover:text-gray-700">Fix &amp; Flip Calculator</NuxtLink> or <NuxtLink to="/brrrr-calculator" class="font-semibold underline hover:text-gray-700">BRRRR Calculator</NuxtLink> instead.</p>
      </div>

      <!-- Limitations -->
      <div id="limitations" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">GRM Limitations</h2>
        <p class="text-gray-700 mb-4">GRM is intentionally simple. That simplicity is its strength for screening — and its weakness for final analysis.</p>
        <div class="space-y-3">
          <div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
            <span class="text-red-500 font-bold text-lg mt-0.5">✗</span>
            <div>
              <p class="text-sm font-semibold text-gray-800">Does not include operating expenses</p>
              <p class="text-xs text-gray-500">Use the <NuxtLink to="/noi-calculator" class="underline hover:text-gray-700">NOI Calculator</NuxtLink> or <NuxtLink to="/cap-rate-calculator" class="underline hover:text-gray-700">Cap Rate Calculator</NuxtLink> to factor in expenses.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
            <span class="text-red-500 font-bold text-lg mt-0.5">✗</span>
            <div>
              <p class="text-sm font-semibold text-gray-800">Does not equal ROI or profitability</p>
              <p class="text-xs text-gray-500">GRM says nothing about your actual return. Use the <NuxtLink to="/arv-calculator" class="underline hover:text-gray-700">Real Estate ROI Calculator</NuxtLink> for full return analysis.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
            <span class="text-red-500 font-bold text-lg mt-0.5">✗</span>
            <div>
              <p class="text-sm font-semibold text-gray-800">Does not equal Cap Rate</p>
              <p class="text-xs text-gray-500">Gross Income Yield (the inverse of GRM) is not a cap rate. Cap Rate uses Net Operating Income, not gross rent.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
            <span class="text-red-500 font-bold text-lg mt-0.5">✗</span>
            <div>
              <p class="text-sm font-semibold text-gray-800">Does not determine loan approval</p>
              <p class="text-xs text-gray-500">Lenders use DSCR, not GRM. Use the <NuxtLink to="/dscr-calculator" class="underline hover:text-gray-700">DSCR Calculator</NuxtLink> for financing analysis.</p>
            </div>
          </div>
        </div>
        <p class="text-sm text-gray-500 mt-4">Always validate GRM results with the <NuxtLink to="/noi-calculator" class="font-semibold underline hover:text-gray-700">NOI Calculator</NuxtLink>, <NuxtLink to="/cap-rate-calculator" class="font-semibold underline hover:text-gray-700">Cap Rate Calculator</NuxtLink>, and <NuxtLink to="/rental-property-calculator" class="font-semibold underline hover:text-gray-700">Cash Flow Calculator</NuxtLink>.</p>
      </div>

      <!-- FAQ -->
      <div id="faq" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">Frequently Asked Questions</h2>
        <div class="space-y-5">

          <div class="border-b border-gray-100 pb-5">
            <h3 class="font-bold text-gray-800 mb-2">What is a good GRM for a rental property?</h3>
            <p class="text-sm text-gray-600">In a balanced market, a GRM below 6 is excellent, 6–9 is a reasonable screening range, 9–12 is concerning, and above 12 indicates the property is likely overpriced for rental income. These thresholds shift based on market type — high-demand markets may accept higher GRM, while low-cost markets expect lower GRM.</p>
          </div>

          <div class="border-b border-gray-100 pb-5">
            <h3 class="font-bold text-gray-800 mb-2">Is GRM the same as Cap Rate?</h3>
            <p class="text-sm text-gray-600">No. GRM uses gross rent and ignores operating expenses. Cap Rate uses Net Operating Income (after expenses). Gross Income Yield (the inverse of GRM) is not a Cap Rate — it does not account for vacancy, management, taxes, insurance, or repairs.</p>
          </div>

          <div class="border-b border-gray-100 pb-5">
            <h3 class="font-bold text-gray-800 mb-2">Does GRM include vacancy?</h3>
            <p class="text-sm text-gray-600">Primary GRM does not include vacancy — it uses scheduled gross rent. This calculator optionally shows an Effective GRM that adjusts for vacancy, but the primary verdict always uses gross rent without vacancy deductions.</p>
          </div>

          <div class="border-b border-gray-100 pb-5">
            <h3 class="font-bold text-gray-800 mb-2">Should other income like parking or laundry be included in GRM?</h3>
            <p class="text-sm text-gray-600">Not in Primary GRM. The industry standard GRM formula uses scheduled rental income only. Other income (parking, laundry, storage, pet fees) is excluded from Primary GRM so it remains comparable to market benchmarks. This calculator shows an optional Income-Adjusted GRM when other income is entered.</p>
          </div>

          <div class="border-b border-gray-100 pb-5">
            <h3 class="font-bold text-gray-800 mb-2">What does "Years to Recoup" mean?</h3>
            <p class="text-sm text-gray-600">Years to Recoup equals GRM and represents how many years of gross rent it would take to equal the purchase price. This assumes 100% of gross rent goes toward recovering the price — before vacancy, expenses, financing, taxes, repairs, and management fees. It is a rough comparison tool, not a true payback metric.</p>
          </div>

          <div class="border-b border-gray-100 pb-5">
            <h3 class="font-bold text-gray-800 mb-2">How is Gross Income Yield different from Cap Rate?</h3>
            <p class="text-sm text-gray-600">Gross Income Yield = Annual Gross Rent ÷ Property Price × 100. It is the mathematical inverse of GRM. It does not account for operating expenses, vacancy, or NOI. Cap Rate = NOI ÷ Property Price × 100, where NOI accounts for all operating expenses. Use the Cap Rate Calculator for accurate yield analysis.</p>
          </div>

          <div class="border-b border-gray-100 pb-5">
            <h3 class="font-bold text-gray-800 mb-2">When should I use GRM vs. Cap Rate?</h3>
            <p class="text-sm text-gray-600">Use GRM for fast first-pass screening — to decide whether a deal is worth analyzing further. Use Cap Rate for more accurate yield analysis once you have expense data. GRM requires only two inputs (price and rent), making it ideal for initial deal review. Cap Rate requires a full expense estimate.</p>
          </div>

          <div>
            <h3 class="font-bold text-gray-800 mb-2">Does a low GRM always mean a good deal?</h3>
            <p class="text-sm text-gray-600">No. A low GRM is a positive signal, but it does not guarantee a good deal. Verify rent quality (is the rent sustainable and at market rate?), property condition, expense burden, and local market context. Some properties show low GRM because they are distressed, in weak rental markets, or have inflated rent that will not hold.</p>
          </div>

        </div>
      </div>

    </div>

    <!-- RELATED CALCULATORS CTA -->
    <div class="border-t border-gray-200 bg-white py-12">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6">
        <h2 class="text-2xl font-extrabold mb-2 text-center" style="color: #1e3a5f;">Related Calculators</h2>
        <p class="text-gray-500 text-center text-sm mb-8">GRM is the first step. Complete your analysis with these tools.</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <NuxtLink to="/cap-rate-calculator" class="block p-5 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition group">
            <p class="font-bold text-gray-800 group-hover:text-yellow-700 transition">Cap Rate Calculator</p>
            <p class="text-xs text-gray-500 mt-1">True yield after operating expenses</p>
          </NuxtLink>
          <NuxtLink to="/noi-calculator" class="block p-5 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition group">
            <p class="font-bold text-gray-800 group-hover:text-yellow-700 transition">NOI Calculator</p>
            <p class="text-xs text-gray-500 mt-1">Net Operating Income after expenses</p>
          </NuxtLink>
          <NuxtLink to="/rental-property-calculator" class="block p-5 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition group">
            <p class="font-bold text-gray-800 group-hover:text-yellow-700 transition">Property Cash Flow Calculator</p>
            <p class="text-xs text-gray-500 mt-1">Monthly cash flow after debt service</p>
          </NuxtLink>
          <NuxtLink to="/compare-deals" class="block p-5 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition group">
            <p class="font-bold text-gray-800 group-hover:text-yellow-700 transition">Compare Real Estate Deals</p>
            <p class="text-xs text-gray-500 mt-1">Side-by-side deal comparison</p>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="border-t border-gray-200 py-8 bg-white">
      <div class="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background: #1e3a5f;">
              <span class="text-white font-extrabold text-sm">RC</span>
            </div>
            <span class="font-bold text-gray-700">RealCalc</span>
          </div>
          <p class="text-xs text-gray-400 text-center">© 2026 RealCalc. For educational and informational purposes only. Not financial advice.</p>
          <div class="flex gap-4 text-xs text-gray-400">
            <NuxtLink to="/privacy" class="hover:text-gray-600 transition">Privacy</NuxtLink>
            <NuxtLink to="/terms" class="hover:text-gray-600 transition">Terms</NuxtLink>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

// ─── SEO HEAD ─────────────────────────────────────────────────────────────────
useHead({
  title: 'Gross Rent Multiplier (GRM) Calculator — Analyze Property Deals Fast (2026)',
  meta: [
    { name: 'description', content: 'Use this GRM Calculator to quickly screen real estate deals. See GRM, income yield, required rent, and deal verdict in seconds.' },
    { property: 'og:title', content: 'Gross Rent Multiplier (GRM) Calculator — Analyze Property Deals Fast (2026)' },
    { property: 'og:description', content: 'Fast first-pass deal screening. See GRM, Gross Income Yield, Effective GRM, and deal verdict instantly.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://arvcalc.com/gross-rent-multiplier-calculator' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Gross Rent Multiplier (GRM) Calculator' },
    { name: 'twitter:description', content: 'Fast real estate deal screening. Calculate GRM, verdict, and income yield instantly.' },
    { name: 'robots', content: 'index, follow' },
  ],
  link: [
    { rel: 'canonical', href: 'https://arvcalc.com/gross-rent-multiplier-calculator' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'SoftwareApplication',
            name: 'Gross Rent Multiplier (GRM) Calculator',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web',
            url: 'https://arvcalc.com/gross-rent-multiplier-calculator',
            description: 'Calculate GRM, Gross Income Yield, Effective GRM, and get a deal verdict for real estate investments.',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is a good GRM for a rental property?',
                acceptedAnswer: { '@type': 'Answer', text: 'In a balanced market, a GRM below 6 is excellent, 6–9 is good, 9–12 is concerning, and 12+ means the property is likely overpriced for rental income.' }
              },
              {
                '@type': 'Question',
                name: 'Is GRM the same as Cap Rate?',
                acceptedAnswer: { '@type': 'Answer', text: 'No. GRM uses gross rent and ignores operating expenses. Cap Rate uses Net Operating Income after expenses. Gross Income Yield is not Cap Rate.' }
              },
              {
                '@type': 'Question',
                name: 'Does GRM include vacancy?',
                acceptedAnswer: { '@type': 'Answer', text: 'Primary GRM uses scheduled gross rent and does not include vacancy. This calculator optionally shows Effective GRM adjusted for vacancy.' }
              },
              {
                '@type': 'Question',
                name: 'Should other income like parking or laundry be included in GRM?',
                acceptedAnswer: { '@type': 'Answer', text: 'Not in Primary GRM. The industry standard uses scheduled rental income only. This calculator shows an optional Income-Adjusted GRM when other income is entered.' }
              },
              {
                '@type': 'Question',
                name: 'What does Years to Recoup mean?',
                acceptedAnswer: { '@type': 'Answer', text: 'Years to Recoup equals GRM and shows how many years of gross rent would equal the purchase price, assuming 100% of gross rent goes toward recovering the price before expenses and vacancy.' }
              },
              {
                '@type': 'Question',
                name: 'When should I use GRM vs. Cap Rate?',
                acceptedAnswer: { '@type': 'Answer', text: 'Use GRM for fast first-pass screening. Use Cap Rate for accurate yield analysis once you have expense data. GRM requires only price and rent. Cap Rate requires a full expense estimate.' }
              }
            ]
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arvcalc.com' },
              { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://arvcalc.com/calculators' },
              { '@type': 'ListItem', position: 3, name: 'GRM Calculator', item: 'https://arvcalc.com/gross-rent-multiplier-calculator' }
            ]
          }
        ]
      })
    }
  ]
})

// ─── STATE ─────────────────────────────────────────────────────────────────────
const isNavExpanded = ref(false)
const shareCopied = ref(false)
const scenarioSavedMsg = ref('')
const savedScenarios = ref([])

const inp = ref({
  price: null,
  rent: null,
  otherIncome: null,
  vacancyRate: null,
  vacancyAffectsOtherIncome: false,
  expenseRatio: null,
  propertyType: 'Single-family',
  marketType: 'Balanced market',
  targetGrm: null,
  scenarioName: ''
})

// ─── COMPUTED: HELPERS ─────────────────────────────────────────────────────────
const safePrice = computed(() => (inp.value.price > 0 ? inp.value.price : 0))
const safeRent = computed(() => (inp.value.rent > 0 ? inp.value.rent : 0))
const safeOtherIncome = computed(() => (inp.value.otherIncome > 0 ? inp.value.otherIncome : 0))
const safeVacancy = computed(() => (inp.value.vacancyRate > 0 && inp.value.vacancyRate < 100 ? inp.value.vacancyRate : 0))
const safeExpenseRatio = computed(() => (inp.value.expenseRatio > 0 && inp.value.expenseRatio < 100 ? inp.value.expenseRatio : 0))
const effectiveTargetGrm = computed(() => (inp.value.targetGrm > 0 ? inp.value.targetGrm : 8))

const hasOtherIncome = computed(() => safeOtherIncome.value > 0)
const hasVacancy = computed(() => safeVacancy.value > 0)
const hasExpenseRatio = computed(() => inp.value.expenseRatio > 0 && inp.value.expenseRatio < 100)

const canCalculate = computed(() => safePrice.value > 0 && safeRent.value > 0)

// ─── COMPUTED: VALIDATION ERRORS ──────────────────────────────────────────────
const errors = computed(() => {
  const errs = []
  if (inp.value.price !== null && inp.value.price <= 0) errs.push('Property price must be greater than zero.')
  if (inp.value.rent !== null && inp.value.rent <= 0) errs.push('Annual gross rent must be greater than zero.')
  if (inp.value.otherIncome !== null && inp.value.otherIncome < 0) errs.push('Other income cannot be negative.')
  if (inp.value.vacancyRate !== null && (inp.value.vacancyRate < 0 || inp.value.vacancyRate >= 100)) errs.push('Vacancy rate must be between 0% and less than 100%.')
  if (inp.value.expenseRatio !== null && (inp.value.expenseRatio < 0 || inp.value.expenseRatio >= 100)) errs.push('Expense ratio must be between 0% and less than 100%.')
  if (inp.value.targetGrm !== null && inp.value.targetGrm <= 0) errs.push('Target GRM must be greater than zero.')
  return errs
})

// ─── COMPUTED: MARKET THRESHOLDS ──────────────────────────────────────────────
const thresholds = computed(() => {
  const market = inp.value.marketType
  if (market === 'Low-cost market') {
    return { excellent: 5, good: 8, concerning: 11 }
  } else if (market === 'High-demand market') {
    return { excellent: 8, good: 11, concerning: 14 }
  } else {
    return { excellent: 6, good: 9, concerning: 12 }
  }
})

// ─── COMPUTED: CORE RESULTS ────────────────────────────────────────────────────
const result = computed(() => {
  if (!canCalculate.value || errors.value.length) return null

  const price = safePrice.value
  const rent = safeRent.value
  const otherIncome = safeOtherIncome.value
  const vacancyRate = safeVacancy.value / 100
  const expenseRatio = hasExpenseRatio.value ? safeExpenseRatio.value / 100 : 0

  // Primary GRM
  const grm = price / rent

  // Total Gross Income
  const totalGrossIncome = rent + otherIncome

  // Income-Adjusted GRM
  const incomeAdjustedGrm = hasOtherIncome.value ? price / totalGrossIncome : null

  // Years to Recoup = GRM
  const yearsToRecoup = grm

  // Gross Income Yield
  const grossIncomeYield = (rent / price) * 100

  // Vacancy adjustment
  let effectiveGrm = null
  let vacancyGrmDelta = 0
  let effectiveGrossIncome = totalGrossIncome

  if (hasVacancy.value) {
    const vacancyAdjustedRent = rent * (1 - vacancyRate)
    const vacancyAdjustedOtherIncome = inp.value.vacancyAffectsOtherIncome
      ? otherIncome * (1 - vacancyRate)
      : otherIncome
    effectiveGrossIncome = vacancyAdjustedRent + vacancyAdjustedOtherIncome

    if (effectiveGrossIncome > 0) {
      effectiveGrm = price / effectiveGrossIncome
      vacancyGrmDelta = effectiveGrm - grm
    } else {
      effectiveGrm = null
    }
  }

  // NOI Proxy
  let noiProxy = null
  let noiProxyYield = null
  if (hasExpenseRatio.value && effectiveGrossIncome > 0) {
    const egi = hasVacancy.value ? effectiveGrossIncome : totalGrossIncome
    noiProxy = egi * (1 - expenseRatio)
    noiProxyYield = (noiProxy / price) * 100
  }

  // Required Rent
  const targetGrm = effectiveTargetGrm.value
  const requiredRent = Math.round(price / targetGrm)
  const requiredRentAfterOtherIncome = Math.max(0, Math.round(price / targetGrm - otherIncome))

  return {
    grm,
    totalGrossIncome,
    incomeAdjustedGrm,
    yearsToRecoup,
    grossIncomeYield,
    effectiveGrm,
    effectiveGrossIncome,
    vacancyGrmDelta,
    noiProxy,
    noiProxyYield,
    requiredRent,
    requiredRentAfterOtherIncome
  }
})

// ─── COMPUTED: VERDICT ────────────────────────────────────────────────────────
const verdict = computed(() => {
  if (!result.value) return null
  const grm = result.value.grm
  const t = thresholds.value
  if (grm < t.excellent) return 'EXCELLENT'
  if (grm < t.good) return 'GOOD'
  if (grm < t.concerning) return 'CONCERNING'
  return 'CRITICAL'
})

const verdictLabel = computed(() => {
  const map = {
    EXCELLENT: 'Strong income potential',
    GOOD: 'Reasonable screening range',
    CONCERNING: 'Premium pricing / weak income signal',
    CRITICAL: 'Likely overpriced for rental income'
  }
  return map[verdict.value] || ''
})

const verdictSubtitle = computed(() => {
  const map = {
    EXCELLENT: 'GRM below ' + thresholds.value.excellent,
    GOOD: 'GRM ' + thresholds.value.excellent + '–' + thresholds.value.good,
    CONCERNING: 'GRM ' + thresholds.value.good + '–' + thresholds.value.concerning,
    CRITICAL: 'GRM ' + thresholds.value.concerning + ' or above'
  }
  return map[verdict.value] || ''
})

const verdictColor = computed(() => {
  const map = {
    EXCELLENT: '#16a34a',
    GOOD: '#2563eb',
    CONCERNING: '#d97706',
    CRITICAL: '#dc2626'
  }
  return map[verdict.value] || '#6b7280'
})

const verdictBgClass = computed(() => {
  const map = {
    EXCELLENT: 'bg-green-50 border-green-200',
    GOOD: 'bg-blue-50 border-blue-200',
    CONCERNING: 'bg-amber-50 border-amber-200',
    CRITICAL: 'bg-red-50 border-red-200'
  }
  return map[verdict.value] || 'bg-gray-50 border-gray-200'
})

const verdictTextClass = computed(() => {
  const map = {
    EXCELLENT: 'text-green-800',
    GOOD: 'text-blue-800',
    CONCERNING: 'text-amber-800',
    CRITICAL: 'text-red-800'
  }
  return map[verdict.value] || 'text-gray-800'
})

// ─── EFFECTIVE GRM TIER CHECK ─────────────────────────────────────────────────
const effectiveGrmCrossedTier = computed(() => {
  if (!result.value || result.value.effectiveGrm === null) return false
  const t = thresholds.value
  const primaryTier = verdict.value
  const eGrm = result.value.effectiveGrm
  let effectiveTier
  if (eGrm < t.excellent) effectiveTier = 'EXCELLENT'
  else if (eGrm < t.good) effectiveTier = 'GOOD'
  else if (eGrm < t.concerning) effectiveTier = 'CONCERNING'
  else effectiveTier = 'CRITICAL'
  const tierOrder = ['EXCELLENT', 'GOOD', 'CONCERNING', 'CRITICAL']
  return tierOrder.indexOf(effectiveTier) > tierOrder.indexOf(primaryTier)
})

// ─── REAL IMPACT TEXT ─────────────────────────────────────────────────────────
const realImpactText = computed(() => {
  const map = {
    EXCELLENT: 'The property produces high gross rent relative to price.\nVerify rent quality, property condition, and expense burden before assuming the deal is strong.',
    GOOD: 'The property may be worth deeper analysis.\nRun Cap Rate, NOI, and Cash Flow before deciding.',
    CONCERNING: 'Cash flow may be thin after expenses and vacancy.\nThe deal needs a clear justification: appreciation, location, tenant quality, or upside.',
    CRITICAL: 'The deal probably does not work on income alone.\nOnly proceed if there is a strong appreciation thesis, major rent upside, or strategic reason.'
  }
  return map[verdict.value] || ''
})

// ─── SCREENING DECISION TEXT ──────────────────────────────────────────────────
const screeningDecisionText = computed(() => {
  const map = {
    EXCELLENT: 'Proceed to deeper analysis, but verify fundamentals.',
    GOOD: 'Proceed to Cap Rate, Cash Flow, and ROI checks.',
    CONCERNING: 'Investigate assumptions before deeper work. Verify rent, market type, and seller pricing.',
    CRITICAL: 'Reject unless there is strong justification. Run full ROI only if appreciation or rent growth thesis is credible.'
  }
  return map[verdict.value] || ''
})

// ─── LIKELY CAUSES ────────────────────────────────────────────────────────────
const likelyCauses = computed(() => {
  const map = {
    EXCELLENT: [
      'Undervalued property',
      'Distressed seller',
      'Strong rent relative to price',
      'Rent may be temporarily inflated',
      'Property may have hidden condition issues'
    ],
    GOOD: [
      'Typical income property pricing',
      'Rent and price are generally aligned',
      'Market is balanced'
    ],
    CONCERNING: [
      'Premium location',
      'Recent price appreciation outpaced rent growth',
      'Seller priced property by comps, not income',
      'Rent is below market',
      'Market type may be misclassified'
    ],
    CRITICAL: [
      'Property is overpriced relative to rent',
      'Income yield is too weak',
      'Deal relies on appreciation, not income',
      'Rent input may be too low',
      'Market type may need adjustment'
    ]
  }
  return map[verdict.value] || []
})

// ─── URL PARAMS ───────────────────────────────────────────────────────────────
onMounted(() => {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  if (params.get('price')) inp.value.price = parseFloat(params.get('price'))
  if (params.get('rent')) inp.value.rent = parseFloat(params.get('rent'))
  if (params.get('other')) inp.value.otherIncome = parseFloat(params.get('other'))
  if (params.get('vacancy')) inp.value.vacancyRate = parseFloat(params.get('vacancy'))
  if (params.get('vo')) inp.value.vacancyAffectsOtherIncome = params.get('vo') === 'true'
  if (params.get('expense')) inp.value.expenseRatio = parseFloat(params.get('expense'))
  if (params.get('type')) inp.value.propertyType = params.get('type')
  if (params.get('market')) inp.value.marketType = params.get('market')
  if (params.get('target')) inp.value.targetGrm = parseFloat(params.get('target'))
  if (params.get('name')) inp.value.scenarioName = params.get('name')

  loadSavedScenarios()
})

// ─── SAVED SCENARIOS ──────────────────────────────────────────────────────────
function loadSavedScenarios () {
  if (typeof window === 'undefined') return
  try {
    const raw = localStorage.getItem('grm-scenarios')
    savedScenarios.value = raw ? JSON.parse(raw) : []
  } catch {
    savedScenarios.value = []
  }
}

function saveScenario () {
  if (!canCalculate.value || errors.value.length || !result.value) return
  if (savedScenarios.value.length >= 20) {
    scenarioSavedMsg.value = 'Maximum 20 scenarios reached. Delete one to save a new scenario.'
    setTimeout(() => { scenarioSavedMsg.value = '' }, 3000)
    return
  }
  const sc = {
    id: Date.now(),
    name: inp.value.scenarioName || 'Unnamed Property',
    price: inp.value.price,
    rent: inp.value.rent,
    otherIncome: safeOtherIncome.value,
    vacancyRate: safeVacancy.value,
    vacancyAffectsOtherIncome: inp.value.vacancyAffectsOtherIncome,
    expenseRatio: inp.value.expenseRatio,
    propertyType: inp.value.propertyType,
    marketType: inp.value.marketType,
    targetGrm: effectiveTargetGrm.value,
    grm: result.value.grm.toFixed(2),
    incomeAdjustedGrm: result.value.incomeAdjustedGrm ? result.value.incomeAdjustedGrm.toFixed(2) : null,
    effectiveGrm: result.value.effectiveGrm ? result.value.effectiveGrm.toFixed(2) : null,
    verdict: verdict.value,
    requiredRent: result.value.requiredRent
  }
  savedScenarios.value.unshift(sc)
  try {
    localStorage.setItem('grm-scenarios', JSON.stringify(savedScenarios.value))
    scenarioSavedMsg.value = 'Scenario saved!'
    setTimeout(() => { scenarioSavedMsg.value = '' }, 2000)
  } catch {
    scenarioSavedMsg.value = 'Failed to save scenario.'
    setTimeout(() => { scenarioSavedMsg.value = '' }, 2000)
  }
}

function loadScenario (sc) {
  inp.value.price = sc.price
  inp.value.rent = sc.rent
  inp.value.otherIncome = sc.otherIncome || null
  inp.value.vacancyRate = sc.vacancyRate || null
  inp.value.vacancyAffectsOtherIncome = sc.vacancyAffectsOtherIncome || false
  inp.value.expenseRatio = sc.expenseRatio || null
  inp.value.propertyType = sc.propertyType || 'Single-family'
  inp.value.marketType = sc.marketType || 'Balanced market'
  inp.value.targetGrm = sc.targetGrm || null
  inp.value.scenarioName = sc.name || ''
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function deleteScenario (idx) {
  savedScenarios.value.splice(idx, 1)
  try {
    localStorage.setItem('grm-scenarios', JSON.stringify(savedScenarios.value))
  } catch {}
}

// ─── SHARE URL ────────────────────────────────────────────────────────────────
function shareUrl () {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams()
  if (inp.value.price) params.set('price', inp.value.price)
  if (inp.value.rent) params.set('rent', inp.value.rent)
  if (safeOtherIncome.value) params.set('other', safeOtherIncome.value)
  if (safeVacancy.value) params.set('vacancy', safeVacancy.value)
  if (inp.value.vacancyAffectsOtherIncome) params.set('vo', 'true')
  if (inp.value.expenseRatio) params.set('expense', inp.value.expenseRatio)
  if (inp.value.propertyType !== 'Single-family') params.set('type', inp.value.propertyType)
  if (inp.value.marketType !== 'Balanced market') params.set('market', inp.value.marketType)
  if (inp.value.targetGrm && inp.value.targetGrm !== 8) params.set('target', inp.value.targetGrm)
  if (inp.value.scenarioName) params.set('name', inp.value.scenarioName)
  const url = `${window.location.origin}/gross-rent-multiplier-calculator?${params.toString()}`
  navigator.clipboard.writeText(url).then(() => {
    shareCopied.value = true
    setTimeout(() => { shareCopied.value = false }, 2000)
  })
}

// ─── PDF EXPORT ───────────────────────────────────────────────────────────────
async function exportPdf () {
  if (!result.value) return
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF()
  const name = inp.value.scenarioName || 'GRM Analysis'

  doc.setFontSize(18)
  doc.setTextColor(30, 58, 95)
  doc.text('Gross Rent Multiplier (GRM) Analysis', 14, 20)

  doc.setFontSize(11)
  doc.setTextColor(100, 100, 100)
  doc.text(name, 14, 28)
  doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 34)

  doc.setFontSize(12)
  doc.setTextColor(30, 58, 95)
  doc.text('Inputs', 14, 46)
  doc.setFontSize(10)
  doc.setTextColor(50, 50, 50)
  const inputs = [
    ['Property Price', formatCurrency(inp.value.price)],
    ['Annual Gross Rent', formatCurrency(inp.value.rent)],
    ['Other Income', safeOtherIncome.value ? formatCurrency(safeOtherIncome.value) : 'None'],
    ['Vacancy Rate', safeVacancy.value ? safeVacancy.value + '%' : 'None'],
    ['Expense Ratio', hasExpenseRatio.value ? inp.value.expenseRatio + '%' : 'None'],
    ['Property Type', inp.value.propertyType],
    ['Market Type', inp.value.marketType],
    ['Target GRM', effectiveTargetGrm.value]
  ]
  let y = 54
  inputs.forEach(([label, val]) => {
    doc.text(`${label}: ${val}`, 14, y)
    y += 7
  })

  y += 4
  doc.setFontSize(12)
  doc.setTextColor(30, 58, 95)
  doc.text('Results', 14, y)
  y += 8
  doc.setFontSize(10)
  doc.setTextColor(50, 50, 50)

  const outputs = [
    ['Primary GRM', result.value.grm.toFixed(2)],
    ['Verdict', verdict.value + ' — ' + verdictLabel.value],
    ['Years to Recoup', result.value.grm.toFixed(1) + ' years'],
    ['Gross Income Yield', result.value.grossIncomeYield.toFixed(2) + '%'],
    ['Required Annual Rent (GRM ' + effectiveTargetGrm.value + ')', formatCurrency(result.value.requiredRent)]
  ]
  if (result.value.incomeAdjustedGrm) outputs.push(['Income-Adjusted GRM', result.value.incomeAdjustedGrm.toFixed(2)])
  if (result.value.effectiveGrm) outputs.push(['Effective GRM (after vacancy)', result.value.effectiveGrm.toFixed(2)])
  if (result.value.noiProxyYield) outputs.push(['NOI Proxy Yield', result.value.noiProxyYield.toFixed(2) + '%'])

  outputs.forEach(([label, val]) => {
    doc.text(`${label}: ${val}`, 14, y)
    y += 7
  })

  y += 4
  doc.setFontSize(9)
  doc.setTextColor(150, 150, 150)
  doc.text('GRM is a first-pass screening tool only. Not financial advice.', 14, y)
  doc.text('Verify with Cap Rate, NOI, and Cash Flow calculators at arvcalc.com', 14, y + 5)

  doc.save(`grm-analysis-${Date.now()}.pdf`)
}

// ─── FORMAT HELPERS ───────────────────────────────────────────────────────────
function formatCurrency (val) {
  if (!val && val !== 0) return '$0'
  return '$' + Math.round(val).toLocaleString('en-US')
}
</script>
