import NavBar from '../components/NavBar'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, ChevronRight } from "lucide-react"


export default function Home(){

    return(
        <>
            <NavBar/>
            <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="relative h-[500px] md:h-[600px]">
                    <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Rustenburg Express Bus"
                    fill
                    className="object-cover"
                    priority
                    />
                </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Travel Comfortably Across Rustenburg
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-white/90">
              Reliable, safe and comfortable bus services connecting Rustenburg and beyond
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#FF8C00] hover:bg-[#e67e00] text-white">
                Book Your Trip
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#006400]"
              >
                View Schedules
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-24 bg-white" id="routes">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#006400]">
                  Our Popular Routes
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connecting Rustenburg to major destinations with comfort and reliability
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
              {[
                {
                  title: "Rustenburg to Pretoria",
                  description: "Daily departures every hour from 5:00 AM to 8:00 PM",
                  price: "R120",
                  time: "1h 30m",
                },
                {
                  title: "Rustenburg to Johannesburg",
                  description: "Multiple daily departures with express and standard options",
                  price: "R150",
                  time: "2h 15m",
                },
                {
                  title: "Rustenburg to Sun City",
                  description: "Convenient transfers to the popular resort destination",
                  price: "R80",
                  time: "45m",
                },
                {
                  title: "Rustenburg to Mafikeng",
                  description: "Regular service connecting to the North West capital",
                  price: "R180",
                  time: "2h 30m",
                },
                {
                  title: "Rustenburg to Brits",
                  description: "Frequent daily service for commuters and travelers",
                  price: "R60",
                  time: "40m",
                },
                {
                  title: "Rustenburg Local Routes",
                  description: "Connecting all major areas within Rustenburg",
                  price: "From R25",
                  time: "Varies",
                },
              ].map((route, index) => (
                <Card key={index} className="border-2 border-[#006400]/10 hover:border-[#006400]/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-[#FF8C00] mt-1" />
                      <div className="space-y-1">
                        <h3 className="font-bold text-xl">{route.title}</h3>
                        <p className="text-sm text-gray-500">{route.description}</p>
                        <div className="flex items-center gap-4 mt-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-[#006400] mr-1" />
                            <span className="text-sm font-medium">{route.time}</span>
                          </div>
                          <div className="text-sm font-bold text-[#FF8C00]">{route.price}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button className="bg-[#006400] hover:bg-[#004d00] text-white">
                View All Routes <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Fleet Section */}
        <section className="py-12 md:py-24 bg-gray-50" id="fleet">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#006400]">
                  Our Modern Fleet
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comfortable, safe and well-maintained buses for your journey
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  name: "Luxury Coach",
                  features: ["Reclining seats", "Air conditioning", "Onboard WiFi", "USB charging ports"],
                  capacity: "52 passengers",
                },
                {
                  name: "Standard Coach",
                  features: ["Comfortable seating", "Air conditioning", "Luggage storage", "Onboard restroom"],
                  capacity: "60 passengers",
                },
                {
                  name: "Mini Bus",
                  features: ["Agile transport", "Air conditioning", "Comfortable seating", "Perfect for groups"],
                  capacity: "22 passengers",
                },
              ].map((bus, index) => (
                <div key={index} className="overflow-hidden rounded-lg border bg-white shadow-sm">
                  <div className="relative h-48">
                    <Image
                      src={`/placeholder.svg?height=300&width=500&text=Bus+${index + 1}`}
                      alt={bus.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#006400]">{bus.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">Capacity: {bus.capacity}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold">Features:</h4>
                      <ul className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1">
                        {bus.features.map((feature, i) => (
                          <li key={i} className="text-sm flex items-center">
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
                              className="h-4 w-4 mr-2 text-[#FF8C00]"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-[#FF8C00]">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Ready to Travel with Rustenburg Express?
            </h2>
            <p className="mt-4 text-xl text-white/90 max-w-[700px] mx-auto">
              Book your next journey with us and experience comfort, reliability and safety.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button size="lg" className="bg-white text-[#006400] hover:bg-white/90">
                Book Online Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#FF8C00]"
              >
                Download Our App
              </Button>
            </div>
          </div>
        </section>
            </main>
        </>
    )
}