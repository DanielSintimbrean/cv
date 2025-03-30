import {
  ClevertechLogo,
  ConsultlyLogo,
  MonitoLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Daniel Sintimbrean",
  initials: "DS",
  location: "Oliva, Valencia, España",
  locationLink: "https://www.google.com/maps/place/Oliva",
  about:
    "Ingeniero Full Stack orientado a los detalles, dedicado a construir productos de alta calidad.",
  summary: (
    <>
      Ingeniero Full Stack enfocado en Frontend especializado en aplicaciones
      React de alto rendimiento. Experiencia en diseño de arquitectura técnica y
      liderazgo de equipos remotos.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/102896754?v=4",
  personalWebsiteUrl: "https://danields.dev",
  contact: {
    email: "contacto@danields.dev",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/DanielSintimbrean",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/danie/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Universitat Politècnica de València",
      degree: "Grado en Ingeniería Informática",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "RacksLabs",
      link: "https://rackslabs.com",
      badges: ["Remoto", "React", "Next.js", "TypeScript", "Node.js"],
      title: "Becario Programador Frontend",
      logo: ConsultlyLogo,
      start: "2025",
      end: null,
      description: (
        <>
          Desarrollo de soluciones web para eventos económicos de alto perfil.
          <ul className="list-inside list-disc">
            <li>
              Creación de landing pages para Andorra Economic Forum y Madrid
              Economic Forum
            </li>
            <li>Implementación de pasarela de pagos y generación de PDFs</li>
            <li>
              Desarrollo de sistema de verificación de entradas mediante QR
            </li>
            <li>Integración de sistemas de envío de emails</li>
          </ul>
        </>
      ),
    },
    {
      company: "La Pizzara del DT",
      link: "https://www.lapizarradeldt.com",
      badges: ["Remoto", "React", "TypeScript", "CSS"],
      title: "Desarrollador Frontend",
      logo: ParabolLogo,
      start: "2024",
      end: "2025",
      description: (
        <>
          Desarrollo y mejora de la plataforma de cursos online.
          <ul className="list-inside list-disc">
            <li>Optimización de rendimiento y corrección de bugs</li>
            <li>Implementación de nuevas funcionalidades</li>
            <li>Mejora de la experiencia de usuario</li>
          </ul>
        </>
      ),
    },
    {
      company: "ADD Informática",
      link: "https://addinformatica.com",
      badges: ["Remoto", "C#", ".NET Core", ".NET Framework", "Bases de Datos"],
      title: "Becario Programador → Ing. Software",
      logo: ClevertechLogo,
      start: "2022",
      end: "2024",
      description: (
        <>
          Desarrollo de soluciones empresariales para Centro de Mayores y
          migración de arquitectura.
          <ul className="list-inside list-disc">
            <li>
              Desarrollo de herramientas de migración para cambio de
              arquitectura
            </li>
            <li>Integración de datos con sistemas de terceros</li>
            <li>Desarrollo de aplicaciones empresariales en C# con .NET</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React/Next.js/Remix",
    "TypeScript",
    "Tailwind CSS",
    "Sistemas de Diseño",
    "Node.js",
    "Liderazgo de Equipos Remotos",
    "C#/.NET",
    "Integración de APIs",
  ],
  projects: [],
} as const;
