// components/SplineTarjeta1.tsx
'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Import dinámico correcto sin rutas inválidas
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

type Props = {
  className?: string;
};

export default function SplineTarjeta1({ className = '' }: Props) {
  return (
    <div className={`relative ${className}`}>
      <Spline
        scene="https://prod.spline.design/SGvePxry1vkq5kYc/scene.splinecode"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
