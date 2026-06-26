import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Toaster } from "sonner"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Greatness Okorie — AI Engineer & Builder",
  description:
    "Portfolio of Greatness Okorie — AI engineer, full-stack developer, and founder based in Lagos, Nigeria.",
  openGraph: {
    title: "Greatness Okorie — AI Engineer & Builder",
    description: "Building systems that think, interfaces that feel, and products that ship.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        <Toaster theme="dark" position="bottom-center" />
      </body>
    </html>
  )
}
