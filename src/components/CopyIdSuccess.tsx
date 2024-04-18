import Check from "../assets/Icons/Check";
import { useMedicineData } from "../context/MedicineDataContext";

const CopyIdSuccess = () => {
  const { isSuccesModalOpen } = useMedicineData();

  return (
    <div className={`copy-id ${isSuccesModalOpen ? "open" : ""}`}>
      <Check />
      <p>ID do medicamento copiado!</p>
    </div>
  );
};

export default CopyIdSuccess;
