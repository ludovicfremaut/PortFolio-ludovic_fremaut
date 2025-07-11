import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Computer,
  Home,
  SearchSlash,
  UserPen,
  FileUser,
} from "lucide-react";
import { useScrollTo } from "../hooks/useScrollTo";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
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
      icon: <FileUser className="h-4 w-4 inline mr-1" />,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-slate-900/90 backdrop-blur-md">
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
              {sections.map(({ label, id, icon }) => (
                <motion.button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  {icon && <span className="mr-1">{icon}</span>}
                  {label}
                </motion.button>
              ))}
            </div>
          </div>
          {/* Mobile menu */}
          <div className="md:hidden">
            <BurgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
