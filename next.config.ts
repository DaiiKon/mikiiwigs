import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // MikiiWigs is a single informational page, so Netlify can host it as
  // static files without a server or paid runtime.
  output: "export",
  // The portfolio uses local, pre-sized static files. Serving them directly
  // keeps development and Netlify independent from Cloudflare Images bindings.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
