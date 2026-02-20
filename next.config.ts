import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'ezymemo.com',
      },
      {
        protocol: 'https',
        hostname: 'bitcommerz.com',
      },
      {
        protocol: 'https',
        hostname: 'exportbangladesh.org',
      },
      {
        protocol: 'https',
        hostname: 'gadgetandgear.com',
      },
    ],
  },
}

export default nextConfig