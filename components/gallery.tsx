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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#1F71B8] font-semibold tracking-wider text-sm mb-3">
            OUR PORTFOLIO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D2E52] mb-4 text-balance">
            Recent Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Large featured image */}
          <div
            className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden rounded-xl"
            onClick={() => openLightbox(0)}
          >
            <div className="aspect-[4/3] md:aspect-auto md:h-full relative">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold">{galleryImages[0].title}</h3>
              </div>
            </div>
          </div>

          {/* Smaller images */}
          {galleryImages.slice(1).map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => openLightbox(index + 1)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Image */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[80vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 text-center py-4">
              <h3 className="text-white text-xl font-semibold">
                {galleryImages[currentIndex].title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
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
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  )
}
