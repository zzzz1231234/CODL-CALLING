import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshPhysicalMaterial } from 'three';
import { useGLTF } from '@react-three/drei';

export function Diamond3D({ mouseX = 0 }) {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x = mouseX * 0.2;
    }
  });

  return (
    <group>
      {/* Crown (top part) */}
      <mesh ref={meshRef} scale={[3, 3, 3]} position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0, 2, 2, 8]} />
        <meshPhysicalMaterial
          color="#00ff00"
          metalness={0.9}
          roughness={0.1}
          transmission={0.9}
          thickness={0.5}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          ior={2.75}
          reflectivity={1}
        />
      </mesh>

      {/* Pavilion (bottom part) */}
      <mesh scale={[3, 3, 3]} position={[0, -1, 0]}>
        <cylinderGeometry args={[2, 0, 2, 8]} />
        <meshPhysicalMaterial
          color="#00ff00"
          metalness={0.9}
          roughness={0.1}
          transmission={0.9}
          thickness={0.5}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          ior={2.75}
          reflectivity={1}
        />
      </mesh>
    </group>
  );
}