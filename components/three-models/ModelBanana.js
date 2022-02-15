/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  let modelPosition = [];
  let modelRotation = [];
  for (let i = 0; i < 3; i++) {
    modelPosition[i] = props.dataOne.xyz[i]; 
    modelRotation[i] = props.dataOne.uvw[i];
  }
  const { nodes, materials } = useGLTF("/models/banana.glb");
  return (
    <group ref={group} {...props} dispose={null} position={modelPosition} rotation={modelRotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.banana.geometry}
        material={nodes.banana.material}
      >
        <meshStandardMaterial attach="material" color="rgb(255, 167, 0)" />
      </ mesh>
    </group>
  );
}

useGLTF.preload("/models/banana.glb");