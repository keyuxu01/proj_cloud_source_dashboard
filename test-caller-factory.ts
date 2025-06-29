// Test createCallerFactory availability
import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

// Test if createCallerFactory exists
console.log("t.createCallerFactory:", typeof t.createCallerFactory);
console.log("Available methods:", Object.keys(t));
