"use client";

import { MapPin, Server, Brain, Globe, Palette, GraduationCap, Briefcase, Monitor, Rocket } from "lucide-react";

const AREAS = [
  {
    icon: Server,
    gradient: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
    title: "Infraestructura & DevOps",
    desc: "Proxmox VE, TrueNAS/ZFS, Docker, BIND9, Nginx, Tailscale y administración Linux.",
  },
  {
    icon: Brain,
    gradient: "from-purple-500 to-pink-400",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
    title: "IA Aplicada & Visión Computacional",
    desc: "Pipelines YOLO, Qwen2.5-VL, clasificación de imágenes con Flask y Python.",
  },
  {
    icon: Globe,
    gradient: "from-green-500 to-emerald-400",
    glow: "shadow-green-500/20",
    border: "border-green-500/20",
    bg: "bg-green-500/5",
    title: "Desarrollo Full Stack",
    desc: "Java, Spring Boot, Laravel, React, Next.js, Angular, APIs RESTful, Docker.",
  },
  {
    icon: Palette,
    gradient: "from-orange-500 to-amber-400",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    title: "Diseño & Audiovisual",
    desc: "Adobe Suite, Figma, Premiere Pro, Blender, Unity, Unreal Engine, VR/AR.",
  },
];

const TIMELINE = [
  {
    year: "2026",
    icon: GraduationCap,
    gradient: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
    title: "Bachiller en Ingeniería de Sistemas",
    place: "Universidad Andina del Cusco",
    desc: "Egreso con proyectos en IA aplicada, redes y virtualización.",
  },
  {
    year: "2025–2026",
    icon: Briefcase,
    gradient: "from-purple-500 to-violet-400",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
    title: "Practicante TI — DTI UAC",
    place: "Dirección de Tecnologías de la Información",
    desc: "Automatización con n8n, Docker, Nginx, Node.js, MySQL y Google Apps Script.",
  },
  {
    year: "2024–2025",
    icon: Monitor,
    gradient: "from-orange-500 to-amber-400",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    title: "Infraestructura & Virtualización",
    place: "Proyecto personal",
    desc: "Red enterprise con Proxmox VE: DNS, correo, web con SNI, VPN y LVM.",
  },
  {
    year: "2023–2024",
    icon: Rocket,
    gradient: "from-green-500 to-emerald-400",
    glow: "shadow-green-500/20",
    border: "border-green-500/20",
    bg: "bg-green-500/5",
    title: "Freelancer — Desarrollo & Diseño",
    place: "Independiente",
    desc: "Proyectos web, móviles, diseño gráfico y audiovisual.",
  },
];

const STATS = [
  { value: "4+",  label: "Años experiencia",      gradient: "from-blue-500 to-cyan-400"    },
  { value: "20+", label: "Proyectos completados",  gradient: "from-purple-500 to-pink-400"  },
  { value: "40+", label: "Tecnologías dominadas",  gradient: "from-orange-500 to-amber-400" },
  { value: "15",   label: "Servicios desplegadas",        gradient: "from-green-500 to-emerald-400"},
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full mx-auto py-12 px-8 sm:px-12 lg:px-20">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur opacity-60" />
            <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl">
              <span className="text-white text-2xl font-bold">WC</span>
            </div>
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

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {STATS.map((stat, i) => (
            <div key={i} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 text-center">
                <p className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </p>
                <p className="text-gray-400 text-xs">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bio */}
        <div className="relative group mb-8">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-5 bg-gradient-to-b from-blue-400 to-cyan-500 rounded-full" />
              <h2 className="text-white font-semibold">Sobre mí</h2>
            </div>
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
        </div>

        {/* Áreas */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1 h-5 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full" />
            <h2 className="text-white font-semibold">Áreas de expertise</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AREAS.map((area, i) => (
              <div
                key={i}
                className={`group relative flex flex-col rounded-2xl border ${area.border} ${area.bg} overflow-hidden hover:scale-[1.02] hover:shadow-xl ${area.glow} transition-all duration-300`}
              >
                <div className={`h-1 w-full bg-gradient-to-r ${area.gradient}`} />
                <div className="p-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center shadow-lg ${area.glow} mb-3`}>
                    <area.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{area.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1 h-5 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full" />
            <h2 className="text-white font-semibold">Trayectoria</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className={`group relative flex flex-col rounded-2xl border ${item.border} ${item.bg} overflow-hidden hover:scale-[1.02] hover:shadow-xl ${item.glow} transition-all duration-300`}
              >
                <div className={`h-1 w-full bg-gradient-to-r ${item.gradient}`} />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg ${item.glow} flex-shrink-0`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-lg border font-semibold ${item.border} text-gray-300 bg-gray-800/50`}>
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs mb-2">{item.place}</p>
                  <p className="text-gray-400 text-xs leading-relaxed flex-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}