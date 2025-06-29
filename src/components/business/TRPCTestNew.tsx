"use client";

import { useTRPCClient } from "@/utils/trpc/hooks";
import { useQuery } from "@tanstack/react-query";

export function TRPCTestNew() {
  const trpcClient = useTRPCClient();

  // Test the new router structure
  const {
    data: helloData,
    isLoading: helloLoading,
    error: helloError,
  } = useQuery({
    queryKey: ["hello"],
    queryFn: () => trpcClient.hello.query(),
  });

  const {
    data: profileData,
    isLoading: profileLoading,
    error: profileError,
  } = useQuery({
    queryKey: ["user", "profile"],
    queryFn: () => trpcClient.user.getProfile.query(),
  });

  const {
    data: healthData,
    isLoading: healthLoading,
    error: healthError,
  } = useQuery({
    queryKey: ["health"],
    queryFn: () => trpcClient.general.health.query(),
  });

  if (helloLoading || profileLoading || healthLoading)
    return <div>Loading tRPC tests...</div>;
  if (helloError || profileError || healthError) {
    return (
      <div>
        tRPC Error: {(helloError || profileError || healthError)?.message}
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4 border border-purple-500 rounded">
      <h3 className="font-bold text-purple-600">
        New tRPC Router Structure Test
      </h3>

      {/* Legacy hello endpoint */}
      <div className="p-2 bg-blue-50 rounded">
        <strong>Legacy Hello:</strong> {helloData}
      </div>

      {/* User profile */}
      <div className="p-2 bg-green-50 rounded">
        <strong>User Profile:</strong>
        <pre>{JSON.stringify(profileData, null, 2)}</pre>
      </div>

      {/* Health check */}
      <div className="p-2 bg-yellow-50 rounded">
        <strong>Health Check:</strong>
        <pre>{JSON.stringify(healthData, null, 2)}</pre>
      </div>

      <p className="text-sm text-gray-600">
        Testing new router structure: user.*, general.*, and legacy routes
      </p>
    </div>
  );
}
