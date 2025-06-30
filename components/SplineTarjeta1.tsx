'use client';

import React from 'react';

interface SplineCardProps {
  className?: string;
  sceneUrl: string;
}

export default function SplineTarjeta1({
  className = '',
  sceneUrl = 'https://prod.spline.design/SGvePxry1vkq5kYc/scene.splinecode'
}: SplineCardProps) {
  return (
    <div className={`relative aspect-video w-full overflow-hidden ${className}`}>
      <iframe
        src={sceneUrl}
        frameBorder="0"
        allow="autoplay; fullscreen"
        className="absolute inset-0 w-full h-full"
        loading="lazy"
        title="Spline Animation"
      />
      <div className="absolute inset-0 flex items-end p-4 pointer-events-none">
        <span className="text-xs bg-black/50 text-white px-2 py-1 rounded">
          Interactúa con la animación
        </span>
      </div>
    </div>
  );
}