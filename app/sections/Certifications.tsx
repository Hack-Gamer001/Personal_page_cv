"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Award, Pause, Play, FolderOpen, FileText } from "lucide-react";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const FOLDER_ID = process.env.NEXT_PUBLIC_DRIVE_FOLDER_ID;

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  parents?: string[];
}

interface DriveFolder {
  id: string;
  name: string;
  files: DriveFile[];
}

interface Category {
  folder: DriveFolder;
  gradient: string;
  glow: string;
  border: string;
  bg: string;
}

const GRADIENTS = [
  { gradient: "from-blue-500 to-cyan-400",    glow: "shadow-blue-500/20",   border: "border-blue-500/20",   bg: "bg-blue-500/5"   },
  { gradient: "from-orange-500 to-amber-400", glow: "shadow-orange-500/20", border: "border-orange-500/20", bg: "bg-orange-500/5" },
  { gradient: "from-purple-500 to-violet-400",glow: "shadow-purple-500/20", border: "border-purple-500/20", bg: "bg-purple-500/5" },
  { gradient: "from-green-500 to-emerald-400",glow: "shadow-green-500/20",  border: "border-green-500/20",  bg: "bg-green-500/5"  },
  { gradient: "from-pink-500 to-rose-400",    glow: "shadow-pink-500/20",   border: "border-pink-500/20",   bg: "bg-pink-500/5"   },
  { gradient: "from-red-500 to-orange-400",   glow: "shadow-red-500/20",    border: "border-red-500/20",    bg: "bg-red-500/5"    },
  { gradient: "from-cyan-500 to-teal-400",    glow: "shadow-cyan-500/20",   border: "border-cyan-500/20",   bg: "bg-cyan-500/5"   },
  { gradient: "from-violet-500 to-indigo-400",glow: "shadow-violet-500/20", border: "border-violet-500/20", bg: "bg-violet-500/5" },
];

async function fetchFolderContents(folderId: string): Promise<DriveFile[]> {
  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+trashed=false&fields=files(id,name,mimeType,parents)&key=${API_KEY}&pageSize=100`;
  const res = await fetch(url);
  const data = await res.json();
  return data.files || [];
}

function CertCarousel({ files, gradient, glow, border }: {
  files: DriveFile[];
  gradient: string;
  glow: string;
  border: string;
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % files.length), [files.length]);
  const prev = () => setCurrent((c) => (c - 1 + files.length) % files.length);

  useEffect(() => {
    if (paused || files.length <= 1) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [paused, next, files.length]);

  if (files.length === 0) return (
    <div className="flex items-center justify-center h-48 text-gray-500 text-sm">
      <FileText className="h-8 w-8 mr-2 opacity-40" />
      Sin certificados
    </div>
  );

  const file = files[current];
  const embedUrl = `https://drive.google.com/file/d/${file.id}/preview`;
  const viewUrl = `https://drive.google.com/file/d/${file.id}/view`;

  return (
    <div className="flex flex-col gap-3">
      {/* iframe embed */}
      <div
        className={`relative rounded-xl overflow-hidden border ${border} bg-gray-900`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <iframe
          key={file.id}
          src={embedUrl}
          className="w-full"
          style={{ height: "280px" }}
          allow="autoplay"
          frameBorder="0"
        />

        {files.length > 1 && (
          <>
            <button onClick={() => { setPaused(true); prev(); setTimeout(() => setPaused(false), 8000); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center z-10 backdrop-blur-sm">
              <ChevronLeft className="h-4 w-4 text-white" />
            </button>
            <button onClick={() => { setPaused(true); next(); setTimeout(() => setPaused(false), 8000); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center z-10 backdrop-blur-sm">
              <ChevronRight className="h-4 w-4 text-white" />
            </button>

            {/* Progress bar */}
            {!paused && (
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${gradient}`}
                style={{ animation: "certProgress 5s linear infinite", width: "100%" }} />
            )}
          </>
        )}
      </div>

      {/* Info + controls */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 min-w-0">
          <p className="text-white text-xs font-medium truncate">{file.name.replace(/\.(pdf|PDF)$/, "")}</p>
          {files.length > 1 && (
            <p className="text-gray-500 text-xs">{current + 1} / {files.length}</p>
          )}
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {files.length > 1 && (
            <button onClick={() => setPaused(p => !p)}
              className="p-1.5 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
              {paused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
            </button>
          )}
          <a href={viewUrl} target="_blank" rel="noopener noreferrer"
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gradient-to-r ${gradient} text-white text-xs font-medium hover:opacity-90 transition-all`}>
            <ExternalLink className="h-3 w-3" /> Ver
          </a>
        </div>
      </div>

      {/* Dots */}
      {files.length > 1 && (
        <div className="flex justify-center gap-1.5">
          {files.map((_, i) => (
            <button key={i} onClick={() => { setPaused(true); setCurrent(i); setTimeout(() => setPaused(false), 8000); }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "14px" : "5px",
                height: "5px",
                background: i === current ? "#818cf8" : "#374151",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Certifications() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCerts, setTotalCerts] = useState(0);

  useEffect(() => {
    async function loadCertifications() {
      try {
        if (!API_KEY || !FOLDER_ID) {
          setError("Configuración de API no encontrada.");
          setLoading(false);
          return;
        }

        const items = await fetchFolderContents(FOLDER_ID);
        const folders = items.filter(f => f.mimeType === "application/vnd.google-apps.folder");
        const rootFiles = items.filter(f => f.mimeType !== "application/vnd.google-apps.folder");

        const cats: Category[] = [];
        let total = 0;

        // Subcarpetas
        for (let i = 0; i < folders.length; i++) {
          const folder = folders[i];
          const files = await fetchFolderContents(folder.id);
          const pdfs = files.filter(f => f.mimeType !== "application/vnd.google-apps.folder");
          if (pdfs.length > 0) {
            total += pdfs.length;
            cats.push({
              folder: { id: folder.id, name: folder.name, files: pdfs },
              ...GRADIENTS[i % GRADIENTS.length],
            });
          }
        }

        // Archivos en raíz (sin subcarpeta)
        if (rootFiles.length > 0) {
          total += rootFiles.length;
          cats.push({
            folder: { id: FOLDER_ID, name: "General", files: rootFiles },
            ...GRADIENTS[cats.length % GRADIENTS.length],
          });
        }

        setCategories(cats);
        setTotalCerts(total);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar certificaciones. Verifica que la carpeta sea pública.");
        setLoading(false);
      }
    }

    loadCertifications();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full mx-auto py-12 px-8 sm:px-12 lg:px-20">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Certificaciones</h1>
          </div>
          <p className="text-gray-400 text-sm ml-4">
            {loading ? "Cargando certificaciones..." : `${totalCerts} certificados en ${categories.length} categorías — desde Google Drive`}
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-900/80 border border-gray-800 rounded-2xl p-5 animate-pulse">
                <div className="h-4 bg-gray-700 rounded w-2/3 mb-4" />
                <div className="h-64 bg-gray-800 rounded-xl mb-3" />
                <div className="h-3 bg-gray-700 rounded w-full" />
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex flex-col items-center gap-4 py-16">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <Award className="h-8 w-8 text-red-400" />
            </div>
            <p className="text-red-400 text-sm text-center max-w-md">{error}</p>
            <p className="text-gray-500 text-xs text-center">
              Asegúrate de que la carpeta de Drive sea pública (Compartir → Cualquier persona con el enlace)
            </p>
          </div>
        )}

        {/* Categorías */}
        {!loading && !error && categories.length === 0 && (
          <div className="flex flex-col items-center gap-4 py-16">
            <FolderOpen className="h-12 w-12 text-gray-600" />
            <p className="text-gray-500 text-sm">No se encontraron certificados en la carpeta.</p>
          </div>
        )}

        {!loading && !error && categories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div key={cat.folder.id} className="relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${cat.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`} />
                <div className={`relative bg-gray-900/80 backdrop-blur-sm border ${cat.border} rounded-2xl overflow-hidden hover:shadow-xl ${cat.glow} transition-all duration-300`}>
                  <div className={`h-1 w-full bg-gradient-to-r ${cat.gradient}`} />
                  <div className="p-5">
                    {/* Card header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cat.gradient} flex items-center justify-center`}>
                          <Award className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm">{cat.folder.name}</h3>
                          <p className="text-gray-500 text-xs">{cat.folder.files.length} certificado{cat.folder.files.length !== 1 ? "s" : ""}</p>
                        </div>
                      </div>
                      <a
                        href={`https://drive.google.com/drive/folders/${cat.folder.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        <FolderOpen className="h-4 w-4" />
                      </a>
                    </div>

                    <CertCarousel
                      files={cat.folder.files}
                      gradient={cat.gradient}
                      glow={cat.glow}
                      border={cat.border}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      <style>{`
        @keyframes certProgress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </div>
  );
}