import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LangContext, type Lang } from "@/lib/i18n";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { BeyondCode } from "@/components/portfolio/BeyondCode";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ChatBot } from "@/components/portfolio/ChatBot";

function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </>
  );
}

function App() {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedLang = localStorage.getItem("lang") as Lang | null;
    if (storedLang === "pt" || storedLang === "en" || storedLang === "es") {
      setLang(storedLang);
      return;
    }

    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (browserLang === "en" || browserLang === "es" || browserLang === "pt") {
      setLang(browserLang);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LangContext.Provider>
  );
}

export default App;
