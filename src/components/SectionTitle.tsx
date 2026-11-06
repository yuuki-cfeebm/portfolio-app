"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import TypedText from "@/components/TypedText";

type SectionTitleProps = {
  ghost: string;
  title: string;
};

// Título com uma palavra gigante vazada ao fundo, que desliza conforme o scroll.
export default function SectionTitle({ ghost, title }: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["14%", "-14%"],
  );

  return (
    <div ref={ref} className="relative py-24 text-center md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <motion.span
          style={{ x }}
          className="text-ghost whitespace-nowrap text-[clamp(4.5rem,14vw,13rem)] font-black uppercase leading-none tracking-tight"
        >
          {ghost}
        </motion.span>
      </div>
      <TypedText
        as="h2"
        text={title}
        className="relative font-serif text-4xl italic tracking-tight md:text-6xl"
      />
    </div>
  );
}
