import { Button } from "./ui/button"

function Navbar() {
  const navs=[
    'Home',
    'About Us',
    'Services',
    'Our Team',
    'Careers'
  ]
  return (
    <div className="flex z-40 fixed top-0 left-0 justify-between px-8 py-2 items-center  w-full">
      <img src="/One-11-logo.svg" className="w-[5.773rem]" />
        <div className="flex gap-4 items-center bg-primary rounded-md">
          {
            navs.map((nav, i)=>{
              return (
                <Button variant={"ghost"} className="text-primary-foreground">
                  {nav}
                </Button>
              );
            })
          }
        </div>

          <Button>
            Book Now
          </Button>
    </div>
  )
}

export default Navbar
