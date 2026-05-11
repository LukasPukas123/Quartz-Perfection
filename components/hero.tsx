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
    <>
      {/* ── MOBILE LAYOUT ─────────────────────────────────────────── */}
      <div className="md:hidden flex flex-col bg-black">
        {/* Image panel — fills most of the viewport */}
        <div className="relative w-full h-[65svh] min-h-[340px]">
          <Image
            src="/images/hero-bg.jpg"
            alt="Polished quartz countertop with dramatic lighting"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Top-to-transparent overlay so nav bar blends */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
          {/* Bottom fade into the dark text section */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Text panel — dark background continuing seamlessly from the fade */}
        <div className="relative bg-black px-6 pt-2 pb-12">
          {/* Tagline */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D4AF37]" />
            <p className="text-[#D4AF37] text-[10px] font-semibold tracking-[0.25em] uppercase">
              Precision. Quality. Craftsmanship.
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-sans font-black uppercase leading-[0.92] tracking-tight mb-5">
            <span className="block text-white text-[clamp(2.2rem,10vw,3.5rem)]">
              Surfaces Built
            </span>
            <span className="block text-white/70 text-[clamp(2.2rem,10vw,3.5rem)]">
              To Last Forever.
            </span>
          </h1>

          {/* Descriptor */}
          <p className="text-white/60 text-sm leading-relaxed mb-8 font-sans">
            Premium quartz, granite, and natural stone countertops installed by skilled craftsmen in Kitchener, Ontario. Free inspections available.
          </p>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#B8860B] text-black text-[11px] font-semibold tracking-[0.2em] uppercase px-7 py-4 transition-all duration-300 group"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ────────────────────────────────────────── */}
      <section className="relative hidden md:block w-full h-screen min-h-[700px] overflow-hidden bg-black">
        {/* Background photo */}
        <Image
          src="/images/hero-bg.jpg"
          alt="Polished quartz countertop with dramatic lighting"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        <div className="absolute bottom-[38%] left-0 right-0 h-px bg-white/10 blur-sm" />

        {/* Main content */}
        <div className="absolute bottom-24 left-0 z-20 px-12 lg:px-20 max-w-[65vw] lg:max-w-[55vw]">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#D4AF37]" />
            <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.25em] uppercase">
              Precision. Quality. Craftsmanship.
            </p>
          </div>

          <h1 className="font-sans font-black uppercase leading-[0.92] tracking-tight mb-6">
            <span className="block text-white text-[clamp(2.6rem,9vw,6rem)]">Surfaces Built</span>
            <span className="block text-white/70 text-[clamp(2.6rem,9vw,6rem)]">To Last Forever.</span>
          </h1>

          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-md font-sans">
            Premium quartz, granite, and natural stone countertops installed by skilled craftsmen in Kitchener, Ontario. Free inspections available.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#B8860B] text-black text-xs font-semibold tracking-[0.2em] uppercase px-7 py-4 transition-all duration-300 group"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          aria-label="Scroll down"
          className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/50 hover:text-white/90 transition-colors duration-300 cursor-pointer"
        >
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </section>
    </>
  )
}
