import { useEffect } from "react";
import { LeafletCollection, Pagination, SearchBar } from "../../components";
import { Layout } from "../../components/Layout";
import { useSearchContext } from "../../../context/search-context";

export const HomePage = () => {
  const {
    leafletCollection,
    searchLeafletPagination,
    leafletCollectionPagination,
  } = useSearchContext();

  useEffect(() => {
    if (!leafletCollectionPagination) {
      searchLeafletPagination(1, false, "");
    }
  }, [searchLeafletPagination, leafletCollectionPagination]);

  return (
    <Layout>
      <SearchBar />
      {leafletCollection.length && (
        <LeafletCollection title="Resultados" leafletList={leafletCollection} />
      )}
      {leafletCollectionPagination && (
        <Pagination items={leafletCollectionPagination} />
      )}
    </Layout>
  );
};
