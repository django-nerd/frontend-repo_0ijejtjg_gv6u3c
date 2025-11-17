export default function Footer() {
  return (
    <footer className="bg-[#FFFCFA] border-t border-[#E3D5C9]">
      <div className="max-w-6xl mx-auto px-6 py-10 text-[#3B302A] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#A9826E]" />
          <span className="font-semibold">ELOYA</span>
        </div>
        <nav className="flex items-center gap-6 text-sm opacity-90">
          <a href="#">Contact</a>
          <a href="#">CGV</a>
          <a href="#">FAQ</a>
        </nav>
        <p className="text-sm opacity-70">© {new Date().getFullYear()} ELOYA</p>
      </div>
    </footer>
  )
}
