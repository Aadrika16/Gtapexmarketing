import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import Car from "./Car";
import City from "./City";
import Trail from "./Trail";

export default function CarScene() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Canvas
        shadows
        gl={{ 
          toneMapping: THREE.ACESFilmicToneMapping, 
          toneMappingExposure: 0.8, // Darker exposure for night
          antialias: false,
          powerPreference: "high-performance" 
        }}
        camera={{ position: [2.5, 0.3, 4.0], fov: 42 }}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 2, 45]} />
        
        <ambientLight intensity={0.005} />

        {/* Moonlight */}
        <directionalLight position={[5, 10, -5]} intensity={1.5} color="#aaccff" castShadow />
        
        {/* Realistic Street Lamps with decay */}
        <pointLight position={[-12, 5, -15]} color="#ffcc99" intensity={25} distance={50} decay={2} />
        <pointLight position={[12, 5, -25]} color="#ffcc99" intensity={25} distance={50} decay={2} />

        <Environment preset="night" blur={0.6} />
        
        <Suspense fallback={null}>
          <City /> 
          <Trail />
          <Car />
        </Suspense>

        <ContactShadows position={[0, -0.49, 0]} opacity={0.9} scale={40} blur={2.0} far={2} />

        <EffectComposer>
          <Bloom intensity={0.5} luminanceThreshold={0.8} luminanceSmoothing={0.3} />
          <Noise opacity={0.05} />      {/* Subtle film grain for realism */}
          <Vignette offset={0.1} darkness={0.5} />
        </EffectComposer>

        <OrbitControls enablePan={false} minDistance={3} maxDistance={20} />
      </Canvas>
    </div>
  );
}