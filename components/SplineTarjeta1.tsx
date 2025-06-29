'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'

type SplineComponent = React.ComponentType<{
  scene: string;
  className?: string;
  onLoad?: (app: any) => void;
  onError?: (error: Error) => void;
}>;

const SplineLoadingPlaceholder = () => (
  <div className="w-full h-full bg-gray-800/50 rounded-lg flex items-center justify-center">
    <div className="space-y-2 text-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
      <p className="text-sm text-gray-400">Cargando animación...</p>
    </div>
  </div>
);

const SplineErrorPlaceholder = ({ onRetry }: { onRetry: () => void }) => (
  <div className="w-full h-full bg-gray-800/80 rounded-lg flex flex-col items-center justify-center p-4">
    <div className="text-red-400 mb-3">Error al cargar la animación</div>
    <button
      onClick={onRetry}
      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm transition-colors"
    >
      Reintentar
    </button>
  </div>
);

const Spline = dynamic(
  () => import('@splinetool/react-spline').then((mod: any) => {
    const component = mod.default || mod.Spline;
    if (!component) throw new Error('Componente Spline no encontrado');
    return component as SplineComponent;
  }),
  { 
    ssr: false,
    loading: () => <SplineLoadingPlaceholder />
  }
);

interface SplineCardProps {
  className?: string;
  sceneUrl?: string;
}

export default function SplineTarjeta1({ 
  className = '', 
  sceneUrl = 'https://prod.spline.design/SGvePxry1vkq5kYc/scene.splinecode' 
}: SplineCardProps) {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (err: Error) => {
    console.error('Error loading Spline:', err);
    setError(err);
  };

  const handleRetry = () => {
    setError(null);
    setIsLoaded(false);
  };

  if (error) {
    return (
      <div className={`relative ${className}`}>
        <SplineErrorPlaceholder onRetry={handleRetry} />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Spline
        scene={sceneUrl}
        onLoad={handleLoad}
        onError={handleError}
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {isLoaded && (
        <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-xs bg-black/50 text-white px-2 py-1 rounded">
            Interactúa con la animación
          </span>
        </div>
      )}
    </div>
  );
}