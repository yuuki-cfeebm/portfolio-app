import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
        <p>
          {profile.name} · {profile.role}
        </p>
        <a href="#top" className="transition-colors hover:text-primary">
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}
