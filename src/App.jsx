import { useState } from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Categories from './components/Categories'
import WhyEloya from './components/WhyEloya'
import Testimonials from './components/Testimonials'
import ProvidersCTA from './components/ProvidersCTA'
import SmartForm from './components/SmartForm'
import MatchResults from './components/MatchResults'

function App() {
  const [results, setResults] = useState([])

  const handleFormSubmit = async (payload) => {
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/match`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        const data = await res.json()
        setResults(data.results)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="min-h-screen bg-[#FFFCFA] text-[#3B302A]">
      {/* top nav minimal */}
      <header className="sticky top-0 z-30 bg-[#FFFCFA]/80 backdrop-blur border-b border-[#E3D5C9]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#A9826E]" />
            <span className="font-semibold">ELOYA</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#form" className="px-4 py-2 rounded-full border border-[#E3D5C9] bg-[#F4E8E4]">Commencer</a>
            <a href="#login" className="px-4 py-2 rounded-full border border-[#E3D5C9]">Se connecter</a>
          </div>
        </div>
      </header>

      <main>
        <Hero onCouple={() => {
          const el = document.getElementById('form')
          el?.scrollIntoView({ behavior: 'smooth' })
        }} onProvider={() => {
          const el = document.getElementById('providers')
          el?.scrollIntoView({ behavior: 'smooth' })
        }} />

        <HowItWorks />
        <Categories />
        <WhyEloya />
        <Testimonials />

        <div id="form">
          <SmartForm onSubmit={handleFormSubmit} />
        </div>

        <MatchResults results={results} />

        <div id="providers">
          <ProvidersCTA />
        </div>
      </main>

      <Footer />
    </div>
  )
}

import Footer from './components/Footer'
export default App
