const nextConfig = {
  trailingSlash: true, // Ensure this is set for static export
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Optional: to avoid issues with Image optimization during export
  },
  // Other configurations...
};

export default nextConfig;
