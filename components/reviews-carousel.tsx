"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

const reviews = [
  {
    id: 1,
    rating: 5,
    text: "\"Quartz Perfection went above and beyond to get our kitchen countertops installed. They worked with us on scheduling, kept us updated every step of the way, and the finished product looks amazing. Highly recommend Quartz Perfection!\"",
    author: "Sarah Mitchell",
    source: "Google Review",
  },
  {
    id: 2,
    rating: 5,
    text: "\"Quartz Perfection exceeded all expectations! From start to finish, the team was professional, communicative, and incredibly skilled. They installed our bathroom vanities quickly and efficiently, and the quality of work is outstanding. You can tell they take pride in what they do. Highly recommend them to anyone looking for reliable, top-notch quartz services!\"",
    author: "Michael Johnson",
    source: "Google Review",
  },
  {
    id: 3,
    rating: 5,
    text: "\"These guys are the best. Got the work done and treated me with a lot of respect. I would recommend them for sure.\"",
    author: "David Williams",
    source: "Google Review",
  },
  {
    id: 4,
    rating: 5,
    text: "\"Absolutely stunning work on our kitchen island! The attention to detail and craftsmanship is second to none. The team was punctual, clean, and professional throughout the entire process.\"",
    author: "Jennifer Adams",
    source: "Google Review",
  },
  {
    id: 5,
    rating: 5,
    text: "\"We had a great experience with Quartz Perfection. The quote was fair, the timeline was accurate, and the installation was flawless. Our new countertops are the highlight of our kitchen renovation!\"",
    author: "Robert Chen",
    source: "Google Review",
  },
]

export function ReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const speed = isMobile ? 1.125 : 0.6
    let animationId: number
    let scrollPosition = 0

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += speed
        const singleSetWidth = scrollContainer.scrollWidth / 3
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0
        }
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isPaused, isMobile])

  const tripleReviews = [...reviews, ...reviews, ...reviews]

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FAFAFA] overflow-hidden">
      <div className="mx-auto px-[5%] sm:px-[8%] md:px-[12%] lg:px-[15%]">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#1A365D]" />
              <p className="text-[#1A365D] font-semibold tracking-[0.25em] text-[10px] md:text-xs uppercase">
                Testimonials
              </p>
              <div className="w-8 h-px bg-[#1A365D]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] tracking-tight">
              Trusted by Homeowners
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* Infinite Scrolling Reviews */}
      <div
        className="relative overflow-hidden px-[5%] sm:px-[8%] md:px-[10%] lg:px-[12%]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex will-change-transform"
          style={{ transform: "translateX(0)" }}
        >
          {tripleReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="flex-shrink-0 w-[260px] md:w-[300px] mx-3"
            >
              <div className="border border-neutral-200 bg-white p-6 flex flex-col justify-between h-[380px] md:h-[360px] hover:border-[#1A365D]/50 transition-colors duration-300">
                {/* Stars */}
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#1A365D] text-[#1A365D]"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-neutral-600 italic leading-relaxed text-sm">
                    {review.text}
                  </p>
                </div>

                {/* Author */}
                <div className="mt-4 pt-4 border-t border-neutral-100">
                  <p className="font-semibold text-[#0A0A0A] text-sm">{review.author}</p>
                  <p className="text-neutral-400 text-xs">{review.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Reviews Buttons */}
      <div className="mx-auto px-[5%] sm:px-[8%] md:px-[12%] lg:px-[15%]">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          {/* Read All Reviews Button */}
          <Button
            asChild
            variant="outline"
            className="border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white rounded-none px-8 py-6 text-xs font-semibold tracking-[0.15em] uppercase"
          >
            <a
              href="https://www.google.com/search?hs=Xgy&sxsrf=ANbL-n5wkAfJaMBaK9ye7PmqHECTjZ_uHA:1778538044605&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUyTJM0d7FSjBgmsIxk5W2SDCaC5IHuDXSTCy0yn69Dtn-jA5VkF-GQ-mkVT69WDVPS7xdv7SX5wFPjc2pstHS0cUASCgVVQCtzu6wa6CggYEOao9A%3D%3D&q=Quartz+Perfection+Reviews&zx=1778538097438#lrd="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Read All Google Reviews
            </a>
          </Button>

          {/* Leave a Review Button */}
          <Button
            asChild
            className="bg-[#1A365D] text-white hover:bg-[#0F2442] rounded-none px-8 py-6 text-xs font-semibold tracking-[0.15em] uppercase border-2 border-[#1A365D] hover:border-[#0F2442]"
          >
            <a
              href="https://www.google.com/search?client=opera-gx&hs=Xgy&sca_esv=a9de2d2ce3c96c22&sxsrf=ANbL-n5wkAfJaMBaK9ye7PmqHECTjZ_uHA:1778538044605&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUyTJM0d7FSjBgmsIxk5W2SDCaC5IHuDXSTCy0yn69Dtn-jA5VkF-GQ-mkVT69WDVPS7xdv7SX5wFPjc2pstHS0cUASCgVVQCtzu6wa6CggYEOao9A%3D%3D&q=Quartz+Perfection+Reviews&sa=X&ved=2ahUKEwif6PjCorKUAxXvNYYAHX53OxkQ0bkNegQIKBAH&biw=1875&bih=958&dpr=1#lrd=0x882b8b10a67297fd:0x73f05292c4a589ef,3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
              aria-label="Leave a review for Quartz Perfection on Google"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              Leave a Review
            </a>
          </Button>
        </div>

        {/* Encouraging text */}
        <p className="text-center text-neutral-500 text-sm mt-4 max-w-md mx-auto">
          Your feedback helps us improve and helps others discover quality craftsmanship.
        </p>
      </div>
    </section>
  )
}
