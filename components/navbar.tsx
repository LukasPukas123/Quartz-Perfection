"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/20 backdrop-blur-md border-b border-neutral-800/50">
      <div className="mx-auto px-[5%] sm:px-[8%] md:px-[12%] lg:px-[15%]">
        <div className="flex items-center justify-between py-4">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-end pr-16">
            <Link
              href="/about"
              className="text-white/80 text-xs font-medium tracking-[0.15em] hover:text-[#1A365D] transition-colors uppercase"
            >
              About
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-white/80 text-xs font-medium tracking-[0.15em] hover:text-[#1A365D] transition-colors uppercase"
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
              >
                Services
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>
              <div
                className={`absolute top-full left-0 w-48 transition-all duration-200 origin-top ${
                  isServicesOpen
                    ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"
                }`}
              >
                {/* Invisible bridge covers the gap so hover stays active */}
                <div className="h-2 w-full" />
                <div className="bg-[#1A1A1A] border border-neutral-800 py-2">
                <Link
                  href="/services/natural-stone"
                  className="block px-4 py-2 text-xs text-white/70 hover:text-[#1A365D] hover:bg-neutral-800/50 tracking-wide"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Natural Stone Countertops
                </Link>
                <Link
                  href="/services/quartz"
                  className="block px-4 py-2 text-xs text-white/70 hover:text-[#1A365D] hover:bg-neutral-800/50 tracking-wide"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Quartz Countertops
                </Link>
                <Link
                  href="/services/granite"
                  className="block px-4 py-2 text-xs text-white/70 hover:text-[#1A365D] hover:bg-neutral-800/50 tracking-wide"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Granite Countertops
                </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Center Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 z-10">
            <Image
              src="/images/Logo.png"
              alt="Quartz Perfection"
              width={60}
              height={60}
              className="w-10 h-10 md:w-12 md:h-12 brightness-0 invert"
            />
          </Link>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-1 pl-16">
            <Link
              href="/contact"
              className="text-white/80 text-xs font-medium tracking-[0.15em] hover:text-[#1A365D] transition-colors uppercase"
            >
              Contact
            </Link>
            <Button
              asChild
              className="bg-[#1A365D] hover:bg-[#0F2442] text-white rounded-none px-6 text-xs font-semibold tracking-[0.15em] uppercase"
            >
              <Link href="/contact">Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white ml-auto z-[60] relative"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — full-screen translucent overlay */}
      <div
        className={`
          md:hidden fixed inset-0 z-40
          bg-[#0A0A0A]/20 backdrop-blur-xl
          flex flex-col items-center justify-center
          transition-all duration-400 ease-in-out
          ${isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }
        `}
      >
        <nav className="flex flex-col items-center gap-10 w-full px-8">
          {[
            { label: "About", href: "/about" },
            { label: "Natural Stone", href: "/services/natural-stone" },
            { label: "Quartz", href: "/services/quartz" },
            { label: "Granite", href: "/services/granite" },
            { label: "Contact", href: "/contact" },
          ].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`
                text-white/70 hover:text-white font-black uppercase tracking-[0.12em]
                text-[clamp(1.6rem,7vw,2.2rem)] leading-none
                transition-all duration-300
                ${isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                }
              `}
              style={{ transitionDelay: isMobileMenuOpen ? `${i * 60}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}

          {/* CTA */}
          <div
            className={`mt-4 transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: isMobileMenuOpen ? "360ms" : "0ms" }}
          >
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center gap-3 border border-[#1A365D] text-[#1A365D] text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-4"
            >
              Free Quote
            </Link>
          </div>
        </nav>
      </div>
    </nav>
  )
}
