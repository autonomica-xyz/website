import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import ImageWithFallback from "@/components/image-with-fallback"
import { remark } from "remark"
import html from "remark-html"
import remarkGfm from "remark-gfm"
import "../blog.css"

async function getBlogPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), "content/blog")
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(remarkGfm)
    .process(content)

  const contentHtml = processedContent.toString()
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
    contentHtml,
  }
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content/blog")

  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ""),
    }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: "Post Not Found - Autonomica Blog",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} - Autonomica Blog`,
    description: post.description,
    openGraph: {
      title: `${post.title} - Autonomica Blog`,
      description: post.description,
      url: `https://autonomica.ai/blog/${post.slug}`,
      siteName: "Autonomica",
      images: [
        {
          url: post.image || "https://autonomica.ai/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - Autonomica Blog`,
      description: post.description,
      creator: "@AutonomicaAI",
      images: [post.image || "https://autonomica.ai/og-image.jpg"],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

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
            <span className="font-mono font-medium text-sm tracking-[0.15em] uppercase">
              Autonomica
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="font-mono font-medium text-xs tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#mission"
              className="font-mono font-medium text-xs tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
            >
              Mission
            </Link>
            <Link
              href="/#systems"
              className="font-mono font-medium text-xs tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
            >
              Systems
            </Link>
            <Link
              href="/blog"
              className="font-mono font-medium text-xs tracking-[0.1em] uppercase text-[#f0ece4]"
            >
              Blog
            </Link>
          </div>
          <button className="md:hidden text-neutral-400 hover:text-white">
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

      {/* Back to Blog */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono font-medium text-xs tracking-[0.1em] uppercase text-neutral-400 hover:text-lime-400 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Blog Post Header */}
      <header className="relative z-10 container mx-auto px-4 pb-8">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
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
            <span className="text-neutral-400">/</span>
            <span className="font-mono font-medium text-[11px] tracking-[0.15em] uppercase text-neutral-400">
              {post.author}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            {post.title}
          </h1>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase px-2 py-1 rounded border border-white/[0.06] text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Featured Image */}
          {post.image && post.image.trim() !== "" && (
            <div className="mb-12 rounded overflow-hidden aspect-video bg-white/[0.03]">
              <ImageWithFallback
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-lime-400/20 via-white/5 to-transparent" />
        </div>
      </header>

      {/* Blog Post Content - renders trusted local markdown files */}
      <article className="relative z-10 container mx-auto px-4 pb-24">
        <div
          className="max-w-3xl mx-auto markdown-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.04] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-400" />
              </span>
              <span className="font-mono font-medium text-xs tracking-[0.15em] uppercase text-neutral-400">
                Autonomica
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#mission"
                className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
              >
                Mission
              </Link>
              <Link
                href="/#systems"
                className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
              >
                Systems
              </Link>
              <Link
                href="/blog"
                className="font-mono font-medium text-[11px] tracking-[0.1em] uppercase text-neutral-400 hover:text-[#f0ece4] transition-colors"
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
            <span className="font-mono font-medium text-[11px] tracking-[0.15em] uppercase text-neutral-500">
              &copy; {new Date().getFullYear()} Autonomica. All systems
              operational.
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
