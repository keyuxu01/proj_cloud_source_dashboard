/**
 * Main tRPC Router
 *
 * Combines all sub-routers into the main application router
 */

import { generalRouter } from "./routers/general";
import { userRouter } from "./routers/user";
import { router } from "./trpc";

/**
 * Main application router
 * Add new routers here as the application grows
 */
export const appRouter = router({
  // General endpoints
  general: generalRouter,

  // User-related endpoints
  user: userRouter,

  // Backward compatibility - keep the old hello endpoint at root level
  hello: generalRouter.hello,
});

// Export the router type for client-side usage
export type AppRouter = typeof appRouter;

// Re-export context creation for API routes
export { createTRPCContext } from "./trpc";
