"use client";

import { Github, ExternalLink, Lock, Server, Brain, Globe, Cpu, Palette, Zap } from "lucide-react";

const PROJECTS = [
  {
    title: "Proxmox Enterprise Lab",
    description: "Infraestructura de 7 VMs en Proxmox VE con DNS/BIND9, MariaDB, Postfix/Dovecot, Apache SNI, VPN con Tailscale y almacenamiento LVM expandido.",
    tech: ["Proxmox VE", "Linux", "BIND9", "Docker", "Tailscale", "MariaDB"],
    type: "Infraestructura",
    status: "Completado",
    icon: Server,
    github: "https://github.com/Hack-Gamer001",
    live: null,
    gradient: "from-orange-500 to-amber-400",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    statusStyle: "bg-green-900/40 text-green-300 border-green-700/50",
    typeStyle: "bg-orange-900/40 text-orange-300 border-orange-700/50",
  },
  {
    title: "Vehicle Detection YOLO",
    description: "Sistema de detección y clasificación vehicular en tiempo real para aforo de tráfico usando arquitecturas YOLO y Qwen2.5-VL. Proyecto de tesis UAC.",
    tech: ["Python", "YOLO", "Qwen2.5-VL", "OpenCV", "Flask"],
    type: "IA Aplicada",
    status: "En desarrollo",
    icon: Brain,
    github: "https://github.com/Hack-Gamer001",
    live: null,
    gradient: "from-purple-500 to-violet-400",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
    statusStyle: "bg-yellow-900/40 text-yellow-300 border-yellow-700/50",
    typeStyle: "bg-purple-900/40 text-purple-300 border-purple-700/50",
  },
  {
    title: "Personal Portfolio CV",
    description: "Portafolio profesional desarrollado con Next.js 14, TypeScript y Tailwind CSS. Desplegado en Vercel con CI/CD automático desde GitHub.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    type: "Web App",
    status: "Activo",
    icon: Globe,
    github: "https://github.com/Hack-Gamer001/Personal_page_cv",
    live: "https://personal-page-cv.vercel.app",
    gradient: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
    statusStyle: "bg-blue-900/40 text-blue-300 border-blue-700/50",
    typeStyle: "bg-blue-900/40 text-blue-300 border-blue-700/50",
  },
  {
    title: "GPU Passthrough libvirt",
    description: "Passthrough dinámico de RTX 5080 a VM Windows 11 via hooks libvirt en EndeavourOS. Guía técnica completa con scripts de automatización.",
    tech: ["Linux", "KVM/QEMU", "libvirt", "Bash", "EndeavourOS"],
    type: "DevOps",
    status: "Documentado",
    icon: Cpu,
    github: "https://github.com/Hack-Gamer001",
    live: null,
    gradient: "from-green-500 to-emerald-400",
    glow: "shadow-green-500/20",
    border: "border-green-500/20",
    bg: "bg-green-500/5",
    statusStyle: "bg-gray-800 text-gray-300 border-gray-700",
    typeStyle: "bg-green-900/40 text-green-300 border-green-700/50",
  },
  {
    title: "Anime Vision Classifier",
    description: "Pipeline de clasificación de imágenes con Flask, pysmb y modelo de visión Qwen2.5-VL-7B sobre almacenamiento SMB en TrueNAS. Prompt engineering por personaje.",
    tech: ["Python", "Flask", "Qwen2.5-VL", "pysmb", "TrueNAS"],
    type: "IA Aplicada",
    status: "Completado",
    icon: Palette,
    github: null,
    live: null,
    gradient: "from-violet-500 to-purple-400",
    glow: "shadow-violet-500/20",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
    statusStyle: "bg-green-900/40 text-green-300 border-green-700/50",
    typeStyle: "bg-violet-900/40 text-violet-300 border-violet-700/50",
  },
  {
    title: "DTI UAC — Automatización",
    description: "Sistema de automatización de procesos institucionales con n8n, Docker, Nginx y Google Apps Script durante prácticas preprofesionales en la UAC.",
    tech: ["n8n", "Docker", "Nginx", "Node.js", "MySQL", "Google Apps Script"],
    type: "Automatización",
    status: "Completado",
    icon: Zap,
    github: null,
    live: null,
    gradient: "from-cyan-500 to-teal-400",
    glow: "shadow-cyan-500/20",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/5",
    statusStyle: "bg-green-900/40 text-green-300 border-green-700/50",
    typeStyle: "bg-cyan-900/40 text-cyan-300 border-cyan-700/50",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full mx-auto py-12 px-8 sm:px-12 lg:px-20">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-violet-600 rounded-full" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Proyectos destacados</h1>
          </div>
          <p className="text-gray-400 text-sm ml-4">
            Infraestructura, IA aplicada, desarrollo web y automatización.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className={`group relative flex flex-col rounded-2xl border ${project.border} ${project.bg} overflow-hidden hover:scale-[1.02] hover:shadow-xl ${project.glow} transition-all duration-300`}
            >
              {/* Gradient top bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 flex flex-col flex-1">

                {/* Icon + badges */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg ${project.glow}`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${project.typeStyle}`}>
                      {project.type}
                    </span>
                    <span className={`text-xs px-2.5 py-1 rounded-lg border ${project.statusStyle}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-800/80 text-gray-300 px-2.5 py-1 rounded-lg border border-gray-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-800/50">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-800/80 text-gray-300 hover:text-white hover:bg-gray-700 text-sm font-medium transition-all"
                    >
                      <Github className="h-4 w-4" />
                      Código
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-800/40 text-gray-600 text-sm cursor-not-allowed">
                      <Lock className="h-4 w-4" />
                      Privado
                    </span>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-sm font-medium hover:opacity-90 transition-all shadow-lg ${project.glow}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Ver live
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}