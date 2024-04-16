"use client";

import Button from "@/app/_components/button";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

/** Properties for the {@link NoResults} component. */
export interface NoResultsProperties {
  message?: React.ReactNode | undefined;
}

/** Component to display when there are no search results. */
export default function NoResults(properties: NoResultsProperties) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-4">
      <div>{properties.message ?? "Nenhum resultado"}</div>
      <Button onClick={() => router.push("/")}>
        <ArrowLeftIcon />
        Voltar
      </Button>
    </div>
  );
}
