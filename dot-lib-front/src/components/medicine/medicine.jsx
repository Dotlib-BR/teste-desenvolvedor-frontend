import { Body } from "./medicineStyle";
import dateConverter from "../../utils/dateConverter";
import extractActivePrinciplesNames  from "../../utils/activePrincipes";

export default function Medicine({ name, company, published_at, active_principles }) {
  let convertedDate = dateConverter(published_at);
  let activePrinciples = extractActivePrinciplesNames(active_principles);

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
        <span className="description">Princípio ativo:</span>{" "}
        <span className="activePrinciples">{activePrinciples}</span>
      </div>
      <div>
        <span className="description">Data de publicação:</span>{" "}
        <span>{convertedDate}</span>
      </div>
    </Body>
  );
}
