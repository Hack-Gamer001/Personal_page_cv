import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';

// Configuración de fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Wilbert - Portafolio Personal',
  description: 'Portafolio profesional con aplicaciones móviles, páginas web, programas y diseños creativos',
  keywords: ['portafolio', 'desarrollador', 'diseñador', 'aplicaciones móviles', 'páginas web'],
  authors: [{ name: 'Wilbert' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans antialiased">
        {/* Contenido principal */}
        <div className="flex flex-col min-h-screen">
          {/* Contenido dinámico */}
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
        <div role="region" aria-label="Notifications" tabIndex={-1}>
          <ol tabIndex={-1} className="fixed right-0 top-0 z-toast flex flex-col gap-4 p-4"></ol>
        </div>
      </body>
    </html>
  );
}
