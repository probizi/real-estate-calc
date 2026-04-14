<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center gap-2">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">RC</span>
            </div>
            <span class="text-xl font-bold text-gray-900">RealCalc</span>
          </NuxtLink>
          
          <nav class="hidden md:flex items-center gap-8">
            <NuxtLink to="/calculators" class="text-gray-700 hover:text-blue-600 font-medium transition">Calculators</NuxtLink>
            <NuxtLink to="/pricing" class="text-gray-700 hover:text-blue-600 font-medium transition">Pricing</NuxtLink>
            <NuxtLink to="/blog" class="text-gray-700 hover:text-blue-600 font-medium transition">Blog</NuxtLink>
            <button class="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition">Get Started</button>
          </nav>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white py-20 md:py-32 px-4 overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>
      
      <div class="max-w-6xl mx-auto relative">
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 bg-blue-500/30 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span>Trusted by 10,000+ Real Estate Investors</span>
          </div>
          
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Free Real Estate Calculator<br/>
            <span class="text-blue-200">30+ Investment Tools</span>
          </h1>
          
          <p class="text-lg md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Analyze deals, calculate returns, and make data-driven investment decisions in seconds. No signup. Always free. Export professional reports.
          </p>
          
          <div class="flex flex-wrap gap-3 justify-center mb-12">
            <span class="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2.5 rounded-full text-sm font-semibold border border-white/30">
              <svg class="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              Always Free
            </span>
            <span class="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2.5 rounded-full text-sm font-semibold border border-white/30">
              <svg class="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              No Signup Required
            </span>
            <span class="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2.5 rounded-full text-sm font-semibold border border-white/30">
              <svg class="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              Instant Results
            </span>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/calculators" class="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-2xl">
              Browse All Calculators
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </NuxtLink>
            <NuxtLink to="/rental-property-calculator" class="inline-flex items-center justify-center gap-2 bg-blue-500/30 backdrop-blur text-white border-2 border-white/40 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500/50 transition">
              Try Rental Property
            </NuxtLink>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-white/20">
          <div class="text-center">
            <div class="text-5xl font-extrabold mb-2">30+</div>
            <div class="text-blue-200 font-medium">Calculators</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-extrabold mb-2">150K+</div>
            <div class="text-blue-200 font-medium">Calculations Done</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-extrabold mb-2">50+</div>
            <div class="text-blue-200 font-medium">US Cities</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-extrabold mb-2">4.9/5</div>
            <div class="text-blue-200 font-medium">User Rating</div>
          </div>
        </div>
      </div>
    </section><!-- Most Popular Calculators -->
    <section class="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Most Popular Calculators</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Start with these essential tools used by thousands of investors daily</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink to="/rental-property-calculator" class="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">Rental Property</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">Complete cash flow analysis with income, expenses, ROI, and cap rate calculations</p>
              <span class="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                Calculate Now
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </div>
          </NuxtLink>
          
          <NuxtLink to="/cap-rate-calculator" class="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition">Cap Rate</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">Measure investment returns and compare properties using capitalization rate</p>
              <span class="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all">
                Calculate Now
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </div>
          </NuxtLink>
          
          <NuxtLink to="/dscr-calculator" class="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition">DSCR Calculator</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">Qualify for financing with debt service coverage ratio analysis</p>
              <span class="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                Calculate Now
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </div>
          </NuxtLink>

          <NuxtLink to="/cash-on-cash-calculator" class="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-yellow-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition">Cash-on-Cash</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">Calculate annual ROI on actual cash invested in the property</p>
              <span class="inline-flex items-center gap-2 text-yellow-600 font-semibold group-hover:gap-3 transition-all">
                Calculate Now
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </div>
          </NuxtLink>

          <NuxtLink to="/fix-flip-calculator" class="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition">Fix & Flip</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">Estimate flip profits with rehab costs, holding costs, and ARV</p>
              <span class="inline-flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all">
                Calculate Now
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </div>
          </NuxtLink>

          <NuxtLink to="/mortgage-calculator" class="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-indigo-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition">Mortgage</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">Investment property loan payments and full amortization schedule</p>
              <span class="inline-flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all">
                Calculate Now
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </div>
          </NuxtLink>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/calculators" class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition shadow-lg hover:shadow-xl">
            View All 30+ Calculators
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p class="text-lg text-gray-600">Three simple steps to analyze your next real estate deal</p>
        </div>

        <div class="grid md:grid-cols-3 gap-12">
          <div class="text-center">
            <div class="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">1</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Choose Calculator</h3>
            <p class="text-gray-600">Select from 30+ specialized calculators based on your investment strategy</p>
          </div>
          
          <div class="text-center">
            <div class="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">2</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Enter Your Numbers</h3>
            <p class="text-gray-600">Input property details and see calculations happen instantly in real-time</p>
          </div>
          
          <div class="text-center">
            <div class="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">3</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Get Results & Export</h3>
            <p class="text-gray-600">See detailed analysis and export professional PDF reports</p>
          </div>
        </div>
      </div>
    </section><!-- FAQ Section -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
        
        <div class="space-y-4">
          <details class="bg-white p-6 rounded-lg shadow-md group">
            <summary class="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
              Are these calculators really free forever?
              <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <p class="mt-4 text-gray-600">Yes. All 30+ calculators are completely free to use with unlimited calculations. No signup required, no credit card needed, no hidden fees.</p>
          </details>

          <details class="bg-white p-6 rounded-lg shadow-md group">
            <summary class="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
              Do I need to create an account?
              <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <p class="mt-4 text-gray-600">No account needed for basic use. Just open any calculator and start entering numbers. Create a free account to save calculations and export PDF reports.</p>
          </details>

          <details class="bg-white p-6 rounded-lg shadow-md group">
            <summary class="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
              Can I use these on my phone?
              <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <p class="mt-4 text-gray-600">Absolutely. All calculators are fully mobile-optimized and work perfectly on iPhone, Android, and tablets.</p>
          </details>

          <details class="bg-white p-6 rounded-lg shadow-md group">
            <summary class="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
              What's the difference between cap rate and cash-on-cash return?
              <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <p class="mt-4 text-gray-600">Cap rate measures return based on property value (NOI ÷ Purchase Price), while cash-on-cash return measures return on actual cash invested, accounting for financing.</p>
          </details>

          <details class="bg-white p-6 rounded-lg shadow-md group">
            <summary class="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
              Are the formulas accurate?
              <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <p class="mt-4 text-gray-600">Yes. All formulas are validated against industry standards from BiggerPockets, Investopedia, and institutional lending guidelines.</p>
          </details>

          <details class="bg-white p-6 rounded-lg shadow-md group">
            <summary class="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
              Which calculator should I use for rental properties?
              <svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </summary>
            <p class="mt-4 text-gray-600">Start with the Rental Property Calculator for complete cash flow analysis. Then use Cap Rate, DSCR, and Cash-on-Cash calculators for deeper analysis.</p>
          </details>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Analyze Your Next Deal?</h2>
        <p class="text-xl mb-10 opacity-90">Join 10,000+ investors using our free calculators to make smarter investment decisions.</p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/calculators" class="bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl">
            Browse All Calculators
          </NuxtLink>
          <NuxtLink to="/rental-property-calculator" class="bg-blue-500 border-2 border-white text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-600 transition">
            Start with Rental Property
          </NuxtLink>
        </div>
        
        <p class="mt-8 text-blue-200">No signup required · Always free · Instant results</p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-xl">RC</span>
              </div>
              <span class="text-xl font-bold">RealCalc</span>
            </div>
            <p class="text-gray-400 text-sm">Free real estate calculators for investors, realtors, and brokers.</p>
          </div>
          
          <div>
            <h3 class="font-bold mb-4">Calculators</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><NuxtLink to="/rental-property-calculator" class="hover:text-white">Rental Property</NuxtLink></li>
              <li><NuxtLink to="/cap-rate-calculator" class="hover:text-white">Cap Rate</NuxtLink></li>
              <li><NuxtLink to="/dscr-calculator" class="hover:text-white">DSCR</NuxtLink></li>
              <li><NuxtLink to="/calculators" class="hover:text-white">View All 30+</NuxtLink></li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-bold mb-4">Company</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><NuxtLink to="/about" class="hover:text-white">About</NuxtLink></li>
              <li><NuxtLink to="/blog" class="hover:text-white">Blog</NuxtLink></li>
              <li><NuxtLink to="/pricing" class="hover:text-white">Pricing</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-white">Contact</NuxtLink></li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-bold mb-4">Legal</h3>
            <ul class="space-y-2 text-gray-400 text-sm"><li><NuxtLink to="/privacy" class="hover:text-white">Privacy Policy</NuxtLink></li>
              <li><NuxtLink to="/terms" class="hover:text-white">Terms of Service</NuxtLink></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 RealCalc. All calculators free forever.</p>
        </div>
      </div>
    </footer>
  </div>
</template><script setup>
useHead({
  title: 'Real Estate Calculator — Free Investment Tools (30+ Calculators)',
  meta: [
    { 
      name: 'description', 
      content: 'Free real estate calculator with 30+ investment tools. Calculate cap rate, cash flow, ROI, DSCR, mortgage, and more. No signup required. Instant results. Trusted by 10,000+ investors.' 
    },
    {
      property: 'og:title',
      content: 'Real Estate Calculator — Free Investment Tools (30+ Calculators)'
    },
    {
      property: 'og:description',
      content: 'Free real estate calculator with 30+ investment tools. Calculate cap rate, cash flow, ROI, DSCR, mortgage, and more.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://realcalc.com'
    }
  ]
})
</script>
