"use server"

import { createClient } from "@supabase/supabase-js"
import { revalidatePath } from "next/cache"

// Initialize Supabase client with environment variables
const supabaseUrl = process.env.LEADS_SUPABASE_URL!
const supabaseKey = process.env.LEADS_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  if (!email || typeof email !== "string") {
    return {
      success: false,
      message: "Please provide a valid email address.",
    }
  }

  try {
    // Insert the lead into the leads table
    const { error } = await supabase.from("leads").insert([
      {
        site_id: "autonomica",
        contact_type: "email",
        contact_value: email.trim(),
        metadata: {},
      },
    ])

    if (error) {
      // Handle unique constraint violation
      if (error.code === "23505") {
        return {
          success: true,
          message: "You're already subscribed! Thank you for your interest.",
        }
      }

      throw error
    }

    revalidatePath("/")
    return {
      success: true,
      message: "Thank you for subscribing! We'll keep you updated on our progress.",
    }
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
