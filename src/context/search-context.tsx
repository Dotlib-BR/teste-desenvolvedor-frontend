import { createContext, useContext, useEffect, useState } from "react";
import {
  ResponseLeafletMapper,
  ResponseLeafletPaginationMapper,
} from "../service/types";
import { getDefaultLeafletPagination } from "../service/search.service";
import { getLocalStorage, setLocalStorage } from "../helpers/utils/utils";

type SearchContext = {
  searchMode: boolean;
  setSearchMode: (value: boolean) => void;
  searchText: string;
  setSearchText: (value: string) => void;
  leafletCollection: ResponseLeafletMapper[];
  setLeafletCollection: (value: ResponseLeafletMapper[]) => void;
  searchLeafletPagination: (
    page: number,
    sarchMode: boolean,
    searchText: string
  ) => void;
  leafletCollectionPagination?: ResponseLeafletPaginationMapper;
  setLeafletCollectionPagination: (
    value: ResponseLeafletPaginationMapper
  ) => void;
  leafletFavoriteCollection: ResponseLeafletMapper[];
  setLeafletFavoriteCollection: (value: ResponseLeafletMapper[]) => void;
  addFavoriteLeaflet: (leaflet: ResponseLeafletMapper) => void;
  removeFavoriteLeaflet: (leaflet: ResponseLeafletMapper) => void;
};

export const SearchContext = createContext({} as SearchContext);

type SearchContextProviderProps = {
  children: React.ReactNode;
};

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [searchMode, setSearchMode] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [leafletCollection, setLeafletCollection] = useState<
    ResponseLeafletMapper[]
  >([]);
  const [leafletCollectionPagination, setLeafletCollectionPagination] =
    useState<ResponseLeafletPaginationMapper>();

  const [leafletFavoriteCollection, setLeafletFavoriteCollection] = useState<
    ResponseLeafletMapper[]
  >([]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const searchLeafletPagination = (
    page: number,
    searchMode: boolean,
    searchText: string
  ) => {
    scrollToTop();
    getDefaultLeafletPagination(page, searchMode, searchText).then((data) => {
      setLeafletCollectionPagination(data);
    });
  };

  const addFavoriteLeaflet = (leaflet: ResponseLeafletMapper) => {
    setLeafletFavoriteCollection([leaflet, ...leafletFavoriteCollection]);
    setLocalStorage("leafletFavoriteCollection", [
      ...leafletFavoriteCollection,
      leaflet,
    ]);
  };

  const removeFavoriteLeaflet = (leaflet: ResponseLeafletMapper) => {
    const removedFavorite = leafletFavoriteCollection.filter(
      (item) => item.id !== leaflet.id
    );
    setLeafletFavoriteCollection(removedFavorite);
    setLocalStorage("leafletFavoriteCollection", removedFavorite);
  };

  useEffect(() => {
    if (leafletCollectionPagination) {
      if (leafletFavoriteCollection.length) {
        const result = leafletCollectionPagination.data.map((item) => {
          const favoriteItem = leafletFavoriteCollection.find(
            (fav) => fav.id === item.id
          );
          return {
            ...item,
            favorite: favoriteItem ? true : false,
          };
        });
        setLeafletCollection(result);
      } else {
        setLeafletCollection(leafletCollectionPagination.data);
      }
    }
  }, [leafletCollectionPagination, leafletFavoriteCollection]);

  useEffect(() => {
    const favorites = getLocalStorage("leafletFavoriteCollection");
    if (favorites) {
      setLeafletFavoriteCollection(favorites);
    }
  }, []);

  return (
    <SearchContext.Provider
      value={{
        leafletCollection,
        setLeafletCollection,
        searchLeafletPagination,
        leafletCollectionPagination,
        setLeafletCollectionPagination,
        searchMode,
        setSearchMode,
        searchText,
        setSearchText,
        leafletFavoriteCollection,
        setLeafletFavoriteCollection,
        addFavoriteLeaflet,
        removeFavoriteLeaflet,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
