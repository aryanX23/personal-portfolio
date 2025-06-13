import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // via.placeholder.com removed as local SVGs are now used for placeholders
      // Add other domains here if needed in the future
    ],
  },
  /* config options here */
};

export default nextConfig;
