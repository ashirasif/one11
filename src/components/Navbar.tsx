import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { Button } from "./ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { getAllBrands, getAllCategories } from "~/lib/data";


export function VehicleFleet() {

  const categories = getAllCategories()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-primary-foreground ">Vehicle Fleet</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black border-primary text-primary-foreground">
        {
          categories.map((category) => (
            <Link key={category} href={`/category/${category.split(' ').join('-')}`}>
              <DropdownMenuItem className="hover:bg-primary hover:text-primary-foreground">
                {category}
              </DropdownMenuItem>
            </Link>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}



export function Brands() {

  const brands = getAllBrands()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-primary-foreground ">Brands</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black border-primary text-primary-foreground">
        {
          brands.map((brand) => (
            <Link key={brand} href={`/brand/${brand.split(' ').join('-')}`}>
              <DropdownMenuItem className="hover:bg-primary hover:text-primary-foreground">
                {brand}
              </DropdownMenuItem>
            </Link>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


function Navbar() {

  return (
    <div className="flex z-40 fixed top-0 left-0 justify-between px-8 py-2 items-center  w-full">
      <Link href="/">
        <img src="/One-11-logo.svg" className="w-[5.773rem]" />
      </Link>
      <div className="flex gap-4 max-md:hidden items-center bg-primary rounded-md">

        <Link href="/">
          <Button variant={"ghost"} className="text-primary-foreground">
            Home
          </Button>
        </Link>
        <VehicleFleet />
        <Brands />
        <Link href="/emergency">
          <Button variant={"ghost"} className="text-primary-foreground">
            Emergency 
          </Button>
        </Link>
      </div>

      <Button className="max-md:hidden">
        <Link href="https://wa.me/971542793532">
          Book Now
        </Link>
      </Button>
      
      <MobileNav />
      
    </div>
  )
}

export default Navbar
