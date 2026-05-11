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
    <nav className="sticky top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-neutral-800">
      <div className="mx-auto px-[5%] sm:px-[8%] md:px-[12%] lg:px-[15%]">
        <div className="flex items-center justify-between py-4">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-white/80 text-xs font-medium tracking-[0.15em] hover:text-[#D4AF37] transition-colors uppercase"
            >
              About
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-white/80 text-xs font-medium tracking-[0.15em] hover:text-[#D4AF37] transition-colors uppercase"
              >
                Services
                <ChevronDown className="w-3 h-3" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#1A1A1A] border border-neutral-800 py-2">
                  <Link
                    href="/services/natural-stone"
                    className="block px-4 py-2 text-xs text-white/70 hover:text-[#D4AF37] hover:bg-neutral-800/50 tracking-wide"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Natural Stone
                  </Link>
                  <Link
                    href="/services/quartz"
                    className="block px-4 py-2 text-xs text-white/70 hover:text-[#D4AF37] hover:bg-neutral-800/50 tracking-wide"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Quartz
                  </Link>
                  <Link
                    href="/services/granite"
                    className="block px-4 py-2 text-xs text-white/70 hover:text-[#D4AF37] hover:bg-neutral-800/50 tracking-wide"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Granite
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Center Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/images/Logo.png"
              alt="Quartz Perfection"
              width={60}
              height={60}
              className="w-10 h-10 md:w-12 md:h-12 brightness-0 invert"
            />
          </Link>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/financing"
              className="text-white/80 text-xs font-medium tracking-[0.15em] hover:text-[#D4AF37] transition-colors uppercase"
            >
              Financing
            </Link>
            <Link
              href="/contact"
              className="text-white/80 text-xs font-medium tracking-[0.15em] hover:text-[#D4AF37] transition-colors uppercase"
            >
              Contact
            </Link>
            <Button
              asChild
              className="bg-[#D4AF37] hover:bg-[#B8860B] text-black rounded-none px-6 text-xs font-semibold tracking-[0.15em] uppercase"
            >
              <Link href="/contact">Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white ml-auto"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0A0A0A] border-t border-neutral-800 py-6">
            <div className="flex flex-col gap-5">
              <Link
                href="/about"
                className="text-white/80 text-xs font-medium tracking-[0.15em] hover:text-[#D4AF37] uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services/natural-stone"
                className="text-white/80 text-xs font-medium tracking-[0.15em] hover:text-[#D4AF37] uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Natural Stone
              </Link>
              <Link
                href="/services/quartz"
                className="text-white/80 text-xs font-medium tracking-[0.15em] hover:text-[#D4AF37] uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Quartz
              </Link>
              <Link
                href="/services/granite"
                className="text-white/80 text-xs font-medium tracking-[0.15em] hover:text-[#D4AF37] uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Granite
              </Link>
              <Link
                href="/financing"
                className="text-white/80 text-xs font-medium tracking-[0.15em] hover:text-[#D4AF37] uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Financing
              </Link>
              <Link
                href="/contact"
                className="text-white/80 text-xs font-medium tracking-[0.15em] hover:text-[#D4AF37] uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <Button
                  asChild
                  className="bg-[#D4AF37] hover:bg-[#B8860B] text-black rounded-none px-6 text-xs font-semibold tracking-[0.15em] uppercase w-full"
                >
                  <Link href="/contact">Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
