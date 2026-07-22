export type Project = {
  name: string;
  subtitle: string;
  description: string;
  role: string;
  stack: string[];
  image?: string;
  accentClass: string;
  category: "Web" | "IoT" | "Dados" | "Plataforma";
};

export const projects: Project[] = [
  {
    name: "Integra MEC",
    subtitle: "Integração e gestão de dados educacionais",
    description:
      "Sistema para centralizar rotinas educacionais, apoiar integrações institucionais e facilitar a administração de dados.",
    role: "Implementação full stack com Angular e Spring Boot, estruturando fluxos internos e telas administrativas.",
    stack: ["Angular", "Spring Boot", "Java"],
    image: "/projects/integra-mec.svg",
    accentClass: "accent-cyan",
    category: "Plataforma",
  },
  {
    name: "TEEO SMI",
    subtitle: "Monitoramento inteligente de parques eólicos",
    description:
      "Plataforma para acompanhar telemetria IoT em tempo real, processar dados via MQTT e apoiar decisões operacionais.",
    role: "Construção de dashboard, APIs, ingestão de dados e arquitetura local com React, FastAPI e PostgreSQL.",
    stack: ["React", "Vite", "FastAPI", "MQTT", "PostgreSQL"],
    image: "/projects/teeo.png",
    accentClass: "accent-teal",
    category: "IoT",
  },
  // {
  //   name: "EcoWinds",
  //   subtitle: "Gestão de ar-condicionado em salas de aula",
  //   description:
  //     "Sistema para importar horários acadêmicos, organizar salas e apoiar automação de climatização.",
  //   role: "Backend Java, frontend Angular e fluxo de importação SIGEHO.",
  //   stack: ["Angular", "Spring Boot", "PostgreSQL", "JWT"],
  //   image: "/projects/ecowinds.png",
  //   accentClass: "accent-green",
  //   category: "Plataforma",
  // },
  {
    name: "CCLI",
    subtitle: "Sistema web com backend e frontend separados",
    description:
      "Aplicação web para organizar fluxos administrativos com separação clara entre interface, regras de negócio e backend.",
    role: "Desenvolvimento de funcionalidades, manutenção da stack Java/Angular e evolução de telas do sistema.",
    stack: ["Angular", "Java", "Maven"],
    image: "/projects/ccli.png",
    accentClass: "accent-purple",
    category: "Plataforma",
  },
  {
    name: "SmartGarden",
    subtitle: "Automação e acompanhamento de cultivo",
    description:
      "Ecossistema para monitorar cultivo, integrar sensores e apoiar automações em um jardim inteligente.",
    role: "Desenvolvimento da aplicação web, backend, firmware, documentação e integração entre módulos.",
    stack: ["Angular", "Spring Boot", "Firmware", "Infra"],
    image: "/projects/smartgarden_logo-removebg.png",
    accentClass: "accent-lime",
    category: "IoT",
  },
  {
    name: "Pronatec Empreender",
    subtitle: "Portal institucional e educacional",
    description:
      "Portal para apresentar cursos, trilhas e iniciativas de empreendedorismo com navegação clara e conteúdo institucional.",
    role: "Criação de componentes Angular, organização visual das páginas e adaptação de interfaces responsivas.",
    stack: ["Angular", "TypeScript", "SCSS"],
    image: "/projects/pronatec.svg",
    accentClass: "accent-amber",
    category: "Web",
  },
  {
    name: "App Clicks",
    subtitle: "Landing page para apresentação de curso",
    description:
      "Página estática para divulgar uma iniciativa formativa com comunicação direta, assets próprios e foco em conversão.",
    role: "Estruturação da landing page, adaptação visual dos conteúdos e preparação para publicação.",
    stack: ["HTML", "CSS", "Assets"],
    image: "/projects/app-clicks.svg",
    accentClass: "accent-blue",
    category: "Web",
  },
];

export const skillCategories = [
  {
    name: "Frontend",
    skills: ["TypeScript", "React", "Angular"],
  },
  {
    name: "Backend",
    skills: ["Java", "Spring Boot", "Python", "FastAPI"],
  },
  {
    name: "Dados e IoT",
    skills: ["PostgreSQL", "MQTT"],
  },
  {
    name: "Ferramentas",
    skills: ["Git", "Docker"],
  },
];
