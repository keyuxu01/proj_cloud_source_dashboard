const { drizzle } = require('drizzle-orm/postgres-js');
const postgres = require('postgres');
const dotenv = require('dotenv');

// Load environment variables from .env.development
dotenv.config({ path: '.env.development' });

console.log('Database URL:', process.env.DATABASE_URL);

const queryClient = postgres(process.env.DATABASE_URL);
const db = drizzle(queryClient);

async function checkUserTable() {
    try {
        // Check current user table structure
        const result = await queryClient`
      SELECT column_name, data_type, is_nullable, column_default 
      FROM information_schema.columns 
      WHERE table_name = 'user' 
      ORDER BY ordinal_position;
    `;

        console.log('Current user table structure:');
        console.table(result);

        // Check if createAt column exists and has default
        const createAtColumn = result.find(col => col.column_name === 'createAt');

        if (!createAtColumn) {
            console.log('❌ createAt column is missing');
        } else if (!createAtColumn.column_default) {
            console.log('❌ createAt column exists but has no default value');
        } else {
            console.log('✅ createAt column exists with default value');
        }

        // Try to insert a test user to see what happens
        console.log('\nAttempting test insert...');
        const testResult = await queryClient`
      INSERT INTO "user" ("id", "name", "email", "emailVerified", "image") 
      VALUES ('test-id', 'Test User', 'test@example.com', null, 'test-image') 
      ON CONFLICT (id) DO NOTHING
      RETURNING *;
    `;

        console.log('Test insert result:', testResult);

    } catch (error) {
        console.error('Database check failed:', error.message);
    } finally {
        await queryClient.end();
    }
}

checkUserTable();
