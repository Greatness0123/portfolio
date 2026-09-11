import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

const siteUrl = "https://greatnessokorie.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Greatness Okorie — AI Engineer, Fullstack Developer & Founder",
    template: "%s | Greatness Okorie",
  },
  description:
    "Portfolio of Greatness Okorie — AI engineer, full-stack developer, and founder based in Lagos, Nigeria. Building systems that think, interfaces that feel, and products that ship.",
  keywords: [
    "Greatness Okorie",
    "AI Engineer",
    "Fullstack Developer",
    "Software Engineer",
    "Control Desktop",
    "Synthia",
    "BellsNotice",
    "BellsAttend",
    "Aura AI",
    "Lagos Nigeria Developer",
    "Three.js",
    "Next.js Developer",
    "React Developer",
    "AI Agents",
  ],
  authors: [{ name: "Greatness Okorie", url: siteUrl }],
  creator: "Greatness Okorie",
  publisher: "Greatness Okorie",
  icons: {
    icon: "/bright-smile.png",
    apple: "/bright-smile.png",
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Greatness Okorie — AI Engineer, Fullstack Developer & Founder",
    description:
      "Building systems that think, interfaces that feel, and products that ship. Portfolio of AI engineer and developer Greatness Okorie.",
    url: siteUrl,
    siteName: "Greatness Okorie Portfolio",
    images: [
      {
        url: "/hero-portrait.png",
        width: 1200,
        height: 630,
        alt: "Greatness Okorie — AI Engineer & Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greatness Okorie — AI Engineer & Builder",
    description: "Building systems that think, interfaces that feel, and products that ship.",
    creator: "@Gr8nessokorie",
    images: ["/hero-portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Greatness Okorie",
        jobTitle: "AI Engineer & Fullstack Developer",
        description: "AI engineer, full-stack developer, and founder based in Lagos, Nigeria.",
        url: siteUrl,
        sameAs: [
          "https://github.com/Greatness0123",
          "https://www.linkedin.com/in/greatness-okorie",
          "https://x.com/Gr8nessokorie",
          "https://t.me/gruco01",
          "https://instagram.com/greatness_okorie",
        ],
        knowsAbout: [
          "Artificial Intelligence",
          "Machine Learning",
          "Fullstack Web Development",
          "Next.js",
          "React",
          "TypeScript",
          "Python",
          "Electron",
          "Browser Automation",
          "3D Simulations",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Greatness Okorie Portfolio",
        description: "Portfolio of Greatness Okorie — AI Engineer, Fullstack Developer & Founder.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  }

  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Toaster theme="dark" position="bottom-center" />
        <Analytics />
      </body>
    </html>
  )
}
