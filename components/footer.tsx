import Image from "next/image"
import { FadeIn } from "@/components/shared/FadeIn"

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-bg px-6 py-6 md:px-10">
      <FadeIn>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 sm:flex-row">
          <span className="font-mono text-[11px] text-muted">© Greatness Okorie</span>
          <Image
            src="/signature.png"
            alt="Greatness Okorie"
            width={120}
            height={30}
            className="object-contain"
          />
        </div>
      </FadeIn>
    </footer>
  )
}
