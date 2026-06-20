'use client';
import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const Spline = dynamic(
  () => import('@splinetool/react-spline').catch(() => ({ default: () => null })),
  { ssr: false, loading: () => (
    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-3">
        <div className="w-12 h-12 bg-blue-600/50 rounded-full" />
        <p className="text-gray-500 text-sm">Cargando...</p>
      </div>
    </div>
  )}
);

type SplineApp = { emitEvent: (eventName: string, targetName: string) => void };

export default function SplineViewer() {
  const splineRef = useRef<SplineApp | null>(null);
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full bg-gray-900 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">WC</span>
          </div>
          <p className="text-gray-400 text-sm">Animación 3D no disponible</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Spline
        scene="https://prod.spline.design/eIzNmMo4w0pIT6aC/scene.splinecode"
        onLoad={(app: any) => { splineRef.current = app; setLoaded(true); }}
        onError={() => setHasError(true)}
        className={`w-full h-full transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {!loaded && !hasError && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-blue-600/50 rounded-full" />
            <p className="text-gray-500 text-sm">Cargando animación...</p>
          </div>
        </div>
      )}
    </div>
  );
}
