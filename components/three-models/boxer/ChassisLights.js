import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/boxer/chassis-lights-boxer.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['chassis-lights-boxer'].geometry}
        material={nodes['chassis-lights-boxer'].material}
      >
        <meshStandardMaterial attach="material" color="rgb(240, 240, 240)" />
      </ mesh>
    </group>
  );
}

useGLTF.preload('/models/boxer/chassis-lights-boxer.glb');