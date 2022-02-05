import { OrbitControls } from "@react-three/drei";

function ConfiguredOrbitControls() {
  return (
    <OrbitControls
      makeDefault
      maxPolarAngle={Math.PI / 2.4}
      minPolarAngle={0.5}
      enableZoom={false}
      enablePan={false}
    />
  );
}

export default ConfiguredOrbitControls;
