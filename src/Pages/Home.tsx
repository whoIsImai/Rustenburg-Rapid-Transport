import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Buses from '../logic/Buses'
import Routes from '../logic/Routes'

export default function Home(){

    return(
        <>
            <main className="flex-1">
                <NavBar/>
                <section className="relative">
                <div className="absolute inset-0 bg-black/60 z-10" />
                    <div className="relative h-[300px] md:h-[500px]">
                            
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
                        className="border-white bg-white text-[#006400]"
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
                        Our New Routes
                        </h2>
                        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Connecting Rustenburg to major destinations with comfort and reliability
                        </p>
                    </div>
                    </div>
                   <Routes/>
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

                   <Buses/>
                </div>
                </section>

                <section className="py-12 md:py-24 bg-[#FF8C00]">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Ready to Travel with Yarona?
                    </h2>
                    <p className="mt-4 text-xl text-white/90 max-w-[700px] mx-auto">
                    Book your next journey with us and experience comfort, reliability and safety.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                    <Button size="lg" className="bg-white text-[#006400] hover:bg-white/90">
                        Book Online Now
                    </Button>
                    </div>
                </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}