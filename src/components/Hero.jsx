import { motion } from 'framer-motion'

export default function Hero({ onCouple, onProvider }) {
  return (
    <section className="relative overflow-hidden">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
          alt="Couple en Île-de-France"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[#FFFCFA]/70" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="tracking-widest uppercase text-[12px] text-[#3B302A]/70 mb-4">Plateforme mariage • Île-de-France</p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-[#3B302A]">
            ELOYA — Le match parfait, tout en douceur.
          </h1>
          <p className="mt-6 text-[#3B302A]/80 text-lg max-w-xl">
            Trouvez en quelques minutes les prestataires qui vous correspondent vraiment.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={onCouple} className="px-6 py-3 rounded-full bg-[#3B302A] text-[#FFFCFA] shadow-sm hover:shadow-md transition-all">
              Je suis un futur marié
            </button>
            <button onClick={onProvider} className="px-6 py-3 rounded-full bg-[#F4E8E4] text-[#3B302A] border border-[#E3D5C9] hover:bg-[#E3D5C9]/60 transition-all">
              Je suis un prestataire
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
