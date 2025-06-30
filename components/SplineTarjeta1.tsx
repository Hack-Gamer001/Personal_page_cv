'use client';

import dynamic from 'next/dynamic';
import React, { useState } from 'react';

// Importación dinámica mejorada para evitar problemas de exportación
const Spline = dynamic(
  () => import('@splinetool/react-spline').then(mod => mod.default),
  { ssr: false, loading: () => <div className="w-full h-full bg-gray-100 animate-pulse" /> }
);

interface SplineCardProps {
  className?: string;
  sceneUrl: string;
}

export default function SplineTarjeta1({
  className = '',
  sceneUrl = 'https://prod.spline.design/SGvePxry1vkq5kYc/scene.splinecode'
}: SplineCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative aspect-video w-full overflow-hidden ${className}`}>
      <Spline
        scene={sceneUrl}
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className={`absolute inset-0 flex items-end p-4 pointer-events-none transition-opacity duration-300 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <span className="text-xs bg-black/50 text-white px-2 py-1 rounded">
          Interactúa con la animación
        </span>
      </div>
    </div>
  );
}