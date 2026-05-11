import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export const metadata = {
  title: "Granite Countertops | Quartz Perfection",
  description:
    "Granite countertops offer natural strength, heat resistance, and enduring beauty. Explore our wide selection of premium granite slabs.",
}

const features = [
  "Naturally heat resistant, perfect for busy kitchens",
  "Extremely hard surface that resists scratches",
  "Wide range of colors from light to dramatically dark",
  "Each slab is unique with natural mineral patterns",
  "Professionally sealed at installation",
  "Adds long-term value to residential and commercial spaces",
]

const characteristics = [
  {
    title: "Unmatched Hardness",
    description:
      "Granite ranks among the hardest natural materials available. It stands up to the demands of daily cooking, heavy pots, and years of regular use without showing significant wear.",
  },
  {
    title: "Natural Heat Tolerance",
    description:
      "You can place hot pans directly on granite without damaging the surface. This makes it a reliable and practical choice for serious home cooks and professional kitchens.",
  },
  {
    title: "One-of-a-Kind Character",
    description:
      "Every granite slab is formed naturally over thousands of years, resulting in patterns of minerals, flecks, and veining that cannot be replicated. Your countertop will be completely unique.",
  },
]

export default function GranitePage() {
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
              Granite Countertops
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              A timeless classic with the strength to match. Granite brings
              warmth, depth, and natural character to kitchens, bathrooms, and
              beyond.
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
                  src="/images/granite-countertop.jpg"
                  alt="Kitchen with dark speckled granite countertop in warm traditional setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                  Strength and Style, Naturally Combined
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Granite has been a cornerstone of high-end kitchen and bathroom
                  design for decades, and for good reason. Formed deep within the
                  earth from cooling magma, granite is one of the densest and
                  most durable natural materials available for countertop use.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our granite selection spans a wide spectrum of colors, from soft
                  creams and warm beiges to dramatic blacks and rich burgundies.
                  Whether your home has a traditional, transitional, or
                  contemporary design, there is a granite that complements your
                  space beautifully.
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

      {/* Characteristics Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold tracking-[0.2em] text-xs mb-3 uppercase">
                What Sets Granite Apart
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary tracking-tight">
                Why Homeowners Choose Granite
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
                Granite has stood the test of time as one of the most preferred
                countertop materials for both residential and commercial projects.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {characteristics.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-white rounded-lg p-6 border border-border h-full">
                  <h3 className="text-lg font-bold text-secondary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
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
                  Our Commitment
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                  Installed Right, Built to Last
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We source our granite from reputable suppliers and carefully
                  inspect each slab before it reaches your home. Our fabrication
                  team works with precision tools to cut, polish, and profile
                  every edge to your exact specifications.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Installation day is handled with care and professionalism. We
                  protect your floors and cabinets during the process and leave
                  your space clean and ready to enjoy. A final sealant application
                  ensures your granite is protected from day one.
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
                  src="/images/granite-detail.jpg"
                  alt="Close-up of polished granite countertop showing natural mineral patterns"
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
