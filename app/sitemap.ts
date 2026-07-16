import type { MetadataRoute } from "next";
import { publishedProjects } from "@/data/projects";

const baseUrl = "https://alvaroguzmandg.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/experience/email-marketing",
    "/experience/eventos-comerciales",
    "/experience/procesos-y-equipos",
    "/experience/produccion-a-gran-escala",
  ];

  return [
    ...staticPages.map((path) => ({ url: `${baseUrl}${path}`, changeFrequency: "monthly" as const })),
    ...publishedProjects.map(({ slug }) => ({
      url: `${baseUrl}/work/${slug}`,
      changeFrequency: "monthly" as const,
    })),
  ];
}
