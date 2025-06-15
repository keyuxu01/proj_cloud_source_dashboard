import * as dotenv from "dotenv";
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

// Determine which env file to load based on NODE_ENV
const nodeEnv = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${nodeEnv}` });

// log with blue color
console.log = (message: string) => {
  const blue = "\x1b[34m";
  const reset = "\x1b[0m";
  process.stdout.write(`${blue}${message}${reset}\n`);
};
// Log the environment and database configuration
console.log(`Loading environment from .env.${nodeEnv}`);
console.log(`DB_HOST: ${process.env.DB_HOST}, DB_NAME: ${process.env.DB_NAME}`);
// rest the log function to default
console.log = console.log.bind(console);

export default defineConfig({
  // Specify the output directory for the generated files
  out: "./drizzle",
  // Specify the path to the schema file
  schema: "./src/server/db/schema.ts",
  // Specify the database dialect and credentials
  dialect: "postgresql",
  // Enable verbose logging for debugging
  verbose: true,
  // Enable strict mode to ensure type safety
  strict: true,
  // how to connect to the database
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    // host: process.env.DB_HOST!,
    // port: parseInt(process.env.DB_PORT!),
    // user: process.env.DB_USER!,
    // password: process.env.DB_PASSWORD!,
    // database: process.env.DB_NAME!,
    // ssl: {
    //   ca: process.env.DB_SSL_CA,
    // },
  },
});
