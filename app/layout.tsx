import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Greatness Okorie - AI Engineer & Full-Stack Developer",
  description:
    "Professional portfolio of Greatness Okorie, an innovative AI Engineer and Full-Stack Developer specializing in intelligent systems and intuitive user experiences.",
  generator: "v0.app",
  keywords: ["AI Engineer", "Full-Stack Developer", "Machine Learning", "React", "TypeScript", "Python"],
  authors: [{ name: "Greatness Okorie" }],
  openGraph: {
    title: "Greatness Okorie - AI Engineer & Full-Stack Developer",
    description: "Professional portfolio showcasing AI and full-stack development projects",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
