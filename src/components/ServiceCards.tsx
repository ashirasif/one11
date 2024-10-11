import React from 'react'
import {
  Card,
  CardContent,
} from "~/components/ui/card"

export default function ServiceCards() {
  return (
    <section className='flex flex-col items-center justify-center py-4 bg-black'>
      <div className='grid lg:grid-cols-3 grid-rows-3 mx-4 gap-4 bg-black max-w-screen-xl mt-52'>
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
              Drive luxury brands like Mercedes-Benz, BMW, Audi, and Rolls-Royce.
            </p>
          </CardContent>
        </Card>

        <Card className='border border-primary pt-4'>
          <CardContent className='text-center flex flex-col gap-4'>
            <h3 className='font-black'>
              Convenient Delivery
            </h3>
            <p>
              We deliver and collect your vehicle from your home, hotel, or airport.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

