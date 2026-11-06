"use client";

import { useEffect, useRef, useState } from "react";
import { Database, LayoutTemplate, Rocket, Server } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import SectionTitle from "@/components/SectionTitle";
import { services } from "@/data/portfolio";

const icons = {
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  rocket: Rocket,
};

// Espera breve para a linha não abrir quando o mouse só está de passagem.
const HOVER_INTENT_MS = 140;

export default function Services() {
  const [open, setOpen] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  function handleHover(index: number, pointerType: string) {
    if (pointerType !== "mouse") return;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(index), HOVER_INTENT_MS);
  }

  return (
    <section id="servicos" className="overflow-hidden pb-16">
      <SectionTitle ghost="Serviços" title="O que eu faço" />

      <ul
        className="mx-auto max-w-6xl px-6"
        onPointerLeave={() => clearTimeout(timer.current)}
      >
        {services.map((service, index) => {
          const isOpen = open === index;
          const Icon = icons[service.icon];

          return (
            <li
              key={service.title}
              onPointerEnter={(event) => handleHover(index, event.pointerType)}
              className={`border-b transition-[background-color,border-radius] duration-300 ${
                isOpen
                  ? "rounded-3xl border-transparent bg-brand-primary text-white"
                  : "border-border"
              }`}
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`servico-${index}`}
                  onClick={() => setOpen(index)}
                  className="flex w-full items-baseline gap-5 px-4 py-6 text-left md:px-8"
                >
                  <span
                    className={`text-sm tabular-nums ${isOpen ? "text-white/70" : "text-muted-foreground"}`}
                  >
                    0{index + 1}
                  </span>
                  <span className="text-3xl font-medium tracking-tight md:text-5xl">
                    {service.title}
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`servico-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-8 px-4 pb-8 md:flex-row md:items-center md:justify-between md:px-8 md:pl-[4.5rem]">
                      <div className="max-w-md">
                        <p className="text-lg text-white/85">
                          {service.description}
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-full border border-white/30 px-3 py-1 text-xs"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <motion.div
                        aria-hidden
                        initial={{ rotate: 0, scale: 0.85 }}
                        animate={{ rotate: -6, scale: 1 }}
                        transition={{ type: "spring", stiffness: 160, damping: 14 }}
                        className="mr-4 hidden size-36 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-2xl md:flex"
                      >
                        <Icon className="size-14" strokeWidth={1.25} />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
