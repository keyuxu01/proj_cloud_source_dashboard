// Do trpc api route
import { getServerSession } from "@/server/auth";
import { initTRPC, TRPCError } from "@trpc/server";


const createTRPCContext = async () => {
  const session = await getServerSession();

  console.log("Session in tRPC context:", session);

  if(!session?.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'You must be logged in to access this resource.',
    })
  }

  return {
    session,
  };
}

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<typeof createTRPCContext>().create();

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
const router = t.router;

// middleware to check if user is authenticated
const isAuthenticated = t.middleware(async ({ ctx, next }) => {
  // do date now
  const start = Date.now();
  const { session } = ctx;
  console.log("Session in isAuthenticated middleware:", session);
  if (!session?.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'You must be logged in to access this resource.',
    });
  }
  const result = await next();
  // log the time taken for the middleware
  const end = Date.now();
  console.log(`isAuthenticated middleware took ${end - start}ms`);
  return result;
});


// register the isAuthenticated middleware
const protectedProcedure = t.procedure.use(isAuthenticated);


// test router
const testRouter = router({
  hello: protectedProcedure.query( async({ctx}) => {
    const { session } = ctx;

    console.log("Session in hello query:", session);

    return "Hello from tRPC!";
  }),
});

type TestRouter = typeof testRouter;

export { createTRPCContext, testRouter };
export type { TestRouter };

