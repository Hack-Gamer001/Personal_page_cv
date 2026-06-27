"use client";

import {
  MapPin, Calendar, Github, Linkedin, Globe,
  Server, Brain, Monitor, Smartphone, Palette, Shield,
} from "lucide-react";

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wilbert-j001/",
    icon: Linkedin,
    gradient: "from-blue-600 to-blue-500",
    glow: "shadow-blue-500/30",
    desc: "Perfil profesional",
  },
  {
    label: "GitHub",
    href: "https://github.com/Hack-Gamer001",
    icon: Github,
    gradient: "from-gray-700 to-gray-600",
    glow: "shadow-gray-500/30",
    desc: "Repositorios",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/djmixwtffa20cb",
    icon: Globe,
    gradient: "from-indigo-600 to-indigo-500",
    glow: "shadow-indigo-500/30",
    desc: "Portafolio diseño",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/51975604394",
    icon: null,
    emoji: "WA",
    gradient: "from-green-600 to-green-500",
    glow: "shadow-green-500/30",
    desc: "+51 975 604 394",
  },
  {
    label: "Discord",
    href: "https://discordapp.com/users/745369894492831815",
    icon: null,
    emoji: "#",
    gradient: "from-violet-600 to-violet-500",
    glow: "shadow-violet-500/30",
    desc: "Chat directo",
  },
];

const SERVICES = [
  {
    icon: Server,
    gradient: "from-orange-500 to-amber-400",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/20",
    bg: "bg-orange-500/10",
    title: "Infraestructura & DevOps",
    desc: "Servidores Linux, virtualización con Proxmox, redes empresariales y Docker en producción.",
  },
  {
    icon: Brain,
    gradient: "from-purple-500 to-violet-400",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/20",
    bg: "bg-purple-500/10",
    title: "IA Aplicada",
    desc: "Visión computacional con YOLO y Qwen2.5-VL, clasificación de imágenes y pipelines Python.",
  },
  {
    icon: Monitor,
    gradient: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/20",
    bg: "bg-blue-500/10",
    title: "Desarrollo Web Full Stack",
    desc: "React, Next.js, Node.js, Laravel y APIs REST. Desde el diseño hasta el deploy.",
  },
  {
    icon: Smartphone,
    gradient: "from-green-500 to-emerald-400",
    glow: "shadow-green-500/20",
    border: "border-green-500/20",
    bg: "bg-green-500/10",
    title: "Aplicaciones Móviles",
    desc: "Apps nativas e híbridas para Android e iOS con React Native y Flutter.",
  },
  {
    icon: Palette,
    gradient: "from-pink-500 to-rose-400",
    glow: "shadow-pink-500/20",
    border: "border-pink-500/20",
    bg: "bg-pink-500/10",
    title: "Diseño & Audiovisual",
    desc: "Branding, UI/UX con Figma, edición de video con Adobe Suite y animaciones VR/AR.",
  },
  {
    icon: Shield,
    gradient: "from-red-500 to-orange-400",
    glow: "shadow-red-500/20",
    border: "border-red-500/20",
    bg: "bg-red-500/10",
    title: "Ciberseguridad",
    desc: "Auditoría de seguridad, hardening de sistemas, hacking ético y análisis de vulnerabilidades.",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full mx-auto py-12 px-8 sm:px-12 lg:px-20">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Contacto</h1>
          </div>
          <p className="text-gray-400 text-sm ml-4">
            Disponible para proyectos freelance, posiciones full-time y colaboraciones.
          </p>
        </div>

        {/* Info + disponibilidad */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

          {/* Ubicación */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Ubicación</p>
                <p className="text-white font-semibold">Cusco, Perú</p>
              </div>
            </div>
          </div>

          {/* Disponibilidad */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                <Calendar className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Disponible desde</p>
                <p className="text-white font-semibold">Diciembre 2025</p>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/40 to-emerald-500/40 rounded-2xl blur" />
            <div className="relative bg-gray-900/90 border border-green-500/20 rounded-2xl p-5 flex items-center gap-4">
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-green-400" />
                </div>
                <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-green-400 animate-ping opacity-75" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Estado</p>
                <p className="text-green-400 font-semibold">Open to work</p>
              </div>
            </div>
          </div>

        </div>

        {/* Redes */}
        <div className="mb-8">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
            Redes y perfiles
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {SOCIAL.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-3 p-4 rounded-2xl bg-gradient-to-br ${s.gradient} shadow-lg ${s.glow} hover:scale-105 hover:shadow-xl transition-all duration-200`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  {s.icon ? (
                    <s.icon className="h-5 w-5 text-white" />
                  ) : (
                    <span className="font-bold text-white text-sm">{s.emoji}</span>
                  )}
                </div>
                <div className="text-center">
                  <p className="text-white text-sm font-semibold">{s.label}</p>
                  <p className="text-white/70 text-xs mt-0.5">{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Servicios */}
        <div>
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-gradient-to-b from-orange-400 to-amber-400 rounded-full" />
            Servicios disponibles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className={`group relative flex flex-col gap-3 p-5 rounded-2xl border ${s.border} ${s.bg} hover:scale-[1.02] transition-all duration-200 hover:shadow-xl ${s.glow}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg ${s.glow}`}>
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">{s.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}