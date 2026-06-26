"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { scrollToSection } from "@/lib/scroll"
import {
  IconBriefcase,
  IconUser,
  IconMail,
} from "@tabler/icons-react"

const links = [
  { label: "WORK", href: "work", icon: IconBriefcase },
  { label: "ABOUT", href: "about", icon: IconUser },
  { label: "CONTACT", href: "contact", icon: IconMail },
]

export function Nav() {
  const [active, setActive] = useState("work")
  const [inHero, setInHero] = useState(true)

  useEffect(() => {
    const sectionIds = links.map((l) => l.href)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const hero = document.getElementById("home")
    if (!hero) return

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setInHero(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    heroObserver.observe(hero)
    return () => heroObserver.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-6 py-5 md:px-10">
      <div className="flex items-center gap-2 rounded-full border border-border/0 bg-bg/0 px-1 py-1 backdrop-blur-sm transition-all duration-500 ease-out sm:gap-3 sm:border-border sm:bg-bg/60 sm:px-3 sm:py-1.5">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = active === link.href
          return (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollToSection(link.href)}
              aria-label={link.label}
              className={cn(
                "relative flex items-center justify-center overflow-hidden rounded-full transition-all duration-500 ease-out",
                inHero
                  ? "h-8 w-[72px] sm:w-[80px]"
                  : "h-8 w-8",
                isActive ? "text-text" : "text-muted hover:text-text",
              )}
            >
              {/* Text label — visible in hero */}
              <span
                className={cn(
                  "absolute inset-0 flex items-center justify-center font-mono text-[11px] uppercase tracking-widest transition-all duration-500 ease-out",
                  inHero
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-3 opacity-0",
                )}
              >
                {link.label}
              </span>

              {/* Icon — visible when scrolled */}
              <span
                className={cn(
                  "absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out",
                  inHero
                    ? "translate-y-4 opacity-0"
                    : "translate-y-0 opacity-100",
                )}
              >
                <Icon size={16} stroke={1.5} />
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
