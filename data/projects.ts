export type Project = {
  slug: string; title: string; year: string | null; categories: string[];
  shortDescription: string; featured: boolean; published: boolean;
  externalUrl: string | null; designUrl?: string; coverImage: string | null;
  gallery: string[]; context: string | null; problem: string | null;
  role: string | null; process: string | null; solution: string | null;
  results: string | null; tools: string[];
};

export const projects: Project[] = [
  {
    slug: "runguru", title: "RunGuru", year: null,
    categories: ["Product Concept", "UX/UI", "Product Design", "Figma Prototype"],
    shortDescription: "Un proyecto integral de producto digital que conecta running y tecnología, desde la conceptualización hasta el prototipo.",
    featured: true, published: true,
    externalUrl: "https://www.figma.com/proto/vmaLUymobWW6tqG1qcux1H/RunGuru—Prototipo?node-id=236-3023",
    designUrl: "https://www.figma.com/design/vmaLUymobWW6tqG1qcux1H/RunGuru—Prototipo?node-id=236-3023",
    coverImage: null, gallery: [], context: null, problem: null,
    role: "Conceptualización · Definición de producto · UX/UI · Diseño de interfaz · Prototipado",
    process: null, solution: null, results: null, tools: ["Figma"],
  },
  {
    slug: "fidesnet", title: "Fidesnet", year: null,
    categories: ["Diseño web", "UX/UI", "Prototipo"],
    shortDescription: "Diseño de una experiencia web interactiva desarrollada en Figma.",
    featured: false, published: true,
    externalUrl: "https://www.figma.com/design/qYyyQy0QW78UBw9kaMDOyo/Interactivo-Fidesnet?node-id=0-1&t=igLxXnhY387NCn4u-1",
    coverImage: null, gallery: [], context: null, problem: null, role: "Diseño web y prototipado",
    process: null, solution: null, results: null, tools: ["Figma"],
  },
  {
    slug: "charlie-andrada", title: "Charlie Andrada", year: null,
    categories: ["Diseño web", "Desarrollo", "Administrador"],
    shortDescription: "Sitio web publicado y herramienta de administración para actualizar sus contenidos.",
    featured: false, published: true, externalUrl: "https://charlieandrada.com/",
    designUrl: "https://charlieandrada.com/test/admin/",
    coverImage: "/images/projects/charlie-andrada.png", gallery: [], context: null, problem: null, role: "Diseño y desarrollo web",
    process: null, solution: null, results: null, tools: [],
  },
  {
    slug: "runclub", title: "RunClub", year: null,
    categories: ["Web", "JavaScript", "Proyecto personal"],
    shortDescription: "Proyecto web de running con una experiencia de tienda online desarrollada como proyecto formativo.",
    featured: false, published: true,
    externalUrl: "https://alvaroguzmandg.github.io/coderhouse-js2/ENTREGA_FINAL/index.html",
    coverImage: "/images/projects/runclub.png", gallery: [], context: null, problem: null, role: null,
    process: null, solution: null, results: null, tools: ["JavaScript"],
  },
  {
    slug: "correr-ayuda", title: "Correr Ayuda", year: null,
    categories: ["Web", "Front-end", "Personal Project"],
    shortDescription: "Una solución web funcional creada para responder a una necesidad concreta.",
    featured: false, published: true, externalUrl: "https://correr-ayuda-pagos.vercel.app/",
    coverImage: "/images/projects/correr-ayuda.png", gallery: [], context: null, problem: null, role: null,
    process: null, solution: null, results: null, tools: [],
  },
  {
    slug: "fabio-villalba", title: "Portfolio de diseñador audiovisual", year: null,
    categories: ["Web Design", "Front-end", "Development"],
    shortDescription: "Diseño y desarrollo de un portfolio profesional publicado.",
    featured: false, published: true, externalUrl: "https://fabiovillalba.vercel.app/",
    coverImage: null, gallery: [], context: null, problem: null, role: null,
    process: null, solution: null, results: null, tools: [],
  },
  {
    slug: "arredo-digital", title: "Digital & E-commerce Work at Arredo", year: null,
    categories: ["Digital Design", "E-commerce", "Creative Operations"],
    shortDescription: "", featured: false, published: false, externalUrl: null,
    coverImage: null, gallery: [], context: null, problem: null, role: null,
    process: null, solution: null, results: null, tools: [],
  },
];

export const publishedProjects = projects.filter((project) => project.published);
export const getProject = (slug: string) => projects.find((project) => project.slug === slug && project.published);
