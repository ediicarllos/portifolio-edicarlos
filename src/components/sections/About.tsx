import { Code2, Palette, Zap, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "@/hooks/useInView"
import { useLanguage } from "@/components/LanguageProvider"
import { translations } from "@/lib/translations"

const About = () => {
  const { ref, isInView } = useInView()
  const { language } = useLanguage()
  const t = translations[language].about
  
  const highlights = [
    {
      icon: Code2,
      title: t.highlight1Title,
      description: t.highlight1Desc,
    },
    {
      icon: Palette,
      title: t.highlight2Title,
      description: t.highlight2Desc,
    },
    {
      icon: Zap,
      title: t.highlight3Title,
      description: t.highlight3Desc,
    },
    {
      icon: Users,
      title: t.highlight4Title,
      description: t.highlight4Desc,
    },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-16 scroll-reveal ${isInView ? 'is-visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.title} <span className="gradient-text">{t.titleHighlight}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`space-y-4 scroll-reveal-left delay-200 ${isInView ? 'is-visible' : ''}`}>
              <p className="text-lg leading-relaxed">
                {t.intro1}
              </p>
              <p className="text-lg leading-relaxed">
                {t.intro2}
              </p>
              <p className="text-lg leading-relaxed">
                {t.intro3}
              </p>
            </div>

            <div className={`glass-card rounded-2xl p-6 scroll-reveal-right delay-300 ${isInView ? 'is-visible' : ''}`}>
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                {t.journeyTitle}
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{t.journey1Date}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.journey1Text}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{t.journey2Date}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.journey2Text}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-3 h-3 rounded-full bg-muted mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{t.journey3Date}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.journey3Text}
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
