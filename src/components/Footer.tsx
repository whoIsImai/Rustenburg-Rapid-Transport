

export default function Footer() {

    return(
        <footer className="bg-[#006400] text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bus className="h-6 w-6" />
                <span className="text-xl font-bold">Rustenburg Express</span>
              </div>
              <p className="text-sm text-white/80 mt-4">
                Providing reliable transportation services across Rustenburg and beyond since 1995.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#routes" className="text-sm text-white/80 hover:text-white transition-colors">
                    Routes & Schedules
                  </Link>
                </li>
                <li>
                  <Link href="#fleet" className="text-sm text-white/80 hover:text-white transition-colors">
                    Our Fleet
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    Book Online
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-sm text-white/80 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    Intercity Travel
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    Charter Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    Package Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                    Corporate Travel
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/80 hover:text-white transition-colors">
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
                  <span className="text-sm text-white/80">+27 14 123 4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#FF8C00]" />
                  <span className="text-sm text-white/80">info@rustenburgexpress.co.za</span>
                </li>
              </ul>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Rustenburg Express. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}