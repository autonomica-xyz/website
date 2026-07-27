"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import NavButton from "@/components/nav-button"

const defaultLinks = [
  { href: "/mission", label: "Mission" },
  { href: "/systems", label: "Systems" },
  { href: "/blog", label: "Blog" },
  { href: "https://github.com/autonomica-xyz", label: "Code", external: true },
] as const

const homeLinks = [
  { href: "/#lab", label: "Thesis" },
  { href: "/#applied", label: "Work" },
  { href: "/#experiment", label: "Experiment" },
  { href: "/blog", label: "Blog" },
] as const

export default function SiteNav({
  currentPage,
  variant = "default",
}: {
  currentPage?: string
  variant?: "default" | "home"
}) {
  const navLinks = variant === "home" ? homeLinks : defaultLinks
  const ctaHref = variant === "home" ? "/#work-with-us" : "/#work-with-us"
  const ctaLabel = variant === "home" ? "Work with us" : "Enter"

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04] bg-[#07080a]/88 backdrop-blur-xl">
      <div className="container mx-auto flex max-w-[1180px] items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8f542] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c8f542]" />
          </span>
          <span className="font-mono text-sm font-medium uppercase tracking-[0.15em]">
            Autonomica
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label, ...rest }) => (
            <Link
              key={href}
              href={href}
              {...("external" in rest && rest.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`font-mono text-xs font-medium uppercase tracking-[0.1em] transition-colors ${
                currentPage === label.toLowerCase()
                  ? "text-[#ece8df]"
                  : "text-[#b4bac4] hover:text-[#ece8df]"
              }`}
            >
              {label}
            </Link>
          ))}
          <NavButton
            eventName="join_waitlist_click"
            eventCategory="navigation"
            className="h-auto rounded bg-[#c8f542] px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.1em] text-[#0a0c08] hover:brightness-110"
            href={ctaHref}
          >
            {ctaLabel}
            <ArrowRight className="ml-1.5 h-3 w-3" />
          </NavButton>
        </div>
        <a
          href={ctaHref}
          className="rounded bg-[#c8f542] px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-[#0a0c08] md:hidden"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}
