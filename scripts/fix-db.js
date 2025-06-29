const postgres = require('postgres');
const dotenv = require('dotenv');

// Load environment variables from .env.development
dotenv.config({ path: '.env.development' });

const queryClient = postgres(process.env.DATABASE_URL);

async function fixUserTable() {
    try {
        console.log('Fixing user table createAt column...');

        // Add default value for existing rows first
        await queryClient`
      UPDATE "user" 
      SET "createAt" = CURRENT_TIMESTAMP 
      WHERE "createAt" IS NULL;
    `;

        // Then add the default constraint for future inserts
        await queryClient`
      ALTER TABLE "user" 
      ALTER COLUMN "createAt" 
      SET DEFAULT CURRENT_TIMESTAMP;
    `;

        console.log('✅ Successfully fixed user table createAt column');

        // Verify the fix
        const result = await queryClient`
      SELECT column_name, data_type, is_nullable, column_default 
      FROM information_schema.columns 
      WHERE table_name = 'user' AND column_name = 'createAt';
    `;

        console.log('Updated createAt column info:');
        console.table(result);

    } catch (error) {
        console.error('❌ Fix failed:', error.message);
    } finally {
        await queryClient.end();
    }
}

fixUserTable();
