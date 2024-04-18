import { Body } from "./medicineStyle";
import dateConverter from "../../utils/dateConverter"

export default function Medicine({ name, company, published_at }) {

  let convertedDate = dateConverter(published_at)

  return (
    <Body>
      <div>
        <span className="description">Remédio: </span> <span>{name}</span>
      </div>
      <div>
        <span className="description">Laboratório: </span>{" "}
        <span>{company}</span>
      </div>
      <div>
        <span className="description">Data de publicação:</span>{" "}
        <span>{convertedDate}</span>
      </div>
    </Body>
  );
}
