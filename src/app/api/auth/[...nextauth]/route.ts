import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth, { type AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { db } from "@/server/db";

console.log("NextAuth is being initialized");
console.log("GITHUB_ID:", process.env.GITHUB_ID);
console.log("GITHUB_SECRET:", process.env.GITHUB_SECRET);

export const authOptions: AuthOptions = {
  // 使用 adapter to connect NextAuth with Drizzle ORM.
  // 作用是将 NextAuth 的用户、会话等数据存储在 Drizzle ORM 管理的数据库中。否则，这些 JWT 会被暴露在客户端 cookies 中。
  adapter: DrizzleAdapter(db),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      httpOptions:{
        timeout: 10000, // Set a timeout of 10 seconds for HTTP requests
      }
    }),
    // ...add more providers here
  ],
};

// Create handler with named exports for HTTP methods
const handler = NextAuth(authOptions);

export {
    handler as DELETE,
    handler as GET,
    handler as HEAD,
    handler as OPTIONS,
    handler as PATCH,
    handler as POST,
    handler as PUT
};

