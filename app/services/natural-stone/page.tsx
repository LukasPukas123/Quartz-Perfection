import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export const metadata = {
  title: "Natural Stone Countertops | Quartz Perfection",
  description:
    "Discover the unmatched beauty of natural stone countertops. Each slab is a one-of-a-kind piece sourced from the finest quarries around the world.",
}

const features = [
  "Truly unique slabs with natural veining and movement",
  "Available in marble, quartzite, soapstone, and more",
  "Heat tolerant surfaces ideal for busy kitchens",
  "Professional sealing to protect and preserve the stone",
  "Increases property value and lasting curb appeal",
  "Timeless aesthetic that never goes out of style",
]

const materials = [
  {
    name: "Marble",
    description:
      "Known for its sweeping veins and creamy backgrounds, marble brings a refined elegance to kitchens and bathrooms alike. It develops a natural patina over time that many homeowners love.",
  },
  {
    name: "Quartzite",
    description:
      "A naturally occurring metamorphic rock, quartzite offers the look of marble with greater durability. It is highly resistant to heat, scratches, and etching, making it a practical choice for high-traffic surfaces.",
  },
  {
    name: "Soapstone",
    description:
      "With its smooth, matte finish and soft grey tones, soapstone is a traditional material that adds warmth and character. It is naturally non-porous and requires no sealing.",
  },
]

export default function NaturalStonePage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-secondary pt-32 pb-20">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%] text-center">
          <ScrollReveal direction="up">
            <p className="text-primary font-semibold tracking-[0.2em] text-sm mb-4 uppercase">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight text-balance">
              Natural Stone Countertops
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Sourced from the finest quarries around the world, our natural stone
              countertops bring extraordinary character and lasting value to your
              home.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/natural-stone-countertop.jpg"
                  alt="Natural stone countertop with elegant veining in a bright kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                  The Beauty of the Earth, in Your Home
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Natural stone countertops are formed over millions of years
                  beneath the earth, resulting in surfaces of extraordinary depth
                  and visual complexity. No two slabs are ever identical, so your
                  countertop becomes a truly personal feature in your home.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  At Quartz Perfection, we hand-select slabs from trusted
                  suppliers and guide you through the entire process, from
                  choosing the right stone to professional installation and
                  sealing. The result is a surface that is as enduring as it is
                  beautiful.
                </p>

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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Material Varieties Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold tracking-[0.2em] text-xs mb-3 uppercase">
                Material Options
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary tracking-tight">
                Stone Varieties We Carry
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
                We offer a curated selection of natural stones to suit a wide
                range of styles, budgets, and functional needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-white rounded-lg p-6 border border-border h-full">
                  <h3 className="text-lg font-bold text-secondary mb-3">
                    {material.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {material.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Image + CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-primary font-semibold tracking-[0.2em] text-xs mb-3 uppercase">
                  Our Process
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                  Expert Craftsmanship at Every Step
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our installation team brings years of hands-on experience with
                  natural stone. We take precise measurements, fabricate each
                  piece in-house, and install with meticulous attention to seams,
                  edges, and fit.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  After installation, we apply a professional-grade sealant to
                  protect your investment and provide you with straightforward
                  care instructions so your surface stays beautiful for decades.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white rounded-none px-8 py-6 text-sm font-medium tracking-widest"
                >
                  <Link href="/contact">SCHEDULE A CONSULTATION</Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/natural-stone-detail.jpg"
                  alt="Close-up detail of polished natural stone surface showing veining"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
