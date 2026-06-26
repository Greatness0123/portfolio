"use client"

import { motion } from "framer-motion"

interface GhostTextProps {
  text: string
  className?: string
  animate?: boolean
}

export function GhostText({ text, className = "", animate = false }: GhostTextProps) {
  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden ${className}`}
      animate={animate ? { x: ["-2%", "2%", "-2%"] } : undefined}
      transition={animate ? { duration: 20, repeat: Infinity, ease: "linear" } : undefined}
    >
      <span
        className="select-none font-[family-name:var(--font-display)] font-extrabold uppercase leading-none"
        style={{
          fontSize: "clamp(100px, 20vw, 280px)",
          color: "transparent",
          WebkitTextStroke: "1.5px rgba(0,0,0,0.07)",
        }}
      >
        {text}
      </span>
    </motion.div>
  )
}
