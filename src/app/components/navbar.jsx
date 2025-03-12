import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#", label: "About Us" },
  { href: "#", label: "Contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <img 
            src="/assets/jastipfully.jpg" 
            alt="Jastipfully Logo" 
            className="w-14 h-14 rounded-full object-cover"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text hidden md:flex">
            JASTIPFULLY
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(({ href, label }) => (
            <motion.a
              key={label}
              href={href}
              className={`relative px-2 py-1 text-lg font-medium transition-colors
                ${activeLink === label ? 'text-orange-600' : 'text-gray-600 hover:text-orange-500'}`}
              onClick={() => setActiveLink(label)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
              {activeLink === label && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                  layoutId="underline"
                  initial={false}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-gray-600 block rounded-full"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-0.5 bg-gray-600 block rounded-full"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-gray-600 block rounded-full"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map(({ href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className={`block px-2 py-2 text-lg font-medium rounded-lg transition-colors
                    ${activeLink === label ? 'text-orange-600 bg-orange-50' : 'text-gray-600 hover:bg-gray-50'}`}
                  onClick={() => {
                    setActiveLink(label);
                    setIsOpen(false);
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}