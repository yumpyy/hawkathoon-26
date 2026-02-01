import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // images: { unoptimized: true } // Usually needed for static export if using Next Image, but we will use standard img tags or manage it carefully. 
  // The guide says "no fetch at runtime" and "static export".
};

export default nextConfig;
