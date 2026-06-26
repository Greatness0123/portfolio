"use client"

import {
  IconBulb,
  IconRocket,
  IconBrain,
  IconBraces,
  IconCloud,
  IconRuler,
  IconMouse,
  IconMouse2,
  IconPointer,
  IconCursorText,
  IconPencil,
  IconTarget,
  IconCircleCheck,
  IconSend,
} from "@tabler/icons-react"

const icons = [
  { Icon: IconBulb, top: "12%", left: "6%", size: 20, rotate: -15 },
  { Icon: IconRocket, top: "8%", right: "8%", size: 22, rotate: 20 },
  { Icon: IconBrain, top: "30%", left: "3%", size: 18, rotate: 10 },
  { Icon: IconBraces, top: "45%", right: "4%", size: 20, rotate: -8 },
  { Icon: IconCloud, top: "58%", left: "5%", size: 19, rotate: 12 },
  { Icon: IconRuler, top: "72%", right: "6%", size: 18, rotate: -20 },
  { Icon: IconMouse, top: "85%", left: "8%", size: 17, rotate: 5 },
  { Icon: IconMouse2, top: "20%", right: "12%", size: 16, rotate: -10 },
  { Icon: IconPointer, top: "50%", left: "2%", size: 20, rotate: 25 },
  { Icon: IconCursorText, top: "65%", right: "3%", size: 18, rotate: -5 },
  { Icon: IconPencil, top: "78%", left: "4%", size: 19, rotate: 15 },
  { Icon: IconTarget, top: "38%", right: "7%", size: 20, rotate: 0 },
  { Icon: IconCircleCheck, top: "92%", right: "10%", size: 17, rotate: -12 },
  { Icon: IconSend, top: "5%", left: "50%", size: 18, rotate: 30 },
]

export function ScatteredIcons() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {icons.map(({ Icon, size, rotate, ...pos }, i) => (
        <span
          key={i}
          className="absolute text-muted/[0.07]"
          style={{ ...pos, transform: `rotate(${rotate}deg)` }}
        >
          <Icon size={size} stroke={1.5} />
        </span>
      ))}
    </div>
  )
}
