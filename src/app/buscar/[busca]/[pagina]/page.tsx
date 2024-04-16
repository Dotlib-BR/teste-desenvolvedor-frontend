import Button from "@/app/_components/button";
import NoResults from "../../_components/no-results";
import { fetchMedications } from "../../_lib/api";

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
        <div>
          <ul>
            {results.map((medication) => (
              <li key={medication.id}>{medication.name}</li>
            ))}
          </ul>
          {pagina > 1 && (
            <Button href={`/buscar/${encodeURIComponent(busca)}/${pagina - 1}`}>
              Página anterior
            </Button>
          )}
          <Button href={`/buscar/${encodeURIComponent(busca)}/${pagina + 1}`}>
            Página seguinte
          </Button>
        </div>
      )}
    </>
  );
}
