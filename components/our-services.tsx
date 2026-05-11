import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Quartz Surface Installation",
    description:
      "Expert installation of premium quartz surfaces with precision craftsmanship.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6713-eXkvS3QtyU2pJ5YLCAc9S3weqpdX9z.jpg",
    href: "/services/quartz-installation",
  },
  {
    title: "Countertop Design",
    description:
      "Custom design services with expert guidance on materials and styles.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6715-GOSDoSyNdYJ4z3XTrHnSHvoUp8iF5p.jpg",
    href: "/services/countertop-design",
  },
  {
    title: "Stone & Granite Countertops",
    description:
      "Beautiful natural stone that adds timeless elegance to your home.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6718-Af5RyNofHUhXeZfPcCZKXHTQSnvdyD.jpg",
    href: "/services/stone-granite",
  },
]

export function OurServices() {
  return (
    <section className="py-16 md:py-24 bg-white">
      {/* Container with 15-20% margins */}
      <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-primary font-semibold tracking-[0.2em] text-xs mb-3 uppercase">
            What We Do
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary tracking-tight">
            Our Services
          </h2>
        </div>

        {/* Services Grid - wider, thinner cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
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
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
