import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      poll: 100,
      aggregateTimeout: 0,
    };
    return config;
  },
};

export default nextConfig;
