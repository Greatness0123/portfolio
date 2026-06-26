"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react"
import { FadeIn } from "@/components/shared/FadeIn"
import { Folder } from "./Folder"
import { ProjectCard } from "./ProjectCard"
import { projects } from "./data"

const STACK_SIZE = 5

function WorkText({ className = "" }: { className?: string }) {
  return (
    <span
      className={`select-none font-[family-name:var(--font-display)] font-extrabold uppercase leading-none ${className}`}
      style={{
        fontSize: "clamp(80px, 14vw, 200px)",
        color: "transparent",
        WebkitTextStroke: "1.5px #000000",
      }}
    >
      WORK
    </span>
  )
}

export function FolderStack() {
  const [stackTopIndex, setStackTopIndex] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const stackProjects = Array.from({ length: Math.min(STACK_SIZE, projects.length) }, (_, i) => {
    const idx = (stackTopIndex + i) % projects.length
    return { project: projects[idx], projectIndex: idx, stackPosition: i }
  }).reverse()

  const openFolder = (index: number) => {
    setActiveIndex(index)
    setIsExpanded(true)
  }

  const closeCard = () => setIsExpanded(false)

  const goNext = () => setActiveIndex((i) => (i + 1) % projects.length)
  const goPrev = () => setActiveIndex((i) => (i - 1 + projects.length) % projects.length)

  const cycleStack = (dir: 1 | -1) => {
    setStackTopIndex((i) => (i + dir + projects.length) % projects.length)
  }

  const paginationDots = (
    <div className="mt-8 flex flex-wrap justify-center gap-2">
      {projects.map((p, i) => (
        <button
          key={p.id}
          type="button"
          onClick={() => setActiveIndex(i)}
          aria-label={`Open ${p.name}`}
          className={`h-2 rounded-full transition-all ${
            i === activeIndex ? "w-8 bg-accent" : "w-2 bg-black/20 hover:bg-black/40"
          }`}
        />
      ))}
    </div>
  )

  return (
    <section id="work" className="relative min-h-screen bg-bg px-4 py-20 sm:px-6 md:px-10 md:py-24">
      {/* Mobile: ghost text behind folders */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden md:hidden">
        <WorkText className="opacity-[0.06]" />
      </div>

      <FadeIn className="relative z-10 mx-auto max-w-6xl">
        <p className="mb-8 font-mono text-[10px] uppercase tracking-widest text-accent sm:mb-10">
          selected projects
        </p>

        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="card"
              className="relative w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={closeCard}
                  className="flex items-center gap-2 rounded-xl border border-black/10 bg-surface px-4 py-2 font-mono text-[11px] uppercase text-muted transition-colors hover:border-accent/40 hover:text-text"
                >
                  <IconX size={14} />
                  Back to folders
                </button>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous project"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-surface text-muted transition-colors hover:border-accent/40 hover:text-text"
                  >
                    <IconChevronLeft size={18} />
                  </button>
                  <span className="font-mono text-[11px] text-muted">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next project"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-surface text-muted transition-colors hover:border-accent/40 hover:text-text"
                  >
                    <IconChevronRight size={18} />
                  </button>
                </div>
              </div>
              <ProjectCard project={projects[activeIndex]} />
              {paginationDots}
            </motion.div>
          ) : (
            <motion.div
              key="stack"
              className="relative w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Desktop: grid with folders on left, WORK text on right */}
              <div className="hidden items-center gap-12 md:grid md:grid-cols-[1fr_auto]">
                {/* Left: folder stack */}
                <div className="relative mx-auto h-[300px] w-full max-w-[400px]">
                  {stackProjects.map(({ project, projectIndex, stackPosition }) => (
                    <Folder
                      key={`${project.id}-${stackPosition}`}
                      project={project}
                      stackPosition={stackPosition}
                      isTop={stackPosition === 0}
                      onClick={() => openFolder(projectIndex)}
                    />
                  ))}
                </div>

                {/* Right: WORK outline text */}
                <div className="flex items-center justify-center">
                  <WorkText />
                </div>
              </div>

              {/* Mobile: centered folder stack (ghost text is behind via absolute parent) */}
              <div className="flex flex-col items-center md:hidden">
                <div className="relative mx-auto h-[260px] w-full max-w-[360px] sm:h-[300px] sm:max-w-[400px]">
                  {stackProjects.map(({ project, projectIndex, stackPosition }) => (
                    <Folder
                      key={`${project.id}-${stackPosition}`}
                      project={project}
                      stackPosition={stackPosition}
                      isTop={stackPosition === 0}
                      onClick={() => openFolder(projectIndex)}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation controls */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => cycleStack(-1)}
                  aria-label="Previous folder in stack"
                  className="flex h-8 w-8 items-center justify-center rounded-xl border border-black/10 bg-surface text-muted hover:text-text"
                >
                  <IconChevronLeft size={16} />
                </button>
                <p className="max-w-[200px] text-center font-mono text-[10px] leading-relaxed text-muted sm:max-w-none">
                  Tap top folder to open
                </p>
                <button
                  type="button"
                  onClick={() => cycleStack(1)}
                  aria-label="Next folder in stack"
                  className="flex h-8 w-8 items-center justify-center rounded-xl border border-black/10 bg-surface text-muted hover:text-text"
                >
                  <IconChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </FadeIn>
    </section>
  )
}
