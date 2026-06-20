"use client";

import { useState } from "react";
import { Terminal, Code, Server, Database, Brain, Palette, Shield, Wrench, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const SKILLS = [
  {
    category: "Lenguajes de Programación",
    icon: Terminal,
    gradient: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
    items: ["Python", "Java", "TypeScript", "JavaScript", "C#", "C++", "PHP", "Kotlin", "Bash", "HTML", "CSS", "SQL", "R", "Matlab", "Dart"],
  },
  {
    category: "Frameworks & Librerías",
    icon: Code,
    gradient: "from-purple-500 to-pink-400",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
    items: ["React", "Next.js", "Angular", "Node.js", "Express", "Spring Boot", "Laravel", "Flask", "Django", "FastAPI", "ASP.NET Core", "PyTorch", "TensorFlow", "OpenCV", "Tailwind CSS", "Bootstrap", "Redux"],
  },
  {
    category: "Infraestructura & DevOps",
    icon: Server,
    gradient: "from-orange-500 to-amber-400",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    items: ["Proxmox VE", "Docker", "Linux", "Nginx", "TrueNAS / ZFS", "BIND9", "Tailscale", "Kubernetes", "n8n", "Cloudflare", "Apache", "Postfix / Dovecot", "FreePBX", "Zabbix", "LVM", "Wireguard"],
  },
  {
    category: "Bases de Datos",
    icon: Database,
    gradient: "from-green-500 to-emerald-400",
    glow: "shadow-green-500/20",
    border: "border-green-500/20",
    bg: "bg-green-500/5",
    items: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Firebase", "Supabase"],
  },
  {
    category: "IA Aplicada & Modelos",
    icon: Brain,
    gradient: "from-violet-500 to-purple-400",
    glow: "shadow-violet-500/20",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
    items: ["YOLO", "Qwen2.5-VL", "LM Studio", "Ollama", "Pinokio", "Stable Diffusion", "ComfyUI", "PaddleOCR", "CLIP", "LangChain", "Computer Vision", "Python ML", "Flask API", "Hugging Face"],
  },
  {
    category: "Diseño & Audiovisual",
    icon: Palette,
    gradient: "from-pink-500 to-rose-400",
    glow: "shadow-pink-500/20",
    border: "border-pink-500/20",
    bg: "bg-pink-500/5",
    items: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Lightroom", "InDesign", "Figma", "Blender", "Unity", "Unreal Engine", "Adobe XD", "DaVinci Resolve"],
  },
  {
    category: "Ciberseguridad & Redes",
    icon: Shield,
    gradient: "from-red-500 to-orange-400",
    glow: "shadow-red-500/20",
    border: "border-red-500/20",
    bg: "bg-red-500/5",
    items: ["Kali Linux", "Ethical Hacking", "Cisco Packet Tracer", "Wireshark", "VPN / Tailscale", "Firewall", "SSH", "BIND9", "inter-VLAN", "Subnetting", "VLAN", "Nmap"],
  },
  {
    category: "Herramientas & Productividad",
    icon: Wrench,
    gradient: "from-gray-500 to-slate-400",
    glow: "shadow-gray-500/20",
    border: "border-gray-500/20",
    bg: "bg-gray-500/5",
    items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "DBeaver", "Insomnia", "Jupyter", "Obsidian", "Vercel", "Cloudflare", "Linux Terminal"],
  },
];

const OS_LIST = [
  {
    name: "EndeavourOS / Arch",
    desc: "Desktop principal",
    gradient: "from-purple-500 to-violet-400",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/20",
    url: "https://endeavouros.com",
    dot: "bg-purple-400",
  },
  {
    name: "Fedora Server",
    desc: "VMs Proxmox",
    gradient: "from-blue-500 to-indigo-400",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/20",
    url: "https://fedoraproject.org/server",
    dot: "bg-blue-400",
  },
  {
    name: "Debian / Ubuntu",
    desc: "Servidores & Docker",
    gradient: "from-red-500 to-orange-400",
    glow: "shadow-red-500/20",
    border: "border-red-500/20",
    url: "https://www.debian.org",
    dot: "bg-red-400",
  },
  {
    name: "Kali Linux",
    desc: "Ciberseguridad",
    gradient: "from-gray-600 to-slate-500",
    glow: "shadow-gray-500/20",
    border: "border-gray-500/20",
    url: "https://www.kali.org",
    dot: "bg-gray-400",
  },
  {
    name: "Windows 11",
    desc: "Gaming & Adobe",
    gradient: "from-sky-500 to-blue-400",
    glow: "shadow-sky-500/20",
    border: "border-sky-500/20",
    url: "https://www.microsoft.com/windows/windows-11",
    dot: "bg-sky-400",
  },
  {
    name: "Android / Termux",
    desc: "Linux en tablet",
    gradient: "from-green-500 to-emerald-400",
    glow: "shadow-green-500/20",
    border: "border-green-500/20",
    url: "https://termux.dev",
    dot: "bg-green-400",
  },
];

function SkillCard({ group }: { group: typeof SKILLS[0] }) {
  const [expanded, setExpanded] = useState(false);
  const PREVIEW = 8;

  return (
    <div
      className={`group relative flex flex-col rounded-2xl border ${group.border} ${group.bg} overflow-hidden transition-all duration-300 ${expanded ? "shadow-xl " + group.glow : "hover:shadow-lg " + group.glow}`}
      style={{ transform: expanded ? "scale(1.01)" : "scale(1)", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${group.gradient}`} />

      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center shadow-lg ${group.glow} flex-shrink-0`}
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15) rotate(-8deg)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0deg)")}
            >
              <group.icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">{group.category}</h3>
              <p className="text-gray-500 text-xs">{group.items.length} herramientas</p>
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 rounded-lg hover:bg-gray-700/50 transition-colors flex-shrink-0"
          >
            {expanded
              ? <ChevronUp className="h-4 w-4 text-gray-400" />
              : <ChevronDown className="h-4 w-4 text-gray-400" />
            }
          </button>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {group.items.slice(0, expanded ? group.items.length : PREVIEW).map((skill, i) => (
            <span
              key={skill}
              className="px-2.5 py-1 bg-gray-800/80 text-gray-300 rounded-lg text-xs border border-gray-700/50 hover:border-gray-500 hover:text-white transition-all duration-150 cursor-default"
              style={{
                opacity: expanded ? 1 : 1,
                animation: expanded && i >= PREVIEW ? `fadeIn 0.2s ease ${(i - PREVIEW) * 0.03}s both` : "none",
              }}
            >
              {skill}
            </span>
          ))}
          {!expanded && group.items.length > PREVIEW && (
            <button
              onClick={() => setExpanded(true)}
              className={`px-2.5 py-1 rounded-lg text-xs border font-medium transition-all bg-gradient-to-r ${group.gradient} bg-clip-text text-transparent border-gray-700/50 hover:border-gray-500`}
            >
              +{group.items.length - PREVIEW} más
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full mx-auto py-12 px-8 sm:px-12 lg:px-20">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-600 rounded-full" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Habilidades técnicas</h1>
          </div>
          <p className="text-gray-400 text-sm ml-4">
            Stack actual — desarrollo, infraestructura, IA y diseño. Haz clic en ↓ para ver todas las herramientas.
          </p>
        </div>

        {/* Grid de skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
          {SKILLS.map((group, i) => (
            <SkillCard key={i} group={group} />
          ))}
        </div>

        {/* Sistemas operativos */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
              <h2 className="text-white font-semibold">Sistemas operativos</h2>
              <span className="text-gray-500 text-xs ml-1">— haz clic para ir al sitio oficial</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {OS_LIST.map((os, i) => (
                <a
                  key={i}
                  href={os.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/os flex flex-col items-center gap-2 p-3 rounded-xl border ${os.border} bg-gray-800/40 hover:bg-gray-800/70 hover:shadow-lg ${os.glow} transition-all duration-200 hover:scale-105 cursor-pointer`}
                >
                  <div className={`relative w-10 h-10 rounded-xl bg-gradient-to-br ${os.gradient} flex items-center justify-center shadow-md ${os.glow}`}>
                    <div className={`w-3 h-3 rounded-full ${os.dot} opacity-90`} />
                    <ExternalLink className="absolute -top-1 -right-1 h-3 w-3 text-white opacity-0 group-hover/os:opacity-100 transition-opacity bg-gray-900 rounded-full p-0.5" />
                  </div>
                  <div className="text-center">
                    <p className="text-gray-300 text-xs font-medium leading-tight">{os.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{os.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}