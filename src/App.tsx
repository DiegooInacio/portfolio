import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Code2,
  FolderKanban,
  GraduationCap,
  Github,
  Home,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
  UserRound,
  Wrench,
} from "lucide-react";
import { FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  SiAngular,
  SiDocker,
  SiFastapi,
  SiGit,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { TbBrain, TbNetwork } from "react-icons/tb";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "./components/ui/card";
import { projects, skills, type Project } from "./projects";

gsap.registerPlugin(ScrollTrigger);

const ownerName = "Diego Inácio";
const ownerNameWords = ownerName.split(" ");
const navItems = [
  { id: "inicio", label: "Início", Icon: Home },
  { id: "sobre", label: "Sobre", Icon: UserRound },
  { id: "tecnologias", label: "Tecnologias", Icon: Wrench },
  { id: "projetos", label: "Projetos", Icon: FolderKanban },
  { id: "experiencia", label: "Experiência", Icon: BriefcaseBusiness },
  { id: "contato", label: "Contato", Icon: Mail },
];

const experienceItems = [
  {
    period: "2023 - 2025",
    place: "NDS - Núcleo de Desenvolvimento de Software",
    description:
      "Participei de projetos como SysChaves e Intranet, atuando principalmente no frontend com Angular e testes unitários com Karma para entregar interfaces consistentes e bem estruturadas.",
  },
  {
    period: "2025 - Atualmente",
    place: "LABVICIA - Laboratório de Visão Computacional e IA",
    description:
      "Participo de projetos como Pronatec Empreender, App Clicks, Integra MEC e CCLi, contribuindo ativamente com Angular e Spring em frentes de backend e frontend.",
  },
  {
    period: "2026 - Atualmente",
    place: "NUVEN - Núcleo de Visão Computacional e Engenharia",
    description:
      "Atuo no projeto TEEO SMI, desenvolvendo backend com FastAPI, frontend com React e integrações IoT para gerenciamento de turbinas.",
  },
];

const skillIcons: Record<string, IconType> = {
  TypeScript: SiTypescript,
  React: SiReact,
  Angular: SiAngular,
  Java: FaJava,
  "Spring Boot": SiSpringboot,
  Python: SiPython,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  MQTT: TbNetwork,
  "Machine Learning": TbBrain,
  Git: SiGit,
  Docker: SiDocker,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const initials = project.name.slice(0, 2).toUpperCase();

  return (
    <Card className="project-card" style={{ animationDelay: `${index * 70}ms` }}>
      <div className={`project-media ${project.accentClass}`}>
        {project.image ? (
          <img src={project.image} alt={`Identidade visual do projeto ${project.name}`} />
        ) : (
          <div className="project-placeholder">{initials}</div>
        )}
      </div>

      <CardContent className="project-body">
        <CardTitle>{project.name}</CardTitle>
        <CardDescription className="subtitle">{project.subtitle}</CardDescription>
        <CardDescription>{project.description}</CardDescription>
        <p className="role">{project.role}</p>

        <div className="stack-list" aria-label={`Tecnologias de ${project.name}`}>
          {project.stack.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="project-carousel">
      <div className="carousel-toolbar" aria-label="Controles do carrossel de projetos">
        <Button
          className="carousel-button"
          size="icon"
          type="button"
          aria-label="Projeto anterior"
          disabled={!canScrollPrev}
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </Button>
        <Button
          className="carousel-button"
          size="icon"
          type="button"
          aria-label="Próximo projeto"
          disabled={!canScrollNext}
          onClick={() => emblaApi?.scrollNext()}
        >
          <ChevronRight size={20} aria-hidden="true" />
        </Button>
      </div>

      <div className="carousel-viewport" ref={emblaRef}>
        <div className="carousel-track">
          {projects.map((project, index) => (
            <div className="carousel-slide" key={project.name}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots" aria-label="Selecionar grupo de projetos">
        {scrollSnaps.map((_, index) => (
          <button
            className={selectedIndex === index ? "active" : undefined}
            type="button"
            aria-label={`Ir para o grupo ${index + 1}`}
            aria-current={selectedIndex === index ? "true" : undefined}
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

export function App() {
  const heroRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    if (window.location.hash) {
      return;
    }

    window.history.scrollRestoration = "manual";

    const resetScroll = () => window.scrollTo(0, 0);
    let secondAnimationFrame = 0;
    const animationFrame = window.requestAnimationFrame(() => {
      secondAnimationFrame = window.requestAnimationFrame(resetScroll);
    });
    const timeouts = [50, 150, 400, 800].map((delay) => window.setTimeout(resetScroll, delay));

    resetScroll();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.cancelAnimationFrame(secondAnimationFrame);
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
    };
  }, []);

  useLayoutEffect(() => {
    if (!window.location.hash) {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }

    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const animatedTargets = [".name-char", ".hero-role", ".hero-greeting", ".hero-description", ".hero-actions"];

      if (reduceMotion) {
        gsap.set(animatedTargets, {
          clearProps: "all",
          y: 0,
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          filter: "blur(0px)",
        });
        return;
      }

      const timeline = gsap
        .timeline({ paused: true })
        .fromTo(
          ".hero-role",
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.52, ease: "power2.out" },
        )
        .fromTo(
          ".hero-greeting",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.52, ease: "power2.out" },
          "-=0.25",
        )
        .fromTo(
          ".name-char",
          {
            yPercent: 115,
            opacity: 0,
            rotateX: -72,
            filter: "blur(8px)",
          },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.82,
            ease: "power3.out",
            stagger: 0.045,
          },
          "-=0.18",
        )
        .fromTo(
          ".hero-description",
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.62, ease: "power2.out" },
          "-=0.38",
        )
        .fromTo(
          ".hero-actions",
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.62, ease: "power2.out" },
          "-=0.44",
        );

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top 72%",
        end: "bottom top",
        onEnter: () => timeline.restart(),
        onEnterBack: () => timeline.restart(),
      });
    }, heroRef);

    return () => context.revert();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.42;
      const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;

      if (pageBottom) {
        setActiveSection("contato");
        return;
      }

      const currentSection = sections.reduce((current, section) => {
        if (section.offsetTop <= scrollPosition) {
          return section.id;
        }

        return current;
      }, "inicio");

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      <header className={`site-header${isMobileMenuOpen ? " menu-open" : ""}`}>
        <Button
          className="menu-toggle"
          size="icon"
          type="button"
          variant="secondary"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-controls="main-navigation"
          aria-expanded={isMobileMenuOpen}
          title={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          {isMobileMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </Button>

        <nav id="main-navigation" aria-label="Navegação principal">
          {navItems.map(({ id, label, Icon }) => (
            <a
              className={activeSection === id ? "active" : undefined}
              href={`#${id}`}
              aria-current={activeSection === id ? "page" : undefined}
              key={id}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Icon size={17} aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>
        <Button
          className="theme-toggle"
          size="icon"
          type="button"
          variant="secondary"
          aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
          title={theme === "dark" ? "Tema claro" : "Tema escuro"}
          onClick={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
        >
          {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </Button>
      </header>

      <main>
        <section id="inicio" className="hero" ref={heroRef}>
          <div className="hero-copy">
            <span className="hero-role">Desenvolvedor de Software</span>
            <p className="hero-greeting">Olá, me chamo</p>
            <h1 className="owner-name" aria-label={ownerName}>
              {ownerNameWords.map((word, wordIndex) => (
                <span className="name-word" aria-hidden="true" key={word}>
                  {Array.from(word).map((character, characterIndex) => (
                    <span className="name-char-wrap" key={`${word}-${character}-${characterIndex}`}>
                      <span className="name-char">{character}</span>
                    </span>
                  ))}
                  {wordIndex < ownerNameWords.length - 1 ? "\u00A0" : null}
                </span>
              ))}
            </h1>
            <p className="hero-description">
              Gosto de transformar ideias em código limpo, bem estruturado e
              elaborado com amor, criando soluções que sejam úteis, cuidadosas e
              fáceis de evoluir.
            </p>
            <div className="hero-actions">
              <Button as="a" href="#sobre">
                Conhecer perfil
                <ArrowUpRight size={18} aria-hidden="true" />
              </Button>
              <Button as="a" href="#contato" variant="secondary">
                Conversar
                <Mail size={18} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>

        <section id="sobre" className="section about-section">
          <div className="section-heading">
            <h2>Sobre mim</h2>
          </div>

          <div className="about-content">
            <Card className="about-text">
              <span>
                <UserRound size={16} aria-hidden="true" />
                Perfil
              </span>
              <p>
                Sou apaixonado por tecnologia e gosto de construir software de forma elaborada,
                estratégica e bem pensada. Procuro transformar problemas em soluções claras,
                úteis e preparadas para evoluir.
              </p>
            </Card>

            <Card className="about-education">
              <GraduationCap size={26} aria-hidden="true" />
              <div>
                <strong>Ciência da Computação</strong>
                <p>IFCE Campus Maracanaú</p>
              </div>
            </Card>
          </div>
        </section>

        <section id="tecnologias" className="section stack-section">
          <div className="section-heading">
            <h2>Tecnologias que utilizo</h2>
          </div>
          <div className="skill-cloud">
            {skills.map((skill) => {
              const Icon = skillIcons[skill] ?? Code2;

              return (
                <Card className="skill-card" key={skill}>
                  <Icon className="skill-icon" aria-hidden="true" />
                  {skill}
                </Card>
              );
            })}
          </div>
        </section>

        <section id="projetos" className="section">
          <div className="section-heading">
            <h2>Projetos que atuei</h2>
          </div>

          <ProjectCarousel />
        </section>

        <section id="experiencia" className="section experience-section">
          <div className="section-heading">
            <h2>Experiência</h2>
          </div>

          <div className="timeline">
            {experienceItems.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.place}`}>
                <div className="timeline-marker" aria-hidden="true" />
                <Card className="timeline-card">
                  <span>{item.period}</span>
                  <CardTitle>{item.place}</CardTitle>
                  <p>{item.description}</p>
                </Card>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="contact">
          <div>
            <span>Contato</span>
            <h2>Disponível para conversar sobre produto, software e tecnologia.</h2>
            <a className="contact-email" href="mailto:diegoinacionogueira@gmail.com">
              diegoinacionogueira@gmail.com
            </a>
          </div>
          <div className="contact-actions">
            <Button as="a" href="mailto:diegoinacionogueira@gmail.com">
              E-mail
              <Mail size={18} aria-hidden="true" />
            </Button>
            <Button
              as="a"
              className="icon-button"
              href="https://github.com/DiegooInacio"
              size="icon"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              variant="secondary"
            >
              <Github size={20} aria-hidden="true" />
            </Button>
            <Button
              as="a"
              className="icon-button"
              href="https://www.linkedin.com/in/diego-inacio-a1094a252"
              size="icon"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              variant="secondary"
            >
              <Linkedin size={20} aria-hidden="true" />
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
