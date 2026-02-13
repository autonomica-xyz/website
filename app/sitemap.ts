import type { MetadataRoute } from "next"
import fs from "fs"
import path from "path"

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URLs
  const baseUrl = "https://autonomica.xyz"

  // Static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/mission`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/systems`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ]

  // Dynamic blog post routes
  const postsDirectory = path.join(process.cwd(), "content/blog")

  try {
    if (fs.existsSync(postsDirectory)) {
      const fileNames = fs.readdirSync(postsDirectory)

      const blogPosts = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
          const slug = fileName.replace(/\.md$/, "")
          const fullPath = path.join(postsDirectory, fileName)

          // Get the file's last modified time
          const stats = fs.statSync(fullPath)
          const lastModified = stats.mtime

          return {
            url: `${baseUrl}/blog/${slug}`,
            lastModified,
            changeFrequency: "monthly" as const,
            priority: 0.7,
          }
        })

      return [...routes, ...blogPosts]
    }
  } catch (error) {
    console.error("Error generating sitemap:", error)
  }

  return routes
}
