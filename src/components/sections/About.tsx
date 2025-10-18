import { Code2, Palette, Zap, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "@/hooks/useInView"

const About = () => {
  const { ref, isInView } = useInView()
  
  const highlights = [
    {
      icon: Code2,
      title: "Clean code",
      description: "Desenvolvo soluções elegantes seguindo as melhores práticas",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Interfaces intuitivas que encantam os usuários",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Aplicações rápidas e otimizadas para todos os dispositivos",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Trabalho em equipe com comunicação clara e efetiva",
    },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-16 scroll-reveal ${isInView ? 'is-visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="gradient-text">Mim</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvedor Full Stack apaixonado por desenvolvimento web!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`space-y-4 scroll-reveal-left delay-200 ${isInView ? 'is-visible' : ''}`}>
              <p className="text-lg leading-relaxed">
                Opa! Tudo bom? Sou o Edi.. Católico e desenvolvedor Full Stack! atualmente com 26 anos, moro em Jaíba - MG. Desde jovem, sempre fui fascinado por tecnologia.
              </p>
              <p className="text-lg leading-relaxed">
                Minha jornada no desenvolvimento web começou há pouco tempo, quando decidi aprender a criar meus próprios sites e aplicações. Desde então, tenho me dedicado a aprimorar minhas habilidades em diversas tecnologias, incluindo JavaScript, React, Node.js, entre outras.
              </p>
              <p className="text-lg leading-relaxed">
                Acredito que uma boa aplicação não é apenas funcional, mas também deve proporcionar uma experiência agradável ao usuário. Por isso, sempre busco combinar design moderno com código limpo e eficiente.
              </p>
            </div>

            <div className={`glass-card rounded-2xl p-6 scroll-reveal-right delay-300 ${isInView ? 'is-visible' : ''}`}>
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                Minha Jornada
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">jan 2025 - Presente</p>
                    <p className="text-sm text-muted-foreground">
                      Desenvolvedor Full Stack com vários projetos desenvolvidos e entusiasta de Análise de dados
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">jan 2025</p>
                    <p className="text-sm text-muted-foreground">
                      Início da minha jornada como Desenvolvedor web
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-3 h-3 rounded-full bg-muted mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">fev 2024</p>
                    <p className="text-sm text-muted-foreground">
                      Início da faculdade de Análise e Desenvolvimento de Sistemas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className={`hover-lift border-border/50 bg-card/50 backdrop-blur-sm scroll-reveal-scale delay-${(index + 4) * 100} ${isInView ? 'is-visible' : ''}`}
              >
                <CardContent className="p-6">
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
