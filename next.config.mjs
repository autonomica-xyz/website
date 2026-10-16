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
      // Inbound links to the pre-rename screenshot assets keep working.
      {
        source: "/distributed-gpu/screenshots/controller-dashboard.png",
        destination: "/sparehour/screenshots/controller-dashboard.png",
        permanent: true,
      },
      {
        source: "/distributed-gpu/screenshots/worker-dashboard.png",
        destination: "/sparehour/screenshots/worker-dashboard.png",
        permanent: true,
      },
    ]
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
