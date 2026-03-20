import { useRef, useMemo, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points } from '@react-three/drei';
import * as THREE from 'three';

function NeuralPrismCore() {
  const prismRef = useRef();

  // Core icosahedron geometry reused for solid + wire
  const { solidGeo, edgesGeo } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.6, 1);
    const edges = new THREE.EdgesGeometry(geo);
    return { solidGeo: geo, edgesGeo: edges };
  }, []);

  useFrame((_, delta) => {
    if (prismRef.current) {
      prismRef.current.rotation.y += delta * 0.25;
      prismRef.current.rotation.x += delta * 0.12;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.7}>
      <group ref={prismRef}>
        {/* Glassy / holographic body */}
        <mesh geometry={solidGeo}>
          <meshPhysicalMaterial
            color="#050505"
            roughness={0.1}
            metalness={0.3}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transparent
            opacity={0.25}
            transmission={0.85}
            ior={1.3}
            emissive="#00D1FF"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Electric blue wireframe outline */}
        <lineSegments geometry={edgesGeo}>
          <lineBasicMaterial color="#00D1FF" transparent opacity={0.6} />
        </lineSegments>
      </group>
    </Float>
  );
}

function OrbitingDataPoints() {
  const groupRef = useRef();

  const points = useMemo(() => {
    const positions = [];
    const radius = 2.6;
    const count = 220;

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius + Math.random() * 0.4;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      positions.push(x, y, z);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.z += delta * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      <Points
        geometry={points}
        limit={points.attributes.position.count}
        frustumCulled
      >
        <pointsMaterial
          color="#00D1FF"
          size={0.03}
          sizeAttenuation
          transparent
          opacity={0.55}
        />
      </Points>
    </group>
  );
}

export default function Hero3DModel({ className = '' }) {
  const [ready, setReady] = useState(false);

  const onCreated = useCallback(() => {
    // Fade in after first couple of frames to avoid layout jank
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
        width: '100%',
        height: '100%',
        opacity: ready ? 1 : 0,
        transition: 'opacity 1s ease-out',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
        dpr={[1, 1.8]}
        onCreated={onCreated}
      >
        {/* Core neural prism */}
        <NeuralPrismCore />
        {/* Orbiting data / neural points */}
        <OrbitingDataPoints />
        {/* No controls added: behaves as a decorative hero element */}
      </Canvas>
    </div>
  );
}

