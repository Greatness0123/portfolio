"use client"

import { cn } from "@/lib/utils"
import type { Project } from "./data"

const BODY_TONES = ["#E8E4DD", "#DDD8D0", "#D2CCC3", "#C7C0B6", "#BCB5AA"]

interface FolderProps {
  project: Project
  stackPosition: number
  isTop: boolean
  onClick?: () => void
}

function FolderShape({
  project,
  stackPosition,
  isTop,
}: Pick<FolderProps, "project" | "stackPosition" | "isTop">) {
  return (
    <>
      <div
        className={cn(
          "relative z-10 ml-6 inline-block rounded-t-lg border border-b-0 border-black/10 px-4 py-2 sm:ml-8 sm:px-5 sm:py-2.5",
          isTop ? "border-accent/40 bg-[#E8E4DD]" : "bg-[#DDD8D0]",
        )}
      >
        <span className={cn("font-mono text-[10px] sm:text-[11px]", isTop ? "text-accent" : "text-muted")}>
          {project.number} · {project.name}
        </span>
      </div>
      <div
        className={cn(
          "-mt-px h-40 rounded-2xl rounded-tl-sm border border-black/10 sm:h-48",
          isTop && "border-accent/30",
        )}
        style={{ backgroundColor: BODY_TONES[stackPosition] ?? BODY_TONES[4] }}
      />
    </>
  )
}

export function Folder({ project, stackPosition, isTop, onClick }: FolderProps) {
  const lift = stackPosition * 32
  const shift = stackPosition * 8
  const zIndex = 10 - stackPosition

  const style = {
    bottom: lift,
    zIndex,
    transform: `translateX(calc(-50% + ${shift}px))`,
    opacity: 1 - stackPosition * 0.1,
  }

  const className = cn(
    "absolute left-1/2 w-[min(88vw,340px)] text-left sm:w-[400px]",
    isTop && "cursor-pointer",
  )

  if (isTop) {
    return (
      <button type="button" onClick={onClick} className={className} style={style}>
        <FolderShape project={project} stackPosition={stackPosition} isTop={isTop} />
      </button>
    )
  }

  return (
    <div aria-hidden className={className} style={style}>
      <FolderShape project={project} stackPosition={stackPosition} isTop={isTop} />
    </div>
  )
}
