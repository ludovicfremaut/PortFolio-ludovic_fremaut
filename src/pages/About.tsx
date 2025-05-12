import { motion } from "framer-motion";
import { useScrollTo } from "../hooks/useScrollTo"; // optionnel si tu veux un scroll fluide

export default function About() {
  const scrollTo = useScrollTo(); // optionnel

  return (
    <motion.section
      id="about"
      className="scroll-mt-40 min-h-screen px-4 py-20 bg-slate-800/60 text-white flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">À propos</h2>

      <div className="max-w-3xl space-y-6 text-xl text-slate-300">
        <p>
          Je suis Ludovic Fremaut, concepteur et développeur d'applications passionné par le{" "}
          <strong>développement web</strong> moderne. Après une reconversion ambitieuse, je me consacre
          à créer des projets solides, accessibles et durables.
        </p>

        <p>
          Mon parcours m’a appris à ne jamais reculer devant un défi. J’aime apprendre en pratiquant,
          et chaque projet est pour moi une occasion de progresser, de structurer mes idées et de proposer des solutions concrètes.
        </p>

        <p>
          Je travaille principalement avec <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>React</strong>, <strong>JavaScript</strong>,
          et j’explore actuellement les architectures <strong>microservices</strong>, la CI/CD, les bonnes pratiques de sécurité
          et le design accessible.
        </p>

        <p>
          En dehors du code, je suis curieux, rigoureux, et j’aime transmettre ce que j’apprends. Si vous voulez en discuter ou collaborer :{" "}
          <button onClick={() => scrollTo("contact")} className="text-cyan-400 underline">
            écrivez-moi !
          </button>
        </p>
      </div>
    </motion.section>
  );
}
