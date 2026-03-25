"use server"

import { submitLead } from "@leads/supabase-backend"
import { revalidatePath } from "next/cache"

const supabaseUrl = process.env.LEADS_SUPABASE_URL!
const supabaseKey = process.env.LEADS_SUPABASE_ANON_KEY!

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  if (!email || typeof email !== "string") {
    return {
      success: false,
      message: "Please provide a valid email address.",
    }
  }

  try {
    const result = await submitLead(supabaseUrl, supabaseKey, {
      siteId: "autonomica",
      contactValue: email,
    })

    if (result.status === "error") {
      throw new Error(result.message)
    }

    revalidatePath("/")
    return {
      success: true,
      message:
        result.status === "duplicate"
          ? "You're already subscribed! Thank you for your interest."
          : "Thank you for subscribing! We'll keep you updated on our progress.",
    }
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
