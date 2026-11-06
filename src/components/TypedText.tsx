import { TypingAnimation } from "@/components/ui/typing-animation";

type TypedTextProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  startOnView?: boolean;
};

// Digita o texto sem empurrar o layout: uma cópia invisível reserva o espaço
// final, e a cópia "sr-only" mantém o texto completo para leitores de tela e SEO.
export default function TypedText({
  text,
  as: Tag = "p",
  className,
  delay,
  startOnView,
}: TypedTextProps) {
  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline-grid">
        <span className="invisible col-start-1 row-start-1">{text}</span>
        <TypingAnimation
          duration={70}
          delay={delay}
          startOnView={startOnView}
          className="col-start-1 row-start-1 text-left leading-[inherit] tracking-[inherit]"
        >
          {text}
        </TypingAnimation>
      </span>
    </Tag>
  );
}
