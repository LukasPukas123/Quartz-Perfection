"use client"

import { Play } from "lucide-react"
import { useState, useRef } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A]">
      <div className="mx-auto px-[5%] sm:px-[8%] md:px-[12%] lg:px-[15%]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <ScrollReveal direction="left">
            <div className="text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#D4AF37]" />
                <p className="text-[#D4AF37] font-semibold tracking-[0.25em] text-[10px] md:text-xs uppercase">
                  Our Process
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance tracking-tight">
                Precision Installation in Action
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-8">
                Our skilled team takes pride in every installation. Watch as we carefully measure, cut, and place each surface with precision and care. Every seam is seamless, every edge is polished to perfection.
              </p>
              <ul className="space-y-4">
                {[
                  "Professional templating and measurement",
                  "Expert fabrication with state of the art tools",
                  "Careful installation by trained specialists",
                  "Final inspection and quality assurance",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37]" />
                    <span className="text-neutral-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Video */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="relative aspect-[9/16] max-w-xs mx-auto overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  playsInline
                  controls={isPlaying}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6715-GOSDoSyNdYJ4z3XTrHnSHvoUp8iF5p.jpg"
                >
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/490E28BA-9671-4056-8660-7D08CDBF7C21-JIuF1z9KWsM2DVUx3OqA2yJlKRb5XE.mov"
                    type="video/quicktime"
                  />
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/490E28BA-9671-4056-8660-7D08CDBF7C21-JIuF1z9KWsM2DVUx3OqA2yJlKRb5XE.mov"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity hover:bg-black/40"
                    onClick={handlePlayClick}
                  >
                    <div className="w-16 h-16 bg-[#D4AF37] flex items-center justify-center transform transition-transform hover:scale-110">
                      <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-[#D4AF37]/40" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-[#D4AF37]/40" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
