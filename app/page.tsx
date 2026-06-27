import { Nav } from "@/components/Nav"
import { Hero } from "@/components/hero"
import { Tools } from "@/components/Tools"
import { FolderStack } from "@/components/Projects/FolderStack"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-bg min-h-screen">
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
