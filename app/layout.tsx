// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wilbert - Portafolio Personal",
  description:
    "Portafolio profesional con aplicaciones móviles, páginas web, programas y diseños creativos",
  keywords: [
    "portafolio",
    "desarrollador",
    "diseñador",
    "aplicaciones móviles",
    "páginas web",
  ],
  authors: [{ name: "Wilbert" }],
  // viewport **ya no aquí** ➜ se maneja abajo
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
