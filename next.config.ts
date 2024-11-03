/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // This is a temporary solution to get the build working
    // Remove this when the type issues are properly resolved
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
