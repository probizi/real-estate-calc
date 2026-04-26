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
            <NuxtLink to="/pricing"     class="font-medium text-sm transition" style="color: #f59e0b;">Pricing</NuxtLink>
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
          <li class="text-gray-700 font-semibold">Pricing</li>
        </ol>
      </div>
    </div>

    <!-- HERO -->
    <section class="relative overflow-hidden text-white py-14 px-4" style="background: linear-gradient(135deg, #1e3a5f 0%, #16304f 50%, #0f2540 100%);">
      <div class="max-w-[1100px] mx-auto">
        <h1 class="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">Pricing</h1>
        <p class="text-blue-100 text-lg max-w-2xl leading-relaxed">
          All RealCalc tools are currently free — no signup required.
        </p>
      </div>
    </section>

    <!-- MAIN -->
    <main class="max-w-[1100px] mx-auto px-4 py-16">
      <div class="max-w-2xl mx-auto text-center">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-12">
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style="background: #f59e0b20;">
            <svg class="w-8 h-8" fill="none" stroke="#f59e0b" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">100% Free — Always</h2>
          <p class="text-gray-500 leading-relaxed mb-8">
            Every calculator on RealCalc is free to use with no account required. We believe every investor deserves
            professional-grade tools without paywalls. Premium features are coming soon — early access will be free for existing users.
          </p>
          <NuxtLink to="/calculators"
            class="inline-flex items-center gap-2 text-sm font-bold px-8 py-3 rounded-xl transition hover:opacity-90"
            style="background: #f59e0b; color: #1e3a5f;">
            Browse All Free Calculators
          </NuxtLink>
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
useHead({
  title: 'Pricing — RealCalc Free Real Estate Investment Calculators',
  meta: [
    { name: 'description', content: 'RealCalc calculators are 100% free to use with no signup required. Professional real estate investment tools for US investors.' },
    { property: 'og:title', content: 'Pricing — RealCalc' },
    { property: 'og:description', content: 'All RealCalc tools are free — no signup required.' },
  ]
})
</script>
