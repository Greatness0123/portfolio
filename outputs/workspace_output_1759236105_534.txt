import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Clock, Info } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const liveProjects = [
    {
      title: "Aura AI",
      description:
        "Aura AI is like your ChatGPT-inspired AI companion. It delivers conversational AI, sleek UI, personality altering settings and integrations to make interaction seamless.",
      image:
        "https://xurtccytrzafbfk3.public.blob.vercel-storage.com/agent-assets/a5a0ec29ad08d6e71f7470e2161edf28d8c17d253adca09b63c7395d366119d4.png",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vercel", "AI APIs"],
      liveUrl: "https://auraaiweb.vercel.app/",
      githubUrl: "https://github.com/Greatness0123/auraai",
      status: "live",
    },
    {
      title: "BellsAttend+",
      description:
        "BellsAttend+ is a geofenced broadcast-based attendance system — teachers broadcast, students nearby join, data gets logged/exported. It's like attendance but modern and a bit bossy.",
      image:
        "https://xurtccytrzafbfk3.public.blob.vercel-storage.com/agent-assets/13015d98eff96b28007be66fb0ab24280cc14fe03c29b46e2652152095a75a07.png",
      tech: ["React Native", "NativeWind", "Firebase", "Expo", "Vercel"],
      liveUrl: "https://bellsattend.vercel.app/",
      githubUrl: "https://github.com/Greatness0123/bells_attend",
      status: "live",
    },
  ]

  const ongoingProjects = [
    {
      title: "Index",
      description:
        "A place where users can find the right tools for their problems, weighed by cost, efficiency, and quality. It's like a shopping assistant but for software.",
      image: "/software-tools-directory.png",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/Greatness0123/index",
      status: "ongoing",
    },
    {
      title: "Aura Pilot",
      description:
        'Aura Pilot is basically your attempt at building a Jarvis-style desktop AI. Voice, text, file-reading, system control, all in one. Big ambitions, but honestly — it\'s the coolest "ongoing" idea here.',
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aura%20logo.jpg-6bksZqGyJfv4i4pzqd4KM2bd1PYMF8.jpeg",
      tech: ["Python", "Node.js", "Electron", "Local AI", "Desktop"],
      githubUrl: "https://github.com/Greatness0123/AuraAssistant",
      status: "ongoing",
    },
    {
      title: "Aura Browser Agent",
      description:
        "A browser automation + AI agent interface. Think of it like an AI assistant that can actually do stuff on the web instead of just talking. Like a personal intern, but less coffee breaks.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aura%20logo.jpg-6bksZqGyJfv4i4pzqd4KM2bd1PYMF8.jpeg",
      tech: ["Python", "Gradio", "Docker", "Multiple LLMs", "Browser Automation"],
      githubUrl: "https://github.com/Greatness0123/browser-use-web-ui",
      status: "ongoing",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work in AI engineering and full-stack development, featuring both live applications and
              ongoing innovations.
            </p>
          </div>

          {/* Live Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              Live Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {liveProjects.map((project, index) => (
                <Card key={index} className="project-card border-0 shadow-lg overflow-hidden group bg-card">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-card-foreground">
                      <span>{project.title}</span>
                      <Badge className="bg-green-100 text-green-800 border-green-200 animate-pulse">Live</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs skill-tag">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button asChild className="bg-primary hover:bg-primary/90 pulse-glow">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Ongoing Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-primary flex items-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
              Ongoing Development
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {ongoingProjects.map((project, index) => (
                <Card key={index} className="project-card border-0 shadow-lg overflow-hidden group bg-card">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-card-foreground">
                      <span>{project.title}</span>
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                        <Clock className="w-3 h-3 mr-1" />
                        Ongoing
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs skill-tag">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-lg text-muted-foreground text-sm">
              <Info className="w-4 h-4" />
              <span>Some repositories have been made private for specific reasons</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
