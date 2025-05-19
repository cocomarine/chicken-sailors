import { Link } from "react-router-dom"
import { Ship } from "lucide-react"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link to="/" className="flex gap-2 items-center text-xl font-bold">
          <Ship className="h-6 w-6" />
          <span>Chicken Sailors</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link to="#egg-tracker" className="text-sm font-medium hover:underline underline-offset-4">
              Egg Tracker
            </Link>
            <Link to="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link to="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link to="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Button>Order Now</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
