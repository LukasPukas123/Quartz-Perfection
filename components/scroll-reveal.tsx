"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type Direction = "up" | "left" | "right" | "none"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: Direction
  delay?: number
  threshold?: number
}

const translateMap: Record<Direction, string> = {
  up: "translate-y-8",
  left: "-translate-x-6",
  right: "translate-x-6",
  none: "",
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin: "0px 0px -48px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : cn("opacity-0", translateMap[direction]),
        className
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
