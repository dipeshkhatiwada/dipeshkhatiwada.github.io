"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Hi, I&apos;m <span className="text-primary">Dipesh Khatiwada</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            Full Stack Software Engineer specializing in Laravel, Vue.js, and AWS
          </p>
          <p className="text-lg text-foreground mb-12 max-w-2xl mx-auto text-pretty">
            With 4+ years of experience building scalable web applications, I&apos;m passionate about creating impactful
            solutions and solving complex problems.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" onClick={scrollToContact}>
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" download="Dipesh_Khatiwada_Resume.pdf">
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/dipeshkhatiwada" target="_blank" rel="noopener noreferrer">
                View GitHub
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/dipeshkhatiwada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dipeshkhatiwada/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:depeshkhatiwada@gmail.com"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
