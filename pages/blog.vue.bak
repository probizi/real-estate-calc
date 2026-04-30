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
            <NuxtLink to="/blog"        class="font-medium text-sm transition" style="color: #f59e0b;">Blog</NuxtLink>
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
          <li class="text-gray-700 font-semibold">Blog</li>
        </ol>
      </div>
    </div>

    <!-- HERO -->
    <section class="relative overflow-hidden text-white py-14 px-4" style="background: linear-gradient(135deg, #1e3a5f 0%, #16304f 50%, #0f2540 100%);">
      <div class="max-w-[1100px] mx-auto">
        <h1 class="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">Blog</h1>
        <p class="text-blue-100 text-lg max-w-2xl leading-relaxed">
          Real estate investing guides, market analysis, and calculator walkthroughs — coming soon.
        </p>
      </div>
    </section>

    <!-- MAIN -->
    <main class="max-w-[1100px] mx-auto px-4 py-16">
      <div class="max-w-2xl mx-auto text-center">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-12">
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style="background: #1e3a5f20;">
            <svg class="w-8 h-8" fill="none" stroke="#1e3a5f" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
          </div>
          <h2 class="text-2xl font-extrabold mb-4" style="color: #1e3a5f;">Coming Soon</h2>
          <p class="text-gray-500 leading-relaxed mb-8">
            We're working on in-depth articles covering cap rate analysis, DSCR lending, BRRRR strategy, fix &amp; flip
            underwriting, and more. In the meantime, explore our free calculators to analyze your deals right now.
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
  title: 'Blog — RealCalc Real Estate Investing Guides',
  meta: [
    { name: 'description', content: 'Real estate investing guides, market analysis, and calculator walkthroughs from RealCalc. Coming soon.' },
    { property: 'og:title', content: 'Blog — RealCalc' },
    { property: 'og:description', content: 'Real estate investing guides and market analysis — coming soon.' },
  ]
})
</script>
