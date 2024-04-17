import { useContext } from "react";
import { MedicationsContext } from "./MedicationsContext";

export const useMedications = () => {
  const context = useContext(MedicationsContext);

  if (context === undefined) {
    throw new Error("useMedications must be used within a MedicationsContextProvider");
  }

  return context;
}