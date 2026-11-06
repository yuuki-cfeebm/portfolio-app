"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useActiveSection } from "@/hooks/useActiveSection";
import logo from "/public/images/logo.png";
import MobileMenu from "./MobileMenu";
import { links, NavLinks } from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

const sectionIds = links.map((link) => link.id);

export default function Header() {
  const pathname = usePathname();
  const activeSection = useActiveSection(sectionIds, pathname);
  const active = pathname === "/" ? activeSection : "projetos";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 px-4"
    >
      <div className="relative mx-auto flex max-w-5xl items-center justify-between rounded-full border border-border bg-background/85 py-1.5 pl-5 pr-2 shadow-sm backdrop-blur-md">
        <Link href="/#inicio" aria-label="Voltar ao início">
          <Image alt="" src={logo} width={40} height={33} />
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          <NavLinks active={active} />
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}
