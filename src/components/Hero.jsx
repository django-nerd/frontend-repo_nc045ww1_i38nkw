import React from 'react'

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative overflow-hidden bg-slate-900 pt-28">
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-yellow-400 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-blue-500 blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center py-20">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-300/20 text-yellow-300 ring-1 ring-yellow-300/30 mb-4">Licensed & Insured</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Reliable Electrical Services for Homes & Businesses
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              From panel upgrades and EV charger installs to smart lighting and emergency repairs — our certified electricians deliver safe, clean, and on-time work.
            </p>
            <div className="mt-8 flex gap-3">
              <button onClick={scrollToContact} className="px-5 py-3 rounded-md bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition">Request a Free Quote</button>
              <a href="#services" className="px-5 py-3 rounded-md border border-slate-700 text-white hover:bg-slate-800 transition">Our Services</a>
            </div>
            <p className="mt-4 text-slate-400 text-sm">24/7 Emergency Service • Same-Day Appointments • Satisfaction Guaranteed</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-[url('https://images.unsplash.com/photo-1561214078-f3247647fc5e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
