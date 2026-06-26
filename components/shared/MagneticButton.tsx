"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import type { ReactNode, MouseEvent } from "react"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  type?: "button" | "submit"
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  type = "button",
}: MagneticButtonProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouse = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.15)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.15)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const style = { x: springX, y: springY }

  if (href) {
    const isInternal = href.startsWith("#")
    return (
      <motion.a
        href={href}
        {...(!isInternal && { target: "_blank", rel: "noopener noreferrer" })}
        style={style}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        className={cn("inline-block", className)}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      style={style}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.button>
  )
}
