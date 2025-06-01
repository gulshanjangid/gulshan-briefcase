
import { motion } from 'framer-motion';
import { Github, Linkedin, Code, ExternalLink, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Computer3D from './animations/Computer3D';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';

const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, delay + currentIndex * 100);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

const Hero3DScene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={45} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4.5}
        autoRotate
        autoRotateSpeed={0.2}
        dampingFactor={0.05}
        enableDamping
      />
      
      <ambientLight intensity={0.2} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={0.6}
        castShadow
      />
      <pointLight position={[-5, 3, -2]} intensity={0.4} color="#8b5cf6" />
      <pointLight position={[5, 3, -2]} intensity={0.4} color="#00d4ff" />
      
      <Environment preset="city" />
      <fog attach="fog" args={["#1a1a2e", 8, 20]} />
      
      <Computer3D />
      
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.7, 0]} receiveShadow>
        <planeGeometry args={[25, 25]} />
        <meshStandardMaterial 
          color="#0a0a0a" 
          roughness={0.9} 
          metalness={0.1}
          transparent
          opacity={0.3}
        />
      </mesh>
    </>
  );
};

const HeroNikhil = () => {
  const badges = [
    { text: 'LeetCode 100 Days', color: 'text-green-400' },
    { text: 'CodeChef Badges', color: 'text-orange-400' },
    { text: 'HackerEarth Achiever', color: 'text-cyan-400' }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Code, href: '#', label: 'CodePen' },
    { icon: ExternalLink, href: '#', label: 'Portfolio' }
  ];

  return (
    <section className="min-h-screen bg-[#1a1a2e] flex items-center justify-center relative overflow-hidden pt-20">
      {/* 3D Background Animation */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <Canvas
          camera={{ position: [0, 2, 8], fov: 45 }}
          className="w-full h-full"
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Hero3DScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Main heading with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
            <TypingText text="Hi, I'm" delay={500} />
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mt-4">
            <TypingText text="Gulshan Jangid" delay={1500} />
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="mb-8"
        >
          <div className="glass p-6 rounded-2xl border border-gray-700 max-w-2xl mx-auto">
            <p className="text-lg text-gray-300">
              <span className="text-yellow-400 font-semibold">Full stack developer</span>
              <span className="text-white"> and </span>
              <span className="text-orange-400 font-semibold">problem solver</span>
              <span className="text-white"> crafting digital experiences.</span>
            </p>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300"
          >
            Get in touch
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border-2 border-gray-600 text-white font-semibold rounded-full hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
          >
            View projects
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.6 }}
          className="flex justify-center gap-4 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 hover:border-yellow-400 hover:bg-gray-700 transition-all duration-300"
            >
              <social.icon size={20} className="text-gray-300 hover:text-yellow-400" />
            </motion.a>
          ))}
        </motion.div>

        {/* Achievement badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.9 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.text}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 backdrop-blur-sm"
            >
              <span className={`text-sm font-medium ${badge.color}`}>
                • {badge.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <span className="text-gray-400 text-sm">Jaipur, Rajasthan</span>
          </div>
        </motion.div>
      </div>

      {/* Chat widget */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 5, type: "spring" }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/25 transition-all duration-300"
        >
          <MessageCircle size={24} className="text-white" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroNikhil;
