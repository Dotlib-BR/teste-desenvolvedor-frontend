"use client";
import type { PropsWithChildren, FC } from "react";
import { QueryClient, QueryClientProvider as QueryProvider } from "react-query";

const queryClient = new QueryClient();

export const QueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
  return <QueryProvider client={queryClient}>{children}</QueryProvider>;
};
