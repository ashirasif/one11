"use client"
import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import Scene from '~/components/3d/scene'
import About from '~/components/About'
import Cards from '~/components/Cards'
import Chauffer from '~/components/Chauffer'
import Clients from '~/components/Clients'
import Footer from '~/components/Footer'
import HeroSection from '~/components/HeroSection'
import Markup from '~/components/Markup'
import Navbar from '~/components/Navbar'
import ServiceCards from '~/components/ServiceCards'
import Testimonials from '~/components/Testimonials'
import { getAllCars } from '~/lib/data'

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

  getAllCars()

  return (
    <div className='relative'>
      <div className='absolute bg-black/50 top-0 left-0 z-10'>
        <div className='flex flex-col justify-center h-full overflow-x-hidden w-screen'>
          <Navbar/>
          <HeroSection/>
          <Markup/>
          <Cards/>
          <About/>
          <ServiceCards/>
          <Chauffer/>
          <Testimonials/>
          <Footer />
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
