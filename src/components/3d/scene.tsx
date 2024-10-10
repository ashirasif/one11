"use client"
import React, { useRef, useState } from 'react';
import { ThreeEvent, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Model } from '../car';
import { Environment, PerspectiveCamera } from '@react-three/drei';

const Scene = (props: {
  mousePosition: { x: number; y: number };
}) => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(() => {
    if (cameraRef.current) {
      const { x, y } = props.mousePosition;
      console.log(x,y)
      // Make the mesh slightly turn towards the cursor's position

      // Smoothly move the camera based on the mouse position
      cameraRef.current.position.x += (x * 2 - cameraRef.current.position.x) * 0.05;

      // Keep the camera looking at the object's position
      cameraRef.current.lookAt(-3,0,0);
    }
  });

  return (
    <group>
      <Model/>
      <PerspectiveCamera ref={cameraRef} position={[0, 1, 5]} makeDefault />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <Environment background files={"/car_hd.hdr"} />
    </group>
  );
};

export default Scene;
