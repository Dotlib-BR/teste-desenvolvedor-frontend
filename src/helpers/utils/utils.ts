import { DocumentsType } from "../../service/types";

export const dateConverter = (date: string) => {
  const newDate = new Date(date);

  const day = String(newDate.getUTCDate()).padStart(2, "0");
  const month = String(newDate.getUTCMonth() + 1).padStart(2, "0");
  const year = newDate.getUTCFullYear();
  const hours = String(newDate.getUTCHours()).padStart(2, "0");
  const minutes = String(newDate.getUTCMinutes()).padStart(2, "0");
  const seconds = String(newDate.getUTCSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

export const breakStringByPlus = (value: string) => {
  return value.split("+");
};

export const orderDocumentsByType = (data: DocumentsType[]) => {
  const orderDocuments = data.sort((a, b) => {
    if (a.type === "PROFESSIONAL" && b.type === "PATIENT") {
      return -1;
    } else if (a.type === "PATIENT" && b.type === "PROFESSIONAL") {
      return 1;
    }
    return 0;
  });
  return orderDocuments;
};

export const converterTextToDefault = (text: string) => {
  const toUpText = text.toLocaleUpperCase();
  return toUpText.replace(/ /g, "%20");
};
