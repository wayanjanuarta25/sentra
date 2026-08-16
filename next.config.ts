import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'inalabs.id',
        pathname: '/umkm/**',
      },
      {
        protocol: 'https',
        hostname: 'inalabs.id',
        pathname: '/umkm/**',
      },
    ],
  },
};

export default nextConfig;
