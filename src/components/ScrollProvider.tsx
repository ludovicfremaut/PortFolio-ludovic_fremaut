import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

// On crée un contexte React
const LenisContext = createContext<Lenis | null>(null);

// Hook personnalisé pour utiliser Lenis
export const useLenis = () => useContext(LenisContext);

// Provider à utiliser tout en haut de ton App
export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    setLenis(instance);

    const raf = (time: number) => {
      instance.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      instance.destroy();
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
};
