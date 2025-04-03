/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"], // Ensures UI package is transpiled correctly
  // No need to redefine path aliases here — Next.js automatically uses tsconfig.json
};

export default nextConfig;
