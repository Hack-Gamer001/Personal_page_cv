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
    gradient: "from-blue-600 to-blue-400",
    glow: "shadow-blue-500/25",
  },
  {
    label: "GitHub",
    href: "https://github.com/Hack-Gamer001",
    icon: Github,
    gradient: "from-gray-600 to-gray-400",
    glow: "shadow-gray-500/25",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/djmixwtffa20cb",
    icon: Globe,
    gradient: "from-indigo-600 to-indigo-400",
    glow: "shadow-indigo-500/25",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/51977175820",
    icon: null,
    emoji: "WA",
    gradient: "from-green-600 to-green-400",
    glow: "shadow-green-500/25",
  },
  {
    label: "Discord",
    href: "https://discordapp.com/users/745369894492831815",
    icon: null,
    emoji: "#",
    gradient: "from-violet-600 to-violet-400",
    glow: "shadow-violet-500/25",
  },
];

const SERVICES = [
  {
    icon: Server,
    gradient: "from-orange-500 to-amber-400",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/20",
    title: "Infraestructura & DevOps",
    desc: "Servidores Linux, virtualización, redes, Docker",
  },
  {
    icon: Brain,
    gradient: "from-purple-500 to-violet-400",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/20",
    title: "IA Aplicada",
    desc: "Visión computacional, clasificación, integración de modelos",
  },
  {
    icon: Monitor,
    gradient: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/20",
    title: "Desarrollo Web Full Stack",
    desc: "React, Next.js, Node.js, Laravel, APIs REST",
  },
  {
    icon: Smartphone,
    gradient: "from-green-500 to-emerald-400",
    glow: "shadow-green-500/20",
    border: "border-green-500/20",
    title: "Aplicaciones Móviles",
    desc: "Apps nativas e híbridas Android/iOS",
  },
  {
    icon: Palette,
    gradient: "from-pink-500 to-rose-400",
    glow: "shadow-pink-500/20",
    border: "border-pink-500/20",
    title: "Diseño & Audiovisual",
    desc: "Branding, UI/UX, edición de video, VR/AR",
  },
  {
    icon: Shield,
    gradient: "from-red-500 to-orange-400",
    glow: "shadow-red-500/20",
    border: "border-red-500/20",
    title: "Ciberseguridad",
    desc: "Auditoría, hardening, hacking ético",
  },
];

export default function Contact() {
  return (
    <div className="bg-gray-950 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full mx-auto py-12 px-8 sm:px-12 lg:px-20">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Contacto</h1>
          </div>
          <p className="text-gray-400 text-sm ml-4">
            Disponible para proyectos freelance, posiciones full-time y colaboraciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">

          {/* Columna izquierda */}
          <div className="flex flex-col gap-4">

            {/* Info */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5">
                <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
                  Información
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Ubicación</p>
                      <p className="text-white text-sm font-medium">Cusco, Perú</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Disponibilidad</p>
                      <p className="text-white text-sm font-medium">Desde julio 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5">
                <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
                  Redes y perfiles
                </h2>
                <div className="flex flex-wrap gap-2">
                  {SOCIAL.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r ${s.gradient} shadow-lg ${s.glow} hover:scale-105 hover:shadow-xl transition-all duration-200`}
                    >
                      {s.icon ? (
                        <s.icon className="h-3.5 w-3.5" />
                      ) : (
                        <span className="font-bold text-xs w-4 text-center">{s.emoji}</span>
                      )}
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Disponibilidad */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/40 to-emerald-500/40 rounded-2xl blur" />
              <div className="relative bg-gray-900/90 backdrop-blur-sm border border-green-500/20 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-ping opacity-75" />
                  </div>
                  <span className="text-green-400 font-semibold text-sm">Disponible para trabajar</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed ml-5">
                  Abierto a posiciones de Analista de Redes, DevOps, Infraestructura TI
                  o roles de desarrollo donde pueda aportar desde el día uno.
                </p>
              </div>
            </div>

          </div>

          {/* Columna derecha — Servicios */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5">
              <h2 className="text-white font-semibold mb-5 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-orange-400 to-amber-400 rounded-full" />
                Servicios disponibles
              </h2>
              <div className="space-y-2.5">
                {SERVICES.map((s, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border ${s.border} bg-gray-800/40 hover:bg-gray-800/70 transition-all duration-200 hover:shadow-lg ${s.glow}`}
                  >
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center flex-shrink-0 shadow-lg ${s.glow}`}>
                      <s.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{s.title}</p>
                      <p className="text-gray-400 text-xs">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}