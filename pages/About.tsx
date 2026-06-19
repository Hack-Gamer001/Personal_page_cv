"use client";

import { GraduationCap, Briefcase, Server, Brain, Palette, MapPin } from "lucide-react";

const areas = [
  {
    icon: <Server className="h-6 w-6" />,
    title: "Infraestructura & DevOps",
    description: "Virtualización con Proxmox VE, almacenamiento enterprise con TrueNAS/ZFS, servicios de red (DNS, correo, web), contenedores Docker y VPN con Tailscale.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "IA Aplicada & Visión Computacional",
    description: "Pipelines de detección con YOLO y Qwen2.5-VL, clasificación de imágenes con Flask y Python, integración de modelos de visión sobre almacenamiento SMB.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Desarrollo Full Stack",
    description: "Backend con Java, Spring Boot, Laravel y ASP.NET Core. Frontend con React, Next.js y Angular. APIs RESTful, automatización con n8n y Docker.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Diseño & Audiovisual",
    description: "Diseño gráfico, branding y edición audiovisual con Adobe Suite, Figma y Premiere Pro. Desarrollo VR/AR con Unity y Unreal Engine.",
    color: "from-orange-500 to-yellow-500",
  },
];

const timeline = [
  {
    year: "2026",
    title: "Bachiller en Ingeniería de Sistemas",
    place: "Universidad Andina del Cusco",
    description: "Egreso con proyectos en IA aplicada, redes y virtualización.",
  },
  {
    year: "2025–2026",
    title: "Practicante TI — DTI UAC",
    place: "Dirección de Tecnologías de la Información",
    description: "Automatización con n8n, Docker, Nginx, Node.js, MySQL y Google Apps Script.",
  },
  {
    year: "2024–2025",
    title: "Infraestructura & Virtualización",
    place: "Proyecto personal",
    description: "Diseño de red enterprise con Proxmox VE: DNS/BIND9, MariaDB, Postfix, Apache SNI, Tailscale y LVM.",
  },
  {
    year: "2023–2024",
    title: "Freelancer — Desarrollo & Diseño",
    place: "Independiente",
    description: "Proyectos de desarrollo web, diseño gráfico, audiovisual y aplicaciones móviles.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6 flex items-center justify-center shadow-2xl">
            <span className="text-white text-4xl font-bold">WC</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Wilbert Junior Cárdenas Alejo
          </h1>
          <p className="text-blue-400 text-lg md:text-xl font-semibold mb-3">
            Systems Engineer · DevOps · Applied AI · Full Stack
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <MapPin className="h-4 w-4" />
            <span>Cusco, Perú</span>
          </div>
        </div>

        {/* Sobre mí */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Sobre mí</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Soy Ingeniero de Sistemas y Diseñador Gráfico con experiencia en desarrollo de software,
            infraestructura de servidores y diseño digital. Me especializo en soluciones full stack,
            inteligencia artificial aplicada y administración de sistemas Linux.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            En infraestructura, diseño y administro entornos de virtualización con Proxmox VE y TrueNAS/ZFS,
            configuro servicios de red empresariales y despliego soluciones contenerizadas en producción.
            Cuento con bases en ciberseguridad ofensiva y fundamentos de redes (Cisco).
          </p>
          <p className="text-gray-300 leading-relaxed">
            Como freelancer, complemento mi perfil técnico con diseño gráfico y audiovisual,
            ofreciendo soluciones digitales completas desde la infraestructura hasta la experiencia visual.
          </p>
        </div>

        {/* Áreas */}
        <h2 className="text-2xl font-bold text-white mb-6">Áreas de expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {areas.map((area, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-colors">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${area.color} mb-4`}>
                {area.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{area.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <h2 className="text-2xl font-bold text-white mb-6">Trayectoria</h2>
        <div className="relative border-l border-gray-700 pl-8 space-y-8">
          {timeline.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-10 top-1 h-4 w-4 rounded-full bg-blue-500 border-2 border-gray-950" />
              <span className="text-blue-400 text-sm font-semibold">{item.year}</span>
              <h3 className="text-white font-semibold mt-1">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-1">{item.place}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}