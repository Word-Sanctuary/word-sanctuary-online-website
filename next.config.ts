import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable modern image formats
    formats: ['image/webp', 'image/avif'],
    // Enable image optimization
    unoptimized: false,
    // Define device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Define image sizes for different breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable compression
  compress: true,
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    webpackBuildWorker: true,
  },
};

export default nextConfig;
