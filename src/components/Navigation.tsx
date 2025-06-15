
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

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Timeline', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a1a2e]/90 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'
      }`}
      style={{ perspective: '1000px' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with 3D hover effect */}
          <motion.div
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              rotateX: 5,
            }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('home')}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <span className="text-2xl font-bold">
              <span className="text-white">Gulshan</span>
              <span className="text-yellow-400">Jangid</span>
              <span className="text-white"> -</span>
            </span>
          </motion.div>

          {/* Menu with 3D hover effects */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  rotateX: -15,
                  rotateY: 5,
                  scale: 1.1,
                  textShadow: '0 10px 20px rgba(255, 193, 7, 0.3)',
                }}
                whileTap={{ 
                  scale: 0.95,
                  rotateX: 0,
                  rotateY: 0,
                }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  item === 'Home' 
                    ? 'text-yellow-400' 
                    : 'text-gray-300 hover:text-yellow-400'
                }`}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center bottom'
                }}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{
                    translateZ: 10,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.span>
                
                {/* 3D background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-lg opacity-0"
                  whileHover={{
                    opacity: 1,
                    translateZ: -5,
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {item === 'Home' && (
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400"
                    layoutId="activeTab"
                    initial={false}
                    animate={{ scaleX: 1 }}
                    whileHover={{ scaleY: 2 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Resume Button with 3D hover effect */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              rotateX: -10,
              rotateY: 10,
              boxShadow: '0 20px 40px rgba(255, 193, 7, 0.4)',
              translateY: -5,
            }}
            whileTap={{ 
              scale: 0.95,
              rotateX: 0,
              rotateY: 0,
              translateY: 0,
            }}
            transition={{ duration: 0.3 }}
            className="relative px-6 py-2 bg-yellow-400 text-black font-semibold rounded-full overflow-hidden transition-all duration-300"
            style={{ 
              transformStyle: 'preserve-3d',
              transformOrigin: 'center'
            }}
          >
            {/* 3D background layers */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400"
              whileHover={{
                translateZ: -2,
                scale: 1.1,
              }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0"
              whileHover={{
                opacity: 1,
                translateZ: -1,
              }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.span 
              className="relative z-10"
              whileHover={{
                translateZ: 5,
                color: '#000',
              }}
              transition={{ duration: 0.2 }}
            >
              Resume
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
