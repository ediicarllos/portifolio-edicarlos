import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroImage from "@/assets/hero-dev.jpg"

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient" />
      
      {/* Hero image background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={heroImage}
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-down">
              Hello world! My name is{" "}
              <span className="gradient-text">Edi Carlos</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto stagger-1 animate-fade-in-up">
              a full stack developer & data analysis enthusiast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 stagger-2 animate-scale-bounce">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group hover-glow relative overflow-hidden"
              >
                <span className="relative z-10">Vamos conversar</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 shimmer-effect animate-shimmer" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group"
                onClick={() => {
                  const element = document.getElementById("projects")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Ver projetos
              </Button>
            </div>
            <div className="flex gap-6 justify-center stagger-3 animate-fade-in">
              <a
                href="https://github.com/ediicarllos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-rotate-6"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ediicarlos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:ediicarloscs@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-6"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
    </section>
  )
}

export default Hero
