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
import SiteNav from "@/components/site-nav"
import SiteFooter from "@/components/site-footer"

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

      <SiteNav currentPage="blog" />

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

      <SiteFooter />
    </div>
  )
}
