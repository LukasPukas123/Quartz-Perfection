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
    <section className="py-16 md:py-24 bg-[#0D2E52]">
      {/* Container with consistent 15-20% margins */}
      <div className="mx-auto px-[5%] sm:px-[10%] md:px-[15%] lg:px-[18%]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <ScrollReveal direction="left">
          <div className="text-white">
            <p className="text-[#1F71B8] font-semibold tracking-[0.2em] text-sm mb-3 uppercase">
              Watch Us Work
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Precision Installation in Action
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our skilled team takes pride in every installation. Watch as we carefully measure, cut, and place each quartz surface with precision and care. Every seam is seamless, every edge is polished to perfection, and every corner fits exactly as it should.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1F71B8] rounded-full" />
                <span className="text-gray-300">Professional templating and measurement</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1F71B8] rounded-full" />
                <span className="text-gray-300">Expert fabrication with state of the art tools</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1F71B8] rounded-full" />
                <span className="text-gray-300">Careful installation by trained specialists</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1F71B8] rounded-full" />
                <span className="text-gray-300">Final inspection and quality assurance</span>
              </li>
            </ul>
          </div>
          </ScrollReveal>

          {/* Video */}
          <ScrollReveal direction="right">
          <div className="relative">
            <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl">
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
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                    <Play className="w-8 h-8 text-[#0D2E52] ml-1" fill="currentColor" />
                  </div>
                </div>
              )}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#1F71B8]/30 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#1F71B8]/30 rounded-2xl -z-10" />
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
