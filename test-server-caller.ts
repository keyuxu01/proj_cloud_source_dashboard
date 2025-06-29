/**
 * Test script to verify the new createCallerFactory implementation
 */
import { createServerCaller } from "@/server/trpc/serverCaller";

async function testServerCaller() {
  try {
    console.log("🧪 Testing new createCallerFactory implementation...");

    const caller = await createServerCaller();
    console.log("✅ Caller created successfully");

    // Test hello call
    const hello = await caller.hello();
    console.log("✅ Hello call successful:", hello);

    // Test health call
    const health = await caller.general.health();
    console.log("✅ Health call successful:", health);

    console.log(
      "🎉 All tests passed! createCallerFactory is working correctly."
    );
  } catch (error) {
    console.error("❌ Test failed:", error);
    process.exit(1);
  }
}

// Only run if this file is executed directly
if (require.main === module) {
  testServerCaller();
}
