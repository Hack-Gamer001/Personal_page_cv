// components/SplineTarjeta1.tsx
import React from 'react';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

type Props = {
  className?: string;
};
export default function SplineTarjeta1({ className = '' }: Props) {
  return (
    <Spline
      scene="https://prod.spline.design/SGvePxry1vkq5kYc/scene.splinecode"
      className={className}
    />
  );
}

