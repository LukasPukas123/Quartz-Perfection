"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6713-eXkvS3QtyU2pJ5YLCAc9S3weqpdX9z.jpg",
    alt: "Modern kitchen with dark cabinets and white quartz countertops",
    title: "Modern Elegance",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6715-GOSDoSyNdYJ4z3XTrHnSHvoUp8iF5p.jpg",
    alt: "Bright white kitchen with quartz countertops and backsplash",
    title: "Clean White Kitchen",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6716-u7jXxbxxswCpEBAi3vyor66oJnDSe5.jpg",
    alt: "Bathroom vanity with marble-look quartz countertop",
    title: "Bathroom Vanity",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6718-Af5RyNofHUhXeZfPcCZKXHTQSnvdyD.jpg",
    alt: "Black quartz countertop with white veining",
    title: "Bold Black Quartz",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6720-GfFL65bYiEtMI0tvmAmZZphKIzqtoO.jpg",
    alt: "White quartz countertop with decorative tile backsplash",
    title: "Classic Style",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6713-eXkvS3QtyU2pJ5YLCAc9S3weqpdX9z.jpg",
    alt: "Modern kitchen with dark cabinets and white quartz countertops",
    title: "Luxury Design",
  },
]

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="mx-auto px-[5%] sm:px-[8%] md:px-[12%] lg:px-[15%]">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-14 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#1A365D]" />
              <p className="text-[#1A365D] font-semibold tracking-[0.25em] text-[10px] md:text-xs uppercase">
                Portfolio
              </p>
              <div className="w-8 h-px bg-[#1A365D]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] tracking-tight">
              Recent Projects
            </h2>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 80}>
              <div
                className="relative cursor-pointer overflow-hidden group"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-wide">
                      {image.title}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div
            className="relative w-full h-full max-w-5xl max-h-[80vh] mx-16 md:mx-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
            <div className="absolute -bottom-12 left-0 right-0 text-center">
              <h3 className="text-white text-lg font-semibold">
                {galleryImages[currentIndex].title}
              </h3>
              <p className="text-white/60 text-sm mt-1">
                {currentIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  )
}
