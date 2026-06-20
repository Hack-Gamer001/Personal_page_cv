"use client";

import { MapPin, Download, Github, Linkedin, Server, Brain, Globe, Palette, ArrowDown } from "lucide-react";
import SplitText from "../../components/SplitText";

const STATS = [
  { label: "Años de experiencia",    value: "6+",  gradient: "from-blue-500 to-cyan-400"     },
  { label: "Proyectos completados",  value: "30+", gradient: "from-purple-500 to-pink-400"   },
  { label: "Tecnologías dominadas",  value: "50+", gradient: "from-orange-500 to-amber-400"  },
  { label: "Servicios desplegados",  value: "15+", gradient: "from-green-500 to-emerald-400" },
];

const TAGS = [
  { label: "Linux", color: "from-orange-500 to-amber-400" },
  { label: "DevOps", color: "from-blue-500 to-cyan-400" },
  { label: "Proxmox VE", color: "from-orange-600 to-red-500" },
  { label: "Docker", color: "from-blue-600 to-blue-400" },
  { label: "Python", color: "from-yellow-500 to-green-400" },
  { label: "YOLO", color: "from-violet-500 to-purple-400" },
  { label: "React", color: "from-cyan-500 to-blue-400" },
  { label: "Next.js", color: "from-gray-500 to-slate-400" },
  { label: "TrueNAS", color: "from-blue-700 to-blue-500" },
  { label: "Qwen2.5-VL", color: "from-purple-600 to-violet-400" },
  { label: "Tailscale", color: "from-gray-700 to-gray-500" },
  { label: "Blender", color: "from-orange-400 to-yellow-400" },
  { label: "LM Studio", color: "from-violet-600 to-indigo-400" },
  { label: "n8n", color: "from-red-500 to-orange-400" },
  { label: "Stable Diffusion", color: "from-pink-500 to-rose-400" },
  { label: "Figma", color: "from-pink-600 to-purple-500" },
];

const AREAS = [
  { icon: Server,  label: "Infraestructura",  gradient: "from-orange-500 to-amber-400",  glow: "shadow-orange-500/30" },
  { icon: Brain,   label: "IA Aplicada",       gradient: "from-purple-500 to-violet-400", glow: "shadow-purple-500/30" },
  { icon: Globe,   label: "Full Stack",        gradient: "from-blue-500 to-cyan-400",     glow: "shadow-blue-500/30"   },
  { icon: Palette, label: "Diseño & 3D",       gradient: "from-pink-500 to-rose-400",     glow: "shadow-pink-500/30"   },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden flex flex-col">

      {/* ── ANIMATED BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orbes animados */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
          style={{ animation: "float1 8s ease-in-out infinite" }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"
          style={{ animation: "float2 10s ease-in-out infinite" }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/6 rounded-full blur-3xl"
          style={{ animation: "float3 12s ease-in-out infinite" }} />

        {/* Grid sutil */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── HERO ── */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-8 sm:px-12 lg:px-20 pt-20 pb-8">

        {/* Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
          style={{ animation: "fadeInDown 0.6s ease both" }}>
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-blue-400 text-sm font-medium">Open to work — Disponible</span>
        </div>

        {/* Avatar */}
        <div className="relative mb-6" style={{ animation: "fadeInDown 0.7s ease 0.1s both" }}>
          <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-lg opacity-40 animate-pulse" />
          <div className="relative h-28 w-28 md:h-36 md:w-36 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl ring-4 ring-blue-500/20">
            <span className="text-white text-4xl md:text-5xl font-bold">WC</span>
          </div>
        </div>

        {/* Nombre */}
        <div style={{ animation: "fadeInUp 0.7s ease 0.2s both" }}>
          <SplitText
            text="Wilbert Junior Cárdenas Alejo"
            className="text-3xl md:text-5xl font-bold text-white mb-2 text-center"
            delay={60} duration={0.5} ease="power3.out"
            splitType="chars" from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }}
            threshold={0.1} rootMargin="-50px" textAlign="center"
          />
        </div>

        {/* Subtitle */}
        <div style={{ animation: "fadeInUp 0.7s ease 0.35s both" }}>
          <SplitText
            text="Systems Engineer · DevOps · Applied AI · Full Stack"
            className="text-lg md:text-2xl text-blue-400 mb-4 font-semibold text-center"
            delay={40} duration={0.5} ease="power3.out"
            splitType="words" from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }}
            threshold={0.1} rootMargin="-50px" textAlign="center"
          />
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-400 mb-6"
          style={{ animation: "fadeInUp 0.6s ease 0.45s both" }}>
          <MapPin className="h-4 w-4" />
          <span>Cusco, Perú</span>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-300 max-w-2xl text-center leading-relaxed mb-8"
          style={{ animation: "fadeInUp 0.6s ease 0.5s both" }}>
          Ingeniero de Sistemas especializado en infraestructura Linux, virtualización,
          IA aplicada y desarrollo full stack. Construyo desde la capa de red hasta la interfaz de usuario.
        </p>

        {/* Área icons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8"
          style={{ animation: "fadeInUp 0.6s ease 0.55s both" }}>
          {AREAS.map((area, i) => (
            <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900/80 border border-gray-700/50 hover:scale-105 transition-all hover:shadow-lg ${area.glow}`}>
              <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${area.gradient} flex items-center justify-center`}>
                <area.icon className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="text-gray-300 text-sm font-medium">{area.label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12"
          style={{ animation: "fadeInUp 0.6s ease 0.6s both" }}>
          <button className="group relative bg-gradient-to-r from-blue-600 to-blue-500 text-white px-7 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 inline-flex items-center gap-2">
            <Download className="h-4 w-4" />
            Descargar CV
          </button>
          <a href="https://github.com/Hack-Gamer001" target="_blank" rel="noopener noreferrer"
            className="border border-gray-600 text-gray-300 px-7 py-3 rounded-xl font-semibold hover:border-gray-400 hover:text-white hover:bg-gray-800/50 transition-all hover:scale-105 inline-flex items-center gap-2">
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/wilbert-j001/" target="_blank" rel="noopener noreferrer"
            className="border border-blue-700/50 text-blue-400 px-7 py-3 rounded-xl font-semibold hover:bg-blue-900/30 hover:border-blue-500 transition-all hover:scale-105 inline-flex items-center gap-2">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 text-gray-600"
          style={{ animation: "bounce 2s ease-in-out infinite 1.5s" }}>
          <span className="text-xs">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </div>
      </div>

      {/* ── TECH TAGS MARQUEE ── */}
      <div className="relative w-full overflow-hidden py-4 border-y border-gray-800/50">
        <div className="flex gap-3 w-max" style={{ animation: "marquee 25s linear infinite" }}>
          {[...TAGS, ...TAGS].map((tag, i) => (
            <span key={i} className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium text-white bg-gradient-to-r ${tag.color} opacity-80 hover:opacity-100 transition-opacity`}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="relative px-8 sm:px-12 lg:px-20 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {STATS.map((stat, i) => (
            <div key={i} className="relative group"
              style={{ animation: `fadeInUp 0.5s ease ${0.1 * i + 0.8}s both` }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 text-center hover:border-gray-700 transition-colors">
                <p className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.05); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 30px) scale(0.95); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, 15px) scale(1.08); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(6px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}