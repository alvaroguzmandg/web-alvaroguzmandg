export const practiceAreas = [
  {
    number: "01",
    title: "Traduzco necesidades comerciales en experiencias digitales.",
    description:
      "Trabajo sobre homes, landings, categorías, campañas, emails y contenidos que tienen que comunicar con claridad, adaptarse a distintos dispositivos y convivir dentro de un ecommerce real.",
    tags: ["Ecommerce", "UX/UI", "Diseño responsive", "Campañas"],
  },
  {
    number: "02",
    title: "Diseño sabiendo que después hay que implementarlo.",
    description:
      "El conocimiento de HTML, CSS, JavaScript y plataformas ecommerce me permite tomar decisiones visuales posibles, conversar con desarrollo y llevar muchas de esas decisiones directamente a producción.",
    tags: ["Front-end", "VTEX", "Magento", "React"],
  },
  {
    number: "03",
    title: "Pienso cómo producir mejor, no solamente qué producir.",
    description:
      "Cuando una campaña se multiplica en formatos, canales y variantes, construyo criterios, componentes y flujos que permiten sostener calidad sin resolver cada pieza desde cero.",
    tags: ["Sistemas", "Producción", "Componentes", "Operaciones"],
  },
  {
    number: "04",
    title: "Pruebo tecnología cuando resuelve un problema concreto.",
    description:
      "Uso scripts, automatizaciones, Figma Buzz y asistentes de código para reducir tareas repetitivas, ordenar información y ampliar la capacidad de producción. La herramienta viene después del problema.",
    tags: ["Automatización", "Excel", "Figma Buzz", "IA aplicada"],
  },
] as const;

export const careerTimeline = [
  { period: "2014", label: "Diseño y comunicación", detail: "Piezas gráficas, campañas y construcción de marca." },
  { period: "", label: "Ecommerce", detail: "Contenido comercial, landings, email marketing y operación digital." },
  { period: "", label: "Front-end", detail: "Diseño responsive, implementación y trabajo directo sobre plataformas." },
  { period: "", label: "Sistemas y coordinación", detail: "Procesos, componentes, prioridades y articulación entre equipos." },
  { period: "Actualidad", label: "Automatización y producto", detail: "Herramientas propias, nuevos workflows y tecnología aplicada." },
] as const;

export const toolkit = [
  {
    title: "Trabajo diariamente con",
    items: ["Figma", "Photoshop", "Illustrator", "VTEX", "Excel", "Asana"],
  },
  {
    title: "Construyo con",
    items: ["HTML", "CSS", "JavaScript", "React", "Vercel"],
  },
  {
    title: "Automatizo y acelero con",
    items: ["Figma Buzz", "Scripts", "Codex", "IA generativa"],
  },
] as const;

export const workEvidence = [
  {
    number: "01",
    kicker: "Ecommerce en producción",
    title: "Una campaña no es una pieza.",
    description:
      "Es una idea que tiene que sobrevivir a una home, distintas categorías, emails, pauta, versiones mobile y cambios comerciales de último momento. Mi trabajo está en construir el sistema y acompañarlo hasta que todo está publicado.",
    note: "Campañas · Hot Sale · CyberMonday · Lanzamientos · Rebajas",
  },
  {
    number: "02",
    kicker: "Producto digital",
    title: "También construyo para entender.",
    description:
      "En proyectos propios investigo, diseño flujos, prototipo y desarrollo herramientas. Ese recorrido me obliga a tomar decisiones de producto y me permite entender mejor a quienes implementan lo que diseño.",
    note: "Investigación · UX/UI · Prototipos · Desarrollo · Iteración",
  },
  {
    number: "03",
    kicker: "Diseño a implementación",
    title: "Puedo llevar una interfaz hasta el navegador.",
    description:
      "No busco competir como desarrollador senior. El front-end forma parte de mi manera de diseñar: me permite probar, resolver detalles, construir sitios y cerrar la distancia entre una intención visual y su funcionamiento real.",
    note: "Diseño web · Responsive · Front-end · Deploy",
  },
] as const;
