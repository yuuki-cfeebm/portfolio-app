"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import ProjectCover from "@/components/ProjectCover";
import SectionTitle from "@/components/SectionTitle";
import { MagicCard } from "@/components/ui/magic-card";
import { projects } from "@/data/portfolio";

const ALL = "Todos";
const filters = [ALL, ...new Set(projects.map((project) => project.category))];

export default function Projects() {
  const [filter, setFilter] = useState(ALL);
  const visible = projects.filter(
    (project) => filter === ALL || project.category === filter,
  );

  return (
    <section id="projetos" className="overflow-hidden pb-16">
      <SectionTitle ghost="Projetos" title="Trabalhos selecionados" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap justify-center gap-1">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === item
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter === item && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{item}</span>
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/projetos/${project.slug}`}
                  aria-label={`Ver mais sobre ${project.title}`}
                  className="block h-full rounded-3xl"
                >
                  <MagicCard
                    className="h-full rounded-3xl border-2"
                    gradientSize={280}
                    gradientFrom="var(--color-brand-secondary)"
                    gradientTo="var(--color-brand-primary)"
                    gradientColor="color-mix(in oklab, var(--color-brand-secondary) 16%, transparent)"
                    gradientOpacity={1}
                  >
                    <div className="p-3">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                        <ProjectCover
                          project={project}
                          sizes="(max-width: 768px) 100vw, 540px"
                        />
                        <span className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-white text-brand-primary transition-transform duration-300 group-hover:rotate-45">
                          <ArrowUpRight className="size-5" />
                        </span>
                      </div>

                      <div className="px-2 pb-2 pt-4">
                        <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-primary">
                          {project.title}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-muted-foreground">
                          {project.description}
                        </p>
                        <p className="mt-3 text-sm text-muted-foreground">
                          {project.tags.join(" · ")}
                        </p>
                      </div>
                    </div>
                  </MagicCard>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
