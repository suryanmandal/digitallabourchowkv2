import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rnjblepvbfdacbnctyaw.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/about-us/core-values',
        destination: '/about-us/values',
        permanent: true,
      },
      {
        source: '/about-us/awards-recognition',
        destination: '/awards-recognition',
        permanent: true,
      },
      {
        source: '/about-us/national-footprint',
        destination: '/about-us/footprint',
        permanent: true,
      },
      {
        source: '/about-us/media-coverage',
        destination: '/media-coverage',
        permanent: true,
      },
      {
        source: '/about-us/institutional-partners',
        destination: '/partnerships',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
