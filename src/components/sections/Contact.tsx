import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { useInView } from "@/hooks/useInView"

const Contact = () => {
  const { toast } = useToast()
  const { ref, isInView } = useInView()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve!",
    })
    setFormData({ name: "", email: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ediicarloscs@gmail.com",
      link: "mailto:ediicarloscs@gmail.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (38) 9____-____",
      link: "tel:+5538_________",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Minas Gerais, Brazil",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-16 scroll-reveal ${isInView ? 'is-visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Entre em <span className="gradient-text">Contato</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vamos conversar sobre seu próximo projeto
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
                      Nome
                    </label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
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
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
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
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Sua mensagem..."
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
                  Enviar Mensagem
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
