import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CVSection() {
  const [showCV, setShowCV] = useState(false);

  return (
    <motion.section
      id="cv"
      className="scroll-mt-40 min-h-screen px-4 py-20 bg-slate-800/60 text-white flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">Mon CV</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => setShowCV((prev) => !prev)}
          className="px-6 py-3 rounded-full border bg-sky-500 text-slate-200 hover:bg-sky-600 transition"
        >
          {showCV ? "Masquer l’aperçu" : "Afficher l’aperçu"}
        </button>

        <a
          href="/pdf/Fremaut-Ludovic.pdf"
          download
          target="_blank"
          className="px-6 py-3 rounded-full border bg-sky-500 text-slate-200 hover:bg-sky-600 transition"
        >
          Télécharger mon CV
        </a>
      </div>

      {/* Aperçu iframe si demandé */}
      <AnimatePresence>
        {showCV && (
          <motion.div
            className="hidden md:block w-full max-w-4xl aspect-[3/4] mb-6 rounded shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <iframe
              src="/pdf/Fremaut-Ludovic.pdf"
              className="w-full h-full"
              title="CV de Ludovic Frémaut"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
