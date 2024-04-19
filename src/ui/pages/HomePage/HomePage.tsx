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
      <LeafletCollection
        title="Resultados"
        leafletCollection={leafletCollection}
      />
      {leafletCollectionPagination?.data.length && (
        <Pagination items={leafletCollectionPagination} />
      )}
    </Layout>
  );
};
