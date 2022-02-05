import { PerspectiveCamera } from "@react-three/drei";

function ConfiguredCamera() {
  return (
    <PerspectiveCamera
      makeDefault
      fov={65}
      position={[600, 0, 600]}
    />
  );
}

export default ConfiguredCamera;
