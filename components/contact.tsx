"use client"

import { useState } from "react"
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react"
import { toast } from "sonner"
import { FadeIn } from "@/components/shared/FadeIn"
import { GhostText } from "@/components/shared/GhostText"
import { MagneticButton } from "@/components/shared/MagneticButton"
import Image from "next/image"

const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/FORM_ID/formResponse"
const ENTRY_NAME = "entry.XXXXXXXXX"
const ENTRY_EMAIL = "entry.YYYYYYYYY"
const ENTRY_MESSAGE = "entry.ZZZZZZZZZ"

const socials = [
  { icon: IconBrandGithub, href: "https://github.com/Greatness0123", label: "GitHub" },
  { icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/greatness-okorie-ab508a263", label: "LinkedIn" },
  { icon: IconBrandX, href: "https://x.com/Gruco01", label: "X" },
  { icon: IconBrandInstagram, href: "https://instagram.com/greatness-okorie", label: "Instagram" },
  { icon: IconBrandWhatsapp, href: "https://wa.me/qr/BLILCEKHZL3AO1", label: "WhatsApp" },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          [ENTRY_NAME]: formData.get("name") as string,
          [ENTRY_EMAIL]: formData.get("email") as string,
          [ENTRY_MESSAGE]: formData.get("message") as string,
        }),
      })
    } catch {
      // no-cors always resolves
    }

    setSubmitted(true)
    setLoading(false)
    toast.success("Message sent! I'll get back to you soon.")
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-bg px-4 py-10 sm:px-6 md:px-10 md:py-16">
      <GhostText text="CONTACT" />

      <FadeIn className="relative z-10 mx-auto max-w-xl">
        {/* <div className="pointer-events-none absolute -left-2 top-8 z-0 h-24 w-24 opacity-80 sm:-left-8 sm:h-32 sm:w-32">
          <Image src="/characters/sad.png" alt="" fill className="object-contain" sizes="128px" />
        </div> */}

        <div className="relative z-10">
        <h2 className="mb-3 font-[family-name:var(--font-display)] text-[clamp(32px,5vw,48px)] font-extrabold text-text">
          Let&apos;s build something.
        </h2>
        <p className="mb-10 font-[family-name:var(--font-inter)] text-base text-muted">
          Open to collabs, freelance, and conversations worth having.
        </p>

        {submitted ? (
          <div className="rounded-2xl border border-accent/20 bg-surface p-8 text-center">
            <p className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold text-text">
              Message received.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-sm text-muted">
              Thanks for reaching out — I&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              required
              placeholder="Name"
              className="w-full rounded-2xl border border-black/10 bg-surface px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-text outline-none transition-colors placeholder:text-muted focus:border-accent"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-2xl border border-black/10 bg-surface px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-text outline-none transition-colors placeholder:text-muted focus:border-accent"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Message"
              className="w-full resize-none rounded-2xl border border-black/10 bg-surface px-4 py-3 font-[family-name:var(--font-inter)] text-sm text-text outline-none transition-colors placeholder:text-muted focus:border-accent"
            />
            <MagneticButton type="submit">
              <span className="block w-full rounded-2xl bg-accent px-6 py-3.5 text-center font-mono text-[12px] uppercase text-bg transition-opacity hover:opacity-90 disabled:opacity-50">
                {loading ? "Sending..." : "Send message"}
              </span>
            </MagneticButton>
          </form>
        )}

        <div className="mt-10 flex items-center justify-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/[0.03] text-muted backdrop-blur-sm transition-all hover:-translate-y-1 hover:text-accent"
            >
              <Icon size={20} stroke={1.5} />
            </a>
          ))}
        </div>
        </div>
      </FadeIn>
    </section>
  )
}
