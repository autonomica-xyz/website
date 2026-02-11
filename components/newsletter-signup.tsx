"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
        // Track successful newsletter signup
        trackEvent("newsletter_signup", {
          category: "engagement",
          label: "waitlist",
        })

        toast({
          title: "Success!",
          description: result.message,
          variant: "default",
        })
        setEmail("")
      } else {
        // Track failed signup attempt
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
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="bg-gray-800 border-gray-700 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button
          type="submit"
          disabled={isPending}
          className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Joining...
            </>
          ) : (
            "Join Waitlist"
          )}
        </Button>
      </div>
    </form>
  )
}
