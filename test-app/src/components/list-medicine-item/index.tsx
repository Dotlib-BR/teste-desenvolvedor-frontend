import { Medicine } from "@/types/medicines";
import "./styles.css";
import { Modal } from "../modal";
interface Props {
  item: Medicine;
}

const documentTypeDictionary: Record<string, string> = {
  PATIENT: "Paciente",
  PROFESSIONAL: "Profissional",
};

export const ListMedicineItem: React.FC<Props> = ({ item }) => {
  const convertDateToLocal = (date: string) => {
    return new Date(date).toLocaleString();
  };

  console.log(item, "item");
  return (
    <Modal
      bodyClassName="d-flex flex-col gap-lg"
      modalTitle="Detalhes do medicamento"
      renderOpenModalAction={(openModal) => (
        <div onClick={openModal} role="button" className="card-medicine-item">
          <div className="d-flex flex-col gap-sm">
            <p className="text-lg title">{item.name}</p>
            <p className="text-md">{item.company}</p>
          </div>
          <p className="text-sm">
            Publicação: {convertDateToLocal(item.published_at)}
          </p>
        </div>
      )}
    >
      <section className="gap-sm d-flex flex-col">
        <p>{item.name}</p>
        <p>{item.company}</p>
        <p>Publicação: {convertDateToLocal(item.published_at)}</p>
      </section>
      <hr />
      {item.active_principles.length > 0 && (
        <>
          <section className="flex-col d-flex gap-sm">
            <h4>Princípios Ativos:</h4>
            {item.active_principles.map((activePrinciple) => (
              <p key={activePrinciple.id}>{activePrinciple.name}</p>
            ))}
          </section>
          <hr />
        </>
      )}

      {item.documents.length > 0 && (
        <section className="flex-col d-flex gap-sm">
          <h4>Documentos: </h4>
          {item.documents.map((document) => (
            <div
              key={document.id}
              className="d-flex flex-row gap-sm items-center"
            >
              <p>{document.expedient}</p>
              <p>{documentTypeDictionary[document.type] ?? "Opss"}</p>
              <a
                target="_blank"
                href={document.url}
                className="document-link-download"
              >
                Download
              </a>
            </div>
          ))}
        </section>
      )}
    </Modal>
  );
};
