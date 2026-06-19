"use client";

import { MapPin, Server, Brain, Globe, Palette } from "lucide-react";

const TIMELINE = [
  {
    year: "2026",
    icon: "🎓",
    title: "Bachiller en Ingeniería de Sistemas",
    place: "Universidad Andina del Cusco",
    desc: "Egreso con proyectos en IA aplicada, redes y virtualización.",
  },
  {
    year: "2025–2026",
    icon: "💼",
    title: "Practicante TI — DTI UAC",
    place: "Dirección de Tecnologías de la Información",
    desc: "Automatización con n8n, Docker, Nginx, Node.js, MySQL y Google Apps Script.",
  },
  {
    year: "2024–2025",
    icon: "🖥️",
    title: "Infraestructura & Virtualización",
    place: "Proyecto personal",
    desc: "Red enterprise con Proxmox VE: DNS, correo, web con SNI, VPN y LVM.",
  },
  {
    year: "2023–2024",
    icon: "🚀",
    title: "Freelancer — Desarrollo & Diseño",
    place: "Independiente",
    desc: "Proyectos web, móviles, diseño gráfico y audiovisual.",
  },
];

const AREAS = [
  {
    icon: Server,
    gradient: "from-blue-500 to-cyan-500",
    title: "Infraestructura & DevOps",
    desc: "Proxmox VE, TrueNAS/ZFS, Docker, BIND9, Nginx, Tailscale y administración Linux.",
  },
  {
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    title: "IA Aplicada & Visión Computacional",
    desc: "Pipelines YOLO, Qwen2.5-VL, clasificación de imágenes con Flask y Python.",
  },
  {
    icon: Globe,
    gradient: "from-green-500 to-emerald-500",
    title: "Desarrollo Full Stack",
    desc: "Java, Spring Boot, Laravel, React, Next.js, Angular, APIs RESTful, Docker.",
  },
  {
    icon: Palette,
    gradient: "from-orange-500 to-yellow-500",
    title: "Diseño & Audiovisual",
    desc: "Adobe Suite, Figma, Premiere Pro, Blender, Unity, Unreal Engine, VR/AR.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="w-full mx-auto py-16 px-8 sm:px-12 lg:px-20">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-12">
          <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl flex-shrink-0">
            <span className="text-white text-2xl font-bold">WC</span>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Wilbert Junior Cárdenas Alejo</h1>
            <p className="text-blue-400 font-medium mt-1">Systems Engineer · DevOps · Applied AI · Full Stack</p>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
              <MapPin className="h-3.5 w-3.5" />
              <span>Cusco, Perú</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 mb-10">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-500 rounded-full inline-block" />
            Sobre mí
          </h2>
          <div className="space-y-3 text-gray-300 leading-relaxed text-sm md:text-base">
            <p>
              Soy Ingeniero de Sistemas y Diseñador Gráfico con experiencia en desarrollo de software,
              infraestructura de servidores y diseño digital. Me especializo en soluciones full stack,
              inteligencia artificial aplicada y administración de sistemas Linux.
            </p>
            <p>
              En infraestructura, diseño y administro entornos de virtualización con Proxmox VE y
              TrueNAS/ZFS, configuro servicios de red empresariales (DNS, correo, web con SNI) y
              despliego soluciones contenerizadas en producción. Cuento con bases en ciberseguridad
              ofensiva y fundamentos de redes (Cisco).
            </p>
            <p>
              En IA aplicada, desarrollo pipelines de visión computacional con YOLO y Qwen2.5-VL
              para detección de objetos y sistemas de clasificación visual con Python y Flask.
            </p>
            <p>
              Como freelancer, complemento mi perfil técnico con diseño gráfico y audiovisual usando
              Adobe Suite, Figma y Premiere Pro, ofreciendo soluciones digitales completas desde la
              infraestructura hasta la experiencia visual.
            </p>
          </div>
        </div>

        {/* Áreas */}
        <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
          <span className="w-1 h-5 bg-purple-500 rounded-full inline-block" />
          Áreas de expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {AREAS.map((area, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-all hover:-translate-y-0.5">
              <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${area.gradient} mb-3`}>
                <area.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1.5 text-sm">{area.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <span className="w-1 h-5 bg-green-500 rounded-full inline-block" />
          Trayectoria
        </h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-800" />
          <div className="space-y-8 pl-12">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-8 top-0 h-8 w-8 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center text-sm">
                  {item.icon}
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-colors">
                  <span className="text-blue-400 text-xs font-semibold tracking-wide">{item.year}</span>
                  <h3 className="text-white font-semibold mt-1 mb-0.5">{item.title}</h3>
                  <p className="text-gray-500 text-xs mb-2">{item.place}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}