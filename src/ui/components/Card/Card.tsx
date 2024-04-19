import { ResponseLeafletMapper } from "../../../service/types";
import { RiStarLine } from "react-icons/ri";
import { RiStarFill } from "react-icons/ri";
import "./Card.scss";
import { useState } from "react";
import { useSearchContext } from "../../../context/search-context";

interface CardProps {
  item: ResponseLeafletMapper;
}

export const Card = ({ item }: CardProps) => {
  const { addFavoriteLeaflet, removeFavoriteLeaflet } = useSearchContext();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddFavoriteLeaflet = (status: boolean) => {
    if (status) {
      setIsFavorite(true);
      addFavoriteLeaflet(item);
    } else {
      setIsFavorite(false);
      removeFavoriteLeaflet(item);
    }
  };

  return (
    <article className="card-container">
      <header className="card-header">
        <h2>
          {item.name.map((item, index) => (
            <span key={index} className="card-name">
              {index === 0 ? item : `+ ${item}`}
            </span>
          ))}
        </h2>
      </header>
      <div className="medicine-info">
        <div className="info-container">
          <span className="card-title">Fabricante:</span>
          <span>{item.company}</span>
        </div>
        <div className="info-container">
          <span className="card-title">Data:</span>
          <span>{item.published_at}</span>
        </div>
        <div className="info-container">
          <span className="card-title">Substâncias Ativas:</span>
          {item.active_principles.map((item) => (
            <span key={item.id}>{item.name}</span>
          ))}
        </div>
      </div>
      <div className="documents-info">
        {item.documents.map((item) => (
          <div key={item.id}>
            <div className="info-container">
              <span className="card-title">Expediente:</span>
              <span>{item.expedient}</span>
            </div>
            <div className="info-container">
              <span className="card-title">Tipo:</span>
              <span>{item.type}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="favorite-container">
        {isFavorite || item.favorite ? (
          <RiStarFill onClick={() => handleAddFavoriteLeaflet(false)} />
        ) : (
          <RiStarLine onClick={() => handleAddFavoriteLeaflet(true)} />
        )}
      </div>
    </article>
  );
};
