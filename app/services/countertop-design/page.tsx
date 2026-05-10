import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowLeft } from "lucide-react"

const features = [
  "Custom design consultations",
  "3D visualization and rendering",
  "Material and color selection guidance",
  "Edge profile customization",
  "Layout optimization for your space",
  "Budget-friendly design options",
]

export default function CountertopDesignPage() {
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
            Countertop Design
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Custom countertop design services tailored to your style and space.
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6715-GOSDoSyNdYJ4z3XTrHnSHvoUp8iF5p.jpg"
                alt="Countertop design"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D2E52] mb-6">
                Bring Your Vision to Life
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our design team works closely with you to create the perfect countertop solution 
                for your home. Whether you prefer modern minimalism or classic elegance, we have 
                the expertise to transform your ideas into reality.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From selecting the right materials to choosing edge profiles and finishes, our 
                comprehensive design process ensures every detail is considered. We use advanced 
                visualization tools to help you see your new countertops before installation.
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
                  <Link href="/contact">Schedule a Consultation</Link>
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
