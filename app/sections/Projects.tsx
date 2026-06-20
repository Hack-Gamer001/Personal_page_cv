"use client";

import { useState, useEffect } from "react";
import { Github, ExternalLink, Star, GitFork, Clock, ChevronLeft, ChevronRight, Brain, Server, Globe, Cpu, Palette, Zap, Lock, Pause, Play } from "lucide-react";

const FEATURED = [
  {
    title: "Enterprise Network Infrastructure",
    desc: "7-VM enterprise environment on Proxmox VE with DNS, mail server, web services, VPN and LVM storage.",
    tech: ["Proxmox VE", "Linux", "Docker", "BIND9"],
    icon: Server,
    gradient: "from-orange-500 to-amber-400",
    glow: "shadow-orange-500/30",
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    github: "https://github.com/Hack-Gamer001",
    live: null,
    status: "Completado",
  },
  {
    title: "Vehicle Detection & Traffic Analysis",
    desc: "Real-time vehicle detection and classification using YOLO and Qwen2.5-VL for traffic flow analysis.",
    tech: ["Python", "YOLO", "OpenCV", "Flask"],
    icon: Brain,
    gradient: "from-purple-500 to-violet-400",
    glow: "shadow-purple-500/30",
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
    github: "https://github.com/Hack-Gamer001",
    live: null,
    status: "En desarrollo",
  },
  {
    title: "Vision Classification Pipeline",
    desc: "AI-powered image classification using Qwen2.5-VL-7B over SMB storage with per-subject prompt engineering.",
    tech: ["Python", "Flask", "Qwen2.5-VL", "TrueNAS"],
    icon: Palette,
    gradient: "from-violet-500 to-purple-400",
    glow: "shadow-violet-500/30",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
    github: null,
    live: null,
    status: "Completado",
  },
  {
    title: "GPU Passthrough Automation",
    desc: "Dynamic RTX 5080 passthrough to Windows 11 VM via libvirt hooks on EndeavourOS with automation scripts.",
    tech: ["Linux", "KVM/QEMU", "libvirt", "Bash"],
    icon: Cpu,
    gradient: "from-green-500 to-emerald-400",
    glow: "shadow-green-500/30",
    border: "border-green-500/20",
    bg: "bg-green-500/5",
    github: "https://github.com/Hack-Gamer001",
    live: null,
    status: "Documentado",
  },
  {
    title: "Personal Portfolio CV",
    desc: "Professional portfolio built with Next.js 14, TypeScript and Tailwind CSS. Deployed on Vercel with CI/CD.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    icon: Globe,
    gradient: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/30",
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
    github: "https://github.com/Hack-Gamer001/Personal_page_cv",
    live: "https://personal-page-cv.vercel.app",
    status: "Activo",
  },
  {
    title: "Institutional Automation — DTI UAC",
    desc: "Process automation with n8n, Docker, Nginx and Google Apps Script during professional internship at UAC.",
    tech: ["n8n", "Docker", "Nginx", "Node.js"],
    icon: Zap,
    gradient: "from-cyan-500 to-teal-400",
    glow: "shadow-cyan-500/30",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/5",
    github: null,
    live: null,
    status: "Completado",
  },
];

const STATUS_STYLES: Record<string, string> = {
  "Completado":    "bg-green-900/40 text-green-300 border-green-700/50",
  "En desarrollo": "bg-yellow-900/40 text-yellow-300 border-yellow-700/50",
  "Activo":        "bg-blue-900/40 text-blue-300 border-blue-700/50",
  "Documentado":   "bg-gray-800 text-gray-300 border-gray-700",
};

const BEHANCE_PROJECTS = [
  {
    title: "Edición — Invitación Juegos Deportivos",
    url: "https://www.behance.net/gallery/234780947/Edicion-Invitacion-Juegos-Deportivos",
    embedSrc: "https://www.behance.net/embed/project/234780947?ilo0=1",
  },
  {
    title: "Edit con Modelado y Reflejos",
    url: "https://www.behance.net/gallery/234782503/Edit-con-modelado-y-reflejos",
    embedSrc: "https://www.behance.net/embed/project/234782503?ilo0=1",
  },
  {
    title: "Edit Fotográfico Atardecer",
    url: "https://www.behance.net/gallery/234784579/Edit-Fotografico-Atardecer",
    embedSrc: "https://www.behance.net/embed/project/234784579?ilo0=1",
  },
  {
    title: "Edit Gwen Stacy",
    url: "https://www.behance.net/gallery/234790025/Edit-Gwen-Stacy",
    embedSrc: "https://www.behance.net/embed/project/234790025?ilo0=1",
  },
  {
    title: "Edit 3D Personal",
    url: "https://www.behance.net/gallery/234780665/Edit-3D-personal",
    embedSrc: "https://www.behance.net/embed/project/234780665?ilo0=1",
  },
];

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python:     "bg-green-500",
  Java:       "bg-orange-500",
  PHP:        "bg-violet-500",
  CSS:        "bg-pink-500",
  HTML:       "bg-red-500",
  Shell:      "bg-gray-400",
  Kotlin:     "bg-purple-500",
};

// ─── PROYECTOS RECIENTES ───────────────────────────────────────────────────────

function FeaturedProjects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-1 h-5 bg-gradient-to-b from-purple-400 to-violet-600 rounded-full" />
        <h2 className="text-white font-semibold">Proyectos recientes</h2>
      </div>

      {FEATURED.map((p, i) => {
        const isHovered = hovered === i;
        const isOther   = hovered !== null && hovered !== i;

        return (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              transform: isHovered ? "scale(1.03)" : isOther ? "scale(0.97)" : "scale(1)",
              opacity: isOther ? 0.6 : 1,
              transition: "transform 0.25s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease, box-shadow 0.25s ease",
            }}
            className={`relative flex flex-col rounded-xl border ${p.border} ${p.bg} overflow-hidden cursor-pointer ${isHovered ? `shadow-lg ${p.glow}` : ""}`}
          >
            {/* Barra de color */}
            <div className={`h-0.5 w-full bg-gradient-to-r ${p.gradient}`} />

            {/* Glow overlay al hover */}
            <div
              style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.25s ease" }}
              className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-5 pointer-events-none`}
            />

            <div className="relative p-3.5">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div
                    style={{ transform: isHovered ? "scale(1.15) rotate(-5deg)" : "scale(1) rotate(0deg)", transition: "transform 0.3s ease" }}
                    className={`w-7 h-7 rounded-lg bg-gradient-to-br ${p.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    <p.icon className="h-3.5 w-3.5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-xs leading-tight">{p.title}</h3>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-lg border flex-shrink-0 ${STATUS_STYLES[p.status]}`}>
                  {p.status}
                </span>
              </div>

              {/* Descripción — se expande al hover */}
              <div style={{
                maxHeight: isHovered ? "60px" : "32px",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}>
                <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
              </div>

              {/* Tech + links — aparecen al hover */}
              <div style={{
                maxHeight: isHovered ? "60px" : "0px",
                overflow: "hidden",
                opacity: isHovered ? 1 : 0,
                transition: "max-height 0.3s ease, opacity 0.2s ease",
              }}>
                <div className="flex flex-wrap gap-1 mt-2 mb-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs bg-gray-800/80 text-gray-400 px-1.5 py-0.5 rounded border border-gray-700/50">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {p.github ? (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-gray-400 hover:text-white text-xs transition-colors">
                      <Github className="h-3 w-3" /> Código
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 text-gray-600 text-xs">
                      <Lock className="h-3 w-3" /> Privado
                    </span>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-xs transition-colors">
                      <ExternalLink className="h-3 w-3" /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── GITHUB ────────────────────────────────────────────────────────────────────

function GithubRepos() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/Hack-Gamer001/repos?sort=updated&per_page=12")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
        else setError(true);
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-5 bg-gradient-to-b from-gray-400 to-slate-600 rounded-full" />
          <h2 className="text-white font-semibold">GitHub</h2>
        </div>
        <a href="https://github.com/Hack-Gamer001" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
          <Github className="h-3.5 w-3.5" /> Ver perfil <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      <div className="flex flex-col gap-2">
        {loading && [...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-800/50 rounded-xl p-4 animate-pulse">
            <div className="h-3 bg-gray-700 rounded w-2/3 mb-2" />
            <div className="h-2 bg-gray-700 rounded w-full mb-2" />
            <div className="h-2 bg-gray-700 rounded w-1/3" />
          </div>
        ))}

        {error && (
          <div className="flex flex-col items-center gap-3 py-8">
            <Github className="h-10 w-10 text-gray-600" />
            <p className="text-gray-500 text-sm text-center">No se pudieron cargar los repos</p>
            <a href="https://github.com/Hack-Gamer001" target="_blank" rel="noopener noreferrer"
              className="text-blue-400 text-xs hover:text-blue-300">Ver en GitHub →</a>
          </div>
        )}

        {!loading && !error && repos.map((repo) => (
          <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer"
            className="group flex flex-col gap-2 p-3.5 rounded-xl border border-gray-800 bg-gray-900/60 hover:border-gray-600 hover:bg-gray-800/60 hover:scale-[1.01] transition-all duration-200">
            <div className="flex items-start justify-between gap-2">
              <span className="text-white text-xs font-semibold group-hover:text-blue-400 transition-colors truncate">
                {repo.name}
              </span>
              <ExternalLink className="h-3 w-3 text-gray-600 group-hover:text-gray-400 flex-shrink-0 mt-0.5" />
            </div>
            {repo.description && (
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{repo.description}</p>
            )}
            <div className="flex items-center gap-3 text-xs text-gray-500">
              {repo.language && (
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${LANG_COLORS[repo.language] || "bg-gray-500"}`} />
                  <span>{repo.language}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3" /><span>{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="h-3 w-3" /><span>{repo.forks_count}</span>
              </div>
              <div className="flex items-center gap-1 ml-auto">
                <Clock className="h-3 w-3" />
                <span>{new Date(repo.updated_at).toLocaleDateString("es-PE", { month: "short", year: "numeric" })}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── BEHANCE CAROUSEL ─────────────────────────────────────────────────────────

function BehanceCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = () => setCurrent((c) => (c - 1 + BEHANCE_PROJECTS.length) % BEHANCE_PROJECTS.length);
  const next = () => setCurrent((c) => (c + 1) % BEHANCE_PROJECTS.length);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % BEHANCE_PROJECTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  const handlePrev = () => {
    setPaused(true);
    prev();
    setTimeout(() => setPaused(false), 8000);
  };

  const handleNext = () => {
    setPaused(true);
    next();
    setTimeout(() => setPaused(false), 8000);
  };

  const handleDot = (i: number) => {
    setPaused(true);
    setCurrent(i);
    setTimeout(() => setPaused(false), 8000);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-5 bg-gradient-to-b from-indigo-400 to-blue-600 rounded-full" />
          <h2 className="text-white font-semibold">Behance</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPaused((p) => !p)}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-gray-800"
          >
            {paused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
            {paused ? "Play" : "Pausa"}
          </button>
          <a href="https://www.behance.net/djmixwtffa20cb" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
            Ver portafolio <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Iframe */}
      <div
        className="relative rounded-2xl overflow-hidden border border-gray-700/50 bg-gray-900 mb-3"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <iframe
          key={current}
          src={BEHANCE_PROJECTS[current].embedSrc}
          height="316"
          width="100%"
          allowFullScreen
          frameBorder="0"
          allow="clipboard-write"
          referrerPolicy="strict-origin-when-cross-origin"
          className="w-full"
          style={{ minHeight: "316px" }}
        />

        {/* Botones nav */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors backdrop-blur-sm z-10"
        >
          <ChevronLeft className="h-4 w-4 text-white" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors backdrop-blur-sm z-10"
        >
          <ChevronRight className="h-4 w-4 text-white" />
        </button>

        {/* Indicador de autoplay */}
        {!paused && (
          <div className="absolute bottom-0 left-0 h-0.5 bg-indigo-500/60 rounded-full"
            style={{ animation: "progress 5s linear infinite", width: "100%" }}
          />
        )}
      </div>

      {/* Título */}
      <p className="text-white text-sm font-semibold text-center mb-3 px-2 truncate">
        {BEHANCE_PROJECTS[current].title}
      </p>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mb-3">
        {BEHANCE_PROJECTS.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "16px" : "6px",
              height: "6px",
              background: i === current ? "#818cf8" : "#4b5563",
            }}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-xs">{current + 1} / {BEHANCE_PROJECTS.length}</span>
        <a
          href={BEHANCE_PROJECTS[current].url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-600/30 hover:text-indigo-300 text-xs font-medium transition-all"
        >
          <ExternalLink className="h-3.5 w-3.5" /> Ver en Behance
        </a>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </div>
  );
}

// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full mx-auto py-12 px-8 sm:px-12 lg:px-20">

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-400 to-violet-600 rounded-full" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Proyectos</h1>
          </div>
          <p className="text-gray-400 text-sm ml-4">
            Infraestructura, IA aplicada, desarrollo web y portafolio creativo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* Izquierda */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5">
              <FeaturedProjects />
            </div>
          </div>

          {/* Centro */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500/20 to-slate-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5">
              <GithubRepos />
            </div>
          </div>

          {/* Derecha */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5">
              <BehanceCarousel />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}