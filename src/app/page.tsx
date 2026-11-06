import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import AboutMe from "@/components/sections/AboutMe";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <AboutMe />
      <Experience />
    </main>
  );
}
