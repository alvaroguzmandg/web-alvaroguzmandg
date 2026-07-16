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
    slug: "correr-ayuda", title: "Correr Ayuda", year: null,
    categories: ["Web", "Front-end", "Personal Project"],
    shortDescription: "Una solución web funcional creada para responder a una necesidad concreta.",
    featured: false, published: true, externalUrl: "https://correr-ayuda-pagos.vercel.app/",
    coverImage: null, gallery: [], context: null, problem: null, role: null,
    process: null, solution: null, results: null, tools: [],
  },
  {
    slug: "fabio-villalba", title: "Fabio Villalba Portfolio", year: null,
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
