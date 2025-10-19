import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useInView } from "@/hooks/useInView"
import { useLanguage } from "@/components/LanguageProvider"
import { translations } from "@/lib/translations"

const Skills = () => {
  const { ref, isInView } = useInView()
  const { language } = useLanguage()
  const t = translations[language].skills
  
  const skillCategories = [
    {
      title: t.frontend,
      skills: [
        { name: "React / Next.js", level: 42 },
        { name: "TypeScript", level: 28 },
        { name: "Tailwind CSS", level: 62 },
        { name: "HTML / CSS", level: 95 },
      ],
    },
    {
      title: t.backend,
      skills: [
        { name: "Node.js", level: 41 },
        { name: "Java", level: 38 },
        { name: "SQL", level: 68 },
        { name: "REST APIs", level: 58 },
      ],
    },
    {
      title: t.devops,
      skills: [
        { name: "Git / GitHub", level: 98 },
        { name: "Jira", level: 75 },
        { name: "CI/CD", level: 62 },
        { name: "Vercel / AWS", level: 68 },
      ],
    },
    {
      title: t.soft,
      skills: [
        { name: t.teamwork, level: 95 },
        { name: t.communication, level: 90 },
        { name: t.problemSolving, level: 92 },
        { name: t.fastLearning, level: 95 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 scroll-reveal ${isInView ? 'is-visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.title} <span className="gradient-text">{t.titleHighlight}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className={`glass-card hover-lift scroll-reveal delay-${(index + 2) * 100} ${isInView ? 'is-visible' : ''}`}
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 gradient-text">
                    {category.title}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress
                          value={skill.level}
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
