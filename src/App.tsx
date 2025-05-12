import GameCanvas from "./components/GameCanvas"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ParticlesBackground from "./components/ParticlesBackground"
import './styles/main.scss'

function App() {

  return (
    <>
    <Navbar />
    <ParticlesBackground />
    <Hero />
    <GameCanvas />
    </>
  )
}

export default App
