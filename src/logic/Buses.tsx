import Orange_Taxi from '../assets/orange taxi.jpg'
import White_Taxi from '../assets/white taxi.jpg'
import Bus from '../assets/bus.jpg'

export default function Buses(){

    const Info = [
        {
        name: "Mini Bus",
        features: ["Reclining seats", "Air conditioning", "Onboard WiFi", "USB charging ports"],
        capacity: "15 passengers",
        image: Orange_Taxi
        },
        {
        name: "Standard Coach",
        features: ["Comfortable seating", "Air conditioning", "Luggage storage", "Onboard restroom"],
        capacity: "60 passengers",
        image: Bus
        },
        {
        name: "Mini Bus",
        features: ["Agile transport", "Air conditioning", "Comfortable seating", "Perfect for groups"],
        capacity: "15 passengers",
        image: White_Taxi
        }
    ]

    return(
        <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {Info.map((bus, index) => (
            <div key={index} className="overflow-hidden rounded-lg border bg-white shadow-sm">
            <div className="relative h-48">
                <img
                src={bus.image}
                alt={bus.name}
                className="h-50 w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
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
    )
}