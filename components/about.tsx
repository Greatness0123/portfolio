import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Cloud, Zap } from "lucide-react"

export function About() {
  const skills = [
    { name: "TypeScript", description: "Strongly typed JavaScript for scalable applications" },
    { name: "JavaScript", description: "Dynamic programming language for web development" },
    { name: "Python", description: "Versatile language for AI, ML, and backend development" },
    { name: "React", description: "Component-based library for building user interfaces" },
    { name: "React Native", description: "Cross-platform mobile app development framework" },
    { name: "Node.js", description: "JavaScript runtime for server-side development" },
    { name: "Gradio", description: "Python library for building ML web interfaces" },
    { name: "Electron", description: "Framework for building desktop apps with web technologies" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
    { name: "NativeWind", description: "Tailwind CSS for React Native applications" },
    { name: "Firebase", description: "Google's platform for mobile and web app development" },
    { name: "Supabase", description: "Open source Firebase alternative with PostgreSQL" },
    { name: "Appwrite", description: "Backend-as-a-Service platform for web and mobile apps" },
    { name: "Expo", description: "Platform for universal React applications" },
    { name: "Docker", description: "Containerization platform for application deployment" },
    { name: "Vercel", description: "Cloud platform for static sites and serverless functions" },
    { name: "GitHub Actions", description: "CI/CD platform for automating workflows" },
    { name: "OpenAI", description: "AI platform providing GPT models and APIs" },
    { name: "Hugging Face", description: "Platform for machine learning models and datasets" },
    { name: "Anthropic", description: "AI safety company creating helpful, harmless AI" },
    { name: "Ollama", description: "Tool for running large language models locally" },
    { name: "DeepSeek", description: "AI research company focused on AGI development" },
    { name: "Whisper", description: "OpenAI's speech recognition system" },
    { name: "TTS", description: "Text-to-Speech synthesis technology" },
  ]

  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Specialized in LLM integration, prompt engineering, computer vision, and building conversational AI systems with cutting-edge models.",
      color: "text-blue-500",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Expert in React, React Native, Node.js, and TypeScript. Building scalable cross-platform applications with modern architectures.",
      color: "text-green-500",
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description:
        "Proficient with Firebase, Supabase, Vercel, and Docker. Implementing secure, scalable cloud solutions with CI/CD pipelines.",
      color: "text-purple-500",
    },
    {
      icon: Zap,
      title: "AI Integrations",
      description:
        "Seamlessly integrating OpenAI, Hugging Face, Anthropic, and other AI services into production applications.",
      color: "text-orange-500",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm passionate about creating innovative solutions that bridge the gap between artificial intelligence and
              user experience. Based in Lagos, Nigeria, I transform complex technical challenges into elegant, scalable
              applications. I integrate artificial intelligence into my development workflow to improve efficiency,
              automate repetitive tasks, and deliver smarter solutions that enhance user experiences and business
              outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg bg-muted/50 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-primary">{highlight.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-primary">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="relative group">
                  <Badge
                    variant="secondary"
                    className="skill-tag px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer border border-primary/20 hover:border-primary/40"
                  >
                    {skill.name}
                  </Badge>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-popover text-popover-foreground text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 w-48 max-w-[calc(100vw-2rem)] text-center border">
                    {skill.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
