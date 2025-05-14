import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BriefcaseBusiness,
  Computer,
  Home,
  SearchSlash,
  UserPen,
  X,
} from "lucide-react";
import { useScrollTo } from "../hooks/useScrollTo";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useScrollTo();

  const sections = [
    {
      label: "Accueil",
      id: "Accueil",
      icon: <Home className="h-4 w-4 inline mr-1" />,
    },
    {
      label: "A propos",
      id: "about",
      icon: <SearchSlash className="h-4 w-4 inline mr-1" />,
    },
    {
      label: "Portfolio",
      id: "portfolio",
      icon: <BriefcaseBusiness className="h-4 w-4 inline mr-1" />,
    },
    {
      label: "Contact",
      id: "contact",
      icon: <UserPen className="h-4 w-4 inline mr-1" />,
    },
    {
      label: "cv",
      id: "cv",
      icon: <Computer className="h-4 w-4 inline mr-1" />,
    },
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
        className={`p-3 rounded-full shadow-md transition duration-200 ${
          isOpen
            ? "bg-slate-800 text-cyan-400"
            : "bg-slate-800 text-white hover:text-cyan-400"
        }`}
      >
        <span className="sr-only">Ouvrir le menu</span>
        <motion.div
          className="w-6 h-[2px] mb-[5px] rounded bg-current"
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
        />
        <motion.div
          className="w-6 h-[2px] mb-[5px] rounded bg-current"
          animate={{ opacity: isOpen ? 0 : 1 }}
        />
        <motion.div
          className="w-6 h-[2px] rounded bg-current"
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
        />
      </button>

      {/* Menu drawer */}
      <AnimatePresence>
  {isOpen && (
    <>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-slate-800/50 backdrop-blur-sm z-40"
        onClick={() => setIsOpen(false)}
      />

      {/* Menu drawer */}
      <motion.div
        key="menu"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 w-64 h-full bg-slate-800 z-50 shadow-lg px-6 py-10 flex flex-col gap-6"
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Computer className="h-6 w-6 text-cyan-400" />
            <span className="ml-2 text-white font-bold">Menu</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Fermer le menu"
          >
            <X className="text-white" />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          {sections.map(({ label, id, icon }) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className="w-full px-3 py-2 rounded-md bg-slate-800 hover:bg-slate-700 text-white hover:text-cyan-400 text-left text-base flex items-center transition-all"

            >
              {icon}
              {label}
            </button>
          ))}
        </nav>
      </motion.div>
    </>
  )}
</AnimatePresence>


    </div>
  );
};

export default BurgerMenu;
