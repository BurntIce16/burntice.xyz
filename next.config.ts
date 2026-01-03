import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const baseConfig: NextConfig = {
  /* config options here */
};

const nextConfig = (phase: string): NextConfig => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // Keep dev dynamic; only export statically for builds.
    return baseConfig;
  }

  return {
    ...baseConfig,
    output: "export",
  };
};

export default nextConfig;
