"use client";

import { useParams } from "next/navigation";
import NoResults from "../_components/no-results";

export default function Page() {
  const busca = (() => {
    const { busca } = useParams();
    if (typeof busca !== "string" && !(busca instanceof String))
      throw new TypeError("busca must be a string.");
    return decodeURIComponent(busca as string);
  })();

  return (
    <NoResults
      message={`Você buscou por ${busca}, mas ainda não temos resultados pois estamos em construção.`}
    ></NoResults>
  );
}
