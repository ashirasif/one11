import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "~/components/ui/carousel"

export default function Testimonials() {

  return (
    <div className="bg-black h-screen flex flex-col gap-12 justify-center items-center">
      <h1 className="bg-gradient-to-r from-stone-50 to-neutral-600 bg-clip-text text-transparent uppercase">
        What our <br />
        <span className="gold-text">Customers</span> <br />
        are saying
      </h1>
      <Carousel 
        className="w-full max-w-lg"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex flex-col relative aspect-square items-center max-lg:mx-4 border border-primary rounded-md justify-center p-6">
                  <h3 className="text-4xl text-center lg:text-left font-semibold">Lovely Experience</h3>
                  <p className="lg:w-2/3 text-center lg:text-left">
                    The car was in great condition and the staff was very helpful.
                  </p>
                  <p className="absolute bottom-4 text-xl italic">
                    Misha
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
