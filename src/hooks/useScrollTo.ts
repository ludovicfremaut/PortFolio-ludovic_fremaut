// src/hooks/useScrollTo.ts
import { useLenis } from "../components/ScrollProvider";

export function useScrollTo() {
  const lenis = useLenis();

  return (id: string) => {
    
    const el = document.getElementById(id);
    if (!el) {
      console.log("Lenis actif :", !!lenis);
      console.log("Élément cible :", id, el);
      console.warn(`⚠️ Élément #${id} introuvable`);
      return;
    }
    if (!lenis) {
      console.warn("⚠️ Lenis non initialisé");
      return;
    }

    // petit timeout de sécurité + offset
    setTimeout(() => {
      lenis.scrollTo(el, { offset: -100 });
    }, 10);
  };
  
}
