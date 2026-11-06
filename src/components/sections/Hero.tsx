"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import TypedText from "@/components/TypedText";
import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { profile } from "@/data/portfolio";
import eu from "/public/images/eu.png";

const letterDrop: Variants = {
  hidden: { y: "-70%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 130, damping: 13 },
  },
  exit: { opacity: 0 },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [colored, setColored] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const nameY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -140],
  );
  const portraitY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 70],
  );

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative h-svh min-h-[620px] w-full overflow-hidden"
    >
      <DotPattern
        width={26}
        height={26}
        className="text-primary/25 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]"
      />
      <div className="absolute bottom-[-20%] left-1/2 aspect-square h-[85%] -translate-x-1/2 rounded-full bg-brand-secondary/30 blur-3xl" />

      {/* Nome gigante, atrás do retrato */}
      <motion.div
        style={{ y: nameY }}
        className="absolute inset-x-0 top-24 flex justify-center lg:top-28"
      >
        <TextAnimate
          as="h1"
          by="character"
          variants={letterDrop}
          duration={0.5}
          delay={0.1}
          startOnView={false}
          className="text-outline text-[min(29vw,50svh)] font-black uppercase leading-[1.05] tracking-tight"
        >
          {profile.name}
        </TextAnimate>
      </motion.div>

      {/* Retrato: P&B até passar o mouse (ou tocar, no celular) */}
      <motion.div
        style={{ y: portraitY }}
        className="absolute inset-x-0 bottom-0 z-10 flex justify-center"
      >
        <BlurFade delay={0.55} duration={0.8} offset={90} direction="up">
          <div
            onClick={() => setColored((value) => !value)}
            className="[mask-composite:intersect] [mask-image:linear-gradient(to_bottom,black_72%,transparent_100%),linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
          >
            <Image
              src={eu}
              alt={`Retrato de ${profile.name}`}
              preload
              sizes="(min-width: 1024px) 62vh, 50vh"
              className={`h-[58svh] w-auto transition-[filter] duration-700 hover:grayscale-0 lg:h-[72svh] ${
                colored ? "grayscale-0" : "grayscale"
              }`}
            />
          </div>
        </BlurFade>
      </motion.div>

      {/* Blocos laterais */}
      <div className="absolute inset-x-0 top-[calc(6rem+33vw)] z-20 mx-auto flex max-w-6xl items-end justify-center gap-6 px-6 lg:top-auto lg:bottom-12 lg:justify-between">
        <BlurFade delay={1} duration={0.6} offset={40} direction="right">
          <div className="text-center lg:max-w-[15rem] lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs text-foreground backdrop-blur">
              <span className="size-2 rounded-full bg-green-500 motion-safe:animate-pulse" />
              {profile.status}
            </p>
            <TypedText
              text={profile.role}
              delay={1300}
              startOnView={false}
              className="mt-3 font-serif text-3xl italic leading-none tracking-tight text-foreground lg:text-5xl"
            />
          </div>
        </BlurFade>

        <BlurFade
          delay={1.1}
          duration={0.6}
          offset={40}
          direction="left"
          className="hidden lg:block"
        >
          <div className="max-w-xs">
            <p className="text-base text-foreground/80">{profile.bio}</p>
            <InteractiveHoverButton
              type="button"
              aria-label="Ver projetos"
              onClick={() =>
                document.getElementById("projetos")?.scrollIntoView()
              }
              className="mt-4"
            >
              Ver projetos
            </InteractiveHoverButton>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
