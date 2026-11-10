import SectionTitle from "@/components/SectionTitle";
import TerminalTyping from "@/components/TerminalTyping";
import TypedText from "@/components/TypedText";
import { BlurFade } from "@/components/ui/blur-fade";
import { profile, skills } from "@/data/portfolio";
import Image from "next/image";

export default function AboutMe() {

  const timings = [
    { delay: 0,   duration: 0.4 },
    { delay: 0.3, duration: 0.7 },
    { delay: 0.7, duration: 1.1 },
  ];

  return (
    <section id="sobre" className="overflow-hidden pb-24">
      <SectionTitle ghost="Sobre" title="Sobre mim" />

      <div className="mx-auto grid max-w-6xl items-center lg:gap-10 px-6 grid-cols-1 lg:grid-cols-3">
        <BlurFade className="w-full flex flex-col items-center py-4 lg:py-0" inView offset={24} direction="up" duration={0.6}>
          <div className="relative flex items-center justify-center w-70 h-70 rounded-full shadow-md overflow-hidden border border-brand-secondary z-10">
            <Image 
              src="/images/eu.png"
              alt="Imagem de Kauã Yanase"
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="font-serif italic text-3xl mt-4">Prazer, sou o Kauã Yanase</p>
          <div className="absolute -z-10 aspect-square h-[85%] rounded-full bg-brand-secondary/30 blur-3xl bottom-8 left-4 "></div>
        </BlurFade>
        <TerminalTyping />
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-10 px-6 md:grid-cols-3">
        {skills.map((group, index) => {
          const { delay, duration } = timings[index] ?? timings[timings.length - 1];

          return (
            <BlurFade
              key={group.title}
              inView
              offset={24}
              direction="up"
              duration={duration}
              delay={delay}
            >
              <TypedText
                as="h3"
                text={group.title}
                className="font-serif text-2xl italic text-primary"
              />
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
