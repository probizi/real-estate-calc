<template>
  <!-- Backdrop -->
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="show"
        class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0"
        @click.self="emit('close')">

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true"></div>

        <!-- Panel -->
        <div class="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
          style="background: white;"
          role="dialog" aria-modal="true" aria-labelledby="email-modal-title">

          <!-- Top stripe -->
          <div class="h-1.5 w-full" style="background: linear-gradient(90deg, #1e3a5f 0%, #f59e0b 100%);"></div>

          <!-- Close -->
          <button @click="emit('close')"
            class="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
            aria-label="Close">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Success State -->
          <div v-if="submitted" class="p-8 text-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style="background: rgba(245,158,11,0.12);">
              <svg class="w-8 h-8" style="color: #f59e0b;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h3 class="text-xl font-extrabold mb-2" style="color: #1e3a5f;">You're in!</h3>
            <p class="text-gray-500 text-sm mb-6 leading-relaxed">
              We'll send deal analysis templates, market benchmarks, and calculator tips to <strong>{{ form.email }}</strong>.
            </p>
            <button @click="emit('close')"
              class="w-full py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
              style="background: #1e3a5f; color: white;">
              Continue Analyzing
            </button>
          </div>

          <!-- Form State -->
          <div v-else class="p-6 sm:p-8">
            <!-- Icon + Headline -->
            <div class="flex items-start gap-4 mb-6">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style="background: #1e3a5f;">
                <svg class="w-6 h-6" style="color: #f59e0b;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <div>
                <h2 id="email-modal-title" class="text-lg font-extrabold leading-tight mb-1" style="color: #1e3a5f;">
                  {{ title }}
                </h2>
                <p class="text-sm text-gray-500 leading-relaxed">{{ subtitle }}</p>
              </div>
            </div>

            <!-- Value Props -->
            <div class="grid grid-cols-3 gap-2 mb-6">
              <div v-for="prop in valueProps" :key="prop.text"
                class="flex flex-col items-center gap-1.5 p-2.5 rounded-xl text-center"
                style="background: #f8fafc;">
                <span class="text-lg">{{ prop.icon }}</span>
                <span class="text-xs font-semibold text-gray-600 leading-tight">{{ prop.text }}</span>
              </div>
            </div>

            <!-- Form -->
            <form @submit.prevent="handleSubmit" novalidate>
              <div class="space-y-3">
                <div>
                  <label for="ecm-name" class="block text-xs font-semibold text-gray-600 mb-1">First Name</label>
                  <input id="ecm-name" v-model="form.name" type="text" placeholder="Jordan"
                    autocomplete="given-name"
                    class="w-full px-4 py-2.5 rounded-xl border outline-none text-gray-900 font-medium text-sm transition"
                    :class="errors.name ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20'" />
                  <p v-if="errors.name" class="text-xs text-red-500 mt-1">{{ errors.name }}</p>
                </div>

                <div>
                  <label for="ecm-email" class="block text-xs font-semibold text-gray-600 mb-1">Email Address <span class="text-red-400">*</span></label>
                  <input id="ecm-email" v-model="form.email" type="email" placeholder="you@email.com"
                    autocomplete="email" required
                    class="w-full px-4 py-2.5 rounded-xl border outline-none text-gray-900 font-medium text-sm transition"
                    :class="errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20'" />
                  <p v-if="errors.email" class="text-xs text-red-500 mt-1">{{ errors.email }}</p>
                </div>

                <div>
                  <label for="ecm-market" class="block text-xs font-semibold text-gray-600 mb-1">
                    Primary Market
                    <span class="font-normal text-gray-400">(optional)</span>
                  </label>
                  <select id="ecm-market" v-model="form.market"
                    class="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-gray-700 font-medium text-sm transition bg-white">
                    <option value="">Select state…</option>
                    <option value="CA">California (CA)</option>
                    <option value="TX">Texas (TX)</option>
                    <option value="FL">Florida (FL)</option>
                    <option value="NY">New York (NY)</option>
                    <option value="AZ">Arizona (AZ)</option>
                    <option value="GA">Georgia (GA)</option>
                    <option value="CO">Colorado (CO)</option>
                    <option value="WA">Washington (WA)</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <!-- Error -->
              <p v-if="serverError" class="mt-3 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {{ serverError }}
              </p>

              <!-- Submit -->
              <button type="submit" :disabled="loading"
                class="mt-4 w-full py-3.5 rounded-xl font-bold text-sm transition hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
                style="background: #f59e0b; color: #1e3a5f;">
                <svg v-if="loading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                {{ loading ? 'Saving…' : ctaLabel }}
              </button>

              <p class="text-xs text-center text-gray-400 mt-3">
                No spam. Unsubscribe anytime. Your data is never sold.
              </p>
            </form>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  show:      boolean
  title?:    string
  subtitle?: string
  ctaLabel?: string
  // Pre-fill context (from the current calculator result)
  calculatorName?: string
  primaryResult?:  string
}

const props = withDefaults(defineProps<Props>(), {
  title:      'Save Your Analysis',
  subtitle:   'Get benchmarks, deal tips, and calculator updates delivered to your inbox.',
  ctaLabel:   'Save & Subscribe',
})

const emit = defineEmits<{ close: [] ; captured: [email: string] }>()

const form = reactive({ name: '', email: '', market: '' })
const errors = reactive({ name: '', email: '' })
const loading   = ref(false)
const submitted = ref(false)
const serverError = ref('')

const valueProps = [
  { icon: '📊', text: 'Market benchmarks' },
  { icon: '🎯', text: 'Deal templates' },
  { icon: '⚡', text: 'New calculators' },
]

function validate() {
  errors.name  = ''
  errors.email = ''
  if (!form.email.trim()) { errors.email = 'Email is required.'; return false }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) { errors.email = 'Enter a valid email address.'; return false }
  return true
}

async function handleSubmit() {
  if (!validate()) return
  loading.value = true
  serverError.value = ''
  try {
    await $fetch('/api/email-capture', {
      method: 'POST',
      body: {
        name:       form.name.trim() || null,
        email:      form.email.trim().toLowerCase(),
        market:     form.market || null,
        calculator: props.calculatorName || null,
        result:     props.primaryResult  || null,
        capturedAt: new Date().toISOString(),
      },
    })
    // Mark as captured so the modal doesn't auto-show again
    try { localStorage.setItem('realcalc_email_captured', '1') } catch {}
    submitted.value = true
    emit('captured', form.email.trim().toLowerCase())
  } catch (e: any) {
    serverError.value = e?.data?.message || 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}

// Reset when re-opened
watch(() => props.show, (val) => {
  if (val) {
    submitted.value  = false
    serverError.value = ''
    form.name  = ''
    form.email = ''
    form.market = ''
    errors.name  = ''
    errors.email = ''
  }
})
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active { transition: opacity 0.2s ease; }
.modal-fade-enter-active .relative,
.modal-fade-leave-active .relative { transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease; }
.modal-fade-enter-from,
.modal-fade-leave-to  { opacity: 0; }
.modal-fade-enter-from .relative { transform: translateY(24px) scale(0.97); opacity: 0; }
.modal-fade-leave-to  .relative  { transform: translateY(12px) scale(0.98); opacity: 0; }
</style>
