import { drizzle } from "drizzle-orm/postgres-js";
export * as schema from "./schema"; // Export all schema definitions

import postgres from "postgres";

const queryClient = postgres(process.env.DATABASE_URL!);

const db = drizzle(queryClient);

export { db, queryClient }; // Export the db and queryClient for use in other parts of the application
