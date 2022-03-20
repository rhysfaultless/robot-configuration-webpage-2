import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  let modelPosition = [];
  let modelRotation = [];
  for (let i = 0; i < 3; i++) {
    modelPosition[i] = props.dataOne.xyz[i] + props.dataTwo.xyz[i]; 
    modelRotation[i] = props.dataOne.rpy[i] + props.dataTwo.rpy[i];
  }
  const { nodes, materials } = useGLTF('/models/attachments/attachment-bracket-horizontal.glb');
  return (
    <group ref={group} {...props} dispose={null} position={modelPosition} rotation={modelRotation} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['attachment-bracket-horizontal'].geometry}
        material={nodes['attachment-bracket-horizontal'].material}
      >
        <meshStandardMaterial attach="material" color="rgb(80, 80, 80)" />
      </ mesh>
    </group>
  );
}

useGLTF.preload('/models/attachments/attachment-bracket-horizontal.glb');
