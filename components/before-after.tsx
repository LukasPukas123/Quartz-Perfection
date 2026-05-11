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
    <section className="py-20 md:py-28 bg-[#F5F5F5]">
      <div className="mx-auto px-[5%] sm:px-[8%] md:px-[12%] lg:px-[15%]">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <p className="text-[#D4AF37] font-semibold tracking-[0.25em] text-[10px] md:text-xs uppercase">
                Transformation
              </p>
              <div className="w-8 h-px bg-[#D4AF37]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-4 tracking-tight">
              See the Difference
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto leading-relaxed">
              Drag the slider to compare before and after. Our expert team transforms ordinary spaces into stunning showcases of craftsmanship.
            </p>
          </div>
        </ScrollReveal>

        {/* Before/After Slider */}
        <ScrollReveal direction="up" delay={100}>
          <div className="max-w-4xl mx-auto">
            <div
              ref={containerRef}
              className="relative w-full aspect-[4/3] overflow-hidden shadow-2xl cursor-ew-resize select-none"
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
                <div className="absolute bottom-4 right-4 bg-[#D4AF37] text-black px-4 py-2 text-xs font-semibold tracking-wider uppercase">
                  After
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
                <div className="absolute bottom-4 left-4 bg-[#0A0A0A] text-white px-4 py-2 text-xs font-semibold tracking-wider uppercase">
                  Before
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg cursor-ew-resize"
                style={{ left: `calc(${sliderPosition}% - 1px)` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#0A0A0A]"
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

            <p className="text-center text-neutral-400 text-sm mt-6 tracking-wide">
              Drag the slider left or right to compare
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
