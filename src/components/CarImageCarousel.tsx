"use client"
import * as React from "react"

import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"

export function CarImageCarousel(props: {images: string[]}) {

  return (
    <Carousel opts={{
      loop: true
    }} className="flex items-center gap-2 basis-1/2">
      <CarouselPrevious className="bg-primary text-primary-foreground"/>
      <div className="space-y-2">
        <CarouselContent>
          {props.images.map((image) => (
            <CarouselItem key={image}>
              <div className="p-1">
                <Card className="border-0">
                  <CardContent className="flex items-center justify-center p-2">
                    <img src={image} alt={image} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
      <CarouselNext className="bg-primary text-primary-foreground" />
    </Carousel>
  )
}

