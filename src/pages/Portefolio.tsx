import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const projects = [
  {
    title: "AI-covoit",
    description: "Plateforme de covoiturage intégrant une IA pour l'optimisation des trajets.",
    image: "/images/ai-covoit.png",
    github: "https://github.com/ludovicfremaut/AI-covoit",
    demo: "",
  },
  {
    title: "PortFolio-ludovic_fremaut",
    description: "Mon portfolio personnel développé avec React et TypeScript.",
    image: "/images/portfolio.png",
    github: "https://github.com/ludovicfremaut/PortFolio-ludovic_fremaut",
    demo: "https://ludovicfremaut.github.io/PortFolio-ludovic_fremaut",
  },
  {
    title: "Social-Network",
    description: "Application de réseau social avec fonctionnalités de messagerie.",
    image: "/images/socialnetwork.png",
    github: "https://github.com/ludovicfremaut/Social-Network",
    demo: "",
  },
  {
    title: "Ludovic-Fremaut",
    description: "Projet personnel mettant en avant mes compétences en développement web.",
    image: "/images/stackgithub.png",
    github: "https://github.com/ludovicfremaut/Ludovic-Fremaut",
    demo: "",
  },
];

export default function PortfolioCarousel() {
  return (
    <section id="portfolio" className="scroll-mt-40 px-4 py-20 bg-slate-900/60 text-white">
      <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">Portfolio</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg h-full flex flex-col justify-between">
              <img src={project.image} alt={project.title} className="rounded mb-4 object-cover h-48 w-full" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-300 mb-4 text-sm">{project.description}</p>
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline hover:text-cyan-300 transition"
                >
                  🧠 Voir le code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 underline hover:text-cyan-300 transition"
                  >
                    🔗 Démo en ligne
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
