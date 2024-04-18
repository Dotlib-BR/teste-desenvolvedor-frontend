import {
  breakStringByPlus,
  dateConverter,
  orderDocumentsByType,
} from "../helpers/utils/utils";
import { ResponseLeaflet, ResponseLeafletPagination } from "./types";

export const responseLeafletMapper = (items: ResponseLeaflet[]) => {
  return items.map((item) => ({
    id: item.id,
    name: breakStringByPlus(item.name),
    published_at: dateConverter(item.published_at),
    company: item.company,
    documents: orderDocumentsByType(item.documents),
    active_principles: item.active_principles,
    favorite: false,
  }));
};

export const responseLeafletPaginationMapper = (
  items: ResponseLeafletPagination
) => {
  return {
    ...items,
    data: responseLeafletMapper(items.data),
  };
};
