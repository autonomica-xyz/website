/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@leads/supabase-backend"],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
