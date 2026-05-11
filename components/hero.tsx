"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToNext = () => {
    const next = document.getElementById("reviews") ?? document.querySelector("main section:nth-child(2)")
    if (next) next.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative w-full h-[85svh] min-h-[550px] max-h-[900px] overflow-hidden bg-black">

      {/* Background photo */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Polished quartz countertop with dramatic lighting"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Layered overlays — left vignette + bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      {/* Subtle specular light strip along countertop edge */}
      <div className="absolute bottom-[38%] left-0 right-0 h-px bg-white/10 blur-sm" />

      {/* Logo — top left */}
      <div className="absolute top-6 left-6 md:top-8 md:left-10 z-20">
        <Image
          src="/images/Logo.png"
          alt="Quartz Perfection"
          width={140}
          height={56}
          className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
          priority
        />
      </div>

      {/* Main content — bottom left, matching reference layout */}
      <div className="absolute bottom-20 md:bottom-24 left-0 z-20 px-6 md:px-12 lg:px-20 max-w-[95vw] md:max-w-[65vw] lg:max-w-[55vw]">

        {/* Tagline */}
        <div className="flex items-center gap-3 mb-4 md:mb-5">
          <div className="w-8 h-px bg-[#D4AF37]" />
          <p className="text-[#D4AF37] text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase">
            Precision. Quality. Craftsmanship.
          </p>
        </div>

        {/* Headline */}
        <h1 className="font-sans font-black uppercase leading-[0.92] tracking-tight mb-5 md:mb-6">
          <span className="block text-white text-[clamp(2.6rem,9vw,6rem)]">
            Surfaces Built
          </span>
          <span className="block text-white/70 text-[clamp(2.6rem,9vw,6rem)]">
            To Last Forever.
          </span>
        </h1>

        {/* Descriptor */}
        <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 md:mb-10 max-w-md font-sans">
          Premium quartz, granite, and natural stone countertops installed by skilled craftsmen in Kitchener, Ontario. Free inspections available.
        </p>

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#B8860B] text-black text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase px-7 py-4 transition-all duration-300 group"
        >
          Get a Free Quote
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Scroll indicator — bottom center */}
      <button
        onClick={scrollToNext}
        aria-label="Scroll down"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/50 hover:text-white/90 transition-colors duration-300 cursor-pointer"
      >
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  )
}
