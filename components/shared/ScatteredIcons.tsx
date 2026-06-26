"use client"

import {
  IconBrain,
  IconCode,
  IconCpu,
  IconRocket,
  IconDatabase,
  IconLock,
  IconWorld,
  IconBulb,
  IconTerminal,
  IconGitBranch,
} from "@tabler/icons-react"

const icons = [
  // Hero overlap — large, subtle
  { Icon: IconBrain, top: "20%", left: "6%", size: 72, rotate: -15, opacity: 0.06 },
  { Icon: IconCode, top: "30%", right: "5%", size: 64, rotate: 10, opacity: 0.05 },
  { Icon: IconCpu, top: "50%", left: "4%", size: 56, rotate: -8, opacity: 0.04 },

  // Mid — medium, slightly more visible
  { Icon: IconRocket, top: "12%", right: "10%", size: 40, rotate: 20, opacity: 0.12 },
  { Icon: IconTerminal, top: "60%", right: "6%", size: 36, rotate: -12, opacity: 0.10 },
  { Icon: IconDatabase, top: "70%", left: "8%", size: 38, rotate: 8, opacity: 0.12 },

  // Bottom — small accents
  { Icon: IconBulb, top: "80%", right: "12%", size: 28, rotate: -20, opacity: 0.08 },
  { Icon: IconWorld, top: "85%", left: "15%", size: 26, rotate: 15, opacity: 0.06 },
  { Icon: IconLock, top: "75%", left: "50%", size: 30, rotate: -5, opacity: 0.07 },
  { Icon: IconGitBranch, top: "88%", right: "20%", size: 24, rotate: 10, opacity: 0.05 },
]

export function ScatteredIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {icons.map(({ Icon, size, rotate, opacity, ...pos }, i) => (
        <span
          key={i}
          className="absolute text-foreground"
          style={{ ...pos, transform: `rotate(${rotate}deg)`, opacity }}
        >
          <Icon size={size} stroke={1} />
        </span>
      ))}
    </div>
  )
}
