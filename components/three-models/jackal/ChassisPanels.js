import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/jackal/chassis-panels-jackal.glb');
  return (
    <group ref={group} {...props} dispose={null} position={props.modelPosition} rotation={props.modelRotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['chassis-panels-jackal'].geometry}
        material={nodes['chassis-panels-jackal'].material}
      >
        <meshStandardMaterial attach="material" color={props.modelColour} />
      </ mesh>
    </group>
  );
}

useGLTF.preload('/models/jackal/chassis-panels-jackal.glb');