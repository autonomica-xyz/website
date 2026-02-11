import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import { Brain, ArrowLeft, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import ImageWithFallback from "@/components/image-with-fallback"
import { remark } from "remark"
import html from "remark-html"
import remarkGfm from "remark-gfm"
import "../blog.css"

// Get a specific blog post by slug
async function getBlogPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), "content/blog")
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  // Check if the file exists
  if (!fs.existsSync(fullPath)) {
    return null
  }

  // Read the file
  const fileContents = fs.readFileSync(fullPath, "utf8")

  // Parse the frontmatter
  const { data, content } = matter(fileContents)

  // Convert markdown to HTML with GitHub Flavored Markdown support
  const processedContent = await remark()
    .use(html, { sanitize: false }) // Don't sanitize to allow custom HTML
    .use(remarkGfm) // Add GitHub Flavored Markdown support
    .process(content)

  const contentHtml = processedContent.toString()

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
    contentHtml,
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content/blog")

  // Check if directory exists
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

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

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

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

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

      {/* Back to Blog */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Blog Post Header */}
      <header className="container mx-auto px-4 pb-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-400 mb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center flex-wrap gap-2">
                <Tag className="h-4 w-4 mr-1" />
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {post.image && post.image.trim() !== "" && (
            <div className="mb-10 rounded-xl overflow-hidden aspect-video bg-gray-900">
              <ImageWithFallback
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </header>

      {/* Blog Post Content */}
      <article className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto markdown-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>

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
