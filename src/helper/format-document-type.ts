export const formatDocumentType = (value: "PROFESSIONAL" | "PATIENT") => {
  if (value === "PATIENT") return "Paciente"
  return "Profissional"
}
