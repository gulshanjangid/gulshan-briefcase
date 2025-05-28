import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import Computer3D from './animations/Computer3D';

const Hero3DScene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 6]} fov={45} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4.5}
        autoRotate
        autoRotateSpeed={0.3}
        dampingFactor={0.05}
        enableDamping
      />
      
      {/* Enhanced Lighting Setup */}
      <ambientLight intensity={0.2} />
      
      {/* Main directional light */}
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={0.8}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      {/* Gaming setup accent lights */}
      <pointLight position={[-5, 3, -2]} intensity={0.6} color="#8b5cf6" />
      <pointLight position={[5, 3, -2]} intensity={0.6} color="#00d4ff" />
      <pointLight position={[0, 5, 2]} intensity={0.4} color="#00ff88" />
      
      {/* Rim lighting */}
      <pointLight position={[-8, 2, 8]} intensity={0.3} color="#ff0080" />
      <pointLight position={[8, 2, 8]} intensity={0.3} color="#0080ff" />
      
      {/* Environment for reflections */}
      <Environment preset="city" />
      
      {/* Fog for depth */}
      <fog attach="fog" args={["#0a0a0a", 5, 15]} />
      
      {/* 3D Computer Gaming Setup */}
      <Computer3D />
      
      {/* Enhanced Ground plane with grid pattern */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.7, 0]} receiveShadow>
        <planeGeometry args={[25, 25]} />
        <meshStandardMaterial 
          color="#050505" 
          roughness={0.9} 
          metalness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Grid lines for cyberpunk effect */}
      <gridHelper 
        args={[20, 20, "#00d4ff", "#8b5cf6"]} 
        position={[0, -1.65, 0]} 
        material-transparent={true}
        material-opacity={0.3}
      />
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [0, -50, -100],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas
          shadows="soft"
          camera={{ position: [0, 2, 6], fov: 45 }}
          className="w-full h-full"
          gl={{ antialias: true, alpha: true }}
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
            Gaming-Inspired Full Stack Developer
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
              className="px-8 py-4 bg-gradient-primary text-background font-semibold rounded-xl transition-all duration-300 shadow-lg animate-glow-pulse"
            >
              Enter the Code Matrix
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
              Connect & Collaborate
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center glow"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Decorative Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 right-20 w-4 h-4 bg-primary rounded-full opacity-60 blur-sm glow"
      />
      
      <motion.div
        animate={{ 
          rotate: -360,
          x: [0, 30, 0],
          y: [0, 15, 0]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-20 left-20 w-6 h-6 bg-secondary rounded-full opacity-40 blur-sm glow-purple"
      />
      
      {/* Additional floating elements */}
      <motion.div
        animate={{ 
          rotate: 180,
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-1/2 right-10 w-3 h-3 bg-accent rounded-full opacity-50 blur-sm"
      />
    </section>
  );
};

export default Hero3D;
