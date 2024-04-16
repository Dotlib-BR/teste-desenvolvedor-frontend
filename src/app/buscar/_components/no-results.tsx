"use client";

import Button from "@/app/_components/button";
import { ArrowLeftIcon } from "lucide-react";

/** Properties for the {@link NoResults} component. */
export interface NoResultsProperties {
  message?: React.ReactNode | undefined;
}

/** Component to display when there are no search results. */
export default function NoResults(properties: NoResultsProperties) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div>{properties.message ?? "Nenhum resultado"}</div>
      <Button onClick={() => history.back()}>
        <ArrowLeftIcon />
        Voltar
      </Button>
    </div>
  );
}
