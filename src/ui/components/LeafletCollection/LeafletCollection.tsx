import { ResponseLeafletMapper } from "../../../service/types";
import { Card } from "../Card";
import "./LeafletCollection.scss";

interface LeafletCollectionProps {
  leafletList: ResponseLeafletMapper[];
  title: string;
}

export const LeafletCollection = ({
  leafletList,
  title,
}: LeafletCollectionProps) => {
  return (
    <section className="leafletcollection-container">
      <header className="leafletcollection-header">
        <h1>{title}</h1>
      </header>
      {leafletList.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </section>
  );
};
