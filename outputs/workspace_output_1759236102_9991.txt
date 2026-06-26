"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Hero() {
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  const targetText = "Greatness Okorie"

  useEffect(() => {
    if (!isTyping) return

    const timeout = setTimeout(() => {
      if (currentText.length < targetText.length) {
        setCurrentText(targetText.substring(0, currentText.length + 1))
      } else {
        setIsTyping(false)
      }
    }, 100)

    return () => clearTimeout(timeout)
  }, [currentText, isTyping, targetText])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      const headerOffset = 80
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      const headerOffset = 80
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 pt-32">
            <div className="w-48 h-48 mx-auto relative max-w-[90vw] max-h-[90vw]">
              <div className="w-full h-full rounded-full border-4 border-blue-200 dark:border-blue-400 shadow-2xl float-animation glow-border overflow-hidden aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250816_112132.jpg-HEte2Ovfrmgb2iv4WBn6uGRxrE8Nnh.jpeg"
                  alt="Greatness Okorie"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-lg md:text-xl mb-2 text-gray-600 dark:text-gray-300">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent min-h-[1.2em]">
              {currentText}
              {isTyping && <span className="animate-pulse text-gray-900 dark:text-white">|</span>}
            </h1>
          </div>

          <p className="text-xl md:text-2xl mb-4 text-gray-800 dark:text-gray-100 animate-fade-in-up font-semibold">
            AI Engineer & Full-Stack Developer
          </p>

          <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            A versatile technology professional with expertise in creating responsive web applications, cloud solutions,
            and software systems using modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 font-semibold px-8 py-3 pulse-glow"
            >
              View My Work
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 font-semibold px-8 py-3 bg-transparent"
            >
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-gray-600 dark:text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  )
}
