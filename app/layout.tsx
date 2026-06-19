import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wilbert Cárdenas — Portafolio",
  description: "Systems Engineer · DevOps · Applied AI · Full Stack · Cusco, Perú",
  keywords: ["portafolio", "ingeniero sistemas", "devops", "inteligencia artificial", "full stack", "cusco"],
  authors: [{ name: "Wilbert Junior Cárdenas Alejo" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const geistClasses = `${geistSans.variable} ${geistMono.variable}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={geistClasses}>
      <body className="min-h-screen bg-gray-950 text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}