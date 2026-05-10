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
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-[#0D2E52] text-sm font-medium tracking-wider hover:text-[#1F71B8] transition-colors"
            >
              ABOUT
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-[#0D2E52] text-sm font-medium tracking-wider hover:text-[#1F71B8] transition-colors"
              >
                SERVICES
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-[#0D2E52] hover:bg-gray-100"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-[#0D2E52] hover:bg-gray-100"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Kitchen Countertops
                  </Link>
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-[#0D2E52] hover:bg-gray-100"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Bathroom Vanities
                  </Link>
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-[#0D2E52] hover:bg-gray-100"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Custom Installations
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
              className="w-12 h-12 md:w-14 md:h-14"
            />
          </Link>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/financing"
              className="text-[#0D2E52] text-sm font-medium tracking-wider hover:text-[#1F71B8] transition-colors"
            >
              FINANCING
            </Link>
            <Link
              href="/contact"
              className="text-[#0D2E52] text-sm font-medium tracking-wider hover:text-[#1F71B8] transition-colors"
            >
              CONTACT
            </Link>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D2E52] hover:text-[#1F71B8] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D2E52] hover:text-[#1F71B8] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <Button
              asChild
              className="bg-[#1F71B8] hover:bg-[#0D2E52] text-white rounded-none px-6 text-sm font-medium tracking-wider"
            >
              <Link href="/contact">FREE QUOTE</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#0D2E52] ml-auto"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/about"
                className="text-[#0D2E52] text-sm font-medium tracking-wider px-4 hover:text-[#1F71B8]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/services"
                className="text-[#0D2E52] text-sm font-medium tracking-wider px-4 hover:text-[#1F71B8]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="/financing"
                className="text-[#0D2E52] text-sm font-medium tracking-wider px-4 hover:text-[#1F71B8]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FINANCING
              </Link>
              <Link
                href="/contact"
                className="text-[#0D2E52] text-sm font-medium tracking-wider px-4 hover:text-[#1F71B8]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
              <div className="px-4">
                <Button
                  asChild
                  className="bg-[#1F71B8] hover:bg-[#0D2E52] text-white rounded-none px-6 text-sm font-medium tracking-wider w-full"
                >
                  <Link href="/contact">FREE QUOTE</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
