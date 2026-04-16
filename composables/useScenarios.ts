// ─── Scenario Management — persisted to localStorage ─────────────────────────
// Each calculator can save named snapshots of its inputs + results.
// The compare-deals page reads all saved scenarios for side-by-side comparison.

export interface ScenarioResult {
  // Universal display fields (populated by each calculator)
  primaryMetric: string       // e.g. 'Cap Rate'
  primaryValue:  string       // e.g. '6.50%'
  badgeLabel?:   string       // 'Good' | 'Average' | 'Poor'
  badgeColor?:   string       // hex

  // Numeric metrics (whichever the calculator has)
  capRate?:            number  // %
  noi?:                number  // $
  cashOnCash?:         number  // %
  dscr?:               number
  grossRentMultiplier?: number
  annualCashFlow?:     number  // $
  monthlyCashFlow?:    number  // $
  totalCashInvested?:  number  // $
  purchasePrice?:      number  // $
  arv?:                number  // $
  rehabCost?:          number  // $
  profit?:             number  // $
  roi?:                number  // %
  grossIncome?:        number  // $
  totalExpenses?:      number  // $
  vacancyRate?:        number  // %
  ltv?:                number  // %
  equity?:             number  // $
}

export interface Scenario {
  id:         string
  name:       string
  calculator: string   // 'cap-rate' | 'cash-on-cash' | 'dscr' | 'noi' | 'rental-property' | 'fix-flip' | 'arv' | 'brrrr'
  savedAt:    number   // timestamp ms
  results:    ScenarioResult
}

const STORAGE_KEY = 'realcalc_scenarios'
const MAX_SCENARIOS = 50

function loadFromStorage(): Scenario[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveToStorage(scenarios: Scenario[]) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scenarios))
  } catch {
    // storage quota exceeded — trim oldest
    const trimmed = scenarios.slice(-MAX_SCENARIOS)
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed)) } catch {}
  }
}

// Singleton state shared across components in the same page
const scenarios = ref<Scenario[]>([])
let initialized = false

export function useScenarios() {
  if (!initialized && typeof window !== 'undefined') {
    scenarios.value = loadFromStorage()
    initialized = true
  }

  function saveScenario(
    calculator: string,
    name: string,
    results: ScenarioResult
  ): Scenario {
    const scenario: Scenario = {
      id:         `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      name:       name || `Scenario ${scenarios.value.length + 1}`,
      calculator,
      savedAt:    Date.now(),
      results,
    }
    scenarios.value = [scenario, ...scenarios.value].slice(0, MAX_SCENARIOS)
    saveToStorage(scenarios.value)
    return scenario
  }

  function updateScenarioName(id: string, newName: string) {
    const idx = scenarios.value.findIndex(s => s.id === id)
    if (idx === -1) return
    scenarios.value[idx] = { ...scenarios.value[idx], name: newName }
    scenarios.value = [...scenarios.value]
    saveToStorage(scenarios.value)
  }

  function removeScenario(id: string) {
    scenarios.value = scenarios.value.filter(s => s.id !== id)
    saveToStorage(scenarios.value)
  }

  function clearAll() {
    scenarios.value = []
    saveToStorage([])
  }

  function scenariosForCalculator(calculator: string) {
    return computed(() => scenarios.value.filter(s => s.calculator === calculator))
  }

  return {
    scenarios: computed(() => scenarios.value),
    saveScenario,
    updateScenarioName,
    removeScenario,
    clearAll,
    scenariosForCalculator,
  }
}
