import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import ProjectCover from "@/components/ProjectCover";
import TypedText from "@/components/TypedText";
import { BlurFade } from "@/components/ui/blur-fade";
import { profile, projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | ${profile.name}`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projetos/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const gallery = project.images.slice(1);
  const repoLinks =
    typeof project.repo === "object"
      ? [
          { label: "Código front-end", href: project.repo.front },
          { label: "Código back-end", href: project.repo.back },
        ]
      : [{ label: "Ver código", href: project.repo }];
  const links = [{ label: "Ver site", href: project.live }, ...repoLinks].filter(
    (link) => link.href,
  );

  return (
    <main className="flex-1">
      <article className="mx-auto max-w-5xl px-6 pb-24 pt-32 md:pt-40">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Voltar aos projetos
        </Link>

        <header className="mt-8">
          <p className="text-sm font-medium text-primary">{project.category}</p>
          <TypedText
            as="h1"
            text={project.title}
            startOnView={false}
            delay={200}
            className="mt-2 font-serif text-5xl italic tracking-tight md:text-7xl"
          />
          <BlurFade delay={0.2} offset={16} direction="up">
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-foreground/80">
              {project.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
            {links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    {link.label}
                    <ArrowUpRight className="size-4" />
                  </a>
                ))}
              </div>
            )}
          </BlurFade>
        </header>

        <BlurFade delay={0.35} offset={30} direction="up">
          <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-3xl rounded-3xl border border-border p-2">
            <ProjectCover
              project={project}
              sizes="(max-width: 1024px) 100vw, 976px"
              preload
            />
          </div>
        </BlurFade>

        {project.developed.length > 0 && (
          <section className="mt-16">
            <TypedText
              as="h2"
              text="O que eu desenvolvi"
              className="font-serif text-4xl italic tracking-tight md:text-5xl"
            />
            <ol className="mt-6 border-t border-border">
              {project.developed.map((item, position) => (
                <li
                  key={item}
                  className="flex items-baseline gap-5 border-b border-border py-5"
                >
                  <span className="text-sm tabular-nums text-muted-foreground">
                    {String(position + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl tracking-tight md:text-2xl">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {gallery.length > 0 && (
          <section className="mt-16">
            <TypedText
              as="h2"
              text="Galeria"
              className="font-serif text-4xl italic tracking-tight md:text-5xl"
            />
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {gallery.map((image) => (
                <BlurFade key={image.src} inView offset={24} direction="up">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 480px"
                      className="object-cover"
                    />
                  </div>
                </BlurFade>
              ))}
            </div>
          </section>
        )}

        <Link
          href={`/projetos/${next.slug}`}
          className="group mt-20 flex items-center justify-between gap-6 border-t border-border pt-8"
        >
          <span>
            <span className="block text-sm text-muted-foreground">
              Próximo projeto
            </span>
            <span className="mt-1 block font-serif text-3xl italic tracking-tight transition-colors group-hover:text-primary md:text-5xl">
              {next.title}
            </span>
          </span>
          <ArrowRight className="size-6 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
        </Link>
      </article>
    </main>
  );
}
