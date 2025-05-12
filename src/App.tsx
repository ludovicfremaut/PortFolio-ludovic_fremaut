import GameCanvas from "./components/GameCanvas"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ParticlesBackground from "./components/ParticlesBackground"
import Contact from "./pages/Contact"
import './styles/main.scss'


function App() {

  return (
    <>
    <ParticlesBackground />
    <Navbar />
    <Hero />
    <GameCanvas />
    <Contact />
    </>
  )
}

export default App
