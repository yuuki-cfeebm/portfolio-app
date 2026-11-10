export const profile = {
  name: "Kauã",
  age: "20 anos",
  role: "Desenvolvedor FullStack",
  status: "Disponível para Estágio",
  bio: "Desenvolvo aplicações web completas, da interface ao servidor, com foco nos detalhes e na experiência de quem usa, garantindo performance e SEO.",
  hobbies: "No tempo livre gosto de praticar atividades físicas como vôlei e academia, além de jogar uns jogos de FPS.",
  email: "kauayuuki10@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/yuuki-cfeebm" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kau%C3%A3-yanase-45a59a338/" },
  ],
};

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
    items: ["Git", "Insomnia", "Figma", "Monday"],
  },
];

export const stack = skills.flatMap((group) => group.items);

const pathIcons = "/images/tech"

export const techIcons: Record<string, string> = {
  HTML: `${pathIcons}/html.png`,
  CSS: `${pathIcons}/css-3.png`,
  JavaScript: `${pathIcons}/js.png`,
  TypeScript: `${pathIcons}/typescript.png`,
  React: `${pathIcons}/react.png`,
  "Next.js": `${pathIcons}/next.png`,
  "Tailwind CSS": `${pathIcons}/tailwindwebp.png`,
  "Node.js": `${pathIcons}/node.png`,
  Java: `${pathIcons}/java.webp`,
  MongoDB: `${pathIcons}/mongo.png`,
  Git: `${pathIcons}/github.png`,
  Insomnia: `${pathIcons}/insomnia.png`,
  Figma: `${pathIcons}/figma.png`,
  Monday: `${pathIcons}/monday.svg`,
};

// export const services = [
//   {
//     title: "Front-end",
//     description:
//       "Interfaces rápidas, acessíveis e responsivas, com animações que ajudam a contar a história do produto.",
//     tags: ["React", "Next.js", "Tailwind CSS"],
//     icon: "layout",
//   },
//   {
//     title: "Back-end",
//     description:
//       "APIs e regras de negócio bem estruturadas, prontas para crescer junto com o produto.",
//     tags: ["Node.js", "REST", "Autenticação"],
//     icon: "server",
//   },
//   {
//     title: "Banco de dados",
//     description:
//       "Modelagem e consultas pensadas para manter os dados consistentes e a aplicação rápida.",
//     tags: ["MongoDB", "Modelagem", "Migrações"],
//     icon: "database",
//   }
//   {
//     title: "Deploy",
//     description:
//       "Do repositório à produção, com ambientes previsíveis e entregas sem surpresas.",
//     tags: ["Docker", "CI/CD", "Vercel"],
//     icon: "rocket",
//   },
// ] as const;

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  developed: string[];
  images: { src: string; alt: string }[];
  repo?: string | { front?: string; back?: string };
  live?: string;
};

// "developed", "images", "repo" e "live" de cada projeto
const initialPath = "/images/projetos"
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
        src: `${initialPath}/monitoria-academica/home.png`,
        alt: "Página inicial do primeiro projeto"
      },
      {
        src: `${initialPath}/monitoria-academica/supervisorHome.png`,
        alt: "Página do Supervisor (dashboard)"
      },
      {
        src: `${initialPath}/monitoria-academica/aprovarForms.png`,
        alt: "Seção de Aprovar Formulários"
      },
      {
        src: `${initialPath}/monitoria-academica/detalhesForms.png`,
        alt: "Detalhes dos formulários"
      },
      {
        src: `${initialPath}/monitoria-academica/listaMonitores.png`,
        alt: "Seção dos Monitores"
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

export const experience = [
  // {
  //   role: "Em busca de estágio",
  //   company: "Desenvolvimento de software",
  //   period: "Agora",
  //   description:
  //     "Procurando um estágio na área para seguir evoluindo e contribuir com um time. Se a sua empresa tem uma vaga, vamos conversar!",
  // },
  {
    role: "Estágio em Desenvolvimento",
    company: "Serie A",
    period: "2026 — 2026",
    intro: "Minha primeira vivência prática no mercado, atuando diretamente no desenvolvimento e suporte a ecossistemas reais de e-commerce, conectando interfaces dinâmicas aos fluxos de negócios das plataformas.",
    content: [
      {
        title: "Integração Front-End & Ecossistema da Plataforma:",
        description: "Consumo de APIs nativas e manipulação de dados fornecidos pelas plataformas (Wake, Tray e VTEX IO) para exibição dinâmica de catálogo, preços, estoque, carrinho e dados da loja."
      },
      {
        title: "Desenvolvimento e evolução de layouts:",
        description: "Construção de componentes de interface, vitrines, páginas de produtos e ajustes de layout garantindo responsividade e usabilidade."
      },
      {
        title: "Manutenção e resolução de bugs:",
        description: "Diagnóstico de falhas de renderização, divergências de exibição de dados e correção de problemas técnicos em lojas ativas."
      },
      {
        title: "Implementação de novas features:",
        description: "Desenvolvimento de novas funcionalidades e customizações visuais de acordo com as necessidades dos lojistas."
      },
      {
        title: "Versionamento e boas práticas:",
        description: "Organização de código com Git/GitHub/GitLab e atuação alinhada a fluxos de entrega e trabalho em equipe."
      },
    ]
  },
  {
    role: "Desenvolvimento de Software Multiplataforma",
    company: "FATEC — Zona Leste",
    period: "2025 — 2028",
    intro: "Cursando atualmente o 3º semestre. A graduação representa o aprofundamento prático e arquitetural da minha carreira, aplicando conceitos modernos de engenharia de software em soluções completas para web, mobile e desktop.",
    content: [
      {
        title: "Desenvolvimento Aplicado:",
        description: "Construção de aplicações modernas com foco em React, integração de APIs REST, modelagem avançada e manipulação de bancos de dados relacionais e não-relacionais."
      },
      {
        title: "Engenharia e Qualidade:",
        description: "Aplicação de práticas de Engenharia de Software, esteiras de integração e entrega contínua (CI/CD), arquitetura de software e controle de versão profissional com Git."
      },
      {
        title: "Inovação e Tendências:",
        description: "Modelagem conceitual, relacional e manipulação de bases com Estudos direcionados a Cloud Computing, Internet das Coisas (IoT), fundamentos de Inteligência Artificial e Segurança da Informação SQL."
      },
      {
        title: "Projetos Interdisciplinares:",
        description: "Desenvolvimento de soluções em equipe simulando demandas reais de mercado com Metodologias Ágeis (Scrum/Kanban)."
      },
      {
        title: "Base Conceitual Sólida:",
        description: "Fundamentação matemática para computação, estruturas de dados, algoritmos e comunicação técnica."
      },
    ]
  },
  {
    role: "Desenvolvimento de Software",
    company: "ETEC — São Mateus",
    period: "2022 — 2024",
    intro: "O ponto de partida da minha jornada na tecnologia. Foi durante os três anos de formação técnica que consolidei meu interesse pelo desenvolvimento de software e desenvolvi a autonomia de aprendizado autodidata.",
    content: [
      {
        title: "Fundamentos Web:",
        description: "Primeiros contatos e domínio prático da tríade de front-end: HTML5, CSS3 e JavaScript."
      },
      {
        title: "Lógica e Estrutura de Dados:",
        description: "Resolução de problemas algorítmicos, lógica computacional e modularização de código."
      },
      {
        title: "Bancos de Dados:",
        description: "Modelagem conceitual, relacional e manipulação de bases com consultas SQL."
      },
      {
        title: "Qualidade e Testes:",
        description: "Introdução aos princípios de validação de software, estratégias e ferramentas essenciais de testes."
      },
      {
        title: "Perfil Autodidata:",
        description: "Conquista de autonomia técnica, indo além da grade curricular tradicional para pesquisar e implementar tecnologias por conta própria."
      },
    ]
  }
];

export const stats = [
  { value: 9, suffix: "", label: "meses de experiência" },
  { value: projects.length, suffix: "", label: "projetos em destaque" },
  { value: stack.length, suffix: "", label: "tecnologias e ferramentas" },
];
