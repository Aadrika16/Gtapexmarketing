import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function City() {
  const { scene } = useGLTF(
    "/models/city/source/procedural_city_5.glb", 
    "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
  );

  useEffect(() => {
    if (!scene) return;

    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        const name = child.name.toLowerCase();
        const isGlowComponent = name.includes("win") || name.includes("glow") || name.includes("light");

        // 1. High intensity glow for windows/lights
        if (isGlowComponent) {
          child.material = child.material.clone();
          child.material.emissive.set("#ffb700");
          child.material.emissiveIntensity = 15.0;
          child.material.toneMapped = false;
        } 
        // 2. Matte dark buildings (Night silhouettes)
        else if (name.includes("wall") || name.includes("building")) {
          child.material.color.set("#050505");
          child.material.roughness = 0.9;
        }
        // 3. Realistic gritty night asphalt
        else if (name.includes("road") || name.includes("asphalt")) {
          child.material = child.material.clone();
          child.material.color.set("#1f1f1f");    // Charcoal gray
          child.material.roughness = 0.5;         // Balanced for damp/gritty look
          child.material.metalness = 0.05;        // Non-metallic
          child.material.normalScale.set(2.0, 2.0); // Physical grit detail
          child.material.specularIntensity = 0.5; // Subtle light catching
          child.receiveShadow = true;
        }
      }
    });
  }, [scene]);

  return <primitive object={scene} position={[0, -0.5, 0]} />;
}
useGLTF.preload("/models/city/source/TerrainRemaked-v1.glb");