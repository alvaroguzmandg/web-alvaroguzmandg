export type ExperienceArea = {
  number: string;
  slug: string;
  title: string;
  description: string;
  introduction: string;
  focus: string[];
  detailTitle: string;
  detail: string;
  externalUrl?: string;
};

export const professionalExperience = {
  tenure: "Más de 10 años",
  role: "Diseñador gráfico",
  scope: "Diseño digital · Web · E-commerce · Operaciones creativas",
  introduction: "Experiencia sostenida en comunicación digital, web y e-commerce, combinando diseño, implementación y coordinación de producción dentro de un entorno comercial de gran escala.",
};

export const experienceAreas: ExperienceArea[] = [
  {
    number: "01",
    slug: "eventos-comerciales",
    title: "Eventos comerciales",
    description: "Sistemas visuales e implementación para Hot Sale, CyberMonday, lanzamientos de colección y períodos de rebajas.",
    introduction: "Construcción e implementación visual de campañas comerciales que concentran múltiples mensajes, formatos, canales y tiempos de entrega.",
    focus: ["Dirección visual", "Adaptación de campañas", "Implementación digital", "Coherencia multicanal"],
    detailTitle: "Una identidad, muchos formatos",
    detail: "El trabajo articula definición estética, adaptación a canales y producción de piezas dentro de una misma campaña, sosteniendo coherencia sin perder variedad.",
  },
  {
    number: "02",
    slug: "produccion-a-gran-escala",
    title: "Producción a gran escala",
    description: "Desarrollo de piezas y formatos diversos dentro de una campaña, con criterios comunes para cada canal.",
    introduction: "Desarrollo de una misma campaña en diferentes piezas, formatos y canales, sosteniendo coherencia visual y capacidad de adaptación.",
    focus: ["Sistemas visuales", "Adaptación de formatos", "Priorización", "Control de consistencia"],
    detailTitle: "Variedad dentro de un sistema",
    detail: "El trabajo requiere anticipar formatos, ordenar prioridades y construir criterios que permitan adaptar una idea a web, e-commerce, pauta y comunicaciones comerciales.",
  },
  {
    number: "03",
    slug: "email-marketing",
    title: "Email marketing",
    description: "Diseño e implementación continua de comunicaciones comerciales, desde el sistema visual hasta el desarrollo web.",
    introduction: "Diseño y desarrollo sostenido de comunicaciones comerciales por email: sistemas visuales, adaptación de campañas e implementación web.",
    focus: ["Sistema visual", "Diseño modular", "Adaptación de campañas", "Implementación web"],
    detailTitle: "Un sistema de trabajo continuo",
    detail: "Cada comunicación combina jerarquía editorial, consistencia de marca, necesidades comerciales y las restricciones propias del medio.",
    externalUrl: "https://www.figma.com/design/e8U4jWr3sV0iayqFSwgRFU/News-Branding---Web?node-id=0-1&t=daWSdu7kL0hVQDkR-1",
  },
  {
    number: "04",
    slug: "procesos-y-equipos",
    title: "Procesos y equipos",
    description: "Organización de workflows entre diseño, fotografía, audiovisual, redacción, marketing, plataformas y proveedores.",
    introduction: "Organización de tareas, entregables y flujos entre perfiles distintos para llevar una campaña desde la planificación hasta su implementación.",
    focus: ["Planificación", "Dependencias", "Coordinación", "Seguimiento de entregables"],
    detailTitle: "Conectar el trabajo",
    detail: "Parte del rol consiste en hacer visibles prioridades, dependencias y entregas para que equipos y proveedores puedan avanzar sobre un objetivo común.",
  },
];

export function getExperienceArea(slug: string) {
  return experienceAreas.find((area) => area.slug === slug);
}
