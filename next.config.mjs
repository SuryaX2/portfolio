/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,  // ✅ Disable Next.js image optimization
  },
};

export default nextConfig;
