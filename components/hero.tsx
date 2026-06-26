"use client"

import Image from "next/image"
import { ScatteredIcons } from "@/components/shared/ScatteredIcons"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[50dvh] items-center justify-center overflow-hidden bg-bg sm:min-h-[100dvh]"
    >
      <ScatteredIcons />

      {/* All content in one stacking context */}
      <div className="relative flex flex-col items-center">
        {/* "I'm" — left side */}
        <span
          className="relative z-10 self-start font-[family-name:var(--font-display)] font-normal text-text"
          style={{
            fontSize: "clamp(20px, 3vw, 36px)",
            marginBottom: "clamp(2px, 0.5vw, 6px)",
            marginLeft: "clamp(20px, 8vw, 120px)",
          }}
        >
          I&apos;m
        </span>

        {/* Outlined GREATNESS — centered, z-10 */}
        <span
          className="pointer-events-none relative z-10 block select-none text-center font-[family-name:var(--font-display)] font-extrabold uppercase leading-[0.85] tracking-tight"
          style={{
            fontSize: "clamp(64px, 14vw, 240px)",
            color: "transparent",
            WebkitTextStroke: "1.5px #000000",
          }}
        >
          Greatness

          {/* Avatar sitting on the second "E" */}
          <span
            className="absolute z-30 pointer-events-auto"
            style={{
              left: "76%",
              bottom: "40%",
              width: "clamp(54px, 10vw, 160px)",
              height: "clamp(68px, 13vw, 210px)",
              transform: "translate(-50%, 0)",
            }}
          >
            <Image
              src="/avatarsittingflipped.png"
              alt="Sitting avatar"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 54px, (max-width: 1024px) 10vw, 160px"
            />
          </span>
        </span>

        {/* Tagline */}
        <div
          className="relative z-10 mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center"
          style={{ fontSize: "clamp(9px, 1.2vw, 14px)" }}
        >
          <span className="uppercase tracking-[0.3em] text-text/60">AI Engineer</span>
          <span className="text-text/20">·</span>
          <span className="uppercase tracking-[0.3em] text-text/60">Fullstack Developer</span>
          <span className="text-text/20">·</span>
          <span className="uppercase tracking-[0.3em] text-text/60">Founder</span>
          <span className="text-text/20">·</span>
          <span className="uppercase tracking-[0.3em] text-text/60">Visionary</span>
        </div>

        {/* Portrait — centered on top of text, z-20 */}
        <div
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-[40%]"
          style={{
            width: "clamp(240px, 34vw, 460px)",
            height: "clamp(320px, 46vw, 620px)",
          }}
        >
          <Image
            src="/hero-portrait.png"
            alt="Greatness Okorie"
            fill
            priority
            className="object-contain object-bottom"
            sizes="(max-width: 640px) 240px, (max-width: 1024px) 34vw, 460px"
          />
        </div>
      </div>
    </section>
  )
}
