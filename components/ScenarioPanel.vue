<template>
  <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

    <!-- Header -->
    <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style="background: rgba(245,158,11,0.12);">
          <svg class="w-4 h-4" style="color: #f59e0b;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
          </svg>
        </div>
        <div>
          <h3 class="font-bold text-gray-900 text-sm leading-tight">Saved Scenarios</h3>
          <p class="text-xs text-gray-400 leading-tight">
            {{ localScenarios.length }}/{{ MAX }} saved
            <span v-if="localScenarios.length > 0"> · <NuxtLink to="/compare-deals" class="underline hover:text-gray-600 transition">Compare all</NuxtLink></span>
          </p>
        </div>
      </div>

      <!-- Save Button -->
      <div class="flex items-center gap-2">
        <button v-if="hasResult" @click="openSave"
          :disabled="saving"
          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs transition hover:opacity-90 disabled:opacity-60"
          style="background: #1e3a5f; color: white;">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/>
          </svg>
          Save Scenario
        </button>
        <button v-if="localScenarios.length > 0" @click="confirmClear"
          class="p-2 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition"
          title="Clear all scenarios for this calculator">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Save Name Modal (inline) -->
    <Transition name="slide-down">
      <div v-if="showSaveForm" class="px-6 py-4 border-b border-gray-100 bg-amber-50">
        <p class="text-xs font-semibold text-gray-700 mb-2">Name this scenario</p>
        <div class="flex gap-2">
          <input v-model="scenarioName" type="text"
            :placeholder="defaultName"
            maxlength="60"
            @keydown.enter="confirmSave"
            @keydown.esc="showSaveForm = false"
            autofocus
            class="flex-1 px-3 py-2 rounded-xl border border-yellow-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-900 font-medium text-sm transition bg-white" />
          <button @click="confirmSave"
            class="px-4 py-2 rounded-xl font-bold text-xs transition hover:opacity-90"
            style="background: #f59e0b; color: #1e3a5f;">
            Save
          </button>
          <button @click="showSaveForm = false"
            class="px-3 py-2 rounded-xl font-bold text-xs text-gray-500 hover:bg-gray-100 transition">
            Cancel
          </button>
        </div>
      </div>
    </Transition>

    <!-- Empty State -->
    <div v-if="localScenarios.length === 0 && !showSaveForm"
      class="px-6 py-8 text-center">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
        style="background: #f8fafc;">
        <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
        </svg>
      </div>
      <p class="text-sm font-semibold text-gray-400">No saved scenarios yet</p>
      <p class="text-xs text-gray-400 mt-1">
        {{ hasResult ? 'Click "Save Scenario" to bookmark this analysis.' : 'Fill in the calculator above, then save your first scenario.' }}
      </p>
    </div>

    <!-- Scenario List -->
    <div v-else class="divide-y divide-gray-50">
      <TransitionGroup name="list">
        <div v-for="s in localScenarios" :key="s.id"
          class="px-6 py-4 flex items-center gap-4 hover:bg-gray-50 transition group">

          <!-- Color dot based on badge -->
          <div class="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-0.5"
            :style="`background: ${badgeColor(s.results.badgeLabel)}`"></div>

          <!-- Info -->
          <div class="flex-1 min-w-0">
            <!-- Name (editable) -->
            <div v-if="editingId !== s.id" class="flex items-center gap-1.5 mb-0.5">
              <span class="font-semibold text-gray-900 text-sm truncate">{{ s.name }}</span>
              <button @click="startEdit(s)"
                class="opacity-0 group-hover:opacity-100 transition p-0.5 rounded text-gray-400 hover:text-gray-600"
                title="Rename">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
              </button>
            </div>
            <div v-else class="flex items-center gap-1.5 mb-0.5">
              <input v-model="editName"
                @keydown.enter="saveEdit(s.id)"
                @keydown.esc="editingId = null"
                @blur="saveEdit(s.id)"
                class="flex-1 px-2 py-0.5 rounded-lg border border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-sm font-semibold text-gray-900"
                maxlength="60" />
            </div>

            <!-- Metrics row -->
            <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span class="text-xs font-bold" :style="`color: ${badgeColor(s.results.badgeLabel)}`">
                {{ s.results.primaryMetric }}: {{ s.results.primaryValue }}
              </span>
              <span v-if="s.results.badgeLabel"
                class="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                :style="`background: ${badgeColor(s.results.badgeLabel)}`">
                {{ s.results.badgeLabel }}
              </span>
              <span v-if="s.results.purchasePrice" class="text-xs text-gray-400">
                {{ formatCurrency(s.results.purchasePrice) }}
              </span>
              <span v-if="s.results.noi" class="text-xs text-gray-400">
                NOI {{ formatCurrency(s.results.noi) }}
              </span>
            </div>
            <p class="text-xs text-gray-400 mt-0.5">{{ formatDate(s.savedAt) }}</p>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-1 flex-shrink-0">
            <NuxtLink :to="`/compare-deals?ids=${s.id}`"
              class="opacity-0 group-hover:opacity-100 transition p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50"
              title="Compare">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </NuxtLink>
            <button @click="remove(s.id)"
              class="opacity-0 group-hover:opacity-100 transition p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50"
              title="Delete">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </button>
          </div>

        </div>
      </TransitionGroup>
    </div>

    <!-- Footer CTA (when ≥2 scenarios) -->
    <div v-if="localScenarios.length >= 2" class="px-6 py-4 border-t border-gray-100" style="background: #f8fafc;">
      <NuxtLink to="/compare-deals"
        class="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
        style="background: #1e3a5f; color: white;">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
        Compare All {{ localScenarios.length }} Deals Side by Side
      </NuxtLink>
    </div>

    <!-- Clear Confirm Dialog -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="showClearConfirm"
          class="fixed inset-0 z-[9998] flex items-center justify-center px-4"
          @click.self="showClearConfirm = false">
          <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <div class="relative bg-white rounded-2xl shadow-xl p-6 max-w-xs w-full">
            <h4 class="font-extrabold text-gray-900 mb-2">Clear all scenarios?</h4>
            <p class="text-sm text-gray-500 mb-4">
              This will permanently delete all {{ localScenarios.length }} saved scenarios for this calculator.
            </p>
            <div class="flex gap-2">
              <button @click="doClear"
                class="flex-1 py-2.5 rounded-xl font-bold text-sm text-white transition hover:opacity-90"
                style="background: #ef4444;">
                Delete All
              </button>
              <button @click="showClearConfirm = false"
                class="flex-1 py-2.5 rounded-xl font-bold text-sm text-gray-600 border border-gray-200 hover:bg-gray-50 transition">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup lang="ts">
import type { ScenarioResult } from '~/composables/useScenarios'

interface Props {
  calculator:   string
  hasResult:    boolean
  result?:      ScenarioResult
  triggerSave?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{ saved: [id: string] }>()

const MAX = 20

const { scenariosForCalculator, saveScenario, removeScenario, updateScenarioName, clearAll } = useScenarios()
const localScenarios = scenariosForCalculator(props.calculator)

// ── Save flow ──────────────────────────────────────────────────────────────
const showSaveForm = ref(false)
const scenarioName = ref('')
const saving = ref(false)

// Allow parent to trigger save form via prop
watch(() => props.triggerSave, (val) => {
  if (val && props.hasResult) openSave()
})

const defaultName = computed(() => {
  const n = localScenarios.value.length + 1
  const now = new Date()
  const d = `${now.getMonth() + 1}/${now.getDate()}`
  return `Scenario ${n} · ${d}`
})

function openSave() {
  scenarioName.value = ''
  showSaveForm.value = true
}

function confirmSave() {
  if (!props.result) { showSaveForm.value = false; return }
  const name = scenarioName.value.trim() || defaultName.value
  const s = saveScenario(props.calculator, name, props.result)
  showSaveForm.value = false
  scenarioName.value = ''
  emit('saved', s.id)
}

// ── Rename flow ────────────────────────────────────────────────────────────
const editingId = ref<string | null>(null)
const editName  = ref('')

function startEdit(s: { id: string; name: string }) {
  editingId.value = s.id
  editName.value  = s.name
}

function saveEdit(id: string) {
  if (editName.value.trim()) updateScenarioName(id, editName.value.trim())
  editingId.value = null
}

// ── Delete ─────────────────────────────────────────────────────────────────
function remove(id: string) {
  removeScenario(id)
}

// ── Clear all ──────────────────────────────────────────────────────────────
const showClearConfirm = ref(false)

function confirmClear() { showClearConfirm.value = true }

function doClear() {
  // Only clear for this calculator by removing one by one
  localScenarios.value.forEach(s => removeScenario(s.id))
  showClearConfirm.value = false
}

// ── Helpers ────────────────────────────────────────────────────────────────
function badgeColor(label?: string) {
  if (label === 'Good') return '#10b981'
  if (label === 'Average') return '#f59e0b'
  if (label === 'Poor') return '#ef4444'
  return '#6b7280'
}

function formatCurrency(n?: number) {
  if (!n) return ''
  if (Math.abs(n) >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (Math.abs(n) >= 1_000)     return `$${(n / 1_000).toFixed(0)}K`
  return `$${n.toFixed(0)}`
}

function formatDate(ts: number) {
  return new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
</script>

<style scoped>
.slide-down-enter-active, .slide-down-leave-active { transition: all 0.2s ease; }
.slide-down-enter-from, .slide-down-leave-to       { opacity: 0; max-height: 0; padding-top: 0; padding-bottom: 0; }
.slide-down-enter-to, .slide-down-leave-from       { opacity: 1; max-height: 200px; }

.list-enter-active, .list-leave-active { transition: all 0.25s ease; }
.list-enter-from, .list-leave-to       { opacity: 0; transform: translateX(-12px); }

.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.15s ease; }
.modal-fade-enter-from, .modal-fade-leave-to       { opacity: 0; }
</style>
