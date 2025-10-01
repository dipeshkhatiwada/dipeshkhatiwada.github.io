import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <Card className="p-8">
            <p className="text-lg text-center mb-8 text-pretty">
              I&apos;m currently open to both full-time and project-based opportunities. Whether you have a question or just
              want to say hi, feel free to reach out!
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:depeshkhatiwada@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    depeshkhatiwada@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-muted-foreground">Melbourne, VIC, Australia</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="mailto:depeshkhatiwada@gmail.com">
                  <Mail size={20} className="mr-2" />
                  Send Email
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.linkedin.com/in/dipeshkhatiwada/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} className="mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/dipeshkhatiwada" target="_blank" rel="noopener noreferrer">
                  <Github size={20} className="mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </Card>
          <footer className="mt-12 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Dipesh Khatiwada. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </section>
  )
}
