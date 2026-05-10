import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
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
      <ReviewsCarousel />
      <BeforeAfter />
      <Gallery />
      <VideoSection />
      <Footer />
    </main>
  )
}
