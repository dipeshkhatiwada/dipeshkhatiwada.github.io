import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Zoom API Integration",
    description:
      "Laravel package for creating and managing Zoom meetings directly from Laravel applications. Simplifies video conferencing integration.",
    technologies: ["PHP", "Laravel", "Zoom API"],
    github: "https://github.com/dipeshkhatiwada/zoom-api",
    stars: 3,
  },
  {
    title: "ODBC Connector",
    description:
      "Custom ODBC database connector for Laravel applications, enabling seamless connections to various database systems.",
    technologies: ["PHP", "Laravel", "ODBC"],
    github: "https://github.com/dipeshkhatiwada/odbc-connector",
    stars: 2,
  },
  {
    title: "Laravel Inertia CRUD",
    description:
      "Full-stack CRUD application demonstrating Laravel Inertia.js integration with modern frontend practices.",
    technologies: ["Laravel", "Inertia.js", "Vue.js"],
    github: "https://github.com/dipeshkhatiwada/laravel_inertia",
    stars: 1,
  },
  {
    title: "E-Commerce Platform",
    description: "Complete e-commerce solution with product management, shopping cart, and checkout functionality.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/dipeshkhatiwada/ecommerce",
    stars: 1,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 flex flex-col hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Github size={16} />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 flex-grow text-pretty">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-muted rounded-md text-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    View on GitHub
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/dipeshkhatiwada" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
                <ExternalLink size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
