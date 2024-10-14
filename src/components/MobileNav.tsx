
import { Button } from "~/components/ui/button"
import { AlignJustify } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "~/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import Link from "next/link"
import { getAllBrands, getAllCategories } from "~/lib/data"
import { Separator } from "./ui/separator"

export function MobileNav() {

  const brands = getAllBrands()
  const categories = getAllCategories()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" className="lg:hidden">
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent className="max-w-full bg-black text-primary-foreground w-full flex-col flex gap-4">
        <Link href="/">
          <h1>Home</h1>
        </Link>
        <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h3>Vehicle Fleet</h3>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 ">
              {
                categories.map((category : string) => (
                  <Link key={category} href={`/category/${category.split(' ').join('-')}`}>
                    <p className="font-semibold ml-4">
                      {category}
                    </p>
                  </Link>
                ))
              }
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h3>Brands</h3>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              {
                brands.map((brand : string) => (
                  <Link key={brand} href={`/brand/${brand.split(' ').join('-')}`}>
                    <p className="font-semibold ml-4">
                      {brand}
                    </p>
                  </Link>
                ))
              }
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Link href="/emergency">
          <h3>Emergency</h3>
        </Link>
      </SheetContent>
    </Sheet>
  )
}
