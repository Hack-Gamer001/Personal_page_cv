import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['prod.spline.design'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prod.spline.design',
        pathname: '**',
      },
    ],
  },
  // Configuración para Webpack (solo aplica cuando no usas Turbopack)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
  // Nueva forma de especificar paquetes externos
  serverExternalPackages: ['@splinetool/runtime'],
};

export default nextConfig;