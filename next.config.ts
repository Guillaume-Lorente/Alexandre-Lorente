import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (multiple lockfiles exist on the
  // machine, which otherwise makes Next infer the wrong root).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
