"use client";

import { Github, ExternalLink, Lock } from "lucide-react";

const PROJECTS = [
  {
    title: "Proxmox Enterprise Lab",
    description:
      "Infraestructura de 7 VMs en Proxmox VE con DNS/BIND9, MariaDB, Postfix/Dovecot, Apache SNI, VPN con Tailscale y almacenamiento LVM expandido.",
    tech: ["Proxmox VE", "Linux", "BIND9", "Docker", "Tailscale", "MariaDB"],
    type: "Infraestructura",
    status: "Completado",
    github: "https://github.com/Hack-Gamer001",
    live: null,
    typeBadge: "bg-orange-900/50 text-orange-300 border-orange-700/50",
    border: "hover:border-orange-800/60",
    dot: "bg-orange-500",
  },
  {
    title: "Vehicle Detection YOLO",
    description:
      "Sistema de detección y clasificación vehicular en tiempo real para aforo de tráfico usando arquitecturas YOLO y Qwen2.5-VL. Proyecto de tesis UAC.",
    tech: ["Python", "YOLO", "Qwen2.5-VL", "OpenCV", "Flask"],
    type: "IA Aplicada",
    status: "En desarrollo",
    github: "https://github.com/Hack-Gamer001",
    live: null,
    typeBadge: "bg-purple-900/50 text-purple-300 border-purple-700/50",
    border: "hover:border-purple-800/60",
    dot: "bg-purple-500",
  },
  {
    title: "Personal Portfolio CV",
    description:
      "Portafolio profesional desarrollado con Next.js 14, TypeScript y Tailwind CSS. Desplegado en Vercel con CI/CD automático desde GitHub.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    type: "Web App",
    status: "Activo",
    github: "https://github.com/Hack-Gamer001/Personal_page_cv",
    live: "https://personal-page-cv.vercel.app",
    typeBadge: "bg-blue-900/50 text-blue-300 border-blue-700/50",
    border: "hover:border-blue-800/60",
    dot: "bg-blue-500",
  },
  {
    title: "GPU Passthrough libvirt",
    description:
      "Passthrough dinámico de RTX 5080 a VM Windows 11 via hooks libvirt en EndeavourOS. Guía técnica completa con scripts de automatización.",
    tech: ["Linux", "KVM/QEMU", "libvirt", "Bash", "EndeavourOS"],
    type: "DevOps",
    status: "Documentado",
    github: "https://github.com/Hack-Gamer001",
    live: null,
    typeBadge: "bg-green-900/50 text-green-300 border-green-700/50",
    border: "hover:border-green-800/60",
    dot: "bg-green-500",
  },
  {
    title: "Anime Vision Classifier",
    description:
      "Pipeline de clasificación de imágenes con Flask, pysmb y modelo de visión Qwen2.5-VL-7B sobre almacenamiento SMB en TrueNAS. Prompt engineering por personaje.",
    tech: ["Python", "Flask", "Qwen2.5-VL", "pysmb", "TrueNAS"],
    type: "IA Aplicada",
    status: "Completado",
    github: null,
    live: null,
    typeBadge: "bg-violet-900/50 text-violet-300 border-violet-700/50",
    border: "hover:border-violet-800/60",
    dot: "bg-violet-500",
  },
  {
    title: "DTI UAC — Automatización",
    description:
      "Sistema de automatización de procesos institucionales con n8n, Docker, Nginx y Google Apps Script durante prácticas preprofesionales en la UAC.",
    tech: ["n8n", "Docker", "Nginx", "Node.js", "MySQL", "Google Apps Script"],
    type: "Automatización",
    status: "Completado",
    github: null,
    live: null,
    typeBadge: "bg-cyan-900/50 text-cyan-300 border-cyan-700/50",
    border: "hover:border-cyan-800/60",
    dot: "bg-cyan-500",
  },
];

const STATUS_STYLES: Record<string, string> = {
  "Completado":    "bg-green-900/40 text-green-300 border-green-700/50",
  "En desarrollo": "bg-yellow-900/40 text-yellow-300 border-yellow-700/50",
  "Activo":        "bg-blue-900/40 text-blue-300 border-blue-700/50",
  "Documentado":   "bg-gray-800 text-gray-300 border-gray-700",
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-2">
            <span className="w-1 h-7 bg-purple-500 rounded-full inline-block" />
            Proyectos destacados
          </h1>
          <p className="text-gray-400 text-sm md:text-base ml-3">
            Infraestructura, IA aplicada, desarrollo web y automatización.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className={`bg-gray-900 border border-gray-800 rounded-2xl p-6 transition-all ${project.border} hover:-translate-y-0.5 flex flex-col`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${project.dot} flex-shrink-0 mt-0.5`} />
                  <span className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${project.typeBadge}`}>
                    {project.type}
                  </span>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-lg border flex-shrink-0 ${STATUS_STYLES[project.status]}`}>
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-md border border-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-gray-800">
                {project.github ? (
                  
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Código
                  </a>
                ) : (
                  <span className="flex items-center gap-1.5 text-gray-600 text-sm cursor-not-allowed select-none">
                    <Lock className="h-4 w-4" />
                    Privado
                  </span>
                )}
                {project.live && (
                  
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Ver live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}