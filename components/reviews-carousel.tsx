"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useCallback } from "react"

const reviews = [
  {
    id: 1,
    rating: 5,
    text: "Quartz Perfection went above and beyond to get our kitchen countertops installed. They worked with us on scheduling, kept us updated every step of the way, and the finished product looks amazing. Highly recommend Quartz Perfection!",
    author: "Sarah Mitchell",
    source: "Google Review",
  },
  {
    id: 2,
    rating: 5,
    text: "Quartz Perfection exceeded all expectations! From start to finish, the team was professional, communicative, and incredibly skilled. They installed our bathroom vanities quickly and efficiently, and the quality of work is outstanding.",
    author: "Michael Johnson",
    source: "Google Review",
  },
  {
    id: 3,
    rating: 5,
    text: "These guys are the best. Got the work done and treated me with a lot of respect. I would recommend them for sure. Professional service from start to finish.",
    author: "David Williams",
    source: "Google Review",
  },
  {
    id: 4,
    rating: 5,
    text: "Absolutely stunning work on our kitchen island! The attention to detail and craftsmanship is second to none. The team was punctual, clean, and professional throughout the entire process.",
    author: "Jennifer Adams",
    source: "Google Review",
  },
  {
    id: 5,
    rating: 5,
    text: "We had a great experience with Quartz Perfection. The quote was fair, the timeline was accurate, and the installation was flawless. Our new countertops are the highlight of our kitchen renovation!",
    author: "Robert Chen",
    source: "Google Review",
  },
]

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Calculate how many reviews to show based on screen size
  // Desktop: 3, Tablet: 2, Mobile: 1
  const getVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }, [])

  const [visibleCount, setVisibleCount] = useState(3)

  // Update visible count on resize
  useState(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setVisibleCount(getVisibleCount())
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  })

  const maxIndex = Math.max(0, reviews.length - visibleCount)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white">
      {/* Container with consistent 15-20% margins */}
      <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#C41E3A] font-semibold tracking-[0.2em] text-sm mb-4 uppercase">
            What Our Clients Say
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D2E52] tracking-tight">
            Trusted by Homeowners
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute -left-4 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg hover:border-[#0D2E52] transition-all"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#0D2E52]" />
          </button>

          <button
            onClick={goToNext}
            className="absolute -right-4 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg hover:border-[#0D2E52] transition-all"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#0D2E52]" />
          </button>

          {/* Reviews Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 md:p-8 h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#F7B928] text-[#F7B928]"
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 leading-relaxed text-base flex-grow mb-6">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="pt-4 border-t border-gray-200">
                      <p className="font-semibold text-[#0D2E52]">{review.author}</p>
                      <p className="text-gray-500 text-sm">{review.source}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#0D2E52] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to review set ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews Button */}
        <div className="flex justify-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-[#0D2E52] text-[#0D2E52] hover:bg-[#0D2E52] hover:text-white rounded-none px-8 py-6 text-sm font-medium tracking-wider"
          >
            <a
              href="https://google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
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
              READ ALL GOOGLE REVIEWS
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
