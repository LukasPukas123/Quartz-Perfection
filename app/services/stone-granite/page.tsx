import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export const metadata = {
  title: "Stone & Granite Countertops | Quartz Perfection",
  description:
    "Beautiful natural stone and granite countertops that add timeless elegance and value to your home.",
}

const features = [
  "Wide selection of natural stone varieties",
  "Unique patterns and veining in every slab",
  "Heat and scratch resistant surfaces",
  "Professional sealing and finishing",
  "Increases home value",
  "Timeless aesthetic appeal",
]

export default function StoneGranitePage() {
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
            Stone & Granite Countertops
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Discover the natural beauty and enduring quality of stone and
            granite countertops for your home or business.
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6718-Af5RyNofHUhXeZfPcCZKXHTQSnvdyD.jpg"
                alt="Stone and granite countertops"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                Natural Stone Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Natural stone and granite countertops offer unmatched beauty
                with unique patterns and colors that cannot be replicated. Each
                slab is a one-of-a-kind piece of nature, adding character and
                elegance to any space.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our selection includes a wide variety of granite, marble,
                quartzite, and other natural stones sourced from around the
                world. We professionally seal and finish each installation to
                ensure long-lasting beauty and protection.
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
