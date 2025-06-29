"use client";

import { type AppRouter } from "@/server/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { TRPCProvider as TRPCProviderBase } from "./setup";

function getBaseUrl() {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
}

interface TRPCProviderProps {
  children: React.ReactNode;
}

export function TRPCProvider({ children }: TRPCProviderProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
      },
    },
  }));

  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [
        // 将多个 tRPC 请求合并成一个 HTTP 请求
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          // Optional: Add headers if needed
          async headers() {
            return {
              // Add authentication headers if needed
            };
          },
        }),
      ],
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProviderBase
        trpcClient={trpcClient}
        queryClient={queryClient}
      >
        {children}
      </TRPCProviderBase>
    </QueryClientProvider>
  );
}
