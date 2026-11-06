import SectionTitle from "@/components/SectionTitle";
import TerminalTyping from "@/components/TerminalTyping";
import TypedText from "@/components/TypedText";
import { BlurFade } from "@/components/ui/blur-fade";
import { profile, skills } from "@/data/portfolio";

export default function AboutMe() {
  return (
    <section id="sobre" className="overflow-hidden pb-24">
      <SectionTitle ghost="Sobre" title="Sobre mim" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        <BlurFade inView offset={24} direction="up" duration={0.6}>
          <p className="text-2xl leading-snug tracking-tight md:text-3xl">
            {profile.bio}
          </p>
        </BlurFade>
        <TerminalTyping />
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-10 px-6 md:grid-cols-3">
        {skills.map((group, index) => (
          <BlurFade
            key={group.title}
            inView
            offset={24}
            direction="up"
            duration={0.6}
            delay={index * 0.1}
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
        ))}
      </div>
    </section>
  );
}
