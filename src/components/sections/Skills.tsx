import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { stack, techIcons } from "@/data/portfolio";

export default function Skills() {
  return (
    <div aria-hidden className="relative z-20 py-4 border-y border-primary">
      <Marquee
        pauseOnHover
        className="p-0 [--duration:30s] [--gap:3.5rem] [&>div]:items-center"
      >
        {stack.map((item) =>
          techIcons[item] ? (
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
