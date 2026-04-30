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
            <a href="/blog/"        class="text-gray-600 hover:text-gray-900 font-medium text-sm transition">Blog</a>
          </nav>
          <NuxtLink to="/pricing"
            class="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-lg transition hover:opacity-90"
            style="background: #f59e0b; color: #1e3a5f;">
            Get Started Free
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
          <li class="text-gray-700 font-semibold">About</li>
        </ol>
      </div>
    </div>

    <!-- HERO -->
    <section class="relative overflow-hidden text-white py-14 px-4" style="background: linear-gradient(135deg, #1e3a5f 0%, #16304f 50%, #0f2540 100%);">
      <div class="max-w-[1100px] mx-auto">
        <h1 class="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">About RealCalc</h1>
        <p class="text-blue-100 text-lg max-w-2xl leading-relaxed">
          Free, professional real estate investment calculators built for US investors who make data-driven decisions.
        </p>
      </div>
    </section>

    <!-- MAIN -->
    <main class="max-w-[1100px] mx-auto px-4 sm:px-6 py-12">
      <div class="grid md:grid-cols-3 gap-8">

        <!-- Content -->
        <div class="md:col-span-2 space-y-8">

          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">What We Build</h2>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              RealCalc is a free real estate investment calculator hub built for US investors. We build professional-grade analytical tools that help investors evaluate rental properties, fix-and-flip deals, BRRRR strategies, and more — without spreadsheets or paid software.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">
              Every calculator on RealCalc is built around the same methodology used by professional investors, lenders, and commercial appraisers. We use real 2026 US market benchmarks from sources like CBRE, Fannie Mae, and Freddie Mac to give context to every result.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              All calculators are free to use, require no signup, and work in real time. Results can be exported to PDF for deal analysis, lender submissions, or team sharing.
            </p>
          </div>

          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 class="text-xl font-extrabold mb-4" style="color: #1e3a5f;">Our Approach</h2>
            <div class="space-y-4">
              <div class="flex gap-4">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background: #1e3a5f;">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-800 text-sm mb-1">Accuracy first</p>
                  <p class="text-sm text-gray-600 leading-relaxed">Every formula is based on industry-standard methodology. We document the exact calculation logic in each calculator so you can verify the math yourself.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background: #1e3a5f;">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-800 text-sm mb-1">Real-time results</p>
                  <p class="text-sm text-gray-600 leading-relaxed">Every calculator updates instantly as you type. No submit buttons, no page reloads — just immediate feedback as you adjust inputs.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background: #1e3a5f;">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-800 text-sm mb-1">Context, not just numbers</p>
                  <p class="text-sm text-gray-600 leading-relaxed">Every result includes benchmarks, tier ratings, and market context — so you know not just what the number is, but whether it's good or bad for your market and strategy.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style="background: #1e3a5f;">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-800 text-sm mb-1">Privacy by default</p>
                  <p class="text-sm text-gray-600 leading-relaxed">All calculations run in your browser. We do not store your property data, deal numbers, or inputs on our servers. What you analyze stays on your device.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 class="text-xl font-extrabold mb-3" style="color: #1e3a5f;">Disclaimer</h2>
            <p class="text-gray-600 text-sm leading-relaxed mb-3">
              RealCalc calculators are for informational and educational purposes only. Results are estimates based on the inputs you provide and standard real estate formulas. They are not financial advice, investment recommendations, tax guidance, or legal counsel.
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              Always verify results with a licensed real estate professional, CPA, mortgage professional, or attorney before making any investment decision.
            </p>
          </div>

        </div>

        <!-- Sidebar -->
        <div class="space-y-5">
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 class="font-extrabold mb-4 text-sm uppercase tracking-wider" style="color: #1e3a5f;">Quick Facts</h3>
            <ul class="space-y-3 text-sm text-gray-600">
              <li class="flex justify-between"><span class="text-gray-400">Calculators</span><span class="font-semibold" style="color:#1e3a5f;">10 tools</span></li>
              <li class="flex justify-between"><span class="text-gray-400">Market</span><span class="font-semibold" style="color:#1e3a5f;">US only</span></li>
              <li class="flex justify-between"><span class="text-gray-400">Cost</span><span class="font-semibold text-green-600">Free forever</span></li>
              <li class="flex justify-between"><span class="text-gray-400">Signup required</span><span class="font-semibold text-green-600">No</span></li>
              <li class="flex justify-between"><span class="text-gray-400">PDF export</span><span class="font-semibold text-green-600">Yes</span></li>
              <li class="flex justify-between"><span class="text-gray-400">Data stored</span><span class="font-semibold text-green-600">Never</span></li>
            </ul>
          </div>

          <div class="rounded-2xl p-6 text-white" style="background: #1e3a5f;">
            <h3 class="font-extrabold mb-2 text-sm">Start Analyzing</h3>
            <p class="text-blue-200 text-xs mb-4 leading-relaxed">All calculators are free, instant, and require no signup.</p>
            <NuxtLink to="/calculators"
              class="block text-center text-sm font-bold py-2.5 rounded-xl transition hover:opacity-90"
              style="background: #f59e0b; color: #1e3a5f;">
              Browse All Calculators
            </NuxtLink>
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
useHead({
  title: 'About RealCalc — Free Real Estate Investment Calculators',
  meta: [
    { name: 'description', content: 'RealCalc builds free, professional real estate investment calculators for US investors. Accurate formulas, real-time results, no signup required.' },
    { property: 'og:title', content: 'About RealCalc — Free Real Estate Investment Calculators' },
    { property: 'og:description', content: 'Free professional real estate investment calculators built for US investors. Accurate, instant, no signup required.' },
    { name: 'robots', content: 'index, follow' },
  ]
})
</script>
