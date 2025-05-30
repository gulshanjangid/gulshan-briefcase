
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Badges', 'Timeline', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a1a2e]/90 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <span className="text-2xl font-bold">
              <span className="text-white">Gulshan</span>
              <span className="text-yellow-400">Jangid</span>
              <span className="text-white"> -</span>
            </span>
          </motion.div>

          {/* Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  item === 'Home' 
                    ? 'text-yellow-400' 
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
              >
                {item}
                {item === 'Home' && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400"></div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Resume Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300"
          >
            Resume
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
