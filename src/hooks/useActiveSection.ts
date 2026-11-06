"use client";

import { useEffect, useState } from "react";

// Retorna o id da seção que está cruzando o meio da tela. O pathname refaz a
// observação quando se volta para a home, já que o Header fica montado no layout.
export function useActiveSection(ids: string[], pathname: string) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join(",");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    for (const id of key.split(",")) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, [key, pathname]);

  return active;
}
