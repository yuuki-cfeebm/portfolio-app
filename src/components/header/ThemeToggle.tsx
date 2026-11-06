"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Espaçador para evitar layout shift durante o carregamento inicial
    return <div className="w-9 h-9" />;
  }

  return (
    <AnimatedThemeToggler
      aria-label="Alternar tema"
      className="inline-flex size-9 items-center justify-center rounded-full bg-transparent text-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
        onThemeChange={(t) => setTheme(t)}
    />
  );
}