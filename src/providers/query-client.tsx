"use client"

import { ReactNode } from "react"

import { queryClient } from "@/lib/query-client"

import { QueryClientProvider as Provider } from "@tanstack/react-query"

interface QueryClientProviderProps {
	children: ReactNode
}

export const QueryClientProvider = ({ children }: QueryClientProviderProps) => {
	return <Provider client={queryClient}>{children}</Provider>
}
