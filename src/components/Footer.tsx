import React from 'react'
import Image from 'next/image'

const Icons = () => {
  return (
    <>
      <a href="https://www.instagram.com/one11rentals/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 448 512"
          className="h-8 fill-white lg:h-8"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </a>
      <a href="https://www.tiktok.com/@one11rentals">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 512 512" id="tiktok" className='fill-white'>
          <path d="M353.97 0.43c0.03,7.81 2.31,120.68 120.76,127.72 0,32.55 0.04,56.15 0.04,87.21 -8.97,0.52 -77.98,-4.49 -120.93,-42.8l-0.13 169.78c1.63,117.84 -85.09,189.55 -198.44,164.78 -195.46,-58.47 -130.51,-348.37 65.75,-317.34 0,93.59 0.05,-0.03 0.05,93.59 -81.08,-11.93 -108.2,55.52 -86.65,103.81 19.6,43.97 100.33,53.5 128.49,-8.53 3.19,-12.14 4.78,-25.98 4.78,-41.52l0 -337.13 86.28 0.43z"></path>
        </svg>
      </a>
      <a href="https://www.linkedin.com/company/one11-luxury">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 448 512"
          className="h-8 fill-white lg:h-8"
        >
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
        </svg>
      </a>
      <a href="https://www.facebook.com/people/One11-Luxury-Rentals/61561727345111/?mibextid=kFxxJD">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 512 512"
          className="h-8 fill-white lg:h-8"
        >
          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
        </svg>
      </a>
    </>
  );
};


export default function Footer() {
  return (
    <div className="bg-gradient-to-b py-12 lg:px-4 border-t border-primary from-black to-primary">
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
            <div className='flex gap-4 mt-8'>
              <Icons />
            </div>
          </div>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7223.501158757671!2d55.232182!3d25.144122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6914ffa16acb%3A0x4faa59eeb90c6876!2sOne11%20Luxury%20Rentals!5e0!3m2!1sen!2sus!4v1728607928301!5m2!1sen!2sus" width="300" height="300" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

