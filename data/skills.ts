export type ExpertiseArea = {
  number: string;
  title: string;
  description: string;
  tools: string[];
};

export const expertise: ExpertiseArea[] = [
  {
    number: "01",
    title: "Diseño digital",
    description: "Diseño interfaces y sistemas visuales que ordenan contenido, jerarquías y recorridos en distintos tamaños de pantalla.",
    tools: ["UX/UI", "Diseño responsive", "Figma", "Illustrator", "Sistemas de diseño"],
  },
  {
    number: "02",
    title: "Web & Front-end",
    description: "Llevo decisiones de diseño a experiencias web funcionales, con criterio visual y conocimiento de implementación.",
    tools: ["HTML", "CSS", "JavaScript", "React", "Landing pages"],
  },
  {
    number: "03",
    title: "E-commerce",
    description: "Trabajo sobre experiencias y contenidos comerciales que deben integrarse con campañas, plataformas y ciclos de venta.",
    tools: ["VTEX", "Contenido web", "Campañas", "Plataformas digitales"],
  },
  {
    number: "04",
    title: "Operaciones creativas",
    description: "Organizo flujos, dependencias y entregables para que el trabajo de equipos diversos llegue a producción de forma consistente.",
    tools: ["Producción digital", "Workflows", "Planner", "Asana", "Coordinación interdisciplinaria"],
  },
];
