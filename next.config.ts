import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The portfolio uses local, pre-sized static files. Serving them directly
  // keeps development and Netlify independent from Cloudflare Images bindings.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
