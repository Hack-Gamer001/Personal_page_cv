'use client';

import dynamic from 'next/dynamic';
import React, { useState } from 'react';

// Cambia la importación
const Spline = dynamic(
  () => import('@splinetool/react-spline'),
  { ssr: false }
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
    <div className={`relative ${className}`}>
      <Spline
        scene={sceneUrl}
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
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
