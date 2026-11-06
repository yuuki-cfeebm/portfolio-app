"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { links } from "./NavLinks";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full mt-2 flex flex-col gap-1 rounded-3xl border border-border bg-popover p-3 text-popover-foreground shadow-xl"
          >
            {links.map((link) => (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-2.5 text-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
