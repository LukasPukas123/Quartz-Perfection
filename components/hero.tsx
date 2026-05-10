"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const scrollToReviews = () => {
    const reviewsSection = document.getElementById("reviews")
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center bg-white">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 -mt-16">
        {/* Center Logo */}
        <Image
          src="/images/CenterLogo.png"
          alt="Quartz Perfection"
          width={400}
          height={300}
          className="w-56 md:w-72 lg:w-80 h-auto mb-6"
          priority
        />

        {/* CTA Button */}
        <Button
          asChild
          className="bg-[#1F71B8] hover:bg-[#1F71B8]/90 text-white rounded-none px-10 py-6 text-sm font-medium tracking-widest"
        >
          <Link href="/contact">GET A FREE QUOTE</Link>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToReviews}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#0D2E52]/60 hover:text-[#0D2E52] transition-colors cursor-pointer"
      >
        <span className="text-xs font-medium tracking-widest">SCROLL</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  )
}
