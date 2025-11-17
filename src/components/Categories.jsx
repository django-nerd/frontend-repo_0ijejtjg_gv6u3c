import { Camera, Music, Building2, UtensilsCrossed, CalendarClock } from 'lucide-react'

const cats = [
  { key: 'wedding planner', label: 'Wedding planner', icon: CalendarClock },
  { key: 'photographe & vidéaste', label: 'Photographe & vidéaste', icon: Camera },
  { key: 'dj & animation', label: 'DJ & animation', icon: Music },
  { key: 'lieu de réception', label: 'Lieu de réception', icon: Building2 },
  { key: 'traiteur', label: 'Traiteur', icon: UtensilsCrossed },
]

export default function Categories() {
  return (
    <section className="bg-[#FFFCFA]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl text-[#3B302A] font-semibold mb-8">Catégories</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cats.map((c) => (
            <div key={c.key} className="rounded-2xl bg-white/80 backdrop-blur p-5 border border-[#E3D5C9] text-[#3B302A] shadow-[0_6px_24px_rgba(59,48,42,0.06)]">
              <div className="flex items-center gap-3">
                <c.icon className="w-5 h-5" />
                <span>{c.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
