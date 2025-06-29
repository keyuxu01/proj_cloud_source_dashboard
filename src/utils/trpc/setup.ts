import { type AppRouter } from "@/server/trpc";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { createTRPCContext } from "@trpc/tanstack-react-query";

// Create tRPC context for React Query integration
const { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<AppRouter>();

// Create vanilla tRPC client (for server-side usage)
export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "/api/trpc",
      // You can pass any HTTP headers you wish here
      async headers() {
        return {
          // Add any headers if needed
        };
      },
    }),
  ],
});

// Export the React hooks and provider
export { TRPCProvider, useTRPC, useTRPCClient };
