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

  
  const testimonials = [
    {
      name: "Aditiya Malve",
      text: "I had an outstanding experience with One 11 Rentals. The luxury car I rented was in clean condition, and the pickup and drop-off was hassle-free and quick. I loved the car and I had a great time thanks to One 11’s staff."
    },
    {
      name: "Meeraj Kumar",
      text: "Renting from One 11 made our trip so great! The car was stunning and they made sure the tank was full. I enjoyed the luxurious feeling and I will definitely come to One 11 for my next trip!"
    },
    {
      name: "Michael S",
      text: "The car was exactly as described and exceeded my expectations. The customer service team was incredibly responsive and made the entire process so quick. I didn’t even have to break bank to drive their Lamborghini Urus, their prices are reasonable!"
    }
  ];

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
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex flex-col gap-12 relative aspect-square items-center max-lg:mx-4 border border-primary rounded-md justify-center p-6 m-2">
                  <p className="lg:w-2/3 text-center lg:text-left italic">
                    {testimonial.text}
                  </p>
                  <p className="text-xl italic font-semibold">
                    {testimonial.name}
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
