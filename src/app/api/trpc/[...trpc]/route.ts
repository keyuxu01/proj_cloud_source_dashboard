import { appRouter, createTRPCContext } from "@/server/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { NextRequest } from "next/server";

// tRPC API handler
const trpcHandler = (req: NextRequest) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });
};

export {
  trpcHandler as DELETE,
  trpcHandler as GET,
  trpcHandler as HEAD,
  trpcHandler as OPTIONS,
  trpcHandler as PATCH,
  trpcHandler as POST,
  trpcHandler as PUT,
};
