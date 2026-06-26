"use client"

import { motion } from "framer-motion"
import { MagneticButton } from "@/components/shared/MagneticButton"
import { BrandIcon } from "@/components/shared/BrandIcon"
import { getStackIconSlug } from "@/lib/stack-icons"
import type { Project } from "./data"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
}

const statusColors = {
  LIVE: "bg-green-500",
  "IN DEVELOPMENT": "bg-amber-500",
  FUNCTIONAL: "bg-sky-400",
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-black/10 bg-surface p-5 sm:p-6 md:p-8"
    >
      <span
        className="pointer-events-none absolute right-3 top-1 select-none font-[family-name:var(--font-display)] font-extrabold sm:right-4 sm:top-2"
        style={{
          fontSize: "clamp(64px, 14vw, 140px)",
          color: "transparent",
          WebkitTextStroke: "1.5px rgba(0,0,0,0.08)",
        }}
      >
        {project.number}
      </span>

      <div className="relative z-10">
        <h3 className="mb-2 font-[family-name:var(--font-display)] text-[clamp(28px,6vw,52px)] font-extrabold leading-none text-text">
          {project.name}
        </h3>

        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-elevated px-3 py-1 font-mono text-[10px] uppercase tracking-wider">
          <span className={cn("h-1.5 w-1.5 animate-pulse rounded-full", statusColors[project.status])} />
          {project.status}
        </span>

        <p className="mb-6 max-w-xl font-[family-name:var(--font-inter)] text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-2 rounded-full border border-black/10 bg-elevated px-3 py-1.5 font-mono text-[11px] text-text/80"
            >
              <BrandIcon slug={getStackIconSlug(tech)} name={tech} size={14} />
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.demoUrl && (
            <MagneticButton href={project.demoUrl}>
              <span className="inline-block rounded-2xl bg-accent px-5 py-3 font-mono text-[12px] uppercase text-bg">
                Live demo →
              </span>
            </MagneticButton>
          )}
          {project.githubUrl && (
            <MagneticButton href={project.githubUrl}>
              <span className="inline-block rounded-2xl border border-black/15 px-5 py-3 font-mono text-[12px] uppercase text-text">
                Source code →
              </span>
            </MagneticButton>
          )}
        </div>
      </div>
    </motion.div>
  )
}
