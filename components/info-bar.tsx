import { CheckCircle, MapPin, Home } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function InfoBar() {
  return (
    <div className="hidden md:block bg-[#1A1A1A] border-y border-neutral-800 py-4">
      <div className="mx-auto px-[5%] sm:px-[8%] md:px-[12%] lg:px-[15%]">
        <ScrollReveal direction="none" threshold={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-16">
            {/* Free Inspections */}
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#1A365D]" />
              <span className="text-xs font-semibold text-white/80 tracking-wider uppercase">
                Free Inspections
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#1A365D]" />
              <span className="text-xs font-semibold text-white/80 tracking-wider uppercase">
                Kitchener, ON
              </span>
            </div>

            {/* Services */}
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4 text-[#1A365D]" />
              <span className="text-xs font-semibold text-white/80 tracking-wider uppercase">
                Quartz | Granite | Natural Stone
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
