<template>
  <div>
    <label class="block text-xs font-medium text-gray-500 mb-1">{{ label }}</label>
    <div class="relative">
      <span v-if="prefix" class="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">{{ prefix }}</span>
      <input
        :value="modelValue ?? ''"
        @input="emit('update:modelValue', $event.target.value === '' ? null : Number($event.target.value))"
        type="number"
        min="0"
        :placeholder="placeholder"
        class="w-full py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none text-sm font-semibold text-gray-900 transition"
        :class="prefix ? 'pl-6 pr-3' : suffix ? 'pl-3 pr-6' : 'px-3'"
      />
      <span v-if="suffix" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">{{ suffix }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: number | null
  label:       string
  prefix?:     string
  suffix?:     string
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), { placeholder: '0' })
const emit  = defineEmits<{ 'update:modelValue': [v: number | null] }>()
</script>
