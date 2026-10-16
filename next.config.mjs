/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@leads/supabase-backend"],
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: "/distributed-gpu", destination: "/moonshift", permanent: true },
    ]
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
