/**
 * General Router
 *
 * Contains general-purpose and testing procedures
 */

import { z } from "zod";
import { protectedProcedure, publicProcedure, router } from "../trpc";

export const generalRouter = router({
  /**
   * Hello endpoint (protected)
   */
  hello: protectedProcedure.query(async ({ ctx }) => {
    const { session } = ctx;

    console.log("Session in hello query:", session);

    return `Hello from tRPC, ${session.user?.name || "User"}!`;
  }),

  /**
   * Public health check
   */
  health: publicProcedure.query(() => {
    return {
      status: "ok",
      timestamp: new Date().toISOString(),
      message: "tRPC server is running",
    };
  }),

  /**
   * Echo endpoint for testing
   */
  echo: protectedProcedure
    .input(
      z.object({
        message: z.string(),
      })
    )
    .query(({ input, ctx }) => {
      return {
        echo: input.message,
        user: ctx.session.user?.name,
        timestamp: new Date().toISOString(),
      };
    }),
});
