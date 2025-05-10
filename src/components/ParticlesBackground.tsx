import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
      options={{
        background: {
          color: { value: "#0f172a" }, // Tailwind slate-900
        },
        fullScreen: { enable: false }, // pas besoin si on fixe manuellement
        particles: {
          number: { value: 30 },
          move: { enable: true, speed: 0.6 },
          opacity: { value: 0.5 },
          size: { value: 16 },
          color: { value: "#38bdf8" }, // cyan-400
          shape: {
            type: "char",
            character: {
              value: ["<", ">", "{", "}", "/", ";"],
              font: "Courier New",
              style: "",
              weight: "400",
            },
          },
        },
      }}
    />
  );
}
