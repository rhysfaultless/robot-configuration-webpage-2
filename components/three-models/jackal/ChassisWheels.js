import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/jackal/chassis-wheels-jackal.glb');
  return (
    <group ref={group} {...props} dispose={null} position={props.modelPosition} rotation={props.modelRotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['chassis-wheels-jackal'].geometry}
        material={nodes['chassis-wheels-jackal'].material}
      >
        <meshStandardMaterial attach="material" color="rgb(60, 60, 60)" />
      </ mesh>
    </group>
  );
}

useGLTF.preload('/models/jackal/chassis-wheels-jackal.glb');