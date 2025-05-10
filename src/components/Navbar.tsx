import React from "react";
import { motion } from "framer-motion";
import { Computer } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-slate-900/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Computer className="h-8 w-8 text-cyan-400" />
            <span className="ml-2 text-slate-100 font-bold">Mon Portfolio</span>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["Mini-jeu", "Accueil", "Portfolio", "A propos", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
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
