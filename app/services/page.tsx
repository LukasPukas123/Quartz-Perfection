import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#0D2E52] pt-32 pb-20">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%] text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Premium quartz countertop design and installation services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Content Placeholder */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-12">
              <h2 className="text-2xl font-semibold text-[#0D2E52] mb-4">
                Coming Soon
              </h2>
              <p className="text-gray-600 mb-8">
                We&apos;re currently updating our services page with detailed information about our quartz design and installation offerings.
              </p>
              <Button
                asChild
                className="bg-[#1F71B8] hover:bg-[#1F71B8]/90 text-white rounded-none px-8 py-6"
              >
                <Link href="/contact">Contact Us for Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
