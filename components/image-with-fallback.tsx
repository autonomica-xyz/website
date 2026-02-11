"use client"

import { useState } from "react"
import { Brain } from "lucide-react"

interface ImageWithFallbackProps {
  src?: string
  alt: string
  className?: string
  fallbackSrc?: string
}

export default function ImageWithFallback({ src, alt, className = "", fallbackSrc }: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  // If no src provided or error occurred, show fallback
  if (error || !src) {
    // If it's a blog post image, show a nice gradient with Brain icon
    if (className.includes("object-cover") || className.includes("aspect-video")) {
      return (
        <div
          className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/40 to-cyan-900/40 ${className}`}
        >
          <Brain className="h-16 w-16 text-purple-500/50" />
        </div>
      )
    }

    // For other images, use fallback or placeholder
    if (fallbackSrc) {
      return <img src={fallbackSrc || "/placeholder.svg"} alt={alt} className={className} />
    }

    // Default fallback
    return (
      <div className={`flex items-center justify-center bg-gray-800 ${className}`}>
        <Brain className="h-8 w-8 text-purple-500/50" />
      </div>
    )
  }

  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      onLoad={() => setError(false)}
    />
  )
}
