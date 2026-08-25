import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.16.1.108"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
