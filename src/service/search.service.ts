import axios from "axios";
import {
  ResponseLeaflet,
  ResponseLeafletMapper,
  ResponseLeafletPagination,
  ResponseLeafletPaginationMapper,
} from "./types";
import {
  responseLeafletMapper,
  responseLeafletPaginationMapper,
} from "./search.mapper";
import { converterTextToDefault } from "../helpers/utils/utils";

export const getDefaultLeaflet = (): Promise<ResponseLeafletMapper[]> => {
  return axios
    .get<ResponseLeaflet[]>(`http://localhost:3000/data`)
    .then((result) => responseLeafletMapper(result.data))
    .catch();
};

export const getDefaultLeafletPagination = (
  page: number,
  searhMode: boolean,
  text: string
): Promise<ResponseLeafletPaginationMapper> => {
  const toDefaultText = converterTextToDefault(text);

  const mode = searhMode
    ? `company=${toDefaultText}&`
    : `name=${toDefaultText}&`;

  return axios
    .get<ResponseLeafletPagination>(
      `http://localhost:3000/data?${mode}_sort=-published_at&_page=${page}&_per_page=12`
    )
    .then((result) => responseLeafletPaginationMapper(result.data))
    .catch();
};
