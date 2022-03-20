import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/dingo-diff/chassis-panels-dingo-d.glb');
  return (
    <group ref={group} {...props} dispose={null} position={props.modelPosition} rotation={props.modelRotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['chassis-panels-dingo-d'].geometry}
        material={nodes['chassis-panels-dingo-d'].material}
      >
        <meshStandardMaterial attach="material" color={props.modelColour} />
      </ mesh>
    </group>
  );
}

useGLTF.preload('/models/dingo-diff/chassis-panels-dingo-d.glb');