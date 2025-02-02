/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    instrumentationHook: false,
  },
  reactStrictMode: true,  // Set to true to get more detailed error messages
};
