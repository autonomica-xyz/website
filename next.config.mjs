/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@leads/supabase-backend"],
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: "/distributed-gpu", destination: "/sparehour", permanent: true },
      { source: "/moonshift", destination: "/sparehour", permanent: true },
    ]
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
