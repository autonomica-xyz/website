"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import NavButton from "@/components/nav-button"

const navLinks = [
  { href: "/mission", label: "Mission" },
  { href: "/systems", label: "Systems" },
  { href: "/blog", label: "Blog" },
  { href: "https://github.com/autonomica-xyz", label: "Code", external: true },
] as const

export default function SiteNav({ currentPage }: { currentPage?: string }) {
  return (
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
          {navLinks.map(({ href, label, ...rest }) => (
            <Link
              key={href}
              href={href}
              {...("external" in rest && rest.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`font-mono font-medium text-xs tracking-[0.1em] uppercase transition-colors ${
                currentPage === label.toLowerCase()
                  ? "text-[#f0ece4]"
                  : "text-neutral-400 hover:text-[#f0ece4]"
              }`}
            >
              {label}
            </Link>
          ))}
          <NavButton
            eventName="join_waitlist_click"
            eventCategory="navigation"
            className="bg-lime-400 text-[#050505] hover:bg-lime-300 font-mono font-medium text-xs tracking-[0.1em] uppercase px-4 py-2 h-auto rounded"
            href="/#join"
          >
            Enter
            <ArrowRight className="ml-1.5 h-3 w-3" />
          </NavButton>
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
  )
}
