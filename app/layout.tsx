import type { Metadata } from "next";
import type { Viewport } from "next";
import { Archivo_Black, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"] });
const archivoBlack = Archivo_Black({ variable: "--font-display", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://alvaroguzmandg.vercel.app"),
  title: { default: "Álvaro Guzmán — Diseño digital, web y producción", template: "%s — Álvaro Guzmán" },
  description: "Diseñador digital con conocimiento técnico y experiencia en web, e-commerce, producción digital y coordinación de procesos.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Álvaro Guzmán — Diseño digital, web y producción",
    description: "Diseño e implementación de experiencias digitales y los procesos necesarios para llevarlas a producción.",
    url: "/",
    siteName: "Álvaro Guzmán",
    type: "website",
    locale: "es_AR",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "Álvaro Guzmán — Diseño digital" }],
  },
  twitter: { card: "summary_large_image", title: "Álvaro Guzmán — Diseño digital, web y producción", description: "Diseño, implementación y producción digital.", images: ["/og.png"] },
};

export const viewport: Viewport = { themeColor: "#f7f6f2", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${openSans.variable} ${archivoBlack.variable}`}>
      <body id="top">{children}</body>
    </html>
  );
}
