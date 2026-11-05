import React, { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, Sparkles, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Planet({ position, scale, color, ring = false }) {
  const group = useRef()
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color, roughness: 0.72, metalness: 0.16,
  }), [color])

  useFrame((state, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12
  })

  return (
    <group ref={group} position={position} scale={scale}>
      <mesh material={material}>
        <sphereGeometry args={[1, 64, 64]} />
      </mesh>
      <mesh position={[-0.28, 0.35, 0.82]}>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshBasicMaterial color="#d9c8ff" transparent opacity={0.18} />
      </mesh>
      {ring && (
        <mesh rotation={[Math.PI / 2.35, 0.18, -0.25]}>
          <torusGeometry args={[1.55, 0.035, 12, 120]} />
          <meshStandardMaterial color="#c3a5ff" emissive="#6c3bbd" emissiveIntensity={0.8} />
        </mesh>
      )}
    </group>
  )
}

function SceneObjects() {
  const orbit = useRef()
  useFrame((state, delta) => {
    if (orbit.current) orbit.current.rotation.y += delta * 0.035
  })
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 4, 5]} intensity={34} color="#a88cff" />
      <pointLight position={[-5, -2, -3]} intensity={15} color="#4a9fff" />
      <Stars radius={85} depth={55} count={3600} factor={4} saturation={0.35} fade speed={0.6} />
      <Sparkles count={110} scale={13} size={2.2} speed={0.25} opacity={0.65} color="#bda9ff" />
      <group ref={orbit}>
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.3}>
          <Planet position={[2.55, 0.55, -1.2]} scale={1.22} color="#6745a8" ring />
        </Float>
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
          <Planet position={[-3.2, -1.35, -2.5]} scale={0.48} color="#3c779d" />
        </Float>
        <Float speed={0.9} rotationIntensity={0.25} floatIntensity={0.5}>
          <Planet position={[-1.8, 2.25, -4]} scale={0.24} color="#a66a8b" />
        </Float>
      </group>
    </>
  )
}

export default function SpaceScene() {
  return (
    <div className="scene-wrap" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 8.5], fov: 48 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <SceneObjects />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.18} />
        </Suspense>
      </Canvas>
    </div>
  )
}