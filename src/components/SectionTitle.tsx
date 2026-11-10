import TypedText from "@/components/TypedText";

type SectionTitleProps = {
  ghost: string;
  title: string;
};

export default function SectionTitle({ ghost, title }: SectionTitleProps) {
  return (
    <div className="relative py-14 text-center md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span className="text-ghost whitespace-nowrap text-[clamp(3rem,14vw,13rem)] font-black uppercase leading-none tracking-tight">
          {ghost}
        </span>
      </div>
      <TypedText
        as="h2"
        text={title}
        className="relative font-serif text-3xl italic tracking-tight md:text-6xl"
      />
    </div>
  );
}