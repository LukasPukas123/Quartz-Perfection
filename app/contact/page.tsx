import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#0D2E52] pt-32 pb-20">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%] text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Get in touch with our team for a free quote or to learn more about our services.
          </p>
        </div>
      </section>

      {/* Contact Content Placeholder */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-12">
              <h2 className="text-2xl font-semibold text-[#0D2E52] mb-4">
                Coming Soon
              </h2>
              <p className="text-gray-600 mb-8">
                We&apos;re currently updating our contact page with a form and detailed contact information.
              </p>
              <div className="flex flex-col gap-4 items-center">
                <p className="text-[#0D2E52] font-medium">
                  In the meantime, reach us at:
                </p>
                <a 
                  href="tel:+16145551234" 
                  className="text-[#1F71B8] hover:underline text-lg font-semibold"
                >
                  (614) 555-1234
                </a>
                <a 
                  href="mailto:info@quartzperfection.com" 
                  className="text-[#1F71B8] hover:underline"
                >
                  info@quartzperfection.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
