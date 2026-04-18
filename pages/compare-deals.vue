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
            <NuxtLink to="/compare-deals" class="font-bold text-sm transition" style="color: #1e3a5f;">Compare Deals</NuxtLink>
            <NuxtLink to="/pricing" class="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Pricing</NuxtLink>
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
         HERO
    ═══════════════════════════════════════════════ -->
    <section class="text-white py-10 md:py-14 px-4" style="background: #1e3a5f;">
      <div class="max-w-5xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-4"
          style="background: rgba(245,158,11,0.15); border: 1px solid rgba(245,158,11,0.3); color: #fcd34d;">
          Side-by-Side Deal Analysis
        </div>
        <h1 class="text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Compare Real Estate Deals</h1>
        <p class="text-blue-200 text-base max-w-2xl mx-auto">
          Compare up to 4 deals or saved scenarios side by side. Instantly spot which investment wins on every metric.
        </p>
      </div>
    </section>

    <main class="max-w-[1100px] mx-auto px-4 py-10">

      <!-- ── Source Toggle ── -->
      <div class="flex items-center gap-3 mb-6 flex-wrap">
        <button @click="mode = 'saved'"
          :class="mode === 'saved' ? 'font-bold text-white' : 'font-semibold text-gray-600 bg-white border border-gray-400 hover:border-gray-500 hover:bg-gray-50'"
          class="px-5 py-2.5 rounded-xl text-sm transition"
          :style="mode === 'saved' ? 'background: #1e3a5f;' : ''">
          Saved Scenarios
          <span v-if="allScenarios.length > 0"
            class="ml-1.5 px-2 py-0.5 rounded-full text-xs font-bold"
            :style="mode === 'saved' ? 'background: rgba(255,255,255,0.2);' : 'background: #f0f4f8; color: #1e3a5f;'">
            {{ allScenarios.length }}
          </span>
        </button>
        <button @click="mode = 'manual'"
          :class="mode === 'manual' ? 'font-bold text-white' : 'font-semibold text-gray-600 bg-white border border-gray-400 hover:border-gray-500 hover:bg-gray-50'"
          class="px-5 py-2.5 rounded-xl text-sm transition"
          :style="mode === 'manual' ? 'background: #1e3a5f;' : ''">
          Enter Manually
        </button>
      </div>

      <!-- ═══════════════════════════════════
           SAVED SCENARIOS MODE
      ════════════════════════════════════ -->
      <div v-if="mode === 'saved'">

        <!-- No scenarios yet -->
        <div v-if="allScenarios.length === 0" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style="background: #f0f4f8;">
            <svg class="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
            </svg>
          </div>
          <h3 class="text-lg font-extrabold mb-2" style="color: #1e3a5f;">No saved scenarios yet</h3>
          <p class="text-gray-500 text-sm max-w-sm mx-auto mb-6">
            Run any calculator, click "Save Scenario", and your deals will appear here for comparison.
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <NuxtLink to="/cap-rate-calculator"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition hover:opacity-90"
              style="background: #1e3a5f; color: white;">
              Cap Rate Calculator
            </NuxtLink>
            <NuxtLink to="/cash-on-cash-calculator"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border border-gray-400 hover:border-gray-500 text-gray-700 hover:bg-gray-50 transition">
              Cash-on-Cash
            </NuxtLink>
            <NuxtLink to="/rental-property-calculator"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border border-gray-400 hover:border-gray-500 text-gray-700 hover:bg-gray-50 transition">
              Rental Property
            </NuxtLink>
          </div>
        </div>

        <!-- Scenario picker + grid -->
        <div v-else>

          <!-- Picker: select up to 4 -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
            <div class="flex items-center justify-between mb-4">
              <p class="text-sm font-bold text-gray-700">Select up to 4 deals to compare</p>
              <div class="flex items-center gap-2">
                <button @click="selectAll" class="text-xs font-semibold text-blue-600 hover:text-blue-800 transition">
                  Select first 4
                </button>
                <span class="text-gray-300">·</span>
                <button @click="selected = []" class="text-xs font-semibold text-gray-400 hover:text-gray-600 transition">
                  Clear
                </button>
              </div>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              <button v-for="s in allScenarios" :key="s.id"
                @click="toggleSelect(s.id)"
                :disabled="!selected.includes(s.id) && selected.length >= 4"
                class="flex items-center gap-3 px-3 py-2.5 rounded-xl border-2 text-left transition disabled:opacity-40 disabled:cursor-not-allowed"
                :class="selected.includes(s.id)
                  ? 'border-yellow-400 bg-amber-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'">
                <div class="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  :style="`background: ${badgeColor(s.results.badgeLabel)}`"></div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-semibold text-gray-900 truncate">{{ s.name }}</p>
                  <p class="text-xs text-gray-400 truncate">
                    {{ calcLabel(s.calculator) }} · {{ s.results.primaryMetric }}: {{ s.results.primaryValue }}
                  </p>
                </div>
                <div class="w-5 h-5 rounded flex-shrink-0 flex items-center justify-center"
                  :style="selected.includes(s.id) ? 'background: #f59e0b;' : 'background: #f0f4f8;'">
                  <svg v-if="selected.includes(s.id)" class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <!-- Comparison Grid -->
          <div v-if="selectedScenarios.length >= 1">
            <ComparisonGrid :deals="selectedScenarios" @remove="deselectDeal" />
          </div>
          <div v-else class="text-center py-8 text-gray-400 text-sm font-medium">
            Select at least one deal above to begin comparing.
          </div>

        </div>
      </div>

      <!-- ═══════════════════════════════════
           MANUAL ENTRY MODE
      ════════════════════════════════════ -->
      <div v-if="mode === 'manual'">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-gray-800">Enter Deal Data Manually</h3>
            <button @click="addManualDeal"
              :disabled="manualDeals.length >= 4"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs transition disabled:opacity-40"
              style="background: #1e3a5f; color: white;">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/>
              </svg>
              Add Deal ({{ manualDeals.length }}/4)
            </button>
          </div>

          <!-- Deal input cards -->
          <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div v-for="(deal, idx) in manualDeals" :key="deal._id"
              class="border-2 rounded-2xl p-4 relative"
              :style="dealBorderStyle(idx)">

              <!-- Remove -->
              <button @click="removeManual(idx)"
                class="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

              <!-- Deal number badge -->
              <div class="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-lg text-xs font-bold text-white"
                :style="`background: ${dealColors[idx % dealColors.length]};`">
                Deal {{ idx + 1 }}
              </div>

              <!-- Name -->
              <div class="mb-3">
                <label class="block text-xs font-semibold text-gray-500 mb-1">Deal Name</label>
                <input v-model="deal.name" type="text" placeholder="e.g. 123 Oak St"
                  class="w-full px-3 py-2 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm font-semibold text-gray-900 transition" />
              </div>

              <!-- Calculator type -->
              <div class="mb-3">
                <label class="block text-xs font-semibold text-gray-500 mb-1">Calculator Type</label>
                <select v-model="deal.calculator"
                  class="w-full px-3 py-2 rounded-xl border border-gray-400 hover:border-gray-500 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 outline-none text-sm text-gray-700 transition bg-white">
                  <option value="cap-rate">Cap Rate</option>
                  <option value="cash-on-cash">Cash-on-Cash</option>
                  <option value="rental-property">Rental Property</option>
                  <option value="dscr">DSCR</option>
                  <option value="noi">NOI</option>
                  <option value="fix-flip">Fix & Flip</option>
                  <option value="arv">ARV</option>
                  <option value="brrrr">BRRRR</option>
                </select>
              </div>

              <!-- Core Metrics -->
              <div class="space-y-2">
                <ManualField v-model="deal.purchasePrice"  label="Purchase Price" prefix="$" />
                <ManualField v-model="deal.noi"            label="NOI (annual)" prefix="$" />
                <ManualField v-model="deal.capRate"        label="Cap Rate" suffix="%" />
                <ManualField v-model="deal.cashOnCash"     label="Cash-on-Cash" suffix="%" />
                <ManualField v-model="deal.dscr"           label="DSCR" />
                <ManualField v-model="deal.annualCashFlow" label="Annual Cash Flow" prefix="$" />
              </div>
            </div>
          </div>

          <div v-if="manualDeals.length === 0"
            class="text-center py-8 text-gray-400 text-sm">
            Click "Add Deal" to start entering data.
          </div>
        </div>

        <div v-if="manualDeals.length >= 1">
          <ComparisonGrid :deals="manualToScenarios" />
        </div>
      </div>

    </main>

    <!-- Footer note -->
    <div class="max-w-[1100px] mx-auto px-4 pb-12 text-center">
      <p class="text-xs text-gray-400">
        Comparison is for informational purposes only. Not financial advice. Verify all inputs with a licensed professional before making investment decisions.
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
import type { Scenario, ScenarioResult } from '~/composables/useScenarios'

useHead({
  title: 'Compare Real Estate Deals Side by Side | RealCalc',
  meta: [
    { name: 'description', content: 'Compare up to 4 real estate investment deals side by side. Instantly see which property wins on cap rate, cash-on-cash, NOI, DSCR, cash flow, and more.' },
  ],
})

const route = useRoute()

const { scenarios } = useScenarios()
const allScenarios  = computed(() => scenarios.value)

// ── Mode toggle ────────────────────────────────────────────────────────────
const mode = ref<'saved' | 'manual'>('saved')

// ── Saved scenarios selection ──────────────────────────────────────────────
const selected = ref<string[]>([])

// Pre-select from query param ?ids=id1,id2
onMounted(() => {
  const ids = route.query.ids as string | undefined
  if (ids) {
    selected.value = ids.split(',').filter(Boolean).slice(0, 4)
  } else if (allScenarios.value.length > 0) {
    selected.value = allScenarios.value.slice(0, Math.min(4, allScenarios.value.length)).map(s => s.id)
  }
})

const selectedScenarios = computed(() =>
  selected.value
    .map(id => allScenarios.value.find(s => s.id === id))
    .filter(Boolean) as Scenario[]
)

function toggleSelect(id: string) {
  const idx = selected.value.indexOf(id)
  if (idx === -1) {
    if (selected.value.length < 4) selected.value = [...selected.value, id]
  } else {
    selected.value = selected.value.filter(x => x !== id)
  }
}

function selectAll() {
  selected.value = allScenarios.value.slice(0, 4).map(s => s.id)
}

function deselectDeal(id: string) {
  selected.value = selected.value.filter(x => x !== id)
}

// ── Manual entry ───────────────────────────────────────────────────────────
interface ManualDeal {
  _id:          string
  name:         string
  calculator:   string
  purchasePrice?: number | null
  noi?:           number | null
  capRate?:       number | null
  cashOnCash?:    number | null
  dscr?:          number | null
  annualCashFlow?: number | null
}

const manualDeals = ref<ManualDeal[]>([])

function addManualDeal() {
  if (manualDeals.value.length >= 4) return
  manualDeals.value.push({
    _id:        `manual_${Date.now()}`,
    name:       `Deal ${manualDeals.value.length + 1}`,
    calculator: 'cap-rate',
  })
}

function removeManual(idx: number) {
  manualDeals.value.splice(idx, 1)
}

const manualToScenarios = computed<Scenario[]>(() =>
  manualDeals.value.map((d, i) => {
    const pr  = d.capRate   ? `${d.capRate.toFixed(2)}%`   :
                d.cashOnCash ? `${d.cashOnCash.toFixed(2)}%` :
                d.dscr       ? d.dscr.toFixed(2)             : '—'
    const pm  = d.capRate   ? 'Cap Rate'    :
                d.cashOnCash ? 'Cash-on-Cash' :
                d.dscr       ? 'DSCR'        : 'Return'
    const badge =
      (d.capRate ?? d.cashOnCash ?? 0) >= 7 ? 'Good' :
      (d.capRate ?? d.cashOnCash ?? 0) >= 4 ? 'Average' : undefined

    return {
      id:         d._id,
      name:       d.name || `Deal ${i + 1}`,
      calculator: d.calculator,
      savedAt:    Date.now(),
      results: {
        primaryMetric:  pm,
        primaryValue:   pr,
        badgeLabel:     badge,
        purchasePrice:  d.purchasePrice  ?? undefined,
        noi:            d.noi            ?? undefined,
        capRate:        d.capRate        ?? undefined,
        cashOnCash:     d.cashOnCash     ?? undefined,
        dscr:           d.dscr           ?? undefined,
        annualCashFlow: d.annualCashFlow ?? undefined,
      } as ScenarioResult,
    }
  })
)

// ── Helpers ────────────────────────────────────────────────────────────────
const dealColors = ['#1e3a5f', '#f59e0b', '#10b981', '#8b5cf6']

function dealBorderStyle(idx: number) {
  return `border-color: ${dealColors[idx % dealColors.length]}30; background: ${dealColors[idx % dealColors.length]}05;`
}

function badgeColor(label?: string) {
  if (label === 'Good')    return '#10b981'
  if (label === 'Average') return '#f59e0b'
  if (label === 'Poor')    return '#ef4444'
  return '#6b7280'
}

function calcLabel(key: string) {
  const map: Record<string, string> = {
    'cap-rate': 'Cap Rate', 'cash-on-cash': 'Cash-on-Cash', 'dscr': 'DSCR',
    'noi': 'NOI', 'rental-property': 'Rental', 'fix-flip': 'Fix & Flip',
    'arv': 'ARV', 'brrrr': 'BRRRR',
  }
  return map[key] || key
}
</script>
