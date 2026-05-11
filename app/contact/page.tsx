import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Phone, Globe, MapPin, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#0D2E52] pt-32 pb-20">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%] text-center">
          <ScrollReveal direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Contact Us
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Reach out to our team for a free inspection or to discuss your countertop project.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D2E52] mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Have questions about our natural stone, quartz, or granite countertops? Our team is ready to help you find the perfect solution for your home.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
            {/* Owner Info Card */}
            <ScrollReveal direction="left">
              <div className="bg-gradient-to-br from-[#0D2E52] to-[#1F71B8] text-white p-8 rounded-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold">A</span>
                  </div>
                  <h3 className="text-2xl font-bold">Ahmad Al Mustafa</h3>
                  <p className="text-white/80 font-semibold">Owner</p>
                </div>
                <p className="text-white/90 text-sm leading-relaxed text-center">
                  With years of expertise in countertop design and installation, Ahmad and his team are committed to bringing quality and excellence to every project.
                </p>
              </div>
            </ScrollReveal>

            {/* Quick Contact Card */}
            <ScrollReveal direction="right">
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#0D2E52] mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#1F71B8] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Phone</p>
                      <a href="tel:+12265078130" className="text-[#1F71B8] hover:text-[#0D2E52] transition-colors font-semibold">
                        +1 (226) 507-8130
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#1F71B8] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Location</p>
                      <p className="text-gray-600">Ontario, Canada</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#1F71B8] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Website</p>
                      <a href="https://www.quartzperfection.ca" target="_blank" rel="noopener noreferrer" className="text-[#1F71B8] hover:text-[#0D2E52] transition-colors">
                        www.quartzperfection.ca
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* CTA Section */}
          <ScrollReveal direction="up" delay={100}>
            <div className="bg-[#1F71B8] text-white rounded-lg p-8 md:p-12 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Countertops?
              </h3>
              <p className="text-white/90 mb-8 leading-relaxed">
                Schedule a free inspection today and discover how we can enhance your kitchen or bathroom with premium countertops.
              </p>
              <a 
                href="tel:+12265078130" 
                className="inline-block bg-white text-[#1F71B8] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now for Free Inspection
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D2E52] mb-4">
                Explore Our Services
              </h2>
              <p className="text-gray-600 text-lg">
                Check out the different materials and services we offer
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ScrollReveal direction="up" delay={0}>
              <Link href="/services/natural-stone" className="group bg-white p-6 rounded-lg border border-gray-200 hover:border-[#1F71B8] hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#0D2E52] mb-2 group-hover:text-[#1F71B8] transition-colors">
                  Natural Stone
                </h3>
                <p className="text-gray-600 text-sm">
                  Explore unique slabs from the world's finest quarries.
                </p>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <Link href="/services/quartz" className="group bg-white p-6 rounded-lg border border-gray-200 hover:border-[#1F71B8] hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#0D2E52] mb-2 group-hover:text-[#1F71B8] transition-colors">
                  Quartz
                </h3>
                <p className="text-gray-600 text-sm">
                  Low maintenance elegance with hundreds of color options.
                </p>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <Link href="/services/granite" className="group bg-white p-6 rounded-lg border border-gray-200 hover:border-[#1F71B8] hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#0D2E52] mb-2 group-hover:text-[#1F71B8] transition-colors">
                  Granite
                </h3>
                <p className="text-gray-600 text-sm">
                  Heat resistant natural stone with timeless beauty.
                </p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
