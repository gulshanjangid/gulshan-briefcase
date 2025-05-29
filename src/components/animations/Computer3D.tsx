
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const Computer3D = () => {
  const computerRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);
  const keyboardLightRef = useRef<THREE.Mesh>(null);
  const mouseLightRef = useRef<THREE.Mesh>(null);
  const codeTextRef = useRef<THREE.Mesh>(null);
  const ledStripRef = useRef<THREE.Group>(null);

  const codeLines = [
    "const developer = {",
    "  name: 'Alex Carter',", 
    "  skills: ['React', 'Three.js'],",
    "  passion: 'Creating amazing UX'",
    "};",
    "",
    "function createMagic() {",
    "  return code + creativity;",
    "}"
  ];

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (computerRef.current) {
      // Gentle floating and rotation
      computerRef.current.rotation.y = Math.sin(time * 0.2) * 0.15;
      computerRef.current.position.y = Math.sin(time * 0.3) * 0.1 - 1;
    }
    
    if (screenRef.current) {
      // Screen glow pulsing
      const material = screenRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.4 + Math.sin(time * 3) * 0.2;
    }

    if (keyboardLightRef.current) {
      // RGB keyboard lighting effect
      const hue = (time * 0.5) % 1;
      const color = new THREE.Color().setHSL(hue, 0.8, 0.6);
      const material = keyboardLightRef.current.material as THREE.MeshStandardMaterial;
      material.emissive = color;
      material.emissiveIntensity = 0.3 + Math.sin(time * 4) * 0.1;
    }

    if (mouseLightRef.current) {
      // Mouse LED breathing effect
      const material = mouseLightRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.5 + Math.sin(time * 2) * 0.3;
    }

    if (ledStripRef.current) {
      // LED strip rainbow effect
      ledStripRef.current.children.forEach((led, index) => {
        const mesh = led as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;
        const hue = ((time * 0.3) + (index * 0.1)) % 1;
        const color = new THREE.Color().setHSL(hue, 1, 0.5);
        material.emissive = color;
        material.emissiveIntensity = 0.6 + Math.sin(time * 5 + index) * 0.2;
      });
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={computerRef} position={[0, -1, 0]} scale={1.4}>
        {/* Gaming Desk */}
        <mesh position={[0, -0.1, 0]} receiveShadow>
          <boxGeometry args={[4, 0.15, 2.5]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
        </mesh>
        
        {/* Monitor Stand */}
        <mesh position={[0, 0.3, -0.8]}>
          <cylinderGeometry args={[0.1, 0.15, 0.6, 8]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.3} metalness={0.7} />
        </mesh>
        
        {/* Gaming Monitor */}
        <mesh position={[0, 1.4, -0.9]} rotation={[-0.05, 0, 0]} castShadow>
          <boxGeometry args={[3.2, 2, 0.12]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.1} metalness={0.9} />
        </mesh>
        
        {/* Monitor Screen */}
        <mesh ref={screenRef} position={[0, 1.4, -0.84]} rotation={[-0.05, 0, 0]}>
          <planeGeometry args={[2.9, 1.7]} />
          <meshStandardMaterial 
            color="#001122" 
            emissive="#0066ff" 
            emissiveIntensity={0.4}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Code Text on Screen */}
        <Text
          ref={codeTextRef}
          position={[-1.2, 1.6, -0.83]}
          rotation={[-0.05, 0, 0]}
          fontSize={0.08}
          color="#00ff88"
          anchorX="left"
          anchorY="top"
          font="/fonts/JetBrainsMono-Regular.woff"
        >
          {codeLines.join('\n')}
        </Text>
        
        {/* Gaming Keyboard */}
        <mesh position={[0, 0.18, 0.6]} castShadow>
          <boxGeometry args={[3, 0.08, 1.2]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.4} metalness={0.6} />
        </mesh>
        
        {/* Keyboard RGB Lighting */}
        <mesh ref={keyboardLightRef} position={[0, 0.19, 0.6]}>
          <boxGeometry args={[2.8, 0.02, 1]} />
          <meshStandardMaterial 
            color="#ff0080" 
            emissive="#ff0080" 
            emissiveIntensity={0.3}
            transparent
            opacity={0.7}
          />
        </mesh>
        
        {/* Gaming Mouse */}
        <mesh position={[1.8, 0.18, 0.3]} castShadow>
          <boxGeometry args={[0.25, 0.08, 0.4]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.3} metalness={0.7} />
        </mesh>
        
        {/* Mouse LED */}
        <mesh ref={mouseLightRef} position={[1.8, 0.19, 0.1]}>
          <cylinderGeometry args={[0.02, 0.02, 0.01, 8]} />
          <meshStandardMaterial 
            color="#00ffff" 
            emissive="#00ffff" 
            emissiveIntensity={0.5}
          />
        </mesh>
        
        {/* Gaming Headset */}
        <group position={[-1.8, 0.5, 0]}>
          <mesh>
            <torusGeometry args={[0.2, 0.02, 8, 16]} />
            <meshStandardMaterial color="#333333" roughness={0.4} metalness={0.6} />
          </mesh>
          <mesh position={[0, -0.15, 0]}>
            <boxGeometry args={[0.15, 0.1, 0.05]} />
            <meshStandardMaterial color="#2a2a2a" roughness={0.3} metalness={0.7} />
          </mesh>
        </group>
        
        {/* LED Strip Behind Monitor */}
        <group ref={ledStripRef} position={[0, 1.4, -1.1]}>
          {Array.from({ length: 8 }).map((_, i) => (
            <mesh key={i} position={[(i - 3.5) * 0.4, 0, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.1, 6]} />
              <meshStandardMaterial 
                color="#ff0000" 
                emissive="#ff0000" 
                emissiveIntensity={0.6}
              />
            </mesh>
          ))}
        </group>
        
        {/* Coffee Mug */}
        <group position={[-1.5, 0.3, 0.8]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.12, 0.1, 0.25, 16]} />
            <meshStandardMaterial color="#2d1b0f" roughness={0.8} metalness={0.2} />
          </mesh>
          <mesh position={[0, 0.15, 0]}>
            <cylinderGeometry args={[0.11, 0.11, 0.02, 16]} />
            <meshStandardMaterial color="#1a0f0a" roughness={0.9} metalness={0.1} />
          </mesh>
        </group>
        
        {/* Floating Code Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              (Math.random() - 0.5) * 6,
              Math.random() * 3 + 1,
              (Math.random() - 0.5) * 6
            ]}
          >
            <sphereGeometry args={[0.015]} />
            <meshStandardMaterial 
              color="#00ff88" 
              emissive="#00ff88" 
              emissiveIntensity={0.4}
            />
          </mesh>
        ))}
        
        {/* Holographic Elements */}
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.sin(i * 2) * 2,
              Math.cos(i * 2) * 0.5 + 2,
              Math.cos(i * 2) * 2
            ]}
            rotation={[0, i * 0.5, 0]}
          >
            <ringGeometry args={[0.1, 0.15, 6]} />
            <meshStandardMaterial 
              color="#8b5cf6" 
              emissive="#8b5cf6" 
              emissiveIntensity={0.3}
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

export default Computer3D;
