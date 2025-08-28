import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['openai'],
  },
}

module.exports = nextConfig