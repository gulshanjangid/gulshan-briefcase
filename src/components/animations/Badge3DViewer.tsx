
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Badge3DViewerProps {
  badge: {
    id: number;
    title: string;
    platform: string;
    date: string;
    category: string;
    icon: string;
    color: string;
    description: string;
    featured?: boolean;
  };
  isOpen: boolean;
  onClose: () => void;
}

const FloatingBadge = ({ badge }: { badge: Badge3DViewerProps['badge'] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  const badgeColor = badge.color.includes('blue') ? '#3b82f6' : 
                    badge.color.includes('purple') ? '#8b5cf6' :
                    badge.color.includes('green') ? '#10b981' :
                    badge.color.includes('gray') ? '#6b7280' : '#f59e0b';

  return (
    <group>
      {/* Main Badge Circle */}
      <mesh
        ref={meshRef}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <cylinderGeometry args={[1.5, 1.5, 0.2, 32]} />
        <meshStandardMaterial color={badgeColor} metalness={0.7} roughness={0.2} />
      </mesh>

      {/* Badge Icon */}
      <Text
        position={[0, 0, 0.11]}
        fontSize={0.8}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        {badge.icon}
      </Text>

      {/* Floating Particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <FloatingParticle key={i} index={i} color={badgeColor} />
      ))}

      {/* Platform Text */}
      <Text
        position={[0, -2.5, 0]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {badge.platform}
      </Text>

      {/* Category Text */}
      <Text
        position={[0, -3, 0]}
        fontSize={0.25}
        color="#a0a0a0"
        anchorX="center"
        anchorY="middle"
      >
        {badge.category}
      </Text>
    </group>
  );
};

const FloatingParticle = ({ index, color }: { index: number; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      const radius = 3;
      const speed = 0.5;
      const angle = (index / 8) * Math.PI * 2 + time * speed;
      
      meshRef.current.position.x = Math.cos(angle) * radius;
      meshRef.current.position.z = Math.sin(angle) * radius;
      meshRef.current.position.y = Math.sin(time + index) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
};

const Badge3DViewer = ({ badge, isOpen, onClose }: Badge3DViewerProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative bg-gray-900 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            <X size={20} className="text-white" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">{badge.title}</h2>
            <p className="text-gray-400">{badge.description}</p>
            <div className="flex justify-center gap-4 mt-2 text-sm text-gray-500">
              <span>{badge.platform}</span>
              <span>•</span>
              <span>{badge.date}</span>
            </div>
          </div>

          {/* 3D Canvas */}
          <div className="h-96 rounded-lg overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />
              <FloatingBadge badge={badge} />
              <OrbitControls 
                enableZoom={true} 
                enablePan={false}
                minDistance={5}
                maxDistance={15}
                autoRotate={false}
              />
            </Canvas>
          </div>

          {/* Instructions */}
          <div className="mt-4 text-center text-gray-400 text-sm">
            <p>🖱️ Click and drag to rotate • 🔍 Scroll to zoom • ✨ Hover over the badge for effects</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Badge3DViewer;
