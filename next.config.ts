import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prod.spline.design',
        pathname: '**',
      },
    ],
  },
  serverExternalPackages: ['@splinetool/runtime'],
};

export default nextConfig;
