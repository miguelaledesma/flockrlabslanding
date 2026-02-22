/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for smaller Docker images and better memory efficiency
  output: 'standalone',
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  // Reduce memory usage in production
  swcMinify: true,
  
  // Compress output
  compress: true,
  
  // Optimize production builds
  productionBrowserSourceMaps: false,
  
  // Reduce memory footprint
  // Note: optimizeCss requires critters package, removed to avoid build errors
  
  // Optimize bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : false,
  },
  
  // Reduce memory usage in development
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
