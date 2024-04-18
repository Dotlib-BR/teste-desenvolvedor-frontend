import axios from "axios";
import { ResponseLeaflet, ResponseLeafletMapper } from "./types";
import { responseLeafletMapper } from "./search.mapper";

export const getDefaultLeaflet = (): Promise<ResponseLeafletMapper[]> => {
  return axios
    .get<ResponseLeaflet[]>(`http://localhost:3000/data`)
    .then((result) => responseLeafletMapper(result.data))
    .catch();
};
