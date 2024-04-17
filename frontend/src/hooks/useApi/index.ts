import { IData } from '@/components/showData';
import { ISearchContext } from '@/contexts/searchContext';
import axios from 'axios';

interface IUseApi {
  searchType: ISearchContext['searchType'];
  searchValue: string;
  page?: number;
}

export function useApi() {
  async function fetchData({ searchType, searchValue, page = 1 }: IUseApi) {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}?${searchType}=${searchValue.replaceAll(' ', '%20').toUpperCase()}&_page=${page}`;

    const result = await axios.get<IData>(url);

    return result.data;
  }

  return fetchData;
}
