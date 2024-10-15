import React from 'react'
import {
  Card,
  CardContent,
} from "~/components/ui/card"

export default function ServiceCards() {
  return (
    <section className='flex flex-col items-center justify-center py-4 bg-black'>
      <div className='grid lg:grid-cols-3 max-md:grid-rows-3 mx-4 gap-4 bg-black max-w-screen-xl mt-12'>
        <Card className='border border-primary pt-4'>
          <CardContent className='text-center flex flex-col gap-4'>
            <h3 className='font-black'>
              Expert Assistance
            </h3>
            <p>
              Our experienced staff ensures a seamless rental experience.
            </p>
          </CardContent>
        </Card>

        <Card className='border border-primary pt-4'>
          <CardContent className='text-center flex flex-col gap-4'>
            <h3 className='font-black'>
              Prestigious Fleet
            </h3>
            <p>
              Experience the thrill of driving luxury brands like Lamborghini, Maserati, Ferrari, Rolls-Royce, and more. Indulge in ultimate style and performance with our exclusive fleet!
            </p>
          </CardContent>
        </Card>

        <Card className='border border-primary pt-4'>
          <CardContent className='text-center flex flex-col gap-4'>
            <h3 className='font-black'>
              Convenient Delivery
            </h3>
            <p>
              We offer convenient pick-up and drop-off services for the car of your choice, wherever you are.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

