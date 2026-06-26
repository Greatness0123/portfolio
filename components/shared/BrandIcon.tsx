"use client"

import Image from "next/image"
import { useState } from "react"

interface BrandIconProps {
  slug: string
  name: string
  size?: number
}

export function BrandIcon({ slug, name, size = 18 }: BrandIconProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        className="flex shrink-0 items-center justify-center rounded-full bg-white/5 font-mono text-[9px] text-muted"
        style={{ width: size, height: size }}
      >
        {name.charAt(0)}
      </span>
    )
  }

  return (
    <Image
      src={`https://cdn.simpleicons.org/${slug}/F0EDE6`}
      alt={name}
      width={size}
      height={size}
      className="shrink-0"
      onError={() => setFailed(true)}
      unoptimized
    />
  )
}
