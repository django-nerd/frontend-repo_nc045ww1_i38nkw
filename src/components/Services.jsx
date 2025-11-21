import React from 'react'

const services = [
  {
    title: 'Panel Upgrades',
    description: 'Modernize your electrical system for safety and capacity with code-compliant upgrades.',
    icon: '⚡'
  },
  {
    title: 'EV Charger Installation',
    description: 'Home and commercial EV charging solutions installed by certified electricians.',
    icon: '🚗'
  },
  {
    title: 'Lighting & Smart Controls',
    description: 'LED retrofits, recessed lighting, dimmers, motion sensors, and smart home integrations.',
    icon: '💡'
  },
  {
    title: 'Troubleshooting & Repairs',
    description: 'Fast diagnostics and repairs for breakers, outlets, circuits, and wiring issues.',
    icon: '🧰'
  },
  {
    title: 'New Construction & Remodels',
    description: 'Complete wiring for additions, remodels, tenant improvements, and build-outs.',
    icon: '🏗️'
  },
  {
    title: 'Commercial Services',
    description: 'Service upgrades, dedicated circuits, lighting maintenance, and panel work.',
    icon: '🏢'
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What We Do</h2>
          <p className="mt-3 text-slate-600">Quality workmanship, clear communication, and fair pricing on every job.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group p-6 rounded-xl border border-slate-200 hover:border-yellow-400 transition bg-white shadow-sm hover:shadow-md">
              <div className="text-3xl" aria-hidden>{s.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
