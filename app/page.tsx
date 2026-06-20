"use client";

import { useState } from "react";
import {
  Home, User, Code, Briefcase, Mail, Award,
  Menu, X, Github, Linkedin, ChevronRight,
  Server, Brain, Monitor, Smartphone, Palette, Wrench,
} from "lucide-react";

import HomePage           from "./sections/Home";
import AboutPage          from "./sections/About";
import SkillsPage         from "./sections/Skills";
import ProjectsPage       from "./sections/Projects";
import ContactPage        from "./sections/Contact";
import CertificationsPage from "./sections/Certifications";

const NAV_TABS = [
  { id: "home",     label: "Inicio",          icon: Home      },
  { id: "about",    label: "Acerca de",       icon: User      },
  { id: "skills",   label: "Habilidades",     icon: Code      },
  { id: "projects", label: "Proyectos",       icon: Briefcase },
  { id: "certs",    label: "Certificaciones", icon: Award     },
  { id: "contact",  label: "Contacto",        icon: Mail      },
];

const SIDEBAR_CATEGORIES = [
  { label: "Aplicativos móviles", icon: Smartphone, description: "Apps nativas y híbridas" },
  { label: "Páginas web",         icon: Monitor,    description: "Sitios web modernos"     },
  { label: "Infraestructura",     icon: Server,     description: "Servidores y redes"      },
  { label: "IA & Visión",         icon: Brain,      description: "Modelos y pipelines"     },
  { label: "Diseños",             icon: Palette,    description: "UI/UX y gráficos"        },
  { label: "Creaciones",          icon: Wrench,     description: "Proyectos únicos"        },
];

export default function Page() {
  const [activeTab,   setActiveTab]   = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "home":     return <HomePage />;
      case "about":    return <AboutPage />;
      case "skills":   return <SkillsPage />;
      case "projects": return <ProjectsPage />;
      case "certs":    return <CertificationsPage />;
      case "contact":  return <ContactPage />;
      default:         return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-800/60 transition-colors group"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">WC</span>
            </div>
            <span className="text-white font-semibold hidden sm:block">Wilbert Cárdenas</span>
            <Menu className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
          </button>

          <nav className="hidden md:flex gap-1">
            {NAV_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-blue-900/40 text-blue-300 border border-blue-700/50"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/60"
                }`}
              >
                <tab.icon className="h-3.5 w-3.5" />
                {tab.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/60 transition-colors"
          >
            <Menu className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </header>

      {/* SIDEBAR DRAWER */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setSidebarOpen(false)}
          />

          <aside className="fixed top-0 left-0 h-screen w-72 bg-gray-900 border-r border-gray-800 z-50 flex flex-col overflow-hidden">

            <div className="p-5 border-b border-gray-800 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">WC</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Wilbert Cárdenas</p>
                  <p className="text-gray-400 text-xs">Systems Engineer</p>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-1.5 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">

              <div className="p-4 border-b border-gray-800">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Navegación
                </p>
                <ul className="space-y-1">
                  {NAV_TABS.map((tab) => (
                    <li key={tab.id}>
                      <button
                        onClick={() => { setActiveTab(tab.id); setSidebarOpen(false); }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                          activeTab === tab.id
                            ? "bg-blue-900/40 text-blue-300 border border-blue-700/40"
                            : "text-gray-400 hover:text-white hover:bg-gray-800"
                        }`}
                      >
                        <tab.icon className="h-4 w-4 flex-shrink-0" />
                        {tab.label}
                        {activeTab === tab.id && (
                          <ChevronRight className="h-3 w-3 ml-auto" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Portafolio
                </p>
                <ul className="space-y-1">
                  {SIDEBAR_CATEGORIES.map((item, i) => (
                    <li key={i}>
                      <button
                        onClick={() => setSidebarOpen(false)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition-colors group"
                      >
                        <item.icon className="h-4 w-4 flex-shrink-0 text-blue-400 group-hover:text-blue-300" />
                        <div className="text-left">
                          <p className="text-sm font-medium">{item.label}</p>
                          <p className="text-xs text-gray-500">{item.description}</p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="p-4 border-t border-gray-800 flex gap-3 flex-shrink-0">
              <a
                href="https://github.com/Hack-Gamer001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-gray-300 px-3 py-2 rounded-xl text-xs font-medium hover:bg-gray-700 transition-colors"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/wilbert-j001/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-blue-900/50 text-blue-300 px-3 py-2 rounded-xl text-xs font-medium hover:bg-blue-900 transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
            </div>

          </aside>
        </>
      )}

      {/* CONTENIDO */}
      <main className="flex-grow w-full">
        {renderContent()}
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-950 border-t border-gray-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">WC</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Wilbert Junior Cárdenas Alejo</p>
              <p className="text-xs text-gray-500">Systems Engineer · Cusco, Perú</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Wilbert Cárdenas · Desarrollado con Next.js y Tailwind CSS
          </p>
        </div>
      </footer>

      {/* NAV MOBILE BOTTOM */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-950/95 backdrop-blur-md border-t border-gray-800 z-30">
        <div className="flex justify-around py-2">
          {NAV_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === tab.id ? "text-blue-400" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

    </div>
  );
}