import type { Metadata } from "next";
import { Archivo_Black, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"] });
const archivoBlack = Archivo_Black({ variable: "--font-display", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://alvaroguzmandg.vercel.app"),
  title: { default: "Álvaro Guzmán — Digital Designer", template: "%s — Álvaro Guzmán" },
  description: "Digital Designer · Web & Front-end · Creative Operations. Diseño, tecnología y producción digital.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Álvaro Guzmán — Digital Designer",
    description: "Diseño, tecnología y producción digital.",
    type: "website",
    locale: "es_AR",
    images: [{ url: "/og-v6.png", width: 1536, height: 1024, alt: "Álvaro Guzmán — Diseño digital" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-v6.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${openSans.variable} ${archivoBlack.variable}`}>
      <body id="top">{children}</body>
    </html>
  );
}
