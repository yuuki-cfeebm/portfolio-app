import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      {/* <Services /> */}
      <Projects />
      <AboutMe />
      <Experience />
      <Contact />
    </main>
  );
}
