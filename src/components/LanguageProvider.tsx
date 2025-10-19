import { createContext, useContext, useEffect, useState } from "react"

type Language = "pt" | "en"

type LanguageContextType = {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("language")
    return (stored as Language) || "pt"
  })

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"))
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
