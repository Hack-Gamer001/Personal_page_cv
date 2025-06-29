'use client';
import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Tipos mejorados para Spline
type SplineApp = {
  emitEvent: (eventName: string, targetName: string) => void;
  // Agrega otros métodos que necesites
};

type SplineEvent = {
  target: {
    name: string;
  };
};

// Tipo para el módulo importado
type SplineModule = {
  default: React.ComponentType<any>;
  Spline?: React.ComponentType<any>;
};

// Componente Spline con carga dinámica y tipado seguro
const Spline = dynamic(
  () => import('@splinetool/react-spline').then((mod: SplineModule) => {
    if (mod.default) return mod.default;
    if (mod.Spline) return mod.Spline;
    throw new Error('No se encontró el componente Spline en el módulo');
  }), 
  { 
    ssr: false,
    loading: () => <SplineLoadingState />
  }
);


// Estado de carga mejorado
const SplineLoadingState = () => (
  <div className="w-full h-full bg-gray-800/50 rounded-lg flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center">
      <div className="w-10 h-10 bg-blue-600 rounded-full mb-2"></div>
      <p className="text-gray-400 text-sm">Cargando animación...</p>
    </div>
  </div>
);

// Componente principal con TypeScript fuerte
export default function SplineViewer() {
  const splineRef = useRef<SplineApp | null>(null);
  const [hasError, setHasError] = useState(false);

  const handleLoad = (app: SplineApp) => {
    splineRef.current = app;
    console.log('Spline cargado correctamente');
  };

  const handleError = (error: Error) => {
    console.error('Error al cargar Spline:', error);
    setHasError(true);
  };

  const handleMouseDown = (e: SplineEvent) => {
    try {
      if (e.target.name === 'Cube' && splineRef.current) {
        splineRef.current.emitEvent('mouseHover', 'Cube');
      }
    } catch (error) {
      console.error('Error en interacción Spline:', error);
    }
  };

  // Estado de error
  if (hasError) {
    return (
      <div className="w-full h-full bg-gray-800/50 rounded-lg flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-red-400 mb-2">Error al cargar la animación</p>
          <button 
            onClick={() => setHasError(false)}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
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
        onError={handleError}
        onMouseDown={handleMouseDown}
        className="w-full h-full"
      />
      
      {/* Overlay para interacciones adicionales */}
      <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
          Interactúa con la animación
        </div>
      </div>
    </div>
  );
}