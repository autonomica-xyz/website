import { turnstileToken } from "./turnstile"

// Shared leads collector (Cloudflare Worker + D1, leads-collector repo). Public URL, no secrets.
// Called from the browser so its per-IP rate limit counts visitors, not Vercel servers.
const LEADS_ENDPOINT = "https://leads.aljaz-c36.workers.dev"

export async function submitLead(lead: {
  siteId: string
  contactType?: string
  contactValue: string
  metadata?: Record<string, unknown>
}) {
  const res = await fetch(LEADS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...lead, turnstileToken: await turnstileToken() }),
  })
  const body = await res.json().catch(() => null)
  if (res.ok) return { status: body?.status === "duplicate" ? "duplicate" : "ok" } as const
  return { status: "error", message: String(body?.message ?? res.statusText) } as const
}
