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
    bg: "bg-blue-600 hover:bg-blue-700",
  },
  {
    label: "GitHub",
    href: "https://github.com/Hack-Gamer001",
    icon: Github,
    bg: "bg-gray-700 hover:bg-gray-600",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/djmixwtffa20cb",
    icon: Globe,
    bg: "bg-indigo-600 hover:bg-indigo-700",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/51977175820",
    icon: null,
    emoji: "WA",
    bg: "bg-green-600 hover:bg-green-700",
  },
  {
    label: "Discord",
    href: "https://discordapp.com/users/745369894492831815",
    icon: null,
    emoji: "#",
    bg: "bg-violet-600 hover:bg-violet-700",
  },
];

const SERVICES = [
  {
    icon: Server,
    color: "text-orange-400",
    bg: "bg-orange-900/20 border-orange-800/40",
    title: "Infraestructura & DevOps",
    desc: "Servidores Linux, virtualización, redes, Docker",
  },
  {
    icon: Brain,
    color: "text-purple-400",
    bg: "bg-purple-900/20 border-purple-800/40",
    title: "IA Aplicada",
    desc: "Visión computacional, clasificación, integración de modelos",
  },
  {
    icon: Monitor,
    color: "text-blue-400",
    bg: "bg-blue-900/20 border-blue-800/40",
    title: "Desarrollo Web Full Stack",
    desc: "React, Next.js, Node.js, Laravel, APIs REST",
  },
  {
    icon: Smartphone,
    color: "text-green-400",
    bg: "bg-green-900/20 border-green-800/40",
    title: "Aplicaciones Móviles",
    desc: "Apps nativas e híbridas Android/iOS",
  },
  {
    icon: Palette,
    color: "text-pink-400",
    bg: "bg-pink-900/20 border-pink-800/40",
    title: "Diseño & Audiovisual",
    desc: "Branding, UI/UX, edición de video, VR/AR",
  },
  {
    icon: Shield,
    color: "text-red-400",
    bg: "bg-red-900/20 border-red-800/40",
    title: "Ciberseguridad",
    desc: "Auditoría, hardening, hacking ético",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-2">
            <span className="w-1 h-7 bg-green-500 rounded-full inline-block" />
            Contacto
          </h1>
          <p className="text-gray-400 text-sm md:text-base ml-3">
            Disponible para proyectos freelance, posiciones full-time y colaboraciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Columna izquierda */}
          <div className="flex flex-col gap-5">

            {/* Info */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-blue-500 rounded-full inline-block" />
                Información
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-blue-900/30 border border-blue-800/40 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-blue-400" />
                  </div>
                  <span>Cusco, Perú</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-green-900/30 border border-green-800/40 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-4 w-4 text-green-400" />
                  </div>
                  <span>Disponible desde julio 2026</span>
                </div>
              </div>
            </div>

            {/* Redes */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-purple-500 rounded-full inline-block" />
                Redes y perfiles
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {SOCIAL.map((s, i) => (
                  
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 ${s.bg} text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors`}
                  >
                    {s.icon ? (
                      <s.icon className="h-4 w-4" />
                    ) : (
                      <span className="font-bold text-xs">{s.emoji}</span>
                    )}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Disponibilidad */}
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-800/40 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Disponible para trabajar</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Abierto a posiciones de Analista de Redes, DevOps, Infraestructura TI
                o roles de desarrollo donde pueda aportar desde el día uno.
              </p>
            </div>

          </div>

          {/* Columna derecha — Servicios */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-white font-semibold mb-5 flex items-center gap-2">
              <span className="w-1 h-4 bg-orange-500 rounded-full inline-block" />
              Servicios disponibles
            </h2>
            <div className="space-y-3">
              {SERVICES.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 p-3 rounded-xl border ${s.bg} transition-colors hover:brightness-110`}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gray-900/50 flex items-center justify-center flex-shrink-0`}>
                    <s.icon className={`h-4 w-4 ${s.color}`} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{s.title}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}