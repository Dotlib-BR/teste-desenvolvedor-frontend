//Types
import { IMedicineData } from "../types";

//Format
import unidecode from "unidecode";

export const searchedData = (
  data: IMedicineData[],
  inputValue: string
): IMedicineData[] => {
  const normalizedInputValue = unidecode(inputValue.toLowerCase());

  return data.filter((item) => {
    const normalizedName = unidecode(item.name.toLowerCase());
    const normalizedCompany = unidecode(item.company.toLowerCase());

    return (
      normalizedName.includes(normalizedInputValue) ||
      normalizedCompany.includes(normalizedInputValue)
    );
  });
};

export const orderByPublishedAt = (data: IMedicineData[], order: string) => {
  return data.sort((a, b) => {
    const dateA = new Date(a.published_at);
    const dateB = new Date(b.published_at);

    if (order === "oldest") {
      return dateA.getTime() - dateB.getTime();
    } else if (order === "latest") {
      return dateB.getTime() - dateA.getTime();
    }
    return 0;
  });
};

export const formatToPtBrDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
};
