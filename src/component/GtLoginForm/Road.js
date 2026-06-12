import React from "react";

export default function Road() {
  return (
    <group>
      {/* Wet Lacquered Asphalt Highway */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.25, -50]}
        receiveShadow
      >
        <planeGeometry args={[50, 450]} />
        <meshPhysicalMaterial
          color="#07090d"
          roughness={0.15}
          metalness={0.2}
          clearcoat={1.0}             // Wet specular layer
          clearcoatRoughness={0.08}   // Mirror pooling consistency
        />
      </mesh>

      {/* Cyberpunk Yellow/Orange Divider Lines */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.24, -50]}
      >
        <planeGeometry args={[0.3, 450]} />
        <meshBasicMaterial color="#ffa500" toneMapped={false} />
      </mesh>
    </group>
  );
}