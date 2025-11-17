import { Sparkles, ClipboardList, Gauge } from 'lucide-react'

const steps = [
  { icon: ClipboardList, title: 'Répondez à quelques questions', desc: 'Vos envies, votre style, votre budget.' },
  { icon: Sparkles, title: 'ELOYA analyse', desc: 'Nous comprenons votre univers et votre date.' },
  { icon: Gauge, title: 'Recevez 3 prestataires', desc: 'Parfaitement adaptés à vous.' },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#FFFCFA]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl text-[#3B302A] font-semibold mb-8">Comment ça marche</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl p-6 bg-[#F4E8E4] border border-[#E3D5C9] text-[#3B302A] shadow-[0_10px_30px_rgba(59,48,42,0.06)]">
              <s.icon className="w-6 h-6 mb-4" />
              <h3 className="font-medium mb-1">{s.title}</h3>
              <p className="text-sm opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
