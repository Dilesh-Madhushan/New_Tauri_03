const nextConfig = {
  experimental: {
    appDir: true, // Keep this if you're using the app directory feature
  },
  output: 'export', // Add this to enable static export
  exportTrailingSlash: true, // Ensure URLs have trailing slashes
  images: {
    unoptimized: true, // Optional: to avoid issues with Next.js Image optimization during export
  },
  // Other Next.js settings...
};

export default nextConfig;
