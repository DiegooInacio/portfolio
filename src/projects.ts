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
      "Projeto com backend Spring e frontend Angular para rotinas de integração e administração.",
    role: "Implementação full stack e organização de fluxos internos.",
    stack: ["Angular", "Spring Boot", "Java"],
    image: "/projects/integra-mec.svg",
    accentClass: "accent-cyan",
    category: "Plataforma",
  },
  {
    name: "TEEO SMI",
    subtitle: "Monitoramento inteligente de parques eólicos",
    description:
      "Plataforma para telemetria IoT em tempo real, ingestão via MQTT, APIs e dashboards operacionais.",
    role: "Frontend, backend, ingestão de dados e arquitetura local.",
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
      "Aplicação com módulo frontend Angular e backend Java para fluxos administrativos.",
    role: "Desenvolvimento de funcionalidades e manutenção da stack.",
    stack: ["Angular", "Java", "Maven"],
    image: "/projects/ccli.png",
    accentClass: "accent-purple",
    category: "Plataforma",
  },
  {
    name: "SmartGarden",
    subtitle: "Automação e acompanhamento de cultivo",
    description:
      "Ecossistema com frontend, backend, firmware, documentação e infraestrutura para jardim inteligente.",
    role: "Aplicação web, backend, firmware e integração dos módulos.",
    stack: ["Angular", "Spring Boot", "Firmware", "Infra"],
    image: "/projects/smartgarden_logo-removebg.png",
    accentClass: "accent-lime",
    category: "IoT",
  },
  {
    name: "Pronatec Empreender",
    subtitle: "Portal institucional e educacional",
    description:
      "Interface Angular para comunicação de cursos, trilhas e iniciativas de empreendedorismo.",
    role: "Frontend, componentes de página e organização visual.",
    stack: ["Angular", "TypeScript", "SCSS"],
    image: "/projects/pronatec.svg",
    accentClass: "accent-amber",
    category: "Web",
  },
  {
    name: "App Clicks",
    subtitle: "Landing page para apresentação de curso",
    description:
      "Página focada em apresentar uma iniciativa formativa com assets próprios e comunicação direta.",
    role: "Estrutura da landing page, adaptação visual e publicação estática.",
    stack: ["HTML", "CSS", "Assets"],
    image: "/projects/app-clicks.svg",
    accentClass: "accent-blue",
    category: "Web",
  },
];

export const skills = [
  "TypeScript",
  "React",
  "Angular",
  "Java",
  "Spring Boot",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MQTT",
  "Git",
  "Docker",
];
