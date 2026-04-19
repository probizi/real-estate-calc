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
          <li class="text-gray-700 font-semibold">Terms of Service</li>
        </ol>
      </div>
    </div>

    <!-- MAIN -->
    <main class="max-w-[760px] mx-auto px-4 sm:px-6 py-12">

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-10">

        <h1 class="text-3xl font-extrabold mb-2" style="color: #1e3a5f;">Terms of Service</h1>
        <p class="text-gray-400 text-sm mb-8">Last updated: January 1, 2026</p>

        <div class="prose-sm space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">1. Acceptance of Terms</h2>
            <p>By accessing or using the RealCalc website (realcalc.com) and its tools ("the Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site.</p>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">2. Description of Service</h2>
            <p>RealCalc provides free online real estate investment calculators designed for informational and educational purposes. The calculators help users estimate metrics such as Net Operating Income, Cap Rate, Cash-on-Cash Return, DSCR, and others based on inputs provided by the user.</p>
            <p class="mt-3">The Site is intended for use by adults in the United States who are evaluating real estate investments. It is not designed for use outside the US market.</p>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">3. Not Financial Advice</h2>
            <p class="font-semibold text-gray-800">The results produced by RealCalc calculators are estimates for informational purposes only and do not constitute financial advice, investment advice, tax advice, legal advice, or any professional recommendation.</p>
            <p class="mt-3">Calculator outputs are based entirely on the inputs you provide. RealCalc does not verify the accuracy of your inputs and makes no representations about the reliability of any specific result for any specific transaction.</p>
            <p class="mt-3">Before making any real estate investment decision, you should consult a licensed real estate broker, CPA, financial advisor, attorney, or mortgage professional who can review your specific situation.</p>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">4. Accuracy of Information</h2>
            <p>We make reasonable efforts to ensure that the formulas and benchmarks used in our calculators are accurate and current. However, we make no warranties, express or implied, about the accuracy, completeness, or fitness for a particular purpose of any calculator result or content on the Site.</p>
            <p class="mt-3">Market benchmarks, interest rates, tax rates, and other reference data change frequently. Verify all market data with current sources before relying on it for any investment decision.</p>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">5. Permitted Use</h2>
            <p>You may use the Site for your own personal, non-commercial real estate investment research and analysis. You may not:</p>
            <ul class="mt-2 space-y-1 list-none">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Reproduce, resell, or redistribute the Site's tools or content without written permission</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Scrape, crawl, or automate access to the Site in a way that imposes unreasonable load on our servers</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Use the Site for any unlawful purpose or in violation of any applicable laws or regulations</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Attempt to reverse-engineer, copy, or create derivative works from the Site's source code</li>
            </ul>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">6. Intellectual Property</h2>
            <p>All content on the Site, including text, calculator designs, formulas as presented, and visual materials, is the property of RealCalc and is protected by applicable intellectual property laws. The underlying real estate formulas themselves (NOI, cap rate, DSCR, etc.) are industry-standard mathematical formulas in the public domain.</p>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, RealCalc and its operators shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:</p>
            <ul class="mt-2 space-y-1 list-none">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Your use of or reliance on any calculator result</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Any investment decision made based on information from the Site</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Errors, inaccuracies, or omissions in any content on the Site</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Interruption or unavailability of the Site</li>
            </ul>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">8. Disclaimer of Warranties</h2>
            <p>The Site and all calculators are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">9. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any dispute arising from these Terms or your use of the Site shall be resolved in a court of competent jurisdiction.</p>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">10. Changes to Terms</h2>
            <p>We reserve the right to update these Terms at any time. We will post the revised Terms on this page with an updated date. Continued use of the Site after the posting of changes constitutes your acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">11. Contact</h2>
            <p>Questions about these Terms may be directed to:</p>
            <div class="mt-3 p-4 rounded-xl bg-gray-50 border border-gray-100 text-sm">
              <p class="font-semibold text-gray-800">RealCalc</p>
              <p class="text-gray-500 mt-1">Email: legal@realcalc.com</p>
              <p class="text-gray-500">Website: realcalc.com</p>
            </div>
          </section>

        </div>
      </div>

    </main>

    <!-- FOOTER -->
    <footer class="mt-8 border-t border-gray-200 bg-white py-8 px-4">
      <div class="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-400">© 2026 RealCalc. For informational purposes only. Not financial advice.</p>
        <div class="flex gap-6">
          <NuxtLink to="/about"   class="text-sm text-gray-400 hover:text-gray-600 transition">About</NuxtLink>
          <NuxtLink to="/privacy" class="text-sm text-gray-400 hover:text-gray-600 transition">Privacy</NuxtLink>
          <NuxtLink to="/terms"   class="text-sm font-semibold transition" style="color: #f59e0b;">Terms</NuxtLink>
          <NuxtLink to="/contact" class="text-sm text-gray-400 hover:text-gray-600 transition">Contact</NuxtLink>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
useHead({
  title: 'Terms of Service — RealCalc',
  meta: [
    { name: 'description', content: 'RealCalc Terms of Service. Read our terms for using free real estate investment calculators. Not financial advice.' },
    { name: 'robots', content: 'index, follow' },
  ]
})
</script>
