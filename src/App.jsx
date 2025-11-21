import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
        <footer className="py-10 bg-slate-900 text-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} BrightSpark Electric. All rights reserved.</p>
            <a href="/test" className="text-slate-400 hover:text-white text-sm">System status</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
