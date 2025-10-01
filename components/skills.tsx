import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    category: "Backend",
    skills: ["PHP", "Laravel", "Python", "Django", "Node.js", "REST APIs"],
  },
  {
    category: "Frontend",
    skills: ["Vue.js", "React.js", "JavaScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    category: "Database",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Dremio"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["AWS", "Docker", "CI/CD", "GitHub", "Ubuntu Server"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Agile", "API Integration", "Data Warehousing", "Problem Solving"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
