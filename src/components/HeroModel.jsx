import { useRef, useMemo, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function WireIcosahedron() {
  const meshRef = useRef();
  const edgesGeo = useMemo(() => {
    const ico = new THREE.IcosahedronGeometry(1.8, 1);
    return new THREE.EdgesGeometry(ico);
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={meshRef}>
        <lineSegments geometry={edgesGeo}>
          <lineBasicMaterial color="#00D1FF" transparent opacity={0.35} />
        </lineSegments>
        <mesh>
          <icosahedronGeometry args={[1.8, 1]} />
          <meshBasicMaterial color="#00D1FF" transparent opacity={0.03} />
        </mesh>
      </group>
    </Float>
  );
}

function OrbitingDots() {
  const groupRef = useRef();
  const dots = useMemo(() =>
    Array.from({ length: 24 }, () => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.4 + Math.random() * 1.2;
      return {
        pos: [
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi),
        ],
        size: Math.random() * 0.04 + 0.02,
        opacity: Math.random() * 0.5 + 0.2,
      };
    }), []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {dots.map((d, i) => (
        <mesh key={i} position={d.pos}>
          <sphereGeometry args={[d.size, 8, 8]} />
          <meshBasicMaterial color="#00D1FF" transparent opacity={d.opacity} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroModel({ className = '' }) {
  const [ready, setReady] = useState(false);

  const onCreated = useCallback(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setReady(true);
      });
    });
  }, []);

  return (
    <div
      className={className}
      style={{
        opacity: ready ? 1 : 0,
        transition: 'opacity 1s ease-out',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
        onCreated={onCreated}
      >
        <WireIcosahedron />
        <OrbitingDots />
      </Canvas>
    </div>
  );
}
