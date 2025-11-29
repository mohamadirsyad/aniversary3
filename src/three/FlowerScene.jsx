import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FlowerGrow from "./FlowerGrow";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function FlowerScene() {
  return (
    <div className="w-full h-[350px] md:h-[450px]">
      <p>Ada Bunga buat kamu hehehe💗</p>
      <Canvas camera={{ position: [2, 2, 4] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={1.5} />

        <FlowerGrow position={[0, -0.5, 0]} />

        <OrbitControls enableZoom={false} enablePan={false} />

        <EffectComposer>
          <Bloom
            intensity={1.3}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
