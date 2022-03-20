import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/husky/integration-tower-200-husky.glb');
  return (
    <group ref={group} {...props} dispose={null} position={props.modelPosition} rotation={props.modelRotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['integration-tower-200-husky'].geometry}
        material={nodes['integration-tower-200-husky'].material}
      >
        <meshStandardMaterial attach="material" color="rgb(80, 80, 80)" />
      </ mesh>
    </group>
  );
}

useGLTF.preload('/models/husky/integration-tower-200-husky.glb');