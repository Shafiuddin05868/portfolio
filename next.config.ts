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
    ],
  },
}

export default nextConfig