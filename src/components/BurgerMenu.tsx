import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BriefcaseBusiness, Computer, Home, SearchSlash, UserPen, X } from "lucide-react";
import { useScrollTo } from "../hooks/useScrollTo";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useScrollTo();

  const sections = [
    { label: "Accueil", id: "Accueil", icon: <Home className="h-4 w-4 inline mr-1" /> },
    { label: "A propos", id: "about", icon: <SearchSlash className="h-4 w-4 inline mr-1" /> },
    { label: "Portfolio", id: "portfolio", icon: <BriefcaseBusiness className="h-4 w-4 inline mr-1" /> },
    { label: "Contact", id: "contact", icon: <UserPen className="h-4 w-4 inline mr-1" /> },
  ];

  const handleClick = (id: string) => {
    scrollTo(id);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Burger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-slate-300 hover:text-cyan-400 focus:outline-none"
      >
        <span className="sr-only">Ouvrir le menu</span>
        <motion.div
          className="w-6 h-[2px] bg-white mb-[5px] rounded"
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
        />
        <motion.div
          className="w-6 h-[2px] bg-white mb-[5px] rounded"
          animate={{ opacity: isOpen ? 0 : 1 }}
        />
        <motion.div
          className="w-6 h-[2px] bg-white rounded"
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
        />
      </button>

      {/* Menu drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-slate-900 z-50 shadow-lg px-6 py-10 flex flex-col gap-6"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <Computer className="h-6 w-6 text-cyan-400" />
                <span className="ml-2 text-white font-bold">Menu</span>
              </div>
              <button onClick={() => setIsOpen(false)} aria-label="Fermer le menu">
                <X className="text-white" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {sections.map(({ label, id, icon }) => (
                <button
                  key={id}
                  onClick={() => handleClick(id)}
                  className="text-white hover:text-cyan-400 text-left text-base flex items-center transition-colors"
                >
                  {icon}
                  {label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;
