import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Local. Certified. Trusted.</h2>
            <p className="mt-4 text-slate-700">
              We’re a full-service electrical contractor serving residential and commercial clients. Our team is licensed, insured, and committed to safety and craftsmanship. We show up on time, communicate clearly, and leave your space cleaner than we found it.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• Over 10 years of experience</li>
              <li>• Transparent, upfront pricing</li>
              <li>• 5-star customer reviews</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white">
            <img src="https://images.unsplash.com/photo-1748171159071-d27f80d6774b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbGVjdHJpY2lhbiUyMGF0JTIwd29ya3xlbnwwfDB8fHwxNzYzNzY0OTU1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Electrician at work" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
