import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#0F2D4A] pt-32 pb-20">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%] text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            About Us
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Learn more about Quartz Perfection and our commitment to excellence.
          </p>
        </div>
      </section>

      {/* About Content Placeholder */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-12">
              <h2 className="text-2xl font-semibold text-[#0F2D4A] mb-4">
                Coming Soon
              </h2>
              <p className="text-gray-600 mb-8">
                We&apos;re currently updating our about page with information about our company history, team, and values.
              </p>
              <Button
                asChild
                className="bg-[#2B75B8] hover:bg-[#2B75B8]/90 text-white rounded-none px-8 py-6"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
