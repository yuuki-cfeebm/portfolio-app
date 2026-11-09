import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { stack, techIcons } from "@/data/portfolio";

// Faixa decorativa: a lista acessível das tecnologias está na seção "Sobre".
export default function Skills() {
  return (
    <div aria-hidden className="relative z-20 bg-primary py-4">
      <Marquee
        pauseOnHover
        className="p-0 [--duration:30s] [--gap:3.5rem] [&>div]:items-center"
      >
        {stack.map((item) =>
          techIcons[item] ? (
            // Os filtros deixam qualquer ícone na cor do texto da faixa.
            <Image
              key={item}
              src={techIcons[item]}
              alt=""
              title={item}
              width={40}
              height={40}
              className="size-9 object-contain md:size-10 "
            />
          ) : (
            <span
              key={item}
              className="font-serif text-2xl italic text-primary-foreground md:text-3xl"
            >
              {item}
            </span>
          ),
        )}
      </Marquee>
    </div>
  );
}
