"use client"
import React from 'react'
import { useIsVisible } from '~/lib/observer'
import { cn } from '~/lib/utils'

export default function Markup() {

  return (
    <div className='pb-24 px-4 bg-gradient-to-b from-stone-950 flex flex-col justify-center to-black'>
      <div className='relative flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center max-w-screen-xl mx-auto justify-center'>
        <h3 className={cn('uppercase transition-opacity duration-1000 text-center relative z-10 bg-gradient-to-r from-stone-50 to-neutral-600 bg-clip-text text-transparent')}>
          On-demand Rides for your <br />
          <span className={cn(
            "gold-text text-4xl 2xl:text-6xl font-black leading-tight tracking-tighter",
          )}>Luxury Needs </span>
        </h3>
        <img src="/Group 10.png" className={cn('transition-opacity duration-1000 brightness-200')} alt="" />
      </div>
    </div>
  )
}

