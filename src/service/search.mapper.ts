import { breakStringByPlus, dateConverter } from "../helpers/utils/utils";
import { ResponseLeaflet } from "./types";

export const responseLeafletMapper = (items: ResponseLeaflet[]) => {
  return items.map((item) => ({
    id: item.id,
    name: breakStringByPlus(item.name),
    published_at: dateConverter(item.published_at),
    company: item.company,
    documents: item.documents,
    active_principles: item.active_principles,
    favorite: false,
  }));
};
