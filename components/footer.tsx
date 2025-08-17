import { Github, Linkedin, MessageCircle, Send } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Greatness0123",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/greatness-okorie-ab508a263",
      label: "LinkedIn",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/qr/BLILCEKHZL3AO1",
      label: "WhatsApp",
    },
    {
      icon: Send,
      href: "http://t.me/Gruco01",
      label: "Telegram",
    },
  ]

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold font-heading mb-2">Greatness Okorie</h3>
              <p className="text-primary-foreground/80">AI Engineer & Full-Stack Developer</p>
              <p className="text-primary-foreground/60 text-sm">Lagos, Nigeria</p>
            </div>

            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Greatness Okorie. All rights reserved. Built with passion and code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
