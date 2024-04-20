import { Body, PopupContent, Buttons, Button, CloseIcon } from "./popupStyle";
import pdfDownloader from "../../utils/pdfDownloader";
import closeIcon from "../../assets/close-outline.svg"

export default function Popup({pdfUrl, setIsPopupOpened}) {

  function downloadPdf(pdfType) {
    if (pdfType === "medico") {
      pdfDownloader(pdfUrl[0]);
    } else pdfDownloader(pdfUrl[1]);
  }

  return (
    <Body>
      <PopupContent>
      <CloseIcon src={closeIcon} alt="close icon" onClick={() => setIsPopupOpened(false)}/>
        <p>Escolha a opção:</p>
        <Buttons>
          <Button onClick={() => downloadPdf("paciente")}>Paciente</Button>
          <Button onClick={() => downloadPdf("medico")}>Médico</Button>
        </Buttons>
      </PopupContent>
    </Body>
  );
}
