"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

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
    <section id="gallery" className="py-20 md:py-28 bg-background">
      {/* 15-20% margins on each side using px-[15%] on mobile, px-[17%] on larger screens */}
      <div className="px-[8%] sm:px-[12%] md:px-[15%] lg:px-[17%]">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-primary font-semibold tracking-widest text-sm mb-4 uppercase">
            Our Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 text-balance">
            Recent Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        {/* Symmetrical Gallery Grid - All images identical size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => openLightbox(index)}
            >
              {/* Fixed aspect ratio container for identical sizing */}
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-300" />
                {/* Title overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center px-4">
                    <h3 className="text-white text-lg md:text-xl font-semibold drop-shadow-lg">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-50 p-2 rounded-full bg-white/10 hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors z-50 p-3 rounded-full bg-white/10 hover:bg-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full h-full max-w-4xl max-h-[75vh] mx-20 md:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 80vw"
            />
            <div className="absolute -bottom-16 left-0 right-0 text-center">
              <h3 className="text-white text-xl font-semibold mb-1">
                {galleryImages[currentIndex].title}
              </h3>
              <p className="text-white/60 text-sm">
                {currentIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors z-50 p-3 rounded-full bg-white/10 hover:bg-white/20"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  )
}
