import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import Link from 'next/link';
import {
  Home,
  Smartphone,
  Monitor,
  Brain,
  Palette,
  Wrench,
  User,
  Mail,
  BookOpen,
  Menu,
  X
} from 'lucide-react';

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

// Definición de elementos del menú lateral
const sidebarItems = [
  {
    href: '/apps',
    label: 'Aplicativos móviles',
    icon: <Smartphone className="h-5 w-5" />,
    description: 'Apps nativas y híbridas'
  },
  {
    href: '/webs',
    label: 'Páginas web',
    icon: <Monitor className="h-5 w-5" />,
    description: 'Sitios web modernos'
  },
  {
    href: '/programs',
    label: 'Programas',
    icon: <Brain className="h-5 w-5" />,
    description: 'Software y herramientas'
  },
  {
    href: '/designs',
    label: 'Diseños',
    icon: <Palette className="h-5 w-5" />,
    description: 'UI/UX y gráficos'
  },
  {
    href: '/creations',
    label: 'Creaciones',
    icon: <Wrench className="h-5 w-5" />,
    description: 'Proyectos únicos'
  },
];

// Elementos del menú superior
const topNavItems = [
  {
    href: '/',
    label: 'Inicio',
    icon: <Home className="h-4 w-4" />
  },
  {
    href: '/about',
    label: 'Acerca de',
    icon: <User className="h-4 w-4" />
  },
  {
    href: '/contact',
    label: 'Contacto',
    icon: <Mail className="h-4 w-4" />
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: <BookOpen className="h-4 w-4" />
  },
];

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans antialiased">
        {/* Menú lateral izquierdo */}
        <aside className="sidebar fixed top-0 left-0 h-full w-64 bg-gray-800/90 backdrop-blur-sm border-r border-gray-700 z-40">
          {/* Header del sidebar */}
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">W</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Portafolio</h2>
                <p className="text-sm text-gray-400">Wilbert Dev</p>
              </div>
            </div>
          </div>

          {/* Navegación del sidebar */}
          <nav className="p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200 ease-in-out"
                  >
                    <span className="flex-shrink-0 text-blue-400 group-hover:text-blue-300">
                      {item.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {item.label}
                      </p>
                      <p className="text-xs text-gray-400 truncate">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer del sidebar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
            <div className="text-center text-xs text-gray-400">
              <p>&copy; 2025 Wilbert</p>
              <p>Todos los derechos reservados</p>
            </div>
          </div>
        </aside>

        {/* Contenido principal */}
        <div className="main-content ml-64 min-h-screen flex flex-col">
          {/* Header superior */}
          <header className="sticky top-0 z-30 bg-gray-950/80 backdrop-blur-md border-b border-gray-700">
            <div className="px-6 py-4">
              <nav className="flex justify-end items-center space-x-1">
                {topNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 ease-in-out"
                  >
                    <span className="text-blue-400">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          {/* Contenido dinámico */}
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>

          {/* Footer opcional */}
          <footer className="border-t border-gray-700 bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                <p className="text-sm text-gray-400">
                  Hecho con ❤️ por Wilbert
                </p>
                <div className="flex space-x-4 text-sm text-gray-400">
                  <span>Cusco, Perú</span>
                  <span>•</span>
                  <span>Desarrollador Full Stack</span>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* Overlay para móviles */}
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 hidden" id="sidebar-overlay"></div>
      </body>
    </html>
  );
}
