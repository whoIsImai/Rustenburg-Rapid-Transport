import logo from "../assets/logo.png";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import {Link} from "react-router-dom";


export default function Footer() {
    return(
        <footer className="bg-[#006400] text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} className="h-6 w-6" />
                <span className="text-lg font-bold">Rustenburg Rapid Transport</span>
              </div>
              <p className="text-sm text-white/80 mt-4">
                Providing reliable transportation services across Rustenburg and beyond.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-white/80 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/routes" className="text-sm text-white/80 hover:text-white transition-colors">
                    Routes & Schedules
                  </Link>
                </li>
                <li>
                  <Link to="#fleet" className="text-sm text-white/80 hover:text-white transition-colors">
                    Our Fleet
                  </Link>
                </li>
                <li>
                  <Link to="/Book" className="text-sm text-white/80 hover:text-white transition-colors">
                    Book Online
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    Corporate Travel
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    School Transport
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#FF8C00]" />
                  <span className="text-sm text-white/80">123 Transport Street, Rustenburg</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#FF8C00]" />
                  <span className="text-sm text-white/80">014 590 3721</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#FF8C00]" />
                  <span className="text-sm text-white/80">info@yaronabus.co.za</span>
                </li>
              </ul>
              <div className="flex gap-4 mt-4">
                <Link to="#" className="text-white/80 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link to="#" className="text-white/80 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link to="https://www.instagram.com/" className="text-white/80 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Rustenburg Rapid Transport. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}