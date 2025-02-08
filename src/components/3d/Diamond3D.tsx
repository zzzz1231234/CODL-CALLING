import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function Diamond3D({ mouseX = 0 }) {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Increase rotation speed and responsiveness
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x = mouseX * 0.4;
      
      // Add subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group scale={[1.2, 1.2, 1.2]} position={[0, 0, 0]}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[2, 0]} />
        <meshPhysicalMaterial
          color="#00ff00" // Exact neon green color
          metalness={0.5}
          roughness={0.1}
          transmission={0.8}
          thickness={0.5}
          envMapIntensity={3} // Increased for more reflection
          clearcoat={1}
          clearcoatRoughness={0.1}
          ior={2.75}
          reflectivity={1}
          transparent={true}
          opacity={0.9}
          emissive="#00ff00" // Matching emissive color
          emissiveIntensity={0.5} // Increased for stronger glow
        />
      </mesh>
    </group>
  );
}