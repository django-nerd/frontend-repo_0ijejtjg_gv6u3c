import { ShieldCheck, Zap, HandHeart } from 'lucide-react'

const items = [
  { icon: HandHeart, title: 'Simplicité immédiate', desc: 'Un parcours clair, sans charge mentale.' },
  { icon: ShieldCheck, title: 'Confiance totale', desc: 'Prestataires validés, matching intelligent.' },
  { icon: Zap, title: 'Rapide & personnalisé', desc: '3 suggestions privées en quelques minutes.' },
]

export default function WhyEloya() {
  return (
    <section className="bg-[#F4E8E4]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl text-[#3B302A] font-semibold mb-8">Pourquoi ELOYA</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((i, idx) => (
            <div key={idx} className="rounded-2xl p-6 bg-[#FFFCFA] border border-[#E3D5C9] text-[#3B302A] shadow-[0_10px_30px_rgba(59,48,42,0.06)]">
              <i.icon className="w-6 h-6 mb-4" />
              <h3 className="font-medium mb-1">{i.title}</h3>
              <p className="text-sm opacity-80">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
