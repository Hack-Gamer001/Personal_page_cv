import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// src/app/layout.tsx
// src/app/layout.tsx

import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Mi sitio personal',
  description: 'Portafolio y proyectos de Wilbert',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex h-screen bg-gray-900 text-white">
        {/* Menú lateral izquierdo */}
        <aside className="w-64 bg-gray-800 p-6 space-y-4 fixed h-full top-0 left-0">
          <h2 className="text-2xl font-bold">🎨 Portafolio</h2>
          <nav className="flex flex-col space-y-2">
            <Link href="/apps" className="hover:text-blue-400">📱 Aplicativos móviles</Link>
            <Link href="/webs" className="hover:text-blue-400">💻 Páginas web</Link>
            <Link href="/programs" className="hover:text-blue-400">🧠 Programas</Link>
            <Link href="/designs" className="hover:text-blue-400">🎨 Diseños</Link>
            <Link href="/creations" className="hover:text-blue-400">🛠️ Creaciones</Link>
          </nav>
        </aside>

        {/* Contenido general con navbar superior */}
        <div className="ml-64 flex-1">
          {/* Menú superior */}
          <header className="flex justify-end bg-gray-950 px-6 py-4 shadow-md sticky top-0 z-10">
            <nav className="flex space-x-6">
              <Link href="/" className="hover:text-blue-400">Inicio</Link>
              <Link href="/about" className="hover:text-blue-400">Acerca de</Link>
              <Link href="/contact" className="hover:text-blue-400">Contacto</Link>
              <Link href="/blog" className="hover:text-blue-400">Blog</Link>
            </nav>
          </header>

          {/* Contenido dinámico de cada página */}
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
