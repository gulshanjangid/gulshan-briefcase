
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

const FloatingCube = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.5 + position[2]) * 2;
      meshRef.current.position.z = position[2] + Math.cos(state.clock.elapsedTime * 0.3 + position[0]) * 1.5;
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
      meshRef.current.rotation.z += 0.003;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshBasicMaterial 
        color="#8b5cf6" 
        transparent={true} 
        opacity={0.4}
        wireframe={true}
      />
    </mesh>
  );
};

const FloatingTorus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.7 + position[0]) * 1;
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.006;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.2, 0.08, 8, 16]} />
      <meshBasicMaterial 
        color="#00d4ff" 
        transparent={true} 
        opacity={0.5}
      />
    </mesh>
  );
};

const FloatingDodecahedron = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.4 + position[1]) * 1.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + position[2]) * 0.8;
      meshRef.current.rotation.x += 0.004;
      meshRef.current.rotation.y += 0.007;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <dodecahedronGeometry args={[0.15]} />
      <meshBasicMaterial 
        color="#ff6b6b" 
        transparent={true} 
        opacity={0.3}
        wireframe={true}
      />
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

  const cubes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 25,
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 15,
    ] as [number, number, number],
  }));

  const toruses = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 12,
    ] as [number, number, number],
  }));

  const dodecahedrons = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 28,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 8,
    ] as [number, number, number],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        
        {particles.map((particle) => (
          <Particle key={particle.id} position={particle.position} />
        ))}
        
        {cubes.map((cube) => (
          <FloatingCube key={`cube-${cube.id}`} position={cube.position} />
        ))}
        
        {toruses.map((torus) => (
          <FloatingTorus key={`torus-${torus.id}`} position={torus.position} />
        ))}
        
        {dodecahedrons.map((dodecahedron) => (
          <FloatingDodecahedron key={`dodeca-${dodecahedron.id}`} position={dodecahedron.position} />
        ))}
      </Canvas>
    </div>
  );
};

export default FloatingParticles;
