import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

const UsersTable = pgTable("users", {
  id: integer()
    // Define the primary key for the table
    .primaryKey()
    // Use generatedAlwaysAsIdentity to help with auto-incrementing IDs
    .generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 })
    .notNull()
    .unique(),
});

export { UsersTable };
