import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    title: "Natural Stone",
    description:
      "One of a kind slabs sourced from the world's finest quarries. Discover marble, quartzite, soapstone, and more.",
    cta: "Explore Natural Stone",
    image: "/images/natural-stone-countertop.jpg",
    href: "/services/natural-stone",
  },
  {
    title: "Quartz",
    description:
      "The ideal blend of beauty and practicality. Hundreds of colors, no sealing required, and built to handle everyday life.",
    cta: "Explore Quartz",
    image: "/images/quartz-countertop.jpg",
    href: "/services/quartz",
  },
  {
    title: "Granite",
    description:
      "Naturally heat resistant and enduringly beautiful. Granite brings depth and character to kitchens and bathrooms.",
    cta: "Explore Granite",
    image: "/images/granite-countertop.jpg",
    href: "/services/granite",
  },
]

export function OurServices() {
  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A]">
      <div className="mx-auto px-[5%] sm:px-[8%] md:px-[12%] lg:px-[15%]">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-14 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#1A365D]" />
              <p className="text-[#1A365D] font-semibold tracking-[0.25em] text-[10px] md:text-xs uppercase">
                What We Offer
              </p>
              <div className="w-8 h-px bg-[#1A365D]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Premium Materials
            </h2>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <Link
                href={service.href}
                className="group block"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-[#1A365D] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#1A365D] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
