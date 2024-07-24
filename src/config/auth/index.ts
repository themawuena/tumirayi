import NextAuth, { AuthError, CredentialsSignin, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import user from "@/API/repositories/user";
import { API_ENDPOINT } from "@/API/api/endpoints";
import axios from "axios";

export class InvalidLoginError extends CredentialsSignin {
  code = "invalid_credentials";
}

// Auth configuration
export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
    newUser: "/dashboard",
    signOut: "/auth/signin",
  },
  providers: [
    Credentials({
      credentials: {
        email: { type: "string" },
        password: { type: "string" },
      },
      async authorize(credentials, req): Promise<User | null> {
        try {
          const response = await user.login({
            email: credentials?.email,
            password: credentials?.password,
          });
          return response?.data;
        } catch (err: any) {
          const errorResponse = err.response.data;
          const errMsg =
            errorResponse?.error ??
            errorResponse?.message ??
            "Unknown error occurred";

          throw new InvalidLoginError(errMsg);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (user instanceof AuthError) {
        throw new Error("custom error to the client");
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // store the internal ID in token.id
        token.userId = user.merchant_id; // store the merchant ID in token.userId
      }
      return token;
    },
    async session({ session, token }) {
      session.id = token.id;
      session.userId = token.userId; // assign the stored merchant ID to session.userId
      session.user = token.user; // pass the user object to the session
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
