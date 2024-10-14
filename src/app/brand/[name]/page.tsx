import React from 'react'
import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'
import { Separator } from '~/components/ui/separator'
import { getCarByBrand } from '~/lib/data'
import {
  Card,
  CardContent,
} from "~/components/ui/card"
import Link from 'next/link'

export default function Page({
  params
}: {
  params: {
    name: string
  }
}) {

  const cars = getCarByBrand(params.name.split('-').join(' '))


  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-b from-stone-950 to-black'>
      <Navbar />
      <div className='px-12 py-24 bg-gradient-to-b from-stone-950 to-black flex-1 text-primary-foreground'>
        <div className='max-w-screen-xl mx-auto'>
          <h1 className='scroll-m-20 font-black tracking-tight first:mt-0 bg-gradient-to-r from-stone-50 to-neutral-600 bg-clip-text text-transparent'>
            {params.name.split('-').join(' ')}
          </h1>
          <Separator className='my-8 bg-primary' />
          <div className='grid lg:grid-cols-3 gap-4'>
            {
              cars.map((car) => (
                <Link key={car.name} href={`/vehicle/${car.name.split(' ').join('-')}`}>
                  <Card className='border border-primary hover:bg-primary/50 hover:cursor-pointer transition-all duration-300 pt-4'>
                    <CardContent className='text-center  flex flex-col gap-8 h-full'>
                      <img src={`/images/${car.name} 1.jpeg`} alt="" />
                      <div className='flex-1 flex flex-col justify-center'>
                        <h3 className='font-black'>
                          {car.name}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

