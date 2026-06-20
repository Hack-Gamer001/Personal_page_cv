"use client";

import { Terminal, Code, Server, Database, Brain, Palette, Shield, Wrench } from "lucide-react";

const SKILLS = [
  {
    category: "Lenguajes de Programación",
    icon: Terminal,
    gradient: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
    items: ["Python", "Java", "TypeScript", "JavaScript", "C#", "C++", "PHP", "Kotlin", "Bash", "HTML", "CSS", "SQL"],
  },
  {
    category: "Frameworks & Librerías",
    icon: Code,
    gradient: "from-purple-500 to-pink-400",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
    items: ["React", "Next.js", "Angular", "Node.js", "Spring Boot", "Laravel", "Flask", "Django", "FastAPI", "PyTorch", "OpenCV", "Tailwind CSS"],
  },
  {
    category: "Infraestructura & DevOps",
    icon: Server,
    gradient: "from-orange-500 to-amber-400",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    items: ["Proxmox VE", "Docker", "Linux", "Nginx", "TrueNAS / ZFS", "BIND9", "Tailscale", "Kubernetes", "n8n", "Cloudflare"],
  },
  {
    category: "Bases de Datos",
    icon: Database,
    gradient: "from-green-500 to-emerald-400",
    glow: "shadow-green-500/20",
    border: "border-green-500/20",
    bg: "bg-green-500/5",
    items: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Firebase"],
  },
  {
    category: "IA Aplicada",
    icon: Brain,
    gradient: "from-violet-500 to-purple-400",
    glow: "shadow-violet-500/20",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
    items: ["YOLO", "Qwen2.5-VL", "LM Studio", "PaddleOCR", "Computer Vision", "Python ML", "CLIP", "Flask API"],
  },
  {
    category: "Diseño & Audiovisual",
    icon: Palette,
    gradient: "from-pink-500 to-rose-400",
    glow: "shadow-pink-500/20",
    border: "border-pink-500/20",
    bg: "bg-pink-500/5",
    items: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Figma", "Lightroom", "Blender", "Unity", "Unreal Engine"],
  },
  {
    category: "Ciberseguridad & Redes",
    icon: Shield,
    gradient: "from-red-500 to-orange-400",
    glow: "shadow-red-500/20",
    border: "border-red-500/20",
    bg: "bg-red-500/5",
    items: ["Kali Linux", "Ethical Hacking", "Cisco Networking", "Wireshark", "VPN / Tailscale", "Firewall", "SSH", "BIND9"],
  },
  {
    category: "Herramientas",
    icon: Wrench,
    gradient: "from-gray-500 to-slate-400",
    glow: "shadow-gray-500/20",
    border: "border-gray-500/20",
    bg: "bg-gray-500/5",
    items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "DBeaver", "Insomnia", "Jupyter", "Obsidian"],
  },
];

const OS_LIST = [
  { name: "EndeavourOS / Arch", gradient: "from-purple-500 to-violet-400", glow: "shadow-purple-500/20", border: "border-purple-500/20" },
  { name: "Fedora Server",      gradient: "from-blue-500 to-indigo-400",   glow: "shadow-blue-500/20",   border: "border-blue-500/20"   },
  { name: "Debian / Ubuntu",    gradient: "from-red-500 to-orange-400",    glow: "shadow-red-500/20",    border: "border-red-500/20"    },
  { name: "Kali Linux",         gradient: "from-gray-600 to-slate-500",    glow: "shadow-gray-500/20",   border: "border-gray-500/20"   },
  { name: "Windows 11",         gradient: "from-sky-500 to-blue-400",      glow: "shadow-sky-500/20",    border: "border-sky-500/20"    },
  { name: "Android / Termux",   gradient: "from-green-500 to-emerald-400", glow: "shadow-green-500/20",  border: "border-green-500/20"  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full mx-auto py-12 px-8 sm:px-12 lg:px-20">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-600 rounded-full" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Habilidades técnicas</h1>
          </div>
          <p className="text-gray-400 text-sm ml-4">
            Stack actual — desarrollo, infraestructura, IA y diseño.
          </p>
        </div>

        {/* Grid de skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
          {SKILLS.map((group, i) => (
            <div
              key={i}
              className={`group relative flex flex-col rounded-2xl border ${group.border} ${group.bg} overflow-hidden hover:scale-[1.02] hover:shadow-xl ${group.glow} transition-all duration-300`}
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${group.gradient}`} />

              <div className="p-5">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center shadow-lg ${group.glow} flex-shrink-0`}>
                    <group.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">{group.category}</h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-gray-800/80 text-gray-300 rounded-lg text-xs border border-gray-700/50 hover:border-gray-500 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sistemas operativos */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
              <h2 className="text-white font-semibold">Sistemas operativos</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {OS_LIST.map((os, i) => (
                <div
                  key={i}
                  className={`group/os flex flex-col items-center gap-2 p-3 rounded-xl border ${os.border} bg-gray-800/40 hover:bg-gray-800/70 hover:shadow-lg ${os.glow} transition-all duration-200 hover:scale-105`}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${os.gradient} flex items-center justify-center shadow-md ${os.glow}`}>
                    <div className="w-2 h-2 rounded-full bg-white/80" />
                  </div>
                  <span className="text-gray-300 text-xs font-medium text-center leading-tight">{os.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}