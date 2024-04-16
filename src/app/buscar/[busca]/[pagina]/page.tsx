import Button from "@/app/_components/button";
import NoResults from "../../_components/no-results";
import { fetchMedications } from "../../_lib/api";
import MedicationPreview from "./_components/medication-preview";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export interface PageProperties {
  params: {
    busca: string;
    pagina: string;
  };
}

export default async function Page(properties: PageProperties) {
  const busca = decodeURIComponent(properties.params.busca);
  const pagina = Number.parseInt(properties.params.pagina);

  const results = await fetchMedications(busca, pagina);

  return (
    <>
      {results.length === 0 ? (
        <NoResults
          message={`Você buscou por "${busca}" na página ${pagina}, mas ainda não temos resultados nessa página.`}
        ></NoResults>
      ) : (
        <div className="flex w-[768px] max-w-full flex-col gap-8">
          <div className="flex flex-row-reverse justify-between gap-2">
            <Button href={`/buscar/${encodeURIComponent(busca)}/${pagina + 1}`}>
              <span className="sr-only sm:not-sr-only">Página seguinte</span>
              <ArrowRightIcon />
            </Button>
            {pagina > 1 && (
              <Button
                href={`/buscar/${encodeURIComponent(busca)}/${pagina - 1}`}
              >
                <ArrowLeftIcon />
                <span className="sr-only sm:not-sr-only">Página anterior</span>
              </Button>
            )}
          </div>
          <ul className="flex flex-col gap-8">
            {results.map((medication) => (
              <li key={medication.id} className="contents">
                <MedicationPreview medication={medication}></MedicationPreview>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
