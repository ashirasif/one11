"use client"
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Model } from '../car';
import { BakeShadows, Environment, PerspectiveCamera, SoftShadows } from '@react-three/drei';

const Scene = (props: {
  mousePosition: { x: number; y: number };
}) => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  // isMobile
  const [isMobile, ] = useState(window.innerWidth < 728);

  useFrame((state, delta) => {
    if (cameraRef.current && !isMobile) {
      const { x } = props.mousePosition;
      console.log(cameraRef.current.position.x, cameraRef.current.position.y, cameraRef.current.position.z);
      // Make the mesh slightly turn towards the cursor's position
      // Smoothly move the camera based on the mouse position
      cameraRef.current.position.x = (x *2 - cameraRef.current.position.x) * 0.008;

      // Keep the camera looking at the object's position
      cameraRef.current.lookAt(3,4,0);
    } else if (isMobile && cameraRef.current) {
      // animate the camera
      cameraRef.current.position.x += Math.sin(state.clock.elapsedTime) * delta * 6;
      cameraRef.current.position.y += Math.sin(state.clock.elapsedTime) * delta * 6;
      cameraRef.current.lookAt(15,2,0);
    }
  });

  return (
    <group>
      <Model castShadow receiveShadow/>
      {/* @ts-ignore */}
      <PerspectiveCamera ref={cameraRef} position={!isMobile ? [-19, 15, 47] : [-16, 11, 54]} makeDefault />
      <pointLight position={[5, 5, 5]} intensity={1} />
      {
      }
      <Environment files={"/car_hd.hdr"} background />
    </group>
  );
};

export default Scene;
