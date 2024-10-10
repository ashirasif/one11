"use client"
import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import Scene from '~/components/3d/scene'
import Cards from '~/components/Cards'
import Clients from '~/components/Clients'
import HeroSection from '~/components/HeroSection'
import Markup from '~/components/Markup'
import Navbar from '~/components/Navbar'

function Page() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    // mouse move event listener
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5
      const y = event.clientY / window.innerHeight - 0.5
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])



  return (
    <div className='relative'>
      <div className='absolute bg-black/50 top-0 left-0 z-10'>
        <div className='flex flex-col justify-center h-full'>
          <Navbar/>
          <HeroSection/>
          <Markup/>
          <Cards/>
        </div>
      </div>
      <div className='absolute top-0 left-0 w-screen h-screen'>
        <Canvas>
          <Scene mousePosition={mousePosition} />
        </Canvas>
      </div>
    </div>
  )
}

export default Page
