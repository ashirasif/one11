import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="bg-gradient-to-b py-12 border-t border-primary from-black to-primary">
      <div className='max-w-screen-xl mx-auto grid lg:grid-cols-3 grid-flow-row place-items-center gap-12'>
        <div className='space-y-6 max-lg:px-12'>
          <Image src="/One-11-logo.svg" width={100} height={100} alt='logo' />
          <p className='text-primary-foreground'>
            One 11 offers luxury car rental services for those who desire the freedom and thrill of self-driving. With a premium fleet of high-end vehicles, customers can experience the ultimate in comfort, style, and performance, all while enjoying the convenience and privacy of driving themselves.
          </p>
        </div>
        <div className='flex flex-col items-center gap-8'>
          <div className='text-primary-foreground'>
            <h3 className='gold-text'>Contact Us</h3>
            <p>Al Quoz 1, Street 10, Opposite Topaz, UAE</p>
            <p>info@one-11-group.com</p>
            <p>+971542793532</p>
          </div>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7223.501158757671!2d55.232182!3d25.144122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6914ffa16acb%3A0x4faa59eeb90c6876!2sOne11%20Luxury%20Rentals!5e0!3m2!1sen!2sus!4v1728607928301!5m2!1sen!2sus" width="300" height="300" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

