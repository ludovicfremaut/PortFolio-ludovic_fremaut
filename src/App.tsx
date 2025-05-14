import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ParticlesBackground from "./components/ParticlesBackground"
import About from "./pages/About"
import Contact from "./pages/Contact"
import CVSection from "./pages/CV"
import PortfolioCarousel from "./pages/Portefolio"

import './styles/main.scss'


function App() {

  return (
    <>
    <Navbar />
    <ParticlesBackground />
    <Hero />
    <About/>
    <PortfolioCarousel />
    <Contact />
    <CVSection />
    </>
  )
}

export default App
