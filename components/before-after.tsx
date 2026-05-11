"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    window.addEventListener("mouseup", handleGlobalMouseUp)
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      {/* Container with consistent 15-20% margins */}
      <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <p className="text-[#1F71B8] font-semibold tracking-[0.2em] text-sm mb-3 uppercase">
              The Transformation
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D2E52] mb-4 tracking-tight">
              See the Difference We Make
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our expert team transforms ordinary kitchens into stunning spaces. Drag the slider to see how we upgraded this kitchen with beautiful new quartz countertops, bringing elegance and durability to the heart of the home.
            </p>
          </div>
        </ScrollReveal>

        {/* Before/After Slider */}
        <ScrollReveal direction="up" delay={100}>
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-2xl cursor-ew-resize select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/After-CxPWoVFN2uJWHhQs0l5j3C1OtWwiZ9.jpg"
                alt="Kitchen after quartz installation"
                fill
                className="object-cover"
                draggable={false}
              />
              <div className="absolute bottom-4 right-4 bg-[#1F71B8] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                AFTER
              </div>
            </div>

            {/* Before Image (Overlay with clip) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Before-Yp39Ujkd5wJEhP1qa7kTdNesQJC9Cn.jpg"
                alt="Kitchen before quartz installation"
                fill
                className="object-cover"
                draggable={false}
              />
              <div className="absolute bottom-4 left-4 bg-[#0D2E52] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                BEFORE
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
              style={{ left: `calc(${sliderPosition}% - 2px)` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#0D2E52]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-4">
            Drag the slider left or right to compare
          </p>
        </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
