
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import Computer3D from './animations/Computer3D';

const Hero3DScene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 6]} fov={50} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      {/* Lighting Setup */}
      <ambientLight intensity={0.3} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d4ff" />
      
      {/* Environment for reflections */}
      <Environment preset="city" />
      
      {/* 3D Computer Model */}
      <Computer3D />
      
      {/* Ground plane with subtle glow */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial 
          color="#0a0a0a" 
          roughness={0.8} 
          metalness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
    </>
  );
};

const Hero3D = () => {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20"
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas
          shadows
          camera={{ position: [0, 2, 6], fov: 50 }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            <Hero3DScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 text-gradient leading-tight"
          >
            ALEX CARTER
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-2xl md:text-4xl font-light mb-8 text-muted-foreground"
          >
            Creative Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Crafting immersive digital experiences with cutting-edge technology. 
            Passionate about 3D web development, modern frameworks, and innovative design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-primary text-background font-semibold rounded-xl transition-all duration-300 shadow-lg"
            >
              Explore My Work
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                y: -5,
                borderColor: "rgba(0, 212, 255, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-foreground font-semibold rounded-xl border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 right-20 w-4 h-4 bg-primary rounded-full opacity-60 blur-sm"
      />
      
      <motion.div
        animate={{ 
          rotate: -360,
          x: [0, 20, 0]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-20 left-20 w-6 h-6 bg-secondary rounded-full opacity-40 blur-sm"
      />
    </section>
  );
};

export default Hero3D;
