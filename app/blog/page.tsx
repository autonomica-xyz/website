import Link from "next/link"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import ImageWithFallback from "@/components/image-with-fallback"
import SiteNav from "@/components/site-nav"
import SiteFooter from "@/components/site-footer"

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
    return []
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

      <SiteNav currentPage="blog" />

      {/* Blog Header */}
      <section className="relative z-10 container mx-auto pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono font-medium text-xs tracking-[0.2em] text-lime-400">
              [LOG]
            </span>
            <span className="font-mono font-medium text-xs tracking-[0.2em] uppercase text-neutral-400">
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
                            className="font-mono font-medium text-[11px] tracking-[0.15em] uppercase text-neutral-400"
                          >
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </time>
                          <span className="text-neutral-500">/</span>
                          <span className="font-mono font-medium text-[11px] tracking-[0.15em] uppercase text-neutral-400">
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
                              className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase px-2 py-1 rounded border border-white/[0.06] text-neutral-400"
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
                <p className="text-neutral-400 font-mono font-medium text-sm">
                  No transmissions found.
                </p>
                <p className="text-neutral-500 font-mono font-medium text-xs mt-2">
                  Check back soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
