import Contact from "@/components/ContactMe";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/SkillsSection";


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
