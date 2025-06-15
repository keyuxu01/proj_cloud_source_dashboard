import NextAuth from "next-auth";

import { AUTH_OPTIONS } from "@/server/auth";

// Create handler with named exports for HTTP methods
const handler = NextAuth(AUTH_OPTIONS);

export {
  handler as DELETE,
  handler as GET,
  handler as HEAD,
  handler as OPTIONS,
  handler as PATCH,
  handler as POST,
  handler as PUT,
};
