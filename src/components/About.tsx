import React from 'react'
import { useIsVisible } from '~/lib/observer'
import { cn } from '~/lib/utils'


export default function About() {

  const ref = React.useRef(null)
  const isVisible = useIsVisible(ref)

  return (
    <section className='flex justify-center py-4 items-center bg-black'>
      <div className={cn('grid grid-cols-10 gap-12 mt-24 max-w-screen-xl border border-primary transition-all duration-1000 p-12 rounded-md', isVisible ? "shadow-amber-700" : "shadow-transparent")}>
        <div className='col-span-4 flex flex-col justify-center'>
          <h1 ref={ref} className='gold-text'>ABOUT US</h1>
          <h3 className='bg-gradient-to-r from-stone-50 to-neutral-600 bg-clip-text text-transparent'>
            Top-Notch Luxury Car Rentals Across the UAE
          </h3>
        </div>
        <div className='col-span-6'>
          <p className='text-primary-foreground'>
            stablished in November 2023, One11 Luxury Rentals is renowned for offering premium luxury car rentals throughout the UAE. Our meticulously curated selection of high-end vehicles ensures a superior blend of comfort and elegance, whether you’re navigating the vibrant streets of Dubai or discovering the picturesque landscapes of the Emirates. Committed to excellence, we strive to provide exceptional service, ensuring that every aspect of your experience with us exceeds expectations.
          </p>
        </div>
      </div>
    </section>
  )
}

