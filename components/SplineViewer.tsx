'use client';

import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const SplineLoadingState = () => (
  <div className="w-full h-full bg-gray-800/50 rounded-lg flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center">
      <div className="w-10 h-10 bg-blue-600 rounded-full mb-2"></div>
      <p className="text-gray-400 text-sm">Cargando animación...</p>
    </div>
  </div>
);

const Spline = dynamic(
  () => import('@splinetool/react-spline'),
  { ssr: false }
);


type SplineApp = { emitEvent: (eventName: string, targetName: string) => void };
type SplineEvent = { target: { name: string } };

export default function SplineViewer() {
  const splineRef = useRef<SplineApp | null>(null);
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleLoad = (app: any) => {
    splineRef.current = app;
    setLoaded(true);
    console.log('Spline cargado.');
  };

  const handleMouseDown = (e: SplineEvent) => {
    if (e.target.name === 'Cube' && splineRef.current) {
      splineRef.current.emitEvent('mouseHover', 'Cube');
    }
  };

  if (hasError) {
    return (
      <div className="w-full h-full bg-gray-800/50 rounded-lg flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-red-400 mb-2">Error al cargar la animación</p>
          <button
            onClick={() => setHasError(false)}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Spline
        scene="https://prod.spline.design/eIzNmMo4w0pIT6aC/scene.splinecode"
        onLoad={handleLoad}
        onSplineMouseDown={handleMouseDown}
        onError={() => setHasError(true)}
        className={`w-full h-full transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {loaded && (
        <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-xs bg-black/50 text-white px-2 py-1 rounded">
            Interactúa con la animación
          </span>
        </div>
      )}
    </div>
  );
}
