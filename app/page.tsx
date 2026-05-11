import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { OurServices } from "@/components/our-services"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import { BeforeAfter } from "@/components/before-after"
import { Gallery } from "@/components/gallery"
import { VideoSection } from "@/components/video-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OurServices />
      <ReviewsCarousel />
      <Gallery />
      <BeforeAfter />
      <VideoSection />
      <Footer />
    </main>
  )
}
