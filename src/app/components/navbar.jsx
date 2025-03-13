import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Get all sections
      const sections = navLinks.map(link => document.querySelector(link.href));
      
      // Find the current section
      const current = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      // Update active link based on current section
      if (current) {
        const currentLink = navLinks.find(link => link.href === `#${current.id}`);
        if (currentLink && currentLink.label !== activeLink) {
          setActiveLink(currentLink.label);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink]);

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/80 shadow-lg' 
          : 'bg-transparent'
      }`}
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
          <span className={`text-2xl font-bold bg-gradient-to-r ${isScrolled ? 'from-orange-600 to-orange-400' : 'from-white to-orange-200'} text-transparent bg-clip-text hidden md:flex`}>
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
                ${isScrolled
                  ? (activeLink === label ? 'text-orange-600' : 'text-gray-600 hover:text-orange-500')
                  : (activeLink === label ? 'text-orange-300' : 'text-white hover:text-orange-200')}`}
              onClick={() => setActiveLink(label)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
              {activeLink === label && (
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 ${isScrolled ? 'bg-orange-500' : 'bg-orange-300'}`}
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
          className="md:hidden p-2 rounded-lg hover:bg-gray-100/10"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              className={`w-full h-0.5 block rounded-full ${isScrolled ? 'bg-gray-600' : 'bg-white'}`}
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`w-full h-0.5 block rounded-full ${isScrolled ? 'bg-gray-600' : 'bg-white'}`}
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              className={`w-full h-0.5 block rounded-full ${isScrolled ? 'bg-gray-600' : 'bg-white'}`}
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
            className={`md:hidden border-t ${isScrolled ? 'border-gray-200 bg-white/80' : 'border-gray-200/20 bg-black/40'}`}
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map(({ href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className={`block px-2 py-2 text-lg font-medium rounded-lg transition-colors
                    ${isScrolled
                      ? (activeLink === label ? 'text-orange-600 bg-orange-50' : 'text-gray-600 hover:bg-gray-50')
                      : (activeLink === label ? 'text-orange-300 bg-white/10' : 'text-white hover:bg-white/5')}`}
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