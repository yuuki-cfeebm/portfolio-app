import Link from "next/link";
import { motion } from "motion/react";

export const links = [
  { name: "Início", id: "inicio" },
  // { name: "Serviços", id: "servicos" },
  { name: "Projetos", id: "projetos" },
  { name: "Sobre", id: "sobre" },
  { name: "Experiência", id: "experiencia" },
  { name: "Contato", id: "contato" },
];

export function NavLinks({ active }: { active: string }) {
  return (
    <>
      {links.map((link) => {
        const isActive = active === link.id;
        return (
          <Link
            key={link.id}
            href={`/#${link.id}`}
            aria-current={isActive ? "true" : undefined}
            className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
