"use client"
import React from 'react'
import { useIsVisible } from '~/lib/observer'
import { cn } from '~/lib/utils'

export default function Markup() {
  const ref = React.useRef(null)
  const isVisible = useIsVisible(ref)

  const carRef = React.useRef(null)
  const carIsVisible = useIsVisible(carRef)

  return (
    <div className='h-screen bg-gradient-to-b from-stone-950 to-black relative flex flex-col items-center justify-center'>
      <h1 ref={ref} className={cn('uppercase transition-opacity duration-1000 text-center relative z-10 text-5xl 2xl:text-9xl bg-gradient-to-r from-stone-50 to-neutral-800 bg-clip-text text-transparent', isVisible ? "opacity-100" : "opacity-10")}>
        On-demand Rides <br />
        for your <br />
        <span className={cn(
          "transition-colors duration-1000",
          isVisible ? "text-white" : "text-transparent"
        )}>Business</span> Needs
      </h1>
      <img ref={carRef} src="/Black-Car.png" className={cn('absolute top-[50%] transition-opacity duration-1000 brightness-200 translate-y-[-50%] w-3/4 lg:w-2/4', carIsVisible ? "opacity-100" : "opacity-10")} alt="" />
    </div>
  )
}

