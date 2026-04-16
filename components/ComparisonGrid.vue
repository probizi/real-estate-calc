<template>
  <div class="overflow-x-auto">
    <div class="min-w-[600px]">

      <!-- Deal Headers -->
      <div class="grid gap-3 mb-3"
        :style="`grid-template-columns: 180px repeat(${deals.length}, 1fr);`">
        <div></div>
        <div v-for="(deal, idx) in deals" :key="deal.id"
          class="rounded-2xl p-4 relative text-white"
          :style="`background: ${dealColors[idx % dealColors.length]};`">

          <!-- Remove button -->
          <button v-if="$attrs.onRemove"
            @click="emit('remove', deal.id)"
            class="absolute top-2.5 right-2.5 w-6 h-6 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/40 transition"
            title="Remove from comparison">
            <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <p class="text-xs font-semibold opacity-70 mb-0.5">{{ calcLabel(deal.calculator) }}</p>
          <p class="font-extrabold text-base leading-tight mb-2 pr-6 truncate">{{ deal.name }}</p>
          <div class="flex items-end gap-2">
            <span class="text-2xl font-extrabold leading-none">{{ deal.results.primaryValue }}</span>
          </div>
          <p class="text-xs opacity-70 mt-0.5">{{ deal.results.primaryMetric }}</p>
          <div v-if="deal.results.badgeLabel"
            class="mt-2 inline-flex px-2.5 py-1 rounded-full text-xs font-bold bg-white/20">
            {{ deal.results.badgeLabel }}
          </div>
        </div>
      </div>

      <!-- Metric rows -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div v-for="(row, rowIdx) in metricRows" :key="row.key">

          <!-- Section header -->
          <div v-if="row.isSection"
            class="px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-gray-400"
            style="background: #f8fafc;">
            {{ row.label }}
          </div>

          <!-- Data row -->
          <div v-else
            class="grid items-center hover:bg-gray-50 transition"
            :class="rowIdx % 2 === 0 ? '' : 'bg-gray-50/50'"
            :style="`grid-template-columns: 180px repeat(${deals.length}, 1fr);`">

            <!-- Metric label -->
            <div class="px-4 py-3 text-xs font-semibold text-gray-500 leading-tight">
              {{ row.label }}
              <span v-if="row.hint" class="block font-normal text-gray-400 text-[10px]">{{ row.hint }}</span>
            </div>

            <!-- Values -->
            <div v-for="(deal, idx) in deals" :key="deal.id"
              class="px-4 py-3 text-sm font-bold text-center"
              :style="cellStyle(row, idx)">
              {{ formatMetric(deal.results[row.key as keyof typeof deal.results], row) }}
              <span v-if="isBest(row, idx) && dealsWithValue(row).length > 1"
                class="ml-1 text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 align-middle">
                BEST
              </span>
            </div>

          </div>
        </div>
      </div>

      <!-- Win summary -->
      <div v-if="deals.length > 1" class="mt-4 grid gap-3"
        :style="`grid-template-columns: 180px repeat(${deals.length}, 1fr);`">
        <div class="px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center">Score</div>
        <div v-for="(deal, idx) in deals" :key="deal.id"
          class="rounded-2xl px-4 py-3 text-center"
          :style="`background: ${dealColors[idx % dealColors.length]}12; border: 1.5px solid ${dealColors[idx % dealColors.length]}30;`">
          <p class="text-2xl font-extrabold" :style="`color: ${dealColors[idx % dealColors.length]};`">
            {{ winCounts[idx] }}
          </p>
          <p class="text-xs font-semibold text-gray-500 mt-0.5">
            {{ winCounts[idx] === 1 ? 'category win' : 'category wins' }}
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { Scenario, ScenarioResult } from '~/composables/useScenarios'

interface Props {
  deals: Scenario[]
}
const props = defineProps<Props>()
const emit = defineEmits<{ remove: [id: string] }>()

const dealColors = ['#1e3a5f', '#f59e0b', '#10b981', '#8b5cf6']

interface MetricRow {
  key:       string
  label:     string
  hint?:     string
  format:    'currency' | 'percent' | 'ratio' | 'number' | 'text'
  higherIsBetter?: boolean // undefined = no winner
  isSection?: boolean
}

const metricRows: MetricRow[] = [
  { key: '_returns',      label: 'Returns',              isSection: true, format: 'text' },
  { key: 'capRate',       label: 'Cap Rate',             hint: 'Higher = better yield', format: 'percent', higherIsBetter: true },
  { key: 'cashOnCash',    label: 'Cash-on-Cash Return',  hint: 'Return on cash invested', format: 'percent', higherIsBetter: true },
  { key: 'dscr',          label: 'DSCR',                 hint: 'Debt coverage (≥1.25 = good)', format: 'ratio', higherIsBetter: true },
  { key: 'roi',           label: 'ROI',                  format: 'percent', higherIsBetter: true },
  { key: '_income',       label: 'Income & Expenses',    isSection: true, format: 'text' },
  { key: 'grossIncome',   label: 'Gross Income',         format: 'currency', higherIsBetter: true },
  { key: 'noi',           label: 'Net Operating Income', format: 'currency', higherIsBetter: true },
  { key: 'totalExpenses', label: 'Total Expenses',       format: 'currency', higherIsBetter: false },
  { key: 'vacancyRate',   label: 'Vacancy Rate',         format: 'percent', higherIsBetter: false },
  { key: '_cashflow',     label: 'Cash Flow',            isSection: true, format: 'text' },
  { key: 'annualCashFlow',  label: 'Annual Cash Flow',   format: 'currency', higherIsBetter: true },
  { key: 'monthlyCashFlow', label: 'Monthly Cash Flow',  format: 'currency', higherIsBetter: true },
  { key: '_deal',         label: 'Deal Structure',       isSection: true, format: 'text' },
  { key: 'purchasePrice', label: 'Purchase Price',       format: 'currency' },
  { key: 'totalCashInvested', label: 'Total Cash In',   format: 'currency' },
  { key: 'arv',           label: 'ARV',                  hint: 'After-Repair Value', format: 'currency' },
  { key: 'rehabCost',     label: 'Rehab Cost',           format: 'currency', higherIsBetter: false },
  { key: 'profit',        label: 'Profit',               format: 'currency', higherIsBetter: true },
  { key: 'equity',        label: 'Equity',               format: 'currency', higherIsBetter: true },
  { key: 'ltv',           label: 'LTV',                  format: 'percent', higherIsBetter: false },
  { key: 'grossRentMultiplier', label: 'Gross Rent Multiplier', hint: 'Lower = better value', format: 'ratio', higherIsBetter: false },
]

// Only show rows where at least one deal has a value
const visibleRows = computed(() =>
  metricRows.filter(row => {
    if (row.isSection) return true
    return props.deals.some(d => hasValue(d.results[row.key as keyof ScenarioResult]))
  })
)

// Collapse sections that have no visible data rows following them
const metricRowsFinal = computed(() => {
  const rows = visibleRows.value
  const result: MetricRow[] = []
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].isSection) {
      // Check if next non-section row exists
      const hasData = rows.slice(i + 1).some(r => !r.isSection)
      if (hasData) result.push(rows[i])
    } else {
      result.push(rows[i])
    }
  }
  return result
})

function hasValue(v: unknown): boolean {
  return v !== undefined && v !== null && v !== 0
}

function dealsWithValue(row: MetricRow) {
  return props.deals.filter(d => hasValue(d.results[row.key as keyof ScenarioResult]))
}

function isBest(row: MetricRow, idx: number): boolean {
  if (row.higherIsBetter === undefined) return false
  const vals = props.deals.map(d => Number(d.results[row.key as keyof ScenarioResult] ?? null))
  if (vals.filter(v => v !== null && !isNaN(v) && v !== 0).length < 2) return false
  const validVals = vals.filter(v => !isNaN(v) && v !== 0)
  const best = row.higherIsBetter ? Math.max(...validVals) : Math.min(...validVals)
  return vals[idx] === best && !isNaN(vals[idx]) && vals[idx] !== 0
}

function cellStyle(row: MetricRow, idx: number): string {
  if (row.isSection) return ''
  const val = props.deals[idx]?.results[row.key as keyof ScenarioResult]
  if (!hasValue(val)) return 'color: #d1d5db;'
  if (isBest(row, idx) && dealsWithValue(row).length > 1) return `color: #059669; font-weight: 800;`
  return `color: ${dealColors[idx % dealColors.length]};`
}

const winCounts = computed(() =>
  props.deals.map((_, idx) =>
    metricRowsFinal.value.filter(row => !row.isSection && isBest(row, idx) && dealsWithValue(row).length > 1).length
  )
)

function formatMetric(val: unknown, row: MetricRow): string {
  if (row.isSection) return ''
  if (val === undefined || val === null || val === 0) return '—'
  const n = Number(val)
  if (isNaN(n)) return String(val)
  switch (row.format) {
    case 'currency': return formatCurrency(n)
    case 'percent':  return `${n.toFixed(2)}%`
    case 'ratio':    return n.toFixed(2)
    default:         return n.toFixed(2)
  }
}

function formatCurrency(n: number): string {
  if (Math.abs(n) >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (Math.abs(n) >= 1_000)     return `$${(n / 1_000).toFixed(1)}K`
  return `$${n.toFixed(0)}`
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
