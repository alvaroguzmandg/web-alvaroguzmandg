import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://alvaroguzman.com"),
  title: { default: "Álvaro Guzmán — Digital Designer", template: "%s — Álvaro Guzmán" },
  description: "Digital Designer · Web & Front-end · Creative Operations. Diseño, tecnología y producción digital.",
  openGraph: {
    title: "Álvaro Guzmán — Digital Designer",
    description: "Diseño, tecnología y producción digital.",
    type: "website",
    locale: "es_AR",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Álvaro Guzmán — Digital Designer" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={manrope.variable}>
      <body id="top">{children}</body>
    </html>
  );
}
