
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { type TestRouter } from "./trpc";
const TRPC_CLIENT = createTRPCClient<TestRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
      // You can pass any HTTP headers you wish here
      async headers() {
        return {
          // Example: Add an authorization header
        };
      },
    }),
  ],
});

export { TRPC_CLIENT };
