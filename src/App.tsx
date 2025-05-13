import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ParticlesBackground from "./components/ParticlesBackground"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portefolio"
import './styles/main.scss'


function App() {

  return (
    <>
    <Navbar />
    <ParticlesBackground />
    <Hero />
    <About/>
    <Portfolio />
    <Contact />
  
    </>
  )
}

export default App
