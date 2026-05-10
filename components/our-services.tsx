import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Quartz Surface Installation",
    description:
      "Expert installation of premium quartz surfaces for kitchens, bathrooms, and commercial spaces with precision craftsmanship and lasting durability.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6713-eXkvS3QtyU2pJ5YLCAc9S3weqpdX9z.jpg",
    href: "/services/quartz-installation",
  },
  {
    title: "Countertop Design",
    description:
      "Custom countertop design services that bring your vision to life, with expert guidance on materials, colors, and edge profiles for your space.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6715-GOSDoSyNdYJ4z3XTrHnSHvoUp8iF5p.jpg",
    href: "/services/countertop-design",
  },
  {
    title: "Stone & Granite Countertops",
    description:
      "Beautiful natural stone and granite countertops that add timeless elegance and value to your home with unique patterns and exceptional quality.",
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
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold tracking-[0.2em] text-sm mb-4 uppercase">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary tracking-tight">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {services.map((service, index) => (
            <div key={index} className="group">
              {/* Image Container */}
              <Link href={service.href} className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Content */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-secondary uppercase tracking-wide mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
