import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    title: "Natural Stone",
    description:
      "One-of-a-kind slabs sourced from the world's finest quarries. Discover marble, quartzite, soapstone, and more.",
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
    <section className="py-16 md:py-24 bg-white">
      {/* Container with 15-20% margins */}
      <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-primary font-semibold tracking-[0.2em] text-xs mb-3 uppercase">
              What We Do
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary tracking-tight">
              Our Services
            </h2>
          </div>
        </ScrollReveal>

        {/* Services Grid - wider, thinner cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
            <Link
              href={service.href}
              className="group block cursor-pointer"
            >
              {/* Entire card is clickable */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-md mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-sm md:text-base font-bold text-secondary uppercase tracking-wide mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all duration-200">
                  {service.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
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
