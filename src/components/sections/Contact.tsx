"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import TypedText from "@/components/TypedText";
import { Confetti, type ConfettiRef } from "@/components/ui/confetti";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { profile } from "@/data/portfolio";

const confettiColors = ["#6728b9", "#b95ef9", "#e9d5ff", "#ffffff"];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const confetti = useRef<ConfettiRef>(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copyEmail(event: MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget.getBoundingClientRect();

    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Sem acesso à área de transferência, abre o app de e-mail.
      window.location.href = `mailto:${profile.email}`;
      return;
    }

    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);

    confetti.current?.fire({
      particleCount: 90,
      spread: 75,
      startVelocity: 35,
      colors: confettiColors,
      origin: {
        x: (button.left + button.width / 2) / window.innerWidth,
        y: (button.top + button.height / 2) / window.innerHeight,
      },
    });
  }

  return (
    <section
      id="contato"
      className="relative overflow-hidden px-6 py-28 text-center md:py-40"
    >
      <Confetti
        ref={confetti}
        manualstart
        className="pointer-events-none fixed inset-0 z-[100] size-full"
      />
      <DotPattern
        width={26}
        height={26}
        className="text-primary/25 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-5xl">
        <TextAnimate
          as="h2"
          by="word"
          animation="blurInUp"
          once
          className="text-5xl font-medium tracking-tight md:text-8xl"
        >
          Informações de
        </TextAnimate>
        <TypedText
          text="contato"
          delay={500}
          className="font-serif text-5xl italic tracking-tight text-primary md:text-8xl"
        />

        <div className="mt-10 flex flex-col items-center gap-5">
          <ShimmerButton
            type="button"
            onClick={copyEmail}
            background="var(--color-brand-primary)"
            shimmerSize="0.12em"
            className="px-7 py-3.5 font-medium"
          >
            <span aria-live="polite">
              {copied ? "E-mail copiado!" : "Copiar meu e-mail"}
            </span>
          </ShimmerButton>

          <a
            href={`mailto:${profile.email}`}
            className="text-lg text-muted-foreground transition-colors hover:text-primary"
          >
            {profile.email}
          </a>

          <ul className="flex gap-6">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium transition-colors hover:text-primary"
                >
                  {social.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
