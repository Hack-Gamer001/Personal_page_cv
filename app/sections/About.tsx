"use client";

import { useState } from "react";
import { MapPin, Server, Brain, Globe, Palette, GraduationCap, Briefcase, Monitor, Rocket, ChevronDown, ChevronUp } from "lucide-react";

const STATS = [
  { value: "4+",  label: "Años experiencia",       gradient: "from-blue-500 to-cyan-400"     },
  { value: "30+", label: "Proyectos completados",   gradient: "from-purple-500 to-pink-400"   },
  { value: "50+", label: "Tecnologías dominadas",   gradient: "from-orange-500 to-amber-400"  },
  { value: "15+", label: "Servicios desplegados",   gradient: "from-green-500 to-emerald-400" },
];

const AREAS = [
  {
    icon: Server,
    gradient: "from-orange-500 to-amber-400",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    title: "Infraestructura & DevOps",
    summary: "Virtualización enterprise, redes, almacenamiento y servicios contenerizados en producción.",
    tools: ["Proxmox VE", "TrueNAS / ZFS", "Docker", "Nginx", "BIND9", "Tailscale", "Kubernetes", "n8n", "Cloudflare", "Postfix/Dovecot", "Apache SNI", "MariaDB", "Zabbix", "FreePBX", "LVM"],
    highlights: [
      "Diseño e implementación de infraestructura multi-VM en Proxmox VE (DNS, correo, web, VoIP, monitoreo)",
      "Administración de storage enterprise con TrueNAS Scale y ZFS RAIDZ1",
      "Configuración de VPN con Tailscale como subnet router persistente",
      "Despliegue de servicios contenerizados con Docker en producción",
      "Automatización institucional con n8n, Google Apps Script y Node.js",
    ],
  },
  {
    icon: Brain,
    gradient: "from-purple-500 to-violet-400",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
    title: "IA Aplicada & Visión Computacional",
    summary: "Modelos locales, agentes, chatbots, visión computacional y generación de contenido con IA.",
    tools: ["YOLO", "Qwen2.5-VL", "LM Studio", "Ollama", "Pinokio", "Stable Diffusion", "ComfyUI", "PaddleOCR", "Python", "Flask", "OpenCV", "CLIP", "PyTorch", "LangChain"],
    highlights: [
      "Pipelines de detección vehicular con YOLO para aforo de tráfico (tesis UAC)",
      "Clasificador visual de imágenes con Qwen2.5-VL-7B sobre SMB/TrueNAS",
      "Identificador de frutas con YOLO entrenado con dataset personalizado",
      "Agentes y chatbots con modelos LLM locales via LM Studio y Ollama",
      "Generación de imágenes y video con Stable Diffusion, ComfyUI y Pinokio",
      "Validación de documentos académicos con PaddleOCR (tesis UAC DTI)",
    ],
  },
  {
    icon: Globe,
    gradient: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
    title: "Desarrollo Full Stack",
    summary: "Aplicaciones web, móviles, APIs y sistemas completos en múltiples lenguajes y frameworks.",
    tools: ["React", "Next.js", "Angular", "TypeScript", "Java", "Spring Boot", "Laravel", "PHP", "Python", "Flask", "Node.js", "Kotlin", "C#", "ASP.NET Core", "MySQL", "PostgreSQL", "MongoDB", "Docker", "Git"],
    highlights: [
      "Sistema de inventario y gestión empresarial (Java + Spring Boot + React)",
      "Página de ventas con carrito de compras (Laravel + MySQL + HTML/CSS/JS)",
      "Aplicaciones móviles Android con Kotlin y Android Studio",
      "APIs RESTful con Python/Flask, Node.js/Express y Spring Boot",
      "Proyectos MVC en múltiples lenguajes a lo largo de la carrera",
      "Portfolio personal con Next.js 14 + TypeScript + Tailwind, deployado en Vercel",
    ],
  },
  {
    icon: Palette,
    gradient: "from-pink-500 to-rose-400",
    glow: "shadow-pink-500/20",
    border: "border-pink-500/20",
    bg: "bg-pink-500/5",
    title: "Diseño, 3D & Audiovisual",
    summary: "Diseño gráfico, motion graphics, modelado 3D, VR/AR y producción audiovisual completa.",
    tools: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Lightroom", "InDesign", "Figma", "Blender", "Unity", "Unreal Engine", "Meta Quest 3", "Adobe XD"],
    highlights: [
      "Escenarios 3D en Blender para entornos de VR/AR con Meta Quest 3",
      "Motion graphics e intros estilo 3D con After Effects",
      "Edición audiovisual, corrección de color y compositing",
      "Diseño gráfico, branding e identidad visual para proyectos freelance",
      "Proyectos UI/UX con Figma y prototipado interactivo",
      "Portafolio creativo en Behance con trabajos de edición fotográfica y diseño",
    ],
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
    place: "Universidad Andina del Cusco — Cusco, Perú",
    desc: "Egreso con proyectos en IA aplicada, redes y virtualización. Tesis sobre detección vehicular con YOLO y validación de documentos con PaddleOCR.",
    tools: ["Proxmox VE", "YOLO", "PaddleOCR", "Docker", "Python"],
  },
  {
    year: "2025–2026",
    icon: Briefcase,
    gradient: "from-purple-500 to-violet-400",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
    title: "Practicante TI — DTI UAC",
    place: "Dirección de Tecnologías de la Información, UAC",
    desc: "Automatización de procesos institucionales, administración de servicios web y bases de datos, desarrollo de integraciones y documentación técnica.",
    tools: ["n8n", "Docker", "Nginx", "Node.js", "MySQL", "Google Apps Script"],
  },
  {
    year: "2024–2025",
    icon: Monitor,
    gradient: "from-orange-500 to-amber-400",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    title: "Infraestructura & Virtualización",
    place: "Proyecto universitario & personal",
    desc: "Diseño e implementación de red enterprise completa en Proxmox VE con 7 VMs: DNS/BIND9, MariaDB, Apache SNI, Postfix/Dovecot, FreePBX VoIP, Zabbix y VPN con Tailscale.",
    tools: ["Proxmox VE", "BIND9", "MariaDB", "Tailscale", "Zabbix", "FreePBX", "LVM"],
  },
  {
    year: "2023–2024",
    icon: Brain,
    gradient: "from-violet-500 to-purple-400",
    glow: "shadow-violet-500/20",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
    title: "IA Aplicada & Modelos Locales",
    place: "Proyectos personales & académicos",
    desc: "Desarrollo de pipelines de visión computacional, entrenamiento de modelos YOLO, sistemas de clasificación visual, agentes con LLMs locales y generación de contenido con IA.",
    tools: ["YOLO", "Qwen2.5-VL", "LM Studio", "Stable Diffusion", "Pinokio", "Python"],
  },
  {
    year: "2022–2023",
    icon: Globe,
    gradient: "from-green-500 to-emerald-400",
    glow: "shadow-green-500/20",
    border: "border-green-500/20",
    bg: "bg-green-500/5",
    title: "Desarrollo Full Stack & Móvil",
    place: "Proyectos universitarios & freelance",
    desc: "Desarrollo de sistemas de inventario, plataformas de ventas, aplicaciones móviles con Kotlin y múltiples proyectos MVC en Java, Laravel, Python y C#.",
    tools: ["Java", "Spring Boot", "Laravel", "Kotlin", "React", "MySQL", "Python"],
  },
  {
    year: "2021–2022",
    icon: Rocket,
    gradient: "from-red-500 to-orange-400",
    glow: "shadow-red-500/20",
    border: "border-red-500/20",
    bg: "bg-red-500/5",
    title: "Redes & Freelancer Diseño",
    place: "Universidad Andina del Cusco & Independiente",
    desc: "Fundamentos prácticos de redes con laboratorios reales: configuración de switches, inter-VLAN, subnetting y Cisco Packet Tracer. Inicio de proyectos freelance de diseño gráfico y audiovisual.",
    tools: ["Cisco Packet Tracer", "Switches", "VLANs", "Photoshop", "Premiere Pro", "After Effects"],
  },
];

function AreaCard({ area }: { area: typeof AREAS[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group relative flex flex-col rounded-2xl border ${area.border} ${area.bg} overflow-hidden transition-all duration-300 ${expanded ? "shadow-xl " + area.glow : "hover:scale-[1.01] hover:shadow-lg " + area.glow}`}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${area.gradient}`} />
      <div className="p-5 flex flex-col flex-1">

        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center shadow-lg ${area.glow} flex-shrink-0`}>
              <area.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-white font-semibold text-sm">{area.title}</h3>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex-shrink-0 p-1 rounded-lg hover:bg-gray-700/50 transition-colors"
          >
            {expanded
              ? <ChevronUp className="h-4 w-4 text-gray-400" />
              : <ChevronDown className="h-4 w-4 text-gray-400" />
            }
          </button>
        </div>

        <p className="text-gray-400 text-xs leading-relaxed mb-3">{area.summary}</p>

        {/* Tools siempre visibles */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {area.tools.slice(0, expanded ? area.tools.length : 6).map((t) => (
            <span key={t} className="text-xs bg-gray-800/80 text-gray-300 px-2 py-0.5 rounded-lg border border-gray-700/50">
              {t}
            </span>
          ))}
          {!expanded && area.tools.length > 6 && (
            <span className="text-xs text-gray-500 px-1 py-0.5">+{area.tools.length - 6} más</span>
          )}
        </div>

        {/* Highlights — solo al expandir */}
        <div style={{
          maxHeight: expanded ? "400px" : "0px",
          overflow: "hidden",
          opacity: expanded ? 1 : 0,
          transition: "max-height 0.4s ease, opacity 0.3s ease",
        }}>
          <div className={`w-full h-px bg-gradient-to-r ${area.gradient} opacity-30 mb-3`} />
          <ul className="space-y-2">
            {area.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-300 leading-relaxed">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${area.gradient} flex-shrink-0 mt-1.5`} />
                {h}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
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
            <p className="text-blue-400 font-medium mt-1">Systems Engineer · DevOps · Applied AI · Full Stack · Creative Dev</p>
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
                infraestructura de servidores, inteligencia artificial aplicada y diseño digital. Me
                especializo en construir soluciones completas desde la capa de red hasta la interfaz visual.
              </p>
              <p>
                En infraestructura, diseño entornos de virtualización enterprise con Proxmox VE y TrueNAS/ZFS,
                configuro servicios de red completos (DNS, correo, VoIP, monitoreo) y despliego soluciones
                contenerizadas en producción. Tengo bases sólidas en ciberseguridad ofensiva y redes (Cisco),
                con experiencia práctica en laboratorios reales de inter-VLAN y configuración de switches.
              </p>
              <p>
                En IA, desarrollo desde pipelines de visión computacional con YOLO hasta agentes y chatbots
                con modelos LLM locales, sistemas de generación de imágenes y video con Stable Diffusion y
                ComfyUI, y soluciones de OCR para automatización documental.
              </p>
              <p>
                Como freelancer, combino mi perfil técnico con diseño gráfico, motion graphics, modelado 3D
                en Blender y experiencias VR/AR con Meta Quest 3 — ofreciendo soluciones digitales completas.
              </p>
            </div>
          </div>
        </div>

        {/* Áreas expandibles */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-5 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full" />
            <h2 className="text-white font-semibold">Áreas de expertise</h2>
          </div>
          <p className="text-gray-500 text-xs mb-5 ml-3">Haz clic en ↓ para ver herramientas y proyectos detallados</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AREAS.map((area, i) => (
              <AreaCard key={i} area={area} />
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1 h-5 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full" />
            <h2 className="text-white font-semibold">Trayectoria</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  <p className="text-gray-400 text-xs leading-relaxed flex-1 mb-3">{item.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.tools.map((t) => (
                      <span key={t} className="text-xs bg-gray-800/80 text-gray-400 px-1.5 py-0.5 rounded border border-gray-700/50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}