import { submitLead } from "@/lib/leads"

export async function submitContact(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim()
  const company = String(formData.get("company") ?? "").trim()
  const engagement = String(formData.get("engagement") ?? "").trim()
  const batchShape = String(formData.get("batchShape") ?? "").trim()
  const agentFunction = String(formData.get("agentFunction") ?? "").trim()
  const details = String(formData.get("details") ?? "").trim()

  if (!email || !email.includes("@")) {
    return { success: false, message: "Please provide a valid work email." }
  }

  if (!engagement) {
    return { success: false, message: "Please choose how you want to plug in." }
  }

  if (!details) {
    return {
      success: false,
      message: "Tell us a bit about the function or workload.",
    }
  }

  try {
    const result = await submitLead({
      siteId: "autonomica",
      contactType: "email",
      contactValue: email,
      metadata: {
        source: "homepage-contact",
        company: company || null,
        engagement,
        batchShape: batchShape || null,
        agentFunction: agentFunction || null,
        details,
      },
    })

    if (result.status === "error") {
      throw new Error(result.message)
    }

    return {
      success: true,
      message:
        result.status === "duplicate"
          ? "We already have this email — if something changed, reply from the same address and we’ll pick it up."
          : "Got it. We’ll reply if there’s a fit.",
    }
  } catch (error) {
    console.error("Error submitting contact:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
