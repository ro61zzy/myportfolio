import Contact from "@/components/ContactMe";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Skills from "@/components/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
    
      <main>
        <HeroSection />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
