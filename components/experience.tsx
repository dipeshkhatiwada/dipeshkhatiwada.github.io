import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Freelance Software Engineer",
    company: "Self-employed",
    location: "Remote",
    period: "Nov 2021 - Present",
    description: [
      "Built scalable web apps with PHP, Laravel, Vue.js, and Docker",
      "Designed secure RESTful APIs and integrated AI APIs to enhance features",
      "Led AWS cloud migrations optimizing performance and cost",
      "Improved database efficiency with both NoSQL and SQL systems",
      "Automated CI/CD pipelines for faster, reliable deployments",
    ],
  },
  {
    title: "Software Engineer",
    company: "GrowByData",
    location: "Boston, MA (Remote)",
    period: "Jul 2023 - Mar 2024",
    description: [
      "Developed and implemented secure REST/Restful API for ongoing project",
      "Worked on data warehousing and fetched data using Dremio query engine",
      "Designed and implemented database schema migration from MongoDB to MySQL",
    ],
  },
  {
    title: "Web Developer",
    company: "PPMP",
    location: "Melbourne, VIC",
    period: "Apr 2023 - Oct 2023",
    description: [
      "Developed, maintained, and troubleshot Laravel-based applications",
      "Implemented Docker for containerization",
      "Worked on AWS web services to host Laravel App over EBS",
      "Maintained CI/CD pipelines and conducted peer reviews",
    ],
  },
  {
    title: "Software Developer",
    company: "Reckon",
    location: "Sydney, NSW",
    period: "Jul 2021 - Apr 2023",
    description: [
      "Worked in Laravel and Vue.js to test product features and fix bugs",
      "Troubleshot and analyzed problem reports to determine root causes",
      "Managed Ubuntu-based web hosting for production and development servers",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                    <p className="text-lg font-semibold">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.location}</p>
                  </div>
                  <Badge variant="secondary" className="mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
