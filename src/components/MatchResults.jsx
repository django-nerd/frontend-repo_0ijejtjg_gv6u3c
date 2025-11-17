export default function MatchResults({ results = [] }) {
  return (
    <section className="bg-[#FFFCFA]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {results.length > 0 && (
          <>
            <h3 className="text-xl font-semibold text-[#3B302A] mb-4">Vos meilleurs matchs</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((p, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-[#E3D5C9] bg-white shadow-[0_6px_24px_rgba(59,48,42,0.06)]">
                  {p.photo_url && <img src={p.photo_url} alt={p.name} className="h-40 w-full object-cover" />}
                  <div className="p-5 text-[#3B302A]">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{p.name}</h4>
                      <span className="text-sm px-3 py-1 rounded-full bg-[#F4E8E4] border border-[#E3D5C9]">{p.score}%</span>
                    </div>
                    <p className="text-sm opacity-80">{p.category} • {p.city || 'Île-de-France'}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
