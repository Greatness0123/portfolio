"use client"

import Image from "next/image"
import { InfiniteMarquee } from "./shared/InfiniteMarquee"
import { FadeIn } from "./shared/FadeIn"

const tools = [
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Python", slug: "python" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Electron", slug: "electron" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Expo", slug: "expo" },
  { name: "React Native", slug: "react" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css" },
  { name: "C++", slug: "cplusplus" },{ name: "C", slug: "c" },
  { name: "flutter", slug: "flutter" },
  { name: "Framer Motion", slug: "framer" },
  { name: "Three.js", slug: "threedotjs" },
  { name: "Gradio", slug: "gradio" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Flask", slug: "flask" },
  { name: "Vite", slug: "vite" },
  { name: "Vitest", slug: "vitest" },
  { name: "Bun", slug: "bun" },
  { name: "Rust", slug: "rust" },
  { name: "Supabase", slug: "supabase" },
  { name: "Firebase", slug: "firebase" },
  { name: "Appwrite", slug: "appwrite" },
  { name: "Docker", slug: "docker" },
  { name: "Vercel", slug: "vercel" },
  { name: "GitHub", slug: "github" },
  { name: "GitHub Actions", slug: "githubactions" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Redis", slug: "redis" },
  { name: "Cloudflare", slug: "cloudflare" },
  { name: "Nginx", slug: "nginx" },
  { name: "Railway", slug: "railway" },
  { name: "Render", slug: "render" },
  { name: "sublimetext", slug: "sublimetext" },
  { name: "Netlify", slug: "netlify" },
  { name: "Qwen", slug: "qwen" },
  { name: "Google Cloud", slug: "googlecloud" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Resend", slug: "resend" },
  { name: "Anthropic", slug: "anthropic" },
  { name: "googlejules", slug: "googlejules" },
  { name: "Google Gemini", slug: "googlegemini" },
  { name: "Hugging Face", slug: "huggingface" },
  { name: "Ollama", slug: "ollama" },
  { name: "Perplexity", slug: "perplexity" },
  { name: "Mistral AI", slug: "mistralai" },
  { name: "DeepSeek", slug: "deepseek" },
  { name: "Cursor", slug: "cursor" },
  { name: "ElevenLabs", slug: "elevenlabs" },
  { name: "github copilot", slug: "githubcopilot" },
  { name: "Replicate", slug: "replicate" },
  { name: "LangChain", slug: "langchain" },
  { name: "minimax", slug: "minimax" },
  { name: "Kaggle", slug: "kaggle" },
  { name: "stripe", slug: "stripe" },
  { name: "Figma", slug: "figma" },
  { name: "photopea", slug: "photopea" },
  { name: "opencode", slug: "opencode" },
  { name: "kalilinux", slug: "kalilinux" },
  { name: "Postman", slug: "postman" },
  { name: "burpsuite", slug: "burpsuite" },
  { name: "virtualbox", slug: "virtualbox" },
  { name: "obsstudio", slug: "obsstudio" },
  { name: "jupyter", slug: "jupyter" },
  { name: "androidstudio", slug: "androidstudio" },
  { name: "Arduino", slug: "arduino" },
  
]

const ROW_COUNT = 3
const row1 = tools.slice(0, Math.ceil(tools.length / ROW_COUNT))
const row2 = tools.slice(Math.ceil(tools.length / ROW_COUNT), Math.ceil((tools.length * 2) / ROW_COUNT))
const row3 = tools.slice(Math.ceil((tools.length * 2) / ROW_COUNT))

const DESKTOP_SPLIT = 4
const desktopTop = tools.slice(0, Math.ceil(tools.length / DESKTOP_SPLIT))
const desktopLeft = tools.slice(Math.ceil(tools.length / DESKTOP_SPLIT), Math.ceil((tools.length * 2) / DESKTOP_SPLIT))
const desktopRight = tools.slice(Math.ceil((tools.length * 2) / DESKTOP_SPLIT), Math.ceil((tools.length * 3) / DESKTOP_SPLIT))
const desktopBottom = tools.slice(Math.ceil((tools.length * 3) / DESKTOP_SPLIT))

function ToolPill({ slug, name }: { slug: string; name: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 transition-colors hover:bg-elevated">
      <Image
        src={`https://cdn.simpleicons.org/${slug}/000000`}
        alt={name}
        width={16}
        height={16}
        className="shrink-0"
        unoptimized
      />
      <span className="font-mono text-[11px] text-text">{name}</span>
    </span>
  )
}

function MarqueeRow({
  items,
  direction,
  speed,
}: {
  items: typeof tools
  direction: "left" | "right"
  speed: number
}) {
  return (
    <InfiniteMarquee direction={direction} speed={speed} className="w-full">
      {items.map((tool) => (
        <ToolPill key={tool.slug} slug={tool.slug} name={tool.name} />
      ))}
    </InfiniteMarquee>
  )
}

function StackText({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className ?? ""}`}>
      <span
        className="font-[family-name:var(--font-display)] font-normal uppercase tracking-tight text-text/40"
        style={{ fontSize: "clamp(14px, 2vw, 20px)" }}
      >
        My
      </span>
      <div className="relative">
        <span
          className="font-[family-name:var(--font-display)] font-extrabold uppercase leading-[0.85] tracking-tight"
          style={{
            fontSize: "clamp(48px, 10vw, 120px)",
            color: "transparent",
            WebkitTextStroke: "1.5px #000000",
          }}
        >
          stack
        </span>
        {/* Avatar sitting on the "K" */}
        <Image
          src="/avatar-coding-flipped.png"
          alt="Coding avatar"
          width={160}
          height={210}
          className="absolute z-30 pointer-events-auto object-contain"
          style={{
            right: "-2%",
            bottom: "30%",
            width: "clamp(48px, 8vw, 120px)",
            height: "clamp(60px, 10vw, 160px)",
            transform: "translateX(-10%)",
          }}
        />
      </div>
      <span
        className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted"
      >
        but not limited to
      </span>
    </div>
  )
}

function DesktopPillGrid() {
  return (
    <div className="hidden grid-cols-[1fr_auto_1fr] gap-x-6 gap-y-3 py-6 sm:gap-x-8 sm:gap-y-4 sm:py-10 md:grid">
      <div className="col-span-3 flex flex-wrap justify-center gap-2">
        {desktopTop.map((tool) => (
          <ToolPill key={tool.slug} slug={tool.slug} name={tool.name} />
        ))}
      </div>

      <div className="flex flex-wrap justify-end gap-2">
        {desktopLeft.map((tool) => (
          <ToolPill key={tool.slug} slug={tool.slug} name={tool.name} />
        ))}
      </div>

      <StackText className="px-2" />

      <div className="flex flex-wrap justify-start gap-2">
        {desktopRight.map((tool) => (
          <ToolPill key={tool.slug} slug={tool.slug} name={tool.name} />
        ))}
      </div>

      <div className="col-span-3 flex flex-wrap justify-center gap-2">
        {desktopBottom.map((tool) => (
          <ToolPill key={tool.slug} slug={tool.slug} name={tool.name} />
        ))}
      </div>
    </div>
  )
}

function MobileMarquees() {
  return (
    <div className="flex flex-col gap-4 py-2 sm:py-10 md:hidden">
      <StackText className="py-4" />
      <MarqueeRow items={row1} direction="left" speed={55} />
      <MarqueeRow items={row2} direction="right" speed={60} />
      <MarqueeRow items={row3} direction="left" speed={65} />
    </div>
  )
}

export function Tools() {
  return (
    <section className="relative overflow-hidden bg-bg px-6 pt-4 pb-10 md:px-10 md:py-16">
      <FadeIn className="mx-auto max-w-5xl" direction="up">
        <MobileMarquees />
        <DesktopPillGrid />
      </FadeIn>
    </section>
  )
}
