import { Button } from "@/components/ui/button"
import {Link} from 'react-router-dom'
import { Bus} from "lucide-react"

export default function Home(){
    return(
        <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Bus className="h-6 w-6 text-[#006400]" />
            <span className="text-xl font-bold text-[#006400]">Rustenburg Express</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link to="#" className="text-sm font-medium hover:text-[#FF8C00] transition-colors">
              Home
            </Link>
            <Link to="#routes" className="text-sm font-medium hover:text-[#FF8C00] transition-colors">
              Routes
            </Link>
            <Link to="#fleet" className="text-sm font-medium hover:text-[#FF8C00] transition-colors">
              Our Fleet
            </Link>
            <Link to="#about" className="text-sm font-medium hover:text-[#FF8C00] transition-colors">
              About Us
            </Link>
            <Link to="#contact" className="text-sm font-medium hover:text-[#FF8C00] transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-[#006400] hover:bg-[#004d00] text-white">Book Now</Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
     
    </div>
    )
}