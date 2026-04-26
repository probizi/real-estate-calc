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
            <NuxtLink to="/pricing"     class="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Pricing</NuxtLink>
            <NuxtLink to="/blog"        class="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Blog</NuxtLink>
          </nav>
          <NuxtLink to="/calculators"
            class="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-lg transition hover:opacity-90"
            style="background: #f59e0b; color: #1e3a5f;">
            Use Free Tools
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- BREADCRUMB -->
    <div class="bg-white border-b border-gray-100 px-4 py-3">
      <div class="max-w-[1100px] mx-auto">
        <ol class="flex items-center gap-2 text-sm text-gray-400">
          <li><NuxtLink to="/" class="hover:text-gray-600 transition">Home</NuxtLink></li>
          <li><span>/</span></li>
          <li class="text-gray-700 font-semibold">Contact</li>
        </ol>
      </div>
    </div>

    <!-- HERO -->
    <section class="relative overflow-hidden text-white py-14 px-4" style="background: linear-gradient(135deg, #1e3a5f 0%, #16304f 50%, #0f2540 100%);">
      <div class="max-w-[1100px] mx-auto">
        <h1 class="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">Contact</h1>
        <p class="text-blue-100 text-lg max-w-2xl leading-relaxed">
          Questions, feedback, or partnership inquiries — we'd love to hear from you.
        </p>
      </div>
    </section>

    <!-- MAIN -->
    <main class="max-w-[1100px] mx-auto px-4 py-16">
      <div class="max-w-2xl mx-auto">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
          <h2 class="text-xl font-extrabold mb-6" style="color: #1e3a5f;">Get in Touch</h2>

          <div class="space-y-5">
            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">Your Name</label>
              <input v-model="form.name" type="text" placeholder="John Smith"
                class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 px-4 py-3 text-sm outline-none transition" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">Email Address</label>
              <input v-model="form.email" type="email" placeholder="john@example.com"
                class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 px-4 py-3 text-sm outline-none transition" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">Message</label>
              <textarea v-model="form.message" rows="5" placeholder="How can we help?"
                class="w-full rounded-xl border-2 border-gray-300 hover:border-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 px-4 py-3 text-sm outline-none transition resize-none"></textarea>
            </div>
            <button
              class="w-full font-bold py-3 rounded-xl transition hover:opacity-90 text-sm"
              style="background: #f59e0b; color: #1e3a5f;">
              Send Message
            </button>
            <p class="text-xs text-gray-400 text-center">We typically respond within 1–2 business days.</p>
          </div>
        </div>
      </div>
    </main>

    <!-- FOOTER -->
    <footer class="mt-8 border-t border-gray-200 bg-white py-8 px-4">
      <div class="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-400">© 2026 RealCalc. For informational purposes only. Not financial advice.</p>
        <div class="flex gap-6">
          <NuxtLink to="/privacy" class="text-sm text-gray-400 hover:text-gray-600 transition">Privacy</NuxtLink>
          <NuxtLink to="/terms"   class="text-sm text-gray-400 hover:text-gray-600 transition">Terms</NuxtLink>
          <NuxtLink to="/contact" class="text-sm text-gray-400 hover:text-gray-600 transition">Contact</NuxtLink>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
const form = reactive({ name: '', email: '', message: '' })

useHead({
  title: 'Contact — RealCalc Real Estate Investment Calculators',
  meta: [
    { name: 'description', content: 'Contact RealCalc with questions, feedback, or partnership inquiries.' },
    { property: 'og:title', content: 'Contact — RealCalc' },
    { property: 'og:description', content: 'Get in touch with the RealCalc team.' },
  ]
})
</script>
