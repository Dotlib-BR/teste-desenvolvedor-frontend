import { Body } from "./medicineStyle";
import dateConverter from "../../utils/dateConverter";
import extractActivePrinciplesNames  from "../../utils/activePrincipes";
import downloadIcon from "../../assets/download-outline.svg"

export default function Medicine({ name, company, published_at, active_principles, url, setIsPopupOpened, setPdfUrl}) {
  let convertedDate = dateConverter(published_at);
  let activePrinciples = extractActivePrinciplesNames(active_principles);
  

  function downloadPdf(url){
    setPdfUrl(url);
    setIsPopupOpened(true)
  }

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
      <button onClick={() => downloadPdf(url)}>Baixar PDF<img src={downloadIcon} alt="download icon" /></button>
    </Body>
  );
}
