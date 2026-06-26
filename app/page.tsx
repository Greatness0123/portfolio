import { Nav } from "@/components/Nav"
import { Hero } from "@/components/Hero"
import { Tools } from "@/components/Tools"
import { FolderStack } from "@/components/Projects/FolderStack"
import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { ScatteredIcons } from "@/components/shared/ScatteredIcons"

export default function Home() {
  return (
    <main className="bg-bg min-h-screen">
      <ScatteredIcons />
      <Nav />
      <Hero />
      <Tools />
      <FolderStack />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
