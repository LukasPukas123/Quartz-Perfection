import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Quartz Surface Installation",
    description:
      "Professional quartz countertop installation with precision craftsmanship. We ensure seamless fits and flawless finishes that transform your kitchen or bathroom.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6713-eXkvS3QtyU2pJ5YLCAc9S3weqpdX9z.jpg",
    href: "/services/quartz-installation",
  },
  {
    title: "Countertop Design",
    description:
      "Custom countertop design services tailored to your style and space. From modern minimalist to classic elegance, we bring your vision to life.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6715-GOSDoSyNdYJ4z3XTrHnSHvoUp8iF5p.jpg",
    href: "/services/countertop-design",
  },
  {
    title: "Stone & Granite Countertops",
    description:
      "Premium stone and granite countertop solutions offering timeless beauty and exceptional durability for kitchens, bathrooms, and commercial spaces.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6718-Af5RyNofHUhXeZfPcCZKXHTQSnvdyD.jpg",
    href: "/services/stone-granite",
  },
]

export function OurServices() {
  return (
    <section className="py-20 md:py-28 bg-white">
      {/* Container with consistent 15-20% margins */}
      <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-[#C41E3A] font-semibold tracking-[0.2em] text-sm mb-4 uppercase">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D2E52] tracking-tight">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Service Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Service Content */}
              <div className="pt-6 pb-2">
                <h3 className="text-lg font-bold text-[#0D2E52] uppercase tracking-wide mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-[#C41E3A] font-medium text-sm hover:gap-3 transition-all duration-300"
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
