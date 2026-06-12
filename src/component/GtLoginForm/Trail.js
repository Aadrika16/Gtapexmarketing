import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Trail() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.material.opacity =
      0.12 + Math.sin(state.clock.elapsedTime * 9) * 0.06;
  });

  return (
    <mesh ref={ref} position={[0, -1.23, -5]} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[4.5, 4.8, 64]} />
      <meshBasicMaterial color="#ff2a00" transparent opacity={0.15} toneMapped={false} />
    </mesh>
  );
}