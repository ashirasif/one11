"use client"
import { useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel"


const services = [
  { name: 'RENTAL', image: '/slider/Hurracan.jpg' },
  { name: 'TRADING', image: '/slider/C8.jpg' },
  { name: 'SERVICES', image: '/slider/718 Boxter.jpg' },
  { name: 'Another', image: '/slider/Ferrari F8.jpg' }
]

const mobileImages = [
  "/4_3/Artboard 5.jpg",
  "/4_3/Artboard 6.jpg",
  "/4_3/Artboard 7.jpg",
  "/4_3/Artboard 8.jpg",
]

export default function CarServicesBanner() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  if (isMobile) {
    // carousel
    return (
      <div className="flex w-full overflow-hidden">
        <Carousel 
          className="w-full max-w-md"
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
            {mobileImages.map((service, index) => (
              <CarouselItem className="px-0" key={index}>
                <img src={service} alt={service} className="object-cover w-full h-full" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </div>
    )
  } else {
    return (
      <div className="flex h-screen w-full overflow-hidden">
        {services.map((service) => (
          <div
            key={service.name}
            className="relative flex-1 transition-all duration-300 ease-in-out hover:flex-[2] group"
          >
            <img
              src={service.image}
              alt={service.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    )
  }

}
