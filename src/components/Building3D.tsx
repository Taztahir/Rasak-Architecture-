import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, Grid } from '@react-three/drei';
import * as THREE from 'three';

const BuildingModel = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base Structure */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 0.2, 4]} />
        <meshStandardMaterial color="#C5A059" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Main Building Block */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[2, 3, 2]} />
        <meshStandardMaterial color="#A0A0A0" wireframe transparent opacity={0.3} />
      </mesh>

      {/* Architectural Planes (Technical look) */}
      <mesh position={[1, 2, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.05, 4, 2]} />
        <meshStandardMaterial color="#1A1A1A" />
      </mesh>

      <mesh position={[-1, 1, 1]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[2, 0.05, 2]} />
        <meshStandardMaterial color="#C5A059" />
      </mesh>

      {/* Vertical Columns */}
      <mesh position={[1, 1.5, 1]}>
        <cylinderGeometry args={[0.05, 0.05, 3]} />
        <meshStandardMaterial color="#1A1A1A" />
      </mesh>
      <mesh position={[-1, 1.5, 1]}>
        <cylinderGeometry args={[0.05, 0.05, 3]} />
        <meshStandardMaterial color="#1A1A1A" />
      </mesh>
      <mesh position={[1, 1.5, -1]}>
        <cylinderGeometry args={[0.05, 0.05, 3]} />
        <meshStandardMaterial color="#1A1A1A" />
      </mesh>
      <mesh position={[-1, 1.5, -1]}>
        <cylinderGeometry args={[0.05, 0.05, 3]} />
        <meshStandardMaterial color="#1A1A1A" />
      </mesh>

      {/* Floating Design Points */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[1.5, 3.5, 1.5]}>
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={2} />
        </mesh>
      </Float>
    </group>
  );
};

const Building3D: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[8, 8, 8]} fov={35} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, -10]} intensity={0.5} />

        <BuildingModel />
        
        <Grid 
          infiniteGrid 
          fadeDistance={20} 
          fadeStrength={5} 
          cellSize={1} 
          sectionSize={5} 
          sectionColor="#C5A059" 
          cellColor="#A0A0A0" 
          position={[0, -0.1, 0]}
        />
        
        <fog attach="fog" args={['#FFFFFF', 10, 25]} />
      </Canvas>
    </div>
  );
};

export default Building3D;
