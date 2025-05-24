
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particle = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#00d4ff" transparent={true} opacity={0.6} />
    </mesh>
  );
};

const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ] as [number, number, number],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        {particles.map((particle) => (
          <Particle key={particle.id} position={particle.position} />
        ))}
      </Canvas>
    </div>
  );
};

export default FloatingParticles;
