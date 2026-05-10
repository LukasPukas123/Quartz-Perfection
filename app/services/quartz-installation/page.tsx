import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowLeft } from "lucide-react"

const features = [
  "Precision measurement and templating",
  "Professional-grade installation equipment",
  "Seamless joints and perfect fits",
  "Complete cleanup after installation",
  "Industry-leading warranty coverage",
  "Licensed and insured professionals",
]

export default function QuartzInstallationPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#0D2E52] pt-32 pb-20">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%] text-center">
          <p className="text-[#1F71B8] font-semibold tracking-[0.2em] text-sm mb-4 uppercase">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Quartz Surface Installation
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Professional quartz countertop installation with precision craftsmanship and flawless finishes.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6713-eXkvS3QtyU2pJ5YLCAc9S3weqpdX9z.jpg"
                alt="Quartz surface installation"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D2E52] mb-6">
                Expert Quartz Installation Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team of experienced professionals specializes in quartz countertop installation, 
                ensuring every project is completed with meticulous attention to detail. From initial 
                measurement to final installation, we handle every step with care and precision.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Quartz countertops offer the perfect combination of beauty and durability. Our expert 
                installation ensures your new surfaces will look stunning and perform flawlessly for 
                years to come.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1F71B8]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#1F71B8]" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-[#1F71B8] hover:bg-[#1F71B8]/90 text-white rounded-none px-8 py-6"
                >
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#0D2E52] text-[#0D2E52] hover:bg-[#0D2E52] hover:text-white rounded-none px-8 py-6"
                >
                  <Link href="/services" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    All Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
