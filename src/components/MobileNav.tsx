
import { Button } from "~/components/ui/button"
import { AlignJustify } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" className="lg:hidden">
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent className="max-w-full w-full">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
