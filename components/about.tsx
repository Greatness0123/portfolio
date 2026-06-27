"use client"

import dynamic from "next/dynamic"
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react"
import { FadeIn } from "@/components/shared/FadeIn"
import { GhostText } from "@/components/shared/GhostText"
import { Stagger, StaggerItem } from "@/components/shared/Stagger"

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
)

const socials = [
  { icon: IconBrandGithub, href: "https://github.com/Greatness0123", label: "GitHub" },
  { icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/greatness-okorie-ab508a263", label: "LinkedIn" },
  { icon: IconBrandX, href: "https://x.com/Greatness0123", label: "X" },
  { icon: IconBrandInstagram, href: "https://instagram.com/greatness-okorie", label: "Instagram" },
]

const stats = [
  { label: "Projects shipped", value: "7+" },
  { label: "Years building", value: "8+" },
  { label: "Live products", value: "5+" },
  { label: "Currently building", value: "SYNTHIA" },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-bg px-4 py-10 sm:px-6 md:px-10 md:py-16">
      <GhostText text="ABOUT" />

      <Stagger className="relative z-10 mx-auto max-w-6xl" stagger={0.1}>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="min-w-0">
            <StaggerItem direction="right">
              <div className="mb-4 rounded-2xl border border-black/10 bg-surface p-3 sm:p-4">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted">
                  GitHub activity
                </p>
                <div className="no-scrollbar w-full overflow-x-auto -mx-1 px-1 pb-2" style={{ WebkitOverflowScrolling: "touch" }}>
                  <GitHubCalendar
                    username="Greatness0123"
                    colorScheme="light"
                    theme={{
                      light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                      dark: ["#161616", "#0e4429", "#006d32", "#26a641", "#39d353"],
                    }}
                    fontSize={11}
                    blockSize={10}
                    blockMargin={3}
                  />
                </div>
              </div>
            </StaggerItem>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <StaggerItem key={stat.label} direction="up" delay={i * 0.05}>
                  <div className="rounded-2xl border border-black/10 bg-surface p-4">
                    <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                      {stat.label}
                    </p>
                    <p className="font-[family-name:var(--font-display)] text-base font-bold text-text sm:text-lg">
                      {stat.value}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <StaggerItem direction="left">
              <h2 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(28px,5vw,36px)] font-extrabold leading-tight text-text sm:mb-8">
                I build things that think.
              </h2>
            </StaggerItem>

            <StaggerItem direction="left" delay={0.08}>
              <div className="space-y-4 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-muted sm:space-y-5 sm:text-base">
                <p>
                  I&apos;m Greatness Okorie, an AI engineer, full-stack developer, and founder. Studying
                  Computer Science at Bells University of Technology while shipping real products in parallel.
                </p>
                <p>
                  My workflow is architecture-first. I direct AI coding agents; Cursor, Jules, OpenCode to
                  implement while I own system design, product vision, and problem diagnosis.
                </p>
                <p>
                  Previously applied to Y Combinator for Control. Currently deep in BellsAttend+ and SYNTHIA.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem direction="up" delay={0.15}>
              <div className="mt-6 flex items-center gap-5 sm:mt-8">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-full p-1 text-muted transition-colors hover:text-accent"
                  >
                    <Icon size={20} stroke={1.5} />
                  </a>
                ))}
              </div>
            </StaggerItem>
          </div>
        </div>
      </Stagger>
    </section>
  )
}
