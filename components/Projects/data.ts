export type ProjectStatus = "LIVE" | "IN DEVELOPMENT" | "FUNCTIONAL"

export interface Project {
  id: string
  number: string
  name: string
  status: ProjectStatus
  description: string
  stack: string[]
  demoUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: "control",
    number: "01",
    name: "CONTROL",
    status: "LIVE",
    description:
      "An Electron desktop agent that controls your computer with natural language. Three modes: Act, Ask, Guide.",
    stack: ["Electron", "Python", "Node.js", "nut-js", "Supabase", "Vosk", "Picovoice"],
    demoUrl: "https://control-website.vercel.app",
    githubUrl: "https://github.com/Greatness0123/control-desktop",
  },
  {
    id: "bellsattend",
    number: "02",
    name: "BELLSATTEND+",
    status: "LIVE",
    description:
      "University attendance infrastructure. Teacher broadcasts a 60-second flash window. Students tap in via Supabase Realtime WebSocket. No GPS.",
    stack: ["Next.js", "Supabase Realtime", "PostgreSQL", "Tailwind", "PWA"],
    demoUrl: "https://bellsattend.vercel.app",
    githubUrl: "https://github.com/Greatness0123/bells_attend",
  },
  {
    id: "synthia",
    number: "03",
    name: "SYNTHIA",
    status: "IN DEVELOPMENT",
    description:
      "Browser-based AI embodiment sandbox. An agent inhabits a rigged 3D body, learns motor control through physics simulation, and exports robotics training datasets.",
    stack: ["Three.js", "Rapier.js", "Node.js", "Supabase pgvector", "Kaggle VLM"],
  },
  {
    id: "index",
    number: "04",
    name: "INDEX",
    status: "LIVE",
    description:
      "A place where users can find the right tools for their problems, weighed by cost, efficiency, and quality. Software discovery, curated.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    demoUrl: "https://index-tools.vercel.app",
    githubUrl: "https://github.com/Greatness0123/index",
  },
  {
    id: "aura-ai",
    number: "05",
    name: "AURA AI",
    status: "LIVE",
    description:
      "A ChatGPT-inspired AI companion with conversational AI, sleek UI, personality-altering settings, and seamless integrations.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vercel", "AI APIs"],
    demoUrl: "https://auraaiweb.vercel.app",
    githubUrl: "https://github.com/Greatness0123/auraai",
  },
  {
    id: "chopquick",
    number: "06",
    name: "CHOPQUICK",
    status: "IN DEVELOPMENT",
    description:
      "Surplus food marketplace connecting Nigerian restaurants with price-sensitive consumers. Pitched at NACOS pitchathon.",
    stack: ["Next.js", "Supabase", "Tailwind", "Gamma"],
  },
  {
    id: "aura-browser",
    number: "07",
    name: "AURA BROWSER AGENT",
    status: "FUNCTIONAL",
    description:
      "A browser automation and AI agent interface. An assistant that actually does stuff on the web instead of just talking.",
    stack: ["Python", "Gradio", "Docker", "Multiple LLMs", "Browser Automation"],
    githubUrl: "https://github.com/Greatness0123/browser-use-web-ui",
  },
]
