// Todo o conteúdo do site fica aqui. Troque os textos marcados com TODO
// pelos seus dados reais antes de publicar.

export const profile = {
  name: "Kauã",
  role: "Desenvolvedor FullStack",
  status: "Disponível para Estágio",
  // TODO: sua apresentação curta
  bio: "Crio produtos web completos, da interface ao servidor, com atenção aos detalhes e à experiência de quem usa.",
  // TODO: seu e-mail real
  email: "kauayuuki10@gmail.com",
  // TODO: seus perfis reais
  socials: [
    { label: "GitHub", href: "https://github.com/yuuki-cfeebm" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kau%C3%A3-yanase-45a59a338/" },
  ],
};

// Aparece agrupado na seção "Sobre". A faixa roxa e o contador usam a lista completa.
export const skills = [
  {
    title: "Front-end",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Back-end",
    items: ["Node.js", "Java", "MongoDB"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "Insomnia", "Figma", "Canva", "Notion", "Monday"],
  },
];

export const stack = skills.flatMap((group) => group.items);

// Ícones da faixa roxa do início. Salve os arquivos em public/images/tech/ e
// preencha o caminho, por exemplo HTML: "/images/tech/html.svg".
// Enquanto estiver vazio, a faixa mostra o nome da tecnologia.
export const techIcons: Record<string, string> = {
  HTML: "",
  CSS: "",
  JavaScript: "",
  TypeScript: "",
  React: "",
  "Next.js": "",
  "Tailwind CSS": "",
  "Node.js": "",
  Java: "",
  MongoDB: "",
  Git: "",
  Insomnia: "",
  Figma: "",
  Canva: "",
  Notion: "",
  Monday: "",
};

export const services = [
  {
    title: "Front-end",
    description:
      "Interfaces rápidas, acessíveis e responsivas, com animações que ajudam a contar a história do produto.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    icon: "layout",
  },
  {
    title: "Back-end",
    description:
      "APIs e regras de negócio bem estruturadas, prontas para crescer junto com o produto.",
    tags: ["Node.js", "REST", "Autenticação"],
    icon: "server",
  },
  {
    title: "Banco de dados",
    description:
      "Modelagem e consultas pensadas para manter os dados consistentes e a aplicação rápida.",
    tags: ["MongoDB", "Modelagem", "Migrações"],
    icon: "database",
  }
  // {
  //   title: "Deploy",
  //   description:
  //     "Do repositório à produção, com ambientes previsíveis e entregas sem surpresas.",
  //   tags: ["Docker", "CI/CD", "Vercel"],
  //   icon: "rocket",
  // },
] as const;

export type Project = {
  // Parte final do endereço da página: /projetos/<slug>
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  // O que você desenvolveu, um item por linha. Vazio, a seção não aparece.
  developed: string[];
  // Salve as imagens em public/images/projetos/<slug>/, por exemplo:
  // { src: "/images/projetos/dog-api/1.png", alt: "Tela inicial da Dog API" }
  // A primeira vira a capa e as outras formam a galeria. Sem imagem, a capa
  // é um fundo roxo com o número do projeto.
  images: { src: string; alt: string }[];
  // Links opcionais, mostrados como botões na página do projeto.
  // Um repositório só: repo: "https://..."
  // Front e back separados: repo: { front: "https://...", back: "https://..." }
  repo?: string | { front?: string; back?: string };
  live?: string;
};

// TODO: complete "developed", "images", "repo" e "live" de cada projeto
export const projects: Project[] = [
  {
    slug: "monitoria-academica",
    title: "Monitoria Acadêmica",
    category: "Web",
    description: "Projeto acadêmico que melhorou o processo de monitoria da Fatec Zona Leste, desde a inscrição, acompanhamento e controle dos monitores até o agendamentos de monitoria entre alunos e monitores. Além de acabar com processos manuais, repetitivos e burocráticos.",
    tags: ["React", "Tailwind CSS", "MongoDB", "Java"],
    repo: "https://github.com/Monitoria-FATEC/monitoria-app-react",
    developed: [
      "Inscrição de monitores",
      "Acompanhamento e controle dos monitores",
      "Agendamento de monitorias entre alunos e monitores",
    ],
    images: [
      {
        src: "",
        alt: ""
      }
    ],
  },
  {
    slug: "finance-tracker",
    title: "Finance Tracker",
    category: "Web",
    description: "Projeto pessoal para organização e controle financeiro.",
    tags: ["Next.js", "Tailwind CSS"],
    repo: "https://github.com/yuuki-cfeebm/FinanceTracker",
    developed: [],
    images: [],
  },
  {
    slug: "gerenciamento-de-clientes",
    title: "Gerenciamento de Clientes",
    category: "API",
    description: "Projeto pessoal que utiliza uma API REST para o CRUD de clientes, com o objetivo de obter um conhecimento mais sólido em API REST.",
    tags: ["React", "CSS", "Java"],
    developed: ["Cadastro, listagem, edição e exclusão de clientes (CRUD)"],
    images: [],
    repo: {
      front: "",
      back: "",
    },
  },
  {
    slug: "dog-api",
    title: "Dog API",
    category: "API",
    description: "Projeto pessoal utilizado para obter um conhecimento mais sólido sobre APIrest.",
    tags: ["Node.js", "React", "TypeScript", "Tailwind CSS"],
    developed: [],
    images: [],
  }
];

// TODO: troque pela sua trajetória real
export const experience = [
  {
    role: "Em busca de estágio",
    company: "Desenvolvimento de software",
    period: "Agora",
    description:
      "Procurando um estágio na área para seguir evoluindo e contribuir com um time. Se a sua empresa tem uma vaga, vamos conversar!",
  },
  {
    role: "Estágio em Desenvolvimento",
    company: "Serie A",
    period: "2026 — 2026",
    description: "Integração Front-End & Ecossistema da Plataforma: Consumo de APIs nativas e manipulação de dados fornecidos pelas plataformas (Wake, Tray e VTEX IO) para exibição dinâmica de catálogo, preços, estoque, carrinho e dados da loja. Desenvolvimento e evolução de layouts: Construção de componentes de interface, vitrines, páginas de produtos e ajustes de layout garantindo responsividade e usabilidade. Manutenção e resolução de bugs: Diagnóstico de falhas de renderização, divergências de exibição de dados e correção de problemas técnicos em lojas ativas. Implementação de novas features: Desenvolvimento de novas funcionalidades e customizações visuais de acordo com as necessidades dos lojistas. Versionamento e boas práticas: Organização de código com Git/GitHub/GitLab e atuação alinhada a fluxos de entrega e trabalho em equipe.",
  },
  {
    role: "Desenvolvimento de Software Multiplataforma",
    company: "FATEC — Zona Leste",
    period: "2025 — 2028",
    description: "Conte o que você estudou e o que levou disso.",
  },
  {
    role: "Desenvolvimento de Software",
    company: "ETEC — São Mateus",
    period: "2022 — 2024",
    description: "",
  }
];

export const stats = [
  { value: 9, suffix: "", label: "meses de experiência" },
  { value: projects.length, suffix: "", label: "projetos em destaque" },
  { value: stack.length, suffix: "", label: "tecnologias e ferramentas" },
];
