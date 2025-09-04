// "use client"

// import { Moon, Sun } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { useEffect, useState } from "react"

// export function ThemeToggle() {
//   const [isDark, setIsDark] = useState(false)
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//     const savedTheme = localStorage.getItem("theme")
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
//     const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark)

//     setIsDark(shouldBeDark)
//     document.documentElement.classList.toggle("dark", shouldBeDark)
//   }, [])

//   const toggleTheme = () => {
//     const newTheme = !isDark
//     setIsDark(newTheme)
//     document.documentElement.classList.toggle("dark", newTheme)
//     localStorage.setItem("theme", newTheme ? "dark" : "light")
//   }

//   if (!mounted) {
//     return (
//       <Button
//         variant="outline"
//         size="icon"
//         className="relative overflow-hidden group bg-background hover:bg-accent transition-all duration-300 border-border"
//       >
//         <Sun className="h-[1.2rem] w-[1.2rem]" />
//       </Button>
//     )
//   }

//   return (
//     <Button
//       variant="outline"
//       size="icon"
//       onClick={toggleTheme}
//       className="relative overflow-hidden group bg-background hover:bg-accent transition-all duration-300 border-border"
//     >
//       {isDark ? (
//         <Moon className="h-[1.2rem] w-[1.2rem] text-foreground transition-all duration-300" />
//       ) : (
//         <Sun className="h-[1.2rem] w-[1.2rem] text-foreground transition-all duration-300" />
//       )}
//       <span className="sr-only">Toggle theme</span>
//     </Button>
//   )
// }
