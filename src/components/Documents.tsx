import { useEffect, useRef, useState } from "react";
import Dots from "../assets/Icons/Dots";
import { Document } from "../context/MedicineDataContext.d";
import { useMedicineData } from "../context/MedicineDataContext";

interface IDocuments {
  documents: Document[];
  medicineId: string;
}

const Documents = ({ documents, medicineId }: IDocuments) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsSuccesModalOpen } = useMedicineData();

  const modalRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        !dotsRef.current!.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleCopyId = (medicineId: string) => {
    navigator.clipboard.writeText(medicineId);

    setIsOpen(false);

    setIsSuccesModalOpen(true);

    setTimeout(() => {
      setIsSuccesModalOpen(false);
    }, 3000);
  };

  return (
    <>
      <div className="documents-container">
        <div
          ref={dotsRef}
          className={`documents-container__dots ${isOpen ? "open" : ""}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Dots />
        </div>
        <div
          ref={modalRef}
          className={`documents-container__documents ${isOpen ? "open" : ""}`}
        >
          <span>Ações</span>

          <button onClick={() => handleCopyId(medicineId)}>Copiar ID</button>

          <div className="documents-container__documents_separator" />

          {documents.map((document) => (
            <a
              key={document.id}
              href="#"
              download={document.url}
              onClick={() => setIsOpen(false)}
            >
              Download bula{" "}
              {document.type === "PROFESSIONAL" ? "profissional" : "paciente"}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Documents;
