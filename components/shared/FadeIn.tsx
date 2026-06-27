"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

type Direction = "up" | "down" | "left" | "right" | "none"

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
  distance?: number
  duration?: number
  scale?: boolean
  once?: boolean
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
  none: { x: 0, y: 0 },
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.7,
  scale = false,
  once = false,
}: FadeInProps) {
  const offset = directionOffset[direction]

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x * (distance / 40),
        y: offset.y * (distance / 40),
        scale: scale ? 0.92 : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
