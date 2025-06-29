'use client';
import React, { useRef } from 'react';
import dynamic from 'next/dynamic';

// Import correcto: sin "/next"
const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => mod.default), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-800/50 rounded-lg" />
})
export default function SplineViewer() {
  const splineRef = useRef<any>(null);

  const handleLoad = (app: any) => {
    splineRef.current = app;
  };

  const handleMouseDown = (e: any) => {
    if (e.target.name === 'Cube') {
      splineRef.current.emitEvent('mouseHover', 'Cube');
    }
  };

  return (
    <div className="w-full h-full">
      <Spline
        scene="https://prod.spline.design/eIzNmMo4w0pIT6aC/scene.splinecode"
        onLoad={handleLoad}
        onMouseDown={handleMouseDown}
        className="w-full h-full"
      />
    </div>
  );
}
