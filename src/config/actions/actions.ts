"use server"

import { AuthError } from "next-auth"
import { signIn } from "../auth"

export const login = async (phone: string, code: string, callbackUrl?: string | null) => {
  try {
    await signIn("phone", { phone, code, redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT })
  } catch (error) {
    console.error("phone login: ", error)
    if (error instanceof AuthError) {
      return { error: "error", message: error.message, status: 401 }
    }

    throw error
  }
}