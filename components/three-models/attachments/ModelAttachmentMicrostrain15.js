import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef();
  let modelPosition = [];
  let modelRotation = [];
  for (let i = 0; i < 3; i++) {
    modelPosition[i] = props.dataOne.xyz[i] + props.dataTwo.xyz[i] + props.dataThree.xyz[i];
    modelRotation[i] = props.dataOne.rpy[i] + props.dataTwo.rpy[i] + props.dataThree.rpy[i];
  }
  const { nodes, materials } = useGLTF('/models/attachments/attachment-microstrain-3dm-gx5-15.glb');
  return (
    <group ref={group} {...props} dispose={null} position={modelPosition} rotation={modelRotation} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['attachment-microstrain-3dm-gx5-15'].geometry}
        material={nodes['attachment-microstrain-3dm-gx5-15'].material}
      >
        <meshStandardMaterial attach="material" color="rgb(150, 150, 150)" />
      </ mesh>
    </group>
  );
}

useGLTF.preload('/models/attachments/attachment-microstrain-3dm-gx5-15.glb');