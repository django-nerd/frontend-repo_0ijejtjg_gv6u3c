import { useEffect, useState } from 'react'

export default function Testimonials() {
  const [items, setItems] = useState([
    {
      couple_names: 'Emma & Lucas',
      message: 'Une expérience douce et simple. Nous avons trouvé notre photographe en 5 minutes.',
      photo_url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
      city: 'Paris',
    },
    {
      couple_names: 'Camille & Noa',
      message: 'Des prestataires vraiment alignés avec notre style.',
      photo_url: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop',
      city: 'Saint-Maur',
    },
  ])

  useEffect(() => {
    // could fetch from backend later
  }, [])

  return (
    <section className="bg-[#FFFCFA]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl text-[#3B302A] font-semibold mb-8">Ils nous ont fait confiance</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white border border-[#E3D5C9] text-[#3B302A] shadow-[0_6px_24px_rgba(59,48,42,0.06)]">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.photo_url} alt={t.couple_names} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-medium">{t.couple_names}</p>
                  <p className="text-sm opacity-70">{t.city}</p>
                </div>
              </div>
              <p className="text-[#3B302A]/90">“{t.message}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
