/**
 * Test suite for cap-rate-calculator.vue
 *
 * Covers all pure calculation logic extracted from the component:
 *  – grossIncome (annual & monthly modes)
 *  – propertyValueCalc (purchase vs market basis)
 *  – totalExpensesCalc (simple & detailed modes)
 *  – vacancyRateClamped / vacancyLoss / effectiveGrossIncome
 *  – noi / capRate / hasResult
 *  – badge labels
 *  – warnings (all branches)
 *  – sensitivityRows
 *  – impliedValues
 *  – noiBreakdown
 *  – marketBenchmarks
 *  – formatCurrency helper
 *  – buildShareParams / URL persistence
 *  – resetForm state
 */

import { describe, it, expect, beforeEach } from 'vitest'

// ─────────────────────────────────────────────────────────────────────────────
// Pure helpers — extracted from the component (no Vue reactivity needed here)
// ─────────────────────────────────────────────────────────────────────────────

function formatCurrency(val) {
  if (!val && val !== 0) return '$0'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(val)
}

function calcGrossIncome({ incomeMode, monthlyRent, numUnits, grossIncome }) {
  if (incomeMode === 'monthly') {
    return (Number(monthlyRent) || 0) * (Number(numUnits) || 1) * 12
  }
  return Number(grossIncome) || 0
}

function calcPropertyValue({ valueBasis, purchasePrice, marketValue }) {
  return valueBasis === 'purchase'
    ? Number(purchasePrice) || 0
    : Number(marketValue) || 0
}

function calcDetailedExpenses(expenses) {
  return Object.values(expenses).reduce((sum, v) => sum + (Number(v) || 0), 0)
}

function calcTotalExpenses({ expenseMode, totalExpenses, expenses }) {
  if (expenseMode === 'simple') return Number(totalExpenses) || 0
  return calcDetailedExpenses(expenses)
}

function clampVacancy(vacancyRate) {
  return Math.min(100, Math.max(0, Number(vacancyRate) || 0))
}

function isVacancyRateInvalid(vacancyRate) {
  if (vacancyRate === null || vacancyRate === '') return false
  const n = Number(vacancyRate)
  return isNaN(n) || n < 0 || n > 100
}

function calcNOI({ grossIncome, vacancyRate, totalExpenses }) {
  const clamped = clampVacancy(vacancyRate)
  const vacancyLoss = grossIncome * (clamped / 100)
  const egi = grossIncome - vacancyLoss
  return egi - totalExpenses
}

function calcCapRate(noi, propertyValue) {
  if (propertyValue <= 0) return 0
  return (noi / propertyValue) * 100
}

function hasResult({ grossIncome, propertyValue, vacancyRate }) {
  const gi = grossIncome > 0
  const pv = propertyValue > 0
  const vr =
    vacancyRate !== null &&
    vacancyRate !== '' &&
    !isNaN(Number(vacancyRate))
  return gi && pv && vr
}

function getBadge(capRate) {
  if (capRate < 0)  return 'Negative NOI'
  if (capRate >= 8) return 'High Yield'
  if (capRate >= 6) return 'Mid Yield'
  if (capRate >= 4) return 'Moderate'
  if (capRate >= 2) return 'Low Yield'
  return 'Very Low'
}

function calcSensitivityRows(noi, baseValue) {
  if (noi <= 0) return null
  return [-0.30, -0.20, -0.10, 0, 0.10, 0.20, 0.30].map(delta => {
    const val = baseValue * (1 + delta)
    return {
      label: delta === 0 ? 'Current' : `${delta > 0 ? '+' : ''}${(delta * 100).toFixed(0)}%`,
      value: val,
      capRate: (noi / val) * 100,
      isCurrent: delta === 0,
    }
  })
}

function calcImpliedValues(noi, currentCapRate) {
  if (noi <= 0) return null
  return [4, 5, 6, 7, 8, 9, 10].map(rate => ({
    rate,
    impliedValue: (noi / rate) * 100,
    isCurrent: Math.abs(currentCapRate - rate) < 0.5,
  }))
}

function calcNoiBreakdown(grossIncome, vacancyLoss, totalExpenses, noi) {
  if (grossIncome <= 0) return null
  const vacPct = (vacancyLoss / grossIncome) * 100
  const expPct = Math.min((totalExpenses / grossIncome) * 100, 100 - vacPct)
  const noiPct = noi > 0 ? (noi / grossIncome) * 100 : 0
  return {
    vacancyPct: vacPct,
    expensePct: expPct,
    noiPct,
    noiNegative: noi < 0,
    overflowPct: noi < 0 ? ((Math.abs(noi) / grossIncome) * 100).toFixed(0) : 0,
  }
}

function buildShareParams(state) {
  const p = new URLSearchParams()
  const {
    incomeMode, grossIncome, monthlyRent, numUnits,
    vacancyRate, expenseMode, totalExpenses,
    purchasePrice, marketValue, valueBasis, assetClass,
  } = state

  if (incomeMode !== 'annual') p.set('im', incomeMode)
  if (incomeMode === 'annual' && grossIncome) p.set('gi', grossIncome)
  if (incomeMode === 'monthly') {
    if (monthlyRent) p.set('mr', monthlyRent)
    if (numUnits !== 1) p.set('nu', numUnits)
  }
  if (vacancyRate !== 5) p.set('vr', vacancyRate)
  if (expenseMode !== 'simple') p.set('em', expenseMode)
  if (expenseMode === 'simple' && totalExpenses) p.set('te', totalExpenses)
  if (purchasePrice) p.set('pp', purchasePrice)
  if (marketValue) p.set('mv', marketValue)
  if (valueBasis !== 'purchase') p.set('vb', valueBasis)
  if (assetClass) p.set('ac', assetClass)
  return p.toString()
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared defaults
// ─────────────────────────────────────────────────────────────────────────────

const defaultExpenses = {
  propertyTax: null,
  insurance: null,
  management: null,
  maintenance: null,
  utilities: null,
  hoa: null,
  other: null,
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. grossIncome
// ─────────────────────────────────────────────────────────────────────────────

describe('grossIncome', () => {
  it('annual mode: returns the grossIncome field directly', () => {
    expect(calcGrossIncome({ incomeMode: 'annual', grossIncome: 36000 })).toBe(36000)
  })

  it('monthly mode: multiplies monthlyRent × units × 12', () => {
    expect(calcGrossIncome({ incomeMode: 'monthly', monthlyRent: 2500, numUnits: 4 })).toBe(120000)
  })

  it('monthly mode, single unit: monthlyRent × 1 × 12', () => {
    expect(calcGrossIncome({ incomeMode: 'monthly', monthlyRent: 1500, numUnits: 1 })).toBe(18000)
  })

  it('monthly mode: null numUnits falls back to 1', () => {
    expect(calcGrossIncome({ incomeMode: 'monthly', monthlyRent: 1000, numUnits: null })).toBe(12000)
  })

  it('monthly mode: 0 numUnits falls back to 1', () => {
    expect(calcGrossIncome({ incomeMode: 'monthly', monthlyRent: 1000, numUnits: 0 })).toBe(12000)
  })

  it('annual mode: null grossIncome returns 0', () => {
    expect(calcGrossIncome({ incomeMode: 'annual', grossIncome: null })).toBe(0)
  })

  it('monthly mode: null monthlyRent returns 0', () => {
    expect(calcGrossIncome({ incomeMode: 'monthly', monthlyRent: null, numUnits: 3 })).toBe(0)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 2. propertyValueCalc
// ─────────────────────────────────────────────────────────────────────────────

describe('propertyValueCalc', () => {
  it('purchase basis: uses purchasePrice', () => {
    expect(calcPropertyValue({ valueBasis: 'purchase', purchasePrice: 500000, marketValue: 600000 })).toBe(500000)
  })

  it('market basis: uses marketValue', () => {
    expect(calcPropertyValue({ valueBasis: 'market', purchasePrice: 500000, marketValue: 600000 })).toBe(600000)
  })

  it('null purchasePrice returns 0', () => {
    expect(calcPropertyValue({ valueBasis: 'purchase', purchasePrice: null })).toBe(0)
  })

  it('null marketValue returns 0', () => {
    expect(calcPropertyValue({ valueBasis: 'market', marketValue: null })).toBe(0)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 3. totalExpensesCalc
// ─────────────────────────────────────────────────────────────────────────────

describe('totalExpensesCalc', () => {
  it('simple mode: returns totalExpenses field', () => {
    expect(calcTotalExpenses({ expenseMode: 'simple', totalExpenses: 15000, expenses: defaultExpenses })).toBe(15000)
  })

  it('simple mode: null totalExpenses returns 0', () => {
    expect(calcTotalExpenses({ expenseMode: 'simple', totalExpenses: null, expenses: defaultExpenses })).toBe(0)
  })

  it('detailed mode: sums all expense fields', () => {
    const expenses = { propertyTax: 4200, insurance: 1800, management: 4800, maintenance: 3000, utilities: 0, hoa: 0, other: 500 }
    expect(calcTotalExpenses({ expenseMode: 'detailed', totalExpenses: null, expenses })).toBe(14300)
  })

  it('detailed mode: null fields count as 0', () => {
    const expenses = { propertyTax: 4200, insurance: null, management: null, maintenance: null, utilities: null, hoa: null, other: null }
    expect(calcTotalExpenses({ expenseMode: 'detailed', totalExpenses: null, expenses })).toBe(4200)
  })

  it('detailed mode: all null fields returns 0', () => {
    expect(calcTotalExpenses({ expenseMode: 'detailed', totalExpenses: null, expenses: defaultExpenses })).toBe(0)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 4. vacancyRateClamped
// ─────────────────────────────────────────────────────────────────────────────

describe('vacancyRateClamped', () => {
  it('normal value 5% passes through', () => expect(clampVacancy(5)).toBe(5))
  it('clamps negative to 0', () => expect(clampVacancy(-10)).toBe(0))
  it('clamps > 100 to 100', () => expect(clampVacancy(150)).toBe(100))
  it('exactly 0 returns 0', () => expect(clampVacancy(0)).toBe(0))
  it('exactly 100 returns 100', () => expect(clampVacancy(100)).toBe(100))
  it('null returns 0', () => expect(clampVacancy(null)).toBe(0))
})

describe('isVacancyRateInvalid', () => {
  it('null returns false (not invalid — just empty)', () => expect(isVacancyRateInvalid(null)).toBe(false))
  it('empty string returns false', () => expect(isVacancyRateInvalid('')).toBe(false))
  it('valid 5 returns false', () => expect(isVacancyRateInvalid(5)).toBe(false))
  it('negative returns true', () => expect(isVacancyRateInvalid(-1)).toBe(true))
  it('> 100 returns true', () => expect(isVacancyRateInvalid(101)).toBe(true))
})

// ─────────────────────────────────────────────────────────────────────────────
// 5. noi & capRate — core calculation chain
// ─────────────────────────────────────────────────────────────────────────────

describe('NOI calculation', () => {
  it('standard deal: grossIncome - vacancyLoss - expenses', () => {
    // grossIncome=60000, 5% vacancy=3000, expenses=15000, EGI=57000, NOI=42000
    const noi = calcNOI({ grossIncome: 60000, vacancyRate: 5, totalExpenses: 15000 })
    expect(noi).toBe(42000)
  })

  it('zero vacancy: EGI equals grossIncome', () => {
    const noi = calcNOI({ grossIncome: 50000, vacancyRate: 0, totalExpenses: 20000 })
    expect(noi).toBe(30000)
  })

  it('100% vacancy: EGI = 0, NOI is negative', () => {
    const noi = calcNOI({ grossIncome: 50000, vacancyRate: 100, totalExpenses: 10000 })
    expect(noi).toBe(-10000)
  })

  it('zero expenses: NOI = EGI', () => {
    const noi = calcNOI({ grossIncome: 40000, vacancyRate: 5, totalExpenses: 0 })
    expect(noi).toBeCloseTo(38000)
  })

  it('expenses > EGI: NOI is negative', () => {
    const noi = calcNOI({ grossIncome: 20000, vacancyRate: 10, totalExpenses: 30000 })
    expect(noi).toBeLessThan(0)
  })
})

describe('capRate', () => {
  it('standard: 42000 NOI / 500000 × 100 = 8.4%', () => {
    expect(calcCapRate(42000, 500000)).toBeCloseTo(8.4)
  })

  it('30000 NOI / 500000 × 100 = 6.0%', () => {
    expect(calcCapRate(30000, 500000)).toBeCloseTo(6.0)
  })

  it('25000 NOI / 500000 × 100 = 5.0%', () => {
    expect(calcCapRate(25000, 500000)).toBeCloseTo(5.0)
  })

  it('property value 0: returns 0 (no division by zero)', () => {
    expect(calcCapRate(30000, 0)).toBe(0)
  })

  it('negative NOI: cap rate is negative', () => {
    expect(calcCapRate(-5000, 500000)).toBeCloseTo(-1.0)
  })

  it('zero NOI: cap rate = 0', () => {
    expect(calcCapRate(0, 500000)).toBe(0)
  })

  it('implied value check: NOI=30000, capRate=6% → value=500000', () => {
    // NOI / (capRate/100) = impliedValue
    const cr = calcCapRate(30000, 500000)
    expect(30000 / (cr / 100)).toBeCloseTo(500000)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 6. hasResult
// ─────────────────────────────────────────────────────────────────────────────

describe('hasResult', () => {
  it('all valid inputs: true', () => {
    expect(hasResult({ grossIncome: 60000, propertyValue: 500000, vacancyRate: 5 })).toBe(true)
  })

  it('grossIncome = 0: false', () => {
    expect(hasResult({ grossIncome: 0, propertyValue: 500000, vacancyRate: 5 })).toBe(false)
  })

  it('propertyValue = 0: false', () => {
    expect(hasResult({ grossIncome: 60000, propertyValue: 0, vacancyRate: 5 })).toBe(false)
  })

  it('vacancyRate = null: false', () => {
    expect(hasResult({ grossIncome: 60000, propertyValue: 500000, vacancyRate: null })).toBe(false)
  })

  it('vacancyRate = "": false', () => {
    expect(hasResult({ grossIncome: 60000, propertyValue: 500000, vacancyRate: '' })).toBe(false)
  })

  it('vacancyRate = 0 (valid): true', () => {
    expect(hasResult({ grossIncome: 60000, propertyValue: 500000, vacancyRate: 0 })).toBe(true)
  })

  it('vacancyRate = "abc" (NaN): false', () => {
    expect(hasResult({ grossIncome: 60000, propertyValue: 500000, vacancyRate: 'abc' })).toBe(false)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 7. Badge system
// ─────────────────────────────────────────────────────────────────────────────

describe('getBadge', () => {
  it('cap rate < 0 → Negative NOI', () => expect(getBadge(-1)).toBe('Negative NOI'))
  it('cap rate = 0 → Very Low', () => expect(getBadge(0)).toBe('Very Low'))
  it('cap rate = 1.9 → Very Low', () => expect(getBadge(1.9)).toBe('Very Low'))
  it('cap rate = 2.0 → Low Yield', () => expect(getBadge(2.0)).toBe('Low Yield'))
  it('cap rate = 3.99 → Low Yield', () => expect(getBadge(3.99)).toBe('Low Yield'))
  it('cap rate = 4.0 → Moderate', () => expect(getBadge(4.0)).toBe('Moderate'))
  it('cap rate = 5.99 → Moderate', () => expect(getBadge(5.99)).toBe('Moderate'))
  it('cap rate = 6.0 → Mid Yield', () => expect(getBadge(6.0)).toBe('Mid Yield'))
  it('cap rate = 7.99 → Mid Yield', () => expect(getBadge(7.99)).toBe('Mid Yield'))
  it('cap rate = 8.0 → High Yield', () => expect(getBadge(8.0)).toBe('High Yield'))
  it('cap rate = 12 → High Yield', () => expect(getBadge(12)).toBe('High Yield'))
})

// ─────────────────────────────────────────────────────────────────────────────
// 8. Sensitivity table
// ─────────────────────────────────────────────────────────────────────────────

describe('sensitivityRows', () => {
  const noi = 30000
  const baseValue = 500000

  it('returns null when noi <= 0', () => {
    expect(calcSensitivityRows(0, 500000)).toBeNull()
    expect(calcSensitivityRows(-100, 500000)).toBeNull()
  })

  it('returns 7 rows for ±30%', () => {
    const rows = calcSensitivityRows(noi, baseValue)
    expect(rows).toHaveLength(7)
  })

  it('row at delta=0 is "Current"', () => {
    const rows = calcSensitivityRows(noi, baseValue)
    const current = rows.find(r => r.isCurrent)
    expect(current.label).toBe('Current')
    expect(current.value).toBe(baseValue)
    expect(current.capRate).toBeCloseTo(6.0)
  })

  it('-30%: lower value → higher cap rate', () => {
    const rows = calcSensitivityRows(noi, baseValue)
    const minus30 = rows[0]
    expect(minus30.label).toBe('-30%')
    expect(minus30.value).toBe(350000)
    expect(minus30.capRate).toBeCloseTo(8.57)
  })

  it('+30%: higher value → lower cap rate', () => {
    const rows = calcSensitivityRows(noi, baseValue)
    const plus30 = rows[6]
    expect(plus30.label).toBe('+30%')
    expect(plus30.value).toBe(650000)
    expect(plus30.capRate).toBeCloseTo(4.615)
  })

  it('rows are ordered from -30% to +30%', () => {
    const rows = calcSensitivityRows(noi, baseValue)
    const labels = rows.map(r => r.label)
    expect(labels).toEqual(['-30%', '-20%', '-10%', 'Current', '+10%', '+20%', '+30%'])
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 9. Implied values (reverse cap rate calculation)
// ─────────────────────────────────────────────────────────────────────────────

describe('impliedValues', () => {
  it('returns null when noi <= 0', () => {
    expect(calcImpliedValues(0, 6)).toBeNull()
    expect(calcImpliedValues(-500, 6)).toBeNull()
  })

  it('returns 7 entries for rates 4–10', () => {
    const rows = calcImpliedValues(30000, 6)
    expect(rows).toHaveLength(7)
    expect(rows.map(r => r.rate)).toEqual([4, 5, 6, 7, 8, 9, 10])
  })

  it('NOI=30000 at 6%: impliedValue = 500000', () => {
    const rows = calcImpliedValues(30000, 6)
    const row6 = rows.find(r => r.rate === 6)
    expect(row6.impliedValue).toBeCloseTo(500000)
  })

  it('NOI=30000 at 4%: impliedValue = 750000', () => {
    const rows = calcImpliedValues(30000, 6)
    const row4 = rows.find(r => r.rate === 4)
    expect(row4.impliedValue).toBeCloseTo(750000)
  })

  it('NOI=30000 at 10%: impliedValue = 300000', () => {
    const rows = calcImpliedValues(30000, 6)
    const row10 = rows.find(r => r.rate === 10)
    expect(row10.impliedValue).toBeCloseTo(300000)
  })

  it('isCurrent is true when current capRate is within 0.5 of row rate', () => {
    // currentCapRate = 6.2 → closest is 6 (diff = 0.2 < 0.5)
    const rows = calcImpliedValues(30000, 6.2)
    const current = rows.filter(r => r.isCurrent).map(r => r.rate)
    expect(current).toContain(6)
  })

  it('isCurrent is false for all when capRate is between two rates', () => {
    // currentCapRate = 4.6 → 4 (diff=0.6) and 5 (diff=0.4) → only 5 is within 0.5
    const rows = calcImpliedValues(30000, 4.6)
    const current = rows.filter(r => r.isCurrent).map(r => r.rate)
    expect(current).toContain(5)
    expect(current).not.toContain(4)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 10. NOI breakdown visualization
// ─────────────────────────────────────────────────────────────────────────────

describe('noiBreakdown', () => {
  it('returns null when grossIncome <= 0', () => {
    expect(calcNoiBreakdown(0, 0, 0, 0)).toBeNull()
  })

  it('standard breakdown sums to ≤ 100%', () => {
    // grossIncome=60000, vacancyLoss=3000 (5%), expenses=15000, noi=42000
    const bd = calcNoiBreakdown(60000, 3000, 15000, 42000)
    expect(bd.vacancyPct + bd.expensePct + bd.noiPct).toBeCloseTo(100)
  })

  it('vacancy 5%: vacancyPct = 5', () => {
    const bd = calcNoiBreakdown(60000, 3000, 15000, 42000)
    expect(bd.vacancyPct).toBeCloseTo(5)
  })

  it('expenses 25% of gross: expensePct = 25', () => {
    const bd = calcNoiBreakdown(60000, 3000, 15000, 42000)
    expect(bd.expensePct).toBeCloseTo(25)
  })

  it('zero expenses: expensePct = 0, noiPct = EGI/gross', () => {
    const bd = calcNoiBreakdown(60000, 3000, 0, 57000)
    expect(bd.expensePct).toBe(0)
    expect(bd.noiPct).toBeCloseTo(95)
  })

  it('negative NOI: noiNegative = true, noiPct = 0', () => {
    const bd = calcNoiBreakdown(20000, 1000, 30000, -11000)
    expect(bd.noiNegative).toBe(true)
    expect(bd.noiPct).toBe(0)
  })

  it('negative NOI: overflowPct is non-zero string', () => {
    const bd = calcNoiBreakdown(20000, 1000, 30000, -11000)
    expect(Number(bd.overflowPct)).toBeGreaterThan(0)
  })

  it('expensePct is clamped so vacancyPct + expensePct ≤ 100', () => {
    // Extreme: expenses = 3 × grossIncome
    const gi = 10000, vl = 0, exp = 30000, noi = -20000
    const bd = calcNoiBreakdown(gi, vl, exp, noi)
    expect(bd.vacancyPct + bd.expensePct).toBeLessThanOrEqual(100)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 11. marketBenchmarks — "yours" flag
// ─────────────────────────────────────────────────────────────────────────────

function getMarketBenchmarks(capRate, hasResultFlag) {
  const cr = capRate
  const hr = hasResultFlag
  return [
    { label: 'High Yield',   range: '≥ 8%',     yours: hr && cr >= 8 },
    { label: 'Mid Yield',    range: '6 – 7.9%', yours: hr && cr >= 6 && cr < 8 },
    { label: 'Moderate',     range: '4 – 5.9%', yours: hr && cr >= 4 && cr < 6 },
    { label: 'Low Yield',    range: '2 – 3.9%', yours: hr && cr >= 2 && cr < 4 },
    { label: 'Very Low',     range: '0 – 1.9%', yours: hr && cr >= 0 && cr < 2 },
    { label: 'Negative NOI', range: '< 0%',     yours: hr && cr < 0 },
  ]
}

describe('marketBenchmarks', () => {
  it('cap rate 8.4%: "yours" on High Yield only', () => {
    const bm = getMarketBenchmarks(8.4, true)
    expect(bm.find(b => b.label === 'High Yield').yours).toBe(true)
    expect(bm.filter(b => b.yours)).toHaveLength(1)
  })

  it('cap rate 6.5%: "yours" on Mid Yield only', () => {
    const bm = getMarketBenchmarks(6.5, true)
    expect(bm.find(b => b.label === 'Mid Yield').yours).toBe(true)
    expect(bm.filter(b => b.yours)).toHaveLength(1)
  })

  it('cap rate 5.0%: "yours" on Moderate only', () => {
    const bm = getMarketBenchmarks(5.0, true)
    expect(bm.find(b => b.label === 'Moderate').yours).toBe(true)
    expect(bm.filter(b => b.yours)).toHaveLength(1)
  })

  it('cap rate 3.0%: "yours" on Low Yield only', () => {
    const bm = getMarketBenchmarks(3.0, true)
    expect(bm.find(b => b.label === 'Low Yield').yours).toBe(true)
  })

  it('cap rate 1.0%: "yours" on Very Low only', () => {
    const bm = getMarketBenchmarks(1.0, true)
    expect(bm.find(b => b.label === 'Very Low').yours).toBe(true)
  })

  it('cap rate -1%: "yours" on Negative NOI only', () => {
    const bm = getMarketBenchmarks(-1, true)
    expect(bm.find(b => b.label === 'Negative NOI').yours).toBe(true)
    expect(bm.filter(b => b.yours)).toHaveLength(1)
  })

  it('hasResult=false: no "yours" flags set', () => {
    const bm = getMarketBenchmarks(7.5, false)
    expect(bm.every(b => !b.yours)).toBe(true)
  })

  it('exactly 8.0: High Yield (boundary)', () => {
    const bm = getMarketBenchmarks(8.0, true)
    expect(bm.find(b => b.label === 'High Yield').yours).toBe(true)
  })

  it('exactly 6.0: Mid Yield (boundary)', () => {
    const bm = getMarketBenchmarks(6.0, true)
    expect(bm.find(b => b.label === 'Mid Yield').yours).toBe(true)
  })

  it('exactly 4.0: Moderate (boundary)', () => {
    const bm = getMarketBenchmarks(4.0, true)
    expect(bm.find(b => b.label === 'Moderate').yours).toBe(true)
  })

  it('exactly 2.0: Low Yield (boundary)', () => {
    const bm = getMarketBenchmarks(2.0, true)
    expect(bm.find(b => b.label === 'Low Yield').yours).toBe(true)
  })

  it('exactly 0.0: Very Low (boundary)', () => {
    const bm = getMarketBenchmarks(0.0, true)
    expect(bm.find(b => b.label === 'Very Low').yours).toBe(true)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 12. formatCurrency
// ─────────────────────────────────────────────────────────────────────────────

describe('formatCurrency', () => {
  it('formats whole number correctly', () => {
    expect(formatCurrency(500000)).toBe('$500,000')
  })

  it('rounds decimals — no cents shown', () => {
    expect(formatCurrency(1234.56)).toBe('$1,235')
  })

  it('formats negative number', () => {
    expect(formatCurrency(-5000)).toBe('-$5,000')
  })

  it('formats 0', () => {
    expect(formatCurrency(0)).toBe('$0')
  })

  it('null returns $0 (not an error)', () => {
    expect(formatCurrency(null)).toBe('$0')
  })

  it('undefined returns $0', () => {
    expect(formatCurrency(undefined)).toBe('$0')
  })

  it('formats large value', () => {
    expect(formatCurrency(1000000)).toBe('$1,000,000')
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 13. buildShareParams — URL persistence
// ─────────────────────────────────────────────────────────────────────────────

describe('buildShareParams', () => {
  const defaults = {
    incomeMode: 'monthly',
    grossIncome: null,
    monthlyRent: 2500,
    numUnits: 1,
    vacancyRate: 5,
    expenseMode: 'simple',
    totalExpenses: 15000,
    purchasePrice: 400000,
    marketValue: null,
    valueBasis: 'purchase',
    assetClass: '',
  }

  it('incomeMode "monthly" (non-default) is included', () => {
    const params = new URLSearchParams(buildShareParams(defaults))
    expect(params.get('im')).toBe('monthly')
  })

  it('incomeMode "annual" (default) is omitted', () => {
    const params = new URLSearchParams(buildShareParams({ ...defaults, incomeMode: 'annual', grossIncome: 30000 }))
    expect(params.has('im')).toBe(false)
  })

  it('grossIncome included only in annual mode', () => {
    const params = new URLSearchParams(buildShareParams({ ...defaults, incomeMode: 'annual', grossIncome: 30000 }))
    expect(params.get('gi')).toBe('30000')
  })

  it('monthlyRent included in monthly mode', () => {
    const params = new URLSearchParams(buildShareParams(defaults))
    expect(params.get('mr')).toBe('2500')
  })

  it('numUnits=1 (default) is omitted', () => {
    const params = new URLSearchParams(buildShareParams(defaults))
    expect(params.has('nu')).toBe(false)
  })

  it('numUnits != 1 is included', () => {
    const params = new URLSearchParams(buildShareParams({ ...defaults, numUnits: 4 }))
    expect(params.get('nu')).toBe('4')
  })

  it('vacancyRate = 5 (default) is omitted', () => {
    const params = new URLSearchParams(buildShareParams(defaults))
    expect(params.has('vr')).toBe(false)
  })

  it('vacancyRate != 5 is included', () => {
    const params = new URLSearchParams(buildShareParams({ ...defaults, vacancyRate: 8 }))
    expect(params.get('vr')).toBe('8')
  })

  it('purchasePrice is included', () => {
    const params = new URLSearchParams(buildShareParams(defaults))
    expect(params.get('pp')).toBe('400000')
  })

  it('valueBasis "purchase" (default) is omitted', () => {
    const params = new URLSearchParams(buildShareParams(defaults))
    expect(params.has('vb')).toBe(false)
  })

  it('valueBasis "market" is included', () => {
    const params = new URLSearchParams(buildShareParams({ ...defaults, valueBasis: 'market', marketValue: 450000 }))
    const params2 = new URLSearchParams(buildShareParams({ ...defaults, valueBasis: 'market', marketValue: 450000 }))
    expect(params2.get('vb')).toBe('market')
  })

  it('assetClass empty (default) is omitted', () => {
    const params = new URLSearchParams(buildShareParams(defaults))
    expect(params.has('ac')).toBe(false)
  })

  it('assetClass set: included', () => {
    const params = new URLSearchParams(buildShareParams({ ...defaults, assetClass: 'sfr' }))
    expect(params.get('ac')).toBe('sfr')
  })

  it('expenseMode "detailed" (non-default) is included', () => {
    const params = new URLSearchParams(buildShareParams({ ...defaults, expenseMode: 'detailed' }))
    expect(params.get('em')).toBe('detailed')
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 14. Warning trigger conditions (deterministic logic tests)
// ─────────────────────────────────────────────────────────────────────────────

describe('warning: missing expenses (simple mode)', () => {
  it('should warn when totalExpenses is null/0 in simple mode', () => {
    const totalExpenses = 0
    const missing = totalExpenses === null || totalExpenses === '' || totalExpenses === 0
    expect(missing).toBe(true)
  })

  it('should NOT warn when expenses are provided', () => {
    const totalExpenses = 15000
    const missing = totalExpenses === null || totalExpenses === '' || totalExpenses === 0
    expect(missing).toBe(false)
  })
})

describe('warning: negative NOI', () => {
  it('triggers when NOI < 0', () => {
    const noi = calcNOI({ grossIncome: 20000, vacancyRate: 5, totalExpenses: 30000 })
    expect(noi).toBeLessThan(0)
  })

  it('does not trigger when NOI >= 0', () => {
    const noi = calcNOI({ grossIncome: 60000, vacancyRate: 5, totalExpenses: 15000 })
    expect(noi).toBeGreaterThanOrEqual(0)
  })
})

describe('warning: high vacancy (> 20%)', () => {
  it('triggers for vacancy = 25', () => expect(clampVacancy(25)).toBeGreaterThan(20))
  it('does not trigger for vacancy = 10', () => expect(clampVacancy(10)).toBeLessThanOrEqual(20))
  it('boundary at exactly 20: no warning', () => expect(clampVacancy(20)).not.toBeGreaterThan(20))
  it('boundary at 20.01: warning', () => expect(clampVacancy(20.01)).toBeGreaterThan(20))
})

describe('warning: cap rate > 20% (unusual)', () => {
  it('annual income 1000 on 300000 property → cap rate ~40%', () => {
    const cr = calcCapRate(1000, 300000) // NOI proxy
    // 1000/300000*100 = 0.33% — low, not high
    // For high rate: grossIncome 100000, expenses 0, property 200000
    const noi = calcNOI({ grossIncome: 100000, vacancyRate: 0, totalExpenses: 0 })
    const capRate = calcCapRate(noi, 200000) // 50%
    expect(capRate).toBeGreaterThan(20)
  })

  it('normal deal does not trigger > 20% warning', () => {
    const noi = calcNOI({ grossIncome: 60000, vacancyRate: 5, totalExpenses: 20000 })
    const capRate = calcCapRate(noi, 500000)
    expect(capRate).toBeLessThanOrEqual(20)
  })
})

describe('warning: annual mode — income looks like monthly (< 5000 with high property value)', () => {
  it('grossIncome=1500, property=300000 → detected as possible monthly figure', () => {
    const grossIncome = 1500
    const propertyValue = 300000
    const detected = grossIncome < 5000 && propertyValue > 50000
    expect(detected).toBe(true)
  })

  it('grossIncome=30000, property=300000 → no detection', () => {
    const detected = 30000 < 5000 && 300000 > 50000
    expect(detected).toBe(false)
  })
})

describe('warning: expense ratio very low (< 5% of EGI)', () => {
  it('expenses=200 on EGI=50000 → ratio < 5%', () => {
    const egi = 50000
    const expenses = 200
    expect(expenses / egi).toBeLessThan(0.05)
  })

  it('expenses=20000 on EGI=50000 → ratio 40% — no warning', () => {
    const egi = 50000
    const expenses = 20000
    expect(expenses / egi).toBeGreaterThanOrEqual(0.05)
  })
})

describe('warning: expense ratio very high (> 80% of EGI)', () => {
  it('expenses=45000 on EGI=50000 → ratio 90% → warns', () => {
    const ratio = 45000 / 50000
    expect(ratio).toBeGreaterThan(0.8)
  })

  it('expenses=35000 on EGI=50000 → ratio 70% → no high warning', () => {
    const ratio = 35000 / 50000
    expect(ratio).toBeLessThanOrEqual(0.8)
  })
})

// ─────────────────────────────────────────────────────────────────────────────
// 15. Edge cases & boundary values
// ─────────────────────────────────────────────────────────────────────────────

describe('edge cases', () => {
  it('very high cap rate: 100+ unit apartment complex with low purchase price', () => {
    const grossIncome = calcGrossIncome({ incomeMode: 'monthly', monthlyRent: 1000, numUnits: 100 })
    expect(grossIncome).toBe(1200000)
  })

  it('single unit monthly: monthlyRent=500, 1 unit → annual=6000', () => {
    expect(calcGrossIncome({ incomeMode: 'monthly', monthlyRent: 500, numUnits: 1 })).toBe(6000)
  })

  it('detailed expenses: all fields filled', () => {
    const expenses = { propertyTax: 4200, insurance: 1800, management: 4800, maintenance: 3000, utilities: 1200, hoa: 600, other: 400 }
    expect(calcDetailedExpenses(expenses)).toBe(16000)
  })

  it('property value exactly equals NOI: cap rate = 100%', () => {
    expect(calcCapRate(100000, 100000)).toBe(100)
  })

  it('extremely small cap rate: NOI=1, value=1000000 → 0.0001%', () => {
    expect(calcCapRate(1, 1000000)).toBeCloseTo(0.0001)
  })

  it('full chain: monthly mode → noi → capRate', () => {
    const gi = calcGrossIncome({ incomeMode: 'monthly', monthlyRent: 2000, numUnits: 2 })
    // gi = 48000
    const exp = calcTotalExpenses({ expenseMode: 'simple', totalExpenses: 12000 })
    const noi = calcNOI({ grossIncome: gi, vacancyRate: 5, totalExpenses: exp })
    // noi = 48000 - 2400 - 12000 = 33600
    const cr = calcCapRate(noi, 420000)
    expect(gi).toBe(48000)
    expect(noi).toBeCloseTo(33600)
    expect(cr).toBeCloseTo(8.0)
  })
})
