"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsMenuOpen(false)
    }
  }

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "Greatness_Okorie_CV.pdf"
    link.download = "Greatness_Okorie_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">GREATNESS OKORIE</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            <div
              className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out"
              style={{
                width:
                  activeSection === "home"
                    ? "48px"
                    : activeSection === "about"
                      ? "52px"
                      : activeSection === "projects"
                        ? "64px"
                        : activeSection === "contact"
                          ? "60px"
                          : "0px",
                transform:
                  activeSection === "home"
                    ? "translateX(0px)"
                    : activeSection === "about"
                      ? "translateX(72px)"
                      : activeSection === "projects"
                        ? "translateX(148px)"
                        : activeSection === "contact"
                          ? "translateX(236px)"
                          : "translateX(0px)",
              }}
            />
            <button
              onClick={() => scrollToSection("home")}
              className={`text-foreground hover:text-primary transition-all duration-300 hover:scale-105 pb-2 ${
                activeSection === "home" ? "text-primary font-semibold" : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-foreground hover:text-primary transition-all duration-300 hover:scale-105 pb-2 ${
                activeSection === "about" ? "text-primary font-semibold" : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-foreground hover:text-primary transition-all duration-300 hover:scale-105 pb-2 ${
                activeSection === "projects" ? "text-primary font-semibold" : ""
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-foreground hover:text-primary transition-all duration-300 hover:scale-105 pb-2 ${
                activeSection === "contact" ? "text-primary font-semibold" : ""
              }`}
            >
              Contact
            </button>
            <ThemeToggle />
            <Button onClick={downloadCV} className="bg-primary hover:bg-primary/90 pulse-glow">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button onClick={downloadCV} className="bg-primary hover:bg-primary/90 w-fit">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
