import { IMedicine } from "./medicine";

export interface ApiPaginatedResponse {
    first: number | null;
    prev: number | null;
    next: number | null;
    last: number;
    pages: number;
    items: number;
    data: IMedicine[] | undefined;
  }