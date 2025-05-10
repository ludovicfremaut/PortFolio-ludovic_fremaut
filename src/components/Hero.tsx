import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 h-screen w-full flex flex-col items-center justify-center text-center bg-transparent px-4">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-slate-100"
      >
        Ludovic Fremaut
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="text-lg md:text-2xl text-slate-300 mt-4 max-w-xl"
      >
        Concepteur & développeur d'applications, passionné par JavaScript, Node.js, et React.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-slate-400 text-slate-200 hover:bg-slate-800 transition"
        >
          Me contacter
        </a>
      </motion.div>
    </section>
  );
}
