import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f0ece4] relative flex flex-col">
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
      <nav className="relative z-50 backdrop-blur-xl bg-[#050505]/80 border-b border-white/[0.04]">
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
              className="font-mono text-xs tracking-[0.1em] uppercase text-neutral-500 hover:text-[#f0ece4] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#mission"
              className="font-mono text-xs tracking-[0.1em] uppercase text-neutral-500 hover:text-[#f0ece4] transition-colors"
            >
              Mission
            </Link>
            <Link
              href="/#systems"
              className="font-mono text-xs tracking-[0.1em] uppercase text-neutral-500 hover:text-[#f0ece4] transition-colors"
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
        </div>
      </nav>

      {/* Not Found Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            {/* Error code */}
            <div className="font-mono text-xs tracking-[0.2em] text-lime-400 mb-6">
              [ERR] 404
            </div>

            <h1 className="font-display text-4xl md:text-5xl leading-[1.05] mb-6">
              Signal
              <br />
              <em className="italic text-neutral-500">not found.</em>
            </h1>

            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
              The transmission you&apos;re looking for doesn&apos;t exist or has
              been moved.
            </p>

            {/* Boot log style message */}
            <div className="font-mono text-xs text-neutral-600 space-y-1 mb-10 text-left max-w-xs mx-auto">
              <p>&gt; SEARCHING ARCHIVES...</p>
              <p>&gt; NO MATCH FOUND</p>
              <p>
                &gt; SUGGESTION:{" "}
                <span className="text-neutral-400">RETURN TO INDEX</span>
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-lime-400 text-[#050505] hover:bg-lime-300 font-mono text-xs tracking-[0.1em] uppercase px-6 py-3 rounded font-semibold transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.04] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-400" />
              </span>
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-neutral-500">
                Autonomica
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="font-mono text-[10px] tracking-[0.1em] uppercase text-neutral-600 hover:text-[#f0ece4] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#mission"
                className="font-mono text-[10px] tracking-[0.1em] uppercase text-neutral-600 hover:text-[#f0ece4] transition-colors"
              >
                Mission
              </Link>
              <Link
                href="/#systems"
                className="font-mono text-[10px] tracking-[0.1em] uppercase text-neutral-600 hover:text-[#f0ece4] transition-colors"
              >
                Systems
              </Link>
              <Link
                href="/blog"
                className="font-mono text-[10px] tracking-[0.1em] uppercase text-neutral-600 hover:text-[#f0ece4] transition-colors"
              >
                Blog
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="https://x.com/AutonomicaAI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-[#f0ece4] transition-colors"
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
                className="text-neutral-600 hover:text-[#f0ece4] transition-colors"
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
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-neutral-700">
              &copy; {new Date().getFullYear()} Autonomica. All systems
              operational.
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
