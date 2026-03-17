import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nikah-match-mvp',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
