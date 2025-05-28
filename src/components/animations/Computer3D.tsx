
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, useGLTF, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const Computer3D = () => {
  const computerRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (computerRef.current) {
      // Slow rotation animation
      computerRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
    
    if (screenRef.current) {
      // Screen glow animation
      const material = screenRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
      <group ref={computerRef} position={[0, -1, 0]} scale={1.2}>
        {/* Laptop Base */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <boxGeometry args={[3, 0.2, 2]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.3} metalness={0.7} />
        </mesh>
        
        {/* Laptop Screen */}
        <mesh position={[0, 1.2, -0.9]} rotation={[-0.1, 0, 0]}>
          <boxGeometry args={[2.8, 1.8, 0.1]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.1} metalness={0.9} />
        </mesh>
        
        {/* Screen Display */}
        <mesh ref={screenRef} position={[0, 1.2, -0.85]} rotation={[-0.1, 0, 0]}>
          <planeGeometry args={[2.4, 1.4]} />
          <meshStandardMaterial 
            color="#00d4ff" 
            emissive="#00d4ff" 
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
        
        {/* Keyboard */}
        <mesh position={[0, 0.15, 0.5]}>
          <boxGeometry args={[2.5, 0.1, 1]} />
          <meshStandardMaterial color="#333333" roughness={0.4} metalness={0.6} />
        </mesh>
        
        {/* Coffee Cup */}
        <group position={[1.8, 0.3, 0.8]}>
          <mesh>
            <cylinderGeometry args={[0.15, 0.12, 0.3, 16]} />
            <meshStandardMaterial color="#8b4513" roughness={0.8} metalness={0.2} />
          </mesh>
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.14, 0.14, 0.02, 16]} />
            <meshStandardMaterial color="#654321" roughness={0.9} metalness={0.1} />
          </mesh>
        </group>
        
        {/* Mouse */}
        <mesh position={[-1.5, 0.15, 0.3]}>
          <boxGeometry args={[0.3, 0.1, 0.5]} />
          <meshStandardMaterial color="#444444" roughness={0.3} metalness={0.7} />
        </mesh>
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              (Math.random() - 0.5) * 8,
              Math.random() * 4 + 1,
              (Math.random() - 0.5) * 8
            ]}
          >
            <sphereGeometry args={[0.02]} />
            <meshStandardMaterial 
              color="#00d4ff" 
              emissive="#00d4ff" 
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

export default Computer3D;
