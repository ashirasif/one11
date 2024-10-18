import Link from "next/link";
import { Button } from "./ui/button"

function HeroSection() {
  return (
    <div className="bg-transparent h-screen max-w-screen-xl mx-auto py-24 px-4">
      <div className="lg:w-1/2 flex gap-2 flex-col items-center h-full justify-center text-white">
        <h1 className="font-inter text-4xl max-lg:text-center 2xl:text-6xl font-black leading-tight tracking-tighter">
          Book your dream car  at {" "} 
          <span className="gold-text">One11</span>{" "}
          and experience UAE in style.
        </h1>
        <p className="font-inter font-medium text-white max-lg:text-center">
          At One11 Luxury Rentals, we redefine luxury car rentals with innovation and exceptional service. Our exclusive fleet, featuring prestigious brands like Mercedes-Benz, BMW, and Rolls-Royce, is tailored for your needs, whether for short-term events or long-term rentals. Experience the ultimate in luxury—no deposit required.
        </p>
        <Button size={"lg"} variant={"outline"} className="text-primary-foreground bg-black w-full">
          <Link href="https://wa.me/971542793532">
            Book Now
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection
