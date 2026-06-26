"use client"

import { cn } from "@/lib/utils"
import type { ReactNode, CSSProperties } from "react"

interface InfiniteMarqueeProps {
  children: ReactNode
  direction?: "left" | "right"
  speed?: number
  className?: string
}

export function InfiniteMarquee({
  children,
  direction = "left",
  speed = 40,
  className,
}: InfiniteMarqueeProps) {
  return (
    <div className={cn("marquee-pause flex overflow-hidden", className)}>
      <div
        className={cn("marquee-track flex shrink-0 gap-3", direction === "left" ? "marquee-left" : "marquee-right")}
        style={{ "--marquee-speed": `${speed}s` } as CSSProperties}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
