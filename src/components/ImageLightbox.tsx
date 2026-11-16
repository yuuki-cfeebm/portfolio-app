"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

type LightboxImageData = { src: string; alt: string };

const LightboxContext = createContext<((index: number) => void) | null>(null);

// Envolve a página e guarda qual imagem está aberta no modal.
export function LightboxProvider({
  images,
  children,
}: {
  images: LightboxImageData[];
  children: ReactNode;
}) {
  const [current, setCurrent] = useState<number | null>(null);
  const isOpen = current !== null;
  const total = images.length;

  const close = useCallback(() => setCurrent(null), []);
  const go = useCallback(
    (step: number) =>
      setCurrent((index) =>
        index === null ? index : (index + step + total) % total,
      ),
    [total],
  );

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close, go]);

  const image = current !== null ? images[current] : null;

  return (
    <LightboxContext.Provider value={setCurrent}>
      {children}

      <AnimatePresence>
        {image && (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={image.alt}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <motion.div
              key={image.src}
              className="relative h-full w-full"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                quality={90}
                className="object-contain"
                onClick={(event) => event.stopPropagation()}
              />
            </motion.div>

            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="size-5" />
            </button>

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    go(-1);
                  }}
                  aria-label="Imagem anterior"
                  className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    go(1);
                  }}
                  aria-label="Próxima imagem"
                  className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
                >
                  <ChevronRight className="size-6" />
                </button>
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm tabular-nums text-white">
                  {current! + 1} / {total}
                </p>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}

// Imagem clicável: dá zoom no hover e abre o modal no clique.
// O elemento pai define o tamanho e precisa ser "relative".
export function LightboxImage({
  image,
  index,
  sizes,
  preload,
}: {
  image: LightboxImageData;
  index: number;
  sizes: string;
  preload?: boolean;
}) {
  const open = useContext(LightboxContext);

  return (
    <button
      type="button"
      onClick={() => open?.(index)}
      aria-label={`Ampliar imagem: ${image.alt}`}
      className="group absolute inset-0 cursor-zoom-in overflow-hidden rounded-[inherit]"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
      />
      <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
      <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/90 text-brand-primary opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <Maximize2 className="size-4" />
      </span>
    </button>
  );
}
