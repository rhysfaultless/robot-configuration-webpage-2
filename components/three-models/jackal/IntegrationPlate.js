import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/jackal/chassis-integration-plate-jackal.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['chassis-integration-plate-jackal'].geometry}
        material={nodes['chassis-integration-plate-jackal'].material}
      >
        <meshStandardMaterial attach="material" color="rgb(80, 80, 80)" />
      </ mesh>
    </group>
  );
}

useGLTF.preload('/models/jackal/chassis-integration-plate-jackal.glb');