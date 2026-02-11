import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { ArrowRight } from "lucide-react"
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
        url: "https://autonomica.ai/og-image.jpg",
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
    images: ["https://autonomica.ai/og-image.jpg"],
  },
}

function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "content/blog")

  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })

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

  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)
      const date = data.date ? new Date(data.date).toISOString() : new Date().toISOString()

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

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="min-h-screen bg-[#050505] text-[#f0ece4] relative">
      {/* Dot grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(180,255,57,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050505]/80 border-b border-white/[0.04]">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
            </span>
            <span className="font-mono text-sm tracking-[0.15em] uppercase">
              Autonomica
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-mono text-xs tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#mission"
              className="font-mono text-xs tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
            >
              Mission
            </Link>
            <Link
              href="/#systems"
              className="font-mono text-xs tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
            >
              Systems
            </Link>
            <Link
              href="/blog"
              className="font-mono text-xs tracking-[0.1em] uppercase text-[#f0ece4]"
            >
              Blog
            </Link>
          </div>
          <button className="md:hidden text-neutral-300 hover:text-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="3" y1="6" x2="17" y2="6" />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="14" x2="17" y2="14" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Blog Header */}
      <section className="relative z-10 container mx-auto pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs tracking-[0.2em] text-lime-400">
              [LOG]
            </span>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-400">
              Transmissions
            </span>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl mb-4">
            <em className="italic text-lime-400">Blog</em>
          </h1>
          <p className="text-lg text-neutral-300 leading-relaxed">
            Insights and updates from inside the experiment.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="relative z-10 container mx-auto pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0 border-t border-white/[0.06]">
            {posts.length > 0 ? (
              posts.map((post) => (
                <article
                  key={post.slug}
                  className="group border-b border-white/[0.06]"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block py-8 md:py-10"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Image */}
                      <div className="md:w-48 shrink-0 aspect-video md:aspect-square rounded overflow-hidden bg-white/[0.03]">
                        {post.image ? (
                          <ImageWithFallback
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-lime-400/30" />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-3">
                          <time
                            dateTime={post.date}
                            className="font-mono text-[10px] tracking-[0.15em] uppercase text-neutral-400"
                          >
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </time>
                          <span className="text-neutral-500">/</span>
                          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-neutral-400">
                            {post.author}
                          </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-display mb-3 group-hover:text-lime-400 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-neutral-300 text-sm leading-relaxed mb-4 line-clamp-2">
                          {post.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {post.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[10px] tracking-[0.1em] uppercase px-2 py-1 rounded border border-white/[0.06] text-neutral-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="hidden md:flex items-center shrink-0 text-neutral-400 group-hover:text-lime-400 transition-colors">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))
            ) : (
              <div className="text-center py-16">
                <p className="text-neutral-400 font-mono text-sm">
                  No transmissions found.
                </p>
                <p className="text-neutral-500 font-mono text-xs mt-2">
                  Check back soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.04] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-400" />
              </span>
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-neutral-400">
                Autonomica
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="font-mono text-[10px] tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#mission"
                className="font-mono text-[10px] tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
              >
                Mission
              </Link>
              <Link
                href="/#systems"
                className="font-mono text-[10px] tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
              >
                Systems
              </Link>
              <Link
                href="/blog"
                className="font-mono text-[10px] tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
              >
                Blog
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="https://x.com/AutonomicaAI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#f0ece4] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link
                href="https://github.com/autonomica-xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#f0ece4] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-neutral-500">
              &copy; {new Date().getFullYear()} Autonomica. All systems
              operational.
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
