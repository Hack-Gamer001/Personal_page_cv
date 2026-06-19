"use client";

import { MapPin, Download, Github, Linkedin } from "lucide-react";
import SplitText from "../components/SplitText";
import SplineViewer from "../components/SplineViewer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="relative h-[60vh] md:h-screen w-full overflow-hidden">
        <SplineViewer />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mx-auto h-28 w-28 md:h-36 md:w-36 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6 flex items-center justify-center shadow-2xl ring-4 ring-blue-500/20">
            <span className="text-white text-4xl md:text-5xl font-bold">WC</span>
          </div>

          <SplitText
            text="Wilbert Junior Cárdenas Alejo"
            className="text-2xl md:text-4xl font-bold text-white mb-2"
            delay={100} duration={0.6} ease="power3.out"
            splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }}
            threshold={0.1} rootMargin="-100px" textAlign="center"
          />
          <SplitText
            text="Systems Engineer · DevOps · Applied AI · Full Stack"
            className="text-base md:text-xl text-blue-400 mb-4 font-semibold"
            delay={200} duration={0.6} ease="power3.out"
            splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }}
            threshold={0.1} rootMargin="-100px" textAlign="center"
          />

          <div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
            <MapPin className="h-4 w-4" />
            <span>Cusco, Perú</span>
          </div>

          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Ingeniero de Sistemas especializado en infraestructura Linux, virtualización,
            IA aplicada y desarrollo full stack. Construyo desde la capa de red hasta la interfaz de usuario.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2 shadow-lg shadow-blue-500/20">
              <Download className="h-4 w-4" />
              Descargar CV
            </button>
            <a href="https://github.com/Hack-Gamer001" target="_blank" rel="noopener noreferrer"
              className="border border-gray-600 text-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-gray-400 hover:text-white transition-colors inline-flex items-center gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/wilbert-j001/" target="_blank" rel="noopener noreferrer"
              className="border border-blue-700 text-blue-400 px-6 py-3 rounded-xl font-semibold hover:bg-blue-900/30 transition-colors inline-flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Años de experiencia", value: "4+" },
            { label: "Proyectos completados", value: "20+" },
            { label: "Tecnologías dominadas", value: "40+" },
            { label: "VMs desplegadas",       value: "7"   },
          ].map((stat, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-4 text-center hover:border-gray-700 transition-colors">
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-xs text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}