import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/boxer/chassis-panels-boxer.glb');
  return (
    <group ref={group} {...props} dispose={null} position={props.modelPosition} rotation={props.modelRotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['chassis-panels-boxer'].geometry}
        material={nodes['chassis-panels-boxer'].material}
      >
        <meshStandardMaterial attach="material" color={props.modelColour} />
      </ mesh>
    </group>
  );
}

useGLTF.preload('/models/boxer/chassis-panels-boxer.glb');