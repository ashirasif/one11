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

  // isMobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 728);

  useFrame((state, delta) => {
    if (cameraRef.current && !isMobile) {
      const { x, y } = props.mousePosition;
      // Make the mesh slightly turn towards the cursor's position

      // Smoothly move the camera based on the mouse position
      cameraRef.current.position.x += (x * 2 - cameraRef.current.position.x) * 0.05;

      // Keep the camera looking at the object's position
      cameraRef.current.lookAt(-3,0,0);
    } else if (isMobile) {
      // animate the camera
      cameraRef.current.position.x += Math.sin(state.clock.elapsedTime) * delta * 0.6;
      cameraRef.current.position.y += Math.sin(state.clock.elapsedTime) * delta * 0.3;
      cameraRef.current.lookAt(0,0,0);
    }
  });

  return (
    <group>
      <Model/>
      <PerspectiveCamera ref={cameraRef} position={!isMobile ? [0, 1, 5] : [0, 1, 8]} makeDefault />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <Environment background files={"/car_hd.hdr"} />
    </group>
  );
};

export default Scene;
