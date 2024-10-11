import { Button } from "./ui/button"

function HeroSection() {
  return (
    <div className="mx-12 flex lg:w-3/6 flex-col items-start h-screen justify-center gap-2 text-white">
      {/* <div className="animated-border-box-glow relative"></div> */}
      {/* <div className="animated-border-box after:border border-white py-4 px-4 flex items-center gap-4 relative">
        <div className='flex justify-center items-center'>
          <img src="dummy.png" className='w-6 rounded-full border border-[#D9D9D9]' />
          <img src="dummy.png" className='w-6 rounded-full -ml-3 border border-[#D9D9D9]' />
          <img src="dummy.png" className='w-6 rounded-full -ml-3 border border-[#D9D9D9]' />
          <img src="dummy.png" className='w-6 rounded-full -ml-3 border border-[#D9D9D9]' />
        </div>
        <div className='flex items-center'>
          <span className='font-inter'>Trusted by 40+ companies</span>
        </div>
      </div> */}
      <h1 className="font-inter text-4xl 2xl:text-6xl font-black leading-tight tracking-tighter">
        Book your dream car  at {" "} 
        <span className="gold-text">One11</span>{" "}
        and experience UAE in style.
      </h1>
      <p className="font-inter font-medium text-white">
        At One11 Luxury Rentals, we redefine luxury car rentals with innovation and exceptional service. Our exclusive fleet, featuring prestigious brands like Mercedes-Benz, BMW, and Rolls-Royce, is tailored for your needs, whether for short-term events or long-term rentals. Experience the ultimate in luxury—no deposit required.
      </p>
      <Button size={"lg"}>Book Now</Button>
    </div>
  );
}

export default HeroSection
