"use server";

import { InvalidLoginError, signIn } from "@/config/auth";
import { AuthError } from "next-auth";

export async function authenticate(email: string, password: string) {
  try {
    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    return response;
  } catch (error: any) {
    if (error.cause.err instanceof InvalidLoginError) {
      return { error: "Incorrect username or password" };
    } else {
      throw new Error("Failed to authenticate");
    }
  }
}
