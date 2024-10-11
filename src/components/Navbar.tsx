import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { Button } from "./ui/button"

function Navbar() {

  return (
    <div className="flex z-40 fixed top-0 left-0 justify-between px-8 py-2 items-center  w-full">
      <img src="/One-11-logo.svg" className="w-[5.773rem]" />
      <div className="flex gap-4 max-md:hidden items-center bg-primary rounded-md">

        <Link href="/">
          <Button variant={"ghost"} className="text-primary-foreground">
            Home
          </Button>
        </Link>
        <Button variant={"ghost"} className="text-primary-foreground">
          Vehicle Fleet
        </Button>
        <Button variant={"ghost"} className="text-primary-foreground">
          Brands 
        </Button>
        <Link href="/emergency">
          <Button variant={"ghost"} className="text-primary-foreground">
            Emergency 
          </Button>
        </Link>
      </div>

      <Button className="max-md:hidden">
        Book Now
      </Button>
      
      <MobileNav />
      
    </div>
  )
}

export default Navbar
