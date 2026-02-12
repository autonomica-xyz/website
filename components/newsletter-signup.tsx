"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Loader2 } from "lucide-react"
import { subscribeToNewsletter } from "@/app/actions/newsletter"
import { useToast } from "@/hooks/use-toast"
import { trackEvent } from "@/lib/analytics"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    startTransition(async () => {
      const result = await subscribeToNewsletter(new FormData(e.target as HTMLFormElement))

      if (result.success) {
        trackEvent("newsletter_signup", {
          category: "engagement",
          label: "waitlist",
        })

        toast({
          title: "You're in.",
          description: result.message,
          variant: "default",
        })
        setEmail("")
      } else {
        trackEvent("newsletter_signup_error", {
          category: "error",
          label: result.message,
        })

        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded px-4 py-3 text-sm text-[#f0ece4] placeholder:text-neutral-400 font-mono focus:outline-none focus:border-lime-400/40 focus:ring-1 focus:ring-lime-400/20 transition-all"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-lime-400 text-[#050505] hover:bg-lime-300 font-mono font-medium text-xs tracking-[0.1em] uppercase px-6 py-3 rounded font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              Joining...
            </>
          ) : (
            "Join Waitlist"
          )}
        </button>
      </div>
    </form>
  )
}
