import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { Particles } from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#0f172a" }, // fond slate
        },
        fullScreen: { enable: false },
        particles: {
          number: { value: 0 }, // ❌ Aucune particule
        },
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
}
