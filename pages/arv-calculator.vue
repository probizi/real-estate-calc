<template>
  <div class="min-h-screen bg-gray-50">

    <!-- HEADER -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4">
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
      <div class="max-w-7xl mx-auto">
        <nav aria-label="Breadcrumb">
          <ol class="flex items-center gap-2 text-sm text-gray-400">
            <li><NuxtLink to="/" class="hover:text-gray-600 transition">Home</NuxtLink></li>
            <li><span>/</span></li>
            <li><NuxtLink to="/calculators" class="hover:text-gray-600 transition">Calculators</NuxtLink></li>
            <li><span>/</span></li>
            <li class="text-gray-700 font-semibold">ARV Calculator</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- MOBILE LIVE RESULT BAR -->
    <div class="lg:hidden sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <div class="text-sm text-gray-500 font-medium">Estimated ARV</div>
        <div class="flex items-center gap-3">
          <span v-if="hasResult" class="text-2xl font-extrabold" style="color: #1e3a5f;">
            {{ formatCurrency(estimatedARV) }}
          </span>
          <span v-else class="text-2xl font-bold text-gray-200">—</span>
        </div>
      </div>
    </div>

    <!-- MAIN -->
    <main class="max-w-7xl mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row lg:gap-8 items-start">

        <!-- LEFT SIDEBAR — Title + How to Use + Links -->
        <aside class="lg:w-72 xl:w-80 flex-shrink-0 space-y-5 order-2 lg:order-none mt-8 lg:mt-0">

          <!-- Title card -->
          <div class="rounded-2xl overflow-hidden" style="background: #1e3a5f;">
            <div class="p-6">
              <div class="inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full mb-3"
                style="background: rgba(245,158,11,0.2); color: #fcd34d;">
                Free · No Signup
              </div>
              <h1 class="text-2xl font-extrabold text-white mb-2 leading-tight">ARV Calculator</h1>
              <p class="text-blue-200 text-sm leading-relaxed mb-4">Calculate After Repair Value using comparable sales. Used by fix & flip investors, BRRRR investors, and hard money lenders across the US.</p>
              <div class="p-3 rounded-xl text-center" style="background: rgba(245,158,11,0.12); border: 1px solid rgba(245,158,11,0.25);">
                <span class="font-mono text-xs font-bold" style="color: #fcd34d;">Max Offer = ARV × 70% − Rehab Costs</span>
              </div>
            </div>
            <div class="px-6 pb-5 space-y-2 border-t border-white/10 pt-4">
              <p class="text-xs font-bold uppercase tracking-wide text-blue-400 mb-2">Key Thresholds</p>
              <div class="flex justify-between text-sm">
                <span class="text-blue-200">Full recapture (BRRRR)</span>
                <span class="font-bold text-green-400">ARV &gt; All-in × 1.33</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-blue-200">Profitable flip</span>
                <span class="font-bold text-yellow-400">Profit &gt; 20% ARV</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-blue-200">Hard money LTV limit</span>
                <span class="font-bold text-orange-400">Loan ≤ 70% ARV</span>
              </div>
            </div>
          </div>

          <!-- How to Use -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h2 class="text-sm font-extrabold mb-4" style="color: #1e3a5f;">How to Use This Calculator</h2>
            <ol class="space-y-4">
              <li class="flex gap-3">
                <span class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-extrabold text-white mt-0.5" style="background: #1e3a5f; min-width:1.5rem;">1</span>
                <div>
                  <p class="text-sm font-semibold text-gray-800">Enter subject property size</p>
                  <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">Input the square footage of the property you're analyzing.</p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-extrabold text-white mt-0.5" style="background: #1e3a5f; min-width:1.5rem;">2</span>
                <div>
                  <p class="text-sm font-semibold text-gray-800">Add comparable sales</p>
                  <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">Enter 2–5 recent sales of similar properties nearby. Include sale price and size. The calculator derives price per sq ft.</p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-extrabold text-white mt-0.5" style="background: #1e3a5f; min-width:1.5rem;">3</span>
                <div>
                  <p class="text-sm font-semibold text-gray-800">Apply adjustments</p>
                  <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">Add or subtract value for features that differ from comps: garage, pool, lot size, or other factors.</p>
                </div>
              </li>
              <li class="flex gap-3">
                <span class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-extrabold text-white mt-0.5" style="background: #1e3a5f; min-width:1.5rem;">4</span>
                <div>
                  <p class="text-sm font-semibold text-gray-800">Read ARV & offers</p>
                  <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">The result shows ARV, your max offer under the 70% rule, and how much equity you'd have after purchase + rehab.</p>
                </div>
              </li>
            </ol>
            <div class="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-100">
              <p class="text-xs text-amber-800 font-medium"><strong>Pro tip:</strong> Use only closed sales within the last 6 months, within 0.5–1 mile, and similar size (±20%). Avoid active listings and pending sales as comps.</p>
            </div>
          </div>

          <!-- Related calculators -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 class="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Related Calculators</h3>
            <div class="space-y-1">
              <NuxtLink to="/fix-flip-calculator" class="flex items-center gap-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg px-2 py-2 transition">
                <span class="w-2 h-2 rounded-full flex-shrink-0" style="background:#ef4444;"></span>
                Fix & Flip Calculator
              </NuxtLink>
              <NuxtLink to="/brrrr-calculator" class="flex items-center gap-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg px-2 py-2 transition">
                <span class="w-2 h-2 rounded-full flex-shrink-0" style="background:#10b981;"></span>
                BRRRR Calculator
              </NuxtLink>
              <NuxtLink to="/cap-rate-calculator" class="flex items-center gap-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg px-2 py-2 transition">
                <span class="w-2 h-2 rounded-full flex-shrink-0" style="background:#f59e0b;"></span>
                Cap Rate Calculator
              </NuxtLink>
            </div>
          </div>

        </aside>

        <!-- RIGHT — Calculator content -->
        <div class="flex-1 min-w-0 order-1 lg:order-none">

      <div class="grid lg:grid-cols-5 gap-8">

        <!-- INPUTS -->
        <div class="lg:col-span-3 space-y-6">

          <!-- Subject Property -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background: rgba(30,58,95,0.08);">
                <svg class="w-4 h-4" style="color: #1e3a5f;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
              </div>
              <h2 class="font-bold text-sm" style="color: #1e3a5f;">Subject Property</h2>
            </div>
            <div class="p-6 space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="sqft" class="block text-sm font-semibold text-gray-700 mb-1.5">Square Footage</label>
                  <input id="sqft" v-model.number="form.sqft" type="number" min="100" step="50" placeholder="e.g. 1,400"
                    class="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-base transition" />
                </div>
                <div>
                  <label for="bedrooms" class="block text-sm font-semibold text-gray-700 mb-1.5">Bedrooms</label>
                  <select id="bedrooms" v-model.number="form.bedrooms"
                    class="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none font-semibold text-base transition bg-white"
                    :class="form.bedrooms === null ? 'text-gray-400' : 'text-gray-900'">
                    <option :value="null" disabled>e.g. 3 bed</option>
                    <option v-for="n in 8" :key="n" :value="n">{{ n }} bed</option>
                  </select>
                </div>
                <div>
                  <label for="bathrooms" class="block text-sm font-semibold text-gray-700 mb-1.5">Bathrooms</label>
                  <select id="bathrooms" v-model.number="form.bathrooms"
                    class="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none font-semibold text-base transition bg-white"
                    :class="form.bathrooms === null ? 'text-gray-400' : 'text-gray-900'">
                    <option :value="null" disabled>e.g. 2 bath</option>
                    <option value="1">1 bath</option>
                    <option value="1.5">1.5 bath</option>
                    <option value="2">2 bath</option>
                    <option value="2.5">2.5 bath</option>
                    <option value="3">3 bath</option>
                    <option value="3.5">3.5 bath</option>
                    <option value="4">4 bath</option>
                  </select>
                </div>
                <div>
                  <label for="condition" class="block text-sm font-semibold text-gray-700 mb-1.5">Post-Rehab Condition</label>
                  <select id="condition" v-model="form.condition"
                    class="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none font-semibold text-base transition bg-white"
                    :class="!form.condition ? 'text-gray-400' : 'text-gray-900'">
                    <option value="" disabled>Select condition</option>
                    <option value="turnkey">Turnkey / Like New</option>
                    <option value="updated">Updated</option>
                    <option value="average">Average</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Comparable Sales -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background: rgba(245,158,11,0.12);">
                  <svg class="w-4 h-4" style="color: #f59e0b;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                  </svg>
                </div>
                <h2 class="font-bold text-sm" style="color: #1e3a5f;">Comparable Sales (Comps)</h2>
              </div>
              <button @click="addComp"
                class="text-xs font-bold px-3 py-1.5 rounded-lg transition hover:opacity-90 text-white"
                style="background: #1e3a5f;">
                + Add Comp
              </button>
            </div>
            <div class="p-6 space-y-4">
              <p class="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                Enter recently sold, fully renovated comparable properties in the same neighborhood (last 6 months).
              </p>
              <div v-for="(comp, idx) in form.comps" :key="idx" class="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-gray-600 uppercase tracking-wide">Comp #{{ idx + 1 }}</span>
                  <button v-if="form.comps.length > 1" @click="removeComp(idx)" class="text-xs text-red-400 hover:text-red-600 font-medium transition">Remove</button>
                </div>
                <div class="grid grid-cols-3 gap-3">
                  <div>
                    <label class="block text-xs font-semibold text-gray-600 mb-1">Sale Price</label>
                    <div class="relative">
                      <span class="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
                      <input v-model.number="comp.salePrice" type="number" min="0" step="1000" placeholder="e.g. 220,000"
                        class="w-full pl-5 pr-2 py-2 rounded-lg border border-gray-200 focus:border-yellow-400 outline-none text-gray-900 font-medium text-sm transition" />
                    </div>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-600 mb-1">Sq Ft</label>
                    <input v-model.number="comp.sqft" type="number" min="100" step="50" placeholder="e.g. 1,350"
                      class="w-full px-2 py-2 rounded-lg border border-gray-200 focus:border-yellow-400 outline-none text-gray-900 font-medium text-sm transition" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-600 mb-1">Price/sqft</label>
                    <div class="px-2 py-2 rounded-lg bg-white border border-gray-100 text-sm font-bold" style="color: #1e3a5f;">
                      {{ comp.sqft && comp.salePrice ? formatCurrency(comp.salePrice / comp.sqft) : '—' }}
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="validComps.length > 0" class="pt-2 border-t border-gray-100 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-500">Avg Price/sqft ({{ validComps.length }} comps)</span>
                  <span class="font-bold" style="color: #1e3a5f;">{{ formatCurrency(avgPricePerSqft) }}/sqft</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Adjustments -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background: rgba(239,68,68,0.1);">
                <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                </svg>
              </div>
              <h2 class="font-bold text-sm" style="color: #1e3a5f;">Value Adjustments</h2>
            </div>
            <div class="p-6 space-y-3">
              <p class="text-xs text-gray-500">Add/subtract value differences between your property and the comps.</p>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-1">Garage (+/-)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input v-model.number="form.adj.garage" type="number" step="1000" placeholder="0"
                      class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-1">Pool (+/-)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input v-model.number="form.adj.pool" type="number" step="1000" placeholder="0"
                      class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-1">Lot Size (+/-)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input v-model.number="form.adj.lot" type="number" step="1000" placeholder="0"
                      class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-semibold text-gray-600 mb-1">Other (+/-)</label>
                  <div class="relative">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input v-model.number="form.adj.other" type="number" step="1000" placeholder="0"
                      class="w-full pl-7 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- RESULTS -->
        <div class="lg:col-span-2">
          <div class="sticky top-24 space-y-5">

            <!-- Main Result -->
            <div v-if="hasResult" class="rounded-2xl p-6 text-white shadow-xl" style="background: linear-gradient(135deg, #1e3a5f, #16304f);">
              <p class="text-blue-300 text-xs font-bold uppercase tracking-widest mb-3">Estimated ARV</p>
              <div class="text-4xl font-extrabold mb-4">{{ formatCurrency(estimatedARV) }}</div>
              <div class="text-xs text-blue-300 space-y-1">
                <div class="flex justify-between"><span>Price/sqft</span><span class="text-white font-bold">{{ formatCurrency(avgPricePerSqft) }}/sqft</span></div>
                <div class="flex justify-between"><span>Base Value</span><span class="text-white font-bold">{{ formatCurrency(baseValue) }}</span></div>
                <div class="flex justify-between"><span>Adjustments</span><span class="text-white font-bold">{{ totalAdjustments >= 0 ? '+' : '' }}{{ formatCurrency(totalAdjustments) }}</span></div>
              </div>
            </div>

            <div v-else class="rounded-2xl p-8 text-center border-2 border-dashed border-gray-200 bg-white">
              <p class="text-gray-400 font-medium text-sm">Enter subject property sqft<br>and at least 1 comp to calculate ARV</p>
            </div>

            <!-- Confidence Range -->
            <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Confidence Range</h3>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-500">Conservative (−10%)</span>
                  <span class="font-semibold text-red-500">{{ formatCurrency(estimatedARV * 0.9) }}</span>
                </div>
                <div class="flex justify-between font-bold" style="color: #1e3a5f;">
                  <span>Estimated ARV</span>
                  <span>{{ formatCurrency(estimatedARV) }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-500">Optimistic (+10%)</span>
                  <span class="font-semibold text-green-600">{{ formatCurrency(estimatedARV * 1.1) }}</span>
                </div>
              </div>
              <p class="text-xs text-gray-400 mt-3">Use conservative ARV for offer calculations. More comps = higher confidence.</p>
            </div>

            <!-- Lending Calculations -->
            <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Lender LTV on ARV</h3>
              <div class="space-y-2 text-sm">
                <div v-for="ltv in [65, 70, 75, 80]" :key="ltv" class="flex justify-between">
                  <span class="text-gray-600">{{ ltv }}% LTV</span>
                  <span class="font-semibold text-gray-900">{{ formatCurrency(estimatedARV * ltv / 100) }}</span>
                </div>
              </div>
              <p class="text-xs text-gray-400 mt-3">Hard money lenders typically lend 65–75% of ARV. DSCR/conventional 75–80%.</p>
            </div>

            <!-- 70% Rule MAO -->
            <div v-if="hasResult" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">70% Rule — Max Offer</h3>
              <p class="text-xs text-gray-500 mb-2">Enter your rehab estimate:</p>
              <div class="relative mb-3">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                <input v-model.number="rehabEstimate" type="number" min="0" step="1000" placeholder="e.g. 30,000"
                  class="w-full pl-8 pr-4 py-4 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-semibold text-base transition" />
              </div>
              <div class="text-xl font-extrabold" style="color: #1e3a5f;">
                MAO = {{ formatCurrency(mao70) }}
              </div>
              <p class="text-xs text-gray-400 mt-1">(ARV × 70%) − Rehab = Max Offer</p>
            </div>

          </div>
        </div>

      </div>
        </div><!-- /right column -->
      </div><!-- /lg:flex -->
    </main>

    <!-- SEO CONTENT -->
    <div class="max-w-7xl mx-auto px-4 pb-16 mt-12 space-y-12">

      <!-- What is ARV -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">What Is After Repair Value (ARV)?</h2>
        <div class="grid md:grid-cols-2 gap-6 text-gray-600 text-sm leading-relaxed">
          <div>
            <p class="mb-3">After Repair Value (ARV) is the estimated market value of a property after it has been fully renovated and is in move-in ready condition. It's the foundational number in fix & flip and BRRRR investing — everything from your offer price to your hard money loan amount is calculated as a percentage of ARV.</p>
            <p>ARV is derived from comparable sales (comps): recently sold, fully updated homes in the same neighborhood with similar size, bedroom count, and features. The more accurate your comps, the more reliable your ARV estimate.</p>
          </div>
          <div>
            <p class="mb-3">Appraisers use a formal sales comparison approach with documented adjustments for every feature difference. Investors use a simplified version: average the price-per-square-foot of 3–5 valid comps, multiply by the subject property's square footage, then adjust for major feature differences (garage, pool, lot, condition).</p>
            <p>Never use active listings or pending sales as comps — only closed sales within the last 6 months, within 0.5–1 mile, and within ±20% of the subject property's size represent true market value.</p>
          </div>
        </div>
      </section>

      <!-- How ARV is Used -->
      <section>
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">How ARV Drives Every Investment Decision</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div class="text-xs font-bold uppercase tracking-widest mb-2 text-red-500">Fix & Flip MAO</div>
            <div class="font-mono text-xs bg-gray-50 rounded-lg p-3 text-gray-700 mb-3">ARV × 70% − Rehab</div>
            <p class="text-xs text-gray-500">Maximum you can pay and still achieve a profitable flip with room for surprises.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div class="text-xs font-bold uppercase tracking-widest mb-2 text-green-500">BRRRR Refinance</div>
            <div class="font-mono text-xs bg-gray-50 rounded-lg p-3 text-gray-700 mb-3">ARV × 75–80% LTV</div>
            <p class="text-xs text-gray-500">Cash-out refinance loan amount to pull your capital back out after renovation.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div class="text-xs font-bold uppercase tracking-widest mb-2 text-blue-500">Hard Money Loan</div>
            <div class="font-mono text-xs bg-gray-50 rounded-lg p-3 text-gray-700 mb-3">ARV × 65–75% LTV</div>
            <p class="text-xs text-gray-500">Most hard money lenders base their loan limit on a percentage of ARV, not purchase price.</p>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div class="text-xs font-bold uppercase tracking-widest mb-2 text-yellow-500">Equity Created</div>
            <div class="font-mono text-xs bg-gray-50 rounded-lg p-3 text-gray-700 mb-3">ARV − (Purchase + Rehab)</div>
            <p class="text-xs text-gray-500">The wealth created through renovation — the spread between all-in cost and finished value.</p>
          </div>
        </div>
      </section>

      <!-- Comp Selection Guide -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">How to Select Good Comps</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-bold text-green-700 mb-3 flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">✓</span>
              Good Comps
            </h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold mt-0.5">•</span>Closed sales within the last 3–6 months</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold mt-0.5">•</span>Within 0.5–1 mile (urban) or 1–3 miles (rural)</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold mt-0.5">•</span>Similar size (±20% of subject property sqft)</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold mt-0.5">•</span>Same neighborhood / subdivision</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold mt-0.5">•</span>Fully renovated / updated condition</li>
              <li class="flex items-start gap-2"><span class="text-green-500 font-bold mt-0.5">•</span>Arm's length transactions (no foreclosure/short sales)</li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-red-700 mb-3 flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs font-bold">✗</span>
              Avoid These
            </h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-start gap-2"><span class="text-red-400 font-bold mt-0.5">•</span>Active listings (wishful pricing, not market data)</li>
              <li class="flex items-start gap-2"><span class="text-red-400 font-bold mt-0.5">•</span>Pending sales (not yet confirmed)</li>
              <li class="flex items-start gap-2"><span class="text-red-400 font-bold mt-0.5">•</span>Sales older than 12 months in rising markets</li>
              <li class="flex items-start gap-2"><span class="text-red-400 font-bold mt-0.5">•</span>Distressed sales (foreclosures, bank-owned)</li>
              <li class="flex items-start gap-2"><span class="text-red-400 font-bold mt-0.5">•</span>Properties in worse condition than your target finish</li>
              <li class="flex items-start gap-2"><span class="text-red-400 font-bold mt-0.5">•</span>Sales between related parties (family, business partners)</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ARV by US Market -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-2" style="color: #1e3a5f;">Median Price Per Sq Ft by US Market</h2>
        <p class="text-gray-500 text-sm mb-6">Typical renovated home price per sq ft for comparable sales benchmarking. Updated 2024.</p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-3 pr-4 font-bold text-gray-700">Market</th>
                <th class="text-right py-3 px-4 font-bold text-gray-700">Low-End</th>
                <th class="text-right py-3 px-4 font-bold text-gray-700">Mid-Range</th>
                <th class="text-right py-3 px-4 font-bold text-gray-700">High-End</th>
                <th class="text-left py-3 pl-4 font-bold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="m in arvMarkets" :key="m.market">
                <td class="py-3 pr-4 font-semibold text-gray-900">{{ m.market }}</td>
                <td class="py-3 px-4 text-right text-gray-600">{{ m.low }}</td>
                <td class="py-3 px-4 text-right font-bold" style="color: #1e3a5f;">{{ m.mid }}</td>
                <td class="py-3 px-4 text-right text-green-600 font-semibold">{{ m.high }}</td>
                <td class="py-3 pl-4 text-gray-500 text-xs">{{ m.notes }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- FAQ -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-extrabold mb-6" style="color: #1e3a5f;">ARV Calculator FAQ</h2>
        <div class="space-y-5">
          <div v-for="faq in faqs" :key="faq.q" class="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
            <h3 class="font-bold text-gray-900 mb-2">{{ faq.q }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ faq.a }}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="rounded-2xl p-8 text-center text-white" style="background: linear-gradient(135deg, #1e3a5f, #16304f);">
        <h2 class="text-2xl font-extrabold mb-3">Put Your ARV to Work</h2>
        <p class="text-blue-200 mb-6 text-sm">Once you have an accurate ARV, plug it into our Fix & Flip or BRRRR calculators to model your complete deal returns.</p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink to="/fix-flip-calculator" class="px-5 py-2.5 rounded-xl font-bold text-sm transition hover:opacity-90" style="background: #f59e0b; color: #1e3a5f;">Fix & Flip Calculator</NuxtLink>
          <NuxtLink to="/brrrr-calculator" class="px-5 py-2.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 transition text-white">BRRRR Calculator</NuxtLink>
          <NuxtLink to="/cap-rate-calculator" class="px-5 py-2.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 transition text-white">Cap Rate Calculator</NuxtLink>
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
          "name": "What is ARV in real estate?",
          "acceptedAnswer": { "@type": "Answer", "text": "ARV (After Repair Value) is the estimated market value of a property after it has been fully renovated. It's calculated using comparable sales — recently sold, updated homes nearby with similar size and features. ARV is used to determine maximum offer prices, hard money loan amounts, and BRRRR refinance values." }
        },
        {
          "@type": "Question",
          "name": "How accurate is ARV?",
          "acceptedAnswer": { "@type": "Answer", "text": "ARV accuracy depends on comp quality. With 3–5 strong comps (closed sales, same neighborhood, similar size, updated condition, last 6 months), estimates are typically within 5–10% of appraised value. Using only 1 comp or low-quality comps increases error significantly. Always build a 10% conservative buffer." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between ARV and appraised value?",
          "acceptedAnswer": { "@type": "Answer", "text": "ARV is an investor's pre-purchase estimate of post-renovation value. Appraised value is a licensed appraiser's formal opinion after the renovation is complete. Lenders require a formal appraisal; ARV is used during the due diligence and offer phase. A good ARV estimate should come within 5% of the eventual appraisal." }
        },
        {
          "@type": "Question",
          "name": "How many comps do I need for a reliable ARV?",
          "acceptedAnswer": { "@type": "Answer", "text": "At least 3 closed comps are needed for a reliable ARV estimate. 5 comps is ideal. With 2 comps, there's high variance risk. With 1 comp, the estimate is essentially a single data point and should not be relied upon for offer calculations. If good comps are scarce, expand your search radius slightly or go back up to 12 months." }
        }
      ]
    }
    </script>

  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

useHead({
  title: 'ARV Calculator — After Repair Value for Fix & Flip | RealCalc',
  meta: [
    { name: 'description', content: 'Free ARV calculator for real estate investors. Calculate After Repair Value using comparable sales, apply adjustments, and get your 70% Rule max offer. Built for US fix & flip and BRRRR investors.' },
    { property: 'og:title', content: 'ARV Calculator — After Repair Value' },
    { property: 'og:description', content: 'Estimate After Repair Value using comps and adjustments. Get your maximum offer price using the 70% Rule.' }
  ]
})

const form = reactive({
  sqft: null,
  bedrooms: null,
  bathrooms: null,
  condition: '',
  comps: [
    { salePrice: null, sqft: null },
    { salePrice: null, sqft: null },
    { salePrice: null, sqft: null }
  ],
  adj: {
    garage: null,
    pool: null,
    lot: null,
    other: null
  }
})

const rehabEstimate = ref(null)

const formatCurrency = (val) => {
  if (val == null || isNaN(val)) return '$0'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val)
}

const addComp = () => {
  if (form.comps.length < 6) {
    form.comps.push({ salePrice: null, sqft: null })
  }
}

const removeComp = (idx) => {
  form.comps.splice(idx, 1)
}

const validComps = computed(() => {
  return form.comps.filter(c => c.salePrice && c.sqft && c.sqft > 0)
})

const avgPricePerSqft = computed(() => {
  if (!validComps.value.length) return 0
  const sum = validComps.value.reduce((acc, c) => acc + c.salePrice / c.sqft, 0)
  return sum / validComps.value.length
})

const conditionMultiplier = computed(() => {
  if (form.condition === 'turnkey') return 1.0
  if (form.condition === 'updated') return 0.97
  return 0.93
})

const baseValue = computed(() => {
  return avgPricePerSqft.value * (form.sqft || 0) * conditionMultiplier.value
})

const totalAdjustments = computed(() => {
  return (form.adj.garage || 0) + (form.adj.pool || 0) + (form.adj.lot || 0) + (form.adj.other || 0)
})

const estimatedARV = computed(() => {
  return baseValue.value + totalAdjustments.value
})

const mao70 = computed(() => {
  return estimatedARV.value * 0.7 - (rehabEstimate.value || 0)
})

const hasResult = computed(() => {
  return validComps.value.length > 0 && form.sqft
})

const arvMarkets = [
  { market: 'Los Angeles, CA', low: '$350/sqft', mid: '$520/sqft', high: '$800+/sqft', notes: 'Wide range; SFR in inland areas vs. coastal premium' },
  { market: 'Dallas, TX', low: '$140/sqft', mid: '$195/sqft', high: '$280/sqft', notes: 'Suburban markets like Frisco/McKinney at mid-high end' },
  { market: 'Miami, FL', low: '$220/sqft', mid: '$340/sqft', high: '$550/sqft', notes: 'Inland vs. waterfront premium significant' },
  { market: 'New York, NY', low: '$280/sqft', mid: '$450/sqft', high: '$900+/sqft', notes: 'Borough matters enormously — Queens vs. Manhattan' },
  { market: 'Phoenix, AZ', low: '$160/sqft', mid: '$230/sqft', high: '$320/sqft', notes: 'Strong rental demand; Scottsdale commands premium' },
  { market: 'Atlanta, GA', low: '$110/sqft', mid: '$170/sqft', high: '$240/sqft', notes: 'In-town neighborhoods (EAV, Decatur) outperform suburbs' },
  { market: 'Denver, CO', low: '$230/sqft', mid: '$320/sqft', high: '$430/sqft', notes: 'Higher entry costs; strong appreciation history' },
  { market: 'Seattle, WA', low: '$310/sqft', mid: '$430/sqft', high: '$620/sqft', notes: 'Tech-driven demand; East Side suburbs near $500+' }
]

const faqs = [
  { q: 'What is ARV in real estate?', a: "ARV (After Repair Value) is the estimated market value of a property after it has been fully renovated. It's calculated using comparable sales — recently sold, updated homes nearby with similar size and features. ARV is used to determine maximum offer prices, hard money loan amounts, and BRRRR refinance values." },
  { q: 'How accurate is ARV?', a: 'ARV accuracy depends on comp quality. With 3–5 strong comps (closed sales, same neighborhood, similar size, updated condition, last 6 months), estimates are typically within 5–10% of appraised value. Using only 1 comp or low-quality comps increases error significantly. Always build a 10% conservative buffer.' },
  { q: 'What is the difference between ARV and appraised value?', a: "ARV is an investor's pre-purchase estimate of post-renovation value. Appraised value is a licensed appraiser's formal opinion after the renovation is complete. Lenders require a formal appraisal; ARV is used during the due diligence and offer phase. A good ARV estimate should come within 5% of the eventual appraisal." },
  { q: 'How many comps do I need for a reliable ARV?', a: "At least 3 closed comps are needed for a reliable ARV estimate. 5 comps is ideal. With 2 comps, there's high variance risk. With 1 comp, the estimate is essentially a single data point and should not be relied upon for offer calculations. If good comps are scarce, expand your search radius slightly or go back up to 12 months." }
]
</script>