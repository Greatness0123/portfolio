"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

interface StaggerProps {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
  once?: boolean
}

const containerVariants = (stagger: number, delay: number): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
})

interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  delay?: number
  scale?: boolean
}

const itemVariants = (
  direction: "up" | "down" | "left" | "right" | "none",
  duration: number,
  scale: boolean,
  delay: number,
): Variants => {
  const offsets: Record<string, { x: number; y: number }> = {
    up: { x: 0, y: 36 },
    down: { x: 0, y: -36 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
    none: { x: 0, y: 0 },
  }

  return {
    hidden: {
      opacity: 0,
      x: offsets[direction].x,
      y: offsets[direction].y,
      scale: scale ? 0.93 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }
}

export function Stagger({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  once = false,
}: StaggerProps) {
  return (
    <motion.div
      variants={containerVariants(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  duration = 0.6,
  delay = 0,
  scale = false,
}: StaggerItemProps) {
  return (
    <motion.div
      variants={itemVariants(direction, duration, scale, delay)}
      className={className}
    >
      {children}
    </motion.div>
  )
}
