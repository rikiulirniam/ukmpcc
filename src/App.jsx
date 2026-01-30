import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Events from './components/sections/Events'
import Gallery from './components/sections/Gallery'
import Structure from './components/sections/Structure'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header /> 
      <main className="flex-1">
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Structure />
      </main>
      <Footer />
    </div>
  )
}

export default App
