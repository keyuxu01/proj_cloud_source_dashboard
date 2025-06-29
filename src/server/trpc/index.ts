/**
 * tRPC Server Entry Point
 * 
 * Main exports for the tRPC server configuration
 */

// Export the main router and types
export { appRouter, createTRPCContext } from "./root";
export type { AppRouter } from "./root";

// Export core tRPC utilities (if needed elsewhere)
export { protectedProcedure, publicProcedure, router } from "./trpc";
export type { TRPCContext } from "./trpc";

// Export individual routers (if needed for testing or separate usage)
export { generalRouter } from "./routers/general";
export { userRouter } from "./routers/user";

