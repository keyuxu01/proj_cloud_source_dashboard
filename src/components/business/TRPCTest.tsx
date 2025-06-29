"use client";

import { useTRPCClient } from "@/utils/trpc/hooks";
import { useQuery } from "@tanstack/react-query";

export function TRPCTest() {
  // 使用 useTRPCClient 获取原始客户端
  const trpcClient = useTRPCClient();

  // 使用 React Query 包装 tRPC 调用
  const { data, isLoading, error } = useQuery({
    queryKey: ["hello"],
    queryFn: () => trpcClient.hello.query(),
  });

  if (isLoading) return <div>Loading tRPC test...</div>;
  if (error) return <div>tRPC Error: {(error as Error).message}</div>;

  return (
    <div className="p-4 border border-green-500 rounded">
      <h3 className="font-bold text-green-600">tRPC Test Result:</h3>
      <p>{data}</p>
      <p className="text-sm text-gray-600 mt-2">
        使用 useTRPCClient() + useQuery() 的方式
      </p>
    </div>
  );
}
