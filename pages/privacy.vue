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
          <li class="text-gray-700 font-semibold">Privacy Policy</li>
        </ol>
      </div>
    </div>

    <!-- MAIN -->
    <main class="max-w-[760px] mx-auto px-4 sm:px-6 py-12">

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-10">

        <h1 class="text-3xl font-extrabold mb-2" style="color: #1e3a5f;">Privacy Policy</h1>
        <p class="text-gray-400 text-sm mb-8">Last updated: January 1, 2026</p>

        <div class="prose-sm space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">1. Overview</h2>
            <p>RealCalc ("we," "us," or "our") operates the website at realcalc.com (the "Site"). This Privacy Policy explains what information we collect, how we use it, and your choices regarding that information.</p>
            <p class="mt-3">We are committed to protecting your privacy. Our calculators run entirely in your browser — we do not store the property data, deal numbers, or financial inputs you enter into any calculator on our servers.</p>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">2. Information We Collect</h2>
            <h3 class="font-semibold text-gray-800 mb-2">Information you provide voluntarily</h3>
            <p>We may collect your email address if you choose to save a scenario, sign up for updates, or contact us. You are never required to provide an email address to use our calculators.</p>
            <h3 class="font-semibold text-gray-800 mt-4 mb-2">Information collected automatically</h3>
            <p>When you visit the Site, we may automatically collect standard web analytics data including your IP address, browser type, operating system, pages visited, and time spent on the Site. This data is collected in aggregate and is not linked to personally identifiable information.</p>
            <h3 class="font-semibold text-gray-800 mt-4 mb-2">Calculator inputs</h3>
            <p>All calculator inputs (property values, rents, expenses, etc.) are processed entirely in your browser using JavaScript. These values are never transmitted to or stored on our servers unless you explicitly choose to save or share a scenario.</p>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul class="mt-2 space-y-1 list-none">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Operate and improve the Site and calculator tools</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Respond to support requests or feedback you send us</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Send occasional product updates if you have opted in</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Analyze aggregate usage patterns to improve calculator accuracy and usability</li>
            </ul>
            <p class="mt-3">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">4. Cookies</h2>
            <p>We may use cookies and similar tracking technologies to improve your experience on the Site. These may include:</p>
            <ul class="mt-2 space-y-1 list-none">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span><strong>Essential cookies</strong> — required for basic site functionality</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span><strong>Analytics cookies</strong> — used to understand aggregate visitor behavior (e.g., Google Analytics)</li>
            </ul>
            <p class="mt-3">You can disable cookies through your browser settings. Note that disabling cookies may affect the functionality of certain features.</p>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">5. Third-Party Services</h2>
            <p>We may use third-party services that collect information subject to their own privacy policies. These may include:</p>
            <ul class="mt-2 space-y-1 list-none">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Google Analytics for aggregate website analytics</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Stripe for payment processing (if and when premium features are enabled)</li>
            </ul>
            <p class="mt-3">We do not control these third parties and their privacy practices are governed by their own policies.</p>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">6. Data Security</h2>
            <p>We take reasonable measures to protect your information from unauthorized access, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">7. Children's Privacy</h2>
            <p>The Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will promptly delete it.</p>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">8. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul class="mt-2 space-y-1 list-none">
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Access the personal data we hold about you</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Request correction or deletion of your data</li>
              <li class="flex gap-2"><span class="text-amber-500 font-bold flex-shrink-0">→</span> Opt out of marketing communications at any time</li>
            </ul>
            <p class="mt-3">To exercise these rights, contact us at the address below.</p>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page with an updated date. Continued use of the Site after changes constitutes acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 class="text-lg font-extrabold mb-3" style="color: #1e3a5f;">10. Contact</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <div class="mt-3 p-4 rounded-xl bg-gray-50 border border-gray-100 text-sm">
              <p class="font-semibold text-gray-800">RealCalc</p>
              <p class="text-gray-500 mt-1">Email: privacy@realcalc.com</p>
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
          <NuxtLink to="/privacy" class="text-sm font-semibold transition" style="color: #f59e0b;">Privacy</NuxtLink>
          <NuxtLink to="/terms"   class="text-sm text-gray-400 hover:text-gray-600 transition">Terms</NuxtLink>
          <NuxtLink to="/contact" class="text-sm text-gray-400 hover:text-gray-600 transition">Contact</NuxtLink>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
useHead({
  title: 'Privacy Policy — RealCalc',
  meta: [
    { name: 'description', content: 'RealCalc Privacy Policy. Learn how we collect, use, and protect your information when you use our free real estate investment calculators.' },
    { name: 'robots', content: 'index, follow' },
  ]
})
</script>
