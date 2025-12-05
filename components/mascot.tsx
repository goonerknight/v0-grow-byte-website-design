"use client"

import Image from "next/image"
import { useState } from "react"

type MascotVariant = "pointing-up" | "thumbs-up" | "pointing-right" | "presenting"

interface MascotProps {
  variant?: MascotVariant
  width?: number
  height?: number
  className?: string
  alt?: string
  priority?: boolean
}

const mascotVariants: Record<MascotVariant, string> = {
  "pointing-up": "/mascot-pointing-up.png",
  "thumbs-up": "/mascot-thumbs-up.png",
  "pointing-right": "/mascot-pointing-right.png",
  "presenting": "/mascot-presenting.png",
}

export function Mascot({
  variant = "pointing-up",
  width = 400,
  height = 400,
  className = "",
  alt = "GrowByte Mascot",
  priority = false,
}: MascotProps) {
  const [imgSrc, setImgSrc] = useState(mascotVariants[variant] || "/mascot.png")

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => {
        // Fallback to default mascot if variant doesn't exist
        if (imgSrc !== "/mascot.png") {
          setImgSrc("/mascot.png")
        }
      }}
    />
  )
}

