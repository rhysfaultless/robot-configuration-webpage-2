import { PerspectiveCamera } from "@react-three/drei";

function ConfiguredCamera() {
  return (
    <PerspectiveCamera
      makeDefault
      fov={65}
      position={[600, -200, 600]}
    />
  );
}

export default ConfiguredCamera;
