"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ScatteredIcons } from "@/components/shared/ScatteredIcons"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[50dvh] items-center justify-center overflow-hidden sm:min-h-[100dvh] [isolation:isolate]"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(125%_125%_at_50%_90%,_#fff_40%,_#475569_100%)]" />
      <ScatteredIcons />

      <div className="relative flex flex-col items-center">
        {/* "I'm" — left side */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="relative z-10 self-start font-[family-name:var(--font-display)] font-normal text-text"
          style={{
            fontSize: "clamp(20px, 3vw, 36px)",
            marginBottom: "clamp(2px, 0.5vw, 6px)",
            marginLeft: "clamp(20px, 8vw, 120px)",
          }}
        >
          I&apos;m
        </motion.span>

        {/* Outlined GREATNESS — centered, z-10 */}
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="pointer-events-none relative z-10 block select-none text-center font-[family-name:var(--font-display)] font-extrabold uppercase leading-[0.85] tracking-tight"
          style={{
            fontSize: "clamp(64px, 14vw, 240px)",
            color: "transparent",
            WebkitTextStroke: "1.5px #000000",
          }}
        >
          Greatness

          {/* Avatar sitting on the second "E" */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease }}
            className="absolute z-30 pointer-events-auto"
            style={{
              left: "70%",
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
          </motion.span>
        </motion.span>

        {/* Tagline — left side, stairs */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease }}
          className="absolute z-10 uppercase text-text/60"
          style={{
            fontSize: "clamp(9px, 1.2vw, 14px)",
            letterSpacing: "0.3em",
            left: "clamp(20px, 8vw, 120px)",
            top: "96%",
          }}
        >
          AI Engineer
        </motion.span>

        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease }}
          className="absolute z-10 uppercase text-text/60"
          style={{
            fontSize: "clamp(9px, 1.2vw, 14px)",
            letterSpacing: "0.3em",
            left: "clamp(20px, 8vw, 120px)",
            top: "108%",
          }}
        >
          Fullstack Developer
        </motion.span>

        {/* Tagline — right side, stairs */}
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease }}
          className="absolute z-10 uppercase text-text/60"
          style={{
            fontSize: "clamp(9px, 1.2vw, 14px)",
            letterSpacing: "0.3em",
            right: "clamp(20px, 8vw, 120px)",
            top: "96%",
          }}
        >
          Visionary
        </motion.span>

        <motion.span
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.3, ease }}
          className="absolute z-10 uppercase text-text/60"
          style={{
            fontSize: "clamp(9px, 1.2vw, 14px)",
            letterSpacing: "0.3em",
            right: "clamp(20px, 8vw, 120px)",
            top: "108%",
          }}
        >
          Founder
        </motion.span>

        {/* Portrait rectangle — emanation frame */}
        <div
          className="absolute left-1/2 z-[15] -translate-x-1/2 border border-black/15"
          style={{
            width: "clamp(240px, 34vw, 460px)",
            top: "45%",
            bottom: 0,
          }}
        />

        {/* Portrait — centered on top of text, z-20 */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
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
            className="object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
            sizes="(max-width: 640px) 240px, (max-width: 1024px) 34vw, 460px"
          />
        </motion.div>
      </div>
    </section>
  )
}
