import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import Smoke from "./Smoke";

export default function Car() {
  const carGroup = useRef();
  const calibrationGroup = useRef(); 
  const hasTriggeredLogin = useRef(false); 
  
  const { scene } = useGLTF(
    "/models/2015_ford_mustang_rtr-v1 (1).glb",
    "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
  );

  const FINAL_SCALE = 150.0; 
  const FLOOR_Y = -0.48;     

  const OFFSET_X = 0;   
  const OFFSET_Y = 0;   
  const OFFSET_Z = 0;   

  const motion = useRef({
    elapsed: 0,
    zPos: -12,          
    currentSpeed: 0,
    acceleration: 0.04, 
    maxSpeed: 1.5,       
    alpha: 1.0          
  });

  useEffect(() => {
    if (!carGroup.current || !scene) return;

    scene.traverse((child) => {
      if (!child.isMesh || !child.material) return;
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.transparent = true;

      const name = child.name.toLowerCase();
      if (name.includes("tail") || name.includes("rear") || name.includes("brake")) {
        child.material = new THREE.MeshStandardMaterial({ color: "#ff0011", emissive: "#ff0000", emissiveIntensity: 6.0, transparent: true });
        return;
      }
      if (name.includes("light") || name.includes("head") || name.includes("lamp")) {
        child.material = new THREE.MeshStandardMaterial({ color: "#ffffff", emissive: "#d8f8ff", emissiveIntensity: 4.0, transparent: true });
        return;
      }
      if (name.includes("tire") || name.includes("wheel") || name.includes("rubber") || name.includes("rim")) {
        child.material.color.set("#0a0a0a"); child.material.metalness = 0.1; child.material.roughness = 0.8;
        return;
      }
      if (name.includes("glass") || name.includes("window") || name.includes("windshield")) {
        child.material.color.set("#050505"); child.material.roughness = 0.02; child.material.metalness = 0.95;
        return;
      }
      child.material.color.set("#2a2e35"); child.material.metalness = 0.85; child.material.roughness = 0.12; child.material.emissive.set("#000000"); child.material.emissiveIntensity = 0;
    });

    const tl = gsap.timeline();
    tl.to(carGroup.current.position, { x: 0, z: -12, duration: 3, ease: "power2.out" });
    tl.to(carGroup.current.rotation, { y: Math.PI, duration: 3, ease: "power2.out" }, 0);
  }, [scene]);

  useFrame((state, delta) => {
    if (!carGroup.current || !calibrationGroup.current) return;
    const t = state.clock.elapsedTime;
    const p = motion.current;

    p.elapsed += delta;

    if (p.elapsed < 3.0) {
      state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, 38, 0.02);
      state.camera.updateProjectionMatrix();

      calibrationGroup.current.position.y = OFFSET_Y + Math.sin(t * 38) * 0.005;
      calibrationGroup.current.position.z = OFFSET_Z + Math.sin(t * 12) * 0.003;
    } 
    else {
      state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, 50, 0.04);
      state.camera.updateProjectionMatrix();

      p.currentSpeed = Math.min(p.currentSpeed + p.acceleration * delta * 60, p.maxSpeed);
      p.zPos -= p.currentSpeed; 
      
      carGroup.current.position.z = p.zPos;
      calibrationGroup.current.position.y = OFFSET_Y + Math.sin(t * 70) * 0.003; 

      if (p.zPos < -45 && !hasTriggeredLogin.current) {
        hasTriggeredLogin.current = true;
        window.dispatchEvent(new Event("showLogin")); 
      }

      if (p.zPos < -85) { 
        p.alpha = THREE.MathUtils.lerp(p.alpha, 0, 0.05);
        scene.traverse((child) => {
          if (child.isMesh && child.material) {
            child.material.opacity = p.alpha;
            if (child.material.emissiveIntensity) child.material.emissiveIntensity = p.alpha * 6.0;
          }
        });
      }
    }
  });

  return (
    <group ref={carGroup} position={[0, FLOOR_Y, -12]} rotation={[0, Math.PI, 0]}>
      <group ref={calibrationGroup} position={[OFFSET_X, OFFSET_Y, OFFSET_Z]}>
        <primitive object={scene} scale={FINAL_SCALE} dispose={null} />
        <Smoke motionRef={motion} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/2015_ford_mustang_rtr-v1 (1).glb", "https://www.gstatic.com/draco/versioned/decoders/1.5.7/");