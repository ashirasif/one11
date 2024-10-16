// @ts-nocheck
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/urus/urus.gltf -ts -o ./src/components/car.tsx 
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Mesh1_Color_C01_0: THREE.Mesh
    Mesh10_Color_A01_0: THREE.Mesh
    Mesh11__Color_A08_6_0: THREE.Mesh
    Mesh11__Color_B04_1_0: THREE.Mesh
    Mesh11__Translucent_Glass_Tinted_1_0: THREE.Mesh
    Mesh11_c1_0: THREE.Mesh
    Mesh11_Color_A01_0: THREE.Mesh
    Mesh11_Color_A01_0001: THREE.Mesh
    Mesh11_Color_A01_0002: THREE.Mesh
    Mesh11_Color_A01_0003: THREE.Mesh
    Mesh11_Color_A01_0004: THREE.Mesh
    Mesh11_Color_A01_0005: THREE.Mesh
    Mesh11_Color_B01_0: THREE.Mesh
    Mesh11_Color_C02_0: THREE.Mesh
    Mesh11_Color_M02_0: THREE.Mesh
    Mesh11_Color_M1_0: THREE.Mesh
    Mesh11_Translucent_Glass_Tinted_0: THREE.Mesh
    Mesh13_Color_C01_0: THREE.Mesh
    Mesh14_Color_C01_0: THREE.Mesh
    Mesh15_Color_A01_0: THREE.Mesh
    Mesh15_Translucent_Glass_Tinted_0: THREE.Mesh
    Mesh16__Color_A08_6_0: THREE.Mesh
    Mesh16_Color_A01_0: THREE.Mesh
    Mesh16_Translucent_Glass_Gray_0: THREE.Mesh
    Mesh17__Translucent_Glass_Tinted_1_0: THREE.Mesh
    Mesh17_Color_A01_0: THREE.Mesh
    Mesh18_Color_A01_0: THREE.Mesh
    Mesh19_c2_0: THREE.Mesh
    Mesh19_Color_A01_0: THREE.Mesh
    Mesh19_Color_M1_0: THREE.Mesh
    Mesh2_Color_C01_0: THREE.Mesh
    Mesh20_c2_0: THREE.Mesh
    Mesh20_Color_A01_0: THREE.Mesh
    Mesh20_Color_M1_0: THREE.Mesh
    Mesh21__Color_A08_6_0: THREE.Mesh
    Mesh21_Color_A01_0: THREE.Mesh
    Mesh21_Color_M02_0: THREE.Mesh
    Mesh22_Color_M02_0: THREE.Mesh
    Mesh23_Color_A01_0: THREE.Mesh
    Mesh23_Color_M02_0: THREE.Mesh
    Mesh24__Color_A08_6_0: THREE.Mesh
    Mesh24_Color_A01_0: THREE.Mesh
    Mesh24_Color_M02_0: THREE.Mesh
    Mesh25_Color_M02_0: THREE.Mesh
    Mesh26_Color_A01_0: THREE.Mesh
    Mesh26_Color_M02_0: THREE.Mesh
    Mesh27__Color_A08_6_0: THREE.Mesh
    Mesh27_c2_0: THREE.Mesh
    Mesh27_Color_A01_0: THREE.Mesh
    Mesh27_Color_A01_0001: THREE.Mesh
    Mesh27_Color_M1_0: THREE.Mesh
    Mesh28_Color_M02_0: THREE.Mesh
    Mesh29_Color_A01_0: THREE.Mesh
    Mesh29_Color_M02_0: THREE.Mesh
    Mesh30__Color_A08_6_0: THREE.Mesh
    Mesh30_Color_A01_0: THREE.Mesh
    Mesh30_Color_M02_0: THREE.Mesh
    Mesh31_Color_M02_0: THREE.Mesh
    Mesh32_Color_A01_0: THREE.Mesh
    Mesh32_Color_M02_0: THREE.Mesh
    Mesh33__Color_A08_6_0: THREE.Mesh
    Mesh33_c2_0: THREE.Mesh
    Mesh33_Color_A01_0: THREE.Mesh
    Mesh33_Color_A01_0001: THREE.Mesh
    Mesh33_Color_M1_0: THREE.Mesh
    Mesh36_Color_A01_0: THREE.Mesh
    Mesh36_Translucent_Glass_Tinted_0: THREE.Mesh
    Mesh37__Color_A08_6_0: THREE.Mesh
    Mesh37_Color_A01_0: THREE.Mesh
    Mesh37_Translucent_Glass_Gray_0: THREE.Mesh
    Mesh38__Translucent_Glass_Tinted_1_0: THREE.Mesh
    Mesh38_Color_A01_0: THREE.Mesh
    Mesh39_Color_A01_0: THREE.Mesh
    Mesh4__Color_C02_2_0: THREE.Mesh
    Mesh40_c2_0: THREE.Mesh
    Mesh40_Color_A01_0: THREE.Mesh
    Mesh40_Color_M1_0: THREE.Mesh
    Mesh41_c2_0: THREE.Mesh
    Mesh41_Color_A01_0: THREE.Mesh
    Mesh41_Color_M1_0: THREE.Mesh
    Mesh42__Color_A08_6_0: THREE.Mesh
    Mesh42_Color_A01_0: THREE.Mesh
    Mesh42_Color_M02_0: THREE.Mesh
    Mesh43_Color_M02_0: THREE.Mesh
    Mesh44_Color_A01_0: THREE.Mesh
    Mesh44_Color_M02_0: THREE.Mesh
    Mesh45__Color_A08_6_0: THREE.Mesh
    Mesh45_Color_A01_0: THREE.Mesh
    Mesh45_Color_M02_0: THREE.Mesh
    Mesh46_Color_M02_0: THREE.Mesh
    Mesh47_Color_A01_0: THREE.Mesh
    Mesh47_Color_M02_0: THREE.Mesh
    Mesh48__Color_A08_6_0: THREE.Mesh
    Mesh48_c2_0: THREE.Mesh
    Mesh48_Color_A01_0: THREE.Mesh
    Mesh48_Color_A01_0001: THREE.Mesh
    Mesh48_Color_M1_0: THREE.Mesh
    Mesh49_Color_M02_0: THREE.Mesh
    Mesh5_Color_C02_0: THREE.Mesh
    Mesh50_Color_A01_0: THREE.Mesh
    Mesh50_Color_M02_0: THREE.Mesh
    Mesh51__Color_A08_6_0: THREE.Mesh
    Mesh51_Color_A01_0: THREE.Mesh
    Mesh51_Color_M02_0: THREE.Mesh
    Mesh52_Color_M02_0: THREE.Mesh
    Mesh53_Color_A01_0: THREE.Mesh
    Mesh53_Color_M02_0: THREE.Mesh
    Mesh54__Color_A08_6_0: THREE.Mesh
    Mesh54_c2_0: THREE.Mesh
    Mesh54_Color_A01_0: THREE.Mesh
    Mesh54_Color_A01_0001: THREE.Mesh
    Mesh54_Color_M1_0: THREE.Mesh
    Mesh55__Color_A08_6_0001: THREE.Mesh
    Mesh55__Color_A08_6_0002: THREE.Mesh
    Mesh55__Translucent_Glass_Tinted_1_0: THREE.Mesh
    Mesh55_c1_0: THREE.Mesh
    Mesh55_Color_A01_0: THREE.Mesh
    Mesh55_glass_color1_0: THREE.Mesh
    Mesh55_Translucent_Glass_Gray_0: THREE.Mesh
    Mesh55_v2_0: THREE.Mesh
    Mesh6__Color_C02_1_0: THREE.Mesh
    Mesh7__Color_C02_2_0: THREE.Mesh
    Mesh8__Color_C02_2_0: THREE.Mesh
    Mesh9_Color_A01_0: THREE.Mesh
    Cylinder: THREE.Mesh
  }
  materials: {
    Color_C01: THREE.MeshStandardMaterial
    Color_A01: THREE.MeshStandardMaterial
    Color_A08_6: THREE.MeshPhysicalMaterial
    Color_B04_1: THREE.MeshStandardMaterial
    Translucent_Glass_Tinted_1: THREE.MeshStandardMaterial
    material_12: THREE.MeshStandardMaterial
    Color_B01: THREE.MeshStandardMaterial
    Color_C02: THREE.MeshStandardMaterial
    Color_M02: THREE.MeshStandardMaterial
    Color_M1: THREE.MeshPhysicalMaterial
    Translucent_Glass_Tinted: THREE.MeshStandardMaterial
    Translucent_Glass_Gray: THREE.MeshPhysicalMaterial
    material: THREE.MeshStandardMaterial
    Color_C02_2: THREE.MeshStandardMaterial
    glass_color1: THREE.MeshPhysicalMaterial
    material_15: THREE.MeshStandardMaterial
    Color_C02_1: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/urus/urus.gltf') as GLTFResult
  return (
    <group {...props} dispose={null} position={[10,0,0]}>
      <mesh receiveShadow geometry={nodes.Cylinder.geometry} position={[9.785, -1.603, -13.378]} scale={[11.137, 1, 11.137]}>
        <meshStandardMaterial color={"#ffffff"} metalness={1} roughness={0} />
      </mesh>
      <group scale={0.01} rotation={[0, -Math.PI / 12, 0]}>
        <group position={[1090.397, 970.521, -1257.326]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh11__Color_A08_6_0.geometry} material={materials.Color_A08_6} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh11__Color_B04_1_0.geometry} material={materials.Color_B04_1} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh11__Translucent_Glass_Tinted_1_0.geometry} material={materials.Translucent_Glass_Tinted_1} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh11_c1_0.geometry} material={materials.material_12} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh11_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh11_Color_A01_0001.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh11_Color_A01_0002.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh11_Color_A01_0003.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh11_Color_A01_0004.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh11_Color_A01_0005.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh11_Color_B01_0.geometry} material={materials.Color_B01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh11_Color_C02_0.geometry} material={materials.Color_C02} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh11_Color_M02_0.geometry} material={materials.Color_M02} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh11_Color_M1_0.geometry} material={materials.Color_M1} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh11_Translucent_Glass_Tinted_0.geometry} material={materials.Translucent_Glass_Tinted} />
        </group>
        <group position={[1820.769, 881.461, 634.189]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh15_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh15_Translucent_Glass_Tinted_0.geometry} material={materials.Translucent_Glass_Tinted} />
        </group>
        <group position={[2093.535, 1236.03, -889.507]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh16__Color_A08_6_0.geometry} material={materials.Color_A08_6} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh16_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh16_Translucent_Glass_Gray_0.geometry} material={materials.Translucent_Glass_Gray} />
        </group>
        <group position={[1754.774, 1127.829, -3743.126]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh17__Translucent_Glass_Tinted_1_0.geometry} material={materials.Translucent_Glass_Tinted_1} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh17_Color_A01_0.geometry} material={materials.Color_A01} />
        </group>
        <group position={[1663.131, 265.23, -3943.084]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh19_c2_0.geometry} material={materials.material} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh19_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh19_Color_M1_0.geometry} material={materials.Color_M1} />
        </group>
        <group position={[1803.346, 265.23, -3906.336]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh20_c2_0.geometry} material={materials.material} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh20_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh20_Color_M1_0.geometry} material={materials.Color_M1} />
        </group>
        <group position={[1645.532, 321.427, 998.768]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh21__Color_A08_6_0.geometry} material={materials.Color_A08_6} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh21_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh21_Color_M02_0.geometry} material={materials.Color_M02} />
        </group>
        <group position={[1586.048, 419.434, -3019.266]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh23_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh23_Color_M02_0.geometry} material={materials.Color_M02} />
        </group>
        <group position={[2057.887, 412.22, -3254.351]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh24__Color_A08_6_0.geometry} material={materials.Color_A08_6} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh24_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh24_Color_M02_0.geometry} material={materials.Color_M02} />
        </group>
        <group position={[1750.952, 600.815, -3016.77]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh26_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh26_Color_M02_0.geometry} material={materials.Color_M02} />
        </group>
        <group position={[2096.314, 410.972, -3019.378]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh27__Color_A08_6_0.geometry} material={materials.Color_A08_6} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh27_c2_0.geometry} material={materials.material} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh27_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh27_Color_A01_0001.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh27_Color_M1_0.geometry} material={materials.Color_M1} />
        </group>
        <group position={[1546.048, 419.433, 0.723]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh29_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh29_Color_M02_0.geometry} material={materials.Color_M02} />
        </group>
        <group position={[2017.887, 412.22, -234.362]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh30__Color_A08_6_0.geometry} material={materials.Color_A08_6} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh30_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh30_Color_M02_0.geometry} material={materials.Color_M02} />
        </group>
        <group position={[1710.953, 600.815, 3.215]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh32_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh32_Color_M02_0.geometry} material={materials.Color_M02} />
        </group>
        <group position={[2056.313, 410.971, 0.615]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh33__Color_A08_6_0.geometry} material={materials.Color_A08_6} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh33_c2_0.geometry} material={materials.material} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh33_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh33_Color_A01_0001.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh33_Color_M1_0.geometry} material={materials.Color_M1} />
        </group>
        <group position={[283.926, 881.461, 634.189]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh36_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh36_Translucent_Glass_Tinted_0.geometry} material={materials.Translucent_Glass_Tinted} />
        </group>
        <group position={[11.158, 1236.03, -889.507]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh37__Color_A08_6_0.geometry} material={materials.Color_A08_6} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh37_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh37_Translucent_Glass_Gray_0.geometry} material={materials.Translucent_Glass_Gray} />
        </group>
        <group position={[349.916, 1127.829, -3743.126]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh38__Translucent_Glass_Tinted_1_0.geometry} material={materials.Translucent_Glass_Tinted_1} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh38_Color_A01_0.geometry} material={materials.Color_A01} />
        </group>
        <group position={[441.567, 265.231, -3943.084]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh40_c2_0.geometry} material={materials.material} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh40_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh40_Color_M1_0.geometry} material={materials.Color_M1} />
        </group>
        <group position={[301.347, 265.23, -3906.336]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh41_c2_0.geometry} material={materials.material} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh41_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh41_Color_M1_0.geometry} material={materials.Color_M1} />
        </group>
        <group position={[459.161, 321.427, 998.768]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh42__Color_A08_6_0.geometry} material={materials.Color_A08_6} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh42_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh42_Color_M02_0.geometry} material={materials.Color_M02} />
        </group>
        <group position={[518.657, 419.434, -3019.268]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh44_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh44_Color_M02_0.geometry} material={materials.Color_M02} />
        </group>
        <group position={[46.803, 412.22, -3254.351]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh45__Color_A08_6_0.geometry} material={materials.Color_A08_6} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh45_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh45_Color_M02_0.geometry} material={materials.Color_M02} />
        </group>
        <group position={[353.737, 600.815, -3016.77]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh47_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh47_Color_M02_0.geometry} material={materials.Color_M02} />
        </group>
        <group position={[8.355, 410.972, -3019.378]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh48__Color_A08_6_0.geometry} material={materials.Color_A08_6} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh48_c2_0.geometry} material={materials.material} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh48_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh48_Color_A01_0001.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh48_Color_M1_0.geometry} material={materials.Color_M1} />
        </group>
        <group position={[558.656, 419.433, 0.723]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh50_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh50_Color_M02_0.geometry} material={materials.Color_M02} />
        </group>
        <group position={[86.803, 412.22, -234.362]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh51__Color_A08_6_0.geometry} material={materials.Color_A08_6} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh51_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh51_Color_M02_0.geometry} material={materials.Color_M02} />
        </group>
        <group position={[393.736, 600.815, 3.215]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh53_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh53_Color_M02_0.geometry} material={materials.Color_M02} />
        </group>
        <group position={[48.355, 410.971, 0.615]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh54__Color_A08_6_0.geometry} material={materials.Color_A08_6} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh54_c2_0.geometry} material={materials.material} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh54_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh54_Color_A01_0001.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh54_Color_M1_0.geometry} material={materials.Color_M1} />
        </group>
        <group position={[1052.08, 772.403, -1657.292]} scale={0.01}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh55__Color_A08_6_0001.geometry} material={materials.Color_A08_6} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh55__Color_A08_6_0002.geometry} material={materials.material_12} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh55__Translucent_Glass_Tinted_1_0.geometry} material={materials.Translucent_Glass_Tinted_1} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh55_c1_0.geometry} material={materials.material_12} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh55_Color_A01_0.geometry} material={materials.Color_A01} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh55_glass_color1_0.geometry} material={materials.glass_color1} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh55_Translucent_Glass_Gray_0.geometry} material={materials.Translucent_Glass_Gray} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh55_v2_0.geometry} material={materials.material_15} />
        </group>
        <mesh castShadow receiveShadow geometry={nodes.Mesh1_Color_C01_0.geometry} material={materials.Color_C01} position={[2125.736, 412.125, -238.684]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh10_Color_A01_0.geometry} material={materials.Color_A01} position={[1613.297, 1096.691, -1098.656]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh13_Color_C01_0.geometry} material={materials.Color_C01} position={[2165.736, 412.125, -3258.685]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh14_Color_C01_0.geometry} material={materials.Color_C01} position={[-61.044, 412.125, -3258.684]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh18_Color_A01_0.geometry} material={materials.Color_A01} position={[1379.185, 267.441, 931.296]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh2_Color_C01_0.geometry} material={materials.Color_C01} position={[-21.044, 412.125, -238.684]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh22_Color_M02_0.geometry} material={materials.Color_M02} position={[2064.568, 412.241, -3019.953]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh25_Color_M02_0.geometry} material={materials.Color_M02} position={[2110.094, 411.803, -3019.303]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh28_Color_M02_0.geometry} material={materials.Color_M02} position={[2024.572, 412.241, 0.048]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh31_Color_M02_0.geometry} material={materials.Color_M02} position={[2070.094, 411.802, 0.697]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh39_Color_A01_0.geometry} material={materials.Color_A01} position={[725.507, 267.441, 931.296]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh4__Color_C02_2_0.geometry} material={materials.Color_C02_2} position={[1480.897, 1119.323, -814.013]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh43_Color_M02_0.geometry} material={materials.Color_M02} position={[40.028, 412.241, -3019.953]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh46_Color_M02_0.geometry} material={materials.Color_M02} position={[-5.398, 411.803, -3019.304]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh49_Color_M02_0.geometry} material={materials.Color_M02} position={[80.027, 412.241, 0.048]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh5_Color_C02_0.geometry} material={materials.Color_C02} position={[1052.346, 1062.087, -914.159]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh52_Color_M02_0.geometry} material={materials.Color_M02} position={[34.602, 411.802, 0.697]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh6__Color_C02_1_0.geometry} material={materials.Color_C02_1} position={[1052.566, 934.791, -1067.738]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh7__Color_C02_2_0.geometry} material={materials.Color_C02_2} position={[1315.693, 1126.138, -842.414]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh8__Color_C02_2_0.geometry} material={materials.Color_C02_2} position={[1645.004, 1124.807, -840.886]} scale={0.01} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh9_Color_A01_0.geometry} material={materials.Color_A01} position={[1349.722, 1096.323, -1098.172]} scale={0.01} />
      </group>
    </group>
  )
}

useGLTF.preload('/urus.gltf')
