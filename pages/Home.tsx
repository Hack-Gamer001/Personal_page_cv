"use client";

import { MapPin, Download } from "lucide-react";
import SplitText from "../components/SplitText";
import SplineViewer from "../components/SplineViewer";
import SplineTarjeta1 from "../components/SplineTarjeta1";
import styles from "../styles/Home.module.css"; // 👈 CSS exclusivo

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="relative h-screen w-full" onWheel={(e) => e.stopPropagation()}>
          <SplineViewer />
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="mx-auto h-32 w-32 md:h-40 md:w-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6 flex items-center justify-center shadow-2xl">
                <span className="text-white text-3xl md:text-5xl font-bold">WC</span>
              </div>

              <SplitText
                text="Wilbert Junior Cardenas Alejo"
                className="text-2xl md:text-4xl font-bold text-white mb-2"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
              />

              <SplitText
                text="Ingeniero de Sistemas"
                className="text-lg md:text-2xl text-blue-400 mb-4 font-semibold"
                delay={200}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
              />

              <div className="flex items-center justify-center gap-2 text-gray-300 mb-6">
                <MapPin className="h-4 w-4" />
                <span>Cusco, Perú</span>
              </div>

              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Especialista en desarrollo de software con amplia experiencia en aplicaciones web, móviles, administración de servidores, redes y tecnologías cloud.
              </p>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SplineTarjeta1 className="aspect-video w-full rounded-lg shadow-lg" sceneUrl="https://prod.spline.design/SGvePxry1vkq5kYc/scene.splinecode" />
                <SplineTarjeta1 className="aspect-video w-full rounded-lg shadow-lg" sceneUrl="https://prod.spline.design/SGvePxry1vkq5kYc/scene.splinecode" />
                <SplineTarjeta1 className="aspect-video w-full rounded-lg shadow-lg" sceneUrl="https://prod.spline.design/SGvePxry1vkq5kYc/scene.splinecode" />
              </div>
            </div>

            <div className="text-center pb-8">
              <button className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                <Download className="h-4 w-4" />
                Descargar CV
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
