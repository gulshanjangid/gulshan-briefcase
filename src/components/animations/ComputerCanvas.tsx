
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const Computer = ({ isHovered }: { isHovered: boolean }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      if (isHovered) {
        meshRef.current.rotation.y += 0.02;
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      } else {
        meshRef.current.rotation.y += 0.005;
        meshRef.current.rotation.x = 0;
      }
    }
  });

  return (
    <group ref={meshRef}>
      {/* Computer Screen */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Screen Display */}
      <mesh position={[0, 0.5, 0.06]}>
        <planeGeometry args={[1.8, 1]} />
        <meshBasicMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Computer Base */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[2.2, 0.2, 0.8]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      
      {/* Stand */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 0.8]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Keyboard */}
      <mesh position={[0, -0.9, 0.8]}>
        <boxGeometry args={[1.8, 0.1, 0.6]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Mouse */}
      <mesh position={[1.2, -0.85, 0.8]}>
        <boxGeometry args={[0.3, 0.1, 0.5]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
    </group>
  );
};

const ComputerCanvas = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-64 h-64 cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Canvas camera={{ position: [3, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
        <Computer isHovered={isHovered} />
      </Canvas>
      
      {/* Glow effect overlay */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        animate={{
          boxShadow: isHovered 
            ? '0 0 30px rgba(0, 212, 255, 0.4)' 
            : '0 0 10px rgba(0, 212, 255, 0.1)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ComputerCanvas;
