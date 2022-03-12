import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/husky/chassis-base-husky.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['chassis-base-husky'].geometry}
        material={nodes['chassis-base-husky'].material}
      >
        <meshStandardMaterial attach="material" color="rgb(80, 80, 80)" />
      </ mesh>
    </group>
  );
}

useGLTF.preload('/models/husky/chassis-base-husky.glb');