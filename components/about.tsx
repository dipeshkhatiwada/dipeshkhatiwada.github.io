import { Card } from "@/components/ui/card"
import { MapPin, Briefcase, GraduationCap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Melbourne, VIC, Australia</p>
            </Card>
            <Card className="p-6 text-center">
              <Briefcase className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground">4+ Years</p>
            </Card>
            <Card className="p-6 text-center">
              <GraduationCap className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">Master&apos;s in IT</p>
            </Card>
          </div>
          <Card className="p-8">
            <p className="text-lg leading-relaxed text-pretty">
              As a Software Engineer with 4 years of experience, I specialize in PHP, Laravel, Vue.js, Docker, AWS,
              MySQL, and MongoDB. I&apos;ve successfully developed secure APIs, optimized application performance, and
              managed database migrations. My expertise extends to containerization, CI/CD pipelines, and
              troubleshooting complex issues.
            </p>
            <p className="text-lg leading-relaxed mt-4 text-pretty">
              I&apos;m passionate about problem-solving and continuously seek opportunities to grow while creating impactful
              solutions. Currently pursuing my Master&apos;s degree in Information Technology at La Trobe University while
              working as a Freelance Software Engineer.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
