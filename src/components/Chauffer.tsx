import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

export default function Chauffer() {
  return (
    <div className="relative bg-black p-2 lg:w-full md:w-3/4">
      <div className="relative z-10 flex max-w-screen-xl mx-auto mt-64 max-lg:flex-col-reverse h-full items-center justify-evenly lg:gap-2 gap-24 rounded-2xl p-4 shadow-amber-700 shadow-[0_0_60px_7px_rgba(0,0,0,0.5)]">
        <div className="flex h-full flex-col justify-center gap-4">
          <h1 className="font-black gold-text uppercase tracking-tight text-center lg:text-left">
            Chauffer <br />
            <span className='bg-gradient-to-r from-stone-50 to-stone-400 bg-clip-text text-transparent'>
              Services
            </span>
          </h1>
          <p className="leading-7 text-primary-foreground lg:w-96 [&:not(:first-child)]:mt-6 text-center lg:text-left">
            Our fleet consists of premium vehicles equipped with state-of-the-art amenities, providing a luxurious travel experience. We tailor our services to meet the unique needs and preferences of each client, ensuring a memorable and enjoyable journey.
          </p>
        </div>
        <div className="overflow-hidden">
          <Image
            alt="lounge-image"
            src="/chaf.jpg"
            width={400}
            height={400}
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  )
}

