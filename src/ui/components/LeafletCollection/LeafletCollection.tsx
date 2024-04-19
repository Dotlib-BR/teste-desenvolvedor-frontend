import { ResponseLeafletMapper } from "../../../service/types";
import { Card } from "../Card";
import "./LeafletCollection.scss";

interface LeafletCollectionProps {
  leafletCollection?: ResponseLeafletMapper[];
  title: string;
}

export const LeafletCollection = ({
  leafletCollection,
  title,
}: LeafletCollectionProps) => {
  return (
    <section className="leafletcollection-container">
      <header className="leafletcollection-header">
        <h1>{title}</h1>
      </header>
      {leafletCollection?.length ? (
        leafletCollection.map((item) => <Card key={item.id} item={item} />)
      ) : (
        <div className="without-result">Sem Resultados</div>
      )}
    </section>
  );
};
