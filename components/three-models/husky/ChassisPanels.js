import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/husky/chassis-panels-husky.glb');
  return (
    <group ref={group} {...props} dispose={null} position={props.modelPosition} rotation={props.modelRotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['chassis-panels-husky'].geometry}
        material={nodes['chassis-panels-husky'].material}
      >
        <meshStandardMaterial attach="material" color={props.modelColour} />
      </ mesh>
    </group>
  );
}

useGLTF.preload('/models/husky/chassis-panels-husky.glb');