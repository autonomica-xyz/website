import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import ImageWithFallback from "@/components/image-with-fallback"

export const metadata: Metadata = {
  title: "Autonomica Blog - Insights on AI-Driven Business",
  description:
    "Explore the latest insights, research, and updates on AI-driven business operations and autonomous companies.",
  openGraph: {
    title: "Autonomica Blog - Insights on AI-Driven Business",
    description:
      "Explore the latest insights, research, and updates on AI-driven business operations and autonomous companies.",
    url: "https://autonomica.ai/blog",
    siteName: "Autonomica",
    images: [
      {
        url: "https://autonomica.ai/og-image.jpg", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Autonomica Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autonomica Blog - Insights on AI-Driven Business",
    description:
      "Explore the latest insights, research, and updates on AI-driven business operations and autonomous companies.",
    creator: "@AutonomicaAI",
    images: ["https://autonomica.ai/og-image.jpg"], // Same as OG image
  },
}

// Function to get all blog posts
function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "content/blog")

  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })

    // Create a sample post if no posts exist
    const samplePost = `---
title: "Welcome to the Autonomica Blog"
description: "Introducing our blog where we'll share insights on AI-driven business operations."
date: "${new Date().toISOString()}"
author: "Autonomica Team"
image: "/images/blog/welcome-post.jpg"
tags: ["announcement", "ai", "business"]
---

# Welcome to the Autonomica Blog

This is where we'll share our journey of building the world's first fully AI-operated company. Stay tuned for insights, research findings, and updates on our progress.

## What to Expect

- Deep dives into AI technology
- Case studies on autonomous business operations
- Updates on our products and services
- Thought leadership on the future of work

We're excited to have you join us on this journey!
`
    fs.writeFileSync(path.join(postsDirectory, "welcome-post.md"), samplePost)
  }

  // Get all markdown files from the posts directory
  const fileNames = fs.readdirSync(postsDirectory)

  // Get the data from each file
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      // Remove ".md" from file name to get the slug
      const slug = fileName.replace(/\.md$/, "")

      // Read the markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")

      // Parse the frontmatter
      const { data, content } = matter(fileContents)

      // Ensure date is in the correct format
      const date = data.date ? new Date(data.date).toISOString() : new Date().toISOString()

      // Return the combined data
      return {
        slug,
        ...(data as {
          title: string
          description: string
          date: string
          author: string
          image: string
          tags: string[]
        }),
        date,
        content,
      }
    })

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-purple-500" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Autonomica
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/#mission" className="text-gray-300 hover:text-white transition-colors">
            Mission
          </Link>
          <Link href="/#products" className="text-gray-300 hover:text-white transition-colors">
            Products
          </Link>
          <Link href="/blog" className="text-white font-medium transition-colors">
            Blog
          </Link>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </nav>

      {/* Blog Header */}
      <section className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Autonomica{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Insights, research, and updates on our journey to build the world's first fully AI-operated company.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container mx-auto pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-12">
            {posts.length > 0 ? (
              posts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="mb-6 overflow-hidden rounded-xl aspect-video bg-gray-900 relative">
                      {post.image ? (
                        <ImageWithFallback
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/40 to-cyan-900/40">
                          <Brain className="h-16 w-16 text-purple-500/50" />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <time dateTime={post.date} className="text-sm text-gray-400">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span className="text-gray-500">•</span>
                        <span className="text-sm text-gray-400">{post.author}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-300 mb-4">{post.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags?.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </article>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 mb-6">No blog posts found.</p>
                <p className="text-gray-500">Check back soon for our first post!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Brain className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                Autonomica
              </span>
            </div>
            <div className="flex gap-8 mb-6 md:mb-0">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/#mission" className="text-gray-400 hover:text-white transition-colors">
                Mission
              </Link>
              <Link href="/#products" className="text-gray-400 hover:text-white transition-colors">
                Products
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" asChild>
                <Link href="https://x.com/AutonomicaAI" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter/X</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" asChild>
                <Link href="https://github.com/autonomica-xyz" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Autonomica. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
