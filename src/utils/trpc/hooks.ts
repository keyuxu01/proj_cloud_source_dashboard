// Re-export tRPC hooks for easy importing throughout the app
export { useTRPC, useTRPCClient } from "./setup";

// Usage examples:
// const { data, isLoading } = useTRPC().hello.useQuery();
// const trpcClient = useTRPCClient();
