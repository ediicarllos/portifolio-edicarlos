import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { useInView } from "@/hooks/useInView"
import { useLanguage } from "@/components/LanguageProvider"
import { translations } from "@/lib/translations"

const Contact = () => {
  const { toast } = useToast()
  const { ref, isInView } = useInView()
  const { language } = useLanguage()
  const t = translations[language].contact
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: t.successTitle,
      description: t.successDesc,
    })
    setFormData({ name: "", email: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: t.email,
      value: "ediicarloscs@gmail.com",
      link: "mailto:ediicarloscs@gmail.com",
    },
    {
      icon: Phone,
      title: t.phone,
      value: "+55 (38) 9 9843-0475",
      link: "tel:+553898430475",
    },
    {
      icon: MapPin,
      title: t.location,
      value: t.locationValue,
      link: "https://maps.app.goo.gl/KdM69LUFcb6FfSQR9",
    },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-16 scroll-reveal ${isInView ? 'is-visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.title} <span className="gradient-text">{t.titleHighlight}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`glass-card hover-lift text-center scroll-reveal-scale delay-${(index + 2) * 100} ${isInView ? 'is-visible' : ''}`}
              >
                <CardContent className="p-6">
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <info.icon className="h-10 w-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {info.value}
                    </p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className={`glass-card scroll-reveal delay-500 ${isInView ? 'is-visible' : ''}`}>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium"
                    >
                      {t.name}
                    </label>
                    <Input
                      id="name"
                      placeholder={t.namePlaceholder}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium"
                    >
                      {t.email}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium"
                  >
                    {t.message}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={t.messagePlaceholder}
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  {t.send}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact
