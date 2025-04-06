

// export default function About(){

//     return(
//           {/* About Section */}
//           <section className="py-12 md:py-24 bg-white" id="about">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
//               <div className="space-y-4">
//                 <div className="inline-block rounded-lg bg-[#006400]/10 px-3 py-1 text-sm text-[#006400]">About Us</div>
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#006400]">
//                   Serving Rustenburg Since 1995
//                 </h2>
//                 <p className="text-gray-500 md:text-xl/relaxed">
//                   Rustenburg Express has been providing reliable transportation services for over 25 years. We started
//                   with just 3 buses and have grown to become the region's most trusted bus company.
//                 </p>
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="h-5 w-5 text-[#FF8C00]"
//                     >
//                       <polyline points="20 6 9 17 4 12" />
//                     </svg>
//                     <span>Modern fleet of over 50 vehicles</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="h-5 w-5 text-[#FF8C00]"
//                     >
//                       <polyline points="20 6 9 17 4 12" />
//                     </svg>
//                     <span>Professional, experienced drivers</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="h-5 w-5 text-[#FF8C00]"
//                     >
//                       <polyline points="20 6 9 17 4 12" />
//                     </svg>
//                     <span>Excellent safety record</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="h-5 w-5 text-[#FF8C00]"
//                     >
//                       <polyline points="20 6 9 17 4 12" />
//                     </svg>
//                     <span>Commitment to customer satisfaction</span>
//                   </div>
//                 </div>
//                 <div className="flex flex-col sm:flex-row gap-4 mt-6">
//                   <Button className="bg-[#006400] hover:bg-[#004d00] text-white">Learn More</Button>
//                   <Button variant="outline" className="border-[#006400] text-[#006400]">
//                     Our History
//                   </Button>
//                 </div>
//               </div>
//               <div className="relative h-[400px] overflow-hidden rounded-xl">
//                 <Image
//                   src="/placeholder.svg?height=400&width=600&text=About+Us"
//                   alt="About Rustenburg Express"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="py-12 md:py-24 bg-[#006400]">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
//                   What Our Passengers Say
//                 </h2>
//                 <p className="max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Don't just take our word for it - hear from our satisfied customers
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
//               {[
//                 {
//                   name: "Sarah Johnson",
//                   comment:
//                     "I commute weekly between Rustenburg and Pretoria. The service is always on time and the buses are clean and comfortable.",
//                   rating: 5,
//                 },
//                 {
//                   name: "Michael Ndlovu",
//                   comment:
//                     "Excellent service! The drivers are professional and the online booking system makes planning trips so convenient.",
//                   rating: 5,
//                 },
//                 {
//                   name: "Thabo Mokoena",
//                   comment:
//                     "I've been using Rustenburg Express for years for my business trips. Reliable, comfortable and great value for money.",
//                   rating: 4,
//                 },
//               ].map((testimonial, index) => (
//                 <div key={index} className="rounded-xl bg-white p-6 shadow-sm">
//                   <div className="flex items-center gap-2 mb-4">
//                     {Array(testimonial.rating)
//                       .fill(0)
//                       .map((_, i) => (
//                         <Star key={i} className="h-5 w-5 fill-[#FF8C00] text-[#FF8C00]" />
//                       ))}
//                   </div>
//                   <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
//                   <div className="font-medium">{testimonial.name}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//     )
// }