"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import SectionTitle from "@/components/SectionTitle";
import { NumberTicker } from "@/components/ui/number-ticker";
import { experience, stats } from "@/data/portfolio";

// A classe "dark" mantém esta faixa escura nos dois temas.
export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="experiencia"
      className="dark overflow-hidden bg-[#1a0b2e] pb-24 text-foreground"
    >
      <SectionTitle ghost="Experiência" title="Minha trajetória" />

      <div className="mx-auto max-w-6xl px-6">
        <ul className="border-t border-border">
          {experience.map((item, index) => {
            const isOpen = open === index;

            return (
              <li
                key={`${item.role}-${item.period}`}
                className="border-b border-border"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`experiencia-${index}`}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
                      <span className="text-2xl font-medium tracking-tight md:text-3xl">
                        {item.role}
                      </span>
                      <span className="text-muted-foreground">
                        {item.company}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-6">
                      <span className="hidden text-sm tabular-nums text-muted-foreground md:block">
                        {item.period}
                      </span>
                      <Plus
                        className={`size-5 text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`experiencia-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="max-w-2xl pb-6 text-muted-foreground">
                        <span className="mb-1 block text-sm tabular-nums md:hidden">
                          {item.period}
                        </span>
                        <span className="mb-2">{item.intro}</span>
                        <ul className="flex flex-col gap-4 mt-2">
                          {item.content?.map((li) => (
                            <li className="text-white" key={li.title}>
                              <span className="font-semibold text-muted-foreground">{li.title} </span>
                              {li.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        <dl className="mt-16 grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-6xl font-medium tracking-tight text-primary">
                <NumberTicker
                  value={stat.value}
                  className="text-primary dark:text-primary"
                />
                {stat.suffix}
              </dd>
              <dt className="mt-1 text-muted-foreground">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
