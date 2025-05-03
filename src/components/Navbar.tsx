import React from "react";
import { motion } from "framer-motion";
import { Computer } from "lucide-react";

const Navbar = () => {
  return (
    // Barre de navigation fixe avec transition dynamique
    <nav className={"fixed w-full z-50 transition-all duration-300"}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex item-center justify-between h-20">
          {/* Logo animé avec framer Motion */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Icone avec lucide React */}
            <Computer className="h-8 w-8 text-blue-600" />
            <span className="text-gray-800 font-bold">Mon Portfolio</span>
          </motion.div>

          {/* Navigation pour desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Génération dynamique des liens */}
              {[
                "Accueil",
                "Destination",
                "Services",
                "A propos",
                "Contact",
              ].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  // Animation du survol des liens
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
