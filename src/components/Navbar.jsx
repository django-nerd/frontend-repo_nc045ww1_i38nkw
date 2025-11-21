import React from 'react'

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-yellow-400 flex items-center justify-center shadow-inner">
            <span className="text-slate-900 font-black">⚡</span>
          </div>
          <span className="font-bold text-slate-900 text-lg">BrightSpark Electric</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <button onClick={() => scrollTo('services')} className="hover:text-slate-900">Services</button>
          <button onClick={() => scrollTo('about')} className="hover:text-slate-900">About</button>
          <button onClick={() => scrollTo('contact')} className="px-4 py-2 rounded-md bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition">Get a Quote</button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
