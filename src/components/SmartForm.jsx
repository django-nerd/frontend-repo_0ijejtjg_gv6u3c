import { useState } from 'react'

export default function SmartForm({ onSubmit }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ city: '', date: '', budget: '', categories: [], style: '' })
  const cats = ['wedding planner', 'photographe & vidéaste', 'dj & animation', 'lieu de réception', 'traiteur']

  const toggleCat = (c) => {
    setForm((f) => ({ ...f, categories: f.categories.includes(c) ? f.categories.filter(x => x !== c) : [...f.categories, c] }))
  }

  const next = () => setStep((s) => Math.min(3, s + 1))
  const prev = () => setStep((s) => Math.max(1, s - 1))

  const submit = (e) => {
    e.preventDefault()
    const payload = {
      city: form.city || undefined,
      date: form.date || undefined,
      budget: form.budget ? parseInt(form.budget, 10) : undefined,
      categories: form.categories,
      style: form.style || undefined,
    }
    onSubmit?.(payload)
  }

  return (
    <section className="bg-[#FFFCFA]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="rounded-2xl border border-[#E3D5C9] bg-white/80 backdrop-blur p-6 text-[#3B302A] shadow-[0_6px_24px_rgba(59,48,42,0.06)]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Questionnaire</h3>
            <div className="flex items-center gap-2">
              {[1,2,3].map((i) => (
                <div key={i} className={`h-1 w-16 rounded-full ${i <= step ? 'bg-[#A9826E]' : 'bg-[#E3D5C9]'}`} />
              ))}
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm opacity-80">Ville</label>
                <input value={form.city} onChange={(e)=>setForm({...form, city:e.target.value})} className="mt-1 w-full rounded-xl border border-[#E3D5C9] bg-[#FFFCFA] px-4 py-3" placeholder="Paris, Boulogne…" />
              </div>
              <div>
                <label className="text-sm opacity-80">Date</label>
                <input type="date" value={form.date} onChange={(e)=>setForm({...form, date:e.target.value})} className="mt-1 w-full rounded-xl border border-[#E3D5C9] bg-[#FFFCFA] px-4 py-3" />
              </div>
              <button onClick={next} className="mt-2 px-5 py-3 rounded-full bg-[#3B302A] text-[#FFFCFA]">Continuer</button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm opacity-80">Budget estimé (€)</label>
                <input value={form.budget} onChange={(e)=>setForm({...form, budget:e.target.value})} className="mt-1 w-full rounded-xl border border-[#E3D5C9] bg-[#FFFCFA] px-4 py-3" placeholder="Ex: 5000" />
              </div>
              <div>
                <label className="text-sm opacity-80">Catégories</label>
                <div className="mt-2 grid sm:grid-cols-2 gap-2">
                  {cats.map((c) => (
                    <button key={c} type="button" onClick={()=>toggleCat(c)} className={`px-4 py-2 rounded-full border ${form.categories.includes(c)?'bg-[#A9826E] text-white border-[#A9826E]':'bg-white text-[#3B302A] border-[#E3D5C9]'}`}>{c}</button>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="px-5 py-3 rounded-full bg-[#F4E8E4] text-[#3B302A] border border-[#E3D5C9]">Retour</button>
                <button onClick={next} className="px-5 py-3 rounded-full bg-[#3B302A] text-[#FFFCFA]">Continuer</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="text-sm opacity-80">Votre style</label>
                <input value={form.style} onChange={(e)=>setForm({...form, style:e.target.value})} className="mt-1 w-full rounded-xl border border-[#E3D5C9] bg-[#FFFCFA] px-4 py-3" placeholder="moderne, chic, bohème…" />
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={prev} className="px-5 py-3 rounded-full bg-[#F4E8E4] text-[#3B302A] border border-[#E3D5C9]">Retour</button>
                <button type="submit" className="px-5 py-3 rounded-full bg-[#A9826E] text-white">Voir mes matchs</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
