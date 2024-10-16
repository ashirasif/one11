import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { cn } from '~/lib/utils';


function CarCard(props: {
  name: string,
  className?: string
}) {
  const router = useRouter()
  return (
    <div className={cn('car-card relative hover:cursor-pointer flex w-full items-end overflow-hidden rounded-lg font-semibold text-white', props.className)} onClick={() => router.push(`/vehicle/${props.name.split(' ').join('-')}`)}>
      <img
        src={`/cards/${props.name}.jpg`}
        alt=""
        className="h-full w-full object-cover"
      />
      <span className="absolute bottom-4 left-2 z-30 text-sm">
        {props.name}
      </span>
    </div>
  );

}

function Cards() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4">
      <div className="grid grid-cols-2 grid-rows-5 gap-2 lg:w-2/3 lg:grid-cols-4 lg:grid-rows-3">
      <CarCard name="Porsche Cayenne" />
      <CarCard name="Lamborghini Urus" className='lg:row-span-2 lg:col-span-2' />
      <CarCard name='Range Rover Sport' />
      <CarCard name='Ford Mustang GT' />
      <CarCard name='Chevrolet Corvette C8 Stingray' />
      <CarCard name='Porsche 718 Boxster' />
      <CarCard name='BMW 430i' />
      <CarCard name='Mercedes Benz CLA250' />
      <CarCard name='Mercedes Benz C200' />
      </div>
    </div>
  );
}

export default Cards
