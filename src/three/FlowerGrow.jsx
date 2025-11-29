import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function FlowerGrow(props) {
  const group = useRef();
  const petals = useRef([]);
  const stem = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // ---------- ANIMASI TUMBUH ----------
    const grow = Math.min(t / 3, 1); // 3 detik untuk tumbuh penuh
    group.current.scale.set(grow, grow, grow);

    // ---------- GOYANG LEMBUT ----------
    group.current.rotation.z = Math.sin(t * 0.6) * 0.05;
    group.current.rotation.x = Math.sin(t * 0.4) * 0.03;

    // ---------- ANIMASI MEKAR ----------
    petals.current.forEach((p, i) => {
      if (!p) return;
      const delay = i * 0.2;
      const bloom = Math.max(0, t - 1.5 - delay);
      p.rotation.x = -Math.min(bloom, 1) * 0.8;
    });
  });

  return (
    <group ref={group} {...props}>
      {/* Batang */}
      <mesh ref={stem} position={[0, -1, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 2]} />
        <meshStandardMaterial color="#3fa34d" />
      </mesh>

      {/* Cabang kiri */}
      <mesh position={[-0.4, -0.3, 0]} rotation={[0, 0, 0.6]}>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="#3fa34d" />
      </mesh>

      {/* Cabang kanan */}
      <mesh position={[0.4, -0.1, 0]} rotation={[0, 0, -0.4]}>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="#3fa34d" />
      </mesh>

      {/* Kepala bunga */}
      <group position={[0, 1, 0]}>
        <mesh>
          <sphereGeometry args={[0.28, 32, 32]} />
          <meshStandardMaterial
            color="#ff93d4"
            emissive="#ff48c4"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Kelopak */}
        {[...Array(8)].map((_, i) => (
          <mesh
            key={i}
            ref={(el) => (petals.current[i] = el)}
            position={[
              Math.sin((i * Math.PI) / 4) * 0.5,
              0,
              Math.cos((i * Math.PI) / 4) * 0.5,
            ]}
          >
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial
              color="#ffb7e6"
              emissive="#ff77d8"
              emissiveIntensity={0.3}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
