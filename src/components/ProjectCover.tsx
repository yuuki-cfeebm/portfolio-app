import Image from "next/image";
import { projects, type Project } from "@/data/portfolio";

type ProjectCoverProps = {
  project: Project;
  sizes: string;
  preload?: boolean;
};

// Primeira imagem do projeto. Sem imagem, mostra o fundo roxo com o número.
// O elemento pai define o tamanho e precisa ser "relative".
export default function ProjectCover({
  project,
  sizes,
  preload,
}: ProjectCoverProps) {
  const cover = project.images[0];

  if (cover) {
    return (
      <Image
        src={cover.src}
        alt={cover.alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary">
      <span
        aria-hidden
        className="absolute -bottom-6 left-5 font-serif text-[9rem] italic leading-none text-white/25 transition-transform duration-500 group-hover:-translate-y-3"
      >
        {String(projects.indexOf(project) + 1).padStart(2, "0")}
      </span>
    </div>
  );
}
