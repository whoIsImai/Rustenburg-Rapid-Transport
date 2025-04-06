import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"

export default function Routes(){

    const routes = [
        {
        title: "JST Hospital",
        description: "Daily departures every hour from 5:00 AM to 8:00 PM",
        price: "R120",
        time: "1h 30m",
        },
        {
        title: "Greystone Crossing",
        description: "Multiple daily departures with express and standard options",
        price: "R150",
        time: "2h 15m",
        },
        {
        title: "SARS",
        description: "Convenient transfers to the popular resort destination",
        price: "R80",
        time: "45m",
        },
        {
        title: "Bojanala Platinum",
        description: "Regular service connecting to the North West capital",
        price: "R180",
        time: "2h 30m",
        },
        {
        title: "Civic Center",
        description: "Frequent daily service for commuters and travelers",
        price: "R60",
        time: "40m",
        },
        {
        title: " Selly Park Secondary Schools",
        description: "Connecting all major areas within Rustenburg",
        price: "From R25",
        time: "Varies",
        },
    ]


    return(
        <div className="mx-auto grid gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
        {routes.map((route, index) => (
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
    )
}