import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending...' })

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: 'Unknown error' }))
        throw new Error(err.detail || 'Failed to send')
      }

      setStatus({ type: 'success', message: 'Thanks! We received your message and will get back to you shortly.' })
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Get a Free Quote</h2>
            <p className="mt-3 text-slate-600">Tell us about your project and we’ll respond within one business day.</p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p><span className="font-semibold">Phone:</span> (555) 123-4567</p>
              <p><span className="font-semibold">Email:</span> hello@brightspark-electric.com</p>
              <p><span className="font-semibold">Hours:</span> Mon–Fri 7am–6pm • Emergency 24/7</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input required name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:ring-yellow-400 focus:border-yellow-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:ring-yellow-400 focus:border-yellow-400" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:ring-yellow-400 focus:border-yellow-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:ring-yellow-400 focus:border-yellow-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea required rows="5" name="message" value={form.message} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:ring-yellow-400 focus:border-yellow-400" />
            </div>

            <button type="submit" className="w-full py-3 rounded-md bg-yellow-400 text-slate-900 font-semibold hover:bg-yellow-300 transition">Send Request</button>

            {status && (
              <p className={`text-sm ${status.type === 'success' ? 'text-green-600' : status.type === 'error' ? 'text-red-600' : 'text-slate-600'}`}>{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
