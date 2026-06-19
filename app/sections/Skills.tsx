"use client";

import { Terminal, Code, Server, Database, Brain, Palette, Shield, Wrench } from "lucide-react";

const SKILLS = [
  {
    category: "Lenguajes de Programación",
    icon: Terminal,
    gradient: "from-blue-500 to-cyan-500",
    items: ["Python", "Java", "TypeScript", "JavaScript", "C#", "C++", "PHP", "Kotlin", "Bash", "HTML", "CSS", "SQL"],
  },
  {
    category: "Frameworks & Librerías",
    icon: Code,
    gradient: "from-purple-500 to-pink-500",
    items: ["React", "Next.js", "Angular", "Node.js", "Spring Boot", "Laravel", "Flask", "Django", "FastAPI", "PyTorch", "OpenCV", "Tailwind CSS"],
  },
  {
    category: "Infraestructura & DevOps",
    icon: Server,
    gradient: "from-orange-500 to-red-500",
    items: ["Proxmox VE", "Docker", "Linux", "Nginx", "TrueNAS / ZFS", "BIND9", "Tailscale", "Kubernetes", "n8n", "Cloudflare"],
  },
  {
    category: "Bases de Datos",
    icon: Database,
    gradient: "from-green-500 to-emerald-500",
    items: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Firebase"],
  },
  {
    category: "IA Aplicada",
    icon: Brain,
    gradient: "from-violet-500 to-purple-500",
    items: ["YOLO", "Qwen2.5-VL", "LM Studio", "PaddleOCR", "Computer Vision", "Python ML", "CLIP", "Flask API"],
  },
  {
    category: "Diseño & Audiovisual",
    icon: Palette,
    gradient: "from-pink-500 to-rose-500",
    items: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Figma", "Lightroom", "Blender", "Unity", "Unreal Engine"],
  },
  {
    category: "Ciberseguridad & Redes",
    icon: Shield,
    gradient: "from-red-500 to-orange-500",
    items: ["Kali Linux", "Ethical Hacking", "Cisco Networking", "Wireshark", "VPN / Tailscale", "Firewall", "SSH", "BIND9"],
  },
  {
    category: "Herramientas",
    icon: Wrench,
    gradient: "from-gray-500 to-slate-600",
    items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman", "DBeaver", "Insomnia", "Jupyter", "Obsidian"],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-950">
      <div className="w-full mx-auto py-16 px-8 sm:px-12 lg:px-20">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-2">
            <span className="w-1 h-7 bg-blue-500 rounded-full inline-block" />
            Habilidades técnicas
          </h1>
          <p className="text-gray-400 text-sm md:text-base ml-3">
            Stack actual — desarrollo, infraestructura, IA y diseño.
          </p>
        </div>

        {/* Grid de skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {SKILLS.map((group, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-all hover:-translate-y-0.5 group"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${group.gradient} shadow-lg`}>
                  <group.icon className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm">{group.category}</h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-gray-800 text-gray-300 rounded-lg text-xs border border-gray-700/50 hover:border-gray-500 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sistemas operativos */}
        <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-cyan-500 rounded-full inline-block" />
            Sistemas operativos
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "EndeavourOS / Arch", color: "from-purple-500 to-violet-500" },
              { name: "Fedora Server",      color: "from-blue-500 to-indigo-500"  },
              { name: "Debian / Ubuntu",    color: "from-red-500 to-orange-500"   },
              { name: "Kali Linux",         color: "from-gray-500 to-slate-500"   },
              { name: "Windows 11",         color: "from-sky-500 to-blue-500"     },
              { name: "Android / Termux",   color: "from-green-500 to-emerald-500"},
            ].map((os, i) => (
              <div key={i} className={`flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-800 border border-gray-700 hover:border-gray-500 transition-colors`}>
                <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${os.color}`} />
                <span className="text-gray-300 text-xs font-medium">{os.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}