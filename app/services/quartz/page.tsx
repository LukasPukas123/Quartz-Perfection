import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export const metadata = {
  title: "Quartz Countertops | Quartz Perfection",
  description:
    "Engineered quartz countertops combine the beauty of natural stone with superior durability and effortless maintenance. Explore our full selection.",
}

const features = [
  "Non-porous surface resists stains and bacteria",
  "Scratch and impact resistant for daily use",
  "No sealing required, ever",
  "Consistent color and pattern throughout the slab",
  "Available in hundreds of colors and finishes",
  "Certified safe for food preparation areas",
]

const advantages = [
  {
    title: "Low Maintenance",
    description:
      "Because quartz is engineered to be non-porous, it requires no annual sealing. A simple wipe-down with soap and water keeps the surface looking brand new.",
  },
  {
    title: "Consistent Appearance",
    description:
      "Unlike natural stone, quartz offers a uniform look across the entire slab. This makes it easier to match adjacent surfaces and achieve a cohesive design.",
  },
  {
    title: "Superior Durability",
    description:
      "Quartz is one of the hardest minerals on earth. Engineered quartz countertops resist chipping, cracking, and scratching far better than many alternatives.",
  },
]

export default function QuartzPage() {
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
              Quartz Countertops
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              The perfect balance of beauty and practicality. Engineered quartz
              delivers a flawless look with the performance that modern kitchens
              and bathrooms demand.
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
                  src="/images/quartz-countertop.jpg"
                  alt="Modern kitchen with clean white quartz countertop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                  Engineered for Real Life
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Quartz countertops are crafted from approximately 93% ground
                  natural quartz crystals bound together with resins and pigments.
                  The result is a surface that combines the visual depth of stone
                  with engineering that makes it virtually maintenance-free.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you are renovating a family kitchen or designing a
                  contemporary bathroom retreat, quartz adapts to your vision.
                  Our team at Quartz Perfection handles every phase of the
                  project, from templating and fabrication to seamless
                  installation.
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

      {/* Advantages Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold tracking-[0.2em] text-xs mb-3 uppercase">
                Why Quartz
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary tracking-tight">
                Built to Perform, Designed to Impress
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
                Quartz has become the most popular countertop material in North
                America for good reason. Here is what sets it apart.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-white rounded-lg p-6 border border-border h-full">
                  <h3 className="text-lg font-bold text-secondary mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {advantage.description}
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
                  Our Installation Process
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                  Precision From Measure to Install
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We begin every project with precise digital templating to ensure
                  an exact fit. Our fabricators then cut, shape, and finish each
                  piece in our facility before our installation crew fits it
                  seamlessly into your space.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We take care of all edge profiling, cutouts for sinks and
                  appliances, and backsplash coordination. Once installation is
                  complete, we walk you through care best practices so your new
                  countertops stay perfect for years to come.
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
                  src="/images/quartz-detail.jpg"
                  alt="Close-up of polished quartz countertop surface texture"
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
