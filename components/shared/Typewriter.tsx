"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  words: string[]
  className?: string
}

export function Typewriter({ words, className }: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < current.length) {
            setText(current.slice(0, text.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (text.length > 0) {
            setText(current.slice(0, text.length - 1))
          } else {
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 40 : 80,
    )

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words])

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse text-accent">|</span>
    </span>
  )
}
