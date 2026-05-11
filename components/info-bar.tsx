import { CheckCircle, MapPin, Home } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function InfoBar() {
  return (
    <div className="hidden md:block bg-white border-y border-gray-100 py-4">
      <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
        <ScrollReveal direction="none" threshold={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-16">
            {/* Free Inspections */}
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-secondary tracking-wide uppercase">
                Free Inspections
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-secondary tracking-wide uppercase">
                Kitchener, ON
              </span>
            </div>

            {/* Services */}
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-secondary tracking-wide uppercase">
                Quartz • Design • Stone & Granite
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
