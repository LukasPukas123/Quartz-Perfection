import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export const metadata = {
  title: "Countertop Design | Quartz Perfection",
  description:
    "Custom countertop design services with expert guidance on materials, colors, and edge profiles to bring your vision to life.",
}

const features = [
  "Personalized design consultations",
  "Extensive material and color selection",
  "Custom edge profile options",
  "3D visualization of your project",
  "Expert recommendations for your space",
  "Coordination with your contractor or designer",
]

export default function CountertopDesignPage() {
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
            Countertop Design
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Bring your vision to life with our expert design services, guiding
            you through every decision to create your perfect countertop.
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6715-GOSDoSyNdYJ4z3XTrHnSHvoUp8iF5p.jpg"
                alt="Countertop design consultation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                Custom Design for Your Space
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our design experts work closely with you to understand your
                style preferences, functional needs, and budget to create a
                countertop solution that perfectly complements your space. From
                modern minimalism to classic elegance, we help you find the
                ideal design.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We offer an extensive selection of materials, colors, patterns,
                and edge profiles, allowing you to customize every aspect of
                your countertop. Our team provides expert guidance throughout
                the design process.
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
                <Link href="/contact">SCHEDULE A CONSULTATION</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
