import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useInView } from "@/hooks/useInView"
import project1 from "@/assets/project-1.png"
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";

const Projects = () => {
  const { ref, isInView } = useInView()
  
  const projects = [
    {
      title: "Landing Page Wind of the End",
      description:
        "Uma página de login moderna e animada para o projeto fictício Wind of the End",
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: project1,
      github: "https://github.com/ediicarllos/Wind-of-the-End",
      demo: "https://ediicarllos.github.io/Wind-of-the-End/",
    },
    {
      title: "Chat Bot com IA",
      description:
        "Chat bot inteligente utilizando OpenAI para respostas automatizadas",
      tech: ["TypeScript", "React", "CSS3", "Tailwind", "Vercel"],
      image: project2,
      github: "https://github.com/ediicarllos/Chat-bot-wih-IA",
      demo: "https://chat-bot-wih-ia.vercel.app/",
    },
    {
      title: "Landing Page Psicóloga",
      description:
        "Landing page profissional desenvolvida para a divulgação de uma clínica psicológica.",
      tech: ["CSS3", "HTML5", "JavaScript"],
      image: project3,
      github: "https://github.com/ediicarllos/Landing_page_psc_01",
      demo: "https://ediicarllos.github.io/Landing_page_psc_01/",
    },
    {
      title: "Organizador de Arquivos",
      description:
        "Um script em Python para organizar automaticamente os arquivos de uma pasta em subpastas de acordo com a extensão.",
      tech: ["Python"],
      image: project4,
      github: "https://github.com/ediicarllos/organizador-arquivos",
      demo: "https://github.com/ediicarllos/organizador-arquivos",
    },
  ]

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 scroll-reveal ${isInView ? 'is-visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meus <span className="gradient-text">Projetos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi recentemente
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover-lift border-border/50 bg-card/50 backdrop-blur-sm group scroll-reveal-scale delay-${(index + 2) * 100} ${isInView ? 'is-visible' : ''}`}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <CardHeader>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
