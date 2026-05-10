import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FinancingPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#0D2E52] pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Financing Options
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Flexible payment plans to make your dream countertops affordable.
          </p>
        </div>
      </section>

      {/* Financing Content Placeholder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-12">
              <h2 className="text-2xl font-semibold text-[#0D2E52] mb-4">
                Coming Soon
              </h2>
              <p className="text-gray-600 mb-8">
                We&apos;re currently updating our financing page with detailed information about our flexible payment options and financing partners.
              </p>
              <Button
                asChild
                className="bg-[#1F71B8] hover:bg-[#1F71B8]/90 text-white rounded-none px-8 py-6"
              >
                <Link href="/contact">Contact Us About Financing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
