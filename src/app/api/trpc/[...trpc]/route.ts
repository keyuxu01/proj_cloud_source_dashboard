import { testRouter } from "@/utils";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { NextRequest } from "next/server";

// add adapter to the tRPC handler
const trpcHandler = (req: NextRequest) => {
  // Handle the request with the tRPC router
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: testRouter,
    createContext: () => ({}), // Context can be used to pass data to procedures
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
