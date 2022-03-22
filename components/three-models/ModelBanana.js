import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/banana.glb');
  return (
    <group ref={group} {...props} dispose={null} position={props.dataOne.xyz} rotation={props.dataOne.rpy}> 
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['banana-4'].geometry}
        material={nodes['banana-4'].material}
      >
        <meshStandardMaterial attach="material" color="rgb(255, 167, 0)" />
      </ mesh>
    </group>
  );
}

useGLTF.preload('/models/banana.glb');