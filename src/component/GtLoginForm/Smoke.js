import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Smoke({ motionRef }) {
  const pointsRef = useRef();
  const particleCount = 350; 

  const leftExhaust = [-0.42, 0.15, -1.6];
  const rightExhaust = [0.42, 0.15, -1.6];

  const [positions, velocities, ages, exhaustSource] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = new Float32Array(particleCount * 3);
    const age = new Float32Array(particleCount);
    const source = new Uint8Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const isRight = i % 2 === 0;
      source[i] = isRight ? 1 : 0;
      const startX = isRight ? rightExhaust[0] : leftExhaust[0];

      pos[i * 3] = startX;
      pos[i * 3 + 1] = leftExhaust[1];
      pos[i * 3 + 2] = leftExhaust[2];

      vel[i * 3] = (Math.random() - 0.5) * 0.4;       
      vel[i * 3 + 1] = (Math.random() * 0.25) + 0.1;   
      vel[i * 3 + 2] = -3.0 - Math.random() * 4.0;     

      age[i] = (i / particleCount) * -2.0; 
    }

    return [pos, vel, age, source];
  }, [particleCount]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const geo = pointsRef.current.geometry;
    const posArr = geo.attributes.position.array;
    const elapsedTime = motionRef?.current?.elapsed || 0;

    for (let i = 0; i < particleCount; i++) {
      ages[i] += delta;

      if (ages[i] > 1.2) { 
        ages[i] = 0;
        const isRight = exhaustSource[i] === 1;
        posArr[i * 3] = isRight ? rightExhaust[0] : leftExhaust[0];
        posArr[i * 3 + 1] = leftExhaust[1];
        posArr[i * 3 + 2] = leftExhaust[2];

        const launchFactor = elapsedTime >= 3.0 ? 4.0 : 1.2;
        velocities[i * 3] = (Math.random() - 0.5) * 0.6;
        velocities[i * 3 + 1] = (Math.random() * 0.4) + 0.15;
        velocities[i * 3 + 2] = (-4.0 - Math.random() * 5.5) * launchFactor;
      }

      if (ages[i] >= 0) {
        posArr[i * 3] += velocities[i * 3] * delta;
        posArr[i * 3 + 1] += velocities[i * 3 + 1] * delta;
        posArr[i * 3 + 2] += velocities[i * 3 + 2] * delta;
      }
    }

    geo.attributes.position.needsUpdate = true;
  });

  const smokeTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64; 
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(220, 222, 225, 0.85)"); 
    gradient.addColorStop(0.2, "rgba(160, 165, 170, 0.5)"); 
    gradient.addColorStop(0.6, "rgba(100, 105, 110, 0.15)"); 
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        map={smokeTexture}
        size={2.2}               
        transparent={true}
        depthWrite={false}
        blending={THREE.NormalBlending}
        color="#d2d7df"          
      />
    </points>
  );
}