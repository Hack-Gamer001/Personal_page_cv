import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Import dinámico para evitar SSR
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

export default function SplineComponent() {
  const splineRef = useRef<any>(null);

  const handleLoad = (app: any) => {
    splineRef.current = app;
  };

  const handleMouseDown = (e: any) => {
    if (e.target.name === 'Cube') {
      console.log('¡Cubo clicado!');
      splineRef.current.emitEvent('mouseHover', 'Cube');
    }
  };

  return (
    <Spline
      scene="https://prod.spline.design/eIzNmMo4w0pIT6aC/scene.splinecode"
      onLoad={handleLoad}
      onMouseDown={handleMouseDown}
      className="w-full h-full"
    />
  );
}
