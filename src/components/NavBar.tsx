import { Button } from "@/components/ui/button"
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react'

export default function NavBar(){
    const [menuOpen, setMenuOpen] = useState(false)

    return(
    <div className="flex flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-green-50 shadow-md">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <img
                                src={logo}
                                alt="Rustenburg Express Bus"
                                 className="h-9 text-[#006400]" />
                    <span className="text-xl font-bold text-[#006400]">Rustenburg Rapid Transport</span>
                </div>
                <nav className="hidden md:flex gap-6">
                    <Link to="/" className="text-sm font-medium hover:text-[#FF8C00] transition-colors">
                    Home
                    </Link>
                    <Link to="/routes" className="text-sm font-medium hover:text-[#FF8C00] transition-colors">
                    Routes
                    </Link>
                    <Link to="/about" className="text-sm font-medium hover:text-[#FF8C00] transition-colors">
                    About Us
                    </Link>
                    <Link to="/contact" className="text-sm font-medium hover:text-[#FF8C00] transition-colors">
                    Contact Us
                    </Link>
                </nav>
            <div className="flex items-center gap-4">
                <Link className="hidden md:flex bg-[#006400] hover:bg-[#004d00] text-white p-1.5 rounded-md text-sm" to="/SignIn">Book Now</Link>
                <Button variant="outline" size="icon" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
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
            {menuOpen && (
          <div className="md:hidden bg-white border-t p-4">
            <nav className="flex flex-col gap-2">
              <a href="/" className="text-sm font-medium hover:text-[#FF8C00] transition-colors">Home</a>
              <a href="/about" className="text-sm font-medium hover:text-[#FF8C00] transition-colors">About Us</a>
              <Link to="/Contact" className="text-sm font-medium hover:text-[#FF8C00] transition-colors">Contact Us</Link>
              <a href="/routes" className="text-sm font-medium hover:text-[#FF8C00] transition-colors">Routes</a>
              <Link className="mt-2 bg-[#006400] hover:bg-[#004d00] text-white text-sm font-medium text-center p-1" to="/SignIn">Book Now</Link>
            </nav>
          </div>
        )}
         </header>
    </div>
    )
}