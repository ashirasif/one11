import React from 'react'

function Cards() {
  return (
    <div className='flex px-4 flex-col min-h-screen justify-center items-center bg-black'>
      <div className='grid lg:w-2/3 lg:grid-cols-4 grid-cols-2 lg:grid-rows-3 grid-rows-5 gap-2'>
        <div className='bg-[url("https://www.one11-group.com/wp-content/uploads/2024/09/porche.jpeg")] bg-cover p-4 text-white  font-semibold bg-center rounded-lg w-full  flex items-end car-card'>
          <span className='text-sm'>Porsche Cayenne GTS</span>
        </div>
        <div className='bg-[url("https://www.one11-group.com/wp-content/uploads/2024/09/ursus-2.png")] bg-cover p-4 text-white  font-semibold bg-center rounded-lg w-full  flex lg:col-span-2 lg:row-span-2 items-end car-card'>
          <span className='text-sm'>Lamborghini Urus</span>
        </div>
        <div className='bg-[url("https://www.one11-group.com/wp-content/uploads/2024/09/ran333.png")] bg-cover p-4 text-white  font-semibold bg-center rounded-lg w-full h-56 flex items-end car-card'>
          <span className='text-sm'>Range Rover Sport</span>
        </div>
        <div className='bg-[url("https://www.one11-group.com/wp-content/uploads/2024/09/a-photo-of-a-2024-ford-mustang-gt-parked-in-front-zkkG4M_zTQqs529WCKPdfg-twShx-cYTuur313jTD_79Q-1.jpg")] bg-cover p-4 text-white  font-semibold bg-center rounded-lg w-full  flex items-end car-card'>
          <span className='text-sm'>Ford Mustang GT</span>
        </div>
        <div className='bg-[url("https://www.one11-group.com/wp-content/uploads/2024/09/Chevrolet-Corvette-C8-Stingray.jpeg")] bg-cover p-4 text-white  font-semibold bg-center rounded-lg w-full  flex items-end car-card'>
          <span className='text-sm'>Chevrolet Corvette C8 Stingray</span>
        </div>
        <div className='bg-[url("https://www.one11-group.com/wp-content/uploads/2024/09/booxster.png")] bg-cover p-4 text-white  font-semibold bg-center rounded-lg w-full  flex items-end car-card'>
          <span className='text-sm'>Porsche 718 Boxster</span>
        </div>
        <div className='bg-[url("https://www.one11-group.com/wp-content/uploads/2024/09/Frame-28-6.jpg")] bg-cover p-4 text-white  font-semibold bg-center rounded-lg w-full  flex items-end car-card'>
          <span className='text-sm'>BMW 430i</span>
        </div>
        <div className='bg-[url("https://www.one11-group.com/wp-content/uploads/2024/09/Frame-28-1.jpg")] bg-cover p-4 text-white  font-semibold bg-center rounded-lg w-full  flex items-end car-card'>
          <span className='text-sm'>Mercedes Benz CLA250</span>
        </div>
        <div className='bg-[url("https://www.one11-group.com/wp-content/uploads/2024/09/a-photo-of-a-2024-mercedes-c-class-c200-parked-in-q0TGPe06Q_GIiws-0IpSVQ-o7f1oF9NT5eSmQJJpN_Q-A-1.jpg")] bg-cover p-4 text-white  font-semibold bg-center rounded-lg w-full  flex items-end car-card'>
          <span className='text-sm'>Mercedes Benz C200</span>
        </div>

      </div>      
    </div>
  )
}

export default Cards
