import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  /*
   * Next.js 16 runs Turbopack by default. The old webpack `resolve.fallback`
   * config is not valid in Turbopack mode. Turbopack already polyfills
   * Node built-ins (fs, path, crypto) for browser bundles automatically,
   * so no manual alias is needed. An explicit turbopack block silences the
   * "webpack config without turbopack config" startup error.
   */
  turbopack: {},
};

export default nextConfig;
