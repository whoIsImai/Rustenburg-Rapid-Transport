import {Link} from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-emerald-950 text-white p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-orange-500 text-9xl font-bold">404</h1>
          <h2 className="text-2xl font-semibold">Page not found</h2>
          <p className="text-emerald-300">Sorry, we couldn't find the page you're looking for.</p>
        </div>

        <div className="border-t border-emerald-800 pt-8">
          <Link to="/">
            <Button
              variant="outline"
              className="group border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Back to home
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-orange-500 opacity-20"
        >
          <path
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  )
}

