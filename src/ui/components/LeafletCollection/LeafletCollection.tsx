import { ResponseLeafletMapper } from "../../../service/types";
import { Card } from "../Card";
import "./LeafletCollection.scss";

interface LeafletCollectionProps {
  leafletList: ResponseLeafletMapper[];
}

export const LeafletCollection = ({ leafletList }: LeafletCollectionProps) => {
  return (
    <section className="leafletcollection-container">
      <header className="leafletcollection-header">
        <h1>Resultados</h1>
      </header>
      {leafletList.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </section>
  );
};
