import React from 'react'
import { CarImageCarousel } from '~/components/CarImageCarousel'
import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'
import { Button } from '~/components/ui/button'
import { Separator } from '~/components/ui/separator'
import { getCarByName } from '~/lib/data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import Link from 'next/link'

export default function Page(
  { params }: { params: { name: string } }
) {
  console.log(params)
  const car = getCarByName(params.name)

  if (!car) {
    return <div>Not found</div>
  }

  return (
    <>
      <Navbar />
      <div className='px-12 py-24 bg-gradient-to-b from-stone-950 to-black text-primary-foreground'>
        <div className='flex max-lg:flex-col gap-12 justify-center max-w-screen-xl items-center mx-auto'>
          <CarImageCarousel images={["/Black-Car.png", "jdlfjlsk"]} />
          <Separator className='my-2 lg:hidden' />
          <div className='flex flex-col self-start h-full justify-center max-sm:gap-2 gap-4 w-full basis-1/2'>
            <div className='flex flex-col justify-center h-full gap-4'>
              <h2 className="scroll-m-20 max-sm:text-2xl text-4xl font-black tracking-tight first:mt-0 bg-gradient-to-r from-stone-50 to-neutral-600 bg-clip-text text-transparent">
                {car.name}
              </h2>
              <Separator className='bg-primary' />
              <div className='flex flex-col gap-4'>
                {
                  Object.entries(car).filter(([key]) => key !== 'name').map(([key, value]) => (
                    <div key={key} className='flex gap-4 items-center'>
                      <span className='font-bold capitalize'>{key}</span>
                      <span className='capitalize'>{value}</span>
                    </div>
                  ))
                }
              </div>
              <Separator className='bg-primary' />
                <Button className='max-w-sm'>
                <Link href="tel:+971542793532">
                  Call For Price
                </Link>
                </Button>
                <Button className='max-w-sm bg-transparent text-primary-foreground' variant="outline">
                <Link href={"https://wa.me/971542793532"}>
                  Message For Price
                </Link>
                </Button>
            </div>
          </div>
        </div>
        <Separator className='my-20 bg-primary' />
        <div className='max-w-screen-lg mx-auto'>
          <h1 className='scroll-m-20 max-sm:text-2xl text-4xl font-black tracking-tight first:mt-0 bg-gradient-to-r from-stone-50 to-neutral-600 bg-clip-text text-transparent'>
            Frequently Asked Questions
          </h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What form of payment do I need to use?</AccordionTrigger>
              <AccordionContent>
                You can use any payment method, cash, bank transfer or cryptocurrency. We accept all.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>In case of an accident, who do I contact?</AccordionTrigger>
              <AccordionContent>
                In case of any emergency or accident, you can contact our 24/7 helpline +971 54 279 3533.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Who do I contact if I want to increase the rental time of the car?</AccordionTrigger>
              <AccordionContent>
                You can contact our sales head +971 54 2793532.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </>
  )
}

