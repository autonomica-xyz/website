"use client"

import type React from "react"
import { useState, useTransition } from "react"
import { Loader2 } from "lucide-react"
import { submitContact } from "@/app/actions/contact"
import { useToast } from "@/hooks/use-toast"
import { trackEvent } from "@/lib/analytics"

const fieldClass =
  "w-full bg-[#07080a] border border-white/[0.08] rounded-md px-3 py-3 text-sm text-[#ece8df] placeholder:text-[#b4bac4]/70 font-body focus:outline-none focus:border-[#c8f542]/40 focus:ring-1 focus:ring-[#c8f542]/20 transition-all"

const labelClass =
  "grid gap-1.5 font-mono text-[11px] tracking-[0.1em] uppercase text-[#b4bac4]"

export default function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    startTransition(async () => {
      const result = await submitContact(formData)

      if (result.success) {
        trackEvent("contact_submit", {
          category: "engagement",
          label: String(formData.get("engagement") ?? "unknown"),
        })
        toast({
          title: "Sent.",
          description: result.message,
        })
        form.reset()
      } else {
        trackEvent("contact_submit_error", {
          category: "error",
          label: result.message,
        })
        toast({
          title: "Couldn’t send",
          description: result.message,
          variant: "destructive",
        })
      }
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-3.5 rounded-xl border border-white/[0.08] bg-[#0e1014] p-6"
    >
      <label className={labelClass}>
        Work email
        <input
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          className={fieldClass}
        />
      </label>

      <label className={labelClass}>
        Company / project
        <input
          type="text"
          name="company"
          placeholder="Optional"
          className={fieldClass}
        />
      </label>

      <label className={labelClass}>
        How do you want to plug in?
        <select name="engagement" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select
          </option>
          <option value="Custom agent creation & deployment">
            Custom agent creation & deployment
          </option>
          <option value="Distributed batch workload">
            Distributed batch workload
          </option>
          <option value="Research / learning conversation">
            Research / learning conversation
          </option>
          <option value="Unsure — point me">Unsure — point me</option>
        </select>
      </label>

      <label className={labelClass}>
        If agents — what function?
        <select name="agentFunction" defaultValue="" className={fieldClass}>
          <option value="">Optional</option>
          <option value="Landscape research">Landscape research</option>
          <option value="Competition monitoring">Competition monitoring</option>
          <option value="Content creation">Content creation</option>
          <option value="Website management">Website management</option>
          <option value="Other company function">Other company function</option>
        </select>
      </label>

      <label className={labelClass}>
        If batch — what shape?
        <select name="batchShape" defaultValue="" className={fieldClass}>
          <option value="">Optional</option>
          <option value="Transcription / speech">Transcription / speech</option>
          <option value="OCR / documents">OCR / documents</option>
          <option value="Image generation or manipulation">
            Image generation or manipulation
          </option>
          <option value="Other distributable AI work">
            Other distributable AI work
          </option>
        </select>
      </label>

      <label className={labelClass}>
        What should we know?
        <textarea
          name="details"
          required
          rows={4}
          placeholder="Volume, constraints, which function an agent should own…"
          className={`${fieldClass} min-h-[110px] resize-y`}
        />
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="mt-1 inline-flex items-center justify-center gap-2 rounded bg-[#c8f542] px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.1em] text-[#0a0c08] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? (
          <>
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            Sending…
          </>
        ) : (
          "Send"
        )}
      </button>
    </form>
  )
}
