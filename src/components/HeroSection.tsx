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
      <h1 className="font-inter text-4xl 2xl:text-6xl font-bold leading-tight tracking-tighter">
        Pioneering Engineering and{" "}
        <span className="gold-text">Technological Innovations</span> for a
        Rapidly Evolving World
      </h1>
      <p className="font-inter font-medium text-white">
        Metallon Delta Corporation (MDC) drives engineering and technological
        innovation, continually seeking groundbreaking ideas and solutions. Our
        expert team delivers cutting-edge, cost-effective products and services.
        We our customers receive the most viable solutions, both nationally and
        internationally.
      </p>
      <Button size={"lg"}>Book Now</Button>
    </div>
  );
}

export default HeroSection
