import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export const metadata = {
  title: "Quartz Surface Installation | Quartz Perfection",
  description:
    "Expert quartz surface installation for kitchens, bathrooms, and commercial spaces. Premium craftsmanship with lasting durability.",
}

const features = [
  "Precision measuring and templating",
  "Expert fabrication and edge finishing",
  "Professional installation by certified technicians",
  "Seamless seams and perfect fits",
  "Post-installation cleanup and care instructions",
  "Comprehensive warranty coverage",
]

export default function QuartzInstallationPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-secondary pt-32 pb-20">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%] text-center">
          <p className="text-primary font-semibold tracking-[0.2em] text-sm mb-4 uppercase">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Quartz Surface Installation
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Transform your space with expertly installed quartz surfaces that
            combine beauty, durability, and easy maintenance.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6713-eXkvS3QtyU2pJ5YLCAc9S3weqpdX9z.jpg"
                alt="Quartz surface installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                Premium Quartz Installation Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team of certified professionals specializes in the precise
                installation of quartz surfaces for residential and commercial
                properties. We handle every step of the process, from initial
                measurement to final installation, ensuring a flawless finish
                that will last for years to come.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Quartz offers the perfect combination of beauty and
                functionality. It&apos;s non-porous, scratch-resistant, and
                requires minimal maintenance, making it ideal for busy kitchens
                and bathrooms.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 text-sm font-medium tracking-widest"
              >
                <Link href="/contact">GET A FREE QUOTE</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
