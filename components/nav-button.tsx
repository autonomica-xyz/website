"use client"

import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"
import type { ReactNode } from "react"

interface NavButtonProps {
  children: ReactNode
  href?: string
  variant?: "default" | "outline" | "ghost"
  className?: string
  eventName: string
  eventCategory: string
}

export default function NavButton({
  children,
  href,
  variant = "default",
  className = "",
  eventName,
  eventCategory,
}: NavButtonProps) {
  const handleClick = () => {
    trackEvent(eventName, {
      category: eventCategory,
      label: typeof children === "string" ? children : eventName,
    })
  }

  if (href) {
    return (
      <Button variant={variant as any} className={className} onClick={handleClick} asChild>
        <a href={href}>{children}</a>
      </Button>
    )
  }

  return (
    <Button variant={variant as any} className={className} onClick={handleClick}>
      {children}
    </Button>
  )
}
