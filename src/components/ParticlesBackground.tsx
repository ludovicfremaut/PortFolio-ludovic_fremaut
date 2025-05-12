import { useCallback, useEffect, useState } from "react";
import Particles, { type ISourceOptions, type Engine, type Container } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const [particlesInstance, setParticlesInstance] = useState<Container | null>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const baseOptions: ISourceOptions = {
    background: {
      color: { value: "#0f172a" },
    },
    fullScreen: { enable: false },
    particles: {
      number: { value: 30 },
      move: { enable: true, speed: 0.6 },
      opacity: { value: 1 },
      size: { value: 24 },
      color: { value: "#38bdf8" },
      shape: {
        type: "char",
        character: {
          value: ["<", ">", "{", "}", "/", ";"],
          font: "Courier New",
          weight: "400",
        },
      },
    },
  };

  useEffect(() => {
    const contactSection = document.getElementById("contact");

    const observer = new IntersectionObserver(
      ([entry]) => {
        const newColor = entry.isIntersecting ? "#ffffff" : "#38bdf8";

        // 💡 Sécurité : éviter erreur si instance pas prête
        if (particlesInstance?.loadOptions) {
          particlesInstance.loadOptions({
            ...baseOptions,
            particles: {
              ...baseOptions.particles,
              color: { value: newColor },
            },
          });
        }
      },
      { threshold: 0.3 }
    );

    if (contactSection) observer.observe(contactSection);
    return () => observer.disconnect();
  }, [particlesInstance]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={setParticlesInstance}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
      options={baseOptions}
    />
  );
}
